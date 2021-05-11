__d("KeyframesVideoUtils", ["Promise"], (function(a, b, c, d, e, f) {
	"use strict";
	f.createVideo = a;
	f.loadVideo = c;
	var g = window.setTimeout,
		h = 4;

	function a(a) {
		var b = document.createElement("video");
		b.setAttribute("webkit-playsinline", "");
		b.setAttribute("playsinline", "");
		b.autoplay = !1;
		b.src = a;
		b.currentTime = 0;
		a.startsWith("blob:") || (b.crossOrigin = "anonymous");
		return b
	}

	function c(a, c) {
		return new(b("Promise"))(function(b, d) {
			var e = function b() {
					a.pause(), a.currentTime = c, a.removeEventListener("canplaythrough", b), f()
				},
				f = function c() {
					a.readyState === h ? b(a) : g(c, 10)
				},
				i = function b(c) {
					a.removeEventListener("error", b), d(c)
				};
			a.currentTime = c;
			a.addEventListener("error", i);
			a.readyState === h ? b(a) : a.addEventListener("canplaythrough", e)
		})
	}
}), null);