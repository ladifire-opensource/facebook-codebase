__d("ProfileCometProgressiveDateRange.react", ["fbt", 
	"ProfileCometProgressiveDateSelector.react", "React", "TetraText.react", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.endDate,
			d = a.onEndChange,
			e = a.onStartChange,
			f = a.startDate;
		a = a.yearRange;
		return h.jsxs("div", {
			className: "sv5sfqaa lhclo0ds j83agx80 bp9cbjyn",
			children: [h.jsx("div", {
				className: "aov4n071 pfnyh3mw oi9244e8",
				"data-testid": void 0,
				children: h.jsx(b("ProfileCometProgressiveDateSelector.react").ProfileCometProgressiveDateSelector, {
					date: f,
					onChange: e,
					yearRange: a
				})
			}), h.jsx("div", {
				className: "aov4n071 pfnyh3mw oi9244e8",
				children: h.jsx(b("TetraText.react"), {
					type: "body3",
					children: g._("\u0111\u1ebfn")
				})
			}), h.jsx("div", {
				className: "aov4n071 pfnyh3mw",
				"data-testid": void 0,
				children: h.jsx(b("ProfileCometProgressiveDateSelector.react").ProfileCometProgressiveDateSelector, {
					date: c,
					onChange: d,
					yearRange: a
				})
			})]
		})
	}
}), null);