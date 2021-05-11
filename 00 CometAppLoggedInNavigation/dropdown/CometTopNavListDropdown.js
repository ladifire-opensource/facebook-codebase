__d("CometTopNavListDropdown.react", ["ix", "fbt", "BaseHeading.react", 
	"CometPopover.react", "CometRow.react", "CometRowItem.react", "Locale", "React", 
	"TetraCircleButton.react", "TetraText.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = {
			card: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				maxWidth: "h77mwsce",
				minHeight: "dp1hu0rb"
			},
			cardMaxHeight: {
				maxHeight: "h58bhtfz"
			},
			cardWiderWidth: {
				width: "a98sk6w7"
			},
			cardWidth: {
				width: "o36gj0jk"
			},
			heading: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				flexShrink: "pfnyh3mw",
				justifyContent: "i1fnvgqd",
				minHeight: "jklb3kyz",
				paddingTop: "pybr56ya",
				paddingEnd: "hv4rvrfc",
				paddingBottom: "e5nlhep0",
				paddingStart: "dati1w0a"
			},
			root: {
				marginEnd: "oi9244e8",
				marginTop: "knvmm38d"
			}
		};

	function a(a) {
		var c = a.children,
			d = a.label;
		a = a.name;
		return j.jsx("div", {
			className: (i || (i = b("stylex")))(k.root),
			children: j.jsx(b("CometPopover.react"), {
				label: d,
				popoverName: a,
				children: c
			})
		})
	}
	a.Card = function(a) {
		var c = a.children,
			d = a.testid;
		d = a.useFullWidth;
		d = d === void 0 ? !1 : d;
		a = a.useMaxHeight;
		return j.jsx("div", {
			className: (i || (i = b("stylex")))(k.card, d === !1 ? k.cardWidth : null, a === !0 ? k.cardMaxHeight : null),
			"data-testid": void 0,
			children: c
		})
	};
	a.Title = function(a) {
		var c = a.actions;
		c = c === void 0 ? [] : c;
		var d = a.onReturn;
		a = a.title;
		return j.jsxs("div", {
			className: (i || (i = b("stylex")))(k.heading),
			children: [j.jsxs(b("CometRow.react"), {
				paddingHorizontal: 0,
				paddingTop: 0,
				spacingHorizontal: 8,
				children: [d != null ? j.jsx(b("CometRowItem.react"), {
					children: j.jsx(b("TetraCircleButton.react"), {
						icon: b("Locale").isRTL() ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
						label: h._("Quay l\u1ea1i"),
						onPress: d,
						size: 32,
						type: "deemphasized"
					})
				}) : null, j.jsx(b("CometRowItem.react"), {
					verticalAlign: "center",
					children: j.jsx(b("BaseHeading.react"), {
						isPrimaryHeading: !0,
						children: j.jsx(b("TetraText.react"), {
							type: "headlineEmphasized1",
							children: a
						})
					})
				})]
			}), j.jsx(b("CometRow.react"), {
				paddingHorizontal: 0,
				paddingTop: 0,
				spacingHorizontal: 8,
				children: c.map(function(a, c) {
					return j.jsx(b("CometRowItem.react"), {
						children: a
					}, c)
				})
			})]
		})
	};
	a.styles = {
		cardWiderWidth: k.cardWiderWidth,
		cardWidth: k.cardWidth
	}
}), null);