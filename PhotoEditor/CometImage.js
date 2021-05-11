__d("CometImage.react", ["BaseImage.react", "CometImageFromIXValue.react", "React",
 "useFeedImageErrorEventLoggerCbs"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.alt,
			e = a.onError,
			f = a.onLoad,
			h = a.src,
			i = a.testid;
		i = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "onError", "onLoad", "src", "testid"]);
		a = b("useFeedImageErrorEventLoggerCbs")({
			onError: e,
			onLoad: f,
			src: h
		});
		e = a._onError;
		f = a._onLoad;
		return typeof h === "string" ? g.jsx(b("BaseImage.react"), babelHelpers["extends"]({}, i, {
			alt: d,
			onError: e,
			onLoad: f,
			ref: c,
			src: h,
			testid: void 0
		})) : g.jsx(b("CometImageFromIXValue.react"), {
			alt: d,
			ref: c,
			source: h,
			testid: void 0
		})
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);