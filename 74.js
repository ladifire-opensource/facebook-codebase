if (self.CavalryLogger) {
    CavalryLogger.start_js(["\/+T1Q"]);
}

__d("LivingRoomTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig", this.$1, {
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
        c.setActualScheduledStartTime = function(a) {
            this.$1.actual_scheduled_start_time = a;
            return this
        }
        ;
        c.setClienttime = function(a) {
            this.$1.clienttime = a;
            return this
        }
        ;
        c.setCommentBody = function(a) {
            this.$1.comment_body = a;
            return this
        }
        ;
        c.setComposerSessionID = function(a) {
            this.$1.composer_session_id = a;
            return this
        }
        ;
        c.setContentItemID = function(a) {
            this.$1.content_item_id = a;
            return this
        }
        ;
        c.setCurationContext = function(a) {
            this.$1.curation_context = a;
            return this
        }
        ;
        c.setDeviceid = function(a) {
            this.$1.deviceid = a;
            return this
        }
        ;
        c.setEntrySource = function(a) {
            this.$1.entry_source = a;
            return this
        }
        ;
        c.setErrorMessage = function(a) {
            this.$1.error_message = a;
            return this
        }
        ;
        c.setErrorStack = function(a) {
            this.$1.error_stack = a;
            return this
        }
        ;
        c.setExitStatus = function(a) {
            this.$1.exit_status = a;
            return this
        }
        ;
        c.setIsCommentReply = function(a) {
            this.$1.is_comment_reply = a;
            return this
        }
        ;
        c.setIsReplay = function(a) {
            this.$1.is_replay = a;
            return this
        }
        ;
        c.setLeaveReason = function(a) {
            this.$1.leave_reason = a;
            return this
        }
        ;
        c.setLivingRoomAction = function(a) {
            this.$1.living_room_action = a;
            return this
        }
        ;
        c.setLivingRoomID = function(a) {
            this.$1.living_room_id = a;
            return this
        }
        ;
        c.setLivingRoomMessageActionType = function(a) {
            this.$1.living_room_message_action_type = a;
            return this
        }
        ;
        c.setLivingRoomMessageType = function(a) {
            this.$1.living_room_message_type = a;
            return this
        }
        ;
        c.setLivingRoomSurface = function(a) {
            this.$1.living_room_surface = a;
            return this
        }
        ;
        c.setManualConfigType = function(a) {
            this.$1.manual_config_type = a;
            return this
        }
        ;
        c.setManualCreationSource = function(a) {
            this.$1.manual_creation_source = a;
            return this
        }
        ;
        c.setManualGroupID = function(a) {
            this.$1.manual_group_id = a;
            return this
        }
        ;
        c.setManualProfileID = function(a) {
            this.$1.manual_profile_id = a;
            return this
        }
        ;
        c.setManualSessionID = function(a) {
            this.$1.manual_session_id = a;
            return this
        }
        ;
        c.setNullStateHscrollIndex = function(a) {
            this.$1.null_state_hscroll_index = a;
            return this
        }
        ;
        c.setNullStateHscrollVideoID = function(a) {
            this.$1.null_state_hscroll_video_id = a;
            return this
        }
        ;
        c.setOldScheduledStartTime = function(a) {
            this.$1.old_scheduled_start_time = a;
            return this
        }
        ;
        c.setPlaylistID = function(a) {
            this.$1.playlist_id = a;
            return this
        }
        ;
        c.setPollID = function(a) {
            this.$1.poll_id = a;
            return this
        }
        ;
        c.setQuery = function(a) {
            this.$1.query = a;
            return this
        }
        ;
        c.setReactionType = function(a) {
            this.$1.reaction_type = a;
            return this
        }
        ;
        c.setSuggestedItemID = function(a) {
            this.$1.suggested_item_id = a;
            return this
        }
        ;
        c.setTargetID = function(a) {
            this.$1.target_id = a;
            return this
        }
        ;
        c.setTimeSpent = function(a) {
            this.$1.time_spent = a;
            return this
        }
        ;
        c.setVideoDialogID = function(a) {
            this.$1.video_dialog_id = a;
            return this
        }
        ;
        c.setVideoError = function(a) {
            this.$1.video_error = a;
            return this
        }
        ;
        c.setVideoEvent = function(a) {
            this.$1.video_event = a;
            return this
        }
        ;
        c.setVideoIDMarauder = function(a) {
            this.$1.video_id_marauder = a;
            return this
        }
        ;
        c.setVideoOffset = function(a) {
            this.$1.video_offset = a;
            return this
        }
        ;
        c.setVideoPlayerFormat = function(a) {
            this.$1.video_player_format = a;
            return this
        }
        ;
        c.setVideoState = function(a) {
            this.$1.video_state = a;
            return this
        }
        ;
        c.setXmaClickSameVideo = function(a) {
            this.$1.xma_click_same_video = a;
            return this
        }
        ;
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        }
        ;
        return a
    }();
    var g = {
        actual_scheduled_start_time: !0,
        clienttime: !0,
        comment_body: !0,
        composer_session_id: !0,
        content_item_id: !0,
        curation_context: !0,
        deviceid: !0,
        entry_source: !0,
        error_message: !0,
        error_stack: !0,
        exit_status: !0,
        is_comment_reply: !0,
        is_replay: !0,
        leave_reason: !0,
        living_room_action: !0,
        living_room_id: !0,
        living_room_message_action_type: !0,
        living_room_message_type: !0,
        living_room_surface: !0,
        manual_config_type: !0,
        manual_creation_source: !0,
        manual_group_id: !0,
        manual_profile_id: !0,
        manual_session_id: !0,
        null_state_hscroll_index: !0,
        null_state_hscroll_video_id: !0,
        old_scheduled_start_time: !0,
        playlist_id: !0,
        poll_id: !0,
        query: !0,
        reaction_type: !0,
        suggested_item_id: !0,
        target_id: !0,
        time_spent: !0,
        video_dialog_id: !0,
        video_error: !0,
        video_event: !0,
        video_id_marauder: !0,
        video_offset: !0,
        video_player_format: !0,
        video_state: !0,
        xma_click_same_video: !0
    };
    e.exports = a
}
), null);
__d("FocusRelocator.react", ["csx", "CSS", "Focus", "React", "getActiveElement"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = b("React");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            var c = this.props
              , d = c.from;
            c = c.to;
            var e = a.from;
            a = a.to;
            e && a && (d !== e || c !== a) && (this.$1 && this.$1.remove(),
            this.$1 = b("Focus").relocate(e, a))
        }
        ;
        d.componentDidUpdate = function() {
            this.$2()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.remove(),
            this.$1 = null
        }
        ;
        d.render = function() {
            return this.props.children
        }
        ;
        d.$3 = function() {
            var a = this.props
              , c = a.from;
            a = a.to;
            c && a && (b("Focus").performRelocation(c, a, b("getActiveElement")() === this.props.from),
            this.$2())
        }
        ;
        d.$2 = function() {
            var a = this;
            this.props.to && b("getActiveElement")() === this.props.from && !b("CSS").matchesSelector(this.props.to, "._16jm") && setTimeout(function() {
                a.$3()
            }, 0)
        }
        ;
        return c
    }(a.Component);
    e.exports = c
}
), null);
__d("StickerInterfaces", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        MESSAGES: "messages",
        NEO: "neo",
        COMMENTS: "comments",
        STICKERED: "stickered",
        COMPOSER: "composer",
        POSTS: "posts",
        FRAMES: "frames",
        SMS: "sms",
        MONTAGE: "montage"
    });
    e.exports = a
}
), null);
__d("UFIStickerButton.react", ["cx", "fbt", "Arbiter", "Bootloader", "FocusRelocator.react", "Link.react", "React", "StickerInterfaces", "createReactClass_DEPRECATED", "getObjectValues", "prop-types", "setImmediate"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    c = b("createReactClass_DEPRECATED")({
        displayName: "UFIStickerButton",
        _clickGuard: !1,
        _updateListener: null,
        _openFlyoutListener: null,
        _linkRef: null,
        propTypes: {
            customStickerOwnerID: (a = b("prop-types")).string,
            onStickerFlyoutShow: a.func,
            onStickerSelected: a.func.isRequired,
            showTooltip: a.bool,
            stickerInterface: a.oneOf(b("getObjectValues")(b("StickerInterfaces"))),
            tabIndex: a.number
        },
        getDefaultProps: function() {
            return {
                customStickerOwnerID: "",
                showTooltip: !0,
                stickerInterface: "comments"
            }
        },
        getInitialState: function() {
            return {
                renderFlyout: null,
                flyoutShown: !1
            }
        },
        componentDidMount: function() {
            var a = this;
            this._updateListener = b("Arbiter").subscribe("page_transition", function() {
                return a._hideFlyout()
            });
            this._openFlyoutListener = b("Arbiter").subscribe("GamingStickers/openFlyout", function(b, c) {
                return a._showFlyout(c)
            })
        },
        componentWillUnmount: function() {
            this._updateListener && this._updateListener.unsubscribe(),
            this._openFlyoutListener && this._openFlyoutListener.unsubscribe()
        },
        render: function() {
            var a = h._("\u0110\u0103ng nh\u00e3n d\u00e1n");
            return i.jsx(b("FocusRelocator.react"), {
                from: this._linkRef,
                to: this.refs.icon,
                children: i.jsxs(b("Link.react"), {
                    "aria-label": a,
                    className: "_r1a UFICommentStickerButton",
                    "data-hover": "tooltip",
                    "data-tooltip-alignh": "center",
                    "data-tooltip-content": this.props.showTooltip ? a : null,
                    linkRef: this._setRef,
                    onClick: this._onLinkClicked,
                    onMouseDown: this._prepareForClick,
                    role: "button",
                    tabIndex: this.props.tabIndex,
                    children: [i.jsx("div", {
                        ref: "icon",
                        className: "UFICommentStickerIcon" + (this.state.flyoutShown ? " UFICommentStickerIconActive" : "")
                    }), this.props.children, this.state.renderFlyout ? this.state.renderFlyout() : null]
                })
            })
        },
        _hideFlyout: function() {
            this.setState({
                flyoutShown: !1
            })
        },
        _showFlyout: function(a) {
            var c = this;
            b("Bootloader").loadModules(["ContextualLayerAutoFlip", "LayerTabIsolation", "StickersFlyout.react", "XUIContextualDialog.react", "StickersActions"], function(d, e, f, g, h) {
                c.setState({
                    flyoutShown: !0,
                    renderFlyout: function() {
                        return i.jsx(g, {
                            alignment: "right",
                            behaviors: {
                                ContextualLayerAutoFlip: d,
                                LayerTabIsolation: e
                            },
                            className: "_5e-r",
                            contextRef: function() {
                                return c._linkRef
                            },
                            onBlur: c._hideFlyout,
                            onToggle: function(a) {
                                !a && c.state.flyoutShown && c._hideFlyout()
                            },
                            position: "above",
                            shown: c.state.flyoutShown,
                            hasActionableContext: !0,
                            width: 278,
                            children: i.jsx("div", {
                                children: i.jsx(f, {
                                    customStickerOwnerID: c.props.customStickerOwnerID,
                                    onEscKeyDown: c._hideFlyout,
                                    onStickerSelect: c._onStickerSelected,
                                    stickerInterface: c.props.stickerInterface,
                                    shown: c.state.flyoutShown
                                })
                            })
                        })
                    }
                }),
                c.props.onStickerFlyoutShow && c.props.onStickerFlyoutShow(),
                a && b("setImmediate")(function() {
                    return h.selectTrayPack(a)
                })
            }, "UFIStickerButton.react")
        },
        _prepareForClick: function() {
            this._clickGuard = this.state.flyoutShown
        },
        _onLinkClicked: function(a) {
            a.preventDefault();
            if (this.state.renderFlyout !== null) {
                this._clickGuard || (this.props.onStickerFlyoutShow && this.props.onStickerFlyoutShow(),
                this.setState({
                    flyoutShown: !0
                }));
                return
            }
            this._showFlyout(null)
        },
        _onStickerSelected: function(a, b, c) {
            this.props.onStickerSelected(a, b, c),
            this._hideFlyout()
        },
        _setRef: function(a) {
            this._linkRef = a
        }
    });
    d = c;
    e.exports = d
}
), null);
__d("EmojiInputButton.react", ["fbt", "Bootloader", "FocusRelocator.react", "Link.react", "React", "createCancelableFunction", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = null;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = null,
            c.state = {
                locked: !1,
                visible: !1,
                isVariationsShown: !1
            },
            c.$5 = function(a) {
                a.preventDefault(),
                a.stopPropagation(),
                c.props.onClick && c.props.onClick(),
                c.setState(function(a) {
                    return {
                        locked: !1,
                        visible: a.locked ? !1 : !a.visible
                    }
                })
            }
            ,
            c.$6 = function(a) {
                c.setState(function(a) {
                    return {
                        locked: a.visible
                    }
                })
            }
            ,
            c.$8 = function(a) {
                a || c.setState({
                    visible: !1,
                    isVariationsShown: !1
                })
            }
            ,
            c.$9 = function(a) {
                c.setState({
                    isVariationsShown: a
                })
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.remove(),
            this.$1 = null,
            this.$2 && this.$2.cancel(),
            this.$2 = null
        }
        ;
        d.render = function() {
            var a = this
              , c = g._("Ch\u00e8n m\u1ed9t bi\u1ec3u t\u01b0\u1ee3ng c\u1ea3m x\u00fac")
              , d = this.state.visible ? b("joinClasses")(this.props.iconActiveClassName, this.props.iconClassName) : this.props.iconClassName;
            return h.jsx(b("FocusRelocator.react"), {
                from: this.$4,
                to: this.$3,
                children: h.jsxs(b("Link.react"), {
                    "aria-label": c,
                    className: this.props.buttonClassName,
                    "data-hover": "tooltip",
                    "data-tooltip-alignh": "center",
                    "data-tooltip-content": c,
                    onClick: this.$5,
                    onDragStart: function(a) {
                        return a.preventDefault()
                    },
                    onMouseDown: this.$6,
                    linkRef: function(b) {
                        return a.$4 = b
                    },
                    role: "button",
                    children: [h.jsx("div", {
                        className: d,
                        ref: function(b) {
                            return a.$3 = b
                        }
                    }), this.$7()]
                })
            })
        }
        ;
        d.$7 = function() {
            var a = this;
            if (!i) {
                this.state.visible && (this.$2 = b("createCancelableFunction")(function() {
                    a.forceUpdate()
                }),
                this.$1 = b("Bootloader").loadModules(["EmojiPicker.react"], function(b) {
                    i = b,
                    a.$2 && (a.$2(),
                    a.$2 = null)
                }, "EmojiInputButton.react"));
                return null
            }
            return !this.state.visible ? null : h.jsx(i, {
                context: this.$4,
                isVariationsShown: this.state.isVariationsShown,
                padPicker: this.props.padPicker,
                onToggle: this.$8,
                onSelect: this.props.onSelect,
                onVariationsShown: this.$9,
                shown: this.state.visible,
                position: this.props.position
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("ScrollColumnEvents", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "ScrollColumn/adjust";
    f.EVENT_SHOULD_ADJUST = a
}
), null);
__d("ScrollColumn.react", ["cx", "invariant", "Arbiter", "Event", "React", "ReactDOM", "ScrollColumnEvents", "SubscriptionsHandler", "Vector", "ViewportBounds", "createReactClass_DEPRECATED", "joinClasses", "prop-types", "throttle", "tidyEvent"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React");
    a = b("createReactClass_DEPRECATED")({
        displayName: "ScrollColumn",
        _subscriptionsHandler: null,
        propTypes: {
            left: b("prop-types").string,
            topOffset: b("prop-types").number,
            zIndex: b("prop-types").number
        },
        getDefaultProps: function() {
            return {
                left: "",
                topOffset: 0,
                zIndex: 0
            }
        },
        _scroll: 0,
        _scrollDelta: 0,
        getInitialState: function() {
            return {
                fixed: null,
                fixedBottom: 0,
                fixedTop: this.props.topOffset,
                top: 0
            }
        },
        render: function() {
            var a = "auto"
              , c = this.state.fixedLeft
              , d = "auto";
            this.state.fixed === "bottom" ? a = this.state.fixedBottom : this.state.fixed === "top" ? d = this.state.fixedTop : (c = "auto",
            d = this.state.top);
            var e = b("joinClasses")(this.props.className, "_5ss7");
            return i.jsx("div", {
                className: e,
                ref: "container",
                children: i.jsx("div", {
                    className: "_5ss8" + (this.state.fixed ? " fixed_always" : ""),
                    ref: "column",
                    style: {
                        bottom: a,
                        left: c,
                        top: d,
                        zIndex: this.props.zIndex
                    },
                    children: this.props.children
                })
            })
        },
        componentDidMount: function() {
            var a = this, c;
            this._subscriptionsHandler = new (b("SubscriptionsHandler"))();
            this._subscriptionsHandler.addSubscriptions((c = b("tidyEvent"))(b("Arbiter").subscribe(b("ScrollColumnEvents").EVENT_SHOULD_ADJUST, function() {
                a._adjust()
            })), c(b("Event").listen(window, "resize", b("throttle")(this._adjust))), c(b("Event").listen(window, "scroll", this._onScroll)), c(b("ViewportBounds").subscribe("change", this._adjust)));
            this._adjust()
        },
        componentDidUpdate: function(a, c) {
            c.fixed !== this.state.fixed && b("Arbiter").inform("reflow")
        },
        componentWillUnmount: function() {
            this._subscriptionsHandler && this._subscriptionsHandler.release()
        },
        _onScroll: function(a) {
            a = b("Vector").getScrollPosition().y;
            this._scrollDelta = a - this._scroll;
            this._scroll = a;
            this._adjust()
        },
        _adjust: function() {
            if (!this.isMounted())
                return;
            this._updateContainerHeight();
            this._updateColumnWidth();
            if (this._isContainerBelowViewportTop()) {
                this._setNotFixed(0);
                return
            }
            if (!this._isColumnLargerThanViewport()) {
                this._setFixedToTop();
                return
            }
            if (this._scrollDelta > 0 && this._isBottomOfColumnVisible()) {
                this._setFixedToBottom();
                return
            }
            if (this._scrollDelta < 0 && this._isTopOfColumnVisible()) {
                this._setFixedToTop();
                return
            }
            var a = this._getTopPositionForRef("column")
              , b = this._getTopPositionForRef("container");
            a = a - b;
            this._setNotFixed(a)
        },
        _getTopPositionForRef: function(a) {
            a = this.refs[a];
            a || h(0, 6103);
            a = b("Vector").getElementPosition(b("ReactDOM").findDOMNode(a), "viewport").y;
            this._scroll < 0 && (a += this._scroll);
            return a
        },
        _getTopBoundWithOffset: function() {
            return b("ViewportBounds").getTop() + this.props.topOffset
        },
        _isContainerBelowViewportTop: function() {
            var a = this._getTopPositionForRef("container");
            return a >= this._getTopBoundWithOffset()
        },
        _isColumnLargerThanViewport: function() {
            var a = b("Vector").getViewportDimensions().y - b("ViewportBounds").getBottom() - this._getTopBoundWithOffset();
            return b("ReactDOM").findDOMNode(this.refs.column).offsetHeight > a
        },
        _isBottomOfColumnVisible: function() {
            var a = this._getTopPositionForRef("column")
              , c = b("Vector").getElementDimensions(b("ReactDOM").findDOMNode(this.refs.column), "viewport").y;
            a = a + c;
            return a <= b("Vector").getViewportDimensions().y - b("ViewportBounds").getBottom()
        },
        _isTopOfColumnVisible: function() {
            var a = this._getTopPositionForRef("column");
            return a >= this._getTopBoundWithOffset()
        },
        _getFixedLeft: function() {
            return b("Vector").getElementPosition(b("ReactDOM").findDOMNode(this.refs.container), "viewport").x
        },
        _setFixedToBottom: function() {
            this.setState({
                fixed: "bottom",
                fixedBottom: b("ViewportBounds").getBottom(),
                fixedLeft: this.props.left === "" ? this._getFixedLeft() : this.props.left
            })
        },
        _setFixedToTop: function() {
            this.setState({
                fixed: "top",
                fixedLeft: this.props.left === "" ? this._getFixedLeft() : this.props.left,
                fixedTop: this._getTopBoundWithOffset()
            })
        },
        _setNotFixed: function(a) {
            this.setState({
                fixed: !1,
                top: a
            })
        },
        _updateContainerHeight: function() {
            b("ReactDOM").findDOMNode(this.refs.container).style.height = b("ReactDOM").findDOMNode(this.refs.column).offsetHeight + this.state.top + "px"
        },
        _updateColumnWidth: function() {
            b("ReactDOM").findDOMNode(this.refs.column).style.width = b("ReactDOM").findDOMNode(this.refs.container).offsetWidth + "px"
        }
    });
    e.exports = a
}
), null);
__d("ComposerXStore", ["Arbiter", "ge"], (function(a, b, c, d, e, f) {
    var g = {};
    function h(a, b) {
        return "ComposerX/" + a + "/" + b
    }
    a = {
        set: function(a, c, d) {
            g[a] || (g[a] = {}),
            g[a][c] = d,
            b("Arbiter").inform(h(a, c), {}, "state")
        },
        get: function(a, b) {
            return g[a] ? g[a][b] : null
        },
        getAllForComposer: function(a) {
            return g[a] || {}
        },
        waitForComponents: function(a, c, d) {
            b("Arbiter").registerCallback(d, c.map(h.bind(null, a)))
        }
    };
    b("Arbiter").subscribe("page_transition", function() {
        for (var a in g)
            b("ge")(a) || delete g[a]
    });
    e.exports = a
}
), null);
__d("LeftFillRightFitLayout.react", ["invariant", "Layout.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("Layout.react").Column
      , i = b("Layout.react").FillColumn
      , j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.$1 = function() {
            var a = []
              , b = this.props.children;
            b && b.length === 2 || g(0, 1534);
            j.Children.forEach(this.props.children, function(b) {
                return a.push(b)
            }, this);
            return {
                firstChild: a[0],
                secondChild: a[1]
            }
        }
        ;
        d.render = function() {
            var a = this.$1();
            return j.jsxs(b("Layout.react"), {
                className: this.props.className,
                style: this.props.style,
                children: [j.jsx(i, {
                    className: this.props.fillColumnClassName,
                    children: a.firstChild
                }), j.jsx(h, {
                    className: this.props.fitColumnClassName,
                    children: a.secondChild
                })]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a
}
), null);
__d("ReactComposerChatroomAttachmentDeferred.react", ["React", "deferredLoadComponent", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    b("React");
    a = b("deferredLoadComponent")(b("requireDeferred")("ReactComposerChatroomAttachment.react"));
    c = a;
    e.exports = c
}
), null);
__d("ReactComposerCollectionActionType", ["keyMirrorRecursive"], (function(a, b, c, d, e, f) {
    a = b("keyMirrorRecursive")({
        ATTACHMENT_SELECT_COLLECTION: null,
        ATTACHMENT_CANCEL_COLLECTION: null,
        SET_COLLECTION: null,
        SET_DEFAULT_CANVAS_AND_TEMPLATE_ID: null,
        SET_POST_TITLE: null,
        SET_PRODUCT_SET_ID: null,
        SET_FEATURED_PRODUCT_IDS: null,
        SHOW_FEATURED_PRODUCT_DIALOG: null,
        HIDE_FEATURED_PRODUCT_DIALOG: null,
        UPDATE_COLLECTION_DIALOG_VISIBILITY: null
    }, "ReactComposerCollectionActionType");
    e.exports = a
}
), null);
__d("LivingRoomConstants", [], (function(a, b, c, d, e, f) {
    a = 5;
    f.END_SCREEN_CHAINING_TIMEOUT_SECONDS = a;
    b = 7500;
    f.FEED_BLUR_OVERLAY_DELAY_MS = b;
    c = {
        uri: "/images/live_video/godzilla_nux/living_room_godzilla_nux.png",
        width: 680,
        height: 380
    };
    f.GROUP_MALL_CARD_BANNER = c;
    d = 20;
    f.INVITE_FRIENDS_RESULTS_PER_PAGE = d;
    e = 10;
    f.INVITE_FRIENDS_RESULTS_PER_EXTRA_PAGE = e;
    a = {
        uri: "/images/live_video/living_room/no_video_thumbnail.png",
        width: 375,
        height: 250
    };
    f.NO_VIDEO_RECAP_THUMBNAIL = a;
    b = 6218;
    f.NUX_CREATE_WITH_CUSTOM_NAME = b;
    c = 6358;
    f.NUX_FEED_PRESENCE = c;
    d = 5612;
    f.NUX_HOST_WELCOME = d;
    e = 5634;
    f.NUX_HOST_WALKTHROUGH = e;
    a = 5972;
    f.NUX_PRE_POP = a;
    b = 5584;
    f.NUX_PRESENCE_TRAY = b;
    c = 5594;
    f.NUX_VIEWER_WELCOME = c;
    d = 6488;
    f.NUX_PAGE_VIDEO_LIBRARY_BUTTON = d;
    e = 5814;
    f.TOPIC_CHANNEL_NUX_VIEWER_WELCOME = e;
    a = 5815;
    f.TOPIC_CHANNEL_NUX_PRESENCE_TRAY = a;
    b = 20;
    f.PARTICIPANTS_PAGE_SIZE = b;
    c = 10;
    f.RECAP_LOAD_SIZE = c;
    d = 5;
    f.RECAP_REFETCH_PADDING = d;
    e = "1f4fa";
    f.TV_EMOJI = e;
    a = "update_suggested_items";
    f.UPDATE_SUGGESTED_ITEMS = a;
    b = "update_video_state";
    f.UPDATE_VIDEO_STATE = b;
    c = "viewer_reaction";
    f.VIEWER_REACTION = c;
    d = 1e-5;
    f.VIDEO_START_SECONDS = d;
    e = 750;
    f.VIDEO_SEARCH_DEBOUNCING_DELAY = e;
    a = "keywords_blended_videos";
    f.VIDEO_SEARCH_BQF = a;
    b = "videos-by";
    f.VIDEO_SEARCH_PAGE_BQF = b;
    c = 20;
    f.VIDEO_SEARCH_RESULTS_PER_PAGE = c;
    d = 10;
    f.VIDEO_SEARCH_RESULTS_PER_EXTRA_PAGE = d;
    e = 400;
    f.SIDE_PANE_WIDTH = e;
    a = 476;
    f.MIN_MEDIA_CONTAINER_WIDTH = a;
    b = 560;
    f.MIN_MEDIA_CONTAINER_HEIGHT = b
}
), null);
__d("LivingRoomTypeValues", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        DEFAULT: "DEFAULT",
        ADD_VIDEO: "ADD_VIDEO",
        ADD_COHOST: "ADD_COHOST",
        INVITE: "INVITE",
        QUEUE: "QUEUE"
    });
    f.SidePaneTypeValue = a;
    b = Object.freeze({
        SEARCH: "SEARCH",
        RECENT: "RECENT",
        GROUP: "GROUP",
        PAGE: "PAGE",
        LIVE: "LIVE",
        SAVED: "SAVED",
        SUGGESTED: "SUGGESTED",
        AUTO: "AUTO",
        MAIN: "MAIN",
        UPLOADED: "UPLOADED",
        SUBSCRIPTIONS: "SUBSCRIPTIONS"
    });
    f.AddVideoTabValue = b;
    c = Object.freeze({
        HIDE: "HIDE",
        SHOW_SEARCH: "SHOW_SEARCH",
        SHOW_ADD_BUTTON: "SHOW_ADD_BUTTON",
        SHOW_SECOND_ADD_DIALOG: "SHOW_SECOND_ADD_DIALOG",
        SHOW_INVITE: "SHOW_INVITE",
        SHOW_PREPOP_INVITE: "SHOW_PREPOP_INVITE"
    });
    f.WalkthroughStepValue = c;
    d = Object.freeze({
        PAGE: "PAGE",
        USER: "USER"
    });
    f.OwnerTypeValue = d
}
), null);
__d("ProfileEngagementTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:ProfileEngagementLoggerConfig", this.$1, {
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
        c.setAppID = function(a) {
            this.$1.appid = a;
            return this
        }
        ;
        c.setAppversion = function(a) {
            this.$1.appversion = a;
            return this
        }
        ;
        c.setBrowseSessionID = function(a) {
            this.$1.browse_session_id = a;
            return this
        }
        ;
        c.setContentID = function(a) {
            this.$1.content_id = a;
            return this
        }
        ;
        c.setEngagementType = function(a) {
            this.$1.engagement_type = a;
            return this
        }
        ;
        c.setEventMetadata = function(a) {
            this.$1.event_metadata = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        }
        ;
        c.setIsemployee = function(a) {
            this.$1.isemployee = a;
            return this
        }
        ;
        c.setItemSubtype = function(a) {
            this.$1.item_subtype = a;
            return this
        }
        ;
        c.setItemType = function(a) {
            this.$1.item_type = a;
            return this
        }
        ;
        c.setName = function(a) {
            this.$1.name = a;
            return this
        }
        ;
        c.setProductBucket = function(a) {
            this.$1.product_bucket = a;
            return this
        }
        ;
        c.setProfileIDDummy = function(a) {
            this.$1.profile_id_dummy = a;
            return this
        }
        ;
        c.setProfileSessionID = function(a) {
            this.$1.profile_session_id = a;
            return this
        }
        ;
        c.setSessionid = function(a) {
            this.$1.sessionid = a;
            return this
        }
        ;
        c.setSubsurface = function(a) {
            this.$1.subsurface = a;
            return this
        }
        ;
        c.setSurface = function(a) {
            this.$1.surface = a;
            return this
        }
        ;
        c.setTabName = function(a) {
            this.$1.tab_name = a;
            return this
        }
        ;
        return a
    }();
    c = {
        appid: !0,
        appversion: !0,
        browse_session_id: !0,
        content_id: !0,
        engagement_type: !0,
        event_metadata: !0,
        isemployee: !0,
        item_subtype: !0,
        item_type: !0,
        name: !0,
        product_bucket: !0,
        profile_id_dummy: !0,
        profile_session_id: !0,
        sessionid: !0,
        subsurface: !0,
        surface: !0,
        tab_name: !0
    };
    e.exports = a
}
), null);
__d("XVideoEditDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/edit/dialog/", {
        video_id: {
            type: "Int"
        },
        source: {
            type: "Enum",
            enumType: 1
        },
        story_dom_id: {
            type: "String"
        },
        timeline_identifier: {
            type: "String"
        },
        post_id: {
            type: "String"
        },
        video_asset_id: {
            type: "Int"
        },
        entry_point: {
            type: "Enum",
            enumType: 1
        },
        tab: {
            type: "Enum",
            enumType: 1
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
