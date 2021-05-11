if (self.CavalryLogger) {
    CavalryLogger.start_js(["iRXte"]);
}

__d("MediaManagerInsightsMusicReleasesTabConfig", ["fbt", "MediaManagerAvailablePagesSelectors"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
        return a.rightsManagerEligibility.rmVersion === "MUSIC_LABEL"
    }
    a = {
        title: g._("B\u1ea3n ph\u00e1t h\u00e0nh"),
        type: "insights_music_releases",
        parentTab: "insights",
        tabGroup: "music",
        hasPageSelector: !0,
        canSelectOnlySinglePage: !0,
        isAvailable: function() {
            var a = b("MediaManagerAvailablePagesSelectors").availablePagesSelector().match({
                loading: function() {
                    return []
                },
                error: function() {
                    return []
                },
                loaded: function(a) {
                    return a.toArray()
                }
            });
            a = a.filter(function(a) {
                return h(a)
            });
            return a.length > 0
        },
        permissionsCheck: function(a) {
            return h(a)
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("MMRMOwnershipLinkTrayActions", ["MediaManagerDispatcher", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        RM_CLOSE_TRAY_AFTER_SUBMIT: "",
        RM_CREATE_NEW_ATTRIBUTION: "",
        RM_FETCH_PERSONAL_PAGES: "",
        RM_HIDE_OWNERSHIP_LINK_TRAY: "",
        RM_RESET_ATTRIBUTION_TARGET: "",
        RM_RESET_TRAY_STATE: "",
        RM_SET_ASSOCIATED_REFERENCE_FILES: "",
        RM_SET_ATTRIBUTION_NAME: "",
        RM_SET_ATTRIBUTION_PHOTO_URL: "",
        RM_SET_ATTRIBUTION_TARGET_ID: "",
        RM_SET_ATTRIBUTION_TARGET_NAME: "",
        RM_SET_ATTRIBUTION_TARGET_URL: "",
        RM_SET_ATTRIBUTION_TYPE: "",
        RM_SET_PERSONAL_PAGES: "",
        RM_SHOW_OWNERSHIP_LINK_TRAY: ""
    };
    var g = b("keyMirror")(a);
    f.MMRMOwnershipLinkTrayActionTypes = g;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_SHOW_OWNERSHIP_LINK_TRAY
        })
    }
    ;
    f.showOwnershipLinkTray = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_HIDE_OWNERSHIP_LINK_TRAY
        })
    }
    ;
    f.hideOwnershipLinkTray = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_SET_ATTRIBUTION_NAME,
            attributionName: a
        })
    }
    ;
    f.setAttributionName = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_SET_ATTRIBUTION_TYPE,
            attributionType: a
        })
    }
    ;
    f.setAttributionType = a;
    c = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_SET_ATTRIBUTION_TARGET_NAME,
            attributionTargetName: a
        })
    }
    ;
    f.setAttributionTargetName = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_SET_ATTRIBUTION_TARGET_ID,
            attributionTargetID: a
        })
    }
    ;
    f.setAttributionTargetID = d;
    e = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_SET_ATTRIBUTION_TARGET_URL,
            attributionTargetURL: a
        })
    }
    ;
    f.setAttributionTargetURL = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_SET_ATTRIBUTION_PHOTO_URL,
            photoURL: a
        })
    }
    ;
    f.setAttributionPhotoURL = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_FETCH_PERSONAL_PAGES
        })
    }
    ;
    f.fetchPersonalPages = c;
    d = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_SET_PERSONAL_PAGES,
            pageList: a
        })
    }
    ;
    f.setPersonalPages = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_RESET_ATTRIBUTION_TARGET
        })
    }
    ;
    f.resetAttributionTarget = e;
    a = function(a) {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_SET_ASSOCIATED_REFERENCE_FILES,
            referenceFiles: a
        })
    }
    ;
    f.setAssociatedReferenceFiles = a;
    c = function() {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_CREATE_NEW_ATTRIBUTION
        })
    }
    ;
    f.createNewAttribution = c;
    d = function() {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_CLOSE_TRAY_AFTER_SUBMIT
        })
    }
    ;
    f.closeTrayAfterSubmit = d;
    e = function() {
        b("MediaManagerDispatcher").dispatch({
            type: g.RM_RESET_TRAY_STATE
        })
    }
    ;
    f.resetTrayState = e
}
), null);
