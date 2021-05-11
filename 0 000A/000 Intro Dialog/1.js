__d("MWXACIntroContent.react", ["fbt", "ix", "CometImageFromIXValue.react", 
	"CometMultiStepDialog.react", "IconSource", "MWXACIntroLearnMore.react", 
	"TetraButtonGroup.react", "TetraIcon.react", "TetraText.react", "react", 
	"useCurrentDisplayMode"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i, j = i || b("react");

	function a(a, c) {
		var d = a.entrypoint,
			e = a.onClose;
		a = b("useCurrentDisplayMode")();
		a = a === "dark";
		var f = a ? h("1963858") : h("1963860"),
			i = d === "mdotcom",
			k = i ? h("1852854") : a ? h("1661376") : h("1444009"),
			l = i ? h("1287180") : a ? h("1852871") : h("1361367");
		return j.jsx(b("CometMultiStepDialog.react"), {
			ref: c,
			size: "content",
			children: function(a) {
				return j.jsxs("div", {
					className: "oh7imozk fjf4s8hc tu1s4ah4 f7vcsfb0 k3eq2f2k",
					children: [j.jsxs("div", {
						className: "btxidjgm",
						children: [j.jsx("div", {
							className: "a8nywdso jbae33se rz4wbd8a jktsbyx5 taijpn5t j83agx80",
							children: j.jsx(b("CometImageFromIXValue.react"), {
								source: f
							})
						}), j.jsx(b("TetraText.react"), {
							align: "center",
							type: "entityHeaderHeadline2",
							children: g._("Gi\u1edbi thi\u1ec7u t\u00ednh n\u0103ng Nh\u1eafn tin li\u00ean \u1ee9ng d\u1ee5ng")
						})]
					}), j.jsxs("div", {
						className: "jb3vyjys f10w8fjw",
						children: [j.jsxs("div", {
							className: "a8nywdso f10w8fjw rz4wbd8a pybr56ya jifvfom9 btwxx1t3 j83agx80 fsy3e5b7",
							children: [j.jsx("div", {
								className: "b73ngqbp wkznzc2l rgmg9uty",
								children: j.jsx(b("TetraIcon.react"), {
									icon: new(b("IconSource"))("FB", k, 20)
								})
							}), j.jsx(b("TetraText.react"), {
								type: "body4",
								children: g._("T\u1eeb gi\u1edd, b\u1ea1n c\u00f3 th\u1ec3 t\u00ecm ki\u1ebfm v\u00e0 nh\u1eafn tin, chat video ho\u1eb7c chia s\u1ebb l\u1ea1i b\u00e0i vi\u1ebft v\u1edbi m\u1ecdi ng\u01b0\u1eddi tr\u00ean kh\u1eafp Instagram v\u00e0 Facebook.")
							})]
						}), j.jsxs("div", {
							className: "a8nywdso f10w8fjw rz4wbd8a pybr56ya jifvfom9 btwxx1t3 j83agx80 fsy3e5b7",
							children: [j.jsx("div", {
								className: "b73ngqbp wkznzc2l rgmg9uty",
								children: j.jsx(b("TetraIcon.react"), {
									icon: new(b("IconSource"))("FB", l, 20)
								})
							}), j.jsx(b("TetraText.react"), {
								type: "body4",
								children: g._("Nh\u1eefng ng\u01b0\u1eddi c\u00f3 t\u00e0i kho\u1ea3n Instagram c\u00f3 th\u1ec3 t\u00ecm ki\u1ebfm b\u1ea1n v\u00e0 g\u1eedi cho b\u1ea1n tin nh\u1eafn \u0111ang ch\u1edd. H\u00e3y v\u00e0o ph\u1ea7n C\u00e0i \u0111\u1eb7t g\u1eedi tin nh\u1eafn \u0111\u1ec3 ch\u1ecdn xem b\u1ea1n mu\u1ed1n nh\u1eadn tin nh\u1eafn c\u1ee7a ai.")
							})]
						})]
					}), j.jsx("div", {
						className: "k4urcfbm",
						children: j.jsx(b("TetraButtonGroup.react"), {
							align: "end",
							direction: "backward",
							primary: {
								label: g._("Xong"),
								onPress: e,
								type: "primary"
							},
							secondary: {
								label: g._("T\u00ecm hi\u1ec3u v\u1ec1 s\u1ef1 thay \u0111\u1ed5i n\u00e0y"),
								onPress: function() {
									a(function(a) {
										return j.jsx(b("MWXACIntroLearnMore.react"), {
											entrypoint: d
										})
									}, {
										title: g._("Nh\u1eafn tin v\u00e0 quy\u1ec1n ri\u00eang t\u01b0")
									})
								},
								reduceEmphasis: !0,
								type: "secondary"
							}
						})
					})]
				})
			}
		})
	}
	c = j.forwardRef(a);
	e.exports = c
}), null);