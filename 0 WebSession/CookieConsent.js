__d("CookieConsent", ["InitialCookieConsent"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = new Set((g || (g = b("InitialCookieConsent"))).initialConsent),
		i = g.shouldShowCookieBanner;
	a = {
		setConsented: function() {
			h.add(1), i = !1
		},
		hasConsent: function(a) {
			return h.has(a)
		},
		isCookiesBlocked: function() {
			return (g || (g = b("InitialCookieConsent"))).noCookies
		},
		shouldShowCookieBanner: function() {
			return i
		}
	};
	e.exports = a
}), null);

["InitialCookieConsent", [], {
					"deferCookies": false,
					"initialConsent": {
						"__set": [1, 2]
					},
					"noCookies": false,
					"shouldShowCookieBanner": false
				}, 4328],