__d("CometFeedShareMedia.react", ["$InternalEnum", "CometFeedShareMedia_media.graphql", "CometFeedStoryPhotoAttachmentImplementation", "CometRelay", "react", "recoverableViolation", "useCometFeedPhotoBackgroundColorRelay", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = h || b("react"),
		j = b("$InternalEnum").Mirrored(["MISSING_IMAGE", "MISSING_IMAGE_URI", "MISSING_IMAGE_DIMENSIONS", "IMAGE_NOT_BIG_ENOUGH"]),
		k = 64;

	function l(a, b) {
		return a >= k && b >= k
	}

	function m(a) {
		switch (a) {
			case j.MISSING_IMAGE:
				return "image object cannot be null in CometFeedShareMedia";
			case j.MISSING_IMAGE_URI:
				return "imageURI cannot be empty in CometFeedShareMedia";
			case j.MISSING_IMAGE_DIMENSIONS:
				return "image's width and height cannot be null in CometFeedShareMedia";
			case j.IMAGE_NOT_BIG_ENOUGH:
				return "isImageBigEnough must be true in CometFeedShareMedia"
		}
	}

	function n(a) {
		if (a == null) return {
			error: j.MISSING_IMAGE
		};
		if (a.width == null || a.height == null) return {
			error: j.MISSING_IMAGE_DIMENSIONS
		};
		if (!l(a.width, a.height)) return {
			error: j.IMAGE_NOT_BIG_ENOUGH
		};
		return a.uri == null ? {
			error: j.MISSING_IMAGE_URI
		} : {
			height: a.height,
			uri: a.uri,
			width: a.width
		}
	}

	function a(a) {
		var c = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometFeedShareMedia_media.graphql"), a.media),
			d = a.accessibilityCaption,
			e = a.setHasImagePreview;
		a = b("useCometFeedPhotoBackgroundColorRelay")(c);
		var f = function() {
			var a = n(c == null ? void 0 : c.flexible_height_share_image);
			if (!a.error) return a;
			var d = n(c == null ? void 0 : c.large_share_image);
			if (!d.error) return d;
			b("recoverableViolation")("No valid image available in CometFeedShareMedia. flexible_height_share_image: " + m(a.error) + ". large_share_image: " + m(d.error), "comet_feed");
			return d
		}();
		b("useLayoutEffect_SAFE_FOR_SSR")(function() {
			if (e != null) {
				var a = !Object.prototype.hasOwnProperty.call(f, "error");
				e(a)
			}
		}, [f, e]);
		return f.error ? null : i.jsx(b("CometFeedStoryPhotoAttachmentImplementation"), {
			accentColor: a,
			accessibilityCaption: d,
			focusX: null,
			focusY: null,
			height: f.height,
			uri: f.uri,
			width: f.width
		})
	}
}), null);