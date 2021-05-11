__d("CookieCore", ["CookieCoreConfig", "CookieStore"], (function(a, b, c, d, e, f) {
	f.set = l;
	f.setWithoutChecks = m;
	f.setIfFirstPartyContext = a;
	f.setWithoutChecksIfFirstPartyContext = c;
	f.clear = n;
	f.get = d;
	var g = /^.*(\.(facebook|messenger|oculus|instagram|facebookcorewwwi|workplace|fbaddins)\..*)$/i,
		h = /_js_(.*)/,
		i;

	function j() {
		i || (i = b("CookieStore").newCookieStore());
		return i
	}

	function k(a) {
		return window.self != window.top ? !1 : !0
	}

	function l(a, b) {
		if (!q(a)) return;
		m(a, b, s(a), t(a), r(a), u(a))
	}

	function m(a, b, c, d, e, f) {
		var h = Date.now();
		if (c != null)
			if (c > h) c -= h;
			else if (c == 1) {
			n(a, d);
			return
		}
		j().setCookie(h, a, b, d, window.location.hostname.replace(g, "$1"), c, e, f)
	}

	function a(a, b) {
		if (!k(a)) return;
		l(a, b)
	}

	function c(a, b, c, d, e) {
		if (!k(a)) return;
		m(a, b, c, d, e)
	}

	function n(a, b) {
		b === void 0 && (b = "/"), b = b || "/", j().clearCookie(a, b, window.location.hostname.replace(g, "$1"))
	}

	function d(a) {
		return !q(a) ? null : j().getCookie(a)
	}

	function o(a) {
		return {
			insecure: a.i || !1,
			path: a.p || "/",
			ttlSeconds: a.t || 0,
			sameSite: a.s || "None"
		}
	}

	function p(a) {
		if (b("CookieCoreConfig")[a] !== void 0) return o(b("CookieCoreConfig")[a]);
		a = a.match(h);
		return a && a.length > 1 ? p(a[1]) : null
	}

	function q(a) {
		return p(a) !== null
	}

	function r(a) {
		a = p(a);
		return a == null ? !0 : !a.insecure
	}

	function s(a) {
		a = p(a);
		return a == null ? null : a.ttlSeconds * 1e3
	}

	function t(a) {
		a = p(a);
		return a == null ? "/" : a.path
	}

	function u(a) {
		a = p(a);
		return a == null || a.sameSite == null ? null : a.sameSite
	}
}), null);