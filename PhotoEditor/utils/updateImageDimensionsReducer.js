__d("updateImageDimensionsReducer", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, b) {
		switch (b.type) {
			case "SET_ORIGINAL_IMAGE_DIMENSIONS":
				return babelHelpers["extends"]({}, a, {
					originalHeight: b.height,
					originalWidth: b.width
				});
			case "SET_CLIENT_IMAGE_DIMENSIONS":
				return a.angle === 270 || a.angle === 90 ? babelHelpers["extends"]({}, a, {
					clientImageHeight: b.width,
					clientImageWidth: b.height
				}) : babelHelpers["extends"]({}, a, {
					clientImageHeight: b.height,
					clientImageWidth: b.width
				})
		}
		return a
	}
}), null);