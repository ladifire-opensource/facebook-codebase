__d("PageCometCreationRoot.react", ["CometErrorProjectContext", "CometRelay", 
	"CometRouteParams", "PageCometCreationFunnelLogger", "React", 
	"deferredLoadComponent", "requireDeferredForDisplay", "unrecoverableViolation", 
	"PageCometCreationRootQuery.graphql"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = b("deferredLoadComponent")(b("requireDeferredForDisplay")("PageCometCreationForm.react"));

	function a(a) {
		a = a.queries.pageCreationRootQueryReference;
		a = b("CometRelay").usePreloadedQuery(g !== void 0 ? g : g = b("PageCometCreationRootQuery.graphql"), a);
		a = a.viewer;
		if (a == null) throw b("unrecoverableViolation")("No viewer provided", "core_biz_growth");
		var c = b("CometRouteParams").useRouteParams(),
			d = String(c.ref_type);
		c = Boolean(c.should_lwi_redirect);
		var e = b("PageCometCreationFunnelLogger").usePageCreationFunnelLogger("start", d),
			f = h.useMemo(function() {
				return b("CometRelay").generateUniqueClientID()
			}, []);
		return h.jsx(b("CometErrorProjectContext").Provider, {
			value: "core_biz_growth",
			children: h.jsx(i, {
				pageCreateLogger: e,
				pageID: f,
				referrer: d,
				shouldLWIRedirect: c,
				viewer$key: a
			})
		})
	}
}), null);