__d("WebSession", ["FBLogger", "Random", "WebSessionDefaultTimeoutMs", "WebStorage"], (function(a, b, c, d, e, f) {
	"use strict";
	f.extend = a;
	f.getId = c;
	f.getPageId_DO_NOT_USE = d;
	var g, h = 36,
		i = 6,
		j = Math.pow(h, i);

	function k(a) {
		return a == null || Number.isFinite(a) === !1 || a <= 0 ? null : a
	}

	function l(a) {
		if (a == null) return null;
		var c = parseInt(a, 10);
		if ("" + c !== a) {
			b("FBLogger")("web_session").warn("Expected the web session expiry time to parse as an integer. Found `%s`.", String(a));
			return null
		}
		return k(c)
	}

	function m(a) {
		if (a == null) return null;
		if (a.length !== i) {
			b("FBLogger")("web_session").warn("Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.", i, a.length, a);
			return null
		}
		if (/^[a-z0-9]+$/.test(a) === !1) {
			b("FBLogger")("web_session").warn("Expected the web session ID to be a base-%d encoded string. Received `%s`.", h, a);
			return null
		}
		return a
	}

	function n(a) {
		if (a == null) return null;
		if (typeof a !== "string" && a instanceof String === !1) {
			b("FBLogger")("web_session").warn("A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.", a);
			return null
		}
		a = a.split(":");
		var c = a[0];
		a = a[1];
		a = l(a);
		c = m(c);
		return a == null || c == null ? null : {
			expiryTime: a,
			id: c
		}
	}

	function o() {
		var a = Math.floor(b("Random").random() * j);
		a = a.toString(h);
		return "0".repeat(i - a.length) + a
	}
	var p = null;

	function q() {
		p == null && (p = o());
		return p
	}

	function r(a) {
		a === void 0 && (a = Date.now());
		var c = (g || (g = b("WebStorage"))).getLocalStorageForRead();
		if (c == null) return null;
		c = n(c.getItem("Session"));
		return c && a < c.expiryTime ? c : null
	}

	function s() {
		var a;
		return (a = r()) == null ? void 0 : a.id
	}

	function t() {
		var a = (g || (g = b("WebStorage"))).getSessionStorageForRead();
		if (a == null) return null;
		a = m(a.getItem("TabId"));
		if (a == null) {
			var c = (g || (g = b("WebStorage"))).getSessionStorage();
			if (c == null) return null;
			var d = o();
			c.setItem("TabId", d);
			return d
		}
		return a
	}

	function a(a) {
		if (a !== void 0 && k(a) == null) {
			b("FBLogger")("web_session").warn("`WebSession.extend()` was passed an invalid target expiry time `%s`.", a);
			return
		}
		var c = Date.now();
		a = (a = a) != null ? a : c + b("WebSessionDefaultTimeoutMs");
		var d = r(c);
		if (d && d.expiryTime >= a || a <= c) return;
		c = (g || (g = b("WebStorage"))).getLocalStorage();
		if (c != null) {
			d = d == null ? o() : d.id;
			c.setItem("Session", d + ":" + a)
		}
	}

	function c() {
		var a, b, c = q();
		a = (a = s()) != null ? a : "";
		b = (b = t()) != null ? b : "";
		return a + ":" + b + ":" + c
	}

	function d() {
		return q()
	}
}), null);