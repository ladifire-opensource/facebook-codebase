if (self.CavalryLogger) {
    CavalryLogger.start_js(["blnD7"]);
}

__d("TranslationRating", [], (function(a, b, c, d, e, f) {
    e.exports = {
        UNDEFINED: 0,
        VERY_BAD: 1,
        BAD: 2,
        OK: 3,
        GOOD: 4,
        VERY_GOOD: 5
    }
}
), null);
__d("FDSRadioListContext", ["React", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        direction: "vertical",
        selectedValue: "",
        size: "large",
        name: b("uniqueID")(),
        onSelect: function(a) {}
    });
    d = c;
    e.exports = d
}
), null);
__d("FDSRadioList.react", ["FDSPrivateFormLabel.react", "FDSPrivateThemeContext.react", "FDSPrivateThemeUtils", "FDSRadioListContext", "FDSText.react", "FlexLayout.react", "React", "cxMargin", "makeFDSStandardComponent", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("FlexLayout.react").flexLayout
      , h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = b("uniqueID")(),
            d.$2 = b("uniqueID")(),
            d.$3 = b("uniqueID")(),
            d.$4 = function(a) {
                a !== d.props.value && d.props.onChange(a)
            }
            ,
            d.state = {
                direction: d.props.direction,
                name: d.$1,
                onSelect: d.$4,
                selectedValue: d.props.value,
                size: d.props.size
            },
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getDerivedStateFromProps = function(a, b) {
            var c = b.selectedValue !== a.value
              , d = b.size !== a.size
              , e = b.direction !== a.direction;
            return c || d || e ? babelHelpers["extends"]({}, b, {
                selectedValue: a.value,
                size: a.size,
                direction: a.direction
            }) : null
        }
        ;
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.children
              , e = c.description
              , f = c.direction
              , i = c.label
              , j = c.labelIsHidden
              , k = c.popover;
            c = c.tooltipText;
            var l = b("FDSRadioListContext")
              , m = i != null ? h.jsx(b("FDSPrivateFormLabel.react"), {
                description: e,
                descriptionId: e != null ? this.$3 : null,
                hasRequirementLabel: !1,
                inputId: this.$2,
                isRequired: !1,
                labelIsHidden: j,
                popover: k,
                title: i,
                tooltipText: c
            }) : null;
            return h.jsx(b("FDSPrivateThemeContext.react").Consumer, {
                children: function(c) {
                    c = b("FDSPrivateThemeUtils").isGeo(c);
                    var i;
                    !c && e != null && (i = h.jsx(b("FDSText.react"), {
                        color: "secondary",
                        display: "block",
                        id: a.$3,
                        margin: "_3-94",
                        size: "body3",
                        weight: "normal",
                        children: e
                    }));
                    return h.jsxs("div", {
                        children: [m, i, h.jsx("div", babelHelpers["extends"]({}, g({
                            direction: f
                        }), {
                            "aria-labelledby": m != null ? a.$2 : void 0,
                            "data-testid": void 0,
                            role: "radiogroup",
                            children: h.jsx(l.Provider, {
                                value: a.state,
                                children: d
                            })
                        }))]
                    })
                }
            })
        }
        ;
        return c
    }(h.PureComponent);
    a.defaultProps = {
        direction: "vertical",
        labelIsHidden: !1,
        size: "large"
    };
    c = b("makeFDSStandardComponent")("FDSRadioList", a);
    e.exports = c
}
), null);
__d("FDSRadioListItem.react", ["cx", "FDSBaseRadioInput.react", "FDSPrivateThemeContext.react", "FDSPrivateThemeUtils", "FDSRadioListContext", "FDSText.react", "FDSTooltip.react", "FlexLayout.react", "React", "expectationViolation", "makeFDSStandardComponent", "stylex", "useUniqueID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("React");
    function a(a) {
        var c = a.isDisabled;
        c = c === void 0 ? !1 : c;
        var d = a.value;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["isDisabled", "value"]);
        var e = i.useContext(b("FDSRadioListContext"))
          , f = e.direction
          , g = e.selectedValue
          , h = e.size
          , j = e.name
          , m = e.onSelect;
        e = d === g;
        g = b("useUniqueID")();
        var n = b("useUniqueID")();
        f = f === "horizontal";
        (j === void 0 || j === null) && b("expectationViolation")("FDSRadioListItem should only be used inside FDSRadioList");
        var o = b("useUniqueID")();
        j = j || o;
        o = i.useCallback(function() {
            m(d)
        }, [m, d]);
        e = i.jsx(b("FDSBaseRadioInput.react"), {
            checked: e,
            describedBy: n,
            htmlForInputId: g,
            isDisabled: c,
            name: j,
            onChange: o,
            size: h,
            value: d
        });
        c && a.disabledMessage != null && (e = i.jsx(b("FDSTooltip.react"), {
            offset: 8,
            tooltip: a.disabledMessage,
            children: e
        }));
        return i.jsxs("div", {
            className: "_7b3w" + (f ? " _3-92" : "") + (f ? "" : " _3-95"),
            "data-testid": void 0,
            children: [i.jsxs(b("FlexLayout.react"), {
                align: "center",
                className: "_7_ol",
                children: [e, i.jsx(l, {
                    media: a.media
                })]
            }), i.jsx(b("FlexLayout.react"), {
                align: "center",
                children: i.jsx(k, {
                    description: a.description,
                    descriptionID: n,
                    id: g,
                    isDisabled: c,
                    isLarge: h === "large",
                    label: a.label
                })
            })]
        })
    }
    function j(a) {
        return i.jsx("div", {
            "aria-hidden": "true",
            className: "nngj4jli aohvghnu",
            children: i.jsx(b("FDSText.react"), {
                color: a.isDisabled ? "disabled" : "secondary",
                id: a.descriptionID,
                size: a.isGeo ? "small" : "body3",
                weight: "normal",
                children: a.description
            })
        })
    }
    function k(a) {
        var c = i.useContext(b("FDSPrivateThemeContext.react"));
        c = b("FDSPrivateThemeUtils").isGeo(c);
        var d = i.jsx("div", {
            className: (h || (h = b("stylex"))).dedupe({
                "line-height-1": "g2p1l37p"
            }, a.isLarge ? null : {
                "line-height-1": "n49e3qhd"
            }),
            children: i.jsx(b("FDSText.react"), {
                color: a.isDisabled ? "disabled" : "primary",
                size: c ? "body1" : "body2",
                weight: "normal",
                children: a.label
            })
        });
        return i.jsx("label", {
            className: "_7b3x" + (a.isDisabled ? " _7prb" : ""),
            htmlFor: a.id,
            children: a.description != null && a.description !== "" ? i.jsxs(i.Fragment, {
                children: [d, i.jsx(j, {
                    description: a.description,
                    descriptionID: a.descriptionID,
                    isDisabled: a.isDisabled,
                    isGeo: c
                })]
            }) : d
        })
    }
    function l(a) {
        return a.media ? i.jsx("div", {
            className: "twqmk5h1 hu05rctj",
            children: a.media
        }) : null
    }
    c = b("makeFDSStandardComponent")("FDSRadioListItem", a);
    e.exports = c
}
), null);
__d("FDSGuidanceCardCloseButton.react", ["FDSCloseButton.react", "FDSGuidanceCardLayoutContext", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c = h.useContext(b("FDSGuidanceCardLayoutContext"));
        return h.jsx("div", {
            className: (g || (g = b("stylex"))).dedupe({
                "position-1": "jyra5cty",
                "end-1": "seipedja",
                "top-1": "tmtru3kt"
            }, c === "vertical" ? {
                "top-1": "bpnoh79y"
            } : null),
            children: h.jsx(b("FDSCloseButton.react"), {
                onClick: a.onPress
            })
        })
    }
}
), null);
__d("XCMSBlockDeliveryController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/cms/render_block/", {})
}
), null);
__d("LeadAdsCMSBlock.react", ["AsyncRequest", "DOM", "DOMContainer.react", "React", "XCMSBlockDeliveryController", "XUISpinner.react", "areEqual"], (function(a, b, c, d, e, f) {
    var g, h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = [],
            d.$2 = !1,
            d.state = {
                busy: !1,
                containerNode: b("DOM").create("span"),
                lastDispatch: 0
            },
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.updateDisplay(this.props)
        }
        ;
        d.componentWillUnmount = function() {
            this.$1.forEach(function(a) {
                return a.abort()
            }),
            this.$2 = !0
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            (g || (g = b("areEqual")))(this.props, a) || this.updateDisplay(a)
        }
        ;
        d.updateDisplay = function(a) {
            var c = this
              , d = Date.now();
            this.setState({
                busy: !0,
                lastDispatch: d
            });
            d = new (b("AsyncRequest"))().setURI(b("XCMSBlockDeliveryController").getURIBuilder().getURI()).setData({
                id: a.id,
                is_fbt: a.isFbt,
                cms_locale: a.locale,
                sent_time: d,
                params: a.parameters
            }).setHandler(function(a) {
                if (c.$2)
                    return;
                a.payload.sent_time === c.state.lastDispatch && (b("DOM").setContent(c.state.containerNode, a.payload.result),
                c.setState({
                    busy: !1
                }))
            });
            this.$1.push(d);
            d.send()
        }
        ;
        d.render = function() {
            return this.state.busy ? h.jsx(b("XUISpinner.react"), {
                size: "large"
            }) : h.jsx(b("DOMContainer.react"), {
                children: this.state.containerNode
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("FBBIcon.react", ["Image.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx("div", {
            style: {
                borderRadius: "50%",
                backgroundColor: "var(fds-spectrum-grape)",
                height: "24px",
                width: "24px"
            },
            children: g.jsx(b("Image.react"), {
                src: a.src
            })
        })
    }
}
), null);
__d("FBBPluginCollapsedSnippet.react", ["cx", "CSSAnimationBuilder", "FBBIcon.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 300
      , j = 3e3;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                isInitialCountdown: !0,
                visible: !0
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentWillAppear = function(a) {
            this.componentWillEnter(a)
        }
        ;
        d.componentWillEnter = function(a) {
            if (!this.$2)
                return;
            a = b("CSSAnimationBuilder").keyframeAnimation(this.$2).defineKeyframe("0%", {
                opacity: 0
            }).defineKeyframe("100%", {
                opacity: 1
            }).setDuration(i / 1e3).setIterationCount(1).setFinishedCallback(a);
            a.start()
        }
        ;
        d.componentWillLeave = function(a) {
            if (!this.$2)
                return;
            a = b("CSSAnimationBuilder").keyframeAnimation(this.$2).defineKeyframe("0%", {
                opacity: 1
            }).defineKeyframe("100%", {
                opacity: 0
            }).setDuration(i / 1e3).setIterationCount(1).setFinishedCallback(a);
            a.start()
        }
        ;
        d.componentDidMount = function() {
            var a = this;
            this.$1 = this.props.vpc.addListener("VideoControls/visibilityUpdate", function(b) {
                b = b.areControlsVisible;
                if (a.state.isInitialCountdown)
                    return;
                a.setState({
                    visible: b
                })
            });
            this.state.isInitialCountdown && (this.$3 = window.setTimeout(function() {
                var b = a.props.vpc.getOption("VideoControls", "areControlsVisible");
                !b ? a.setState({
                    visible: !1,
                    isInitialCountdown: !1
                }) : a.setState({
                    isInitialCountdown: !1
                })
            }, j))
        }
        ;
        d.componentWillUnmount = function() {
            this.$1.remove(),
            window.clearTimeout(this.$3)
        }
        ;
        d.render = function() {
            var a = this;
            return h.jsx("div", {
                onClick: this.props.onClick,
                role: "link",
                style: {
                    cursor: "pointer",
                    opacity: this.state.visible ? 1 : 0
                },
                tabIndex: 0,
                className: b("joinClasses")("_3_mp", this.props.className),
                ref: function(b) {
                    a.$2 = b
                },
                children: h.jsx(b("FBBIcon.react"), {
                    src: this.props.iconSrc
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("FBBReactPluginView.react", ["ix", "cx", "AbstractButton.react", "Image.react", "LeftRight.react", "React", "asset", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        return i.jsxs("div", {
            className: b("joinClasses")("_2kqz", a.className),
            children: [i.jsxs(b("LeftRight.react"), {
                direction: "right",
                children: [i.jsx("span", {
                    className: "_1ip-",
                    children: a.title
                }), i.jsx(b("AbstractButton.react"), {
                    className: "_7vw5",
                    label: a.labelCloseButton,
                    labelIsHidden: !0,
                    onClick: a.onClick,
                    role: "button",
                    image: i.jsx(b("Image.react"), {
                        src: g("515977")
                    })
                })]
            }), i.jsx("div", {
                className: "_1ip_",
                children: a.body
            })]
        })
    }
}
), null);
__d("XVideoPollVoteCardTallyController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/poll_tally/", {
        poll_id: {
            type: "Int",
            required: !0
        },
        video_id: {
            type: "Int",
            required: !0
        }
    })
}
), null);
__d("FBBTimePluginStateController", ["AsyncRequest", "VideoPollsTypedLogger", "XVideoPollVoteCardTallyController", "clearTimeout", "Arbiter", "gkx", "once", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.freeze({
        HIDDEN: "Hidden",
        SNIPPET: "Snippet",
        EXPANDED: "Expanded",
        ICON: "Icon",
        PREVIEW: "Preview"
    });
    f.FBBViewStates = g;
    var h = Object.freeze({
        EXPAND: "Expand",
        COLLAPSE: "Collapse",
        CONDENSE: "Condense"
    });
    f.FBBViewActions = h;
    var i = 8e3;
    a = function() {
        function a(a, c, d, e, f, j, k) {
            var l = this;
            this.$5 = function(a) {}
            ;
            this.tallyPollCardShownOnce = b("once")(function() {
                l.$14(),
                l.$15("vote_card_shown")
            });
            this.logPreviewPollCardShownOnce = b("once")(function() {
                l.$15("vote_card_preview_shown")
            });
            this.$16 = function(a) {
                if (l.$10())
                    return;
                var c = l.$2.getSource() === "tahoe" || l.$2.getSource() === "permalink"
                  , d = c || l.$13;
                if (!d) {
                    b("clearTimeout")(l.$6);
                    l.$17(g.HIDDEN);
                    return
                }
                if (!l.$20(a.position) && !(l.$3 === g.HIDDEN) && !(l.$3 === g.EXPANDED)) {
                    b("clearTimeout")(l.$6);
                    l.$17(g.HIDDEN);
                    return
                }
                switch (l.$3) {
                case g.HIDDEN:
                    l.$20(a.position) && (!l.$13 && b("gkx")("780732") ? l.$17(g.SNIPPET) : c ? l.$17(g.EXPANDED) : l.$17(g.PREVIEW));
                    return;
                case g.SNIPPET:
                    l.$6 = b("setTimeout")(function() {
                        l.$3 === g.SNIPPET && l.$17(g.ICON)
                    }, i);
                    return;
                case g.EXPANDED:
                    l.tallyPollCardShownOnce();
                    l.$8();
                    b("clearTimeout")(l.$6);
                    if (!l.$20(a.position)) {
                        l.initiateAction(h.COLLAPSE);
                        return
                    } else if (!c && l.$13) {
                        l.initiateAction(h.CONDENSE);
                        return
                    }
                    return;
                case g.PREVIEW:
                    l.logPreviewPollCardShownOnce(),
                    b("clearTimeout")(l.$6),
                    !l.$20(a.position) ? l.initiateAction(h.COLLAPSE) : c && l.initiateAction(h.EXPAND)
                }
            }
            ;
            this.$2 = c;
            this.$3 = a;
            this.$4 = d;
            this.$11 = j;
            this.$12 = !1;
            this.$1 = d.key;
            this.$10 = f.bind(this, this.$1);
            this.$8 = e.bind(this, this.$1);
            this.$9 = e.bind(this, null);
            this.$13 = k;
            this.$7 = this.$2.addListener("updateStatus", this.$16);
            this.$2.addListener("stateChange", function() {
                if (l.$2.isState("finished")) {
                    window.clearTimeout(l.$6);
                    l.$17(g.HIDDEN);
                    return
                }
            });
            b("Arbiter").subscribe("FeedPollPillClicked", this.$18.bind(this));
            b("Arbiter").subscribe("PollIconClicked", this.$19.bind(this))
        }
        var c = a.prototype;
        c.registerComponentControl = function(a) {
            this.$5 = a
        }
        ;
        c.initiateAction = function(a) {
            if (a === h.COLLAPSE) {
                var b = this.$2.getCurrentTimePosition();
                this.$20(b) ? b = g.ICON : b = g.HIDDEN
            } else
                a === h.CONDENSE ? b = g.PREVIEW : b = g.EXPANDED;
            this.$3 = b;
            this.$5(this.$3);
            (a === h.COLLAPSE || a === h.CONDENSE) && this.$9()
        }
        ;
        c.destroy = function() {
            this.$7.remove()
        }
        ;
        c.$17 = function(a) {
            if (this.$10())
                return;
            this.$11.pollID !== null && this.$11.pollOwnerID !== null && (a === g.SNIPPET && this.$12 !== !0 && (this.$15("www_full_screen_player_fbb_snippet_rendered"),
            this.$12 = !0));
            this.$3 = a;
            this.$5(a)
        }
        ;
        c.$18 = function(a, b) {
            b.pluginID !== this.$1 ? this.initiateAction(h.COLLAPSE) : this.initiateAction(h.EXPAND)
        }
        ;
        c.$19 = function(a) {
            a = this.$2.getCurrentTimePosition();
            this.$20(a) && this.initiateAction(h.EXPAND)
        }
        ;
        c.$20 = function(a) {
            var b = this.$4
              , c = b.hideTime;
            b = b.releaseTime;
            return a >= b && (c < 0 || a < c)
        }
        ;
        c.$15 = function(a) {
            new (b("VideoPollsTypedLogger"))().setEvent(a).setVideoPollID(this.$11.pollID).setOwnerID(this.$11.pollOwnerID).setVideoID(this.$11.videoID).setCometDesign(this.$13).log()
        }
        ;
        c.updateHideTime = function(b) {
            if (this.$4.hideTime === b)
                return this;
            this.destroy();
            return new a(this.$3,this.$2,babelHelpers["extends"]({}, this.$4, {
                hideTime: b
            }),this.$8,this.$10,this.$11,this.$13)
        }
        ;
        c.$14 = function() {
            var a = this.$11
              , c = a.pollID;
            a = a.videoID;
            if (c == null || a == null)
                return;
            c = b("XVideoPollVoteCardTallyController").getURIBuilder().setInt("poll_id", c).setInt("video_id", a).getURI();
            new (b("AsyncRequest"))().setURI(c).setMethod("POST").send()
        }
        ;
        return a
    }();
    f.FBBTimePluginStateController = a
}
), null);
__d("TimeOffset", ["DateConsts"], (function(a, b, c, d, e, f) {
    "use strict";
    f.timeToTimestamp = a;
    f.timestampToTime = c;
    function a(a) {
        if (a <= 0)
            return "0:00";
        var b = Math.floor(a / 3600)
          , c = b ? b + ":" : "";
        c += ((b ? "0" : "") + Math.floor(a % 3600 / 60)).slice(-2) + ":";
        return c + ("0" + a % 60).slice(-2)
    }
    function c(a) {
        a = a.match(/(?:(\d{1,2}):)?(?:(\d{1,2}):)?(\d{1,2})/);
        if (!a)
            return -1;
        var c = parseInt(a[3], 10);
        a[1] && !a[2] ? c += parseInt(a[1], 10) * b("DateConsts").SEC_PER_MIN : a[1] && a[2] && (c += parseInt(a[1], 10) * b("DateConsts").SEC_PER_HOUR + parseInt(a[2], 10) * b("DateConsts").SEC_PER_MIN);
        return c
    }
}
), null);
__d("ResizeListener", ["EventListener", "SubscriptionList", "requestAnimationFrame"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = !1, i = new (b("SubscriptionList"))(function() {
        g = b("EventListener").listen(window, "resize", j)
    }
    ,function() {
        g.remove()
    }
    );
    function j() {
        h || (h = !0,
        b("requestAnimationFrame")(function() {
            i.fireCallbacks(),
            h = !1
        }))
    }
    a = i;
    e.exports = a
}
), null);
__d("LeafletView", ["invariant", "GeoCoordinates", "ImmutableObject", "nearlyEqualNumbers"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            c || g(0, 666);
            c.center instanceof b("GeoCoordinates") || g(0, 667);
            typeof c.zoom === "number" || g(0, 668);
            return a.call(this, c) || this
        }
        var d = c.prototype;
        d.nearlyEquals = function(a) {
            return this.center.nearlyEquals(a.center) && b("nearlyEqualNumbers")(this.zoom, a.zoom)
        }
        ;
        d.setZoom = function(a) {
            return new c({
                center: this.center,
                zoom: a
            })
        }
        ;
        d.setCenter = function(a) {
            return new c({
                center: a,
                zoom: this.zoom
            })
        }
        ;
        return c
    }(b("ImmutableObject"));
    e.exports = a;
    a.DEFAULT = new a({
        center: new (b("GeoCoordinates"))(0,0),
        zoom: 0
    })
}
), null);
__d("LeafletUtils", ["GeoCoordinates", "LeafletView", "leaflet", "mod"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("leaflet")).CRS.EPSG3857
      , h = 360
      , i = h / 2
      , j = a.LatLng.DEG_TO_RAD
      , k = a.LatLng.RAD_TO_DEG
      , l = a.Projection.Mercator.R_MAJOR
      , m = 2 * Math.PI * l;
    c = new a.LatLngBounds(new a.LatLng(-h / 4,-h / 2),new a.LatLng(h / 4,h / 2));
    var n = {
        WHOLE_WORLD_BOUNDS: c,
        FULL_CIRCLE_DEG: h,
        fromLatLng: function(a) {
            return new (b("GeoCoordinates"))(a.lat,a.lng)
        },
        normalizedBounds: function(a, c) {
            var d = n.wrapLongitude(a.lng);
            c = b("leaflet").latLng(c.lat, c.lng + d - a.lng);
            a = b("leaflet").latLng(a.lat, d);
            return b("leaflet").latLngBounds(a, c)
        },
        fitBounds: function(a, c, d) {
            var e = d.crs || g;
            d = d.zoomRange;
            c = n.getBoundsZoom(a, c, {
                zoomRange: d,
                crs: e
            });
            c == null && (c = d[0]);
            d = e.latLngToPoint(a.getSouthWest(), c);
            a = e.latLngToPoint(a.getNorthEast(), c);
            e = n.fromLatLng(e.pointToLatLng(d.add(a).divideBy(2), c));
            return new (b("LeafletView"))({
                center: e,
                zoom: c
            })
        },
        getBoundsZoom: function(a, c, d) {
            var e = d.crs || g;
            d = d.zoomRange;
            c = b("leaflet").point(c.width, c.height);
            var f = a.getNorthWest();
            a = a.getSouthEast();
            var h = d[0] - 1;
            for (; h <= d[1]; ++h) {
                var i = e.latLngToPoint(a, h + 1)
                  , j = e.latLngToPoint(f, h + 1);
                i = i.subtract(j).floor();
                if (!c.contains(i))
                    break
            }
            if (h < d[0])
                return null;
            return h <= d[1] ? h : h - 1
        },
        getViewBounds: function(a, c, d) {
            d = d || g;
            var e = c.width / 2;
            c = c.height / 2;
            var f = n.toLatLng(a.center);
            f = d.latLngToPoint(f, a.zoom);
            var h = d.pointToLatLng(b("leaflet").point(f.x - e, f.y + c), a.zoom);
            d = d.pointToLatLng(b("leaflet").point(f.x + e, f.y - c), a.zoom);
            return n.normalizedBounds(h, d)
        },
        isViewInBounds: function(a, b, c, d) {
            var e = n.getViewBounds(a, b, d)
              , f = n.shiftBoundsLng(e, h);
            return c.some(function(a) {
                return a.contains(e) || a.contains(f)
            })
        },
        projectCircle: function(a, c, d) {
            d = d || g;
            var e = n.toLatLng(a.center)
              , f = d.projection;
            e = n.circleBounds(e, a.radius, f);
            a = d.latLngToPoint(e.getCenter(), c);
            f = d.latLngToPoint(e.getSouthWest(), c);
            d = d.latLngToPoint(e.getNorthEast(), c);
            e = b("leaflet").point(Math.round((d.x - f.x) / 2), Math.round((f.y - d.y) / 2));
            return {
                center: a,
                radius: e
            }
        },
        circleBounds: function(a, c, d) {
            d = d || g.projection;
            var e = a.lat;
            a = a.lng;
            c = c / l * k;
            var f = d.project(b("leaflet").latLng(e + c, a))
              , h = d.project(b("leaflet").latLng(e - c, a));
            f = f.add(h).divideBy(2);
            h = d.unproject(f).lat;
            d = e * j;
            f = h * j;
            e = Math.acos((Math.cos(c * j) - Math.sin(d) * Math.sin(f)) / (Math.cos(d) * Math.cos(f))) * k;
            return b("leaflet").latLngBounds(b("leaflet").latLng(h - c, a - e), b("leaflet").latLng(h + c, a + e))
        },
        shiftBoundsLng: function(a, c) {
            return b("leaflet").latLngBounds([a.getSouthWest().lat, a.getSouthWest().lng + c], [a.getNorthEast().lat, a.getNorthEast().lng + c])
        },
        toLatLng: function(a) {
            return new (b("leaflet").LatLng)(a.latitude,a.longitude)
        },
        wrapLongitude: function(a) {
            return b("mod")(a + i, h) - i
        },
        areViewEqual: function(a, b) {
            if (!a && !b)
                return !0;
            return !a || !b ? !1 : a.zoom === b.zoom && a.center.latitude === b.center.latitude && a.center.longitude === b.center.longitude
        },
        metersToPixels: function(a, b) {
            return a / (m * Math.abs(Math.cos(b.center.latitude * j)) / Math.pow(2, b.zoom + 8))
        },
        distanceFromLatLng: function(a, c, d) {
            c = c / l;
            d = d * j;
            var e = a.lat * j;
            a = a.lng * j;
            var f = Math.sin(e);
            e = Math.cos(e);
            var g = Math.sin(c);
            c = Math.cos(c);
            var h = Math.sin(d);
            d = Math.cos(d);
            d = f * c + e * g * d;
            var i = Math.asin(d);
            h = h * g * e;
            g = c - f * d;
            e = a + Math.atan2(h, g);
            return new (b("leaflet").LatLng)(i * k,n.wrapLongitude(e * k))
        }
    };
    e.exports = n
}
), null);
__d("FBMapFunnelLoggerConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        GESTURE_SINGLE_TAP: "gesture_single_tap",
        MOVE_MAP: "move_map",
        ZOOM_MAP: "zoom_map",
        MARKER_CLICK: "marker_click"
    };
    f.MAP_INTERACTIVE_EVENTS = a;
    b = {
        MAP_READY: "map_ready",
        FIRST_TILE_LOADED: "first_tile_loaded",
        ALL_VISIBLE_TILES_LOADED: "all_visible_tiles_loaded"
    };
    f.MAP_EVENTS = b;
    c = {
        MAPBOX: "mapbox",
        FACEBOOK: "facebook"
    };
    f.MAP_TILE_SOURCES = c;
    d = {
        IS_INTERACTIVE: "is_interactive"
    };
    f.MAP_TAGS = d
}
), null);
__d("ContentTranslationStrings", ["fbt", "TranslationRating"], (function(a, b, c, d, e, f, g) {
    a = {
        SEE_TRANSLATION: g._("Xem b\u1ea3n d\u1ecbch"),
        SEE_TRANSLATION_TIP: g._("D\u1ecbch b\u00ecnh lu\u1eadn n\u00e0y"),
        NO_TRANSLATION_AVAILABLE: g._("Kh\u00f4ng c\u00f3 s\u1eb5n b\u1ea3n d\u1ecbch"),
        AUTOMATICALLY_TRANSLATED: g._("\u0110\u01b0\u1ee3c d\u1ecbch t\u1ef1 \u0111\u1ed9ng"),
        HIDE_ORIGINAL: g._("\u1ea8n b\u1ea3n g\u1ed1c"),
        SEE_ORIGINAL: g._("Xem b\u1ea3n g\u1ed1c"),
        SEE_ORIGINAL_LINK: g._("Xem n\u1ed9i dung g\u1ed1c"),
        UNDO: g._("Ho\u00e0n t\u00e1c"),
        CANCEL: g._("H\u1ee7y"),
        SUBMIT: g._("G\u1eedi"),
        DONE: g._("Xong"),
        CLOSE: g._("\u0110\u00f3ng"),
        SEARCH: g._("T\u00ecm ki\u1ebfm"),
        ENTER_TRANSLATION: g._("Nh\u1eadp b\u1ea3n d\u1ecbch t\u1ea1i \u0111\u00e2y"),
        EDIT_TRANSLATION_THANKS: g._("C\u1ea3m \u01a1n b\u1ea1n! \u00dd ki\u1ebfn \u0111\u00f3ng g\u00f3p c\u1ee7a b\u1ea1n s\u1ebd gi\u00fap ch\u00fang t\u00f4i c\u1ea3i thi\u1ec7n ch\u1ea5t l\u01b0\u1ee3ng b\u1ea3n d\u1ecbch c\u1ee7a m\u00ecnh."),
        EDIT_TRANSLATION_DIALOG_TITLE_ERROR: g._("G\u1eedi kh\u00f4ng th\u00e0nh c\u00f4ng"),
        EDIT_TRANSLATION_MENU: g._("T\u00f4i c\u00f3 b\u1ea3n d\u1ecbch t\u1ed1t h\u01a1n"),
        RATE_TRANSLATION: g._("X\u1ebfp h\u1ea1ng b\u1ea3n d\u1ecbch n\u00e0y"),
        I_DONT_KNOW: g._("T\u00f4i kh\u00f4ng bi\u1ebft"),
        NO_MATCHING_LANGUAGES: g._("Kh\u00f4ng c\u00f3 ng\u00f4n ng\u1eef ph\u00f9 h\u1ee3p"),
        LANGUAGE_SETTINGS: g._("C\u00e0i \u0111\u1eb7t ng\u00f4n ng\u1eef"),
        CLICK_TO_RATE: g._("Nh\u1ea5p v\u00e0o m\u1ed9t d\u1ea5u sao \u0111\u1ec3 x\u1ebfp h\u1ea1ng"),
        TAP_TO_RATE: g._("Nh\u1ea5n v\u00e0o ng\u00f4i sao \u0111\u1ec3 x\u1ebfp h\u1ea1ng"),
        ORIGINAL_TEXT: g._("V\u0103n b\u1ea3n g\u1ed1c:"),
        YOUR_TRANSLATION: g._("B\u1ea3n d\u1ecbch c\u1ee7a b\u1ea1n:"),
        SETTINGS_SAVED: g._("\u0110\u00e3 l\u01b0u th\u00e0nh c\u00f4ng c\u00e0i \u0111\u1eb7t ng\u00f4n ng\u1eef."),
        REPORT_LANGUAGE_THANKS_FACEBOOK: g._("C\u1ea3m \u01a1n b\u1ea1n \u0111\u00e3 cho ch\u00fang t\u00f4i bi\u1ebft v\u1ec1 l\u1ed7i n\u00e0y. \u00dd ki\u1ebfn \u0111\u00f3ng g\u00f3p c\u1ee7a b\u1ea1n s\u1ebd g\u00f3p ph\u1ea7n c\u1ea3i ti\u1ebfn b\u1ea3n d\u1ecbch cho m\u1ecdi ng\u01b0\u1eddi tr\u00ean Facebook."),
        REPORT_LANGUAGE_THANKS_WORKPLACE: g._("C\u1ea3m \u01a1n b\u1ea1n \u0111\u00e3 b\u00e1o c\u00e1o l\u1ed7i n\u00e0y. \u00dd ki\u1ebfn \u0111\u00f3ng g\u00f3p c\u1ee7a b\u1ea1n s\u1ebd g\u00f3p ph\u1ea7n c\u1ea3i thi\u1ec7n b\u1ea3n d\u1ecbch cho m\u1ecdi ng\u01b0\u1eddi tr\u00ean Workplace."),
        LANGUAGE_SETTINGS_REMINDER: g._("B\u1ea1n c\u00f3 th\u1ec3 thay \u0111\u1ed5i \u0111i\u1ec1u n\u00e0y b\u1ea5t k\u1ef3 l\u00fac n\u00e0o trong c\u00e0i \u0111\u1eb7t ng\u00f4n ng\u1eef."),
        CROWDSOURCING_TARGET_DIALECT_DIALOG: g._("C\u00e0i \u0111\u1eb7t"),
        TRANSLATE_ALL_TEXT: g._("D\u1ecbch t\u1ea5t c\u1ea3 b\u00ecnh lu\u1eadn"),
        NUM_TRANSLATIONS_TEXT: g._("b\u1ea3n d\u1ecbch"),
        getTranslatedFromTo: function(a, b) {
            return g._("\u0110\u01b0\u1ee3c d\u1ecbch t\u1eeb {source language} sang {target language}", [g._param("source language", a), g._param("target language", b)])
        },
        getTranslatedFrom: function(a) {
            return g._("\u0110\u01b0\u1ee3c d\u1ecbch t\u1eeb {source language}", [g._param("source language", a)])
        },
        getReportLanguageDialogBody: function(a, b) {
            b === void 0 && (b = null);
            return b === "generic" ? g._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn n\u1ed9i dung n\u00e0y kh\u00f4ng c\u00f3 b\u1ea3n {language} kh\u00f4ng?", [g._param("language", a)]) : g._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn b\u00e0i vi\u1ebft n\u00e0y kh\u00f4ng s\u1eed d\u1ee5ng {language} kh\u00f4ng?", [g._param("language", a)])
        },
        getReportLanguage: function(a, b) {
            b === void 0 && (b = null);
            return b === "generic" ? g._("N\u1ed9i dung kh\u00f4ng c\u00f3 b\u1ea3n {language}", [g._param("language", a)]) : g._("B\u00e0i vi\u1ebft kh\u00f4ng c\u00f3 b\u1eb1ng {language}", [g._param("language", a)])
        },
        getReportLanguageSelector: function(a, b) {
            b === void 0 && (b = null);
            return b === "generic" ? g._("Ng\u00f4n ng\u1eef th\u1ef1c t\u1ebf c\u1ee7a n\u1ed9i dung n\u00e0y l\u00e0: {language selector}", [g._param("language selector", a)]) : g._("B\u00e0i vi\u1ebft n\u00e0y th\u1ef1c s\u1ef1 b\u1eb1ng: {language selector}", [g._param("language selector", a)])
        },
        getNeverTranslate: function(a) {
            return g._("Kh\u00f4ng bao gi\u1edd d\u1ecbch {language}", [g._param("language", a)])
        },
        getNeverTranslateDialog: function(a, b) {
            b === void 0 && (b = null);
            return b === "generic" ? g._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn kh\u00f4ng? N\u1ed9i dung b\u1eb1ng {language} s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c d\u1ecbch cho b\u1ea1n.", [g._param("language", a)]) : g._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn kh\u00f4ng? C\u00e1c b\u00e0i vi\u1ebft b\u1eb1ng {language} s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c d\u1ecbch cho b\u1ea1n.", [g._param("language", a)])
        },
        getDisableAutoTranslate: function(a) {
            return g._("T\u1eaft d\u1ecbch t\u1ef1 \u0111\u1ed9ng cho {dialect}", [g._param("dialect", a)])
        },
        getDisableAutoTranslateDialog: function(a, b) {
            b === void 0 && (b = null);
            return b === "generic" ? g._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn kh\u00f4ng? N\u1ed9i dung b\u1eb1ng {language} s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c d\u1ecbch t\u1ef1 \u0111\u1ed9ng cho b\u1ea1n.", [g._param("language", a)]) : g._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn kh\u00f4ng? C\u00e1c b\u00e0i vi\u1ebft b\u1eb1ng {dialect} s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c d\u1ecbch t\u1ef1 \u0111\u1ed9ng cho b\u1ea1n.", [g._param("dialect", a)])
        },
        getUserFeedbackTitleForScore: function(a) {
            switch (a) {
            case b("TranslationRating").VERY_BAD:
                return g._("R\u1ea5t k\u00e9m.");
            case b("TranslationRating").BAD:
                return g._("K\u00e9m.");
            case b("TranslationRating").OK:
                return g._("OK.");
            case b("TranslationRating").GOOD:
                return g._("T\u1ed1t.");
            case b("TranslationRating").VERY_GOOD:
                return g._("R\u1ea5t t\u1ed1t.");
            default:
                return null
            }
        },
        getUserFeedbackDescriptionForScore: function(a) {
            switch (a) {
            case b("TranslationRating").VERY_BAD:
                return g._("T\u00f4i kh\u00f4ng hi\u1ec3u g\u00ec c\u1ea3.");
            case b("TranslationRating").BAD:
                return g._("T\u00f4i kh\u00f4ng th\u1ec3 hi\u1ec3u h\u1ea7u h\u1ebft b\u1ea3n d\u1ecbch n\u00e0y.");
            case b("TranslationRating").OK:
                return g._("T\u00f4i c\u00f3 th\u1ec3 hi\u1ec3u s\u01a1 s\u01a1 b\u1ea3n d\u1ecbch n\u00e0y.");
            case b("TranslationRating").GOOD:
                return g._("T\u00f4i c\u00f3 th\u1ec3 hi\u1ec3u h\u1ea7u h\u1ebft b\u1ea3n d\u1ecbch n\u00e0y.");
            case b("TranslationRating").VERY_GOOD:
                return g._("T\u00f4i c\u00f3 th\u1ec3 hi\u1ec3u h\u1ebft t\u1ea5t c\u1ea3.");
            default:
                return null
            }
        }
    };
    e.exports = a
}
), null);
__d("PlatformVersioning", ["invariant", "PlatformVersions", "StrSet", "getObjectValues"], (function(a, b, c, d, e, f, g) {
    var h = new (b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions))
      , i = location.pathname;
    i = i.substring(1, i.indexOf("/", 1));
    var j = h.contains(i) ? i : b("PlatformVersions").versions.UNVERSIONED;
    function k(a, c) {
        if (c == b("PlatformVersions").versions.UNVERSIONED)
            return a;
        h.contains(c) || g(0, 3769);
        a = a.indexOf("/") !== 0 ? "/" + a : a;
        return "/" + c + a
    }
    function a() {
        return b("PlatformVersions").LATEST
    }
    function c(a) {
        return a.setPath(k(a.getPath(), j))
    }
    function d(a) {
        return k(a, j)
    }
    function f(a) {
        return h.contains(a.substring(1, a.indexOf("/", 1))) ? a.substring(a.indexOf("/", 1)) : a
    }
    i = {
        addVersionToPath: k,
        getLatestVersion: a,
        versionAwareURI: c,
        versionAwarePath: d,
        getUnversionedPath: f
    };
    a = i;
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("symbol-observable-1.2.0", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {}
      , h = {
        exports: g
    };
    function i() {
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        g["default"] = a;
        function a(a) {
            var b;
            a = a.Symbol;
            typeof a === "function" ? a.observable ? b = a.observable : (b = a("observable"),
            a.observable = b) : b = "@@observable";
            return b
        }
    }
    var j = !1;
    function k() {
        j || (j = !0,
        i());
        return h.exports
    }
    var l = {}
      , m = {
        exports: l
    };
    function n() {
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var b = k();
        c = c(b);
        function c(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        typeof self !== "undefined" ? b = self : typeof window !== "undefined" ? b = window : typeof a !== "undefined" ? b = a : typeof m !== "undefined" ? b = m : b = Function("return this")();
        c = c["default"](b);
        l["default"] = c
    }
    var o = !1;
    function p() {
        o || (o = !0,
        n());
        return m.exports
    }
    function b(a) {
        switch (a) {
        case void 0:
            return p()
        }
    }
    e.exports = b
}
), null);
