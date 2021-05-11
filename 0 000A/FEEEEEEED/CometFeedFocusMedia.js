__d("CometFeedFocusMedia.react", ["react", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = g || b("react"),
		j = {
			media: {
				bottom: "i09qtzwb",
				end: "n7fi1qx3",
				height: "datstx6m",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4",
				width: "k4urcfbm"
			},
			root: {
				height: "do00u71z",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "l9j0dhe7"
			},
			wrapper: {
				position: "pmk7jnqg",
				top: "kr520xx4"
			}
		};

	function a(a) {
		var c, d = a.children,
			e = a.mediaHeight,
			f = a.mediaWidth,
			g = a.viewportAspectRatio,
			k = a.xstyle;
		c = (c = a.focusX) != null ? c : .5;
		a = (a = a.focusY) != null ? a : .5;
		var l = f / e,
			m, n, o, p;
		l < g ? (a = a, m = g / l, o = "calc((" + g + "/(" + f + "/" + e + "))*100%)", p = "100%", n = "top") : (a = c, o = "100%", m = l / g, p = "calc(((" + f + "/" + e + ")/" + g + ")*100%)", n = "left");
		c = Math.max(Math.min(.5 - m * a, 0), 1 - m);
		return i.jsx("div", {
			className: (h || (h = b("stylex")))(j.root, k),
			style: {
				paddingTop: 100 / g + "%"
			},
			children: i.jsx("div", {
				className: h(j.wrapper),
				style: (l = {
					height: o
				}, l[n] = c * 100 + "%", l.width = p, l),
				children: typeof d === "function" && d(j.media)
			})
		})
	}
}), null);