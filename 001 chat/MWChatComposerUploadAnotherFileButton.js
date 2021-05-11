__d("MWChatComposerUploadAnotherFileButton.bs", ["ix", "fbt", "bs_curry", "React", "fbicon", "stylex", 
	"TetraIcon.react", "CometFileSelector.re", "CometPressable.react", 
	"useComposerViewStateReducer", "CometComposerViewStateActions.bs", "useComposerViewStateDispatcher", 
	"CometComposerMediaAttachmentReducer.re"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React"),
		j = {
			root: {
				alignItems: "bp9cbjyn",
				backgroundColor: "n1jkxfxr",
				borderTopStartRadius: "fni8adji",
				borderTopEndRadius: "hgaippwi",
				borderBottomEndRadius: "fykbt5ly",
				borderBottomStartRadius: "ns4ygwem",
				display: "j83agx80",
				flexGrow: "kb5gq1qc",
				flexShrink: "pfnyh3mw",
				height: "m7zwrmfr",
				justifyContent: "taijpn5t",
				marginTop: "rs0gx3tq",
				marginEnd: "tvfksri0",
				marginBottom: "dicw6rsg",
				marginStart: "hcukyx3x",
				overflowWrap: "jm1wdb64",
				position: "l9j0dhe7",
				width: "tmrshh9y"
			}
		};

	function a(a) {
		b("useComposerViewStateReducer")(b("CometComposerMediaAttachmentReducer.re").reducer);
		var c = b("useComposerViewStateDispatcher")(),
			d = i.useCallback(function(a) {
				if (a.length > 0) return b("bs_curry")._1(c, b("CometComposerViewStateActions.bs").convert({
					NAME: "AddMediaAttachmentItems",
					VAL: a
				}))
			}, [c]);
		return i.jsx(b("CometFileSelector.re").make, {
			accept: ["image/*", "image/heif", "image/heic", "video/*"],
			children: function(a) {
				return i.jsx(b("CometPressable.react"), {
					"aria-label": h._("T\u1ea3i \u1ea3nh\/video kh\u00e1c l\u00ean"),
					onPress: function(c) {
						return b("bs_curry")._1(a, void 0)
					},
					xstyle: j.root,
					children: i.jsx(b("TetraIcon.react"), {
						icon: b("fbicon")._(g("481777"), 24),
						testid: "composer_attachment_area_photo_uploader",
						color: "primary"
					})
				})
			},
			multiple: !0,
			onFilesSelected: function(a) {
				return b("bs_curry")._1(d, Array.from(a))
			}
		})
	}
	c = a;
	f.make = c
}), null);