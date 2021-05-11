__d("CometLegacyFixedHScroll.react", ["fbt", "ix", "BaseScrollableAreaContext", 
	"CometScreenReaderText.react", "CometTrackingNodeProvider.react", 
	"ExecutionEnvironment", "Locale", "TetraCircleButton.react", 
	"fbicon", "react", "stylex", "useVisibilityObserver"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j, k = i || b("react"),
		l = {
			buttonContainer: {
				position: "l9j0dhe7",
				zIndex: "du4w35lb"
			},
			buttonWrapper: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				boxShadow: "eh3q2ans",
				display: "a8c37x1j",
				opacity: "pedkr2u6",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "pmk7jnqg",
				top: "zt5pkwcz",
				transform: "ke6wolob",
				transitionDuration: "dpja2al7",
				transitionProperty: "art1omkt",
				transitionTimingFunction: "nw2je8n7",
				zIndex: "tkr6xdv7"
			},
			buttonWrapperLeft: {
				left: "lj4ofo3z"
			},
			buttonWrapperLeftPeek: {
				left: "qew7ijjg"
			},
			buttonWrapperRight: {
				right: "p07qh01q"
			},
			buttonWrapperRightPeek: {
				right: "samo6ylo"
			},
			card: {
				alignItems: "gs1a9yip",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				flexShrink: "pfnyh3mw",
				marginEnd: "cgat1ltu",
				marginStart: "kkf49tns",
				scrollSnapAlign: "qdtcsgvi",
				whiteSpace: "l3itjdph"
			},
			container: {
				MsOverflowStyle: "q5bimw55",
				WebkitOverflowScrolling: "gvuykj2m",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				marginBottom: "nvd5e08m",
				marginEnd: "dlv3wnog",
				marginStart: "rl04r1d5",
				overflowX: "d76ob5m9",
				overflowY: "eg9m0zos",
				paddingBottom: "tu1s4ah4",
				paddingTop: "cxgpxx05",
				scrollPadding: "rx6hrq12",
				scrollSnapType: "tu18w1b4",
				scrollbarWidth: "ofs802cu",
				whiteSpace: "g0qnabr5",
				width: "g2wf7z4h",
				"::-webkit-scrollbar": {
					height: "dkue75c7",
					width: "mb9wzai9"
				}
			},
			containerNoPeek: {
				scrollPadding: "qxpqh6jt"
			},
			containerNoScroll: {
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs"
			},
			hidden: {
				opacity: "b5wmifdl",
				pointerEvents: "hzruof5a"
			},
			root: {
				marginBottom: "c8r2yrt7",
				marginTop: "o7xrwllt",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				paddingBottom: "dy7m38rt",
				paddingTop: "jktsbyx5",
				position: "l9j0dhe7",
				width: "k4urcfbm"
			}
		},
		m = 4,
		n = g._("Next Items"),
		o = g._("Previous Items");
	c = b("ExecutionEnvironment").canUseDOM && window.matchMedia("(prefers-reduced-motion: reduce)");
	var p = c && c.matches,
		q = document.documentElement != null && "scrollBehavior" in document.documentElement.style,
		r = function(a, b) {
			typeof a.scrollTo === "function" ? q ? a.scrollTo({
				behavior: p ? "auto" : "smooth",
				left: b,
				top: 0
			}) : a.scrollTo(b, 0) : a.scrollLeft = b
		},
		s = b("Locale").isRTL(),
		t = function(a) {
			return Math.floor(a)
		};

	function u(a) {
		var c = a.children,
			d = a.style;
		a = a.xstyle;
		var e = k.useState(!1),
			f = e[0],
			g = e[1];
		e = b("useVisibilityObserver")({
			onHidden: function() {
				return g(!1)
			},
			onVisible: function() {
				return g(!0)
			}
		});
		return k.jsx("div", {
			"aria-hidden": !f,
			className: (j || (j = b("stylex")))(a),
			ref: e,
			style: d,
			children: c
		})
	}

	function a(a) {
		var c = a.accessibilityLabel,
			d = a.cardWidth,
			e = a.children,
			f = a.disableScrolling;
		f = f === void 0 ? !1 : f;
		var g = a.hideArrows;
		g = g === void 0 ? !1 : g;
		var i = a.nextButtonLabel;
		i = i === void 0 ? n : i;
		var p = a.prevButtonLabel;
		p = p === void 0 ? o : p;
		var q = a.onPressNext,
			v = a.peek,
			w = v === void 0 ? !1 : v;
		v = a.peekPaddingEnd;
		v = v === void 0 ? w ? 44 : 0 : v;
		a = a.peekPaddingStart;
		a = a === void 0 ? w ? 44 : 0 : a;
		var x = k.useContext(b("BaseScrollableAreaContext")),
			y = k.useState(s ? null : !0),
			z = y[0],
			A = y[1];
		y = k.useState(s ? !0 : null);
		var B = y[0],
			C = y[1],
			D = k.useRef(null),
			E = function() {
				var a = D.current;
				if (a == null) return;
				var b = a.clientWidth,
					c = a.scrollLeft;
				a = a.scrollWidth;
				A(c <= m);
				C(a - b - c <= m)
			};
		y = function() {
			E()
		};
		var F = k.useCallback(function(a) {
				var b = D.current;
				if (b == null) return;
				var c = b.clientWidth,
					e = b.scrollLeft;
				c = w ? c - 48 : c;
				c = t(c / d);
				e = t(e / d);
				e = e + c * a;
				c = e * d + (w ? 48 : 4);
				r(b, c)
			}, [d, w]),
			G = k.useRef(e.length);
		k.useEffect(function() {
			G.current !== e.length && B === !0 && (G.current = e.length, F(0))
		}, [G, e.length, B, F]);
		var H = function() {
				return F(-1)
			},
			I = function() {
				F(1), q && q()
			},
			J = k.useMemo(function() {
				return [].concat(x, [{
					getDOMNode: function() {
						return D.current
					}
				}])
			}, [x]);
		return k.jsxs("div", {
			className: (j || (j = b("stylex")))(l.buttonContainer),
			children: [k.jsx("div", {
				"aria-hidden": g || !!z,
				className: j(l.buttonWrapper, l.buttonWrapperLeft, w && l.buttonWrapperLeftPeek, (g || !!z) && l.hidden),
				style: z == null ? {
					maxWidth: 48,
					minWidth: 0,
					width: "calc((" + e.length * (d + 8) + "px - 100%) * 9999)"
				} : {},
				children: k.jsx(b("CometTrackingNodeProvider.react"), {
					trackingNode: s ? 420 : 419,
					children: k.jsx(b("TetraCircleButton.react"), {
						color: "secondary",
						icon: b("fbicon")._(h("492488"), 20),
						label: s ? i : p,
						onPress: H,
						size: 48,
						type: "overlay"
					})
				})
			}), k.jsxs("div", {
				className: j(l.root),
				children: [k.jsx(b("CometScreenReaderText.react"), {
					text: c
				}), k.jsxs("div", {
					className: j(l.container, !w && l.containerNoPeek, f && l.containerNoScroll),
					onScroll: y,
					ref: D,
					children: [w && k.jsx("div", {
						style: {
							minWidth: a
						}
					}), k.jsx(b("BaseScrollableAreaContext").Provider, {
						value: J,
						children: e.map(function(a, b) {
							return k.jsx(u, {
								style: {
									width: d
								},
								xstyle: l.card,
								children: a
							}, b)
						})
					}), w && k.jsx("div", {
						style: {
							minWidth: v
						}
					})]
				})]
			}), k.jsx("div", {
				"aria-hidden": g || !!B,
				className: j(l.buttonWrapper, l.buttonWrapperRight, w && l.buttonWrapperRightPeek, (g || !!B) && l.hidden),
				style: B == null ? {
					maxWidth: 48,
					minWidth: 0,
					width: "calc((" + e.length * (d + 8) + "px - 100%) * 9999)"
				} : {},
				children: k.jsx(b("CometTrackingNodeProvider.react"), {
					trackingNode: s ? 419 : 420,
					children: k.jsx(b("TetraCircleButton.react"), {
						color: "secondary",
						icon: b("fbicon")._(h("492536"), 20),
						label: s ? p : i,
						onPress: I,
						size: 48,
						type: "overlay"
					})
				})
			})]
		})
	}
}), null);