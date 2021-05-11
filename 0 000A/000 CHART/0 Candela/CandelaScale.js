__d("CandelaScale", ["invariant", "CandelaScalingStrategyBase", 
	"CandelaScalingStrategyCategory", "CandelaScalingStrategyNumeric", 
	"CandelaScalingStrategyTime", "filterObject", "immutable"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("immutable").Map;
	a = function() {
		function a(a) {
			a = b("filterObject")(a, function(a) {
				return a !== void 0
			});
			this.$1 = h(a);
			var c = this.constructor.strategyCtorMap[a.strategy];
			this.strategy === void 0 || g(0, 1459);
			this.strategy = new c(a);
			this.props = this.strategy.props
		}
		var c = a.prototype;
		c.merge = function(a) {
			var b = this.constructor,
				c = this.$1.merge(a);
			return c === this.$1 ? this : new b(babelHelpers["extends"]({}, c.toObject(), a))
		};
		c.set = function(a, b) {
			var c;
			return this.merge((c = {}, c[a] = b, c))
		};
		c.convert = function(a) {
			return this.strategy.convert(a)
		};
		c.invert = function(a) {
			return this.strategy.invert(a)
		};
		return a
	}();
	e.exports = a;
	a.strategyCtorMap = {
		numeric: b("CandelaScalingStrategyNumeric"),
		time: b("CandelaScalingStrategyTime"),
		category: b("CandelaScalingStrategyCategory")
	};
	a.getExtent = b("CandelaScalingStrategyBase").getExtent;
	a.getExtentValue = b("CandelaScalingStrategyBase").getExtentValue
}), null);