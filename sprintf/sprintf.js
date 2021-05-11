__d("sprintf", [], (function (a, b, c, d, e, f) {
	e.exports = a;

	function a(a) {
		for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
		var e = 0;
		return a.replace(/%s/g, function () {
			return String(c[e++])
		})
	}
}), null);
