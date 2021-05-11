__d("PagesCometAdminSettingsNotificationsPageRoot.react", ["fbt", "CometContentArea.react", 
	"CometErrorBoundary.react", "CometRelay", "PagesCometAdminSettingsNotificationsPageHeader.react", 
	"PagesCometAdminSettingsNotificationsPageRootQuery.graphql", 
	"PagesCometAdminSettingsNotificationsPageScheduleSetting.react", "PagesCometAdminSettingsNotificationsSettingsContainer.react", "react", "useNullthrowsViolation"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i, j = i || b("react"),
		k = h !== void 0 ? h : h = b("PagesCometAdminSettingsNotificationsPageRootQuery.graphql");

	function a(a) {
		var c, d, e = a.extraProps;
		a = a.queries;
		e = b("useNullthrowsViolation")(e);
		a = a.pagesCometAdminSettingsNotificationsPageRootQueryReference;
		a = b("CometRelay").usePreloadedQuery(k, a);
		var f = b("useNullthrowsViolation")(a.page);
		c = b("useNullthrowsViolation")((c = a.page) == null ? void 0 : (c = c.page_admin_notif_settings) == null ? void 0 : c.schedule_status);
		d = b("useNullthrowsViolation")((d = a.page) == null ? void 0 : d.page_admin_notif_settings);
		var h = b("CometRelay").useRelayEnvironment();
		a = b("useNullthrowsViolation")((a = a.page) == null ? void 0 : a.name);
		return j.jsx(b("CometContentArea.react"), {
			verticalAlign: "top",
			children: j.jsx(b("CometErrorBoundary.react"), {
				fallback: function(a) {
					return j.jsxs("span", {
						children: [g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i"), ": ", a.message]
					})
				},
				children: j.jsxs("div", {
					className: "hvslbep7 l9j0dhe7 mj7xtnbm geeej9ta gl4o1x5y osnr6wyh j0t1dd8h r54jmrld jifvfom9 cbu4d94t j83agx80 rq0escxv j0mp2qli kzx2olss aot14ch1 p86d2i9g beltcj47 hybvsw6c",
					children: [j.jsx(b("PagesCometAdminSettingsNotificationsPageHeader.react"), {
						header: f
					}), j.jsx(b("PagesCometAdminSettingsNotificationsPageScheduleSetting.react"), {
						environment: h,
						pageID: e.pageID,
						pageName: a,
						scheduleStatus: c
					}), j.jsx(b("PagesCometAdminSettingsNotificationsSettingsContainer.react"), {
						pageID: e.pageID,
						pageName: a,
						scheduleStatus: c,
						settings: d
					})]
				})
			}, "new_page_notif_setting")
		})
	}
}), null);