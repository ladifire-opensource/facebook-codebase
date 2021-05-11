__d("FocusInertRegion.react", ["React", "react", "setElementCanTab", "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f) {
	e.exports = a;
	var g, h = b("React"),
		i = g || (g = b("react")),
		j = i.unstable_Scope;

	function a(a) {
		var c = a.children,
			d = a.disabled,
			e = d === void 0 ? !1 : d,
			f = a.focusQuery,
			g = h.useRef(null);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			var a = g.current;
			if (f && a != null) {
				a = a.DO_NOT_USE_queryAllNodes(f);
				if (a !== null)
					for (var c = 0; c < a.length; c++) {
						var d = a[c];
						b("setElementCanTab")(d, e)
					}
			}
		}, [e, f]);
		return i.jsx(j, {
			ref: g,
			children: c
		})
	}
}), null);