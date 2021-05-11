__d("useElementCoordinateTransforms", ["MediaEditorViewStateContext", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a() {
		var a, c = g.useContext(b("MediaEditorViewStateContext")),
			d = Array.from((a = c == null ? void 0 : c.elementCoordinateTransforms) != null ? a : []).sort(function (a, b) {
				return b.priority - a.priority
			});
		a = function (a) {
			a = (a = a) != null ? a : {};
			for (var b = d, e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var g;
				if (e) {
					if (f >= b.length) break;
					g = b[f++]
				} else {
					f = b.next();
					if (f.done) break;
					g = f.value
				}
				g = g;
				g = g.fn;
				g = (g = g(babelHelpers["extends"]({}, a, {
					mediaViewState: c
				}))) != null ? g : {};
				var h = g.intermediateX;
				g = g.intermediateY;
				if (h == null || g == null) break;
				a.intermediateX = h;
				a.intermediateY = g
			}
			return {
				intermediateX: a.intermediateX,
				intermediateY: a.intermediateY
			}
		};
		return a
	}
}), null);