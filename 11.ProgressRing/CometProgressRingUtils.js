__d("CometProgressRingUtils", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.getCubicBezierPercentageFunc = a;
	f.getRingColor = b;

	function a(a, b, c, d) {
		function e(a, b) {
			return 1 - 3 * b + 3 * a
		}

		function f(a, b) {
			return 3 * b - 6 * a
		}

		function g(a) {
			return 3 * a
		}

		function h(a, b, c) {
			return ((e(b, c) * a + f(b, c)) * a + g(b)) * a
		}

		function i(a, b, c) {
			return 3 * e(b, c) * a * a + 2 * f(b, c) * a + g(b)
		}

		function j(b) {
			var d = b;
			for (var e = 0; e < 4; ++e) {
				var f = i(d, a, c);
				if (f === 0) return d;
				var g = h(d, a, c) - b;
				d -= g / f
			}
			return d
		}
		return function (e) {
			return a === b && c === d ? e : h(j(e), b, d)
		}
	}

	function b(a) {
		switch (a) {
			case "dark":
				return {
					backgroundColor: "var(--progress-ring-neutral-background)",
					foregroundColor: "var(--progress-ring-neutral-foreground)"
				};
			case "light":
				return {
					backgroundColor: "var(--progress-ring-on-media-background)",
					foregroundColor: "var(--progress-ring-on-media-foreground)"
				};
			case "blue":
				return {
					backgroundColor: "var(--progress-ring-blue-background)",
					foregroundColor: "var(--progress-ring-blue-foreground)"
				};
			case "disabled":
				return {
					backgroundColor: "var(--progress-ring-disabled-background)",
					foregroundColor: "var(--progress-ring-disabled-foreground)"
				};
			default:
				return {
					backgroundColor: "var(--progress-ring-neutral-background)",
					foregroundColor: "var(--progress-ring-neutral-foreground)"
				}
		}
	}
}), null);