__d("CometPhotoAlbumGridItem.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			actions: {
				end: "oqnctjl6",
				position: "pmk7jnqg"
			},
			bottom: {
				backgroundColor: "cwj9ozl2",
				borderTopStartRadius: "monazrh9",
				borderTopEndRadius: "h905i5nu",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				boxShadow: "sbcfpzgs"
			},
			root: {
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				paddingTop: "ecm0bbzt",
				paddingEnd: "ph5uu5jm",
				paddingBottom: "e5nlhep0",
				paddingStart: "b3onmgus",
				position: "l9j0dhe7"
			},
			sideState: {
				position: "pmk7jnqg",
				start: "ax37mqq2"
			},
			top: {
				alignItems: "bp9cbjyn",
				backgroundColor: "tqsryivl",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "jinzq4gt",
				borderBottomStartRadius: "mrjvor2e",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				height: "i6mlhoon",
				justifyContent: "taijpn5t",
				width: "k4urcfbm"
			},
			topBar: {
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "c0p38np4"
			}
		};

	function a(a) {
		var c = a.bottom,
			d = a.sideActions,
			e = a.sideState,
			f = a.top;
		a = a.xstyle;
		return h.jsxs("div", {
			className: (g || (g = b("stylex")))(i.root, a),
			children: [h.jsxs("div", {
				className: g(i.top),
				children: [f, h.jsxs("div", {
					className: g(i.topBar),
					children: [h.jsx("div", {
						className: g(i.actions),
						children: d
					}), h.jsx("div", {
						className: g(i.sideState),
						children: e
					})]
				})]
			}), h.jsx("div", {
				className: g(i.bottom),
				children: c
			})]
		})
	}
}), null);