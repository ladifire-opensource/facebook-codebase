__d("PageInsightsMetricTimeSeries.react", ["BUIInsightsHoverCardChart.react", "BUIInsightsLineAreaChart.react", 
	"PageInsightsMetricTimeSeriesHelper.react", "React", "RelayModern", "View", "cxMargin", "immutable", 
	"withValidationMetricLine", "PageInsightsMetricTimeSeries_data.graphql"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = b("immutable").OrderedSet,
		j = 242,
		k = 58,
		l = "line_";
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				auxiliaryItems: i()
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.render = function() {
			var a, b;
			a = (a = this.props) == null ? void 0 : a.data;
			var c = [];
			b = (a == null ? void 0 : (b = a.values[0]) == null ? void 0 : b.breakdown_values.length) || 0;
			for (var d = 0; d < b; d++) c.push(l + d);
			d = this.timeSeriesDataFormatter(c, a == null ? void 0 : a.values);
			return this.getLine(c, (b = this.props) == null ? void 0 : (a = b.data) == null ? void 0 : a.breakdown_labels, ((c = this.props) == null ? void 0 : (b = c.data) == null ? void 0 : b.metric_label) || "", d, this.state.auxiliaryItems, this.props.queryParams)
		};
		d.getLine = function(a, c, d, e, f, g) {
			var l = this;
			if (a == null || c == null) return h.jsx(b("View"), {});
			var m = a.length === 0,
				n = null,
				o = b("PageInsightsMetricTimeSeriesHelper.react").PageInsightsMetricPlotBuilder(a, e);
			m || (n = function(a) {
				var c = a.data.end_time.value;
				a = e.find(function(a) {
					return a.end_time === c
				});
				l.setState({
					auxiliaryItems: i([{
						key: d,
						label: d,
						value: a != null ? b("PageInsightsMetricTimeSeriesHelper.react").NumberWithCommas(a.total) : "0"
					}])
				})
			});
			return this.lineChart({
				height: k,
				width: j,
				styles: babelHelpers["extends"]({
					'axis[orientation="horizontal"]': {
						height: 0
					},
					'axis[orientation="vertical"]': {
						width: 0
					},
					chart: {
						padding: 5
					},
					gridline: {
						visibility: "hidden"
					},
					point: {
						radius: 0
					}
				}, b("PageInsightsMetricTimeSeriesHelper.react").PageInsightsMetricMutiLineStyleBuilder(a, e)),
				schema: b("PageInsightsMetricTimeSeriesHelper.react").PageInsightsMetricSchemaBuilder(a),
				plotX: o[0],
				plotY: [o[1]],
				onMouseMove: n,
				hoverCardProps: {
					auxiliaryItems: f,
					isHoverCardActionable: !1,
					hoverCardPosition: "above",
					titleKey: "end_time",
					displayAllSeries: !0,
					formatterFactory: b("PageInsightsMetricTimeSeriesHelper.react").PageInsightsHoverCardNumberFormatter,
					items: i(b("PageInsightsMetricTimeSeriesHelper.react").PageInsightsMetricHoverCardItemsBuilder(a, c, d))
				},
				data: e,
				queryParams: g
			})
		};
		d.timeSeriesDataFormatter = function(a, b) {
			if (a == null || b == null || b.length <= 0) return [];
			var c = Math.min(b[0].breakdown_values.length, a.length);
			b = b.map(function(b) {
				var d = {};
				for (var e = 0; e < c; e++) d[a[e]] = b.breakdown_values[e];
				d.total = b.total || 0;
				d.end_time = b.end_time || 0;
				return d
			});
			return b
		};
		d.lineChart = function(a) {
			var c = a.hoverCardProps,
				d = a.data;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["hoverCardProps", "data"]);
			if (d.length === 0) return null;
			a = h.jsx(m, babelHelpers["extends"]({}, a, {
				data: d
			}));
			c && (a = h.jsx(b("BUIInsightsHoverCardChart.react"), babelHelpers["extends"]({}, c, {
				children: a
			})));
			return h.jsx("div", {
				className: "_3-8z",
				children: a
			})
		};
		return c
	}(h.Component);
	var m = b("withValidationMetricLine")(b("BUIInsightsLineAreaChart.react"), {
		queryFetcher: function(a) {
			return a.queryParams
		},
		valueFetcher: function(a) {
			return b("immutable").List(a.data)
		}
	});
	c = b("RelayModern").createFragmentContainer(a, {
		data: g !== void 0 ? g : g = b("PageInsightsMetricTimeSeries_data.graphql")
	});
	e.exports = c
}), null);