if (self.CavalryLogger) {
    CavalryLogger.start_js(["MbS0\/"]);
}

__d("deepCompare", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = g;
    function g(a, b) {
        if (a === b)
            return !0;
        if (!(a instanceof Object) || !(b instanceof Object))
            return !1;
        if (a.constructor !== b.constructor)
            return !1;
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length)
                return !1;
            var c = {}
              , d = 0;
            for (var e = 0, f = a.length; e < f; e++) {
                var h = d;
                for (var i = 0, j = b.length; i < j && h === d; i++) {
                    if (c[i])
                        continue;
                    g(a[e], b[i]) && (c[i] = !0,
                    d++)
                }
            }
            return d === a.length
        } else {
            h = a;
            i = b;
            for (var k in h) {
                if (!Object.prototype.hasOwnProperty.call(h, k))
                    continue;
                if (!Object.prototype.hasOwnProperty.call(i, k))
                    return !1;
                if (h[k] === i[k])
                    continue;
                if (typeof h[k] !== "object")
                    return !1;
                if (!g(h[k], i[k]))
                    return !1
            }
            for (k in i)
                if (Object.prototype.hasOwnProperty.call(i, k) && !Object.prototype.hasOwnProperty.call(h, k))
                    return !1
        }
        return !0
    }
}
), null);
__d("RoundImage.react", ["cx", "Image.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("joinClasses")(this.props.className, c.baseClassName);
            return h.jsx(b("Image.react"), babelHelpers["extends"]({}, this.props, {
                className: a
            }))
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.baseClassName = "_2qgu"
}
), null);
__d("ReactSelectorUtils", ["React", "deepCompare"], (function(a, b, c, d, e, f) {
    "use strict";
    f.processMenuItems = a;
    f.processMultiMenuItems = c;
    var g = b("React");
    function a(a, c, d) {
        d === void 0 && (d = !1);
        var e;
        d = g.Children.map(a, function(a) {
            if (a) {
                var d = b("deepCompare")(a.props.value, c);
                a = g.cloneElement(a, {
                    selected: d
                });
                d && (e = a);
                return a
            }
        });
        return {
            items: d,
            selectedItem: e
        }
    }
    function c(a, b, c) {
        c === void 0 && (c = !1);
        var d = [];
        c = a;
        b && (c = g.Children.map(a, function(a) {
            if (a) {
                var c = b.some(function(b) {
                    return b === a.props.value
                });
                a = g.cloneElement(a, {
                    selected: c
                });
                c && d.push(a);
                return a
            }
        }));
        return {
            items: c,
            selectedItems: d
        }
    }
}
), null);
__d("PageContentTabSuccessDialog.react", ["cx", "ix", "Image.react", "React", "XUIDialog.react", "XUIDialogBody.react", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return i.jsx(b("XUIDialog.react"), {
                width: 344,
                shown: !0,
                layerHideOnBlur: !1,
                layerFadeOnShow: !0,
                children: i.jsxs(b("XUIDialogBody.react"), {
                    className: "_--l",
                    children: [i.jsx(b("Image.react"), {
                        src: h("101769"),
                        className: "_--n"
                    }), i.jsx("div", {
                        className: "_--o",
                        children: this.props.successLabel
                    })]
                })
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        successLabel: b("prop-types").node
    }
}
), null);
__d("ShowWaitTimeAreasMode", ["URI"], (function(a, b, c, d, e, f) {
    "use strict";
    f.disable = a;
    f.enable = c;
    f.isEnabled = d;
    var g, h = !!new (g || b("URI"))(window.location.href).getQueryData().showwaitareas;
    function a() {
        h = !1
    }
    function c() {
        h = !0
    }
    function d() {
        return h
    }
}
), null);
__d("WaitTimeArea.react", ["cx", "PerfHelperUtils", "React", "ShowWaitTimeAreasMode", "WaitTimeContext"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function i(a) {
        var c = a.name;
        a = a.children;
        return h.jsx(b("PerfHelperUtils").BorderedComponent, {
            color: "green",
            tooltip: c,
            className: "_68qf",
            children: a
        })
    }
    function a(a) {
        var c = a.name
          , d = a.owner;
        a = a.children;
        var e = h.useMemo(function() {
            return {
                waitTimeAreaName: c,
                waitTimeAreaOwner: d
            }
        }, [c, d]);
        return !b("ShowWaitTimeAreasMode").isEnabled() ? h.jsx(b("WaitTimeContext").Provider, {
            value: e,
            children: a
        }) : h.jsx(b("WaitTimeContext").Provider, {
            value: e,
            children: h.jsx(i, {
                name: c,
                children: a || null
            })
        })
    }
}
), null);
__d("PageContentTabLoadingDialog", ["cx", "PageContentTabSuccessDialog.react", "PageContentTabSuccessDialogTimer", "React", "ReactDOM", "WaitTimeArea.react", "XUIDialog.react", "XUIDialogBody.react", "XUISpinner.react"], (function(a, b, c, d, e, f, g) {
    f.show = a;
    f.hide = c;
    f.hideWithSuccessMessage = d;
    f.destroy = e;
    var h = b("React")
      , i = b("PageContentTabSuccessDialogTimer").TIME_IN_MS
      , j = function(c) {
        babelHelpers.inheritsLoose(a, c);
        function a() {
            return c.apply(this, arguments) || this
        }
        var d = a.prototype;
        d.render = function() {
            return h.jsx(b("WaitTimeArea.react"), {
                name: "PageContentTabLoadingDialog",
                owner: "pages_publishing",
                children: h.jsx(b("XUIDialog.react"), {
                    width: 300,
                    shown: !0,
                    layerHideOnBlur: !1,
                    children: h.jsx(b("XUIDialogBody.react"), {
                        className: "_5xp9",
                        children: h.jsx(b("XUISpinner.react"), {
                            background: "light",
                            className: "_5xpe",
                            size: "large"
                        })
                    })
                })
            })
        }
        ;
        return a
    }(h.Component);
    function a() {
        this._container || (this._container = document.createElement("div")),
        b("ReactDOM").render(h.jsx(j, {}), this._container)
    }
    function c() {
        if (!this._container)
            return;
        this.destroy()
    }
    function d(a, c) {
        if (!this._container)
            return;
        b("ReactDOM").render(h.jsx(b("PageContentTabSuccessDialog.react"), {
            successLabel: a
        }), this._container);
        setTimeout(this.destroy.bind(this), c ? c : i)
    }
    function e() {
        b("ReactDOM").unmountComponentAtNode(this._container),
        this._container = null
    }
}
), null);
__d("SUIFocusUtil", ["Focus", "VirtualCursorStatus"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setFocus = a;
    function a(a) {
        b("VirtualCursorStatus"),
        b("Focus").set(a)
    }
}
), null);
__d("divisorSignedModulo", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, b) {
        return (a % b + b) % b
    }
}
), null);
__d("wrapIndex", ["divisorSignedModulo"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        return b("divisorSignedModulo")(a, c)
    }
}
), null);
__d("SUIActionMenu.react", ["cx", "Link.react", "Locale", "React", "RTLKeys", "SUIFocusUtil", "SUISubActionMenuLayer.react", "SUITheme", "cxMargin", "withSUITheme", "wrapIndex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 1
      , j = 4;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                items: d.props.items,
                highlightedIndex: null,
                activeSubmenuIndex: null,
                flattenedEntries: r(d.props.items)
            },
            d.$1 = null,
            d.$2 = new Map(),
            d.$5 = function(a) {
                var b = d.state.flattenedEntries;
                b = b[a];
                b && q(b.item) && (b.item.onClick && b.item.onClick(),
                d.props.onItemClick && d.props.onItemClick())
            }
            ,
            d.$8 = function(a) {
                var b = d.state.flattenedEntries;
                b = b[a];
                b && q(b.item) ? d.$4(a) : d.$4(null)
            }
            ,
            d.$9 = function(a, b, c) {
                d.$4(a, b),
                d.props.onSubmenuHide && d.props.onSubmenuHide(c)
            }
            ,
            d.$10 = function(a) {
                var c = d.state
                  , e = c.activeSubmenuIndex;
                c = c.highlightedIndex;
                var f = d.state.flattenedEntries
                  , g = 0
                  , h = b("RTLKeys").getRight()
                  , i = a.target instanceof HTMLAnchorElement && a.target.href != null;
                switch (a.keyCode) {
                case b("RTLKeys").RETURN:
                case b("RTLKeys").SPACE:
                    i || a.preventDefault();
                    if (c !== null) {
                        i = f[c].item;
                        i.type === "submenu" ? d.setState({
                            activeSubmenuIndex: c
                        }) : d.$5(c)
                    }
                    break;
                case b("RTLKeys").UP:
                    a.preventDefault();
                    g = -1;
                    break;
                case b("RTLKeys").DOWN:
                    a.preventDefault();
                    g = 1;
                    break;
                case h:
                    a.preventDefault();
                    if (c !== null && e !== c) {
                        i = f[c].item;
                        i.type === "submenu" && d.setState({
                            activeSubmenuIndex: c
                        })
                    }
                    break
                }
                if (g === 0)
                    return;
                if (!f.some(function(a) {
                    a = a.item;
                    return q(a)
                }))
                    return;
                h = d.state.highlightedIndex !== null ? b("wrapIndex")(d.state.highlightedIndex + g, f.length) : g === 1 ? 0 : f.length - 1;
                while (!q(f[h].item))
                    h = b("wrapIndex")(h + g, f.length);
                d.$4(h)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getDerivedStateFromProps = function(a, b) {
            return a.items !== b.items ? {
                flattenedEntries: r(a.items),
                items: a.items
            } : null
        }
        ;
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this;
            (this.props.focusFirstElementOnMount || this.props.focusItemOnMount) && (this.$3(),
            this.$1 = window.setTimeout(function() {
                a.props.focusItemOnMount == null ? a.$4(0, !1) : a.$4(Math.max(a.props.items.findIndex(function(b) {
                    return b === a.props.focusItemOnMount
                }), 0), !1)
            }, 0))
        }
        ;
        d.componentWillUnmount = function() {
            this.$3()
        }
        ;
        d.$4 = function(a, b) {
            b === void 0 && (b = !1),
            this.$6(a),
            this.$7(a, b)
        }
        ;
        d.$6 = function(a) {
            a = a !== null ? this.$2.get(a) : null;
            a != null && a.focus()
        }
        ;
        d.$7 = function(a, b) {
            b = b ? a : null;
            this.setState({
                highlightedIndex: a,
                activeSubmenuIndex: b
            })
        }
        ;
        d.$3 = function() {
            this.$1 && (window.clearTimeout(this.$1),
            this.$1 = null)
        }
        ;
        d.render = function() {
            var a = this
              , c = b("SUITheme").get(this).SUIActionMenu
              , d = this.state.flattenedEntries
              , e = d.some(function(a) {
                return a.item.type === "submenu"
            })
              , f = d.some(function(a) {
                return (a.item.type === "item" || a.item.type === "link" || a.item.type === "submenu") && a.item.icon !== void 0
            });
            return h.jsx("ul", {
                className: "_2pi2 _6ff6",
                id: this.props.id,
                onKeyDown: this.$10,
                role: "menu",
                style: {
                    backgroundColor: c.backgroundColor,
                    borderColor: c.borderColor,
                    borderRadius: c.borderRadius,
                    borderWidth: c.borderWidth,
                    paddingLeft: c.horizontalPadding,
                    paddingRight: c.horizontalPadding
                },
                tabIndex: "0",
                children: d.map(function(b, d) {
                    var g = b.item;
                    b = b.isIndented;
                    switch (g.type) {
                    case "item":
                    case "link":
                        var i = {
                            "data-testid": g["data-testid"],
                            description: g.description,
                            hasIconSibling: f,
                            hasSubmenuSibling: e,
                            icon: g.icon,
                            index: d,
                            isDisabled: !!g.isDisabled,
                            isHighlighted: d === a.state.highlightedIndex,
                            isIndented: b,
                            label: g.label,
                            onClick: a.$5,
                            onMouseEnter: a.$8,
                            ref: function(b) {
                                return b && a.$2.set(d, b)
                            },
                            rightContent: g.rightContent,
                            uniform: c
                        };
                        return g.type === "item" ? h.createElement(k, babelHelpers["extends"]({}, i, {
                            key: d
                        })) : h.createElement(k, babelHelpers["extends"]({}, i, {
                            href: g.href,
                            key: d,
                            openLinkInNewTab: g.openLinkInNewTab,
                            rel: g.rel
                        }));
                    case "submenu":
                        return h.jsx(l, {
                            behaviors: g.behaviors ? g.behaviors : {},
                            hasIconSibling: f,
                            icon: g.icon,
                            index: d,
                            isDisabled: !!g.isDisabled,
                            isHighlighted: d === a.state.highlightedIndex,
                            isIndented: b,
                            isSubmenuOpen: d === a.state.activeSubmenuIndex,
                            items: g.items,
                            label: g.label,
                            onItemClick: a.$5,
                            onSubmenuVisibilityChange: a.$9,
                            onToggle: g.onToggle,
                            position: g.position ? g.position : "right",
                            ref: function(b) {
                                return b && a.$2.set(d, b)
                            },
                            uniform: c
                        }, d);
                    case "separator":
                        return h.jsx(o, {
                            isIndented: b,
                            uniform: c
                        }, d);
                    case "group":
                        return h.jsx(p, {
                            hasSubmenuSibling: e,
                            isFirstItem: d === 0,
                            label: g.label,
                            rightContent: g.rightContent,
                            uniform: c
                        }, d);
                    default:
                        break
                    }
                    return null
                })
            })
        }
        ;
        return c
    }(h.Component);
    a.defaultProps = {
        focusFirstElementOnMount: !1
    };
    var k = function(c) {
        babelHelpers.inheritsLoose(a, c);
        function a() {
            var a, b;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (a = b = c.call.apply(c, [this].concat(e)) || this,
            b.$1 = h.createRef(),
            b.$2 = function() {
                b.props.onClick(b.props.index)
            }
            ,
            b.$3 = function() {
                b.props.onMouseEnter(b.props.index)
            }
            ,
            a) || babelHelpers.assertThisInitialized(b)
        }
        var d = a.prototype;
        d.focus = function() {
            var a = this.$1.current;
            a instanceof HTMLElement && b("SUIFocusUtil").setFocus(a)
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.description
              , d = a.hasIconSibling
              , e = a.hasSubmenuSibling
              , f = a.href
              , g = a.icon
              , i = a.isDisabled
              , j = a.isHighlighted
              , k = a.isIndented
              , l = a.label
              , o = a.openLinkInNewTab
              , p = a.rel
              , q = a.rightContent;
            a = a.uniform;
            j = m({
                isDisabled: i,
                isHighlighted: j,
                uniform: a
            });
            var r = q != null;
            r = !r && e;
            e = f != null && f !== "";
            var s = "_8l9y";
            k = "_6ff7" + (k ? " _6ff8" : "") + (r ? " _6ff9" : "");
            r = h.jsx(n, {
                description: c,
                hasIconSibling: d,
                icon: g,
                isDisabled: i,
                label: l,
                rightContent: q,
                uniform: a
            });
            c = {
                "aria-disabled": i,
                "data-testid": this.props["data-testid"],
                onClick: this.$2,
                onMouseEnter: this.$3,
                role: "menuitem",
                tabIndex: 0
            };
            return e && !i ? h.jsx("li", {
                className: s,
                role: "presentation",
                children: h.jsx(b("Link.react"), babelHelpers["extends"]({}, c, {
                    className: k,
                    href: f,
                    linkRef: this.$1,
                    rel: p,
                    style: j,
                    target: o === !0 ? "_blank" : "_self",
                    children: r
                }))
            }) : h.jsx("li", babelHelpers["extends"]({}, c, {
                className: s,
                ref: this.$1,
                children: h.jsx("div", {
                    className: k,
                    style: j,
                    children: r
                })
            }))
        }
        ;
        return a
    }(h.PureComponent)
      , l = function(c) {
        babelHelpers.inheritsLoose(a, c);
        function a() {
            var a, b;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (a = b = c.call.apply(c, [this].concat(e)) || this,
            b.state = {
                itemRef: null
            },
            b.$1 = function(a) {
                b.setState({
                    itemRef: a
                })
            }
            ,
            b.$2 = function() {
                b.props.onItemClick(b.props.index)
            }
            ,
            b.$3 = function() {
                b.props.onSubmenuVisibilityChange(b.props.index, !0)
            }
            ,
            b.$4 = function(a) {
                b.props.onSubmenuVisibilityChange(b.props.index, !1, a)
            }
            ,
            b.$5 = function() {
                return b.state.itemRef
            }
            ,
            a) || babelHelpers.assertThisInitialized(b)
        }
        var d = a.prototype;
        d.componentDidUpdate = function(a) {
            a.isSubmenuOpen !== this.props.isSubmenuOpen && this.props.onToggle && this.props.onToggle(this.props.isSubmenuOpen)
        }
        ;
        d.componentWillUnmount = function() {
            this.props.isSubmenuOpen && this.props.onToggle && this.props.onToggle(!1)
        }
        ;
        d.focus = function() {
            this.state.itemRef !== null && b("SUIFocusUtil").setFocus(this.state.itemRef)
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.behaviors;
            c = c === void 0 ? {} : c;
            var d = a.isDisabled
              , e = a.isSubmenuOpen
              , f = a.items
              , g = a.position;
            g = g === void 0 ? "right" : g;
            var k = a.uniform
              , l = a.icon;
            a = a.hasIconSibling;
            var n = b("Locale").isRTL()
              , o = m({
                isDisabled: this.props.isDisabled,
                isHighlighted: this.props.isHighlighted,
                uniform: k
            })
              , p = {
                width: k.itemIconWidth
            };
            n = n ? k.submenuIndicatorRTL : k.submenuIndicatorLTR;
            var q = {};
            d && (q.opacity = .5);
            return h.jsx("li", {
                className: "_8l9y",
                onClick: this.$3,
                onMouseEnter: this.$3,
                ref: this.$1,
                role: "menuitem",
                tabIndex: 0,
                children: h.jsxs("div", {
                    className: "_6ff7 _6ffc" + (this.props.isIndented ? " _6ff8" : ""),
                    style: o,
                    children: [a ? h.jsxs("div", {
                        className: "_2pi3 _6vpg" + (k.itemIconAlignment === "center" ? " _85sa" : ""),
                        children: [l && h.jsx("div", {
                            className: "_6vph",
                            style: p,
                            children: l
                        }), this.props.label]
                    }) : this.props.label, h.jsx("div", {
                        className: "_6ffd",
                        style: q,
                        children: n
                    }), d || this.$5() == null ? null : h.jsx(b("SUISubActionMenuLayer.react"), {
                        behaviors: c,
                        getContextNode: this.$5,
                        isVisible: e,
                        items: f,
                        offsetY: -1 * j - i,
                        onClose: this.$4,
                        onItemClick: this.$2,
                        position: g,
                        uniform: k
                    })]
                })
            })
        }
        ;
        return a
    }(h.PureComponent);
    function m(a) {
        var b = a.isDisabled
          , c = a.isHighlighted;
        a = a.uniform;
        var d = babelHelpers["extends"]({}, a.itemTypeStyle, {
            borderRadius: a.itemBorderRadius,
            color: a.itemColor,
            minHeight: a.itemHeight
        });
        b ? (d.cursor = "default",
        d.color = a.disabledItemColor,
        d.userSelect = "none") : c && (d.color = a.highlightedItemColor,
        d.backgroundColor = a.highlightedItemBackgroundColor);
        return d
    }
    var n = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.render = function() {
            var a = this.props
              , b = a.description
              , c = a.hasIconSibling
              , d = a.icon
              , e = a.isDisabled
              , f = a.label
              , g = a.rightContent;
            a = a.uniform;
            var i = g != null
              , j = b != null
              , k = d != null
              , l = typeof a.itemIconWidth === "number"
              , m = {
                width: a.itemIconWidth
            };
            return h.jsxs(h.Fragment, {
                children: [j || c ? h.jsxs("div", {
                    className: "_2pi3 _6vpg" + (a.itemIconAlignment === "center" ? " _85sa" : ""),
                    children: [k || c && l ? h.jsx("div", {
                        className: "_6vph",
                        style: m,
                        children: d
                    }) : null, h.jsxs("div", {
                        children: [f, j ? h.jsx("div", {
                            style: babelHelpers["extends"]({}, a.descriptionTypeStyle, e ? {
                                color: a.disabledItemColor
                            } : {}),
                            children: b
                        }) : null]
                    })]
                }) : f, i ? h.jsx("span", {
                    className: "_3-9a",
                    children: g
                }) : null]
            })
        }
        ;
        return a
    }(h.PureComponent)
      , o = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.render = function() {
            return h.jsx("li", {
                className: "_6ffg" + (this.props.isIndented ? " _6ffh" : ""),
                style: {
                    borderColor: this.props.uniform.borderColor
                }
            })
        }
        ;
        return a
    }(h.PureComponent)
      , p = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.render = function() {
            var a = this.props
              , b = a.rightContent;
            a = a.uniform;
            b = b != null;
            b = !b && this.props.hasSubmenuSibling;
            return this.props.label != null ? h.jsx("li", {
                className: "_8lau",
                children: h.jsxs("div", {
                    className: "_6ffi" + (b ? " _6ff9" : ""),
                    style: babelHelpers["extends"]({}, a.headerTypeStyle, {
                        color: a.headerColor,
                        minHeight: a.itemHeight
                    }),
                    children: [this.props.label, this.props.rightContent]
                })
            }) : null
        }
        ;
        return a
    }(h.PureComponent);
    function q(a) {
        return (a.type === "item" || a.type === "link" || a.type === "submenu") && !a.isDisabled
    }
    function r(a) {
        var b = [];
        a.forEach(function(c, d) {
            switch (c.type) {
            case "item":
                b.push({
                    isIndented: !1,
                    item: c
                });
                break;
            case "link":
                b.push({
                    isIndented: !1,
                    item: c
                });
                break;
            case "separator":
                b.push({
                    isIndented: !1,
                    item: c
                });
                break;
            case "submenu":
                b.push({
                    isIndented: !1,
                    item: c
                });
                break;
            case "group":
                var e = d === 0;
                e = !e;
                e && b.push({
                    isIndented: !1,
                    item: {
                        type: "separator"
                    }
                });
                b.push({
                    isIndented: !1,
                    item: c
                });
                c.items.forEach(function(a) {
                    b.push({
                        isIndented: !0,
                        item: a
                    })
                });
                e = d === a.length - 1;
                d = a[d + 1];
                d = d && (d.type === "group" || d.type === "separator");
                e = !e && !d;
                e && b.push({
                    isIndented: !1,
                    item: {
                        type: "separator"
                    }
                });
                break;
            default:
                c.type
            }
        });
        return b
    }
    c = b("withSUITheme")(a);
    e.exports = c
}
), null);
__d("LayerFitHeightToScreen", ["DOMVector", "Event", "Style", "SubscriptionsHandler", "Vector", "debounce"], (function(a, b, c, d, e, f) {
    var g = 12;
    a = function() {
        function a(a) {
            var c = this;
            this.$3 = function() {
                var a = c.$1.getContent();
                for (var d = 0; d < 2; d++)
                    a && (a = a.children[0]);
                if (!a)
                    return;
                d = b("Vector").getElementPosition(a).y;
                var e = b("Vector").getViewportDimensions().y
                  , f = b("DOMVector").getScrollPosition().y;
                e = e - (d - f) - g;
                b("Style").apply(a, {
                    maxHeight: e + "px",
                    overflowX: "hidden",
                    overflowY: "auto"
                });
                c.$1.inform("resize", {
                    height: e
                })
            }
            ;
            this.$1 = a;
            this.$2 = null
        }
        var c = a.prototype;
        c.enable = function() {
            this.$2 = new (b("SubscriptionsHandler"))(),
            this.$2.addSubscriptions(b("Event").listen(window, "resize", b("debounce")(this.$3)), this.$1.subscribe("show", this.$3), this.$1.subscribe("reposition", this.$3))
        }
        ;
        c.disable = function() {
            this.$2 && (this.$2.release(),
            this.$2 = null)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("SUIContextMenuLayerBehaviors", ["ContextualLayerAutoFlip", "ContextualLayerHideOnScroll", "LayerAutoFocus", "LayerFitHeightToScreen", "LayerHideOnBlur", "LayerHideOnEscape"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        ContextualLayerAutoFlip: b("ContextualLayerAutoFlip"),
        ContextualLayerHideOnScroll: b("ContextualLayerHideOnScroll"),
        LayerAutoFocus: b("LayerAutoFocus"),
        LayerFitHeightToScreen: b("LayerFitHeightToScreen"),
        LayerHideOnBlur: b("LayerHideOnBlur"),
        LayerHideOnEscape: b("LayerHideOnEscape")
    };
    e.exports = a
}
), null);
__d("SUISubActionMenuLayer.react", ["cssVar", "ContextualLayer.react", "LayerHideSources", "React", "RTLKeys", "SUIActionMenu.react", "SUIContextMenuLayerBehaviors"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function(a) {
                var c = b("RTLKeys").getLeft();
                a.keyCode === c && (a.preventDefault(),
                d.props.onClose())
            }
            ,
            d.$2 = function(a) {
                (a === b("LayerHideSources").BLUR || a === b("LayerHideSources").ESCAPE) && d.props.onClose(a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.behaviors;
            c = c === void 0 ? {} : c;
            var d = a.getContextNode
              , e = a.isVisible
              , f = a.onItemClick
              , g = a.offsetY;
            g = g === void 0 ? 0 : g;
            var i = a.position;
            i = i === void 0 ? "right" : i;
            a = a.uniform;
            if (!e)
                return null;
            a = {
                borderRadius: a == null ? void 0 : a.borderRadius,
                boxShadow: (e = a == null ? void 0 : a.boxShadow) != null ? e : "0 1px 10px rgba(0, 0, 0, 0.2)",
                minWidth: 160
            };
            return h.jsx(b("ContextualLayer.react"), {
                alignment: "left",
                behaviors: babelHelpers["extends"]({}, b("SUIContextMenuLayerBehaviors"), c),
                contextRef: d,
                includeHideSource: !0,
                isStrictlyControlled: !0,
                offsetY: g,
                onHide: this.props.onClose,
                position: i,
                shouldSetARIAProperties: !0,
                shown: !0,
                children: h.jsx("div", {
                    onKeyDown: this.$1,
                    style: a,
                    children: h.jsx(b("SUIActionMenu.react"), {
                        focusFirstElementOnMount: !0,
                        items: this.props.items,
                        onItemClick: f,
                        onSubmenuHide: this.$2
                    })
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("Pleasantville.react", ["React", "ReactDOM", "VideoPlayerHTML5Api", "VideoPlayerReactConfig", "requireWeak", "HTML5OzDrmHelper"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , b = a.offsetType;
            a = a.offsetValue;
            var c = null
              , d = null;
            b == "horizontal" ? d = a : b == "vertical" && (c = a);
            return g.jsx("video", {
                ref: "video",
                muted: this.props.startMuted,
                className: this.props.className,
                "data-video-width": this.props.width || "",
                "data-video-height": this.props.height || "",
                style: {
                    top: c,
                    left: d
                }
            })
        }
        ;
        d.getVideoPlayerInitArgs = function() {
            var a, c;
            b("requireWeak")("VideoPlayerHTML5Shaka", function(b) {
                return a = b
            });
            b("requireWeak")("VideoPlayerHTML5Oz", function(a) {
                return c = a
            });
            var d = this.props.dashModule != null ? this.props.dashModule : this.props.videoData.getPlayerVersionOverwrite() === "oz" ? c || a : a
              , e = this.props.videoData.getDRMHelper() != null ? b("HTML5OzDrmHelper") : null;
            e = {
                videoLicenseUriMap: this.props.videoData.getVideoLicenseUriMap(),
                graphApiVideoLicenseUri: this.props.videoData.getGraphApiVideoLicenseUri(),
                OzDrmHelper: e,
                VideoPlayerHTML5Shaka: d,
                disableNativeControls: !0,
                subtitlesActive: this.props.showSubtitles,
                minQuality: this.props.forceHD ? "hd" : b("VideoPlayerReactConfig").defaultQuality,
                unloadShouldCancelPendingRequest: !0,
                initialRepresentationIds: this.props.initialRepresentationIds
            };
            return {
                apiConfig: e,
                apiModule: b("VideoPlayerHTML5Api"),
                videoElement: b("ReactDOM").findDOMNode(this.refs.video)
            }
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("RelayFBResponseCache", ["RelayRuntime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("RelayRuntime").QueryResponseCache;
    c = 10;
    d = 5 * 60 * 1e3;
    e.exports = new a({
        size: c,
        ttl: d
    })
}
), null);
__d("RelayFBNetwork", ["RelayFBResponseCache", "createRelayFBNetwork", "createRelayFBNetworkFetch", "createRelayFBSubscribeFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("createRelayFBNetwork")(b("createRelayFBNetworkFetch")({
        queryResponseCache: b("RelayFBResponseCache")
    }), b("createRelayFBSubscribeFunction")({
        queryResponseCache: b("RelayFBResponseCache")
    }))
}
), null);
__d("fetchStaticQuery", ["RelayRuntime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayRuntime").getRequest
      , h = b("RelayRuntime").__internal.getOperationVariables;
    function a(a, b, c, d) {
        b = g(b);
        c = h(b.operation, c);
        return a.execute(b.params, c, d || {}).toPromise()
    }
    e.exports = a
}
), null);
__d("VideoComponent", ["CurrentUser", "ErrorBoundary.react", "React", "RelayFBNetwork", "SubscriptionsHandler", "fetchStaticQuery", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    f.createContainer = a;
    var g = b("React");
    function h(a) {
        return a.displayName || a.name || "Component"
    }
    function a(a, c) {
        var d, e = c || {}, f = e.observedVpcEvents || [], i = e.suppressMount || function() {
            return !1
        }
        , j = h(a);
        return d = c = function(c) {
            babelHelpers.inheritsLoose(d, c);
            function d(a) {
                var b;
                b = c.call(this, a) || this;
                b.$7 = function() {
                    if (b.$2 && b.$2.length && b.refs.component) {
                        var a = {
                            time: Date.now(),
                            queuedEvents: b.$2
                        };
                        b.setState({
                            vpcEventInfo: a
                        });
                        b.$2 = []
                    }
                }
                ;
                b.state = {
                    video: null,
                    user: null,
                    vpcEventInfo: {
                        time: 0,
                        queuedEvents: []
                    }
                };
                b.$2 = [];
                return b
            }
            var h = d.prototype;
            h.render = function() {
                return this.$3() ? null : g.jsx(b("ErrorBoundary.react"), {
                    onError: function(a, b) {},
                    children: g.jsx(a, babelHelpers["extends"]({
                        ref: "component"
                    }, this.props, {
                        vpcEventInfo: this.state.vpcEventInfo,
                        video: this.state.video,
                        user: this.state.user
                    }))
                })
            }
            ;
            h.enable = function(a) {
                if (this.$3())
                    return;
                this.vpc = a;
                this.$1 = new (b("SubscriptionsHandler"))();
                this.$4(a);
                var c = this.refs.component;
                if (!c)
                    return;
                if (!c.enable)
                    throw new TypeError(j + " must implement enable(VideoPlayerController)");
                c.enable(a);
                this.$5(a.getVideoID(), e.videoGraphQLQuery)
            }
            ;
            h.disable = function() {
                if (this.$3())
                    return;
                var a = this.refs.component;
                if (!a)
                    return;
                if (!a.disable)
                    throw new TypeError(j + " must implement disable()");
                a.disable();
                this.$1 && this.$1.release()
            }
            ;
            h.$3 = function() {
                return i(this.props.videoData)
            }
            ;
            h.$5 = function(a, c) {
                var d = this;
                if (!a || !c)
                    return;
                b("fetchStaticQuery")(b("RelayFBNetwork"), c, {
                    videoID: a,
                    userID: b("CurrentUser").getID()
                }, {
                    force: !0
                }).then(function(a) {
                    a = a.data;
                    var b = a.video;
                    a = a.user;
                    d.vpc && b && d.refs.component && b.id == d.vpc.getVideoID() && d.setState({
                        video: b
                    });
                    a && d.refs.component && d.setState({
                        user: a
                    })
                })
            }
            ;
            h.$4 = function(a) {
                var b = this
                  , c = function() {
                    if (e) {
                        if (g >= d.length)
                            return "break";
                        h = d[g++]
                    } else {
                        g = d.next();
                        if (g.done)
                            return "break";
                        h = g.value
                    }
                    var c = h
                      , f = a.addListener(c, function() {
                        return b.$6(c)
                    });
                    b.$1.addSubscriptions(f)
                };
                for (var d = f, e = Array.isArray(d), g = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var h, i = c();
                    if (i === "break")
                        break
                }
            }
            ;
            h.$6 = function(a) {
                this.$2.length || b("setImmediate")(this.$7),
                this.$2.push(a)
            }
            ;
            return d
        }(g.Component),
        c.displayName = "VideoComponent(" + j + ")",
        d
    }
}
), null);
__d("VideoComponentClickPlayPause.react", ["React", "VideoComponent", "VideoWithClickPlayPause"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.enable = function(a) {
            new (b("VideoWithClickPlayPause"))(a)
        }
        ;
        d.disable = function() {}
        ;
        d.shouldComponentUpdate = function() {
            return !1
        }
        ;
        d.render = function() {
            return null
        }
        ;
        return c
    }(a.Component);
    d = b("VideoComponent").createContainer(c);
    e.exports = d
}
), null);
__d("VideoComponentSphericalVideoHeadingIndicator.react", ["cx", "Bootloader", "React", "VideoComponent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            b = a.call(this, b) || this;
            b.state = {
                enabled: !1
            };
            return b
        }
        var d = c.prototype;
        d.enable = function(a) {
            var c = this;
            if (!this.props.videoData.isSpherical())
                return;
            this.setState({
                enabled: !0
            }, function() {
                b("Bootloader").loadModules(["VideoSphericalHeadingIndicator"], function(b) {
                    var d = c.props.videoData.getSphericalConfig();
                    new b(a,c.refs.root,d.initialHeading,d.initialPitch,d.fieldOfView)
                }, "VideoComponentSphericalVideoHeadingIndicator.react")
            })
        }
        ;
        d.disable = function() {
            this.setState({
                enabled: !1
            })
        }
        ;
        d.render = function() {
            return !this.state.enabled ? null : h.jsx("div", {
                className: "_3lfe",
                ref: "root"
            })
        }
        ;
        return c
    }(h.Component);
    c = b("VideoComponent").createContainer(a);
    e.exports = c
}
), null);
__d("VideoComponentSphericalVideoOverlay.react", ["cx", "Bootloader", "React", "VideoComponent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            b = a.call(this, b) || this;
            b.state = {
                enabled: !1
            };
            return b
        }
        var d = c.prototype;
        d.enable = function(a) {
            var c = this;
            if (!this.props.videoData.isSpherical())
                return;
            this.setState({
                enabled: !0
            }, function() {
                b("Bootloader").loadModules(["VideoSphericalOverlay"], function(b) {
                    c.$1 && c.$2 && c.$3 && new b(a,c.$1,c.$2,!1,c.$3)
                }, "VideoComponentSphericalVideoOverlay.react")
            })
        }
        ;
        d.disable = function() {
            this.setState({
                enabled: !1
            })
        }
        ;
        d.render = function() {
            var a = this;
            return !this.state.enabled ? null : h.jsxs("div", {
                className: "_1-s8",
                children: [h.jsx("div", {
                    className: "_1zvy",
                    ref: function(b) {
                        a.$1 = b
                    }
                }), h.jsx("div", {
                    className: "_2660",
                    ref: function(b) {
                        a.$2 = b
                    }
                }), h.jsx("div", {
                    className: "_236i",
                    ref: function(b) {
                        a.$3 = b
                    }
                })]
            })
        }
        ;
        return c
    }(h.Component);
    c = b("VideoComponent").createContainer(a);
    e.exports = c
}
), null);
__d("VideoComponentSphericalVideoSpatialAudioController.react", ["Bootloader", "React", "VideoComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.enable = function(a) {
            var c = this;
            if (!this.props.videoData.isSpherical())
                return;
            var d = this.props.videoData.getSphericalConfig();
            if (!d.hasSpatialAudio === !0)
                return;
            b("Bootloader").loadModules(["SphericalVideoSpatialAudioController"], function(d) {
                var b = c.props.videoData.getSphericalConfig()
                  , e = b.spatialAudioBufferParameters
                  , f = b.canUseSpatialAudio
                  , g = b.focusEnabled
                  , h = b.offFocusLevelDB
                  , i = b.focusWidth;
                b = b.remapChannelsForSevenPointOne;
                c.$1 = new d(e,f,g,h,i,!1,b,!1,!1,null);
                c.$1.enable(a)
            }, "VideoComponentSphericalVideoSpatialAudioController.react")
        }
        ;
        d.disable = function() {
            this.$1 && this.$1.destroy()
        }
        ;
        d.render = function() {
            return null
        }
        ;
        return c
    }(a.Component);
    d = b("VideoComponent").createContainer(c);
    e.exports = d
}
), null);
__d("VideoComponentWithSphericalRecenterControl.react", ["Bootloader", "React", "VideoComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.enable = function(a) {
            var c = this;
            if (!this.props.videoData.isSpherical())
                return;
            b("Bootloader").loadModules(["SphericalVideoRecenterControl"], function(b) {
                var d = c.props.videoData.getSphericalConfig();
                c.$1 = new b(a,d.initialHeading,d.initialPitch)
            }, "VideoComponentWithSphericalRecenterControl.react")
        }
        ;
        d.disable = function() {
            this.$1 && this.$1.destroy()
        }
        ;
        d.render = function() {
            return null
        }
        ;
        return c
    }(a.Component);
    d = b("VideoComponent").createContainer(c);
    e.exports = d
}
), null);
__d("VideoComponentWithSphericalVideoPlayer.react", ["Bootloader", "React", "VideoComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.enable = function(a) {
            var c = this;
            if (!this.props.videoData.isSpherical())
                return;
            b("Bootloader").loadModules(["SphericalVideoPlayer"], function(b) {
                var d = c.props.videoData.getSphericalConfig();
                c.$1 = new b(d,{
                    eagerPreload: !0,
                    useContainerDimensions: !0
                });
                c.$1.enable(a)
            }, "VideoComponentWithSphericalVideoPlayer.react")
        }
        ;
        d.disable = function() {
            this.$1 && this.$1.disable()
        }
        ;
        d.render = function() {
            return null
        }
        ;
        return c
    }(a.Component);
    d = b("VideoComponent").createContainer(c);
    e.exports = d
}
), null);
__d("VideoResizeMode", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "FIT";
    f.FIT = a;
    b = "COVER_HEIGHT";
    f.COVER_HEIGHT = b
}
), null);
__d("VideoPlayer.react", ["cx", "FBOverlayBase.react", "FBOverlayContainer.react", "FBOverlayElement.react", "Pleasantville.react", "React", "ReactDOM", "VideoComponentClickPlayPause.react", "VideoComponentSphericalVideoHeadingIndicator.react", "VideoComponentSphericalVideoOverlay.react", "VideoComponentSphericalVideoSpatialAudioController.react", "VideoComponentWithSphericalRecenterControl.react", "VideoComponentWithSphericalVideoPlayer.react", "VideoPlayerController", "VideoPlayerShakaGlobalConfig", "VideoResizeMode", "gkx", "joinClasses", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = {
        showCaptionsDefault: !1,
        onUpdateMetadata: function() {},
        onVideoClick: function() {},
        autoplay: !1,
        autoplayReason: "unknown",
        autoplaySetting: "autoplay_setting_www",
        forceHD: !1,
        startMuted: !1,
        isUnmountScheduled: !1,
        videoResizeMode: b("VideoResizeMode").FIT,
        allowCrossPageTransition: !1,
        disableClickPlayPause: !1,
        disableSphericalComponents: !1
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$5 = function() {
                d.vpcCleanedup || (d.vpc.pause("unloaded"),
                d.vpc.destroy({
                    disableStillFrame: !0
                }),
                d.vpcCleanedup = !0)
            }
            ;
            d.$8 = function(a, c) {
                var e = babelHelpers["extends"]({}, d.props, {
                    videoID: d.props.videoData.getVideoID(),
                    ref: d.$9.bind(babelHelpers.assertThisInitialized(d), c.toString())
                });
                return h.jsx(b("FBOverlayElement.react"), {
                    children: h.cloneElement(a, e)
                }, c)
            }
            ;
            d.componentRefs = new Map();
            d.state = {
                isFullscreen: !1
            };
            d.root = document.createElement("div");
            d.root.className = "_1c_u";
            return d
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1(),
            this.refs.parent.appendChild(this.root),
            this.vpc = this.$2(this.refs.video.getVideoPlayerInitArgs(), this.props.videoData)
        }
        ;
        d.$1 = function() {
            this.props.tabIndex && (this.root.tabIndex = this.props.tabIndex);
            var a = this.props.width !== void 0 || this.props.height !== void 0;
            this.root.style.width = a ? "" : "100%";
            this.root.style.height = a ? "" : "100%"
        }
        ;
        d.componentDidUpdate = function(a) {
            var c = this;
            this.$1();
            b("gkx")("1349777") && (!a.isAutoplayEnabledForRegisterCallback && this.props.isAutoplayEnabledForRegisterCallback ? this.props.registerAutoplayCallback && this.props.registerAutoplayCallback(this) : a.isAutoplayEnabledForRegisterCallback && !this.props.isAutoplayEnabledForRegisterCallback && (this.props.unregisterAutoplayCallback && this.props.unregisterAutoplayCallback()));
            this.$3(a) && (this.$4(this.vpc),
            this.vpc = this.$2(this.refs.video.getVideoPlayerInitArgs(), this.props.videoData));
            a.isUnmountScheduled !== this.props.isUnmountScheduled && this.props.isUnmountScheduled && this.vpc.runOnceOnApiEventLogged("started_playing", function() {
                b("setTimeoutAcrossTransitions")(c.$5, 0);
                return
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$4(this.vpc)
        }
        ;
        d.play = function(a) {
            var b = this.vpc;
            b && b.play(a)
        }
        ;
        d.pause = function(a) {
            var b = this.vpc;
            b && b.pause(a)
        }
        ;
        d.$6 = function() {
            var a = [];
            this.props.disableSphericalComponents || (a.push(h.jsx(b("VideoComponentWithSphericalVideoPlayer.react"), {})),
            a.push(h.jsx(b("VideoComponentWithSphericalRecenterControl.react"), {})),
            a.push(h.jsx(b("VideoComponentSphericalVideoHeadingIndicator.react"), {})),
            a.push(h.jsx(b("VideoComponentSphericalVideoOverlay.react"), {})),
            a.push(h.jsx(b("VideoComponentSphericalVideoSpatialAudioController.react"), {})));
            this.props.disableClickPlayPause || a.push(h.jsx(b("VideoComponentClickPlayPause.react"), {}));
            return a
        }
        ;
        d.$4 = function(a) {
            if (a) {
                for (var b = this.componentRefs.values(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var e;
                    if (c) {
                        if (d >= b.length)
                            break;
                        e = b[d++]
                    } else {
                        d = b.next();
                        if (d.done)
                            break;
                        e = d.value
                    }
                    e = e;
                    e.disable()
                }
                a.runOnApiReady(this.$5)
            }
        }
        ;
        d.$3 = function(a) {
            var b = a.videoData.getVideoID() !== this.props.videoData.getVideoID();
            a = a.videoData.getPlayableSrcSD() !== this.props.videoData.getPlayableSrcSD();
            return b || a
        }
        ;
        d.$2 = function(a, c) {
            var d = this
              , e = a.apiConfig
              , f = a.apiModule;
            a = a.videoElement;
            this.vpcCleanedup = !1;
            e.videoData = [c.getRawData()];
            e.startTimestamp = this.props.startTimestamp;
            var g = new (b("VideoPlayerController"))({
                source: this.props.subOrigin,
                playerOrigin: this.props.playerOrigin || null,
                playerSuboriginDerived: this.props.subOriginDerived,
                reaction_video_channel_type: this.props.reactionVideoChannelType,
                reaction_video_channel_subtype: this.props.reactionVideoChannelSubtype,
                autoplay_reason: this.props.autoplayReason,
                autoplay_setting: this.props.autoplaySetting,
                apiModule: f,
                apiConfig: e,
                should_autoplay: !this.props.isUnmountScheduled && this.props.autoplay,
                player_version: this.props.videoData.getPlayerVersionOverwrite(),
                video_ids: [c.getVideoID()],
                allowCrossPageTransition: this.props.allowCrossPageTransition,
                isReactPlayer: !0,
                video_url: c.getVideoURL(),
                isBroadcast: c.isBroadcast(),
                upstreamPlayerSource: this.props.upstreamPlayerSource || null,
                livingRoomSessionID: this.props.livingRoomSessionID,
                customLoggingProps: this.props.customLoggingProps,
                keepPlayingOnDialog: this.props.keepPlayingOnDialog,
                isChainedLivingRoom: this.props.isChainedLivingRoom,
                liveLinearChannelId: this.props.liveLinearChannelId,
                isReplayLivingRoom: this.props.isReplayLivingRoom,
                customLiveManifestUrlParams: this.props.isLiveClipPreview ? {
                    cp: "1",
                    msx: "m_CT"
                } : null,
                positionInUnit: this.props.positionInUnit,
                captionsAutogeneratedIndicatorConfig: c.getCaptionsAutogeneratedIndicatorConfig(),
                permalinkShareID: this.props.permalinkShareID
            },{
                root_element: this.root,
                container_element: b("ReactDOM").findDOMNode(this.refs.container),
                video_element: b("ReactDOM").findDOMNode(a)
            });
            for (var f = this.componentRefs.values(), e = Array.isArray(f), c = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                if (e) {
                    if (c >= f.length)
                        break;
                    a = f[c++]
                } else {
                    c = f.next();
                    if (c.done)
                        break;
                    a = c.value
                }
                a = a;
                a.enable(g)
            }
            g.addListener("clickVideo", this.props.onVideoClick);
            g.addListener("toggleFullscreen", function() {
                return d.setState({
                    isFullscreen: !!g.isFullscreen()
                })
            });
            g.addListener("updateMetadata", function() {
                return d.props.onUpdateMetadata(g)
            });
            this.props.onVpcUpdate !== null && this.props.onVpcUpdate !== void 0 && this.props.onVpcUpdate(g);
            return g
        }
        ;
        d.$7 = function(a) {
            var c = "_ox1";
            this.props.videoResizeMode == b("VideoResizeMode").COVER_HEIGHT ? c = "_ox1 _41l4" : this.props.offsetType == "horizontal" ? c = "_ox1 _blh" : this.props.offsetType == "vertical" && (c = "_ox1 _bli");
            if (a !== null && a !== void 0)
                return b("joinClasses")(c, a);
            else
                return c
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.width
              , d = a.height;
            a.tabIndex;
            var e = a.videoData
              , f = a.startMuted
              , g = a.offsetValue
              , i = a.className;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["width", "height", "tabIndex", "videoData", "startMuted", "offsetValue", "className"]);
            i = this.$7(i);
            var j = c !== void 0 || d !== void 0;
            j && (d && (c = c || d * e.getAspectRatio()),
            c && (d = d || c / e.getAspectRatio()));
            e = h.jsx(b("Pleasantville.react"), babelHelpers["extends"]({
                ref: "video",
                dashModule: this.props.dashModule,
                videoData: e,
                width: c,
                height: d,
                showSubtitles: this.props.showCaptionsDefault,
                className: i,
                startMuted: f,
                offsetValue: this.state.isFullscreen ? 0 : g
            }, a));
            i = j ? {} : {
                width: "100%",
                height: "100%"
            };
            f = j ? {
                width: (c || 0) + "px",
                height: (d || 0) + "px"
            } : {
                width: "100%",
                height: "100%"
            };
            g = h.jsxs(b("FBOverlayContainer.react"), {
                ref: "container",
                className: "_53j5",
                style: f,
                children: [h.jsx(b("FBOverlayBase.react"), {
                    children: e
                }), h.Children.toArray(this.$6().concat(this.props.children)).filter(function(a) {
                    return a != null
                }).map(this.$8)]
            });
            return h.jsx("div", {
                ref: "parent",
                style: i,
                children: b("ReactDOM").createPortal(h.jsx("div", {
                    style: i,
                    children: g
                }), this.root)
            })
        }
        ;
        d.$9 = function(a, b) {
            !b ? this.componentRefs["delete"](a) : this.componentRefs.set(a, b)
        }
        ;
        return c
    }(h.Component);
    e.exports = c;
    c.defaultProps = a
}
), null);
__d("VideoDataContainer.react", ["cx", "invariant", "regeneratorRuntime", "Promise", "React", "VideoData", "VideoPlayer.react", "VideoPlayerMetaData", "VideoPlayerShakaGlobalConfig"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = !1,
            c.$2 = null,
            c.state = {
                errorData: null,
                isLoading: !0,
                prevVideoID: c.props.videoID,
                videoData: null
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        c.renderSpinner = function(a, b) {
            return i.jsx("div", {
                className: "_53j5",
                style: {
                    height: b,
                    width: a
                },
                children: i.jsx("i", {
                    className: "_5l7x"
                })
            })
        }
        ;
        c.getDerivedStateFromProps = function(a, b) {
            return a.videoID !== b.prevVideoID ? {
                errorData: null,
                isLoading: !0,
                prevVideoID: a.videoID,
                videoData: null
            } : null
        }
        ;
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$3(this.props)
        }
        ;
        d.componentDidUpdate = function(a, b) {
            if (a.actorID !== this.props.actorID || a.videoID !== this.props.videoID || ((a = a.videoDataConfig) == null ? void 0 : a.hostNumber) !== ((a = this.props.videoDataConfig) == null ? void 0 : a.hostNumber))
                this.$3(this.props);
            else if (b.videoData !== this.state.videoData) {
                a = this.props.onVideoLoaded;
                typeof a === "function" && a()
            }
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 = !0
        }
        ;
        d.render = function() {
            var a = this.state
              , d = a.isLoading
              , e = a.videoData;
            a = a.errorData;
            if (a)
                return this.props.renderError ? this.props.renderError(a) : null;
            a = this.props.renderLoading;
            if (d && a)
                return a();
            if (!e || e === c.VIDEO_DATA_PLACEHOLDER)
                return null;
            d = this.props.children;
            d != null && d.type === b("VideoPlayer.react") || h(0, 2154);
            return i.cloneElement(d, {
                videoData: e
            })
        }
        ;
        d.$3 = function(a) {
            var c = this, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1)
                    switch (f.prev = f.next) {
                    case 0:
                        this.$2 = a.videoID;
                        d = null;
                        e = null;
                        if (!(b("VideoPlayerShakaGlobalConfig").getBool("living_room_optimize_raw_video_data_requests", !1) && a.rawVideoData && a.videoID === a.rawVideoData.video_id)) {
                            f.next = 5;
                            break
                        }
                        return f.abrupt("return", b("Promise").resolve().then(function() {
                            !c.$1 && !a.isUnmountScheduled && c.$2 === a.videoID && c.setState({
                                videoData: new (b("VideoData"))(a.rawVideoData),
                                isLoading: !1
                            })
                        }));
                    case 5:
                        f.prev = 5;
                        f.next = 8;
                        return b("regeneratorRuntime").awrap(b("VideoPlayerMetaData").genVideoData(a.videoID, a.videoDataConfig, a.actorID));
                    case 8:
                        e = f.sent;
                        if (!(this.$2 !== a.videoID)) {
                            f.next = 11;
                            break
                        }
                        return f.abrupt("return");
                    case 11:
                        if (!(this.$1 || a.isUnmountScheduled)) {
                            f.next = 13;
                            break
                        }
                        return f.abrupt("return");
                    case 13:
                        if (!(this.$2 !== a.videoID)) {
                            f.next = 15;
                            break
                        }
                        return f.abrupt("return");
                    case 15:
                        f.next = 20;
                        break;
                    case 17:
                        f.prev = 17,
                        f.t0 = f["catch"](5),
                        d = f.t0;
                    case 20:
                        this.$1 || (d !== null ? this.setState({
                            errorData: d
                        }) : this.setState({
                            videoData: e,
                            isLoading: !1
                        }));
                    case 21:
                    case "end":
                        return f.stop()
                    }
            }, null, this, [[5, 17]])
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.VIDEO_DATA_PLACEHOLDER = new (b("VideoData"))()
}
), null);
__d("crc32", [], (function(a, b, c, d, e, f) {
    e.exports = b;
    function b(a) {
        var b = -1;
        for (var c = 0, d = a.length; c < d; c++)
            b = b >>> 8 ^ g[(b ^ a.charCodeAt(c)) & 255];
        return ~b
    }
    var g = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
    a.Int32Array !== void 0 && (g = new Int32Array(g))
}
), null);
__d("XGamesVideoHomeController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/gaming/{?vanity}/", {
        view: {
            type: "Enum",
            enumType: 1
        },
        game_id: {
            type: "FBID"
        },
        section_id: {
            type: "String"
        },
        previous_view: {
            type: "Enum",
            enumType: 1
        },
        sub_view: {
            type: "Enum",
            enumType: 1
        },
        external_ref: {
            type: "Enum",
            defaultValue: "unknown",
            enumType: 1
        },
        hc_ref: {
            type: "String"
        },
        streamer_vanity: {
            type: "String"
        },
        vanity: {
            type: "String"
        },
        video_id: {
            type: "String"
        },
        follow: {
            type: "Bool",
            defaultValue: !1
        },
        go_live: {
            type: "Bool",
            defaultValue: !1
        },
        ref: {
            type: "Enum",
            enumType: 1
        },
        s: {
            type: "Enum",
            enumType: 1
        },
        language: {
            type: "String"
        },
        q: {
            type: "String"
        },
        open_app: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
__d("XVideoPermalinkController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/{vanity}/videos/{?set_token}/{video_id}/{?story_token}/", {
        photo_id: {
            type: "Int"
        },
        set_token: {
            type: "String"
        },
        type: {
            type: "Enum",
            defaultValue: 3,
            enumType: 0
        },
        link_share: {
            type: "String"
        },
        subject: {
            type: "Int"
        },
        object_id: {
            type: "Int"
        },
        opaque_cursor: {
            type: "String"
        },
        legacy_user_id: {
            type: "Int"
        },
        legacy_photo_id: {
            type: "Int"
        },
        video_id: {
            type: "Int"
        },
        comment_id: {
            type: "Int"
        },
        notif_t: {
            type: "String"
        },
        is_notification_preview: {
            type: "Bool",
            defaultValue: !1
        },
        force_theater: {
            type: "Bool",
            defaultValue: !1
        },
        story_token: {
            type: "String"
        },
        extid: {
            type: "String"
        },
        vanity: {
            type: "String"
        },
        __tn__: {
            type: "String"
        },
        t: {
            type: "Int"
        },
        flite: {
            type: "String"
        },
        __so__: {
            type: "Enum",
            enumType: 1
        },
        __rv__: {
            type: "Enum",
            enumType: 1
        },
        redirect: {
            type: "Bool",
            defaultValue: !0
        },
        depth: {
            type: "Int"
        },
        reply_comment_id: {
            type: "Int"
        },
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
