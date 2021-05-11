__d("CometSSRContentInjector", ["CometSSRHydrationMarkerUtils", "CometSSRLogger", "gkx", "jestOnlyViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	f.__getDebugState = a;
	f.__onDebugStateChange = c;
	f.init = d;
	var g = b("CometSSRLogger").initNoopLogger(),
		h = {
			onContentInjected: function (a) {}
		},
		i = null,
		j = {};

	function k(a) {
		switch (a) {
			case "fail_js_error":
				return "server_js_error";
			case "fail_infra_error":
				return "server_infra_error";
			case "fail_ssr_disabled":
				return "ssr_disabled";
			case "fail_feed_module_not_supported":
				return "feed_module_not_supported";
			case "fail_bad_preloaders":
				return "bad_preloaders";
			case "fail_unknown_boundaries":
				return "unknown_boundaries";
			default:
				return "unknown"
		}
	}
	var l = {
			root: "pending"
		},
		m = 0,
		n = new Map();

	function o() {
		return {
			boundaryErrorStatuses: babelHelpers["extends"]({}, j),
			boundaryStatuses: babelHelpers["extends"]({}, l),
			globalBoundaryErrorStatus: i
		}
	}

	function p() {
		if (n.size === 0) return;
		var a = o();
		n.forEach(function (b) {
			return b(a)
		})
	}

	function a() {
		return o()
	}

	function q(a) {
		a.style.visibility = "", a.style.display = ""
	}

	function c(a) {
		var b = m++;
		n.set(b, a);
		return {
			release: function () {
				n["delete"](b)
			}
		}
	}

	function d(a, c, d) {
		a;
		c && (g = b("CometSSRLogger").initLogger(c));
		var e = d == null ? void 0 : d.onContentInjected;
		e && (h.onContentInjected = e);
		b("CometSSRHydrationMarkerUtils").injectStyles != null && b("CometSSRHydrationMarkerUtils").injectStyles();
		window.__onSSRCompleted(function (c) {
			g.logPayloadReceivedFromInlineInjector(c);
			c.unbindListeners && c.unbindListeners();
			q(a);
			g.logSSRInjection(c.status === "INJECTED");
			if (c.status === "INJECTED") {
				var d = e || function (a) {};
				c.processedPayloads.forEach(function (a) {
					a = a.id;
					a && (g.logSSRShown(a), l[a] = "content_injected", d(a))
				})
			} else c.processedPayloads.forEach(function (a) {
				var c = a.id;
				a = a.status;
				if (a !== "success") {
					var d = k(a);
					c && (j[c] = d, l[c] = "client_rendered");
					i = i === null || i === "unknown" ? d : i;
					b("gkx")("1501502") && a !== "fail_ssr_disabled" && b("jestOnlyViolation")("Encountered error during server rendering: " + d + "! See slog for error details. (client rendering prevented since comet_ssr_fatal_on_error is enabled)", "comet_infra")
				}
			});
			p()
		})
	}
}), null);