__d("useCometPhotoEditorRotateStyle", ["MediaEditorViewStateContext", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			original: {
				maxHeight: "l6x6gq6f",
				maxWidth: "d8a6gfzh"
			},
			rotate0: {
				transform: "tftn3vyl"
			},
			rotate90: {
				transform: "a3fe08na"
			},
			rotate180: {
				transform: "j9x3uwb8"
			},
			rotate270: {
				transform: "oo6cp7yp"
			},
			rotated: {
				maxHeight: "jsumbvfw",
				maxWidth: "kl7re420"
			}
		};

	function a() {
		var a;
		a = (a = g.useContext(b("MediaEditorViewStateContext")).angle) != null ? a : 0;
		var c = a % 180 === 0 ? h.original : h.rotated,
			d;
		switch (a) {
			case 0:
				d = h.rotate0;
				break;
			case 90:
				d = h.rotate90;
				break;
			case 180:
				d = h.rotate180;
				break;
			case 270:
				d = h.rotate270;
				break
		}
		return {
			image: [c],
			wrapper: [d]
		}
	}
}), null);