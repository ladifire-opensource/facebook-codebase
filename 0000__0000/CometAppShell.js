__d("CometAppShell.react", ["CometCalloutManager.react", 
	"CometDOMOnlyBoundary.react", "CometErrorBoundary.react", 
	"CometLazyToasterView_DO_NOT_USE.react", 
	"CometToasterStateManagerProvider.react", "React", 
	"VideoPlayerGlobalComponents.react",
	 "recoverableViolation", "requireCond", 
	 "useHideNotificationsToasts", "cr:1032515"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a) {
		b("recoverableViolation")("CometAppShell level component did not catch own error", "CometAppShell", {
			error: a
		})
	}

	function a(a) {
		a = a.children;
		return g.jsxs(g.Fragment, {
			children: [g.jsx(b("CometCalloutManager.react"), {
				children: g.jsx(b("VideoPlayerGlobalComponents.react"), {
					children: g.jsxs(b("CometToasterStateManagerProvider.react"), {
						children: [a, g.jsx(j, {})]
					})
				})
			}), b("cr:1032515") !== null && g.jsx(b("CometDOMOnlyBoundary.react"), {
				children: g.jsx(b("CometErrorBoundary.react"), {
					children: g.jsx(b("cr:1032515"), {})
				})
			})]
		})
	}
	var i = new Set(["CometToastNotification"]);

	function j() {
		var a = b("useHideNotificationsToasts")();
		return g.jsx(k, {
			hideNotificationToasts: a
		})
	}
	var k = g.memo(function (a) {
		a = a.hideNotificationToasts;
		return g.jsx(b("CometErrorBoundary.react"), {
			onError: h,
			children: g.jsx(b("CometLazyToasterView_DO_NOT_USE.react"), {
				filterToasts: a === !0 ? i : null
			})
		})
	})
}), null);