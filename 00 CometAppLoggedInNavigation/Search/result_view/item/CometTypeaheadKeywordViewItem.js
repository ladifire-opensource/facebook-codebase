__d("CometTypeaheadKeywordViewItem.react", ["ix", "CometTypeaheadHighlight.react",
 "CometTypeaheadViewItem.react", "React", "TetraIcon.react", "TetraText.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React");

	function a(a) {
		var c = a.entry,
			d = a.isActive,
			e = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "isActive", "queryString"]);
		return i.jsx(b("CometTypeaheadViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: c,
			isActive: d,
			itemStartContent: i.jsx("div", {
				className: (h || (h = b("stylex"))).dedupe({
					"align-items-1": "bp9cbjyn",
					"background-color-1": "qsy8amke",
					"border-top-start-radius-1": "n00je7tq",
					"border-top-end-radius-1": "arfg74bv",
					"border-bottom-end-radius-1": "qs9ysxi8",
					"border-bottom-start-radius-1": "k77z8yql",
					"display-1": "j83agx80",
					"height-1": "tv7at329",
					"justify-content-1": "taijpn5t",
					"width-1": "thwo4zme"
				}, d ? {
					"background-color-1": "cwj9ozl2"
				} : null),
				children: i.jsx(b("TetraIcon.react"), {
					color: "secondary",
					icon: b("fbicon")._(g("491282"), 16),
					size: 16
				})
			}),
			children: i.jsx(b("CometTypeaheadHighlight.react"), {
				content: (a = c.getLabel()) != null ? a : "",
				query: e,
				strategy: "non-match",
				children: function(a) {
					return i.jsx(b("TetraText.react"), {
						numberOfLines: 1,
						type: "body3",
						children: a
					})
				}
			})
		}))
	}
}), null);