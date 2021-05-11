__d("CometDarkMode", ["CometDarkModeSetting", "CometDisableDarkModeMutation", "CometEnableDarkModeMutation", "CometRelay", "CometRelayEnvironment", "CometStyleXSheet", "ExecutionEnvironment", "gkx"], (function (a, b, c, d, e, f) {
	"use strict";
	f.onDarkModeChange = a;
	f.getDarkModePreference = k;
	f.saveDarkModePreference = c;
	f.toggleDarkModeRootClass = d;
	f.getCurrentSetting_FOR_TEST_DO_NOT_USE = e;
	a = b("CometDarkModeSetting").initialSetting;
	var g = {
			product: "COMET"
		},
		h = a,
		i = new Set();

	function a(a) {
		i.add(a);
		return function () {
			i["delete"](a)
		}
	}

	function j(a) {
		h = a;
		var b = k();
		i.forEach(function (a) {
			return a(b)
		})
	}

	function k() {
		if (!b("gkx")("919810")) return !1;
		if (h === "UNDECLARED") return !1;
		else return h === "ENABLED"
	}

	function c(a, c) {
		var d = c.onRevert;
		if (!b("ExecutionEnvironment").canUseDOM) return;
		var e = h,
			f = a ? "ENABLED" : "DISABLED";
		if (e === f) return;
		j(f);

		function i(a) {
			a = a.getRoot().getLinkedRecord("viewer");
			if (a == null) return;
			var b = a.getValue("dark_mode_setting", g);
			if (b === f) return;
			a.setValue("dark_mode_setting", f, g)
		}
		b("CometRelay").commitMutation(b("CometRelayEnvironment"), {
			mutation: a ? b("CometEnableDarkModeMutation") : b("CometDisableDarkModeMutation"),
			onError: function () {
				j(e), d(k())
			},
			optimisticUpdater: i,
			variables: {
				input: g
			}
		})
	}

	function l(a, b, c) {
		c ? a.classList.add(b) : a.classList.remove(b)
	}

	function d(a) {
		if (!b("ExecutionEnvironment").canUseDOM) return;
		var c = window.document.documentElement;
		l(c, b("CometStyleXSheet").DARK_MODE_CLASS_NAME, a)
	}

	function e() {
		return h
	}
}), null);