__d("CometEntityHeaderStickyBar.react", ["BaseRow.react", 
	"BaseRowItem.react", "CometBase.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			container: {
				transitionDuration: "ijkhr0an",
				transitionProperty: "flx89l3n",
				transitionTimingFunction: "nna1d5md"
			},
			containerSticky: {
				transform: "i9k17dj3"
			},
			fadeInTransition: {
				transitionDuration: "c0paw9va",
				transitionProperty: "l23jz15m",
				transitionTimingFunction: "d4752i1f"
			},
			fadeOutTransition: {
				transitionDuration: "dvqrsczn",
				transitionProperty: "l23jz15m",
				transitionTimingFunction: "d4752i1f"
			},
			primaryRow: {
				minHeight: "pxsmfnpt",
				opacity: "pedkr2u6",
				visibility: "n1dktuyu"
			},
			primaryRowSticky: {
				opacity: "b5wmifdl",
				visibility: "kr9hpln1"
			},
			root: {
				position: "l9j0dhe7"
			},
			stickyRow: {
				height: "datstx6m",
				opacity: "b5wmifdl",
				position: "pmk7jnqg",
				top: "i42f9fw1",
				visibility: "kr9hpln1",
				width: "k4urcfbm"
			},
			stickyRowSticky: {
				opacity: "pedkr2u6",
				visibility: "n1dktuyu"
			}
		};

	function j(a, b, c) {
		b(!c).split(/\s+/).filter(Boolean).forEach(function (b) {
			return a.classList.remove(b)
		}), b(c).split(/\s+/).filter(Boolean).forEach(function (b) {
			return a.classList.add(b)
		})
	}

	function a(a, c) {
		var d = a.initialSticky;
		d = d === void 0 ? !1 : d;
		var e = a.primaryContent,
			f = a.stickyContent,
			k = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["initialSticky", "primaryContent", "stickyContent", "xstyle"]);
		var l = h.useRef(d),
			m = h.useRef(),
			n = h.useRef(),
			o = h.useRef(),
			p = h.useRef(),
			q = function () {
				m.current != null && (window.cancelAnimationFrame(m.current), m.current = null)
			};
		h.useImperativeHandle(c, function () {
			return {
				setSticky: function (a) {
					l.current = a, q(), m.current = window.requestAnimationFrame(function () {
						m.current = null;
						var c = n.current;
						c != null && j(c, function (a) {
							return (g || (g = b("stylex")))(a && i.containerSticky)
						}, a);
						c = o.current;
						c != null && j(c, function (a) {
							return (g || (g = b("stylex")))(a && i.primaryRowSticky, a ? i.fadeInTransition : i.fadeOutTransition)
						}, a);
						c = p.current;
						c != null && j(c, function (a) {
							return (g || (g = b("stylex")))(a && i.stickyRowSticky, a ? i.fadeOutTransition : i.fadeInTransition)
						}, a)
					})
				}
			}
		});
		h.useEffect(function () {
			return q
		}, []);
		return h.jsx(b("CometBase.react"), babelHelpers["extends"]({}, a, {
			xstyle: [i.root, k],
			children: h.jsxs(b("CometBase.react"), {
				ref: n,
				xstyle: [i.container, l.current && i.containerSticky],
				children: [h.jsx(b("BaseRow.react"), {
					ref: o,
					xstyle: [i.primaryRow, l.current && i.primaryRowSticky, l.current ? i.fadeInTransition : i.fadeOutTransition],
					children: h.jsx(b("BaseRowItem.react"), {
						expanding: !0,
						children: e
					})
				}), h.jsx(b("BaseRow.react"), {
					ref: p,
					xstyle: [i.stickyRow, l.current && i.stickyRowSticky, l.current ? i.fadeOutTransition : i.fadeInTransition],
					children: h.jsx(b("BaseRowItem.react"), {
						verticalAlign: "center",
						children: f
					})
				})]
			})
		}))
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);