__d("BanzaiComet", ["Promise", "BanzaiAdapterComet", "BanzaiCompressionUtils", 
	"BanzaiConsts", "BanzaiDataConfig", "BanzaiLazyQueue", 
	"BanzaiUtils", "CurrentUser", "ErrorGuard", "ExecutionEnvironment",
	 "FBLogger", "Run", "Visibility", "WebSession", "clearTimeout", 
	 "performanceAbsoluteNow", "recoverableViolation", "setTimeout", 
	 "setTimeoutCometLoggingPriWithFallback", "setTimeoutCometSpeculativeWithFallback"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h, i, j, k = b("BanzaiAdapterComet"),
		l = "send_via_beacon_failure";
	c = "messages_received";
	d = "messages_sent";
	var m = "total_messages_received",
		n = "total_messages_sent",
		o = {
			basic: [],
			vital: []
		},
		p = [],
		q = {
			basic: null,
			vital: null
		},
		r = {
			basic: null,
			vital: null
		},
		s = {
			received: c,
			sent: d
		},
		t = new Map(),
		u = (g || (g = b("BanzaiConsts"))).VITAL,
		v = 0,
		w = 0,
		x = 0,
		y = 0,
		z, A = null;

	function B(a, b) {
		switch (a) {
			case "falco:perf":
				return !0;
			case "loom_trace":
				return !0;
			case "js_error_logging":
				return !0;
			case "falco:comet_opt_out_survey":
				return !0;
			case "scuba_sample":
				return !1;
			default:
				return !1
		}
	}
	var C = {
		_enqueue_total_count: function () {
			var a, c;
			v += 2;
			w += 2;
			x += 2;
			a = b("BanzaiUtils").wrapData((g || (g = b("BanzaiConsts"))).ODS_ROUTE, {
				2887: {
					banzai: (a = {}, a[m] = [w], a)
				}
			}, (h || (h = b("performanceAbsoluteNow")))(), !0);
			c = b("BanzaiUtils").wrapData(g.ODS_ROUTE, {
				2887: {
					banzai: (c = {}, c[n] = [x], c)
				}
			}, h(), !0);
			o.vital.unshift(a, c);
			C.flushHelper(g.VITAL);
			C.flushHelper(g.BASIC)
		},
		_expiredBatchMap: function () {
			var a = (h || (h = b("performanceAbsoluteNow")))();
			for (var c = t.entries(), d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var f;
				if (d) {
					if (e >= c.length) break;
					f = c[e++]
				} else {
					e = c.next();
					if (e.done) break;
					f = e.value
				}
				f = f;
				var i = f[1];
				if (i.expiryTime <= a) {
					var j = i.posts[0];
					j = (j = j.__meta.priority) != null ? j : (g || (g = b("BanzaiConsts"))).BASIC;
					(j = C._getPostBuffer(j)).push.apply(j, i.posts);
					t["delete"](f[0])
				}
			}
			t.size > 0 && (z = b("setTimeout")(C._expiredBatchMap, (g || (g = b("BanzaiConsts"))).BATCH_TIMEOUT))
		},
		_flushBatchMap: function () {
			b("clearTimeout")(z);
			z = null;
			for (var a = t.values(), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var e;
				if (c) {
					if (d >= a.length) break;
					e = a[d++]
				} else {
					d = a.next();
					if (d.done) break;
					e = d.value
				}
				e = e;
				var f = e.posts[0];
				f = (f = f.__meta.priority) != null ? f : (g || (g = b("BanzaiConsts"))).BASIC;
				(f = C._getPostBuffer(f)).push.apply(f, e.posts)
			}
			t.clear()
		},
		_gatherWadsAndPostsFromBuffer: function (a, c, d, e, f, g) {
			var h = {
				currentSize: 0,
				keepRetryable: d,
				overlimit: !1,
				sendMinimumOnePost: g,
				wadMap: new Map()
			};
			d = f[e].filter(function (d) {
				return b("BanzaiUtils").filterPost(d, a, c, h)
			});
			!h.overlimit && e === "vital" && (f.basic = f.basic.filter(function (d) {
				return b("BanzaiUtils").filterPost(d, a, c, h)
			}));
			if (c.length + y + v !== 0) {
				v += 2;
				g = c.length + y + 2;
				w += 2;
				x += c.length + 2;
				C.counterTracker("received", v, a, c);
				C.counterTracker("sent", g, a, c)
			}
			v = 0;
			y = 0;
			return d
		},
		_getPostBuffer: function (a) {
			return a == null ? o.basic : o[a] || []
		},
		_handleBatchPost: function (a, c, d) {
			if (d == null) return !1;
			var e = a[2],
				f = a[0],
				h = t.get(f);
			if (h != null && h.expiryTime <= e) {
				(c = C._getPostBuffer(c)).push.apply(c, h.posts);
				t["delete"](f);
				return !1
			}
			if (h != null && h.expiryTime > e) {
				h.posts.push(a);
				return !0
			}
			c = {
				expiryTime: e + d,
				posts: [a]
			};
			t.set(f, c);
			z || (z = b("setTimeout")(C._expiredBatchMap, (g || (g = b("BanzaiConsts"))).BATCH_TIMEOUT));
			return !0
		},
		_handlePostPreflightChecks: function (a, c, d) {
			if (C.adapter.config.disabled === !0) return !0;
			if (!b("ExecutionEnvironment").canUseDOM) return !0;
			var e = k.getTopLevel();
			if (e) {
				var f;
				try {
					f = e.require("Banzai")
				} catch (a) {
					f = null
				}
				if (f) {
					f.post.apply(f, arguments);
					return !0
				}
			}
			if (k.config.disabled === !0) return !0;
			var g = k.config.blacklist;
			return g != null && typeof g.indexOf === "function" && g.indexOf(a) !== -1 ? !0 : !1
		},
		_handleSignalPost: function (a, c, d) {
			if (!d) return !1;
			var e = a;
			e.__meta.status = (g || (g = b("BanzaiConsts"))).POST_INFLIGHT;
			d = [{
				app_id: b("CurrentUser").getAppID(),
				posts: [a],
				trigger: a[0],
				user: b("CurrentUser").getID(),
				webSessionId: b("WebSession").getId()
			}];
			k.send(C._prepForTransit(d), function () {
				e.__meta.status = (g || (g = b("BanzaiConsts"))).POST_SENT, y++, x++, e.__meta.callback != null && e.__meta.callback()
			}, function (d) {
				b("BanzaiUtils").retryPost(a, d, o[c])
			}, !0);
			return (d = !e.__meta.retry) != null ? d : !0
		},
		_initialize: function () {
			var a = [(g || (g = b("BanzaiConsts"))).VITAL, g.BASIC];
			if (b("ExecutionEnvironment").canUseDOM) {
				if (b("Visibility").isSupported()) {
					var c;
					(c = b("Visibility")).addListener(c.HIDDEN, function () {
						a.forEach(function (a) {
							C._getPostBuffer(a).length > 0 && C._tryToSendViaBeacon(a)
						}), C._store()
					});
					c.addListener(c.VISIBLE, function () {
						a.forEach(function (a) {
							C._tryToSendViaBeacon(a)
						}), C._restore()
					})
				} else C.adapter.setHooks(C);
				b("Run").onBeforeUnload(function () {
					C._flushBatchMap(), C._enqueue_total_count(), C._sendBeacon((g || (g = b("BanzaiConsts"))).VITAL), C._sendBeacon(g.BASIC)
				}, !1);
				C.adapter.setUnloadHook(C);
				b("Run").onAfterLoad(function () {
					C._restore()
				})
			}
		},
		_isShutdown: !1,
		_prepForTransit: function (a) {
			var c = new FormData();
			c.append("ts", String(Date.now()));
			var d = b("BanzaiCompressionUtils").outOfBandsPosts(a);
			Object.keys(d).forEach(function (a) {
				c.append(a, d[a])
			});
			c.append("q", JSON.stringify(a));
			return c
		},
		_prepWadForTransit: function (a) {
			b("BanzaiCompressionUtils").compressWad(a, k.preferredCompressionMethod())
		},
		_prepWadForTransitAsync: function (a) {
			return b("BanzaiCompressionUtils").compressWadAsync(a, k.preferredCompressionMethod())
		},
		_restore: function () {
			var a = function (a) {
					var c = a.__meta;
					c = c.priority === (g || (g = b("BanzaiConsts"))).VITAL ? (g || (g = b("BanzaiConsts"))).VITAL : (g || (g = b("BanzaiConsts"))).BASIC;
					C._getPostBuffer(c).push(a);
					v++;
					w++
				},
				c = k.getStorage();
			(i || (i = b("ErrorGuard"))).applyWithGuard(c.restore, c, [a]);
			C._schedule((g || (g = b("BanzaiConsts"))).VITAL_WAIT, u)
		},
		_schedule: function (a, c) {
			if (c == null) return !1;
			var d = function () {
					r[c] = null, q[c] = null, C._sendWithCallbacks(c, null, null)
				},
				e = (h || (h = b("performanceAbsoluteNow")))() + a;
			if (q[c] == null || e < q[c]) {
				q[c] = e;
				r[c] !== null && b("clearTimeout")(r[c]);
				c === (g || (g = b("BanzaiConsts"))).VITAL ? r.vital = b("setTimeoutCometLoggingPriWithFallback")(d, a) : r.basic = b("setTimeoutCometSpeculativeWithFallback")(d, a);
				return !0
			}
			return !1
		},
		_sendBeacon: function (a) {
			C._getPostBuffer(a).length > 0 && C._tryToSendViaBeacon(a)
		},
		_sendWithCallbacks: function (a, c, d) {
			o[a].length > 0 && C._schedule(a === "vital" ? (g || (g = b("BanzaiConsts"))).VITAL_WAIT : (g || (g = b("BanzaiConsts"))).BASIC_WAIT_COMET, a);
			if (!k.readyToSend()) {
				d && d();
				return
			}
			var e = k.getStorage();
			(i || (i = b("ErrorGuard"))).applyWithGuard(e.flush, e, [C._restore]);
			k.inform((g || (g = b("BanzaiConsts"))).SEND);
			var f = [],
				h = [];
			o[a] = C._gatherWadsAndPostsFromBuffer(f, h, !0, a, o, !0);
			if (f.length <= 0) {
				k.inform((g || (g = b("BanzaiConsts"))).OK);
				c && c();
				return
			}
			f[0].trigger = A;
			A = null;
			f.forEach(function (a) {
				return a.send_method = "ajax"
			});
			p.push.apply(p, h);
			b("Promise").all(f.map(C._prepWadForTransitAsync))["finally"](function () {
				if (C._isShutdown) return;
				h.forEach(function (a) {
					a = p.indexOf(a);
					if (a === -1) {
						b("recoverableViolation")("inflight post not found in inPreparationPosts", "comet_infra");
						return
					}
					p.splice(a, 1)
				});
				k.send(C._prepForTransit(f), function () {
					h.forEach(function (a) {
						a = a;
						a.__meta.status = (g || (g = b("BanzaiConsts"))).POST_SENT;
						typeof a.__meta.callback === "function" && a.__meta.callback()
					}), c && c()
				}, function (c) {
					h.forEach(function (d) {
						b("BanzaiUtils").retryPost(d, c, o[a])
					}), C._store(), d && d()
				})
			})
		},
		_store: function () {
			var a = k.getStorage();
			(i || (i = b("ErrorGuard"))).applyWithGuard(a.store, a, [o[(g || (g = b("BanzaiConsts"))).VITAL]]);
			i.applyWithGuard(a.store, a, [o[g.BASIC]])
		},
		_testState: function () {
			return {
				postBuffer: o.basic,
				triggerRoute: A
			}
		},
		_tryToSendViaBeacon: function (c) {
			if (!(navigator && navigator.sendBeacon)) return !1;
			var d = !0,
				e = [],
				f = [];
			o[c] = C._gatherWadsAndPostsFromBuffer(e, f, !1, c, o, !1);
			if (e.length <= 0) return !1;
			e.forEach(function (a) {
				return a.send_method = "beacon"
			});
			e.map(C._prepWadForTransit);
			e = C._prepForTransit(e);
			var i = C.adapter.getEndPointUrl(!0);
			i = a.navigator.sendBeacon(i, e);
			if (!i) {
				d = !1;
				f.forEach(function (a) {
					b("BanzaiUtils").resetPostStatus(a), C._getPostBuffer(c).push(a)
				});
				o[c].push(b("BanzaiUtils").wrapData((g || (g = b("BanzaiConsts"))).ODS_ROUTE, {
					2887: {
						banzai: (e = {}, e[l] = [1], e)
					}
				}, (h || (h = b("performanceAbsoluteNow")))()))
			}
			return d
		},
		_unload: function () {
			C._flushBatchMap(), C._enqueue_total_count(), k.cleanup(), k.inform((g || (g = b("BanzaiConsts"))).SHUTDOWN), C._isShutdown = !0, p.forEach(function (a) {
				var c = a;
				c = c.__meta.priority;
				b("BanzaiUtils").retryPost(a, 444, C._getPostBuffer((a = c) != null ? a : (g || (g = b("BanzaiConsts"))).VITAL))
			}), C._sendBeacon(g.VITAL), C._sendBeacon(g.BASIC), C._store()
		},
		_validateRouteAndSize: function (a, c) {
			var d;
			a || b("FBLogger")("banzai").blameToPreviousFrame().blameToPreviousFrame().mustfix("BanzaiComet.post called without specifying a route");
			a.length > (j || (j = b("BanzaiDataConfig"))).ROUTE_LIMIT && b("FBLogger")("banzai").blameToPreviousFrame().blameToPreviousFrame().warn("Banzai.post route is %s characters which exceeds %s. Route starts with: %s", a.length, (j || (j = b("BanzaiDataConfig"))).ROUTE_LIMIT, a.substring(0, 100));
			d = (d = JSON.stringify(c)) != null ? d : "";
			d.length > (j || (j = b("BanzaiDataConfig"))).DATA_LIMIT && !B(a, c) && b("FBLogger")("banzai").blameToPreviousFrame().blameToPreviousFrame().warn("%s Banzai.post data is %s characters which exceeds %s. Excessive data starts with: %s", a, d.length, (j || (j = b("BanzaiDataConfig"))).DATA_LIMIT, d.substring(0, 100));
			return d.length
		},
		BASIC: {
			delay: g.BASIC_WAIT
		},
		BASIC_WAIT: g.BASIC_WAIT,
		ERROR: g.ERROR,
		EXPIRY: void 0,
		OK: g.OK,
		SEND: g.SEND,
		SHUTDOWN: g.SHUTDOWN,
		VITAL: {
			delay: g.VITAL_WAIT
		},
		VITAL_WAIT: g.VITAL_WAIT,
		adapter: k,
		canUseNavigatorBeacon: function () {
			return !!(navigator && navigator.sendBeacon && k.isOkToSendViaBeacon())
		},
		counterTracker: function (a, c, d, e) {
			var f;
			c = c;
			a = b("BanzaiUtils").wrapData((g || (g = b("BanzaiConsts"))).ODS_ROUTE, {
				2887: {
					banzai: (f = {}, f[s[a]] = [c], f)
				}
			}, (h || (h = b("performanceAbsoluteNow")))(), !0);
			e.push(a);
			d.push({
				app_id: b("CurrentUser").getAppID(),
				needs_compression: !0,
				posts: [a],
				user: b("CurrentUser").getID(),
				webSessionId: b("WebSession").getId()
			})
		},
		flush: function (a, c) {
			C.flushHelper((g || (g = b("BanzaiConsts"))).VITAL, a, c), C.flushHelper(g.BASIC, a, c)
		},
		flushHelper: function (a, c, d) {
			q[a] = null, r[a] !== null && (b("clearTimeout")(r[a]), r[a] = null), C._sendWithCallbacks(a, c, d)
		},
		isEnabled: function (a) {
			return !!(k.config.gks && k.config.gks[a])
		},
		post: function (a, c, d) {
			var e;
			if (C._handlePostPreflightChecks(a, c, d)) return;
			var f = C._validateRouteAndSize(a, c);
			d = d || {};
			v++;
			w++;
			c = b("BanzaiUtils").wrapData(a, c, (h || (h = b("performanceAbsoluteNow")))(), d.retry, f);
			f = c;
			d.callback && (f.__meta.callback = d.callback);
			d.compress != null && (f.__meta.compress = d.compress);
			e = (e = d.delay) != null ? e : (g || (g = b("BanzaiConsts"))).BASIC_WAIT_COMET;
			var i = e > (g || (g = b("BanzaiConsts"))).VITAL_WAIT ? (g || (g = b("BanzaiConsts"))).BASIC : (g || (g = b("BanzaiConsts"))).VITAL;
			f.__meta.priority = i;
			if (C._handleSignalPost(c, i, (f = d.signal) != null ? f : !1)) return;
			if (C._handleBatchPost(c, i, d.batch)) return;
			C._getPostBuffer(i).push(c);
			(C._schedule(e, i) || A == null) && (A = a);
			f = b("BanzaiLazyQueue").flushQueue();
			f.forEach(function (a) {
				return C.post.apply(C, a)
			})
		},
		postsCount: new Map(),
		subscribe: k.subscribe
	};
	C._initialize();
	f = C;
	e.exports = f
}), null);