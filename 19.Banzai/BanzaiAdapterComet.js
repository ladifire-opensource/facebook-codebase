__d("BanzaiAdapterComet", ["BanzaiConfig", "BanzaiConsts", 
	"BanzaiStorage", "BaseEventEmitter", "CurrentUser", "FBLogger", 
	"JSScheduler", "NetworkStatus", "QueryString", "Run", "SiteData", 
	"StaticSiteData", "URI", "UserAgent", "ZeroRewrites", "getAsyncParams",
	 "gkx", "isInIframe", "lowerFacebookDomain", "once", "unrecoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h, i = [],
		j = new(b("BaseEventEmitter"))(),
		k = b("isInIframe")(),
		l = "/ajax/bz",
		m = "POST",
		n = {
			cleanup: function () {
				var a = i;
				i = [];
				a.forEach(function (a) {
					a.readyState < 4 && a.abort()
				})
			},
			config: b("BanzaiConfig"),
			getEndPointUrl: function (a) {
				a = b("getAsyncParams")(m);
				delete a[b("StaticSiteData").csr_key];
				delete a[b("StaticSiteData").jsmod_key];
				a.ph = b("SiteData").push_phase;
				var c = b("gkx")("1703425") ? "/ajax/bnzai" : l;
				c = b("QueryString").appendToUrl(c, a);
				if (c.length > 2e3) throw b("unrecoverableViolation")("url is too long: ${url}", "comet_infra");
				return c
			},
			getStorage: function () {
				return b("BanzaiStorage")
			},
			getTopLevel: function () {
				return k && b("lowerFacebookDomain").isValidDocumentDomain() ? window.top : null
			},
			getUserID: function () {
				return b("CurrentUser").getID()
			},
			inform: function (a) {
				Array.isArray(a) ? a.forEach(function (a) {
					return j.emit(a)
				}) : j.emit(a)
			},
			isOkToSendViaBeacon: function () {
				return !1
			},
			onUnload: function (a) {
				b("Run").onAfterUnload(a)
			},
			preferredCompressionMethod: b("once")(function () {
				return "deflate"
			}),
			readyToSend: function () {
				return b("UserAgent").isBrowser("IE <= 8") || navigator.onLine
			},
			send: function (a, c, d, e) {
				var f, j = n.getEndPointUrl(!1);
				j = b("ZeroRewrites").rewriteURI(new(g || (g = b("URI")))(j));
				var k = b("ZeroRewrites").getTransportBuilderForURI(j)();
				k.open(m, j.toString(), !0);
				e === !0 ? k.onreadystatechange = function () {
					b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_Immediate, function () {
						if (k.readyState >= 4) {
							var a = i.indexOf(k);
							a >= 0 && i.splice(a, 1);
							try {
								a = k.status
							} catch (b) {
								a = 0
							}
							a === 200 ? (c && c(), b("NetworkStatus").reportSuccess()) : (d && d(a), b("NetworkStatus").reportError())
						}
					})
				} : k.onreadystatechange = function () {
					b("JSScheduler").scheduleNormalPriCallback(function () {
						if (k.readyState >= 4) {
							var a = i.indexOf(k);
							a >= 0 && i.splice(a, 1);
							try {
								a = k.status
							} catch (b) {
								a = 0
							}
							a === 200 ? (c && c(), b("NetworkStatus").reportSuccess(), n.inform((h || (h = b("BanzaiConsts"))).OK)) : (d && d(a), b("NetworkStatus").reportError(), n.inform((h || (h = b("BanzaiConsts"))).ERROR))
						}
					})
				};
				i.push(k);
				b("NetworkStatus").isOnline() ? k.send(a) : f = b("NetworkStatus").onChange(function (b) {
					b = b.online;
					b && (k.send(a), f.remove())
				})
			},
			setHooks: function () {},
			setUnloadHook: function (a) {
				b("Run").onAfterUnload(a._unload)
			},
			subscribe: function (a, b) {
				if (Array.isArray(a)) {
					var c = [];
					a.forEach(function (a) {
						return c.push(j.addListener(a, b))
					});
					return {
						remove: function () {
							c.forEach(function (a) {
								return a.remove()
							})
						}
					}
				} else return j.addListener(a, b)
			},
			useBeacon: !1,
			wrapInTimeSlice: function (a, c) {
				b("FBLogger")("banzai").mustfix("wrapInTimeSlice is not implemented");
				return function () {}
			}
		};
	a = n;
	e.exports = a
}), null);