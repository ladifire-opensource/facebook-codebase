__d("memoizeWithArgs", ["MemoizationInstrumentation"], (function (a, b, c, d, e, f) {
	e.exports = a;
	var g = Object.prototype.hasOwnProperty;

	function a(a, c, d) {
		var e, f = d || a.name || "unknown";
		d = function () {
			e || (e = {});
			var d = b("MemoizationInstrumentation").onFunctionCall("memoizeWithArgs", f),
				h = c.apply(void 0, arguments),
				i = !0;
			g.call(e, h) || (i = !1, e[h] = a.apply(void 0, arguments));
			d && d(i);
			return e[h]
		};
		return d
	}
}), null);