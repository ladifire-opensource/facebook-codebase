__d("CometTooltipImpl.react", [
	"BaseContextualLayer.react", 
	"CometHeroInteractionContextPassthrough.react", 
	"CometPlaceholder.react", 
	"CometProgressRingIndeterminate.react", 
	"CometTheme.react", "React", 
	"TetraTextPairing.react", "clearTimeout", "setTimeout", "stylex", 
	"useCometDisplayTimingTrackerForInteraction", "useFadeEffect", "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			container: {
				backgroundColor: "ms7hmo2b",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				boxShadow: "r92hip7p",
				display: "a8c37x1j",
				marginBottom: "dicw6rsg",
				marginTop: "rs0gx3tq",
				maxWidth: "bkm5gps7",
				opacity: "b5wmifdl",
				paddingTop: "pybr56ya",
				paddingEnd: "d1544ag0",
				paddingBottom: "f10w8fjw",
				paddingStart: "tw6a2znq",
				position: "l9j0dhe7",
				transitionDuration: "c5ndavph",
				transitionProperty: "art1omkt",
				transitionTimingFunction: "ot9fgl3s"
			},
			containerVisible: {
				opacity: "pedkr2u6",
				transitionDuration: "ijkhr0an",
				transitionTimingFunction: "s13u9afw"
			},
			contextualLayer: {
				pointerEvents: "hzruof5a"
			},
			loadingState: {
				display: "j83agx80",
				justifyContent: "taijpn5t"
			}
		};

	function j(a) {
		var b = a.contextualLayerRef;
		h.useLayoutEffect(function () {
			var a = b.current;
			a && a.reposition({
				autoflip: !0
			})
		}, [b]);
		return null
	}

	function a(a) {
		var c = a.contentKey,
			d = a.delayContentMs,
			e = d === void 0 ? 0 : d,
			f = a.headline,
			k = a.id,
			l = a.isVisible,
			m = a.tooltip;
		d = a.tooltipTheme;
		d = d === void 0 ? "invert" : d;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["contentKey", "delayContentMs", "headline", "id", "isVisible", "tooltip", "tooltipTheme"]);
		var n = h.useRef(null),
			o = b("useFadeEffect")(l),
			p = o[0],
			q = o[1],
			r = o[2];
		o = b("useCometDisplayTimingTrackerForInteraction")("ToolTip");
		var s = h.useRef(null),
			t = h.useRef(l),
			u = h.useState(function () {
				return l === !0 && t.current === !1 && e > 0
			}),
			v = u[0],
			w = u[1];
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			if (l === !0 && t.current === !1 && e > 0) {
				w(!0);
				s.current = b("setTimeout")(function () {
					w(!1), s.current = null
				}, e);
				return function () {
					b("clearTimeout")(s.current), s.current = null
				}
			} else s.current != null && (w(!1), b("clearTimeout")(s.current), s.current = null);
			t.current = l
		}, [e, l]);
		if (m == null || !p) return null;
		var x = h.jsx("div", {
			className: (g || (g = b("stylex")))(i.loadingState),
			children: h.jsx(b("CometProgressRingIndeterminate.react"), {
				color: "dark",
				size: 20
			})
		});
		return h.jsx(b("CometHeroInteractionContextPassthrough.react"), {
			clear: !0,
			children: h.jsx(b("BaseContextualLayer.react"), babelHelpers["extends"]({
				align: "middle",
				autoAlign: !0
			}, a, {
				imperativeRef: n,
				ref: o,
				xstyle: i.contextualLayer,
				children: h.jsx(b("CometTheme.react"), {
					theme: d,
					children: function (a) {
						return h.jsx("span", {
							className: (g || (g = b("stylex")))(a, i.container, q && i.containerVisible),
							"data-testid": void 0,
							id: k,
							ref: r,
							role: "tooltip",
							children: h.jsx(b("TetraTextPairing.react"), {
								body: v ? x : h.jsxs(b("CometPlaceholder.react"), {
									fallback: x,
									children: [h.jsx(j, {
										contextualLayerRef: n
									}), m]
								}, c),
								bodyColor: "primary",
								headline: f,
								headlineColor: "primary",
								level: 4
							})
						})
					}
				})
			}))
		})
	}
}), null);