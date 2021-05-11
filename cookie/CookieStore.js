__d("CookieStore", ["CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", 
	"performanceNow", "requireDeferred"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("requireDeferred")("BanzaiScuba");

	function i(a, b, c, d, e, f, g, h) {
		return b + "=" + encodeURIComponent(c) + "; " + (f !== 0 && f != void 0 ? "expires=" + new Date(a + f).toUTCString() + "; " : "") + "path=" + d + "; domain=" + e + (g ? "; secure" : "") + (h ? "; SameSite=" + h : "")
	}

	function j(a, b, c) {
		return a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + c
	}

	function k() {
		if (b("CookieCoreLoggingConfig").sampleRate > 0) {
			var a = (g || (g = b("performanceNow")))(),
				c = document.cookie;
			a = g() - a;
			var d = a > b("CookieCoreLoggingConfig").maximumIgnorableStallMs && b("Random").coinflip(1 / b("CookieCoreLoggingConfig").sampleRate);
			d && b("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(a)).warn("Cookie read exceeded %s milliseconds.", b("CookieCoreLoggingConfig").maximumIgnorableStallMs);
			return c
		} else return document.cookie
	}
	var l = function() {
		function a() {
			this.$1 = 0
		}
		var c = a.prototype;
		c.setCookie = function(a, b, c, d, e, f, g, h) {
			document.cookie = i(a, b, c, d, e, f, g, h)
		};
		c.clearCookie = function(a, b, c) {
			document.cookie = j(a, b, c)
		};
		c.getCookie = function(a) {
			this.$1++;
			var c = (g || (g = b("performanceNow")))();
			a = k().match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
			c = g() - c;
			var d = 1 / b("CookieCoreLoggingConfig").sampleRateClassic,
				e = b("Random").coinflip(d);
			e && m(d, "classic", c, this.$1);
			return a ? decodeURIComponent(a[1]) : null
		};
		return a
	}();

	function m(a, b, c, d, e, f) {
		h.onReady(function(g) {
			g = new g("cookie_perf", null, {
				addBrowserFields: !0
			});
			g.addInteger("sample_rate", Math.floor(a));
			g.addNormal("type", b);
			g.addInteger("duration_usec", c * 1e3);
			g.addInteger("reads", d);
			typeof e === "number" && g.addInteger("misses", e);
			typeof f === "boolean" && g.addNormal("hit", f);
			g.post()
		})
	}
	var n = 10 * 1e3,
		o = function() {
			function a() {
				this.$1 = {}, this.$2 = 0, this.$3 = 0, this.$4 = 0
			}
			var c = a.prototype;
			c.setCookie = function(a, b, c, d, e, f, g, h) {
				document.cookie = i(a, b, c, d, e, f, g, h), this.$1[b] = {
					value: c,
					updated: a
				}
			};
			c.clearCookie = function(a, b, c) {
				document.cookie = j(a, b, c), this.$1[a] = {
					value: null,
					updated: Date.now()
				}
			};
			c.getCookie = function(a) {
				var c = (g || (g = b("performanceNow")))();
				a = this.$5(a);
				var d = a.cookie;
				a = a.hit;
				var e = 1 / b("CookieCoreLoggingConfig").sampleRateFastStale,
					f = b("Random").coinflip(e);
				if (f) {
					f = (g || (g = b("performanceNow")))() - c;
					m(e, "fast_stale", f, this.$3, this.$4, a)
				}
				return d
			};
			c.$5 = function(a) {
				var b = Date.now(),
					c = this.$1[a];
				if (!c) {
					if (this.$2 + n < b) {
						this.$6();
						return {
							cookie: this.$5(a).cookie,
							hit: !1
						}
					}
					this.$3++;
					return {
						cookie: null,
						hit: !0
					}
				}
				if (c.updated + n < b) {
					this.$6();
					return {
						cookie: this.$5(a).cookie,
						hit: !1
					}
				}
				this.$3++;
				return {
					cookie: c.value,
					hit: !0
				}
			};
			c.$6 = function() {
				this.$4++;
				var a = k().split(";");
				this.$2 = Date.now();
				this.$1 = {};
				for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					var d;
					if (b) {
						if (c >= a.length) break;
						d = a[c++]
					} else {
						c = a.next();
						if (c.done) break;
						d = c.value
					}
					d = d;
					d = d.match("\\s*([^=]+)=(.*)");
					if (!d) continue;
					this.$1[d[1]] = {
						value: decodeURIComponent(d[2]),
						updated: this.$2
					}
				}
			};
			return a
		}();
	e.exports = {
		newCookieStore: function() {
			return b("gkx")("676837") ? new o() : new l()
		},
		CookieCacheForTest: o,
		CookieStoreSlowForTest: l
	}
}), null);