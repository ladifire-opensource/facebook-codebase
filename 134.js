if (self.CavalryLogger) {
    CavalryLogger.start_js(["2doU2"]);
}

__d("PagesMessengerCreatorInfo.react", ["cx", "React", "UFICreatorInfo.react", "XUIGrayText.react", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx(b("XUIGrayText.react"), {
                className: "_ajk" + (this.props.isNote ? " _45l2" : ""),
                display: "inline",
                shade: "light",
                size: "meta1",
                children: h.jsx(b("UFICreatorInfo.react"), {
                    creatorID: this.props.creator_info.creatorID,
                    creatorType: this.props.creator_info.creatorType,
                    creatorName: this.props.creator_info.creatorName,
                    labelType: this.props.creator_info.labelType,
                    pageID: this.props.creator_info.pageID,
                    profileURI: this.props.creator_info.profileURI
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        creator_info: (c = b("prop-types")).shape({
            creatorID: c.string.isRequired,
            creatorName: c.string.isRequired,
            creatorType: c.string.isRequired,
            labelType: c.string.isRequired,
            pageID: c.string.isRequired,
            profileURI: c.string
        }).isRequired
    }
}
), null);
__d("FBRTCConfig", ["CurrentUser"], (function(a, b, c, d, e, f) {
    f.setConfig = a;
    f.isVCEndpointCall = c;
    f.getMeetingID = d;
    f.getMeetingPassword = e;
    f.getPeerID = l;
    f.statsInterpreterConfig = m;
    f.unsupportedBrowserUrl = n;
    f.userMediaErrorUrl = o;
    f.userMediaPermissionErrorUrl = p;
    f.isMessengerDotCom = q;
    f.useMessengerCallUI = r;
    f.shouldUseHDVideoQuality = s;
    f.shouldCreateDataChannel = t;
    f.disableURLManager = u;
    var g = !1
      , h = null
      , i = null
      , j = 0
      , k = {};
    function a(a) {
        var b = a.isVCEndpointCall
          , c = a.meetingID
          , d = a.meetingPassword
          , e = a.peerID;
        a = a.serverConfig;
        g = b;
        h = c;
        i = d;
        j = e;
        k = a
    }
    function c() {
        return g
    }
    function d() {
        return h
    }
    function e() {
        return i
    }
    function l() {
        return j
    }
    function m() {
        return {
            bad_score_count: 3,
            frr_weight: 800,
            plr_weight: 500,
            rtt_weight: 2,
            score_threshold: 1e3
        }
    }
    function n() {
        if (k.troubleshooting_urls && k.troubleshooting_urls.unsupported_browser)
            return k.troubleshooting_urls.unsupported_browser;
        if (b("CurrentUser").isWorkUser())
            return "https://www.facebook.com/help/work/919532078125908";
        else
            return "https://www.facebook.com/help/211644178877843"
    }
    function o() {
        if (k.troubleshooting_urls && k.troubleshooting_urls.user_media_error)
            return k.troubleshooting_urls.user_media_error;
        if (b("CurrentUser").isWorkUser())
            return "https://www.facebook.com/help/work/180714775754632";
        else
            return "https://www.facebook.com/help/232232800134371"
    }
    function p() {
        if (k.troubleshooting_urls && k.troubleshooting_urls.user_media_permission_error)
            return k.troubleshooting_urls.user_media_permission_error;
        if (b("CurrentUser").isWorkUser())
            return "https://www.facebook.com/help/work/180714775754632";
        else
            return "https://www.facebook.com/help/232232800134371"
    }
    function q() {
        return k.is_messenger_dot_com
    }
    function r() {
        return k.messenger_call_ui
    }
    function s() {
        return k.use_hd_video_quality
    }
    function t() {
        return k.data_channel
    }
    function u() {
        return k.disable_url_manager
    }
}
), null);
__d("RTWebExperiments", ["FBRTCConfig", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.enableCallCollisionFix = a;
    f.passOfferWithWindowMessages = c;
    function a() {
        return b("FBRTCConfig").isVCEndpointCall() ? !1 : b("qex")._("771668")
    }
    function c() {
        return b("FBRTCConfig").isVCEndpointCall() ? !1 : b("qex")._("771669")
    }
}
), null);
__d("FBRTCLocalMessageQueue", ["CacheStorage", "FBRTCConstants", "RTWebExperiments"], (function(a, b, c, d, e, f) {
    f.clearQueue = a;
    f.writePeerOfferToStorage = c;
    f.getPeerOfferFromStorage = n;
    f.clearPeerOfferFromStorage = o;
    f.pluckOffer = d;
    f.enqueueMessage = e;
    f.drainQueue = p;
    f._storeData = q;
    f._getData = r;
    f._getAndRemoveData = s;
    f._isValid = t;
    f.getStorage = u;
    var g = "localstorage";
    f.STORAGE_TYPE = g;
    var h = "RTC_";
    f.PREFIX = h;
    var i = "offer";
    f.OFFER_KEY = i;
    var j = "offer_msg";
    f.OFFER_SUFFIX = j;
    var k = "data_";
    f.DATA_KEY_PREFIX = k;
    var l = 30 * 1e3;
    f.CACHE_LIFE = l;
    var m = new Map();
    function a(a) {
        m.set(a, new Map())
    }
    function c(a, b) {
        a = u(a, j);
        q(a, i, b)
    }
    function n(a) {
        a = u(a, j);
        return r(a, i)
    }
    function o(a) {
        a = u(a, j);
        a.remove(i)
    }
    function d(a) {
        if (b("RTWebExperiments").passOfferWithWindowMessages()) {
            var c = m.get(a) || new Map()
              , d = c.get(i);
            c["delete"](i);
            return d || null
        } else {
            c = n(a);
            o(a);
            return c || null
        }
    }
    function e(a, c, d) {
        c = k + c.toString();
        var e = m.get(a) || new Map();
        d.msg_type === b("FBRTCConstants").PayloadType.OFFER && (c = i);
        e.set(c, d);
        m.set(a, e)
    }
    function p(a, b) {
        var c = m.get(a) || new Map();
        for (var c = c, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var f;
            if (d) {
                if (e >= c.length)
                    break;
                f = c[e++]
            } else {
                e = c.next();
                if (e.done)
                    break;
                f = e.value
            }
            f = f;
            f[0];
            f = f[1];
            b(f)
        }
        m.set(a, new Map())
    }
    function q(a, b, c) {
        c = {
            __t: Date.now(),
            __d: c
        };
        a.set(b, c)
    }
    function r(a, b) {
        var c = a.get(b);
        if (c && t(c))
            return c.__d;
        else
            c && a.remove(b);
        return null
    }
    function s(a, b) {
        var c = r(a, b);
        if (c !== null) {
            a.remove(b);
            return c
        }
        return null
    }
    function t(a) {
        return Date.now() - a.__t < l
    }
    function u(a, c) {
        return new (b("CacheStorage"))(g,"" + h + a + "_" + c + "_")
    }
}
), null);
__d("isFacebookishURI", ["isFacebookURI", "isMessengerDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return b("isFacebookURI")(a) || b("isMessengerDotComURI")(a)
    }
}
), null);
__d("FBRTCMessageListener", ["invariant", "Bootloader", "FBLogger", "FBMqttChannel", "FBRTCConstants", "FBRTCLocalMessageQueue", "FBRTCSupport", "RTWebExperiments", "Run", "URI", "gkx", "guid", "isEmpty", "isFacebookishURI", "mixInEventEmitter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = 45 * 1e3, k = [], l = null, m = null, n, o = null, p = null, q = !0, r = !1, s = !1, t = null, u = null, v = null, w = null, x = [];
    a = {
        logCheckpoint: function(a) {
            b("Bootloader").loadModules(["RTWebUserActionLogger"], function(b) {
                b.logCheckpoint({
                    checkpoint: a
                })
            }, "FBRTCMessageListener")
        },
        init: function(a, c) {
            var d = this;
            if (r)
                return;
            r = !0;
            s = a;
            t = c;
            this.subscribeToMqtt();
            if (b("FBRTCSupport").isWebrtcSupported() && window.addEventListener) {
                var e = a ? this._handleWindowMessageToChild.bind(this) : this._handleWindowMessageToParent.bind(this);
                window.addEventListener("message", e, !1)
            }
            a && this._connectToParentWindow(c);
            b("Run").onUnload(function() {
                d.unsubscribeToAll()
            })
        },
        subscribeToMqtt: function() {
            var a = this;
            x.push("/webrtc");
            b("FBMqttChannel").subscribe("/webrtc", function(b) {
                b = JSON.parse(b);
                a._onMessage(b)
            });
            x.push("/rtc_multi");
            b("FBMqttChannel").subscribe("/rtc_multi", function(b) {
                b = JSON.parse(b);
                a._onMultiwayMessage(b)
            });
            x.push("/onevc");
            b("FBMqttChannel").subscribe("/onevc", function(b) {
                b = JSON.parse(b);
                a._onOneVCMessage(b)
            })
        },
        unsubscribeToAll: function() {
            x.forEach(function(a) {
                b("FBMqttChannel").unsubscribeAll(a)
            })
        },
        setParentWindowNonce: function(a) {
            o = a
        },
        getParentWindowNonce: function() {
            return o
        },
        generateNewNonce: function() {
            p = b("guid")();
            return p
        },
        setMultiwayMessageHandler: function(a) {
            u && g(0, 1011),
            u = a
        },
        removeMultiwayMessageHandler: function() {
            u = null
        },
        _emit: function(a, b) {
            this.emit(a, b)
        },
        _onMultiwayMessage: function(a) {
            this._emit("multiwayMessageReceived", a),
            u && u(a)
        },
        setOneVCMessegeHandler: function(a) {
            v == null && (v = a)
        },
        _onOneVCMessage: function(a) {
            v != null && v(a)
        },
        setMessageHandler: function(a) {
            l && g(0, 1013);
            l = a;
            while (k.length)
                l(k.shift())
        },
        removeMessageHandler: function() {
            l = null
        },
        removeOneVCMessageHandler: function() {
            v = null
        },
        setParentWindowStartCallHandler: function(a) {
            w = a
        },
        _onMessage: function(a) {
            if (a.from) {
                var c = typeof a.from;
                c !== "string" && b("FBLogger")("FBRTCMessageListener", "unexpected_peer_id_type").debug('Found peer_id with type "' + c + '" for call: ' + a.call_id + '. Expected "string" type.');
                a.from = a.from.toString()
            }
            this._emit("messageReceived", a);
            l ? l(a) : k.push(a);
            s || this._passOrQueueToChildWindow(a)
        },
        _connectToParentWindow: function(a) {
            var c = this;
            if (window.opener && window.opener.postMessage) {
                a = {
                    type: b("FBRTCConstants").ChildWindowMessageType.CHILD_WINDOW_READY,
                    nonce: o,
                    childNonce: this.generateNewNonce(),
                    peerID: a
                };
                var d = new MessageChannel();
                d.port1.onmessage = function(a) {
                    c._handleWindowMessageToChild(a, !0)
                }
                ;
                var e = window.location.origin;
                b("gkx")("1443572") || !(h || (h = b("isEmpty")))(document.referrer) && e !== document.referrer && (b("isFacebookishURI")(new (i || (i = b("URI")))(document.referrer)) && (e = document.referrer));
                window.opener.postMessage(a, e, [d.port2])
            }
        },
        _verifyWindowMessage: function(a) {
            return Boolean((a.origin === window.location.origin || b("isFacebookishURI")(new (i || (i = b("URI")))(a.origin)) && b("isFacebookishURI")(window.location.origin)) && a.data && p !== null && a.data.nonce === p)
        },
        _verifyPortMessage: function(a) {
            return Boolean(p !== null && (a == null ? void 0 : (a = a.data) == null ? void 0 : a.nonce) === p)
        },
        _handleWindowMessageToParent: function(a) {
            if (!this._verifyWindowMessage(a))
                return;
            if (a.data.type === b("FBRTCConstants").ChildWindowMessageType.CHILD_WINDOW_READY) {
                var c = a.data
                  , d = c.childNonce;
                c = c.peerID;
                this.setParentWindowNonce(d);
                this._setChildWindow(a.source);
                this._startCallInChildWindow(c);
                this.generateNewNonce();
                this._replayQueuedMessagesToChild(c, m)
            }
        },
        addCustomHandler: function(a) {
            q = !1,
            a(this._onMessage.bind(this), w)
        },
        _handleWindowMessageToChild: function(a, c) {
            c === void 0 && (c = !1);
            if (!q || c && !this._verifyPortMessage(a) || !c && !this._verifyWindowMessage(a))
                return;
            a.data.type === b("FBRTCConstants").ChildWindowMessageType.CHILD_WINDOW_MESSAGE && this._onMessage(a.data.message);
            if (a.data.type === b("FBRTCConstants").ChildWindowMessageType.CHILD_WINDOW_START_CALL && w) {
                c = a.data.offer;
                !c && t && (c = b("FBRTCLocalMessageQueue").getPeerOfferFromStorage(t),
                c && b("RTWebExperiments").passOfferWithWindowMessages() && this.logCheckpoint("got_offer_from_storage_while_in_experiment"));
                w(c)
            }
        },
        _replayQueuedMessagesToChild: function(a, c) {
            var d = this;
            b("FBRTCLocalMessageQueue").drainQueue(a, function(a) {
                d._postToChildWindowMessage(c, a)
            })
        },
        _setChildWindow: function(a) {
            m = a,
            window.clearTimeout(n),
            n = window.setTimeout(function() {
                m = null
            }, j)
        },
        _postToChildWindowMessage: function(a, c) {
            c = {
                type: b("FBRTCConstants").ChildWindowMessageType.CHILD_WINDOW_MESSAGE,
                nonce: o,
                message: c
            };
            a.postMessage(c, window.location.origin)
        },
        _passOrQueueToChildWindow: function(a) {
            m && this._postToChildWindowMessage(m, a),
            b("RTWebExperiments").enableCallCollisionFix() && b("FBRTCLocalMessageQueue").enqueueMessage(a.from, a.id, a)
        },
        _startCallInChildWindow: function(a) {
            if (m) {
                a = {
                    type: b("FBRTCConstants").ChildWindowMessageType.CHILD_WINDOW_START_CALL,
                    nonce: o,
                    offer: b("RTWebExperiments").passOfferWithWindowMessages() ? b("FBRTCLocalMessageQueue").pluckOffer(a) : null
                };
                m.postMessage(a, window.location.origin)
            }
        },
        listenOnce: function(a, b) {
            this.once(a, b)
        }
    };
    b("mixInEventEmitter")(a, {
        messageReceived: !0,
        multiwayMessageReceived: !0
    });
    c = a;
    e.exports = c
}
), null);
__d("MessengerBubbleBlock.react", ["cx", "React", "WorkChatRedesignedMessageListCheck.re"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx("div", {
                className: (b("WorkChatRedesignedMessageListCheck.re").enabled ? "" : "_52mr") + " _4h13" + (b("WorkChatRedesignedMessageListCheck.re").enabled ? "" : " _3058"),
                children: this.props.children
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("MercuryAttachmentAttribution.react", ["cx", "fbt", "Image.react", "ImmutableObject", "Link.react", "React", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.$1();
            return !a ? null : i.jsxs("div", {
                className: b("joinClasses")(this.props.className, "_29ew"),
                children: [i.jsx(b("Image.react"), {
                    src: a.icon_url,
                    className: "_29ex"
                }), i.jsx("span", {
                    className: "_29ey",
                    children: a.name
                }), this.$2()]
            })
        }
        ;
        d.$1 = function() {
            return this.props.attachment && this.props.attachment.app_attribution
        }
        ;
        d.$2 = function() {
            var a = this.$1();
            if (!a || !a.metadata)
                return null;
            var c = "_439n";
            try {
                a = JSON.parse(a.metadata)
            } catch (a) {
                return null
            }
            return a.spotify_link ? i.jsx(b("Link.react"), {
                className: c,
                href: a.spotify_link,
                target: "_blank",
                children: h._("M\u1edf")
            }) : null
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a;
    a.propTypes = {
        attachment: b("prop-types").instanceOf(b("ImmutableObject"))
    }
}
), null);
__d("MessengerAttachmentAttribution.bs", ["cx", "React", "bs_caml_option", "MercuryAttachmentAttribution.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        a = a.attachment;
        var c = {
            className: "_2f5n _4br2"
        };
        a !== void 0 && (c.attachment = b("bs_caml_option").valFromOption(a));
        return h.jsx(b("MercuryAttachmentAttribution.react"), c)
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerAttachmentAttribution.re", ["MessengerAttachmentAttribution.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerAttachmentAttribution.bs").make;
    f.make = a
}
), null);
__d("MessengerDeliveryStateIconsM4React.bs", ["cssVar", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        a = a.color;
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("path", {
                    d: "M0 0h16v16H0z"
                }), h.jsx("path", {
                    d: "M8 16A8 8 0 118 0a8 8 0 010 16zM6.8 8.836L5.257 7.293a1 1 0 00-1.414 1.414l2.25 2.25a1 1 0 001.414 0l4.25-4.25a1 1 0 10-1.414-1.414L6.8 8.836z",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            height: "10",
            width: "10",
            viewBox: "0 0 16 16",
            xmlns: "http://www.w3.org/2000/svg"
        })
    }
    g = {
        make: a
    };
    function c(a) {
        a = a.color;
        a = {
            children: h.jsxs("g", {
                children: [h.jsx("path", {
                    d: "M0 0h16v16H0z"
                }), h.jsx("circle", {
                    cx: "8",
                    cy: "8",
                    r: "7",
                    stroke: a,
                    strokeWidth: "2"
                }), h.jsx("path", {
                    d: "M4.55 8l2.25 2.25L11.05 6",
                    stroke: a,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2"
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            height: "10",
            width: "10",
            viewBox: "0 0 16 16",
            xmlns: "http://www.w3.org/2000/svg"
        };
        a["data-testid"] = "message_delivery_state_sent";
        return h.jsx("svg", a)
    }
    b = {
        make: c
    };
    function d(a) {
        a = a.color;
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("path", {
                    d: "M0 0h16v16H0z"
                }), h.jsx("circle", {
                    cx: "8",
                    cy: "8",
                    r: "7",
                    stroke: a,
                    strokeWidth: "2"
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            height: "10",
            width: "10",
            viewBox: "0 0 16 16",
            xmlns: "http://www.w3.org/2000/svg"
        })
    }
    a = {
        make: d
    };
    function e(a) {
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("path", {
                    d: "M0 0h16v16H0z"
                }), h.jsx("path", {
                    d: "M8 16A8 8 0 118 0a8 8 0 010 16zM8 2a1.5 1.5 0 00-1.5 1.5v5a1.5 1.5 0 003 0v-5A1.5 1.5 0 008 2zm0 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
                    fill: "#f03d25"
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            height: "10",
            width: "10",
            viewBox: "0 0 16 16",
            xmlns: "http://www.w3.org/2000/svg"
        })
    }
    c = {
        make: e
    };
    f.Delivered = g;
    f.Sent = b;
    f.Sending = a;
    f.Error_ = c
}
), null);
__d("MessengerDeliveryStateIconsM4React.re", ["MessengerDeliveryStateIconsM4React.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    c = (a = b("MessengerDeliveryStateIconsM4React.bs")).Delivered.make;
    f.Delivered_make = c;
    (function(a) {
        return null
    }
    );
    d = a.Sent.make;
    f.Sent_make = d;
    (function(a) {
        return null
    }
    );
    e = a.Sending.make;
    f.Sending_make = e;
    (function(a) {
        return null
    }
    );
    b = a.Error_.make;
    f.Error__make = b;
    c = a.Delivered;
    f.Delivered = c;
    d = a.Error_;
    f.Error_ = d;
    e = a.Sent;
    f.Sent = e;
    b = a.Sending;
    f.Sending = b
}
), null);
__d("MessengerMessageActionsWrapper.react", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.wrapper = null,
            c.mouseOverListenerAdded = !1,
            c.$4 = function() {
                c.props.onShowMenu(c.props.message.message_id, !0),
                c.$2()
            }
            ,
            c.$3 = function() {
                c.props.onShowMenu(c.props.message.message_id, !1),
                c.$1()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.componentDidMount = function() {
            this.$1()
        }
        ;
        c.componentWillUnmount = function() {
            this.$2()
        }
        ;
        c.render = function() {
            var a = this;
            return g.jsx("div", {
                onMouseLeave: this.$3,
                className: this.props.className,
                ref: function(b) {
                    return a.wrapper = b
                },
                children: this.props.children
            })
        }
        ;
        c.$1 = function() {
            this.wrapper && !this.mouseOverListenerAdded && (this.wrapper.addEventListener("mouseover", this.$4),
            this.mouseOverListenerAdded = !0)
        }
        ;
        c.$2 = function() {
            this.wrapper && this.mouseOverListenerAdded && (this.wrapper.removeEventListener("mouseover", this.$4),
            this.mouseOverListenerAdded = !1)
        }
        ;
        return b
    }(g.Component);
    e.exports = a
}
), null);
__d("getFBTSafeGenderFromGenderConst", ["GenderConst", "IntlVariations"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        switch (a) {
        case b("GenderConst").MALE_SINGULAR:
            return b("IntlVariations").GENDER_MALE;
        case b("GenderConst").FEMALE_SINGULAR:
            return b("IntlVariations").GENDER_FEMALE;
        default:
            return b("IntlVariations").GENDER_UNKNOWN
        }
    }
}
), null);
__d("MessengerMessageSeenHeadsReact.bs", ["cx", "fbt", "cssVar", "Image.bs", "React", "immutable", "ReasonReact.bs", "joinClasses", "MessengerConfig", "MercuryTimestamp", "MessengerMessage.bs", "MercuryAttachment", "getViewportDimensions", "MessengerSurfaceQuickChat.bs", "getFBTSafeGenderFromGenderConst"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React")
      , k = b("MessengerConfig").MaxSeenHeadCount;
    function l(a) {
        a = b("getViewportDimensions")().width;
        if (a < parseInt("920px".replace("px", ""), 10))
            if (k < 8)
                return k;
            else
                return 8;
        else if (a < parseInt("1211px".replace("px", ""), 10) && k >= 3)
            return 3;
        else
            return k
    }
    function a(a) {
        var c = a.className
          , d = a.isFromViewer
          , e = a.message
          , f = a.nextTimestamp
          , g = a.participants;
        a = a.readReceipts;
        var i = b("MessengerSurfaceQuickChat.bs").useIsQuickChatSurface(0);
        if (b("MessengerMessage.bs").isSending(e) || a.isEmpty() || b("MessengerMessage.bs").hasError(e))
            return null;
        else {
            a = b("immutable").Seq(a).filter(function(a) {
                a = a.watermark >= e.timestamp && a.watermark < f;
                if (a)
                    return !0;
                else
                    return !1
            }).sort(function(a, b) {
                return a.action - b.action | 0
            });
            if (a.isEmpty())
                return null;
            else {
                i = i ? 1 : d ? k : l(0);
                d = a.count() > (i + 1 | 0);
                var m = d ? a.slice(0, i) : a;
                m = m.map(function(a, c, d) {
                    d = g.get(c);
                    if (d == null)
                        return null;
                    else {
                        a = h._({
                            "*": "{full name} \u0111\u00e3 xem l\u00fac {seen time}"
                        }, [h._name("full name", d.name, b("getFBTSafeGenderFromGenderConst")(d.gender)), h._param("seen time", b("MercuryTimestamp").getPreciseTimestamp(a.action))]);
                        return b("ReasonReact.bs").element(String(c), void 0, b("Image.bs").make("_jf2", a, void 0, void 0, d.image_src, void 0, a, void 0, void 0, []))
                    }
                }).toArray();
                if (m.length !== 0) {
                    d = d ? a.slice(i, void 0).count() : 0;
                    if (d > 0) {
                        a = a.slice(i, void 0).map(function(a, b, c) {
                            a = g.get(b);
                            if (a == null)
                                return "";
                            else
                                return a.name
                        }).filter(function(a) {
                            return a !== ""
                        }).join("\n") + " ";
                        m.unshift(j.jsx("span", {
                            children: "+" + String(d),
                            className: "_jf3",
                            title: a
                        }, "overflow"))
                    }
                    return j.jsx("span", {
                        children: m,
                        className: b("joinClasses")(c, "_jf4" + ((m.length + d | 0) === 1 ? " _jf5" : "") + (b("MercuryAttachment").isSinglePhotoGroupAttachment(e) ? " _ba3" : ""))
                    })
                } else
                    return null
            }
        }
    }
    c = {
        make: a
    };
    d = a;
    e = a;
    f.maxSeenHeads = k;
    f.calculateSliceNumber = l;
    f.MessengerMessageSeenHeadsWrapper = c;
    f.make = d;
    f.jsComponent = e
}
), null);
__d("MessengerURIUtils.bs", ["URI", "MercuryIDs", "MessengerView", "MessengerURISerializer"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    function h(a) {
        var c = b("MessengerURISerializer").deserialize(new (g || (g = b("URI")))(window.location.href))
          , d = b("MessengerView").DETAIL.THREAD;
        return b("MessengerURISerializer").serialize(Object.assign(Object.assign({}, c), {
            activeThreadID: a,
            detailView: d,
            query: c.queryAll ? c.query : void 0
        }))
    }
    function a(a) {
        return h(b("MercuryIDs").getThreadIDFromUserID(a))
    }
    function c(a) {
        return h(a.thread_id).setQueryData({
            mid: a.message_id
        })
    }
    f.getURIForThreadID = h;
    f.getURIForUserID = a;
    f.getURIForMessage = c
}
), null);
__d("messengerRTLClasses", ["cx", "isRTL"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        a = b("isRTL")(a || "");
        return c ? a ? "_4pv0" : "" : (a ? "" : "direction_ltr") + (a ? " direction_rtl" : "") + (a ? "" : " text_align_ltr") + (a ? " text_align_rtl" : "") + (a ? " _4pv0" : "")
    }
}
), null);
__d("MessengerMessage.react", ["cssVar", "cx", "fbt", "CurrentUser", "EmojiLikeUtils", "FlexLayout.react", "ImmutableObject", "MercuryAttachment", "MercuryDisplayTimeFilterMessageRenderer", "MercuryMessageDeliveryState", "MercuryMessageError.react", "MercurySourceType", "MercuryTimestamp", "MessengerAttachmentAttribution.re", "MessengerAttachmentRenderer", "MessengerBubble.react", "MessengerBubbleBlock.react", "MessengerCodePasteUtils", "MessengerDecorator", "MessengerDeliveryStateIconsM4React.re", "MessengerMessage.bs", "MessengerMessageActionsWrapper.react", "MessengerMessageSeenHeadsReact.bs", "MessengerSettingsStore", "MessengerSourceContext.re", "MessengerURIUtils.bs", "MessengerVideoAutoplayStore", "React", "SubscriptionsHandler", "TooltipData", "emptyFunction", "getViewportDimensions", "ifRequired", "immutable", "joinClasses", "messengerRTLClasses", "prop-types", "requireCond", "shallowEqual", "cr:1398876", "cr:1398877", "cr:1106477"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    function k(a) {
        switch (a) {
        case b("MercuryMessageDeliveryState").SENDING:
            return i._("\u0110ang g\u1eedi");
        case b("MercuryMessageDeliveryState").SENT:
            return i._("\u0110\u00e3 g\u1eedi");
        case b("MercuryMessageDeliveryState").DELIVERED:
            return i._("\u0110\u00e3 chuy\u1ec3n");
        case b("MercuryMessageDeliveryState").ERROR:
            return i._("L\u1ed7i")
        }
        return null
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                isVisible: !1,
                plainText: !1,
                shown: {}
            },
            d.$15 = function(a) {
                d.messageBody = a
            }
            ,
            d.$5 = function(a, b) {
                d.setState(function(c) {
                    return {
                        shown: babelHelpers["extends"]({}, c.shown, (c = {},
                        c[a] = b,
                        c))
                    }
                })
            }
            ,
            d.$12 = function() {
                d.setState(function(a) {
                    return {
                        plainText: !a.plainText
                    }
                })
            }
            ,
            d.$11 = function() {
                d.props.onSelect(d.props.message.message_id)
            }
            ,
            d.$13 = function() {
                return b("MessengerCodePasteUtils").containsCodeBlock(d.props.message.body) || !!d.messageBody && d.messageBody.hasFormatting()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.calculateState = function(a) {
            return {
                isVisible: b("MessengerVideoAutoplayStore").isVisible(a.message.thread_id, a.message.message_id) || b("ifRequired")("MessengerSphericalRendererStore", function(b) {
                    return b.isVisible(a.message.thread_id, a.message.message_id)
                }, function() {
                    return !1
                })
            }
        }
        ;
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.setState(c.calculateState(this.props));
            var d = new (b("SubscriptionsHandler"))();
            d.addSubscriptions(b("MessengerVideoAutoplayStore").addListener(function(b) {
                b = c.calculateState(a.props);
                b.isVisible !== a.state.isVisible && a.setState({
                    isVisible: b.isVisible
                })
            }));
            var e = b("ifRequired")("MessengerSphericalRendererStore", function(a) {
                return a
            }, function() {
                return null
            });
            e && d.addSubscriptions(e.addListener(function(b) {
                b = c.calculateState(a.props);
                b.isVisible !== a.state.isVisible && a.setState({
                    isVisible: b.isVisible
                })
            }));
            this.$1 = d
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.release()
        }
        ;
        d.shouldComponentUpdate = function(a, c) {
            return a.isActive !== this.props.isActive || a.isFromViewer !== this.props.isFromViewer || a.isSelected !== this.props.isSelected || a.message !== this.props.message || a.messageTimestamp !== this.props.messageTimestamp || a.nextTimestamp !== this.props.nextTimestamp || a.showDeliveryState !== this.props.showDeliveryState || a.deliveryTimestamp !== this.props.deliveryTimestamp || !b("immutable").is(a.readReceipts, this.props.readReceipts) || !b("immutable").is(a.participants, this.props.participants) || a.customColor !== this.props.customColor || c.isVisible !== this.state.isVisible || !b("shallowEqual")(c.shown, this.state.shown) || a.onAttachmentLoad !== this.props.onAttachmentLoad || Object.keys(((c = a.message) == null ? void 0 : c.reactions) || {}).length !== Object.keys(((c = this.props.message) == null ? void 0 : c.reactions) || {}).length || ((c = a.thread) == null ? void 0 : c.pinned_messages) !== ((a = this.props.thread) == null ? void 0 : a.pinned_messages)
        }
        ;
        d.render = function() {
            var a, c = this.props, d = c.isActive, e = c.isFromViewer;
            c = c.message;
            var f = !e
              , g = i._("{time}", [i._param("time", b("MercuryTimestamp").getPreciseTimestamp(c.timestamp))]);
            g = b("TooltipData").propsFor(g, l(e, this.context));
            var h = []
              , k = []
              , m = this.props.message
              , n = e || !1
              , o = this.props.scrollToRepliedMessage
              , p = this.props.thread;
            m && !this.props.hideBeforeDecorator && (b("MessengerDecorator").getBeforeDecorators().forEach(function(a) {
                a.check(m) && h.push(a.render(m, n, {
                    scrollToRepliedMessage: o,
                    gradientColors: p == null ? void 0 : p.gradient_colors,
                    solidColor: p == null ? void 0 : p.solid_color,
                    nicknames: p == null ? void 0 : p.custom_nickname
                }))
            }),
            b("MessengerDecorator").getInnerDecorators().forEach(function(a) {
                a.check(m) && k.push(a.getAdditionalClassNames())
            }));
            var q = this.$2(g, null);
            g = this.$3(g, this.props.isSavedView === !0 || q != null);
            var r = !!q && this.$4();
            a = this.props.readReceipts.count() >= 2 && r && ((a = c.attachments[0]) == null ? void 0 : a.attach_type) === "share";
            return j.jsxs(j.Fragment, {
                children: [j.jsxs(b("MessengerMessageActionsWrapper.react"), {
                    className: b("joinClasses").apply(void 0, ["clearfix _o46 _3erg" + (d ? " _-5k" : "") + (f ? "" : " _3i_m") + (f ? "" : " _nd_") + (f ? " _29_7" : "") + (r ? " _q4a" : "") + (this.props.isFirstInGroup ? " _8lma" : ""), b("messengerRTLClasses")(c.body)].concat(k)),
                    message: c,
                    onShowMenu: this.$5,
                    isFromViewer: e,
                    children: [h, g, q, this.$6(), this.$7(), j.jsx(b("MessengerMessageSeenHeadsReact.bs").jsComponent, {
                        className: "_4jzq" + (a ? " _8d3y" : ""),
                        isFromViewer: e,
                        message: c,
                        nextTimestamp: this.props.nextTimestamp,
                        participants: this.props.participants,
                        readReceipts: this.props.readReceipts
                    })]
                }), b("cr:1106477") != null && c.m_suggestions != null && c.m_suggestions.length > 0 ? j.jsx(b("cr:1106477"), {
                    isFromViewer: n,
                    message: c,
                    suggestions: c.m_suggestions.map(function(a) {
                        return a.type
                    }),
                    expirationTime: c.m_suggestions[0].expiration_time
                }) : null]
            })
        }
        ;
        d.$8 = function(a) {
            return a.every(function(a) {
                return !a || !b("MessengerAttachmentRenderer").isRenderedShareAttachment(a)
            })
        }
        ;
        d.$9 = function() {
            return this.props.message.attachments.length === 1 && b("MercuryAttachment").hasAttribution(this.props.message.attachments[0])
        }
        ;
        d.$2 = function(a, c) {
            if (this.props.message != null && this.props.message.attachments != null && this.props.message.attachments.length > 0) {
                c = ((c = this.props.message) == null ? void 0 : (c = c.attachments[0]) == null ? void 0 : (c = c.share) == null ? void 0 : c.style_list[0]) === "wec_message" && !((c = this.props.message) == null ? void 0 : (c = c.attachments[0]) == null ? void 0 : (c = c.share) == null ? void 0 : (c = c.subattachments) == null ? void 0 : c.length);
                if (c)
                    return null
            }
            if (this.props.message.is_filtered_content)
                return null;
            if (this.props.message.commerce_message_type === "ride_intent")
                return null;
            c = this.props.message;
            var d = this.$10(c)
              , e = d[0];
            d = d[1];
            var f = b("MessengerAttachmentRenderer").getAttachmentsOutsideBubble(this.props.message, this.props.onAttachmentLoad, {
                customColor: this.props.customColor,
                isFromViewer: this.props.isFromViewer,
                isPageMessage: this.props.isPageMessage,
                isVisible: this.state.isVisible,
                onSelect: this.$11,
                onUnwrap: null,
                pageID: this.props.pageID
            }, e, this.props.thread);
            if (!f || !f.length)
                return null;
            var g = this.$8(f)
              , h = this.props.isPageMessage || this.props.isSavedView ? null : b("cr:1398877") != null ? j.jsx(b("cr:1398877"), {
                message: c,
                hovered: this.state.shown[this.props.message.message_id],
                messageProps: {
                    isNonBubbleDecorator: !g,
                    isFromViewer: this.props.isFromViewer === !0,
                    onReplyToMessage: this.props.onReplyToMessage,
                    handleToggleOriginal: this.$12,
                    hasFormatting: this.$13,
                    isShowingOriginal: this.state.plainText
                }
            }) : b("cr:1398876") != null && j.jsx(b("cr:1398876"), {
                className: g ? "_1z_2" : "",
                message: c,
                isFromViewer: !!this.props.isFromViewer,
                hovered: this.state.shown[this.props.message.message_id],
                messageProps: babelHelpers["extends"]({}, this.props, {
                    handleToggleOriginal: this.$12,
                    hasFormatting: this.$13,
                    isShowingOriginal: this.state.plainText
                }),
                isSavedView: this.props.isSavedView
            });
            this.$9() && (f = [j.jsxs("span", {
                children: [f[0], j.jsx(b("MessengerAttachmentAttribution.re").make, {
                    attachment: new (b("ImmutableObject"))(this.props.message.attachments[0])
                })]
            }, "AttachmentWithAttribution")]);
            var i = f.some(function(a) {
                return !!a && b("MessengerAttachmentRenderer").isPhotosGroupAttachment(a)
            });
            f = g ? j.jsxs("div", babelHelpers["extends"]({}, a || {}, {
                className: b("joinClasses").apply(void 0, ["_3zvs" + (i ? " _2-x3" : "")].concat(d)),
                children: [f, e.length > 1 ? j.jsx(b("FlexLayout.react"), {
                    align: "center",
                    className: "_7moe",
                    children: e
                }) : e, h]
            })) : f.map(function(b) {
                return b && j.cloneElement(b, a)
            });
            i = b("MessengerAttachmentRenderer").isSharedVideoAttachmentMessage(this.props.message);
            d = j.jsxs("div", {
                className: "_3058 _15gf" + (i ? " _3duc" : ""),
                children: [f, c.body || g ? null : h]
            }, "renderedAttachments");
            return this.$9() ? j.jsx(b("MessengerBubbleBlock.react"), {
                children: d
            }) : d
        }
        ;
        d.$10 = function(a) {
            var c = this
              , d = []
              , e = []
              , f = this.props.isFromViewer || !1;
            a && this.props.isSavedView !== !0 && b("MessengerDecorator").getAfterDecorators().forEach(function(b) {
                b.check(a, f) && (d.push(b.render(a, f, c.props, c.state.shown[c.props.message.message_id])),
                e.push(b.getAdditionalClassNames()))
            });
            return [d, e]
        }
        ;
        d.$14 = function() {
            return b("MessengerAttachmentRenderer").isP2PAttachment(this.props.message)
        }
        ;
        d.$3 = function(a, c) {
            var d = this.props.message
              , e = b("immutable").List(b("MessengerAttachmentRenderer").getAttachmentsInsideBubble(d, this.props.onAttachmentLoad))
              , f = d.ranges;
            d.profile_ranges && d.profile_ranges.length && (f = (f || []).concat(d.profile_ranges.map(function(a) {
                return babelHelpers["extends"]({}, a, {
                    url: b("MessengerURIUtils.bs").getURIForUserID(a.id)
                })
            })));
            var g = b("CurrentUser").isWorkUser() ? !1 : b("MessengerCodePasteUtils").containsCodeBlock(d.body) && !this.state.plainText;
            if (d.is_filtered_content)
                return j.jsx("div", {
                    className: "_3058 _wiu _52mr uiBoxYellow clearfix",
                    children: b("MercuryDisplayTimeFilterMessageRenderer").renderFilteredContent(d)
                });
            var h = d.body && !b("EmojiLikeUtils").isEmojiLike(d);
            return h || !e.isEmpty() ? j.jsx(b("MessengerBubble.react"), {
                thread: this.props.thread,
                attachments: e,
                body: d.body,
                bodyRef: this.$15,
                className: g ? (this.props.isFromViewer ? "_3uhm" : "") + (this.props.isFromViewer ? "" : " _3uhn") + (this.props.isSelected ? " _3xsz" : "") : "_3058 _ui9" + (this.props.isSelected ? " _3xsz" : ""),
                onReactionSwap: this.props.onReactionSwap,
                containsCode: g,
                customColor: this.props.isFromViewer ? this.props.customColor : "",
                customLike: d.customLike,
                excludeAfterDecorators: c,
                isFromViewer: this.props.isFromViewer,
                isP2PAttachment: this.$14(),
                ranges: f,
                message: d,
                metaRanges: d.meta_ranges,
                plainText: this.state.plainText,
                threadCustomColor: this.props.threadCustomColor || "#0084ff",
                threadID: d.thread_id,
                participants: this.props.participants,
                wecFirstMessage: this.props.wecFirstMessage,
                isHovered: this.state.shown[d.message_id],
                onReplyToMessage: this.props.onReplyToMessage,
                handleToggleOriginal: this.$12,
                hasFormatting: this.$13,
                isShowingOriginal: this.state.plainText,
                isPageMessage: this.props.isPageMessage,
                isSavedView: this.props.isSavedView,
                repliedToMessage: this.props.message.replied_to_message,
                scrollToRepliedMessage: this.props.scrollToRepliedMessage,
                tooltip: a,
                is_forwarded: d.is_forwarded
            }) : null
        }
        ;
        d.$7 = function() {
            if (!this.props.isFromViewer || !this.props.showDeliveryState || this.props.message.is_like_preview)
                return null;
            var a = b("MessengerMessage.bs").getDeliveryState(this.props.message, this.props.deliveryTimestamp);
            if (a === b("MercuryMessageDeliveryState").UNKNOWN)
                return null;
            var c = k(a)
              , d = b("CurrentUser").isWorkUser() && (this.props.customColor == null || this.props.customColor.toLowerCase() === "#373e4c".toLowerCase()) ? "#373e4c" : "rgba(134, 142, 153, 0.5)"
              , e = null;
            switch (a) {
            case b("MercuryMessageDeliveryState").SENDING:
                e = j.jsx(b("MessengerDeliveryStateIconsM4React.re").Sending.make, {
                    color: d
                });
                break;
            case b("MercuryMessageDeliveryState").SENT:
                e = j.jsx(b("MessengerDeliveryStateIconsM4React.re").Sent.make, {
                    color: d
                });
                break;
            case b("MercuryMessageDeliveryState").DELIVERED:
                e = j.jsx(b("MessengerDeliveryStateIconsM4React.re").Delivered.make, {
                    color: d
                });
                break;
            case b("MercuryMessageDeliveryState").ERROR:
                e = j.jsx(b("MessengerDeliveryStateIconsM4React.re").Error_.make, {});
                break
            }
            return j.jsx("span", {
                "aria-label": c,
                "aria-roledescription": i._("Bi\u1ec3u t\u01b0\u1ee3ng tr\u1ea1ng th\u00e1i"),
                className: "_8r4c",
                title: c,
                children: e
            })
        }
        ;
        d.$6 = function() {
            var a = this.props.message;
            return !b("MessengerMessage.bs").hasError(a) ? null : j.jsx(b("MercuryMessageError.react"), {
                className: "_3058 _2ygi",
                message: a,
                authorFBID: this.props.authorFBID
            })
        }
        ;
        d.$4 = function() {
            var a = this.props.message
              , b = !1;
            a && (b = !!(a.reactions && Object.keys(a.reactions).length > 0));
            return b
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    a.propTypes = {
        customColor: (c = b("prop-types")).string,
        deliveryTimestamp: c.number.isRequired,
        hideBeforeDecorator: c.bool,
        isActive: c.bool,
        isFromViewer: c.bool,
        isPageMessage: c.bool,
        isSelected: c.bool,
        message: c.object.isRequired,
        messageTimestamp: c.number,
        nextTimestamp: c.number.isRequired,
        onReactionSwap: c.func,
        onAttachmentLoad: c.func.isRequired,
        onDeselect: c.func.isRequired,
        onSelect: c.func.isRequired,
        onReplyToMessage: c.func,
        participants: c.instanceOf(b("immutable").Map).isRequired,
        readReceipts: c.instanceOf(b("immutable").OrderedMap).isRequired,
        showDeliveryState: c.bool,
        authorFBID: c.string,
        threadCustomColor: c.string,
        pageID: c.string,
        isSavedView: c.bool,
        scrollToRepliedMessage: c.func,
        thread: c.object,
        wecFirstMessage: c.bool
    };
    a.defaultProps = {
        onAttachmentLoad: b("emptyFunction"),
        threadCustomColor: "#0084ff"
    };
    a.contextType = b("MessengerSourceContext.re").context;
    function l(a, c) {
        var d = c === "source:workchat:quickchat";
        c = c === "source:work_room_incall_chat" || c === "source:messenger_room_incall_chat";
        return b("getViewportDimensions")().width <= parseInt("700px".replace("px", ""), 10) || b("MessengerSettingsStore").getSettings().info_sidebar_collapsed && a || d || c ? "above" : a ? "right" : "left"
    }
}
), null);
__d("MessengerPageAdminNoteList.react", ["cx", "fbt", "LeftRight.react", "MessengerBubble.react", "PagesMessengerCreatorInfo.react", "React", "ReactComponentWithPureRenderMixin", "classWithMixins", "enumerate", "immutable", "mixin", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , b = []
              , c = this.calculateGroups(this.props.notes);
            c.forEach(function(c, d) {
                b.push(i.jsx("li", {
                    className: "_4kd2",
                    children: a.$MessengerPageAdminNoteList1(c)
                }, "group:" + d))
            });
            return i.jsx("ul", {
                className: "_4kd3",
                children: b
            })
        }
        ;
        d.$MessengerPageAdminNoteList1 = function(a) {
            var b = this
              , c = [];
            a.forEach(function(d, e) {
                c.push(i.jsx("div", {
                    className: "_4kd4",
                    children: b.$MessengerPageAdminNoteList2(d, a)
                }, "note:" + e))
            });
            return c
        }
        ;
        d.$MessengerPageAdminNoteList2 = function(a, c) {
            c = b("immutable").List([i.jsxs(b("LeftRight.react"), {
                className: "_561k",
                children: [i.jsx("div", {
                    className: "_561l",
                    children: h._("Ghi ch\u00fa ri\u00eang")
                }), i.jsx(b("PagesMessengerCreatorInfo.react"), {
                    creator_info: c[0].creator_info,
                    isNote: !0
                }, "creator_info")]
            })]);
            return i.jsx("div", {
                className: "_o46 _3i_m _nd_",
                children: i.jsx("div", {
                    className: "clearfix",
                    children: i.jsx(b("MessengerBubble.react"), {
                        body: a.body.text,
                        attachments: c,
                        className: "_3058 _4kd5"
                    })
                })
            })
        }
        ;
        d.calculateGroups = function(a) {
            var c = []
              , d = null
              , e = null;
            a = b("enumerate")(a);
            var f;
            while (!(f = a.next()).done) {
                var g = e && e.value.creator_info.creatorID === f.value.creator_info.creatorID;
                g || (d = [],
                c.push(d));
                d && d.push(f.value);
                e = f
            }
            return c
        }
        ;
        return c
    }(b("classWithMixins")(i.Component, b("mixin")(b("ReactComponentWithPureRenderMixin"))));
    e.exports = a;
    a.propTypes = {
        notes: (c = b("prop-types")).arrayOf(c.shape({
            id: c.string,
            body: c.object.isRequired,
            creator_info: c.shape({
                creatorID: c.string.isRequired,
                creatorName: c.string.isRequired,
                creatorType: c.string.isRequired,
                labelType: c.string.isRequired,
                pageID: c.string.isRequired,
                profileURI: c.string
            }),
            timestamp: c.number.isRequired
        })).isRequired
    }
}
), null);
__d("MessengerRemovedMessageTombstone.react", ["cssVar", "cx", "fbt", "MercuryTimestamp", "MessengerDecorator", "MessengerDotComAndInboxM4Check.bs", "MessengerInnerDecorators.react", "MessengerMessageActionsWrapper.react", "MessengerMessageSeenHeadsReact.bs", "MessengerSettingsStore", "React", "RemovedMessageTombstoneContent", "TooltipData", "WorkChatRedesignedMessageListCheck.re", "getViewportDimensions", "gkx", "immutable", "joinClasses", "messengerRTLClasses"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                shown: {}
            },
            c.$2 = function(a, b) {
                c.setState(function(c) {
                    return {
                        shown: babelHelpers["extends"]({}, c.shown, (c = {},
                        c[a] = b,
                        c))
                    }
                })
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.isActive
              , d = a.isFromViewer;
            a = a.message;
            var e = []
              , f = this.props.message;
            f && b("MessengerDecorator").getInnerDecorators().forEach(function(a) {
                a.check(f) && e.push(a.getAdditionalClassNames())
            });
            var g = this.$1();
            return j.jsxs(b("MessengerMessageActionsWrapper.react"), {
                className: b("joinClasses").apply(void 0, ["clearfix _o46 _3erg" + (c ? " _-5k" : "") + (d ? " _3i_m" : "") + (d ? " _nd_" : "") + (d ? "" : " _29_7") + "", b("messengerRTLClasses")(a.body)].concat(e)),
                message: a,
                onShowMenu: this.$2,
                children: [g, this.props.hideDeliveryState === !0 ? null : j.jsx(b("MessengerMessageSeenHeadsReact.bs").jsComponent, {
                    className: "_4jzq",
                    isFromViewer: d,
                    message: a,
                    nextTimestamp: this.props.nextTimestamp,
                    participants: this.props.participants,
                    readReceipts: this.props.readReceipts
                })]
            })
        }
        ;
        d.$1 = function() {
            var a = this.props.message
              , c = b("RemovedMessageTombstoneContent").getRemovedMessageTombstoneContent(a, this.props.participants)
              , d = this.$3();
            d = b("TooltipData").propsFor(d, k(this.props.isFromViewer));
            return j.jsxs("div", babelHelpers["extends"]({
                className: "_3058 _ui9" + (a.isSelected ? " _3xsz" : "") + " _7301 _hh7" + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _6ybn" : "") + " _s1- _52mr _3oh-"
            }, d || {}, {
                children: [this.props.hideBeforeDecorator === !0 ? null : j.jsx(b("MessengerInnerDecorators.react"), {
                    className: "_1z_2",
                    message: a,
                    isFromViewer: !!this.props.isFromViewer,
                    hovered: this.state.shown[a.message_id],
                    messageProps: {},
                    isSavedView: !1
                }), j.jsx("div", {
                    className: "_aok" + (b("WorkChatRedesignedMessageListCheck.re").enabled ? " _7w73" : ""),
                    tabIndex: 0,
                    "aria-label": c,
                    children: j.jsx("span", {
                        children: c
                    })
                })]
            }))
        }
        ;
        d.$3 = function() {
            var a = this.props.message.timestamp
              , c = this.props.message.removed_timestamp;
            a = i._("G\u1eedi v\u00e0o: {sent time}", [i._param("sent time", b("MercuryTimestamp").getPreciseTimestamp(a))]);
            if (!c)
                return a;
            c = b("gkx")("1531920") ? i._("Th\u1eddi gian thu h\u1ed3i: {removed time}", [i._param("removed time", b("MercuryTimestamp").getPreciseTimestamp(c))]) : i._("G\u1ee1 v\u00e0o: {removed time}", [i._param("removed time", b("MercuryTimestamp").getPreciseTimestamp(c))]);
            return a.toString() + "\n" + c.toString()
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    function k(a) {
        return b("getViewportDimensions")().width <= parseInt("700px".replace("px", ""), 10) || b("MessengerSettingsStore").getSettings().info_sidebar_collapsed && a ? "above" : a ? "right" : "left"
    }
}
), null);
__d("MessengerMessageGroup.react", ["cx", "fbt", "CurrentUser", "Image.react", "ImmutableObject", "JSResource", "Link.react", "MercuryIDs", "MercuryParticipantSilhouettes", "MessengerActions", "MessengerContactActions.re", "MessengerEnvironment", "MessengerMessage.react", "MessengerPageAdminNoteList.react", "MessengerParticipants.bs", "MessengerProfileImageWrapperReact.bs", "MessengerRemovedMessageTombstone.react", "MessengerStickerUtils", "MessengerTextWithEmoticons.react", "MessengerURIUtils.bs", "Middot.react", "PagesMessengerCreatorInfo.react", "React", "ReactDOM", "createReactClass_DEPRECATED", "goURI", "immutable", "isMessengerMessageRemoved", "prop-types", "requireCond", "lazyLoadComponent", "cr:1003205", "cr:1228094"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = b("immutable").List;
    c = b("immutable").OrderedMap;
    var j = b("lazyLoadComponent")(b("JSResource")("MessengerAvatarActions.react").__setRef("MessengerMessageGroup.react"))
      , k = 32
      , l = new (b("ImmutableObject"))({
        image_src: b("MercuryParticipantSilhouettes").neutralSilhouette,
        is_messenger_user: !0,
        name: ""
    });
    f = b("createReactClass_DEPRECATED")({
        displayName: "MessengerMessageGroup",
        _subscription: null,
        propTypes: {
            author: (d = b("prop-types")).string.isRequired,
            activeMessageID: d.string,
            deliveryTimestamp: d.number.isRequired,
            hasDateBreak: d.bool,
            isCanonical: d.bool,
            isFromViewer: d.bool,
            isOnline: d.bool,
            isPageMessage: d.bool,
            lastReadTimestamp: d.number.isRequired,
            messages: d.instanceOf(a).isRequired,
            nextTimestamp: d.number.isRequired,
            onReactionSwap: d.func,
            onAttachmentLoad: d.func.isRequired,
            onMessageDeselect: d.func.isRequired,
            onMessageSelect: d.func.isRequired,
            persona: d.object,
            onReplyToMessage: d.func,
            readReceipts: d.instanceOf(c).isRequired,
            thread: d.object,
            pageID: d.string,
            scrollToRepliedMessage: d.func,
            selectedMessageId: d.string
        },
        getInitialState: function() {
            return {
                participants: {}
            }
        },
        componentDidMount: function() {
            this._subscription = this._computeParticipants()
        },
        shouldComponentUpdate: function(a, c) {
            var d = a.thread
              , e = this.props.thread;
            d = Boolean(d && e && (d.solid_color !== e.solid_color || d.custom_nickname !== e.custom_nickname));
            return this.props.activeMessageID !== a.activeMessageID || this.props.isFromViewer !== a.isFromViewer || this.props.deliveryTimestamp !== a.deliveryTimestamp || this.props.lastReadTimestamp !== a.lastReadTimestamp || this.props.onAttachmentLoad !== a.onAttachmentLoad || !b("immutable").is(this.props.messages, a.messages) || this.props.messages !== a.messages || !b("immutable").is(this.props.readReceipts, a.readReceipts) || this.state.participants !== c.participants || d
        },
        componentDidUpdate: function() {
            var a = this
              , b = m(this.props);
            !this._subscription && !b.every(function(b) {
                return a.state.participants[b]
            }) && (this._subscription = this._computeParticipants())
        },
        componentWillUnmount: function() {
            this._subscription && b("MessengerParticipants.bs").removeCallback(this._subscription)
        },
        render: function() {
            return i.jsxs("div", {
                children: [i.jsxs("div", {
                    className: "_1t_p clearfix" + (b("MessengerStickerUtils").isStickerMessageGroup(this.props.messages) ? " _5tx1" : "") + (this._hasSeenHeadsAtBottom() ? " _35fy" : ""),
                    children: [this._renderProfileColumn(), i.jsxs("div", {
                        className: "_41ud",
                        children: [this._renderName(), this._renderMessages()]
                    })]
                }), this.props.isPageMessage ? this._renderNotes() : null]
            })
        },
        _renderProfileColumn: function() {
            var a;
            if (this.props.isFromViewer)
                return null;
            var c = this.props.messages.last();
            c = this.state.participants[c.author] || l;
            var d = c.name
              , e = c.image_src;
            this.props.persona && (d = this.props.persona.name,
            e = this.props.persona.profile_picture_url);
            var f = h._("{name}", [h._param("name", d)]);
            a = (a = c) != null ? (a = a.work_foreign_entity_info) != null ? a.type : a : a;
            a = b("CurrentUser").isWorkUser() && a === "FOREIGN";
            a = b("cr:1003205") ? i.jsx(b("cr:1003205").make, {
                className: "_1t_r",
                isActive: !!this.props.isOnline,
                size: k,
                src: e,
                tooltipContent: f.toString()
            }) : i.jsx(b("MessengerProfileImageWrapperReact.bs").jsComponent, {
                className: "_1t_r",
                isMessengerUser: c.is_messenger_user,
                size: k,
                showBadge: a,
                isMultiCompany: a,
                tooltipContent: f,
                children: i.jsx(b("Image.react"), {
                    alt: d,
                    src: e,
                    height: k,
                    width: k
                })
            });
            if (c.fbid) {
                f = b("MessengerURIUtils.bs").getURIForUserID(c.fbid);
                !this.props.persona ? a = i.jsx(i.Suspense, {
                    fallback: this.props.isCanonical ? a : i.jsx(b("Link.react"), {
                        className: "_5f0v",
                        href: f.toString(),
                        onClick: this._handleContactSelect.bind(this, c),
                        tabIndex: -1,
                        children: a
                    }),
                    children: i.jsx(j, {
                        avatar: a,
                        contact: c,
                        showSendMessageItem: !this.props.isCanonical,
                        onAction: this._handleContactAction
                    })
                }) : this.props.isCanonical || (a = i.jsx(b("Link.react"), {
                    className: "_5f0v",
                    href: f.toString(),
                    onClick: this._handleContactSelect.bind(this, c),
                    tabIndex: -1,
                    children: a
                }))
            }
            return i.jsx("div", {
                className: "_1t_q",
                children: a
            })
        },
        _handleContactAction: function(a, c, d) {
            switch (a) {
            case b("MessengerContactActions.re").actions.MESSAGE:
                this._handleContactSelect(c, d);
                break;
            case b("MessengerContactActions.re").actions.PROFILE:
                a = this.state.participants[c.id];
                if (a && a.href) {
                    var e = b("MessengerEnvironment").messengerdotcom;
                    e ? window.open(a.href) : b("goURI")(a.href)
                } else
                    this._handleContactSelect(c, d);
                break
            }
        },
        _renderMessages: function() {
            var a = this
              , c = this.props.messages.size
              , d = [];
            this.props.messages.forEach(function(e, f, g) {
                var h = e.message_id === a.props.activeMessageID
                  , j = !1;
                a.props.selectedMessageId ? j = e.message_id === a.props.selectedMessageId : j = e.isSelected;
                var k = b("MercuryIDs").getUserIDFromParticipantID(a.props.author)
                  , l = a.props.thread ? a.props.thread.solid_color : ""
                  , m = a.props.onAttachmentLoad
                  , o = e.timestamp;
                if (b("isMessengerMessageRemoved")(e)) {
                    d.push(i.jsx(b("MessengerRemovedMessageTombstone.react"), {
                        isActive: h,
                        isFromViewer: a.props.isFromViewer,
                        message: e,
                        participants: b("immutable").Map(a.state.participants),
                        nextTimestamp: a._getNextTimestamp(g, c, f),
                        onSelect: a.props.onMessageSelect,
                        onReplyToMessage: a.props.onReplyToMessage,
                        readReceipts: a.props.readReceipts,
                        ref: e.message_id,
                        isFirstInGroup: f === 0
                    }, e.message_id));
                    return
                }
                d.push(i.jsx(b("MessengerMessage.react"), {
                    thread: a.props.thread,
                    customColor: l,
                    deliveryTimestamp: a.props.deliveryTimestamp,
                    isActive: h,
                    isFromViewer: a.props.isFromViewer,
                    isPageMessage: a.props.isPageMessage,
                    isSelected: j,
                    message: e,
                    messageTimestamp: o,
                    messageActionsWrapper: a.props.messageActionWrapper,
                    onReactionSwap: a.props.onReactionSwap,
                    onAttachmentLoad: m,
                    participants: b("immutable").Map(a.state.participants),
                    nextTimestamp: a._getNextTimestamp(g, c, f),
                    onDeselect: a.props.onMessageDeselect,
                    onSelect: a.props.onMessageSelect,
                    onReplyToMessage: a.props.onReplyToMessage,
                    readReceipts: a.props.readReceipts,
                    showDeliveryState: e.timestamp > a.props.lastReadTimestamp || !!e.is_one_way_sent,
                    ref: e.message_id,
                    authorFBID: k == null ? void 0 : k,
                    threadCustomColor: l,
                    pageID: a.props.pageID,
                    scrollToRepliedMessage: a.props.scrollToRepliedMessage,
                    isCanonical: a.props.isCanonical,
                    isFirstInGroup: f === 0
                }, e.message_id));
                n(a.props.isPageMessage, g, f, e) && d.push(i.jsx(b("PagesMessengerCreatorInfo.react"), {
                    creator_info: e.creator_info
                }, "creator_info:" + f))
            });
            return d
        },
        _renderNotes: function() {
            var a = this
              , c = [];
            this.props.messages.forEach(function(d, e, f) {
                a.props.isPageMessage && d.page_admin_notes && c.push(i.jsx(b("MessengerPageAdminNoteList.react"), {
                    notes: d.page_admin_notes
                }, "notes:" + d.message_id))
            });
            return c
        },
        _renderName: function() {
            var a = this.props.messages.first()
              , c = this.state.participants[a.author]
              , d = a.replied_to_message;
            if (!c)
                return null;
            if (d)
                return null;
            d = this.props.isCanonical ? c.short_name : c.name;
            var e = d
              , f = null;
            if (this.props.thread) {
                var g = this.props.thread.custom_nickname ? this.props.thread.custom_nickname : null
                  , j = b("MercuryIDs").getUserIDFromParticipantID(c.id);
                g && j && g[j] && (d = g[j],
                e = i.jsx(b("MessengerTextWithEmoticons.react"), {
                    renderEmoticons: !0,
                    renderEmoji: !0,
                    text: g[j]
                }));
                b("CurrentUser").isWorkUser() && b("cr:1228094") != null && j != null && (f = i.jsx(b("cr:1228094"), {
                    userID: j,
                    withSpace: !0
                }))
            }
            if (this.props.persona != null) {
                g = this.state.participants[a.author];
                e = g ? h._("{persona name} t\u1eeb {page name}", [h._param("persona name", this.props.persona.name), h._param("page name", g.short_name)]) : this.props.persona.name;
                d = e.toString()
            }
            j = null;
            if (((a = c.work_foreign_entity_info) == null ? void 0 : a.detail) === "LIMITED_ACCOUNT") {
                j = i.jsxs("span", {
                    className: "_9g79",
                    children: [i.jsx(b("Middot.react"), {}), (g = c.work_foreign_entity_info) == null ? void 0 : g.label]
                })
            }
            a = i.jsxs("h5", {
                "aria-label": d,
                className: "_ih3" + (this.props.isFromViewer ? " accessible_elem" : "") + (this.props.isCanonical && !this.props.persona ? " _-ne" : ""),
                children: [e, j, f]
            });
            return a
        },
        getMessageElement: function(a) {
            return b("ReactDOM").findDOMNode(this.refs[a])
        },
        _hasSeenHeadsAtBottom: function() {
            var a = this.props
              , b = a.messages
              , c = a.nextTimestamp;
            a = a.readReceipts;
            var d = b.last().timestamp
              , e = 0;
            a.forEach(function(a) {
                if (a >= d && a < c && ++e === 2)
                    return !1
            });
            return e === 2
        },
        _getNextTimestamp: function(a, b, c) {
            return c < b - 1 ? a.get(c + 1).timestamp : this.props.nextTimestamp
        },
        _handleContactSelect: function(a, c) {
            c && c.preventDefault();
            c = b("MercuryIDs").getThreadIDFromParticipantID(a.id);
            c && b("MessengerActions").selectThread(c)
        },
        _computeParticipants: function() {
            var a = this
              , c = m(this.props)
              , d = {}
              , e = [];
            c.forEach(function(a) {
                var c = b("MessengerParticipants.bs").getNow(a);
                d[a] = c;
                c || e.push(a)
            });
            this.setState({
                participants: d
            });
            return e.length > 0 ? b("MessengerParticipants.bs").getMulti(e, function(b) {
                a._subscription = null,
                a.setState(function(c) {
                    var a = Object.assign({}, c.participants);
                    e.forEach(function(c) {
                        a[c] = b[c]
                    });
                    return {
                        participants: a
                    }
                })
            }) : null
        }
    });
    function m(a) {
        var b = [a.messages.first().author];
        a.readReceipts.forEach(function(a, c) {
            return b.push(c)
        });
        return b
    }
    function n(a, b, c, d) {
        if (!a || !d.creator_info)
            return !1;
        if (c === b.size - 1)
            return !0;
        a = b.get(c + 1).creator_info;
        return !a ? !0 : d.creator_info.creatorID !== a.creatorID
    }
    g = f;
    e.exports = g
}
), null);
