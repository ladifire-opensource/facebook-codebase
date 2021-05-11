__d("CometNotificationsDropdownTrigger.react", ["fbt", 
	"CometIconNotificationsFilled.react", 
	"CometNotificationsDropdown.entrypoint", 
	"CometNotificationsListLoadingState.react", 
	"CometSettingsBadgedDropdownTrigger.react", 
	"React", "deferredLoadComponent", "qex", 
	"requireDeferredForDisplay", "useTopNavigationLogging"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = b("deferredLoadComponent")(b("requireDeferredForDisplay")("CometNotificationsBadgeCount.react"));

	function a(a) {
		a = a.isNotifications;
		var c = h.useState(0),
			d = c[0];
		c = c[1];
		var e = b("useTopNavigationLogging").useNotificationsButtonLoggingCallbacks(d.toString()),
			f = e[0];
		e = e[1];
		var j = d === 0 ? g._("Th\u00f4ng b\u00e1o") : g._("Th\u00f4ng b\u00e1o, {badge count} ch\u01b0a \u0111\u1ecdc", [g._param("badge count", d)]);
		return h.jsx(b("CometSettingsBadgedDropdownTrigger.react"), {
			badgeCount: d,
			deferedBadgeCount: i,
			disabled: a,
			dropdownEntryPoint: b("CometNotificationsDropdown.entrypoint"),
			fallback: h.jsx(b("CometNotificationsListLoadingState.react"), {}),
			forceActive: a,
			icon: b("CometIconNotificationsFilled.react"),
			label: j,
			loggingRef: e,
			onBadgeCount: c,
			onPress: f,
			preloadTrigger: "tooltip",
			shouldShowNotificationsReminder: !a && b("qex")._("1723889") === !0,
			testid: void 0,
			tooltipLabel: g._("Th\u00f4ng b\u00e1o"),
			tracePolicy: "comet.jewel.notification"
		})
	}
	c = h.memo(a);
	e.exports = c
}), null);