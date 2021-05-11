if (self.CavalryLogger) {
	CavalryLogger.start_js(["T6IBU"]);
}

__d("HubbleTimeZoneDisclaimerStrings", ["fbt"], (function(a, b, c, d, e, f, g) {
	e.exports = {
		AD: g._("Ho\u1ea1t \u0111\u1ed9ng qu\u1ea3ng c\u00e1o \u0111\u01b0\u1ee3c b\u00e1o c\u00e1o theo m\u00fai gi\u1edd c\u1ee7a t\u00e0i kho\u1ea3n qu\u1ea3ng c\u00e1o c\u1ee7a b\u1ea1n."),
		PAGE: g._("Ho\u1ea1t \u0111\u1ed9ng th\u00f4ng tin chi ti\u1ebft \u0111\u01b0\u1ee3c b\u00e1o c\u00e1o theo m\u00fai gi\u1edd Th\u00e1i B\u00ecnh D\u01b0\u01a1ng."),
		PAGE_AND_AD: g._("Ho\u1ea1t \u0111\u1ed9ng th\u00f4ng tin chi ti\u1ebft \u0111\u01b0\u1ee3c b\u00e1o c\u00e1o theo m\u00fai gi\u1edd Th\u00e1i B\u00ecnh D\u01b0\u01a1ng. Ho\u1ea1t \u0111\u1ed9ng qu\u1ea3ng c\u00e1o \u0111\u01b0\u1ee3c b\u00e1o c\u00e1o theo m\u00fai gi\u1edd c\u1ee7a t\u00e0i kho\u1ea3n qu\u1ea3ng c\u00e1o.")
	}
}), null);
__d("LivingRoomInsightsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function() {
		function a() {
			this.$1 = {}
		}
		var c = a.prototype;
		c.log = function(a) {
			b("GeneratedLoggerUtils").log("logger:LivingRoomInsightsLoggerConfig", this.$1, b("Banzai").BASIC, a)
		};
		c.logVital = function(a) {
			b("GeneratedLoggerUtils").log("logger:LivingRoomInsightsLoggerConfig", this.$1, b("Banzai").VITAL, a)
		};
		c.logImmediately = function(a) {
			b("GeneratedLoggerUtils").log("logger:LivingRoomInsightsLoggerConfig", this.$1, {
				signal: !0
			}, a)
		};
		c.clear = function() {
			this.$1 = {};
			return this
		};
		c.getData = function() {
			return babelHelpers["extends"]({}, this.$1)
		};
		c.updateData = function(a) {
			this.$1 = babelHelpers["extends"]({}, this.$1, a);
			return this
		};
		c.setEvent = function(a) {
			this.$1.event = a;
			return this
		};
		c.setPageID = function(a) {
			this.$1.page_id = a;
			return this
		};
		c.setPostID = function(a) {
			this.$1.post_id = a;
			return this
		};
		c.updateExtraData = function(a) {
			a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
			b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
			this.$1 = babelHelpers["extends"]({}, this.$1, a);
			return this
		};
		c.addToExtraData = function(a, b) {
			var c = {};
			c[a] = b;
			return this.updateExtraData(c)
		};
		return a
	}();
	var g = {
		event: !0,
		page_id: !0,
		post_id: !0
	};
	e.exports = a
}), null);
__d("PageInsightsMonitoringTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function() {
		function a() {
			this.$1 = {}
		}
		var c = a.prototype;
		c.log = function(a) {
			b("GeneratedLoggerUtils").log("logger:PageInsightsMonitoringLoggerConfig", this.$1, b("Banzai").BASIC, a)
		};
		c.logVital = function(a) {
			b("GeneratedLoggerUtils").log("logger:PageInsightsMonitoringLoggerConfig", this.$1, b("Banzai").VITAL, a)
		};
		c.logImmediately = function(a) {
			b("GeneratedLoggerUtils").log("logger:PageInsightsMonitoringLoggerConfig", this.$1, {
				signal: !0
			}, a)
		};
		c.clear = function() {
			this.$1 = {};
			return this
		};
		c.getData = function() {
			return babelHelpers["extends"]({}, this.$1)
		};
		c.updateData = function(a) {
			this.$1 = babelHelpers["extends"]({}, this.$1, a);
			return this
		};
		c.setActorVC = function(a) {
			this.$1.actor_vc = a;
			return this
		};
		c.setAppID = function(a) {
			this.$1.app_id = a;
			return this
		};
		c.setCaller = function(a) {
			this.$1.caller = a;
			return this
		};
		c.setComponent = function(a) {
			this.$1.component = a;
			return this
		};
		c.setDesummarizationDrillDownName = function(a) {
			this.$1.desummarization_drill_down_name = a;
			return this
		};
		c.setDuration = function(a) {
			this.$1.duration = a;
			return this
		};
		c.setEntAsyncExportRunID = function(a) {
			this.$1.ent_async_export_run_id = a;
			return this
		};
		c.setEntExportFormatID = function(a) {
			this.$1.ent_export_format_id = a;
			return this
		};
		c.setEvent = function(a) {
			this.$1.event = a;
			return this
		};
		c.setException = function(a) {
			this.$1.exception = a;
			return this
		};
		c.setExportAsyncJobID = function(a) {
			this.$1.export_async_job_id = a;
			return this
		};
		c.setExportFormat = function(a) {
			this.$1.export_format = a;
			return this
		};
		c.setExportLevel = function(a) {
			this.$1.export_level = a;
			return this
		};
		c.setIds = function(a) {
			this.$1.ids = b("GeneratedLoggerUtils").serializeVector(a);
			return this
		};
		c.setInsightsAPIType = function(a) {
			this.$1.insights_api_type = a;
			return this
		};
		c.setInsightsSubTab = function(a) {
			this.$1.insights_sub_tab = a;
			return this
		};
		c.setInsightsUIReferrer = function(a) {
			this.$1.insights_ui_referrer = a;
			return this
		};
		c.setMetrics = function(a) {
			this.$1.metrics = b("GeneratedLoggerUtils").serializeVector(a);
			return this
		};
		c.setNavigationSection = function(a) {
			this.$1.navigation_section = a;
			return this
		};
		c.setPageID = function(a) {
			this.$1.page_id = a;
			return this
		};
		c.setPageResultsObject = function(a) {
			this.$1.page_results_object = a;
			return this
		};
		c.setPeriods = function(a) {
			this.$1.periods = b("GeneratedLoggerUtils").serializeVector(a);
			return this
		};
		c.setPost = function(a) {
			this.$1.post = a;
			return this
		};
		c.setPostID = function(a) {
			this.$1.post_id = a;
			return this
		};
		c.setPostInsightFetchEventType = function(a) {
			this.$1.post_insight_fetch_event_type = a;
			return this
		};
		c.setPostResultsObject = function(a) {
			this.$1.post_results_object = a;
			return this
		};
		c.setSince = function(a) {
			this.$1.since = a;
			return this
		};
		c.setTypeOfObjectReportedOn = function(a) {
			this.$1.type_of_object_reported_on = a;
			return this
		};
		c.setUntil = function(a) {
			this.$1.until = a;
			return this
		};
		return a
	}();
	c = {
		actor_vc: !0,
		app_id: !0,
		caller: !0,
		component: !0,
		desummarization_drill_down_name: !0,
		duration: !0,
		ent_async_export_run_id: !0,
		ent_export_format_id: !0,
		event: !0,
		exception: !0,
		export_async_job_id: !0,
		export_format: !0,
		export_level: !0,
		ids: !0,
		insights_api_type: !0,
		insights_sub_tab: !0,
		insights_ui_referrer: !0,
		metrics: !0,
		navigation_section: !0,
		page_id: !0,
		page_results_object: !0,
		periods: !0,
		post: !0,
		post_id: !0,
		post_insight_fetch_event_type: !0,
		post_results_object: !0,
		since: !0,
		type_of_object_reported_on: !0,
		until: !0
	};
	e.exports = a
}), null);
__d("openVideoDetailsExplorerQuery.graphql", [], (function(a, b, c, d, e, f) {
	"use strict";
	a = function() {
		var a = [{
				defaultValue: null,
				kind: "LocalArgument",
				name: "contentID"
			}],
			b = [{
				alias: null,
				args: [{
					kind: "Variable",
					name: "post_id",
					variableName: "contentID"
				}],
				concreteType: "MediaManagerContentViewModel",
				kind: "LinkedField",
				name: "media_manager_content_view_model",
				plural: !1,
				selections: [{
					alias: null,
					args: null,
					concreteType: "VideoDetailsExplorerViewModel",
					kind: "LinkedField",
					name: "video_details_explorer_view_model",
					plural: !1,
					selections: [{
						alias: null,
						args: null,
						concreteType: "VideoDetailsExplorerPermissionData",
						kind: "LinkedField",
						name: "permission_data",
						plural: !1,
						selections: [{
							alias: null,
							args: null,
							kind: "ScalarField",
							name: "is_permission_enabled",
							storageKey: null
						}, {
							alias: null,
							args: null,
							kind: "ScalarField",
							name: "asset_or_post_id",
							storageKey: null
						}, {
							alias: null,
							args: null,
							kind: "ScalarField",
							name: "owner_page_id",
							storageKey: null
						}],
						storageKey: null
					}, {
						alias: null,
						args: null,
						kind: "ScalarField",
						name: "access_token",
						storageKey: null
					}],
					storageKey: null
				}, {
					alias: null,
					args: null,
					kind: "ScalarField",
					name: "is_owner_additional_profile",
					storageKey: null
				}],
				storageKey: null
			}];
		return {
			fragment: {
				argumentDefinitions: a,
				kind: "Fragment",
				metadata: null,
				name: "openVideoDetailsExplorerQuery",
				selections: b,
				type: "Query",
				abstractKey: null
			},
			kind: "Request",
			operation: {
				argumentDefinitions: a,
				kind: "Operation",
				name: "openVideoDetailsExplorerQuery",
				selections: b
			},
			params: {
				id: "3673255876074160",
				metadata: {},
				name: "openVideoDetailsExplorerQuery",
				operationKind: "query",
				text: null
			}
		}
	}();
	e.exports = a
}), null);
__d("BVIGrowthIndicator.react", ["ix", "cssVar", "cx", "Image.react", "InsightsFormatters", "React", "asset", "intlSummarizeNumber"], (function(a, b, c, d, e, f, g, h, i) {
	"use strict";
	var j = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = function(a) {
				return d.props.rawGrowth != null ? b("intlSummarizeNumber")(Math.abs(a)) : b("InsightsFormatters").percentageFormatter(Math.abs(a))
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props.percentGrowth != null ? this.props.percentGrowth : this.props.rawGrowth;
			return a == null ? j.jsx("span", {}) : j.jsxs("span", {
				children: [j.jsx(k, {
					growth: a,
					colors: this.props.colors
				}), j.jsx(l, {
					growth: a,
					colors: this.props.colors,
					formatter: this.$1
				})]
			})
		};
		return c
	}(j.Component);
	e.exports = a;
	a.defaultProps = {
		colors: "default"
	};

	function k(a) {
		var c;
		a.growth < 0 && a.colors === "default" ? c = g("666273") : a.growth >= 0 && a.colors === "default" ? c = g("482962") : a.growth < 0 && a.colors !== "default" ? c = g("512578") : c = g("666280");
		return j.jsx(b("Image.react"), {
			className: "_63af",
			src: c
		})
	}

	function l(a) {
		var b = a.growth < 0 && a.colors === "default" || a.growth > 0 && a.colors !== "default" ? {
			color: "#F35369"
		} : {
			color: "#00A400"
		};
		return j.jsx("span", {
			className: "_63af",
			style: b,
			children: a.formatter(a.growth)
		})
	}
}), null);
__d("BVIPostInfoCell.react", ["cx", "Layout.react", "LineClamp.react", "React", "Tooltip.react", "VideoPublishingStateIndicator.react", "VideoPublishingStateIndicatorUtils", "formatDate"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("Layout.react").Column,
		i = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.$1 = function(a) {
			if (this.props.dateFormatter) return this.props.dateFormatter(a);
			var c = b("formatDate")(a, "M j, Y");
			a = b("formatDate")(a, "g:iA");
			return c + " at " + a
		};
		d.$2 = function() {
			if (this.props.video.title == null) return this.props.video.description;
			else if (this.props.video.description == null) return this.props.video.title;
			return this.props.video.title + " " + this.props.video.description
		};
		d.render = function() {
			var a = b("VideoPublishingStateIndicatorUtils").getState(this.props.video);
			return i.jsxs("div", {
				className: "_40uu",
				children: [i.jsx("div", {
					className: "_5fh5",
					children: this.props.page
				}), i.jsx("div", {
					className: "_40uw",
					children: i.jsx(b("Tooltip.react"), {
						position: "above",
						alignH: "center",
						tooltip: b("VideoPublishingStateIndicatorUtils").getStateToolTip(a, this.props.video),
						children: i.jsxs(b("Layout.react"), {
							children: [i.jsx(h, {
								children: i.jsx(b("VideoPublishingStateIndicator.react"), {
									state: a
								})
							}), i.jsx(h, {
								children: this.$1(this.props.video.time)
							})]
						})
					})
				}), i.jsx(b("LineClamp.react"), {
					className: "_40v0",
					lines: 2,
					children: this.$2()
				})]
			})
		};
		return c
	}(i.Component);
	e.exports = a
}), null);
__d("BVIProgressBar.react", ["cssVar", "cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			return i.jsx("div", {
				className: b("joinClasses")("_6m_6", this.props.className),
				style: {
					borderRadius: this.props.height / 2,
					height: this.props.height,
					width: this.props.width != null ? this.props.width : "100%"
				},
				children: i.jsx("div", {
					className: "_6m_7",
					style: {
						borderRadius: this.props.height / 2,
						background: this.props.color,
						width: this.props.width != null ? this.props.width * this.props.percentage : this.props.percentage * 100 + "%"
					}
				})
			})
		};
		return c
	}(i.Component);
	e.exports = a;
	a.defaultProps = {
		color: "#066CD2",
		height: 4,
		width: null
	}
}), null);
__d("BVITableMetricOverview.react", ["cssVar", "cx", "BVIProgressBar.react", "React", "Tooltip.react", "VideoFormattingUtils", "cxMargin", "intlNumUtils", "intlSummarizeNumber"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.$1 = function() {
			var a = this.props.value;
			if (a == null) return i.jsx("span", {
				children: "--"
			});
			if (this.props.valueFormatter) return this.props.valueFormatter(a);
			return a < 1e3 ? i.jsx("span", {
				children: b("intlSummarizeNumber")(a)
			}) : i.jsx(b("Tooltip.react"), {
				tooltip: b("intlNumUtils").formatNumberWithThousandDelimiters(a),
				children: b("intlSummarizeNumber")(a)
			})
		};
		d.render = function() {
			var a = this.props.value && this.props.columnMax ? this.props.value / this.props.columnMax : 0;
			return i.jsxs("div", {
				className: "_4d4z" + (this.props.value == null ? " _4d4-" : "") + (this.props.hideProgressBar ? " _3-99" : ""),
				children: [this.$1(), this.props.benchmarkValue && this.props.value ? i.jsx("div", {
					className: "_hcw",
					children: b("VideoFormattingUtils").formatPercentage(this.props.value, this.props.benchmarkValue)
				}) : null, this.props.hideProgressBar ? null : i.jsx(b("BVIProgressBar.react"), {
					className: "_3-8x",
					percentage: a,
					width: this.props.barWidth,
					color: this.props.selected ? "#066CD2" : "#C6C9CC"
				})]
			})
		};
		return c
	}(i.Component);
	e.exports = a
}), null);
__d("PointerEventElement.react", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = document.createElement("x");
	a.style.cssText = "pointer-events:auto";
	var i = a.style.pointerEvents === "auto";
	c = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				prepareForEventForwarding: !1
			}, c.lastEventData = null, c.handleClick = function(a) {
				c.lastEventData = {
					detail: a.detail,
					screenX: a.screenX,
					screenY: a.screenY,
					clientX: a.pageX || a.clientX,
					clientY: a.pageY || a.clientY,
					ctrlKey: a.ctrlKey,
					altKey: a.altKey,
					shiftKey: a.shiftKey,
					metaKey: a.metaKey,
					button: a.button,
					type: a.type
				}, c.setState({
					prepareForEventForwarding: !0
				})
			}, c.forwardClick = function() {
				var a = c.lastEventData.clientX,
					b = c.lastEventData.clientY;
				a = document.elementFromPoint(a, b);
				b = c.lastEventData;
				var d = document.createEvent("MouseEvents");
				d.initMouseEvent(b.type, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
				a.dispatchEvent(d);
				c.setState({
					prepareForEventForwarding: !1
				})
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.componentDidUpdate = function(a, b) {
			this.state.hide && this.forwardClick()
		};
		d.render = function() {
			if (this.state.prepareForEventForwarding) return h.jsx("div", {});
			var a = i ? null : this.handleClick,
				c = this.props.className;
			return h.jsx("div", babelHelpers["extends"]({}, this.props, {
				className: b("joinClasses")(c, "_4z8f"),
				onClick: a,
				onMouseMove: a,
				onMouseDown: a,
				onMouseUp: a
			}))
		};
		return c
	}(h.Component);
	e.exports = c
}), null);





__d("SpectrumDataVisualization", ["React", "SpectrumUtilities", "d3-old/core/interpolate", "prop-types"], (function(a, b, c, d, e, f) {
	b("React");
	var g = 0,
		h = {
			Mixin: {
				UNSAFE_componentWillMount: function() {
					this.props.eventChannel && (this.props.eventChannel[this.props.eventIndex] = this), this.uid = g++ + ":"
				},
				componentWillUnmount: function() {
					this.props.eventChannel && delete this.props.eventChannel[this.props.eventIndex]
				},
				hasDimensionsChanged: function(a) {
					return this.props.width != a.width || this.props.height != a.height ? !0 : !1
				},
				hasDataChanged: function(a) {
					return this.props.data !== a.data ? !0 : !1
				},
				hasFocusChanged: function(a) {
					var b = this.props.focus;
					a = a.focus;
					if (b === a) return !1;
					if (!b || !a) return !0;
					var c = b.target === this,
						d = a.target === this;
					if (c !== d) return !0;
					return d ? this.hasHighlightDetailsChanged(b, a) : !1
				},
				contextTypes: {
					insightsEnvironmentConfig: b("prop-types").object
				}
			},
			getDefaultValueXAccessor: function(a) {
				if (!a.scaleX) return function(a, b) {
					return b
				};
				var c = a.data[0].length,
					d = a.scaleX.domain();
				if (!a.scaleX.interpolate && d.length == c) return function(a, b) {
					return d[b]
				};
				var e = d[1];
				a.scaleX.interval && a.scaleX.interval() && (e = a.scaleX.interval().offset(e, -1));
				var f = b("d3-old/core/interpolate")(d[0], e);
				return d[0] instanceof Date ? function(a, b) {
					return new Date(f(b / (c - 1)))
				} : function(a, b) {
					return f(b / (c - 1))
				}
			},
			getDefaultValueYAccessor: function() {
				return b("SpectrumUtilities").identity
			},
			getValueXAccessor: function(a) {
				return a.valueX || h.getDefaultValueXAccessor(a)
			},
			getValueYAccessor: function(a) {
				return a.valueY || h.getDefaultValueYAccessor(a)
			},
			getDefaultExtentX: function(a) {
				return h.getExtentHelper(a, h.getValueXAccessor(a))
			},
			getDefaultExtentY: function(a) {
				return h.getExtentHelper(a, h.getValueYAccessor(a))
			},
			getExtentHelper: function(a, b) {
				var c = function(a) {
						if (!Array.isArray(a)) return b(a);
						else if (b) return Math.min.apply(null, a.map(b));
						return Math.min.apply(null, a)
					},
					d = function(a) {
						if (!Array.isArray(a)) return b(a);
						else if (b) return Math.max.apply(null, a.map(b));
						return Math.max.apply(null, a)
					};
				return [Math.min.apply(null, a.data.map(c)), Math.max.apply(null, a.data.map(d))]
			},
			getScaleX: function(a) {
				a = a.scaleX.copy();
				a.clamp && a.clamp(!1);
				return a
			},
			getX: function(a, b) {
				var c = a.rangeBand ? a.rangeBand() : 0;
				return a(b) + c / 2
			},
			getClippingRectangleDimensions: function(a) {
				var c = b("SpectrumUtilities").getOuterRange(a.scaleX);
				a = b("SpectrumUtilities").getOuterRange(a.scaleY);
				return {
					x: Math.min(c[0], c[1]),
					y: Math.min(a[0], a[1]),
					width: Math.abs(c[0] - c[1]),
					height: Math.abs(a[0] - a[1])
				}
			}
		};
	e.exports = h
}), null);
__d("SpectrumGuide.react", ["React", "ReactART", "createReactClass_DEPRECATED", "prop-types", "SpectrumDataVisualization", "SpectrumUtilities"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = b("ReactART").Path,
		i = b("ReactART").Shape;
	a = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumGuide",
		mixins: [b("SpectrumDataVisualization").Mixin],
		propTypes: {
			x: b("prop-types").number.isRequired,
			color: b("prop-types").string
		},
		getX: function() {
			return b("SpectrumDataVisualization").getX(this.props.scaleX, this.props.x)
		},
		render: function() {
			var a = this.props.theme.guide,
				c = b("SpectrumUtilities").getOuterRange(this.props.scaleY),
				d = c[0];
			c = c[1];
			var e = this.getX();
			d = h().moveTo(e, d).lineTo(e, c);
			return g.jsx(i, {
				d: d,
				stroke: this.props.color || a.color,
				strokeWidth: a.width
			})
		}
	});
	e.exports = a
}), null);
__d("d3-old/scale/ordinal", ["d3-old/core/map", "d3-old/core/range", "d3-old/scale/scale"], (function(a, b, c, d, e, f) {
	var g = b("d3-old/core/map")._Map,
		h = b("d3-old/scale/scale")._scaleExtent;
	a = function() {
		return i([], {
			t: "range",
			a: [
				[]
			]
		})
	};

	function i(a, c) {
		var d, e, f;

		function j(b) {
			return e[((d.get(b) || d.set(b, a.push(b))) - 1) % e.length]
		}

		function k(c, d) {
			return b("d3-old/core/range")(a.length).map(function(a) {
				return c + d * a
			})
		}
		j.domain = function(b) {
			if (!arguments.length) return a;
			a = [];
			d = new g();
			var e = -1,
				f = b.length,
				h;
			while (++e < f) d.has(h = b[e]) || d.set(h, a.push(h));
			return j[c.t].apply(j, c.a)
		};
		j.range = function(a) {
			if (!arguments.length) return e;
			e = a;
			f = 0;
			c = {
				t: "range",
				a: arguments
			};
			return j
		};
		j.rangePoints = function(b, d) {
			arguments.length < 2 && (d = 0);
			var g = b[0],
				h = b[1],
				i = (h - g) / (Math.max(1, a.length - 1) + d);
			e = k(a.length < 2 ? (g + h) / 2 : g + i * d / 2, i);
			f = 0;
			c = {
				t: "rangePoints",
				a: arguments
			};
			return j
		};
		j.rangeBands = function(b, d, g) {
			arguments.length < 2 && (d = 0);
			arguments.length < 3 && (g = d);
			var h = b[1] < b[0],
				i = b[h - 0],
				l = b[1 - h],
				m = (l - i) / (a.length - d + 2 * g);
			e = k(i + m * g, m);
			h && e.reverse();
			f = m * (1 - d);
			c = {
				t: "rangeBands",
				a: arguments
			};
			return j
		};
		j.rangeRoundBands = function(b, d, g) {
			arguments.length < 2 && (d = 0);
			arguments.length < 3 && (g = d);
			var h = b[1] < b[0],
				i = b[h - 0],
				l = b[1 - h],
				m = Math.floor((l - i) / (a.length - d + 2 * g)),
				n = l - i - (a.length - d) * m;
			e = k(i + Math.round(n / 2), m);
			h && e.reverse();
			f = Math.round(m * (1 - d));
			c = {
				t: "rangeRoundBands",
				a: arguments
			};
			return j
		};
		j.rangeBand = function() {
			return f
		};
		j.rangeExtent = function() {
			return h(c.a[0])
		};
		j.copy = function() {
			return i(a, c)
		};
		return j.domain(a)
	}
	e.exports = a
}), null);
__d("SpectrumLines", ["Circle.art", "React", "ReactART", "SpectrumGuide.react", "createReactClass_DEPRECATED", "d3-old/scale/ordinal", "prop-types", "SpectrumDataVisualization", "SpectrumUtilities"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = (a = b("ReactART")).Path,
		i = a.Group,
		j = a.ClippingRectangle,
		k = a.Shape,
		l = b("SpectrumUtilities").forEachVector,
		m = b("SpectrumUtilities").compose,
		n = b("SpectrumUtilities").findEdges,
		o = 2,
		p = b("createReactClass_DEPRECATED")({
			displayName: "SpectrumLines",
			mixins: [b("SpectrumDataVisualization").Mixin],
			propTypes: {
				useClosestXAxisTooltip: b("prop-types").bool
			},
			statics: {
				getExtentY: function(a) {
					var c = b("SpectrumDataVisualization").getDefaultExtentY(a);
					if (a.nonZeroMinimum === "allowed") return c;
					c[0] = Math.min(c[0], 0);
					return c
				},
				getExtentX: function(a) {
					return b("SpectrumDataVisualization").getDefaultExtentX(a)
				},
				getMarkerRadius: function(a) {
					return a.highlightWidths[0] + o
				},
				getGutter: function(a, b) {
					a = p.getMarkerRadius(b.lines);
					return {
						bottom: a,
						left: a,
						right: a,
						top: a
					}
				}
			},
			getDefaultProps: function() {
				return {
					useClosestXAxisTooltip: !1
				}
			},
			handleEvent: function(a) {
				var c = null;
				if (a.type === "mousemove") c = this.props.onRequestFocus;
				else if (a.type === "click") c = this.props.onClick;
				else return;
				if (this.props.ignoreMouseEvents) return;
				var d = this.findEdges(a.x, a.y);
				d.right < a.hitRegionRight && (a.hitRegionRight = d.right);
				d.left > a.hitRegionLeft && (a.hitRegionLeft = d.left);
				d.bottom < a.hitRegionBottom && (a.hitRegionBottom = d.bottom);
				d.top > a.hitRegionTop && (a.hitRegionTop = d.top);
				if (d.bestDatum.valueX != null && (this.props.useClosestXAxisTooltip || d.bestDistanceToPoint < 20)) {
					var e = this.props.titles,
						f = b("SpectrumDataVisualization").getScaleX(this.props),
						g = f.rangeBand ? f.rangeBand() : 0;
					f = {
						rect: {
							left: f(d.bestDatum.valueX),
							right: f(d.bestDatum.valueX) + g,
							top: this.props.scaleY(d.bestDatum.valueY),
							bottom: this.props.scaleY(d.bestDatum.valueY)
						},
						target: this,
						title: e && e[d.lineIndex] || "",
						lineIndex: d.lineIndex
					};
					f = babelHelpers["extends"]({}, f, d.bestDatum);
					c && c(f);
					a.stopPropagation()
				} else c && c(null)
			},
			findEdges: function(a, c) {
				var d = b("SpectrumDataVisualization").getValueXAccessor(this.props),
					e = b("SpectrumDataVisualization").getValueYAccessor(this.props),
					f = b("SpectrumDataVisualization").getScaleX(this.props),
					g = this.props.scaleY,
					h = this.props.partialValue || function() {},
					i = function(a, c) {
						return b("SpectrumDataVisualization").getX(f, d(a, c))
					},
					j = m(g, e),
					k = this.props.data,
					o = null,
					p = {},
					q = null;

				function r(a, b) {
					return {
						dataPoint: a,
						index: b,
						isPartial: h(a, b),
						valueX: d(a, b),
						valueY: e(a, b)
					}
				}

				function s(b) {
					function d(d, e) {
						function f(d, f, g, h) {
							var k = i(d, f),
								l = j(d, f),
								m = i(g, h),
								n = j(g, h),
								s = b(k, l, m, n);
							s && (o = e, s == 1 || s == 3 ? (p = r(d, f), k -= a, l -= c, q = Math.sqrt(k * k + l * l)) : (p = r(g, h), m -= a, n -= c, q = Math.sqrt(m * m + n * n)))
						}
						l(d, f)
					}
					k.forEach(d)
				}
				g = n(a, c, s);
				g.lineIndex = o;
				g.bestDatum = p;
				g.bestDistanceToPoint = q;
				return g
			},
			shouldComponentUpdate: function(a) {
				return this.hasDataChanged(a) || this.hasFocusChanged(a) || this.hasDimensionsChanged(a)
			},
			hasHighlightDetailsChanged: function(a, b) {
				return a.valueX !== b.valueX || a.valueY !== b.valueY || a.lineIndex !== b.lineIndex
			},
			render: function() {
				if (!this.props.data.length) return g.jsx(i, {});
				var a = b("SpectrumDataVisualization").getValueXAccessor(this.props),
					c = b("SpectrumDataVisualization").getValueYAccessor(this.props),
					d = this.props.partialValue || function() {},
					e = b("SpectrumDataVisualization").getScaleX(this.props),
					f = this.props.scaleY,
					l = function(c, d) {
						return b("SpectrumDataVisualization").getX(e, a(c, d))
					},
					n = m(f, c);
				f = this.props.data;
				if (!Array.isArray(f) || !Array.isArray(f[0])) throw new Error("Invalid data shape provided to SpectrumLines. A two dimensional array was expected.");
				var q = this.uid,
					r = this.props.theme.lines,
					s = f.some(function(a) {
						return a.some(function(b, c) {
							return c > 0 && Math.abs(l(b, c) - l(a[c - 1], c - 1)) < p.getMarkerRadius(r)
						})
					});
				s && (r.markers = !1);
				var t = r.colors.copy ? r.colors : b("d3-old/scale/ordinal")().range(r.colors),
					u = r.widths.copy ? r.widths : b("d3-old/scale/ordinal")().range(r.widths),
					v = this.props.focus;
				v && v.target != null && v.target !== this && (v = null);
				var w = r.highlightWidths.copy ? r.highlightWidths : b("d3-old/scale/ordinal")().range(r.highlightWidths),
					x;
				r.markerWidths ? x = r.markerWidths.copy ? r.markerWidths : b("d3-old/scale/ordinal")().range(r.markerWidths) : x = u;

				function y(b, e) {
					var f = b.map(function(a, b) {
							var d = null;
							c(a, b) != null && (d = n(a, b));
							return [l(a, b), d]
						}),
						j = !1;
					v && (v.lineIndex === e ? j = !0 : v.target == null && (j = b.some(function(d, b) {
						return v.valueX == a(d, b) && v.valueY == c(d, b)
					})));
					var m = t(q + e);
					v && !j && (m = r.fadeOutColor);

					function o(a, b) {
						return b <= 0 ? null : s(a[b], a[b - 1])
					}

					function p(a, b) {
						return b >= a.length - 1 ? null : s(a[b], a[b + 1])
					}

					function s(a, b) {
						if (a[1] == null || b[1] == null) return null;
						var c = (a[0] + b[0]) * .5;
						a = (a[1] + b[1]) * .5;
						return [c, a]
					}
					j = h();
					var w = h();
					for (var x = 0; x < f.length; x++) {
						var y = o(f, x),
							z = p(f, x),
							A = d(b[x], x) ? j : w,
							B = [];
						y && B.push(y);
						B.push(f[x]);
						z && B.push(z);
						for (var y = 0; y < B.length; y++) {
							z = B[y];
							y === 0 ? A.moveTo(z[0], z[1]) : A.lineTo(z[0], z[1])
						}
					}
					return g.jsxs(i, {
						children: [g.jsx(k, {
							d: w,
							stroke: m,
							strokeWidth: u(q + e)
						}), g.jsx(k, {
							d: j,
							stroke: m,
							strokeWidth: u(q + e),
							strokeDash: r.partialStrokeDashes
						})]
					}, e)
				}

				function z(d, f) {
					function h(d, h) {
						var j = b("SpectrumUtilities").getOuterRange(e);
						if (l(d, h) < j[0] || l(d, h) > j[1]) return;
						j = a(d, h);
						var k = c(d, h);
						if (j == null || k == null) return null;
						k = v && v.valueX + "" == j + "" && v.valueY + "" == k + "";
						if (!k && !r.markers) return null;
						var m = k ? w(q + h) : x(q + h);
						if (!m) return null;
						var p = t(q + f),
							s = r.markerColor;
						v && v.lineIndex != f && (p = r.fadeOutColor);
						this.props.focus && this.props.focus.target !== this && (p = s = r.fadeOutColor);
						k = k && this.props.showGuide ? g.jsx(b("SpectrumGuide.react"), {
							scaleX: this.props.scaleX,
							scaleY: this.props.scaleY,
							theme: this.props.theme,
							x: j
						}) : null;
						return g.jsxs(i, {
							children: [k, g.jsx(b("Circle.art"), {
								radius: o,
								stroke: p,
								strokeWidth: m * 2,
								x: l(d, h),
								y: n(d, h)
							}), g.jsx(b("Circle.art"), {
								radius: o,
								fill: s,
								x: l(d, h),
								y: n(d, h)
							})]
						}, h)
					}
					return d.map(h, this)
				}
				s = b("SpectrumDataVisualization").getClippingRectangleDimensions(this.props);
				return g.jsxs(i, {
					children: [g.jsx(j, {
						x: s.x,
						y: 0,
						width: s.width,
						height: this.props.height,
						children: f.map(y)
					}), f.map(z, this)]
				})
			}
		});
	e.exports = p
}), null);
__d("SpectrumStyle", [], (function(a, b, c, d, e, f) {
	a = {
		BLUE_HOVER: "rgba(113, 137, 174, 0.3)",
		BLUE: "#B1BDD6",
		BLUE2: "#899BC1",
		BLUE3: "#95A5D0",
		BLUE4: "#3C6399",
		BLUE_BRUSH: "rgba(58, 96, 149, 0.08)",
		BRIGHT_BLUE: "#5890FF",
		BOLD_BLUE: "#627AAD",
		DARK_BLUE: "#23355B",
		FB_BLUE: "#3B5998",
		LIGHT_BLUE: "#C5CEE0",
		LIGHT_BLUE2: "#9DACCB",
		LIGHT_BLUE3: "#D7DAE7",
		LAVENDER: "#9C7AB3",
		TROUT: "#4E5665",
		CASPER: "#ABB7CF",
		COBALT: "#9DACCB",
		COBALT2: "#758AB7",
		COBALT3: "#7F96C7",
		GRAY: "#ADB3BC",
		LIGHT_GRAY: "#E5E5E5",
		MAUVE: "#D094AB",
		MAUVE2: "#DEB5C5",
		ORANGE: "#F79600",
		ORANGE_BRUSH: "rgba(242, 100, 52, 0.14)",
		LIGHT_ORANGE: "#FFCA87",
		PINK: "#DE8585",
		DEEP_PURPLE: "#705781",
		PURPLE: "#BC7F96",
		PURPLE2: "#B7758F",
		PURPLE3: "#925E73",
		PURPLE4: "#98677D",
		PURPLE5: "#B36D88",
		PURPLE6: "#B194C2",
		LIGHT_GREEN: "#F0EEC4",
		DARK_RED: "#D44040",
		SALMON: "#DA7878",
		BROWN: "#892A2A",
		BEIGE: "#C9B4A0",
		DUCKEGG: "#BFDBC6",
		TAN: "#E8C595",
		VIOLET: "#865EA1",
		FONT_FAMILY: ["'helvetica neue'", "helvetica", "arial", "'lucida grande'", "tahoma", "verdana", "sans-serif"].join(","),
		FONT_SIZE_TINY: 10,
		FONT_SIZE_SMALL: 12,
		BREAKDOWN_COLORS: [],
		BUTTERFLY_COLORS: [],
		BUTTERFLY_LABEL: ""
	};
	a.BREAKDOWN_COLORS = [a.COBALT3, a.LIGHT_BLUE3, a.PURPLE6, a.LIGHT_GREEN, a.CASPER, a.TAN, a.DUCKEGG, a.GRAY, a.MAUVE, a.BEIGE];
	a.BUTTERFLY_COLORS = [a.LIGHT_GRAY, a.BLUE2, a.LIGHT_GRAY, a.BLUE4];
	a.BUTTERFLY_LABEL = a.TROUT;
	b = a;
	e.exports = b
}), null);
__d("InsightsBenchmarkLayer.react", ["fbt", "React", "ReactART", "SpectrumAnimationLayer", "SpectrumFlag", "SpectrumFlagData", "SpectrumFlagDescription", "SpectrumLines", "SpectrumStyle", "SpectrumUtilities", "d3-old/scale/linear", "mergeDeep", "mergeHelpers"], (function(a, b, c, d, e, f, g) {
	var h = b("React"),
		i = b("mergeHelpers").ArrayStrategies;
	a = b("ReactART").Path;
	var j = b("ReactART").Shape,
		k = b("ReactART").Surface,
		l = a().move(0, 0).line(1, 0).line(0, 1).line(-1, 0).close(),
		m = 100,
		n = {
			lines: {
				colors: [b("SpectrumStyle").BLUE, b("SpectrumStyle").DARK_BLUE],
				markers: !1
			}
		};
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.handleEvent = function(a) {
				c.props.visible && (a.cursor = "", a.stopPropagation())
			}, c.getExtentY = function() {
				if (!c.props.visible) return null;
				var a = c.props.benchmarks;
				return [Math.min(a.average, a.referenceAverage), Math.max(a.average, a.referenceAverage)]
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.UNSAFE_componentWillMount = function() {
			this.props.eventChannel != null && this.props.eventIndex != null && (this.props.eventChannel[this.props.eventIndex] = this)
		};
		d.componentWillUnmount = function() {
			this.props.eventChannel != null && this.props.eventIndex != null && delete this.props.eventChannel[this.props.eventIndex]
		};
		d.render = function() {
			if (!this.props.visible) return h.jsx("div", {});
			var a = b("mergeDeep")(this.props.theme, n, i.Clobber),
				c = b("d3-old/scale/linear")().range(b("SpectrumUtilities").getOuterRange(this.props.scaleX)),
				d = b("d3-old/scale/linear")().range(b("SpectrumUtilities").getOuterRange(this.props.scaleY)),
				e = [],
				f = [],
				o = this.props.benchmarks;
			o && o.referenceAverage != null && !isNaN(o.referenceAverage) && (e.push([o.referenceAverage, o.referenceAverage]), f.push(g._("Gi\u00e1 tr\u1ecb trung b\u00ecnh c\u1ee7a b\u1ea1n trong Th\u1eddi k\u1ef3 tr\u01b0\u1edbc")));
			o && o.average != null && !isNaN(o.average) && (e.push([o.average, o.average]), f.push(g._("Chi ph\u00ed trung b\u00ecnh giai \u0111o\u1ea1n n\u00e0y")));
			var p = this.props.scaleY;
			if (p == null) return null;
			var q = p.tooltipFormat ? p.tooltipFormat() : p.tickFormat(),
				r = [];

			function s(a, b) {
				var c, d = 0,
					e = 0;
				for (c = 0; c < a.length; c++) {
					var f = p(a[c][0]);
					r.push("top");
					f - m > 0 ? d += 1 : r[c] = "bottom";
					f + m < b && (e += 1)
				}
				if (d !== a.length && e === a.length)
					for (c = 0; c < r.length; c++) r[c] = "bottom"
			}

			function t(a, d) {
				var e = a[0];
				a = .7 / a.length;
				return h.jsxs(b("SpectrumFlag"), {
					height: m,
					placement: r[d],
					x: c(.3 + a * d),
					y: p(e),
					children: [h.jsx(b("SpectrumFlagDescription"), {
						children: f[d]
					}), h.jsx(b("SpectrumFlagData"), {
						children: q(e)
					})]
				})
			}
			s(e, this.props.height);
			o = b("SpectrumLines").getMarkerRadius(a.lines);
			return h.jsxs(b("SpectrumAnimationLayer"), {
				height: this.props.height,
				width: this.props.width,
				children: [h.jsxs(k, {
					height: this.props.height,
					width: this.props.width,
					children: [h.jsx(j, {
						d: l,
						fill: "rgba(255,255,255,0.65)",
						scaleX: c(1) - c(0) + o * 2,
						scaleY: d(0) - d(1) + o * 2,
						x: c(0) - o,
						y: d(1) - o
					}), h.jsx(b("SpectrumLines"), {
						data: e,
						height: this.props.height,
						scaleX: c,
						scaleY: this.props.scaleY,
						theme: a,
						width: this.props.width
					})]
				}), e.map(t)]
			})
		};
		return c
	}(h.Component);
	e.exports = c;
	c.isChartLayer = !0
}), null);
__d("InsightsEnvironmentConfig", [], (function(a, b, c, d, e, f) {
	a = {
		DEFAULT: "",
		KEPLER: "KEPLER"
	};
	b = [];
	for (var g in a) b.push(a[g]);
	c = {
		Names: a,
		NameList: b,
		getConfig: function(a) {
			return {}
		}
	};
	e.exports = c
}), null);
__d("InsightsContextMixin", ["InsightsEnvironmentConfig", "React", "prop-types"], (function(a, b, c, d, e, f) {
	f.getChildContext = a;
	b("React");
	c = {
		insightsContext: b("prop-types").oneOf(b("InsightsEnvironmentConfig").NameList)
	};
	f.contextTypes = c;
	d = {
		insightsEnvironmentConfig: b("prop-types").object
	};
	f.childContextTypes = d;

	function a() {
		var a = this.context.insightsContext || "";
		return {
			insightsEnvironmentConfig: b("InsightsEnvironmentConfig").getConfig(a)
		}
	}
}), null);
__d("InsightsTabbedSection.react", ["React", "prop-types"], (function(a, b, c, d, e, f) {
	var g = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		b.getTabHref = function(a) {
			return a.tabHref
		};
		b.getKey = function(a) {
			return a.sectionKey
		};
		b.getTitle = function(a) {
			return a.title
		};
		b.getSubtitle = function(a) {
			return a.subtitle
		};
		var c = b.prototype;
		c.render = function() {
			return g.jsx("div", {
				className: this.props.className,
				children: this.props.children
			})
		};
		return b
	}(g.Component);
	e.exports = a;
	a.propTypes = {
		className: (c = b("prop-types")).string,
		tabHref: c.string,
		sectionKey: c.string.isRequired,
		title: c.string.isRequired,
		subtitle: c.string
	}
}), null);
__d("InsightsSectionUtils", ["InsightsTabbedSection.react", "React"], (function(a, b, c, d, e, f) {
	f.areSectionsEqual = a;
	f.getSectionByKey = c;
	b("React");

	function a(a, b) {
		return a.type.getKey(a.props) === b.type.getKey(b.props)
	}

	function c(a, b) {
		for (var c = b.length - 1; c >= 0; --c) {
			var d = b[c];
			if (d.type.getKey(d.props) === a) return d
		}
	}
}), null);
__d("XReactComposerRestrictionTabNuxController", ["XController"], (function(a, b, c, d, e, f) {
	e.exports = b("XController").create("/react_composer/edit/restriction_tab_nux/", {})
}), null);
__d("InsightsTabbedSectionsMixin", ["fbt", "ix", "cx", "AsyncRequest", "Image.react", "InsightsSectionUtils", "Link.react", "React", "ReactLayeredComponentMixin_DEPRECATED", "XReactComposerRestrictionTabNuxController", "XUIAmbientNUX.react", "XUICard.react", "XUIPageNavigation.react", "XUIText.react", "joinClasses", "PagesComposerAudiencesConstants", "cxMargin"], (function(a, b, c, d, e, f, g, h, i) {
	var j = b("React"),
		k = b("XUIPageNavigation.react").Group,
		l = b("XUIPageNavigation.react").Item,
		m = b("PagesComposerAudiencesConstants").TABS,
		n = -22,
		o = 50,
		p = 220;
	a = {
		mixins: [b("ReactLayeredComponentMixin_DEPRECATED")],
		getActiveSection: function() {
			var a, c = j.Children.toArray(this.props.children);
			this.props.activeKey ? (a = b("InsightsSectionUtils").getSectionByKey(this.props.activeKey, c), a || (a = c[0])) : a = c[0];
			return a
		},
		onTabClick: function(a) {
			var c = this.getActiveSection();
			if (!b("InsightsSectionUtils").areSectionsEqual(a, c)) {
				this.props.onTabClick && this.props.onTabClick(a);
				a.type.getKey(a.props) === m.GATING && this.state && this.state.showRestrictionTabNux && this._onRestrictionTabNuxClose();
				a.type.getKey(a.props) === "videoPostDrillDownTopShares" && this.state && this.state.showTopSharesTabNux && this._onTopSharesTabNuxClose();
				c = a.props.nuxProp;
				c && this.state.nuxShownStates[c.name] && this._closeSectionNUX(c)
			}
		},
		getTabContent: function(a) {
			var c = a.type.getSubtitle(a.props);
			if (c) return j.jsxs("div", {
				className: this.theme.subtitledBlockClass,
				children: [j.jsx("div", {
					children: a.type.getTitle(a.props)
				}), j.jsx("div", {
					className: this.theme.subtitleClass,
					children: c
				})]
			});
			else return j.jsxs("span", {
				className: a.props.showBetaLogo ? "_6351" : "",
				children: [a.type.getTitle(a.props), a.props.showBetaLogo ? j.jsx(b("Image.react"), {
					className: "_3-9a",
					src: h("356069")
				}) : null]
			})
		},
		UNSAFE_componentWillMount: function() {
			this.props.showTopSharesNUX && this.setState({
				showTopSharesTabNux: this.props.showTopSharesNUX
			})
		},
		componentDidMount: function() {
			if (this.state && this.state.showRestrictionTabNux) {
				var a = b("XReactComposerRestrictionTabNuxController").getURIBuilder().getURI();
				new(b("AsyncRequest"))().setURI(a).setMethod("POST").setData({
					impression: !0
				}).send()
			}
		},
		componentWillUnmount: function() {
			this.state && this.state.showRestrictionTabNux && this.setState({
				showRestrictionTabNux: !1
			})
		},
		_onRestrictionTabNuxClose: function() {
			this.setState({
				showRestrictionTabNux: !1
			});
			var a = b("XReactComposerRestrictionTabNuxController").getURIBuilder().getURI();
			new(b("AsyncRequest"))().setURI(a).setMethod("POST").setData({
				acked: !0
			}).send()
		},
		_onTopSharesTabNuxClose: function() {
			this.setState({
				showTopSharesTabNux: !1
			})
		},
		_renderRedirectLink: function() {
			if (this.props.redirectURI && this.props.redirectText) {
				var a = this.props.redirectInCurrentTab ? "_self" : "_blank";
				return j.jsx(b("Link.react"), {
					className: "_2li7",
					href: this.props.redirectURI,
					target: a,
					children: this.props.redirectText
				})
			}
			return null
		},
		_renderRestrictionTabNux: function() {
			var a = this;
			return j.jsx(b("XUIAmbientNUX.react"), {
				contextRef: function() {
					return a.refs.restrictionTab
				},
				onCloseButtonClick: this._onRestrictionTabNuxClose,
				offsetY: n,
				offsetX: o,
				position: "below",
				shown: !0,
				width: "custom",
				customwidth: p,
				children: j.jsx("div", {
					children: j.jsx(b("XUIText.react"), {
						children: g._("Limit who can see this post.")
					})
				})
			})
		},
		_renderTopSharesTabNux: function() {
			var a = this;
			return j.jsx(b("XUIAmbientNUX.react"), {
				contextRef: function() {
					return a.refs.videoPostDrillDownTopShares
				},
				onCloseButtonClick: this._onTopSharesTabNuxClose,
				position: "above",
				shown: !0,
				width: "auto",
				children: j.jsx("div", {
					children: j.jsxs("span", {
						children: [j.jsx("span", {
							className: "_-hg",
							children: g._("Video c\u1ee7a b\u1ea1n \u0111ang \u0111\u01b0\u1ee3c chia s\u1ebb")
						}), g._("H\u00e3y xem nh\u1eefng Trang n\u00e0o \u0111ang chia s\u1ebb.")]
					})
				})
			})
		},
		renderLayers: function() {
			if (this.state)
				if (this.state.showRestrictionTabNux) return this._renderRestrictionTabNux();
				else if (this.state.showTopSharesTabNux && this.refs.videoPostDrillDownTopShares) return this._renderTopSharesTabNux();
			return j.jsx(j.Fragment, {})
		},
		render: function() {
			var a = this.getActiveSection(),
				c = j.Children.toArray(this.props.children);
			c = c.map(function(c, d) {
				d = b("InsightsSectionUtils").areSectionsEqual(c, a);
				var e = this.props.smallTitle ? this.theme.smallNavLinkClass : this.theme.navLinkClass;
				d && (e = b("joinClasses")(e, this.theme.activeNavLinkClass));
				var f = null,
					g;
				d && (g = null, c.props.nubSource ? g = c.props.nubSource : g = this.theme.nubSrc, f = j.jsx("noscript", {}), g && (f = j.jsx(b("Image.react"), {
					className: this.theme.nubClass,
					src: g
				})));
				g === void 0 && this.theme.activeSelector && (f = j.jsx("span", {
					className: this.theme.activeSelector
				}));
				d = this.getTabContent(c);
				var h = null;
				c.type.getKey(c.props) === m.GATING && (h = "restrictionTab");
				if (this.props.useCenteredTabsStyle) return j.jsx(l, {
					href: c.type.getTabHref(c.props),
					children: j.jsx("span", {
						className: "_fjc",
						onClick: this.onTabClick.bind(this, c),
						role: "presentation",
						ref: c.type.getKey(c.props),
						children: d
					})
				}, "section" + c.type.getKey(c.props));
				else return j.jsxs("a", {
					className: e,
					href: c.type.getTabHref(c.props),
					title: c.type.getTitle(c.props),
					onClick: this.onTabClick.bind(this, c),
					ref: h,
					children: [f, d]
				}, "section" + c.type.getKey(c.props))
			}, this);
			if (this.props.useCenteredTabsStyle) return j.jsxs("div", {
				children: [j.jsxs(b("XUICard.react"), {
					className: "_fjd",
					children: [j.jsx("div", {
						className: "_fje _5vx1",
						children: j.jsx(b("XUIPageNavigation.react"), {
							activeTabKey: "section" + a.type.getKey(a.props),
							children: j.jsx(k, {
								children: c
							})
						})
					}), this._renderRedirectLink()]
				}), j.jsx("div", {
					className: "_2pie _2pio",
					children: a
				})]
			});
			else return j.jsxs("div", {
				className: this.props.className,
				children: [j.jsxs("div", {
					className: this.props.longNav ? this.theme.longNavClass : this.theme.navClass,
					children: [c, this._renderRedirectLink()]
				}), a]
			})
		},
		_closeSectionNUX: function(a) {
			this.state.nuxShownStates[a.name] = !1, this.forceUpdate(), a.onCloseButtonClick()
		}
	};
	e.exports = a
}), null);
__d("InsightsTabbedSections.react", ["cx", "ix", "InsightsTabbedSectionsMixin", "createReactClass_DEPRECATED"], (function(a, b, c, d, e, f, g, h) {
	a = b("createReactClass_DEPRECATED")({
		displayName: "InsightsTabbedSections",
		mixins: [b("InsightsTabbedSectionsMixin")],
		theme: {
			activeNavLinkClass: "_5cmg",
			navClass: "_5cmi",
			longNavClass: "_3bxh",
			navLinkClass: "_5cmf",
			smallNavLinkClass: "_4d7-",
			nubClass: "_5cmh",
			nubSrc: h("28639"),
			subtitledBlockClass: "_1fkz",
			subtitleClass: "_1fk-"
		}
	});
	c = a;
	e.exports = c
}), null);
__d("PageInsightsAnnouncementCard.react", ["cx", "fbt", "ix", "BasicFBNux", "HubbleContext", "Image.react", "PageInsightsMonitoringTypedLogger", "React", "XUICloseButton.react", "XUIContextualDialog.react", "XUIContextualDialogTitle.react"], (function(a, b, c, d, e, f, g, h, i) {
	var j = b("React"),
		k = 6568;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.state = {
				organicUpdateCardEnabled: b("HubbleContext").get("linkClicksNux")
			}, d.$2 = function(a) {
				return d.$1 = a
			}, d.$3 = function() {
				return d.$1
			}, d.$4 = function() {
				d.setState({
					organicUpdateCardEnabled: !1
				}), b("HubbleContext").setKey("linkClicksNux", !1), b("BasicFBNux").onDismiss(k), d.forceUpdate(), new(b("PageInsightsMonitoringTypedLogger"))().setEvent("www_link_click_fix_xout_click").setPageID(String(d.props.pageID)).log()
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.componentDidMount = function() {
			b("BasicFBNux").onView(k), new(b("PageInsightsMonitoringTypedLogger"))().setEvent("www_link_click_fix_impression").setPageID(String(this.props.pageID)).log()
		};
		d.render = function() {
			var a = j.jsxs(b("XUIContextualDialog.react"), {
				contextRef: this.$3,
				hoverContextRef: this.$3,
				position: "above",
				alignment: "right",
				labelledBy: "organic_reach_change",
				shown: this.state.organicUpdateCardEnabled,
				children: [j.jsxs("div", {
					className: "_751a",
					children: [j.jsx("div", {
						children: j.jsxs(b("XUIContextualDialogTitle.react"), {
							className: "_751b",
							children: [h._("\u0110o l\u01b0\u1eddng l\u01b0\u1ee3t click v\u00e0o li\u00ean k\u1ebft m\u1edbi"), j.jsx(b("XUICloseButton.react"), {
								className: "_751c",
								size: "medium",
								onClick: this.$4
							})]
						})
					}), j.jsx("div", {
						className: "_751d",
						children: h._("Ch\u00fang t\u00f4i \u0111\u00e3 c\u1eadp nh\u1eadt c\u00e1ch \u0111o l\u01b0\u1eddng l\u01b0\u1ee3t click v\u00e0o li\u00ean k\u1ebft cho Trang \u0111\u1ec3 th\u1ed1ng nh\u1ea5t h\u01a1n v\u1edbi c\u00e1ch \u0111o l\u01b0\u1eddng l\u01b0\u1ee3t click v\u00e0o li\u00ean k\u1ebft cho qu\u1ea3ng c\u00e1o. C\u1eadp nh\u1eadt n\u00e0y s\u1ebd \u0111\u1ea3m b\u1ea3o t\u00ednh so s\u00e1nh t\u1ed1t h\u01a1n gi\u1eefa l\u01b0\u1ee3t click v\u00e0o li\u00ean k\u1ebft tr\u1ea3 ph\u00ed v\u00e0 t\u1ef1 nhi\u00ean \u0111\u1ed1i v\u1edbi c\u00e1c b\u00e0i vi\u1ebft v\u00e0 tin tr\u00ean Trang c\u1ee7a b\u1ea1n.")
					})]
				}), j.jsxs("div", {
					className: "_751a",
					children: [j.jsx("div", {
						children: j.jsx(b("XUIContextualDialogTitle.react"), {
							className: "_751b",
							children: h._("\u00dd ngh\u0129a c\u1ee7a thay \u0111\u1ed5i n\u00e0y v\u1edbi Trang c\u1ee7a b\u1ea1n")
						})
					}), j.jsxs("div", {
						className: "_751d",
						children: [h._("C\u1eadp nh\u1eadt n\u00e0y kh\u00f4ng thay \u0111\u1ed5i c\u00e1ch ph\u00e2n ph\u1ed1i n\u1ed9i dung c\u1ee7a b\u1ea1n, s\u1ed1 l\u01b0\u1ee3t click x\u1ea3y ra tr\u00ean th\u1ef1c t\u1ebf hay c\u00e1ch t\u00ednh ph\u00ed cho l\u01b0\u1ee3t click v\u00e0o li\u00ean k\u1ebft tr\u1ea3 ph\u00ed. Thay \u0111\u1ed5i n\u00e0y s\u1ebd \u00e1p d\u1ee5ng v\u1edbi:"), j.jsxs("ul", {
							className: "_751e",
							children: [j.jsx("li", {
								children: h._("Bao g\u1ed3m l\u01b0\u1ee3t click v\u00e0o li\u00ean k\u1ebft tr\u1ea3 ph\u00ed di\u1ec5n ra tr\u00ean Instagram")
							}), j.jsx("li", {
								children: h._("Ph\u00e2n lo\u1ea1i l\u1ea1i m\u1ed9t s\u1ed1 l\u01b0\u1ee3t click tr\u01b0\u1edbc \u0111\u00e2y \u0111\u01b0\u1ee3c li\u1ec7t k\u00ea v\u00e0o m\u1ee5c \"kh\u00e1c\"")
							})]
						})]
					})]
				})]
			}, "hovercard");
			return j.jsxs("span", {
				className: "_751f",
				ref: "root",
				children: [this.props.children, j.jsx(b("Image.react"), {
					ref: this.$2,
					className: "_751g",
					src: i("76155")
				}), a]
			})
		};
		return c
	}(j.PureComponent);
	e.exports = a
}), null);
__d("InsightsChartWithLegend.react", ["cx", "CandelaConstants", "CandelaStructs", "InsightsFormatterFactories", "InsightsItems", "React", "immutable", "prop-types", "debounceCore", "isEmpty", "joinClasses"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = b("immutable").Map;
	a = b("immutable").OrderedSet;
	var k = b("immutable").Set,
		l = 8,
		m = function(a) {
			if (a instanceof b("InsightsItems").SeriesDataItem) return a.seriesName;
			else if (b("InsightsItems").isLegacyItem(a)) return a.key;
			else return null
		};
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = function() {}, d.$2 = k(), d.$3 = new Set(), d.state = {
				data: {},
				highlightedKeys: k(),
				isHovering: !1,
				items: d.props.items,
				legendHeightDelta: 0,
				preventDisplayChange: !1,
				target: null,
				title: d.props.title
			}, d.$7 = function(a) {
				a = m(a);
				a && (d.$2 = d.$2.add(new(b("CandelaStructs").Highlight)({
					dependentSeriesName: a
				})), d.forceUpdate())
			}, d.$8 = function(a) {
				a = m(a);
				a && (d.$2 = d.$2.remove(new(b("CandelaStructs").Highlight)({
					dependentSeriesName: a
				})), d.forceUpdate())
			}, d.$9 = function(a, b) {
				var c = d.state.legendHeightDelta;
				a = Math.ceil(a.bottom - a.top);
				b = Math.ceil(b.bottom - b.top);
				c += b - a;
				d.setState({
					legendHeightDelta: c
				})
			}, d.$10 = function(a) {
				(h || (h = b("isEmpty")))(a.data) || (Object.keys(a.data).forEach(function(c) {
					a.target.shapeType !== b("CandelaConstants").ShapeType.BAR_GROUP && d.$3.add(c)
				}), d.$1());
				d.setState({
					preventDisplayChange: !0,
					isHovering: !0
				});
				var c;
				c = d.props.onMouseEnter;
				c && c(a);
				c = d.props.chart.props.onMouseEnter;
				c && c(a)
			}, d.$11 = function(a) {
				if (a.target.shapeType === b("CandelaConstants").ShapeType.CHART) d.setState({
					data: {},
					isHovering: !1,
					items: d.props.items,
					preventDisplayChange: !1,
					target: null,
					title: d.props.title
				});
				else {
					d.$1.reset();
					if (a.target.shapeType !== b("CandelaConstants").ShapeType.BAR_GROUP) {
						var c, e = Object.keys((c = a == null ? void 0 : a.data) != null ? c : []);
						e.forEach(function(a) {
							return d.$3["delete"](a)
						});
						d.setState(function(a) {
							return {
								highlightedKeys: a.highlightedKeys.subtract(e)
							}
						})
					}
				}
				c = d.props.onMouseLeave;
				c && c(a);
				c = d.props.chart.props.onMouseLeave;
				c && c(a)
			}, d.$12 = function(a) {
				if (!(h || (h = b("isEmpty")))(a.data)) {
					var c = d.props,
						e = c.formatterFactory,
						f = c.shouldFormatNullValue,
						g = c.title;
					c = c.titleKey;
					var i = d.state,
						j = i.data;
					i = i.items;
					var k = Object.keys(a.data).some(function(b) {
						return j[b] && a.data[b] ? j[b].value !== a.data[b].value : j[b] !== a.data[b]
					});
					if (k && !!i) {
						k = i.map(function(c) {
							if (!(c instanceof b("InsightsItems").BaseItem) && a.data[c.key] == null) return babelHelpers["extends"]({}, c, {
								value: null
							});
							if (!(c instanceof b("InsightsItems").BaseItem) && !c.constant && c.key in a.data) {
								var d = a.data[c.key].scale,
									g = a.data[c.key].value;
								if (g !== void 0 || g === null && f) {
									d = e && e(d, c.key, a.data);
									g = d ? d(g) : g
								}
								return babelHelpers["extends"]({}, c, {
									value: g
								})
							}
							return c
						});
						var l;
						if (c != null && c in a.data) {
							i = a.data[c];
							var m = i.scale;
							i = i.value;
							if (i !== void 0 || i === null && f) {
								m = e && e(m, c);
								l = m ? m(i) : g
							}
						} else l = g;
						d.setState({
							data: a.data,
							items: k,
							target: a.target,
							title: l
						})
					}
				}
				d.$1();
				c = d.props.onMouseMove;
				c && c(a);
				c = d.props.chart.props.onMouseMove;
				c && c(a)
			}, d.$4 = function() {
				var a = k(d.$3);
				d.state.highlightedKeys.equals(a) || d.setState({
					highlightedKeys: a
				})
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.UNSAFE_componentWillMount = function() {
			this.$1 = b("debounceCore")(this.$4, this.props.dwellTimeOverShapeBeforeHighlight != null ? this.props.dwellTimeOverShapeBeforeHighlight : 300)
		};
		d.$5 = function(a) {
			return a.map(function(a) {
				return a instanceof b("InsightsItems").BaseItem ? a : j(a)
			})
		};
		d.$6 = function(a, b) {
			return this.$5(a).equals(this.$5(b))
		};
		d.UNSAFE_componentWillReceiveProps = function(a) {
			var b = a.items;
			a = a.title;
			var c = {};
			this.$6(b, this.props.items) || (c.items = b);
			a !== this.props.title && (c.title = a);
			this.setState(c)
		};
		d.render = function() {
			var a = this.props,
				c = a.anchorRect,
				d = a.children,
				e = a.listLayout,
				f = a.shouldFormatNullValue,
				g = a.verticalLegendWidth,
				h = a.horizontalLegendWidth;
			a = a.width;
			var j = this.state,
				k = j.data,
				m = j.highlightedKeys,
				n = j.items,
				o = j.legendHeightDelta,
				p = j.preventDisplayChange,
				q = j.target;
			j = j.title;
			if (d == null) return null;
			var r = b("joinClasses")(this.state.isHovering ? "hover" : "", d.props.className);
			e = e === "vertical";
			d = i.cloneElement(d, {
				className: r,
				data: k,
				target: q,
				highlightedKeys: m,
				items: n,
				onMouseEnter: this.$7,
				onMouseLeave: this.$8,
				onRectChange: this.$9,
				preventDisplayChange: p,
				title: j
			});
			r = this.props.chart.props;
			k = r.height;
			q = r.highlights;
			m = r.width;
			n = q ? this.$2.union(q) : this.$2;
			p = k;
			j = m;
			isNaN(a) || (j = Number(a));
			e ? j -= g + l : p += o;
			r = i.cloneElement(this.props.chart, {
				anchorRect: c,
				height: p,
				highlights: n,
				includeNullValueInEvent: f,
				onMouseEnter: this.$10,
				onMouseLeave: this.$11,
				onMouseMove: this.$12,
				width: j
			});
			q = e ? "_2ef-" : "";
			var s;
			e ? s = {
				width: g,
				height: k
			} : h != null && (s = {
				width: h
			});
			return i.jsxs("div", {
				className: "clearfix",
				style: {
					width: m
				},
				children: [i.jsx("div", {
					className: q,
					style: s,
					children: d
				}), r]
			})
		};
		return c
	}(i.PureComponent);
	e.exports = c;
	c.defaultProps = {
		dwellTimeOverShapeBeforeHighlight: 300,
		formatterFactory: b("InsightsFormatterFactories").legendFormatterFactory,
		listLayout: "horizontal",
		verticalLegendWidth: 170
	};
	c.propTypes = {
		chart: (d = b("prop-types")).element.isRequired,
		children: d.element.isRequired,
		dwellTimeOverShapeBeforeHighlight: d.number,
		formatterFactory: d.func,
		items: d.instanceOf(a).isRequired,
		listLayout: d.oneOf(["horizontal", "vertical"]),
		title: d.any,
		titleKey: d.string,
		verticalLegendWidth: d.number,
		horizontalLegendWidth: d.number,
		width: d.number,
		anchorRect: d.object,
		onMouseEnter: d.func,
		onMouseLeave: d.func,
		shouldFormatNullValue: d.bool
	}
}), null);
__d("InsightsLegendKey.react", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			if (this.props.children.length !== 2) return;
			var a = b("joinClasses")("_kz-", this.props.className);
			return h.jsxs("div", {
				className: a,
				children: [this.props.children[0], h.jsx("span", {
					className: "_kdk",
					children: this.props.children[1]
				})]
			})
		};
		return c
	}(h.Component);
	e.exports = a
}), null);
__d("InsightsLegendAreaKey.react", ["cx", "InsightsLegendKey.react", "React"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			return h.jsxs(b("InsightsLegendKey.react"), {
				className: this.props.className,
				children: [h.jsx("div", {
					className: "_1l46 _1l47",
					style: {
						background: this.props.color
					}
				}), this.props.children]
			})
		};
		return c
	}(h.Component);
	e.exports = a
}), null);
__d("InsightsDateRange.react", ["fbt", "React", "formatDate"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props.includeTime ? "g:ia F jS, Y" : "F d, Y",
				c = this.props.from,
				d = new Date(this.props.to.getTime() - 1);
			c = b("formatDate")(c, a, {
				utc: this.props.utc
			});
			d = b("formatDate")(d, a, {
				utc: this.props.utc
			});
			if (c != d) {
				a = g._("{from} \u0111\u1ebfn {to}", [g._param("from", c), g._param("to", d)]);
				return h.jsx("span", {
					children: a
				})
			}
			return h.jsx("span", {
				children: c
			})
		};
		return c
	}(h.Component);
	e.exports = a;
	a.defaultProps = {
		includeTime: !1
	}
}), null);
__d("BUIInsightsChartWithLegend.react", ["InsightsChartWithLegend.react", "InsightsItems", "React", "BUIInsightsTheme"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = b("BUIInsightsTheme"),
				c = this.props,
				d = c.chart;
			c = c.items;
			var e = d.props;
			while (e.children && !e.schema) e = g.Children.only(e.children).props;
			var f = e.schema,
				h = Array.from(a.colors.merge(e.colors).values()),
				i = a.autoColors.merge(e.autoColors),
				j = {};
			c.forEach(function(a) {
				if (a instanceof b("InsightsItems").BaseItem && !(a instanceof b("InsightsItems").SeriesDataItem)) return;
				a = a instanceof b("InsightsItems").SeriesDataItem ? a.seriesName : a.key;
				if (a in f && !i.has(a) && !(a in j)) {
					var c = Object.keys(j).length % h.length;
					j[a] = h[c]
				}
			});
			a = i.merge(j);
			d = g.cloneElement(d, {
				autoColors: a
			});
			e = g.cloneElement(this.props.children, {
				autoColors: a
			});
			return g.jsx(b("InsightsChartWithLegend.react"), babelHelpers["extends"]({}, this.props, {
				chart: d,
				items: c,
				children: e
			}))
		};
		return c
	}(g.PureComponent);
	e.exports = a;
	a.propTypes = babelHelpers["extends"]({}, b("InsightsChartWithLegend.react").propTypes)
}), null);
__d("BUIInsightsLegendChart.react", ["BUIInsightsChartWithLegend.react", "BUIInsightsLegend.react", "React", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = b("BUIInsightsChartWithLegend.react").propTypes;
	a.chart;
	a.children;
	c = babelHelpers.objectWithoutPropertiesLoose(a, ["chart", "children"]);
	d = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.children;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
			return g.jsx(b("BUIInsightsChartWithLegend.react"), babelHelpers["extends"]({}, a, {
				chart: c,
				children: g.jsx(b("BUIInsightsLegend.react"), babelHelpers["extends"]({}, a))
			}))
		};
		return c
	}(g.PureComponent);
	e.exports = d;
	d.propTypes = babelHelpers["extends"]({}, c, {
		children: b("prop-types").element,
		auxiliaryItems: (f = b("BUIInsightsLegend.react")).propTypes.auxiliaryItems,
		auxiliaryItemsPosition: f.propTypes.auxiliaryItemsPosition,
		className: f.propTypes.className,
		disableHorizontalLayout: f.propTypes.disableHorizontalLayout,
		display: f.propTypes.display,
		layoutInterval: f.propTypes.layoutInterval,
		listLayout: f.propTypes.listLayout,
		minItemWidthPercentage: f.propTypes.minItemWidthPercentage,
		size: f.propTypes.size,
		titleSize: f.propTypes.titleSize,
		width: f.propTypes.width
	})
}), null);
__d("XUIPageSideNavigationItemAmbientNux.react", ["ContextualLayerUpdateOnScroll", "React", "XUIAmbientNUX.react"], (function(a, b, c, d, e, f) {
	var g = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(b) {
			b = a.call(this, b) || this;
			b.state = {
				isVisible: !0
			};
			return b
		}
		var d = c.prototype;
		d.componentDidMount = function() {
			this.props.onSeen && this.props.onSeen()
		};
		d.onCloseButtonClick = function() {
			this.setState({
				isVisible: !1
			}), this.props.onClose && this.props.onClose()
		};
		d.render = function() {
			return g.jsx(b("XUIAmbientNUX.react"), {
				behaviors: {
					ContextualLayerUpdateOnScroll: b("ContextualLayerUpdateOnScroll")
				},
				contextRef: this.props.contextRef,
				customwidth: this.props.customwidth,
				offsetX: this.props.offsetX,
				offsetY: this.props.offsetY,
				onCloseButtonClick: this.onCloseButtonClick.bind(this),
				shown: this.state.isVisible,
				width: this.props.width,
				position: "right",
				children: this.props.message
			})
		};
		return c
	}(g.Component);
	e.exports = a
}), null);
__d("XUIPageSideNavigationItem.react", ["cx", "Link.react", "React", "XUIPageSideNavigationItemAmbientNux.react", "XUIText.react"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.label,
				d = a.nux;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["label", "nux"]);
			return h.jsxs(b("Link.react"), babelHelpers["extends"]({}, a, {
				ref: "sectionLink",
				children: [h.jsx(b("XUIText.react"), {
					ref: "sectionLabel",
					className: "_3f-j",
					size: "body1",
					children: c
				}), this.$1(d)]
			}))
		};
		d.$1 = function(a) {
			var c = this;
			return a == null ? null : h.jsx(b("XUIPageSideNavigationItemAmbientNux.react"), babelHelpers["extends"]({
				contextRef: function() {
					return c.refs.sectionLabel
				}
			}, a))
		};
		return c
	}(h.Component);
	e.exports = a
}), null);
__d("XUIPageSideNavigation.react", ["cx", "React", "XUIPageSideNavigationItem.react"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this,
				c = h.Children.map(this.props.children, function(c, d) {
					if (!c) return null;
					if (c.type !== b("XUIPageSideNavigationItem.react")) throw new Error("Children must be of type XUIPageSideNavigationItem");
					if (!c.key) throw new Error("Children must have keys defined");
					d = a.props.selectedItemKey === c.key || a.props.selectedItemKey === c.props.itemKey;
					var e = babelHelpers["extends"]({}, c.props, {
						className: "_37_q" + (d ? " _37_r" : "")
					});
					d && (e["aria-current"] = "page");
					return h.cloneElement(c, e)
				});
			return h.jsx("div", babelHelpers["extends"]({}, this.props, {
				children: c
			}))
		};
		return c
	}(h.Component);
	e.exports = a;
	a.Item = b("XUIPageSideNavigationItem.react")
}), null);
__d("HubbleHintsMetrics.react", ["cx", "BUIInsightsHorizontalBarChart.react", "CandelaConstants", "CandelaGroupScaleBuilder", "CandelaStyleSheet", "React", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = b("CandelaConstants").Alignment,
		j = b("CandelaGroupScaleBuilder").group;
	a = b("CandelaConstants").ScaleType;
	var k = 30,
		l = 20,
		m = {
			name: {
				label: "Hint Name",
				type: a.CATEGORY
			},
			value: {
				label: "Reach count",
				type: a.NUMBER
			}
		},
		n = {
			name: {
				label: "Hint Name",
				type: a.CATEGORY
			},
			value: {
				label: "Reach count",
				type: a.PERCENTAGE
			}
		},
		o = b("CandelaStyleSheet").fromJS({
			'axis[alignment="top"]': {
				visibility: "hidden"
			},
			'axis[orientation="horizontal"]': {
				visibility: "hidden"
			},
			'axis[orientation="vertical"]': {
				width: 200
			},
			axisbucketmark: {
				color: "#485665",
				fontSize: 12,
				padding: 18
			},
			"bargroup:hover": {
				fill: "#eee",
				opacity: .2
			},
			bar: {
				margin: 0
			},
			bargroup: {
				margin: 1,
				fill: "#eee"
			},
			'bar[series="value"]': {
				fill: "#9DACCB"
			},
			barlabel: {
				color: "#999999",
				fontSize: 11
			},
			gridline: {
				visibility: "hidden"
			},
			"bar.highlighted": {
				fill: "#5890ff"
			},
			"bar.highlighted>barlabel": {
				color: "#5890ff"
			}
		});
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.createGroupPercentageBarLabelFormatterFactory = function(a) {
				return function(b, c) {
					return function(b, c) {
						switch (a) {
							case "rate":
								return (100 * b).toFixed(2) + "%";
							case "compare_rate":
								if (b > 0) return "+" + (100 * b).toFixed(2) + "%";
								else if (b < 0) return "-" + (100 * b).toFixed(2) + "%";
								else return (100 * b).toFixed(2) + "%"
						}
						return b.toString()
					}
				}
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props.metrics.length * k + l,
				c = this.createGroupPercentageBarLabelFormatterFactory(this.props.metricsType);
			return h.jsxs("div", {
				className: "_vc0",
				children: [h.jsxs("div", {
					className: "_3phy",
					children: [h.jsx("div", {
						className: "_5cmo",
						children: this.props.header
					}), h.jsx("div", {
						className: "_2qqg",
						children: this.props.subtitle
					})]
				}), h.jsx("div", {
					children: h.jsx(b("BUIInsightsHorizontalBarChart.react"), {
						alignment: i.LEFT,
						barLabelFormatterFactory: c,
						data: this.props.metrics,
						height: a,
						plotX: [j("value").from(0).extendInput(0, 1)],
						plotY: j("name"),
						schema: this.props.metricsType == "count" ? m : n,
						styleSheet: o,
						width: 885
					})
				})]
			})
		};
		return c
	}(h.Component);
	e.exports = c;
	c.propTypes = {
		metrics: (d = b("prop-types")).array.isRequired,
		header: d.node.isRequired,
		metricsType: d.string.isRequired,
		subtitle: d.node
	}
}), null);
__d("HubblePrimaryMetric.react", ["cx", "InsightsNumUtils", "React", "joinClasses", "keyMirror", "prop-types"], (function(a, b, c, d, e, f, g) {
	var h = b("React"),
		i = b("keyMirror")({
			flat: null,
			stacked: null
		});
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props.className;
			this.props.layout == i.flat && (a = b("joinClasses")("_5j8e", this.props.className));
			return h.jsxs("div", {
				className: a,
				children: [h.jsx("div", {
					className: "_55k2",
					children: b("InsightsNumUtils").prettyInt(this.props.number)
				}), h.jsx("div", {
					className: "_55k3",
					children: this.props.label
				})]
			})
		};
		return c
	}(h.Component);
	a.defaultProps = {
		layout: i.flat
	};
	a.propTypes = {
		label: b("prop-types").object.isRequired,
		layout: b("prop-types").oneOf(Object.keys(i)),
		number: b("prop-types").number.isRequired
	};
	a.LAYOUT = i;
	e.exports = a
}), null);
__d("HubbleSecondaryMetric.react", ["cx", "InsightsNumUtils", "React", "Tooltip.react", "joinClasses", "keyMirror", "prop-types"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = b("keyMirror")({
		flat: null,
		stacked: null
	});
	c = b("keyMirror")({
		none: null,
		ruled: null
	});
	d = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.getLayoutClass = function() {
				switch (c.props.layout) {
					case "flat":
						return "_5fbt";
					default:
						return ""
				}
			}, c.getDecorationClass = function() {
				switch (c.props.decoration) {
					case "ruled":
						return "_5fbu";
					default:
						return ""
				}
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.render = function() {
			var a = b("joinClasses")("_55vy", this.getDecorationClass(), this.getLayoutClass(), this.props.className),
				c = b("joinClasses")("_55j-", "_50f7"),
				d = b("joinClasses")("_55j_", "_50f8");
			c = h.jsxs("span", {
				children: [h.jsx("div", {
					className: c,
					children: b("InsightsNumUtils").prettyInt(this.props.number)
				}), " ", h.jsx("div", {
					className: d,
					children: this.props.label
				})]
			});
			return h.jsx("div", {
				className: a,
				style: this.props.style,
				children: this.props.tooltip ? h.jsx(b("Tooltip.react"), {
					tooltip: this.props.tooltip,
					alignH: "center",
					children: c
				}) : c
			})
		};
		return c
	}(h.Component);
	d.propTypes = {
		decoration: (f = b("prop-types")).oneOf(Object.keys(c)),
		layout: f.oneOf(Object.keys(a)),
		label: f.oneOfType([f.string, f.element]).isRequired,
		number: f.number.isRequired,
		style: f.object,
		key: f.string,
		tooltip: f.string
	};
	d.LAYOUT = a;
	d.DECORATION = c;
	e.exports = d
}), null);
__d("HubbleSecondaryMetricGroup.react", ["cx", "React", "cloneWithProps_DEPRECATED", "joinClasses"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props.children,
				c = (1 / h.Children.count(a) * 100).toFixed(1) + "%";
			a = h.Children.map(a, function(a) {
				return a ? b("cloneWithProps_DEPRECATED")(a, {
					className: "_5fbx",
					style: {
						width: c
					}
				}) : a
			});
			var d = b("joinClasses")("_5fby", this.props.className);
			return h.jsx("div", {
				className: d,
				children: h.jsx("div", {
					className: "_5fbz",
					children: a
				})
			})
		};
		return c
	}(h.Component);
	e.exports = a
}), null);
__d("InsightsApiClient", ["ApiClient", "PHPQuerySerializer"], (function(a, b, c, d, e, f) {
	var g, h = {};

	function i(a, b, c) {
		c && !c.error && (h[a] = c), b(c)
	}
	a = {
		getRaw: function(a, c, d, e, f, j) {
			var k = c + (g || (g = b("PHPQuerySerializer"))).serialize(d);
			Object.prototype.hasOwnProperty.call(h, k) && !j ? setTimeout(e.bind(null, h[k]), 0) : (Object.prototype.hasOwnProperty.call(a, "accessToken") && (d.access_token = a.accessToken), b("ApiClient").graph(c, d, i.bind(null, k, e), f))
		}
	};
	e.exports = a
}), null);
__d("HubbleApiClient", ["AsyncRequest", "HubbleContext", "InsightsApiClient", "PageInsightsApiAccess"], (function(a, b, c, d, e, f) {
	a = {
		get: function(a, c, d) {
			if (!b("HubbleContext").getPageID()) return;
			a = b("HubbleContext").getPageID() + (a || "");
			c.version && (a = c.version + "/" + a, c.version = null);
			this.getRaw(a, c, d)
		},
		getPosts: function(a, c) {
			a.page_id = a.page_id || b("HubbleContext").getPageID();
			if (!a.page_id) return;
			a = new(b("AsyncRequest"))().setData(a).setMethod("GET").setPreBootloadHandler(function(a) {
				c(a.payload)
			}).setReadOnly(!0).setURI("/ajax/pages/insights/post_fields").setErrorHandler(function(a) {
				c({
					posts: [],
					cursor: null,
					type: "published"
				})
			});
			a.send()
		},
		getRaw: function(a, c, d) {
			b("InsightsApiClient").getRaw(b("PageInsightsApiAccess"), a, c, d)
		}
	};
	e.exports = a
}), null);
__d("HubblePostUtils", ["HubbleContext", "getOwnObjectValues", "mapObject", "sumOfArray"], (function(a, b, c, d, e, f) {
	var g;
	a = {
		_metrics: ["post_engaged_users", "post_clicks_by_type", "post_impressions_by_paid_non_paid", "post_impressions_unique", "post_activity_by_action_type", "post_negative_feedback_by_type", "post_impressions_paid_unique", "post_impressions_organic_unique", "post_impressions_fan_unique", "post_video_views_organic", "post_video_views_paid", "post_living_room_60s_viewers", "post_living_room_view_time"],
		parseInsights: function(a, c) {
			c = c || {};
			var d = c.post_clicks_by_type || {},
				e = c.post_activity_by_action_type || {},
				f = c.post_negative_feedback_by_type || {},
				g = c.post_impressions_unique || 0,
				h = c.post_impressions_by_paid_non_paid || {};
			e = {
				like: e.LIKE || e.like || 0,
				comment: e.COMMENT || e.comment || 0,
				share: e.SHARE || e.share || 0
			};
			var i = b("sumOfArray")(b("getOwnObjectValues")(e)),
				j = {};
			j.link = d["link clicks"] || 0;
			a === "video" || a === "premiumVideo" ? j.video_play = d["video play"] || 0 : a !== "sharedVideo" && (j.photo_view = d["photo view"] || 0);
			j.other = d["other clicks"] || 0;
			j.other < 0 && (j.other = 0);
			a = b("sumOfArray")(b("getOwnObjectValues")(j));
			d = {
				hide_clicks: f.hide_clicks || 0,
				hide_all_clicks: f.hide_all_clicks || 0,
				report_spam_clicks: f.report_spam_clicks || 0,
				unlike_page_clicks: f.unlike_page_clicks || 0
			};
			f = b("sumOfArray")(b("getOwnObjectValues")(d));
			var k = c.post_impressions_paid_unique || 0,
				l = c.post_impressions_organic_unique || g - k,
				m = c.post_impressions_fan_unique || 0;
			k = {
				paid: k,
				organic: l,
				total: g,
				fans: m,
				nonfans: g - m
			};
			l = {
				paid: h.paid || 0,
				organic: h.unpaid || 0,
				total: h.total || 0
			};
			m = c.post_engaged_users || 0;
			h = g > 0 ? m / g : 0;
			var n = c.post_video_views_organic + c.post_video_views_paid,
				o = null;
			c.post_living_room_60s_viewers != null && (o = o || {}, o.viewerCount60s = c.post_living_room_60s_viewers);
			c.post_living_room_view_time != null && (o = o || {}, o.minutesViewed = c.post_living_room_view_time);
			return {
				clicks: a,
				clicksByType: j,
				engagedUsers: m,
				impressionByType: l,
				lcs: i,
				lcsByType: e,
				livingRoom: o,
				negative: f,
				negativeFeedbackByType: d,
				reach: g,
				reachByType: k,
				engagementRate: h,
				videoViews: n
			}
		},
		_formatPostInsightsResponse: function(a, c) {
			return (g || (g = b("mapObject")))(c, function(b) {
				var c = {};
				if (!b.data) return c;
				b.data.forEach(function(a) {
					c[a.name] = a.values[0].value
				});
				a.forEach(function(a) {
					Object.prototype.hasOwnProperty.call(c, a) || (c[a] = null)
				});
				return c
			})
		},
		formatPostHintsRateMetrics: function(a, b) {
			var c = {};
			for (var d in a) {
				var e = a[d],
					f = b[d];
				f !== void 0 && (c[d] = f === 0 ? 0 : e / f)
			}
			return c
		},
		formatPostHintsImpRatioMetrics: function(a, b) {
			var c = {};
			for (var d in a) {
				var e = a[d];
				c[d] = b === 0 ? 0 : e / b
			}
			return c
		},
		formatPostHintsInsights: function(a, b, c) {
			a = [];
			return a
		},
		_formatPostHintKeys: function(a) {
			var b = 32;
			b = a.length > b ? a.substring(0, b - 3).trim() + "..." : a;
			return b
		},
		sortPostHintsMetrics: function(a) {
			var b = {},
				c = Object.keys(a).sort(function(b, c) {
					return a[c] - a[b]
				});
			c.forEach(function(c) {
				b[c] = a[c]
			});
			return b
		}
	};
	e.exports = a
}), null);
__d("InsightsUtils", ["invariant", "DateTime", "Timezone", "UTCUtils", "d3-old/time/day"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("Timezone").UTC,
		i = 24 * 60 * 60,
		j = 25 * 60 * 60,
		k = {
			dateToSeconds: function(a) {
				return a instanceof Date ? parseInt(a.getTime() / 1e3, 10) : a
			},
			_isEmpty: function(a) {
				return Object.keys(a).length === 0
			},
			_isKeyed: function(a) {
				for (var b = 0; b < a.length; ++b) {
					if (typeof a[b].value !== "object") return !1;
					if (!this._isEmpty(a[b].value)) return !0
				}
				return !0
			},
			formatInsightsResponse: function(a) {
				var b = this;
				b = -Infinity;
				var c = 0,
					d = null,
					e = !1,
					f = 0,
					g = null,
					h = 0,
					l = Infinity,
					m = a.data.length,
					n = null,
					o = null,
					p = {},
					q = {};
				for (var r = 0; r < m; ++r) {
					d = a.data[r];
					for (var s = 0; s < d.values.length;) Object.prototype.hasOwnProperty.call(d.values[s], "value") ? s++ : d.values.splice(s, 1);
					if (d.values.length === 0) continue;
					e = this._isKeyed(d.values);
					l = Math.min(l, d.values[0].end_time - i);
					b = Math.max(b, d.values[d.values.length - 1].end_time);
					p[d.name] = p[d.name] || {};
					if (e) {
						p[d.name][d.period] = g = {};
						for (var s = 0; s < d.values.length; ++s) o = d.values[s], Object.keys(o.value).forEach(function(a) {
							Object.prototype.hasOwnProperty.call(g, a) || (p[d.name][d.period][a] = null)
						})
					} else p[d.name][d.period] = null;
					d.description_from_api_doc && (q[d.name] = d.description_from_api_doc)
				}
				h = Math.round((b - l) / i);
				for (var s = 0; s < m; ++s) {
					c = l;
					d = a.data[s];
					if (d.values.length === 0) continue;
					e = this._isKeyed(d.values);
					f = 0;
					n = d.period + "_timestamps";
					r = k.fillArray(h, null);
					p[d.name][n] = r;
					e || (p[d.name][d.period] = k.fillArray(h, null));
					r = function(a) {
						o = d.values[a], o.end_time - c > j && (f += Math.round((o.end_time - c) / i) - 1), e ? (g = p[d.name][d.period], Object.keys(g).forEach(function(b) {
							g[b] === null && (g[b] = k.fillArray(h, null)), g[b][a + f] = o.value[b] || 0
						})) : typeof o.value === "object" ? p[d.name][d.period][a + f] = 0 : p[d.name][d.period][a + f] = o.value, p[d.name][n][a + f] = o.end_time, c = o.end_time
					};
					for (var t = 0; t < d.values.length; ++t) r(t)
				}
				t = {
					endTime: k.pacificSecondsToUTCDate(b),
					seriesLength: h,
					startTime: k.pacificSecondsToUTCDate(l + i),
					values: p
				};
				Object.keys(q).length > 0 && (t.descriptions = q);
				return t
			},
			formatParams: function(a) {
				var b = babelHelpers["extends"]({}, a);
				b.date_format = "U";
				a.since && (b.since = this.utcDateToPacificSeconds(a.since));
				a.until && (b.until = this.utcDateToPacificSeconds(a.until));
				return b
			},
			localTimeToPacificDate: function(a) {
				return new Date(a.getTime() + b("UTCUtils").offsetFromPacificTime(a))
			},
			pacificSecondsToUTCDate: function(a) {
				a = a * 1e3;
				return new Date(a + b("UTCUtils").getPacificOffsetAt(a))
			},
			utcDateToPacificSeconds: function(a) {
				return this.dateToSeconds(a) - Math.round(b("UTCUtils").getPacificOffsetAt(a) / 1e3)
			},
			utcTimeToPacificTime: function(a) {
				return new Date(a.getTime() - b("UTCUtils").getPacificOffsetAt(a))
			},
			utcTimeToPacificDay: function(a) {
				return new Date(b("d3-old/time/day").utc.floor(a).getTime() - b("UTCUtils").getPacificOffsetAt(a))
			},
			timestampToUTCDay: function(a, c) {
				a = new(b("DateTime"))(a, c);
				return a.toParallelDate()
			},
			utcDayToTimestamp: function(a, c) {
				a = b("DateTime").fromDate(a, h);
				a = a.getParallel(c);
				return a.getUnixTimestampSeconds()
			},
			pstTimeToUTCDay: function(a) {
				return b("d3-old/time/day").utc.floor(new Date(a.getTime() + b("UTCUtils").getPacificOffsetAt(a)))
			},
			utcTimeToPST: function(a) {
				return new Date(b("d3-old/time/day").utc.floor(a).getTime() - b("UTCUtils").getPacificOffsetAt(a))
			},
			getMostRecentPacificDayBegin: function(a) {
				a = a.getTime();
				a = a + b("UTCUtils").getPacificOffsetAt(a);
				a = b("d3-old/time/day").utc.floor(new Date(a)).getTime();
				a = new Date(a - b("UTCUtils").getPacificOffsetAt(a));
				return a
			},
			fillArray: function(a, b) {
				var c = new Array(a);
				for (var d = 0; d < a;) c[d++] = b;
				return c
			},
			getRangeIndices: function(a, b) {
				return [k.millisecondsToDays(b.since - a) + 1, k.millisecondsToDays(b.until - a)]
			},
			millisecondsToDays: function(a) {
				var b = 1e3 * 60 * 60 * 24;
				return Math.round(a / b)
			},
			sliceData: function(a, b, c) {
				b = k.getRangeIndices(b, c);
				return a.slice(b[0], b[1] + 1)
			},
			moveRange: function(a, c) {
				c = c || -7;
				return {
					since: b("d3-old/time/day").utc.offset(a.since, c),
					until: b("d3-old/time/day").utc.offset(a.until, c)
				}
			},
			chartHasDataToRender: function(a) {
				return a.lines && a.lines.length || a.areas && a.areas.length
			},
			getNowOffsetByPacificTimezone: function() {
				var a = Date.now();
				return new Date(a + b("UTCUtils").getPacificOffsetAt(a))
			}
		};
	e.exports = k
}), null);
__d("SanityCheckNames", [], (function(a, b, c, d, e, f) {
	a = Object.freeze({
		PI_API_RESPONSE: "page_insights.api_responded_with_data",
		PI_REACH_GT_ENGMT: "page_insights.reach_greater_than_engagement",
		AI_REACH_IMPRESSIONS: "ads_insights.reach_impressions",
		AI_CLICKS: "ads_insights.clicks",
		AI_DWELLS: "ads_insights.dwells",
		AI_SPEND: "ads_insights.spend",
		AI_VIDEO_VIEWS: "ads_insights.video_views"
	});
	e.exports = a
}), null);
__d("SanityCheckStatuses", [], (function(a, b, c, d, e, f) {
	a = Object.freeze({
		VALID: 1,
		INVALID_CONFIG: 2,
		CHECKTIME_FAILURE: 3
	});
	e.exports = a
}), null);
__d("SanityCheck", ["FBLogger", "SanityCheckNames", "SanityCheckStatuses"], (function(a, b, c, d, e, f) {
	var g = Object.keys(b("SanityCheckNames")).map(function(a) {
		return b("SanityCheckNames")[a]
	});
	a = function() {
		"use strict";

		function a(a, c) {
			this.$1 = b("SanityCheckStatuses").VALID, this.$2 = a, this.$3 = c, g.indexOf(this.$3) === -1 && (b("FBLogger")("FIXME").mustfix("Invalid SanityCheck name: %s", this.$3), this.$1 = b("SanityCheckStatuses").INVALID_CONFIG)
		}
		var c = a.prototype;
		c.check = function(a) {
			if (this.$1 !== b("SanityCheckStatuses").VALID) return {
				name: this.$3,
				status: this.$1
			};
			var c;
			try {
				c = this.$2.apply(null, a)
			} catch (c) {
				b("FBLogger")("sanity_check").catching(c).mustfix("Failed to check");
				return {
					args: a,
					status: b("SanityCheckStatuses").CHECKTIME_FAILURE
				}
			}
			return {
				args: a,
				name: this.getName(),
				passed: c,
				status: this.$1
			}
		};
		c.getName = function() {
			return this.$3
		};
		return a
	}();
	e.exports = a
}), null);
__d("PIAPIResponseSanityCheck", ["SanityCheck", "SanityCheckNames"], (function(a, b, c, d, e, f) {
	a = new(b("SanityCheck"))(function(a, b) {
		return !!a.metric && b.data.length > 0
	}, b("SanityCheckNames").PI_API_RESPONSE);
	e.exports = a
}), null);
__d("SanityCheckChecker", [], (function(a, b, c, d, e, f) {
	var g = {
		check: function(a, b) {
			return a.check(b)
		},
		checkMulti: function(a) {
			return a.map(function(a) {
				return g.check(a.sanityCheck, a.args)
			})
		}
	};
	e.exports = g
}), null);
__d("SanityCheckAdapter", ["BanzaiLogger", "ODS", "SanityCheckChecker", "SanityCheckStatuses"], (function(a, b, c, d, e, f) {
	var g = {};

	function h(a, c, d, e) {
		d = d || {};
		c = [a.getName(), JSON.stringify(c), JSON.stringify(d)].join(":");
		if (Object.prototype.hasOwnProperty.call(g, c)) return;
		g[c] = !0;
		e.passed || b("BanzaiLogger").log("SanityCheckLoggerConfig", Object.assign(d, {
			name: a.getName()
		}));
		b("ODS").bumpFraction(2966, "sanity_check.pass_ratio", "sanity_check." + a.getName(), e.passed ? 1 : 0, 1)
	}
	a = {
		check: function(a, c, d) {
			var e = b("SanityCheckChecker").check(a, c);
			e.status === b("SanityCheckStatuses").VALID && h(a, c, d, e);
			return e.passed
		}
	};
	e.exports = a
}), null);
__d("HubbleApiWrapper", ["HubbleApiClient", "HubbleContext", "HubblePostUtils", "InsightsUtils", "PIAPIResponseSanityCheck", "SanityCheckAdapter", "setImmediate"], (function(a, b, c, d, e, f) {
	function g(a) {
		return function(c) {
			var d = null;
			if (c.cursor) {
				var e = c.posts[c.posts.length - 1].created_time;
				d = function(a) {
					b("HubbleApiClient").getPosts({
						cursor: c.cursor,
						type: c.type,
						until: e,
						breaking_only: c.breaking_only,
						post_filter_type: c.post_filter_type
					}, g(a))
				}
			} else c.paging && c.paging.next && (d = function(a) {
				b("HubbleApiClient").getRaw(c.paging.next, {}, g(a))
			});
			a(c, d)
		}
	}
	var h = {
		_formatPageInsightsPerPostResponse: function(a, b) {
			var c = {},
				d = /^([^\/]+)\//;
			b.data.forEach(function(b) {
				var e = d.exec(b.id);
				if (!e || !e[1]) return;
				e = e[1];
				var f;
				Object.prototype.hasOwnProperty.call(c, e) ? f = c[e] : (c[e] = f = {}, a.forEach(function(a) {
					f[a] = null
				}));
				f[b.name] = b.values[0].value
			});
			return c
		},
		getPageInfo: function(a, c) {
			var d = "";
			b("HubbleApiClient").get(d, a, c)
		},
		getPageInsights: function(a, c) {
			a = b("InsightsUtils").formatParams(a), b("HubbleApiClient").get("/insights", a, function(d) {
				b("setImmediate")(b("SanityCheckAdapter").check.bind(b("SanityCheckAdapter"), b("PIAPIResponseSanityCheck"), [a, d], {
					metrics: JSON.stringify(a.metric),
					pageID: b("HubbleContext").getPageID()
				})), c(b("InsightsUtils").formatInsightsResponse(d))
			})
		},
		getPageInsightsPerPost: function(a, c) {
			a = b("InsightsUtils").formatParams(a);

			function d(b) {
				return g(function(c, e) {
					var f = e ? function(a) {
						e(d(a))
					} : null;
					b(h._formatPageInsightsPerPostResponse(a.metric, c), f)
				})
			}
			b("HubbleApiClient").get("/insights", a, d(c))
		},
		getPostInsights: function(a, c) {
			b("HubbleApiClient").getRaw("/insights", a, function(d) {
				c(b("HubblePostUtils")._formatPostInsightsResponse(a.metric, d))
			})
		},
		getVersionedPostInsights: function(a, c) {
			var d = "insights";
			a.version && (d = a.version + "/" + d, a.version = null);
			b("HubbleApiClient").getRaw(d, a, function(d) {
				c(b("HubblePostUtils")._formatPostInsightsResponse(a.metric, d))
			})
		},
		getPostsByIDs: function(a, c) {
			a = b("InsightsUtils").formatParams(a), b("HubbleApiClient").getPosts(a, c)
		},
		getPosts: function(a, c) {
			a = b("InsightsUtils").formatParams(a), b("HubbleApiClient").getPosts(a, g(c))
		},
		getTotalPageLikes: function(a) {
			b("HubbleContext").get("globalPagesRootID") ? h.getPageInfo({
				fields: ["country_page_likes"]
			}, function(b) {
				a(b.country_page_likes)
			}) : h.getPageInfo({
				fields: ["likes"]
			}, function(b) {
				a(b.likes)
			})
		}
	};
	e.exports = h
}), null);
__d("HubblePostsDataLayer", ["fbt", "AsyncRequest", "GraphAPI", "HubbleApiWrapper", "HubbleConstants", "HubbleContext", "HubblePostUtils", "getOwnObjectValues", "promiseDone"], (function(a, b, c, d, e, f, g) {
	var h = 50,
		i = 2.5,
		j = ["post_video_avg_time_watched", "post_video_complete_views_organic", "post_video_complete_views_organic_unique", "post_video_complete_views_paid", "post_video_complete_views_paid_unique", "post_video_length", "post_video_retention_graph", "post_video_views_organic", "post_video_views_organic_unique", "post_video_views_paid", "post_video_views_paid_unique"],
		k = ["post_impressions_unique", "post_video_views_organic", "post_video_views_paid", "post_video_avg_time_watched", "post_video_length"],
		l = j.concat(["post_video_avg_time_watched_by_ad_id", "post_video_complete_views_paid_by_ad_id", "post_video_complete_views_paid_by_ad_id_unique", "post_video_retention_graph_by_ad_id", "post_video_views_paid_by_ad_id", "post_video_views_paid_by_ad_id_unique"]),
		m = ["post_video_avg_time_watched", "post_video_complete_views_30s", "post_video_complete_views_30s_autoplayed", "post_video_complete_views_30s_clicked_to_play", "post_video_complete_views_30s_organic", "post_video_complete_views_30s_paid", "post_video_complete_views_30s_unique", "post_video_length", "post_video_retention_graph", "post_video_retention_graph_autoplayed", "post_video_retention_graph_clicked_to_play", "post_video_sound_on", "post_video_starts", "post_video_starts_autoplayed", "post_video_starts_clicked_to_play", "post_video_starts_organic", "post_video_starts_paid", "post_video_starts_unique", "post_video_views", "post_video_views_autoplayed", "post_video_views_clicked_to_play", "post_video_views_organic", "post_video_views_paid", "post_video_views_unique"],
		n = ["post_impressions_unique", "post_interests_impressions_unique", "post_interests_consumptions_by_type_unique"],
		o = ["post_audio_listen_time", "post_audio_listen_count"],
		p, q;

	function r(a, b, c) {
		var d = !1;
		a(function(a, c) {
			d || b(a, c)
		}, function(a, b) {
			d || c(a, b)
		});
		return function() {
			d = !0
		}
	}

	function s(a) {
		var b = a.post_video_avg_time_watched / a.post_video_length,
			c = a.post_video_avg_time_watched,
			d = a.post_impressions_unique || 0,
			e = a.post_video_length;
		a = a.post_video_views_organic + a.post_video_views_paid;
		return {
			avgCompletionPerc: b,
			avgTimeWatched: c,
			reach: d,
			videoLength: e,
			videoViews: a
		}
	}

	function t(a) {
		return {
			aggregate: {
				averageTimeWatched: a.post_video_avg_time_watched,
				completedViews: {
					repeat: {
						organic: a.post_video_complete_views_organic - a.post_video_complete_views_organic_unique,
						paid: a.post_video_complete_views_paid - a.post_video_complete_views_paid_unique
					},
					total: {
						organic: a.post_video_complete_views_organic,
						paid: a.post_video_complete_views_paid
					},
					unique: {
						organic: a.post_video_complete_views_organic_unique,
						paid: a.post_video_complete_views_paid_unique
					}
				},
				views: {
					repeat: {
						organic: a.post_video_views_organic - a.post_video_views_organic_unique,
						paid: a.post_video_views_paid - a.post_video_views_paid_unique
					},
					total: {
						organic: a.post_video_views_organic,
						paid: a.post_video_views_paid
					},
					unique: {
						organic: a.post_video_views_organic_unique,
						paid: a.post_video_views_paid_unique
					}
				},
				viewingBehavior: a.post_video_retention_graph !== null ? b("getOwnObjectValues")(a.post_video_retention_graph) : null
			},
			videoLength: a.post_video_length
		}
	}

	function u(a) {
		return !a ? {} : {
			aggregate: {
				averageTimeWatched: a.post_video_avg_time_watched,
				completedViews: {
					autoplayed: a.post_video_complete_views_30s_autoplayed,
					clickedToPlay: a.post_video_complete_views_30s_clicked_to_play,
					organic: a.post_video_complete_views_30s_organic,
					paid: a.post_video_complete_views_30s_paid,
					repeat: a.post_video_complete_views_30s - a.post_video_complete_views_30s_unique,
					unique: a.post_video_complete_views_30s_unique
				},
				playsWithSoundOn: a.post_video_sound_on,
				videoStarts: a.post_video_starts,
				views: {
					autoplayed: a.post_video_views_autoplayed,
					clickedToPlay: a.post_video_views_clicked_to_play,
					organic: a.post_video_views_organic,
					paid: a.post_video_views_paid,
					repeat: a.post_video_views - a.post_video_views_unique,
					unique: a.post_video_views_unique
				},
				starts: {
					autoplayed: a.post_video_starts_autoplayed,
					clickedToPlay: a.post_video_starts_clicked_to_play,
					organic: a.post_video_starts_organic,
					paid: a.post_video_starts_paid,
					repeat: a.post_video_starts - a.post_video_starts_unique,
					unique: a.post_video_starts_unique
				},
				viewingBehaviorAutoplayed: a.post_video_retention_graph_autoplayed !== null ? b("getOwnObjectValues")(a.post_video_retention_graph_autoplayed) : null,
				viewingBehaviorClickedToPlay: a.post_video_retention_graph_clicked_to_play !== null ? b("getOwnObjectValues")(a.post_video_retention_graph_clicked_to_play) : null,
				viewingBehavior: a.post_video_retention_graph !== null ? b("getOwnObjectValues")(a.post_video_retention_graph) : null
			},
			videoLength: a.post_video_length
		}
	}

	function v(a) {
		var c = a.post_video_avg_time_watched_by_ad_id,
			d = a.post_video_complete_views_paid_by_ad_id,
			e = a.post_video_complete_views_paid_by_ad_id_unique,
			f = a.post_video_views_paid_by_ad_id,
			h = a.post_video_views_paid_by_ad_id_unique,
			i = a.post_video_retention_graph_by_ad_id;
		a = c ? Object.keys(c) : [];
		var j = {},
			k = 1;
		a.forEach(function(a) {
			var l = g._("Ad {placement number}", [g._param("placement number", k)]);
			k++;
			j[a] = {
				averageTimeWatched: c[a],
				completedViews: {
					total: {
						organic: 0,
						paid: d[a]
					},
					unique: {
						organic: 0,
						paid: e[a]
					}
				},
				label: l,
				views: {
					total: {
						organic: 0,
						paid: f[a]
					},
					unique: {
						organic: 0,
						paid: h[a]
					}
				},
				viewingBehavior: b("getOwnObjectValues")(i[a])
			}
		});
		return j
	}

	function w(a, b) {
		var c = b.post_interests_consumptions_by_type_unique || {},
			d = b.post_impressions_unique || 0;
		b = b.post_interests_impressions_unique || {};
		var e = {};
		e.link = c["link clicks"] || {};
		a === "video" || a === "premiumVideo" ? e.video_play = c["video play"] || {} : e.photo_view = c["photo view"] || {};
		e.other = c["other clicks"] || {};
		return {
			clicksByType: e,
			hintReach: b,
			postReach: d
		}
	}

	function x(a) {
		return a.message || a.name || a.caption || a.description || a.story || a.picture
	}

	function y(a) {
		return a.id
	}

	function z(a) {
		return a.promotable_post_id
	}

	function A(a, c, d) {
		var e = [];
		for (var f in a) Object.prototype.hasOwnProperty.call(a, f) && e.push(f);
		if (!e.length) {
			d([]);
			return
		}
		var g = 1,
			h = null,
			i = {};

		function j() {
			var e = [];
			for (var f in a)
				if (Object.prototype.hasOwnProperty.call(h, f) && Object.prototype.hasOwnProperty.call(a, f)) {
					var g = h[f];
					x(g) && (g.insights = b("HubblePostUtils").parseInsights(g.type, a[f]), g.promoteStatus = i[f], e.push(g))
				} c(e);
			d(e)
		}
		b("HubbleContext").get("canSeePromoteButton") && (g++, B(e.join(","), null, function(a) {
			i = a.getPayload(), --g, g === 0 && j()
		}));
		b("HubbleApiWrapper").getPostsByIDs({
			ids: e.join(",")
		}, function(a) {
			h = {}, a.posts.forEach(function(a) {
				h[a.id] = a
			}), --g, g === 0 && j()
		})
	}

	function B(a, c, d) {
		a = new(b("AsyncRequest"))().setData({
			ids: a,
			promotable_ids: c
		}).setHandler(d).setMethod("GET").setReadOnly(!0).setURI("/ajax/pages/insights/promotion_status/");
		a.send()
	}

	function C(a, c, d) {
		var e = a.posts.filter(x);
		c(e);
		if (!e.length) {
			d(e);
			return
		}
		a = e.map(y).join(",");
		var f = e.map(z).join(","),
			g = 1;
		b("HubbleContext").get("canSeePromoteButton") && (g++, B(a, f, function(a) {
			var b = a.getPayload();
			e.forEach(function(a) {
				a.promoteStatus = b[a.id]
			});
			--g ? c(e) : d(e)
		}));
		b("HubbleApiWrapper").getPostInsights({
			ids: a,
			metric: b("HubblePostUtils")._metrics
		}, function(a) {
			e.forEach(function(c) {
				c.insights = b("HubblePostUtils").parseInsights(c.type, a[c.id])
			}), --g ? c(e) : d(e)
		})
	}

	function D(a, c, d) {
		var e = a.posts.filter(x);
		c(e);
		if (!e.length) {
			d(e);
			return
		}
		a = e.map(y).join(",");
		b("HubbleApiWrapper").getPostInsights({
			ids: a,
			metric: b("HubblePostUtils")._metrics
		}, function(a) {
			e.forEach(function(c) {
				c.insights = b("HubblePostUtils").parseInsights(c.type, a[c.id])
			}), d(e)
		})
	}

	function E(a, c, d) {
		var e = a.posts.filter(x);
		c(e);
		if (!e.length) {
			d(e);
			return
		}
		a = e.map(y).join(",");
		b("HubbleApiWrapper").getPostInsights({
			ids: a,
			metric: k
		}, function(a) {
			e.forEach(function(b) {
				b.insights = s(a[b.id])
			}), d(e)
		})
	}

	function F(a, c) {
		return function(d) {
			var e = d.data;
			e.forEach(function(a) {
				a.insights = null, a.created_time = new Date(a.created_time).getTime() / 1e3
			});
			a(e);
			if (e.length) {
				d = e.map(y).join(",");
				b("HubbleApiWrapper").getPostInsights({
					ids: d,
					metric: b("HubblePostUtils")._metrics
				}, function(a) {
					e.forEach(function(c) {
						c.insights = b("HubblePostUtils").parseInsights(c.type, a[c.id])
					}), c(e)
				})
			}
		}
	}

	function G(a, b, c) {
		return function(d, e) {
			var f = e ? function(b, c) {
				e(G(a, b, c))
			} : null;

			function g(a) {
				b(a, f)
			}

			function h(a) {
				c(a, f)
			}
			a(d, g, h)
		}
	}
	var H = {
		validatePostInsightsMetric: function(a, b, c, d) {
			var e = {};
			e.insights = a;
			e.id = b;
			e.type = c;
			e.created_time = d
		},
		getActivePostsSortedByMetric: function(a, c, d, e, f, g) {
			d.since < b("HubbleContext").get("earliestActivePostsData"), p && p(), p = r(function(f, g) {
				b("HubbleApiWrapper").getPageInsightsPerPost({
					active_post: 1,
					limit: e,
					metric: ["post_lcs_imps_clicks"],
					since: d.since,
					sort_dir: c,
					sort_metric: a,
					until: d.until
				}, G(A, f, g))
			}, f, g)
		},
		getPostsSortedByMetric: function(a, c, d, e, f, g) {
			p && p(), p = r(function(f, g) {
				b("HubbleApiWrapper").getPageInsightsPerPost({
					metric: b("HubblePostUtils")._metrics.concat(a),
					limit: e,
					since: d.since,
					until: d.until,
					sort_metric: a,
					sort_dir: c
				}, G(A, f, g))
			}, f, g)
		},
		getPostsByDescendingDate: function(a, c, d, e, f, g, h, i) {
			a = a ? {
				since: a.since,
				until: a.until
			} : {};
			var j = babelHelpers["extends"]({}, a, {
				fields: g,
				limit: c,
				type: f,
				recent_posts_only: i,
				post_filter_type: h
			});
			f === b("HubbleConstants").REQ_PREMIUM_VIDEO ? (q && q(), q = r(function(a, c) {
				b("HubbleApiWrapper").getPosts(j, G(C, a, c))
			}, d, e)) : (p && p(), p = r(function(a, c) {
				b("HubbleApiWrapper").getPosts(j, G(C, a, c))
			}, d, e))
		},
		getPostsByQuery: function(a, c, d, f) {
			p && p();
			var g = ["id", "picture", "created_time", "message", "privacy", "status_type", "type", "object_id"];
			p = r(function(d, f) {
				b("promiseDone")(b("GraphAPI")(i, e.id).object("page", a).edge("posts").get({
					access_token: b("HubbleContext").get("pageAccessToken"),
					fields: g,
					q: c
				}), F(d, f))
			}, d, f)
		},
		getVideosByViewCount: function(a, c, d, e, f) {
			a = a ? {
				since: a.since,
				until: a.until
			} : {};
			var g = babelHelpers["extends"]({}, a, {
				limit: c,
				type: f
			});
			p && p();
			p = r(function(a, c) {
				b("HubbleApiWrapper").getPosts(g, G(E, a, c))
			}, d, e)
		},
		getPostsMetrics: function(a, c, d, e) {
			b("HubbleApiWrapper").getPosts({
				limit: c,
				since: a.since,
				until: a.until
			}, function(a) {
				D(a, d, e)
			})
		},
		getPostsMetricsByPostType: function(a, b, c) {
			var d = {
				all: {},
				everyone: {
					paid: {},
					organic: {}
				},
				targeted: {
					paid: {},
					organic: {}
				}
			};

			function e(a) {
				var b = a.privacy.value === "EVERYONE" || a.privacy.value === "";
				b = b ? d.everyone : d.targeted;
				return a.insights.reachByType.paid ? b.paid : b.organic
			}

			function f(a, b) {
				var c = a[b.type];
				c || (a[b.type] = c = {
					clicks: 0,
					lcs: 0,
					reach: 0,
					count: 0
				});
				c.clicks += b.insights.clicks;
				c.lcs += b.insights.lcs;
				c.reach += b.insights.reach;
				c.count++
			}

			function g(a) {
				b()
			}

			function i(a) {
				a.forEach(function(a) {
					f(e(a), a), f(d.all, a)
				}), c(d)
			}
			H.getPostsMetrics(a, h, g, i)
		},
		getPostMetricsByID: function(a, c, d, e) {
			b("HubbleApiWrapper").getPostInsights({
				ids: a,
				metric: b("HubblePostUtils")._metrics
			}, function(f) {
				f = {
					insights: b("HubblePostUtils").parseInsights(c, f[a])
				};
				d(f);
				e(f)
			})
		},
		getPostVideoMetricsByID: function(a, c) {
			b("HubbleApiWrapper").getPostInsights({
				ids: a,
				metric: j
			}, function(b) {
				c({
					videoInsights: t(b[a])
				})
			})
		},
		getPostPremiumVideoMetricsByID: function(a, c) {
			b("HubbleApiWrapper").getPostInsights({
				ids: a,
				metric: l
			}, function(b) {
				var d = t(b[a]);
				d.placements = v(b[a]);
				c({
					videoInsights: d
				})
			})
		},
		getPostVideoMetricsWithAutoplay: function(a, c) {
			b("HubbleApiWrapper").getPostInsights({
				ids: a,
				metric: m
			}, function(b) {
				c({
					videoInsights: u(b[a])
				})
			})
		},
		getPostHintsMetrics: function(a, c, d) {
			b("HubbleApiWrapper").getVersionedPostInsights({
				ids: c,
				metric: n,
				version: "v2.4"
			}, function(b) {
				d({
					hintsInsights: w(a, b[c])
				})
			})
		},
		getLiveAudioMetrics: function(a, c, d) {
			b("HubbleApiWrapper").getVersionedPostInsights({
				ids: c,
				metric: o,
				version: "v2.8"
			}, function(a) {
				d({
					liveAudioInsights: a[c]
				})
			})
		}
	};
	e.exports = H
}), null);
__d("PIReachGtEngmtSanityCheck", ["PISanityCheckConfig", "SanityCheck", "SanityCheckNames"], (function(a, b, c, d, e, f) {
	a = new(b("SanityCheck"))(function(a, c, d) {
		return d > b("PISanityCheckConfig").postCreatedTimeMaxValueInSeconds ? !0 : a >= c
	}, b("SanityCheckNames").PI_REACH_GT_ENGMT);
	e.exports = a
}), null);
__d("HubbleSanityChecks", ["PIReachGtEngmtSanityCheck", "SanityCheckAdapter"], (function(a, b, c, d, e, f) {
	a = {
		checkReachGtEngmt: function(a) {
			return b("SanityCheckAdapter").check(b("PIReachGtEngmtSanityCheck"), [a.insights.reach, a.insights.engagedUsers, a.created_time], {
				postClicks: a.insights.clicks,
				postCreationTime: a.created_time,
				postEngagedUsers: a.insights.engagedUsers,
				postID: a.id,
				postLCS: a.insights.lcs,
				postPaidReach: a.insights.reachByType.paid,
				postReach: a.insights.reach,
				postType: a.type
			})
		}
	};
	e.exports = a
}), null);
__d("HubbleStyle", ["SpectrumStyle"], (function(a, b, c, d, e, f) {
	c = {
		LIGHT: (a = b("SpectrumStyle")).COBALT,
		DARK: a.FB_BLUE,
		SPECTRUM: a.BLUE_BRUSH
	};
	d = {
		ORGANIC: c.LIGHT,
		PAID: c.DARK,
		AUTOPLAY: c.LIGHT,
		CLICKPLAY: c.DARK,
		UNIQUE: c.LIGHT,
		REPEAT: c.DARK
	};
	e = a.BREAKDOWN_COLORS;
	f.LIKE_SOURCES_COLORS = e;
	b = a.BREAKDOWN_COLORS;
	f.PAGE_AND_TAB_VISITS_COLORS = b;
	e = a.LIGHT_BLUE;
	f.TOTAL_PAGE_LIKES = e;
	b = [a.PINK, a.LIGHT_BLUE, a.LIGHT_BLUE2, a.DARK_BLUE];
	f.NET_COLORS = b;
	e = [a.PINK, a.FB_BLUE];
	f.PAGE_INVITE_COLORS = e;
	b = [a.GRAY, a.DARK_BLUE];
	f.OVERVIEW_PAGE_LIKES = b;
	e = [a.GRAY, a.ORANGE];
	f.OVERVIEW_POST_REACH = e;
	b = {
		click: [a.GRAY, a.COBALT],
		comment: [a.GRAY, a.MAUVE2],
		like: [a.GRAY, a.LAVENDER],
		link: [a.GRAY, a.PURPLE2]
	};
	f.OVERVIEW_LCS = b;
	e = [a.SALMON];
	f.DESSUMARIZATION = e;
	b = [a.LIGHT_BLUE2];
	f.RECOMMENDATION = b;
	e = a.BLUE_BRUSH;
	f.RECOMMENDATION_BRUSH = e;
	b = [a.LIGHT_ORANGE, a.ORANGE];
	f.POST_REACH_COLORS = b;
	e = [a.LAVENDER, a.MAUVE2, a.PURPLE2, a.BROWN, a.PINK, a.BLUE3];
	f.REACH_POSITIVE_ACTION_COLORS = e;
	b = [a.FB_BLUE, a.COBALT, a.DARK_RED, a.BROWN, a.PINK];
	f.REACH_NEGATIVE_ACTION_COLORS = b;
	e = [a.LAVENDER, a.MAUVE2, a.PURPLE2, a.BROWN, a.PINK, a.BLUE3];
	f.REACH_REATIONS_COLORS = e;
	b = a.ORANGE_BRUSH;
	f.REACH_BRUSH = b;
	e = [a.FB_BLUE, a.VIOLET, a.BLUE3, a.PURPLE];
	f.OTHER_PAGE_ACTIVITY_COLORS = e;
	b = [a.LAVENDER, a.DEEP_PURPLE];
	f.LIKES_SPLIT_2 = b;
	e = [a.LIGHT_ORANGE, a.ORANGE];
	f.REACH_SPLIT_2 = e;
	b = [a.PURPLE2, a.PURPLE3];
	f.SHARES_SPLIT_2 = b;
	e = [a.SALMON, a.DARK_RED];
	f.NEGATIVE_SPLIT_2 = e;
	b = [a.MAUVE2, a.PURPLE4];
	f.COMMENTS_SPLIT_2 = b;
	e = [a.MAUVE, a.PURPLE5];
	f.LCS_SPLIT_2 = e;
	b = [a.COBALT, a.COBALT2];
	f.POSTCLICKS_SPLIT_2 = b;
	e = [a.LIGHT_BLUE, a.BLUE2];
	f.PAGE_LIKES_SPLIT_2 = e;
	b = [a.GRAY, a.DARK_BLUE];
	f.BEST_POST_TIME = b;
	e = a.BLUE;
	f.FANS_ONLINE = e;
	b = a.BLUE_HOVER;
	f.FANS_ONLINE_HOVER = b;
	e = [c.LIGHT];
	f.VIDEO_VIEWS = e;
	a = [d.ORGANIC, d.PAID];
	f.VIDEO_ORGANIC_PAID_VIEWS = a;
	b = c.SPECTRUM;
	f.VIDEO_ORGANIC_PAID_VIEW_BRUSH = b;
	e = [d.AUTOPLAY, d.CLICKPLAY];
	f.VIDEO_AUTOPLAY_CLICK_VIEWS = e;
	a = c.SPECTRUM;
	f.VIDEO_AUTOPLAY_CLICK_VIEW_BRUSH = a;
	b = [d.UNIQUE, d.REPEAT];
	f.VIDEO_UNIQUE_REPEAT_VIEWS = b;
	e = c.SPECTRUM;
	f.VIDEO_UNIQUE_REPEAT_VIEW_BRUSH = e;
	a = 234;
	f.BUTTERFLY_HEIGHT = a;
	d = 710;
	f.BUTTERFLY_WIDTH = d;
	b = 690;
	f.WIFI_BUTTERFLY_WIDTH = b;
	c = 300;
	f.FULL_CHART_HEIGHT = c;
	e = 885;
	f.FULL_CHART_WIDTH = e;
	a = 300;
	f.LEFT_COL_CHART_HEIGHT = a;
	d = 200;
	f.LEFT_COL_SHORT_CHART_HEIGHT = d;
	b = 735;
	f.LEFT_COL_CHART_WIDTH = b;
	c = 120;
	f.MINICHART_HEIGHT = c;
	e = 292;
	f.MINICHART_WIDTH = e;
	a = 46;
	f.SPARKCHART_HEIGHT = a;
	d = 150;
	f.SPARKCHART_WIDTH = d;
	b = 80;
	f.TIMESLIDER_HEIGHT = b;
	c = 760;
	f.TIMESLIDER_WIDTH = c
}), null);
__d("HubbleTimeZoneDisclaimer.react", ["HubbleTimeZoneDisclaimerStrings", "React", "XUIText.react"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.includePageDisclaimer,
				d = a.includeAdsDisclaimer;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["includePageDisclaimer", "includeAdsDisclaimer"]);
			c = this.$1(c, d);
			return g.jsx(b("XUIText.react"), babelHelpers["extends"]({}, a, {
				children: c
			}))
		};
		d.$1 = function(a, c) {
			if (a && c) return b("HubbleTimeZoneDisclaimerStrings").PAGE_AND_AD;
			else if (a) return b("HubbleTimeZoneDisclaimerStrings").PAGE;
			else if (c) return b("HubbleTimeZoneDisclaimerStrings").AD;
			else return null
		};
		return c
	}(g.Component);
	e.exports = a;
	a.defaultProps = {
		includeAdsDisclaimer: !0,
		includePageDisclaimer: !0
	}
}), null);
__d("SpectrumTooltipData", ["cx", "React"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			return h.jsx("span", {
				className: "_51i3",
				children: this.props.children
			})
		};
		return b
	}(h.Component);
	e.exports = a
}), null);
__d("SpectrumTooltipDescription", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			return h.jsx("span", babelHelpers["extends"]({}, this.props, {
				className: b("joinClasses")(this.props.className, "_2fp7")
			}))
		};
		return c
	}(h.Component);
	e.exports = a
}), null);
__d("HubbleUtils", ["fbt", "InsightsUtils", "React", "SpectrumTooltipData", "SpectrumTooltipDescription", "URI", "UTCUtils", "formatDate"], (function(a, b, c, d, e, f, g) {
	var h, i = b("React");

	function j() {
		return {
			ageBuckets: {
				"13-17": 0,
				"18-24": 0,
				"25-34": 0,
				"35-44": 0,
				"45-54": 0,
				"55-64": 0,
				"65+": 0
			},
			total: 0
		}
	}
	var k = {
		aggregateValues: function(a) {
			var c = null;
			Object.keys(a).forEach(function(d, e) {
				c === null && (c = b("InsightsUtils").fillArray(a[d].length, null)), a[d].forEach(function(a, b) {
					a != null && c != null && (c[b] += a)
				})
			});
			return c
		},
		apiGenderToText: function(a) {
			switch (a) {
				case "F":
					return g._("N\u1eef");
				case "M":
					return g._("Nam");
				case "U":
					return g._("Kh\u00f4ng x\u00e1c \u0111\u1ecbnh");
				default:
			}
		},
		isDataValid: function(a) {
			var b = a !== void 0;
			a = !!(a && typeof a === "object" && Object.keys(a).length > 0);
			return b && a
		},
		constructNewBaseInsightsURI: function() {
			var a = (h || (h = b("URI"))).getNextURI(),
				c = new h(a.getPath()),
				d = "business_id";
			a.getQueryData().sk && c.setQueryData({
				sk: a.getQueryData().sk
			});
			Object.prototype.hasOwnProperty.call(a.getQueryData(), d) && (c.addQueryData(d, a.getQueryData()[d]), c.setSubdomain("business"));
			c.removeQueryData(["section", "subsection"]);
			return c
		},
		mergeKeyedDataSets: function(a) {
			var b = {};
			a.forEach(function(a) {
				if (!a) return;
				Object.keys(a).forEach(function(c) {
					if (Object.prototype.hasOwnProperty.call(b, c)) {
						var d = a[c].forEach ? a[c] : Object.keys(a[c]);
						d.forEach(function(d, e) {
							b[c][e] += a[c][e]
						})
					} else b[c] = a[c]
				})
			});
			return b
		},
		getSectionByName: function(a, b) {
			for (var c = b.length - 1; c >= 0; --c) {
				if (b[c].name === a) return b[c].component;
				if (b[c].type && b[c].type.getName() === a) return b[c]
			}
		},
		parseGenderAgeResponse: function(a) {
			var b = {
				F: j(),
				M: j(),
				total: 0,
				U: j()
			};
			if (!this.isDataValid(a)) return null;
			var c = Object.keys(a);
			c.forEach(function(c) {
				var d = c.split(".");
				if (d.length !== 2 || !Object.prototype.hasOwnProperty.call(b, d[0]) || !Object.prototype.hasOwnProperty.call(b[d[0]].ageBuckets, d[1])) return;
				c = a[c][a[c].length - 1];
				b[d[0]].ageBuckets[d[1]] += c;
				b[d[0]].total += c;
				b.total += c
			});
			return b
		},
		sliceDataForPreviousPeriod: function(a, c, d) {
			var e = d.until - d.since;
			d = {
				since: d.since - e,
				until: d.until - e
			};
			e = b("InsightsUtils").getRangeIndices(c, d);
			e[0] < 0 && (e[0] = 0);
			e[1] < 0 && (e[1] = 0);
			return a.slice(e[0], e[1] + 1)
		},
		pairAndSortKeyedDataSet: function(a) {
			var b, c, d;
			if (!this.isDataValid(a)) return [];
			var e = {};
			for (var f in a) {
				c = 0;
				d = d || a[f].length;
				b = -1;
				while (++b < d) c += a[f][b] ? a[f][b] : 0;
				e[f] = c
			}
			return Object.keys(a).map(function(a) {
				return [a, e[a]]
			}).sort(function(a, b) {
				return b[1] - a[1]
			})
		},
		summarizeKeyedDataSet: function(a, c) {
			var d = k.pairAndSortKeyedDataSet(a),
				e, f, h = {},
				i = d.length,
				j = i > c ? 1 : 0,
				l = Math.min(i, c - j);
			for (e = 0; e < l; ++e) f = d[e][0], h[f] = a[f];
			if (j) {
				l = null;
				j = 0;
				e = c - 2;
				while (++e < i) {
					f = d[e][0];
					l == null && (j = a[f].length, l = b("InsightsUtils").fillArray(j, null));
					c = -1;
					while (++c < j) a[f][c] != null && (l[c] += a[f][c])
				}
				h[g._("Kh\u00e1c")] = l
			}
			return h
		},
		groupKeyedDataSet: function(a, b) {
			var c = {};
			a && Object.keys(a).forEach(function(d) {
				var e = b(d);
				if (Object.prototype.hasOwnProperty.call(c, e))
					for (var f = 0; f < c[e].length; ++f) {
						var g = a[d][f];
						g != null && (c[e][f] += a[d][f])
					} else c[e] = a[d].slice()
			});
			return c
		},
		groupKeyValuePair: function(a, b, c) {
			var d = {};
			a && Object.keys(a).forEach(function(a) {
				var e = b(a);
				d[e] = c(a)
			});
			return d
		},
		partialValue: function(a) {
			return a.partial
		},
		valueX: function(a) {
			return a.x
		},
		valueY: function(a) {
			return a.y
		},
		findNonZeroValueInValues: function(a) {
			var b = a;
			if (a.valueY === 0 && a.allData)
				for (var c = a.allData.length; c-- > 0;) {
					var d = a.allData[c];
					if (d.valueY !== 0) {
						b = d;
						break
					}
				}
			b.isPartial = a.isPartial;
			return b
		},
		getCustomTooltipFormat: function() {
			var a = new Date();
			a.setHours(a.getHours() + b("UTCUtils").offsetFromPacificTime(a));
			var c = k.findNonZeroValueInValues;
			return function(d) {
				d = c(d);
				var e = d.title || d.label,
					f = d.yValueString,
					h;
				d.isPartial ? (h = b("formatDate")(a, "M d, Y ga"), h = g._("c\u1eadp nh\u1eadt l\u1ea7n cu\u1ed1i: {timestamp}", [g._param("timestamp", h)])) : h = d.xValueString;
				d = [i.jsx(b("SpectrumTooltipDescription"), {
					children: e
				}, "desc"), i.jsx(b("SpectrumTooltipData"), {
					children: f
				}, "data"), i.jsx(b("SpectrumTooltipDescription"), {
					children: h
				}, "foot")];
				return d
			}
		},
		getVideoID: function(a) {
			a = a.split("_");
			return a.length >= 2 ? a[1] : "0"
		},
		getPostID: function(a) {
			a = a.split("_");
			return a.length >= 2 ? a[1] : "0"
		},
		getPageID: function(a) {
			a = a.split("_");
			return a.length >= 2 ? a[0] : "0"
		}
	};
	e.exports = k
}), null);
__d("SpectrumBrush", ["fbt", "React", "ReactART", "SpectrumDataVisualization", "SpectrumUtilities", "createReactClass_DEPRECATED", "keyMirror", "prop-types", "EventListener", "d3-old/time/day"], (function(a, b, c, d, e, f, g) {
	var h = b("React"),
		i = b("ReactART").Path,
		j = b("ReactART").Group,
		k = b("ReactART").Shape,
		l = i().move(0, 0).line(1, 0).line(0, 1).line(-1, 0).close(),
		m = i().moveTo(-3.5, -7.5).arc(2, -2).line(4, 0).arc(2, 2).line(0, 16).arc(-2, 2).line(-4, 0).arc(-2, -2).close(),
		n = i().moveTo(-.5, -5.5).line(0, 13).moveTo(1.5, -5.5).line(0, 13),
		o = b("keyMirror")({
			NORMAL: null,
			HOVER: null,
			PRESSED: null,
			DRAGGING: null,
			MOVING: null
		}),
		p = 10;
	a = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumBrush",
		propTypes: {
			onBrush: b("prop-types").func,
			onSelection: b("prop-types").func
		},
		timeoutID: null,
		boundaries: [],
		distance: 0,
		UNSAFE_componentWillMount: function() {
			this.props.eventChannel[this.props.eventIndex] = this;
			var a = window.addEventListener ? window : document.body;
			this.releaseHandler = b("EventListener").listen(a, "mouseup", this.release);
			this.boundaries = b("SpectrumUtilities").getOuterRange(this.props.scaleX)
		},
		componentWillUnmount: function() {
			delete this.props.eventChannel[this.props.eventIndex]
		},
		getInitialState: function() {
			return {
				anchor: 0,
				focus: 0,
				mode: o.NORMAL,
				move: 0
			}
		},
		getHitType: function(a) {
			var b = this.getLeftPosition(),
				c = this.getRightPosition();
			if (Math.abs(a - b) < p) return "dragLeft";
			if (Math.abs(a - c) < p) return "dragRight";
			return a > b && a < c ? "move" : "outside"
		},
		getSelection: function() {
			if (this.props.selection !== void 0) {
				var a = this.props.selection[1];
				this.props.scaleX.interval && this.props.scaleX.interval() && (a = this.props.scaleX.interval().offset(a, -1));
				return [this.props.selection[0], a]
			}
			return this.props.focus ? this.props.focus.rangeX : null
		},
		hasSelection: function() {
			return this.isDraggingOrMoving() || !!this.getSelection()
		},
		isDraggingOrMoving: function() {
			return this.state.mode == o.DRAGGING || this.state.mode == o.MOVING
		},
		shouldUseSelectionFromProps: function() {
			return !this.isDraggingOrMoving() && this.getSelection()
		},
		getLeftPosition: function() {
			return this.shouldUseSelectionFromProps() ? this.props.scaleX(this.getSelection()[0]) : Math.min(this.state.focus, this.state.anchor)
		},
		getRightPosition: function() {
			return this.shouldUseSelectionFromProps() ? this.props.scaleX(this.getSelection()[1]) : Math.max(this.state.focus, this.state.anchor)
		},
		dragLeave: function() {
			this.distance !== 0 && this.invokeChangeEvent(), !this.timeoutID ? this.timeoutID = setTimeout(this.dragLeave, 1e3 / Math.abs(this.distance)) : (this.cancelDragLeave(), this.timeoutID = setTimeout(this.dragLeave, 1e3 / Math.abs(this.distance)))
		},
		cancelDragLeave: function() {
			this.timeoutID !== null && (clearTimeout(this.timeoutID), this.timeoutID = null)
		},
		hover: function(a) {
			var c = this.state.mode,
				d = this.props.scaleX;
			if (c == o.NORMAL || c == o.HOVER) {
				var e = d(d.invert(a));
				this.setState({
					anchor: e,
					focus: e,
					mode: o.HOVER
				});
				return
			}
			a < this.boundaries[0] ? this.distance = a - this.boundaries[0] : a > this.boundaries[1] ? this.distance = a - this.boundaries[1] : this.distance = 0;
			if (this.distance !== 0) {
				e = ~~(3e3 / Math.abs(this.distance));
				this.timeoutID === null ? this.timeoutID = setTimeout(this.dragLeave, e) : (this.cancelDragLeave(), this.timeoutID = setTimeout(this.dragLeave, e))
			} else this.cancelDragLeave();
			if (c == o.MOVING) {
				e = this.state.move;
				c = this.state.focus;
				var f = this.state.anchor,
					g = f - c;
				c = d(d.invert(a - e));
				f = d(d.invert(c + g));
				c = f - g;
				this.setState({
					anchor: f,
					focus: c
				}, this.invokeChangeEvent)
			} else {
				e = d(d.invert(a));
				if (this.props.minDays) {
					g = Math.min(e, this.state.anchor);
					f = Math.max(e, this.state.anchor);
					g = d.invert(g);
					f = d.invert(f);
					if (b("d3-old/time/day").range(g, f).length + 1 < this.props.minDays) return
				}
				this.setState({
					focus: e,
					mode: o.DRAGGING
				}, this.invokeChangeEvent)
			}
		},
		unhover: function() {
			this.state.mode == o.HOVER && this.setState({
				mode: o.NORMAL
			})
		},
		press: function(a, b) {
			if (this.hasSelection()) {
				if (b == "move") {
					this.setState({
						anchor: this.getLeftPosition(),
						focus: this.getRightPosition(),
						mode: o.MOVING,
						move: a - this.getRightPosition()
					});
					return
				}
				if (b == "dragLeft") {
					this.setState({
						anchor: this.getRightPosition(),
						focus: this.getLeftPosition(),
						mode: o.DRAGGING
					});
					return
				}
				if (b == "dragRight") {
					this.setState({
						anchor: this.getLeftPosition(),
						focus: this.getRightPosition(),
						mode: o.DRAGGING
					});
					return
				}
			}
			b = this.props.scaleX;
			b = b(b.invert(a));
			this.setState({
				anchor: b,
				focus: b,
				mode: o.PRESSED
			})
		},
		release: function() {
			this.cancelDragLeave();
			if (this.state.mode == o.PRESSED) {
				var a = this.state.focus,
					b = this.getLeftPosition(),
					c = this.getRightPosition(),
					d = c - b,
					e = this.props.scaleX;
				b = e(e.invert(a - d / 2));
				c = e(e.invert(b + d));
				b = c - d;
				this.setState({
					anchor: c,
					focus: b,
					mode: o.NORMAL
				});
				this.invokeChangeEvent();
				return
			}
			if (!this.isDraggingOrMoving()) return;
			this.setState({
				mode: o.NORMAL
			});
			this.invokeChangeEvent();
			this.distance = 0
		},
		getHighlightRect: function(a, c) {
			var d = this.props.scaleX;
			d = d.rangeBand ? d.rangeBand() : 0;
			var e = b("SpectrumUtilities").getOuterRange(this.props.scaleY);
			return {
				left: a,
				top: e[1],
				right: c + d,
				bottom: e[0]
			}
		},
		invokeChangeEvent: function() {
			var a = !this.isDraggingOrMoving() && this.props.onSelection ? this.props.onSelection : this.props.onBrush,
				b = Math.min(this.state.focus, this.state.anchor),
				c = Math.max(this.state.focus, this.state.anchor);
			this.distance > 0 ? c += this.distance : this.distance < 0 && (b += this.distance);
			var d = this.props.scaleX.invert(b),
				e = this.props.scaleX.invert(c);
			this.props.onRequestFocus && this.props.onRequestFocus({
				fixed: !this.isDraggingOrMoving(),
				title: g._("\u0110ang ch\u1ecdn"),
				rangeX: [d, e],
				rect: this.getHighlightRect(b, c)
			});
			b = this.props.scaleX.interval;
			a && a([d, b && b() ? b().offset(e, 1) : e])
		},
		getCursor: function(a) {
			if (!this.isDraggingOrMoving() && this.hasSelection()) return a == "dragLeft" || a == "dragRight" ? "col-resize" : a == "move" ? "move" : "pointer";
			else {
				a = this.state.mode == o.DRAGGING;
				var b = this.state.mode == o.MOVING;
				return a ? "col-resize" : b ? "move" : "pointer"
			}
		},
		handleEvent: function(a) {
			var b = this.getHitType(a.x);
			a.cursor = this.getCursor(b);
			var c = this.props.onSelection || this.props.onBrush;
			switch (a.type) {
				case "mousemove":
					this.hover(a.x);
					break;
				case "mouseleave":
					this.unhover();
					break;
				case "mousedown":
					c && (this.press(a.x, b), a.stopPropagation());
					break;
				case "mouseup":
					c && (a.stopPropagation(), this.release());
					break
			}
			this.hasSelection() && a.stopPropagation()
		},
		render: function() {
			var a = this.state.mode;
			if (a == o.NORMAL && !this.hasSelection()) return h.jsx(j, {});
			a = b("SpectrumDataVisualization").getScaleX(this.props);
			var c = a.rangeBand ? a.rangeBand() : 0;
			a = b("SpectrumUtilities").getOuterRange(a);
			if (this.getLeftPosition() < a[0] || this.getRightPosition() + c > a[1]) return h.jsx(j, {});
			var d = this.props.theme.brush,
				e = this.getHighlightRect(this.getLeftPosition(), this.getRightPosition());

			function f(a) {
				var b = (e.top + e.bottom) * .5,
					c = i().move(.5, 0).line(0, e.bottom - e.top);
				return h.jsxs(j, {
					x: Math.round(a),
					children: [h.jsx(k, {
						d: c,
						stroke: "#ccc",
						y: e.top
					}), h.jsx(k, {
						d: m,
						fill: "#fff",
						stroke: "#ccc",
						y: Math.round(b)
					}), h.jsx(k, {
						d: n,
						stroke: "#6382ad",
						y: Math.round(b)
					})]
				})
			}

			function g(a, b) {
				return h.jsx(k, {
					d: l,
					fill: d.fadeColor,
					scaleX: b - a,
					scaleY: e.bottom - e.top,
					x: a,
					y: e.top
				})
			}
			c = h.jsx(k, {
				d: l,
				fill: d.color,
				scaleX: e.right - e.left,
				scaleY: e.bottom - e.top,
				x: e.left,
				y: e.top
			});
			return h.jsxs(j, {
				children: [c, g(this.boundaries[0], e.left), g(e.right, this.boundaries[1]), d.handleBars && f(e.left), d.handleBars && f(e.right)]
			})
		}
	});
	e.exports = a
}), null);
__d("SpectrumBaseStyleSheetCore", ["cx", "SpectrumStyle"], (function(a, b, c, d, e, f, g) {
	c = {
		areas: {
			colors: [(a = b("SpectrumStyle")).BLUE],
			hover: a.BRIGHT_BLUE,
			hoverFill: "#FFF",
			hoveBarStrokeWidth: 2,
			hoverBubbleStrokeWidth: 3,
			partialOverlayClass: "_190w",
			solidOpacity: .6,
			dashOpacity: .3
		},
		brush: {
			color: a.BLUE_BRUSH,
			handleBars: !1,
			fadeColor: null
		},
		ring: {
			backgroundColor: "#F6F7FA",
			highlightColor: "#467AB0",
			labelFont: {
				fontFamily: "Helvetica",
				fontSize: 12
			},
			metricFont: {
				fontFamily: "Helvetica",
				fontSize: 22,
				fontWeight: "bold"
			},
			textColor: "#677C9F",
			radius: 56,
			width: 12
		},
		columns: {
			borderRadius: 3,
			colors: [a.DARK_BLUE],
			fadeOutOpacity: 1,
			fontFamily: a.FONT_FAMILY,
			fontSize: a.FONT_SIZE_SMALL,
			fontWeight: "bold",
			invalidColor: "#F6F7F8",
			innerMargin: .1,
			innerLabelColor: "#ffffff",
			labelColors: [a.DARK_BLUE],
			labelMargin: 6,
			labelInnerMargin: 12,
			labelOuterMargin: 15,
			outerLabelColor: a.BOLD_BLUE,
			sideBySideMargin: 1
		},
		confidenceInterval: {
			bottomColor: "#AFBDD8",
			opacity: .2,
			topColor: "#5CC074"
		},
		guide: {
			color: a.BRIGHT_BLUE,
			width: 1
		},
		gutter: {
			bottom: 0,
			left: 0,
			middle: 0,
			right: 0,
			top: 0
		},
		lines: {
			colors: [a.DARK_BLUE],
			fadeOutColor: "rgba(0,0,0,0.1)",
			highlightWidths: [4],
			markerColor: "#ffffff",
			markers: !0,
			partialStrokeDashes: [4],
			widths: [2],
			dotRadius: 2,
			dotStrokeWidth: 2,
			width: 2,
			solidOpacity: .8,
			dashOpacity: .8
		},
		markers: {
			lineColor: "rgba(0,0,0,0.15)",
			lineWidth: 1,
			labelColor: a.GRAY,
			highlightColor: a.BRIGHT_BLUE,
			highlightWidth: 3,
			dotColor: "#ffffff",
			fontFamily: a.FONT_FAMILY,
			fontSize: a.FONT_SIZE_SMALL
		},
		plotBands: {
			color: a.LIGHT_ORANGE,
			label: {
				fontColor: a.GRAY,
				fontFamily: a.FONT_FAMILY,
				fontSize: a.FONT_SIZE_SMALL,
				padding: 10
			},
			opacity: .2
		},
		rangeBands: {
			outerPadding: 0,
			padding: 0
		},
		xAxis: {
			axisLineColor: "#cccccc",
			fontFamily: a.FONT_FAMILY,
			fontSize: a.FONT_SIZE_TINY,
			labelColor: a.GRAY,
			lineColor: "#cccccc"
		},
		yAxis: {
			baseLineColor: null,
			distanceBetweenTicks: 45,
			fontFamily: a.FONT_FAMILY,
			fontSize: a.FONT_SIZE_TINY,
			labelColor: a.GRAY,
			lineColor: "rgba(0,0,0,0.05)",
			showRightTicks: !1
		}
	};
	d = c;
	e.exports = d
}), null);
__d("SpectrumBaseStyleSheet", ["cx", "SpectrumBaseStyleSheetCore"], (function(a, b, c, d, e, f, g) {
	b("SpectrumBaseStyleSheetCore").areas.partialOverlayClass = "_4v0s";
	a = b("SpectrumBaseStyleSheetCore");
	e.exports = a
}), null);
__d("SpectrumContextMixin", ["InsightsContextMixin"], (function(a, b, c, d, e, f) {
	e.exports = b("InsightsContextMixin")
}), null);
__d("SpectrumEnvironmentCore", [], (function(a, b, c, d, e, f) {
	a = {
		ignoreUserEvents: !1
	};
	b = a;
	e.exports = b
}), null);
__d("SpectrumEnvironment", ["SpectrumEnvironmentCore"], (function(a, b, c, d, e, f) {
	a = b("SpectrumEnvironmentCore");
	e.exports = a
}), null);
__d("SpectrumSurface", ["React", "ReactART", "ReactDOM", "SpectrumEnvironment", "SpectrumUtilities", "emptyFunction", "throttle"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = b("ReactART").Surface,
		i = "mouseup";
	window.navigator.msPointerEnabled && (i = "MSPointerUp");
	var j = 500,
		k = 25,
		l = {
			type: "",
			shouldStop: !1,
			stopPropagation: function() {
				l.shouldStop = !0
			},
			x: 0,
			y: 0,
			hitRegionTop: 0,
			hitRegionLeft: 0,
			hitRegionBottom: 0,
			hitRegionRight: 0
		},
		m = {
			left: 0,
			right: "auto",
			top: 0,
			position: "absolute"
		};
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.state = {
				cursor: "",
				focus: null,
				timer: null
			}, d.clearTimer = function() {
				d.state.timer && clearTimeout(d.state.timer)
			}, d.blurIfNothingHappens = function() {
				d.state.timer = setTimeout(d.setState.bind(babelHelpers.assertThisInitialized(d), {
					focus: null
				}, null), j)
			}, d.requestFocus = function(a) {
				d.clearTimer();
				if (a == null) return d.blurIfNothingHappens();
				d.setState({
					focus: a
				});
				d.props.onRequestFocus && d.props.onRequestFocus(a)
			}, d.attachDragEvent = function() {
				var a;
				window.addEventListener ? (a = window, a.addEventListener("mousemove", d.handleWindowEvent, !0), a.addEventListener(i, d.handleWindowEvent, !0)) : (a = document.body, a.attachEvent("onmousemove", d.handleWindowEvent), a.attachEvent("mouseup", d.handleWindowEvent))
			}, d.detachDragEvent = function() {
				var a;
				window.addEventListener ? (a = window, a.removeEventListener("mousemove", d.handleWindowEvent, !0), a.removeEventListener(i, d.handleWindowEvent, !0)) : (a = document.body, a.detachEvent("onmousemove", d.handleWindowEvent), a.detachEvent("mouseup", d.handleWindowEvent))
			}, d.handleWindowEvent = function(a) {
				var b = a.type;
				b == "MSPointerUp" && (b = "mouseup");
				d.handleEvent(b, a)
			}, d.handleEvent = function(a, c) {
				c.preventDefault && c.preventDefault();
				c = c.nativeEvent || c;
				if (c.targetTouches) {
					c = c.targetTouches[0];
					if (!c) return
				}
				var e = b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)),
					f = e.getBoundingClientRect();
				l.x = c.clientX - f.left - e.clientLeft;
				l.y = c.clientY - f.top - e.clientTop;
				a === "mousemove" ? d.throttledHandleEvent(a) : d.actuallyHandleEvent(a)
			}, d.actuallyHandleEvent = function(a) {
				d.clearTimer();
				a == "mouseleave" && d.blurIfNothingHappens();
				a == "mousedown" && d.attachDragEvent();
				d.type = "mousedown";
				a == "mouseup" && d.detachDragEvent();
				a == "mouseup" && d.type == "mousedown" && (a = "click");
				a == "mousemove" && d.props.onMouseMove(l);
				a == "mouseout" && d.props.onMouseOut(l);
				l.type = a;
				l.cursor = d.state.cursor;
				l.shouldStop = !1;
				l.hitRegionTop = -Infinity;
				l.hitRegionLeft = -Infinity;
				l.hitRegionBottom = +Infinity;
				l.hitRegionRight = +Infinity;
				a = d.eventChannel;
				for (var b = a.length; b--;) {
					var c = a[b];
					if (!c || !c.handleEvent) continue;
					c.handleEvent(l);
					if (l.shouldStop) break
				}
				l.cursor !== d.state.cursor && d.setState({
					cursor: l.cursor
				})
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.UNSAFE_componentWillMount = function() {
			this.eventChannel = [], this.throttledHandleEvent = b("throttle")(this.actuallyHandleEvent, k, this)
		};
		d.componentWillUnmount = function() {
			this.clearTimer()
		};
		d.render = function() {
			var a = this.props.width,
				c = this.props.height,
				d = {
					width: a,
					height: c,
					scaleX: this.props.scaleX,
					scaleY: this.props.scaleY,
					theme: this.props.theme,
					focus: this.state.focus,
					eventChannel: this.eventChannel,
					onRequestFocus: this.requestFocus
				};
			g.Children.forEach(this.props.children, function(b) {
				if (!b) return;
				var a = babelHelpers["extends"]({}, b.props, d);
				b.type.getAdjustedScaleY && (d.scaleY = b.type.getAdjustedScaleY(a));
				b.type.getAdjustedScaleX && (d.scaleX = b.type.getAdjustedScaleX(a))
			});
			var e = g.Children.map(this.props.children, function(a, c) {
					return !a || a.type.isChartLayer ? null : b("SpectrumUtilities").mergeProps(a, d, {
						eventIndex: c
					})
				}),
				f = g.Children.map(this.props.children, function(a, c) {
					return !a || !a.type.isChartLayer ? null : b("SpectrumUtilities").mergeProps(a, d, {
						eventIndex: c
					})
				}),
				i = {
					style: {
						cursor: this.state.cursor,
						height: c,
						position: "relative",
						textAlign: "left",
						width: a
					}
				};
			b("SpectrumEnvironment").ignoreUserEvents || (i.onMouseMove = this.handleEvent.bind(this, "mousemove"), i.onMouseOut = this.handleEvent.bind(this, "mouseout"), i.onMouseLeave = this.handleEvent.bind(this, "mouseleave"), i.onMouseDown = this.handleEvent.bind(this, "mousedown"), i.onTouchMove = this.handleEvent.bind(this, "mousemove"), i.onTouchStart = this.handleEvent.bind(this, "mousedown"), i.onTouchCancel = this.handleEvent.bind(this, "mouseup"), i.onTouchEnd = this.handleEvent.bind(this, "mouseup"));
			return g.jsxs("div", babelHelpers["extends"]({}, i, {
				"data-testid": void 0,
				children: [g.jsx("div", {
					style: {
						left: 0,
						height: c,
						overflow: "hidden",
						position: "absolute",
						top: 0,
						width: a
					},
					children: g.jsx(h, {
						height: c,
						width: a,
						style: m,
						children: e
					})
				}), f]
			}))
		};
		return c
	}(g.Component);
	a.defaultProps = {
		onMouseMove: b("emptyFunction"),
		onMouseOut: b("emptyFunction")
	};
	e.exports = a
}), null);
__d("d3-old/time/hour", ["d3-old/time/interval", "d3-old/time/time"], (function(a, b, c, d, e, f) {
	a = b("d3-old/time/interval")._interval;
	c = a(function(a) {
		var c = a.getTimezoneOffset() / 60;
		return new(b("d3-old/time/time")._time)((Math.floor(a / 36e5 - c) + c) * 36e5)
	}, function(a, b) {
		a.setTime(a.getTime() + Math.floor(b) * 36e5)
	}, function(a) {
		return a.getHours()
	});
	c.s = c.range;
	c.s.utc = c.utc.range;
	e.exports = c
}), null);
__d("d3-old/time/minute", ["d3-old/time/interval", "d3-old/time/time"], (function(a, b, c, d, e, f) {
	a = b("d3-old/time/interval")._interval;
	c = a(function(a) {
		return new(b("d3-old/time/time")._time)(Math.floor(a / 6e4) * 6e4)
	}, function(a, b) {
		a.setTime(a.getTime() + Math.floor(b) * 6e4)
	}, function(a) {
		return a.getMinutes()
	});
	c.s = c.range;
	c.s.utc = c.utc.range;
	e.exports = c
}), null);
__d("d3-old/time/second", ["d3-old/time/interval", "d3-old/time/time"], (function(a, b, c, d, e, f) {
	a = b("d3-old/time/interval")._interval;
	c = a(function(a) {
		return new(b("d3-old/time/time")._time)(Math.floor(a / 1e3) * 1e3)
	}, function(a, b) {
		a.setTime(a.getTime() + Math.floor(b) * 1e3)
	}, function(a) {
		return a.getSeconds()
	});
	c.s = c.range;
	c.s.utc = c.utc.range;
	e.exports = c
}), null);
__d("SpectrumTimeScale", ["BinarySearch", "d3-old/core/range", "d3-old/scale/linear", "formatDate", "d3-old/time/year", "d3-old/time/month", "d3-old/time/day", "d3-old/time/hour", "d3-old/time/minute", "d3-old/time/second"], (function(a, b, c, d, e, f) {
	function g(a, c) {
		return function(d) {
			return b("formatDate")(new Date(d), a, {
				utc: !0,
				skipPatternLocalization: c
			})
		}
	}
	a = {
		Year: b("d3-old/time/year").utc,
		Month: b("d3-old/time/month").utc,
		Day: b("d3-old/time/day").utc,
		Hour: b("d3-old/time/hour").utc,
		Minute: b("d3-old/time/minute").utc,
		Second: b("d3-old/time/second").utc
	};
	var h = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];
	c = {
		format: g("Y"),
		interval: a.Year,
		next: null
	};
	d = {
		format: g("M", !0),
		interval: a.Month,
		next: c
	};
	f = {
		format: g("d", !0),
		interval: a.Day,
		next: d
	};
	var i = {
			format: g("H", !0),
			interval: a.Hour,
			next: f
		},
		j = {
			format: g("i", !0),
			interval: a.Minute,
			next: i
		},
		k = {
			format: g("s", !0),
			interval: a.Second,
			next: j
		},
		l = [k, k, k, k, j, j, j, j, i, i, i, i, f, f, f, d, d, c];

	function m(a) {
		var b = a[0];
		a = a[a.length - 1];
		return b < a ? [b, a] : [a, b]
	}

	function n(a) {
		while (a > 0) {
			if (l[a] != l[a - 1]) return a;
			a--
		}
		return a
	}

	function o(a, c) {
		a = m(a);
		a = a[1] - a[0];
		a = a / c;
		c = b("BinarySearch").findBoundInArray(h, a, function(a, b) {
			return a - b
		}, b("BinarySearch").LEAST_UPPER_BOUND);
		c == h.length && (c = h.length - 1);
		if (!c) return -1;
		a / h[c - 1] < h[c] / a && c--;
		return c
	}

	function p(a, b, c) {
		a = o(a, b);
		if (c) {
			b = c.offset(0, 1);
			while (h[a] < b && a < h.length - 1) a++
		}
		return {
			step: h[a] || 1,
			config: l[a] || k,
			index: a
		}
	}

	function q(a, b) {
		var c = a.format;
		c.primary = c;
		a.next && (c.secondary = a.next.format);
		c.bucketTicks = b;
		return c
	}

	function r(a, b, c) {
		var d = 1;
		if (c) {
			var e = n(c);
			d = Math.floor(h[c] / h[e])
		}
		c = [];
		e = new Date(a[0]);
		e = b.interval.ceil(e);
		while (e <= new Date(a[1])) c.push(e), e = b.interval.offset(e, d);
		return c
	}

	function s(a) {
		function c(b) {
			return Math.floor(+b / a) * a
		}

		function d(b) {
			return Math.round(+b / a) * a
		}

		function e(b) {
			return Math.ceil(+b / a) * a
		}

		function f(b, c) {
			return +b + c * a
		}

		function g(c, d, f) {
			return b("d3-old/core/range")(e(c), d, (f || 1) * a)
		}
		c.floor = c;
		c.round = d;
		c.ceil = e;
		c.offset = f;
		c.range = g;
		return c
	}

	function t(a, b, c) {
		function d(a) {
			return b(a)
		}
		d.tickFormatMaxLength = 10;
		d.interval = function(b) {
			if (!arguments.length) return a;
			var c = d.domain();
			a = typeof b === "number" ? s(b) : b;
			d.domain(c);
			return d
		};
		d.invert = function(c) {
			return a ? a.floor(new Date(b.invert(c))) : new Date(b.invert(c))
		};
		d.domain = function(c) {
			if (!arguments.length)
				if (a) return [b.domain()[0], a.offset(b.domain()[1], 1)];
				else return b.domain();
			a ? b.domain([a.floor(new Date(c[0])), a.offset(a.ceil(new Date(c[1])), -1)]) : b.domain(c);
			return d
		};
		d.nice = function(c) {
			if (!c) return d;
			c = p(b.domain(), c, a).step;
			var e = d.domain(),
				f = e[0];
			e = e[e.length - 1];
			f < e ? (f = Math.floor(f / c) * c, e = Math.ceil(e / c) * c) : (f = Math.ceil(f / c) * c, e = Math.floor(e / c) * c);
			return d.domain([f, e])
		};
		d.ticks = function(c) {
			c = p(b.domain(), c, a);
			return r(b.domain(), c.config, c.index)
		};
		d.secondaryTicks = function(c) {
			c = p(b.domain(), c, a).config;
			c = c.next;
			return !c ? [] : r(b.domain(), c)
		};
		d.tickFormat = function(c) {
			c = p(b.domain(), c, a);
			var d = c.config;
			c = n(c.index) == c.index;
			return q(d, c)
		};
		var e = g("M j, Y");
		d.tooltipFormat = function() {
			return e
		};
		d.setTooltipFormat = function(a, b) {
			e = g(a, b)
		};
		d.range = function(a) {
			if (!arguments.length) return b.range();
			b.range(a);
			return d
		};
		d.rangeBands = function(e, f, g) {
			arguments.length < 2 && (f = 0);
			arguments.length < 3 && (g = f);
			if (!a) {
				c = 0;
				return d.range(e)
			}
			var h = a.range(b.domain()[0], b.domain()[1]).length,
				i = e[1] < e[0],
				j = e[i - 0],
				k = e[1 - i],
				l = (k - j) / (h + 1 - f + 2 * g),
				m = [j + l * g, j + l * h];
			i && m.reverse();
			c = l * (1 - f);
			b.range(m);
			return d
		};
		d.rangeBand = function() {
			return c
		};
		d.baseScale = function() {
			return b
		};
		d.copy = function() {
			return t(a, b.copy(), c)
		};
		d.interpolate = function(a) {
			if (arguments.length === 1) {
				b.interpolate(a);
				return d
			} else return b.interpolate()
		};
		d.clamp = function(a) {
			if (arguments.length === 1) {
				b.clamp(a);
				return d
			} else return b.clamp()
		};
		return d
	}
	j = function() {
		return t(null, b("d3-old/scale/linear")(), 0)
	};
	j.Intervals = a;
	e.exports = j
}), null);
__d("SpectrumChart", ["React", "SpectrumBaseStyleSheet", "SpectrumContextMixin", "SpectrumSurface", "SpectrumTimeScale", "createReactClass_DEPRECATED", "d3-old/scale/linear", "d3-old/scale/ordinal", "emptyFunction", "mergeDeep", "mergeHelpers"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = b("mergeHelpers").ArrayStrategies;
	a = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumChart",
		mixins: [b("SpectrumContextMixin")],
		getDefaultProps: function() {
			return {
				onMouseMove: b("emptyFunction"),
				onMouseOut: b("emptyFunction")
			}
		},
		getExtentY: function() {
			var a = +Infinity,
				b = -Infinity;
			g.Children.forEach(this.props.children, function(c) {
				if (c && c.type.getExtentY) {
					c = c.type.getExtentY(c.props);
					c && (c[0] < a && (a = c[0]), c[1] > b && (b = c[1]))
				}
			});
			return a == +Infinity && b == -Infinity ? [0, 0] : [a, b]
		},
		getExtentX: function() {
			var a = -Infinity,
				b = Infinity;
			g.Children.forEach(this.props.children, function(c) {
				if (c && c.type.getExtentX) {
					c = c.type.getExtentX(c.props);
					c && (c[1] > a && (a = c[1]), c[0] < b && (b = c[0]))
				}
			});
			return [b, a]
		},
		getDefaultScaleX: function() {
			var a = this.props.domain || this.getExtentX();
			a.copy ? a = a.copy() : a[0] instanceof Date ? a = b("SpectrumTimeScale")().domain(a).interval(b("SpectrumTimeScale").Intervals.Day).clamp(!0) : typeof a[0] === "number" ? a = b("d3-old/scale/linear")().domain(a).clamp(!0) : a = b("d3-old/scale/ordinal")().domain(a);
			return a
		},
		getDefaultScaleY: function() {
			var a = this.getExtentY();
			return b("d3-old/scale/linear")().domain(a).clamp(!0)
		},
		getGutter: function(a, b, c) {
			var d = a.gutter;
			g.Children.forEach(this.props.children, function(e) {
				if (e && e.type.getGutter) {
					e = e.type.getGutter(e.props, a, b, c);
					for (var f in d) e[f] && (d[f] = Math.max(d[f], e[f]))
				}
			});
			return d
		},
		getChildWidthHeight: function(a, b) {
			g.Children.forEach(this.props.children, function(c) {
				if (c && c.type.getWidthHeight) {
					c = c.type.getWidthHeight(c.props, b);
					for (var d in a) c[d] && (a[d] ? a[d] = Math.max(a[d], c[d]) : a[d] = c[d])
				}
			});
			return a
		},
		render: function() {
			var a = b("SpectrumBaseStyleSheet");
			a = b("mergeDeep")(a, this.props.theme, h.Clobber);
			var c = this.props.scaleX || this.getDefaultScaleX(),
				d = this.props.scaleY || this.getDefaultScaleY();
			a.gutter = this.getGutter(a, c, d);
			var e = this.getChildWidthHeight({
					width: this.props.width,
					height: this.props.height
				}, a),
				f = e.width;
			e = e.height;
			var i = a.gutter,
				j = i.top,
				k = f - i.right,
				l = e - i.bottom;
			i = i.left;
			this.props.scaleYHasDomain || d.domain(this.getExtentY()).clamp(!0);
			c.rangeBands ? c.rangeBands([i, k], a.rangeBands.padding, a.rangeBands.outerPadding) : c.rangePoints ? c.rangePoints([i, k]) : c.range([i, k]);
			d.rangePoints ? d.rangePoints([l, j]) : d.range([l, j]);
			return g.jsx(b("SpectrumSurface"), {
				"data-testid": void 0,
				height: e,
				scaleX: c,
				scaleY: d,
				theme: a,
				width: f,
				onRequestFocus: this.props.onRequestFocus,
				onMouseMove: this.props.onMouseMove.bind(null, {
					scaleX: c
				}),
				onMouseOut: this.props.onMouseOut,
				children: this.props.children
			})
		}
	});
	e.exports = a
}), null);
__d("SpectrumMarker", ["Circle.art", "React", "ReactART", "SpectrumDataVisualization", "SpectrumUtilities", "createReactClass_DEPRECATED", "getObjectValues", "keyMirror", "prop-types"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = (a = b("ReactART")).Group,
		i = a.Path,
		j = a.Shape,
		k = a.Text,
		l = 2,
		m = b("keyMirror")({
			VERTICAL: null,
			HORIZONTAL: null
		});
	d = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumMarker",
		mixins: [b("SpectrumDataVisualization").Mixin],
		statics: {
			Orientation: m
		},
		propTypes: {
			content: (c = b("prop-types")).string,
			x: c.number,
			y: c.number,
			activeOffset: c.number,
			markerOrientation: c.oneOf(b("getObjectValues")(m))
		},
		getDefaultProps: function() {
			return {
				activeOffset: 10,
				markerOrientation: m.VERTICAL
			}
		},
		getInitialState: function() {
			return {
				tooltip: null
			}
		},
		getTop: function() {
			var a = b("SpectrumUtilities").getOuterRange(this.props.scaleY);
			return a[1] - 5
		},
		getLeft: function() {
			var a = b("SpectrumUtilities").getOuterRange(this.props.scaleX);
			return a[0] - 5
		},
		getX: function() {
			if (this.props.markerOrientation === m.VERTICAL) return b("SpectrumDataVisualization").getX(this.props.scaleX, this.props.x);
			else return this.props.scaleX(this.props.x)
		},
		getY: function() {
			return this.props.scaleY(this.props.y)
		},
		handleEvent: function(a) {
			if (a.type != "mousemove") return;
			if (this.props.markerOrientation === m.VERTICAL && this.props.y == null || this.props.markerOrientation === m.HORIZONTAL && this.props.x == null) return;
			var b = this.getX(),
				c = this.getY(),
				d = this.props.markerOrientation === m.VERTICAL && a.x > b - this.props.activeOffset && a.x < b + this.props.activeOffset,
				e = this.props.markerOrientation === m.HORIZONTAL && a.y > c - this.props.activeOffset && a.y < c + this.props.activeOffset;
			if (d || e) {
				d = {
					rect: {
						left: b,
						right: b,
						top: c,
						bottom: c
					},
					valueX: this.props.x,
					valueY: this.props.y
				};
				this.props.onRequestFocus && this.props.onRequestFocus(d);
				a.stopPropagation()
			} else this.props.onRequestFocus && this.props.onRequestFocus(null)
		},
		render: function() {
			var a = this.props.focus;
			a = a && a.valueX === this.props.x && a.valueY === this.props.y && this.props.x != null && this.props.y != null || !1;
			return g.jsxs(h, {
				children: [this._renderLine(a), this._renderCircle(a), this._renderLabel(a)]
			})
		},
		_getXDomain: function() {
			if (this.props.markerOrientation === m.VERTICAL) {
				var a = Math.floor(this.props.scaleX(this.props.x)) + .5;
				return [a, a]
			} else {
				a = this.getLeft();
				var c = b("SpectrumUtilities").getOuterRange(this.props.scaleX)[1];
				return [a, c]
			}
		},
		_getYDomain: function() {
			if (this.props.markerOrientation === m.VERTICAL) {
				var a = this.getTop(),
					c = b("SpectrumUtilities").getOuterRange(this.props.scaleY)[0];
				return [a, c]
			} else {
				a = Math.floor(this.props.scaleY(this.props.y)) + .5;
				return [a, a]
			}
		},
		_renderLine: function(a) {
			var b = this._getXDomain(),
				c = this._getYDomain(),
				d = i().moveTo(b[0], c[0]),
				e = this.props.theme.markers,
				f = e.lineColor,
				h = e.lineWidth;
			if (a) f = e.highlightColor, h = e.highlightWidth, d = d.lineTo(b[1], c[1]);
			else {
				a = this.props.markerOrientation === m.VERTICAL ? (c[1] - c[0]) / 4 : (b[1] - b[0]) / 4;
				e = this.props.markerOrientation === m.VERTICAL ? 0 : 2;
				c = this.props.markerOrientation === m.VERTICAL ? 2 : 0;
				for (var b = 0; b < a; b++) d.line(e, c).move(e, c)
			}
			return g.jsx(j, {
				d: d,
				stroke: f,
				strokeWidth: h
			})
		},
		_renderCircle: function(a) {
			var c = null;
			if (a) {
				a = this.props.theme.markers;
				var d = a.highlightColor,
					e = a.highlightWidth;
				c = g.jsxs(h, {
					children: [g.jsx(b("Circle.art"), {
						radius: l,
						stroke: d,
						strokeWidth: e * 2,
						x: this.getX(),
						y: this.getY()
					}), g.jsx(b("Circle.art"), {
						radius: l,
						fill: a.dotColor,
						x: this.getX(),
						y: this.getY()
					})]
				})
			}
			return c
		},
		_renderLabel: function(a) {
			var b = this.props.children;
			if (typeof b === "string") {
				var c = this.props.theme.markers,
					d = {
						fontFamily: c.fontFamily,
						fontSize: c.fontSize
					},
					e = this.props.markerOrientation === m.VERTICAL ? .5 : this._getXDomain()[1] - this._getXDomain()[0],
					f = this.props.markerOrientation === m.VERTICAL ? "center" : "right";
				a = a ? c.highlightColor : c.labelColor;
				b = g.jsx(k, {
					x: e,
					y: -d.fontSize - 2,
					alignment: f,
					font: d,
					fill: a,
					children: b
				})
			}
			return g.jsx(h, {
				x: this._getXDomain()[0],
				y: this._getYDomain()[0],
				children: b
			})
		}
	});
	e.exports = d
}), null);
__d("SpectrumStackedAreas", ["CSSBackgroundPattern.art", "React", "ReactART", "SpectrumDataVisualization", "SpectrumUtilities", "createReactClass_DEPRECATED", "d3-old/scale/ordinal"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = (a = b("ReactART")).Path,
		i = a.Group,
		j = a.ClippingRectangle,
		k = a.Shape,
		l = b("SpectrumUtilities").forEachVector,
		m = b("SpectrumUtilities").findEdges,
		n = 4,
		o = n * 2;

	function p(a) {
		return a.y0
	}

	function q(a) {
		return a.y == null ? null : a.y + a.y0
	}
	var r = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumStackedAreas",
		mixins: [b("SpectrumDataVisualization").Mixin],
		statics: {
			getExtentY: function(a) {
				var b = r.getStackedData(a);
				a = a.base;
				a = a == null ? Math.min.apply(null, b[0].map(p)) : a == "bottom" ? Math.min.apply(null, b[0].map(q)) : a;
				b = Math.max.apply(null, b[b.length - 1].map(q));
				return [a, b]
			},
			getStackedData: function(a) {
				var c = b("SpectrumDataVisualization").getValueXAccessor(a),
					d = b("SpectrumDataVisualization").getValueYAccessor(a),
					e = a.partialValue || function() {
						return !1
					},
					f = a.data.map(function(a) {
						return a.map(function(b, a) {
							return {
								x: c(b, a),
								y: d(b, a),
								y0: 0,
								isPartial: e(b, a)
							}
						})
					});
				a = a.offset || f[0].map(function(a) {
					return 0
				});
				var g = f.map(function() {
					return []
				});
				for (var h = 0; h < f[0].length; ++h) {
					var i = a[h];
					for (var j = 0; j < f.length; ++j) {
						var k = f[j][h];
						g[j][h] = babelHelpers["extends"]({}, k, {
							y0: i
						});
						i += k.y
					}
				}
				return g
			},
			getGutter: function(a, b) {
				a = b.areas.hoverBubbleStrokeWidth + n;
				return {
					bottom: a,
					left: a,
					right: a,
					top: a
				}
			}
		},
		getTotalYGivenX: function(a) {
			var b = r.getStackedData(this.props);
			b = b[b.length - 1];
			for (var c = 0; c < b.length; ++c)
				if (b[c].x === a) return q(b[c])
		},
		getOffsetX: function() {
			var a = b("SpectrumDataVisualization").getScaleX(this.props);
			return a.rangeBand ? a.rangeBand() / 2 : 0
		},
		formatDatum: function(a, c) {
			var d = this.props.titles,
				e = b("SpectrumDataVisualization").getScaleX(this.props),
				f = e.rangeBand ? e.rangeBand() : 0;
			e = {
				areaIndex: c,
				rect: {
					left: e(a.valueX),
					right: e(a.valueX) + f,
					top: a.top,
					bottom: a.bottom
				},
				target: this,
				title: d && d[c] || "",
				total: this.getTotalYGivenX(a.valueX),
				valueX: a.valueX,
				valueY: a.valueY,
				isPartial: a.isPartial
			};
			return e
		},
		handleEvent: function(a) {
			if (a.type != "mousemove") return;
			if (this.props.ignoreMouseEvents) return;
			var c = b("SpectrumDataVisualization").getScaleX(this.props);
			c = b("SpectrumUtilities").getOuterRange(c);
			if (a.x < c[0] || a.x > c[1]) return;
			c = this.findEdges(a.x, a.y);
			c.right < a.hitRegionRight && (a.hitRegionRight = c.right);
			c.left > a.hitRegionLeft && (a.hitRegionLeft = c.left);
			c.bottom < a.hitRegionBottom && (a.hitRegionBottom = c.bottom);
			c.top > a.hitRegionTop && (a.hitRegionTop = c.top);
			if (c.bestDatum.valueX != null && c.bestDatum.valueY != null) {
				c.bestDatum.isPartial = c.isPartial;
				var d = this.formatDatum(c.bestDatum, c.areaIndex);
				d.allData = c.allData.map(this.formatDatum, this);
				this.props.onRequestFocus && this.props.onRequestFocus(d);
				a.stopPropagation()
			}
		},
		findEdges: function(a, c) {
			var d = b("SpectrumDataVisualization").getScaleX(this.props),
				e = this.props.scaleY,
				f = r.getStackedData(this.props),
				g = null,
				h = {},
				i = [];

			function j(a) {
				return {
					bottom: e(a.y0),
					isPartial: a.isPartial,
					top: e(a.y0 + a.y),
					valueX: a.x,
					valueY: a.y
				}
			}

			function k(a) {
				function c(c, f) {
					function k(c, k, l, m) {
						k = b("SpectrumDataVisualization").getX(d, c.x);
						m = b("SpectrumDataVisualization").getX(d, l.x);
						var n = e(c.y0),
							o = e(l.y0),
							p = a(k, n, m, o);
						(p == 1 || p == 2 || p && f === 0) && (g = f, p == 1 || p == 3 ? (h = j(c), i[f] = h) : (h = j(l), i[f] = h));
						n = e(c.y0 + c.y);
						o = e(l.y0 + l.y);
						p = a(k, n, m, o);
						(p == 3 || p == 4) && (c.y || l.y) && (g = f, p == 3 ? (h = j(c), i[f] = h) : (h = j(l), i[f] = h))
					}
					l(c, k)
				}
				f.forEach(c)
			}
			a = m(a, c, k);
			a.areaIndex = g;
			a.bestDatum = h;
			a.top = h.top;
			a.bottom = h.bottom;
			a.allData = i;
			return a
		},
		shouldComponentUpdate: function(a) {
			return this.hasDataChanged(a) || this.hasFocusChanged(a) || this.hasDimensionsChanged(a)
		},
		hasHighlightDetailsChanged: function(a, b) {
			a = a.rect;
			b = b.rect;
			return a.left !== b.left || a.right !== b.right || a.top !== b.top || a.bottom !== b.bottom
		},
		getPartialBoxPath: function(a) {
			var c = b("SpectrumDataVisualization").getScaleX(this.props),
				d = this.props.scaleY,
				e = a.map(function(a, e) {
					e = null;
					var f = null;
					a.y != null && (e = d(a.y + a.y0), f = d(a.y0));
					return [b("SpectrumDataVisualization").getX(c, a.x), f, e]
				});

			function f(a, b) {
				return b <= 0 ? null : i(a[b], a[b - 1])
			}

			function g(a, b) {
				return b >= a.length - 1 ? null : i(a[b], a[b + 1])
			}

			function i(a, b) {
				if (a[1] == null || b[1] == null) return null;
				var c = (a[0] + b[0]) * .5,
					d = (a[1] + b[1]) * .5;
				a = (a[2] + b[2]) * .5;
				return [c, d, a]
			}
			var j = h();
			for (var k = 0; k < e.length; k++)
				if (a[k].isPartial) {
					var l = f(e, k),
						m = g(e, k),
						n = l ? l : e[k];
					j.moveTo(n[0], n[1]);
					var o;
					l && (o = e[k][0] - l[0], j.line(o, e[k][1] - l[1]));
					m ? (n = m[0] - e[k][0], j.line(n, m[1] - e[k][1]), j.line(0, m[2] - m[1]), j.line(-n, e[k][2] - m[2])) : j.line(0, e[k][2] - e[k][1]);
					l ? j.line(-o, l[2] - e[k][2]) : j.line(0, e[k][1] - e[k][2]);
					j.close()
				} return j
		},
		render: function() {
			var a = r.getStackedData(this.props),
				c = b("SpectrumDataVisualization").getScaleX(this.props),
				d = this.props.scaleY,
				e = this.props.offset || "zero",
				f = this.props.height,
				l = this.props.width,
				m = this.props.focus;
			m && m.target !== this && (m = null);
			var p = this.props.theme.areas,
				q = b("d3-old/scale/ordinal")().range(p.colors),
				s = this.getPartialBoxPath;

			function t(e, j) {
				var m = j < a.length - 1 ? .5 : 0,
					n = s(e);
				n = g.jsx(k, {
					d: n,
					fill: new(b("CSSBackgroundPattern.art"))(p.partialOverlayClass),
					x: 0,
					y: 0,
					width: l,
					height: f
				});
				var o = function(a) {
						return d(e[a].y0)
					},
					r = function(a) {
						return d(e[a].y0 + e[a].y) - m
					},
					t = function(a) {
						return b("SpectrumDataVisualization").getX(c, e[a].x)
					},
					u = h(),
					v = function(b, a) {
						var c;
						u.moveTo(t(b), r(b));
						for (c = b + 1; c < a; c++) u.lineTo(t(c), r(c));
						for (c = a - 1; c >= b; c--) u.lineTo(t(c), o(c));
						u.close()
					},
					w;
				for (var x = 0; x < e.length; x = w + 1) {
					for (w = x; w < e.length && e[w].y != null; w++);
					x + 1 < w && v(x, w)
				}
				return g.jsxs(i, {
					children: [g.jsx(k, {
						d: u,
						fill: q(j)
					}), n]
				}, j)
			}

			function u() {
				if (!m) return null;
				if (!p.hover) return null;
				var a = Math.round(m.rect.left),
					b = Math.round(m.rect.right),
					c = Math.round(m.rect.top),
					f = Math.round(m.rect.bottom),
					j = d.range();
				j = Math.round(Math.max(j[0], j[1]));
				var l = d.domain();
				l = Math.round(Math.min(l[0], l[1])) > 0 && e == "zero";
				var q = Math.round((a + b) / 2),
					r = h().moveTo((a + b) / 2, c).lineTo((a + b) / 2, f),
					s = h();
				(f != j || l) && (s = h().moveTo(a, j).lineTo(b, j));
				f - c > 8 || l ? (a = h().moveTo(q, c - n).arc(0, o, n).arc(0, -o, n).close(), b = h().moveTo(q, f - n).arc(0, o, n).arc(0, -o, n).close()) : (a = h().moveTo(q - n, c).arc(o, 0, n).lineTo(q + n, f).arc(-o, 0, n).close(), b = h());
				l && (b = h());
				return g.jsxs(i, {
					children: [g.jsx(k, {
						d: s,
						stroke: p.hover,
						strokeWidth: p.hoverBubbleStrokeWidth
					}), g.jsx(k, {
						d: r,
						stroke: p.hover,
						strokeWidth: p.hoveBarStrokeWidth
					}), g.jsx(k, {
						d: a,
						stroke: p.hover,
						fill: p.hoverFill,
						strokeWidth: p.hoverBubbleStrokeWidth
					}), g.jsx(k, {
						d: b,
						stroke: p.hover,
						fill: p.hoverFill,
						strokeWidth: p.hoverBubbleStrokeWidth
					})]
				})
			}
			var v = b("SpectrumDataVisualization").getClippingRectangleDimensions(this.props);
			return g.jsxs(i, {
				children: [g.jsx(j, {
					x: v.x,
					y: v.y,
					width: v.width,
					height: v.height,
					children: a.map(t)
				}), u()]
			})
		}
	});
	e.exports = r
}), null);
__d("SpectrumTooltip", ["cx", "PointerEventElement.react", "React", "ReactDOM", "SpectrumAnimationLayer", "prop-types"], (function(a, b, c, d, e, f, g) {
	var h = b("React"),
		i = 200,
		j = 10,
		k = 15;
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.state = {
				width: 0
			}, d.calculateCardWidth = function() {
				var a = b("ReactDOM").findDOMNode(d.refs.card).offsetWidth;
				d.setState({
					width: a
				});
				d.props.onCalculateWidth && d.props.onCalculateWidth(a)
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.componentDidUpdate = function(a) {
			var b = this.props.x !== this.props.x,
				c = this.props.y !== this.props.y;
			a = this.props.x != a.x || this.props.y != a.y;
			a && !b && !c && this.calculateCardWidth()
		};
		d.componentDidMount = function() {
			this.calculateCardWidth()
		};
		d.render = function() {
			var a = "_51i4" + (this.props.flip ? " _5k2_" : ""),
				c = this.props.x - j;
			this.props.flip && (c = c - this.state.width - k);
			return h.jsx(b("SpectrumAnimationLayer"), {
				opacity: .9,
				x: Math.round(c),
				y: Math.round(this.props.y - i / 2),
				height: i,
				zIndex: this.props.zIndex,
				children: h.jsx(b("PointerEventElement.react"), {
					className: a,
					children: h.jsxs("div", {
						className: "_5c7e _51i5",
						ref: "card",
						children: [h.jsx("div", {
							className: "_5l1x",
							children: this.props.children
						}), h.jsx("i", {
							className: "_5sx3"
						})]
					})
				})
			})
		};
		return c
	}(h.Component);
	a.propTypes = {
		flip: b("prop-types").bool,
		onCalculateWidth: b("prop-types").func
	};
	e.exports = a
}), null);
__d("SpectrumTooltipAction", ["cx", "React"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			return h.jsx("span", {
				className: "_5y0j",
				children: this.props.children
			})
		};
		return b
	}(h.Component);
	e.exports = a
}), null);
__d("SpectrumTooltipFooter", ["cx", "React"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			return h.jsx("span", {
				className: "_51wj",
				children: this.props.children
			})
		};
		return b
	}(h.Component);
	e.exports = a
}), null);
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
__d("SpectrumConstants", [], (function(a, b, c, d, e, f) {
	"use strict";
	a = {
		plotBands: {
			LabelPosition: {
				BOTTOM_LEFT: "bottom left",
				BOTTOM_RIGHT: "bottom right",
				TOP_LEFT: "top left",
				TOP_RIGHT: "top right"
			}
		},
		xAxis: {
			defaultTickCount: 10,
			defaultTickSize: 4,
			defaultTickPadding: 3
		},
		vlines: {
			defaultLineCount: 10
		}
	};
	b = a;
	e.exports = b
}), null);
__d("SpectrumVerticalLines", ["React", "ReactART", "SpectrumConstants", "SpectrumUtilities"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Group,
		i = b("ReactART").Path,
		j = b("ReactART").Shape;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.shouldComponentUpdate = function(a) {
			return this.props.scaleY !== a.scaleY || this.props.scaleX !== a.scaleX
		};
		d.render = function() {
			var a = this.props.theme;
			a = [a.xAxis.lineColor, a.xAxis.lineColor];
			var c = this.props.scaleX,
				d = this.props.ticks || b("SpectrumConstants").vlines.defaultLineCount,
				e = null,
				f = b("SpectrumUtilities").getOuterRange(this.props.scaleY),
				k = f[1],
				l = f[0];
			e == null ? f = c.ticks ? c.ticks(d) : c.domain() : f = e;
			var m = new i(),
				n = new i();

			function o(a, b, d) {
				(b % 4 ? n : m).moveTo(c(a), k).line(0, l - k)
			}
			f.forEach(o);
			return g.jsxs(h, {
				children: [g.jsx(j, {
					d: m,
					stroke: a[0],
					opacity: .5
				}), g.jsx(j, {
					d: n,
					stroke: a[1],
					opacity: .25
				})]
			})
		};
		return c
	}(g.Component);
	e.exports = a
}), null);
__d("SpectrumXAxis", ["React", "ReactART", "SpectrumBaseStyleSheet", "SpectrumConstants", "SpectrumUtilities", "getObjectValues", "keyMirror", "prop-types"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = (a = b("ReactART")).Group,
		i = a.Path,
		j = a.Shape,
		k = a.Text,
		l = b("keyMirror")({
			VERTICAL: null,
			HORIZONTAL: null
		});
	c = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		c.getGutter = function(a, c, d, e) {
			e = d.tickFormatMaxLength || 0;
			d = c.xAxis.fontSize / b("SpectrumBaseStyleSheet").xAxis.fontSize;
			e = e * d;
			a.secondaryTicks && (e = e * 2);
			d = {
				middle: 25,
				left: e,
				right: e
			};
			e = a.location === "top" ? "top" : "bottom";
			c = c.xAxis.minLabelGutter || 0;
			d[e] = Math.max(c, a.secondaryTicks ? 45 : 20);
			return d
		};
		var d = c.prototype;
		d.shouldComponentUpdate = function(a) {
			return this.props.scaleX !== a.scaleX
		};
		d.render = function() {
			var a = this.props.alignToGutter,
				c = this.props.theme,
				d = c.xAxis,
				e = c.xAxis.labelColor,
				f = c.xAxis.axisLineColor,
				m = c.xAxis.lineColor,
				n = this.props.scaleX,
				o = this.props.ticks || b("SpectrumConstants").xAxis.defaultTickCount,
				p = b("SpectrumConstants").xAxis.defaultTickSize,
				q = c.xAxis.tickPadding || b("SpectrumConstants").xAxis.defaultTickPadding,
				r = null,
				s = null,
				t = this.props.labelOrientation,
				u = c.xAxis.minLabelGutter || 0,
				v = Math.max(u, this.props.secondaryTicks ? 45 : 20),
				w = 0;
			t === l.VERTICAL && (w = -90);
			u = b("SpectrumUtilities").getOuterRange(this.props.scaleY);
			var x = u[1];
			u = u[0];
			var y = this.props.location,
				z = y === "top" ? x : u;
			(y === "top" || x > u) && (p = -p, q = -q);
			var A = b("SpectrumUtilities").getOuterRange(n);
			if (A) {
				x = Math.abs(A[1] - A[0]);
				var B = d.fontSize * 3.25;
				typeof o === "number" && o > x / B && (o = Math.floor(x / B))
			}
			s == null && (s = n.tickFormat ? n.tickFormat(o) : String);
			r == null ? u = n.ticks ? n.ticks(o) : n.domain() : u = r;
			var C;
			this.props.secondaryTicks && n.secondaryTicks ? (C = n.secondaryTicks(o), (!C.length || n(C[0]) > A[0] + B * 3) && C.unshift(n.domain()[0])) : C = null;
			x = this.props.disableLines;
			var D = !!s.bucketTicks || s.bucketTicks !== !1 && !!n.rangeBand,
				E = C && s.primary || s,
				F = C && s.secondary || s,
				G = n.rangeBand ? n.rangeBand() : 0,
				H = new i();

			function I(a, b, c) {
				function d(a) {
					return a < A[0] || a > A[A.length - 1] ? !1 : !0
				}
				if (D) {
					if (b === 0 && c.length > 1) {
						var e = n(c[b + 1]);
						if (n(a) + G == e) {
							e = n(a) + .5;
							d(e) && H.moveTo(e, z).line(0, p)
						}
					} else if (b > 0) {
						c = n(c[b - 1]);
						e = (c + G + n(a)) / 2 - .5;
						d(e) && H.moveTo(e, z).line(0, p)
					}
				} else H.moveTo(n(a), z).line(0, p)
			}

			function J() {
				if (!G) return null;
				H.moveTo(A[A.length - 1] - .5 + G, z).line(0, p)
			}

			function K(a, b, c) {
				function f(b) {
					return +b == +a
				}
				var h = n(a);
				D && (h += G * .5);
				h += N();
				if (C && C.some(f)) return null;
				h = Math.max(n.tickFormatMaxLength || 0, h);
				if (h > A[A.length - 1]) return null;
				f = O(!0);
				y === "top" && (f *= -1);
				return g.jsx(k, {
					alignment: c,
					fill: e,
					font: d,
					rotation: w,
					x: h,
					y: z + f,
					children: E(a)
				}, b)
			}

			function L() {
				if (t === l.HORIZONTAL) return "center";
				else if (y === "top") return "left";
				else return "right"
			}

			function M() {
				if (t === l.HORIZONTAL) return "left";
				else if (y === "top") return "right";
				else return "left"
			}

			function N() {
				return t === l.VERTICAL ? -.5 * d.fontSize : 0
			}

			function O(b) {
				var e = Math.abs(p),
					f = Math.abs(q),
					g = v - e,
					h = C ? 3 : 2;
				g = g / h;
				if (t === l.VERTICAL)
					if (b) return e + f;
					else return v - f;
				else if (b)
					if (a) {
						b = c.gutter.middle;
						b -= d.fontSize * 2 + e;
						b /= 2;
						return e + f + b
					} else {
						f = y === "top" ? d.fontSize / h : -1 * (h - 1) * d.fontSize / h;
						return e + g + f
					}
				else {
					b = y === "top" ? 2 * d.fontSize / h : -1 * d.fontSize / h;
					return e + g * 2 + b
				}
			}

			function P(a) {
				a = n(a) + .5;
				if (a < A[0]) return;
				var b = Math.abs(p);
				b = v - b;
				b = b / 3;
				b = Math.ceil(b * 2 / 4);
				var c = y === "top" ? -2 : 2;
				H.moveTo(a, z);
				for (var a = 0; a < b; a++) H.move(0, c).line(0, c)
			}

			function Q(a, b, c) {
				var f = F(a).toUpperCase(),
					h = O(!1);
				y === "top" && (h *= -1);
				return g.jsx(k, {
					alignment: c,
					fill: e,
					font: d,
					rotation: w,
					x: n(a) + Math.abs(q * 2) + N(),
					y: z + h,
					children: f
				}, b)
			}
			r = null;
			x || (u.forEach(I), C && C.forEach(P), J(), r = g.jsx(j, {
				d: H,
				stroke: m
			}));
			o = i().moveTo(A[0], z + .5).lineTo(A[1], z + .5);
			var R = L();
			s = u.map(function(a, b) {
				return K(a, b, R)
			}, u);
			var S = M();
			x = C ? C.map(function(a, b) {
				return Q(a, b, S)
			}, C) : null;
			return g.jsxs(h, {
				children: [c.xAxis.baseline ? g.jsx(j, {
					d: o,
					stroke: f
				}) : null, r, s, x]
			})
		};
		return c
	}(g.Component);
	c.propTypes = {
		alignToGutter: b("prop-types").bool,
		location: b("prop-types").oneOf(["top", "bottom"]),
		labelOrientation: b("prop-types").oneOf(b("getObjectValues")(l))
	};
	c.defaultProps = {
		labelOrientation: l.HORIZONTAL,
		location: "bottom"
	};
	c.Orientation = l;
	e.exports = c
}), null);
__d("SpectrumYAxis", ["React", "ReactART", "SpectrumBaseStyleSheet", "SpectrumUtilities"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = (a = b("ReactART")).Group,
		i = a.Path,
		j = a.Shape,
		k = a.Text;
	c = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		c.getGutter = function(a, c, d, e) {
			a = e.tickFormatMaxLength != null ? e.tickFormatMaxLength : 45;
			d = c.yAxis.fontSize / b("SpectrumBaseStyleSheet").yAxis.fontSize;
			a = a * d;
			e = {
				bottom: 20,
				left: a,
				top: 20
			};
			c.yAxis.showRightTicks && (e.right = a);
			return e
		};
		c.getTickCount = function(a) {
			var c = a.theme;
			a = b("SpectrumUtilities").getOuterRange(a.scaleY);
			return Math.round(Math.abs(a[0] - a[1]) / c.yAxis.distanceBetweenTicks)
		};
		c.getAdjustedScaleY = function(a) {
			var b = a.scaleY;
			return !b.nice ? b.copy() : b.copy().nice(c.getTickCount(a))
		};
		var d = c.prototype;
		d.shouldComponentUpdate = function(a) {
			return this.props.scaleY !== a.scaleY
		};
		d.render = function() {
			var a = this.props.theme,
				d = a.yAxis,
				e = a.yAxis.labelColor,
				f = a.yAxis.lineColor,
				l = a.yAxis.baseLineColor || f,
				m = this.props.scaleY,
				n = c.getTickCount(this.props),
				o = 0,
				p = a.yAxis.tickPadding || 5,
				q = b("SpectrumUtilities").getOuterRange(this.props.scaleX),
				r = q == null ? 0 : q[0],
				s = q[q.length - 1],
				t = q == null ? 5 : q[q.length - 1] - r;
			q = m.ticks ? m.ticks(n) : m.domain();
			var u = m.tickFormat ? m.tickFormat(q) : String;

			function v(a, b) {
				a.moveTo(r - o, Math.round(m(b)) + .5).line(t + o + o, 0)
			}

			function w(b, c) {
				if (b === 0 && this.props.hideBaseLine) return null;
				var f = [g.jsx(k, {
					alignment: "right",
					fill: e,
					font: d,
					x: r - o - p,
					y: m(b) - d.fontSize / 2,
					children: u(b)
				}, "left" + c)];
				a.yAxis.showRightTicks && f.push(g.jsx(k, {
					alignment: "left",
					fill: e,
					font: d,
					x: s + p,
					y: m(b) - d.fontSize / 2,
					children: u(b)
				}, "right" + c));
				return f
			}
			var x = i(),
				y = i();
			q.forEach(function(a, b) {
				a === 0 ? this.props.hideBaseLine || v(y, a) : v(x, a)
			}, this);
			return g.jsxs(h, {
				children: [g.jsx(j, {
					d: x,
					stroke: f
				}), g.jsx(j, {
					d: y,
					stroke: l
				}), q.map(w, this)]
			})
		};
		return c
	}(g.Component);
	e.exports = c
}), null);
__d("HubbleAreaLineChart", ["fbt", "HubbleContext", "HubbleStyle", "HubbleUtils", "InsightsBenchmarkLayer.react", "React", "SpectrumBaseNumberScale", "SpectrumBrush", "SpectrumChart", "SpectrumLines", "SpectrumMarker", "SpectrumNumberUtilities", "SpectrumStackedAreas", "SpectrumTooltipMenu", "SpectrumVerticalLines", "SpectrumXAxis", "SpectrumYAxis", "d3-old/time/day"], (function(a, b, c, d, e, f, g) {
	var h = b("React"),
		i = Math.ceil(b("HubbleStyle").LEFT_COL_CHART_WIDTH / 8),
		j = -1,
		k = 1;
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
				return Math.max(Math.ceil(a / i), 1)
			}, e.$3 = function(a) {
				if (!e.$2()) return a;
				var c, d, f = [],
					g = e.$1(a.length);
				if (e.state.expandDirection == j) {
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
			b == d && c != a ? e = k : b != d && c == a && (e = j);
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
				i = this.props.valueY;
			this.$2() && (e = e || b("HubbleUtils").partialValue, f = f || b("HubbleUtils").valueX, i = i || b("HubbleUtils").valueY);
			var k = 0,
				l = null,
				m = null,
				n = null;
			a && (m = this.props.areas.map(this.$3), k = m[0].length);
			c && (n = this.props.lines.map(this.$3), k = Math.max(k, n[0].length));
			this.props.areaOffsets && (l = this.$3(this.props.areaOffsets).map(b("HubbleUtils").valueY));
			a = a ? h.jsx(b("SpectrumStackedAreas"), {
				base: this.props.base,
				data: m,
				offset: l,
				partialValue: e,
				titles: this.props.areaTitles,
				valueX: f,
				valueY: i
			}) : null;
			m = c ? h.jsx(b("SpectrumLines"), {
				data: n,
				showGuide: this.props.showGuide,
				onClick: this.props.onClick,
				partialValue: e,
				titles: this.props.lineTitles,
				valueX: f,
				valueY: i
			}) : null;
			l = this.props.markers;
			Array.isArray(l) && !!l.length && (l = l.map(function(a, c) {
				return h.jsx(b("SpectrumMarker"), {
					x: a.x,
					y: a.y,
					children: a.label
				}, "marker_" + c)
			}));
			var o;
			this.props.onSelection && (o = g._("Nh\u1ea5p chu\u1ed9t ho\u1eb7c k\u00e9o \u0111\u1ec3 ch\u1ecdn"));
			c = this.props.domain;
			if (Array.isArray(c)) {
				n = b("d3-old/time/day").range(this.props.domain[0], this.props.domain[1]).length;
				e = this.$1(n);
				c = c.slice();
				f = n - (1 + e * (k - 1));
				f && (this.state.expandDirection == j ? c[0] = b("d3-old/time/day").utc.offset(c[0], f) : c[1] = b("d3-old/time/day").utc.offset(c[1], -1 * f))
			}
			i = null;
			this.props.vlines && (i = h.jsx(b("SpectrumVerticalLines"), {
				ticks: k
			}));
			return h.jsxs(b("SpectrumChart"), {
				domain: c,
				height: this.props.height,
				scaleY: this.props.scaleY || b("SpectrumBaseNumberScale")(0, b("SpectrumNumberUtilities").shortIntegerFormatterWithoutRounding),
				scaleYHasDomain: this.props.scaleYHasDomain,
				theme: this.props.theme,
				width: this.props.width,
				onRequestFocus: this.props.onRequestFocus,
				children: [a, m, l, h.jsx(b("SpectrumBrush"), {
					onSelection: this.props.onSelection,
					selection: this.props.selection
				}), h.jsx(b("SpectrumXAxis"), {
					secondaryTicks: this.props.secondaryTicks,
					ticks: k
				}), i, h.jsx(b("SpectrumYAxis"), {}), h.jsx(b("InsightsBenchmarkLayer.react"), {
					benchmarks: d,
					visible: !!d
				}), h.jsx(b("SpectrumTooltipMenu"), {
					actionContent: o,
					customFormat: this.props.customTooltipFormat
				})]
			})
		};
		return c
	}(h.Component);
	a.defaultProps = {
		scaleYHasDomain: !1
	};
	e.exports = a
}), null);
__d("ExternalMetricConsumptionValidationEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
	"use strict";
	a = b("getFalcoLogPolicy_DO_NOT_USE")("1743605");
	c = b("FalcoLoggerInternal").create("external_metric_consumption_validation_event", a);
	e.exports = c
}), null);
__d("MetricConsumptionValidationSingleValueParams", ["ImmutableRecordWithV4Types", "immutable"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("ImmutableRecordWithV4Types").Record({
		trace_id: null,
		product_group: "PAGES",
		root_object_id: null,
		surface: "UNKNOWN",
		component: "",
		object_ids: b("immutable").List(),
		object_id_type: "PAGE_ID",
		metrics: b("immutable").List(),
		metric_type: "UNIFIED_API_METRIC",
		preset: null,
		since: null,
		until: null,
		filters: b("immutable").List(),
		query_url: null
	});
	a = function(a) {
		return g(a)
	};
	f.createSingleValueQueryParameters = a;
	c = function(a, b) {
		var c = a.since,
			d = a.until;
		c = c == null || d == null ? null : {
			since: c,
			until: d
		};
		return {
			product_group: a.product_group,
			surface: a.surface,
			component: a.component,
			root_object_id: a.root_object_id,
			object_ids: a.object_ids.toArray(),
			object_id_type: a.object_id_type,
			metrics: a.metrics.toArray(),
			metric_type: a.metric_type,
			time_range_preset: a.preset,
			query_type: "SUMMARY",
			filters: a.filters ? a.filters.toArray() : [],
			time_range: c,
			presented_value: b != null ? JSON.stringify(b) : null,
			error_type: null,
			error_message: null,
			query_url: a.query_url
		}
	};
	f.createFalcoEventShapeForSingleValueQuery = c
}), null);
__d("MetricValidationGKs", ["gkx"], (function(a, b, c, d, e, f) {
	"use strict";
	f.passMetricValidationGK = a;

	function a(a) {
		switch (a) {
			case "SummaryCardNew":
				return !0;
			case "PageInsightsTimelinePostsTable":
				return b("gkx")("846584");
			case "PageInsightsPageCompetitorTableRow":
				return b("gkx")("924745");
			case "HubblePostDetailsDrillDown":
				return b("gkx")("1016406");
			case "HubbleReachController_page_daily_recommendation":
			case "HubbleReachController_page_post_reach":
			case "HubbleReachController_page_total_reach":
			case "HubbleFollowersController_net_page_followers":
			case "HubbleFollowersController_page_follower_sources":
			case "HubbleFollowersController_total_page_followers":
			case "HubbleNewLikesController_net_page_likes":
			case "HubbleNewLikesController_page_like_sources":
			case "HubbleNewLikesController_total_page_likes":
				return !1;
			default:
				return !1
		}
	}
}), null);
__d("useSingleValueValidation", ["ExternalMetricConsumptionValidationEventFalcoEvent", "FBLogger", "MetricConsumptionValidationSingleValueParams", "MetricValidationGKs", "Random", "React", "immutable"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 10;

	function a(a) {
		var c = a.productGroup,
			d = a.surface,
			e = a.rootObjectID,
			f = a.objectID,
			i = a.metrics,
			j = a.value,
			k = a.component,
			l = a.objectIDType,
			m = a.metricType,
			n = a.preset;
		g.useEffect(function() {
			if (!b("MetricValidationGKs").passMetricValidationGK(k)) return;
			if (!b("Random").coinflip(h)) return;
			try {
				var a = b("MetricConsumptionValidationSingleValueParams").createSingleValueQueryParameters({
					product_group: c,
					surface: d,
					component: k,
					root_object_id: e,
					object_ids: b("immutable").List([f]),
					object_id_type: l,
					metric_type: m == void 0 ? "UNIFIED_API_METRIC" : m,
					metrics: i,
					preset: n
				});
				b("ExternalMetricConsumptionValidationEventFalcoEvent").log(function() {
					return b("MetricConsumptionValidationSingleValueParams").createFalcoEventShapeForSingleValueQuery(a, j)
				})
			} catch (a) {
				b("FBLogger")("metric-ui-validation").catching(a).warn("Error constructing validation params in single validation for %s", k)
			}
		}, [j, i, k, l, m, n, f, e, c, d])
	}
}), null);
__d("HubblePrimaryMetricWithValidation", ["HubblePrimaryMetric.react", "React", "immutable", "useSingleValueValidation"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.validationProps;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["validationProps"]);
		b("useSingleValueValidation")(babelHelpers["extends"]({}, c, {
			value: a.number
		}));
		return g.jsx(b("HubblePrimaryMetric.react"), babelHelpers["extends"]({}, a))
	}
}), null);
__d("LivingRoomInsightsEvent", [], (function(a, b, c, d, e, f) {
	a = Object.freeze({
		HOVER_ON_60S_VIEWER_METRIC: "hover_on_60s_viewer_metric",
		HOVER_ON_VIEW_TIME_METRIC: "hover_on_view_time_metric",
		OPEN_LIVING_ROOM_POST_DETAILS: "open_living_room_post_details"
	});
	e.exports = a
}), null);
__d("MetricConsumptionValidationXMetricParams", ["ImmutableRecordWithV4Types", "immutable"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("ImmutableRecordWithV4Types").Record({
		trace_id: null,
		product_group: null,
		surface: null,
		component: "",
		root_object_id: null,
		object_ids: b("immutable").List(),
		object_id_type: null,
		metrics: b("immutable").List(),
		metric_type: "UNIFIED_API_METRIC",
		filters: b("immutable").List(),
		preset: null,
		since: null,
		until: null,
		query_url: null,
		breakdown: null
	});
	a = function(a) {
		return g(a)
	};
	f.createXMetricQueryParameters = a;
	c = function(a, b) {
		var c = a.since,
			d = a.until;
		c = c == null || d == null ? null : {
			since: c,
			until: d
		};
		return {
			product_group: a.product_group,
			surface: a.surface,
			component: a.component,
			root_object_id: a.root_object_id,
			object_ids: a.object_ids.toArray(),
			object_id_type: a.object_id_type,
			metrics: a.metrics.toArray(),
			metric_type: a.metric_type,
			time_range_preset: a.preset,
			query_type: "SUMMARY_BREAKDOWN",
			filters: a.filters ? a.filters.toArray() : [],
			time_range: c,
			presented_value: b != null ? JSON.stringify(b) : null,
			error_type: null,
			error_message: null,
			query_url: a.query_url,
			breakdowns: a.breakdown == null ? [] : [a.breakdown]
		}
	};
	f.createFalcoEventShapeForXMetricQuery = c
}), null);
__d("PostDetailsProductCard.react", ["fbt", "ix", "FlexLayout.react", "Image.react", "React", "TetraText.react", "Tooltip.react", "stylex"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	f.PostDetailsProductCard = a;
	f.TaggedProductClickMetricLabel = n;
	var i, j = b("React"),
		k = "\xa0",
		l = 60,
		m = "\u2013";

	function a(a) {
		var c = a.imageUri,
			d = a.metricValue,
			e = a.name;
		a = a.reviewStatus;
		e = j.jsx("div", {
			className: "rj2hsocd qjfq86k5 br743ykl",
			children: j.jsx(b("TetraText.react"), {
				numberOfLines: 2,
				type: "bodyLink3",
				children: e || k
			})
		});
		c = j.jsx("div", {
			className: "hf30pyar lq84ybu9 ta68dy8c kpwa50dg m0cukt09 h8391g91 jvf90sed br743ykl majrg6er oywo8hpq t29kiutw tpvapw4o a26p89d5",
			children: j.jsx(b("Image.react"), {
				height: l,
				src: (c = c) != null ? c : "",
				style: {
					objectFit: "cover"
				},
				width: l
			})
		});
		var f = a === "rejected" ? j.jsx("div", {
			className: "i0rxk2l3 igjjae4c glosn74e h9e6h2y7",
			children: g._("S\u1ea3n ph\u1ea9m b\u1ecb t\u1eeb ch\u1ed1i")
		}) : a !== "approved" ? j.jsx("div", {
			className: "i0rxk2l3 igjjae4c glosn74e sdu3v33a",
			children: g._("S\u1ea3n ph\u1ea9m \u0111ang \u0111\u01b0\u1ee3c x\u00e9t duy\u1ec7t")
		}) : null;
		d = j.jsx(b("TetraText.react"), {
			align: "end",
			color: "primary",
			type: "bodyLink3",
			numberOfLines: 1,
			children: a === "approved" ? d : m
		});
		return j.jsxs("div", {
			className: "hf30pyar lq84ybu9 ta68dy8c kpwa50dg m0cukt09 h8391g91 jvf90sed br743ykl majrg6er oywo8hpq rtvnj3vc e4ay1f3w rj2hsocd aesu6q9g s1m0hq7j ihx95mk1",
			children: [e, j.jsxs("div", {
				className: "sl27f92c alzwoclg i85zmo3j",
				children: [j.jsxs("div", {
					className: "alzwoclg i85zmo3j",
					children: [c, j.jsxs("div", {
						children: [j.jsx(n, {}), f]
					})]
				}), j.jsx("div", {
					className: a === "approved" ? "pf0ji5sa" : "",
					children: d
				})]
			})]
		})
	}

	function n() {
		var a = g._("T\u1ed5ng s\u1ed1 l\u01b0\u1ee3t nh\u1ea5p v\u00e0o s\u1ea3n ph\u1ea9m \u0111\u01b0\u1ee3c g\u1eafn th\u1ebb trong b\u00e0i vi\u1ebft.");
		a = j.jsx("div", {
			className: "bq6c9xl4 lcfup58g c99aazoo fxk3tzhb",
			children: j.jsx(b("Tooltip.react"), {
				position: "below",
				tooltip: a,
				children: j.jsx(b("Image.react"), {
					src: h("76155")
				})
			})
		});
		return j.jsxs(b("FlexLayout.react"), {
			align: "center",
			children: [j.jsx(b("TetraText.react"), {
				color: "secondary",
				type: "body4",
				children: g._("S\u1ed1 l\u01b0\u1ee3t click v\u00e0o s\u1ea3n ph\u1ea9m \u0111\u01b0\u1ee3c g\u1eafn th\u1ebb")
			}), a]
		})
	}(i || (i = b("stylex"))).inject(".i85zmo3j{align-items:center}", 1);
	i.inject(".alzwoclg{display:flex}", 1);
	i.inject(".sl27f92c{justify-content:space-between}", 1);
	i.inject(".br743ykl{border-bottom:1px solid rgba(0,0,0,.1)}", .3);
	i.inject(".qjfq86k5{margin-bottom:12px}", 1);
	i.inject(".rj2hsocd{padding-bottom:12px}", 1);
	i.inject(".fxk3tzhb{display:inline-flex}", 1);
	i.inject(".c99aazoo{margin-top:3px}", 1);
	i.inject(".lcfup58g{padding-left:4px}", 1, ".lcfup58g{padding-right:4px}");
	i.inject(".bq6c9xl4{vertical-align:middle}", 1);
	i.inject(".a26p89d5{height:60px}", 1);
	i.inject(".tpvapw4o{margin-right:12px}", 1, ".tpvapw4o{margin-left:12px}");
	i.inject(".t29kiutw{width:60px}", 1);
	i.inject(".sdu3v33a{color:#F1A817}", 1);
	i.inject(".h9e6h2y7{color:#FA383E}", 1);
	i.inject(".glosn74e{font-size:0.75rem}", 1);
	i.inject(".igjjae4c{font-weight:bold}", 1);
	i.inject(".i0rxk2l3{margin-top:4px}", 1);
	i.inject(".i85zmo3j{align-items:center}", 1);
	i.inject(".alzwoclg{display:flex}", 1);
	i.inject(".pf0ji5sa{min-width:50px}", 1);
	i.inject(".ihx95mk1{margin-top:12px}", 1);
	i.inject(".s1m0hq7j{padding-top:12px}", 1);
	i.inject(".aesu6q9g{padding-right:12px}", 1, ".aesu6q9g{padding-left:12px}");
	i.inject(".rj2hsocd{padding-bottom:12px}", 1);
	i.inject(".e4ay1f3w{padding-left:12px}", 1, ".e4ay1f3w{padding-right:12px}");
	i.inject(".rtvnj3vc{width:336px}", 1);
	i.inject(".oywo8hpq{border-top:1px solid rgba(0,0,0,.1)}", .3);
	i.inject(".majrg6er{border-right:1px solid rgba(0,0,0,.1)}", .3, ".majrg6er{border-left:1px solid rgba(0,0,0,.1)}");
	i.inject(".br743ykl{border-bottom:1px solid rgba(0,0,0,.1)}", .3);
	i.inject(".jvf90sed{border-left:1px solid rgba(0,0,0,.1)}", .3, ".jvf90sed{border-right:1px solid rgba(0,0,0,.1)}");
	i.inject(".h8391g91{border-top-left-radius:8px}", 1, ".h8391g91{border-top-right-radius:8px}");
	i.inject(".m0cukt09{border-top-right-radius:8px}", 1, ".m0cukt09{border-top-left-radius:8px}");
	i.inject(".kpwa50dg{border-bottom-right-radius:8px}", 1, ".kpwa50dg{border-bottom-left-radius:8px}");
	i.inject(".ta68dy8c{border-bottom-left-radius:8px}", 1, ".ta68dy8c{border-bottom-right-radius:8px}");
	i.inject(".lq84ybu9{overflow-x:hidden}", 1);
	i.inject(".hf30pyar{overflow-y:hidden}", 1)
}), null);
__d("XBCMPRootController", ["XController"], (function(a, b, c, d, e, f) {
	e.exports = b("XController").create("/collabsmanager/{?*child_path}", {
		page_id: {
			type: "FBID"
		},
		creator_page_id: {
			type: "FBID"
		},
		child_path: {
			type: "String"
		},
		bc_auto_shown_tagged_post_id: {
			type: "FBIDVector"
		},
		entry_source: {
			type: "Enum",
			enumType: 1
		}
	})
}), null);
__d("HubblePostDetailsDrillDown", ["ix", "cx", "fbt", "BrandedContentMatchingToolCreatorTypedLogger", "CometPressable.react", "ConnectedCommerceProductTaggingInsightsGK", "ExternalMetricConsumptionValidationEventFalcoEvent", "FBLogger", "FDSButton.react", "FDSLink.react", "FlexLayout.react", "HubbleContext", "HubbleLogger", "HubblePostView.react", "HubblePrimaryMetric.react", "HubblePrimaryMetricWithValidation", "HubbleSecondaryMetric.react", "HubbleSecondaryMetricGroup.react", "HubbleTimeZoneDisclaimer.react", "HubbleUtils", "Image.react", "InsightsInfoTip.react", "LeftRight.react", "LivingRoomInsightsEvent", "LivingRoomInsightsTypedLogger", "MetricConsumptionValidationXMetricParams", "PageInsightsAnnouncementCard.react", "PageInsightsMonitoringTypedLogger", "PostDetailsProductCard.react", "Random", "React", "TetraText.react", "UFIReactionIconImpl.react", "UFIReactionTypes", "URI", "XBCMPRootController", "XUIGrayText.react", "asset", "getOwnObjectValues", "immutable", "joinClasses", "stylex", "sumOfArray"], (function(a, b, c, d, e, f, g, h, i) {
	"use strict";
	var j, k, l = b("MetricConsumptionValidationXMetricParams").createFalcoEventShapeForXMetricQuery,
		m = b("MetricConsumptionValidationXMetricParams").createXMetricQueryParameters,
		n = b("PostDetailsProductCard.react").PostDetailsProductCard,
		o = b("PostDetailsProductCard.react").TaggedProductClickMetricLabel,
		p = b("React"),
		q = "\u2013",
		r = {
			total: i._("L\u01b0\u1ee3t th\u00edch"),
			onPost: i._("Tr\u00ean b\u00e0i vi\u1ebft"),
			onShares: i._("Tr\u00ean l\u01b0\u1ee3t chia s\u1ebb")
		},
		s = {
			total: i._("B\u00ecnh lu\u1eadn"),
			onPost: i._("Tr\u00ean b\u00e0i vi\u1ebft"),
			onShares: i._("Tr\u00ean l\u01b0\u1ee3t chia s\u1ebb")
		},
		t = {
			total: i._("L\u01b0\u1ee3t chia s\u1ebb"),
			onPost: i._("Tr\u00ean b\u00e0i vi\u1ebft"),
			onShares: i._("Tr\u00ean l\u01b0\u1ee3t chia s\u1ebb")
		},
		u = {
			hide_clicks: i._("\u1ea8n b\u00e0i vi\u1ebft"),
			hide_all_clicks: i._("\u1ea8n t\u1ea5t c\u1ea3 b\u00e0i vi\u1ebft")
		},
		v = {
			report_spam_clicks: i._("B\u00e1o c\u00e1o l\u00e0 spam"),
			unlike_page_clicks: i._("B\u1ecf th\u00edch Trang")
		},
		w = {
			total: i._("T\u1ed5ng s\u1ed1 ng\u01b0\u1eddi ti\u1ebfp c\u1eadn"),
			organic: i._("S\u1ed1 ng\u01b0\u1eddi xem t\u1ef1 nhi\u00ean"),
			paid: i._("S\u1ed1 ng\u01b0\u1eddi ti\u1ebfp c\u1eadn tr\u1ea3 ph\u00ed")
		},
		x = {
			total: i._("T\u1ed5ng s\u1ed1 l\u01b0\u1ee3t hi\u1ec3n th\u1ecb"),
			organic: i._("L\u01b0\u1ee3t hi\u1ec3n th\u1ecb t\u1ef1 nhi\u00ean"),
			paid: i._("L\u01b0\u1ee3t hi\u1ec3n th\u1ecb tr\u1ea3 ph\u00ed")
		},
		y = null,
		z = {
			other: i._("L\u01b0\u1ee3t click kh\u00f4ng v\u00e0o n\u1ed9i dung nh\u01b0 l\u01b0\u1ee3t click v\u00e0o t\u00ean trang c\u00e1 nh\u00e2n ho\u1eb7c n\u00fat \"xem th\u00eam\"."),
			reactions: i._("T\u1ed5ng s\u1ed1 c\u1ea3m x\u00fac, b\u00ecnh lu\u1eadn v\u00e0 l\u01b0\u1ee3t chia s\u1ebb gi\u1eefa b\u00e0i vi\u1ebft g\u1ed1c v\u00e0 n\u1ed9i dung chia s\u1ebb b\u00e0i vi\u1ebft \u0111\u00f3. \u0110i\u1ec1u n\u00e0y bao g\u1ed3m c\u00e1c l\u01b0\u1ee3t t\u01b0\u01a1ng t\u00e1c \u0111\u00e3 b\u1ecb thay \u0111\u1ed5i ho\u1eb7c x\u00f3a."),
			video_play: i._("S\u1ed1 l\u1ea7n video c\u1ee7a b\u1ea1n b\u1eaft \u0111\u1ea7u ph\u00e1t, sau khi ai \u0111\u00f3 nh\u1ea5p \u0111\u1ec3 ph\u00e1t.")
		},
		A = i._("L\u01b0\u1ee3t xem video trong t\u1ed1i thi\u1ec3u 3 gi\u00e2y"),
		B = 5;

	function C(a, c, d) {
		var e = Object.keys(c).map(function(e) {
			var f = null;
			if (Object.prototype.hasOwnProperty.call(a, e)) {
				Object.prototype.hasOwnProperty.call(z, e) ? f = p.jsx(b("InsightsInfoTip.react"), {
					tip: z[e],
					children: c[e]
				}) : e === "link" && b("HubbleContext").get("canSeeLinkClickAnnoucement") ? f = p.jsx(b("PageInsightsAnnouncementCard.react"), {
					pageID: b("HubbleContext").getPageID(),
					children: c[e]
				}) : f = c[e];
				return p.jsx(b("HubbleSecondaryMetric.react"), {
					decoration: b("HubbleSecondaryMetric.react").DECORATION.ruled,
					label: f,
					number: a[e],
					tooltip: d && Object.prototype.hasOwnProperty.call(d, e) ? d[e] : void 0
				}, e)
			}
		}).filter(function(a) {
			return a != null
		});
		return p.jsx(b("HubbleSecondaryMetricGroup.react"), {
			className: "_3uhz",
			children: e
		})
	}

	function D(a, c) {
		var d = Object.keys(c).map(function(d) {
			if (Object.prototype.hasOwnProperty.call(a, d)) return p.jsx(b("HubbleSecondaryMetric.react"), {
				layout: b("HubbleSecondaryMetric.react").LAYOUT.flat,
				label: c[d],
				number: a[d]
			}, d)
		});
		return p.jsx(b("HubbleSecondaryMetricGroup.react"), {
			children: d
		})
	}

	function E(a, c, d, e) {
		var f = b("UFIReactionTypes").ordering.map(function(f) {
			if (a[f] || c[f]) {
				var g = c[f] || 0,
					h = Math.max(a[f] || 0, g);
				return e ? p.jsx("div", {
					className: "_55k0",
					children: p.jsx(b("HubblePrimaryMetric.react"), {
						label: F(f).total,
						number: h
					})
				}, "reactionPanel-" + f) : C({
					total: h,
					onPost: g,
					onShares: h - g
				}, F(f), d)
			}
		});
		return f
	}

	function F(a) {
		return {
			total: p.jsxs("div", {
				children: [p.jsx(b("UFIReactionIconImpl.react"), {
					className: "_59ar",
					reaction: parseInt(a + "", 10)
				}), b("UFIReactionTypes").reactions[a].display_name]
			}),
			onPost: i._("\u0110\u1ed1i v\u1edbi b\u00e0i vi\u1ebft"),
			onShares: i._("\u0110\u1ed1i v\u1edbi l\u01b0\u1ee3t chia s\u1ebb")
		}
	}
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d, e, f, g, h;
			for (var j = arguments.length, k = new Array(j), l = 0; l < j; l++) k[l] = arguments[l];
			return (g = h = a.call.apply(a, [this].concat(k)) || this, h.state = {
				expandPostPerformanceSection: (c = (d = h.props.defaultExpandStatus) == null ? void 0 : d.postPerformance) != null ? c : !0,
				expandTaggedProductSection: (e = (f = h.props.defaultExpandStatus) == null ? void 0 : f.taggedProducts) != null ? e : !0,
				postIsProductTagged: !1
			}, h.logHoverLivingRoomViewTimeMetric = function() {
				h.$1(b("LivingRoomInsightsEvent").HOVER_ON_VIEW_TIME_METRIC, h.props.metrics.livingRoom)
			}, h.logHoverLivingRoom60sViewerMetric = function() {
				h.$1(b("LivingRoomInsightsEvent").HOVER_ON_60S_VIEWER_METRIC, h.props.metrics.livingRoom)
			}, h.getClickLabels = function() {
				y || (y = {
					photo_view: i._("L\u01b0\u1ee3t xem \u1ea3nh"),
					video_play: i._("Nh\u1ea5p \u0111\u1ec3 Ph\u00e1t"),
					link: i._("S\u1ed1 l\u01b0\u1ee3t click v\u00e0o li\u00ean k\u1ebft"),
					other: i._("L\u1ea7n nh\u1ea5p kh\u00e1c")
				});
				return y
			}, h.hasValidReactionsData = function() {
				var a = h.props.metrics,
					c = a.reactionsOnPost,
					d = a.reactionsTotal;
				return !c || !d ? !1 : Object.keys(d).some(function(a) {
					return a != b("UFIReactionTypes").LIKE && (d[a] || c[a])
				})
			}, g) || babelHelpers.assertThisInitialized(h)
		}
		var d = c.prototype;
		d.UNSAFE_componentWillMount = function() {
			new(b("PageInsightsMonitoringTypedLogger"))().setEvent("visit_post_details_drill_down_panel").setPostID(this.props.postID.split("_")[1]).setPageID(b("HubbleUtils").getPageID(this.props.postID)).log(), b("HubbleLogger").logAction("show_post_drilldown")
		};
		d.UNSAFE_componentWillReceiveProps = function(a) {
			var c;
			(a == null ? void 0 : (c = a.metrics) == null ? void 0 : c.livingRoom) != null && (a == null ? void 0 : (c = a.metrics) == null ? void 0 : c.livingRoom) !== ((c = this.props.metrics) == null ? void 0 : c.livingRoom) && this.$1(b("LivingRoomInsightsEvent").OPEN_LIVING_ROOM_POST_DETAILS, a.metrics.livingRoom);
			this.$2(a) && this.$3()
		};
		d.$1 = function(a, c) {
			if (c == null) return;
			var d = new(b("LivingRoomInsightsTypedLogger"))().setEvent(a);
			Object.keys(c).forEach(function(a) {
				return d.addToExtraData(a, String(c[a]))
			});
			this.props.postID != null && d.setPostID(this.props.postID.split("_")[1]).setPageID(b("HubbleUtils").getPageID(this.props.postID));
			d.log()
		};
		d.isShare = function() {
			return this.props.postType === "sharedVideo"
		};
		d.getReactionsLabel = function() {
			return this.isShare() ? i._("C\u1ea3m x\u00fac v\u00e0 b\u00ecnh lu\u1eadn") : i._("C\u1ea3m x\u00fac, B\u00ecnh lu\u1eadn & L\u01b0\u1ee3t chia s\u1ebb")
		};
		d.getLikesLabel = function() {
			return this.isShare() ? i._("L\u01b0\u1ee3t th\u00edch v\u00e0 b\u00ecnh lu\u1eadn") : i._("L\u01b0\u1ee3t th\u00edch, B\u00ecnh lu\u1eadn & Chia s\u1ebb")
		};
		d.getTimeDisclaimer = function() {
			var a = this.props.hasPaidDistribution ? p.jsx(b("HubbleTimeZoneDisclaimer.react"), {
				className: "_50f8",
				size: "small"
			}) : p.jsx(b("XUIGrayText.react"), {
				size: "meta1",
				children: i._("S\u1ed1 li\u1ec7u th\u1ed1ng k\u00ea \u0111\u01b0\u1ee3c b\u00e1o c\u00e1o c\u00f3 th\u1ec3 b\u1ecb tr\u1ec5 so v\u1edbi s\u1ed1 li\u1ec7u xu\u1ea5t hi\u1ec7n tr\u00ean c\u00e1c b\u00e0i vi\u1ebft")
			});
			return p.jsx("div", {
				className: "_610a",
				children: a
			}, "timeDisclaimerPanel")
		};
		d.renderRightCard = function(a, b, c, d, e) {
			return p.jsxs("div", {
				children: [a, this.state.expandPostPerformanceSection && b, this.state.expandPostPerformanceSection && c, d, e]
			})
		};
		d.render = function() {
			var a = this,
				c = null,
				d = null,
				e = null;
			if (this.$2(this.props)) {
				var f = this.props.metrics.lcsTotal,
					g = this.props.metrics.lcsFromPage,
					h = this.props.metrics.lcsFromPage,
					j = {
						like: f.like - g.like,
						comment: f.comment - g.comment,
						share: f.share - g.share
					};
				g = null;
				var k = this.props.postVideoViews ? this.props.postVideoViews.value : this.props.metrics.videoViews;
				this.props.showVideoViews && (g = p.jsx("div", {
					className: "_55k0",
					children: p.jsx(b("HubblePrimaryMetric.react"), {
						label: A,
						number: k
					})
				}, "panel2"));
				k = function(a) {
					var b = {};
					b.total = f[a];
					b.onPost = h[a];
					b.onShares = j[a];
					return b
				};
				var l = this.hasValidReactionsData(),
					m = l ? p.jsx(b("InsightsInfoTip.react"), {
						tip: z.reactions,
						children: this.getReactionsLabel()
					}) : p.jsx(b("InsightsInfoTip.react"), {
						tip: z.reactions,
						children: this.getLikesLabel()
					});
				if (this.props.metrics.audioListenCount != null) {
					var n = i._("S\u1ed1 l\u1ea7n nghe"),
						o = i._("S\u1ed1 ph\u00fat nghe"),
						q = i._("\u00c2M THANH TR\u1ef0C TI\u1ebeP"),
						w = i._("B\u00c0I VI\u1ebeT");
					d = p.jsxs("div", {
						children: [p.jsx("div", {
							className: "_55k1 _3htf",
							children: q
						}), p.jsx("div", {
							className: "_55k0",
							children: p.jsx(b("HubblePrimaryMetric.react"), {
								label: n,
								number: this.props.metrics.audioListenCount
							})
						}, "panelA"), p.jsx("div", {
							className: "_55k0",
							children: p.jsx(b("HubblePrimaryMetric.react"), {
								label: o,
								number: this.props.metrics.audioListenTime
							})
						}, "panelB"), p.jsx("div", {
							className: "_55k1 _3htf",
							children: w
						})]
					})
				}
				q = function(a, c, d) {
					return this.isShare() ? p.jsx("div", {
						className: "_55k0",
						children: p.jsx(b("HubblePrimaryMetric.react"), {
							label: c.total,
							number: a.total
						})
					}) : C(a, c, d)
				}.bind(this);
				c = [p.jsx("div", {
					className: "_55k0",
					children: p.jsx(b("HubblePrimaryMetricWithValidation"), {
						label: i._("Ng\u01b0\u1eddi \u0111\u01b0\u1ee3c ti\u1ebfp c\u1eadn"),
						number: this.props.metrics.reach,
						validationProps: this.$4({
							metric: "post_impressions_unique"
						})
					})
				}, "panel1"), g, p.jsx("div", {
					className: "_55k0",
					children: p.jsx(b("HubblePrimaryMetricWithValidation"), {
						label: m,
						number: b("sumOfArray")(b("getOwnObjectValues")(f)),
						validationProps: this.$4({
							metric: "post_reaction_comment_share_sum"
						})
					})
				}, "panel3")];
				if (!this.isShare()) c.push(p.jsxs("div", {
					className: "_3uh-",
					children: [l ? E(this.props.metrics.reactionsTotal, this.props.metrics.reactionsOnPost, this.props.reactionsTooltips, !1) : q(k("like"), r), q(k("comment"), s), q(k("share"), t)]
				}, "panel4"));
				else {
					n = [];
					if (l) {
						o = E(this.props.metrics.reactionsTotal, this.props.metrics.reactionsOnPost, this.props.reactionsTooltips, !0);
						n = (w = n).concat.apply(w, o)
					} else n.push(q(k("like"), r));
					n.push(q(k("comment"), s));
					c = (g = c).concat.apply(g, n)
				}
				this.props.metrics.clicks && c.push(p.jsxs("div", {
					className: "_55k0",
					children: [p.jsx(b("HubblePrimaryMetricWithValidation"), {
						className: "mbm",
						label: i._("S\u1ed1 l\u1ea7n nh\u1ea5p v\u00e0o b\u00e0i vi\u1ebft"),
						number: b("sumOfArray")(b("getOwnObjectValues")(this.props.metrics.clicks)),
						validationProps: this.$4({
							metric: "post_click_total"
						})
					}), C(this.props.metrics.clicks, this.getClickLabels())]
				}, "panel5"));
				m = this.getLivingRoomMetricSection();
				m != null && c.push(m);
				this.props.metrics.negative && c.push(p.jsxs("div", {
					className: "_55k0",
					children: [p.jsx("div", {
						className: "_55k1",
						children: i._("Nh\u1eadn x\u00e9t ti\u00eau c\u1ef1c")
					}), D(this.props.metrics.negative, u), D(this.props.metrics.negative, v)]
				}, "panel7"));
				l = this.getBrandedContentMetricSection();
				l != null && c.push(l);
				e = this.getTaggedProductMetricSection()
			}
			var x = this.state.expandPostPerformanceSection;
			w = this.state.postIsProductTagged && b("ConnectedCommerceProductTaggingInsightsGK").can_see_pt_metrics ? this.getToggleIcon(i._("Toggle post performance insights section"), function() {
				a.setState({
					expandPostPerformanceSection: !x
				})
			}, x) : null;
			o = d || c ? p.jsx("div", {
				className: "_4u2l",
				children: p.jsxs(b("FlexLayout.react"), {
					align: "center",
					justify: "all",
					children: [i._("Hi\u1ec7u qu\u1ea3 c\u1ee7a b\u00e0i vi\u1ebft"), w]
				})
			}) : null;
			q = d || c || e ? this.getTimeDisclaimer() : null;
			k = b("HubbleUtils").getPageID(this.props.postID);
			return p.jsx("div", {
				className: "_55ii",
				children: p.jsxs(b("LeftRight.react"), {
					children: [p.jsx("div", {
						className: "_55ij",
						children: p.jsx(b("HubblePostView.react"), {
							feedLocation: this.props.feedLocation,
							identifier: this.props.identifier,
							pageID: k,
							useNewVideoMetrics: this.props.useNewVideoMetrics,
							isBrandedContent: this.props.isBrandedContent
						})
					}), p.jsx("div", {
						className: (this.props.className, "HubblePostDrillDown/rightCard"),
						children: this.renderRightCard(o, d, c, e, q)
					})]
				})
			})
		};
		d.getBrandedContentMetricSection = function() {
			var a = this;
			if (this.props.metrics.brandedContent == null) return null;
			var c = b("HubbleUtils").getPageID(this.props.postID),
				d = b("HubbleUtils").getPostID(this.props.postID),
				e = this.props.feedLocation === 169,
				f = function() {
					var e;
					new(b("BrandedContentMatchingToolCreatorTypedLogger"))().setPageID(c).setEvent("ui_action_hubble_flyout_breakdown_click").setExtraFieldsMap({
						post_id: d,
						location: (e = a.props.brandedContentLocation) != null ? e : "",
						story_identifier: a.props.postID,
						metrics: JSON.stringify(a.props.metrics.brandedContent)
					}).log();
					(j || (j = b("URI"))).goURIOnWindow(b("XBCMPRootController").getURIBuilder().setFBID("page_id", c).setFBIDVector("bc_auto_shown_tagged_post_id", [d]).setEnum("entry_source", "hubble_post_flyout").setString("child_path", "insights").getURI())
				};
			return p.jsxs(p.Fragment, {
				children: [p.jsxs(b("FlexLayout.react"), {
					className: b("joinClasses")("_55k0"),
					direction: e ? "vertical" : "horizontal",
					justify: e ? void 0 : "all",
					align: e ? void 0 : "center",
					children: [p.jsx("span", {
						className: "_55k1",
						children: i._("Ph\u00e2n ph\u1ed1i n\u1ed9i dung c\u00f3 th\u01b0\u01a1ng hi\u1ec7u")
					}), e ? p.jsx(b("FDSLink.react"), {
						onClick: f,
						children: i._("Xem s\u1ed1 li\u1ec7u chia nh\u1ecf chi ti\u1ebft v\u1ec1 \u0111\u1ed1i t\u01b0\u1ee3ng")
					}) : p.jsx(b("FDSButton.react"), {
						label: i._("Xem s\u1ed1 li\u1ec7u chia nh\u1ecf"),
						onClick: f
					})]
				}, "branded_content_panel"), p.jsxs("div", {
					className: "_3uh-",
					children: [C(this.props.metrics.brandedContent.reach, w), C(this.props.metrics.brandedContent.impressions, x)]
				})]
			})
		};
		d.getLivingRoomMetricSection = function() {
			if (this.props.metrics.livingRoom == null) return null;
			var a = [];
			this.props.metrics.livingRoom.viewerCount60s != null && a.push(p.jsx(b("HubbleSecondaryMetric.react"), {
				decoration: b("HubbleSecondaryMetric.react").DECORATION.ruled,
				label: p.jsx(b("InsightsInfoTip.react"), {
					onMouseOver: this.logHoverLivingRoom60sViewerMetric,
					tip: i._("S\u1ed1 ng\u01b0\u1eddi xem \u00edt nh\u1ea5t 60 gi\u00e2y c\u1ee7a bu\u1ed5i xem chung n\u00e0y, bao g\u1ed3m c\u1ea3 l\u01b0\u1ee3t xem li\u00ean t\u1ee5c v\u00e0 ng\u1eaft qu\u00e3ng."),
					children: i._("Ng\u01b0\u1eddi xem t\u1ed1i thi\u1ec3u 60 gi\u00e2y")
				}),
				number: this.props.metrics.livingRoom.viewerCount60s
			}, "livingRoom.viewerCount60s"));
			this.props.metrics.livingRoom.minutesViewed != null && a.push(p.jsx(b("HubbleSecondaryMetric.react"), {
				decoration: b("HubbleSecondaryMetric.react").DECORATION.ruled,
				label: p.jsx(b("InsightsInfoTip.react"), {
					onMouseOver: this.logHoverLivingRoomViewTimeMetric,
					tip: i._("T\u1ed5ng s\u1ed1 ph\u00fat m\u00e0 ng\u01b0\u1eddi xem d\u00e0nh cho bu\u1ed5i xem chung n\u00e0y."),
					children: i._("S\u1ed1 ph\u00fat xem")
				}),
				number: this.props.metrics.livingRoom.minutesViewed
			}, "livingRoom.minutesViewed"));
			return a.length > 0 ? p.jsxs("div", {
				className: "_55k0",
				children: [p.jsx("div", {
					className: "_55k1",
					children: i._("Bu\u1ed5i xem chung")
				}), p.jsx(b("HubbleSecondaryMetricGroup.react"), {
					className: "_3uhz",
					children: a
				})]
			}, "panel-livingRoom") : null
		};
		d.getTaggedProductMetricSection = function() {
			var a = this;
			if (!b("ConnectedCommerceProductTaggingInsightsGK").can_see_pt_metrics || this.props.metrics.productClicks == null || this.props.metrics.productClicks.length === 0) return null;
			this.state.postIsProductTagged || this.setState({
				postIsProductTagged: !0
			});
			var c = this.props.metrics.productClicks,
				d = this.state.expandTaggedProductSection,
				e = i._("B\u1eadt\/t\u1eaft ph\u1ea7n th\u00f4ng tin chi ti\u1ebft v\u1ec1 s\u1ea3n ph\u1ea9m \u0111\u01b0\u1ee3c g\u1eafn th\u1ebb"),
				f = function() {
					return a.setState({
						expandTaggedProductSection: !d
					})
				};
			e = this.getToggleIcon(e, f, d);
			f = p.jsx("div", {
				className: "_4u2l",
				children: p.jsxs(b("FlexLayout.react"), {
					align: "center",
					justify: "all",
					children: [i._({
						"*": "Tagged Products",
						"_1": "Tagged Product"
					}, [i._plural(c.length)]), e]
				})
			});
			e = c.filter(function(a) {
				return (a == null ? void 0 : a.reviewStatus) === "approved"
			});
			var g = e.reduce(function(a, b) {
				return a + b.clickCount
			}, 0);
			e = e.length === 0 ? q : g;
			g = p.jsxs("div", {
				className: "s1m0hq7j sl27f92c alzwoclg",
				children: [p.jsx(o, {}), p.jsx("div", {
					className: "i85zmo3j jcxyg2ei alzwoclg",
					children: p.jsx(b("TetraText.react"), {
						color: "primary",
						type: "bodyLink3",
						style: !0,
						children: e
					})
				})]
			});
			e = c.map(function(a, b) {
				return p.jsx(n, {
					imageUri: a.imageUri,
					metricValue: a.clickCount,
					name: a.name,
					reviewStatus: a.reviewStatus
				}, b)
			});
			return p.jsxs("div", {
				className: "sulahjvc",
				children: [f, this.state.expandTaggedProductSection && p.jsxs("div", {
					className: "sulahjvc srn514ro e4ay1f3w rj2hsocd aesu6q9g",
					children: [g, e]
				})]
			}, "panel-taggedProducts")
		};
		d.getToggleIcon = function(a, c, d) {
			return p.jsx("div", {
				className: "jxbw8zu1",
				children: p.jsx(b("CometPressable.react"), {
					"aria-label": a,
					onPress: c,
					overlayDisabled: !0,
					children: d ? p.jsx(b("Image.react"), {
						src: g("843705")
					}) : p.jsx(b("Image.react"), {
						src: g("527642")
					})
				})
			})
		};
		d.$2 = function(a) {
			return !!(a.metrics.lcsFromPage && a.metrics.lcsTotal)
		};
		d.$4 = function(a) {
			var c = "HubblePostDetailsDrillDown";
			try {
				a = a.metric;
				return {
					productGroup: "POST_INSIGHTS",
					surface: "PAGE_INSIGHTS_WEB",
					rootObjectID: b("HubbleUtils").getPageID(this.props.postID),
					objectID: this.props.postID,
					metrics: b("immutable").List([a]),
					objectIDType: "POST_ID",
					preset: "LIFETIME",
					component: c
				}
			} catch (a) {
				b("FBLogger")("metric-ui-validation").catching(a).warn("Error constructing validation params for %s", c)
			}
		};
		d.$3 = function() {
			if (!b("Random").coinflip(B)) return;
			try {
				var a, c = this.$4({
						metric: "post_activity_by_action_type"
					}),
					d = m(babelHelpers["extends"]({}, c, {
						product_group: c.productGroup,
						object_id_type: c.objectIDType,
						object_ids: b("immutable").List([c.objectID]),
						root_object_id: c.rootObjectID,
						breakdown: "like"
					}));
				c = this.props.metrics.reactionsTotal;
				var e = (a = {}, a[this.props.postID] = {
					post_activity_by_action_type: babelHelpers["extends"]({
						summary: this.props.metrics.lcsTotal.like
					}, c, {
						count: Object.keys(c).length + 1
					})
				}, a);
				b("ExternalMetricConsumptionValidationEventFalcoEvent").log(function() {
					return l(d, e)
				})
			} catch (a) {
				b("FBLogger")("metric-ui-validation").catching(a).warn("Error constructing validation params in metric UI validation")
			}
		};
		return c
	}(p.Component);
	a.defaultProps = {
		showVideoViews: !1
	};
	(k || (k = b("stylex"))).inject(".alzwoclg{display:flex}", 1);
	k.inject(".sl27f92c{justify-content:space-between}", 1);
	k.inject(".s1m0hq7j{padding-top:12px}", 1);
	k.inject(".alzwoclg{display:flex}", 1);
	k.inject(".jcxyg2ei{justify-content:center}", 1);
	k.inject(".i85zmo3j{align-items:center}", 1);
	k.inject(".sulahjvc{border-top:1px solid #DADDE1}", .3);
	k.inject(".aesu6q9g{padding-right:12px}", 1, ".aesu6q9g{padding-left:12px}");
	k.inject(".rj2hsocd{padding-bottom:12px}", 1);
	k.inject(".e4ay1f3w{padding-left:12px}", 1, ".e4ay1f3w{padding-right:12px}");
	k.inject(".srn514ro{padding-top:0}", 1);
	k.inject(".sulahjvc{border-top:1px solid #DADDE1}", .3);
	k.inject(".jxbw8zu1{padding-right:4px}", 1);
	e.exports = a
}), null);
__d("XBrandedContentHubbleFlyoutInsightsAsyncController", ["XController"], (function(a, b, c, d, e, f) {
	e.exports = b("XController").create("/branded_content/hubble/breakdown/async/", {
		page_post_id: {
			type: "String"
		},
		location: {
			type: "Enum",
			enumType: 0
		}
	})
}), null);
__d("XPageInsightsProductTaggingMetricsController", ["XController"], (function(a, b, c, d, e, f) {
	e.exports = b("XController").create("/page/insights/product_tagging/metrics/", {
		page_post_id: {
			type: "String",
			required: !0
		}
	})
}), null);
__d("XPageInsightsReactionsMetricsController", ["XController"], (function(a, b, c, d, e, f) {
	e.exports = b("XController").create("/page/insights/reactions/metrics/", {
		end_time: {
			type: "Int"
		},
		page_id: {
			type: "Int"
		},
		post_id: {
			type: "String"
		},
		start_time: {
			type: "Int"
		}
	})
}), null);
__d("XVideoAssetInsightsDataController", ["XController"], (function(a, b, c, d, e, f) {
	e.exports = b("XController").create("/video/video_asset/insights/data/", {
		page_id: {
			type: "FBID",
			required: !0
		},
		video_asset_id: {
			type: "Int",
			required: !0
		},
		source: {
			type: "Enum",
			defaultValue: "unknown",
			enumType: 1
		},
		context: {
			type: "Enum",
			defaultValue: "video_post",
			enumType: 1
		}
	})
}), null);
__d("HubblePostDrillDownDataLayerMixin", ["Arbiter", "AsyncRequest", "ConnectedCommerceProductTaggingInsightsGK", "HubbleLogger", "HubblePostsDataLayer", "HubbleSanityChecks", "HubbleUtils", "LiveAudioInsightsConfig", "XBrandedContentHubbleFlyoutInsightsAsyncController", "XPageInsightsProductTaggingMetricsController", "XPageInsightsReactionsMetricsController", "XVideoAssetInsightsDataController"], (function(a, b, c, d, e, f) {
	var g = 3e3;
	a = {
		_subscription: null,
		_bcSubscription: null,
		_pollTimeout: null,
		_request: null,
		__initialPostDetailsState: {
			clicks: null,
			impressionByType: null,
			lcsFromPage: null,
			lcsTotal: null,
			negative: null,
			reach: null,
			reactionsOnPost: null,
			reactionsTotal: null,
			productClicks: null,
			brandedContent: null
		},
		UNSAFE_componentWillMount: function() {
			this._subscription = b("Arbiter").subscribe("hubble/lcsFromServer", this.handleNewFeedbackFromServer);
			this._bcSubscription = b("Arbiter").subscribe("hubble/bcFromServer", this.handleBrandedContentInsights);
			var a = b("XPageInsightsReactionsMetricsController").getURIBuilder().setString("post_id", this.props.postID).getURI();
			new(b("AsyncRequest"))().setURI(a).setHandler(this.handleReactionsMetrics).send();
			b("ConnectedCommerceProductTaggingInsightsGK").can_see_pt_metrics && this.fetchInsightsDataForTaggedProducts();
			this.props.useNewVideoMetrics && this.fetchInsightsDataForStreamingVideo();
			this.props.isBrandedContent && this.fetchInsightsDataForBrandedContent();
			b("HubblePostsDataLayer").getPostMetricsByID(this.props.postID, this.props.postType, this.handleNewInsights, this.handleNewInsights);
			a = b("LiveAudioInsightsConfig").facecast_audio_show_v1_metrics;
			var c = b("LiveAudioInsightsConfig").config.post_audio_listen_count.start_date;
			c = new Date(c).getTime() / 1e3;
			a && c <= this.props.postCreatedTime && this.props.postType === "audio" && b("HubblePostsDataLayer").getLiveAudioMetrics(this.props.postType, this.props.postID, this.handleLiveAudioInsights)
		},
		componentWillUnmount: function() {
			this._unsubscribe(), this._unsubscribeBC(), clearTimeout(this._pollTimeout), this._request && this._request.abort(), this._bcRequest && this._bcRequest.abort(), window.clearTimeout(this._bcTimeout)
		},
		fetchInsightsDataForStreamingVideo: function() {
			var a = b("HubbleUtils").getVideoID(this.props.postID);
			a = b("XVideoAssetInsightsDataController").getURIBuilder().setFBID("page_id", this.props.videoPostInsightsLoggerData.pageID).setInt("video_asset_id", a).setEnum("source", this.props.videoPostInsightsLoggerData.source).setEnum("context", "video_post").getURI();
			this._request = new(b("AsyncRequest"))().setURI(a).setHandler(this.handleInsightsOfVideoInPost);
			this._request.send()
		},
		fetchInsightsDataForBrandedContent: function() {
			new(b("AsyncRequest"))().setURI(b("XBrandedContentHubbleFlyoutInsightsAsyncController").getURIBuilder().setString("page_post_id", this.props.postID).setEnum("location", this.props.feedLocation).getURI()).send()
		},
		fetchInsightsDataForTaggedProducts: function() {
			new(b("AsyncRequest"))().setURI(b("XPageInsightsProductTaggingMetricsController").getURIBuilder().setString("page_post_id", this.props.postID).getURI()).setHandler(this.handleProductClickMetrics).send()
		},
		handleBrandedContentInsights: function(a, b) {
			a = b == null ? void 0 : (a = b.payload) == null ? void 0 : a.insights;
			if (a == null || (b == null ? void 0 : b.error)) return;
			this.setState({
				brandedContent: {
					reach: {
						total: a.reach.total,
						organic: a.reach.organic,
						paid: a.reach.paid
					},
					impressions: {
						total: a.impressions.total,
						organic: a.impressions.organic,
						paid: a.impressions.paid
					}
				}
			})
		},
		handleNewFeedbackFromServer: function(a, b) {
			if (b.identifier !== this.props.postIdentifier) return;
			this._unsubscribe();
			a = {
				comment: b.commentCount,
				like: b.likeCount,
				share: b.shareCount
			};
			b = {
				lcsFromPage: a,
				reactionsOnPost: b.reactionsCountMap
			};
			this.state.lcsTotal && (b.lcsTotal = this.correctLcsTotal(this.state.lcsTotal, a));
			this.setState(b)
		},
		handleNewInsights: function(a) {
			if (!a.insights) return;
			var c = a.insights.lcsByType;
			this.state.lcsFromPage && (c = this.correctLcsTotal(c, this.state.lcsFromPage));
			this.setState({
				clicks: a.insights.clicksByType,
				impressionByType: a.insights.impressionByType,
				lcsTotal: c,
				livingRoom: a.insights.livingRoom,
				negative: a.insights.negativeFeedbackByType,
				reach: a.insights.reach,
				videoViews: a.insights.videoViews
			});
			b("HubbleSanityChecks").checkReachGtEngmt(Object.assign({
				created_time: this.props.postCreatedTime,
				id: this.props.postID,
				type: this.props.postType
			}, a));
			b("HubblePostsDataLayer").validatePostInsightsMetric(a.insights, this.props.postID, this.props.postType, this.props.postCreatedTime)
		},
		handleLiveAudioInsights: function(a) {
			if (!a.liveAudioInsights) return;
			var b = a.liveAudioInsights.post_audio_listen_time / 6e4;
			this.setState({
				audioListenCount: a.liveAudioInsights.post_audio_listen_count,
				audioListenTime: b
			})
		},
		handleReactionsMetrics: function(a) {
			if (a.error || !a.payload) return;
			this.setState({
				reactionsTotal: a.payload
			})
		},
		handleProductClickMetrics: function(a) {
			if (a.error || !a.payload) return;
			this.setState({
				productClicks: a.payload
			})
		},
		handleInsightsOfVideoInPost: function(a) {
			if (a.error || !a.payload || !a.payload.videoPostInsights || !a.payload.videoProfileData) return;
			var b = a.payload.videoProfileData;
			b.isLiveStreaming && this.props.shown && (this._pollTimeout = setTimeout(this.fetchInsightsDataForStreamingVideo, g));
			this.setState({
				insightsOfVideoInPost: a.payload.videoPostInsights,
				showTopShares: a.payload.showTopShares,
				topSharesList: a.payload.topSharesList,
				showTopSharesNUX: a.payload.showTopSharesNUX,
				videoProfileData: b
			})
		},
		correctLcsTotal: function(a, c) {
			var d = {};
			for (var e in c) a[e] < c[e] ? (d[e] = c[e], b("HubbleLogger").logWithData({
				metric_value: c[e] - a[e],
				action: "lcs_total_less_than_lcs_from_page"
			})) : d[e] = a[e];
			return d
		},
		getDetailsMetrics: function() {
			return this.props.brandedContentPostInsights ? {
				clicks: this.props.brandedContentPostInsights.clicksByType,
				lcsFromPage: this.state.lcsFromPage,
				lcsTotal: this.state.lcsTotal,
				livingRoom: this.state.livingRoom,
				negative: this.props.brandedContentPostInsights.negativeFeedbackByType,
				reach: this.props.brandedContentPostInsights.reach,
				reactionsOnPost: this.state.reactionsOnPost,
				reactionsTotal: this.state.reactionsTotal,
				videoViews: this.state.videoViews,
				audioListenTime: this.state.audioListenTime,
				audioListenCount: this.state.audioListenCount,
				productClicks: this.state.productClicks,
				brandedContent: this.state.brandedContent
			} : {
				clicks: this.state.clicks,
				impressionByType: this.state.impressionByType,
				lcsFromPage: this.state.lcsFromPage,
				lcsTotal: this.state.lcsTotal,
				livingRoom: this.state.livingRoom,
				negative: this.state.negative,
				reach: this.state.reach,
				reactionsOnPost: this.state.reactionsOnPost,
				reactionsTotal: this.state.reactionsTotal,
				videoViews: this.state.videoViews,
				audioListenTime: this.state.audioListenTime,
				audioListenCount: this.state.audioListenCount,
				productClicks: this.state.productClicks,
				brandedContent: this.state.brandedContent
			}
		},
		_unsubscribe: function() {
			this._subscription && this._subscription.unsubscribe()
		},
		_unsubscribeBC: function() {
			this._bcSubscription && this._bcSubscription.unsubscribe()
		}
	};
	e.exports = a
}), null);
__d("HubblePostHintsConstants", [], (function(a, b, c, d, e, f) {
	a = Object.freeze({
		IMP: "imp",
		LIKE: "like",
		SHARE: "share",
		CLK: "clk"
	});
	e.exports = a
}), null);
__d("HubblePostHintsEmptyDrillDown.react", ["cx", "fbt", "ix", "HubblePostHintsConstants", "Image.react", "React", "prop-types"], (function(a, b, c, d, e, f, g, h, i) {
	var j = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.getSubtext = function() {
				switch (d.props.type) {
					case b("HubblePostHintsConstants").CLK:
						return h._("Check back again when this post has more clicks.");
					case b("HubblePostHintsConstants").LIKE:
						return h._("Check back again when this post has more likes.");
					case b("HubblePostHintsConstants").SHARE:
						return h._("Check back again when this post has more shares.");
					default:
						return h._("Check back again when this post has more views.")
				}
			}, d.getText = function() {
				switch (d.props.type) {
					case b("HubblePostHintsConstants").CLK:
						return d.getClickText();
					case b("HubblePostHintsConstants").LIKE:
						return h._("Sorry, data is not displayed until at least 100 people have liked the post");
					case b("HubblePostHintsConstants").SHARE:
						return h._("Sorry, data is not displayed until at least 100 people have shared the post");
					default:
						return h._("Sorry, data is not displayed until at least 100 people have viewed the post")
				}
			}, d.getClickText = function() {
				switch (d.props.clkType) {
					case "video":
					case "premiumVideo":
						return h._("Sorry, data is not displayed until at least 100 people have played the video on the post");
					case "photo":
						return h._("Sorry, data is not displayed until at least 100 people have clicked the photo on the post");
					default:
						return h._("Sorry, data is not displayed until at least 100 people have clicked the link on the post")
				}
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.getSubtext(),
				c = this.getText();
			return j.jsxs("div", {
				className: "_4y9",
				children: [j.jsx(b("Image.react"), {
					className: "_4ya",
					src: i("82502")
				}), j.jsx("div", {
					className: "_4yf",
					children: c
				}), j.jsx("div", {
					className: "_4yi",
					children: a
				})]
			})
		};
		return c
	}(j.Component);
	e.exports = a;
	a.propTypes = {
		type: b("prop-types").string,
		clkType: b("prop-types").string
	}
}), null);
__d("HubblePostHintsImpsDrillDown", ["cx", "fbt", "HubbleHintsMetrics.react", "HubblePostUtils", "React", "prop-types"], (function(a, b, c, d, e, f, g, h) {
	var i = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = b("HubblePostUtils").formatPostHintsImpRatioMetrics(this.props.impHintMetrics, this.props.impAllMetrics);
			a = b("HubblePostUtils").formatPostHintsInsights(a, this.props.showRawMetrics);
			var c = null;
			if (this.props.showRawMetrics) {
				var d = b("HubblePostUtils").formatPostHintsInsights(this.props.impHintMetrics, this.props.showRawMetrics);
				c = i.jsx(b("HubbleHintsMetrics.react"), {
					header: h._("Total Hint Reach"),
					metrics: d,
					metricsType: "count"
				})
			}
			return i.jsxs("div", {
				className: "_vki",
				children: [i.jsx(b("HubbleHintsMetrics.react"), {
					header: h._("Percentage of Total Reach"),
					metrics: a,
					metricsType: "rate"
				}), c]
			})
		};
		return c
	}(i.Component);
	e.exports = a;
	a.propTypes = {
		impHintMetrics: b("prop-types").object.isRequired,
		impAllMetrics: b("prop-types").number.isRequired,
		showRawMetrics: b("prop-types").bool
	}
}), null);
__d("HubblePostHintsLCSDrillDown.react", ["cx", "fbt", "HubbleHintsMetrics.react", "HubblePostHintsEmptyDrillDown.react", "HubblePostUtils", "React", "XUINotice.react", "prop-types"], (function(a, b, c, d, e, f, g, h) {
	var i = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			if (this.props.countAllMetrics === 0) return i.jsx(b("HubblePostHintsEmptyDrillDown.react"), {
				postID: this.props.postID,
				type: this.props.type,
				clkType: this.props.clkType
			}, "PostHintsDrillDownViews");
			var a = b("HubblePostUtils").formatPostHintsRateMetrics(this.props.countMetrics, this.props.impMetrics),
				c = b("HubblePostUtils").sortPostHintsMetrics(a);
			a = b("HubblePostUtils").formatPostHintsInsights(a, this.props.showRawMetrics, c);
			var d = null;
			if (this.props.showRawMetrics) {
				var e = b("HubblePostUtils").formatPostHintsInsights(this.props.countMetrics, this.props.showRawMetrics);
				d = i.jsx(b("HubbleHintsMetrics.react"), {
					header: h._("Total Numbers"),
					metrics: e,
					metricsType: "count"
				})
			} else {
				e = b("HubblePostUtils").formatPostHintsImpRatioMetrics(this.props.countMetrics, this.props.countAllMetrics);
				e = b("HubblePostUtils").formatPostHintsInsights(e, this.props.showRawMetrics, c);
				d = i.jsx(b("HubbleHintsMetrics.react"), {
					header: this.props.countHeader,
					metrics: e,
					metricsType: "rate"
				})
			}
			c = null;
			this.props.noticeInfo && (c = i.jsx("div", {
				className: "_44sh",
				children: i.jsx(b("XUINotice.react"), {
					children: this.props.noticeInfo
				})
			}));
			return i.jsxs("div", {
				className: "_vki",
				children: [c, i.jsx(b("HubbleHintsMetrics.react"), {
					header: this.props.rateHeader,
					subtitle: this.props.rateSubtitle,
					metrics: a,
					metricsType: "rate"
				}), d]
			})
		};
		return c
	}(i.Component);
	e.exports = a;
	a.propTypes = {
		countMetrics: (c = b("prop-types")).object.isRequired,
		countAllMetrics: c.number.isRequired,
		impMetrics: c.object.isRequired,
		noticeInfo: c.node,
		rateHeader: c.node.isRequired,
		rateSubtitle: c.node,
		countHeader: c.node.isRequired,
		showRawMetrics: c.bool,
		type: c.string,
		clkType: c.string
	}
}), null);
__d("HubblePostHintsTabbedSection.react", ["React", "prop-types"], (function(a, b, c, d, e, f) {
	var g = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		b.getTabHref = function(a) {
			return a.tabHref
		};
		b.getKey = function(a) {
			return a.sectionKey
		};
		b.getTitle = function(a) {
			return a.title
		};
		b.getSubtitle = function(a) {
			return a.subtitle
		};
		b.getComplexTitle = function(a) {
			return a.complexTitle
		};
		var c = b.prototype;
		c.render = function() {
			return g.jsx("div", {
				className: this.props.className,
				children: this.props.children
			})
		};
		return b
	}(g.Component);
	e.exports = a;
	a.propTypes = {
		className: (c = b("prop-types")).string,
		tabHref: c.string,
		sectionKey: c.string.isRequired,
		title: c.string,
		subtitle: c.string,
		complexTitle: c.object.isRequired
	}
}), null);
__d("HubblePostHintsTabbedSections.react", ["cx", "InsightsTabbedSectionsMixin", "React", "createReactClass_DEPRECATED"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	b("InsightsTabbedSectionsMixin").getTabContent;
	a = babelHelpers.objectWithoutPropertiesLoose(b("InsightsTabbedSectionsMixin"), ["getTabContent"]);
	c = b("createReactClass_DEPRECATED")({
		displayName: "HubblePostHintsTabbedSections",
		mixins: [a],
		theme: {
			activeNavLinkClass: "_2w8o",
			activeSelector: "_3f_d",
			navClass: "_2w8p",
			longNavClass: "_3bxh",
			navLinkClass: "_2w8q",
			smallNavLinkClass: "_4d7-",
			subtitledBlockClass: "_1fkz",
			subtitleClass: "_1fk-"
		},
		getTabContent: function(a) {
			a = a.props.complexTitle;
			a = h.jsxs("div", {
				className: "_5u73",
				children: [h.jsxs("div", {
					className: "_5u74",
					children: [a.title, a.tooltip]
				}), h.jsx("div", {
					className: "_5u75",
					children: a.number
				})]
			});
			return a
		}
	});
	d = c;
	e.exports = d
}), null);
__d("HubblePostHintsTabbedDrillDown", ["HubblePostHintsTabbedSection.react", "HubblePostHintsTabbedSections.react", "InsightsDateRange.react", "React", "prop-types"], (function(a, b, c, d, e, f) {
	var g = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				activeKey: null
			}, c.showSection = function(a) {
				c.setState({
					activeKey: a.type.getKey(a.props)
				})
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		c.getHeaderText = function(a) {
			return g.jsx(b("InsightsDateRange.react"), {
				from: a.selection[0],
				to: a.selection[1],
				utc: !0
			})
		};
		var d = c.prototype;
		d.render = function() {
			var a = this,
				c = this.props.hintsdrilldowns.map(function(c, d) {
					c = g.cloneElement(c, a.props);
					d = Array.isArray(a.props.nubSources) ? a.props.nubSources[d] : a.props.nubSources;
					return g.jsx(b("HubblePostHintsTabbedSection.react"), {
						complexTitle: c.props.complexTitle,
						sectionKey: c.key,
						title: c.props.title,
						nubSource: d,
						children: c
					}, c.key)
				}, this);
			return g.jsx(b("HubblePostHintsTabbedSections.react"), {
				activeKey: this.state.activeKey,
				children: c,
				onTabClick: this.showSection
			})
		};
		return c
	}(g.Component);
	e.exports = a;
	a.propTypes = {
		postID: b("prop-types").string,
		hintsdrilldowns: b("prop-types").array.isRequired
	}
}), null);
__d("HubblePostHintsViewsDrillDown", ["fbt", "HubblePostDrillDownDataLayerMixin", "HubblePostHintsConstants", "HubblePostHintsEmptyDrillDown.react", "HubblePostHintsImpsDrillDown", "HubblePostHintsLCSDrillDown.react", "HubblePostHintsTabbedDrillDown", "HubblePostsDataLayer", "InsightsLoadingIndicator.react", "React", "SUIBusinessTheme", "SUISimplePopover.react", "createReactClass_DEPRECATED"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = b("createReactClass_DEPRECATED")({
		displayName: "HubblePostHintsViewsDrillDown",
		mixins: [b("HubblePostDrillDownDataLayerMixin")],
		UNSAFE_componentWillMount: function() {
			var a = b("HubblePostsDataLayer").getPostHintsMetrics;
			a(this.props.postType, this.props.postID, this._handlePostHintsInsights)
		},
		getInitialState: function() {
			return this.__initialPostDetailsState
		},
		getClickHintsMetrics: function(a) {
			if (this.props.postType === "video" || this.props.postType === "premiumVideo") return a.video_play || {};
			else if (this.props.postType === "photo") return a.photo_view || {};
			return a.link || {}
		},
		getClickMetrics: function(a) {
			if (this.props.postType === "video" || this.props.postType === "premiumVideo") return a.video_play || 0;
			else if (this.props.postType === "photo") return a.photo_view || 0;
			return a.link || 0
		},
		getClickTitle: function() {
			switch (this.props.postType) {
				case "video":
				case "premiumVideo":
					return g._("Video Play Rate");
				case "photo":
					return g._("Photo View Rate");
				default:
					return g._("Link Click Rate")
			}
		},
		getClickType: function() {
			switch (this.props.postType) {
				case "video":
				case "premiumVideo":
					return g._("S\u1ed1 l\u01b0\u1ee3t ph\u00e1t video");
				case "photo":
					return g._("L\u01b0\u1ee3t xem \u1ea3nh");
				default:
					return g._("Link Clicks")
			}
		},
		getClickRateTitle: function() {
			switch (this.props.postType) {
				case "video":
				case "premiumVideo":
					return g._("Video Play-Through Rate");
				case "photo":
					return g._("Photo View Rate");
				default:
					return g._("Link Click Rate")
			}
		},
		getClickNoticeInfo: function() {
			switch (this.props.postType) {
				case "video":
				case "premiumVideo":
					return g._("These charts show the video play rate for each tag you added and the percentage of total user-initiated video plays for each tag.");
				case "photo":
					return g._("These charts show the rate of photo views for each tag you added and the percentage of total photo views for each tag.");
				default:
					return g._("These charts show the click rate for each tag you added and the percentage of total clicks for each tag.")
			}
		},
		getClickToolTip: function() {
			switch (this.props.postType) {
				case "video":
				case "premiumVideo":
					return g._("Video click-to-play rate for people who matched at least one of your tags.");
				case "photo":
					return g._("Rate of photo views for people who matched at least one of your tags.");
				default:
					return g._("Click rate for people who matched at least one of your tags.")
			}
		},
		getNumberFormat: function(a) {
			if (a === void 0 || a === null) return "\u2014%";
			a = (100 * a).toFixed(1) + "%";
			return a
		},
		getTitleForType: function(a) {
			switch (a) {
				case b("HubblePostHintsConstants").IMP:
					return g._("Truy c\u1eadp");
				case b("HubblePostHintsConstants").CLK:
					return this.getClickTitle();
				case b("HubblePostHintsConstants").LIKE:
					return g._("Like Rate");
				case b("HubblePostHintsConstants").SHARE:
					return g._("Share Rate");
				default:
					return null
			}
		},
		getTooltipContent: function(a, c) {
			switch (a) {
				case b("HubblePostHintsConstants").IMP:
					return g._("Of all the people who saw this post on News Feed, {percentage of tag matched reach} matched at least one of your tags.", [g._param("percentage of tag matched reach", c)]);
				case b("HubblePostHintsConstants").CLK:
					return this.getClickToolTip();
				case b("HubblePostHintsConstants").LIKE:
					return g._("Like rate for people who matched at least one of your tags");
				case b("HubblePostHintsConstants").SHARE:
					return g._("Share rate for people who matched at least one of your tags");
				default:
					return null
			}
		},
		getTooltip: function(a, c) {
			a = this.getTooltipContent(a, c);
			return a ? h.jsx(b("SUISimplePopover.react"), {
				content: a,
				contentWidthUseSparingly: 268,
				position: "above",
				theme: b("SUIBusinessTheme")
			}) : null
		},
		getComplexTitleForLCS: function(a, b, c) {
			a = a["Some Hints Matched"];
			b = b["Some Hints Matched"];
			var d = null;
			a !== void 0 && b !== void 0 && b > 0 && (d = a / b);
			a = {};
			a.number = this.getNumberFormat(d);
			a.title = this.getTitleForType(c);
			a.tooltip = this.getTooltip(c, a.number);
			return a
		},
		getComplexTitleForReach: function(a) {
			var c = this.getTotalHintsMetrics(a);
			a = a["Some Hints Matched"];
			var d = 0;
			a !== void 0 && (d = a / c);
			a = {};
			a.number = this.getNumberFormat(d);
			a.title = this.getTitleForType(b("HubblePostHintsConstants").IMP);
			a.tooltip = this.getTooltip(b("HubblePostHintsConstants").IMP, a.number);
			return a
		},
		getTotalHintsMetrics: function(a) {
			return 0
		},
		render: function() {
			if (!this.state.isLoaded) return h.jsx(b("InsightsLoadingIndicator.react"), {});
			var a = this.props.hintsConfig,
				c = this.getTotalHintsMetrics(this.state.hintReachMetrics),
				d = this.getTotalHintsMetrics(this.state.likeMetrics),
				e = this.getTotalHintsMetrics(this.state.shareMetrics),
				f = this.getClickHintsMetrics(this.state.clkMetrics),
				i = this.getTotalHintsMetrics(f),
				j = a.insights_threshold;
			j = j !== void 0 ? j.min_show_time : 300;
			var k = Math.floor(Date.now() / 1e3);
			if (k - this.props.postCreatedTime < j || c === 0) return h.jsx(b("HubblePostHintsEmptyDrillDown.react"), {
				postID: this.props.postID
			}, "PostHintsDrillDownViews");
			k = a.show_raw_hints_insights;
			j = [h.jsx(b("HubblePostHintsImpsDrillDown"), {
				complexTitle: this.getComplexTitleForReach(this.state.hintReachMetrics),
				identifier: this.props.postIdentifier,
				impHintMetrics: this.state.hintReachMetrics,
				impAllMetrics: c,
				showRawMetrics: k
			}, "PostHintsImpsDrillDown"), h.jsx(b("HubblePostHintsLCSDrillDown.react"), {
				countMetrics: f,
				countAllMetrics: i,
				countHeader: g._("Percentage of Total {click title}", [g._param("click title", this.getClickType())]),
				complexTitle: this.getComplexTitleForLCS(f, this.state.hintReachMetrics, b("HubblePostHintsConstants").CLK),
				clkMetrics: f,
				identifier: this.props.postIdentifier,
				impMetrics: this.state.hintReachMetrics,
				noticeInfo: this.getClickNoticeInfo(),
				rateHeader: this.getClickRateTitle(),
				rateSubtitle: g._("({click type} per view)", [g._param("click type", this.getClickType())]),
				showRawMetrics: k,
				type: b("HubblePostHintsConstants").CLK,
				clkType: this.props.postType
			}, "PostHintsClkDrillDown"), h.jsx(b("HubblePostHintsLCSDrillDown.react"), {
				countMetrics: this.state.shareMetrics,
				countAllMetrics: e,
				countHeader: g._("Percentage of Total Shares"),
				complexTitle: this.getComplexTitleForLCS(this.state.shareMetrics, this.state.hintReachMetrics, b("HubblePostHintsConstants").SHARE),
				identifier: this.props.postIdentifier,
				impMetrics: this.state.hintReachMetrics,
				noticeInfo: g._("These charts show the share rate for each tag you added and the percentage of total shares for each tag"),
				rateHeader: g._("Share-Through Rate"),
				rateSubtitle: g._("(shares per view)"),
				showRawMetrics: k,
				type: b("HubblePostHintsConstants").SHARE
			}, "PostHintsShareDrillDown"), h.jsx(b("HubblePostHintsLCSDrillDown.react"), {
				countMetrics: this.state.likeMetrics,
				countAllMetrics: d,
				countHeader: g._("Percentage of Total Likes"),
				complexTitle: this.getComplexTitleForLCS(this.state.likeMetrics, this.state.hintReachMetrics, b("HubblePostHintsConstants").LIKE),
				identifier: this.props.postIdentifier,
				impMetrics: this.state.hintReachMetrics,
				noticeInfo: g._("These charts show the rate at which each tag received likes and the percentage of total likes for each tag."),
				rateHeader: g._("X\u1ebfp h\u1ea1ng th\u00edch"),
				rateSubtitle: g._("(likes per view)"),
				showRawMetrics: k,
				type: b("HubblePostHintsConstants").LIKE
			}, "PostHintsLikeDrillDown")];
			return h.jsx(b("HubblePostHintsTabbedDrillDown"), {
				hintsdrilldowns: j,
				postID: this.props.postID
			})
		},
		_handlePostHintsInsights: function(a) {
			this.setState({
				isLoaded: !0,
				hintReachMetrics: a.hintsInsights.hintReach,
				clkMetrics: a.hintsInsights.clicksByType,
				likeMetrics: a.hintsInsights.lcsByType.like,
				shareMetrics: a.hintsInsights.lcsByType.share
			})
		}
	});
	c = a;
	e.exports = c
}), null);
__d("HubbleTabbedDrillDown", ["cx", "InsightsDateRange.react", "InsightsTabbedSection.react", "InsightsTabbedSections.react", "PagesEventObserver", "React"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.state = {
				activeKey: d.props.initialTab != null ? d.props.initialTab : null
			}, d.showSection = function(a) {
				d.setState({
					activeKey: a.type.getKey(a.props)
				});
				if (a.key === "PostHintsDrillDownViews") {
					var c = d.props.postID.split("_");
					c = c[0];
					b("PagesEventObserver").notify("view_audience_targeting_insights", c, {
						post_id: d.props.postID,
						post_type: d.props.postType,
						post_status_type: d.props.postStatusType,
						is_admin: !0,
						ref: d.props.ref
					})
				}
				d.props.onDrillDownClick && d.props.onDrillDownClick(a.props.sectionKey)
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		c.getHeaderText = function(a) {
			return h.jsx(b("InsightsDateRange.react"), {
				from: a.selection[0],
				to: a.selection[1],
				utc: !0
			})
		};
		var d = c.prototype;
		d.render = function() {
			var a = this.props.drilldowns.map(function(a, c) {
				a = h.cloneElement(a, this.props);
				var d = this.props.flush ? "_42s2" : null;
				c = Array.isArray(this.props.nubSources) ? this.props.nubSources[c] : this.props.nubSources;
				return h.jsx(b("InsightsTabbedSection.react"), {
					className: d,
					sectionKey: a.key,
					title: a.props.title,
					nubSource: c,
					showBetaLogo: a.props.showBetaLogo,
					children: a
				}, a.key)
			}, this);
			return h.jsx(b("InsightsTabbedSections.react"), {
				activeKey: this.state.activeKey,
				redirectURI: this.props.redirectURI,
				redirectText: this.props.redirectText,
				children: a,
				onTabClick: this.showSection,
				useCenteredTabsStyle: this.props.useCenteredTabsStyle,
				showTopSharesNUX: this.props.showTopSharesNUX
			})
		};
		return c
	}(h.Component);
	e.exports = a
}), null);
__d("HubbleDefaultPostDrillDown", ["fbt", "ix", "FBFeedLocations", "HubblePostDetailsDrillDown", "HubblePostDrillDownDataLayerMixin", "HubblePostHintsViewsDrillDown", "HubbleTabbedDrillDown", "React", "createReactClass_DEPRECATED", "getOwnObjectValues", "prop-types"], (function(a, b, c, d, e, f, g, h) {
	var i = b("React");
	a = b("createReactClass_DEPRECATED")({
		displayName: "HubbleDefaultPostDrillDown",
		mixins: [b("HubblePostDrillDownDataLayerMixin")],
		propTypes: {
			feedLocation: b("prop-types").oneOf(b("getOwnObjectValues")(b("FBFeedLocations")))
		},
		getInitialState: function() {
			return this.__initialPostDetailsState
		},
		render: function() {
			[h("28640"), h("28639")];
			var a = this.getDetailsMetrics(),
				c = !!(a.impressionByType && a.impressionByType.paid);
			c = i.jsx(b("HubblePostDetailsDrillDown"), {
				actionContext: this.props.actionContext,
				defaultExpandStatus: this.props.defaultExpandStatus,
				eventID: this.props.eventID,
				feedLocation: this.props.feedLocation,
				hasPaidDistribution: c,
				identifier: this.props.postIdentifier,
				metrics: a,
				postID: this.props.postID,
				title: g._("B\u00e0i vi\u1ebft")
			}, "PostDrillDownOverview");
			return c
		}
	});
	e.exports = a
}), null);
__d("VideoCopyrightAssignMatchRuleProcessingTimeWarning.react", ["ix", "cx", "fbt", "Image.react", "ImageBlock.react", "React", "fbglyph"], (function(a, b, c, d, e, f, g, h, i) {
	"use strict";
	var j = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			return !this.props.isShown ? null : j.jsxs(b("ImageBlock.react"), {
				className: this.props.className,
				children: [j.jsx(b("Image.react"), {
					src: g("124740")
				}), j.jsx("div", {
					className: "_60dj",
					children: i._("Ch\u1ec9 \u0111\u1ecbnh nhi\u1ec1u file tham chi\u1ebfu cho quy t\u1eafc so kh\u1edbp m\u1ed9t l\u00fac c\u00f3 th\u1ec3 m\u1ea5t v\u00e0i ph\u00fat m\u1edbi xong.")
				})]
			})
		};
		return c
	}(j.Component);
	e.exports = a
}), null);
__d("VideoCopyrightReferenceFileRowDialogView.react", ["ix", "cx", "FBOverlayBase.react", "FBOverlayContainer.react", "Image.react", "ImageBlock.react", "PageContentTabVideoCopyrightThumbnail.react", "React", "XUIGrayText.react", "XUIText.react", "cxMargin", "fbglyph"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React");

	function a(a) {
		return i.jsxs(b("ImageBlock.react"), {
			className: "_4njp",
			children: [i.jsx(b("FBOverlayContainer.react"), {
				children: i.jsx(b("FBOverlayBase.react"), {
					children: i.jsx("div", {
						className: "_18wn",
						children: i.jsx(b("PageContentTabVideoCopyrightThumbnail.react"), {
							thumbnailSrc: a.thumbnailUrl
						})
					})
				})
			}), i.jsxs("div", {
				children: [i.jsx(b("XUIText.react"), {
					size: "meta1",
					display: "block",
					children: a.title
				}), i.jsx(b("XUIGrayText.react"), {
					size: "meta1",
					display: "block",
					shade: "light",
					className: "_3-8w",
					children: a.description
				})]
			}), i.jsx(b("Image.react"), {
				className: "_23x0",
				onClick: a.onDelete,
				src: g("125921")
			})]
		})
	}
}), null);
__d("VideoCopyrightReferenceFilesDialogView.react", ["cx", "fbt", "React", "VideoCopyrightReferenceFileRowDialogView.react", "XUICard.react", "XUIText.react"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this;
			return !this.props.isShown ? null : i.jsx("div", {
				className: "_1cwa",
				children: i.jsxs(b("XUICard.react"), {
					className: "_2pi9",
					children: [this.props.referenceFiles.map(function(c) {
						return i.jsx(b("VideoCopyrightReferenceFileRowDialogView.react"), {
							onDelete: a.props.onRowDelete.bind(a, c),
							description: a.props.getDescription(c) || "",
							thumbnailUrl: a.props.isMMRM ? c.thumbnailSrc : c.reference_file.thumbnail_url,
							title: a.props.isMMRM ? c.title : c.reference_file.title
						}, c.id)
					}), this.props.disableShowMore ? null : i.jsx(b("XUIText.react"), {
						className: "_4njp _6140",
						display: "block",
						onClick: this.props.onShowMoreClicked,
						children: i.jsx("span", {
							className: "_6141",
							children: h._("Kh\u00e1c")
						})
					})]
				})
			})
		};
		return c
	}(i.Component);
	e.exports = a
}), null);
__d("VideoCopyrightRuleActionItemConfig", ["ix", "cx", "fbt", "React", "SUIBusinessTheme", "SUITooltip.react", "VideoCopyrightClaimAdEarningsText", "VideoCopyrightRuleActionType", "asset", "fbglyph"], (function(a, b, c, d, e, f, g, h, i) {
	"use strict";
	var j = b("React");
	c = [{
		key: (a = b("VideoCopyrightRuleActionType")).MONETIZE,
		title: i._("Nh\u1eadn thu nh\u1eadp t\u1eeb qu\u1ea3ng c\u00e1o (ch\u1ec9 tr\u00ean Facebook)"),
		className: "_4bd5",
		titleOnDisable: j.jsx(b("SUITooltip.react"), {
			theme: b("SUIBusinessTheme"),
			position: "right",
			tooltip: i._("\u0110\u1ec3 nh\u1eadn thu nh\u1eadp t\u1eeb qu\u1ea3ng c\u00e1o, tr\u01b0\u1edbc ti\u00ean b\u1ea1n c\u1ea7n ch\u1ec9 \u0111\u1ecbnh c\u00e1ch b\u1ea1n ho\u1eb7c t\u1ed5 ch\u1ee9c c\u1ee7a b\u1ea1n mu\u1ed1n nh\u1eadn kho\u1ea3n thanh to\u00e1n b\u1eb1ng c\u00e1ch \u0111i \u0111\u1ebfn C\u00e0i \u0111\u1eb7t > C\u00f4ng c\u1ee5 b\u1ea3o v\u1ec7 b\u1ea3n quy\u1ec1n."),
			children: i._("Nh\u1eadn thu nh\u1eadp t\u1eeb qu\u1ea3ng c\u00e1o (ch\u1ec9 tr\u00ean Facebook)")
		}),
		description: i._("Nh\u1eadn m\u1ed9t ph\u1ea7n thu nh\u1eadp ki\u1ebfm \u0111\u01b0\u1ee3c t\u1eeb qu\u1ea3ng c\u00e1o trong lu\u1ed3ng c\u1ee7a video kh\u1edbp tr\u00ean Facebook"),
		descriptionForManualClaim: i._("Nh\u1eadn m\u1ed9t ph\u1ea7n thu nh\u1eadp ki\u1ebfm \u0111\u01b0\u1ee3c t\u1eeb qu\u1ea3ng c\u00e1o trong lu\u1ed3ng c\u1ee7a video n\u00e0y"),
		filterDescription: i._("Thi\u1ebft l\u1eadp b\u1ed9 l\u1ecdc m\u00f4 t\u1ea3 lo\u1ea1i video kh\u1edbp m\u00e0 b\u1ea1n mu\u1ed1n nh\u1eadn thu nh\u1eadp t\u1eeb qu\u1ea3ng c\u00e1o."),
		descriptionOnDisable: function(a) {
			return i._("Nh\u1eadn m\u1ed9t ph\u1ea7n ti\u1ec1n ki\u1ebfm \u0111\u01b0\u1ee3c t\u1eeb qu\u1ea3ng c\u00e1o trong lu\u1ed3ng c\u1ee7a video kh\u1edbp tr\u00ean Facebook {=Set up Claiming}", [i._param("=Set up Claiming", j.jsx("a", {
				href: b("VideoCopyrightClaimAdEarningsText").getRightsManagerSettingsURI(a),
				target: "_blank",
				children: i._("Thi\u1ebf l\u1eadp x\u00e1c nh\u1eadn")
			}))])
		},
		glyphClassName: "_4utm",
		glyph: g("134490"),
		disabledGlyph: g("124878"),
		summaryGlyph: g("124876"),
		warning: i._("N\u1ebfu kh\u00f4ng c\u00f3 qu\u1ea3ng c\u00e1o trong lu\u1ed3ng \u1edf video kh\u1edbp, h\u1ec7 th\u1ed1ng s\u1ebd ki\u1ec3m tra h\u00e0nh \u0111\u1ed9ng ti\u1ebfp theo trong quy t\u1eafc so kh\u1edbp n\u00e0y.")
	}, {
		key: a.BLOCK,
		title: i._("Ch\u1eb7n"),
		className: "_4bd6",
		description: i._("Ng\u0103n ch\u1eb7n vi\u1ec7c kh\u00e1m ph\u00e1 ho\u1eb7c xem video tr\u00f9ng kh\u1edbp tr\u00ean Facebook"),
		descriptionForManualClaim: i._("Ng\u0103n ch\u1eb7n vi\u1ec7c kh\u00e1m ph\u00e1 ho\u1eb7c xem video n\u00e0y tr\u00ean Facebook"),
		filterDescription: i._("Thi\u1ebft l\u1eadp b\u1ed9 l\u1ecdc m\u00f4 t\u1ea3 lo\u1ea1i video tr\u00f9ng kh\u1edbp m\u00e0 b\u1ea1n mu\u1ed1n ch\u1eb7n."),
		glyphClassName: "_4uto",
		glyph: g("134473"),
		disabledGlyph: g("124861"),
		summaryGlyph: g("124859"),
		warning: i._("Video b\u1ecb ch\u1eb7n s\u1ebd kh\u00f4ng t\u1ea1o ra Th\u00f4ng tin chi ti\u1ebft file tham chi\u1ebfu.")
	}, {
		key: a.TRACK,
		title: i._("Gi\u00e1m s\u00e1t"),
		className: "_4bd7",
		description: i._("Chuy\u1ec3n video tr\u00f9ng kh\u1edbp v\u00e0o tab Theo d\u00f5i \u0111\u1ec3 theo d\u00f5i hi\u1ec7u qu\u1ea3 ho\u1ea1t \u0111\u1ed9ng c\u1ee7a video trong th\u1eddi gian d\u00e0i"),
		descriptionForManualClaim: i._("Theo d\u00f5i hi\u1ec7u qu\u1ea3 c\u1ee7a video n\u00e0y trong m\u1ed9t kho\u1ea3ng th\u1eddi gian d\u00e0i"),
		filterDescription: i._("Thi\u1ebft l\u1eadp b\u1ed9 l\u1ecdc m\u00f4 t\u1ea3 lo\u1ea1i video tr\u00f9ng kh\u1edbp m\u00e0 b\u1ea1n mu\u1ed1n theo d\u00f5i."),
		glyphClassName: "_4utp",
		glyph: g("134084"),
		disabledGlyph: g("124472"),
		summaryGlyph: g("124470")
	}, {
		key: a.MANUAL_REVIEW,
		title: i._("X\u00e9t duy\u1ec7t th\u1ee7 c\u00f4ng"),
		className: "_4bd8",
		description: i._("B\u1ea1n s\u1ebd c\u00f3 30 ng\u00e0y \u0111\u1ec3 quy\u1ebft \u0111\u1ecbnh h\u00e0nh \u0111\u1ed9ng c\u1ea7n th\u1ef1c hi\u1ec7n t\u1eeb C\u00f4ng c\u1ee5 b\u1ea3o v\u1ec7 b\u1ea3n quy\u1ec1n tr\u01b0\u1edbc khi video tr\u00f9ng kh\u1edbp h\u1ebft h\u1ea1n"),
		descriptionForManualClaim: i._("L\u01b0u video n\u00e0y \u0111\u1ec3 th\u1ef1c hi\u1ec7n h\u00e0nh \u0111\u1ed9ng sau trong C\u00f4ng c\u1ee5 b\u1ea3o v\u1ec7 b\u1ea3n quy\u1ec1n"),
		filterDescription: i._("Thi\u1ebft l\u1eadp b\u1ed9 l\u1ecdc m\u00f4 t\u1ea3 lo\u1ea1i video tr\u00f9ng kh\u1edbp m\u00e0 b\u1ea1n mu\u1ed1n xem x\u00e9t th\u1ee7 c\u00f4ng."),
		glyphClassName: "_4utq",
		glyph: g("1133120"),
		disabledGlyph: g("1133123"),
		summaryGlyph: g("1133113")
	}];
	d = c;
	e.exports = d
}), null);
__d("AudioReferenceFileEditRuleSummary.react", ["cx", "Image.react", "React", "VideoCopyrightRuleActionItemConfig", "VideoCopyrightRuleConditionOption", "VideoCopyrightRuleConditionRowConfig", "VideoCopyrightRuleConditionType", "nullthrows"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = function(a) {
		var c = b("VideoCopyrightRuleActionItemConfig").find(function(b) {
			return b.key === a.action.getActionType()
		});
		return !a.action.getIsValid() ? h.jsx("span", {}) : h.jsxs("div", {
			className: "_6a_h",
			children: [h.jsx(b("Image.react"), {
				src: b("nullthrows")(c).summaryGlyph
			}), h.jsx("div", {
				className: "_6a_i",
				children: (c = c) != null ? c.title : c
			}), h.jsx("ul", {
				children: a.action.getConditions().filter(function(a) {
					return Object.prototype.hasOwnProperty.call(b("VideoCopyrightRuleConditionRowConfig")[a.getConditionType()], "getSummary")
				}).filter(function(c) {
					return c.getOption() === b("VideoCopyrightRuleConditionOption").WORLDWIDE.key || c.getValue() !== null && c.getValue().length > 0 || c.getConditionType() === b("VideoCopyrightRuleConditionType").VALIDITY_PERIOD && a.action.getIsValid()
				}).map(function(a, c) {
					return h.jsx("li", {
						className: "_6a_j",
						children: b("VideoCopyrightRuleConditionRowConfig")[a.getConditionType()].getSummary(a.getOption(), a.getValue())
					}, c)
				})
			})]
		})
	};
	e.exports = a
}), null);
__d("MMRMBulkAssignDialogCard.react", ["fbt", "GeoButton.react", "GeoCard.react", "GeoCardFooter.react", "GeoCardHeader.react", "GeoSection.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = {
			content: {
				width: "k022doh6"
			},
			card: {
				maxHeight: "dh4xytbq"
			}
		};

	function a(a) {
		var c = a.children,
			d = a.confirmButtonLabel,
			e = a.footerStartContent,
			f = a.heading,
			k = a.isConfirmDisabled,
			l = a.onConfirm,
			m = a.onHide;
		return i.jsx(b("GeoCard.react"), {
			footer: i.jsx(b("GeoCardFooter.react"), {
				primaryButton: i.jsx(b("GeoButton.react"), {
					isDisabled: k,
					label: d,
					variant: "primary",
					onClick: function() {
						m(), l()
					}
				}),
				secondaryButton: i.jsx(b("GeoButton.react"), {
					label: g._("H\u1ee7y"),
					onClick: m
				}),
				startContent: e
			}),
			header: i.jsx(b("GeoCardHeader.react"), {
				heading: f
			}),
			xstyle: j.card,
			children: i.jsx("div", {
				className: (h || (h = b("stylex")))(j.content),
				children: i.jsx(b("GeoSection.react"), {
					children: c
				})
			})
		})
	}
}), null);
__d("MMRMBulkAssignMatchRuleDialog.react", ["cx", "fbt", "AudioReferenceFileEditRuleSummary.react", "FlexLayout.react", "GeoBaseText.react", "GeoButton.react", "GeoText.react", "MMRMBulkActionEmptyState.react", "MMRMBulkAssignDialogCard.react", "React", "VideoCopyrightMatchRuleSelector.react", "cxMargin", "isStringNullOrEmpty", "stylex"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React");

	function a(a) {
		var c = a.accessToken,
			d = a.onConfirm,
			e = a.onChange,
			f = a.onHide,
			g = a.onCreateNewMatchRuleClick,
			j = a.files,
			k = a.isSelectAllEnabled,
			l = a.pageID,
			m = a.selectedRuleID;
		a = a.selectedRule;
		return l == null ? null : i.jsxs(b("MMRMBulkAssignDialogCard.react"), {
			confirmButtonLabel: h._("\u00c1p d\u1ee5ng"),
			heading: h._("\u00c1p d\u1ee5ng quy t\u1eafc so kh\u1edbp"),
			isConfirmDisabled: b("isStringNullOrEmpty")(m),
			onConfirm: d,
			onHide: f,
			children: [i.jsx(b("GeoText.react"), {
				children: k !== !0 ? h._({
					"*": "H\u00e3y ch\u1ecdn quy t\u1eafc so kh\u1edbp \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh cho {number} file tham chi\u1ebfu \u0111\u00e3 ch\u1ecdn. B\u1ea1n c\u00f3 th\u1ec3 c\u1eadp nh\u1eadt b\u1ea5t c\u1ee9 l\u00fac n\u00e0o.",
					"_1": "H\u00e3y ch\u1ecdn quy t\u1eafc so kh\u1edbp \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh cho 1 file tham chi\u1ebfu \u0111\u00e3 ch\u1ecdn. B\u1ea1n c\u00f3 th\u1ec3 c\u1eadp nh\u1eadt b\u1ea5t c\u1ee9 l\u00fac n\u00e0o."
				}, [h._plural(j.length, "number")]) : h._({
					"*": "H\u00e3y ch\u1ecdn quy t\u1eafc so kh\u1edbp \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh cho file tham chi\u1ebfu \u0111\u00e3 ch\u1ecdn. B\u1ea1n c\u00f3 th\u1ec3 c\u1eadp nh\u1eadt b\u1ea5t c\u1ee9 l\u00fac n\u00e0o."
				}, [h._plural(j.length)])
			}), i.jsxs("div", {
				className: "_3-8p",
				children: [!b("isStringNullOrEmpty")(c) && i.jsxs(b("FlexLayout.react"), {
					children: [i.jsx(b("VideoCopyrightMatchRuleSelector.react"), {
						accessToken: c,
						className: "_21op",
						isGeo: !0,
						pageID: l,
						permitNullState: !0,
						selectedRule: m,
						onChange: e
					}), i.jsx("div", {
						className: "_3-9a",
						children: i.jsx(b("GeoButton.react"), {
							label: h._("T\u1ea1o m\u1edbi"),
							onClick: g
						})
					})]
				}), i.jsx("div", {
					className: "_3-8p",
					children: m == null ? i.jsx(b("MMRMBulkActionEmptyState.react"), {}) : i.jsx(b("FlexLayout.react"), {
						className: "bfjsadw7 sefae2a6 de7klecu ptjpnxan joztoxpn d2glxreu lvdkn0eg hv2611q5",
						children: i.jsx(b("GeoBaseText.react"), {
							color: "value",
							size: "valueDescription",
							children: a == null ? void 0 : a.getActions().map(function(a, c) {
								return i.jsx(b("AudioReferenceFileEditRuleSummary.react"), {
									action: a
								}, c)
							})
						})
					})
				})]
			})]
		})
	}
}), null);
__d("VideoCopyrightBulkAssignMatchRuleDialog.react", ["cx", "fbt", "LayerFadeOnHide", "LayerFadeOnShow", "Link.react", "LoadingIndicator.react", "MediaManagerPageAccessTokenStore", "MMRMBulkAssignMatchRuleDialog.react", "PageContentTabAccessToken", "React", "VideoCopyrightAssignMatchRuleProcessingTimeWarning.react", "VideoCopyrightMatchRuleSelector.react", "VideoCopyrightReferenceFilesDialogView.react", "VideoCopyrightRuleTemplateBlankSelectDialog", "XUIDialog.react", "XUIDialogBody.react", "XUIDialogButton.react", "XUIDialogCancelButton.react", "XUIDialogFooter.react", "XUIDialogTitle.react", "XUIText.react", "cxMargin", "promiseDone"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c) {
			var d;
			d = a.call(this, c) || this;
			d.$1 = function() {
				b("VideoCopyrightRuleTemplateBlankSelectDialog").show(d.props.pageID, d.state.accessToken, d.props.isMonetizationOnBoard, function() {}, d.props.isMMRM)
			};
			d.$2 = function(a) {
				if (d.state.referenceFiles.length === 1 && a === d.state.referenceFiles[0]) return;
				var b = d.state.referenceFiles.slice();
				a = b.indexOf(a);
				b.splice(a, 1);
				d.setState({
					referenceFiles: b
				})
			};
			d.$3 = function() {
				if (!d.state.ruleID) return;
				d.props.onConfirm(d.state.ruleID, d.state.referenceFiles, d.state.selectedRule);
				d.props.onAssignNewMatchRule && d.props.onAssignNewMatchRule(d.state.ruleActionSet.size === 1 && d.state.ruleActionSet.has("BLOCK"))
			};
			d.$5 = function(a, b) {
				a !== d.state.ruleID && d.setState({
					ruleID: a,
					selectedRule: b
				})
			};
			d.state = {
				ruleID: null,
				referenceFiles: c.referenceFiles,
				ruleActionSet: new Set(),
				accessToken: c.isMMRM ? "" : b("PageContentTabAccessToken").getAccessToken(),
				selectedRule: null
			};
			return d
		}
		var d = c.prototype;
		d.componentDidMount = function() {
			this.props.isMMRM && this.getOrRefreshAccessToken()
		};
		d.componentDidUpdate = function(a) {
			a.pageID !== this.props.pageID && this.props.isMMRM && this.getOrRefreshAccessToken()
		};
		d.getOrRefreshAccessToken = function() {
			var a = this;
			b("promiseDone")(b("MediaManagerPageAccessTokenStore").getPageAccessTokenByID(this.props.pageID).then(function(b) {
				return a.setState({
					accessToken: b
				})
			}))
		};
		d.$4 = function(a) {
			return (a = a) != null ? (a = a.rule_ids) != null ? (a = a[0]) != null ? a.name : a : a : a
		};
		d.render = function() {
			var a = this;
			return this.props.isGeo ? i.jsx(b("MMRMBulkAssignMatchRuleDialog.react"), {
				accessToken: this.state.accessToken,
				files: this.props.referenceFiles,
				isSelectAllEnabled: this.props.isSelectAllEnabled,
				onChange: this.$5,
				onConfirm: this.$3,
				onCreateNewMatchRuleClick: this.$1,
				onHide: this.props.onToggle,
				pageID: this.props.pageID,
				selectedRule: this.state.selectedRule,
				selectedRuleID: this.state.ruleID
			}) : i.jsxs(b("XUIDialog.react"), {
				behaviors: {
					LayerFadeOnHide: b("LayerFadeOnHide"),
					LayerFadeOnShow: b("LayerFadeOnShow")
				},
				className: "_4cki",
				onToggle: this.props.onToggle,
				shown: !0,
				width: 500,
				children: [i.jsx(b("XUIDialogTitle.react"), {
					children: h._("\u00c1p d\u1ee5ng quy t\u1eafc so kh\u1edbp")
				}), i.jsxs(b("XUIDialogBody.react"), {
					children: [i.jsx(b("XUIText.react"), {
						display: "block",
						children: h._({
							"*": "H\u00e3y ch\u1ecdn quy t\u1eafc so kh\u1edbp \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh cho {number} file tham chi\u1ebfu \u0111\u00e3 ch\u1ecdn. B\u1ea1n c\u00f3 th\u1ec3 ch\u1ec9 \u0111\u1ecbnh l\u1ea1i file tham chi\u1ebfu cho quy t\u1eafc so kh\u1edbp m\u1edbi b\u1ea5t k\u1ef3 l\u00fac n\u00e0o.",
							"_1": "H\u00e3y ch\u1ecdn quy t\u1eafc so kh\u1edbp \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh cho 1 file tham chi\u1ebfu \u0111\u00e3 ch\u1ecdn. B\u1ea1n c\u00f3 th\u1ec3 ch\u1ec9 \u0111\u1ecbnh l\u1ea1i file tham chi\u1ebfu cho quy t\u1eafc so kh\u1edbp m\u1edbi b\u1ea5t k\u1ef3 l\u00fac n\u00e0o."
						}, [h._plural(this.state.referenceFiles.length, "number")])
					}), this.state.accessToken !== "" ? i.jsx(b("VideoCopyrightMatchRuleSelector.react"), {
						accessToken: this.state.accessToken,
						className: "_4ckj",
						disabled: !1,
						onChange: function(b) {
							b !== a.state.ruleID && a.setState({
								ruleID: b
							})
						},
						onRuleActionsChange: function(b) {
							a.setState({
								ruleActionSet: b
							})
						},
						pageID: this.props.pageID,
						selectedRule: this.state.ruleID
					}) : i.jsx(b("LoadingIndicator.react"), {
						color: "white",
						size: "small"
					}), i.jsx(b("Link.react"), {
						className: this.state.ruleID ? "" : "hidden_elem",
						onClick: this.$1,
						children: i.jsx(b("XUIText.react"), {
							size: "meta1",
							weight: "bold",
							children: h._("T\u1ea1o m\u1edbi")
						})
					}), i.jsx(b("VideoCopyrightReferenceFilesDialogView.react"), {
						disableShowMore: !0,
						getDescription: this.$4,
						isMMRM: Boolean(this.props.isMMRM),
						isShown: this.state.referenceFiles.length <= 25,
						onRowDelete: this.$2,
						referenceFiles: this.state.referenceFiles
					}), i.jsx(b("VideoCopyrightAssignMatchRuleProcessingTimeWarning.react"), {
						className: "_3-8y",
						isShown: this.state.referenceFiles.length > 25
					})]
				}), i.jsxs(b("XUIDialogFooter.react"), {
					className: "_4ckk",
					children: [i.jsx(b("XUIDialogCancelButton.react"), {}), i.jsx(b("XUIDialogButton.react"), {
						action: "cancel",
						disabled: this.state.ruleID === null,
						label: h._("Ch\u1ec9 \u0111\u1ecbnh"),
						onClick: this.$3,
						use: "confirm"
					})]
				})]
			})
		};
		return c
	}(i.Component);
	e.exports = a
}), null);
__d("VideosCopyrightRuleActions", ["GraphAPI", "MMRMInteractionLogger", "VideoCopyrightUtils"], (function(a, b, c, d, e, f) {
	f.createMatchRule = a;
	f.reassociateReferences = c;
	f.getMatchRule = d;
	f.deleteMatchRule = g;

	function a(a, c, d) {
		b("MMRMInteractionLogger").log("match_rule", "action");
		return b("GraphAPI")(b("VideoCopyrightUtils").GRAPH_API_VERSION, e.id).object("page", a).edge("video_copyright_rules").post(babelHelpers["extends"]({}, d, {
			access_token: c
		}))
	}

	function c(a, c, d, f, g) {
		return b("GraphAPI")(b("VideoCopyrightUtils").GRAPH_API_VERSION, e.id).object("video_copyright_rule", d).post({
			migration_rule_id: c,
			excluded_copyright_ids: f,
			access_token: g
		})
	}

	function d(a, c) {
		return b("GraphAPI")(b("VideoCopyrightUtils").GRAPH_API_VERSION, e.id).object("video_copyright_rules", a).get({
			fields: b("VideoCopyrightUtils").getMatchGraphFields(),
			access_token: c,
			date_format: "U"
		})
	}

	function g(a, c) {
		return b("GraphAPI")(b("VideoCopyrightUtils").GRAPH_API_VERSION, e.id).object("video_copyright_rule", a).remove({
			access_token: c
		})
	}
}), null);
__d("PageContentTabVideosCopyrightReferenceLibraryActions", ["fbt", "Promise", "DateConsts", "GraphAPI", "PageContentTabAccessToken", "PageContentTabCommonConfig", "PageContentTabConstants", "PageContentTabDispatcher", "PageContentTabLoadingDialog", "PageContentTabLogger", "VideoCopyrightAPI", "VideoCopyrightUtils", "VideosCopyrightRuleActions", "promiseDone"], (function(a, b, c, d, e, f, g) {
	var h = b("PageContentTabConstants").ACTIONS,
		i = b("PageContentTabConstants").TABS,
		j = {
			handleDelete: function(a, b, c) {
				this.showDeleteConfirmation(b.length, function() {
					return j.deleteVideos(a.toString(), b)
				}, c)
			},
			showDeleteConfirmation: function(a, c, d) {
				d === void 0 && (d = null);
				var e = g._({
					"Reference File?": "X\u00f3a file tham kh\u1ea3o?",
					"Reference Files?": "X\u00f3a t\u1ec7p tham chi\u1ebfu?"
				}, [g._enum(a === 1 ? "Reference File?" : "Reference Files?", {
					"Reference File?": "Reference File?",
					"Reference Files?": "Reference Files?"
				})]);
				a = a === 1 ? g._("File tham kh\u1ea3o n\u00e0y s\u1ebd b\u1ecb g\u1ee1 v\u0129nh vi\u1ec5n v\u00e0 m\u1ecdi video ph\u00f9 h\u1ee3p \u0111\u01b0\u1ee3c li\u00ean k\u1ebft s\u1ebd b\u1ecb g\u1ee1 kh\u1ecfi b\u1ea3ng \u0111i\u1ec1u khi\u1ec3n c\u1ee7a b\u1ea1n.") : g._("{numPosts} file tham kh\u1ea3o s\u1ebd b\u1ecb x\u00f3a v\u0129nh vi\u1ec5n v\u00e0 m\u1ecdi video ph\u00f9 h\u1ee3p \u0111\u01b0\u1ee3c li\u00ean k\u1ebft s\u1ebd b\u1ecb g\u1ee1 kh\u1ecfi b\u1ea3ng \u0111i\u1ec1u khi\u1ec3n c\u1ee7a b\u1ea1n.", [g._param("numPosts", a)]);
				b("PageContentTabCommonConfig").showConfirmationDialog(e, a, g._("X\u00f3a"), function() {
					c(), d && d()
				}, null)
			},
			deleteVideos: function(a, c) {
				var d = this;
				b("PageContentTabLoadingDialog").show();
				c = c.map(function(c) {
					return d.deleteCopyright(a, c.reference_file.id, c.id, c.reference_file.content_type !== "video", c.reference_file.content_type === "fingerprint")["catch"](function(a) {
						b("PageContentTabLogger").log("api_error", i.ALL_REFERENCE_FILES, {
							error: JSON.stringify(a),
							action: h.DELETE,
							post_id: c.id
						})
					})
				});
				b("promiseDone")(b("Promise").all(c), function() {
					b("PageContentTabLoadingDialog").hide()
				})
			},
			removeAttributions: function(a, c, d, e) {
				b("PageContentTabLoadingDialog").show();
				var f = c.map(function(c) {
					return b("VideoCopyrightAPI").updateAttribution(d, a, c.id, null, "copyrights_table")
				});
				b("promiseDone")(b("Promise").all(f), function(a) {
					if ((a = a) != null ? (a = a[0]) != null ? a.error : a : a) {
						b("PageContentTabLoadingDialog").hide();
						return
					}
					e && e(c);
					b("PageContentTabLoadingDialog").hide()
				})
			},
			addLiteAttributions: function(a, c, d, e) {
				b("PageContentTabLoadingDialog").show();
				var f = c.map(function(c) {
					return b("VideoCopyrightAPI").updateAttribution(d, a, c.id, a, "copyrights_table")
				});
				b("promiseDone")(b("Promise").all(f), function(a) {
					if ((a = a) != null ? (a = a[0]) != null ? a.error : a : a) {
						b("PageContentTabLoadingDialog").hide();
						return
					}
					e && e(c);
					b("PageContentTabLoadingDialog").hide()
				})
			},
			deleteCopyright: function(a, c, d, f, g) {
				g ? g = b("GraphAPI")(b("VideoCopyrightUtils").GRAPH_API_VERSION, e.id).object("video_fingerprint", c).remove({
					access_token: b("PageContentTabAccessToken").getAccessToken()
				}) : f ? g = b("GraphAPI")(b("VideoCopyrightUtils").GRAPH_API_VERSION, e.id).object("video", c).remove({
					access_token: b("PageContentTabAccessToken").getAccessToken()
				}) : g = b("VideoCopyrightAPI").uncopyrightVideo(b("PageContentTabAccessToken").getAccessToken(), a, c, d, {}, "reference_edit_dialog");
				return g.then(function() {
					return b("PageContentTabDispatcher").handlePostRemoved(a, d, i.ALL_REFERENCE_FILES)
				})
			},
			assignAttribution: function(a, c, d) {
				b("PageContentTabLoadingDialog").show();
				var f = d.map(function(d) {
					return b("VideoCopyrightAPI").updateAttribution(b("PageContentTabAccessToken").getAccessToken(), a, d.id, c, "copyrights_table")
				});
				b("promiseDone")(b("Promise").all(f), function(f) {
					if ((f = f) != null ? (f = f[0]) != null ? f.error : f : f) {
						b("PageContentTabLoadingDialog").hide();
						return
					}
					b("promiseDone")(b("GraphAPI")(b("VideoCopyrightUtils").GRAPH_API_VERSION, e.id).object("media_copyright_attribution", c).get({
						fields: b("VideoCopyrightUtils").getCopyrightAttributionGraphAPIFields(),
						access_token: b("PageContentTabAccessToken").getAccessToken()
					}), function(c) {
						d.map(function(a) {
							return a.attribution = {
								id: c.id,
								title: c.title
							}
						}), b("PageContentTabDispatcher").handlePostChanged(c, b("PageContentTabConstants").TABS.ATTRIBUTIONS, a), b("PageContentTabDispatcher").handlePostsChanged(d, b("PageContentTabConstants").TABS.REFERENCE_FILES, a), b("PageContentTabLoadingDialog").hideWithSuccessMessage(g._("\u0110\u00e3 ch\u1ec9 \u0111\u1ecbnh thu\u1ed9c t\u00ednh cho c\u00e1c file tham chi\u1ebfu \u0111\u01b0\u1ee3c ch\u1ecdn."), 2 * b("DateConsts").MS_PER_SEC)
					})
				})
			},
			reassignCopyrightsMatchRule: function(a, c, d) {
				b("PageContentTabLoadingDialog").show();
				var e = d.map(function(d) {
					return b("VideoCopyrightAPI").reassignVideoCopyrightMatchRule(b("PageContentTabAccessToken").getAccessToken(), a, d.id, c, "reassign_match_rule_dialog")["catch"](function(a) {
						b("PageContentTabLogger").log("api_error", i.ALL_REFERENCE_FILES, {
							error: JSON.stringify(a),
							action: "reassign_match_rule",
							post_id: d.id
						})
					})
				});
				b("promiseDone")(b("Promise").all(e), function(e) {
					if ((e = e) != null ? (e = e[0]) != null ? e.error : e : e) {
						b("PageContentTabLoadingDialog").hide();
						return
					}
					b("promiseDone")(b("VideosCopyrightRuleActions").getMatchRule(c, b("PageContentTabAccessToken").getAccessToken()), function(c) {
						var e = {
							id: c.id,
							name: c.name,
							condition_groups: c.condition_groups
						};
						d.map(function(a) {
							return a.rule_ids = [e]
						});
						b("PageContentTabDispatcher").handlePostChanged(c, b("PageContentTabConstants").TABS.MATCH_RULES, a);
						b("PageContentTabLoadingDialog").hideWithSuccessMessage(g._("\u0110\u00e3 ch\u1ec9 \u0111\u1ecbnh quy t\u1eafc so kh\u1edbp m\u1edbi cho c\u00e1c file tham chi\u1ebfu \u0111\u01b0\u1ee3c ch\u1ecdn."), 2 * b("DateConsts").MS_PER_SEC)
					})
				})
			}
		};
	e.exports = j
}), null);
__d("XMediaManagerLibertyPhaseTwoRedirectController", ["XController"], (function(a, b, c, d, e, f) {
	e.exports = b("XController").create("/media/manager/phase-two-redirect/", {})
}), null);
__d("PageContentTabCSMigrationPhaseTwoBanner.react", ["cx", "fbt", "AsyncRequest", "FDSButton.react", "FDSText.react", "MediaManagerLibertyUtils", "React", "XMediaManagerController", "XMediaManagerLibertyPhaseTwoRedirectController"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React"),
		j = function(a) {
			return b("MediaManagerLibertyUtils").mapPubToolsTabToVisitSource(a.pubToolsTab, "liberty_pub_tools_deprecated_banner")
		},
		k = function(a) {
			return b("XMediaManagerController").getURIBuilder().setFBID("selected_single_page_id", a.pageID).setEnum("reference", j(a)).setString("tab", a.isPubTools ? "content_posts" : "insights_performance").getURI()
		};
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = function() {
				var a = k(d.props);
				new(b("AsyncRequest"))().setURI(b("XMediaManagerLibertyPhaseTwoRedirectController").getURIBuilder().getURI()).setMethod("POST").send();
				b("MediaManagerLibertyUtils").openCreatorStudio(a, !1, !1, "liberty_cs_migration_banner_phase_2")
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.render = function() {
			b("MediaManagerLibertyUtils").logImpression(this.props.pageID, "liberty_cs_migration_banner_phase_2_impression");
			return i.jsxs("div", {
				className: "_8_un" + (this.props.isPubTools ? "" : " _8_wa") + (this.props.isPubTools ? " _8_um" : ""),
				children: [i.jsx("div", {
					className: "_8_uo",
					children: i.jsx(b("FDSText.react"), {
						size: "header4",
						weight: "bold",
						children: h._("Studio s\u00e1ng t\u1ea1o")
					})
				}), i.jsx("div", {
					className: "_8_up",
					children: i.jsx(b("FDSText.react"), {
						color: "secondary",
						size: "body3",
						weight: "normal",
						children: h._("B\u1ea1n \u0111ang t\u00ecm b\u00e0i vi\u1ebft, video ho\u1eb7c th\u00f4ng tin chi ti\u1ebft v\u1ec1 video \u01b0? Nh\u1eefng n\u1ed9i dung \u0111\u00f3 \u0111\u00e3 chuy\u1ec3n \u0111\u1ebfn Studio s\u00e1ng t\u1ea1o r\u1ed3i.")
					})
				}), i.jsx("div", {
					className: "_8_uq",
					children: i.jsx(b("FDSButton.react"), {
						href: "#",
						label: h._("\u0110\u01b0a t\u00f4i \u0111\u1ebfn \u0111\u00f3"),
						onClick: this.$1,
						size: "small",
						use: "primary"
					})
				})]
			})
		};
		return c
	}(i.PureComponent);
	e.exports = a
}), null);
__d("ScheduledLiveStoryVideoPreview.react", ["ix", "cx", "fbt", "BackgroundImage.react", "Image.react", "React", "ScaledImage.react", "ScheduledLiveTimeStringUtil", "XUIButton.react", "XUIText.react", "fbglyph"], (function(a, b, c, d, e, f, g, h, i) {
	"use strict";
	var j = b("React"),
		k = a.URL || a.webkitURL || {};
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = j.jsx("div", {
				className: "_ary"
			});
			return j.jsxs("div", {
				className: "_ar_",
				children: [this.$1(), a, this.$2()]
			})
		};
		d.$1 = function() {
			return this.props.backgroundImage.imageURL && this.props.backgroundImage.width && this.props.backgroundImage.height ? j.jsx(b("ScaledImage.react"), {
				width: 600,
				height: 300,
				className: "_as0",
				src: this.props.backgroundImage.imageURL,
				imageSize: {
					width: this.props.backgroundImage.width,
					height: this.props.backgroundImage.height
				}
			}) : null
		};
		d.$3 = function() {
			var a = this.props.customProfileImage,
				c = this.props.customProfileImagePosition;
			c = c ? "" + c.x * 100 + "% " + c.y * 100 + "%" : "50% 50%";
			if (a != null) return j.jsx(b("BackgroundImage.react"), {
				backgroundSize: "coverinside",
				backgroundPosition: c,
				className: "_as4",
				height: 88,
				src: k.createObjectURL(a),
				width: 88
			});
			return this.props.previousCustomImage != null ? j.jsx(b("Image.react"), {
				className: "_as4",
				src: this.props.previousCustomImage
			}) : j.jsx(b("Image.react"), {
				className: "_as4",
				src: this.props.profileImageURL
			})
		};
		d.$2 = function() {
			var a = this.$3(),
				c = !!(!this.props.plannedStartTime && this.props.isPremiere),
				d = j.jsx("div", {
					className: "_as5",
					children: j.jsx(b("XUIText.react"), {
						size: "header4",
						weight: "bold",
						children: c ? i._("V\u1eeba xong") : b("ScheduledLiveTimeStringUtil").getStr(new Date(this.props.plannedStartTime))
					})
				}),
				e = this.props.isPremiere ? i._("{broadcaster_name} l\u00ean k\u1ebf ho\u1ea1ch c\u00f4ng chi\u1ebfu video.", [i._param("broadcaster_name", this.props.profileName)]) : i._("{broadcaster_name} c\u00f3 k\u1ebf ho\u1ea1ch ph\u00e1t tr\u1ef1c ti\u1ebfp.", [i._param("broadcaster_name", this.props.profileName)]);
			e = j.jsx("div", {
				className: "_as5",
				children: j.jsx(b("XUIText.react"), {
					size: "header4",
					children: e
				})
			});
			var f = j.jsx(b("XUIButton.react"), {
				size: "medium",
				className: "_as6",
				label: i._("Nh\u1eadn l\u1eddi nh\u1eafc"),
				image: j.jsx(b("Image.react"), {
					src: g("114508")
				})
			});
			return j.jsxs("div", {
				children: [j.jsx("div", {
					children: a
				}), j.jsxs("div", {
					className: "_as7",
					children: [d, e, c ? null : f]
				})]
			})
		};
		return c
	}(j.Component);
	e.exports = c
}), null);
__d("LiveVideoAdBreakConstants", ["keyMirrorRecursive"], (function(a, b, c, d, e, f) {
	"use strict";
	a = {
		SET_AD_BREAK_STATE: "SET_AD_BREAK_STATE",
		INIT: "INIT"
	};
	f.ACTIONS = a;
	c = {
		ACTIVATED: "ACTIVATED",
		IN_BREAK: "IN_BREAK",
		DEACTIVATED: "DEACTIVATED",
		BUSY: "BUSY",
		ERROR: "ERROR",
		NOT_LIVE: "NOT_LIVE",
		TOO_EARLY: "TOO_EARLY"
	};
	f.EXTENDED_BREAK_STATES = c;
	d = {
		SET_COUNTDOWN: "SET_COUNTDOWN",
		SET_AD_BREAK_REMINDER_DATA: "SET_AD_BREAK_REMINDER_DATA",
		SHOULD_KEEP_AD_BREAK_REMINDER_ALERT_SHOWN: "SHOULD_KEEP_AD_BREAK_REMINDER_ALERT_SHOWN",
		SET_AD_BREAK_REMINDER_LAST_DISMISSAL_TIME_SECONDS: "SET_AD_BREAK_REMINDER_LAST_DISMISSAL_TIME_SECONDS",
		SET_HAS_INSIGHTS_FETCH_ERROR: "SET_HAS_INSIGHTS_FETCH_ERROR",
		SET_AD_BREAKS_BROADCASTER_CONFIG: "SET_AD_BREAKS_BROADCASTER_CONFIG",
		SET_AUTO_SQUEEZEBACK_STATUS: "SET_AUTO_SQUEEZEBACK_STATUS",
		SET_AUTO_SQUEEZEBACK_BANNER_IS_DISMISSED: "SET_AUTO_SQUEEZEBACK_BANNER_IS_DISMISSED",
		SET_ONBOARDING_BANNER_IS_DISMISSED: "SET_ONBOARDING_BANNER_IS_DISMISSED",
		STREAMER_DASHBOARD_CCM_SIDE_PANEL: "STREAMER_DASHBOARD_CCM_SIDE_PANEL",
		SET_LATEST_EXTENDED_BREAK_METADATA: "SET_LATEST_EXTENDED_BREAK_METADATA",
		SET_SHOW_ADS_STATUS: "SET_SHOW_ADS_STATUS"
	};
	f.STREAMER_DASH_ACTIONS = d;
	e = b("keyMirrorRecursive")({
		AD_BREAK_DEACTIVATED: "",
		AD_BREAK_ACTIVATED: "",
		AD_BREAK_PREPARING: "",
		AD_BREAK_PREPARING_SUCCESS: "",
		AD_BREAK_READY: "",
		AD_BREAK_STARTED: "",
		AD_BREAK_ERROR: "",
		DEMONETIZED: ""
	});
	f.STATES = e;
	a = {
		AD_BREAK_DEACTIVATED: ["AD_BREAK_DEACTIVATED", "AD_BREAK_ACTIVATED", "DEMONETIZED"],
		AD_BREAK_ACTIVATED: ["AD_BREAK_PREPARING"],
		AD_BREAK_PREPARING: ["AD_BREAK_PREPARING_SUCCESS", "AD_BREAK_ERROR", "AD_BREAK_DEACTIVATED", "DEMONETIZED"],
		AD_BREAK_PREPARING_SUCCESS: ["AD_BREAK_READY", "AD_BREAK_DEACTIVATED", "DEMONETIZED"],
		AD_BREAK_READY: ["AD_BREAK_STARTED", "AD_BREAK_DEACTIVATED", "DEMONETIZED"],
		AD_BREAK_STARTED: ["AD_BREAK_DEACTIVATED", "AD_BREAK_ERROR", "DEMONETIZED"],
		AD_BREAK_ERROR: ["AD_BREAK_DEACTIVATED", "DEMONETIZED"]
	};
	f.TRANSITIONS = a
}), null);
__d("XVideoAssetPlayerController", ["XController"], (function(a, b, c, d, e, f) {
	e.exports = b("XController").create("/x/video_assets/video_player/", {
		video_asset_id: {
			type: "Int",
			required: !0
		},
		video_container_id: {
			type: "String",
			required: !0
		},
		show_controls: {
			type: "Bool",
			defaultValue: !1
		},
		start_muted: {
			type: "Bool",
			defaultValue: !1
		},
		width: {
			type: "Int",
			required: !0
		},
		height: {
			type: "Int",
			required: !0
		}
	})
}), null);
__d("VideoAssetPlayer.react", ["ActorURI", "AdsVideoPlayer.react", "AsyncRequest", "React", "XVideoAssetPlayerController"], (function(a, b, c, d, e, f) {
	var g = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.$1 = function(a, c) {
			a = b("XVideoAssetPlayerController").getURIBuilder().setInt("video_asset_id", this.props.videoAssetID).setString("video_container_id", a).setBool("show_controls", this.props.showControls).setBool("start_muted", this.props.muted).setInt("width", this.props.playerWidth).setInt("height", this.props.playerHeight);
			a = b("ActorURI").create(a.getURI(), this.props.pageID);
			new(b("AsyncRequest"))().setMethod("POST").setRelativeTo(c).setURI(a).setReadOnly(!0).send()
		};
		d.seek = function(a) {
			this.refs.videoPlayer.seek(a)
		};
		d.closePlayer = function() {
			this.refs.videoPlayer.closePlayer()
		};
		d.playVideo = function() {
			this.refs.videoPlayer.playVideo()
		};
		d.pause = function() {
			this.refs.videoPlayer.pause()
		};
		d.mute = function() {
			this.refs.videoPlayer.mute()
		};
		d.render = function() {
			return g.jsx(b("AdsVideoPlayer.react"), {
				ref: "videoPlayer",
				className: this.props.className,
				videoID: this.props.videoAssetID,
				playerWidth: this.props.playerWidth,
				playerHeight: this.props.playerHeight,
				rotation: this.props.rotation,
				autoPlay: this.props.autoplay,
				showControls: this.props.showControls,
				hideCloseButton: this.props.hideCloseButton,
				onVideoLoaded: this.props.onVideoLoaded,
				onBeginPlayback: this.props.onBeginPlayback,
				loadVideoPlayer: this.$1.bind(this),
				muted: this.props.muted,
				loop: this.props.loop,
				children: this.props.children
			})
		};
		return c
	}(g.Component);
	e.exports = a;
	a.defaultProps = {
		showControls: !0,
		hideCloseButton: !1,
		muted: !1
	}
}), null);
__d("VideoAssetPreviewProfile.react", ["ix", "cx", "fbt", "FBClipboardLink.react", "Image.react", "ImageBlock.react", "LineClamp.react", "Link.react", "LiveVideoAdBreakConstants", "React", "VideoFormattingUtils", "XUIText.react", "asset", "fbglyph", "formatDate"], (function(a, b, c, d, e, f, g, h, i) {
	var j = b("React"),
		k = 1e3,
		l = 130;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.$1 = function() {
			var a = this.props.pageName;
			this.props.title && (a = this.props.pageName + ": " + this.props.title);
			a.length && (a = a.substr(0, l) + "...");
			return j.jsx(b("XUIText.react"), {
				display: "block",
				className: "_4g88",
				children: a
			})
		};
		d.$2 = function() {
			return b("formatDate")(new Date(this.props.uploadedTime * k), "m/d/Y")
		};
		d.$3 = function() {
			return this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_DEACTIVATED || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_ACTIVATED || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_PREPARING || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_PREPARING_SUCCESS || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_ERROR || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_READY || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_STARTED || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.DEMONETIZED
		};
		d.$4 = function() {
			return this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_PREPARING || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_PREPARING_SUCCESS || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_ERROR || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_READY
		};
		d.$5 = function() {
			if (this.$3()) return null;
			var a;
			if (this.props.contextType === "video_asset") {
				var c, d;
				this.props.isCrosspostedVideo ? c = i._("Do {owner} chia s\u1ebb", [i._param("owner", this.props.ownerName)]) : (c = i._("\u0110\u00e3 s\u1edf h\u1eefu"), this.props.reusedPostsCount === 1 ? d = i._("Xu\u1ea5t hi\u1ec7n m\u1ed9t l\u1ea7n") : d = i._("Xu\u1ea5t hi\u1ec7n trong {count} b\u00e0i vi\u1ebft", [i._param("count", this.props.reusedPostsCount)]));
				a = j.jsxs("span", {
					children: [" ", "\xa0\xb7\xa0 ", c, d ? j.jsxs("span", {
						children: [" \xa0\xb7\xa0 ", d]
					}) : null]
				})
			}
			c = i._("T\u1ea3i l\u00ean v\u00e0o {upload time}", [i._param("upload time", this.$2())]);
			if (this.props.isShare) c = i._("\u0110\u00e3 chia s\u1ebb v\u00e0o {share time}", [i._param("share time", this.$2())]);
			else if (this.props.isBroadcast) switch (this.props.liveStatus) {
				case "scheduled":
					c = i._("\u0110\u00e3 l\u00ean l\u1ecbch");
					break;
				case "live":
					c = i._("\u0110ang ph\u00e1t tr\u1ef1c ti\u1ebfp");
					break;
				case "vod":
					c = i._("\u0110\u00e3 ph\u00e1t tr\u1ef1c ti\u1ebfp: {live time}", [i._param("live time", this.$2())]);
					break;
				case "premiere":
					c = i._("C\u00f4ng chi\u1ebfu: {live time}", [i._param("live time", this.$2())]);
					break
			}
			var e = this.props.permalinkURL ? j.jsxs("span", {
					children: ["\xa0\xb7\xa0", j.jsxs(b("Link.react"), {
						href: this.props.permalinkURL,
						target: "_blank",
						children: [i._("Xem li\u00ean k\u1ebft v\u0129nh vi\u1ec5n"), "\xa0", j.jsx(b("Image.react"), {
							src: g("124776")
						})]
					})]
				}) : null,
				f = this.props.videoID;
			f = f != null ? j.jsxs("span", {
				children: ["\xa0\xb7\xa0", j.jsx(b("FBClipboardLink.react"), {
					className: "_6-y9",
					label: i._("Sao ch\u00e9p ID video"),
					tooltip: i._("Sao ch\u00e9p"),
					tooltipSuccess: i._("\u0110\u00e3 sao ch\u00e9p"),
					value: f
				}), j.jsx(b("Image.react"), {
					src: g("638382")
				})]
			}) : null;
			return j.jsx("div", {
				className: "_4g89",
				children: j.jsxs(b("XUIText.react"), {
					size: "header4",
					display: "inline",
					className: "_4g8a",
					children: [this.props.liveStatus === "scheduled" ? null : j.jsxs("span", {
						children: [b("VideoFormattingUtils").formatTime(this.props.duration), " ", "\xa0\xb7\xa0", " "]
					}), c, a, e, f]
				})
			})
		};
		d.$6 = function() {
			return this.$4() ? null : j.jsx("div", {
				className: "_4g8b",
				children: j.jsxs(b("ImageBlock.react"), {
					spacing: "medium",
					children: [j.jsx(b("Image.react"), {
						className: "_4g8c",
						src: this.props.thumbnailSrc
					}), j.jsxs("div", {
						children: [this.$1(), j.jsx(b("XUIText.react"), {
							className: "_4g8d",
							display: "block",
							children: j.jsx(b("LineClamp.react"), {
								lines: 3,
								lineHeight: 17,
								children: this.props.description
							})
						}), j.jsx(b("XUIText.react"), {
							className: "_41hi",
							children: this.props.description
						})]
					})]
				})
			})
		};
		d.render = function() {
			return j.jsxs("div", {
				children: [this.$6(), this.$5()]
			})
		};
		return c
	}(j.Component);
	e.exports = a
}), null);
__d("ReferenceFingerprintPreviewSection.react", ["cx", "fbt", "CenteredContainer.react", "Image.react", "React", "XUIGrayText.react", "createReactClass_DEPRECATED", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g, h) {
	var i = b("React"),
		j = 160,
		k = 160,
		l = "/images/video_copyright/fingerprint-160x160.png";
	a = b("createReactClass_DEPRECATED")({
		displayName: "ReferenceFingerprintPreviewSection",
		propTypes: {
			className: b("prop-types").string
		},
		render: function() {
			return i.jsx(b("CenteredContainer.react"), {
				className: b("joinClasses")(this.props.className, "_1t9p"),
				vertical: !0,
				children: i.jsxs("div", {
					children: [i.jsx(b("Image.react"), {
						className: "_1ao1",
						src: l,
						height: k,
						width: j
					}), i.jsx(b("XUIGrayText.react"), {
						className: "_1ao2",
						size: "header3",
						display: "block",
						children: h._("File c\u00f3 d\u1ea5u v\u00e2n tay")
					})]
				})
			})
		}
	});
	c = a;
	e.exports = c
}), null);
__d("VideoAssetPreviewVideo.react", ["cx", "BackgroundImage.react", "LiveVideoAdBreakConstants", "React", "ReferenceFingerprintPreviewSection.react", "ScheduledLiveStoryPreview.react", "ScheduledLiveStoryVideoPreview.react", "VideoAssetPlayer.react", "VideoAssetPreviewProfile.react"], (function(a, b, c, d, e, f, g) {
	var h = b("React"),
		i = 552,
		j = 311,
		k = 1e3;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(b) {
			b = a.call(this, b) || this;
			b.state = {
				playerShown: !1
			};
			return b
		}
		var d = c.prototype;
		d.$1 = function() {
			var a = this.props.videoProfileData;
			return h.jsx(b("VideoAssetPreviewProfile.react"), {
				thumbnailSrc: a.thumbnailSrc,
				pageName: a.pageName,
				postType: a.postType,
				title: a.title,
				description: a.description,
				uploadedTime: a.uploadedTime,
				duration: a.duration,
				reusedPostsCount: this.props.reusedPostsCount,
				contextType: this.props.contextType,
				isCrosspostedVideo: !!this.props.pageID && this.props.pageID !== a.ownerID,
				ownerName: a.assetOwnerName,
				isBroadcast: a.isBroadcast,
				isLiveStreaming: a.isLiveStreaming,
				liveStatus: a.liveStatus,
				isShare: a.isShare,
				permalinkURL: a.permalinkURL,
				broadcastID: this.props.broadcastID,
				adBreakState: this.props.adBreakState,
				adBreakFailureReason: this.props.adBreakFailureReason,
				adPodDurationInMS: this.props.adPodDurationInMS,
				videoID: this.props.videoID
			})
		};
		d.showPlayer = function() {
			this.state.playerShown || (this.setState({
				playerShown: !0
			}), this.refs.videoPlayer.playVideo(), this.refs.videoPlayer.pause())
		};
		d.seek = function(a) {
			this.refs.videoPlayer.seek(a * k)
		};
		d.$2 = function() {
			return this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_READY || this.props.adBreakState === b("LiveVideoAdBreakConstants").STATES.AD_BREAK_STARTED
		};
		d.$3 = function() {
			if (this.$2()) return null;
			if (this.props.videoProfileData.isReference && this.props.videoProfileData.referenceType === "fingerprint") return h.jsx(b("ReferenceFingerprintPreviewSection.react"), {
				className: "_j5p"
			});
			else if (this.props.videoProfileData.liveStatus === "scheduled") {
				var a = this.props.videoProfileData.scheduledLivePreviewPayload;
				return a.useComposerV2 ? h.jsx("div", {
					className: "_6llg",
					children: h.jsx(b("ScheduledLiveStoryPreview.react"), {
						description: "",
						backgroundImage: a.backgroundImage,
						broadcastID: String(a.broadcastID),
						plannedStartTime: a.plannedStartTime,
						previousCustomImage: a.previousCustomImage,
						profileImageURL: a.profileImageURL,
						profileName: a.profileName,
						targetID: this.props.pageID,
						useComposerV2: a.useComposerV2
					})
				}) : h.jsx(b("ScheduledLiveStoryVideoPreview.react"), {
					backgroundImage: a.backgroundImage,
					customProfileImage: null,
					customProfileImagePosition: null,
					plannedStartTime: a.plannedStartTime,
					previousCustomImage: a.previousCustomImage,
					profileImageURL: a.profileImageURL,
					profileName: a.profileName
				})
			} else return h.jsx(b("VideoAssetPlayer.react"), {
				ref: "videoPlayer",
				pageID: this.props.pageID,
				videoAssetID: this.props.videoID,
				playerWidth: i,
				playerHeight: j,
				autoplay: this.props.videoProfileData.isLiveStreaming,
				onVideoLoaded: this.props.onVideoLoaded,
				hideCloseButton: !0,
				className: "_42bg",
				children: h.jsx(b("BackgroundImage.react"), {
					backgroundSize: "contain",
					width: i,
					height: j,
					src: this.props.videoProfileData.thumbnailSrc
				})
			})
		};
		d.render = function() {
			var a;
			a = (a = this.props.videoProfileData) != null ? (a = a.scheduledLivePreviewPayload) != null ? a.useComposerV2 : a : a;
			a === null && (a = !1);
			return h.jsxs("div", {
				className: "_4wl7" + (a ? " _6llh" : ""),
				children: [this.$3(), this.$1()]
			})
		};
		return c
	}(h.Component);
	e.exports = a
}), null);
__d("VideoAssetInsightsOpenTriggerState", [], (function(a, b, c, d, e, f) {
	"use strict";
	f.setState = a;
	f.getState = b;
	c = !1;
	f._videoAssetInsightsOpenTrigger = c;

	function a(a) {
		this._videoAssetInsightsOpenTrigger = a
	}

	function b() {
		return this._videoAssetInsightsOpenTrigger
	}
}), null);
__d("VideoInsightsConstants", [], (function(a, b, c, d, e, f) {
	a = Object.freeze({
		VIDEO_SOUND_METRICS_AVAILABLE_TIME: 1454659200,
		LIVE_WATCH_TIME_SEV_START_TIME: 1485936e3,
		LIVE_WATCH_TIME_SEV_END_TIME: 1531897140,
		ORGANIC_VIDEO_METRICS_SEV_START_TIME_MINUS_30DAYS: 1569913200,
		ORGANIC_VIDEO_METRICS_SEV_START_TIME: 1572033600,
		ORGANIC_VIDEO_METRICS_SEV_END_TIME: 1572249600,
		RETURNING_VIEWERS_SEV_S210992_START_TIME: 1599586620,
		RETURNING_VIEWERS_SEV_S210992_END_TIME: 1601189940
	});
	e.exports = a
}), null);
__d("CreatorStudioRedirectFromPageCard.react", ["ix", "cx", "fbt", "CenteredContainer.react", "GeoBaseText.react", "GeoButton.react", "Image.react", "MediaManagerLibertyUtils", "MediaManagerTypedLogger", "React", "XMediaManagerController", "asset", "geoMargin"], (function(a, b, c, d, e, f, g, h, i) {
	"use strict";
	var j = b("React"),
		k = function(a) {
			var b = a.tab === "content_posts" || a.tab === "content_media",
				c = a.tab === "content_posts" && a.postType === "VIDEOS";
			a = a.tab === "content_media";
			if (c) return "pub_tools_video_library_tab";
			return a ? "pub_tools_videos_you_can_crosspost_tab" : b ? "liberty_redirection_from_pub_tool" : "liberty_redirection_from_page_insights"
		},
		l = function(a) {
			return b("XMediaManagerController").getURIBuilder().setFBID("selected_single_page_id", a.pageID).setEnum("reference", k(a)).setString("tab", a.tab).setEnum("content_table", a.content_table).setEnum("post_status", a.postStatus).setEnum("post_type", a.postType).getURI()
		};
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = function() {
				var a = l(d.props);
				b("MediaManagerLibertyUtils").openCreatorStudio(a, !1)
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.componentDidMount = function() {
			new(b("MediaManagerTypedLogger"))().setEvent("liberty_card_impression").setEventSource("liberty").setMediaManagerVisitSource(k(this.props)).setSelectedPageIds([this.props.pageID]).addToExtraData("redirect_tab", this.props.tab).log()
		};
		d.render = function() {
			var a = this.props.tab === "content_posts" || this.props.tab === "content_media";
			return j.jsxs(b("CenteredContainer.react"), {
				className: "_71i4",
				children: [j.jsx("div", {
					className: "_71hq",
					children: j.jsx(b("Image.react"), {
						src: a ? g("622074") : g("562139")
					})
				}), j.jsx(b("GeoBaseText.react"), {
					color: "value",
					display: "block",
					size: "header2",
					xstyle: b("geoMargin").bottom4,
					children: a ? i._("Kh\u00e1m ph\u00e1 th\u01b0 vi\u1ec7n n\u1ed9i dung c\u1ee7a b\u1ea1n") : i._("Th\u00f4ng tin chi ti\u1ebft c\u1ee7a b\u1ea1n \u0111\u00e3 chuy\u1ec3n sang Studio s\u00e1ng t\u1ea1o")
				}), j.jsx(b("GeoBaseText.react"), {
					color: "valueLabel",
					display: "block",
					size: "value",
					textAlign: "center",
					xstyle: b("geoMargin").bottom16,
					children: a ? i._("Gi\u1edd \u0111\u00e2y, b\u1ea1n c\u00f3 th\u1ec3 qu\u1ea3n l\u00fd n\u1ed9i dung tr\u00ean t\u1ea5t c\u1ea3 c\u00e1c Trang c\u1ee7a m\u00ecnh trong th\u01b0 vi\u1ec7n n\u1ed9i dung c\u1ee7a Studio s\u00e1ng t\u1ea1o.") : i._("Gi\u1edd \u0111\u00e2y, b\u1ea1n c\u00f3 th\u1ec3 xem th\u00f4ng tin chi ti\u1ebft v\u1ec1 video tr\u00ean t\u1ea5t c\u1ea3 c\u00e1c Trang c\u1ee7a m\u00ecnh trong Studio s\u00e1ng t\u1ea1o.")
				}), j.jsx(b("GeoButton.react"), {
					label: i._("M\u1edf Studio s\u00e1ng t\u1ea1o"),
					variant: "primary",
					onClick: this.$1
				})]
			})
		};
		return c
	}(j.Component);
	e.exports = a;
	a.getRedirectToCreatorStudioURI = l
}), null);
__d("videoOpenVideoAssetInsightsDialog", ["AsyncDialog", "AsyncRequest", "VideoAssetInsightsOpenTriggerState", "XVideoAssetInsightsDialogController", "videoAssetInsightsLogComponentLoadStarted"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		var c;
		if (b("VideoAssetInsightsOpenTriggerState").getState() === !0) return;
		b("videoAssetInsightsLogComponentLoadStarted")({
			pageID: a.pageID,
			source: a.source,
			videoAssetID: a.videoAssetID
		});
		c = b("XVideoAssetInsightsDialogController").getURIBuilder().setFBID("video_asset_id", a.videoAssetID).setFBID("page_id", a.pageID).setEnum("context", (c = a.context) != null ? c : "video_asset").setEnum("source", a.source != null ? a.source : "video_library").setEnum("initial_tab", a.initialTab).setEnum("source_footer_message_type", a.sourceFooterMessageType).setEnum("initial_card", a.initialCard).setBool("is_on_creator_studio", a.isOnCreatorStudio != null ? a.isOnCreatorStudio : !1).setStringToStringMap("default_insights_values", a.defaultInsightsValues).getURI();
		b("AsyncDialog").send(new(b("AsyncRequest"))(c).setRelativeTo(a.relativeTo), a.onLoadedCallback);
		b("VideoAssetInsightsOpenTriggerState").setState(!0)
	}
}), null);
__d("lazyLoadVideoDetailsExplorer", ["cx", "DOM", "GeoSpinner.react", "JSResource", "QuickPerformanceLogger", "lazyLoadComponent", "React", "ReactDOM"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("lazyLoadComponent")(b("JSResource")("VideoDetailsExplorerModalContainer.react").__setRef("lazyLoadVideoDetailsExplorer")),
		i = b("React"),
		j = b("DOM").create("div");

	function a(a) {
		try {
			b("QuickPerformanceLogger").markerStart(49283075, 0)
		} catch (a) {}
		var c = a.onCometDialog,
			d = a.onSuccessCallback,
			e = babelHelpers.objectWithoutPropertiesLoose(a, ["onCometDialog", "onSuccessCallback"]);
		b("JSResource")("VideoDetailsExplorerInitAction").__setRef("lazyLoadVideoDetailsExplorer").load().then(function(a) {
			c !== !0 && b("ReactDOM").render(i.jsx(i.Suspense, {
				fallback: i.jsx("div", {
					className: "_92eh",
					children: i.jsx(b("GeoSpinner.react"), {})
				}),
				children: i.jsx(h, {
					onDisplayCallback: d
				})
			}), j), a.dispatch(e, {
				line: "67",
				module: "lazyLoadVideoDetailsExplorer.js"
			})
		})
	}
}), null);
__d("openVideoDetailsExplorer", ["QuickPerformanceLogger", "RelayFBEnvironment", "RelayFBEnvironmentFactory", "RelayModern", "err", "gkx", "lazyLoadVideoDetailsExplorer", "nullthrows", "promiseDone", "qex", "videoOpenVideoAssetInsightsDialog", "openVideoDetailsExplorerQuery.graphql"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g;

	function a(a) {
		var c = {
				contentID: a.videoID
			},
			d = {
				context: a.context,
				isOnCreatorStudio: a.isOnCreatorStudio,
				initialCard: a.initialCard,
				initialTab: a.initialTab,
				pageID: a.pageID,
				source: a.source,
				relativeTo: a.relativeTo,
				videoAssetID: a.videoID
			},
			e = a.pageID == null ? b("RelayFBEnvironment") : b("RelayFBEnvironmentFactory").getForActorID(a.pageID);
		b("promiseDone")(b("RelayModern").fetchQuery(e, i, c, {
			force: !0
		}), function(c) {
			var e, f, g;
			e = (e = c.media_manager_content_view_model) == null ? void 0 : e.video_details_explorer_view_model;
			var i = e == null ? void 0 : e.permission_data;
			f = (f = i == null ? void 0 : i.is_permission_enabled) != null ? f : !1;
			g = (g = (g = i == null ? void 0 : i.owner_page_id) != null ? g : a.pageID) != null ? g : "";
			c = (c = (c = c.media_manager_content_view_model) == null ? void 0 : c.is_owner_additional_profile) != null ? c : !1;
			var j = babelHelpers["extends"]({}, d, {
				pageID: g
			});
			if (f) {
				b("nullthrows")(e, "Video Details Explorer View Model should never be null if hasPermission is true");
				b("nullthrows")(i, "Permission Data should never be null if hasPermission is true");
				if (c) f = !0;
				else if (a.isOnCreatorStudio === !0) {
					f = (c = b("qex")._("1144477")) != null ? c : !1
				} else f = b("gkx")("1347452");
				if (f === !1) {
					h(j);
					return
				}
				f = (c = e == null ? void 0 : e.access_token) != null ? c : "";
				c = (e = i == null ? void 0 : i.asset_or_post_id) != null ? e : a.videoID;
				b("lazyLoadVideoDetailsExplorer")({
					accessToken: f,
					inCreatorStudio: a.isOnCreatorStudio || !1,
					pageID: g,
					source: a.source,
					videoID: c,
					onCometDialog: a.onCometDialog,
					onSuccessCallback: a.onSuccessCallback
				})
			} else {
				if (a.source === "vde_direct_link") return;
				h(j)
			}
		}, function(a) {
			throw new(b("err"))("Error fetching access token " + JSON.stringify(a))
		})
	}

	function h(a) {
		if (a.isOnCreatorStudio === !0) try {
			b("QuickPerformanceLogger").markerStart(49283073, 0)
		} catch (a) {}
		b("videoOpenVideoAssetInsightsDialog")(a)
	}
	var i = g !== void 0 ? g : g = b("openVideoDetailsExplorerQuery.graphql")
}), null);