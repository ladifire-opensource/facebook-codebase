if (self.CavalryLogger) {
    CavalryLogger.start_js(["p8N21"]);
}

__d("AdsCFXCampaignxAddVariantDataActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "CF.CAMPAIGNX.ADD_VARIANT"
    }
}
), null);
__d("AdsUEditorCampaignGroupSetSplitTestVariableActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "AdsSplitTest.SET_SPLIT_TEST_TEST_VARIABLE"
    }
}
), null);
__d("AdsDaoEvents", ["Arbiter"], (function(a, b, c, d, e, f) {
    "use strict";
    f.Arbiter = new (b("Arbiter"))(),
    f.ArbiterEvents = {
        ERROR: "ads_dao_arbiter_error_event"
    }
}
), null);
__d("InstagramAuthenticationErrorMessages", ["fbt", "isFalsey"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getMessage = a;
    var h = {};
    h.cannot_obtain_oauth_access_token = g._("R\u1ea5t ti\u1ebfc, \u0111\u00e3 x\u1ea3y ra s\u1ef1 c\u1ed1 khi c\u1ed1 x\u00e1c th\u1ef1c b\u1eb1ng Instagram.");
    h.claim_instagram_account_failure = g._("Kh\u00f4ng x\u00e1c nh\u1eadn t\u00e0i kho\u1ea3n Instagram \u0111\u01b0\u1ee3c. Vui l\u00f2ng x\u00e1c minh th\u00f4ng tin c\u1ee7a b\u1ea1n v\u00e0 th\u1eed l\u1ea1i.");
    h.instagram_account_is_linked = g._("T\u00e0i kho\u1ea3n Instagram n\u00e0y \u0111\u00e3 \u0111\u01b0\u1ee3c k\u1ebft n\u1ed1i v\u1edbi Trang Facebook.");
    h.invalid_access_token = h.cannot_obtain_oauth_access_token;
    h.incorrect_username_or_password = g._("T\u00ean ng\u01b0\u1eddi d\u00f9ng ho\u1eb7c m\u1eadt kh\u1ea9u \u0111\u00e3 cung c\u1ea5p kh\u00f4ng \u0111\u00fang. Vui l\u00f2ng x\u00e1c minh th\u00f4ng tin c\u1ee7a b\u1ea1n v\u00e0 th\u1eed l\u1ea1i.");
    h.invalid_phone_number = g._("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\u01b0\u1ee3c cung c\u1ea5p kh\u00f4ng h\u1ee3p l\u1ec7. Vui l\u00f2ng x\u00e1c minh th\u00f4ng tin c\u1ee7a b\u1ea1n v\u00e0 th\u1eed l\u1ea1i.");
    h.user_is_not_business_admin = g._("B\u1ea1n kh\u00f4ng ph\u1ea3i l\u00e0 qu\u1ea3n tr\u1ecb vi\u00ean c\u1ee7a doanh nghi\u1ec7p n\u00e0y.");
    h.user_is_not_page_admin = g._("B\u1ea1n kh\u00f4ng ph\u1ea3i l\u00e0 qu\u1ea3n tr\u1ecb vi\u00ean c\u1ee7a Trang Facebook n\u00e0y.");
    h.page_create_instagram_account_failure = g._("Kh\u00f4ng t\u1ea1o t\u00e0i kho\u1ea3n Instagram \u0111\u01b0\u1ee3c. Vui l\u00f2ng x\u00e1c minh th\u00f4ng tin c\u1ee7a b\u1ea1n v\u00e0 th\u1eed l\u1ea1i.");
    h.page_link_instagram_account_failure = g._("Kh\u00f4ng li\u00ean k\u1ebft t\u00e0i kho\u1ea3n Instagram \u0111\u01b0\u1ee3c. Vui l\u00f2ng x\u00e1c minh th\u00f4ng tin c\u1ee7a b\u1ea1n v\u00e0 th\u1eed l\u1ea1i.");
    h.page_is_linked = g._("Trang Facebook n\u00e0y \u0111\u00e3 \u0111\u01b0\u1ee3c k\u1ebft n\u1ed1i v\u1edbi t\u00e0i kho\u1ea3n Instagram.");
    h.page_unlink_instagram_account_failure = g._("Kh\u00f4ng h\u1ee7y li\u00ean k\u1ebft t\u00e0i kho\u1ea3n Instagram \u0111\u01b0\u1ee3c. Vui l\u00f2ng x\u00e1c minh th\u00f4ng tin c\u1ee7a b\u1ea1n v\u00e0 th\u1eed l\u1ea1i.");
    h.remove_existing_ownership_failure = g._("Kh\u00f4ng h\u1ee7y \u0111\u01b0\u1ee3c quy\u1ec1n s\u1edf h\u1eefu hi\u1ec7n t\u1ea1i c\u1ee7a t\u00e0i kho\u1ea3n Instagram. Vui l\u00f2ng x\u00e1c minh th\u00f4ng tin c\u1ee7a b\u1ea1n v\u00e0 th\u1eed l\u1ea1i.");
    h.two_factor_is_not_supported = g._("Ch\u00fang t\u00f4i kh\u00f4ng h\u1ed7 tr\u1ee3 k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n Instagram \u0111\u01b0\u1ee3c b\u1eadt x\u00e1c th\u1ef1c 2 y\u1ebfu t\u1ed1.");
    h.account_is_checkpointed = g._("T\u00e0i kho\u1ea3n Instagram hi\u1ec7n \u0111\u00e3 b\u1ecb ch\u1eb7n, vui l\u00f2ng \u0111i t\u1edbi trang web ho\u1eb7c \u1ee9ng d\u1ee5ng Instagram \u0111\u1ec3 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1.");
    h.account_is_in_current_business = g._("\u0110\u00e3 th\u00eam t\u00e0i kho\u1ea3n Instagram n\u00e0y v\u00e0o doanh nghi\u1ec7p n\u00e0y r\u1ed3i.");
    function a(a) {
        return b("isFalsey")(a) || !h[a] ? g._("R\u1ea5t ti\u1ebfc, \u0111\u00e3 x\u1ea3y ra l\u1ed7i kh\u00f4ng x\u00e1c \u0111\u1ecbnh. Vui l\u00f2ng th\u1eed l\u1ea1i.") : h[a]
    }
}
), null);
__d("AdsUEditorContextType", ["React", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    b("React");
    c = {
        hostID: (a = b("prop-types")).string.isRequired,
        adgroupIDsForSelectedCampaignGroupsSelector: a.func.isRequired,
        adgroupsForSelectedCampaignGroupsSelector: a.func.isRequired,
        campaignIDsForSelectedCampaignGroupsSelector: a.func.isRequired,
        campaignsForSelectedCampaignGroupsSelector: a.func.isRequired,
        campaignGroupSelector: a.func.isRequired,
        campaignGroupCombinedErrorsSelector: a.func.isRequired,
        campaignGroupCrossValidationErrorsSelector: a.func.isRequired,
        campaignGroupErrorsSelector: a.func.isRequired,
        campaignGroupPublishStatusSelector: a.func.isRequired,
        selectedAdAccountSelector: a.func.isRequired,
        selectedCampaignGroupIDsSelector: a.func.isRequired,
        selectedCampaignGroupsSelector: a.func.isRequired
    };
    d = babelHelpers["extends"]({}, c, {
        adgroupIDsForSelectedCampaignsSelector: a.func.isRequired,
        adgroupsForSelectedCampaignsSelector: a.func.isRequired,
        campaignSelector: a.func.isRequired,
        campaignCombinedErrorsSelector: a.func.isRequired,
        campaignErrorsSelector: a.func.isRequired,
        campaignPublishStatusSelector: a.func.isRequired,
        selectedCampaignIDsSelector: a.func.isRequired,
        selectedCampaignsSelector: a.func.isRequired,
        selectedRawCampaignsSelector: a.func.isRequired
    });
    f = babelHelpers["extends"]({}, d, {
        adgroupSelector: a.func.isRequired,
        adgroupPublishStatusSelector: a.func.isRequired,
        adgroupCombinedErrorsSelector: a.func.isRequired,
        adgroupErrorsSelector: a.func.isRequired,
        adgroupErrorMessageSpecSelector_DEPRECATED: a.func.isRequired,
        customSelectors_ASK_ACE_TEAM_BEFORE_USING: a.shape({
            isSlideshowSelectedSelector: a.func.isRequired
        }).isRequired,
        selectedAdgroupIDsSelector: a.func.isRequired,
        selectedAdgroupsSelector: a.func.isRequired
    });
    b = babelHelpers["extends"]({
        campaignGroup: {
            campaignGroupEditorContext: a.shape(c)
        },
        campaign: {
            campaignEditorContext: a.shape(d)
        },
        adgroup: {
            adgroupEditorContext: a.shape(f)
        }
    }, {});
    e.exports = b
}
), null);
__d("AssetLibraryUtils.brands", ["BizSiteIdentifier.brands", "URI"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getAdAccountIDFromAudiencePane = a;
    f.canRedirectToAssetLibrary = h;
    f.getAudienceManagerURIPath = c;
    f.getMediaLibraryURIPath = d;
    var g;
    function a() {
        var a = new (g || (g = b("URI")))(window.location.href).getPath();
        a = a.split("audience/")[1] ? a.split("audience/")[1].split("/")[0] : null;
        return a
    }
    function h() {
        return !!(b("BizSiteIdentifier.brands").isBizSite() && b("BizSiteIdentifier.brands").getBusinessID())
    }
    function c() {
        return h() ? "/ads/manager/audiences/" : ""
    }
    function d() {
        return h() ? "/ads/manager/media/" : ""
    }
}
), null);
__d("PageAuthSettingsDataTypes", ["AdsCountries", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")(b("AdsCountries").countries);
    f.CountryCodes = a
}
), null);
__d("productsAssertExhausted", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return null
    }
}
), null);
__d("AdsCallToActionTypes.bs", ["AdsCallToActionTypesCond"], (function(a, b, c, d, e, f) {
    "use strict";
    c = {
        name: (a = b("AdsCallToActionTypesCond")).TYPES.BUY_TICKETS.name
    };
    d = {
        name: a.TYPES.EVENT_RSVP.name
    };
    e = {
        name: a.TYPES.SIGN_UP.name
    };
    b = {
        name: a.TYPES.GET_DIRECTIONS.name
    };
    var g = {
        name: a.TYPES.MESSAGE_PAGE.name
    }
      , h = {
        name: a.TYPES.WHATSAPP_MESSAGE.name
    };
    a = {
        name: a.TYPES.NO_BUTTON.name
    };
    c = {
        BUY_TICKETS: c,
        EVENT_RSVP: d,
        SIGN_UP: e,
        GET_DIRECTIONS: b,
        MESSAGE_PAGE: g,
        WHATSAPP_MESSAGE: h,
        NO_BUTTON: a
    };
    f.TYPES = c
}
), null);
__d("chunkArray", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        var c = []
          , d = 0;
        while (a.length > d)
            c.push(a.slice(d, d + b)),
            d += b;
        return c
    }
}
), null);
__d("roundTo", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        a = Math.round((a + Number.EPSILON) / b) * b;
        b = String(b).length - String(Math.floor(b)).length - 1;
        return b >= 0 ? parseFloat(a.toFixed(b)) : a
    }
}
), null);
__d("intersectArrays", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
            b[c] = arguments[c];
        var d = b.splice(0, 1)[0] || []
          , e = b.map(function(a) {
            return new Set(a)
        });
        return d.filter(function(a) {
            return e.every(function(b) {
                return b.has(a)
            })
        })
    }
}
), null);
__d("promiseStoreGet", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        return new (b("Promise"))(function(b, e) {
            var f = Array.isArray(a) ? a : [a]
              , g = f.map(function(a) {
                return a.addListener(h)
            });
            h();
            function h() {
                var a = c();
                if (a.isDone() && a.hasError())
                    e(a.error || a.value),
                    g.forEach(function(a) {
                        return a.remove()
                    });
                else if (a.isDone() && a.hasValue()) {
                    a = a.getValueEnforcing();
                    (!d || d(a)) && (b(a),
                    g.forEach(function(a) {
                        return a.remove()
                    }))
                }
            }
        }
        )
    }
    a.all = function(a, c, d) {
        return new (b("Promise"))(function(b, e) {
            var f = Array.isArray(a) ? a : [a]
              , g = f.map(function(a) {
                return a.addListener(h)
            });
            h();
            function h() {
                var a = c()
                  , f = new Map();
                for (var a = a, h = Array.isArray(a), i = 0, a = h ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var j;
                    if (h) {
                        if (i >= a.length)
                            break;
                        j = a[i++]
                    } else {
                        i = a.next();
                        if (i.done)
                            break;
                        j = i.value
                    }
                    j = j;
                    var k = j[0];
                    j = j[1];
                    if (!j.isDone())
                        return;
                    if (j.hasError()) {
                        e(j.error || j.value);
                        g.forEach(function(a) {
                            return a.remove()
                        });
                        return
                    }
                    if (!j.hasValue())
                        return;
                    j = j.getValueEnforcing();
                    if (d && !d(j))
                        return;
                    f.set(k, j)
                }
                b(f);
                g.forEach(function(a) {
                    return a.remove()
                })
            }
        }
        )
    }
}
), null);
__d("SignalsDataSourcesEnum", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ALL: "ALL",
        APP_EVENT: "APP_EVENT",
        DATA_SET: "DATA_SET",
        PIXEL: "PIXEL"
    });
    e.exports = a
}
), null);
__d("ServicesURIUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a) {
        return !a.startsWith("http://") && !a.startsWith("https://") ? "http://" + a : a
    };
    f.startsWithHTTP = g;
    a = function(a) {
        return !a ? !1 : /^https?:\/\/([\w-]+\.)+\w+(:[0-9]+)?([/\?].*)?$/.test(g(a))
    }
    ;
    f.isValidURI = a
}
), null);
