if (self.CavalryLogger) {
    CavalryLogger.start_js(["9sDts"]);
}

__d("Clipboard", ["Promise", "UserAgent"], (function(a, b, c, d, e, f) {
    f.isSupported = a;
    f.copy = g;
    f.copyAsync = c;
    function a() {
        return window.document.queryCommandSupported instanceof Function && window.document.queryCommandSupported("copy") && !(b("UserAgent").isBrowser("Firefox < 41") || b("UserAgent").isPlatform("iOS < 10.3")) || b("UserAgent").isBrowser("Chrome >= 43")
    }
    function g(a, c) {
        c = c || document.body;
        if (!c)
            return !1;
        var d = !0
          , e = document.createElement("textarea");
        c.appendChild(e);
        e.value = a;
        if (b("UserAgent").isPlatform("iOS >= 10.3")) {
            a = document.createRange();
            a.selectNodeContents(e);
            var f = window.getSelection();
            f.removeAllRanges();
            f.addRange(a);
            e.setSelectionRange(0, 999999)
        } else
            e.select();
        try {
            d = document.execCommand("copy")
        } catch (a) {
            d = !1
        }
        c.removeChild(e);
        return d
    }
    function c(a) {
        var c = window.navigator;
        if (c && c.clipboard && typeof c.clipboard.writeText === "function")
            return c.clipboard.writeText(a);
        return g(a) ? b("Promise").resolve() : b("Promise").reject()
    }
}
), null);
__d("FBClipboardLink.react", ["cx", "fbt", "Clipboard", "DOMContainer.react", "Event", "KeyEventController", "React", "ReactDOM", "SubscriptionsHandler", "Tooltip.react", "isKeyActivation", "joinClasses", "stylex"], (function(a, b, c, d, e, f, g, h) {
    var i, j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = j.createRef(),
            d.state = {
                copied: !1,
                supported: b("Clipboard").isSupported()
            },
            d.$2 = null,
            d.$3 = null,
            d.$5 = function(a) {
                a.clipboardData && (a.clipboardData.setData("text/html", d.$8()),
                a.clipboardData.setData("text", d.$9()),
                a.preventDefault())
            }
            ,
            d.$7 = function() {
                if (!d.state.supported)
                    return "Unsupported in this browser";
                return d.state.copied ? d.props.tooltipSuccess : d.props.tooltip
            }
            ,
            d.$4 = function() {
                d.$3 && (window.clearTimeout(d.$3),
                d.$3 = null)
            }
            ,
            d.$10 = function() {
                d.$3 = window.setTimeout(d.$11, d.props.tooltipSuccessDuration)
            }
            ,
            d.$6 = function(a) {
                var c = b("ReactDOM").findDOMNode(d.$1.current);
                c = b("Clipboard").copy(d.$8(), c);
                d.$4();
                d.setState({
                    copied: !0,
                    supported: c
                });
                d.$10();
                d.props.onComplete && d.props.onComplete(c);
                d.props.stopPropagation && a.stopPropagation();
                d.props.preventDefaultOnClick && a.preventDefault()
            }
            ,
            d.$11 = function() {
                d.$4(),
                d.setState({
                    copied: !1
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentWillUnmount = function() {
            this.$4(),
            this.$2 && this.$2.release()
        }
        ;
        d.componentDidMount = function() {
            if (this.props.type === "html") {
                var a = b("ReactDOM").findDOMNode(this);
                this.$2 = this.$2 || new (b("SubscriptionsHandler"))();
                this.$2.addSubscriptions(b("Event").listen(a, "copy", this.$5))
            }
            this.props.hotkey && (this.$2 = this.$2 || new (b("SubscriptionsHandler"))(),
            this.$2.addSubscriptions(b("KeyEventController").registerKey(this.props.hotkey, this.$6)))
        }
        ;
        d.render = function() {
            var a = this
              , c = b("joinClasses")(this.props.className, "_xd6")
              , d = this.props.children || this.props.label;
            !d && this.props.childrenDONOTUSE && (d = j.jsx(b("DOMContainer.react"), {
                children: this.props.childrenDONOTUSE
            }));
            return j.jsx(b("Tooltip.react"), babelHelpers["extends"]({}, this.props, {
                tabIndex: "0",
                className: c,
                tooltip: this.$7(),
                "data-pitloot-persistonclick": !0,
                onClick: this.$6,
                onKeyPress: function(c) {
                    return b("isKeyActivation")(c) && a.$6()
                },
                position: this.props.position,
                alignH: this.props.alignment,
                role: "button",
                children: j.jsx("div", {
                    ref: this.$1,
                    className: b("joinClasses")("_2lj1", (i || (i = b("stylex")))(this.props.innerXStyle)),
                    children: d
                })
            }))
        }
        ;
        d.$8 = function() {
            if (this.props.getValue)
                return this.props.getValue();
            else
                return this.props.value
        }
        ;
        d.$9 = function() {
            return this.props.plainTextValue != null ? this.props.plainTextValue : this.$8()
        }
        ;
        return c
    }(j.PureComponent);
    e.exports = a;
    a.defaultProps = {
        tooltip: h._("Sao ch\u00e9p v\u0103n b\u1ea3n v\u00e0o b\u1ed9 nh\u1edb t\u1ea1m"),
        tooltipSuccess: h._("\u0110\u00e3 sao ch\u00e9p v\u0103n b\u1ea3n v\u00e0o b\u1ed9 nh\u1edb t\u1ea1m"),
        tooltipSuccessDuration: 1e3,
        type: "string"
    }
}
), null);
__d("ScrollableArea.react", ["cx", "Bootloader", "React", "ScrollBoundaryContain", "Style", "SubscriptionsHandler", "joinClasses", "prop-types", "requireCond", "cr:1503160"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = "uiScrollableArea native"
      , j = "uiScrollableAreaWrap scrollable"
      , k = "uiScrollableAreaBody"
      , l = "uiScrollableAreaContent";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$2 = h.createRef();
            d.$4 = h.createRef();
            d.$6 = h.createRef();
            d.$7 = function(a) {
                if (d.$3)
                    return;
                var c = b("cr:1503160") != null ? b("cr:1503160").findDOMNode(d.$4.current) : d.$4.current;
                d.$1 = a.fromNative(c, {
                    fade: d.props.fade,
                    persistent: d.props.persistent,
                    shadow: d.props.shadow === void 0 ? !0 : d.props.shadow,
                    tabIndex: d.props.tabIndex
                });
                d.$8();
                (d.props.onScroll || d.props.onEndReached || d.props.onTopReached) && d.$1 && d.$1.subscribe("scroll", d.$9);
                d.props.onScrollableAreaLoaded && d.props.onScrollableAreaLoaded(d.$1)
            }
            ;
            d.$9 = function() {
                d.props.onScroll && d.props.onScroll(),
                d.$1 && d.$1.isScrolledToBottom() ? d.props.onEndReached && d.props.onEndReached() : d.$1 && d.$1.isScrolledToTop() && (d.props.onTopReached && d.props.onTopReached())
            }
            ;
            d.$5 = new (b("SubscriptionsHandler"))();
            return d
        }
        var d = c.prototype;
        d.render = function() {
            var a = {
                height: this.props.height
            }
              , c = Object.assign({}, this.props);
            delete c.maxHeight;
            delete c.fade;
            delete c.persistent;
            delete c.contain;
            return h.jsx("div", babelHelpers["extends"]({}, c, {
                className: b("joinClasses")(this.props.className, i),
                ref: this.$4,
                role: this.props.role,
                style: babelHelpers["extends"]({}, this.props.style || {}, a),
                children: h.jsx("div", {
                    className: j,
                    ref: this.$6,
                    role: this.props.role,
                    style: {
                        maxHeight: this.props.maxHeight
                    },
                    children: h.jsx("div", {
                        className: k,
                        ref: this.$2,
                        role: this.props.role,
                        children: h.jsx("div", {
                            className: l,
                            role: this.props.contentRole || this.props.role,
                            children: this.props.children
                        })
                    })
                })
            }))
        }
        ;
        d.getArea = function() {
            return this.$1
        }
        ;
        d.setScrollTop = function(a, b, c) {
            this.$1 && this.$1.setScrollTop(a, b, c)
        }
        ;
        d.getScrollTop = function() {
            return this.$1 && this.$1.getScrollTop() || 0
        }
        ;
        d.componentDidMount = function() {
            var a = b("Bootloader").loadModules(["ScrollableArea"], this.$7, "ScrollableArea.react");
            this.$5.addSubscriptions(a);
            a = b("cr:1503160") != null ? b("cr:1503160").findDOMNode(this.$6.current) : this.$6.current;
            if (a && this.props.contain) {
                a = b("ScrollBoundaryContain").applyToElem(a);
                a && this.$5.addSubscriptions(a)
            }
        }
        ;
        d.componentDidUpdate = function(a) {
            a.width !== this.props.width && this.$8();
            a = this.getArea();
            a && a.throttledAdjustGripper()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.destroy(),
            this.$3 = !0,
            this.$5.release()
        }
        ;
        d.$8 = function() {
            var a = b("cr:1503160") != null ? b("cr:1503160").findDOMNode(this.$2.current) : this.$2.current;
            b("Style").set(a, "width", this.props.width + "px")
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        width: (c = b("prop-types")).number,
        height: c.oneOfType([c.number, c.string]),
        maxHeight: c.oneOfType([c.number, c.string]),
        onScroll: c.func,
        onEndReached: c.func,
        onTopReached: c.func,
        onScrollableAreaLoaded: c.func,
        shadow: c.bool,
        fade: c.bool,
        persistent: c.bool,
        role: c.string,
        contentRole: c.string,
        contain: c.bool
    };
    a.defaultProps = {
        contain: !0
    }
}
), null);
__d("AsyncRequestUtil", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    f.send = a;
    function a(a) {
        return new (b("Promise"))(function(b, c) {
            return a.setHandler(b).setErrorHandler(c).send()
        }
        )
    }
}
), null);
__d("ProfileTile.react", ["Image.react", "ImageBlock.react", "Link.react", "React", "URI", "XUIText.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = 24;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.size || i;
            a = this.props.imageProps && this.props.imageProps.src || "https://graph.facebook.com/" + (this.props.id || "") + "/picture?width=" + a + "&height=" + a;
            var c = this.props.imageProps && this.props.imageProps.href || "/" + (this.props.id || "")
              , d = null;
            this.props.shouldShowProfileCardOnHover && (d = new (g || (g = b("URI")))("/ajax/hovercard/user.php").setQueryData({
                id: this.props.id
            }));
            var e = this.props.desc ? h.jsx(b("XUIText.react"), babelHelpers["extends"]({
                display: "block"
            }, this.props.descProps, {
                children: this.props.desc
            })) : null
              , f = h.jsx("span", babelHelpers["extends"]({}, this.props.titleProps, {
                children: this.props.name
            }));
            this.props.shouldNameLinkToProfile && (f = h.jsx(b("Link.react"), babelHelpers["extends"]({
                "data-hovercard": d
            }, this.props.titleProps, {
                href: this.props.titleProps && this.props.titleProps.href || "/" + (this.props.id || ""),
                children: this.props.name
            })));
            d = this.props.image || (this.props.size && this.props.imageProps && !this.props.imageProps.height && this.props.imageProps && !this.props.imageProps.width ? h.jsx(b("Image.react"), babelHelpers["extends"]({
                height: this.props.size,
                src: a,
                width: this.props.size
            }, this.props.imageProps)) : h.jsx(b("Image.react"), babelHelpers["extends"]({
                src: a
            }, this.props.imageProps)));
            a = this.props.shouldImageLinkToProfile ? h.jsx(b("Link.react"), {
                href: c,
                children: d
            }) : d;
            return h.jsxs(b("ImageBlock.react"), babelHelpers["extends"]({}, this.props.tileProps, {
                children: [a, h.jsxs("div", {
                    children: [f, e]
                })]
            }))
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.defaultProps = {
        shouldShowProfileCardOnHover: !0,
        shouldNameLinkToProfile: !0
    }
}
), null);
__d("QueryHistory", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        set: function(a, b) {
            g[this._key(a)] = b
        },
        get: function(a) {
            return g[this._key(a)]
        },
        _key: function(a) {
            return "uri-" + a.getQualifiedURI().toString()
        }
    };
    e.exports = a
}
), null);
__d("SimpleSearchNavigation", ["Arbiter", "DOMQuery", "Input", "QueryHistory", "URI"], (function(a, b, c, d, e, f) {
    var g, h = null, i = null;
    a = {
        registerInput: function(a, c) {
            var d = this;
            i = b("DOMQuery").scry(a, "input")[0];
            h && this._updateTitle(h, c);
            b("Arbiter").subscribe("page_transition", function(a, c) {
                d._updateTitle(b("QueryHistory").get(c.uri))
            })
        },
        _updateTitle: function(a, c) {
            i && (b("Input").setValue(i, a || ""),
            i.setAttribute("singlestate", a && c),
            i.blur())
        },
        setPageTitle: function(a, c) {
            b("QueryHistory").set((g || (g = b("URI"))).getNextURI(), a);
            i ? this._updateTitle(a, c) : h = a;
            c = {};
            b("Arbiter").inform("search/updateNullState", c, "state")
        },
        setPageQuery: function(a) {
            b("Arbiter").inform("search/updateNullState", a, "state")
        }
    };
    e.exports = a
}
), null);
__d("getContextualLayerCursorOffset", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        var d = a.getOrientation()
          , e = d.getPosition();
        d = d.getAlignment();
        var f = a.getContent().getBoundingClientRect();
        a = a.getContext().getBoundingClientRect();
        b = b - a.left;
        c = c - a.top;
        switch (d) {
        case "left":
            b -= f.width;
            break;
        case "center":
            b -= a.width * .5;
            break;
        case "right":
            b -= a.width - f.width;
            break;
        default:
            throw new Error("invalid alignment")
        }
        switch (e) {
        case "above":
            break;
        case "left":
            b += f.width;
            c -= f.height * .5;
            break;
        case "right":
            b -= f.width;
            c -= f.height * .5;
            break;
        case "below":
            c -= a.height;
            break;
        default:
            throw new Error("invalid position")
        }
        return {
            offsetX: b,
            offsetY: c
        }
    }
}
), null);
__d("XLiveClipVideoInternalSubmitController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/videos/clipping/submit/", {
        video_id: {
            type: "Int",
            required: !0
        },
        start_seconds: {
            type: "Int"
        },
        end_seconds: {
            type: "Int"
        },
        show_share_dialog_on_finish: {
            type: "Bool",
            defaultValue: !0
        },
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
__d("XLiveVideoClippingShareDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/live/clipping/share/dialog/", {
        video_id: {
            type: "FBID",
            required: !0
        },
        show_preview: {
            type: "Bool",
            defaultValue: !1
        },
        start_seconds: {
            type: "Int"
        },
        end_seconds: {
            type: "Int"
        },
        enable_scrubber: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
__d("ClippingApi", ["regeneratorRuntime", "Arbiter", "AsyncRequest", "AsyncRequestUtil", "XLiveClipVideoInternalSubmitController", "XLiveVideoClippingShareDialogController", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var c = a.prototype;
        c.clipVideo = function(a, c, d, e) {
            var f, g, h, i, j;
            return b("regeneratorRuntime").async(function(k) {
                while (1)
                    switch (k.prev = k.next) {
                    case 0:
                        f = Math.round(e);
                        g = !!b("qex")._("1180562");
                        if (!g) {
                            k.next = 11;
                            break
                        }
                        h = b("XLiveVideoClippingShareDialogController").getURIBuilder().setFBID("video_id", c).setBool("show_preview", !1).setInt("start_seconds", f - d).setInt("end_seconds", f).setBool("enable_scrubber", g).getURI();
                        k.next = 6;
                        return b("regeneratorRuntime").awrap(b("AsyncRequestUtil").send(new (b("AsyncRequest"))(h)));
                    case 6:
                        b("Arbiter").inform("GamesVideoClipping/clipReady");
                        i = a.current;
                        (i == null ? void 0 : i.isFullscreen()) && (i == null ? void 0 : i.toggleFullscreen());
                        i == null ? void 0 : i.pause("user_initiated");
                        return k.abrupt("return");
                    case 11:
                        j = b("XLiveClipVideoInternalSubmitController").getURIBuilder().setInt("end_seconds", f).setInt("video_id", c).getURI();
                        k.next = 14;
                        return b("regeneratorRuntime").awrap(b("AsyncRequestUtil").send(new (b("AsyncRequest"))(j).setMethod("POST")));
                    case 14:
                        return k.abrupt("return");
                    case 15:
                    case "end":
                        return k.stop()
                    }
            }, null, this)
        }
        ;
        c.shareClip = function(a) {
            var c;
            return b("regeneratorRuntime").async(function(d) {
                while (1)
                    switch (d.prev = d.next) {
                    case 0:
                        c = b("XLiveVideoClippingShareDialogController").getURIBuilder().setFBID("video_id", a).setBool("show_preview", !1).getURI();
                        d.next = 3;
                        return b("regeneratorRuntime").awrap(b("AsyncRequestUtil").send(new (b("AsyncRequest"))(c)));
                    case 3:
                        b("Arbiter").inform("GamesVideoClipping/clipReady");
                    case 4:
                    case "end":
                        return d.stop()
                    }
            }, null, this)
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("VideoWithClickPlayPause", ["logVideosClickTracking"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";
        function a(a) {
            this.$1 = a,
            this.$2 = this.$1.getVideoNode(),
            this.$1.addListener("clickVideo", this.$3.bind(this)),
            this.$1.hasSeenClick() && this.$3()
        }
        var c = a.prototype;
        c.$3 = function() {
            var a = this.$1.getOption("CommercialBreakVideoAdOverlay", "videoController");
            if (this.$1.isState("playing")) {
                if (this.$1.getOption("VideoWithLiveBroadcast", "isLive") || a && a.getOption("VideoWithLiveBroadcast", "isLive") || this.$4() || this.$5())
                    return;
                this.$1.pause("user_initiated")
            } else
                b("logVideosClickTracking")(this.$2),
                this.$1.play("user_initiated")
        }
        ;
        c.$4 = function() {
            var a = this.$1.getOption("CommercialBreakVideoAdOverlay", "videoController");
            a = a && a.getOption("VideoWithInstreamVideo", "controller");
            return a && !a.getConfig().canPauseAdBreak
        }
        ;
        c.$5 = function() {
            return this.$1.getOption("VideoWithInstreamVideo", "disableClickToPause")
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("LiveVideoPlayerDispatcher", ["ExplicitRegistrationReactDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            b = a.call(this, b) || this;
            babelHelpers.assertThisInitialized(b).dispatch = b.dispatch.bind(babelHelpers.assertThisInitialized(b));
            return b
        }
        return b
    }(b("ExplicitRegistrationReactDispatcher"));
    c = new a({
        strict: !0
    });
    e.exports = c
}
), null);
__d("VideoWithLoopingPlayback", ["setImmediate"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, c) {
            var d = this;
            c === void 0 && (c = -1);
            this.$5 = !1;
            this.$7 = function() {
                var a = d.$1.getOption("FeedAutoplay", "isVisibleForAutoplay")
                  , c = d.$1.getOption("WatchAndScroll", "isActive")
                  , e = d.$1.getIsInChannel()
                  , f = d.$1.getSource() === "tahoe";
                !d.$5 && (a || a === void 0) && !c && !e && !f && (!d.$4 || d.$3 < d.$4) && (b("setImmediate")(function() {
                    return d.$1.play("loop_initiated")
                }),
                d.$3++,
                d.$4 && d.$3 === d.$4 - 1 && d.$1.setOption("Looping", "isLooping", !1))
            }
            ;
            this.$1 = a;
            this.$2 = !0;
            this.$3 = 1;
            this.$4 = c > -1 ? c : null;
            this.$6 = this.$1.addListener("finishPlayback", this.$7);
            this.$1.registerOption("Looping", "isLooping", function() {
                return d.$2
            }, function(a) {
                return d.$8(a)
            });
            this.$1.registerOption("Looping", "disabled", function() {
                return d.$5
            }, function(a) {
                return d.$5 = a
            })
        }
        var c = a.prototype;
        c.destroy = function() {
            this.$6 != null && (this.$6.remove(),
            this.$6 = null),
            this.$1.hasOption("Looping", "isLooping") && this.$1.unregisterOption("Looping", "isLooping"),
            this.$1.hasOption("Looping", "disabled") && this.$1.unregisterOption("Looping", "disabled")
        }
        ;
        c.isLooping = function() {
            return this.$2
        }
        ;
        c.getLoopCount = function() {
            return this.$3
        }
        ;
        c.getMaxLoopCount = function() {
            return this.$4
        }
        ;
        c.setMaxLoopCount = function(a) {
            this.$4 = a > -1 ? a : null
        }
        ;
        c.$8 = function(a) {
            this.$2 = a
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("VideoPollCardActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        MARK_POLL_CARD_ACTIVE: "",
        MARK_POLL_CARD_INACTIVE: ""
    });
    c = a;
    e.exports = c
}
), null);
__d("VideoPollCardDispatcher", ["ExplicitRegistrationDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("ExplicitRegistrationDispatcher"))({
        strict: !1
    });
    e.exports = a
}
), null);
__d("FBOverlayElement.react", ["cx", "React", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    var h = b("React")
      , i = {
        horizontal: {
            left: "_32rg",
            right: "_32rh",
            fit: "_32rg _32rh",
            center: "_1cy5"
        },
        vertical: {
            top: "_32ri",
            bottom: "_32rj",
            fit: "_32ri _32rj",
            middle: "_1cy6"
        }
    };
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = h.Children.only(this.props.children)
              , c = b("joinClasses")(a.props.className, "_32rk", i.horizontal[this.props.horizontal], i.vertical[this.props.vertical]);
            return h.cloneElement(a, {
                className: c
            })
        }
        ;
        return c
    }(h.PureComponent);
    a.propTypes = {
        horizontal: b("prop-types").oneOf(["left", "right", "fit", "center"]),
        vertical: b("prop-types").oneOf(["top", "bottom", "fit", "middle"])
    };
    a.defaultProps = {
        horizontal: "fit",
        vertical: "fit"
    };
    e.exports = a
}
), null);
__d("StoreBasedStateMixinHelper", ["invariant", "SubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a,
            this.$2 = new (b("SubscriptionsHandler"))()
        }
        var c = a.prototype;
        c.subscribeCallback = function(a, b) {
            var c = this.$1.map(function(c) {
                var d = b != null ? function(d) {
                    b && b(c);
                    return a(d)
                }
                : a;
                if (c.hasChanged && c.getDispatchToken && c.addListener)
                    return c.addListener(d);
                else if (c.subscribe)
                    return c.subscribe("change", d);
                else if (c.addListener)
                    return c.addListener("change", d);
                else
                    g(0, 574)
            });
            this.$1.length > 0 && this.$2.addSubscriptions.apply(this.$2, c)
        }
        ;
        c.release = function() {
            this.$2.release()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("xuiglyph", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        throw new Error("xuiglyph: Unexpected xuiglyph call.")
    }
}
), null);
