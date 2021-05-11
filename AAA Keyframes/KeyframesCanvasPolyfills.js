__d("KeyframesCanvasPolyfills", [], (function(a, b, c, d, e, f) {
	"use strict";
	f.addGetTransformPolyfill = a;

	function a(a) {
		if (a.getTransform !== void 0) return;
		else a.currentTransform ? a.getTransform = function() {
			var b = a.currentTransform;
			return {
				a: b.a,
				b: b.b,
				c: b.c,
				d: b.d,
				e: b.e,
				f: b.f
			}
		} : a.mozCurrentTransform !== void 0 ? a.getTransform = function() {
			var b = a.mozCurrentTransform;
			return {
				a: b[0],
				b: b[1],
				c: b[2],
				d: b[3],
				e: b[4],
				f: b[5]
			}
		} : a.getTransform = function() {
			return g
		}
	}
	var g = {
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		e: 0,
		f: 0
	}
}), null);