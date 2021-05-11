__d("decorateMultiStepContainerPushPage", ["CometComposerHeader.react", 
	"CometComposerPushPageGlimmer.react", "CometHideLayerOnEscape.react", 
	"CometPlaceholder.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		return a == null ? null : function (c, d, e) {
			var f = function (a) {
				var f;
				a = a.onReturn;
				return g.jsxs(b("CometHideLayerOnEscape.react"), {
					onHide: a,
					children: [(e == null ? void 0 : e.hasCustomHeader) === !0 ? null : g.jsx(b("CometComposerHeader.react"), {
						onBack: a,
						onClose: e == null ? void 0 : e.onClose,
						testid: void 0,
						title: c,
						withBackButton: (f = e == null ? void 0 : e.withBackButton) != null ? f : !0,
						withCloseButton: (f = e == null ? void 0 : e.withCloseButton) != null ? f : !1
					}), g.jsx(b("CometPlaceholder.react"), {
						fallback: g.jsx(b("CometComposerPushPageGlimmer.react"), {
							withPopover: !1,
							xstyle: e == null ? void 0 : e.xstyle
						}),
						children: g.jsx(d, {
							onReturn: a
						})
					}, 1)]
				})
			};
			return a(f)
		}
	}
}), null);