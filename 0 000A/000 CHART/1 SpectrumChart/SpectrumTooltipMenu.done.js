__d("SpectrumTooltipMenu", ["fbt", "React", "SpectrumTooltip", "SpectrumTooltipAction", "SpectrumTooltipData", "SpectrumTooltipDescription", "SpectrumTooltipFooter", "SpectrumUtilities"], (function(a, b, c, d, e, f, g) {
	var h = b("React");

	function i(a) {
		a.stopPropagation()
	}

	function j(a, b) {
		return a == b ? a : g._("{from} \u0111\u1ebfn {to}", [g._param("from", a), g._param("to", b)])
	}
	var k = 20;
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.state = {
				flip: !1
			}, d.getTooltipFormat = function(a) {
				if (a.tooltipFormat) return a.tooltipFormat();
				return a.tickFormat ? a.tickFormat(k) : function(a) {
					return a
				}
			}, d.onCalculateTooltipWidth = function(a) {
				var c = d.props.focus.rect.right,
					e = d.props.focus.rect.left,
					f = b("SpectrumUtilities").getOuterRange(d.props.scaleX);
				c = f[1] - a - c < e - a - f[0];
				d.state.flip != c && d.setState({
					flip: c
				})
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props.focus;
			if (!a) return h.jsx("div", {});
			var c = this.props.scaleX,
				d = this.props.scaleY,
				e = a.rangeX ? a.rangeX[0] : a.valueX,
				f = a.rangeX ? a.rangeX[1] : a.valueX,
				k = this.getTooltipFormat(c),
				l = this.getTooltipFormat(d);
			c = a.title || a.label;
			d = a.valueY == null ? "" : l(a.valueY);
			var m = function(a, b) {
					return Number(a.toFixed(b))
				},
				n = a.total ? a.valueY * 100 / a.total : null;
			m = n ? g._("{percent}\u0025", [g._param("percent", m(n, 1))]) : null;
			if (a.displayFooter === void 0 || a.displayFooter) var o = j(k(e), k(f));
			var p;
			n = null;
			this.props.actionContent && e == f && (n = h.jsx(b("SpectrumTooltipAction"), {
				children: this.props.actionContent
			}));
			a.fixed && this.props.children && (p = h.jsx(b("SpectrumTooltipFooter"), {
				children: h.jsx("div", {
					onMouseDown: i,
					children: this.props.children
				})
			}));
			f = a.rect.top;
			var q = a.rect.bottom,
				r = a.rect.right;
			this.state.flip && (r = a.rect.left);
			if (this.props.customFormat) {
				e = babelHelpers["extends"]({}, this.props.focus, {
					xValueString: k(e),
					xRangeString: o,
					yValueString: d
				});
				e.allData && (e.allData = e.allData.map(function(a, b) {
					a.xValueString = k(a.valueX);
					a.yValueString = l(a.valueY);
					return a
				}));
				typeof a.comparisonValueY !== "undefined" && (e.comparisonTitle = a.comparisonTitle, e.comparisonYValueString = a.comparisonValueY == null ? "" : l(a.comparisonValueY));
				a = h.jsx(b("SpectrumTooltipDescription"), {
					children: this.props.customFormat(e)
				})
			} else a = [h.jsx(b("SpectrumTooltipDescription"), {
				children: c
			}, "desc"), h.jsx(b("SpectrumTooltipData"), {
				children: d
			}, "data"), h.jsx(b("SpectrumTooltipDescription"), {
				children: this.props.showPercentTotal ? m : null
			}, "percentTotal"), h.jsx(b("SpectrumTooltipDescription"), {
				children: o
			}, "foot")];
			return h.jsxs(b("SpectrumTooltip"), {
				x: r,
				y: (f + q) * .5,
				flip: this.state.flip,
				onCalculateWidth: this.onCalculateTooltipWidth,
				zIndex: this.props.zIndex,
				children: [a, p, n]
			})
		};
		return c
	}(h.Component);
	a.isChartLayer = !0;
	e.exports = a
}), null);