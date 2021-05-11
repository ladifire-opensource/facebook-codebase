__d("BaseTooltip.react", ["BaseTooltipGroup.react", "BaseTooltipTargetWrapper.react", "React", "requireCond", "useDelayedState", "cr:1654107"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 50,
		i = 300;

	function j(a) {
		var c = a.children,
			d = a.delayTooltipMs,
			e = d === void 0 ? i : d;
		d = a.forceInlineDisplay;
		var f = a.tooltipImpl,
			h = a.onVisibilityChange;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "delayTooltipMs", "forceInlineDisplay", "tooltipImpl", "onVisibilityChange"]);
		var j = b("useDelayedState")(!1),
			k = j[0],
			l = j[1];
		j = g.useRef(null);
		var m = b("cr:1654107")(),
			n = g.useCallback(function () {
				l(!0, e, h)
			}, [e, h, l]),
			o = g.useCallback(function () {
				l(!1, 0, h)
			}, [h, l]);
		return g.jsxs(g.Fragment, {
			children: [g.jsx(b("BaseTooltipTargetWrapper.react"), {
				forceInlineDisplay: d,
				onHide: o,
				onShow: n,
				ref: j,
				tooltipIdentifier: m,
				children: c
			}), g.jsx(f, babelHelpers["extends"]({}, a, {
				contentKey: null,
				contextRef: j,
				id: m,
				isVisible: k
			}))]
		})
	}

	function a(a) {
		var c = g.useContext(b("BaseTooltipGroup.react").Context);
		if (c != null) {
			c = a.delayTooltipMs;
			c = c === void 0 ? i : c;
			a.tooltipImpl;
			var d = babelHelpers.objectWithoutPropertiesLoose(a, ["delayTooltipMs", "tooltipImpl"]);
			return g.jsx(b("BaseTooltipGroup.react").Child, babelHelpers["extends"]({}, d, {
				hideDelayMs: h,
				showDelayMs: c
			}))
		}
		return g.jsx(j, babelHelpers["extends"]({}, a))
	}
}), null);