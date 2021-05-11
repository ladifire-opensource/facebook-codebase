__d("getAsyncHeaders", ["LSD", "ZeroCategoryHeader", "gkx", "isFacebookURI", "killswitch"], (function(a, b, c, d, e, f) {
	e.exports = a;

	function a(a) {
		var c = {},
			d = b("isFacebookURI")(a);
		d && b("ZeroCategoryHeader").value && (c[b("ZeroCategoryHeader").header] = b("ZeroCategoryHeader").value);
		a = g(a);
		d && a && (c["X-FB-LSD"] = a);
		return c
	}

	function g(a) {
		if (b("killswitch")("SAF_JS_FB_X_LSD_HEADER")) return null;
		if (!b("gkx")("1952739")) return null;
		return !a.toString().startsWith("/") && a.getOrigin() !== document.location.origin ? null : b("LSD").token
	}
}), null);