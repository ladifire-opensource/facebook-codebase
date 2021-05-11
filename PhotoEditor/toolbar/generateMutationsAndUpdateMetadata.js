__d("generateMutationsAndUpdateMetadata", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.generateMutationsAndUpdateMetadata = a;

	function a(a, b, c, d) {
		if (a == null && b == null) return null;
		var e;
		a != null ? e = babelHelpers["extends"]({}, a) : b != null && (e = babelHelpers["extends"]({}, b));
		if (e == null) return null;
		a = [];
		b = [];
		for (var f = 0; f < c.length; f++) {
			var g = c[f];
			if (e != null && e.fileType === "PHOTO" && g.saver.actionForPhoto != null) {
				var h = g.saver.actionForPhoto(e, d),
					i = h.asyncMutation;
				h = h.newMediaItem;
				e = h;
				i != null && a.push(i)
			}
			if (e != null && e.fileType === "VIDEO" && g.saver.actionForVideo != null) {
				h = g.saver.actionForVideo(e);
				i = h.asyncMutation;
				g = h.newMediaItem;
				e = g;
				i != null && b.push(i)
			}
		}
		return {
			newMedia: e,
			photoMutations: a,
			videoMutations: b
		}
	}
}), null);