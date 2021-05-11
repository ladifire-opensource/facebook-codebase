if (self.CavalryLogger) {
    CavalryLogger.start_js(["nwVyT"]);
}

__d("FacebookAppIDs", [], (function(a, b, c, d, e, f) {
    e.exports = {
        FACEBOOK_FOR_ANDROID: 74769995908,
        FACEBOOK_FOR_ANDROID2: 350685531728,
        FACEBOOK_FOR_EMERGING_MARKET_ANDROID: 275254692598279,
        TURDUCKEN: 400954310366822,
        FACEBOOK_MEDIA_EFFECTS: 1779302845618373,
        MOST_RECENT_FEED: 608920319153834,
        SAVED_FOR_LATER: 586254444758776,
        TRANSLATIONS: 4329892722,
        MESSENGERDOTCOM: 772021112871879,
        MESSENGER_DESKTOP: 195376314393036,
        WWW: 256281040558,
        WWW_COMET: 2220391788200892,
        FBPAGES: 2530096808,
        ADS_PAYMENT: 123097351040126,
        ADS_AMI_ONBOARDING: 2806896492660535,
        EVENTS: 2344061033,
        BUSINESS_ACCOUNTS: 436761779744620,
        ADS_EVENTS_MANAGER: 2094176354154603,
        WORKPLACE_BILLING: 1350397358363828,
        WORKPLACE_FOR_EVERY_PHONE: 1263749867021676,
        WORKPLACE_DESKTOP: 267999183646265,
        CHATPROXY_WEB: 229895473858072,
        MARKETPLACE: 1606854132932955,
        WHATSAPP_BUSINESS_ACCOUNT_MANAGER: 225181538219344,
        LIFT_STUDY_VIEW: 1501349520163380,
        LIFT_STUDY_CREATION: 367378623468359,
        INTERN_ADS_PREVIEW_GENERATION_APP: 2004203579636813,
        MESSENGER_DESKTOP_ARCHON_MACOS: 451384735309667,
        MESSENGER_DESKTOP_ARCHON_WINDOWS: 1931350367173590,
        PAGE_INBOX: 263902037430900,
        MEDIA_MANAGER: 2007914219485853,
        ACCOUNT_QUALITY: 293651901511648,
        ADS_AMI_BRAZIL_ONBOARDING: 616624215510791,
        MQTT_WEB: 219994525426954,
        WIT: 197968810559097,
        UNIFIED_AMI_ONBOARDING: 685960845183976,
        M_TOUCH_SITE: 333176286769482,
        M_SITE: 412378670482,
        FACEBOOK_FOR_IPHONE: 6628568379,
        WHATSAPP_ANDROID: 994766073959253,
        WHATSAPP_IPHONE: 306069495113,
        WHATSAPP_KAIOS: 412254059643627,
        WHATSAPP_WEB: 167028690535322,
        WHATSAPP_MAC: 346387865799334,
        WHATSAPP_WINDOWS: 120781038571451,
        WHATSAPP_SMB_ANDROID: 473039703209605,
        WHATSAPP_SMB_IPHONE: 450645302121512,
        BUSINESS_MANAGER_WORKPLACE_LOGIN: 190532008697732,
        ADS_INCUBATOR: 306597163753304
    }
}
), null);
__d("ghlInternalCreateMap", ["BanzaiODS"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = function() {
        function a() {}
        var b = a.prototype;
        b.get = function() {
            return null
        }
        ;
        b.has = function(a) {
            return !1
        }
        ;
        b.set = function(a, b) {
            return this
        }
        ;
        b["delete"] = function(a) {
            return !1
        }
        ;
        return a
    }();
    function a() {
        var a;
        a = (a = (a = window.WeakMap) != null ? a : window.Map) != null ? a : g;
        a !== window.WeakMap && b("BanzaiODS").bumpEntityKey(2966, "feed_ads", "ghlCreateMap.fallback." + String(a === window.Map));
        return new a()
    }
}
), null);
__d("GHLInternalMonitorStore_DO_NOT_USE", ["invariant", "ghlInternalCreateMap"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = []
      , i = b("ghlInternalCreateMap")()
      , j = [];
    a = function(a) {
        h.push(a)
    }
    ;
    f.add = a;
    c = function(a) {
        h.forEach(function(b, c) {
            if (b.b !== "bsu")
                return;
            var d = a(b);
            if (d != null) {
                var e = babelHelpers["extends"]({}, b, d);
                if (e.b === "bsb") {
                    b = i.get(e.el);
                    b != null && (b(e),
                    i["delete"](e.el));
                    j.forEach(function(a) {
                        return a(e)
                    })
                }
                h[c] = e
            }
        })
    }
    ;
    f.mapUpdate = c;
    var k = function(a) {
        return h.find(function(b) {
            return b.el === a
        })
    };
    f.get = k;
    d = function(a) {
        return k(a) != null
    }
    ;
    f.has = d;
    e = function(a, b) {
        var c = k(a);
        i.has(a) && g(0, 18634);
        c != null && c.b === "bsb" ? b(c) : i.set(a, b);
        return {
            dispose: function() {
                return i["delete"](a)
            }
        }
    }
    ;
    f.observe = e;
    b = function(a) {
        j.push(a);
        h.filter(function(a) {
            return a.b === "bsb"
        }).forEach(a);
        return {
            dispose: function() {
                return j = j.filter(function(b) {
                    return b === a
                })
            }
        }
    }
    ;
    f.observeAny = b
}
), null);
__d("ghlScan", ["BanzaiODS"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = 1;
    c = 2;
    var h = 3
      , i = 4
      , j = 5
      , k = 6
      , l = /^[a-z0-9]{7}$/;
    function a(a) {
        try {
            var d = new Set();
            m() && d.add(h);
            a.getAttributeNames != null && a.getAttributeNames().find(function(b) {
                return l.test(b) && a.getAttribute(b) === ""
            }) && d.add(j);
            document.getElementById(atob("c2Z4X2JhZGdl")) && d.add(i);
            document.getElementById(atob("ZmJwdXJpdHlpbmZvd3JhcHBlcg==")) && d.add(k);
            return d.size > 0 ? d : new Set([g])
        } catch (a) {
            b("BanzaiODS").bumpEntityKey(2966, "feed_ads", "_ghlScan." + a);
            return new Set([c])
        }
    }
    var m = function() {
        var a = window
          , b = a.atob;
        a = a.getComputedStyle;
        if (b == null || a == null)
            return !1;
        a = "." + [b("QWRCb3g"), b("QWQ"), b("YWR2ZXJ0"), b("cG9zdC1hZHM")].join(".");
        b = document.querySelector(a);
        if (!(b instanceof HTMLElement))
            return !1;
        b.style.display = "inline";
        a = window.getComputedStyle(b);
        return a.getPropertyValue("display") === "block"
    }
}
), null);
__d("ghlInternalLog", ["Banzai", "ghlInternalBumpODSKey", "ghlScan", "requireCond", "cr:1088657"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = "swank"
      , h = 0
      , i = 6;
    function a(a) {
        var c = a.b
          , d = a.el
          , e = a.o
          , f = a.te
          , k = a.ts;
        a = a.xt;
        if (c !== "bsb") {
            b("ghlInternalBumpODSKey")("ghlInternalLog", "missing-b");
            return
        }
        if (f == null) {
            b("ghlInternalBumpODSKey")("ghlInternalLog", "missing-te");
            return
        }
        c = j(k, f);
        k = ["xtrackable:" + g, {
            token: a,
            event_code: e ? i : h,
            hidden_delay: c,
            sources: Array.from(b("ghlScan")(d))
        }];
        b("Banzai").post.apply(b("Banzai"), k);
        b("cr:1088657") && b("cr:1088657").b({
            hd: c,
            e: d,
            token: (f = a) != null ? f : ""
        })
    }
    var j = function(a, b) {
        return Math.max(0, 100 * Math.round((b - a) / 100))
    }
}
), null);
__d("ghlMonitor", ["invariant", "GHLInternalMonitorStore_DO_NOT_USE", "GHLTestElement", "ghlInternalLog", "once", "queryThenMutateDOM", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e) {
        e === void 0 && (e = !1);
        if (!j(a))
            return;
        b("GHLInternalMonitorStore_DO_NOT_USE").add({
            b: "bsu",
            r: 0,
            el: a,
            o: e,
            ts: Date.now(),
            te: null,
            s: c,
            xt: d
        });
        h();
        b("GHLInternalMonitorStore_DO_NOT_USE").observe(a, b("ghlInternalLog"))
    }
    var h = b("once")(function() {
        i(),
        b("setIntervalAcrossTransitions")(i, 1e3)
    })
      , i = function() {
        b("queryThenMutateDOM")(function() {
            var a = 15
              , c = 1
              , d = 2
              , e = 5;
            b("GHLInternalMonitorStore_DO_NOT_USE").mapUpdate(function(f) {
                var g = f.r
                  , h = f.el;
                f = f.o;
                if (!f && a * c < g || f && d * e < g)
                    return {
                        b: "bsn",
                        te: Date.now()
                    };
                if (!f && g % c !== 0 || f && g % e !== 0)
                    return {
                        r: g + 1
                    };
                f = b("GHLTestElement").testElementI(h, "ghlMonitor");
                return f ? {
                    b: "bsb",
                    te: Date.now()
                } : {
                    r: g + 1
                }
            })
        })
    }
      , j = function(a) {
        return a.querySelectorAll("img").length === 0 ? !1 : !0
    }
}
), null);
