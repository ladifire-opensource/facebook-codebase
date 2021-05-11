__d("getPhotoEditorMetadataMutationHandler", ["recoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, c, d, e) {
		var f = (c = c) != null ? c : g;
		return function (c, g) {
			var h = f(c);
			!h ? (b("recoverableViolation")("Invalid action taken to alter metadata of media of type: " + c.fileType + " which is in the " + c.state + " state.", "comet_composer"), h = c) : h = d(a, c, g);
			if (e != null) return {
				asyncMutation: e,
				newMediaItem: h
			};
			else return {
				newMediaItem: h
			}
		}
	}

	function g(a) {
		return !0
	}
}), null);