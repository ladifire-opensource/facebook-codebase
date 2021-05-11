__d("MWChatComposerMediaAttachmentArea.bs", ["bs_curry", "React", "stylex", "bs_caml_option", "withComposerViewStatePart", "useComposerViewStateReducer", "CometComposerViewStateActions.bs", "useComposerViewStateDispatcher", "MWChatComposerMediaAttachmentItem.bs", "MWChatComposerHeadlessMediaUploader.bs", "MWChatComposerUploadAnotherFileButton.bs", "CometComposerMediaAttachmentReducer.re"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c = a.mediaAttachments,
			d = a.onFileUploadStart,
			e = a.onFileUploadSuccess;
		a = a.onAttachmentsChanged;
		b("useComposerViewStateReducer")(b("CometComposerMediaAttachmentReducer.re").reducer);
		var f = b("useComposerViewStateDispatcher")();
		g.useEffect(function() {
			return function(a) {
				return b("bs_curry")._1(f, b("CometComposerViewStateActions.bs").convert("RemoveAllMediaAttachmentItems"))
			}
		}, [f]);
		return g.jsxs("div", {
			children: [g.jsx(b("MWChatComposerHeadlessMediaUploader.bs").make, {
				onUploadStart: d,
				onUploadSuccess: e,
				onAttachmentsChanged: a
			}), c !== void 0 ? c.map(function(a, c) {
				return g.jsx(b("MWChatComposerMediaAttachmentItem.bs").make, {
					attachment: a
				}, "media-" + c)
			}) : null, g.jsx(b("MWChatComposerUploadAnotherFileButton.bs").make, {})],
			className: "k4urcfbm b3onmgus r8blr3vg ph5uu5jm cxgpxx05 d76ob5m9 jifvfom9 j83agx80 bp9cbjyn"
		})
	}
	c = b("withComposerViewStatePart")(a, function(a) {
		return {
			mediaAttachments: b("bs_caml_option").nullable_to_opt(a.mediaAttachments)
		}
	});
	f.make = c
}), null);