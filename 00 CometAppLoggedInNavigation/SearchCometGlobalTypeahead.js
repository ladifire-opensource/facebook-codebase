__d("SearchCometGlobalTypeahead.react", ["fbt", "Actor", "BaseTypeahead.react", "CometErrorBoundary.react", "CometRelay", "CometSearchTypeaheadBaseErrorFallback.react", "Random", "React", "SearchCometGlobalTypeaheadDataSource", "SearchCometGlobalTypeaheadDataSourceWithCoronaVirusAlert", "SearchCometGlobalTypeaheadInputStrategy.react", "SearchCometGlobalTypeaheadLayoutContextualStrategy.react", "SearchCometGlobalTypeaheadViewStrategy.react", "SearchCometHashtagExperiments", "SearchCometHashtagUtil", "gkx", "requireCond", "searchCometGlobalTypeahead.config", "searchCometTypeaheadODSLogFocusEvent", "useCometSearchRecentDataSourceContextDecorator", "useCometSearchTypeaheadBaseNavigate", "useCometSearchTypeaheadLoggingProvider", "useCometSearchTypeaheadTraceProvider", "useCometTypeaheadBaseStateQueryString", "useSearchCometGlobalSERPRouteUrlBuilder", "useSearchCometGlobalTypeaheadEntityBootstrap", "useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry", "useSearchCometHashtagRouteUrlBuilder", "useStable", "withSearchCometGlobalTypeaheadCleanStateOnEntrySelection", "withSearchCometGlobalTypeaheadFocusKeyboardShortcut", "withSearchCometTypeaheadBaseNavigationDecorator", "withSearchCometTypeaheadTraceEndReasonDecorator", "cr:1788640"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React"),
		i = (c = b("cr:1788640")) != null ? c : function () {
			return null
		};

	function a(a) {
		var c, d = a.inputXStyle,
			e = a.onFocus,
			f = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["inputXStyle", "onFocus", "queryString"]);
		f = b("useCometTypeaheadBaseStateQueryString")(f);
		var k = f[0];
		f = f[1];
		var l = b("useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry")({
				shouldGenerateBootstrapEntityModuleParamsForQuery: !0
			}),
			m = b("useSearchCometGlobalSERPRouteUrlBuilder")(),
			n = b("useSearchCometHashtagRouteUrlBuilder")(),
			o = b("useCometSearchTypeaheadBaseNavigate")(),
			p = b("Actor").useActor(),
			q = p[0],
			r = b("useCometSearchTypeaheadLoggingProvider")("search_global");
		p = b("useCometSearchTypeaheadTraceProvider")(r);
		var s = b("CometRelay").useRelayEnvironment(),
			t = h.useMemo(function () {
				return b("gkx")("1351659") ? new(b("SearchCometGlobalTypeaheadDataSourceWithCoronaVirusAlert"))(b("searchCometGlobalTypeahead.config"), q, s) : new(b("SearchCometGlobalTypeaheadDataSource"))(b("searchCometGlobalTypeahead.config"), q, s)
			}, [q, s]),
			u = b("useSearchCometGlobalTypeaheadEntityBootstrap")(),
			v = u.getParamsForQuery,
			w = u.load,
			x = u.logLoadStatus,
			y = b("useCometSearchRecentDataSourceContextDecorator")(t);
		u = h.useMemo(function () {
			return [y, {
				decorate: b("withSearchCometGlobalTypeaheadFocusKeyboardShortcut")
			}]
		}, [y]);
		h.useEffect(function () {
			t.bootstrap()
		}, [t]);
		var z = h.useCallback(function () {
				var a = 2;
				b("Random").coinflip(a) && b("searchCometTypeaheadODSLogFocusEvent")("comet.ta_global_event_focus", !0, a);
				w();
				e && e()
			}, [w, e]),
			A = h.useCallback(function (a) {
				var b = a.getMetaData();
				b = b == null ? void 0 : b.markers;
				var c = b != null && b.has("entity");
				b = b != null && b.has("direct_nav");
				x();
				var d = l({
					entry: a,
					queryString: k,
					typeaheadSessionID: r.getSessionID()
				});
				a = j(a, d, c, b);
				o(a, c ? "pushview" : "tabview")
			}, [x, r, o, k, l]),
			B = h.useCallback(function (a) {
				var c;
				c = (c = v(a)) != null ? c : {};
				var d = c.highConfidenceResult,
					e = c.preloadedEntityIDs;
				c = c.preloadedEntityType;
				x();
				var f = b("SearchCometHashtagUtil").getHashtagTag(a);
				b("SearchCometHashtagExperiments").hasTypeaheadRedirection() && f != null ? f = n({
					entryPointAction: "SEARCH_BOX",
					exploreEntryPoint: k === "" ? 3 : 4,
					hashtag: f,
					typeaheadSessionID: r.getSessionID()
				}) : f = m({
					entryPointAction: "SEARCH_BOX",
					highConfidenceResult: d,
					preloadedEntityIDs: e,
					preloadedEntityType: c,
					query: a,
					typeaheadSessionID: r.getSessionID()
				});
				o(f)
			}, [v, n, x, r, o, k, m]),
			C = b("useStable")(function () {
				return b("withSearchCometTypeaheadTraceEndReasonDecorator")(b("withSearchCometGlobalTypeaheadCleanStateOnEntrySelection")(b("withSearchCometTypeaheadBaseNavigationDecorator")(b("BaseTypeahead.react"))))
			});
		c = (c = i()) != null ? c : g._("T\u00ecm ki\u1ebfm tr\u00ean Facebook");
		return h.jsx(b("CometErrorBoundary.react"), {
			fallback: function () {
				return h.jsx(b("CometSearchTypeaheadBaseErrorFallback.react"), {})
			},
			children: h.jsx(C, babelHelpers["extends"]({}, a, {
				dataSource: t,
				decorators: u,
				inputExtraProps: {
					hideIconOnFocus: !0,
					size: "large",
					xstyle: d
				},
				inputStartContent: a.inputStartContent,
				inputStrategyRenderer: b("SearchCometGlobalTypeaheadInputStrategy.react"),
				label: g._("T\u00ecm ki\u1ebfm tr\u00ean Facebook"),
				layoutStrategyRenderer: b("SearchCometGlobalTypeaheadLayoutContextualStrategy.react"),
				loggingProvider: r,
				onChange: f,
				onFocus: z,
				onPressEntry: A,
				onSelectFreeformQuery: B,
				placeholder: c,
				queryString: k,
				testid: void 0,
				traceProvider: p,
				viewStrategyRenderer: b("SearchCometGlobalTypeaheadViewStrategy.react")
			}))
		})
	}

	function j(a, b, c, d) {
		a = a.getRawData();
		var e;
		if (a != null && a.type === "recent" && c) {
			e = a == null ? void 0 : (c = a.profile) == null ? void 0 : c.url
		}
		if (a != null && (a.type === "keyword" || a.type === "bootstrap") && d) {
			e = a == null ? void 0 : (c = a.structuredInfo) == null ? void 0 : (d = c.direct_nav_result) == null ? void 0 : d.link_url
		}
		return (a = e) != null ? a : b
	}
}), null);