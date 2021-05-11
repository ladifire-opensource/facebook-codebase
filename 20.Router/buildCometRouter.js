__d("buildCometRouter", ["fbt", "BanzaiODS", "Bootloader", "ClientConsistency", 
	"CometClientConsistency", "CometHeroLogging", "CometNavigationTracing", 
	"CometProductAttribution", "CometRelayEnvironmentFactory", "CometRouteStore",
	 "CometTimeSpentNavigation", "CometVisitationManager", "ConstUriUtils", "CurrentUser", 
	 "ExecutionEnvironment", "FBLogger", "JSScheduler", "JSTracing", "MaintainedRouteConfig",
	  "QPLUserFlow", "Random", "Run", "buildCometErrorRoute", "clearTimeout", "cometRouterReducer", 
	  "createCometRelayEntryPointEnvironmentProvider", "extractTimeSpentFromCometRoute",
	   "getCometRouteActor", "getTimeSpentDataFromConfig", "getTopMostRoute", "getTopMostRouteInfo",
	    "gkx", "goForceFullPageRedirectTo", "isCometRouterUrl", "isPushViewRouteType", 
	    "makeCometRouteEntryPointContainer", "normalizeCometRouterUrl", "performance", 
	    "performanceNow", "persistentQueryParams", "promiseDone", "qex", "recoverableViolation",
	     "relay-experimental/prepareEntryPoint_DEPRECATED", "removeFromArray", "requireDeferred",
	      "setTimeout", "unrecoverableViolation", "uuid", "withoutKey"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h, i, j = b("requireDeferred")("CometRelayEF"),
		k = ["__cft__", "__tn__", "fnr_t", "sw_fnr_id"],
		l = {
			addPushView: "push",
			loadHosted: "hosted",
			loadTab: "tab",
			replacePushView: "push"
		},
		m = 2.5 * 24 * 60 * 60 * 1e3,
		n = Date.now(),
		o = [],
		p = ["/ads", "/help"],
		q = 50,
		r = 500,
		s = 6e5,
		t = (b("ExecutionEnvironment").canUseDOM ? (c = window) == null ? void 0 : (d = c.history) == null ? void 0 : (f = d.state) == null ? void 0 : f.key : null) || "initial";

	function u(a) {
		switch (a) {
			case "unmatched":
				return 364;
			case "history_back_failed":
				return 309;
			case "navigation_limit":
				return 59;
			case "session_time_limit":
				return 27;
			case "404":
				return 11;
			default:
				return 1
		}
	}

	function v(a, b) {
		b = b != null ? k.concat(b) : k;
		return a.removeQueryParams(b)
	}

	function w(a) {
		return typeof a === "string" ? !0 : !((a == null ? void 0 : a.routeType) === "media_viewer" || (a == null ? void 0 : a.routeType) === "creation_flow")
	}
	var x = [];

	function a(a, c, d) {
		var e = !1,
			f = {},
			k = {},
			y = {},
			z = null,
			A = {},
			B = null,
			C = null,
			D = null,
			E = {
				loading: !1
			},
			F = 0,
			G = null;

		function H(a) {
			var c = a.getQueryParams();
			y = {};
			b("persistentQueryParams").forEach(function (a) {
				if (a === "sk") return;
				if (c.has(a)) {
					var b = c.get(a);
					y[a] = b
				}
			})
		}

		function I(a, c, d) {
			b("gkx")("708253") || b("recoverableViolation")("CometRouter should only be used in Comet! Using it in Blue may cause unexpected behavior.", "comet_infra");
			if (b("ExecutionEnvironment").canUseDOM) {
				"scrollRestoration" in window.history && (window.history.scrollRestoration = "manual");
				var e = "",
					f = b("ConstUriUtils").getUri(window.location.href);
				if (f != null) {
					f = v(f, a.stripParams);
					f != null && (H(f), e = f.toString())
				}
				window.history.replaceState({
					key: t
				}, null, e);
				window.addEventListener("beforeunload", Q)
			}
			f = typeof (h || (h = b("performance"))).getEntriesByType === "function" ? (h || (h = b("performance"))).getEntriesByType("navigation")[0] : null;
			f = (f == null ? void 0 : f.type) === "reload" || ((e = (h || (h = b("performance"))).navigation) == null ? void 0 : e.type) === "reload" ? "reload" : "initial";
			e = a.tabKey != null && ((e = b("MaintainedRouteConfig")[a.tabKey]) == null ? void 0 : e.maintained);
			var g = null;
			if (b("gkx")("1621604") && a.rootView.entryPoint) {
				var i;
				g = b("makeCometRouteEntryPointContainer")(a, a.rootView, d, {}, null);
				(i = g) == null ? void 0 : i.loadIfNeeded()
			}
			L({
				main: {
					entryPointContainer: g,
					mainScrollKey: e ? Date.now() : null,
					mutableState: {},
					navigationInteractionID: b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(c),
					productAttribution: b("CometProductAttribution").getProductAttributionFromRoute(a, "via_cold_start"),
					referrer: {
						navigationType: f
					},
					route: a,
					timeSpentMetaData: d
				},
				routeKey: b("ExecutionEnvironment").canUseDOM ? t : "initial_ssr"
			})
		}

		function J() {
			var a = z;
			if (!a) throw b("unrecoverableViolation")("No route state before first use... did you forget to init?", "comet_infra");
			return a
		}
		var K = {};

		function L(a) {
			var c = b("ExecutionEnvironment").canUseDOM ? window.history.state : null;
			c = (c == null ? void 0 : c.key) || t;
			f[c] = a;
			var d = z;
			z = a;
			B = c;
			var e = d == null ? void 0 : d.main.route.tabKey;
			a = z.main.route.tabKey;
			if (a !== e) {
				a != null && A[a] && (A = b("withoutKey")(A, a), K[a] && (b("clearTimeout")(K[a]), delete K[a]));
				if (e != null && d != null) {
					c = b("MaintainedRouteConfig")[e];
					if ((c == null ? void 0 : c.maintained) && !A[e]) {
						A = babelHelpers["extends"]({}, A, (a = {}, a[e] = d.main, a));
						c.maintainRouteForMs != null && (K[e] = b("setTimeout")(function () {
							delete K[e], A = b("withoutKey")(A, e), P()
						}, c.maintainRouteForMs))
					}
				}
			}
		}
		var M = [],
			N = null,
			O = !1;

		function P() {
			M.forEach(function (a) {
				return a()
			})
		}

		function Q(a) {
			var b = ra();
			if (b != null) {
				a.preventDefault();
				a.returnValue = b.warnMessage;
				return b.warnMessage
			}
		}

		function R() {
			b("ExecutionEnvironment").canUseDOM && window.addEventListener("popstate", T)
		}

		function S(a, c) {
			var d = a.hosted,
				e = a.pushViewStack,
				f = a.main;
			b("gkx")("1488892") && (f = babelHelpers["extends"]({}, f, {
				navigationInteractionID: b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart()
			}));
			if (e != null && e.length > 0) {
				var g = [].concat(e);
				g[e.length - 1] = babelHelpers["extends"]({}, e[e.length - 1], {
					referrer: babelHelpers["extends"]({}, g[e.length - 1].referrer, {
						navigationType: c
					})
				});
				return babelHelpers["extends"]({}, a, {
					main: f,
					pushViewStack: g
				})
			} else if (d != null) return babelHelpers["extends"]({}, a, {
				hosted: babelHelpers["extends"]({}, d, {
					referrer: babelHelpers["extends"]({}, d.referrer, {
						navigationType: c
					})
				}),
				main: f
			});
			else return babelHelpers["extends"]({}, a, {
				main: babelHelpers["extends"]({}, f, {
					referrer: babelHelpers["extends"]({}, f.referrer, {
						navigationType: c
					})
				})
			})
		}

		function T() {
			G = null;
			var a = b("ExecutionEnvironment").canUseDOM ? window.history.state : null,
				c = a == null ? void 0 : a.key;
			if (c == null || !f[c]) {
				c == null;
				W.go(window.location.pathname + window.location.search, {
					navigationType: "popstate",
					replace: !0,
					target: "self"
				});
				return
			}
			a = f[c];
			var d = S(a, "popstate");
			k[c] && (d = babelHelpers["extends"]({}, d, {
				focusReturnRef: k[c]
			}));
			var e = b("getTopMostRoute")(d),
				g = b("getTopMostRouteInfo")(d),
				h = function () {
					b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking, function () {
						var a;
						b("CometNavigationTracing").traceNavigation(e.url, e, (i || (i = b("performanceNow")))(), function (a) {
							var b;
							e.tabKey != null && A[e.tabKey] && a.addMetadata("maintained", "true");
							z && z.pushViewStack && (d.pushViewStack == null || z.pushViewStack.length > d.pushViewStack.length) && a.addMetadata("closed_push_view", 1);
							(b = d.main.entryPointContainer) == null ? void 0 : b.loadIfNeeded();
							(b = d.hosted) == null ? void 0 : (b = b.entryPointContainer) == null ? void 0 : b.loadIfNeeded();
							(b = d.pushViewStack) == null ? void 0 : b.forEach(function (a) {
								return a == null ? void 0 : (a = a.entryPointContainer) == null ? void 0 : a.loadIfNeeded()
							});
							a.addMetadata("navigation_event", "onPopState");
							a.addMetadata("navigation_source", "popState");
							V(d);
							if (c !== t) {
								a = g == null ? void 0 : (b = g.referrer) == null ? void 0 : b.actorID;
								ma(e.url, e, a, c, function (a) {
									W.go(a.url, {
										navigationType: "popstate",
										replace: !0,
										target: "self"
									})
								})
							}
						}, b("gkx")("1488892") ? (a = d.main.navigationInteractionID) != null ? a : void 0 : void 0)
					})
				};
			if (B != null) {
				a = sa(a);
				if (a != null && N != null) {
					var j = function () {
						window.history.pushState({
							key: B
						}, null, C)
					};
					return na(a, j, h)
				}
			}
			h()
		}

		function U(a) {
			var b = E.loading && !E.canceledRef.canceled ? E.canceledRef : {
				canceled: !1
			};
			E = babelHelpers["extends"]({
				cancel: function () {
					b.canceled = !0
				},
				canceledRef: b,
				loading: !0
			}, a);
			P();
			return b
		}

		function V(a, c) {
			b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking, function () {
				U({
					nextState: a
				}), b("JSScheduler").next_DO_NOT_USE(function () {
					D && (D.cancel(), D = null);
					E = {
						loading: !1
					};
					L(a);
					P();
					c && c(!0);
					b("CometVisitationManager").updateFromRouterState(a);
					if (b("qex")._("1619118") === !0) {
						var d, e = [];
						d = (d = b("qex")._("1637694")) != null ? d : 0;
						for (var f = 0; f < d; f++) e[f] = 0;
						o.push(e)
					}
					f = b("getTopMostRoute")(a);
					d = b("getTopMostRouteInfo")(a);
					b("CometTimeSpentNavigation").changePath(b("extractTimeSpentFromCometRoute")(f), d.productAttribution, d.timeSpentMetaData)
				})
			})
		}

		function aa(a) {
			return a.pushViewStack && a.pushViewStack.length ? a.pushViewStack[a.pushViewStack.length - 1] : a.main
		}
		var ba = function (a) {
				return function (b, c, d) {
					d === void 0 && (d = {
						replace: !1
					});
					return ga(b, c, d, a)
				}
			},
			ca = function (a) {
				return function (b) {
					return fa(babelHelpers["extends"]({}, a, b))
				}
			},
			da = function (a) {
				return function (b, c) {
					return ua(b, c, a)
				}
			},
			ea = function (a) {
				return function (b, c) {
					c === void 0 && (c = {
						navigationType: "navigation",
						replace: !1
					});
					return xa(b, c, a)
				}
			},
			fa = function (a) {
				a === void 0 && (a = {
					actorID: b("CurrentUser").getID(),
					from: "rootView"
				});
				var c = ba(a);
				return {
					go: function (a, b) {
						return c(a, null, b)
					},
					goBack: pa,
					goTo: function (a, b) {
						return c(a.url, a, b)
					},
					popPushView: qa,
					prefetchRouteQueries: ea(a),
					preloadRoute: da(a),
					withContext: ca(a)
				}
			},
			W = fa();

		function ga(a, c, d, e) {
			d === void 0 && (d = {
				replace: !1
			});
			var f = b("normalizeCometRouterUrl")(a),
				g = s++;
			b("QPLUserFlow").start(53608451, {
				instanceKey: g
			});
			b("CometNavigationTracing").traceNavigation(f, c, d.eventTimestamp, function (a) {
				a.onComplete(function () {
					b("QPLUserFlow").endSuccess(53608451, {
						instanceKey: g
					})
				}), la(f, c, d, e, a)
			})
		}

		function X(a, c, d, e) {
			e = (e = e) != null ? e : J();
			var f = aa(e);
			f = f.route;
			d = d;
			d == null && (d = "rootView");
			var g = b("isPushViewRouteType")(a.routeType);
			if (c === "content")
				if (f.isCometRootContainer !== !0) {
					var h;
					b("recoverableViolation")("Asked for a target content but the current view isn't a container. From URL: " + f.url + " trace policy: " + ((h = f.tracePolicy) != null ? h : "") + ", To: " + a.url + " trace policy: " + ((h = a.tracePolicy) != null ? h : ""), "comet_infra")
				} else if (!a.hostableView) {
				b("recoverableViolation")("Asked for a target content but the to route doesnt support a content view. From URL: " + f.url + " trace policy: " + ((h = f.tracePolicy) != null ? h : "") + ", To: " + a.url + " trace policy: " + ((f = a.tracePolicy) != null ? f : ""), "comet_infra")
			} else return {
				action: "loadHosted",
				view: a.hostableView
			};
			else if (c === "self")
				if (d === "hostedView") return {
					action: "loadHosted",
					view: a.hostableView
				};
				else if (d === "pushView" && g) return {
				action: "replacePushView",
				view: a.rootView
			};
			else return {
				action: "loadTab",
				view: a.rootView
			};
			if (g) {
				if (a.replacePushViewOfSameTracePolicy === !0 && e.pushViewStack) {
					h = e.pushViewStack[e.pushViewStack.length - 1];
					if ((h == null ? void 0 : h.route.tracePolicy) === a.tracePolicy) return {
						action: "replacePushView",
						view: a.rootView
					}
				}
				return {
					action: "addPushView",
					view: a.rootView
				}
			} else return {
				action: "loadTab",
				view: a.rootView
			}
		}

		function ha(a) {
			if (Object.keys(y).length === 0) return a;
			var c = b("ConstUriUtils").getUri(a);
			if (c == null) return a;
			c = c.addQueryParams(new Map(Object.entries(y)));
			return c == null ? a : c.toString()
		}

		function Y(a, c) {
			if (b("isCometRouterUrl")(a)) {
				if (!p.some(function (b) {
						return a.startsWith(b)
					})) {
					var d = u(c);
					b("Random").coinflip(d) && b("BanzaiODS").bumpEntityKey(2994, "comet_router", "force_reload." + c, d)
				}
				b("goForceFullPageRedirectTo")(a)
			}
		}

		function ia(a) {
			a = b("normalizeCometRouterUrl")(a.url);
			var c = b("getTopMostRoute")(J());
			c = b("normalizeCometRouterUrl")(c.url);
			return a === c
		}

		function ja(a, c, d) {
			var e = J(),
				f = b("getTopMostRoute")(e);
			f = b("normalizeCometRouterUrl")(f.url);
			var g = c.actorID;
			c = c.from;
			var h = d.replace || !1,
				i = d.target;
			a === f && (h = !0, e.pushViewStack != null && (i = "self", c = "pushView"));
			return babelHelpers["extends"]({}, d, {
				dispatchedFrom: c,
				previousActorID: g,
				replace: h,
				target: i
			})
		}

		function ka(a, c, d, e, f) {
			d = b("buildCometErrorRoute")(d);
			a = b("CometProductAttribution").getRouteInfoForDispatch(a, f);
			return {
				main: babelHelpers["extends"]({
					mutableState: {},
					productAttribution: a.productAttribution,
					route: d
				}, e),
				routeKey: c
			}
		}

		function la(a, c, d, e, g) {
			var h = b("ConstUriUtils").getUri(a);
			h != null && h.getPath() === "/undefined" && b("recoverableViolation")("/undefined was passed a url to the Comet Router. Please make sure you're building a URL using RouteBuilders", "comet_infra");
			b("isCometRouterUrl")(a) || b("recoverableViolation")("Cannot use Comet Router to navigate to a non-router URL", "comet_infra");
			if (O) return;
			c = (h = c) != null ? h : b("CometRouteStore").getRoute(a);
			h = Date.now() - n > m;
			var i = F >= q,
				j = null;
			b("ClientConsistency").hasPendingClientActions() && w(c) ? (j = "multiple_revs", b("CometClientConsistency").logRefreshOnNav()) : i ? j = "navigation_limit" : h && (j = "session_time_limit");
			if (j != null) return Y(a, j);
			var o = d;
			E.loading && (E.cancel(), o = babelHelpers["extends"]({}, o, {
				replace: !0
			}));
			var p = babelHelpers["extends"]({}, J(), {
				focusReturnRef: null
			});
			o = ja(a, e, o);
			i = o;
			var r = i.dispatchedFrom,
				s = i.force;
			h = i.linkRef;
			var t = i.navigationType,
				u = i.onNavigate,
				x = i.passthroughProps,
				y = i.previousActorID,
				z = i.productAttributionUpdateProps;
			j = i.replace;
			var G = j === void 0 ? !1 : j,
				H = i.target,
				I = i.traceParams,
				K = "state-key-" + Date.now(),
				L = {
					key: K
				};

			function M(a, c) {
				a = ha(a);
				var d = "",
					e = b("ConstUriUtils").getUri(a);
				if (e != null) {
					e = v(e, c);
					d = e != null ? e.toString() : ""
				}
				G ? window.history.replaceState(L, null, d) : window.history.pushState(L, null, d);
				C = a
			}
			h != null && B != null && (k[B] = h);
			f[K] = p;
			if (c != null && c !== "UNMATCHED_TOKEN") T(c, a), Q(c);
			else {
				g.addMetadata("unfetched_rd", 1);
				var P = U({
					nextUrl: a
				});
				b("promiseDone")(b("CometRouteStore").fetchForNavigation(a, y), b("JSTracing").wrap(function (b) {
					var c = b.route;
					!P.canceled ? c === "UNMATCHED_TOKEN" ? (Y(a, "unmatched"), u && u(!0)) : (T(c, a, !1, b.initialTimeSpentMetaData), Q(c)) : u && u(!1)
				}, "CometRouteStore:fetchForNavigation"), function (c) {
					!P.canceled ? T(b("buildCometErrorRoute")(a), a) : u && u(!1), b("FBLogger")("CometRouter").catching(c).mustfix("An error occured fetching a comet route for url: %s", a)
				})
			}

			function Q(b) {
				ma(a, b, y, K, function (b) {
					return T(b, a, !0)
				})
			}

			function R(a, c, d) {
				if (a != null) {
					c = b("ConstUriUtils").getUri(c.url);
					c = c && c.setSecure(!0);
					c = c && c.setDomain(a.getDomain());
					a = c && c.setSubDomain(d);
					a != null && b("goForceFullPageRedirectTo")(a.toString())
				}
			}

			function S(a) {
				var c, d = b("ConstUriUtils").getUri(window.location.href);
				c = (c = d && d.getSubDomain()) != null ? c : "";
				a.useSecureSubdomain === !0 && c !== "secure" ? R(d, a, "secure") : a.useSecureSubdomain !== !0 && c === "secure" && R(d, a, "www")
			}

			function T(a, c, d, f) {
				d === void 0 && (d = !1);
				S(a);
				f = (f = f) != null ? f : b("getTimeSpentDataFromConfig")(a, x, b("getTopMostRoute")(J()), t);
				g.setTracePolicy(a.tracePolicy);
				var h = X(a, H, r),
					i = h.view,
					j = null;
				if (i) {
					if (b("gkx")("1621604") && i.entryPoint) {
						var k;
						k = (k = o.prefetcher) == null ? void 0 : k.usePrefetchedEntrypointForRouting();
						if (k != null) j = k;
						else {
							j = b("makeCometRouteEntryPointContainer")(a, i, f, x, y);
							if (h.action === "loadTab" && p.main.entryPointContainer && j && j.getHash() != null && j.getHash() === ((k = p.main.entryPointContainer) == null ? void 0 : k.getHash())) j = p.main.entryPointContainer;
							else if (h.action === "loadTab" && a.tabKey != null && A[a.tabKey] != null && A[a.tabKey].entryPointContainer != null && j && j.getHash() != null && ((k = A[a.tabKey].entryPointContainer) == null ? void 0 : k.getHash()) === j.getHash()) j = A[a.tabKey].entryPointContainer;
							else if (D != null && j && j.getHash() != null) {
								k = (k = D) == null ? void 0 : k.usePrefetchedEntrypointForRouting();
								(k == null ? void 0 : k.getHash()) === j.getHash() ? j = k : k == null ? void 0 : k.dispose()
							}
						}(k = j) == null ? void 0 : k.loadIfNeeded()
					} else wa(a, i, f, x, y);
					i.allResources && i.allResources.forEach(function (a) {
						a.preload()
					});
					b("gkx")("1823475") && b("Bootloader").forceFlush()
				}
				k = ia(a);
				k && g.addMetadata("refresh", 1);
				i = a.tabKey;
				i != null && A[i] != null && g.addMetadata("maintained", "true");
				var m = null;
				if (h.action === "loadTab" && i != null) {
					A[i] != null ? m = A[i].mainScrollKey : p.main.route.tabKey === i && p.main.mainScrollKey != null ? m = p.main.mainScrollKey : ((i = b("MaintainedRouteConfig")[i]) == null ? void 0 : i.maintained) && (m = Date.now())
				}
				m = {
					entryPointContainer: j,
					mainScrollKey: m,
					navigationInteractionID: b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(g.getTraceId()),
					passthroughProps: x,
					referrer: {
						actorID: e.actorID,
						navigationType: (i = t) != null ? i : "navigation",
						tracePolicy: (j = e.tracePolicy) != null ? j : "comet.app"
					},
					refreshKey: k ? "" + Date.now() : null,
					timeSpentMetaData: f
				};
				var n, q = a.canonicalUrl != null && a.canonicalUrl !== "" ? a.canonicalUrl : (i = a.url) != null ? i : c;
				try {
					n = b("cometRouterReducer")(K, p, {
						__type: h.action,
						payload: {
							dispatchedFrom: r,
							productAttributionUpdateProps: z,
							routeInfoExtras: m,
							to: a,
							wasHistoryReplaced: G || d
						}
					})
				} catch (a) {
					b("FBLogger")("CometRouter").catching(a).mustfix("Error determining router state, redirecting to Comet Error page"), n = ka(p, K, q, m, r)
				}
				j = l[h.action];
				g.addMetadata("view_type", j);
				if (j === "hosted") {
					g.addMetadata("host_route", (k = n.main.route.tracePolicy) != null ? k : "")
				}
				for (var v in I) g.addMetadata(v, I[v]);
				f = function () {
					H !== "self" && w(a) && F++, M(q, a.stripParams), V(n, u)
				};
				i = sa(n, s);
				if (s !== !0 && i != null && N != null) {
					c = function () {
						u && u(!1)
					};
					g.addMetadata("onbeforeunload_dialog_triggered", 1);
					return na(i, c, f)
				}
				f()
			}
		}

		function ma(a, c, d, e, f) {
			b("promiseDone")(b("CometRouteStore").fetchForValidation(c, a, d), function (b) {
				var c = e !== B;
				if (c || b == null) return;
				return b === "UNMATCHED_TOKEN" ? Y(a, "unmatched") : f(b)
			}, function (c) {
				if (c.errorRawTransportStatus === 404 || c.errorType === "HTTP 404") return Y(a, "404");
				b("FBLogger")("CometRouter").catching(c).warn('Error notifying server on navigation: type="' + c.errorType + '" msg="' + c.errorMsg + '" code="' + c.code + '" statusCode="' + c.errorRawTransportStatus + '"');
				return f(b("buildCometErrorRoute")(a))
			})
		}

		function na(a, c, d) {
			if (N == null) {
				b("FBLogger")("comet_infra").warn("No onBeforeUnload Listener but ran onBeforeUnload hooks");
				return
			}
			O = !0;
			var e = !1,
				f = function (a) {
					return function () {
						a(), e = !0, O = !1
					}
				},
				h = f(c),
				i = f(d);
			f = function (a, c) {
				return function () {
					a(h, i);
					if (!e) {
						c();
						throw b("unrecoverableViolation")("onBeforeUnload configuration has an action that does NOT call either stayOnThisPage or leaveThisPage", "comet_infra")
					}
				}
			};
			var j = a.bodyText,
				k = a.onClose,
				l = a.primaryAction,
				m = a.primaryButtonLabel,
				n = a.secondaryAction,
				o = a.secondaryButtonLabel,
				p = a.title;
			a = a.warnMessage;
			n = n != null ? f(n, c) : h;
			return N((m = m) != null ? m : g._("R\u1eddi kh\u1ecfi Trang"), l != null ? f(l, d) : i, (m = o) != null ? m : g._("\u1ede l\u1ea1i Trang"), n, (l = p) != null ? l : g._("R\u1eddi kh\u1ecfi trang?"), (d = j) != null ? d : a, k != null ? f(k, c) : n)
		}

		function oa(a) {
			window.requestAnimationFrame(function () {
				window.requestAnimationFrame(function () {
					if (G !== null && G === a) {
						var b = J(),
							c = b.hosted,
							d = b.main;
						b = b.pushViewStack;
						b != null && b.length > 1 ? b = b[b.length - 2].route.url : c != null ? b = c.route.url : b = d.route.url;
						Y(b, "history_back_failed")
					}
				})
			})
		}

		function pa() {
			G = b("uuid")();
			window.history.back();
			var a = oa.bind(null, G);
			b("setTimeout")(a, r)
		}

		function qa() {
			var a = J();
			a = a.pushViewStack;
			if (a == null || a.length === 0) return;
			a = a[a.length - 1];
			G = b("uuid")();
			var c = oa.bind(null, G);
			window.history.go(-a.depth);
			b("setTimeout")(c, r)
		}

		function Z(a, b, c) {
			for (var d = 0; d < a.length; d++) {
				var e = a[d];
				e = e(b);
				if (e != null && c !== !0) return e
			}
		}

		function ra() {
			var a = J();
			if (a == null) return;
			if (a.pushViewStack != null && a.pushViewStack.length) {
				var b = a.pushViewStack[a.pushViewStack.length - 1];
				b = Z(b.mutableState.unloadHooks || []);
				if (b != null) return b;
				return
			}
			if ((b = a.hosted) == null ? void 0 : b.mutableState.unloadHooks) {
				b = Z(((b = a.hosted) == null ? void 0 : b.mutableState.unloadHooks) || []);
				if (b != null) return b
			}
			if (a.main.mutableState.unloadHooks && a.main.mutableState.unloadHooks.length) {
				b = Z(a.main.mutableState.unloadHooks);
				if (b != null) return b
			}
		}

		function sa(a, c) {
			var d = J(),
				e = b("getTopMostRoute")(a),
				f = d.pushViewStack || [],
				g = a.pushViewStack || [];
			if (f.length) {
				var h = f[f.length - 1],
					i = h.route;
				h = h.mutableState.unloadHooks;
				if (h != null && h.length && (f.length !== g.length || i !== g[g.length - 1].route)) {
					i = Z(h, e, c);
					if (i != null) return i
				}
				return
			}
			if (((h = d.hosted) == null ? void 0 : (i = h.mutableState.unloadHooks) == null ? void 0 : i.length) && ((h = d.hosted) == null ? void 0 : h.route) !== ((i = a.hosted) == null ? void 0 : i.route)) {
				i = Z(((h = d.hosted) == null ? void 0 : h.mutableState.unloadHooks) || [], e, c);
				if (i != null) return i
			}
			if (d.main.mutableState.unloadHooks && d.main.mutableState.unloadHooks.length && (f.length < g.length || d.main.route !== a.main.route)) {
				h = Z(d.main.mutableState.unloadHooks, e, c);
				if (h != null) return h
			}
		}

		function $(a) {
			M.push(a);
			e || (R(), e = !0);
			return {
				cancel: function () {
					return b("removeFromArray")(M, a)
				}
			}
		}

		function ta(a) {
			N = a;
			return {
				cancel: function () {
					N === a && (N = null)
				}
			}
		}

		function ua(a, c, d) {
			a = b("normalizeCometRouterUrl")(a);
			var e = J();
			b("promiseDone")(b("CometRouteStore").fetch(a), function (a) {
				if (a !== "UNMATCHED_TOKEN" && a.tracePolicy !== "comet.error") {
					var f = X(a, c, d.from, e).view;
					if (f && f.allResources) {
						var g = f.allResources;
						b("Run").onAfterLoad(function () {
							g.forEach(function (a) {
								a.preload()
							}), b("gkx")("1823475") && b("Bootloader").forceFlush()
						});
						var h = j.getModuleIfRequireable();
						if (h) {
							var i = f.entryPoint;
							if (i == null) return;
							i = i.getModuleIfRequireable();
							if (i) {
								a = {
									routeParams: a.params,
									routeProps: f.props
								};
								h.fetchPredictions(i, a)
							}
						}
					}
				}
			})
		}
		var va = {
			fetchRoute: b("CometRouteStore").fetch,
			getRoute: b("CometRouteStore").getRoute,
			invalidatePath: b("CometRouteStore").invalidatePath
		};

		function wa(a, c, d, e, f, g) {
			var h = a.params,
				i = a.timeSpentConfig;
			if (i != null && d == null) {
				g == null ? void 0 : g.dispose();
				return
			}
			i = c.entryPoint;
			if (i == null) {
				g == null ? void 0 : g.dispose();
				return
			}
			if (b("gkx")("1621604")) {
				var k = b("makeCometRouteEntryPointContainer")(a, c, d, e, f);
				if (g) {
					if (k && g.getHash() === k.getHash()) return k;
					g.dispose()
				}
				if (a.tabKey != null && A[a.tabKey] != null && A[a.tabKey].entryPointContainer != null && k && ((g = A[a.tabKey].entryPointContainer) == null ? void 0 : g.getHash()) === k.getHash()) return;
				else if (((g = z) == null ? void 0 : g.main.entryPointContainer) && k && ((g = z.main.entryPointContainer) == null ? void 0 : g.getHash()) === k.getHash()) return;
				k == null ? void 0 : k.loadIfNeeded();
				return k
			}
			if (a.tabKey != null && A[a.tabKey] != null) return;
			g = b("getCometRouteActor")(a, f);
			k = g != null ? b("CometRelayEnvironmentFactory").getForActorID(g) : b("CometRelayEnvironmentFactory").defaultEnvironment;
			var l = b("createCometRelayEntryPointEnvironmentProvider")(k);
			a = i.getModuleIfRequireable();
			if (a) {
				f = {
					passthroughProps: e,
					routeParams: h,
					routeProps: c.props,
					timeSpentMetaData: d
				};
				b("relay-experimental/prepareEntryPoint_DEPRECATED")(l, a, f);
				g = j.getModuleIfRequireable();
				g && g.fetchPredictedResources(a, f)
			} else i.onReady(function (a) {
				b("relay-experimental/prepareEntryPoint_DEPRECATED")(l, a, {
					passthroughProps: e,
					routeParams: h,
					routeProps: c.props,
					timeSpentMetaData: d
				}), b("gkx")("1823475") && b("Bootloader").forceFlush()
			})
		}

		function xa(a, c, d) {
			c === void 0 && (c = {
				replace: !1
			});
			if (!b("gkx")("947903")) return {
				cancel: function () {},
				usePrefetchedEntrypointForRouting: function () {}
			};
			if (c.onNavigate) throw b("unrecoverableViolation")("onNavigate on prerender is not supported and is likely a logic error.", "comet_infra");
			var e = null;
			if (D != null)
				if (b("gkx")("1621604")) {
					e = D.usePrefetchedEntrypointForRouting();
					if (!e || !e.getHash()) {
						var f;
						(f = e) == null ? void 0 : f.dispose();
						e = null;
						D.cancel()
					}
					D = null
				} else D.cancel(), D = null;
			var g = !1;
			f = b("normalizeCometRouterUrl")(a);
			var h = J(),
				i = null,
				j = b("CometRouteStore").getRoute(a);
			if (j) k(j);
			else {
				j = d.actorID;
				b("promiseDone")(b("CometRouteStore").fetchForNavigation(f, j), function (a) {
					var b = a.route;
					k(b, a.initialTimeSpentMetaData)
				})
			}

			function k(f, j) {
				j === void 0 && (j = null);
				if (f === "UNMATCHED_TOKEN") {
					var k;
					(k = e) == null ? void 0 : k.dispose();
					return
				}
				k = f;
				if (g) return;
				f = ja(a, d, c);
				var l = f.passthroughProps,
					m = f.previousActorID,
					n = f.target,
					o = ia(k);
				if (o) return;
				o = X(k, n, f.dispatchedFrom, h);
				o.view && (i = wa(k, o.view, j, l, m, e), b("gkx")("1823475") && b("Bootloader").forceFlush())
			}
			var l = !1;
			D = {
				cancel: function () {
					if (!l && i != null) {
						var a;
						i.dispose();
						(a = e) == null ? void 0 : a.dispose()
					}
					if (g) return;
					g = !0
				},
				usePrefetchedEntrypointForRouting: function () {
					l = !0;
					return i
				}
			};
			return D
		}
		$ = {
			dispatcher: W,
			getCurrentRouterState: J,
			getIsLoading: function () {
				return E.loading
			},
			getMaintainedRouteState: function () {
				return A
			},
			listen: $,
			setUnloadListener: ta,
			store: va
		};
		I(a, c, d);
		x.push($);
		return $
	}
	a._instances = x;
	c = a;
	e.exports = c
}), null);