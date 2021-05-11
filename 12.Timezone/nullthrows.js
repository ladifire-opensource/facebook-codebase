__d("nullthrows", [], (function (a, b, c, d, e, f) {
	e.exports = a;

	function a(a, b) {
		b === void 0 && (b = "Got unexpected null or undefined");
		if (a != null) return a;
		a = new Error(b);
		a.framesToPop = 1;
		throw a
	}
}), null);