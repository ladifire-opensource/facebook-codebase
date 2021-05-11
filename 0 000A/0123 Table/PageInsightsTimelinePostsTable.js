__d("PageInsightsTimelinePostsTable.react", ["cx", "invariant", "AsyncRequest", "BoostedPostFamilyDialogButtonWrapper.react", "FBLogger", "HubbleContext", "HubbleDrillDownMixin", "HubblePostMetricConfig", "HubbleUtils", "Image.react", "ImageBlock.react", "InsightsPager.react", "PageInsightsBackgroundBar.react", "PageInsightsBackgroundBarGroup.react", "PageInsightsHiddenPostImage.react", "PageInsightsPerformanceLogger", "PageInsightsPostListColumn.react", "PageInsightsPostListConstant", "PageInsightsPostListMetricConfigUtils.react", "PageInsightsPostListPostTypeUtils.react", "PageInsightsPostListTableLegendUtils.react", "PageInsightsTableWithValidation", "PageInsightsTimelinePostsTablePaginationQuery.graphql", "PageInsightsTimelinePostsTableUtils", "PageInsightsTimelinePostsTable_timelinePostsData.graphql", "PostInsightsTargetingImage.react", "RelayModern", "ShimButton.react", "SpectrumIntegerScale", "SpectrumPercentageScale", "classWithMixins", "d3-old/scale/ordinal", "formatDate", "immutable", "joinClasses", "mixin", "openVideoDetailsExplorer", "react"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i, j, k, l = k || b("react"),
		m = 15;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c) {
			var d;
			d = a.call(this, c) || this;
			d.state = {
				isLoading: !1,
				reachColumnMax: d.$PageInsightsTimelinePostsTable1(),
				engagementColumnMax: d.$PageInsightsTimelinePostsTable2(),
				promotionData: {},
				showDrillDown: !1
			};
			d.$PageInsightsTimelinePostsTable5 = function() {
				if (!d.props.relay.hasMore() || d.props.relay.isLoading()) return;
				b("PageInsightsPerformanceLogger").start(19202079, d.props.pageID);
				d.setState({
					isLoading: !0
				});
				d.props.relay.loadMore(m, function() {
					d.setState({
						isLoading: !1
					});
					d.$PageInsightsTimelinePostsTable3();
					b("PageInsightsPerformanceLogger").end(19202079, d.props.pageID);
					var a = d.$PageInsightsTimelinePostsTable1();
					d.setState({
						reachColumnMax: a
					});
					a = d.$PageInsightsTimelinePostsTable2();
					d.setState({
						engagementColumnMax: a
					})
				})
			};
			d.$PageInsightsTimelinePostsTable3();
			return d
		}
		var d = c.prototype;
		d.$PageInsightsTimelinePostsTable4 = function(a) {
			if ((a == null ? void 0 : a.type) === "VIDEO" || (a == null ? void 0 : a.type) === "SHARED_VIDEO") {
				var c = b("HubbleUtils").getVideoID((a == null ? void 0 : a.id) || ""),
					d = b("HubbleUtils").getPageID((a == null ? void 0 : a.id) || "");
				b("openVideoDetailsExplorer")({
					pageID: d,
					videoID: c,
					source: this.props.source
				})
			} else this.setState({
				drilldownProps: {
					postCreatedTime: a == null ? void 0 : a.creation_time,
					postID: a == null ? void 0 : a.id,
					postIdentifier: a == null ? void 0 : a.post_identifier,
					postStatusType: a == null ? void 0 : a.status_type,
					postType: a == null ? void 0 : a.type,
					hasHints: a == null ? void 0 : a.has_hint,
					isBrandedContent: a == null ? void 0 : a.is_branded_content,
					defaultExpandStatus: {
						postPerformance: !0,
						taggedProducts: !1
					}
				},
				showDrillDown: !0
			})
		};
		d.$PageInsightsTimelinePostsTable1 = function() {
			var a;
			a = b("PageInsightsTimelinePostsTableUtils").getReachColumnMax((a = this.props) == null ? void 0 : a.timelinePostsData, (a = this.props) == null ? void 0 : a.reachMetricsFilterType);
			return a
		};
		d.$PageInsightsTimelinePostsTable2 = function() {
			var a;
			a = b("PageInsightsTimelinePostsTableUtils").getEngagementColumnMax((a = this.props) == null ? void 0 : a.timelinePostsData, (a = this.props) == null ? void 0 : a.engegamentMetricsFilterType);
			return a
		};
		d.$PageInsightsTimelinePostsTable6 = function() {
			return !this.props.relay.hasMore() ? null : l.jsx(b("InsightsPager.react"), {
				isLoading: this.state.isLoading,
				onClick: this.$PageInsightsTimelinePostsTable5
			})
		};
		d.$PageInsightsTimelinePostsTable7 = function(a, c) {
			var d = this;
			a = new(b("AsyncRequest"))().setData({
				ids: a,
				promotable_ids: c
			}).setHandler(function(a) {
				a = a.getPayload();
				d.setState({
					promotionData: a
				})
			}).setMethod("GET").setReadOnly(!0).setURI("/ajax/pages/insights/promotion_status/");
			a.send()
		};
		d.$PageInsightsTimelinePostsTable3 = function() {
			var a;
			a = ((a = this.props) == null ? void 0 : (a = a.timelinePostsData) == null ? void 0 : (a = a.timeline_posts) == null ? void 0 : a.edges) || [];
			var b = a.map(function(a, b) {
				return a == null ? void 0 : (b = a.node) == null ? void 0 : (a = b.meta_data) == null ? void 0 : a.promotable_id
			});
			a = a.map(function(a, b) {
				return a == null ? void 0 : (b = a.node) == null ? void 0 : (a = b.meta_data) == null ? void 0 : a.id
			});
			a = a.join(",");
			b = b.join(",");
			this.$PageInsightsTimelinePostsTable7(a, b)
		};
		d.componentDidMount = function() {
			b("PageInsightsPerformanceLogger").end(19202076, this.props.pageID)
		};
		d.render = function() {
			var a;
			a = ((a = this.props.timelinePostsData) == null ? void 0 : (a = a.timeline_posts) == null ? void 0 : a.edges) || [];
			var c = b("HubbleContext").get("canSeePromoteButton"),
				d = b("immutable").Map();
			a = a.map(function(a, e) {
				var f, g, h = this,
					i = (e = a.node) == null ? void 0 : e.meta_data;
				e = i == null ? void 0 : i.creation_time;
				e = e != null ? new Date(e * 1e3) : null;
				var j = (i == null ? void 0 : i.message) || (i == null ? void 0 : i.name) || (i == null ? void 0 : i.caption) || (i == null ? void 0 : i.description),
					k = null,
					m = (i == null ? void 0 : i.picture) || null;
				j = l.jsx("div", {
					className: "_5591",
					children: j
				});
				m ? k = l.jsxs(b("ImageBlock.react"), {
					spacing: "medium",
					children: [l.jsx("div", {
						className: "_555c",
						style: {
							backgroundImage: "url(" + m + ")"
						}
					}), j]
				}) : k = j;
				m = null;
				j = i == null ? void 0 : i.type;
				if (j != null && b("PageInsightsPostListPostTypeUtils.react").getPostTypeLabel(j) != null) {
					var n = b("PageInsightsPostListPostTypeUtils.react").getPostTypeLabel(j);
					j = b("PageInsightsPostListPostTypeUtils.react").getPostTypeImage18(j);
					m = l.jsx(b("Image.react"), {
						alt: n,
						className: "_555d",
						"data-hover": "tooltip",
						"data-tooltip-alignh": "center",
						"data-tooltip-content": n,
						src: j
					}, "postTypeIcon")
				}
				n = l.jsx(b("PostInsightsTargetingImage.react"), {
					privacy_description: i.privacy_description,
					privacy_post_targeting: i.privacy_post_targeting,
					privacy_value: i.privacy_value
				});
				j = null;
				var o = i == null ? void 0 : i.visibility,
					p = i == null ? void 0 : i.timeline_token;
				(o === "hidden" || o === "spam") && p != null && (j = l.jsx(b("PageInsightsHiddenPostImage.react"), {
					timeline_token: p,
					visibility: o
				}));
				p = null;
				o = null;
				var q = b("d3-old/scale/ordinal")().range(b("HubblePostMetricConfig").types.reach.colors);
				a = a == null ? void 0 : (a = a.node) == null ? void 0 : a.insights_data;
				var r = b("immutable").Map();
				if (a) {
					var s = [],
						t = null,
						u = null;
					switch (this.props.reachMetricsFilterType) {
						case b("PageInsightsPostListConstant").PageInsightsPostListReachColumnMenuItems.REACH:
							t = b("PageInsightsPostListTableLegendUtils.react").getReachMenuLabel(b("PageInsightsPostListConstant").PageInsightsPostListReachColumnMenuItems.REACH);
							s = [(a == null ? void 0 : a.post_reach) || 0];
							u = a == null ? void 0 : a.post_reach;
							r = r.merge((f = {}, f.page_insights_post_reach = u, f));
							break;
						case b("PageInsightsPostListConstant").PageInsightsPostListReachColumnMenuItems.REACH_ORGANIC_PAID:
							t = b("PageInsightsPostListTableLegendUtils.react").getReachMenuLabel(b("PageInsightsPostListConstant").PageInsightsPostListReachColumnMenuItems.REACH_ORGANIC_PAID);
							f = (a == null ? void 0 : a.post_reach_organic) || 0;
							var v = (a == null ? void 0 : a.post_reach_paid) || 0;
							s = [f, v];
							u = a == null ? void 0 : a.post_reach;
							r = r.merge((g = {}, g.page_insights_post_oragnic_reach = f, g), (f = {}, f.page_insights_post_paid_reach = v, f), (g = {}, g.page_insights_post_reach = u, g));
							break;
						case b("PageInsightsPostListConstant").PageInsightsPostListReachColumnMenuItems.IMPRESSION_ORGANIC_PAID:
							t = b("PageInsightsPostListTableLegendUtils.react").getReachMenuLabel(b("PageInsightsPostListConstant").PageInsightsPostListReachColumnMenuItems.IMPRESSION_ORGANIC_PAID);
							v = (a == null ? void 0 : a.post_impressions_organic) || 0;
							f = (a == null ? void 0 : a.post_impressions_paid) || 0;
							s = [v, f];
							u = (a == null ? void 0 : a.post_impression) || 0;
							r = r.merge((g = {}, g.page_insights_post_organic_impressions = v, g.page_insights_post_paid_impressions = f, g.page_insights_post_total_impressions = u, g));
							break;
						case b("PageInsightsPostListConstant").PageInsightsPostListReachColumnMenuItems.REACH_FAN_NON_FAN:
							t = b("PageInsightsPostListTableLegendUtils.react").getReachMenuLabel(b("PageInsightsPostListConstant").PageInsightsPostListReachColumnMenuItems.REACH_FAN_NON_FAN);
							v = (a == null ? void 0 : a.post_reach_fan) || 0;
							f = (a == null ? void 0 : a.post_reach_non_fan) || 0;
							s = [v, f];
							u = a == null ? void 0 : a.post_reach;
							r = r.merge((g = {}, g.page_insights_post_fan_reach = v, g.page_insights_post_non_fan_reach = f, g.page_insights_post_reach = u, g));
							break
					}
					v = b("SpectrumIntegerScale")().domain([0, this.state.reachColumnMax]);
					t != null && (p = l.jsx(b("PageInsightsBackgroundBar.react"), {
						colors: q,
						scale: v,
						shouldShowLabel: !0,
						tall: !0,
						titles: t,
						totalValue: u,
						values: s
					}));
					f = null;
					g = b("SpectrumIntegerScale")().domain([0, this.state.engagementColumnMax]);
					switch (this.props.engegamentMetricsFilterType) {
						case b("PageInsightsPostListConstant").PageInsightsPostListEngagementColumnMenuItems.ENGAGEMENT_CLICK_REACTION_COMMENT_SHARE:
							q = (a == null ? void 0 : a.post_total_clicks) || 0;
							v = (a == null ? void 0 : a.post_reaction_comment_share_sum) || 0;
							f = new Map([
								[b("PageInsightsPostListMetricConfigUtils.react").PageInsightsPostListMetricName.POST_CLICK_TOTAL, q],
								[b("PageInsightsPostListMetricConfigUtils.react").PageInsightsPostListMetricName.POST_REACTION_COMMENT_SHARE_SUM, v]
							]);
							r = r.merge((t = {}, t.page_insights_post_clicks_total = q, t.page_insights_post_reaction_comment_share_sum = v, t));
							break;
						case b("PageInsightsPostListConstant").PageInsightsPostListEngagementColumnMenuItems.ENGAGEMENT_REACTION_COMMENT_SHARE:
							u = (a == null ? void 0 : a.post_reactions) || 0;
							s = (a == null ? void 0 : a.post_comments) || 0;
							q = (a == null ? void 0 : a.post_shares) || 0;
							f = new Map([
								[b("PageInsightsPostListMetricConfigUtils.react").PageInsightsPostListMetricName.POST_REACTIONS, u],
								[b("PageInsightsPostListMetricConfigUtils.react").PageInsightsPostListMetricName.POST_COMMENTS, s],
								[b("PageInsightsPostListMetricConfigUtils.react").PageInsightsPostListMetricName.POST_SHARES, q]
							]);
							r = r.merge((v = {}, v.page_insights_post_reaction = u, v.page_insights_post_comment = s, v.page_insights_post_share = q, v));
							break;
						case b("PageInsightsPostListConstant").PageInsightsPostListEngagementColumnMenuItems.NEGATIVE_FEEDBACK:
							t = (a == null ? void 0 : a.post_hide_hide_all_report_spam_unlike_page_click_sum) || 0;
							f = new Map([
								[b("PageInsightsPostListMetricConfigUtils.react").PageInsightsPostListMetricName.POST_HIDE_HIDE_ALL_REPORT_SPAM_UNLIKE_PAGE_CLICK_SUM, t]
							]);
							r = r.merge((u = {}, u.page_insights_post_hide_clicks_hide_all_clicks_report_spam_clicks_unlike_page_clicks_sum = t, u));
							break;
						case b("PageInsightsPostListConstant").PageInsightsPostListEngagementColumnMenuItems.ENGAGEMENT_RATE:
							s = (a == null ? void 0 : a.post_engagement_rate) || 0;
							f = new Map([
								[b("PageInsightsPostListMetricConfigUtils.react").PageInsightsPostListMetricName.POST_ENGAGEMENT_RATE, (a == null ? void 0 : a.post_engagement_rate) || 0]
							]);
							g = b("SpectrumPercentageScale")().domain([0, this.state.engagementColumnMax]);
							r = r.merge((q = {}, q.page_insights_post_engagement_rate = s, q));
							break
					}
					f != null && (o = l.jsx(b("PageInsightsBackgroundBarGroup.react"), {
						data: f,
						metricsGroup: this.props.engegamentMetricsFilterType,
						scale: g
					}))
				}
				v = [l.jsxs("div", {
					children: [b("formatDate")(e, "m/d/Y"), l.jsx("div", {
						className: "_555e",
						children: b("formatDate")(e, "g:i a")
					})]
				}, "postTime"), l.jsx(b("ShimButton.react"), {
					className: "_55ik",
					onClick: function() {
						h.$PageInsightsTimelinePostsTable4(i)
					},
					children: k
				}, "postContent"), m, l.jsxs("div", {
					className: "_2-3e",
					children: [j, n]
				}, "targeting"), l.jsx("div", {
					className: "_5b9m",
					children: p
				}, "reach"), l.jsx("div", {
					className: "_5b9n",
					children: o
				}, "engagement")];
				t = i == null ? void 0 : i.id;
				c && this.state.promotionData != null && t != null && v.push(l.jsx("div", {
					className: "_5bdi",
					children: l.jsx(b("BoostedPostFamilyDialogButtonWrapper.react"), {
						data: this.state.promotionData[t],
						placement: this.props.placement
					})
				}, "promote"));
				d = d.set(i == null ? void 0 : i.id, r);
				return v
			}, this);
			var e = b("PageInsightsPostListColumn.react").getPostListTableColumn(c),
				f = b("joinClasses")("_5b9o", this.props.className);
			return l.jsx("div", {
				children: l.jsxs("div", {
					className: f,
					children: [l.jsx(b("PageInsightsTableWithValidation"), {
						className: this.props.tableClassName,
						columns: e,
						rows: a,
						validationProps: this.$PageInsightsTimelinePostsTable8(d)
					}), this.$PageInsightsTimelinePostsTable6()]
				})
			})
		};
		d.$PageInsightsTimelinePostsTable8 = function(a) {
			try {
				var c = [];
				a.size > 0 && (c = a.valueSeq().first().keySeq().toArray());
				return {
					pageID: this.props.pageID,
					metrics: b("immutable").List(c),
					values: a,
					component: "PageInsightsTimelinePostsTable",
					productGroup: "POST_INSIGHTS",
					objectIDType: "POST_ID",
					metricType: "HUBBLE_POSTS_TABLE_METRIC_NAME"
				}
			} catch (a) {
				b("FBLogger")("metric-ui-validation").catching(a).warn("Error constructing validation params for PageInsightsTimelinePostsTable")
			}
			h(0, 17821)
		};
		return c
	}(b("classWithMixins")(l.Component, b("mixin")(b("HubbleDrillDownMixin"))));
	c = b("RelayModern").createPaginationContainer(a, {
		timelinePostsData: i !== void 0 ? i : i = b("PageInsightsTimelinePostsTable_timelinePostsData.graphql")
	}, {
		direction: "forward",
		getConnectionFromProps: function(a) {
			return a.timelinePostsData && a.timelinePostsData.timeline_posts
		},
		getFragmentVariables: function(a, b) {
			return babelHelpers["extends"]({}, a, {
				count: b
			})
		},
		getVariables: function(a, b) {
			var c = b.count;
			b = b.cursor;
			return {
				cursor: b,
				count: c,
				pageID: a.pageID
			}
		},
		query: j !== void 0 ? j : j = b("PageInsightsTimelinePostsTablePaginationQuery.graphql")
	});
	e.exports = c
}), null);