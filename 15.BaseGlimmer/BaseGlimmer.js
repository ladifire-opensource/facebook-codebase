__d("BaseGlimmer.react", ["BaseLoadingStateElement.react", "React", "stylex", 
	"useVisibilityObserver"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 1e3,
		i = 100,
		j = {
			dark: {
				backgroundColor: "pgeiv1et"
			},
			paused: {
				animationPlayState: "sb3519qa"
			},
			root: {
				animationDirection: "afxn4irw",
				animationDuration: "r8dsh44q",
				animationIterationCount: "ee40wjg4",
				animationName: "skuavjfj",
				animationTimingFunction: "ku44ohm1",
				backgroundColor: "g6srhlxm",
				opacity: "lszeityy"
			}
		};

	function a(a) {
		var c = a.children,
			d = a.className,
			e = a.index,
			f = a.theme;
		f = f === void 0 ? "light" : f;
		a = a.xstyle;
		var k = g.useState(!0),
			l = k[0],
			m = k[1];
		k = g.useCallback(function (a) {
			a = a.hiddenReason;
			a !== "COMPONENT_UNMOUNTED" && m(!0)
		}, []);
		var n = g.useCallback(function () {
			m(!1)
		}, []);
		k = b("useVisibilityObserver")({
			onHidden: k,
			onVisible: n
		});
		return g.jsx(b("BaseLoadingStateElement.react"), {
			className_DEPRECATED: d,
			ref: k,
			style: {
				animationDelay: h + i * e + "ms"
			},
			xstyle: [j.root, l && j.paused, f === "dark" && j.dark, a],
			children: c
		})
	}
}), null);