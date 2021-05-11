__d("BaseTextArea.react", ["BaseFocusRing.react", "BaseInput.react", "React", "mergeRefs", "stylex", "useLayoutEffect_SAFE_FOR_SSR", "usePrevious"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			unresizable: {
				resize: "ieid39z1"
			}
		};

	function a(a, c) {
		var d = a.xstyle,
			e = a.minRows,
			f = e === void 0 ? 1 : e;
		e = a.maxRows;
		var i = e === void 0 ? Infinity : e;
		e = a.suppressFocusRing;
		var j = a.unresizable,
			k = j === void 0 ? !1 : j,
			l = a.value,
			m = babelHelpers.objectWithoutPropertiesLoose(a, ["xstyle", "minRows", "maxRows", "suppressFocusRing", "unresizable", "value"]),
			n = g.useRef(null),
			o = b("usePrevious")(i),
			p = b("usePrevious")(l);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			var a = n.current;
			if (a != null) {
				(o == null || p == null || l == null || i < o || l.length < p.length) && (a.rows = Math.min(Math.max(f, 1), i));
				while (a.rows < i && a.clientHeight < a.scrollHeight) a.rows += 1;
				a.style.overflowY = a.rows < i ? "hidden" : "auto"
			}
		}, [i, f, o, p, l]);
		var q = g.useMemo(function () {
			return b("mergeRefs")(n, c)
		}, [c]);
		return g.jsx(b("BaseFocusRing.react"), {
			suppressFocusRing: e,
			children: function (a) {
				return g.jsx(b("BaseInput.react"), babelHelpers["extends"]({}, m, {
					ref: q,
					type: "textarea",
					value: l,
					xstyle: [a, k && h.unresizable, d]
				}))
			}
		})
	}
	c = g.memo(g.forwardRef(a));
	e.exports = c
}), null);