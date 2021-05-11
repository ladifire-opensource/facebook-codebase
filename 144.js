if (self.CavalryLogger) {
    CavalryLogger.start_js(["BGDIV"]);
}

__d("AdsCMPageChangeActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_CM_PAGE_CHANGE"
    }
}
), null);
__d("XAYMTMultiTipCarouselNavigationLoggerAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ads/growth/aymt/log/carousel_navigation/", {
        tip_id: {
            type: "String"
        },
        channel_id: {
            type: "String"
        },
        aymt_data: {
            type: "String"
        },
        message: {
            type: "String",
            required: !0
        }
    })
}
), null);
__d("XAYMTTipConversionLoggerAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ads/growth/aymt/log/conversion/", {
        tip_id: {
            type: "String"
        },
        channel_id: {
            type: "String"
        },
        aymt_data: {
            type: "String"
        }
    })
}
), null);
__d("XAYMTTipImpressionLoggerAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ads/growth/aymt/log/impression/", {
        tip_id: {
            type: "String"
        },
        channel_id: {
            type: "String"
        },
        aymt_data: {
            type: "String"
        },
        reason: {
            type: "String"
        },
        message: {
            type: "String"
        },
        extra_data: {
            type: "String"
        }
    })
}
), null);
__d("XAYMTTipTourCompleteLoggerAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ads/growth/aymt/log/tour_complete/", {
        tip_id: {
            type: "String"
        },
        channel_id: {
            type: "String"
        },
        aymt_data: {
            type: "String"
        }
    })
}
), null);
__d("XAdsCMTipQEAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ads/manager/ajax/check_tip_qe/", {
        tip_id: {
            type: "String",
            required: !0
        },
        channel_id: {
            type: "String",
            required: !0
        }
    })
}
), null);
__d("AYMTClientSideLogging", ["AsyncRequest", "XAdsCMTipQEAsyncController", "XAYMTMultiTipAsyncClickController", "XAYMTMultiTipCarouselNavigationLoggerAsyncController", "XAYMTTipConversionLoggerAsyncController", "XAYMTTipImpressionLoggerAsyncController", "XAYMTTipTourCompleteLoggerAsyncController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logEligibilityAndCheckQE = a;
    f.logImpression = c;
    f.logXout = d;
    f.logClick = e;
    f.logTourComplete = g;
    f.logConversion = h;
    f.logTourStepImpression = i;
    f.logRenderingTypeImpression = j;
    f.logCarouselNavigation = k;
    f.logClickNew = l;
    f.logImpressionNew = m;
    f.logXoutNew = n;
    f.logTourCompleteNew = o;
    f.logTourStepImpressionNew = p;
    f.logRenderingTypeImpressionNew = q;
    f.logCarouselNavigationNew = r;
    function a(a, c, d, e) {
        a = b("XAdsCMTipQEAsyncController").getURIBuilder().setString("tip_id", d.data.tip_id).setString("channel_id", d.data.channel_id).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).setHandler(e).send()
    }
    function c(a, c, d) {
        a = b("XAYMTTipImpressionLoggerAsyncController").getURIBuilder().setString("tip_id", a).setString("channel_id", c);
        d != null && (a = a.setString("extra_data", d));
        a = a.getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function d(a, c, d, e) {
        d === void 0 && (d = !0);
        a = b("XAYMTMultiTipAsyncClickController").getURIBuilder().setString("tip_id", a).setString("channel_id", c).setString("target", "xout").setBool("handled_delete", d);
        e != null && (a = a.setString("extra_data", e));
        a = a.getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function e(a, c, d) {
        a = b("XAYMTMultiTipAsyncClickController").getURIBuilder().setString("tip_id", a).setString("channel_id", c).setString("target", "click");
        d != null && (a = a.setString("extra_data", d));
        a = a.getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function g(a, c) {
        a = b("XAYMTTipTourCompleteLoggerAsyncController").getURIBuilder().setString("tip_id", a).setString("channel_id", c).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function h(a, c) {
        a = b("XAYMTTipConversionLoggerAsyncController").getURIBuilder().setString("tip_id", a).setString("channel_id", c).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function i(a, c, d) {
        a = b("XAYMTTipImpressionLoggerAsyncController").getURIBuilder().setString("tip_id", a).setString("channel_id", c).setString("reason", "tour_step").setString("message", d.toString()).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function j(a, c, d) {
        a = b("XAYMTTipImpressionLoggerAsyncController").getURIBuilder().setString("tip_id", a).setString("channel_id", c).setString("reason", "rendering_type").setString("message", d).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function k(a, c, d) {
        a = b("XAYMTMultiTipCarouselNavigationLoggerAsyncController").getURIBuilder().setString("tip_id", a).setString("channel_id", c).setString("message", d).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function l(a) {
        if (a == null)
            return;
        a = b("XAYMTMultiTipAsyncClickController").getURIBuilder().setString("tip_id", a.tip_id).setString("channel_id", a.channel_id).setString("aymt_data", JSON.stringify(a)).setString("target", "click").getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function m(a) {
        if (a == null)
            return;
        a = b("XAYMTTipImpressionLoggerAsyncController").getURIBuilder().setString("tip_id", a.tip_id).setString("channel_id", a.channel_id).setString("aymt_data", JSON.stringify(a)).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function n(a, c) {
        c === void 0 && (c = !0);
        if (a == null)
            return;
        a = b("XAYMTMultiTipAsyncClickController").getURIBuilder().setString("tip_id", a.tip_id).setString("channel_id", a.channel_id).setString("aymt_data", JSON.stringify(a)).setString("target", "xout").setBool("handled_delete", c).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function o(a) {
        a = b("XAYMTTipTourCompleteLoggerAsyncController").getURIBuilder().setString("tip_id", a.tip_id).setString("channel_id", a.channel_id).setString("aymt_data", JSON.stringify(a)).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function p(a, c) {
        a = b("XAYMTTipImpressionLoggerAsyncController").getURIBuilder().setString("tip_id", a.tip_id).setString("channel_id", a.channel_id).setString("aymt_data", JSON.stringify(a)).setString("reason", "tour_step").setString("message", c.toString()).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function q(a, c) {
        a = b("XAYMTTipImpressionLoggerAsyncController").getURIBuilder().setString("tip_id", a.tip_id).setString("channel_id", a.channel_id).setString("aymt_data", JSON.stringify(a)).setString("reason", "rendering_type").setString("message", c).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function r(a, c) {
        a = b("XAYMTMultiTipCarouselNavigationLoggerAsyncController").getURIBuilder().setString("tip_id", a.tip_id).setString("channel_id", a.channel_id).setString("aymt_data", JSON.stringify(a)).setString("message", c).getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
}
), null);
__d("PYMAFooterComponentUtils", ["cx", "CSS"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.setButtonStyleForSingleBlockFooter = a;
    f._adjustButtonFormat = c;
    f.setStyleForSingleBlockFooterV2 = d;
    f._adjustFooterStyle = e;
    var h = 20;
    function a(a) {
        this._adjustButtonFormat(a),
        a.addEventListener("DOMSubtreeModified", this._adjustButtonFormat(a))
    }
    function c(a) {
        a.offsetWidth > 167 && (b("CSS").removeClass(a, "_5ieo"),
        b("CSS").addClass(a, "_1j3d"))
    }
    function d(a) {
        this._adjustFooterStyle(a),
        a.addEventListener("DOMSubtreeModified", this._adjustFooterStyle(a))
    }
    function e(a) {
        var c;
        c = (c = a.parentElement) == null ? void 0 : c.parentElement;
        if (c == null)
            return;
        a.offsetHeight > h ? (b("CSS").addClass(c, "_3siz"),
        b("CSS").removeClass(c, "_3si_")) : (b("CSS").addClass(c, "_3si_"),
        b("CSS").removeClass(c, "_3siz"))
    }
}
), null);
__d("AdsSelectorBootloadedStore", ["AdsBaseBootloadedStore", "AdsDataAtom"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.onLoadedSelector = function(a, b) {
            return this.__onLoadedModule(function(a) {
                return a(b)
            }, a)
        }
        ;
        d.loadSelectorPostDispatch = function(a) {
            this.__loadModulePostDispatch(a)
        }
        ;
        d.__reduce = function(a) {
            a = this.__getModule().getValueEnforcing();
            b("AdsDataAtom").waitFor(a.getStores().map(function(a) {
                return a.getDispatchToken()
            }));
            a.getStores().some(function(a) {
                return a.hasChanged()
            }) && this.__emitChange()
        }
        ;
        c.create = function(a) {
            var b = function(b) {
                babelHelpers.inheritsLoose(a, b);
                function a() {
                    return b.apply(this, arguments) || this
                }
                return a
            }(c);
            b.__moduleID = a.getModuleId();
            return new b(a)
        }
        ;
        return c
    }(b("AdsBaseBootloadedStore"));
    e.exports = a
}
), null);
__d("XBizResourcesPageController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/business/resources/", {})
}
), null);
__d("AdsHelpTrayUtils", ["XBizResourcesPageController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getSupportLink = a;
    f.getReleventArticlesProcessedURL = c;
    function a(a) {
        return b("XBizResourcesPageController").getURIBuilder().getURI().toString()
    }
    function c() {
        return window.location.pathname.replace(/[0-9]/g, "")
    }
}
), null);
__d("PagesSelectableListCheckbox.react", ["cx", "React", "XUICheckboxInput.react", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b, c) {
            var d;
            d = a.call(this, b, c) || this;
            d.$1 = function(a) {
                d.props.onChange(a.target.checked)
            }
            ;
            return d
        }
        var d = c.prototype;
        d.render = function() {
            var a = (this.props.checked === null ? "_41g9" : "") + " _41ga";
            a = b("joinClasses")(a, this.props.className);
            return h.jsx("div", {
                className: a,
                children: h.jsx(b("XUICheckboxInput.react"), {
                    ref: "input",
                    checked: this.props.checked === !0,
                    className: "_41gb",
                    onChange: this.$1
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("PagesCalloutDispatcher", ["ExplicitRegistrationReactDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            b = a.call(this, b) || this;
            babelHelpers.assertThisInitialized(b).dispatch = b.dispatch.bind(babelHelpers.assertThisInitialized(b));
            return b
        }
        return b
    }(b("ExplicitRegistrationReactDispatcher"));
    c = new a({
        strict: !0
    });
    e.exports = c
}
), null);
__d("PagesCalloutStore", ["FluxReduceStore", "PagesCalloutDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getInitialState = function() {
            return {
                channelID: null,
                eligible: {},
                pageID: null,
                showing: [],
                surface: "unknown"
            }
        }
        ;
        c.reduce = function(a, b) {
            var c = babelHelpers["extends"]({}, a);
            switch (b.type) {
            case "init_surface":
                return {
                    channelID: b.data.channelID,
                    eligible: {},
                    pageID: b.data.pageID,
                    showing: [],
                    surface: b.data.surface
                };
            case "register_callout":
                if (!b.data.tip_id || b.data.tip_id === "")
                    break;
                c.eligible = babelHelpers["extends"]({}, a.eligible);
                c.eligible[b.data.tip_id] = babelHelpers["extends"]({}, b.data);
                break;
            case "show_callout":
                c.showing.push(b.data.tip_id);
                break;
            case "dismiss_callout":
                a = c.showing.indexOf(b.data.tip_id);
                a != null && c.showing.splice(a, 1);
                break
            }
            return c
        }
        ;
        return b
    }(b("FluxReduceStore"));
    a.__moduleID = e.id;
    c = new a(b("PagesCalloutDispatcher"));
    e.exports = c
}
), null);
__d("XPageCalloutAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/callout/", {
        pageid: {
            type: "Int",
            required: !0
        },
        tip_ids: {
            type: "IntVector"
        }
    })
}
), null);
__d("PagesCalloutHelper", ["AsyncRequest", "AYMTClientSideLogging", "BasicFBNux", "PagesCalloutDispatcher", "PagesCalloutStore", "Run", "XPageCalloutAsyncController"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        _initSurface: function(a, c, d) {
            b("PagesCalloutDispatcher").dispatch({
                data: {
                    surface: d,
                    pageID: a,
                    channelID: c
                },
                type: "init_surface"
            })
        },
        registerNux: function(a, c, d) {
            var e = this;
            if (a.length === 0)
                return;
            var f = function() {
                return e._showCalloutAndListenToClose(a, c, !0)
            };
            d = d ? {
                tip_id: a,
                showCallback: f,
                nux_id: d
            } : {
                tip_id: a,
                showCallback: f
            };
            b("PagesCalloutDispatcher").dispatch({
                type: "register_callout",
                data: d
            })
        },
        registerCallout: function(a, c, d) {
            var e = this;
            if (a.length === 0)
                return;
            var f = function() {
                return e._showCalloutAndListenToClose(a, c, !1)
            };
            d = d ? {
                tip_id: a,
                showCallback: f,
                nux_id: d
            } : {
                tip_id: a,
                showCallback: f
            };
            b("PagesCalloutDispatcher").dispatch({
                type: "register_callout",
                data: d
            })
        },
        showCalloutAfterLoading: function(a, c, d) {
            var e = this;
            b("PagesCalloutDispatcher").explicitlyRegisterStore(b("PagesCalloutStore"));
            this._initSurface(a, c, d);
            b("Run").onAfterLoad(function() {
                return e._pickAndShowCallout()
            })
        },
        logClick: function(a) {
            b("AYMTClientSideLogging").logClick(a, b("PagesCalloutStore").getState().channelID)
        },
        logXout: function(a) {
            b("AYMTClientSideLogging").logXout(a, b("PagesCalloutStore").getState().channelID);
            a = b("PagesCalloutStore").getState().eligible[a];
            a && a.nux_id && b("BasicFBNux").onDismiss(a.nux_id)
        },
        _pickAndShowCallout: function() {
            var a = this
              , c = b("PagesCalloutStore").getState();
            if (c.showing.length > 0)
                return;
            c = b("XPageCalloutAsyncController").getURIBuilder().setInt("pageid", c.pageID).setIntVector("tip_ids", Object.keys(c.eligible)).getURI();
            new (b("AsyncRequest"))().setHandler(function(b) {
                a._showCalloutAndLog(b.payload)
            }).setURI(c).send()
        },
        _showCalloutAndLog: function(a) {
            if (!a)
                return;
            var c = b("PagesCalloutStore").getState().eligible[a];
            if (!c)
                return;
            var d = c.showCallback;
            if (!d)
                return;
            var e = b("PagesCalloutStore").getState();
            if (e.showing.length > 0)
                return;
            d.apply();
            b("AYMTClientSideLogging").logImpression(a, e.channelID);
            c.nux_id && b("BasicFBNux").onView(c.nux_id)
        },
        _showCalloutAndListenToClose: function(a, c, d) {
            var e = this;
            c.isShown() || (c.show(),
            b("PagesCalloutDispatcher").dispatch({
                type: "show_callout",
                data: {
                    tip_id: a
                }
            }),
            c.subscribe("hide", function() {
                b("PagesCalloutDispatcher").dispatch({
                    type: "dismiss_callout",
                    data: {
                        tip_id: a
                    }
                }),
                e.logXout(a)
            }))
        }
    };
    e.exports = a
}
), null);
