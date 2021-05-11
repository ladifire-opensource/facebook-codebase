__d("useCometSearchTypeaheadBaseDataSourceFetchResolver", ["React", "debounce", "gkx", 
	"recoverableViolation", "useCometSearchTypeaheadBaseDataSourceFetchResolverCache", 
	"useCometSearchTypeaheadBaseDataSourceFetchResolverNetwork", "requireCond", "cr:1288372"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 8;

	function a(a, c) {
		var d = a.dataSource,
			e = a.dataSourceFetchConfigParams;
		e = e === void 0 ? {} : e;
		var f = e.renderLimit,
			i = f === void 0 ? h : f;
		f = e.shouldDebounceNetwork;
		var j = f === void 0 ? !0 : f,
			k = a.onResolvePayload,
			l = g.useRef(b("debounce")(function (a) {
				return a()
			})),
			m = b("useCometSearchTypeaheadBaseDataSourceFetchResolverCache")({
				dataSource: d
			});
		e = b("useCometSearchTypeaheadBaseDataSourceFetchResolverNetwork")({
			dataSource: d
		});
		f = e[0].isLoading;
		var n = e[1];

		function o() {
			var a = !1;

			function e(c, d) {
				var e = d.isTraceComplete;
				d = d.source;
				try {
					a || k(c, {
						isTraceComplete: e,
						source: d
					})
				} catch (c) {
					a || b("recoverableViolation")("Failed to resolve fetched payload", "search")
				}
			}

			function f(a) {
				var c = a.requestParams,
					f = a.source;
				if (typeof d.fetchCache === "function" && ["all", "cache"].includes(f)) {
					a = m({
						onResolvePayload: function (a) {
							e(a, {
								isTraceComplete: a.entries.length >= i,
								source: "cache"
							});
							if (b("gkx")("1265894")) {
								var c = f === "all" ? ["all", "cache"] : ["cache"];
								b("cr:1288372") && b("cr:1288372")(c, a)
							}
						},
						requestParams: c
					});
					a = a;
					a = a.entries;
					if (a.length >= i) return
				}
				if (typeof d.fetchNetwork === "function" && ["all", "network"].includes(f)) {
					var g = function () {
						return n({
							onResolvePayload: function (a) {
								e(a, {
									isTraceComplete: !0,
									source: a.entries.length > 0 ? "network" : "network-no-results"
								});
								if (b("gkx")("1265894")) {
									var c = f === "all" ? ["all", "network"] : ["network"];
									b("cr:1288372") && b("cr:1288372")(c, a)
								}
							},
							requestParams: c
						})
					};
					Boolean(j) ? l.current(function () {
						return g()
					}) : g()
				}
			}
			c != null && f(c);
			var g = l.current;
			return function () {
				a = !0, g.reset()
			}
		}
		g.useEffect(o, [c]);
		return [{
			isLoading: f
		}]
	}
}), null);