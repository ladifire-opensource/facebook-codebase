__d("Bootloader", ["invariant", 
	"requireCond", 
	"BootloaderConfig", 
	"BootloaderEndpoint", "BootloaderEvents", 
	"BootloaderEventsManager", "ClientConsistency", "CSRBitMap", "CSRIndexUtil", 
	"CSSLoader", "ErrorPubSub", "FBLogger", "JSResourceReference", "cr:696703", 
	"NetworkStatus", "ResourceHasher", "ResourceTimingsStore", "TAAL", "TimeSlice", 
	"createTrustedScriptURLFromFacebookURI", "ex", "ifRequireable", "nullthrows", 
	"performanceAbsoluteNow", "performanceNow", "setTimeoutAcrossTransitions"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h, i, j, k = function () {},
		l = !!b("BootloaderConfig").deferBootloads;
	l && !a.__comet_ssr_is_server_env_DO_NOT_USE && b("setTimeoutAcrossTransitions")(function () {
		$.undeferBootloads(!0)
	}, 15e3);
	var m = b("BootloaderConfig").retryQueuedBootloads,
		n = [],
		o = [],
		p = new Map(),
		q = new Map(),
		r = new Map(),
		s = new Set(),
		t = new Map(),
		u = null,
		v = new Map(),
		w = new Map(),
		x = new Map(),
		y = [],
		z = new Map(),
		A = new Set(),
		B = !1,
		C = new Set(),
		D = !1,
		E = new(b("BootloaderEventsManager"))(),
		F = b("BootloaderConfig").jsRetries || [],
		G = b("BootloaderConfig").jsRetryAbortNum,
		aa = b("BootloaderConfig").jsRetryAbortTime,
		H = F.length > 0;
	(h || (h = b("ErrorPubSub"))).unshiftListener(function (a) {
		var b = [];
		for (var c = p, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
			var g = f[0];
			f[1];
			if (q.has(g)) continue;
			f = K(g);
			if (f.type === "csr" || f.type === "async") continue;
			b.push(f.src)
		}
		a.loadingUrls = b
	});

	function I(a) {
		if (l || !D) return !1;
		if (!m) return !0;
		for (var b = 0; b < a.length; b++) {
			var c, d = a[b];
			d = t.get(d);
			if (!d) return !1;
			d = [d.r, ((c = d.rdfds) == null ? void 0 : c.r) || [], ((c = d.rds) == null ? void 0 : c.r) || []];
			for (var c = 0; c < d.length; c++) {
				var e = d[c];
				for (var e = e, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					var h;
					if (f) {
						if (g >= e.length) break;
						h = e[g++]
					} else {
						g = e.next();
						if (g.done) break;
						h = g.value
					}
					h = h;
					if (!v.has(h)) return !1
				}
			}
		}
		return !0
	}

	function J(a) {
		var c = t.get(a);
		if (!c) throw new Error(b("TAAL").blameToPreviousFile(b("ex")("Bootloader: %s is not in the component map", a)));
		return c
	}

	function K(a) {
		var c = v.get(a);
		if (!c) throw new Error(b("TAAL").blameToPreviousFile(b("ex")("No resource entry for hash: %s", a)));
		return c
	}

	function L(a, c) {
		var d = b("ResourceHasher").getAsyncHash(a);
		if (!v.has(d)) v.set(d, {
			type: "async",
			module: a,
			blocking: !!c
		});
		else {
			a = K(d);
			a.type === "async" || g(0, 21557);
			a.blocking && !c && (a.blocking = !1)
		}
		return d
	}

	function M() {
		u || (u = document.head || document.getElementsByTagName("head")[0] || document.body);
		return u
	}

	function N(a) {
		var b = document.createDocumentFragment();
		a(b);
		M().appendChild(b)
	}

	function O() {
		if (!H) return !1;
		var a = y.length;
		if (a < G) return !0;
		a = y[a - 1] - y[a - G];
		a < aa && (b("FBLogger")("bootloader").warn("JS retry abort"), H = !1);
		return H
	}

	function P(a, b, c, d) {
		if (p.has(a) || s.has(a)) return;
		s.add(a);
		var e = void 0;
		switch (b.type) {
			case "async":
				T(a, b, c, d);
				return;
			case "css":
				e = "style";
				break;
			case "js":
				e = "script";
				break;
			default:
				e = b.type, g(0, 3721)
		}
		a = document.createElement("link");
		a.href = b.src;
		a.rel = "preload";
		a.as = e;
		b.nc || (a.crossOrigin = "anonymous");
		c.appendChild(a)
	}

	function Q(a, c, d, e) {
		var f = document.createElement("script");
		f.src = b("createTrustedScriptURLFromFacebookURI")(c.src);
		f.async = !0;
		c.nc || (f.crossOrigin = "anonymous");
		R(f, a, c, d);
		e.appendChild(f);
		return f
	}

	function R(a, c, d, e) {
		var f = a.src,
			g = (i || (i = b("performanceAbsoluteNow")))(),
			h = b("TimeSlice").getGuardedContinuation("Bootloader script.onresponse"),
			j = b("ResourceTimingsStore").getUID("js", f);
		b("ResourceTimingsStore").annotate("js", j).addStringAnnotation("name", c).addStringAnnotation("source", f);
		b("ifRequireable")("TimeSliceInteraction", function (a) {
			a.informGlobally("bootloader._loadJS").addStringAnnotation("source", f).addStringAnnotation("name", c)
		});
		b("ResourceTimingsStore").measureRequestSent("js", j);
		a.onload = h.bind(void 0, function () {
			var a;
			a = (a = x.get(f)) != null ? a : 0;
			a && b("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", c, f, (i || (i = b("performanceAbsoluteNow")))() - g, a);
			b("ResourceTimingsStore").measureResponseReceived("js", j);
			e()
		});
		a.onreadystatechange = function () {
			["loaded", "complete"].includes(this.readyState) && (b("ResourceTimingsStore").measureResponseReceived("js", j), h.bind(void 0, e)())
		};
		a.onerror = h.bind(void 0, function () {
			var h;
			b("ResourceTimingsStore").measureResponseReceived("js", j);
			h = (h = x.get(f)) != null ? h : 0;
			var k = (i || (i = b("performanceAbsoluteNow")))();
			O() && h < F.length ? (y.push(k), setTimeout(function () {
				if (!O()) return;
				var b = a.parentNode;
				b && (b.removeChild(a), Q(c, d, e, b))
			}, F[h]), x.set(f, h + 1)) : (r.set(c, k), b("FBLogger")("bootloader").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", c, f, k - g, h, p.size - q.size), b("NetworkStatus").reportError(), e())
		})
	}

	function S(a, c, d) {
		return function () {
			b("FBLogger")("bootloader").warn("CSS timeout [%s] at %s | concurrency: %s", a, c.src, p.size - q.size), r.set(a, (i || (i = b("performanceAbsoluteNow")))()), b("NetworkStatus").reportError(), d()
		}
	}

	function T(a, c, d, e) {
		if (p.has(a)) return;
		p.set(a, (i || (i = b("performanceAbsoluteNow")))());
		window.CavalryLogger && window.CavalryLogger.getInstance().measureResources({
			name: a,
			type: c.type
		}, e);
		switch (c.type) {
			case "js":
				Q(a, c, function () {
					return $.done(a)
				}, d);
				break;
			case "css":
				var f = function () {
					return $.done(a)
				};
				b("CSSLoader").loadStyleSheet(a, c.src, d, !c.nc, f, S(a, c, f));
				break;
			case "async":
				b("BootloaderEndpoint").load(c.module, c.blocking, a, e);
				break;
			default:
				c.type, g(0, 3721)
		}
	}

	function U(a, c, d, e, f) {
		var h = new Map(),
			i = [];
		for (var a = X(a), j = Array.isArray(a), k = 0, a = j ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var l;
			if (j) {
				if (k >= a.length) break;
				l = a[k++]
			} else {
				k = a.next();
				if (k.done) break;
				l = k.value
			}
			l = l;
			var m = l[0];
			l = l[1];
			switch (l.type) {
				case "css":
					l.nonblocking || i.push(E.rsrcDone(m));
					break;
				case "js":
					i.push(E.rsrcDone(m));
					break;
				case "async":
					l.blocking && i.push(E.rsrcDone(m));
					break;
				default:
					l.type, g(0, 3721)
			}
			p.has(m) || h.set(m, l);
			f == null ? void 0 : f.set(m, l)
		}
		if (c) {
			var n = b("cr:696703") ? b("BootloaderConfig").highPriBootloads === !0 ? b("cr:696703").getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE() : b("cr:696703").getCallbackScheduler() : function (a) {
				return a()
			};
			E.registerCallback(function () {
				n(c)
			}, i)
		}
		for (var m = h, l = Array.isArray(m), k = 0, m = l ? m : m[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			if (l) {
				if (k >= m.length) break;
				j = m[k++]
			} else {
				k = m.next();
				if (k.done) break;
				j = k.value
			}
			a = j;
			f = a[0];
			i = a[1];
			P(f, i, d, e);
			T(f, i, d, e)
		}
	}

	function V(a, c, d) {
		v.set(a, c);
		if (c.type === "async" || c.type === "csr") return;
		c = c.p;
		if (c)
			for (var c = b("CSRIndexUtil").parseCSRIndexes(c), e = Array.isArray(c), f = 0, c = e ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var g;
				if (e) {
					if (f >= c.length) break;
					g = c[f++]
				} else {
					f = c.next();
					if (f.done) break;
					g = f.value
				}
				g = g;
				(!w.has(g) || d) && (w.set(g, a), b("CSRBitMap").add(g))
			}
	}

	function ba(a, c) {
		var d = E.bootload(c);
		if (A.has(d)) return [d, null];
		A.add(d);
		a = {
			ref: a,
			components: c,
			timesliceContext: b("TimeSlice").getContext(),
			startTime: (i || (i = b("performanceAbsoluteNow")))(),
			callbackStart: 0,
			callbackEnd: 0,
			tierOne: new Map(),
			tierTwo: new Map(),
			tierThree: new Map(),
			beRequests: new Map()
		};
		b("BootloaderEvents").notifyBootloadStart(a);
		return [d, a]
	}

	function W(a) {
		return b("ifRequireable").call(null, a, function () {
			return !0
		}, function () {
			return !1
		})
	}

	function ca(a, c, e, f) {
		z.has(a) || z.set(a, {
			firstBootloadStart: (i || (i = b("performanceAbsoluteNow")))(),
			logData: new Set()
		});
		f && b("nullthrows")(z.get(a)).logData.add(f);
		var g = J(a),
			h = g.r,
			j = g.rdfds,
			k = g.rds;
		g = g.be;
		g = W(a) ? null : L(a, g);
		g == null && E.notify(E.beDone(a));
		U(g != null ? [g].concat(h) : h, function () {
			return E.notify(E.tierOne(a))
		}, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierOne);
		U((j == null ? void 0 : j.r) || [], function () {
			return E.registerCallback(function () {
				E.notify(E.tierTwoStart(a)), d.call(null, (j == null ? void 0 : j.m) || [], function () {
					return E.notify(E.tierTwo(a))
				})
			}, [E.tierOne(a), c])
		}, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierTwo);
		U((k == null ? void 0 : k.r) || [], function () {
			return E.registerCallback(function () {
				E.notify(E.tierThreeStart(a)), d.call(null, (k == null ? void 0 : k.m) || [], function () {
					return E.notify(E.tierThree(a))
				})
			}, [E.tierTwo(a)])
		}, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierThree)
	}

	function X(a) {
		var c = new Map();
		for (var d = 0; d < a.length; d++) {
			var e = a[d],
				f = v.get(e);
			if (!f) {
				b("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", e);
				continue
			}
			var h;
			if (f.type === "csr") h = b("CSRIndexUtil").parseCSRIndexes(f.src);
			else if (f.p) h = b("CSRIndexUtil").parseCSRIndexes(f.p);
			else {
				c.set(e, f);
				continue
			}
			for (var e = h, f = Array.isArray(e), h = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var i;
				if (f) {
					if (h >= e.length) break;
					i = e[h++]
				} else {
					h = e.next();
					if (h.done) break;
					i = h.value
				}
				i = i;
				i = b("nullthrows")(w.get(i), "No hash for rsrcIndex:" + i);
				var j = K(i);
				j.type !== "csr" || g(0, 20056, i);
				c.set(i, j)
			}
		}
		return c.entries()
	}

	function Y(a) {
		var c, d = a.getAttribute("data-bootloader-hash");
		if (d == null) return;
		var e = b("ResourceHasher").getValidResourceHash(d);
		if (a.id) {
			if (C.has(a.id)) return;
			C.add(a.id)
		}
		d = a.tagName == "SCRIPT" ? {
			src: a.src,
			type: "js"
		} : {
			src: a.href,
			type: "css"
		};
		a.crossOrigin == null && (d.nc = 1);
		d.type === "css" && a.getAttribute("data-nonblocking") && (d.nonblocking = 1);
		d.p = a.getAttribute("data-p");
		v.has(e) && !b("BootloaderConfig").silentDups && b("FBLogger")("bootloader").warn("Duplicate resource [%s]: %s", e, d.src);
		V(e, d, !0);
		p.set(e, (i || (i = b("performanceAbsoluteNow")))());
		var f = function () {
			return $.done(e)
		};
		c = d.type === "js" ? !a.getAttribute("async") : ((c = a.parentNode) == null ? void 0 : c.tagName) === "HEAD";
		c || window._btldr && window._btldr[e] ? f() : d.type === "js" ? R(a, e, d, f) : b("CSSLoader").setupEventListeners(e, d.src, M(), f, S(e, d, f), a)
	}

	function Z() {
		if (B) return;
		B = !0;
		Array.from(document.getElementsByTagName("link")).forEach(function (a) {
			return Y(a)
		});
		Array.from(document.getElementsByTagName("script")).forEach(function (a) {
			return Y(a)
		})
	}

	function da() {
		D = !0;
		var a = o;
		o = [];
		a.forEach(function (a) {
			var b = a[0],
				c = a[1],
				d = a[2];
			a = a[3];
			a(function () {
				$.loadModules.apply($, [b, c, d])
			})
		});
		a = n;
		n = [];
		a.forEach(function (a) {
			var b = a[0];
			a = a[1];
			a(function () {
				$.preloadModules.apply($, [b])
			})
		})
	}
	var $ = {
		preloadModules: function (a, c, d) {
			c === void 0 && k;
			d === void 0 && (d = "preloadModules: unknown caller");
			if (!I(a)) {
				c = b("TimeSlice").getGuardedContinuation("Deferred: Bootloader.preloadModules");
				n.push([a, c]);
				return
			}
			var e = [];
			for (var c = 0; c < a.length; c++) {
				var f = a[c];
				if (W(f)) continue;
				var g = J(f),
					h = g.r,
					i = g.rdfds;
				g = g.be;
				e.push(L(f, g));
				e.push.apply(e, h);
				e.push.apply(e, (i == null ? void 0 : i.r) || [])
			}
			N(function (a) {
				for (var b = X(e), c = Array.isArray(b), f = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					var g;
					if (c) {
						if (f >= b.length) break;
						g = b[f++]
					} else {
						f = b.next();
						if (f.done) break;
						g = f.value
					}
					g = g;
					var h = g[0];
					g = g[1];
					P(h, g, a, d)
				}
			})
		},
		loadModules: function (a, c, e) {
			c === void 0 && (c = k);
			e === void 0 && (e = "loadModules: unknown caller");
			var f = !1,
				g = function () {
					f || c.apply(void 0, arguments)
				},
				h = {
					remove: function () {
						f = !0
					}
				};
			if (!I(a)) {
				var j = "Deferred: Bootloader.loadModules";
				j = b("TimeSlice").getGuardedContinuation(j);
				o.push([a, g, e, j]);
				return h
			}
			j = ba(e, a);
			var l = j[0],
				m = j[1];
			E.registerCallback(d.bind(null, a, function () {
				m && (m.callbackStart = (i || (i = b("performanceAbsoluteNow")))()), g.apply(void 0, arguments), m && (m.callbackEnd = (i || (i = b("performanceAbsoluteNow")))()), E.notify(l)
			}), a.map(function (a) {
				return E.tierOne(a)
			}));
			N(function (c) {
				for (var d = 0; d < a.length; d++) {
					var b = a[d];
					ca(b, l, c, m)
				}
			});
			if (m) {
				j = new Set();
				for (var n = 0; n < a.length; n++) {
					var p = a[n];
					j.add(E.beDone(p));
					j.add(E.tierThree(p))
				}
				p = [m.tierOne, m.tierTwo, m.tierThree];
				for (var n = 0; n < p.length; n++) {
					var q = p[n];
					for (var q = q.keys(), r = Array.isArray(q), s = 0, q = r ? q : q[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
						var t;
						if (r) {
							if (s >= q.length) break;
							t = q[s++]
						} else {
							s = q.next();
							if (s.done) break;
							t = s.value
						}
						t = t;
						j.add(E.rsrcDone(t))
					}
				}
				E.registerCallback(function () {
					return b("BootloaderEvents").notifyBootload(m)
				}, Array.from(j));
				b("ifRequireable")("TimeSliceInteraction", function (b) {
					b.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", Array.from(m.tierOne.keys())).addSetAnnotation("rdfd_requested_hashes", Array.from(m.tierTwo.keys())).addSetAnnotation("rd_requested_hashes", Array.from(m.tierThree.keys())).addStringAnnotation("bootloader_reference", e).addSetAnnotation("requested_components", a)
				})
			}
			return h
		},
		loadResources: function (a, c, d, e) {
			d === void 0 && (d = "loadResources: unknown caller"), Z(), N(function (f) {
				return U(a.map(function (a) {
					return b("ResourceHasher").getValidResourceHash(a)
				}), c, f, d, e)
			})
		},
		requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function (a) {
			var c = b("ResourceHasher").createExternalJSHash();
			V(c, {
				type: "js",
				src: a,
				nc: 1
			}, !1);
			$.loadResources([c])
		},
		done: function (a) {
			q.set(a, (i || (i = b("performanceAbsoluteNow")))()), window.CavalryLogger && window.CavalryLogger.done_js([a]), E.notify(E.rsrcDone(a))
		},
		beDone: function (a, b, c) {
			var d = new Set();
			for (var e = (e = (e = z.get(a)) == null ? void 0 : e.logData) != null ? e : [], f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var e, h;
				if (f) {
					if (g >= e.length) break;
					h = e[g++]
				} else {
					g = e.next();
					if (g.done) break;
					h = g.value
				}
				h = h;
				h.beRequests.set(b, c);
				for (var h = c.all.keys(), i = Array.isArray(h), j = 0, h = i ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					var k;
					if (i) {
						if (j >= h.length) break;
						k = h[j++]
					} else {
						j = h.next();
						if (j.done) break;
						k = j.value
					}
					k = k;
					d.add(E.rsrcDone(k))
				}
			}
			E.registerCallback(function () {
				return E.notify(E.beDone(a))
			}, Array.from(d))
		},
		handlePayload: function (a) {
			for (var b = (b = a.rsrcTags) != null ? b : [], c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var b, e;
				if (c) {
					if (d >= b.length) break;
					e = b[d++]
				} else {
					d = b.next();
					if (d.done) break;
					e = d.value
				}
				e = e;
				Y(document.getElementById(e))
			}
			$.setResourceMap((e = a.rsrcMap) != null ? e : {}, a.sotUpgrades, (c = (d = a.consistency) == null ? void 0 : d.rev) != null ? c : a.sr_revision);
			a.compMap && $.enableBootload(a.compMap)
		},
		enableBootload: function (a) {
			for (var b in a) t.has(b) || t.set(b, a[b]);
			Z();
			l || da()
		},
		undeferBootloads: function (a) {
			a === void 0 && (a = !1);
			if (window.location.search.indexOf("&__deferBootloads=") !== -1) return;
			a && l && b("BootloaderEvents").notifyDeferTimeout({
				componentMapSize: t.size,
				pending: o.map(function (a) {
					var b = a[0];
					a[1];
					var c = a[2];
					a[3];
					return {
						components: b,
						ref: c
					}
				}),
				time: (j || (j = b("performanceNow")))()
			});
			l = !1;
			t.size && da()
		},
		markComponentsAsImmediate: function (a) {
			for (var c = 0; c < a.length; c++) {
				var d = a[c],
					e = t.get(d);
				e && e.be && (delete e.be, $.done(b("ResourceHasher").getAsyncHash(d)))
			}
		},
		setResourceMap: function (a, c, d) {
			var e = !1;
			for (var f in a) {
				f = b("ResourceHasher").getValidResourceHash(f);
				var g = a[f],
					h = v.get(f);
				!h ? (g.type === "js" && (e = !0), V(f, g, !1)) : (h.type === "js" && g.type === "js" || h.type === "css" && g.type === "css") && (g.d && !h.d && (g.type === "js" && (e = !0), h.src = g.src, h.d = 1))
			}
			e && d != null && b("ClientConsistency").addAdditionalRevision(d);
			if (c)
				for (var g = c, h = Array.isArray(g), a = 0, g = h ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					if (h) {
						if (a >= g.length) break;
						e = g[a++]
					} else {
						a = g.next();
						if (a.done) break;
						e = a.value
					}
					d = e;
					c = v.get(d);
					c && V(d, c, !0)
				}
		},
		getURLToHashMap: function () {
			var a = new Map();
			for (var b = v, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var e;
				if (c) {
					if (d >= b.length) break;
					e = b[d++]
				} else {
					d = b.next();
					if (d.done) break;
					e = d.value
				}
				e = e;
				var f = e[0];
				e = e[1];
				if (e.type === "async" || e.type === "csr") continue;
				a.set(e.src, f)
			}
			return a
		},
		loadPredictedResourceMap: function (a, b, c) {
			$.setResourceMap(a, null, c), $.loadResources(Object.keys(a), b)
		},
		getCSSResources: function (a) {
			var b = [];
			for (var a = X(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
				var f = e[0];
				e = e[1];
				e.type === "css" && b.push(f)
			}
			return b
		},
		getBootloadedComponents: function () {
			var a = new Map();
			for (var b = z, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var e;
				if (c) {
					if (d >= b.length) break;
					e = b[d++]
				} else {
					d = b.next();
					if (d.done) break;
					e = d.value
				}
				e = e;
				var f = e[0];
				e = e[1];
				a.set(f, e.firstBootloadStart)
			}
			return a
		},
		getResourceState: function (a) {
			return {
				loadStart: p.get(a),
				loadEnd: q.get(a),
				loadError: r.get(a)
			}
		},
		getComponentTiming: function (a) {
			var b;
			return {
				tierTwoStart: (b = E.getEventTime(E.tierTwoStart(a))) != null ? b : 0,
				tierTwoEnd: (b = E.getEventTime(E.tierTwo(a))) != null ? b : 0,
				tierThreeStart: (b = E.getEventTime(E.tierThreeStart(a))) != null ? b : 0,
				tierThreeEnd: (b = E.getEventTime(E.tierThree(a))) != null ? b : 0
			}
		},
		getLoadedResourceCount: function () {
			return q.size
		},
		getErrorCount: function () {
			return r.size
		},
		__debug: {
			componentMap: t,
			requested: p,
			resources: v,
			riMap: w,
			retries: x,
			errors: r,
			loaded: q,
			bootloaded: z,
			_resolveCSRs: X,
			_queuedLoadModules: o,
			_dequeueLoadModules: function (a) {
				a = o.splice(a, 1);
				if (!a.length) return;
				a = a[0];
				var b = a[0],
					c = a[1],
					d = a[2];
				a = a[3];
				var e = l,
					f = D,
					g = m;
				l = !1;
				D = !0;
				m = !1;
				a(function () {
					$.loadModules.apply($, [b, c, d])
				});
				l = e;
				D = f;
				m = g
			}
		}
	};
	b("JSResourceReference").setBootloader($);
	e.exports = $
}), null);