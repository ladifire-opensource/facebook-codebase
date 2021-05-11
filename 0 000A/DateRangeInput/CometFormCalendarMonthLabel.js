__d("CometFormCalendarMonthLabel.react", ["React", "TetraText.react"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c = a.date;
		a = a.monthID;
		return g.jsx("span", {
			id: a,
			children: g.jsx(b("TetraText.react"), {
				type: "headlineEmphasized3",
				children: c.format("F Y")
			})
		})
	}
	c = g.memo(a);
	e.exports = c
}), null);