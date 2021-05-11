__d("ProfileCometCurrentCityProfileFieldEditForm.react", ["fbt", "CometPrivacySelectorForScope.react", "CometRelay", "ProfileCometCurrentCityProfileFieldSaveMutation", "ProfileCometEditForm.react", "ProfileCometHubsTypeahead.react", "React", "coercePrivacyData", "logCometFunnelEvent", "useProfileCometPrivacyHandler", "ProfileCometCurrentCityProfileFieldEditFormQuery.graphql"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React");

	function a(a) {
		var c = a.props,
			d = c.collectionToken,
			e = c.onCancel,
			f = c.onSaveComplete,
			j = c.privacyScope,
			k = c.sectionToken;
		c = a.queries;
		a = b("CometRelay").usePreloadedQuery(h !== void 0 ? h : h = b("ProfileCometCurrentCityProfileFieldEditFormQuery.graphql"), c.queryReference);
		b("logCometFunnelEvent").useLogCometFunnelImpressionEvent("ProfileCometTimelineWebFunnelDefinition", "[impression][about][CURRENT_CITY][edit form]");
		var l = b("CometRelay").useRelayEnvironment();
		c = a.user;
		a = i.useState({
			id: (c == null ? void 0 : (a = c.current_city) == null ? void 0 : a.id) || "",
			name: (c == null ? void 0 : (a = c.current_city) == null ? void 0 : a.name) || ""
		});
		var m = a[0];
		a = a[1];
		var n = b("useProfileCometPrivacyHandler")(),
			o = n[0];
		n = n[1];
		var p = i.useState(!1),
			q = p[0],
			r = p[1];
		c = m.id !== ((c == null ? void 0 : (p = c.current_city) == null ? void 0 : p.id) || "");
		p = i.useCallback(function () {
			r(!0), b("ProfileCometCurrentCityProfileFieldSaveMutation").currentCityProfileFieldSave(l, k, d, {
				current_city_id: m.id,
				privacy: b("coercePrivacyData")(o)
			}, function () {
				b("logCometFunnelEvent").logCometFunnelEvent("ProfileCometTimelineWebFunnelDefinition", "[action][about][CURRENT_CITY][save success]"), f()
			}, function () {
				b("logCometFunnelEvent").logCometFunnelEvent("ProfileCometTimelineWebFunnelDefinition", "[action][about][CURRENT_CITY][save error]"), r(!1)
			})
		}, [d, m, l, f, o, k]);
		return i.jsx(b("ProfileCometEditForm.react"), {
			cancelDisabled: q,
			isDirty: c,
			onCancelClick: function () {
				b("logCometFunnelEvent").logCometFunnelEvent("ProfileCometTimelineWebFunnelDefinition", "[action][about][CURRENT_CITY][cancel]"), e()
			},
			onSaveClick: p,
			privacySelector: i.jsx(b("CometPrivacySelectorForScope.react"), {
				onPrivacyChange: n,
				renderLocation: "COMET_PROFILE_ABOUT_PAGE",
				scope: j
			}),
			saveDisabled: q,
			children: i.jsx(b("ProfileCometHubsTypeahead.react"), {
				isDisabled: q,
				label: g._("T\u1ec9nh\/Th\u00e0nh ph\u1ed1 hi\u1ec7n t\u1ea1i"),
				onChange: a,
				section: "CURRENT_CITY",
				testid: void 0,
				value: m
			})
		})
	}
}), null);