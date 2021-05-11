__d("createCancelableFunction", ["emptyFunction"], (function (a, b, c, d, e, f) {
	e.exports = a;

	function a(a) {
		var c = a;
		a = function () {
			for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
			return c.apply(this, b)
		};
		a.cancel = function () {
			c = b("emptyFunction")
		};
		return a
	}
}), null);