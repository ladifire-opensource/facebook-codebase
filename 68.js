if (self.CavalryLogger) {
    CavalryLogger.start_js(["eDF1h"]);
}

__d("CometFlexibleRow.react", ["React", "stylex", "useCometSize_DO_NOT_USE", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = 8;
    function a(a) {
        var c = a.columnMaxWidth
          , d = a.columnMinWidth
          , e = a.children
          , f = a.justify;
        f = f === void 0 ? "start" : f;
        var j = a.maxItems
          , k = j === void 0 ? Infinity : j;
        j = a.minItems;
        var l = j === void 0 ? 1 : j
          , m = a.onTotalItemsChanged;
        j = b("useCometSize_DO_NOT_USE")();
        a = j[0];
        var n = j[1]
          , o = h.Children.toArray(e);
        j = h.useState(o.length);
        var p = j[0]
          , q = j[1];
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            if (n != null) {
                var a = []
                  , b = p;
                while (!0) {
                    if (a.includes(b))
                        break;
                    var e = (n.width - b * i) / b;
                    if (e > c) {
                        a.push(b);
                        b += 1;
                        continue
                    }
                    if (e < d) {
                        a.push(b);
                        b -= 1;
                        continue
                    }
                    break
                }
                b = Math.min(Math.max(l, b), k);
                b !== p && (m && m(b),
                q(b))
            }
        }, [d, c, n, k, l, p, m]);
        return h.jsx("div", {
            className: (g || (g = b("stylex"))).dedupe({
                "align-items-1": "gs1a9yip",
                "display-1": "j83agx80",
                "flex-direction-1": "btwxx1t3",
                "flex-wrap-1": "owycx6da",
                "justify-content-1": "jifvfom9",
                "margin-end-1": "dlv3wnog",
                "margin-start-1": "rl04r1d5",
                "position-1": "l9j0dhe7"
            }, f === "center" ? {
                "justify-content-1": "taijpn5t"
            } : null, f === "end" ? {
                "justify-content-1": "bkfpd7mw"
            } : null),
            ref: a,
            children: Array(p).fill().map(function(a, b) {
                return h.jsx("div", {
                    className: "b3onmgus ph5uu5jm g3eujd1d",
                    style: {
                        maxWidth: c,
                        minWidth: d
                    },
                    children: o[b]
                }, (a = (a = o[b]) == null ? void 0 : a.key) != null ? a : "_fakecolumn" + b)
            })
        })
    }
}
), null);
__d("CometAlertDialogImpl.react", ["fbt", "CometCardedDialog.react", "CometRow.react", "CometRowItem.react", "React", "TetraButton.react", "TetraText.react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.body
          , d = a.close
          , e = a.onClose;
        a = a.title;
        return h.jsxs(b("CometCardedDialog.react"), {
            onClose: e,
            withCloseButton: !0,
            children: [h.jsx("div", {
                className: "bjjx79mm dati1w0a clqubjjj jbae33se",
                children: h.jsx(b("TetraText.react"), {
                    numberOfLines: 1,
                    type: "headlineEmphasized2",
                    children: a
                })
            }), h.jsx("div", {
                className: "l9j0dhe7 dati1w0a f10w8fjw hv4rvrfc pybr56ya",
                children: h.jsx(b("TetraText.react"), {
                    type: "body3",
                    children: c
                })
            }), h.jsx("div", {
                className: "a8nywdso ihqw7lf3 rz4wbd8a jb3vyjys",
                children: h.jsx(b("CometRow.react"), {
                    align: "end",
                    children: h.jsx(b("CometRowItem.react"), {
                        children: h.jsx(b("TetraButton.react"), {
                            label: (a = d) != null ? a : g._("\u0110\u00f3ng"),
                            onPress: e,
                            testid: void 0,
                            type: "primary"
                        })
                    })
                })
            })]
        })
    }
}
), null);
__d("useContextRef", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, b) {
        b = g.useContext(b);
        var c = b.current;
        g.useEffect(function() {
            if (c.has(a)) {
                var b = c.get(a);
                c.set(a, b + 1)
            } else
                c.set(a, 1);
            return function() {
                var b = c.get(a);
                b !== void 0 && (b === 1 ? c["delete"](a) : c.set(a, b - 1))
            }
        }, [c, a])
    }
}
), null);
__d("CometComposerPushPageGlimmer.react", ["CometProgressRingIndeterminate.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        popover: {
            alignItems: "bp9cbjyn",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            height: "sgwjjusx",
            justifyContent: "taijpn5t",
            width: "hdkcmrsv"
        },
        pushview: {
            alignItems: "bp9cbjyn",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            height: "j707pzvn",
            justifyContent: "taijpn5t",
            width: "oh7imozk"
        }
    };
    function a(a) {
        var c = a.withPopover;
        a = a.xstyle;
        return h.jsx("div", {
            className: (g || (g = b("stylex")))(c && i.popover, !c && i.pushview, a),
            children: h.jsx(b("CometProgressRingIndeterminate.react"), {
                color: "disabled",
                size: 24
            })
        })
    }
}
), null);
__d("getEditorStateFromContentEditableState", ["ContentState", "EditorState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        switch (a.__type) {
        case "plain-text":
            var d = a.hasFocus
              , e = a.selectionOffsets
              , f = a.text;
            f = b("ContentState").createFromText(f.replace(/\n\n$/, "\n"));
            var g = b("EditorState").createWithContent(f);
            if (e) {
                var h, i, j, k = f.getFirstBlock(), l = 0;
                while (k) {
                    var m = k.getKey()
                      , n = k.getLength()
                      , o = l;
                    l += n;
                    l >= e.start && e.start - o >= 0 && (h = {
                        key: m,
                        offset: e.start - o
                    });
                    l >= e.end && e.end - o >= 0 && (i = {
                        key: m,
                        offset: e.end - o
                    });
                    j == null && (i && !h ? j = !0 : h && !i ? j = !1 : i && h && (j = h.offset > i.offset));
                    k = f.getBlockAfter(m)
                }
                if (h && i) {
                    n = g.getSelection().merge({
                        anchorKey: h.key,
                        anchorOffset: h.offset,
                        focusKey: i.key,
                        focusOffset: i.offset,
                        isBackward: !!j
                    });
                    g = b("EditorState").forceSelection(g, n)
                }
            } else
                d && (g = b("EditorState").moveFocusToEnd(g));
            return g;
        case "editor-state-based":
        default:
            return c != null ? b("EditorState").set(a.draftEditorState, {
                decorator: c
            }) : a.draftEditorState
        }
    }
}
), null);
__d("TabBar", ["ArbiterMixin", "ReactDOM", "mixin"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(d, e, f) {
            var g;
            g = a.call(this) || this;
            e.props = babelHelpers["extends"]({}, e.props, {
                onTabClick: function(a) {
                    return g.inform(c.TAB_CLICK, a)
                }
            });
            b("ReactDOM").render(d(e), f);
            return g
        }
        return c
    }(b("mixin")(b("ArbiterMixin")));
    e.exports = a;
    a.TAB_CLICK = "onTabClick"
}
), null);
__d("ChatTabViewEvents", ["Arbiter"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("Arbiter"))();
    e.exports = a
}
), null);
__d("PageTimelineChainingTypeConstants", [], (function(a, b, c, d, e, f) {
    a = "fanning";
    f.FANNING = a;
    b = "follow";
    f.FOLLOW = b;
    c = "show_follow";
    f.SHOW_FOLLOW = c
}
), null);
__d("PagesTimelineChaining", ["Arbiter", "ChatTabViewEvents", "CSS", "Event", "PagesFollowStore", "PageTimelineChainingTypeConstants", "Run", "Style", "SubscriptionsHandler", "UIPagelet"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 0;
    a = {
        _recentlyLikedPageIDs: {},
        _recentlyMessagedPageIDs: {},
        container: null,
        _subscriptions: [],
        _chatSubscriptions: [],
        _followSubscription: null,
        _isFollow: !1,
        init: function(a, c) {
            var d = this;
            this.container = a;
            this._followSubscription = new (b("SubscriptionsHandler"))();
            this._isFollow = c.isFollow;
            b("Run").onLeave(function() {
                return d._unsubscribe()
            });
            this._showChainSuggestions(c.pageID, !1) || (this._subscriptions = [b("Arbiter").subscribe("liked", this.onLike.bind(this, c.pageID))],
            c.canFollow && this._followSubscription.addSubscriptions(b("PagesFollowStore").addListener(function() {
                var a = b("PagesFollowStore").getState();
                if (!(c.pageID in a))
                    return;
                a[c.pageID] && !d._isFollow && d._onFollow(c.pageID);
                d._isFollow = a[c.pageID]
            })),
            c.enableLikeCheckup && this._subscriptions.push(b("Arbiter").subscribe("unliked", this.onUnlike.bind(this))),
            c.onMessageEnabled && this._chatSubscriptions.push(b("ChatTabViewEvents").subscribe("chat-send-to-page", this.onMessage.bind(this, c.pageID))))
        },
        onScroll: function(a) {
            if (document.documentElement) {
                var b = window.pageYOffset || document.documentElement.scrollTop;
                b <= g && (this._showChainSuggestions(a, !0),
                this._unsubscribe());
                g = b
            }
        },
        onLike: function(a, b, c) {
            c.profile_id === a && c.target && (this._recentlyLikedPageIDs[a] = !0,
            this._showChainSuggestions(a, !1),
            this._unsubscribe())
        },
        _onFollow: function(a) {
            this._showChainFollowSuggestions(a),
            this._unsubscribe()
        },
        onMessage: function(a, b, c) {
            c && c.pageID === a && (this._recentlyMessagedPageIDs[a] = !0,
            this._showMessageSuggestions(a),
            this._unsubscribe())
        },
        onUnlike: function(a, c) {
            b("UIPagelet").loadFromEndpoint("PagesLikeCheckupPagelet", this.container, {}, {
                displayCallback: this.displayCallback.bind(this)
            }),
            this._unsubscribe()
        },
        displayCallback: function(a) {
            a && a();
            a = this.container.firstChild;
            a && b("Style").set(this.container, "height", a.offsetHeight + "px")
        },
        _showChainSuggestions: function(a, c) {
            if (!(a in this._recentlyLikedPageIDs))
                return !1;
            c = b("PageTimelineChainingTypeConstants").FANNING;
            b("UIPagelet").loadFromEndpoint("PagesTimelineChainingPagelet", this.container, {
                pageID: a,
                type: c
            }, {
                displayCallback: this.displayCallback.bind(this)
            });
            return !0
        },
        _showChainFollowSuggestions: function(a) {
            var c = b("PageTimelineChainingTypeConstants").FOLLOW;
            b("UIPagelet").loadFromEndpoint("PagesTimelineChainingPagelet", this.container, {
                pageID: a,
                type: c
            }, {
                displayCallback: this.displayCallback.bind(this)
            });
            return !0
        },
        _showMessageSuggestions: function(a) {
            if (!(a in this._recentlyMessagedPageIDs))
                return !1;
            b("UIPagelet").loadFromEndpoint("PagesMessageChainingPagelet", this.container, {
                pageID: a
            }, {
                displayCallback: this.displayCallback.bind(this)
            });
            return !0
        },
        dismissCallback: function(a, c, d) {
            b("CSS").hide(this.container),
            delete this._recentlyLikedPageIDs[c],
            this._unsubscribe()
        },
        attachDismissCallback: function(a, c, d, e) {
            b("Event").listen(a, "click", this.dismissCallback.bind(this, c, d, e))
        },
        _unsubscribe: function() {
            this._subscriptions.length && (this._subscriptions.forEach(function(a) {
                return b("Arbiter").unsubscribe(a)
            }),
            this._subscriptions = []),
            this._chatSubscriptions.length && (this._chatSubscriptions.forEach(function(a) {
                return b("ChatTabViewEvents").unsubscribe(a)
            }),
            this._chatSubscriptions = []),
            this._followSubscription && this._followSubscription.release()
        }
    };
    e.exports = a
}
), null);
__d("PagesManagerUserMessagePrompt", ["ChatAppStore", "ChatOpenTabEventLogger", "ChatVisibility", "FantaTabActions", "MercuryIDs", "PagesLogger", "PagesLoggerEventEnum", "PagesLoggerEventTargetEnum", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    f.openTab = a;
    f._openTabAndLog = h;
    var g = 2e3;
    function a(a, c, d) {
        c === void 0 && (c = "fb_page:user_message_prompt");
        d === void 0 && (d = g);
        if (!b("ChatVisibility").isOnline())
            return;
        setTimeout(function() {
            if (b("ChatAppStore").getState().isInitialized)
                h(a, c);
            else
                var d = b("ChatAppStore").addListener(function() {
                    b("ChatAppStore").getState().isInitialized && (b("setImmediate")(function() {
                        h(a, c)
                    }),
                    d.remove())
                })
        }, d)
    }
    function h(a, c) {
        var d = b("MercuryIDs").getThreadIDFromUserID(a);
        b("FantaTabActions").openTab(d, [c]);
        b("ChatOpenTabEventLogger").logUserAutoOpen(c, a);
        b("PagesLogger").log(a, b("PagesLoggerEventEnum").IMPRESSION, b("PagesLoggerEventTargetEnum").PAGE_MESSAGE_PROMPT, null, ["pages_growth"], {})
    }
}
), null);
__d("XPageRecommendationFeedAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/social_rex/page_feed/", {
        page_id: {
            type: "Int",
            required: !0
        },
        sort_order: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        feed_container_id: {
            type: "String",
            required: !0
        }
    })
}
), null);
__d("PageRecommendationFeedController", ["AsyncRequest", "Run", "SubscriptionsHandler", "TabBar", "XPageRecommendationFeedAsyncController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initializeTab = a;
    f.setLoadingSpinner = c;
    f.setFeedContainer = d;
    f.updateFeedContainer_ = e;
    f.toggleLoadingSpinner_ = g;
    function a(a, c) {
        var d = this
          , e = new (b("SubscriptionsHandler"))();
        e.addSubscriptions(a.subscribe(b("TabBar").TAB_CLICK, function(a, e) {
            d.toggleLoadingSpinner_(!0);
            d.updateFeedContainer_();
            a = b("XPageRecommendationFeedAsyncController").getURIBuilder().setInt("page_id", c).setEnum("sort_order", e).setString("feed_container_id", d.feedContainer_.id).getURI();
            new (b("AsyncRequest"))().setURI(a).setFinallyHandler(function(a) {
                d.toggleLoadingSpinner_(!1)
            }).send()
        }));
        b("Run").onLeave(function() {
            return e.release()
        })
    }
    function c(a) {
        this.loadingSpinner_ = a
    }
    function d(a) {
        window.feedContainer = a,
        this.version_ = 0,
        this.feedContainer_ = a
    }
    function e() {
        this.feedContainer_.id = "feed_container" + this.version_++;
        while (this.feedContainer_.firstChild)
            this.feedContainer_.removeChild(this.feedContainer_.firstChild)
    }
    function g(a) {
        this.loadingSpinner_.style.display = a ? "block" : "none"
    }
}
), null);
__d("TahoeActions", ["TahoeActionTypes", "TahoeDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setMediaController = a;
    f.setUFIInstanceID = c;
    f.exit = d;
    function a(a) {
        b("TahoeDispatcher").dispatch({
            type: b("TahoeActionTypes").SET_MC,
            mediaController: a
        })
    }
    function c(a) {
        b("TahoeDispatcher").dispatch({
            type: b("TahoeActionTypes").SET_UFI_INSTANCE_ID,
            ufiInstanceID: a
        })
    }
    function d() {
        b("TahoeDispatcher").dispatch({
            type: b("TahoeActionTypes").EXIT
        })
    }
}
), null);
__d("TahoeWatchLogo.react", ["fbt", "Image.react", "Link.react", "React", "TetraText.react", "URI", "VideoHomeTypedLoggerLite", "XVideoHomeFeedController", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i, j = b("React"), k = b("VideoHomeTypedLoggerLite").log;
    (h || (h = b("stylex"))).inject(".i85zmo3j{align-items:center}", 1);
    h.inject(".alzwoclg{display:flex}", 1);
    h.inject(".rq8durfe{font-size:1.25rem}", 1);
    h.inject(".igjjae4c{font-weight:bold}", 1);
    h.inject(".dwcz42gf{line-height:24}", 1);
    h.inject(".evpwb5b3{padding-right:10px}", 1);
    h.inject(".d1pn00lf{margin-left:12px}", 1);
    h.inject(".a6fdb1jh{margin-right:12px}", 1);
    h.inject(".alzwoclg{display:flex}", 1);
    h.inject(".juxnsli8{margin-left:10px}", 1);
    h.inject(".fcysig3v{margin-right:8px}", 1);
    h.inject(".l3ldwz01:hover{text-decoration:none}", 7.1);
    function a(a) {
        var c = a.paddingBottom
          , d = a.paddingTop;
        a = a.clickable;
        a = a === void 0 ? !1 : a;
        var e = j.jsxs(j.Fragment, {
            children: [j.jsx("div", {
                className: "fcysig3v juxnsli8 alzwoclg",
                children: j.jsx(b("Image.react"), {
                    src: "/images/litestand/bookmarks/sidebar/icons/mobile/icon-watch-tv.png"
                })
            }), j.jsx(b("TetraText.react"), {
                type: "headlineEmphasized2",
                children: g._("Watch")
            })]
        })
          , f = j.useCallback(function() {
            k({
                event: "click",
                click_target: "tahoe_watch_logo"
            }),
            (i || (i = b("URI"))).go(b("XVideoHomeFeedController").getURIBuilder().getURI(), !0)
        }, []);
        return a ? j.jsx(b("Link.react"), {
            className: "a6fdb1jh d1pn00lf evpwb5b3 dwcz42gf igjjae4c rq8durfe alzwoclg i85zmo3j l3ldwz01",
            style: {
                paddingBottom: c,
                paddingTop: d
            },
            onClick: f,
            children: e
        }) : j.jsx("div", {
            className: "a6fdb1jh d1pn00lf evpwb5b3 dwcz42gf igjjae4c rq8durfe alzwoclg i85zmo3j",
            style: {
                paddingBottom: c,
                paddingTop: d
            },
            children: e
        })
    }
}
), null);
