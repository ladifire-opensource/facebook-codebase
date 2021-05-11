if (self.CavalryLogger) {
    CavalryLogger.start_js(["fmNVq"]);
}

__d("useKeyboardFocus", ["KeyStatus", "React", "RTLKeys", "VirtualCursorStatus"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useState(!1)
          , d = c[0]
          , e = c[1];
        c = g.useCallback(function(c) {
            (b("VirtualCursorStatus").isVirtualCursorTriggered() || b("KeyStatus").isKeyDown()) && e(!0);
            if (a && a.onFocus)
                return a.onFocus(c)
        }, [a == null ? void 0 : a.onFocus]);
        var f = g.useCallback(function(b) {
            e(!1);
            if (a && a.onBlur)
                return a.onBlur(b)
        }, [a == null ? void 0 : a.onBlur])
          , h = g.useCallback(function(c) {
            (c.keyCode === b("RTLKeys").RETURN || c.keyCode === b("RTLKeys").SPACE) && e(!0);
            if (a && a.onKeyDown)
                return a.onKeyDown(c)
        }, [a == null ? void 0 : a.onKeyDown]);
        return {
            isKeyboardFocused: d,
            onFocus: c,
            onBlur: f,
            onKeyDown: h
        }
    }
}
), null);
__d("ChatOpenTabEventLogger", ["Banzai", "Bootloader"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "messaging_tracking";
    a = {
        _log: function(a, c, d, e) {
            var f = {
                referrer: a || "",
                message_thread_id: c,
                message_view: "chat",
                timestamp_send: Date.now(),
                message_target_ids: []
            };
            d !== void 0 && (f.message_target_ids = [d]);
            b("Bootloader").loadModules(["ChatImpressionLogger"], function(c) {
                c.logImpression(a, d, e),
                b("Banzai").post(g, f, {
                    delay: 0,
                    retry: !0
                })
            }, "ChatOpenTabEventLogger")
        },
        logClickOpen: function(a, c, d, e) {
            var f = this;
            b("Bootloader").loadModules(["MercuryIDs", "getPageIDFromThreadID", "ChatImpressionLogger"], function(b, g) {
                f._log(a, c, d, e);
                b = g(String(c));
                b && f._logPageClick(a, b)
            }, "ChatOpenTabEventLogger")
        },
        logUserClickOpen: function(a, c, d) {
            var e = this;
            b("Bootloader").loadModules(["MercuryIDs", "ChatImpressionLogger"], function(b) {
                b = b.getThreadIDFromUserID(c);
                e.logClickOpen(a, b, c, d)
            }, "ChatOpenTabEventLogger")
        },
        logAutoOpen: function(a, b, c, d) {
            this._log(a, b, c, d)
        },
        logUserAutoOpen: function(a, c) {
            var d = this;
            b("Bootloader").loadModules(["MercuryIDs", "ChatImpressionLogger"], function(b) {
                b = b.getThreadIDFromUserID(c);
                d._log(a, b, c)
            }, "ChatOpenTabEventLogger")
        },
        _logPageClick: function(a, c) {
            b("Banzai").post("page_message_button_click", {
                page_id: c,
                ref: a
            }),
            b("Bootloader").loadModules(["PagesLogger", "PagesLoggerEventEnum", "PagesLoggerEventTargetEnum"], function(b, d, e) {
                b.log(c, d.CLICK, e.PAGE_MESSAGE, a)
            }, "ChatOpenTabEventLogger")
        }
    };
    e.exports = a
}
), null);
__d("PresenceViewerCapabilities", ["ArbiterMixin", "PresenceConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = Object.assign({}, b("ArbiterMixin"));
    Object.assign(a, {
        get: function() {
            if (g != null)
                return g;
            g = b("PresenceConfig").get("viewer_presence_capabilities");
            return g
        }
    });
    c = a;
    e.exports = c
}
), null);
__d("KeyboardFocus.react", ["React", "useKeyboardFocus"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    b("React");
    function a(a) {
        var c = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
        return c(b("useKeyboardFocus")(a))
    }
}
), null);
__d("createLayoutContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.createContext({
            getLayout: function() {
                return a
            },
            dispatch: b("emptyFunction"),
            nodes: new Map(),
            values: []
        });
        function d(a) {
            var b = a.value;
            a = a.children;
            var d = j()
              , e = d[0]
              , f = d[1]
              , h = d[2];
            d = g.useMemo(function() {
                return {
                    getLayout: b,
                    dispatch: h,
                    nodes: e,
                    values: f
                }
            }, [h, e, b, f]);
            return g.jsx(c.Provider, {
                value: d,
                children: a
            })
        }
        function e(b) {
            var d = g.useRef(null)
              , e = g.useContext(c)
              , f = e.getLayout
              , h = e.dispatch
              , i = e.nodes
              , j = e.values;
            e = g.useMemo(function() {
                var b = d.current && i.get(d.current)
                  , c = i.size;
                return b != null ? f({
                    isFirst: b === 0,
                    isLast: b >= 0 && b === c - 1,
                    index: b,
                    total: c,
                    values: j,
                    nodes: i
                }) : a
            }, [f, i, j]);
            var k = g.useCallback(function(a) {
                h({
                    add: a,
                    remove: d.current,
                    value: b
                }),
                d.current = a
            }, [h, b]);
            return [e, k]
        }
        function f(a) {
            var b = e(a.value)
              , c = b[0];
            b = b[1];
            return a.children(c, b)
        }
        return {
            Provider: d,
            Consumer: f,
            useLayoutContext: e,
            _context: c
        }
    }
    function h(a, b) {
        a = a.node;
        b = b.node;
        return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    }
    function i(a, b) {
        var c = b.add
          , d = b.remove;
        b = b.value;
        a = Array.from(a).filter(function(a) {
            a = a.node;
            return a !== c && a !== d
        });
        c && a.push({
            node: c,
            value: b
        });
        return a.sort(h)
    }
    function j() {
        var a = g.useReducer(i, [])
          , b = a[0];
        a = a[1];
        var c = g.useMemo(function() {
            var a = new Map()
              , c = [];
            b.forEach(function(b, d) {
                var e = b.node;
                b = b.value;
                a.set(e, d);
                c.push(b)
            });
            return {
                nodes: a,
                values: c
            }
        }, [b])
          , d = c.nodes;
        c = c.values;
        return [d, c, a]
    }
}
), null);
__d("FDSPrivateButtonLayoutContext", ["createLayoutContext"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("createLayoutContext")({});
    c = a;
    e.exports = c
}
), null);
__d("FDSTooltipContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(!1);
    d = c;
    e.exports = d
}
), null);
__d("ContextualLayer.react", ["ContextualLayer", "React", "ReactBrowserEventEmitter_DO_NOT_USE", "ReactDOM", "ReactLayer", "Style", "prop-types", "warning"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = b("ReactLayer").createClass({
        propTypes: {
            contextRef: b("prop-types").func,
            context: function(a, b, c) {
                if (a.context == null == (a.contextRef == null))
                    return new Error("Exactly one of `context` or `contextRef` must be set on `" + (c + "`."));
                a = a[b];
                if (a != null) {
                    if (typeof a !== "object")
                        return new Error("Invalid `" + b + "` supplied to `" + c + "`, expected a React component.");
                    if (g.isValidElement(a))
                        return new Error("Invalid `" + b + "` supplied to `" + c + "`, expected a React component instance. You're passing a React descriptor.")
                }
            }
        },
        immutableProps: {
            modal: null
        },
        createLayer: function(a) {
            var c = this
              , d = this._getContextNode()
              , e = {
                context: d,
                contextBounds: this.props.contextBounds,
                "data-testid": this.props["data-testid"],
                position: this.props.position,
                alignment: this.props.alignment,
                offsetX: this.props.offsetX,
                offsetY: this.props.offsetY,
                addedBehaviors: this.enumerateBehaviors(this.props.behaviors),
                shouldSetARIAProperties: this.props.shouldSetARIAProperties,
                isStrictlyControlled: this.props.isStrictlyControlled
            };
            e = new (b("ContextualLayer"))(e,a);
            this._node = a;
            this._matchContextSize(this.props);
            this.props.contextBounds && e.setContextWithBounds(d, this.props.contextBounds);
            this._resizeSubscription = e.subscribe("resize", function(a, d) {
                a = b("ReactBrowserEventEmitter_DO_NOT_USE").isEnabled();
                a && (c.props.onResize && c.props.onResize(d))
            });
            e.conditionShow(this.props.shown);
            return e
        },
        componentWillUnmount: function() {
            this._resizeSubscription && (this._resizeSubscription.unsubscribe(),
            this._resizeSubscription = null)
        },
        receiveProps: function(a, b) {
            this.updateBehaviors(b.behaviors, a.behaviors);
            b = this._getContextNode();
            a.contextBounds ? this.layer.setContextWithBounds(b, a.contextBounds) : this.layer.setContext(b);
            this._matchContextSize(a);
            this.layer.setPosition(a.position);
            this.layer.setAlignment(a.alignment);
            this.layer.setOffsetX(a.offsetX);
            this.layer.setOffsetY(a.offsetY);
            this.layer.conditionShow(a.shown)
        },
        getDefaultEnabledBehaviors: function() {
            return b("ContextualLayer").getDefaultBehaviorsAsObject()
        },
        _getContextNode: function() {
            var a;
            this.props.context ? a = this.props.context : this.props.contextRef && (a = this.props.contextRef());
            a != null && a.nodeType !== 1 && (a = b("ReactDOM").findDOMNode(a));
            return a
        },
        _matchContextSize: function(a) {
            var c = this._node
              , d = this._getContextNode();
            a.containerWidthMatchContext && b("Style").set(c, "width", d.offsetWidth + "px");
            a.containerHeightMatchContext && b("Style").set(c, "height", d.offsetHeight + "px")
        }
    });
    e.exports = a
}
), null);
__d("ContextualLayerAutoFlip", ["ContextualLayerAlignmentEnum", "ContextualLayerDimensions", "DOMDimensions", "Rect", "Vector", "getDocumentScrollElement"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, c) {
        c = new (b("Rect"))(c).convertTo(a.domain);
        var d = Math.max(a.l, c.l);
        a = Math.min(a.r, c.r);
        return Math.max(a - d, 0)
    }
    a = function() {
        function a(a) {
            this._layer = a
        }
        var c = a.prototype;
        c.enable = function() {
            this._subscription = this._layer.subscribe("adjust", this._adjustOrientation.bind(this)),
            this._layer.isShown() && this._layer.updatePosition()
        }
        ;
        c.disable = function() {
            this._subscription && (this._subscription.unsubscribe(),
            this._subscription = null),
            this._layer.isShown() && this._layer.updatePosition()
        }
        ;
        c._adjustOrientation = function(a, c) {
            a = this.getValidPositions(c);
            if (!a.length) {
                c.invalidate();
                return
            }
            var d = b("ContextualLayerDimensions").getViewportRect(this._layer), e = this._getValidAlignments(c), f, h, i;
            for (f = 0; f < e.length; f++) {
                c.setAlignment(e[f]);
                for (h = 0; h < a.length; h++) {
                    c.setPosition(a[h]);
                    i = b("ContextualLayerDimensions").getLayerRect(this._layer, c);
                    if (d.contains(i))
                        return
                }
            }
            var j = -1;
            if (c.getPreferMoreContentShownRect()) {
                var k = b("DOMDimensions").getDocumentDimensions()
                  , l = new (b("Rect"))(d).convertTo("document")
                  , m = 99999;
                for (h = 0; h < a.length; h++) {
                    c.setPosition(a[h]);
                    i = b("ContextualLayerDimensions").getLayerRect(this._layer, c);
                    var n = new (b("Rect"))(i).convertTo("document");
                    if (n.l >= 0 && n.r <= k.width && n.t >= 43 && n.b <= k.height) {
                        var o = l.l - n.l
                          , p = n.r - l.r
                          , q = l.t - n.t;
                        n = n.b - l.b;
                        o = (o > 0 ? o : 0) + (p > 0 ? p : 0) + (q > 0 ? q : 0) + (n > 0 ? n : 0);
                        o < m && (j = h,
                        m = o)
                    }
                }
            }
            this.__setBestPosition(j, c, a);
            p = 0;
            q = 0;
            for (f = 0; f < e.length; f++)
                c.setAlignment(e[f]),
                i = b("ContextualLayerDimensions").getLayerRect(this._layer, c),
                n = g(d, i),
                n > q && (q = n,
                p = f);
            c.setAlignment(e[p])
        }
        ;
        c.__setBestPosition = function(a, b, c) {
            a >= 0 ? b.setPosition(c[a]) : b.setPosition(c.includes("below") ? "below" : c[0])
        }
        ;
        c.getValidPositions = function(a) {
            var c = [a.getPosition(), a.getOppositePosition()]
              , d = this._layer.getContextScrollParent();
            if (d === window || d === b("getDocumentScrollElement")())
                return c;
            var e = this._layer.getContext()
              , f = b("Vector").getElementPosition(d, "viewport").y
              , g = b("Vector").getElementPosition(e, "viewport").y;
            if (a.isVertical())
                return c.filter(function(a) {
                    if (a === "above")
                        return g >= f;
                    else {
                        a = f + d.offsetHeight;
                        var b = g + e.offsetHeight;
                        return b <= a
                    }
                });
            else {
                a = f + d.offsetHeight;
                if (g >= f && g + e.offsetHeight <= a)
                    return c;
                else
                    return []
            }
        }
        ;
        c._getValidAlignments = function(a) {
            var c = Array.from(b("ContextualLayerAlignmentEnum").values);
            a = a.getAlignment();
            var d = c.indexOf(a);
            d > 0 && (c.splice(d, 1),
            c.unshift(a));
            return c
        }
        ;
        return a
    }();
    e.exports = a;
    Object.assign(a.prototype, {
        _subscription: null
    })
}
), null);
__d("SUIInternalDisplay", ["cx", "React", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.get = h;
    f.getWithTruncate = a;
    f.getLiteral = i;
    f.getLiteralWithTruncate = c;
    f.getFlex = d;
    f.getTable = e;
    b("React");
    g = ["block", "inline", "unset_DEPRECATED"];
    a = [].concat(g, ["truncateInline", "truncateBlock"]);
    c = [].concat(a, ["inlineBlock", "truncateInlineBlock"]);
    d = b("prop-types").oneOf(g);
    f.propType = d;
    e = b("prop-types").oneOf(a);
    f.propTypeWithTruncate = e;
    g = b("prop-types").oneOf(c);
    f.propTypeWithLiteralTruncate = g;
    function h(a) {
        return (a === "block" ? "_4yee" : "") + (a === "inline" ? " _4yef" : "")
    }
    function a(a) {
        if (a === "truncateInline")
            return "_8y2_";
        return a === "truncateBlock" ? "_3tep" : h(a)
    }
    function i(a) {
        return (a === "block" ? "_4yee" : "") + (a === "inline" ? " _8y30" : "") + (a === "inlineBlock" ? " _4yef" : "")
    }
    function c(a) {
        if (a === "truncateInline")
            return "_4yeg";
        if (a === "truncateInlineBlock")
            return "_8y2_";
        return a === "truncateBlock" ? "_3tep" : i(a)
    }
    function d(a) {
        return (a === "block" ? "_4yeh" : "") + (a === "inline" ? " _4yei" : "")
    }
    function e(a) {
        return (a === "block" ? "_4yg0" : "") + (a === "inline" ? " _4yg1" : "")
    }
}
), null);
__d("SUILink.react", ["cx", "Link.react", "React", "SUIInternalDisplay", "SUITheme", "joinClasses", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = ["always", "hover", "never"];
    c = {
        display: "unset_DEPRECATED",
        isInverseColor: !1,
        showUnderline: "hover"
    };
    d = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b;
            b = a.call(this) || this;
            b.anchorRef = h.createRef();
            b.$1 = function() {
                b.setState({
                    isHovering: !0
                })
            }
            ;
            b.$2 = function() {
                b.setState({
                    isHovering: !1
                })
            }
            ;
            b.state = {
                isHovering: !1
            };
            return b
        }
        var d = c.prototype;
        d.focus = function() {
            this.anchorRef.current !== null && this.anchorRef.current.focus()
        }
        ;
        d.render = function() {
            var a = b("SUITheme").get(this).SUILink
              , c = this.props
              , d = c.children
              , e = c.className
              , f = c.display
              , g = c.href
              , i = c.isInverseColor
              , j = c.margin
              , k = c.showUnderline;
            c.theme;
            var l = c.width;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["children", "className", "display", "href", "isInverseColor", "margin", "showUnderline", "theme", "width"]);
            var m = a.inverseColor != null && a.inverseColor !== "" ? a.inverseColor : a.normalColor
              , n = a.inverseHoverColor != null && a.inverseHoverColor !== "" ? a.inverseHoverColor : a.hoverColor;
            n = {
                color: this.state.isHovering ? i ? n : a.hoverColor : i ? m : a.normalColor,
                width: l
            };
            i = {};
            (f === "truncateInline" || f === "truncateInlineBlock" || f === "truncateBlock") && (i["data-hover"] = "tooltip",
            i["data-tooltip-display"] = "overflow");
            return h.jsx(b("Link.react"), babelHelpers["extends"]({}, c, i, {
                className: b("joinClasses")("_231w" + (k === "always" ? " _231y" : "") + (k === "hover" ? " _231z" : ""), b("SUIInternalDisplay").getLiteralWithTruncate(f), e, j),
                href: g != null && g !== "" ? g.toString() : "#",
                linkRef: this.anchorRef,
                onMouseEnter: this.$1,
                onMouseLeave: this.$2,
                style: n,
                children: d
            }))
        }
        ;
        return c
    }(h.PureComponent);
    d.propTypes = {
        display: b("SUIInternalDisplay").propTypeWithLiteralTruncate.isRequired,
        margin: (f = b("prop-types")).string,
        showUnderline: f.oneOf(a),
        theme: f.instanceOf(b("SUITheme")),
        width: f.oneOfType([f.number, f.string])
    };
    d.defaultProps = c;
    g = b("withSUITheme")(d);
    e.exports = g
}
), null);
__d("SUITooltip.react", ["cx", "AlignmentEnum", "ContextualLayer.react", "ContextualLayerAutoFlip", "ContextualLayerHideOnScroll", "FDSTooltipContext", "LayerFadeOnShow", "PositionEnum", "React", "SUIErrorBoundary.react", "SUILink.react", "SUITheme", "getElementRect", "joinClasses", "prop-types", "uniqueID", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 4
      , j = {
        LayerFadeOnShow: b("LayerFadeOnShow"),
        ContextualLayerAutoFlip: b("ContextualLayerAutoFlip"),
        ContextualLayerHideOnScroll: b("ContextualLayerHideOnScroll")
    }
      , k = 100;
    a = ["block", "inline", "inline-block"];
    c = ["normal", "break-word"];
    var l = null;
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            var a = this.props
              , b = a.label
              , c = a.value;
            a.theme;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["label", "value", "theme"]);
            return h.jsxs("li", babelHelpers["extends"]({}, a, {
                children: [b != null && b !== "" && h.jsx("strong", {
                    children: b
                }), " ", c]
            }))
        }
        ;
        return b
    }(h.PureComponent);
    d.propTypes = {
        value: (f = b("prop-types")).node.isRequired,
        label: f.string
    };
    d.displayName = "SUITooltipRow";
    g = b("withSUITheme")(d);
    d = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsxs("div", {
                className: b("joinClasses")(this.props.className, "_2pif"),
                children: [this.props.description, " ", h.jsx(b("SUILink.react"), {
                    onClick: this.props.onClick,
                    children: this.props.label
                })]
            })
        }
        ;
        return c
    }(h.PureComponent);
    d.propTypes = {
        label: f.node.isRequired,
        onClick: f.func.isRequired,
        description: f.node,
        theme: f.instanceOf(b("SUITheme"))
    };
    d.displayName = "SUITooltipActionDEPRECATED";
    d = b("withSUITheme")(d);
    var m = {
        alignment: "left",
        display: "inline",
        offset: 4,
        position: "above",
        tooltipDelay: 0,
        tooltipWidth: "auto"
    }
      , n = function(c) {
        babelHelpers.inheritsLoose(a, c);
        function a() {
            var a, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (a = d = c.call.apply(c, [this].concat(f)) || this,
            d.state = {
                isTextHover: !1,
                isTooltipHover: !1,
                isTooltipVisible: !1
            },
            d.$4 = b("uniqueID")(),
            d.$6 = function() {
                d.props.tooltipDelay ? d.$5 = window.setTimeout(d.$7, d.props.tooltipDelay) : d.$7()
            }
            ,
            d.$9 = function() {
                d.$2 = window.setTimeout(d.$7, k)
            }
            ,
            d.$7 = function() {
                d.state.isTextHover || d.state.isTooltipHover ? d.show() : d.hide()
            }
            ,
            d.$8 = function() {
                d.props.onToggle && d.props.onToggle(d.state.isTooltipVisible)
            }
            ,
            d.$10 = function() {
                d.setState({
                    isTextHover: !1
                }, d.$9)
            }
            ,
            d.$11 = function() {
                d.setState({
                    isTooltipHover: !1
                }, d.$9)
            }
            ,
            d.$12 = function() {
                d.setState({
                    isTextHover: !0
                }, d.$6)
            }
            ,
            d.$13 = function() {
                d.setState({
                    isTextHover: !1
                }, d.$9)
            }
            ,
            d.$14 = function() {
                d.setState({
                    isTooltipHover: !0
                })
            }
            ,
            d.$15 = function() {
                d.setState({
                    isTooltipHover: !1
                }, d.$9)
            }
            ,
            d.$16 = function(a) {
                d.$1 = a
            }
            ,
            d.$17 = function() {
                return d.$1
            }
            ,
            a) || babelHelpers.assertThisInitialized(d)
        }
        var d = a.prototype;
        d.componentDidMount = function() {
            this.$3 = !0
        }
        ;
        d.componentWillUnmount = function() {
            this.$3 = !1,
            this.$5 && window.clearTimeout(this.$5),
            this.$2 && window.clearTimeout(this.$2),
            l === this && (l = null)
        }
        ;
        d.show = function() {
            if (this.state.isTooltipVisible)
                return;
            l && l !== this && l.hide();
            l = this;
            this.$3 && this.setState({
                isTooltipVisible: !0
            }, this.$8)
        }
        ;
        d.hide = function() {
            if (!this.state.isTooltipVisible)
                return;
            l = null;
            this.$3 && this.setState({
                isTooltipVisible: !1
            }, this.$8)
        }
        ;
        d.$18 = function() {
            var a = this
              , c = this.props.tooltip != null && this.props.tooltip !== "" && this.state.isTooltipVisible;
            if (!c)
                return null;
            c = this.props.position === "above";
            var d = this.props.position === "below"
              , e = this.props.position === "left"
              , f = this.props.position === "right"
              , g = c || d
              , k = b("SUITheme").get(this).SUITooltip
              , l = 0;
            d ? l = this.props.offset : c && (l = -1 * this.props.offset);
            var m = 0;
            f ? m = this.props.offset + i : e && (m = -1 * (this.props.offset + i));
            var n = babelHelpers["extends"]({}, k.typeStyle, {
                backgroundColor: k.backgroundColor,
                borderRadius: (d = k.borderRadius) != null ? d : 2,
                boxShadow: (c = k.boxShadow) != null ? c : "none",
                color: k.color,
                width: this.props.tooltipWidth !== "auto" ? this.props.tooltipWidth : null,
                maxWidth: this.props.maxWidth,
                overflowWrap: this.props.overflowWrap
            })
              , o = 0;
            f = this.$1;
            if (!g && f) {
                e = b("getElementRect")(f);
                d = e.bottom - e.top;
                o = d / 2
            }
            return h.jsx(b("FDSTooltipContext").Consumer, {
                children: function(c) {
                    return h.jsx(b("ContextualLayer.react"), {
                        alignment: a.props.alignment,
                        behaviors: a.props.behaviors ? babelHelpers["extends"]({}, j, a.props.behaviors) : j,
                        contextRef: a.$17,
                        offsetX: m,
                        offsetY: l,
                        position: a.props.position,
                        shown: !0,
                        children: h.jsxs("div", {
                            className: "_4_gw" + (c ? "" : " _7mx9"),
                            id: a.$4,
                            onBlur: a.$11,
                            onMouseEnter: a.$14,
                            onMouseLeave: a.$15,
                            style: {
                                top: o + "px"
                            },
                            children: [h.jsx("ul", {
                                className: "_3b5i",
                                style: n,
                                children: a.props.tooltip
                            }), k.showArrow && h.jsx("div", {
                                "aria-hidden": !0,
                                className: "_3b61" + (c ? "" : " _7mxa") + (c ? " _7mxb" : ""),
                                style: {
                                    borderTopColor: k.backgroundColor
                                }
                            })]
                        })
                    })
                }
            })
        }
        ;
        d.render = function() {
            var a = babelHelpers["extends"]({
                display: this.props.display
            }, this.props.style);
            return h.jsxs(h.Fragment, {
                children: [h.jsx("div", {
                    "aria-describedby": this.state.isTextHover ? this.$4 : void 0,
                    className: b("joinClasses")(this.props.className, this.props.margin, "_3b62"),
                    onBlur: this.$10,
                    onFocus: this.$12,
                    onMouseEnter: this.$12,
                    onMouseLeave: this.$13,
                    ref: this.$16,
                    style: a,
                    children: h.jsx(b("SUIErrorBoundary.react"), {
                        children: this.props.children
                    })
                }), this.$18()]
            })
        }
        ;
        return a
    }(h.PureComponent);
    n.Row = g;
    n.ActionDEPRECATED = d;
    n.propTypes = {
        alignment: b("AlignmentEnum").propType.isRequired,
        behaviors: f.object,
        className: f.string,
        display: f.oneOf(a).isRequired,
        margin: f.string,
        maxWidth: f.number,
        offset: f.number.isRequired,
        overflowWrap: f.oneOf(c),
        position: b("PositionEnum").propType.isRequired,
        theme: f.instanceOf(b("SUITheme")),
        tooltip: f.node,
        tooltipDelay: f.number,
        tooltipWidth: f.oneOfType([f.oneOf(["auto"]), f.number])
    };
    n.defaultProps = m;
    g = b("withSUITheme")(n);
    e.exports = g
}
), null);
__d("SUITypeStyle", ["UserAgent_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = c;
    d = b("UserAgent_DEPRECATED").windows() ? "" : "0.01em";
    var g = {
        letterSpacing: d
    }
      , h = {
        "40px": "50px",
        "32px": "40px",
        "24px": "30px",
        "16px": "20px",
        "14px": "18px",
        "13px": "16px",
        "12px": "16px",
        "11px": "14px"
    };
    function a(a) {
        return a + "px"
    }
    function c(a) {
        return babelHelpers["extends"]({}, g, a, {
            lineHeight: h[a.fontSize]
        })
    }
    c.createSUIFontSize = a
}
), null);
__d("FDSPrivateTypeStyles", ["SUITypeStyle"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getTypeStyle = g;
    f.createTypeStyleGetter = a;
    function g(a, c) {
        return b("SUITypeStyle")(babelHelpers["extends"]({
            letterSpacing: a.type.letterSpacing,
            fontFamily: a.type.fontFamily
        }, c))
    }
    function a(a) {
        return function(b) {
            return g(a, b)
        }
    }
}
), null);
__d("getSUITooltipUniform.fds", ["cssVar", "FDSPrivateThemeUtils", "FDSPrivateTypeStyles"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = b("FDSPrivateThemeUtils").isGeo(a)
          , d = b("FDSPrivateTypeStyles").createTypeStyleGetter(a);
        return {
            backgroundColor: c ? a.colors.layers.background : "#1C1E21",
            borderRadius: a.borderRadius.container,
            boxShadow: c ? a.elevation.depth2 : "none",
            color: c ? a.colors.text["default"] : "#FFFFFF",
            showArrow: !c,
            typeStyle: d({
                color: c ? a.colors.text["default"] : "#FFFFFF",
                fontSize: c ? "14px" : "12px",
                fontWeight: c ? "normal" : "bold"
            })
        }
    }
}
), null);
__d("makeSUIThemeGetter", ["SUITheme", "memoizeWithArgs"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        function c(c) {
            var d = {};
            Object.keys(a).forEach(function(b) {
                var e = a[b];
                e !== void 0 && (d[b] = e(c))
            });
            return new (b("SUITheme"))({
                id: c.id,
                components: d
            })
        }
        return b("memoizeWithArgs")(c, function(a) {
            return a.id
        })
    }
}
), null);
__d("FDSTooltip.react", ["FDSPrivateThemeContext.react", "FDSTooltipContext", "React", "SUITooltip.react", "getSUITooltipUniform.fds", "makeFDSStandardComponent", "makeSUIThemeGetter"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIThemeGetter")({
        SUITooltip: b("getSUITooltipUniform.fds")
    })
      , i = !0;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props;
            return g.jsx(b("FDSPrivateThemeContext.react").Consumer, {
                children: function(c) {
                    return g.jsx(b("FDSTooltipContext").Provider, {
                        value: i,
                        children: g.jsx(b("SUITooltip.react"), {
                            alignment: a.alignment,
                            display: a.display,
                            maxWidth: a.maxWidth,
                            offset: a.offset,
                            onToggle: a.onToggle,
                            overflowWrap: a.overflowWrap,
                            position: a.position,
                            preserveThemeFromContext: !0,
                            theme: h(c),
                            tooltip: a.tooltip,
                            tooltipDelay: a.tooltipDelay,
                            tooltipWidth: a.tooltipWidth,
                            children: a.children
                        })
                    })
                }
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.defaultProps = {
        alignment: "left",
        display: "inline",
        offset: 4,
        position: "above",
        tooltipDelay: 0,
        tooltipWidth: "auto"
    };
    c = b("makeFDSStandardComponent")("FDSTooltip", a);
    e.exports = c
}
), null);
__d("FDSPrivateDisabledMessageWrapper.react", ["FDSTooltip.react", "React", "makeFDSStandardComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.alignment;
        c = c === void 0 ? "left" : c;
        var d = a.children
          , e = a.disabledMessage
          , f = a.isDisabled;
        a = a.offset;
        a = a === void 0 ? 8 : a;
        return f != null && f && e != null ? g.jsx(b("FDSTooltip.react"), {
            alignment: c,
            offset: a,
            tooltip: e,
            children: d
        }) : d
    }
    c = b("makeFDSStandardComponent")("FDSPrivateDisabledMessageWrapper", a);
    e.exports = c
}
), null);
__d("SUIButton.react", ["requireCond", "cr:1342893"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1342893");
    e.exports = a
}
), null);
__d("FDSPrivateGutterSelector", ["FDSPrivateSelectorFactory"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("FDSPrivateSelectorFactory")(function(a, b) {
        return a.baseUnit * a.gutters[b]
    });
    c = a;
    e.exports = c
}
), null);
__d("getSUIButtonUniform.fds", ["FDSPrivateGutterSelector", "FDSPrivateThemeUtils", "SUITypeStyle"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("SUITypeStyle").createSUIFontSize;
    function a(a) {
        var c = a.borderRadius
          , d = a.controls
          , e = a.colors
          , f = a.type
          , h = d.height
          , i = b("FDSPrivateThemeUtils").isGeo(a);
        a = {
            button: b("FDSPrivateGutterSelector")(a, "text"),
            icon: b("FDSPrivateGutterSelector")(a, "iconInline"),
            onlyIcon: b("FDSPrivateGutterSelector")(a, "icon")
        };
        return {
            borderRadius: c.control,
            height: {
                "short": h.small,
                normal: h.medium,
                tall: h.large
            },
            padding: i ? {
                normal: a,
                "short": a,
                tall: a
            } : {
                normal: {
                    button: "11px",
                    icon: "7px",
                    onlyIcon: "7px"
                },
                "short": {
                    button: "7px",
                    icon: "3px",
                    onlyIcon: "3px"
                },
                tall: {
                    button: "19px",
                    icon: "7px",
                    onlyIcon: "11px"
                }
            },
            typeStyle: {
                letterSpacing: f.letterSpacing,
                color: e.text["default"],
                fontSize: g(f.size),
                fontWeight: d.fontWeight,
                fontFamily: f.fontFamily,
                lineHeight: f.lineHeight
            },
            use: {
                "default": d["default"],
                confirm: babelHelpers["extends"]({}, d.confirm, {
                    fontWeight: d.fontWeightAlt
                }),
                special: babelHelpers["extends"]({}, d.special, {
                    fontWeight: d.fontWeightAlt
                }),
                flat: d.flat,
                flatWhite: d.flatWhite
            }
        }
    }
}
), null);
__d("FDSButton.react", ["cx", "FDSPrivateButtonLayoutContext", "FDSPrivateDisabledMessageWrapper.react", "FDSPrivateThemeContext.react", "FDSPrivateThemeUtils", "KeyboardFocus.react", "Locale", "React", "SUIBorderUtils", "SUIButton.react", "SUIButtonContext", "autoFlipStyleProps", "getSUIButtonUniform.fds", "makeFDSStandardComponent", "makeSUIThemeGetter", "mergeRefs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("FDSPrivateButtonLayoutContext").Consumer
      , i = b("React")
      , j = b("makeSUIThemeGetter")({
        SUIButton: b("getSUIButtonUniform.fds")
    });
    a = {
        borderedSides: b("SUIBorderUtils").ALL_SIDES,
        isDisabled: !1,
        labelIsHidden: !1,
        roundedCorners: b("SUIBorderUtils").ALL_CORNERS,
        size: "medium",
        type: "button",
        use: "default"
    };
    var k = {
        isFixedWidthPadded: !0
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.$1 = function() {
            return b("FDSPrivateThemeUtils").isGeo(this.context)
        }
        ;
        d.$2 = function() {
            return j(this.context)
        }
        ;
        d.$3 = function(a, c, d) {
            if (this.context.visualAlignment !== "optical" || a == null || d)
                return a;
            d = this.$2().SUIButton.padding[m(this.props.size)];
            d = parseInt(d.button, 10) - parseInt(d.onlyIcon, 10);
            c = c === "before" ? "marginLeft" : "marginRight";
            return i.cloneElement(a, {
                style: (c = b("autoFlipStyleProps")((a = {},
                a[c] = -d,
                a))) != null ? c : void 0
            })
        }
        ;
        d.$4 = function(a) {
            var b = this.$1()
              , c = this.props.style;
            b = b ? o(a, this.$2().SUIButton.borderRadius) : void 0;
            a = (a = a.marginLeft) != null ? a : c == null ? void 0 : c.marginLeft;
            return babelHelpers["extends"]({}, c, b, a != null ? {
                marginLeft: a
            } : null, {
                backgroundClip: null
            })
        }
        ;
        d.$5 = function(a) {
            var b = [a.borderTopLeftRadius === 0 && "topLeft", a.borderBottomLeftRadius === 0 && "bottomLeft", a.borderTopRightRadius === 0 && "topRight", a.borderBottomRightRadius === 0 && "bottomRight"].filter(Boolean);
            return this.props.roundedCorners.filter(function(a) {
                return !b.includes(a)
            })
        }
        ;
        d.$6 = function(a) {
            if (this.$1())
                return [];
            var b = [a.borderLeftWidth === 0 && "left", a.borderRightWidth === 0 && "right"].filter(Boolean);
            return this.props.borderedSides.filter(function(a) {
                return !b.includes(a)
            })
        }
        ;
        d.$7 = function(a) {
            return a.flexGrow === 1 ? "flex" : this.props.density
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props
              , d = this.$1()
              , e = this.$2()
              , f = n(c.use)
              , g = c.isDisabled === !0 && c.disabledMessage != null ? null : c.tooltip
              , j = c.busyIndicator == null || d ? c.iconAfter : void 0
              , o = c.icon != null
              , p = j != null
              , q = !c.labelIsHidden
              , r = q || o || p
              , s = c.busyIndicator != null
              , t = (o || p) && !(o && p) && !q;
            o = i.jsx(h, {
                value: c.use,
                children: function(h, k) {
                    return i.jsx(b("KeyboardFocus.react"), {
                        onBlur: c.onBlur,
                        onFocus: c.onFocus,
                        onKeyDown: c.onKeyDown,
                        children: function(n) {
                            var o, p = n.isKeyboardFocused, q = n.onBlur, u = n.onFocus;
                            n = n.onKeyDown;
                            return i.jsx(b("FDSPrivateDisabledMessageWrapper.react"), {
                                disabledMessage: c.disabledMessage,
                                isDisabled: c.isDisabled,
                                offset: 18,
                                children: i.jsx(b("SUIButton.react"), {
                                    "aria-busy": c.busyIndicator != null ? !0 : void 0,
                                    "aria-haspopup": c["aria-haspopup"],
                                    "aria-label": c["aria-label"],
                                    "aria-labelledby": c["aria-labelledby"],
                                    "aria-pressed": c["aria-pressed"],
                                    autoFocus: c.autoFocus,
                                    borderedSides: a.$6(h),
                                    buttonRef: b("mergeRefs")(k, c.innerRef),
                                    className_DEPRECATED: "_7tvm" + (d ? "" : " _7tv2") + (d ? " _7tv3" : "") + (r ? " _7tv4" : "") + (s ? " _7tvn" : ""),
                                    "data-testid": void 0,
                                    "data-tooltip-position": c.tooltipPosition,
                                    density: a.$7(h),
                                    disabled: c.isDisabled,
                                    height: m(c.size),
                                    href: c.href,
                                    icon: a.$3(c.icon, "before", t),
                                    iconAfter: a.$3(j, "after", t),
                                    id: c.id,
                                    isDepressed: c.isDepressed,
                                    isLabelFullWidth: c.textAlign != null && c.textAlign !== "center",
                                    label: c.label,
                                    labelIsHidden: c.labelIsHidden,
                                    layerAction: c.layerAction,
                                    margin: c.margin,
                                    maxWidth: (o = c.maxWidth) != null ? o : d ? "100%" : void 0,
                                    minWidth: c.minWidth,
                                    onBlur: q,
                                    onClick: c.onClick,
                                    onFocus: u,
                                    onKeyDown: n,
                                    onKeyUp: c.onKeyUp,
                                    onMouseDown: c.onMouseDown,
                                    onMouseEnter: c.onMouseEnter,
                                    onMouseLeave: c.onMouseLeave,
                                    onMouseUp: c.onMouseUp,
                                    rel: c.rel,
                                    rightContent: i.jsxs(i.Fragment, {
                                        children: [s ? i.jsx("div", {
                                            className: "_7tvo",
                                            children: c.busyIndicator
                                        }) : null, d && p ? i.jsx(l, {
                                            isDisabled: c.isDisabled,
                                            layout: h,
                                            uniform: e.SUIButton,
                                            use: f
                                        }) : null]
                                    }),
                                    roundedCorners: a.$5(h),
                                    style: a.$4(h),
                                    target: c.target,
                                    textAlign: c.textAlign,
                                    theme: e,
                                    tooltip: g,
                                    tooltipDelay: c.tooltipDelay,
                                    type: c.type,
                                    use: f,
                                    value: c.value,
                                    width: c.width
                                })
                            })
                        }
                    })
                }
            });
            return d ? i.jsx(b("SUIButtonContext").Provider, {
                value: k,
                children: o
            }) : o
        }
        ;
        return c
    }(i.PureComponent);
    c.defaultProps = a;
    c.contextType = b("FDSPrivateThemeContext.react");
    function l(a) {
        var b = a.isDisabled
          , c = a.layout
          , d = a.uniform;
        a = d.use[a.use];
        b = b ? "disabled" : "hover";
        return i.jsx("div", {
            className: "_7tvp",
            style: babelHelpers["extends"]({}, o(c, d.borderRadius), {
                color: a[b].borderColor
            })
        })
    }
    function m(a) {
        if (a === "small")
            return "short";
        return a === "large" ? "tall" : "normal"
    }
    function n(a) {
        return a === "primary" ? "confirm" : a
    }
    function o(a, c) {
        var d, e, f = b("Locale").isRTL(), g = f ? "Right" : "Left";
        f = f ? "Left" : "Right";
        return e = {},
        e["borderTop" + g + "Radius"] = (d = a.borderTopLeftRadius) != null ? d : c,
        e["borderBottom" + g + "Radius"] = (d = a.borderBottomLeftRadius) != null ? d : c,
        e["borderTop" + f + "Radius"] = (g = a.borderTopRightRadius) != null ? g : c,
        e["borderBottom" + f + "Radius"] = (d = a.borderBottomRightRadius) != null ? d : c,
        e
    }
    d = b("makeFDSStandardComponent")("FDSButton", c);
    d.defaultProps = a;
    f = d;
    e.exports = f
}
), null);
__d("SUICloseButton.react", ["cx", "fbt", "KeyStatus", "Locale", "React", "SUITheme", "VirtualCursorStatus", "joinClasses", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = {
        label: h._("\u0110\u00f3ng"),
        shade: "dark",
        size: "small"
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        c.getHeightForSize = function(a, b) {
            return a.SUICloseButton.iconSize[b]
        }
        ;
        function c(c, d) {
            var e;
            e = a.call(this, c, d) || this;
            e.buttonRef = i.createRef();
            e.$1 = function(a) {
                e.setState({
                    showFocusRing: !1
                })
            }
            ;
            e.$2 = function(a) {
                (b("KeyStatus").isKeyDown() || b("VirtualCursorStatus").isVirtualCursorTriggered()) && e.setState({
                    showFocusRing: !0
                })
            }
            ;
            e.$3 = function(a) {
                e.setState({
                    showFocusRing: !1
                })
            }
            ;
            e.$4 = function() {
                e.setState({
                    isHovering: !0
                })
            }
            ;
            e.$5 = function() {
                e.setState({
                    isHovering: !1
                })
            }
            ;
            e.state = {
                isHovering: !1,
                showFocusRing: !1
            };
            return e
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.className_DEPRECATED
              , d = a.label
              , e = a.layerCancel
              , f = a.margin
              , g = a.size
              , h = a.shade
              , j = a.style
              , k = a.theme;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["className_DEPRECATED", "label", "layerCancel", "margin", "size", "shade", "style", "theme"]);
            void k;
            k = b("SUITheme").get(this).SUICloseButton;
            h = k[h][g];
            k = k.iconSize[g];
            g = "-" + Math.floor(k / 2) + "px";
            j = this.props.useLegacyPadding === !0 ? babelHelpers["extends"]({}, j) : babelHelpers["extends"]({}, j, {
                height: k,
                width: k
            });
            var l = this.props.disabled === !0;
            a = a;
            Object.keys(j).length > 0 && (a = babelHelpers["extends"]({}, a, {
                style: j
            }));
            j = (j = a["data-tooltip-content"]) != null ? j : d;
            return i.jsxs("button", babelHelpers["extends"]({}, a, {
                className: b("joinClasses")((this.state.showFocusRing ? "" : "_42d_") + (this.props.useLegacyPadding ? " _2aq4" : "") + " _32qq" + (l ? "" : " _3n5r") + (e ? " layerCancel" : ""), c, f),
                onBlur: this.$1,
                onFocus: this.$2,
                onMouseDown: this.$3,
                onMouseEnter: this.$4,
                onMouseLeave: this.$5,
                ref: this.buttonRef,
                type: "button",
                children: [i.jsx("span", {
                    className: "accessible_elem",
                    children: j
                }), i.jsx("span", {
                    "aria-hidden": !0,
                    className: "_3n5s",
                    style: (d = {},
                    d[b("Locale").isRTL() ? "marginRight" : "marginLeft"] = g,
                    d.marginTop = g,
                    d),
                    children: i.jsx(h, {
                        disabled: l,
                        hover: this.state.isHovering,
                        size: k
                    })
                })]
            }))
        }
        ;
        d.focus = function() {
            this.buttonRef.current != null && this.buttonRef.current.focus()
        }
        ;
        return c
    }(i.PureComponent);
    c.defaultProps = a;
    c.propTypes = {
        disabled: (d = b("prop-types")).bool,
        label: d.node,
        layerCancel: d.bool,
        margin: d.string,
        onClick: d.func,
        onFocus: d.func,
        onMouseDown: d.func,
        onMouseUp: d.func,
        shade: d.oneOf(["dark", "light"]),
        size: d.oneOf(["small", "large"]),
        theme: d.instanceOf(b("SUITheme"))
    };
    f = b("withSUITheme")(c);
    e.exports = f
}
), null);
__d("SUIModalCard.react", ["cx", "Locale", "React", "SUICloseButton.react", "SUIErrorBoundary.react", "SUITheme", "joinClasses", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.$1 = function(a, b, c) {
            return a + "px       " + b + "px       " + c + "px"
        }
        ;
        d.$2 = function(a) {
            a = h.Children.count(a) === 1 ? a : Array.isArray(a) ? a[0] : null;
            return h.isValidElement(a) ? h.Children.only(a) : null
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.children
              , d = a.footer
              , e = a.header
              , f = a.isFullBleed;
            f = f === void 0 ? !1 : f;
            var g = a.shouldShowCloseButton;
            g = g === void 0 ? !1 : g;
            a = a.height;
            var i = b("SUITheme").get(this)
              , j = i.SUIModalCard
              , k = j.closeButtonPosition;
            k = k + b("SUICloseButton.react").getHeightForSize(i, "large");
            k = e ? j.bodyVerticalMargin : k;
            var l = this.$2(c);
            l = l ? !!((l = l) != null ? (l = l.props) != null ? l.hasPadding : l : l) : !1;
            l = f && !e && l;
            i = b("SUICloseButton.react").getHeightForSize(i, "large");
            return h.jsxs("div", {
                className: "_1py_",
                role: "dialog",
                style: babelHelpers["extends"]({
                    backgroundColor: j.backgroundColor,
                    boxShadow: j.modalBoxShadow,
                    height: (a = a) != null ? a : "inherit"
                }, j.borderRadius != null ? {
                    borderRadius: j.borderRadius
                } : {}),
                children: [g ? h.jsx("span", {
                    className: b("joinClasses")("layerCancel", "_2ph_", "_6ued"),
                    style: {
                        height: i,
                        width: i,
                        zIndex: 2
                    },
                    children: h.jsx(b("SUICloseButton.react"), {
                        "data-testid": void 0,
                        layerCancel: !0,
                        shade: this.props.shade,
                        size: "large"
                    })
                }) : null, e, h.jsx("div", {
                    className: "_jmh",
                    style: babelHelpers["extends"]({}, j.typeStyle, (a = {},
                    a[b("Locale").isRTL() ? "marginLeft" : "marginRight"] = l ? "32px" : null,
                    a.padding = f ? null : this.$1(k, j.bodyHorizontalMargin, j.bodyVerticalMargin),
                    a)),
                    children: h.jsx(b("SUIErrorBoundary.react"), {
                        children: c
                    })
                }), d]
            })
        }
        ;
        return c
    }(h.PureComponent);
    a.defaultProps = {
        shouldShowCloseButton: !0
    };
    c = b("withSUITheme")(a);
    e.exports = c
}
), null);
__d("SUIModalContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        labelID: void 0
    });
    d = c;
    e.exports = d
}
), null);
__d("SUIModalFillViewportHeight", ["csx", "cx", "CSS", "DOM"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.enable = function() {
            var a;
            this.$2 = (a = b("DOM")).find(this.$1.getRoot(), "._1py_");
            this.$3 = a.create("div", {
                className: "_61mx"
            });
            a.insertBefore(this.$2, this.$3);
            a.appendContent(this.$3, this.$2);
            b("CSS").addClass(this.$2, "_1rb6")
        }
        ;
        c.disable = function() {
            b("CSS").removeClass(this.$3, "_61mx"),
            b("CSS").removeClass(this.$2, "_1rb6")
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("SUIModal.react", ["csx", "cx", "AbstractDialog.react", "LayerFadeOnShow", "LayerHideOnBlur", "LayerHideOnEscape", "React", "ReactLayer", "SUIModalCard.react", "SUIModalContext", "SUIModalFillViewportHeight", "joinClasses", "uniqueID", "withSUITheme"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                labelID: null
            },
            c.$1 = function(a) {
                c.props.onHide(a)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        c.getDerivedStateFromProps = function(a, c) {
            var d = c.labelID !== null;
            a = a.label == null && a.labelledBy == null && a.header != null;
            return d === a ? c : {
                labelID: a ? b("uniqueID")() : null
            }
        }
        ;
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a["data-close-testid"]
              , d = a.behaviors
              , e = a.children
              , f = a.footer
              , g = a.header
              , h = a.interactionArea
              , k = a.isFullBleed
              , l = a.isShown
              , m = a.shade
              , n = a.shouldShowCloseButton
              , o = a.labelledBy
              , p = a.height;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["data-close-testid", "behaviors", "children", "footer", "header", "interactionArea", "isFullBleed", "isShown", "shade", "shouldShowCloseButton", "labelledBy", "height"]);
            var q = n === !0 ? d.LayerHideOnBlur !== null : d.LayerHideOnBlur === b("LayerHideOnBlur")
              , r = n === !0 ? d.LayerHideOnEscape !== null : d.LayerHideOnEscape === b("LayerHideOnEscape");
            d.LayerHideOnBlur;
            d.LayerHideOnEscape;
            d = babelHelpers.objectWithoutPropertiesLoose(d, ["LayerHideOnBlur", "LayerHideOnEscape"]);
            var s;
            p != null ? s = babelHelpers["extends"]({}, d, {
                SUIModalFillViewportHeight: b("SUIModalFillViewportHeight")
            }) : s = d;
            o = (d = o) != null ? d : this.state.labelID;
            return i.jsx(b("SUIModalContext").Provider, {
                value: this.state,
                children: i.jsx(j, babelHelpers["extends"]({}, a, {
                    behaviors: s,
                    className: b("joinClasses")("_d2i", h),
                    hideOnEscape: r,
                    includeHideSource: !0,
                    isStrictlyControlled: !0,
                    labelledBy: o,
                    layerHideOnBlur: q,
                    onHide: this.$1,
                    shown: l,
                    children: i.jsx(b("SUIModalCard.react"), {
                        "data-close-testid": c,
                        footer: f,
                        header: g,
                        height: p,
                        isFullBleed: k,
                        shade: m,
                        shouldShowCloseButton: n,
                        children: e
                    })
                }))
            })
        }
        ;
        return c
    }(i.PureComponent);
    a.defaultProps = {
        behaviors: {},
        causalElementRef: function() {
            return null
        },
        isFullBleed: !1,
        preserveThemeFromContext: !1,
        shouldShowCloseButton: !0,
        width: 400
    };
    var j = b("ReactLayer").createClass(b("AbstractDialog.react").createSpec({
        displayName: "SUIModal",
        addedBehaviors: {
            LayerFadeOnShow: b("LayerFadeOnShow")
        },
        titleClass: "._604x"
    }));
    c = b("withSUITheme")(a);
    e.exports = c
}
), null);
__d("getSUICloseButtonUniform.fds", ["ix", "React", "SUIGlyphIcon.react", "asset"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a() {
        return {
            dark: {
                large: function(a) {
                    return h.jsx(b("SUIGlyphIcon.react"), babelHelpers["extends"]({}, a, {
                        srcDefault: g("499680"),
                        srcDisabled: g("490191"),
                        srcHover: g("499681")
                    }))
                },
                small: function(a) {
                    return h.jsx(b("SUIGlyphIcon.react"), babelHelpers["extends"]({}, a, {
                        srcDefault: g("499672"),
                        srcDisabled: g("490190"),
                        srcHover: g("499673")
                    }))
                }
            },
            light: {
                large: function(a) {
                    return h.jsx(b("SUIGlyphIcon.react"), babelHelpers["extends"]({}, a, {
                        srcDefault: g("489948"),
                        srcDisabled: g("499675"),
                        srcHover: g("499674")
                    }))
                },
                small: function(a) {
                    return h.jsx(b("SUIGlyphIcon.react"), babelHelpers["extends"]({}, a, {
                        srcDefault: g("489947"),
                        srcDisabled: g("499667"),
                        srcHover: g("499666")
                    }))
                }
            },
            iconSize: {
                large: 16,
                small: 12
            }
        }
    }
}
), null);
__d("getSUILayerFooterUniform.fds", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return {
            isFullBleed: !0,
            topBorderColor: a.layout.borderColor
        }
    }
}
), null);
__d("getSUILayerHeaderUniform.fds", ["cssVar", "FDSPrivateTypeStyles"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = 4;
    function a(a) {
        var c = b("FDSPrivateTypeStyles").createTypeStyleGetter(a)
          , d = a.borderRadius;
        return {
            backgroundColor: "#FFFFFF",
            bottomBorderColor: a.layout.borderColor,
            errorIconMarginLeft: "8px",
            horizontalPadding: 16,
            typeStyle: c({
                color: "#1C1E21",
                fontSize: "16px",
                fontWeight: "bold"
            }),
            borderRadius: d.layer === h ? void 0 : d.layer
        }
    }
}
), null);
__d("getSUIModalCardUniform.fds", ["cssVar", "FDSPrivateTypeStyles"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = b("FDSPrivateTypeStyles").createTypeStyleGetter(a);
        return {
            backgroundColor: "#FFFFFF",
            bodyHorizontalMargin: 12,
            bodyVerticalMargin: 20,
            cardBoxShadow: a.layout.card.boxShadow,
            closeButtonPosition: 14,
            modalBoxShadow: a.layout.modal.boxShadow,
            typeStyle: c({
                color: "#1C1E21",
                fontSize: "12px"
            }),
            borderRadius: a.borderRadius.layer
        }
    }
}
), null);
__d("FDSModal.react", ["FDSPrivateThemeContext.react", "React", "SUIModal.react", "SUIModalFillViewportHeight", "getSUICloseButtonUniform.fds", "getSUILayerFooterUniform.fds", "getSUILayerHeaderUniform.fds", "getSUIModalCardUniform.fds", "makeFDSStandardComponent", "makeSUIThemeGetter"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIThemeGetter")({
        SUICloseButton: b("getSUICloseButtonUniform.fds"),
        SUILayerHeader: b("getSUILayerHeaderUniform.fds"),
        SUILayerFooter: b("getSUILayerFooterUniform.fds"),
        SUIModalCard: b("getSUIModalCardUniform.fds")
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props;
            return g.jsx(b("FDSPrivateThemeContext.react").Consumer, {
                children: function(c) {
                    return g.jsx(b("SUIModal.react"), {
                        behaviors: babelHelpers["extends"]({
                            LayerFadeOnShow: null,
                            SUIModalFillViewportHeight: b("SUIModalFillViewportHeight")
                        }, a.behaviors),
                        causalElementRef: a.getCausalElementRef,
                        children: a.children,
                        "data-close-testid": a["data-close-testid"],
                        "data-testid": void 0,
                        fixedTopPosition: a.fixedTopPosition,
                        footer: a.footer,
                        header: a.header,
                        height: a.height,
                        interactionArea: a.interactionArea,
                        isFullBleed: !0,
                        isShown: a.isShown,
                        label: a.label,
                        labelledBy: a.labelledBy,
                        onHide: a.onHide,
                        shade: a.shade,
                        theme: h(c),
                        titleID: a.labelledBy,
                        width: a.width
                    })
                }
            })
        }
        ;
        return c
    }(g.Component);
    a.defaultProps = {
        behaviors: {},
        getCausalElementRef: function() {
            return null
        },
        shade: "dark",
        width: 600
    };
    c = b("makeFDSStandardComponent")("FDSModal", a);
    e.exports = c
}
), null);
__d("SUIHorizontalLayout.react", ["Locale", "React", "SUITheme", "joinClasses", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function h() {
        return b("Locale").isRTL() ? "marginLeft" : "marginRight"
    }
    var i = {
        display: "inline-block"
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a, c = this.props, d = c.children, e = c.className, f = c.display, j = c.margin, k = c.wrapChildren;
            c.theme;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["children", "className", "display", "margin", "wrapChildren", "theme"]);
            var l = b("SUITheme").get(this).SUIHorizontalLayout
              , m = (a = {},
            a[h()] = l.margin,
            a.display = "inline-block",
            a);
            f = f === "inline" ? "inline-block" : f;
            var n = k ? function(b, c, a) {
                return g.jsx("div", {
                    style: a,
                    children: b
                }, c)
            }
            : function(b, c, a) {
                return g.cloneElement(b, {
                    style: a,
                    key: c
                })
            }
            ;
            d = g.Children.toArray(d).filter(function(a) {
                return !!a
            }).map(function(a, b, c) {
                return b !== c.length - 1 ? n(a, a.key || b, m) : n(a, a.key || b, i)
            });
            l = b("joinClasses")(e || "", j || "");
            l && (c = babelHelpers["extends"]({}, c, {
                className: l
            }));
            return g.jsx("div", babelHelpers["extends"]({}, c, {
                style: {
                    display: f
                },
                children: d
            }))
        }
        ;
        return c
    }(g.PureComponent);
    a.propTypes = {
        "data-testid": (c = b("prop-types")).string,
        display: c.oneOf(["block", "inline", "flex"]).isRequired,
        theme: c.instanceOf(b("SUITheme")),
        margin: c.string,
        wrapChildren: c.bool.isRequired
    };
    a.defaultProps = {
        display: "inline",
        wrapChildren: !0
    };
    d = b("withSUITheme")(a);
    e.exports = d
}
), null);
__d("SUILayerFooter.react", ["cx", "Locale", "React", "SUIHorizontalLayout.react", "SUITheme", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("SUITheme").get(this).SUILayerFooter;
            return h.jsxs("div", {
                className: "_4iyh" + (a.isFullBleed === !1 ? " _3-8t" : "") + (a.isFullBleed === !0 ? " _2pia" : "") + " _2pi4",
                style: {
                    borderTop: "1px solid " + a.topBorderColor
                },
                children: [h.jsx("span", {
                    className: b("Locale").isRTL() ? "_4iyi ellipsis" : "ellipsis",
                    children: this.props.leftContent
                }), h.jsx("span", {
                    className: b("Locale").isRTL() ? null : "_4iyi",
                    children: h.jsxs(b("SUIHorizontalLayout.react"), {
                        children: [this.props.secondaryButton, this.props.primaryButton]
                    })
                })]
            })
        }
        ;
        return c
    }(h.PureComponent);
    c = b("withSUITheme")(a);
    e.exports = c
}
), null);
__d("getSUIHorizontalLayoutUniform.fds", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        return {
            margin: 8
        }
    }
}
), null);
__d("FDSPrivateLayerFooter.react", ["FDSPrivateThemeContext.react", "React", "SUILayerFooter.react", "getSUIHorizontalLayoutUniform.fds", "getSUILayerFooterUniform.fds", "makeFDSStandardComponent", "makeSUIThemeGetter"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIThemeGetter")({
        SUIHorizontalLayout: b("getSUIHorizontalLayoutUniform.fds"),
        SUILayerFooter: b("getSUILayerFooterUniform.fds")
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = h(this.context);
            return g.jsx(b("SUILayerFooter.react"), {
                leftContent: a.leftContent,
                primaryButton: a.primaryButton,
                secondaryButton: a.secondaryButton,
                theme: c
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.contextType = b("FDSPrivateThemeContext.react");
    c = b("makeFDSStandardComponent")("FDSPrivateLayerFooter", a);
    e.exports = c
}
), null);
__d("FDSModalFooter.react", ["FDSPrivateLayerFooter.react"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("FDSPrivateLayerFooter.react");
    e.exports = a
}
), null);
__d("getInlineBoundingRect", ["Rect"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        var d = a.getClientRects();
        if (!c || d.length === 0)
            return b("Rect").getElementBounds(a);
        var e, f = !1;
        for (var g = 0; g < d.length; g++) {
            var h = new (b("Rect"))(Math.round(d[g].top),Math.round(d[g].right),Math.round(d[g].bottom),Math.round(d[g].left),"viewport").convertTo("document")
              , i = h.getPositionVector()
              , j = i.add(h.getDimensionVector());
            if (!e || i.x <= e.l && i.y > e.t) {
                if (f)
                    break;
                e = new (b("Rect"))(i.y,j.x,j.y,i.x,"document")
            } else
                e.t = Math.min(e.t, i.y),
                e.b = Math.max(e.b, j.y),
                e.r = j.x;
            h.contains(c) && (f = !0)
        }
        e || (e = b("Rect").getElementBounds(a));
        return e
    }
    e.exports = a
}
), null);
__d("nl2br", ["DOM"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = /(\r\n|[\r\n])/;
    function a(a) {
        return a.split(g).map(function(a) {
            return g.test(a) ? b("DOM").create("br") : a
        })
    }
}
), null);
__d("Tooltip", ["fbt", "invariant", "Arbiter", "AsyncRequest", "ContextualLayer", "ContextualLayerAutoFlip", "CSS", "DOM", "Event", "Style", "TooltipData", "Vector", "emptyFunction", "getElementText", "getInlineBoundingRect", "getOrCreateDOMID", "gkx", "killswitch", "nl2br", "setImmediate"], (function(a, b, c, d, e, f, g, h) {
    var i = null
      , j = null
      , k = null
      , l = null
      , m = null
      , n = null
      , o = null
      , p = !1
      , q = []
      , r = [];
    function s() {
        if (!m) {
            n = b("DOM").create("div", {
                className: "tooltipContent",
                "data-testid": "tooltip_testid"
            });
            o = b("getOrCreateDOMID")(n);
            var a = b("DOM").create("i", {
                className: "arrow"
            });
            a = b("DOM").create("div", {
                className: "uiTooltipX"
            }, [n, a]);
            m = new (b("ContextualLayer"))({},a);
            m.shouldSetARIAProperties(!1);
            m.enableBehavior(b("ContextualLayerAutoFlip"));
            b("gkx")("764802") && (m.getRoot().style.pointerEvents = "none")
        }
    }
    function t(a, c) {
        v._show(a, g._("\u0110ang t\u1ea3i...")),
        new (b("AsyncRequest"))(c).setHandler(function(b) {
            v._show(a, b.getPayload()),
            m && m.updatePosition()
        }).setErrorHandler(b("emptyFunction")).send()
    }
    var u;
    b("Event").listen(document.documentElement, "mouseover", function(a) {
        u = a,
        b("setImmediate")(function() {
            u = null
        })
    });
    var v = babelHelpers["extends"]({}, b("TooltipData"), {
        isActive: function(a) {
            return a === i
        },
        process: function(a, c) {
            if (!b("DOM").contains(a, c))
                return;
            if (a !== i) {
                v.fetchIfNecessary(a);
                c = v._get(a);
                if (c.suppress)
                    return;
                c.delay ? v._showWithDelay(a, c.delay) : v.show(a)
            }
        },
        fetchIfNecessary: function(a) {
            var b = a.getAttribute("data-tooltip-uri");
            b && (a.removeAttribute("data-tooltip-uri"),
            t(a, b))
        },
        suspend: function() {
            p = !0
        },
        hide: function() {
            var a = i, c, d = p;
            p = !1;
            try {
                b("Arbiter").inform("tooltip/requesthide", {
                    context: a
                }),
                c = p
            } finally {
                p = d
            }
            c || v.commitHide(a)
        },
        commitHide: function(a) {
            if (!j || a !== j) {
                if (a && m) {
                    m.hide();
                    i = null;
                    while (q.length)
                        q.pop().remove()
                }
                b("Arbiter").inform("tooltip/hide", {
                    context: a
                })
            }
        },
        _show: function(a, b) {
            v._store({
                context: a,
                content: b
            }),
            v.isActive(a) && v.show(a)
        },
        show: function(a) {
            var c, d = p;
            p = !1;
            try {
                b("Arbiter").inform("tooltip/requestshow", {
                    context: a
                }),
                c = p
            } finally {
                p = d
            }
            c || v.commitShow(a)
        },
        commitShow: function(a) {
            var c = function() {
                a.removeAttribute("aria-describedby");
                var c = v._get(a);
                c.className && m && b("CSS").removeClass(m.getRoot(), c.className);
                v.hide()
            }
              , d = function(a) {
                b("DOM").contains(i, a.getTarget()) || c()
            };
            j = a;
            s();
            a !== i && (b("killswitch")("TOOLTIP_FIX_HIDE_ACTIVE_TOOLTIP_BEFORE_NEW_ONE") ? v.commitHide(a) : v.commitHide(i));
            j = null;
            a !== i && b("Arbiter").inform("tooltip/beforeshow", {
                context: a
            });
            var e = v._get(a);
            if (e.suppress || v.allSuppressed)
                return;
            var f = e.content;
            if (e.overflowDisplay) {
                if (a.offsetWidth >= a.scrollWidth)
                    return;
                f || (f = b("getElementText")(a))
            }
            var g = f ? function() {
                a.setAttribute("aria-describedby", o),
                m && m.show()
            }
            : function() {}
              , k = 0
              , l = e.offsetY ? parseInt(e.offsetY, 10) : 0;
            if (e.position === "left" || e.position === "right")
                l = (a.offsetHeight - 28) / 2;
            else if (e.alignH !== "center") {
                var p = a.offsetWidth;
                p < 32 && (k = (p - 32) / 2 * (e.alignH === "right" ? -1 : 1))
            }
            p = u ? b("Vector").getEventPosition(u) : b("Vector").getElementPosition(a);
            m || h(0, 4328);
            m.setContextWithBounds(a, b("getInlineBoundingRect")(a, p)).setOffsetX(k).setOffsetY(l).setPosition(e.position).setAlignment(e.alignH);
            if (typeof f === "string") {
                b("CSS").addClass(m.getRoot(), "invisible_elem");
                p = b("DOM").create("span", {}, b("nl2br")(f));
                k = b("DOM").create("div", {
                    className: "tooltipText"
                }, p);
                b("DOM").setContent(n, k);
                g();
                b("CSS").removeClass(m.getRoot(), "invisible_elem")
            } else
                b("DOM").setContent(n, f),
                g();
            q.push(b("Event").listen(document.documentElement, "mouseover", d), b("Event").listen(document.documentElement, "focusin", d));
            l = b("Style").getScrollParent(a);
            l !== window && q.push(b("Event").listen(l, "scroll", c));
            e.persistOnClick || q.push(b("Event").listen(a, "click", c));
            e.className && b("CSS").addClass(m.getRoot(), e.className);
            i = a
        },
        _showWithDelay: function(a, c) {
            a !== k && v._clearDelay();
            if (!l) {
                var d = function(a) {
                    b("DOM").contains(k, a.getTarget()) || v._clearDelay()
                };
                r.push(b("Event").listen(document.documentElement, "mouseover", d), b("Event").listen(document.documentElement, "focusin", d));
                k = a;
                l = setTimeout(function() {
                    v._clearDelay(),
                    v.show(a)
                }, c)
            }
        },
        _clearDelay: function() {
            clearTimeout(l);
            k = null;
            l = null;
            while (r.length)
                r.pop().remove()
        }
    });
    b("Event").listen(window, "scroll", v.hide);
    e.exports = v
}
), null);
__d("SUIErrorComponentUtil", ["cx", "PositionEnum", "React", "Tooltip", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getErrorLevel = i;
    f.hasError = j;
    f.getErrorTooltipProps = a;
    f.getErrorBorderColor = c;
    f.getErrorIcon = d;
    var h = b("React");
    e = {
        errorMessage: b("prop-types").node,
        warningMessage: b("prop-types").node,
        errorTooltipPosition: b("PositionEnum").propType
    };
    f.propTypes = e;
    g = {
        errorTooltipPosition: "above"
    };
    f.defaultProps = g;
    function i(a) {
        if (Boolean(a.errorMessage))
            return "error";
        return Boolean(a.warningMessage) ? "warning" : "none"
    }
    function j(a) {
        return i(a) !== "none"
    }
    function a(a) {
        var c;
        return !j(a) ? Object.freeze({}) : babelHelpers["extends"]({}, b("Tooltip").propsFor((c = a.errorMessage) != null ? c : a.warningMessage, a.errorTooltipPosition), {
            "data-tooltip-alignh": "right"
        })
    }
    function c(a, b) {
        a = i(a);
        if (a === "none")
            return null;
        b = b.SUIError;
        return a === "error" ? b.error.borderColor : b.warning.borderColor
    }
    function d(a, c, d) {
        a = i(a);
        if (a === "none")
            return null;
        c = c.SUIError;
        a = a === "error" ? c.error.icon : c.warning.icon;
        return h.cloneElement(a, {
            className: b("joinClasses")("_1vvf", d)
        })
    }
}
), null);
__d("SUILayerHeader.react", ["cx", "FlexLayout.react", "React", "SUIBorderUtils", "SUICloseButton.react", "SUIErrorComponentUtil", "SUIModalContext", "SUIText.react", "SUITheme", "autoFlipStyleProps", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 12
      , j = 12
      , k = ["topLeft", "topRight"];
    a = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").defaultProps, {
        hasCloseButton: !0
    });
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = b("SUITheme").get(this)
              , d = c.SUILayerHeader
              , e = this.props.fdsOverride_auxContent || this.props.button || this.props.link || this.props["switch"] || this.props.menu || null
              , f = d.horizontalPadding + (this.props.hasCloseButton ? j + b("SUICloseButton.react").getHeightForSize(c, "large") : 0)
              , g = Boolean(this.props.subtitle) ? h.jsx("div", {
                className: "_2pic",
                children: h.jsx(b("SUIText.react"), {
                    color: "secondary",
                    size: "body2",
                    theme: c,
                    children: this.props.subtitle
                })
            }) : null
              , l = b("SUIErrorComponentUtil").getErrorIcon(this.props, c, "_34di")
              , m = (c = b("SUIErrorComponentUtil").getErrorBorderColor(this.props, c)) != null ? c : d.typeStyle.color
              , n = Boolean(d.borderRadius) ? b("SUIBorderUtils").getBorderRadiusStyles(k, d.borderRadius) : void 0;
            return h.jsx(b("SUIModalContext").Consumer, {
                children: function(c) {
                    return h.jsx("div", {
                        className: "_3lxv",
                        style: b("autoFlipStyleProps")(babelHelpers["extends"]({
                            backgroundColor: d.backgroundColor,
                            borderBottom: "1px solid " + d.bottomBorderColor,
                            padding: i,
                            paddingLeft: d.horizontalPadding,
                            paddingRight: f
                        }, n)),
                        children: h.jsxs(b("FlexLayout.react"), {
                            align: "center",
                            justify: "all",
                            children: [h.jsxs("div", {
                                className: "_3lxw",
                                children: [h.jsxs(b("FlexLayout.react"), {
                                    align: "center",
                                    children: [h.jsx("div", {
                                        "aria-level": "1",
                                        className: "ellipsis",
                                        "data-hover": "tooltip",
                                        "data-tooltip-display": "overflow",
                                        id: c.labelID,
                                        role: "heading",
                                        style: babelHelpers["extends"]({}, d.typeStyle, {
                                            color: m
                                        }),
                                        children: a.props.title
                                    }), l && h.cloneElement(l, babelHelpers["extends"]({}, b("SUIErrorComponentUtil").getErrorTooltipProps(a.props), {
                                        style: b("autoFlipStyleProps")({
                                            marginLeft: d.errorIconMarginLeft
                                        })
                                    }))]
                                }), h.jsx("div", {
                                    children: g
                                })]
                            }), e != null && h.jsx("div", {
                                className: "_8mlk",
                                children: e
                            })]
                        })
                    })
                }
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
__d("SUITextUniform.fds", ["cssVar", "FDSSystemFonts"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = b("FDSSystemFonts").FONT_FAMILY;
    c = {
        header1: {
            fontFamily: a,
            fontSize: 24,
            lineHeight: 28
        },
        header2: {
            fontFamily: a,
            fontSize: 20,
            lineHeight: 24
        },
        header3: {
            fontFamily: a,
            fontSize: 16,
            lineHeight: 20
        },
        header4: {
            fontFamily: a,
            fontSize: 14,
            lineHeight: 18
        },
        body1: {
            fontFamily: a,
            fontSize: 14,
            lineHeight: 18
        },
        body1_DEPRECATED: {
            fontFamily: a,
            fontSize: 16,
            lineHeight: 20
        },
        body2: {
            fontFamily: a,
            fontSize: 13,
            lineHeight: 17
        },
        body2_DEPRECATED: {
            fontFamily: a,
            fontSize: 14,
            lineHeight: 18
        },
        body3: {
            fontFamily: a,
            fontSize: 12,
            lineHeight: 16
        },
        body3_DEPRECATED: {
            fontFamily: a,
            fontSize: 13,
            lineHeight: 17
        },
        meta1: {
            fontFamily: a,
            fontSize: 12,
            lineHeight: 16
        },
        display: {
            fontFamily: a,
            fontSize: 40,
            lineHeight: 48
        },
        heading: {
            fontFamily: a,
            fontSize: 24,
            lineHeight: 32
        },
        subheading: {
            fontFamily: a,
            fontSize: 20,
            lineHeight: 24
        },
        headline: {
            fontFamily: a,
            fontSize: 16,
            lineHeight: 24
        },
        regular: {
            fontFamily: a,
            fontSize: 14,
            lineHeight: 20
        },
        regularUI: {
            fontFamily: a,
            fontSize: 14,
            lineHeight: 16
        },
        large: {
            fontFamily: a,
            fontSize: 16,
            lineHeight: 20
        },
        letterSpacing: "normal",
        medium: {
            fontFamily: a,
            fontSize: 14,
            lineHeight: 18
        },
        shade: {
            dark: "#1d2129",
            light: "#90949c",
            link: "#365899",
            medium: "#4b4f56",
            white: "#FFFFFF"
        },
        small: {
            fontFamily: a,
            fontSize: 12,
            lineHeight: 16
        },
        color: {
            blueLink: "#385898",
            disabled: "#BEC3C9",
            disabledDark: "#373737",
            interactive: "#1877F2",
            negative: "#FA383E",
            placeholder: "#8D949E",
            positive: "#00A400",
            primary: "#1C1E21",
            primaryDark: "#cccccc",
            secondary: "#606770",
            secondaryDark: "#4A4A4A",
            white: "#FFFFFF"
        },
        xlarge: {
            fontFamily: a,
            fontSize: 18,
            lineHeight: 24
        },
        xsmall: {
            fontFamily: a,
            fontSize: 11,
            lineHeight: 14
        },
        xxlarge: {
            fontFamily: a,
            fontSize: 24,
            lineHeight: 30
        }
    };
    d = c;
    e.exports = d
}
), null);
__d("getSUIErrorUniform.fds", ["ix", "cssVar", "Image.react", "React", "asset"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a() {
        return {
            error: {
                borderColor: "#FA383E",
                icon: i.jsx(b("Image.react"), {
                    src: g("480267")
                })
            },
            warning: {
                borderColor: "#FFBA00",
                icon: i.jsx(b("Image.react"), {
                    src: g("480789")
                })
            }
        }
    }
}
), null);
__d("getSUILinkUniform.fds", ["cssVar"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a) {
        return {
            normalColor: a.colors.text.blueLink,
            hoverColor: a.colors.text.blueLink,
            inverseColor: "#FFFFFF",
            inverseHoverColor: "#FFFFFF"
        }
    }
}
), null);
__d("FDSPrivateLayerHeader.react", ["FDSPrivateThemeContext.react", "React", "SUIErrorComponentUtil", "SUILayerHeader.react", "SUITextUniform.fds", "getSUICloseButtonUniform.fds", "getSUIErrorUniform.fds", "getSUILayerHeaderUniform.fds", "getSUILinkUniform.fds", "makeSUIThemeGetter"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIThemeGetter")({
        SUICloseButton: b("getSUICloseButtonUniform.fds"),
        SUIError: b("getSUIErrorUniform.fds"),
        SUILayerHeader: b("getSUILayerHeaderUniform.fds"),
        SUILink: b("getSUILinkUniform.fds"),
        SUIText: function() {
            return b("SUITextUniform.fds")
        }
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = h(this.context);
            c = {
                errorMessage: a.errorMessage,
                errorTooltipPosition: a.errorTooltipPosition,
                hasCloseButton: a.hasCloseButton,
                subtitle: a.subtitle,
                theme: c,
                title: a.title,
                warningMessage: a.warningMessage
            };
            if (a.fdsOverride_auxContent)
                return g.jsx(b("SUILayerHeader.react"), babelHelpers["extends"]({}, c, {
                    fdsOverride_auxContent: a.fdsOverride_auxContent
                }));
            if (a["switch"])
                return g.jsx(b("SUILayerHeader.react"), babelHelpers["extends"]({}, c, {
                    "switch": a["switch"]
                }));
            if (a.button)
                return g.jsx(b("SUILayerHeader.react"), babelHelpers["extends"]({}, c, {
                    button: a.button
                }));
            return a.menu ? g.jsx(b("SUILayerHeader.react"), babelHelpers["extends"]({}, c, {
                menu: a.menu
            })) : g.jsx(b("SUILayerHeader.react"), babelHelpers["extends"]({}, c, {
                link: a.link ? a.link : void 0
            }))
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a;
    a.contextType = b("FDSPrivateThemeContext.react");
    a.defaultProps = b("SUIErrorComponentUtil").defaultProps
}
), null);
__d("FDSModalHeader.react", ["FDSPrivateLayerHeader.react", "React", "SUIErrorComponentUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("FDSPrivateLayerHeader.react"), babelHelpers["extends"]({}, this.props, {
                hasCloseButton: !0
            }))
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a;
    a.defaultProps = b("SUIErrorComponentUtil").defaultProps
}
), null);
__d("FDSPrivateCardLayoutContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        hasHeader: !0,
        hasFooter: !0
    });
    d = c;
    e.exports = d
}
), null);
__d("FDSSection.react", ["cx", "FDSPrivateCardLayoutContext", "FDSPrivateThemeContext.react", "FDSPrivateThemeUtils", "React", "SUIErrorBoundary.react", "makeFDSStandardComponent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = this.context
              , d = b("FDSPrivateThemeUtils").isGeo(c) && this.props.hasPadding;
            return h.jsx(b("FDSPrivateCardLayoutContext").Consumer, {
                children: function(c) {
                    var e = c.hasHeader;
                    c = c.hasFooter;
                    return h.jsx("div", {
                        className: "_2xaj" + (a.props.hasPadding ? " _2xak" : "") + (d ? " _99nt" : "") + (d && !e ? " _99nu" : "") + (d && !c ? " _99nv" : ""),
                        "data-testid": void 0,
                        children: h.jsx(b("SUIErrorBoundary.react"), {
                            children: a.props.children
                        })
                    })
                }
            })
        }
        ;
        return c
    }(h.Component);
    a.contextType = b("FDSPrivateThemeContext.react");
    a.defaultProps = {
        hasPadding: !0
    };
    c = b("makeFDSStandardComponent")("FDSSection", a);
    e.exports = c
}
), null);
__d("FantaDispatcher", ["ExplicitRegistrationDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("ExplicitRegistrationDispatcher"));
    c = new a({
        strict: !1
    });
    e.exports = c
}
), null);
__d("WorkplaceChatHelper", ["ChannelConstants", "CurrentUser", "PresenceViewerCapabilities"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isDesktopChatApp = a;
    f.getAppID = c;
    f.showWindow = d;
    f.getIsSystemDoNotDisturbOn = e;
    f.getScreenSharingSourceID = g;
    f.stopScreenSharing = h;
    f.suppressChatIfActiveOnDesktop = i;
    function a() {
        return window.workchat !== void 0
    }
    function c() {
        return window.workchat.appId
    }
    function d() {
        window.workchat.showWindow()
    }
    function e() {
        var a;
        a = (a = window.workchat) == null ? void 0 : a.getIsSystemDoNotDisturbOn;
        return a == null ? !1 : a()
    }
    function g() {
        return window.workchat.getScreenSharingSourceID()
    }
    function h() {
        return window.workchat.stopScreenSharing()
    }
    function i() {
        return b("CurrentUser").isWorkUser() && (b("PresenceViewerCapabilities").get() & b("ChannelConstants").CAPABILITY_ACTIVE_ON_DESKTOP_APP) == b("ChannelConstants").CAPABILITY_ACTIVE_ON_DESKTOP_APP
    }
}
), null);
__d("FantaTabActions", ["Bootloader", "CurrentUser", "Env", "FantaDispatcher", "FBIDCheck", "MercuryIDs", "MessengerURIConstants", "URI", "WebMessengerThreadPermalinks", "WorkGalahadSettings", "WorkplaceChatHelper", "goURI", "ifRequired", "keyMirror", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = b("keyMirror")({
        BLUR_TAB: null,
        CLEAR_PAGE_INDICATOR_DESCRIPTION: null,
        CLOSE_ALL_TABS: null,
        CLOSE_AND_TAB_NEXT: null,
        CLOSE_TAB: null,
        DELETE_TAB: null,
        FOCUS_NEXT_TAB: null,
        FOCUS_PREVIOUS_TAB: null,
        FOCUS_TAB: null,
        HIGHLIGHT_NEW_MESSAGE: null,
        HOVERED_TAB: null,
        JUMP_TO_MESSAGE: null,
        LOAD_FROM_DATA: null,
        MINIMIZE_ALL_TABS: null,
        MINIMIZE_TAB: null,
        OPEN_TAB_WITH_INTERSTITIAL_DATA: null,
        OPEN_TAB: null,
        OPT_IN_OPEN_TAB_WITH_BLOCKEES: null,
        CLOSE_GROUP_ENTRANCE_WARNING_DIALOG: null,
        REPLACE_TAB: null,
        SCROLL_BOTTOM_CHANGED: null,
        SET_ALLOWED_RAISED_TABS: null,
        SET_MESSAGE_COUNT: null,
        SET_PAGE_INDICATOR_DESCRIPTION: null,
        SET_PERMANENT_URI: null,
        SHOW_UNSEEN_MESSAGES: null,
        UNHIGHLIGHT_NEW_MESSAGE: null,
        UNHOVERED_TAB: null,
        UNMINIMIZE_TAB: null,
        WIPE_JUMP_TO_MESSAGE: null,
        CREATE_NEW_NAMED_GROUP_CHAT: null
    });
    function j(a, c) {
        var d = a ? new (g || (g = b("URI")))(b("WebMessengerThreadPermalinks").getThreadURIFromServerID(a)) : new (g || (g = b("URI")))(b("MessengerURIConstants").COMPOSE_SUBPATH);
        b("ifRequired")("BusinessURI.brands", function(a) {
            return b("goURI")(a(d))
        }, function() {
            return b("setTimeout")(function() {
                k.openTab(a, c)
            }, 100)
        })
    }
    var k = {
        Types: i,
        openNewMessageTab: function(a, b, c) {
            k.openTab(a, b, c, !0)
        },
        openTab: function(a, c, d, e, f) {
            var g = this;
            if ((h || (h = b("Env"))).isCQuick) {
                var k = b("MercuryIDs").getUserIDFromThreadID(a);
                b("Bootloader").loadModules(["BlueCompatRouter"], function(a) {
                    k != null && a.startChat(k, !b("FBIDCheck").isUser_deprecated(k))
                }, "FantaTabActions");
                return
            }
            if (b("CurrentUser").isWorkUser() && b("WorkGalahadSettings").isGalahadEnabled) {
                var l = b("ifRequired")("WorkGalahadChat_DEPRECATED", function(b) {
                    b.openThreadFromThreadID(a);
                    return !0
                }, function() {
                    return !1
                });
                if (l)
                    return
            }
            b("ifRequired")("FantaTabsEagerBootloader", function(a) {
                return a.bootload()
            });
            this.dispatchOrBootloadGetMessages(function() {
                b("FantaDispatcher").dispatch({
                    type: i.OPEN_TAB,
                    tabID: a,
                    entryPoint: c,
                    defaultText: d,
                    isNewMessageTab: e,
                    defaultPreview: f
                }),
                b("ifRequired")("FantaTabsReactApp", function(b) {
                    g._tryLoadSlimApp(a, c)
                }, function() {
                    g._tryLoadSlimApp(a, c, function() {
                        return j(a, c)
                    })
                })
            })
        },
        openInterstitialTab: function(a, c, d) {
            var e = this;
            this.dispatchOrBootloadGetMessages(function() {
                b("FantaDispatcher").dispatch({
                    type: i.OPEN_TAB_WITH_INTERSTITIAL_DATA,
                    tabID: a,
                    interstitialData: c,
                    entryPoint: d
                }),
                b("ifRequired")("FantaTabsReactApp", function(b) {
                    e._tryLoadSlimAppWithInterstitialData(a, c, d)
                }, function() {
                    e._tryLoadSlimAppWithInterstitialData(a, c, d)
                })
            })
        },
        _tryLoadSlimApp: function(a, c, d) {
            b("ifRequired")("FantaTabsSlimApp", function(d) {
                b("ifRequired")("FantaAppStore", function() {}, function() {
                    d.getPumpedUp(function() {
                        b("FantaDispatcher").dispatch({
                            type: i.OPEN_TAB,
                            tabID: a,
                            entryPoint: c
                        })
                    })
                })
            }, function() {
                return d && d(a)
            })
        },
        _tryLoadSlimAppWithInterstitialData: function(a, c, d) {
            b("ifRequired")("FantaTabsSlimApp", function(e) {
                b("ifRequired")("FantaAppStore", function() {}, function() {
                    e.getPumpedUp(function() {
                        b("FantaDispatcher").dispatch({
                            type: i.OPEN_TAB_WITH_INTERSTITIAL_DATA,
                            tabID: a,
                            interstitialData: c,
                            entryPoint: d
                        })
                    })
                })
            })
        },
        replaceTab: function(a, c) {
            b("FantaDispatcher").dispatch({
                type: i.REPLACE_TAB,
                tabID: a,
                newTabID: c
            })
        },
        minimizeTab: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.MINIMIZE_TAB,
                tabID: a
            })
        },
        minimizeAllTabs: function() {
            b("FantaDispatcher").dispatch({
                type: i.MINIMIZE_ALL_TABS
            })
        },
        unminimizeTab: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.UNMINIMIZE_TAB,
                tabID: a
            })
        },
        optInOpenTabWithBlockees: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.OPT_IN_OPEN_TAB_WITH_BLOCKEES,
                tabID: a
            })
        },
        closeGroupEntranceWarningDialog: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.CLOSE_GROUP_ENTRANCE_WARNING_DIALOG,
                tabID: a
            })
        },
        closeTab: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.CLOSE_TAB,
                tabID: a
            })
        },
        closeAllTabs: function() {
            b("FantaDispatcher").dispatch({
                type: i.CLOSE_ALL_TABS
            })
        },
        closeAndTabNext: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.CLOSE_AND_TAB_NEXT,
                tabID: a
            })
        },
        deleteTab: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.DELETE_TAB,
                tabID: a
            })
        },
        focusTab: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.FOCUS_TAB,
                tabID: a
            })
        },
        blurTab: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.BLUR_TAB,
                tabID: a
            })
        },
        hoveredTab: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.HOVERED_TAB,
                tabID: a
            })
        },
        unhoveredTab: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.UNHOVERED_TAB,
                tabID: a
            })
        },
        highlightNewMessage: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.HIGHLIGHT_NEW_MESSAGE,
                tabId: a
            })
        },
        unhighlightNewMessage: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.UNHIGHLIGHT_NEW_MESSAGE,
                tabId: a
            })
        },
        setAllowedRaisedTabs: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.SET_ALLOWED_RAISED_TABS,
                allowedRaisedTabs: a
            })
        },
        loadFromData: function(a) {
            if (b("WorkplaceChatHelper").suppressChatIfActiveOnDesktop())
                return;
            this.dispatchOrBootloadGetMessages(function() {
                a && b("FantaDispatcher").dispatch({
                    type: i.LOAD_FROM_DATA,
                    tabData: a
                })
            })
        },
        focusNextTab: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.FOCUS_NEXT_TAB,
                event: a
            })
        },
        focusPreviousTab: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.FOCUS_PREVIOUS_TAB,
                event: a
            })
        },
        scrollBottomChanged: function(a, c, d) {
            b("FantaDispatcher").dispatch({
                type: i.SCROLL_BOTTOM_CHANGED,
                isScrolledToBottom: c,
                tabID: a,
                showUnseenMessages: d
            })
        },
        jumpToMessage: function(a, c) {
            b("FantaDispatcher").dispatch({
                type: i.JUMP_TO_MESSAGE,
                mid: c,
                tabID: a
            })
        },
        wipeJumpToMessage: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.WIPE_JUMP_TO_MESSAGE,
                tabID: a
            })
        },
        setPageIndicatorDescription: function(a, c) {
            b("FantaDispatcher").dispatch({
                type: i.SET_PAGE_INDICATOR_DESCRIPTION,
                tabID: a,
                description: c
            })
        },
        clearPageIndicatorDescription: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.CLEAR_PAGE_INDICATOR_DESCRIPTION,
                tabID: a
            })
        },
        showUnseenMessages: function(a) {
            b("FantaDispatcher").dispatch({
                type: i.SHOW_UNSEEN_MESSAGES,
                tabID: a
            })
        },
        setPermanentUri: function(a, c) {
            b("FantaDispatcher").dispatch({
                type: i.SET_PERMANENT_URI,
                tabID: a,
                uri: c
            })
        },
        createNewNamedGroupChat: function(a, c) {
            b("FantaDispatcher").dispatch({
                type: i.CREATE_NEW_NAMED_GROUP_CHAT,
                tabID: a,
                tokens: c
            })
        },
        dispatchOrBootloadGetMessages: function(a) {
            b("ifRequired")("FantaReducersGetMessages", function() {
                a()
            }, function() {
                b("ifRequired")("FantaAppStore", function(c) {
                    b("Bootloader").loadModules(["FantaReducersGetMessages"], function(b) {
                        c.addReducers(b),
                        a()
                    }, "FantaTabActions")
                }, function() {
                    a()
                })
            })
        }
    };
    e.exports = k
}
), null);
__d("sanitizeDraftText", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new RegExp("\r","g");
    function a(a) {
        return a.replace(g, "")
    }
    e.exports = a
}
), null);
__d("immutable", [], (function(a, b, c, d, e, f) {
    (function(b, c) {
        typeof f === "object" && typeof e !== "undefined" ? e.exports = c() : typeof define === "function" && define.amd ? define(c) : b.Immutable = c()
    }
    )(this, function() {
        "use strict";
        var a = Array.prototype.slice;
        function b(a, b) {
            b && (a.prototype = Object.create(b.prototype)),
            a.prototype.constructor = a
        }
        var c = "delete"
          , d = 5
          , e = 1 << d
          , f = e - 1
          , g = {}
          , h = {
            value: !1
        }
          , i = {
            value: !1
        };
        function j(a) {
            a.value = !1;
            return a
        }
        function k(a) {
            a && (a.value = !0)
        }
        function l() {}
        function m(a, b) {
            b = b || 0;
            var c = Math.max(0, a.length - b)
              , d = new Array(c);
            for (var e = 0; e < c; e++)
                d[e] = a[e + b];
            return d
        }
        function n(a) {
            a.size === void 0 && (a.size = a.__iterate(p));
            return a.size
        }
        function o(a, b) {
            return b >= 0 ? +b : n(a) + +b
        }
        function p() {
            return !0
        }
        function q(a, b, c) {
            return (a === 0 || c !== void 0 && a <= -c) && (b === void 0 || c !== void 0 && b >= c)
        }
        function r(a, b) {
            return aa(a, b, 0)
        }
        function s(a, b) {
            return aa(a, b, b)
        }
        function aa(a, b, c) {
            return a === void 0 ? c : a < 0 ? Math.max(0, b + a) : b === void 0 ? a : Math.min(b, a)
        }
        function t(a) {
            return x(a) ? a : F(a)
        }
        b(u, t);
        function u(a) {
            return y(a) ? a : G(a)
        }
        b(v, t);
        function v(a) {
            return z(a) ? a : H(a)
        }
        b(w, t);
        function w(a) {
            return x(a) && !ba(a) ? a : I(a)
        }
        function x(a) {
            return !!(a && a[da])
        }
        function y(a) {
            return !!(a && a[ea])
        }
        function z(a) {
            return !!(a && a[fa])
        }
        function ba(a) {
            return y(a) || z(a)
        }
        function ca(a) {
            return !!(a && a[ga])
        }
        t.isIterable = x;
        t.isKeyed = y;
        t.isIndexed = z;
        t.isAssociative = ba;
        t.isOrdered = ca;
        t.Keyed = u;
        t.Indexed = v;
        t.Set = w;
        var da = "@@__IMMUTABLE_ITERABLE__@@"
          , ea = "@@__IMMUTABLE_KEYED__@@"
          , fa = "@@__IMMUTABLE_INDEXED__@@"
          , ga = "@@__IMMUTABLE_ORDERED__@@"
          , ha = 0
          , A = 1
          , B = 2
          , ia = typeof Symbol === "function" && Symbol.iterator
          , ja = "@@iterator"
          , ka = ia || ja;
        function C(a) {
            this.next = a
        }
        C.prototype.toString = function() {
            return "[Iterator]"
        }
        ;
        C.KEYS = ha;
        C.VALUES = A;
        C.ENTRIES = B;
        C.prototype.inspect = C.prototype.toSource = function() {
            return this.toString()
        }
        ;
        C.prototype[ka] = function() {
            return this
        }
        ;
        function D(a, b, c, d) {
            a = a === 0 ? b : a === 1 ? c : [b, c];
            d ? d.value = a : d = {
                value: a,
                done: !1
            };
            return d
        }
        function E() {
            return {
                value: void 0,
                done: !0
            }
        }
        function la(a) {
            return !!oa(a)
        }
        function ma(a) {
            return a && typeof a.next === "function"
        }
        function na(a) {
            var b = oa(a);
            return b && b.call(a)
        }
        function oa(a) {
            a = a && (ia && a[ia] || a[ja]);
            if (typeof a === "function")
                return a
        }
        function pa(a) {
            return a && typeof a.length === "number"
        }
        b(F, t);
        function F(a) {
            return a === null || a === void 0 ? xa() : x(a) ? a.toSeq() : Aa(a)
        }
        F.of = function() {
            return F(arguments)
        }
        ;
        F.prototype.toSeq = function() {
            return this
        }
        ;
        F.prototype.toString = function() {
            return this.__toString("Seq {", "}")
        }
        ;
        F.prototype.cacheResult = function() {
            !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(),
            this.size = this._cache.length);
            return this
        }
        ;
        F.prototype.__iterate = function(a, b) {
            return Ca(this, a, b, !0)
        }
        ;
        F.prototype.__iterator = function(a, b) {
            return Da(this, a, b, !0)
        }
        ;
        b(G, F);
        function G(a) {
            return a === null || a === void 0 ? xa().toKeyedSeq() : x(a) ? y(a) ? a.toSeq() : a.fromEntrySeq() : ya(a)
        }
        G.prototype.toKeyedSeq = function() {
            return this
        }
        ;
        b(H, F);
        function H(a) {
            return a === null || a === void 0 ? xa() : x(a) ? y(a) ? a.entrySeq() : a.toIndexedSeq() : za(a)
        }
        H.of = function() {
            return H(arguments)
        }
        ;
        H.prototype.toIndexedSeq = function() {
            return this
        }
        ;
        H.prototype.toString = function() {
            return this.__toString("Seq [", "]")
        }
        ;
        H.prototype.__iterate = function(a, b) {
            return Ca(this, a, b, !1)
        }
        ;
        H.prototype.__iterator = function(a, b) {
            return Da(this, a, b, !1)
        }
        ;
        b(I, F);
        function I(a) {
            return (a === null || a === void 0 ? xa() : x(a) ? y(a) ? a.entrySeq() : a : za(a)).toSetSeq()
        }
        I.of = function() {
            return I(arguments)
        }
        ;
        I.prototype.toSetSeq = function() {
            return this
        }
        ;
        F.isSeq = va;
        F.Keyed = G;
        F.Set = I;
        F.Indexed = H;
        var qa = "@@__IMMUTABLE_SEQ__@@";
        F.prototype[qa] = !0;
        b(ra, H);
        function ra(a) {
            this._array = a,
            this.size = a.length
        }
        ra.prototype.get = function(a, b) {
            return this.has(a) ? this._array[o(this, a)] : b
        }
        ;
        ra.prototype.__iterate = function(a, b) {
            var c = this._array
              , d = c.length - 1;
            for (var e = 0; e <= d; e++)
                if (a(c[b ? d - e : e], e, this) === !1)
                    return e + 1;
            return e
        }
        ;
        ra.prototype.__iterator = function(a, b) {
            var c = this._array
              , d = c.length - 1
              , e = 0;
            return new C(function() {
                return e > d ? E() : D(a, e, c[b ? d - e++ : e++])
            }
            )
        }
        ;
        b(sa, G);
        function sa(a) {
            var b = Object.keys(a);
            this._object = a;
            this._keys = b;
            this.size = b.length
        }
        sa.prototype.get = function(a, b) {
            return b !== void 0 && !this.has(a) ? b : this._object[a]
        }
        ;
        sa.prototype.has = function(a) {
            return this._object.hasOwnProperty(a)
        }
        ;
        sa.prototype.__iterate = function(a, b) {
            var c = this._object
              , d = this._keys
              , e = d.length - 1;
            for (var f = 0; f <= e; f++) {
                var g = d[b ? e - f : f];
                if (a(c[g], g, this) === !1)
                    return f + 1
            }
            return f
        }
        ;
        sa.prototype.__iterator = function(a, b) {
            var c = this._object
              , d = this._keys
              , e = d.length - 1
              , f = 0;
            return new C(function() {
                var g = d[b ? e - f : f];
                return f++ > e ? E() : D(a, g, c[g])
            }
            )
        }
        ;
        sa.prototype[ga] = !0;
        b(ta, H);
        function ta(a) {
            this._iterable = a,
            this.size = a.length || a.size
        }
        ta.prototype.__iterateUncached = function(a, b) {
            if (b)
                return this.cacheResult().__iterate(a, b);
            b = this._iterable;
            b = na(b);
            var c = 0;
            if (ma(b)) {
                var d;
                while (!(d = b.next()).done)
                    if (a(d.value, c++, this) === !1)
                        break
            }
            return c
        }
        ;
        ta.prototype.__iteratorUncached = function(a, b) {
            if (b)
                return this.cacheResult().__iterator(a, b);
            b = this._iterable;
            var c = na(b);
            if (!ma(c))
                return new C(E);
            var d = 0;
            return new C(function() {
                var b = c.next();
                return b.done ? b : D(a, d++, b.value)
            }
            )
        }
        ;
        b(ua, H);
        function ua(a) {
            this._iterator = a,
            this._iteratorCache = []
        }
        ua.prototype.__iterateUncached = function(a, b) {
            if (b)
                return this.cacheResult().__iterate(a, b);
            b = this._iterator;
            var c = this._iteratorCache
              , d = 0;
            while (d < c.length)
                if (a(c[d], d++, this) === !1)
                    return d;
            var e;
            while (!(e = b.next()).done) {
                e = e.value;
                c[d] = e;
                if (a(e, d++, this) === !1)
                    break
            }
            return d
        }
        ;
        ua.prototype.__iteratorUncached = function(a, b) {
            if (b)
                return this.cacheResult().__iterator(a, b);
            var c = this._iterator
              , d = this._iteratorCache
              , e = 0;
            return new C(function() {
                if (e >= d.length) {
                    var b = c.next();
                    if (b.done)
                        return b;
                    d[e] = b.value
                }
                return D(a, e, d[e++])
            }
            )
        }
        ;
        function va(a) {
            return !!(a && a[qa])
        }
        var wa;
        function xa() {
            return wa || (wa = new ra([]))
        }
        function ya(a) {
            var b = Array.isArray(a) ? new ra(a).fromEntrySeq() : ma(a) ? new ua(a).fromEntrySeq() : la(a) ? new ta(a).fromEntrySeq() : typeof a === "object" ? new sa(a) : void 0;
            if (!b)
                throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + a);
            return b
        }
        function za(a) {
            var b = Ba(a);
            if (!b)
                throw new TypeError("Expected Array or iterable object of values: " + a);
            return b
        }
        function Aa(a) {
            var b = Ba(a) || typeof a === "object" && new sa(a);
            if (!b)
                throw new TypeError("Expected Array or iterable object of values, or keyed object: " + a);
            return b
        }
        function Ba(a) {
            return pa(a) ? new ra(a) : ma(a) ? new ua(a) : la(a) ? new ta(a) : void 0
        }
        function Ca(a, b, c, d) {
            var e = a._cache;
            if (e) {
                var f = e.length - 1;
                for (var g = 0; g <= f; g++) {
                    var h = e[c ? f - g : g];
                    if (b(h[1], d ? h[0] : g, a) === !1)
                        return g + 1
                }
                return g
            }
            return a.__iterateUncached(b, c)
        }
        function Da(a, b, c, d) {
            var e = a._cache;
            if (e) {
                var f = e.length - 1
                  , g = 0;
                return new C(function() {
                    var a = e[c ? f - g : g];
                    return g++ > f ? E() : D(b, d ? a[0] : g - 1, a[1])
                }
                )
            }
            return a.__iteratorUncached(b, c)
        }
        b(Ea, t);
        function Ea() {
            throw TypeError("Abstract")
        }
        b(Fa, Ea);
        function Fa() {}
        b(Ga, Ea);
        function Ga() {}
        b(Ha, Ea);
        function Ha() {}
        Ea.Keyed = Fa;
        Ea.Indexed = Ga;
        Ea.Set = Ha;
        function J(a, b) {
            if (a === b || a !== a && b !== b)
                return !0;
            if (!a || !b)
                return !1;
            if (typeof a.valueOf === "function" && typeof b.valueOf === "function") {
                a = a.valueOf();
                b = b.valueOf();
                if (a === b || a !== a && b !== b)
                    return !0;
                if (!a || !b)
                    return !1
            }
            return typeof a.equals === "function" && typeof b.equals === "function" && a.equals(b) ? !0 : !1
        }
        function Ia(a, b) {
            return b ? Ja(b, a, "", {
                "": a
            }) : Ka(a)
        }
        function Ja(a, b, c, d) {
            if (Array.isArray(b))
                return a.call(d, c, H(b).map(function(c, d) {
                    return Ja(a, c, d, b)
                }));
            return La(b) ? a.call(d, c, G(b).map(function(c, d) {
                return Ja(a, c, d, b)
            })) : b
        }
        function Ka(a) {
            if (Array.isArray(a))
                return H(a).map(Ka).toList();
            return La(a) ? G(a).map(Ka).toMap() : a
        }
        function La(a) {
            return a && (a.constructor === Object || a.constructor === void 0)
        }
        var Ma = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function(a, b) {
            a = a | 0;
            b = b | 0;
            var c = a & 65535
              , d = b & 65535;
            return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0
        }
        ;
        function Na(a) {
            return a >>> 1 & 1073741824 | a & 3221225471
        }
        function K(a) {
            if (a === !1 || a === null || a === void 0)
                return 0;
            if (typeof a.valueOf === "function") {
                a = a.valueOf();
                if (a === !1 || a === null || a === void 0)
                    return 0
            }
            if (a === !0)
                return 1;
            var b = typeof a;
            if (b === "number") {
                var c = a | 0;
                c !== a && (c ^= a * 4294967295);
                while (a > 4294967295)
                    a /= 4294967295,
                    c ^= a;
                return Na(c)
            }
            if (b === "string")
                return a.length > Ya ? Oa(a) : Pa(a);
            return typeof a.hashCode === "function" ? a.hashCode() : Qa(a)
        }
        function Oa(b) {
            var a = ab[b];
            a === void 0 && (a = Pa(b),
            $a === Za && ($a = 0,
            ab = {}),
            $a++,
            ab[b] = a);
            return a
        }
        function Pa(b) {
            var a = 0;
            for (var c = 0; c < b.length; c++)
                a = 31 * a + b.charCodeAt(c) | 0;
            return Na(a)
        }
        function Qa(b) {
            var a;
            if (Ua) {
                a = Va.get(b);
                if (a !== void 0)
                    return a
            }
            a = b[Xa];
            if (a !== void 0)
                return a;
            if (!Sa) {
                a = b.propertyIsEnumerable && b.propertyIsEnumerable[Xa];
                if (a !== void 0)
                    return a;
                a = Ta(b);
                if (a !== void 0)
                    return a
            }
            a = ++Wa;
            Wa & 1073741824 && (Wa = 0);
            if (Ua)
                Va.set(b, a);
            else if (Ra !== void 0 && Ra(b) === !1)
                throw new Error("Non-extensible objects are not allowed as keys.");
            else if (Sa)
                Object.defineProperty(b, Xa, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: a
                });
            else if (b.propertyIsEnumerable !== void 0 && b.propertyIsEnumerable === b.constructor.prototype.propertyIsEnumerable)
                b.propertyIsEnumerable = function() {
                    return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                }
                ,
                b.propertyIsEnumerable[Xa] = a;
            else if (b.nodeType !== void 0)
                b[Xa] = a;
            else
                throw new Error("Unable to set a non-enumerable property on object.");
            return a
        }
        var Ra = Object.isExtensible
          , Sa = function() {
            try {
                Object.defineProperty({}, "@", {});
                return !0
            } catch (a) {
                return !1
            }
        }();
        function Ta(a) {
            if (a && a.nodeType > 0)
                switch (a.nodeType) {
                case 1:
                    return a.uniqueID;
                case 9:
                    return a.documentElement && a.documentElement.uniqueID
                }
        }
        var Ua = typeof WeakMap === "function", Va;
        Ua && (Va = new WeakMap());
        var Wa = 0
          , Xa = "__immutablehash__";
        typeof Symbol === "function" && (Xa = Symbol(Xa));
        var Ya = 16
          , Za = 255
          , $a = 0
          , ab = {};
        function bb(a, b) {
            if (!a)
                throw new Error(b)
        }
        function L(a) {
            bb(a !== Infinity, "Cannot perform this action with an infinite size.")
        }
        b(M, G);
        function M(a, b) {
            this._iter = a,
            this._useKeys = b,
            this.size = a.size
        }
        M.prototype.get = function(a, b) {
            return this._iter.get(a, b)
        }
        ;
        M.prototype.has = function(a) {
            return this._iter.has(a)
        }
        ;
        M.prototype.valueSeq = function() {
            return this._iter.valueSeq()
        }
        ;
        M.prototype.reverse = function() {
            var a = this
              , b = hb(this, !0);
            this._useKeys || (b.valueSeq = function() {
                return a._iter.toSeq().reverse()
            }
            );
            return b
        }
        ;
        M.prototype.map = function(a, b) {
            var c = this
              , d = gb(this, a, b);
            this._useKeys || (d.valueSeq = function() {
                return c._iter.toSeq().map(a, b)
            }
            );
            return d
        }
        ;
        M.prototype.__iterate = function(a, b) {
            var c = this, d;
            return this._iter.__iterate(this._useKeys ? function(b, d) {
                return a(b, d, c)
            }
            : (d = b ? xb(this) : 0,
            function(e) {
                return a(e, b ? --d : d++, c)
            }
            ), b)
        }
        ;
        M.prototype.__iterator = function(a, b) {
            if (this._useKeys)
                return this._iter.__iterator(a, b);
            var c = this._iter.__iterator(A, b)
              , d = b ? xb(this) : 0;
            return new C(function() {
                var e = c.next();
                return e.done ? e : D(a, b ? --d : d++, e.value, e)
            }
            )
        }
        ;
        M.prototype[ga] = !0;
        b(cb, H);
        function cb(a) {
            this._iter = a,
            this.size = a.size
        }
        cb.prototype.includes = function(a) {
            return this._iter.includes(a)
        }
        ;
        cb.prototype.__iterate = function(a, b) {
            var c = this
              , d = 0;
            return this._iter.__iterate(function(b) {
                return a(b, d++, c)
            }, b)
        }
        ;
        cb.prototype.__iterator = function(a, b) {
            var c = this._iter.__iterator(A, b)
              , d = 0;
            return new C(function() {
                var b = c.next();
                return b.done ? b : D(a, d++, b.value, b)
            }
            )
        }
        ;
        b(db, I);
        function db(a) {
            this._iter = a,
            this.size = a.size
        }
        db.prototype.has = function(a) {
            return this._iter.includes(a)
        }
        ;
        db.prototype.__iterate = function(a, b) {
            var c = this;
            return this._iter.__iterate(function(b) {
                return a(b, b, c)
            }, b)
        }
        ;
        db.prototype.__iterator = function(a, b) {
            var c = this._iter.__iterator(A, b);
            return new C(function() {
                var b = c.next();
                return b.done ? b : D(a, b.value, b.value, b)
            }
            )
        }
        ;
        b(eb, G);
        function eb(a) {
            this._iter = a,
            this.size = a.size
        }
        eb.prototype.entrySeq = function() {
            return this._iter.toSeq()
        }
        ;
        eb.prototype.__iterate = function(a, b) {
            var c = this;
            return this._iter.__iterate(function(b) {
                if (b) {
                    wb(b);
                    var d = x(b);
                    return a(d ? b.get(1) : b[1], d ? b.get(0) : b[0], c)
                }
            }, b)
        }
        ;
        eb.prototype.__iterator = function(a, b) {
            var c = this._iter.__iterator(A, b);
            return new C(function() {
                while (!0) {
                    var b = c.next();
                    if (b.done)
                        return b;
                    var d = b.value;
                    if (d) {
                        wb(d);
                        var e = x(d);
                        return D(a, e ? d.get(0) : d[0], e ? d.get(1) : d[1], b)
                    }
                }
            }
            )
        }
        ;
        cb.prototype.cacheResult = M.prototype.cacheResult = db.prototype.cacheResult = eb.prototype.cacheResult = Ab;
        function fb(a) {
            var b = zb(a);
            b._iter = a;
            b.size = a.size;
            b.flip = function() {
                return a
            }
            ;
            b.reverse = function() {
                var b = a.reverse.apply(this);
                b.flip = function() {
                    return a.reverse()
                }
                ;
                return b
            }
            ;
            b.has = function(b) {
                return a.includes(b)
            }
            ;
            b.includes = function(b) {
                return a.has(b)
            }
            ;
            b.cacheResult = Ab;
            b.__iterateUncached = function(b, c) {
                var d = this;
                return a.__iterate(function(a, c) {
                    return b(c, a, d) !== !1
                }, c)
            }
            ;
            b.__iteratorUncached = function(b, c) {
                if (b === B) {
                    var d = a.__iterator(b, c);
                    return new C(function() {
                        var a = d.next();
                        if (!a.done) {
                            var b = a.value[0];
                            a.value[0] = a.value[1];
                            a.value[1] = b
                        }
                        return a
                    }
                    )
                }
                return a.__iterator(b === A ? ha : A, c)
            }
            ;
            return b
        }
        function gb(a, b, c) {
            var d = zb(a);
            d.size = a.size;
            d.has = function(b) {
                return a.has(b)
            }
            ;
            d.get = function(d, e) {
                var f = a.get(d, g);
                return f === g ? e : b.call(c, f, d, a)
            }
            ;
            d.__iterateUncached = function(d, e) {
                var f = this;
                return a.__iterate(function(a, e, g) {
                    return d(b.call(c, a, e, g), e, f) !== !1
                }, e)
            }
            ;
            d.__iteratorUncached = function(d, e) {
                var f = a.__iterator(B, e);
                return new C(function() {
                    var e = f.next();
                    if (e.done)
                        return e;
                    var g = e.value
                      , h = g[0];
                    return D(d, h, b.call(c, g[1], h, a), e)
                }
                )
            }
            ;
            return d
        }
        function hb(a, b) {
            var c = zb(a);
            c._iter = a;
            c.size = a.size;
            c.reverse = function() {
                return a
            }
            ;
            a.flip && (c.flip = function() {
                var b = fb(a);
                b.reverse = function() {
                    return a.flip()
                }
                ;
                return b
            }
            );
            c.get = function(c, d) {
                return a.get(b ? c : -1 - c, d)
            }
            ;
            c.has = function(c) {
                return a.has(b ? c : -1 - c)
            }
            ;
            c.includes = function(b) {
                return a.includes(b)
            }
            ;
            c.cacheResult = Ab;
            c.__iterate = function(b, c) {
                var d = this;
                return a.__iterate(function(a, c) {
                    return b(a, c, d)
                }, !c)
            }
            ;
            c.__iterator = function(b, c) {
                return a.__iterator(b, !c)
            }
            ;
            return c
        }
        function ib(a, b, c, d) {
            var e = zb(a);
            d && (e.has = function(d) {
                var e = a.get(d, g);
                return e !== g && !!b.call(c, e, d, a)
            }
            ,
            e.get = function(d, e) {
                var f = a.get(d, g);
                return f !== g && b.call(c, f, d, a) ? f : e
            }
            );
            e.__iterateUncached = function(e, f) {
                var g = this
                  , h = 0;
                a.__iterate(function(a, f, i) {
                    if (b.call(c, a, f, i)) {
                        h++;
                        return e(a, d ? f : h - 1, g)
                    }
                }, f);
                return h
            }
            ;
            e.__iteratorUncached = function(e, f) {
                var g = a.__iterator(B, f)
                  , h = 0;
                return new C(function() {
                    while (!0) {
                        var f = g.next();
                        if (f.done)
                            return f;
                        var i = f.value
                          , j = i[0];
                        i = i[1];
                        if (b.call(c, i, j, a))
                            return D(e, d ? j : h++, i, f)
                    }
                }
                )
            }
            ;
            return e
        }
        function jb(a, b, c) {
            var d = O().asMutable();
            a.__iterate(function(e, f) {
                d.update(b.call(c, e, f, a), 0, function(a) {
                    return a + 1
                })
            });
            return d.asImmutable()
        }
        function kb(a, b, c) {
            var d = y(a)
              , e = (ca(a) ? S() : O()).asMutable();
            a.__iterate(function(f, g) {
                e.update(b.call(c, f, g, a), function(a) {
                    return a = a || [],
                    a.push(d ? [g, f] : f),
                    a
                })
            });
            var f = yb(a);
            return e.map(function(b) {
                return N(a, f(b))
            })
        }
        function lb(a, b, c, d) {
            var e = a.size;
            if (q(b, c, e))
                return a;
            var f = r(b, e);
            e = s(c, e);
            if (f !== f || e !== e)
                return lb(a.toSeq().cacheResult(), b, c, d);
            b = e - f;
            var g;
            b === b && (g = b < 0 ? 0 : b);
            c = zb(a);
            c.size = g;
            !d && va(a) && g >= 0 && (c.get = function(b, c) {
                b = o(this, b);
                return b >= 0 && b < g ? a.get(b + f, c) : c
            }
            );
            c.__iterateUncached = function(b, c) {
                var e = this;
                if (g === 0)
                    return 0;
                if (c)
                    return this.cacheResult().__iterate(b, c);
                var h = 0
                  , i = !0
                  , j = 0;
                a.__iterate(function(a, c) {
                    if (!(i && (i = h++ < f))) {
                        j++;
                        return b(a, d ? c : j - 1, e) !== !1 && j !== g
                    }
                });
                return j
            }
            ;
            c.__iteratorUncached = function(b, c) {
                if (g !== 0 && c)
                    return this.cacheResult().__iterator(b, c);
                var e = g !== 0 && a.__iterator(b, c)
                  , h = 0
                  , i = 0;
                return new C(function() {
                    while (h++ < f)
                        e.next();
                    if (++i > g)
                        return E();
                    var a = e.next();
                    if (d || b === A)
                        return a;
                    else if (b === ha)
                        return D(b, i - 1, void 0, a);
                    else
                        return D(b, i - 1, a.value[1], a)
                }
                )
            }
            ;
            return c
        }
        function mb(a, b, c) {
            var d = zb(a);
            d.__iterateUncached = function(d, e) {
                var f = this;
                if (e)
                    return this.cacheResult().__iterate(d, e);
                var g = 0;
                a.__iterate(function(a, e, h) {
                    return b.call(c, a, e, h) && ++g && d(a, e, f)
                });
                return g
            }
            ;
            d.__iteratorUncached = function(d, e) {
                var f = this;
                if (e)
                    return this.cacheResult().__iterator(d, e);
                var g = a.__iterator(B, e)
                  , h = !0;
                return new C(function() {
                    if (!h)
                        return E();
                    var a = g.next();
                    if (a.done)
                        return a;
                    var e = a.value
                      , i = e[0];
                    e = e[1];
                    if (!b.call(c, e, i, f)) {
                        h = !1;
                        return E()
                    }
                    return d === B ? a : D(d, i, e, a)
                }
                )
            }
            ;
            return d
        }
        function nb(a, b, c, d) {
            var e = zb(a);
            e.__iterateUncached = function(e, f) {
                var g = this;
                if (f)
                    return this.cacheResult().__iterate(e, f);
                var h = !0
                  , i = 0;
                a.__iterate(function(a, f, j) {
                    if (!(h && (h = b.call(c, a, f, j)))) {
                        i++;
                        return e(a, d ? f : i - 1, g)
                    }
                });
                return i
            }
            ;
            e.__iteratorUncached = function(e, f) {
                var g = this;
                if (f)
                    return this.cacheResult().__iterator(e, f);
                var h = a.__iterator(B, f)
                  , i = !0
                  , j = 0;
                return new C(function() {
                    var a, f;
                    do {
                        a = h.next();
                        if (a.done)
                            if (d || e === A)
                                return a;
                            else if (e === ha)
                                return D(e, j++, void 0, a);
                            else
                                return D(e, j++, a.value[1], a);
                        var k = a.value;
                        f = k[0];
                        k = k[1];
                        i && (i = b.call(c, k, f, g))
                    } while (i);return e === B ? a : D(e, f, k, a)
                }
                )
            }
            ;
            return e
        }
        function ob(a, b) {
            var c = y(a);
            b = [a].concat(b).map(function(a) {
                !x(a) ? a = c ? ya(a) : za(Array.isArray(a) ? a : [a]) : c && (a = u(a));
                return a
            }).filter(function(a) {
                return a.size !== 0
            });
            if (b.length === 0)
                return a;
            if (b.length === 1) {
                var d = b[0];
                if (d === a || c && y(d) || z(a) && z(d))
                    return d
            }
            d = new ra(b);
            c ? d = d.toKeyedSeq() : z(a) || (d = d.toSetSeq());
            d = d.flatten(!0);
            d.size = b.reduce(function(a, b) {
                if (a !== void 0) {
                    b = b.size;
                    if (b !== void 0)
                        return a + b
                }
            }, 0);
            return d
        }
        function pb(a, b, c) {
            var d = zb(a);
            d.__iterateUncached = function(d, e) {
                var f = 0
                  , g = !1;
                function h(a, i) {
                    var j = this;
                    a.__iterate(function(a, e) {
                        (!b || i < b) && x(a) ? h(a, i + 1) : d(a, c ? e : f++, j) === !1 && (g = !0);
                        return !g
                    }, e)
                }
                h(a, 0);
                return f
            }
            ;
            d.__iteratorUncached = function(d, e) {
                var f = a.__iterator(d, e)
                  , g = []
                  , h = 0;
                return new C(function() {
                    while (f) {
                        var a = f.next();
                        if (a.done !== !1) {
                            f = g.pop();
                            continue
                        }
                        var i = a.value;
                        d === B && (i = i[1]);
                        if ((!b || g.length < b) && x(i))
                            g.push(f),
                            f = i.__iterator(d, e);
                        else
                            return c ? a : D(d, h++, i, a)
                    }
                    return E()
                }
                )
            }
            ;
            return d
        }
        function qb(a, b, c) {
            var d = yb(a);
            return a.toSeq().map(function(e, f) {
                return d(b.call(c, e, f, a))
            }).flatten(!0)
        }
        function rb(a, b) {
            var c = zb(a);
            c.size = a.size && a.size * 2 - 1;
            c.__iterateUncached = function(c, d) {
                var e = this
                  , f = 0;
                a.__iterate(function(a, d) {
                    return (!f || c(b, f++, e) !== !1) && c(a, f++, e) !== !1
                }, d);
                return f
            }
            ;
            c.__iteratorUncached = function(c, d) {
                var e = a.__iterator(A, d), f = 0, g;
                return new C(function() {
                    if (!g || f % 2) {
                        g = e.next();
                        if (g.done)
                            return g
                    }
                    return f % 2 ? D(c, f++, b) : D(c, f++, g.value, g)
                }
                )
            }
            ;
            return c
        }
        function sb(a, b, c) {
            b || (b = Bb);
            var d = y(a)
              , e = 0
              , f = a.toSeq().map(function(b, d) {
                return [d, b, e++, c ? c(b, d, a) : b]
            }).toArray();
            f.sort(function(a, c) {
                return b(a[3], c[3]) || a[2] - c[2]
            }).forEach(d ? function(a, b) {
                f[b].length = 2
            }
            : function(a, b) {
                f[b] = a[1]
            }
            );
            return d ? G(f) : z(a) ? H(f) : I(f)
        }
        function tb(a, b, c) {
            b || (b = Bb);
            if (c) {
                var d = a.toSeq().map(function(b, d) {
                    return [b, c(b, d, a)]
                }).reduce(function(a, c) {
                    return ub(b, a[1], c[1]) ? c : a
                });
                return d && d[0]
            } else
                return a.reduce(function(a, c) {
                    return ub(b, a, c) ? c : a
                })
        }
        function ub(a, b, c) {
            a = a(c, b);
            return a === 0 && c !== b && (c === void 0 || c === null || c !== c) || a > 0
        }
        function vb(a, b, c) {
            a = zb(a);
            a.size = new ra(c).map(function(a) {
                return a.size
            }).min();
            a.__iterate = function(a, b) {
                b = this.__iterator(A, b);
                var c, d = 0;
                while (!(c = b.next()).done)
                    if (a(c.value, d++, this) === !1)
                        break;
                return d
            }
            ;
            a.__iteratorUncached = function(a, d) {
                var e = c.map(function(a) {
                    return a = t(a),
                    na(d ? a.reverse() : a)
                })
                  , f = 0
                  , g = !1;
                return new C(function() {
                    var c;
                    g || (c = e.map(function(a) {
                        return a.next()
                    }),
                    g = c.some(function(a) {
                        return a.done
                    }));
                    return g ? E() : D(a, f++, b.apply(null, c.map(function(a) {
                        return a.value
                    })))
                }
                )
            }
            ;
            return a
        }
        function N(a, b) {
            return va(a) ? b : a.constructor(b)
        }
        function wb(a) {
            if (a !== Object(a))
                throw new TypeError("Expected [K, V] tuple: " + a)
        }
        function xb(a) {
            L(a.size);
            return n(a)
        }
        function yb(a) {
            return y(a) ? u : z(a) ? v : w
        }
        function zb(a) {
            return Object.create((y(a) ? G : z(a) ? H : I).prototype)
        }
        function Ab() {
            if (this._iter.cacheResult) {
                this._iter.cacheResult();
                this.size = this._iter.size;
                return this
            } else
                return F.prototype.cacheResult.call(this)
        }
        function Bb(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        }
        function Cb(a) {
            var b = na(a);
            if (!b) {
                if (!pa(a))
                    throw new TypeError("Expected iterable or array-like: " + a);
                b = na(t(a))
            }
            return b
        }
        b(O, Fa);
        function O(a) {
            return a === null || a === void 0 ? Pb() : Db(a) ? a : Pb().withMutations(function(b) {
                var c = u(a);
                L(c.size);
                c.forEach(function(a, c) {
                    return b.set(c, a)
                })
            })
        }
        O.prototype.toString = function() {
            return this.__toString("Map {", "}")
        }
        ;
        O.prototype.get = function(a, b) {
            return this._root ? this._root.get(0, void 0, a, b) : b
        }
        ;
        O.prototype.set = function(a, b) {
            return Qb(this, a, b)
        }
        ;
        O.prototype.setIn = function(a, b) {
            return this.updateIn(a, g, function() {
                return b
            })
        }
        ;
        O.prototype.remove = function(a) {
            return Qb(this, a, g)
        }
        ;
        O.prototype.deleteIn = function(a) {
            return this.updateIn(a, function() {
                return g
            })
        }
        ;
        O.prototype.update = function(a, b, c) {
            return arguments.length === 1 ? a(this) : this.updateIn([a], b, c)
        }
        ;
        O.prototype.updateIn = function(a, b, c) {
            c || (c = b,
            b = void 0);
            a = $b(this, Cb(a), b, c);
            return a === g ? void 0 : a
        }
        ;
        O.prototype.clear = function() {
            if (this.size === 0)
                return this;
            if (this.__ownerID) {
                this.size = 0;
                this._root = null;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Pb()
        }
        ;
        O.prototype.merge = function() {
            return Xb(this, void 0, arguments)
        }
        ;
        O.prototype.mergeWith = function(b) {
            var c = a.call(arguments, 1);
            return Xb(this, b, c)
        }
        ;
        O.prototype.mergeIn = function(b) {
            var c = a.call(arguments, 1);
            return this.updateIn(b, Pb(), function(a) {
                return typeof a.merge === "function" ? a.merge.apply(a, c) : c[c.length - 1]
            })
        }
        ;
        O.prototype.mergeDeep = function() {
            return Xb(this, Yb(void 0), arguments)
        }
        ;
        O.prototype.mergeDeepWith = function(b) {
            var c = a.call(arguments, 1);
            return Xb(this, Yb(b), c)
        }
        ;
        O.prototype.mergeDeepIn = function(b) {
            var c = a.call(arguments, 1);
            return this.updateIn(b, Pb(), function(a) {
                return typeof a.mergeDeep === "function" ? a.mergeDeep.apply(a, c) : c[c.length - 1]
            })
        }
        ;
        O.prototype.sort = function(a) {
            return S(sb(this, a))
        }
        ;
        O.prototype.sortBy = function(a, b) {
            return S(sb(this, b, a))
        }
        ;
        O.prototype.withMutations = function(a) {
            var b = this.asMutable();
            a(b);
            return b.wasAltered() ? b.__ensureOwner(this.__ownerID) : this
        }
        ;
        O.prototype.asMutable = function() {
            return this.__ownerID ? this : this.__ensureOwner(new l())
        }
        ;
        O.prototype.asImmutable = function() {
            return this.__ensureOwner()
        }
        ;
        O.prototype.wasAltered = function() {
            return this.__altered
        }
        ;
        O.prototype.__iterator = function(a, b) {
            return new Kb(this,a,b)
        }
        ;
        O.prototype.__iterate = function(a, b) {
            var c = this
              , d = 0;
            this._root && this._root.iterate(function(b) {
                d++;
                return a(b[1], b[0], c)
            }, b);
            return d
        }
        ;
        O.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID)
                return this;
            if (!a) {
                this.__ownerID = a;
                this.__altered = !1;
                return this
            }
            return Nb(this.size, this._root, a, this.__hash)
        }
        ;
        function Db(a) {
            return !!(a && a[Eb])
        }
        O.isMap = Db;
        var Eb = "@@__IMMUTABLE_MAP__@@"
          , P = O.prototype;
        P[Eb] = !0;
        P[c] = P.remove;
        P.removeIn = P.deleteIn;
        function Fb(a, b) {
            this.ownerID = a,
            this.entries = b
        }
        Fb.prototype.get = function(a, b, c, d) {
            a = this.entries;
            for (var b = 0, e = a.length; b < e; b++)
                if (J(c, a[b][0]))
                    return a[b][1];
            return d
        }
        ;
        Fb.prototype.update = function(a, b, c, d, e, f, h) {
            b = e === g;
            c = this.entries;
            var i = 0;
            for (var j = c.length; i < j; i++)
                if (J(d, c[i][0]))
                    break;
            var l = i < j;
            if (l ? c[i][1] === e : b)
                return this;
            k(h);
            (b || !l) && k(f);
            if (b && c.length === 1)
                return;
            if (!l && !b && c.length >= ec)
                return Ub(a, c, d, e);
            h = a && a === this.ownerID;
            f = h ? c : m(c);
            l ? b ? i === j - 1 ? f.pop() : f[i] = f.pop() : f[i] = [d, e] : f.push([d, e]);
            if (h) {
                this.entries = f;
                return this
            }
            return new Fb(a,f)
        }
        ;
        function Gb(a, b, c) {
            this.ownerID = a,
            this.bitmap = b,
            this.nodes = c
        }
        Gb.prototype.get = function(a, b, c, e) {
            b === void 0 && (b = K(c));
            var g = 1 << ((a === 0 ? b : b >>> a) & f)
              , h = this.bitmap;
            return (h & g) === 0 ? e : this.nodes[ac(h & g - 1)].get(a + d, b, c, e)
        }
        ;
        Gb.prototype.update = function(a, b, c, e, h, i, j) {
            c === void 0 && (c = K(e));
            var k = (b === 0 ? c : c >>> b) & f
              , l = 1 << k
              , m = this.bitmap
              , n = (m & l) !== 0;
            if (!n && h === g)
                return this;
            var o = ac(m & l - 1)
              , p = this.nodes
              , q = n ? p[o] : void 0;
            b = Rb(q, a, b + d, c, e, h, i, j);
            if (b === q)
                return this;
            if (!n && b && p.length >= fc)
                return Wb(a, p, m, k, b);
            if (n && !b && p.length === 2 && Sb(p[o ^ 1]))
                return p[o ^ 1];
            if (n && b && p.length === 1 && Sb(b))
                return b;
            c = a && a === this.ownerID;
            e = n ? b ? m : m ^ l : m | l;
            h = n ? b ? bc(p, o, b, c) : dc(p, o, c) : cc(p, o, b, c);
            if (c) {
                this.bitmap = e;
                this.nodes = h;
                return this
            }
            return new Gb(a,e,h)
        }
        ;
        function Hb(a, b, c) {
            this.ownerID = a,
            this.count = b,
            this.nodes = c
        }
        Hb.prototype.get = function(a, b, c, e) {
            b === void 0 && (b = K(c));
            var g = (a === 0 ? b : b >>> a) & f;
            g = this.nodes[g];
            return g ? g.get(a + d, b, c, e) : e
        }
        ;
        Hb.prototype.update = function(a, b, c, e, h, i, j) {
            c === void 0 && (c = K(e));
            var k = (b === 0 ? c : c >>> b) & f
              , l = h === g
              , m = this.nodes
              , n = m[k];
            if (l && !n)
                return this;
            l = Rb(n, a, b + d, c, e, h, i, j);
            if (l === n)
                return this;
            b = this.count;
            if (!n)
                b++;
            else if (!l) {
                b--;
                if (b < gc)
                    return Vb(a, m, b, k)
            }
            c = a && a === this.ownerID;
            e = bc(m, k, l, c);
            if (c) {
                this.count = b;
                this.nodes = e;
                return this
            }
            return new Hb(a,b,e)
        }
        ;
        function Ib(a, b, c) {
            this.ownerID = a,
            this.keyHash = b,
            this.entries = c
        }
        Ib.prototype.get = function(a, b, c, d) {
            a = this.entries;
            for (var b = 0, e = a.length; b < e; b++)
                if (J(c, a[b][0]))
                    return a[b][1];
            return d
        }
        ;
        Ib.prototype.update = function(a, b, c, d, e, f, h) {
            c === void 0 && (c = K(d));
            var i = e === g;
            if (c !== this.keyHash) {
                if (i)
                    return this;
                k(h);
                k(f);
                return Tb(this, a, b, c, [d, e])
            }
            b = this.entries;
            c = 0;
            for (var j = b.length; c < j; c++)
                if (J(d, b[c][0]))
                    break;
            var l = c < j;
            if (l ? b[c][1] === e : i)
                return this;
            k(h);
            (i || !l) && k(f);
            if (i && j === 2)
                return new Jb(a,this.keyHash,b[c ^ 1]);
            h = a && a === this.ownerID;
            f = h ? b : m(b);
            l ? i ? c === j - 1 ? f.pop() : f[c] = f.pop() : f[c] = [d, e] : f.push([d, e]);
            if (h) {
                this.entries = f;
                return this
            }
            return new Ib(a,this.keyHash,f)
        }
        ;
        function Jb(a, b, c) {
            this.ownerID = a,
            this.keyHash = b,
            this.entry = c
        }
        Jb.prototype.get = function(a, b, c, d) {
            return J(c, this.entry[0]) ? this.entry[1] : d
        }
        ;
        Jb.prototype.update = function(a, b, c, d, e, f, h) {
            c = e === g;
            var i = J(d, this.entry[0]);
            if (i ? e === this.entry[1] : c)
                return this;
            k(h);
            if (c) {
                k(f);
                return
            }
            if (i) {
                if (a && a === this.ownerID) {
                    this.entry[1] = e;
                    return this
                }
                return new Jb(a,this.keyHash,[d, e])
            }
            k(f);
            return Tb(this, a, b, K(d), [d, e])
        }
        ;
        Fb.prototype.iterate = Ib.prototype.iterate = function(a, b) {
            var c = this.entries;
            for (var d = 0, e = c.length - 1; d <= e; d++)
                if (a(c[b ? e - d : d]) === !1)
                    return !1
        }
        ;
        Gb.prototype.iterate = Hb.prototype.iterate = function(a, b) {
            var c = this.nodes;
            for (var d = 0, e = c.length - 1; d <= e; d++) {
                var f = c[b ? e - d : d];
                if (f && f.iterate(a, b) === !1)
                    return !1
            }
        }
        ;
        Jb.prototype.iterate = function(a, b) {
            return a(this.entry)
        }
        ;
        b(Kb, C);
        function Kb(a, b, c) {
            this._type = b,
            this._reverse = c,
            this._stack = a._root && Mb(a._root)
        }
        Kb.prototype.next = function() {
            var a = this._type
              , b = this._stack;
            while (b) {
                var c = b.node, d = b.index++, e;
                if (c.entry) {
                    if (d === 0)
                        return Lb(a, c.entry)
                } else if (c.entries) {
                    e = c.entries.length - 1;
                    if (d <= e)
                        return Lb(a, c.entries[this._reverse ? e - d : d])
                } else {
                    e = c.nodes.length - 1;
                    if (d <= e) {
                        c = c.nodes[this._reverse ? e - d : d];
                        if (c) {
                            if (c.entry)
                                return Lb(a, c.entry);
                            b = this._stack = Mb(c, b)
                        }
                        continue
                    }
                }
                b = this._stack = this._stack.__prev
            }
            return E()
        }
        ;
        function Lb(a, b) {
            return D(a, b[0], b[1])
        }
        function Mb(a, b) {
            return {
                node: a,
                index: 0,
                __prev: b
            }
        }
        function Nb(b, c, d, a) {
            var e = Object.create(P);
            e.size = b;
            e._root = c;
            e.__ownerID = d;
            e.__hash = a;
            e.__altered = !1;
            return e
        }
        var Ob;
        function Pb() {
            return Ob || (Ob = Nb(0))
        }
        function Qb(a, b, c) {
            var d, e;
            if (!a._root) {
                if (c === g)
                    return a;
                e = 1;
                d = new Fb(a.__ownerID,[[b, c]])
            } else {
                var f = j(h)
                  , k = j(i);
                d = Rb(a._root, a.__ownerID, 0, void 0, b, c, f, k);
                if (!k.value)
                    return a;
                e = a.size + (f.value ? c === g ? -1 : 1 : 0)
            }
            if (a.__ownerID) {
                a.size = e;
                a._root = d;
                a.__hash = void 0;
                a.__altered = !0;
                return a
            }
            return d ? Nb(e, d) : Pb()
        }
        function Rb(a, b, c, d, e, f, h, i) {
            if (!a) {
                if (f === g)
                    return a;
                k(i);
                k(h);
                return new Jb(b,d,[e, f])
            }
            return a.update(b, c, d, e, f, h, i)
        }
        function Sb(a) {
            return a.constructor === Jb || a.constructor === Ib
        }
        function Tb(a, b, c, e, g) {
            if (a.keyHash === e)
                return new Ib(b,e,[a.entry, g]);
            var h = (c === 0 ? a.keyHash : a.keyHash >>> c) & f
              , i = (c === 0 ? e : e >>> c) & f;
            e = h === i ? [Tb(a, b, c + d, e, g)] : (c = new Jb(b,e,g),
            h < i ? [a, c] : [c, a]);
            return new Gb(b,1 << h | 1 << i,e)
        }
        function Ub(a, b, c, d) {
            a || (a = new l());
            c = new Jb(a,K(c),[c, d]);
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                c = c.update(a, 0, void 0, e[0], e[1])
            }
            return c
        }
        function Vb(a, b, c, d) {
            var e = 0
              , f = 0;
            c = new Array(c);
            for (var g = 0, h = 1, i = b.length; g < i; g++,
            h <<= 1) {
                var j = b[g];
                j !== void 0 && g !== d && (e |= h,
                c[f++] = j)
            }
            return new Gb(a,e,c)
        }
        function Wb(a, b, c, d, f) {
            var g = 0
              , h = new Array(e);
            for (var i = 0; c !== 0; i++,
            c >>>= 1)
                h[i] = c & 1 ? b[g++] : void 0;
            h[d] = f;
            return new Hb(a,g + 1,h)
        }
        function Xb(a, b, c) {
            var d = [];
            for (var e = 0; e < c.length; e++) {
                var f = c[e]
                  , g = u(f);
                x(f) || (g = g.map(function(a) {
                    return Ia(a)
                }));
                d.push(g)
            }
            return Zb(a, b, d)
        }
        function Yb(a) {
            return function(b, c, d) {
                return b && b.mergeDeepWith && x(c) ? b.mergeDeepWith(a, c) : a ? a(b, c, d) : c
            }
        }
        function Zb(a, b, c) {
            c = c.filter(function(a) {
                return a.size !== 0
            });
            if (c.length === 0)
                return a;
            return a.size === 0 && !a.__ownerID && c.length === 1 ? a.constructor(c[0]) : a.withMutations(function(a) {
                var d = b ? function(c, d) {
                    a.update(d, g, function(a) {
                        return a === g ? c : b(a, c, d)
                    })
                }
                : function(b, c) {
                    a.set(c, b)
                }
                ;
                for (var e = 0; e < c.length; e++)
                    c[e].forEach(d)
            })
        }
        function $b(a, b, c, d) {
            var e = a === g
              , f = b.next();
            if (f.done) {
                var h = e ? c : a
                  , i = d(h);
                return i === h ? a : i
            }
            bb(e || a && a.set, "invalid keyPath");
            h = f.value;
            i = e ? g : a.get(h, g);
            f = $b(i, b, c, d);
            return f === i ? a : f === g ? a.remove(h) : (e ? Pb() : a).set(h, f)
        }
        function ac(a) {
            a = a - (a >> 1 & 1431655765);
            a = (a & 858993459) + (a >> 2 & 858993459);
            a = a + (a >> 4) & 252645135;
            a = a + (a >> 8);
            a = a + (a >> 16);
            return a & 127
        }
        function bc(a, b, c, d) {
            d = d ? a : m(a);
            d[b] = c;
            return d
        }
        function cc(a, b, c, d) {
            var e = a.length + 1;
            if (d && b + 1 === e) {
                a[b] = c;
                return a
            }
            d = new Array(e);
            var f = 0;
            for (var g = 0; g < e; g++)
                g === b ? (d[g] = c,
                f = -1) : d[g] = a[g + f];
            return d
        }
        function dc(a, b, c) {
            var d = a.length - 1;
            if (c && b === d) {
                a.pop();
                return a
            }
            c = new Array(d);
            var e = 0;
            for (var f = 0; f < d; f++)
                f === b && (e = 1),
                c[f] = a[f + e];
            return c
        }
        var ec = e / 4
          , fc = e / 2
          , gc = e / 4;
        b(Q, Ga);
        function Q(a) {
            var b = oc();
            if (a === null || a === void 0)
                return b;
            if (hc(a))
                return a;
            var c = v(a)
              , f = c.size;
            if (f === 0)
                return b;
            L(f);
            return f > 0 && f < e ? mc(0, f, d, null, new jc(c.toArray())) : b.withMutations(function(a) {
                a.setSize(f),
                c.forEach(function(b, c) {
                    return a.set(c, b)
                })
            })
        }
        Q.of = function() {
            return this(arguments)
        }
        ;
        Q.prototype.toString = function() {
            return this.__toString("List [", "]")
        }
        ;
        Q.prototype.get = function(a, b) {
            a = o(this, a);
            if (a < 0 || a >= this.size)
                return b;
            a += this._origin;
            b = sc(this, a);
            return b && b.array[a & f]
        }
        ;
        Q.prototype.set = function(a, b) {
            return pc(this, a, b)
        }
        ;
        Q.prototype.remove = function(a) {
            return this.has(a) ? a === 0 ? this.shift() : a === this.size - 1 ? this.pop() : this.splice(a, 1) : this
        }
        ;
        Q.prototype.clear = function() {
            if (this.size === 0)
                return this;
            if (this.__ownerID) {
                this.size = this._origin = this._capacity = 0;
                this._level = d;
                this._root = this._tail = null;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return oc()
        }
        ;
        Q.prototype.push = function() {
            var a = arguments
              , b = this.size;
            return this.withMutations(function(c) {
                tc(c, 0, b + a.length);
                for (var d = 0; d < a.length; d++)
                    c.set(b + d, a[d])
            })
        }
        ;
        Q.prototype.pop = function() {
            return tc(this, 0, -1)
        }
        ;
        Q.prototype.unshift = function() {
            var a = arguments;
            return this.withMutations(function(b) {
                tc(b, -a.length);
                for (var c = 0; c < a.length; c++)
                    b.set(c, a[c])
            })
        }
        ;
        Q.prototype.shift = function() {
            return tc(this, 1)
        }
        ;
        Q.prototype.merge = function() {
            return uc(this, void 0, arguments)
        }
        ;
        Q.prototype.mergeWith = function(b) {
            var c = a.call(arguments, 1);
            return uc(this, b, c)
        }
        ;
        Q.prototype.mergeDeep = function() {
            return uc(this, Yb(void 0), arguments)
        }
        ;
        Q.prototype.mergeDeepWith = function(b) {
            var c = a.call(arguments, 1);
            return uc(this, Yb(b), c)
        }
        ;
        Q.prototype.setSize = function(a) {
            return tc(this, 0, a)
        }
        ;
        Q.prototype.slice = function(a, b) {
            var c = this.size;
            return q(a, b, c) ? this : tc(this, r(a, c), s(b, c))
        }
        ;
        Q.prototype.__iterator = function(a, b) {
            var c = 0
              , d = lc(this, b);
            return new C(function() {
                var b = d();
                return b === kc ? E() : D(a, c++, b)
            }
            )
        }
        ;
        Q.prototype.__iterate = function(a, b) {
            var c = 0;
            b = lc(this, b);
            var d;
            while ((d = b()) !== kc)
                if (a(d, c++, this) === !1)
                    break;
            return c
        }
        ;
        Q.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID)
                return this;
            if (!a) {
                this.__ownerID = a;
                return this
            }
            return mc(this._origin, this._capacity, this._level, this._root, this._tail, a, this.__hash)
        }
        ;
        function hc(a) {
            return !!(a && a[ic])
        }
        Q.isList = hc;
        var ic = "@@__IMMUTABLE_LIST__@@"
          , R = Q.prototype;
        R[ic] = !0;
        R[c] = R.remove;
        R.setIn = P.setIn;
        R.deleteIn = R.removeIn = P.removeIn;
        R.update = P.update;
        R.updateIn = P.updateIn;
        R.mergeIn = P.mergeIn;
        R.mergeDeepIn = P.mergeDeepIn;
        R.withMutations = P.withMutations;
        R.asMutable = P.asMutable;
        R.asImmutable = P.asImmutable;
        R.wasAltered = P.wasAltered;
        function jc(a, b) {
            this.array = a,
            this.ownerID = b
        }
        jc.prototype.removeBefore = function(a, b, c) {
            if (c === b ? 1 << b : this.array.length === 0)
                return this;
            var e = c >>> b & f;
            if (e >= this.array.length)
                return new jc([],a);
            var g = e === 0, h;
            if (b > 0) {
                var i = this.array[e];
                h = i && i.removeBefore(a, b - d, c);
                if (h === i && g)
                    return this
            }
            if (g && !h)
                return this;
            b = rc(this, a);
            if (!g)
                for (var c = 0; c < e; c++)
                    b.array[c] = void 0;
            h && (b.array[e] = h);
            return b
        }
        ;
        jc.prototype.removeAfter = function(a, b, c) {
            if (c === b ? 1 << b : this.array.length === 0)
                return this;
            var e = c - 1 >>> b & f;
            if (e >= this.array.length)
                return this;
            var g = e === this.array.length - 1, h;
            if (b > 0) {
                var i = this.array[e];
                h = i && i.removeAfter(a, b - d, c);
                if (h === i && g)
                    return this
            }
            if (g && !h)
                return this;
            b = rc(this, a);
            g || b.array.pop();
            h && (b.array[e] = h);
            return b
        }
        ;
        var kc = {};
        function lc(a, b) {
            var c = a._origin
              , f = a._capacity
              , g = vc(f)
              , h = a._tail;
            return i(a._root, a._level, 0);
            function i(a, b, c) {
                return b === 0 ? j(a, c) : k(a, b, c)
            }
            function j(a, d) {
                var i = d === g ? h && h.array : a && a.array
                  , j = d > c ? 0 : c - d
                  , k = f - d;
                k > e && (k = e);
                return function() {
                    if (j === k)
                        return kc;
                    var a = b ? --k : j++;
                    return i && i[a]
                }
            }
            function k(a, g, h) {
                var j, k = a && a.array, l = h > c ? 0 : c - h >> g, m = (f - h >> g) + 1;
                m > e && (m = e);
                return function() {
                    do {
                        if (j) {
                            var a = j();
                            if (a !== kc)
                                return a;
                            j = null
                        }
                        if (l === m)
                            return kc;
                        a = b ? --m : l++;
                        j = i(k && k[a], g - d, h + (a << g))
                    } while (!0)
                }
            }
        }
        function mc(b, c, d, e, f, g, a) {
            var h = Object.create(R);
            h.size = c - b;
            h._origin = b;
            h._capacity = c;
            h._level = d;
            h._root = e;
            h._tail = f;
            h.__ownerID = g;
            h.__hash = a;
            h.__altered = !1;
            return h
        }
        var nc;
        function oc() {
            return nc || (nc = mc(0, 0, d))
        }
        function pc(a, b, c) {
            b = o(a, b);
            if (b >= a.size || b < 0)
                return a.withMutations(function(a) {
                    b < 0 ? tc(a, b).set(0, c) : tc(a, 0, b + 1).set(b, c)
                });
            b += a._origin;
            var d = a._tail
              , e = a._root
              , f = j(i);
            b >= vc(a._capacity) ? d = qc(d, a.__ownerID, 0, b, c, f) : e = qc(e, a.__ownerID, a._level, b, c, f);
            if (!f.value)
                return a;
            if (a.__ownerID) {
                a._root = e;
                a._tail = d;
                a.__hash = void 0;
                a.__altered = !0;
                return a
            }
            return mc(a._origin, a._capacity, a._level, e, d)
        }
        function qc(a, b, c, e, g, h) {
            var i = e >>> c & f
              , j = a && i < a.array.length;
            if (!j && g === void 0)
                return a;
            if (c > 0) {
                var l = a && a.array[i];
                c = qc(l, b, c - d, e, g, h);
                if (c === l)
                    return a;
                e = rc(a, b);
                e.array[i] = c;
                return e
            }
            if (j && a.array[i] === g)
                return a;
            k(h);
            e = rc(a, b);
            g === void 0 && i === e.array.length - 1 ? e.array.pop() : e.array[i] = g;
            return e
        }
        function rc(a, b) {
            return b && a && b === a.ownerID ? a : new jc(a ? a.array.slice() : [],b)
        }
        function sc(a, b) {
            if (b >= vc(a._capacity))
                return a._tail;
            if (b < 1 << a._level + d) {
                var c = a._root;
                a = a._level;
                while (c && a > 0)
                    c = c.array[b >>> a & f],
                    a -= d;
                return c
            }
        }
        function tc(a, b, c) {
            var e = a.__ownerID || new l()
              , g = a._origin
              , h = a._capacity;
            b = g + b;
            c = c === void 0 ? h : c < 0 ? h + c : g + c;
            if (b === g && c === h)
                return a;
            if (b >= c)
                return a.clear();
            var i = a._level
              , j = a._root
              , k = 0;
            while (b + k < 0)
                j = new jc(j && j.array.length ? [void 0, j] : [],e),
                i += d,
                k += 1 << i;
            k && (b += k,
            g += k,
            c += k,
            h += k);
            var m = vc(h)
              , n = vc(c);
            while (n >= 1 << i + d)
                j = new jc(j && j.array.length ? [j] : [],e),
                i += d;
            var o = a._tail
              , p = n < m ? sc(a, c - 1) : n > m ? new jc([],e) : o;
            if (o && n > m && b < h && o.array.length) {
                j = rc(j, e);
                var q = j;
                for (var r = i; r > d; r -= d) {
                    var s = m >>> r & f;
                    q = q.array[s] = rc(q.array[s], e)
                }
                q.array[m >>> d & f] = o
            }
            c < h && (p = p && p.removeAfter(e, 0, c));
            if (b >= n)
                b -= n,
                c -= n,
                i = d,
                j = null,
                p = p && p.removeBefore(e, 0, b);
            else if (b > g || n < m) {
                k = 0;
                while (j) {
                    s = b >>> i & f;
                    if (s !== n >>> i & f)
                        break;
                    s && (k += (1 << i) * s);
                    i -= d;
                    j = j.array[s]
                }
                j && b > g && (j = j.removeBefore(e, i, b - k));
                j && n < m && (j = j.removeAfter(e, i, n - k));
                k && (b -= k,
                c -= k)
            }
            if (a.__ownerID) {
                a.size = c - b;
                a._origin = b;
                a._capacity = c;
                a._level = i;
                a._root = j;
                a._tail = p;
                a.__hash = void 0;
                a.__altered = !0;
                return a
            }
            return mc(b, c, i, j, p)
        }
        function uc(a, b, c) {
            var d = []
              , e = 0;
            for (var f = 0; f < c.length; f++) {
                var g = c[f]
                  , h = v(g);
                h.size > e && (e = h.size);
                x(g) || (h = h.map(function(a) {
                    return Ia(a)
                }));
                d.push(h)
            }
            e > a.size && (a = a.setSize(e));
            return Zb(a, b, d)
        }
        function vc(a) {
            return a < e ? 0 : a - 1 >>> d << d
        }
        b(S, O);
        function S(a) {
            return a === null || a === void 0 ? zc() : wc(a) ? a : zc().withMutations(function(b) {
                var c = u(a);
                L(c.size);
                c.forEach(function(a, c) {
                    return b.set(c, a)
                })
            })
        }
        S.of = function() {
            return this(arguments)
        }
        ;
        S.prototype.toString = function() {
            return this.__toString("OrderedMap {", "}")
        }
        ;
        S.prototype.get = function(a, b) {
            a = this._map.get(a);
            return a !== void 0 ? this._list.get(a)[1] : b
        }
        ;
        S.prototype.clear = function() {
            if (this.size === 0)
                return this;
            if (this.__ownerID) {
                this.size = 0;
                this._map.clear();
                this._list.clear();
                return this
            }
            return zc()
        }
        ;
        S.prototype.set = function(a, b) {
            return Ac(this, a, b)
        }
        ;
        S.prototype.remove = function(a) {
            return Ac(this, a, g)
        }
        ;
        S.prototype.wasAltered = function() {
            return this._map.wasAltered() || this._list.wasAltered()
        }
        ;
        S.prototype.__iterate = function(a, b) {
            var c = this;
            return this._list.__iterate(function(b) {
                return b && a(b[1], b[0], c)
            }, b)
        }
        ;
        S.prototype.__iterator = function(a, b) {
            return this._list.fromEntrySeq().__iterator(a, b)
        }
        ;
        S.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID)
                return this;
            var b = this._map.__ensureOwner(a)
              , c = this._list.__ensureOwner(a);
            if (!a) {
                this.__ownerID = a;
                this._map = b;
                this._list = c;
                return this
            }
            return xc(b, c, a, this.__hash)
        }
        ;
        function wc(a) {
            return Db(a) && ca(a)
        }
        S.isOrderedMap = wc;
        S.prototype[ga] = !0;
        S.prototype[c] = S.prototype.remove;
        function xc(b, c, d, a) {
            var e = Object.create(S.prototype);
            e.size = b ? b.size : 0;
            e._map = b;
            e._list = c;
            e.__ownerID = d;
            e.__hash = a;
            return e
        }
        var yc;
        function zc() {
            return yc || (yc = xc(Pb(), oc()))
        }
        function Ac(a, b, c) {
            var d = a._map, f = a._list, h = d.get(b), i = h !== void 0, j, k;
            if (c === g) {
                if (!i)
                    return a;
                f.size >= e && f.size >= d.size * 2 ? (k = f.filter(function(a, b) {
                    return a !== void 0 && h !== b
                }),
                j = k.toKeyedSeq().map(function(a) {
                    return a[0]
                }).flip().toMap(),
                a.__ownerID && (j.__ownerID = k.__ownerID = a.__ownerID)) : (j = d.remove(b),
                k = h === f.size - 1 ? f.pop() : f.set(h, void 0))
            } else if (i) {
                if (c === f.get(h)[1])
                    return a;
                j = d;
                k = f.set(h, [b, c])
            } else
                j = d.set(b, f.size),
                k = f.set(f.size, [b, c]);
            if (a.__ownerID) {
                a.size = j.size;
                a._map = j;
                a._list = k;
                a.__hash = void 0;
                return a
            }
            return xc(j, k)
        }
        b(T, Ga);
        function T(a) {
            return a === null || a === void 0 ? Gc() : Bc(a) ? a : Gc().unshiftAll(a)
        }
        T.of = function() {
            return this(arguments)
        }
        ;
        T.prototype.toString = function() {
            return this.__toString("Stack [", "]")
        }
        ;
        T.prototype.get = function(a, b) {
            var c = this._head;
            a = o(this, a);
            while (c && a--)
                c = c.next;
            return c ? c.value : b
        }
        ;
        T.prototype.peek = function() {
            return this._head && this._head.value
        }
        ;
        T.prototype.push = function() {
            if (arguments.length === 0)
                return this;
            var a = this.size + arguments.length
              , b = this._head;
            for (var c = arguments.length - 1; c >= 0; c--)
                b = {
                    value: arguments[c],
                    next: b
                };
            if (this.__ownerID) {
                this.size = a;
                this._head = b;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Ec(a, b)
        }
        ;
        T.prototype.pushAll = function(a) {
            a = v(a);
            if (a.size === 0)
                return this;
            L(a.size);
            var b = this.size
              , c = this._head;
            a.reverse().forEach(function(a) {
                b++,
                c = {
                    value: a,
                    next: c
                }
            });
            if (this.__ownerID) {
                this.size = b;
                this._head = c;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Ec(b, c)
        }
        ;
        T.prototype.pop = function() {
            return this.slice(1)
        }
        ;
        T.prototype.unshift = function() {
            return this.push.apply(this, arguments)
        }
        ;
        T.prototype.unshiftAll = function(a) {
            return this.pushAll(a)
        }
        ;
        T.prototype.shift = function() {
            return this.pop.apply(this, arguments)
        }
        ;
        T.prototype.clear = function() {
            if (this.size === 0)
                return this;
            if (this.__ownerID) {
                this.size = 0;
                this._head = void 0;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Gc()
        }
        ;
        T.prototype.slice = function(a, b) {
            if (q(a, b, this.size))
                return this;
            var c = r(a, this.size)
              , d = s(b, this.size);
            if (d !== this.size)
                return Ga.prototype.slice.call(this, a, b);
            d = this.size - c;
            a = this._head;
            while (c--)
                a = a.next;
            if (this.__ownerID) {
                this.size = d;
                this._head = a;
                this.__hash = void 0;
                this.__altered = !0;
                return this
            }
            return Ec(d, a)
        }
        ;
        T.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID)
                return this;
            if (!a) {
                this.__ownerID = a;
                this.__altered = !1;
                return this
            }
            return Ec(this.size, this._head, a, this.__hash)
        }
        ;
        T.prototype.__iterate = function(a, b) {
            if (b)
                return this.reverse().__iterate(a);
            b = 0;
            var c = this._head;
            while (c) {
                if (a(c.value, b++, this) === !1)
                    break;
                c = c.next
            }
            return b
        }
        ;
        T.prototype.__iterator = function(a, b) {
            if (b)
                return this.reverse().__iterator(a);
            var c = 0
              , d = this._head;
            return new C(function() {
                if (d) {
                    var b = d.value;
                    d = d.next;
                    return D(a, c++, b)
                }
                return E()
            }
            )
        }
        ;
        function Bc(a) {
            return !!(a && a[Cc])
        }
        T.isStack = Bc;
        var Cc = "@@__IMMUTABLE_STACK__@@"
          , Dc = T.prototype;
        Dc[Cc] = !0;
        Dc.withMutations = P.withMutations;
        Dc.asMutable = P.asMutable;
        Dc.asImmutable = P.asImmutable;
        Dc.wasAltered = P.wasAltered;
        function Ec(b, c, d, a) {
            var e = Object.create(Dc);
            e.size = b;
            e._head = c;
            e.__ownerID = d;
            e.__hash = a;
            e.__altered = !1;
            return e
        }
        var Fc;
        function Gc() {
            return Fc || (Fc = Ec(0))
        }
        b(U, Ha);
        function U(a) {
            return a === null || a === void 0 ? Mc() : Hc(a) ? a : Mc().withMutations(function(b) {
                var c = w(a);
                L(c.size);
                c.forEach(function(a) {
                    return b.add(a)
                })
            })
        }
        U.of = function() {
            return this(arguments)
        }
        ;
        U.fromKeys = function(a) {
            return this(u(a).keySeq())
        }
        ;
        U.prototype.toString = function() {
            return this.__toString("Set {", "}")
        }
        ;
        U.prototype.has = function(a) {
            return this._map.has(a)
        }
        ;
        U.prototype.add = function(a) {
            return Jc(this, this._map.set(a, !0))
        }
        ;
        U.prototype.remove = function(a) {
            return Jc(this, this._map.remove(a))
        }
        ;
        U.prototype.clear = function() {
            return Jc(this, this._map.clear())
        }
        ;
        U.prototype.union = function() {
            var b = a.call(arguments, 0);
            b = b.filter(function(a) {
                return a.size !== 0
            });
            if (b.length === 0)
                return this;
            return this.size === 0 && !this.__ownerID && b.length === 1 ? this.constructor(b[0]) : this.withMutations(function(a) {
                for (var c = 0; c < b.length; c++)
                    w(b[c]).forEach(function(b) {
                        return a.add(b)
                    })
            })
        }
        ;
        U.prototype.intersect = function() {
            var b = a.call(arguments, 0);
            if (b.length === 0)
                return this;
            b = b.map(function(a) {
                return w(a)
            });
            var c = this;
            return this.withMutations(function(a) {
                c.forEach(function(c) {
                    b.every(function(a) {
                        return a.includes(c)
                    }) || a.remove(c)
                })
            })
        }
        ;
        U.prototype.subtract = function() {
            var b = a.call(arguments, 0);
            if (b.length === 0)
                return this;
            b = b.map(function(a) {
                return w(a)
            });
            var c = this;
            return this.withMutations(function(a) {
                c.forEach(function(c) {
                    b.some(function(a) {
                        return a.includes(c)
                    }) && a.remove(c)
                })
            })
        }
        ;
        U.prototype.merge = function() {
            return this.union.apply(this, arguments)
        }
        ;
        U.prototype.mergeWith = function(b) {
            var c = a.call(arguments, 1);
            return this.union.apply(this, c)
        }
        ;
        U.prototype.sort = function(a) {
            return Nc(sb(this, a))
        }
        ;
        U.prototype.sortBy = function(a, b) {
            return Nc(sb(this, b, a))
        }
        ;
        U.prototype.wasAltered = function() {
            return this._map.wasAltered()
        }
        ;
        U.prototype.__iterate = function(a, b) {
            var c = this;
            return this._map.__iterate(function(b, d) {
                return a(d, d, c)
            }, b)
        }
        ;
        U.prototype.__iterator = function(a, b) {
            return this._map.map(function(a, b) {
                return b
            }).__iterator(a, b)
        }
        ;
        U.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID)
                return this;
            var b = this._map.__ensureOwner(a);
            if (!a) {
                this.__ownerID = a;
                this._map = b;
                return this
            }
            return this.__make(b, a)
        }
        ;
        function Hc(a) {
            return !!(a && a[Ic])
        }
        U.isSet = Hc;
        var Ic = "@@__IMMUTABLE_SET__@@"
          , V = U.prototype;
        V[Ic] = !0;
        V[c] = V.remove;
        V.mergeDeep = V.merge;
        V.mergeDeepWith = V.mergeWith;
        V.withMutations = P.withMutations;
        V.asMutable = P.asMutable;
        V.asImmutable = P.asImmutable;
        V.__empty = Mc;
        V.__make = Kc;
        function Jc(a, b) {
            if (a.__ownerID) {
                a.size = b.size;
                a._map = b;
                return a
            }
            return b === a._map ? a : b.size === 0 ? a.__empty() : a.__make(b)
        }
        function Kc(a, b) {
            var c = Object.create(V);
            c.size = a ? a.size : 0;
            c._map = a;
            c.__ownerID = b;
            return c
        }
        var Lc;
        function Mc() {
            return Lc || (Lc = Kc(Pb()))
        }
        b(Nc, U);
        function Nc(a) {
            return a === null || a === void 0 ? Sc() : Oc(a) ? a : Sc().withMutations(function(b) {
                var c = w(a);
                L(c.size);
                c.forEach(function(a) {
                    return b.add(a)
                })
            })
        }
        Nc.of = function() {
            return this(arguments)
        }
        ;
        Nc.fromKeys = function(a) {
            return this(u(a).keySeq())
        }
        ;
        Nc.prototype.toString = function() {
            return this.__toString("OrderedSet {", "}")
        }
        ;
        function Oc(a) {
            return Hc(a) && ca(a)
        }
        Nc.isOrderedSet = Oc;
        var Pc = Nc.prototype;
        Pc[ga] = !0;
        Pc.__empty = Sc;
        Pc.__make = Qc;
        function Qc(a, b) {
            var c = Object.create(Pc);
            c.size = a ? a.size : 0;
            c._map = a;
            c.__ownerID = b;
            return c
        }
        var Rc;
        function Sc() {
            return Rc || (Rc = Qc(zc()))
        }
        b(W, Fa);
        function W(a, b) {
            var c, d = function(f) {
                if (f instanceof d)
                    return f;
                if (!(this instanceof d))
                    return new d(f);
                if (!c) {
                    c = !0;
                    var g = Object.keys(a);
                    Vc(e, g);
                    e.size = g.length;
                    e._name = b;
                    e._keys = g;
                    e._defaultValues = a
                }
                this._map = O(f)
            }, e = d.prototype = Object.create(X);
            e.constructor = d;
            return d
        }
        W.prototype.toString = function() {
            return this.__toString(Uc(this) + " {", "}")
        }
        ;
        W.prototype.has = function(a) {
            return this._defaultValues.hasOwnProperty(a)
        }
        ;
        W.prototype.get = function(a, b) {
            if (!this.has(a))
                return b;
            b = this._defaultValues[a];
            return this._map ? this._map.get(a, b) : b
        }
        ;
        W.prototype.clear = function() {
            if (this.__ownerID) {
                this._map && this._map.clear();
                return this
            }
            var a = this.constructor;
            return a._empty || (a._empty = Tc(this, Pb()))
        }
        ;
        W.prototype.set = function(a, b) {
            if (!this.has(a))
                throw new Error('Cannot set unknown key "' + a + '" on ' + Uc(this));
            a = this._map && this._map.set(a, b);
            return this.__ownerID || a === this._map ? this : Tc(this, a)
        }
        ;
        W.prototype.remove = function(a) {
            if (!this.has(a))
                return this;
            a = this._map && this._map.remove(a);
            return this.__ownerID || a === this._map ? this : Tc(this, a)
        }
        ;
        W.prototype.wasAltered = function() {
            return this._map.wasAltered()
        }
        ;
        W.prototype.__iterator = function(a, b) {
            var c = this;
            return u(this._defaultValues).map(function(a, b) {
                return c.get(b)
            }).__iterator(a, b)
        }
        ;
        W.prototype.__iterate = function(a, b) {
            var c = this;
            return u(this._defaultValues).map(function(a, b) {
                return c.get(b)
            }).__iterate(a, b)
        }
        ;
        W.prototype.__ensureOwner = function(a) {
            if (a === this.__ownerID)
                return this;
            var b = this._map && this._map.__ensureOwner(a);
            if (!a) {
                this.__ownerID = a;
                this._map = b;
                return this
            }
            return Tc(this, b, a)
        }
        ;
        var X = W.prototype;
        X[c] = X.remove;
        X.deleteIn = X.removeIn = P.removeIn;
        X.merge = P.merge;
        X.mergeWith = P.mergeWith;
        X.mergeIn = P.mergeIn;
        X.mergeDeep = P.mergeDeep;
        X.mergeDeepWith = P.mergeDeepWith;
        X.mergeDeepIn = P.mergeDeepIn;
        X.setIn = P.setIn;
        X.update = P.update;
        X.updateIn = P.updateIn;
        X.withMutations = P.withMutations;
        X.asMutable = P.asMutable;
        X.asImmutable = P.asImmutable;
        function Tc(a, b, c) {
            a = Object.create(Object.getPrototypeOf(a));
            a._map = b;
            a.__ownerID = c;
            return a
        }
        function Uc(a) {
            return a._name || a.constructor.name || "Record"
        }
        function Vc(a, b) {
            try {
                b.forEach(Wc.bind(void 0, a))
            } catch (a) {}
        }
        function Wc(a, b) {
            Object.defineProperty(a, b, {
                get: function() {
                    return this.get(b)
                },
                set: function(a) {
                    bb(this.__ownerID, "Cannot set on an immutable record."),
                    this.set(b, a)
                }
            })
        }
        function Xc(a, b) {
            if (a === b)
                return !0;
            if (!x(b) || a.size !== void 0 && b.size !== void 0 && a.size !== b.size || a.__hash !== void 0 && b.__hash !== void 0 && a.__hash !== b.__hash || y(a) !== y(b) || z(a) !== z(b) || ca(a) !== ca(b))
                return !1;
            if (a.size === 0 && b.size === 0)
                return !0;
            var c = !ba(a);
            if (ca(a)) {
                var d = a.entries();
                return b.every(function(a, b) {
                    var e = d.next().value;
                    return e && J(e[1], a) && (c || J(e[0], b))
                }) && d.next().done
            }
            var e = !1;
            if (a.size === void 0)
                if (b.size === void 0)
                    typeof a.cacheResult === "function" && a.cacheResult();
                else {
                    e = !0;
                    var f = a;
                    a = b;
                    b = f
                }
            f = !0;
            b = b.__iterate(function(b, d) {
                if (c ? !a.has(b) : e ? !J(b, a.get(d, g)) : !J(a.get(d, g), b)) {
                    f = !1;
                    return !1
                }
            });
            return f && a.size === b
        }
        b(Y, H);
        function Y(a, b, c) {
            if (!(this instanceof Y))
                return new Y(a,b,c);
            bb(c !== 0, "Cannot step a Range by 0");
            a = a || 0;
            b === void 0 && (b = Infinity);
            c = c === void 0 ? 1 : Math.abs(c);
            b < a && (c = -c);
            this._start = a;
            this._end = b;
            this._step = c;
            this.size = Math.max(0, Math.ceil((b - a) / c - 1) + 1);
            if (this.size === 0) {
                if (Yc)
                    return Yc;
                Yc = this
            }
        }
        Y.prototype.toString = function() {
            return this.size === 0 ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]"
        }
        ;
        Y.prototype.get = function(a, b) {
            return this.has(a) ? this._start + o(this, a) * this._step : b
        }
        ;
        Y.prototype.includes = function(a) {
            a = (a - this._start) / this._step;
            return a >= 0 && a < this.size && a === Math.floor(a)
        }
        ;
        Y.prototype.slice = function(a, b) {
            if (q(a, b, this.size))
                return this;
            a = r(a, this.size);
            b = s(b, this.size);
            return b <= a ? new Y(0,0) : new Y(this.get(a, this._end),this.get(b, this._end),this._step)
        }
        ;
        Y.prototype.indexOf = function(a) {
            a = a - this._start;
            if (a % this._step === 0) {
                a = a / this._step;
                if (a >= 0 && a < this.size)
                    return a
            }
            return -1
        }
        ;
        Y.prototype.lastIndexOf = function(a) {
            return this.indexOf(a)
        }
        ;
        Y.prototype.__iterate = function(a, b) {
            var c = this.size - 1
              , d = this._step
              , e = b ? this._start + c * d : this._start;
            for (var f = 0; f <= c; f++) {
                if (a(e, f, this) === !1)
                    return f + 1;
                e += b ? -d : d
            }
            return f
        }
        ;
        Y.prototype.__iterator = function(a, b) {
            var c = this.size - 1
              , d = this._step
              , e = b ? this._start + c * d : this._start
              , f = 0;
            return new C(function() {
                var g = e;
                e += b ? -d : d;
                return f > c ? E() : D(a, f++, g)
            }
            )
        }
        ;
        Y.prototype.equals = function(a) {
            return a instanceof Y ? this._start === a._start && this._end === a._end && this._step === a._step : Xc(this, a)
        }
        ;
        var Yc;
        b(Z, H);
        function Z(a, b) {
            if (!(this instanceof Z))
                return new Z(a,b);
            this._value = a;
            this.size = b === void 0 ? Infinity : Math.max(0, b);
            if (this.size === 0) {
                if (Zc)
                    return Zc;
                Zc = this
            }
        }
        Z.prototype.toString = function() {
            return this.size === 0 ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
        }
        ;
        Z.prototype.get = function(a, b) {
            return this.has(a) ? this._value : b
        }
        ;
        Z.prototype.includes = function(a) {
            return J(this._value, a)
        }
        ;
        Z.prototype.slice = function(a, b) {
            var c = this.size;
            return q(a, b, c) ? this : new Z(this._value,s(b, c) - r(a, c))
        }
        ;
        Z.prototype.reverse = function() {
            return this
        }
        ;
        Z.prototype.indexOf = function(a) {
            return J(this._value, a) ? 0 : -1
        }
        ;
        Z.prototype.lastIndexOf = function(a) {
            return J(this._value, a) ? this.size : -1
        }
        ;
        Z.prototype.__iterate = function(a, b) {
            for (var b = 0; b < this.size; b++)
                if (a(this._value, b, this) === !1)
                    return b + 1;
            return b
        }
        ;
        Z.prototype.__iterator = function(a, b) {
            var c = this
              , d = 0;
            return new C(function() {
                return d < c.size ? D(a, d++, c._value) : E()
            }
            )
        }
        ;
        Z.prototype.equals = function(a) {
            return a instanceof Z ? J(this._value, a._value) : Xc(a)
        }
        ;
        var Zc;
        function $c(a, b) {
            var c = function(c) {
                a.prototype[c] = b[c]
            };
            Object.keys(b).forEach(c);
            Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(b).forEach(c);
            return a
        }
        t.Iterator = C;
        $c(t, {
            toArray: function() {
                L(this.size);
                var a = new Array(this.size || 0);
                this.valueSeq().__iterate(function(b, c) {
                    a[c] = b
                });
                return a
            },
            toIndexedSeq: function() {
                return new cb(this)
            },
            toJS: function() {
                return this.toSeq().map(function(a) {
                    return a && typeof a.toJS === "function" ? a.toJS() : a
                }).__toJS()
            },
            toJSON: function() {
                return this.toSeq().map(function(a) {
                    return a && typeof a.toJSON === "function" ? a.toJSON() : a
                }).__toJS()
            },
            toKeyedSeq: function() {
                return new M(this,!0)
            },
            toMap: function() {
                return O(this.toKeyedSeq())
            },
            toObject: function() {
                L(this.size);
                var a = {};
                this.__iterate(function(b, c) {
                    a[c] = b
                });
                return a
            },
            toOrderedMap: function() {
                return S(this.toKeyedSeq())
            },
            toOrderedSet: function() {
                return Nc(y(this) ? this.valueSeq() : this)
            },
            toSet: function() {
                return U(y(this) ? this.valueSeq() : this)
            },
            toSetSeq: function() {
                return new db(this)
            },
            toSeq: function() {
                return z(this) ? this.toIndexedSeq() : y(this) ? this.toKeyedSeq() : this.toSetSeq()
            },
            toStack: function() {
                return T(y(this) ? this.valueSeq() : this)
            },
            toList: function() {
                return Q(y(this) ? this.valueSeq() : this)
            },
            toString: function() {
                return "[Iterable]"
            },
            __toString: function(a, b) {
                return this.size === 0 ? a + b : a + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + b
            },
            concat: function() {
                var b = a.call(arguments, 0);
                return N(this, ob(this, b))
            },
            contains: function(a) {
                return this.includes(a)
            },
            includes: function(a) {
                return this.some(function(b) {
                    return J(b, a)
                })
            },
            entries: function() {
                return this.__iterator(B)
            },
            every: function(a, b) {
                L(this.size);
                var c = !0;
                this.__iterate(function(d, e, f) {
                    if (!a.call(b, d, e, f)) {
                        c = !1;
                        return !1
                    }
                });
                return c
            },
            filter: function(a, b) {
                return N(this, ib(this, a, b, !0))
            },
            find: function(a, b, c) {
                a = this.findEntry(a, b);
                return a ? a[1] : c
            },
            findEntry: function(a, b) {
                var c;
                this.__iterate(function(d, e, f) {
                    if (a.call(b, d, e, f)) {
                        c = [e, d];
                        return !1
                    }
                });
                return c
            },
            findLastEntry: function(a, b) {
                return this.toSeq().reverse().findEntry(a, b)
            },
            forEach: function(a, b) {
                L(this.size);
                return this.__iterate(b ? a.bind(b) : a)
            },
            join: function(a) {
                L(this.size);
                a = a !== void 0 ? "" + a : ",";
                var b = ""
                  , c = !0;
                this.__iterate(function(d) {
                    c ? c = !1 : b += a,
                    b += d !== null && d !== void 0 ? d.toString() : ""
                });
                return b
            },
            keys: function() {
                return this.__iterator(ha)
            },
            map: function(a, b) {
                return N(this, gb(this, a, b))
            },
            reduce: function(a, b, c) {
                L(this.size);
                var d, e;
                arguments.length < 2 ? e = !0 : d = b;
                this.__iterate(function(b, f, g) {
                    e ? (e = !1,
                    d = b) : d = a.call(c, d, b, f, g)
                });
                return d
            },
            reduceRight: function(a, b, c) {
                var d = this.toKeyedSeq().reverse();
                return d.reduce.apply(d, arguments)
            },
            reverse: function() {
                return N(this, hb(this, !0))
            },
            slice: function(a, b) {
                return N(this, lb(this, a, b, !0))
            },
            some: function(a, b) {
                return !this.every(cd(a), b)
            },
            sort: function(a) {
                return N(this, sb(this, a))
            },
            values: function() {
                return this.__iterator(A)
            },
            butLast: function() {
                return this.slice(0, -1)
            },
            isEmpty: function() {
                return this.size !== void 0 ? this.size === 0 : !this.some(function() {
                    return !0
                })
            },
            count: function(a, b) {
                return n(a ? this.toSeq().filter(a, b) : this)
            },
            countBy: function(a, b) {
                return jb(this, a, b)
            },
            equals: function(a) {
                return Xc(this, a)
            },
            entrySeq: function() {
                var a = this;
                if (a._cache)
                    return new ra(a._cache);
                var b = a.toSeq().map(bd).toIndexedSeq();
                b.fromEntrySeq = function() {
                    return a.toSeq()
                }
                ;
                return b
            },
            filterNot: function(a, b) {
                return this.filter(cd(a), b)
            },
            findLast: function(a, b, c) {
                return this.toKeyedSeq().reverse().find(a, b, c)
            },
            first: function() {
                return this.find(p)
            },
            flatMap: function(a, b) {
                return N(this, qb(this, a, b))
            },
            flatten: function(a) {
                return N(this, pb(this, a, !0))
            },
            fromEntrySeq: function() {
                return new eb(this)
            },
            get: function(a, b) {
                return this.find(function(b, c) {
                    return J(c, a)
                }, void 0, b)
            },
            getIn: function(a, b) {
                var c = this;
                a = Cb(a);
                var d;
                while (!(d = a.next()).done) {
                    d = d.value;
                    c = c && c.get ? c.get(d, g) : g;
                    if (c === g)
                        return b
                }
                return c
            },
            groupBy: function(a, b) {
                return kb(this, a, b)
            },
            has: function(a) {
                return this.get(a, g) !== g
            },
            hasIn: function(a) {
                return this.getIn(a, g) !== g
            },
            isSubset: function(a) {
                a = typeof a.includes === "function" ? a : t(a);
                return this.every(function(b) {
                    return a.includes(b)
                })
            },
            isSuperset: function(a) {
                return a.isSubset(this)
            },
            keySeq: function() {
                return this.toSeq().map(ad).toIndexedSeq()
            },
            last: function() {
                return this.toSeq().reverse().first()
            },
            max: function(a) {
                return tb(this, a)
            },
            maxBy: function(a, b) {
                return tb(this, b, a)
            },
            min: function(a) {
                return tb(this, a ? dd(a) : gd)
            },
            minBy: function(a, b) {
                return tb(this, b ? dd(b) : gd, a)
            },
            rest: function() {
                return this.slice(1)
            },
            skip: function(a) {
                return this.slice(Math.max(0, a))
            },
            skipLast: function(a) {
                return N(this, this.toSeq().reverse().skip(a).reverse())
            },
            skipWhile: function(a, b) {
                return N(this, nb(this, a, b, !0))
            },
            skipUntil: function(a, b) {
                return this.skipWhile(cd(a), b)
            },
            sortBy: function(a, b) {
                return N(this, sb(this, b, a))
            },
            take: function(a) {
                return this.slice(0, Math.max(0, a))
            },
            takeLast: function(a) {
                return N(this, this.toSeq().reverse().take(a).reverse())
            },
            takeWhile: function(a, b) {
                return N(this, mb(this, a, b))
            },
            takeUntil: function(a, b) {
                return this.takeWhile(cd(a), b)
            },
            valueSeq: function() {
                return this.toIndexedSeq()
            },
            hashCode: function() {
                return this.__hash || (this.__hash = hd(this))
            }
        });
        var $ = t.prototype;
        $[da] = !0;
        $[ka] = $.values;
        $.__toJS = $.toArray;
        $.__toStringMapper = ed;
        $.inspect = $.toSource = function() {
            return this.toString()
        }
        ;
        $.chain = $.flatMap;
        (function() {
            try {
                Object.defineProperty($, "length", {
                    get: function() {
                        if (!t.noLengthWarning) {
                            var a;
                            try {
                                throw new Error()
                            } catch (b) {
                                a = b.stack
                            }
                            if (a.indexOf("_wrapObject") === -1) {
                                console && emptyFunction && !1;
                                return this.size
                            }
                        }
                    }
                })
            } catch (a) {}
        }
        )();
        $c(u, {
            flip: function() {
                return N(this, fb(this))
            },
            findKey: function(a, b) {
                a = this.findEntry(a, b);
                return a && a[0]
            },
            findLastKey: function(a, b) {
                return this.toSeq().reverse().findKey(a, b)
            },
            keyOf: function(a) {
                return this.findKey(function(b) {
                    return J(b, a)
                })
            },
            lastKeyOf: function(a) {
                return this.findLastKey(function(b) {
                    return J(b, a)
                })
            },
            mapEntries: function(a, b) {
                var c = this
                  , d = 0;
                return N(this, this.toSeq().map(function(e, f) {
                    return a.call(b, [f, e], d++, c)
                }).fromEntrySeq())
            },
            mapKeys: function(a, b) {
                var c = this;
                return N(this, this.toSeq().flip().map(function(d, e) {
                    return a.call(b, d, e, c)
                }).flip())
            }
        });
        c = u.prototype;
        c[ea] = !0;
        c[ka] = $.entries;
        c.__toJS = $.toObject;
        c.__toStringMapper = function(a, b) {
            return JSON.stringify(b) + ": " + ed(a)
        }
        ;
        $c(v, {
            toKeyedSeq: function() {
                return new M(this,!1)
            },
            filter: function(a, b) {
                return N(this, ib(this, a, b, !1))
            },
            findIndex: function(a, b) {
                a = this.findEntry(a, b);
                return a ? a[0] : -1
            },
            indexOf: function(a) {
                a = this.toKeyedSeq().keyOf(a);
                return a === void 0 ? -1 : a
            },
            lastIndexOf: function(a) {
                return this.toSeq().reverse().indexOf(a)
            },
            reverse: function() {
                return N(this, hb(this, !1))
            },
            slice: function(a, b) {
                return N(this, lb(this, a, b, !1))
            },
            splice: function(a, b) {
                var c = arguments.length;
                b = Math.max(b | 0, 0);
                if (c === 0 || c === 2 && !b)
                    return this;
                a = r(a, this.size);
                var d = this.slice(0, a);
                return N(this, c === 1 ? d : d.concat(m(arguments, 2), this.slice(a + b)))
            },
            findLastIndex: function(a, b) {
                a = this.toKeyedSeq().findLastKey(a, b);
                return a === void 0 ? -1 : a
            },
            first: function() {
                return this.get(0)
            },
            flatten: function(a) {
                return N(this, pb(this, a, !1))
            },
            get: function(a, b) {
                a = o(this, a);
                return a < 0 || this.size === Infinity || this.size !== void 0 && a > this.size ? b : this.find(function(b, c) {
                    return c === a
                }, void 0, b)
            },
            has: function(a) {
                a = o(this, a);
                return a >= 0 && (this.size !== void 0 ? this.size === Infinity || a < this.size : this.indexOf(a) !== -1)
            },
            interpose: function(a) {
                return N(this, rb(this, a))
            },
            interleave: function() {
                var a = [this].concat(m(arguments))
                  , b = vb(this.toSeq(), H.of, a)
                  , c = b.flatten(!0);
                b.size && (c.size = b.size * a.length);
                return N(this, c)
            },
            last: function() {
                return this.get(-1)
            },
            skipWhile: function(a, b) {
                return N(this, nb(this, a, b, !1))
            },
            zip: function() {
                var a = [this].concat(m(arguments));
                return N(this, vb(this, fd, a))
            },
            zipWith: function(a) {
                var b = m(arguments);
                b[0] = this;
                return N(this, vb(this, a, b))
            }
        });
        v.prototype[fa] = !0;
        v.prototype[ga] = !0;
        $c(w, {
            get: function(a, b) {
                return this.has(a) ? a : b
            },
            includes: function(a) {
                return this.has(a)
            },
            keySeq: function() {
                return this.valueSeq()
            }
        });
        w.prototype.has = $.includes;
        $c(G, u.prototype);
        $c(H, v.prototype);
        $c(I, w.prototype);
        $c(Fa, u.prototype);
        $c(Ga, v.prototype);
        $c(Ha, w.prototype);
        function ad(a, b) {
            return b
        }
        function bd(a, b) {
            return [b, a]
        }
        function cd(a) {
            return function() {
                return !a.apply(this, arguments)
            }
        }
        function dd(a) {
            return function() {
                return -a.apply(this, arguments)
            }
        }
        function ed(a) {
            return typeof a === "string" ? JSON.stringify(a) : a
        }
        function fd() {
            return m(arguments)
        }
        function gd(a, b) {
            return a < b ? 1 : a > b ? -1 : 0
        }
        function hd(a) {
            if (a.size === Infinity)
                return 0;
            var b = ca(a)
              , c = y(a)
              , d = b ? 1 : 0;
            a = a.__iterate(c ? b ? function(a, b) {
                d = 31 * d + jd(K(a), K(b)) | 0
            }
            : function(a, b) {
                d = d + jd(K(a), K(b)) | 0
            }
            : b ? function(a) {
                d = 31 * d + K(a) | 0
            }
            : function(a) {
                d = d + K(a) | 0
            }
            );
            return id(a, d)
        }
        function id(a, b) {
            b = Ma(b, 3432918353);
            b = Ma(b << 15 | b >>> -15, 461845907);
            b = Ma(b << 13 | b >>> -13, 5);
            b = (b + 3864292196 | 0) ^ a;
            b = Ma(b ^ b >>> 16, 2246822507);
            b = Ma(b ^ b >>> 13, 3266489909);
            b = Na(b ^ b >>> 16);
            return b
        }
        function jd(a, b) {
            return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0
        }
        b = {
            Iterable: t,
            Seq: F,
            Collection: Ea,
            Map: O,
            OrderedMap: S,
            List: Q,
            Stack: T,
            Set: U,
            OrderedSet: Nc,
            Record: W,
            Range: Y,
            Repeat: Z,
            is: J,
            fromJS: Ia
        };
        return b
    })
}
), null);
__d("DraftEntityInstance", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("immutable").Record;
    c = a({
        type: "TOKEN",
        mutability: "IMMUTABLE",
        data: Object
    });
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getType = function() {
            return this.get("type")
        }
        ;
        c.getMutability = function() {
            return this.get("mutability")
        }
        ;
        c.getData = function() {
            return this.get("data")
        }
        ;
        return b
    }(c);
    e.exports = d
}
), null);
__d("DraftEntity", ["invariant", "DraftEntityInstance", "immutable", "uuid"], (function(a, b, c, d, e, f, g) {
    a = b("immutable").OrderedMap;
    var h = a()
      , i = b("uuid")()
      , j = {
        __getAll: function() {
            return h
        },
        __loadWithEntities: function(a) {
            h = a,
            i = b("uuid")()
        },
        __getLastCreatedEntityKey: function() {
            return i
        },
        __create: function(a, c, d) {
            return j.__add(new (b("DraftEntityInstance"))({
                type: a,
                mutability: c,
                data: d || {}
            }))
        },
        __add: function(a) {
            i = b("uuid")();
            h = h.set(i, a);
            return i
        },
        __get: function(a) {
            var b = h.get(a);
            !b && g(0, 2105, a);
            return b
        },
        __mergeData: function(a, b) {
            var c = j.__get(a);
            b = babelHelpers["extends"]({}, c.getData(), b);
            c = c.set("data", b);
            h = h.set(a, c);
            return c
        },
        __replaceData: function(a, b) {
            var c = j.__get(a);
            c = c.set("data", b);
            h = h.set(a, c);
            return c
        }
    };
    e.exports = j
}
), null);
__d("BlockMapBuilder", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("immutable").OrderedMap;
    a = {
        createFromArray: function(a) {
            return g(a.map(function(a) {
                return [a.getKey(), a]
            }))
        }
    };
    e.exports = a
}
), null);
__d("findRangesImmutable", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d) {
        if (!a.size)
            return;
        var e = 0;
        a.reduce(function(a, f, g) {
            b(a, f) || (c(a) && d(e, g),
            e = g);
            return f
        });
        c(a.last()) && d(e, a.count())
    }
    e.exports = a
}
), null);
__d("BlockTree", ["findRangesImmutable", "getOwnObjectValues", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("immutable").List
      , h = b("immutable").Repeat;
    a = b("immutable").Record;
    var i = function() {
        return !0
    };
    c = {
        start: null,
        end: null
    };
    var j = a(c);
    d = {
        start: null,
        end: null,
        decoratorKey: null,
        leaves: null
    };
    var k = a(d);
    f = {
        generate: function(a, c, d) {
            var e = c.getLength();
            if (!e)
                return g.of(new k({
                    start: 0,
                    end: 0,
                    decoratorKey: null,
                    leaves: g.of(new j({
                        start: 0,
                        end: 0
                    }))
                }));
            var f = []
              , n = d ? d.getDecorations(c, a) : g(h(null, e))
              , o = c.getCharacterList();
            b("findRangesImmutable")(n, m, i, function(a, b) {
                f.push(new k({
                    start: a,
                    end: b,
                    decoratorKey: n.get(a),
                    leaves: l(o.slice(a, b).toList(), a)
                }))
            });
            return g(f)
        },
        fromJS: function(a) {
            var c = a.leaves;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["leaves"]);
            return new k(babelHelpers["extends"]({}, a, {
                leaves: c != null ? g(Array.isArray(c) ? c : b("getOwnObjectValues")(c)).map(function(a) {
                    return j(a)
                }) : null
            }))
        }
    };
    function l(a, c) {
        var d = [];
        a = a.map(function(a) {
            return a.getStyle()
        }).toList();
        b("findRangesImmutable")(a, m, i, function(a, b) {
            d.push(new j({
                start: a + c,
                end: b + c
            }))
        });
        return g(d)
    }
    function m(a, b) {
        return a === b
    }
    e.exports = f
}
), null);
__d("CharacterMetadata", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("immutable").Map
      , h = b("immutable").OrderedSet;
    a = b("immutable").Record;
    var i = h();
    c = {
        style: i,
        entity: null
    };
    d = a(c);
    f = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getStyle = function() {
            return this.get("style")
        }
        ;
        c.getEntity = function() {
            return this.get("entity")
        }
        ;
        c.hasStyle = function(a) {
            return this.getStyle().includes(a)
        }
        ;
        b.applyStyle = function(a, c) {
            a = a.set("style", a.getStyle().add(c));
            return b.create(a)
        }
        ;
        b.removeStyle = function(a, c) {
            a = a.set("style", a.getStyle().remove(c));
            return b.create(a)
        }
        ;
        b.applyEntity = function(a, c) {
            a = a.getEntity() === c ? a : a.set("entity", c);
            return b.create(a)
        }
        ;
        b.create = function(a) {
            if (!a)
                return j;
            var c = {
                style: i,
                entity: null
            };
            c = g(c).merge(a);
            a = k.get(c);
            if (a)
                return a;
            a = new b(c);
            k = k.set(c, a);
            return a
        }
        ;
        b.fromJS = function(a) {
            var c = a.style;
            a = a.entity;
            return new b({
                style: Array.isArray(c) ? h(c) : c,
                entity: Array.isArray(a) ? h(a) : a
            })
        }
        ;
        return b
    }(d);
    var j = new f()
      , k = g([[g(c), j]]);
    f.EMPTY = j;
    e.exports = f
}
), null);
__d("ContentBlock", ["CharacterMetadata", "findRangesImmutable", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("immutable")).List;
    c = a.Map;
    d = a.OrderedSet;
    f = a.Record;
    var h = a.Repeat
      , i = d();
    a = {
        key: "",
        type: "unstyled",
        text: "",
        characterList: g(),
        depth: 0,
        data: c()
    };
    d = f(a);
    var j = function(a) {
        if (!a)
            return a;
        var c = a.characterList
          , d = a.text;
        d && !c && (a.characterList = g(h(b("CharacterMetadata").EMPTY, d.length)));
        return a
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            return a.call(this, j(b)) || this
        }
        var d = c.prototype;
        d.getKey = function() {
            return this.get("key")
        }
        ;
        d.getType = function() {
            return this.get("type")
        }
        ;
        d.getText = function() {
            return this.get("text")
        }
        ;
        d.getCharacterList = function() {
            return this.get("characterList")
        }
        ;
        d.getLength = function() {
            return this.getText().length
        }
        ;
        d.getDepth = function() {
            return this.get("depth")
        }
        ;
        d.getData = function() {
            return this.get("data")
        }
        ;
        d.getInlineStyleAt = function(a) {
            a = this.getCharacterList().get(a);
            return a ? a.getStyle() : i
        }
        ;
        d.getEntityAt = function(a) {
            a = this.getCharacterList().get(a);
            return a ? a.getEntity() : null
        }
        ;
        d.findStyleRanges = function(a, c) {
            b("findRangesImmutable")(this.getCharacterList(), k, a, c)
        }
        ;
        d.findEntityRanges = function(a, c) {
            b("findRangesImmutable")(this.getCharacterList(), l, a, c)
        }
        ;
        return c
    }(d);
    function k(a, b) {
        return a.getStyle() === b.getStyle()
    }
    function l(a, b) {
        return a.getEntity() === b.getEntity()
    }
    e.exports = c
}
), null);
__d("ContentBlockNode", ["CharacterMetadata", "findRangesImmutable", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("immutable")).List;
    c = a.Map;
    d = a.OrderedSet;
    f = a.Record;
    var h = a.Repeat
      , i = d()
      , j = {
        parent: null,
        characterList: g(),
        data: c(),
        depth: 0,
        key: "",
        text: "",
        type: "unstyled",
        children: g(),
        prevSibling: null,
        nextSibling: null
    }
      , k = function(a, b) {
        return a.getStyle() === b.getStyle()
    }
      , l = function(a, b) {
        return a.getEntity() === b.getEntity()
    }
      , m = function(a) {
        if (!a)
            return a;
        var c = a.characterList
          , d = a.text;
        d && !c && (a.characterList = g(h(b("CharacterMetadata").EMPTY, d.length)));
        return a
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            b === void 0 && (b = j);
            return a.call(this, m(b)) || this
        }
        var d = c.prototype;
        d.getKey = function() {
            return this.get("key")
        }
        ;
        d.getType = function() {
            return this.get("type")
        }
        ;
        d.getText = function() {
            return this.get("text")
        }
        ;
        d.getCharacterList = function() {
            return this.get("characterList")
        }
        ;
        d.getLength = function() {
            return this.getText().length
        }
        ;
        d.getDepth = function() {
            return this.get("depth")
        }
        ;
        d.getData = function() {
            return this.get("data")
        }
        ;
        d.getInlineStyleAt = function(a) {
            a = this.getCharacterList().get(a);
            return a ? a.getStyle() : i
        }
        ;
        d.getEntityAt = function(a) {
            a = this.getCharacterList().get(a);
            return a ? a.getEntity() : null
        }
        ;
        d.getChildKeys = function() {
            return this.get("children")
        }
        ;
        d.getParentKey = function() {
            return this.get("parent")
        }
        ;
        d.getPrevSiblingKey = function() {
            return this.get("prevSibling")
        }
        ;
        d.getNextSiblingKey = function() {
            return this.get("nextSibling")
        }
        ;
        d.findStyleRanges = function(a, c) {
            b("findRangesImmutable")(this.getCharacterList(), k, a, c)
        }
        ;
        d.findEntityRanges = function(a, c) {
            b("findRangesImmutable")(this.getCharacterList(), l, a, c)
        }
        ;
        return c
    }(f(j));
    e.exports = a
}
), null);
__d("SelectionState", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("immutable").Record;
    c = {
        anchorKey: "",
        anchorOffset: 0,
        focusKey: "",
        focusOffset: 0,
        isBackward: !1,
        hasFocus: !1
    };
    d = a(c);
    f = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.serialize = function() {
            return "Anchor: " + this.getAnchorKey() + ":" + this.getAnchorOffset() + ", Focus: " + this.getFocusKey() + ":" + this.getFocusOffset() + ", Is Backward: " + String(this.getIsBackward()) + ", Has Focus: " + String(this.getHasFocus())
        }
        ;
        c.getAnchorKey = function() {
            return this.get("anchorKey")
        }
        ;
        c.getAnchorOffset = function() {
            return this.get("anchorOffset")
        }
        ;
        c.getFocusKey = function() {
            return this.get("focusKey")
        }
        ;
        c.getFocusOffset = function() {
            return this.get("focusOffset")
        }
        ;
        c.getIsBackward = function() {
            return this.get("isBackward")
        }
        ;
        c.getHasFocus = function() {
            return this.get("hasFocus")
        }
        ;
        c.hasEdgeWithin = function(a, b, c) {
            var d = this.getAnchorKey()
              , e = this.getFocusKey();
            if (d === e && d === a) {
                var f = this.getStartOffset()
                  , g = this.getEndOffset();
                return b <= f && f <= c || b <= g && g <= c
            }
            if (a !== d && a !== e)
                return !1;
            f = a === d ? this.getAnchorOffset() : this.getFocusOffset();
            return b <= f && c >= f
        }
        ;
        c.isCollapsed = function() {
            return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset()
        }
        ;
        c.getStartKey = function() {
            return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey()
        }
        ;
        c.getStartOffset = function() {
            return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset()
        }
        ;
        c.getEndKey = function() {
            return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey()
        }
        ;
        c.getEndOffset = function() {
            return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset()
        }
        ;
        b.createEmpty = function(a) {
            return new b({
                anchorKey: a,
                anchorOffset: 0,
                focusKey: a,
                focusOffset: 0,
                isBackward: !1,
                hasFocus: !1
            })
        }
        ;
        return b
    }(d);
    e.exports = f
}
), null);
__d("generateRandomKey", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {}
      , h = Math.pow(2, 24);
    function a() {
        var a;
        while (a === void 0 || Object.prototype.hasOwnProperty.call(g, a) || !isNaN(+a))
            a = Math.floor(Math.random() * h).toString(32);
        g[a] = !0;
        return a
    }
    e.exports = a
}
), null);
__d("ContentState", ["BlockMapBuilder", "CharacterMetadata", "ContentBlock", "ContentBlockNode", "DraftEntity", "SelectionState", "generateRandomKey", "getOwnObjectValues", "gkx", "immutable", "sanitizeDraftText"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("immutable")).List;
    c = a.Record;
    var h = a.Repeat
      , i = a.Map
      , j = a.OrderedMap;
    d = {
        entityMap: null,
        blockMap: null,
        selectionBefore: null,
        selectionAfter: null
    };
    f = c(d);
    var k = b("gkx")("676842") ? b("ContentBlockNode") : b("ContentBlock");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getEntityMap = function() {
            return b("DraftEntity")
        }
        ;
        d.getBlockMap = function() {
            return this.get("blockMap")
        }
        ;
        d.getSelectionBefore = function() {
            return this.get("selectionBefore")
        }
        ;
        d.getSelectionAfter = function() {
            return this.get("selectionAfter")
        }
        ;
        d.getBlockForKey = function(a) {
            a = this.getBlockMap().get(a);
            return a
        }
        ;
        d.getKeyBefore = function(a) {
            return this.getBlockMap().reverse().keySeq().skipUntil(function(b) {
                return b === a
            }).skip(1).first()
        }
        ;
        d.getKeyAfter = function(a) {
            return this.getBlockMap().keySeq().skipUntil(function(b) {
                return b === a
            }).skip(1).first()
        }
        ;
        d.getBlockAfter = function(a) {
            return this.getBlockMap().skipUntil(function(b, c) {
                return c === a
            }).skip(1).first()
        }
        ;
        d.getBlockBefore = function(a) {
            return this.getBlockMap().reverse().skipUntil(function(b, c) {
                return c === a
            }).skip(1).first()
        }
        ;
        d.getBlocksAsArray = function() {
            return this.getBlockMap().toArray()
        }
        ;
        d.getFirstBlock = function() {
            return this.getBlockMap().first()
        }
        ;
        d.getLastBlock = function() {
            return this.getBlockMap().last()
        }
        ;
        d.getPlainText = function(a) {
            return this.getBlockMap().map(function(a) {
                return a ? a.getText() : ""
            }).join(a || "\n")
        }
        ;
        d.getLastCreatedEntityKey = function() {
            return b("DraftEntity").__getLastCreatedEntityKey()
        }
        ;
        d.hasText = function() {
            var a = this.getBlockMap();
            return a.size > 1 || escape(a.first().getText()).replace(/%u200B/g, "").length > 0
        }
        ;
        d.createEntity = function(a, c, d) {
            b("DraftEntity").__create(a, c, d);
            return this
        }
        ;
        d.mergeEntityData = function(a, c) {
            b("DraftEntity").__mergeData(a, c);
            return this
        }
        ;
        d.replaceEntityData = function(a, c) {
            b("DraftEntity").__replaceData(a, c);
            return this
        }
        ;
        d.addEntity = function(a) {
            b("DraftEntity").__add(a);
            return this
        }
        ;
        d.getEntity = function(a) {
            return b("DraftEntity").__get(a)
        }
        ;
        d.getAllEntities = function() {
            return b("DraftEntity").__getAll()
        }
        ;
        d.setEntityMap = function(a) {
            b("DraftEntity").__loadWithEntities(a);
            return this
        }
        ;
        c.createFromBlockArray = function(a, d) {
            a = Array.isArray(a) ? a : a.contentBlocks;
            a = b("BlockMapBuilder").createFromArray(a);
            var e = a.isEmpty() ? new (b("SelectionState"))() : b("SelectionState").createEmpty(a.first().getKey());
            return new c({
                blockMap: a,
                entityMap: d || b("DraftEntity"),
                selectionBefore: e,
                selectionAfter: e
            })
        }
        ;
        c.createFromText = function(a, d) {
            d === void 0 && (d = /\r\n?|\n/g);
            a = a.split(d);
            d = a.map(function(a) {
                a = b("sanitizeDraftText")(a);
                return new k({
                    key: b("generateRandomKey")(),
                    text: a,
                    type: "unstyled",
                    characterList: g(h(b("CharacterMetadata").EMPTY, a.length))
                })
            });
            return c.createFromBlockArray(d)
        }
        ;
        c.fromJS = function(a) {
            return new c(babelHelpers["extends"]({}, a, {
                blockMap: j(a.blockMap).map(c.createContentBlockFromJS),
                selectionBefore: new (b("SelectionState"))(a.selectionBefore),
                selectionAfter: new (b("SelectionState"))(a.selectionAfter)
            }))
        }
        ;
        c.createContentBlockFromJS = function(a) {
            var c = a.characterList;
            return new k(babelHelpers["extends"]({}, a, {
                data: i(a.data),
                characterList: c != null ? g((Array.isArray(c) ? c : b("getOwnObjectValues")(c)).map(function(a) {
                    return b("CharacterMetadata").fromJS(a)
                })) : void 0
            }))
        }
        ;
        return c
    }(f);
    e.exports = a
}
), null);
__d("UnicodeBidiService", ["invariant", "UnicodeBidi", "UnicodeBidiDirection", "UnicodeBidiGlobalDirection"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            !a ? a = b("UnicodeBidiGlobalDirection").getDir() : b("UnicodeBidiDirection").isStrong(a) || g(0, 3594),
            this.$1 = a,
            this.reset()
        }
        var c = a.prototype;
        c.reset = function() {
            this.$2 = this.$1
        }
        ;
        c.getDirection = function(a) {
            this.$2 = b("UnicodeBidi").getDirection(a, this.$2);
            return this.$2
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("EditorBidiService", ["UnicodeBidiService", "immutable", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("immutable").OrderedMap, h;
    a = {
        getDirectionMap: function(a, c) {
            !h ? h = new (b("UnicodeBidiService"))() : h.reset();
            a = a.getBlockMap();
            var d = a.valueSeq().map(function(a) {
                return b("nullthrows")(h).getDirection(a.getText())
            });
            a = g(a.keySeq().zip(d));
            return c != null && b("immutable").is(c, a) ? c : a
        }
    };
    e.exports = a
}
), null);
__d("EditorState", ["BlockTree", "ContentState", "EditorBidiService", "SelectionState", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("immutable")).OrderedSet;
    c = a.Record;
    var h = a.Stack
      , i = a.OrderedMap
      , j = a.List;
    d = {
        allowUndo: !0,
        currentContent: null,
        decorator: null,
        directionMap: null,
        forceSelection: !1,
        inCompositionMode: !1,
        inlineStyleOverride: null,
        lastChangeType: null,
        nativelyRenderedContent: null,
        redoStack: h(),
        selection: null,
        treeMap: null,
        undoStack: h()
    };
    var k = c(d)
      , l = function() {
        a.createEmpty = function(a) {
            return this.createWithText("", a)
        }
        ;
        a.createWithText = function(c, d) {
            return a.createWithContent(b("ContentState").createFromText(c), d)
        }
        ;
        a.createWithContent = function(c, d) {
            if (c.getBlockMap().count() === 0)
                return a.createEmpty(d);
            var e = c.getBlockMap().first().getKey();
            return a.create({
                currentContent: c,
                undoStack: h(),
                redoStack: h(),
                decorator: d || null,
                selection: b("SelectionState").createEmpty(e)
            })
        }
        ;
        a.create = function(c) {
            var d = c.currentContent
              , e = c.decorator;
            c = babelHelpers["extends"]({}, c, {
                treeMap: n(d, e),
                directionMap: b("EditorBidiService").getDirectionMap(d)
            });
            return new a(new k(c))
        }
        ;
        a.fromJS = function(c) {
            return new a(new k(babelHelpers["extends"]({}, c, {
                directionMap: c.directionMap != null ? i(c.directionMap) : c.directionMap,
                inlineStyleOverride: c.inlineStyleOverride != null ? g(c.inlineStyleOverride) : c.inlineStyleOverride,
                nativelyRenderedContent: c.nativelyRenderedContent != null ? b("ContentState").fromJS(c.nativelyRenderedContent) : c.nativelyRenderedContent,
                redoStack: c.redoStack != null ? h(c.redoStack.map(function(a) {
                    return b("ContentState").fromJS(a)
                })) : c.redoStack,
                selection: c.selection != null ? new (b("SelectionState"))(c.selection) : c.selection,
                treeMap: c.treeMap != null ? i(c.treeMap).map(function(a) {
                    return j(a).map(function(a) {
                        return b("BlockTree").fromJS(a)
                    })
                }) : c.treeMap,
                undoStack: c.undoStack != null ? h(c.undoStack.map(function(a) {
                    return b("ContentState").fromJS(a)
                })) : c.undoStack,
                currentContent: b("ContentState").fromJS(c.currentContent)
            })))
        }
        ;
        a.set = function(b, c) {
            var d = b.getImmutable().withMutations(function(a) {
                var d = a.get("decorator")
                  , e = d;
                c.decorator === null ? e = null : c.decorator && (e = c.decorator);
                var f = c.currentContent || b.getCurrentContent();
                if (e !== d) {
                    var g = a.get("treeMap");
                    e && d ? g = p(f, f.getBlockMap(), g, e, d) : g = n(f, e);
                    a.merge({
                        decorator: e,
                        treeMap: g,
                        nativelyRenderedContent: null
                    });
                    return
                }
                d = b.getCurrentContent();
                f !== d && a.set("treeMap", o(b, f.getBlockMap(), f.getEntityMap(), e));
                a.merge(c)
            });
            return new a(d)
        }
        ;
        var c = a.prototype;
        c.toJS = function() {
            return this.getImmutable().toJS()
        }
        ;
        c.getAllowUndo = function() {
            return this.getImmutable().get("allowUndo")
        }
        ;
        c.getCurrentContent = function() {
            return this.getImmutable().get("currentContent")
        }
        ;
        c.getUndoStack = function() {
            return this.getImmutable().get("undoStack")
        }
        ;
        c.getRedoStack = function() {
            return this.getImmutable().get("redoStack")
        }
        ;
        c.getSelection = function() {
            return this.getImmutable().get("selection")
        }
        ;
        c.getDecorator = function() {
            return this.getImmutable().get("decorator")
        }
        ;
        c.isInCompositionMode = function() {
            return this.getImmutable().get("inCompositionMode")
        }
        ;
        c.mustForceSelection = function() {
            return this.getImmutable().get("forceSelection")
        }
        ;
        c.getNativelyRenderedContent = function() {
            return this.getImmutable().get("nativelyRenderedContent")
        }
        ;
        c.getLastChangeType = function() {
            return this.getImmutable().get("lastChangeType")
        }
        ;
        c.getInlineStyleOverride = function() {
            return this.getImmutable().get("inlineStyleOverride")
        }
        ;
        a.setInlineStyleOverride = function(b, c) {
            return a.set(b, {
                inlineStyleOverride: c
            })
        }
        ;
        c.getCurrentInlineStyle = function() {
            var a = this.getInlineStyleOverride();
            if (a != null)
                return a;
            a = this.getCurrentContent();
            var b = this.getSelection();
            return b.isCollapsed() ? r(a, b) : s(a, b)
        }
        ;
        c.getBlockTree = function(a) {
            return this.getImmutable().getIn(["treeMap", a])
        }
        ;
        c.isSelectionAtStartOfContent = function() {
            var a = this.getCurrentContent().getBlockMap().first().getKey();
            return this.getSelection().hasEdgeWithin(a, 0, 0)
        }
        ;
        c.isSelectionAtEndOfContent = function() {
            var a = this.getCurrentContent();
            a = a.getBlockMap();
            a = a.last();
            var b = a.getLength();
            return this.getSelection().hasEdgeWithin(a.getKey(), b, b)
        }
        ;
        c.getDirectionMap = function() {
            return this.getImmutable().get("directionMap")
        }
        ;
        a.acceptSelection = function(a, b) {
            return m(a, b, !1)
        }
        ;
        a.forceSelection = function(a, b) {
            b.getHasFocus() || (b = b.set("hasFocus", !0));
            return m(a, b, !0)
        }
        ;
        a.moveSelectionToEnd = function(c) {
            var d = c.getCurrentContent();
            d = d.getLastBlock();
            var e = d.getKey();
            d = d.getLength();
            return a.acceptSelection(c, new (b("SelectionState"))({
                anchorKey: e,
                anchorOffset: d,
                focusKey: e,
                focusOffset: d,
                isBackward: !1
            }))
        }
        ;
        a.moveFocusToEnd = function(b) {
            b = a.moveSelectionToEnd(b);
            return a.forceSelection(b, b.getSelection())
        }
        ;
        a.push = function(c, d, e, f) {
            f === void 0 && (f = !0);
            if (c.getCurrentContent() === d)
                return c;
            var g = b("EditorBidiService").getDirectionMap(d, c.getDirectionMap());
            if (!c.getAllowUndo())
                return a.set(c, {
                    currentContent: d,
                    directionMap: g,
                    lastChangeType: e,
                    selection: d.getSelectionAfter(),
                    forceSelection: f,
                    inlineStyleOverride: null
                });
            var i = c.getSelection()
              , j = c.getCurrentContent()
              , k = c.getUndoStack()
              , l = d;
            i !== j.getSelectionAfter() || q(c, e) ? (k = k.push(j),
            l = l.set("selectionBefore", i)) : (e === "insert-characters" || e === "backspace-character" || e === "delete-character") && (l = l.set("selectionBefore", j.getSelectionBefore()));
            i = c.getInlineStyleOverride();
            j = ["adjust-depth", "change-block-type", "split-block"];
            j.indexOf(e) === -1 && (i = null);
            j = {
                currentContent: l,
                directionMap: g,
                undoStack: k,
                redoStack: h(),
                lastChangeType: e,
                selection: d.getSelectionAfter(),
                forceSelection: f,
                inlineStyleOverride: i
            };
            return a.set(c, j)
        }
        ;
        a.undo = function(c) {
            if (!c.getAllowUndo())
                return c;
            var d = c.getUndoStack()
              , e = d.peek();
            if (!e)
                return c;
            var f = c.getCurrentContent()
              , g = b("EditorBidiService").getDirectionMap(e, c.getDirectionMap());
            return a.set(c, {
                currentContent: e,
                directionMap: g,
                undoStack: d.shift(),
                redoStack: c.getRedoStack().push(f),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: "undo",
                nativelyRenderedContent: null,
                selection: f.getSelectionBefore()
            })
        }
        ;
        a.redo = function(c) {
            if (!c.getAllowUndo())
                return c;
            var d = c.getRedoStack()
              , e = d.peek();
            if (!e)
                return c;
            var f = c.getCurrentContent()
              , g = b("EditorBidiService").getDirectionMap(e, c.getDirectionMap());
            return a.set(c, {
                currentContent: e,
                directionMap: g,
                undoStack: c.getUndoStack().push(f),
                redoStack: d.shift(),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: "redo",
                nativelyRenderedContent: null,
                selection: e.getSelectionAfter()
            })
        }
        ;
        function a(a) {
            this.$1 = a
        }
        c.getImmutable = function() {
            return this.$1
        }
        ;
        return a
    }();
    function m(a, b, c) {
        return l.set(a, {
            selection: b,
            forceSelection: c,
            nativelyRenderedContent: null,
            inlineStyleOverride: null
        })
    }
    function n(a, c) {
        return a.getBlockMap().map(function(d) {
            return b("BlockTree").generate(a, d, c)
        }).toOrderedMap()
    }
    function o(a, c, d, e) {
        var f = a.getCurrentContent().set("entityMap", d)
          , g = f.getBlockMap();
        d = a.getImmutable().get("treeMap");
        return d.merge(c.toSeq().filter(function(a, b) {
            return a !== g.get(b)
        }).map(function(a) {
            return b("BlockTree").generate(f, a, e)
        }))
    }
    function p(a, c, d, e, f) {
        return d.merge(c.toSeq().filter(function(b) {
            return e.getDecorations(b, a) !== f.getDecorations(b, a)
        }).map(function(c) {
            return b("BlockTree").generate(a, c, e)
        }))
    }
    function q(a, b) {
        a = a.getLastChangeType();
        return b !== a || b !== "insert-characters" && b !== "backspace-character" && b !== "delete-character"
    }
    function r(a, b) {
        var c = b.getStartKey();
        b = b.getStartOffset();
        var d = a.getBlockForKey(c);
        if (b > 0)
            return d.getInlineStyleAt(b - 1);
        return d.getLength() ? d.getInlineStyleAt(0) : t(a, c)
    }
    function s(a, b) {
        var c = b.getStartKey();
        b = b.getStartOffset();
        var d = a.getBlockForKey(c);
        if (b < d.getLength())
            return d.getInlineStyleAt(b);
        return b > 0 ? d.getInlineStyleAt(b - 1) : t(a, c)
    }
    function t(a, b) {
        a = a.getBlockMap().reverse().skipUntil(function(a, c) {
            return c === b
        }).skip(1).skipUntil(function(a, b) {
            return a.getLength()
        }).first();
        return a ? a.getInlineStyleAt(a.getLength() - 1) : g()
    }
    e.exports = l
}
), null);
