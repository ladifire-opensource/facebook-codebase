__d("asset", [], (function(a, b, c, d, e, f) {
	function a() {
		for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
		throw new Error("asset(" + b.join(",") + "): Unexpected asset reference")
	}
	e.exports = a
}), null);