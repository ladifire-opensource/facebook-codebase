__d("NetworkStatusImpl", ["FBLogger", "NetworkHeartbeat", "performanceNow"], (function (a, b, c, d, e, f) {
	"use strict";
	f.isOnline = a;
	f.onChange = c;
	f.reportError = d;
	f.reportSuccess = e;
	var g, h = [],
		i = window.navigator.onLine,
		j = 2,
		k = 5e3,
		l = [],
		m = [],
		n = 0,
		o = !0,
		p = !1,
		q = function () {
			u(o)
		},
		r = function () {
			u(p)
		};

	function s() {
		var a = h.slice();
		a.forEach(function (a) {
			a({
				online: i
			})
		})
	}

	function t(a) {
		a = h.indexOf(a);
		a > -1 && h.splice(a, 1)
	}

	function u(a) {
		i !== a && !b("NetworkHeartbeat").isHeartbeatPending() && (i = a, b("FBLogger")("NetworkStatus").warn("Network switched to " + (a ? "online" : "offline")), i || b("NetworkHeartbeat").maybeStartHeartbeat(q, r), s())
	}

	function v() {
		var a = (g || (g = b("performanceNow")))();
		l = l.filter(function (b) {
			return w(b.startTime, a)
		});
		m = m.filter(function (b) {
			return w(b.startTime, a)
		});
		return m.length / l.length < j
	}
	var w = function (a, b) {
		return a > b - k
	};

	function a() {
		return i
	}

	function c(a) {
		h.push(a);
		var b = !1;
		return {
			remove: function () {
				b || (b = !0, t(a))
			}
		}
	}

	function d() {
		var a = (g || (g = b("performanceNow")))();
		l.push({
			startTime: a
		});
		b("NetworkHeartbeat").maybeStartHeartbeat(q, r, v)
	}

	function e() {
		var a = (g || (g = b("performanceNow")))();
		m.push({
			startTime: a
		});
		w(n, a) || (m = m.filter(function (b) {
			return w(b.startTime, a)
		}), n = a)
	}
	window.addEventListener("online", function () {
		u(o)
	});
	window.addEventListener("offline", function () {
		u(p)
	})
}), null);