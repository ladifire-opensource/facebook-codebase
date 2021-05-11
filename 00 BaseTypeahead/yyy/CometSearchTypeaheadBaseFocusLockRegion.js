__d("CometSearchTypeaheadBaseFocusLockRegion.react", ["React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React");

	function a(a) {
		var c = a.children;
		a = a.xstyle;
		var d = h.useCallback(function (a) {
			a.preventDefault()
		}, []);
		return h.jsx("div", {
			className: (g || (g = b("stylex")))(a),
			onMouseDown: d,
			children: c
		})
	}
}), null);