__d("DTSG_ASYNC", ["DTSGInitData"], (function (a, b, c, d, e, f) {
	"use strict";
	f.getToken = a;
	f.setToken = c;
	var g = b("DTSGInitData").async_get_token || null;

	function a() {
		return g
	}

	function c(a) {
		g = a
	}
}), null);