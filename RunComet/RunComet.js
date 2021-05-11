__d("RunComet", ["ExecutionEnvironment", "FBLogger", 
	"createCancelableFunction", "emptyFunction", 
	"recoverableViolation", "setTimeout", 
	"unexpectedUseInComet"], (function (a, b, c, d, e, f) {
	"use strict";
	f.onLoad = o;
	f.onAfterUnload = a;
	f.onAfterLoad = c;
	f.onUnload = d;
	f.onBeforeUnload = e;
	f.onLeave = p;
	f.onCleanupOrLeave = q;
	f.__removeHook = r;
	var g = {},
		h = !1,
		i = !1,
		j = {
			remove: b("emptyFunction")
		};

	function k(a, c) {
		g.unload == null && (g.unload = [], g.afterunload = [], b("ExecutionEnvironment").canUseEventListeners && window.addEventListener("unload", function () {
			n("unload"), n("afterunload")
		})), g[a] == null ? (b("recoverableViolation")("EVENT_LISTENERS." + a + " wasn't initialized but should have been!", "comet_infra"), g[a] = [c]) : g[a].push(c)
	}

	function l(a) {
		a || b("recoverableViolation")("Undefined event listener handler is not allowed", "comet_infra");
		return b("createCancelableFunction")((a = a) != null ? a : b("emptyFunction"))
	}

	function m(a) {
		return {
			remove: function () {
				a.cancel()
			}
		}
	}

	function n(a) {
		var c = g[a] || [];
		for (var d = 0; d < c.length; d++) {
			var e = c[d];
			try {
				e()
			} catch (c) {
				b("FBLogger")("comet_infra").catching(c).mustfix("Hit an error while executing '" + a + "' event listeners.")
			}
		}
		g[a] = []
	}

	function o(a) {
		if (h) {
			a();
			return m(l(b("emptyFunction")))
		}
		a = l(a);
		g.domcontentloaded == null ? (g.domcontentloaded = [a], b("ExecutionEnvironment").canUseEventListeners && window.addEventListener("DOMContentLoaded", function () {
			n("domcontentloaded")
		}, !0)) : g.domcontentloaded.push(a);
		return m(a)
	}

	function a(a) {
		a = l(a);
		k("afterunload", a);
		return m(a)
	}

	function c(a) {
		a = l(a);
		g.load == null ? (g.load = [a], b("ExecutionEnvironment").canUseEventListeners && window.addEventListener("load", function () {
			n("domcontentloaded"), n("load")
		})) : g.load.push(a);
		i && b("setTimeout")(function () {
			n("domcontentloaded"), n("load")
		}, 0);
		return m(a)
	}

	function d(a) {
		a = l(a);
		k("unload", a);
		return m(a)
	}

	function e(a, c) {
		if (c !== !1) {
			c = "Run.onBeforeUnload was called with include_quickling_events as true or undefined, but this is not valid in Comet.";
			b("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(c)
		}
		c = l(a);
		g.beforeunload == null && (g.beforeunload = [], b("ExecutionEnvironment").canUseEventListeners && window.addEventListener("beforeunload", function (a) {
			var c = g.beforeunload || [];
			for (var c = c, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var f;
				if (d) {
					if (e >= c.length) break;
					f = c[e++]
				} else {
					e = c.next();
					if (e.done) break;
					f = e.value
				}
				f = f;
				var h = void 0;
				try {
					h = f()
				} catch (a) {
					b("FBLogger")("comet_infra").catching(a).mustfix("Hit an error while executing onBeforeUnload event listeners.")
				}
				if (h !== void 0) {
					h != null && h.body != null && (h = h.body);
					a.preventDefault();
					a.returnValue = h;
					return h
				}
			}
		}));
		g.beforeunload.push(c);
		return m(c)
	}

	function p(a) {
		b("unexpectedUseInComet")("Run.onLeave");
		return j
	}

	function q(a, c) {
		b("unexpectedUseInComet")("Run.onCleanupOrLeave");
		return j
	}

	function r(a) {
		b("unexpectedUseInComet")("Run.removeHook")
	}

	function s() {
		o(function () {
			h = !0
		});
		var a = window.onload;
		window.onload = function () {
			a && a(), i = !0
		}
	}
	b("ExecutionEnvironment").canUseDOM && s();
	a = null;
	f.__domContentCallback = a;
	c = null;
	f.__onloadCallback = c
}), null);