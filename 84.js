if (self.CavalryLogger) {
    CavalryLogger.start_js(["h799F"]);
}

__d("LiveShoppingViewerTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:LiveShoppingViewerLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:LiveShoppingViewerLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:LiveShoppingViewerLoggerConfig", this.$1, {
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
        c.setAttributionIds = function(a) {
            this.$1.attribution_ids = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setExceptionClass = function(a) {
            this.$1.exception_class = a;
            return this
        }
        ;
        c.setExceptionCode = function(a) {
            this.$1.exception_code = a;
            return this
        }
        ;
        c.setExceptionCodeName = function(a) {
            this.$1.exception_code_name = a;
            return this
        }
        ;
        c.setExceptionMessage = function(a) {
            this.$1.exception_message = a;
            return this
        }
        ;
        c.setLinkTitle = function(a) {
            this.$1.link_title = a;
            return this
        }
        ;
        c.setLinkURL = function(a) {
            this.$1.link_url = a;
            return this
        }
        ;
        c.setMetaData = function(a) {
            this.$1.meta_data = a;
            return this
        }
        ;
        c.setProductItemID = function(a) {
            this.$1.product_item_id = a;
            return this
        }
        ;
        c.setProductSetID = function(a) {
            this.$1.product_set_id = a;
            return this
        }
        ;
        c.setProductSetIds = function(a) {
            this.$1.product_set_ids = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        }
        ;
        c.setPromoteLinkID = function(a) {
            this.$1.promote_link_id = a;
            return this
        }
        ;
        c.setReferralSurface = function(a) {
            this.$1.referral_surface = a;
            return this
        }
        ;
        c.setReferralUIComponent = function(a) {
            this.$1.referral_ui_component = a;
            return this
        }
        ;
        c.setSelectedVersion = function(a) {
            this.$1.selected_version = a;
            return this
        }
        ;
        c.setShareID = function(a) {
            this.$1.share_id = a;
            return this
        }
        ;
        c.setStackTrace = function(a) {
            this.$1.stack_trace = a;
            return this
        }
        ;
        c.setSurface = function(a) {
            this.$1.surface = a;
            return this
        }
        ;
        c.setTimestamp = function(a) {
            this.$1.timestamp = a;
            return this
        }
        ;
        c.setUIComponent = function(a) {
            this.$1.ui_component = a;
            return this
        }
        ;
        c.setVideoID = function(a) {
            this.$1.video_id = a;
            return this
        }
        ;
        c.setVisitationID = function(a) {
            this.$1.visitation_id = a;
            return this
        }
        ;
        return a
    }();
    c = {
        attribution_ids: !0,
        event: !0,
        exception_class: !0,
        exception_code: !0,
        exception_code_name: !0,
        exception_message: !0,
        link_title: !0,
        link_url: !0,
        meta_data: !0,
        product_item_id: !0,
        product_set_id: !0,
        product_set_ids: !0,
        promote_link_id: !0,
        referral_surface: !0,
        referral_ui_component: !0,
        selected_version: !0,
        share_id: !0,
        stack_trace: !0,
        surface: !0,
        timestamp: !0,
        ui_component: !0,
        video_id: !0,
        visitation_id: !0
    };
    e.exports = a
}
), null);
__d("MapsReporterTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig", this.$1, {
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
        c.setCategory = function(a) {
            this.$1.category = a;
            return this
        }
        ;
        c.setMapURI = function(a) {
            this.$1.map_uri = a;
            return this
        }
        ;
        c.setNelat = function(a) {
            this.$1.nelat = a;
            return this
        }
        ;
        c.setNelon = function(a) {
            this.$1.nelon = a;
            return this
        }
        ;
        c.setPassesGkMapsTileserviceOsmDefault = function(a) {
            this.$1.passes_gk_maps_tileservice_osm_default = a;
            return this
        }
        ;
        c.setPassesGkOxygenMapNewStyle = function(a) {
            this.$1.passes_gk_oxygen_map_new_style = a;
            return this
        }
        ;
        c.setStage = function(a) {
            this.$1.stage = a;
            return this
        }
        ;
        c.setSwlat = function(a) {
            this.$1.swlat = a;
            return this
        }
        ;
        c.setSwlon = function(a) {
            this.$1.swlon = a;
            return this
        }
        ;
        c.setUserComment = function(a) {
            this.$1.user_comment = a;
            return this
        }
        ;
        c.setZoom = function(a) {
            this.$1.zoom = a;
            return this
        }
        ;
        return a
    }();
    c = {
        category: !0,
        map_uri: !0,
        nelat: !0,
        nelon: !0,
        passes_gk_maps_tileservice_osm_default: !0,
        passes_gk_oxygen_map_new_style: !0,
        stage: !0,
        swlat: !0,
        swlon: !0,
        user_comment: !0,
        zoom: !0
    };
    e.exports = a
}
), null);
__d("CometMapReportTypes", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        lineLabel: {
            hint: g._("\u0110\u01b0\u1eddng n\u00e0o b\u1ecb sai t\u00ean? (t\u00f9y ch\u1ecdn)"),
            label: g._("T\u00ean \u0111\u01b0\u1eddng"),
            title: g._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1 v\u1edbi t\u00ean \u0111\u01b0\u1eddng")
        },
        line: {
            hint: g._("\u0110\u01b0\u1eddng n\u00e0o b\u1ecb sai h\u00ecnh d\u1ea1ng? (t\u00f9y ch\u1ecdn)"),
            label: g._("H\u00ecnh d\u1ea1ng con \u0111\u01b0\u1eddng"),
            title: g._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1 v\u1edbi h\u00ecnh d\u1ea1ng con \u0111\u01b0\u1eddng")
        },
        lineMissing: {
            hint: g._("Con \u0111\u01b0\u1eddng n\u00e0o b\u1ecb thi\u1ebfu? (t\u00f9y ch\u1ecdn)"),
            label: g._("Thi\u1ebfu con \u0111\u01b0\u1eddng"),
            title: g._("B\u00e1o c\u00e1o thi\u1ebfu con \u0111\u01b0\u1eddng")
        },
        polygon: {
            hint: g._("T\u00f2a nh\u00e0, c\u00f4ng vi\u00ean ho\u1eb7c v\u00f9ng n\u01b0\u1edbc n\u00e0o kh\u00f4ng ch\u00ednh x\u00e1c? (t\u00f9y ch\u1ecdn)"),
            label: g._("H\u00ecnh d\u1ea1ng ho\u1eb7c t\u00ean t\u00f2a nh\u00e0, c\u00f4ng vi\u00ean ho\u1eb7c v\u00f9ng n\u01b0\u1edbc"),
            title: g._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1 v\u1edbi h\u00ecnh d\u1ea1ng ho\u1eb7c t\u00ean t\u00f2a nh\u00e0, c\u00f4ng vi\u00ean ho\u1eb7c v\u00f9ng n\u01b0\u1edbc")
        },
        border: {
            hint: g._("\u0110\u01b0\u1eddng bi\u00ean gi\u1edbi n\u00e0o b\u1ecb v\u1ebd sai? (t\u00f9y ch\u1ecdn)"),
            label: g._("\u0110\u01b0\u1eddng bi\u00ean gi\u1edbi qu\u1ed1c gia, ti\u1ec3u bang ho\u1eb7c t\u1ec9nh\/th\u00e0nh ph\u1ed1"),
            title: g._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1 v\u1edbi \u0111\u01b0\u1eddng bi\u00ean gi\u1edbi")
        },
        administrative: {
            hint: g._("T\u00ean n\u00e0o kh\u00f4ng ch\u00ednh x\u00e1c? (t\u00f9y ch\u1ecdn)"),
            label: g._("T\u00ean qu\u1ed1c gia, ti\u1ec3u bang ho\u1eb7c th\u00e0nh ph\u1ed1"),
            title: g._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1 v\u1edbi t\u00ean qu\u1ed1c gia, ti\u1ec3u bang ho\u1eb7c th\u00e0nh ph\u1ed1")
        },
        other: {
            hint: g._("B\u1ea3n \u0111\u1ed3 n\u00e0y c\u00f3 v\u1ea5n \u0111\u1ec1 g\u00ec v\u1eady? (kh\u00f4ng b\u1eaft bu\u1ed9c)"),
            label: g._("Kh\u00e1c"),
            title: g._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1 b\u1ea3n \u0111\u1ed3")
        }
    };
    b = a;
    e.exports = b
}
), null);
__d("generateChainingSessionID", ["Random"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        return "f" + (b("Random").random() * (1 << 30)).toString(16).replace(".", "")
    }
}
), null);
__d("useCometTahoeChainingDepth", ["React", "generateChainingSessionID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = g.createContext({
        chainingDepthDispatch: null,
        chainingDepthState: 0,
        chainingSessionID: null
    });
    a = function() {
        var a = 0
          , c = function(a, b) {
            switch (b.type) {
            case "INCREMENT":
                return a + 1;
            default:
                return a
            }
        };
        c = g.useReducer(c, a);
        var d = c[0]
          , e = c[1];
        a = g.useState(function() {
            return b("generateChainingSessionID")()
        });
        var f = a[0];
        a[1];
        return g.useMemo(function() {
            return {
                chainingDepthDispatch: e,
                chainingDepthState: d,
                chainingSessionID: f
            }
        }, [e, d, f])
    }
    ;
    f.useChainingDepth = a;
    c = function() {
        return g.useContext(h)
    }
    ;
    f.useChainingDepthContext = c;
    d = function(a) {
        var b = a.children;
        a = a.value;
        return g.jsx(h.Provider, {
            value: a,
            children: b
        })
    }
    ;
    f.CometTahoeChainingDepthContextProvider = d
}
), null);
__d("CometVideoHomeThreeDotContextMenuWrapperContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        contextMenuEnabled: null
    });
    e.exports = c
}
), null);
__d("VideoPlayerLoggingExternalLogContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        externalLogID: null,
        externalLogType: null
    });
    e.exports = c
}
), null);
__d("FBTilesReportDialogItems.react", ["React", "XUIRadioList.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("XUIRadioList.react").Item;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                selectedType: "other"
            },
            c.$1 = function(a) {
                c.setState({
                    selectedType: a
                }),
                c.props.onSelected(a)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = [];
            Object.keys(this.props.types).forEach(function(b) {
                c.push(g.jsx(h, {
                    value: b,
                    children: a.props.types[b].label
                }, b))
            });
            return g.jsx(b("XUIRadioList.react"), {
                "data-testid": void 0,
                selectedValue: this.state.selectedType,
                onValueChange: this.$1,
                children: c
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("XMapsAttributionTermsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/maps/attribution_terms/", {})
}
), null);
__d("FBMapInfoButton.react", ["ix", "cx", "fbt", "AdsTextInput.react", "CometMapReportTypes", "ContextualDialogArrow", "FBTilesReportDialogItems.react", "Image.react", "Link.react", "MapsReporterTypedLogger", "PopoverMenu.react", "React", "ReactXUIMenu", "SimpleXUIDialog", "URI", "XMapsAttributionTermsController", "XUIDialogButton.react", "XUIDialogCancelButton.react", "XUIDialogCloseButton.react", "asset", "joinClasses"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j, k = b("React"), l = (j || (j = b("URI"))).goURIOnNewWindow, m = b("ReactXUIMenu").Item;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                mapInfo: {
                    mapUrl: null,
                    mapBounds: null,
                    zoom: null
                },
                selectedReportType: "other",
                reportedProblem: null
            },
            d.$1 = function() {
                d.setState({
                    mapInfo: d.props.fetchMapInfo() || {
                        mapUrl: null,
                        mapBounds: null,
                        zoom: null
                    }
                }),
                b("SimpleXUIDialog").showEx(k.jsx(b("FBTilesReportDialogItems.react"), {
                    "data-testid": void 0,
                    types: b("CometMapReportTypes"),
                    onSelected: function(a) {
                        return d.setState({
                            selectedReportType: a
                        })
                    }
                }), i._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1 b\u1ea3n \u0111\u1ed3 v\u1edbi"), k.jsxs("div", {
                    children: [k.jsx(b("XUIDialogCancelButton.react"), {}), k.jsx(b("XUIDialogButton.react"), {
                        action: "cancel",
                        "data-testid": void 0,
                        use: "confirm",
                        label: i._("Ti\u1ebfp t\u1ee5c"),
                        onClick: d.$4
                    })]
                }))
            }
            ,
            d.$4 = function() {
                if (d.state.selectedReportType == null)
                    return;
                var a = b("CometMapReportTypes")[d.state.selectedReportType];
                b("SimpleXUIDialog").showEx(k.jsx(b("AdsTextInput.react"), {
                    "data-testid": void 0,
                    multiline: !0,
                    placeholder: a.hint,
                    value: d.state.reportedProblem,
                    onChange: function(a) {
                        return d.setState({
                            reportedProblem: a
                        })
                    }
                }), a.title, k.jsxs("div", {
                    children: [k.jsx(b("XUIDialogCancelButton.react"), {}), k.jsx(b("XUIDialogButton.react"), {
                        action: "cancel",
                        "data-testid": void 0,
                        use: "confirm",
                        label: i._("G\u1eedi"),
                        onClick: d.$5
                    })]
                }))
            }
            ,
            d.$5 = function() {
                var a = new (b("MapsReporterTypedLogger"))().setStage("submit_comment").setCategory(d.state.selectedReportType).setUserComment(d.state.reportedProblem).setMapURI(d.state.mapInfo.mapUrl || "")
                  , c = d.state.mapInfo
                  , e = c.mapBounds;
                c = c.zoom;
                e != null && c != null && a.setNelon(e.getEast()).setNelat(e.getNorth()).setSwlon(e.getWest()).setSwlat(e.getSouth()).setZoom("" + c).setPassesGkMapsTileserviceOsmDefault(!1).setPassesGkOxygenMapNewStyle(!1);
                a.log();
                b("SimpleXUIDialog").showEx(i._("\u00dd ki\u1ebfn \u0111\u00f3ng g\u00f3p c\u1ee7a b\u1ea1n gi\u00fap ch\u00fang t\u00f4i c\u1ea3i thi\u1ec7n b\u1ea3n \u0111\u1ed3 Facebook cho m\u1ecdi ng\u01b0\u1eddi."), i._("C\u1ea3m \u01a1n"), k.jsx(b("XUIDialogCloseButton.react"), {
                    "data-testid": void 0,
                    use: "confirm"
                }))
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("XMapsAttributionTermsController").getURIBuilder()
              , c = k.jsxs(b("ReactXUIMenu"), {
                "data-testid": void 0,
                className: "_8-hf",
                children: [k.jsx(m, {
                    "data-testid": void 0,
                    icon: k.jsx(b("Image.react"), {
                        src: g("408431")
                    }),
                    onClick: this.$1,
                    children: i._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1 v\u1edbi b\u1ea3n \u0111\u1ed3 n\u00e0y")
                }, "report"), k.jsx(m, {
                    "data-testid": void 0,
                    icon: k.jsx(b("Image.react"), {
                        src: g("367566")
                    }),
                    onClick: function() {
                        return l(a.getURI().setProtocol("https").setDomain("www.facebook.com"))
                    },
                    children: i._("Th\u00f4ng b\u00e1o ph\u00e1p l\u00fd v\u1ec1 d\u1eef li\u1ec7u b\u1ea3n \u0111\u1ed3")
                }, "map_data_legal_notices"), k.jsx(m, {
                    "data-testid": void 0,
                    icon: k.jsx(b("Image.react"), {
                        src: g("487800")
                    }),
                    onClick: function() {
                        return l("https://www.openstreetmap.org/copyright/")
                    },
                    children: "OpenStreetMap"
                }, "osm_direct_attribution")]
            });
            return k.jsx(b("PopoverMenu.react"), {
                alignh: this.$2(),
                position: this.$3(),
                menu: c,
                layerBehaviors: [b("ContextualDialogArrow")],
                children: k.jsx(b("Link.react"), {
                    "data-testid": void 0,
                    ref: "termsButton",
                    "aria-haspopup": "menu",
                    className: b("joinClasses")("_6vtv", this.props.className),
                    children: k.jsx("div", {
                        className: "_6vtw",
                        children: k.jsx(b("Image.react"), {
                            src: g("360713"),
                            "aria-label": i._("Xem th\u00f4ng tin b\u1ea3n \u0111\u1ed3")
                        })
                    })
                })
            })
        }
        ;
        d.$2 = function() {
            var a;
            if (((a = this.props.popoverPosition) == null ? void 0 : a.horizontal) == "left")
                return "left";
            else
                return "right"
        }
        ;
        d.$3 = function() {
            var a;
            if (((a = this.props.popoverPosition) == null ? void 0 : a.vertical) == "top")
                return "below";
            else
                return "above"
        }
        ;
        return c
    }(k.Component);
    e.exports = a
}
), null);
__d("XVideoHomeFeedController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/watch/", {
        extid: {
            type: "String"
        },
        comment_id: {
            type: "FBID"
        },
        cursor: {
            type: "String"
        },
        ref: {
            type: "String"
        },
        t: {
            type: "Int"
        },
        v: {
            type: "String"
        },
        external_log_id: {
            type: "String"
        },
        q: {
            type: "String"
        },
        __ft__: {
            type: "String"
        },
        page_id: {
            type: "FBID"
        }
    })
}
), null);
