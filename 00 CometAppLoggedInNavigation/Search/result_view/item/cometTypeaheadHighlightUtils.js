__d("cometTypeaheadHighlightUtils", ["escapeRegex", "mayHaveConnectedCharacters"], (function(a, b, c, d, e, f) {
	"use strict";
	f.highlightMatch = a;
	f.highlightNonMatch = c;

	function g(a, c, d) {
		if (b("mayHaveConnectedCharacters")(c)) return [{
			content: c,
			isMatched: !1
		}];
		a = b("escapeRegex")(a);
		a = new RegExp("( " + a.split(/\s+/).join("| ") + ")", "gi");
		c = " " + c;
		var e = [],
			f = 0,
			g = null;
		while (!0) {
			g = a.exec(c);
			if (g == null) break;
			var h = c.substring(f, g.index);
			f === 0 && (h = h.trimLeft());
			e.push({
				content: h,
				isMatched: !d
			});
			h = g[0];
			g.index === 0 && (h = h.trimLeft());
			f = g.index + g[0].length;
			e.push({
				content: h,
				isMatched: d
			})
		}
		h = c.substring(f, c.length);
		e.push({
			content: h,
			isMatched: !d
		});
		return e
	}

	function a(a, b) {
		return g(a, b, !0)
	}

	function c(a, b) {
		return g(a, b, !1)
	}
}), null);