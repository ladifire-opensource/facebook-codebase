__d("useFileDragEvents", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a, b, c) {
		b === void 0 && (b = document.documentElement);
		var d = g.useRef(0),
			e = g.useState(!1),
			f = e[0],
			h = e[1],
			i = g.useCallback(function (b) {
				h(!1);
				if ((c == null || c(b)) && a != null) {
					b.preventDefault();
					var e = b.dataTransfer;
					if (e != null) {
						var f = e.files;
						a(f, e) !== !1 && b.stopPropagation()
					} else b.stopPropagation();
					d.current = 0
				}
			}, [a, c]),
			j = g.useCallback(function (a) {
				var b;
				b = (b = a.dataTransfer) == null ? void 0 : b.files;
				(c == null || c(a)) && b != null && (a.preventDefault(), d.current++, h(!0))
			}, [c]),
			k = g.useCallback(function (a) {
				a = (a = a.dataTransfer) == null ? void 0 : a.files;
				a != null && --d.current === 0 && h(!1)
			}, []),
			l = g.useCallback(function (a) {
				var b;
				b = (b = a.dataTransfer) == null ? void 0 : b.files;
				b != null && a.preventDefault()
			}, []);
		g.useEffect(function () {
			if (b != null) {
				b.addEventListener("drop", i, !0);
				b.addEventListener("dragenter", j, !0);
				b.addEventListener("dragleave", k, !0);
				b.addEventListener("dragover", l, !0);
				return function () {
					b.removeEventListener("drop", i, !0), b.removeEventListener("dragenter", j, !0), b.removeEventListener("dragleave", k, !0), b.removeEventListener("dragover", l, !0)
				}
			}
		}, [j, k, l, i, b]);
		return f
	}
}), null);