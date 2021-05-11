if (self.CavalryLogger) {
    CavalryLogger.start_js(["NR5OB"]);
}

__d("TextWithEntitiesRelay_textWithEntities.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            concreteType: "WorkForeignEntityInfo",
            kind: "LinkedField",
            name: "work_foreign_entity_info",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null
            }],
            storageKey: null
        };
        return {
            argumentDefinitions: [{
                defaultValue: !1,
                kind: "LocalArgument",
                name: "is_work_user"
            }],
            kind: "Fragment",
            metadata: null,
            name: "TextWithEntitiesRelay_textWithEntities",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "EntityAtRange",
                kind: "LinkedField",
                name: "ranges",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "offset",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "length",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "entity",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "url",
                        storageKey: null
                    }, {
                        condition: "is_work_user",
                        kind: "Condition",
                        passingValue: !0,
                        selections: [{
                            kind: "InlineFragment",
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "allows_external_members",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_multi_company_group",
                                storageKey: null
                            }, a],
                            type: "Group",
                            abstractKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_viewer_coworker",
                                storageKey: null
                            }, a],
                            type: "User",
                            abstractKey: null
                        }]
                    }],
                    storageKey: null
                }],
                storageKey: null
            }],
            type: "TextWithEntities",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("AdsFluxContainer", ["AdsFluxContextInstrumentation", "AdsInterfacesLoggerUtils", "FluxContainer", "getModuleNameFromFluxContainer"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        var d = b("FluxContainer").create(a, c)
          , e = function(e) {
            babelHelpers.inheritsLoose(d, e);
            function d() {
                return e.apply(this, arguments) || this
            }
            var f = d.prototype;
            f.componentDidCatch = function(d) {
                if (!d.hasBeenLoggedForAdsInterfaces) {
                    var e = {
                        action_type_on_error: b("AdsFluxContextInstrumentation").getLastAction(),
                        error_type: "FLUX_CONTAINER",
                        module_name: (c ? c.name : null) || b("getModuleNameFromFluxContainer")(a.displayName || a.name) || "AdsFluxContainer(unknown)"
                    };
                    b("AdsInterfacesLoggerUtils").logCriticalException(d, e);
                    d.hasBeenLoggedForAdsInterfaces = !0
                }
                throw d
            }
            ;
            return d
        }(d);
        try {
            Object.defineProperty(e, "name", {
                value: d.name
            })
        } catch (a) {}
        return e
    }
    c = {
        create: a,
        createFunctional: b("FluxContainer").createFunctional
    };
    e.exports = c
}
), null);
__d("TextWithEntitiesRelay.react", ["React", "RelayModern", "TextWithEntities.react", "TextWithEntitiesRelay_textWithEntities.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    a = function(a) {
        var c = a.textWithEntities;
        return !c ? null : h.jsx(b("TextWithEntities.react"), babelHelpers["extends"]({
            text: c.text,
            ranges: c.ranges
        }, a))
    }
    ;
    c = b("RelayModern").createFragmentContainer(a, {
        textWithEntities: g !== void 0 ? g : g = b("TextWithEntitiesRelay_textWithEntities.graphql")
    });
    e.exports = c
}
), null);
__d("FDSEllipsisButton.react", ["ix", "FDSButton.react", "React", "SUIBorderUtils", "SUIGlyphIcon.react", "asset", "makeFDSStandardComponent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx(b("FDSButton.react"), babelHelpers["extends"]({}, this.props, {
                icon: h.jsx(b("SUIGlyphIcon.react"), {
                    srcDefault: g("516421"),
                    srcDisabled: g("532252")
                }),
                labelIsHidden: !0
            }))
        }
        ;
        return c
    }(h.PureComponent);
    a.defaultProps = {
        borderedSides: b("SUIBorderUtils").ALL_SIDES,
        isDisabled: !1,
        roundedCorners: b("SUIBorderUtils").ALL_CORNERS,
        size: "medium",
        type: "button",
        use: "default"
    };
    c = b("makeFDSStandardComponent")("FDSEllipsisButton", a);
    e.exports = c
}
), null);
__d("getSUIActionMenuUniform.fds", ["ix", "cssVar", "FDSPrivateThemeUtils", "FDSPrivateTypeStyles", "React", "SUIGlyphIcon.react", "asset"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = b("FDSPrivateTypeStyles").createTypeStyleGetter(a), d;
        if (b("FDSPrivateThemeUtils").isGeo(a)) {
            var e = a.colors.text.primary;
            d = {
                borderRadius: a.borderRadius.layer,
                borderWidth: 0,
                descriptionTypeStyle: c({
                    color: a.colors.text.secondary,
                    fontSize: "12px"
                }),
                itemColor: e,
                itemTypeStyle: c({
                    color: e,
                    fontSize: "14px"
                }),
                itemBorderRadius: a.borderRadius.container,
                highlightedItemColor: e,
                horizontalPadding: a.list.paddingHoriz
            }
        }
        return babelHelpers["extends"]({
            backgroundColor: "#FFFFFF",
            borderColor: "#CCD0D5",
            descriptionTypeStyle: c({
                color: "#8D949E",
                fontSize: "12px",
                fontWeight: "normal"
            }),
            disabledItemColor: a.colors.text.disabled,
            headerColor: "#606770",
            headerTypeStyle: c({
                color: "#606770",
                fontSize: "12px",
                fontWeight: "bold"
            }),
            highlightedItemBackgroundColor: "#F2F3F5",
            highlightedItemColor: "#606770",
            itemColor: "#606770",
            itemIconWidth: "auto",
            itemIconAlignment: "center",
            itemHeight: 32,
            itemTypeStyle: c({
                color: "#606770",
                fontSize: "12px",
                fontWeight: "normal"
            }),
            submenuIndicatorLTR: i.jsx(b("SUIGlyphIcon.react"), {
                srcDefault: g("496757")
            }),
            submenuIndicatorRTL: i.jsx(b("SUIGlyphIcon.react"), {
                srcDefault: g("503180")
            })
        }, d)
    }
}
), null);
__d("FDSMenu.react", ["FDSPrivateThemeContext.react", "React", "SUIActionMenu.react", "getSUIActionMenuUniform.fds", "makeFDSStandardComponent", "makeSUIThemeGetter"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIThemeGetter")({
        SUIActionMenu: b("getSUIActionMenuUniform.fds")
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this;
            return g.jsx(b("FDSPrivateThemeContext.react").Consumer, {
                children: function(c) {
                    c = h(c);
                    return g.jsx(b("SUIActionMenu.react"), {
                        "data-testid": void 0,
                        focusFirstElementOnMount: a.props.focusFirstElementOnMount,
                        focusItemOnMount: a.props.focusItemOnMount,
                        id: a.props.id,
                        items: a.props.items,
                        onItemClick: a.props.onItemClick,
                        theme: c
                    })
                }
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.defaultProps = {
        focusFirstElementOnMount: !1
    };
    c = b("makeFDSStandardComponent")("FDSMenu", a);
    e.exports = c
}
), null);
__d("FDSPrivateDropdownMenuContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        menuAlignment: void 0,
        isDisabled: void 0,
        labelIsHidden: void 0,
        size: void 0,
        use: void 0
    });
    d = c;
    e.exports = d
}
), null);
__d("SUIPropTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.dropdownWidth = a;
    f.width = b;
    function a(a, b, c) {
        b = a.dropdownWidth;
        return b !== "auto" && b !== "sameAsSelector" && typeof b !== "number" ? new Error("Invalid prop `dropdownWidth` of type `" + typeof b + "` supplied to `" + c + '`, expected "auto", "sameAsSelector", or any number.') : void 0
    }
    function b(a, b, c) {
        b = a.width;
        return b !== "auto" && b !== "100%" && typeof b !== "number" ? new Error("Invalid prop `width` of type `" + typeof b + "` supplied to `" + c + '`, expected "auto", "100%", or any number.') : void 0
    }
}
), null);
__d("SUISelectorButton.react", ["cx", "Locale", "React", "SUIButton_DEPRECATED.react", "SUIButton.react", "SUIErrorComponentUtil", "SUITheme", "joinClasses", "prop-types", "uniqueID", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = babelHelpers["extends"]({}, b("SUIButton_DEPRECATED.react").defaultProps, b("SUIErrorComponentUtil").defaultProps, {
        hasHoverState: !1,
        isMenuShown: !1,
        suppressed: !1,
        textAlign: "left"
    });
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = b("uniqueID")(),
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.$2 = function(a) {
            a = a.margins;
            if (!a)
                return {};
            a = a.label;
            if (!a)
                return {};
            else if (b("Locale").isRTL())
                return {
                    marginLeft: a.right,
                    marginRight: a.left
                };
            else
                return {
                    marginLeft: a.left,
                    marginRight: a.right
                }
        }
        ;
        d.$3 = function() {
            var a = b("SUITheme").get(this).SUISelectorButton
              , c = this.props.uniformOverride;
            return c != null ? babelHelpers["extends"]({}, a, c) : a
        }
        ;
        d.render = function() {
            var a, c = b("SUITheme").get(this), d = b("SUIErrorComponentUtil").hasError(this.props), e = this.props, f = e.id, g = e.isMenuShown, i = e.labelledBy, j = e.style, k = e.styleWhenMenuShown, l = e.suppressLabelOverflowTooltip, m = e.uniformOverrideButton, n = e.suppressed;
            e.errorMessage;
            e.errorTooltipPosition;
            e.uniformOverride;
            e.warningMessage;
            e = babelHelpers.objectWithoutPropertiesLoose(e, ["id", "isMenuShown", "labelledBy", "style", "styleWhenMenuShown", "suppressLabelOverflowTooltip", "uniformOverrideButton", "suppressed", "errorMessage", "errorTooltipPosition", "uniformOverride", "warningMessage"]);
            n = n && !g ? !0 : void 0;
            var o = this.$3();
            a = ((a = o.use) != null ? a[this.props.use] : a) || o.use["default"];
            var p;
            j = babelHelpers["extends"]({
                paddingLeft: o.paddingLeft != null ? o.paddingLeft : o.padding,
                paddingRight: o.paddingRight != null ? o.paddingRight : o.padding
            }, this.props.disabled && a != null && a.disabled ? {
                backgroundColor: a.disabled.background,
                borderColor: a.disabled.borderColor,
                color: a.disabled.color
            } : {}, j);
            g && k != null && (j = babelHelpers["extends"]({}, j, k));
            if (d) {
                p = b("SUIErrorComponentUtil").getErrorIcon(this.props, c, "_483q");
                g = b("Locale").isRTL() ? "paddingLeft" : "paddingRight";
                j = babelHelpers["extends"]({}, j, (k = {
                    borderColor: b("SUIErrorComponentUtil").getErrorBorderColor(this.props, c)
                },
                k[g] = 0,
                k))
            }
            d = a != null && a.chevron != null ? h.cloneElement(a.chevron, {
                "aria-hidden": !0,
                className: "_483r monochrome",
                disabled: this.props.disabled
            }) : null;
            c = this.$2(o);
            g = Boolean(this.props.tooltip) || l ? null : {
                "data-hover": "tooltip",
                "data-tooltip-display": "overflow"
            };
            k = h.jsxs("div", {
                className: "_1e",
                children: [this.props.labelIsHidden ? h.jsx("span", {
                    className: "accessible_elem",
                    children: this.props.label
                }) : h.jsx("div", babelHelpers["extends"]({}, g, {
                    className: "_1f",
                    style: c,
                    children: this.props.label
                })), d, p]
            });
            a = i != null && f == null ? this.$1 : f;
            o = i != null && a != null ? i + " " + a : void 0;
            return h.jsx(b("SUIButton.react"), babelHelpers["extends"]({}, e, b("SUIErrorComponentUtil").getErrorTooltipProps(this.props), {
                "aria-haspopup": !0,
                "aria-labelledby": o,
                "aria-pressed": null,
                className_DEPRECATED: b("joinClasses")(this.props.className_DEPRECATED, "_483s" + (this.props.disabled ? " _56jv" : "")),
                id: a,
                isLabelFullWidth: !0,
                label: k,
                labelIsHidden: !1,
                style: j,
                suppressLabelOverflowTooltip: !0,
                suppressed: n,
                uniformOverride: m,
                use: this.props.use
            }))
        }
        ;
        return c
    }(h.PureComponent);
    c.propTypes = babelHelpers["extends"]({}, b("SUIButton_DEPRECATED.react").propTypes, b("SUIErrorComponentUtil").propTypes, {
        isMenuShown: b("prop-types").bool.isRequired,
        styleWhenMenuShown: b("prop-types").object
    });
    c.defaultProps = a;
    d = b("withSUITheme")(c);
    e.exports = d
}
), null);
__d("WheelEventContain.react", ["DOMEventListener", "React"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = null,
            d.$2 = function(a) {
                a && !d.$1 ? d.$1 = b("DOMEventListener").add(a, "wheel", d.$3, {
                    passive: !0
                }) : !a && d.$1 && (d.$1.remove(),
                d.$1 = null)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx("div", babelHelpers["extends"]({}, this.props, {
                ref: this.$2
            }))
        }
        ;
        d.$3 = function(a) {
            a.stopPropagation()
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("SUIAbstractMenu.react", ["cx", "AccessibleLayer", "AlignmentEnum", "ContextualLayer.react", "ContextualLayerAlignmentEnum", "ContextualLayerAutoFlip", "ContextualLayerHideOnScrollOut", "ContextualLayerPositionEnum", "ContextualLayerUpdateOnScroll", "LayerFitHeightToScreen", "LayerHideOnBlur", "LayerHideOnEscape", "LayerTabIsolation", "React", "ReactDOM", "RTLKeys", "ScrollableArea.react", "Style", "SUIErrorComponentUtil", "SUIFocusUtil", "SUIPropTypes", "SUISelectorButton.react", "SUITheme", "WheelEventContain.react", "getActiveElement", "prop-types", "uniqueID", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 400
      , j = {
        AccessibleLayer: b("AccessibleLayer"),
        LayerFitHeightToScreen: b("LayerFitHeightToScreen"),
        LayerHideOnEscape: b("LayerHideOnEscape"),
        LayerTabIsolation: b("LayerTabIsolation"),
        ContextualLayerAutoFlip: b("ContextualLayerAutoFlip"),
        ContextualLayerHideOnScrollOut: b("ContextualLayerHideOnScrollOut"),
        ContextualLayerUpdateOnScroll: b("ContextualLayerUpdateOnScroll")
    };
    a = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").defaultProps, {
        buttonTextAlign: "left",
        buttonUse: "default",
        contextualLayerBehaviors: {},
        disabled: !1,
        display: "block",
        dropdownWidth: "auto",
        labelIsHidden: !1,
        maxHeight: 250,
        menuAlignment: "left",
        menuPosition: "below",
        shouldHideOnBlur: !0,
        shouldHideOnMouseLeave: !1,
        shouldOpenAutomatically: !1,
        suppressed: !1,
        width: "auto"
    });
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = h.createRef(),
            d.$6 = b("uniqueID")(),
            d.state = {
                isMenuShown: !1,
                prevShouldOpenAutomatically: !1
            },
            d.hideMenu = function() {
                if (d.state.isMenuShown) {
                    var a = d.$9();
                    d.setState({
                        isMenuShown: !1
                    }, function() {
                        a && d.focusInput(),
                        d.props.onClose && d.props.onClose()
                    })
                }
            }
            ,
            d.$10 = function(a) {
                switch (a.keyCode) {
                case b("RTLKeys").DOWN:
                case b("RTLKeys").UP:
                case b("RTLKeys").SPACE:
                case b("RTLKeys").RETURN:
                    a.preventDefault();
                    d.showMenu();
                    break
                }
            }
            ,
            d.$11 = function(a) {
                switch (a.keyCode) {
                case b("RTLKeys").TAB:
                    d.hideMenu();
                    break
                }
            }
            ,
            d.$12 = function(a) {
                a ? d.showMenu() : d.hideMenu()
            }
            ,
            d.$13 = function() {
                d.$7 && window.clearTimeout(d.$7),
                d.props.onMouseEntersMenu && d.props.onMouseEntersMenu()
            }
            ,
            d.$14 = function() {
                d.props.shouldHideOnMouseLeave && (d.$7 = window.setTimeout(d.hideMenu, i)),
                d.props.onMouseLeavesMenu && d.props.onMouseLeavesMenu()
            }
            ,
            d.$15 = function(a) {
                !d.state.isMenuShown ? d.showMenu() : d.hideMenu(),
                d.props.onButtonClick && d.props.onButtonClick(a)
            }
            ,
            d.$16 = function(a) {
                d.$2 = a ? b("ReactDOM").findDOMNode(a) : null
            }
            ,
            d.$17 = function(a) {
                d.$3 = a ? b("ReactDOM").findDOMNode(a) : null
            }
            ,
            d.$18 = function(a) {
                d.$5 = a
            }
            ,
            d.$19 = function(a) {
                d.$4 = a
            }
            ,
            d.$20 = function() {
                return d.$2
            }
            ,
            d.$22 = function(a) {
                d.setState({
                    layerCalculatedMaxHeight: a.height
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getDerivedStateFromProps = function(a, b) {
            a = a.shouldOpenAutomatically === !0;
            b = b.prevShouldOpenAutomatically;
            return a !== b ? {
                prevShouldOpenAutomatically: a,
                isMenuShown: a
            } : null
        }
        ;
        var d = c.prototype;
        d.componentDidMount = function() {
            !this.props.disabled && this.props.shouldOpenAutomatically && this.$8()
        }
        ;
        d.componentDidUpdate = function() {
            var a = this.$1.current
              , c = this.$3;
            if (this.state.isMenuShown && a && c) {
                a = b("Style").get(a, "width");
                var d = this.props.dropdownWidth;
                c.style.minWidth = a;
                c.style.width = d === "sameAsSelector" ? a : typeof d === "number" ? d + "px" : d;
                this.$5 && this.$5.layer && this.$5.layer.updatePosition()
            }
        }
        ;
        d.focusInput = function() {
            this.$2 && b("SUIFocusUtil").setFocus(this.$2)
        }
        ;
        d.showMenu = function() {
            var a = this;
            !this.props.disabled && !this.state.isMenuShown && this.setState({
                isMenuShown: !0
            }, function() {
                a.$8()
            })
        }
        ;
        d.$8 = function() {
            if (this.props.maxHeight && this.$4) {
                var a = this.$4.getArea();
                a && a.resize && a.resize()
            }
            this.props.onOpen && this.props.onOpen()
        }
        ;
        d.$9 = function() {
            var a = b("getActiveElement")()
              , c = this.$1.current;
            if (c && c.contains(a))
                return !0;
            c = this.$5 && b("ReactDOM").findDOMNode(this.$5);
            return c && c.contains(a) ? !0 : !1
        }
        ;
        d.$21 = function() {
            var a = this.state.layerCalculatedMaxHeight
              , b = this.props.maxHeight;
            a = a != null ? Math.min(b, a - 2) : b;
            return a
        }
        ;
        d.render = function() {
            var a = this.props.labelledBy && this.props.id == null ? this.$6 : this.props.id
              , c = this.props.labelledBy && a != null ? this.props.labelledBy + " " + a : void 0;
            c = babelHelpers["extends"]({
                "aria-labelledby": c,
                "aria-controls": this.props.menuID,
                "data-testid": "SUIAbstractMenu/button",
                disabled: this.props.disabled,
                errorMessage: this.props.errorMessage,
                errorTooltipPosition: this.props.errorTooltipPosition,
                id: a,
                label: this.props.label,
                labelIsHidden: this.props.labelIsHidden,
                margin: this.props.margin,
                maxWidth: this.props.maxWidth,
                name: this.props.name,
                suppressed: this.props.suppressed,
                theme: this.props.theme,
                tooltip: this.props.tooltip,
                use: this.props.buttonUse,
                warningMessage: this.props.warningMessage,
                width: this.props.width,
                onMouseEnter: this.props.onMouseEnter,
                onMouseLeave: this.props.onMouseLeave
            }, this.props.button && this.props.button.props, {
                isDepressed: this.state.isMenuShown,
                isMenuShown: this.state.isMenuShown,
                onClick: this.$15,
                onKeyDown: this.$10,
                ref: this.$16
            });
            a = this.props.button ? h.cloneElement(this.props.button, c) : h.jsx(b("SUISelectorButton.react"), babelHelpers["extends"]({}, c, {
                borderedSides: this.props.buttonBorderedSides,
                "data-testid": void 0,
                height: this.props.buttonHeight,
                roundedCorners: this.props.buttonRoundedCorners,
                textAlign: this.props.buttonTextAlign
            }));
            c = babelHelpers["extends"]({}, this.props.style, {
                display: this.props.display,
                width: this.props.width
            });
            this.props.maxWidth != null && (c.maxWidth = this.props.maxWidth);
            return h.jsxs("div", {
                className: this.props.className_DEPRECATED,
                "data-testid": void 0,
                ref: this.$1,
                style: c,
                children: [a, this.state.isMenuShown ? h.jsx(b("ContextualLayer.react"), {
                    alignment: this.props.menuAlignment,
                    behaviors: babelHelpers["extends"]({}, j, this.props.shouldHideOnBlur ? {
                        LayerHideOnBlur: b("LayerHideOnBlur")
                    } : {}, this.props.contextualLayerBehaviors),
                    contextRef: this.$20,
                    offsetY: this.props.offsetY,
                    onResize: this.$22,
                    onToggle: this.$12,
                    position: this.props.menuPosition,
                    ref: this.$18,
                    shouldSetARIAProperties: !1,
                    shown: !0,
                    children: h.jsx(b("WheelEventContain.react"), {
                        className: "_z4i",
                        "data-testid": void 0,
                        onKeyDown: this.$11,
                        onMouseEnter: this.$13,
                        onMouseLeave: this.$14,
                        ref: this.$17,
                        style: this.props.menuContainerStyle,
                        children: h.jsx(b("ScrollableArea.react"), {
                            fade: !0,
                            maxHeight: this.$21(),
                            ref: this.$19,
                            children: this.props.menu
                        })
                    })
                }) : null]
            })
        }
        ;
        return c
    }(h.PureComponent);
    c.propTypes = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").propTypes, {
        button: (d = b("prop-types")).element,
        buttonBorderedSides: d.arrayOf(d.oneOf(["top", "right", "bottom", "left"])),
        buttonHeight: d.oneOf(["normal", "tall", "short"]),
        buttonRoundedCorners: d.arrayOf(d.oneOf(["topLeft", "topRight", "bottomRight", "bottomLeft"])),
        buttonTextAlign: b("AlignmentEnum").propType.isRequired,
        buttonUse: b("SUISelectorButton.react").propTypes.use,
        contextualLayerBehaviors: d.object.isRequired,
        disabled: d.bool.isRequired,
        dropdownWidth: b("SUIPropTypes").dropdownWidth,
        margin: d.string,
        maxHeight: d.number.isRequired,
        maxWidth: d.oneOfType([d.string, d.number]),
        menuAlignment: b("ContextualLayerAlignmentEnum").propType.isRequired,
        menuPosition: b("ContextualLayerPositionEnum").propType.isRequired,
        shouldHideOnMouseLeave: d.bool.isRequired,
        shouldOpenAutomatically: d.bool.isRequired,
        style: d.object,
        suppressed: d.bool.isRequired,
        theme: d.instanceOf(b("SUITheme")),
        width: b("SUIPropTypes").width
    });
    c.defaultProps = a;
    f = b("withSUITheme")(c);
    e.exports = f
}
), null);
__d("SUIDropdownMenuContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        menuAlignment: void 0,
        renderButton: void 0
    });
    e.exports = c
}
), null);
__d("SUIDropdownMenu.react", ["AlignmentEnum", "ContextualLayerAlignmentEnum", "React", "SUIAbstractMenu.react", "SUIActionMenu.react", "SUIDropdownMenuContext", "SUIPropTypes", "SUISelectorButton.react", "SUITheme", "prop-types", "uniqueID", "withSUITheme"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = {
        buttonTextAlign: "left",
        buttonUse: "default",
        contextualLayerBehaviors: {},
        disabled: !1,
        dropdownWidth: "auto",
        labelIsHidden: !1,
        maxHeight: 250,
        menuPosition: "below",
        shouldHideOnBlur: !0,
        shouldHideOnMouseLeave: !1,
        suppressed: !1,
        width: "auto"
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$2 = !1,
            d.$3 = b("uniqueID")(),
            d.$4 = function() {
                d.$2 && d.$1 && d.props.shouldHideOnClick !== !1 && d.$1.hideMenu()
            }
            ,
            d.$5 = function(a) {
                d.$1 = a
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$2 = !0
        }
        ;
        d.componentWillUnmount = function() {
            this.$2 = !1
        }
        ;
        d.focusMenuButton = function() {
            this.$1 && this.$1.focusInput()
        }
        ;
        d.showMenu = function() {
            this.$1 && this.$1.showMenu()
        }
        ;
        d.hideMenu = function() {
            this.$1 && this.$1.hideMenu()
        }
        ;
        d.render = function() {
            var a = this
              , c = b("SUITheme").get(this).SUIDropdownMenu
              , d = {
                borderRadius: c.borderRadius,
                boxShadow: c.boxShadow
            };
            return g.jsx(b("SUIDropdownMenuContext").Consumer, {
                children: function(e) {
                    var f;
                    f = (f = (f = a.props.menuAlignment) != null ? f : e.menuAlignment) != null ? f : "left";
                    e = e.renderButton != null ? e.renderButton(a.props) : a.props.button;
                    return g.jsx(b("SUIAbstractMenu.react"), {
                        button: e,
                        buttonBorderedSides: a.props.buttonBorderedSides,
                        buttonRoundedCorners: a.props.buttonRoundedCorners,
                        buttonTextAlign: a.props.buttonTextAlign,
                        buttonUse: a.props.buttonUse,
                        contextualLayerBehaviors: a.props.contextualLayerBehaviors,
                        "data-menu-testid": a.props["data-menu-testid"],
                        "data-testid": void 0,
                        disabled: a.props.disabled,
                        display: "inline-block",
                        dropdownWidth: a.props.dropdownWidth,
                        id: a.props.id,
                        label: a.props.label,
                        labelIsHidden: a.props.labelIsHidden,
                        margin: a.props.margin,
                        maxHeight: a.props.maxHeight,
                        maxWidth: a.props.maxWidth,
                        menu: a.props.menu ? g.cloneElement(a.props.menu, {
                            focusFirstElementOnMount: !0,
                            focusItemOnMount: a.props.focusItemOnMount,
                            id: a.$3,
                            items: a.props.items,
                            onItemClick: a.$4,
                            theme: a.props.theme
                        }) : g.jsx(b("SUIActionMenu.react"), {
                            focusFirstElementOnMount: !0,
                            id: a.$3,
                            items: a.props.items,
                            onItemClick: a.$4,
                            theme: a.props.theme
                        }),
                        menuAlignment: f,
                        menuContainerStyle: d,
                        menuID: a.$3,
                        menuPosition: a.props.menuPosition,
                        name: a.props.name,
                        offsetY: c.offsetY,
                        onButtonClick: a.props.onMenuButtonClick,
                        onClose: a.props.onClose,
                        onMouseEnter: a.props.onMouseEnter,
                        onMouseEntersMenu: a.props.onMouseEntersMenu,
                        onMouseLeave: a.props.onMouseLeave,
                        onMouseLeavesMenu: a.props.onMouseLeavesMenu,
                        onOpen: a.props.onOpen,
                        ref: a.$5,
                        shouldHideOnBlur: a.props.shouldHideOnBlur,
                        shouldHideOnClick: a.props.shouldHideOnClick,
                        shouldHideOnMouseLeave: a.props.shouldHideOnMouseLeave,
                        shouldOpenAutomatically: a.props.shouldOpenAutomatically,
                        suppressed: a.props.suppressed,
                        theme: a.props.theme,
                        tooltip: a.props.tooltip,
                        width: a.props.width
                    })
                }
            })
        }
        ;
        return c
    }(g.PureComponent);
    c.propTypes = {
        button: (d = b("prop-types")).element,
        buttonBorderedSides: d.arrayOf(d.oneOf(["top", "right", "bottom", "left"])),
        buttonRoundedCorners: d.arrayOf(d.oneOf(["topLeft", "topRight", "bottomRight", "bottomLeft"])),
        buttonTextAlign: b("AlignmentEnum").propType.isRequired,
        buttonUse: b("SUISelectorButton.react").propTypes.use,
        contextualLayerBehaviors: d.object.isRequired,
        disabled: d.bool.isRequired,
        dropdownWidth: b("SUIPropTypes").dropdownWidth,
        margin: d.string,
        maxHeight: d.number.isRequired,
        maxWidth: d.oneOfType([d.string, d.number]),
        menu: d.element,
        menuAlignment: b("ContextualLayerAlignmentEnum").propType,
        menuPosition: b("SUIAbstractMenu.react").propTypes.menuPosition,
        shouldHideOnMouseLeave: d.bool.isRequired,
        suppressed: d.bool.isRequired,
        theme: d.instanceOf(b("SUITheme")),
        width: b("SUIPropTypes").width
    };
    c.defaultProps = a;
    f = b("withSUITheme")(c);
    e.exports = f
}
), null);
__d("getSUIDropdownMenuUniform.fds", ["cssVar", "FDSPrivateThemeUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = {
            borderRadius: 2,
            boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)",
            offsetY: 0
        };
        b("FDSPrivateThemeUtils").isGeo(a) && (c.borderRadius = a.borderRadius.container,
        c.boxShadow = a.elevation.depth2,
        c.offsetY = a.dropdown.offsetY);
        return c
    }
}
), null);
__d("FDSDropdownMenu.react", ["fbt", "FDSButton.react", "FDSDropdownButton.react", "FDSEllipsisButton.react", "FDSMenu.react", "FDSPrivateDropdownMenuContext", "FDSPrivateThemeContext.react", "React", "SUIDropdownMenu.react", "getSUIDropdownMenuUniform.fds", "makeFDSStandardComponent", "makeSUIThemeGetter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("makeSUIThemeGetter")({
        SUIDropdownMenu: b("getSUIDropdownMenuUniform.fds")
    })
      , j = function(a) {
        return a === "flat" ? a : "default"
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.$1 = function(a, c) {
            var d, e, f = a.labelIsHidden === !0;
            d = (d = a.labelIsHidden) != null ? d : this.props.labelIsHidden;
            e = (e = a.size) != null ? e : this.props.buttonSize;
            a = (a = a.use) != null ? a : this.props.buttonUse;
            if (this.props.fdsOverride_isChevronHidden && !f)
                return h.jsx(b("FDSButton.react"), {
                    borderedSides: this.props.buttonBorderedSides,
                    icon: this.props.buttonIcon,
                    isDisabled: c,
                    label: this.props.label,
                    labelIsHidden: d,
                    roundedCorners: this.props.buttonRoundedCorners,
                    size: e,
                    textAlign: this.props.buttonTextAlign,
                    use: a,
                    width: this.props.width
                });
            return this.props.useEllipsisIcon && !f ? h.jsx(b("FDSEllipsisButton.react"), {
                borderedSides: this.props.buttonBorderedSides,
                isDisabled: c,
                label: this.props.label,
                roundedCorners: this.props.buttonRoundedCorners,
                size: e,
                use: j(a),
                width: this.props.width
            }) : h.jsx(b("FDSDropdownButton.react"), {
                borderedSides: this.props.buttonBorderedSides,
                icon: f ? null : this.props.buttonIcon,
                isDisabled: c,
                label: this.props.label,
                labelIsHidden: d,
                roundedCorners: this.props.buttonRoundedCorners,
                size: e,
                textAlign: this.props.buttonTextAlign,
                use: a,
                width: this.props.width
            })
        }
        ;
        d.render = function() {
            var a = this;
            return h.jsx(b("FDSPrivateThemeContext.react").Consumer, {
                children: function(c) {
                    return h.jsx(b("FDSPrivateDropdownMenuContext").Consumer, {
                        children: function(d) {
                            var e = i(c)
                              , f = d.isDisabled === !0 || a.props.isDisabled === !0;
                            return h.jsx(b("SUIDropdownMenu.react"), {
                                button: a.$1(d, f),
                                buttonBorderedSides: a.props.buttonBorderedSides,
                                buttonRoundedCorners: a.props.buttonRoundedCorners,
                                contextualLayerBehaviors: a.props.contextualLayerBehaviors,
                                "data-menu-testid": a.props["data-menu-testid"],
                                "data-testid": void 0,
                                disabled: f,
                                dropdownWidth: a.props.dropdownWidth,
                                focusItemOnMount: a.props.focusItemOnMount,
                                id: a.props.id,
                                items: a.props.items,
                                label: a.props.label,
                                margin: a.props.margin,
                                maxHeight: a.props.maxHeight,
                                maxWidth: a.props.maxWidth,
                                menu: h.jsx(b("FDSMenu.react"), {
                                    items: a.props.items
                                }),
                                menuAlignment: (f = (f = a.props.menuAlignment) != null ? f : d.menuAlignment) != null ? f : "left",
                                menuPosition: a.props.menuPosition,
                                name: a.props.name,
                                onClose: a.props.onClose,
                                onMenuButtonClick: a.props.onMenuButtonClick,
                                onMouseEnter: a.props.onMouseEnter,
                                onMouseEntersMenu: a.props.onMouseEntersMenu,
                                onMouseLeave: a.props.onMouseLeave,
                                onMouseLeavesMenu: a.props.onMouseLeavesMenu,
                                onOpen: a.props.onOpen,
                                shouldHideOnBlur: a.props.shouldHideOnBlur,
                                shouldHideOnClick: a.props.shouldHideOnClick,
                                shouldHideOnMouseLeave: a.props.shouldHideOnMouseLeave,
                                shouldOpenAutomatically: a.props.shouldOpenAutomatically,
                                theme: e,
                                tooltip: a.props.tooltip,
                                width: a.props.width
                            })
                        }
                    })
                }
            })
        }
        ;
        return c
    }(h.PureComponent);
    a.defaultProps = {
        buttonSize: "medium",
        buttonUse: "default",
        contextualLayerBehaviors: {},
        dropdownWidth: "auto",
        isDisabled: !1,
        label: g._("M\u1edf menu th\u1ea3 xu\u1ed1ng"),
        labelIsHidden: !1,
        maxHeight: 250,
        menuPosition: "below",
        shouldHideOnBlur: !0,
        shouldHideOnMouseLeave: !1,
        width: "auto",
        useEllipsisIcon: !1,
        fdsOverride_isChevronHidden: !1
    };
    c = b("makeFDSStandardComponent")("FDSDropdownMenu", a);
    e.exports = c
}
), null);
__d("getSUIDropdownSelectorOptionGroupUniform.fds", ["ix", "cssVar", "FDSPrivateTypeStyles", "React", "SUIGlyphIcon.react", "asset"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        a = b("FDSPrivateTypeStyles").createTypeStyleGetter(a);
        return {
            activeBackgroundColor: "#DADDE1",
            activeColor: "#1C1E21",
            collapsedIcon: i.jsx(b("SUIGlyphIcon.react"), {
                srcDefault: g("496752")
            }),
            color: "#1C1E21",
            expandedIcon: i.jsx(b("SUIGlyphIcon.react"), {
                srcDefault: g("504839")
            }),
            highlightedBackgroundColor: "#F5F6F7",
            highlightedColor: "#1C1E21",
            typeStyle: a({
                color: "#1C1E21",
                fontSize: "12px",
                fontWeight: "bold"
            })
        }
    }
}
), null);
__d("SUIDropdownSelectorOptionGroupUniform.fds", ["FDSPrivateThemeAtomsClassic", "getSUIDropdownSelectorOptionGroupUniform.fds"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getSUIDropdownSelectorOptionGroupUniform.fds")(b("FDSPrivateThemeAtomsClassic"));
    e.exports = a
}
), null);
__d("SUISelectorOptionGroup.react", ["cx", "Focus", "KeyStatus", "React", "RTLKeys", "SUITheme", "VirtualCursorStatus", "emptyFunction", "joinClasses", "nullthrows", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = {
        canSelectMultiple: !1,
        isCollapsible: !0,
        isExpandedInitially: !1,
        setupFocusRef: b("emptyFunction")
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$5 = function() {
                for (var a = d.$2, c = Array.isArray(a), e = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var f;
                    if (c) {
                        if (e >= a.length)
                            break;
                        f = a[e++]
                    } else {
                        e = a.next();
                        if (e.done)
                            break;
                        f = e.value
                    }
                    f = f;
                    f = f[1];
                    var g = f.ref;
                    f = f.selected;
                    if (f) {
                        b("Focus").set(g);
                        return
                    }
                }
                f = b("nullthrows")(d.$2.get(0)).ref;
                b("Focus").set(f)
            }
            ;
            d.$6 = function() {
                d.setState({
                    isActive: !1,
                    showFocusRing: !1
                })
            }
            ;
            d.$7 = function() {
                (b("KeyStatus").isKeyDown() || b("VirtualCursorStatus").isVirtualCursorTriggered()) && d.setState({
                    showFocusRing: !0
                })
            }
            ;
            d.$8 = function() {
                d.setState(function(a) {
                    return {
                        isExpanded: !a.isExpanded
                    }
                }, function() {
                    d.state.isExpanded && d.$5()
                })
            }
            ;
            d.$9 = function(a) {
                d.props.onKeyDown && d.props.onKeyDown(a);
                switch (a.keyCode) {
                case b("RTLKeys").RETURN:
                case b("RTLKeys").SPACE:
                case b("RTLKeys").getRight():
                    a.preventDefault();
                    d.setState({
                        isExpanded: !0
                    }, d.$5);
                    break
                }
            }
            ;
            d.$10 = function() {
                d.setState({
                    isActive: !0
                })
            }
            ;
            d.$11 = function() {
                d.setState({
                    isHovering: !0
                })
            }
            ;
            d.$12 = function() {
                d.setState({
                    isHovering: !1
                })
            }
            ;
            d.$13 = function() {
                d.setState({
                    isActive: !1
                })
            }
            ;
            d.$16 = function(a, b, c) {
                d.$2.set(a, {
                    ref: b,
                    selected: c
                }),
                d.props.isCollapsible || d.props.setupFocusRef(b, a, c)
            }
            ;
            d.$17 = function(a) {
                d.$1 = a,
                d.props.setupFocusRef(a, 0, d.props.selected)
            }
            ;
            d.state = {
                isActive: !1,
                isExpanded: d.$3() || c.isExpandedInitially,
                isHovering: !1,
                showFocusRing: !1
            };
            d.$2 = new Map();
            return d
        }
        var d = c.prototype;
        d.$3 = function() {
            return h.Children.toArray(this.props.children).some(function(a) {
                return a.props.selected
            })
        }
        ;
        d.$4 = function() {
            var a = this;
            this.setState({
                isExpanded: !1
            }, function() {
                b("Focus").set(a.$1)
            })
        }
        ;
        d.$14 = function(a) {
            var c = this;
            return !this.props.isCollapsible && this.props.onSubItemSelect ? this.props.onSubItemSelect(a) : function(d) {
                switch (d.keyCode) {
                case b("RTLKeys").UP:
                    d.preventDefault();
                    c.$15(a - 1);
                    break;
                case b("RTLKeys").DOWN:
                    d.preventDefault();
                    c.$15(a + 1);
                    break;
                case b("RTLKeys").ESC:
                case b("RTLKeys").getLeft():
                    d.preventDefault();
                    c.$4();
                    break
                }
            }
        }
        ;
        d.$15 = function(a) {
            var c = 0;
            a >= this.$2.size ? c = 0 : a < 0 && (c = this.$2.size - 1);
            a = b("nullthrows")(this.$2.get(c)).ref;
            b("Focus").set(a)
        }
        ;
        d.render = function() {
            var a = this
              , c = h.Children.map(this.props.children, function(b, c) {
                return b ? h.cloneElement(b, {
                    canSelectMultiple: a.props.canSelectMultiple,
                    hasSelectedValue: !0,
                    onKeyDown: a.$14(c),
                    onSelect: function() {
                        if (a.props.onSelect != null) {
                            var c;
                            (c = a.props).onSelect.apply(c, arguments)
                        }
                        if (b.props.onSelect != null) {
                            var d;
                            (d = b.props).onSelect.apply(d, arguments)
                        }
                    },
                    setupFocusRef: function(d) {
                        a.$16(c, d, !!b.props.selected)
                    },
                    theme: a.props.theme
                }) : null
            })
              , d = b("SUITheme").get(this).SUISelectorOptionGroup
              , e = this.state
              , f = e.isActive
              , g = e.isHovering;
            e = e.showFocusRing;
            var i;
            f ? i = d.activeBackgroundColor : (g || e) && (i = d.highlightedBackgroundColor);
            f ? f = d.activeColor : g || e ? f = d.highlightedColor : f = d.color;
            g = null;
            e = !0;
            this.props.isCollapsible && (g = this.state.isExpanded ? d.expandedIcon : d.collapsedIcon,
            e = this.state.isExpanded);
            var j = this.props.isCollapsible ? {
                "aria-haspopup": !0,
                onBlur: this.$6,
                onClick: this.$8,
                onFocus: this.$7,
                onKeyDown: this.$9,
                onMouseDown: this.$10,
                onMouseEnter: this.$11,
                onMouseLeave: this.$12,
                onMouseUp: this.$13,
                ref: this.$17,
                role: "menuitem"
            } : null;
            return h.jsxs("li", {
                className: this.props.className,
                "data-testid": void 0,
                children: [h.jsxs("a", babelHelpers["extends"]({}, j, {
                    className: "_3vsz" + (this.state.showFocusRing ? "" : " _2eyk") + (this.props.isCollapsible ? " _4ck5" : ""),
                    "data-testid": void 0,
                    href: "#",
                    style: babelHelpers["extends"]({}, d.typeStyle, {
                        backgroundColor: i,
                        color: f
                    }),
                    tabIndex: -1,
                    children: [h.jsx("span", {
                        className: "_4ki-",
                        children: this.props.label
                    }), g != null && h.cloneElement(g, {
                        "aria-hidden": !0,
                        className: b("joinClasses")("_3vsv", g.props.className)
                    })]
                })), h.jsx("ul", {
                    role: "menu",
                    children: e ? c : null
                })]
            })
        }
        ;
        return c
    }(h.PureComponent);
    c.propTypes = {
        canSelectMultiple: (d = b("prop-types")).bool,
        className: d.string,
        isCollapsible: d.bool.isRequired,
        label: d.oneOfType([d.node, d.string]).isRequired,
        onKeyDown: d.func,
        onSelect: d.func,
        onSubItemSelect: d.func,
        selected: d.bool,
        setupFocusRef: d.func,
        theme: d.instanceOf(b("SUITheme"))
    };
    c.defaultProps = a;
    f = b("withSUITheme")(c);
    e.exports = f
}
), null);
__d("FDSDropdownSelectorOptionGroup.react", ["React", "SUIDropdownSelectorOptionGroupUniform.fds", "SUISelectorOptionGroup.react", "emptyFunction", "makeFDSStandardComponent", "makeSUIFDSPrivateTheme"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIFDSPrivateTheme")("FDSDropdownSelectorOptionGroup", {
        SUISelectorOptionGroup: b("SUIDropdownSelectorOptionGroupUniform.fds")
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("SUISelectorOptionGroup.react"), {
                canSelectMultiple: this.props.canSelectMultiple,
                "data-testid": void 0,
                isCollapsible: this.props.isCollapsible,
                isExpandedInitially: this.props.isExpandedInitially,
                label: this.props.label,
                onKeyDown: this.props.onKeyDown,
                onSelect: this.props.onSelect,
                onSubItemSelect: this.props.onSubItemSelect,
                selected: this.props.selected,
                setupFocusRef: this.props.setupFocusRef,
                theme: h,
                children: this.props.children
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.defaultProps = {
        canSelectMultiple: !1,
        isCollapsible: !0,
        isExpandedInitially: !1,
        setupFocusRef: b("emptyFunction")
    };
    c = b("makeFDSStandardComponent")("FDSDropdownSelectorOptionGroup", a);
    e.exports = c
}
), null);
__d("SUISelectorSeparator.react", ["cx", "React", "SUITheme", "joinClasses", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("SUITheme").get(this).SUISelectorSeparator;
            return h.jsx("li", {
                className: b("joinClasses")("_2drl", this.props.className),
                style: {
                    backgroundColor: a.color,
                    marginBottom: a.margin.bottom,
                    marginLeft: a.margin.left,
                    marginRight: a.margin.right,
                    marginTop: a.margin.top
                }
            })
        }
        ;
        return c
    }(h.PureComponent);
    a.propTypes = {
        theme: b("prop-types").instanceOf(b("SUITheme"))
    };
    c = b("withSUITheme")(a);
    e.exports = c
}
), null);
__d("SUISelector.react", ["cx", "fbt", "AlignmentEnum", "React", "ReactSelectorUtils", "RTLKeys", "SUIAbstractMenu.react", "SUIErrorComponentUtil", "SUIFocusUtil", "SUIPropTypes", "SUISelectorOptionGroup.react", "SUISelectorSeparator.react", "SUITheme", "first", "firstx", "flatMapArray", "lastx", "prop-types", "uniqueID", "withSUITheme"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").defaultProps, {
        buttonTextAlign: "left",
        canCollapseGroups: !0,
        canSelectMultiple: !1,
        contextualLayerBehaviors: {},
        disabled: !1,
        dropdownWidth: "auto",
        isSuppressed: !1,
        maxHeight: 250,
        menuAlignment: "left",
        menuPosition: "below",
        optionGroupComponentType: b("SUISelectorOptionGroup.react"),
        separatorComponentType: b("SUISelectorSeparator.react"),
        shouldHideOnBlur: !0,
        shouldHideOnMouseLeave: !1,
        width: "auto"
    });
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$3 = b("uniqueID")();
            d.showMenu = function() {
                d.$2 && d.$2.showMenu()
            }
            ;
            d.hideMenu = function() {
                d.$2 && d.$2.hideMenu()
            }
            ;
            d.$7 = function(a, c) {
                c === void 0 && (c = "next");
                var e = d.$1.keys()
                  , f = b("firstx")(e);
                e = b("lastx")(e);
                a > e ? a = f : a < f && (a = e);
                f = d.$1.get(a);
                f ? b("SUIFocusUtil").setFocus(f.ref) : c === "next" ? d.$7(a + 1) : c === "prev" && d.$7(a - 1)
            }
            ;
            d.$10 = function(a, b) {
                var c = d.$5(), e;
                if (d.props.canSelectMultiple) {
                    c = c || [];
                    var f = c.indexOf(a);
                    f > -1 ? (e = c.slice(0),
                    e.splice(f, 1)) : e = c.concat(a)
                } else
                    e = a;
                d.props.onChange && d.props.onChange(e, b);
                d.$4 && !d.props.canSelectMultiple && d.hideMenu()
            }
            ;
            d.$11 = function(a, b, c) {
                d.$1.set(a, {
                    ref: b,
                    selected: c
                })
            }
            ;
            d.$12 = function(a) {
                d.$2 = a
            }
            ;
            d.$13 = function() {
                if (!d.props.value) {
                    var a = b("first")(d.$1.values());
                    a && b("SUIFocusUtil").setFocus(a.ref)
                } else
                    for (var a = d.$1, c = Array.isArray(a), e = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                        var f;
                        if (c) {
                            if (e >= a.length)
                                break;
                            f = a[e++]
                        } else {
                            e = a.next();
                            if (e.done)
                                break;
                            f = e.value
                        }
                        f = f;
                        f = f[1];
                        var g = f.ref;
                        f = f.selected;
                        if (f) {
                            b("SUIFocusUtil").setFocus(g);
                            break
                        }
                    }
                d.props.onOpen && d.props.onOpen()
            }
            ;
            d.$1 = new Map();
            return d
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$4 = !0
        }
        ;
        d.componentWillUnmount = function() {
            this.$4 = !1
        }
        ;
        d.focusInput = function() {
            this.$2 && this.$2.focusInput()
        }
        ;
        d.$5 = function() {
            return this.props.value !== void 0 ? this.props.value : this.props.canSelectMultiple ? [] : void 0
        }
        ;
        d.$6 = function(a) {
            if (this.props.label)
                return this.props.label;
            if (!a.selectedItems.length)
                return this.props.placeholder !== void 0 ? this.props.placeholder : h._("Ch\u01b0a ch\u1ecdn t\u00f9y ch\u1ecdn");
            if (a.selectedItems.length === 1) {
                var b = a.selectedItems[0];
                b = b.props.children;
                return Array.isArray(b) ? b.every(function(a) {
                    return typeof a === "string"
                }) ? b.join("") : i.jsx("span", {
                    children: b
                }) : b
            } else {
                return (b = this.props.multiSelectLabel) != null ? b : h._({
                    "*": "\u0110\u00e3 ch\u1ecdn {number} t\u00f9y ch\u1ecdn",
                    "_1": "\u0110\u00e3 ch\u1ecdn 1 t\u00f9y ch\u1ecdn"
                }, [h._plural(a.selectedItems.length, "number")])
            }
        }
        ;
        d.$8 = function() {
            var a = this, c = this.props, d = j(this, !1, c.separatorComponentType, c.optionGroupComponentType), e = j(this, !0, c.separatorComponentType, c.optionGroupComponentType), f = this.$5(), g, h;
            if (c.canSelectMultiple) {
                var k = b("ReactSelectorUtils").processMultiMenuItems(d, f);
                e = e.map(function(a) {
                    return a.type === c.optionGroupComponentType ? i.cloneElement(a, {
                        children: b("ReactSelectorUtils").processMultiMenuItems(j(a, !0, c.separatorComponentType, c.optionGroupComponentType), f, !0).items
                    }) : a
                });
                var l = b("ReactSelectorUtils").processMultiMenuItems(e, f, !0);
                g = l.items;
                h = k.selectedItems
            } else {
                l = f !== void 0 ? b("ReactSelectorUtils").processMenuItems(d, f, f === null) : {
                    items: d,
                    selectedItems: []
                };
                e = e.map(function(a) {
                    return a.type === c.optionGroupComponentType ? i.cloneElement(a, {
                        children: b("ReactSelectorUtils").processMenuItems(j(a, !0, c.separatorComponentType, c.optionGroupComponentType), f, !0).items
                    }) : a
                });
                k = f !== void 0 ? b("ReactSelectorUtils").processMenuItems(e, f, !0) : {
                    items: e,
                    selectedItems: []
                };
                g = k.items;
                h = l.selectedItem ? [l.selectedItem] : []
            }
            var m = 0;
            g = g.map(function(b, c) {
                var d = m;
                c = i.cloneElement(b, {
                    "data-testid": b.props["data-testid"] || "SUISelector/menuItem",
                    onKeyDown: a.$9(c),
                    onSelect: function() {
                        var c;
                        a.$10.apply(a, arguments);
                        b.props.onSelect && (c = b.props).onSelect.apply(c, arguments)
                    },
                    onSubItemSelect: function(b) {
                        b === void 0 && (b = 0);
                        return function(c) {
                            var e = d + b;
                            a.$9(e)(c)
                        }
                    },
                    role: a.props.canSelectMultiple ? "menuitemcheckbox" : "menuitemradio",
                    setupFocusRef: function(c, e, f) {
                        e === void 0 && (e = 0);
                        f === void 0 && (f = !1);
                        e = d + e;
                        f = a.props.canCollapseGroups ? !!b.props.selected : f;
                        a.$11(e, c, f)
                    },
                    canSelectMultiple: a.props.canSelectMultiple,
                    hasSelectedValue: !!h.length,
                    isCollapsible: a.props.canCollapseGroups,
                    theme: a.props.theme
                });
                !a.props.canCollapseGroups ? m += i.Children.count(c.props.children) : m++;
                return c
            });
            var n = 0;
            d = i.Children.map(this.props.children, function(b) {
                if (b === null)
                    return null;
                if (b.type === a.props.separatorComponentType)
                    return i.cloneElement(b, {
                        theme: a.props.theme
                    });
                b = g[n];
                n += 1;
                return b
            });
            return {
                items: d,
                selectedItems: h
            }
        }
        ;
        d.$9 = function(a) {
            var c = this;
            return function(d) {
                switch (d.keyCode) {
                case b("RTLKeys").UP:
                    d.preventDefault();
                    c.$7(a - 1, "prev");
                    break;
                case b("RTLKeys").DOWN:
                    d.preventDefault();
                    c.$7(a + 1, "next");
                    break;
                case b("RTLKeys").ESC:
                    d.preventDefault();
                    c.hideMenu();
                    break
                }
            }
        }
        ;
        d.render = function() {
            var a, c = b("SUITheme").get(this).SUISelector, d = this.$8();
            a = (a = c.menuBorderRadius) != null ? a : "2px";
            a = {
                backgroundColor: c.backgroundColor,
                border: "solid 1px",
                borderColor: c.borderColor,
                borderRadius: a,
                boxShadow: c.boxShadow
            };
            return i.jsx(b("SUIAbstractMenu.react"), {
                button: this.props.button,
                buttonBorderedSides: this.props.buttonBorderedSides,
                buttonHeight: this.props.buttonHeight,
                buttonRoundedCorners: this.props.buttonRoundedCorners,
                buttonTextAlign: this.props.buttonTextAlign,
                className_DEPRECATED: this.props.className_DEPRECATED,
                contextualLayerBehaviors: this.props.contextualLayerBehaviors,
                "data-menu-testid": this.props["data-menu-testid"],
                "data-testid": void 0,
                disabled: this.props.disabled,
                display: "inline-block",
                dropdownWidth: this.props.dropdownWidth,
                errorMessage: this.props.errorMessage,
                errorTooltipPosition: this.props.errorTooltipPosition,
                id: this.props.id,
                label: this.$6(d),
                labelledBy: this.props.labelledBy,
                margin: this.props.margin,
                maxHeight: this.props.maxHeight,
                maxWidth: this.props.maxWidth,
                menu: i.jsx("ul", {
                    className: "_7yu" + (this.props.dropdownTruncate ? " _8yn-" : ""),
                    "data-testid": void 0,
                    id: this.$3,
                    role: "menu",
                    children: d.items
                }),
                menuAlignment: this.props.menuAlignment,
                menuContainerStyle: a,
                menuID: this.$3,
                menuPosition: this.props.menuPosition,
                name: this.props.name,
                onButtonClick: this.props.onSelectorButtonClick,
                onClose: this.props.onClose,
                onMouseEntersMenu: this.props.onMouseEntersMenu,
                onMouseLeavesMenu: this.props.onMouseLeavesMenu,
                onOpen: this.$13,
                ref: this.$12,
                shouldHideOnBlur: this.props.shouldHideOnBlur,
                shouldHideOnMouseLeave: this.props.shouldHideOnMouseLeave,
                shouldOpenAutomatically: this.props.shouldOpenAutomatically,
                style: this.props.style,
                suppressed: this.props.isSuppressed,
                theme: this.props.theme,
                tooltip: this.props.tooltip,
                warningMessage: this.props.warningMessage,
                width: this.props.width
            })
        }
        ;
        return c
    }(i.PureComponent);
    c.propTypes = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").propTypes, {
        button: (d = b("prop-types")).element,
        buttonBorderedSides: d.arrayOf(d.oneOf(["top", "right", "bottom", "left"])),
        buttonHeight: d.oneOf(["normal", "tall", "short"]),
        buttonRoundedCorners: d.arrayOf(d.oneOf(["topLeft", "topRight", "bottomRight", "bottomLeft"])),
        buttonTextAlign: b("AlignmentEnum").propType.isRequired,
        canCollapseGroups: d.bool.isRequired,
        canSelectMultiple: d.bool.isRequired,
        contextualLayerBehaviors: d.object.isRequired,
        disabled: d.bool.isRequired,
        dropdownWidth: b("SUIPropTypes").dropdownWidth,
        isSuppressed: d.bool.isRequired,
        margin: d.string,
        maxHeight: d.number.isRequired,
        menuAlignment: b("SUIAbstractMenu.react").propTypes.menuAlignment,
        menuPosition: b("SUIAbstractMenu.react").propTypes.menuPosition,
        multiSelectLabel: d.node,
        onChange: d.func.isRequired,
        optionGroupComponentType: d.any.isRequired,
        placeholder: d.node,
        separatorComponentType: d.any.isRequired,
        shouldHideOnMouseLeave: d.bool.isRequired,
        style: d.object,
        theme: d.instanceOf(b("SUITheme")),
        value: d.any,
        width: b("SUIPropTypes").width
    });
    c.defaultProps = a;
    function j(a, c, d, e) {
        a = a.props != null && typeof a.props === "object" ? a.props : {};
        return b("flatMapArray")(i.Children.toArray(a.children), function(a) {
            if (a.type === d)
                return [];
            else if (a.type === e)
                return c ? [a] : [a].concat(j(a, c, d, e));
            else
                return [a]
        })
    }
    f = b("withSUITheme")(c);
    e.exports = f
}
), null);
__d("getSUIDropdownSelectorUniform.fds", ["cssVar"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a() {
        return {
            backgroundColor: "#FFFFFF",
            borderColor: "#DADDE1",
            boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)"
        }
    }
}
), null);
__d("FDSDropdownSelector.react", ["FDSDropdownButton.react", "FDSDropdownSelectorOptionGroup.react", "FDSPrivateThemeContext.react", "React", "SUIErrorComponentUtil", "SUISelector.react", "SUISelectorButton.react", "getSUIButtonUniform.fds", "getSUIDropdownButtonUniform.fds", "getSUIDropdownSelectorUniform.fds", "getSUIErrorUniform.fds", "makeFDSStandardComponent", "makeSUIThemeGetter"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIThemeGetter")({
        SUISelector: b("getSUIDropdownSelectorUniform.fds"),
        SUIButton: b("getSUIButtonUniform.fds"),
        SUIError: b("getSUIErrorUniform.fds"),
        SUISelectorButton: b("getSUIDropdownButtonUniform.fds")
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = h(this.context);
            return g.jsx(b("SUISelector.react"), {
                button: this.props.button ? g.cloneElement(this.props.button, {
                    icon: this.props.buttonIcon,
                    isDisabled: this.props.isDisabled,
                    size: this.props.buttonSize,
                    use: this.props.buttonUse
                }) : g.jsx(b("SUISelectorButton.react"), {
                    borderedSides: this.props.buttonBorderedSides,
                    disabled: this.props.isDisabled,
                    height: i(this.props.buttonSize),
                    icon: this.props.buttonIcon,
                    roundedCorners: this.props.buttonRoundedCorners,
                    textAlign: this.props.buttonTextAlign,
                    use: this.props.buttonUse
                }),
                canCollapseGroups: this.props.canCollapseGroups,
                canSelectMultiple: !1,
                contextualLayerBehaviors: (this.props.children,
                this.props.contextualLayerBehaviors),
                "data-menu-testid": this.props["data-menu-testid"],
                "data-testid": void 0,
                disabled: this.props.isDisabled,
                dropdownTruncate: this.props.dropdownTruncate,
                dropdownWidth: this.props.dropdownWidth,
                errorMessage: this.props.errorMessage,
                errorTooltipPosition: this.props.errorTooltipPosition,
                id: this.props.id,
                isSuppressed: this.props.isSuppressed,
                label: this.props.label,
                labelledBy: this.props.labelledBy,
                margin: this.props.margin,
                maxHeight: this.props.maxHeight,
                maxWidth: this.props.maxWidth,
                menuAlignment: this.props.menuAlignment,
                menuPosition: this.props.menuPosition,
                name: this.props.name,
                onChange: this.props.onChange,
                onClose: this.props.onClose,
                onMouseEntersMenu: this.props.onMouseEntersMenu,
                onMouseLeavesMenu: this.props.onMouseLeavesMenu,
                onOpen: this.props.onOpen,
                onSelectorButtonClick: this.props.onSelectorButtonClick,
                optionGroupComponentType: b("FDSDropdownSelectorOptionGroup.react"),
                placeholder: this.props.placeholder,
                shouldHideOnBlur: this.props.shouldHideOnBlur,
                shouldHideOnMouseLeave: this.props.shouldHideOnMouseLeave,
                shouldOpenAutomatically: this.props.shouldOpenAutomatically,
                style: this.props.style,
                theme: a,
                tooltip: this.props.tooltip,
                value: this.props.value,
                warningMessage: this.props.warningMessage,
                width: this.props.width,
                children: this.props.children
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.defaultProps = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").defaultProps, {
        buttonSize: "medium",
        buttonTextAlign: "left",
        buttonUse: "default",
        canCollapseGroups: !0,
        contextualLayerBehaviors: {},
        isDisabled: !1,
        dropdownWidth: "auto",
        isSuppressed: !1,
        maxHeight: 250,
        menuAlignment: "left",
        menuPosition: "below",
        shouldHideOnMouseLeave: !1,
        shouldHideOnBlur: !0,
        width: "auto"
    });
    a.contextType = b("FDSPrivateThemeContext.react");
    function i(a) {
        if (a === "small")
            return "short";
        return a === "large" ? "tall" : "normal"
    }
    c = b("makeFDSStandardComponent")("FDSDropdownSelector", a);
    e.exports = c
}
), null);
__d("getSUIDropdownSelectorOptionUniform.fds", ["ix", "cssVar", "FDSPrivateTypeStyles", "React", "SUIGlyphIcon.react", "asset"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        a = b("FDSPrivateTypeStyles").createTypeStyleGetter(a);
        return {
            activeBackgroundColor: "#DADDE1",
            activeColor: "#1C1E21",
            color: "#1C1E21",
            descriptionColor: "#606770",
            descriptionSelectedColor: "#606770",
            disabledBackgroundColor: "#F5F6F7",
            disabledColor: "#606770",
            highlightedBackgroundColor: "#F5F6F7",
            highlightedColor: "#1C1E21",
            iconMargin: {
                left: "0",
                right: "8px"
            },
            padding: {
                bottom: "6px",
                left: "32px",
                right: "24px",
                top: "6px"
            },
            paddingWhenNoValue: {
                bottom: "6px",
                left: "12px",
                right: "24px",
                top: "6px"
            },
            selectedBackgroundColor: "#ECF3FF",
            selectedColor: "#1C1E21",
            selectedIcon: i.jsx(b("SUIGlyphIcon.react"), {
                srcDefault: g("495838"),
                style: {
                    position: "relative",
                    top: -1
                }
            }),
            selectedIconMarginRight: "8px",
            selectedTypeStyle: a({
                color: "#1C1E21",
                fontSize: "12px",
                fontWeight: "bold"
            }),
            typeStyle: a({
                color: "#1C1E21",
                fontSize: "12px",
                fontWeight: "normal"
            })
        }
    }
}
), null);
__d("SUIDropdownSelectorOptionUniform.fds", ["FDSPrivateThemeAtomsClassic", "getSUIDropdownSelectorOptionUniform.fds"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getSUIDropdownSelectorOptionUniform.fds")(b("FDSPrivateThemeAtomsClassic"));
    e.exports = a
}
), null);
__d("SUIHelpMessage.react", ["cx", "PositionEnum", "React", "SUITheme", "SUITooltip.react", "joinClasses", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = {
        position: "above"
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                isShown: !1
            },
            c.$1 = function(a) {
                c.setState({
                    isShown: a
                }, c.$2)
            }
            ,
            c.$2 = function() {
                c.props.onToggle && c.props.onToggle(c.state.isShown)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("SUITheme").get(this).SUIHelpMessage;
            a = h.cloneElement(a.icon, {
                hover: this.state.isShown
            });
            return h.jsx(b("SUITooltip.react"), {
                className: b("joinClasses")(this.props.className, this.props.margin, "_lx9" + (this.props.margin ? "" : " _3-99")),
                onToggle: this.$1,
                position: this.props.position,
                style: this.props.style,
                theme: this.props.theme,
                tooltip: this.props.value,
                tooltipWidth: this.props.tooltipWidth,
                children: a
            })
        }
        ;
        return c
    }(h.PureComponent);
    c.propTypes = {
        className: (d = b("prop-types")).string,
        margin: d.string,
        position: b("PositionEnum").propType,
        style: d.object,
        theme: d.instanceOf(b("SUITheme")),
        value: d.node.isRequired,
        tooltipWidth: d.oneOfType([d.oneOf(["auto"]), d.number])
    };
    c.defaultProps = a;
    f = b("withSUITheme")(c);
    e.exports = f
}
), null);
__d("SUISelectorOption.react", ["cx", "KeyStatus", "Locale", "React", "RTLKeys", "SUIHelpMessage.react", "SUITheme", "VirtualCursorStatus", "joinClasses", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = {
        canSelectMultiple: !1,
        disabled: !1,
        hasSelectedValue: !1,
        role: "menuitem",
        selected: !1,
        tooltipPosition: "above"
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this) || this;
            c.$2 = function(a) {
                c.$1(a)
            }
            ;
            c.$3 = function() {
                c.setState({
                    isActive: !1,
                    showFocusRing: !1
                })
            }
            ;
            c.$4 = function() {
                (b("KeyStatus").isKeyDown() || b("VirtualCursorStatus").isVirtualCursorTriggered()) && c.setState({
                    showFocusRing: !0
                })
            }
            ;
            c.$5 = function(a) {
                c.props.onKeyDown && c.props.onKeyDown(a);
                switch (a.keyCode) {
                case b("RTLKeys").RETURN:
                case b("RTLKeys").SPACE:
                    c.$1(a);
                    break
                }
            }
            ;
            c.$6 = function() {
                if (c.props.disabled)
                    return;
                c.setState({
                    isActive: !0
                })
            }
            ;
            c.$7 = function(a) {
                if (c.props.disabled)
                    return;
                c.props.onMouseEnter && c.props.onMouseEnter(a);
                c.setState({
                    isHovering: !0
                })
            }
            ;
            c.$8 = function(a) {
                if (c.props.disabled)
                    return;
                c.props.onMouseLeave && c.props.onMouseLeave(a);
                c.setState({
                    isHovering: !1
                })
            }
            ;
            c.state = {
                isActive: !1,
                isHovering: !1,
                showFocusRing: !1
            };
            return c
        }
        var d = c.prototype;
        d.$1 = function(a) {
            a.preventDefault(),
            !this.props.disabled && this.props.onSelect && this.props.onSelect(this.props.value, a)
        }
        ;
        d.render = function() {
            var a = b("SUITheme").get(this).SUISelectorOption
              , c = babelHelpers["extends"]({}, a, this.props.uniformOverride)
              , d = (this.props.hasSelectedValue || this.props.canSelectMultiple) && !(this.props.selected && c.selectedIcon) ? c.padding : c.paddingWhenNoValue
              , e = this.props.selected ? a.selectedTypeStyle : a.typeStyle
              , f = {
                backgroundColor: this.props.disabled && c.disabledBackgroundColor || this.props.selected && c.selectedBackgroundColor || this.state.isActive && c.activeBackgroundColor || (this.state.isHovering || this.state.showFocusRing) && c.highlightedBackgroundColor
            };
            e = babelHelpers["extends"]({}, e, {
                color: this.props.disabled && c.disabledColor || this.props.selected && c.selectedColor || this.state.isActive && c.activeColor || (this.state.isHovering || this.state.showFocusRing) && c.highlightedColor || c.color,
                paddingBottom: d.bottom,
                paddingLeft: b("Locale").isRTL() ? d.right : d.left,
                paddingRight: b("Locale").isRTL() ? d.left : d.right,
                paddingTop: d.top
            });
            d = babelHelpers["extends"]({}, a.typeStyle, {
                color: this.props.selected && c.descriptionSelectedColor || c.descriptionColor
            });
            a = this.props.icon;
            if (a) {
                var g = c.iconMargin;
                g = g === void 0 ? {
                    left: "0",
                    right: "2px"
                } : g;
                a = h.cloneElement(a, {
                    className: b("joinClasses")(a.props.className, "_2kn3"),
                    style: {
                        marginLeft: b("Locale").isRTL() ? g.right : g.left,
                        marginRight: b("Locale").isRTL() ? g.left : g.right
                    }
                })
            }
            var i;
            Boolean(this.props.tooltip) && (i = h.jsx(b("SUIHelpMessage.react"), {
                className: "_2kn7",
                position: this.props.tooltipPosition,
                value: this.props.tooltip
            }));
            return h.jsx("li", {
                className: b("joinClasses")(this.props.disabled ? "_2kn8" : "", this.props.className_DEPRECATED),
                "data-testid": void 0,
                onMouseEnter: this.$7,
                onMouseLeave: this.$8,
                style: f,
                children: h.jsxs("div", {
                    "aria-checked": this.props.selected,
                    "aria-disabled": this.props.disabled,
                    className: "_2wpb" + (this.state.showFocusRing ? "" : " _3v8w"),
                    "data-testid": void 0,
                    onBlur: this.$3,
                    onClick: this.$2,
                    onFocus: this.$4,
                    onKeyDown: this.$5,
                    onMouseDown: this.$6,
                    ref: this.props.setupFocusRef,
                    role: this.props.role,
                    style: e,
                    tabIndex: -1,
                    children: [this.props.selected && Boolean(c.selectedIcon) ? h.cloneElement(c.selectedIcon, {
                        "aria-hidden": this.props.selected,
                        hover: this.state.isHovering,
                        style: babelHelpers["extends"]({}, c.selectedIcon.props.style, {
                            marginLeft: (b("Locale").isRTL() ? c.selectedIconMarginRight : c.selectedIconMarginLeft) || 0,
                            marginRight: (b("Locale").isRTL() ? c.selectedIconMarginLeft : c.selectedIconMarginRight) || 0,
                            flexShrink: 0
                        })
                    }) : null, a, h.jsxs("div", {
                        className: "_3leq",
                        children: [this.props.children, Boolean(this.props.description) ? h.jsx("div", {
                            style: d,
                            children: this.props.description
                        }) : null]
                    }), i]
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    c.propTypes = {
        value: function(a) {
            return a.value === void 0 ? new Error('Required property "value" was not specified in SUISelectorOption.') : null
        },
        canSelectMultiple: (d = b("prop-types")).bool,
        disabled: d.bool.isRequired,
        icon: d.element,
        onKeyDown: d.func,
        onMouseEnter: d.func,
        onMouseLeave: d.func,
        role: d.string.isRequired,
        selected: d.bool,
        theme: d.instanceOf(b("SUITheme")),
        tooltip: d.node,
        uniformOverride: d.object
    };
    c.defaultProps = a;
    f = b("withSUITheme")(c);
    e.exports = f
}
), null);
__d("FDSDropdownSelectorOption.react", ["React", "SUIDropdownSelectorOptionUniform.fds", "SUIHelpMessageUniform.business", "SUISelectorOption.react", "SUITooltipUniform.business", "makeFDSStandardComponent", "makeSUIFDSPrivateTheme"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIFDSPrivateTheme")("FDSDropdownSelectorOption", {
        SUISelectorOption: b("SUIDropdownSelectorOptionUniform.fds"),
        SUIHelpMessage: b("SUIHelpMessageUniform.business"),
        SUITooltip: b("SUITooltipUniform.business")
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("SUISelectorOption.react"), {
                canSelectMultiple: this.props.canSelectMultiple,
                "data-testid": void 0,
                description: this.props.description,
                disabled: this.props.isDisabled,
                hasSelectedValue: this.props.hasSelectedValue,
                icon: this.props.icon,
                onKeyDown: this.props.onKeyDown,
                onMouseEnter: this.props.onMouseEnter,
                onMouseLeave: this.props.onMouseLeave,
                onSelect: this.props.onSelect,
                role: this.props.role,
                selected: this.props.selected,
                setupFocusRef: this.props.setupFocusRef,
                theme: h,
                tooltip: this.props.tooltip,
                tooltipPosition: this.props.tooltipPosition,
                value: this.props.value,
                children: this.props.children
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.defaultProps = {
        canSelectMultiple: !1,
        isDisabled: !1,
        hasSelectedValue: !1,
        role: "menuitem",
        selected: !1,
        tooltipPosition: "above"
    };
    c = b("makeFDSStandardComponent")("FDSDropdownSelectorOption", a);
    e.exports = c
}
), null);
__d("FDSBaseTextArea.react", ["cx", "AbstractTextArea.react", "DOMScroll", "FDSFormUtils", "FDSPrivateInputSelectors", "FDSPrivateThemeAtomsType", "FDSPrivateThemeContext.react", "Image.react", "ObserveResize.react", "React", "ResizeEventHandler", "autoFlipStyleProps", "makeFDSStandardComponent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 4;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                isFocused: !1,
                hasScrollbar: !1
            },
            d.$3 = h.createRef(),
            d.$2 = new (b("ResizeEventHandler"))(function() {
                d.$1()
            }
            ),
            d.$4 = function(a) {
                a = a.target.value;
                d.props.onChange(a)
            }
            ,
            d.$5 = function(a) {
                d.setState({
                    isFocused: !1
                }),
                d.props.onBlur && d.props.onBlur(a)
            }
            ,
            d.$6 = function(a) {
                d.setState({
                    isFocused: !0
                }),
                d.props.onFocus && d.props.onFocus(a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1()
        }
        ;
        d.componentDidUpdate = function(a) {
            this.props.value !== a.value && this.$2.handleEvent()
        }
        ;
        d.componentWillUnmount = function() {
            this.$2.cancel()
        }
        ;
        d.focus = function() {
            this.$3.current && this.$3.current.focusInput()
        }
        ;
        d.blur = function() {
            this.$3.current && this.$3.current.blurInput()
        }
        ;
        d.$1 = function() {
            var a;
            a = (a = this.$3.current) == null ? void 0 : a.getTextFieldDOM();
            a != null && this.setState({
                hasScrollbar: a.clientHeight < a.scrollHeight
            })
        }
        ;
        d.$7 = function(a) {
            if (a) {
                var c = this.state.hasScrollbar ? b("DOMScroll").getScrollbarSize() : 0;
                c = c > 0 ? c + i : null;
                return h.jsx(b("Image.react"), {
                    className: "_7b1r",
                    src: a,
                    style: c != null ? b("autoFlipStyleProps")({
                        right: c
                    }) : void 0
                })
            }
            return null
        }
        ;
        d.render = function() {
            var a = this, c = this.props, d = c.busyIndicator, e = c.describedBy, f = c.dir, g = c.errorMessageId, i = c.hasError, k = c.hasWarning, l = c.htmlForTargetId, m = c.iconSrc, n = c.isDisabled, o = c.isEdited, p = c.isRequired, q = c.isResizable, r = c.isValid, s = c.labelledBy, t = c.maxHeight, u = c.maxLength, v = c.placeholder, w = c.rows, x = c.shouldAutoGrow, y = c.textareaRef, z = c.value, A;
            i ? A = "error" : k ? A = "warning" : r === !0 && (A = "validated");
            var B = m != null || k || i || r != null
              , C = d == null && B || d != null && !B
              , D = d != null && B;
            return h.jsx(b("FDSPrivateThemeContext.react").Consumer, {
                children: function(c) {
                    var E = c.id === b("FDSPrivateThemeAtomsType").FDS_GEODESIC
                      , F = b("FDSPrivateInputSelectors").getTextAreaStyle({
                        isFocused: a.state.isFocused,
                        isDisabled: n,
                        hasError: i,
                        hasWarning: k,
                        isValid: r,
                        isEdited: o,
                        atoms: c
                    });
                    return h.jsx(b("ObserveResize.react"), {
                        onResize: a.$2.handleEvent,
                        children: function(c) {
                            return h.jsxs("span", {
                                className: "_7b1s" + (E ? " _8o1_" : ""),
                                ref: c,
                                style: babelHelpers["extends"]({}, F),
                                children: [h.jsx(b("AbstractTextArea.react"), {
                                    "aria-describedby": e,
                                    "aria-errormessage": g,
                                    "aria-invalid": g ? "true" : "false",
                                    "aria-labelledby": s,
                                    "aria-multiline": !0,
                                    autoGrow: x,
                                    className: "_7b07" + (q ? " _85-s" : "") + (f === "ltr" ? " _8t7e" : "") + (f === "rtl" ? " _8t7f" : "") + (!B && !d ? " _8vmv" : "") + (C ? " _8vmw" : "") + (D ? " _8vmx" : ""),
                                    "data-testid": void 0,
                                    disabled: n,
                                    id: l,
                                    maxLength: u,
                                    onBlur: a.$5,
                                    onChange: a.$4,
                                    onClick: a.props.onClick,
                                    onFocus: a.$6,
                                    onKeyDown: a.props.onKeyDown,
                                    onKeyPress: a.props.onKeyPress,
                                    onKeyUp: a.props.onKeyUp,
                                    placeholder: v,
                                    ref: a.$3,
                                    required: p,
                                    rows: w,
                                    style: {
                                        maxHeight: t
                                    },
                                    textareaRef: y,
                                    useLabel: !1,
                                    value: z
                                }), h.jsx(j, {
                                    busyIndicator: d
                                }), a.$7(b("FDSFormUtils").getIconSrc(A, m))]
                            })
                        }
                    })
                }
            })
        }
        ;
        return c
    }(h.PureComponent);
    a.defaultProps = {
        hasError: !1,
        hasWarning: !1,
        isDisabled: !1,
        isEdited: !1,
        isResizable: !0,
        isValid: null,
        rows: 4,
        shouldAutoGrow: !1
    };
    function j(a) {
        return a.busyIndicator != null ? h.jsx("span", {
            className: "_7mpd",
            children: a.busyIndicator
        }) : null
    }
    c = b("makeFDSStandardComponent")("FDSBaseTextArea", a);
    e.exports = c
}
), null);
__d("UniqueIDProvider.react", ["React", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = b("uniqueID")(),
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return this.props.children(this.$1)
        }
        ;
        return c
    }(a.Component);
    e.exports = c
}
), null);
__d("FDSTextArea.react", ["FDSBaseTextArea.react", "FDSFormInputLayout.react", "FDSPrivateFormCounter.react", "React", "UniqueIDProvider.react", "makeFDSStandardComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c, d;
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++)
                f[h] = arguments[h];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                innerValue: (b = d.props.value) != null ? b : "",
                value: d.props.value
            },
            d.$1 = g.createRef(),
            d.$2 = function(a) {
                d.setState({
                    innerValue: a
                }),
                d.props.onChange(a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getDerivedStateFromProps = function(a, b) {
            if (b.value !== a.value) {
                return {
                    innerValue: (b = a.value) != null ? b : "",
                    value: a.value
                }
            }
            return null
        }
        ;
        var d = c.prototype;
        d.focus = function() {
            this.$1.current && this.$1.current.focus()
        }
        ;
        d.blur = function() {
            this.$1.current && this.$1.current.blur()
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.busyIndicator
              , e = c["data-counter-testid"]
              , f = c.description
              , h = c.dir
              , i = c.errorMessage
              , j = c.iconSrc
              , k = c.isEdited
              , l = c.isDisabled
              , m = c.isOptional
              , n = c.isResizable
              , o = c.isValid
              , p = c.label
              , q = c.labelIsHidden
              , r = c.maxHeight
              , s = c.maxLength
              , t = c.onBlur
              , u = c.onClick
              , v = c.onFocus
              , w = c.onKeyUp
              , x = c.onKeyDown
              , y = c.onKeyPress
              , z = c.placeholder
              , A = c.rows
              , B = c.shouldAutoGrow
              , C = c.textareaRef
              , D = c.tooltipText
              , E = c.warningMessage
              , F = (e = this.props.value) != null ? e : this.state.innerValue
              , G = s != null ? g.jsx(b("FDSPrivateFormCounter.react"), {
                count: F.length,
                "data-testid": void 0,
                limit: s
            }) : null;
            return g.jsx(b("UniqueIDProvider.react"), {
                children: function(c) {
                    return g.jsx(b("FDSFormInputLayout.react"), {
                        description: f,
                        errorMessage: i,
                        infoTooltipText: D,
                        inputId: c,
                        isOptional: m,
                        label: p,
                        labelIsHidden: q,
                        labelSupplementaryContent: G,
                        warningMessage: E,
                        children: function(e) {
                            var f = e.describedBy;
                            e = e.errorMessageId;
                            return g.jsx(b("FDSBaseTextArea.react"), {
                                busyIndicator: d,
                                "data-testid": void 0,
                                describedBy: f,
                                dir: h,
                                errorMessageId: e,
                                hasError: !!i,
                                hasWarning: !!E,
                                htmlForTargetId: c,
                                iconSrc: j,
                                isDisabled: l,
                                isEdited: k,
                                isRequired: m === !1,
                                isResizable: n,
                                isValid: o,
                                maxHeight: r,
                                maxLength: s,
                                onBlur: t,
                                onChange: a.$2,
                                onClick: u,
                                onFocus: v,
                                onKeyDown: x,
                                onKeyPress: y,
                                onKeyUp: w,
                                placeholder: z,
                                ref: a.$1,
                                rows: A,
                                shouldAutoGrow: B,
                                textareaRef: C,
                                value: F
                            })
                        }
                    })
                }
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.defaultProps = {
        isEdited: !1,
        labelIsHidden: !1,
        isDisabled: !1,
        isResizable: !0,
        isValid: null,
        rows: 4,
        shouldAutoGrow: !1
    };
    c = b("makeFDSStandardComponent")("FDSTextArea", a);
    e.exports = c
}
), null);
__d("FDSGuidanceCardIcon.react", ["cx", "FDSGuidanceUtils", "Image.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        return h.jsx(b("Image.react"), {
            className: "_6_zm",
            src: b("FDSGuidanceUtils").getIcon(a.category)
        })
    }
}
), null);
__d("FDSGuidanceCardLayoutContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext("horizontal");
    d = c;
    e.exports = d
}
), null);
__d("FDSGuidanceCard.react", ["cx", "FDSGuidanceCardIcon.react", "FDSGuidanceCardLayoutContext", "FDSGuidanceUtils", "FDSPrivateThemeContext.react", "React", "joinClasses", "makeFDSStandardComponent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var c = a["data-testid"];
        c = a.action;
        var d = a.category
          , e = a.children
          , f = a.layout;
        f = f === void 0 ? "horizontal" : f;
        a = a.margin;
        var g = h.useContext(b("FDSPrivateThemeContext.react"));
        g = b("FDSGuidanceUtils").getCardStyles(g, d, f);
        return h.jsx(b("FDSGuidanceCardLayoutContext").Provider, {
            value: f,
            children: h.jsxs("div", {
                className: b("joinClasses")("_6_-k" + (f === "vertical" ? " _6_zk" : ""), a),
                "data-testid": void 0,
                style: g,
                children: [h.jsx(b("FDSGuidanceCardIcon.react"), {
                    category: d
                }), c, e]
            })
        })
    }
    c = b("makeFDSStandardComponent")("FDSGuidanceCard", a);
    e.exports = c
}
), null);
__d("FDSGuidanceCardContentStackContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(!1);
    d = c;
    e.exports = d
}
), null);
__d("FDSGuidanceCardContent.react", ["cx", "FDSGuidanceCardContentStackContext", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.children;
        a = a.action;
        var d = h.useContext(b("FDSGuidanceCardContentStackContext"));
        return h.jsxs("div", {
            className: "_6_-m" + (d && a != null ? " _6_-n" : "") + (d ? " _6_-o" : ""),
            children: [d ? a : null, c]
        })
    }
}
), null);
__d("makeFDSGuidanceCardContentComponent", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        return function(b) {
            return h.jsx("span", {
                className: "_6_zj",
                children: h.jsx(a, babelHelpers["extends"]({}, b))
            })
        }
    }
}
), null);
__d("FDSGuidanceCardContentText.react", ["FDSText.react", "React", "makeFDSGuidanceCardContentComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        return g.jsx(b("FDSText.react"), {
            color: "primary",
            "data-testid": void 0,
            size: "body3",
            children: a.children
        })
    }
    c = b("makeFDSGuidanceCardContentComponent")(a);
    e.exports = c
}
), null);
__d("FDSGuidanceCardHeader.react", ["cx", "FDSText.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        return h.jsx("div", {
            className: "_2pij",
            children: h.jsx(b("FDSText.react"), {
                color: "primary",
                display: "block",
                size: "body3",
                weight: "bold",
                children: a.children
            })
        })
    }
}
), null);
__d("SUIThreeStateCheckboxInput.react", ["cx", "KeyStatus", "React", "RTLKeys", "SUIErrorComponentUtil", "SUIInternalMouseUpListener", "SUITheme", "SUIThreeStateCheckboxEnum", "Tooltip", "VirtualCursorStatus", "getActiveElement", "joinClasses", "prop-types", "uniqueID", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this) || this;
            c.$3 = function(a) {
                var d = b("getActiveElement")();
                if (d && d.nodeName === "A")
                    return;
                d = c.props.value === b("SUIThreeStateCheckboxEnum").CHECKED ? b("SUIThreeStateCheckboxEnum").UNCHECKED : b("SUIThreeStateCheckboxEnum").CHECKED;
                a.preventDefault();
                c.props.disabled || c.props.onChange(d, a)
            }
            ;
            c.$4 = function() {
                c.setState({
                    isActive: !1,
                    showFocusRing: !1
                })
            }
            ;
            c.$5 = function() {
                (b("KeyStatus").isKeyDown() || b("VirtualCursorStatus").isVirtualCursorTriggered()) && c.setState({
                    showFocusRing: !0
                })
            }
            ;
            c.$6 = function(a) {
                if (!c.props.disabled)
                    switch (a.keyCode) {
                    case b("RTLKeys").RETURN:
                    case b("RTLKeys").SPACE:
                        c.setState({
                            isActive: !0,
                            showFocusRing: !0
                        });
                        break
                    }
            }
            ;
            c.$7 = function(a) {
                switch (a.keyCode) {
                case b("RTLKeys").RETURN:
                case b("RTLKeys").SPACE:
                    c.setState({
                        isActive: !1,
                        showFocusRing: !0
                    });
                    break
                }
            }
            ;
            c.$8 = function() {
                c.props.disabled || (b("SUIInternalMouseUpListener").set(c.$2),
                c.setState({
                    isActive: !0,
                    showFocusRing: !1
                }))
            }
            ;
            c.$2 = function() {
                c.setState({
                    isActive: !1,
                    showFocusRing: !1
                })
            }
            ;
            c.$1 = b("uniqueID")();
            c.state = {
                isActive: !1,
                showFocusRing: !1
            };
            return c
        }
        var d = c.prototype;
        d.componentWillUnmount = function() {
            b("SUIInternalMouseUpListener").unset(this.$2)
        }
        ;
        d.$9 = function() {
            var a = this.props.label, b, c;
            this.props.labelIsHidden ? b = typeof a === "string" ? a : void 0 : c = a;
            return {
                labelAria: b,
                labelText: c
            }
        }
        ;
        d.render = function() {
            var a = b("SUITheme").get(this)
              , c = a.SUIThreeStateCheckboxInput
              , d = this.$9()
              , e = d.labelAria;
            d = d.labelText;
            var f = d != null && d !== ""
              , g = this.props.value === b("SUIThreeStateCheckboxEnum").PARTIAL ? c.partiallyCheckedIcon : c.checkedIcon
              , i = this.props.value !== b("SUIThreeStateCheckboxEnum").UNCHECKED;
            i = {
                borderColor: this.state.isActive && c.activeCheckboxBorderColor || i && c.checkedBorderColor || c.checkboxBorderColor,
                backgroundColor: this.props.disabled && c.disabledCheckboxBackgroundColor || this.state.isActive && c.activeCheckboxBackgroundColor || i && c.checkedBackgroundColor || c.checkboxBackgroundColor
            };
            var j = this.props.disabled ? c.disabledLabelColor : c.labelColor;
            e = h.jsx("button", {
                "aria-checked": this.props.value === b("SUIThreeStateCheckboxEnum").PARTIAL ? "mixed" : this.props.value === b("SUIThreeStateCheckboxEnum").CHECKED ? "true" : "false",
                "aria-describedby": this.props.describedBy,
                "aria-disabled": this.props.disabled,
                "aria-label": e,
                "aria-labelledby": f ? this.$1 : this.props.labelledBy,
                className: "_1gco" + (d ? " _1gcp" : "") + (this.state.showFocusRing ? "" : " _5e9w"),
                "data-testid": void 0,
                id: this.props.id,
                onBlur: this.$4,
                onFocus: this.$5,
                onKeyDown: this.$6,
                onKeyUp: this.$7,
                role: "checkbox",
                style: i,
                type: "button",
                children: h.cloneElement(g, {
                    "aria-hidden": !0,
                    className: "_3w08" + (this.props.value === b("SUIThreeStateCheckboxEnum").UNCHECKED ? " accessible_elem" : "") + " monochrome",
                    disabled: this.props.disabled
                })
            });
            i = this.props.display === "block";
            g = b("joinClasses")("_1gcq" + (this.props.disabled ? " _5_yg" : "") + (i ? " _29cz" : "") + (i ? "" : " _29c-"), this.props.margin);
            i = b("SUIErrorComponentUtil").getErrorIcon(this.props, a, "_3w09");
            return !f && !i ? h.cloneElement(e, babelHelpers["extends"]({
                className: b("joinClasses")(this.props.className, g, e.props.className),
                onClick: this.$3,
                onMouseDown: this.$8
            }, b("Tooltip").propsFor(this.props.tooltip))) : h.jsxs("label", babelHelpers["extends"]({
                className: b("joinClasses")(this.props.className, g, i && "_3w0a"),
                onClick: this.$3,
                onMouseDown: this.$8,
                style: babelHelpers["extends"]({}, c.typeStyle, {
                    color: j,
                    fontWeight: "normal"
                }, this.props.style)
            }, b("Tooltip").propsFor(this.props.tooltip), {
                "data-tooltip-alignh": "center"
            }, b("SUIErrorComponentUtil").getErrorTooltipProps(this.props), {
                children: [e, f ? h.jsx("span", {
                    className: "_1gcr",
                    id: this.$1,
                    children: d
                }) : null, i]
            }))
        }
        ;
        return c
    }(h.PureComponent);
    a.propTypes = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").propTypes, {
        disabled: (c = b("prop-types")).bool.isRequired,
        describedBy: c.string,
        labelledBy: c.string,
        label: c.node,
        labelIsHidden: c.bool,
        display: c.oneOf(["inline", "block"]).isRequired,
        margin: c.string,
        onChange: c.func.isRequired,
        theme: c.instanceOf(b("SUITheme")),
        tooltip: c.node,
        value: c.string
    });
    a.defaultProps = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").defaultProps, {
        disabled: !1,
        labelIsHidden: !1,
        display: "inline",
        value: b("SUIThreeStateCheckboxEnum").UNCHECKED
    });
    a.CHECKBOX_STATES = b("SUIThreeStateCheckboxEnum");
    d = b("withSUITheme")(a);
    e.exports = d
}
), null);
__d("SUICheckboxInput.react", ["React", "SUIThreeStateCheckboxInput.react", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("SUIThreeStateCheckboxInput.react").CHECKBOX_STATES;
    a = b("SUIThreeStateCheckboxInput.react").defaultProps;
    a.value;
    c = babelHelpers.objectWithoutPropertiesLoose(a, ["value"]);
    d = babelHelpers["extends"]({}, c, {
        value: !1
    });
    f = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = function(a, b) {
                c.props.onChange(a === h.CHECKED, b)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props;
            a.onChange;
            var c = a.value;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["onChange", "value"]);
            return g.jsx(b("SUIThreeStateCheckboxInput.react"), babelHelpers["extends"]({}, a, {
                onChange: this.$1,
                value: c ? h.CHECKED : h.UNCHECKED
            }))
        }
        ;
        return c
    }(g.PureComponent);
    f.propTypes = babelHelpers["extends"]({}, b("SUIThreeStateCheckboxInput.react").propTypes, {
        value: b("prop-types").bool
    });
    f.defaultProps = d;
    a = b("withSUITheme")(f);
    e.exports = a
}
), null);
__d("getSUIThreeStateCheckboxInputUniform.fds", ["ix", "cssVar", "FDSPrivateTypeStyles", "React", "SUIGlyphIcon.react", "asset", "autoFlipStyleProps"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        a = b("FDSPrivateTypeStyles").createTypeStyleGetter(a);
        return {
            activeCheckboxBackgroundColor: "#EBEDF0",
            activeCheckboxBorderColor: "#DADDE1",
            checkboxBackgroundColor: "#FFFFFF",
            checkboxBorderColor: "#DADDE1",
            checkedIcon: i.jsx(b("SUIGlyphIcon.react"), {
                srcDefault: g("495429"),
                srcDisabled: g("492920"),
                style: b("autoFlipStyleProps")({
                    left: "0",
                    top: "0"
                })
            }),
            disabledCheckboxBackgroundColor: "#EBEDF0",
            disabledLabelColor: "#BEC3C9",
            labelColor: "#1C1E21",
            partiallyCheckedIcon: i.jsx(b("SUIGlyphIcon.react"), {
                srcDefault: g("495440"),
                srcDisabled: g("492942"),
                style: b("autoFlipStyleProps")({
                    left: "0",
                    top: "0"
                })
            }),
            typeStyle: a({
                color: "#1C1E21",
                fontSize: "12px"
            })
        }
    }
}
), null);
__d("SUIThreeStateCheckboxInputUniform.fds", ["FDSPrivateThemeAtomsClassic", "getSUIThreeStateCheckboxInputUniform.fds"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getSUIThreeStateCheckboxInputUniform.fds")(b("FDSPrivateThemeAtomsClassic"));
    e.exports = a
}
), null);
__d("FDSCheckboxInput.maintenance.react", ["React", "SUICheckboxInput.react", "SUIThreeStateCheckboxInputUniform.fds", "makeFDSStandardComponent", "makeSUIFDSPrivateTheme"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIFDSPrivateTheme")("FDSCheckboxInput", {
        SUIThreeStateCheckboxInput: b("SUIThreeStateCheckboxInputUniform.fds")
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props;
            return g.jsx(b("SUICheckboxInput.react"), {
                "data-testid": void 0,
                disabled: a.isDisabled,
                display: a.display,
                id: a.id,
                label: a.label,
                margin: a.margin,
                onChange: a.onChange,
                style: a.style,
                theme: h,
                tooltip: a.tooltip,
                value: a.value
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.defaultProps = {
        display: "inline",
        isDisabled: !1,
        value: !1
    };
    c = b("makeFDSStandardComponent")("FDSCheckboxInput", a);
    e.exports = c
}
), null);
__d("SUIDivider.react", ["cx", "React", "SUITheme", "joinClasses", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("SUITheme").get(this).SUIDivider
              , c = b("joinClasses")("_w8a", this.props.margin || a.margin);
            return h.jsx("hr", {
                className: c,
                style: {
                    borderBottomColor: a.color
                }
            })
        }
        ;
        return c
    }(h.PureComponent);
    c = b("withSUITheme")(a);
    e.exports = c
}
), null);
__d("FDSDivider.react", ["React", "SUIDivider.react", "SUIDividerUniform.fds", "makeFDSStandardComponent", "makeSUIFDSPrivateTheme"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIFDSPrivateTheme")("FDSDivider", {
        SUIDivider: b("SUIDividerUniform.fds")
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("SUIDivider.react"), {
                margin: this.props.margin,
                theme: h
            })
        }
        ;
        return c
    }(g.PureComponent);
    c = b("makeFDSStandardComponent")("FDSDivider", a);
    e.exports = c
}
), null);
__d("FDSMediaItem.react", ["cx", "FDSGlimmer.react", "FDSPrivateThemeContext.react", "Image.react", "React", "isFalsey", "makeFDSStandardComponent", "stylex", "useBoolean"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var c = a["data-testid"];
        c = a.fit;
        c = c === void 0 ? "none" : c;
        var d = a.description
          , e = a.media
          , f = a.isDisabled;
        f = f === void 0 ? !1 : f;
        var g = a.isLoading;
        g = g === void 0 ? !1 : g;
        var k = a.ratio;
        k = k === void 0 ? "square" : k;
        a = a.size;
        a = a === void 0 ? 32 : a;
        var l = e != null
          , m = i(e)
          , n = b("useBoolean")(m)
          , o = n.value;
        n = n.setFalse;
        o = g || o;
        a = j(a, k, o);
        k = !m && (e == null ? void 0 : e.type) !== "svg" && (e == null ? void 0 : e.type) !== "img";
        return !g && e == null ? null : h.jsxs("div", {
            className: "_7rsq" + (o ? " _7rsr" : ""),
            "data-testid": void 0,
            onLoad: n,
            style: a,
            children: [o ? h.jsx("div", {
                className: "il1lfzur hmxda3hc qodiyf7u jyra5cty fyb41nus beitvgnf",
                children: h.jsx(b("FDSGlimmer.react"), {})
            }) : null, l ? h.jsx("div", {
                "aria-label": d,
                className: "_7yk8" + (!m || c === "none" ? " _7ykc" : "") + (m && c === "cover" ? " _7ykd" : "") + (m && c === "contain" ? " _7yke" : "") + (f ? " _8xnw" : "") + (k ? " _8zf6" : ""),
                role: b("isFalsey")(d) && k ? "presentation" : "img",
                children: e
            }) : null]
        })
    }
    function i(a) {
        return a != null && a.props != null && typeof a.props === "object" && typeof a.props.src === "string"
    }
    function j(a, c, d) {
        var e = h.useContext(b("FDSPrivateThemeContext.react"));
        return h.useMemo(function() {
            var b = l(e, a, c)
              , f = b.width;
            b = b.height;
            var g = k(e, c)
              , h = d ? void 0 : e.colors["default"].transform("default");
            return {
                backgroundColor: h,
                borderRadius: g,
                height: b,
                width: f
            }
        }, [e, a, c, d])
    }
    function k(a, b) {
        switch (b) {
        case "circle":
            return "50%";
        default:
            return a.borderRadius.container + "px"
        }
    }
    function l(a, b, c) {
        var d = b;
        a = ((a = a.ratios[c]) != null ? a : 1) * b;
        switch (c) {
        case "portrait":
            return {
                width: d,
                height: a
            };
        default:
            return {
                width: a,
                height: d
            }
        }
    }
    c = b("makeFDSStandardComponent")("FDSMediaItem", a);
    e.exports = c
}
), null);
__d("getSUIDropdownSelectorSeparatorUniform.fds", ["cssVar"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a() {
        return {
            color: "#DADDE1",
            margin: {
                bottom: "12px",
                left: "0px",
                right: "0px",
                top: "12px"
            }
        }
    }
}
), null);
__d("getSUIHelpMessageUniform.fds", ["FDSPrivateInfoIconSelector", "FDSPrivateThemeUtils", "React", "SUIGlyphIcon.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = b("FDSPrivateThemeUtils").isGeo(a);
        a = a ? b("FDSPrivateInfoIconSelector").geoIconSelector : b("FDSPrivateInfoIconSelector").classicIconSelector;
        return {
            icon: g.jsx(b("SUIGlyphIcon.react"), {
                srcDefault: a("default"),
                srcHover: a("hover")
            })
        }
    }
}
), null);
__d("getSUIStatusIndicatorUniform.fds", ["cssVar"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a) {
        return {
            colors: {
                active: "#00A400",
                error: "#FA383E",
                empty: "#FFFFFF",
                inactive: "#8D949E",
                warning: "#FFBA00"
            },
            size: {
                border: 2,
                diameter: 8
            }
        }
    }
}
), null);
__d("SUIDropdownSelectorSeparatorUniform.fds", ["getSUIDropdownSelectorSeparatorUniform.fds"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getSUIDropdownSelectorSeparatorUniform.fds")();
    e.exports = a
}
), null);
__d("SUIHorizontalLayoutUniform.fds", ["getSUIHorizontalLayoutUniform.fds"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getSUIHorizontalLayoutUniform.fds")();
    e.exports = a
}
), null);
__d("SUIStatusIndicatorUniform.fds", ["FDSPrivateThemeAtomsClassic", "getSUIStatusIndicatorUniform.fds"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getSUIStatusIndicatorUniform.fds")(b("FDSPrivateThemeAtomsClassic"));
    e.exports = a
}
), null);
__d("FDSPopover.react", ["ContextualLayerHideOnScrollOut", "ContextualLayerUpdateOnScroll", "FDSPrivateThemeContext.react", "React", "SUIPopover.react", "getSUIPopoverUniform.fds", "makeFDSStandardComponent", "makeSUIThemeGetter"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("makeSUIThemeGetter")({
        SUIPopover: b("getSUIPopoverUniform.fds")
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = h(this.context);
            return g.jsx(b("SUIPopover.react"), {
                alignment: this.props.alignment,
                behaviors: this.props.fdsOverride_updateOnScroll === !0 ? {
                    ContextualLayerHideOnScrollOut: b("ContextualLayerHideOnScrollOut"),
                    ContextualLayerUpdateOnScroll: b("ContextualLayerUpdateOnScroll")
                } : null,
                content: this.props.children,
                contentWidthUseSparingly: this.props.contentWidthUseSparingly,
                contextRef: this.props.contextRef,
                "data-testid": void 0,
                delay: this.props.delay,
                footer: this.props.footer,
                helpLink: this.props.helpLink,
                hoverContextRef: this.props.hoverContextRef,
                isShown: this.props.isShown,
                linger: this.props.linger,
                offsetX: this.props.offsetX,
                offsetY: this.props.offsetY,
                onToggle: this.props.onToggle,
                position: this.props.position,
                preserveThemeFromContext: !0,
                renderDelay: this.props.renderDelay,
                theme: a,
                title: this.props.title
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.defaultProps = b("SUIPopover.react").defaultProps;
    a.contextType = b("FDSPrivateThemeContext.react");
    c = b("makeFDSStandardComponent")("FDSPopover", a);
    e.exports = c
}
), null);
__d("GroupsVoiceSwitcherUtils", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getGroupJoinStatus = a;
    b = g._("Trang c\u00e1 nh\u00e2n");
    f.PERSONAL_PROFILE_LABEL = b;
    c = g._("Trang");
    f.PAGE_PROFILE_LABEL = c;
    d = g._("Tham gia nh\u00f3m");
    f.JOIN_GROUP_BUTTON_LABEL = d;
    function a(a) {
        switch (a) {
        case 3:
            return g._("\u0110ang ch\u1edd");
        default:
            return null
        }
    }
}
), null);
__d("createCommitMutation", ["Promise", "requireCond", "cr:819055"], (function(a, b, c, d, e, f) {
    "use strict";
    f.createCommitMutation = a;
    f.createCommitMutationForEnvironment = c;
    f.createCommitMutationWithVariables = d;
    var g = b("cr:819055").commitMutation;
    function h(a, c, d) {
        return new (b("Promise"))(function(b, e) {
            return g(a, babelHelpers["extends"]({}, d, {
                variables: {
                    input: c
                },
                onCompleted: function(a, c) {
                    c && c.length ? e(c) : b(a)
                },
                onError: function(a) {
                    return e([a])
                }
            }))
        }
        )
    }
    function a(a, b) {
        return function(c) {
            return h(a, c, b)
        }
    }
    function c(a) {
        return function(b, c) {
            return h(b, c, a)
        }
    }
    function d(a, b) {
        return function(c) {
            return h(a, c, b(c))
        }
    }
}
), null);
__d("SUIRadioList.react", ["cx", "Focus", "KeyStatus", "React", "RTLKeys", "SUITheme", "Tooltip", "VirtualCursorStatus", "emptyFunction", "joinClasses", "nullthrows", "prop-types", "uniqueID", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.apply(this, arguments) || this;
            c.$2 = function() {
                c.setState({
                    isActive: !1,
                    showFocusRing: !1
                })
            }
            ;
            c.$3 = function() {
                (b("KeyStatus").isKeyDown() || b("VirtualCursorStatus").isVirtualCursorTriggered()) && c.setState({
                    showFocusRing: !0
                })
            }
            ;
            c.$4 = function(a) {
                switch (a.keyCode) {
                case b("RTLKeys").SPACE:
                case b("RTLKeys").RETURN:
                    c.setState({
                        isActive: !0,
                        showFocusRing: !0
                    });
                    break
                }
                c.props.onKeyDown(a)
            }
            ;
            c.$5 = function(a) {
                switch (a.keyCode) {
                case b("RTLKeys").SPACE:
                case b("RTLKeys").RETURN:
                    c.setState({
                        isActive: !1,
                        showFocusRing: !0
                    });
                    break
                }
            }
            ;
            c.$6 = function() {
                c.setState({
                    isActive: !0,
                    showFocusRing: !1
                })
            }
            ;
            c.$7 = function() {
                c.setState({
                    isActive: !1,
                    showFocusRing: !1
                })
            }
            ;
            c.$8 = function(a) {
                c.props.disabled || c.props.onSelect(c.props.value, a)
            }
            ;
            c.state = {
                isActive: !1,
                showFocusRing: !1
            };
            c.$1 = b("uniqueID")();
            return c
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("SUITheme").get(this).SUIRadioList
              , c = babelHelpers["extends"]({}, a.typeStyle, {
                color: this.props.disabled ? a.disabledTypeColor : a.enabledTypeColor,
                fontWeight: "normal",
                lineHeight: "16px"
            })
              , d = this.props.selectedValue === this.props.value;
            this.props.overflowWrap && (c.overflowWrap = this.props.overflowWrap,
            this.props.overflowWrap === "break-word" && (c.overflow = "hidden"));
            return h.jsxs("div", babelHelpers["extends"]({}, b("Tooltip").propsFor(this.props.tooltip), {
                className: b("joinClasses")(this.props.className, "_1iq6" + (this.props.disabled ? " _7fq6" : "") + (this.props.radioAlignment === "center" ? " _4a8o" : "")),
                "data-value": this.props.value,
                onClick: this.$8,
                onMouseDown: this.$6,
                onMouseUp: this.$7,
                role: "presentation",
                children: [h.jsx("div", {
                    "aria-checked": d,
                    "aria-disabled": this.props.disabled,
                    "aria-labelledby": this.$1,
                    "aria-posinset": this.props["aria-posinset"],
                    "aria-setsize": this.props["aria-setsize"],
                    className: "_gxj" + (this.state.showFocusRing ? "" : " _1a48"),
                    onBlur: this.$2,
                    onFocus: this.$3,
                    onKeyDown: this.$4,
                    onKeyUp: this.$5,
                    ref: this.props.setupRadioRef,
                    role: "radio",
                    style: {
                        backgroundColor: this.props.disabled && a.disabledBackgroundColor || this.state.isActive && a.activeBackgroundColor || d && a.selectedBackgroundColor || a.backgroundColor,
                        borderColor: this.props.disabled && a.disabledBorderColor || this.state.isActive && a.activeBorderColor || d && a.selectedBorderColor || a.borderColor
                    },
                    tabIndex: this.props.tabIndex,
                    children: d ? h.jsx("div", {
                        className: "_gxk",
                        style: {
                            backgroundColor: this.props.disabled && a.disabledDotColor || this.state.isActive && a.activeDotColor || d && a.selectedDotColor || a.dotColor
                        }
                    }) : null
                }), h.jsx("label", {
                    className: "_gxl",
                    id: this.$1,
                    style: c,
                    children: this.props.children
                })]
            }))
        }
        ;
        return c
    }(h.PureComponent);
    a.displayName = "SUIRadioListItem";
    a.propTypes = {
        "aria-posinset": (c = b("prop-types")).number,
        "aria-setsize": c.number,
        disabled: c.bool.isRequired,
        name: c.string,
        onKeyDown: c.func.isRequired,
        onSelect: c.func.isRequired,
        radioAlignment: c.oneOf(["top", "center"]).isRequired,
        selectedValue: c.any,
        tabIndex: c.number,
        theme: c.instanceOf(b("SUITheme")),
        tooltip: c.node,
        value: c.any,
        overflowWrap: c.oneOf(["break-word", "normal"])
    };
    a.defaultProps = {
        disabled: !1,
        onKeyDown: b("emptyFunction"),
        onSelect: b("emptyFunction"),
        radioAlignment: "top",
        selectedValue: null
    };
    d = b("withSUITheme")(a);
    f = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.apply(this, arguments) || this;
            c.$5 = function(a) {
                return function(d) {
                    switch (d.keyCode) {
                    case b("RTLKeys").UP:
                    case b("RTLKeys").getLeft():
                        d.preventDefault();
                        c.$3(a - 1);
                        break;
                    case b("RTLKeys").DOWN:
                    case b("RTLKeys").getRight():
                        d.preventDefault();
                        c.$3(a + 1);
                        break;
                    case b("RTLKeys").SPACE:
                        d.preventDefault();
                        c.$3(a);
                        break
                    }
                }
            }
            ;
            c.$4 = function(a, b) {
                c.props.stopImmediateFocusOnSelect === !0 && (b && b.preventDefault()),
                a !== c.props.value && c.props.onChange(a)
            }
            ;
            c.$1 = new Map();
            c.$2 = new Map();
            return c
        }
        var d = c.prototype;
        d.$3 = function(a) {
            var c = a;
            a >= this.$2.size ? c = 0 : a < 0 && (c = this.$2.size - 1);
            a = b("nullthrows")(this.$2.get(c));
            c = this.$1.get(c);
            a.props.disabled || this.$4(a.props.value);
            c && b("Focus").set(c)
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.children
              , e = c.direction
              , f = c.margin
              , g = c.name
              , i = c.onChange
              , j = c.radioAlignment
              , k = c.value;
            c.theme;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["children", "direction", "margin", "name", "onChange", "radioAlignment", "value", "theme"]);
            void i;
            i = h.Children.toArray(d);
            var l = i.some(function(a) {
                return a && a.props.value === k
            })
              , m = i.filter(b("emptyFunction").thatReturnsArgument).length;
            i = h.Children.map(d, function(b, c) {
                return b ? h.cloneElement(b, {
                    name: g,
                    "aria-posinset": c + 1,
                    "aria-setsize": m,
                    onKeyDown: a.$5(c),
                    onSelect: a.$4,
                    radioAlignment: j,
                    ref: function(a) {
                        function b(b) {
                            return a.apply(this, arguments)
                        }
                        b.toString = function() {
                            return a.toString()
                        }
                        ;
                        return b
                    }(function(b) {
                        a.$2.set(c, b)
                    }),
                    selectedValue: k,
                    setupRadioRef: function(b) {
                        a.$1.set(c, b)
                    },
                    tabIndex: k === b.props.value || !l && c === 0 ? 0 : -1
                }) : b
            });
            return h.jsx("ul", babelHelpers["extends"]({
                className: b("joinClasses")("_4nzn" + (e === "horizontal" ? " _4nzo" : ""), f),
                "data-testid": void 0,
                "data-value": k
            }, c, {
                role: "radiogroup",
                children: i
            }))
        }
        ;
        return c
    }(h.PureComponent);
    f.Item = d;
    f.defaultProps = {
        radioAlignment: "top",
        direction: "vertical"
    };
    f.propTypes = {
        direction: c.oneOf(["horizontal", "vertical"]),
        name: c.string,
        margin: c.string,
        onChange: c.func.isRequired,
        radioAlignment: c.oneOf(["top", "center"]).isRequired,
        theme: c.instanceOf(b("SUITheme")),
        value: c.any
    };
    g = b("withSUITheme")(f);
    e.exports = g
}
), null);
__d("SUINotice.react", ["cx", "fbt", "Locale", "React", "SUIButton.react", "SUICloseButton.react", "SUITheme", "joinClasses", "prop-types", "uniqueID", "withSUITheme"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = {
        noticeID: "",
        type: "warning",
        hasRoundedCorners: !0
    };
    var j = {
        error: h._("Th\u00f4ng b\u00e1o l\u1ed7i"),
        information: h._("Th\u00f4ng b\u00e1o \u0111\u01b0a tin"),
        success: h._("Th\u00f4ng b\u00e1o th\u00e0nh c\u00f4ng"),
        warning: h._("Th\u00f4ng b\u00e1o c\u1ea3nh b\u00e1o")
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = function() {
                c.props.onClose && c.props.onClose(c.props.noticeID)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a, c = b("SUITheme").get(this).SUINotice, d = c.type[this.props.type], e = d.icon, f = b("uniqueID")(), g = b("uniqueID")();
            a = (a = {},
            a[b("Locale").isRTL() ? "left" : "right"] = 8,
            a.position = "absolute",
            a.top = 14,
            a);
            return i.jsxs("div", {
                className: b("joinClasses")("_29dw" + (this.props.onClose ? " _29dx" : "") + (this.props.hasRoundedCorners ? " _5q8c" : ""), this.props.margin),
                "data-testid": void 0,
                style: babelHelpers["extends"]({}, this.props.style, {
                    backgroundColor: d.messageBackgroundColor
                }),
                children: [i.jsxs("div", {
                    className: "_29dy",
                    style: {
                        backgroundColor: d.iconBackgroundColor
                    },
                    children: [e, i.jsx("span", {
                        className: "accessible_elem",
                        id: g,
                        children: j[this.props.type]
                    })]
                }), i.jsxs("div", {
                    className: "_2as-",
                    style: babelHelpers["extends"]({
                        backgroundColor: d.messageBackgroundColor,
                        borderColor: d.messageBorderColor
                    }, c.textStyle),
                    children: [i.jsx("div", {
                        className: "_29dz",
                        children: this.props.children
                    }), this.props.action ? i.jsx(b("SUIButton.react"), {
                        "data-testid": void 0,
                        disabled: (e = this.props.action.disabled) != null ? e : !1,
                        height: this.props.action.height || "short",
                        href: this.props.action.href,
                        label: this.props.action.label,
                        onClick: this.props.action.onClick,
                        target: this.props.action.target,
                        tooltip: this.props.action.tooltip,
                        use: this.props.action.use || "default"
                    }) : null, this.props.onClose ? i.jsx(b("SUICloseButton.react"), {
                        "aria-labelledby": f + " " + g,
                        "data-testid": void 0,
                        id: f,
                        onClick: this.$1,
                        style: a
                    }) : null]
                })]
            })
        }
        ;
        return c
    }(i.PureComponent);
    c.propTypes = {
        action: (d = b("prop-types")).shape({
            height: d.oneOf(["normal", "tall", "short"]),
            label: d.node.isRequired,
            use: d.oneOf(["default", "special", "confirm"]),
            onClick: d.func,
            href: d.string,
            target: d.string,
            tooltip: d.string,
            disabled: d.bool
        }),
        noticeID: d.string.isRequired,
        type: d.oneOf(["information", "success", "warning", "error"]).isRequired,
        margin: d.string,
        onClose: d.func,
        style: d.object,
        theme: d.instanceOf(b("SUITheme"))
    };
    c.defaultProps = a;
    f = b("withSUITheme")(c);
    e.exports = f
}
), null);
__d("SUIModalFooter.react", ["SUILayerFooter.react"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("SUILayerFooter.react");
    e.exports = a
}
), null);
__d("SUIModalHeader.react", ["SUILayerHeader.react"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("SUILayerHeader.react");
    e.exports = a
}
), null);
__d("isCurrencyWithSymbolAndThousandsSeparators", ["CurrencyConfig", "distinctArray"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a, b) {
        b === void 0 && (b = ",");
        var c = i().find(function(b) {
            return a.startsWith(b)
        });
        if (c == null || c === "")
            return !1;
        c = a.slice(c.length);
        return c != null && j(c, b)
    }
    var h = null;
    function i() {
        h = h || (g || (g = b("distinctArray")))(Object.values(b("CurrencyConfig").allCurrenciesByCode).map(function(a) {
            return a != null && typeof a === "object" ? String(a.symbol) : null
        }).filter(Boolean));
        return h
    }
    function j(a, b) {
        return new RegExp("^\\d{1,3}(" + b + "\\d{3})*(.d+)?$").test(a)
    }
    e.exports = a
}
), null);
__d("AdsCurrencyFormatter", ["Currency", "NumberFormatConfig", "intlNumUtils", "isCurrencyWithSymbolAndThousandsSeparators"], (function(a, b, c, d, e, f) {
    function g(a) {
        return Math.round(Math.log(a) / Math.LN10)
    }
    function h(a, c, d) {
        var e = b("Currency").getFormat(a) || "{symbol}{amount}"
          , f = b("Currency").getSymbol(a) || "";
        e = e.replace("{symbol}", f).replace("{amount}", c);
        return d === !0 ? e + " " + b("Currency").getISO(a) : e
    }
    function i(a, c, d, e) {
        e === void 0 && (e = !0);
        a = b("Currency").getOffset(a) || 100;
        e = e ? g(a) : 0;
        return d === !0 ? b("intlNumUtils").formatNumberWithThousandDelimiters(c / a, e) : b("intlNumUtils").formatNumber(c / a, e)
    }
    function j(a, b, c, d, e) {
        e === void 0 && (e = !0);
        b = i(a, b, d, e);
        return h(a, b, c)
    }
    function k(a, b) {
        return j(a, b)
    }
    function a(a, b, c, d) {
        return i(a, b, c, d)
    }
    function c(a, b) {
        return j(a, b, !0)
    }
    function d(a, c) {
        return i(a, c) + " " + b("Currency").getISO(a)
    }
    function f(a, b, c) {
        c === void 0 && (c = !0);
        return j(a, b, !1, !0, c)
    }
    function l(a, c) {
        a = b("Currency").getOffset(a) || 100;
        var d = g(a);
        while (c !== 0 && Math.round(Math.abs(c) * Math.pow(10, d) / a) < 1)
            d++;
        return d
    }
    function m(a, c) {
        var d = b("Currency").getOffset(a) || 100;
        d = b("intlNumUtils").formatNumberWithThousandDelimiters(c / d, l(a, c));
        return h(a, d, !1)
    }
    function n(a, c, d) {
        var e = b("Currency").getOffset(a) || 100;
        return h(a, b("intlNumUtils").formatNumberWithThousandDelimiters(c / e, Math.max(d, l(a, c))))
    }
    function o(a, b, c) {
        return q(a, b, c, !0)
    }
    function p(a, b, c) {
        return q(a, b, c, !1)
    }
    function q(a, c, d, e) {
        var f = b("Currency").getOffset(a) || 100
          , i = g(f);
        i && c % f === 0 && (i = 0);
        d = d === !0 ? b("intlNumUtils").formatNumberWithThousandDelimiters(c / f, i) : b("intlNumUtils").formatNumber(c / f, i);
        return e === !0 ? h(a, d, !1) : d
    }
    function r(a, b, c) {
        return u(k(a, b), k(a, c))
    }
    function s(a, b, c, d) {
        if (d - c < b)
            return k(a, d);
        else
            return r(a, c, d)
    }
    var t = "\u2013";
    function u(a, b) {
        return a + t + b
    }
    function v(a, b, c) {
        return w(a, b, c) || 0
    }
    function w(a, c, d) {
        a = b("Currency").getOffset(a);
        c = b("intlNumUtils").parseNumberRaw(c, d, b("NumberFormatConfig").numberDelimiter);
        return c == null ? null : Math.round(c * a)
    }
    function x(a, c) {
        a = b("Currency").getOffset(a);
        a = g(a);
        c = b("intlNumUtils").parseNumber(c) || 0;
        return +c.toFixed(a)
    }
    function y(a, c, d) {
        return v(a, c, d != null && d != "" ? d : b("NumberFormatConfig").decimalSeparator)
    }
    function z(a, c, d) {
        return w(a, c, d != null && d != "" ? d : b("NumberFormatConfig").decimalSeparator)
    }
    function A(a, b, c, d, e) {
        e === void 0 && (e = !0);
        return j(a, b, c, d, e)
    }
    function B(a, c) {
        var d = 100;
        a = b("Currency").getOffset(a) || d;
        return c / d * a
    }
    function C(a, c) {
        var d = b("Currency").getOffset(a) || 100
          , e = b("Currency").getSymbol(a);
        d = c / d;
        var f = "";
        if (d > 1e6)
            d /= 1e6,
            f = "M";
        else if (d > 1e3)
            d /= 1e3,
            f = "K";
        else
            return q(a, c, !0, !0);
        d = Math.round(d * 10) / 10;
        a = b("intlNumUtils").formatNumber(d, 1);
        return e + a + f
    }
    e.exports = {
        formatCurrency: k,
        formatCurrencyAtLeastOneSigFig: m,
        formatCurrencyFullFormat: A,
        formatCurrencyNoSymbol: a,
        formatCurrencyRange: r,
        formatCurrencyRangeWithThreshold: s,
        formatCurrencyWithAtLeastNumberOfDecimalPlacesAndOneSigFig: n,
        formatCurrencyWithISO: c,
        formatCurrencyWithISONoSymbol: d,
        formatCurrencyWithLargerNumber: C,
        formatCurrencyWithNumberDelimiters: f,
        formatCurrencyWithOptionalDecimals: o,
        formatCurrencyWithOptionalDecimalsNoSymbol: p,
        formatRange: u,
        isCurrencyWithSymbolAndThousandsSeparators: b("isCurrencyWithSymbolAndThousandsSeparators"),
        parseCurrency: y,
        parseOptionalCurrency: z,
        parsePECurrency: x,
        replaceWithSymbol: h,
        replaceOffsetFactorFromAmount: B
    }
}
), null);
__d("isNullOrZero", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return a == null || a === 0
    }
}
), null);
__d("cssLength", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    b = /^(auto|0)$|^[+-]?[0-9]+.?([0-9]+)?(px|em|ex|ch|rem|in|cm|mm|pc|pt|ex|vw|vh|vmin|vmax|%)$|^calc\(.+\)$/;
    function a(a) {
        return a
    }
}
), null);
__d("FlexLayoutItem.react", ["cx", "React", "gkx", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("gkx")("1261344");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , b = a.align
              , d = a.basis
              , e = a.children
              , f = a.className
              , g = a.grow
              , i = a.order
              , j = a.shrink;
            a = a.style;
            var k = this.props["data-testid"];
            k = c.flexLayoutItem({
                align: b,
                basis: d,
                grow: g,
                order: i,
                shrink: j,
                className: f,
                style: a
            });
            return h.jsx("div", babelHelpers["extends"]({}, k, {
                "data-testid": void 0,
                children: e
            }))
        }
        ;
        c.flexLayoutItem = function(a) {
            a = a !== void 0 ? a : {};
            var d = a.className
              , e = a.order
              , f = a.grow
              , g = a.shrink
              , h = a.basis
              , j = a.align;
            a = a.style;
            e === void 0 && (e = c.defaultProps.order);
            f === void 0 && (f = c.defaultProps.grow);
            g === void 0 && (g = c.defaultProps.shrink);
            h === void 0 && (h = c.defaultProps.basis);
            j === void 0 && (j = c.defaultProps.align);
            return {
                className: b("joinClasses")((j === "auto" ? "_6g3g" : "") + (j === "start" ? " _6g3m" : "") + (j === "center" ? " _6g3n" : "") + (j === "end" ? " _6g3v" : "") + (j === "stretch" ? " _6g3w" : "") + (i ? " _8xil" : ""), d),
                style: babelHelpers["extends"]({}, a, {
                    flexBasis: h,
                    flexGrow: f,
                    flexShrink: g,
                    order: e
                })
            }
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.defaultProps = {
        align: "auto",
        basis: "auto",
        grow: 0,
        order: 0,
        shrink: 1
    }
}
), null);
__d("PECurrency", ["PECurrencyConfig", "intlNumUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("PECurrencyConfig").currency_map_for_cc
      , h = b("PECurrencyConfig").currency_map_for_render
      , i = 100;
    function j(a) {
        var b = 0;
        a = a;
        while (a > 1)
            b++,
            a /= 10;
        return b
    }
    function k(a, b, c) {
        var d = h[a].symbol
          , e = h[a].format || "{symbol}{amount}";
        c === !0 && d != a && (e.indexOf("{symbol}") >= e.indexOf("{amount}") ? e += " (" + a + ") " : e += " " + a);
        return e.replace("{symbol}", d).replace("{amount}", String(b))
    }
    function a(a, c, d) {
        d = babelHelpers["extends"]({
            showCurrencyCode: !1,
            showDecimals: !0,
            showSymbol: !0,
            stripZeros: !1,
            thousandSeparator: !1
        }, d);
        var e = o(a) || 0;
        c = c / i;
        e = d.showDecimals ? j(e) : 0;
        d.stripZeros || (c = b("intlNumUtils").formatNumber(c, e));
        d.thousandSeparator && (typeof c === "string" && (c = b("intlNumUtils").parseNumber(c)),
        c = b("intlNumUtils").formatNumberWithThousandDelimiters(Number(c), e));
        !d.showSymbol ? e = d.showCurrencyCode ? c + " " + a : String(c) : (typeof c === "number" && (c = "" + c),
        e = k(a, c, d.showCurrencyCode));
        return e
    }
    function c(a, b, c, d, e) {
        b = l(a, b, !0, c, d, e);
        switch (a) {
        case "AUD":
            return "A" + b;
        case "CAD":
            return "C" + b;
        case "HKD":
            return "HK" + b;
        case "SGD":
            return "S" + b;
        case "COP":
            return "COP" + b;
        default:
            return b
        }
    }
    function l(a, c, d, e, f, g) {
        d = d != null ? d : !0;
        e = e != null ? e : !1;
        f = f != null ? f : !1;
        g = g != null ? g : !1;
        var h = o(a) || 0
          , l = Math.abs(c) / i;
        h = j(h);
        f || (l = b("intlNumUtils").formatNumber(l, h));
        g && (typeof l === "string" && (l = b("intlNumUtils").parseNumber(l)),
        l = b("intlNumUtils").formatNumberWithThousandDelimiters(Number(l), f ? 0 : h));
        !d ? g = e ? l + " " + a : String(l) : (typeof l === "number" && (l = "" + l),
        g = k(a, l, e));
        c < 0 && (g = "-" + g);
        return g
    }
    function d(a, b, c, d, e) {
        return l(a.currency, a.amount, b, c, d, e)
    }
    function f(a) {
        a = p(a);
        return a != null ? Object.keys(a) : []
    }
    function m(a) {
        return !h[a] ? null : h[a].screen_name
    }
    function n(a) {
        return !h[a] ? null : h[a].symbol
    }
    function o(a) {
        return !h[a] ? null : h[a].offset
    }
    function p(a) {
        switch (a) {
        case 2:
            return g;
        case 1:
            return h;
        default:
            return null
        }
    }
    e.exports = {
        DEFAULT_AMOUNT_OFFSET: i,
        formatAmount: l,
        formatAmountWithExtendedSymbol: c,
        formatAmountX: a,
        formatCurrencyAmount: d,
        formatRawAmount: k,
        getAllCurrencies: f,
        getCurrencyScreenName: m,
        getCurrencySymbol: n,
        getCurrencyOffset: o
    }
}
), null);
__d("ViewStyles", ["LayoutStyles"], (function(a, b, c, d, e, f) {
    "use strict";
    a = babelHelpers["extends"]({}, b("LayoutStyles"), {
        backgroundColor: !0,
        borderBottomColor: !0,
        borderBottomLeftRadius: !0,
        borderBottomRightRadius: !0,
        borderBottomWidth: !0,
        borderColor: !0,
        borderLeftColor: !0,
        borderLeftWidth: !0,
        borderRadius: !0,
        borderRightColor: !0,
        borderRightWidth: !0,
        borderStyle: !0,
        borderTopColor: !0,
        borderTopLeftRadius: !0,
        borderTopRightRadius: !0,
        borderTopWidth: !0,
        borderWidth: !0,
        flex: !0,
        opacity: !0,
        overflow: !0
    });
    c = a;
    e.exports = c
}
), null);
__d("TextStyles", ["ViewStyles"], (function(a, b, c, d, e, f) {
    "use strict";
    a = babelHelpers["extends"]({}, b("ViewStyles"), {
        color: !0,
        fontFamily: !0,
        fontSize: !0,
        fontStyle: !0,
        fontWeight: !0,
        letterSpacing: !0,
        lineHeight: !0,
        textAlign: !0,
        textDecorationLine: !0,
        whiteSpace: !0
    });
    c = a;
    e.exports = c
}
), null);
__d("Text", ["cx", "React", "TextStyles", "getValidatedStyle", "joinClasses", "pluckClassNames", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getChildContext = function() {
            return {
                inline: !0
            }
        }
        ;
        d.render = function() {
            var a = this.props
              , d = a.children;
            a = a.style;
            a = b("pluckClassNames")(a);
            var e = a.classNames;
            a = a.styles;
            a = b("getValidatedStyle")(a, b("TextStyles"));
            var f = typeof d === "string"
              , g = this.context.inline;
            g = b("joinClasses").apply(void 0, ["_b5a" + (!f && !g ? " _b5b" : "") + (g ? " _b5c" : "")].concat(e));
            f ? e = d : e = h.Children.map(d, function(a) {
                return typeof a === "string" ? h.jsx(c, {
                    children: a
                }) : a
            });
            return h.jsx("div", {
                className: g,
                style: a,
                children: e
            })
        }
        ;
        return c
    }(h.Component);
    a.childContextTypes = {
        inline: b("prop-types").bool
    };
    a.contextTypes = {
        inline: b("prop-types").bool
    };
    e.exports = a
}
), null);
__d("XGroupsRequestToJoinRequestAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/groups/membership/r2j/", {
        group_id: {
            type: "FBID"
        },
        ref: {
            type: "Enum",
            enumType: 1
        },
        unconnected_source: {
            type: "String"
        },
        page_id: {
            type: "FBID"
        },
        ego_id: {
            type: "String"
        },
        ad_client_token: {
            type: "String"
        },
        replace_join_button: {
            type: "Bool",
            defaultValue: !0
        },
        redirect_to_group: {
            type: "Bool",
            defaultValue: !1
        },
        client_custom_questions: {
            type: "Bool",
            defaultValue: !1
        },
        element_selector: {
            type: "String"
        },
        vaccine_warning_confirmed: {
            type: "Bool",
            defaultValue: !1
        },
        integrity_warning_confirmed: {
            type: "Bool",
            defaultValue: !1
        },
        vax_reset_page_self_join_button: {
            type: "Bool",
            defaultValue: !1
        },
        integrity_reset_page_self_join_button: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
