__d("CandelaScalingStrategyBase", ["invariant", "immutable", "emptyFunction"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("immutable").OrderedSet;
	a = function() {
		function a(a) {
			this.props = {};
			Array.isArray(a.output) && (a.output = h(a.output));
			Array.isArray(a.input) && (a.input = h(a.input));
			a = this.__finalizeProps(a);
			a = Object.entries(a);
			for (var b = 0; b < a.length; b++) {
				var c = a[b],
					d = c[0];
				c = c[1];
				this.props[d] = c
			}
		}
		var c = a.prototype;
		c.convert = function(a) {
			this.props.output || g(0, 5407);
			this.$1 = this.$1 || this.__getConverter();
			return this.$1(a)
		};
		c.invert = function(a) {
			this.props.output || g(0, 5407);
			this.$2 = this.$2 || this.__getInverter();
			return this.$2(a)
		};
		a.getExtentValue = function(a) {
			return Math.abs(a.first() - a.last())
		};
		a.getExtent = function(a) {
			var b = a.first(),
				c = a.last();
			return b < c ? a : h([c, b])
		};
		c.__finalizeProps = function(a) {
			if (!a.output) return babelHelpers["extends"]({
				steps: h()
			}, a);
			a = babelHelpers["extends"]({
				clamp: !1,
				firstPadding: 0,
				lastPadding: 0,
				roundOutput: !1
			}, a);
			return a
		};
		c.__getConverter = function() {
			return b("emptyFunction").thatReturnsNull
		};
		c.__getInverter = function() {
			return b("emptyFunction").thatReturnsNull
		};
		return a
	}();
	e.exports = a
}), null);