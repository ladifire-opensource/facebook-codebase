__d("XHRHttpError", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.getErrorCode = a;
	var g = "HTTP_CLIENT_ERROR";
	f.HTTP_CLIENT_ERROR = g;
	var h = "HTTP_PROXY_ERROR";
	f.HTTP_PROXY_ERROR = h;
	var i = "HTTP_SERVER_ERROR";
	f.HTTP_SERVER_ERROR = i;
	var j = "HTTP_TRANSPORT_ERROR";
	f.HTTP_TRANSPORT_ERROR = j;
	var k = "HTTP_UNKNOWN_ERROR";
	f.HTTP_UNKNOWN_ERROR = k;

	function a(a, b) {
		if (b === 0) {
			a = a.getProtocol();
			return a === "file" || a === "ftp" ? null : j
		} else if (b >= 100 && b < 200) return h;
		else if (b >= 200 && b < 300) return null;
		else if (b >= 400 && b < 500) return g;
		else if (b >= 500 && b < 600) return i;
		else if (b >= 12001 && b < 12156) return j;
		else return k
	}
}), null);