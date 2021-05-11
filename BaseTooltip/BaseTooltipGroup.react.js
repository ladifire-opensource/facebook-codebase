__d("BaseTooltipGroup.react", [
	"BaseTooltipTargetWrapper.react", 
	"React", "recoverableViolation", 
	"requireCond", "useDelayedState", "useStable", "cr:1654107"], (function (a, b, c, d, e, f) {
	"use strict";
	f.Container = a;
	f.Child = c;
	var g = b("React"),
		h = g.createContext(null);
	f.Context = h;

	function a(a) {
		var c = a.children;
		a = a.tooltipImpl;
		var d = b("useDelayedState")(!1),
			e = d[0],
			f = d[1];
		d = g.useState(null);
		var i = d[0],
			j = d[1],
			k = b("cr:1654107")(); // emptyFunction
		d = g.useMemo(function () {
			var a;
			return {
				activeContentKey: (a = i == null ? void 0 : i.contentKey) != null ? a : null,
				isVisible: e,
				onHide: function (a, b) {
					f(!1, a, b)
				},
				onShow: function (a, b, c) {
					j(a), f(!0, b, c)
				},
				tooltipIdentifier: k
			}
		}, [e, k, i == null ? void 0 : i.contentKey, f]);
		return g.jsxs(g.Fragment, {
			children: [g.jsx(h.Provider, {
				value: d,
				children: c
			}), i != null ? g.jsx(a, babelHelpers["extends"]({}, i, {
				id: k,
				isVisible: e
			})) : null]
		})
	}
	var i = 0;

	function j() {
		return "tooltip-" + i++
	}

	function c(a) {
		var c = a.children,
			d = a.forceInlineDisplay,
			e = a.hideDelayMs,
			f = a.onVisibilityChange,
			i = a.showDelayMs,
			k = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "forceInlineDisplay", "hideDelayMs", "onVisibilityChange", "showDelayMs"]),
			l = b("useStable")(j),
			m = g.useRef(null);
		a = g.useContext(h);
		var n = a || {},
			o = n.activeContentKey,
			p = n.onHide,
			q = n.onShow;
		n = n.tooltipIdentifier;
		var r = g.useCallback(function () {
				q && q(babelHelpers["extends"]({
					contentKey: l,
					contextRef: m
				}, k), i, f)
			}, [q, l, k, i, f]),
			s = g.useCallback(function () {
				p && p(e, f)
			}, [e, p, f]);
		a == null && b("recoverableViolation")("BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component. ", "comet_ui");
		return g.jsx(b("BaseTooltipTargetWrapper.react"), {
			forceInlineDisplay: d,
			onHide: s,
			onShow: r,
			ref: m,
			tooltipIdentifier: o === l ? n : void 0,
			children: c
		})
	}
}), null);