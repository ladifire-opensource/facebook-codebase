__d("CometSearchInternalTypeaheadFetchProvider", ["CometSearchInternalTypeaheadFetchContext", "React", "useCometSearchInternalTypeaheadStateDispatcher", "useCometSearchTypeaheadBaseDataSourceFetch"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("CometSearchInternalTypeaheadFetchContext").Provider,
		h = b("React");

	function a(a) {
		var c = a.children,
			d = a.dataSource,
			e = a.dataSourceFetchConfigParams,
			f = a.onFetchEntries_DO_NOT_USE,
			i = a.traceProvider;
		a = b("useCometSearchInternalTypeaheadStateDispatcher")();
		var j = a.dispatchActiveEntries;
		a = b("useCometSearchTypeaheadBaseDataSourceFetch")({
			dataSource: d,
			dataSourceFetchConfigParams: e,
			onResolvePayload: h.useCallback(function (a, b) {
				var c;
				a = a.entries;
				var d = b.isTraceComplete;
				b = b.source;
				j((c = a) != null ? c : []);
				f && f(a);
				i && !i.isResolved() && (d && (b === "cache" && a.length >= i.getEntriesCountForVisualComplete() ? i.setEndReason("max_suggestions_reached") : b === "network" ? i.setEndReason("all_queries_completed") : b === "network-no-results" && i.setEndReason("all_queries_completed_no_network_results"), i.resolve()))
			}, [j, f, i])
		});
		d = a[0];
		var k = d.isLoading,
			l = d.source,
			m = a[1],
			n = a[2];
		e = h.useMemo(function () {
			return {
				fetch: m,
				isLoading: k,
				refetch: n,
				source: l
			}
		}, [m, k, n, l]);
		return h.jsx(g, {
			value: e,
			children: c
		})
	}
}), null);