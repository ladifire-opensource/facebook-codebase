if (self.CavalryLogger) {
    CavalryLogger.start_js(["UsEsR"]);
}

__d("PagesNuxFrameworkTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesNuxFrameworkLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesNuxFrameworkLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesNuxFrameworkLoggerConfig", this.$1, {
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
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setNuxID = function(a) {
            this.$1.nux_id = a;
            return this
        }
        ;
        c.setNuxSurface = function(a) {
            this.$1.nux_surface = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        return a
    }();
    c = {
        event: !0,
        nux_id: !0,
        nux_surface: !0,
        page_id: !0
    };
    e.exports = a
}
), null);
__d("VideoComposerDialogUITypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:VideoComposerDialogUILoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:VideoComposerDialogUILoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:VideoComposerDialogUILoggerConfig", this.$1, {
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
        c.setActorID = function(a) {
            this.$1.actor_id = a;
            return this
        }
        ;
        c.setCaptionsNumSelectedFiles = function(a) {
            this.$1.captions_num_selected_files = a;
            return this
        }
        ;
        c.setComposerDialogVersion = function(a) {
            this.$1.composer_dialog_version = a;
            return this
        }
        ;
        c.setComposerEntryPoint = function(a) {
            this.$1.composer_entry_point = a;
            return this
        }
        ;
        c.setCurrentTab = function(a) {
            this.$1.current_tab = a;
            return this
        }
        ;
        c.setDialogMode = function(a) {
            this.$1.dialog_mode = a;
            return this
        }
        ;
        c.setEditSource = function(a) {
            this.$1.edit_source = a;
            return this
        }
        ;
        c.setErrorMessage = function(a) {
            this.$1.error_message = a;
            return this
        }
        ;
        c.setErrorTab = function(a) {
            this.$1.error_tab = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setHasBeenReset = function(a) {
            this.$1.has_been_reset = a;
            return this
        }
        ;
        c.setHasUploadFinished = function(a) {
            this.$1.has_upload_finished = a;
            return this
        }
        ;
        c.setInvalidationReasons = function(a) {
            this.$1.invalidation_reasons = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        }
        ;
        c.setIsComposerPostScheduleRedesign = function(a) {
            this.$1.is_composer_post_schedule_redesign = a;
            return this
        }
        ;
        c.setIsPremiere = function(a) {
            this.$1.is_premiere = a;
            return this
        }
        ;
        c.setIsPremiereUnderScheduleInTwoStep = function(a) {
            this.$1.is_premiere_under_schedule_in_two_step = a;
            return this
        }
        ;
        c.setIsShowPage = function(a) {
            this.$1.is_show_page = a;
            return this
        }
        ;
        c.setIsTwoStepPublish = function(a) {
            this.$1.is_two_step_publish = a;
            return this
        }
        ;
        c.setNextTab = function(a) {
            this.$1.next_tab = a;
            return this
        }
        ;
        c.setOriginalShowVideoType = function(a) {
            this.$1.original_show_video_type = a;
            return this
        }
        ;
        c.setPostAttemptCount = function(a) {
            this.$1.post_attempt_count = a;
            return this
        }
        ;
        c.setPremiereContentStrategyCondition = function(a) {
            this.$1.premiere_content_strategy_condition = a;
            return this
        }
        ;
        c.setPremiereNowCondition = function(a) {
            this.$1.premiere_now_condition = a;
            return this
        }
        ;
        c.setSessionID = function(a) {
            this.$1.session_id = a;
            return this
        }
        ;
        c.setShowVideoType = function(a) {
            this.$1.show_video_type = a;
            return this
        }
        ;
        c.setUploadAttemptCount = function(a) {
            this.$1.upload_attempt_count = a;
            return this
        }
        ;
        c.setVideoAssetID = function(a) {
            this.$1.video_asset_id = a;
            return this
        }
        ;
        c.setVideoAssetWaterfallSource = function(a) {
            this.$1.video_asset_waterfall_source = a;
            return this
        }
        ;
        c.setVideoID = function(a) {
            this.$1.video_id = a;
            return this
        }
        ;
        c.setWaterfallID = function(a) {
            this.$1.waterfall_id = a;
            return this
        }
        ;
        c.setWebFramework = function(a) {
            this.$1.web_framework = a;
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
        actor_id: !0,
        captions_num_selected_files: !0,
        composer_dialog_version: !0,
        composer_entry_point: !0,
        current_tab: !0,
        dialog_mode: !0,
        edit_source: !0,
        error_message: !0,
        error_tab: !0,
        event: !0,
        has_been_reset: !0,
        has_upload_finished: !0,
        invalidation_reasons: !0,
        is_composer_post_schedule_redesign: !0,
        is_premiere: !0,
        is_premiere_under_schedule_in_two_step: !0,
        is_show_page: !0,
        is_two_step_publish: !0,
        next_tab: !0,
        original_show_video_type: !0,
        post_attempt_count: !0,
        premiere_content_strategy_condition: !0,
        premiere_now_condition: !0,
        session_id: !0,
        show_video_type: !0,
        upload_attempt_count: !0,
        video_asset_id: !0,
        video_asset_waterfall_source: !0,
        video_id: !0,
        waterfall_id: !0,
        web_framework: !0
    };
    e.exports = a
}
), null);
__d("MenuDeprecated", ["ArbiterMixin", "CSS", "DataStore", "DOM", "Event", "HTML", "Keys", "Parent", "Style", "UserAgent_DEPRECATED", "emptyFunction", "mixin", "Run"], (function(a, b, c, d, e, f) {
    var g = "menu:mouseover"
      , h = null;
    function i(a) {
        return b("CSS").hasClass(a, "uiMenuContainer") ? a : b("Parent").byClass(a, "uiMenu")
    }
    function j(a) {
        return b("Parent").byClass(a, "uiMenuItem")
    }
    function k(a) {
        if (document.activeElement) {
            var b = j(document.activeElement);
            return a.indexOf(b)
        }
        return -1
    }
    function l(a) {
        return b("DOM").find(a, "a.itemAnchor")
    }
    function m(a) {
        return b("CSS").hasClass(a, "checked")
    }
    function n(a) {
        return !b("CSS").hasClass(a, "disabled") && b("Style").get(a, "display") !== "none"
    }
    function o(a) {
        var c = document.activeElement;
        if (!c || !b("Parent").byClass(c, "uiMenu") || !b("DOM").isInputNode(c)) {
            c = j(a.getTarget());
            c && r.focusItem(c)
        }
    }
    function p(a) {
        b("UserAgent_DEPRECATED").firefox() && l(a).blur(),
        r.inform("select", {
            menu: i(a),
            item: a
        })
    }
    var q = function() {
        q = b("emptyFunction");
        var a = {};
        a.click = function(a) {
            a = j(a.getTarget());
            if (a && n(a)) {
                p(a);
                a = l(a);
                var b = a.href;
                a = a.getAttribute("rel");
                return a && a !== "ignore" || b && b.charAt(b.length - 1) !== "#"
            }
        }
        ;
        a.keydown = function(a) {
            var c = a.getTarget();
            if (a.getModifiers().any)
                return;
            if (!h || b("DOM").isInputNode(c))
                return;
            var d = b("Event").getKeyCode(a), e;
            switch (d) {
            case b("Keys").UP:
            case b("Keys").DOWN:
                var f = r.getEnabledItems(h);
                e = k(f);
                r.focusItem(f[e + (d === b("Keys").UP ? -1 : 1)]);
                return !1;
            case b("Keys").SPACE:
                f = j(c);
                f && (p(f),
                a.prevent());
                break;
            default:
                c = String.fromCharCode(d).toLowerCase();
                f = r.getEnabledItems(h);
                e = k(f);
                a = e;
                d = f.length;
                while (~e && (a = ++a % d) !== e || !~e && ++a < d) {
                    var g = r.getItemLabel(f[a]);
                    if (g && g.charAt(0).toLowerCase() === c) {
                        r.focusItem(f[a]);
                        return !1
                    }
                }
            }
        }
        ;
        b("Event").listen(document.body, a)
    };
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.focusItem = function(a) {
            a && n(a) && (this.$removeSelected(i(a)),
            b("CSS").addClass(a, "selected"),
            l(a).focus())
        }
        ;
        d.getEnabledItems = function(a) {
            return r.getItems(a).filter(n)
        }
        ;
        d.getCheckedItems = function(a) {
            return r.getItems(a).filter(m)
        }
        ;
        d.getItems = function(a) {
            return b("DOM").scry(a, "li.uiMenuItem")
        }
        ;
        d.getItemLabel = function(a) {
            return a.getAttribute("data-label", 2) || ""
        }
        ;
        d.isItemChecked = function(a) {
            return b("CSS").hasClass(a, "checked")
        }
        ;
        d.autoregister = function(a, b, c) {
            a.subscribe("show", function() {
                r.register(b, c)
            }),
            a.subscribe("hide", function() {
                r.unregister(b)
            })
        }
        ;
        d.register = function(a, c) {
            a = i(a),
            q(),
            b("DataStore").get(a, g) || b("DataStore").set(a, g, b("Event").listen(a, "mouseover", o)),
            c !== !1 && (h = a)
        }
        ;
        d.setItemEnabled = function(a, c) {
            !c && !b("DOM").scry(a, "span.disabledAnchor")[0] && b("DOM").appendContent(a, b("DOM").create("span", {
                className: b("DOM").find(a, "a").className + " disabledAnchor"
            }, b("HTML")(l(a).innerHTML))),
            b("CSS").conditionClass(a, "disabled", !c)
        }
        ;
        d.toggleItem = function(a) {
            var b = !r.isItemChecked(a);
            r.setItemChecked(a, b)
        }
        ;
        d.setItemChecked = function(a, c) {
            b("CSS").conditionClass(a, "checked", c),
            l(a).setAttribute("aria-checked", c)
        }
        ;
        d.unregister = function(a) {
            a = i(a);
            var c = b("DataStore").remove(a, g);
            c && c.remove();
            h = null;
            this.$removeSelected(a)
        }
        ;
        d.$removeSelected = function(a) {
            r.getItems(a).filter(function(a) {
                return b("CSS").hasClass(a, "selected")
            }).forEach(function(a) {
                b("CSS").removeClass(a, "selected")
            })
        }
        ;
        return c
    }(b("mixin")(b("ArbiterMixin")));
    var r = new a();
    e.exports = r
}
), null);
__d("XPageNuxSelectorAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/nux_selector/", {
        page_id: {
            type: "FBID",
            required: !0
        },
        nux_ids: {
            type: "EnumVector",
            required: !0,
            enumType: {
                member: 0
            }
        },
        surface: {
            type: "Enum",
            required: !0,
            enumType: 1
        }
    })
}
), null);
__d("PagesNuxFrameworkHelper", ["AsyncRequest", "BasicFBNux", "FBLogger", "PagesNuxFrameworkTypedLogger", "Run", "XPageNuxSelectorAsyncController"], (function(a, b, c, d, e, f) {
    "use strict";
    f._initSurface = t;
    f._showNux = u;
    f._setNuxActive = v;
    f._pickAndShowNux = w;
    f.registerNux = x;
    f.closeNux = y;
    f.registerNuxFromServer = a;
    f.setCurrentSurface = c;
    f.showNuxAfterLoading = d;
    f.RegisterNuxWithDependency = e;
    f.showNuxAferComponentLoading = z;
    var g = {}
      , h = {}
      , i = null
      , j = null;
    function k() {
        return i
    }
    function l(a) {
        i = a
    }
    function m() {
        return j
    }
    function n(a) {
        j = a
    }
    function o(a, b, c, d, e) {
        g[b] || (g[b] = {}),
        g[b][a] = {
            showCallback: c,
            isReadyForRender: d,
            contextRef: e
        }
    }
    function p() {
        return g
    }
    function q(a, b, c) {
        if (!g[b] || !g[b][a])
            return;
        g[b][a].isReadyForRender = c
    }
    function r(a, b) {
        h[a] = b
    }
    function s() {
        return h
    }
    function t(a, b) {
        n(b),
        l(a)
    }
    function u(c, d) {
        var a = m();
        if (!a)
            return;
        if (!c.isShown()) {
            try {
                c.show()
            } catch (c) {
                b("FBLogger")("pages_nux_framework").mustfix("Nux ID: %s, Surface: %s, raised exception when rendering", d, a)
            }
            c.subscribe("hide", function() {
                y(d, a)
            })
        }
    }
    function v(c) {
        if (!c)
            return;
        var a = m();
        if (!a)
            return;
        var d = p()[a][c];
        if (!d.isReadyForRender && d.contextRef) {
            new (b("PagesNuxFrameworkTypedLogger"))().setEvent("nux_framework.hold").setPageID(k()).setNuxID(c).setNuxSurface(a).log();
            d.contextRef && d.contextRef.addEventListener("show", function() {
                c && (d.showCallback && d.showCallback(),
                b("BasicFBNux").onView(c),
                new (b("PagesNuxFrameworkTypedLogger"))().setEvent("nux_framework.show_nux").setPageID(k()).setNuxID(c).setNuxSurface(a).log())
            });
            r(a, c);
            return
        }
        d.showCallback.apply();
        b("BasicFBNux").onView(c);
        r(a, c);
        new (b("PagesNuxFrameworkTypedLogger"))().setEvent("nux_framework.show_nux").setPageID(k()).setNuxID(c).setNuxSurface(a).log()
    }
    function w() {
        var d = m();
        if (!d)
            return;
        var a = p()[d];
        if (!a)
            return;
        var c = s()[d];
        if (c) {
            a[c].isReadyForRender === !1 && q(c, d, !0);
            v(c);
            return
        }
        c = k();
        if (!c)
            return;
        c = b("XPageNuxSelectorAsyncController").getURIBuilder().setFBID("page_id", c).setEnumVector("nux_ids", Object.keys(a)).setEnum("surface", d).getURI();
        new (b("AsyncRequest"))().setHandler(function(a) {
            v(a.payload)
        }).setURI(c).send()
    }
    function x(a, c, d, e, f) {
        o(a, c, d, e ? e : !0, f),
        new (b("PagesNuxFrameworkTypedLogger"))().setEvent("nux_framework.register_nux").setPageID(k()).setNuxID(a).setNuxSurface(c).log()
    }
    function y(a, c) {
        r(c, null),
        b("BasicFBNux").onDismiss(a),
        new (b("PagesNuxFrameworkTypedLogger"))().setEvent("nux_framework.xout").setPageID(k()).setNuxID(a).setNuxSurface(c).log()
    }
    function a(a, b, c) {
        var d = function() {
            return u(a, b)
        };
        x(b, c, d)
    }
    function c(a) {
        n(a)
    }
    function d(a, c) {
        t(a, c),
        b("Run").onAfterLoad(function() {
            return w()
        })
    }
    function e(a, b, c, d) {
        var e = function() {
            return u(a, b)
        };
        x(b, c, e, !1, d)
    }
    function z(b) {
        var a = m();
        if (!a || a !== b)
            return;
        a = s();
        if (a[b])
            return;
        this._pickAndShowNux()
    }
}
), null);
__d("VideoThumbnail", ["invariant"], (function(a, b, c, d, e, f, g) {
    a = function() {
        "use strict";
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.getURL = function() {
            return this.$1
        }
        ;
        b.getData = function() {
            g(0, 4844)
        }
        ;
        a.addTextToCanvasContext = function(a, b, c, d, e, f, g, h, i) {
            a.fillStyle = h;
            a.textAlign = i;
            a.font = f + "px " + g;
            h = i === "center" ? d + e / 2 : d;
            g = 1;
            i = b.split("\n");
            for (var d = i, b = Array.isArray(d), i = 0, d = b ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var j;
                if (b) {
                    if (i >= d.length)
                        break;
                    j = d[i++]
                } else {
                    i = d.next();
                    if (i.done)
                        break;
                    j = i.value
                }
                j = j;
                var k = ""
                  , l = "";
                j = j.split(" ");
                for (var j = j, m = Array.isArray(j), n = 0, j = m ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var o;
                    if (m) {
                        if (n >= j.length)
                            break;
                        o = j[n++]
                    } else {
                        n = j.next();
                        if (n.done)
                            break;
                        o = n.value
                    }
                    o = o;
                    l += o;
                    var p = a.measureText(l).width
                      , q = a.measureText(o).width;
                    if (q > e) {
                        k.length > 0 && (a.fillText(k, h, c + f * g),
                        g++);
                        q = "";
                        var r = "";
                        for (var s = o, t = Array.isArray(s), u = 0, s = t ? s : s[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                            var v;
                            if (t) {
                                if (u >= s.length)
                                    break;
                                v = s[u++]
                            } else {
                                u = s.next();
                                if (u.done)
                                    break;
                                v = u.value
                            }
                            v = v;
                            r += v;
                            var w = a.measureText(r).width;
                            w > e ? (a.fillText(q, h, c + f * g),
                            q = v,
                            r = v,
                            g++) : q = r
                        }
                        k = q + " ";
                        l = q + " "
                    } else
                        p > e ? (a.fillText(k, h, c + f * g),
                        k = o + " ",
                        l = o + " ",
                        g++) : (l += " ",
                        k = l)
                }
                a.fillText(k, h, c + f * g);
                g++
            }
            return a
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("WebWorker", ["invariant", "requireCond", "BlobFactory", "Bootloader", "EventListener", "SubscriptionsHandler", "URI", "WebWorkerConfig", "XHRRequest", "areSameOrigin", "cr:951783", "emptyFunction", "filterObject", "getCrossOriginTransport", "gkx", "memoize", "performanceNow", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    var h, i, j = a.URL || a.webkitURL, k = {
        remove: b("emptyFunction")
    }, l = function() {
        "use strict";
        function c(a) {
            var c = this;
            this.$2 = !1;
            this.$3 = null;
            this.$4 = a;
            this.__worker = null;
            this.$5 = b("emptyFunction");
            this.$6 = b("emptyFunction");
            this.$7 = [];
            this.$8 = [];
            this.$9 = !1;
            this.$10 = new (b("SubscriptionsHandler"))();
            this.$1 = b("cr:951783") !== null ? b("cr:951783")(function() {
                c.$9 || c.terminate()
            }) : k;
            b("gkx")("708253") && setTimeout(function() {
                !c.$9 && !c.isCurrentState("terminated") && b("recoverableViolation")("WebWorker (resource: " + a.name + ") allowCrossPageTransitions must be true on Comet, or you must handle cleaning up your worker.", "comet_infra")
            }, 1e3);
            this.$11("constructed")
        }
        var d = c.prototype;
        d.setMessageHandler = function(a) {
            this.$5 = a || b("emptyFunction");
            return this
        }
        ;
        d.setErrorHandler = function(a) {
            this.$6 = a || b("emptyFunction");
            return this
        }
        ;
        d.postMessage = function(a, b) {
            this.isCurrentState("constructed") && g(0, 5977);
            this.isCurrentState("terminated") && g(0, 5978);
            if (this.isCurrentState("preparing")) {
                this.$7.push(this.postMessage.bind(this, a, b));
                return this
            }
            a = {
                type: "message",
                message: a
            };
            b ? this.getInterfaceableWorker().postMessage(a, b) : this.getInterfaceableWorker().postMessage(a);
            return this
        }
        ;
        d.$12 = function() {
            this.isCurrentState("terminated") || (this.$11("terminated"),
            this.__worker = null,
            this.$13(),
            this.$7 = [],
            this.$8 = [],
            this.$1 && this.$1.remove && this.$1.remove())
        }
        ;
        d.terminate = function() {
            this.isCurrentState("executing") && this.__worker != null && this.__worker.terminate();
            this.$12();
            return this
        }
        ;
        d.execute = function() {
            this.isCurrentState("terminated") && g(0, 5979);
            if (["preparing", "executing"].some(this.isCurrentState, this))
                return this;
            this.$11("preparing");
            c.prepareResource(this.$4, this.$14.bind(this));
            return this
        }
        ;
        d.setAllowCrossPageTransition = function(a) {
            b("gkx")("708253") && !a && b("recoverableViolation")("allowAcrossPageTransitions must be true because we dont kill these in Comet.", "comet_infra");
            this.$9 = a;
            return this
        }
        ;
        d.isCurrentState = function(a) {
            c.states.includes(a) || g(0, 5980, a);
            return a === this.$3
        }
        ;
        d.$14 = function() {
            this.isCurrentState("executing") && g(0, 5981);
            if (this.isCurrentState("terminated"))
                return;
            this.$4.sameOriginURL || this.$4.source || g(0, 19837, this.$4.name);
            this.$4.sameOriginURL ? this.__worker = this.constructWorker(this.$4.sameOriginURL) : (this.__worker = this.constructWorker(c.evalWorkerURL),
            this.getInterfaceableWorker().postMessage(this.$4.source));
            this.$15("ping", Date.now());
            if (this.$4.dynamicModules)
                try {
                    this.$15("defineModules", this.$4.dynamicModules)
                } catch (a) {
                    this.terminate();
                    this.$16("define_error", {
                        message: a.message
                    });
                    throw a
                }
            this.$17();
            this.$11("executing");
            this.$7.forEach(function(a) {
                return a()
            });
            this.$7 = [];
            this.$8.forEach(function(a) {
                return a()
            });
            this.$8 = []
        }
        ;
        d.$13 = function() {
            this.$10.release()
        }
        ;
        d.$15 = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                c[d - 1] = arguments[d];
            this.getInterfaceableWorker().postMessage({
                type: a,
                args: c
            })
        }
        ;
        d.$16 = function(a, b) {
            c.$16(a, this.$4.name, babelHelpers["extends"]({}, b, {
                cross_page_transition: !!this.$9,
                state: this.$3
            }))
        }
        ;
        c.$18 = function() {
            return Object.keys(b("filterObject")({
                object_url: c.$19(),
                eval_url: q(),
                data_url: c.$20(),
                worker: c.isSupported(),
                transferables: c.areTransferablesSupported()
            }, function(a) {
                return !!a
            }))
        }
        ;
        d.$17 = function() {
            this.$10.addSubscriptions(b("EventListener").listen(this.getInterfaceableWorker(), "message", this.$21.bind(this)), b("EventListener").listen(this.getInterfaceableWorker(), "error", this.$22.bind(this)))
        }
        ;
        d.$22 = function(a) {
            var b = this.$6(a);
            !b && !a.defaultPrevented && this.$16("exception", {
                message: a.message
            })
        }
        ;
        d.$21 = function(b) {
            b = b.data;
            switch (b.type) {
            case "message":
                this.$5(b.message);
                break;
            case "pong":
                this.$2 = !0;
                this.$16("executed", {
                    dt: Math.floor(b.args[1] - b.args[0]),
                    bytes: this.$4.source ? this.$4.source.length : -1
                });
                break;
            case "terminate":
                this.terminate();
                break;
            case "haste-error":
                this.terminate();
                this.$16("haste_error", {
                    message: b.message
                });
                break;
            case "console":
                var c = b.args.shift();
                ["log", "error", "info", "debug", "warn"].includes(c) || g(0, 5983, c);
                a.console[c].apply(a.console, b.args);
                break
            }
        }
        ;
        d.$11 = function(a) {
            c.states.includes(a) || g(0, 5984, a),
            this.$16("transition", {
                next_state: a
            }),
            this.$3 = a
        }
        ;
        c.prepareResource = function(d, e) {
            e === void 0 && (e = b("emptyFunction"));
            d.sameOriginURL || d.url || d.source || g(0, 5985);
            !c.isSupported() && g(0, 5986);
            if (d.sameOriginURL)
                e();
            else if (d.url && b("areSameOrigin")(new (h || (h = b("URI")))(d.url), new (h || (h = b("URI")))(a.location.href)))
                d.sameOriginURL = d.url,
                e();
            else if (d.source)
                c.$23() && (d.sameOriginURL = c.$24(d.source)),
                e();
            else if (!d.loading) {
                var f = (i || (i = b("performanceNow")))();
                d.loading = [e];
                c.$25(d.url, function(a) {
                    a ? (d.source = a,
                    c.$23() && (d.sameOriginURL = c.$24(a)),
                    c.$16("prepared", d.name, {
                        dt: Math.floor((i || (i = b("performanceNow")))() - f),
                        bytes: a.length
                    })) : c.$16("failed", d.name, {
                        dt: Math.floor((i || (i = b("performanceNow")))() - f),
                        bytes: 0
                    }),
                    d.loading.forEach(function(a) {
                        return a()
                    }),
                    d.loading = !1
                })
            } else
                d.loading.push(e);
            return d
        }
        ;
        c.releaseResource = function(a) {
            a.sameOriginURL.indexOf("blob:") === 0 && (j.revokeObjectURL && j.revokeObjectURL(a.sameOriginURL),
            a.sameOriginURL = null);
            return a
        }
        ;
        c.isSupported = function() {
            return p && (c.$23() || q())
        }
        ;
        c.isMessageChannelSupported = function() {
            return c.areTransferablesSupported() && !!a.MessageChannel
        }
        ;
        c.areTransferablesSupported = function() {
            return c.isSupported() && r()
        }
        ;
        c.$25 = function(a, c) {
            new (b("XHRRequest"))(a).setTransportBuilder(b("getCrossOriginTransport")).setMethod("GET").setResponseHandler(function(a) {
                c(a)
            }).setErrorHandler(c.bind(null, null)).send()
        }
        ;
        c.$24 = function(a) {
            c.$23() || g(0, 5987);
            if (c.$19()) {
                var d = b("BlobFactory").getBlob([a], {
                    type: "application/javascript"
                });
                return j.createObjectURL(d)
            }
            if (c.$20())
                return "data:application/javascript," + encodeURIComponent(a)
        }
        ;
        c.$19 = function() {
            return b("BlobFactory").isSupported() && n()
        }
        ;
        c.$20 = function() {
            return o()
        }
        ;
        c.$23 = function() {
            return c.$19() || c.$20()
        }
        ;
        c.$16 = function(a, d, e) {
            if (!b("WebWorkerConfig").logging.enabled)
                return;
            b("Bootloader").loadModules(["BanzaiLogger"], function(f) {
                f.log(b("WebWorkerConfig").logging.config, babelHelpers["extends"]({}, e, {
                    features_array: c.$18(),
                    event: a,
                    resource: d
                }))
            }, "WebWorker")
        }
        ;
        d.constructWorker = function(a) {
            return m(a)
        }
        ;
        d.$26 = function(a, b) {
            if (this.isCurrentState("preparing")) {
                this.$8.push(this.$26.bind(this, a, b));
                return
            }
            this.getInterfaceableWorker().postMessage({
                type: "port",
                message: a
            }, b)
        }
        ;
        d.createMessageChannel = function(a, b) {
            var c = new MessageChannel();
            this.$26(a, [c.port2].concat(b || []));
            c.port1.start();
            return c.port1
        }
        ;
        d.getInterfaceableWorker = function() {
            return this.__worker
        }
        ;
        return c
    }();
    l.states = ["constructed", "preparing", "executing", "terminated"];
    l.evalWorkerURL = b("WebWorkerConfig").evalWorkerURL;
    function m(b) {
        return new a.Worker(b)
    }
    var n = b("memoize")(function() {
        var a;
        if (!j || !j.createObjectURL)
            return !1;
        try {
            a = j.createObjectURL(b("BlobFactory").getBlob([""], {
                type: "application/javascript"
            }));
            var c = m(a);
            c.terminate();
            c = !0
        } catch (a) {
            c = !1
        } finally {
            j.revokeObjectURL && j.revokeObjectURL(a)
        }
        return c
    })
      , o = b("memoize")(function() {
        try {
            var a = m("data:application/javascript,");
            a.terminate();
            a = !0
        } catch (b) {
            a = !1
        }
        return a
    })
      , p = !!a.Worker
      , q = b("memoize")(function() {
        try {
            var a = m(l.evalWorkerURL);
            a.terminate();
            a = !0
        } catch (b) {
            a = !1
        }
        return a
    })
      , r = b("memoize")(function() {
        try {
            var a = m(l.evalWorkerURL)
              , b = new ArrayBuffer(0);
            a.postMessage({
                buffer: b
            }, [b]);
            a.terminate();
            b = !0
        } catch (a) {
            b = !1
        }
        return b
    });
    e.exports = l
}
), null);
__d("CanvasVideoThumbnail", ["Promise", "EventListener", "VideoThumbnail", "canvasToBlob", "promiseDone"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b, c, d, e, f, g, h) {
            var i;
            e === void 0 && (e = null);
            f === void 0 && (f = null);
            g === void 0 && (g = 0);
            h === void 0 && (h = 0);
            i = a.call(this, null) || this;
            i.$CanvasVideoThumbnail1 = b;
            i.$CanvasVideoThumbnail2 = c;
            i.$CanvasVideoThumbnail3 = d;
            i.$CanvasVideoThumbnail4 = e;
            i.$CanvasVideoThumbnail5 = f;
            i.$CanvasVideoThumbnail6 = g;
            i.$CanvasVideoThumbnail7 = h;
            return i
        }
        var d = c.prototype;
        d.getCanvas = function() {
            return this.$CanvasVideoThumbnail1
        }
        ;
        d.getTime = function() {
            return this.$CanvasVideoThumbnail3 ? this.$CanvasVideoThumbnail3 : 0
        }
        ;
        d.getURL = function() {
            this.$CanvasVideoThumbnail8 || (this.$CanvasVideoThumbnail8 = this.$CanvasVideoThumbnail1.toDataURL("image/jpeg"));
            return this.$CanvasVideoThumbnail8
        }
        ;
        d.getData = function() {
            var a = this
              , c = document.createElement("canvas")
              , d = c.getContext("2d")
              , e = this.$CanvasVideoThumbnail2;
            return new (b("Promise"))(function(f, g) {
                var h = b("EventListener").listen(e, "seeked", function() {
                    h.remove(),
                    a.$CanvasVideoThumbnail9(c, d),
                    b("promiseDone")(b("canvasToBlob")(c, "image/jpeg").then(f, g))
                });
                e.currentTime = a.$CanvasVideoThumbnail3
            }
            )
        }
        ;
        d.getDataWithText = function(a, c, d, e, f, g, h, i) {
            var j = this
              , k = document.createElement("canvas")
              , l = k.getContext("2d")
              , m = this.$CanvasVideoThumbnail2;
            return new (b("Promise"))(function(n, o) {
                var p = b("EventListener").listen(m, "seeked", function() {
                    p.remove(),
                    l.fillStyle = h,
                    l.textAlign = i,
                    j.$CanvasVideoThumbnail9(k, l),
                    l = b("VideoThumbnail").addTextToCanvasContext(l, a, c, d, e, f, g, h, i),
                    b("promiseDone")(b("canvasToBlob")(k, "image/jpeg").then(n, o))
                });
                m.currentTime = j.$CanvasVideoThumbnail3
            }
            )
        }
        ;
        d.$CanvasVideoThumbnail9 = function(a, b) {
            var c = this.$CanvasVideoThumbnail2;
            this.$CanvasVideoThumbnail4 || this.$CanvasVideoThumbnail5 ? (a.width = this.$CanvasVideoThumbnail4 ? this.$CanvasVideoThumbnail4 : c.videoWidth,
            a.height = this.$CanvasVideoThumbnail5 ? this.$CanvasVideoThumbnail5 : c.videoHeight,
            this.$CanvasVideoThumbnail10(a, b)) : (a.width = c.videoWidth,
            a.height = c.videoHeight,
            b.drawImage(c, 0, 0, a.width, a.height))
        }
        ;
        d.$CanvasVideoThumbnail10 = function(a, b) {
            var c = this.$CanvasVideoThumbnail2
              , d = this.$CanvasVideoThumbnail6
              , e = this.$CanvasVideoThumbnail7
              , f = this.$CanvasVideoThumbnail4 ? this.$CanvasVideoThumbnail4 : a.width
              , g = this.$CanvasVideoThumbnail5 ? this.$CanvasVideoThumbnail5 : a.height;
            b.drawImage(c, d, e, f, g, 0, 0, a.width, a.height)
        }
        ;
        return c
    }(b("VideoThumbnail"));
    e.exports = a
}
), null);
__d("generateVideoThumbnails", ["Promise", "CanvasVideoThumbnail", "HTMLMediaElementReadyStates", "VideoFrameBuffer", "requireCond", "cr:909281"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, c, d, e, f, k, l, m, n, o) {
        f === void 0 && (f = "contain");
        k === void 0 && (k = 0);
        l === void 0 && (l = null);
        m === void 0 && (m = null);
        n === void 0 && (n = null);
        o === void 0 && (o = null);
        return new (b("Promise"))(function(p, q) {
            var r = document.createElement("canvas")
              , s = []
              , t = 0
              , u = a.duration - k;
            o != null && (u = Math.min(u, o));
            var v = u / e, w = null, x, y, z = (u = m) != null ? u : g(l, c), A = (u = n) != null ? u : h(l, d), B = i(l, c), C = j(l, d);
            x = new (b("VideoFrameBuffer"))(r,a,f,z,A,B,C);
            r.width = (u = z) != null ? u : c;
            r.height = (u = A) != null ? u : d;
            var D = function() {
                x.updateFrameBuffer();
                var c = new (b("CanvasVideoThumbnail"))(r,a,k + (t - 1) * v,z,A,B,C);
                s.push(c);
                (!w || c.getURL().length > w.getURL().length) && (w = c);
                F()
            }
              , E = function() {
                if (a.readyState >= b("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA)
                    D();
                else if (b("cr:909281") !== null)
                    var c = b("cr:909281").listen(a, "loadeddata", function() {
                        c.remove(),
                        D()
                    });
                else
                    a.addEventListener("loadeddata", D, {
                        once: !0
                    })
            }
              , F = function() {
                t === 0 && (b("cr:909281") !== null ? y = b("cr:909281").listen(a, "seeked", E) : a.addEventListener("seeked", E)),
                t < e ? (a.currentTime = k + t * v,
                t++) : (b("cr:909281") !== null ? y && y.remove() : a.removeEventListener("seeked", E),
                p({
                    thumbnails: s,
                    selectedThumbnail: w
                }))
            };
            if (a.videoWidth === 0 || a.videoHeight === 0) {
                q();
                return
            }
            F()
        }
        )
    }
    function g(a, b) {
        if (a && a.spherical) {
            if (a.stereoMode === "left-right")
                return b / 2;
            if (a.projectionType === "cubemap")
                return b / 3
        }
        return null
    }
    function h(a, b) {
        return a && a.spherical && (a.stereoMode === "top-bottom" || a.projectionType === "cubemap") ? b / 2 : null
    }
    function i(a, b) {
        return a && a.spherical && a.projectionType === "cubemap" ? b / 3 : 0
    }
    function j(a, b) {
        return a && a.spherical && a.projectionType === "cubemap" ? b / 2 : 0
    }
}
), null);
__d("SocialGoodCharityActionsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:SocialGoodCharityActionsLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:SocialGoodCharityActionsLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:SocialGoodCharityActionsLoggerConfig", this.$1, {
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
        c.setAbTestNamesToGroups = function(a) {
            this.$1.ab_test_names_to_groups = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        }
        ;
        c.setAttributes = function(a) {
            this.$1.attributes = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        }
        ;
        c.setCampaignID = function(a) {
            this.$1.campaign_id = a;
            return this
        }
        ;
        c.setCampaignType = function(a) {
            this.$1.campaign_type = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setExplicitPostID = function(a) {
            this.$1.explicit_post_id = a;
            return this
        }
        ;
        c.setFundraiserID = function(a) {
            this.$1.fundraiser_id = a;
            return this
        }
        ;
        c.setHasPaymentMethodOnFile = function(a) {
            this.$1.has_payment_method_on_file = a;
            return this
        }
        ;
        c.setParentEventType = function(a) {
            this.$1.parent_event_type = a;
            return this
        }
        ;
        c.setSessionID = function(a) {
            this.$1.session_id = a;
            return this
        }
        ;
        c.setSourceAttributes = function(a) {
            this.$1.source_attributes = b("GeneratedLoggerUtils").serializeMap(a);
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
        ab_test_names_to_groups: !0,
        attributes: !0,
        campaign_id: !0,
        campaign_type: !0,
        event: !0,
        explicit_post_id: !0,
        fundraiser_id: !0,
        has_payment_method_on_file: !0,
        parent_event_type: !0,
        session_id: !0,
        source_attributes: !0
    };
    e.exports = a
}
), null);
__d("ManagedError", [], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c) {
            var d;
            d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
            b !== null && b !== void 0 ? d.message = b : d.message = "";
            d.innerError = c;
            return d
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    e.exports = a
}
), null);
__d("XMediaManagerController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/creatorstudio/{?*tab_route}/", {
        branded_content: {
            type: "String"
        },
        collection_id: {
            type: "String"
        },
        content_table: {
            type: "Enum",
            enumType: 1
        },
        edit_video_composer_tab: {
            type: "Enum",
            enumType: 1
        },
        edit_video_id: {
            type: "Int"
        },
        mode: {
            type: "Enum",
            enumType: 1
        },
        multipost_page_id: {
            type: "FBID"
        },
        post_status: {
            type: "Enum",
            enumType: 1
        },
        post_type: {
            type: "Enum",
            enumType: 1
        },
        reference: {
            type: "Enum",
            enumType: 1
        },
        selected_single_page_id: {
            type: "FBID"
        },
        sub_tab: {
            type: "Enum",
            enumType: 1
        },
        tab: {
            type: "String"
        },
        tab_route: {
            type: "String"
        },
        override_mweb_check: {
            type: "Bool",
            defaultValue: !1
        },
        open_bulk_upload_panel: {
            type: "Bool",
            defaultValue: !1
        },
        mta_onboarding_product: {
            type: "Enum",
            enumType: 1
        },
        mta_onboarding_task: {
            type: "Enum",
            enumType: 1
        },
        mta_onboarding_includes_brand_collabs: {
            type: "Bool",
            defaultValue: !1
        },
        mta_onboarding_selected_pages: {
            type: "FBIDVector"
        },
        mta_onboarding_entry_point: {
            type: "Enum",
            enumType: 1
        },
        rm_media_id: {
            type: "FBID"
        },
        open_videolist_creation_dialogue: {
            type: "Bool",
            defaultValue: !1
        },
        open_basic_post_composer: {
            type: "Bool",
            defaultValue: !1
        },
        open_igtv_uploader: {
            type: "Bool",
            defaultValue: !1
        },
        insights_earnings_product: {
            type: "Enum",
            enumType: 1
        },
        stars_sub_tab: {
            type: "Enum",
            enumType: 1
        },
        inbox_item: {
            type: "String"
        },
        clips_library_tab: {
            type: "Enum",
            enumType: 1
        },
        post_id: {
            type: "FBID"
        }
    })
}
), null);
