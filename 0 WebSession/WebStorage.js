__d("WebStorage", ["CookieConsent", "FBLogger", "ex"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = {},
		i = {};

	function j(a, c, d) {
		if ((g || (g = b("CookieConsent"))).isCookiesBlocked() || !(g || (g = b("CookieConsent"))).hasConsent(1)) return null;
		Object.prototype.hasOwnProperty.call(a, d) || (a[d] = c(d));
		return a[d]
	}

	function k(a) {
		try {
			return window[a]
		} catch (a) {
			b("FBLogger")("web_storage").warn("Failed to get storage for read %s", a.message)
		}
		return null
	}

	function l(a) {
		try {
			a = window[a];
			if (a) {
				var c = "__test__" + Date.now();
				a.setItem(c, "");
				a.removeItem(c)
			}
			return a
		} catch (a) {
			c = "";
			b("FBLogger")("web_storage").warn("Failed to get storage %s" + c, a.message)
		}
		return null
	}

	function m(a) {
		var b = [];
		for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
		return b
	}

	function a(a, c, d) {
		if (a == null) return new Error("storage cannot be null");
		var e = null;
		try {
			a.setItem(c, d)
		} catch (g) {
			var f = m(a).map(function(b) {
				var c = (a.getItem(b) || "").length;
				return b + "(" + c + ")"
			});
			e = new Error(b("ex")("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", g.name ? g.name + ": " : "", c, d.length, f.join()));
			b("FBLogger")("web_storage").catching(e).mustfix("Error set item")
		}
		return e
	}
	c = {
		getLocalStorage: function() {
			return j(h, l, "localStorage")
		},
		getSessionStorage: function() {
			return j(h, l, "sessionStorage")
		},
		getLocalStorageForRead: function() {
			return j(i, k, "localStorage")
		},
		getSessionStorageForRead: function() {
			return j(i, k, "sessionStorage")
		},
		setItemGuarded: a
	};
	d = c;
	e.exports = d
}), null);