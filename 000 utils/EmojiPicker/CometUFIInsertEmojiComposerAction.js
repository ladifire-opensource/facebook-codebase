__d("CometUFIInsertEmojiComposerAction.react", ["ix", "fbt", "CometPopoverLoadingState.react", 
	"CometUFILazyPopoverComposerAction.react", "JSResourceForInteraction", "React", "fbicon", "stylex"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React"),
		j = b("JSResourceForInteraction")("CometUFIEmojiPickerPopover.react").__setRef("CometUFIInsertEmojiComposerAction.react"),
		k = {
			popoverFallback: {
				minHeight: "k1c241ex"
			}
		};

	function a(a) {
		var c = a.onComposerStateChange;
		a = i.useMemo(function () {
			return {
				onComposerStateChange: c
			}
		}, [c]);
		return i.jsx(b("CometUFILazyPopoverComposerAction.react"), {
			fallback: i.jsx(b("CometPopoverLoadingState.react"), {
				withArrow: !0,
				xstyle: k.popoverFallback
			}),
			icon: b("fbicon")._(g("642536"), 16),
			label: h._("Ch\u00e8n m\u1ed9t bi\u1ec3u t\u01b0\u1ee3ng c\u1ea3m x\u00fac"),
			popoverProps: a,
			popoverResource: j
		})
	}
}), null);