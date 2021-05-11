__d("CandelaScalingStrategyTime", ["invariant", "BinarySearch", "CandelaConstants", 
	"CandelaScalingStrategyBase", "CandelaScalingStrategyNumeric", "DateTime", 
	"PeriodUnit", "Timezone", "immutable", "nearlyEqualNumbers"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("immutable").OrderedSet,
		i = b("CandelaConstants").TIME_INTERVALS_DESC;
	a = b("CandelaConstants").TimeInterval;
	var j = a.DAY,
		k = a.HOUR,
		l = a.MIN,
		m = a.MONTH,
		n = a.SEC,
		o = a.WEEK,
		p = a.YEAR,
		q = (c = {}, c[j] = (d = b("PeriodUnit")).day, c[k] = d.hour, c[l] = d.minute, c[m] = d.month, c[n] = d.second, c[o] = d.week, c[p] = d.year, c);
	f = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(b) {
			if (b.origin) throw new Error("CandelaTimeScale does not support custom origin");
			return a.call(this, b) || this
		}
		var d = c.prototype;
		d.__finalizeProps = function(c) {
			return a.prototype.__finalizeProps.call(this, babelHelpers["extends"]({
				timeSteps: b("CandelaConstants").TIME_STEPS,
				timezoneID: b("Timezone").UTC
			}, c))
		};
		d.invert = function(c) {
			return b("DateTime").create(a.prototype.invert.call(this, c), this.props.timezoneID)
		};
		d.__calculateNiceStep = function(c, d) {
			var e = d,
				f = e.firstPadding,
				h = e.lastPadding,
				i = e.minStepInterval,
				j = e.output,
				k = e.stepIntervalHint;
			e = e.timeSteps;
			var l = b("BinarySearch").findBoundInArray(e, c, function(a, b) {
				return a - b
			}, b("BinarySearch").LEAST_UPPER_BOUND);
			l || g(0, 5482);
			if (l === e.length) {
				d = babelHelpers["extends"]({}, d, {
					input: d.input.map(function(a) {
						return a / p
					})
				});
				return a.prototype.__calculateNiceStep.call(this, c / p, d) * p
			}
			if (c / e[l - 1] < e[l] / c)
				if (k && i) {
					c = e[l - 1];
					k = this.__roundInput(c, d);
					d = b("CandelaScalingStrategyBase").getExtentValue(k);
					k = d / c + f + h;
					d = b("CandelaScalingStrategyBase").getExtentValue(j);
					c = d / k;
					c >= i && (l -= 1)
				} else l -= 1;
			return e[l]
		};
		d.__computeSteps = function(c, d, e) {
			if (e.steps) return e.steps;
			if (!e.roundInput && !e.niceStepOnly) return h(a.prototype.__computeSteps.call(this, c, d, e).map(function(a) {
				return b("DateTime").create(a, e.timezoneID)
			}));
			var f = i.find(function(a) {
				return a <= c
			});
			typeof f === "number" || g(0, 5483);
			var j = c / f,
				k = q[f],
				l = {};
			f = e.input;
			var m = f.first();
			f = f.last();
			m > f && (j *= -1);
			return h([]).withMutations(function(a) {
				for (var b = 0; b <= d; b++) l[k] = j * b, a.add(m.add(l))
			})
		};
		d.__extend = function(a, b, c) {
			return a < b ? a.subtractDuration(c) : a.addDuration(c)
		};
		d.__roundInput = function(a, c) {
			c = c.input;
			var d = i.find(function(b) {
				return b <= a
			});
			typeof d === "number" || g(0, 5483);
			var e = a / d,
				f = q[d],
				j = c.first(),
				k = c.last(),
				l = j < k ? j.floor(f) : j.ceil(f);
			f = j < k ? k.ceil(f) : k.floor(f);
			var m = b("CandelaScalingStrategyBase").getExtentValue(c);
			m = m / a;
			return b("nearlyEqualNumbers")(m, Math.round(m)) && j.equals(l) && k.equals(f) ? c : h([this.$ScalingStrategyTime1(l, f, d, e), this.$ScalingStrategyTime1(f, l, d, e)])
		};
		d.$ScalingStrategyTime1 = function(a, b, d, e) {
			var f = q[d];
			d = c.value(a, d) % e;
			a > b && (d = d ? d - e : -d);
			b = {};
			b[f] = d;
			return a.subtract(b)
		};
		c.value = function(a, b) {
			switch (b) {
				case p:
					return a.getYear();
				case m:
					return a.getMonth() - 1;
				case o:
					return a.getWeekOfYear();
				case j:
					return a.getDayOfMonth() - 1;
				case k:
					return a.getHours();
				case l:
					return a.getMinutes();
				case n:
					return a.getSeconds()
			}
			throw new Error("Invalid timeInterval given")
		};
		return c
	}(b("CandelaScalingStrategyNumeric"));
	e.exports = f
}), null);