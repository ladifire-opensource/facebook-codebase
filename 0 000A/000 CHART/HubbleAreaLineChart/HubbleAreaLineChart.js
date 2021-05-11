__d("HubbleAreaLineChart", ["fbt", "HubbleContext", "HubbleStyle", "HubbleUtils", 
	"InsightsBenchmarkLayer.react", "SpectrumBaseNumberScale", "SpectrumBrush", 
	"SpectrumChart", "SpectrumLines", "SpectrumMarker", "SpectrumNumberUtilities", 
	"SpectrumStackedAreas", "SpectrumTooltipMenu", "SpectrumVerticalLines", "SpectrumXAxis", 
	"SpectrumYAxis", "d3-old/time/day", "react"], (function(a, b, c, d, e, f, g) {
	var h, i = h || b("react"),
		j = Math.ceil(b("HubbleStyle").LEFT_COL_CHART_WIDTH / 8),
		k = -1,
		l = 1;
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d, e;
			for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++) g[h] = arguments[h];
			return (d = e = a.call.apply(a, [this].concat(g)) || this, e.state = {
				expandDirection: (c = e.props.defaultExpandDirection) != null ? c : 0
			}, e.isTodayInDomain = function() {
				return +e.props.domain[1] === +b("HubbleContext").get("todayReportTime")
			}, e.$1 = function(a) {
				return Math.max(Math.ceil(a / j), 1)
			}, e.$3 = function(a) {
				if (!e.$2()) return a;
				var c, d, f = [],
					g = e.$1(a.length);
				if (e.state.expandDirection == k) {
					var h = Math.ceil(a.length / g);
					for (c = a.length - 1, d = h - 1; c >= 0; c -= g) f[d] = {
						partial: c === a.length - 1 && e.isTodayInDomain(),
						x: b("d3-old/time/day").utc.offset(e.props.domain[1], (d - h) * g),
						y: a[c]
					}, --d
				} else
					for (c = 0, d = 0; c < a.length; c += g) f[d] = {
						partial: c === a.length - 1 && e.isTodayInDomain(),
						x: b("d3-old/time/day").utc.offset(e.props.domain[0], d * g),
						y: a[c]
					}, ++d;
				return f
			}, e.$2 = function() {
				return Array.isArray(e.props.domain)
			}, d) || babelHelpers.assertThisInitialized(e)
		}
		var d = c.prototype;
		d.UNSAFE_componentWillReceiveProps = function(a) {
			if (!Array.isArray(this.props.domain) || !Array.isArray(a.domain)) return;
			var b = +this.props.domain[0],
				c = +this.props.domain[1],
				d = +a.domain[0];
			a = +a.domain[1];
			var e = this.state.expandDirection;
			b == d && c != a ? e = l : b != d && c == a && (e = k);
			this.setState({
				expandDirection: e
			})
		};
		d.render = function() {
			var a = Array.isArray(this.props.areas) && !!this.props.areas.length,
				c = Array.isArray(this.props.lines) && !!this.props.lines.length;
			if (!a && !c) return null;
			var d = this.props.benchmarks,
				e = this.props.partialValue,
				f = this.props.valueX,
				h = this.props.valueY;
			this.$2() && (e = e || b("HubbleUtils").partialValue, f = f || b("HubbleUtils").valueX, h = h || b("HubbleUtils").valueY);
			var j = 0,
				l = null,
				m = null,
				n = null;
			a && (m = this.props.areas.map(this.$3), j = m[0].length);
			c && (n = this.props.lines.map(this.$3), j = Math.max(j, n[0].length));
			this.props.areaOffsets && (l = this.$3(this.props.areaOffsets).map(b("HubbleUtils").valueY));
			a = a ? i.jsx(b("SpectrumStackedAreas"), {
				base: this.props.base,
				data: m,
				offset: l,
				partialValue: e,
				titles: this.props.areaTitles,
				valueX: f,
				valueY: h
			}) : null;
			m = c ? i.jsx(b("SpectrumLines"), {
				data: n,
				showGuide: this.props.showGuide,
				onClick: this.props.onClick,
				partialValue: e,
				titles: this.props.lineTitles,
				valueX: f,
				valueY: h
			}) : null;
			l = this.props.markers;
			Array.isArray(l) && !!l.length && (l = l.map(function(a, c) {
				return i.jsx(b("SpectrumMarker"), {
					x: a.x,
					y: a.y,
					children: a.label
				}, "marker_" + c)
			}));
			var o;
			this.props.onSelection && (o = g._("Click or drag to select"));
			c = this.props.domain;
			if (Array.isArray(c)) {
				n = b("d3-old/time/day").range(this.props.domain[0], this.props.domain[1]).length;
				e = this.$1(n);
				c = c.slice();
				f = n - (1 + e * (j - 1));
				f && (this.state.expandDirection == k ? c[0] = b("d3-old/time/day").utc.offset(c[0], f) : c[1] = b("d3-old/time/day").utc.offset(c[1], -1 * f))
			}
			h = null;
			this.props.vlines && (h = i.jsx(b("SpectrumVerticalLines"), {
				ticks: j
			}));
			return i.jsxs(b("SpectrumChart"), {
				domain: c,
				height: this.props.height,
				scaleY: this.props.scaleY || b("SpectrumBaseNumberScale")(0, b("SpectrumNumberUtilities").shortIntegerFormatterWithoutRounding),
				scaleYHasDomain: this.props.scaleYHasDomain,
				theme: this.props.theme,
				width: this.props.width,
				onRequestFocus: this.props.onRequestFocus,
				children: [a, m, l, i.jsx(b("SpectrumBrush"), {
					onSelection: this.props.onSelection,
					selection: this.props.selection
				}), i.jsx(b("SpectrumXAxis"), {
					secondaryTicks: this.props.secondaryTicks,
					ticks: j
				}), h, i.jsx(b("SpectrumYAxis"), {}), i.jsx(b("InsightsBenchmarkLayer.react"), {
					benchmarks: d,
					visible: !!d
				}), i.jsx(b("SpectrumTooltipMenu"), {
					actionContent: o,
					customFormat: this.props.customTooltipFormat
				})]
			})
		};
		return c
	}(i.Component);
	a.defaultProps = {
		scaleYHasDomain: !1
	};
	e.exports = a
}), null);