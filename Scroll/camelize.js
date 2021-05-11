__d("camelize", [], (function (a, b, c, d, e, f) {
	e.exports = a;
	var g = /-(.)/g;

	function a(a) {
		return a.replace(g, function (a, b) {
			return b.toUpperCase()
		})
	}
}), null);