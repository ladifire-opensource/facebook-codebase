__d("BinarySearch", ["unrecoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	f.find = m;
	f.findIndex = n;
	f.findBound = o;
	f.leastUpperBound = p;
	f.greatestLowerBound = q;
	f.leastStrictUpperBound = r;
	f.greatestStrictLowerBound = s;
	f.nearest = t;
	f.findInArray = a;
	f.findIndexInArray = c;
	f.findBoundInArray = d;
	e = {
		GREATEST_LOWER_BOUND: "GREATEST_LOWER_BOUND",
		GREATEST_STRICT_LOWER_BOUND: "GREATEST_STRICT_LOWER_BOUND",
		LEAST_STRICT_UPPER_BOUND: "LEAST_STRICT_UPPER_BOUND",
		LEAST_UPPER_BOUND: "LEAST_UPPER_BOUND",
		NEAREST: "NEAREST"
	};
	var g = function (a, c) {
			if (typeof a !== "number" || typeof c !== "number") throw b("unrecoverableViolation")("The default comparator can only be used with sequences of numbers.", "comet_infra");
			return a - c
		},
		h = e.GREATEST_LOWER_BOUND;
	f.GREATEST_LOWER_BOUND = h;
	var i = e.GREATEST_STRICT_LOWER_BOUND;
	f.GREATEST_STRICT_LOWER_BOUND = i;
	var j = e.LEAST_STRICT_UPPER_BOUND;
	f.LEAST_STRICT_UPPER_BOUND = j;
	var k = e.LEAST_UPPER_BOUND;
	f.LEAST_UPPER_BOUND = k;
	var l = e.NEAREST;
	f.NEAREST = l;

	function m(a, b, c, d, e) {
		e === void 0 && (e = g);
		var f = k;
		f = o(a, b, c, d, e, f);
		if (c <= f && f < d) {
			c = a(f);
			return e(c, b) === 0 ? c : void 0
		} else return void 0
	}

	function n(a, b, c, d, e) {
		e === void 0 && (e = g);
		var f = k;
		f = o(a, b, c, d, e, f);
		if (c <= f && f < d) return e(a(f), b) === 0 ? f : -1;
		else return -1
	}

	function o(a, c, d, e, f, g) {
		switch (g) {
			case k:
				return p(a, c, d, e, f);
			case h:
				return q(a, c, d, e, f);
			case j:
				return r(a, c, d, e, f);
			case i:
				return s(a, c, d, e, f);
			case l:
				return t(a, c, d, e, f);
			default:
				throw b("unrecoverableViolation")("Invalid mode " + g, "comet_infra")
		}
	}

	function p(a, b, c, d, e) {
		c = c;
		d = d;
		while (c + 1 < d) {
			var f = c + Math.floor((d - c) / 2);
			e(a(f), b) >= 0 ? d = f : c = f
		}
		return c < d && e(a(c), b) >= 0 ? c : d
	}

	function q(a, b, c, d, e) {
		return r(a, b, c, d, e) - 1
	}

	function r(a, b, c, d, e) {
		c = c;
		d = d;
		while (c + 1 < d) {
			var f = c + Math.floor((d - c) / 2);
			e(a(f), b) > 0 ? d = f : c = f
		}
		return c < d && e(a(c), b) > 0 ? c : d
	}

	function s(a, b, c, d, e) {
		return p(a, b, c, d, e) - 1
	}

	function t(a, b, c, d, e) {
		var f = q(a, b, c, d, e),
			g = Math.abs(e(a(f), b));
		e = Math.abs(e(a(f + 1), b));
		return g < e ? Math.max(f, c) : Math.min(f + 1, d - 1)
	}

	function a(a, b, c) {
		return m(function (b) {
			return a[b]
		}, b, 0, a.length, c)
	}

	function c(a, b, c) {
		return n(function (b) {
			return a[b]
		}, b, 0, a.length, c)
	}

	function d(a, b, c, d) {
		return o(function (b) {
			return a[b]
		}, b, 0, a.length, c, d)
	}
}), null);