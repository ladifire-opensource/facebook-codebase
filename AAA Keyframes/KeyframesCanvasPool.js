__d("KeyframesCanvasPool", ["KeyframesCanvasPolyfills", "nullthrows"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function() {
		function a(a) {
			var b = this;
			this.$4 = function(a) {
				a.canvas.width = b.$1.width.physical, a.canvas.height = b.$1.height.physical, a.canvas.style.width = b.$1.width.logical + "px", a.canvas.style.height = b.$1.height.logical + "px"
			};
			this.$1 = a;
			this.$2 = [];
			this.$3 = []
		}
		var c = a.prototype;
		c.getCanvas = function() {
			if (this.$2.length) {
				var a = this.$2.pop();
				this.$3.push(a);
				return a
			} else {
				a = document.createElement("canvas");
				var c = b("nullthrows")(a.getContext("2d"));
				b("KeyframesCanvasPolyfills").addGetTransformPolyfill(c);
				a = {
					canvas: a,
					ctx: c
				};
				this.$4(a);
				this.$3.push(a);
				return a
			}
		};
		c.clearAllAllocated = function() {
			var a = this;
			this.$3.forEach(function(b) {
				b.ctx.clearRect(0, 0, Math.max(a.$1.width.physical, a.$1.width.intrinsic), Math.max(a.$1.height.physical, a.$1.height.intrinsic))
			}, this)
		};
		c.freeAll = function() {
			this.$2 = [].concat(this.$3, this.$2), this.$3 = []
		};
		c.resizeAll = function() {
			this.$2.forEach(this.$4, this), this.$3.forEach(this.$4, this)
		};
		return a
	}();
	e.exports = a
}), null);