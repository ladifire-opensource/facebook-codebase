__d("rotationElementCoordinateTransform", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		var b = a.intermediateX,
			c = a.intermediateY;
		a = a.mediaViewState;
		a = a.angle;
		if (b == null || c == null) return {
			intermediateX: b,
			intermediateY: c
		};
		switch (a) {
			case 90:
				return {
					intermediateX: 100 - c,
					intermediateY: b
				};
			case 180:
				return {
					intermediateX: 100 - b,
					intermediateY: 100 - c
				};
			case 270:
				return {
					intermediateX: c,
					intermediateY: 100 - b
				};
			default:
				return {
					intermediateX: b,
					intermediateY: c
				}
		}
	}
}), null);