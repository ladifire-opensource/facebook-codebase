__d("CandelaScalingStrategyNumeric", ["invariant", "CandelaConstants", 
	"CandelaInterpolator", "CandelaScalingStrategyBase", "immutable"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("immutable").OrderedSet;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.__calculateNiceStep = function(a, c) {
			var d = Math.pow(10, Math.floor(Math.log(a) / Math.LN10));
			c = c.input;
			c = b("CandelaScalingStrategyBase").getExtentValue(c);
			a = c / a;
			a = a / c * d;
			a <= .15 ? d *= 10 : a <= .35 ? d *= 5 : a <= .75 && (d *= 2);
			return d
		};
		d.__computeSteps = function(a, b, c) {
			if (c.steps) return c.steps;
			c = c.input;
			var d = c.first();
			c = c.last();
			d > c && (a *= -1);
			return h([]).withMutations(function(c) {
				for (var e = 0; e <= b; e++) c.add(d + a * e)
			})
		};
		d.__extendInput = function(a, b, c) {
			c = c.input;
			var d = c.first();
			c = c.last();
			return h([this.__extend(d, c, a), this.__extend(c, d, b)])
		};
		d.__extend = function(a, b, c) {
			return a < b ? a - c : a + c
		};
		d.__finalizeProps = function(c) {
			c = a.prototype.__finalizeProps.call(this, babelHelpers["extends"]({
				niceStepOnly: !1,
				normalizedOutputWhenNoExtent: b("CandelaConstants").NormalizedOutput.LEFT,
				origin: 0,
				roundInput: !1
			}, c));
			var d = c.firstPadding,
				e = c.lastPadding,
				f = c.niceStepOnly,
				i = c.output,
				j = c.roundInput,
				k = c.stepCountHint,
				l = c.stepIntervalHint,
				m = c.input;
			if (!i || k == null && l == null) {
				c.steps = h();
				return c
			}
			var n = b("CandelaScalingStrategyBase").getExtentValue(m);
			i = b("CandelaScalingStrategyBase").getExtentValue(i);
			if (!n) {
				c.steps = m;
				c.inputStepInterval = m.first();
				c.outputStepInterval = i;
				return c
			}
			var o = k;
			l && (o = Math.max(Math.round(i / l), 1), k && (o = Math.min(o, k)));
			o != null || g(0, 5425);
			l = n / o;
			(j || f) && (l = this.__calculateNiceStep(l, c), j ? (m = this.__roundInput(l, c), n = b("CandelaScalingStrategyBase").getExtentValue(m), c.input = m, o = Math.round(n / l)) : o = n / l);
			c.inputStepInterval = l;
			(d >= 1 || e >= 1) && (c.input = this.__extendInput(Math.floor(d) * l, Math.floor(e) * l, c), o += Math.floor(d) + Math.floor(e));
			c.steps = this.__computeSteps(l, o, c);
			(d || e) && (c.input = this.__extendInput(d % 1 * l, e % 1 * l, c), o += d % 1 + e % 1);
			c.outputStepInterval = i / o;
			return c
		};
		d.__getConverter = function() {
			var a = this.props,
				c = a.input,
				d = a.clamp,
				e = a.output;
			a = a.roundOutput;
			var f;
			b("CandelaScalingStrategyBase").getExtentValue(c) === 0 ? f = b("CandelaInterpolator").fromConstant(this.props.normalizedOutputWhenNoExtent) : f = b("CandelaInterpolator").fromLinear(c, d);
			return f.toLinear(e, a)
		};
		d.__getInverter = function() {
			var a = this.props,
				c = a.input,
				d = a.clamp;
			a = a.output;
			return b("CandelaInterpolator").fromLinear(a, d).toLinear(c)
		};
		d.__roundInput = function(a, b) {
			var c = b.input;
			b = b.origin;
			var d = c.first();
			c = c.last();
			return h([this.$ScalingStrategyNumeric1(d, c, a, b), this.$ScalingStrategyNumeric1(c, d, a, b)])
		};
		d.$ScalingStrategyNumeric1 = function(a, b, c, d) {
			return a < b ? Math.floor((a - d) / c) * c + d : Math.ceil((a - d) / c) * c + d
		};
		return c
	}(b("CandelaScalingStrategyBase"));
	e.exports = a
}), null);