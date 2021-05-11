__d("getStyleProperty", ["camelize", "hyphenate"], (function (a, b, c, d, e, f) {
	e.exports = a;

	function g(a) {
		return a == null ? "" : String(a)
	}

	function a(a, c) {
		var d;
		if (window.getComputedStyle) {
			d = window.getComputedStyle(a, null);
			if (d) return g(d.getPropertyValue(b("hyphenate")(c)))
		}
		if (document.defaultView && document.defaultView.getComputedStyle) {
			d = document.defaultView.getComputedStyle(a, null);
			if (d) return g(d.getPropertyValue(b("hyphenate")(c)));
			if (c === "display") return "none"
		}
		return a.currentStyle ? c === "float" ? g(a.currentStyle.cssFloat || a.currentStyle.styleFloat) : g(a.currentStyle[b("camelize")(c)]) : g(a.style && a.style[b("camelize")(c)])
	}
}), null);