__d("CandelaGroupScaleBuilder", ["CandelaScaleBuilder"], (function(a, b, c, d, e, f) {
	"use strict";

	function g(a, b) {
		var c = Infinity,
			d = -Infinity;
		a.forEach(function(a) {
			b.forEach(function(b) {
				b = a[b];
				b != null && (c = Math.min(b, c), d = Math.max(b, d))
			})
		});
		return {
			max: d,
			min: c
		}
	}
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.call(this, g) || this
		}
		b.group = function() {
			for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
			return new b().seriesNames(c)
		};
		return b
	}(b("CandelaScaleBuilder"));
	e.exports = a
}), null);