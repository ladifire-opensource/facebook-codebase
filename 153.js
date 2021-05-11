if (self.CavalryLogger) {
    CavalryLogger.start_js(["8QsxI"]);
}

__d("FeedBlacklistButton", ["Arbiter", "Event"], (function(a, b, c, d, e, f) {
    var g = {
        BLACKLIST: "feed_blacklist",
        UNBLACKLIST: "feed_unblacklist",
        init: function(a, c, d, e) {
            b("Event").listen(c, "click", function() {
                var a = {
                    profile_id: e
                };
                b("Arbiter").inform(g.BLACKLIST, a);
                b("Arbiter").inform("UnfollowingUser", a)
            }),
            b("Event").listen(d, "click", function() {
                var a = {
                    profile_id: e
                };
                b("Arbiter").inform(g.UNBLACKLIST, a);
                b("Arbiter").inform("FollowingUser", a)
            }),
            b("Arbiter").subscribe(g.BLACKLIST, function(b, c) {
                e == c.profile_id && a.swap()
            }),
            b("Arbiter").subscribe(g.UNBLACKLIST, function(b, c) {
                e == c.profile_id && a.unswap()
            })
        }
    };
    e.exports = a.FeedBlacklistButton || g
}
), null);
__d("XFeedSeeFirstNuxController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/feed/control/see_first/nux/", {})
}
), null);
__d("ProfileHoverButton", ["csx", "cx", "Arbiter", "AsyncRequest", "CSS", "DOM", "Event", "FeedBlacklistButton", "MenuStaticItem", "QE2Logger", "Run", "SubscribeButton", "SubscriptionsHandler", "XFeedSeeFirstNuxController"], (function(a, b, c, d, e, f, g, h) {
    var i = 1
      , j = "live_notifs"
      , k = {
        follow: 0,
        see_first: 0,
        see_more: 0,
        highlights_only: 0,
        subscribe_all_live_notifications: j,
        subscribe_suggested_live_notifications: j,
        subscribe_none_live_notifications: j
    };
    a = function() {
        "use strict";
        function a(a, c, d, e, f) {
            var g = this;
            this.$1 = c;
            this.$2 = d;
            this.$3 = f;
            this.$4 = e;
            this.$5 = a;
            this.$6 = null;
            this.$7 = new (b("SubscriptionsHandler"))();
            this.$2.subscribe("itemclick", function(a, c) {
                if (c.item instanceof b("MenuStaticItem"))
                    return;
                a = c.item.getValue();
                a === "unfollow" ? (b("Arbiter").inform(b("SubscribeButton").UNSUBSCRIBED, {
                    profile_id: this.$3.id
                }),
                b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST, {
                    profile_id: this.$3.id
                }),
                this.$4 && this.$4.hide(),
                this.$5.getPopover().hideLayer()) : (this.setSelected(a),
                a === "see_first" ? (this.$4 && (this.$4.hide(),
                this.logNux("see_first_selected")),
                b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED, {
                    profile_id: this.$3.id,
                    see_first: !0,
                    see_more: !1,
                    highlights_only: !1
                })) : a === "see_more" ? b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED, {
                    profile_id: this.$3.id,
                    see_first: !1,
                    see_more: !0,
                    highlights_only: !1
                }) : a === "highlights_only" ? b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED, {
                    profile_id: this.$3.id,
                    see_first: !1,
                    see_more: !1,
                    highlights_only: !0
                }) : b("Arbiter").inform(b("SubscribeButton").SUBSCRIBED, {
                    profile_id: this.$3.id,
                    see_first: !1,
                    see_more: !1,
                    highlights_only: !1
                }))
            }
            .bind(this));
            this.$7.addSubscriptions(b("Arbiter").subscribe(b("SubscribeButton").SUBSCRIBED, function(a, b) {
                if (g.$3.id !== b.profile_id)
                    return;
                b.see_first ? g.setSelected("see_first") : b.see_more ? g.setSelected("see_more") : b.highlights_only ? g.setSelected("highlights_only") : g.setSelected("follow")
            }));
            this.$7.addSubscriptions(b("Arbiter").subscribe("revert", this.handleResponse.bind(this)));
            this.$4 && (this.$4.show(),
            this.logNux("imp"),
            this.$7.addSubscriptions(b("Event").listen(b("DOM").find(this.$4.getRoot(), "._50zy"), "click", this.logNux.bind(this, "xout"))));
            b("Run").onLeave(this.cleanUp.bind(this))
        }
        var c = a.prototype;
        c.logNux = function(a) {
            var c = b("XFeedSeeFirstNuxController").getURIBuilder().getURI();
            new (b("AsyncRequest"))(c).setData({
                event: a,
                id: this.$3.id
            }).send()
        }
        ;
        c.getButtons = function() {
            return b("DOM").scry(this.$1, "._3oz-")
        }
        ;
        c.getSelected = function() {
            var a = this.getButtons()
              , c = null;
            a.forEach(function(a) {
                var d = a.getAttribute("data-status");
                b("CSS").matchesSelector(a, "._52-0") && (c = d)
            });
            return c
        }
        ;
        c.setSelected = function(a) {
            this.$6 = this.getSelected();
            var c = this.getButtons()
              , d = k[a];
            c.forEach(function(c) {
                if (d === j)
                    return;
                var e = c.getAttribute("data-status");
                e === a ? b("CSS").addClass(c, "_52-0") : b("CSS").removeClass(c, "_52-0")
            });
            this.$2.forEachItem(function(c) {
                if (!c.getValue)
                    return;
                var e = c.getValue()
                  , f = k[e];
                if (e === "unfollow")
                    return;
                c = c.getRoot();
                e === a ? b("CSS").addClass(c, "_52-0") : f === d && b("CSS").removeClass(c, "_52-0")
            })
        }
        ;
        c.handleResponse = function(a, b) {
            if (b.id !== this.$3.id || b.location !== i)
                return;
            a === "revert" && this.revert()
        }
        ;
        c.revert = function() {
            if (this.$6 === null)
                return;
            this.setSelected(this.$6)
        }
        ;
        c.cleanUp = function() {
            this.$7 && this.$7.release(),
            this.$7 = null,
            this.$1 = null,
            this.$2 = null,
            this.$3 = null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("SimpleDrag", ["ArbiterMixin", "Event", "SubscriptionsHandler", "UserAgent_DEPRECATED", "Vector", "emptyFunction"], (function(a, b, c, d, e, f) {
    function a(a) {
        this.minDragDistance = 0,
        this._subscriptions = new (b("SubscriptionsHandler"))(),
        this._subscriptions.addSubscriptions(b("Event").listen(a, "mousedown", this._start.bind(this)))
    }
    Object.assign(a.prototype, b("ArbiterMixin"), {
        setMinDragDistance: function(a) {
            this.minDragDistance = a
        },
        destroy: function() {
            this._subscriptions.release()
        },
        _start: function(a) {
            var c = !1
              , d = !0
              , e = null;
            this.inform("mousedown", a) && (d = !1);
            if (this.minDragDistance)
                e = b("Vector").getEventPosition(a);
            else {
                c = !0;
                var f = this.inform("start", a);
                if (f === !0)
                    d = !1;
                else if (f === !1) {
                    c = !1;
                    return
                }
            }
            f = b("UserAgent_DEPRECATED").ie() < 9 ? document.documentElement : window;
            var g = b("Event").listen(f, {
                selectstart: d ? b("Event").prevent : b("emptyFunction"),
                mousemove: function(a) {
                    if (!c) {
                        var d = b("Vector").getEventPosition(a);
                        if (e.distanceTo(d) < this.minDragDistance)
                            return;
                        c = !0;
                        if (this.inform("start", a) === !1) {
                            c = !1;
                            return
                        }
                    }
                    this.inform("update", a)
                }
                .bind(this),
                mouseup: function(a) {
                    for (var b in g)
                        g[b].remove();
                    c ? this.inform("end", a) : this.inform("click", a)
                }
                .bind(this)
            });
            d && a.prevent()
        }
    });
    e.exports = a
}
), null);
__d("DOMScroll", ["requireDeferred", "Arbiter", "DOM", "DOMQuery", "Vector", "ViewportBounds", "emptyFunction", "ge", "gkx", "isAsyncScrollQuery", "nullthrows"], (function(a, b, c, d, e, f) {
    var g = b("requireDeferred")("Animation")
      , h = b("gkx")("1243461")
      , i = {
        SCROLL: "dom-scroll",
        _scrolling: !1,
        _scrollingFinishedTimeout: null,
        getScrollState: function() {
            var a = b("Vector").getViewportDimensions()
              , c = b("Vector").getDocumentDimensions()
              , d = c.x > a.x;
            c = c.y > a.y;
            d += 0;
            c += 0;
            return new (b("Vector"))(d,c)
        },
        _scrollbarSize: null,
        _initScrollbarSize: function() {
            var a = b("DOM").create("p");
            a.style.width = "100%";
            a.style.height = "200px";
            var c = b("DOM").create("div");
            c.style.position = "absolute";
            c.style.top = "0px";
            c.style.left = "0px";
            c.style.visibility = "hidden";
            c.style.width = "200px";
            c.style.height = "150px";
            c.style.overflow = "hidden";
            c.appendChild(a);
            b("nullthrows")(document.body).appendChild(c);
            var d = a.offsetWidth;
            c.style.overflow = "scroll";
            a = a.offsetWidth;
            d == a && (a = c.clientWidth);
            b("nullthrows")(document.body).removeChild(c);
            i._scrollbarSize = d - a
        },
        getScrollbarSize: function() {
            i._scrollbarSize === null && i._initScrollbarSize();
            return b("nullthrows")(i._scrollbarSize)
        },
        scrollTo: function(a, c, d, e, f, j) {
            var k, l = 0;
            c == null || c === !0 ? l = 750 : typeof c === "number" ? l = c : parseInt(c, 10) && (l = parseInt(c, 10));
            b("isAsyncScrollQuery")() && (l = 0);
            if (a instanceof b("Vector"))
                c = a;
            else {
                var m = b("Vector").getScrollPosition().x;
                a = b("Vector").getElementPosition(b("ge")(a)).y;
                c = new (b("Vector"))(m,a,"document");
                e || (c.y -= b("ViewportBounds").getTop() / (d ? 2 : 1))
            }
            d ? c.y -= b("Vector").getViewportDimensions().y / 2 : e && (c.y -= b("Vector").getViewportDimensions().y,
            c.y += e);
            f && (c.y -= f);
            c = c.convertTo("document");
            if (l)
                if ("scrollBehavior"in b("nullthrows")(document.documentElement).style && l === 750 && !j)
                    try {
                        window.scrollTo({
                            left: c.x,
                            top: c.y,
                            behavior: h ? "auto" : "smooth"
                        })
                    } catch (a) {
                        window.scrollTo(c.x, c.y)
                    }
                else {
                    m = g.getModuleIfRequired();
                    if (m != null) {
                        i._setScrollingForDuration(l);
                        var n = new m(b("nullthrows")(document.body)).to("scrollTop", c.y).to("scrollLeft", c.x).ease(m.ease.end).duration(l).ondone(j).go();
                        k = function() {
                            n.stop()
                        }
                    } else
                        window.scrollTo(c.x, c.y),
                        j && j()
                }
            else
                window.scrollTo(c.x, c.y),
                j && j();
            b("Arbiter").inform(i.SCROLL);
            return k || b("emptyFunction")
        },
        scrollToID: function(a) {
            i.scrollTo(a)
        },
        ensureVisible: function(a, c, d, e, f) {
            var g = b("Vector").getScrollPosition().x;
            a = this._getBounds(a, c, d);
            c = a[0];
            d = a[1];
            var h = a[2];
            a = a[3];
            h < c ? i.scrollTo(new (b("Vector"))(g,h,"document"), e, !1, 0, 0, f) : a > d ? h - (a - d) < c ? i.scrollTo(new (b("Vector"))(g,h,"document"), e, !1, 0, 0, f) : i.scrollTo(new (b("Vector"))(g,a,"document"), e, !1, 1, 0, f) : f && f()
        },
        isCurrentlyVisible: function(a, b, c) {
            a = this._getBounds(a, b, c);
            b = a[0];
            c = a[1];
            var d = a[2];
            a = a[3];
            return d >= b && a <= c
        },
        _getBounds: function(a, c, d) {
            d == null && (d = 10);
            a = b("ge")(a);
            c && (a = b("DOMQuery").find(a, c));
            c = b("Vector").getScrollPosition().y;
            var e = c + b("Vector").getViewportDimensions().y
              , f = b("Vector").getElementPosition(a).y;
            a = f + b("Vector").getElementDimensions(a).y;
            f -= b("ViewportBounds").getTop();
            f -= d;
            a += d;
            return [c, e, f, a]
        },
        scrollToTop: function(a) {
            var c = b("Vector").getScrollPosition();
            i.scrollTo(new (b("Vector"))(c.x,0,"document"), a !== !1)
        },
        currentlyScrolling: function() {
            return i._scrolling
        },
        _setScrollingForDuration: function(a) {
            i._scrolling = !0,
            i._scrollingFinishedTimeout && (clearTimeout(i._scrollingFinishedTimeout),
            i._scrollingFinishedTimeout = null),
            i._scrollingFinishedTimeout = setTimeout(function() {
                i._scrolling = !1,
                i._scrollingFinishedTimeout = null
            }, a)
        }
    };
    e.exports = i
}
), null);
__d("PopoverMenuInterface", ["ArbiterMixin", "emptyFunction", "mixin"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.done = function() {
            this.inform("done")
        }
        ;
        return b
    }(b("mixin")(b("ArbiterMixin")));
    Object.assign(a.prototype, {
        getRoot: c = b("emptyFunction"),
        onShow: c,
        onHide: c,
        focusAnItem: c.thatReturnsFalse,
        blur: c,
        handleKeydown: c.thatReturnsFalse,
        destroy: c
    });
    e.exports = a
}
), null);
__d("firstx", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a) {
        for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var d;
            if (b) {
                if (c >= a.length)
                    break;
                d = a[c++]
            } else {
                c = a.next();
                if (c.done)
                    break;
                d = c.value
            }
            d = d;
            return d
        }
        g(0, 1145)
    }
}
), null);
__d("ScrollableArea", ["requireDeferred", "ArbiterMixin", "BrowserSupport", "CSS", "CSSFade", "DataStore", "Deferred", "DOM", "DOMScroll", "Event", "FocusEvent", "Run", "Scroll", "SimpleDrag", "Style", "SubscriptionsHandler", "TimeSlice", "UserAgent_DEPRECATED", "Vector", "clearTimeout", "createCancelableFunction", "emptyFunction", "firstx", "getScrollableAreaContainingNode", "mixin", "promiseDone", "queryThenMutateDOM", "setTimeoutAcrossTransitions", "throttle"], (function(a, b, c, d, e, f) {
    var g = b("requireDeferred")("Animation")
      , h = 12;
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c(c, d) {
            var e;
            e = a.call(this) || this;
            e.adjustGripper = function() {
                var a = function() {
                    b("queryThenMutateDOM")(function() {
                        return e._needsGripper()
                    }, function(a) {
                        a && (b("Style").set(e._gripper, "height", e._gripperHeight + "px"),
                        e._slideGripper())
                    }),
                    e._throttledShowGripperAndShadows()
                };
                a = b("TimeSlice").guard(a, "ScrollableArea adjustGripper", {
                    propagationType: b("TimeSlice").PropagationType.ORPHAN
                });
                a();
                return babelHelpers.assertThisInitialized(e)
            }
            ;
            e._computeHeights = function() {
                e._containerHeight = e._elem.clientHeight,
                e._contentHeight = e._content.offsetHeight,
                e._trackHeight = e._track.offsetHeight,
                e._gripperHeight = Math.max(e._containerHeight / e._contentHeight * e._trackHeight, h)
            }
            ;
            e._showGripperAndShadows = function() {
                b("queryThenMutateDOM")(function() {
                    return {
                        needsGripper: e._needsGripper(),
                        top: b("Scroll").getTop(e._wrap) > 0,
                        isScrolledToBottom: e.isScrolledToBottom()
                    }
                }, function(a) {
                    var c = a.needsGripper
                      , d = a.top;
                    a = a.isScrolledToBottom;
                    b("CSS").conditionShow(e._gripper, c);
                    b("CSS").conditionClass(e._elem, "contentBefore", d);
                    b("CSS").conditionClass(e._elem, "contentAfter", !a)
                })
            }
            ;
            e._respondMouseMove = function() {
                if (!e._mouseOver || e._isFocussed)
                    return;
                var a = e._options.fade !== !1
                  , c = e._mousePos
                  , d = b("Vector").getElementPosition(e._track).x
                  , f = b("Vector").getElementDimensions(e._track).x;
                d = Math.abs(d + f / 2 - c.x);
                f = b("BrowserSupport").hasPointerEvents() && d <= 10;
                f && !e._trackIsHovered ? (e._trackIsHovered = !0,
                b("CSS").addClass(e._elem, "uiScrollableAreaTrackOver"),
                e.throttledAdjustGripper()) : !f && e._trackIsHovered && (e._trackIsHovered = !1,
                b("CSS").removeClass(e._elem, "uiScrollableAreaTrackOver"));
                a && (d < 25 ? e.showScrollbar({
                    hideAfterDelay: !1
                }) : !e._options.no_fade_on_hover && !e._isFocussed && e.hideScrollbar({
                    hideAfterDelay: !0,
                    shouldFade: !0
                }))
            }
            ;
            if (!c)
                return babelHelpers.assertThisInitialized(e);
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
            e._listeners = new (b("SubscriptionsHandler"))();
            e._listeners.addSubscriptions(b("Event").listen(e._wrap, "scroll", e._handleScroll.bind(babelHelpers.assertThisInitialized(e))), b("Event").listen(c, "mousemove", e._handleMouseMove.bind(babelHelpers.assertThisInitialized(e))), b("Event").listen(e._track, "click", e._handleClickOnTrack.bind(babelHelpers.assertThisInitialized(e))));
            b("BrowserSupport").hasPointerEvents() && e._listeners.addSubscriptions(b("Event").listen(c, "mousedown", e._handleClickOnTrack.bind(babelHelpers.assertThisInitialized(e))));
            if (d.fade !== !1) {
                var f;
                (f = e._listeners).addSubscriptions.apply(f, [b("Event").listen(c, "mouseenter", e._handleMouseEnter.bind(babelHelpers.assertThisInitialized(e))), b("Event").listen(c, "mouseleave", e._handleMouseLeave.bind(babelHelpers.assertThisInitialized(e)))].concat(e._attachFocusListeners(e._wrap)))
            } else
                b("BrowserSupport").hasPointerEvents() && e._listeners.addSubscriptions(b("Event").listen(c, "mouseleave", function() {
                    e._isFocussed || (e._trackIsHovered = !1,
                    b("CSS").removeClass(c, "uiScrollableAreaTrackOver"))
                }));
            (b("UserAgent_DEPRECATED").webkit() || b("UserAgent_DEPRECATED").chrome()) && e._listeners.addSubscriptions(b("Event").listen(c, "mousedown", function() {
                var a = b("Event").listen(window, "mouseup", function() {
                    b("Scroll").getLeft(c) && b("Scroll").setLeft(c, 0),
                    a.remove()
                })
            }));
            e._drag = e.initDrag();
            b("DataStore").set(e._elem, "ScrollableArea", babelHelpers.assertThisInitialized(e));
            d.persistent || (e._destroy = b("createCancelableFunction")(e._destroy.bind(babelHelpers.assertThisInitialized(e))),
            b("Run").onLeave(e._destroy));
            d.shadow !== !1 && b("CSS").addClass(e._elem, "uiScrollableAreaWithShadow");
            return e
        }
        var d = c.prototype;
        d.getContentHeight = function() {
            return this._contentHeight
        }
        ;
        d.getElement = function() {
            return this._elem
        }
        ;
        d.initDrag = function() {
            var a = b("BrowserSupport").hasPointerEvents()
              , c = new (b("SimpleDrag"))(a ? this._elem : this._gripper);
            c.subscribe("start", function(d, e) {
                if (!(e.which && e.which === 1 || e.button && e.button === 1))
                    return !1;
                d = b("Vector").getEventPosition(e, "viewport");
                if (a) {
                    var f = this._gripper.getBoundingClientRect();
                    if (d.x < f.left || d.x > f.right || d.y < f.top || d.y > f.bottom)
                        return !1
                }
                e.stopPropagation();
                this.inform("grip_start");
                var g = d.y
                  , h = this._gripper.offsetTop;
                b("CSS").addClass(this._elem, "uiScrollableAreaDragging");
                var i = c.subscribe("update", function(a, c) {
                    a = b("Vector").getEventPosition(c, "viewport").y - g;
                    this._throttledComputeHeights();
                    c = this._contentHeight - this._containerHeight;
                    a = h + a;
                    var d = this._trackHeight - this._gripperHeight;
                    a = Math.max(Math.min(a, d), 0);
                    a = a / d * c;
                    b("Scroll").setTop(this._wrap, a)
                }
                .bind(this))
                  , j = c.subscribe("end", function() {
                    c.unsubscribe(i),
                    c.unsubscribe(j),
                    b("CSS").removeClass(this._elem, "uiScrollableAreaDragging"),
                    this.inform("grip_end")
                }
                .bind(this));
                return void 0
            }
            .bind(this));
            return c
        }
        ;
        d._attachFocusListeners = function(a) {
            var c = this, d;
            return [b("FocusEvent").listen(a, function(a) {
                d && (d.reject(),
                d = null),
                a ? (d = new (b("Deferred"))(),
                b("promiseDone")(d.getPromise(), function() {
                    c._isFocussed = !0,
                    c._trackIsHovered = !0,
                    b("queryThenMutateDOM")(null, function() {
                        b("CSS").addClass(c._elem, "uiScrollableAreaTrackOver")
                    }),
                    c.showScrollbar({
                        hideAfterDelay: !1
                    }),
                    d = null
                }, function() {
                    d = null
                })) : (c._isFocussed = !1,
                c._mouseOver ? c._respondMouseMove() : (b("queryThenMutateDOM")(null, function() {
                    b("CSS").removeClass(c._elem, "uiScrollableAreaTrackOver")
                }),
                c.hideScrollbar({
                    hideAfterDelay: !1,
                    shouldFade: !1
                })))
            }), b("Event").listen(document.documentElement, "keyup", function(a) {
                d && d.resolve()
            })]
        }
        ;
        d._needsGripper = function() {
            this._throttledComputeHeights();
            return this._gripperHeight < this._trackHeight
        }
        ;
        d._slideGripper = function() {
            var a = this;
            b("queryThenMutateDOM")(function() {
                return b("Scroll").getTop(a._wrap) / (a._contentHeight - a._containerHeight) * (a._trackHeight - a._gripperHeight)
            }, function(c) {
                b("Style").set(a._gripper, "top", c + "px")
            })
        }
        ;
        d.destroy = function() {
            this._destroy(),
            this._destroy.cancel && this._destroy.cancel()
        }
        ;
        d._destroy = function() {
            this._listeners && this._listeners.release(),
            this._elem && b("DataStore").remove(this._elem, "ScrollableArea"),
            this._drag && this._drag.destroy()
        }
        ;
        d._handleClickOnTrack = function(a) {
            var c = b("Vector").getEventPosition(a, "viewport")
              , d = this._gripper.getBoundingClientRect();
            c.x < d.right && c.x > d.left && (c.y < d.top ? this.setScrollTop(this.getScrollTop() - this._elem.clientHeight) : c.y > d.bottom && this.setScrollTop(this.getScrollTop() + this._elem.clientHeight),
            a.kill())
        }
        ;
        d._handleMouseMove = function(a) {
            var c = this._options.fade !== !1;
            (b("BrowserSupport").hasPointerEvents() || c) && (this._mousePos = b("Vector").getEventPosition(a),
            this._throttledRespondMouseMove())
        }
        ;
        d._handleScroll = function(a) {
            this._needsGripper() && this._slideGripper(),
            this.throttledAdjustGripper(),
            this._options.fade !== !1 && !this._isFocussed && this.showScrollbar({
                hideAfterDelay: !0
            }),
            this.inform("scroll")
        }
        ;
        d._handleMouseLeave = function(a) {
            this._mouseOver = !1,
            this._mousePos = b("Vector").getEventPosition(a),
            this._isFocussed || this.hideScrollbar({
                hideAfterDelay: !0,
                shouldFade: !0
            })
        }
        ;
        d._handleMouseEnter = function(a) {
            this._mouseOver = !0,
            this._mousePos = b("Vector").getEventPosition(a),
            this._isFocussed || this.showScrollbar({
                hideAfterDelay: !0
            })
        }
        ;
        d.hideScrollbar = function(a) {
            var c = this
              , d = a.hideAfterDelay
              , e = a.shouldFade;
            if (this._hideTimeout || !this._scrollbarVisible)
                return this;
            var f = function() {
                c._scrollbarVisible = !1,
                b("CSSFade").hide(c._track, {
                    simple: !e,
                    invisible: b("CSS").hasClass(c._track, "invisible_elem")
                })
            };
            d ? this._hideTimeout = b("setTimeoutAcrossTransitions")(function() {
                c._hideTimeout = null,
                f()
            }, 750) : f();
            return this
        }
        ;
        d.pageDown = function(a, b) {
            this._scrollPage(1, a, b)
        }
        ;
        d.pageUp = function(a, b) {
            this._scrollPage(-1, a, b)
        }
        ;
        d._scrollPage = function(a, b, c) {
            a = a * this._containerHeight;
            var d = this.getScrollHeight() - this._containerHeight;
            d = Math.max(0, Math.min(d, this.getScrollTop() + a));
            this.setScrollTop(d, b, c)
        }
        ;
        d.resize = function() {
            this._body.style.width && (this._body.style.width = "");
            var a = b("DOMScroll").getScrollbarSize();
            a > 0 && b("Style").set(this._body, "margin-right", -a + "px");
            return this
        }
        ;
        d.showScrollbar = function(a) {
            var c = this
              , d = a.hideAfterDelay;
            this._hideTimeout && (b("clearTimeout")(this._hideTimeout),
            this._hideTimeout = null);
            if (this._scrollbarVisible)
                return this;
            this._scrollbarVisible = !0;
            b("queryThenMutateDOM")(null, function() {
                b("CSSFade").show(c._track, {
                    duration: 0,
                    invisible: b("CSS").hasClass(c._track, "invisible_elem")
                }),
                c.throttledAdjustGripper(),
                d && c.hideScrollbar({
                    hideAfterDelay: !0,
                    shouldFade: !c._options.no_fade_on_hover
                })
            });
            return this
        }
        ;
        d.distanceToBottom = function() {
            this._computeHeights();
            var a = Math.round(b("Scroll").getTop(this._wrap));
            return this._contentHeight - (a + this._containerHeight)
        }
        ;
        d.isScrolledToBottom = function() {
            return this.distanceToBottom() <= 0
        }
        ;
        d.isScrolledToTop = function() {
            return b("Scroll").getTop(this._wrap) === 0
        }
        ;
        d.scrollToBottom = function(a, b) {
            this.setScrollTop(this._wrap.scrollHeight, a, b)
        }
        ;
        d.scrollToTop = function(a, b) {
            this.setScrollTop(0, a, b)
        }
        ;
        d.scrollIntoView = function(a, c, d) {
            var e = this._wrap.clientHeight
              , f = a.offsetHeight
              , g = b("Scroll").getTop(this._wrap)
              , h = g + e;
            a = this.getScrollOffsetForElement(a);
            var i = a + f;
            if (a < g || e < f)
                return this.setScrollTop(a, c, {
                    callback: d
                });
            else if (i > h)
                return this.setScrollTop(g + (i - h), c, {
                    callback: d
                });
            d && d();
            return b("emptyFunction")
        }
        ;
        d.getScrollOffsetForElement = function(a) {
            var b = 0;
            while (a != null && a !== this._wrap)
                b += a.offsetTop,
                a = a.offsetParent;
            return b
        }
        ;
        d.scrollElemToTop = function(a, b, c) {
            this.setScrollTop(a.offsetTop, b, {
                callback: c
            })
        }
        ;
        d.poke = function() {
            var a, c = (a = b("Scroll")).getTop(this._wrap);
            a.setTop(this._wrap, a.getTop(this._wrap) + 1);
            a.setTop(this._wrap, a.getTop(this._wrap) - 1);
            a.setTop(this._wrap, c);
            if (this._isFocussed)
                return this;
            else
                return this.showScrollbar({
                    hideAfterDelay: !1
                })
        }
        ;
        d.getClientHeight = function() {
            return this._wrap.clientHeight
        }
        ;
        d.getScrollTop = function() {
            return b("Scroll").getTop(this._wrap)
        }
        ;
        d.getScrollHeight = function() {
            return this._wrap.scrollHeight
        }
        ;
        d.setScrollTop = function(a, b, c) {
            c === void 0 && (c = {});
            var d;
            if (b !== !1) {
                b = g.getModuleIfRequired();
                b != null ? d = this._animatedSetScrollTop(b, a, c) : this._simpleSetScrollTop(a, c)
            } else
                this._simpleSetScrollTop(a, c);
            return function() {
                d && d.stop(),
                d = null
            }
        }
        ;
        d._simpleSetScrollTop = function(a, c) {
            b("Scroll").setTop(this._wrap, a),
            c.callback && c.callback()
        }
        ;
        d._animatedSetScrollTop = function(a, b, c) {
            this._scrollTopAnimation && this._scrollTopAnimation.stop();
            var d = c.duration || 250
              , e = c.ease || a.ease.end;
            this._scrollTopAnimation = new a(this._wrap).to("scrollTop", b).ease(e).duration(d).ondone(c.callback).go();
            return this._scrollTopAnimation
        }
        ;
        c.renderDOM = function() {
            var a, c = (a = b("DOM")).create("div", {
                className: "uiScrollableAreaContent"
            }), d = a.create("div", {
                className: "uiScrollableAreaBody"
            }, c), e = a.create("div", {
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
        }
        ;
        c.fromNative = function(a, d) {
            if (!b("CSS").hasClass(a, "uiScrollableArea") || !b("CSS").hasClass(a, "native"))
                return void 0;
            d = d || {};
            b("CSS").removeClass(a, "native");
            var e = b("DOM").create("div", {
                className: "uiScrollableAreaTrack"
            }, b("DOM").create("div", {
                className: "uiScrollableAreaGripper"
            }));
            d.fade !== !1 ? (b("CSS").addClass(a, "fade"),
            b("CSS").addClass(e, "hidden_elem")) : b("CSS").addClass(a, "nofade");
            d.tabIndex !== void 0 && d.tabIndex !== null ? (b("DOM").setAttributes(e, {
                tabIndex: d.tabIndex
            }),
            b("DOM").prependContent(a, e)) : b("DOM").appendContent(a, e);
            e = new c(a,d);
            e.resize();
            return e
        }
        ;
        c.getInstance = function(a) {
            return b("getScrollableAreaContainingNode")(a)
        }
        ;
        c.poke = function(a) {
            a = c.getInstance(a);
            a && a.poke()
        }
        ;
        return c
    }(b("mixin")(b("ArbiterMixin")));
    e.exports = a
}
), null);
__d("Menu", ["cx", "BehaviorsMixin", "CSS", "DataStore", "DOM", "Event", "Keys", "Parent", "PopoverMenuInterface", "ScrollableArea", "Style", "SubscriptionsHandler", "UserAgent", "debounce"], (function(a, b, c, d, e, f, g) {
    var h = 500;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(d, e) {
            var f;
            f = a.call(this) || this;
            f._items = [];
            f._keysSoFar = "";
            f._items = d.map(c.buildItemFromData);
            f._config = e || {};
            f._theme = e.theme || {};
            f._subscriptions = new (b("SubscriptionsHandler"))();
            f._clearKeysSoFarAfterDelay = b("debounce")(function() {
                f._keysSoFar = ""
            }, h);
            return f
        }
        c.buildItemFromData = function(a) {
            if (a.ctor)
                return new a.ctor(a);
            else
                return new a.type(a.props)
        }
        ;
        var d = c.prototype;
        d.addItem = function(a) {
            this._addItem(a)
        }
        ;
        d.addItemBefore = function(a, b) {
            this._addItem(a, b, !1)
        }
        ;
        d.addItemAfter = function(a, b) {
            this._addItem(a, b, !0)
        }
        ;
        d._addItem = function(a, b, c) {
            var d = this._items.indexOf(a);
            if (d >= 0) {
                var e = c ? -1 : 1;
                if (this._items[d + e] == b)
                    return;
                this._items.splice(d, 1)
            }
            if (b) {
                d = this._items.indexOf(b);
                if (d < 0)
                    throw new Error("reference item must already be in the menu");
                c && d++;
                this._items.splice(d, 0, a)
            } else
                this._items.push(a);
            this._root && this._insertItem(a, b, c)
        }
        ;
        d.removeItem = function(a) {
            var c = this._items.indexOf(a);
            if (c < 0)
                return;
            this._items.splice(c, 1);
            this._root && b("DOM").remove(a.getRoot())
        }
        ;
        d.forEachItem = function(a) {
            this._items.forEach(a)
        }
        ;
        d.getFocusedItem = function() {
            return this._focused
        }
        ;
        d.getItemAt = function(a) {
            return this._items[a] || null
        }
        ;
        d.getRoot = function() {
            this._root || this._render();
            return this._root
        }
        ;
        d.onShow = function() {
            this._config.maxheight && (!this._scrollableArea ? this._scrollableArea = b("ScrollableArea").fromNative(this._scrollableElems.root, {
                fade: !0
            }) : this._scrollableArea.resize()),
            this.inform("show")
        }
        ;
        d.onHide = function() {
            this.blur(),
            this.inform("hide")
        }
        ;
        d.focusAnItem = function(a) {
            return this._attemptFocus(a || 0, 1)
        }
        ;
        d.blur = function() {
            if (this._focused) {
                var a = this._focused;
                this._focused.blur();
                this._focused = null;
                this.inform("blur", {
                    item: a
                })
            }
        }
        ;
        d.handleKeydown = function(a, c) {
            if (!this._items.length)
                return !1;
            var d = this._items.indexOf(this._focused);
            switch (a) {
            case b("Keys").UP:
            case b("Keys").DOWN:
                var e = a === b("Keys").UP
                  , f = e ? -1 : 1;
                e = e ? this._items.length - 1 : 0;
                return d === -1 ? this._attemptFocus(e, f) : this._attemptFocus(d + f, f);
            case b("Keys").HOME:
                return this._attemptFocus(0, 1);
            case b("Keys").END:
                return this._attemptFocus(this._items.length - 1, -1);
            case b("Keys").SPACE:
                if (this._items.indexOf(this._focused) !== -1) {
                    this._handleItemClick(this._focused, c);
                    return !0
                }
                return !1;
            case b("Keys").RIGHT:
            case b("Keys").LEFT:
            case b("Keys").INSERT:
            case b("Keys").DELETE:
                return !1;
            default:
                e = this._findItemToFocus(a, d);
                return !!(e && this._focusItem(e))
            }
        }
        ;
        d._findItemToFocus = function(a, b) {
            a = String.fromCharCode(a).toLowerCase();
            this._keysSoFar || (this._searchIndex = b,
            this._itemToFocus = this._focused || this._items[0]);
            this._keysSoFar += a;
            this._clearKeysSoFarAfterDelay();
            b = this._findMatchInRange(this._searchIndex + 1, this._items.length);
            b || (b = this._findMatchInRange(0, this._searchIndex));
            this._itemToFocus = b || this._itemToFocus;
            return this._itemToFocus
        }
        ;
        d._findMatchInRange = function(a, b) {
            for (var a = a; a < b; a++) {
                var c = this._items[a].getLabel();
                if (c && c.toString().toLowerCase().indexOf(this._keysSoFar) === 0)
                    return this._items[a]
            }
            return null
        }
        ;
        d._render = function() {
            this._ul = b("DOM").create("ul", {
                className: "_54nf"
            });
            this._ul.setAttribute("role", "menu");
            this._items.forEach(function(a) {
                this._insertItem(a, null)
            }, this);
            this._subscriptions.addSubscriptions(b("Event").listen(this._ul, "click", this._handleClick.bind(this)), b("Event").listen(this._ul, "mouseover", this._handleMouseOver.bind(this)), b("Event").listen(this._ul, "mouseout", this._handleMouseOut.bind(this)));
            var a = this._ul;
            this._config.maxheight && (this._scrollableElems = b("ScrollableArea").renderDOM(),
            b("DOM").setContent(this._scrollableElems.content, this._ul),
            a = this._scrollableElems.root,
            b("Style").set(this._scrollableElems.wrap, "max-height", this._config.maxheight + "px"));
            var c = "_54nq" + (this._config.className ? " " + this._config.className : "") + (this._theme.className ? " " + this._theme.className : "");
            this._root = b("DOM").create("div", {
                className: c
            }, b("DOM").create("div", {
                className: "_54ng"
            }, a));
            this._config.id && this._root.setAttribute("id", this._config.id);
            this._config.testid && this._root.setAttribute("data-testid", this._config.testid);
            this._config.behaviors && this.enableBehaviors(this._config.behaviors);
            this.inform("rendered", this._root)
        }
        ;
        d._needsDefaultBehavior = function(a) {
            if (a.isDefaultRequested && a.isDefaultRequested()) {
                a = b("Parent").byTag(a.getTarget(), "a");
                a = a && a.getAttribute("href");
                return a && a[0] !== "#"
            }
            return !1
        }
        ;
        d._handleClick = function(a) {
            if (a.getTarget() === this._ul && b("UserAgent").isBrowser("IE")) {
                a.stop();
                return
            }
            if (!this._needsDefaultBehavior(a)) {
                var c = this._getItemInstance(a.getTarget());
                if (c)
                    return this._handleItemClick(c, a)
            }
        }
        ;
        d._handleItemClick = function(a, b) {
            this.inform("itemclick", {
                item: a,
                event: b
            });
            a.shouldCloseOnClick() && a.hasAction() && this.done();
            return a.handleClick(b)
        }
        ;
        d._handleMouseOver = function(a) {
            a = this._getItemInstance(a.getTarget());
            a && this._focusItem(a, !0)
        }
        ;
        d._handleMouseOut = function(a) {
            a = this._getItemInstance(a.getTarget());
            a && this._focused === a && this.blur()
        }
        ;
        d._insertItem = function(a, c, d) {
            var e = a.getRoot();
            b("CSS").addClass(e, "__MenuItem");
            b("DataStore").set(e, "MenuItem", a);
            if (c) {
                a = d ? b("DOM").insertAfter : b("DOM").insertBefore;
                a(c.getRoot(), e)
            } else
                b("DOM").appendContent(this._ul, e)
        }
        ;
        d._attemptFocus = function(a, b) {
            var c = this._items.length;
            if ((a < 0 || a >= c) && !this._focused)
                return !1;
            a = (c + a % c) % c;
            c = this.getItemAt(a);
            return c === this._focused || this._focusItem(c) ? !0 : this._attemptFocus(a + b, b)
        }
        ;
        d._focusItem = function(a, b) {
            if (a && a.focus(b) !== !1) {
                this._focused !== a && (this.blur(),
                this._focused = a,
                this.inform("focus", {
                    item: a,
                    from_mouse_over: b
                }));
                return !0
            }
            return !1
        }
        ;
        d._getItemInstance = function(a) {
            a = b("Parent").byClass(a, "__MenuItem");
            return a ? b("DataStore").get(a, "MenuItem") : null
        }
        ;
        d.destroy = function() {
            this._items.forEach(function(a) {
                var c = a.getRoot();
                b("DataStore").remove(c, "MenuItem");
                a.destroy()
            }),
            this._subscriptions.release(),
            this.destroyBehaviors()
        }
        ;
        return c
    }(b("PopoverMenuInterface"));
    e.exports = a;
    Object.assign(a.prototype, b("BehaviorsMixin"), {
        _focused: null,
        _root: null
    })
}
), null);
