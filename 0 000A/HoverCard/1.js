__d("useBaseHovercardTrigger", ["BaseContextualLayer.react", "CometErrorBoundary.react", 
	"CometHeroInteractionContextPassthrough.react", "CometPlaceholder.react", 
	"FocusInertRegion.react", "FocusWithinHandler.react", "HiddenSubtreeContextProvider.react", 
	"React", "focusScopeQueries", "stylex", "useCometDisplayTimingTrackerForInteraction", 
	"useCometPrerenderer", "useDelayedState", "useFadeEffect"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = 300,
		j = 50,
		k = {
			disablePointerEvents: {
				pointerEvents: "hzruof5a"
			},
			displayInline: {
				display: "nc684nl6"
			},
			displayInlineBlock: {
				display: "q9uorilb"
			},
			hovercard: {
				opacity: "b5wmifdl",
				transitionDuration: "c5ndavph",
				transitionProperty: "art1omkt",
				transitionTimingFunction: "ot9fgl3s"
			},
			hovercardVisible: {
				opacity: "pedkr2u6",
				transitionDuration: "ijkhr0an",
				transitionTimingFunction: "s13u9afw"
			}
		};

	function a(a) {
		var c = a.children,
			d = a.display,
			e = a.onLoadEntryPoint,
			f = a.onVisibilityChange,
			l = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "display", "onLoadEntryPoint", "onVisibilityChange"]);
		a = b("useDelayedState")(!1);
		var m = a[0],
			n = a[1];
		a = h.useState(!1);
		var o = a[0],
			p = a[1];
		a = h.useState(!1);
		var q = a[0],
			r = a[1];
		a = h.useState(!1);
		var s = a[0],
			t = a[1],
			u = q && s,
			v = h.useRef(null),
			w = h.useRef(null),
			x = b("useCometDisplayTimingTrackerForInteraction")("HoverCard");
		a = h.useCallback(function() {
			n(!1), p(!1)
		}, [n]);
		var y = m || o || u,
			z = h.useRef(y);
		h.useEffect(function() {
			z.current !== y && (f && f(y)), z.current = y
		}, [y, f]);
		q = b("useFadeEffect")(y);
		var A = q[0],
			B = q[1],
			C = q[2];
		s = b("useCometPrerenderer")("tooltip", y);
		m = s[0].shouldPrerender;
		var D = m === void 0 ? !1 : m,
			E = s[1],
			F = s[2],
			G = function(a) {
				n(!0, i), e && e(), !u && !o && E(a)
			},
			H = function() {
				n(!1, j), F()
			},
			I = function() {
				p(!1)
			},
			J = function() {
				p(!1)
			},
			K = function() {
				p(!0), e && e()
			},
			L = function() {
				e && e()
			};
		q = function(a) {
			return h.jsxs("div", {
				className: (g || (g = b("stylex")))(d === "inline" && k.displayInline, d === "inline-block" && k.displayInlineBlock),
				onMouseEnter: G,
				onMouseLeave: H,
				onTouchCancel: I,
				onTouchEnd: J,
				onTouchStart: K,
				children: [h.jsx(b("FocusWithinHandler.react"), {
					onFocusChange: r,
					onFocusVisibleChange: t,
					onFocusWithin: L,
					children: c(v)
				}), (u || o || D || A) && h.jsx(b("CometHeroInteractionContextPassthrough.react"), {
					clear: !0,
					children: h.jsx(b("CometErrorBoundary.react"), {
						children: h.jsx(b("CometPlaceholder.react"), {
							fallback: null,
							children: h.jsx(b("BaseContextualLayer.react"), babelHelpers["extends"]({
								align: "middle",
								contextRef: v,
								hidden: !y && D,
								imperativeRef: w,
								ref: x,
								xstyle: !y && A ? k.disablePointerEvents : void 0
							}, l, {
								children: h.jsx(b("HiddenSubtreeContextProvider.react"), {
									isHidden: !y && D,
									children: h.jsx("div", {
										className: (g || (g = b("stylex")))(k.hovercard, B && k.hovercardVisible),
										ref: C,
										children: h.jsx(b("FocusInertRegion.react"), {
											focusQuery: b("focusScopeQueries").tabbableScopeQuery,
											children: a
										})
									})
								})
							}))
						})
					})
				})]
			})
		};
		return [q, a]
	}
}), null);