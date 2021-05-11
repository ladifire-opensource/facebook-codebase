__d("BaseRadio.react", ["BaseFocusRing.react", "BaseInput.react", "BaseView.react", "React", "mergeRefs", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			radio: {
				cursor: "nhd2j8a9",
				height: "datstx6m",
				marginTop: "kvgmc6g5",
				marginEnd: "cxmmr5t8",
				marginBottom: "oygrvhab",
				marginStart: "hcukyx3x",
				opacity: "b5wmifdl",
				outline: "lzcic4wl",
				paddingTop: "jb3vyjys",
				paddingEnd: "rz4wbd8a",
				paddingBottom: "qt6c0cv9",
				paddingStart: "a8nywdso",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4",
				width: "k4urcfbm"
			},
			wrapper: {
				position: "l9j0dhe7"
			}
		};

	function a(a, c) {
		var d = a.children,
			e = a.indeterminate,
			f = e === void 0 ? !1 : e;
		e = a.suppressFocusRing;
		var i = a.testid,
			j = a.xstyle,
			k = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "indeterminate", "suppressFocusRing", "testid", "xstyle"]),
			l = g.useRef(null);
		g.useLayoutEffect(function () {
			l.current != null && (l.current.indeterminate = f)
		}, [f]);
		var m = g.useMemo(function () {
			return b("mergeRefs")(c, l)
		}, [c]);
		return g.jsx(b("BaseFocusRing.react"), {
			suppressFocusRing: e,
			children: function (a) {
				return g.jsxs(b("BaseView.react"), {
					testid: void 0,
					xstyle: [h.wrapper, a, j],
					children: [d, g.jsx(b("BaseInput.react"), babelHelpers["extends"]({}, k, {
						"aria-checked": f ? "mixed" : (a = k.checked) != null ? a : !1,
						ref: m,
						type: "radio",
						xstyle: h.radio
					}))]
				})
			}
		})
	}
	c = g.memo(g.forwardRef(a));
	e.exports = c
}), null);