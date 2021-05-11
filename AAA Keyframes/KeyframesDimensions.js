__d("KeyframesDimensions", ["invariant", "WebPixelRatio"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("WebPixelRatio").get(),
		i = function() {
			function a(a) {
				this.overridden = !1, this.intrinsic = a, this.$1(a)
			}
			var b = a.prototype;
			b.$1 = function(a) {
				this.logical = a, this.physical = Math.floor(this.logical * h)
			};
			b.scale = function(a, b) {
				this.overridden && g(0, 1136), this.$1(a * b)
			};
			b.override = function(a) {
				this.overridden = !0, this.$1(a)
			};
			b.reset = function() {
				this.overridden = !1, this.$1(this.intrinsic)
			};
			b.getPhysicalChangeRatio = function() {
				return this.physical / this.intrinsic
			};
			return a
		}();
	a = function() {
		function a(a, b) {
			this.ratio = b ? a / b : 0, this.width = new i(a), this.height = new i(b)
		}
		var b = a.prototype;
		b.setWidth = function(a) {
			this.width.override(a), this.height.overridden || this.height.scale(a, this.ratio ? 1 / this.ratio : 0)
		};
		b.setHeight = function(a) {
			this.height.override(a), this.width.overridden || this.width.scale(a, this.ratio)
		};
		b.reset = function() {
			this.height.reset(), this.width.reset()
		};
		return a
	}();
	e.exports = a
}), null);