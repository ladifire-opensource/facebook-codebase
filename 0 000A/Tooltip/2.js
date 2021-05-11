__d("Tooltip", ["fbt", "invariant", "Arbiter", "AsyncRequest", "CSS", "ContextualLayer", "ContextualLayerAutoFlip", "DOM", "Event", "Style", "TooltipData", "Vector", "emptyFunction", "getElementText", "getInlineBoundingRect", "getOrCreateDOMID", "gkx", "killswitch", "nl2br", "setImmediate"], (function(a, b, c, d, e, f, g, h) {
	var i = null,
		j = null,
		k = null,
		l = null,
		m = null,
		n = null,
		o = null,
		p = !1,
		q = [],
		r = [];

	function s() {
		if (!m) {
			n = b("DOM").create("div", {
				className: "tooltipContent",
				"data-testid": "tooltip_testid"
			});
			o = b("getOrCreateDOMID")(n);
			var a = b("DOM").create("i", {
				className: "arrow"
			});
			a = b("DOM").create("div", {
				className: "uiTooltipX"
			}, [n, a]);
			m = new(b("ContextualLayer"))({}, a);
			m.shouldSetARIAProperties(!1);
			m.enableBehavior(b("ContextualLayerAutoFlip"));
			b("gkx")("764802") && (m.getRoot().style.pointerEvents = "none")
		}
	}

	function t(a, c) {
		v._show(a, g._("Loading...")), new(b("AsyncRequest"))(c).setHandler(function(b) {
			v._show(a, b.getPayload()), m && m.updatePosition()
		}).setErrorHandler(b("emptyFunction")).send()
	}
	var u;
	b("Event").listen(document.documentElement, "mouseover", function(a) {
		u = a, b("setImmediate")(function() {
			u = null
		})
	});
	var v = babelHelpers["extends"]({}, b("TooltipData"), {
		isActive: function(a) {
			return a === i
		},
		process: function(a, c) {
			if (!b("DOM").contains(a, c)) return;
			if (a !== i) {
				v.fetchIfNecessary(a);
				c = v._get(a);
				if (c.suppress) return;
				c.delay ? v._showWithDelay(a, c.delay) : v.show(a)
			}
		},
		fetchIfNecessary: function(a) {
			var b = a.getAttribute("data-tooltip-uri");
			b && (a.removeAttribute("data-tooltip-uri"), t(a, b))
		},
		suspend: function() {
			p = !0
		},
		hide: function() {
			var a = i,
				c, d = p;
			p = !1;
			try {
				b("Arbiter").inform("tooltip/requesthide", {
					context: a
				}), c = p
			} finally {
				p = d
			}
			c || v.commitHide(a)
		},
		commitHide: function(a) {
			if (!j || a !== j) {
				if (a && m) {
					m.hide();
					i = null;
					while (q.length) q.pop().remove()
				}
				b("Arbiter").inform("tooltip/hide", {
					context: a
				})
			}
		},
		_show: function(a, b) {
			v._store({
				context: a,
				content: b
			}), v.isActive(a) && v.show(a)
		},
		show: function(a) {
			var c, d = p;
			p = !1;
			try {
				b("Arbiter").inform("tooltip/requestshow", {
					context: a
				}), c = p
			} finally {
				p = d
			}
			c || v.commitShow(a)
		},
		commitShow: function(a) {
			var c = function() {
					a.removeAttribute("aria-describedby");
					var c = v._get(a);
					c.className && m && b("CSS").removeClass(m.getRoot(), c.className);
					v.hide()
				},
				d = function(a) {
					b("DOM").contains(i, a.getTarget()) || c()
				};
			j = a;
			s();
			a !== i && (b("killswitch")("TOOLTIP_FIX_HIDE_ACTIVE_TOOLTIP_BEFORE_NEW_ONE") ? v.commitHide(a) : v.commitHide(i));
			j = null;
			a !== i && b("Arbiter").inform("tooltip/beforeshow", {
				context: a
			});
			var e = v._get(a);
			if (e.suppress || v.allSuppressed) return;
			var f = e.content;
			if (e.overflowDisplay) {
				if (a.offsetWidth >= a.scrollWidth) return;
				f || (f = b("getElementText")(a))
			}
			var g = f ? function() {
					a.setAttribute("aria-describedby", o), m && m.show()
				} : function() {},
				k = 0,
				l = e.offsetY ? parseInt(e.offsetY, 10) : 0;
			if (e.position === "left" || e.position === "right") l = (a.offsetHeight - 28) / 2;
			else if (e.alignH !== "center") {
				var p = a.offsetWidth;
				p < 32 && (k = (p - 32) / 2 * (e.alignH === "right" ? -1 : 1))
			}
			p = u ? b("Vector").getEventPosition(u) : b("Vector").getElementPosition(a);
			m || h(0, 4328);
			m.setContextWithBounds(a, b("getInlineBoundingRect")(a, p)).setOffsetX(k).setOffsetY(l).setPosition(e.position).setAlignment(e.alignH);
			if (typeof f === "string") {
				b("CSS").addClass(m.getRoot(), "invisible_elem");
				p = b("DOM").create("span", {}, b("nl2br")(f));
				k = b("DOM").create("div", {
					className: "tooltipText"
				}, p);
				b("DOM").setContent(n, k);
				g();
				b("CSS").removeClass(m.getRoot(), "invisible_elem")
			} else b("DOM").setContent(n, f), g();
			q.push(b("Event").listen(document.documentElement, "mouseover", d), b("Event").listen(document.documentElement, "focusin", d));
			l = b("Style").getScrollParent(a);
			l !== window && q.push(b("Event").listen(l, "scroll", c));
			e.persistOnClick || q.push(b("Event").listen(a, "click", c));
			e.className && b("CSS").addClass(m.getRoot(), e.className);
			i = a
		},
		_showWithDelay: function(a, c) {
			a !== k && v._clearDelay();
			if (!l) {
				var d = function(a) {
					b("DOM").contains(k, a.getTarget()) || v._clearDelay()
				};
				r.push(b("Event").listen(document.documentElement, "mouseover", d), b("Event").listen(document.documentElement, "focusin", d));
				k = a;
				l = setTimeout(function() {
					v._clearDelay(), v.show(a)
				}, c)
			}
		},
		_clearDelay: function() {
			clearTimeout(l);
			k = null;
			l = null;
			while (r.length) r.pop().remove()
		}
	});
	b("Event").listen(window, "scroll", v.hide);
	e.exports = v
}), null);