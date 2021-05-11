__d("performanceAbsoluteNow", ["performance"], (function (a, b, c, d, e, f) {
	var g;
	if ((g || (g = b("performance"))).now && (g || (g = b("performance"))).timing && (g || (g = b("performance"))).timing.navigationStart) {
		var h = (g || (g = b("performance"))).timing.navigationStart;
		a = function () {
			return (g || (g = b("performance"))).now() + h
		}
	} else a = function () {
		return Date.now()
	};
	e.exports = a
}), null);