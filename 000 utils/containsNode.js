__d("containsNode", ["isTextNode"], (function (a, b, c, d, e, f) {
	e.exports = g;

	function g(a, c) {
		if (!a || !c) return !1;
		else if (a === c) return !0;
		else if (b("isTextNode")(a)) return !1;
		else if (b("isTextNode")(c)) return g(a, c.parentNode);
		else if ("contains" in a) return a.contains(c);
		else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(c) & 16);
		else return !1
	}
}), null);