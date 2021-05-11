__d("CometTintedIcon.react", ["BaseImage_DEPRECATED.react", "React", "TintableIconSource", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			image: {
				verticalAlign: "hu5pjgll"
			}
		},
		j = {
			"fds-blue-60": {
				filter: "op6gxeva"
			},
			"fds-blue-link": {
				filter: "m2dz0pri"
			},
			"fds-gray-30": {
				filter: "dfmqs5qf"
			},
			"fds-gray-45": {
				filter: "cwsop09l"
			},
			"fds-gray-70": {
				filter: "m6k467ps"
			},
			"fds-negative": {
				filter: "luk0pkue"
			},
			"fds-positive": {
				filter: "pya715lg"
			},
			"fds-primary-icon": {
				filter: "lzf7d6o1"
			},
			"fds-white": {
				filter: "eb18blue"
			},
			"fds-yellow-20": {
				filter: "rs2r797s"
			}
		};

	function a(a) {
		var c = a.alt;
		c = c === void 0 ? "" : c;
		var d = a.color;
		d = d === void 0 ? "fds-black" : d;
		var e = a.draggable,
			f = a.icon,
			k = a.testid;
		k = a.xstyle;
		a = f instanceof b("TintableIconSource");
		return h.jsx(b("BaseImage_DEPRECATED.react"), {
			alt: c,
			className: (g || (g = b("stylex")))(i.image, a && d !== "fds-black" && j[d], k),
			draggable: e,
			src: f.src,
			testid: void 0
		})
	}
}), null);