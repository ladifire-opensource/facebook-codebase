// crop result
{"data":{"photo_crop":{"photo":{"id":"3569605569758033","can_viewer_add_tags":true,"owner":{"__typename":"User","id":"100001258748155","user_id":"100001258748155","additional_profile_has_taggable_products":false},"created_time":1604732146,"image":{"uri":"https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/124161858_3569605573091366_5783783478714727931_n.jpg?_nc_cat=108&ccb=2&_nc_sid=3b7ae0&_nc_ohc=JYBPBFkEQ-IAX8UPOZB&_nc_ht=scontent.fhan5-5.fna&oh=86f1bca40b40b64f750466fb07298194&oe=5FC9F530","width":463,"height":326},"photo_encodings":[],"immersive_photo_encodings":[],"photo_product_tags":[],"tags":{"edges":[]},"container_story":null,"cix_screen":null,"focus":{"x":0.5,"y":0.33}}}},"extensions":{"prefetch_uris":["https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/124161858_3569605573091366_5783783478714727931_n.jpg?_nc_cat=108&ccb=2&_nc_sid=3b7ae0&_nc_ohc=JYBPBFkEQ-IAX8UPOZB&_nc_ht=scontent.fhan5-5.fna&oh=86f1bca40b40b64f750466fb07298194&oe=5FC9F530"],"is_final":true}}

__d("CometMediaViewerPhotoActions", ["fbt", "CometRelay", "WebPixelRatio", "cometPushToast", "recoverableViolation", "CometMediaViewerPhotoActionsEditMessageMutation.graphql", "CometMediaViewerPhotoActionsAddProductTagsMutation.graphql", "CometMediaViewerPhotoActionsDeleteProductTagMutation.graphql", "CometMediaViewerPhotoActionsCropPhotoMutation.graphql"], (function (a, b, c, d, e, f, g) {
	"use strict";
	f.edit = a;
	f.addProductTags = c;
	f.deleteProductTag = d;
	f.cropPhoto = e;
	var h, i, j, k, l = h !== void 0 ? h : h = b("CometMediaViewerPhotoActionsEditMessageMutation.graphql");

	function a(a) {
		var c = a.environment,
			d = a.input,
			e = a.onCompleted,
			f = a.onError,
			h = d.id,
			i = d.message;
		a = {
			message: i,
			photo_id: h
		};

		function j(a) {
			a = (a = a.get(h)) == null ? void 0 : a.getLinkedRecord("message");
			if (a == null) return;
			a.setValue(i.text, "text")
		}
		b("CometRelay").commitMutation(c, {
			mutation: l,
			onCompleted: e,
			onError: function (a) {
				f();
				b("cometPushToast").cometPushErrorToast({
					message: g._("Kh\u00f4ng th\u1ec3 ch\u1ec9nh s\u1eeda \u1ea3nh")
				}, 4e3);
				b("recoverableViolation")(a.message, "comet_ui");
				return
			},
			optimisticUpdater: j,
			variables: {
				input: a,
				scale: b("WebPixelRatio").get()
			}
		})
	}
	var m = i !== void 0 ? i : i = b("CometMediaViewerPhotoActionsAddProductTagsMutation.graphql");

	function c(a) {
		var c = a.environment;
		a = a.input;
		b("CometRelay").commitMutation(c, {
			mutation: m,
			onCompleted: function () {
				b("cometPushToast").cometPushSimpleToast(g._("\u0110\u00e3 g\u1eedi th\u1ebb s\u1ea3n ph\u1ea9m"), 4e3)
			},
			onError: function (a) {
				b("cometPushToast").cometPushErrorToast({
					message: g._("Kh\u00f4ng th\u1ec3 g\u1eafn th\u1ebb s\u1ea3n ph\u1ea9m trong \u1ea3nh")
				}, 4e3)
			},
			variables: {
				input: a,
				scale: b("WebPixelRatio").get()
			}
		})
	}
	var n = j !== void 0 ? j : j = b("CometMediaViewerPhotoActionsDeleteProductTagMutation.graphql");

	function d(a) {
		var c = a.environment,
			d = a.input,
			e = a.onError;
		b("CometRelay").commitMutation(c, {
			mutation: n,
			onCompleted: function () {
				b("cometPushToast").cometPushSimpleToast(g._("\u0110\u00e3 g\u1ee1 th\u1ebb s\u1ea3n ph\u1ea9m"), 4e3)
			},
			onError: function (a) {
				b("cometPushToast").cometPushErrorToast({
					message: g._("Kh\u00f4ng th\u1ec3 x\u00f3a th\u1ebb")
				}, 4e3), e()
			},
			variables: {
				input: d,
				scale: b("WebPixelRatio").get()
			}
		})
	}
	var o = k !== void 0 ? k : k = b("CometMediaViewerPhotoActionsCropPhotoMutation.graphql");

	function e(a) {
		var c = a.environment,
			d = a.input,
			e = a.onCompleted,
			f = a.onError;
		b("CometRelay").commitMutation(c, {
			mutation: o,
			onCompleted: e,
			onError: function (a) {
				b("cometPushToast").cometPushErrorToast({
					message: g._("Kh\u00f4ng th\u1ec3 c\u1eaft \u1ea3nh")
				}, 4e3), f && f()
			},
			variables: {
				input: d,
				scale: b("WebPixelRatio").get()
			}
		})
	}
}), null);