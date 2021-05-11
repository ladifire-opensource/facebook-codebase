__d("CometExceptionDialog.react", ["fbt", "BaseModal.react", "CometCardedDialog.react", "React", "TetraButton.react", "TetraText.react", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.closeButtonText,
			d = a.errorDescription,
			e = a.errorSummary,
			f = a.onClose;
		a = a.withCloseButton;
		a = a === void 0 ? !0 : a;
		return h.jsx(b("BaseModal.react"), {
			stackingBehavior: "above-everything",
			children: h.jsxs(b("CometCardedDialog.react"), {
				onClose: f,
				title: e,
				withCloseButton: a,
				children: [h.jsx("div", {
					className: "dati1w0a jbae33se hv4rvrfc bjjx79mm",
					children: h.jsx(b("TetraText.react"), {
						color: "secondary",
						type: "body2",
						children: d
					})
				}), h.jsx("div", {
					className: "gjzvkazv dati1w0a f10w8fjw hv4rvrfc ecm0bbzt cbu4d94t j83agx80 c4hnarmi",
					children: h.jsx(b("TetraButton.react"), {
						label: (e = c) != null ? e : g._("OK"),
						onPress: f,
						type: "primary"
					})
				})]
			})
		})
	}
}), null);