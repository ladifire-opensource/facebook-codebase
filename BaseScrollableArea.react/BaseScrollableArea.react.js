__d("BaseScrollableArea.react", [
	"BaseScrollableAreaContext", 
	"CometVisualCompletionAttributes", "React", "UserAgent", "debounce", "gkx", 
	"resize-observer-polyfill", "stylex", "useVisibilityObserver"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			baseScroller: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr"
			},
			baseScrollerHorizontal: {
				flexDirection: "btwxx1t3"
			},
			"default": {
				MsOverflowStyle: "o8kakjsu",
				MsScrollChaining: "rpm2j7zs",
				MsScrollRails: "k7i0oixp",
				WebkitOverflowScrolling: "gvuykj2m",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "l9j0dhe7",
				zIndex: "du4w35lb"
			},
			expanding: {
				flexBasis: "d8ncny3e",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
				minHeight: "tgvbjcpo"
			},
			hideScrollbar: {
				MsOverflowStyle: "q5bimw55",
				scrollbarWidth: "ofs802cu",
				"::-webkit-scrollbar": {
					display: "pohlnb88",
					height: "dkue75c7",
					width: "mb9wzai9"
				}
			},
			horizontalAuto: {
				overflowX: "d76ob5m9",
				overscrollBehaviorX: "qan41l3s"
			},
			perspective: {
				perspective: "l56l04vs",
				perspectiveOrigin: "r57mb794",
				position: "l9j0dhe7",
				transformStyle: "kh7kg01d"
			},
			verticalAuto: {
				overflowY: "eg9m0zos",
				overscrollBehaviorY: "c3g1iek1"
			}
		},
		j = {
			base: {
				boxSizing: "rq0escxv",
				display: "mkhogb32",
				opacity: "b5wmifdl",
				paddingTop: "jb3vyjys",
				paddingEnd: "ph5uu5jm",
				paddingBottom: "qt6c0cv9",
				paddingStart: "b3onmgus",
				pointerEvents: "hzruof5a",
				position: "pmk7jnqg",
				right: "kwrap0ej",
				top: "kr520xx4",
				transformOrigin: "enuw37q7",
				transitionDuration: "dpja2al7",
				transitionProperty: "art1omkt",
				transitionTimingFunction: "nw2je8n7",
				width: "hhz5lgdu"
			},
			hovered: {
				opacity: "pedkr2u6",
				transitionDuration: "z1801hqc"
			},
			inner: {
				backgroundColor: "oj68ptkr",
				borderTopStartRadius: "jk6sbkaj",
				borderTopEndRadius: "kdgqqoy6",
				borderBottomEndRadius: "ihh4hy1g",
				borderBottomStartRadius: "qttc61fc",
				height: "datstx6m",
				width: "k4urcfbm"
			}
		},
		k = {
			base: {
				backgroundColor: "pwoa4pd7",
				display: "mkhogb32",
				height: "datstx6m",
				opacity: "b5wmifdl",
				position: "pmk7jnqg",
				right: "kwrap0ej",
				top: "kr520xx4",
				transitionDuration: "qgmjvhk0",
				transitionProperty: "art1omkt",
				transitionTimingFunction: "nw2je8n7",
				width: "hhz5lgdu",
				":hover": {
					opacity: "pyaxyem1"
				}
			}
		},
		l = b("gkx")("1708607");

	function a(a, c) {
		var d = a.children,
			e = a.expanding;
		e = e === void 0 ? !1 : e;
		var f = a.hideScrollbar,
			l = f === void 0 ? !1 : f,
			m = a.horizontal;
		f = a.id;
		var n = a.onScroll,
			r = a.onScrollBottom,
			s = a.onScrollTop,
			t = a.style,
			u = a.testid,
			v = a.vertical;
		u = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "expanding", "hideScrollbar", "horizontal", "id", "onScroll", "onScrollBottom", "onScrollTop", "style", "testid", "vertical", "xstyle"]);
		var w = h.useMemo(function () {
				return !v || l || m || q()
			}, [v, l, m]),
			x = h.useState(!1),
			y = x[0],
			z = x[1];
		x = h.useState(!1);
		var A = x[0],
			B = x[1];
		x = h.useState(!1);
		var C = x[0],
			D = x[1],
			E = h.useContext(b("BaseScrollableAreaContext")),
			F = h.useRef(null),
			G = h.useRef(null),
			H = h.useRef(null),
			I = h.useRef(null),
			J = h.useRef(null),
			K = h.useRef(0);
		h.useEffect(function () {
			if (w) return;
			var a = F.current,
				c = G.current,
				d = H.current,
				e = I.current;
			if (a == null || c == null || d == null || e == null) return;
			var f = 0,
				g = 0,
				h = function () {
					e.style.display = "none";
					d.style.display = "none";
					var a = c.getBoundingClientRect(),
						b = a.height;
					g = a.top;
					K.current = c.scrollHeight;
					a = K.current;
					a !== c.scrollHeight && (a = c.scrollHeight);
					f = Math.pow(b, 2) / a;
					var h = (b - f) / (a - b);
					d.style.right = "0px";
					e.style.right = "0px";
					d.style.height = a <= b ? "0px" : f + "px";
					e.style.height = a + "px";
					d.style.transform = ["matrix3d(\n          1,0,0,0,\n          0,1,0,0,\n          0,0,1,0,\n          0,0,0,-1)", "scale(" + 1 / h + ")", "translateZ(" + (1 - 1 / h) + "px)", "translateZ(-2px)"].join(" ");
					d.style.display = "block";
					e.style.display = a <= b ? "none" : "block"
				},
				i = function (a) {
					a.preventDefault();
					var b = a.clientY;
					a = c.clientHeight;
					var d = c.scrollTop;
					D(!0);
					var h = K.current / a;
					a = d / h;
					var i = function (a) {
						a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation()
					};
					if (b < g + a || b > g + a + f) {
						var j = b < g + a ? -20 : 20,
							k = !0,
							l = window.setInterval(function () {
								k && c.scrollTo({
									top: c.scrollTop + j
								})
							}, 16);
						a = function a(b) {
							i(b), l && window.clearInterval(l), window.removeEventListener("mouseup", a, !0), e.removeEventListener("mouseenter", m), e.removeEventListener("mouseleave", n)
						};
						var m = function (a) {
								k = !0
							},
							n = function (a) {
								k = !1
							};
						window.addEventListener("mouseup", a, !0);
						e.addEventListener("mouseenter", m);
						e.addEventListener("mouseleave", n);
						return
					}
					var o = function (a) {
						i(a);
						a = a.clientY - b;
						c.scrollTo({
							top: d + a * h
						})
					};
					a = function a(b) {
						i(b), D(!1), window.removeEventListener("mousemove", o, !0), window.removeEventListener("mouseup", a, !0)
					};
					window.addEventListener("mousemove", o, !0);
					window.addEventListener("mouseup", a, !0)
				},
				j = b("debounce")(h, 100);
			window.addEventListener("resize", j);
			e.addEventListener("mousedown", i);
			var k = new(b("resize-observer-polyfill"))(j);
			k.observe(a);
			k.observe(c);
			return function () {
				window.removeEventListener("resize", j), e.removeEventListener("mousedown", i), k.disconnect(), j.reset()
			}
		}, [w]);
		x = function () {
			z(!0)
		};
		var L = function () {
				return z(!1)
			},
			M = function (a) {
				n && n(a), B(!0), J.current && window.clearTimeout(J.current), J.current = window.setTimeout(function () {
					B(!1)
				}, 1e3)
			};
		h.useEffect(function () {
			return function () {
				window.clearTimeout(J.current)
			}
		}, []);
		var N = h.useMemo(function () {
			return {
				getDOMNode: function () {
					return G.current
				}
			}
		}, []);
		h.useImperativeHandle(c, function () {
			return N
		});
		c = h.useMemo(function () {
			return [].concat(E, [N])
		}, [N, E]);
		return w ? h.jsx(b("BaseScrollableAreaContext").Provider, {
			value: c,
			children: h.jsx("div", babelHelpers["extends"]({}, a, {
				className: (g || (g = b("stylex")))(i["default"], e && i.expanding, l && i.hideScrollbar, m && i.horizontalAuto, v && i.verticalAuto, u),
				"data-testid": void 0,
				id: f,
				onScroll: M,
				ref: G,
				style: t,
				children: h.jsxs("div", {
					className: g(i.baseScroller, m && !v && i.baseScrollerHorizontal),
					children: [s ? h.jsx(p, {
						onVisible: s,
						scrollerRef: G
					}) : null, d, r ? h.jsx(o, {
						onVisible: r,
						scrollerRef: G
					}) : null]
				})
			}))
		}) : h.jsx(b("BaseScrollableAreaContext").Provider, {
			value: c,
			children: h.jsxs("div", babelHelpers["extends"]({}, a, {
				className: (g || (g = b("stylex")))(i["default"], i.hideScrollbar, e && i.expanding, i.perspective, m && i.horizontalAuto, v && i.verticalAuto, u),
				"data-testid": void 0,
				id: f,
				onMouseEnter: x,
				onMouseLeave: L,
				onScroll: M,
				ref: G,
				style: t,
				children: [h.jsxs("div", {
					className: g(i.baseScroller, m && !v && i.baseScrollerHorizontal),
					ref: F,
					children: [s ? h.jsx(p, {
						onVisible: s,
						scrollerRef: G
					}) : null, d, r ? h.jsx(o, {
						onVisible: r,
						scrollerRef: G
					}) : null]
				}), h.jsx("div", babelHelpers["extends"]({
					className: g(k.base)
				}, b("CometVisualCompletionAttributes").IGNORE, {
					"data-thumb": 1,
					ref: I
				})), h.jsx("div", babelHelpers["extends"]({
					className: g(j.base, (y || A || C) && j.hovered)
				}, b("CometVisualCompletionAttributes").IGNORE, {
					"data-thumb": 1,
					ref: H,
					children: h.jsx("div", {
						className: g(j.inner)
					})
				}))]
			}))
		})
	}
	var m = {
		main: {
			height: "ay7djpcl",
			opacity: "b5wmifdl",
			pointerEvents: "hzruof5a",
			width: "rfua0xdk"
		},
		top: {
			position: "pmk7jnqg",
			top: "kr520xx4"
		}
	};

	function n(a) {
		var c = a.onVisible,
			d = a.scrollerRef;
		a = a.xstyle;
		var e = h.useMemo(function () {
			return l ? function () {
				return d.current
			} : void 0
		}, [d]);
		c = b("useVisibilityObserver")({
			onVisible: c,
			options: {
				root: e
			}
		});
		return h.jsx("div", {
			className: (g || (g = b("stylex")))(m.main, a),
			ref: c
		})
	}

	function o(a) {
		var b = a.onVisible;
		a = a.scrollerRef;
		return h.jsx(n, {
			onVisible: b,
			scrollerRef: a
		})
	}

	function p(a) {
		var b = a.onVisible;
		a = a.scrollerRef;
		return h.jsx(n, {
			onVisible: b,
			scrollerRef: a,
			xstyle: m.top
		})
	}

	function q() {
		return b("UserAgent").isPlatform("iOS") || b("UserAgent").isPlatform("Android") || b("UserAgent").isBrowser("Edge") || b("UserAgent").isBrowser("IE") || b("UserAgent").isBrowser("Firefox < 64")
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);