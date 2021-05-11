__d("gkx", ["invariant", "BanzaiLazyQueue", "emptyFunction"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = {},
		i = {};

	function j(a) {
		var c = h[a];
		c != null || g(0, 3444, a);
		i[a] || (i[a] = !0, b("BanzaiLazyQueue").queuePost("gk2_exposure", {
			identifier: a,
			hash: c.hash
		}));
		return c.result
	}
	j.oculus = function (a) {
		throw new Error("gkx: Unexpected gkx.oculus call.")
	};
	j.work_company = function (a) {
		throw new Error("gkx: Unexpected gkx.work_company call.")
	};
	j.session = function (a) {
		throw new Error("gkx: Unexpected gkx.session call.")
	};
	j.fb_loggedout = function (a) {
		throw new Error("gkx: Unexpected gkx.fb_loggedout call.")
	};
	j.candidate_portal = function (a) {
		throw new Error("gkx: Unexpected gkx.candidate_portal call.")
	};
	j.wit = function (a) {
		throw new Error("gkx: Unexpected gkx.wit call.")
	};
	j.xwf = function (a) {
		throw new Error("gkx: Unexpected gkx.xwf call.")
	};
	j.add = function (a) {
		for (var b in a) b in h || (h[b] = a[b])
	};
	j.addLoggedInternal = function (a) {
		j.add(a);
		for (var b in a) i[b] = !0
	};
	a = b("emptyFunction");
	j.getGKs = function () {
		return null
	};
	j.setPass = a;
	j.setFail = a;
	c = j;
	e.exports = c
}), null);