__d("flatbuffers", [], (function(a, b, c, d, e, f) {
	var g = {};
	g.Offset;
	g.Table;
	g.SIZEOF_SHORT = 2;
	g.SIZEOF_INT = 4;
	g.FILE_IDENTIFIER_LENGTH = 4;
	g.Encoding = {
		UTF8_BYTES: 1,
		UTF16_STRING: 2
	};
	g.int32 = new Int32Array(2);
	g.float32 = new Float32Array(g.int32.buffer);
	g.float64 = new Float64Array(g.int32.buffer);
	g.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
	g.Long = function(a, b) {
		this.low = a | 0, this.high = b | 0
	};
	g.Long.create = function(a, b) {
		return a == 0 && b == 0 ? g.Long.ZERO : new g.Long(a, b)
	};
	g.Long.prototype.toFloat64 = function() {
		return (this.low >>> 0) + this.high * 4294967296
	};
	g.Long.prototype.equals = function(a) {
		return this.low == a.low && this.high == a.high
	};
	g.Long.ZERO = new g.Long(0, 0);
	g.Builder = function(a) {
		if (!a) var b = 1024;
		else var b = a;
		this.bb = g.ByteBuffer.allocate(b);
		this.space = b;
		this.minalign = 1;
		this.vtable = null;
		this.vtable_in_use = 0;
		this.isNested = !1;
		this.object_start = 0;
		this.vtables = [];
		this.vector_num_elems = 0;
		this.force_defaults = !1
	};
	g.Builder.prototype.forceDefaults = function(a) {
		this.force_defaults = a
	};
	g.Builder.prototype.dataBuffer = function() {
		return this.bb
	};
	g.Builder.prototype.asUint8Array = function() {
		return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset())
	};
	g.Builder.prototype.prep = function(a, b) {
		a > this.minalign && (this.minalign = a);
		var c = ~(this.bb.capacity() - this.space + b) + 1 & a - 1;
		while (this.space < c + a + b) {
			var d = this.bb.capacity();
			this.bb = g.Builder.growByteBuffer(this.bb);
			this.space += this.bb.capacity() - d
		}
		this.pad(c)
	};
	g.Builder.prototype.pad = function(a) {
		for (var b = 0; b < a; b++) this.bb.writeInt8(--this.space, 0)
	};
	g.Builder.prototype.writeInt8 = function(a) {
		this.bb.writeInt8(this.space -= 1, a)
	};
	g.Builder.prototype.writeInt16 = function(a) {
		this.bb.writeInt16(this.space -= 2, a)
	};
	g.Builder.prototype.writeInt32 = function(a) {
		this.bb.writeInt32(this.space -= 4, a)
	};
	g.Builder.prototype.writeInt64 = function(a) {
		this.bb.writeInt64(this.space -= 8, a)
	};
	g.Builder.prototype.writeFloat32 = function(a) {
		this.bb.writeFloat32(this.space -= 4, a)
	};
	g.Builder.prototype.writeFloat64 = function(a) {
		this.bb.writeFloat64(this.space -= 8, a)
	};
	g.Builder.prototype.addInt8 = function(a) {
		this.prep(1, 0), this.writeInt8(a)
	};
	g.Builder.prototype.addInt16 = function(a) {
		this.prep(2, 0), this.writeInt16(a)
	};
	g.Builder.prototype.addInt32 = function(a) {
		this.prep(4, 0), this.writeInt32(a)
	};
	g.Builder.prototype.addInt64 = function(a) {
		this.prep(8, 0), this.writeInt64(a)
	};
	g.Builder.prototype.addFloat32 = function(a) {
		this.prep(4, 0), this.writeFloat32(a)
	};
	g.Builder.prototype.addFloat64 = function(a) {
		this.prep(8, 0), this.writeFloat64(a)
	};
	g.Builder.prototype.addFieldInt8 = function(a, b, c) {
		(this.force_defaults || b != c) && (this.addInt8(b), this.slot(a))
	};
	g.Builder.prototype.addFieldInt16 = function(a, b, c) {
		(this.force_defaults || b != c) && (this.addInt16(b), this.slot(a))
	};
	g.Builder.prototype.addFieldInt32 = function(a, b, c) {
		(this.force_defaults || b != c) && (this.addInt32(b), this.slot(a))
	};
	g.Builder.prototype.addFieldInt64 = function(a, b, c) {
		(this.force_defaults || !b.equals(c)) && (this.addInt64(b), this.slot(a))
	};
	g.Builder.prototype.addFieldFloat32 = function(a, b, c) {
		(this.force_defaults || b != c) && (this.addFloat32(b), this.slot(a))
	};
	g.Builder.prototype.addFieldFloat64 = function(a, b, c) {
		(this.force_defaults || b != c) && (this.addFloat64(b), this.slot(a))
	};
	g.Builder.prototype.addFieldOffset = function(a, b, c) {
		(this.force_defaults || b != c) && (this.addOffset(b), this.slot(a))
	};
	g.Builder.prototype.addFieldStruct = function(a, b, c) {
		b != c && (this.nested(b), this.slot(a))
	};
	g.Builder.prototype.nested = function(a) {
		if (a != this.offset()) throw new Error("FlatBuffers: struct must be serialized inline.")
	};
	g.Builder.prototype.notNested = function() {
		if (this.isNested) throw new Error("FlatBuffers: object serialization must not be nested.")
	};
	g.Builder.prototype.slot = function(a) {
		this.vtable[a] = this.offset()
	};
	g.Builder.prototype.offset = function() {
		return this.bb.capacity() - this.space
	};
	g.Builder.growByteBuffer = function(a) {
		var b = a.capacity();
		if (b & 3221225472) throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
		var c = b << 1,
			d = g.ByteBuffer.allocate(c);
		d.setPosition(c - b);
		d.bytes().set(a.bytes(), c - b);
		return d
	};
	g.Builder.prototype.addOffset = function(a) {
		this.prep(g.SIZEOF_INT, 0), this.writeInt32(this.offset() - a + g.SIZEOF_INT)
	};
	g.Builder.prototype.startObject = function(a) {
		this.notNested();
		this.vtable == null && (this.vtable = []);
		this.vtable_in_use = a;
		for (var b = 0; b < a; b++) this.vtable[b] = 0;
		this.isNested = !0;
		this.object_start = this.offset()
	};
	g.Builder.prototype.endObject = function() {
		if (this.vtable == null || !this.isNested) throw new Error("FlatBuffers: endObject called without startObject");
		this.addInt32(0);
		var a = this.offset();
		for (var b = this.vtable_in_use - 1; b >= 0; b--) this.addInt16(this.vtable[b] != 0 ? a - this.vtable[b] : 0);
		var c = 2;
		this.addInt16(a - this.object_start);
		this.addInt16((this.vtable_in_use + c) * g.SIZEOF_SHORT);
		c = 0;
		outer_loop: for (var b = 0; b < this.vtables.length; b++) {
			var d = this.bb.capacity() - this.vtables[b],
				e = this.space,
				f = this.bb.readInt16(d);
			if (f == this.bb.readInt16(e)) {
				for (var h = g.SIZEOF_SHORT; h < f; h += g.SIZEOF_SHORT)
					if (this.bb.readInt16(d + h) != this.bb.readInt16(e + h)) continue outer_loop;
				c = this.vtables[b];
				break
			}
		}
		c ? (this.space = this.bb.capacity() - a, this.bb.writeInt32(this.space, c - a)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - a, this.offset() - a));
		this.isNested = !1;
		return a
	};
	g.Builder.prototype.finish = function(a, b) {
		if (b) {
			b = b;
			this.prep(this.minalign, g.SIZEOF_INT + g.FILE_IDENTIFIER_LENGTH);
			if (b.length != g.FILE_IDENTIFIER_LENGTH) throw new Error("FlatBuffers: file identifier must be length " + g.FILE_IDENTIFIER_LENGTH);
			for (var c = g.FILE_IDENTIFIER_LENGTH - 1; c >= 0; c--) this.writeInt8(b.charCodeAt(c))
		}
		this.prep(this.minalign, g.SIZEOF_INT);
		this.addOffset(a);
		this.bb.setPosition(this.space)
	};
	g.Builder.prototype.requiredField = function(a, b) {
		a = this.bb.capacity() - a;
		a = a - this.bb.readInt32(a);
		a = this.bb.readInt16(a + b) != 0;
		if (!a) throw new Error("FlatBuffers: field " + b + " must be set")
	};
	g.Builder.prototype.startVector = function(a, b, c) {
		this.notNested(), this.vector_num_elems = b, this.prep(g.SIZEOF_INT, a * b), this.prep(c, a * b)
	};
	g.Builder.prototype.endVector = function() {
		this.writeInt32(this.vector_num_elems);
		return this.offset()
	};
	g.Builder.prototype.createString = function(a) {
		if (a instanceof Uint8Array) var b = a;
		else {
			var b = [],
				c = 0;
			while (c < a.length) {
				var d, e = a.charCodeAt(c++);
				if (e < 55296 || e >= 56320) d = e;
				else {
					var f = a.charCodeAt(c++);
					d = (e << 10) + f + (65536 - (55296 << 10) - 56320)
				}
				d < 128 ? b.push(d) : (d < 2048 ? b.push(d >> 6 & 31 | 192) : (d < 65536 ? b.push(d >> 12 & 15 | 224) : b.push(d >> 18 & 7 | 240, d >> 12 & 63 | 128), b.push(d >> 6 & 63 | 128)), b.push(d & 63 | 128))
			}
		}
		this.addInt8(0);
		this.startVector(1, b.length, 1);
		this.bb.setPosition(this.space -= b.length);
		for (var c = 0, e = this.space, f = this.bb.bytes(); c < b.length; c++) f[e++] = b[c];
		return this.endVector()
	};
	g.Builder.prototype.createLong = function(a, b) {
		return g.Long.create(a, b)
	};
	g.ByteBuffer = function(a) {
		this.bytes_ = a, this.position_ = 0
	};
	g.ByteBuffer.allocate = function(a) {
		return new g.ByteBuffer(new Uint8Array(a))
	};
	g.ByteBuffer.prototype.bytes = function() {
		return this.bytes_
	};
	g.ByteBuffer.prototype.position = function() {
		return this.position_
	};
	g.ByteBuffer.prototype.setPosition = function(a) {
		this.position_ = a
	};
	g.ByteBuffer.prototype.capacity = function() {
		return this.bytes_.length
	};
	g.ByteBuffer.prototype.readInt8 = function(a) {
		return this.readUint8(a) << 24 >> 24
	};
	g.ByteBuffer.prototype.readUint8 = function(a) {
		return this.bytes_[a]
	};
	g.ByteBuffer.prototype.readInt16 = function(a) {
		return this.readUint16(a) << 16 >> 16
	};
	g.ByteBuffer.prototype.readUint16 = function(a) {
		return this.bytes_[a] | this.bytes_[a + 1] << 8
	};
	g.ByteBuffer.prototype.readInt32 = function(a) {
		return this.bytes_[a] | this.bytes_[a + 1] << 8 | this.bytes_[a + 2] << 16 | this.bytes_[a + 3] << 24
	};
	g.ByteBuffer.prototype.readUint32 = function(a) {
		return this.readInt32(a) >>> 0
	};
	g.ByteBuffer.prototype.readInt64 = function(a) {
		return new g.Long(this.readInt32(a), this.readInt32(a + 4))
	};
	g.ByteBuffer.prototype.readUint64 = function(a) {
		return new g.Long(this.readUint32(a), this.readUint32(a + 4))
	};
	g.ByteBuffer.prototype.readFloat32 = function(a) {
		g.int32[0] = this.readInt32(a);
		return g.float32[0]
	};
	g.ByteBuffer.prototype.readFloat64 = function(a) {
		g.int32[g.isLittleEndian ? 0 : 1] = this.readInt32(a);
		g.int32[g.isLittleEndian ? 1 : 0] = this.readInt32(a + 4);
		return g.float64[0]
	};
	g.ByteBuffer.prototype.writeInt8 = function(a, b) {
		this.bytes_[a] = b
	};
	g.ByteBuffer.prototype.writeUint8 = function(a, b) {
		this.bytes_[a] = b
	};
	g.ByteBuffer.prototype.writeInt16 = function(a, b) {
		this.bytes_[a] = b, this.bytes_[a + 1] = b >> 8
	};
	g.ByteBuffer.prototype.writeUint16 = function(a, b) {
		this.bytes_[a] = b, this.bytes_[a + 1] = b >> 8
	};
	g.ByteBuffer.prototype.writeInt32 = function(a, b) {
		this.bytes_[a] = b, this.bytes_[a + 1] = b >> 8, this.bytes_[a + 2] = b >> 16, this.bytes_[a + 3] = b >> 24
	};
	g.ByteBuffer.prototype.writeUint32 = function(a, b) {
		this.bytes_[a] = b, this.bytes_[a + 1] = b >> 8, this.bytes_[a + 2] = b >> 16, this.bytes_[a + 3] = b >> 24
	};
	g.ByteBuffer.prototype.writeInt64 = function(a, b) {
		this.writeInt32(a, b.low), this.writeInt32(a + 4, b.high)
	};
	g.ByteBuffer.prototype.writeUint64 = function(a, b) {
		this.writeUint32(a, b.low), this.writeUint32(a + 4, b.high)
	};
	g.ByteBuffer.prototype.writeFloat32 = function(a, b) {
		g.float32[0] = b, this.writeInt32(a, g.int32[0])
	};
	g.ByteBuffer.prototype.writeFloat64 = function(a, b) {
		g.float64[0] = b, this.writeInt32(a, g.int32[g.isLittleEndian ? 0 : 1]), this.writeInt32(a + 4, g.int32[g.isLittleEndian ? 1 : 0])
	};
	g.ByteBuffer.prototype.__offset = function(a, b) {
		a = a - this.readInt32(a);
		return b < this.readInt16(a) ? this.readInt16(a + b) : 0
	};
	g.ByteBuffer.prototype.__union = function(a, b) {
		a.bb_pos = b + this.readInt32(b);
		a.bb = this;
		return a
	};
	g.ByteBuffer.prototype.__string = function(a, b) {
		a += this.readInt32(a);
		var c = this.readInt32(a),
			d = "",
			e = 0;
		a += g.SIZEOF_INT;
		if (b === g.Encoding.UTF8_BYTES) return this.bytes_.subarray(a, a + c);
		while (e < c) {
			var f;
			b = this.readUint8(a + e++);
			if (b < 192) f = b;
			else {
				var h = this.readUint8(a + e++);
				if (b < 224) f = (b & 31) << 6 | h & 63;
				else {
					var i = this.readUint8(a + e++);
					if (b < 240) f = (b & 15) << 12 | (h & 63) << 6 | i & 63;
					else {
						var j = this.readUint8(a + e++);
						f = (b & 7) << 18 | (h & 63) << 12 | (i & 63) << 6 | j & 63
					}
				}
			}
			f < 65536 ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode((f >> 10) + 55296, (f & (1 << 10) - 1) + 56320))
		}
		return d
	};
	g.ByteBuffer.prototype.__indirect = function(a) {
		return a + this.readInt32(a)
	};
	g.ByteBuffer.prototype.__vector = function(a) {
		return a + this.readInt32(a) + g.SIZEOF_INT
	};
	g.ByteBuffer.prototype.__vector_len = function(a) {
		return this.readInt32(a + this.readInt32(a))
	};
	g.ByteBuffer.prototype.__has_identifier = function(a) {
		if (a.length != g.FILE_IDENTIFIER_LENGTH) throw new Error("FlatBuffers: file identifier must be length " + g.FILE_IDENTIFIER_LENGTH);
		for (var b = 0; b < g.FILE_IDENTIFIER_LENGTH; b++)
			if (a.charCodeAt(b) != this.readInt8(this.position_ + g.SIZEOF_INT + b)) return !1;
		return !0
	};
	g.ByteBuffer.prototype.createLong = function(a, b) {
		return g.Long.create(a, b)
	};
	e.exports = g
}), null);