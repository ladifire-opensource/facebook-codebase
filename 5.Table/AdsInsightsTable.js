__d("AdsInsightsTable.react", ["cssVar", "cx", 
	"AdsColumnSizesFlexgrowEnabledAction", "AdsColumnSizesUpdateAction", "AdsInsightsColumnUtil",
	 "AdsInsightsScrollPositionEventEmitter", "AdsInsightsStatsTable.react", 
	 "AdsInsightsSummaryBreakdownTable.react", "AdsInsightsTableLoadingProgressBarContainer.react", 
	 "AdsInsightsViewAction", "AdsManagerNavigationGatingUtils", "FDSGeodesicThemeProvider.react",
	  "FixedDataTableWidthHelper", "React", "clamp", "emptyFunction", "immutable", "shallowCompare", 
	  "shallowEqual"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React");
	a = parseInt("20px", 10);
	var j = 40,
		k = parseInt("64px", 10),
		l = parseInt("44px", 10),
		m = [parseInt("32px", 10), parseInt("48px", 10), parseInt("64px", 10), parseInt("80px", 10)],
		n = l + a;

	function o(a) {
		var c = null,
			d = {};
		a.columnGroupsSpec.forEach(function (a) {
			a = b("AdsInsightsColumnUtil").getDerivedColumnConfig(a.columnGroup);
			c && c.emptyFooter && a.emptyFooter && c.fixed == a.fixed && (d[c.id] = !0);
			c = a
		});
		return {
			columnsWithoutFooterBorder: d
		}
	}
	c = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c) {
			var d;
			d = a.call(this, c) || this;
			d.$4 = null;
			d.$5 = function (a) {
				d.setState({
					mainTableContentHeight: a || n
				})
			};
			d.$6 = function (a) {
				d.setState({
					summaryTableContentHeight: a || 0
				})
			};
			d.$9 = function (a, c) {
				var e = "",
					f = 0,
					g = [],
					h = 1;
				d.props.columnGroupsSpec.forEach(function (a) {
					var i = a.columnGroup;
					a = a.columns;
					var j = i === c;
					j && (e = i, h = a.length, f = a.reduce(function (a, b) {
						return a + d.props.columnSizes.get(b).width
					}, 0));
					a.forEach(function (a) {
						var c = b("AdsInsightsColumnUtil").getDerivedColumnConfig(a);
						g.push(babelHelpers["extends"]({
							columnGroup: i,
							id: a,
							isResizable: c.isResizable,
							shouldResize: j
						}, d.$10(c)))
					})
				});
				var i = b("AdsInsightsColumnUtil").resizeColumnGroup(d.props.fixedDataTableProps.width, g, Math.max(a, h * j));
				b("AdsColumnSizesUpdateAction").dispatch({
					sizes: b("immutable").Map(i),
					columnGroup: e,
					oldWidth: f,
					newWidth: a
				}, {
					line: "497",
					module: "AdsInsightsTable.react.js"
				});
				d.setState({
					isColumnResizing: !1
				})
			};
			d.$12 = function (a, b) {
				d.$3.get(a) !== b && (d.$3 = d.$3.set(a, b))
			};
			d.$8 = function (a) {
				d.setState({
					scrollToRow: a
				}, function () {
					return d.setState({
						scrollToRow: void 0
					})
				})
			};
			d.$10 = function (a) {
				return d.props.columnSizes.get(a.id)
			};
			d.state = babelHelpers["extends"]({}, o(c), {
				isColumnResizing: !1,
				lastWidth: c.fixedDataTableProps.width,
				mainTableContentHeight: 0,
				summaryTableContentHeight: k,
				groupHeaderLines: d.constructor.calculatePredictedHeaderLines(c),
				scrollToRow: void 0
			});
			d.$1 = {};
			d.$2 = {};
			d.$3 = b("immutable").Map();
			return d
		}
		c.calculatePredictedHeaderLines = function (a) {
			var c = a.view,
				d = a.columnSizes,
				e = a.columnGroupsSpec;
			a = a.fixedDataTableProps;
			c = c.benchmarkDerivedColumnIDs;
			c = !!c && c.size > 0 ? c : b("immutable").Set(e.map(function (a) {
				return a.columnGroup
			}));
			e = b("FixedDataTableWidthHelper").updateSizeWithFlexWidth(d, a.width);
			return b("AdsInsightsColumnUtil").getPredictedLines(c, e)
		};
		c.getDerivedStateFromProps = function (a, b) {
			return babelHelpers["extends"]({}, b, o(a))
		};
		var d = c.prototype;
		d.shouldComponentUpdate = function (a, c) {
			if (a.rowDescriptorGettersArePure) {
				var d = b("shallowEqual")(babelHelpers["extends"]({}, this.props, {
						fixedDataTableProps: null
					}), babelHelpers["extends"]({}, a, {
						fixedDataTableProps: null
					})) && b("shallowEqual")(this.props.fixedDataTableProps, a.fixedDataTableProps),
					e = b("shallowEqual")(babelHelpers["extends"]({}, this.state, {
						columnsWithoutFooterBorder: null
					}), babelHelpers["extends"]({}, c, {
						columnsWithoutFooterBorder: null
					})) && b("shallowEqual")(this.state.columnsWithoutFooterBorder, c.columnsWithoutFooterBorder);
				return !(d && e)
			}
			return b("shallowCompare")(this, a, c)
		};
		d.getMainTableHeightWhenSummaryTableIsPresent = function (a, c) {
			a = a.fixedDataTableProps;
			var d = c.mainTableContentHeight;
			c = c.summaryTableContentHeight;
			a = a.ownerHeight || a.maxHeight;
			return b("clamp")(a - c, n, d)
		};
		d.componentDidMount = function () {
			this.$7(), this.$4 = b("AdsInsightsScrollPositionEventEmitter").addListener(this.$8)
		};
		d.componentWillUnmount = function () {
			this.$4 && this.$4()
		};
		d.componentDidUpdate = function () {
			var a = this.props,
				c = a.columnGroupsSpec;
			a = a.fixedDataTableProps;
			var d = b("AdsInsightsColumnUtil").getDerivedColumnConfig;
			if (a.width > this.state.lastWidth) {
				a = c.map(function (a) {
					return a.columns.filter(function (a) {
						return !d(a).isResizable
					})
				}).reduce(function (a, b) {
					return a.concat(b)
				}, []);
				b("AdsColumnSizesFlexgrowEnabledAction").dispatch({
					blacklist: a
				}, {
					line: "288",
					module: "AdsInsightsTable.react.js"
				})
			}
			c = this.props.fixedDataTableProps.width;
			this.state.lastWidth !== c && this.setState({
				lastWidth: c
			});
			this.$7()
		};
		d.render = function () {
			var a = this.props,
				c = a.columnGroupsSpec,
				d = a.view;
			a = a.fixedDataTableProps;
			var e = d.benchmarkDerivedColumnIDs;
			e = !!e && e.size > 0;
			var f = m[b("clamp")(this.state.groupHeaderLines - 1, 0, 3)],
				g = e ? l : 0;
			g = f + g;
			var h = [],
				j = d.breakdowns.length !== 0;
			j = "_1uft _2i6r" + (j ? " _1ufu" : "") + (j ? "" : " _1ufw");
			f = babelHelpers["extends"]({}, a, {
				bufferRowCount: 0,
				getRowDescriptor: this.props.getRowDescriptor,
				getRowKey: this.props.getRowKey,
				getRowClassName: this.props.getRowClassName,
				groupHeaderHeight: f,
				headerHeight: e ? l : 0,
				isColumnResizing: this.state.isColumnResizing,
				onColumnResizeEndCallback: this.$9,
				rowHeight: d.breakdowns.length !== 0 ? this.props.subrowHeight : this.props.rowHeight,
				scrollToRow: this.state.scrollToRow
			});
			e = {
				allowCellsRecycling: !0,
				columnWidthGetter: this.$10,
				columnsWithoutFooterBorder: this.state.columnsWithoutFooterBorder
			};
			if (this.props.showSummaryBreakdownTable) {
				d = this.getMainTableHeightWhenSummaryTableIsPresent(this.props, this.state);
				var n = a.ownerHeight || a.maxHeight,
					o = babelHelpers["extends"]({}, f, {
						footerHeight: 0,
						maxHeight: d,
						onContentHeightChange: this.$5,
						overflowX: "hidden",
						overflowY: "hidden",
						scrollTop: 0
					});
				n = babelHelpers["extends"]({}, a, {
					getDescriptor: this.props.getSummaryBreakdownRowDescriptor,
					headerHeight: k,
					maxHeight: n - d,
					onColumnResizeEndCallback: b("emptyFunction"),
					onContentHeightChange: this.$6,
					rowHeight: this.props.subrowHeight,
					rowsCount: a.summaryBreakdownRowsCount
				});
				h.push(i.jsxs("div", {
					className: "_344y",
					style: {
						height: d
					},
					children: [this.$11(g), i.jsx(b("AdsInsightsStatsTable.react"), {
						columnGroupProps: e,
						columnGroupsSpec: c,
						containerConfig: this.props.containerConfig,
						fixedDataTableProps: o,
						ref: "statsTable",
						rowHeight: this.props.rowHeight,
						subrowHeight: this.props.subrowHeight,
						onDeleteKeyDown: this.props.onDeleteKeyDown,
						onDownKeyDown: this.props.onDownKeyDown,
						onGroupHeaderHeightChange: this.$12,
						onUpKeyDown: this.props.onUpKeyDown,
						onViewportChange: this.props.onViewportChange
					}, "main"), i.jsx("a", {
						className: "_344z",
						href: "#",
						onClick: this.$13
					})]
				}, "mask"));
				h.push(i.jsx(b("AdsInsightsSummaryBreakdownTable.react"), {
					columnGroupProps: e,
					columnGroupsSpec: c,
					containerConfig: this.props.containerConfig,
					fixedDataTableProps: n
				}, "summary"))
			} else {
				a = babelHelpers["extends"]({}, f, {
					footerHeight: this.props.showFooter ? k : 0
				});
				h.push(this.$11(g), i.jsx(b("AdsInsightsStatsTable.react"), {
					columnGroupProps: e,
					columnGroupsSpec: c,
					containerConfig: this.props.containerConfig,
					fixedDataTableProps: a,
					isRowLocked: this.props.isRowLocked,
					ref: "statsTable",
					rowHeight: this.props.rowHeight,
					subrowHeight: this.props.subrowHeight,
					onDeleteKeyDown: this.props.onDeleteKeyDown,
					onDownKeyDown: this.props.onDownKeyDown,
					onGroupHeaderHeightChange: this.$12,
					onUpKeyDown: this.props.onUpKeyDown,
					onViewportChange: this.props.onViewportChange
				}, "main"))
			}
			d = i.jsx("div", {
				className: j,
				children: h
			});
			return i.jsx(b("FDSGeodesicThemeProvider.react"), {
				children: d
			})
		};
		d.$11 = function (a) {
			if (this.props.allowShowProgressBar) return i.jsx("div", {
				className: "_g1y",
				style: {
					top: a
				},
				children: i.jsx(b("AdsInsightsTableLoadingProgressBarContainer.react"), {})
			}, "progressBar");
			else return null
		};
		d.$7 = function () {
			var a = this,
				c = this.props,
				d = c.columnGroupsSpec;
			c = c.view;
			c = c.benchmarkDerivedColumnIDs;
			c = !!c && c.size > 0 ? c : b("immutable").Set(d.map(function (a) {
				return a.columnGroup
			}));
			d = c.map(function (b) {
				return a.$3.get(b) || 1
			}).max() || 1;
			d !== this.state.groupHeaderLines && this.setState({
				groupHeaderLines: d
			})
		};
		d.$13 = function () {
			b("AdsInsightsViewAction").toggleSummaryBreakdown()
		};
		return c
	}(i.Component);
	e.exports = c
}), null);