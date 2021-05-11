__d("IntervalTrackingBoundedBuffer", ["CircularBuffer", "ErrorPubSub"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = 5e3;
	a = function () {
		function a(a) {
			var c = this;
			this.$6 = 0;
			if (a != null) {
				if (a <= 0) throw new Error("Size for a buffer must be greater than zero.")
			} else a = h;
			this.$4 = a;
			this.$1 = new(b("CircularBuffer"))(a);
			this.$1.onEvict(function () {
				c.$6++
			});
			this.$2 = [];
			this.$3 = 1;
			this.$5 = 0
		}
		var c = a.prototype;
		c.open = function () {
			var a = this,
				b = this.$3++,
				c = !1,
				d, e = this.$5,
				f = {
					id: b,
					startIdx: e,
					hasOverflown: function () {
						return f.getOverflowSize() > 0
					},
					getOverflowSize: function () {
						return d != null ? d : Math.max(a.$6 - e, 0)
					},
					close: function () {
						if (c) return [];
						else {
							c = !0;
							d = a.$6 - e;
							return a.$7(b)
						}
					}
				};
			this.$2.push(f);
			return f
		};
		c.pushElement = function (a) {
			this.$2.length > 0 && (this.$1.write(a), this.$5++);
			return this
		};
		c.isActive = function () {
			return this.$2.length > 0
		};
		c.$8 = function (a) {
			return Math.max(a - this.$6, 0)
		};
		c.$7 = function (a) {
			var c, d, e, f;
			for (var h = 0; h < this.$2.length; h++) {
				var i = this.$2[h],
					j = i.startIdx;
				i = i.id;
				i === a ? (e = h, f = j) : (d == null || j < d) && (d = j);
				(c == null || j < c) && (c = j)
			}
			if (e == null || c == null || f == null) {
				(g || (g = b("ErrorPubSub"))).reportError(new Error("messed up state inside IntervalTrackingBoundedBuffer"));
				return []
			}
			this.$2.splice(e, 1);
			i = this.$8(f);
			j = this.$1.read().slice(i);
			h = this.$8(d == null ? this.$5 : d) - this.$8(c);
			h > 0 && (this.$1.dropFirst(h), this.$6 += h);
			return j
		};
		return a
	}();
	e.exports = a
}), null);