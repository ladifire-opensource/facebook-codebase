if (self.CavalryLogger) {
    CavalryLogger.start_js(["NA2Hy"]);
}

__d("AdLibraryEmptyStatePlaceholder.react", ["fbt", "GeoButton.react", "GeoTextPairing.react", "Image.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    c = g._("Kh\u00f4ng c\u00f3 qu\u1ea3ng c\u00e1o n\u00e0o kh\u1edbp v\u1edbi ti\u00eau ch\u00ed t\u00ecm ki\u1ebfm c\u1ee7a b\u1ea1n");
    var i = (d = {},
    d.too_many_filters = {
        header: c,
        subtitle: g._("H\u00e3y g\u1ee1 ho\u1eb7c \u0111i\u1ec1u ch\u1ec9nh b\u1ed9 l\u1ecdc b\u1ea5t k\u1ef3 m\u00e0 b\u1ea1n \u0111\u00e3 \u00e1p d\u1ee5ng \u0111\u1ec3 nh\u1eadn k\u1ebft qu\u1ea3 kh\u00e1c."),
        button: g._("X\u00f3a b\u1ed9 l\u1ecdc"),
        image: "/images/ads/politics/archive/empty-state_overfiltering_3x.png"
    },
    d.country_filter = {
        header: c,
        subtitle: g._("Nh\u00e0 qu\u1ea3ng c\u00e1o n\u00e0y kh\u00f4ng ch\u1ea1y qu\u1ea3ng c\u00e1o \u1edf qu\u1ed1c gia \u0111\u00e3 ch\u1ecdn. H\u00e3y ch\u1ecdn v\u1ecb tr\u00ed kh\u00e1c trong b\u1ed9 l\u1ecdc qu\u1ed1c gia."),
        button: null,
        image: "/images/ads/politics/archive/empty-state_generic_3x.png"
    },
    d.no_page_results = {
        header: c,
        subtitle: g._("Nh\u00e0 qu\u1ea3ng c\u00e1o n\u00e0y hi\u1ec7n kh\u00f4ng ch\u1ea1y qu\u1ea3ng c\u00e1o \u1edf qu\u1ed1c gia n\u00e0o."),
        button: null,
        image: "/images/ads/politics/archive/empty-state_generic_3x.png"
    },
    d.no_keyword_results = {
        header: c,
        subtitle: g._("H\u00e3y th\u1eed d\u00f9ng t\u1eeb kh\u00f3a kh\u00e1c."),
        button: null,
        image: "/images/ads/politics/archive/empty-state_generic_3x.png"
    },
    d.not_yet_available = {
        header: g._("Qu\u1ea3ng c\u00e1o ch\u01b0a hi\u1ec3n th\u1ecb"),
        subtitle: g._("Ch\u00fang t\u00f4i v\u1eabn \u0111ang t\u1ed5ng h\u1ee3p th\u00f4ng tin v\u00e0 s\u1ebd s\u1edbm hi\u1ec3n th\u1ecb qu\u1ea3ng c\u00e1o n\u00e0y."),
        button: null,
        image: "/images/ads/politics/archive/empty-state_not-available_3x.png"
    },
    d.not_in_library = {
        header: g._("Qu\u1ea3ng c\u00e1o kh\u00f4ng c\u00f3 trong th\u01b0 vi\u1ec7n qu\u1ea3ng c\u00e1o"),
        subtitle: g._("Nguy\u00ean nh\u00e2n ph\u1ed5 bi\u1ebfn nh\u1ea5t l\u00e0 do qu\u1ea3ng c\u00e1o ch\u01b0a nh\u1eadn \u0111\u01b0\u1ee3c l\u01b0\u1ee3t hi\u1ec3n th\u1ecb n\u00e0o."),
        button: null,
        image: "/images/ads/politics/archive/empty-state_not-available_3x.png"
    },
    d.no_ad_found = {
        header: c,
        subtitle: g._("Qu\u1ea3ng c\u00e1o m\u00e0 b\u1ea1n t\u00ecm ki\u1ebfm kh\u00f4ng t\u1ed3n t\u1ea1i."),
        button: null,
        image: "/images/ads/politics/archive/empty-state_not-available_3x.png"
    },
    d.inactive_non_political = {
        header: g._("Qu\u1ea3ng c\u00e1o n\u00e0y kh\u00f4ng c\u00f2n n\u1eefa"),
        subtitle: g._("Vi\u1ec7c n\u00e0y c\u00f3 th\u1ec3 x\u1ea3y ra khi qu\u1ea3ng c\u00e1o h\u1ebft h\u1ea1n, b\u1ecb x\u00f3a hay \u0111\u01b0\u1ee3c ph\u00e2n lo\u1ea1i sai v\u00e0o h\u1ea1ng m\u1ee5c v\u1ea5n \u0111\u1ec1 x\u00e3 h\u1ed9i, b\u1ea7u c\u1eed ho\u1eb7c ch\u00ednh tr\u1ecb."),
        button: null,
        image: "/images/ads/politics/archive/empty-state_expired_3x.png"
    },
    d);
    function a(a) {
        var c = i[a.noResultReason]
          , d = c.subtitle
          , e = c.header
          , f = h.jsx(b("Image.react"), {
            className: "iajz466s shyhzvm4",
            src: c.image
        });
        c = c.button;
        c = c && h.jsx("div", {
            className: "ouqzbsnu ihd31vdf berxdx8z okhlmt8k ih2s8k95",
            children: h.jsx(b("GeoButton.react"), {
                grow: "fill",
                label: c,
                variant: "default",
                onClick: a.onButtonClick
            })
        });
        return h.jsxs("div", {
            className: "shyhzvm4 rhmmi02b jfj1vgtg iyko1ghw st4mjv7a a5ffu93u qhn6w2z7 iohei9zn",
            children: [f, h.jsxs("div", {
                className: "i74zigrp iw4cmn2k cti9fvx6 jvozsxb1 pgyr3lp8 iohei9zn jfj1vgtg iyko1ghw st4mjv7a a5ffu93u",
                children: [h.jsx(b("GeoTextPairing.react"), {
                    description: d,
                    heading: e,
                    size: "header2",
                    textAlign: "center"
                }), c]
            })]
        })
    }
}
), null);
__d("AdLibraryEmptyState.react", ["fbt", "ix", "AdLibraryEmptyStatePlaceholder.react", "AdLibraryMobileFiltersUtils", "AdLibraryPermissionUtils", "AdLibraryV2SessionIdProvider", "GeoBaseText.react", "Image.react", "PoliticalAdArchiveActionCreators", "PoliticalAdArchiveTypedLogger", "React", "ServerHTML.react", "gkx", "immutable", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = a.activeStatus
          , d = a.adType
          , e = a.disclaimerTexts
          , f = a.errorMessage
          , j = a.hasError
          , k = a.isPoliticalPage
          , l = a.isRegulator
          , m = a.location
          , n = a.pageCountries
          , o = a.pageIDs
          , p = a.pageIsDeleted
          , q = a.potentialReachRanges
          , r = a.publisherPlatforms
          , s = a.query
          , t = a.regions
          , u = a.startDate
          , v = a.viewAllPageID
          , w = a.onDateFilterTypeChange;
        if (j) {
            z((a = f == null ? void 0 : f.toString()) != null ? a : "");
            return i.jsxs("div", {
                className: "iohei9zn iajz466s pgyr3lp8 jfj1vgtg iyko1ghw st4mjv7a a5ffu93u fsdc1sw3",
                children: [i.jsx("div", {
                    className: "a888xgp5",
                    children: i.jsx(b("Image.react"), {
                        src: h("563902")
                    })
                }), i.jsx(b("GeoBaseText.react"), {
                    color: "value",
                    size: "header3",
                    children: y()
                })]
            })
        }
        function x() {
            var a = b("AdLibraryPermissionUtils").canViewActiveStatusFilter(d, k, p, v) && c !== b("AdLibraryMobileFiltersUtils").DEFAULT_ACTIVE_STATUS
              , f = r && !r.isEmpty()
              , g = b("AdLibraryPermissionUtils").canViewPotentialReachFilter(d) && !q.isEmpty()
              , h = b("AdLibraryPermissionUtils").canViewKeywordFilter(d, l, v) && s != null
              , i = b("AdLibraryPermissionUtils").canViewPageFilter(v, null) && !o.isEmpty()
              , j = b("AdLibraryPermissionUtils").canViewDisclaimerFilter(d, null, v) && !e.isEmpty()
              , n = b("AdLibraryPermissionUtils").canViewReachedRegionsFilter(d) && !t.isEmpty()
              , w = b("AdLibraryPermissionUtils").canViewLocationFilter(d, v) && m !== b("AdLibraryMobileFiltersUtils").DEFAULT_LOCATION_SEARCH && m != null
              , x = b("gkx")("1431090") && (u == null ? void 0 : u.min) != null && (u == null ? void 0 : u.max) != null;
            return a || f || g || h || i || j || n || w || x
        }
        j = function() {
            var a;
            w(null);
            a = {
                activeStatus: (a = b("AdLibraryMobileFiltersUtils")).DEFAULT_ACTIVE_STATUS,
                dateFilterType: null,
                disclaimerTexts: a.DEFAULT_DISCLAIMERS,
                pageIDs: a.DEFAULT_PAGE_IDS,
                potentialReach: a.DEFAULT_POTENTIAL_REACH_RANGES.toArray(),
                publisherPlatforms: a.DEFAULT_PUBLISHER_PLATFORMS.toArray(),
                regions: a.DEFAULT_REACHED_REGIONS,
                startDate: a.DEFAULT_START_DATE
            };
            b("AdLibraryPermissionUtils").canViewKeywordFilter(d, l, v) && (a.query = b("AdLibraryMobileFiltersUtils").DEFAULT_KEY_WORD);
            b("AdLibraryPermissionUtils").canViewLocationFilter(d, v) && (a.location = b("AdLibraryMobileFiltersUtils").DEFAULT_LOCATION_SEARCH);
            b("PoliticalAdArchiveActionCreators").updateFilters(a)
        }
        ;
        if (x())
            return i.jsx(b("AdLibraryEmptyStatePlaceholder.react"), {
                noResultReason: "too_many_filters",
                onButtonClick: j
            });
        if (v != null) {
            z("no results found for page " + v);
            if (n == null || n.length == 0)
                return i.jsx(b("AdLibraryEmptyStatePlaceholder.react"), {
                    noResultReason: "no_page_results"
                });
            else
                return i.jsx(b("AdLibraryEmptyStatePlaceholder.react"), {
                    noResultReason: "country_filter"
                })
        } else {
            z("no results found for query " + ((a = s) != null ? a : ""));
            return i.jsx(b("AdLibraryEmptyStatePlaceholder.react"), {
                noResultReason: "no_keyword_results"
            })
        }
        function y() {
            if (f != null)
                return i.jsx(b("ServerHTML.react"), {
                    blob: f
                });
            else
                return g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i. Vui l\u00f2ng ki\u1ec3m tra l\u1ea1i sau.")
        }
        function z(a) {
            var c = b("AdLibraryV2SessionIdProvider").toFluxStore().getState();
            new (b("PoliticalAdArchiveTypedLogger"))().setEntity("political_ad_archive").setEvent("info").setSessionID(c.sessionId).addToExtraData("error_message", a).log()
        }
    }
}
), null);
__d("AdLibraryMenuItemsUtils", ["ix", "fbt", "AsyncRequest", "Clipboard", "GeoMenuItem.react", "Image.react", "React", "URI", "asset", "emptyFunction", "gkx"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    f.getMenuItems = a;
    var i, j = b("React");
    function a(a, c, d, e, f, m, n) {
        var o = [];
        d && c && o.push(j.jsx(b("GeoMenuItem.react"), {
            "data-testid": void 0,
            description: h._("\u0110\u00e1nh d\u1ea5u qu\u1ea3ng c\u00e1o n\u00e0y l\u00e0 ph\u1ea3n c\u1ea3m ho\u1eb7c kh\u00f4ng ph\u00f9 h\u1ee3p"),
            icon: j.jsx(b("Image.react"), {
                src: g("490582")
            }),
            label: h._("B\u00e1o c\u00e1o qu\u1ea3ng c\u00e1o"),
            onClick: function() {
                f(),
                n()
            }
        }, "report_ad"));
        var p = new (i || (i = b("URI")))("https://www.facebook.com/ads/library/").addQueryData("id", a.adArchiveID).toString();
        o.push(j.jsx(b("GeoMenuItem.react"), {
            "data-testid": void 0,
            description: h._("L\u1ea5y URL cho qu\u1ea3ng c\u00e1o n\u00e0y trong Th\u01b0 vi\u1ec7n qu\u1ea3ng c\u00e1o"),
            icon: j.jsx(b("Image.react"), {
                src: g("481765")
            }),
            label: h._("Sao ch\u00e9p li\u00ean k\u1ebft qu\u1ea3ng c\u00e1o"),
            onClick: function() {
                return l(p, n, m, h._("\u0110\u00e3 sao ch\u00e9p li\u00ean k\u1ebft"))
            }
        }, "copy_ad_url"));
        e = a.menuItems;
        e != null && e.length > 0 && e.forEach(function(a) {
            var c = a.clipboard
              , d = a.link
              , e = a.isDialog
              , f = d != null ? function() {
                return k(d, e, n)
            }
            : c != null ? function() {
                return l(c.value.toString(), n, m, c.tooltipSuccess)
            }
            : b("emptyFunction");
            o.push(j.jsx(b("GeoMenuItem.react"), {
                description: a.bodyText,
                icon: j.jsx(b("Image.react"), {
                    src: a.iconURI
                }),
                label: a.headerText,
                onClick: f
            }, a.headerText))
        });
        return o
    }
    function k(a, c, d) {
        if (c === !0) {
            new (b("AsyncRequest"))().setURI(a).send();
            return
        }
        c = document.createElement("a");
        c.href = a.toString();
        c.target = "_blank";
        c.click();
        d()
    }
    function l(a, c, d, e) {
        b("Clipboard").copy(a),
        c(),
        d(e)
    }
}
), null);
__d("GeoPrivateToastContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        onHideFactory: null
    });
    e.exports = c
}
), null);
