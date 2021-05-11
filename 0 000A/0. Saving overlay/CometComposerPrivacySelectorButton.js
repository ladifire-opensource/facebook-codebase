__d("CometComposerPrivacySelectorButton.react", ["ix", "CometComposerPrivacySelectorButton_scope.graphql", "CometPressable.react", "CometPrivacyIcon.react", "CometPrivacySelectorButtonSavingOverlay.react", "CometPrivacySelectorLabel.react", "CometRelay", "TetraIcon.react", "TetraText.react", "fbicon", "react", "useCometPrivacySelectorDescriptionLabel.react"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i, j = i || b("react");

	function a(a, c) {
		var d = a.isSaving,
			e = a.scope,
			f = babelHelpers.objectWithoutPropertiesLoose(a, ["isSaving", "scope"]);
		e = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometComposerPrivacySelectorButton_scope.graphql"), e);
		var i = b("useCometPrivacySelectorDescriptionLabel.react")(e),
			k = a.disabled === !0 ? "secondary" : "primary";
		return j.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, f, {
			"aria-label": i,
			display: "inline",
			overlayDisabled: !0,
			ref: c,
			children: j.jsx(b("TetraText.react"), {
				color: k,
				type: "bodyLink4",
				children: j.jsxs("div", {
					className: "l9j0dhe7",
					children: [j.jsx(b("CometPrivacySelectorButtonSavingOverlay.react"), {
						isSaving: d
					}), j.jsx("div", {
						className: "e5nlhep0 ecm0bbzt scb9dxdr dflh9lhu kzx2olss aot14ch1 p86d2i9g beltcj47 tdjehn4e",
						children: j.jsxs("div", {
							className: (d ? "kr9hpln1" : "") + " taijpn5t j83agx80 bp9cbjyn",
							children: [j.jsx(b("CometPrivacyIcon.react"), {
								color: k,
								marginEnd: 4,
								scope: e
							}), j.jsx(b("CometPrivacySelectorLabel.react"), {
								scope: e
							}), a.disabled !== !0 && j.jsx(b("TetraIcon.react"), {
								icon: b("fbicon")._(g("481880"), 12),
								size: 12
							})]
						})
					})]
				})
			})
		}))
	}
	c = j.forwardRef(a);
	e.exports = c
}), null);