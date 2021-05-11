__d("ReactWheelHandler", ["emptyFunction", "normalizeWheel", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function(a, c, d, e) {
		var f = this;
		this.onWheel = function(a) {
			a instanceof Event && (a.deliberateSync = !0);
			var c = b("normalizeWheel")(a),
				d = f.$2 + c.pixelX,
				e = f.$3 + c.pixelY,
				g = f.$4(d, e);
			e = f.$5(e, d);
			if (!g && !e) return;
			f.$2 += g ? c.pixelX : 0;
			f.$3 += e ? c.pixelY : 0;
			a.preventDefault();
			var h;
			(f.$2 !== 0 || f.$3 !== 0) && (f.$6() && a.stopPropagation(), h = !0);
			h === !0 && f.$1 === null && (f.$1 = b("requestAnimationFramePolyfill")(f.$8))
		};
		this.$8 = function() {
			f.$1 = null, f.$7(f.$2, f.$3), f.$2 = 0, f.$3 = 0
		};
		this.$1 = null;
		this.$2 = 0;
		this.$3 = 0;
		c = c;
		d = d;
		e = e;
		typeof c !== "function" && (c = c ? b("emptyFunction").thatReturnsTrue : b("emptyFunction").thatReturnsFalse);
		typeof d !== "function" && (d = d ? b("emptyFunction").thatReturnsTrue : b("emptyFunction").thatReturnsFalse);
		typeof e !== "function" && (e = e === !0 ? b("emptyFunction").thatReturnsTrue : b("emptyFunction").thatReturnsFalse);
		this.$4 = c;
		this.$5 = d;
		this.$6 = e;
		this.$7 = a
	};
	e.exports = a
}), null);