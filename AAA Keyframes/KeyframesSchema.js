__d("KeyframesSchema", [], (function(a, b, c, d, e, f) {
	var g = g || {};
	g.keyframes = g.keyframes || {};
	g.keyframes.CommandType = {
		MoveTo: 0,
		LineTo: 1,
		QuadTo: 2,
		CubicTo: 3
	};
	g.keyframes.CommandTypeName = {
		0: "MoveTo",
		1: "LineTo",
		2: "QuadTo",
		3: "CubicTo"
	};
	g.keyframes.TweenType = {
		Bezier: 0,
		Linear: 1,
		Hold: 2
	};
	g.keyframes.TweenTypeName = {
		0: "Bezier",
		1: "Linear",
		2: "Hold"
	};
	g.keyframes.VectorCompositeOrder = {
		FillStroke: 0,
		StrokeFill: 1
	};
	g.keyframes.VectorCompositeOrderName = {
		0: "FillStroke",
		1: "StrokeFill"
	};
	g.keyframes.StrokeLineCap = {
		Butt: 0,
		Round: 1,
		Square: 2
	};
	g.keyframes.StrokeLineCapName = {
		0: "Butt",
		1: "Round",
		2: "Square"
	};
	g.keyframes.StrokeLineJoin = {
		Miter: 0,
		Round: 1,
		Bevel: 2
	};
	g.keyframes.StrokeLineJoinName = {
		0: "Miter",
		1: "Round",
		2: "Bevel"
	};
	g.keyframes.TrackMatteType = {
		None: 0,
		Alpha: 1,
		Alpha_Inverted: 2
	};
	g.keyframes.TrackMatteTypeName = {
		0: "None",
		1: "Alpha",
		2: "Alpha_Inverted"
	};
	g.keyframes.GradientType = {
		Linear: 0,
		Radial: 1
	};
	g.keyframes.GradientTypeName = {
		0: "Linear",
		1: "Radial"
	};
	g.keyframes.TextWeight = {
		Thin: 0,
		UltraLight: 1,
		Light: 2,
		Book: 3,
		Medium: 4,
		SemiBold: 5,
		Bold: 6,
		UltraBold: 7,
		Heavy: 8,
		UltraHeavy: 9
	};
	g.keyframes.TextWeightName = {
		0: "Thin",
		1: "UltraLight",
		2: "Light",
		3: "Book",
		4: "Medium",
		5: "SemiBold",
		6: "Bold",
		7: "UltraBold",
		8: "Heavy",
		9: "UltraHeavy"
	};
	g.keyframes.Size = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Size.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Size.prototype.width = function() {
		return this.bb.readFloat32(this.bb_pos)
	};
	g.keyframes.Size.prototype.mutate_width = function(a) {
		var b = this.bb.__offset(this.bb_pos, 0);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Size.prototype.height = function() {
		return this.bb.readFloat32(this.bb_pos + 4)
	};
	g.keyframes.Size.prototype.mutate_height = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Size.createSize = function(a, b, c) {
		a.prep(4, 8);
		a.writeFloat32(c);
		a.writeFloat32(b);
		return a.offset()
	};
	g.keyframes.Point = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Point.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Point.getRootAsPoint = function(a, b) {
		return (b || new g.keyframes.Point()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Point.prototype.x = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Point.prototype.mutate_x = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Point.prototype.y = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Point.prototype.mutate_y = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Point.startPoint = function(a) {
		a.startObject(2)
	};
	g.keyframes.Point.addX = function(a, b) {
		a.addFieldFloat32(0, b, 0)
	};
	g.keyframes.Point.addY = function(a, b) {
		a.addFieldFloat32(1, b, 0)
	};
	g.keyframes.Point.endPoint = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Point.createPoint = function(a, b, c) {
		g.keyframes.Point.startPoint(a);
		g.keyframes.Point.addX(a, b);
		g.keyframes.Point.addY(a, c);
		return g.keyframes.Point.endPoint(a)
	};
	g.keyframes.Color = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Color.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Color.getRootAsColor = function(a, b) {
		return (b || new g.keyframes.Color()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Color.prototype.red = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? this.bb.readUint8(this.bb_pos + a) : 0
	};
	g.keyframes.Color.prototype.mutate_red = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		if (b === 0) return !1;
		this.bb.writeUint8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Color.prototype.green = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.readUint8(this.bb_pos + a) : 0
	};
	g.keyframes.Color.prototype.mutate_green = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		if (b === 0) return !1;
		this.bb.writeUint8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Color.prototype.blue = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.readUint8(this.bb_pos + a) : 0
	};
	g.keyframes.Color.prototype.mutate_blue = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		if (b === 0) return !1;
		this.bb.writeUint8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Color.prototype.alpha = function() {
		var a = this.bb.__offset(this.bb_pos, 10);
		return a ? this.bb.readUint8(this.bb_pos + a) : 255
	};
	g.keyframes.Color.prototype.mutate_alpha = function(a) {
		var b = this.bb.__offset(this.bb_pos, 10);
		if (b === 0) return !1;
		this.bb.writeUint8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Color.startColor = function(a) {
		a.startObject(4)
	};
	g.keyframes.Color.addRed = function(a, b) {
		a.addFieldInt8(0, b, 0)
	};
	g.keyframes.Color.addGreen = function(a, b) {
		a.addFieldInt8(1, b, 0)
	};
	g.keyframes.Color.addBlue = function(a, b) {
		a.addFieldInt8(2, b, 0)
	};
	g.keyframes.Color.addAlpha = function(a, b) {
		a.addFieldInt8(3, b, 255)
	};
	g.keyframes.Color.endColor = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Color.createColor = function(a, b, c, d, e) {
		g.keyframes.Color.startColor(a);
		g.keyframes.Color.addRed(a, b);
		g.keyframes.Color.addGreen(a, c);
		g.keyframes.Color.addBlue(a, d);
		g.keyframes.Color.addAlpha(a, e);
		return g.keyframes.Color.endColor(a)
	};
	g.keyframes.ColorArray = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.ColorArray.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.ColorArray.getRootAsColorArray = function(a, b) {
		return (b || new g.keyframes.ColorArray()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.ColorArray.prototype.colors = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 4);
		return c ? (b || new g.keyframes.Color()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.ColorArray.prototype.colorsLength = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ColorArray.startColorArray = function(a) {
		a.startObject(1)
	};
	g.keyframes.ColorArray.addColors = function(a, b) {
		a.addFieldOffset(0, b, 0)
	};
	g.keyframes.ColorArray.createColorsVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.ColorArray.startColorsVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ColorArray.endColorArray = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.ColorArray.createColorArray = function(a, b) {
		g.keyframes.ColorArray.startColorArray(a);
		g.keyframes.ColorArray.addColors(a, b);
		return g.keyframes.ColorArray.endColorArray(a)
	};
	g.keyframes.Command = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Command.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Command.getRootAsCommand = function(a, b) {
		return (b || new g.keyframes.Command()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Command.prototype.type = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? this.bb.readInt8(this.bb_pos + a) : g.keyframes.CommandType.MoveTo
	};
	g.keyframes.Command.prototype.mutate_type = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Command.prototype.point = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		return b ? (a || new g.keyframes.Point()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Command.prototype.control1 = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? (a || new g.keyframes.Point()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Command.prototype.control2 = function(a) {
		var b = this.bb.__offset(this.bb_pos, 10);
		return b ? (a || new g.keyframes.Point()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Command.startCommand = function(a) {
		a.startObject(4)
	};
	g.keyframes.Command.addType = function(a, b) {
		a.addFieldInt8(0, b, g.keyframes.CommandType.MoveTo)
	};
	g.keyframes.Command.addPoint = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.Command.addControl1 = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.Command.addControl2 = function(a, b) {
		a.addFieldOffset(3, b, 0)
	};
	g.keyframes.Command.endCommand = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Command.createCommand = function(a, b, c, d, e) {
		g.keyframes.Command.startCommand(a);
		g.keyframes.Command.addType(a, b);
		g.keyframes.Command.addPoint(a, c);
		g.keyframes.Command.addControl1(a, d);
		g.keyframes.Command.addControl2(a, e);
		return g.keyframes.Command.endCommand(a)
	};
	g.keyframes.Path = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Path.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Path.getRootAsPath = function(a, b) {
		return (b || new g.keyframes.Path()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Path.prototype.commands = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 4);
		return c ? (b || new g.keyframes.Command()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.Path.prototype.commandsLength = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Path.startPath = function(a) {
		a.startObject(1)
	};
	g.keyframes.Path.addCommands = function(a, b) {
		a.addFieldOffset(0, b, 0)
	};
	g.keyframes.Path.createCommandsVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.Path.startCommandsVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.Path.endPath = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Path.createPath = function(a, b) {
		g.keyframes.Path.startPath(a);
		g.keyframes.Path.addCommands(a, b);
		return g.keyframes.Path.endPath(a)
	};
	g.keyframes.Tween = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Tween.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Tween.getRootAsTween = function(a, b) {
		return (b || new g.keyframes.Tween()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Tween.prototype.type = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? this.bb.readInt8(this.bb_pos + a) : g.keyframes.TweenType.Bezier
	};
	g.keyframes.Tween.prototype.mutate_type = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Tween.prototype.control1 = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		return b ? (a || new g.keyframes.Point()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Tween.prototype.control2 = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? (a || new g.keyframes.Point()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Tween.startTween = function(a) {
		a.startObject(3)
	};
	g.keyframes.Tween.addType = function(a, b) {
		a.addFieldInt8(0, b, g.keyframes.TweenType.Bezier)
	};
	g.keyframes.Tween.addControl1 = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.Tween.addControl2 = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.Tween.endTween = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Tween.createTween = function(a, b, c, d) {
		g.keyframes.Tween.startTween(a);
		g.keyframes.Tween.addType(a, b);
		g.keyframes.Tween.addControl1(a, c);
		g.keyframes.Tween.addControl2(a, d);
		return g.keyframes.Tween.endTween(a)
	};
	g.keyframes.ScalarAnimation = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.ScalarAnimation.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.ScalarAnimation.getRootAsScalarAnimation = function(a, b) {
		return (b || new g.keyframes.ScalarAnimation()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.ScalarAnimation.prototype.value = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.ScalarAnimation.prototype.mutate_value = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.ScalarAnimation.prototype.values = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		return b ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4) : 0
	};
	g.keyframes.ScalarAnimation.prototype.valuesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ScalarAnimation.prototype.valuesArray = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.ScalarAnimation.prototype.keyframes = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4) : 0
	};
	g.keyframes.ScalarAnimation.prototype.keyframesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ScalarAnimation.prototype.keyframesArray = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.ScalarAnimation.prototype.tweens = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 10);
		return c ? (b || new g.keyframes.Tween()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.ScalarAnimation.prototype.tweensLength = function() {
		var a = this.bb.__offset(this.bb_pos, 10);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ScalarAnimation.startScalarAnimation = function(a) {
		a.startObject(4)
	};
	g.keyframes.ScalarAnimation.addValue = function(a, b) {
		a.addFieldFloat32(0, b, 0)
	};
	g.keyframes.ScalarAnimation.addValues = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.ScalarAnimation.createValuesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
		return a.endVector()
	};
	g.keyframes.ScalarAnimation.startValuesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ScalarAnimation.addKeyframes = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.ScalarAnimation.createKeyframesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
		return a.endVector()
	};
	g.keyframes.ScalarAnimation.startKeyframesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ScalarAnimation.addTweens = function(a, b) {
		a.addFieldOffset(3, b, 0)
	};
	g.keyframes.ScalarAnimation.createTweensVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.ScalarAnimation.startTweensVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ScalarAnimation.endScalarAnimation = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.ScalarAnimation.createScalarAnimation = function(a, b, c, d, e) {
		g.keyframes.ScalarAnimation.startScalarAnimation(a);
		g.keyframes.ScalarAnimation.addValue(a, b);
		g.keyframes.ScalarAnimation.addValues(a, c);
		g.keyframes.ScalarAnimation.addKeyframes(a, d);
		g.keyframes.ScalarAnimation.addTweens(a, e);
		return g.keyframes.ScalarAnimation.endScalarAnimation(a)
	};
	g.keyframes.ScalarArray = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.ScalarArray.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.ScalarArray.getRootAsScalarArray = function(a, b) {
		return (b || new g.keyframes.ScalarArray()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.ScalarArray.prototype.values = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4) : 0
	};
	g.keyframes.ScalarArray.prototype.valuesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ScalarArray.prototype.valuesArray = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.ScalarArray.startScalarArray = function(a) {
		a.startObject(1)
	};
	g.keyframes.ScalarArray.addValues = function(a, b) {
		a.addFieldOffset(0, b, 0)
	};
	g.keyframes.ScalarArray.createValuesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
		return a.endVector()
	};
	g.keyframes.ScalarArray.startValuesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ScalarArray.endScalarArray = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.ScalarArray.createScalarArray = function(a, b) {
		g.keyframes.ScalarArray.startScalarArray(a);
		g.keyframes.ScalarArray.addValues(a, b);
		return g.keyframes.ScalarArray.endScalarArray(a)
	};
	g.keyframes.ScalarArrayAnimation = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.ScalarArrayAnimation.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.ScalarArrayAnimation.getRootAsScalarArrayAnimation = function(a, b) {
		return (b || new g.keyframes.ScalarArrayAnimation()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.ScalarArrayAnimation.prototype.value = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? (a || new g.keyframes.ScalarArray()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.ScalarArrayAnimation.prototype.values = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 6);
		return c ? (b || new g.keyframes.ScalarArray()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.ScalarArrayAnimation.prototype.valuesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ScalarArrayAnimation.prototype.keyframes = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4) : 0
	};
	g.keyframes.ScalarArrayAnimation.prototype.keyframesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ScalarArrayAnimation.prototype.keyframesArray = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.ScalarArrayAnimation.prototype.tweens = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 10);
		return c ? (b || new g.keyframes.Tween()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.ScalarArrayAnimation.prototype.tweensLength = function() {
		var a = this.bb.__offset(this.bb_pos, 10);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ScalarArrayAnimation.startScalarArrayAnimation = function(a) {
		a.startObject(4)
	};
	g.keyframes.ScalarArrayAnimation.addValue = function(a, b) {
		a.addFieldOffset(0, b, 0)
	};
	g.keyframes.ScalarArrayAnimation.addValues = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.ScalarArrayAnimation.createValuesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.ScalarArrayAnimation.startValuesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ScalarArrayAnimation.addKeyframes = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.ScalarArrayAnimation.createKeyframesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
		return a.endVector()
	};
	g.keyframes.ScalarArrayAnimation.startKeyframesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ScalarArrayAnimation.addTweens = function(a, b) {
		a.addFieldOffset(3, b, 0)
	};
	g.keyframes.ScalarArrayAnimation.createTweensVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.ScalarArrayAnimation.startTweensVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ScalarArrayAnimation.endScalarArrayAnimation = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.ScalarArrayAnimation.createScalarArrayAnimation = function(a, b, c, d, e) {
		g.keyframes.ScalarArrayAnimation.startScalarArrayAnimation(a);
		g.keyframes.ScalarArrayAnimation.addValue(a, b);
		g.keyframes.ScalarArrayAnimation.addValues(a, c);
		g.keyframes.ScalarArrayAnimation.addKeyframes(a, d);
		g.keyframes.ScalarArrayAnimation.addTweens(a, e);
		return g.keyframes.ScalarArrayAnimation.endScalarArrayAnimation(a)
	};
	g.keyframes.PointAnimation = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.PointAnimation.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.PointAnimation.getRootAsPointAnimation = function(a, b) {
		return (b || new g.keyframes.PointAnimation()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.PointAnimation.prototype.value = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? (a || new g.keyframes.Point()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.PointAnimation.prototype.values = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 6);
		return c ? (b || new g.keyframes.Point()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.PointAnimation.prototype.valuesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.PointAnimation.prototype.keyframes = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4) : 0
	};
	g.keyframes.PointAnimation.prototype.keyframesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.PointAnimation.prototype.keyframesArray = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.PointAnimation.prototype.tweens = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 10);
		return c ? (b || new g.keyframes.Tween()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.PointAnimation.prototype.tweensLength = function() {
		var a = this.bb.__offset(this.bb_pos, 10);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.PointAnimation.startPointAnimation = function(a) {
		a.startObject(4)
	};
	g.keyframes.PointAnimation.addValue = function(a, b) {
		a.addFieldOffset(0, b, 0)
	};
	g.keyframes.PointAnimation.addValues = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.PointAnimation.createValuesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.PointAnimation.startValuesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.PointAnimation.addKeyframes = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.PointAnimation.createKeyframesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
		return a.endVector()
	};
	g.keyframes.PointAnimation.startKeyframesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.PointAnimation.addTweens = function(a, b) {
		a.addFieldOffset(3, b, 0)
	};
	g.keyframes.PointAnimation.createTweensVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.PointAnimation.startTweensVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.PointAnimation.endPointAnimation = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.PointAnimation.createPointAnimation = function(a, b, c, d, e) {
		g.keyframes.PointAnimation.startPointAnimation(a);
		g.keyframes.PointAnimation.addValue(a, b);
		g.keyframes.PointAnimation.addValues(a, c);
		g.keyframes.PointAnimation.addKeyframes(a, d);
		g.keyframes.PointAnimation.addTweens(a, e);
		return g.keyframes.PointAnimation.endPointAnimation(a)
	};
	g.keyframes.ColorAnimation = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.ColorAnimation.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.ColorAnimation.getRootAsColorAnimation = function(a, b) {
		return (b || new g.keyframes.ColorAnimation()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.ColorAnimation.prototype.value = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? (a || new g.keyframes.Color()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.ColorAnimation.prototype.values = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 6);
		return c ? (b || new g.keyframes.Color()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.ColorAnimation.prototype.valuesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ColorAnimation.prototype.keyframes = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4) : 0
	};
	g.keyframes.ColorAnimation.prototype.keyframesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ColorAnimation.prototype.keyframesArray = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.ColorAnimation.prototype.tweens = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 10);
		return c ? (b || new g.keyframes.Tween()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.ColorAnimation.prototype.tweensLength = function() {
		var a = this.bb.__offset(this.bb_pos, 10);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ColorAnimation.startColorAnimation = function(a) {
		a.startObject(4)
	};
	g.keyframes.ColorAnimation.addValue = function(a, b) {
		a.addFieldOffset(0, b, 0)
	};
	g.keyframes.ColorAnimation.addValues = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.ColorAnimation.createValuesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.ColorAnimation.startValuesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ColorAnimation.addKeyframes = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.ColorAnimation.createKeyframesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
		return a.endVector()
	};
	g.keyframes.ColorAnimation.startKeyframesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ColorAnimation.addTweens = function(a, b) {
		a.addFieldOffset(3, b, 0)
	};
	g.keyframes.ColorAnimation.createTweensVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.ColorAnimation.startTweensVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ColorAnimation.endColorAnimation = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.ColorAnimation.createColorAnimation = function(a, b, c, d, e) {
		g.keyframes.ColorAnimation.startColorAnimation(a);
		g.keyframes.ColorAnimation.addValue(a, b);
		g.keyframes.ColorAnimation.addValues(a, c);
		g.keyframes.ColorAnimation.addKeyframes(a, d);
		g.keyframes.ColorAnimation.addTweens(a, e);
		return g.keyframes.ColorAnimation.endColorAnimation(a)
	};
	g.keyframes.ColorArrayAnimation = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.ColorArrayAnimation.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.ColorArrayAnimation.getRootAsColorArrayAnimation = function(a, b) {
		return (b || new g.keyframes.ColorArrayAnimation()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.ColorArrayAnimation.prototype.value = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? (a || new g.keyframes.ColorArray()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.ColorArrayAnimation.prototype.values = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 6);
		return c ? (b || new g.keyframes.ColorArray()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.ColorArrayAnimation.prototype.valuesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ColorArrayAnimation.prototype.keyframes = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4) : 0
	};
	g.keyframes.ColorArrayAnimation.prototype.keyframesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ColorArrayAnimation.prototype.keyframesArray = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.ColorArrayAnimation.prototype.tweens = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 10);
		return c ? (b || new g.keyframes.Tween()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.ColorArrayAnimation.prototype.tweensLength = function() {
		var a = this.bb.__offset(this.bb_pos, 10);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.ColorArrayAnimation.startColorArrayAnimation = function(a) {
		a.startObject(4)
	};
	g.keyframes.ColorArrayAnimation.addValue = function(a, b) {
		a.addFieldOffset(0, b, 0)
	};
	g.keyframes.ColorArrayAnimation.addValues = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.ColorArrayAnimation.createValuesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.ColorArrayAnimation.startValuesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ColorArrayAnimation.addKeyframes = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.ColorArrayAnimation.createKeyframesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
		return a.endVector()
	};
	g.keyframes.ColorArrayAnimation.startKeyframesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ColorArrayAnimation.addTweens = function(a, b) {
		a.addFieldOffset(3, b, 0)
	};
	g.keyframes.ColorArrayAnimation.createTweensVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.ColorArrayAnimation.startTweensVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.ColorArrayAnimation.endColorArrayAnimation = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.ColorArrayAnimation.createColorArrayAnimation = function(a, b, c, d, e) {
		g.keyframes.ColorArrayAnimation.startColorArrayAnimation(a);
		g.keyframes.ColorArrayAnimation.addValue(a, b);
		g.keyframes.ColorArrayAnimation.addValues(a, c);
		g.keyframes.ColorArrayAnimation.addKeyframes(a, d);
		g.keyframes.ColorArrayAnimation.addTweens(a, e);
		return g.keyframes.ColorArrayAnimation.endColorArrayAnimation(a)
	};
	g.keyframes.PathAnimation = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.PathAnimation.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.PathAnimation.getRootAsPathAnimation = function(a, b) {
		return (b || new g.keyframes.PathAnimation()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.PathAnimation.prototype.value = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? (a || new g.keyframes.Path()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.PathAnimation.prototype.values = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 6);
		return c ? (b || new g.keyframes.Path()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.PathAnimation.prototype.valuesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.PathAnimation.prototype.keyframes = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + b) + a * 4) : 0
	};
	g.keyframes.PathAnimation.prototype.keyframesLength = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.PathAnimation.prototype.keyframesArray = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.PathAnimation.prototype.tweens = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 10);
		return c ? (b || new g.keyframes.Tween()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.PathAnimation.prototype.tweensLength = function() {
		var a = this.bb.__offset(this.bb_pos, 10);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.PathAnimation.startPathAnimation = function(a) {
		a.startObject(4)
	};
	g.keyframes.PathAnimation.addValue = function(a, b) {
		a.addFieldOffset(0, b, 0)
	};
	g.keyframes.PathAnimation.addValues = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.PathAnimation.createValuesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.PathAnimation.startValuesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.PathAnimation.addKeyframes = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.PathAnimation.createKeyframesVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addFloat32(b[c]);
		return a.endVector()
	};
	g.keyframes.PathAnimation.startKeyframesVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.PathAnimation.addTweens = function(a, b) {
		a.addFieldOffset(3, b, 0)
	};
	g.keyframes.PathAnimation.createTweensVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.PathAnimation.startTweensVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.PathAnimation.endPathAnimation = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.PathAnimation.createPathAnimation = function(a, b, c, d, e) {
		g.keyframes.PathAnimation.startPathAnimation(a);
		g.keyframes.PathAnimation.addValue(a, b);
		g.keyframes.PathAnimation.addValues(a, c);
		g.keyframes.PathAnimation.addKeyframes(a, d);
		g.keyframes.PathAnimation.addTweens(a, e);
		return g.keyframes.PathAnimation.endPathAnimation(a)
	};
	g.keyframes.Gradient = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Gradient.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Gradient.getRootAsGradient = function(a, b) {
		return (b || new g.keyframes.Gradient()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Gradient.prototype.colorStart = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? (a || new g.keyframes.ColorAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Gradient.prototype.colorEnd = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		return b ? (a || new g.keyframes.ColorAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Gradient.prototype.rampStart = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? (a || new g.keyframes.PointAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Gradient.prototype.rampEnd = function(a) {
		var b = this.bb.__offset(this.bb_pos, 10);
		return b ? (a || new g.keyframes.PointAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Gradient.prototype.type = function() {
		var a = this.bb.__offset(this.bb_pos, 12);
		return a ? this.bb.readInt8(this.bb_pos + a) : g.keyframes.GradientType.Linear
	};
	g.keyframes.Gradient.prototype.mutate_type = function(a) {
		var b = this.bb.__offset(this.bb_pos, 12);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Gradient.prototype.colors = function(a) {
		var b = this.bb.__offset(this.bb_pos, 14);
		return b ? (a || new g.keyframes.ColorArrayAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Gradient.prototype.positions = function(a) {
		var b = this.bb.__offset(this.bb_pos, 16);
		return b ? (a || new g.keyframes.ScalarArrayAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Gradient.prototype.highlightLength = function(a) {
		var b = this.bb.__offset(this.bb_pos, 18);
		return b ? (a || new g.keyframes.ScalarAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Gradient.prototype.highlightAngle = function(a) {
		var b = this.bb.__offset(this.bb_pos, 20);
		return b ? (a || new g.keyframes.ScalarAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Gradient.startGradient = function(a) {
		a.startObject(9)
	};
	g.keyframes.Gradient.addColorStart = function(a, b) {
		a.addFieldOffset(0, b, 0)
	};
	g.keyframes.Gradient.addColorEnd = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.Gradient.addRampStart = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.Gradient.addRampEnd = function(a, b) {
		a.addFieldOffset(3, b, 0)
	};
	g.keyframes.Gradient.addType = function(a, b) {
		a.addFieldInt8(4, b, g.keyframes.GradientType.Linear)
	};
	g.keyframes.Gradient.addColors = function(a, b) {
		a.addFieldOffset(5, b, 0)
	};
	g.keyframes.Gradient.addPositions = function(a, b) {
		a.addFieldOffset(6, b, 0)
	};
	g.keyframes.Gradient.addHighlightLength = function(a, b) {
		a.addFieldOffset(7, b, 0)
	};
	g.keyframes.Gradient.addHighlightAngle = function(a, b) {
		a.addFieldOffset(8, b, 0)
	};
	g.keyframes.Gradient.endGradient = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Gradient.createGradient = function(a, b, c, d, e, f, h, i, j, k) {
		g.keyframes.Gradient.startGradient(a);
		g.keyframes.Gradient.addColorStart(a, b);
		g.keyframes.Gradient.addColorEnd(a, c);
		g.keyframes.Gradient.addRampStart(a, d);
		g.keyframes.Gradient.addRampEnd(a, e);
		g.keyframes.Gradient.addType(a, f);
		g.keyframes.Gradient.addColors(a, h);
		g.keyframes.Gradient.addPositions(a, i);
		g.keyframes.Gradient.addHighlightLength(a, j);
		g.keyframes.Gradient.addHighlightAngle(a, k);
		return g.keyframes.Gradient.endGradient(a)
	};
	g.keyframes.Bitmap = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Bitmap.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Bitmap.getRootAsBitmap = function(a, b) {
		return (b || new g.keyframes.Bitmap()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Bitmap.prototype.size = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? (a || new g.keyframes.Size()).__init(this.bb_pos + b, this.bb) : null
	};
	g.keyframes.Bitmap.prototype.content = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		return b ? this.bb.readUint8(this.bb.__vector(this.bb_pos + b) + a) : 0
	};
	g.keyframes.Bitmap.prototype.contentLength = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Bitmap.prototype.contentArray = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.Bitmap.prototype.name = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? this.bb.__string(this.bb_pos + b, a) : null
	};
	g.keyframes.Bitmap.startBitmap = function(a) {
		a.startObject(3)
	};
	g.keyframes.Bitmap.addSize = function(a, b) {
		a.addFieldStruct(0, b, 0)
	};
	g.keyframes.Bitmap.addContent = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.Bitmap.createContentVector = function(a, b) {
		a.startVector(1, b.length, 1);
		for (var c = b.length - 1; c >= 0; c--) a.addInt8(b[c]);
		return a.endVector()
	};
	g.keyframes.Bitmap.startContentVector = function(a, b) {
		a.startVector(1, b, 1)
	};
	g.keyframes.Bitmap.addName = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.Bitmap.endBitmap = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Bitmap.createBitmap = function(a, b, c, d) {
		g.keyframes.Bitmap.startBitmap(a);
		g.keyframes.Bitmap.addSize(a, b);
		g.keyframes.Bitmap.addContent(a, c);
		g.keyframes.Bitmap.addName(a, d);
		return g.keyframes.Bitmap.endBitmap(a)
	};
	g.keyframes.Video = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Video.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Video.getRootAsVideo = function(a, b) {
		return (b || new g.keyframes.Video()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Video.prototype.size = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? (a || new g.keyframes.Size()).__init(this.bb_pos + b, this.bb) : null
	};
	g.keyframes.Video.prototype.length = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.readInt32(this.bb_pos + a) : 0
	};
	g.keyframes.Video.prototype.mutate_length = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		if (b === 0) return !1;
		this.bb.writeInt32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Video.prototype.content = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		return b ? this.bb.readUint8(this.bb.__vector(this.bb_pos + b) + a) : 0
	};
	g.keyframes.Video.prototype.contentLength = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Video.prototype.contentArray = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.Video.prototype.name = function(a) {
		var b = this.bb.__offset(this.bb_pos, 10);
		return b ? this.bb.__string(this.bb_pos + b, a) : null
	};
	g.keyframes.Video.startVideo = function(a) {
		a.startObject(4)
	};
	g.keyframes.Video.addSize = function(a, b) {
		a.addFieldStruct(0, b, 0)
	};
	g.keyframes.Video.addLength = function(a, b) {
		a.addFieldInt32(1, b, 0)
	};
	g.keyframes.Video.addContent = function(a, b) {
		a.addFieldOffset(2, b, 0)
	};
	g.keyframes.Video.createContentVector = function(a, b) {
		a.startVector(1, b.length, 1);
		for (var c = b.length - 1; c >= 0; c--) a.addInt8(b[c]);
		return a.endVector()
	};
	g.keyframes.Video.startContentVector = function(a, b) {
		a.startVector(1, b, 1)
	};
	g.keyframes.Video.addName = function(a, b) {
		a.addFieldOffset(3, b, 0)
	};
	g.keyframes.Video.endVideo = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Video.createVideo = function(a, b, c, d, e) {
		g.keyframes.Video.startVideo(a);
		g.keyframes.Video.addSize(a, b);
		g.keyframes.Video.addLength(a, c);
		g.keyframes.Video.addContent(a, d);
		g.keyframes.Video.addName(a, e);
		return g.keyframes.Video.endVideo(a)
	};
	g.keyframes.Plugin = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Plugin.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Plugin.getRootAsPlugin = function(a, b) {
		return (b || new g.keyframes.Plugin()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Plugin.prototype.index = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? this.bb.readInt32(this.bb_pos + a) : 0
	};
	g.keyframes.Plugin.prototype.mutate_index = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		if (b === 0) return !1;
		this.bb.writeInt32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Plugin.prototype.content = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		return b ? this.bb.readUint8(this.bb.__vector(this.bb_pos + b) + a) : 0
	};
	g.keyframes.Plugin.prototype.contentLength = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Plugin.prototype.contentArray = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.Plugin.prototype.optional = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? !!this.bb.readInt8(this.bb_pos + a) : !1
	};
	g.keyframes.Plugin.prototype.mutate_optional = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Plugin.startPlugin = function(a) {
		a.startObject(3)
	};
	g.keyframes.Plugin.addIndex = function(a, b) {
		a.addFieldInt32(0, b, 0)
	};
	g.keyframes.Plugin.addContent = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.Plugin.createContentVector = function(a, b) {
		a.startVector(1, b.length, 1);
		for (var c = b.length - 1; c >= 0; c--) a.addInt8(b[c]);
		return a.endVector()
	};
	g.keyframes.Plugin.startContentVector = function(a, b) {
		a.startVector(1, b, 1)
	};
	g.keyframes.Plugin.addOptional = function(a, b) {
		a.addFieldInt8(2, +b, 0)
	};
	g.keyframes.Plugin.endPlugin = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Plugin.createPlugin = function(a, b, c, d) {
		g.keyframes.Plugin.startPlugin(a);
		g.keyframes.Plugin.addIndex(a, b);
		g.keyframes.Plugin.addContent(a, c);
		g.keyframes.Plugin.addOptional(a, d);
		return g.keyframes.Plugin.endPlugin(a)
	};
	g.keyframes.ProgressMarker = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.ProgressMarker.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.ProgressMarker.getRootAsProgressMarker = function(a, b) {
		return (b || new g.keyframes.ProgressMarker()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.ProgressMarker.prototype.name = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? this.bb.__string(this.bb_pos + b, a) : null
	};
	g.keyframes.ProgressMarker.prototype.startProgress = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.ProgressMarker.prototype.mutate_start_progress = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.ProgressMarker.prototype.endProgress = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.ProgressMarker.prototype.mutate_end_progress = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.ProgressMarker.startProgressMarker = function(a) {
		a.startObject(3)
	};
	g.keyframes.ProgressMarker.addName = function(a, b) {
		a.addFieldOffset(0, b, 0)
	};
	g.keyframes.ProgressMarker.addStartProgress = function(a, b) {
		a.addFieldFloat32(1, b, 0)
	};
	g.keyframes.ProgressMarker.addEndProgress = function(a, b) {
		a.addFieldFloat32(2, b, 0)
	};
	g.keyframes.ProgressMarker.endProgressMarker = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.ProgressMarker.createProgressMarker = function(a, b, c, d) {
		g.keyframes.ProgressMarker.startProgressMarker(a);
		g.keyframes.ProgressMarker.addName(a, b);
		g.keyframes.ProgressMarker.addStartProgress(a, c);
		g.keyframes.ProgressMarker.addEndProgress(a, d);
		return g.keyframes.ProgressMarker.endProgressMarker(a)
	};
	g.keyframes.Layer = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Layer.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Layer.getRootAsLayer = function(a, b) {
		return (b || new g.keyframes.Layer()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Layer.prototype.id = function() {
		var a = this.bb.__offset(this.bb_pos, 4);
		return a ? this.bb.readInt32(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.mutate_id = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		if (b === 0) return !1;
		this.bb.writeInt32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.sublayers = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 6);
		return c ? (b || new g.keyframes.Layer()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.Layer.prototype.sublayersLength = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.fromProgress = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.mutate_from_progress = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.toProgress = function() {
		var a = this.bb.__offset(this.bb_pos, 10);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 1
	};
	g.keyframes.Layer.prototype.mutate_to_progress = function(a) {
		var b = this.bb.__offset(this.bb_pos, 10);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.anchorPoint = function(a) {
		var b = this.bb.__offset(this.bb_pos, 12);
		return b ? (a || new g.keyframes.PointAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.xPosition = function(a) {
		var b = this.bb.__offset(this.bb_pos, 14);
		return b ? (a || new g.keyframes.ScalarAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.yPosition = function(a) {
		var b = this.bb.__offset(this.bb_pos, 16);
		return b ? (a || new g.keyframes.ScalarAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.rotation = function(a) {
		var b = this.bb.__offset(this.bb_pos, 18);
		return b ? (a || new g.keyframes.ScalarAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.scale = function(a) {
		var b = this.bb.__offset(this.bb_pos, 20);
		return b ? (a || new g.keyframes.PointAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.path = function(a) {
		var b = this.bb.__offset(this.bb_pos, 22);
		return b ? (a || new g.keyframes.PathAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.opacity = function(a) {
		var b = this.bb.__offset(this.bb_pos, 24);
		return b ? (a || new g.keyframes.ScalarAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.fillColor = function(a) {
		var b = this.bb.__offset(this.bb_pos, 26);
		return b ? (a || new g.keyframes.ColorAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.strokeColor = function(a) {
		var b = this.bb.__offset(this.bb_pos, 28);
		return b ? (a || new g.keyframes.ColorAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.strokeWidth = function(a) {
		var b = this.bb.__offset(this.bb_pos, 30);
		return b ? (a || new g.keyframes.ScalarAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.strokeLineCap = function() {
		var a = this.bb.__offset(this.bb_pos, 32);
		return a ? this.bb.readInt8(this.bb_pos + a) : g.keyframes.StrokeLineCap.Butt
	};
	g.keyframes.Layer.prototype.mutate_stroke_line_cap = function(a) {
		var b = this.bb.__offset(this.bb_pos, 32);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.gradient = function(a) {
		var b = this.bb.__offset(this.bb_pos, 34);
		return b ? (a || new g.keyframes.Gradient()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.strokeLineJoin = function() {
		var a = this.bb.__offset(this.bb_pos, 36);
		return a ? this.bb.readInt8(this.bb_pos + a) : g.keyframes.StrokeLineJoin.Miter
	};
	g.keyframes.Layer.prototype.mutate_stroke_line_join = function(a) {
		var b = this.bb.__offset(this.bb_pos, 36);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.miterLimit = function(a) {
		var b = this.bb.__offset(this.bb_pos, 38);
		return b ? (a || new g.keyframes.ScalarAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.bitmapIndex = function() {
		var a = this.bb.__offset(this.bb_pos, 40);
		return a ? this.bb.readInt32(this.bb_pos + a) : -1
	};
	g.keyframes.Layer.prototype.mutate_bitmap_index = function(a) {
		var b = this.bb.__offset(this.bb_pos, 40);
		if (b === 0) return !1;
		this.bb.writeInt32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.subdocumentIndex = function() {
		var a = this.bb.__offset(this.bb_pos, 42);
		return a ? this.bb.readInt32(this.bb_pos + a) : -1
	};
	g.keyframes.Layer.prototype.mutate_subdocument_index = function(a) {
		var b = this.bb.__offset(this.bb_pos, 42);
		if (b === 0) return !1;
		this.bb.writeInt32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.plugins = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 44);
		return c ? (b || new g.keyframes.Plugin()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.Layer.prototype.pluginsLength = function() {
		var a = this.bb.__offset(this.bb_pos, 44);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.progressOffset = function() {
		var a = this.bb.__offset(this.bb_pos, 46);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.mutate_progress_offset = function(a) {
		var b = this.bb.__offset(this.bb_pos, 46);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.clippingPath = function(a) {
		var b = this.bb.__offset(this.bb_pos, 48);
		return b ? (a || new g.keyframes.PathAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.position = function(a) {
		var b = this.bb.__offset(this.bb_pos, 50);
		return b ? (a || new g.keyframes.PathAnimation()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.isTrackMatte = function() {
		var a = this.bb.__offset(this.bb_pos, 52);
		return a ? !!this.bb.readInt8(this.bb_pos + a) : !1
	};
	g.keyframes.Layer.prototype.mutate_is_track_matte = function(a) {
		var b = this.bb.__offset(this.bb_pos, 52);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.trackMatteType = function() {
		var a = this.bb.__offset(this.bb_pos, 54);
		return a ? this.bb.readInt8(this.bb_pos + a) : g.keyframes.TrackMatteType.None
	};
	g.keyframes.Layer.prototype.mutate_track_matte_type = function(a) {
		var b = this.bb.__offset(this.bb_pos, 54);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.vectorCompositeOrder = function() {
		var a = this.bb.__offset(this.bb_pos, 56);
		return a ? this.bb.readInt8(this.bb_pos + a) : g.keyframes.VectorCompositeOrder.FillStroke
	};
	g.keyframes.Layer.prototype.mutate_vector_composite_order = function(a) {
		var b = this.bb.__offset(this.bb_pos, 56);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.text = function(a) {
		var b = this.bb.__offset(this.bb_pos, 58);
		return b ? this.bb.__string(this.bb_pos + b, a) : null
	};
	g.keyframes.Layer.prototype.textTypeface = function(a) {
		var b = this.bb.__offset(this.bb_pos, 60);
		return b ? this.bb.__string(this.bb_pos + b, a) : null
	};
	g.keyframes.Layer.prototype.textSize = function() {
		var a = this.bb.__offset(this.bb_pos, 62);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.mutate_textSize = function(a) {
		var b = this.bb.__offset(this.bb_pos, 62);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.textColor = function(a) {
		var b = this.bb.__offset(this.bb_pos, 64);
		return b ? (a || new g.keyframes.Color()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Layer.prototype.textAlign = function() {
		var a = this.bb.__offset(this.bb_pos, 66);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.mutate_textAlign = function(a) {
		var b = this.bb.__offset(this.bb_pos, 66);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.textVAlign = function() {
		var a = this.bb.__offset(this.bb_pos, 68);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.mutate_textVAlign = function(a) {
		var b = this.bb.__offset(this.bb_pos, 68);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.textTracking = function() {
		var a = this.bb.__offset(this.bb_pos, 70);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.mutate_textTracking = function(a) {
		var b = this.bb.__offset(this.bb_pos, 70);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.textLeading = function() {
		var a = this.bb.__offset(this.bb_pos, 72);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.mutate_textLeading = function(a) {
		var b = this.bb.__offset(this.bb_pos, 72);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.textItalic = function() {
		var a = this.bb.__offset(this.bb_pos, 74);
		return a ? !!this.bb.readInt8(this.bb_pos + a) : !1
	};
	g.keyframes.Layer.prototype.mutate_textItalic = function(a) {
		var b = this.bb.__offset(this.bb_pos, 74);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.textWeight = function() {
		var a = this.bb.__offset(this.bb_pos, 76);
		return a ? this.bb.readInt8(this.bb_pos + a) : g.keyframes.TextWeight.Thin
	};
	g.keyframes.Layer.prototype.mutate_textWeight = function(a) {
		var b = this.bb.__offset(this.bb_pos, 76);
		if (b === 0) return !1;
		this.bb.writeInt8(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.prototype.textBoxSize = function(a) {
		var b = this.bb.__offset(this.bb_pos, 78);
		return b ? (a || new g.keyframes.Size()).__init(this.bb_pos + b, this.bb) : null
	};
	g.keyframes.Layer.prototype.videoLevels = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 80);
		return c ? (b || new g.keyframes.ScalarAnimation()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.Layer.prototype.videoLevelsLength = function() {
		var a = this.bb.__offset(this.bb_pos, 80);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Layer.prototype.videoIndex = function() {
		var a = this.bb.__offset(this.bb_pos, 82);
		return a ? this.bb.readInt32(this.bb_pos + a) : -1
	};
	g.keyframes.Layer.prototype.mutate_video_index = function(a) {
		var b = this.bb.__offset(this.bb_pos, 82);
		if (b === 0) return !1;
		this.bb.writeInt32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Layer.startLayer = function(a) {
		a.startObject(40)
	};
	g.keyframes.Layer.addId = function(a, b) {
		a.addFieldInt32(0, b, 0)
	};
	g.keyframes.Layer.addSublayers = function(a, b) {
		a.addFieldOffset(1, b, 0)
	};
	g.keyframes.Layer.createSublayersVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.Layer.startSublayersVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.Layer.addFromProgress = function(a, b) {
		a.addFieldFloat32(2, b, 0)
	};
	g.keyframes.Layer.addToProgress = function(a, b) {
		a.addFieldFloat32(3, b, 1)
	};
	g.keyframes.Layer.addAnchorPoint = function(a, b) {
		a.addFieldOffset(4, b, 0)
	};
	g.keyframes.Layer.addXPosition = function(a, b) {
		a.addFieldOffset(5, b, 0)
	};
	g.keyframes.Layer.addYPosition = function(a, b) {
		a.addFieldOffset(6, b, 0)
	};
	g.keyframes.Layer.addRotation = function(a, b) {
		a.addFieldOffset(7, b, 0)
	};
	g.keyframes.Layer.addScale = function(a, b) {
		a.addFieldOffset(8, b, 0)
	};
	g.keyframes.Layer.addPath = function(a, b) {
		a.addFieldOffset(9, b, 0)
	};
	g.keyframes.Layer.addOpacity = function(a, b) {
		a.addFieldOffset(10, b, 0)
	};
	g.keyframes.Layer.addFillColor = function(a, b) {
		a.addFieldOffset(11, b, 0)
	};
	g.keyframes.Layer.addStrokeColor = function(a, b) {
		a.addFieldOffset(12, b, 0)
	};
	g.keyframes.Layer.addStrokeWidth = function(a, b) {
		a.addFieldOffset(13, b, 0)
	};
	g.keyframes.Layer.addStrokeLineCap = function(a, b) {
		a.addFieldInt8(14, b, g.keyframes.StrokeLineCap.Butt)
	};
	g.keyframes.Layer.addGradient = function(a, b) {
		a.addFieldOffset(15, b, 0)
	};
	g.keyframes.Layer.addStrokeLineJoin = function(a, b) {
		a.addFieldInt8(16, b, g.keyframes.StrokeLineJoin.Miter)
	};
	g.keyframes.Layer.addMiterLimit = function(a, b) {
		a.addFieldOffset(17, b, 0)
	};
	g.keyframes.Layer.addBitmapIndex = function(a, b) {
		a.addFieldInt32(18, b, -1)
	};
	g.keyframes.Layer.addSubdocumentIndex = function(a, b) {
		a.addFieldInt32(19, b, -1)
	};
	g.keyframes.Layer.addPlugins = function(a, b) {
		a.addFieldOffset(20, b, 0)
	};
	g.keyframes.Layer.createPluginsVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.Layer.startPluginsVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.Layer.addProgressOffset = function(a, b) {
		a.addFieldFloat32(21, b, 0)
	};
	g.keyframes.Layer.addClippingPath = function(a, b) {
		a.addFieldOffset(22, b, 0)
	};
	g.keyframes.Layer.addPosition = function(a, b) {
		a.addFieldOffset(23, b, 0)
	};
	g.keyframes.Layer.addIsTrackMatte = function(a, b) {
		a.addFieldInt8(24, +b, 0)
	};
	g.keyframes.Layer.addTrackMatteType = function(a, b) {
		a.addFieldInt8(25, b, g.keyframes.TrackMatteType.None)
	};
	g.keyframes.Layer.addVectorCompositeOrder = function(a, b) {
		a.addFieldInt8(26, b, g.keyframes.VectorCompositeOrder.FillStroke)
	};
	g.keyframes.Layer.addText = function(a, b) {
		a.addFieldOffset(27, b, 0)
	};
	g.keyframes.Layer.addTextTypeface = function(a, b) {
		a.addFieldOffset(28, b, 0)
	};
	g.keyframes.Layer.addTextSize = function(a, b) {
		a.addFieldFloat32(29, b, 0)
	};
	g.keyframes.Layer.addTextColor = function(a, b) {
		a.addFieldOffset(30, b, 0)
	};
	g.keyframes.Layer.addTextAlign = function(a, b) {
		a.addFieldFloat32(31, b, 0)
	};
	g.keyframes.Layer.addTextVAlign = function(a, b) {
		a.addFieldFloat32(32, b, 0)
	};
	g.keyframes.Layer.addTextTracking = function(a, b) {
		a.addFieldFloat32(33, b, 0)
	};
	g.keyframes.Layer.addTextLeading = function(a, b) {
		a.addFieldFloat32(34, b, 0)
	};
	g.keyframes.Layer.addTextItalic = function(a, b) {
		a.addFieldInt8(35, +b, 0)
	};
	g.keyframes.Layer.addTextWeight = function(a, b) {
		a.addFieldInt8(36, b, g.keyframes.TextWeight.Thin)
	};
	g.keyframes.Layer.addTextBoxSize = function(a, b) {
		a.addFieldStruct(37, b, 0)
	};
	g.keyframes.Layer.addVideoLevels = function(a, b) {
		a.addFieldOffset(38, b, 0)
	};
	g.keyframes.Layer.createVideoLevelsVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.Layer.startVideoLevelsVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.Layer.addVideoIndex = function(a, b) {
		a.addFieldInt32(39, b, -1)
	};
	g.keyframes.Layer.endLayer = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Layer.createLayer = function(a, b, c, d, e, f, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P) {
		g.keyframes.Layer.startLayer(a);
		g.keyframes.Layer.addId(a, b);
		g.keyframes.Layer.addSublayers(a, c);
		g.keyframes.Layer.addFromProgress(a, d);
		g.keyframes.Layer.addToProgress(a, e);
		g.keyframes.Layer.addAnchorPoint(a, f);
		g.keyframes.Layer.addXPosition(a, h);
		g.keyframes.Layer.addYPosition(a, i);
		g.keyframes.Layer.addRotation(a, j);
		g.keyframes.Layer.addScale(a, k);
		g.keyframes.Layer.addPath(a, l);
		g.keyframes.Layer.addOpacity(a, m);
		g.keyframes.Layer.addFillColor(a, n);
		g.keyframes.Layer.addStrokeColor(a, o);
		g.keyframes.Layer.addStrokeWidth(a, p);
		g.keyframes.Layer.addStrokeLineCap(a, q);
		g.keyframes.Layer.addGradient(a, r);
		g.keyframes.Layer.addStrokeLineJoin(a, s);
		g.keyframes.Layer.addMiterLimit(a, t);
		g.keyframes.Layer.addBitmapIndex(a, u);
		g.keyframes.Layer.addSubdocumentIndex(a, v);
		g.keyframes.Layer.addPlugins(a, w);
		g.keyframes.Layer.addProgressOffset(a, x);
		g.keyframes.Layer.addClippingPath(a, y);
		g.keyframes.Layer.addPosition(a, z);
		g.keyframes.Layer.addIsTrackMatte(a, A);
		g.keyframes.Layer.addTrackMatteType(a, B);
		g.keyframes.Layer.addVectorCompositeOrder(a, C);
		g.keyframes.Layer.addText(a, D);
		g.keyframes.Layer.addTextTypeface(a, E);
		g.keyframes.Layer.addTextSize(a, F);
		g.keyframes.Layer.addTextColor(a, G);
		g.keyframes.Layer.addTextAlign(a, H);
		g.keyframes.Layer.addTextVAlign(a, I);
		g.keyframes.Layer.addTextTracking(a, J);
		g.keyframes.Layer.addTextLeading(a, K);
		g.keyframes.Layer.addTextItalic(a, L);
		g.keyframes.Layer.addTextWeight(a, M);
		g.keyframes.Layer.addTextBoxSize(a, N);
		g.keyframes.Layer.addVideoLevels(a, O);
		g.keyframes.Layer.addVideoIndex(a, P);
		return g.keyframes.Layer.endLayer(a)
	};
	g.keyframes.Document = function() {
		this.bb = null, this.bb_pos = 0
	};
	g.keyframes.Document.prototype.__init = function(a, b) {
		this.bb_pos = a;
		this.bb = b;
		return this
	};
	g.keyframes.Document.getRootAsDocument = function(a, b) {
		return (b || new g.keyframes.Document()).__init(a.readInt32(a.position()) + a.position(), a)
	};
	g.keyframes.Document.bufferHasIdentifier = function(a) {
		return a.__has_identifier("KEYF")
	};
	g.keyframes.Document.prototype.size = function(a) {
		var b = this.bb.__offset(this.bb_pos, 4);
		return b ? (a || new g.keyframes.Size()).__init(this.bb_pos + b, this.bb) : null
	};
	g.keyframes.Document.prototype.frameRate = function() {
		var a = this.bb.__offset(this.bb_pos, 6);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Document.prototype.mutate_frame_rate = function(a) {
		var b = this.bb.__offset(this.bb_pos, 6);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Document.prototype.duration = function() {
		var a = this.bb.__offset(this.bb_pos, 8);
		return a ? this.bb.readFloat32(this.bb_pos + a) : 0
	};
	g.keyframes.Document.prototype.mutate_duration = function(a) {
		var b = this.bb.__offset(this.bb_pos, 8);
		if (b === 0) return !1;
		this.bb.writeFloat32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Document.prototype.version = function() {
		var a = this.bb.__offset(this.bb_pos, 10);
		return a ? this.bb.readInt32(this.bb_pos + a) : 0
	};
	g.keyframes.Document.prototype.mutate_version = function(a) {
		var b = this.bb.__offset(this.bb_pos, 10);
		if (b === 0) return !1;
		this.bb.writeInt32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Document.prototype.rootLayer = function(a) {
		var b = this.bb.__offset(this.bb_pos, 12);
		return b ? (a || new g.keyframes.Layer()).__init(this.bb.__indirect(this.bb_pos + b), this.bb) : null
	};
	g.keyframes.Document.prototype.bitmaps = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 14);
		return c ? (b || new g.keyframes.Bitmap()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.Document.prototype.bitmapsLength = function() {
		var a = this.bb.__offset(this.bb_pos, 14);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Document.prototype.subdocuments = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 16);
		return c ? (b || new g.keyframes.Document()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.Document.prototype.subdocumentsLength = function() {
		var a = this.bb.__offset(this.bb_pos, 16);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Document.prototype.plugins = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 18);
		return c ? this.bb.__string(this.bb.__vector(this.bb_pos + c) + a * 4, b) : null
	};
	g.keyframes.Document.prototype.pluginsLength = function() {
		var a = this.bb.__offset(this.bb_pos, 18);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Document.prototype.id = function() {
		var a = this.bb.__offset(this.bb_pos, 20);
		return a ? this.bb.readInt32(this.bb_pos + a) : 0
	};
	g.keyframes.Document.prototype.mutate_id = function(a) {
		var b = this.bb.__offset(this.bb_pos, 20);
		if (b === 0) return !1;
		this.bb.writeInt32(this.bb_pos + b, a);
		return !0
	};
	g.keyframes.Document.prototype.manifest = function(a) {
		var b = this.bb.__offset(this.bb_pos, 22);
		return b ? this.bb.readUint8(this.bb.__vector(this.bb_pos + b) + a) : 0
	};
	g.keyframes.Document.prototype.manifestLength = function() {
		var a = this.bb.__offset(this.bb_pos, 22);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Document.prototype.manifestArray = function() {
		var a = this.bb.__offset(this.bb_pos, 22);
		return a ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + a), this.bb.__vector_len(this.bb_pos + a)) : null
	};
	g.keyframes.Document.prototype.progressMarkers = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 24);
		return c ? (b || new g.keyframes.ProgressMarker()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.Document.prototype.progressMarkersLength = function() {
		var a = this.bb.__offset(this.bb_pos, 24);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Document.prototype.videos = function(a, b) {
		var c = this.bb.__offset(this.bb_pos, 26);
		return c ? (b || new g.keyframes.Video()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + c) + a * 4), this.bb) : null
	};
	g.keyframes.Document.prototype.videosLength = function() {
		var a = this.bb.__offset(this.bb_pos, 26);
		return a ? this.bb.__vector_len(this.bb_pos + a) : 0
	};
	g.keyframes.Document.startDocument = function(a) {
		a.startObject(12)
	};
	g.keyframes.Document.addSize = function(a, b) {
		a.addFieldStruct(0, b, 0)
	};
	g.keyframes.Document.addFrameRate = function(a, b) {
		a.addFieldFloat32(1, b, 0)
	};
	g.keyframes.Document.addDuration = function(a, b) {
		a.addFieldFloat32(2, b, 0)
	};
	g.keyframes.Document.addVersion = function(a, b) {
		a.addFieldInt32(3, b, 0)
	};
	g.keyframes.Document.addRootLayer = function(a, b) {
		a.addFieldOffset(4, b, 0)
	};
	g.keyframes.Document.addBitmaps = function(a, b) {
		a.addFieldOffset(5, b, 0)
	};
	g.keyframes.Document.createBitmapsVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.Document.startBitmapsVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.Document.addSubdocuments = function(a, b) {
		a.addFieldOffset(6, b, 0)
	};
	g.keyframes.Document.createSubdocumentsVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.Document.startSubdocumentsVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.Document.addPlugins = function(a, b) {
		a.addFieldOffset(7, b, 0)
	};
	g.keyframes.Document.createPluginsVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.Document.startPluginsVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.Document.addId = function(a, b) {
		a.addFieldInt32(8, b, 0)
	};
	g.keyframes.Document.addManifest = function(a, b) {
		a.addFieldOffset(9, b, 0)
	};
	g.keyframes.Document.createManifestVector = function(a, b) {
		a.startVector(1, b.length, 1);
		for (var c = b.length - 1; c >= 0; c--) a.addInt8(b[c]);
		return a.endVector()
	};
	g.keyframes.Document.startManifestVector = function(a, b) {
		a.startVector(1, b, 1)
	};
	g.keyframes.Document.addProgressMarkers = function(a, b) {
		a.addFieldOffset(10, b, 0)
	};
	g.keyframes.Document.createProgressMarkersVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.Document.startProgressMarkersVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.Document.addVideos = function(a, b) {
		a.addFieldOffset(11, b, 0)
	};
	g.keyframes.Document.createVideosVector = function(a, b) {
		a.startVector(4, b.length, 4);
		for (var c = b.length - 1; c >= 0; c--) a.addOffset(b[c]);
		return a.endVector()
	};
	g.keyframes.Document.startVideosVector = function(a, b) {
		a.startVector(4, b, 4)
	};
	g.keyframes.Document.endDocument = function(a) {
		a = a.endObject();
		return a
	};
	g.keyframes.Document.finishDocumentBuffer = function(a, b) {
		a.finish(b, "KEYF")
	};
	g.keyframes.Document.createDocument = function(a, b, c, d, e, f, h, i, j, k, l, m, n) {
		g.keyframes.Document.startDocument(a);
		g.keyframes.Document.addSize(a, b);
		g.keyframes.Document.addFrameRate(a, c);
		g.keyframes.Document.addDuration(a, d);
		g.keyframes.Document.addVersion(a, e);
		g.keyframes.Document.addRootLayer(a, f);
		g.keyframes.Document.addBitmaps(a, h);
		g.keyframes.Document.addSubdocuments(a, i);
		g.keyframes.Document.addPlugins(a, j);
		g.keyframes.Document.addId(a, k);
		g.keyframes.Document.addManifest(a, l);
		g.keyframes.Document.addProgressMarkers(a, m);
		g.keyframes.Document.addVideos(a, n);
		return g.keyframes.Document.endDocument(a)
	};
	e.exports = g.keyframes
}), null);