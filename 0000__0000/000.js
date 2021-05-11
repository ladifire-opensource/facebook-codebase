__d("CometRootSSRClient", ["requireCond", "cr:1221377", "cr:1540330", "CometProductAttribution", "CometNavigationTracing", "CometRootInit", "CometSSRContentInjector", "cr:683059", "React", "ReactDOMComet", "gkx", "unrecoverableViolation", "uuid"], (function (a, b, c, d, e, f) {
	"use strict";
	f.initRoute = a;
	var g = b("cr:1221377").getDarkModePreference,
		h = b("cr:1221377").toggleDarkModeRootClass,
		i = b("React");

	function a(a, c, d, e, f, j) {
		var k = b("uuid")();
		b("cr:1540330") != null && b("cr:1540330").init();
		b("CometNavigationTracing").traceInitialLoad(k, d, e, function (l) {
			var m = document.getElementById(c);
			if (m == null) throw b("unrecoverableViolation")("React root mount point not found", "comet_infra");
			b("cr:683059") != null && b("cr:683059").observeMutation(m);
			var n = b("gkx")("832370") ? b("ReactDOMComet").createBlockingRoot(m, {
					hydrate: !0
				}) : b("ReactDOMComet").createRoot(m, {
					hydrate: !0
				}),
				o = g();
			h(o);
			var p = {
				current: !1
			};
			b("CometSSRContentInjector").init(m, l, {
				onContentInjected: function () {
					if (p.current === !1) {
						var a = document.querySelector(".suspended-feed");
						a && (b("ReactDOMComet").unstable_scheduleHydration(a), p.current = !0)
					}
				}
			});
			b("CometRootInit").init(e);
			b("CometRootInit").initClient(d, e, j, b("CometProductAttribution").getProductAttributionFromRoute(e, "via_cold_start"));
			b("CometRootInit").initPreloaders(f);
			o = a.buildRootComponent(e, k, j);
			l.addMarkerPoint("reactStart", "AppTiming");
			n.render(i.jsx(o, {
				rootElement: m
			}))
		})
	}
}), null);