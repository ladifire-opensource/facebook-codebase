if (self.CavalryLogger) {
	CavalryLogger.start_js(["QKfA5"]);
}

__d("SearchCoronavirusGlobalTypeaheadStrings", ["fbt"], (function (a, b, c, d, e, f, g) {
	e.exports = {
		GLOBAL_TYPEAHEAD_ENTRY: g._("th\u00f4ng tin m\u1edbi v\u1ec1 virus corona"),
		GLOBAL_TYPEAHEAD_SECTION_HEADER: g._("Th\u00f4ng tin m\u1edbi v\u1ec1 COVID-19")
	}
}), null);
__d("XCometSearchHashtagControllerRouteBuilder", ["jsRouteBuilder"], (function (a, b, c, d, e, f) {
	a = b("jsRouteBuilder")("/hashtag/{hashtag}/{?explore_tab}/", Object.freeze({}), void 0);
	c = a;
	e.exports = c
}), null);
__d("XCometSearchResultsControllerRouteBuilder", ["jsRouteBuilder"], (function (a, b, c, d, e, f) {
	a = b("jsRouteBuilder")("/search/{?searchtype}/{?*bqf}/", Object.freeze({}), void 0);
	c = a;
	e.exports = c
}), null);
/// graphql
__d("MWChatCloseNewTab.bs", ["React", 
	"MWChatMultitabContext.bs", "MWChatMultitabDispatcher.bs", 
	"useCometFeedNoRoutingNavigationEventLogger"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c = b("useCometFeedNoRoutingNavigationEventLogger")(),
			d = g.useContext(b("MWChatMultitabContext.bs").context);
		return g.useCallback(function (a) {
			c(Date.now(), "", "messenger");
			if (d !== void 0) return b("MWChatMultitabDispatcher.bs").dispatch(void 0, d, 3)
		}, [d, c])
	}
	f.useHook = a
}), null);
__d("MWChatFilterContacts", ["CometHomeContactsConfig"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function (a) {
		var c = 0,
			d = 0;
		a = a.filter(function (a) {
			if (d >= b("CometHomeContactsConfig").numContactsToFetch && a.availability !== "ACTIVE") return !1;
			var e = a == null ? void 0 : a.id;
			if (e == null) return !1;
			a.availability === "ACTIVE" && c++;
			d++;
			return !0
		});
		return {
			activeCount: c,
			filteredContacts: a
		}
	};
	f.filter = a
}), null);
__d("MWThreadKey.bs", ["bs_int64", "React", "unrecoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = g.createContext(void 0);

	function a(a) {
		var c = a.id;
		a = a.children;
		var d = b("bs_int64").to_string(c),
			e = g.useMemo(function () {
				return c
			}, [d]),
			f = g.useContext(h);
		if (f !== void 0) return b("unrecoverableViolation")("You can't nest MWThreadKey in another MWThreadKey. This will cause SEVs as things might think they're in the wrong thread", "messenger_web_product");
		else return g.jsx(h.Provider, {
			value: e,
			children: a
		}, d)
	}

	function c(a) {
		return g.useContext(h)
	}

	function d(a) {
		a = g.useContext(h);
		if (a !== void 0) return a;
		else return b("unrecoverableViolation")("Tried to get a thread key when there was none", "messenger_web_product")
	}
	e = a;
	f.make = e;
	f.useIdMemoized = c;
	f.useIdMemoizedExn = d
}), null);
__d("useMWIsCometHomePage", ["useCometRouterState"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a() {
		var a = b("useCometRouterState")();
		if (a == null) return !0;
		var c = a.main;
		a = a.pushViewStack;
		a = a && a.length > 0 ? a[a.length - 1] : c;
		c = a.route;
		return (c == null ? void 0 : c.routePath) === "/"
	}
}), null);
__d("CometSearchTypeaheadBaseBootstrapDataProviderStorageKeyPrefix", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = "_SearchBootstrapCache_";
	b = a;
	e.exports = b
}), null);
__d("CometSearchTypeaheadBaseBootstrapDataProvider", ["Promise", "CometSearchTypeaheadBaseBootstrapDataProviderStorageKeyPrefix", "CometSearchTypeaheadBaseDataProvider", "WebStorage", "gkx", "recoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = 1e3 * 60 * 60 * 24;
	a = function () {
		function a(a) {
			var c = a.storageKey,
				d = a.storageTimespan;
			d = d === void 0 ? h : d;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["storageKey", "storageTimespan"]);
			this.$1 = new(b("CometSearchTypeaheadBaseDataProvider"))(a);
			this.$3 = b("CometSearchTypeaheadBaseBootstrapDataProviderStorageKeyPrefix") + c;
			this.$4 = d;
			c = a.queryVariablesBuilder;
			this.$2 = c
		}
		var c = a.prototype;
		c.fetch = function (a) {
			var c = this,
				d = b("gkx")("1821232"),
				e = d ? this.$5() : null;
			if (e != null) {
				var f = this.$2.build();
				f = f(a);
				return b("Promise").resolve({
					requestQueryVariables: f,
					response: e
				})
			}
			return this.$1.fetch(a).then(function (a) {
				var b = a.response;
				b != null && d && c.$6(b);
				return a
			})
		};
		c.$5 = function () {
			var a = (g || (g = b("WebStorage"))).getLocalStorageForRead();
			if (a == null) return null;
			a = a.getItem(this.$3);
			if (a == null) return null;
			a = JSON.parse(a);
			var c = a.response;
			a = a.timestamp;
			var d = Date.now();
			return a + Number(this.$4) >= d ? c : null
		};
		c.$6 = function (a) {
			var c = (g || (g = b("WebStorage"))).getLocalStorage();
			if (!c) return;
			try {
				var d = Date.now();
				a = JSON.stringify({
					response: a,
					timestamp: d
				});
				c.setItem(this.$3, a)
			} catch (a) {
				b("recoverableViolation")("Cannot save bootstrap response to local storage due to error: " + a, "search")
			}
		};
		return a
	}();
	e.exports = a
}), null);
__d("CometSearchTypeaheadBaseTraceProvider", ["CometHeroLogging", "performanceNow"], (function (a, b, c, d, e, f) {
	"use strict";
	var g;
	a = function () {
		function a(a) {
			var b = a.loggingProvider,
				c = a.trace;
			a = a.vcTrackerRef;
			this.$5 = !1;
			this.$7 = null;
			this.$1 = c;
			this.$2 = b;
			this.$6 = a;
			this.$3 = "unknown"
		}
		var c = a.prototype;
		c.getInteractionUUID = function () {
			return this.$4
		};
		c.getVCTrackerRef = function () {
			return this.$6
		};
		c.isResolved = function () {
			return this.$5
		};
		c.resolve = function () {
			this.$5 = !0, this.$7 = null
		};
		c.setEventStartTime = function (a) {
			this.$7 = a
		};
		c.setEndReason = function (a) {
			this.$3 = a
		};
		c.getEndReason = function () {
			return this.$3
		};
		c.getEntriesCountForVisualComplete = function () {
			return 8
		};
		c.trace = function (a, c) {
			var d = this;
			this.setEndReason("continued_typing");
			this.$5 = !1;
			var e = void 0,
				f = void 0;
			this.$7 != null && (f = this.$7, e = (g || (g = b("performanceNow")))() - f);
			return this.$1(function (e) {
				var f = b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(e.getTraceId());
				d.$4 = f;
				e.addMetadata("entry_point_surface", d.$2.getContext());
				e.addMetadata("current_text_length", c.length);
				f = d.$2.getSessionID();
				f != null && e.addMetadata("typeahead_sid", f);
				e.onComplete(function () {
					e.addMetadata("end_reason", d.getEndReason())
				});
				a(e)
			}, f, e)
		};
		return a
	}();
	e.exports = a
}), null);
__d("CometSearchBootstrapEntitiesDataSource.query", ["CometRelay", "CometTypeaheadDataEntryWithMetaData", "cometUniqueID", "CometSearchBootstrapEntitiesDataSourceQuery.graphql", "CometSearchBootstrapEntitiesDataSourceQuery_node.graphql"], (function (a, b, c, d, e, f) {
	"use strict";
	f.normalize = a;
	var g, h;
	c = g !== void 0 ? g : g = b("CometSearchBootstrapEntitiesDataSourceQuery.graphql");
	f.query = c;
	h !== void 0 ? h : h = b("CometSearchBootstrapEntitiesDataSourceQuery_node.graphql");

	function a(a) {
		if (!a) return [];
		a = ((a = (a = a.viewer) == null ? void 0 : (a = a.bootstrap_entities) == null ? void 0 : a.edges) != null ? a : []).map(function (a) {
			return a.node
		}).filter(Boolean);
		a = a.map(function (a) {
			var c = a.hcmMatchCriteria,
				d = a.isPlaceResult,
				e = a.item_logging_id,
				f = a.searchable,
				g = a.showHCMExperience;
			a = a.subtext;
			if (f == null) return null;
			var h = f.__typename,
				i = f.id,
				j = f.is_verified,
				k = f.name,
				l = f.profile_picture,
				m = f.should_show_as_individual_search_result;
			f = f.url;
			c = c;
			var n = h.toLowerCase();
			c = {
				hcmMatchCriteria: c,
				id: i,
				isPlaceResult: (c = d) != null ? c : !1,
				isVerified: j,
				name: k,
				profilePictureURI: (d = l == null ? void 0 : l.uri) != null ? d : "",
				resultType: n,
				shouldShowAsIndividualResult: Boolean(m),
				showHCMExperience: g,
				snippet: a,
				type: "bootstrap",
				url: f
			};
			l = {
				logging: {
					entityID: i,
					entityType: h.toLowerCase(),
					loggingID: (j = e) != null ? j : ""
				},
				markers: new Set(["bootstrap", "entity"])
			};
			return new(b("CometTypeaheadDataEntryWithMetaData"))({
				key: (d = i) != null ? d : b("cometUniqueID")(),
				label: (n = k) != null ? n : "",
				metaData: l,
				rawData: c
			})
		}).filter(Boolean);
		return a
	}
}), null);
__d("CometSearchBootstrapEntitiesDataSource", ["CometSearchBootstrapEntitiesDataSource.query", "CometSearchTypeaheadBaseBootstrapDataProvider", "CometSearchTypeaheadBaseDataCacheProvider", "CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder", "CometSearchTypeaheadBaseInMemoryMapDataCache", "WebPixelRatio", "cometSearchTypeaheadBaseQueryMatchBuilder", "cometSearchTypeaheadPayloadDecoratorAddLimit", "promiseDone"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = 1e3,
		h = 3,
		i = "global_typeahead_bootstrap_entities";
	a = function () {
		function a(a) {
			var c = a.limit;
			a = a.relayEnvironment;
			this.$2 = new(b("CometSearchTypeaheadBaseDataCacheProvider"))({
				cache: new(b("CometSearchTypeaheadBaseInMemoryMapDataCache"))(),
				matchBuilder: b("cometSearchTypeaheadBaseQueryMatchBuilder")
			});
			this.$4 = !1;
			this.$3 = c;
			c = new(b("CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder"))(function () {
				return function () {
					return {
						first: g,
						of_type: ["user", "group", "page", "event"],
						picture_size: 60 * b("WebPixelRatio").get()
					}
				}
			});
			this.$1 = new(b("CometSearchTypeaheadBaseBootstrapDataProvider"))({
				query: b("CometSearchBootstrapEntitiesDataSource.query").query,
				queryVariablesBuilder: c,
				relayEnvironment: a,
				storageKey: i
			})
		}
		var c = a.prototype;
		c.isBootstrapped = function () {
			return this.$4
		};
		c.bootstrap = function () {
			var a = this;
			b("promiseDone")(this.$1.fetch({
				query: ""
			}).then(function (a) {
				a = a.response;
				return b("CometSearchBootstrapEntitiesDataSource.query").normalize(a)
			}).then(function (b) {
				a.$2.add(b, null)
			}).then(function () {
				return a.$4 = !0
			}))
		};
		c.fetchCache = function (a) {
			var c = a.query;
			c = this.$2.match(c);
			var d = b("cometSearchTypeaheadPayloadDecoratorAddLimit")(this.$3);
			return d({
				entries: c,
				params: a
			})
		};
		a.getInstance = function (b) {
			if (a.instance != null) return a.instance;
			a.instance = new a(babelHelpers["extends"]({}, b, {
				limit: h
			}));
			return a.instance
		};
		return a
	}();
	e.exports = a;
	a.instance = null
}), null);
__d("CometSearchBootstrapKeywordsDataSource.query", ["CometRelay", "CometTypeaheadDataEntryWithMetaData", "filterNulls", "recoverableViolation", "CometSearchBootstrapKeywordsDataSourceQuery.graphql"], (function (a, b, c, d, e, f) {
	"use strict";
	f.normalize = a;
	var g;
	c = g !== void 0 ? g : g = b("CometSearchBootstrapKeywordsDataSourceQuery.graphql");
	f.query = c;

	function a(a) {
		if (!a) return [];
		a = a.viewer;
		a = ((a = a == null ? void 0 : (a = a.bootstrap_keywords) == null ? void 0 : a.edges) != null ? a : []).map(function (a) {
			return a.node
		}).filter(Boolean);
		a = b("filterNulls")(a.map(function (a) {
			var c = a.item_logging_id,
				d = a.item_logging_info,
				e = a.keyword_text;
			a = a.sts_info;
			if (e == null) {
				b("recoverableViolation")("Cannot have TA bootstrap entry without keyword_text", "search");
				return null
			}
			var f = a == null ? void 0 : a.direct_nav_result,
				g = a == null ? void 0 : a.high_confidence_result,
				h = a == null ? void 0 : a.disambiguation_result,
				i = null,
				j = ["bootstrap", "keyword"],
				k = null;
			if (a) {
				i = (a = f == null ? void 0 : f.title) != null ? a : g == null ? void 0 : g.text;
				f != null ? j = [].concat(j, ["direct_nav"]) : g != null ? j = [].concat(j, ["high_confidence"]) : h != null && (j = [].concat(j, ["disambiguation"]), i = ((h == null ? void 0 : h.title) || "") + "_disambiguation_result")
			}(f != null || g != null || h != null) && (k = {}, f != null && (k.direct_nav_result = {
				img_url: f == null ? void 0 : f.img_url,
				link_url: f == null ? void 0 : f.link_url,
				snippet: f == null ? void 0 : f.snippet,
				title: f == null ? void 0 : f.title
			}), g != null && (k.high_confidence_result = {
				id: g == null ? void 0 : g.hcm_id,
				picture_url: g == null ? void 0 : g.picture_url,
				snippet: g == null ? void 0 : g.snippet,
				text: g == null ? void 0 : g.text
			}), h != null && (k.disambiguation_result = {
				disambiguation_info_list: h == null ? void 0 : h.disambiguation_info_list,
				title: h == null ? void 0 : h.title
			}));
			i == null && (i = e);
			return new(b("CometTypeaheadDataEntryWithMetaData"))({
				key: i,
				label: e,
				metaData: {
					logging: {
						loggingID: (a = c) != null ? a : "",
						loggingInfo: d
					},
					markers: new Set(j)
				},
				rawData: {
					structuredInfo: k,
					type: "bootstrap"
				}
			})
		}));
		return a
	}
}), null);
__d("CometSearchBootstrapKeywordsDataSource", ["CometSearchBootstrapKeywordsDataSource.query", "CometSearchTypeaheadBaseBootstrapDataProvider", "CometSearchTypeaheadBaseDataCacheProvider", "CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder", "CometSearchTypeaheadBaseInMemoryMapDataCache", "cometSearchTypeaheadBaseStartsWithMatchBuilder", "cometSearchTypeaheadPayloadDecoratorAddLimit", "promiseDone"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = "global_typeahead_bootstrap_keywords";
	a = function () {
		function a(a) {
			var c = a.limit,
				d = a.queryVariables;
			a = a.relayEnvironment;
			this.$1 = new(b("CometSearchTypeaheadBaseDataCacheProvider"))({
				cache: new(b("CometSearchTypeaheadBaseInMemoryMapDataCache"))(),
				matchBuilder: b("cometSearchTypeaheadBaseStartsWithMatchBuilder")
			});
			this.$3 = c;
			c = new(b("CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder"))(function () {
				return function () {
					return d
				}
			});
			this.$2 = new(b("CometSearchTypeaheadBaseBootstrapDataProvider"))({
				query: b("CometSearchBootstrapKeywordsDataSource.query").query,
				queryVariablesBuilder: c,
				relayEnvironment: a,
				storageKey: g
			})
		}
		var c = a.prototype;
		c.bootstrap = function () {
			var a = this;
			b("promiseDone")(this.$2.fetch({
				query: ""
			}).then(function (a) {
				a = a.response;
				return b("CometSearchBootstrapKeywordsDataSource.query").normalize(a)
			}).then(function (b) {
				a.$1.add(b, null)
			}))
		};
		c.fetchCache = function (a) {
			var c = a.query;
			c = this.$1.match(c);
			var d = b("cometSearchTypeaheadPayloadDecoratorAddLimit")(this.$3);
			return d({
				entries: c,
				params: a
			})
		};
		return a
	}();
	e.exports = a
}), null);
__d("withSearchCometTypeaheadTraceEndReasonDecorator", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		return g.forwardRef(function (b, c) {
			var d = b.onPressEntry,
				e = b.traceProvider;
			b = babelHelpers.objectWithoutPropertiesLoose(b, ["onPressEntry", "traceProvider"]);
			var f = g.useCallback(function (a) {
				e && e.setEndReason("successful_user_action"), d && d(a)
			}, [d, e]);
			return g.jsx(a, babelHelpers["extends"]({}, b, {
				onPressEntry: f,
				ref: c,
				traceProvider: e
			}))
		})
	}
}), null);
__d("useCometSearchTypeaheadTraceProvider", ["CometSearchTypeaheadBaseTraceProvider", "React", "useCometDisplayTimingTrackerForInteraction", "useCometInteractionTracing"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = b("useCometInteractionTracing")(30605354, "contingent", "INTERACTION"),
			d = b("useCometDisplayTimingTrackerForInteraction")("SearchTypeaheadLayout"),
			e = g.useMemo(function () {
				return new(b("CometSearchTypeaheadBaseTraceProvider"))({
					loggingProvider: a,
					trace: c,
					vcTrackerRef: d
				})
			}, [a, c, d]);
		return e
	}
}), null);
__d("CometSearchTypeaheadRecentEntityViewItem.react", ["CometSearchTypeaheadBaseEntityViewItem.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c, d = a.entry;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
		var e = d.getRawData();
		c = e == null ? void 0 : (c = e.profile) == null ? void 0 : c.pictureUrl;
		return g.jsx(b("CometSearchTypeaheadBaseEntityViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: d,
			linkProps: {
				preventLocalNavigation: !0,
				url: e == null ? void 0 : (a = e.profile) == null ? void 0 : a.url
			},
			pictureUrl: c,
			size: 36
		}))
	}
}), null);
__d("cometSearchTypeaheadRecentEntityViewItem.resolver", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		a = a.getMetaData();
		a = a.markers;
		return a.has("entity") && a.has("recent")
	}
}), null);
__d("CometSearchTypeaheadBaseSurfaceRecentEntityViewItem.react", ["CometSearchTypeaheadBaseFocusLockRegion.react", "CometSearchTypeaheadBaseSurfaceRecentViewItemRemoveButton.react", "CometSearchTypeaheadRecentEntityViewItem.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c, d = a.entry;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
		return ((c = d.getRawData()) == null ? void 0 : c.type) !== "recent" ? null : g.jsx(b("CometSearchTypeaheadRecentEntityViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: d,
			itemEndContent: g.jsx(b("CometSearchTypeaheadBaseFocusLockRegion.react"), {
				children: g.jsx(b("CometSearchTypeaheadBaseSurfaceRecentViewItemRemoveButton.react"), {
					entry: d
				})
			})
		}))
	}
}), null);
__d("useSearchCometGlobalSERPRouteUrlBuilder", ["Base64", "CometRouteParams", "React", "XCometSearchResultsControllerRouteBuilder", "useSearchCometResultsEntryPointSurface"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a = a === void 0 ? {} : a;
		var c = a.currentSearchType;
		a = a.entryPointSurface;
		var d = b("CometRouteParams").useRouteParams(),
			e = d.__tsid__,
			f = b("useSearchCometResultsEntryPointSurface")({
				currentSearchType: c,
				entryPointSurface: a
			});
		return g.useCallback(function (a) {
			var d = a.disableAutocorrect,
				g = a.encryptedQueryFunction,
				h = a.entryPointAction,
				i = a.filters,
				j = a.highConfidenceResult,
				k = a.kgid,
				l = a.preloadedEntityIDs,
				m = a.preloadedEntityType,
				n = a.query,
				o = a.searchType;
			a = a.typeaheadSessionID;
			n = {
				q: n,
				searchtype: (o = (n = o) != null ? n : c) != null ? o : "top"
			};
			g != null && (n.f = g);
			a != null ? n.__tsid__ = a : typeof e === "string" && (n.__tsid__ = e);
			h != null && (n.__epa__ = h);
			f != null && (n.__eps__ = f);
			i != null && (n.filters = b("Base64").encode(JSON.stringify(i)));
			d === !0 && (n.spell = "1");
			l != null && (n.__pei__ = b("Base64").encode(JSON.stringify(l)));
			m != null && (n.__pet__ = b("Base64").encode(JSON.stringify(m)));
			if (j != null) {
				o = j.id;
				g = j.source;
				n.__hcr__ = b("Base64").encode(JSON.stringify({
					id: o,
					source: g
				}))
			}
			k != null && (n.ib = b("Base64").encode(JSON.stringify({
				kgid: k
			})));
			return b("XCometSearchResultsControllerRouteBuilder").buildURL(n)
		}, [c, e, f])
	}
}), null);
__d("cometSearchTypeaheadDirectNavigationShortcutsDedupEntries", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, b, c) {
		var d = new Map(b.map(function (a) {
				return [c(a), a]
			})),
			e = [];
		for (var a = a, f = Array.isArray(a), g = 0, a = f ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var h;
			if (f) {
				if (g >= a.length) break;
				h = a[g++]
			} else {
				g = a.next();
				if (g.done) break;
				h = g.value
			}
			h = h;
			var i = d.get(c(h));
			e.push(i != null ? i : h)
		}
		i = new Set(e.map(c));
		for (var h = b, g = Array.isArray(h), f = 0, h = g ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			if (g) {
				if (f >= h.length) break;
				a = h[f++]
			} else {
				f = h.next();
				if (f.done) break;
				a = f.value
			}
			d = a;
			i.has(c(d)) || e.push(d)
		}
		return e
	}
}), null);
__d("SearchCometGlobalTypeaheadDataSource", ["CometSearchBootstrapKeywordsDataSource", "CometSearchKeywordDataSource", "CometSearchRecentDataSource", "cometSearchDataEntryBaseKeyBuilder", "cometSearchTypeaheadBaseDedupEntries", "cometSearchTypeaheadDecorateMixedPayload", "cometSearchTypeaheadDecorateRecentPayload", "cometSearchTypeaheadDirectNavigationShortcutsDedupEntries", "qex"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a, c) {
		a === void 0 && (a = []);
		c === void 0 && (c = []);
		var d = b("qex")._("1734201") || !1;
		if (d) return b("cometSearchTypeaheadDirectNavigationShortcutsDedupEntries")(a, c, b("cometSearchDataEntryBaseKeyBuilder"));
		else return b("cometSearchTypeaheadBaseDedupEntries")(a, c, b("cometSearchDataEntryBaseKeyBuilder"))
	}
	a = function () {
		function a(a, c, d) {
			var e = a.dataSources,
				f = e.bootstrapKeywordsDataSourceParams,
				g = e.keywordDataSourceParams;
			e = e.recentDataSourceParams;
			var h = a.logging.sessionContext;
			a = a.view.renderLimit;
			this.$5 = a;
			this.$4 = h;
			this.$1 = new(b("CometSearchBootstrapKeywordsDataSource"))(babelHelpers["extends"]({}, f, {
				limit: a,
				relayEnvironment: d
			}));
			this.$2 = new(b("CometSearchKeywordDataSource"))(babelHelpers["extends"]({}, g, {
				limit: a,
				relayEnvironment: d
			}));
			this.$3 = new(b("CometSearchRecentDataSource"))(babelHelpers["extends"]({}, e, {
				actorID: c,
				limit: a,
				relayEnvironment: d
			}))
		}
		var c = a.prototype;
		c.bootstrap = function () {
			this.$1.bootstrap(), this.$3.bootstrap()
		};
		c.addRecentEntry = function (a, b) {
			this.$3.add(a, this.$4, b)
		};
		c.fetchCache = function (a) {
			var c = a.query;
			if (c === "") {
				c = this.$3.fetchCache(a);
				return b("cometSearchTypeaheadDecorateRecentPayload")(c, {
					limit: this.$5
				})
			}
			c = this.$1.fetchCache(a);
			var d = c.entries;
			if (d.length >= this.$5) return this.$6(c);
			c = this.$2.fetchCache(a);
			a = c.entries;
			c = c.params;
			d = g(d, a);
			return this.$6({
				entries: d,
				params: c
			})
		};
		c.fetchNetwork = function (a) {
			var c = this,
				d = a.query;
			return d === "" ? this.$3.fetchNetwork(a).then(function (a) {
				return b("cometSearchTypeaheadDecorateRecentPayload")(a, {
					limit: c.$5
				})
			}) : this.$2.fetchNetwork(a).then(function (b) {
				var d = c.$1.fetchCache(a);
				d = d.entries;
				var e = b.entries;
				b = b.params;
				d = g(d, e);
				return c.$6({
					entries: d,
					params: b
				})
			})
		};
		c.removeRecentEntry = function (a, b) {
			this.$3.remove(a, b)
		};
		c.$6 = function (a) {
			var c = a.entries;
			a = a.params;
			var d = this.$3.fetchCache(a);
			d = d.entries;
			return b("cometSearchTypeaheadDecorateMixedPayload")({
				entries: c,
				params: a
			}, {
				limit: this.$5,
				recentEntries: d
			})
		};
		return a
	}();
	e.exports = a
}), null);
__d("SearchCometGlobalTypeaheadDataSourceWithCoronaVirusAlert", ["CometTypeaheadDataEntryWithMetaData", "SearchCometGlobalTypeaheadDataSource", "SearchCoronavirusGlobalTypeaheadStrings", "cometUniqueID"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function (a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b, c, d) {
			return a.call(this, b, c, d) || this
		}
		var c = b.prototype;
		c.fetchCache = function (b) {
			var c = b.query;
			return c === "" ? g(a.prototype.fetchCache.call(this, b)) : a.prototype.fetchCache.call(this, b)
		};
		c.fetchNetwork = function (b) {
			var c = b.query;
			return c === "" ? a.prototype.fetchNetwork.call(this, b).then(function (a) {
				return g(a)
			}) : a.prototype.fetchNetwork.call(this, b)
		};
		return b
	}(b("SearchCometGlobalTypeaheadDataSource"));
	e.exports = a;

	function g(a) {
		var c = a.entries;
		a = a.params;
		return {
			entries: [new(b("CometTypeaheadDataEntryWithMetaData"))({
				key: b("cometUniqueID")(),
				label: String(b("SearchCoronavirusGlobalTypeaheadStrings").GLOBAL_TYPEAHEAD_ENTRY),
				metaData: {
					markers: new Set(["keyword", "alert_coronavirus"])
				},
				rawData: {
					type: "temp"
				}
			})].concat(c),
			params: a
		}
	}
}), null);
__d("SearchCometGlobalTypeaheadInputStrategy.react", ["CometSearchEventEmitterContext", "CometSearchTypeaheadBaseInputRoundedStrategy.react", "React", "useCometSearchTypeaheadBaseInputRefs"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.onChange;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["onChange"]);
		var e = g.useContext(b("CometSearchEventEmitterContext")),
			f = e.subscribeToGlobalTypeaheadFocus;
		e = b("useCometSearchTypeaheadBaseInputRefs")(c);
		c = e.composedRef;
		e = e.inputRef;
		var h = e.current;
		g.useEffect(function () {
			var a = f(function () {
				if (h == null) return;
				h.value = "";
				h.focus();
				d("")
			});
			return a
		}, [h, d, f]);
		return g.jsx(b("CometSearchTypeaheadBaseInputRoundedStrategy.react"), babelHelpers["extends"]({}, a, {
			onChange: d,
			ref: c
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);
__d("SearchCometGlobalTypeaheadLayoutContextualStrategy.react", [
	"CometSearchTypeaheadBaseProgressGlimmer.react", 
	"CometSearchTypeaheadInternalLayoutInlineStrategy.react", 
	"React", "useCometSearchInternalTypeaheadFetch", "useCometSearchInternalTypeaheadState",
	 "useCometSearchTypeaheadBaseInputRefs", 
	 "useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers",
	  "useSearchCometGlobalTypeaheadStyles", "useSearchCometTypeaheadBaseLayoutStrategyARIAProps"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.extraLayoutProps;
		d = d === void 0 ? {} : d;
		var e = d.afterViewContent;
		d = d.beforeViewContent;
		var f = a.helperText,
			h = a.label,
			i = a.onAbandonTypeahead_DO_NOT_USE,
			j = a.onBlur,
			k = a.onChange,
			l = a.onClick,
			m = a.onDownArrow,
			n = a.onEnter,
			o = a.onEscape,
			p = a.onHighlightEntry,
			q = a.onOutsideClick,
			r = a.onPressEntry,
			s = a.onShiftTab,
			t = a.onTab,
			u = a.onUpArrow,
			v = a.xstyles;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["extraLayoutProps", "helperText", "label", "onAbandonTypeahead_DO_NOT_USE", "onBlur", "onChange", "onClick", "onDownArrow", "onEnter", "onEscape", "onHighlightEntry", "onOutsideClick", "onPressEntry", "onShiftTab", "onTab", "onUpArrow", "xstyles"]);
		var w = b("useCometSearchInternalTypeaheadState")(),
			x = w.activeEntries,
			y = w.highlightedEntry;
		w = w.isOpened;
		var z = b("useCometSearchInternalTypeaheadFetch")();
		z = z.isLoading;
		c = b("useCometSearchTypeaheadBaseInputRefs")(c);
		var A = c.composedRef;
		c = c.inputRef;
		v = (v = v) != null ? v : b("useSearchCometGlobalTypeaheadStyles")();
		c = b("useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers")({
			inputRef: c,
			onAbandonTypeahead_DO_NOT_USE: i,
			onBlur: j,
			onChange: k,
			onClick: l,
			onDownArrow: m,
			onEnter: n,
			onEscape: o,
			onHighlightEntry: p,
			onOutsideClick: q,
			onPressEntry: r,
			onShiftTab: s,
			onTab: t,
			onUpArrow: u
		});
		i = b("useSearchCometTypeaheadBaseLayoutStrategyARIAProps")({
			activeEntries: x,
			helperText: f,
			highlightedEntry: y,
			inputLabel: h,
			isOpened: w
		});
		return g.jsx(b("CometSearchTypeaheadInternalLayoutInlineStrategy.react"), babelHelpers["extends"]({}, a, c, {
			extraLayoutProps: {
				afterViewContent: e,
				ariaProps: i,
				beforeViewContent: d,
				helperTextComponent: null,
				isOpened: w,
				loadingIndicator: z && x.length === 0 ? g.jsx(b("CometSearchTypeaheadBaseProgressGlimmer.react"), {}) : null
			},
			ref: A,
			xstyles: v
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);
__d("CometSearchTypeaheadBaseStructuredDirectNavKeywordViewItem.react", ["CometImageIcon.react", "CometSearchTypeaheadBaseHighlight.react", "CometSearchTypeaheadBaseViewItem.react", "React", "TetraTextPairing.react"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c, d = a.entry,
			e = a.isActive,
			f = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "isActive", "queryString"]);
		c = (c = (c = d.getRawData().structuredInfo) == null ? void 0 : c.direct_nav_result) != null ? c : {};
		var h = c.img_url,
			i = c.snippet,
			j = c.title;
		c = c.type;
		return g.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: d,
			isActive: e,
			itemStartContent: h != null ? g.jsx(b("CometImageIcon.react"), {
				size: 36,
				src: h,
				style: c === "SHORTCUT" ? "square" : "circle"
			}) : null,
			children: g.jsx(b("CometSearchTypeaheadBaseHighlight.react"), {
				content: j,
				query: f,
				strategy: "non-match",
				children: function (a) {
					return g.jsx(b("TetraTextPairing.react"), {
						body: a,
						level: 3,
						meta: i
					})
				}
			})
		}))
	}
}), null);
__d("CometSearchTypeaheadBaseStructuredDisambiguationKeywordViewItem.react", ["ix", "CometSearchTypeaheadBaseHighlight.react", "CometSearchTypeaheadBaseViewItem.react", "React", "TetraIcon.react", "TetraTextPairing.react", "fbicon", "recoverableViolation", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React");

	function a(a) {
		var c, d, e = a.entry,
			f = a.isActive,
			j = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "isActive", "queryString"]);
		c = (c = e.getRawData().structuredInfo) == null ? void 0 : c.disambiguation_result;
		d = c == null ? void 0 : (d = c.disambiguation_info_list) == null ? void 0 : d[0];
		var k = c == null ? void 0 : c.title,
			l = d == null ? void 0 : d.text;
		(c == null || l == null) && b("recoverableViolation")("We were trying to show disambiguation result, but had missing data", "search");
		return i.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: e,
			isActive: f,
			itemStartContent: i.jsx("div", {
				className: (h || (h = b("stylex"))).dedupe({
					"align-items-1": "bp9cbjyn",
					"background-color-1": "qsy8amke",
					"border-top-start-radius-1": "n00je7tq",
					"border-top-end-radius-1": "arfg74bv",
					"border-bottom-end-radius-1": "qs9ysxi8",
					"border-bottom-start-radius-1": "k77z8yql",
					"display-1": "j83agx80",
					"height-1": "tv7at329",
					"justify-content-1": "taijpn5t",
					"width-1": "thwo4zme"
				}, f ? {
					"background-color-1": "cwj9ozl2"
				} : null),
				children: i.jsx(b("TetraIcon.react"), {
					color: "secondary",
					icon: b("fbicon")._(g("491282"), 16),
					size: 16
				})
			}),
			children: i.jsx(b("CometSearchTypeaheadBaseHighlight.react"), {
				content: k,
				query: j,
				strategy: "non-match",
				children: function (a) {
					return i.jsx(b("TetraTextPairing.react"), {
						body: a,
						level: 3,
						meta: l
					})
				}
			})
		}))
	}
}), null);
__d("CometSearchTypeaheadBaseStructuredHighConfidenceKeywordViewItem.react", ["ix", "CometImageIcon.react", "CometSearchTypeaheadBaseHighlight.react", "CometSearchTypeaheadBaseViewItem.react", "React", "TetraIcon.react", "TetraTextPairing.react", "fbicon", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = !0;

	function a(a) {
		var c, d = a.entry,
			e = a.isActive,
			f = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "isActive", "queryString"]);
		var k = (c = d.getRawData().structuredInfo) == null ? void 0 : c.high_confidence_result;
		return i.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: d,
			isActive: e,
			itemEndContent: j ? i.jsx(b("CometImageIcon.react"), {
				size: 36,
				src: (c = k == null ? void 0 : k.picture_url) != null ? c : "",
				style: "roundedRect"
			}) : null,
			itemStartContent: j ? i.jsx("div", {
				className: (h || (h = b("stylex"))).dedupe({
					"align-items-1": "bp9cbjyn",
					"background-color-1": "qsy8amke",
					"border-top-start-radius-1": "n00je7tq",
					"border-top-end-radius-1": "arfg74bv",
					"border-bottom-end-radius-1": "qs9ysxi8",
					"border-bottom-start-radius-1": "k77z8yql",
					"display-1": "j83agx80",
					"height-1": "tv7at329",
					"justify-content-1": "taijpn5t",
					"width-1": "thwo4zme"
				}, e ? {
					"background-color-1": "cwj9ozl2"
				} : null),
				children: i.jsx(b("TetraIcon.react"), {
					color: "secondary",
					icon: b("fbicon")._(g("491282"), 16),
					size: 16
				})
			}) : i.jsx(b("CometImageIcon.react"), {
				size: 36,
				src: (a = k == null ? void 0 : k.picture_url) != null ? a : ""
			}),
			children: i.jsx(b("CometSearchTypeaheadBaseHighlight.react"), {
				content: (d = k == null ? void 0 : k.text) != null ? d : "",
				query: f,
				strategy: "non-match",
				children: function (a) {
					return i.jsx(b("TetraTextPairing.react"), {
						body: a,
						level: 3,
						meta: k == null ? void 0 : k.snippet
					})
				}
			})
		}))
	}
}), null);
__d("SearchCometHashtagExperiments", ["gkx"], (function (a, b, c, d, e, f) {
	"use strict";
	f.hasTypeaheadRedirection = a;

	function a() {
		return b("gkx")("1570865")
	}
}), null);
__d("getSearchCometGlobalTypeaheadBootstrapEntityModuleParams", ["FBLogger", "TokenizeUtil", "filterNulls"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = new Map([
		["user", "ENTITY_USER"],
		["page", "ENTITY_PAGES"],
		["event", "ENTITY_EVENTS"],
		["group", "ENTITY_GROUPS"],
		["place", "ENTITY_PLACES"],
		["blended", "ENTITY_BLENDED"]
	]);

	function h(a) {
		return b("TokenizeUtil").parse(a).tokens.join("")
	}

	function i(a, c, d) {
		var e = c.toLowerCase().trim(),
			f = d.toLowerCase().trim();
		switch (a) {
			case "exact":
				return e === f;
			case "partial":
				return f.indexOf(e) !== -1;
			case "prefix":
				return f.indexOf(e) === 0;
			case "no_constraint":
				return !0;
			case "trimmed":
				return h(e) === h(f);
			default:
				b("FBLogger")("search").warn("Unexpected HCM match criteria %s", a);
				return c === d
		}
	}

	function a(a, c) {
		a = a.fetchCache({
			query: c
		});
		a = a.entries;
		var d = b("filterNulls")(a.map(function (a) {
				a = a.getRawData();
				return a == null ? void 0 : a.id
			})),
			e = a.length > 0 ? a[0] : null;
		if (e == null) return null;
		var f = e.getRawData();
		if (f == null) return null;
		var h = f.hcmMatchCriteria,
			j = f.id,
			k = f.isPlaceResult,
			l = f.resultType;
		f = f.showHCMExperience;
		var m = a.filter(function (a) {
				return ((a = a.getRawData()) == null ? void 0 : a.resultType) === l
			}),
			n = a.some(function (a) {
				return a.getRawData().shouldShowAsIndividualResult === !0
			});
		n = n || m.length !== a.length ? "blended" : l;
		m = g.get(k ? "place" : n);
		var o;
		switch (n) {
			case "app":
				o = "APP";
				break;
			case "blended":
				o = "BLENDED";
				break;
			case "event":
				o = "EVENT";
				break;
			case "group":
				o = "GROUP";
				break;
			case "page":
				o = k ? "PLACE" : "PAGE";
				break;
			case "user":
				o = "USER";
				break
		}
		if (m == null || o == null) return null;
		var p;
		if (a.length === 1 && h != null && f === !0) {
			n = i(h, c, e.getLabel());
			n && f === !0 && j != null && (p = {
				id: j,
				source: "BOOTSTRAP_EXACT_MATCH"
			})
		}
		return {
			highConfidenceResult: p,
			moduleRole: m,
			preloadedEntityIDs: d,
			preloadedEntityType: o,
			results: a
		}
	}
}), null);
__d("useSearchCometGlobalTypeaheadEntityBootstrap", ["CometRelay", "CometSearchBootstrapEntitiesDataSource", "React", "getSearchCometGlobalTypeaheadBootstrapEntityModuleParams", "gkx", "requireDeferred"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = b("requireDeferred")("BanzaiODS");

	function a() {
		var a = b("CometRelay").useRelayEnvironment(),
			c = g.useMemo(function () {
				return b("gkx")("1096208") ? b("CometSearchBootstrapEntitiesDataSource").getInstance({
					relayEnvironment: a
				}) : null
			}, [a]);
		return g.useMemo(function () {
			return {
				getParamsForQuery: function (a) {
					return c == null || !c.isBootstrapped() ? null : b("getSearchCometGlobalTypeaheadBootstrapEntityModuleParams")(c, a)
				},
				load: function () {
					c != null && !c.isBootstrapped() && c.bootstrap()
				},
				logLoadStatus: function () {
					h.onReady(function (a) {
						a.bumpEntityKey(354, "comet.entity_bootstrap", c != null && c.isBootstrapped() ? "loaded" : "not_loaded")
					})
				}
			}
		}, [c])
	}
}), null);
__d("useSearchCometHashtagRouteUrlBuilder", ["CometRouteParams", "React", "XCometSearchHashtagControllerRouteBuilder", "useSearchCometResultsEntryPointSurface"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a = a === void 0 ? {} : a;
		a = a.entryPointSurface;
		var c = b("CometRouteParams").useRouteParams(),
			d = c.__tsid__,
			e = b("useSearchCometResultsEntryPointSurface")({
				entryPointSurface: a
			});
		return g.useCallback(function (a) {
			var c = a.entryPointAction,
				f = a.exploreEntryPoint,
				g = a.groupID,
				h = a.hashtag;
			a = a.typeaheadSessionID;
			h = {
				hashtag: h
			};
			a != null ? h.__tsid__ = a : typeof d === "string" && (h.__tsid__ = d);
			c != null && (h.__epa__ = c);
			e != null && (h.__eps__ = e);
			f != null && (h.__eep__ = f);
			g != null && (h.__gid__ = g);
			return b("XCometSearchHashtagControllerRouteBuilder").buildURL(h)
		}, [d, e])
	}
}), null);
__d("useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry", ["SearchCometHashtagExperiments", "SearchCometHashtagUtil", "gkx", "useSearchCometGlobalSERPRouteUrlBuilder", "useSearchCometGlobalTypeaheadEntityBootstrap", "useSearchCometHashtagRouteUrlBuilder"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		var c = a.shouldGenerateBootstrapEntityModuleParamsForQuery,
			d = b("useSearchCometGlobalSERPRouteUrlBuilder")(),
			e = b("useSearchCometHashtagRouteUrlBuilder")();
		a = b("useSearchCometGlobalTypeaheadEntityBootstrap")();
		var f = a.getParamsForQuery;
		return function (a) {
			var g = a.entry,
				h = a.queryString;
			a = a.typeaheadSessionID;
			var i = g.getLabel(),
				j = g.getMetaData();
			j = j == null ? void 0 : j.markers;
			var k = j != null && j.has("entity"),
				l = b("SearchCometHashtagUtil").getHashtagTag(i);
			if (b("SearchCometHashtagExperiments").hasTypeaheadRedirection() && l != null && !j.has("see_all")) return e({
				entryPointAction: "SEARCH_BOX",
				exploreEntryPoint: h === "" ? 3 : 4,
				hashtag: l,
				typeaheadSessionID: a
			});
			else {
				l = c && !k ? (h = f(i)) != null ? h : {} : {};
				k = l.highConfidenceResult;
				h = l.preloadedEntityIDs;
				l = l.preloadedEntityType;
				k = k;
				if (b("gkx")("1737296")) {
					g = g.getRawData();
					if (g.type === "keyword" && j.has("high_confidence")) {
						j = (j = g.structuredInfo) == null ? void 0 : (g = j.high_confidence_result) == null ? void 0 : g.id;
						j != null && (k = {
							id: j,
							source: "TYPEAHEAD_PAGE_MARKER"
						})
					}
				}
				return d({
					entryPointAction: "SEARCH_BOX",
					highConfidenceResult: k,
					preloadedEntityIDs: h,
					preloadedEntityType: l,
					query: i,
					typeaheadSessionID: a
				})
			}
		}
	}
}), null);
__d("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps", ["React", "useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.entry,
			d = a.queryString,
			e = b("useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry")({
				shouldGenerateBootstrapEntityModuleParamsForQuery: !1
			});
		return g.useMemo(function () {
			return {
				preventLocalNavigation: !0,
				url: e({
					entry: c,
					queryString: d
				})
			}
		}, [e, c, d])
	}
}), null);
__d("SearchCometGlobalTypeaheadEchoViewItem.react", ["CometSearchTypeaheadBaseEchoViewItem.react", "React", "useSearchCometGlobalTypeaheadKeywordViewItemLinkProps"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.entry,
			d = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
		var e = b("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps")({
			entry: c,
			queryString: d
		});
		return g.jsx(b("CometSearchTypeaheadBaseEchoViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: c,
			linkProps: e,
			queryString: d
		}))
	}
}), null);
__d("SearchCometGlobalTypeaheadNullstateKeywordViewItem.react", ["CometSearchTypeaheadBaseSurfaceRecentViewItem.react", "React", "useSearchCometGlobalTypeaheadKeywordViewItemLinkProps"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.entry,
			d = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
		var e = b("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps")({
			entry: c,
			queryString: d
		});
		return g.jsx(b("CometSearchTypeaheadBaseSurfaceRecentViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: c,
			linkProps: e,
			queryString: d
		}))
	}
}), null);
__d("SearchCometGlobalTypeaheadSeeAllViewItem.react", ["CometSearchTypeaheadBaseSeeAllViewItem.react", "React", "useSearchCometGlobalTypeaheadKeywordViewItemLinkProps"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.entry,
			d = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
		var e = b("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps")({
			entry: c,
			queryString: d
		});
		return g.jsx(b("CometSearchTypeaheadBaseSeeAllViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: c,
			linkProps: e,
			queryString: d
		}))
	}
}), null);
__d("SearchCometGlobalTypeaheadTypedKeywordViewItem.react", ["CometSearchTypeaheadBaseKeywordViewItem.react", "React", "useSearchCometGlobalTypeaheadKeywordViewItemLinkProps"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.entry,
			d = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
		var e = b("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps")({
			entry: c,
			queryString: d
		});
		return g.jsx(b("CometSearchTypeaheadBaseKeywordViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: c,
			linkProps: e,
			queryString: d
		}))
	}
}), null);
__d("SearchCometGlobalTypeaheadTypedRecentKeywordViewItem.react", ["CometSearchTypeaheadBaseRecentViewItem.react", "React", "useSearchCometGlobalTypeaheadKeywordViewItemLinkProps"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.entry,
			d = a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
		var e = b("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps")({
			entry: c,
			queryString: d
		});
		return g.jsx(b("CometSearchTypeaheadBaseRecentViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: c,
			linkProps: e,
			queryString: d
		}))
	}
}), null);
__d("cometSearchTypeaheadStructuredDirectNavKeywordViewItem.resolver", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		a = a.getMetaData();
		a = a.markers;
		return a.has("keyword") && a.has("direct_nav")
	}
}), null);
__d("cometSearchTypeaheadStructuredDisambiguationKeywordViewItem.resolver", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		a = a.getMetaData();
		a = a.markers;
		return a.has("keyword") && a.has("disambiguation")
	}
}), null);
__d("cometSearchTypeaheadStructuredHighConfidenceKeywordViewItem.resolver", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		a = a.getMetaData();
		a = a.markers;
		return a.has("keyword") && a.has("high_confidence")
	}
}), null);
__d("SearchCometGlobalTypeaheadViewItemResolver.react", ["fbt", "CometSearchTypeaheadBaseStructuredDirectNavKeywordViewItem.react", "CometSearchTypeaheadBaseStructuredDisambiguationKeywordViewItem.react", "CometSearchTypeaheadBaseStructuredHighConfidenceKeywordViewItem.react", "CometSearchTypeaheadBaseSurfaceRecentEntityViewItem.react", "CometSearchTypeaheadBaseViewItemResolver.react", "React", "SearchCometGlobalTypeaheadEchoViewItem.react", "SearchCometGlobalTypeaheadNullstateKeywordViewItem.react", "SearchCometGlobalTypeaheadSeeAllViewItem.react", "SearchCometGlobalTypeaheadTypedKeywordViewItem.react", "SearchCometGlobalTypeaheadTypedRecentKeywordViewItem.react", "cometSearchTypeaheadEchoViewItem.resolver", "cometSearchTypeaheadKeywordViewItem.resolver", "cometSearchTypeaheadRecentEntityViewItem.resolver", "cometSearchTypeaheadRecentKeywordViewItem.resolver", "cometSearchTypeaheadRecentViewItem.resolver", "cometSearchTypeaheadSeeAllViewItem.resolver", "cometSearchTypeaheadStructuredDirectNavKeywordViewItem.resolver", "cometSearchTypeaheadStructuredDisambiguationKeywordViewItem.resolver", "cometSearchTypeaheadStructuredHighConfidenceKeywordViewItem.resolver", "qex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.children;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
		var d = h.useMemo(function () {
			return i()
		}, []);
		return h.jsx(b("CometSearchTypeaheadBaseViewItemResolver.react"), babelHelpers["extends"]({}, a, {
			entryMappings: d,
			children: c
		}))
	}

	function i() {
		var a = b("qex")._("1734201") || !1,
			c = b("qex")._("1734202") || !1,
			d = b("qex")._("1747778") || !1;
		return [a ? {
			resolver: b("cometSearchTypeaheadStructuredDirectNavKeywordViewItem.resolver"),
			viewItem: b("CometSearchTypeaheadBaseStructuredDirectNavKeywordViewItem.react")
		} : null, c ? {
			resolver: b("cometSearchTypeaheadStructuredHighConfidenceKeywordViewItem.resolver"),
			viewItem: b("CometSearchTypeaheadBaseStructuredHighConfidenceKeywordViewItem.react")
		} : null, d ? {
			resolver: b("cometSearchTypeaheadStructuredDisambiguationKeywordViewItem.resolver"),
			viewItem: b("CometSearchTypeaheadBaseStructuredDisambiguationKeywordViewItem.react")
		} : null, {
			resolver: b("cometSearchTypeaheadEchoViewItem.resolver"),
			viewItem: b("SearchCometGlobalTypeaheadEchoViewItem.react")
		}, {
			resolver: b("cometSearchTypeaheadSeeAllViewItem.resolver"),
			viewItem: b("SearchCometGlobalTypeaheadSeeAllViewItem.react"),
			viewItemProps: {
				placeholderBuilder: j
			}
		}, {
			resolver: b("cometSearchTypeaheadRecentKeywordViewItem.resolver"),
			viewItem: b("SearchCometGlobalTypeaheadTypedRecentKeywordViewItem.react")
		}, {
			resolver: b("cometSearchTypeaheadRecentEntityViewItem.resolver"),
			viewItem: b("CometSearchTypeaheadBaseSurfaceRecentEntityViewItem.react")
		}, {
			resolver: b("cometSearchTypeaheadRecentViewItem.resolver"),
			viewItem: b("SearchCometGlobalTypeaheadNullstateKeywordViewItem.react")
		}, {
			resolver: b("cometSearchTypeaheadKeywordViewItem.resolver"),
			viewItem: b("SearchCometGlobalTypeaheadTypedKeywordViewItem.react")
		}].filter(Boolean)
	}

	function j(a) {
		return g._("T\u00ecm ki\u1ebfm {=[query]}", [g._param("=[query]", h.jsx("strong", {
			children: g._("{query}", [g._param("query", a)])
		}))])
	}
}), null);
__d("SearchCometGlobalTypeaheadViewItem.react", ["React", "SearchCometGlobalTypeaheadViewItemResolver.react"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.entry,
			d = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
		return g.jsx(b("SearchCometGlobalTypeaheadViewItemResolver.react"), {
			entry: c,
			children: function (a) {
				return g.jsx(a, babelHelpers["extends"]({}, d, {
					entry: c
				}))
			}
		})
	}
}), null);
__d("SearchCometGlobalTypeaheadViewStrategy.react", ["fbt", "CometSearchTypeaheadBaseViewList.react", "CometSearchTypeaheadBaseViewRecentEmptyState.react", "FocusInertRegion.react", "React", "SearchCometGlobalTypeaheadViewItem.react", "SearchCoronavirusGlobalTypeaheadStrings", "TetraUnitHeader.react", "focusScopeQueries", "gkx", "stylex", "XCometActivityLogControllerRouteBuilder"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.entries;
		a.extraViewProps;
		var d = a.highlightedEntry,
			e = a.onAbandonTypeahead_DO_NOT_USE,
			f = a.queryString,
			i = babelHelpers.objectWithoutPropertiesLoose(a, ["entries", "extraViewProps", "highlightedEntry", "onAbandonTypeahead_DO_NOT_USE", "queryString"]);
		a = b("XCometActivityLogControllerRouteBuilder");
		a = a.buildURL({
			category_key: "SEARCH",
			log_filter: "search",
			vanity: "me"
		});
		var j = f === "" && c.length > 0,
			k = c.some(function (a) {
				return a.getMetaData().markers.has("alert_coronavirus")
			}),
			l = null,
			m = [].concat(c);
		b("gkx")("1351659") && f === "" && k && (l = m.shift());
		return h.jsxs(b("FocusInertRegion.react"), {
			focusQuery: b("focusScopeQueries").tabbableScopeQuery,
			children: [l && h.jsxs(h.Fragment, {
				children: [h.jsx("div", {
					className: "h676nmdw oi9244e8 bi6gxh9e",
					children: h.jsx(b("TetraUnitHeader.react"), {
						headline: b("SearchCoronavirusGlobalTypeaheadStrings").GLOBAL_TYPEAHEAD_SECTION_HEADER,
						level: 3,
						onActionPressIn: e,
						paddingHorizontal: 0
					})
				}), h.jsx(b("CometSearchTypeaheadBaseViewList.react"), {
					entries: l ? [l] : [],
					highlightedEntry: d,
					children: function (a, c) {
						return h.createElement(b("SearchCometGlobalTypeaheadViewItem.react"), babelHelpers["extends"]({}, i, {
							entry: a,
							isActive: c,
							key: a.getKey(),
							queryString: f
						}))
					}
				})]
			}), j && m.length > 0 ? h.jsx("div", {
				className: "h676nmdw oi9244e8 bi6gxh9e",
				children: h.jsx(b("TetraUnitHeader.react"), {
					action: g._("Ch\u1ec9nh s\u1eeda"),
					actionLinkProps: {
						url: a
					},
					headline: g._("T\u00ecm ki\u1ebfm g\u1ea7n \u0111\u00e2y"),
					level: 3,
					onActionPress: e,
					paddingHorizontal: 0
				})
			}) : null, h.jsx(b("CometSearchTypeaheadBaseViewList.react"), {
				entries: m,
				highlightedEntry: d,
				children: function (a, c) {
					return h.createElement(b("SearchCometGlobalTypeaheadViewItem.react"), babelHelpers["extends"]({}, i, {
						entry: a,
						isActive: c,
						key: a.getKey(),
						queryString: f
					}))
				}
			}), c.length === 0 && h.jsx(b("CometSearchTypeaheadBaseViewRecentEmptyState.react"), {})]
		})
	}
}), null);
__d("searchCometGlobalTypeahead.config", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = 8;
	b = {
		dataSources: {
			bootstrapKeywordsDataSourceParams: {
				queryVariables: {
					first: 2e3
				}
			},
			keywordDataSourceParams: {
				queryVariables: {
					fetch_count: a,
					fetch_mode: "blended"
				}
			},
			recentDataSourceParams: {
				queryVariables: {
					filter: "all",
					first: a * 2
				}
			}
		},
		logging: {
			sessionContext: "SEARCH_GLOBAL"
		},
		view: {
			renderLimit: a
		}
	};
	e.exports = b
}), null);
__d("withSearchCometGlobalTypeaheadCleanStateOnEntrySelection", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		return g.forwardRef(function (b, c) {
			var d = b.onChange,
				e = b.onPressEntry,
				f = b.shouldQueryStringUpdateFromSelectedEntryOnClick;
			f = f === void 0 ? !1 : f;
			b = babelHelpers.objectWithoutPropertiesLoose(b, ["onChange", "onPressEntry", "shouldQueryStringUpdateFromSelectedEntryOnClick"]);
			var h = g.useCallback(function (a) {
				var b = a.getRawData();
				b = b.type;
				var c = a.getMetaData();
				c = c.markers;
				b = b === "recent" && c.has("entity") || c.has("direct_nav");
				d(b ? "" : a.getLabel());
				e && e(a)
			}, [d, e]);
			return g.jsx(a, babelHelpers["extends"]({}, b, {
				onChange: d,
				onPressEntry: h,
				ref: c,
				shouldQueryStringUpdateFromSelectedEntryOnClick: f
			}))
		})
	}
}), null);
__d("withSearchCometGlobalTypeaheadFocusKeyboardShortcut", ["React", "cometGetKeyCommandConfig", "useCometSearchInternalTypeaheadStateDispatcher", "useCometSearchTypeaheadBaseInputRefs", "useGlobalKeyCommands"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		return g.forwardRef(function (c, d) {
			c = babelHelpers["extends"]({}, c);
			d = b("useCometSearchTypeaheadBaseInputRefs")(d);
			var e = d.composedRef,
				f = d.inputRef;
			d = b("useCometSearchInternalTypeaheadStateDispatcher")();
			var h = d.dispatchIsOpened,
				i = g.useCallback(function () {
					f.current != null && (f.current.focus(), h(!0))
				}, [f, h]);
			d = g.useMemo(function () {
				return [b("cometGetKeyCommandConfig")("global", "search", i)]
			}, [i]);
			b("useGlobalKeyCommands")(d);
			return g.jsx(a, babelHelpers["extends"]({}, c, {
				ref: e
			}))
		})
	}
}), null);
__d("SearchCometGlobalTypeahead.react", ["fbt", "Actor", 
	"CometErrorBoundary.react", "CometRelay", 
	"CometSearchTypeaheadBaseErrorFallback.react", 
	"CometTypeahead.react", "Random", "React", 
	"SearchCometGlobalTypeaheadDataSource", 
	"SearchCometGlobalTypeaheadDataSourceWithCoronaVirusAlert",
	 "SearchCometGlobalTypeaheadInputStrategy.react", 
	 "SearchCometGlobalTypeaheadLayoutContextualStrategy.react",
	  "SearchCometGlobalTypeaheadViewStrategy.react", "SearchCometHashtagExperiments", 
	  "SearchCometHashtagUtil", "SearchCometResultsForcedOptInEventLogger", "gkx", 
	  "requireCond", "searchCometGlobalTypeahead.config", "searchCometTypeaheadODSLogFocusEvent",
	   "useCometSearchRecentDataSourceContextDecorator", "useCometSearchTypeaheadBaseNavigate",
	    "useCometSearchTypeaheadLoggingProvider", "useCometSearchTypeaheadTraceProvider",
	     "useCometTypeaheadBaseStateQueryString", "useSearchCometGlobalSERPRouteUrlBuilder", 
	     "useSearchCometGlobalTypeaheadEntityBootstrap",
	      "useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry",
	       "useSearchCometHashtagRouteUrlBuilder", "useStable", 
	       "withSearchCometGlobalTypeaheadCleanStateOnEntrySelection",
	        "withSearchCometGlobalTypeaheadFocusKeyboardShortcut",
	         "withSearchCometTypeaheadBaseNavigationDecorator",
	         "withSearchCometTypeaheadTraceEndReasonDecorator", "cr:1788640"], (function (a, b, c, d, e, f, g) {
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
				b("SearchCometResultsForcedOptInEventLogger").log("ta_focus", !0);
				w();
				e && e()
			}, [w, e]),
			A = h.useCallback(function (a) {
				b("SearchCometResultsForcedOptInEventLogger").log("ta_click", !0);
				var c = a.getMetaData();
				c = c == null ? void 0 : c.markers;
				var d = c != null && c.has("entity");
				c = c != null && c.has("direct_nav");
				x();
				var e = l({
					entry: a,
					queryString: k,
					typeaheadSessionID: r.getSessionID()
				});
				a = j(a, e, d, c);
				o(a, d ? "pushview" : "tabview")
			}, [x, r, o, k, l]),
			B = h.useCallback(function (a) {
				var c;
				b("SearchCometResultsForcedOptInEventLogger").log("ta_click", !0);
				c = (c = v(a)) != null ? c : {};
				var d = c.preloadedEntityIDs;
				c = c.preloadedEntityType;
				x();
				var e = b("SearchCometHashtagUtil").getHashtagTag(a);
				b("SearchCometHashtagExperiments").hasTypeaheadRedirection() && e != null ? e = n({
					entryPointAction: "SEARCH_BOX",
					exploreEntryPoint: k === "" ? 3 : 4,
					hashtag: e,
					typeaheadSessionID: r.getSessionID()
				}) : e = m({
					entryPointAction: "SEARCH_BOX",
					preloadedEntityIDs: d,
					preloadedEntityType: c,
					query: a,
					typeaheadSessionID: r.getSessionID()
				});
				o(e)
			}, [v, n, x, r, o, k, m]),
			C = b("useStable")(function () {
				return b("withSearchCometTypeaheadTraceEndReasonDecorator")(b("withSearchCometGlobalTypeaheadCleanStateOnEntrySelection")(b("withSearchCometTypeaheadBaseNavigationDecorator")(b("CometTypeahead.react"))))
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
__d("useCometWatchBadgeCount", ["CometRelay", "gkx", "useTopTabBadgeCount", "useCometWatchBadgeCountQuery.graphql"], (function (a, b, c, d, e, f) {
	"use strict";
	var g;

	function a() {
		var a = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("useCometWatchBadgeCountQuery.graphql"), {});
		return b("useTopTabBadgeCount")(a == null ? void 0 : a.viewer)
	}
	c = b("gkx")("1273809") ? a : function () {
		return 0
	};
	e.exports = c
}), null);
__d("CometWatchBadgeCount.react", ["CometPlaceholder.react", "CometTopNavTabBadge.react", "React", "useCometWatchBadgeCount"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a) {
		var c = b("useCometWatchBadgeCount")();
		return g.jsx(b("CometTopNavTabBadge.react"), babelHelpers["extends"]({}, a, {
			value: c
		}))
	}

	function a(a) {
		return g.jsx(b("CometPlaceholder.react"), {
			fallback: null,
			children: g.jsx(h, babelHelpers["extends"]({}, a))
		})
	}
}), null);
__d("useSubscriptionValue", ["React"], (function (a, b, c, d, e, f) {
	e.exports = a;
	var g = b("React");

	function a(a) {
		var b = a.getCurrentValue,
			c = a.subscribe;
		a = g.useState(function () {
			return b()
		});
		var d = a[0],
			e = a[1],
			f = g.useCallback(function () {
				e(b)
			}, [b]);
		a = g.useState(function () {
			return b
		});
		var h = a[0];
		a = a[1];
		h !== b && (a(function () {
			return b
		}), f());
		g.useEffect(function () {
			var a = !1,
				b = function () {
					a || f()
				},
				d = c(b);
			f();
			return function () {
				a = !0, d()
			}
		}, [f, c]);
		return d
	}
}), null);