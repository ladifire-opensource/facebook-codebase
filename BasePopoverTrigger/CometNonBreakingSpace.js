__d("CometNonBreakingSpace.react", ["React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			.5: {
				marginEnd: "kvj6zsgd"
			},
			.25: {
				marginEnd: "f7ugub2p"
			},
			.75: {
				marginEnd: "zs26xb6x"
			},
			1: {
				marginEnd: "t113ifn3"
			}
		};

	function a(a) {
		a = a.size;
		if (a != null) return h.jsx("span", {
			className: (g || (g = b("stylex")))(i[a]),
			children: "\ufeff"
		});
		else return h.jsx(h.Fragment, {
			children: "\xa0"
		})
	}
}), null);