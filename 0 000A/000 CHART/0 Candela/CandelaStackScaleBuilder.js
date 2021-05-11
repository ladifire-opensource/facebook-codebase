__d("CandelaStackScaleBuilder", ["CandelaScaleBuilder"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = {
		max: 0,
		min: 0
	};

	function h(a, b) {
		var c = b.filter(function(b) {
			return a.some(function(a) {
				return a[b] != null
			})
		});
		if (c.length === 0) return g;
		var d = c[0],
			e = [];
		a.forEach(function(a) {
			var b = 0,
				f = !0;
			c.forEach(function(c) {
				c = a[c];
				if (c == null) {
					f = !1;
					return !1
				} else b += c
			});
			f && (e.push(a[d]), e.push(b))
		});
		return e.length === 0 ? g : {
			max: Math.max.apply(Math, e),
			min: Math.min.apply(Math, e)
		}
	}
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.call(this, h) || this
		}
		b.stack = function() {
			for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
			return new b().seriesNames(c)
		};
		return b
	}(b("CandelaScaleBuilder"));
	e.exports = a
}), null);