__d("PageInsightsInsightsTable.react", ["cx", "InsightsTableHeaderCell.react", "joinClasses", "react"], (function(a, b, c, d, e, f, g) {
	"use strict";
	f.createColumn = a;
	var h, i = h || b("react"),
		j = {
			FITTED_COLUMN: 1,
			FLUID_COLUMN: 2
		};
	f.INSIGHTS_TABLE_COLUMN = j;

	function a(a, b) {
		return {
			component: a,
			type: b ? b : j.FLUID_COLUMN
		}
	}
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.hasColumns = function() {
			return this.props.columns != null && this.props.columns.length > 0
		};
		d.hasHeader = function() {
			return this.props.header != null && this.props.header.length > 0
		};
		d.getColumnsCount = function() {
			if (this.hasColumns()) {
				var a;
				return ((a = this.props) == null ? void 0 : (a = a.columns) == null ? void 0 : a.length) || 0
			}
			if (this.hasHeader()) {
				return ((a = this.props) == null ? void 0 : (a = a.header) == null ? void 0 : a.length) || 0
			}
			return this.props.rows && this.props.rows.length ? Math.max.apply(null, this.props.rows.map(function(a) {
				return a ? a.length : 0
			})) : 0
		};
		d.getColumnComponents = function() {
			if (this.props.columns) return this.props.columns.map(function(a, b) {
				return a.component
			})
		};
		d.render = function() {
			var a, c = 0,
				d = this.getColumnsCount(),
				e = (a = this.props.orientation) != null ? a : "vertical",
				f = null;
			a = this.props.rows && this.props.rows.map(function(a, b) {
				var g;
				a && (c++, f = a.map(function(c, f) {
					var g = this.hasColumns() && f < this.props.columns.length && this.props.columns[f].type === j.FITTED_COLUMN;
					g = "_5k49" + (e === "horizontal" ? " _9b5j" : "") + (e === "vertical" ? " _9b5k" : "") + (b === 0 && this.hasHeader() ? " _5k4b" : "") + (g ? " _4b7m" : "");
					var h = f === a.length - 1 ? d - f : 1;
					return i.jsx("td", {
						className: g,
						colSpan: h,
						children: c
					}, f)
				}, this));
				g = "_5k4c" + (c % 2 && ((g = this.props.useRowStripe) != null ? g : !0) ? " _5k4a" : "");
				return i.jsx("tr", {
					className: g,
					children: f
				}, b)
			}, this);
			var g = null;
			this.hasColumns() === !0 && (g = i.jsx("thead", {
				children: i.jsx("tr", {
					className: "_5k47",
					children: this.getColumnComponents()
				})
			}));
			if (this.hasHeader() === !0) {
				var h, k, l = this.props.headerLabelClass;
				h = ((h = this.props) == null ? void 0 : h.header) || [];
				var m = (k = this.props.productTaggingHeader) != null ? k : !1;
				k = h.map(function(a, c) {
					return m ? i.jsx("th", {
						className: "_9iea",
						children: i.jsx("span", {
							className: "_9ieb",
							children: a
						})
					}) : i.jsx(b("InsightsTableHeaderCell.react"), {
						labelClass: l,
						children: a
					}, c)
				});
				g = i.jsx("thead", {
					children: i.jsx("tr", {
						className: "_5k47",
						children: k
					})
				})
			}
			h = b("joinClasses")("_5k45" + (this.props.bordered === !0 ? " _5k46" : ""), this.props.className);
			return i.jsxs("table", {
				className: h,
				children: [g, i.jsx("tbody", {
					children: a
				})]
			})
		};
		return c
	}(i.PureComponent);
	f.PageInsightsInsightsTable = c
}), null);