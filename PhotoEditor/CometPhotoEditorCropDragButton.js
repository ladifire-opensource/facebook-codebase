__d("CometPhotoEditorCropDragButton.react", ["fbt", "CometPressable.react", 
	"MediaEditorViewStateContext", "React", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = {
			button: {
				backgroundColor: "q2y6ezfg",
				borderTop: "o8l4vnqg",
				borderEnd: "jjlpdeaj",
				borderBottom: "oejp51xy",
				borderStart: "gxv468qn",
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				height: "bsodd3zb",
				position: "pmk7jnqg",
				width: "xthkpp0z"
			},
			leftDiagonalActive: {
				cursor: "dfck0lc5"
			},
			rightDiagonalActive: {
				cursor: "bcd4bg8y"
			}
		};

	function a(a) {
		var c, d = a.cropCorner,
			e = a.left,
			f = a.setIsPressed;
		a = a.top;
		c = (c = i.useContext(b("MediaEditorViewStateContext")).angle) != null ? c : 0;
		c = c === 270 || c === 90;
		var k = function () {
			f(d)
		};
		return i.jsx(b("CometPressable.react"), {
			onPressIn: k,
			children: i.jsx("div", {
				"aria-label": g._("K\u00e9o \u0111\u1ec3 c\u1eaft \u1ea3nh"),
				className: (h || (h = b("stylex")))(j.button, d === "TOP_LEFT" || d === "BOTTOM_RIGHT" ? c ? j.rightDiagonalActive : j.leftDiagonalActive : c ? j.leftDiagonalActive : j.rightDiagonalActive),
				style: {
					left: e,
					top: a
				}
			})
		})
	}
}), null);