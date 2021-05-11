__d("ScrollableArea", ["requireDeferred", "ArbiterMixin", "BrowserSupport", 
	"CSS", "CSSFade", "DataStore", "Deferred", "DOM", "DOMScroll", "Event", 
	"FocusEvent", "Run", "Scroll", "SimpleDrag", "Style", "SubscriptionsHandler", 
	"TimeSlice", "UserAgent_DEPRECATED", "Vector", "clearTimeout", "createCancelableFunction", "emptyFunction", "firstx", "getScrollableAreaContainingNode", "mixin", "promiseDone", "queryThenMutateDOM", "setTimeoutAcrossTransitions", "throttle"], (function (a, b, c, d, e, f) {
	var g = b("requireDeferred")("Animation"),
		h = 12;
	a = function (a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c(c, d) {
			var e;
			e = a.call(this) || this;
			e.adjustGripper = function () {
				var a = function () {
					b("queryThenMutateDOM")(function () {
						return e._needsGripper()
					}, function (a) {
						a && (b("Style").set(e._gripper, "height", e._gripperHeight + "px"), e._slideGripper())
					}), e._throttledShowGripperAndShadows()
				};
				a = b("TimeSlice").guard(a, "ScrollableArea adjustGripper", {
					propagationType: b("TimeSlice").PropagationType.ORPHAN
				});
				a();
				return babelHelpers.assertThisInitialized(e)
			};
			e._computeHeights = function () {
				e._containerHeight = e._elem.clientHeight, e._contentHeight = e._content.offsetHeight, e._trackHeight = e._track.offsetHeight, e._gripperHeight = Math.max(e._containerHeight / e._contentHeight * e._trackHeight, h)
			};
			e._showGripperAndShadows = function () {
				b("queryThenMutateDOM")(function () {
					return {
						needsGripper: e._needsGripper(),
						top: b("Scroll").getTop(e._wrap) > 0,
						isScrolledToBottom: e.isScrolledToBottom()
					}
				}, function (a) {
					var c = a.needsGripper,
						d = a.top;
					a = a.isScrolledToBottom;
					b("CSS").conditionShow(e._gripper, c);
					b("CSS").conditionClass(e._elem, "contentBefore", d);
					b("CSS").conditionClass(e._elem, "contentAfter", !a)
				})
			};
			e._respondMouseMove = function () {
				if (!e._mouseOver || e._isFocussed) return;
				var a = e._options.fade !== !1,
					c = e._mousePos,
					d = b("Vector").getElementPosition(e._track).x,
					f = b("Vector").getElementDimensions(e._track).x;
				d = Math.abs(d + f / 2 - c.x);
				f = b("BrowserSupport").hasPointerEvents() && d <= 10;
				f && !e._trackIsHovered ? (e._trackIsHovered = !0, b("CSS").addClass(e._elem, "uiScrollableAreaTrackOver"), e.throttledAdjustGripper()) : !f && e._trackIsHovered && (e._trackIsHovered = !1, b("CSS").removeClass(e._elem, "uiScrollableAreaTrackOver"));
				a && (d < 25 ? e.showScrollbar({
					hideAfterDelay: !1
				}) : !e._options.no_fade_on_hover && !e._isFocussed && e.hideScrollbar({
					hideAfterDelay: !0,
					shouldFade: !0
				}))
			};
			if (!c) return babelHelpers.assertThisInitialized(e);
			d = d || {};
			e._elem = c;
			e._wrap = b("firstx")(b("DOM").scry(c, "div.uiScrollableAreaWrap"));
			e._body = b("firstx")(b("DOM").scry(e._wrap, "div.uiScrollableAreaBody"));
			e._content = b("firstx")(b("DOM").scry(e._body, "div.uiScrollableAreaContent"));
			e._track = b("firstx")(b("DOM").scry(c, "div.uiScrollableAreaTrack"));
			e._trackIsHovered = !1;
			e._isFocussed = !1;
			e._gripper = b("firstx")(b("DOM").scry(e._track, "div.uiScrollableAreaGripper"));
			e._options = d;
			e._throttledComputeHeights = b("throttle").withBlocking(e._computeHeights, 250, babelHelpers.assertThisInitialized(e));
			e.throttledAdjustGripper = b("throttle").withBlocking(e.adjustGripper, 250, babelHelpers.assertThisInitialized(e));
			e.throttledAdjustGripper = b("TimeSlice").guard(e.throttledAdjustGripper, "ScrollableArea throttledAdjustGripper", {
				propagationType: b("TimeSlice").PropagationType.ORPHAN
			});
			e._throttledShowGripperAndShadows = b("throttle").withBlocking(e._showGripperAndShadows, 250, babelHelpers.assertThisInitialized(e));
			e._throttledRespondMouseMove = b("throttle")(e._respondMouseMove, 250, babelHelpers.assertThisInitialized(e));
			b("setTimeoutAcrossTransitions")(e.adjustGripper.bind(babelHelpers.assertThisInitialized(e)), 0);
			e._listeners = new(b("SubscriptionsHandler"))();
			e._listeners.addSubscriptions(b("Event").listen(e._wrap, "scroll", e._handleScroll.bind(babelHelpers.assertThisInitialized(e))), b("Event").listen(c, "mousemove", e._handleMouseMove.bind(babelHelpers.assertThisInitialized(e))), b("Event").listen(e._track, "click", e._handleClickOnTrack.bind(babelHelpers.assertThisInitialized(e))));
			b("BrowserSupport").hasPointerEvents() && e._listeners.addSubscriptions(b("Event").listen(c, "mousedown", e._handleClickOnTrack.bind(babelHelpers.assertThisInitialized(e))));
			if (d.fade !== !1) {
				var f;
				(f = e._listeners).addSubscriptions.apply(f, [b("Event").listen(c, "mouseenter", e._handleMouseEnter.bind(babelHelpers.assertThisInitialized(e))), b("Event").listen(c, "mouseleave", e._handleMouseLeave.bind(babelHelpers.assertThisInitialized(e)))].concat(e._attachFocusListeners(e._wrap)))
			} else b("BrowserSupport").hasPointerEvents() && e._listeners.addSubscriptions(b("Event").listen(c, "mouseleave", function () {
				e._isFocussed || (e._trackIsHovered = !1, b("CSS").removeClass(c, "uiScrollableAreaTrackOver"))
			}));
			(b("UserAgent_DEPRECATED").webkit() || b("UserAgent_DEPRECATED").chrome()) && e._listeners.addSubscriptions(b("Event").listen(c, "mousedown", function () {
				var a = b("Event").listen(window, "mouseup", function () {
					b("Scroll").getLeft(c) && b("Scroll").setLeft(c, 0), a.remove()
				})
			}));
			e._drag = e.initDrag();
			b("DataStore").set(e._elem, "ScrollableArea", babelHelpers.assertThisInitialized(e));
			d.persistent || (e._destroy = b("createCancelableFunction")(e._destroy.bind(babelHelpers.assertThisInitialized(e))), b("Run").onLeave(e._destroy));
			d.shadow !== !1 && b("CSS").addClass(e._elem, "uiScrollableAreaWithShadow");
			return e
		}
		var d = c.prototype;
		d.getContentHeight = function () {
			return this._contentHeight
		};
		d.getElement = function () {
			return this._elem
		};
		d.initDrag = function () {
			var a = b("BrowserSupport").hasPointerEvents(),
				c = new(b("SimpleDrag"))(a ? this._elem : this._gripper);
			c.subscribe("start", function (d, e) {
				if (!(e.which && e.which === 1 || e.button && e.button === 1)) return !1;
				d = b("Vector").getEventPosition(e, "viewport");
				if (a) {
					var f = this._gripper.getBoundingClientRect();
					if (d.x < f.left || d.x > f.right || d.y < f.top || d.y > f.bottom) return !1
				}
				e.stopPropagation();
				this.inform("grip_start");
				var g = d.y,
					h = this._gripper.offsetTop;
				b("CSS").addClass(this._elem, "uiScrollableAreaDragging");
				var i = c.subscribe("update", function (a, c) {
						a = b("Vector").getEventPosition(c, "viewport").y - g;
						this._throttledComputeHeights();
						c = this._contentHeight - this._containerHeight;
						a = h + a;
						var d = this._trackHeight - this._gripperHeight;
						a = Math.max(Math.min(a, d), 0);
						a = a / d * c;
						b("Scroll").setTop(this._wrap, a)
					}.bind(this)),
					j = c.subscribe("end", function () {
						c.unsubscribe(i), c.unsubscribe(j), b("CSS").removeClass(this._elem, "uiScrollableAreaDragging"), this.inform("grip_end")
					}.bind(this));
				return void 0
			}.bind(this));
			return c
		};
		d._attachFocusListeners = function (a) {
			var c = this,
				d;
			return [b("FocusEvent").listen(a, function (a) {
				d && (d.reject(), d = null), a ? (d = new(b("Deferred"))(), b("promiseDone")(d.getPromise(), function () {
					c._isFocussed = !0, c._trackIsHovered = !0, b("queryThenMutateDOM")(null, function () {
						b("CSS").addClass(c._elem, "uiScrollableAreaTrackOver")
					}), c.showScrollbar({
						hideAfterDelay: !1
					}), d = null
				}, function () {
					d = null
				})) : (c._isFocussed = !1, c._mouseOver ? c._respondMouseMove() : (b("queryThenMutateDOM")(null, function () {
					b("CSS").removeClass(c._elem, "uiScrollableAreaTrackOver")
				}), c.hideScrollbar({
					hideAfterDelay: !1,
					shouldFade: !1
				})))
			}), b("Event").listen(document.documentElement, "keyup", function (a) {
				d && d.resolve()
			})]
		};
		d._needsGripper = function () {
			this._throttledComputeHeights();
			return this._gripperHeight < this._trackHeight
		};
		d._slideGripper = function () {
			var a = this;
			b("queryThenMutateDOM")(function () {
				return b("Scroll").getTop(a._wrap) / (a._contentHeight - a._containerHeight) * (a._trackHeight - a._gripperHeight)
			}, function (c) {
				b("Style").set(a._gripper, "top", c + "px")
			})
		};
		d.destroy = function () {
			this._destroy(), this._destroy.cancel && this._destroy.cancel()
		};
		d._destroy = function () {
			this._listeners && this._listeners.release(), this._elem && b("DataStore").remove(this._elem, "ScrollableArea"), this._drag && this._drag.destroy()
		};
		d._handleClickOnTrack = function (a) {
			var c = b("Vector").getEventPosition(a, "viewport"),
				d = this._gripper.getBoundingClientRect();
			c.x < d.right && c.x > d.left && (c.y < d.top ? this.setScrollTop(this.getScrollTop() - this._elem.clientHeight) : c.y > d.bottom && this.setScrollTop(this.getScrollTop() + this._elem.clientHeight), a.kill())
		};
		d._handleMouseMove = function (a) {
			var c = this._options.fade !== !1;
			(b("BrowserSupport").hasPointerEvents() || c) && (this._mousePos = b("Vector").getEventPosition(a), this._throttledRespondMouseMove())
		};
		d._handleScroll = function (a) {
			this._needsGripper() && this._slideGripper(), this.throttledAdjustGripper(), this._options.fade !== !1 && !this._isFocussed && this.showScrollbar({
				hideAfterDelay: !0
			}), this.inform("scroll")
		};
		d._handleMouseLeave = function (a) {
			this._mouseOver = !1, this._mousePos = b("Vector").getEventPosition(a), this._isFocussed || this.hideScrollbar({
				hideAfterDelay: !0,
				shouldFade: !0
			})
		};
		d._handleMouseEnter = function (a) {
			this._mouseOver = !0, this._mousePos = b("Vector").getEventPosition(a), this._isFocussed || this.showScrollbar({
				hideAfterDelay: !0
			})
		};
		d.hideScrollbar = function (a) {
			var c = this,
				d = a.hideAfterDelay,
				e = a.shouldFade;
			if (this._hideTimeout || !this._scrollbarVisible) return this;
			var f = function () {
				c._scrollbarVisible = !1, b("CSSFade").hide(c._track, {
					simple: !e,
					invisible: b("CSS").hasClass(c._track, "invisible_elem")
				})
			};
			d ? this._hideTimeout = b("setTimeoutAcrossTransitions")(function () {
				c._hideTimeout = null, f()
			}, 750) : f();
			return this
		};
		d.pageDown = function (a, b) {
			this._scrollPage(1, a, b)
		};
		d.pageUp = function (a, b) {
			this._scrollPage(-1, a, b)
		};
		d._scrollPage = function (a, b, c) {
			a = a * this._containerHeight;
			var d = this.getScrollHeight() - this._containerHeight;
			d = Math.max(0, Math.min(d, this.getScrollTop() + a));
			this.setScrollTop(d, b, c)
		};
		d.resize = function () {
			this._body.style.width && (this._body.style.width = "");
			var a = b("DOMScroll").getScrollbarSize();
			a > 0 && b("Style").set(this._body, "margin-right", -a + "px");
			return this
		};
		d.showScrollbar = function (a) {
			var c = this,
				d = a.hideAfterDelay;
			this._hideTimeout && (b("clearTimeout")(this._hideTimeout), this._hideTimeout = null);
			if (this._scrollbarVisible) return this;
			this._scrollbarVisible = !0;
			b("queryThenMutateDOM")(null, function () {
				b("CSSFade").show(c._track, {
					duration: 0,
					invisible: b("CSS").hasClass(c._track, "invisible_elem")
				}), c.throttledAdjustGripper(), d && c.hideScrollbar({
					hideAfterDelay: !0,
					shouldFade: !c._options.no_fade_on_hover
				})
			});
			return this
		};
		d.distanceToBottom = function () {
			this._computeHeights();
			var a = Math.round(b("Scroll").getTop(this._wrap));
			return this._contentHeight - (a + this._containerHeight)
		};
		d.isScrolledToBottom = function () {
			return this.distanceToBottom() <= 0
		};
		d.isScrolledToTop = function () {
			return b("Scroll").getTop(this._wrap) === 0
		};
		d.scrollToBottom = function (a, b) {
			this.setScrollTop(this._wrap.scrollHeight, a, b)
		};
		d.scrollToTop = function (a, b) {
			this.setScrollTop(0, a, b)
		};
		d.scrollIntoView = function (a, c, d) {
			var e = this._wrap.clientHeight,
				f = a.offsetHeight,
				g = b("Scroll").getTop(this._wrap),
				h = g + e;
			a = this.getScrollOffsetForElement(a);
			var i = a + f;
			if (a < g || e < f) return this.setScrollTop(a, c, {
				callback: d
			});
			else if (i > h) return this.setScrollTop(g + (i - h), c, {
				callback: d
			});
			d && d();
			return b("emptyFunction")
		};
		d.getScrollOffsetForElement = function (a) {
			var b = 0;
			while (a != null && a !== this._wrap) b += a.offsetTop, a = a.offsetParent;
			return b
		};
		d.scrollElemToTop = function (a, b, c) {
			this.setScrollTop(a.offsetTop, b, {
				callback: c
			})
		};
		d.poke = function () {
			var a, c = (a = b("Scroll")).getTop(this._wrap);
			a.setTop(this._wrap, a.getTop(this._wrap) + 1);
			a.setTop(this._wrap, a.getTop(this._wrap) - 1);
			a.setTop(this._wrap, c);
			if (this._isFocussed) return this;
			else return this.showScrollbar({
				hideAfterDelay: !1
			})
		};
		d.getClientHeight = function () {
			return this._wrap.clientHeight
		};
		d.getScrollTop = function () {
			return b("Scroll").getTop(this._wrap)
		};
		d.getScrollHeight = function () {
			return this._wrap.scrollHeight
		};
		d.setScrollTop = function (a, b, c) {
			c === void 0 && (c = {});
			var d;
			if (b !== !1) {
				b = g.getModuleIfRequired();
				b != null ? d = this._animatedSetScrollTop(b, a, c) : this._simpleSetScrollTop(a, c)
			} else this._simpleSetScrollTop(a, c);
			return function () {
				d && d.stop(), d = null
			}
		};
		d._simpleSetScrollTop = function (a, c) {
			b("Scroll").setTop(this._wrap, a), c.callback && c.callback()
		};
		d._animatedSetScrollTop = function (a, b, c) {
			this._scrollTopAnimation && this._scrollTopAnimation.stop();
			var d = c.duration || 250,
				e = c.ease || a.ease.end;
			this._scrollTopAnimation = new a(this._wrap).to("scrollTop", b).ease(e).duration(d).ondone(c.callback).go();
			return this._scrollTopAnimation
		};
		c.renderDOM = function () {
			var a, c = (a = b("DOM")).create("div", {
					className: "uiScrollableAreaContent"
				}),
				d = a.create("div", {
					className: "uiScrollableAreaBody"
				}, c),
				e = a.create("div", {
					className: "uiScrollableAreaWrap scrollable"
				}, d);
			a = a.create("div", {
				className: "uiScrollableArea native"
			}, e);
			return {
				root: a,
				wrap: e,
				body: d,
				content: c
			}
		};
		c.fromNative = function (a, d) {
			if (!b("CSS").hasClass(a, "uiScrollableArea") || !b("CSS").hasClass(a, "native")) return void 0;
			d = d || {};
			b("CSS").removeClass(a, "native");
			var e = b("DOM").create("div", {
				className: "uiScrollableAreaTrack"
			}, b("DOM").create("div", {
				className: "uiScrollableAreaGripper"
			}));
			d.fade !== !1 ? (b("CSS").addClass(a, "fade"), b("CSS").addClass(e, "hidden_elem")) : b("CSS").addClass(a, "nofade");
			d.tabIndex !== void 0 && d.tabIndex !== null ? (b("DOM").setAttributes(e, {
				tabIndex: d.tabIndex
			}), b("DOM").prependContent(a, e)) : b("DOM").appendContent(a, e);
			e = new c(a, d);
			e.resize();
			return e
		};
		c.getInstance = function (a) {
			return b("getScrollableAreaContainingNode")(a)
		};
		c.poke = function (a) {
			a = c.getInstance(a);
			a && a.poke()
		};
		return c
	}(b("mixin")(b("ArbiterMixin")));
	e.exports = a
}), null);