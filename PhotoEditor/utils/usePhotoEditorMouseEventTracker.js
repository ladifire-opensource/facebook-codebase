__d("usePhotoEditorMouseEventTracker.react", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a, b, c) {
		g.useEffect(function () {
			window.addEventListener("mousemove", b);
			window.addEventListener("mouseup", c);
			a.current != null && a.current.addEventListener("mouseup", c);
			var d = function () {
				window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", c), a.current != null && a.current.removeEventListener("mouseup", c)
			};
			return function () {
				return d()
			}
		}, [a, b, c])
	}
}), null);