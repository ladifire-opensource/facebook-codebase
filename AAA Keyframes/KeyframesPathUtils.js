__d("KeyframesPathUtils", [], (function(a, b, c, d, e, f) {
	"use strict";

	function a(a, b, c) {
		return (c - b) * a + b
	}

	function b(a, b, c, d, e, f, g) {
		return e * d + 2 * c * a * f + b * g
	}

	function c(a, b, c, d, e, f, g, h) {
		return e * d * c + f * 3 * d * a + g * 3 * c * b + h * b * a
	}
	e.exports = {
		interpolateLinear: a,
		interpolateQuad: b,
		interpolateCubic: c,
		lerp: a
	}
}), null);