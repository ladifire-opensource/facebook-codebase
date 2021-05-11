__d("CometImageFromIXValue.react", ["BaseImage.react", "React",
 "RecoverableViolationWithComponentStack.react", "coerceImageishSprited", 
 "coerceImageishURL", "joinClasses", "testID"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.alt,
			e = a.source;
		a = a.testid;
		var f = b("coerceImageishSprited")(e);
		if (f != null) {
			var h = f.spriteCssClass;
			f = f.spriteMapCssClass;
			return g.jsx("i", babelHelpers["extends"]({}, b("testID")(a), {
				"aria-label": d === "" ? null : d,
				className: b("joinClasses")(f, h),
				ref: c,
				role: d === "" ? null : "img"
			}))
		}
		a = b("coerceImageishURL")(e);
		if (a != null) {
			f = a.height;
			h = a.uri;
			e = a.width;
			return g.jsx(b("BaseImage.react"), {
				alt: d,
				draggable: !1,
				height: f,
				ref: c,
				src: h,
				testid: void 0,
				width: e
			})
		}
		return g.jsx(b("RecoverableViolationWithComponentStack.react"), {
			errorMessage: "asset provided to CometImageFromIXValue cannot be transformed by Haste",
			projectName: "comet_ui"
		})
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);