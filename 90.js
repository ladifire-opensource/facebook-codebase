if (self.CavalryLogger) {
    CavalryLogger.start_js(["OZ2uv"]);
}

__d("TextWithEntitiesTruncated.react", ["fbt", "Link.react", "React", "TextWithEntities.react", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = .6;
    function j(a, b, c) {
        return a.map(function(a) {
            return babelHelpers["extends"]({}, a, {
                offset: a.offset - b
            })
        }).filter(function(a) {
            return a.offset >= 0 && a.offset < c
        })
    }
    function k(a, b, c, d) {
        var e = null
          , f = a.split("\n");
        a.length > b && (e = Math.floor(b * (d === !0 ? 1 : i)));
        if (f.length > c) {
            a = f.slice(0, c).join("\n").length;
            e !== null ? e = Math.min(a, e) : e = a
        }
        return e
    }
    function l(a) {
        var b = [];
        a.forEach(function(a) {
            a != null && a.offset != null && a.length != null && a.entity != null && b.push({
                entity: babelHelpers["extends"]({}, a.entity),
                length: a.length,
                offset: a.offset
            })
        });
        return b
    }
    function a(a) {
        var c = a.text
          , d = a.ranges;
        d = d === void 0 ? [] : d;
        var e = a.truncationStyle;
        e = e === void 0 ? "none" : e;
        var f = a.maxLength;
        f = f === void 0 ? 800 : f;
        var i = a.maxLines;
        i = i === void 0 ? 8 : i;
        var m = a.useExactMaxLength;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["text", "ranges", "truncationStyle", "maxLength", "maxLines", "useExactMaxLength"]);
        var n = h.useState(!1)
          , o = n[0]
          , p = n[1];
        if (c == null)
            return null;
        n = c;
        d = l(d);
        var q = null
          , r = function() {
            p(!0)
        }
          , s = function() {
            p(!1)
        };
        if (e !== "none" && !o) {
            f = k(c, f, i, m);
            if (f != null) {
                n = c.substring(0, f);
                d = j(d, 0, n.length);
                switch (e) {
                case "ellipsis-only":
                    q = h.jsx(h.Fragment, {
                        children: g._("\u2026")
                    }, "see-more-less");
                    break;
                case "see-more":
                case "see-more-and-less":
                    q = h.jsxs(h.Fragment, {
                        children: [g._("\u2026"), " ", h.jsx(b("Link.react"), {
                            onClick: r,
                            children: g._("Xem th\u00eam")
                        })]
                    }, "see-more-less")
                }
            }
        } else
            e === "see-more-and-less" && o && (q = h.jsxs(h.Fragment, {
                children: [" ", h.jsx(b("Link.react"), {
                    onClick: s,
                    children: g._("\u1ea8n b\u1edbt")
                })]
            }, "see-more-less"));
        return h.jsxs(h.Fragment, {
            children: [h.jsx(b("TextWithEntities.react"), babelHelpers["extends"]({}, a, {
                ranges: d,
                text: n
            })), q]
        })
    }
    a.propTypes = {
        text: (c = b("prop-types")).string,
        ranges: c.arrayOf(c.shape({
            offset: c.number,
            length: c.number,
            entity: c.object
        })).isRequired,
        truncationStyle: c.oneOf(["none", "ellipsis-only", "see-more", "see-more-and-less"]),
        maxLength: c.number,
        maxLines: c.number,
        useExactMaxLength: c.bool
    }
}
), null);
__d("AbstractDraggableItem.react", ["cssVar", "cx", "CenteredContainer.react", "DOMDimensions", "Draggable", "Event", "FBOverlayContainer.react", "FBOverlayElement.react", "Keys", "React", "Rect", "getScrollPosition", "getViewportDimensions", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = parseInt("1024px", 10)
      , k = 250;
    a = function(a) {
        babelHelpers.inheritsLoose(d, a);
        var c = d.prototype;
        c.componentDidMount = function() {
            this.$5(this.props.item.isMovable)
        }
        ;
        c.componentWillUnmount = function() {
            this.$5(!1)
        }
        ;
        c.componentDidUpdate = function() {
            this.$5(this.props.item.isMovable)
        }
        ;
        c.render = function() {
            var a = this.props.item
              , c = null;
            this.props.item.actionButton && (c = i.jsx(b("FBOverlayElement.react"), {
                horizontal: "right",
                vertical: "fit",
                children: this.props.item.actionButton
            }));
            return i.jsxs(b("FBOverlayContainer.react"), {
                ref: this.$6,
                className: b("joinClasses")(this.getRootClassName(), this.props.className),
                style: {
                    width: this.state.width
                },
                children: [a.label, this.getDragIcon(), this.getDragHandle(), c]
            }, a.id)
        }
        ;
        function d(c) {
            var d;
            d = a.call(this, c) || this;
            d.$6 = function(a) {
                d.$3 = a
            }
            ;
            d.$7 = function(a) {
                d.$2 = a
            }
            ;
            d.$8 = function() {
                if (d.state.dragging)
                    return;
                d.$4 = b("Event").listen(document, "keydown", function(a) {
                    a.keyCode === b("Keys").ESC && (d.$11(),
                    a.preventDefault())
                });
                var a = b("DOMDimensions").getElementDimensions(d.$3);
                a = a.width;
                d.setState({
                    dragging: !0,
                    width: a
                });
                d.props.onGrab(d.props.item.id, d.$3)
            }
            ;
            d.$9 = function() {
                var a = d.$3.parentNode;
                a = new (b("Rect"))(a);
                var c = b("getViewportDimensions")()
                  , e = b("getScrollPosition")(window)
                  , f = Math.max(c.width, j);
                f = new (b("Rect"))(e.y,Math.min(f, a.r + k),c.height + e.y,Math.max(0, a.l - k));
                d.$1 && d.$1.setBoundingBox(f);
                d.props.onDrag()
            }
            ;
            d.$10 = function() {
                d.$12(),
                d.props.onDrop()
            }
            ;
            d.state = {
                dragging: !1,
                width: null
            };
            return d
        }
        c.getDragIcon = function() {
            return !this.props.item.isMovable ? null : i.jsx(b("FBOverlayElement.react"), {
                horizontal: "left",
                vertical: "fit",
                children: i.jsx(b("CenteredContainer.react"), {
                    className: "_80ep",
                    horizontal: !1,
                    vertical: !0,
                    children: i.jsx("div", {
                        className: "_58zl"
                    })
                })
            })
        }
        ;
        c.getDragHandle = function() {
            return i.jsx(b("FBOverlayElement.react"), {
                horizontal: "left",
                vertical: "fit",
                children: i.jsx("div", {
                    className: "_58zn",
                    ref: this.$7
                })
            })
        }
        ;
        c.getRootClassName = function() {
            return (this.props.item.isMovable ? "_58zo" : "") + (this.state.dragging ? " _58zp" : "") + " _58z_" + (this.props.item.isMovable ? "" : " _58-6") + " _58-8"
        }
        ;
        c.$5 = function(a) {
            var c = this.$1;
            a && !c ? this.$1 = new (b("Draggable"))(this.$3).setNamespace("AbstractDraggableList").setUseAbsolute(!0).setGrabHandler(this.$8).setDragHandler(this.$9).setDropHandler(this.$10).setUseScroller(this.props.useScroller).addHandle(this.$2) : !a && c && (c.active && this.$11(),
            c.destroy(),
            this.$1 = null)
        }
        ;
        c.$11 = function() {
            this.$1 && this.$1.killDrag(),
            this.$12(),
            this.props.onCancelDrag()
        }
        ;
        c.$12 = function() {
            this.$1 && this.$1.resetPosition(),
            this.setState({
                dragging: !1,
                width: null
            }),
            this.$4 && this.$4.remove(),
            delete this.$4
        }
        ;
        return d
    }(i.Component);
    e.exports = a;
    a.defaultProps = {
        useScroller: !0
    }
}
), null);
__d("AbstractDraggableList.react", ["cx", "invariant", "AbstractDraggableItem.react", "BinarySearch", "DOMDimensions", "React", "Rect", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                targetIndex: null,
                sourceHeight: null
            },
            d.$5 = function(a) {
                d.$6 = a
            }
            ,
            d.$7 = function(a) {
                var c = d.$6
                  , e = c.childNodes;
                c = e.length - 1 - (d.state.targetIndex !== null ? 1 : 0);
                a = b("BinarySearch").leastUpperBound(function(a) {
                    d.sourceIndex <= a && (a += 1);
                    d.state.targetIndex !== null && d.state.targetIndex <= a && (a += 1);
                    a = new (b("Rect"))(e[a]);
                    return (a.t + a.b) / 2
                }, a, 0, c, function(a, b) {
                    return a - b
                });
                return d.sourceIndex <= a ? a + 1 : a
            }
            ,
            d.$4 = function(a, c) {
                d.sourceIndex = d.props.itemIDs.indexOf(a);
                d.sourceElem = c;
                a = b("DOMDimensions").getElementDimensions(d.sourceElem);
                c = a.height;
                d.setState({
                    sourceHeight: c
                });
                d.$2()
            }
            ,
            d.$2 = function() {
                var a = new (b("Rect"))(d.sourceElem);
                a = (a.t + a.b) / 2;
                a = d.$7(a);
                while (a !== d.props.itemIDs.length && (!d.props.itemsByID[d.props.itemIDs[a]].isMovable || a === d.sourceIndex))
                    a += 1;
                d.setState({
                    targetIndex: a
                })
            }
            ,
            d.$3 = function() {
                var a = d.props.itemIDs[d.sourceIndex]
                  , b = d.state.targetIndex !== d.props.itemIDs.length ? d.props.itemIDs[d.state.targetIndex] : null;
                d.endDrag();
                d.props.onReorder(a, b)
            }
            ,
            d.$1 = function() {
                d.endDrag()
            }
            ,
            d.endDrag = function() {
                delete d.sourceIndex,
                delete d.sourceElem,
                d.setState({
                    sourceHeight: null,
                    targetIndex: null
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.className
              , e = c.itemIDs
              , f = c.itemsByID
              , g = c.itemsRenderer
              , j = c.onRemove;
            c.onReorder;
            var k = c.onSettingsClick
              , l = c.placeholderProps
              , m = c.placeholderRenderer;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["className", "itemIDs", "itemsByID", "itemsRenderer", "onRemove", "onReorder", "onSettingsClick", "placeholderProps", "placeholderRenderer"]);
            e.length !== 0 || h(0, 367);
            var n = e.map(function(b) {
                return i.jsx(g, {
                    className: d,
                    item: f[b],
                    onCancelDrag: a.$1,
                    onDrag: a.$2,
                    onDrop: a.$3,
                    onGrab: a.$4,
                    onRemove: j,
                    onSettingsClick: k
                }, b)
            });
            if (this.state.targetIndex !== null) {
                e = e[this.sourceIndex];
                e = f[e];
                m = m ? i.jsx(m, babelHelpers["extends"]({
                    height: this.state.sourceHeight
                }, l || {}), "_placeholder") : i.jsx("li", {
                    className: e.placeholderClassName || "_58-9",
                    style: {
                        height: this.state.sourceHeight
                    }
                }, "_placeholder");
                n.splice(this.state.targetIndex, 0, m)
            }
            return i.jsx("ul", babelHelpers["extends"]({}, c, {
                ref: this.$5,
                className: b("joinClasses")(d, "_58-a"),
                children: n
            }))
        }
        ;
        return c
    }(i.PureComponent);
    a.propTypes = {
        className: (c = b("prop-types")).string,
        itemIDs: c.array.isRequired,
        itemsByID: c.object.isRequired,
        itemsRenderer: c.oneOfType([c.func, c.object]).isRequired,
        onRemove: c.func.isRequired,
        onReorder: c.func.isRequired,
        onSettingsClick: c.func,
        placeholderRenderer: c.func,
        placeholderProps: c.object
    };
    a.defaultProps = {
        itemsRenderer: b("AbstractDraggableItem.react")
    };
    e.exports = a
}
), null);
__d("MercuryThreadTimestampReact.re", ["MercuryThreadTimestampReact.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MercuryThreadTimestampReact.bs").make;
    f.make = a
}
), null);
__d("MessengerAddIconSVGReact.bs", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var b = a.label
          , c = a.className;
        a = a.customColor;
        return g.jsx("div", {
            children: g.jsxs("svg", {
                children: [g.jsx("title", {
                    children: b
                }), g.jsx("path", {
                    clipRule: "evenodd",
                    d: "M16,0 V32 M0,16 H32",
                    fill: "none",
                    fillRule: "evenodd",
                    stroke: a,
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                })],
                viewBox: "-8 -8 48 48"
            }),
            className: c
        })
    }
    c = a;
    d = a;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("MessengerDeliveryReceipt.bs", ["bs_belt_Option", "bs_belt_MapString"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        return b("bs_belt_Option").getWithDefault(b("bs_belt_MapString").get(a, c), 0)
    }
    c = b("bs_belt_Option").getWithDefault;
    f.$pipe$question = c;
    f.getDeliveryTimeOfThread = a
}
), null);
__d("MessengerDialogTitleReact.re", ["MessengerDialogTitleReact.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerDialogTitleReact.bs").make;
    f.make = a
}
), null);
__d("MercuryThreadTitle_DEPRECATED.react", ["fbt", "MercuryIDs", "MercuryParticipantListRenderer", "MessengerParticipants.bs", "MessengerTextWithEmoticons.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = !1,
            c.state = {
                participantNames: ""
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = !0,
            this.$2(this.props)
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 = !1
        }
        ;
        d.componentDidUpdate = function(a) {
            a !== this.props && this.$2(this.props)
        }
        ;
        d.render = function() {
            return h.jsxs("span", {
                className: this.props.className,
                children: [this.props.thread.name ? this.$3() : this.state.participantNames, this.props.children]
            })
        }
        ;
        d.getTitle = function() {
            return this.state.participantNames
        }
        ;
        d.$3 = function() {
            var a = this.props.thread
              , c = this.props.maxTitle ? this.props.maxTitle < a.name.length ? a.name.slice(0, this.props.maxTitle) + "..." : a.name : a.name;
            c = h.jsx(b("MessengerTextWithEmoticons.react"), {
                renderEmoticons: !0,
                renderEmoji: !0,
                text: c
            });
            return !a.unread_count || !this.props.showUnreadCount ? c : this.$4(c, a.unread_count)
        }
        ;
        d.$2 = function(a) {
            var c = this;
            if (a.thread.name)
                return;
            this.setState({
                participantNames: ""
            });
            var d = b("MercuryIDs").getParticipantIDFromUserID(a.viewer)
              , e = a.thread.participants || [];
            e.length > 1 && (e = e.filter(function(a) {
                return a != d
            }));
            b("MessengerParticipants.bs").getMulti(e, function(d) {
                if (!c.$1)
                    return;
                var f = e.map(function(a) {
                    return d[a]
                })
                  , g = a.thread.custom_nickname ? {} : null
                  , i = b("MessengerTextWithEmoticons.react");
                if (g)
                    for (var j in a.thread.custom_nickname)
                        g[j] = h.jsx(i, {
                            renderEmoticons: !0,
                            renderEmoji: !0,
                            text: a.thread.custom_nickname[j]
                        });
                i = new (b("MercuryParticipantListRenderer"))().setUseShortName(a.useShortName).setUseAndSeparator(a.useAndSeparator).setIsNewThread(a.isNewThread).setNickname(g).renderParticipantList(f);
                g = a.showUnreadCount && a.thread.unread_count ? c.$4(i, a.thread.unread_count) : i;
                c.setState({
                    participantNames: g
                })
            })
        }
        ;
        d.$4 = function(a, b) {
            return g._("{conversation-title} ({unread-count})", [g._param("conversation-title", a), g._param("unread-count", b)])
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.defaultProps = {
        isNewThread: !1,
        showUnreadCount: !1,
        useShortName: !1,
        useAndSeparator: !1
    }
}
), null);
__d("handlePastedTextForMessengerEmoji", ["DraftModifier", "EditorState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e) {
        c = c - a;
        a = e.getSelection();
        a.isCollapsed() || (c += 1 + a.getEndOffset() - a.getStartOffset());
        if (c <= 0)
            return e;
        d = d.slice(0, c);
        c = a.isCollapsed() ? b("DraftModifier").insertText(e.getCurrentContent(), a, d, e.getCurrentInlineStyle()) : b("DraftModifier").replaceText(e.getCurrentContent(), a, d, e.getCurrentInlineStyle());
        return b("EditorState").push(e, c, "insert-characters")
    }
}
), null);
__d("MercuryMessageStore", ["CurrentUser", "LogHistory", "MercuryAPIArgsSource", "MercuryThreadInformer", "MercuryThreadlistConstants", "MessengerState.bs", "SubscriptionsHandler", "mixInEventEmitter", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("LogHistory").getInstance("mercury_message_store");
    a = function() {
        function a(a, c, d) {
            var e = this;
            this.$5 = a;
            this.$1 = d || b("CurrentUser").getID();
            this.$2 = 1;
            this.$3 = c || b("MercuryThreadlistConstants").RECENT_MESSAGES_LIMIT;
            this.$6 = d ? b("MercuryThreadInformer").getForFBID(d) : b("MercuryThreadInformer").get();
            this.$4 = new (b("SubscriptionsHandler"))();
            this.$4.addSubscriptions(this.$6.subscribe("messages-received", function(a, b) {
                return e.$7(b)
            }), this.$6.subscribe("messages-updated", function(a, b) {
                return b[e.$5] && e.$8(b[e.$5])
            }), this.$6.subscribe("messages-deleted", function(a, b) {
                return b[e.$5] && e.$9(b[e.$5])
            }), this.$6.subscribe("messages-reordered", function(a, b) {
                return b[e.$5] && e.$10()
            }), this.$6.subscribe("thread-invalidated", function(a, b) {
                return b[e.$5] && e.$11()
            }));
            a = this.$12();
            g.debug("constructed", JSON.stringify({
                threadID: this.$5,
                messageCount: a
            }));
            a < this.$3 ? this.$13() : b("setImmediate")(function() {
                e.$10()
            })
        }
        var c = a.prototype;
        c.destroy = function() {
            this.$4 && this.$4.release(),
            g.debug("destroyed", JSON.stringify({
                threadID: this.$5
            }))
        }
        ;
        c.subscribe = function(a) {
            return this.addRetroactiveListener("updated", a)
        }
        ;
        c.fetchMoreMessages = function() {
            if (this.hasFetchedAll())
                return !1;
            this.$13();
            return !0
        }
        ;
        c.hasFetchedAll = function() {
            return b("MessengerState.bs").hasLoadedAllMessages(this.$1, this.$5) || b("MessengerState.bs").isNewEmptyLocalThread(this.$1, this.$5)
        }
        ;
        c.$12 = function() {
            return b("MessengerState.bs").getCurrentlyLoadedMessages(this.$1, this.$5).length
        }
        ;
        c.$13 = function() {
            var a = this
              , c = this.$3;
            b("MessengerState.bs").getThreadMessagesRange(this.$1, this.$5, this.$12(), c, this.$14.bind(this), null, b("MercuryAPIArgsSource").MERCURY);
            this.$2 < 10 && (this.$2 += 1);
            b("MessengerState.bs").hasLoadedNMessages(this.$1, this.$5, c + this.$12()) && b("setImmediate")(function() {
                a.$10()
            })
        }
        ;
        c.$14 = function(b) {
            g.debug("fetch_messages", JSON.stringify({
                threadID: this.$5,
                fetchedMessagesCount: b && b.length || 0,
                messageCount: this.$12()
            })),
            b && !b.length && !this.$12() && this.$15(a.THREAD_IS_EMPTY)
        }
        ;
        c.$7 = function(b) {
            var c = [];
            b = b[this.$5];
            b && b.length && (c = c.concat(b.filter(function(a) {
                return !!a
            })));
            c.length && this.$15(a.MESSAGES_RECEIVED)
        }
        ;
        c.$8 = function(b) {
            this.$15(a.MESSAGES_CHANGED)
        }
        ;
        c.$9 = function(b) {
            this.$15(a.MESSAGES_DELETED, b)
        }
        ;
        c.$10 = function() {
            this.$15(a.MESSAGES_REORDERED)
        }
        ;
        c.$11 = function() {
            this.$2 = 1,
            this.$13()
        }
        ;
        c.$15 = function(a, c) {
            var d = b("MessengerState.bs").getCurrentlyLoadedMessages(this.$1, this.$5);
            this.releaseHeldEventType("updated");
            this.emitAndHold("updated", {
                messages: d,
                deletedMessages: c,
                eventType: a
            })
        }
        ;
        return a
    }();
    e.exports = a;
    Object.assign(a, {
        MESSAGES_FETCHED: "fetched",
        MESSAGES_CHANGED: "changed",
        MESSAGES_RECEIVED: "received",
        MESSAGES_REORDERED: "reordered",
        MESSAGES_DELETED: "deleted",
        THREAD_IS_EMPTY: "thread-is-empty"
    });
    b("mixInEventEmitter")(a, {
        updated: !0
    })
}
), null);
__d("MessengerGameDialogSendingSpinner.react", ["cx", "fbt", "MessengerSpinner.react", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a() {
        return i.jsxs("div", {
            children: [i.jsx(b("MessengerSpinner.react"), {}), i.jsx("span", {
                className: "_1e1n _3-99",
                children: h._("\u0110ang g\u1eedi")
            })]
        })
    }
}
), null);
__d("MNCommerceDialogStateActions", ["MessengerDispatcher", "MNCommerceActionTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    f.showDialog = a;
    f.hideDialog = c;
    function a(a, c) {
        b("MessengerDispatcher").dispatch({
            type: b("MNCommerceActionTypes").DIALOG.SHOW,
            dialogContainer: a,
            state: c
        })
    }
    function c() {
        b("MessengerDispatcher").dispatch({
            type: b("MNCommerceActionTypes").DIALOG.HIDE
        })
    }
}
), null);
__d("MessengerSearchFunnelLoggerConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "WWW_MESSENGER_SEARCH_SESSION_FUNNEL";
    f.NAME = a;
    b = "fetched_state_impression_list";
    f.FETCHED_STATE_IMPRESSION_LIST = b;
    c = "loading_state_impression_list";
    f.LOADING_STATE_IMPRESSION_LIST = c;
    d = "send_server_request";
    f.SEND_SERVER_REQUEST = d;
    e = "www";
    f.WWW_SIDEBAR_TAG = e;
    a = "messenger_dot_com";
    f.MESSENGER_DOT_COM = a;
    b = "universal_search";
    f.UNIVERSAL_SEARCH = b;
    c = "user_contact";
    f.USER_CONTACT = c;
    d = "user_non_contact";
    f.USER_NON_CONTACT = d;
    e = "group";
    f.GROUP = e;
    a = "page";
    f.PAGE = a;
    b = "game";
    f.GAME = b;
    c = "tincan";
    f.TINCAN = c;
    d = "message";
    f.MESSAGE = d;
    e = "sms";
    f.SMS = e;
    a = "sms_group";
    f.SMS_GROUP = a;
    b = "coworker";
    f.COWORKER = b;
    c = "other";
    f.OTHER = c
}
), null);
__d("WIGCircleButton.react", ["React", "TetraCircleButton.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        return g.jsx(b("TetraCircleButton.react"), babelHelpers["extends"]({
            ref: c
        }, a))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("WIGLink.react", ["CometLink.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        return g.jsx(b("CometLink.react"), babelHelpers["extends"]({
            ref: c
        }, a))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("WIGProgressIndicator.react", ["CometProgressIndicator.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx(b("CometProgressIndicator.react"), babelHelpers["extends"]({}, a))
    }
}
), null);
__d("WIGTextPairing.react", ["React", "TetraTextPairing.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx(b("TetraTextPairing.react"), babelHelpers["extends"]({}, a))
    }
}
), null);
__d("useFocusState", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, b) {
        var c = g.useState(!1)
          , d = c[0]
          , e = c[1];
        c = g.useCallback(function(b) {
            e(!0),
            a && a(b)
        }, [a]);
        var f = g.useCallback(function(a) {
            e(!1),
            b && b(a)
        }, [b]);
        return [d, c, f]
    }
}
), null);
__d("bs_js_exn", ["bs_caml_js_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        throw new Error(a)
    }
    function c(a) {
        throw new EvalError(a)
    }
    function d(a) {
        throw new RangeError(a)
    }
    function e(a) {
        throw new ReferenceError(a)
    }
    function g(a) {
        throw new SyntaxError(a)
    }
    function h(a) {
        throw new TypeError(a)
    }
    function i(a) {
        throw new URIError(a)
    }
    b = b("bs_caml_js_exceptions").$$Error;
    f.$$Error = b;
    f.raiseError = a;
    f.raiseEvalError = c;
    f.raiseRangeError = d;
    f.raiseReferenceError = e;
    f.raiseSyntaxError = g;
    f.raiseTypeError = h;
    f.raiseUriError = i
}
), null);
__d("bs_list", ["bs_curry", "bs_caml_obj", "bs_pervasives", "bs_caml_option", "bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        var b = 0;
        a = a;
        while (!0) {
            var c = a
              , d = b;
            if (c) {
                a = c[1];
                b = d + 1 | 0;
                continue
            } else
                return d
        }
    }
    function a(a, b) {
        return [a, b]
    }
    function c(a) {
        if (a)
            return a[0];
        else
            throw [b("bs_caml_builtin_exceptions").failure, "hd"]
    }
    function d(a) {
        if (a)
            return a[1];
        else
            throw [b("bs_caml_builtin_exceptions").failure, "tl"]
    }
    function e(a, c) {
        if (c < 0)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.nth"];
        a = a;
        c = c;
        while (!0) {
            var d = c
              , e = a;
            if (e)
                if (d === 0)
                    return e[0];
                else {
                    c = d - 1 | 0;
                    a = e[1];
                    continue
                }
            else
                throw [b("bs_caml_builtin_exceptions").failure, "nth"]
        }
    }
    function h(a, c) {
        if (c < 0)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.nth"];
        a = a;
        c = c;
        while (!0) {
            var d = c
              , e = a;
            if (e)
                if (d === 0)
                    return b("bs_caml_option").some(e[0]);
                else {
                    c = d - 1 | 0;
                    a = e[1];
                    continue
                }
            else
                return
        }
    }
    function i(a, b) {
        while (!0) {
            var c = b
              , d = a;
            if (d) {
                b = [d[0], c];
                a = d[1];
                continue
            } else
                return c
        }
    }
    function j(a) {
        return i(a, 0)
    }
    function k(a, c, d, e) {
        while (!0) {
            var f = c
              , g = a;
            if (f >= d)
                return g;
            else {
                c = f + 1 | 0;
                a = [b("bs_curry")._1(e, f), g];
                continue
            }
        }
    }
    function l(a, c, d) {
        if (a >= c)
            return 0;
        else {
            var e = b("bs_curry")._1(d, a);
            return [e, l(a + 1 | 0, c, d)]
        }
    }
    function m(a, c) {
        if (a < 0)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.init"];
        if (a > 1e4)
            return i(k(0, 0, a, c), 0);
        else
            return l(0, a, c)
    }
    function n(a) {
        if (a)
            return b("bs_pervasives").$at(a[0], n(a[1]));
        else
            return 0
    }
    function o(a, c) {
        if (c) {
            var d = b("bs_curry")._1(a, c[0]);
            return [d, o(a, c[1])]
        } else
            return 0
    }
    function p(a, c, d) {
        if (d) {
            var e = b("bs_curry")._2(c, a, d[0]);
            return [e, p(a + 1 | 0, c, d[1])]
        } else
            return 0
    }
    function q(a, b) {
        return p(0, a, b)
    }
    function r(a, c) {
        var d = 0;
        c = c;
        while (!0) {
            var e = c
              , f = d;
            if (e) {
                c = e[1];
                d = [b("bs_curry")._1(a, e[0]), f];
                continue
            } else
                return f
        }
    }
    function s(a, c) {
        while (!0) {
            var d = c;
            if (d) {
                b("bs_curry")._1(a, d[0]);
                c = d[1];
                continue
            } else
                return 0
        }
    }
    function t(a, c) {
        var d = 0;
        a = a;
        c = c;
        while (!0) {
            var e = c
              , f = d;
            if (e) {
                b("bs_curry")._2(a, f, e[0]);
                c = e[1];
                d = f + 1 | 0;
                continue
            } else
                return 0
        }
    }
    function u(a, c, d) {
        while (!0) {
            var e = d
              , f = c;
            if (e) {
                d = e[1];
                c = b("bs_curry")._2(a, f, e[0]);
                continue
            } else
                return f
        }
    }
    function v(a, c, d) {
        if (c)
            return b("bs_curry")._2(a, c[0], v(a, c[1], d));
        else
            return d
    }
    function w(a, c, d) {
        if (c)
            if (d) {
                var e = b("bs_curry")._2(a, c[0], d[0]);
                return [e, w(a, c[1], d[1])]
            } else
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.map2"];
        else if (d)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.map2"];
        else
            return 0
    }
    function x(a, c, d) {
        var e = 0;
        c = c;
        d = d;
        while (!0) {
            var f = d
              , g = c
              , h = e;
            if (g)
                if (f) {
                    d = f[1];
                    c = g[1];
                    e = [b("bs_curry")._2(a, g[0], f[0]), h];
                    continue
                } else
                    throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.rev_map2"];
            else {
                if (f)
                    throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.rev_map2"];
                return h
            }
        }
    }
    function y(a, c, d) {
        while (!0) {
            var e = d
              , f = c;
            if (f)
                if (e) {
                    b("bs_curry")._2(a, f[0], e[0]);
                    d = e[1];
                    c = f[1];
                    continue
                } else
                    throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.iter2"];
            else if (e)
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.iter2"];
            else
                return 0
        }
    }
    function z(a, c, d, e) {
        while (!0) {
            var f = e
              , g = d
              , h = c;
            if (g)
                if (f) {
                    e = f[1];
                    d = g[1];
                    c = b("bs_curry")._3(a, h, g[0], f[0]);
                    continue
                } else
                    throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.fold_left2"];
            else {
                if (f)
                    throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.fold_left2"];
                return h
            }
        }
    }
    function A(a, c, d, e) {
        if (c)
            if (d)
                return b("bs_curry")._3(a, c[0], d[0], A(a, c[1], d[1], e));
            else
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.fold_right2"];
        else {
            if (d)
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.fold_right2"];
            return e
        }
    }
    function B(a, c) {
        while (!0) {
            var d = c;
            if (d)
                if (b("bs_curry")._1(a, d[0])) {
                    c = d[1];
                    continue
                } else
                    return !1;
            else
                return !0
        }
    }
    function C(a, c) {
        while (!0) {
            var d = c;
            if (d)
                if (b("bs_curry")._1(a, d[0]))
                    return !0;
                else {
                    c = d[1];
                    continue
                }
            else
                return !1
        }
    }
    function D(a, c, d) {
        while (!0) {
            var e = d
              , f = c;
            if (f)
                if (e)
                    if (b("bs_curry")._2(a, f[0], e[0])) {
                        d = e[1];
                        c = f[1];
                        continue
                    } else
                        return !1;
                else
                    throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.for_all2"];
            else if (e)
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.for_all2"];
            else
                return !0
        }
    }
    function E(a, c, d) {
        while (!0) {
            var e = d
              , f = c;
            if (f)
                if (e)
                    if (b("bs_curry")._2(a, f[0], e[0]))
                        return !0;
                    else {
                        d = e[1];
                        c = f[1];
                        continue
                    }
                else
                    throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.exists2"];
            else if (e)
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.exists2"];
            else
                return !1
        }
    }
    function F(a, c) {
        while (!0) {
            var d = c;
            if (d)
                if (b("bs_caml_obj").caml_equal(d[0], a))
                    return !0;
                else {
                    c = d[1];
                    continue
                }
            else
                return !1
        }
    }
    function G(a, b) {
        while (!0) {
            var c = b;
            if (c)
                if (c[0] === a)
                    return !0;
                else {
                    b = c[1];
                    continue
                }
            else
                return !1
        }
    }
    function H(a, c) {
        while (!0) {
            var d = c;
            if (d) {
                var e = d[0];
                if (b("bs_caml_obj").caml_equal(e[0], a))
                    return e[1];
                else {
                    c = d[1];
                    continue
                }
            } else
                throw b("bs_caml_builtin_exceptions").not_found
        }
    }
    function I(a, c) {
        while (!0) {
            var d = c;
            if (d) {
                var e = d[0];
                if (b("bs_caml_obj").caml_equal(e[0], a))
                    return b("bs_caml_option").some(e[1]);
                else {
                    c = d[1];
                    continue
                }
            } else
                return
        }
    }
    function J(a, c) {
        while (!0) {
            var d = c;
            if (d) {
                var e = d[0];
                if (e[0] === a)
                    return e[1];
                else {
                    c = d[1];
                    continue
                }
            } else
                throw b("bs_caml_builtin_exceptions").not_found
        }
    }
    function K(a, c) {
        while (!0) {
            var d = c;
            if (d) {
                var e = d[0];
                if (e[0] === a)
                    return b("bs_caml_option").some(e[1]);
                else {
                    c = d[1];
                    continue
                }
            } else
                return
        }
    }
    function L(a, c) {
        while (!0) {
            var d = c;
            if (d)
                if (b("bs_caml_obj").caml_equal(d[0][0], a))
                    return !0;
                else {
                    c = d[1];
                    continue
                }
            else
                return !1
        }
    }
    function M(a, b) {
        while (!0) {
            var c = b;
            if (c)
                if (c[0][0] === a)
                    return !0;
                else {
                    b = c[1];
                    continue
                }
            else
                return !1
        }
    }
    function N(a, c) {
        if (c) {
            var d = c[1];
            c = c[0];
            if (b("bs_caml_obj").caml_equal(c[0], a))
                return d;
            else
                return [c, N(a, d)]
        } else
            return 0
    }
    function O(a, b) {
        if (b) {
            var c = b[1];
            b = b[0];
            if (b[0] === a)
                return c;
            else
                return [b, O(a, c)]
        } else
            return 0
    }
    function P(a, c) {
        while (!0) {
            var d = c;
            if (d) {
                var e = d[0];
                if (b("bs_curry")._1(a, e))
                    return e;
                else {
                    c = d[1];
                    continue
                }
            } else
                throw b("bs_caml_builtin_exceptions").not_found
        }
    }
    function Q(a, c) {
        while (!0) {
            var d = c;
            if (d) {
                var e = d[0];
                if (b("bs_curry")._1(a, e))
                    return b("bs_caml_option").some(e);
                else {
                    c = d[1];
                    continue
                }
            } else
                return
        }
    }
    function R(a) {
        return function(c) {
            var d = 0;
            c = c;
            while (!0) {
                var e = c
                  , f = d;
                if (e) {
                    var g = e[1];
                    e = e[0];
                    if (b("bs_curry")._1(a, e)) {
                        c = g;
                        d = [e, f];
                        continue
                    } else {
                        c = g;
                        continue
                    }
                } else
                    return i(f, 0)
            }
        }
    }
    function S(a, c) {
        var d = 0
          , e = 0;
        c = c;
        while (!0) {
            var f = c
              , g = e
              , h = d;
            if (f) {
                var j = f[1];
                f = f[0];
                if (b("bs_curry")._1(a, f)) {
                    c = j;
                    d = [f, h];
                    continue
                } else {
                    c = j;
                    e = [f, g];
                    continue
                }
            } else
                return [i(h, 0), i(g, 0)]
        }
    }
    function T(a) {
        if (a) {
            var b = a[0];
            a = T(a[1]);
            return [[b[0], a[0]], [b[1], a[1]]]
        } else
            return [0, 0]
    }
    function U(a, c) {
        if (a)
            if (c)
                return [[a[0], c[0]], U(a[1], c[1])];
            else
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.combine"];
        else if (c)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "List.combine"];
        else
            return 0
    }
    function V(a, c, d) {
        if (c)
            if (d) {
                var e = d[0]
                  , f = c[0];
                if (b("bs_curry")._2(a, f, e) <= 0)
                    return [f, V(a, c[1], d)];
                else
                    return [e, V(a, c, d[1])]
            } else
                return c;
        else
            return d
    }
    function W(a, c) {
        while (!0) {
            var d = c
              , e = a;
            if (e === 0)
                return d;
            else if (d) {
                c = d[1];
                a = e - 1 | 0;
                continue
            } else
                throw [b("bs_caml_builtin_exceptions").assert_failure, ["list.ml", 262, 11]]
        }
    }
    function X(c, d) {
        var a = function(d, a) {
            if (d !== 2) {
                if (d === 3 && a) {
                    var f = a[1];
                    if (f) {
                        var g = f[1];
                        if (g) {
                            g = g[0];
                            f = f[0];
                            var h = a[0];
                            if (b("bs_curry")._2(c, h, f) <= 0)
                                if (b("bs_curry")._2(c, f, g) <= 0)
                                    return [h, [f, [g, 0]]];
                                else if (b("bs_curry")._2(c, h, g) <= 0)
                                    return [h, [g, [f, 0]]];
                                else
                                    return [g, [h, [f, 0]]];
                            else if (b("bs_curry")._2(c, h, g) <= 0)
                                return [f, [h, [g, 0]]];
                            else if (b("bs_curry")._2(c, f, g) <= 0)
                                return [f, [g, [h, 0]]];
                            else
                                return [g, [f, [h, 0]]]
                        }
                    }
                }
            } else if (a) {
                g = a[1];
                if (g) {
                    f = g[0];
                    h = a[0];
                    if (b("bs_curry")._2(c, h, f) <= 0)
                        return [h, [f, 0]];
                    else
                        return [f, [h, 0]]
                }
            }
            g = d >> 1;
            f = d - g | 0;
            h = W(g, a);
            d = e(g, a);
            g = e(f, h);
            a = d;
            f = g;
            h = 0;
            while (!0) {
                d = h;
                g = f;
                var j = a;
                if (j)
                    if (g) {
                        var k = g[0]
                          , l = j[0];
                        if (b("bs_curry")._2(c, l, k) > 0) {
                            h = [l, d];
                            a = j[1];
                            continue
                        } else {
                            h = [k, d];
                            f = g[1];
                            continue
                        }
                    } else
                        return i(j, d);
                else
                    return i(g, d)
            }
        }
          , e = function(e, d) {
            if (e !== 2) {
                if (e === 3 && d) {
                    var f = d[1];
                    if (f) {
                        var g = f[1];
                        if (g) {
                            g = g[0];
                            f = f[0];
                            var h = d[0];
                            if (b("bs_curry")._2(c, h, f) > 0)
                                if (b("bs_curry")._2(c, f, g) > 0)
                                    return [h, [f, [g, 0]]];
                                else if (b("bs_curry")._2(c, h, g) > 0)
                                    return [h, [g, [f, 0]]];
                                else
                                    return [g, [h, [f, 0]]];
                            else if (b("bs_curry")._2(c, h, g) > 0)
                                return [f, [h, [g, 0]]];
                            else if (b("bs_curry")._2(c, f, g) > 0)
                                return [f, [g, [h, 0]]];
                            else
                                return [g, [f, [h, 0]]]
                        }
                    }
                }
            } else if (d) {
                g = d[1];
                if (g) {
                    f = g[0];
                    h = d[0];
                    if (b("bs_curry")._2(c, h, f) > 0)
                        return [h, [f, 0]];
                    else
                        return [f, [h, 0]]
                }
            }
            g = e >> 1;
            f = e - g | 0;
            h = W(g, d);
            e = a(g, d);
            g = a(f, h);
            d = e;
            f = g;
            h = 0;
            while (!0) {
                e = h;
                g = f;
                var j = d;
                if (j)
                    if (g) {
                        var k = g[0]
                          , l = j[0];
                        if (b("bs_curry")._2(c, l, k) <= 0) {
                            h = [l, e];
                            d = j[1];
                            continue
                        } else {
                            h = [k, e];
                            f = g[1];
                            continue
                        }
                    } else
                        return i(j, e);
                else
                    return i(g, e)
            }
        }
          , f = g(d);
        if (f < 2)
            return d;
        else
            return a(f, d)
    }
    function Y(c, d) {
        var a = function(d, a) {
            if (d !== 2) {
                if (d === 3 && a) {
                    var f = a[1];
                    if (f) {
                        var g = f[1];
                        if (g) {
                            g = g[0];
                            f = f[0];
                            var h = a[0]
                              , j = b("bs_curry")._2(c, h, f);
                            if (j === 0) {
                                var k = b("bs_curry")._2(c, f, g);
                                if (k === 0)
                                    return [f, 0];
                                else if (k < 0)
                                    return [f, [g, 0]];
                                else
                                    return [g, [f, 0]]
                            } else if (j < 0) {
                                k = b("bs_curry")._2(c, f, g);
                                if (k === 0)
                                    return [h, [f, 0]];
                                else if (k < 0)
                                    return [h, [f, [g, 0]]];
                                else {
                                    j = b("bs_curry")._2(c, h, g);
                                    if (j === 0)
                                        return [h, [f, 0]];
                                    else if (j < 0)
                                        return [h, [g, [f, 0]]];
                                    else
                                        return [g, [h, [f, 0]]]
                                }
                            } else {
                                k = b("bs_curry")._2(c, h, g);
                                if (k === 0)
                                    return [f, [h, 0]];
                                else if (k < 0)
                                    return [f, [h, [g, 0]]];
                                else {
                                    j = b("bs_curry")._2(c, f, g);
                                    if (j === 0)
                                        return [f, [h, 0]];
                                    else if (j < 0)
                                        return [f, [g, [h, 0]]];
                                    else
                                        return [g, [f, [h, 0]]]
                                }
                            }
                        }
                    }
                }
            } else if (a) {
                k = a[1];
                if (k) {
                    j = k[0];
                    g = a[0];
                    f = b("bs_curry")._2(c, g, j);
                    if (f === 0)
                        return [g, 0];
                    else if (f < 0)
                        return [g, [j, 0]];
                    else
                        return [j, [g, 0]]
                }
            }
            h = d >> 1;
            k = d - h | 0;
            f = W(h, a);
            j = e(h, a);
            g = e(k, f);
            d = j;
            h = g;
            a = 0;
            while (!0) {
                k = a;
                f = h;
                j = d;
                if (j)
                    if (f) {
                        g = f[1];
                        var l = f[0]
                          , m = j[1]
                          , n = j[0]
                          , o = b("bs_curry")._2(c, n, l);
                        if (o === 0) {
                            a = [n, k];
                            h = g;
                            d = m;
                            continue
                        } else if (o > 0) {
                            a = [n, k];
                            d = m;
                            continue
                        } else {
                            a = [l, k];
                            h = g;
                            continue
                        }
                    } else
                        return i(j, k);
                else
                    return i(f, k)
            }
        }
          , e = function(e, d) {
            if (e !== 2) {
                if (e === 3 && d) {
                    var f = d[1];
                    if (f) {
                        var g = f[1];
                        if (g) {
                            g = g[0];
                            f = f[0];
                            var h = d[0]
                              , j = b("bs_curry")._2(c, h, f);
                            if (j === 0) {
                                var k = b("bs_curry")._2(c, f, g);
                                if (k === 0)
                                    return [f, 0];
                                else if (k > 0)
                                    return [f, [g, 0]];
                                else
                                    return [g, [f, 0]]
                            } else if (j > 0) {
                                k = b("bs_curry")._2(c, f, g);
                                if (k === 0)
                                    return [h, [f, 0]];
                                else if (k > 0)
                                    return [h, [f, [g, 0]]];
                                else {
                                    j = b("bs_curry")._2(c, h, g);
                                    if (j === 0)
                                        return [h, [f, 0]];
                                    else if (j > 0)
                                        return [h, [g, [f, 0]]];
                                    else
                                        return [g, [h, [f, 0]]]
                                }
                            } else {
                                k = b("bs_curry")._2(c, h, g);
                                if (k === 0)
                                    return [f, [h, 0]];
                                else if (k > 0)
                                    return [f, [h, [g, 0]]];
                                else {
                                    j = b("bs_curry")._2(c, f, g);
                                    if (j === 0)
                                        return [f, [h, 0]];
                                    else if (j > 0)
                                        return [f, [g, [h, 0]]];
                                    else
                                        return [g, [f, [h, 0]]]
                                }
                            }
                        }
                    }
                }
            } else if (d) {
                k = d[1];
                if (k) {
                    j = k[0];
                    g = d[0];
                    f = b("bs_curry")._2(c, g, j);
                    if (f === 0)
                        return [g, 0];
                    else if (f > 0)
                        return [g, [j, 0]];
                    else
                        return [j, [g, 0]]
                }
            }
            h = e >> 1;
            k = e - h | 0;
            f = W(h, d);
            j = a(h, d);
            g = a(k, f);
            e = j;
            h = g;
            d = 0;
            while (!0) {
                k = d;
                f = h;
                j = e;
                if (j)
                    if (f) {
                        g = f[1];
                        var l = f[0]
                          , m = j[1]
                          , n = j[0]
                          , o = b("bs_curry")._2(c, n, l);
                        if (o === 0) {
                            d = [n, k];
                            h = g;
                            e = m;
                            continue
                        } else if (o < 0) {
                            d = [n, k];
                            e = m;
                            continue
                        } else {
                            d = [l, k];
                            h = g;
                            continue
                        }
                    } else
                        return i(j, k);
                else
                    return i(f, k)
            }
        }
          , f = g(d);
        if (f < 2)
            return d;
        else
            return a(f, d)
    }
    function Z(a, b) {
        while (!0) {
            var c = b
              , d = a;
            if (d)
                if (c) {
                    b = c[1];
                    a = d[1];
                    continue
                } else
                    return 1;
            else if (c)
                return -1;
            else
                return 0
        }
    }
    function $(a, b) {
        while (!0) {
            var c = b
              , d = a;
            if (d)
                if (c <= 0)
                    return 1;
                else {
                    b = c - 1 | 0;
                    a = d[1];
                    continue
                }
            else if (c === 0)
                return 0;
            else if (c > 0)
                return -1;
            else
                return 1
        }
    }
    var aa = b("bs_pervasives").$at
      , ba = n
      , ca = R
      , da = X
      , ea = X;
    f.length = g;
    f.compare_lengths = Z;
    f.compare_length_with = $;
    f.cons = a;
    f.hd = c;
    f.tl = d;
    f.nth = e;
    f.nth_opt = h;
    f.rev = j;
    f.init = m;
    f.append = aa;
    f.rev_append = i;
    f.concat = ba;
    f.flatten = n;
    f.iter = s;
    f.iteri = t;
    f.map = o;
    f.mapi = q;
    f.rev_map = r;
    f.fold_left = u;
    f.fold_right = v;
    f.iter2 = y;
    f.map2 = w;
    f.rev_map2 = x;
    f.fold_left2 = z;
    f.fold_right2 = A;
    f.for_all = B;
    f.exists = C;
    f.for_all2 = D;
    f.exists2 = E;
    f.mem = F;
    f.memq = G;
    f.find = P;
    f.find_opt = Q;
    f.filter = ca;
    f.find_all = R;
    f.partition = S;
    f.assoc = H;
    f.assoc_opt = I;
    f.assq = J;
    f.assq_opt = K;
    f.mem_assoc = L;
    f.mem_assq = M;
    f.remove_assoc = N;
    f.remove_assq = O;
    f.split = T;
    f.combine = U;
    f.sort = da;
    f.stable_sort = X;
    f.fast_sort = ea;
    f.sort_uniq = Y;
    f.merge = V
}
), null);
__d("XPagesProfileHomeController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/{page_token}/", {
        page_token: {
            type: "String",
            required: !0
        },
        business_id: {
            type: "Int"
        },
        modal: {
            type: "Enum",
            enumType: 1
        },
        offer_modal_availability_location: {
            type: "Enum",
            enumType: 1
        },
        wificheckin: {
            type: "Int"
        },
        redirect_mac: {
            type: "String"
        },
        redirect_url: {
            type: "String"
        },
        gw_id: {
            type: "Int"
        },
        notify_field: {
            type: "Enum",
            enumType: 1
        },
        notif_t: {
            type: "String"
        },
        show_lwi_tooltip: {
            type: "Bool",
            defaultValue: !1
        },
        tooltip_type: {
            type: "String"
        },
        boost_post_id: {
            type: "String"
        },
        boosted_auto_open: {
            type: "String"
        },
        session_id: {
            type: "String"
        },
        order_id: {
            type: "Int"
        },
        filter: {
            type: "Int",
            defaultValue: 1
        },
        open_composer: {
            type: "Enum",
            enumType: 1
        },
        msite_modal: {
            type: "Enum",
            enumType: 1
        },
        media_attachment: {
            type: "Enum",
            enumType: 1
        },
        status_id: {
            type: "Int"
        },
        coupon_product: {
            type: "String"
        },
        feedback_id: {
            type: "String"
        },
        survey_id: {
            type: "Int"
        },
        group_id: {
            type: "Int"
        },
        page_offset: {
            type: "Int"
        },
        composer_prefill: {
            type: "String"
        },
        place_query_entity: {
            type: "String"
        },
        office_type: {
            type: "Enum",
            enumType: 1
        },
        tipID: {
            type: "String"
        },
        ndid: {
            type: "String"
        },
        composer_igphoto_id: {
            type: "String"
        },
        attach_support_now_cta: {
            type: "Bool",
            defaultValue: !1
        },
        whatsapp_cta_referrer: {
            type: "Enum",
            enumType: 1
        },
        __nodl: {
            type: "Exists",
            defaultValue: !1
        },
        qr: {
            type: "String"
        },
        qr_code_id: {
            type: "FBID"
        },
        scan_session_id: {
            type: "String"
        },
        ref: {
            type: "String"
        },
        mt_nav: {
            type: "Bool",
            defaultValue: !1
        },
        referrer: {
            type: "String"
        },
        msite_tab_async: {
            type: "Bool",
            defaultValue: !1
        },
        _sref_: {
            type: "Int"
        },
        _vref_: {
            type: "Int"
        },
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
