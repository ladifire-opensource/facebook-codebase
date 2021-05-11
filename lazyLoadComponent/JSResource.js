__d("JSResource", ["JSResourceReference"], (function (a, b, c, d, e, f) {
	e.exports = a;
	var g = {};

	function h(a, b) {
		g[a] = b
	}

	function i(a) {
		return g[a]
	}

	function a(a) {
		a = a;
		var c = i(a);
		if (c) return c;
		c = new(b("JSResourceReference"))(a);
		h(a, c);
		return c
	}
	a.Reference = b("JSResourceReference");
	a.loadAll = b("JSResourceReference").loadAll
}), null);