__d("CandelaScalingStrategyCategory", ["CandelaInterpolator", "CandelaScalingStrategyBase", "immutable"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("immutable").OrderedSet;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.__finalizeProps = function(c) {
			c = a.prototype.__finalizeProps.call(this, babelHelpers["extends"]({}, c, {
				clamp: !0
			}));
			var d = c.firstPadding,
				e = c.input,
				f = c.lastPadding,
				h = c.output;
			if (!e.size || !h || !h.size) {
				c.steps = g();
				return c
			}
			c.steps = e;
			if (d || f) {
				var i = b("CandelaScalingStrategyBase").getExtentValue(h),
					j = e.size + d + f;
				i = i / j;
				h = this.$ScalingStrategyCategory1(d * i, f * i, c);
				c.output = h
			}
			c.outputStepInterval = b("CandelaScalingStrategyBase").getExtentValue(h) / e.size;
			return c
		};
		d.__getConverter = function() {
			var a = this.props,
				c = a.input,
				d = a.output;
			a = a.roundOutput;
			return b("CandelaInterpolator").fromOrdinal(c.toIndexedSeq()).toLinear(d, a)
		};
		d.__getInverter = function() {
			var a = this.props,
				c = a.input,
				d = a.output;
			a = a.clamp;
			return b("CandelaInterpolator").fromLinear(d, a).toOrdinal(c.toIndexedSeq())
		};
		d.$ScalingStrategyCategory1 = function(a, b, c) {
			c = c.output;
			var d = c.first();
			c = c.last();
			return g([this.$ScalingStrategyCategory2(d, c, a), this.$ScalingStrategyCategory2(c, d, b)])
		};
		d.$ScalingStrategyCategory2 = function(a, b, c) {
			return a < b ? a + c : a - c
		};
		return c
	}(b("CandelaScalingStrategyBase"));
	e.exports = a
}), null);