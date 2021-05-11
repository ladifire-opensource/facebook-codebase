__d("CometPhotoEditorCropDragButton.react", ["fbt", "CometPressable.react", "React", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React");

	function a(a) {
		var c = a.cropCorner,
			d = a.left,
			e = a.setIsPressed;
		a = a.top;
		var f = function () {
			e(c)
		};
		return i.jsx(b("CometPressable.react"), {
			onPressIn: f,
			children: i.jsx("div", {
				"aria-label": g._("K\u00e9o \u0111\u1ec3 c\u1eaft \u1ea3nh"),
				className: (h || (h = b("stylex"))).dedupe({
					"background-color-1": "q2y6ezfg",
					"border-top-0.3": "o8l4vnqg",
					"border-end-0.3": "jjlpdeaj",
					"border-bottom-0.3": "oejp51xy",
					"border-start-0.3": "gxv468qn",
					"border-top-start-radius-1": "s45kfl79",
					"border-top-end-radius-1": "emlxlaya",
					"border-bottom-end-radius-1": "bkmhp75w",
					"border-bottom-start-radius-1": "spb7xbtv",
					"height-1": "bsodd3zb",
					"position-1": "pmk7jnqg",
					"width-1": "xthkpp0z"
				}, c === "TOP_LEFT" || c === "BOTTOM_RIGHT" ? {
					"cursor-1": "dfck0lc5"
				} : {
					"cursor-1": "bcd4bg8y"
				}),
				style: {
					left: d,
					top: a
				}
			})
		})
	}
}), null);