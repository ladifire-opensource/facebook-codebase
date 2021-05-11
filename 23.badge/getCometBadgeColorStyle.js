__d("getCometBadgeColorStyle", ["stylex", "unrecoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = {
		blue: {
			backgroundColor: "is6700om"
		},
		darkGray: {
			backgroundColor: "mvk259uv"
		},
		gray: {
			backgroundColor: "p2o8ms9n"
		},
		green: {
			backgroundColor: "jllm4f4h"
		},
		red: {
			backgroundColor: "gky8063y"
		}
	};

	function a(a) {
		switch (a) {
			case "blue":
				return g.blue;
			case "gray":
				return g.gray;
			case "darkGray":
				return g.darkGray;
			case "green":
				return g.green;
			case "red":
				return g.red;
			default:
				a;
				throw b("unrecoverableViolation")(" Invalid color in getCometBadgeColorStyle", "comet_ui")
		}
	}
}), null);