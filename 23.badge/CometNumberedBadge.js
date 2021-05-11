__d("CometNumberedBadge.react", ["React", "getCometBadgeColorStyle", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			badgeCount: {
				alignItems: "bp9cbjyn",
				color: "ljqsnud1",
				display: "pq6dq46d",
				height: "datstx6m",
				justifyContent: "taijpn5t",
				paddingTop: "jb3vyjys",
				paddingEnd: "jxrgncrl",
				paddingBottom: "qt6c0cv9",
				paddingStart: "qnrpqo6b",
				width: "k4urcfbm"
			},
			rectangle: {
				borderTopStartRadius: "sibfvsnu",
				borderTopEndRadius: "px9q9ucb",
				borderBottomEndRadius: "j2ut9x2k",
				borderBottomStartRadius: "p4hiznlx"
			},
			root: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				display: "pq6dq46d",
				fontSize: "e9vueds3",
				fontWeight: "ekzkrbhg",
				height: "omvj5yrc",
				lineHeight: "jiuqdcnw",
				minWidth: "d82f96u3"
			}
		};

	function a(a, c) {
		var d = a.color;
		d = d === void 0 ? "red" : d;
		var e = a.overflow;
		e = e === void 0 ? 20 : e;
		var f = a.testid;
		f = a.value;
		return h.jsx("span", {
			className: (g || (g = b("stylex")))(i.root, b("getCometBadgeColorStyle")(d), f >= 10 && i.rectangle),
			"data-testid": void 0,
			ref: c,
			children: h.jsx("span", {
				className: g(i.badgeCount),
				children: f > e ? e + "+" : f
			})
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);