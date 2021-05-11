__d("CometFlexibleGrid.react", ["React", "stylex", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React");

	function a(a) {
		var c = a.columnMaxWidth,
			d = a.columnMinWidth,
			e = a.justify;
		e = e === void 0 ? "start" : e;
		var f = a.maxItems;
		f = f === void 0 ? Infinity : f;
		var i = a.minItems,
			j = i === void 0 ? 1 : i,
			k = a.onTotalItemsChanged,
			l = h.Children.toArray(a.children);
		i = h.useState(l.length);
		var m = i[0],
			n = i[1],
			o = h.useRef(null);
		h.useLayoutEffect(function() {
			function a(a) {
				a !== m && (k && k(a), n(a))
			}

			function b() {
				if (o.current != null) {
					var b = o.current.children,
						c = b[j - 1].offsetTop;
					for (var d = j; d < b.length; d++)
						if (b[d].offsetTop > c) {
							a(d);
							return
						} a(b.length)
				}
			}
			b();
			window.addEventListener("resize", b);
			return function() {
				window.removeEventListener("resize", b)
			}
		}, [c, d, j, f, m, k]);
		if (j > f) throw b("unrecoverableViolation")("minItems must be less than maxItems", "comet_ui");
		a = Math.min(Math.max(j, l.length + (e !== "center" ? 10 : 0)), f);
		return h.jsx("div", {
			className: (g || (g = b("stylex"))).dedupe({
				"align-content-1": "bq4bzpyk",
				"display-1": "j83agx80",
				"flex-direction-1": "btwxx1t3",
				"flex-wrap-1": "lhclo0ds",
				"justify-content-1": "jifvfom9",
				"margin-top-1": "muag1w35",
				"margin-end-1": "dlv3wnog",
				"margin-bottom-1": "enqfppq2",
				"margin-start-1": "rl04r1d5"
			}, e === "center" ? {
				"justify-content-1": "taijpn5t"
			} : null),
			ref: o,
			children: Array(a).fill().map(function(a, e) {
				a = l[e];
				var f = e < m;
				return h.jsx("div", {
					className: (g || (g = b("stylex"))).dedupe({
						"box-sizing-1": "rq0escxv",
						"display-1": "j83agx80",
						"flex-basis-1": "rj1gh0hx",
						"flex-direction-1": "cbu4d94t",
						"flex-grow-1": "buofh1pr",
						"flex-shrink-1": "g5gj957u",
						"padding-end-1": "ph5uu5jm",
						"padding-start-1": "b3onmgus",
						"visibility-1": "kr9hpln1"
					}, f ? {
						"padding-bottom-1": "e5nlhep0",
						"padding-top-1": "ecm0bbzt",
						"visibility-1": "n1dktuyu"
					} : null),
					style: {
						maxWidth: c,
						minWidth: d
					},
					children: f ? a : null
				}, (f = a == null ? void 0 : a.key) != null ? f : e)
			})
		})
	}
}), null);