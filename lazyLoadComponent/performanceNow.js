__d("performanceNow", ["performance"], (function (a, b, c, d, e, f) {
	var g;
	if ((g || (g = b("performance"))).now) c = function () {
		return (g || (g = b("performance"))).now()
	};
	else {
		d = a._cstart;
		f = Date.now();
		var h = typeof d === "number" && d < f ? d : f,
			i = 0;
		c = function () {
			var a = Date.now(),
				b = a - h;
			b < i && (h -= i - b, b = a - h);
			i = b;
			return b
		}
	}
	e.exports = c
}), null);