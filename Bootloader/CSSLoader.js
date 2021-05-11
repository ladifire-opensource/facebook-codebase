__d("CSSLoader", ["CSSLoaderConfig", "NetworkStatus", "ResourceTimingsStore", "TimeSlice", "clearInterval", "ifRequired", "isEmpty", "nullthrows", "setIntervalAcrossTransitions"], (function (a, b, c, d, e, f) {
	var g, h = 20,
		i = b("CSSLoaderConfig").timeout,
		j = b("CSSLoaderConfig").loadEventSupported,
		k, l = [],
		m, n = new Map();

	function o(a) {
		if (k) return;
		k = !0;
		var b = document.createElement("link");
		b.onload = function () {
			j = !0, b.parentNode && b.parentNode.removeChild(b)
		};
		b.rel = "stylesheet";
		b.href = "data:text/css;base64,";
		a.appendChild(b)
	}

	function p() {
		var a = [],
			c = [];
		if (Date.now() >= m) {
			for (var d = n.values(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var h;
				if (e) {
					if (f >= d.length) break;
					h = d[f++]
				} else {
					f = d.next();
					if (f.done) break;
					h = f.value
				}
				h = h;
				c.push(h.signal);
				a.push(h.error)
			}
			n.clear()
		} else
			for (var h = n, f = Array.isArray(h), e = 0, h = f ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				if (f) {
					if (e >= h.length) break;
					d = h[e++]
				} else {
					e = h.next();
					if (e.done) break;
					d = e.value
				}
				d = d;
				var j = d[0];
				d = d[1];
				var k = d.signal,
					l = window.getComputedStyle ? getComputedStyle(k) : k.currentStyle;
				l && parseInt(l.height, 10) > 1 && (a.push(d.load), c.push(k), n["delete"](j))
			}
		for (var l = 0; l < c.length; l++) {
			d = b("nullthrows")(c[l].parentNode);
			d.removeChild(c[l])
		}
		if (!(g || (g = b("isEmpty")))(a)) {
			for (l = 0; l < a.length; l++) a[l]();
			m = Date.now() + i
		}
		return n.size === 0
	}

	function q(a, c, d, e) {
		var f = document.createElement("meta");
		f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
		c.appendChild(f);
		c = n.size !== 0;
		m = Date.now() + i;
		n.set(a, {
			signal: f,
			load: d,
			error: e
		});
		if (!c) var g = b("setIntervalAcrossTransitions")(function () {
			p() && b("clearInterval")(g)
		}, h)
	}

	function r(a, c, d, e, f, g) {
		var h = b("ResourceTimingsStore").getUID("css", c);
		b("ResourceTimingsStore").annotate("css", h).addStringAnnotation("name", a).addStringAnnotation("source", c).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
		b("ifRequired")("TimeSliceInteraction", function (b) {
			b.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", c).addStringAnnotation("name", a)
		});
		b("ResourceTimingsStore").measureRequestSent("css", h);
		var i = function () {
				b("ResourceTimingsStore").measureResponseReceived("css", h), e()
			},
			k = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
		!g ? q(a, d, i, f) : j !== !0 ? (q(a, d, i, f), j === void 0 && o(d)) : (g.onload = k.bind(void 0, function () {
			g.onload = g.onerror = null, i()
		}), g.onerror = k.bind(void 0, function () {
			g.onload = g.onerror = null, f()
		}))
	}
	a = {
		loadStyleSheet: function (a, c, d, e, f, g) {
			var h = document;
			if ("createStyleSheet" in h) {
				var i;
				for (var j = 0; j < l.length; j++)
					if (l[j].imports.length < 31) {
						i = j;
						break
					}
				if (i === void 0) {
					try {
						l.push(h.createStyleSheet())
					} catch (a) {
						b("NetworkStatus").reportError();
						g();
						return
					}
					i = l.length - 1
				}
				b("NetworkStatus").reportSuccess();
				l[i].addImport(c);
				r(a, c, d, f, g, null);
				return
			}
			j = h.createElement("link");
			j.rel = "stylesheet";
			j.type = "text/css";
			j.href = c;
			e && (j.crossOrigin = "anonymous");
			r(a, c, d, f, g, j);
			d.appendChild(j)
		},
		setupEventListeners: function (a, b, c, d, e, f) {
			r(a, b, c, d, e, f)
		}
	};
	e.exports = a
}), null);