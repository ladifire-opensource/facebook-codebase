__d("CometLegalFooter.react", ["ix", "fbt", "CometDeferredPopoverTrigger.react", 
	"CometErrorBoundary.react", "CometLink.react", "CometMiddot.react", 
	"CometPressable.react", "React", "ServerTime", "TetraIcon.react", 
	"TetraText.react", "fbicon", "gkx", "requireDeferred", "stylex"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React"),
		j = b("requireDeferred")("CometLegalFooterMoreMenu.react"),
		k = new Date(b("ServerTime").getMillis()).getFullYear();

	function a(a) {
		a = a.isPage;
		a = a === void 0 ? !1 : a;
		a = [{
			href: "https://www.facebook.com/legal/terms/information_about_page_insights_data",
			label: h._("Th\u00f4ng tin v\u1ec1 D\u1eef li\u1ec7u Th\u00f4ng tin chi ti\u1ebft Trang"),
			render: a && b("gkx")("1470093")
		}, {
			href: "/privacy/explanation",
			label: h._("Quy\u1ec1n ri\u00eang t\u01b0")
		}, {
			href: "/terms?ref=pf",
			label: h._("Impressum\/\u0110i\u1ec1u kho\u1ea3n\/NetzDG"),
			render: b("gkx")("1539946")
		}, {
			href: "/policies?ref=pf",
			label: h._("\u0110i\u1ec1u kho\u1ea3n"),
			render: !b("gkx")("1539946")
		}, {
			href: "/business/",
			label: h._("Qu\u1ea3ng c\u00e1o")
		}, {
			href: "/help/568137493302217",
			label: i.jsxs(i.Fragment, {
				children: [h._("L\u1ef1a ch\u1ecdn qu\u1ea3ng c\u00e1o"), " ", i.jsx(b("CometErrorBoundary.react"), {
					children: i.jsx("span", {
						className: "ormqv51v l9j0dhe7",
						children: i.jsx(b("TetraIcon.react"), {
							color: "secondary",
							icon: b("fbicon")._(g("871692"), 12)
						})
					})
				})]
			})
		}, {
			href: "/policies/cookies/",
			label: h._("Cookie")
		}].filter(function(a) {
			return a.render == null || a.render === !0
		});
		return i.jsx("footer", {
			"aria-label": h._("Facebook"),
			role: "contentinfo",
			children: i.jsxs(b("TetraText.react"), {
				color: "secondary",
				type: "meta3",
				children: [i.jsxs("ul", {
					className: "nc684nl6",
					children: [a.map(function(a, c) {
						var d = a.href;
						a = a.label;
						return i.jsxs("li", {
							className: "nc684nl6",
							children: [i.jsx(b("CometLink.react"), {
								color: "secondary",
								href: d,
								weight: "normal",
								children: a
							}), i.jsx(b("CometMiddot.react"), {})]
						}, c)
					}), i.jsx(b("CometErrorBoundary.react"), {
						children: i.jsxs("li", {
							className: "nc684nl6",
							children: [i.jsx(b("CometDeferredPopoverTrigger.react"), {
								align: "middle",
								autoAlign: !0,
								popoverProps: {},
								popoverResource: j,
								popoverType: "menu",
								position: "below",
								children: function(a, c) {
									return i.jsx(b("CometPressable.react"), {
										display: "inline",
										onPress: c,
										overlayDisabled: !0,
										ref: a,
										testid: void 0,
										children: h._("Xem th\u00eam")
									})
								}
							}), i.jsx(b("CometMiddot.react"), {})]
						})
					})]
				}), h._("Facebook \u00a9 {year}", [h._param("year", k)])]
			})
		})
	}
}), null);