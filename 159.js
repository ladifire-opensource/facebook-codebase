if (self.CavalryLogger) {
    CavalryLogger.start_js(["9qkcq"]);
}

__d("PinnedConversationTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PinnedConversationLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PinnedConversationLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PinnedConversationLoggerConfig", this.$1, {
                signal: !0
            }, a)
        }
        ;
        c.clear = function() {
            this.$1 = {};
            return this
        }
        ;
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        }
        ;
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.setAttemptOpenOnInit = function(a) {
            this.$1.attempt_open_on_init = a;
            return this
        }
        ;
        c.setBadgeCount = function(a) {
            this.$1.badge_count = a;
            return this
        }
        ;
        c.setClientEventTimeMs = function(a) {
            this.$1.client_event_time_ms = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setFtID = function(a) {
            this.$1.ft_id = a;
            return this
        }
        ;
        c.setIsRaised = function(a) {
            this.$1.is_raised = a;
            return this
        }
        ;
        c.setNotificationType = function(a) {
            this.$1.notification_type = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setPromoteOnInit = function(a) {
            this.$1.promote_on_init = a;
            return this
        }
        ;
        c.setReason = function(a) {
            this.$1.reason = a;
            return this
        }
        ;
        c.setTabID = function(a) {
            this.$1.tab_id = a;
            return this
        }
        ;
        c.setTabSessionID = function(a) {
            this.$1.tab_session_id = a;
            return this
        }
        ;
        c.setTabsInDock = function(a) {
            this.$1.tabs_in_dock = a;
            return this
        }
        ;
        c.setTabsInMenu = function(a) {
            this.$1.tabs_in_menu = a;
            return this
        }
        ;
        c.setWindowInnerHeight = function(a) {
            this.$1.window_inner_height = a;
            return this
        }
        ;
        c.setWindowInnerWidth = function(a) {
            this.$1.window_inner_width = a;
            return this
        }
        ;
        return a
    }();
    c = {
        attempt_open_on_init: !0,
        badge_count: !0,
        client_event_time_ms: !0,
        event: !0,
        ft_id: !0,
        is_raised: !0,
        notification_type: !0,
        page_id: !0,
        promote_on_init: !0,
        reason: !0,
        tab_id: !0,
        tab_session_id: !0,
        tabs_in_dock: !0,
        tabs_in_menu: !0,
        window_inner_height: !0,
        window_inner_width: !0
    };
    e.exports = a
}
), null);
__d("XMessengerNewProductQPImpressionController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messenger/new_product_qp/log_impression/", {})
}
), null);
__d("BuddyListNub", ["csx", "cx", "fbt", "Arbiter", "AsyncRequest", "AvailableList", "BootloadedComponent.react", "ChannelConnection", "ChatOptions", "ChatSidebarActions", "ChatSidebarStore", "ChatSidebarVisibility", "ChatVisibility", "CSS", "Dock", "DOM", "Event", "JSResource", "KeyboardShortcuts", "Keys", "MeetupExperiments", "NubController", "OrderedFriendsList", "Parent", "PresencePrivacy", "PresenceStatus", "PresenceUtil", "React", "ReactDOM", "Run", "Style", "Toggler", "XMessengerNewProductQPImpressionController", "emptyFunction", "intlNumUtils", "translateKey"], (function(a, b, c, d, e, f, g, h, i) {
    var j = b("React")
      , k = 40
      , l = 253
      , m = "277px"
      , n = b("MeetupExperiments").supportLinkCreation();
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c(c, d, e, f) {
            var g;
            g = a.call(this) || this;
            a.prototype.init.call(babelHelpers.assertThisInitialized(g), c);
            g.root = c;
            g.orderedList = d;
            g.button = b("DOM").find(c, "a.fbNubButton");
            g.unreadCount = b("DOM").find(c, "span._5ayx");
            g.label = b("DOM").find(c, "span.label");
            g.buddyListTitle = b("DOM").find(c, ".titlebarTextWrapper");
            g.body = b("DOM").scry(c, "div.fbNubFlyoutBody")[0];
            g.container = b("Parent").bySelector(c, "._56ox");
            g._exposedMessengerDesktopUpsell = !1;
            var h = b("DOM").find(c, "div.fbNubFlyoutTitlebar");
            b("Toggler").createInstance(h).setSticky(!1);
            b("Toggler").createInstance(c).setSticky(!0);
            var k = b("DOM").scry(c, "._7oue");
            f && b("Run").onAfterLoad(function() {
                g.dropdown = b("ReactDOM").render(j.jsx(b("BootloadedComponent.react"), {
                    bootloadPlaceholder: j.jsx("span", {}),
                    bootloadLoader: b("JSResource")("ChatSidebarDropdown.react").__setRef("BuddyListNub"),
                    onToggleSidebar: function() {},
                    sidebarType: "buddylist"
                }), f)
            });
            d.subscribeOnce("render", g.flyoutContentChanged.bind(babelHelpers.assertThisInitialized(g)));
            b("Run").onAfterLoad(function() {
                var a = b("DOM").find(h, "div._4k48");
                a && b("ReactDOM").render(j.jsx(b("BootloadedComponent.react"), {
                    bootloadPlaceholder: j.jsx("span", {}),
                    bootloadLoader: b("JSResource")("ChatSidebarComposeLink.react").__setRef("BuddyListNub"),
                    className: "_3a-4"
                }), a);
                a = b("DOM").find(g.button, "div._1us9");
                a && b("ReactDOM").render(j.jsx(b("BootloadedComponent.react"), {
                    bootloadPlaceholder: j.jsx("span", {}),
                    bootloadLoader: b("JSResource")("ChatSidebarComposeLink.react").__setRef("BuddyListNub"),
                    className: "_3a-4"
                }), a);
                if (n) {
                    a = b("DOM").find(h, "div._8_wi");
                    b("ReactDOM").render(j.jsx(b("BootloadedComponent.react"), {
                        bootloadPlaceholder: j.jsx("span", {}),
                        bootloadLoader: b("JSResource")("ChatSidebarVideoCallLink.react").__setRef("BuddyListNub"),
                        className: "_8_v6"
                    }), a);
                    a = b("DOM").find(g.button, "div._8_v8");
                    b("ReactDOM").render(j.jsx(b("BootloadedComponent.react"), {
                        bootloadPlaceholder: j.jsx("span", {}),
                        bootloadLoader: b("JSResource")("ChatSidebarVideoCallLink.react").__setRef("BuddyListNub"),
                        className: "_8_v6"
                    }), a)
                }
                a = b("DOM").find(g.button, "div._1usa");
                a && b("ReactDOM").render(j.jsx(b("BootloadedComponent.react"), {
                    bootloadPlaceholder: j.jsx("span", {}),
                    bootloadLoader: b("JSResource")("ChatSidebarDropdown.react").__setRef("BuddyListNub"),
                    onToggleSidebar: function() {},
                    sidebarType: "buddylist_nub"
                }), a);
                a = b("DOM").find(h, "div._3gl7");
                a && b("ReactDOM").render(j.jsx(b("BootloadedComponent.react"), {
                    bootloadPlaceholder: j.jsx("span", {}),
                    bootloadLoader: b("JSResource")("ChatSidebarGroupCreateButtonReactComponent").__setRef("BuddyListNub")
                }), a);
                a = b("DOM").find(g.button, "div._3gll");
                a && b("ReactDOM").render(j.jsx(b("BootloadedComponent.react"), {
                    bootloadPlaceholder: j.jsx("span", {}),
                    bootloadLoader: b("JSResource")("ChatSidebarGroupCreateButtonReactComponent").__setRef("BuddyListNub"),
                    className: "newGCF"
                }), a)
            });
            d.setScrollContainer(g.body);
            b("AvailableList").subscribe("buddylist/availability-changed", g._updateCount.bind(babelHelpers.assertThisInitialized(g)));
            b("Arbiter").subscribe("chat/connect", function() {
                return g._handleConnect(!0)
            });
            b("Arbiter").subscribe("chat/option-changed", function(a, b) {
                b.name == "hide_groups" ? this.onResize() : b.name === "hide_buddylist" && (b.value ? this.hide() : this.show())
            }
            .bind(babelHelpers.assertThisInitialized(g)));
            b("ChannelConnection").subscribe(b("ChannelConnection").CONNECTED, function() {
                return g._updateView()
            });
            b("ChannelConnection").subscribe(b("ChannelConnection").SHUTDOWN, function() {
                return g._updateView()
            });
            b("ChannelConnection").subscribe(b("ChannelConnection").RECONNECTING, function() {
                return g._updateView()
            });
            b("ChannelConnection").subscribe([b("ChannelConnection").MUTE_WARNING, b("ChannelConnection").UNMUTE_WARNING], function() {
                return g._updateView()
            });
            g.subscribe("show", g.onShow.bind(babelHelpers.assertThisInitialized(g)));
            g.subscribe("hide", g.onHide.bind(babelHelpers.assertThisInitialized(g)));
            g.subscribe("resize", g.onResize.bind(babelHelpers.assertThisInitialized(g)));
            b("Event").listen(c, "keydown", g._onKeyDown.bind(babelHelpers.assertThisInitialized(g)));
            b("Event").listen(g.button, "click", g.onButtonClick.bind(babelHelpers.assertThisInitialized(g)));
            b("KeyboardShortcuts").register("q", function(a) {
                g._isOpen || (g.onButtonClick(),
                g.show()),
                a.prevent()
            }, {
                persistOnTransition: !0,
                shortcutInfo: {
                    displayKeys: [b("translateKey")("q")],
                    description: i._("T\u00ecm ki\u1ebfm ng\u01b0\u1eddi li\u00ean h\u1ec7 tr\u00ean Messenger")
                }
            });
            b("Arbiter").subscribe("minisidebar/show", g.hide.bind(babelHelpers.assertThisInitialized(g)));
            b("Arbiter").subscribe("sidebar/visibility", function(a, b) {
                b ? g.hide() : g._onSidebarHide()
            });
            b("Style").set(g.body, "min-height", m);
            b("Arbiter").subscribe("sidebar/typeahead/active", function(a, c) {
                c ? (g._typeaheadActive = !0,
                b("CSS").hide(g.body.parentNode),
                g.orderedList.hide(),
                g.onResize()) : (g._typeaheadActive = !1,
                g.onResize(),
                b("CSS").show(g.body.parentNode),
                g.orderedList.show())
            });
            b("OrderedFriendsList").getList(function(a) {
                b("ChatSidebarStore").isEnabled() && b("ChatSidebarStore").getVisibleType() === "buddylist" && !b("ChatOptions").getSetting("hide_buddylist") && !b("ChannelConnection").disconnected() && !b("PresencePrivacy").isUserOffline() && a.length > 0 && g.show(),
                b("Event").listen(h, "click", function(a) {
                    b("CSS").matchesSelector(a.target, ".titlebarTextWrapper") && g._syncHideBuddylist(!0)
                }),
                k.forEach(function(a) {
                    var c = this;
                    b("Event").listen(a, "click", function(a) {
                        c._syncHideBuddylist(!0)
                    })
                }, babelHelpers.assertThisInitialized(g)),
                g._updateView()
            });
            return g
        }
        var d = c.prototype;
        d._handleVisibilityChange = function() {
            this._updateView(),
            b("ChatVisibility").isOnline() || this.hide()
        }
        ;
        d._updateView = function(a) {
            var c;
            if (!b("ChatVisibility").isOnline())
                a = i._("Chat");
            else if (b("ChannelConnection").disconnected())
                a = i._("{Chat} (\u0110\u00e3 ng\u1eaft k\u1ebft n\u1ed1i)", [i._param("Chat", i._("Tr\u00f2 chuy\u1ec7n"))]);
            else {
                var d = b("PresenceStatus").getOnlineCount();
                if (d) {
                    var e = b("DOM").create("span", {
                        className: "count"
                    }, "(" + b("intlNumUtils").formatNumberWithThousandDelimiters(d) + ")");
                    a = i._({
                        "*": "{Chat} {number-available}"
                    }, [i._param("Chat", i._("Tr\u00f2 chuy\u1ec7n")), i._param("number-available", e, [0, d])])
                } else
                    a = i._("Chat"),
                    c = !0
            }
            this._setPresenceIcon();
            this._setUnread();
            this._setLabel(a, c);
            this._updateBuddyListTitle();
            this.buttonContentChanged()
        }
        ;
        d._updateBuddyListTitle = function() {
            var a, c = i._("Chat"), d = "_6d4h";
            if (!b("ChatVisibility").isOnline() || b("ChannelConnection").disconnected())
                a = b("DOM").create("div", {
                    "class": d
                }, c);
            else {
                var e = b("PresenceStatus").getOnlineCount(), f;
                e && (d = "_6d4h _6d4i",
                f = b("DOM").create("div", {
                    "class": "_6d4j"
                }, i._("{subTitle} \u0111ang online", [i._param("subTitle", b("intlNumUtils").formatNumberWithThousandDelimiters(e))])));
                e = b("DOM").create("div", {
                    "class": d
                }, c);
                f && b("DOM").appendContent(e, f);
                a = e
            }
            d = this.buddyListTitle.textContent || this.buddyListTitle.innerText;
            if (a && d !== a) {
                c = this.buddyListTitle.cloneNode(!0);
                b("DOM").setContent(c, a);
                b("DOM").replace(this.buddyListTitle, c);
                this.buddyListTitle = c
            }
        }
        ;
        d._setPresenceIcon = function() {
            b("CSS").conditionClass(this.root, "offline", !b("ChatVisibility").isOnline() || b("ChannelConnection").disconnected())
        }
        ;
        d.onButtonClick = function() {
            if (!b("ChatSidebarStore").isInitialized())
                return !0;
            b("ChatSidebarVisibility").shouldShowSidebarIgnoreEnabled(null, function(a, c) {
                c = b("ChatSidebarStore").isEnabled();
                !c && a ? b("ChatSidebarActions").enable("sidebar") : b("ChatSidebarActions").show(c && a ? "sidebar" : "buddylist")
            })
        }
        ;
        d.onHide = function() {
            this._isOpen = !1,
            this._buddyListRenderSubscription && (this.orderedList.unsubscribe(this._buddyListRenderSubscription),
            this._buddyListRenderSubscription = null),
            this._hideBuddyList(),
            b("Arbiter").inform("buddylist/hide")
        }
        ;
        d._onKeyDown = function(a) {
            a = b("Event").getKeyCode(a);
            if (a === b("Keys").ESC && !b("CSS").hasClass(this.root, "menuOpened")) {
                this.hide();
                return !1
            } else
                a == b("Keys").RETURN && b("ChatSidebarVisibility").shouldShowSidebarIgnoreEnabled(null, function(a, c) {
                    b("ChatSidebarActions").enable(a ? "sidebar" : "buddylist")
                })
        }
        ;
        d._onSidebarHide = function(a) {
            var c = this;
            b("OrderedFriendsList").getList(function(a) {
                b("ChatSidebarStore").isEnabled() && !b("ChatOptions").getSetting("hide_buddylist") && !b("ChannelConnection").disconnected() && !b("PresencePrivacy").isUserOffline() && a.lenth > 0 ? c.show() : c.hide()
            })
        }
        ;
        d.onResize = function() {
            var a = this._typeaheadActive ? b("Dock").getMaxFlyoutHeight(this.root) - 60 : l;
            b("Arbiter").inform("buddyList/resized", a, "persistent");
            this._typeaheadActive ? b("Style").set(this.body, "max-height", "none") : b("Style").set(this.body, "max-height", m);
            a = Math.max(250, a);
            a = Math.floor(a / k);
            this.orderedList.setNumTopFriends(a, !1, "buddylist")
        }
        ;
        d._showBuddyList = function() {
            var a = this;
            this._buddyListRenderSubscription = this.orderedList.subscribe("render", function() {
                b("Style").get(a.body, "height") != m && b("Style").set(a.body, "height", m)
            });
            this.orderedList.show()
        }
        ;
        d._hideBuddyList = function() {
            this.orderedList.hide()
        }
        ;
        d.onShow = function() {
            this._isOpen = !0;
            b("ChannelConnection").disconnected() ? (b("ChannelConnection").reconnect(),
            this._showBuddyList()) : b("ChatVisibility").goOnline(this._showBuddyList.bind(this));
            this._syncHideBuddylist(!1);
            if (!this._exposedMessengerDesktopUpsell) {
                this._exposedMessengerDesktopUpsell = !0;
                var a = b("XMessengerNewProductQPImpressionController").getURIBuilder().getURI();
                new (b("AsyncRequest"))().setURI(a).setMethod("POST").send()
            }
        }
        ;
        d._setLabel = function(a, c) {
            var d = this.label.textContent || this.label.innerText;
            if (d !== a) {
                d = this.label.cloneNode(!0);
                b("DOM").setContent(d, a);
                b("DOM").replace(this.label, d);
                this.label = d
            }
            this.throbber && b("CSS").conditionShow(this.throbber, !!c)
        }
        ;
        d._setUnread = function(a) {
            b("CSS").conditionShow(this.unreadCount, !!a)
        }
        ;
        d._updateCount = function() {
            this._updateView()
        }
        ;
        d._syncHideBuddylist = function(a) {
            b("ChatOptions").setSetting("hide_buddylist", a, "buddylist"),
            new (b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(b("emptyFunction")).setErrorHandler(b("emptyFunction")).setData({
                hide_buddylist: a,
                window_id: b("PresenceUtil").getSessionID()
            }).setAllowCrossPageTransition(!0).send()
        }
        ;
        return c
    }(b("NubController"));
    e.exports = a
}
), null);
__d("ConversationNubLogger", ["Arbiter", "ConversationNubTabsUpdateEventController", "ConversationNubUtils", "PinnedConversationTypedLogger", "SubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = new (b("SubscriptionsHandler"))(),
            this.$2 = a,
            this.$3()
        }
        var c = a.prototype;
        c.$3 = function() {
            var a = this, c;
            this.$1.addSubscriptions((c = b("Arbiter")).subscribe(b("ConversationNubUtils").CLOSE_TAB_EVENT, function(c, d) {
                c = d.tabState;
                var e = d.sessionID;
                d = d.reason;
                d = new (b("PinnedConversationTypedLogger"))().setEvent("pinned_conversation_tab_close").setReason(d);
                a.$4(d, c, e)
            }));
            this.$1.addSubscriptions(c.subscribe(b("ConversationNubUtils").UNPIN_FROM_HEADER_EVENT, function(c, d) {
                c = d.tab;
                d = new (b("PinnedConversationTypedLogger"))().setEvent("pinned_conversation_tab_hide");
                a.$5(d, c)
            }));
            this.$1.addSubscriptions(c.subscribe(b("ConversationNubTabsUpdateEventController").TAB_MAXIMIZED_BY_USER_EVENT, function(c, d) {
                c = d.tab;
                d = new (b("PinnedConversationTypedLogger"))().setEvent("pinned_conversation_tab_maximize");
                a.$5(d, c)
            }));
            this.$1.addSubscriptions(c.subscribe(b("ConversationNubTabsUpdateEventController").TAB_MINIMIZED_BY_USER_EVENT, function(c, d) {
                c = d.tab;
                d = new (b("PinnedConversationTypedLogger"))().setEvent("pinned_conversation_tab_minimize");
                a.$5(d, c)
            }));
            this.$1.addSubscriptions(c.subscribe(b("ConversationNubUtils").OPEN_PERMALINK_FROM_HEADER_EVENT, function(c, d) {
                c = d.tab;
                d = new (b("PinnedConversationTypedLogger"))().setEvent("pinned_conversation_open_permalink_from_header");
                a.$5(d, c)
            }))
        }
        ;
        c.$5 = function(a, b) {
            a.setTabID(b.getTabID()).setPageID(b.getPageID()).setClientEventTimeMs(Date.now()).setTabsInMenu(this.$2.getNumMenuTabs()).setTabsInDock(this.$2.getNumDockTabs()).setWindowInnerWidth(window.innerWidth).setWindowInnerHeight(window.innerHeight);
            a.setFtID(b.getFeedbackTargetID()).setIsRaised(b.getIsRaised()).setBadgeCount(b.getBadgeCount()).setTabSessionID(b.getSessionID());
            b = b.getNotificationType();
            b != null && a.setNotificationType(b);
            a.log()
        }
        ;
        c.$4 = function(a, b, c) {
            a.setTabID(b.tabID).setClientEventTimeMs(Date.now()).setTabsInMenu(this.$2.getNumMenuTabs()).setTabsInDock(this.$2.getNumDockTabs()).setWindowInnerWidth(window.innerWidth).setWindowInnerHeight(window.innerHeight),
            a.setFtID(b.ftID).setIsRaised(b.isTabRaised).setBadgeCount(b.badgeCount).setTabSessionID(c),
            b.notificationType != null && a.setNotificationType(b.notificationType),
            a.log()
        }
        ;
        a.subscriptionTriggered = function(a) {
            new (b("PinnedConversationTypedLogger"))().setEvent("pinned_conversation_subscription_triggered").setReason(a).log()
        }
        ;
        c.addTab = function(a, c) {
            c = new (b("PinnedConversationTypedLogger"))().setEvent("pinned_conversation_tab_add").setReason(c);
            this.$5(c, a)
        }
        ;
        c.destroy = function() {
            this.$1.release()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ConversationNotificationListeners", ["Bootloader", "ConversationNubLogger", "FacebookWebNotificationsSubscription", "NotificationConstants", "NotificationUpdates", "once"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initialize = a;
    var g = b("NotificationConstants").PayloadSourceType.LIVE_SEND;
    function h() {
        b("NotificationUpdates").subscribe("update-notifications", function(a, c) {
            c.payloadsource === g && c.readState && Object.keys(c.readState).length && b("Bootloader").loadModules(["NotificationConversationController"], function(a) {
                a.handleNotificationsRead(c.readState)
            }, "ConversationNotificationListeners")
        })
    }
    var i = b("once")(function() {
        h(),
        b("FacebookWebNotificationsSubscription").subscribe({
            event: "NEW_PINNED_CONVERSATION",
            callback: function(a) {
                b("ConversationNubLogger").subscriptionTriggered("graphql"),
                b("Bootloader").loadModules(["NotificationConversationController"], function(b) {
                    b.handleNewNotificationFromGraphQL(a, "notification")
                }, "ConversationNotificationListeners")
            }
        })
    });
    function a() {
        i()
    }
}
), null);
__d("FBPaymentsDialogContainerMount", ["FBPaymentsDialogContainer.react", "React", "ReactDOM"], (function(a, b, c, d, e, f) {
    "use strict";
    f.mount = a;
    var g = b("React");
    function a(a) {
        b("ReactDOM").render(g.jsx(b("FBPaymentsDialogContainer.react"), {}), a)
    }
}
), null);
__d("FantaTabsEagerBootloader", ["Bootloader", "emptyFunction", "ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    f.bootload = a;
    var g = function(a) {
        b("ifRequired")("FantaAppStore", function(b) {
            return b.addReducers(a)
        }),
        g = b("emptyFunction")
    };
    function a() {
        b("ifRequired")("FantaTabsSlimApp", function(a) {
            a.silentPumpUp()
        }),
        b("Bootloader").loadModules(["FantaReducersGetMessages", "FantaTabsReactApp", "MessengerGraphQLThreadFetcher.bs"], function(a) {
            g(a)
        }, "FantaTabsEagerBootloader")
    }
}
), null);
__d("MercurySyncResnapshot", ["Promise", "Bootloader", "MercurySingletonProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$2 = a
        }
        a.getForFBID = function(a) {
            return g.getForFBID(a)
        }
        ;
        a.get = function() {
            return g.get()
        }
        ;
        var c = a.prototype;
        c.resnapshot = function() {
            var a = this;
            this.$1 || (this.$1 = new (b("Promise"))(function(c, d) {
                b("Bootloader").loadModules(["MercurySyncDeltaHandler"], function(b) {
                    b.getForFBID(a.$2).emergencyDFF(function(b) {
                        c(b),
                        a.$1 = null
                    }, function() {
                        d(),
                        a.$1 = null
                    })
                }, "MercurySyncResnapshot")
            }
            ));
            return this.$1
        }
        ;
        return a
    }();
    e.exports = a;
    var g = new (b("MercurySingletonProvider"))(a)
}
), null);
__d("WaterfallMessageLifetimeTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:WaterfallMessageLifetimeLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:WaterfallMessageLifetimeLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:WaterfallMessageLifetimeLoggerConfig", this.$1, {
                signal: !0
            }, a)
        }
        ;
        c.clear = function() {
            this.$1 = {};
            return this
        }
        ;
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        }
        ;
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.setAttemptID = function(a) {
            this.$1.attempt_id = a;
            return this
        }
        ;
        c.setDestService = function(a) {
            this.$1.dest_service = a;
            return this
        }
        ;
        c.setDeviceID = function(a) {
            this.$1.device_id = a;
            return this
        }
        ;
        c.setEventType = function(a) {
            this.$1.event_type = a;
            return this
        }
        ;
        c.setIsBatch = function(a) {
            this.$1.is_batch = a;
            return this
        }
        ;
        c.setIsGroup = function(a) {
            this.$1.is_group = a;
            return this
        }
        ;
        c.setMessageID = function(a) {
            this.$1.message_id = a;
            return this
        }
        ;
        c.setOfflineThreadingID = function(a) {
            this.$1.offline_threading_id = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setPushNotifID = function(a) {
            this.$1.push_notif_id = a;
            return this
        }
        ;
        c.setReceiptID = function(a) {
            this.$1.receipt_id = a;
            return this
        }
        ;
        c.setSenderID = function(a) {
            this.$1.sender_id = a;
            return this
        }
        ;
        c.setServiceName = function(a) {
            this.$1.service_name = a;
            return this
        }
        ;
        c.setSrcService = function(a) {
            this.$1.src_service = a;
            return this
        }
        ;
        c.setThreadID = function(a) {
            this.$1.thread_id = a;
            return this
        }
        ;
        c.setTimeStamp = function(a) {
            this.$1.time_stamp = a;
            return this
        }
        ;
        c.setTopic = function(a) {
            this.$1.topic = a;
            return this
        }
        ;
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        }
        ;
        return a
    }();
    var g = {
        attempt_id: !0,
        dest_service: !0,
        device_id: !0,
        event_type: !0,
        is_batch: !0,
        is_group: !0,
        message_id: !0,
        offline_threading_id: !0,
        page_id: !0,
        push_notif_id: !0,
        receipt_id: !0,
        sender_id: !0,
        service_name: !0,
        src_service: !0,
        thread_id: !0,
        time_stamp: !0,
        topic: !0
    };
    e.exports = a
}
), null);
__d("MessageWaterfallLogger", ["MqttEnv", "WaterfallMessageLifetimeTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = b("MqttEnv").MqttGkNames;
    a = {
        logNewMessageToWaterfall: function(a) {
            var c = a.senderID
              , d = a.receiptID
              , e = a.messageID
              , f = a.offlineThreadingID
              , i = a.threadID
              , j = a.irisSeqId;
            a = a.isGroup;
            if (!g.genGk(h.mqtt_waterfall_log_client_sampling))
                return;
            new (b("WaterfallMessageLifetimeTypedLogger"))().setEventType("message_receive_ws").setServiceName("web").setSrcService("mqtt").setDestService("webclient").setSenderID(c).setReceiptID(d).setMessageID(e).setOfflineThreadingID(f).setThreadID(i).setIsGroup(a ? 1 : 0).addToExtraData("sync_seq_id", j).log()
        }
    };
    e.exports = a
}
), null);
__d("MessengerMQTTPayloadPreprocessor", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.process = a;
    function a(a, b, c) {
        var d = parseInt(c.irisSeqId.toString(), 10);
        return {
            seqID: d,
            obj: {
                queue: a,
                iseq: d,
                delta: c,
                seqID: d,
                type: b
            }
        }
    }
}
), null);
__d("MessengerMQTTPresenceReporting", ["BanzaiODS", "FBMqttChannel", "InstantGamesPresenceProperties", "MercuryConfig", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    f.reportForegroundState = c;
    f.reportChatVisibility = d;
    f.reportWorkchatDesktopCapability = r;
    f.reportInstantGamesPresence = s;
    f.onUserActivity = t;
    var g = "mqtt_web.presence"
      , h = "/foreground_state"
      , i = "/set_client_settings"
      , j = "/send_endpoint_capabilities"
      , k = 16384
      , l = 2097152
      , m = b("MercuryConfig").idle_limit || 18e5;
    a = b("MercuryConfig").idle_poll_interval || 3e5;
    c = 60 * 1e3;
    var n = b("gkx")("1166607") ? !1 : document.hasFocus(), o, p = Date.now(), q = !1;
    function a() {}
    function c(a, c) {
        (n !== a || c) && (n = a,
        b("FBMqttChannel").setForegroundState(a),
        b("FBMqttChannel").publish(h, JSON.stringify({
            foreground: a
        })),
        b("BanzaiODS").bumpEntityKey(2966, g, a ? "report.foregrounded" : "report.backgrounded"))
    }
    function d(a) {
        (o === void 0 || o != a) && (o = a,
        b("FBMqttChannel").setChatVisibility(a),
        b("FBMqttChannel").publish(i, JSON.stringify({
            make_user_available_when_in_foreground: a
        })),
        b("BanzaiODS").bumpEntityKey(2966, g, a ? "report.chat_visibility.on" : "report.chat_visibility.off"))
    }
    function r() {
        var a = b("FBMqttChannel").getEndpointCapabilities();
        a |= k;
        b("FBMqttChannel").setEndpointCapabilities(a);
        b("FBMqttChannel").publish(j, JSON.stringify({
            endpoint_capabilities: a
        }))
    }
    function s(a) {
        var c = b("FBMqttChannel").getEndpointCapabilities();
        a ? c |= l : c &= ~l;
        b("FBMqttChannel").setEndpointCapabilities(c);
        b("FBMqttChannel").publish(j, JSON.stringify({
            endpoint_capabilities: c
        }))
    }
    function t() {
        p = Date.now(),
        e.exports.reportForegroundState(!0, !1)
    }
    window.setInterval(function() {
        !document.hasFocus() && Date.now() - p > m && e.exports.reportForegroundState(!1, !0)
    }, a);
    window.setInterval(function() {
        var a = b("InstantGamesPresenceProperties").isActiveGamePresence();
        q !== a && (e.exports.reportInstantGamesPresence(a),
        q = a)
    }, c)
}
), null);
__d("MessengerMQTTPresenceActivity", ["CurrentUser", "Event", "MessengerMQTTPresenceReporting", "Run", "UserActivity"], (function(a, b, c, d, e, f) {
    f.init = a;
    function a() {
        b("Event").listen(window, "focus", function() {
            b("MessengerMQTTPresenceReporting").onUserActivity()
        }),
        b("Event").listen(window, "blur", function() {
            b("MessengerMQTTPresenceReporting").reportForegroundState(!1, !1)
        }),
        b("Run").onBeforeUnload(function() {
            b("MessengerMQTTPresenceReporting").reportForegroundState(!1, !0)
        }, !1),
        b("UserActivity").subscribe(function() {
            b("MessengerMQTTPresenceReporting").onUserActivity()
        }),
        b("CurrentUser").isWorkUser() && d(["WorkplaceChatHelper"], function(a) {
            a.isDesktopChatApp() && b("MessengerMQTTPresenceReporting").reportWorkchatDesktopCapability()
        })
    }
}
), null);
__d("MessengerMQTTTypingDataPreProcessor", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.process = a;
    function a(a, b) {
        var c = b.thread;
        a = c == null ? {
            from: b.sender_fbid,
            st: b.state,
            to: a,
            type: "typ"
        } : {
            from: b.sender_fbid,
            st: b.state,
            thread: c,
            thread_fbid: c,
            type: "ttyp"
        };
        return {
            obj: a
        }
    }
}
), null);
__d("SyncProtocolClient", ["Int64", "MercurySingletonProvider", "MqttEnv", "SyncProtocolConstants", "exponentialBackoff"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    a = function() {
        a.getForFBID = function(a) {
            return h.getForFBID(a)
        }
        ;
        function a(a) {
            var c = this;
            this.$1 = a;
            this.$2 = [];
            this.$5 = g.getLoggerInstance();
            this.$10 = new (b("exponentialBackoff"))(function() {
                return c.$11()
            }
            ,this)
        }
        var c = a.prototype;
        c.getPublishMessages = function() {
            return this.$12()
        }
        ;
        c.init = function(a, c, d, e) {
            var f = this;
            if (!c && !e) {
                this.$5.bumpCounter("sp_init_invalid_parameter");
                return this
            }
            this.$9 = a;
            this.$8 = !0;
            this.$3 = c ? b("Int64").fromString(c) : null;
            this.$6 = d;
            this.$7 = e;
            this.$4 = null;
            this.$9.subscribe("/t_ms", function(a) {
                return f.$13(a)
            });
            this.$9.subscribe("/thread_typing", function(a) {
                f.$14(a)
            });
            this.$9.subscribe("/orca_typing_notifications", function(a) {
                f.$14(a)
            });
            this.$9.subscribe("/notify_disconnect", function(a) {
                return f.$15(a)
            });
            this.connectToIris();
            return this
        }
        ;
        c.connectToIris = function(a) {
            a === void 0 && (a = null),
            a !== null && (this.$3 = b("Int64").fromString(a)),
            this.$8 = !0,
            this.$9.registerExtraConnectPayloadProvider(this)
        }
        ;
        c.$12 = function() {
            var a;
            if (this.$4) {
                if (!this.$3) {
                    this.$5.bumpCounter("connect_payload_iris_no_seq_id");
                    return []
                }
                a = this.$16()
            } else
                a = this.$17();
            this.$5.debugTrace("Sending request with MQTT Connect", JSON.stringify({
                topic: a.topic,
                payload: a.payload
            }));
            return [a]
        }
        ;
        c.$11 = function() {
            var a;
            if (this.$4) {
                if (!this.$3) {
                    this.$5.bumpCounter("subscribe_to_iris_no_seq_id");
                    return
                }
                a = this.$16()
            } else
                a = this.$17();
            this.$5.debugTrace("Sending request", JSON.stringify({
                topic: a.topic,
                payload: a.payload
            }));
            this.$9.publish(a.topic, a.payload, {
                qos: 1,
                skipBuffer: !0
            })
        }
        ;
        c.$18 = function(a) {
            var b = null;
            try {
                b = JSON.parse(a)
            } catch (a) {
                this.$5.logError(a, "Unable to process data")
            }
            return b
        }
        ;
        c.$14 = function(a) {
            var b = this.$18(a);
            if (b == null) {
                this.$5.logWarn("_processTypingData", "Unable to process typing data");
                return
            }
            this.$2.forEach(function(a) {
                typeof a.onTypingReceived === "function" && a.onTypingReceived(b)
            })
        }
        ;
        c.addDeltaStreamListener = function(a) {
            this.$2.push(a)
        }
        ;
        c.$15 = function(a) {
            this.$5.logWarn("_handleNotifyDisconnect", "Disconnecting reason: " + a),
            this.$5.bumpCounter("notify_disconnect_" + a),
            a === b("SyncProtocolConstants").IRIS_CURSOR_LIMIT && this.$19(a)
        }
        ;
        c.$19 = function(a) {
            this.$5.bumpCounter(a + "_request"),
            this.$4 = null,
            this.$8 = !1,
            this.$9.unregisterExtraConnectPayloadProvider(this),
            this.$2.forEach(function(b) {
                return b.onStreamDisconnect(a)
            })
        }
        ;
        c.$13 = function(a) {
            a = this.$18(a);
            if (a == null) {
                this.$5.logWarn("_processDeltas", "Unable to process delta");
                return
            }
            var b = {
                syncToken: a.syncToken,
                entityId: a.queueEntityId,
                errorCode: a.errorCode,
                firstSeqId: a.firstDeltaSeqId,
                lastSeqId: a.lastIssuedSeqId
            };
            this.$5.debugTrace("Sync data received", JSON.stringify(b));
            b = this.$1;
            a.queueEntityId != null && a.queueEntityId != b ? this.$5.bumpCounter("delta_for_other_fbid") : a.syncToken ? this.$20(a) : a.queueEntityId == null ? this.$5.bumpCounter("no_fbid") : a.errorCode ? this.$21(a.errorCode) : this.$22(a)
        }
        ;
        c.$21 = function(a) {
            this.$5.bumpCounter("iris_queue_error." + a),
            this.$5.logWarn("_handleIrisError", "Recevied an error code from sync protocol " + a),
            a === "ERROR_QUEUE_TEMPORARY_NOT_AVAILABLE" ? this.$10() : this.$19(a)
        }
        ;
        c.$20 = function(a) {
            var c = this
              , d = b("Int64").fromString(a.firstDeltaSeqId.toString());
            (this.$3 === null || this.$3 != null && !this.$3.equals(d)) && this.$5.bumpCounter("initial_sequence_id_mismatch");
            this.$4 = a.syncToken;
            this.$3 = d;
            this.$5.debugTrace("Sync token received", JSON.stringify({
                token: this.$4
            }));
            this.$9.subscribeChannelEvents({
                onMQTTStateChanged: function(a) {
                    a === "Connected" && c.$10.reset()
                }
            })
        }
        ;
        c.$22 = function(a) {
            var c = a.deltas
              , d = this.$3;
            if (c && d) {
                var e = b("Int64").fromString(a.firstDeltaSeqId.toString());
                a = b("Int64").fromString(a.lastIssuedSeqId.toString());
                e.equals(d.add(b("Int64").ONE)) ? this.$23(e, a, c) : e.compare(d) < 0 ? (this.$5.bumpCounter("delta_batch_in_middle"),
                a.compare(d) > 0 && this.$23(d.add(b("Int64").ONE), a, c)) : (this.$5.bumpCounter("missing_deltas_get_diffs"),
                this.$11())
            } else
                this.$5.bumpCounter("process_deltas_invalid_state")
        }
        ;
        c.$23 = function(a, c, d) {
            a = a;
            for (var e = 0; e < d.length; e++) {
                var f = d[e]
                  , g = f["class"] || "Missing"
                  , h = {
                    seqId: a.toString(),
                    type: g,
                    status: ""
                }
                  , i = 1;
                if (g != "Missing")
                    try {
                        i = this.$24(f, g, a, h)
                    } catch (a) {
                        h.status = "err:" + a.message
                    }
                else
                    h.status = "no type",
                    this.$5.bumpCounter("missing_delta_type");
                this.$5.debugTrace("onDeltaReceived", JSON.stringify(h));
                a = a.add(b("Int64").fromInt(i))
            }
            this.$3 = c
        }
        ;
        c.$24 = function(a, c, d, e) {
            var f = 1
              , g = "";
            c === "NoOp" && (f = a.numNoOps || f,
            g += "n:" + f);
            a.irisSeqId || (a.irisSeqId = d.toString(),
            g += "missing seq id");
            var h = b("Int64").fromString(a.irisSeqId.toString()) || d;
            h.equals(d) ? g += " seqId match" : (g += " seqId mismatch",
            this.$5.bumpCounter("seq_id_running_id_mismatch"));
            var i = {
                type: c,
                payload: a
            };
            this.$2.forEach(function(a) {
                return a.onDeltaReceived(i)
            });
            e.status = g;
            return f
        }
        ;
        c.$17 = function() {
            var a = {
                sync_api_version: 10,
                max_deltas_able_to_process: 1e3,
                delta_batch_size: 500,
                encoding: "JSON",
                entity_fbid: this.$1,
                initial_titan_sequence_id: this.$3 && this.$3.toString(),
                device_params: this.$6,
                queue_position: this.$7
            };
            return {
                topic: "/messenger_sync_create_queue",
                payload: JSON.stringify(a),
                qos: 1
            }
        }
        ;
        c.$16 = function() {
            var a = {
                sync_token: this.$4,
                sync_api_version: 10,
                max_deltas_able_to_process: 1e3,
                delta_batch_size: 500,
                encoding: "JSON",
                entity_fbid: this.$1,
                last_seq_id: this.$3 && this.$3.toString()
            };
            return {
                topic: "/messenger_sync_get_diffs",
                payload: JSON.stringify(a),
                qos: 1
            }
        }
        ;
        return a
    }();
    var h = new (b("MercurySingletonProvider"))(a);
    e.exports = a
}
), null);
__d("MessengerMQTTConnection", ["Arbiter", "CurrentUser", "FBMqttChannel", "MercurySingletonProvider", "MercurySyncResnapshot", "MessageWaterfallLogger", "MessengerMQTTConnectionEvents", "MessengerMQTTPayloadPreprocessor", "MessengerMQTTTypingDataPreProcessor", "MqttLogger", "PresenceStatus", "SyncProtocolClient", "SyncProtocolConstants", "promiseDone", "requireCond", "cr:1177633"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        a.getForFBID = function(a) {
            return g.getForFBID(a)
        }
        ;
        a.get = function() {
            return g.get()
        }
        ;
        function a(a) {
            this.$1 = a,
            this.$2 = b("MqttLogger").getInstance()
        }
        a.setUp = function(c) {
            var e = c.fbid
              , f = c.irisSeqID;
            c.appID;
            c.endpoint;
            if (!e || !f)
                return;
            var g = b("MqttLogger").getInstance();
            if (!b("CurrentUser").isLoggedInNow()) {
                g.debugTrace("run", "User not logged in");
                g.bumpCounter("user_not_loggged_in");
                return
            }
            var h = a.getForFBID(e);
            a.addDeltaStream({
                fbid: e,
                irisSeqID: f
            });
            h.$3(b("FBMqttChannel").getConnectionState(), b("FBMqttChannel").getLongPollingStatus());
            b("FBMqttChannel").subscribeChannelEvents({
                onMQTTStateChanged: function(a) {
                    h.$3(a, b("FBMqttChannel").getLongPollingStatus())
                },
                onJSError: function(a) {
                    g.bumpCounter("mqtt_js_error")
                }
            });
            b("cr:1177633") != null && b("cr:1177633").subscribe(b("PresenceStatus"));
            d(["MessengerMQTTPresenceActivity"], function(a) {
                a.init()
            })
        }
        ;
        a.addDeltaStream = function(c) {
            var d = c.fbid;
            c = c.irisSeqID;
            var e = a.getForFBID(d)
              , f = null;
            b("SyncProtocolClient").getForFBID(d).init(b("FBMqttChannel"), c, f).addDeltaStreamListener(e)
        }
        ;
        var c = a.prototype;
        c.onDeltaReceived = function(a) {
            var c = a.type;
            a = a.payload;
            try {
                c == "NewMessage" && b("MessageWaterfallLogger").logNewMessageToWaterfall({
                    senderID: a.messageMetadata.actorFbId,
                    receiptID: this.$1,
                    messageID: a.messageMetadata.messageId,
                    offlineThreadingID: a.messageMetadata.offlineThreadingId,
                    threadID: a.messageMetadata.threadKey.threadFbId != null ? a.messageMetadata.threadKey.threadFbId : "",
                    irisSeqId: a.irisSeqId,
                    isGroup: a.messageMetadata.threadKey.threadFbId != null
                })
            } catch (a) {
                this.$2.logError(a, "Unable to log to waterfall")
            }
            c = b("MessengerMQTTPayloadPreprocessor").process(this.$1, c, a);
            b("Arbiter").inform(b("MessengerMQTTConnectionEvents").DELTA_EVENT, c)
        }
        ;
        c.onStreamDisconnect = function(a) {
            var c = this;
            if (a === "ERROR_QUEUE_LOST" || a === "ERROR_QUEUE_NOT_FOUND" || a === "ERROR_QUEUE_EXCEEDS_MAX_DELTAS" || a === "ERROR_QUEUE_UNDERFLOW" || a === "ERROR_QUEUE_OVERFLOW") {
                b("promiseDone")(b("MercurySyncResnapshot").getForFBID(this.$1).resnapshot().then(function(a) {
                    if (a)
                        b("SyncProtocolClient").getForFBID(c.$1).connectToIris(a.toString());
                    else
                        throw new Error("No seqID returned from resnapshot")
                }), null, function() {
                    b("Arbiter").inform(b("MessengerMQTTConnectionEvents").STREAM_DISCONNECT, b("SyncProtocolConstants").SNAPSHOT_FAILURE)
                });
                return
            }
            a !== b("SyncProtocolConstants").IRIS_CURSOR_LIMIT && this.$2.bumpCounter("unhandled_iris_error." + a);
            b("Arbiter").inform(b("MessengerMQTTConnectionEvents").STREAM_DISCONNECT, a)
        }
        ;
        c.onTypingReceived = function(a) {
            a = b("MessengerMQTTTypingDataPreProcessor").process(this.$1, a);
            b("Arbiter").inform(b("MessengerMQTTConnectionEvents").TYP, a)
        }
        ;
        c.$3 = function(a, c) {
            if (a == "Connected" || c == "LPActive") {
                b("Arbiter").inform(b("MessengerMQTTConnectionEvents").STREAM_CONNECT);
                return
            }
            switch (a) {
            case b("MessengerMQTTConnectionEvents").STATE_CONNECTING:
                b("Arbiter").inform(b("MessengerMQTTConnectionEvents").STREAM_CONNECTING);
                break;
            case b("MessengerMQTTConnectionEvents").STATE_DISCONNECTED:
                b("Arbiter").inform(b("MessengerMQTTConnectionEvents").STREAM_DISCONNECT);
                break
            }
        }
        ;
        return a
    }();
    e.exports = a;
    var g = new (b("MercurySingletonProvider"))(a)
}
), null);
__d("MessengerMQTTPresence", ["BanzaiODS", "FBMqttChannel"], (function(a, b, c, d, e, f) {
    "use strict";
    f.subscribe = a;
    f.unsubscribe = c;
    f.sendAdditionalBuddyRequest = d;
    var g = "/orca_presence"
      , h = "mqtt_web.presence"
      , i = "/send_additional_contacts"
      , j = !1;
    function a(a) {
        if (j)
            return;
        j = !0;
        b("FBMqttChannel").subscribe(g, function(c) {
            c = JSON.parse(c);
            c && c.list && (c.list_type && c.list_type === "full" && a.reset(),
            a.setMultiFromMQTT(c.list),
            b("BanzaiODS").bumpEntityKey(3303, h, "buddylist.event"),
            b("BanzaiODS").bumpEntityKey(3303, h, "buddylist.active_buddies", c.list.length))
        })
    }
    function c() {
        j = !1,
        b("FBMqttChannel").unsubscribeAll(g)
    }
    function d(a) {
        b("FBMqttChannel").publish(i, JSON.stringify({
            additional_contacts: [a]
        }))
    }
}
), null);
__d("MNCommerceDialogContainerMount", ["MNCommerceDialogContainer.react", "React", "ReactDOM"], (function(a, b, c, d, e, f) {
    "use strict";
    f.mount = a;
    var g = b("React");
    function a(a) {
        b("ReactDOM").render(g.jsx(b("MNCommerceDialogContainer.react"), {}), a)
    }
}
), null);
__d("P2PDialogContainerMount", ["P2PDialogContainer.react", "React", "ReactDOM"], (function(a, b, c, d, e, f) {
    "use strict";
    f.mount = a;
    var g = b("React");
    function a(a) {
        b("ReactDOM").render(g.jsx(b("P2PDialogContainer.react"), {}), a)
    }
}
), null);
__d("PagesPlatformDialogContainerMount", ["PagesPlatformDialogContainer.react", "React", "ReactDOM"], (function(a, b, c, d, e, f) {
    "use strict";
    f.mount = a;
    var g = b("React");
    function a(a) {
        b("ReactDOM").render(g.jsx(b("PagesPlatformDialogContainer.react"), {}), a)
    }
}
), null);
