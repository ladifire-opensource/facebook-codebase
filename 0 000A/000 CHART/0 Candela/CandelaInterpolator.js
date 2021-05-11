__d("CandelaInterpolator", ["invariant"], (function(a, b, c, d, e, f, g) {
	"use strict";
	a = function() {
		function a(a) {
			this.$1 = a
		}
		a.fromConstant = function(b) {
			return new a(function() {
				return b
			})
		};
		a.fromLinear = function(b, c) {
			var d = b.first(),
				e = b.last();
			e = b.size === 1 ? e : (e -= d) || 1 / e;
			return new a(function(a) {
				return b.size === 1 ? .5 : c ? Math.max(0, Math.min(1, (a - d) / e)) : (a - d) / e
			})
		};
		a.fromOrdinal = function(b) {
			return new a(function(a) {
				var c = b.indexOf(a);
				c !== -1 || g(0, 5808, a, b.toArray());
				return c / b.size
			})
		};
		var b = a.prototype;
		b.toLinear = function(a, b) {
			var c = this,
				d = a.first(),
				e = a.last();
			return function(a) {
				a = c.$1(a);
				a = d * (1 - a) + e * a;
				return b ? Math.round(a) : a
			}
		};
		b.toOrdinal = function(a) {
			var b = this;
			return function(c) {
				c = b.$1(c);
				c = Math.min(a.size - 1, Math.floor(a.size * c));
				return a.get(c)
			}
		};
		return a
	}();
	e.exports = a
}), null);