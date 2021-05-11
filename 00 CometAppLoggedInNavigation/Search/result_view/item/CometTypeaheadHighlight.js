__d("CometTypeaheadHighlight.react", ["CometTypeaheadHightlightBoldTransform.react", 
	"CometTypeaheadHightlightNormalTransform.react", "React", "cometTypeaheadHighlightUtils"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.children,
			d = a.content,
			e = a.query;
		a = a.strategy;
		if (e == null || d == null) return null;
		var f = null;
		switch (a) {
			case "match":
				f = b("cometTypeaheadHighlightUtils").highlightMatch;
				break;
			case "non-match":
				f = b("cometTypeaheadHighlightUtils").highlightNonMatch;
				break;
			default:
		}
		return f ? c(g.jsx(g.Fragment, {
			children: f(e, d).map(function(a, c) {
				return a.isMatched ? g.jsx(b("CometTypeaheadHightlightBoldTransform.react"), {
					segment: a
				}, String(c)) : g.jsx(b("CometTypeaheadHightlightNormalTransform.react"), {
					segment: a
				}, String(c))
			})
		})) : c(g.jsx(b("CometTypeaheadHightlightNormalTransform.react"), {
			segment: {
				content: d,
				isMatched: !1
			}
		}))
	}
}), null);