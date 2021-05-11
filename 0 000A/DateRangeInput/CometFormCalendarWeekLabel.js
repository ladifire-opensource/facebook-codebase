__d("CometFormCalendarWeekLabel.react", ["DateConsts", "DateFormatConfig", "React", "TetraText.react"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("DateFormatConfig").shortDayNames,
		h = b("DateFormatConfig").weekStart,
		i = b("React");

	function a(a) {
		a = a.className;
		var c = [];
		for (var d = 0; d < b("DateConsts").DAYS_PER_WEEK; d++) c.push(i.jsx("div", {
			className: a,
			children: i.jsx(b("TetraText.react"), {
				numberOfLines: 1,
				type: "meta4",
				children: g[(h + d) % b("DateConsts").DAYS_PER_WEEK]
			})
		}, "label" + d));
		return c
	}
}), null);