__d("CandelaImmutableObject", ["immutable"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("immutable").Map;
	a = function() {
		function a(a) {
			this.$1 = g(a)
		}
		var b = a.prototype;
		b.merge = function(a) {
			a = this.$1.merge(a);
			return a === this.$1 ? this : new this.constructor(a.toObject())
		};
		b.set = function(a, b) {
			var c = {};
			c[a] = b;
			return this.merge(c)
		};
		return a
	}();
	e.exports = a
}), null);