if (self.CavalryLogger) {
    CavalryLogger.start_js(["nFVTZ"]);
}

__d("BizInboxNuxUtils", ["AsyncRequest", "PagesManagerInboxNUX", "XBasicFBNuxDismissController", "XBasicFBNuxViewController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getNuxID = g;
    f.viewNux = a;
    f.dismissNux = c;
    f.logNuxClickGetStarted = d;
    function g(a) {
        return b("PagesManagerInboxNUX")[a]
    }
    function a(a) {
        a = g(a);
        if (a > 0) {
            a = b("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id", a).getURI();
            new (b("AsyncRequest"))(a).send()
        }
    }
    function c(a) {
        a = g(a);
        if (a > 0) {
            a = b("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id", a).getURI();
            new (b("AsyncRequest"))(a).send()
        }
    }
    function d(a) {
        a = g(a);
        a > 0
    }
}
), null);
__d("BizInboxNuxContainerWrapper.react", ["AdsInterfacesRouter", "BizInboxNuxContext", "BizInboxNuxs", "BizInboxNuxUtils", "BizKitUnifiedRoutingUtils", "ChatPluginListHeaderGuestChatNUX.react", "GeoPageHeader.react", "JSResource", "PagesManagerInboxAwayToggleNUX.react", "PagesManagerInboxListHeaderAutomationNUX.react", "PagesManagerInboxListHeaderInstagramDirectNux.react", "PagesManagerInboxListHeaderUnifiedThreadlistInstagramNUX.react", "PagesManagerInboxListHeaderUnifiedThreadlistNUX.react", "PagesManagerInboxProductPickerNuxContainer.react", "PagesManagerInboxReturnToSendNUX.react", "PagesManagerInboxSavedRepliesUpsellNUXContainer.react", "PagesManagerInboxWelcomeDialogNUX.react", "React", "bizInboxNuxReducer", "lazyLoadComponent", "nullthrows", "useBizInboxNuxReducers"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("lazyLoadComponent")(b("JSResource")("BusinessInboxBanner.react").__setRef("BizInboxNuxContainerWrapper.react"));
    function a(a) {
        var c = g.useContext(b("BizInboxNuxContext"))
          , d = c.shouldNuxShowMap;
        c = c.viewingNux;
        var e = b("useBizInboxNuxReducers")([b("bizInboxNuxReducer")])
          , f = function() {
            b("BizInboxNuxUtils").viewNux(a.nuxName),
            e({
                viewingNux: a.nuxName,
                type: "nux.view"
            })
        }
          , i = function() {
            b("BizInboxNuxUtils").dismissNux(a.nuxName),
            e({
                nuxName: a.nuxName,
                type: "nux.dismiss"
            })
        }
          , j = function() {
            return b("BizInboxNuxUtils").getNuxID(a.nuxName)
        }
          , k = function() {
            b("BizInboxNuxUtils").logNuxClickGetStarted(a.nuxName)
        }
          , l = function() {
            b("AdsInterfacesRouter").get().navigateTo(b("nullthrows")(b("BizKitUnifiedRoutingUtils").getBizKitUnifiedRouteName("INSTAGRAM_DIRECT"))),
            k()
        }
          , m = function() {
            b("AdsInterfacesRouter").get().navigateTo(b("nullthrows")(b("BizKitUnifiedRoutingUtils").getBizKitUnifiedRouteName("AUTOMATED_RESPONSES")))
        };
        d = d[a.nuxName] && (c == null || c === a.nuxName);
        if (d)
            switch (a.nuxName) {
            case "pages_inbox_welcome_dialog":
                return g.jsx(b("PagesManagerInboxWelcomeDialogNUX.react"), {
                    onDialogHide: i,
                    onDialogShow: f
                });
            case "page_inbox_unified_thread_list_instagram_nux":
                return g.jsx(b("PagesManagerInboxListHeaderUnifiedThreadlistInstagramNUX.react"), {
                    canShowConnectButton: a.showConnectButton || !1,
                    instagramCommentConnected: a.instagramCommentConnected || !1,
                    nonce: a.igOAuthNonce,
                    onNuxDismiss: i,
                    onNuxShow: f,
                    pageID: a.pageID || ""
                });
            case "inbox_messenger_guest_chat":
                return g.jsx(b("ChatPluginListHeaderGuestChatNUX.react"), {
                    filterType: a.navChannel,
                    logNuxClickGetStarted: k,
                    nuxID: j(),
                    onNuxDismiss: i,
                    onNuxShow: f,
                    pageID: a.pageID || ""
                });
            case "page_inbox_unified_thread_list_nux":
                return g.jsx(b("PagesManagerInboxListHeaderUnifiedThreadlistNUX.react"), {
                    onNuxDismiss: i,
                    onNuxShow: f
                });
            case "www_return_to_send_message_nux":
                if (a.reactComponentContextRef != null)
                    return g.jsx(b("PagesManagerInboxReturnToSendNUX.react"), {
                        contextRef: a.reactComponentContextRef,
                        onNuxDismiss: i,
                        onNuxShow: f
                    });
                else
                    return null;
            case "business_inbox_go_to_home_banner":
                return g.jsx(h, {
                    onNuxDismiss: i,
                    onNuxShow: f
                });
            case "www_pages_new_away_toggle_nux":
                return g.jsx(b("PagesManagerInboxAwayToggleNUX.react"), {
                    contextRef: a.htmlElementContextRef,
                    onNuxDismiss: i,
                    onNuxShow: f
                });
            case "business_inbox_product_picker_igd_nux":
            case "business_inbox_product_picker_nux":
                return g.jsx(b("PagesManagerInboxProductPickerNuxContainer.react"), {
                    contextRef: a.htmlElementContextRef,
                    onNuxDismiss: i,
                    onNuxShow: f
                });
            case "page_inbox_saved_reply_upsell_nux":
                return g.jsx(b("PagesManagerInboxSavedRepliesUpsellNUXContainer.react"), {
                    contextRef: a.reactNodeContextRef,
                    onNuxDismiss: i,
                    onNuxShow: f
                });
            case "business_inbox_covid_automated_response":
                return g.jsx(b("PagesManagerInboxListHeaderAutomationNUX.react"), {
                    onNuxClick: m,
                    onNuxDismiss: i,
                    onNuxShow: f
                });
            case "page_inbox_instagram_direct_nux":
                return g.jsx(b("PagesManagerInboxListHeaderInstagramDirectNux.react"), {
                    onNuxClick: l,
                    onNuxDismiss: i,
                    onNuxShow: f
                });
            default:
                return null
            }
        else
            return a.nuxName === "business_inbox_go_to_home_banner" ? g.jsx(b("GeoPageHeader.react"), {
                heading: ""
            }) : null
    }
}
), null);
