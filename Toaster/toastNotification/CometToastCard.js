__d("CometToastCard.react", ["ix", "fbt", "CometAccessibilityAnnouncement.react",
 "CometCard.react", "CometPressable.react", 
 "React", "TetraIcon.react", "TetraTextPairing.react", "fbicon", "stylex"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React");

	function a(a) {
		var c = a.accessibilityAnnouncement,
			d = a.content,
			e = a.headline,
			f = a.onCloseClick;
		a = a.onMouseEnter;
		return i.jsxs(b("CometCard.react"), {
			background: "white",
			dropShadow: 2,
			children: [i.jsxs("div", {
				className: "jbcpqwzg jq4qci2q cbu4d94t j83agx80 rq0escxv bi1v6m2q l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",
				onMouseEnter: a,
				children: [i.jsx("div", {
					className: "n1l5q3vz",
					children: i.jsxs("div", {
						className: "dati1w0a qt6c0cv9 hv4rvrfc jb3vyjys i1fnvgqd j83agx80 bp9cbjyn",
						children: [i.jsx(b("TetraTextPairing.react"), {
							headline: e,
							level: 4
						}), i.jsx(b("CometPressable.react"), {
							display: "inline",
							label: h._("\u0110\u00f3ng"),
							onPress: f,
							overlayDisabled: !0,
							children: i.jsx("span", {
								className: "b73ngqbp taijpn5t rgmg9uty j83agx80 owxd89k7 n3ddgdk9 h2jyy9rg br7hx15l tdjehn4e bp9cbjyn",
								children: i.jsx(b("TetraIcon.react"), {
									color: "primary",
									icon: b("fbicon")._(g("478231"), 12),
									size: 12
								})
							})
						})]
					})
				}), i.jsx("div", {
					className: "ecm0bbzt sj5x9vvc ezxwwwxp",
					role: "grid",
					children: d
				})]
			}), c != null && i.jsx(b("CometAccessibilityAnnouncement.react"), {
				children: c.text
			}, c.id)]
		})
	}
}), null);