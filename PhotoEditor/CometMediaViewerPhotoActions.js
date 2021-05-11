__d("CometMediaViewerPhotoActions", ["fbt", "CometRelay",
 "WebPixelRatio", "cometPushToast", "recoverableViolation", 
 "CometMediaViewerPhotoActionsEditMessageMutation.graphql",
  "CometMediaViewerPhotoActionsAddProductTagsMutation.graphql",
   "CometMediaViewerPhotoActionsDeleteProductTagMutation.graphql",
    "CometMediaViewerPhotoActionsCropPhotoMutation.graphql"], (function (a, b, c, d, e, f, g) {
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