__d("rotationCoordinateTransform", ["unrecoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		var c = a.intermediateX,
			d = a.intermediateY;
		a = a.mediaViewState;
		var e = a.angle,
			f = a.clientImageHeight;
		a = a.clientImageWidth;
		if (f == null || a == null) throw b("unrecoverableViolation")("Missing client image height/width in rotation coordinate transform", "comet_composer");
		if (c == null || d == null) throw b("unrecoverableViolation")("Missing coordinates in rotation coordinate transform", "comet_composer");
		switch (e) {
			case 270:
				return {
					intermediateX: a - d,
					intermediateY: c
				};
			case 180:
				return {
					intermediateX: a - c,
					intermediateY: f - d
				};
			case 90:
				return {
					intermediateX: d,
					intermediateY: f - c
				};
			default:
				return {
					intermediateX: c,
					intermediateY: d
				}
		}
	}
}), null);