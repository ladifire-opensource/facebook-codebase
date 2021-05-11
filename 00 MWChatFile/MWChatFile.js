__d("MWChatFile.bs", ["ix", "fbt", "React", "fbicon", "stylex", 
	"bs_belt_Option", "bs_caml_option", "TetraIcon.react", "CometPressable.react"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i, j = b("React"),
		k = {
			root: {
				display: "j83agx80",
				alignItems: "bp9cbjyn",
				userSelect: "abiwlrkh",
				paddingTop: "ecm0bbzt",
				paddingBottom: "e5nlhep0"
			},
			content: {
				flexGrow: "buofh1pr",
				color: "oo9gr5id",
				fontWeight: "lrazzd5p",
				wordBreak: "qv66sw1b"
			},
			icon: {
				display: "j83agx80",
				alignItems: "bp9cbjyn",
				justifyContent: "taijpn5t",
				paddingTop: "cxgpxx05",
				paddingEnd: "dflh9lhu",
				paddingBottom: "sj5x9vvc",
				paddingStart: "scb9dxdr",
				marginEnd: "o3lre8g0",
				backgroundColor: "hybvsw6c",
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv"
			}
		};

	function a(a) {
		var c = a.url;
		a = a.fileName;
		a = a !== void 0 ? a : h._("File");
		c = b("bs_belt_Option").map(c, function(a) {
			return {
				download: !0,
				target: "_blank",
				url: a.toString()
			}
		});
		a = {
			display: "inline",
			overlayDisabled: !0,
			children: j.jsxs("div", {
				children: [j.jsx("div", {
					children: j.jsx(b("TetraIcon.react"), {
						icon: b("fbicon")._(g("908355"), 16),
						color: "primary"
					}),
					className: (i || (i = b("stylex")))(k.icon)
				}), j.jsx("div", {
					children: a,
					className: i(k.content)
				})],
				className: i(k.root)
			})
		};
		c !== void 0 && (a.linkProps = b("bs_caml_option").valFromOption(c));
		return j.jsx(b("CometPressable.react"), a)
	}
	c = a;
	f.styles = k;
	f.make = c
}), null);