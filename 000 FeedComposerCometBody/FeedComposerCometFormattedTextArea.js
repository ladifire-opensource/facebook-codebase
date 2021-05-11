__d("FeedComposerCometFormattedTextArea.react", ["CometComposerAttachmentPluginTypes", 
	"CometComposerFormattedTextArea.react", "CometFormattedBackgroundAlterationStateChecker", 
	"React", "cometComposerFormattedTextReducers", "cometFormattedTextIneligibilityCheck", 
	"getPlainTextFromDeferredDraftEditorState", "useCometComposerSATPConfig", 
	"useCometSATPIneligibility", "useComposerPluginIneligibility", 
	"useComposerViewStateReducer", "withComposerViewStatePart"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c = a.children,
			d = a.formattedTextPreset,
			e = a.isDisabled;
		a = a.previousFormattedTextPreset;
		b("useComposerViewStateReducer")(b("cometComposerFormattedTextReducers"), b("CometFormattedBackgroundAlterationStateChecker"));
		b("useCometSATPIneligibility")(d, e, a);
		return g.jsx(b("CometComposerFormattedTextArea.react"), {
			children: c
		})
	}
	c = b("withComposerViewStatePart")(a, function(a) {
		var c = a.editorState,
			d = b("useComposerPluginIneligibility")(),
			e = b("useCometComposerSATPConfig")(),
			f = e.satpMaxNewLines;
		e = e.satpTextCharLimit;
		c = c != null && (b("cometFormattedTextIneligibilityCheck")(b("getPlainTextFromDeferredDraftEditorState")(c), e, f) || d.has(b("CometComposerAttachmentPluginTypes").FORMATTED_TEXT));
		return {
			formattedTextPreset: (e = a.formattedText) == null ? void 0 : e.currentFormattedTextPreset,
			isDisabled: c,
			previousFormattedTextPreset: (f = a.formattedText) == null ? void 0 : f.previousFormattedTextPreset
		}
	});
	e.exports = c
}), null);