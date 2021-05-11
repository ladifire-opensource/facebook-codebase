// DONE
__d("CandelaPathUtils", [], (function(a, b, c, d, e, f) {
	"use strict";
	f.createPolygon = a;

	function a(a, b, c, d) {
		d === void 0 && (d = 0);
		var e = 2 * Math.PI / c,
			f = [],
			g;
		for (var h = 0; h < c; h++) g = h * e + d, f.push({
			x: a.x + b * Math.cos(g),
			y: a.y + b * Math.sin(g)
		});
		return f
	}
}), null);