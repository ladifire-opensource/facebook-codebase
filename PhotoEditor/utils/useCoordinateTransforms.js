__d("useCoordinateTransforms.react", ["MediaEditorViewStateContext", "React", "unrecoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a() {
		var a = g.useContext(b("MediaEditorViewStateContext")),
			c = a == null ? void 0 : a.clickEventCoordinateTransforms,
			d = function (d) {
				for (var e = c, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					var h;
					if (f) {
						if (g >= e.length) break;
						h = e[g++]
					} else {
						g = e.next();
						if (g.done) break;
						h = g.value
					}
					h = h;
					h = h(babelHelpers["extends"]({}, d, {
						mediaViewState: a
					}));
					var i = h.intermediateX;
					h = h.intermediateY;
					d.intermediateX = i;
					d.intermediateY = h
				}
				if (d.intermediateX == null || d.intermediateY == null) throw b("unrecoverableViolation")("Mouse click event can never be null", "comet_composer");
				return {
					intermediateX: d.intermediateX,
					intermediateY: d.intermediateY
				}
			};
		return d
	}
}), null);