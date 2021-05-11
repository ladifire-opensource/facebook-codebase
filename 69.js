if (self.CavalryLogger) {
    CavalryLogger.start_js(["gw0H8"]);
}

__d("AdsAdBlockWarningDialog", ["fbt", "SimpleXUIDialog"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.show = a;
    function a() {
        b("SimpleXUIDialog").show(g._("C\u00f4ng c\u1ee5 qu\u1ea3ng c\u00e1o c\u1ee7a Facebook c\u00f3 th\u1ec3 kh\u00f4ng ho\u1ea1t \u0111\u1ed9ng nh\u01b0 mong mu\u1ed1n khi tr\u00ecnh ch\u1eb7n qu\u1ea3ng c\u00e1o \u0111\u00e3 b\u1eadt trong m\u1ed9t tr\u00ecnh duy\u1ec7t web. H\u00e3y t\u1eaft tr\u00ecnh ch\u1eb7n qu\u1ea3ng c\u00e1o ho\u1eb7c th\u00eam URL c\u1ee7a trang web n\u00e0y l\u00e0 m\u1ed9t ngo\u1ea1i l\u1ec7 \u0111\u1ec3 b\u1ea1n c\u00f3 th\u1ec3 t\u1ea1o qu\u1ea3ng c\u00e1o trong b\u1ea5t k\u1ef3 s\u1ef1 c\u1ed1 n\u00e0o. Sau khi b\u1ea1n t\u1eaft tr\u00ecnh ch\u1eb7n qu\u1ea3ng c\u00e1o, b\u1ea1n s\u1ebd c\u1ea7n l\u00e0m m\u1edbi l\u1ea1i m\u00e0n h\u00ecnh c\u1ee7a b\u1ea1n."))
    }
}
), null);
__d("AdsSpinnerCover.react", ["cx", "FDSSpinner.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        var c = b("joinClasses")(a.className, "_2qei" + (a.show ? " _2qej" : "") + (a.background === "light" ? " _7heh" : "") + (a.background === "medium" ? " _2qek" : "") + (a.background === "dark" ? " _2qel" : ""));
        a = a.show === !0 ? h.jsx("div", {
            className: "_2qer",
            "data-testid": void 0,
            children: h.jsx(b("FDSSpinner.react"), {
                shade: a.background === "medium" || a.background === "dark" ? "light" : "dark"
            })
        }) : null;
        return h.jsx("div", {
            className: c,
            children: a
        })
    }
    ;
    a.defaultProps = {
        background: "light"
    };
    c = a;
    e.exports = c
}
), null);
__d("AdsCreateFlowQueryLimits", [], (function(a, b, c, d, e, f) {
    a = 500;
    f.AD_COUNTRY_QUERY_LIMIT = a;
    b = 12;
    f.TYPEAHEAD_LIMIT = b
}
), null);
__d("BUIAdoptionUtils", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.convertSizeToFDSSize = a;
    f.convertUseToType = b;
    f.convertSelectorXUIOnChangeToSUIOnChange = c;
    function a(a) {
        switch (a) {
        case "small":
        case "medium":
            return "small";
        case "large":
            return "medium";
        case "xlarge":
        case "xxlarge":
            return "large";
        case void 0:
            return void 0;
        default:
            g(0, 3370, a)
        }
    }
    function b(a) {
        switch (a) {
        case "success":
            return "success";
        case "notify":
            return "information";
        case "recommend":
            return "warning";
        case "warn":
            return "error";
        case "quiet":
            return "information";
        case void 0:
            return void 0;
        default:
            g(0, 3371, a)
        }
    }
    function c(a) {
        return function(b) {
            return a({
                value: b
            })
        }
    }
}
), null);
__d("LayerPage", ["Arbiter", "CSS", "DOM", "Layer", "LayerButtons", "LayerFormHooks", "LayerHideOnTransition", "LayerMouseHooks", "LayerTabIsolation", "ModalLayer", "Style"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d._configure = function(b, c) {
            this._fitWidth = !!b.fitWidth,
            b.width ? this._width = Math.floor(b.width) : this._width = null,
            b.bottomMargin !== void 0 ? this._bottomMargin = b.bottomMargin : this._bottomMargin = null,
            a.prototype._configure.call(this, b, c)
        }
        ;
        d._getDefaultBehaviors = function() {
            return a.prototype._getDefaultBehaviors.call(this).concat([i, b("LayerButtons"), b("LayerFormHooks"), b("LayerHideOnTransition"), b("LayerMouseHooks"), b("LayerTabIsolation"), b("ModalLayer")])
        }
        ;
        d._buildWrapper = function(a, c) {
            return b("DOM").create("div", null, c)
        }
        ;
        d.updatePosition = function() {
            var a = b("DOM").find(this.getRoot(), "div.uiLayerPage");
            if (this._fitWidth)
                b("Style").set(a, "width", h + "%");
            else if (this._width) {
                var c = b("DOM").find(a, "div.uiLayerPageContentWrap")
                  , d = this._width;
                b("CSS").hasClass(c, "uiLayerPageDefaultPadding") && (d += 2 * g);
                b("Style").set(a, "width", d + "px")
            }
            return !0
        }
        ;
        d.getContentRoot = function() {
            this._contentRoot || (this._contentRoot = b("DOM").find(this.getRoot(), ".uiOverlayContent"));
            return this._contentRoot
        }
        ;
        d.getBottomMargin = function() {
            return this._bottomMargin
        }
        ;
        return c
    }(b("Layer"));
    e.exports = a;
    var g = 15
      , h = 95
      , i = function() {
        function a(a) {
            this._layer = a,
            this._subscription = null
        }
        var c = a.prototype;
        c.enable = function() {
            this._subscription = this._layer.subscribe(["show", "hide"], function(a, c) {
                a === "show" ? b("Arbiter").inform("layer_shown", {
                    type: "LayerPage"
                }) : b("Arbiter").inform("layer_hidden", {
                    type: "LayerPage"
                })
            })
        }
        ;
        c.disable = function() {
            this._subscription && this._subscription.unsubscribe(),
            this._subscription = null
        }
        ;
        return a
    }()
}
), null);
__d("LayerPage.react", ["CSS", "LayerFadeOnHide", "LayerHideOnBlur", "LayerHideOnEscape", "LayerHideOnTransition", "LayerPage", "ReactLayer"], (function(a, b, c, d, e, f) {
    a = b("ReactLayer").createClass({
        immutableProps: {
            modal: null
        },
        getDefaultEnabledBehaviors: function() {
            return {
                fadeOnHide: b("LayerFadeOnHide"),
                hideOnBlur: b("LayerHideOnBlur"),
                hideOnEscape: b("LayerHideOnEscape"),
                hideOnTransition: b("LayerHideOnTransition")
            }
        },
        componentDidUpdate: function(a) {
            this.props.children !== a.children && this.layer.updatePosition()
        },
        createLayer: function(a) {
            var c = this.enumerateBehaviors(this.props.behaviors);
            c = {
                width: this.props.width,
                modal: this.props.modal,
                addedBehaviors: c,
                fitWidth: this.props.fitWidth
            };
            c = new (b("LayerPage"))(c,a);
            c.conditionShow(this.props.shown);
            a = c.getRoot();
            this.props.layerRootClass && a && b("CSS").addClass(a, this.props.layerRootClass);
            return c
        },
        receiveProps: function(a, b) {
            this.updateBehaviors(b.behaviors, a.behaviors),
            this.layer.conditionShow(a.shown)
        }
    });
    c = a;
    e.exports = c
}
), null);
__d("LayerPageContent.react", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            var a = "uiLayerPageContentWrap" + (this.props.useCustomPadding ? "" : " uiLayerPageDefaultPadding");
            return h.jsx("div", {
                className: "uiLayerPageInner",
                children: h.jsx("div", {
                    className: "uiLayerPage uiOverlay",
                    children: h.jsx("div", {
                        className: "uiOverlayContent",
                        children: h.jsx("div", {
                            className: a,
                            children: h.jsx("div", {
                                className: "uiLayerPageContent",
                                children: this.props.children
                            })
                        })
                    })
                })
            })
        }
        ;
        return b
    }(h.Component);
    e.exports = a
}
), null);
__d("StickyArea.react", ["cx", "React", "ReactDOM", "StickyArea", "joinClasses"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = new (b("StickyArea"))(b("ReactDOM").findDOMNode(this),!0,this.props.offset || 0,{
                boundToContainer: this.props.boundToContainer,
                stickTo: this.props.stickTo,
                zIndexOverride: this.props.zIndexOverride
            })
        }
        ;
        d.componentDidUpdate = function(a) {
            this.props.offset !== a.offset && this.$1.setOffset(this.props.offset),
            b("StickyArea").reflow()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1.destroy(),
            this.$1 = null
        }
        ;
        d.setOffset = function(a) {
            this.$1.setOffset(a)
        }
        ;
        d.render = function() {
            return h.jsx("div", babelHelpers["extends"]({}, this.props, {
                className: b("joinClasses")(this.props.className, "_k _77by"),
                ref: "root",
                children: this.props.children
            }))
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.stickTo = b("StickyArea").stickTo;
    a.defaultProps = {
        boundToContainer: !0,
        stickTo: b("StickyArea").stickTo.WINDOW
    }
}
), null);
__d("GeoCard.react", ["GeoPrivateCard.react", "GeoPrivateMakeComponent", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        return g.jsx(b("GeoPrivateCard.react"), babelHelpers["extends"]({
            ref: c
        }, a))
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoCard", g.forwardRef(a));
    e.exports = c
}
), null);
__d("GeoCardHeader.react", ["GeoPrivateCardHeader.react"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("GeoPrivateCardHeader.react");
    e.exports = a
}
), null);
__d("PixelNumConverter", [], (function(a, b, c, d, e, f) {
    f.pixelValue = a;
    f.numValue = b;
    function g(a) {
        return a != null && !isNaN(a) && isFinite(a) && a !== ""
    }
    function a(a) {
        return g(a) ? Number(a) + "px" : "auto"
    }
    function b(a) {
        a = a.replace("px", "");
        return g(a) ? Number(a) : 0
    }
}
), null);
__d("stopIframe", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.contentWindow;
        a.stop ? a.stop() : a.document.execCommand && a.document.execCommand("Stop")
    }
}
), null);
__d("AdPreviewIFramePOSTRequest", ["Arbiter", "CSS", "DOM", "DOMEventListener", "FBLogger", "Form", "lowerFacebookDomain", "stopIframe"], (function(a, b, c, d, e, f) {
    f.init = a;
    function g(a, c) {
        if (!c)
            return;
        var d = b("DOMEventListener").add(a, "load", function() {
            if (!c)
                return;
            b("CSS").hide(c);
            d.remove();
            b("Arbiter").inform("AdPreview/IFrameLoadSuccess", {
                iframe: a
            })
        });
        b("CSS").show(c)
    }
    function a(a, c, d, e, f) {
        function h() {
            g(e, f),
            b("Form").post(a, c, d)
        }
        try {
            b("lowerFacebookDomain")()
        } catch (a) {
            b("FBLogger")("ads_previews").catching(a).warn("Exception lowering domain")
        }
        h();
        return b("Arbiter").subscribe("contextualLayer/toggle", function(a, c) {
            if (!b("DOM").contains(c.contentRoot, e))
                return;
            c.show ? h() : b("stopIframe")(e)
        })
    }
}
), null);
__d("AdPreviewIFrameResizeListener", ["Arbiter", "DOM", "PixelNumConverter", "Style", "lowerFacebookDomain"], (function(a, b, c, d, e, f) {
    f.listen = a;
    function a(a, c, d, e) {
        var f = !1
          , g = !1;
        try {
            b("lowerFacebookDomain")()
        } catch (a) {
            g = !0
        }
        var h = function(g) {
            var h = g.frame
              , i = g.frameHeight;
            g = g.storyHeight;
            if (f || h !== a)
                return;
            c.height = i;
            if (!d)
                return;
            h = !e || !g ? i : g - 1;
            b("Style").set(d, "height", b("PixelNumConverter").pixelValue(h))
        };
        g && window.addEventListener("message", function(a) {
            a.data.event === "fb:preview:iframe/resize" && h(a.data.data)
        }, !1);
        return b("Arbiter").subscribe(["iframe/resize", "contextualLayer/toggle"], function(a, d) {
            if (a === "iframe/resize")
                h(d);
            else {
                if (!b("DOM").contains(d.contentRoot, c))
                    return;
                d.show ? f = !1 : f = !0
            }
        })
    }
}
), null);
__d("promiseAsyncRequest", ["AsyncRequest"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        var d = new (b("AsyncRequest"))();
        c != null && (c.method != null && d.setMethod(c.method),
        c.isReadOnly != null && d.setReadOnly(c.isReadOnly),
        c.data != null && d.setData(c.data),
        c.allowCrossOrigin != null && d.setAllowCrossOrigin(c.allowCrossOrigin));
        d.setURI(a);
        return d.exec()
    }
}
), null);
__d("MenuTogglingItem", ["DOM", "MenuItem"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.handleClick = function() {
            this.toggleMenuItem();
            return a.prototype.handleClick.call(this)
        }
        ;
        d.toggleMenuItem = function() {
            this._data = babelHelpers["extends"]({}, this._data, {
                ajaxify: this._data.toggleAjaxify,
                toggleAjaxify: this._data.ajaxify,
                value: this._data.toggleValue,
                toggleValue: this._data.value,
                markup: this._data.toggleMarkup,
                toggleMarkup: this._data.markup
            }),
            this._rerender()
        }
        ;
        d.setValue = function(a) {
            this._data = babelHelpers["extends"]({}, this._data, {
                value: a
            })
        }
        ;
        d._rerender = function() {
            var a = this._anchor;
            b("DOM").replace(a, this._renderItemContent())
        }
        ;
        return c
    }(b("MenuItem"));
    e.exports = a
}
), null);
__d("getEventTarget", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = 3;
    function a(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return a.nodeType === g ? a.parentNode : a
    }
}
), null);
__d("XCookiesPolicyController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/policies/cookies/", {
        ref: {
            type: "String"
        },
        locale: {
            type: "String"
        },
        settings_tracking: {
            type: "String"
        },
        list: {
            type: "Exists",
            defaultValue: !1
        }
    })
}
), null);
__d("XPagesTransparencyDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/transparency/transparency_dialog/", {
        hide_ads_summary: {
            type: "Bool",
            defaultValue: !1
        },
        page_id: {
            type: "FBID",
            required: !0
        },
        active_tab: {
            type: "Enum",
            enumType: 1
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
__d("XPrivacyBasicsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/about/basics/{?subpage}/{?module}/", {
        subpage: {
            type: "String"
        },
        module: {
            type: "String"
        }
    })
}
), null);
