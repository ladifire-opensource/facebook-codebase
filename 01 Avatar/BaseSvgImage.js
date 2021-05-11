__d("BaseSvgImage.react", ["React", "useFeedImageErrorEventLoggerCbs"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.src,
			d = a.testid;
		d = babelHelpers.objectWithoutPropertiesLoose(a, ["src", "testid"]);
		a = b("useFeedImageErrorEventLoggerCbs")({
			src: c
		});
		var e = a._onError;
		a = a._onLoad;
		return g.jsx("image", babelHelpers["extends"]({}, d, {
			"data-testid": void 0,
			height: "100%",
			onError: e,
			onLoad: a,
			preserveAspectRatio: "xMidYMid slice",
			width: "100%",
			xlinkHref: c
		}))
	}
}), null);