__d("CometFullScreen", ["Promise"], (function (a, b, c, d, e, f) {
	"use strict";
	f.requestFullScreen = a;
	f.exitFullScreen = c;
	f.isSupported = d;
	f.getFullScreenElement = g;
	f.isFullScreen = e;
	f.getFullScreenChangeEventNames = h;
	f.subscribeToFullScreenChangeEvent = i;

	function a(a) {
		var c = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
		return typeof c === "function" ? c.call(a) : b("Promise").reject()
	}

	function c() {
		var a = document.exitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitExitFullscreen;
		return typeof a === "function" ? a.call(document) : b("Promise").reject()
	}

	function d() {
		return (typeof document.webkitFullscreenEnabled === "function" || typeof document.mozFullScreenEnabled === "function" || typeof document.msFullscreenEnabled === "function" || typeof document.fullscreenEnabled === "function") && (typeof document.webkitExitFullscreen === "function" || typeof document.mozCancelFullScreen === "function" || typeof document.msExitFullscreen === "function" || typeof document.exitFullscreen === "function")
	}

	function g() {
		return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || null
	}

	function e() {
		return g() != null
	}

	function h() {
		return ["webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange", "fullscreenchange"]
	}

	function i(a) {
		var b = window.document,
			c = !1,
			d = !0;
		h().forEach(function (e) {
			b.addEventListener(e, a, {
				capture: c,
				passive: d
			})
		});
		return function () {
			h().forEach(function (d) {
				b.removeEventListener(d, a, c)
			})
		}
	}
}), null);