__d("CometHeroInteractionImpl.react", ["Promise", 
	"CometHeroInteractionContext", 
	"CometHeroInteractionIDContext", 
	"CometHeroLogging", 
	"CometHeroPendingPlaceholderTracker", 
	"CometPageletImpl.react", 
	"CometVisualCompletionConstants", 
	"CometVisualCompletionUtil", 
	"ExecutionEnvironment", 
	"HiddenSubtreePassiveContext", 
	"InteractionTracingMetrics", 
	"LegacyHidden", 
	"PromiseAnnotate", 
	"React", "gkx", 
	"objectEntries", 
	"relay-experimental/ProfilerContext", 
	"requireCond", "setTimeout", "stylex", 
	"useLayoutEffect_SAFE_FOR_SSR", 
	"useStable", "cr:1808490", "cr:1791018", "cr:1808670"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h, i = b("React"),
		j = "Interaction Start",
		k = "root",
		l = new Set();

	function m(a, c) {
		b("CometHeroLogging").markStart(a, c)
	}

	function n(a, c, d, e) {
		b("CometHeroLogging").markStartPlaceholder(a, c, void 0, d, e)
	}

	function o(a, c, d, e) {
		b("CometHeroLogging").markEnd(a, d, "SuspensePromise", "Promise Wait: " + e, c)
	}

	function p(a, c, d, e) {
		b("CometHeroLogging").markEndPlaceholder(a, d, "PlaceholderWait", "Placeholder Wait: " + e, c)
	}

	function q(a, c, d) {
		b("InteractionTracingMetrics").addHeroRelay(c, {
			pageletStack: d,
			queries: a
		});
		for (var e = 0; e < a.length; e++) {
			var f = a[e];
			b("CometHeroLogging").measure(c, d, "Relay", f.name, f.start, f.end);
			for (var g = 0; g < f.flushes.length; g++) {
				var h = f.flushes[g];
				b("CometHeroLogging").measure(c, d, "RelayFlush", f.name + "(" + h.label + ")", f.start, h.time, {
					flush: h.label,
					queryName: f.name
				})
			}
		}
	}

	function r(a, c, d) {
		b("InteractionTracingMetrics").addHeroBootload(c, {
			moduleIDs: Array.from(a),
			pageletStack: d
		})
	}

	function s(a) {
		if (!a) return "No placeholder";
		var c = a.name != null ? "@" + a.name : "";
		a = b("CometHeroLogging").createThenableDescription(a.thenables) || "No Promises";
		return a + c
	}

	function t(a, c) {
		if (a == null) return null;
		var d = {
			commitCount: 0,
			lastBaseDuration: 0,
			maxBaseDuration: 0,
			totalActualDuration: 0,
			totalCommitDuration: 0,
			totalPostCommitDuration: 0
		};
		for (var a = b("objectEntries")(a), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var g;
			if (e) {
				if (f >= a.length) break;
				g = a[f++]
			} else {
				f = a.next();
				if (f.done) break;
				g = f.value
			}
			g = g;
			var h = g[0];
			g = g[1];
			if (h > c) break;
			h = g.actualDuration;
			h = h === void 0 ? 0 : h;
			var i = g.baseDuration;
			i = i === void 0 ? 0 : i;
			var j = g.commitDuration;
			j = j === void 0 ? 0 : j;
			g = g.postCommitDuration;
			g = g === void 0 ? 0 : g;
			d.commitCount++;
			d.maxBaseDuration = Math.max(d.maxBaseDuration, i);
			d.lastBaseDuration = i;
			d.totalActualDuration += h;
			d.totalCommitDuration += j;
			d.totalPostCommitDuration += g
		}
		return d
	}

	function a(a, c) {
		var d = a.children,
			e = a.excludeFromMainVC,
			f = a.hidden,
			u = a.interactionDesc,
			v = a.interactionUUID,
			w = a.pageletAriaProps,
			x = a.pageletName,
			y = a.xstyle,
			z = i.useContext(b("CometHeroInteractionContext").Context),
			A = i.useContext(b("CometHeroInteractionIDContext")),
			B = i.useRef(null),
			C = i.useRef(null),
			D = i.useContext(b("HiddenSubtreePassiveContext")),
			E = (a = u) != null ? a : "No Description",
			F = i.useRef({}),
			G = i.useRef({}),
			H = i.useRef({}),
			I = i.useRef(null),
			J = b("useStable")(b("CometHeroLogging").getSimpleUUID),
			K = i.useMemo(function() {
				var a;
				return [].concat(z.pageletStack, [(a = x) != null ? a : k])
			}, [z.pageletStack, x]),
			L = i.useRef([]),
			M = i.useRef(new Set()),
			N = b("cr:1808670")(),
			O = i.useCallback(function(a, c, d) {
				C.current !== a && B.current == null && !D.getCurrentState().hidden && Object.values(F.current).length === 0 && (B.current = (g || (g = b("CometVisualCompletionUtil"))).foregroundRequestAnimationFrame(function() {
					B.current = null, !D.getCurrentState().hidden && C.current !== a && Object.values(F.current).length === 0 && (C.current = a, b("CometHeroLogging").markEnd(a, K, "Interaction", "Interaction Done: " + c, j), d !== a && b("CometHeroLogging").endCometHeroInteraction(a, b("CometHeroLogging").InteractionOutcome.Successful), z.unhold(a, a + "_" + J), q(L.current, a, K), r(M.current, a, K), L.current = [], M.current = new Set())
				}))
			}, [D, z, J, K]),
			P = i.useCallback(function() {
				var a = I.current;
				a != null && O(a.interactionUUID, a.interactionDesc, A)
			}, [A, O]),
			Q = i.useCallback(function(a, c, d) {
				var e = I.current;
				e != null && C.current !== e.interactionUUID && (b("CometHeroLogging").markEnd(e.interactionUUID, K, "Interaction", "Interaction Aborted (" + c + "): " + e.interactionDesc, j), z.unhold(e.interactionUUID, e.interactionUUID + "_" + J), d !== e.interactionUUID && b("CometHeroLogging").endCometHeroInteraction(e.interactionUUID, b("CometHeroLogging").InteractionOutcome.Aborted), a !== null && e.interactionUUID === a.interactionUUID && (b("CometHeroLogging").markStart(a.interactionUUID, j), b("cr:1791018") && b("cr:1791018").holdVCTrace(a.interactionUUID, b("CometVisualCompletionConstants").HERO_TRACING_HOLD), b("CometHeroPendingPlaceholderTracker").addInteraction(a.interactionUUID), z.hold(a.interactionUUID, K, "Sub Interaction:" + a.interactionDesc, a.interactionUUID + "_" + J)));
				e != null && (q(L.current, e.interactionUUID, K), r(M.current, e.interactionUUID, K));
				L.current = [];
				M.current = new Set();
				C.current = null;
				B.current && B.current();
				B.current = null;
				I.current = a
			}, [z, J, K]);
		i.useEffect(function() {
			return function() {
				Q(null, "Unmount")
			}
		}, [Q]);
		b("useLayoutEffect_SAFE_FOR_SSR")(function() {
			var a = null;
			v != null && (a = {
				interactionDesc: E,
				interactionUUID: v
			});
			Q(a, "New Interaction", A);
			v != null && O(v, E, A)
		}, [E, v, A, Q, O]);
		b("useLayoutEffect_SAFE_FOR_SSR")(function() {
			if (v != null) {
				var a = D.getCurrentState().hidden,
					b = D.subscribeToChanges(function(b) {
						b = b.hidden;
						a !== b && (a = b, b ? Q({
							interactionDesc: E,
							interactionUUID: v
						}, "Hidden") : O(v, E, A))
					});
				v != null && O(v, E, A);
				return function() {
					return b.remove()
				}
			}
		}, [D, v, E, Q, O, A]);
		var R = i.useMemo(function() {
			var a = {
				consumeBootload: function(a) {
					M.current.add(a)
				},
				getRelayProfilerContext: function(a) {
					return {
						consumeBootload: function(a) {
							M.current.add(a)
						},
						retainQuery: function(a) {
							L.current.push(a)
						},
						wrapPrepareQueryResource: function(a) {
							return a()
						}
					}
				},
				hold: function(c, d, e, f, g) {
					e === void 0 && (e = "Hold");
					f = (f = f) != null ? f : b("CometHeroLogging").getSimpleUUID();
					a.registerPlaceholder(c, f, d);
					var h = new(b("Promise"))(function() {});
					b("PromiseAnnotate").setDisplayName(h, e);
					a.suspenseCallback(c, f, d, new Set([h]), g);
					return f
				},
				logCometHero: function(a, c, d) {
					C.current !== a && b("CometHeroLogging").markEnd(a, [].concat(d), "HeroRendering", "Hero Rendering: " + c, j, void 0)
				},
				logMetadata: function(a, b, c) {
					var d;
					c = c[c.length - 1];
					d = (d = G.current[c]) != null ? d : Object.create(null);
					b != null ? d[a] = b : delete d[a];
					G.current[c] = d
				},
				logPageletVC: function(a, c, d, e, f) {
					var g = f[f.length - 1],
						h = G.current[g];
					h = h != null ? babelHelpers["extends"]({}, h) : void 0;
					h && b("cr:1791018") && b("cr:1791018").addMountPointMetaData(a, g, h);
					e != null && b("CometHeroLogging").measure(a, [].concat(f), "VCWithoutImage", "VCWithoutImage: " + f[f.length - 1], Math.min(c, e), e, h);
					if (d != null) {
						h = Object.assign((e = h) != null ? e : {}, t(H.current[g], d), N.getPageletReport(g, d));
						H.current[g] = {};
						N.cleanup(g);
						b("CometHeroLogging").measure(a, [].concat(f), "VC", "VC: " + f[f.length - 1], Math.min(c, d), d, h)
					}
				},
				logReactCommit: function(a, c, d, e, f, g, h) {
					b("cr:1808490") && b("cr:1808490").measureReactCommit(c, f, e);
					N.logCommit(h, f);
					if (C.current !== a && g) {
						d = h[h.length - 1];
						a = (c = H.current[d]) != null ? c : Object.create(null);
						h = (g = a[f]) != null ? g : Object.create(null);
						h.commitDuration = e;
						a[f] = h;
						H.current[d] = a
					}
				},
				logReactPostCommit: function(a, c, d, e, f, g, h) {
					b("cr:1808490") && b("cr:1808490").measureReactPostCommit(c, e);
					if (C.current !== a && g) {
						d = h[h.length - 1];
						a = (c = H.current[d]) != null ? c : Object.create(null);
						h = (g = a[f]) != null ? g : Object.create(null);
						h.postCommitDuration = e;
						a[f] = h;
						H.current[d] = a
					}
				},
				logReactRender: function(a, c, d, e, f, g, h, i, j) {
					N.logAndCheckForCascadingRender(j, f);
					if (C.current !== a) {
						b("CometHeroLogging").measure(a, [].concat(j), "ReactRender", "ReactRender: " + c, e, f, {
							actualDuration: g,
							baseDuration: h
						});
						if (i) {
							d = j[j.length - 1];
							c = (a = H.current[d]) != null ? a : Object.create(null);
							i = (e = c[f]) != null ? e : Object.create(null);
							i.actualDuration = g;
							i.baseDuration = h;
							c[f] = i;
							H.current[d] = c
						}
					}
				},
				pageletStack: z.pageletStack,
				registerPlaceholder: function(a, b, c) {
					var d = F.current[b] == null;
					if (!d) return;
					B.current && B.current();
					B.current = null;
					d = new Set();
					F.current[b] = {
						pageletStack: c,
						thenables: d
					};
					n(a, b, c, s(F.current[b]))
				},
				removePlaceholder: function(a, b) {
					var c = F.current[b] != null;
					if (!c) return;
					c = F.current[b];
					delete F.current[b];
					P();
					p(a, b, c.pageletStack, s(c))
				},
				suspenseCallback: function(a, c, d, e, f) {
					var g = F.current[c];
					if (F.current[c] == null) {
						var h;
						n(a, c, d, (h = f) != null ? h : "Suspense")
					}
					F.current[c] = {
						name: f,
						pageletStack: d,
						thenables: e
					};
					e.forEach(function(c) {
						if (!l.has(c)) {
							var e;
							l.add(c);
							b("ExecutionEnvironment").canUseDOM && b("setTimeout")(function() {
								l["delete"](c)
							}, 6e4);
							var f = (e = b("PromiseAnnotate").getDisplayName(c)) != null ? e : "Promise",
								g = b("CometHeroLogging").getSimpleUUID();
							m(a, g);
							c.then(function() {
								o(a, g, d, f)
							})
						}
					});
					h = s(g);
					f = s(F.current[c]);
					f !== h && (p(a, c, d, f), n(a, c, d, f))
				},
				unhold: function(b, c) {
					a.removePlaceholder(b, c)
				}
			};
			return a
		}, [N, z.pageletStack, P]);
		u = i.useMemo(function() {
			return R.getRelayProfilerContext(R.pageletStack)
		}, [R]);
		a = (a = x) != null ? a : k;
		var S = b("gkx")("1799634"),
			T = babelHelpers["extends"]({}, S ? null : {
				"data-pagelet": a
			});
		return i.jsx(b("CometHeroInteractionContext").Context.Provider, {
			value: R,
			children: i.jsx(b("CometHeroInteractionIDContext").Provider, {
				value: v,
				children: i.jsx(b("relay-experimental/ProfilerContext").Provider, {
					value: u,
					children: i.jsx(b("CometPageletImpl.react"), {
						excludeFromMainVC: e,
						isMutationRoot: !0,
						name: a,
						ref: c,
						children: function(a, c) {
							return i.jsxs(b("LegacyHidden"), {
								htmlAttributes: babelHelpers["extends"]({}, w, T, {
									className: (h || (h = b("stylex")))(y)
								}),
								mode: f === !0 ? "hidden" : "visible",
								ref: a,
								children: [i.jsx(c, {}), d]
							})
						}
					})
				})
			})
		})
	}
	a.displayName = "CometHeroInteraction";
	c = i.forwardRef(a);
	e.exports = c
}), null);