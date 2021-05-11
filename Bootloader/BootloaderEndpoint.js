__d("BootloaderEndpoint", ["Bootloader", "BootloaderEndpointConfig", 
	"CSRFGuard", "ErrorXFBDebug", "FBLogger", "HasteResponse", "TimeSlice", 
	"getAsyncParams", "getSameOriginTransport", "performanceAbsoluteNow", 
	"setImmediateAcrossTransitions"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("BootloaderEndpointConfig").endpointURI,
		i = 0,
		j = null,
		k = new Map(),
		l = new Map();

	function m(a, c) {
		var d = {};
		a.size && (d.modules = Array.from(a.keys()).join(","));
		c.size && (d.nb_modules = Array.from(c.keys()).join(","));
		a = Object.entries(babelHelpers["extends"]({}, d, b("getAsyncParams")("GET"))).map(function (a) {
			var b = a[0];
			a = a[1];
			return encodeURIComponent(b) + "=" + encodeURIComponent(String(a))
		}).join("&");
		return h + (h.includes("?") ? "&" : "?") + a
	}

	function n(a, c) {
		if (a.size === 0 && c.size === 0) return;
		var d = m(a, c),
			e = b("getSameOriginTransport")(),
			f = i++,
			h = (g || (g = b("performanceAbsoluteNow")))();
		e.open("GET", d, !0);
		var j = b("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
		e.onreadystatechange = function () {
			if (e.readyState !== 4) return;
			j(function () {
				b("ErrorXFBDebug").addFromXHR(e);
				var g = e.status === 200 ? JSON.parse(b("CSRFGuard").clean(e.responseText)) : null;
				if (g == null) {
					b("FBLogger")("bootloader").warn("Invalid response from %s: %s", d, e.responseText.substr(0, 256));
					return
				}
				if (g.__error) {
					b("FBLogger")("bootloader").warn("Fatal error from bootloader endpoint: %s", d);
					return
				}
				b("TimeSlice").guard(function () {
					return o(d, g, a, c, f, h)
				}, "Bootloader receiveEndpointData", {
					propagationType: b("TimeSlice").PropagationType.CONTINUATION
				})()
			})
		};
		e.send()
	}

	function o(a, c, d, e, f, h) {
		var i = (g || (g = b("performanceAbsoluteNow")))(),
			j = c.serverGenTime,
			k = c.hrp;
		k == null && (b("FBLogger")("be_null_hrp").mustfix("Found null hrp with uri: %s, response keys: %s", a, JSON.stringify(Object.keys(c))), k = c);
		b("HasteResponse").handle(k, function () {
			var a = [d, e];
			for (var c = 0; c < a.length; c++) {
				var f = a[c];
				for (var f = f.values(), g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					var i;
					if (g) {
						if (h >= f.length) break;
						i = f[h++]
					} else {
						h = f.next();
						if (h.done) break;
						i = h.value
					}
					i = i;
					b("Bootloader").done(i)
				}
			}
		}, function (a) {
			var c = [d, e];
			for (var g = 0; g < c.length; g++) {
				var k = c[g];
				for (var k = k.keys(), l = Array.isArray(k), m = 0, k = l ? k : k[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					var n;
					if (l) {
						if (m >= k.length) break;
						n = k[m++]
					} else {
						m = k.next();
						if (m.done) break;
						n = m.value
					}
					n = n;
					b("Bootloader").beDone(n, f, babelHelpers["extends"]({
						requestStart: h,
						responseStart: i,
						serverGenTime: j
					}, a))
				}
			}
		})
	}

	function p() {
		var a = k,
			b = l;
		j = null;
		k = new Map();
		l = new Map();
		n(a, b)
	}
	a = {
		load: function (a, c, d, f) {
			(c ? k : l).set(a, d);
			if (b("BootloaderEndpointConfig").debugNoBatching) {
				p();
				return
			}
			if (j != null) return;
			f != null && b("BootloaderEndpointConfig").batchOnlyAfterFirstSkipRef != null && !b("BootloaderEndpointConfig").batchOnlyAfterFirstSkipRef.includes(f) && p();
			var g = b("TimeSlice").getGuardedContinuation("Schedule async batch request: Bootloader._loadResources");
			j = b("setImmediateAcrossTransitions")(function () {
				return g(function () {
					return p()
				})
			})
		}
	};
	e.exports = a
}), null);