__d("PagesCometAdminPhotosCreateAlbum.react", ["CometComposer.react", 
	"CometContentNotAvailable.react", "CometPhotoAlbumCreate.react", "CometRelay", 
	"CometRouteRenderType", "React", "WebPixelRatio", "cometComposerValidateNoMediaCurrentlyUploading",
	 "deferredLoadComponent", "getDeferredComposerTransformer", "recoverableViolation", 
	 "requireDeferred", "stylex", "useCometPhotoAlbumCreate", "PagesCometAdminPhotosCreateAlbumQuery.graphql"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = b("React"),
		j = b("deferredLoadComponent")((c = b("requireDeferred"))("CometComposerSavingIndicatorMask.react"));
	d = c("composerAlbumCreateDescriptionTransform");
	f = c("composerAlbumCreateTitleTransform");
	e = c("composerAlbumStoryDescriptionTransform");
	a = c("composerAlbumMediaAttachmentTransform");
	var k = [(c = b("getDeferredComposerTransformer"))(d), c(f)],
		l = [c(a), c(e)],
		m = {
			mediaAttachment: b("cometComposerValidateNoMediaCurrentlyUploading")
		},
		n = g !== void 0 ? g : g = b("PagesCometAdminPhotosCreateAlbumQuery.graphql");

	function a(a) {
		var c;
		a = b("CometRelay").usePreloadedQuery(n, a.queries);
		c = a == null ? void 0 : (c = a.page) == null ? void 0 : c.uri_token;
		var d = b("CometRouteRenderType").useIsPushView(),
			e = i.useMemo(function() {
				return null
			}, []),
			f = b("useCometPhotoAlbumCreate")({
				addToAlbumTransformers: l,
				buildInitialAddToAlbumData: function(a) {
					return {
						audiences: [{
							wall: {
								to_id: a
							}
						}],
						source: "WWW"
					}
				},
				createAlbumTransformers: k,
				privacyBaseState: "EVERYONE",
				scale: b("WebPixelRatio").get() * 4,
				timelineNavAppSectionToken: null
			}),
			g = f.isInFlight,
			o = f.onSubmitCommit;
		f = f.onSubmitHalt;
		(a == null || c == null) && b("recoverableViolation")("Failed to fetch data for Create Album.", "pages_consumer_experience_www");
		return i.jsx(b("CometComposer.react"), {
			beginningViewState: e,
			onSubmitCommit: o,
			onSubmitHalt: f,
			validators: m,
			children: function(a) {
				return i.jsxs("div", {
					className: (h || (h = b("stylex"))).dedupe(d ? {
						"min-height-1": "h3gjbzrl"
					} : {
						"min-height-1": "jgljxmt5"
					}),
					children: [i.jsx(b("CometPhotoAlbumCreate.react"), {
						disableVideo: !0,
						isSaving: g,
						mediaUploadLoggingMetadata: {
							composerEntrypoint: "pages_photo_tab",
							source: "album_uploader"
						},
						submitForm: a
					}), g ? i.jsx(j, {}) : null]
				})
			}
		})
	}
}), null);