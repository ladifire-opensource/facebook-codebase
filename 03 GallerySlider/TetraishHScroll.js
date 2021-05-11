__d("TetraishHScroll.react", ["ix", "fbt", "BaseScrollableAreaContext", 
	"CometLeftRailLayoutContext", 
	"CometRouteRenderType", 
	"CometScreenReaderText.react", 
	"CometTrackingNodeProvider.react",
	 "ExecutionEnvironment", 
	 "FocusInertRegion.react",
	  "Locale", "React", "TetraCircleButton.react",
	   "UserAgent", "fbicon", "focusScopeQueries",
	    "stylex", "useLayoutEffect_SAFE_FOR_SSR", "useVisibilityObserver"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = {
			buttonContainer: {
				position: "l9j0dhe7",
				zIndex: "du4w35lb"
			},
			buttonShadow: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				boxShadow: "fpf4h9qb",
				marginTop: "ku2m03ct",
				marginEnd: "o3lre8g0",
				marginBottom: "oud54xpy",
				marginStart: "gu00c43d"
			},
			buttonWrapper: {
				boxSizing: "rq0escxv",
				display: "a8c37x1j",
				opacity: "pedkr2u6",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "pmk7jnqg",
				top: "d3dyzuny",
				transform: "ke6wolob",
				transitionDuration: "dpja2al7",
				transitionProperty: "art1omkt",
				transitionTimingFunction: "nw2je8n7",
				zIndex: "tkr6xdv7"
			},
			buttonWrapperLeft: {
				left: "olfbdlsu"
			},
			buttonWrapperLeftPeek: {
				left: "tu783bs0"
			},
			buttonWrapperRight: {
				right: "crelghtz"
			},
			buttonWrapperRightPeek: {
				right: "kcz9t1cc"
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
				scrollSnapDestination: "fq9i8bis",
				scrollSnapPointsX: "cvgtb6nh",
				scrollbarWidth: "ofs802cu",
				whiteSpace: "g0qnabr5",
				width: "g2wf7z4h",
				"::-webkit-scrollbar": {
					display: "pohlnb88",
					height: "dkue75c7",
					width: "mb9wzai9"
				}
			},
			containerNoPeek: {
				marginEnd: "nks68n2l",
				marginStart: "pvr25hwf",
				width: "ojx2bl83"
			},
			containerNoScroll: {
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs"
			},
			containerSnap: {
				scrollSnapType: "tu18w1b4"
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
		l = (c = {}, c[0] = {
			width: "sb3ic3sl",
			"@media (max-width: 299px)": {
				width: "tfksjxg8"
			}
		}, c[404] = {
			width: "gppcmqpj",
			"@media (min-width: 404px) and (max-width: 561px)": {
				width: "g5egk45q"
			}
		}, c[562] = {
			width: "exqoj0th",
			"@media (min-width: 562px) and (max-width: 719px)": {
				width: "m8vaowjb"
			}
		}, c[720] = {
			width: "tsqz73po",
			"@media (min-width: 720px) and (max-width: 877px)": {
				width: "jcu8m7xq"
			}
		}, c[878] = {
			width: "i3xa5tg0",
			"@media (min-width: 878px) and (max-width: 1035px)": {
				width: "pjkidawo"
			}
		}, c[1036] = {
			width: "ec8vz1gl",
			"@media (min-width: 1036px) and (max-width: 1193px)": {
				width: "c5u9tzze"
			}
		}, c[1194] = {
			width: "my6nnm0o",
			"@media (min-width: 1194px) and (max-width: 1351px)": {
				width: "ini5337z"
			}
		}, c[1352] = {
			width: "lkirtjs1",
			"@media (min-width: 1352px) and (max-width: 1509px)": {
				width: "bzc5tk0l"
			}
		}, c[1510] = {
			width: "r1dhg97c",
			"@media (min-width: 1510px) and (max-width: 1667px)": {
				width: "bavll0uj"
			}
		}, c[1668] = {
			width: "efyom8fn",
			"@media (min-width: 1668px) and (max-width: 1825px)": {
				width: "qsko1vyi"
			}
		}, c[1826] = {
			width: "d0rb5ewr",
			"@media (min-width: 1826px) and (max-width: 1983px)": {
				width: "hjbymipb"
			}
		}, c[1984] = {
			width: "ichfwjo2",
			"@media (min-width: 1984px) and (max-width: 2142px)": {
				width: "gp43md67"
			}
		}, c),
		m = (d = {}, d[0] = {
			width: "sb3ic3sl",
			"@media (max-width: 299px)": {
				width: "tfksjxg8"
			}
		}, d[404] = {
			width: "gppcmqpj",
			"@media (min-width: 404px) and (max-width: 561px)": {
				width: "qhtsz48y"
			}
		}, d[562] = {
			width: "exqoj0th",
			"@media (min-width: 562px) and (max-width: 719px)": {
				width: "m8vaowjb"
			}
		}, d[720] = {
			width: "tsqz73po",
			"@media (min-width: 720px) and (max-width: 1237px)": {
				width: "bkjlpdxx"
			}
		}, d[1238] = {
			width: "i3xa5tg0",
			"@media (min-width: 1238px) and (max-width: 1395px)": {
				width: "kl0yo3gr"
			}
		}, d[1396] = {
			width: "ec8vz1gl",
			"@media (min-width: 1396px) and (max-width: 1553px)": {
				width: "n3ivibgo"
			}
		}, d[1554] = {
			width: "my6nnm0o",
			"@media (min-width: 1554px) and (max-width: 1711px)": {
				width: "roh3v0gf"
			}
		}, d[1712] = {
			width: "lkirtjs1",
			"@media (min-width: 1712px) and (max-width: 1869px)": {
				width: "c9ahs2yb"
			}
		}, d[1870] = {
			width: "r1dhg97c",
			"@media (min-width: 1870px) and (max-width: 2027px)": {
				width: "hh1zwtvl"
			}
		}, d[2028] = {
			width: "efyom8fn",
			"@media (min-width: 2028px) and (max-width: 2300px)": {
				width: "ozlxgwhh"
			}
		}, d),
		n = (f = {}, f[0] = {
			width: "sb3ic3sl",
			"@media (max-width: 599px)": {
				width: "f5lzy05q"
			}
		}, f[704] = {
			width: "gppcmqpj",
			"@media (min-width: 704px) and (max-width: 1071px)": {
				width: "b18ygmpc"
			}
		}, f[1072] = {
			width: "exqoj0th",
			"@media (min-width: 1072px) and (max-width: 1319px)": {
				width: "dwge3j3f"
			}
		}, f[1320] = {
			width: "tsqz73po",
			"@media (min-width: 1320px) and (max-width: 1627px)": {
				width: "mcbgzc2n"
			}
		}, f[1628] = {
			width: "i3xa5tg0",
			"@media (min-width: 1628px) and (max-width: 1935px)": {
				width: "bakekrat"
			}
		}, f[1936] = {
			width: "ec8vz1gl",
			"@media (min-width: 1936px) and (max-width: 2243px)": {
				width: "cuilj9wa"
			}
		}, f[2244] = {
			width: "my6nnm0o",
			"@media (min-width: 2244px) and (max-width: 2552px)": {
				width: "hqb7jmro"
			}
		}, f),
		o = (e = {}, e[0] = {
			width: "sb3ic3sl",
			"@media (max-width: 600px)": {
				width: "lhlhj9us"
			}
		}, e[704] = {
			width: "gppcmqpj",
			"@media (min-width: 704px) and (max-width: 1371px)": {
				width: "cwrakf3e"
			}
		}, e[1372] = {
			width: "exqoj0th",
			"@media (min-width: 1372px) and (max-width: 1679px)": {
				width: "e66w1f63"
			}
		}, e[1680] = {
			width: "tsqz73po",
			"@media (min-width: 1680px) and (max-width: 1987px)": {
				width: "o70erczg"
			}
		}, e[1988] = {
			width: "i3xa5tg0",
			"@media (min-width: 1988px) and (max-width: 2295px)": {
				width: "dh23er2d"
			}
		}, e[2296] = {
			width: "ec8vz1gl",
			"@media (min-width: 2296px) and (max-width: 2604px)": {
				width: "sx5dm6gh"
			}
		}, e),
		p = 4,
		q = 16,
		r = h._("M\u1ee5c ti\u1ebfp theo"),
		s = h._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3");
	a = b("ExecutionEnvironment").canUseDOM && window.matchMedia("(prefers-reduced-motion: reduce)");
	var t = a && a.matches,
		u = b("UserAgent").isBrowser("Chrome"),
		v = document.documentElement != null && "scrollBehavior" in document.documentElement.style,
		w = function (a, b) {
			typeof a.scrollTo === "function" ? v ? a.scrollTo({
				behavior: t ? "auto" : "smooth",
				left: b,
				top: 0
			}) : a.scrollTo(b, 0) : a.scrollLeft = b
		},
		x = b("Locale").isRTL(),
		y = function (a) {
			return a % 1 < .2 ? Math.floor(a) : Math.ceil(a)
		},
		z = function (a) {
			return a % 1 > .8 ? Math.ceil(a) : Math.floor(a)
		};

	function A(a) {
		var c = a.children;
		a = a.xstyle;
		var d = j.useState(!1),
			e = d[0],
			f = d[1];
		d = b("useVisibilityObserver")({
			onHidden: function () {
				return f(!1)
			},
			onVisible: function () {
				return f(!0)
			}
		});
		return j.jsx("div", {
			"aria-hidden": !e,
			className: (i || (i = b("stylex")))(a),
			ref: d,
			children: j.jsx(b("FocusInertRegion.react"), {
				disabled: e,
				focusQuery: b("focusScopeQueries").tabbableScopeQuery,
				children: c
			})
		})
	}

	function a(a) {
		var c = a.accessibilityLabel,
			d = a.baseCardWidth,
			e = a.children,
			f = a.disableScrolling;
		f = f === void 0 ? !1 : f;
		var h = a.hideArrows;
		h = h === void 0 ? !1 : h;
		var t = a.maxWidth,
			v = t === void 0 ? Infinity : t;
		t = a.nextButtonLabel;
		t = t === void 0 ? r : t;
		var B = a.prevButtonLabel;
		B = B === void 0 ? s : B;
		var C = a.onPressNext,
			D = C === void 0 ? function () {} : C;
		C = a.peek;
		var E = C === void 0 ? !1 : C;
		C = a.peekPadding;
		a = a.peekPaddingEnd;
		var F = j.useContext(b("BaseScrollableAreaContext")),
			G = j.useContext(b("CometLeftRailLayoutContext")),
			H = b("CometRouteRenderType").useIsHosted(),
			I = E ? (C = C) != null ? C : 0 : 0;
		a = E ? (C = a) != null ? C : 44 : 0;
		C = j.useState(!0);
		var J = C[0],
			K = C[1];
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			if (u) {
				var a = window.requestAnimationFrame(function () {
					K(!0)
				});
				return function () {
					window.cancelAnimationFrame(a), K(!1)
				}
			}
		}, [e.length]);
		var L = G || H;
		C = j.useState(x ? null : !0);
		G = C[0];
		var M = C[1];
		H = j.useState(x ? !0 : null);
		C = H[0];
		var N = H[1],
			O = j.useRef(null),
			P = function () {
				var a = O.current;
				if (a == null) return;
				var b = a.clientWidth,
					c = a.scrollLeft;
				a = a.scrollWidth;
				M(c <= p);
				N(a - b - c <= p)
			};
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			P()
		}, [e.length]);
		H = function () {
			P()
		};
		var Q = j.useCallback(function (a, b) {
				var c = O.current;
				if (c == null) return;
				var d = c.clientWidth,
					e = c.scrollLeft,
					f = c.scrollWidth,
					g = f - 88;
				d = d - 88;
				var h = E ? 44 : x ? 88 : 0,
					i = x ? d - f % d : 0;
				h = h + i - (x ? -I : I);
				i = y(g / d);
				g = e + h;
				e = g % d;
				e = e < q ? g - e : d - e < q ? g + (d - e) : g;
				g = b(e / d);
				b = Math.min(i, Math.max(0, g + a));
				e = b === i - 1 && b !== 0 ? f : b * d - h;
				g = b === 0 ? 0 : b * d - h;
				w(c, x ? g : e)
			}, [E, I]),
			R = function () {
				return Q(-1, y)
			},
			S = function () {
				Q(1, z), D()
			},
			T = d === 150 ? L ? m : l : L ? o : n,
			U = Object.keys(T).filter(function (a) {
				return L ? a <= v + 360 : a <= v
			}).map(function (a) {
				return T[a]
			}),
			V = j.useMemo(function () {
				return [].concat(F, [{
					getDOMNode: function () {
						return O.current
					}
				}])
			}, [F]),
			W = h || !!G;
		h = h || !!C;
		return j.jsxs("div", {
			className: (i || (i = b("stylex")))(k.buttonContainer),
			children: [j.jsx("div", {
				"aria-hidden": W,
				className: i(k.buttonWrapper, k.buttonWrapperLeft, E && k.buttonWrapperLeftPeek, W && k.hidden),
				style: G == null ? {
					maxWidth: 68,
					minWidth: 0,
					width: "calc((" + e.length * (d + 8) + "px - 100%) * 9999)"
				} : {},
				children: j.jsx(b("CometTrackingNodeProvider.react"), {
					trackingNode: x ? 420 : 419,
					children: j.jsx("div", {
						className: i(k.buttonShadow),
						children: j.jsx(b("TetraCircleButton.react"), {
							color: "secondary",
							focusable: !W,
							icon: b("fbicon")._(g("492488"), 20),
							label: x ? t : B,
							onPress: R,
							size: 48,
							type: "overlay"
						})
					})
				})
			}), j.jsxs("div", {
				className: i(k.root),
				children: [c != null ? j.jsx(b("CometScreenReaderText.react"), {
					text: c
				}) : null, j.jsxs("div", {
					className: i(k.container, J && k.containerSnap, !E && k.containerNoPeek, f && k.containerNoScroll),
					onScroll: H,
					ref: O,
					children: [!E && j.jsx("div", {
						style: {
							minWidth: 44
						}
					}), E && I > 0 && j.jsx("div", {
						style: {
							minWidth: I
						}
					}), j.jsx(b("BaseScrollableAreaContext").Provider, {
						value: V,
						children: e.map(function (a, b) {
							return j.jsx(A, {
								xstyle: [k.card, U],
								children: a
							}, b)
						})
					}), !E && j.jsx("div", {
						style: {
							minWidth: 44
						}
					}), E && a > 0 && j.jsx("div", {
						style: {
							minWidth: a
						}
					})]
				})]
			}), j.jsx("div", {
				"aria-hidden": h,
				className: i(k.buttonWrapper, k.buttonWrapperRight, E && k.buttonWrapperRightPeek, h && k.hidden),
				style: C == null ? {
					maxWidth: 68,
					minWidth: 0,
					width: "calc((" + e.length * (d + 8) + "px - 100%) * 9999)"
				} : {},
				children: j.jsx(b("CometTrackingNodeProvider.react"), {
					trackingNode: x ? 419 : 420,
					children: j.jsx("div", {
						className: i(k.buttonShadow),
						children: j.jsx(b("TetraCircleButton.react"), {
							color: "secondary",
							focusable: !h,
							icon: b("fbicon")._(g("492536"), 20),
							label: x ? B : t,
							onPress: S,
							size: 48,
							type: "overlay"
						})
					})
				})
			})]
		})
	}
}), null);