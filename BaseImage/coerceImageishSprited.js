__d("coerceImageishSprited", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		if (a && typeof a === "object" && a.sprited && a.spriteMapCssClass && a.spriteCssClass) return a;
		else return null
	}
}), null);