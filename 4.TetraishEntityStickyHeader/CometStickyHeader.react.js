__d("CometStickyHeader.react", ["BaseScrollableAreaContext", "CometBase.react", 
	"CometViewportMarginsContext", "HiddenSubtreePassiveContext", "React", 
	"intersectionObserverEntryIsIntersecting", "stylex", "useIntersectionObserver", "useMergeRefs"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			root: {
				overflowAnchor: "rek2kq2y",
				position: "lpgh02oy"
			}
		};

	function a(a, c) {
		var d = a.children,
			e = a.onStickyActive,
			f = a.onStickyChange,
			i = a.onStickyInactive;
		a.style;
		var j = a.topOffset;
		j = j === void 0 ? 0 : j;
		var k = a.xstyle,
			l = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "onStickyActive", "onStickyChange", "onStickyInactive", "style", "topOffset", "xstyle"]),
			m = g.useRef(null),
			n = g.useRef(!1),
			o = g.useContext(b("BaseScrollableAreaContext")),
			p = g.useContext(b("CometViewportMarginsContext")),
			q = o[o.length - 1],
			r = g.useContext(b("HiddenSubtreePassiveContext")),
			s = j + (q != null ? 0 : p.top);
		o = b("useIntersectionObserver")(g.useCallback(function (a) {
			var c = r.getCurrentState();
			c = c.hiddenOrBackgrounded;
			if (c) return;
			c = !b("intersectionObserverEntryIsIntersecting")(a);
			if (c !== n.current) {
				f && f(c);
				c ? e && e() : i && i();
				n.current = c;
				a = m.current;
				a != null && (a.style.zIndex = c ? "1" : "")
			}
		}, [r, e, f, i]), g.useMemo(function () {
			return {
				root: function () {
					return q != null ? q.getDOMNode() : null
				},
				rootMargin: {
					bottom: 0,
					left: 0,
					right: 0,
					top: -s
				},
				threshold: 0
			}
		}, [q, s]));
		j = b("useMergeRefs")(m, c);
		return g.jsxs(g.Fragment, {
			children: [g.jsx(b("CometBase.react"), {
				ref: o
			}), g.jsx(b("CometBase.react"), babelHelpers["extends"]({}, l, {
				ref: j,
				style: babelHelpers["extends"]({}, a.style, {
					top: s,
					zIndex: n.current ? "1" : ""
				}),
				xstyle: [h.root, k],
				children: d
			}))]
		})
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);