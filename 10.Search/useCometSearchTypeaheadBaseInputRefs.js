__d("useCometSearchTypeaheadBaseInputRefs", ["React", "mergeRefs"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = g.useRef(null),
			d = g.useMemo(function () {
				return b("mergeRefs")(c, a)
			}, [c, a]);
		return {
			composedRef: d,
			inputRef: c
		}
	}
}), null);