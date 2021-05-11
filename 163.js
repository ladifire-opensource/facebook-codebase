if (self.CavalryLogger) {
    CavalryLogger.start_js(["ceIdX"]);
}

__d("FBNumberInput.react", ["Input", "React", "debounce", "intlNumUtils", "joinClasses", "prop-types"], (function(a, b, c, d, e, f) {
    var g = b("React")
      , h = 200;
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this) || this;
            c.$1 = function(a) {
                a !== null ? (a = c.props.nonnegative ? Math.abs(a) : a,
                c.props.minValue != null && a < c.props.minValue ? a = c.props.minValue : c.props.maxValue != null && a > c.props.maxValue && (a = c.props.maxValue)) : c.props.defaultValue != null && (a = c.props.defaultValue);
                return a
            }
            ;
            c.$2 = function(a) {
                a = b("intlNumUtils").parseNumber(a);
                c.props.onlyIntegers && (a = Math.trunc(a));
                return a
            }
            ;
            c.$3 = b("debounce")(function(a) {
                a = c.$2(b("Input").getValue(a));
                a === c.$1(a) && c.props.onValueChange(a)
            }, h);
            c.$4 = function(a) {
                return c.props.formatNumber ? b("intlNumUtils").formatNumberWithThousandDelimiters(a, 0) : "" + a
            }
            ;
            c.$5 = function(a) {
                c.setState({
                    focused: !1
                });
                var d = c.$1(c.$2(b("Input").getValue(a.target)))
                  , e = d !== null ? c.$4(d) : "";
                b("Input").setValue(a.target, e);
                c.props.triggerCallbackOnChange && c.$3.reset();
                c.props.onValueChange(d)
            }
            ;
            c.$6 = function(a) {
                c.setState({
                    focused: !0
                })
            }
            ;
            c.$7 = function(a) {
                var b = c.props
                  , d = b.onChange;
                b = b.triggerCallbackOnChange;
                b ? c.$3(a.target) : d && d(a)
            }
            ;
            c.state = {
                focused: !1
            };
            return c
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.value
              , d = a.className;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["value", "className"]);
            c && (c = this.$4(c));
            return g.jsx("input", babelHelpers["extends"]({}, a, {
                className: b("joinClasses")(d, "inputtext"),
                type: "text",
                ref: "fb_number_input",
                defaultValue: c,
                value: this.state.focused ? void 0 : c,
                onBlur: this.$5,
                onFocus: this.$6,
                onChange: this.$7
            }))
        }
        ;
        return c
    }(g.Component);
    a.propTypes = {
        nonnegative: (c = b("prop-types")).bool,
        onValueChange: c.func.isRequired,
        value: c.number,
        defaultValue: c.number,
        minValue: c.number,
        maxValue: c.number,
        placeholder: c.string,
        formatNumber: c.bool,
        onlyIntegers: c.bool,
        triggerCallbackOnChange: c.bool
    };
    e.exports = a
}
), null);
__d("FDSPrivateBaseSelectorFocusGroup", ["FocusGroup.react", "focusScopeQueries"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);
    c = a[0];
    d = a[1];
    f.FocusItem = d;
    f.FocusGroup = c
}
), null);
__d("FDSPrivateSelectionContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = {
        onSelect: b("emptyFunction"),
        selectionType: "single",
        size: "large",
        value: null
    };
    d = a.createContext(c);
    e.exports = d
}
), null);
__d("FDSPrivateSelectorContainer.react", ["React", "makeFDSStandardComponent", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, b) {
        var c = a.children;
        a = a.onKeyDown;
        return g.jsx("ul", {
            className: "f8dsg7ka",
            onKeyDown: a,
            ref: b,
            role: "menu",
            children: c
        })
    }
    c = b("makeFDSStandardComponent")("FDSPrivateSelectorContainer", g.forwardRef(a));
    e.exports = c
}
), null);
__d("FDSPrivateSelectorItemContext", ["createFeatureContext"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("createFeatureContext")();
    c = a;
    e.exports = c
}
), null);
__d("FDSPrivateBaseSelector.react", ["fbt", "FDSPrivateBaseSelectorFocusGroup", "FDSPrivateSelectionContext", "FDSPrivateSelectorContainer.react", "FDSPrivateSelectorItemContext", "FDSPrivateSelectorMenu.react", "React", "RTLKeys", "areEqual", "focusScopeQueries", "isEmpty", "useBoolean", "usePrevious", "useShallowArrayEqualMemo", "useShallowEqualMemo"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i, j = b("React"), k = "large", l = g._("Kh\u00f4ng c\u00f3 t\u00f9y ch\u1ecdn n\u00e0o");
    function a(a) {
        var c = a.onSelect
          , d = a.onClose
          , e = a.onOpen
          , f = a.selectionType
          , g = a.size;
        g = g === void 0 ? k : g;
        var h = a.value;
        h = h === void 0 ? null : h;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["onSelect", "onClose", "onOpen", "selectionType", "size", "value"]);
        var i = n()
          , l = i[0]
          , p = i[1];
        i = o(h);
        var q = i[0]
          , r = i[1]
          , s = i[2];
        i = j.useCallback(function(a) {
            c(a, p)
        }, [p, c]);
        var t = j.useCallback(function() {
            s(),
            d == null ? void 0 : d()
        }, [d, s])
          , u = j.useCallback(function() {
            r(),
            e == null ? void 0 : e()
        }, [e, r])
          , v = j.useCallback(function(a) {
            switch (a.keyCode) {
            case b("RTLKeys").ESC:
            case b("RTLKeys").TAB:
                p();
                break
            }
        }, [p]);
        i = b("useShallowEqualMemo")({
            onSelect: i,
            selectionType: f,
            size: g,
            value: h
        });
        f = b("FDSPrivateSelectionContext").Provider;
        var w = b("FDSPrivateSelectorItemContext").Provider;
        return j.jsxs(w, {
            initialValue: {
                item: []
            },
            children: [j.jsx("div", {
                style: {
                    display: "none"
                },
                children: a.children
            }), j.jsx(f, {
                value: i,
                children: j.jsx(m, babelHelpers["extends"]({}, a, {
                    menuRef: q,
                    onClose: t,
                    onKeyDown: v,
                    onOpen: u,
                    selectorMenuRef: l,
                    size: g,
                    value: h
                }))
            })]
        })
    }
    function m(a) {
        var c = p()
          , d = q(a.value, c)
          , e = r(c, d, a.getLabel);
        d = r(c, d, a.getMedia);
        c = c.length > 0;
        var f = a.isDisabled === !0 || !c;
        c = c ? a.placeholder : l;
        return j.jsx(b("FDSPrivateSelectorMenu.react"), {
            busyIndicator: a.busyIndicator,
            "data-button-testid": a["data-button-testid"],
            "data-menu-testid": a["data-menu-testid"],
            "data-testid": void 0,
            footer: a.footer,
            hasError: a.hasError,
            hasWarning: a.hasWarning,
            htmlForTargetId: a.htmlForTargetId,
            isDisabled: f,
            isEdited: Boolean(a.isEdited),
            isValid: a.isValid,
            label: e,
            media: d,
            minMenuWidth: a.minMenuWidth,
            onBlur: a.onBlur,
            onClick: a.onClick,
            onClose: a.onClose,
            onOpen: a.onOpen,
            placeholder: c,
            ratio: a.ratio,
            ref: a.selectorMenuRef,
            size: (f = a.size) != null ? f : k,
            statusIndicator: a.statusIndicator,
            children: j.jsx(b("FDSPrivateSelectorContainer.react"), {
                onKeyDown: a.onKeyDown,
                ref: a.menuRef,
                children: j.jsxs(b("FDSPrivateBaseSelectorFocusGroup").FocusGroup, {
                    orientation: "vertical",
                    preventScrollOnFocus: !1,
                    tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
                    wrap: !0,
                    children: [a.header, a.children]
                })
            })
        })
    }
    function n() {
        var a = j.useRef(null)
          , b = j.useCallback(function() {
            var b;
            return (b = a.current) == null ? void 0 : b.close()
        }, []);
        return [a, b]
    }
    function o(a) {
        var c = b("useBoolean")(!1)
          , d = c.value
          , e = c.setTrue;
        c = c.setFalse;
        var f = j.useRef(null)
          , g = b("usePrevious")(d)
          , h = d !== g;
        j.useEffect(function() {
            if (h && d) {
                var a, b;
                a = (a = f.current) == null ? void 0 : a.querySelector('[tabindex="0"]');
                b = (b = f.current) == null ? void 0 : b.querySelector('[aria-checked="true"]');
                (b = (b = b) != null ? b : a) == null ? void 0 : b.focus()
            }
        }, [d, h, a]);
        return [f, e, c]
    }
    function p() {
        var a = b("FDSPrivateSelectorItemContext");
        a = a.useFeatureContext();
        return b("useShallowArrayEqualMemo")(a("item"))
    }
    function q(a, c) {
        return j.useMemo(function() {
            return (h || (h = b("isEmpty")))(a) ? [] : c.filter(function(c) {
                return a == null ? void 0 : a.some(function(a) {
                    return (i || (i = b("areEqual")))(a, c.value)
                })
            })
        }, [c, a])
    }
    function r(a, b, c) {
        return j.useMemo(function() {
            var d;
            return c(a, (d = b) != null ? d : [])
        }, [c, a, b])
    }
}
), null);
__d("FDSPrivateSelectorItem.react", ["FDSPrivateBaseSelectorFocusGroup", "FDSPrivateSelectionContext", "FDSPrivateSelectorItemContext", "FDSPrivateSelectorItemLayout.react", "FDSSelectorMenuContext", "FocusWithinHandler.react", "React", "RTLKeys", "areEqual"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    function a(a, b) {
        var c = k();
        return c ? h.jsx(i, babelHelpers["extends"]({}, a)) : h.jsx(j, babelHelpers["extends"]({}, a, {
            forwardedRef: b
        }))
    }
    function i(a) {
        l(a);
        return null
    }
    function j(a) {
        var c = a["aria-describedby"]
          , d = a["data-testid"];
        d = a.disabledMessage;
        var e = a.isDisabled
          , f = e === void 0 ? !1 : e;
        e = a.fit;
        var i = a.forwardedRef
          , j = a.label
          , k = a.media
          , l = a.onSelected
          , m = a.ratio
          , n = a.statusIndicator
          , o = a.subText
          , p = a.truncate
          , q = a.value;
        a = h.useState(!1);
        var r = a[0];
        a = a[1];
        var s = h.useContext(b("FDSPrivateSelectionContext"))
          , t = s.onSelect
          , u = s.size
          , v = s.selectionType;
        s = s.value;
        s = Array.isArray(s) && s.some(function(a) {
            return (g || (g = b("areEqual")))(a, q)
        });
        var w = h.useCallback(function() {
            f || (t(q),
            l == null ? void 0 : l())
        }, [f, t, l, q])
          , x = h.useCallback(function(a) {
            switch (a.keyCode) {
            case b("RTLKeys").RETURN:
            case b("RTLKeys").SPACE:
                w();
                break
            }
        }, [w])
          , y = v === "multi";
        y = !s || y;
        return h.jsx(b("FocusWithinHandler.react"), {
            onFocusChange: a,
            children: h.jsx(b("FDSPrivateBaseSelectorFocusGroup").FocusItem, {
                disabled: f || !y,
                children: h.jsx(b("FDSPrivateSelectorItemLayout.react"), {
                    "aria-describedby": c,
                    "data-testid": void 0,
                    disabledMessage: d,
                    fit: e,
                    isChecked: s,
                    isDisabled: f,
                    isFocused: r,
                    label: j,
                    media: k,
                    onClick: w,
                    onKeyDown: x,
                    ratio: m,
                    ref: i,
                    selectionType: v,
                    size: u,
                    statusIndicator: n,
                    subText: o,
                    truncate: p,
                    value: q
                })
            })
        })
    }
    function k() {
        var a = h.useContext(b("FDSSelectorMenuContext"));
        a = a.isMenuShown;
        return a == null
    }
    function l(a) {
        var c = a.label
          , d = a.media
          , e = a.value;
        a = b("FDSPrivateSelectorItemContext").useFeatureContext;
        a(h.useMemo(function() {
            return {
                item: {
                    label: c,
                    media: d,
                    value: e
                }
            }
        }, [c, d, e]))
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("HubbleConstants", [], (function(a, b, c, d, e, f) {
    a = {
        TODAY: "today",
        YESTERDAY: "yesterday",
        WEEK: "7_days",
        MONTH: "28_days"
    };
    f.DATE_RANGE = a;
    b = "navOverview";
    f.DEFAULT_SECTION = b;
    c = {
        CREATOR_STUDIO: "creatorStudio",
        LIKES: "navLikes",
        FOLLOWERS: "navFollowers",
        SUPPORTERS: "navSupporters",
        LOCAL: "navLocal",
        OVERVIEW: "navOverview",
        PEOPLE: "navPeople",
        POSTS: "navPosts",
        PRODUCT_TAGGED_POSTS: "navProductTaggedPosts",
        REACH: "navReach",
        VISITS: "navVisits",
        PAGE_VIEWS: "navPageViews",
        GROUPS: "navGroups",
        ACTIONS_ON_PAGE: "navActionsOnPage",
        WIFI: "navWifi",
        EVENTS: "navEvents",
        MOVIES: "navMovies",
        VIDEOS: "navVideos",
        SHOP: "navShop",
        SHOPS: "navShops",
        BRANDED_CONTENT: "navBrandedContent",
        MESSAGES: "navMessages",
        PROMOTIONS: "navPromotions",
        API: "navAPI",
        IA_CTA_INSIGHTS: "navIaCtaInsights",
        OFFERS: "navOffers",
        PAGE_INVITES: "navPageInvites",
        REWARDS: "navRewards",
        PREVIEWS: "navPreviews",
        ORDERS: "navOrders",
        AD_BREAKS: "navAdBreaks",
        QR_CODE: "navQRCode",
        FB_STORIES: "navStories",
        LDP_METRICS: "navLDPMetrics",
        TRANSACTIONS_METRICS: "navTransactionsMetrics",
        ORGANIC_PIXEL: "navOrganicPixel",
        USER_REPORTS: "navUserReports",
        FEATURED_ARTICLES: "navFeaturedArticles",
        FUNDRAISERS: "navFundraisers"
    };
    f.NAV_SECTIONS = c;
    d = {
        ENGAGEMENT: "engagement"
    };
    f.SCROLL_TARGETS = d;
    e = "pipe_daily";
    f.PIPELINE_DAILY = e;
    a = "pipe_weekly";
    f.PIPELINE_WEEKLY = a;
    b = "pipe_monthly";
    f.PIPELINE_MONTHLY = b;
    c = "pipe_lifetime";
    f.PIPELINE_LIFETIME = c;
    d = "pipe_demo";
    f.PIPELINE_DEMO = d;
    e = "day";
    f.PERIOD_DAY = e;
    a = "week";
    f.PERIOD_WEEK = a;
    b = "days_28";
    f.PERIOD_28_DAYS = b;
    c = "lifetime";
    f.PERIOD_LIFETIME = c;
    d = "total_over_range";
    f.PERIOD_TOTAL_OVER_RANGE = d;
    e = "area";
    f.SERIES_AREA = e;
    a = "line";
    f.SERIES_LINE = a;
    b = 60;
    f.SEC_IN_MIN = b;
    c = 7;
    f.DAYS_PER_WEEK = c;
    d = "date";
    f.SORT_BY_DATE = d;
    e = "reach";
    f.SORT_BY_REACH = e;
    a = "clicks";
    f.SORT_BY_CLICKS = a;
    b = "lcs";
    f.SORT_BY_LCS = b;
    c = "premium_video";
    f.REQ_PREMIUM_VIDEO = c;
    d = "published";
    f.REQ_PUBLISHED = d;
    e = "unpublished";
    f.REQ_UNPUBLISHED = e;
    a = "video";
    f.REQ_VIDEO = a;
    b = 10;
    f.TABLE_PAGE_SIZE = b;
    c = {
        F: {
            ageBuckets: {
                "13-17": 7.2,
                "18-24": 14.4,
                "25-34": 11.8,
                "35-44": 6.2,
                "45-54": 3.6,
                "55-64": 1.9,
                "65+": 1.1
            },
            total: 46.2
        },
        M: {
            ageBuckets: {
                "13-17": 7.7,
                "18-24": 17.9,
                "25-34": 14.8,
                "35-44": 7,
                "45-54": 3.6,
                "55-64": 1.6,
                "65+": 1.3
            },
            total: 53.8
        },
        total: 100
    };
    f.FACEBOOK_DEMOGRAPHICS = c;
    d = 100;
    f.MIN_WIFI_USERS_COUNT = d;
    e = ["caption", "created_time", "description", "id", "identifier", "message", "name", "picture", "privacy", "promotable_post_id", "status_type", "type", "hints_config", "visibility", "timeline_token", "is_branded_content"];
    f.POSTS_TABLE_FIELDS = e;
    a = 128;
    f.FBTYPE_VIDEO = a
}
), null);
__d("ContentManagerConfirmationDialogClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743472");
    c = b("FalcoLoggerInternal").create("content_manager_confirmation_dialog_click", a);
    e.exports = c
}
), null);
__d("ContentManagerContentDetailViewClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743479");
    c = b("FalcoLoggerInternal").create("content_manager_content_detail_view_click", a);
    e.exports = c
}
), null);
__d("ContentManagerContentDetailViewEnterFlowFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743480");
    c = b("FalcoLoggerInternal").create("content_manager_content_detail_view_enter_flow", a);
    e.exports = c
}
), null);
__d("ContentManagerContentDetailViewExitFlowFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743481");
    c = b("FalcoLoggerInternal").create("content_manager_content_detail_view_exit_flow", a);
    e.exports = c
}
), null);
__d("ContentManagerContentItemClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743487");
    c = b("FalcoLoggerInternal").create("content_manager_content_item_click", a);
    e.exports = c
}
), null);
__d("ContentManagerTabItemClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743503");
    c = b("FalcoLoggerInternal").create("content_manager_tab_item_click", a);
    e.exports = c
}
), null);
__d("ContentManagerTypeaheadSubmitFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743505");
    c = b("FalcoLoggerInternal").create("content_manager_typeahead_submit", a);
    e.exports = c
}
), null);
__d("ContentManagerWorkspaceClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743511");
    c = b("FalcoLoggerInternal").create("content_manager_workspace_click", a);
    e.exports = c
}
), null);
__d("ContentManagerWorkspaceEnterFlowFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743512");
    c = b("FalcoLoggerInternal").create("content_manager_workspace_enter_flow", a);
    e.exports = c
}
), null);
__d("ContentManagerWorkspaceReceiveResponseFailureFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743515");
    c = b("FalcoLoggerInternal").create("content_manager_workspace_receive_response_failure", a);
    e.exports = c
}
), null);
__d("ContentManagerWorkspaceSendRequestFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743517");
    c = b("FalcoLoggerInternal").create("content_manager_workspace_send_request", a);
    e.exports = c
}
), null);
__d("BusinessToolsContentManagementLoggingUtils", ["ContentManagerConfirmationDialogClickFalcoEvent", "ContentManagerContentDetailViewClickFalcoEvent", "ContentManagerContentDetailViewEnterFlowFalcoEvent", "ContentManagerContentDetailViewExitFlowFalcoEvent", "ContentManagerContentItemClickFalcoEvent", "ContentManagerTabItemClickFalcoEvent", "ContentManagerTypeaheadSubmitFalcoEvent", "ContentManagerWorkspaceClickFalcoEvent", "ContentManagerWorkspaceEnterFlowFalcoEvent", "ContentManagerWorkspaceReceiveResponseFailureFalcoEvent", "ContentManagerWorkspaceSendRequestFalcoEvent"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g) {
        a = {
            content_tab: a
        };
        var h = babelHelpers["extends"]({}, o(c, d, g, e, f), {
            event_data: a
        });
        b("ContentManagerTabItemClickFalcoEvent").log(function() {
            return h
        })
    }
    function c(a) {
        var b = [];
        a && a.forEach(function(c) {
            a = c.id.split("_"),
            b.push(a.length === 2 ? a[1] : c.id)
        });
        return b
    }
    function d(a, c, d, e, f, g, h, i, j) {
        a = {
            action_entry_point: a,
            content_tab: c
        };
        var k = babelHelpers["extends"]({}, o(d, e, j, g, h), {
            action_type: q(f),
            is_bulk_action: !!(i && i.length > 1),
            post_ids: i,
            event_data: a
        });
        b("ContentManagerConfirmationDialogClickFalcoEvent").log(function() {
            return k
        })
    }
    function f(a, c, d, e, f, g, h, i, j) {
        a = {
            content_tab: a
        };
        var k = babelHelpers["extends"]({}, o(c, d, j, g, h), {
            action_type: q(e),
            is_bulk_action: f,
            post_ids: i,
            event_data: a
        });
        b("ContentManagerWorkspaceClickFalcoEvent").log(function() {
            return k
        })
    }
    function g(a, c, d, e, f, g, h, i, j) {
        a = {
            content_tab: a
        };
        var k = babelHelpers["extends"]({}, o(c, d, j, g, h), {
            action_type: q(e),
            is_bulk_action: f,
            post_ids: i,
            event_data: a
        });
        b("ContentManagerContentDetailViewClickFalcoEvent").log(function() {
            return k
        })
    }
    function h(a, c, d, e, f, g, h) {
        a = {
            typeahead_input: a,
            content_tab: c
        };
        var i = babelHelpers["extends"]({}, o(d, e, h, f, g), {
            event_data: a
        });
        b("ContentManagerTypeaheadSubmitFalcoEvent").log(function() {
            return i
        })
    }
    function i(a, c, d, e, f, g) {
        a = {
            content_tab: a
        };
        var h = babelHelpers["extends"]({}, o(c, d, g, e, f), {
            event_data: a
        });
        b("ContentManagerWorkspaceEnterFlowFalcoEvent").log(function() {
            return h
        })
    }
    function j(a, c, d, e, f, g, h) {
        a = {
            content_tab: a,
            request_type: g
        };
        var i = babelHelpers["extends"]({}, o(c, d, h, e, f), {
            event_data: a
        });
        b("ContentManagerWorkspaceSendRequestFalcoEvent").log(function() {
            return i
        })
    }
    function k(a, c, d, e, f, g, h) {
        c = {
            content_tab: c,
            request_failure_reason: a
        };
        var i = babelHelpers["extends"]({}, o(d, e, h, f, g), {
            event_data: c
        });
        b("ContentManagerWorkspaceReceiveResponseFailureFalcoEvent").log(function() {
            return i
        })
    }
    function l(a, c, d, e, f, g, h) {
        c = {
            content_tab: c
        };
        var i = babelHelpers["extends"]({}, o(d, e, h, f, g), {
            post_ids: a,
            event_data: c
        });
        b("ContentManagerContentItemClickFalcoEvent").log(function() {
            return i
        })
    }
    function m(a, c, d, e, f, g, h) {
        c = {
            content_tab: c
        };
        var i = babelHelpers["extends"]({}, o(d, e, h, f, g), {
            post_ids: a,
            event_data: c
        });
        b("ContentManagerContentDetailViewEnterFlowFalcoEvent").log(function() {
            return i
        })
    }
    function n(a, c, d, e, f, g, h) {
        c = {
            content_tab: c
        };
        var i = babelHelpers["extends"]({}, o(d, e, h, f, g), {
            post_ids: a,
            event_data: c
        });
        b("ContentManagerContentDetailViewExitFlowFalcoEvent").log(function() {
            return i
        })
    }
    function o(a, b, c, d, e) {
        return {
            event_location: c,
            page_id: a,
            channel: "FACEBOOK_NEWS_FEED",
            business_presence_node_id: e != null ? e : a,
            logged_in_user_id: b,
            logged_in_user_type: "facebook",
            client_timestamp_ms: Date.now(),
            referrer: d
        }
    }
    function p(a) {
        return a ? " page_posts_tab" : " publishing_tools_tab"
    }
    function q(a) {
        switch (a) {
        case "DELETE":
            return "delete";
        case "PUBLISH":
            return "publish";
        case "SCHEDULE":
            return "schedule";
        case "RESCHEDULE":
            return "reschedule";
        case "UNSCHEDULE":
            return "cancel_schedule";
        case "BACKDATE":
            return "backdate";
        case "CREATE_ADS_FROM_POSTS":
            return "create_ad";
        default:
            return "unknown"
        }
    }
    e.exports = {
        logContentManagerConfirmationDialogClick: d,
        logContentManagerContentDetailViewClick: g,
        logContentManagerContentDetailViewEnterFlow: m,
        logContentManagerContentDetailViewExitFlow: n,
        logContentManagerContentItemClick: l,
        logContentManagerTabItemClick: a,
        logContentManagerTypeaheadSubmit: h,
        logContentManagerWorkspaceClick: f,
        logContentManagerWorkspaceEnterFlow: i,
        logContentManagerWorkspaceReceiveResponseFailure: k,
        logContentManagerWorkspaceSendRequest: j,
        getContentManagerLoggingBaseData: o,
        getContentManagerEventLocation: p,
        convertPostsObjectToPostsID: c
    }
}
), null);
__d("PagesComposerWWWInterceptionActions", ["PagesComposerWWWInterceptionActionsType", "ReactComposerDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setInterceptionDetected = a;
    f.setInterceptionResponse = c;
    function a(a, c) {
        b("ReactComposerDispatcher").dispatch({
            composerID: a,
            type: b("PagesComposerWWWInterceptionActionsType").INTERCEPTION_DETECTED,
            attachmentID: c
        })
    }
    function c(a, c) {
        b("ReactComposerDispatcher").dispatch({
            composerID: a,
            type: b("PagesComposerWWWInterceptionActionsType").INTERCEPTION_RESPONSE,
            interceptionResponse: c
        })
    }
}
), null);
__d("PagesComposerWWWInterceptionConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "pages_composer_interception_platform";
    f.FBLOGGER_NAME = a
}
), null);
__d("ComposerInterceptionDecisionWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2960214107339255"
        }
        ;
        b.getQueryID = function() {
            return "565520147357629"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("PagesComposerEntryPoint", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ADS_CREATE: "ads_create",
        ADS_POWER_EDITOR: "ads_power_editor",
        BCMP_DEAL: "branded_content_creator_deal_view",
        COVER_PHOTO: "cover_photo",
        CS_GLOBAL_BASIC_POST: "cs_global_basic_post",
        CS_HOME_BASIC_POST: "cs_home_basic_post",
        EDIT_DIALOG: "edit_dialog",
        EDIT_DIALOG_GROUP: "edit_dialog_group",
        ENDORSEMENT_MODULE: "endorsement_module",
        EVENT: "event",
        EVENT_ABOUT: "event_about",
        GROUP: "group",
        INSPIRATION_PREVIEW_PAGES_FEED: "inspiration_preview_pages_feed",
        INSPIRATION_SURFACE: "inspiration_surface",
        PAGE_ADMIN_JOURNEY: "page_admin_journey",
        PAGE_CONTENT_TAB_ADS_POSTS: "page_content_tab_ads_posts",
        PAGE_CONTENT_TAB_ADS_POSTS_DEPRECATION: "page_content_tab_ads_posts_deprecation",
        PAGE_CONTENT_TAB_CANVAS: "page_content_tab_canvas",
        PAGE_CONTENT_TAB_DRAFTS: "page_content_tab_drafts",
        PAGE_CONTENT_TAB_PUBLISHED_POSTS: "page_content_tab_published_posts",
        PAGE_CONTENT_TAB_PUBLISHED_POSTS_OPTED_OUT: "page_content_tab_published_posts_opted_out",
        PAGE_CONTENT_TAB_SCHEDULED_POSTS: "page_content_tab_scheduled_posts",
        PAGE_CONTENT_TAB_SCHEDULED_POSTS_OPTED_OUT: "page_content_tab_scheduled_posts_opted_out",
        PAGE_LEFT_NAV_CREATE_POST_BUTTON: "page_left_nav_create_post_button",
        PAGE_TIPS: "page_tips",
        PAGES_FEED: "pages_feed",
        PAGES_POSTS: "pages_posts",
        PAGES_PREMADE_POST_CARD: "pages_premade_post_card",
        PROFILE_PIC: "profile_pic",
        SCHEDULED_POSTS_ASYNC: "scheduled_posts_async",
        WWW_PAGE_SUPPORTER_TAB: "www_page_supporter_tab"
    });
    e.exports = a
}
), null);
__d("PagesComposerInterceptionFlowType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        AUTO_CONVERT: "auto_convert",
        DIALOG: "dialog",
        INLINE: "inline",
        INLINE_DIALOG: "inline_dialog",
        OPT_OUT_ACTIONABLE_NUX: "opt_out_actionable_nux",
        OPT_OUT_SIMPLE_NUX: "opt_out_simple_nux"
    });
    e.exports = a
}
), null);
__d("PagesComposerInterceptionProductType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BRANDAWARENESS: "brandawareness",
        BRANDTAGGING: "brandtagging",
        EVENT: "event",
        FOODDRINK: "fooddrink",
        INSIGHTS_PHOTO_UPSELL: "insights_photo_upsell",
        JOB: "job",
        JOB_GENERIC_LINK: "job_generic_link",
        JOB_PARTNER_LINK: "job_partner_link",
        LDP: "ldp",
        MARKETPLACE_MOTORS: "marketplace_motors",
        MARKETPLACE_REAL_ESTATE: "marketplace_real_estate",
        MESSAGEPAGE: "messagepage",
        MOVIE: "movie",
        NONE: "none",
        OFFER: "offer",
        PAGES_INTEGRITY_FAKE_NEWS: "pages_integrity_fake_news",
        PAGES_INTEGRITY_UNPUBLISHED_CONTENT: "pages_integrity_unpublished_content",
        PRODUCT_TAGGING_NUX: "product_tagging",
        QPC: "qpc",
        SALESPROMO: "salespromo",
        SCHEDULE_POST_TIME: "schedule_post_time",
        SELL: "sell",
        SELL_MESSAGE: "sell_message",
        SERVICE: "service"
    });
    e.exports = a
}
), null);
__d("PagesComposerWWWInterceptionHandlerUtils", ["FBLogger", "PagesComposerEntryPoint", "PagesComposerInterceptionFlowType", "PagesComposerInterceptionProductType", "PagesComposerWWWInterceptionConstants", "ReactComposerPagesStore", "ReactComposerPhotoStore", "ReactComposerPortableCTAAttachmentStore", "ReactComposerScrapedAttachmentStore", "ReactComposerTaggerStore", "ReactComposerTaggerType", "getJSEnumSafe"], (function(a, b, c, d, e, f) {
    "use strict";
    f.mapInterceptionEnumProductKeyFromValue = h;
    f.mapInterceptionEnumFlowKeyFromValue = a;
    f.mapInterceptionEnumComposerEntryPointKeyFromValue = c;
    f.getAttachedPhotoIDs = d;
    f.evaluatePartnerConfigsForUserComposerInterception = e;
    f.evaluatePartnerConfigsForInterception = i;
    f.checkProductBasedConditions = j;
    f.checkProductBasedConditionsForInlineInterception = k;
    f.getSponsorID = l;
    function g(a, c, d) {
        var e = Object.keys(c).find(function(b) {
            return c[b] === a
        });
        if (e !== void 0)
            return e;
        b("FBLogger")(b("PagesComposerWWWInterceptionConstants").FBLOGGER_NAME).mustfix("Invalid enum value provided");
        return d
    }
    function h(a) {
        return g(a, b("PagesComposerInterceptionProductType"), "NONE")
    }
    function a(a) {
        return g(a, b("PagesComposerInterceptionFlowType"), "DIALOG")
    }
    function c(a) {
        return g(a, b("PagesComposerEntryPoint"), "PAGES_FEED")
    }
    function d(a) {
        a = b("ReactComposerPhotoStore").getPhotos(a);
        var c = [];
        a && a.size && a.forEach(function(a) {
            return c.push(a.id)
        });
        return c
    }
    function e() {
        return ["BRANDAWARENESS", "BRANDTAGGING", "JOB_PARTNER_LINK", "JOB_GENERIC_LINK", "JOB", "MESSAGEPAGE", "EVENT"]
    }
    function i(a, c, d, e, f) {
        var g = [];
        c.forEach(function(c) {
            var i = c.supportedPlacements;
            i || (i = []);
            if (c.isEligibleForInterception && i.includes(f) && (c.supportedLocales.includes(e) || c.supportedLocales.includes(e.split("_")[0] + "_XX")) && !c.blacklistedAttachmentTypes.includes(d) && c.whitelistedAttachmentTypes.includes(d) && j(a, c, d)) {
                i = h(c.interceptionProductType);
                g.push(b("PagesComposerInterceptionProductType")[i])
            }
        });
        return g
    }
    function j(a, c, d) {
        switch (c.interceptionProductType) {
        case "messagepage":
            d = b("ReactComposerPortableCTAAttachmentStore").getSelectedCta(a);
            return d === "MESSAGE_PAGE" ? !1 : !b("ReactComposerTaggerStore").hasMessagingCTA(a);
        case "offer":
            return !b("ReactComposerPagesStore").getIsOfferUpsellAbandoned(a);
        case "event":
            c = b("ReactComposerScrapedAttachmentStore").getAttachmentConfig(a);
            a = (d = c) != null ? d.type : d;
            return a !== 7
        }
        return !0
    }
    function k(a, c) {
        var d = b("getJSEnumSafe")(b("PagesComposerInterceptionProductType"), c.interceptionProductType);
        switch (d) {
        case "movie":
            d = c.entityFBID;
            if (d === null)
                return !1;
            c = b("ReactComposerTaggerStore").getTaggerData(a, b("ReactComposerTaggerType").GET_SHOWTIMES);
            c = ((a = c) != null ? a.external_movie_id : a) || null;
            return d !== c
        }
        return !0
    }
    function l(a) {
        a = b("ReactComposerTaggerStore").getTaggerData(a, b("ReactComposerTaggerType").SPONSOR);
        return a && a.sponsors && a.sponsors.length > 0 ? a.sponsors[0].getUniqueID() : null
    }
}
), null);
__d("PagesComposerWWWInterceptionHandler", ["ComposerInterceptionDecisionWebGraphQLQuery", "ComposerXMarauderLogger", "FBLogger", "PagesComposerActions", "PagesComposerEntryPoint", "PagesComposerWWWInterceptionActions", "PagesComposerWWWInterceptionHandlerUtils", "PagesComposerWWWInterceptionUtils", "ReactComposerActions", "ReactComposerAttachmentStore", "ReactComposerAttachmentType", "ReactComposerPagesStore", "ReactComposerScrapedAttachmentStore", "ReactComposerStatusStore", "WebGraphQL", "promiseDone", "PagesComposerWWWInterceptionConstants"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("PagesComposerWWWInterceptionHandlerUtils")).evaluatePartnerConfigsForInterception
      , h = a.evaluatePartnerConfigsForUserComposerInterception
      , i = a.getAttachedPhotoIDs
      , j = a.getSponsorID
      , k = a.mapInterceptionEnumComposerEntryPointKeyFromValue
      , l = a.mapInterceptionEnumFlowKeyFromValue
      , m = a.mapInterceptionEnumProductKeyFromValue
      , n = {
        shouldPerformInterception: !1,
        bestExtractedTitle: "",
        bestExtractedLocationAddress: null,
        bestExtractedLocationLongitude: null,
        bestExtractedLocationLatitude: null,
        bestExtractedJobType: null,
        bestExtractedWageMin: null,
        bestExtractedWageMax: null,
        bestExtractedWageType: null,
        interceptionProductType: m("none"),
        interceptionType: l("dialog"),
        bestExtractedStartTime: null,
        bestExtractedEndTime: null,
        bestExtractedLink: null,
        bestExtractedLinks: null,
        bestExtractedDescription: null,
        dialogTitle: null,
        dialogSubtitle: null,
        dialogContent: null,
        dialogPrimaryActionTitle: null,
        entityId: null,
        entityFBID: null
    }
      , o = b("PagesComposerWWWInterceptionConstants").FBLOGGER_NAME
      , p = {}
      , q = {
        isMultiInterceptionAllowed: function(a) {
            switch (a) {
            case "pages_composer":
            case "composer_schedule_post":
                return !0;
            default:
                return !1
            }
        },
        performIntercept: function(a, c, d, e, f) {
            var l = this;
            if (d == null || d === "" || a == null || a === "") {
                b("FBLogger")(o).warn("Cannot perform interception. Either composer id or target id passed is missing");
                this.sendResponseToPartner(f);
                return
            }
            if (!this.isMultiInterceptionAllowed(e) && p[c]) {
                b("FBLogger")(o).info("Already performed a successful interception in this session");
                this.sendResponseToPartner(f);
                return
            }
            var m = b("ReactComposerScrapedAttachmentStore").getAttachmentConfig(a)
              , n = null;
            m && m.params && (n = {
                url: m.params.url,
                extracted_title: m.params.title,
                extracted_description: m.params.summary,
                extracted_image_urls: []
            });
            m = b("ReactComposerStatusStore").getMessageText(a);
            var r = b("ReactComposerAttachmentStore").getSelectedAttachmentID(a);
            if (!r) {
                b("FBLogger")(o).info("Cannot perform interception. no attachment selected");
                this.sendResponseToPartner(f);
                return
            }
            var s = i(a);
            if (r === b("ReactComposerAttachmentType").MEDIA && !(s.length > 0)) {
                b("FBLogger")(o).info("Cannot perform interception. No media attached for a media Attachment type");
                this.sendResponseToPartner(f);
                return
            }
            var t = e === "pages_user_composer_post_button";
            if (t) {
                var u = b("ComposerXMarauderLogger").getInstance(a);
                u = u && u.ref
            } else
                u = b("ReactComposerPagesStore").getComposerEntryPoint(a);
            if (!u || !Object.values(b("PagesComposerEntryPoint")).includes(u)) {
                b("FBLogger")(o).info("Cannot perform interception. Invalid composer entry point");
                this.sendResponseToPartner(f);
                return
            }
            var v;
            if (t)
                v = h();
            else {
                var w = b("ReactComposerPagesStore").getInterceptionConfig(a);
                if (w.length === 0) {
                    b("FBLogger")(o).info("Cannot perform interception. interceptionConfig is empty");
                    this.sendResponseToPartner(f);
                    return
                }
                var x = b("ReactComposerPagesStore").getCurrentLocale(a);
                if (x == null || x === "") {
                    b("FBLogger")(o).info("Cannot perform interception. Could not fetch current locale");
                    this.sendResponseToPartner(f);
                    return
                }
                v = g(a, w, r, x, e)
            }
            if (v.length === 0) {
                b("FBLogger")(o).info("No product selected for interception");
                this.sendResponseToPartner(f);
                return
            }
            w = {
                composer_post_text: m,
                session_id: c,
                uuid: c,
                entry_point: k(u),
                run_interception_for_products: v,
                placement: e
            };
            s.length > 0 && (w.photo_ids = s);
            r = j(a);
            r != null && r !== "" && (w.sponsor_id = r);
            n !== null && (w.link_data = n);
            var y = e === "pages_composer";
            y || (t ? b("ReactComposerActions").setIsRunningInterception(a, !0) : b("PagesComposerActions").setIsRunningInterception(a, !0));
            x = b("WebGraphQL").exec(new (b("ComposerInterceptionDecisionWebGraphQLQuery"))({
                target_id: d,
                param: w
            }));
            b("promiseDone")(x, function(d) {
                t ? b("ReactComposerActions").setIsRunningInterception(a, !1) : b("PagesComposerActions").setIsRunningInterception(a, !1),
                q.receiveGraphQLResponse(d, c, a || "", y, f)
            }, function(c) {
                t ? b("ReactComposerActions").setIsRunningInterception(a, !1) : b("PagesComposerActions").setIsRunningInterception(a, !1);
                c = (c = c[0]) != null ? c.message : c;
                b("FBLogger")(o).info(c || "");
                l.sendResponseToPartner(f)
            })
        },
        receiveGraphQLResponse: function(a, c, d, e, f) {
            a = (a = a) != null ? (a = a.node) != null ? (a = a.composer_interception) != null ? a.decision : a : a : a;
            if (!a) {
                b("FBLogger")(o).info("Null value received from server for interception response");
                this.sendResponseToPartner(f);
                return
            }
            e || (p[c] = !0);
            e = b("PagesComposerWWWInterceptionUtils").interceptionProductTypeToAttachmentType(a.interception_product_type || m("none"));
            e.map(function(a) {
                return b("PagesComposerWWWInterceptionActions").setInterceptionDetected(d, a)
            });
            c = {
                shouldPerformInterception: a.should_perform_interception || !1,
                bestExtractedTitle: a.best_extracted_title || "",
                bestExtractedLocationAddress: (c = a.best_extracted_location) == null ? void 0 : c.address,
                bestExtractedLocationLongitude: (e = a.best_extracted_location) == null ? void 0 : e.longitude,
                bestExtractedLocationLatitude: (c = a.best_extracted_location) == null ? void 0 : c.latitude,
                bestExtractedJobType: a.best_extracted_job_type || null,
                bestExtractedWageMin: (e = a.best_extracted_wage) == null ? void 0 : e.min,
                bestExtractedWageMax: (c = a.best_extracted_wage) == null ? void 0 : c.max,
                bestExtractedWageType: (e = a.best_extracted_wage) == null ? void 0 : e.type,
                interceptionProductType: a.interception_product_type || m("none"),
                interceptionType: a.interception_type || l("dialog"),
                bestExtractedStartTime: a.best_extracted_start_time,
                bestExtractedEndTime: a.best_extracted_end_time,
                bestExtractedLink: a.best_extracted_link,
                bestExtractedLinks: a.best_extracted_links,
                bestExtractedDescription: a.best_extracted_description,
                dialogTitle: a.dialog_title,
                dialogSubtitle: a.dialog_subtitle,
                dialogContent: a.dialog_content,
                dialogPrimaryActionTitle: a.dialog_primary_action_title,
                entityId: a.entity_id,
                entityFBID: a.entity_fbid
            };
            b("PagesComposerWWWInterceptionActions").setInterceptionResponse(d, c);
            this.sendResponseToPartner(f, c)
        },
        sendResponseToPartner: function(a, b) {
            b === void 0 && (b = n),
            a && a(b)
        }
    };
    e.exports = {
        PagesComposerWWWInterceptionHandler: q,
        FBLOGGER_NAME: o
    }
}
), null);
__d("PagesComposerWWWInterceptionBrandAwarenessHandler", ["PagesComposerInterceptionFlowType"], (function(a, b, c, d, e, f) {
    "use strict";
    f.handleBrandAwarenessInterceptionResponse = a;
    function a(a, c, d) {
        c = a.brandAwarenessHandler;
        a = b("PagesComposerInterceptionFlowType")[d.interceptionType];
        switch (a) {
        case "dialog":
            c && c(d.bestExtractedTitle, d.entityFBID, d.bestExtractedDescription);
            break
        }
        return
    }
}
), null);
__d("PagesComposerWWWInterceptionBrandTaggingHandler", ["PagesComposerInterceptionFlowType"], (function(a, b, c, d, e, f) {
    "use strict";
    f.handleBrandTaggingInterceptionResponse = a;
    function a(a, c, d) {
        c = a.brandTaggingHandler;
        a = b("PagesComposerInterceptionFlowType")[d.interceptionType];
        switch (a) {
        case "dialog":
            c && c(d.bestExtractedLink, d.bestExtractedTitle);
            break
        }
        return
    }
}
), null);
__d("PagesComposerWWWInterceptionEventHandler", ["fbt", "PagesComposerInterceptionFlowType", "PagesComposerInterceptionProductType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.handleEventInterceptionResponse = a;
    f.convertEventTitleToFbtString = c;
    f.convertEventDescriptionToFbtString = d;
    function a(a, c) {
        a = a.eventHandler;
        var d = b("PagesComposerInterceptionFlowType")[c.interceptionType]
          , e = b("PagesComposerInterceptionProductType")[c.interceptionProductType]
          , f = c.bestExtractedTitle
          , g = c.bestExtractedDescription
          , h = c.bestExtractedStartTime
          , i = c.bestExtractedEndTime;
        c = c.bestExtractedLink;
        a && a(this.convertEventTitleToFbtString(f), this.convertEventDescriptionToFbtString(g), h, i, c, e, d)
    }
    function c(a) {
        a = g._("{title string}", [g._param("title string", a)]);
        return a.toString()
    }
    function d(a) {
        a = g._("{descrption}", [g._param("descrption", a)]);
        return a.toString()
    }
}
), null);
__d("PagesComposerWWWInterceptionFakeNewsHandler", ["PagesComposerInterceptionFlowType"], (function(a, b, c, d, e, f) {
    "use strict";
    f.handleFakeNewsInterceptionResponse = a;
    function a(a, c, d) {
        c = a.fakeNewsHandler;
        a = b("PagesComposerInterceptionFlowType")[d.interceptionType];
        switch (a) {
        case "dialog":
            c && c();
            break
        }
        return
    }
}
), null);
__d("PagesComposerWWWInterceptionLdpHandler", ["PagesComposerInterceptionFlowType", "ReactComposerStatusStore"], (function(a, b, c, d, e, f) {
    "use strict";
    f.handleLdpInterceptionResponse = a;
    function a(a, c, d) {
        a = a.ldpHandler;
        var e = b("PagesComposerInterceptionFlowType")[d.interceptionType];
        c = b("ReactComposerStatusStore").getMessageText(c);
        d = d.bestExtractedTitle;
        switch (e) {
        case "dialog":
            a && a(c, d);
            break
        }
        return
    }
}
), null);
__d("PagesComposerWWWInterceptionSellIntentHandler", ["PagesComposerInterceptionFlowType", "ReactComposerStatusStore"], (function(a, b, c, d, e, f) {
    "use strict";
    f.handleSellIntentInterceptionResponse = a;
    function a(a, c, d) {
        a = a.sellIntentHandler;
        d = b("PagesComposerInterceptionFlowType")[d.interceptionType];
        c = b("ReactComposerStatusStore").getMessageText(c);
        switch (d) {
        case "dialog":
            a && a(c);
            break
        }
        return
    }
}
), null);
__d("PagesComposerWWWInterceptionSendMessageHandler", ["PagesComposerInterceptionFlowType", "ReactComposerStatusStore"], (function(a, b, c, d, e, f) {
    "use strict";
    f.handleSendMessageInterceptionResponse = a;
    function a(a, c, d) {
        a = a.sendMessageHandler;
        d = b("PagesComposerInterceptionFlowType")[d.interceptionType];
        c = b("ReactComposerStatusStore").getMessageText(c);
        switch (d) {
        case "dialog":
            a && a(c);
            break
        }
        return
    }
}
), null);
__d("PagesComposerWWWInterceptionServiceHandler", ["PagesComposerInterceptionFlowType", "ReactComposerStatusStore"], (function(a, b, c, d, e, f) {
    "use strict";
    f.handleServiceInterceptionResponse = a;
    function a(a, c, d) {
        a = a.serviceHandler;
        var e = b("PagesComposerInterceptionFlowType")[d.interceptionType];
        c = b("ReactComposerStatusStore").getMessageText(c);
        d = d.bestExtractedTitle;
        switch (e) {
        case "dialog":
            a && a(c, d);
            break
        }
        return
    }
}
), null);
__d("PagesComposerWWWInterceptionUnpublishedContentHandler", ["invariant", "PagesComposerInterceptionFlowType", "immutable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.handleUnpublishedContentInterceptionResponse = a;
    function a(a, c, d) {
        c = a.unpublishedContentHandler;
        a = b("PagesComposerInterceptionFlowType")[d.interceptionType];
        switch (a) {
        case "dialog":
            d.bestExtractedLinks != null && d.bestExtractedLinks.length > 0 || g(0, 13274);
            d.dialogContent != null && d.dialogContent.length > 0 || g(0, 13275);
            c && c(b("immutable").Set(d.bestExtractedLinks) || b("immutable").Set([]), d.dialogContent || "");
            break
        }
        return
    }
}
), null);
__d("PagesComposerWWWInterceptionUtils", ["ActorURI", "ComposerXMarauderLogger", "FBLogger", "PagesComposerInterceptionFlowType", "PagesComposerInterceptionProductType", "PagesComposerWWWInterceptionBrandAwarenessHandler", "PagesComposerWWWInterceptionBrandTaggingHandler", "PagesComposerWWWInterceptionEventHandler", "PagesComposerWWWInterceptionFakeNewsHandler", "PagesComposerWWWInterceptionHandler", "PagesComposerWWWInterceptionHandlerUtils", "PagesComposerWWWInterceptionJobHandler", "PagesComposerWWWInterceptionLdpHandler", "PagesComposerWWWInterceptionOfferHandler", "PagesComposerWWWInterceptionSellIntentHandler", "PagesComposerWWWInterceptionSendMessageHandler", "PagesComposerWWWInterceptionServiceHandler", "PagesComposerWWWInterceptionUnpublishedContentHandler", "ReactComposerActions", "ReactComposerAttachmentStore", "ReactComposerAttachmentType", "ReactComposerOptimisticPostingActions", "ReactComposerPagesStore", "getJSEnumSafe", "isEmpty"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("PagesComposerWWWInterceptionHandler").FBLOGGER_NAME, i = b("PagesComposerWWWInterceptionHandler").PagesComposerWWWInterceptionHandler, j = b("PagesComposerWWWInterceptionHandlerUtils").mapInterceptionEnumProductKeyFromValue;
    a = {
        performInterceptAttemptsAndSendPublishedPostV2: function(a, b, c, d, e) {
            var f = this;
            e === void 0 && (e = "pages_composer_post_button");
            i.performIntercept(a.composerID, d, a.targetID, e, function(d) {
                return f._handleInterceptionResponseV2(d, a.composerID, a.targetID, b, c)
            })
        },
        interceptionProductTypeToAttachmentType: function(a) {
            switch (a) {
            case j("messagepage"):
                return ["MESSAGE"];
            case j("ldp"):
                return ["LOCAL_DEV_PLATFORM"];
            case j("sell_message"):
                return ["MESSAGE"];
            case j("insights_photo_upsell"):
                return ["IG_PHOTO_REMINDER", "MEDIA"];
            case j("service"):
                return ["CTA"];
            default:
                return []
            }
        },
        logInterceptionEvent: function(a, c, d, e, f, g) {
            var h = {};
            d && (h.interception_product_type = d);
            e && (h.interception_type = e);
            f != null && f !== "" && (h.post_id = f);
            g && (h.interception_payload = g);
            b("ComposerXMarauderLogger").logEvent(c, a, {
                extraData: h
            })
        },
        _handleInterceptionResponseV2: function(a, c, d, e, f) {
            if (!Object.prototype.hasOwnProperty.call(b("PagesComposerInterceptionProductType"), a.interceptionProductType)) {
                b("FBLogger")(h).mustfix("Invalid interception product type returned by graphQL");
                e();
                return
            }
            if (!Object.prototype.hasOwnProperty.call(b("PagesComposerInterceptionFlowType"), a.interceptionType)) {
                b("FBLogger")(h).mustfix("Invalid interception type returned by graphQL");
                e();
                return
            }
            if (!a.shouldPerformInterception) {
                e();
                return
            }
            var g = b("getJSEnumSafe")(b("PagesComposerInterceptionProductType"), a.interceptionProductType);
            switch (g) {
            case "pages_integrity_fake_news":
                b("PagesComposerWWWInterceptionFakeNewsHandler").handleFakeNewsInterceptionResponse(f, c, a);
                break;
            case "pages_integrity_unpublished_content":
                b("PagesComposerWWWInterceptionUnpublishedContentHandler").handleUnpublishedContentInterceptionResponse(f, c, a);
                break;
            case "job":
                b("PagesComposerWWWInterceptionJobHandler").handleJobInterceptionResponse(f, c, a);
                break;
            case "ldp":
                b("PagesComposerWWWInterceptionLdpHandler").handleLdpInterceptionResponse(f, c, a);
                break;
            case "service":
                b("PagesComposerWWWInterceptionServiceHandler").handleServiceInterceptionResponse(f, c, a);
                break;
            case "messagepage":
                b("PagesComposerWWWInterceptionSendMessageHandler").handleSendMessageInterceptionResponse(f, c, a);
                break;
            case "offer":
                b("PagesComposerWWWInterceptionOfferHandler").handleOfferInterceptionResponse(f, d, a);
                break;
            case "event":
                b("PagesComposerWWWInterceptionEventHandler").handleEventInterceptionResponse(f, a);
                break;
            case "brandawareness":
                b("PagesComposerWWWInterceptionBrandAwarenessHandler").handleBrandAwarenessInterceptionResponse(f, c, a);
                break;
            case "brandtagging":
                b("PagesComposerWWWInterceptionBrandTaggingHandler").handleBrandTaggingInterceptionResponse(f, c, a);
                break;
            case "sell_message":
                b("PagesComposerWWWInterceptionSellIntentHandler").handleSellIntentInterceptionResponse(f, c, a);
                break;
            default:
                e();
                break
            }
        },
        startPosting: function(a) {
            var c, d = b("ReactComposerPagesStore").getPagesComposerConfig(a), e = b("ReactComposerPagesStore").getPagesComposerContextConfig(a);
            if (!d || (g || (g = b("isEmpty")))(d) || !e || (g || (g = b("isEmpty")))(e))
                return;
            var f = e.actorID
              , h = e.targetID;
            if (!!((c = e) != null ? (c = c.gks) != null ? c.optimisticPosting : c : c) && !!((c = e) != null ? (c = c.gks) != null ? c.useNonBlockingMediaUpload : c : c)) {
                c = (e = b("ReactComposerAttachmentStore").getSelectedAttachmentID(a)) != null ? e : b("ReactComposerAttachmentType").STATUS;
                c !== b("ReactComposerAttachmentType").MEDIA && c !== b("ReactComposerAttachmentType").STATUS && (c = b("ReactComposerAttachmentType").STATUS);
                b("ReactComposerOptimisticPostingActions").startOptimisticallyPosting(a, d, c, f, h)
            } else
                b("ReactComposerActions").postStarted(a, {
                    actorID: f,
                    config: d,
                    targetID: h
                })
        },
        fetchActorURI: function(a, c) {
            return b("ActorURI").create(a.getURI(), c)
        }
    };
    e.exports = a
}
), null);
__d("UnifiedInterceptionInterceptAcceptFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744453");
    c = b("FalcoLoggerInternal").create("unified_interception_intercept_accept", a);
    e.exports = c
}
), null);
__d("UnifiedInterceptionInterceptCreateFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744454");
    c = b("FalcoLoggerInternal").create("unified_interception_intercept_create", a);
    e.exports = c
}
), null);
__d("UnifiedInterceptionInterceptRejectFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744455");
    c = b("FalcoLoggerInternal").create("unified_interception_intercept_reject", a);
    e.exports = c
}
), null);
__d("JobInterceptionPageTargetLoggingUtils", ["UnifiedInterceptionInterceptAcceptFalcoEvent", "UnifiedInterceptionInterceptCreateFalcoEvent", "UnifiedInterceptionInterceptRejectFalcoEvent"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logAcceptEvent = a;
    f.logRejectEvent = c;
    f.logCreateEvent = d;
    function a(a, c, d, e) {
        b("UnifiedInterceptionInterceptAcceptFalcoEvent").log(function() {
            var b;
            return {
                event_data: {},
                event_location: "unknown",
                interception_entry_point: "pages_feed",
                interception_flow: a,
                interception_placement: (b = e) != null ? b : "composer_post_button",
                interception_product: "job",
                interception_target_type: "page",
                target_id: c,
                waterfall_session_id: d
            }
        })
    }
    function c(a, c, d, e) {
        b("UnifiedInterceptionInterceptRejectFalcoEvent").log(function() {
            var b;
            return {
                event_data: {},
                event_location: "unknown",
                interception_entry_point: "pages_feed",
                interception_flow: a,
                interception_placement: (b = e) != null ? b : "composer_post_button",
                interception_product: "job",
                interception_target_type: "page",
                target_id: c,
                waterfall_session_id: d
            }
        })
    }
    function d(a, c, d, e, f) {
        b("UnifiedInterceptionInterceptCreateFalcoEvent").log(function() {
            return {
                event_data: {
                    partner_entity_id: c,
                    post_id: e
                },
                event_location: "unknown",
                interception_entry_point: "pages_feed",
                interception_flow: a,
                interception_placement: "composer_post_button",
                interception_product: "job",
                interception_target_type: "page",
                target_id: d,
                waterfall_session_id: f
            }
        })
    }
}
), null);
__d("XJobInterceptDropoffController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/job_posting/intercept_dropoff/", {
        source: {
            type: "Enum",
            enumType: 1
        }
    })
}
), null);
__d("PagesComposerWWWInterceptionJobHandler", ["AsyncRequest", "JobInterceptionPageTargetLoggingUtils", "PagesComposerInterceptionFlowType", "PagesComposerInterceptionProductType", "PagesComposerWWWInterceptionUtils", "ReactComposerStatusStore", "XJobInterceptDropoffController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.handleJobInterceptionResponse = a;
    f.logDialogAcceptEvent = c;
    f.publishOriginalPost = d;
    function a(a, c, d) {
        a = a.jobHandler;
        var e = b("PagesComposerInterceptionFlowType")[d.interceptionType]
          , f = b("PagesComposerInterceptionProductType")[d.interceptionProductType];
        c = b("ReactComposerStatusStore").getMessageText(c);
        var g = d.bestExtractedTitle
          , h = d.bestExtractedJobType
          , i = d.bestExtractedDescription
          , j = {
            maxWageAmount: d.bestExtractedWageMax,
            minWageAmount: d.bestExtractedWageMin
        }
          , k = d.bestExtractedWageType
          , l = d.bestExtractedLocationAddress
          , m = d.bestExtractedLocationLongitude;
        d = d.bestExtractedLocationLatitude;
        a(c, g, h, j, k, l, d, m, i, f, e);
        return
    }
    function c(a, c, d) {
        b("PagesComposerWWWInterceptionUtils").logInterceptionEvent(a, "pages_composer_interception_dialog_accept", "job", "dialog"),
        b("JobInterceptionPageTargetLoggingUtils").logAcceptEvent("dialog", c, d)
    }
    function d(a, c, d, e, f) {
        if (a === null || a === void 0 || a === "")
            return;
        b("PagesComposerWWWInterceptionUtils").logInterceptionEvent(a, "pages_composer_interception_dialog_reject", "job", "dialog");
        b("JobInterceptionPageTargetLoggingUtils").logRejectEvent("dialog", c, d);
        c = b("XJobInterceptDropoffController").getURIBuilder().setEnum("source", e).getURI();
        new (b("AsyncRequest"))().setURI(c).send();
        f ? f() : b("PagesComposerWWWInterceptionUtils").startPosting(a)
    }
}
), null);
__d("PageInterceptionDialogDecision", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BRANDAWARENESS: "brandawareness",
        EVENT: "event",
        FOODDRINK: "fooddrink",
        JOB: "job",
        MARKETPLACE_VERTICALS: "marketplace_verticals",
        MESSAGEPAGE: "messagepage",
        NONE: "none",
        OFFER: "offer",
        SALESPROMO: "salespromo",
        SELL: "sell",
        SELL_MESSAGE: "sell_message",
        SERVICE: "service"
    });
    e.exports = a
}
), null);
__d("XPagesInterceptDropoffController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/composer/intercept_dropoff/", {
        vertical: {
            type: "Enum",
            required: !0,
            enumType: 1
        }
    })
}
), null);
__d("PagesComposerWWWInterceptionOfferHandler", ["AsyncRequest", "PageInterceptionDialogDecision", "PagesComposerActions", "PagesComposerInterceptionFlowType", "PagesComposerWWWInterceptionUtils", "ReactComposerScrapedAttachmentStore", "ReactComposerStatusActions", "ReactComposerStatusStore", "XPageOfferXComposerController", "XPagesInterceptDropoffController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.handleOfferInterceptionResponse = a;
    f.fetchOfferComposerBaseURI = c;
    f.publishOriginalPost = d;
    f.logOfferAcceptInterception = e;
    function a(a, c, d) {
        a = a.offerHandler;
        d = b("PagesComposerInterceptionFlowType")[d.interceptionType];
        a && a(c, (a = d) != null ? a : "dialog");
        return
    }
    function c(a, c, d, e) {
        var f = b("ReactComposerScrapedAttachmentStore").getAttachmentConfig(a)
          , g = b("ReactComposerStatusStore").getMessage(a);
        g = b("XPageOfferXComposerController").getURIBuilder().setEnum("referrer", "olp_modal_upsell").setString("description", g).setFBIDVector("photo_ids", d).setString("composer_id", a).setString("intercept_session_id", c).setStringVector("photo_urls", f && f.params && f.params.images ? f.params.images : null).setEnum("interception_flow_type", e);
        return g
    }
    function d(a, c) {
        if (a == null)
            return;
        b("PagesComposerWWWInterceptionUtils").logInterceptionEvent(a, "pages_composer_interception_dialog_reject", "offer", c);
        new (b("AsyncRequest"))(b("XPagesInterceptDropoffController").getURIBuilder().setEnum("vertical", b("PageInterceptionDialogDecision").OFFER).getURI()).send();
        b("PagesComposerActions").abandonOfferUpsell(a);
        c = b("ReactComposerStatusStore").getOriginalEditorState(a);
        c && b("ReactComposerStatusActions").setEditorState(a, c);
        b("PagesComposerWWWInterceptionUtils").startPosting(a)
    }
    function e(a, c) {
        b("PagesComposerWWWInterceptionUtils").logInterceptionEvent(a, "pages_composer_interception_dialog_accept", "offer", c)
    }
}
), null);
__d("ReactComposerSproutItem.react", ["cx", "Focus", "Image.react", "JSResource", "Link.react", "React", "TooltipData", "XUISpinner.react", "lazyLoadComponent", "prop-types", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("lazyLoadComponent")(b("JSResource")("ReactComposerSproutItemNewBadge.react").__setRef("ReactComposerSproutItem.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                hasBeenClicked: !1
            },
            c.$1 = function() {
                c.setState({
                    hasBeenClicked: !0
                }),
                c.props.onClick && c.props.onClick()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.loading ? h.jsx(b("XUISpinner.react"), {
                className: "_20j1",
                background: "dark",
                size: "small"
            }) : null
              , c = this.props.uiConfig
              , d = !this.context.hasFinishedSproutPromotion && this.context.promotedSprout && this.props.uiConfig.sprout && this.context.promotedSprout === this.props.uiConfig.sprout ? h.jsx(h.Suspense, {
                fallback: null,
                children: h.jsx(i, {
                    composerID: this.context.composerID,
                    hasSproutBeenClicked: this.state.hasBeenClicked,
                    promotionID: this.context.promotionID,
                    title: this.context.subtitle && this.context.subtitle
                })
            }) : null
              , e = Boolean(c.showTooltipOnlyWhenDisabled) ? null : babelHelpers["extends"]({}, b("TooltipData").propsFor(c.tooltip))
              , f = this.props;
            f.onClick;
            f = babelHelpers.objectWithoutPropertiesLoose(f, ["onClick"]);
            return h.jsx(b("Link.react"), {
                "aria-label": c == null ? void 0 : c.ariaLabel,
                "aria-pressed": this.props.hideFromScreenReaders ? void 0 : this.props.highlighted,
                "data-testid": void 0,
                onClick: this.$1,
                role: this.props.hideFromScreenReaders ? "presentation" : this.props.linkRole || "button",
                tabIndex: this.props.hideFromScreenReaders ? -1 : void 0,
                children: h.jsxs("div", babelHelpers["extends"]({}, f, {
                    className: b("joinClasses")("_m_1" + (this.props.loading ? " _20jn" : "") + (d !== null ? " _4c9w" : ""), c && c.className),
                    onMouseDown: function(a) {
                        return a.preventDefault()
                    },
                    ref: "sproutItemRoot",
                    style: this.props.highlighted ? {
                        background: c.highlightedColor
                    } : null,
                    "data-tooltip-delay": "500"
                }, e, {
                    children: [h.jsx(b("Image.react"), {
                        className: "_4a0a",
                        src: c.icon
                    }), h.jsx("div", {
                        className: "_2aha",
                        "aria-hidden": this.props.hideFromScreenReaders,
                        children: c.label
                    }), d, a]
                }))
            })
        }
        ;
        d.focus = function() {
            b("Focus").set(this.refs.sproutItemRoot)
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a;
    a.contextTypes = {
        hasFinishedSproutPromotion: (c = b("prop-types")).bool.isRequired,
        promotionID: c.number,
        promotedSprout: c.string,
        subtitle: c.string,
        composerID: c.string
    };
    a.defaultProps = {
        highlighted: !1
    }
}
), null);
__d("ReactComposerEllipsisSproutContainer.react", ["csx", "cx", "fbt", "ix", "DOM", "DOMTraverser", "Focus", "React", "ReactComposerActions", "ReactComposerAttachmentActions", "ReactComposerContextTypes", "ReactComposerLoggingName", "ReactComposerSproutItem.react", "ReactComposerStore", "TabbableElements", "ge"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$2 = function(a) {
                d.context.gks && d.context.gks.lazySproutsExpand && d.$3(),
                b("ReactComposerAttachmentActions").selectAttachmentLoggingOnlyDoNotUse(d.context.composerID, "ELLIPSIS", b("ReactComposerLoggingName").ELLIPSIS_SPROUT, b("ReactComposerStore").getSproutSurface(d.context.composerID))
            }
            ,
            d.$1 = function(a) {
                d.$3()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return k.jsx("span", {
                onKeyDown: this.$1,
                children: k.jsx(b("ReactComposerSproutItem.react"), {
                    uiConfig: {
                        ariaLabel: i._("T\u00f9y ch\u1ecdn \u0111\u0103ng kh\u00e1c"),
                        label: "",
                        icon: j("28705"),
                        iconSrc: "/images/composer/sprouts/composer_sprout_ellipsis.png",
                        className: "_1gr3",
                        loggingName: b("ReactComposerLoggingName").ELLIPSIS_SPROUT,
                        webDriverTestID: "ellipsis-sprout"
                    },
                    onClick: this.$2
                })
            })
        }
        ;
        d.$3 = function() {
            var a = this;
            b("ReactComposerActions").expandSprouts(this.context.composerID);
            window.setTimeout(function() {
                var c = b("ge")(a.context.composerID)
                  , d = b("DOM").find(c, "._16vl");
                c = b("DOMTraverser").nextFilteredNode(c, d, function(a) {
                    return b("TabbableElements").isTabbable(a)
                });
                b("Focus").set(c)
            }, 0)
        }
        ;
        return c
    }(k.PureComponent);
    a.contextTypes = b("ReactComposerContextTypes");
    e.exports = a
}
), null);
__d("ReactComposerLazySproutContainer.react", ["React", "ReactComposerContextTypes", "ReactComposerSproutItem.react", "ReactComposerTaggerActions"], (function(a, b, c, d, e, f) {
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
                loading: !1
            },
            d.$1 = function() {
                d.setState({
                    loading: !0
                }),
                d.props.uiConfig.sproutTaggerID && b("ReactComposerTaggerActions").selectTagger(d.context.composerID, d.props.uiConfig.loggingName, d.props.uiConfig.sproutTaggerID, !0)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("ReactComposerSproutItem.react"), {
                uiConfig: this.props.uiConfig,
                onClick: this.$1,
                loading: this.state.loading
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.contextTypes = b("ReactComposerContextTypes");
    e.exports = a
}
), null);
__d("ReactComposerSproutsStyleUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        SPROUT_HEIGHT_PX: 32,
        SPROUT_MARGIN_PX: 8,
        SPROUT_LIST_VERTICAL_PADDING_PX: 8,
        SPROUTS_PER_ROW: 2,
        calculateVisibleSproutWindow: function(a, b) {
            a = this.calculateSproutContainerHeight(a);
            var c = this.SPROUT_HEIGHT_PX + this.SPROUT_MARGIN_PX
              , d = Math.round(Math.max(b - this.SPROUT_LIST_VERTICAL_PADDING_PX, 0) / c);
            b = Math.round((b + a - 2 * this.SPROUT_LIST_VERTICAL_PADDING_PX) / c);
            return {
                start: d,
                end: b
            }
        },
        calculateVisibleSprouts: function(a, b) {
            var c = {};
            for (var d = 0; d < b.length; d++) {
                var e = d >= a.start * this.SPROUTS_PER_ROW && d < (a.end + 1) * this.SPROUTS_PER_ROW;
                c[b[d]] = e
            }
            return c
        },
        calculateVisibleInlineSprouts: function(a, b) {
            var c = {};
            for (var d = 0; d < b.length; d++) {
                var e = a.indexOf(b[d]) >= 0;
                c[b[d]] = e
            }
            return c
        },
        calculateSproutContainerHeight: function(a) {
            return a * this.SPROUT_HEIGHT_PX + Math.floor(a) * this.SPROUT_MARGIN_PX - this.SPROUT_LIST_VERTICAL_PADDING_PX
        }
    };
    e.exports = a
}
), null);
__d("ReactComposerSproutsListRenderer.react", ["cx", "invariant", "ExtensibleSproutsItemType", "Grid.react", "ProductTaggingCreatorTypedLogger", "React", "ReactComposerEllipsisSproutContainer.react", "ReactComposerLoggingActions", "ReactComposerSproutBadgePromotionUtils", "ReactComposerSproutsDisplayState", "ReactComposerSproutsStyleUtils", "ReactComposerStore", "ReactComposerTaggerStore", "ReactComposerTaggerType", "SproutConfigConstants", "debounce", "getObjectValues", "joinClasses", "prop-types", "ReactComposerContextTypes", "qex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("Grid.react").GridItem;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$8 = function() {
                c.$3("inline_sprouts_scrolled_in_full_screen")
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.getChildContext = function() {
            return {
                hasFinishedSproutPromotion: this.props.hasFinishedSproutPromotion,
                promotedSprout: this.props.config.sproutsPromotionConfig && this.props.config.sproutsPromotionConfig.sprout,
                subtitle: this.props.config.sproutsPromotionConfig && this.props.config.sproutsPromotionConfig.subtitle,
                promotionID: this.props.config.sproutsPromotionConfig && this.props.config.sproutsPromotionConfig.promotionID
            }
        }
        ;
        d.componentDidMount = function() {
            var a = this;
            this.props.sproutsDisplayState === b("ReactComposerSproutsDisplayState").EXPANDED ? window.setTimeout(function() {
                a.$3("inline_sprouts_initial_state")
            }, 0) : this.$4("inline_sprouts_initial_state")
        }
        ;
        d.componentDidUpdate = function(a) {
            this.props.sproutsDisplayState === b("ReactComposerSproutsDisplayState").EXPANDED && a.sproutsDisplayState === b("ReactComposerSproutsDisplayState").INLINE && this.$3("inline_sprouts_state_changed"),
            this.props.sproutsDisplayState === b("ReactComposerSproutsDisplayState").INLINE && a.sproutsDisplayState === b("ReactComposerSproutsDisplayState").EXPANDED && this.$4("inline_sprouts_state_changed")
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props.sproutsDisplayState === b("ReactComposerSproutsDisplayState").EXPANDED ? this.$5() : this.$6()
              , d = this.$7();
            return i.jsx("div", {
                className: "_16ve" + (this.props.sproutsDisplayState !== b("ReactComposerSproutsDisplayState").EXPANDED ? " _7i31" : ""),
                style: d,
                ref: function(b) {
                    return a.$1 = b
                },
                onScroll: this.context.gks.extensibleSproutsNumRows && b("debounce")(this.$8),
                children: c
            })
        }
        ;
        d.$7 = function() {
            var a = b("ReactComposerStore").getTargetType(this.context.composerID);
            if (!this.context.gks.lazySproutsExpand && a !== "group" && a !== "page" && this.context.composerType !== "edit_composer" && this.context.composerType !== "edit_dialog" && this.context.composerType !== "work_group_learning") {
                a = parseFloat("2.5");
                a = b("ReactComposerSproutsStyleUtils").calculateSproutContainerHeight(a);
                return {
                    maxHeight: a + "px",
                    overflowY: "auto"
                }
            } else
                return {}
        }
        ;
        d.$3 = function(a) {
            if (!this.$1)
                return;
            var c = b("ReactComposerSproutsStyleUtils").calculateVisibleSproutWindow(this.context.gks.extensibleSproutsNumRows, this.$1.scrollTop);
            c = b("ReactComposerSproutsStyleUtils").calculateVisibleSprouts(c, this.props.orderedSprouts);
            b("ReactComposerLoggingActions").sproutVisibilityUpdated(this.context.composerID, c, a, this.props.sproutsDisplayState, this.props.config.sproutsPromotionConfig ? this.props.config.sproutsPromotionConfig.sprout : null, this.props.config.sproutsPromotionConfig ? this.props.config.sproutsPromotionConfig.promotionID : null);
            if (this.props.config.sproutsPromotionConfig) {
                a = this.props.config.sproutsPromotionConfig.sprout;
                !this.props.hasLoggedSproutPromotionView && a && (c[a] === !0 && (this.props.config.sproutsPromotionConfig.promotionID && b("ReactComposerSproutBadgePromotionUtils").addView(this.props.config.sproutsPromotionConfig.promotionID, this.context.composerID)))
            }
            c = b("ReactComposerTaggerStore").isDisabled(this.context.composerID, b("ReactComposerTaggerType").PRODUCT);
            if (!c) {
                a = b("ReactComposerTaggerStore").getProductTaggingPlatform(this.context.composerID);
                new (b("ProductTaggingCreatorTypedLogger"))().setEvent("Imp_PhotoComposerWithTagPill").setPlatform(a).setReferralSource("composer").setCreatorID(this.context.targetID).log()
            }
        }
        ;
        d.$4 = function(a) {
            var c = b("ReactComposerSproutsStyleUtils").calculateVisibleInlineSprouts(this.$2, this.props.orderedSprouts);
            b("ReactComposerLoggingActions").sproutVisibilityUpdated(this.context.composerID, c, a, this.props.sproutsDisplayState, this.props.config.sproutsPromotionConfig ? this.props.config.sproutsPromotionConfig.sprout : null, this.props.config.sproutsPromotionConfig ? this.props.config.sproutsPromotionConfig.promotionID : null)
        }
        ;
        d.$9 = function(a, c) {
            var d = b("joinClasses")("_5xmp", "fbReactComposerAttachmentSelector_" + c);
            return i.jsx("li", {
                className: d,
                children: a
            }, c)
        }
        ;
        d.$6 = function() {
            var a = [];
            this.$2 = [];
            var c = this.props.config.sproutsConfig
              , d = this.$10(this.props.orderedSprouts);
            if (c)
                for (var e = 0; e < d.length; e++) {
                    if (!this.$11(c[d[e]]) || !this.$12(c[d[e]]) || this.$13(d[e]))
                        continue;
                    if (this.$14(d[e], a))
                        break
                }
            a.length <= 3 || h(0, 4256);
            return i.jsxs("ul", {
                "data-testid": void 0,
                className: "_16vg" + (a.length === 3 ? " _1oxv" : ""),
                children: [a, ((e = this.context) != null ? (e = e.gks) != null ? e.shouldShowSimplifiedComposer : e : e) ? null : this.$9(i.jsx(b("ReactComposerEllipsisSproutContainer.react"), {}), "ELLIPSIS")]
            })
        }
        ;
        d.$5 = function() {
            var a = []
              , c = this.props.config.sproutsConfig
              , d = this.$10(this.props.orderedSprouts);
            if (c)
                for (var e = 0; e < d.length; e++) {
                    if (!this.$11(c[d[e]]) || this.$13(d[e]))
                        continue;
                    this.props.sprouts[d[e]] || h(0, 4257, d[e]);
                    a.push(i.jsx(j, {
                        className: "fbReactComposerAttachmentSelector_" + d[e],
                        children: this.$15(d[e])
                    }, d[e]))
                }
            return i.jsx("div", {
                "data-testid": void 0,
                className: "_16vl",
                children: i.jsx(b("Grid.react"), {
                    cols: 2,
                    fixed: !0,
                    spacing: b("joinClasses")("pas", "_1fng"),
                    children: a
                })
            })
        }
        ;
        d.$11 = function(a) {
            return !!a && a.enabled
        }
        ;
        d.$12 = function(a) {
            return this.$11(a)
        }
        ;
        d.$13 = function(a) {
            return !!this.props.isGroupTabSelected && !this.$16(a)
        }
        ;
        d.$16 = function(a) {
            return a === "MINUTIAE" || a === "LOCATION" || a === "WITH_TAG" || a === "MEDIA"
        }
        ;
        d.$14 = function(a, c) {
            this.props.sprouts[a] || h(0, 4257, a);
            this.$2.push(a);
            c.push(this.$9(this.props.sprouts[a], a));
            return c.length >= b("SproutConfigConstants").MAX_INLINE_SPROUTS_COUNT ? !0 : !1
        }
        ;
        d.$15 = function(a) {
            var b = this.props.sprouts[a];
            if (a === "TAG_PRODUCT") {
                a = b.props;
                return i.cloneElement(b, {
                    props: babelHelpers["extends"]({}, a, {
                        config: this.props.config
                    })
                })
            } else
                return b
        }
        ;
        d.$10 = function(a) {
            a = [].concat(a);
            if (a.includes("MINUTIAE") && a.includes("TAG_PRODUCT") && b("qex")._("1332324")) {
                var c = a.indexOf("TAG_PRODUCT")
                  , d = 2;
                c > d && (a.splice(c, 1),
                a.splice(d, 0, "TAG_PRODUCT"))
            }
            return a
        }
        ;
        return c
    }(i.PureComponent);
    a.contextTypes = b("ReactComposerContextTypes");
    a.childContextTypes = {
        hasFinishedSproutPromotion: (c = b("prop-types")).bool.isRequired,
        promotionID: c.number,
        promotedSprout: c.oneOf(b("getObjectValues")(b("ExtensibleSproutsItemType"))),
        subtitle: c.string
    };
    e.exports = a
}
), null);
__d("ReactComposerSproutsList.react", ["ErrorBoundary.react", "ExtensibleSproutsItemType", "FBLogger", "React", "ReactComposerContextTypes", "ReactComposerLazySproutContainer.react", "ReactComposerSproutItem.react", "ReactComposerSproutsDefaultUIConfigTyped", "ReactComposerSproutsListRenderer.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("ReactComposerSproutsListRenderer.react"), babelHelpers["extends"]({}, this.props, {
                sprouts: this.$1()
            }))
        }
        ;
        d.$1 = function() {
            var a = this.props.config.sproutsConfig
              , c = {};
            if (a)
                for (var d in a) {
                    var e, f = b("ExtensibleSproutsItemType")[d];
                    if (((e = a[f]) == null ? void 0 : e.enabled) !== !0)
                        continue;
                    e = b("ReactComposerSproutsDefaultUIConfigTyped").sproutsUIConfigMap[f];
                    e || b("FBLogger")("fb4c").mustfix("SproutID %s is not in the config %s.", f, JSON.stringify(b("ReactComposerSproutsDefaultUIConfigTyped").sproutsUIConfigMap));
                    this.props.config.sproutsPromotionConfig && this.props.config.sproutsPromotionConfig.sprout === f && (e.sprout = f);
                    e != null && (e.hasFormatting = this.props.richTextInStatus);
                    var h = this.props.fakeSprouts !== !0 ? this.props.sproutModules[f] || b("ReactComposerLazySproutContainer.react") : b("ReactComposerSproutItem.react");
                    c[f] = g.jsx(b("ErrorBoundary.react"), {
                        children: g.jsx(h, {
                            uiConfig: e,
                            config: this.props.config
                        })
                    })
                }
            return c
        }
        ;
        return c
    }(g.PureComponent);
    a.contextTypes = b("ReactComposerContextTypes");
    e.exports = a
}
), null);
__d("ReactComposerSproutsListContainer.react", ["invariant", "ExtensibleSproutsItemType", "FluxContainer", "React", "ReactComposerContextTypes", "ReactComposerSproutsDisplayState", "ReactComposerSproutsList.react", "ReactComposerStatusStore", "ReactComposerStore", "ifRequired", "promiseDone"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            b = a.call(this, b) || this;
            b.state = {
                additionalSproutModules: {},
                bootloading: !1,
                orderedSprouts: []
            };
            b.$2 = {};
            return b
        }
        c.getStores = function() {
            var a = [b("ReactComposerStore"), b("ReactComposerStatusStore")];
            b("ifRequired")("ReactComposerPostToGroupStore", function(b) {
                a.push(b)
            });
            return a
        }
        ;
        c.calculateState = function(a, c, d) {
            a = !1;
            b("ifRequired")("ReactComposerPostToGroupStore", function(b) {
                a = b.getIsTabSelected(d.composerID)
            });
            return {
                sproutsDisplayState: (c = b("ReactComposerStore")).getSproutsDisplayState(d.composerID),
                isGroupTabSelected: a,
                hasLoggedSproutPromotionView: c.hasLoggedSproutPromotionView(d.composerID),
                hasFinishedSproutPromotion: c.hasFinishedSproutPromotion(d.composerID),
                orderedSprouts: c.getOrderedSprouts(d.composerID),
                richTextInStatus: b("ReactComposerStatusStore").getRichTextBlocks(d.composerID) !== null
            }
        }
        ;
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = !1,
            (this.state.sproutsDisplayState === b("ReactComposerSproutsDisplayState").EXPANDED || this.context.gks && this.context.gks.lazySproutsExpand) && this.$3()
        }
        ;
        d.componentDidUpdate = function() {
            (this.state.sproutsDisplayState === b("ReactComposerSproutsDisplayState").EXPANDED || this.context.gks && this.context.gks.lazySproutsExpand) && this.$3()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 = !0
        }
        ;
        d.render = function() {
            this.context.jsModules.sprouts = Object.assign({}, this.context.jsModules.sprouts, this.state.additionalSproutModules);
            return h.jsx(b("ReactComposerSproutsList.react"), {
                config: this.props.config,
                sproutsDisplayState: this.state.sproutsDisplayState,
                sproutModules: this.context.jsModules.sprouts,
                fakeSprouts: this.props.fakeSprouts,
                isGroupTabSelected: this.state.isGroupTabSelected,
                hasLoggedSproutPromotionView: this.state.hasLoggedSproutPromotionView,
                hasFinishedSproutPromotion: this.state.hasFinishedSproutPromotion,
                orderedSprouts: this.state.orderedSprouts,
                richTextInStatus: this.state.richTextInStatus
            })
        }
        ;
        d.$3 = function() {
            var a = this;
            if (this.state.bootloading)
                return;
            var c = this.props.config.sproutsConfig
              , d = {};
            for (var e in c) {
                var f = b("ExtensibleSproutsItemType")[e];
                if (!c[f].enabled || !c[f].lazyLoad)
                    continue;
                this.context.jsResources.sprouts[f] || g(0, 4479, f);
                d[f] = this.context.jsResources.sprouts[f]
            }
            f = function(c) {
                b("promiseDone")(d[c].load(), function(b) {
                    if (a.$1)
                        return;
                    a.$2[c] = b;
                    a.setState({
                        additionalSproutModules: Object.assign({}, a.$2)
                    })
                })
            }
            ;
            for (var h in d)
                f(h);
            this.setState({
                bootloading: !0
            })
        }
        ;
        return c
    }(h.Component);
    a.contextTypes = b("ReactComposerContextTypes");
    c = b("FluxContainer").create(a, {
        withContext: !0,
        withProps: !0
    });
    e.exports = c
}
), null);
__d("SUIToken.react", ["cx", "React", "SUICloseButton.react", "SUITheme", "Tooltip", "autoFlipStyleProps", "joinClasses", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 250;
    a = {
        disabled: !1
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = function(a) {
                a.preventDefault(),
                a.stopPropagation(),
                c.props.onRemove != null && c.props.onRemove(c.props.entry)
            }
            ,
            c.$2 = function() {
                c.props.onClick != null && c.props.onClick(c.props.entry)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a, c = b("SUITheme").get(this).SUIToken;
            a = babelHelpers["extends"]({}, c.typeStyle, {
                height: (a = c.height) != null ? a : 24,
                backgroundColor: (a = this.props.backgroundColor) != null ? a : c.backgroundColor,
                color: (a = this.props.color) != null ? a : c.color
            }, c.border || {}, this.props.style, {
                marginRight: c.marginRight
            });
            var d = this.props
              , e = d.disabled
              , f = d.entry
              , g = d.getHovercardURI
              , j = d.icon;
            d = d.onRemove;
            var k;
            j && (k = h.cloneElement(j, {
                className: b("joinClasses")(j.props.className, "_4asf"),
                size: j.props.size
            }));
            var l;
            d && this.props.isRemovable !== !1 && (l = h.jsx(b("SUICloseButton.react"), {
                disabled: e,
                onClick: this.$1,
                shade: c.closeButtonShade,
                style: b("autoFlipStyleProps")({
                    marginLeft: "8px"
                })
            }));
            var m;
            g !== void 0 && f !== void 0 && (m = g(f));
            j = "";
            this.props.label != null && (j = this.props.label);
            d = "overflow";
            this.props.tooltip != null && (j = this.props.tooltip,
            d = null);
            return h.jsxs("div", {
                className: b("joinClasses")("_2vug" + (!!k && !this.props.label ? " _4ash" : "") + (!!this.props.onClick && !this.props.disabled ? " _2vui" : "") + (this.props.margin ? "" : " _4ri9") + (this.props.isDragDropEnabled ? " _8c-z" : ""), this.props.className, this.props.margin),
                "data-hovercard": m,
                "data-testid": void 0,
                "data-tooltip-delay": i,
                onClick: !this.props.disabled && this.props.onClick ? this.$2 : void 0,
                role: "presentation",
                style: a,
                children: [this.props.isDragDropEnabled === !0 && c.gripHandleIcon, h.jsxs("div", babelHelpers["extends"]({}, b("Tooltip").propsFor(j.toString()), {
                    className: "_2vuj",
                    "data-testid": void 0,
                    "data-tooltip-display": d,
                    children: [k, this.props.label]
                })), l]
            })
        }
        ;
        return c
    }(h.PureComponent);
    c.propTypes = {
        entry: (d = b("prop-types")).any,
        getHovercardURI: d.func,
        icon: d.node,
        label: d.node,
        margin: d.string,
        onRemove: d.func,
        disabled: d.bool,
        theme: d.instanceOf(b("SUITheme")),
        tooltip: d.node,
        color: d.string,
        backgroundColor: d.string
    };
    c.defaultProps = a;
    f = b("withSUITheme")(c);
    e.exports = f
}
), null);
__d("SUITabItem.react", ["ix", "cx", "FDSPrivateFocusLevelType", "FDSPrivateThemeContext.react", "FDSPrivateThemeUtils", "KeyboardFocus.react", "React", "SUIGlyphIcon.react", "SUIPopover.react", "SUIPopoverContext", "SUITheme", "SUITooltip.react", "TabBarItem.react", "asset", "autoFlipStyleProps", "cxMargin", "emptyFunction", "joinClasses", "uniqueID", "withSUITheme"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = 200;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                isHovering: !1
            },
            d.$1 = b("uniqueID")(),
            d.$2 = i.createRef(),
            d.$3 = function() {
                return d.$2.current
            }
            ,
            d.$4 = function() {
                d.setState({
                    isHovering: !0
                }),
                d.props.onMouseEnter && d.props.onMouseEnter()
            }
            ,
            d.$5 = function() {
                d.setState({
                    isHovering: !1
                }),
                d.props.onMouseLeave && d.props.onMouseLeave()
            }
            ,
            d.$6 = function() {
                d.props.onMouseDown && d.props.onMouseDown()
            }
            ,
            d.$7 = function() {
                d.props.onMouseUp && d.props.onMouseUp()
            }
            ,
            d.$8 = function(a) {
                var b = d.props
                  , c = b.onClick
                  , e = b.onActivate;
                b = b.value;
                e && e(b, a);
                c(b, a)
            }
            ,
            d.$9 = function(a) {
                d.props.onFocus && d.props.onFocus(a)
            }
            ,
            d.$10 = function(a) {
                d.props.onBlur && d.props.onBlur(a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this;
            return i.jsx(b("FDSPrivateThemeContext.react").Consumer, {
                children: function(c) {
                    return i.jsx(b("KeyboardFocus.react"), {
                        onBlur: a.$10,
                        onFocus: a.$9,
                        children: function(d) {
                            var e = d.isKeyboardFocused
                              , f = d.onBlur;
                            d = d.onFocus;
                            var h = b("FDSPrivateThemeUtils").isGeo(c)
                              , k = b("SUITheme").get(a).SUITabItem
                              , l = a.props
                              , m = l.badge
                              , n = l.chevron
                              , o = l.className
                              , p = l.subtext
                              , q = l.href
                              , r = l.icon
                              , s = l.infoTooltip
                              , t = l.isActive
                              , u = l.isClickable
                              , v = l.isDisabled
                              , w = l.label;
                            l = l.labelIsHidden;
                            var x = t ? k.activeTypeStyle : k.typeStyle, y;
                            t ? y = k.activeBorderBottomColor : a.state.isHovering && (y = k.hoverBorderBottomColor != null ? k.hoverBorderBottomColor : k.hoverBackgroundColor);
                            var z = v ? {
                                color: k.disabledColor
                            } : {}
                              , A = k.typeStyle.lineHeight ? parseInt(k.typeStyle.lineHeight, 10) : 0;
                            A = Math.round((k.height - A) * .5);
                            var B = null;
                            h && e && (t ? B = {
                                backgroundColor: c.colors.active.transform(b("FDSPrivateFocusLevelType").FDSElementStateType["default"], b("FDSPrivateFocusLevelType").FDSFocusLevelType.focus)
                            } : B = {
                                backgroundColor: c.colors.flat.transform(b("FDSPrivateFocusLevelType").FDSElementStateType["default"], b("FDSPrivateFocusLevelType").FDSFocusLevelType.focus),
                                borderBottomColor: k.hoverBackgroundColor
                            });
                            x = babelHelpers["extends"]({
                                borderBottomColor: y
                            }, x, B, z, {
                                minHeight: k.height + "px",
                                paddingTop: A + "px",
                                paddingBottom: A + "px"
                            });
                            B = babelHelpers["extends"]({}, k.subtextTypeStyle, z);
                            z = babelHelpers["extends"]({}, k.activeTypeStyle, {
                                minHeight: k.height + "px",
                                paddingTop: A + "px",
                                paddingBottom: A + "px"
                            });
                            A = Boolean(m) ? i.jsx("span", {
                                className: "_3u2b",
                                children: m
                            }) : null;
                            m = Boolean(n) && !h ? i.jsx("span", {
                                className: "_68_d",
                                children: n
                            }) : null;
                            n = Boolean(s) && !h ? i.jsxs("span", {
                                className: "_3u2t",
                                children: [i.jsx("div", {
                                    className: "_3-8r",
                                    ref: a.$2,
                                    role: "tooltip",
                                    children: i.jsx(b("SUIGlyphIcon.react"), {
                                        className: "_4m37",
                                        srcDefault: g("403741"),
                                        srcHover: g("403742")
                                    })
                                }), s != null && i.jsx(b("SUIPopover.react"), {
                                    content: s,
                                    hoverContextRef: a.$3,
                                    id: a.$1,
                                    position: "below"
                                })]
                            }) : null;
                            r = r ? i.cloneElement(r, {
                                active: t,
                                className: b("joinClasses")(r.props.className, "_ur6"),
                                style: b("autoFlipStyleProps")({
                                    marginRight: l === !0 ? 0 : k.iconMargin
                                })
                            }) : null;
                            k = l === !0 ? i.jsx("span", {
                                className: "accessible_elem",
                                children: w
                            }) : Boolean(a.props.tooltip) ? i.jsx("span", {
                                className: "_9bjb",
                                children: w
                            }) : i.jsx("span", {
                                className: "_9bjb",
                                "data-hover": "tooltip",
                                "data-tooltip-content": w,
                                "data-tooltip-display": "overflow",
                                "data-tooltip-position": "above",
                                children: w
                            });
                            l = a.props.density === "flex" ? i.jsxs("span", {
                                className: "_9bjc",
                                children: [k, m, A]
                            }) : i.jsxs(i.Fragment, {
                                children: [k, m, A]
                            });
                            w = Boolean(p) && !h ? i.jsx("span", {
                                style: B,
                                children: p
                            }) : null;
                            k = Boolean(p) && !h ? i.jsxs("span", {
                                className: "_4n4x",
                                children: [i.jsx("span", {
                                    className: "_4n4y",
                                    children: l
                                }), w]
                            }) : l;
                            m = i.jsxs("span", {
                                "aria-hidden": !0,
                                className: "_2ztj _60ol" + (Boolean(p) && !h ? " _4n4z" : ""),
                                style: z,
                                children: [r, k, n]
                            });
                            A = i.jsxs("span", {
                                className: "_60om" + (a.props.density === "sparse" ? " _3-8t" : "") + (a.props.density === "flex" ? " _3u2u" : ""),
                                ref: a.props.tabRef,
                                children: [i.jsxs("span", {
                                    className: b("joinClasses")("_2ztj _m_6" + (t ? " _4i1f" : "") + (!u || v ? " _3mmj" : "") + (Boolean(p) && !h ? " _4n4z" : ""), o),
                                    "data-testid": void 0,
                                    style: x,
                                    children: [r, k, n]
                                }), m]
                            });
                            B = a.props;
                            w = B.tabIndex;
                            l = B.selected;
                            z = B.focused;
                            t = B.hideFocusRing;
                            u = B.mockSpacebarClick;
                            p = z === !0 && t || h;
                            return v && h ? null : i.jsx(b("SUIPopoverContext").Provider, {
                                value: e,
                                children: i.jsxs(b("TabBarItem.react"), {
                                    "aria-haspopup": !!s,
                                    className: (a.props.density !== "flex" ? "_1_mp" : "") + (a.props.density === "flex" ? " _3u2v" : ""),
                                    focused: z,
                                    hideFocusRing: p,
                                    href: q,
                                    id: n !== null ? a.$1 : void 0,
                                    mockSpacebarClick: u,
                                    onBlur: f,
                                    onClick: v ? b("emptyFunction") : a.$8,
                                    onFocus: d,
                                    onMouseDown: v ? b("emptyFunction") : a.$6,
                                    onMouseEnter: v ? b("emptyFunction") : a.$4,
                                    onMouseLeave: v ? b("emptyFunction") : a.$5,
                                    onMouseUp: v ? b("emptyFunction") : a.$7,
                                    selected: l,
                                    tabIndex: w,
                                    children: [a.props.separator, Boolean(a.props.tooltip) ? i.jsx(b("SUITooltip.react"), {
                                        alignment: a.props.tooltipAlignment,
                                        className: "_9bjd",
                                        position: a.props.tooltipPosition,
                                        tooltip: a.props.tooltip,
                                        tooltipDelay: j,
                                        children: A
                                    }) : A]
                                })
                            })
                        }
                    })
                }
            })
        }
        ;
        return c
    }(i.PureComponent);
    a.defaultProps = {
        isClickable: !0,
        isDisabled: !1,
        density: "dense"
    };
    c = b("withSUITheme")(a);
    e.exports = c
}
), null);
__d("SUITabMenuItem.react", ["cx", "React", "SUISelector.react", "SUISelectorOption.react", "SUITabItem.react", "SUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$3 = function() {
                c.props.onMouseEnterTabItem(c.props.value)
            }
            ,
            c.$4 = function() {
                c.props.onMouseLeaveTabItem(c.props.value)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.$1 = function(a, b) {
            return !!a && a.filter(function(a) {
                return a.value === b
            }).length > 0
        }
        ;
        d.$2 = function() {
            var a = this.props.theme
              , c = a.SUITabGroup;
            return new (b("SUITheme"))({
                id: "suitabgroupcomposite",
                components: {
                    SUISelector: a.SUISelector,
                    SUISelectorOption: babelHelpers["extends"]({}, a.SUISelectorOption, c.subItem, {
                        selectedIcon: h.jsx("div", {
                            style: {
                                background: c.activeIndicatorColor,
                                height: "29px",
                                left: "0",
                                position: "absolute",
                                width: "2px"
                            }
                        })
                    }),
                    SUITabItem: a.SUITabItem
                }
            })
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.dropdownWidth
              , d = a.selectedValue
              , e = a.subItems
              , f = a.separator
              , g = a.onChange;
            a.onMouseEnterTabItem;
            a.onMouseLeaveTabItem;
            var i = a.onMouseEntersMenu
              , j = a.onMouseLeavesMenu
              , k = a.selectorRef;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["dropdownWidth", "selectedValue", "subItems", "separator", "onChange", "onMouseEnterTabItem", "onMouseLeaveTabItem", "onMouseEntersMenu", "onMouseLeavesMenu", "selectorRef"]);
            var l = a.theme.SUITabGroup
              , m = this.$1(e, d);
            return h.jsxs("div", {
                className: "_8m_l",
                children: [f, h.jsx(b("SUISelector.react"), {
                    button: h.jsx(b("SUITabItem.react"), babelHelpers["extends"]({}, a, {
                        chevron: l.chevron,
                        isActive: m,
                        isClickable: !1,
                        onMouseEnter: this.$3,
                        onMouseLeave: this.$4
                    })),
                    dropdownWidth: c,
                    onChange: g,
                    onMouseEntersMenu: i,
                    onMouseLeavesMenu: j,
                    ref: k,
                    shouldHideOnBlur: !1,
                    theme: this.$2(),
                    value: m ? d : null,
                    children: e.map(function(a) {
                        return h.jsx(b("SUISelectorOption.react"), {
                            description: a.description,
                            icon: a.icon,
                            value: a.value,
                            children: a.label
                        }, a.value)
                    })
                })]
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("SUITabGroup.react", ["cx", "React", "SUITabItem.react", "SUITabMenuItem.react", "SUITheme", "TabBar.react", "emptyFunction", "joinClasses", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 200;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$2 = new Map(),
            c.$3 = function(a, b) {
                if (c.$4(a) || c.$5(a))
                    return !1;
                var d = c.props.onChange;
                d && c.props.value !== a && d(a, b);
                d = c.props.onTabClick;
                d != null && d(a, b);
                return !0
            }
            ,
            c.$6 = function(a) {
                window.clearTimeout(c.$1);
                c.$2.forEach(function(b, c) {
                    b && c !== a && b.hideMenu()
                });
                var b = c.$2.get(a);
                b && b.showMenu()
            }
            ,
            c.$7 = function(a) {
                c.$1 = window.setTimeout(function() {
                    var b = c.$2.get(a);
                    b && b.hideMenu()
                }, i)
            }
            ,
            c.$8 = function() {
                window.clearTimeout(c.$1)
            }
            ,
            c.$9 = function() {
                c.$1 = window.setTimeout(function() {
                    c.$2.forEach(function(a) {
                        a && a.hideMenu()
                    })
                }, i)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.$5 = function(a) {
            return this.props.tabs.some(function(b) {
                return b.value === a && b.subItems && b.subItems.length
            })
        }
        ;
        d.$4 = function(a) {
            return this.props.tabs.some(function(b) {
                return b.value === a && b.isDisabled
            })
        }
        ;
        d.render = function() {
            var a, c = this, d = b("SUITheme").get(this), e = d.SUITabGroup, f = d.SUITabItem, g = this.props.value !== null && this.props.value !== void 0 ? this.props.value : this.props.tabs.length ? this.props.tabs[0].value : null;
            this.$2 = new Map();
            var i = this.props.density === "flex";
            return h.jsx(b("TabBar.react"), {
                activeTabKey: g,
                className: b("joinClasses")("_67ui" + (i ? " _3cld" : ""), this.props.className, this.props.margin),
                "data-testid": void 0,
                dropdownMenuAlignh: this.props.dropdownMenuAlignh,
                maxDropdownHeight: this.props.dropdownMaxHeight,
                maxTabsVisible: this.props.maxTabsVisible,
                moreLabel: (a = this.props.moreLabel) != null ? a : void 0,
                onTabClick: this.$3,
                shouldCalculateVisibleTabs: !i,
                children: this.props.tabs.map(function(a, i) {
                    var j, k;
                    i = Boolean(e.dividerColor) && i < c.props.tabs.length;
                    j = (j = e.dividerSize) != null ? j : f.height * .6;
                    k = (k = e.dividerHorzMargin) != null ? k : 0;
                    i = i ? h.jsx("div", {
                        className: "_57p3 _3mmj",
                        style: {
                            backgroundColor: e.dividerColor,
                            height: j,
                            marginLeft: k,
                            marginRight: k
                        }
                    }) : null;
                    j = {
                        "data-testid": a["data-testid"],
                        icon: a.icon,
                        tooltipAlignment: c.props.tooltipAlignment,
                        tooltipPosition: c.props.tooltipPosition,
                        isDisabled: a.isDisabled,
                        label: a.label,
                        labelIsHidden: c.props.labelIsHidden,
                        onActivate: a.onActivate,
                        onClick: b("emptyFunction"),
                        separator: i,
                        tabRef: a.ref,
                        subtext: a.subtext,
                        theme: d,
                        value: a.value
                    };
                    return a.subItems ? h.createElement(b("SUITabMenuItem.react"), babelHelpers["extends"]({}, j, {
                        dropdownWidth: c.props.dropdownWidth,
                        key: a.value,
                        onChange: c.$3,
                        onMouseEnterTabItem: c.$6,
                        onMouseEntersMenu: c.$8,
                        onMouseLeaveTabItem: c.$7,
                        onMouseLeavesMenu: c.$9,
                        selectedValue: g,
                        selectorRef: function(b) {
                            return c.$2.set(a.value, b)
                        },
                        subItems: a.subItems
                    })) : h.createElement(b("SUITabItem.react"), babelHelpers["extends"]({}, j, {
                        badge: a.badge,
                        density: c.props.density,
                        href: a.href,
                        infoTooltip: a.infoTooltip,
                        isActive: a.value === g,
                        key: a.value,
                        tooltip: a.tooltip,
                        tooltipAlignment: a.tooltipAlignment,
                        tooltipPosition: a.tooltipPosition
                    }))
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    c = b("withSUITheme")(a);
    e.exports = c
}
), null);
