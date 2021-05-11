__d("updateCoordinateTransformsReducer", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, b) {
		switch (b.type) {
			case "ADD_COORDINATE_TRANSFORM_FN":
				return babelHelpers["extends"]({}, a, {
					clickEventCoordinateTransforms: [].concat(a.clickEventCoordinateTransforms, [b.fn])
				});
			case "ADD_ELEMENT_COORDINATE_TRANSFORM":
				var c;
				return babelHelpers["extends"]({}, a, {
					elementCoordinateTransforms: [].concat((c = a.elementCoordinateTransforms) != null ? c : [], [{
						fn: b.fn,
						priority: b.priority
					}])
				})
		}
		return a
	}
}), null);