__d("useCometPhotoAlbumCreate", ["fbt", "React", "cometPushToast", "recoverableViolation", 
	"reduceComposerViewStateToCreationData", "useCometPhotoAlbumCoverUpdateMutation",
	 "useCometPhotoAlbumCreateMutation", "useCometPhotoAlbumStoryCreateMutation", "useCometRouterDispatcher"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.addToAlbumTransformers,
			d = a.buildInitialAddToAlbumData,
			e = a.createAlbumTransformers,
			f = a.privacyBaseState,
			i = a.scale,
			j = a.timelineNavAppSectionToken,
			k = b("useCometRouterDispatcher")();
		a = b("useCometPhotoAlbumCreateMutation")();
		var l = a[0];
		a = b("useCometPhotoAlbumStoryCreateMutation")();
		var m = a[0];
		a = h.useState(!1);
		var n = a[0],
			o = a[1];
		a = b("useCometPhotoAlbumCoverUpdateMutation")();
		var p = a[0],
			q = h.useCallback(function(a, e, f) {
				b("reduceComposerViewStateToCreationData")(a, c, d(e), function(c) {
					m({
						input: c,
						onCompleted: function() {
							var b;
							((b = a.albumData) == null ? void 0 : b.albumCoverMediaID) != null && p({
								album_id: e,
								cover_media_id: a.albumData.albumCoverMediaID
							});
							k != null && f != null && k.go(f, {
								force: !0,
								replace: !0,
								target: "self"
							})
						},
						onError: function(a) {
							o(!1), b("cometPushToast").cometPushErrorToast({
								message: g._("\u0110\u00e3 t\u1ea1o album, nh\u01b0ng kh\u00f4ng th\u1ec3 th\u00eam file ph\u01b0\u01a1ng ti\u1ec7n v\u00e0o album n\u00e0y")
							}, 4e3), b("recoverableViolation")(a.message, "comet_composer")
						},
						scale: i,
						timelineNavAppSectionToken: j
					})
				})
			}, [c, d, m, k, i, j]);
		a = h.useCallback(function(a) {
			var c = {
				privacy: {
					allow: [],
					base_state: f,
					deny: [],
					tag_expansion_state: "UNSPECIFIED"
				},
				title: ""
			};
			b("reduceComposerViewStateToCreationData")(a, e, c, function(c) {
				o(!0), l({
					input: c,
					onCompleted: function(c) {
						var d;
						d = (d = c.album_create) == null ? void 0 : (d = d.album) == null ? void 0 : d.id;
						c = (c = c.album_create) == null ? void 0 : (c = c.album) == null ? void 0 : c.url;
						if (d != null) {
							var e;
							e = (e = (e = a.mediaAttachments) == null ? void 0 : e.length) != null ? e : 0;
							e !== 0 ? q(a, d, c) : k != null && c != null && k.go(c, {
								replace: !0,
								target: "self"
							})
						} else o(!1), b("cometPushToast").cometPushErrorToast({
							message: g._("Kh\u00f4ng th\u1ec3 t\u1ea1o album")
						}, 4e3), b("recoverableViolation")("created album with unknown ID", "comet_composer")
					},
					onError: function(a) {
						o(!1), b("cometPushToast").cometPushErrorToast({
							message: g._("Kh\u00f4ng th\u1ec3 t\u1ea1o album")
						}, 4e3), b("recoverableViolation")(a.message, "comet_composer")
					}
				})
			})
		}, [e, l, q, f, k]);
		var r = h.useCallback(function() {
			return o(!1)
		}, []);
		return {
			isInFlight: n,
			onSubmitCommit: a,
			onSubmitHalt: r
		}
	}
}), null);