__d("getPhotoEditorAsyncMutationHandler", ["Promise", "recoverableViolation", "resolvePhotoPromise"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, c, d, e, f) {
		var g = function (a) {
			a = c && c(a);
			return a == null ? !1 : !0
		};
		return function (c) {
			var h = g(c);
			if (h == null) {
				b("recoverableViolation")("Invalid action taken to trigger mutation of media of type: " + c.fileType + " which is in the " + c.state + " state.", "comet_composer");
				return b("Promise").resolve(c)
			}
			var i;
			h = new(b("Promise"))(function (a) {
				i = a
			});
			d(a, c, function (a, c) {
				e && e(a), b("resolvePhotoPromise")(a, i, c)
			}, function (d) {
				f && f(d), b("resolvePhotoPromise")(d, i), b("recoverableViolation")("Mutation " + a.type + " failed: " + c.fileType + " which is in the " + c.state + " state.", "comet_composer")
			});
			return h
		}
	}
}), null);