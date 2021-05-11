__d("CometMouseActivity", ["clearTimeout", "removeFromArray", "setTimeout"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = 50,
		h = [],
		i = null;

	function j() {
		h.length > 0 && h.forEach(function (a) {
			return a()
		}), i = null
	}

	function k() {
		b("clearTimeout")(i), i = b("setTimeout")(function () {
			j()
		}, g)
	}
	var l = !1;

	function m() {
		l || (window.addEventListener("mousemove", k), l = !0);
		return function () {
			window.removeEventListener("mousemove", k)
		}
	}

	function a(a) {
		l || m();
		h.push(a);
		return function () {
			b("removeFromArray")(h, a)
		}
	}
	c = {
		addOnMouseStopCallback: a,
		init: m
	};
	d = c;
	e.exports = d
}), null);