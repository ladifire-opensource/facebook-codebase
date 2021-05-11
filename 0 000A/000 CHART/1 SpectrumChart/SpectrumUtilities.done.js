__d("SpectrumUtilities", ["cloneWithProps_DEPRECATED"], (function(a, b, c, d, e, f) {
	function a(a) {
		return a
	}

	function c(a, b) {
		return function() {
			return a(b.apply(this, arguments))
		}
	}

	function d(a, b, c) {
		for (var d = 1, e = a.length; d < e; d++) b.call(c, a[d - 1], d - 1, a[d], d)
	}

	function g(a, b, c) {
		if (a < Math.min(b, c)) return !1;
		return a > Math.max(b, c) ? !1 : !0
	}

	function f(a, b, c) {
		var d = -Infinity,
			e = Infinity,
			f = -Infinity,
			h = Infinity,
			i = Infinity;

		function j(c, j, k, l) {
			var m = k - c,
				n = l - j,
				o = m / n;
			n = n / m;
			m = a - c;
			var p = b - j;
			o = c + o * p;
			p = j + n * m;
			g(o, c, k) && (o > d && o < a && (d = o), o < e && o > a && (e = o));
			g(p, j, l) && (p > f && p < b && (f = p), p < h && p > b && (h = p));
			if (!g(a, c, k)) return 0;
			n = Math.abs(p - b);
			if (n > i) return 0;
			i = n;
			m = Math.abs(a - c);
			o = Math.abs(a - k);
			if (m < o) return b < p ? 1 : 3;
			else return b < p ? 2 : 4
		}
		c(j);
		return {
			left: d,
			right: e,
			top: f,
			bottom: h,
			distance: i
		}
	}

	function h(a) {
		if (!a) return null;
		var b = a.range(),
			c = b[0];
		b = b[b.length - 1];
		a.rangeBand && (b += a.rangeBand());
		return [c, b]
	}

	function i(a, c, d, e) {
		c = babelHelpers["extends"]({}, c, d, e);
		return b("cloneWithProps_DEPRECATED")(a, c)
	}
	c = {
		compose: c,
		findEdges: f,
		forEachVector: d,
		getOuterRange: h,
		identity: a,
		mergeProps: i
	};
	e.exports = c
}), null);