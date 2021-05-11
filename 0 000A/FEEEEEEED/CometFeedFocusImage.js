__d("CometFeedFocusImage.react", ["CometFeedFocusMedia.react", "CometImage.react", "react"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = g || b("react");

	function a(a) {
		var c = a.alt,
			d = a.focusX,
			e = a.focusY,
			f = a.imageHeight,
			g = a.imageWidth,
			i = a.src;
		a = a.viewportAspectRatio;
		return h.jsxs("div", {
			className: "stjgntxs ni8dbmo4",
			children: [h.jsx(b("CometFeedFocusMedia.react"), {
				focusX: d,
				focusY: e,
				mediaHeight: f,
				mediaWidth: g,
				viewportAspectRatio: a,
				children: function(a) {
					return h.jsx(b("CometImage.react"), {
						alt: c,
						src: i,
						xstyle: a
					})
				}
			}), h.jsx("div", {
				className: "hzruof5a opwvks06 linmgsc8 kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb"
			})]
		})
	}
	c = h.memo(a);
	e.exports = c
}), null);