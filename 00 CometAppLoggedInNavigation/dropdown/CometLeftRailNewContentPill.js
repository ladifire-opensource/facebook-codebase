__d("CometLeftRailNewContentPill.react", ["CometPressable.react", "CometText_DEPRECATED.react", "React", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			pill: {
				alignItems: "bp9cbjyn",
				backgroundColor: "s1i5eluu",
				borderTop: "gcieejh5",
				borderEnd: "bn081pho",
				borderBottom: "humdl8nn",
				borderStart: "izx4hr6d",
				borderTopStartRadius: "orhb3f3m",
				borderTopEndRadius: "czkt41v7",
				borderBottomEndRadius: "fmqxjp7s",
				borderBottomStartRadius: "emzo65vh",
				boxShadow: "mtf2b8pj",
				cursor: "nhd2j8a9",
				display: "j83agx80",
				height: "qypqp5cg",
				justifyContent: "i1fnvgqd",
				marginTop: "tr9rh885",
				paddingTop: "jb3vyjys",
				paddingEnd: "hv4rvrfc",
				paddingBottom: "qt6c0cv9",
				paddingStart: "dati1w0a",
				position: "pmk7jnqg",
				start: "kfkz5moi",
				top: "kr520xx4",
				transform: "cj5g2342",
				width: "dbpd2lw6"
			}
		};

	function a(a) {
		var c = a.children;
		a = a.onClick;
		return g.jsx(b("CometPressable.react"), {
			display: "inline",
			onPress: a,
			overlayDisabled: !0,
			xstyle: h.pill,
			children: g.jsx(b("CometText_DEPRECATED.react"), {
				display: "nowrap",
				use: "inverse",
				weight: "semibold",
				children: c
			})
		})
	}
}), null);