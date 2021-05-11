__d("CometDocumentScrollView.react", ["BaseView.react", "HiddenSubtreeContext", "HiddenSubtreeContextProvider.react", "JSScheduler", "React", "UserAgent", "gkx", "stylex", "useLayoutEffect_SAFE_FOR_SSR", "usePrevious", "useStable"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = c;
	var g = b("React"),
		h = {
			detached: {
				left: "j34wkznp",
				position: "poy2od1o",
				top: "kr520xx4",
				width: "k4urcfbm"
			},
			disablePositionSticky: {
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs"
			}
		},
		i = new Map(),
		j = new Set(),
		k = null;

	function l(a, b) {
		return !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING)
	}

	function m() {
		var a = null;
		i.forEach(function (b, c) {
			a == null ? a = c : a != null && c != null && l(a, c) && !j.has(c) && (a = c)
		});
		return a
	}

	function n(a) {
		return k == null || l(k, a)
	}

	function c(c) {
		var d = c.contextKey,
			e = d === void 0 ? null : d;
		d = c.hiddenWhenDetached;
		d = d === void 0 ? !1 : d;
		var f = c.maintainScrollForContext,
			l = f === void 0 ? !1 : f,
			o = c.onInitialScroll;
		f = c.resetScrollOnMount;
		var p = f === void 0 ? !0 : f;
		f = babelHelpers.objectWithoutPropertiesLoose(c, ["contextKey", "hiddenWhenDetached", "maintainScrollForContext", "onInitialScroll", "resetScrollOnMount"]);
		var q = g.useRef(),
			r = g.useRef({
				x: 0,
				y: 0
			}),
			s = b("useStable")(function () {
				return {}
			}),
			t = b("usePrevious")(e);
		c = g.useState(!1);
		var u = c[0],
			v = c[1];
		c = g.useState({
			x: 0,
			y: 0
		});
		var w = c[0],
			x = c[1],
			y = b("usePrevious")(u);
		c = g.useContext(b("HiddenSubtreeContext"));
		var z = c.hidden;
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			var a = q.current;
			if (a != null) {
				if (n(a)) {
					if (k != null) {
						var c = i.get(k);
						c && c(!1)
					}
					k = a
				} else v(!0);
				i.set(a, function (a) {
					b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_Immediate, function () {
						a || x(babelHelpers["extends"]({}, r.current)), v(!a)
					})
				});
				return function () {
					i["delete"](a);
					if (k === a) {
						k = m();
						if (k != null) {
							var b = i.get(k);
							b && b(!0)
						}
					}
				}
			}
		}, []);
		var A = g.useCallback(function (b, c) {
			a.scrollTo(b, c), typeof o === "function" && o(b, c)
		}, [o]);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			(p || y != null) && !u && u !== y && A(w.x, w.y)
		}, [u, w, y, A, p]);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			if ((p || t != null) && e !== t) {
				var a = l && e in s ? s[e] : {
					x: 0,
					y: 0
				};
				u ? x(a) : A(a.x, a.y)
			}
		}, [e, s, u, l, t, A, p]);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			if (!u) {
				var b = function () {
					var b = a.pageXOffset,
						c = a.pageYOffset;
					r.current = {
						x: b,
						y: c
					};
					e != null && (s[e] = {
						x: b,
						y: c
					})
				};
				window.addEventListener("scroll", b, {
					passive: !0
				});
				return function () {
					return window.removeEventListener("scroll", b, {
						passive: !0
					})
				}
			}
		}, [u, e, s]);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			var a = q.current;
			if (a != null)
				if (z) {
					j.add(a);
					if (!u) {
						v(!0);
						k = m();
						if (k != null) {
							var b = i.get(k);
							b && b(!0)
						}
					}
					return function () {
						j["delete"](a)
					}
				} else if (u && a !== k && a === m()) {
				if (k != null) {
					b = i.get(k);
					b && b(!1)
				}
				k = a;
				b = i.get(k);
				b && b(!0)
			}
		}, [u, z]);
		c = d && (b("gkx")("1685163") || u);
		return g.jsx(b("HiddenSubtreeContextProvider.react"), {
			ignoreParent: !0,
			isBackgrounded: u,
			isHidden: c,
			children: g.jsx(b("BaseView.react"), babelHelpers["extends"]({}, f, {
				hidden: c
			}, u && !d && {
				"aria-hidden": !0,
				id: "scrollview",
				style: {
					left: -w.x,
					top: -w.y
				},
				xstyle: [h.detached, b("gkx")("1660344") && (b("UserAgent").isBrowser("Chrome") || b("UserAgent").isBrowser("Edge")) && h.disablePositionSticky]
			}, {
				ref: q
			}))
		})
	}
}), null);