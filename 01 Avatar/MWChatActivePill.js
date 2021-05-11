__d("MWChatActivePill.react", ["CometPressableChildrenWithOverlay.react", "CometPressableOverlay.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			badge: {
				backgroundColor: "cd5y7b5h",
				borderTopStartRadius: "cmek9o9a",
				borderTopEndRadius: "p7f4f6cj",
				borderBottomEndRadius: "c8oo3d72",
				borderBottomStartRadius: "r15kkdkt",
				borderTopStyle: "goun2846",
				borderEndStyle: "ccm00jje",
				borderBottomStyle: "s44p3ltw",
				borderStartStyle: "mk2mc5f4",
				borderTopWidth: "qxh1up0x",
				borderEndWidth: "qtyiw8t4",
				borderBottomWidth: "tpcyxxvw",
				borderStartWidth: "k0bpgpbk",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				fontWeight: "n3ffmt46",
				justifyContent: "taijpn5t",
				marginTop: "hop8lmos",
				marginEnd: "nkwizq5d",
				marginBottom: "scwd0bx6",
				marginStart: "roh60bw9",
				paddingEnd: "n8tt0mok",
				paddingStart: "hyh9befq"
			},
			badgeContainer: {
				display: "j83agx80",
				justifyContent: "taijpn5t",
				maxWidth: "d2edcug0"
			},
			inner: {
				color: "g5o1ygfq",
				fontSize: "j1meafb1",
				lineHeight: "fo6rh5oj",
				whiteSpace: "g0qnabr5"
			}
		},
		j = {
			"card-background": {
				borderTopColor: "np69z8it",
				borderEndColor: "et4y5ytx",
				borderBottomColor: "j7g94pet",
				borderStartColor: "b74d5cxt"
			},
			"secondary-button-background-floating": {
				borderTopColor: "diozkwgx",
				borderEndColor: "n34zm3ds",
				borderBottomColor: "d38e0j3f",
				borderStartColor: "cbtyyezq"
			},
			"web-wash": {
				borderTopColor: "q1ukiesw",
				borderEndColor: "t4l69r22",
				borderBottomColor: "o0nnyf8r",
				borderStartColor: "lf9sc7ai"
			}
		};

	function a(a) {
		var c = a.border;
		c = c === void 0 ? "card-background" : c;
		var d = a.children;
		a = a.pressed;
		return h.jsx("div", {
			className: (g || (g = b("stylex")))(i.badgeContainer),
			children: h.jsx(b("CometPressableChildrenWithOverlay.react"), {
				overlay: h.jsx(b("CometPressableOverlay.react"), {
					pressed: a,
					radius: 7
				}),
				children: h.jsx("div", {
					className: g(i.badge, j[c]),
					children: h.jsx("span", {
						className: g(i.inner),
						children: d
					})
				})
			})
		})
	}
}), null);