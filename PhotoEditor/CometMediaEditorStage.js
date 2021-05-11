__d("CometMediaEditorStage.react", ["ix", "fbt", 
	"CometBlurredBackgroundImage.react", 
	"CometPhotoEditorMerchantEducation.react", "Locale", "React", 
	"TetraCircleButton.react", "emptyFunction", "fbicon", "gkx", "stylex"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React");

	function a(a) {
		a = babelHelpers["extends"]({}, a);
		var c = a.backgroundSrc,
			d = a.bottomInstructionBanner,
			e = a.navigateBack,
			f = a.navigateForward,
			j = a.showMerchantEducation;
		return i.jsxs("div", {
			className: "iqfcb0g7 l9j0dhe7 p01isnhg datstx6m buofh1pr cbu4d94t j83agx80 tqsryivl",
			ref: function (a) {
				a && a.focus()
			},
			children: [i.jsx("div", {
				className: "iqfcb0g7 kr520xx4 j9ispegn pmk7jnqg akz8cqyu n7fi1qx3 i09qtzwb",
				children: c != null ? i.jsx(b("CometBlurredBackgroundImage.react"), {
					src: c
				}) : null
			}), b("gkx")("1518248") && j === !0 ? i.jsx("div", {
				className: "tkr6xdv7 j9ispegn pmk7jnqg i09qtzwb",
				children: i.jsx(b("CometPhotoEditorMerchantEducation.react"), {})
			}) : null, d != null ? i.jsx("div", {
				className: "tkr6xdv7 k4urcfbm j9ispegn pmk7jnqg i09qtzwb",
				children: d
			}) : null, i.jsxs("div", {
				className: "iqfcb0g7 l9j0dhe7 j0qtgc86 e9n865no taijpn5t datstx6m buofh1pr j83agx80",
				children: [i.jsxs("div", {
					className: "kr520xx4 j9ispegn pmk7jnqg i1fnvgqd n7fi1qx3 j83agx80 i09qtzwb bp9cbjyn",
					id: "media-viewer-nav-container",
					children: [i.jsx("div", {
						className: "dhix69tm sjgh65i0 wkznzc2l tr9rh885" + (e == null ? " kr9hpln1" : ""),
						"data-testid": void 0,
						children: i.jsx(b("TetraCircleButton.react"), {
							color: "secondary",
							icon: b("Locale").isRTL() ? b("fbicon")._(g("492539"), 24) : b("fbicon")._(g("492491"), 24),
							label: h._("\u1ea2nh tr\u01b0\u1edbc \u0111\u00f3"),
							onPress: e != null ? e : b("emptyFunction"),
							size: 48,
							testid: void 0,
							type: "overlay"
						})
					}), i.jsx("div", {
						className: "dhix69tm sjgh65i0 wkznzc2l tr9rh885" + (f == null ? " kr9hpln1" : ""),
						"data-testid": void 0,
						children: i.jsx(b("TetraCircleButton.react"), {
							color: "secondary",
							icon: b("Locale").isRTL() ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
							label: h._("\u1ea2nh ti\u1ebfp theo"),
							onPress: f != null ? f : b("emptyFunction"),
							size: 48,
							testid: void 0,
							type: "overlay"
						})
					})]
				}), a.children]
			})]
		})
	}
}), null);