if (self.CavalryLogger) {
    CavalryLogger.start_js(["YrDDm"]);
}

__d("SUIInternalLayer.react", ["cx", "Locale", "React", "SUICloseButton.react", "SUIErrorComponentUtil", "SUITheme", "joinClasses", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").defaultProps, {
        hasCloseButton: !0,
        isFullBleed: !1,
        isOverflowXAuto: !0,
        isOverflowYAuto: !0,
        role: "region"
    });
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.$1 = function(a, b, c) {
            return a + "px       " + b + "px       " + c + "px"
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.children
              , d = a.footer
              , e = a.hasCloseButton
              , f = a.header
              , g = a.isFullBleed
              , i = a.margin
              , j = a.label
              , k = a.labelledBy;
            a = a.role;
            var l = b("SUITheme").get(this)
              , m = l.SUIModalCard
              , n = m.closeButtonPosition;
            l = n + b("SUICloseButton.react").getHeightForSize(l, "large");
            l = f ? m.bodyVerticalMargin : l;
            var o = {
                backgroundColor: m.backgroundColor,
                boxShadow: e ? m.modalBoxShadow : m.cardBoxShadow
            };
            m.borderRadius != null && (o.borderRadius = m.borderRadius);
            return h.jsxs("div", {
                "aria-label": j,
                "aria-labelledby": k,
                className: b("joinClasses")("_ww-", i),
                "data-testid": void 0,
                role: a,
                style: o,
                children: [e ? h.jsx(b("SUICloseButton.react"), {
                    layerCancel: !0,
                    size: "large",
                    style: (j = {},
                    j[b("Locale").isRTL() ? "left" : "right"] = n,
                    j.position = "absolute",
                    j.top = n,
                    j)
                }) : null, f ? h.cloneElement(f, {
                    errorMessage: this.props.errorMessage,
                    errorTooltipPosition: this.props.errorTooltipPosition,
                    warningMessage: this.props.warningMessage
                }) : null, h.jsx("div", {
                    className: "_ww_",
                    style: babelHelpers["extends"]({}, m.typeStyle, {
                        padding: g ? null : this.$1(l, m.bodyHorizontalMargin, m.bodyVerticalMargin),
                        overflowX: this.props.isOverflowXAuto ? "auto" : "visible",
                        overflowY: this.props.isOverflowYAuto ? "auto" : "visible"
                    }),
                    children: c
                }), d]
            })
        }
        ;
        return c
    }(h.PureComponent);
    c.defaultProps = a;
    d = b("withSUITheme")(c);
    e.exports = d
}
), null);
__d("FDSCard.react", ["FDSPrivateCardLayoutContext", "FDSPrivateThemeContext.react", "React", "SUIErrorComponentUtil", "SUIInternalLayer.react", "getSUICloseButtonUniform.fds", "getSUIModalCardUniform.fds", "makeFDSStandardComponent", "makeSUIThemeGetter"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIThemeGetter")({
        SUICloseButton: b("getSUICloseButtonUniform.fds"),
        SUIModalCard: b("getSUIModalCardUniform.fds")
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                hasHeader: c.props.header != null,
                hasFooter: c.props.footer != null
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        c.getDerivedStateFromProps = function(a, b) {
            var c = a.header != null;
            a = a.footer != null;
            return c !== b.hasHeader || a !== b.hasFooter ? {
                hasHeader: c,
                hasFooter: a
            } : null
        }
        ;
        var d = c.prototype;
        d.render = function() {
            var a = h(this.context);
            return g.jsx(b("FDSPrivateCardLayoutContext").Provider, {
                value: this.state,
                children: g.jsx(b("SUIInternalLayer.react"), {
                    children: this.props.children,
                    "data-testid": void 0,
                    errorMessage: this.props.errorMessage,
                    errorTooltipPosition: this.props.errorTooltipPosition,
                    footer: this.props.footer,
                    hasCloseButton: !1,
                    header: this.props.header,
                    isFullBleed: !0,
                    isOverflowXAuto: this.props.isOverflowXAuto,
                    isOverflowYAuto: this.props.isOverflowYAuto,
                    label: this.props.label,
                    labelledBy: this.props.labelledBy,
                    margin: this.props.margin,
                    preserveThemeFromContext: !0,
                    theme: a,
                    warningMessage: this.props.warningMessage
                })
            })
        }
        ;
        return c
    }(g.Component);
    a.contextType = b("FDSPrivateThemeContext.react");
    a.defaultProps = b("SUIErrorComponentUtil").defaultProps;
    c = b("makeFDSStandardComponent")("FDSCard", a);
    e.exports = c
}
), null);
__d("Typography.atlas", ["cx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getClassName = a;
    b = ["xs", "s", "m", "l", "xl"];
    f.Sizes = b;
    c = ["regular", "bold"];
    f.Weights = c;
    d = ["blue", "dark", "darkBlue", "green", "light", "lightBlue", "medium", "orange", "red", "white"];
    f.Colors = d;
    function a(a, b, c) {
        return "_4vo9" + (a === "l" ? " _4vod" : "") + (a === "xl" ? " _4voe" : "") + (b === "bold" ? " _4voh" : "") + (a === "m" ? " _4voc" : "") + (c === "light" ? " _4von" : "") + (c === "medium" ? " _4voo" : "") + (c === "dark" ? " _4vop" : "") + (c === "orange" ? " _5k1o" : "") + (c === "red" ? " _4voq" : "") + (c === "blue" ? " _4vor" : "") + (c === "darkBlue" ? " _mo-" : "") + (c === "lightBlue" ? " _4_0z" : "") + (a === "s" ? " _4vob" : "") + (c === "white" ? " _4vos" : "") + (a === "xs" ? " _4voa" : "") + (c === "green" ? " _43jm" : "") + (b === "regular" ? " _4vom" : "")
    }
}
), null);
__d("IconConfig.atlas", ["cx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        addItem: "_2dev",
        ads: "_382x",
        advertisers: "_382y",
        allDocuments: "_2bs-",
        assets: "_256d",
        assign: "_42mq",
        assignment: "_2dew",
        associationsFile: "_5bvf",
        atlasLogo: "_3bw3",
        backwardArrow: "_10rf",
        blockedItem: "_2dex",
        brandSafety: "_2dez",
        calendar: "_3fzc",
        calendarDay: "_3bw4",
        calendarMonth: "_3bw5",
        campaigns: "_382z",
        chart: "_3bw6",
        check: "_2de-",
        chevronDown: "_42mr",
        chevronLeft: "_42ms",
        chevronRight: "_42mt",
        chevronUp: "_42mu",
        clickThru: "_382-",
        clock: "_2_bn",
        connect: "_2de_",
        copy: "_3bw8",
        create: "_pif",
        creativeConcept: "_382_",
        dash: "_1z18",
        decisionGroups: "_qpt",
        defaultAd: "_3830",
        "delete": "_3bw9",
        disconnect: "_2df0",
        document: "_2bt0",
        downArrow: "_2n8m",
        download: "_3bwa",
        edit: "_1cdu",
        encryptionFile: "_2bt1",
        evenCreditModel: "_sbd",
        exclude: "_3sbg",
        "export": "_3bwb",
        favorite: "_42mv",
        file: "_1cdv",
        filter: "_3bwc",
        flashDark: "_1cdw",
        flashLight: "_1cdx",
        folder: "_1_nt",
        folderZIP: "_5ymd",
        forwardArrow: "_2n8n",
        gauge: "_3bwd",
        generate: "_42mw",
        health: "_3bwe",
        help: "_3m7e",
        hierarchy: "_3fzd",
        html: "_1cdy",
        htmlFile: "_3m7f",
        "import": "_3bwf",
        information: "_3bwg",
        "information-open": "_2df1",
        intersection: "_3sbh",
        lastClickModel: "_sbe",
        liverailLogo: "_5ymr",
        menu: "_3e67",
        metadata: "_256j",
        metadataFile: "_5bvg",
        money: "_42mx",
        more: "_10rg",
        notification: "_3bwh",
        notificationActive: "_3832",
        packages: "_3833",
        percent: "_42my",
        photo: "_1cdz",
        placement: "_2df2",
        placements: "_3834",
        positionalModel: "_sbf",
        prioritize: "_42mz",
        privateInventory: "_5yms",
        removeItem: "_2df3",
        replace: "_3fze",
        reports: "_3835",
        review: "_3bwi",
        rtb: "_3836",
        search: "_42m-",
        segments: "_3837",
        settings: "_3bwj",
        sharingFrom: "_5ymt",
        sharingTo: "_5ym_",
        statisticalModel: "_sbg",
        success: "_3bwk",
        targeting: "_3838",
        timeDecayModel: "_sbh",
        timer: "_3839",
        tracking: "_383a",
        trackingNav: "_5mde",
        trackingPixel: "_383b",
        traffic: "_3bwl",
        union: "_3sbi",
        universalTag: "_4fd5",
        upArrow: "_2n8o",
        user: "_3bwm",
        users: "_3bwn",
        video: "_4ndo",
        warning: "_3bwo",
        weighting: "_256l",
        x1: "_1cd-"
    };
    e.exports = a
}
), null);
__d("Icon.atlas", ["cx", "IconConfig.atlas", "React", "Typography.atlas", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = h.PureComponent;
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("IconConfig.atlas")[this.props.name]
              , c = this.props.style;
            this.props.height != null && this.props.height !== 0 && (c = babelHelpers["extends"]({
                fontSize: this.props.height + "px",
                lineHeight: this.props.height + "px"
            }, c));
            var d = null;
            this.props.color && (d = b("Typography.atlas").getClassName(null, null, this.props.color));
            return h.jsx("span", babelHelpers["extends"]({}, this.props, {
                className: b("joinClasses")(this.props.className, "_3bwp", d, a),
                style: c
            }))
        }
        ;
        return c
    }(a);
    e.exports = c
}
), null);
__d("TimelineCoverCollapse", ["DOMDimensions", "Style", "TidyArbiter", "$", "getViewportDimensions"], (function(a, b, c, d, e, f) {
    f.collapse = a;
    function a(a, c) {
        c--;
        a = b("getViewportDimensions")().height;
        var d = b("DOMDimensions").getDocumentDimensions().height;
        a = a + c;
        d <= a && b("Style").set(b("$")("globalContainer"), "min-height", a + "px");
        window.scrollBy(0, c);
        b("TidyArbiter").inform("TimelineCover/coverCollapsed", c, "state")
    }
}
), null);
__d("FacebarPlaceholderShortcut", ["fbt", "KeyboardShortcuts", "translateKey"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this._input = a,
            this._listener = null
        }
        var c = a.prototype;
        c.enable = function() {
            this._registerListener()
        }
        ;
        c._registerListener = function() {
            this._listener && this._listener.remove(),
            this._listener = b("KeyboardShortcuts").register("SLASH", this._handleKeydown.bind(this), {
                filter: function(a, b) {
                    return !a.getModifiers().shift
                },
                persistOnTransition: !0,
                shortcutInfo: {
                    displayKeys: [b("translateKey")("/")],
                    description: g._("T\u00ecm ki\u1ebfm")
                }
            })
        }
        ;
        c.disable = function() {
            this._listener && this._listener.remove(),
            this._listener = null
        }
        ;
        c._handleKeydown = function(a) {
            this._input.focus();
            return !1
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("XFacebarBootloadController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/typeahead/search/facebar/bootload/", {
        placeholder_id: {
            type: "String"
        }
    })
}
), null);
__d("FacebarBootloader", ["AsyncRequest", "BanzaiODS", "CSS", "Event", "FacebarPlaceholderShortcut", "Run", "SubscriptionsHandler", "XFacebarBootloadController", "getActiveElement"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "facebar_bootloader"
      , h = g + "_";
    a = {
        isRequested: !1,
        isFocused: !1,
        isInitialized: !1,
        init: function(a, c, d, e) {
            var f = this;
            this.reset();
            this.subscriptions = new (b("SubscriptionsHandler"))();
            this.placeholder = d;
            this.searchInput = a;
            this.shortcutHandler = new (b("FacebarPlaceholderShortcut"))(a);
            this.loadingIndicator = c;
            this.shortcutHandler.enable();
            this.subscriptions.addSubscriptions(b("Event").listen(a, "focus", function() {
                f.requestSearch(),
                f.showLoadingIndicator()
            }), b("Event").listen(d, "mouseover", this.requestSearch.bind(this)), b("Event").listen(a, "invalid", function(a) {
                return a.preventDefault()
            }));
            e && this.subscriptions.addSubscriptions(b("Event").listen(window, "load", this.requestSearch.bind(this)));
            b("Run").onUnload(this.reset.bind(this));
            this.isInitialized = !0;
            (a.value || b("getActiveElement")() == a) && (this.requestSearch(),
            this.showLoadingIndicator())
        },
        showLoadingIndicator: function() {
            this.loadingIndicator && b("CSS").show(this.loadingIndicator)
        },
        reset: function() {
            this.subscriptions && this.subscriptions.release(),
            this.shortcutHandler && this.shortcutHandler.disable(),
            this.searchInput = this.subscriptions = this.shortcutHandler = null,
            this.loadingIndicator = null,
            this.isRequested = !1,
            this.isFocused = !1,
            this.isInitialized = !1
        },
        requestSearch: function() {
            b("getActiveElement")() == this.searchInput && !this.isFocused && (this.isFocused = !0,
            this.focusTime = Date.now());
            if (this.isRequested || !this.isInitialized)
                return;
            this.isRequested = !0;
            var a = b("XFacebarBootloadController").getURIBuilder().setString("placeholder_id", this.placeholder.getAttribute("id")).getURI()
              , c = new (b("AsyncRequest"))();
            c.setURI(a).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(!0).setErrorHandler(function(a) {
                b("BanzaiODS").bumpEntityKey(2966, g, h + "request_failed"),
                a && a.errorSummary ? b("BanzaiODS").bumpEntityKey(2966, g, h + "request_failed_" + a.errorSummary) : b("BanzaiODS").bumpEntityKey(2966, g, h + "request_failed_no_error_summary"),
                this.isRequested = !1
            }).send()
        },
        setFocus: function(a, c, d) {
            if (!this.searchInput)
                return;
            b("BanzaiODS").bumpEntityKey(2966, g, h + "response_arrived");
            (this.searchInput.value || this.isFocused) && (a.getCore().isFocused = !0,
            a.getCore().input.setValue(d.fromString(this.searchInput.value), !0),
            a.getCore().setStartTime(this.focusTime),
            c.focus(),
            c.setSelection({
                length: this.searchInput.selectionEnd - this.searchInput.selectionStart,
                offset: this.searchInput.selectionStart
            }),
            c.togglePlaceHolder && c.togglePlaceholder());
            this.reset()
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("FacebarStructuredFragment", [], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
        if (a && b)
            return a.toLowerCase() == b.toLowerCase();
        else
            return !a && !b
    }
    var h = new RegExp("[\\u0590-\\u07bf\\u08a0-\\u08ff\\ufb1d-\\ufb4f\\ufb50-\\ufefc\\u200e-\\u200f\\u202a-\\u202e]");
    a = function() {
        function a(a) {
            this._text = String(a.text),
            this._uid = a.uid ? String(a.uid) : null,
            this._type = a.type ? String(a.type) : null,
            this._typeParts = null,
            this._isLocal = Boolean(a.isLocal),
            this._categoryName = a.categoryName ? a.categoryName : null
        }
        var b = a.prototype;
        b.getText = function() {
            return this._text
        }
        ;
        b.getUID = function() {
            return this._uid
        }
        ;
        b.getType = function() {
            return this._type
        }
        ;
        b.getTypePart = function(a) {
            return this._getTypeParts()[a]
        }
        ;
        b.getLength = function() {
            return this._text.length
        }
        ;
        b.isType = function(a) {
            for (var b = 0; b < arguments.length; b++)
                if (!g(arguments[b], this.getTypePart(b)))
                    return !1;
            return !0
        }
        ;
        b.isLocal = function() {
            return this._isLocal
        }
        ;
        b.getCategoryName = function() {
            return this._categoryName
        }
        ;
        b.isWhitespace = function() {
            return /^\s*$/.test(this._text)
        }
        ;
        b.hasRTL = function() {
            return h.test(this._text)
        }
        ;
        b.toStruct = function() {
            return {
                text: this._text,
                type: this._type,
                uid: this._uid,
                isLocal: this._isLocal,
                categoryName: this._categoryName
            }
        }
        ;
        b.getHash = function(a) {
            a = a != null ? this._getTypeParts().slice(0, a).join(":") : this._type;
            return String(a) + "::" + this._text
        }
        ;
        b._getTypeParts = function() {
            var a = this._typeParts;
            a == null && (a = this._type != null ? this._type.split(":") : [],
            this._typeParts = a);
            return a
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FacebarStructuredText", ["FacebarStructuredFragment", "createArrayFromMixed"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /\s+$/;
    function h(a) {
        if (!a)
            return [];
        else if (a instanceof k)
            return a.toArray();
        else
            return b("createArrayFromMixed")(a).map(function(a) {
                return new (b("FacebarStructuredFragment"))(a)
            })
    }
    function i(a) {
        return new (b("FacebarStructuredFragment"))({
            text: a,
            type: "text"
        })
    }
    function j(a, c, d) {
        var e = a.getText();
        c = e.replace(c, d);
        if (e != c)
            return new (b("FacebarStructuredFragment"))({
                text: c,
                type: a.getType(),
                uid: a.getUID()
            });
        else
            return a
    }
    var k = function() {
        function a(a) {
            this._fragments = a || [],
            this._hash = null
        }
        var b = a.prototype;
        b.matches = function(a, b) {
            if (a) {
                var c = this._fragments
                  , d = a._fragments;
                return c.length == d.length && !c.some(function(a, c) {
                    var e;
                    !b && a.getUID() ? e = a.getUID() != d[c].getUID() : e = a.getText() != d[c].getText() || a.getType() != d[c].getType();
                    return e || a.isLocal() != d[c].isLocal()
                })
            }
            return !1
        }
        ;
        b.trim = function() {
            var b = null
              , c = null;
            this.forEach(function(a, d) {
                a.isWhitespace() || (b === null && (b = d),
                c = d)
            });
            if (c !== null) {
                var d = this._fragments.slice(b, c + 1);
                d.push(j(d.pop(), g, ""));
                return new a(d)
            } else
                return new a([])
        }
        ;
        b.pad = function() {
            var b = this.getFragment(-1);
            if (b && !g.test(b.getText()) && b.getText() !== "")
                return new a(this._fragments.concat(i(" ")));
            else
                return this
        }
        ;
        b.forEach = function(a) {
            this._fragments.forEach(a);
            return this
        }
        ;
        b.matchType = function(a) {
            var b = null;
            for (var c = 0; c < this._fragments.length; c++) {
                var d = this._fragments[c]
                  , e = d.isType.apply(d, arguments);
                if (e && !b)
                    b = d;
                else if (e || !d.isWhitespace())
                    return null
            }
            return b
        }
        ;
        b.hasType = function(a) {
            var b = arguments;
            return this._fragments.some(function(a) {
                return !a.isWhitespace() && a.isType.apply(a, b)
            })
        }
        ;
        b.isLocal = function() {
            return this._fragments.some(function(a) {
                return a.isLocal()
            })
        }
        ;
        b.getCategoryName = function() {
            var a = this._fragments.filter(function(a) {
                return a.getCategoryName()
            });
            return a.length > 0 ? a[0].getCategoryName() : null
        }
        ;
        b.endsOnType = function(a) {
            var b = arguments
              , c = this._fragments[this._fragments.length - 1];
            return !!c && !c.isWhitespace() && c.isType.apply(c, b)
        }
        ;
        b.isEmptyOrWhitespace = function() {
            return !this._fragments.some(function(a) {
                return !a.isWhitespace()
            })
        }
        ;
        b.hasRTL = function() {
            return this._fragments.some(function(a) {
                return a.hasRTL()
            })
        }
        ;
        b.isEmpty = function() {
            return this.getLength() === 0
        }
        ;
        b.getFragment = function(a) {
            return this._fragments[a >= 0 ? a : this._fragments.length + a]
        }
        ;
        b.getCount = function() {
            return this._fragments.length
        }
        ;
        b.getLength = function() {
            return this._fragments.reduce(function(a, b) {
                return a + b.getLength()
            }, 0)
        }
        ;
        b.toStruct = function() {
            return this._fragments.map(function(a) {
                return a.toStruct()
            })
        }
        ;
        b.toArray = function() {
            return this._fragments.slice()
        }
        ;
        b.toString = function() {
            return this._fragments.map(function(a) {
                return a.getText()
            }).join("")
        }
        ;
        b.getHash = function() {
            this._hash === null && (this._hash = this._fragments.map(function(a) {
                if (a.getUID())
                    return "[[" + a.getHash(1) + "]]";
                else
                    return a.getText()
            }).join(""));
            return this._hash
        }
        ;
        a.fromStruct = function(b) {
            return new a(h(b))
        }
        ;
        a.fromString = function(b) {
            return new a([i(b.toString())])
        }
        ;
        return a
    }();
    e.exports = k
}
), null);
__d("FacebarNavigation", ["csx", "Arbiter", "DOMQuery", "FacebarBootloader", "FacebarStructuredText", "FlipDirection", "Input", "QueryHistory", "URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = null, j = null, k = null, l = !1, m = !0, n = !1;
    function o(a, b) {
        n || (k = a),
        n = !1,
        l = b,
        m = !1,
        p()
    }
    function p() {
        if (m)
            return;
        else
            j ? (l && j.pageTransition(),
            j.setPageQuery(k),
            m = !0) : i && k && !b("Input").getValue(i) && b("Input").setValue(i, k.structure.toString() + " ");
        i != null && (b("FlipDirection").setDirection(i),
        i.blur())
    }
    function q(a) {
        return String(a.getPath()).startsWith("/search/") && a.getQueryData().epa === "SERP_TAB" && !a.getQueryData().hard_refresh
    }
    b("Arbiter").subscribe("page_transition", function(a, c) {
        q(c.uri) || o(b("QueryHistory").get(c.uri), !0)
    });
    b("Arbiter").subscribe("save_facebar_query", function(a, b) {
        n = !0
    });
    a = {
        registerInput: function(a) {
            i = b("DOMQuery").scry(a, "._586f")[0],
            i == null && (i = b("DOMQuery").scry(a, "._1frb")[0]),
            p()
        },
        registerBehavior: function(a) {
            j = a,
            p()
        },
        setPageQuery: function(a) {
            b("QueryHistory").set((h || (h = b("URI"))).getNextURI(), a),
            a.structure instanceof b("FacebarStructuredText") || (a.structure = b("FacebarStructuredText").fromStruct(a.structure)),
            o(a, !1),
            b("FacebarBootloader").requestSearch()
        }
    };
    e.exports = a
}
), null);
__d("SUIAtlasIcon.react", ["Icon.atlas", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.colorDefault
          , d = a.colorDisabled
          , e = a.colorFocused
          , f = a.colorHover
          , h = a.disabled
          , i = a.focused
          , j = a.hover
          , k = a.size
          , l = a.style;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["colorDefault", "colorDisabled", "colorFocused", "colorHover", "disabled", "focused", "hover", "size", "style"]);
        c = c;
        h === !0 && d != null && d !== "" ? c = d : i === !0 && e != null && e !== "" ? c = e : j === !0 && f != null && f !== "" && (c = f);
        return g.jsx(b("Icon.atlas"), babelHelpers["extends"]({}, a, {
            height: k,
            style: babelHelpers["extends"]({
                color: c
            }, l)
        }))
    }
}
), null);
