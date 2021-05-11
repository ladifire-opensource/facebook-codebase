__d("isMimeTypeForMedia", ["UFICommentFileInputAcceptValues"], (function (a, b, c, d, e, f) {
	"use strict";
	f.isMimeTypeForPhoto = a;
	f.isMimeTypeForVideo = c;
	var g = b("UFICommentFileInputAcceptValues").photos,
		h = b("UFICommentFileInputAcceptValues").videos,
		i = {
			"image/gif": "video"
		},
		j, k;

	function l(a) {
		return a.split(",").map(function (a) {
			return a.trim()
		}).map(function (a) {
			return a.replace(/\/\*$/, "/")
		})
	}

	function a(a) {
		k == null && (k = l(g));
		var b = i[a];
		return b != null ? b === "photo" : k.some(function (b) {
			return a.startsWith(b)
		})
	}

	function c(a) {
		j == null && (j = l(h));
		var b = i[a];
		return b != null ? b === "video" : j.some(function (b) {
			return a.startsWith(b)
		})
	}
}), null);