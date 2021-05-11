__d("CometPhotoEditorMerchantEducationCard.react", ["ix", "CometCard.react", "React", "TetraIcon.react", "TetraTextPairing.react", "fbicon", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.educationBody,
			d = a.educationTitle,
			e = a.icon,
			f = a.index,
			i = a.onDismiss;
		return h.jsx("div", {
			className: "o36gj0jk dhix69tm bi6gxh9e",
			children: h.jsx(b("CometCard.react"), {
				background: "white",
				children: h.jsxs("div", {
					className: "btwxx1t3 j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
					children: [h.jsx("div", {
						className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
						children: e
					}), h.jsx("div", {
						className: "ihqw7lf3 discj3wi cbu4d94t",
						children: h.jsx(b("TetraTextPairing.react"), {
							headline: d,
							level: 3,
							meta: c
						})
					}), h.jsx("div", {
						className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 bkfpd7mw j83agx80 nqmvxvec",
						children: h.jsx(b("TetraIcon.react"), {
							"aria-label": "Close",
							color: "secondary",
							icon: b("fbicon")._(g("478232"), 16),
							onPress: function () {
								i(f)
							}
						})
					})]
				})
			})
		})
	}
}), null);