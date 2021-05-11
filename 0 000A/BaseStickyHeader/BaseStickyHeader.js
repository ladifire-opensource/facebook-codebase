__d("BaseStickyHeader.react", ["BaseScrollableAreaContext", "BaseView.react", 
	"BaseViewportMarginsContext", "HiddenSubtreePassiveContext", 
	"intersectionObserverEntryIsIntersecting", "react", "useIntersectionObserver", "useMergeRefs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = g || b("react"),
		i = {
			root: {
				overflowAnchor: "rek2kq2y",
				position: "lpgh02oy"
			}
		};

	function a(a, c) {
		var d = a.children,
			e = a.onStickyActive,
			f = a.onStickyChange,
			g = a.onStickyInactive;
		a.style;
		var j = a.topOffset;
		j = j === void 0 ? 0 : j;
		var k = a.xstyle,
			l = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "onStickyActive", "onStickyChange", "onStickyInactive", "style", "topOffset", "xstyle"]),
			m = h.useRef(null),
			n = h.useRef(!1),
			o = h.useContext(b("BaseScrollableAreaContext")),
			p = h.useContext(b("BaseViewportMarginsContext")),
			q = o[o.length - 1],
			r = h.useContext(b("HiddenSubtreePassiveContext")),
			s = j + (q != null ? 0 : p.top);
		o = b("useIntersectionObserver")(h.useCallback(function(a) {
			var c = r.getCurrentState();
			c = c.hiddenOrBackgrounded;
			if (c) return;
			c = !b("intersectionObserverEntryIsIntersecting")(a);
			if (c !== n.current) {
				f && f(c);
				c ? e && e() : g && g();
				n.current = c;
				a = m.current;
				a != null && (a.style.zIndex = c ? "1" : "")
			}
		}, [r, e, f, g]), h.useMemo(function() {
			return {
				root: function() {
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
		return h.jsxs(h.Fragment, {
			children: [h.jsx(b("BaseView.react"), {
				ref: o
			}), h.jsx(b("BaseView.react"), babelHelpers["extends"]({}, l, {
				ref: j,
				style: babelHelpers["extends"]({}, a.style, {
					top: s,
					zIndex: n.current ? "1" : ""
				}),
				xstyle: [i.root, k],
				children: d
			}))]
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);