__d("NetworkHeartbeat", ["XHeartbeatController", "clearTimeout", 
	"getSameOriginTransport", "killswitch", "setTimeout"], (function (a, b, c, d, e, f) {
	"use strict";
	f.maybeStartHeartbeat = r;
	f.isHeartbeatPending = a;
	var g = b("XHeartbeatController").getURIBuilder().getURI().toString(),
		h = 6400,
		i = 100,
		j = null,
		k = 0,
		l = null,
		m = b("killswitch")("DISABLE_HEARTBEAT_POLLING");

	function n(a, c) {
		l = b("getSameOriginTransport")(), l.open("GET", g, !0), l.onload = function () {
			l && l.status === 204 && (m = !0), p(a)
		}, l.onerror = function () {
			q(a, c)
		}, l.ontimeout = function () {
			q(a, c)
		}, l.send()
	}

	function o() {
		l = null, i = 100, k = 0, b("clearTimeout")(j)
	}

	function p(a) {
		o(), a()
	}

	function q(a, c) {
		j = b("setTimeout")(function () {
			r(a, c, void 0, !0)
		}, i), k++, i < h && (i = Math.min(i * Math.pow(2, k), h)), c()
	}

	function r(a, b, c, d) {
		c === void 0 && (c = function () {
			return !0
		}), d === void 0 && (d = !1), m || (d || l == null && c()) && n(a, b)
	}

	function a() {
		return l != null
	}
}), null);