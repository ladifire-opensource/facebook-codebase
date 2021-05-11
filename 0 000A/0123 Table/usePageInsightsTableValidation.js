__d("usePageInsightsTableValidation", ["ExternalMetricConsumptionValidationEventFalcoEvent", "FBLogger", "MetricConsumptionValidationInsightsTableParams", "MetricValidationGKs", "Random", "immutable", "react"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = g || b("react"),
		i = 10;

	function a(a) {
		var c = a.pageID,
			d = a.metrics,
			e = a.values,
			f = a.component,
			g = a.productGroup,
			j = a.objectIDType,
			k = a.metricType,
			l = a.preset;
		h.useEffect(function() {
			if (!b("MetricValidationGKs").passMetricValidationGK(f)) return;
			if (!b("Random").coinflip(i)) return;
			var a = Object.keys(e.toJS());
			try {
				var h = b("MetricConsumptionValidationInsightsTableParams").createInsightsTableQueryParameters({
					product_group: g,
					surface: "PAGE_INSIGHTS_WEB",
					component: f,
					root_object_id: c,
					object_id_type: j,
					object_ids: b("immutable").List(a),
					metric_type: k == void 0 ? "UNIFIED_API_METRIC" : k,
					query_type: "INSIGHTS_TABLE",
					error_type: null,
					error_message: null,
					metrics: d,
					preset: l == void 0 ? "LIFETIME" : l
				});
				b("ExternalMetricConsumptionValidationEventFalcoEvent").log(function() {
					return b("MetricConsumptionValidationInsightsTableParams").createFalcoEventShapeForInsightsTableQuery(h, e)
				})
			} catch (a) {
				b("FBLogger")("metric-ui-validation").catching(a).warn("Error constructing validation params for PageInsightsTable")
			}
		}, [e, d, f, j, k, l, c, g])
	}
}), null);