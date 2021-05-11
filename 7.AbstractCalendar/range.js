__d("range", [], (function (a, b, c, d, e, f) {
	e.exports = a;

	function a(a, b, c) {
		c = c == null || c === 0 ? a < b ? 1 : -1 : c;
		var d = -1;
		b = Math.max(Math.ceil((b - a) / c), 0);
		var e = Array(b);
		a = a;
		while (b--) e[++d] = a, a += c;
		return e
	}
}), null);