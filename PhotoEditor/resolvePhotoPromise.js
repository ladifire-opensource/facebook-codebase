__d("resolvePhotoPromise", ["unrecoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, c, d) {
		if (c == null) return;
		if (d == null) {
			c();
			return
		}
		var e;
		a.state === "PREEXISTING" ? e = babelHelpers["extends"]({}, a, {
			data: babelHelpers["extends"]({}, a.data, {
				id: d
			}),
			entID: d,
			isEntMutated: !0
		}) : a.state === "UPLOADED" && (e = babelHelpers["extends"]({}, a, {
			data: babelHelpers["extends"]({}, a.data, {
				id: d
			}),
			entID: d,
			isEntMutated: !0
		}));
		if (e == null) throw b("unrecoverableViolation")("Invalid media supplied to run an async mutation on media of type: " + a.fileType, "comet_composer");
		c && c(e)
	}
}), null);