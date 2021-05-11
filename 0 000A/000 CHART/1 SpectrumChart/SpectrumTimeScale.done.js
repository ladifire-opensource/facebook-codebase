__d("SpectrumTimeScale", ["BinarySearch", "d3-old/core/range", "d3-old/scale/linear", "formatDate", "d3-old/time/year", "d3-old/time/month", "d3-old/time/day", "d3-old/time/hour", "d3-old/time/minute", "d3-old/time/second"], (function(a, b, c, d, e, f) {
	function g(a, c) {
		return function(d) {
			return b("formatDate")(new Date(d), a, {
				utc: !0,
				skipPatternLocalization: c
			})
		}
	}
	a = {
		Year: b("d3-old/time/year").utc,
		Month: b("d3-old/time/month").utc,
		Day: b("d3-old/time/day").utc,
		Hour: b("d3-old/time/hour").utc,
		Minute: b("d3-old/time/minute").utc,
		Second: b("d3-old/time/second").utc
	};
	var h = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];
	c = {
		format: g("Y"),
		interval: a.Year,
		next: null
	};
	d = {
		format: g("M", !0),
		interval: a.Month,
		next: c
	};
	f = {
		format: g("d", !0),
		interval: a.Day,
		next: d
	};
	var i = {
			format: g("H", !0),
			interval: a.Hour,
			next: f
		},
		j = {
			format: g("i", !0),
			interval: a.Minute,
			next: i
		},
		k = {
			format: g("s", !0),
			interval: a.Second,
			next: j
		},
		l = [k, k, k, k, j, j, j, j, i, i, i, i, f, f, f, d, d, c];

	function m(a) {
		var b = a[0];
		a = a[a.length - 1];
		return b < a ? [b, a] : [a, b]
	}

	function n(a) {
		while (a > 0) {
			if (l[a] != l[a - 1]) return a;
			a--
		}
		return a
	}

	function o(a, c) {
		a = m(a);
		a = a[1] - a[0];
		a = a / c;
		c = b("BinarySearch").findBoundInArray(h, a, function(a, b) {
			return a - b
		}, b("BinarySearch").LEAST_UPPER_BOUND);
		c == h.length && (c = h.length - 1);
		if (!c) return -1;
		a / h[c - 1] < h[c] / a && c--;
		return c
	}

	function p(a, b, c) {
		a = o(a, b);
		if (c) {
			b = c.offset(0, 1);
			while (h[a] < b && a < h.length - 1) a++
		}
		return {
			step: h[a] || 1,
			config: l[a] || k,
			index: a
		}
	}

	function q(a, b) {
		var c = a.format;
		c.primary = c;
		a.next && (c.secondary = a.next.format);
		c.bucketTicks = b;
		return c
	}

	function r(a, b, c) {
		var d = 1;
		if (c) {
			var e = n(c);
			d = Math.floor(h[c] / h[e])
		}
		c = [];
		e = new Date(a[0]);
		e = b.interval.ceil(e);
		while (e <= new Date(a[1])) c.push(e), e = b.interval.offset(e, d);
		return c
	}

	function s(a) {
		function c(b) {
			return Math.floor(+b / a) * a
		}

		function d(b) {
			return Math.round(+b / a) * a
		}

		function e(b) {
			return Math.ceil(+b / a) * a
		}

		function f(b, c) {
			return +b + c * a
		}

		function g(c, d, f) {
			return b("d3-old/core/range")(e(c), d, (f || 1) * a)
		}
		c.floor = c;
		c.round = d;
		c.ceil = e;
		c.offset = f;
		c.range = g;
		return c
	}

	function t(a, b, c) {
		function d(a) {
			return b(a)
		}
		d.tickFormatMaxLength = 10;
		d.interval = function(b) {
			if (!arguments.length) return a;
			var c = d.domain();
			a = typeof b === "number" ? s(b) : b;
			d.domain(c);
			return d
		};
		d.invert = function(c) {
			return a ? a.floor(new Date(b.invert(c))) : new Date(b.invert(c))
		};
		d.domain = function(c) {
			if (!arguments.length)
				if (a) return [b.domain()[0], a.offset(b.domain()[1], 1)];
				else return b.domain();
			a ? b.domain([a.floor(new Date(c[0])), a.offset(a.ceil(new Date(c[1])), -1)]) : b.domain(c);
			return d
		};
		d.nice = function(c) {
			if (!c) return d;
			c = p(b.domain(), c, a).step;
			var e = d.domain(),
				f = e[0];
			e = e[e.length - 1];
			f < e ? (f = Math.floor(f / c) * c, e = Math.ceil(e / c) * c) : (f = Math.ceil(f / c) * c, e = Math.floor(e / c) * c);
			return d.domain([f, e])
		};
		d.ticks = function(c) {
			c = p(b.domain(), c, a);
			return r(b.domain(), c.config, c.index)
		};
		d.secondaryTicks = function(c) {
			c = p(b.domain(), c, a).config;
			c = c.next;
			return !c ? [] : r(b.domain(), c)
		};
		d.tickFormat = function(c) {
			c = p(b.domain(), c, a);
			var d = c.config;
			c = n(c.index) == c.index;
			return q(d, c)
		};
		var e = g("M j, Y");
		d.tooltipFormat = function() {
			return e
		};
		d.setTooltipFormat = function(a, b) {
			e = g(a, b)
		};
		d.range = function(a) {
			if (!arguments.length) return b.range();
			b.range(a);
			return d
		};
		d.rangeBands = function(e, f, g) {
			arguments.length < 2 && (f = 0);
			arguments.length < 3 && (g = f);
			if (!a) {
				c = 0;
				return d.range(e)
			}
			var h = a.range(b.domain()[0], b.domain()[1]).length,
				i = e[1] < e[0],
				j = e[i - 0],
				k = e[1 - i],
				l = (k - j) / (h + 1 - f + 2 * g),
				m = [j + l * g, j + l * h];
			i && m.reverse();
			c = l * (1 - f);
			b.range(m);
			return d
		};
		d.rangeBand = function() {
			return c
		};
		d.baseScale = function() {
			return b
		};
		d.copy = function() {
			return t(a, b.copy(), c)
		};
		d.interpolate = function(a) {
			if (arguments.length === 1) {
				b.interpolate(a);
				return d
			} else return b.interpolate()
		};
		d.clamp = function(a) {
			if (arguments.length === 1) {
				b.clamp(a);
				return d
			} else return b.clamp()
		};
		return d
	}
	j = function() {
		return t(null, b("d3-old/scale/linear")(), 0)
	};
	j.Intervals = a;
	e.exports = j
}), null);