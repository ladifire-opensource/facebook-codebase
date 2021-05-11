__d("BaseLoadingStateElement.react", ["FocusWithinHandler.react", "React", 
	"ariaGlimmerProps", "joinClasses", "stylex", "useCometLoadingStateTracker", "useMergeRefs"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			hideOutline: {
				outline: "lzcic4wl"
			}
		},
		j = h.createContext(!1);

	function a(a, c) {
		var d = a.children,
			e = a.className_DEPRECATED,
			f = a.isFocusTarget,
			k = a.style,
			l = a.xstyle;
		a = h.useContext(j);
		var m = b("useCometLoadingStateTracker")(),
			n = m[0];
		m = m[1];
		var o = b("useMergeRefs")(c, m);
		return a ? h.jsx("div", {
			className: b("joinClasses")((g || (g = b("stylex")))(l), e),
			ref: c,
			style: k,
			children: d
		}) : h.jsx(j.Provider, {
			value: !0,
			children: h.jsx(b("FocusWithinHandler.react"), {
				children: function (a, c) {
					return h.jsx("div", babelHelpers["extends"]({}, b("ariaGlimmerProps"), n, {
						className: b("joinClasses")((g || (g = b("stylex")))(!c && i.hideOutline, l), e),
						"data-focus-target": f,
						ref: o,
						style: k,
						children: d
					}))
				}
			})
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);