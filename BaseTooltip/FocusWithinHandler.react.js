__d("FocusWithinHandler.react", ["React", "ReactFocusEvent.react", "react"], (function (a, b, c, d, e, f) {
	e.exports = a;
	var g, h = b("React"),
		i = g || (g = b("react")),
		j = i.unstable_Scope;

	function a(a) {
		var c, d = a.children,
			e = a.onFocusChange,
			f = a.onFocusVisibleChange,
			g = a.onFocusWithin,
			k = a.onBlurWithin;
		a = a.testOnly;
		var l = h.useRef(null);
		c = h.useState((c = a && a.focus) != null ? c : !1);
		var m = c[0],
			n = c[1];
		a = h.useState((c = a && a.focusVisible) != null ? c : !1);
		c = a[0];
		var o = a[1],
			p = e ? function (a) {
				n(a), e(a)
			} : n,
			q = f ? function (a) {
				o(a), f(a)
			} : o;
		a = b("ReactFocusEvent.react").useFocusWithin(l, h.useMemo(function () {
			return {
				onFocusWithin: function (a) {
					g && !m && g(a)
				},
				onBlurWithin: function (a) {
					k && m && k(a)
				},
				onFocusWithinChange: p,
				onFocusWithinVisibleChange: q
			}
		}, [m, g, k, p, q]));
		return i.jsx(j, {
			ref: a,
			children: typeof d === "function" ? d(m, c) : d
		})
	}
}), null);