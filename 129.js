if (self.CavalryLogger) {
    CavalryLogger.start_js(["h\/HHI"]);
}

__d("AdsAdditionalOptionsDataProviderPlugin", ["AdsAdditionalOptionsConsts"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        initialState: b("AdsAdditionalOptionsConsts").AdditionalOptionsDataProviderInitialState
    };
    c = a;
    e.exports = c
}
), null);
__d("AdsAdditionalOptionsUtils", ["AdsApplicationUtils", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.shouldShowGuidance = a;
    f.shouldGetStickinessData = c;
    f.shouldSetStickinessData = d;
    function a(a, c) {
        return !b("gkx")("908460") || a == null || a.get(c) == null ? !1 : a.get(c).shouldShow
    }
    function c() {
        return !b("gkx")("1335296") && b("AdsApplicationUtils").isPowerEditor() && b("gkx")("908460")
    }
    function d(a) {
        return !b("gkx")("1335296") && a && b("gkx")("908460")
    }
}
), null);
__d("AdsAdditionalOptionsStateReducerUtils", ["invariant", "AdsInterfacesLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.hasAdObjectChanged = a;
    f.resetDefaultState = c;
    f.setFieldValue = d;
    f.setHasEdited = e;
    f.setSticky = h;
    function a(a) {
        a = a.data.changedParamKeys;
        return !!(a.selected_ad_ids || a.selected_adset_ids || a.selected_campaign_ids)
    }
    function c(a) {
        return a.map(function(a) {
            return {
                isEditable: a.isSticky,
                isSticky: a.isSticky,
                hasEdited: !1
            }
        })
    }
    function d(a, b, c) {
        var d = a.get(b);
        d != null || g(0, 14128, b);
        return a.set(b, {
            isEditable: c,
            isSticky: d.isSticky,
            hasEdited: d.hasEdited
        })
    }
    function e(a, b, c) {
        var d = a.get(b);
        d != null || g(0, 14128, b);
        return a.set(b, {
            isEditable: d.isEditable,
            isSticky: d.isSticky,
            hasEdited: c
        })
    }
    function h(a, c, d) {
        return a.withMutations(function(a) {
            c.forEach(function(c) {
                var e = a.get(c);
                if (e != null) {
                    if (d === "increment") {
                        var f = e.isSticky === !1 ? "focus_framework_sticky_field_set" : "focus_framework_sticky_field_refreshed";
                        b("AdsInterfacesLogger").log({
                            data: {
                                field_names: [c]
                            },
                            eventName: f
                        })
                    }
                    a.set(c, {
                        isEditable: !0,
                        isSticky: !0,
                        hasEdited: e.hasEdited
                    })
                }
            });
            return a
        })
    }
}
), null);
__d("AdsAdditionalOptionsSetStickyReducerPlugin", ["AdsAdditionalOptionsStateReducerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, c) {
            return b("AdsAdditionalOptionsStateReducerUtils").setSticky(a, c.fields, c.source)
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("AdsAdditionalOptionsGetStickyFieldsReducerPlugin", ["AdsAdditionalOptionsConsts", "AdsAdditionalOptionsUtils", "AdsFocusFrameworkStickinessDataManager"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, c) {
            c.accountID != null && b("AdsAdditionalOptionsUtils").shouldGetStickinessData() && b("AdsFocusFrameworkStickinessDataManager").getStickyFields(c.accountID);
            return b("AdsAdditionalOptionsConsts").AdditionalOptionsDataProviderInitialState
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("getAllErrorsAtLevels", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        return a.filter(function(a) {
            return a.level != null && b.has(a.level) && a.originalError == null
        })
    }
}
), null);
__d("GeoPrivateLayerVisibilityContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(void 0);
    e.exports = c
}
), null);
__d("GeoPrivateCardShadow.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c = a.isVisible;
        a = a.position;
        return h.jsx("div", {
            className: (g || (g = b("stylex"))).dedupe({
                "height-1": "mfqsk9m2",
                "pointer-events-1": "lxm2ky87",
                "position-1": "rjrpm8ub",
                "transition-property-1": "q8bmir4l",
                "transition-duration-1": "ooobrl3w",
                "transition-timing-function-1": "mdo0u0tr",
                "width-1": "tds9wb2m",
                "opacity-1": "hluqg2un"
            }, a === "top" ? {
                "box-shadow-1": "fcpty7yd",
                "top-1": "pu1cs6ci"
            } : null, a === "bottom" ? {
                "box-shadow-1": "je83aob8",
                "bottom-1": "g10zmv2e"
            } : null, c ? {
                "opacity-1": "tjurj83n"
            } : null)
        })
    }
}
), null);
__d("MMRMVideoCopyrightAttributionRuleSelector.react", ["fbt", "GeoCheckboxInput.react", "GeoSwitch.react", "React", "VideoCopyrightMatchAttributionRequestStatus", "VideoCopyrightRuleActionType", "getSelectedSinglePage_LEGACY", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    (h || (h = b("stylex"))).inject(".d2hqwtrz{padding-top:4px}", 1);
    h.inject(".r6ydv39a{margin-top:16px}", 1);
    function j(a) {
        var c = b("VideoCopyrightMatchAttributionRequestStatus");
        return Object.keys(c).find(function(b) {
            return c[b] === a
        })
    }
    function a(a) {
        var c = function(b) {
            a.onValueUpdated(String(b))
        }
          , d = b("getSelectedSinglePage_LEGACY")()
          , e = function() {
            var c = j(Number(a.condition.getValue()));
            return c != null ? b("VideoCopyrightMatchAttributionRequestStatus")[c] : null
        }
          , f = function() {
            return [1, 2].includes(e())
        }
          , h = function() {
            return e() === 2
        }
          , k = function(a) {
            a = a ? 1 : 0;
            c(a)
        }
          , l = function(a) {
            a = a ? 2 : 1;
            c(a)
        };
        return i.jsxs("div", {
            className: "d2hqwtrz",
            children: [i.jsx(b("GeoSwitch.react"), {
                isDisabled: a.isDisabled,
                label: g._("Th\u00eam li\u00ean k\u1ebft quy\u1ec1n s\u1edf h\u1eefu"),
                labelPosition: "suffix",
                onChange: k,
                value: f()
            }), (d == null ? void 0 : d.canRequireAttribution) && a.action === b("VideoCopyrightRuleActionType").MONETIZE && f() ? i.jsx("div", {
                className: "r6ydv39a",
                children: i.jsx(b("GeoCheckboxInput.react"), {
                    description: g._("H\u1ec7 th\u1ed1ng s\u1ebd \u00e1p d\u1ee5ng h\u00e0nh \u0111\u1ed9ng Nh\u1eadn thu nh\u1eadp t\u1eeb qu\u1ea3ng c\u00e1o {=only} khi c\u00f3 th\u1ec3 th\u00eam li\u00ean k\u1ebft quy\u1ec1n s\u1edf h\u1eefu. N\u1ebfu video kh\u1edbp kh\u00f4ng \u0111\u1ee7 \u0111i\u1ec1u ki\u1ec7n, h\u00e0nh \u0111\u1ed9ng th\u1ee9 hai s\u1ebd \u0111\u01b0\u1ee3c \u00e1p d\u1ee5ng.", [g._param("=only", i.jsx("strong", {
                        children: g._("ch\u1ec9")
                    }))]),
                    isDisabled: a.isDisabled,
                    label: g._("C\u1ea7n c\u00f3 li\u00ean k\u1ebft quy\u1ec1n s\u1edf h\u1eefu"),
                    onChange: l,
                    value: h()
                })
            }) : null]
        })
    }
}
), null);
__d("MediaManagerMonetizationAdBreakBlockListTabView.react", ["cx", "fbt", "CurrentUser", "FlexLayout.react", "GeoBaseText.react", "GeoButton.react", "InstreamVideoSensitiveAdsBlocklistReviewNoticeContainer", "MediaManagerAdaptivePickerConstants", "MediaManagerMonetizationAdBreakTabActions", "MonetizationAdBreakBlockListsPageTableConfigs", "MonetizationAdBreakBlockListsTableConfigs", "MonetizationErrorStateMessage.react", "PagesSettingsInstreamAdsBlockListContentContainer", "PagesSettingsInstreamAdsCountryRestrictionsContentContainer", "React", "SimpleXUIDialog", "WebFunnelLogger", "gkx", "immutable", "react-virtualized-master"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("immutable").Set
      , k = b("react-virtualized-master").AutoSizer
      , l = 32
      , m = 80
      , n = 160
      , o = 80;
    function p(a) {
        return i.jsxs(b("FlexLayout.react"), {
            align: "start",
            className: "_6kv4",
            direction: "horizontal",
            children: [i.jsx("span", {
                className: "_68y-",
                children: i.jsx(b("GeoBaseText.react"), {
                    color: "placeholder",
                    display: "block",
                    size: "value",
                    children: h._("Ng\u0103n qu\u1ea3ng c\u00e1o t\u1eeb Trang ho\u1eb7c h\u1ea1ng m\u1ee5c c\u1ee5 th\u1ec3 hi\u1ec3n th\u1ecb trong video c\u1ee7a b\u1ea1n. Qu\u1ea3ng c\u00e1o v\u1ec1 vi\u1ec7c \u0111\u00e1nh b\u1ea1c ho\u1eb7c h\u1eb9n h\u00f2 b\u1ecb h\u1ea1n ch\u1ebf theo m\u1eb7c \u0111\u1ecbnh. T\u00f9y ch\u1ecdn h\u1ea1n ch\u1ebf qu\u1ea3ng c\u00e1o kh\u00f4ng \u00e1p d\u1ee5ng v\u1edbi n\u1ed9i dung g\u1ea7n k\u1ec1. B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 nh\u1eafm m\u1ee5c ti\u00eau ho\u1eb7c lo\u1ea1i tr\u1eeb c\u00e1c qu\u1ed1c gia c\u1ee5 th\u1ec3 \u0111\u1ec3 gi\u1edbi h\u1ea1n v\u1ecb tr\u00ed hi\u1ec3n th\u1ecb qu\u1ea3ng c\u00e1o.")
                })
            }), a.page ? i.jsxs(b("FlexLayout.react"), {
                align: "start",
                className: "_6kv4",
                direction: "horizontal",
                children: [" ", i.jsx(b("GeoButton.react"), {
                    label: h._("T\u1ea1o danh s\u00e1ch ch\u1eb7n"),
                    variant: "primary",
                    onClick: a.page.onAddButtonClick
                })]
            }) : null]
        })
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                expandedPageIDs: j(),
                expandedPageIDsForCountryRestrictions: j(),
                showBlockListContentDialog: !1,
                showCountryRestrictionsContentDialog: !1
            },
            c.onToggle = function(a) {
                c.setState({
                    showBlockListContentDialog: a
                })
            }
            ,
            c.onCountryRestrictionToggle = function(a) {
                c.setState({
                    showCountryRestrictionsContentDialog: a
                })
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            b("gkx")("1157336") && new (b("WebFunnelLogger"))("AdBreaksCreatorFunnelDefinition").setAction("VISIT_BLOCK_LISTS_TAB").setSessionKey(b("CurrentUser").getAccountID()).log()
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props.selectedPages;
            if (!c || c.length === 0)
                return b("MonetizationErrorStateMessage.react").noAdBreakPagesSelectedErrorForTab("block_list");
            var d = this.buildPageTableData();
            c = b("gkx")("1177054");
            var e = c ? d.length === 1 : !1
              , f = function(a) {
                return d.map(function(a) {
                    return e ? a.height : a.multiTableHeight
                })[a.index]
            };
            c = b("gkx")("712154") ? i.jsx(b("InstreamVideoSensitiveAdsBlocklistReviewNoticeContainer"), {
                businessID: b("MediaManagerAdaptivePickerConstants").MY_PAGES_CONTEXT,
                userID: this.props.userID
            }) : null;
            return i.jsxs("div", {
                children: [c, i.jsx(p, {
                    page: e ? d[0] : null
                }), i.jsx("div", {
                    className: "_695o",
                    children: i.jsx(k, {
                        disableWidth: !0,
                        children: function(c) {
                            c = c.height;
                            return e ? i.jsx("div", {
                                children: i.jsx(b("MonetizationAdBreakBlockListsTableConfigs").BlockListTable, {
                                    blockLists: d[0].blockLists,
                                    height: c,
                                    isBodyLoading: a.props.isFetchingBlocklists,
                                    isSinglePageContext: !0
                                })
                            }) : i.jsx(b("MonetizationAdBreakBlockListsPageTableConfigs").PagesTable, {
                                height: c,
                                isBodyLoading: a.props.isFetchingBlocklists,
                                pages: d,
                                rowHeightGetter: f
                            })
                        }
                    })
                }), this.state.showBlockListContentDialog ? i.jsx(b("PagesSettingsInstreamAdsBlockListContentContainer"), {
                    blockListId: null,
                    editable: this.props.editable,
                    enableSubcategories: !1,
                    onToggle: this.onToggle
                }) : null, this.state.showCountryRestrictionsContentDialog ? i.jsx(b("PagesSettingsInstreamAdsCountryRestrictionsContentContainer"), {
                    blockListId: null,
                    blockListName: "",
                    businessId: null,
                    editable: this.props.editable,
                    enableSubcategories: !1,
                    onToggle: this.onCountryRestrictionToggle
                }) : null]
            })
        }
        ;
        d.buildPageTableData = function() {
            var a = this
              , b = this.props.selectedPages;
            if (!b)
                return [];
            var c = this.state
              , d = c.expandedPageIDs
              , e = c.expandedPageIDsForCountryRestrictions;
            return b.map(function(b) {
                var c = a.getBlockListsForPageID(b.id)
                  , f = a.getCountryRestrictionsForPageID(b.id)
                  , g = c.length > 0 ? c.length : 1
                  , h = f.length > 0 ? f.length : 1
                  , i = d.has(b.id) && c.length > 0
                  , j = b.isPageEligibleForCountryRestrictions
                  , k = j && e.has(b.id) && f.length > 0;
                return babelHelpers["extends"]({}, b, {
                    blockLists: c,
                    countryRestrictions: f,
                    height: i ? a.getSubTableRowHeight(g) : m,
                    multiTableHeight: i || k ? (i ? a.getSubMultiTableRowHeight(g) : 0) + (k ? a.getSubMultiTableRowHeight(h) : 0) : j ? n : m,
                    isExpanded: i,
                    isCountryRestrictionsExpanded: k,
                    onExpandClick: function() {
                        a.setState({
                            expandedPageIDs: i ? d["delete"](b.id) : d.add(b.id)
                        })
                    },
                    onAddButtonClick: function() {
                        a.onClickCreateNewButton(b.id)
                    },
                    onAddCountryRestrictionsButtonClick: function() {
                        a.onClickCreateNewCountryRestrictionButton(b.id)
                    },
                    onExpandCountryRestrictionsButtonClick: function() {
                        a.setState({
                            expandedPageIDsForCountryRestrictions: k ? e["delete"](b.id) : e.add(b.id)
                        })
                    }
                })
            })
        }
        ;
        d.getSubTableRowHeight = function(a) {
            return a * o + m + l + 40
        }
        ;
        d.getSubMultiTableRowHeight = function(a) {
            return a * o + n + l + 40
        }
        ;
        d.getBlockListsForPageID = function(a) {
            var b = this
              , c = this.props.blockLists.filter(function(b) {
                b = b.owners;
                return b == null ? !1 : !!b.find(function(b) {
                    return b == a
                })
            });
            return c.map(function(c) {
                return babelHelpers["extends"]({}, c, {
                    onEdit: function() {
                        b.onBlockListEdit(a, c)
                    },
                    onDelete: function() {
                        b.props.setPageIDForDeletion(a),
                        b.onBlockListDelete(c, !1)
                    }
                })
            })
        }
        ;
        d.getCountryRestrictionsForPageID = function(a) {
            var b = this
              , c = this.props.countryRestrictions.filter(function(b) {
                b = b.owners;
                return b == null ? !1 : !!b.find(function(b) {
                    return b == a
                })
            });
            return c.map(function(c) {
                return babelHelpers["extends"]({}, c, {
                    onEdit: function() {
                        b.onCountryRestrictionEdit(a, c)
                    },
                    onDelete: function() {
                        b.props.setPageIDForDeletion(a),
                        b.onBlockListDelete(c, !0)
                    }
                })
            })
        }
        ;
        d.onBlockListDelete = function(a, c) {
            var d = this
              , e = i.jsx("div", {
                className: "_4xfq",
                children: h._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn mu\u1ed1n x\u00f3a danh s\u00e1ch ch\u1eb7n {name} kh\u00f4ng?", [h._param("name", a.name)])
            });
            c && (e = i.jsxs("div", {
                className: "_4xfq",
                children: [h._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn mu\u1ed1n x\u00f3a c\u00e1c gi\u1edbi h\u1ea1n qu\u1ed1c gia n\u00e0y kh\u00f4ng?"), i.jsx("br", {}), h._("{name}", [h._param("name", a.name)])]
            }));
            b("SimpleXUIDialog").showConfirm(e, h._("X\u00f3a"), function(b) {
                b && d.props.onDeleteBlockLists([a.id])
            })
        }
        ;
        d.onBlockListEdit = function(a, c) {
            this.props.setPageIDForContentDialog(a),
            this.props.onSelectBlockList(c),
            b("MediaManagerMonetizationAdBreakTabActions").selectBlockList(c.id),
            this.setState({
                showBlockListContentDialog: !0
            })
        }
        ;
        d.onCountryRestrictionEdit = function(a, c) {
            this.props.setPageIDForContentDialog(a),
            this.props.onSelectBlockList(c, !0),
            b("MediaManagerMonetizationAdBreakTabActions").selectBlockList(c.id),
            this.setState({
                showCountryRestrictionsContentDialog: !0
            })
        }
        ;
        d.onClickCreateNewButton = function(a) {
            this.props.setPageIDForContentDialog(a),
            this.props.onSelectBlockList(null),
            b("MediaManagerMonetizationAdBreakTabActions").selectBlockList(null),
            this.setState({
                showBlockListContentDialog: !0
            }),
            b("gkx")("1157336") && new (b("WebFunnelLogger"))("AdBreaksCreatorFunnelDefinition").setAction("OPEN_NEW_BLOCK_LIST_DIALOG").setSessionKey(b("CurrentUser").getAccountID()).log()
        }
        ;
        d.onClickCreateNewCountryRestrictionButton = function(a) {
            this.props.setPageIDForContentDialog(a),
            this.props.onSelectBlockList(null, !0),
            b("MediaManagerMonetizationAdBreakTabActions").selectBlockList(null),
            this.setState({
                showCountryRestrictionsContentDialog: !0
            }),
            b("gkx")("1157336") && new (b("WebFunnelLogger"))("AdBreaksCreatorFunnelDefinition").setAction("OPEN_NEW_COUNTRY_RESTRICTIONS_DIALOG").setSessionKey(b("CurrentUser").getAccountID()).log()
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
