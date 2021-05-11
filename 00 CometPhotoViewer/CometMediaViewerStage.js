__d("CometMediaViewerStage.react", ["fbt", "CometBlurredBackgroundImage.react", 
	"CometFullScreen", "CometKeys", "CometMediaViewerViewStateContext", 
	"CometProductTagFunnelIDContext", "Locale", "React", 
	"cometGetKeyCommandConfig", "stylex", "useCometRoute", 
	"useCometRouterDispatcher", "useDebounced", 
	"useLayerKeyCommands", "CometMediaViewerNavigationTapTarget.react",
	 "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = 2e3;

	function a(a) {
		var c = a.backgroundColor;
		c = c === void 0 ? "default" : c;
		var d = a.backgroundSrc,
			e = a.initialTracePolicy,
			f = a.isPlayable;
		f = f === void 0 ? !1 : f;
		var k = a.nextMediaURI,
			l = a.onNavigatePhoto,
			m = a.prevMediaURI,
			n = a.storyRenderLocation,
			o = a.subOrigin,
			p = a.useKeyCommands,
			q = p === void 0 ? !0 : p,
			r = i.useContext(b("CometProductTagFunnelIDContext")),
			s = b("useCometRouterDispatcher")();
		p = i.useState(!1);
		var t = p[0],
			u = p[1],
			v = i.useContext(b("CometMediaViewerViewStateContext")),
			w = i.useRef(!0);
		p = function () {
			return x.isPending() ? y() : x()
		};
		var x = b("useDebounced")(function () {
				u(!1), y()
			}, j, !0),
			y = b("useDebounced")(function () {
				v.isHovered || u(!0), w.current = !1
			}, j, !1),
			z = i.useRef(null);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			z.current && w.current && z.current.focus()
		});
		var A = i.useCallback(function () {
				s != null && s.popPushView()
			}, [s]),
			B = i.useCallback(function () {
				k != null && s != null && (l && l(), s.go(k, {
					passthroughProps: {
						initialTracePolicy: e,
						productTagFunnelID: r,
						storyRenderLocation: n,
						subOrigin: o
					},
					target: "self",
					traceParams: {
						navigation_source: "CometMediaViewer_next"
					}
				}))
			}, [k, s, l, e, r, o, n]),
			C = i.useCallback(function () {
				m != null && s != null && (l && l(), s.go(m, {
					passthroughProps: {
						initialTracePolicy: e,
						productTagFunnelID: r,
						storyRenderLocation: n,
						subOrigin: o
					},
					target: "self",
					traceParams: {
						navigation_source: "CometMediaViewer_prev"
					}
				}))
			}, [m, s, l, e, r, n, o]);
		b("useCometRoute")(m);
		b("useCometRoute")(k);
		var D = g._("\u1ea2nh tr\u01b0\u1edbc \u0111\u00f3"),
			E = g._("\u1ea2nh ti\u1ebfp theo"),
			F = i.useCallback(function () {
				var a = b("CometFullScreen").getFullScreenElement();
				if (a == null) {
					a = document.documentElement;
					a != null && b("CometFullScreen").requestFullScreen(a)
				} else b("CometFullScreen").exitFullScreen()
			}, []),
			G = k != null && k !== "",
			H = m != null && m !== "",
			I = !H || t;
		t = !G || t;
		var J = i.useMemo(function () {
			if (!q) return [];
			var a = [];
			H && (a.push({
				command: {
					key: b("CometKeys").PREVIOUS
				},
				description: D,
				handler: C
			}), a.push(b("cometGetKeyCommandConfig")("photoViewer", "viewPrevious", C)));
			G && (a.push({
				command: {
					key: b("CometKeys").NEXT
				},
				description: E,
				handler: B
			}), a.push(b("cometGetKeyCommandConfig")("photoViewer", "viewNext", B)));
			a.push(b("cometGetKeyCommandConfig")("photoViewer", "fullscreen", F));
			return a
		}, [B, C, G, H, E, D, F, q]);
		b("useLayerKeyCommands")(J);
		J = i.jsx(b("CometMediaViewerNavigationTapTarget.react"), {
			direction: b("Locale").isRTL() ? "next" : "previous",
			hoverOverlayHeight: f ? "auto" : "default",
			invisible: I,
			label: D,
			onClick: C,
			testid: void 0,
			trackingNode: 143
		});
		I = i.jsx(b("CometMediaViewerNavigationTapTarget.react"), {
			direction: b("Locale").isRTL() ? "previous" : "next",
			hoverOverlayHeight: f ? "auto" : "default",
			invisible: t,
			label: E,
			onClick: B,
			testid: void 0,
			trackingNode: 142
		});
		return i.jsxs("div", {
			className: (h || (h = b("stylex"))).dedupe({
				"display-1": "j83agx80",
				"flex-direction-1": "cbu4d94t",
				"flex-grow-1": "buofh1pr",
				"height-1": "datstx6m",
				"min-width-1": "p01isnhg",
				"position-1": "l9j0dhe7",
				"outline-8.1": "iqfcb0g7"
			}, c === "default" ? {
				"background-color-1": "tqsryivl"
			} : null, c === "dark" ? {
				"background-color-1": "iuug3ofb"
			} : null),
			onMouseMove: p,
			ref: z,
			tabIndex: "0",
			children: [i.jsx("div", {
				className: "iqfcb0g7 kr520xx4 j9ispegn pmk7jnqg akz8cqyu n7fi1qx3 i09qtzwb",
				children: d != null ? i.jsx(b("CometBlurredBackgroundImage.react"), {
					src: d
				}) : null
			}), i.jsxs("div", {
				className: "iqfcb0g7 l9j0dhe7 taijpn5t datstx6m buofh1pr j83agx80 bp9cbjyn",
				children: [i.jsxs("div", {
					className: "kr520xx4 j9ispegn pmk7jnqg i1fnvgqd n7fi1qx3 j83agx80 i09qtzwb bp9cbjyn",
					"data-name": "media-viewer-nav-container",
					children: [i.jsx("div", {
						"aria-hidden": !0,
						className: "kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
						"data-testid": void 0,
						onClick: A
					}), J, I]
				}), a.children]
			})]
		})
	}
}), null);