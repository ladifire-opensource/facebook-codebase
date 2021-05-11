if (self.CavalryLogger) {
    CavalryLogger.start_js(["jjPDh"]);
}

__d("MqttPublishListener", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        NOT_CONNECTED: "NOT_CONNECTED",
        PUBLISH_ERROR: "PUBLISH_ERROR",
        QUEUED: "QUEUED",
        SENT: "SENT",
        ACKED: "ACKED",
        NOT_ACKED: "NOT_ACKED"
    });
    f.MqttPublishEvent = a
}
), null);
__d("MqttEnv", ["killswitch"], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        mqtt_waterfall_log_client_sampling: 1,
        mqtt_ws_polling_enabled: 3,
        mqtt_lp_use_fetch: 9,
        mqtt_fast_lp: 11,
        mqtt_lp_no_delay: 12,
        mqtt_enable_publish_over_polling: 13
    });
    f.MqttGkNames = a;
    c = function() {
        var a = c.prototype;
        a.random = function() {
            return this.$1 != null ? this.$1() : Math.random()
        }
        ;
        a.isUserLoggedInNow = function() {
            return this.$2 != null ? this.$2() : !0
        }
        ;
        a.clearTimeout = function(a) {
            function b(b) {
                return a.apply(this, arguments)
            }
            b.toString = function() {
                return a.toString()
            }
            ;
            return b
        }(function(a) {
            if (this.$3 != null) {
                this.$3(a);
                return
            }
            clearTimeout(a)
        });
        a.setTimeout = function(a) {
            function b(b, c) {
                return a.apply(this, arguments)
            }
            b.toString = function() {
                return a.toString()
            }
            ;
            return b
        }(function(a, b) {
            for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++)
                d[e - 2] = arguments[e];
            return this.$4 != null ? this.$4.apply(null, arguments) : setTimeout.apply(null, arguments)
        });
        a.getLoggerInstance = function() {
            return this.$5 != null ? this.$5() : g.getInstance()
        }
        ;
        a.genGk = function(a) {
            return this.$6 != null ? this.$6(a) : !1
        }
        ;
        a.killswitch = function(a) {
            return this.$7 != null ? this.$7(a) : b("killswitch")(a)
        }
        ;
        a.createSocket = function(a, b) {
            return this.$8 != null ? this.$8(a, b) : new WebSocket(a)
        }
        ;
        a.scheduleCallback = function(a) {
            return this.$9 != null ? this.$9(a) : a()
        }
        ;
        a.scheduleLoggingCallback = function(a) {
            return this.$10 != null ? this.$10(a) : a()
        }
        ;
        a.configRead = function(a, b) {
            return this.$11 != null ? this.$11(a, b) : b
        }
        ;
        a.configWrite = function(a, b) {
            this.$12 != null && this.$12(a, b)
        }
        ;
        function c() {
            this.$1 = null,
            this.$2 = null,
            this.$3 = null,
            this.$4 = null,
            this.$5 = null,
            this.$6 = null,
            this.$7 = null,
            this.$8 = null,
            this.$9 = null,
            this.$10 = null,
            this.$11 = null,
            this.$12 = null
        }
        a.initialize = function(a, b, c, d, e, f, g, h, i, j, k, l) {
            this.$1 = a,
            this.$2 = b,
            this.$3 = c,
            this.$4 = d,
            this.$5 = e,
            this.$6 = f,
            this.$7 = l,
            this.$8 = g,
            this.$9 = h,
            this.$10 = i,
            this.$11 = j,
            this.$12 = k
        }
        ;
        return c
    }();
    var g = function() {
        function a() {}
        a.getInstance = function() {
            return new a()
        }
        ;
        var b = a.prototype;
        b.setAppId = function(a) {}
        ;
        b.eventLogConnect = function(a) {}
        ;
        b.eventLogPull = function(a) {}
        ;
        b.eventLogPullFinish = function(a) {}
        ;
        b.eventLogDisconnect = function(a) {}
        ;
        b.eventLogOutgoingPublish = function(a) {}
        ;
        b.eventLogIncomingPublish = function(a) {}
        ;
        b.eventLogPublishTimeout = function(a) {}
        ;
        b.eventLogMiscellaneousError = function(a) {}
        ;
        b.logIfLoggedOut = function() {}
        ;
        b.logError = function(a) {}
        ;
        b.logErrorWarn = function(a) {}
        ;
        b.logWarn = function(a) {}
        ;
        b.debugTrace = function(a) {}
        ;
        b.bumpCounter = function(a) {}
        ;
        return a
    }();
    d = new c();
    f.Env = d
}
), null);
__d("IrisSubscribeChecker", ["MqttEnv"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    a = function() {
        function a(a) {
            this.$1 = g.getLoggerInstance();
            this.$2 = null;
            this.$3 = !1;
            this.$4 = !1;
            this.$5 = !1;
            this.$6 = !0;
            this.$7 = 0;
            this.$8 = a;
            if (typeof window !== "undefined") {
                a = window.location.hostname;
                (a === "m.facebook.com" || a === "mobile.facebook.com" || a === "mtouch.facebook.com") && (this.$6 = !1)
            }
        }
        var b = a.prototype;
        b.start = function() {
            this.$6 = !0
        }
        ;
        b.stop = function() {
            this.$6 = !1,
            this.$9()
        }
        ;
        b.onConnectAttempt = function() {}
        ;
        b.onConnectFailure = function() {
            this.$9()
        }
        ;
        b.onConnected = function() {
            var a = this;
            this.$7++;
            this.$9();
            this.$3 = !1;
            this.$4 = !1;
            this.$5 = !1;
            this.$6 && (this.$2 = g.setTimeout(function() {
                a.$10()
            }, 8e3))
        }
        ;
        b.onConnectSuccess = function() {}
        ;
        b.onConnectionLost = function() {
            this.$9()
        }
        ;
        b.onSubscribe = function(a) {
            a === "/t_ms" && (this.$3 = !0)
        }
        ;
        b.onUnsubscribe = function(a) {}
        ;
        b.onPublish = function(a) {
            (a === "/messenger_sync_get_diffs" || a === "/messenger_sync_create_queue") && (this.$4 = !0,
            this.$3 && (this.$5 = !0,
            this.$9()))
        }
        ;
        b.onMessage = function(a) {}
        ;
        b.onWSFatal = function() {}
        ;
        b.$9 = function() {
            this.$2 && (g.clearTimeout(this.$2),
            this.$2 = null)
        }
        ;
        b.$10 = function() {
            if (this.$4 === !1) {
                var a = this.$7 == 1 ? "no_iris_session_initialConnect" : "no_iris_session";
                this.$1.bumpCounter(a);
                this.$1.eventLogMiscellaneousError({
                    errorMessage: a
                });
                this.$8() ? this.$1.bumpCounter(a + ".withProvider") : this.$1.bumpCounter(a + ".withoutProvider");
                this.$3 === !0 ? this.$1.bumpCounter(a + ".withTopicSubscribe") : this.$1.bumpCounter(a + ".withoutTopicSubscribe")
            }
            this.$3 === !1 && this.$1.bumpCounter("no_iris_topic_subscribe");
            this.$3 === !0 && this.$4 === !0 && this.$5 === !1 && this.$1.bumpCounter("session_before_topic_subscribe")
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttAnalyticsHook", ["MqttEnv"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    a = function() {
        function a() {
            this.$1 = g.getLoggerInstance(),
            this.$2 = 0,
            this.$3 = 0,
            this.$4 = 0,
            this.$5 = 0,
            this.$1.bumpCounter("session_start"),
            g.isUserLoggedInNow() || this.$1.bumpCounter("session_start.logout")
        }
        var b = a.prototype;
        b.onConnectAttempt = function() {
            this.$1.bumpCounter("ws_connect_attempt")
        }
        ;
        b.onConnectFailure = function() {
            this.$3++,
            this.$1.bumpCounter("ws_connect_failure")
        }
        ;
        b.onConnected = function() {
            this.$1.bumpCounter("ws_connect_connected")
        }
        ;
        b.onConnectSuccess = function() {
            this.$2 === 0 && this.$1.bumpCounter("ws_connect_first_success"),
            this.$2++,
            this.$1.bumpCounter("ws_connect_success")
        }
        ;
        b.onConnectionLost = function() {
            this.$1.bumpCounter("ws_disconnect")
        }
        ;
        b.onSubscribe = function(a) {}
        ;
        b.onUnsubscribe = function(a) {}
        ;
        b.onPublish = function(a) {
            this.$1.bumpCounter("ws_publish." + a)
        }
        ;
        b.onMessage = function(a) {
            this.$1.bumpCounter("message_arrived." + a)
        }
        ;
        b.onWSFatal = function() {
            this.$1.bumpCounter("ws_fatal")
        }
        ;
        b.onPollRequestSent = function() {
            this.$1.bumpCounter("polling_request_send")
        }
        ;
        b.onPollRequestSuccess = function() {
            this.$1.bumpCounter("polling_request_succeed"),
            this.$4 === 0 && this.$1.bumpCounter("polling_first_success"),
            this.$4++
        }
        ;
        b.onPollResponse = function(a) {
            this.$1.bumpCounter("lp.message_arrived." + a)
        }
        ;
        b.onPollFinish = function() {
            this.$1.bumpCounter("polling_request_finish")
        }
        ;
        b.onPollRequestFailed = function(a) {
            this.$1.bumpCounter("polling_request_failed"),
            this.$1.bumpCounter("polling_request_failed_" + a),
            this.$5++
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttConnectionHookCollection", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Set()
        }
        var b = a.prototype;
        b.addHook = function(a) {
            this.$1.add(a)
        }
        ;
        b.removeHook = function(a) {
            this.$1["delete"](a)
        }
        ;
        b.onConnectAttempt = function() {
            this.$1.forEach(function(a) {
                a.onConnectAttempt()
            })
        }
        ;
        b.onConnectFailure = function() {
            this.$1.forEach(function(a) {
                a.onConnectFailure()
            })
        }
        ;
        b.onConnected = function() {
            this.$1.forEach(function(a) {
                a.onConnected()
            })
        }
        ;
        b.onConnectSuccess = function() {
            this.$1.forEach(function(a) {
                a.onConnectSuccess()
            })
        }
        ;
        b.onConnectionLost = function() {
            this.$1.forEach(function(a) {
                a.onConnectionLost()
            })
        }
        ;
        b.onSubscribe = function(a) {
            this.$1.forEach(function(b) {
                b.onSubscribe(a)
            })
        }
        ;
        b.onUnsubscribe = function(a) {
            this.$1.forEach(function(b) {
                b.onUnsubscribe(a)
            })
        }
        ;
        b.onPublish = function(a) {
            this.$1.forEach(function(b) {
                b.onPublish(a)
            })
        }
        ;
        b.onMessage = function(a) {
            this.$1.forEach(function(b) {
                b.onMessage(a)
            })
        }
        ;
        b.onWSFatal = function() {
            this.$1.forEach(function(a) {
                a.onWSFatal()
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttProtocolUtils", ["MqttEnv"], (function(a, b, c, d, e, f) {
    var g = b("MqttEnv").Env;
    function a(a, b) {
        if (a == null)
            return b;
        var c = new Uint8Array(a.length + b.length);
        c.set(a);
        c.set(b, a.length);
        return c
    }
    function c(a, b) {
        b = b;
        var c = 0, d = 1, e;
        do {
            if (b === a.length)
                return null;
            e = a[b++];
            c += (e & 127) * d;
            d *= 128
        } while ((e & 128) !== 0);return {
            value: c,
            offset: b
        }
    }
    function d(a) {
        a = a;
        var b = new Array(1);
        for (var c = 0; c < 4; c++) {
            var d = a % 128;
            a >>= 7;
            if (a > 0)
                b[c] = d | 128;
            else {
                b[c] = d;
                break
            }
        }
        return b
    }
    function h(a, b, c) {
        c = c;
        b[c++] = a >> 8;
        b[c++] = a % 256;
        return c
    }
    function f(a, b) {
        return 256 * a[b] + a[b + 1]
    }
    function i(a) {
        var b = 0;
        for (var c = 0, d = a.length; c < d; c++) {
            var e = a.charCodeAt(c);
            e < 128 ? b += 1 : e < 2048 ? b += 2 : e >= 55296 && e <= 56319 ? (b += 4,
            c++) : b += 3
        }
        return b
    }
    function j(a, b, c, d) {
        d = h(b, c, d);
        k(a, c, d);
        return d + b
    }
    function k(a, b, c) {
        c = c;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a.charCodeAt(d);
            f < 128 ? b[c++] = f : f < 2048 ? (b[c++] = 192 | f >> 6,
            b[c++] = 128 | f & 63) : f < 55296 || f >= 57344 ? (b[c++] = 224 | f >> 12,
            b[c++] = 128 | f >> 6 & 63,
            b[c++] = 128 | f & 63) : (f = 65536 + ((f & 1023) << 10 | a.charCodeAt(++d) & 1023),
            b[c++] = 240 | f >> 18,
            b[c++] = 128 | f >> 12 & 63,
            b[c++] = 128 | f >> 6 & 63,
            b[c++] = 128 | f & 63)
        }
    }
    function l(a, b, c) {
        var d = []
          , e = b
          , f = 0;
        while (e < b + c) {
            var g = a[e++];
            if (g < 128)
                d[f++] = String.fromCharCode(g);
            else if (g > 191 && g < 224) {
                var h = a[e++];
                d[f++] = String.fromCharCode((g & 31) << 6 | h & 63)
            } else if (g > 239 && g < 365) {
                h = a[e++];
                var i = a[e++]
                  , j = a[e++];
                h = ((g & 7) << 18 | (h & 63) << 12 | (i & 63) << 6 | j & 63) - 65536;
                d[f++] = String.fromCharCode(55296 + (h >> 10));
                d[f++] = String.fromCharCode(56320 + (h & 1023))
            } else {
                i = a[e++];
                j = a[e++];
                d[f++] = String.fromCharCode((g & 15) << 12 | (i & 63) << 6 | j & 63)
            }
        }
        return d.join("")
    }
    b = function() {
        "use strict";
        function a(a, b, c) {
            this.$1 = a * 1e3,
            this.$4 = b,
            this.$5 = c,
            this.$3 = !1
        }
        var b = a.prototype;
        b.$6 = function() {
            var a = this;
            this.$3 ? (this.$3 = !1,
            this.$4(),
            this.$2 = g.setTimeout(function() {
                a.$6()
            }, this.$1)) : this.$5()
        }
        ;
        b.reset = function() {
            var a = this;
            this.$3 = !0;
            this.$2 && (g.clearTimeout(this.$2),
            this.$2 = null);
            this.$1 > 0 && (this.$2 = g.setTimeout(function() {
                a.$6()
            }, this.$1))
        }
        ;
        b.cancel = function() {
            this.$2 && (g.clearTimeout(this.$2),
            this.$2 = null)
        }
        ;
        return a
    }();
    e.exports = {
        UTF8Length: i,
        convertStringToUTF8: k,
        concatBuffers: a,
        decodeMultiByteInt: c,
        convertUTF8ToString: l,
        encodeMultiByteInt: d,
        writeUInt16BE: h,
        readUInt16BE: f,
        writeString: j,
        Pinger: b
    }
}
), null);
__d("MqttUtils", ["MqttEnv"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = {
        endpointWithSessionId: function(a, b) {
            return this.endpointWithExtraParameter(a, "sid", b.toString())
        },
        endpointWithExtraParameters: function(a, b) {
            var c = this
              , d = a;
            b.forEach(function(a, b, e) {
                d = c.endpointWithExtraParameter(d, b, a)
            });
            return d
        },
        endpointWithExtraParameter: function(a, b, c) {
            if (a.indexOf("?") > 0)
                return a + "&" + b + "=" + c;
            else
                return a + "?" + b + "=" + c
        },
        generateSessionId: function() {
            return Math.floor(g.random() * Number.MAX_SAFE_INTEGER)
        },
        promiseDone: function(a, b, c) {
            var d = arguments.length > 1 ? a.then(b, c) : a;
            d.then(null, function(a) {
                g.setTimeout(function() {
                    if (a instanceof Error)
                        throw a;
                    else
                        throw new Error("promiseDone")
                }, 0)
            })
        },
        promiseDoneWithTimeout: function(a, b, c, d) {
            var e = !1;
            g.setTimeout(function() {
                e || (e = !0,
                c(new Error("promise timeout")))
            }, d);
            h.promiseDone(a, function(a) {
                e || (e = !0,
                b(a))
            }, function(a) {
                e || (e = !0,
                c(a))
            })
        },
        sprintf: function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                c[d - 1] = arguments[d];
            var e = 0;
            return a.replace(/%s/g, function() {
                return String(c[e++])
            })
        },
        hasWSSupport: function() {
            return "WebSocket"in a && a.WebSocket != null && "CLOSING"in a.WebSocket.prototype
        },
        getWSAvailability: function() {
            var b = "";
            if ("WebSocket"in a && a.WebSocket !== null)
                b += "W";
            else
                return "none";
            "CLOSING"in a.WebSocket.prototype && (b += "C");
            return b
        }
    };
    e.exports = h
}
), null);
__d("MqttProtocolCodec", ["MqttProtocolUtils", "MqttUtils"], (function(a, b, c, d, e, f) {
    var g = (c = b("MqttProtocolUtils")).UTF8Length
      , h = c.convertStringToUTF8
      , i = c.convertUTF8ToString
      , j = c.decodeMultiByteInt
      , k = c.encodeMultiByteInt
      , l = c.readUInt16BE
      , m = c.writeString
      , n = c.writeUInt16BE
      , o = b("MqttUtils").sprintf
      , p = Object.freeze({
        CONNECT: 1,
        CONNACK: 2,
        PUBLISH: 3,
        PUBACK: 4,
        SUBSCRIBE: 8,
        SUBACK: 9,
        UNSUBSCRIBE: 10,
        UNSUBACK: 11,
        PINGREQ: 12,
        PINGRESP: 13,
        DISCONNECT: 14
    })
      , q = [0, 6, 77, 81, 73, 115, 100, 112, 3];
    function r(a, b) {
        b = b;
        var c = b
          , d = a[b]
          , e = d >> 4;
        b += 1;
        var f = j(a, b);
        if (f == null)
            return {
                wireMessage: null,
                position: c
            };
        b = f.offset;
        f = b + f.value;
        if (f > a.length)
            return {
                wireMessage: null,
                position: c
            };
        var g;
        switch (e) {
        case p.CONNACK:
            c = a[b++];
            c = !!(c & 1);
            var h = a[b++];
            g = new u(c,h);
            break;
        case p.PUBLISH:
            c = d & 15;
            h = c >> 1 & 3;
            d = l(a, b);
            b += 2;
            var k = i(a, b, d);
            b += d;
            d = null;
            h === 1 && (d = l(a, b),
            b += 2);
            var m = w.createWithBytes(a.subarray(b, f))
              , n = (c & 1) === 1;
            c = (c & 8) === 8;
            g = new x(k,m,h,d,n,c);
            break;
        case p.PINGREQ:
            g = new s("PINGREQ");
            break;
        case p.PINGRESP:
            g = new s("PINGRESP");
            break;
        case p.PUBACK:
        case p.UNSUBACK:
            k = l(a, b);
            g = new v(e === p.PUBACK ? "PUBACK" : "UNSUBACK",k);
            break;
        case p.SUBACK:
            m = l(a, b);
            b += 2;
            h = a.subarray(b, f);
            g = new t(m,h);
            break;
        default:
            throw new Error(o("Invalid MQTT message type %s.", e))
        }
        return {
            wireMessage: g,
            position: f
        }
    }
    function a(a) {
        var b = []
          , c = 0;
        while (c < a.length) {
            var d = r(a, c)
              , e = d.wireMessage;
            c = d.position;
            if (e)
                b.push(e);
            else
                break
        }
        d = null;
        c < a.length && (d = a.subarray(c));
        return {
            messages: b,
            remaining: d
        }
    }
    d = function() {
        "use strict";
        function a(a) {
            this.messageType = p[a]
        }
        var b = a.prototype;
        b.encode = function() {
            throw new TypeError("Cannot abstract class WireMessage")
        }
        ;
        return a
    }();
    var s = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a) {
            return b.call(this, a) || this
        }
        var c = a.prototype;
        c.encode = function() {
            var a = new ArrayBuffer(2)
              , b = new Uint8Array(a);
            b[0] = (this.messageType & 15) << 4;
            return a
        }
        ;
        return a
    }(d);
    f = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.call(this, "DISCONNECT") || this
        }
        var c = b.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4
              , b = new ArrayBuffer(2)
              , c = new Uint8Array(b);
            c[0] = a;
            c.set(k(0), 1);
            return b
        }
        ;
        return b
    }(d);
    var t = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            var d;
            d = b.call(this, "SUBACK") || this;
            d.messageIdentifier = a;
            d.returnCode = c;
            return d
        }
        return a
    }(d)
      , u = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            var d;
            d = b.call(this, "CONNACK") || this;
            d.sessionPresent = a;
            d.returnCode = c;
            return d
        }
        return a
    }(d)
      , v = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            a = b.call(this, a) || this;
            a.messageIdentifier = c;
            return a
        }
        var c = a.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4
              , b = 2
              , c = k(b)
              , d = c.length + 1;
            b = new ArrayBuffer(b + d);
            var e = new Uint8Array(b);
            e[0] = a;
            e.set(c, 1);
            d = n(this.messageIdentifier, e, d);
            return b
        }
        ;
        return a
    }(d);
    c = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);
        function b(b, c) {
            var d;
            d = a.call(this, "CONNECT") || this;
            d.clientId = b;
            d.connectOptions = c;
            return d
        }
        var c = b.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4
              , b = q.length + 3;
            b += g(this.clientId) + 2;
            b += g(this.connectOptions.userName) + 2;
            var c = k(b);
            b = new ArrayBuffer(1 + c.length + b);
            var d = new Uint8Array(b);
            d[0] = a;
            a = 1;
            d.set(c, 1);
            a += c.length;
            d.set(q, a);
            a += q.length;
            c = 2 | 128;
            d[a++] = c;
            a = n(this.connectOptions.keepAliveInterval, d, a);
            a = m(this.clientId, g(this.clientId), d, a);
            a = m(this.connectOptions.userName, g(this.connectOptions.userName), d, a);
            return b
        }
        ;
        return b
    }(d);
    b = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d, e) {
            var f;
            f = a.call(this, b) || this;
            f.topic = c;
            if (d < 0 && d > 1 || d === 1 && e == null)
                throw new TypeError(o("Argument Invalid. qos: %s messageType: %s.", d, b));
            f.qos = d;
            f.messageIdentifier = e;
            return f
        }
        var c = b.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4;
            a |= 2;
            var b = g(this.topic)
              , c = 2 + b + 2;
            this.messageType === p.SUBSCRIBE && (c += 1);
            var d = k(c);
            c = new ArrayBuffer(1 + d.length + c);
            var e = new Uint8Array(c);
            e[0] = a;
            a = 1;
            e.set(d, 1);
            a += d.length;
            this.messageIdentifier != null && (a = n(this.messageIdentifier, e, a));
            a = m(this.topic, b, e, a);
            this.messageType === p.SUBSCRIBE && this.qos != null && (e[a++] = this.qos);
            return c
        }
        ;
        return b
    }(d);
    var w = function() {
        "use strict";
        function a(a, b) {
            this.payloadString = a,
            this.payloadBytes = b
        }
        a.createWithString = function(b) {
            var c = new Uint8Array(new ArrayBuffer(g(b)));
            h(b, c, 0);
            return new a(b,c)
        }
        ;
        a.createWithBytes = function(b) {
            var c = i(b, 0, b.length);
            return new a(c,b)
        }
        ;
        var b = a.prototype;
        b.string = function() {
            return this.payloadString
        }
        ;
        b.bytes = function() {
            return this.payloadBytes
        }
        ;
        return a
    }()
      , x = function(b) {
        "use strict";
        babelHelpers.inheritsLoose(a, b);
        function a(a, c, d, e, f, g) {
            var h;
            h = b.call(this, "PUBLISH") || this;
            h.topic = a;
            h.payloadMessage = c;
            h.qos = d;
            h.messageIdentifier = e;
            h.retained = f != null ? f : !1;
            h.duplicate = g != null ? g : !1;
            if (h.qos === 1 && h.messageIdentifier == null)
                throw new TypeError("Argument Invalid. messageIdentifier: null and qos: 1");
            return h
        }
        var c = a.prototype;
        c.encode = function() {
            var a = (this.messageType & 15) << 4;
            this.duplicate && (a |= 8);
            a = a |= this.qos << 1;
            this.retained && a != 1;
            var b = g(this.topic)
              , c = b + 2
              , d = this.qos === 0 ? 0 : 2;
            c += d;
            d = this.payloadMessage.bytes();
            c += d.byteLength;
            var e = k(c);
            c = new ArrayBuffer(1 + e.length + c);
            var f = new Uint8Array(c);
            f[0] = a;
            f.set(e, 1);
            a = 1 + e.length;
            a = m(this.topic, b, f, a);
            this.qos !== 0 && this.messageIdentifier != null && (a = n(this.messageIdentifier, f, a));
            f.set(d, a);
            return c
        }
        ;
        return a
    }(d);
    e.exports = {
        MESSAGE_TYPE: p,
        WireMessage: {
            Base: d,
            PubAckUnsubAck: v,
            Ping: s,
            ConnAck: u,
            Connect: c,
            Disconnect: f,
            Subscription: b,
            Publish: x
        },
        createMessageWithString: w.createWithString,
        decodeMessage: r,
        decodeByteMessages: a
    }
}
), null);
__d("MqttTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b) {
        this.errorCode = a,
        this.errorMessage = b
    }
    ;
    f.MqttError = a;
    b = function(a, b) {
        this.mqttError = a,
        this.connAck = b
    }
    ;
    f.ConnectFailure = b;
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d) {
            d === void 0 && (d = null);
            c = a.call(this, c) || this;
            c.isRecoverable = b;
            c.originalError = d;
            return c
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    f.MqttChannelError = c
}
), null);
__d("MqttProtocolClient", ["MqttEnv", "MqttProtocolCodec", "MqttTypes", "MqttProtocolUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 30
      , h = 6e4
      , i = b("MqttEnv").Env
      , j = (a = b("MqttProtocolCodec")).MESSAGE_TYPE
      , k = a.WireMessage
      , l = a.createMessageWithString
      , m = a.decodeByteMessages;
    c = b("MqttTypes").MqttError;
    var n = b("MqttTypes").ConnectFailure
      , o = b("MqttProtocolUtils").concatBuffers
      , p = b("MqttProtocolUtils").Pinger
      , q = {
        SOCKET_ERROR: new c(1,"Socket error"),
        SOCKET_MESSAGE: new c(2,"Unable to parse invalid socket message"),
        INVALID_DATA_TYPE: new c(3,"Received non-arraybuffer from socket."),
        CONNECT_TIMEOUT: new c(4,"Connect timed out"),
        CONNACK_FAILURE: new c(5,"Connection failure due to connack"),
        PING_TIMEOUT: new c(6,"Ping timeout"),
        APP_DISCONNECT: new c(7,"Disconnect initiated by app"),
        SERVER_DISCONNECT: new c(8,"Disconnect message sent my server"),
        SOCKET_CLOSE: new c(9,"Socket connection closed")
    };
    d = function() {
        function a(a) {
            this.$3 = a,
            this.$2 = {
                userName: "",
                mqttVersion: 3,
                keepAliveInterval: 10,
                ignoreSubProtocol: !1,
                onConnectSuccess: function() {},
                onConnectFailure: function(a) {},
                onConnection: function() {},
                onConnectionError: function(a) {},
                onConnectionLost: function(a) {},
                onMessageArrived: function(a, b, c) {},
                onMessageDelivered: function(a, b) {}
            },
            this.$1 = "mqttwsclient",
            this.$4 = 0,
            this.$5 = !1,
            this.$9 = i.getLoggerInstance()
        }
        var b = a.prototype;
        b.connect = function(a) {
            var b = this;
            if (this.$5)
                throw new Error("Invalid state: connect - already connected");
            this.$2 = a;
            this.setConnected(!1);
            this.$7 != null && (i.clearTimeout(this.$7),
            this.$7 = null);
            this.$7 = i.setTimeout(function() {
                b.$9.bumpCounter("protocol.error.connect.timeout"),
                b.$11(q.CONNECT_TIMEOUT)
            }, g * 1e3);
            this.$6 = i.createSocket(this.$3);
            this.$6.binaryType = "arraybuffer";
            this.$6.onopen = function() {
                b.setConnected(!0),
                b.$12(new k.Connect(b.$1,a)),
                a.onConnection()
            }
            ;
            this.$6.onmessage = function(a) {
                a = a.data;
                if (!(a instanceof ArrayBuffer)) {
                    b.$9.bumpCounter("protocol.error.onmessage.type");
                    b.$11(q.INVALID_DATA_TYPE);
                    return
                }
                try {
                    a = new Uint8Array(a);
                    b.$10 != null && (a = o(b.$10, a),
                    b.$9.bumpCounter("protocol.debug.usingMessagesBuffer"),
                    delete b.$10,
                    b.$10 = null);
                    a = m(a);
                    var c = a.messages;
                    b.$10 = a.remaining;
                    for (var a = 0; a < c.length; a++)
                        b.handleMessage(c[a])
                } catch (a) {
                    b.$10 = null,
                    b.$9.logError(a, q.SOCKET_MESSAGE.errorMessage),
                    b.$9.bumpCounter("protocol.error.onmessage.parse"),
                    b.$11(q.SOCKET_MESSAGE)
                }
            }
            ;
            this.$6.onerror = function(a) {
                b.$9.bumpCounter("protocol.error.socket"),
                b.$11(q.SOCKET_ERROR)
            }
            ;
            this.$6.onclose = function(a) {
                b.$9.bumpCounter("protocol.socket.close"),
                b.$11(q.SOCKET_CLOSE)
            }
            ;
            this.$8 != null && this.$8.cancel();
            this.$8 = new p(a.keepAliveInterval,this.$12.bind(this, new k.Ping("PINGREQ")),this.$11.bind(this, q.PING_TIMEOUT))
        }
        ;
        b.$13 = function() {
            this.setConnected(!1),
            this.$8 != null && this.$8.cancel(),
            this.$7 != null && (i.clearTimeout(this.$7),
            this.$7 = null),
            this.$6 != null && (this.$6.onopen = function(a) {}
            ,
            this.$6.onmessage = function(a) {}
            ,
            this.$6.onerror = function(a) {}
            ,
            this.$6.onclose = function(a) {}
            ,
            this.$6.readyState === this.$6.OPEN && this.$6.close(),
            delete this.$6,
            this.$6 = null),
            this.$2.onConnectSuccess = function() {}
            ,
            this.$2.onConnectFailure = function(a) {}
            ,
            this.$2.onConnection = function() {}
            ,
            this.$2.onConnectionError = function(a) {}
            ,
            this.$2.onConnectionLost = function(a) {}
            ,
            this.$2.onMessageArrived = function(a, b, c) {}
            ,
            this.$2.onMessageDelivered = function(a, b) {}
        }
        ;
        b.disconnect = function() {
            if (this.$6 == null || this.$6.readyState !== this.$6.OPEN || !this.$5) {
                this.$13();
                return
            }
            this.$12(new k.Disconnect());
            this.$9.bumpCounter("protocol.debug.disconnect");
            this.$11(q.APP_DISCONNECT)
        }
        ;
        b.isConnected = function() {
            return this.$5
        }
        ;
        b.setConnected = function(a) {
            this.$5 = a
        }
        ;
        b.subscribe = function(a) {
            if (!this.$5) {
                this.$9.bumpCounter("protocol.error.subscribe.notconnected");
                throw new Error("Invalid state: subscribe - not connected")
            }
            this.$9.bumpCounter("protocol.subscribe." + a);
            a = new k.Subscription("SUBSCRIBE",a,0,this.$14());
            this.$12(a)
        }
        ;
        b.unsubscribe = function(a) {
            if (!this.$5) {
                this.$9.bumpCounter("protocol.error.unsubscribe.notconnected");
                throw new Error("Invalid state: unsubscribe - not connected")
            }
            this.$9.bumpCounter("protocol.unsubscribe." + a);
            a = new k.Subscription("UNSUBSCRIBE",a,0,this.$14());
            this.$12(a)
        }
        ;
        b.publish = function(a, b, c) {
            this.$5 || this.$9.bumpCounter("protocol.error.publish.notconnected");
            this.$9.bumpCounter("protocol.publish." + a);
            var d = this.$14();
            a = new k.Publish(a,l(b),c,d);
            this.$12(a);
            return d
        }
        ;
        b.$14 = function() {
            ++this.$4 === h && (this.$4 = 1);
            return this.$4
        }
        ;
        b.$11 = function(a, b) {
            this.$9.bumpCounter("protocol.debug.disconnect.internal");
            var c = this.$5
              , d = this.$2
              , e = d.onConnectionLost
              , f = d.onConnectFailure;
            this.setConnected(!1);
            this.$13();
            c ? i.scheduleCallback(function() {
                e(a)
            }) : i.scheduleCallback(function() {
                f(new n(a,b != null ? b : -1))
            })
        }
        ;
        b.$12 = function(a) {
            var b = this.$6;
            if (b == null)
                return;
            if (b.readyState != b.OPEN)
                return;
            b.send(a.encode())
        }
        ;
        b.handleMessage = function(a) {
            var b = this;
            switch (a.messageType) {
            case j.CONNACK:
                this.$7 != null && (i.clearTimeout(this.$7),
                this.$7 = null);
                if (a instanceof k.ConnAck) {
                    var c = a;
                    if (c.returnCode !== 0) {
                        this.$9.bumpCounter("protocol.error.connack.invalidreturncode");
                        this.setConnected(!1);
                        this.$11(q.CONNACK_FAILURE, c.returnCode);
                        return
                    }
                    i.scheduleCallback(function() {
                        b.$2.onConnectSuccess()
                    });
                    this.$8 != null && this.$8.reset()
                }
                break;
            case j.PUBLISH:
                if (a instanceof k.Publish) {
                    var d = a;
                    i.scheduleCallback(function() {
                        b.$2.onMessageArrived(d.topic, d.payloadMessage.payloadString, d.qos)
                    });
                    c = d.messageIdentifier;
                    this.$9.bumpCounter("protocol.publish.received");
                    if (d.qos === 1 && c != null) {
                        c = new k.PubAckUnsubAck("PUBACK",c);
                        this.$12(c)
                    }
                }
                break;
            case j.PUBACK:
                if (a instanceof k.PubAckUnsubAck) {
                    c = a;
                    var e = c.messageIdentifier;
                    this.$9.bumpCounter("protocol.puback.received");
                    i.scheduleCallback(function() {
                        b.$2.onMessageDelivered("", e)
                    })
                }
                break;
            case j.PINGRESP:
                this.$8 != null && this.$8.reset();
                break;
            case j.DISCONNECT:
                this.$11(q.SERVER_DISCONNECT);
                break;
            case j.SUBACK:
                this.$9.bumpCounter("protocol.suback.received");
                break;
            case j.UNSUBACK:
                this.$9.bumpCounter("protocol.unsuback.received");
                break;
            default:
                this.$9.logError(new Error("MqttProtocolClient: Received unhandled message type: " + a.messageType), "Received unhandled message type");
                this.$9.bumpCounter("protocol.error.handlemessage.unsupportedtype");
                break
            }
        }
        ;
        return a
    }();
    e.exports = d
}
), null);
__d("MqttUserName", ["gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d, e, f, g, h) {
            h === void 0 && (h = null),
            this.$1 = a,
            this.$2 = c,
            this.$3 = d,
            this.$4 = e,
            this.$5 = f,
            this.$6 = g,
            this.$7 = b("gkx")("1166607") ? !1 : typeof document === "object" && document && document.hasFocus && document.hasFocus(),
            this.$8 = h
        }
        var c = a.prototype;
        c.gen = function(a, c, d, e) {
            e === void 0 && (e = []);
            var f = b("gkx")("1166607") ? !1 : this.$7;
            a = {
                u: this.$1,
                s: a,
                cp: this.$3,
                ecp: this.$2,
                chat_on: this.$6,
                fg: f,
                d: this.$4,
                ct: "websocket",
                mqtt_sid: "",
                aid: this.$5,
                st: c,
                pm: d,
                dc: "",
                no_auto_fg: !0,
                gas: this.$8,
                pack: e
            };
            return JSON.stringify(a)
        }
        ;
        c.setForegroundState = function(a) {
            this.$7 = a
        }
        ;
        c.setChatVisibility = function(a) {
            this.$6 = a
        }
        ;
        c.getEndpointCapabilities = function() {
            return this.$2
        }
        ;
        c.setEndpointCapabilities = function(a) {
            this.$2 = a
        }
        ;
        c.getIsGuestAuthStringPresent = function() {
            return this.$8 !== null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttConnection", ["Promise", "MqttConnectionHookCollection", "MqttEnv", "MqttProtocolClient", "MqttPublishListener", "MqttTypes", "MqttUserName", "MqttUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    b("MqttEnv").MqttGkNames;
    var h = b("MqttPublishListener").MqttPublishEvent;
    b("MqttTypes").ConnectFailure;
    var i = b("MqttTypes").MqttChannelError;
    b("MqttTypes").MqttError;
    var j = 10
      , k = "publish"
      , l = "subscribe"
      , m = "unsubscribe"
      , n = function(a) {}
      , o = 18e4
      , p = 5 * 1e3
      , q = 15
      , r = 21;
    a = function() {
        function a() {
            this.$8 = !1;
            this.$10 = g.getLoggerInstance();
            this.$11 = "Disconnected";
            this.$14 = new Set();
            this.$15 = new Map();
            this.$18 = 0;
            this.$19 = 0;
            this.$12 = 0;
            this.$13 = 0;
            this.$8 = !1;
            this.$5 = "";
            this.$6 = new (b("MqttUserName"))("",0,1,"",0,!0);
            this.$9 = 0;
            this.$7 = null;
            var a = function() {};
            this.$1 = a;
            this.$2 = a;
            this.$3 = a;
            this.$16 = !1;
            this.$17 = !1;
            this.$20 = new (b("MqttConnectionHookCollection"))();
            this.$4 = function() {
                return []
            }
        }
        var c = a.prototype;
        c.run = function(a) {
            var b = this
              , c = a.onStateChange
              , d = a.onJSError
              , e = a.onMessageReceived
              , f = a.endpoint
              , g = a.mqttUserName
              , h = a.subscribedTopics;
            a = a.extraConnectMessageProvider;
            if (this.$8) {
                this.$10.debugTrace("run", "Run called while in running state.");
                return
            }
            this.$1 = c;
            this.$3 = e;
            this.$5 = f;
            this.$6 = g;
            this.$8 = !0;
            this.$12 = 0;
            this.$2 = d || n;
            h && h.forEach(function(a) {
                return b.$14.add(a)
            });
            this.$4 = a;
            this.$21();
            this.$22()
        }
        ;
        c.shutdown = function() {
            this.$23(),
            this.$24("shutdown"),
            this.$8 = !1,
            this.$10.debugTrace("shutdown", "Shutdown")
        }
        ;
        c.subscribe = function(a) {
            this.$14.add(a);
            this.ensureConnected(l) && this.$25(a);
            return !0
        }
        ;
        c.publish = function(a, c, d, e) {
            var f = {
                resolve: function() {},
                reject: function(a) {}
            };
            e != null && (f.listener = e);
            var g = new (b("Promise"))(function(a, b) {
                f.resolve = a,
                f.reject = b
            }
            )
              , i = this.ensureConnected(k);
            !i ? (e == null ? void 0 : e.onEvent(h.NOT_CONNECTED),
            f.reject(new Error("Client disconnected"))) : this.$26(a, c, d, f);
            return g
        }
        ;
        c.unsubscribe = function(a) {
            this.$14["delete"](a);
            this.ensureConnected(m) && this.$27(a);
            return !0
        }
        ;
        c.addHook = function(a) {
            this.$20.addHook(a)
        }
        ;
        c.removeHook = function(a) {
            this.$20.removeHook(a)
        }
        ;
        c.isRunning = function() {
            return this.$8
        }
        ;
        c.getSessionId = function() {
            return this.$9
        }
        ;
        c.hasFatal = function() {
            return this.$16
        }
        ;
        c.hasConnectSuccess = function() {
            return this.$17
        }
        ;
        c.canPublish = function() {
            return this.ensureConnected("canPublish")
        }
        ;
        c.ensureConnected = function(a) {
            return !this.$8 || this.$7 == null || !this.$7.isConnected() ? !1 : !0
        }
        ;
        c.connectionState = function() {
            return this.$11
        }
        ;
        c.mqttStateFromConnectionState = function(a) {
            switch (a) {
            case "Connecting":
            case "TransportConnected":
                return "Connecting";
            case "Connected":
                return "Connected";
            case "Disconnected":
                return "Disconnected"
            }
            throw new Error("Unknown state " + a)
        }
        ;
        c.testOnlyGetSubscribedTopics = function() {
            return this.$14
        }
        ;
        c.$21 = function() {
            var a = this;
            typeof window !== "undefined" && window.addEventListener("unload", function(b) {
                return a.$28(b)
            })
        }
        ;
        c.$28 = function(a) {
            this.publish("/browser_close", "{}", 0)
        }
        ;
        c.$23 = function() {
            this.$8 && this.$7 != null && (this.$29("Disconnected"),
            this.$7 != null && this.$7.disconnect(),
            this.$7 = null)
        }
        ;
        c.$29 = function(a) {
            a !== this.$11 && (this.$11 = a,
            this.$1(a))
        }
        ;
        c.$22 = function() {
            var a = this;
            if (!this.$8)
                return;
            this.$29("Connecting");
            var c = Date.now();
            this.$9 = b("MqttUtils").generateSessionId();
            var d = Array.from(this.$14)
              , e = b("MqttUtils").endpointWithSessionId(this.$5, this.$9);
            try {
                this.$7 = new (b("MqttProtocolClient"))(e);
                var f = this.$30()
                  , g = f.map(function(a) {
                    return a.topic
                });
                e = this.$6.gen(this.$9, d, f);
                this.$7 != null && (this.$7.connect({
                    userName: e,
                    mqttVersion: 3,
                    keepAliveInterval: j,
                    ignoreSubProtocol: !0,
                    onConnectFailure: function(b) {
                        return a.$31(b, c, d, g)
                    },
                    onConnectSuccess: function() {
                        return a.$32(c, d, g)
                    },
                    onConnection: function() {
                        return a.$33(f, d)
                    },
                    onConnectionError: function(b) {
                        return a.$34(b)
                    },
                    onConnectionLost: function(b) {
                        return a.$35(b)
                    },
                    onMessageArrived: function(b, c, d) {
                        return a.$36(b, c, d)
                    },
                    onMessageDelivered: function(b, c) {
                        return a.$37(b, c)
                    }
                }),
                this.$10.bumpCounter("protocol.connectattempt"),
                this.$20.onConnectAttempt(),
                this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.connectattempt"))
            } catch (a) {
                this.$10.bumpCounter("js_error_in_init_exception"),
                this.$29("Disconnected"),
                this.$38(!1, !1, c, d, [], 14, a.message),
                a && this.$10.logErrorWarn(a, "ws_js_error"),
                this.$20.onWSFatal(),
                this.$39(new i(!1,"ws_js_error",a), "client_init")
            }
        }
        ;
        c.$30 = function() {
            var a = this.$4()
              , b = 65536;
            a = a.map(function(a) {
                a.messageId = b--;
                return a
            });
            return a
        }
        ;
        c.$25 = function(a) {
            try {
                if (this.$7 != null) {
                    this.$7.subscribe(a);
                    this.$10.debugTrace("_doSubscribe", "Subscribing to " + a);
                    this.$20.onSubscribe(a);
                    this.$10.bumpCounter("protocol.subscribe");
                    return !0
                }
            } catch (b) {
                this.$10.logError(b, "Exception subscribing"),
                this.$10.bumpCounter("subscribe_exception." + a),
                this.$10.bumpCounter("protocol.subscribe.error")
            }
            return !1
        }
        ;
        c.$27 = function(a) {
            try {
                if (this.$7 != null) {
                    this.$7.unsubscribe(a);
                    this.$10.debugTrace("_doUnsubscribe", "Unsubscribing to " + a);
                    this.$20.onUnsubscribe(a);
                    this.$10.bumpCounter("protocol.unsubscribe");
                    return !0
                }
            } catch (b) {
                this.$10.logError(b, "Exception unsubscribing"),
                this.$10.bumpCounter("unsubscribe_exception." + a),
                this.$10.bumpCounter("protocol.unsubscribe.error")
            }
            return !1
        }
        ;
        c.$26 = function(a, b, c, d) {
            if (this.$7 != null)
                try {
                    b = this.$7.publish(a, b, c);
                    this.$10.bumpCounter("protocol.publish");
                    var e = b != null ? b : "null";
                    this.$10.debugTrace("_doPublish", "publish " + a + " with messageId:" + e + " qos:" + c);
                    this.$20.onPublish(a);
                    (e = d.listener) == null ? void 0 : e.onEvent(h.SENT);
                    b != null ? this.$15.set(b, d) : d.resolve();
                    return !0
                } catch (b) {
                    this.$10.logError(b, "Exception publishing");
                    this.$10.bumpCounter("publish_exception." + a);
                    d.reject(b);
                    this.$10.bumpCounter("protocol.publish.error");
                    return !1
                }
            else
                return !1
        }
        ;
        c.$40 = function(a) {
            var b = this;
            a === void 0 && (a = null);
            if (!this.$8)
                return;
            this.$23();
            this.$24("reconnect");
            this.$41();
            this.$9 = -1;
            this.$13 = 0;
            a = a != null ? a : Math.pow(2, Math.min(this.$12, 6)) * (1e3 + g.random() * 200);
            this.$10.debugTrace("_scheduleReconnect", "Reconnect in " + a + " ms");
            g.setTimeout(function() {
                b.$22()
            }, a);
            this.$12 += 1
        }
        ;
        c.$41 = function() {
            var a = Date.now() - this.$13
              , b = this.$13 !== 0 && a > p
              , c = this.$12 > q;
            (b || c) && (this.$12 = 0);
            this.$13 !== 0 && a <= p && this.$10.bumpCounter("short_lived_session");
            c && this.$10.bumpCounter("connection_attempt_limit")
        }
        ;
        c.$38 = function(a, b, c, d, e, f, g) {
            a === !0 ? this.$19++ : this.$18++,
            this.$10.eventLogConnect({
                sessionID: this.$9,
                connectionStatus: a,
                connectionState: this.mqttStateFromConnectionState(this.$11),
                ackReceived: b,
                duration: Date.now() - c,
                hostname: this.$5,
                attemptNumber: this.$12,
                failTotal: this.$18,
                successTotal: this.$19,
                subscribedTopics: d,
                publishes: e,
                errorCode: f,
                errorMessage: g
            })
        }
        ;
        c.$31 = function(a, b, c, d) {
            var e = a.mqttError
              , f = e.errorMessage;
            this.$10.debugTrace("connect", "Connect failed " + f);
            this.$10.bumpCounter("protocol.onconnectfailure");
            this.$20.onConnectFailure();
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectfailure");
            this.$38(!1, a.connAck != null, b, c, d, e.errorCode, f);
            if (a.connAck != null) {
                this.$10.bumpCounter("protocol.connect_failure." + a.connAck);
                if (a.connAck === r) {
                    this.$40(o);
                    return
                }
            }
            this.$40()
        }
        ;
        c.$33 = function(a, b) {
            var c = this;
            this.$10.bumpCounter("protocol.onconnection");
            this.$10.debugTrace("Connect", "Socket established");
            this.$20.onConnected();
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnection");
            b.forEach(function(a) {
                c.$20.onSubscribe(a)
            });
            a.forEach(function(a) {
                c.$20.onPublish(a.topic)
            });
            this.$29("TransportConnected")
        }
        ;
        c.$32 = function(a, b, c) {
            this.$10.bumpCounter("protocol.onconnectsuccess"),
            this.$10.debugTrace("connect", "Connect success"),
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectsucess"),
            this.$20.onConnectSuccess(),
            this.$17 = !0,
            this.$38(!0, !0, a, b, c),
            this.$29("Connected"),
            this.$42(b),
            this.$13 = Date.now()
        }
        ;
        c.$35 = function(a) {
            this.$10.bumpCounter("protocol.onconnectionlost"),
            a.errorCode && this.$10.eventLogDisconnect({
                sessionID: this.$9,
                errorCode: a.errorCode,
                errorMessage: a.errorMessage,
                duration: Date.now() - this.$13
            }),
            this.$10.debugTrace("connect", "connection lost"),
            this.$20.onConnectionLost(),
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onconnectionlost"),
            this.$40()
        }
        ;
        c.$34 = function(a) {}
        ;
        c.$36 = function(a, b, c) {
            this.$10.bumpCounter("protocol.onmessagearrived");
            this.$6.getIsGuestAuthStringPresent() && this.$10.bumpCounter("guestAuthentication.onmessagearrived");
            this.$10.debugTrace("onMessageArrived", "Message received on " + a);
            this.$20.onMessage(a);
            try {
                this.$3(a, b, c)
            } catch (b) {
                this.$10.logError(b, "Listener threw error"),
                this.$10.bumpCounter("listener_error." + a)
            }
        }
        ;
        c.$37 = function(a, b) {
            this.$10.bumpCounter("protocol.onmessagedelivered");
            a = b != null ? b : "null";
            this.$10.debugTrace("onMessageDelivered", "Delivered Message {ID: " + a + "}");
            if (b == null)
                return;
            a = this.$15.get(b);
            if (a == null) {
                this.$10.bumpCounter("protocol.message_with_unknown_id");
                return
            }
            this.$15["delete"](b);
            (b = a.listener) == null ? void 0 : b.onEvent(h.ACKED);
            a.resolve()
        }
        ;
        c.$24 = function(a) {
            this.$10.bumpCounter("protocol.fail_all_unacked_publishes." + a),
            this.$15.forEach(function(b, c, d) {
                (c = b.listener) == null ? void 0 : c.onEvent(h.NOT_ACKED);
                b.reject(new Error(a))
            }),
            this.$15.clear()
        }
        ;
        c.$42 = function(a) {
            var b = this
              , c = new Set(a);
            c.forEach(function(a) {
                b.$14.has(a) || b.unsubscribe(a)
            });
            a = new Set(this.$14);
            a.forEach(function(a) {
                c.has(a) || b.subscribe(a)
            })
        }
        ;
        c.$39 = function(a, b) {
            try {
                this.$10.bumpCounter("js_error_in_init");
                this.$10.bumpCounter(b + ".error");
                this.$16 = !0;
                var c = a ? a.message : "error";
                this.$10.debugTrace("onError", b + ": " + c);
                this.$2(a)
            } catch (a) {
                this.$10.bumpCounter("js_error_in_error_logging"),
                this.$10.logError(a, "JS error while trying to log previous error")
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("isFastRefreshEnabledForCurrentDomain", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        return !1
    }
}
), null);
__d("MqttChannel", ["Promise", "requireDeferred", "ChannelClientID", "IrisSubscribeChecker", "MqttAnalyticsHook", "MqttConnection", "MqttEnv", "MqttPublishListener", "MqttPublishTimeoutConfig", "MqttUserName", "MqttUtils", "isFastRefreshEnabledForCurrentDomain", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = b("MqttEnv").MqttGkNames
      , i = b("MqttPublishListener").MqttPublishEvent
      , j = b("MqttPublishTimeoutConfig").mqttPublishTimeoutMs || 60 * 1e3;
    a = function() {
        function a(a) {
            var c = this
              , d = a.endpoint
              , e = a.pollingEndpoint
              , f = a.userFbid
              , h = a.appId
              , i = a.initialSubscribedTopics
              , j = a.capabilities
              , k = a.clientCapabilities
              , l = a.chatVisibility;
            l = l === void 0 ? !0 : l;
            a = a.guestAuthString;
            a = a === void 0 ? null : a;
            this.$10 = g.getLoggerInstance();
            this.$10.setAppId(h);
            this.$11 = new (b("MqttUserName"))(f,j,k,b("ChannelClientID").getID(),h,l,a);
            this.$1 = d;
            this.$2 = e;
            this.$5 = "Disconnected";
            this.$7 = "LPInactive";
            this.$6 = "Disconnected";
            this.$3 = [];
            this.$4 = new Set();
            this.$8 = new Map();
            this.$9 = new (b("MqttConnection"))();
            this.$12 = null;
            this.$15 = new (b("MqttAnalyticsHook"))();
            this.$14 = new Map();
            this.$13 = [];
            if (!g.isUserLoggedInNow() && !b("isFastRefreshEnabledForCurrentDomain")() && (a == null || a == "")) {
                this.$10.bumpCounter("logged_out_init");
                return
            }
            this.$9.addHook(this.$15);
            this.$9.addHook(new (b("IrisSubscribeChecker"))(function() {
                return c.$4.size > 0
            }
            ));
            this.$16(i);
            this.$17();
            this.$10.logIfLoggedOut()
        }
        var c = a.prototype;
        c.$16 = function(a) {
            var c = this;
            if (this.$9.isRunning()) {
                this.$18("run", "Connection started calling run again");
                return
            }
            if (g.genGk(h.mqtt_ws_polling_enabled)) {
                var d = g.killswitch("MQTT_WS_FORCE_LONG_POLLING");
                if (d) {
                    this.$18("MqttChannel", "Websocket disabled, will do long polling only");
                    return
                } else if (!b("MqttUtils").hasWSSupport()) {
                    this.$18("MqttChannel", "Websocket Unavailable, will do long polling only");
                    this.$10.bumpCounter("ws_unavailable_polling");
                    return
                }
            }
            this.$9.run({
                onStateChange: function(a) {
                    c.$19(a)
                },
                onJSError: function(a) {
                    c.$20(a)
                },
                onMessageReceived: function(a, b, d) {
                    c.$21(a, b, d)
                },
                endpoint: this.$1,
                mqttUserName: this.$11,
                subscribedTopics: a,
                extraConnectMessageProvider: function() {
                    return c.$22()
                }
            })
        }
        ;
        c.shutdown = function() {
            this.$9 && this.$9.shutdown()
        }
        ;
        c.publish = function(a, c, d) {
            d === void 0 && (d = {
                qos: 1,
                skipBuffer: !1
            });
            var e;
            d.qos === 0 ? e = this.$23(a, c, d.listener) : e = this.$24(a, c, d);
            b("MqttUtils").promiseDone(e, function() {}, function(a) {
                (a = d.listener) == null ? void 0 : a.onEvent(i.PUBLISH_ERROR)
            });
            return e
        }
        ;
        c.$23 = function(a, b, c) {
            return this.$25(a, b, 0, c)
        }
        ;
        c.$24 = function(a, c, d) {
            var e = {
                resolve: function() {},
                reject: function(a) {}
            }
              , f = new (b("Promise"))(function(a, b) {
                e.resolve = a,
                e.reject = b
            }
            )
              , h = g.random();
            a = {
                topic: a,
                payload: c,
                options: d,
                ack: e,
                publishToken: h,
                timeoutId: null
            };
            if (d.skipBuffer)
                if (this.$9.connectionState() === "Connecting") {
                    this.$13.push(a);
                    (c = d.listener) == null ? void 0 : c.onEvent(i.QUEUED)
                } else
                    this.$26(a);
            else {
                a.timeoutId = this.$27(h);
                this.$14.set(h, a);
                (c = d.listener) == null ? void 0 : c.onEvent(i.QUEUED);
                this.$28(a)
            }
            return f
        }
        ;
        c.$26 = function(a) {
            b("MqttUtils").promiseDone(this.$25(a.topic, a.payload, a.options.qos, a.options.listener), function() {
                a.ack.resolve()
            }, function(b) {
                a.ack.reject(b)
            })
        }
        ;
        c.$28 = function(a) {
            var c = this;
            b("MqttUtils").promiseDone(this.$25(a.topic, a.payload, a.options.qos, a.options.listener), function() {
                return c.$29(a)
            }, function(a) {})
        }
        ;
        c.$25 = function(a, c, d, e) {
            var f = this, g, h, j = this.getConnectionState(), k = Date.now();
            !this.$9.canPublish() && this.$12 && this.$12.canPublish() ? (g = this.$12.publish(a, c, d),
            h = "lp",
            e != null && (g = g.then(function() {
                return e.onEvent(i.SENT)
            })),
            this.$10.bumpCounter("try_publish_lp")) : (g = this.$9.publish(a, c, d, e),
            h = "ws",
            this.$10.bumpCounter("try_publish_ws"));
            b("promiseDone")(g, function() {
                f.$10.eventLogOutgoingPublish({
                    sessionID: f.$9.getSessionId(),
                    topic: a,
                    qos: d,
                    payloadSizeBytes: c.length * 2,
                    success: !0,
                    protocol: h,
                    errorMessage: null,
                    connectionState: j,
                    startTime: k
                })
            }, function(b) {
                f.$10.eventLogOutgoingPublish({
                    sessionID: f.$9.getSessionId(),
                    topic: a,
                    qos: d,
                    payloadSizeBytes: c.length * 2,
                    success: !1,
                    protocol: h,
                    errorMessage: b.toString(),
                    connectionState: j,
                    startTime: k
                })
            });
            return g
        }
        ;
        c.subscribe = function(a, b) {
            var c = this;
            this.$9.subscribe(a);
            var d = this.$8.get(a);
            !d ? (d = [b],
            this.$8.set(a, d)) : d.push(b);
            return function() {
                var d = c.$8.get(a) || [];
                d = d.filter(function(a) {
                    return a !== b
                });
                c.$8.set(a, d);
                d.length === 0 && c.unsubscribeAll(a)
            }
        }
        ;
        c.subscribeChannelEvents = function(a) {
            this.$3.push(a)
        }
        ;
        c.unsubscribeChannelEvents = function(a) {
            a = this.$3.indexOf(a);
            a > -1 && this.$3.splice(a, 1)
        }
        ;
        c.registerExtraConnectPayloadProvider = function(a) {
            var b = this;
            this.$18("MqttChannel", "registerExtraConnectPayloadProvider called");
            this.$4.add(a);
            if (this.$9.isRunning()) {
                a = a.getPublishMessages();
                a.forEach(function(a) {
                    b.publish(a.topic, a.payload, {
                        qos: a.qos,
                        skipBuffer: !0
                    })
                })
            }
        }
        ;
        c.unregisterExtraConnectPayloadProvider = function(a) {
            this.$4["delete"](a)
        }
        ;
        c.unsubscribeAll = function(a) {
            this.$9.unsubscribe(a),
            this.$8["delete"](a)
        }
        ;
        c.getConnectionState = function() {
            return this.$5
        }
        ;
        c.getLongPollingStatus = function() {
            return this.$7
        }
        ;
        c.getEndpoint = function() {
            return this.$1
        }
        ;
        c.addHook = function(a) {
            this.$9.addHook(a)
        }
        ;
        c.removeHook = function(a) {
            this.$9.removeHook(a)
        }
        ;
        c.testOnlyMessageReceived = function(a, b) {
            this.$21(a, b, -1)
        }
        ;
        c.$30 = function(a) {
            var b = this.$14.get(a);
            b != null && b.timeoutId != null && g.clearTimeout(b.timeoutId);
            this.$14["delete"](a)
        }
        ;
        c.$27 = function(a) {
            var b = this;
            a = g.setTimeout(function(a) {
                var c = b.$14.get(a);
                if (!c)
                    return;
                var d = c.topic;
                b.$10.bumpCounter("publish_timeout." + d);
                b.$10.debugTrace("publish_timeout", "Timeout publishing topic: " + d + " publishToken: " + a);
                b.$10.eventLogPublishTimeout({
                    topic: d
                });
                b.$30(a);
                c.ack.reject(new Error("Publish Timed Out"))
            }, j, a);
            return a
        }
        ;
        c.$29 = function(a) {
            var b = a.publishToken
              , c = this.$14.get(b);
            if (!c)
                return;
            this.$30(b);
            a.ack.resolve();
            this.$10.debugTrace("publish_success", "Topic: " + a.topic + " publishToken: " + a.publishToken);
            this.$10.bumpCounter("publish_success." + a.topic)
        }
        ;
        c.$21 = function(a, b, c) {
            var d = this.$8.get(a);
            this.$10.eventLogIncomingPublish({
                sessionID: this.$9.getSessionId(),
                topic: a,
                connectionState: this.getConnectionState(),
                qos: c,
                payloadSizeBytes: b.length * 2
            });
            if (!d)
                this.$10.debugTrace("_onMessageReceived", a + " being dropped, no listeners");
            else
                for (var c = d, a = Array.isArray(c), d = 0, c = a ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var e;
                    if (a) {
                        if (d >= c.length)
                            break;
                        e = c[d++]
                    } else {
                        d = c.next();
                        if (d.done)
                            break;
                        e = d.value
                    }
                    e = e;
                    try {
                        e(b)
                    } catch (a) {
                        this.$10.logError(a, "Listener exception"),
                        this.$10.bumpCounter("listener_error")
                    }
                }
        }
        ;
        c.$20 = function(a) {
            if (g.genGk(h.mqtt_ws_polling_enabled)) {
                a.isRecoverable ? this.$10.bumpCounter("recoverable_error_skipped") : this.$10.bumpCounter("unrecoverable_error_skipped");
                return
            }
            a.isRecoverable ? this.$10.bumpCounter("recoverable_error_not_skipped") : this.$10.bumpCounter("unrecoverable_error_not_skipped");
            this.$31(a)
        }
        ;
        c.$32 = function(a) {
            this.$31(a)
        }
        ;
        c.$31 = function(a) {
            for (var b = this.$3, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
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
                e.onJSError && e.onJSError(a)
            }
        }
        ;
        c.$33 = function() {
            var a = this;
            this.$13.forEach(function(b) {
                a.$26(b)
            });
            this.$13 = [];
            this.$14.forEach(function(b, c, d) {
                a.$28(b)
            })
        }
        ;
        c.$19 = function(a) {
            a === "Connecting" ? (this.$13.forEach(function(a) {
                a.ack.reject(new Error("Client Reconnecting"))
            }),
            this.$13 = []) : a === "TransportConnected" && this.$33(),
            this.$18("_changeState", "Connection state = " + a),
            this.$34(a, this.$7)
        }
        ;
        c.$35 = function(a, b) {
            this.$12 && this.$12.canPublish() && this.$33(),
            this.$18("_changeLPStatus", "LP status = " + a + ", LP Request status = " + b),
            this.$34(this.$6, a)
        }
        ;
        c.$34 = function(a, b) {
            var c = this.$9.mqttStateFromConnectionState(a);
            this.$12 && this.$12.canPublish() && (c = "Connected");
            this.$6 = a;
            (c !== this.$5 || b != this.$7) && (this.$5 = c,
            this.$7 = b,
            this.$36(c))
        }
        ;
        c.$36 = function(a) {
            for (var b = this.$3, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
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
                e.onMQTTStateChanged(a)
            }
        }
        ;
        c.$22 = function() {
            var a = this
              , b = [];
            this.$4.forEach(function(c) {
                try {
                    c = c.getPublishMessages();
                    Array.prototype.push.apply(b, c)
                } catch (b) {
                    a.$10.logError(b, "ConnectPayload provider exception"),
                    a.$10.bumpCounter("connectPayloadProvider_error")
                }
            });
            return b
        }
        ;
        c.$17 = function() {
            var a = this;
            g.genGk(h.mqtt_ws_polling_enabled) && this.$2 && this.$2 != "" && b("requireDeferred")("MqttLongPollingRunner").onReady(function(b) {
                b = new b(a.$2,a.$11,a.$9.hasFatal(),a.$9.hasConnectSuccess(),function(b, c, d) {
                    return a.$21(b, c, d)
                }
                ,function() {
                    return Array.from(a.$8.keys())
                }
                ,function() {
                    return a.$22()
                }
                ,function(b) {
                    a.$32(b)
                }
                ,function(b, c) {
                    a.$35(b, c)
                }
                );
                b.start();
                a.$9.addHook(b);
                b.addHook(a.$15);
                a.$12 = b;
                a.$10.debugTrace("MqttChannel", "longPollingRunner loaded")
            })
        }
        ;
        c.$18 = function(a, b) {
            this.$10.debugTrace(a, "Mqtt channel: " + b)
        }
        ;
        c.setForegroundState = function(a) {
            this.$11 && this.$11.setForegroundState(a)
        }
        ;
        c.setChatVisibility = function(a) {
            this.$11 && this.$11.setChatVisibility(a)
        }
        ;
        c.getEndpointCapabilities = function() {
            return this.$11.getEndpointCapabilities()
        }
        ;
        c.setEndpointCapabilities = function(a) {
            this.$11.setEndpointCapabilities(a)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FantailLogger", ["FantailConfig"], (function(a, b, c, d, e, f) {
    var g = b("FantailConfig").FantailLogQueue;
    a = {
        debug: function(a, b) {
            var c;
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                e[f - 2] = arguments[f];
            g && (c = g.get(a)).debug.apply(c, [b].concat(e))
        },
        info: function(a, b) {
            var c;
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                e[f - 2] = arguments[f];
            g && (c = g.get(a)).info.apply(c, [b].concat(e))
        },
        warn: function(a, b) {
            var c;
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                e[f - 2] = arguments[f];
            g && (c = g.get(a)).warn.apply(c, [b].concat(e))
        },
        error: function(a, b) {
            var c;
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++)
                e[f - 2] = arguments[f];
            g && (c = g.get(a)).error.apply(c, [b].concat(e))
        }
    };
    e.exports = a
}
), null);
__d("MqttUnifiedClientConnectFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744057");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_connect", a);
    e.exports = c
}
), null);
__d("MqttUnifiedClientIncomingPublishFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744059");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_incoming_publish", a);
    e.exports = c
}
), null);
__d("MqttUnifiedClientOutgoingPublishFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744060");
    c = b("FalcoLoggerInternal").create("mqtt_unified_client_outgoing_publish", a);
    e.exports = c
}
), null);
__d("MqttWsClientTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:MqttWsClientLoggerConfig")
}
), null);
__d("MqttLogger", ["BanzaiODS", "ChannelClientID", "FantailLogger", "FBLogger", "Log", "LogHistory", "MqttEnv", "MqttUnifiedClientConnectFalcoEvent", "MqttUnifiedClientDisconnectFalcoEvent", "MqttUnifiedClientIncomingPublishFalcoEvent", "MqttUnifiedClientOutgoingPublishFalcoEvent", "MqttUtils", "MqttWsClientTypedLoggerLite", "Random", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = b("MqttWsClientTypedLoggerLite").log
      , i = b("Random").coinflip
      , j = "mqtt_client"
      , k = 100
      , l = 5e3
      , m = null
      , n = {
        CONNECT: "mqtt_client_connect",
        DISCONNECT: "mqtt_client_disconnect",
        PUBLISH: "mqtt_client_publish",
        CLIENT_ERROR: "mqtt_client_error",
        PUBLISH_TIMEOUT: "mqtt_qos1_publish_timeout",
        SOCKET_DISCONNECT: "mqtt_protocol_error"
    }
      , o = {
        CONNECT: "connect",
        DISCONNECT: "disconnect",
        OUTGOING_PUBLISH: "outgoing_publish",
        INCOMING_PUBLISH: "incoming_publish"
    };
    a = function() {
        a.getInstance = function() {
            m || (m = new a());
            return m
        }
        ;
        function a() {
            this.$1 = b("LogHistory").getInstance(j),
            this.$2 = 0,
            this.$3 = b("gkx")("778292"),
            this.$4 = Date.now(),
            this.$5 = b("ChannelClientID").getID()
        }
        var c = a.prototype;
        c.setAppId = function(a) {
            this.$2 === 0 && (this.$2 = a)
        }
        ;
        c.eventLogConnect = function(a) {
            var c = a.sessionID
              , d = a.connectionStatus
              , e = a.connectionState
              , f = a.ackReceived
              , h = a.duration
              , i = a.hostname
              , j = a.attemptNumber;
            a.failTotal;
            a.successTotal;
            var k = a.subscribedTopics
              , l = a.publishes
              , m = a.errorCode;
            a = a.errorMessage;
            var p = d ? "success" : "failed";
            this.bumpCounter(n.CONNECT + "." + p);
            p = {
                device_id: this.$5,
                session_id: c,
                logged_in: g.isUserLoggedInNow(),
                href: window.location.hostname,
                connection_status: d,
                duration: h,
                hostname: i,
                feature_availability: b("MqttUtils").getWSAvailability(),
                attempt_number: j,
                subscribed_topics: k,
                publishes: l,
                error_code: m,
                error_message: a
            };
            var q = {
                event_type: o.CONNECT,
                acked: f,
                connection_state: e,
                client_type: "WEBSOCKET",
                duration: h,
                error: a,
                session_id: c
            };
            this.$6(n.CONNECT, p);
            this.$7(function() {
                b("MqttUnifiedClientConnectFalcoEvent").log(function() {
                    return q
                })
            })
        }
        ;
        c.eventLogPull = function(a) {
            var b = a.pullEventName
              , c = a.sessionID
              , d = a.status
              , e = a.duration
              , f = a.hostname;
            a = a.errorMessage;
            c = {
                device_id: this.$5,
                session_id: c,
                logged_in: g.isUserLoggedInNow(),
                href: window.location.hostname,
                connection_status: d,
                duration: e,
                hostname: f,
                error_message: a
            };
            this.$6(b, c)
        }
        ;
        c.eventLogPullFinish = function(a) {
            var b = a.pullEventName
              , c = a.sessionID
              , d = a.duration
              , e = a.errorMessage
              , f = a.publishReceived;
            a = a.publishSent;
            c = {
                device_id: this.$5,
                session_id: c,
                logged_in: g.isUserLoggedInNow(),
                href: window.location.hostname,
                duration: d,
                error_message: e,
                publish_received: f,
                publish_sent: a
            };
            this.$6(b, c)
        }
        ;
        c.eventLogDisconnect = function(a) {
            var c = a.sessionID
              , d = a.errorCode
              , e = a.errorMessage;
            a = a.duration;
            this.bumpCounter(n.DISCONNECT);
            d = {
                device_id: this.$5,
                session_id: c,
                href: window.location.hostname,
                duration: a,
                error_code: d,
                error_message: e
            };
            var f = {
                event_type: o.DISCONNECT,
                connection_state: "Disconnected",
                client_type: "WEBSOCKET",
                duration: a,
                error: e,
                session_id: c
            };
            this.$6(n.DISCONNECT, d);
            this.$7(function() {
                b("MqttUnifiedClientDisconnectFalcoEvent").log(function() {
                    return f
                })
            })
        }
        ;
        c.eventLogOutgoingPublish = function(a) {
            var c = a.sessionID
              , d = a.topic
              , e = a.qos
              , f = a.payloadSizeBytes
              , g = a.success
              , h = a.protocol
              , j = a.errorMessage
              , k = a.connectionState;
            a = a.startTime;
            this.bumpCounter(n.PUBLISH + "." + d);
            h = {
                device_id: this.$5,
                href: window.location.hostname,
                topic: d,
                qos: e,
                payload_size_bytes: f,
                success: g ? 1 : 0,
                protocol: h,
                error_message: j
            };
            var m = {
                event_type: o.OUTGOING_PUBLISH,
                session_id: c,
                topic: d,
                client_type: "WEBSOCKET",
                connection_state: k,
                qos: e,
                acked: e == 1 ? g : null,
                duration: Date.now() - a,
                error: j,
                payload_size: f
            };
            i(l) && this.$6(n.PUBLISH, h, l);
            this.$7(function() {
                b("MqttUnifiedClientOutgoingPublishFalcoEvent").log(function() {
                    return m
                })
            })
        }
        ;
        c.eventLogIncomingPublish = function(a) {
            var c = a.sessionID
              , d = a.topic
              , e = a.connectionState
              , f = a.qos;
            a = a.payloadSizeBytes;
            var g = {
                event_type: o.INCOMING_PUBLISH,
                session_id: c,
                topic: d,
                client_type: "WEBSOCKET",
                connection_state: e,
                qos: f,
                payload_size: a
            };
            this.$7(function() {
                b("MqttUnifiedClientIncomingPublishFalcoEvent").log(function() {
                    return g
                })
            })
        }
        ;
        c.logError = function(a, c) {
            var d = this;
            g.scheduleLoggingCallback(function() {
                try {
                    b("FBLogger")(j).catching(a).mustfix(c),
                    d.$8(b("FantailLogger").error, c)
                } catch (a) {}
            })
        }
        ;
        c.eventLogPublishTimeout = function(a) {
            a = a.topic;
            a = {
                device_id: this.$5,
                href: window.location.hostname,
                topic: a
            };
            this.$6(n.PUBLISH_TIMEOUT, a)
        }
        ;
        c.eventLogMiscellaneousError = function(a) {
            a = a.errorMessage;
            a = {
                device_id: this.$5,
                logged_in: g.isUserLoggedInNow(),
                href: window.location.hostname,
                error_message: a,
                time_passed: Date.now() - this.$4
            };
            this.$6(n.CLIENT_ERROR, a)
        }
        ;
        c.logIfLoggedOut = function() {
            if (!b("gkx")("1186990") || g.isUserLoggedInNow())
                return;
            var a = {
                logged_in: g.isUserLoggedInNow(),
                href: window.location.href,
                error_message: "Not logged in",
                time_passed: Date.now() - this.$4
            };
            this.$6(n.CLIENT_ERROR, a)
        }
        ;
        c.logErrorWarn = function(a, c) {
            var d = this;
            g.scheduleLoggingCallback(function() {
                try {
                    b("FBLogger")(j).catching(a).warn(c),
                    d.$8(b("FantailLogger").warn, c)
                } catch (a) {}
            })
        }
        ;
        c.logWarn = function(a, c) {
            var d = this;
            g.scheduleLoggingCallback(function() {
                try {
                    d.$1.warn(a, c),
                    d.$8(b("FantailLogger").warn, c)
                } catch (a) {}
            })
        }
        ;
        c.debugTrace = function(a, c) {
            var d = this;
            g.scheduleLoggingCallback(function() {
                try {
                    d.$1.debug(a, c),
                    d.$8(b("FantailLogger").debug, c)
                } catch (a) {}
            })
        }
        ;
        c.bumpCounter = function(a) {
            var c = this;
            if (!i(k))
                return;
            g.scheduleLoggingCallback(function() {
                c.$2 !== 0 && b("BanzaiODS").bumpEntityKey(2966, "mqtt_ws_client", c.$2 + "." + a, k),
                b("BanzaiODS").bumpEntityKey(2966, "mqtt_ws_client", a, k)
            })
        }
        ;
        c.$6 = function(a, c, d) {
            var e = this;
            g.scheduleLoggingCallback(function() {
                c.event_type = a;
                c.app_id = e.$2;
                c.online = e.$9();
                var f = JSON.stringify(c);
                e.$1.log(a, f, {
                    weight: d
                });
                a !== n.DISCONNECT && h(c);
                e.$8(b("FantailLogger").info, f)
            })
        }
        ;
        c.$7 = function(a) {
            b("gkx")("1272991") && g.scheduleLoggingCallback(a)
        }
        ;
        c.$8 = function(a, b) {
            g.scheduleLoggingCallback(function() {})
        }
        ;
        c.$9 = function() {
            return window.navigator && window.navigator.onLine !== void 0 ? window.navigator.onLine : !1
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MqttEnvInitializer", ["CurrentUser", "JSScheduler", "MqttEnv", "MqttLogger", "Random", "WebStorage", "clearTimeout", "gkx", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("MqttEnv").MqttGkNames, i = b("MqttEnv").Env, j = "mqtt:", k = {
        genGk: function(a) {
            switch (a) {
            case h.mqtt_waterfall_log_client_sampling:
                return b("gkx")("832242");
            case h.mqtt_ws_polling_enabled:
                return !0;
            case h.mqtt_lp_use_fetch:
                return b("gkx")("945829");
            case h.mqtt_fast_lp:
                return b("gkx")("1001007");
            case h.mqtt_lp_no_delay:
                return b("gkx")("1066746");
            case h.mqtt_enable_publish_over_polling:
                return b("gkx")("968609");
            default:
                b("MqttLogger").getInstance().logError(new Error("unknown gk"), "Unknown GK value " + a);
                return !1
            }
        },
        useJSScheduler: function(a) {
            return b("gkx")("987139") ? a : null
        },
        initialize: function() {
            i.initialize(b("Random").random, b("CurrentUser").isLoggedInNow, b("clearTimeout"), b("setTimeoutAcrossTransitions"), function() {
                return b("MqttLogger").getInstance()
            }, k.genGk, null, k.useJSScheduler(b("JSScheduler").scheduleNormalPriCallback), k.useJSScheduler(b("JSScheduler").scheduleLoggingPriCallback), function(a, c) {
                var d = (g || (g = b("WebStorage"))).getLocalStorage();
                if (d) {
                    d = d.getItem(j + a);
                    if (d != null)
                        return d
                }
                return c
            }, function(a, c) {
                var d = (g || (g = b("WebStorage"))).getLocalStorage();
                d && (c == null ? d.removeItem(j + a) : d.setItem(j + a, c))
            })
        }
    };
    e.exports = k
}
), null);
__d("FBMqttChannel", ["MqttChannel", "MqttEnvInitializer", "MqttWebConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    b("MqttEnvInitializer").initialize();
    e.exports = new (b("MqttChannel"))({
        endpoint: (a = b("MqttWebConfig")).endpoint,
        pollingEndpoint: a.pollingEndpoint,
        userFbid: a.fbid,
        appId: a.appID,
        initialSubscribedTopics: a.subscribedTopics,
        capabilities: a.capabilities,
        clientCapabilities: a.clientCapabilities,
        chatVisibility: a.chatVisibility
    })
}
), null);
