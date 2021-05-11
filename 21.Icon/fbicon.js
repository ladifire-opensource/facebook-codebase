__d("fbicon", ["TintableIconSource", "memoizeWithArgs", "unrecoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	f.filled = a;
	f.outline = c;

	function a(a, c) {
		throw b("unrecoverableViolation")("fbicon.filled" + ("(" + JSON.stringify(a) + ", " + c + "): ") + "Unexpected fbicon.filled reference.", "comet_ui")
	}

	function c(a, c) {
		throw b("unrecoverableViolation")("fbicon.outline" + ("(" + JSON.stringify(a) + ", " + c + "): ") + "Unexpected fbicon.outline reference.", "comet_ui")
	}
	d = b("memoizeWithArgs")(function (a, c) {
		return new(b("TintableIconSource"))("FB", a, c)
	}, function (a, c) {
		if (typeof a === "object") {
			if (a.sprited && a.spriteMapCssClass && a.spriteCssClass) return a.spriteMapCssClass + "/" + a.spriteCssClass + ":" + c;
			else if (typeof a.uri === "string") return a.uri + ":" + c
		} else if (typeof a === "string") return a + ":" + c;
		throw b("unrecoverableViolation")("fbicon._: Invalid icon provided.", "comet_ui")
	});
	f._ = d
}), null);