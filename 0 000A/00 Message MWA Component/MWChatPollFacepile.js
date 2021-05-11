__d("MWChatPollFacepile.bs", ["ix", "CometTintedIcon.react", "fbicon", "react", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i, j = h || b("react"),
		k = {
			root: {
				display: "j83agx80"
			},
			rootReversed: {
				flexDirection: "rl25f0pe"
			},
			contact: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv"
			},
			contactWithBoarder: {
				borderTop: "e6olcokw",
				borderEnd: "enkuubej",
				borderBottom: "r2474ujb",
				borderStart: "sxdk7pr0"
			},
			contactGapNegative: {
				marginStart: "pec0n382"
			},
			contactGapNormal: {
				marginStart: "kkf49tns"
			},
			contactLarge: {
				width: "bsnbvmp4",
				height: "k7cz35w2"
			},
			contactMedium: {
				width: "odw8uiq3",
				height: "jnigpg78"
			},
			contactSmall: {
				width: "gab7stmx",
				height: "i4qgphn6"
			},
			overflow: {
				backgroundColor: "g6srhlxm",
				color: "m9osqain",
				height: "i4qgphn6",
				borderTopStartRadius: "h1ci2mql",
				borderTopEndRadius: "mjfe6jtr",
				borderBottomEndRadius: "c6w6u7b1",
				borderBottomStartRadius: "hc21y3pz",
				paddingTop: "jb3vyjys",
				paddingEnd: "ph5uu5jm",
				paddingBottom: "qt6c0cv9",
				paddingStart: "qnrpqo6b",
				marginStart: "pec0n382",
				fontWeight: "ekzkrbhg"
			},
			photoWrap: {
				position: "l9j0dhe7",
				display: "q9uorilb"
			},
			overflowOverlay: {
				alignItems: "bp9cbjyn",
				backgroundColor: "s8bbyrx9",
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				bottom: "i09qtzwb",
				display: "j83agx80",
				end: "n7fi1qx3",
				justifyContent: "taijpn5t",
				opacity: "ocubwz8y",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4",
				zIndex: "tkr6xdv7"
			}
		};

	function a(a) {
		var c = a.contacts,
			d = a.size,
			e = a.gap,
			f = a.direction,
			h = a.limit,
			l = a.contactWithBorder;
		a = a.overflowStyle;
		var m = e !== void 0 ? e : "normal";
		e = f !== void 0 ? f : "normal";
		var n = h !== void 0 ? h : 2,
			o = l !== void 0 ? l : !0,
			p = a !== void 0 ? a : "showTotalCount",
			q = c.length > n;
		return j.jsxs("div", {
			children: [q && p === "showTotalCount" ? j.jsx("div", {
				children: "+" + String(c.length - 2 | 0),
				className: (i || (i = b("stylex")))(k.overflow)
			}) : null, c.slice(-(q ? n : 1e3) | 0).reverse().map(function(a, c) {
				return j.jsxs("div", {
					children: [j.jsx("img", {
						className: (i || (i = b("stylex")))(k.contact, d === "medium" ? k.contactMedium : d === "small" ? k.contactSmall : k.contactLarge, o ? k.contactWithBoarder : !1),
						src: a
					}), q && p === "overlayLastPhoto" && c === (n - 1 | 0) ? j.jsx("div", {
						children: j.jsx(b("CometTintedIcon.react"), {
							color: "fds-white",
							icon: b("fbicon")._(g("484386"), 16)
						}),
						className: (i || (i = b("stylex")))(k.overflowOverlay)
					}) : null],
					className: i(k.photoWrap, m === "normal" ? k.contactGapNormal : k.contactGapNegative, d === "medium" ? k.contactMedium : d === "small" ? k.contactSmall : k.contactLarge)
				}, String(c))
			})],
			className: (i || (i = b("stylex")))(k.root, e === "reversed" ? k.rootReversed : !1)
		})
	}
	c = a;
	f.styles = k;
	f.make = c
}), null);