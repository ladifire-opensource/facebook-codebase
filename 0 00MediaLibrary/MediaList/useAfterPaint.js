__d("useAfterPaint", ["React", "cancelAnimationFrame", "requestAnimationFrame"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		g.useEffect(function() {
			var c = null,
				d = b("requestAnimationFrame")(function() {
					d = b("requestAnimationFrame")(function() {
						c = a()
					})
				});
			return function() {
				b("cancelAnimationFrame")(d), c && c()
			}
		}, [a])
	}
}), null);