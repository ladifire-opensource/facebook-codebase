__d("handleMutationsAndMetadataByType", ["generateMutationsAndUpdateMetadata"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, c, d) {
		c = Array.from(c.keys());
		c.sort(function (a, b) {
			return b.priority - a.priority
		});
		var e = [],
			f = [],
			g;
		if (a.fileType === "PHOTO") {
			d = b("generateMutationsAndUpdateMetadata").generateMutationsAndUpdateMetadata(a, null, c, d);
			if (d != null) {
				var h;
				e = (h = d.photoMutations) != null ? h : [];
				g = d.newMedia
			}
		}
		if (a.fileType === "VIDEO") {
			h = b("generateMutationsAndUpdateMetadata").generateMutationsAndUpdateMetadata(null, a, c);
			if (h != null) {
				f = (d = h.videoMutations) != null ? d : [];
				g = h.newMedia
			}
		}
		return {
			mutationsForPhoto: e,
			mutationsForVideo: f,
			updatedMediaAttachment: g
		}
	}
}), null);