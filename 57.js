if (self.CavalryLogger) {
    CavalryLogger.start_js(["yRFl7"]);
}

__d("PageCommMenuAction", [], (function(a, b, c, d, e, f) {
    e.exports = {
        BAN: "BAN",
        DELETE: "DELETE",
        SPAM: "SPAM",
        UNBAN: "UNBAN"
    }
}
), null);
__d("BizInboxNuxs", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    a = b("$InternalEnum")({
        PAGES_INBOX_WELCOME_DIALOG: "pages_inbox_welcome_dialog",
        PAGES_INBOX_UNIFIED_THREAD_LIST_INSTAGRAM_NUX: "page_inbox_unified_thread_list_instagram_nux",
        PAGES_INBOX_UNIFIED_THREAD_LIST_NUX: "page_inbox_unified_thread_list_nux",
        BUSINESS_INBOX_PRODUCT_PICKER_NUX: "business_inbox_product_picker_nux",
        BUSINESS_INBOX_PRODUCT_PICKER_IGD_NUX: "business_inbox_product_picker_igd_nux",
        BUSINESS_INBOX_GO_TO_HOME_BANNER: "business_inbox_go_to_home_banner",
        PAGE_INBOX_INSTAGRAM_DIRECT_UPSELL: "page_inbox_instagram_direct_upsell",
        BIZWEB_INBOX_UPSELL_NUX: "bizweb_inbox_upsell_nux",
        PAGE_INBOX_SAVED_REPLY_UPSELL_NUX: "page_inbox_saved_reply_upsell_nux",
        WWW_PAGE_INBOX_ORDER_DETAILS_NUX: "www_page_inbox_order_details_nux",
        INBOX_MESSENGER_GUEST_CHAT: "inbox_messenger_guest_chat",
        PAGE_INBOX_INSTAGRAM_DIRECT_NUX: "page_inbox_instagram_direct_nux",
        WWW_RETURN_TO_SEND_MESSAGE_NUX: "www_return_to_send_message_nux",
        BUSINESS_INBOX_COVID_AUTOMATED_RESPONSE: "business_inbox_covid_automated_response",
        WWW_PAGES_NEW_AWAY_TOGGLE_NUX: "www_pages_new_away_toggle_nux",
        LEADS_CENTER_SEGMENTATION_INBOX_UPSELL_NUX: "leads_center_segmentation_inbox_upsell_nux"
    });
    c = a;
    e.exports = c
}
), null);
__d("PagesManagerInboxNuxContainerWrapper.react", ["BizInboxNuxs", "ChatPluginListHeaderGuestChatNUX.react", "FluxContainer", "GeoPageHeader.react", "JSResource", "OrderDetailsNuxContainer.react", "PagesManagerIGTabUpsell.react", "PagesManagerInboxAwayToggleNUX.react", "PagesManagerInboxListHeaderAutomationNUX.react", "PagesManagerInboxListHeaderBizWebUpsellNUX.react", "PagesManagerInboxListHeaderInstagramDirectNux.react", "PagesManagerInboxListHeaderUnifiedThreadlistInstagramNUX.react", "PagesManagerInboxListHeaderUnifiedThreadlistNUX.react", "PagesManagerInboxNUX", "PagesManagerInboxNUXAction", "PagesManagerInboxProductPickerNuxContainer.react", "PagesManagerInboxReturnToSendNUX.react", "PagesManagerInboxSavedRepliesUpsellNUXContainerWrapper.react", "PagesManagerInboxStore", "PagesManagerInboxUtils", "PagesManagerInboxWelcomeDialogNUX.react", "React", "lazyLoadComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("lazyLoadComponent")(b("JSResource")("BusinessInboxBanner.react").__setRef("PagesManagerInboxNuxContainerWrapper.react"))
      , i = b("lazyLoadComponent")(b("JSResource")("CMTSegmentationInboxThreadListUpsellContainer.react").__setRef("PagesManagerInboxNuxContainerWrapper.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$3 = function() {
                b("PagesManagerInboxNUXAction").viewNux(d.$2())
            }
            ,
            d.$4 = function() {
                b("PagesManagerInboxNUXAction").dismiss(d.$2())
            }
            ,
            d.$5 = function() {
                b("PagesManagerInboxNUXAction").logClickGetStarted(d.$2())
            }
            ,
            d.$6 = function() {
                b("PagesManagerInboxNUXAction").logClickGetStarted(d.$2()),
                b("PagesManagerInboxNUXAction").logDismissOnlyForFBNux(d.$2())
            }
            ,
            d.$7 = function() {
                var a;
                b("PagesManagerInboxUtils").changeInboxTab("INSTAGRAM_DIRECT", "messages", d.props.filterType, null, (a = d.props.pageID) != null ? a : "");
                b("PagesManagerInboxNUXAction").logClickGetStarted(d.$2())
            }
            ,
            d.$8 = function() {
                var a;
                b("PagesManagerInboxUtils").changeInboxTab("MESSENGER", "automated_responses", d.props.filterType, null, (a = d.props.pageID) != null ? a : "")
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getStores = function() {
            return [b("PagesManagerInboxStore")]
        }
        ;
        c.calculateState = function(a, c) {
            a = b("PagesManagerInboxStore").getConfig();
            a = (a = a.platformConfigs.INSTAGRAM_DIRECT) == null ? void 0 : a.oAuthNonce;
            return {
                shouldShowNUX: b("PagesManagerInboxStore").shouldShowNUX(c.nuxName),
                nonce: a,
                hasIGDConfig: this.$1()
            }
        }
        ;
        c.$1 = function() {
            var a = b("PagesManagerInboxStore").getBusinessInboxAppConfig();
            if (a != null) {
                return ((a = a.instagramDirectConfig) == null ? void 0 : a.igAccountID) !== ""
            } else
                return b("PagesManagerInboxStore").getConfig().platformConfigs.INSTAGRAM_DIRECT.igAccountID !== null
        }
        ;
        var d = c.prototype;
        d.$2 = function() {
            return b("PagesManagerInboxNUX")[this.props.nuxName]
        }
        ;
        d.render = function() {
            if (!this.state.shouldShowNUX)
                return this.props.nuxName === "business_inbox_go_to_home_banner" ? g.jsx(b("GeoPageHeader.react"), {
                    heading: ""
                }) : null;
            var a = this.props
              , c = a.canShowConnectButton
              , d = a.instagramCommentConnected
              , e = a.pageID;
            a = a.filterType;
            switch (this.props.nuxName) {
            case "pages_inbox_welcome_dialog":
                return g.jsx(b("PagesManagerInboxWelcomeDialogNUX.react"), {
                    onDialogHide: this.$4,
                    onDialogShow: this.$3
                });
            case "page_inbox_unified_thread_list_instagram_nux":
                return g.jsx(b("PagesManagerInboxListHeaderUnifiedThreadlistInstagramNUX.react"), {
                    canShowConnectButton: c || !1,
                    instagramCommentConnected: d || !1,
                    nonce: this.state.nonce,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3,
                    pageID: e || ""
                });
            case "page_inbox_unified_thread_list_nux":
                return g.jsx(b("PagesManagerInboxListHeaderUnifiedThreadlistNUX.react"), {
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3
                });
            case "business_inbox_product_picker_nux":
            case "business_inbox_product_picker_igd_nux":
                return g.jsx(b("PagesManagerInboxProductPickerNuxContainer.react"), {
                    contextRef: this.props.htmlElementContextRef,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3
                });
            case "page_inbox_saved_reply_upsell_nux":
                return g.jsx(b("PagesManagerInboxSavedRepliesUpsellNUXContainerWrapper.react"), {
                    contextRef: this.props.reactNodeContextRef,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3
                });
            case "page_inbox_instagram_direct_upsell":
                return g.jsx(b("PagesManagerIGTabUpsell.react"), {
                    hasIGDConfig: this.state.hasIGDConfig,
                    isSelected: this.props.isIGDTabSelected || !1,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3
                });
            case "bizweb_inbox_upsell_nux":
                return g.jsx(b("PagesManagerInboxListHeaderBizWebUpsellNUX.react"), {
                    onNuxClick: this.$6,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3,
                    pageID: e || ""
                });
            case "www_page_inbox_order_details_nux":
                return g.jsx(b("OrderDetailsNuxContainer.react"), {
                    contextRef: this.props.htmlElementContextRef,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3
                });
            case "inbox_messenger_guest_chat":
                return g.jsx(b("ChatPluginListHeaderGuestChatNUX.react"), {
                    filterType: a,
                    logNuxClickGetStarted: this.$5,
                    nuxID: this.$2(),
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3,
                    pageID: e || ""
                });
            case "page_inbox_instagram_direct_nux":
                return g.jsx(b("PagesManagerInboxListHeaderInstagramDirectNux.react"), {
                    onNuxClick: this.$7,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3
                });
            case "business_inbox_go_to_home_banner":
                return g.jsx(h, {
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3
                });
            case "www_return_to_send_message_nux":
                return this.props.reactComponentContextRef != null && g.jsx(b("PagesManagerInboxReturnToSendNUX.react"), {
                    contextRef: this.props.reactComponentContextRef,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3
                });
            case "business_inbox_covid_automated_response":
                return g.jsx(b("PagesManagerInboxListHeaderAutomationNUX.react"), {
                    onNuxClick: this.$8,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3
                });
            case "www_pages_new_away_toggle_nux":
                return g.jsx(b("PagesManagerInboxAwayToggleNUX.react"), {
                    contextRef: this.props.htmlElementContextRef,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3
                });
            case "leads_center_segmentation_inbox_upsell_nux":
                return g.jsx(i, {
                    onNuxClick: this.$5,
                    onNuxDismiss: this.$4,
                    onNuxShow: this.$3,
                    pageID: e || ""
                })
            }
        }
        ;
        return c
    }(g.PureComponent);
    c = b("FluxContainer").create(a, {
        withProps: !0
    });
    e.exports = c
}
), null);
__d("PagesManagerInboxCometMenu.react", ["AsyncRequest", "ConversationDeleteConfirmationDialog.react", "CRMBanReportUserDialog.react", "PageCommItemStatus", "PageCommItemStatusUtil", "PageCommMenuAction", "PagesManagerAction", "PagesManagerInboxCometHeaderMoreOptionsMenu.react", "PagesManagerInboxFilterStore", "PagesManagerInboxListAction", "PagesManagerInboxLogger", "PagesManagerMessagingComposerActions", "PagesMessagingInboxActionLogger", "React", "XPagesBanUserDataController", "XPagesUnbanUserDataController"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                showDialog: !1,
                isBanned: d.props.isBanned,
                showDeleteConfirmationDialog: !1
            },
            d.$2 = function() {
                d.$1("ban_user_menu_clicked")
            }
            ,
            d.$3 = function() {
                var a = d.state.isBanned ? "unban_user_click" : "ban_user_click";
                d.$1(a);
                d.setState({
                    showDialog: !0
                })
            }
            ,
            d.$5 = function() {
                d.setState({
                    showDialog: !1
                })
            }
            ,
            d.$6 = function() {
                var a = d.state.isBanned ? "unban_user_confirm" : "ban_user_click"
                  , c = d.state.isBanned ? b("XPagesUnbanUserDataController").getURIBuilder() : b("XPagesBanUserDataController").getURIBuilder();
                c = c.setFBID("page_id", d.props.pageID).setFBIDVector("user_ids", [d.props.userID]).getURI();
                new (b("AsyncRequest"))().setURI(c).setHandler(function(a) {
                    a.payload.success && (b("PagesManagerInboxListAction").banStatusChange(d.props.userName, !d.state.isBanned),
                    d.setState(function(a) {
                        return {
                            isBanned: !a.isBanned
                        }
                    }))
                }).send();
                d.$1(a);
                d.setState({
                    showDialog: !1
                })
            }
            ,
            d.$7 = function() {
                d.$1("delete_conversation_click"),
                d.setState({
                    showDeleteConfirmationDialog: !0
                })
            }
            ,
            d.$8 = function() {
                d.setState({
                    showDeleteConfirmationDialog: !1
                })
            }
            ,
            d.$9 = function() {
                var a = b("PagesManagerInboxFilterStore").getActiveType();
                d.props.onStatusChange(b("PageCommItemStatus").DELETED);
                d.setState({
                    showDeleteConfirmationDialog: !1
                });
                b("PagesManagerAction").clearViewListItem();
                b("PagesMessagingInboxActionLogger").logDeleteThreadClicked(a);
                d.$1("delete_conversation_confirm")
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.$1 = function(a) {
            b("PagesManagerInboxLogger").create(a).log()
        }
        ;
        d.$4 = function(a, b) {
            return {
                type: "item",
                label: a,
                onClick: b
            }
        }
        ;
        d.render = function() {
            var a = this;
            if (this.props.userID === null || this.props.userID === void 0)
                return null;
            b("PagesManagerMessagingComposerActions").banStatusChange(this.state.isBanned);
            var c = [];
            this.props.actionParam.showSpam && c.push(this.$4(b("PageCommItemStatusUtil").getMenuLabel(b("PageCommMenuAction").SPAM), function() {
                return a.props.onStatusChange(b("PageCommItemStatus").SPAM)
            }));
            this.props.actionParam.showDelete && c.push(this.$4(b("PageCommItemStatusUtil").getMenuLabel(b("PageCommMenuAction").DELETE), this.$7));
            var d = this.state.isBanned ? b("PageCommItemStatusUtil").getMenuLabel(b("PageCommMenuAction").UNBAN) : b("PageCommItemStatusUtil").getMenuLabel(b("PageCommMenuAction").BAN);
            c.push(this.$4(d, this.$3));
            return g.jsxs("div", {
                children: [g.jsx(b("CRMBanReportUserDialog.react"), {
                    isBanned: this.state.isBanned,
                    isGuestUser: this.props.isGuestUser,
                    onConfirm: this.$6,
                    onHide: this.$5,
                    shown: this.state.showDialog,
                    userName: this.props.userName
                }), g.jsx(b("ConversationDeleteConfirmationDialog.react"), {
                    onConfirm: this.$9,
                    onHide: this.$8,
                    platform: b("PagesManagerInboxFilterStore").getActiveType(),
                    shown: this.state.showDeleteConfirmationDialog
                }, "delete modal"), g.jsx(b("PagesManagerInboxCometHeaderMoreOptionsMenu.react"), {
                    items: c,
                    onClick: this.$2
                })]
            })
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a
}
), null);
__d("PagesManagerInboxWECNewMessageRow.react", ["cx", "fbt", "Layout.react", "LayoutColumn.react", "PagesManagerAction", "PagesManagerInboxCometUtil", "PagesManagerInboxProfilePic.react", "PagesManagerWECInboxStore", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.$1 = function() {
            var a = b("PagesManagerWECInboxStore").getNewWECThreadState().phoneNumber;
            return h._("New message to {message recipient}", [h._param("message recipient", a)])
        }
        ;
        d.$2 = function() {
            b("PagesManagerAction").viewListItem("0")
        }
        ;
        d.render = function() {
            return i.jsxs("div", {
                className: "_4k8w" + (b("PagesManagerInboxCometUtil").shouldShowCometNewDesign() ? "" : " _8gcz") + " _75ux _7r_8 _2tms",
                onClick: this.$2,
                role: "presentation",
                children: [i.jsxs(b("Layout.react"), {
                    className: "_6yv6",
                    children: [i.jsx(b("LayoutColumn.react"), {
                        className: "_11eh",
                        children: i.jsx(b("PagesManagerInboxProfilePic.react"), {
                            commPlatform: "WEC",
                            commType: "WEC_MESSAGE",
                            imageSize: 40,
                            imageURI: "",
                            showPlaceholder: !0,
                            showPlatformBadge: !0
                        })
                    }), i.jsx(b("LayoutColumn.react"), {
                        children: i.jsx("div", {
                            children: this.$1()
                        })
                    })]
                }), this.props.isSelected ? i.jsx("div", {
                    className: "_5z5s"
                }) : null]
            })
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a
}
), null);
