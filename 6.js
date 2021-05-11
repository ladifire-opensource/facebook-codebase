if (self.CavalryLogger) {
    CavalryLogger.start_js(["uWa7I"]);
}

__d("CometNumberedBadge.react", ["React", "getCometBadgeColorStyle", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        badgeCount: {
            alignItems: "bp9cbjyn",
            color: "ljqsnud1",
            display: "pq6dq46d",
            height: "datstx6m",
            justifyContent: "taijpn5t",
            paddingTop: "jb3vyjys",
            paddingEnd: "jxrgncrl",
            paddingBottom: "qt6c0cv9",
            paddingStart: "qnrpqo6b",
            width: "k4urcfbm"
        },
        rectangle: {
            borderTopStartRadius: "sibfvsnu",
            borderTopEndRadius: "px9q9ucb",
            borderBottomEndRadius: "j2ut9x2k",
            borderBottomStartRadius: "p4hiznlx"
        },
        root: {
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            display: "pq6dq46d",
            fontSize: "e9vueds3",
            fontWeight: "ekzkrbhg",
            height: "omvj5yrc",
            lineHeight: "jiuqdcnw",
            minWidth: "d82f96u3"
        }
    };
    function a(a, c) {
        var d = a.color;
        d = d === void 0 ? "red" : d;
        var e = a.overflow;
        e = e === void 0 ? 20 : e;
        var f = a.testid;
        f = a.value;
        return h.jsx("span", {
            className: (g || (g = b("stylex")))(i.root, b("getCometBadgeColorStyle")(d), f >= 10 && i.rectangle),
            "data-testid": void 0,
            ref: c,
            children: h.jsx("span", {
                className: g(i.badgeCount),
                children: f > e ? e + "+" : f
            })
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("MWChatOpenTabFromNewMessage.bs", ["bs_block", "React", "BanzaiODS", "MWChatMultitabContext.bs", "MWChatMultitabDispatcher.bs", "useCometFeedNoRoutingNavigationEventLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = b("useCometFeedNoRoutingNavigationEventLogger")()
          , d = g.useContext(b("MWChatMultitabContext.bs").context);
        return g.useCallback(function(a) {
            c(Date.now(), "", "messenger");
            b("BanzaiODS").bumpEntityKey(3185, "mwchat_tab", "open_incoming");
            if (d !== void 0)
                return b("MWChatMultitabDispatcher.bs").dispatch(!1, d, b("bs_block").__(2, [a]));
            else
                return 0
        }, [d, c])
    }
    f.useHook = a
}
), null);
__d("MWChatMultitabVisibleChatHeads.bs", ["React", "MWChatVisibleChatHeads.bs", "MWChatMultitabStateHook.bs", "MWChatDeduplicateThreadIds.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function h(a) {
        a = b("MWChatVisibleChatHeads.bs").get(a.chatHeads, a.openTabsState);
        return a[0].reverse()
    }
    function a(a) {
        var c = b("MWChatMultitabStateHook.bs").useHook_DEPRECATED(0);
        return g.useMemo(function() {
            return b("MWChatDeduplicateThreadIds.bs").get(h(c))
        }, [c])
    }
    f.get = h;
    f.useHook = a
}
), null);
__d("MWChatHeadsShared.bs", ["stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        chatHead: {
            display: "j83agx80",
            listStyle: "p7hjln8o",
            marginBottom: "oud54xpy",
            opacity: "pedkr2u6",
            position: "pmk7jnqg",
            transitionDuration: "ebpj63zs",
            transitionProperty: "flx89l3n",
            transitionTimingFunction: "msbwk0y7"
        },
        chatHeadTarget: {
            alignItems: "bp9cbjyn",
            backgroundColor: "g5ia77u1",
            display: "j83agx80",
            height: "j0lfo8lj",
            justifyContent: "taijpn5t",
            marginStart: "ocgrx2df",
            marginTop: "irj2b8pg",
            width: "etr7akla"
        }
    };
    f.styles = a
}
), null);
__d("MWChatTabContainerShared.bs", ["stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        chatTabContainer: {
            position: "pmk7jnqg",
            bottom: "lfi1tu6t",
            end: "esma6hys",
            display: "j83agx80"
        },
        chatTabContainerBottom: {
            bottom: "i09qtzwb",
            position: "l9j0dhe7"
        },
        chatTab: {
            backgroundColor: "nred35xi",
            borderTopStartRadius: "ue3kfks5",
            borderTopEndRadius: "pw54ja7n",
            borderBottomEndRadius: "uo3d90p7",
            borderBottomStartRadius: "l82x9zwi",
            boxShadow: "eu4i7hue",
            fontSize: "jq4qci2q",
            lineHeight: "a3bd9o3v",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            marginStart: "gu00c43d",
            width: "jbcpqwzg",
            transform: "fh5enmmv",
            height: "kwja4m9d",
            maxHeight: "la0exbxb",
            "@media (min-height: 1280px)": {
                height: "l8e2pc74"
            }
        },
        chatTabThin: {
            width: "elm1n26q"
        },
        chatTabNoBottomRadius: {
            borderBottomStartRadius: "mrjvor2e",
            borderBottomEndRadius: "jinzq4gt"
        },
        header: {
            width: "k4urcfbm",
            height: "m7zwrmfr",
            backgroundColor: "nred35xi",
            boxShadow: "rlauoc8d",
            transitionDuration: "tn0ko95a",
            transitionProperty: "cmqm4kv0",
            transitionTimingFunction: "b7h9ocf4"
        },
        workChatTab: {
            width: "iyyx5f41",
            height: "bipmatt0"
        },
        sidebarChatOverrides: {
            borderStart: "aypy0576",
            borderTopStartRadius: "monazrh9",
            borderTopEndRadius: "h905i5nu",
            borderBottomEndRadius: "jinzq4gt",
            borderBottomStartRadius: "mrjvor2e",
            boxShadow: "mvk8q8v6",
            marginStart: "hcukyx3x",
            "@media (max-height: 539px)": {
                height: "d7ti7np3"
            }
        }
    };
    f.styles = a
}
), null);
__d("MWUIChatTabState.bs", ["Promise", "React", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = g.createContext(void 0);
    function a(a) {
        return [a]
    }
    function c(a) {
        var c = a.tab
          , d = a.tokenProvider;
        a = a.children;
        var e = g.useContext(h);
        if (e !== void 0)
            return b("unrecoverableViolation")("You can't nest MWUIChatTabState in another MWUIChatTabState.", "messenger_web_product");
        else
            return g.createElement(h.Provider, {
                value: [c, d],
                children: a
            })
    }
    c = {
        make: c
    };
    function d(a) {
        return function(a) {
            return b("Promise").resolve(void 0)
        }
    }
    function e(a) {
        a = g.useContext(h);
        if (a !== void 0)
            return a[0];
        else
            return b("unrecoverableViolation")("This hook can only be used in a component wrapped with a MWUIChatTabState provider", "messenger_privacy_web")
    }
    function i(a) {
        a = g.useContext(h);
        if (a !== void 0) {
            a = a[1];
            if (a !== void 0)
                return a;
            else
                return function(a) {
                    return []
                }
        } else
            return b("unrecoverableViolation")("This hook can only be used in a component wrapped with a MWUIChatTabState provider", "messenger_privacy_web")
    }
    f.context = h;
    f.createActual = a;
    f.Provider = c;
    f.useLookupThreadHook = d;
    f.useTab = e;
    f.useTokenProvider = i
}
), null);
__d("MWChatThreadPingCounter.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Map();
    function h(a) {
        a = g.get(a);
        if (a == null)
            return 0;
        else
            return a
    }
    function a(a) {
        var b = h(a);
        g.set(a, b + 1 | 0);
        return 0
    }
    function b(a) {
        g.clear();
        return 0
    }
    f.getCount = h;
    f.incrementCount = a;
    f.clear = b
}
), null);
__d("ClearInterval.re", ["clearInterval"], (function(a, b, c, d, e, f) {
    a = b("clearInterval");
    f.clearIntervalTypeChecked = a;
    c = a;
    f.clearInterval = c
}
), null);
__d("CometErrorBoundary.re", ["CometErrorBoundary.react"], (function(a, b, c, d, e, f) {
    a = b("CometErrorBoundary.react");
    f.makeTypeChecked = a;
    c = a;
    f.make = c
}
), null);
__d("MessengerThreadCannotReplyReason", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BLOCKED: "blocked",
        MESSENGER_BLOCKEE: "messenger_blockee",
        COMPOSER_DISABLED_BOT: "composer_disabled_bot",
        HAS_EMAIL_PARTICIPANT: "has_email_participant",
        OBJECT_ORIGINATED: "object_originated",
        READ_ONLY: "read_only",
        VIEWER_NOT_SUBSCRIBED: "viewer_not_subscribed",
        RECIPIENTS_NOT_LOADABLE: "recipients_not_loadable",
        RECIPIENTS_UNAVAILABLE: "recipients_unavailable",
        RECIPIENTS_INVALID: "recipients_invalid",
        RECIPIENTS_INACTIVE_WORK_ACC: "recipients_inactive_work_account",
        MONTAGE_NOT_AUTHOR: "montage_not_author",
        VIEWER_MUTED_IN_FBGROUP: "viewer_muted_in_fbgroup"
    });
    e.exports = a
}
), null);
__d("MessengerThreadCannotReplyReason.bs", ["bs_js_dict", "MessengerThreadCannotReplyReason"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a == null)
            return;
        else
            return b("bs_js_dict").get(b("MessengerThreadCannotReplyReason"), a)
    }
    function c(a) {
        if (a == null)
            return null;
        else if (a !== 0)
            switch (a - 1 | 0) {
            case 0:
                return b("MessengerThreadCannotReplyReason").RECIPIENTS_NOT_LOADABLE;
            case 1:
                return b("MessengerThreadCannotReplyReason").BLOCKED;
            case 2:
                return b("MessengerThreadCannotReplyReason").MESSENGER_BLOCKEE
            }
        else
            return b("MessengerThreadCannotReplyReason").BLOCKED
    }
    f.fromName = a;
    f.fromMessageThreadCannotReplyReason = c
}
), null);
__d("debounceAcrossTransitions", ["debounce"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, c, d) {
        return b("debounce")(a, c, d, !0)
    }
}
), null);
__d("XGraphQLBatchAPIController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/api/graphqlbatch/", {
        queries: {
            type: "String"
        },
        batch_name: {
            type: "String"
        },
        scheduler: {
            type: "Enum",
            enumType: 1
        },
        shared_params: {
            type: "String"
        },
        fb_api_req_friendly_name: {
            type: "String"
        },
        uft_request_id: {
            type: "String"
        }
    })
}
), null);
__d("WebGraphQL", ["errorCode", "ActorURI", "AsyncRequest", "Deferred", "FBLogger", "WebGraphQLConfig", "XGraphQLBatchAPIController", "getAsyncParams"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "for (;;);"
      , i = h.length;
    function j(a) {
        var c = a.getURIBuilder().getURI()
          , d = {
            exec: function(a, b) {
                return d.execAll([a], b)[0]
            },
            execAll: function(a, d) {
                var e = {}
                  , f = {};
                a = a.map(function(a, c) {
                    c = "o" + c;
                    e[c] = {
                        doc_id: a.__getDocID(),
                        query_params: a.__getVariables()
                    };
                    a = new (b("Deferred"))();
                    f[c] = a;
                    return a.getPromise()
                });
                var g = babelHelpers["extends"]({}, b("getAsyncParams")("POST"));
                d && d.actorID != null && (g[b("ActorURI").PARAMETER_ACTOR] = d.actorID);
                var j = d && d.batchName ? {
                    batch_name: d.batchName
                } : {};
                j = new (b("AsyncRequest"))().setURI(c).setOption("suppressEvaluation", !0).setMethod("POST").setRequestHeader("Content-Type", "application/x-www-form-urlencoded").setData(babelHelpers["extends"]({}, j, g, {
                    queries: JSON.stringify(e)
                })).setHandler(function(a) {
                    a = a.getPayload();
                    a = a.response;
                    try {
                        if (a.startsWith(h)) {
                            var c = a.substring(i);
                            c = JSON.parse(c);
                            if (c.error == 1357001) {
                                Object.keys(f).forEach(function(a) {
                                    f[a].isSettled() || f[a].reject({
                                        data: {},
                                        errors: [{
                                            message: "Not logged in.",
                                            severity: "CRITICAL",
                                            should_end_session: !0
                                        }]
                                    })
                                });
                                return
                            }
                        }
                        c = a.split("\r\n");
                        c.pop();
                        c = c.map(function(a) {
                            return JSON.parse(a)
                        });
                        c.forEach(function(a) {
                            return Object.keys(a).forEach(function(b) {
                                var c = f[b];
                                if (c) {
                                    b = a[b];
                                    b.errors ? c.reject(b) : b.data ? c.resolve(b.data) : c.reject({
                                        data: {},
                                        errors: [{
                                            message: "Unexpected response received from server.",
                                            severity: "CRITICAL",
                                            response: b
                                        }]
                                    })
                                }
                            })
                        })
                    } catch (c) {
                        b("FBLogger")("webgraphql").catching(c).mustfix("Bad response: ", "%s%s", a.substr(0, 250), a.length > 250 ? "[truncated]" : "")
                    }
                    Object.keys(f).forEach(function(a) {
                        f[a].isSettled() || f[a].reject({
                            data: {},
                            errors: [{
                                message: "No response received from server.",
                                severity: "CRITICAL"
                            }]
                        })
                    })
                }).setTimeoutHandler(b("WebGraphQLConfig").timeout, function() {
                    Object.keys(f).forEach(function(a) {
                        f[a].isSettled() || f[a].reject({
                            data: {},
                            errors: [{
                                message: "Request timed out.",
                                severity: "CRITICAL"
                            }]
                        })
                    })
                }).setErrorHandler(function(a) {
                    var b = a.getErrorDescription();
                    Object.keys(f).forEach(function(c) {
                        f[c].isSettled() || f[c].reject({
                            data: {},
                            errors: [{
                                message: b,
                                severity: "CRITICAL",
                                error: a.getError()
                            }]
                        })
                    })
                });
                d && d.msgrRegion && j.setRequestHeader("X-MSGR-Region", d.msgrRegion);
                j.setAllowCrossPageTransition(!0);
                j.send();
                return a
            },
            __forController: j
        };
        return d
    }
    a = j(b("XGraphQLBatchAPIController"));
    c = a;
    e.exports = c
}
), null);
__d("DisplayGenderConst", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        UNKNOWN: "UNKNOWN",
        FEMALE: "FEMALE",
        MALE: "MALE",
        NEUTER: "NEUTER"
    });
    e.exports = a
}
), null);
__d("MessageProfileRangeType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NONE: "n",
        PROFILE: "p",
        THREAD: "t",
        THREAD_ACTIVE: "a"
    });
    e.exports = a
}
), null);
__d("MessageThreadUnsendabilityStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CAN_UNSEND: "can_unsend",
        DENY_FOR_SPECIFIC_IDS: "deny_for_specific_ids",
        DENY_IF_THREAD_CONTAINS_PAU: "deny_if_thread_contains_pau",
        DENY_IF_THREAD_CONTAINS_WORK_USER: "deny_if_thread_contains_work_user",
        DENY_IF_THREAD_CONTAINS_WORK_USER_FAILING_KILLSWITCH: "deny_if_thread_contains_work_user_failing_killswitch",
        DENY_IF_PAGE_THREAD: "deny_if_page_thread",
        DENY_IF_MARKETPLACE_THREAD: "deny_if_marketplace_thread",
        DENY_IF_CANNOT_LOAD_THREAD: "deny_if_cannot_load_thread",
        DENY_IF_CANONICAL_THREAD_CONTAINS_BLOCKED_USERS: "deny_if_canonical_thread_contains_blocked_users",
        DENY_IF_CANNOT_REPLY_TO_VIEWER_THREAD: "deny_if_cannot_reply_to_viewer_thread"
    });
    e.exports = a
}
), null);
__d("MessageUnsendabilityStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CAN_UNSEND: "can_unsend",
        DENY_LOG_MESSAGE: "deny_log_message",
        DENY_TOMBSTONE_MESSAGE: "deny_tombstone_message",
        DENY_FOR_NON_SENDER: "deny_for_non_sender",
        DENY_P2P_PAYMENT: "deny_p2p_payment",
        DENY_STORY_REACTION: "deny_story_reaction",
        DENY_BLOB_ATTACHMENT: "deny_blob_attachment",
        DENY_MESSAGE_NOT_FOUND: "deny_message_not_found"
    });
    e.exports = a
}
), null);
__d("PaymentModulesClient", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        DONATION_P4P: "donation_p4p",
        MOR_DONATIONS: "mor_donations",
        PPGF_DONATION: "ppgf_donation",
        DONATION_P4C: "donation_p4c",
        INSTANT_EXPERIENCES: "instant_experiences",
        BUSINESS_PLATFORM_COMMERCE: "business_platform_commerce",
        MESSENGER_OMNIM: "messenger_omnim",
        MESSENGER_PLATFORM: "messenger_platform",
        PAGES_COMMERCE: "pages_commerce",
        MESSAGING_COMMERCE: "messaging_commerce",
        SHIPPING_LABEL: "shipping_label",
        SYNCHRONOUS_COMPONENT_FLOW: "synchronous_component_flow",
        PAGES_SOLUTION: "pages_solution",
        CHECKOUT_EXPERIENCES: "checkout_experiences",
        C2C_CHECKOUT_EXPERIENCES: "c2c_checkout_experiences",
        MOBILE_TOP_UP: "mobile_top_up",
        MOCK: "mock",
        ADVERTISER_SUBSCRIPTION: "advertiser_subscription",
        NMOR_FB_BROWSER_PAY: "fb_browser_payment"
    });
    e.exports = a
}
), null);
__d("bs_caml_exceptions", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        contents: 0
    };
    function a(a) {
        a[1] = g.contents;
        g.contents = g.contents + 1;
        return a
    }
    function h(a) {
        g.contents = g.contents + 1;
        return g.contents
    }
    function b(a) {
        var b = h(0);
        a = [a, b];
        a.tag = 248;
        return a
    }
    function c(a) {
        if (a === void 0)
            return !1;
        else if (a.tag === 248)
            return !0;
        else {
            a = a[0];
            if (a !== void 0)
                return a.tag === 248;
            else
                return !1
        }
    }
    f.caml_set_oo_id = a;
    f.caml_fresh_oo_id = h;
    f.create = b;
    f.caml_is_extension = c
}
), null);
__d("bs_caml_js_exceptions", ["bs_caml_option", "bs_caml_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("bs_caml_exceptions").create("Caml_js_exceptions.Error");
    function a(a) {
        if (b("bs_caml_exceptions").caml_is_extension(a))
            return a;
        else
            return [g, a]
    }
    function c(a) {
        if (a[0] === g)
            return b("bs_caml_option").some(a[1])
    }
    f.$$Error = g;
    f.internalToOCamlException = a;
    f.caml_as_js_exn = c
}
), null);
__d("bs_array", ["bs_curry", "bs_caml_obj", "bs_caml_array", "bs_caml_exceptions", "bs_caml_js_exceptions", "bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("bs_caml_array").caml_make_float_vect
      , h = {};
    function a(a, c) {
        if (a === 0)
            return [];
        else {
            if (a < 0)
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.init"];
            var d = b("bs_caml_array").caml_make_vect(a, b("bs_curry")._1(c, 0));
            for (var e = 1, a = a - 1 | 0; e <= a; ++e)
                d[e] = b("bs_curry")._1(c, e);
            return d
        }
    }
    function c(a, c, d) {
        var e = b("bs_caml_array").caml_make_vect(a, []);
        for (var f = 0, a = a - 1 | 0; f <= a; ++f)
            e[f] = b("bs_caml_array").caml_make_vect(c, d);
        return e
    }
    function i(a) {
        var c = a.length;
        if (c === 0)
            return [];
        else
            return b("bs_caml_array").caml_array_sub(a, 0, c)
    }
    function d(a, c) {
        var d = a.length;
        if (d === 0)
            return i(c);
        else if (c.length === 0)
            return b("bs_caml_array").caml_array_sub(a, 0, d);
        else
            return a.concat(c)
    }
    function e(a, c, d) {
        if (c < 0 || d < 0 || c > (a.length - d | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.sub"];
        return b("bs_caml_array").caml_array_sub(a, c, d)
    }
    function j(a, c, d, e) {
        if (c < 0 || d < 0 || c > (a.length - d | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.fill"];
        for (var f = c, c = (c + d | 0) - 1 | 0; f <= c; ++f)
            a[f] = e;
        return 0
    }
    function k(a, c, d, e, f) {
        if (f < 0 || c < 0 || c > (a.length - f | 0) || e < 0 || e > (d.length - f | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.blit"];
        return b("bs_caml_array").caml_array_blit(a, c, d, e, f)
    }
    function l(a, c) {
        for (var d = 0, e = c.length - 1 | 0; d <= e; ++d)
            b("bs_curry")._1(a, c[d]);
        return 0
    }
    function m(a, c, d) {
        if (c.length !== d.length)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.iter2: arrays must have the same length"];
        for (var e = 0, f = c.length - 1 | 0; e <= f; ++e)
            b("bs_curry")._2(a, c[e], d[e]);
        return 0
    }
    function n(a, c) {
        var d = c.length;
        if (d === 0)
            return [];
        else {
            var e = b("bs_caml_array").caml_make_vect(d, b("bs_curry")._1(a, c[0]));
            for (var f = 1, d = d - 1 | 0; f <= d; ++f)
                e[f] = b("bs_curry")._1(a, c[f]);
            return e
        }
    }
    function o(a, c, d) {
        var e = c.length
          , f = d.length;
        if (e !== f)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.map2: arrays must have the same length"];
        if (e === 0)
            return [];
        else {
            f = b("bs_caml_array").caml_make_vect(e, b("bs_curry")._2(a, c[0], d[0]));
            for (var g = 1, e = e - 1 | 0; g <= e; ++g)
                f[g] = b("bs_curry")._2(a, c[g], d[g]);
            return f
        }
    }
    function p(a, c) {
        for (var d = 0, e = c.length - 1 | 0; d <= e; ++d)
            b("bs_curry")._2(a, d, c[d]);
        return 0
    }
    function q(a, c) {
        var d = c.length;
        if (d === 0)
            return [];
        else {
            var e = b("bs_caml_array").caml_make_vect(d, b("bs_curry")._2(a, 0, c[0]));
            for (var f = 1, d = d - 1 | 0; f <= d; ++f)
                e[f] = b("bs_curry")._2(a, f, c[f]);
            return e
        }
    }
    function r(a) {
        var b = a.length - 1 | 0
          , c = 0;
        while (!0) {
            var d = c
              , e = b;
            if (e < 0)
                return d;
            else {
                c = [a[e], d];
                b = e - 1 | 0;
                continue
            }
        }
    }
    function s(a, b) {
        while (!0) {
            var c = b
              , d = a;
            if (c) {
                b = c[1];
                a = d + 1 | 0;
                continue
            } else
                return d
        }
    }
    function t(a) {
        if (a) {
            var c = b("bs_caml_array").caml_make_vect(s(0, a), a[0])
              , d = 1;
            a = a[1];
            while (!0) {
                var e = a
                  , f = d;
                if (e) {
                    c[f] = e[0];
                    a = e[1];
                    d = f + 1 | 0;
                    continue
                } else
                    return c
            }
        } else
            return []
    }
    function u(a, c, d) {
        c = c;
        for (var e = 0, f = d.length - 1 | 0; e <= f; ++e)
            c = b("bs_curry")._2(a, c, d[e]);
        return c
    }
    function v(a, c, d) {
        d = d;
        for (var e = c.length - 1 | 0; e >= 0; --e)
            d = b("bs_curry")._2(a, c[e], d);
        return d
    }
    function w(a, c) {
        var d = c.length
          , e = 0;
        while (!0) {
            var f = e;
            if (f === d)
                return !1;
            else if (b("bs_curry")._1(a, c[f]))
                return !0;
            else {
                e = f + 1 | 0;
                continue
            }
        }
    }
    function x(a, c) {
        var d = c.length
          , e = 0;
        while (!0) {
            var f = e;
            if (f === d)
                return !0;
            else if (b("bs_curry")._1(a, c[f])) {
                e = f + 1 | 0;
                continue
            } else
                return !1
        }
    }
    function y(a, c) {
        var d = c.length
          , e = 0;
        while (!0) {
            var f = e;
            if (f === d)
                return !1;
            else if (b("bs_caml_obj").caml_equal(c[f], a))
                return !0;
            else {
                e = f + 1 | 0;
                continue
            }
        }
    }
    function z(a, b) {
        var c = b.length
          , d = 0;
        while (!0) {
            var e = d;
            if (e === c)
                return !1;
            else if (a === b[e])
                return !0;
            else {
                d = e + 1 | 0;
                continue
            }
        }
    }
    var A = b("bs_caml_exceptions").create("Array.Bottom");
    function B(a, c) {
        var d = function(d, e) {
            var f = ((e + e | 0) + e | 0) + 1 | 0
              , g = f;
            if ((f + 2 | 0) < d) {
                b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(c, f), b("bs_caml_array").caml_array_get(c, f + 1 | 0)) < 0 && (g = f + 1 | 0);
                b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(c, g), b("bs_caml_array").caml_array_get(c, f + 2 | 0)) < 0 && (g = f + 2 | 0);
                return g
            } else if ((f + 1 | 0) < d && b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(c, f), b("bs_caml_array").caml_array_get(c, f + 1 | 0)) < 0)
                return f + 1 | 0;
            else if (f < d)
                return f;
            else
                throw [A, e]
        }
          , e = function(e, f, g) {
            try {
                e = e;
                f = f;
                var h = g;
                while (!0) {
                    var i = f
                      , j = d(e, i);
                    if (b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(c, j), h) > 0) {
                        b("bs_caml_array").caml_array_set(c, i, b("bs_caml_array").caml_array_get(c, j));
                        f = j;
                        continue
                    } else
                        return b("bs_caml_array").caml_array_set(c, i, h)
                }
            } catch (a) {
                j = b("bs_caml_js_exceptions").internalToOCamlException(a);
                if (j[0] === A)
                    return b("bs_caml_array").caml_array_set(c, j[1], g);
                else
                    throw j
            }
        }
          , f = function(a, e) {
            try {
                a = a;
                e = e;
                while (!0) {
                    var f = e
                      , g = d(a, f);
                    b("bs_caml_array").caml_array_set(c, f, b("bs_caml_array").caml_array_get(c, g));
                    e = g;
                    continue
                }
            } catch (a) {
                f = b("bs_caml_js_exceptions").internalToOCamlException(a);
                if (f[0] === A)
                    return f[1];
                else
                    throw f
            }
        }
          , g = function(e, f) {
            while (!0) {
                var d = e
                  , g = (d - 1 | 0) / 3 | 0;
                if (d === g)
                    throw [b("bs_caml_builtin_exceptions").assert_failure, ["array.ml", 238, 4]];
                if (b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(c, g), f) < 0) {
                    b("bs_caml_array").caml_array_set(c, d, b("bs_caml_array").caml_array_get(c, g));
                    if (g > 0) {
                        e = g;
                        continue
                    } else
                        return b("bs_caml_array").caml_array_set(c, 0, f)
                } else
                    return b("bs_caml_array").caml_array_set(c, d, f)
            }
        }
          , h = c.length;
        for (var i = ((h + 1 | 0) / 3 | 0) - 1 | 0; i >= 0; --i)
            e(h, i, b("bs_caml_array").caml_array_get(c, i));
        for (var i = h - 1 | 0; i >= 2; --i) {
            e = b("bs_caml_array").caml_array_get(c, i);
            b("bs_caml_array").caml_array_set(c, i, b("bs_caml_array").caml_array_get(c, 0));
            g(f(i, 0), e)
        }
        if (h > 1) {
            f = (e = b("bs_caml_array")).caml_array_get(c, 1);
            e.caml_array_set(c, 1, e.caml_array_get(c, 0));
            return e.caml_array_set(c, 0, f)
        } else
            return 0
    }
    function C(a, c) {
        var d = function(d, e, f, g, h, i, j) {
            e = d + e | 0;
            h = g + h | 0;
            var l = d;
            d = b("bs_caml_array").caml_array_get(c, d);
            var m = g;
            g = b("bs_caml_array").caml_array_get(f, g);
            j = j;
            while (!0) {
                var n = j
                  , o = g
                  , p = m
                  , q = d
                  , r = l;
                if (b("bs_curry")._2(a, q, o) <= 0) {
                    b("bs_caml_array").caml_array_set(i, n, q);
                    q = r + 1 | 0;
                    if (q < e) {
                        j = n + 1 | 0;
                        d = b("bs_caml_array").caml_array_get(c, q);
                        l = q;
                        continue
                    } else
                        return k(f, p, i, n + 1 | 0, h - p | 0)
                } else {
                    b("bs_caml_array").caml_array_set(i, n, o);
                    q = p + 1 | 0;
                    if (q < h) {
                        j = n + 1 | 0;
                        g = b("bs_caml_array").caml_array_get(f, q);
                        m = q;
                        continue
                    } else
                        return k(c, r, i, n + 1 | 0, e - r | 0)
                }
            }
        }
          , e = function(d, e, f, g) {
            for (var h = 0, g = g - 1 | 0; h <= g; ++h) {
                var i = b("bs_caml_array").caml_array_get(c, d + h | 0)
                  , j = (f + h | 0) - 1 | 0;
                while (j >= f && b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(e, j), i) > 0)
                    b("bs_caml_array").caml_array_set(e, j + 1 | 0, b("bs_caml_array").caml_array_get(e, j)),
                    j = j - 1 | 0;
                b("bs_caml_array").caml_array_set(e, j + 1 | 0, i)
            }
            return 0
        }
          , f = function a(f, g, h, i) {
            if (i <= 5)
                return e(f, g, h, i);
            else {
                var b = i / 2 | 0;
                i = i - b | 0;
                a(f + b | 0, g, h + b | 0, i);
                a(f, c, f + i | 0, b);
                return d(f + i | 0, b, g, h + b | 0, i, g, h)
            }
        }
          , g = c.length;
        if (g <= 5)
            return e(0, c, 0, g);
        else {
            var h = g / 2 | 0;
            g = g - h | 0;
            var i = b("bs_caml_array").caml_make_vect(g, b("bs_caml_array").caml_array_get(c, 0));
            f(h, i, 0, g);
            f(0, c, g, h);
            return d(g, h, i, 0, g, c, 0)
        }
    }
    var D = c
      , E = b("bs_caml_array").caml_array_concat
      , F = C;
    f.make_float = g;
    f.init = a;
    f.make_matrix = c;
    f.create_matrix = D;
    f.append = d;
    f.concat = E;
    f.sub = e;
    f.copy = i;
    f.fill = j;
    f.blit = k;
    f.to_list = r;
    f.of_list = t;
    f.iter = l;
    f.iteri = p;
    f.map = n;
    f.mapi = q;
    f.fold_left = u;
    f.fold_right = v;
    f.iter2 = m;
    f.map2 = o;
    f.for_all = x;
    f.exists = w;
    f.mem = y;
    f.memq = z;
    f.sort = B;
    f.stable_sort = C;
    f.fast_sort = F;
    f.Floatarray = h
}
), null);
__d("bs_caml_bytes", ["bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        if (c < 0 || c >= a.length)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "index out of bounds"];
        return a[c]
    }
    function c(a, b, c, d) {
        if (c > 0) {
            for (var e = b, c = (c + b | 0) - 1 | 0; e <= c; ++e)
                a[e] = d;
            return 0
        } else
            return 0
    }
    function d(a) {
        if (a < 0)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.create"];
        var c = new Array(a);
        for (var d = 0, a = a - 1 | 0; d <= a; ++d)
            c[d] = 0;
        return c
    }
    function g(a, b, c, d, e) {
        if (e > 0)
            if (a === c) {
                var f = a
                  , g = b
                  , h = d
                  , i = e;
                if (g < h) {
                    var j = (f.length - h | 0) - 1 | 0
                      , k = i - 1 | 0;
                    k = j > k ? k : j;
                    for (var j = k; j >= 0; --j)
                        f[h + j | 0] = f[g + j | 0];
                    return 0
                } else if (g > h) {
                    k = (f.length - g | 0) - 1 | 0;
                    j = i - 1 | 0;
                    i = k > j ? j : k;
                    for (var j = 0; j <= i; ++j)
                        f[h + j | 0] = f[g + j | 0];
                    return 0
                } else
                    return 0
            } else {
                k = a.length - b | 0;
                if (e <= k) {
                    for (var g = 0, h = e - 1 | 0; g <= h; ++g)
                        c[d + g | 0] = a[b + g | 0];
                    return 0
                } else {
                    for (var j = 0, i = k - 1 | 0; j <= i; ++j)
                        c[d + j | 0] = a[b + j | 0];
                    for (var f = k, g = e - 1 | 0; f <= g; ++f)
                        c[d + f | 0] = 0;
                    return 0
                }
            }
        else
            return 0
    }
    function e(a) {
        var b = a
          , c = 0;
        a = a.length;
        var d = ""
          , e = a;
        if (c === 0 && a <= 4096 && a === b.length)
            return String.fromCharCode.apply(null, b);
        else {
            c = 0;
            while (e > 0) {
                a = e < 1024 ? e : 1024;
                var f = new Array(a);
                g(b, c, f, 0, a);
                d = d + String.fromCharCode.apply(null, f);
                e = e - a | 0;
                c = c + a | 0
            }
            return d
        }
    }
    function h(a, b, c, d, e) {
        if (e > 0) {
            var f = a.length - b | 0;
            if (e <= f) {
                for (var g = 0, h = e - 1 | 0; g <= h; ++g)
                    c[d + g | 0] = a.charCodeAt(b + g | 0);
                return 0
            } else {
                for (var g = 0, h = f - 1 | 0; g <= h; ++g)
                    c[d + g | 0] = a.charCodeAt(b + g | 0);
                for (var g = f, b = e - 1 | 0; g <= b; ++g)
                    c[d + g | 0] = 0;
                return 0
            }
        } else
            return 0
    }
    function i(a) {
        var b = a.length
          , c = new Array(b);
        for (var d = 0, b = b - 1 | 0; d <= b; ++d)
            c[d] = a.charCodeAt(d);
        return c
    }
    f.caml_create_bytes = d;
    f.caml_fill_bytes = c;
    f.get = a;
    f.bytes_to_string = e;
    f.caml_blit_bytes = g;
    f.caml_blit_string = h;
    f.bytes_of_string = i
}
), null);
__d("bs_caml_external_polyfill", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        if (typeof globalThis !== "undefined")
            return globalThis;
        if (typeof self !== "undefined")
            return self;
        if (typeof window !== "undefined")
            return window;
        if (typeof a !== "undefined")
            return a;
        if (typeof this !== "undefined")
            return this;
        throw new Error("Unable to locate global `this`")
    };
    b = function(a) {
        var b = g();
        if (b[a] === void 0)
            throw new Error(a + " not polyfilled by BuckleScript yet\n");
        return b[a]
    }
    ;
    c = function(a, b) {
        var c = g();
        c[a] = b;
        return 0
    }
    ;
    f.getGlobalThis = g;
    f.resolve = b;
    f.register = c
}
), null);
__d("bs_caml_io", ["bs_curry"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        buffer: "",
        output: function(a, b) {
            a = b.length - 1 | 0;
            if (typeof process !== "undefined" && process.stdout && process.stdout.write)
                return process.stdout.write(b);
            else if (b[a] === "\n")
                return 0;
            else
                return 0
        }
    }
      , h = {
        buffer: "",
        output: function(a, b) {
            a = b.length - 1 | 0;
            if (b[a] === "\n")
                return 0;
            else
                return 0
        }
    };
    function i(a) {
        if (a.buffer !== "") {
            b("bs_curry")._2(a.output, a, a.buffer);
            a.buffer = "";
            return 0
        } else
            return 0
    }
    function j(a, b, c, d) {
        b = c === 0 && d === b.length ? b : b.slice(c, d);
        if (typeof process !== "undefined" && process.stdout && process.stdout.write && a === g)
            return process.stdout.write(b);
        else {
            c = b.lastIndexOf("\n");
            if (c < 0) {
                a.buffer = a.buffer + b;
                return 0
            } else {
                a.buffer = a.buffer + b.slice(0, c + 1 | 0);
                i(a);
                a.buffer = a.buffer + b.slice(c + 1 | 0);
                return 0
            }
        }
    }
    function a(a, b) {
        return j(a, String.fromCharCode(b), 0, 1)
    }
    function c(a) {
        return [g, [h, 0]]
    }
    d = void 0;
    f.stdin = d;
    f.stdout = g;
    f.stderr = h;
    f.caml_ml_flush = i;
    f.caml_ml_output = j;
    f.caml_ml_output_char = a;
    f.caml_ml_out_channels_list = c
}
), null);
__d("bs_caml_string", ["bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        if (c >= a.length || c < 0)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "index out of bounds"];
        return a.charCodeAt(c)
    }
    f.get = a
}
), null);
__d("bs_caml_sys", ["bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (typeof process === "undefined" || process.env === void 0)
            throw b("bs_caml_builtin_exceptions").not_found;
        a = process.env[a];
        if (a !== void 0)
            return a;
        else
            throw b("bs_caml_builtin_exceptions").not_found
    }
    var g = function(a) {
        if (typeof process !== "undefined" && process.platform === "win32")
            return "Win32";
        else
            return "Unix"
    };
    function c(a) {
        if (typeof process === "undefined" || process.uptime === void 0)
            return -1;
        else
            return process.uptime()
    }
    function d(a) {
        return [((Date.now() | 0) ^ 4294967295) * Math.random() | 0]
    }
    function e(a) {
        return 127
    }
    var h = function(a) {
        return typeof process === "undefined" || process.cwd === void 0 ? "/" : process.cwd()
    };
    function i(a) {
        if (typeof process === "undefined")
            return ["", [""]];
        else {
            a = process.argv;
            if (a == null)
                return ["", [""]];
            else
                return [a[0], a]
        }
    }
    function j(a) {
        if (typeof process !== "undefined")
            return process.exit(a);
        else
            return 0
    }
    function k(a) {
        throw [b("bs_caml_builtin_exceptions").failure, "caml_sys_is_directory not implemented"]
    }
    function l(a) {
        throw [b("bs_caml_builtin_exceptions").failure, "caml_sys_file_exists not implemented"]
    }
    f.caml_sys_getenv = a;
    f.caml_sys_time = c;
    f.os_type = g;
    f.caml_sys_random_seed = d;
    f.caml_sys_system_command = e;
    f.caml_sys_getcwd = h;
    f.caml_sys_get_argv = i;
    f.caml_sys_exit = j;
    f.caml_sys_is_directory = k;
    f.caml_sys_file_exists = l
}
), null);
__d("bs_camlinternalFormatBasics", ["bs_block"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        if (typeof a === "number")
            return 0;
        else
            switch (a.tag | 0) {
            case 0:
                return b("bs_block").__(0, [g(a[0])]);
            case 1:
                return b("bs_block").__(1, [g(a[0])]);
            case 2:
                return b("bs_block").__(2, [g(a[0])]);
            case 3:
                return b("bs_block").__(3, [g(a[0])]);
            case 4:
                return b("bs_block").__(4, [g(a[0])]);
            case 5:
                return b("bs_block").__(5, [g(a[0])]);
            case 6:
                return b("bs_block").__(6, [g(a[0])]);
            case 7:
                return b("bs_block").__(7, [g(a[0])]);
            case 8:
                return b("bs_block").__(8, [a[0], g(a[1])]);
            case 9:
                var c = a[0];
                return b("bs_block").__(9, [c, c, g(a[2])]);
            case 10:
                return b("bs_block").__(10, [g(a[0])]);
            case 11:
                return b("bs_block").__(11, [g(a[0])]);
            case 12:
                return b("bs_block").__(12, [g(a[0])]);
            case 13:
                return b("bs_block").__(13, [g(a[0])]);
            case 14:
                return b("bs_block").__(14, [g(a[0])])
            }
    }
    function h(a, c) {
        if (typeof a === "number")
            return c;
        else
            switch (a.tag | 0) {
            case 0:
                return b("bs_block").__(0, [h(a[0], c)]);
            case 1:
                return b("bs_block").__(1, [h(a[0], c)]);
            case 2:
                return b("bs_block").__(2, [h(a[0], c)]);
            case 3:
                return b("bs_block").__(3, [h(a[0], c)]);
            case 4:
                return b("bs_block").__(4, [h(a[0], c)]);
            case 5:
                return b("bs_block").__(5, [h(a[0], c)]);
            case 6:
                return b("bs_block").__(6, [h(a[0], c)]);
            case 7:
                return b("bs_block").__(7, [h(a[0], c)]);
            case 8:
                return b("bs_block").__(8, [a[0], h(a[1], c)]);
            case 9:
                return b("bs_block").__(9, [a[0], a[1], h(a[2], c)]);
            case 10:
                return b("bs_block").__(10, [h(a[0], c)]);
            case 11:
                return b("bs_block").__(11, [h(a[0], c)]);
            case 12:
                return b("bs_block").__(12, [h(a[0], c)]);
            case 13:
                return b("bs_block").__(13, [h(a[0], c)]);
            case 14:
                return b("bs_block").__(14, [h(a[0], c)])
            }
    }
    function i(a, c) {
        if (typeof a === "number")
            return c;
        else
            switch (a.tag | 0) {
            case 0:
                return b("bs_block").__(0, [i(a[0], c)]);
            case 1:
                return b("bs_block").__(1, [i(a[0], c)]);
            case 2:
                return b("bs_block").__(2, [a[0], i(a[1], c)]);
            case 3:
                return b("bs_block").__(3, [a[0], i(a[1], c)]);
            case 4:
                return b("bs_block").__(4, [a[0], a[1], a[2], i(a[3], c)]);
            case 5:
                return b("bs_block").__(5, [a[0], a[1], a[2], i(a[3], c)]);
            case 6:
                return b("bs_block").__(6, [a[0], a[1], a[2], i(a[3], c)]);
            case 7:
                return b("bs_block").__(7, [a[0], a[1], a[2], i(a[3], c)]);
            case 8:
                return b("bs_block").__(8, [a[0], a[1], a[2], i(a[3], c)]);
            case 9:
                return b("bs_block").__(9, [a[0], i(a[1], c)]);
            case 10:
                return b("bs_block").__(10, [i(a[0], c)]);
            case 11:
                return b("bs_block").__(11, [a[0], i(a[1], c)]);
            case 12:
                return b("bs_block").__(12, [a[0], i(a[1], c)]);
            case 13:
                return b("bs_block").__(13, [a[0], a[1], i(a[2], c)]);
            case 14:
                return b("bs_block").__(14, [a[0], a[1], i(a[2], c)]);
            case 15:
                return b("bs_block").__(15, [i(a[0], c)]);
            case 16:
                return b("bs_block").__(16, [i(a[0], c)]);
            case 17:
                return b("bs_block").__(17, [a[0], i(a[1], c)]);
            case 18:
                return b("bs_block").__(18, [a[0], i(a[1], c)]);
            case 19:
                return b("bs_block").__(19, [i(a[0], c)]);
            case 20:
                return b("bs_block").__(20, [a[0], a[1], i(a[2], c)]);
            case 21:
                return b("bs_block").__(21, [a[0], i(a[1], c)]);
            case 22:
                return b("bs_block").__(22, [i(a[0], c)]);
            case 23:
                return b("bs_block").__(23, [a[0], i(a[1], c)]);
            case 24:
                return b("bs_block").__(24, [a[0], a[1], i(a[2], c)])
            }
    }
    f.concat_fmtty = h;
    f.erase_rel = g;
    f.concat_fmt = i
}
), null);
__d("bs_int64", ["bs_caml_int64", "bs_caml_format", "bs_caml_js_exceptions", "bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return b("bs_caml_int64").sub(a, [0, 1])
    }
    function c(a) {
        if (b("bs_caml_int64").ge(a, [0, 0]))
            return a;
        else
            return b("bs_caml_int64").neg(a)
    }
    function d(a) {
        return b("bs_caml_int64").xor(a, [-1, 4294967295])
    }
    function e(a) {
        try {
            return b("bs_caml_format").caml_int64_of_string(a)
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a[0] === b("bs_caml_builtin_exceptions").failure)
                return;
            else
                throw a
        }
    }
    var g = b("bs_caml_int64").compare;
    function h(a, c) {
        return b("bs_caml_int64").compare(a, c) === 0
    }
    var i = [0, 0]
      , j = [0, 1]
      , k = [-1, 4294967295]
      , l = b("bs_caml_int64").succ
      , m = [2147483647, 4294967295]
      , n = [-2147483648, 0]
      , o = b("bs_caml_int64").to_string;
    f.zero = i;
    f.one = j;
    f.minus_one = k;
    f.succ = l;
    f.pred = a;
    f.abs = c;
    f.max_int = m;
    f.min_int = n;
    f.lognot = d;
    f.of_string_opt = e;
    f.to_string = o;
    f.compare = g;
    f.equal = h
}
), null);
__d("bs_js_json", ["bs_block", "bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        var c = typeof a;
        if (c === "string")
            return b("bs_block").__(0, [a]);
        else if (c === "number")
            return b("bs_block").__(1, [a]);
        else if (c === "boolean")
            if (a === !0)
                return 1;
            else
                return 0;
        else if (a === null)
            return 2;
        else if (Array.isArray(a))
            return b("bs_block").__(3, [a]);
        else
            return b("bs_block").__(2, [a])
    }
    function c(a, b) {
        switch (b) {
        case 0:
            return typeof a === "string";
        case 1:
            return typeof a === "number";
        case 2:
            if (a !== null && typeof a === "object")
                return !Array.isArray(a);
            else
                return !1;
        case 3:
            return Array.isArray(a);
        case 4:
            return typeof a === "boolean";
        case 5:
            return a === null
        }
    }
    function d(a) {
        if (typeof a === "string")
            return a
    }
    function e(a) {
        if (typeof a === "number")
            return a
    }
    function g(a) {
        if (typeof a === "object" && !Array.isArray(a) && a !== null)
            return b("bs_caml_option").some(a)
    }
    function h(a) {
        if (Array.isArray(a))
            return a
    }
    function i(a) {
        if (typeof a === "boolean")
            return a
    }
    function j(a) {
        if (a === null)
            return null
    }
    f.classify = a;
    f.test = c;
    f.decodeString = d;
    f.decodeNumber = e;
    f.decodeObject = g;
    f.decodeArray = h;
    f.decodeBoolean = i;
    f.decodeNull = j
}
), null);
__d("bs_js_null_undefined", ["bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
        if (a == null)
            return a;
        else
            return b(a)
    }
    function c(a, b) {
        if (a == null)
            return 0;
        else
            return b(a)
    }
    function d(a) {
        if (a !== void 0)
            return b("bs_caml_option").valFromOption(a)
    }
    e = d;
    f.bind = a;
    f.iter = c;
    f.fromOption = d;
    f.from_opt = e
}
), null);
__d("bs_pervasives", ["bs_curry", "bs_caml_io", "bs_caml_sys", "bs_caml_bytes", "bs_caml_format", "bs_caml_string", "bs_caml_exceptions", "bs_caml_js_exceptions", "bs_caml_external_polyfill", "bs_caml_builtin_exceptions", "bs_camlinternalFormatBasics"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a) {
        throw [b("bs_caml_builtin_exceptions").failure, a]
    }
    function c(a) {
        throw [b("bs_caml_builtin_exceptions").invalid_argument, a]
    }
    var h = b("bs_caml_exceptions").create("Pervasives.Exit");
    function d(a) {
        if (a >= 0)
            return a;
        else
            return -a | 0
    }
    function e(a) {
        return a ^ -1
    }
    var i = -2147483648;
    function j(a) {
        if (isFinite(a))
            if (Math.abs(a) >= 22250738585072014e-324)
                return 0;
            else if (a !== 0)
                return 1;
            else
                return 2;
        else if (isNaN(a))
            return 4;
        else
            return 3
    }
    function k(a) {
        if (a < 0 || a > 255)
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "char_of_int"];
        return a
    }
    function l(a) {
        if (a)
            return "true";
        else
            return "false"
    }
    function m(a) {
        switch (a) {
        case "false":
            return !1;
        case "true":
            return !0;
        default:
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "bool_of_string"]
        }
    }
    function n(a) {
        switch (a) {
        case "false":
            return !1;
        case "true":
            return !0;
        default:
            return
        }
    }
    function o(a) {
        try {
            return b("bs_caml_format").caml_int_of_string(a)
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a[0] === b("bs_caml_builtin_exceptions").failure)
                return;
            else
                throw a
        }
    }
    function p(a) {
        var c = a.length
          , d = 0;
        while (!0) {
            var e = d;
            if (e >= c)
                return a + ".";
            else {
                var f = b("bs_caml_string").get(a, e);
                if (f >= 48)
                    if (f >= 58)
                        return a;
                    else {
                        d = e + 1 | 0;
                        continue
                    }
                else if (f !== 45)
                    return a;
                else {
                    d = e + 1 | 0;
                    continue
                }
            }
        }
    }
    function q(a) {
        return p(b("bs_caml_format").caml_format_float("%.12g", a))
    }
    function r(a) {
        try {
            return b("bs_caml_format").caml_float_of_string(a)
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a[0] === b("bs_caml_builtin_exceptions").failure)
                return;
            else
                throw a
        }
    }
    function s(a, b) {
        if (a)
            return [a[0], s(a[1], b)];
        else
            return b
    }
    var t = (g = b("bs_caml_io")).stdin
      , u = g.stdout
      , v = g.stderr;
    function w(a, c, d) {
        a = b("bs_caml_external_polyfill").resolve("caml_ml_open_descriptor_out")(b("bs_caml_external_polyfill").resolve("caml_sys_open")(d, a, c));
        b("bs_caml_external_polyfill").resolve("caml_ml_set_channel_name")(a, d);
        return a
    }
    function x(a) {
        return w([1, [3, [4, [7, 0]]]], 438, a)
    }
    function y(a) {
        return w([1, [3, [4, [6, 0]]]], 438, a)
    }
    function z(a) {
        a = b("bs_caml_io").caml_ml_out_channels_list(0);
        while (!0) {
            var c = a;
            if (c) {
                try {
                    b("bs_caml_io").caml_ml_flush(c[0])
                } catch (a) {
                    var d = b("bs_caml_js_exceptions").internalToOCamlException(a);
                    if (d[0] !== b("bs_caml_builtin_exceptions").sys_error)
                        throw d
                }
                a = c[1];
                continue
            } else
                return 0
        }
    }
    function A(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_output_bytes")(a, c, 0, c.length)
    }
    function B(a, c) {
        return b("bs_caml_io").caml_ml_output(a, c, 0, c.length)
    }
    function C(a, c, d, e) {
        if (d < 0 || e < 0 || d > (c.length - e | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "output"];
        return b("bs_caml_external_polyfill").resolve("caml_ml_output_bytes")(a, c, d, e)
    }
    function D(a, c, d, e) {
        if (d < 0 || e < 0 || d > (c.length - e | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "output_substring"];
        return b("bs_caml_io").caml_ml_output(a, c, d, e)
    }
    function E(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_output_value")(a, c, 0)
    }
    function F(a) {
        b("bs_caml_io").caml_ml_flush(a);
        return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
    }
    function G(a) {
        try {
            b("bs_caml_io").caml_ml_flush(a)
        } catch (a) {}
        try {
            return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
        } catch (a) {
            return 0
        }
    }
    function H(a, c, d) {
        a = b("bs_caml_external_polyfill").resolve("caml_ml_open_descriptor_in")(b("bs_caml_external_polyfill").resolve("caml_sys_open")(d, a, c));
        b("bs_caml_external_polyfill").resolve("caml_ml_set_channel_name")(a, d);
        return a
    }
    function I(a) {
        return H([0, [7, 0]], 0, a)
    }
    function J(a) {
        return H([0, [6, 0]], 0, a)
    }
    function K(a, c, d, e) {
        if (d < 0 || e < 0 || d > (c.length - e | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "input"];
        return b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, c, d, e)
    }
    function L(a, c, d, e) {
        while (!0) {
            var f = e
              , g = d;
            if (f <= 0)
                return 0;
            else {
                var h = b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, c, g, f);
                if (h === 0)
                    throw b("bs_caml_builtin_exceptions").end_of_file;
                e = f - h | 0;
                d = g + h | 0;
                continue
            }
        }
    }
    function M(a, c, d, e) {
        if (d < 0 || e < 0 || d > (c.length - e | 0))
            throw [b("bs_caml_builtin_exceptions").invalid_argument, "really_input"];
        return L(a, c, d, e)
    }
    function N(a, c) {
        var d = b("bs_caml_bytes").caml_create_bytes(c);
        M(a, d, 0, c);
        return b("bs_caml_bytes").bytes_to_string(d)
    }
    function O(a) {
        var c = function(a, c, d) {
            while (!0) {
                var e = d
                  , f = c;
                if (e) {
                    var g = e[0]
                      , h = g.length;
                    b("bs_caml_bytes").caml_blit_bytes(g, 0, a, f - h | 0, h);
                    d = e[1];
                    c = f - h | 0;
                    continue
                } else
                    return a
            }
        }
          , d = function(d, e) {
            while (!0) {
                var f = e
                  , g = d
                  , h = b("bs_caml_external_polyfill").resolve("caml_ml_input_scan_line")(a);
                if (h === 0)
                    if (g)
                        return c(b("bs_caml_bytes").caml_create_bytes(f), f, g);
                    else
                        throw b("bs_caml_builtin_exceptions").end_of_file;
                else if (h > 0) {
                    var i = b("bs_caml_bytes").caml_create_bytes(h - 1 | 0);
                    b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, i, 0, h - 1 | 0);
                    b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a);
                    if (g) {
                        var j = (f + h | 0) - 1 | 0;
                        return c(b("bs_caml_bytes").caml_create_bytes(j), j, [i, g])
                    } else
                        return i
                } else {
                    j = b("bs_caml_bytes").caml_create_bytes(-h | 0);
                    b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, j, 0, -h | 0);
                    e = f - h | 0;
                    d = [j, g];
                    continue
                }
            }
        };
        return b("bs_caml_bytes").bytes_to_string(d(0, 0))
    }
    function P(a) {
        try {
            return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
        } catch (a) {
            return 0
        }
    }
    function Q(a) {
        return b("bs_caml_io").caml_ml_output_char(u, a)
    }
    function R(a) {
        return B(u, a)
    }
    function S(a) {
        return A(u, a)
    }
    function T(a) {
        return B(u, String(a))
    }
    function U(a) {
        return B(u, p(b("bs_caml_format").caml_format_float("%.12g", a)))
    }
    function V(a) {
        b("bs_caml_io").caml_ml_output_char(u, 10);
        return b("bs_caml_io").caml_ml_flush(u)
    }
    function W(a) {
        return b("bs_caml_io").caml_ml_output_char(v, a)
    }
    function X(a) {
        return B(v, a)
    }
    function aa(a) {
        return A(v, a)
    }
    function ba(a) {
        return B(v, String(a))
    }
    function ca(a) {
        return B(v, p(b("bs_caml_format").caml_format_float("%.12g", a)))
    }
    function da(a) {
        b("bs_caml_io").caml_ml_output_char(v, 10);
        return b("bs_caml_io").caml_ml_flush(v)
    }
    function ea(a) {
        b("bs_caml_io").caml_ml_flush(u);
        return O(t)
    }
    function fa(a) {
        return b("bs_caml_format").caml_int_of_string((b("bs_caml_io").caml_ml_flush(u),
        O(t)))
    }
    function ga(a) {
        return o((b("bs_caml_io").caml_ml_flush(u),
        O(t)))
    }
    function ha(a) {
        return b("bs_caml_format").caml_float_of_string((b("bs_caml_io").caml_ml_flush(u),
        O(t)))
    }
    function ia(a) {
        return r((b("bs_caml_io").caml_ml_flush(u),
        O(t)))
    }
    function ja(a) {
        return a[1]
    }
    function ka(a, c) {
        return [b("bs_camlinternalFormatBasics").concat_fmt(a[0], c[0]), a[1] + ("%," + c[1])]
    }
    var Y = {
        contents: z
    };
    function la(a) {
        var c = Y.contents;
        Y.contents = function(d) {
            b("bs_curry")._1(a, 0);
            return b("bs_curry")._1(c, 0)
        }
        ;
        return 0
    }
    function Z(a) {
        return b("bs_curry")._1(Y.contents, 0)
    }
    function ma(a) {
        Z(0);
        return b("bs_caml_sys").caml_sys_exit(a)
    }
    var na = 2147483647
      , oa = Infinity
      , pa = -Infinity
      , qa = 17976931348623157e292
      , ra = 22250738585072014e-324
      , sa = 2220446049250313e-31
      , ta = g.caml_ml_flush
      , ua = g.caml_ml_output_char;
    g = g.caml_ml_output_char;
    function va(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_output_int")(a, c)
    }
    function wa(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_seek_out")(a, c)
    }
    function xa(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_pos_out")(a)
    }
    function ya(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size")(a)
    }
    function za(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_set_binary_mode")(a, c)
    }
    function Aa(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a)
    }
    function Ba(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a)
    }
    function Ca(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_input_int")(a)
    }
    function Da(a) {
        return b("bs_caml_external_polyfill").resolve("caml_input_value")(a)
    }
    function Ea(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_seek_in")(a, c)
    }
    function Fa(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_pos_in")(a)
    }
    function Ga(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size")(a)
    }
    function Ha(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
    }
    function Ia(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_set_binary_mode")(a, c)
    }
    function $(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_seek_out_64")(a, c)
    }
    function Ja(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_pos_out_64")(a)
    }
    function Ka(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size_64")(a)
    }
    function La(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_seek_in_64")(a, c)
    }
    function Ma(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_pos_in_64")(a)
    }
    function Na(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size_64")(a)
    }
    $ = {
        seek_out: $,
        pos_out: Ja,
        out_channel_length: Ka,
        seek_in: La,
        pos_in: Ma,
        in_channel_length: Na
    };
    f.invalid_arg = c;
    f.failwith = a;
    f.Exit = h;
    f.abs = d;
    f.max_int = na;
    f.min_int = i;
    f.lnot = e;
    f.infinity = oa;
    f.neg_infinity = pa;
    f.max_float = qa;
    f.min_float = ra;
    f.epsilon_float = sa;
    f.classify_float = j;
    f.char_of_int = k;
    f.string_of_bool = l;
    f.bool_of_string = m;
    f.bool_of_string_opt = n;
    f.int_of_string_opt = o;
    f.string_of_float = q;
    f.float_of_string_opt = r;
    f.$at = s;
    f.stdin = t;
    f.stdout = u;
    f.stderr = v;
    f.print_char = Q;
    f.print_string = R;
    f.print_bytes = S;
    f.print_int = T;
    f.print_float = U;
    f.print_newline = V;
    f.prerr_char = W;
    f.prerr_string = X;
    f.prerr_bytes = aa;
    f.prerr_int = ba;
    f.prerr_float = ca;
    f.prerr_newline = da;
    f.read_line = ea;
    f.read_int = fa;
    f.read_int_opt = ga;
    f.read_float = ha;
    f.read_float_opt = ia;
    f.open_out = x;
    f.open_out_bin = y;
    f.open_out_gen = w;
    f.flush = ta;
    f.flush_all = z;
    f.output_char = ua;
    f.output_string = B;
    f.output_bytes = A;
    f.output = C;
    f.output_substring = D;
    f.output_byte = g;
    f.output_binary_int = va;
    f.output_value = E;
    f.seek_out = wa;
    f.pos_out = xa;
    f.out_channel_length = ya;
    f.close_out = F;
    f.close_out_noerr = G;
    f.set_binary_mode_out = za;
    f.open_in = I;
    f.open_in_bin = J;
    f.open_in_gen = H;
    f.input_char = Aa;
    f.input_line = O;
    f.input = K;
    f.really_input = M;
    f.really_input_string = N;
    f.input_byte = Ba;
    f.input_binary_int = Ca;
    f.input_value = Da;
    f.seek_in = Ea;
    f.pos_in = Fa;
    f.in_channel_length = Ga;
    f.close_in = Ha;
    f.close_in_noerr = P;
    f.set_binary_mode_in = Ia;
    f.LargeFile = $;
    f.string_of_format = ja;
    f.$caret$caret = ka;
    f.exit = ma;
    f.at_exit = la;
    f.valid_float_lexem = p;
    f.unsafe_really_input = L;
    f.do_at_exit = Z
}
), null);
__d("WebGraphQLLegacyHelper", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getURI = a;
    function a(a) {
        var b = a.controller
          , c = a.docID
          , d = a.queryID;
        a = a.variables;
        c != d && (c || d) != null || g(0, 5819, c, d);
        b = b.getURIBuilder();
        d ? b.setFBID("query_id", d) : b.setFBID("doc_id", c);
        a && b.setString("variables", JSON.stringify(a));
        return b.getURI()
    }
}
), null);
__d("XWebGraphQLQueryController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/webgraphql/query/", {
        query_id: {
            type: "FBID"
        },
        variables: {
            type: "String"
        },
        doc_id: {
            type: "FBID"
        }
    })
}
), null);
__d("WebGraphQLQueryBase", ["invariant", "WebGraphQLLegacyHelper", "XWebGraphQLQueryController"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.__getVariables = function() {
            return this.$1
        }
        ;
        c.__getDocID = function() {
            return this.constructor.__getDocID()
        }
        ;
        a.__getController = function() {
            return b("XWebGraphQLQueryController")
        }
        ;
        a.__getDocID = function() {
            g(0, 1804)
        }
        ;
        a.getURI = function(a) {
            return b("WebGraphQLLegacyHelper").getURI({
                controller: this.__getController(),
                docID: this.__getDocID(),
                variables: a
            })
        }
        ;
        a.getLegacyURI = function(a) {
            return b("WebGraphQLLegacyHelper").getURI({
                controller: this.__getController(),
                queryID: this.getQueryID(),
                variables: a
            })
        }
        ;
        a.getQueryID = function() {
            g(0, 5095)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometProductTagFunnelIDContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(null);
    e.exports = c
}
), null);
__d("CometFeedClickEventsLoggerProvider.react", ["CometFeedClickEventsLoggerContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.children
          , d = a.logger
          , e = a.onPress;
        a = g.useCallback(function(a, b, c, f, g, h, i) {
            d.loadImmediately(function(d) {
                return e(d, a, b, c, f, g, h, i)
            })
        }, [d, e]);
        return g.jsx(b("CometFeedClickEventsLoggerContext").Provider, {
            value: a,
            children: c
        })
    }
}
), null);
__d("shallowEqual", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = Object.prototype.hasOwnProperty;
    function h(a, b) {
        if (a === b)
            return a !== 0 || b !== 0 || 1 / a === 1 / b;
        else
            return a !== a && b !== b
    }
    function a(a, b) {
        if (h(a, b))
            return !0;
        if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
            return !1;
        var c = Object.keys(a)
          , d = Object.keys(b);
        if (c.length !== d.length)
            return !1;
        for (var d = 0; d < c.length; d++)
            if (!g.call(b, c[d]) || !h(a[c[d]], b[c[d]]))
                return !1;
        return !0
    }
}
), null);
__d("useCometFeedLoggingExtraFields", ["CometFeedLoggingExtraFieldsContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometFeedLoggingExtraFieldsContext"))
    }
}
), null);
__d("CometFeedLoggingExtraFieldsProvider.react", ["CometFeedLoggingExtraFieldsContext", "React", "shallowEqual", "useCometFeedLoggingExtraFields"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.children;
        a = a.extraFields;
        var d = g.useRef({})
          , e = b("useCometFeedLoggingExtraFields")();
        e = babelHelpers["extends"]({}, e, a);
        b("shallowEqual")(d.current, e) || (d.current = e);
        return g.jsx(b("CometFeedLoggingExtraFieldsContext").Provider, {
            value: d.current,
            children: c
        })
    }
    c = g.memo(a);
    e.exports = c
}
), null);
__d("CometFeedStoryClickLoggerImpl.react", ["CometFeedClickEventsLoggerProvider.react", "CometFeedLoggingExtraFieldsProvider.react", "CometRouteURL", "React", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("requireDeferred")("Banzai");
    function a(a) {
        a = a.children;
        var c = b("CometRouteURL").useRouteURLParams()
          , d = c.notif_t != null ? String(c.notif_t) : null;
        c = c.notif_id != null ? +c.notif_id : null;
        var e = g.useCallback(function(a, b, c, d, e, f, g, h) {
            if (d == null || d === "")
                return;
            var i = babelHelpers["extends"]({}, a.VITAL, {
                signal: !0
            });
            a.post("comet_metrics:click", {
                click_type: e === 1 ? "middle_click" : e === 2 ? "right_click" : e === -1 ? "dummy_click" : "",
                client_trace_id: h,
                extra: g,
                href: f,
                tn: c.join(""),
                ts: b,
                xt: d
            }, i)
        }, []);
        return g.jsx(b("CometFeedClickEventsLoggerProvider.react"), {
            logger: h,
            onPress: e,
            children: g.jsx(b("CometFeedLoggingExtraFieldsProvider.react"), {
                extraFields: {
                    notif_id: c,
                    notif_type: d
                },
                children: a
            })
        })
    }
}
), null);
__d("getOpacityStyleName", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = !1
      , h = null;
    function a() {
        if (!g) {
            if (document.body && "opacity"in document.body.style)
                h = "opacity";
            else {
                var a = document.createElement("div");
                a.style.filter = "alpha(opacity=100)";
                a.style.filter && (h = "filter")
            }
            g = !0
        }
        return h
    }
}
), null);
__d("StyleCore", ["invariant", "camelize", "containsNode", "ex", "getOpacityStyleName", "getStyleProperty", "hyphenate"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        a = n.get(a, b);
        return a === "auto" || a === "scroll"
    }
    var i = new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)","g");
    function j(a) {
        var b = {};
        a.replace(i, function(a, c, d) {
            b[c] = d;
            return d
        });
        return b
    }
    function k(a) {
        var b = "";
        for (var c in a)
            a[c] && (b += c + ":" + a[c] + ";");
        return b
    }
    function l(a) {
        return a !== "" ? "alpha(opacity=" + a * 100 + ")" : ""
    }
    function m(a, c, d) {
        switch (b("hyphenate")(c)) {
        case "font-weight":
        case "line-height":
        case "opacity":
        case "z-index":
        case "animation-iteration-count":
        case "-webkit-animation-iteration-count":
            break;
        case "width":
        case "height":
            var e = parseInt(d, 10) < 0;
            e && g(0, 826, a, c, d);
        default:
            isNaN(d) || !d || d === "0" || g(0, 827, a, c, d, d + "px");
            break
        }
    }
    var n = {
        set: function(a, c, d) {
            m("Style.set", c, d);
            if (a == null)
                return;
            a = a.style;
            switch (c) {
            case "opacity":
                b("getOpacityStyleName")() === "filter" ? a.filter = l(d) : a.opacity = d;
                break;
            case "float":
                a.cssFloat = a.styleFloat = d || "";
                break;
            default:
                try {
                    a[b("camelize")(c)] = d
                } catch (a) {
                    throw new Error(b("ex")('Style.set: "%s" argument is invalid: %s', c, d))
                }
            }
        },
        apply: function(a, c) {
            var d;
            for (d in c)
                m("Style.apply", d, c[d]);
            "opacity"in c && b("getOpacityStyleName")() === "filter" && (c.filter = l(c.opacity),
            delete c.opacity);
            var e = j(a.style.cssText);
            for (d in c) {
                var f = c[d];
                delete c[d];
                var g = b("hyphenate")(d);
                for (var h in e)
                    (h === g || h.indexOf(g + "-") === 0) && delete e[h];
                c[g] = f
            }
            Object.assign(e, c);
            a.style.cssText = k(e)
        },
        get: b("getStyleProperty"),
        getFloat: function(a, b) {
            return parseFloat(n.get(a, b), 10)
        },
        getOpacity: function(a) {
            if (b("getOpacityStyleName")() === "filter") {
                var c = n.get(a, "filter");
                if (c) {
                    c = /(\d+(?:\.\d+)?)/.exec(c);
                    if (c)
                        return parseFloat(c.pop()) / 100
                }
            }
            return n.getFloat(a, "opacity") || 1
        },
        isFixed: function(a) {
            while (b("containsNode")(document.body, a)) {
                if (n.get(a, "position") === "fixed")
                    return !0;
                a = a.parentNode
            }
            return !1
        },
        getScrollParent: function(a) {
            if (!a)
                return null;
            while (a && a !== document.body) {
                if (h(a, "overflow") || h(a, "overflowY") || h(a, "overflowX"))
                    return a;
                a = a.parentNode
            }
            return window
        }
    };
    a = n;
    e.exports = a
}
), null);
__d("Style", ["StyleCore", "$"], (function(a, b, c, d, e, f) {
    a = babelHelpers["extends"]({}, b("StyleCore"), {
        get: function(a, c) {
            typeof a === "string" && (a = b("$")(a));
            return b("StyleCore").get(a, c)
        },
        getFloat: function(a, c) {
            typeof a === "string" && (a = b("$")(a));
            return b("StyleCore").getFloat(a, c)
        }
    });
    c = a;
    e.exports = c
}
), null);
__d("getMarkupWrap", ["invariant", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    e.exports = a;
    var h = b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null
      , i = {};
    c = [1, '<select multiple="true">', "</select>"];
    d = [1, "<table>", "</table>"];
    f = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var j = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"]
      , k = {
        "*": [1, "?<div>", "</div>"],
        area: [1, "<map>", "</map>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        param: [1, "<object>", "</object>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        optgroup: c,
        option: c,
        caption: d,
        colgroup: d,
        tbody: d,
        tfoot: d,
        thead: d,
        td: f,
        th: f
    };
    e = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    e.forEach(function(a) {
        k[a] = j,
        i[a] = !0
    });
    function a(a) {
        a = a;
        !h && g(0, 144);
        Object.prototype.hasOwnProperty.call(k, a) || (a = "*");
        Object.prototype.hasOwnProperty.call(i, a) || (a === "*" ? h.innerHTML = "<link />" : h.innerHTML = "<" + a + "></" + a + ">",
        i[a] = !h.firstChild);
        return i[a] ? k[a] : null
    }
}
), null);
__d("createNodesFromMarkup", ["invariant", "ExecutionEnvironment", "getMarkupWrap"], (function(a, b, c, d, e, f, g) {
    e.exports = a;
    var h = b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null
      , i = /^\s*<(\w+)/;
    function j(a) {
        a = a.match(i);
        return a && a[1].toLowerCase()
    }
    function a(a, c) {
        var d = h;
        !h && g(0, 5001);
        var e = j(a);
        e = e && b("getMarkupWrap")(e);
        if (e) {
            d.innerHTML = e[1] + a + e[2];
            e = e[0];
            while (e--)
                d = d.lastChild
        } else
            d.innerHTML = a;
        e = d.getElementsByTagName("script");
        e.length && (c || g(0, 5002),
        Array.from(e).forEach(c));
        a = Array.from(d.childNodes);
        while (d.lastChild)
            d.removeChild(d.lastChild);
        return a
    }
}
), null);
__d("evalGlobal", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        if (typeof a !== "string")
            throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");
        if (!a)
            return;
        var b = document.createElement("script");
        try {
            b.appendChild(document.createTextNode(a))
        } catch (c) {
            b.text = a
        }
        a = document.getElementsByTagName("head")[0] || document.documentElement;
        a.appendChild(b);
        a.removeChild(b)
    }
}
), null);
__d("HTML", ["invariant", "Bootloader", "createNodesFromMarkup", "emptyFunction", "evalGlobal"], (function(a, b, c, d, e, f, g) {
    var h = /(<(\w+)[^>]*?)\/>/g
      , i = {
        abbr: !0,
        area: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0
    };
    a = function() {
        "use strict";
        function a(c) {
            c && typeof c.__html === "string" && (c = c.__html);
            if (!(this instanceof a))
                return c instanceof a ? c : new a(c);
            if (c) {
                var d = typeof c;
                d === "string" || g(0, 277, d)
            }
            this._markup = c || "";
            this._defer = !1;
            this._nodes = null;
            this._inlineJS = b("emptyFunction");
            this._rootNode = null
        }
        var c = a.prototype;
        c.toString = function() {
            return this._markup
        }
        ;
        c.getContent = function() {
            return this._markup
        }
        ;
        c.getNodes = function() {
            this._fillCache();
            return this._nodes
        }
        ;
        c.getRootNode = function() {
            this._rootNode && g(0, 278);
            var a = this.getNodes();
            if (a.length === 1)
                this._rootNode = a[0];
            else {
                var b = document.createDocumentFragment();
                for (var c = 0; c < a.length; c++)
                    b.appendChild(a[c]);
                this._rootNode = b
            }
            return this._rootNode
        }
        ;
        c.getAction = function() {
            var a = this;
            this._fillCache();
            var b = function() {
                a._inlineJS()
            };
            return this._defer ? function() {
                setTimeout(b, 0)
            }
            : b
        }
        ;
        c._fillCache = function() {
            if (this._nodes !== null)
                return;
            if (!this._markup) {
                this._nodes = [];
                return
            }
            var a = this._markup.replace(h, function(a, b, c) {
                return i[c.toLowerCase()] ? a : b + "></" + c + ">"
            })
              , c = null;
            a = b("createNodesFromMarkup")(a, function(a) {
                c = c || [],
                c.push(a.src ? b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"), a.src) : b("evalGlobal").bind(null, a.innerHTML)),
                a.parentNode.removeChild(a)
            });
            c && (this._inlineJS = function() {
                for (var a = 0; a < c.length; a++)
                    c[a]()
            }
            );
            this._nodes = a
        }
        ;
        c.setDeferred = function(a) {
            this._defer = !!a;
            return this
        }
        ;
        a.isHTML = function(b) {
            return !!b && (b instanceof a || b.__html !== void 0)
        }
        ;
        a.replaceJSONWrapper = function(b) {
            return b && b.__html !== void 0 ? new a(b.__html) : b
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("DOMEvent", ["invariant"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.event = a || window.event,
            typeof this.event.srcElement !== "unknown" || g(0, 5798),
            this.target = this.event.target || this.event.srcElement
        }
        var b = a.prototype;
        b.preventDefault = function() {
            var a = this.event;
            a.preventDefault ? (a.preventDefault(),
            "defaultPrevented"in a || (a.defaultPrevented = !0)) : a.returnValue = !1;
            return this
        }
        ;
        b.isDefaultPrevented = function() {
            var a = this.event;
            return "defaultPrevented"in a ? a.defaultPrevented : a.returnValue === !1
        }
        ;
        b.stopPropagation = function() {
            var a = this.event;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        }
        ;
        b.kill = function() {
            this.stopPropagation().preventDefault();
            return this
        }
        ;
        a.killThenCall = function(b) {
            return function(c) {
                new a(c).kill();
                return b()
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("dedupString", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var b;
        return Object.keys((b = {},
        b[a] = 0,
        b))[0]
    }
}
), null);
__d("wrapFunction", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = {};
    function a(a, b, c) {
        var d = b in g ? g[b](a, c) : a;
        return function() {
            for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
                b[c] = arguments[c];
            return d.apply(this, b)
        }
    }
    a.setWrapper = function(a, b) {
        g[b] = a
    }
}
), null);
__d("DOMEventListener", ["invariant", "dedupString", "emptyFunction", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    var h = !1;
    try {
        a = Object.defineProperty({}, "passive", {
            get: function() {
                h = !0
            }
        });
        window.addEventListener("test", null, a)
    } catch (a) {}
    var i, j;
    window.addEventListener ? (i = function(a, c, d, e) {
        e === void 0 && (e = !1),
        d.wrapper = b("wrapFunction")(d, "entry", b("dedupString")("DOMEventListener.add " + c)),
        a.addEventListener(c, d.wrapper, h ? e : !1)
    }
    ,
    j = function(a, b, c, d) {
        d === void 0 && (d = !1),
        a.removeEventListener(b, c.wrapper, h ? d : !1)
    }
    ) : window.attachEvent ? (i = function(a, c, d, e) {
        e === void 0,
        d.wrapper = b("wrapFunction")(d, "entry", "DOMEventListener.add " + c),
        a.attachEvent || g(0, 2798),
        a.attachEvent("on" + c, d.wrapper)
    }
    ,
    j = function(a, b, c, d) {
        d === void 0,
        a.detachEvent || g(0, 2799),
        a.detachEvent("on" + b, c.wrapper)
    }
    ) : j = i = b("emptyFunction");
    c = {
        add: function(a, b, c, d) {
            d === void 0 && (d = !1);
            i(a, b, c, d);
            return {
                remove: function() {
                    j(a, b, c, d)
                }
            }
        },
        remove: j
    };
    e.exports = c
}
), null);
__d("createArrayFromMixed", ["invariant"], (function(a, b, c, d, e, f, g) {
    e.exports = a;
    function h(a) {
        var b = a.length;
        !Array.isArray(a) && (typeof a === "object" || typeof a === "function") || g(0, 3914);
        typeof b === "number" || g(0, 3915);
        b === 0 || b - 1 in a || g(0, 3916);
        typeof a.callee !== "function" || g(0, 3917);
        if (a.hasOwnProperty)
            try {
                return Array.prototype.slice.call(a)
            } catch (a) {}
        var c = Array(b);
        for (var d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    function i(a) {
        return !!a && (typeof a === "object" || typeof a === "function") && "length"in a && !("setInterval"in a) && typeof a.nodeType !== "number" && (Array.isArray(a) || "callee"in a || "item"in a)
    }
    function a(a) {
        if (!i(a))
            return [a];
        else if (Array.isArray(a))
            return a.slice();
        else
            return h(a)
    }
}
), null);
__d("isElementNode", ["isNode"], (function(a, b, c, d, e, f) {
    function a(a) {
        return b("isNode")(a) && a.nodeType == 1
    }
    e.exports = a
}
), null);
__d("DOMQuery", ["CSS", "FBLogger", "containsNode", "createArrayFromMixed", "createObjectFrom", "ge", "ifRequired", "isElementNode", "isNode"], (function(a, b, c, d, e, f) {
    f.find = a;
    f.findPushSafe = c;
    f.scry = i;
    f.getSelection = d;
    f.contains = e;
    f.getRootElement = j;
    f.isNodeOfType = k;
    f.isInputNode = l;
    var g = /^\.-?[_a-zA-Z]+[\w-]*$/;
    function h(a, b) {
        return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null
    }
    function a(a, b) {
        a = i(a, b);
        return a[0]
    }
    function c(a, b, c) {
        b = i(a, b);
        a = i(a, c);
        b.length === 1 && a.length === 1 && b[0] === a[0] ? c = b : c = b.concat(a);
        return c[0]
    }
    function i(a, c) {
        if (!a || !a.getElementsByTagName)
            return [];
        c = c.split(" ");
        var d = [a];
        for (var e = 0; e < c.length; e++) {
            if (d.length === 0)
                break;
            if (c[e] === "")
                continue;
            var f = c[e]
              , i = c[e]
              , j = []
              , k = !1;
            if (f.charAt(0) == "^")
                if (e === 0)
                    k = !0,
                    f = f.slice(1);
                else
                    return [];
            f = f.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, " $&");
            f = f.split(" ");
            var l = f[0] || "*"
              , m = l == "*"
              , n = f[1] && f[1].charAt(0) == "#";
            if (n) {
                n = b("ge")(f[1].slice(1), a, l);
                if (n && (m || n.tagName.toLowerCase() == l))
                    for (var o = 0; o < d.length; o++)
                        if (k && b("containsNode")(n, d[o])) {
                            j = [n];
                            break
                        } else if (document == d[o] || b("containsNode")(d[o], n) && d[o] !== n) {
                            j = [n];
                            break
                        }
            } else {
                n = [];
                o = d.length;
                var p, q = !k && i.indexOf("[") < 0 && document.querySelectorAll;
                for (var r = 0; r < o; r++) {
                    if (k) {
                        p = [];
                        var s = d[r].parentNode;
                        while (b("isElementNode")(s))
                            (m || s.tagName.toLowerCase() == l) && p.push(s),
                            s = s.parentNode
                    } else
                        q ? g.test(i) ? p = d[r].getElementsByClassName(i.substring(1)) : p = d[r].querySelectorAll(i) : p = d[r].getElementsByTagName(l);
                    s = p.length;
                    for (var t = 0; t < s; t++)
                        n.push(p[t])
                }
                if (!q)
                    for (var p = 1; p < f.length; p++) {
                        s = f[p];
                        t = s.charAt(0) == ".";
                        m = s.substring(1);
                        for (r = 0; r < n.length; r++) {
                            o = n[r];
                            if (!o || o.nodeType !== 1)
                                continue;
                            if (t) {
                                b("CSS").hasClass(o, m) || delete n[r];
                                continue
                            } else {
                                i = s.slice(1, s.length - 1);
                                l = i.indexOf("=");
                                if (l < 0) {
                                    if (!h(o, i)) {
                                        delete n[r];
                                        continue
                                    }
                                } else {
                                    q = i.substr(0, l);
                                    i = i.substr(l + 1);
                                    i = i.slice(1, i.length - 1);
                                    if (o.getAttribute(q) != i) {
                                        delete n[r];
                                        continue
                                    }
                                }
                            }
                        }
                    }
                for (r = 0; r < n.length; r++)
                    if (n[r]) {
                        j.push(n[r]);
                        if (k)
                            break
                    }
            }
            d = j
        }
        return d
    }
    function d() {
        var a = window.getSelection;
        if (a)
            return a() + "";
        else {
            a = document.selection;
            if (a)
                return a.createRange().text
        }
        return null
    }
    function e(a, c) {
        (typeof a === "string" || typeof c === "string") && b("FBLogger")("dom_query").info("Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead");
        return b("containsNode")(b("ge")(a), b("ge")(c))
    }
    function j() {
        var a = b("ifRequired")("Quickling", function(a) {
            return a.isActive() ? b("ge")("content") : null
        });
        return a || document.body
    }
    function k(a, c) {
        c = b("createArrayFromMixed")(c).join("|").toUpperCase().split("|");
        c = b("createObjectFrom")(c);
        return b("isNode")(a) && a.nodeName in c
    }
    function l(a) {
        return k(a, ["input", "textarea"]) || a.contentEditable === "true"
    }
}
), null);
__d("DataStore", ["DataStoreConfig", "gkx", "isEmpty"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("DataStoreConfig").expandoKey, i = b("DataStoreConfig").useExpando, j = b("gkx")("1073500") && window.WeakMap ? new window.WeakMap() : null, k = {}, l = 1;
    function m(a) {
        if (typeof a === "string")
            return "str_" + a;
        else {
            var b;
            return "elem_" + ((b = a.__FB_TOKEN) != null ? b : a.__FB_TOKEN = [l++])[0]
        }
    }
    function n(a) {
        if (j != null && typeof a === "object") {
            j.get(a) === void 0 && j.set(a, {});
            return j.get(a)
        } else if (i && typeof a === "object")
            return a[h] || (a[h] = {});
        a = m(a);
        return k[a] || (k[a] = {})
    }
    var o = {
        set: function(a, b, c) {
            if (!a)
                throw new TypeError("DataStore.set: namespace is required, got " + typeof a);
            var d = n(a);
            d[b] = c;
            return a
        },
        get: function(a, b, c) {
            if (!a)
                throw new TypeError("DataStore.get: namespace is required, got " + typeof a);
            var d = n(a)
              , e = d[b];
            if (e === void 0 && a.getAttribute != null)
                if (a.hasAttribute != null && !a.hasAttribute("data-" + b))
                    e = void 0;
                else {
                    a = a.getAttribute("data-" + b);
                    e = null === a ? void 0 : a
                }
            c !== void 0 && e === void 0 && (e = d[b] = c);
            return e
        },
        remove: function(a, c) {
            if (!a)
                throw new TypeError("DataStore.remove: namespace is required, got " + typeof a);
            var d = n(a)
              , e = d[c];
            delete d[c];
            (g || (g = b("isEmpty")))(d) && o.purge(a);
            return e
        },
        purge: function(a) {
            if (j != null && typeof a === "object")
                return j["delete"](a);
            else
                i && typeof a === "object" ? delete a[h] : delete k[m(a)]
        },
        _storage: k
    };
    e.exports = o
}
), null);
__d("EventProfiler", ["requireCond", "cr:708886"], (function(a, b, c, d, e, f) {
    a = b("cr:708886");
    e.exports = a
}
), null);
__d("Scroll", [], (function(a, b, c, d, e, f) {
    f.getTop = a;
    f.setTop = b;
    f.getLeft = c;
    f.setLeft = d;
    function g(a, b) {
        return !!b && (a === b.documentElement || a === b.body)
    }
    function a(a) {
        var b;
        if (a == null)
            return 0;
        var c = a.ownerDocument;
        return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollTop) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollTop) || 0 : a.scrollTop || 0
    }
    function b(a, b) {
        if (a == null)
            return;
        var c = a.ownerDocument;
        g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollTop = b || 0),
        (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollTop = b || 0)) : a.scrollTop = b || 0
    }
    function c(a) {
        var b, c = a.ownerDocument;
        return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollLeft) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollLeft) || 0 : a.scrollLeft || 0
    }
    function d(a, b) {
        var c = a.ownerDocument;
        g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollLeft = b || 0),
        (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollLeft = b || 0)) : a.scrollLeft = b || 0
    }
}
), null);
__d("clickRefAction", ["Arbiter"], (function(a, b, c, d, e, f) {
    function g(b, a, c, d, e) {
        var f = b + "/" + a;
        this.ue = f;
        this.ue_ts = b;
        this.ue_count = a;
        this.context = c;
        this.ns = null;
        this.node = d;
        this.type = e
    }
    g.prototype.set_namespace = function(a) {
        this.ns = a;
        return this
    }
    ;
    g.prototype.coalesce_namespace = function(a) {
        this.ns === null && (this.ns = a);
        return this
    }
    ;
    g.prototype.add_event = function() {
        return this
    }
    ;
    var h = 0
      , i = []
      , j = Date.now() + 6e4;
    function c(a, c, d, e, f) {
        var k = Date.now()
          , l = d && d.type;
        f = f || {};
        !c && d && (c = d.getTarget());
        var m = 50;
        if (c && e != "FORCE")
            for (var n = i.length - 1; n >= 0 && k - i[n].ue_ts < m; --n)
                if (i[n].node == c && i[n].type == l)
                    return i[n];
        n = new g(k,h,a,c,l);
        i.push(n);
        while (i[0].ue_ts + m < k || i.length > 10)
            i.shift();
        l = k < j ? "persistent" : "event";
        a == "contextmenu" ? b("Arbiter").inform("ClickRefAction/contextmenu", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : a == "middleclick" ? b("Arbiter").inform("ClickRefAction/middleclick", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : b("Arbiter").inform("ClickRefAction/new", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l);
        h++;
        return n
    }
    e.exports = a.clickRefAction = c
}
), null);
__d("FlowMigrationUtilsForLegacyFiles", ["FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    f.invariantViolation = a;
    f.isFalsy = c;
    var g = "flow_typing_for_legacy_code";
    function a(a) {
        b("FBLogger")(g).blameToPreviousFile().event(g + ".bad_call").mustfix(a);
        return new Error("[" + g + "] " + a)
    }
    function c(a) {
        return a === !1 || a == null || a === 0 || a === "" || Number.isNaN(a)
    }
}
), null);
__d("getDocumentScrollElement", ["FlowMigrationUtilsForLegacyFiles"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;
    function a(a) {
        a = a || document;
        if (a.scrollingElement)
            return a.scrollingElement;
        a = !g && a.compatMode === "CSS1Compat" ? a.documentElement : a.body;
        a || b("FlowMigrationUtilsForLegacyFiles").invariantViolation("null result in getDocumentScrollElement");
        return a
    }
}
), null);
__d("getObjectValues", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        var b = [];
        for (var c in a)
            b.push(a[c]);
        return b
    }
}
), null);
__d("Event", ["Arbiter", "DataStore", "DOMEvent", "DOMEventListener", "DOMQuery", "ErrorGuard", "EventProfiler", "ExecutionEnvironment", "FBLogger", "Parent", "Scroll", "TAAL", "TimeSlice", "UserAgent", "$", "clickRefAction", "dedupString", "getDocumentScrollElement", "getObjectValues"], (function(a, b, c, d, e, f) {
    var g, h = "Event.listeners";
    Event.prototype || (Event.prototype = {});
    function i(a) {
        (a.type === "click" || a.type === "mouseover" || a.type === "keydown") && b("Arbiter").inform("Event/stop", {
            event: a
        })
    }
    var j = function() {
        "use strict";
        function a(a, b, c) {
            this.cancelBubble = !1,
            this.target = a,
            this.type = b,
            this.data = c
        }
        var c = a.prototype;
        c.getData = function() {
            this.data = this.data || {};
            return this.data
        }
        ;
        c.stop = function() {
            return Event.stop(this)
        }
        ;
        c.prevent = function() {
            return Event.prevent(this)
        }
        ;
        c.isDefaultPrevented = function() {
            return Event.isDefaultPrevented(this)
        }
        ;
        c.kill = function() {
            return Event.kill(this)
        }
        ;
        c.getTarget = function() {
            return new (b("DOMEvent"))(this).target || null
        }
        ;
        return a
    }();
    function k(a) {
        if (a instanceof j)
            return a;
        a || (!window.addEventListener && document.createEventObject ? a = window.event ? document.createEventObject(window.event) : {} : a = {});
        if (!a._inherits_from_prototype)
            for (var b in Event.prototype)
                try {
                    a[b] = Event.prototype[b]
                } catch (a) {}
        return a
    }
    Object.assign(Event.prototype, {
        _inherits_from_prototype: !0,
        getRelatedTarget: function() {
            var a = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
            return a && a.nodeType ? a : null
        },
        getModifiers: function() {
            var a = {
                control: !!this.ctrlKey,
                shift: !!this.shiftKey,
                alt: !!this.altKey,
                meta: !!this.metaKey
            };
            a.access = b("UserAgent").isPlatform("Mac OS X") ? a.control : a.alt;
            a.any = a.control || a.shift || a.alt || a.meta;
            return a
        },
        isRightClick: function() {
            return this.which ? this.which === 3 : this.button && this.button === 2
        },
        isMiddleClick: function() {
            return this.which ? this.which === 2 : this.button && this.button === 4
        },
        isDefaultRequested: function() {
            return this.getModifiers().any || this.isMiddleClick() || this.isRightClick()
        }
    }, j.prototype);
    c = {
        listen: function(a, c, d, e, f) {
            typeof d === "function" && (d = b("TimeSlice").guard(d, b("dedupString")("Event.js " + c + " handler")));
            !f || typeof f === "boolean" ? f = {
                passive: !1
            } : f = {
                passive: f.passive || !1
            };
            if (!b("ExecutionEnvironment").canUseDOM)
                return new s(a,d,null,c,e,null,f);
            typeof a === "string" && (a = b("$")(a));
            typeof e === "undefined" && (e = Event.Priority.NORMAL);
            if (typeof c === "object") {
                var g = {};
                for (var i in c)
                    g[i] = Event.listen(a, i, c[i], e, f);
                return g
            }
            if (c.match(/^on/i))
                throw new TypeError("Bad event name `" + c + "': use `click', not `onclick'.");
            if (!a) {
                g = new Error(b("TAAL").blameToPreviousFrame("Cannot listen to an undefined element."));
                b("FBLogger")("event").catching(g).mustfix("Tried to listen to element of type %s", c);
                throw g
            }
            if (a.nodeName == "LABEL" && c == "click") {
                g = a.getElementsByTagName("input");
                a = g.length == 1 ? g[0] : a
            } else if (a === window && c === "scroll") {
                g = b("getDocumentScrollElement")();
                g !== document.documentElement && g !== document.body && (a = g)
            }
            g = b("DataStore").get(a, h, {});
            var j = m[c];
            j && (c = j.base,
            j.wrap && (d = j.wrap(d)));
            o(a, g, c, f);
            j = g[c];
            e in j || (j[e] = []);
            var k = j[e].length;
            d = new s(a,d,g,c,e,k,f);
            j[e][k] = d;
            j.numHandlers++;
            f.passive || (j.numNonPassiveHandlers++,
            n(a, g[c], c));
            return d
        },
        stop: function(a) {
            var c = new (b("DOMEvent"))(a).stopPropagation();
            i(c.event);
            return a
        },
        prevent: function(a) {
            new (b("DOMEvent"))(a).preventDefault();
            return a
        },
        isDefaultPrevented: function(a) {
            return new (b("DOMEvent"))(a).isDefaultPrevented(a)
        },
        kill: function(a) {
            a = new (b("DOMEvent"))(a).kill();
            i(a.event);
            return !1
        },
        getKeyCode: function(a) {
            a = new (b("DOMEvent"))(a).event;
            if (!a)
                return !1;
            switch (a.keyCode) {
            case 63232:
                return 38;
            case 63233:
                return 40;
            case 63234:
                return 37;
            case 63235:
                return 39;
            case 63272:
            case 63273:
            case 63275:
                return null;
            case 63276:
                return 33;
            case 63277:
                return 34
            }
            if (a.shiftKey)
                switch (a.keyCode) {
                case 33:
                case 34:
                case 37:
                case 38:
                case 39:
                case 40:
                    return null
                }
            return a.keyCode
        },
        getPriorities: function() {
            if (!l) {
                var a = b("getObjectValues")(Event.Priority);
                a.sort(function(a, b) {
                    return a - b
                });
                l = a
            }
            return l
        },
        fire: function(a, b, c) {
            c = new j(a,b,c);
            var d;
            do {
                var e = Event.__getHandler(a, b);
                e && (d = e(c));
                a = a.parentNode
            } while (a && d !== !1 && !c.cancelBubble);return d !== !1
        },
        __fire: function(a, b, c) {
            a = Event.__getHandler(a, b);
            if (a)
                return a(k(c))
        },
        __getHandler: function(a, c) {
            var d = b("DataStore").get(a, h);
            return d && d[c] ? d[c].domHandler : a["on" + c]
        },
        getPosition: function(a) {
            a = new (b("DOMEvent"))(a).event;
            var c = b("getDocumentScrollElement")()
              , d = a.clientX + b("Scroll").getLeft(c);
            a = a.clientY + b("Scroll").getTop(c);
            return {
                x: d,
                y: a
            }
        }
    };
    Object.assign(Event, c);
    var l = null;
    d = function(a) {
        return function(c) {
            if (!b("DOMQuery").contains(this, c.getRelatedTarget()))
                return a.call(this, c)
        }
    }
    ;
    var m;
    !window.navigator.msPointerEnabled ? m = {
        mouseenter: {
            base: "mouseover",
            wrap: d
        },
        mouseleave: {
            base: "mouseout",
            wrap: d
        }
    } : m = {
        mousedown: {
            base: "MSPointerDown"
        },
        mousemove: {
            base: "MSPointerMove"
        },
        mouseup: {
            base: "MSPointerUp"
        },
        mouseover: {
            base: "MSPointerOver"
        },
        mouseout: {
            base: "MSPointerOut"
        },
        mouseenter: {
            base: "MSPointerOver",
            wrap: d
        },
        mouseleave: {
            base: "MSPointerOut",
            wrap: d
        }
    };
    if (b("UserAgent").isBrowser("Firefox < 52")) {
        f = function(a, b) {
            b = k(b);
            var c = b.getTarget();
            while (c)
                Event.__fire(c, a, b),
                c = c.parentNode
        }
        ;
        document.documentElement.addEventListener("focus", f.bind(null, "focusin"), !0);
        document.documentElement.addEventListener("blur", f.bind(null, "focusout"), !0)
    }
    var n = function(a, c, d) {
        var e = c.numNonPassiveHandlers == 0;
        e != c.options.passive && (c.domHandlerRemover.remove(),
        c.options.passive = e,
        c.domHandlerRemover = b("DOMEventListener").add(a, d, c.domHandler, {
            passive: e
        }))
    }
      , o = function(a, c, d, e) {
        if (d in c)
            return;
        var f = b("TimeSlice").guard(r.bind(a, d), b("dedupString")("Event listenHandler " + d));
        c[d] = {
            numHandlers: 0,
            numNonPassiveHandlers: 0,
            domHandlerRemover: b("DOMEventListener").add(a, d, f, e),
            domHandler: f,
            options: e
        };
        c = "on" + d;
        if (a[c]) {
            f = a === document.documentElement ? Event.Priority._BUBBLE : Event.Priority.TRADITIONAL;
            var g = a[c];
            a[c] = null;
            Event.listen(a, d, g, f, e)
        }
    };
    function p(a) {
        return !a.href.endsWith("#") ? !1 : a.href === document.location.href || a.href === document.location.href + "#"
    }
    function q(a, b) {
        return a.nodeName === "INPUT" && a.type === b
    }
    var r = b("EventProfiler").__wrapEventListenHandler(function(a, c) {
        c = k(c);
        if (!b("DataStore").get(this, h))
            throw new Error("Bad listenHandler context.");
        var d = b("DataStore").get(this, h)[a];
        if (!d)
            throw new Error("No registered handlers for `" + a + "'.");
        if (a == "click" || a == "contextmenu" || a == "mousedown" && c.which == 2) {
            var e = c.getTarget()
              , f = b("Parent").byTag(e, "a");
            f instanceof HTMLAnchorElement && f.href && p(f) && !q(e, "file") && !q(e, "submit") && c.prevent();
            a == "click" && b("clickRefAction")("click", f, c);
            a == "contextmenu" && b("clickRefAction")("contextmenu", f, c);
            a == "mousedown" && c.which == 2 && b("clickRefAction")("middleclick", f, c)
        }
        e = Event.getPriorities();
        for (var a = 0; a < e.length; a++) {
            f = e[a];
            if (f in d) {
                f = d[f];
                for (var g = 0; g < f.length; g++) {
                    if (!f[g])
                        continue;
                    var i = f[g].fire(this, c);
                    if (i === !1)
                        return c.kill();
                    else
                        c.cancelBubble && c.stop()
                }
            }
        }
        return c.returnValue
    });
    Event.Priority = {
        URGENT: -20,
        TRADITIONAL: -10,
        NORMAL: 0,
        _BUBBLE: 1e3
    };
    var s = function() {
        "use strict";
        function a(a, b, c, d, e, f, g) {
            this.$1 = a,
            this.$2 = b,
            this.$3 = c,
            this.$7 = d,
            this.$6 = e,
            this.$4 = f,
            this.$5 = g
        }
        var c = a.prototype;
        c.isRemoved = function() {
            return !this.$3
        }
        ;
        c.remove = function() {
            if (b("ExecutionEnvironment").canUseDOM) {
                if (this.isRemoved()) {
                    b("FBLogger")("Event").warn("Event handler has already been removed");
                    return
                }
                var a = this.$3[this.$7];
                a.numHandlers <= 1 ? (a.domHandlerRemover.remove(),
                delete this.$3[this.$7]) : (delete a[this.$6][this.$4],
                a.numHandlers--,
                this.$5.passive || (a.numNonPassiveHandlers--,
                n(this.$1, this.$3[this.$7], this.$7)));
                this.$3 = null
            }
        }
        ;
        c.fire = function(a, c) {
            return b("ExecutionEnvironment").canUseDOM ? (g || (g = b("ErrorGuard"))).applyWithGuard(this.$2, a, [c], {
                name: "eventhandler:" + c.type + ":" + (typeof a.name == "string" ? a.name : a.id)
            }) : !0
        }
        ;
        return a
    }();
    a.$E = Event.$E = k;
    e.exports = Event
}
), null);
__d("Keys", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE_BREAK: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        LEFT_WINDOW_KEY: 91,
        RIGHT_WINDOW_KEY: 92,
        SELECT_KEY: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMI_COLON: 186,
        EQUAL_SIGN: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRAKET: 221,
        SINGLE_QUOTE: 222
    });
    e.exports = a
}
), null);
__d("getElementPosition", ["getElementRect"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        a = b("getElementRect")(a);
        return {
            x: a.left,
            y: a.top,
            width: a.right - a.left,
            height: a.bottom - a.top
        }
    }
}
), null);
__d("getUnboundedScrollPosition", ["Scroll"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a === window) {
            var c;
            return {
                x: (c = window.pageXOffset) != null ? c : b("Scroll").getLeft(document.documentElement),
                y: (c = window.pageYOffset) != null ? c : b("Scroll").getTop(document.documentElement)
            }
        }
        return {
            x: b("Scroll").getLeft(a),
            y: b("Scroll").getTop(a)
        }
    }
    e.exports = a
}
), null);
__d("getViewportDimensions", ["UserAgent"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = j;
    var g = function() {
        var a = null;
        return function() {
            var b = document.body;
            if (b == null)
                return null;
            (a == null || !b.contains(a)) && (a = document.createElement("div"),
            a.style.left = Number.MAX_SAFE_INTEGER + "px",
            a.style.width = "100%",
            a.style.height = "100%",
            a.style.position = "fixed",
            b.appendChild(a));
            return a
        }
    }();
    function h() {
        var a;
        document.documentElement && (a = document.documentElement.clientWidth);
        a == null && document.body && (a = document.body.clientWidth);
        return a || 0
    }
    function i() {
        var a;
        document.documentElement && (a = document.documentElement.clientHeight);
        a == null && document.body && (a = document.body.clientHeight);
        return a || 0
    }
    function j() {
        return {
            width: window.innerWidth || h(),
            height: window.innerHeight || i()
        }
    }
    j.withoutScrollbars = function() {
        return b("UserAgent").isPlatform("Android") ? j() : {
            width: h(),
            height: i()
        }
    }
    ;
    j.layout = function() {
        var a, b = g();
        return {
            width: (a = b == null ? void 0 : b.clientWidth) != null ? a : h(),
            height: (a = b == null ? void 0 : b.clientHeight) != null ? a : i()
        }
    }
}
), null);
__d("getOwnObjectValues", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        return Object.keys(a).map(function(b) {
            return a[b]
        })
    }
}
), null);
__d("guid", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a() {
        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
    }
}
), null);
__d("keyMirror", ["unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = {};
        if (!(a instanceof Object && !Array.isArray(a)))
            throw b("unrecoverableViolation")("keyMirror(...): Argument must be an object.", "comet_infra");
        for (var d in a) {
            if (!Object.prototype.hasOwnProperty.call(a, d))
                continue;
            c[d] = d
        }
        return c
    }
}
), null);
__d("EventProfilerSham", [], (function(a, b, c, d, e, f) {
    a = {
        __wrapEventListenHandler: function(a) {
            return a
        },
        tagCurrentActiveInteractionsAs: function(a) {},
        setCurrentAdAccountId: function(a) {},
        setAdsConfig: function(a) {}
    };
    b = a;
    e.exports = b
}
), null);
__d("fbjs/lib/ExecutionEnvironment", ["ExecutionEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("ExecutionEnvironment")
}
), null);
__d("useThrottledComet", ["CometThrottle", "React", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c) {
        c === void 0 && (c = 100);
        var d = g.useRef(a);
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            d.current = a
        }, [a]);
        var e = g.useMemo(function() {
            return b("CometThrottle")(function() {
                var a = arguments;
                return d.current == null ? void 0 : d.current.apply(d, a)
            }, c)
        }, [c]);
        g.useEffect(function() {
            e.cancel()
        }, []);
        return e
    }
}
), null);
__d("useMWChatTabContainerNewPreload", ["JSResource", "JSScheduler", "React", "useCometPreloader"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("JSResource")("MWChatTabContainerNew.bs").__setRef("useMWChatTabContainerNewPreload");
    function a() {
        var a = g.useCallback(function() {
            b("JSScheduler").scheduleSpeculativeCallback(function() {
                return h.preload()
            })
        }, []);
        a = b("useCometPreloader")("button", a, a);
        var c = a[0];
        a = a[1];
        return [c, a]
    }
}
), null);
__d("useCometSearchResultsEntryPointSurface", ["isSearchCometGlobalResultPageTracePolicy", "isSearchCometScopedResultPageTracePolicy", "useCometRouterState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = new Map([["apps", "SERP_APPS_TAB"], ["events", "SERP_EVENTS_TAB"], ["groups", "SERP_GROUPS_TAB"], ["links", "SERP_NEWS_LINK_TAB"], ["pages", "SERP_PAGES_TAB"], ["people", "SERP_PEOPLE_TAB"], ["photos", "SERP_PHOTOS_TAB"], ["places", "SERP_PLACES_TAB"], ["posts", "SERP_POSTS_TAB"], ["top", "SERP_TOP_TAB"], ["videos", "SERP_VIDEOS_TAB"]])
      , h = new Map([["groups_home", "GROUPS_HOME_SERP_ALL_TAB"], ["groups", "GROUPS_HOME_SERP_GROUPS_TAB"], ["posts", "GROUPS_HOME_SERP_GROUP_POSTS_TAB"]]);
    function a(a) {
        a = a === void 0 ? {} : a;
        var c = a.currentSearchType;
        a = a.entryPointSurface;
        var d = b("useCometRouterState")();
        if (a != null)
            return a;
        a = (d == null ? void 0 : d.pushViewStack) || [];
        if (a.length > 0) {
            a = (a = a[a.length - 1]) == null ? void 0 : a.route
        } else
            a = d == null ? void 0 : d.main.route;
        d = (d = a) == null ? void 0 : d.tracePolicy;
        a = (a = a) == null ? void 0 : (a = a.params) == null ? void 0 : a.searchtype;
        a = typeof a === "string" ? a : null;
        c = (c = c) != null ? c : a;
        if (c != null) {
            var e;
            d != null && b("isSearchCometGlobalResultPageTracePolicy")(d) ? e = g : d === "comet.groups.search" && (e = h);
            return e != null ? e.get(c) : null
        }
        var f;
        if (d != null && !b("isSearchCometScopedResultPageTracePolicy")(d) && !b("isSearchCometGlobalResultPageTracePolicy")(d)) {
            a = d.match(/^(comet\.[a-zA-Z_]+).*$/);
            a != null && (f = a[1])
        }
        return (c = f) != null ? c : d
    }
}
), null);
__d("searchCometTypeaheadMouseUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.hasModifierKeyPressed = a;
    function a(a) {
        return a != null && (a.ctrlKey || a.metaKey || a.shiftKey)
    }
}
), null);
__d("CometSearchInternalTypeaheadStateContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        activeEntries: [],
        highlightedEntry: null,
        highlightedEntrySource: null,
        isOpened: !1
    });
    e.exports = c
}
), null);
__d("useCometSearchInternalTypeaheadState", ["CometSearchInternalTypeaheadStateContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometSearchInternalTypeaheadStateContext"))
    }
}
), null);
__d("useCometSearchInternalTypeaheadFetchHandler", ["React", "useCometSearchInternalTypeaheadFetch", "useCometSearchInternalTypeaheadState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.loggingProvider
          , d = a.queryString
          , e = a.traceProvider;
        a = b("useCometSearchInternalTypeaheadState")();
        var f = a.activeEntries
          , h = a.isOpened;
        a = b("useCometSearchInternalTypeaheadFetch")();
        var i = a.fetch;
        a = g.useCallback(function() {
            function a(a, b) {
                var d = null;
                c != null && (d = c.addEvent({
                    action: "keystroke",
                    entries: f,
                    queryString: a
                }));
                d = d != null ? {
                    loggingEventTrace: d,
                    perfTraceAPI: b,
                    query: a
                } : {
                    perfTraceAPI: b,
                    query: a
                };
                i(d)
            }
            var b = d.trimLeft();
            if (!h)
                return;
            e ? e.trace(function(c) {
                return a(b, c)
            }, b) : a(b)
        }, [f, i, h, c, d, e]);
        g.useEffect(a, [h, d])
    }
}
), null);
__d("useCometSearchInternalTypeaheadOnAbandonLoggingHandler", ["React", "useCometSearchInternalTypeaheadState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.callback
          , d = a.loggingProvider
          , e = a.queryString;
        a = b("useCometSearchInternalTypeaheadState")();
        var f = a.activeEntries;
        return g.useCallback(function() {
            d != null && d.isSessionActive() && (d.addEvent({
                action: "abandon",
                entries: f,
                queryString: e
            }),
            d.endSession()),
            c && c()
        }, [f, d, c, e])
    }
}
), null);
__d("useCometSearchInternalTypeaheadOnEnterLoggingHandler", ["React", "useCometSearchInternalTypeaheadState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.loggingProvider
          , d = a.onEnter
          , e = a.queryString;
        a = b("useCometSearchInternalTypeaheadState")();
        var f = a.activeEntries
          , h = a.highlightedEntry;
        return g.useCallback(function() {
            h != null && (c && c.addEvent({
                action: "click",
                entries: f,
                entry: h,
                queryString: e
            })),
            h == null && (c && c.addEvent({
                action: "enter",
                entries: f,
                queryString: e
            })),
            c && c.endSession(),
            d && d()
        }, [f, h, c, d, e])
    }
}
), null);
__d("useCometSearchInternalTypeaheadOnFocusLoggingHandler", ["React", "useCometSearchInternalTypeaheadState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.loggingProvider
          , d = a.onFocus
          , e = a.queryString;
        a = b("useCometSearchInternalTypeaheadState")();
        var f = a.activeEntries;
        return g.useCallback(function() {
            c != null && (c.startSession(),
            c.addEvent({
                action: "typeahead_appeared",
                entries: f,
                queryString: e
            })),
            d && d()
        }, [f, c, d, e])
    }
}
), null);
__d("useCometSearchInternalTypeaheadOnPressEntryLoggingHandler", ["React", "useCometSearchInternalTypeaheadState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.loggingProvider
          , d = a.onPressEntry
          , e = a.queryString;
        a = b("useCometSearchInternalTypeaheadState")();
        var f = a.activeEntries;
        return g.useCallback(function(a, b) {
            c != null && (c.addEvent({
                action: "click",
                entries: f,
                entry: a,
                queryString: e
            }),
            c.endSession()),
            d && d(a, b)
        }, [f, c, d, e])
    }
}
), null);
__d("useCometSearchTypeaheadBaseInputRefs", ["React", "mergeRefs"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useRef(null)
          , d = g.useMemo(function() {
            return b("mergeRefs")(c, a)
        }, [c, a]);
        return {
            composedRef: d,
            inputRef: c
        }
    }
}
), null);
__d("CometSearchInternalTypeahead.react", ["React", "emptyFunction", "searchCometTypeaheadMouseUtils", "useCometSearchInternalTypeaheadFetchHandler", "useCometSearchInternalTypeaheadOnAbandonLoggingHandler", "useCometSearchInternalTypeaheadOnEnterLoggingHandler", "useCometSearchInternalTypeaheadOnFocusLoggingHandler", "useCometSearchInternalTypeaheadOnPressEntryLoggingHandler", "useCometSearchInternalTypeaheadState", "useCometSearchTypeaheadBaseInputRefs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.layoutStrategyRenderer
          , e = a.loggingProvider
          , f = a.onEnter
          , h = a.onFocus
          , i = a.onPressEntry
          , j = a.onSelectFreeformQuery
          , k = a.onShiftTab
          , l = a.onTab
          , m = a.queryString
          , n = a.shouldQueryStringFollowHighlightedEntry;
        n = n === void 0 ? !0 : n;
        var o = a.traceProvider;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["layoutStrategyRenderer", "loggingProvider", "onEnter", "onFocus", "onPressEntry", "onSelectFreeformQuery", "onShiftTab", "onTab", "queryString", "shouldQueryStringFollowHighlightedEntry", "traceProvider"]);
        c = b("useCometSearchTypeaheadBaseInputRefs")(c);
        var p = c.composedRef
          , q = c.inputRef;
        c = b("useCometSearchInternalTypeaheadState")();
        var r = c.highlightedEntry;
        b("useCometSearchInternalTypeaheadFetchHandler")({
            loggingProvider: e,
            queryString: m,
            traceProvider: o
        });
        c = b("useCometSearchInternalTypeaheadOnEnterLoggingHandler")({
            loggingProvider: e,
            onEnter: g.useCallback(function() {
                r != null ? i && i(r) : j && j(m),
                f && f()
            }, [r, f, i, j, m]),
            queryString: m
        });
        h = b("useCometSearchInternalTypeaheadOnFocusLoggingHandler")({
            loggingProvider: e,
            onFocus: h,
            queryString: m
        });
        var s = b("useCometSearchInternalTypeaheadOnPressEntryLoggingHandler")({
            loggingProvider: e,
            onPressEntry: g.useCallback(function(a, c) {
                if (b("searchCometTypeaheadMouseUtils").hasModifierKeyPressed(c)) {
                    q.current && q.current.focus();
                    return
                }
                i && i(a)
            }, [q, i]),
            queryString: m
        });
        k = b("useCometSearchInternalTypeaheadOnAbandonLoggingHandler")({
            callback: k,
            loggingProvider: e,
            queryString: m
        });
        l = b("useCometSearchInternalTypeaheadOnAbandonLoggingHandler")({
            callback: l,
            loggingProvider: e,
            queryString: m
        });
        var t = b("useCometSearchInternalTypeaheadOnAbandonLoggingHandler")({
            callback: b("emptyFunction"),
            loggingProvider: e,
            queryString: m
        });
        e = b("useCometSearchInternalTypeaheadOnAbandonLoggingHandler")({
            callback: b("emptyFunction"),
            loggingProvider: e,
            queryString: m
        });
        return g.jsx(d, babelHelpers["extends"]({}, a, {
            onAbandonTypeahead_DO_NOT_USE: e,
            onClick: b("emptyFunction"),
            onEnter: c,
            onFocus: h,
            onHighlightEntry: a.onHighlightEntry,
            onOutsideClick: t,
            onPressEntry: s,
            onShiftTab: k,
            onTab: l,
            queryString: m,
            ref: p,
            shouldQueryStringFollowHighlightedEntry: n,
            traceProvider: o,
            xstyles: a.xstyles
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("CometSearchInternalTypeaheadStateDispatcherContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext();
    e.exports = c
}
), null);
__d("useCometSearchInternalTypeaheadStateDispatcher", ["CometSearchInternalTypeaheadStateDispatcherContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometSearchInternalTypeaheadStateDispatcherContext"))
    }
}
), null);
__d("CometSearchInternalTypeaheadFetchProvider", ["CometSearchInternalTypeaheadFetchContext", "React", "useCometSearchInternalTypeaheadStateDispatcher", "useCometSearchTypeaheadBaseDataSourceFetch"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("CometSearchInternalTypeaheadFetchContext").Provider
      , h = b("React");
    function a(a) {
        var c = a.children
          , d = a.dataSource
          , e = a.dataSourceFetchConfigParams
          , f = a.onFetchEntries_DO_NOT_USE
          , i = a.traceProvider;
        a = b("useCometSearchInternalTypeaheadStateDispatcher")();
        var j = a.dispatchActiveEntries;
        a = b("useCometSearchTypeaheadBaseDataSourceFetch")({
            dataSource: d,
            dataSourceFetchConfigParams: e,
            onResolvePayload: h.useCallback(function(a, b) {
                var c;
                a = a.entries;
                var d = b.isTraceComplete;
                b = b.source;
                j((c = a) != null ? c : []);
                f && f(a);
                i && !i.isResolved() && (d && (b === "cache" && a.length >= i.getEntriesCountForVisualComplete() ? i.setEndReason("max_suggestions_reached") : b === "network" ? i.setEndReason("all_queries_completed") : b === "network-no-results" && i.setEndReason("all_queries_completed_no_network_results"),
                i.resolve()))
            }, [j, f, i])
        });
        d = a[0];
        var k = d.isLoading
          , l = d.source
          , m = a[1]
          , n = a[2];
        e = h.useMemo(function() {
            return {
                fetch: m,
                isLoading: k,
                refetch: n,
                source: l
            }
        }, [m, k, n, l]);
        return h.jsx(g, {
            value: e,
            children: c
        })
    }
}
), null);
__d("CometSearchInternalTypeaheadStateProvider", ["CometSearchInternalTypeaheadStateContext", "CometSearchInternalTypeaheadStateDispatcherContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("CometSearchInternalTypeaheadStateContext").Provider
      , h = b("CometSearchInternalTypeaheadStateDispatcherContext").Provider
      , i = b("React");
    function a(a) {
        var b = a.children
          , c = a.onClose
          , d = a.onOpen;
        a = i.useState(!1);
        var e = a[0]
          , f = a[1];
        a = i.useState(null);
        var j = a[0]
          , k = a[1];
        a = i.useState(null);
        var l = a[0]
          , m = a[1];
        a = i.useState([]);
        var n = a[0]
          , o = a[1]
          , p = i.useCallback(function(a) {
            var b = a.entry;
            a = a.source;
            k(b);
            m(a)
        }, [])
          , q = i.useCallback(function(a) {
            if (a === e)
                return;
            f(a);
            a ? d && d() : c && c()
        }, [e, c, d]);
        a = i.useMemo(function() {
            return {
                dispatchActiveEntries: o,
                dispatchHighlightedEntry: p,
                dispatchIsOpened: q
            }
        }, [p, q]);
        var r = i.useMemo(function() {
            return {
                activeEntries: n,
                highlightedEntry: j,
                highlightedEntrySource: l,
                isOpened: e
            }
        }, [n, j, l, e]);
        return i.jsx(h, {
            value: a,
            children: i.jsx(g, {
                value: r,
                children: b
            })
        })
    }
}
), null);
__d("CometTypeahead.react", ["CometHeroInteractionContextPassthrough.react", "CometSearchInternalTypeahead.react", "CometSearchInternalTypeaheadFetchProvider", "CometSearchInternalTypeaheadStateProvider", "React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.dataSource
          , e = a.dataSourceFetchConfigParams
          , f = a.decorators
          , h = f === void 0 ? [] : f;
        f = a.label;
        var i = a.placeholder
          , j = a.onFetchEntries_DO_NOT_USE
          , k = a.onOpen
          , l = a.onChange
          , m = a.onClose
          , n = a.onPressEntry
          , o = a.shouldQueryStringUpdateFromSelectedEntryOnClick
          , p = o === void 0 ? !0 : o;
        o = babelHelpers.objectWithoutPropertiesLoose(a, ["dataSource", "dataSourceFetchConfigParams", "decorators", "label", "placeholder", "onFetchEntries_DO_NOT_USE", "onOpen", "onChange", "onClose", "onPressEntry", "shouldQueryStringUpdateFromSelectedEntryOnClick"]);
        a = g.useMemo(function() {
            var a = b("CometSearchInternalTypeahead.react");
            h.forEach(function(b) {
                var c = b.decorate;
                b = b.params;
                a = c(a, b)
            });
            return a
        }, [h]);
        var q = g.useCallback(function(a) {
            p && l(a.getLabel()),
            n && n(a)
        }, [l, n, p]);
        f = f == null && i != null ? i : f;
        var r = o.traceProvider;
        return g.jsx(b("CometHeroInteractionContextPassthrough.react"), {
            clear: !0,
            children: g.jsx(b("CometSearchInternalTypeaheadStateProvider"), {
                onClose: m,
                onOpen: k,
                children: g.jsx(b("CometSearchInternalTypeaheadFetchProvider"), {
                    dataSource: d,
                    dataSourceFetchConfigParams: e,
                    onFetchEntries_DO_NOT_USE: j,
                    traceProvider: r,
                    children: g.jsx(a, babelHelpers["extends"]({}, o, {
                        label: f,
                        onChange: l,
                        onHighlightEntry: b("emptyFunction"),
                        onPressEntry: q,
                        placeholder: i,
                        ref: c
                    }))
                })
            })
        })
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("CometSearchTypeaheadBaseErrorFallback.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.jsx("div", {
            className: "taijpn5t datstx6m j83agx80 bp9cbjyn"
        })
    }
}
), null);
__d("CometSearchTypeaheadBaseHelperText.react", ["React", "TetraTextPairing.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.text;
        return g.jsx("div", {
            className: "aov4n071",
            children: g.jsx(b("TetraTextPairing.react"), {
                level: 4,
                meta: a,
                metaColor: "secondary"
            })
        })
    }
}
), null);
__d("CometSearchTypeaheadBaseHightlightBoldTransform.react", ["React", "TetraText.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.segment.content;
        return g.jsx(b("TetraText.react"), {
            type: "bodyLink3",
            children: a
        })
    }
}
), null);
__d("CometSearchTypeaheadBaseHightlightNormalTransform.react", ["React", "TetraText.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.segment.content;
        return g.jsx(b("TetraText.react"), {
            type: "body3",
            children: a
        })
    }
}
), null);
__d("mayHaveConnectedCharacters", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return a.match(/[\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1A20-\u1AAF\u1B00-\u1B7F\u1B80-\u1BBF\u1BC0-\u1BFF\u1C00-\u1C4F\u1CC0-\u1CCF\uA800-\uA82F\uA840-\uA87F\uA880-\uA8DF\uA8E0-\uA8FF\uA930-\uA95F\uA980-\uA9DF\uA9E0-\uA9FF\uAA00-\uAA5F\uAA60-\uAA7F\uAA80-\uAADF\uAAE0-\uAAFF\uABC0-\uABFF\u0600-\u06FF\u0750–\u077F\u08A0–\u08FF\uFB50–\uFDFF\uFE70–\uFEFF\u4e00-\u9faf\u0D80-\u0DFF\u0E80-\u0EFF]/) != null
    }
}
), null);
__d("cometSearchTypeaheadHighlightUtils", ["escapeRegex", "mayHaveConnectedCharacters"], (function(a, b, c, d, e, f) {
    "use strict";
    f.highlightMatch = a;
    f.highlightNonMatch = c;
    function g(a, c, d) {
        if (b("mayHaveConnectedCharacters")(c))
            return [{
                content: c,
                isMatched: !1
            }];
        a = b("escapeRegex")(a);
        a = new RegExp("( " + a.split(/\s+/).join("| ") + ")","gi");
        c = " " + c;
        var e = []
          , f = 0
          , g = null;
        while (!0) {
            g = a.exec(c);
            if (g == null)
                break;
            var h = c.substring(f, g.index);
            f === 0 && (h = h.trimLeft());
            e.push({
                content: h,
                isMatched: !d
            });
            h = g[0];
            g.index === 0 && (h = h.trimLeft());
            f = g.index + g[0].length;
            e.push({
                content: h,
                isMatched: d
            })
        }
        h = c.substring(f, c.length);
        e.push({
            content: h,
            isMatched: !d
        });
        return e
    }
    function a(a, b) {
        return g(a, b, !0)
    }
    function c(a, b) {
        return g(a, b, !1)
    }
}
), null);
__d("CometSearchTypeaheadBaseHighlight.react", ["CometSearchTypeaheadBaseHightlightBoldTransform.react", "CometSearchTypeaheadBaseHightlightNormalTransform.react", "React", "cometSearchTypeaheadHighlightUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.children
          , d = a.content
          , e = a.query;
        a = a.strategy;
        if (e == null || d == null)
            return null;
        var f = null;
        switch (a) {
        case "match":
            f = b("cometSearchTypeaheadHighlightUtils").highlightMatch;
            break;
        case "non-match":
            f = b("cometSearchTypeaheadHighlightUtils").highlightNonMatch;
            break;
        default:
        }
        return f ? c(g.jsx(g.Fragment, {
            children: f(e, d).map(function(a, c) {
                return a.isMatched ? g.jsx(b("CometSearchTypeaheadBaseHightlightBoldTransform.react"), {
                    segment: a
                }, String(c)) : g.jsx(b("CometSearchTypeaheadBaseHightlightNormalTransform.react"), {
                    segment: a
                }, String(c))
            })
        })) : c(g.jsx(b("CometSearchTypeaheadBaseHightlightNormalTransform.react"), {
            segment: {
                content: d,
                isMatched: !1
            }
        }))
    }
}
), null);
__d("CometSearchTypeaheadBaseFocusLockRegion.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c = a.children;
        a = a.xstyle;
        var d = h.useCallback(function(a) {
            a.preventDefault()
        }, []);
        return h.jsx("div", {
            className: (g || (g = b("stylex")))(a),
            onMouseDown: d,
            children: c
        })
    }
}
), null);
__d("useCometSearchTypeaheadBaseInputStrategyOnBlurHandler", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = a.onBlur;
        return g.useCallback(function() {
            b && b()
        }, [b])
    }
}
), null);
__d("useCometSearchTypeaheadBaseInputStrategyOnFocusHandler", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = a.inputRef
          , c = a.onFocus;
        return g.useCallback(function() {
            b.current != null && b.current.select(),
            c && c()
        }, [b, c])
    }
}
), null);
__d("useCometSearchTypeaheadBaseInputHandlers", ["useCometSearchTypeaheadBaseInputStrategyOnBlurHandler", "useCometSearchTypeaheadBaseInputStrategyOnFocusHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = a.inputRef
          , d = a.onBlur
          , e = a.onFocus;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["inputRef", "onBlur", "onFocus"]);
        c = b("useCometSearchTypeaheadBaseInputStrategyOnFocusHandler")({
            inputRef: c,
            onFocus: e
        });
        e = b("useCometSearchTypeaheadBaseInputStrategyOnBlurHandler")({
            onBlur: d
        });
        return babelHelpers["extends"]({}, a, {
            onBlur: e,
            onFocus: c
        })
    }
}
), null);
__d("useCometSearchTypeaheadBaseInputStrategyOnChangeHandler", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = a.onChange;
        return g.useCallback(function(a) {
            var c = a.target.value;
            b && b(c, a)
        }, [b])
    }
}
), null);
__d("CometSearchTypeaheadBaseInputStrategyEventListener.react", ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", "React", "stylex", "useCometSearchTypeaheadBaseInputHandlers", "useCometSearchTypeaheadBaseInputRefs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = {
        root: {
            width: "k4urcfbm"
        }
    };
    function a(a, c) {
        var d = a.children
          , e = a.isInline
          , f = a.onBackspace
          , j = a.onDownArrow
          , k = a.onEnter
          , l = a.onEscape
          , m = a.onShiftTab
          , n = a.onTab
          , o = a.onUpArrow;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "isInline", "onBackspace", "onDownArrow", "onEnter", "onEscape", "onShiftTab", "onTab", "onUpArrow"]);
        var p = h.useMemo(function() {
            var a;
            return [{
                command: {
                    key: (a = b("CometKeys")).DELETE
                },
                description: g._("X\u00f3a k\u00fd t\u1ef1 cu\u1ed1i kh\u1ecfi c\u1ee5m t\u1eeb nh\u1eadp v\u00e0o."),
                handler: function() {
                    return f && f()
                },
                isHiddenCommand: !0,
                shouldPreventDefault: !1,
                triggerFromInputs: !0
            }, {
                command: {
                    key: a.DOWN
                },
                description: g._("G\u1ee3i \u00fd ti\u1ebfp theo"),
                handler: function() {
                    return j && j()
                },
                triggerFromInputs: !0
            }, {
                command: {
                    key: a.UP
                },
                description: g._("G\u1ee3i \u00fd tr\u01b0\u1edbc \u0111\u00f3"),
                handler: function() {
                    return o && o()
                },
                triggerFromInputs: !0
            }, {
                command: {
                    key: a.ESCAPE
                },
                description: g._("\u0110\u00f3ng g\u1ee3i \u00fd"),
                handler: function() {
                    return l && l()
                },
                triggerFromInputs: !0
            }, {
                command: {
                    key: a.ENTER
                },
                description: g._("Ch\u1ecdn g\u1ee3i \u00fd"),
                handler: function() {
                    return k && k()
                },
                triggerFromInputs: !0
            }, {
                command: {
                    key: a.TAB
                },
                description: g._("\u0110\u1ec3 l\u1ea1i n\u1ed9i dung nh\u1eadp"),
                handler: function() {
                    return n && n()
                },
                isHiddenCommand: !0,
                shouldPreventDefault: !1,
                shouldStopPropagation: !1,
                triggerFromInputs: !0
            }, {
                command: {
                    key: a.TAB,
                    shift: !0
                },
                description: g._("\u0110\u1ec3 l\u1ea1i n\u1ed9i dung nh\u1eadp"),
                handler: function() {
                    return m && m()
                },
                isHiddenCommand: !0,
                shouldPreventDefault: !1,
                shouldStopPropagation: !1,
                triggerFromInputs: !0
            }]
        }, [f, j, k, l, m, n, o]);
        c = b("useCometSearchTypeaheadBaseInputRefs")(c);
        var q = c.composedRef;
        c = c.inputRef;
        c = b("useCometSearchTypeaheadBaseInputHandlers")(babelHelpers["extends"]({
            inputRef: c
        }, a));
        return h.jsx(b("CometComponentWithKeyCommands.react"), {
            commandConfigs: p,
            elementType: e === !0 ? "span" : "div",
            xstyle: i.root,
            children: d(q, c)
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("cometTypeaheadBaseInputWebkitStyles", ["stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        "default": {
            WebkitAppearance: "aj8hi1zk",
            "::-webkit-search-decoration": {
                appearance: "r4fl40cc"
            },
            "::-webkit-search-cancel-button": {
                appearance: "kd8v7px7"
            },
            "::-webkit-search-results-button": {
                appearance: "m07ooulj"
            },
            "::-webkit-search-results-decoration": {
                appearance: "mzan44vs"
            }
        }
    };
    b = a;
    e.exports = b
}
), null);
__d("useCometSearchTypeaheadBaseInputDirection", ["React", "UnicodeBidi"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = new Map([["LTR", "ltr"], ["RTL", "rtl"], ["NEUTRAL", "auto"]]);
    function a(a) {
        var c = a.fallback
          , d = a.queryString;
        return g.useMemo(function() {
            var a = b("UnicodeBidi").getDirection(d, c);
            return h.get(a)
        }, [c, d])
    }
}
), null);
__d("CometSearchTypeaheadBaseInputRoundedStrategy.react", ["ix", "CometRoundedTextInput.react", "React", "TetraIcon.react", "cometTypeaheadBaseInputWebkitStyles", "fbicon", "stylex", "useCometSearchTypeaheadBaseInputDirection", "useCometSearchTypeaheadBaseInputStrategyOnChangeHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a, c) {
        a.description;
        a.errorMessage;
        a.id;
        var d = a.inputEndContent
          , e = a.inputStartContent
          , f = a.inputExtraProps;
        f = f === void 0 ? {} : f;
        var i = f.hideIconOnFocus;
        i = i === void 0 ? !1 : i;
        var j = f.hideIconAnimation;
        j = j === void 0 ? !1 : j;
        var k = f.icon;
        k = k === void 0 ? h.jsx(b("TetraIcon.react"), {
            color: "secondary",
            icon: b("fbicon")._(g("491282"), 16),
            size: 16
        }) : k;
        var l = f.size;
        f = f.xstyle;
        f = f === void 0 ? {} : f;
        var m = a.isDisabled
          , n = a.onChange
          , o = a.label;
        o = o === void 0 ? "" : o;
        var p = a.queryString
          , q = a.testid;
        q = babelHelpers.objectWithoutPropertiesLoose(a, ["description", "errorMessage", "id", "inputEndContent", "inputStartContent", "inputExtraProps", "isDisabled", "onChange", "label", "queryString", "testid"]);
        a = b("useCometSearchTypeaheadBaseInputDirection")({
            queryString: p
        });
        n = b("useCometSearchTypeaheadBaseInputStrategyOnChangeHandler")({
            onChange: n
        });
        return h.jsxs("div", {
            className: "k4urcfbm j83agx80 bp9cbjyn",
            children: [e, h.jsx(b("CometRoundedTextInput.react"), babelHelpers["extends"]({}, q, {
                autoComplete: "off",
                "data-testid": void 0,
                dir: a,
                disabled: m,
                hideIconAnimation: j,
                hideIconOnFocus: i,
                icon: k,
                label: o,
                onChange: n,
                ref: c,
                size: l,
                spellCheck: !1,
                suppressHydrationWarning: !0,
                type: "search",
                value: p,
                xstyle: [f, b("cometTypeaheadBaseInputWebkitStyles")["default"]]
            })), d]
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("useCometSearchTypeaheadBaseLayoutStrategyOnBlurHandler", ["React", "useCometSearchInternalTypeaheadStateDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.onBlur;
        a = b("useCometSearchInternalTypeaheadStateDispatcher")();
        var d = a.dispatchHighlightedEntry;
        return g.useCallback(function() {
            d({
                entry: null,
                source: null
            }),
            c && c()
        }, [d, c])
    }
}
), null);
__d("useCometSearchTypeaheadBaseLayoutStrategyOnChangeHandler", ["React", "useCometSearchInternalTypeaheadState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.onChange
          , d = a.onHighlightEntry;
        a = b("useCometSearchInternalTypeaheadState")();
        var e = a.highlightedEntry;
        return g.useCallback(function(a, b) {
            e != null && d(null, "keyboard"),
            c && c(a, b)
        }, [e, c, d])
    }
}
), null);
__d("useCometSearchInternalTypeaheadKeyboardNavigation", ["React", "cometSearchTypeaheadBaseKeyboardNavigationUtils", "useCometSearchInternalTypeaheadState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = b("useCometSearchInternalTypeaheadState")()
          , c = a.activeEntries;
        a = a.highlightedEntry;
        var d = a != null ? a.getKey() : null;
        a = g.useCallback(function(a) {
            return b("cometSearchTypeaheadBaseKeyboardNavigationUtils").moveDown(c, d, function(b) {
                a(b, "keyboard")
            })
        }, [d, c]);
        var e = g.useCallback(function(a) {
            return b("cometSearchTypeaheadBaseKeyboardNavigationUtils").moveUp(c, d, function(b) {
                a(b, "keyboard")
            })
        }, [d, c]);
        return {
            onKeyboardDownArrow: a,
            onKeyboardUpArrow: e
        }
    }
}
), null);
__d("useCometSearchTypeaheadBaseLayoutStrategyOnDownArrowHandler", ["React", "useCometSearchInternalTypeaheadKeyboardNavigation"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.onDownArrow
          , d = a.onHighlightEntry;
        a = b("useCometSearchInternalTypeaheadKeyboardNavigation")();
        var e = a.onKeyboardDownArrow;
        return g.useCallback(function() {
            e(d),
            c && c()
        }, [c, d, e])
    }
}
), null);
__d("useCometSearchTypeaheadBaseLayoutStrategyOnEnterHandler", ["React", "useCometSearchInternalTypeaheadState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.inputRef
          , d = a.onEnter;
        a = b("useCometSearchInternalTypeaheadState")();
        var e = a.highlightedEntry
          , f = a.highlightedEntrySource
          , h = c.current;
        return g.useCallback(function() {
            var a;
            a = (a = h == null ? void 0 : h.value) != null ? a : "";
            var b = e != null && f === "keyboard";
            if (a.trim().length === 0 && !b)
                return;
            d && d()
        }, [h, e, f, d])
    }
}
), null);
__d("useCometSearchTypeaheadBaseLayoutStrategyOnHighlightEntryHandler", ["React", "useCometSearchInternalTypeaheadStateDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.onHighlightEntry;
        a = b("useCometSearchInternalTypeaheadStateDispatcher")();
        var d = a.dispatchHighlightedEntry;
        return g.useCallback(function(a, b) {
            d({
                entry: a,
                source: b
            }),
            c && c(a, b)
        }, [d, c])
    }
}
), null);
__d("useCometSearchTypeaheadBaseLayoutStrategyOnOutsideClickHandler", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = a.inputRef
          , c = a.onOutsideClick;
        return g.useCallback(function() {
            if (b.current === document.activeElement)
                return;
            c && c()
        }, [b, c])
    }
}
), null);
__d("useCometSearchTypeaheadBaseLayoutStrategyOnPressEntryHandler", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = a.onPressEntry;
        return g.useCallback(function(a, c) {
            b(a, c)
        }, [b])
    }
}
), null);
__d("useCometSearchTypeaheadBaseLayoutStrategyOnUpArrowHandler", ["React", "useCometSearchInternalTypeaheadKeyboardNavigation"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.onHighlightEntry
          , d = a.onUpArrow;
        a = b("useCometSearchInternalTypeaheadKeyboardNavigation")();
        var e = a.onKeyboardUpArrow;
        return g.useCallback(function() {
            e(c),
            d && d()
        }, [c, e, d])
    }
}
), null);
__d("useCometSearchTypeaheadBaseLayoutStrategyStyles", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        defaultLayout: {
            boxSizing: "rq0escxv",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            width: "k4urcfbm"
        },
        stateDisabled: {},
        stateError: {},
        stateOpened: {},
        stateWarning: {}
    };
    function a(a) {
        var b = a.isDisabled
          , c = b === void 0 ? !1 : b;
        b = a.isError;
        var d = b === void 0 ? !1 : b;
        b = a.isOpened;
        var e = b === void 0 ? !1 : b;
        b = a.isWarning;
        var f = b === void 0 ? !1 : b;
        b = a.xstyles;
        b = b === void 0 ? {} : b;
        var i = b.inputXStyle
          , j = b.layoutOpenedXStyle
          , k = b.layoutXStyle
          , l = b.viewXStyle;
        a = g.useMemo(function() {
            return {
                inputXStyle: i,
                layoutXStyle: [h.defaultLayout, k, e && j, c && h.stateDisabled, e && h.stateOpened, d && h.stateError, f && h.stateWarning],
                viewXStyle: [l]
            }
        }, [i, c, d, e, f, j, k, l]);
        return a
    }
}
), null);
__d("useCometSearchTypeaheadBaseViewStrategyOutsideClickListener", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, b) {
        var c = g.useCallback(function(c) {
            var d = a.current;
            c = c.target;
            d != null && c instanceof Node && !d.contains(c) && b()
        }, [a, b]);
        g.useEffect(function() {
            document.addEventListener("click", c);
            return function() {
                document.removeEventListener("click", c)
            }
        }, [c])
    }
}
), null);
__d("CometSearchTypeaheadBaseViewStrategyEventListener.react", ["React", "useCometSearchTypeaheadBaseViewStrategyOutsideClickListener"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.children;
        a = a.onOutsideClick;
        var d = g.useRef(null);
        b("useCometSearchTypeaheadBaseViewStrategyOutsideClickListener")(d, a);
        return c(d)
    }
}
), null);
__d("cometWithHighlightDropOnMouseLeave", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return function(b) {
            var c = function() {
                b.onHighlightEntry(null, "mouse")
            };
            return g.jsx("div", {
                onMouseLeave: c,
                children: g.jsx(a, babelHelpers["extends"]({}, b))
            })
        }
    }
}
), null);
__d("useCometSearchInternalTypeaheadHeroTracing", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, b) {
        var c = a ? a.getInteractionUUID() : null
          , d = a ? a.getVCTrackerRef() : null
          , e = c != null && a != null && !a.isResolved();
        return g.useMemo(function() {
            var f = function(c, d) {
                a && d != null && a.setEventStartTime(d.timeStamp),
                b(c, d)
            };
            return {
                interactionUUID: c,
                onTracedChange: f,
                shouldHoldHeroTracing: e,
                vcTrackerRef: d
            }
        }, [c, b, e, a, d])
    }
}
), null);
__d("CometSearchTypeaheadInternalLayoutContextualStrategy.react", ["CometContextualLayer.react", "CometHeroHoldTrigger.react", "CometHeroInteractionWithDiv.react", "CometSearchTypeaheadBaseInputStrategyEventListener.react", "CometSearchTypeaheadBaseViewStrategyEventListener.react", "React", "cometWithHighlightDropOnMouseLeave", "mergeRefs", "stylex", "useCometSearchInternalTypeaheadHeroTracing", "useCometSearchInternalTypeaheadState", "useCometSearchTypeaheadBaseLayoutStrategyStyles"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        helperText: {
            marginTop: "aov4n071"
        },
        view: {
            backgroundColor: "cwj9ozl2",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            flexGrow: "buofh1pr",
            width: "k4urcfbm"
        },
        viewWithShadow: {
            boxShadow: "o55z2nyb"
        }
    };
    function a(a, c) {
        var d = a.contextualProps;
        d = d === void 0 ? {} : d;
        var e = d.align;
        e = e === void 0 ? "stretch" : e;
        var f = d.position;
        f = f === void 0 ? "below" : f;
        d = babelHelpers.objectWithoutPropertiesLoose(d, ["align", "position"]);
        var j = a.extraLayoutProps
          , k = j.ariaProps
          , l = k.ariaDescribedByProps
          , m = k.ariaInputProps
          , n = k.ariaViewProps;
        k = j.helperTextComponent;
        var o = j.isOpened
          , p = j.loadingIndicator
          , q = a.inputStrategyRenderer
          , r = a.label;
        j = a.onBackspace;
        var s = a.onBlur
          , t = a.onFocus
          , u = a.onClick
          , v = a.onDownArrow
          , w = a.onEnter
          , x = a.onEscape
          , y = a.onShiftTab
          , z = a.onTab
          , A = a.onUpArrow
          , B = a.queryString
          , C = a.viewStrategyRenderer
          , D = a.xstyles
          , E = a.traceProvider
          , F = babelHelpers.objectWithoutPropertiesLoose(a, ["contextualProps", "extraLayoutProps", "inputStrategyRenderer", "label", "onBackspace", "onBlur", "onFocus", "onClick", "onDownArrow", "onEnter", "onEscape", "onShiftTab", "onTab", "onUpArrow", "queryString", "viewStrategyRenderer", "xstyles", "traceProvider"]);
        a = h.useRef(null);
        var G = h.useRef(null)
          , H = G.current
          , I = b("useCometSearchInternalTypeaheadState")()
          , J = I.activeEntries
          , K = I.highlightedEntry
          , L = I.highlightedEntrySource;
        I = b("useCometSearchTypeaheadBaseLayoutStrategyStyles")({
            isOpened: o,
            xstyles: D
        });
        D = I.inputXStyle;
        var M = I.layoutXStyle
          , N = I.viewXStyle
          , O = h.useMemo(function() {
            return b("cometWithHighlightDropOnMouseLeave")(C)
        }, [C]);
        I = b("useCometSearchInternalTypeaheadHeroTracing")(E, F.onChange);
        var P = I.interactionUUID;
        E = I.onTracedChange;
        var Q = I.shouldHoldHeroTracing
          , R = I.vcTrackerRef;
        return h.jsxs(h.Fragment, {
            children: [h.jsx("div", {
                className: (g || (g = b("stylex")))(M),
                ref: G,
                children: h.jsx("div", {
                    className: g(D),
                    children: h.jsx(b("CometSearchTypeaheadBaseInputStrategyEventListener.react"), {
                        onBackspace: j,
                        onBlur: s,
                        onChange: E,
                        onClick: u,
                        onDownArrow: v,
                        onEnter: w,
                        onEscape: x,
                        onFocus: t,
                        onShiftTab: y,
                        onTab: z,
                        onUpArrow: A,
                        ref: c,
                        children: function(a, b) {
                            return h.jsx(q, babelHelpers["extends"]({}, m, b, {
                                autoFocus: F.autoFocus,
                                id: F.id,
                                inputEndContent: F.inputEndContent,
                                inputExtraProps: F.inputExtraProps,
                                inputStartContent: F.inputStartContent,
                                isDisabled: F.isDisabled,
                                label: r,
                                placeholder: F.placeholder,
                                queryString: Boolean(F.shouldQueryStringFollowHighlightedEntry) && L === "keyboard" && K != null ? K.getLabel() : B,
                                ref: a,
                                testid: void 0
                            }))
                        }
                    })
                })
            }), k != null && h.jsx("div", babelHelpers["extends"]({
                className: (g || (g = b("stylex")))(i.helperText)
            }, l, {
                children: k
            })), H && o && h.jsx(b("CometContextualLayer.react"), babelHelpers["extends"]({}, d, {
                align: e,
                context_DEPRECATED: H,
                position: f,
                ref: a,
                children: h.jsx(b("CometSearchTypeaheadBaseViewStrategyEventListener.react"), {
                    onOutsideClick: F.onOutsideClick,
                    children: function(a) {
                        return h.jsxs(b("CometHeroInteractionWithDiv.react"), {
                            interactionDesc: "Search_Typeahead",
                            interactionUUID: P,
                            pageletAriaProps: n,
                            ref: b("mergeRefs")(R, a),
                            xstyle: [i.view, i.viewWithShadow, N],
                            children: [h.jsx(b("CometHeroHoldTrigger.react"), {
                                description: "SearchInternalTypeahead",
                                hold: Q
                            }), h.jsx(O, {
                                entries: J,
                                highlightedEntry: K,
                                onAbandonTypeahead_DO_NOT_USE: F.onAbandonTypeahead_DO_NOT_USE,
                                onHighlightEntry: F.onHighlightEntry,
                                onPressEntry: F.onPressEntry,
                                queryString: B
                            }), p]
                        })
                    }
                })
            }))]
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("useCometSearchTypeaheadInternalLayoutInlineStrategyHandlers", ["React", "useCometSearchTypeaheadBaseLayoutStrategyOnBlurHandler", "useCometSearchTypeaheadBaseLayoutStrategyOnChangeHandler", "useCometSearchTypeaheadBaseLayoutStrategyOnDownArrowHandler", "useCometSearchTypeaheadBaseLayoutStrategyOnEnterHandler", "useCometSearchTypeaheadBaseLayoutStrategyOnHighlightEntryHandler", "useCometSearchTypeaheadBaseLayoutStrategyOnOutsideClickHandler", "useCometSearchTypeaheadBaseLayoutStrategyOnPressEntryHandler", "useCometSearchTypeaheadBaseLayoutStrategyOnUpArrowHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.inputRef
          , d = a.onBlur
          , e = a.onChange
          , f = a.onDownArrow
          , h = a.onEnter
          , i = a.onEscape
          , j = a.onHighlightEntry
          , k = a.onOutsideClick
          , l = a.onPressEntry;
        a = a.onUpArrow;
        j = b("useCometSearchTypeaheadBaseLayoutStrategyOnHighlightEntryHandler")({
            onHighlightEntry: j
        });
        d = b("useCometSearchTypeaheadBaseLayoutStrategyOnBlurHandler")({
            onBlur: d
        });
        var m = b("useCometSearchTypeaheadBaseLayoutStrategyOnChangeHandler")({
            onChange: e,
            onHighlightEntry: j
        });
        e = b("useCometSearchTypeaheadBaseLayoutStrategyOnEnterHandler")({
            inputRef: c,
            onEnter: h
        });
        h = g.useCallback(function() {
            m(""),
            i && i()
        }, [m, i]);
        f = b("useCometSearchTypeaheadBaseLayoutStrategyOnDownArrowHandler")({
            onDownArrow: f,
            onHighlightEntry: j
        });
        a = b("useCometSearchTypeaheadBaseLayoutStrategyOnUpArrowHandler")({
            onHighlightEntry: j,
            onUpArrow: a
        });
        l = b("useCometSearchTypeaheadBaseLayoutStrategyOnPressEntryHandler")({
            onPressEntry: l
        });
        c = b("useCometSearchTypeaheadBaseLayoutStrategyOnOutsideClickHandler")({
            inputRef: c,
            onOutsideClick: k
        });
        return {
            onBlur: d,
            onChange: m,
            onDownArrow: f,
            onEnter: e,
            onEscape: h,
            onHighlightEntry: j,
            onOutsideClick: c,
            onPressEntry: l,
            onUpArrow: a
        }
    }
}
), null);
__d("useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers", ["React", "useCometSearchInternalTypeaheadState", "useCometSearchInternalTypeaheadStateDispatcher", "useCometSearchTypeaheadInternalLayoutInlineStrategyHandlers"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.inputRef
          , d = a.onAbandonTypeahead_DO_NOT_USE
          , e = a.onClick
          , f = a.onOutsideClick
          , h = a.onShiftTab
          , i = a.onTab
          , j = babelHelpers.objectWithoutPropertiesLoose(a, ["inputRef", "onAbandonTypeahead_DO_NOT_USE", "onClick", "onOutsideClick", "onShiftTab", "onTab"]);
        a = b("useCometSearchInternalTypeaheadState")();
        var k = a.isOpened;
        a = b("useCometSearchInternalTypeaheadStateDispatcher")();
        var l = a.dispatchIsOpened;
        a = g.useCallback(function() {
            l(!1),
            f && f()
        }, [l, f]);
        c = b("useCometSearchTypeaheadInternalLayoutInlineStrategyHandlers")(babelHelpers["extends"]({
            inputRef: c,
            onOutsideClick: a
        }, j));
        a = c.onBlur;
        var m = c.onChange
          , n = c.onDownArrow
          , o = c.onEnter
          , p = c.onEscape
          , q = c.onHighlightEntry
          , r = c.onOutsideClick
          , s = c.onPressEntry
          , t = c.onUpArrow;
        c = g.useCallback(function() {
            l(!1),
            d && d()
        }, [l, d]);
        var u = g.useCallback(function() {
            l(!0),
            e && e()
        }, [l, e])
          , v = g.useCallback(function(a, b) {
            l(!0),
            m && m(a, b)
        }, [l, m])
          , w = g.useCallback(function() {
            k ? n && n() : l(!0)
        }, [l, k, n])
          , x = g.useCallback(function() {
            l(!1),
            o && o()
        }, [l, o])
          , y = g.useCallback(function() {
            k ? (l(!1),
            j.onEscape && j.onEscape()) : p && p()
        }, [l, j, k, p])
          , z = g.useCallback(function(a, b) {
            l(!1),
            s && s(a, b)
        }, [l, s])
          , A = g.useCallback(function() {
            l(!1),
            h && h()
        }, [l, h])
          , B = g.useCallback(function() {
            l(!1),
            i && i()
        }, [l, i])
          , C = g.useCallback(function() {
            !k ? l(!0) : t && t()
        }, [l, k, t]);
        return {
            onAbandonTypeahead_DO_NOT_USE: c,
            onBlur: a,
            onChange: v,
            onClick: u,
            onDownArrow: w,
            onEnter: x,
            onEscape: y,
            onHighlightEntry: q,
            onOutsideClick: r,
            onPressEntry: z,
            onShiftTab: A,
            onTab: B,
            onUpArrow: C
        }
    }
}
), null);
__d("CometSearchTypeaheadBaseLayoutContextualStrategy.react", ["CometSearchTypeaheadBaseHelperText.react", "CometSearchTypeaheadBaseProgressGlimmer.react", "CometSearchTypeaheadInternalLayoutContextualStrategy.react", "React", "useCometSearchInternalTypeaheadFetch", "useCometSearchInternalTypeaheadState", "useCometSearchTypeaheadBaseInputRefs", "useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers", "useSearchCometTypeaheadBaseLayoutStrategyARIAProps"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.extraLayoutProps;
        d = d === void 0 ? {} : d;
        var e = d.afterViewContent;
        d = d.beforeViewContent;
        var f = a.helperText
          , h = a.label
          , i = a.onAbandonTypeahead_DO_NOT_USE
          , j = a.onBlur
          , k = a.onChange
          , l = a.onClick
          , m = a.onDownArrow
          , n = a.onEnter
          , o = a.onEscape
          , p = a.onHighlightEntry
          , q = a.onOutsideClick
          , r = a.onPressEntry
          , s = a.onShiftTab
          , t = a.onTab
          , u = a.onUpArrow;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["extraLayoutProps", "helperText", "label", "onAbandonTypeahead_DO_NOT_USE", "onBlur", "onChange", "onClick", "onDownArrow", "onEnter", "onEscape", "onHighlightEntry", "onOutsideClick", "onPressEntry", "onShiftTab", "onTab", "onUpArrow"]);
        var v = b("useCometSearchInternalTypeaheadFetch")();
        v = v.isLoading;
        var w = b("useCometSearchInternalTypeaheadState")()
          , x = w.activeEntries
          , y = w.highlightedEntry;
        w = w.isOpened;
        c = b("useCometSearchTypeaheadBaseInputRefs")(c);
        var z = c.composedRef;
        c = c.inputRef;
        c = b("useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers")({
            inputRef: c,
            onAbandonTypeahead_DO_NOT_USE: i,
            onBlur: j,
            onChange: k,
            onClick: l,
            onDownArrow: m,
            onEnter: n,
            onEscape: o,
            onHighlightEntry: p,
            onOutsideClick: q,
            onPressEntry: r,
            onShiftTab: s,
            onTab: t,
            onUpArrow: u
        });
        i = b("useSearchCometTypeaheadBaseLayoutStrategyARIAProps")({
            activeEntries: x,
            helperText: f,
            highlightedEntry: y,
            inputLabel: h,
            isOpened: w
        });
        return g.jsx(b("CometSearchTypeaheadInternalLayoutContextualStrategy.react"), babelHelpers["extends"]({}, a, c, {
            extraLayoutProps: {
                afterViewContent: e,
                ariaProps: i,
                beforeViewContent: d,
                helperTextComponent: f != null ? g.jsx(b("CometSearchTypeaheadBaseHelperText.react"), {
                    text: f
                }) : null,
                isOpened: w,
                loadingIndicator: v && x.length === 0 ? g.jsx(b("CometSearchTypeaheadBaseProgressGlimmer.react"), {}) : null
            },
            helperText: f,
            label: h,
            ref: z
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("CometSearchTypeaheadInternalLayoutInlineStrategy.react", ["CometHeroHoldTrigger.react", "CometHeroInteractionWithDiv.react", "CometSearchTypeaheadBaseInputStrategyEventListener.react", "CometSearchTypeaheadBaseViewStrategyEventListener.react", "React", "cometWithHighlightDropOnMouseLeave", "stylex", "useCometSearchInternalTypeaheadHeroTracing", "useCometSearchInternalTypeaheadState", "useCometSearchTypeaheadBaseLayoutStrategyStyles"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        helperText: {
            marginTop: "aov4n071"
        },
        view: {
            backgroundColor: "cwj9ozl2",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            flexGrow: "buofh1pr"
        }
    };
    function a(a, c) {
        var d = a.extraLayoutProps
          , e = d.ariaProps
          , f = e.ariaDescribedByProps
          , j = e.ariaInputProps
          , k = e.ariaViewProps;
        e = d.helperTextComponent;
        var l = d.isOpened
          , m = d.loadingIndicator
          , n = a.inputStrategyRenderer
          , o = a.label;
        d = a.onBackspace;
        var p = a.onClick
          , q = a.onDownArrow
          , r = a.onEnter
          , s = a.onEscape
          , t = a.onShiftTab
          , u = a.onTab
          , v = a.onUpArrow
          , w = a.queryString
          , x = a.traceProvider
          , y = a.viewStrategyRenderer
          , z = a.xstyles
          , A = babelHelpers.objectWithoutPropertiesLoose(a, ["extraLayoutProps", "inputStrategyRenderer", "label", "onBackspace", "onClick", "onDownArrow", "onEnter", "onEscape", "onShiftTab", "onTab", "onUpArrow", "queryString", "traceProvider", "viewStrategyRenderer", "xstyles"]);
        a = b("useCometSearchInternalTypeaheadState")();
        var B = a.activeEntries
          , C = a.highlightedEntry
          , D = a.highlightedEntrySource;
        a = b("useCometSearchTypeaheadBaseLayoutStrategyStyles")({
            isOpened: l,
            xstyles: z
        });
        z = a.inputXStyle;
        var E = a.layoutXStyle
          , F = a.viewXStyle
          , G = h.useMemo(function() {
            return b("cometWithHighlightDropOnMouseLeave")(y)
        }, [y]);
        a = b("useCometSearchInternalTypeaheadHeroTracing")(x, A.onChange);
        x = a.interactionUUID;
        var H = a.onTracedChange
          , I = a.shouldHoldHeroTracing;
        a = a.vcTrackerRef;
        return h.jsxs(b("CometHeroInteractionWithDiv.react"), {
            interactionDesc: "Search_Typeahead",
            interactionUUID: x,
            ref: a,
            xstyle: E,
            children: [h.jsx(b("CometHeroHoldTrigger.react"), {
                description: "SearchInternalTypeahead",
                hold: I
            }), h.jsx("div", {
                className: (g || (g = b("stylex")))(z),
                children: h.jsx(b("CometSearchTypeaheadBaseInputStrategyEventListener.react"), {
                    onBackspace: d,
                    onChange: H,
                    onClick: p,
                    onDownArrow: q,
                    onEnter: r,
                    onEscape: s,
                    onShiftTab: t,
                    onTab: u,
                    onUpArrow: v,
                    ref: c,
                    children: function(a, b) {
                        return h.jsx(n, babelHelpers["extends"]({}, j, b, {
                            autoFocus: A.autoFocus,
                            inputEndContent: A.inputEndContent,
                            inputExtraProps: A.inputExtraProps,
                            inputStartContent: A.inputStartContent,
                            isDisabled: A.isDisabled,
                            label: o,
                            placeholder: A.placeholder,
                            queryString: Boolean(A.shouldQueryStringFollowHighlightedEntry) && D === "keyboard" && C != null ? C.getLabel() : w,
                            ref: a,
                            testid: void 0
                        }))
                    }
                })
            }), e != null && h.jsx("div", babelHelpers["extends"]({
                className: (g || (g = b("stylex")))(i.helperText)
            }, f, {
                children: e
            })), l && h.jsx(b("CometSearchTypeaheadBaseViewStrategyEventListener.react"), {
                onOutsideClick: A.onOutsideClick,
                children: function(a) {
                    return h.jsxs("div", babelHelpers["extends"]({}, k, {
                        className: (g || (g = b("stylex")))(i.view, F),
                        ref: a,
                        children: [h.jsx(G, {
                            entries: B,
                            highlightedEntry: C,
                            onAbandonTypeahead_DO_NOT_USE: A.onAbandonTypeahead_DO_NOT_USE,
                            onHighlightEntry: A.onHighlightEntry,
                            onPressEntry: A.onPressEntry,
                            queryString: w
                        }), m]
                    }))
                }
            })]
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("useCometSearchTypeaheadBaseNavigate", ["CometProductAttributionContext", "React", "useCometRouterDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = b("useCometRouterDispatcher")()
          , c = g.useContext(b("CometProductAttributionContext"));
        return g.useCallback(function(b, d, e) {
            d === void 0 && (d = "tabview");
            if (b == null)
                return;
            if (a != null) {
                var f = {
                    fromLink: {
                        tap_point: "tap_search_bar"
                    },
                    linkContext: c
                };
                d = d === "tabview" ? {
                    productAttributionUpdateProps: f,
                    replace: !1,
                    target: "self"
                } : {
                    productAttributionUpdateProps: f
                };
                a.go(b, d)
            } else
                e && e(b)
        }, [a, c])
    }
}
), null);
__d("CometSearchTypeaheadBaseKeywordViewItem.react", ["ix", "CometSearchTypeaheadBaseHighlight.react", "CometSearchTypeaheadBaseViewItem.react", "React", "TetraIcon.react", "TetraText.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    function a(a) {
        var c = a.entry
          , d = a.isActive
          , e = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "isActive", "queryString"]);
        return i.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            isActive: d,
            itemStartContent: i.jsx("div", {
                className: (h || (h = b("stylex"))).dedupe({
                    "align-items-1": "bp9cbjyn",
                    "background-color-1": "qsy8amke",
                    "border-top-start-radius-1": "n00je7tq",
                    "border-top-end-radius-1": "arfg74bv",
                    "border-bottom-end-radius-1": "qs9ysxi8",
                    "border-bottom-start-radius-1": "k77z8yql",
                    "display-1": "j83agx80",
                    "height-1": "tv7at329",
                    "justify-content-1": "taijpn5t",
                    "width-1": "thwo4zme"
                }, d ? {
                    "background-color-1": "cwj9ozl2"
                } : null),
                children: i.jsx(b("TetraIcon.react"), {
                    color: "secondary",
                    icon: b("fbicon")._(g("491282"), 16),
                    size: 16
                })
            }),
            children: i.jsx(b("CometSearchTypeaheadBaseHighlight.react"), {
                content: (a = c.getLabel()) != null ? a : "",
                query: e,
                strategy: "non-match",
                children: function(a) {
                    return i.jsx(b("TetraText.react"), {
                        numberOfLines: 1,
                        type: "body3",
                        children: a
                    })
                }
            })
        }))
    }
}
), null);
__d("CometSearchTypeaheadBaseViewItemResolver.react", ["CometSearchTypeaheadBaseKeywordViewItem.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    b("React");
    function a(a) {
        var c = a.children
          , d = a.entry
          , e = a.entryMappings;
        a = a.fallbackViewItem;
        a = a === void 0 ? b("CometSearchTypeaheadBaseKeywordViewItem.react") : a;
        e = e.find(function(a) {
            a = a.resolver;
            return a(d)
        });
        if (e) {
            var f = e.viewItem;
            e = e.viewItemProps;
            return c(f, e)
        }
        return c(a)
    }
}
), null);
__d("useCometSearchTypeaheadEmptyState", ["React", "useCometSearchInternalTypeaheadFetch"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = g.useState(!0)
          , c = a[0]
          , d = a[1];
        a = b("useCometSearchInternalTypeaheadFetch")();
        var e = a.isLoading;
        a = a.source;
        g.useLayoutEffect(function() {
            e && d(!1)
        }, [e]);
        a = ["all", "network"].includes(a);
        return !(a && c || e)
    }
}
), null);
__d("CometSearchTypeaheadBaseViewEmptyState.react", ["React", "TetraText.react", "stylex", "useCometSearchTypeaheadEmptyState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.children;
        var c = b("useCometSearchTypeaheadEmptyState")();
        return c ? g.jsx("div", {
            "aria-live": "polite",
            className: "taijpn5t tv7at329 j83agx80 bp9cbjyn",
            children: g.jsx(b("TetraText.react"), {
                color: "tertiary",
                numberOfLines: 1,
                type: "body3",
                children: a
            })
        }) : null
    }
}
), null);
__d("CometSearchTypeaheadBaseRecentViewItem.react", ["ix", "CometSearchTypeaheadBaseViewItem.react", "React", "TetraIcon.react", "TetraText.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    function a(a) {
        var c = a.entry
          , d = a.isActive;
        a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "isActive", "queryString"]);
        return i.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            isActive: d,
            itemStartContent: i.jsx("div", {
                className: (h || (h = b("stylex"))).dedupe({
                    "align-items-1": "bp9cbjyn",
                    "background-color-1": "qsy8amke",
                    "border-top-start-radius-1": "n00je7tq",
                    "border-top-end-radius-1": "arfg74bv",
                    "border-bottom-end-radius-1": "qs9ysxi8",
                    "border-bottom-start-radius-1": "k77z8yql",
                    "display-1": "j83agx80",
                    "height-1": "tv7at329",
                    "justify-content-1": "taijpn5t",
                    "width-1": "thwo4zme"
                }, d ? {
                    "background-color-1": "cwj9ozl2"
                } : null),
                children: i.jsx(b("TetraIcon.react"), {
                    color: "secondary",
                    icon: b("fbicon")._(g("478801"), 20),
                    size: 20
                })
            }),
            children: i.jsx(b("TetraText.react"), {
                numberOfLines: 1,
                type: "headline4",
                children: (a = c.getLabel()) != null ? a : ""
            })
        }))
    }
}
), null);
__d("CometTypeaheadDataEntry", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var b = a.key
              , c = a.label;
            a = a.rawData;
            this.$1 = b;
            this.$2 = c;
            this.$3 = a
        }
        var b = a.prototype;
        b.getKey = function() {
            return this.$1
        }
        ;
        b.getLabel = function() {
            return this.$2
        }
        ;
        b.getRawData = function() {
            return this.$3
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("withSearchCometTypeaheadBaseNavigationDecorator", ["React", "useCometSearchTypeaheadBaseInputRefs"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.forwardRef(function(c, d) {
            var e = c.onPressEntry
              , f = c.onSelectFreeformQuery;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["onPressEntry", "onSelectFreeformQuery"]);
            d = b("useCometSearchTypeaheadBaseInputRefs")(d);
            var h = d.composedRef
              , i = d.inputRef;
            d = g.useCallback(function(a) {
                i.current && i.current.blur(),
                e && e(a)
            }, [i, e]);
            var j = g.useCallback(function(a) {
                i.current && i.current.blur(),
                f && f(a)
            }, [i, f]);
            return g.jsx(a, babelHelpers["extends"]({}, c, {
                onPressEntry: d,
                onSelectFreeformQuery: j,
                ref: h
            }))
        })
    }
}
), null);
__d("CometSearchTypeaheadBaseViewRecentEmptyState.react", ["fbt", "CometSearchTypeaheadBaseViewEmptyState.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a() {
        return h.jsx(b("CometSearchTypeaheadBaseViewEmptyState.react"), {
            children: g._("Kh\u00f4ng c\u00f3 t\u00ecm ki\u1ebfm n\u00e0o g\u1ea7n \u0111\u00e2y")
        })
    }
}
), null);
__d("SearchCometHashtagUtil", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getHashtagTag = a;
    function a(a) {
        a = a.trim();
        var b = a.match(/^#(\S+)$/);
        a = a.split("#").length > 2;
        return !a && b != null ? b[1] : null
    }
}
), null);
__d("useThrottledImpl", ["requireCond", "cr:1708227"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:1708227")
}
), null);
__d("useThrottled", ["useThrottledImpl"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("useThrottledImpl")
}
), null);
__d("ChatConfig", ["invariant", "ChatConfigInitialData"], (function(a, b, c, d, e, f, g) {
    f.get = i;
    f.getBool = a;
    f.getNumber = c;
    f.set = d;
    f.getDebugInfo = e;
    var h = Object.assign({}, b("ChatConfigInitialData"));
    function i(a, b) {
        return a in h ? h[a] : b
    }
    function a(a) {
        return !!i(a, !1)
    }
    function c(a, b) {
        b === void 0 && (b = 0);
        if (a in h) {
            typeof h[a] === "number" || g(0, 3109);
            return h[a]
        }
        return b
    }
    function d(a, b) {
        h[a] = b
    }
    function e() {
        return h
    }
}
), null);
__d("MessengerObjectAssociationType", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        REGULAR_CHAT: null,
        GENERAL_CHAT: null
    });
    e.exports = a
}
), null);
__d("MessageThreadUnsendabilityStatus.bs", ["MessageThreadUnsendabilityStatus"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a == null)
            return null;
        else
            switch (a) {
            case "can_unsend":
                return b("MessageThreadUnsendabilityStatus").CAN_UNSEND;
            case "deny_for_specific_ids":
                return b("MessageThreadUnsendabilityStatus").DENY_FOR_SPECIFIC_IDS;
            case "deny_if_cannot_load_thread":
                return b("MessageThreadUnsendabilityStatus").DENY_IF_CANNOT_LOAD_THREAD;
            case "deny_if_marketplace_thread":
                return b("MessageThreadUnsendabilityStatus").DENY_IF_MARKETPLACE_THREAD;
            case "deny_if_page_thread":
                return b("MessageThreadUnsendabilityStatus").DENY_IF_PAGE_THREAD;
            case "deny_if_thread_contains_pau":
                return b("MessageThreadUnsendabilityStatus").DENY_IF_THREAD_CONTAINS_PAU;
            default:
                return null
            }
    }
    f.fromNullableString = a
}
), null);
__d("MessengerGroupAdminModelStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        REQUIRED: "required",
        OPTIONAL: "optional",
        NOT_SUPPORTED: "not_supported"
    });
    e.exports = a
}
), null);
__d("MessengerGroupAdminModelStatus.bs", ["MessengerGroupAdminModelStatus"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a == null)
            return null;
        else {
            a = a.toUpperCase();
            switch (a) {
            case "NOT_SUPPORTED":
                return b("MessengerGroupAdminModelStatus").NOT_SUPPORTED;
            case "OPTIONAL":
                return b("MessengerGroupAdminModelStatus").OPTIONAL;
            case "REQUIRED":
                return b("MessengerGroupAdminModelStatus").REQUIRED;
            default:
                return null
            }
        }
    }
    f.fromNullableString = a
}
), null);
__d("MessengerGroupsSyncStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        PENDING_OPT_IN: "PENDING_OPT_IN",
        OPT_IN: "OPT_IN",
        PENDING_OPT_OUT: "PENDING_OPT_OUT",
        OPT_OUT: "OPT_OUT",
        UNSET: "UNSET",
        UNSUPPORTED: "UNSUPPORTED"
    });
    e.exports = a
}
), null);
__d("MessengerGroupsSyncStatus.bs", ["MessengerGroupsSyncStatus"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a == null)
            return null;
        else
            switch (a) {
            case "OPT_IN":
                return b("MessengerGroupsSyncStatus").OPT_IN;
            case "OPT_OUT":
                return b("MessengerGroupsSyncStatus").OPT_OUT;
            case "PENDING_OPT_IN":
                return b("MessengerGroupsSyncStatus").PENDING_OPT_IN;
            case "PENDING_OPT_OUT":
                return b("MessengerGroupsSyncStatus").PENDING_OPT_OUT;
            case "UNSET":
                return b("MessengerGroupsSyncStatus").UNSET;
            case "UNSUPPORTED":
                return b("MessengerGroupsSyncStatus").UNSUPPORTED;
            default:
                return null
            }
    }
    f.fromNullableString = a
}
), null);
__d("MercuryParticipantTypes", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        USER: "user",
        THREAD: "thread",
        EVENT: "event",
        PAGE: "page",
        FRIEND: "friend",
        FB4C: "fb4c",
        NON_FRIEND: "non_friend",
        SERVICE: "service",
        GUEST: "guest",
        PARENT_APPROVED_USER: "parent_approved_user",
        MESSAGE: "message",
        ASSISTANT_TYPEAHEAD: "assistant_typeahead"
    });
    e.exports = a
}
), null);
__d("MessagingThreadType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ONE_TO_ONE: 1,
        GROUP: 2,
        ROOM: 3,
        MONTAGE: 4,
        MARKETPLACE: 5,
        FOLDER: 6,
        TINCAN_ONE_TO_ONE: 7,
        TINCAN_GROUP_DISAPPEARING: 8,
        CARRIER_MESSAGING_ONE_TO_ONE: 10,
        CARRIER_MESSAGING_GROUP: 11,
        TINCAN_ONE_TO_ONE_DISAPPEARING: 13,
        PAGE_FOLLOW_UP: 14
    });
    e.exports = a
}
), null);
__d("MessengerGroupAdminType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        REGULAR_ADMIN: 0,
        GROUP_CREATOR: 1,
        CHAT_SUPER_ADMIN: 2
    });
    e.exports = a
}
), null);
__d("MessengerGroupThreadSubType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ADMIN_MODEL_V2_THREAD: 1,
        FB_GROUP_CHAT: 2,
        MARKETPLACE_THREAD: 3,
        SCHOOL_CHAT: 4,
        DEPRECATED__WORK_SYNCED_CHAT: 5,
        ADMIN_NOT_SUPPORTED_THREAD: 6,
        BELL_SYNCED_CHAT: 7,
        GAMES_APP_THREAD: 8,
        VAULT_CHAT: 9,
        VERSE_CHAT: 10,
        GENERIC_COMMERCE_THREAD: 11,
        USER_JOB_THREAD: 12,
        COWORKER_GROUP_THREAD: 13,
        APPROVAL_ENFORCED_CHATROOM_THREAD: 14,
        PARENT_APPROVED_SHEPHERD_MANAGED_THREAD: 15,
        CAMPUS_GROUP_THREAD: 16,
        LOCAL_COMMUNITIES_THREAD: 17,
        CHAT_FOR_ROOM_THREAD: 18,
        GAMING_PLAY_SQUAD: 19,
        CHAT_FOR_GROUP_ADMIN_TO_MEMBER_THREAD: 20,
        EITM_BACKED_IG_1TO1_THREAD: 21
    });
    e.exports = a
}
), null);
__d("WorkForeignEntityType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        FOREIGN: "FOREIGN",
        NOT_FOREIGN: "NOT_FOREIGN",
        LIMITED: "LIMITED"
    });
    e.exports = a
}
), null);
__d("MessengerServerPayloadTransformer.bs", ["fbt", "URI", "FBID.bs", "bs_array", "bs_string", "bs_js_dict", "bs_js_json", "getByPath", "bs_caml_array", "ChatConfig", "MercuryIDs", "bs_belt_Option", "bs_caml_format", "bs_caml_option", "CurrentUser", "GenderConst", "bs_js_null_undefined", "DisplayGenderConst", "MessagingThreadType", "isMessengerDotComURI", "WorkForeignEntityType", "MercuryParticipantTypes", "MessengerGroupAdminType", "MessengerGroupsSyncStatus.bs", "MessengerGroupThreadSubType", "MessengerMessageTransformer.bs", "MessengerAttachmentTransformer.bs", "MessengerGroupAdminModelStatus.bs", "MessengerObjectAssociationType", "MessageThreadUnsendabilityStatus.bs", "MessengerThreadCannotReplyReason", "MessengerThreadCannotReplyReason.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i(a) {
        var c = a.location_coordinates;
        c = c == null ? [null, null] : [c.latitude, c.longitude];
        var d = a.location_page, e;
        if (d == null)
            e = null;
        else {
            d = d.address;
            e = d == null ? null : d.full_address
        }
        d = a.allows_rsvp ? 1 : 0;
        var f = b("bs_array").fold_left(function(a, b) {
            a[b.node.id] = b.guest_list_state;
            return a
        }, {}, a.event_reminder_members.edges)
          , g = a.lightweight_event_creator;
        return {
            creator_id: g == null ? null : g.id,
            event_members: f,
            event_time: a.time,
            event_type: a.lightweight_event_type,
            latitude: c[0],
            longitude: c[1],
            location_address: e,
            location_name: a.location_name,
            note: a.note,
            oid: a.id,
            related_event: a.related_event,
            repeat_mode: a.repeat_mode,
            seconds_to_notify_before: a.seconds_to_notify_before,
            status: a.lightweight_event_status,
            title: a.event_title,
            track_rsvp: d
        }
    }
    function j(a) {
        a = a.associated_object;
        if (a == null)
            return null;
        else {
            var c = a.action_link
              , d = a.profile_picture
              , e = a.group_general_chat
              , f = a.group_saves
              , g = a.verse_group_link;
            return {
                id: a.id,
                name: a.name,
                action_link: c == null ? null : b("CurrentUser").isWorkUser() ? c : new (h || (h = b("URI")))(c).setDomain("www.facebook.com"),
                profile_picture: d == null ? null : {
                    uri: d.uri
                },
                group_general_chat: e == null ? null : {
                    id: e.id
                },
                room_type: a.room_type,
                privacy_mode: a.privacy_mode,
                approval_mode_toggleable: a.approval_mode_toggleable,
                start_timestamp: a.start_timestamp,
                event_place: a.event_place,
                mentorship_program: a.mentorship_program,
                group_saves: f == null ? {
                    count: 0
                } : {
                    count: f.count
                },
                verse_group_link: g == null ? null : new (h || (h = b("URI")))(g).setDomain("www.facebook.com")
            }
        }
    }
    function k(a) {
        a = a.related_page_thread;
        if (a == null)
            return null;
        else {
            var b = a.custom_thread_tags.nodes.map(function(a) {
                return {
                    id: a.id,
                    name: a.name,
                    color: a.color
                }
            })
              , c = a.custom_thread_labels.nodes.map(function(a) {
                return {
                    id: a.id,
                    name: a.name,
                    color: a.label_color
                }
            })
              , d = a.page;
            d = d == null ? null : d.id;
            return {
                flagged: a.is_flagged,
                pageID: d,
                customTags: b,
                customLabels: c
            }
        }
    }
    function l(a) {
        var c = a.thread_key.other_user_id;
        if (c == null)
            return !1;
        else {
            a = a.all_participants.edges;
            return b("bs_array").fold_left(function(a, b) {
                b = b.node.messaging_actor;
                if (b.id === c)
                    return b.__typename === "User";
                else
                    return a
            }, !1, a)
        }
    }
    function m(a) {
        if (a.length !== 0) {
            var b = {};
            a.forEach(function(a) {
                var c = a.nickname;
                if (c == null)
                    return 0;
                else {
                    b[a.participant_id] = c;
                    return 0
                }
            });
            return b
        } else
            return null
    }
    function n(a) {
        return "#" + b("bs_string").sub(a, 2, a.length - 2 | 0)
    }
    function o(a) {
        if (a == null || a === "")
            return null;
        else
            return n(a)
    }
    function a(a) {
        return a.thread_key.thread_fbid
    }
    function c(a) {
        return a.thread_key.other_user_id
    }
    function d(a) {
        return b("bs_caml_option").nullable_to_opt(b("getByPath")(a, ["messages", "page_info"]))
    }
    function e(a) {
        var c = b("CurrentUser").isWorkUser() ? g._("Ng\u01b0\u1eddi d\u00f9ng Workplace") : g._("Ng\u01b0\u1eddi d\u00f9ng Facebook");
        return {
            id: "fbid:" + a,
            fbid: b("FBID.bs").ofStringExn(a),
            gender: b("GenderConst").UNKNOWN_SINGULAR,
            href: null,
            image_src: null,
            square_image_src: null,
            big_image_src: null,
            name: c,
            short_name: c,
            user_type: null,
            vanity: null,
            accepts_messenger_user_feedback: !1,
            is_friend: !1,
            is_viewer_managing_parent: !1,
            is_messenger_user: !1,
            is_aloha_proxy_confirmed: !1,
            is_business_enabled: !1,
            is_messenger_platform_bot: !1,
            is_messenger_ignored: null,
            is_messenger_blocked: !1,
            is_facebook_blocked: !0,
            is_subscribed_to_page_updates: !1,
            title: null,
            company_name: null,
            employee: !1,
            instant_game_channel: null,
            work_foreign_entity_info: null,
            timezone: null,
            wec_group_admins: [],
            wec_group_creation_time: null,
            wec_group_invite_link: null,
            wec_group_participant_count: null,
            wec_group_participants: [],
            verification_status: null
        }
    }
    function p(a) {
        var c = a.profile_picture_url;
        if (c == null) {
            var d = a.big_image_src;
            d = d == null ? null : d.uri
        } else
            d = c;
        c = a.gender;
        var e = a.url, f;
        if (e == null)
            f = null;
        else {
            var g = b("isMessengerDotComURI")(new (h || (h = b("URI")))(e));
            f = g ? new (h || (h = b("URI")))(e).getUnqualifiedURI().setDomain("www.facebook.com").setProtocol("https").toString() : e
        }
        g = a.__typename;
        var i;
        switch (g) {
        case "NeoApprovedUser":
            i = b("MercuryParticipantTypes").PARENT_APPROVED_USER;
            break;
        case "Page":
            i = b("MercuryParticipantTypes").PAGE;
            break;
        case "ReducedMessagingActor":
            i = b("MercuryParticipantTypes").GUEST;
            break;
        case "User":
            i = b("MercuryParticipantTypes").USER;
            break;
        default:
            i = null
        }
        e = a.accepts_messenger_user_feedback;
        g = a.is_viewer_friend;
        var j = a.is_viewer_managing_parent, k = a.is_messenger_user, l = a.is_aloha_proxy_confirmed, m = a.is_messenger_platform_bot, n = a.is_message_blocked_by_viewer, o = a.is_blocked_by_viewer, p = a.is_viewer_subscribed_to_message_updates, q = a.work_info, r;
        if (q == null)
            r = null;
        else {
            var s = q.work_community;
            s = s == null ? null : s.name;
            q = q.job_title;
            r = s == null ? q == null ? null : q : q == null || q.length === 0 ? s : "" + (String(q) + (" \u2022 " + (String(s) + "")))
        }
        q = a.work_info;
        if (q == null)
            s = null;
        else {
            q = q.work_community;
            q = q == null ? null : q.name;
            var t = a.work_foreign_entity_info;
            s = q == null || t == null || t.type !== b("WorkForeignEntityType").FOREIGN ? null : q
        }
        t = a.is_employee;
        q = a.work_foreign_entity_info;
        var u = a.wec_group_creation_time
          , v = a.wec_group_invite_link
          , w = a.wec_group_participants
          , x = a.wec_group_participants
          , y = a.wec_group_admins;
        return {
            id: "fbid:" + a.id,
            fbid: a.id,
            gender: c == null ? b("GenderConst").NOT_A_PERSON : c === b("DisplayGenderConst").MALE ? b("GenderConst").MALE_SINGULAR : c === b("DisplayGenderConst").FEMALE ? b("GenderConst").FEMALE_SINGULAR : b("GenderConst").NOT_A_PERSON,
            href: f,
            image_src: d,
            square_image_src: null,
            big_image_src: d,
            name: a.name,
            short_name: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(a.short_name), a.name),
            user_type: i,
            vanity: a.username,
            accepts_messenger_user_feedback: e == null ? !1 : e,
            is_friend: g == null ? !1 : g,
            is_viewer_managing_parent: j == null ? !1 : j,
            is_messenger_user: k == null ? !1 : k,
            is_aloha_proxy_confirmed: l == null ? !1 : l,
            is_business_enabled: a.__typename === "Page",
            is_messenger_platform_bot: m == null ? !1 : m,
            is_messenger_ignored: null,
            is_messenger_blocked: n == null ? !1 : n,
            is_facebook_blocked: o == null ? !1 : o,
            is_subscribed_to_page_updates: p == null ? !0 : p,
            title: r,
            company_name: s,
            employee: t == null ? !1 : t,
            instant_game_channel: a.__typename === "Page" ? a.instant_game_channel : null,
            work_foreign_entity_info: q == null ? null : q,
            timezone: null,
            wec_group_creation_time: u == null ? null : u,
            wec_group_invite_link: v == null ? null : v,
            wec_group_participant_count: w == null ? null : w.count,
            wec_group_participants: x == null ? [] : x.nodes.map(function(a) {
                return {
                    id: b("MercuryIDs").getParticipantIDFromUserID(a.messaging_actor.id),
                    name: a.messaging_actor.name
                }
            }),
            wec_group_admins: y == null ? [] : y.nodes.map(function(a) {
                return {
                    id: b("MercuryIDs").getParticipantIDFromUserID(a.messaging_actor.id),
                    name: a.messaging_actor.name
                }
            }),
            verification_status: a.verification_status
        }
    }
    function q(a) {
        return a.all_participants.edges.map(function(a) {
            return p(a.node.messaging_actor)
        })
    }
    function r(a, c) {
        c = c.read_receipts;
        if (c == null)
            return;
        else {
            var d = {};
            c.nodes.forEach(function(c) {
                var e = c.actor;
                if (!(e == null) && a !== e.id) {
                    d[e.id] = {
                        action: b("bs_caml_format").caml_float_of_string(c.action),
                        watermark: b("bs_caml_format").caml_float_of_string(c.watermark)
                    };
                    return 0
                } else
                    return 0
            });
            return b("bs_caml_option").some(d)
        }
    }
    function s(a) {
        a = a.delivery_receipts;
        if (a == null)
            return [];
        else
            return a.nodes.sort(function(a, c) {
                a = b("bs_caml_format").caml_float_of_string(a.timestamp_precise);
                c = b("bs_caml_format").caml_float_of_string(c.timestamp_precise);
                if (a > c)
                    return -1;
                else if (a === c)
                    return 0;
                else
                    return 1
            })
    }
    function t(a, c, d) {
        var e = c.messages;
        if (e == null)
            return;
        else
            return e.nodes.map(function(e) {
                return b("MessengerMessageTransformer.bs").transformMessage(a, e, {
                    thread_id: null,
                    thread_fbid: c.thread_key.thread_fbid,
                    other_user_fbid: c.thread_key.other_user_id,
                    folder: c.folder.toLowerCase()
                }, d)
            })
    }
    function u(a, c, d) {
        var e = c.last_message.nodes.map(function(f) {
            var g = b("MessengerMessageTransformer.bs").unsafeCastBlobAttachments(f), h = f.extensible_attachment, i;
            if (h == null)
                i = null;
            else {
                var a = h.story_attachment, c = h.genie_attachment, d;
                if (c == null)
                    d = null;
                else {
                    c = c.genie_message;
                    var e;
                    if (c == null)
                        e = null;
                    else {
                        c = c.story_attachment;
                        e = {
                            story_attachment: c == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(c)
                        }
                    }
                    d = {
                        genie_message: e
                    }
                }
                i = {
                    legacy_attachment_id: h.legacy_attachment_id,
                    story_attachment: a == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(a),
                    genie_attachment: d
                }
            }
            return {
                message_id: f.message_id,
                snippet: f.snippet,
                message_sender: f.message_sender,
                timestamp_precise: f.timestamp_precise,
                commerce_message_type: f.commerce_message_type,
                extensible_attachment: i,
                blob_attachments: g,
                sticker: f.sticker,
                extensible_message_admin_text: f.extensible_message_admin_text,
                platform_xmd_encoded: f.platform_xmd_encoded,
                extensible_message_admin_text_type: f.extensible_message_admin_text_type,
                message_unsendability_status: f.message_unsendability_status
            }
        })
          , f = {
            id: c.id,
            thread_key: c.thread_key,
            name: c.name,
            all_participants: c.all_participants,
            last_message: {
                nodes: e
            },
            unread_count: c.unread_count,
            message_count: c.messages_count,
            image: c.image,
            square_image: c.square_image,
            updated_time_precise: c.updated_time_precise,
            mute_until: c.mute_until,
            is_pinned: c.is_pinned,
            is_pin_protected: c.is_pin_protected,
            is_viewer_subscribed: c.is_viewer_subscribed,
            is_other_recipient_page: c.is_other_recipient_page,
            is_canonical_neo_user: c.is_canonical_neo_user,
            thread_queue_enabled: c.thread_queue_enabled,
            folder: c.folder,
            unread_mentions_count: c.unread_mentions_count,
            has_viewer_archived: c.has_viewer_archived,
            is_page_follow_up: c.is_page_follow_up,
            is_page_unresponded_thread: c.is_page_unresponded_thread,
            cannot_reply_reason: c.cannot_reply_reason,
            can_viewer_report: c.can_viewer_report,
            composer_input_disabled: c.composer_input_disabled,
            ephemeral_ttl_mode: c.ephemeral_ttl_mode,
            customization_info: c.customization_info,
            thread_admins: c.thread_admins,
            approval_mode: c.approval_mode,
            joinable_mode: c.joinable_mode,
            thread_queue_metadata: c.thread_queue_metadata,
            event_reminders: c.event_reminders,
            montage_thread: c.montage_thread,
            last_read_receipt: c.last_read_receipt,
            related_page_thread: c.related_page_thread,
            rtc_call_data: c.rtc_call_data,
            associated_object: c.associated_object,
            reactions_mute_mode: c.reactions_mute_mode,
            mentions_mute_mode: c.mentions_mute_mode,
            privacy_mode: c.privacy_mode,
            customization_enabled: c.customization_enabled,
            thread_type: c.thread_type,
            group_thread_subtype: c.group_thread_subtype,
            thread_pin_timestamp: c.thread_pin_timestamp,
            page_unsubscribe_status: c.page_unsubscribe_status,
            participant_add_mode_as_string: c.participant_add_mode_as_string,
            participants_event_status: c.participants_event_status,
            marketplace_thread_data: c.marketplace_thread_data,
            page_comm_item: c.page_comm_item,
            group_approval_queue: c.group_approval_queue,
            admin_model_status_string: c.admin_model_status_string,
            groups_sync_status_string: c.groups_sync_status_string,
            work_groups_sync_metadata: c.work_groups_sync_metadata,
            pinned_messages: c.pinned_messages,
            description: c.description,
            joinable_link: c.joinable_link,
            linked_mentorship_programs: c.linked_mentorship_programs,
            theme: c.thread_theme,
            thread_connectivity_data: c.thread_connectivity_data,
            thread_unsendability_status: c.thread_unsendability_status,
            is_business_page_active: c.is_business_page_active,
            thread_associated_job_applications: c.thread_associated_job_applications,
            thread_associated_page_admin: c.thread_associated_page_admin,
            conversion_detection_data: c.conversion_detection_data,
            suggested_reply_data: c.suggested_reply_data
        };
        e = f.customization_info;
        var g;
        if (e == null)
            g = [null, null, null];
        else {
            var h = e.emoji;
            g = [o(e.outgoing_bubble_color), h == null ? null : {
                emoji: h
            }, m(e.participant_customizations)]
        }
        h = g[0];
        e = f.theme;
        if (e == null)
            h = [h, h, h, [], null, void 0, null, null];
        else {
            var p = e.reaction_pack, r;
            if (p == null)
                r = void 0;
            else {
                p = p.reaction_assets;
                r = p == null ? void 0 : p.nodes.map(function(a) {
                    return {
                        reactionName: a.reaction_name,
                        reactionEmoji: a.reaction_emoji,
                        keyframeAssetUri: a.keyframe_asset_uri,
                        staticAssetUri: a.static_asset.uri
                    }
                })
            }
            p = e.gradient_colors.length;
            var s = n(e.fallback_color)
              , t = b("FBID.bs").ofString(e.id);
            t = t !== void 0 ? b("bs_caml_option").valFromOption(t) : null;
            if (p > 0 && b("ChatConfig").get("chat_tab_has_gradients")) {
                var u = e.gradient_colors.map(n);
                h = [s, b("bs_caml_array").caml_array_get(u, 0), b("bs_caml_array").caml_array_get(u, p - 1 | 0), u, t, r, e.accessibility_label, e.reverse_gradients_for_radial]
            } else
                h = [s, s, s, [], t, r, e.accessibility_label, e.reverse_gradients_for_radial]
        }
        p = f.page_comm_item;
        u = p == null ? [null, null, null, null, null, []] : [p.comm_status, p.comm_source_id, p.id, p.subtitle, p.comm_item_owners, p.comm_icon_type];
        s = f.last_message.nodes;
        t = s.length !== 0 ? b("bs_caml_option").some(s[0]) : void 0;
        r = f.last_read_receipt.nodes;
        e = r.length !== 0 ? b("bs_caml_option").some(r[0]) : void 0;
        if (t !== void 0) {
            p = b("bs_caml_option").valFromOption(t);
            s = b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
                extensible_attachment: p.extensible_attachment,
                blob_attachments: p.blob_attachments,
                sticker: p.sticker
            }, p.message_id, d)
        } else
            s = [];
        if (t !== void 0) {
            r = b("bs_caml_option").valFromOption(t).extensible_message_admin_text;
            if (r == null)
                p = null;
            else {
                d = r.game;
                p = d == null ? null : d.id
            }
        } else
            p = null;
        r = b("MessengerThreadCannotReplyReason.bs").fromName(f.cannot_reply_reason);
        d = f.thread_key.other_user_id;
        if (d == null) {
            var v = f.thread_key.thread_fbid;
            v = v == null ? null : v
        } else
            v = d;
        d = b("bs_array").fold_left(function(a, c) {
            a[c.id] = b("MessengerGroupAdminType").REGULAR_ADMIN;
            return a
        }, {}, f.thread_admins);
        d = b("bs_array").fold_left(function(c, d) {
            var e = d.node.messaging_actor.id;
            d = d.admin_type;
            var a = b("bs_js_dict").get(c, e);
            d == null || a !== void 0 && (c[e] = d);
            return c
        }, d, f.all_participants.edges);
        var w = f.thread_queue_metadata, x = f.thread_type, y = f.group_thread_subtype, z = f.montage_thread, A = f.image, B = f.square_image, C = f.thread_key.other_user_id, D;
        if (t !== void 0) {
            var E = b("bs_caml_option").valFromOption(t).platform_xmd_encoded;
            if (E == null)
                D = !1;
            else {
                try {
                    E = JSON.parse(E)
                } catch (a) {
                    E = {}
                }
                E = b("bs_js_json").classify(E);
                D = typeof E === "number" || E.tag !== 2 ? !1 : b("bs_js_dict").get(E[0], "landing_exp") !== void 0
            }
        } else
            D = !1;
        E = f.thread_queue_metadata;
        var F = f.event_reminders.nodes, G = f.name, H = f.associated_object, I;
        if (H == null)
            I = null;
        else {
            H = H.group_general_chat;
            I = H == null || v == null ? null : H.id === v ? b("MessengerObjectAssociationType").GENERAL_CHAT : b("MessengerObjectAssociationType").REGULAR_CHAT
        }
        H = f.rtc_call_data;
        var J;
        if (H == null)
            J = null;
        else {
            var K = H.initiator;
            J = {
                call_state: H.call_state,
                server_info_data: H.server_info_data,
                initiator_fbid: K == null ? null : b("bs_js_null_undefined").fromOption(b("FBID.bs").ofString(K.id))
            }
        }
        H = f.marketplace_thread_data;
        if (H == null)
            K = null;
        else {
            var L = H.for_sale_item, M;
            if (L == null)
                M = null;
            else {
                var N = L.formatted_price, O = L.location, P;
                if (O == null)
                    P = null;
                else {
                    O = O.reverse_geocode;
                    P = {
                        reverse_geocode: O == null ? null : {
                            city: O.city,
                            state: O.state
                        }
                    }
                }
                O = L.primary_photo;
                var Q;
                if (O == null)
                    Q = null;
                else {
                    O = O.image;
                    Q = O == null ? null : O.uri
                }
                O = L.product_item;
                var R = L.product_item;
                M = {
                    id: L.id,
                    story_id: L.story_id,
                    title: L.group_commerce_item_title,
                    price: N == null ? null : N.text,
                    location: P,
                    c2c_shipping_eligible: L.c2c_shipping_eligible,
                    is_pending: L.is_pending,
                    is_shipping_offered: L.is_shipping_offered,
                    is_sold: L.is_sold,
                    inventory_count: L.inventory_count,
                    delivery_types: L.delivery_types,
                    image_uri: Q,
                    is_commerce_post_item: O == null ? !1 : O.is_commerce_post_item,
                    product_item_id: R == null ? null : R.id,
                    url: L.url
                }
            }
            N = H.buyer;
            P = H.seller;
            Q = H.rating_state;
            O = H.seller;
            if (O == null)
                R = !1;
            else {
                L = O.marketplace_c2c_shipping_seller;
                R = L == null ? !1 : L.is_eligible
            }
            K = {
                for_sale_item: M,
                buyer_fbid: N == null ? null : N.id,
                seller_fbid: P == null ? null : P.id,
                is_eligible_to_rate: Q == null ? null : Q.is_eligible_to_rate,
                is_seller_eligible_for_shipping: R,
                seller_added_labels: H.seller_added_labels.map(function(a) {
                    return {
                        label_string: a.label_string,
                        label_type: a.label_type
                    }
                }),
                eligible_profile_selling_invoice_actions: H.eligible_profile_selling_invoice_actions,
                thread_fbid: v
            }
        }
        O = f.group_approval_queue;
        L = f.work_groups_sync_metadata;
        if (L == null)
            M = null;
        else {
            N = L.fb_group;
            M = N == null ? null : N
        }
        P = f.pinned_messages;
        Q = f.linked_mentorship_programs;
        R = f.thread_associated_job_applications;
        return {
            admins: d,
            approval_mode: f.approval_mode,
            approval_queue_ids: w == null ? [] : w.approval_requests.nodes.map(function(a) {
                return b("MercuryIDs").getParticipantIDFromUserID(b("FBID.bs").ofStringExn(a.id))
            }),
            can_reply: r === void 0,
            cannot_reply_reason: r !== void 0 ? b("bs_caml_option").valFromOption(r) : null,
            can_viewer_report: f.can_viewer_report,
            composer_input_disabled: f.composer_input_disabled,
            solid_color: h[0],
            header_color: h[1],
            footer_color: h[2],
            accessibility_label: h[6],
            reverse_gradients_for_radial: h[7],
            gradient_colors: h[3],
            theme_id: h[4],
            reactions: h[5],
            thread_connectivity_data: f.thread_connectivity_data,
            custom_like_icon: g[1],
            custom_nickname: g[2],
            customization_enabled: f.customization_enabled,
            thread_type: x == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingThreadType"), x)),
            group_thread_subtype: y == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessengerGroupThreadSubType"), y)),
            page_unsubscribe_status: f.page_unsubscribe_status,
            participant_add_mode: f.participant_add_mode_as_string,
            ephemeral_ttl_mode: f.ephemeral_ttl_mode,
            folder: f.folder.toLowerCase(),
            has_email_participant: r !== void 0 ? b("bs_caml_option").valFromOption(r) === b("MessengerThreadCannotReplyReason").HAS_EMAIL_PARTICIPANT : !1,
            has_montage: !(z == null),
            unread_mentions_count: f.unread_mentions_count,
            image_src: A == null ? null : A.uri,
            square_image_src: B == null ? null : B.uri,
            is_archived: f.has_viewer_archived,
            is_pinned: f.is_pinned,
            is_page_follow_up: f.is_page_follow_up,
            is_page_unresponded_thread: f.is_page_unresponded_thread,
            is_canonical_user: l(f),
            is_canonical: !(C == null),
            is_from_weak_entry_point: D,
            is_pin_protected: f.is_pin_protected,
            is_subscribed: f.is_viewer_subscribed,
            is_other_recipient_page: f.is_other_recipient_page,
            is_canonical_neo_user: f.is_canonical_neo_user,
            is_thread_queue_enabled: !(E == null),
            joinable_mode: {
                mode: b("bs_caml_format").caml_int_of_string(f.joinable_mode.mode),
                link: f.joinable_mode.link
            },
            last_message_timestamp: t !== void 0 ? b("bs_caml_format").caml_float_of_string(b("bs_caml_option").valFromOption(t).timestamp_precise) : 0,
            last_message_id: null,
            last_message_type: t !== void 0 ? b("bs_caml_option").valFromOption(t).commerce_message_type : null,
            last_message_admin_text_type: t !== void 0 ? b("bs_caml_option").valFromOption(t).extensible_message_admin_text_type : null,
            last_message_unsendability_status: t !== void 0 ? b("bs_caml_option").valFromOption(t).message_unsendability_status : null,
            last_read_timestamp: e !== void 0 ? b("bs_caml_format").caml_float_of_string(b("bs_caml_option").valFromOption(e).timestamp_precise) : 0,
            lightweight_event: F.length !== 0 ? i(F[0]) : null,
            lightweight_events: b("bs_array").fold_left(function(a, b) {
                a[b.id] = i(b);
                return a
            }, {}, f.event_reminders.nodes),
            message_count: f.message_count,
            mute_until: f.mute_until,
            name: G == null ? "" : G,
            object_association_type: I,
            other_user_fbid: f.thread_key.other_user_id,
            page_thread_info: k(f),
            participants: f.all_participants.edges.map(function(a) {
                return b("MercuryIDs").getParticipantIDFromUserID(a.node.messaging_actor.id)
            }),
            participants_event_status: f.participants_event_status,
            preloaded_participants: q(c),
            read_only: r !== void 0 ? b("bs_caml_option").valFromOption(r) === b("MessengerThreadCannotReplyReason").READ_ONLY : !1,
            recipients_loadable: r !== void 0 ? b("bs_caml_option").valFromOption(r) !== b("MessengerThreadCannotReplyReason").RECIPIENTS_NOT_LOADABLE : !0,
            server_timestamp: b("bs_caml_format").caml_float_of_string(f.updated_time_precise),
            snippet_attachments: s,
            snippet_sender: t !== void 0 ? b("MercuryIDs").getParticipantIDFromUserID(b("bs_caml_option").valFromOption(t).message_sender.messaging_actor.id) : null,
            snippet: t !== void 0 ? b("bs_caml_option").valFromOption(t).snippet : null,
            thread_fbid: v,
            thread_id: "",
            thread_pin_timestamp: f.thread_pin_timestamp,
            timestamp: b("bs_caml_format").caml_float_of_string(f.updated_time_precise),
            unread_count: f.unread_count,
            rtc_call_data: J,
            marketplace_thread_data: K,
            associated_object: j(f),
            reactions_mute_mode: f.reactions_mute_mode === "REACTIONS_NOT_MUTED" ? 0 : 1,
            mentions_mute_mode: f.mentions_mute_mode === "MENTIONS_NOT_MUTED" ? 0 : 1,
            comm_status: u[0],
            page_comm_item_id: u[2],
            comm_source_id: u[1],
            subtitle: u[3],
            comm_item_owners: u[4],
            comm_icon_type: u[5],
            group_approval_queue: O == null ? null : O.nodes,
            game_id: p,
            admin_model_status: b("MessengerGroupAdminModelStatus.bs").fromNullableString(f.admin_model_status_string),
            groups_sync_status: b("MessengerGroupsSyncStatus.bs").fromNullableString(f.groups_sync_status_string),
            work_associated_group: M,
            pinned_messages: P == null ? null : P.map(function(c) {
                var d = c.message;
                return {
                    message_id: c.message_id,
                    pinning_time: c.pinning_time,
                    message: d == null ? null : b("MessengerMessageTransformer.bs").transformMessage(a, d, {
                        thread_id: null,
                        thread_fbid: f.thread_key.thread_fbid,
                        other_user_fbid: f.thread_key.other_user_id,
                        folder: f.folder.toLowerCase()
                    }, !1)
                }
            }),
            description: f.description,
            joinable_link: f.joinable_link,
            linked_mentorship_programs: Q == null ? null : Q,
            thread_unsendability_status: b("MessageThreadUnsendabilityStatus.bs").fromNullableString(f.thread_unsendability_status),
            is_business_page_active: f.is_business_page_active,
            thread_associated_job_applications: R == null ? null : R,
            thread_associated_page_admin: f.thread_associated_page_admin,
            graphql_token: f.id,
            conversion_detection_data: f.conversion_detection_data,
            suggested_reply_data: f.suggested_reply_data
        }
    }
    f.getThreadFBID = a;
    f.getOtherUserID = c;
    f.getMessagePageInfo = d;
    f.getBlockedParticipant = e;
    f.transformParticipant = p;
    f.transformParticipants = q;
    f.transformReadReceipts = r;
    f.transformDeliveryReceipts = s;
    f.transformMessages = t;
    f.transformThread = u
}
), null);
__d("CometAddTypeaheadRecentSearchMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "SearchTypeaheadAddRecentSearchResponsePayload",
            kind: "LinkedField",
            name: "search_typeahead_add_recent_search",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometAddTypeaheadRecentSearchMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CometAddTypeaheadRecentSearchMutation",
                selections: b
            },
            params: {
                id: "1806877619412791",
                metadata: {},
                name: "CometAddTypeaheadRecentSearchMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometDeleteRecentSearchMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "SearchTypeaheadDeleteRecentResponsePayload",
            kind: "LinkedField",
            name: "search_typeahead_delete_recent",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometDeleteRecentSearchMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CometDeleteRecentSearchMutation",
                selections: b
            },
            params: {
                id: "2231609870228327",
                metadata: {},
                name: "CometDeleteRecentSearchMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometSearchKeywordDataSourceQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "query"
        }]
          , b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "link_url",
            storageKey: null
        }
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "snippet",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "title",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        };
        c = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "query",
                variableName: "query"
            }],
            concreteType: "KeywordsSearchSuggestionSet",
            kind: "LinkedField",
            name: "search_keywords_suggestion",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "KeywordsSearchSuggestionsConnection",
                kind: "LinkedField",
                name: "suggestions",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "KeywordsSearchSuggestionsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "KeywordSuggestionUnit",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [{
                            alias: "name",
                            args: null,
                            kind: "ScalarField",
                            name: "text",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "logging_id",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "logging_info",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "StructuredTypeaheadInfo",
                            kind: "LinkedField",
                            name: "structured_info",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "STSDirectNavResult",
                                kind: "LinkedField",
                                name: "direct_nav_result",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "img_url",
                                    storageKey: null
                                }, b, c, d],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "STSHighConfidenceResult",
                                kind: "LinkedField",
                                name: "high_confidence_result",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hcm_id",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "picture_url",
                                    storageKey: null
                                }, c, e],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "STSDisambiguationResult",
                                kind: "LinkedField",
                                name: "disambiguation_result",
                                plural: !1,
                                selections: [d, {
                                    alias: null,
                                    args: null,
                                    concreteType: "STSDisambiguationInfo",
                                    kind: "LinkedField",
                                    name: "disambiguation_info_list",
                                    plural: !0,
                                    selections: [e, b],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "suffix_to_match",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometSearchKeywordDataSourceQuery",
                selections: c,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CometSearchKeywordDataSourceQuery",
                selections: c
            },
            params: {
                id: "3338866842871475",
                metadata: {},
                name: "CometSearchKeywordDataSourceQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometSearchRecentDataSourceQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "filter"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "first"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "scale"
        }]
          , b = [{
            kind: "Variable",
            name: "filter",
            variableName: "filter"
        }, {
            kind: "Variable",
            name: "first",
            variableName: "first"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , f = {
            kind: "InlineFragment",
            selections: [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "scale",
                    variableName: "scale"
                }, {
                    kind: "Literal",
                    name: "width",
                    value: 36
                }],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null
                }],
                storageKey: null
            }],
            type: "Profile",
            abstractKey: "__isProfile"
        }
          , g = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        }]
          , h = {
            kind: "InlineFragment",
            selections: g,
            type: "Application",
            abstractKey: null
        }
          , i = {
            kind: "InlineFragment",
            selections: g,
            type: "Event",
            abstractKey: null
        }
          , j = {
            kind: "InlineFragment",
            selections: g,
            type: "Group",
            abstractKey: null
        }
          , k = {
            kind: "InlineFragment",
            selections: g,
            type: "Page",
            abstractKey: null
        };
        g = {
            kind: "InlineFragment",
            selections: g,
            type: "User",
            abstractKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometSearchRecentDataSourceQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: b,
                        concreteType: "RecentSearchConnection",
                        kind: "LinkedField",
                        name: "recent_searches",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "RecentSearchEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [c, {
                                    kind: "InlineFragment",
                                    selections: [d, e],
                                    type: "Node",
                                    abstractKey: "__isNode"
                                }, f, h, i, j, k, g],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CometSearchRecentDataSourceQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: b,
                        concreteType: "RecentSearchConnection",
                        kind: "LinkedField",
                        name: "recent_searches",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "RecentSearchEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [d, {
                                    kind: "TypeDiscriminator",
                                    abstractKey: "__isSearchable"
                                }, c, {
                                    kind: "InlineFragment",
                                    selections: [e],
                                    type: "Node",
                                    abstractKey: "__isNode"
                                }, f, h, i, j, k, g],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3295737507111647",
                metadata: {
                    relayPreloadable: !0
                },
                name: "CometSearchRecentDataSourceQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("CometSearchRecentDataSourceQuery_node.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        }];
        return {
            argumentDefinitions: [{
                kind: "RootArgument",
                name: "scale"
            }],
            kind: "Fragment",
            metadata: null,
            name: "CometSearchRecentDataSourceQuery_node",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null
                }],
                type: "Node",
                abstractKey: "__isNode"
            }, {
                kind: "InlineFragment",
                selections: [{
                    alias: null,
                    args: [{
                        kind: "Variable",
                        name: "scale",
                        variableName: "scale"
                    }, {
                        kind: "Literal",
                        name: "width",
                        value: 36
                    }],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "uri",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Profile",
                abstractKey: "__isProfile"
            }, {
                kind: "InlineFragment",
                selections: a,
                type: "Application",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: a,
                type: "Event",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: a,
                type: "Group",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: a,
                type: "Page",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: a,
                type: "User",
                abstractKey: null
            }],
            type: "Searchable",
            abstractKey: "__isSearchable"
        }
    }();
    e.exports = a
}
), null);
__d("CometSearchTypeaheadBaseInMemoryListDataCache", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = []
        }
        var b = a.prototype;
        b.clear = function() {
            this.$1 = []
        }
        ;
        b.get = function(a) {
            var b = this.$1.find(function(b) {
                return b.key === a
            });
            return b ? b.value : null
        }
        ;
        b.has = function(a) {
            return this.$1.some(function(b) {
                return b.key === a
            })
        }
        ;
        b.set = function(a, b) {
            var c = this.$1.findIndex(function(b) {
                return b.key === a
            });
            if (c === -1) {
                this.$1.push({
                    key: a,
                    value: b
                });
                return
            }
            this.$1[c] = {
                key: a,
                value: b
            }
        }
        ;
        b.remove = function(a) {
            var b = this.$1.findIndex(function(b) {
                return b.key === a
            });
            this.$1.splice(b, 1)
        }
        ;
        b.values = function() {
            return this.$1.map(function(a) {
                return a.value
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometSearchTypeaheadBaseLoggingProvider", ["gkx", "recoverableViolation", "requireCond", "cr:1288453"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        return Math.random().toString()
    };
    a = function() {
        function a(a) {
            var b = a.context;
            a = a.log;
            this.$4 = null;
            this.$5 = null;
            this.$6 = !1;
            this.$3 = a;
            this.$1 = b
        }
        var c = a.prototype;
        c.addEvent = function(a) {
            var c = a.action
              , d = a.entries
              , e = a.entry;
            a = a.queryString;
            var f = String(Date.now());
            if (!this.$6 || this.$4 == null) {
                b("recoverableViolation")("Cannot log a new " + c + " event into inactive session on " + this.$1 + " surface.", "search");
                return null
            }
            this.$2 && this.$2.push({
                action: c,
                entries: d ? [].concat(d) : null,
                entry: e,
                queryString: a,
                sequenceID: f
            });
            return {
                sequenceID: f,
                sessionID: this.$4
            }
        }
        ;
        c.isSessionActive = function() {
            return this.$6
        }
        ;
        c.getSessionID = function() {
            this.$4 == null && b("recoverableViolation")("Logging sessionID requested from " + this.$1 + " surface does not exist.", "search");
            return this.$4
        }
        ;
        c.endSession = function() {
            var a = this.$5
              , c = this.$4
              , d = this.$2;
            if (a == null || c == null || d == null)
                return;
            d = h(d);
            d = {
                endTimeMs: Date.now(),
                events: d,
                sessionID: c,
                startTimeMs: a
            };
            this.$3(d);
            b("gkx")("1288454") && (b("cr:1288453") && b("cr:1288453")(d));
            this.$6 = !1;
            this.$2 = null;
            this.$5 = null
        }
        ;
        c.startSession = function(a) {
            this.$6 = !0;
            this.$2 = [];
            a = (a = a) != null ? a : g();
            this.$4 = a;
            var c = Date.now();
            this.$5 = c;
            if (b("gkx")("1288454")) {
                a = {
                    events: [],
                    sessionID: a,
                    startTimeMs: c
                };
                b("cr:1288453") && b("cr:1288453")(a)
            }
        }
        ;
        c.getContext = function() {
            return this.$1
        }
        ;
        return a
    }();
    e.exports = a;
    function h(a) {
        if (a.length < 2) {
            b("recoverableViolation")("Logging session can't have less than 2 events", "search");
            return []
        }
        var c = a[0]
          , d = a[1]
          , e = a.slice(2)
          , f = [];
        if (c.action === "typeahead_appeared" && d.action === "keystroke") {
            c = babelHelpers["extends"]({}, c, {
                entries: (c = c.entries) != null ? c : d.entries
            });
            (d = f).push.apply(d, [c].concat(e))
        } else
            f = [].concat(a);
        d = [];
        while (f.length > 0) {
            c = f.shift();
            e = f;
            a = e[0];
            d.push(babelHelpers["extends"]({}, c, {
                entries: (e = a == null ? void 0 : a.entries) != null ? e : c.entries
            }))
        }
        return d
    }
}
), null);
__d("cometSearchTypeaheadBaseMemoizeEntryKey", ["cometUniqueID", "memoizeStringOnly"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("memoizeStringOnly")(function(a) {
        return b("cometUniqueID")()
    });
    function a(a) {
        return g(a)
    }
}
), null);
__d("CometSearchTypeaheadBaseEchoViewItem.react", ["ix", "CometSearchTypeaheadBaseViewItem.react", "React", "TetraIcon.react", "TetraText.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    function a(a) {
        var c = a.entry
          , d = a.isActive
          , e = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "isActive", "queryString"]);
        return i.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            isActive: d,
            itemStartContent: i.jsx("div", {
                className: (h || (h = b("stylex"))).dedupe({
                    "align-items-1": "bp9cbjyn",
                    "background-color-1": "qsy8amke",
                    "border-top-start-radius-1": "n00je7tq",
                    "border-top-end-radius-1": "arfg74bv",
                    "border-bottom-end-radius-1": "qs9ysxi8",
                    "border-bottom-start-radius-1": "k77z8yql",
                    "display-1": "j83agx80",
                    "height-1": "tv7at329",
                    "justify-content-1": "taijpn5t",
                    "width-1": "thwo4zme"
                }, d ? {
                    "background-color-1": "cwj9ozl2"
                } : null),
                children: i.jsx(b("TetraIcon.react"), {
                    color: "secondary",
                    icon: b("fbicon")._(g("491282"), 16),
                    size: 16
                })
            }),
            children: i.jsx(b("TetraText.react"), {
                numberOfLines: 1,
                type: "body3",
                children: String(e).toLowerCase()
            })
        }))
    }
}
), null);
__d("CometSearchTypeaheadBaseSeeAllViewItem.react", ["ix", "fbt", "CometSearchTypeaheadBaseViewItem.react", "React", "TetraIcon.react", "TetraText.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = a.entry
          , d = a.extraViewItemProps;
        d = d === void 0 ? {
            placeholderBuilder: j
        } : d;
        d = d.placeholderBuilder;
        var e = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "extraViewItemProps", "queryString"]);
        return i.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            itemStartContent: i.jsx("div", {
                className: "thwo4zme taijpn5t tv7at329 j83agx80 k77z8yql qs9ysxi8 arfg74bv n00je7tq is6700om bp9cbjyn",
                children: i.jsx(b("TetraIcon.react"), {
                    color: "white",
                    icon: b("fbicon")._(g("491282"), 16),
                    size: 16
                })
            }),
            children: i.jsx(b("TetraText.react"), {
                color: "blueLink",
                numberOfLines: 1,
                type: "body3",
                children: d((a = e) != null ? a : "")
            })
        }))
    }
    function j(a) {
        return h._("T\u00ecm ki\u1ebfm {=[query]}", [h._param("=[query]", i.jsx("strong", {
            children: h._("{query}", [h._param("query", String(a).toLowerCase())])
        }))])
    }
}
), null);
__d("CometAddTypeaheadRecentSearchMutation", ["requireCond", "cr:1012418", "CometAddTypeaheadRecentSearchMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g, h = b("cr:1012418").commitMutation;
    b("cr:1012418").graphql;
    var i = g !== void 0 ? g : g = b("CometAddTypeaheadRecentSearchMutation.graphql");
    function a(a) {
        var b = a.onBeforeCommitMutation
          , c = a.onError
          , d = a.onSuccess
          , e = a.relayEnvironment
          , f = a.selectedID
          , g = a.selectedText
          , j = a.selectedType
          , k = a.source
          , l = a.userID;
        a = a.userInput;
        b && b();
        h(e, {
            mutation: i,
            onCompleted: function(a, b) {
                b && b.length ? c && c(new Error("Payload errors while executing `addTypeaheadRecentSearchMutation`.")) : d && d(a)
            },
            onError: c,
            variables: {
                input: babelHelpers["extends"]({}, l != null ? {
                    actor_id: l
                } : null, {
                    selected_id: f,
                    selected_text: g,
                    selected_type: j,
                    source: k,
                    user_input: a
                })
            }
        })
    }
}
), null);
__d("CometDeleteRecentSearchMutation", ["requireCond", "cr:1012418", "CometDeleteRecentSearchMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g, h = b("cr:1012418").commitMutation;
    b("cr:1012418").graphql;
    var i = g !== void 0 ? g : g = b("CometDeleteRecentSearchMutation.graphql");
    function a(a) {
        var b = a.onBeforeCommitMutation
          , c = a.onError
          , d = a.onSuccess
          , e = a.relayEnvironment
          , f = a.searchEntityType
          , g = a.searchText;
        a = a.userID;
        b && b();
        h(e, {
            mutation: i,
            onCompleted: function(a, b) {
                b && b.length ? c && c(new Error("Payloads error while executing `deleteSearchMutation`.")) : d && d(a)
            },
            onError: c,
            variables: {
                input: babelHelpers["extends"]({}, a != null ? {
                    actor_id: a
                } : null, {
                    search_entity_type: f,
                    search_text: g
                })
            }
        })
    }
}
), null);
__d("CometSearchKeywordDataSource.query", ["CometRelay", "CometTypeaheadDataEntryWithMetaData", "cometUniqueID", "CometSearchKeywordDataSourceQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.normalize = a;
    var g;
    c = g !== void 0 ? g : g = b("CometSearchKeywordDataSourceQuery.graphql");
    f.query = c;
    function a(a, c) {
        if (!a)
            return [];
        a = a.search_keywords_suggestion;
        var d = c.query.request_id;
        c = ((a = a == null ? void 0 : (c = a.suggestions) == null ? void 0 : c.edges) != null ? a : []).map(function(a) {
            return a.node
        }).filter(Boolean);
        a = c.map(function(a) {
            var c = a.logging_id
              , e = a.logging_info
              , f = a.name
              , g = a.structured_info;
            a = a.suffix_to_match;
            var h = g == null ? void 0 : g.direct_nav_result
              , i = g == null ? void 0 : g.high_confidence_result
              , j = g == null ? void 0 : g.disambiguation_result
              , k = f
              , l = ["keyword"];
            if (g) {
                k = (g = h == null ? void 0 : h.title) != null ? g : i == null ? void 0 : i.text;
                h != null ? l = [].concat(l, ["direct_nav"]) : i != null ? l = [].concat(l, ["high_confidence"]) : j != null && (l = [].concat(l, ["disambiguation"]),
                k = ((j == null ? void 0 : j.title) || "") + "_disambiguation_result")
            }
            g = null;
            (h != null || i != null || j != null) && (g = {},
            h != null && (g.direct_nav_result = {
                img_url: h == null ? void 0 : h.img_url,
                link_url: h == null ? void 0 : h.link_url,
                snippet: h == null ? void 0 : h.snippet,
                title: h == null ? void 0 : h.title
            }),
            i != null && (g.high_confidence_result = {
                id: i == null ? void 0 : i.hcm_id,
                picture_url: i == null ? void 0 : i.picture_url,
                snippet: i == null ? void 0 : i.snippet,
                text: i == null ? void 0 : i.text
            }),
            j != null && (g.disambiguation_result = {
                disambiguation_info_list: j == null ? void 0 : j.disambiguation_info_list,
                title: j == null ? void 0 : j.title
            }));
            return new (b("CometTypeaheadDataEntryWithMetaData"))({
                key: (h = k) != null ? h : b("cometUniqueID")(),
                label: (i = f) != null ? i : "",
                metaData: {
                    logging: {
                        loggingID: c,
                        loggingInfo: e,
                        sequenceID: d
                    },
                    markers: new Set(l)
                },
                rawData: {
                    structuredInfo: g,
                    suffix: a,
                    type: "keyword"
                }
            })
        });
        return a
    }
}
), null);
__d("cometSearchKeywordDataSourceQueryOrLabelSuffixBuilder", ["cometSearchTypeaheadBaseLabelSuffixBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        var d = a.getRawData();
        return d.type === "keyword" && d.suffix != null && d.suffix !== "" ? d.suffix : b("cometSearchTypeaheadBaseLabelSuffixBuilder")(a, c)
    }
}
), null);
__d("cometSearchKeywordDataSourceQueryVariablesBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = 10
      , h = "blended";
    function a(a) {
        return function(b) {
            var c, d = b.loggingEventTrace;
            b = b.query;
            c = (c = a) != null ? c : {};
            var e = c.fetch_count
              , f = c.fetch_mode;
            c = c.group_id;
            c = JSON.stringify(c != null ? [{
                text: "",
                type: "group",
                uid: c
            }, b] : [b]);
            return {
                query: {
                    fetch_count: (b = e) != null ? b : g,
                    fetch_mode: (e = f) != null ? e : h,
                    query_text: c,
                    request_id: d == null ? void 0 : d.sequenceID,
                    session_id: (b = d == null ? void 0 : d.sessionID) != null ? b : ""
                }
            }
        }
    }
}
), null);
__d("CometSearchKeywordDataSource", ["CometSearchKeywordDataSource.query", "CometSearchTypeaheadBaseDataProvider", "CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder", "CometSearchTypeaheadBaseNetworkCacheDataSource", "CometSearchTypeaheadBaseQueryDataCacheProvider", "cometSearchCacheEntryBaseKeyBuilder", "cometSearchKeywordDataSourceQueryOrLabelSuffixBuilder", "cometSearchKeywordDataSourceQueryVariablesBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var c = a.queryVariables;
            a = a.relayEnvironment;
            c = new (b("CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder"))(b("cometSearchKeywordDataSourceQueryVariablesBuilder")).setDefaultVariables(c);
            c = new (b("CometSearchTypeaheadBaseDataProvider"))({
                query: b("CometSearchKeywordDataSource.query").query,
                queryVariablesBuilder: c,
                relayEnvironment: a
            });
            a = new (b("CometSearchTypeaheadBaseQueryDataCacheProvider"))({
                dedupKeyBuilder: b("cometSearchCacheEntryBaseKeyBuilder"),
                suffixBuilder: function() {
                    return b("cometSearchKeywordDataSourceQueryOrLabelSuffixBuilder").apply(void 0, arguments)
                }
            });
            this.$1 = new (b("CometSearchTypeaheadBaseNetworkCacheDataSource"))(c,a,{
                normalizeFunc: b("CometSearchKeywordDataSource.query").normalize
            })
        }
        var c = a.prototype;
        c.fetchCache = function(a) {
            return this.$1.fetchCache(a)
        }
        ;
        c.fetchNetwork = function(a) {
            return this.$1.fetchNetwork(a)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometSearchRecentDataCacheProvider", ["cometSearchDataEntryLabelKeyBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var c = a.cache
              , d = a.matchBuilder;
            a = a.keyBuilder;
            a = a === void 0 ? b("cometSearchDataEntryLabelKeyBuilder") : a;
            this.$1 = c;
            this.$2 = d;
            this.$3 = a
        }
        var c = a.prototype;
        c.add = function(a, b, c) {
            var d = this;
            if (c === "network") {
                this.$1.clear();
                [].concat(a).reverse().forEach(function(a) {
                    var b = d.$3(a);
                    d.$1.set(b, a)
                });
                return
            }
            a.forEach(function(a) {
                var b = d.$3(a);
                d.$1.has(b) && d.$1.remove(b);
                d.$1.set(b, a)
            })
        }
        ;
        c.clear = function() {
            this.$1.clear()
        }
        ;
        c.remove = function(a) {
            a = this.$3(a);
            this.$1.remove(a)
        }
        ;
        c.match = function(a) {
            var b = this.$2({
                query: a
            });
            return [].concat(this.$1.values()).reverse().filter(function(a) {
                return b(a)
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometSearchRecentDataSource.query", ["CometRelay", "CometTypeaheadDataEntryWithMetaData", "cometUniqueID", "CometSearchRecentDataSourceQuery.graphql", "CometSearchRecentDataSourceQuery_node.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.normalize = a;
    var g, h, i = ["Application", "Event", "Group", "Page", "User"];
    c = g !== void 0 ? g : g = b("CometSearchRecentDataSourceQuery.graphql");
    f.query = c;
    h !== void 0 ? h : h = b("CometSearchRecentDataSourceQuery_node.graphql");
    function a(a) {
        if (!a)
            return [];
        a = a.viewer;
        a = ((a = a == null ? void 0 : (a = a.recent_searches) == null ? void 0 : a.edges) != null ? a : []).map(function(a) {
            return a.node
        }).filter(Boolean);
        a = a.map(function(a) {
            var c, d = i.includes(a.__typename);
            return new (b("CometTypeaheadDataEntryWithMetaData"))({
                key: b("cometUniqueID")(),
                label: (c = a.name) != null ? c : "",
                metaData: {
                    logging: {
                        entityID: d ? (c = a.id) != null ? c : "" : null,
                        entityType: d ? ((c = a.__typename) != null ? c : "").toLowerCase() : null
                    },
                    markers: new Set(d ? ["entity", "recent"] : ["recent"])
                },
                rawData: {
                    id: (c = a.id) != null ? c : "",
                    profile: {
                        pictureUrl: (d = a.profile_picture) == null ? void 0 : d.uri,
                        url: a.url
                    },
                    type: "recent"
                }
            })
        });
        return a
    }
}
), null);
__d("cometSearchNullStateMatchBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        return function(a) {
            a = a.getMetaData();
            a = a.markers;
            return a.has("recent")
        }
    }
}
), null);
__d("cometSearchRecentDataSourceQueryVariablesBuilder", ["WebPixelRatio"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = "all";
    function a(a) {
        return function() {
            var c;
            return {
                filter: (c = a == null ? void 0 : a.filter) != null ? c : g,
                first: a == null ? void 0 : a.first,
                scale: b("WebPixelRatio").get()
            }
        }
    }
}
), null);
__d("CometSearchRecentDataSource", ["Promise", "CometAddTypeaheadRecentSearchMutation", "CometDeleteRecentSearchMutation", "CometSearchRecentDataCacheProvider", "CometSearchRecentDataSource.query", "CometSearchTypeaheadBaseDataProvider", "CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder", "CometSearchTypeaheadBaseInMemoryListDataCache", "CometSearchTypeaheadBaseNetworkDataSource", "cometSearchNullStateMatchBuilder", "cometSearchRecentDataSourceQueryVariablesBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 16;
    a = function() {
        function a(a) {
            var c, d = a.queryVariables;
            a = a.relayEnvironment;
            this.$3 = (c = d.first) != null ? c : g;
            this.$4 = a;
            c = new (b("CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder"))(b("cometSearchRecentDataSourceQueryVariablesBuilder")).setDefaultVariables(d);
            d = new (b("CometSearchTypeaheadBaseDataProvider"))({
                query: b("CometSearchRecentDataSource.query").query,
                queryVariablesBuilder: c,
                relayEnvironment: a
            });
            this.$2 = new (b("CometSearchRecentDataCacheProvider"))({
                cache: new (b("CometSearchTypeaheadBaseInMemoryListDataCache"))(),
                matchBuilder: b("cometSearchNullStateMatchBuilder")
            });
            this.$1 = new (b("CometSearchTypeaheadBaseNetworkDataSource"))(d,b("CometSearchRecentDataSource.query").normalize)
        }
        var c = a.prototype;
        c.add = function(a, c, d) {
            d = d === void 0 ? {} : d;
            var e = d.onBeforeCommitMutation
              , f = d.onError;
            d = d.onSuccess;
            var g = a.getMetaData();
            this.$2.add([a], "");
            b("CometAddTypeaheadRecentSearchMutation").commit({
                onBeforeCommitMutation: e,
                onError: f,
                onSuccess: d,
                relayEnvironment: this.$4,
                selectedID: g == null ? void 0 : (e = g.logging) == null ? void 0 : e.entityID,
                selectedText: a.getLabel(),
                selectedType: (d = g == null ? void 0 : (f = g.logging) == null ? void 0 : f.entityType) != null ? d : "keyword",
                source: c,
                userInput: a.getLabel()
            })
        }
        ;
        c.bootstrap = function() {
            this.fetchNetwork({
                query: ""
            })
        }
        ;
        c.fetchCache = function(a) {
            var b = a.query;
            b = this.$2.match(b);
            return {
                entries: b,
                params: a
            }
        }
        ;
        c.fetchNetwork = function(a) {
            var c = this;
            return this.$5 != null && this.$5 < this.$3 ? b("Promise").resolve({
                entries: this.$2.match(a.query),
                params: a
            }) : this.$1.fetchNetwork(a).then(function(b) {
                var d = b.entries;
                b = b.params.query;
                d != null && (c.$5 = d.length,
                c.$2.add(d, b, "network"));
                return {
                    entries: c.$2.match(b),
                    params: a
                }
            })
        }
        ;
        c.remove = function(a, c) {
            c = c === void 0 ? {} : c;
            var d = c.onBeforeCommitMutation
              , e = c.onError;
            c = c.onSuccess;
            this.$2.remove(a);
            b("CometDeleteRecentSearchMutation").commit({
                onBeforeCommitMutation: d,
                onError: e,
                onSuccess: c,
                relayEnvironment: this.$4,
                searchText: a.getLabel()
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometSearchRecentDataSourceDispatcherContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext();
    e.exports = c
}
), null);
__d("useCometSearchRecentDataSourceDispatcher", ["CometSearchRecentDataSourceDispatcherContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometSearchRecentDataSourceDispatcherContext"))
    }
}
), null);
__d("cometWithRecentDataSourceContext", ["CometSearchEventEmitterContext", "CometSearchRecentDataSourceDispatcherContext", "CometTypeaheadDataEntryWithMetaData", "React", "useCometSearchInternalTypeaheadFetch"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("CometSearchRecentDataSourceDispatcherContext").Provider
      , h = b("React");
    function a(a, c) {
        var d = c.dataSource;
        return h.forwardRef(function(c, e) {
            var f = c.onPressEntry
              , i = c.onSelectFreeformQuery;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["onPressEntry", "onSelectFreeformQuery"]);
            var j = b("useCometSearchInternalTypeaheadFetch")()
              , k = j.refetch;
            j = h.useContext(b("CometSearchEventEmitterContext"));
            var l = j.subscribeToRecentSearchEntryAdded;
            h.useEffect(function() {
                return l(function(a) {
                    d.addRecentEntry(a)
                })
            }, [l]);
            j = h.useCallback(function(a) {
                var c = new (b("CometTypeaheadDataEntryWithMetaData"))({
                    key: a,
                    label: a,
                    metaData: {
                        markers: new Set(["recent"])
                    },
                    rawData: {
                        type: "temp"
                    }
                });
                d.addRecentEntry(c);
                i && i(a)
            }, [i]);
            var m = h.useCallback(function(a) {
                var c = a.getMetaData();
                c = (c = c == null ? void 0 : c.markers) != null ? c : new Set();
                c = c.has("entity");
                var e = new Set(["recent"]);
                c && e.add("entity");
                c = new (b("CometTypeaheadDataEntryWithMetaData"))({
                    key: a.getKey(),
                    label: a.getLabel(),
                    metaData: babelHelpers["extends"]({}, a.getMetaData(), {
                        markers: e
                    }),
                    rawData: a.getRawData()
                });
                d.addRecentEntry(c);
                f && f(a)
            }, [f])
              , n = h.useCallback(function(a) {
                d.removeRecentEntry(a, {
                    onBeforeCommitMutation: function() {
                        k("cache")
                    }
                })
            }, [k])
              , o = h.useMemo(function() {
                return {
                    dispatchRemoveRecentEntry: n
                }
            }, [n]);
            return h.jsx(g, {
                value: o,
                children: h.jsx(a, babelHelpers["extends"]({}, c, {
                    onPressEntry: m,
                    onSelectFreeformQuery: j,
                    ref: e
                }))
            })
        })
    }
}
), null);
__d("useCometSearchRecentDataSourceContextDecorator", ["React", "cometWithRecentDataSourceContext"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = function() {
            return b("cometWithRecentDataSourceContext").apply(void 0, arguments)
        };
        return g.useMemo(function() {
            return {
                decorate: c,
                params: {
                    dataSource: a
                }
            }
        }, [a])
    }
}
), null);
__d("SearchTypeaheadLoggingSessionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744357");
    c = b("FalcoLoggerInternal").create("search_typeahead_logging_session", a);
    e.exports = c
}
), null);
__d("cometSearchTypeaheadFalcoLoggingSessionLogBuilder", ["SearchTypeaheadLoggingSessionFalcoEvent"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = 12;
    function a(a, c) {
        return function(d) {
            var e = h(a, c, d);
            b("SearchTypeaheadLoggingSessionFalcoEvent").logImmediately(function() {
                return {
                    session: e
                }
            })
        }
    }
    function h(a, b, c) {
        var d = c.endTimeMs
          , e = c.events
          , f = c.sessionID;
        c = c.startTimeMs;
        var h = e.filter(function(a, b) {
            return b < Math.floor(g / 2) || b >= e.length - Math.ceil(g / 2)
        });
        return {
            context: a,
            end_time_ms: d,
            events: h.map(i),
            scoped_entity_id: b,
            session_id: f,
            start_time_ms: c
        }
    }
    function i(a) {
        var b = a.action
          , c = a.entries
          , d = a.entry
          , e = a.queryString;
        a = a.sequenceID;
        return {
            action_type: b,
            entries: c != null ? c.map(j) : [],
            entry: d != null && c != null ? j(d, c.indexOf(d)) : null,
            query: (b = e) != null ? b : "",
            sequence_id: a
        }
    }
    function j(a, b) {
        var c, d = a.getMetaData();
        return {
            entity_id: d == null ? void 0 : (c = d.logging) == null ? void 0 : c.entityID,
            entity_type: d == null ? void 0 : (c = d.logging) == null ? void 0 : c.entityType,
            id: a.getKey(),
            index_in_group: b,
            label: a.getLabel(),
            logging_id: d == null ? void 0 : (c = d.logging) == null ? void 0 : c.loggingID,
            logging_info: d == null ? void 0 : (b = d.logging) == null ? void 0 : b.loggingInfo,
            sequence_id: d == null ? void 0 : (c = d.logging) == null ? void 0 : c.sequenceID,
            source: k(a)
        }
    }
    function k(a) {
        a = a.getMetaData();
        if (a == null)
            return "backend";
        a = a.markers;
        if (a.has("see_all"))
            return "escape";
        if (a.has("echo"))
            return "echo";
        if (a.has("recent"))
            return "recent_searches";
        return a.has("bootstrap") ? "bootstrap" : "backend"
    }
}
), null);
__d("useCometSearchTypeaheadLoggingProvider", ["CometSearchTypeaheadBaseLoggingProvider", "React", "cometSearchTypeaheadFalcoLoggingSessionLogBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c) {
        return g.useMemo(function() {
            return new (b("CometSearchTypeaheadBaseLoggingProvider"))({
                context: a,
                log: b("cometSearchTypeaheadFalcoLoggingSessionLogBuilder")(a, c)
            })
        }, [a, c])
    }
}
), null);
__d("cometSearchTypeaheadPayloadDecoratorAddEcho", ["CometTypeaheadDataEntryWithMetaData", "cometSearchTypeaheadBaseMemoizeEntryKey"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return function(c) {
            var d = c.entries
              , e = c.params.query;
            d = (d = d) != null ? d : [];
            var f = d.find(function(a) {
                return a.getKey().toLowerCase() === e.trim().toLowerCase()
            }) != null
              , g = [];
            if (!f && d.length < a) {
                f = b("cometSearchTypeaheadBaseMemoizeEntryKey")(e + "-echo");
                f = new (b("CometTypeaheadDataEntryWithMetaData"))({
                    key: f,
                    label: e,
                    metaData: {
                        markers: new Set(["echo"])
                    },
                    rawData: {
                        type: "echo"
                    }
                });
                g.push(f)
            }
            return babelHelpers["extends"]({}, c, {
                entries: [].concat(d, g)
            })
        }
    }
}
), null);
__d("cometSearchTypeaheadPayloadDecoratorAddRecentMarker", ["CometTypeaheadDataEntryWithMetaData"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = new Set(a.map(function(a) {
            return a.getLabel().toLowerCase()
        }));
        return function(a) {
            var d = a.entries
              , e = [];
            for (var d = d, f = Array.isArray(d), g = 0, d = f ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var h;
                if (f) {
                    if (g >= d.length)
                        break;
                    h = d[g++]
                } else {
                    g = d.next();
                    if (g.done)
                        break;
                    h = g.value
                }
                h = h;
                var i = c.has(h.getLabel().toLowerCase());
                if (!i) {
                    e.push(h);
                    continue
                }
                i = h.getMetaData();
                var j = null;
                if (i == null)
                    j = {
                        markers: new Set(["recent"])
                    };
                else {
                    var k = i.markers;
                    i = babelHelpers.objectWithoutPropertiesLoose(i, ["markers"]);
                    j = babelHelpers["extends"]({}, i, {
                        markers: k.add("recent")
                    })
                }
                i = new (b("CometTypeaheadDataEntryWithMetaData"))({
                    key: h.getKey(),
                    label: h.getLabel(),
                    metaData: j,
                    rawData: h.getRawData()
                });
                e.push(i)
            }
            return babelHelpers["extends"]({}, a, {
                entries: e
            })
        }
    }
}
), null);
__d("cometSearchTypeaheadPayloadDecoratorAddSeeAll", ["CometTypeaheadDataEntryWithMetaData", "cometSearchTypeaheadBaseMemoizeEntryKey"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = a.position;
        return function(a) {
            var d = a.entries
              , e = a.params.query;
            d = (d = d) != null ? d : [];
            var f = b("cometSearchTypeaheadBaseMemoizeEntryKey")(e + "-see_all");
            f = new (b("CometTypeaheadDataEntryWithMetaData"))({
                key: f,
                label: e,
                metaData: {
                    markers: new Set(["see_all"])
                },
                rawData: {
                    type: "see_all"
                }
            });
            e = [];
            switch (c) {
            case "bottom":
                e = [].concat(d, [f]);
                break;
            case "top":
                e = [f].concat(d);
                break
            }
            return babelHelpers["extends"]({}, a, {
                entries: e
            })
        }
    }
}
), null);
__d("cometSearchTypeaheadDecorateMixedPayload", ["cometSearchTypeaheadBaseFetchPayloadDecorate", "cometSearchTypeaheadPayloadDecoratorAddEcho", "cometSearchTypeaheadPayloadDecoratorAddLimit", "cometSearchTypeaheadPayloadDecoratorAddRecentMarker", "cometSearchTypeaheadPayloadDecoratorAddSeeAll"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        var d = c.limit
          , e = c.recentEntries;
        c = c.seeAllPosition;
        c = c === void 0 ? "bottom" : c;
        return b("cometSearchTypeaheadBaseFetchPayloadDecorate")(a, [b("cometSearchTypeaheadPayloadDecoratorAddRecentMarker")(e), b("cometSearchTypeaheadPayloadDecoratorAddLimit")(d), b("cometSearchTypeaheadPayloadDecoratorAddEcho")(d), b("cometSearchTypeaheadPayloadDecoratorAddSeeAll")({
            position: c
        })])
    }
}
), null);
__d("cometSearchTypeaheadDecorateRecentPayload", ["cometSearchTypeaheadBaseFetchPayloadDecorate", "cometSearchTypeaheadPayloadDecoratorAddLimit"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        c = c.limit;
        return b("cometSearchTypeaheadBaseFetchPayloadDecorate")(a, [b("cometSearchTypeaheadPayloadDecoratorAddLimit")(c)])
    }
}
), null);
__d("cometSearchTypeaheadEchoViewItem.resolver", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.getMetaData();
        a = a.markers;
        return a.has("echo")
    }
}
), null);
__d("cometSearchTypeaheadKeywordViewItem.resolver", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.getMetaData();
        a = a.markers;
        return a.has("keyword")
    }
}
), null);
__d("cometSearchTypeaheadRecentKeywordViewItem.resolver", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.getMetaData();
        a = a.markers;
        return a.has("recent") && (a.has("keyword") || a.has("bootstrap"))
    }
}
), null);
__d("cometSearchTypeaheadRecentViewItem.resolver", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.getMetaData();
        a = a.markers;
        return a.has("recent")
    }
}
), null);
__d("cometSearchTypeaheadSeeAllViewItem.resolver", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.getMetaData();
        a = a.markers;
        return a.has("see_all")
    }
}
), null);
__d("CometSearchTypeaheadBaseSurfaceRecentViewItemRemoveButton.react", ["ix", "fbt", "React", "TetraIcon.react", "fbicon", "stylex", "useCometSearchRecentDataSourceDispatcher"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = a.entry;
        a = b("useCometSearchRecentDataSourceDispatcher")();
        var d = a.dispatchRemoveRecentEntry;
        a = i.useState(!1);
        var e = a[0]
          , f = a[1];
        a = i.useCallback(function(a) {
            a && a.type !== "press" && a.stopPropagation(),
            f(!0),
            d(c)
        }, [d, c]);
        return i.jsx("div", {
            className: "odw8uiq3 jnigpg78",
            children: i.jsx(b("TetraIcon.react"), {
                "aria-label": h._("X\u00f3a n\u1ed9i dung t\u00ecm ki\u1ebfm m\u1edbi \u0111\u00e2y"),
                color: "secondary",
                disabled: e,
                focusable: !1,
                icon: b("fbicon")._(g("478231"), 12),
                onPress: a,
                size: 24
            })
        })
    }
}
), null);
__d("CometSearchTypeaheadBaseSurfaceRecentViewItem.react", ["CometSearchTypeaheadBaseFocusLockRegion.react", "CometSearchTypeaheadBaseRecentViewItem.react", "CometSearchTypeaheadBaseSurfaceRecentViewItemRemoveButton.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entry;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
        return g.jsx(b("CometSearchTypeaheadBaseRecentViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            itemEndContent: g.jsx(b("CometSearchTypeaheadBaseFocusLockRegion.react"), {
                children: g.jsx(b("CometSearchTypeaheadBaseSurfaceRecentViewItemRemoveButton.react"), {
                    entry: c
                })
            })
        }))
    }
}
), null);
__d("XCometSearchResultsControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/search/{?searchtype}/{?*bqf}/", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("CometSearchBootstrapEntitiesDataSourceQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "first"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "of_type"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "picture_size"
        }]
          , b = [{
            kind: "Variable",
            name: "first",
            variableName: "first"
        }, {
            kind: "Variable",
            name: "of_type",
            variableName: "of_type"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "subtext",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "item_logging_id",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_verified",
            storageKey: null
        }
          , i = {
            alias: null,
            args: [{
                kind: "Variable",
                name: "height",
                variableName: "picture_size"
            }, {
                kind: "Variable",
                name: "width",
                variableName: "picture_size"
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: null
        }
          , j = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "site",
                value: "www"
            }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"www")'
        }
          , k = {
            kind: "InlineFragment",
            selections: [g, h, i, j, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "should_show_as_individual_search_result",
                storageKey: null
            }],
            type: "User",
            abstractKey: null
        }
          , l = [g, i, j]
          , m = {
            kind: "InlineFragment",
            selections: l,
            type: "Group",
            abstractKey: null
        };
        h = {
            kind: "InlineFragment",
            selections: [g, h, i, j],
            type: "Page",
            abstractKey: null
        };
        i = {
            kind: "InlineFragment",
            selections: l,
            type: "Event",
            abstractKey: null
        };
        j = {
            alias: "hcmMatchCriteria",
            args: null,
            kind: "ScalarField",
            name: "hcm_match_criteria",
            storageKey: null
        };
        l = {
            alias: "showHCMExperience",
            args: null,
            kind: "ScalarField",
            name: "show_hcm_experience",
            storageKey: null
        };
        var n = {
            alias: "isPlaceResult",
            args: null,
            kind: "ScalarField",
            name: "is_place_result",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometSearchBootstrapEntitiesDataSourceQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: b,
                        concreteType: "BootstrapResultsConnection",
                        kind: "LinkedField",
                        name: "bootstrap_entities",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BootstrapResultsEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "BootstrapResult",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [c, d, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "searchable",
                                    plural: !1,
                                    selections: [e, f, k, m, h, i],
                                    storageKey: null
                                }, j, l, n],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CometSearchBootstrapEntitiesDataSourceQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: b,
                        concreteType: "BootstrapResultsConnection",
                        kind: "LinkedField",
                        name: "bootstrap_entities",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BootstrapResultsEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "BootstrapResult",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [c, d, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "searchable",
                                    plural: !1,
                                    selections: [e, f, k, m, h, i, {
                                        kind: "InlineFragment",
                                        selections: [g],
                                        type: "Node",
                                        abstractKey: "__isNode"
                                    }],
                                    storageKey: null
                                }, j, l, n],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3282927181740219",
                metadata: {},
                name: "CometSearchBootstrapEntitiesDataSourceQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometSearchBootstrapEntitiesDataSourceQuery_node.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_verified",
            storageKey: null
        }
          , c = {
            alias: null,
            args: [{
                kind: "Variable",
                name: "height",
                variableName: "picture_size"
            }, {
                kind: "Variable",
                name: "width",
                variableName: "picture_size"
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: null
        }
          , d = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "site",
                value: "www"
            }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"www")'
        }
          , e = [a, c, d];
        return {
            argumentDefinitions: [{
                kind: "RootArgument",
                name: "picture_size"
            }],
            kind: "Fragment",
            metadata: null,
            name: "CometSearchBootstrapEntitiesDataSourceQuery_node",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subtext",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "item_logging_id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "searchable",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null
                }, {
                    kind: "InlineFragment",
                    selections: [a, b, c, d, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "should_show_as_individual_search_result",
                        storageKey: null
                    }],
                    type: "User",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: e,
                    type: "Group",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: [a, b, c, d],
                    type: "Page",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: e,
                    type: "Event",
                    abstractKey: null
                }],
                storageKey: null
            }, {
                alias: "hcmMatchCriteria",
                args: null,
                kind: "ScalarField",
                name: "hcm_match_criteria",
                storageKey: null
            }, {
                alias: "showHCMExperience",
                args: null,
                kind: "ScalarField",
                name: "show_hcm_experience",
                storageKey: null
            }, {
                alias: "isPlaceResult",
                args: null,
                kind: "ScalarField",
                name: "is_place_result",
                storageKey: null
            }],
            type: "BootstrapResult",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("useCometWatchBadgeCountQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useCometWatchBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        args: [{
                            kind: "Literal",
                            name: "bookmarkID",
                            value: "2392950137"
                        }],
                        kind: "FragmentSpread",
                        name: "useTopTabBadgeCount_viewer"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "useCometWatchBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: [{
                            items: [{
                                kind: "Literal",
                                name: "bookmark_ids.0",
                                value: "2392950137"
                            }],
                            kind: "ListValue",
                            name: "bookmark_ids"
                        }, {
                            kind: "Literal",
                            name: "environment",
                            value: "COMET"
                        }, {
                            kind: "Literal",
                            name: "folder_id",
                            value: "PRODUCT"
                        }, {
                            kind: "Literal",
                            name: "sections",
                            value: ["FACEBOOK_APP"]
                        }],
                        concreteType: "BookmarksConnection",
                        kind: "LinkedField",
                        name: "bookmarks",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BookmarksEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "Bookmark",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "bookmarked_node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }, a],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: [{
                                        kind: "Literal",
                                        name: "bookmark_render_location",
                                        value: "COMET_TOP_TAB"
                                    }],
                                    kind: "ScalarField",
                                    name: "unread_count",
                                    storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")'
                                }, a],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: 'bookmarks(bookmark_ids:["2392950137"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3074858979266201",
                metadata: {
                    relayPreloadable: !0
                },
                name: "useCometWatchBadgeCountQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("useCometTypeaheadBaseStateQueryString", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = g.useState(a)
          , c = b[0]
          , d = b[1];
        g.useEffect(function() {
            return d(a)
        }, [a]);
        return [c, d]
    }
}
), null);
__d("CometSearchBootstrapEntitiesDataSource.query", ["CometRelay", "CometTypeaheadDataEntryWithMetaData", "cometUniqueID", "CometSearchBootstrapEntitiesDataSourceQuery.graphql", "CometSearchBootstrapEntitiesDataSourceQuery_node.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.normalize = a;
    var g, h;
    c = g !== void 0 ? g : g = b("CometSearchBootstrapEntitiesDataSourceQuery.graphql");
    f.query = c;
    h !== void 0 ? h : h = b("CometSearchBootstrapEntitiesDataSourceQuery_node.graphql");
    function a(a) {
        if (!a)
            return [];
        a = ((a = (a = a.viewer) == null ? void 0 : (a = a.bootstrap_entities) == null ? void 0 : a.edges) != null ? a : []).map(function(a) {
            return a.node
        }).filter(Boolean);
        a = a.map(function(a) {
            var c = a.hcmMatchCriteria
              , d = a.isPlaceResult
              , e = a.item_logging_id
              , f = a.searchable
              , g = a.showHCMExperience;
            a = a.subtext;
            if (f == null)
                return null;
            var h = f.__typename
              , i = f.id
              , j = f.is_verified
              , k = f.name
              , l = f.profile_picture
              , m = f.should_show_as_individual_search_result;
            f = f.url;
            c = c;
            var n = h.toLowerCase();
            c = {
                hcmMatchCriteria: c,
                id: i,
                isPlaceResult: (c = d) != null ? c : !1,
                isVerified: j,
                name: k,
                profilePictureURI: (d = l == null ? void 0 : l.uri) != null ? d : "",
                resultType: n,
                shouldShowAsIndividualResult: Boolean(m),
                showHCMExperience: g,
                snippet: a,
                type: "bootstrap",
                url: f
            };
            l = {
                logging: {
                    entityID: i,
                    entityType: h.toLowerCase(),
                    loggingID: (j = e) != null ? j : ""
                },
                markers: new Set(["bootstrap", "entity"])
            };
            return new (b("CometTypeaheadDataEntryWithMetaData"))({
                key: (d = i) != null ? d : b("cometUniqueID")(),
                label: (n = k) != null ? n : "",
                metaData: l,
                rawData: c
            })
        }).filter(Boolean);
        return a
    }
}
), null);
__d("CometSearchBootstrapEntitiesDataSource", ["CometRelay", "CometSearchBootstrapEntitiesDataSource.query", "CometSearchTypeaheadBaseDataCacheProvider", "CometSearchTypeaheadBaseInMemoryMapDataCache", "WebPixelRatio", "cometSearchTypeaheadBaseQueryMatchBuilder", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1e3;
    a = function() {
        function a(a) {
            a = a.relayEnvironment;
            this.$1 = new (b("CometSearchTypeaheadBaseDataCacheProvider"))({
                cache: new (b("CometSearchTypeaheadBaseInMemoryMapDataCache"))(),
                matchBuilder: b("cometSearchTypeaheadBaseQueryMatchBuilder")
            });
            this.$4 = !1;
            this.$2 = {
                first: g,
                of_type: ["user", "group", "page", "event"],
                picture_size: 60 * b("WebPixelRatio").get()
            };
            this.$3 = a
        }
        var c = a.prototype;
        c.isBootstrapped = function() {
            return this.$4
        }
        ;
        c.bootstrap = function() {
            var a = this;
            b("promiseDone")(b("CometRelay").fetchQuery(this.$3, b("CometSearchBootstrapEntitiesDataSource.query").query, this.$2).toPromise().then(b("CometSearchBootstrapEntitiesDataSource.query").normalize).then(function(b) {
                a.$1.add(b, null)
            }).then(function() {
                return a.$4 = !0
            }))
        }
        ;
        c.fetchCache = function(a) {
            var b = a.query;
            b = this.$1.match(b);
            return {
                entries: b,
                params: a
            }
        }
        ;
        a.getInstance = function(b) {
            if (a.instance != null)
                return a.instance;
            a.instance = new a(b);
            return a.instance
        }
        ;
        return a
    }();
    e.exports = a;
    a.instance = null
}
), null);
__d("useSearchCometGlobalSERPRouteUrlBuilder", ["Base64", "CometRouteParams", "React", "XCometSearchResultsControllerRouteBuilder", "useCometSearchResultsEntryPointSurface"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a === void 0 ? {} : a;
        var c = a.currentSearchType;
        a = a.entryPointSurface;
        var d = b("CometRouteParams").useRouteParams()
          , e = d.__tsid__
          , f = b("useCometSearchResultsEntryPointSurface")({
            currentSearchType: c,
            entryPointSurface: a
        });
        return g.useCallback(function(a) {
            var d = a.disableAutocorrect
              , g = a.encryptedQueryFunction
              , h = a.entryPointAction
              , i = a.filters
              , j = a.highConfidenceResult
              , k = a.kgid
              , l = a.preloadedEntityIDs
              , m = a.preloadedEntityType
              , n = a.query
              , o = a.searchType;
            a = a.typeaheadSessionID;
            n = {
                q: n,
                searchtype: (o = (n = o) != null ? n : c) != null ? o : "top"
            };
            g != null && (n.f = g);
            a != null ? n.__tsid__ = a : typeof e === "string" && (n.__tsid__ = e);
            h != null && (n.__epa__ = h);
            f != null && (n.__eps__ = f);
            i != null && (n.filters = b("Base64").encode(JSON.stringify(i)));
            d === !0 && (n.spell = "1");
            l != null && (n.__pei__ = b("Base64").encode(JSON.stringify(l)));
            m != null && (n.__pet__ = b("Base64").encode(JSON.stringify(m)));
            if (j != null) {
                o = j.id;
                g = j.source;
                n.__hcr__ = b("Base64").encode(JSON.stringify({
                    id: o,
                    source: g
                }))
            }
            k != null && (n.ib = b("Base64").encode(JSON.stringify({
                kgid: k
            })));
            return b("XCometSearchResultsControllerRouteBuilder").buildURL(n)
        }, [c, e, f])
    }
}
), null);
__d("searchCometGlobalTypeahead.config", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = 8;
    b = {
        dataSources: {
            bootstrapKeywordsDataSourceParams: {
                queryVariables: {
                    first: 2e3
                }
            },
            keywordDataSourceParams: {
                queryVariables: {
                    fetch_count: a,
                    fetch_mode: "blended"
                }
            },
            recentDataSourceParams: {
                queryVariables: {
                    filter: "all",
                    first: a * 2
                }
            }
        },
        logging: {
            sessionContext: "SEARCH_GLOBAL"
        },
        view: {
            renderLimit: a
        }
    };
    e.exports = b
}
), null);
__d("getSearchCometGlobalTypeaheadBootstrapEntityModuleParams", ["FBLogger", "TokenizeUtil", "filterNulls"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = 3
      , h = new Map([["user", "ENTITY_USER"], ["page", "ENTITY_PAGES"], ["event", "ENTITY_EVENTS"], ["group", "ENTITY_GROUPS"], ["place", "ENTITY_PLACES"], ["blended", "ENTITY_BLENDED"]]);
    function i(a) {
        return b("TokenizeUtil").parse(a).tokens.join("")
    }
    function j(a, c, d) {
        var e = c.toLowerCase().trim()
          , f = d.toLowerCase().trim();
        switch (a) {
        case "exact":
            return e === f;
        case "partial":
            return f.indexOf(e) !== -1;
        case "prefix":
            return f.indexOf(e) === 0;
        case "no_constraint":
            return !0;
        case "trimmed":
            return i(e) === i(f);
        default:
            b("FBLogger")("search").warn("Unexpected HCM match criteria %s", a);
            return c === d
        }
    }
    function a(a, c) {
        a = a.fetchCache({
            query: c
        });
        a = a.entries;
        a = a.slice(0, g);
        var d = b("filterNulls")(a.map(function(a) {
            a = a.getRawData();
            return a == null ? void 0 : a.id
        }))
          , e = a.length > 0 ? a[0] : null;
        if (e == null)
            return null;
        var f = e.getRawData();
        if (f == null)
            return null;
        var i = f.hcmMatchCriteria
          , k = f.id
          , l = f.isPlaceResult
          , m = f.resultType;
        f = f.showHCMExperience;
        var n = a.filter(function(a) {
            return ((a = a.getRawData()) == null ? void 0 : a.resultType) === m
        })
          , o = a.some(function(a) {
            return a.getRawData().shouldShowAsIndividualResult === !0
        });
        o = o || n.length !== a.length ? "blended" : m;
        n = h.get(l ? "place" : o);
        var p;
        switch (o) {
        case "app":
            p = "APP";
            break;
        case "blended":
            p = "BLENDED";
            break;
        case "event":
            p = "EVENT";
            break;
        case "group":
            p = "GROUP";
            break;
        case "page":
            p = l ? "PLACE" : "PAGE";
            break;
        case "user":
            p = "USER";
            break
        }
        if (n == null || p == null)
            return null;
        var q;
        if (a.length === 1 && i != null && f === !0) {
            o = j(i, c, e.getLabel());
            o && f === !0 && k != null && (q = {
                id: k,
                source: "BOOTSTRAP_EXACT_MATCH"
            })
        }
        return {
            highConfidenceResult: q,
            moduleRole: n,
            preloadedEntityIDs: d,
            preloadedEntityType: p,
            results: a
        }
    }
}
), null);
__d("useSearchCometGlobalTypeaheadEntityBootstrap", ["CometRelay", "CometSearchBootstrapEntitiesDataSource", "React", "getSearchCometGlobalTypeaheadBootstrapEntityModuleParams", "gkx", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("requireDeferred")("BanzaiODS");
    function a() {
        var a = b("CometRelay").useRelayEnvironment()
          , c = g.useMemo(function() {
            return b("gkx")("1096208") ? b("CometSearchBootstrapEntitiesDataSource").getInstance({
                relayEnvironment: a
            }) : null
        }, [a]);
        return g.useMemo(function() {
            return {
                getParamsForQuery: function(a) {
                    return c == null || !c.isBootstrapped() ? null : b("getSearchCometGlobalTypeaheadBootstrapEntityModuleParams")(c, a)
                },
                load: function() {
                    c != null && !c.isBootstrapped() && c.bootstrap()
                },
                logLoadStatus: function() {
                    h.onReady(function(a) {
                        a.bumpEntityKey(354, "comet.entity_bootstrap", c != null && c.isBootstrapped() ? "loaded" : "not_loaded")
                    })
                }
            }
        }, [c])
    }
}
), null);
__d("GlobalVideoPortsManager", ["addToMap", "emptyFunction", "gkx", "removeFromMap"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isUnlinkedGlobalVideoPortsPlace = g;
    a = b("emptyFunction");
    function g(a) {
        return a.unlinkedAtTimestampMs !== null
    }
    var h = 1e4;
    f.UNLINKED_PLACE_TIMEOUT_MS = h;
    c = function() {
        function a(a) {
            var c = this;
            b("gkx")("1496251") ? this.$1 = function(b) {
                var d = function(a) {
                    return b(c.$2(a))
                };
                a(d)
            }
            : this.$1 = a
        }
        var c = a.prototype;
        c.addOrUpdatePlace = function(a) {
            var c = this
              , d = a.coreVideoPlayerMetaData
              , e = a.fullscreenController
              , f = a.implementations
              , h = a.injectCoreVideoStatesRef
              , i = a.isFullscreen
              , j = a.portablePlaceContainer
              , k = a.portablePlaceID
              , l = a.portablePlaceMetaData
              , m = a.portableVideoID
              , n = a.renderComponents
              , o = a.renderPlaceholder
              , p = a.trackingDataEncrypted
              , q = a.trackingNodes
              , r = a.viewportMarginsForViewability;
            this.$1(function(a) {
                var s, t = c.getPortableVideoState(a, m), u = (s = a.places.get(k)) != null ? s : null;
                s = u != null && !g(u) ? u.sequenceNumber : a.placesSequenceNumberNext;
                var v = s === a.placesSequenceNumberNext ? a.placesSequenceNumberNext + 1 : a.placesSequenceNumberNext
                  , w = l || {}
                  , x = a.places;
                if (m != null) {
                    var y = c.getPlacesBorrowingThisVideo(x, m);
                    y.forEach(function(a) {
                        g(a) && a.portablePlaceID !== (u == null ? void 0 : u.portablePlaceID) && (x = b("removeFromMap")(x, a.portablePlaceID))
                    })
                }
                x = b("addToMap")(x, k, babelHelpers["extends"]({}, u, {
                    coreVideoPlayerMetaData: d,
                    currentVideoID: m,
                    fullscreenController: e,
                    implementations: f,
                    injectCoreVideoStatesRef: h,
                    isFullscreen: i,
                    portablePlaceContainer: j,
                    portablePlaceID: k,
                    portablePlaceMetaData: w,
                    renderComponents: n,
                    renderPlaceholder: (y = o) != null ? y : null,
                    sequenceNumber: s,
                    trackingDataEncrypted: p,
                    trackingNodes: q,
                    unlinkedAtTimestampMs: null,
                    viewportMarginsForViewability: r
                }));
                w = u !== null && m === null ? u.currentVideoID : null;
                y = a.videos;
                if (w !== null) {
                    s = c.getPlacesBorrowingThisVideo(x, w);
                    s = 0 === s.length;
                    s && (y = b("removeFromMap")(a.videos, w))
                }
                if (m !== null) {
                    s = c.updatePreviousPlaceMetaDataInfoForVideo({
                        existingVideoState: t,
                        places: a.places,
                        setPreferredPlaceForVideo: !1,
                        updatedPlaces: x,
                        videoID: m
                    });
                    w = s.nextPreviousPlaceMetaData;
                    y = b("addToMap")(y, m, t ? babelHelpers["extends"]({}, t, {
                        portableVideoID: m,
                        previousPlaceMetaData: w
                    }) : {
                        portableVideoID: m,
                        preferredPlaceID: null,
                        previousPlaceMetaData: w
                    })
                }
                return x === a.places && v === a.placesSequenceNumberNext && y === a.videos ? a : babelHelpers["extends"]({}, a, {
                    places: x,
                    placesSequenceNumberNext: v,
                    videos: y
                })
            })
        }
        ;
        c.removePlace = function(a) {
            var c = this
              , d = a.portablePlaceID
              , e = Date.now();
            this.$1(function(a) {
                var f;
                f = (f = a.places.get(d)) != null ? f : null;
                var g = f !== null ? f.currentVideoID : null;
                if (f === null)
                    return a;
                var h = a.places
                  , i = g !== null ? c.skipUnlinkedPlaces(c.getPlacesBorrowingThisVideo(h, g)).filter(function(a) {
                    return a.portablePlaceID !== d
                }) : [];
                g !== null && i.length === 0 && b("gkx")("1496251") ? h = b("addToMap")(h, d, babelHelpers["extends"]({}, f, {
                    unlinkedAtTimestampMs: e
                })) : h = b("removeFromMap")(h, d);
                i = a.videos;
                if (g !== null) {
                    f = c.getPlacesBorrowingThisVideo(h, g);
                    f = 0 === f.length;
                    if (f)
                        i = b("removeFromMap")(i, g);
                    else {
                        f = c.getPortableVideoState(a, g);
                        var j = c.updatePreviousPlaceMetaDataInfoForVideo({
                            existingVideoState: f,
                            places: a.places,
                            setPreferredPlaceForVideo: !1,
                            updatedPlaces: h,
                            videoID: g
                        })
                          , k = j.nextPreviousPlaceMetaData;
                        j = j.shouldUpdatePreviousPlaceMetaDataForVideo;
                        f != null && j && (i = b("addToMap")(i, g, babelHelpers["extends"]({}, f, {
                            portableVideoID: g,
                            previousPlaceMetaData: k
                        })))
                    }
                }
                return h === a.places && i === a.videos ? a : babelHelpers["extends"]({}, a, {
                    places: h,
                    videos: i
                })
            })
        }
        ;
        c.setPreferredPlaceForVideo = function(a) {
            var c = this
              , d = a.portablePlaceID
              , e = a.portableVideoID;
            this.$1(function(a) {
                var f = c.getPortableVideoState(a, e)
                  , g = d != null ? a.places.get(d) : null
                  , h = c.updatePreviousPlaceMetaDataInfoForVideo({
                    existingPlaceStateForSetPreferredPlaceForVideo: g,
                    existingVideoState: f,
                    places: a.places,
                    preferredPlaceID: d,
                    setPreferredPlaceForVideo: !0,
                    updatedPlaces: a.places,
                    videoID: e
                });
                h = h.nextPreviousPlaceMetaData;
                f = f != null ? b("addToMap")(a.videos, e, babelHelpers["extends"]({}, f, {
                    preferredPlaceID: g != null && d != null ? d : null,
                    previousPlaceMetaData: h
                })) : a.videos;
                return f === a.videos ? a : babelHelpers["extends"]({}, a, {
                    videos: f
                })
            })
        }
        ;
        c.getPlacesBorrowingThisVideo = function(a, b) {
            var c = [];
            a.forEach(function(a) {
                a.currentVideoID === b && c.push(a)
            });
            return c
        }
        ;
        c.skipUnlinkedPlaces = function(a) {
            return a.filter(function(a) {
                return !g(a)
            })
        }
        ;
        c.selectCurrentPlaceFromThesePlaces = function(a, b) {
            var c;
            a = a.slice().sort(function(a, b) {
                return a.sequenceNumber - b.sequenceNumber
            });
            c = (c = a.find(function(a) {
                return a.portablePlaceID === b
            })) != null ? c : null;
            a = a.length > 0 ? a[a.length - 1] : null;
            return (c = (c = c) != null ? c : a) != null ? c : null
        }
        ;
        c.getCurrentPlaceStateForVideo = function(a, b) {
            var c = this.getPortableVideoState(a, b);
            if (c != null && b != null) {
                a = this.selectCurrentPlaceFromThesePlaces(this.skipUnlinkedPlaces(this.getPlacesBorrowingThisVideo(a.places, b)), c.preferredPlaceID);
                return (b = a) != null ? b : null
            } else
                return null
        }
        ;
        c.getPortableVideoState = function(a, b) {
            if (b != null) {
                a = a.videos.get(b);
                return (b = a) != null ? b : null
            }
            return null
        }
        ;
        c.updatePreviousPlaceMetaDataInfoForVideo = function(a) {
            var b = this
              , c = a.existingPlaceStateForSetPreferredPlaceForVideo
              , d = a.existingVideoState
              , e = a.places
              , f = a.preferredPlaceID
              , g = a.setPreferredPlaceForVideo
              , h = a.updatedPlaces
              , i = a.videoID;
            a = function(a, c) {
                return b.selectCurrentPlaceFromThesePlaces(b.skipUnlinkedPlaces(b.getPlacesBorrowingThisVideo(a, i)), (a = c) != null ? a : null)
            }
            ;
            var j = a(e, d == null ? void 0 : d.preferredPlaceID);
            g ? g = c != null ? a(e, f) : null : g = a(h, d == null ? void 0 : d.preferredPlaceID);
            e = j != null && (j == null ? void 0 : j.portablePlaceID) !== ((c = g) == null ? void 0 : c.portablePlaceID);
            return {
                nextPreviousPlaceMetaData: e && j != null ? j.portablePlaceMetaData : (f = d == null ? void 0 : d.previousPlaceMetaData) != null ? f : null,
                shouldUpdatePreviousPlaceMetaDataForVideo: e
            }
        }
        ;
        c.collectGarbage = function() {
            this.$1(function(a) {
                return a
            })
        }
        ;
        c.$2 = function(a) {
            var c = Date.now()
              , d = new Set()
              , e = a.places;
            a.places.forEach(function(a) {
                a.unlinkedAtTimestampMs !== null && c - a.unlinkedAtTimestampMs >= h ? e = b("removeFromMap")(e, a.portablePlaceID) : a.currentVideoID !== null && d.add(a.currentVideoID)
            });
            var f = a.videos;
            a.videos.forEach(function(a) {
                d.has(a.portableVideoID) || (f = b("removeFromMap")(f, a.portableVideoID))
            });
            return e === a.places && f === a.videos ? a : babelHelpers["extends"]({}, a, {
                places: e,
                videos: f
            })
        }
        ;
        return a
    }();
    f.GlobalVideoPortsManager = c
}
), null);
__d("GlobalVideoPortsPortalerErrorBoundary.react", ["FBLogger", "React", "getErrorSafe", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                error: null
            },
            d.suppressReactDefaultErrorLogging = b("gkx")("1531709"),
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getDerivedStateFromError = function(a) {
            return {
                error: b("getErrorSafe")(a)
            }
        }
        ;
        var d = c.prototype;
        d.componentDidCatch = function(a, c) {
            c = c.componentStack;
            a = b("getErrorSafe")(a);
            a.componentStack = c;
            c = this.props;
            var d = c.description
              , e = c.onError;
            c = c.project;
            var f = "ErrorBoundary caught an Error";
            d != null && (f = f + " (" + d + ")");
            b("gkx")("1531709") || b("FBLogger")(c == null ? "comet_video_player" : c).catching(a).warn(f);
            e != null && e(a)
        }
        ;
        d.render = function() {
            var a = this.props
              , b = a.children;
            a = a.fallback;
            var c = this.state.error;
            return c ? typeof a === "function" ? a(b) : a : b
        }
        ;
        return c
    }(a.PureComponent);
    e.exports = c
}
), null);
__d("GlobalVideoPortsPortaler.react", ["CoreVideoPlayerFitParentContainer.react", "GlobalVideoPortsPortalerErrorBoundary.react", "GlobalVideoPortsRenderers.react", "React", "ReactDOMComet", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.globalVideoPortsManager
          , d = a.globalVideoPortsState
          , e = a.thisVideoID;
        a = g.useState(function() {
            return b("CoreVideoPlayerFitParentContainer.react").createFitParentContainerDiv({
                debugRole: null
            })
        });
        var f = a[0]
          , h = g.useRef(null)
          , i = g.useRef(null)
          , j = (a = d.videos.get(e)) != null ? a : null
          , k = c.getPlacesBorrowingThisVideo(d.places, e);
        if (k.length <= 0)
            return null;
        a = c.selectCurrentPlaceFromThesePlaces(k, j ? j.preferredPlaceID : null);
        var l = c.selectCurrentPlaceFromThesePlaces(c.skipUnlinkedPlaces(k), j ? j.preferredPlaceID : null);
        d = function(a) {
            b("gkx")("1531709") && (i.current = a),
            k.forEach(function(b) {
                b = b.injectCoreVideoStatesRef.current;
                b && b(h.current, a)
            })
        }
        ;
        c = function(a) {
            return b("gkx")("1531709") ? null : a != null ? a : null
        }
        ;
        var m = function(a) {
            h.current = a,
            b("gkx")("1531709") && k.forEach(function(a) {
                a = a.injectCoreVideoStatesRef.current;
                a && a(h.current, i.current)
            })
        };
        return g.jsxs(g.Fragment, {
            children: [b("ReactDOMComet").createPortal(a ? g.jsx(b("GlobalVideoPortsPortalerErrorBoundary.react"), {
                description: "GlobalVideoPortsPortaler",
                fallback: c,
                onError: m,
                children: g.jsx(b("GlobalVideoPortsRenderers.react").GlobalVideoPortsPlayerRenderer, {
                    coreVideoPlayerMetaData: a.coreVideoPlayerMetaData,
                    currentPlaceID: a.portablePlaceID,
                    currentVideoID: e,
                    fullscreenController: a.fullscreenController,
                    implementations: a.implementations,
                    isFullscreen: a.isFullscreen,
                    onCoreVideoStatesChanged: d,
                    previousPlaceMetaData: (c = j == null ? void 0 : j.previousPlaceMetaData) != null ? c : null,
                    trackingDataEncrypted: a.trackingDataEncrypted,
                    trackingNodes: a.trackingNodes,
                    viewportMarginsForViewability: a.viewportMarginsForViewability
                })
            }) : null, f), k.map(function(a) {
                var c;
                return b("ReactDOMComet").createPortal(a.portablePlaceID === (l == null ? void 0 : l.portablePlaceID) ? g.jsx(b("CoreVideoPlayerFitParentContainer.react").CoreVideoPlayerFitParentDOMContainer, {
                    debugRole: null,
                    domElement: f
                }) : g.jsx(b("GlobalVideoPortsRenderers.react").GlobalVideoPortsPlaceholderRenderer, {
                    currentPlaceID: (c = l == null ? void 0 : l.portablePlaceID) != null ? c : null,
                    currentVideoID: e,
                    originalHeight: a.coreVideoPlayerMetaData.originalHeight,
                    originalWidth: a.coreVideoPlayerMetaData.originalWidth,
                    previousPlaceMetaData: (c = j == null ? void 0 : j.previousPlaceMetaData) != null ? c : null,
                    renderPlaceholder: a.renderPlaceholder,
                    thisPlaceID: a.portablePlaceID
                }), a.portablePlaceContainer)
            })]
        })
    }
}
), null);
__d("GlobalVideoPortsImpl.react", ["CometErrorBoundary.react", "GlobalVideoPortsContexts", "GlobalVideoPortsManager", "GlobalVideoPortsPortaler.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.setGlobalVideoPortsManager;
        g.useEffect(function() {
            var a = function(a) {
                return new (b("GlobalVideoPortsManager").GlobalVideoPortsManager)(a)
            };
            c(a)
        }, [c]);
        var d = []
          , e = b("GlobalVideoPortsContexts").useGlobalVideoPortsManager()
          , f = b("GlobalVideoPortsContexts").useGlobalVideoPortsState();
        e && f && f.videos.forEach(function(a, c) {
            d.push(g.jsx(b("CometErrorBoundary.react"), {
                children: g.jsx(b("GlobalVideoPortsPortaler.react"), {
                    globalVideoPortsManager: e,
                    globalVideoPortsState: f,
                    thisVideoID: c
                })
            }, c))
        });
        return g.jsx(g.Fragment, {
            children: d
        })
    }
}
), null);
__d("useCometWatchBadgeCount", ["CometRelay", "gkx", "useTopTabBadgeCount", "useCometWatchBadgeCountQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    function a() {
        var a = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("useCometWatchBadgeCountQuery.graphql"), {});
        return b("useTopTabBadgeCount")(a == null ? void 0 : a.viewer)
    }
    c = b("gkx")("1273809") ? a : function() {
        return 0
    }
    ;
    e.exports = c
}
), null);
__d("CometWatchBadgeCount.react", ["CometPlaceholder.react", "CometTopNavTabBadge.react", "React", "useCometWatchBadgeCount"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h(a) {
        var c = b("useCometWatchBadgeCount")();
        return g.jsx(b("CometTopNavTabBadge.react"), babelHelpers["extends"]({}, a, {
            value: c
        }))
    }
    function a(a) {
        return g.jsx(b("CometPlaceholder.react"), {
            fallback: null,
            children: g.jsx(h, babelHelpers["extends"]({}, a))
        })
    }
}
), null);
__d("useSubscriptionValue", ["React"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = a.getCurrentValue
          , c = a.subscribe;
        a = g.useState(function() {
            return b()
        });
        var d = a[0]
          , e = a[1]
          , f = g.useCallback(function() {
            e(b)
        }, [b]);
        a = g.useState(function() {
            return b
        });
        var h = a[0];
        a = a[1];
        h !== b && (a(function() {
            return b
        }),
        f());
        g.useEffect(function() {
            var a = !1
              , b = function() {
                a || f()
            }
              , d = c(b);
            f();
            return function() {
                a = !0,
                d()
            }
        }, [f, c]);
        return d
    }
}
), null);
__d("XContentRefControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/business/content_ref/", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("ContentRefComet", ["XContentRefControllerRouteBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    f.get = a;
    function a(a, c) {
        c === void 0 && (c = "DEFAULT");
        return b("XContentRefControllerRouteBuilder").buildURL({
            callsite: c,
            name: a
        })
    }
}
), null);
__d("useContextRef", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, b) {
        b = g.useContext(b);
        var c = b.current;
        g.useEffect(function() {
            if (c.has(a)) {
                var b = c.get(a);
                c.set(a, b + 1)
            } else
                c.set(a, 1);
            return function() {
                var b = c.get(a);
                b !== void 0 && (b === 1 ? c["delete"](a) : c.set(a, b - 1))
            }
        }, [c, a])
    }
}
), null);
__d("CometScrollableArea.react", ["BaseScrollableArea.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.horizontal;
        d = d === void 0 ? !0 : d;
        var e = a.id
          , f = a.vertical;
        f = f === void 0 ? !0 : f;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["horizontal", "id", "vertical"]);
        return g.jsx(b("BaseScrollableArea.react"), babelHelpers["extends"]({}, a, {
            horizontal: d,
            id: e,
            ref: c,
            vertical: f
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("CometComposerIneligibilityContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(new Set());
    e.exports = c
}
), null);
__d("CometComposerLoggerDispatcherContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("emptyFunction"));
    e.exports = c
}
), null);
__d("CometComposerPluginsDispatchContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("emptyFunction"));
    e.exports = c
}
), null);
__d("CometComposerViewStateAlteredContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        current: new Map()
    });
    e.exports = c
}
), null);
__d("CometComposerViewStateContext", ["React", "createEmptyCometComposerViewState"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("createEmptyCometComposerViewState")());
    e.exports = c
}
), null);
__d("CometComposerViewStateDispatcherContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("emptyFunction"));
    e.exports = c
}
), null);
__d("CometComposerViewStateReducersContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        current: new Map()
    });
    e.exports = c
}
), null);
__d("useCometComposerDecorator", ["CometComposerPluginsDispatchContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("CometComposerPluginsDispatchContext"));
        g.useEffect(function() {
            c({
                decorator: a,
                type: "install_decorator"
            });
            return function() {
                return c({
                    decorator: a,
                    type: "uninstall_decorator"
                })
            }
        }, [a, c])
    }
}
), null);
__d("useComposerViewStateDispatcher", ["CometComposerViewStateDispatcherContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometComposerViewStateDispatcherContext"))
    }
}
), null);
__d("useComposerViewStateReducer", ["CometComposerViewStateAlteredContext", "CometComposerViewStateReducersContext", "useContextRef"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        var d = function(a, b) {
            return !1
        };
        b("useContextRef")((c = c) != null ? c : d, b("CometComposerViewStateAlteredContext"));
        return b("useContextRef")(a, b("CometComposerViewStateReducersContext"))
    }
}
), null);
__d("withSomeContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, b, c) {
        var d = g.memo(a);
        function e(a, e) {
            var f = g.useContext(b);
            f = c(f, a);
            return g.jsx(d, babelHelpers["extends"]({}, a, f, {
                ref: e
            }))
        }
        return g.forwardRef(e)
    }
}
), null);
__d("withComposerViewStatePart", ["CometComposerViewStateContext", "React", "withSomeContext"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    b("React");
    function a(a, c) {
        return b("withSomeContext")(a, b("CometComposerViewStateContext"), c)
    }
}
), null);
__d("getPlainTextFromDeferredDraftEditorState", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        switch (a.__type) {
        case "plain-text":
            return a.text;
        case "editor-state-based":
            return a.draftEditorState.getCurrentContent().getPlainText();
        default:
            return a
        }
    }
}
), null);
__d("CometComposerTaggerPluginTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        BC_SUPPORT: "BC_SUPPORT",
        BRANDED_CONTENT: "BRANDED_CONTENT",
        DRAFT_FOR: "DRAFT_FOR",
        EVENT: "EVENT",
        GET_MESSAGES: "GET_MESSAGES",
        GET_WHATSAPP_MESSAGES: "GET_WHATSAPP_MESSAGES",
        GROUP_VOTER_PLEDGE_DRIVE: "GROUP_VOTER_PLEDGE_DRIVE",
        LOCAL_ALERT: "LOCAL_ALERT",
        LOCATION: "LOCATION",
        MARKDOWN: "MARKDOWN",
        MEDIA_EDIT: "MEDIA_EDIT",
        MINUTIAE: "MINUTIAE",
        PRODUCT_TAG: "PRODUCT_TAG",
        SCHEDULE_POST: "SCHEDULE_POST",
        TAG: "TAG",
        WORK_AMA: "WORK_AMA",
        WORK_HASHTAG_SUGGESTIONS: "WORK_HASHTAG_SUGGESTIONS"
    });
    b = a;
    e.exports = b
}
), null);
__d("createCometComposerMentionsEntity", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        return c.createEntity("MENTION", "SEGMENTED", {
            id: a
        })
    }
}
), null);
__d("CometMentionsA11yContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(function() {});
    e.exports = c
}
), null);
__d("CometSearchTypeaheadBaseInMemoryMapDataCache", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Map()
        }
        var b = a.prototype;
        b.clear = function() {
            this.$1.clear()
        }
        ;
        b.get = function(a) {
            return this.$1.get(a)
        }
        ;
        b.has = function(a) {
            return this.$1.has(a)
        }
        ;
        b.remove = function(a) {
            this.$1["delete"](a)
        }
        ;
        b.set = function(a, b) {
            this.$1.set(a, b)
        }
        ;
        b.values = function() {
            return Array.from(this.$1.values())
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometSearchTypeaheadBaseNetworkDataSource", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a,
            this.$2 = b
        }
        var b = a.prototype;
        b.fetchNetwork = function(a) {
            var b = this;
            return this.$1.fetch(a).then(function(c) {
                var d = c.requestQueryVariables;
                c = c.response;
                return {
                    entries: b.$2(c, d),
                    params: a
                }
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometSearchTypeaheadBaseNetworkCacheDataSource", ["CometSearchTypeaheadBaseNetworkDataSource"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d) {
            d = d.normalizeFunc;
            this.$1 = new (b("CometSearchTypeaheadBaseNetworkDataSource"))(a,d);
            this.$2 = c
        }
        var c = a.prototype;
        c.fetchCache = function(a) {
            var b = a.query;
            b = this.$2.match(b);
            return {
                entries: b,
                params: a
            }
        }
        ;
        c.fetchNetwork = function(a) {
            var b = this
              , c = a.query;
            return this.$1.fetchNetwork(a).then(function(d) {
                d = d.entries;
                d != null && b.$2.add(d, c);
                return {
                    entries: b.$2.match(c),
                    params: a
                }
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("cometSearchTypeaheadBaseLabelSuffixBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        a = a.getLabel().trimLeft().toLowerCase();
        return b == null || !a.startsWith(b) ? "" : a.slice(b.length)
    }
}
), null);
__d("useCometSearchTypeaheadBaseDataSourceFetchResolverCache", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = a.dataSource;
        return g.useCallback(function(a) {
            var c = a.onResolvePayload;
            a = a.requestParams;
            var d = a.perfTraceAPI;
            a = b.fetchCache(a);
            d && d.addMarkerPoint("cachedResponse", "AppTiming");
            c(a);
            return a
        }, [b])
    }
}
), null);
__d("useCometSearchTypeaheadBaseDataSourceFetchResolverNetwork", ["React", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.dataSource;
        a = g.useState(!1);
        var d = a[0]
          , e = a[1]
          , f = g.useRef(0)
          , h = g.useRef(!1);
        g.useEffect(function() {
            return function() {
                h.current = !0
            }
        }, []);
        a = g.useCallback(function(a) {
            var d = a.onResolvePayload;
            a = a.requestParams;
            f.current++;
            var g = f.current
              , i = a.perfTraceAPI;
            e(!0);
            b("promiseDone")(c.fetchNetwork(a).then(function(a) {
                !h.current && g === f.current && (d(a),
                i && i.addMarkerPoint("networkResponse", "AppTiming"))
            })["finally"](function() {
                !h.current && g === f.current && (f.current = 0,
                e(!1))
            }))
        }, [c]);
        return [{
            isLoading: d
        }, a]
    }
}
), null);
__d("useCometSearchTypeaheadBaseDataSourceFetchResolver", ["React", "debounce", "gkx", "recoverableViolation", "useCometSearchTypeaheadBaseDataSourceFetchResolverCache", "useCometSearchTypeaheadBaseDataSourceFetchResolverNetwork", "requireCond", "cr:1288372"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = 8;
    function a(a, c) {
        var d = a.dataSource
          , e = a.dataSourceFetchConfigParams;
        e = e === void 0 ? {} : e;
        var f = e.renderLimit
          , i = f === void 0 ? h : f;
        f = e.shouldDebounceNetwork;
        var j = f === void 0 ? !0 : f
          , k = a.onResolvePayload
          , l = g.useRef(b("debounce")(function(a) {
            return a()
        }))
          , m = b("useCometSearchTypeaheadBaseDataSourceFetchResolverCache")({
            dataSource: d
        });
        e = b("useCometSearchTypeaheadBaseDataSourceFetchResolverNetwork")({
            dataSource: d
        });
        f = e[0].isLoading;
        var n = e[1];
        function o() {
            var a = !1;
            function e(c, d) {
                var e = d.isTraceComplete;
                d = d.source;
                try {
                    a || k(c, {
                        isTraceComplete: e,
                        source: d
                    })
                } catch (c) {
                    a || b("recoverableViolation")("Failed to resolve fetched payload", "search")
                }
            }
            function f(a) {
                var c = a.requestParams
                  , f = a.source;
                if (typeof d.fetchCache === "function" && ["all", "cache"].includes(f)) {
                    a = m({
                        onResolvePayload: function(a) {
                            e(a, {
                                isTraceComplete: a.entries.length >= i,
                                source: "cache"
                            });
                            if (b("gkx")("1265894")) {
                                var c = f === "all" ? ["all", "cache"] : ["cache"];
                                b("cr:1288372") && b("cr:1288372")(c, a)
                            }
                        },
                        requestParams: c
                    });
                    a = a;
                    a = a.entries;
                    if (a.length >= i)
                        return
                }
                if (typeof d.fetchNetwork === "function" && ["all", "network"].includes(f)) {
                    var g = function() {
                        return n({
                            onResolvePayload: function(a) {
                                e(a, {
                                    isTraceComplete: !0,
                                    source: a.entries.length > 0 ? "network" : "network-no-results"
                                });
                                if (b("gkx")("1265894")) {
                                    var c = f === "all" ? ["all", "network"] : ["network"];
                                    b("cr:1288372") && b("cr:1288372")(c, a)
                                }
                            },
                            requestParams: c
                        })
                    };
                    Boolean(j) ? l.current(function() {
                        return g()
                    }) : g()
                }
            }
            c != null && f(c);
            var g = l.current;
            return function() {
                a = !0,
                g.reset()
            }
        }
        g.useEffect(o, [c]);
        return [{
            isLoading: f
        }]
    }
}
), null);
__d("useCometSearchTypeaheadBaseDataSourceFetch", ["React", "recoverableViolation", "useCometSearchTypeaheadBaseDataSourceFetchResolver"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useState(null)
          , d = c[0]
          , e = c[1];
        c = b("useCometSearchTypeaheadBaseDataSourceFetchResolver")(a, d);
        a = c[0].isLoading;
        var f = g.useCallback(function(a, b) {
            b === void 0 && (b = "all"),
            e({
                requestParams: a,
                source: b
            })
        }, []);
        c = g.useCallback(function(a) {
            if (d == null) {
                b("recoverableViolation")("Refetch cannot be called with undefined `fetchParams`", "search");
                return
            }
            var c = d.requestParams
              , e = c.loggingEventTrace;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["loggingEventTrace"]);
            e = babelHelpers["extends"]({
                loggingEventTrace: babelHelpers["extends"]({}, e, {
                    sequenceID: String(Date.now())
                })
            }, c);
            f(e, a)
        }, [f, d]);
        return [{
            isLoading: a,
            source: (a = d == null ? void 0 : d.source) != null ? a : "all"
        }, f, c]
    }
}
), null);
__d("cometSearchTypeaheadBaseQueryMatchBuilder", ["TokenizeUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = a.query;
        return function(a) {
            return b("TokenizeUtil").isQueryMatch(c, a.getLabel())
        }
    }
}
), null);
__d("cometSearchTypeaheadBaseStartsWithMatchBuilder", ["escapeRegex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.query;
        var c = new RegExp("^" + b("escapeRegex")(a),"i");
        return function(a) {
            return c.test((a = a.getLabel()) != null ? a : "")
        }
    }
}
), null);
__d("cometSearchTypeaheadBaseFetchPayloadDecorate", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        b === void 0 && (b = []);
        var c = a;
        b.forEach(function(a) {
            c = a(c)
        });
        return c
    }
}
), null);
__d("cometSearchDataEntryLabelKeyBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return a.getLabel().trimLeft().toLowerCase()
    }
}
), null);
__d("CometSearchTypeaheadBaseDataCacheProvider", ["cometSearchDataEntryLabelKeyBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var c = a.cache
              , d = a.matchBuilder
              , e = a.mergeBuilder;
            a = a.keyBuilder;
            a = a === void 0 ? b("cometSearchDataEntryLabelKeyBuilder") : a;
            this.$1 = c;
            this.$2 = d;
            this.$3 = e;
            this.$4 = a
        }
        var c = a.prototype;
        c.add = function(a) {
            var b = this;
            a.forEach(function(a) {
                var c = b.$4(a)
                  , d = b.$1.get(c);
                b.$1.set(c, d != null && b.$3 != null ? b.$3(a, d) : a)
            })
        }
        ;
        c.clear = function() {
            this.$1.clear()
        }
        ;
        c.remove = function(a) {
            a = this.$4(a);
            this.$1.remove(a)
        }
        ;
        c.match = function(a) {
            var b = this.$2({
                query: a
            });
            return this.$1.values().filter(function(a) {
                return b(a)
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometSearchTypeaheadBaseDataProvider", ["CometRelay"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var b = a.query
              , c = a.queryVariablesBuilder;
            a = a.relayEnvironment;
            this.$1 = b;
            this.$2 = c;
            this.$3 = a
        }
        var c = a.prototype;
        c.fetch = function(a) {
            var c = this.$2.build()
              , d = c(a);
            return b("CometRelay").fetchQuery(this.$3, this.$1, d).toPromise().then(function(a) {
                return {
                    requestQueryVariables: d,
                    response: a
                }
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = null,
            this.$2 = null,
            this.$3 = a
        }
        var b = a.prototype;
        b.build = function() {
            return this.$3(this.$1, this.$2)
        }
        ;
        b.setComputedVariables = function(a) {
            this.$2 = a;
            return this
        }
        ;
        b.setDefaultVariables = function(a) {
            this.$1 = a;
            return this
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("cometSearchCacheEntryLabelKeyBuilder", ["cometSearchDataEntryLabelKeyBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return b("cometSearchDataEntryLabelKeyBuilder")(a.entry)
    }
}
), null);
__d("cometSearchTypeaheadBaseDedupEntries", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        var d = new Set(a.map(function(a) {
            return c(a)
        }));
        b = b.filter(function(a) {
            return !d.has(c(a))
        });
        return [].concat(a, b)
    }
}
), null);
__d("CometSearchTypeaheadBaseQueryDataCacheProvider", ["CometSearchTypeaheadBaseInMemoryMapDataCache", "cometSearchCacheEntryLabelKeyBuilder", "cometSearchTypeaheadBaseDedupEntries", "cometSearchTypeaheadBaseLabelSuffixBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            a = a === void 0 ? {} : a;
            var c = a.dedupKeyBuilder;
            a = a.suffixBuilder;
            this.$1 = new (b("CometSearchTypeaheadBaseInMemoryMapDataCache"))();
            this.$2 = (c = c) != null ? c : b("cometSearchCacheEntryLabelKeyBuilder");
            this.$3 = (c = a) != null ? c : b("cometSearchTypeaheadBaseLabelSuffixBuilder")
        }
        var c = a.prototype;
        c.add = function(a, c) {
            c === void 0 && (c = "");
            c = ((c = c) != null ? c : "").trimLeft().toLowerCase();
            a = this.$4(a, c);
            if (this.$1.has(c)) {
                var d = this.$1.get(c) || [];
                d = b("cometSearchTypeaheadBaseDedupEntries")(d, a, this.$2);
                this.$1.set(c, d);
                return
            }
            d = this.$5(c);
            var e = d.prefix;
            d = d.suffix;
            if (e.length === 0) {
                this.$1.set(c, a);
                return
            }
            if (e.length > 0) {
                e = this.$6(e, d);
                d = b("cometSearchTypeaheadBaseDedupEntries")(e, a, this.$2);
                this.$1.set(c, d)
            }
        }
        ;
        c.clear = function() {
            this.$1.clear()
        }
        ;
        c.match = function(a) {
            a = a.trim().toLowerCase();
            var b = this.$1.get(a);
            if (b != null)
                return b.map(function(a) {
                    a = a.entry;
                    return a
                });
            b = this.$5(a);
            var c = b.prefix;
            b = b.suffix;
            if (c.length > 0) {
                c = this.$6(c, b);
                this.$1.set(a, c);
                return c.map(function(a) {
                    a = a.entry;
                    return a
                })
            }
            return []
        }
        ;
        c.remove = function(a) {}
        ;
        c.$5 = function(a) {
            a = a;
            var b = "";
            while (a.length > 0) {
                var c = a.length - 1;
                b = a[c] + b;
                a = a.substring(0, c);
                if (this.$1.has(a))
                    break
            }
            return {
                prefix: a,
                suffix: b
            }
        }
        ;
        c.$6 = function(a, b) {
            a = this.$1.get(a) || [];
            return a.map(function(a) {
                var c = a.entry;
                a = a.suffix;
                if (!a.startsWith(b))
                    return null;
                a = a.substring(b.length, a.length);
                return {
                    entry: c,
                    suffix: a
                }
            }).filter(Boolean)
        }
        ;
        c.$4 = function(a, b) {
            var c = this;
            return a.map(function(a) {
                return {
                    entry: a,
                    suffix: c.$3(a, b)
                }
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("cometSearchDataEntryBaseKeyBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return a.getKey().trimLeft().toLowerCase()
    }
}
), null);
__d("cometSearchCacheEntryBaseKeyBuilder", ["cometSearchDataEntryBaseKeyBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return b("cometSearchDataEntryBaseKeyBuilder")(a.entry)
    }
}
), null);
__d("CometSearchTypeaheadBaseProgressGlimmer.react", ["CometProgressRingIndeterminate.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.jsx("div", {
            className: "taijpn5t pi1r6xr4 buofh1pr j83agx80 bp9cbjyn",
            children: g.jsx(b("CometProgressRingIndeterminate.react"), {
                color: "disabled",
                size: 24
            })
        })
    }
}
), null);
__d("cometSearchTypeaheadBaseKeyboardNavigationUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.moveDown = a;
    f.moveUp = b;
    function a(a, b, c) {
        if (a.length === 0) {
            c(null);
            return
        }
        var d = b != null ? a.findIndex(function(a) {
            return a.getKey() === b
        }) + 1 : 0;
        d === a.length && (d = 0);
        c(a[d])
    }
    function b(a, b, c) {
        if (a.length === 0) {
            c(null);
            return
        }
        var d = b != null ? a.findIndex(function(a) {
            return a.getKey() === b
        }) - 1 : a.length - 1;
        d === -1 && (d = a.length - 1);
        c(a[d])
    }
}
), null);
__d("CometSearchInternalTypeaheadFetchContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        fetch: b("emptyFunction"),
        isLoading: !1,
        refetch: b("emptyFunction"),
        source: "all"
    });
    e.exports = c
}
), null);
__d("useCometSearchInternalTypeaheadFetch", ["CometSearchInternalTypeaheadFetchContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometSearchInternalTypeaheadFetchContext"))
    }
}
), null);
__d("useSearchCometTypeaheadBaseLayoutStrategyARIAProps", ["React", "useCometSearchInternalTypeaheadFetch", "useCometUniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.activeEntries
          , d = a.helperText
          , e = a.highlightedEntry
          , f = a.inputLabel
          , h = f === void 0 ? "" : f
          , i = a.isOpened
          , j = a.viewLabel
          , k = b("useCometUniqueID")();
        f = b("useCometSearchInternalTypeaheadFetch")();
        var l = f.isLoading
          , m = e != null ? {
            "aria-activedescendant": e.getKey()
        } : {}
          , n = i ? {
            "aria-controls": k
        } : null
          , o = b("useCometUniqueID")()
          , p = d != null && String(d).length > 0 ? {
            "aria-describedby": o
        } : null;
        return g.useMemo(function() {
            return {
                ariaDescribedByProps: {
                    id: o
                },
                ariaInputProps: babelHelpers["extends"]({}, m, n, p, {
                    "aria-autocomplete": "list",
                    "aria-expanded": c.length > 0 && i,
                    "aria-label": h,
                    role: "combobox"
                }),
                ariaViewProps: {
                    "aria-busy": l,
                    "aria-label": j,
                    id: k,
                    role: "listbox"
                }
            }
        }, [o, m, n, p, c.length, i, h, l, k, j])
    }
}
), null);
__d("CometSearchTypeaheadBaseViewItem.react", ["BaseListItem.react", "CometPressable.react", "React", "emptyFunction", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        roundedBorders: {
            borderTopStartRadius: "ue3kfks5",
            borderTopEndRadius: "pw54ja7n",
            borderBottomEndRadius: "uo3d90p7",
            borderBottomStartRadius: "l82x9zwi"
        }
    }, j = {
        contentRoot: {
            alignItems: "bp9cbjyn",
            cursor: "nhd2j8a9",
            display: "j83agx80",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            position: "l9j0dhe7",
            ":hover": {
                backgroundColor: "dwzzwef6"
            }
        },
        contentRootActive: {
            backgroundColor: "rnr61an3"
        },
        contentRootDisabled: {
            bottom: "i09qtzwb",
            cursor: "rj84mg9z",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4"
        },
        itemIcon: {
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv"
        },
        itemRoot: {
            color: "oo9gr5id",
            flexGrow: "buofh1pr",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            paddingTop: "cxgpxx05",
            paddingEnd: "dflh9lhu",
            paddingBottom: "sj5x9vvc",
            paddingStart: "scb9dxdr"
        },
        pressable: {
            width: "k4urcfbm"
        },
        root: {
            width: "k4urcfbm"
        }
    };
    function a(a) {
        var c = a.children
          , d = a.entry
          , e = a.isActive
          , f = a.isDisabled;
        f = f === void 0 ? !1 : f;
        var k = a.itemEndContent
          , l = a.itemStartContent
          , m = a.linkProps;
        a.onHighlightEntry;
        var n = a.onPressEntry
          , o = a.onPressEntryIn
          , p = a.role
          , q = p === void 0 ? "option" : p;
        p = a.testid;
        p = a.xstyle;
        a = p === void 0 ? i.roundedBorders : p;
        p = h.useCallback(function(a) {
            n && n(d, a)
        }, [d, n]);
        var r = h.useCallback(function(a) {
            o && o(d, a)
        }, [d, o])
          , s = h.useMemo(function() {
            var a = {
                role: q
            };
            q === "option" && (a["aria-selected"] = e);
            q === "row" && (a.childAriaProps = {
                role: "gridcell"
            });
            return a
        }, [e, q])
          , t = s.childAriaProps;
        s = babelHelpers.objectWithoutPropertiesLoose(s, ["childAriaProps"]);
        return h.jsx("li", babelHelpers["extends"]({
            className: (g || (g = b("stylex")))(j.root),
            "data-testid": void 0,
            id: d.getKey()
        }, s, {
            children: h.jsxs("div", babelHelpers["extends"]({
                className: g([j.contentRoot, e && j.contentRootActive, a])
            }, t, {
                children: [h.jsx(b("CometPressable.react"), {
                    disabled: f,
                    display: "block",
                    focusable: !1,
                    label: d.getLabel(),
                    linkProps: m,
                    onPress: f ? b("emptyFunction") : p,
                    onPressIn: f ? b("emptyFunction") : r,
                    overlayDisabled: !0,
                    role: "none",
                    xstyle: j.pressable,
                    children: h.jsx(b("BaseListItem.react"), {
                        addon: l != null ? h.jsx("div", {
                            className: (g || (g = b("stylex")))(j.itemIcon),
                            children: l
                        }) : null,
                        className: g(j.itemRoot),
                        right: k,
                        children: c
                    })
                }), h.jsx("div", {
                    className: g(f ? j.contentRootDisabled : null)
                })]
            }))
        }))
    }
}
), null);
__d("CometSearchTypeaheadBaseViewList.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = a.children
          , c = a.entries
          , d = a.highlightedEntry;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "entries", "highlightedEntry"]);
        var e = d != null ? d.getKey() : null;
        return c != null && c.length > 0 ? g.jsx("ul", {
            className: "buofh1pr cbu4d94t j83agx80",
            "data-testid": void 0,
            role: "presentation",
            children: c.map(function(a, c) {
                var d = e === a.getKey();
                return b(a, d, c)
            })
        }) : null
    }
}
), null);
__d("CometSearchTypeaheadBaseViewListStrategy.react", ["CometSearchTypeaheadBaseViewList.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entries;
        a.extraViewProps;
        var d = a.highlightedEntry;
        a.onAbandonTypeahead_DO_NOT_USE;
        var e = a.viewItemStrategyRenderer
          , f = babelHelpers.objectWithoutPropertiesLoose(a, ["entries", "extraViewProps", "highlightedEntry", "onAbandonTypeahead_DO_NOT_USE", "viewItemStrategyRenderer"]);
        return g.jsx(b("CometSearchTypeaheadBaseViewList.react"), {
            entries: c,
            highlightedEntry: d,
            testid: void 0,
            children: function(a, b) {
                return g.createElement(e, babelHelpers["extends"]({}, f, {
                    entry: a,
                    isActive: b,
                    key: a.getKey()
                }))
            }
        })
    }
}
), null);
__d("cometSearchTypeaheadPayloadDecoratorAddLimit", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return function(b) {
            var c = b.entries;
            c = ((c = c) != null ? c : []).slice(0, a);
            return babelHelpers["extends"]({}, b, {
                entries: c
            })
        }
    }
}
), null);
__d("compactArray", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var b = [];
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            d != null && b.push(d)
        }
        return b
    }
}
), null);
__d("XCometActivityLogControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/{vanity}/allactivity/", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("computeAspectRatio", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        a = a != null && b != null && a !== 0 && b !== 0 ? a / b : null;
        return a
    }
}
), null);
__d("VideoPlayerContexts", ["React", "computeAspectRatio"], (function(a, b, c, d, e, f) {
    "use strict";
    f.VideoOriginalDimensionsContextMemoProvider = a;
    var g = b("React");
    c = g.createContext(null);
    f.VideoFBIDContext = c;
    d = g.createContext(!1);
    f.IsAbrEnabledContext = d;
    e = g.createContext("");
    f.TargetAudioQualityContext = e;
    a = g.createContext("");
    f.TargetVideoQualityContext = a;
    c = g.createContext(null);
    f.AdClientTokenContext = c;
    d = g.createContext(0);
    f.LoopCountContext = d;
    e = g.createContext(0);
    f.LoopCurrentContext = e;
    a = g.createContext(!1);
    f.PlayingContext = a;
    c = g.createContext(!1);
    f.StallingContext = c;
    d = g.createContext(!0);
    f.PausedContext = d;
    e = g.createContext(!1);
    f.EndedContext = e;
    a = g.createContext(!1);
    f.InPlayStallingContext = a;
    c = g.createContext(null);
    f.ErrorContext = c;
    d = g.createContext(!1);
    f.IsLiveContext = d;
    e = g.createContext(!1);
    f.SeekingContext = e;
    a = g.createContext(null);
    f.ControllerContext = a;
    c = g.createContext(null);
    f.LastMuteReasonContext = c;
    d = g.createContext(null);
    f.LastPlayReasonContext = d;
    e = g.createContext(null);
    f.LastPauseReasonContext = e;
    a = g.createContext([]);
    f.AvailableVideoQualitiesContext = a;
    c = g.createContext("notselected");
    f.SelectedVideoQualityContext = c;
    d = g.createContext("");
    f.CurrentVideoQualityContext = d;
    e = g.createContext(null);
    f.ActiveCaptionsContext = e;
    a = g.createContext(!1);
    f.CaptionsVisibleContext = a;
    c = g.createContext(!1);
    f.CaptionsLoadedContext = c;
    d = g.createContext(1);
    f.VolumeContext = d;
    e = g.createContext(!1);
    f.MutedContext = e;
    a = g.createContext(0);
    f.DurationContext = a;
    c = g.createContext(0);
    f.BufferEndContext = c;
    d = g.createContext(null);
    f.InstanceKeyContext = d;
    var h = g.createContext({
        originalAspectRatio: null,
        originalHeight: null,
        originalWidth: null
    });
    f.VideoOriginalDimensionsContext = h;
    function a(a) {
        var c = a.children
          , d = a.originalHeight
          , e = a.originalWidth;
        a = g.useMemo(function() {
            var a;
            return {
                originalAspectRatio: b("computeAspectRatio")(e, d),
                originalHeight: (a = d) != null ? a : null,
                originalWidth: (a = e) != null ? a : null
            }
        }, [d, e]);
        return g.jsx(h.Provider, {
            value: a,
            children: c
        })
    }
    e = g.createContext(null);
    f.DimensionsContext = e;
    a = g.createContext(null);
    f.PlayerImplementationNameContext = a;
    c = g.createContext(!1);
    f.VideoPlayerMouseHoverContext = c;
    d = g.createContext(!1);
    f.VideoPlayerMouseIdleContext = d;
    e = g.createContext(null);
    f.BroadcastStatusContext = e;
    a = g.createContext("deny");
    f.CanAutoplayContext = a;
    c = g.createContext(null);
    f.VolumeSettingContext = c;
    d = g.createContext("unknown");
    f.AutoplayGatingResultContext = d;
    e = g.createContext(!1);
    f.InbandCaptionsAutogeneratedContext = e;
    a = g.createContext({
        release: function(a) {},
        reserve: function(a) {
            return a
        }
    });
    f.VideoPlayerCaptionsReservationActionsContext = a;
    c = g.createContext([]);
    f.VideoPlayerCaptionsReservationsContext = c;
    d = g.createContext(!1);
    f.StreamInterruptedContext = d;
    e = g.createContext(0);
    f.WatchTimeContext = e;
    a = g.createContext(0);
    f.LastPlayedTimeContext = a;
    c = g.createContext(null);
    f.SeekableRangesContext = c;
    d = g.createContext(!1);
    f.IsLiveRewindActiveContext = d;
    e = g.createContext(null);
    f.AudioAvailabilityInfoContext = e;
    a = g.createContext(1);
    f.PlaybackRateContext = a
}
), null);
__d("VideoPlayerViewabilityContexts", ["DOMRectReadOnly", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(null);
    f.VideoPlayerPassiveViewabilityInfoContext = c;
    d = a.createContext(!1);
    f.VideoPlayerFullscreenContext = d
}
), null);
__d("VideoPlayerHooks", ["DOMRectIsEqual", "React", "VideoPlayerContexts", "VideoPlayerViewabilityContexts", "clearTimeout", "removeFromArray", "setTimeout", "unrecoverableViolation", "useLayoutEffect_SAFE_FOR_SSR", "useStable"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useLatestValueRef = a;
    f.useController = h;
    f.useInstanceKey = c;
    f.useIsLive = d;
    f.useBufferEnd = e;
    f.useDuration = i;
    f.useSeeking = j;
    f.useEnded = k;
    f.useError = l;
    f.usePlaying = m;
    f.useCurrentTime_DO_NOT_USE = n;
    f.useCurrentTimeThrottled = o;
    f.useIsFrozenPassive = p;
    f.useWatchTime = q;
    f.useLastPlayedTime = r;
    f.usePaused = s;
    f.useStalling = t;
    f.useInPlayStalling = u;
    f.useLastMuteReason = v;
    f.useLastPauseReason = w;
    f.useLastPlayReason = x;
    f.useAvailableVideoQualities = y;
    f.useCaptionsVisible = z;
    f.useActiveCaptions = A;
    f.useCurrentVideoQuality = B;
    f.useSelectedVideoQuality = C;
    f.useMuted = D;
    f.useVolume = E;
    f.useIsFullscreen = F;
    f.useDimensions = G;
    f.useVideoOriginalDimensions = H;
    f.usePlayerImplementationName = I;
    f.useCaptionsLoaded = J;
    f.useIsAbrEnabled = K;
    f.useTargetVideoQuality = L;
    f.useTargetAudioQuality = M;
    f.useIsHovering = N;
    f.useIsMouseIdle = O;
    f.useVideoPlayerPassiveViewabilityInfo = P;
    f.useVideoPlayerViewabilityInfo = Q;
    f.useBroadcastStatus = R;
    f.useCanAutoplay = S;
    f.useVolumeSetting = T;
    f.useAutoplayGatingResult = U;
    f.useVideoFbid = V;
    f.useAdClientToken = W;
    f.useVideoPlayerCurrentLoop = X;
    f.useVideoPlayerTotalLoops = Y;
    f.useInbandCaptionsAutogenerated = Z;
    f.useVideoPlayerCaptionsReservations = aa;
    f.useVideoPlayerCaptionsReservationActions = ba;
    f.useStreamInterrupted = ca;
    f.useSeekableRanges_DO_NOT_USE = da;
    f.useIsLiveRewindActive = ea;
    f.useIsTransitioningToNextLoop = $;
    f.useVideoPlaybackEnded = fa;
    f.usePlaybackRate = ga;
    var g = b("React");
    function a(a) {
        var c = g.useRef(a);
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            c.current = a
        }, [a]);
        return c
    }
    function h() {
        var a = g.useContext(b("VideoPlayerContexts").ControllerContext);
        if (a == null)
            throw b("unrecoverableViolation")("Empty ControllerContext. Are you rendering useController outside of VideoPlayerRelay/VideoPlayerX?", "comet_video_player");
        return a
    }
    function c() {
        var a = g.useContext(b("VideoPlayerContexts").InstanceKeyContext);
        if (a == null)
            throw b("unrecoverableViolation")("Empty InstanceKeyContext. Are you rendering useInstanceKey outside of VideoPlayerRelay/VideoPlayerX?", "comet_video_player");
        return a
    }
    function d() {
        var a = R();
        return a === "LIVE"
    }
    function e() {
        return g.useContext(b("VideoPlayerContexts").BufferEndContext)
    }
    function i() {
        return g.useContext(b("VideoPlayerContexts").DurationContext)
    }
    function j() {
        return g.useContext(b("VideoPlayerContexts").SeekingContext)
    }
    function k() {
        return g.useContext(b("VideoPlayerContexts").EndedContext)
    }
    function l() {
        return g.useContext(b("VideoPlayerContexts").ErrorContext)
    }
    function m() {
        return g.useContext(b("VideoPlayerContexts").PlayingContext)
    }
    function n() {
        var a = g.useState(0)
          , b = a[0]
          , c = a[1]
          , d = h();
        g.useEffect(function() {
            var a = d.subscribe(function() {
                c(d.getPlayheadPosition())
            });
            c(d.getPlayheadPosition());
            return function() {
                return a.remove()
            }
        }, [d]);
        return b
    }
    function o(a) {
        var c = g.useState(0)
          , d = c[0]
          , e = c[1]
          , f = h()
          , i = g.useRef(null)
          , j = g.useRef(d);
        g.useEffect(function() {
            var c = f.subscribe(function() {
                j.current = f.getPlayheadPosition();
                if (i.current != null)
                    return;
                i.current = b("setTimeout")(function() {
                    e(j.current),
                    i.current = null
                }, a)
            });
            e(f.getPlayheadPosition());
            return c.remove
        }, [f, a]);
        g.useEffect(function() {
            return function() {
                i.current !== null && b("clearTimeout")(i.current)
            }
        }, []);
        return d
    }
    function p() {
        var a = h()
          , c = g.useRef([])
          , d = g.useRef(a.isFrozen())
          , e = b("useStable")(function() {
            return {
                getCurrentState: function() {
                    return a.isFrozen()
                },
                subscribeToChanges: function(a) {
                    var d = c.current;
                    d.push(a);
                    return {
                        remove: function() {
                            return b("removeFromArray")(d, a)
                        }
                    }
                }
            }
        });
        g.useEffect(function() {
            var b = a.subscribe(function() {
                var b = d.current
                  , e = a.isFrozen();
                d.current = e;
                if (e !== b) {
                    b = c.current;
                    b.forEach(function(a) {
                        return a(e)
                    })
                }
            });
            return function() {
                b.remove()
            }
        }, [a]);
        return e
    }
    function q() {
        return g.useContext(b("VideoPlayerContexts").WatchTimeContext)
    }
    function r() {
        return g.useContext(b("VideoPlayerContexts").LastPlayedTimeContext)
    }
    function s() {
        return g.useContext(b("VideoPlayerContexts").PausedContext)
    }
    function t() {
        return g.useContext(b("VideoPlayerContexts").StallingContext)
    }
    function u() {
        return g.useContext(b("VideoPlayerContexts").InPlayStallingContext)
    }
    function v() {
        return g.useContext(b("VideoPlayerContexts").LastMuteReasonContext)
    }
    function w() {
        return g.useContext(b("VideoPlayerContexts").LastPauseReasonContext)
    }
    function x() {
        return g.useContext(b("VideoPlayerContexts").LastPlayReasonContext)
    }
    function y() {
        return g.useContext(b("VideoPlayerContexts").AvailableVideoQualitiesContext)
    }
    function z() {
        return g.useContext(b("VideoPlayerContexts").CaptionsVisibleContext)
    }
    function A() {
        return g.useContext(b("VideoPlayerContexts").ActiveCaptionsContext)
    }
    function B() {
        return g.useContext(b("VideoPlayerContexts").CurrentVideoQualityContext)
    }
    function C() {
        return g.useContext(b("VideoPlayerContexts").SelectedVideoQualityContext)
    }
    function D() {
        return g.useContext(b("VideoPlayerContexts").MutedContext)
    }
    function E() {
        return g.useContext(b("VideoPlayerContexts").VolumeContext)
    }
    function F() {
        return g.useContext(b("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext)
    }
    function G() {
        return g.useContext(b("VideoPlayerContexts").DimensionsContext)
    }
    function H() {
        return g.useContext(b("VideoPlayerContexts").VideoOriginalDimensionsContext)
    }
    function I() {
        return g.useContext(b("VideoPlayerContexts").PlayerImplementationNameContext)
    }
    function J() {
        return g.useContext(b("VideoPlayerContexts").CaptionsLoadedContext)
    }
    function K() {
        return g.useContext(b("VideoPlayerContexts").IsAbrEnabledContext)
    }
    function L() {
        return g.useContext(b("VideoPlayerContexts").TargetVideoQualityContext)
    }
    function M() {
        return g.useContext(b("VideoPlayerContexts").TargetAudioQualityContext)
    }
    function N() {
        return g.useContext(b("VideoPlayerContexts").VideoPlayerMouseHoverContext)
    }
    function O() {
        return g.useContext(b("VideoPlayerContexts").VideoPlayerMouseIdleContext)
    }
    function P() {
        return g.useContext(b("VideoPlayerViewabilityContexts").VideoPlayerPassiveViewabilityInfoContext)
    }
    function Q() {
        var a = P()
          , c = g.useState(null)
          , d = c[0]
          , e = c[1]
          , f = g.useRef(d);
        g.useEffect(function() {
            f.current = d
        }, [d]);
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            if (a) {
                var c = a.subscribe(function() {
                    var c = a.getCurrent();
                    if (c) {
                        var d = c.positionToViewport;
                        c = c.visiblePercentage;
                        var g = f.current;
                        (g == null || c !== g.visiblePercentage || !b("DOMRectIsEqual")(d, g.positionToViewport)) && e({
                            positionToViewport: d,
                            visiblePercentage: c
                        })
                    }
                });
                return function() {
                    return c.remove()
                }
            }
        }, [e, a]);
        return d
    }
    function R() {
        return g.useContext(b("VideoPlayerContexts").BroadcastStatusContext)
    }
    function S() {
        return g.useContext(b("VideoPlayerContexts").CanAutoplayContext)
    }
    function T() {
        return g.useContext(b("VideoPlayerContexts").VolumeSettingContext)
    }
    function U() {
        return g.useContext(b("VideoPlayerContexts").AutoplayGatingResultContext)
    }
    function V() {
        return g.useContext(b("VideoPlayerContexts").VideoFBIDContext)
    }
    function W() {
        return g.useContext(b("VideoPlayerContexts").AdClientTokenContext)
    }
    function X() {
        return g.useContext(b("VideoPlayerContexts").LoopCurrentContext)
    }
    function Y() {
        return g.useContext(b("VideoPlayerContexts").LoopCountContext)
    }
    function Z() {
        return g.useContext(b("VideoPlayerContexts").InbandCaptionsAutogeneratedContext)
    }
    function aa() {
        return g.useContext(b("VideoPlayerContexts").VideoPlayerCaptionsReservationsContext)
    }
    function ba() {
        return g.useContext(b("VideoPlayerContexts").VideoPlayerCaptionsReservationActionsContext)
    }
    function ca() {
        return g.useContext(b("VideoPlayerContexts").StreamInterruptedContext)
    }
    function da() {
        return g.useContext(b("VideoPlayerContexts").SeekableRangesContext)
    }
    function ea() {
        return g.useContext(b("VideoPlayerContexts").IsLiveRewindActiveContext)
    }
    function $() {
        var a = k()
          , b = X()
          , c = Y();
        a = a && c > 0 && b < c;
        return a
    }
    function fa() {
        var a = k()
          , b = $();
        return a && !b
    }
    function ga() {
        return g.useContext(b("VideoPlayerContexts").PlaybackRateContext)
    }
}
), null);
__d("createVideoStateHook", ["React", "VideoPlayerHooks", "emptyFunction", "gkx", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.createVideoStateHook = a;
    var g = b("React")
      , h = new Set();
    function a(a) {
        var c = new Map();
        h.add(c);
        function d() {
            var a = b("VideoPlayerHooks").useInstanceKey();
            c.has(a) || c.set(a, {
                consumers: new Set(),
                key: a,
                lastValue: void 0
            });
            var d = c.get(a);
            if (d == null)
                throw b("unrecoverableViolation")('createVideoStateHook useInstance missing instance by key "' + a + '"', "comet_video_player");
            return d
        }
        function e(a, b) {
            a.consumers.add(b)
        }
        function f(a, b) {
            a.consumers["delete"](b)
        }
        function i(a, b, c) {
            a.lastValue = b,
            a.consumers.forEach(function(a) {
                c !== a && a(b)
            })
        }
        function j(a) {
            var b = d()
              , c = g.useRef(b);
            c.current = b;
            a = b.lastValue != null ? b.lastValue : a;
            var h = g.useRef(a);
            h.current = a;
            a = g.useState(a);
            var j = a[0]
              , k = a[1];
            g.useEffect(function() {
                k(h.current);
                e(b, k);
                return function() {
                    f(b, k)
                }
            }, [b]);
            g.useEffect(function() {
                i(c.current, j, k)
            }, [j]);
            return [j, k]
        }
        function a(a) {
            a = j(a);
            a[0];
            a = a[1];
            return a
        }
        function k(a) {
            a = j(a);
            var b = a[0];
            a[1];
            return b
        }
        return {
            setterHook: a,
            stateHook: j,
            valueHook: k
        }
    }
    function c(a) {
        g.useEffect(function() {
            return function() {
                h.forEach(function(b) {
                    b["delete"](a)
                })
            }
        }, [a])
    }
    d = b("gkx")("1535833") ? c : b("emptyFunction");
    f.useCleanupVideoStateHooks_INTERNAL = d
}
), null);
__d("VideoPlayerPortalingPlaceInfoProvider.react", ["React", "emptyFunction", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.VideoPlayerPortalingPlaceInfoProvider = a;
    f.useVideoPlayerPortalingPlaceInfo = c;
    var g = b("React")
      , h = g.createContext(null);
    function a(a) {
        var b = a.children
          , c = a.currentPlaceID
          , d = a.currentVideoID
          , e = a.portalingEnabled
          , f = a.previousPlaceMetaData
          , i = a.thisPlaceID;
        a = g.useMemo(function() {
            return {
                currentPlaceID: c,
                currentVideoID: d,
                portalingEnabled: e,
                previousPlaceMetaData: f,
                thisPlaceID: i
            }
        }, [c, d, e, f, i]);
        return g.jsx(h.Provider, {
            value: a,
            children: b
        })
    }
    var i = b("emptyFunction");
    function c() {
        var a = g.useContext(h);
        i(a);
        return a == null ? {
            currentPlaceID: null,
            currentVideoID: null,
            portalingEnabled: !1,
            previousPlaceMetaData: null,
            thisPlaceID: null
        } : a
    }
}
), null);
__d("useCurrentRouteBuilder", ["CometRouteParams", "React", "jsRouteBuilder", "useCurrentRoute"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a, c = b("CometRouteParams").useRouteParams(), d = (a = b("useCurrentRoute")()) == null ? void 0 : a.routePath;
        return g.useMemo(function() {
            return d == null ? null : b("jsRouteBuilder")(d, Object.freeze({}), new Set(), c)
        }, [d, c])
    }
}
), null);
__d("CometCompositeFocusIndicator.react", ["fbt", "BaseFocusRing.react", "CometComponentWithKeyCommands.react", "CometCompositeFocusIndicatorContext", "CometKeys", "React", "gkx", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = {
        noOutline: {
            outline: "lzcic4wl"
        }
    }
      , j = b("gkx")("1721477");
    function a(a) {
        var c = a.children
          , d = a.compositeInfo;
        a = h.useMemo(function() {
            var a = [];
            d.horizontal === !0 && a.push({
                command: {
                    key: b("CometKeys").RIGHT
                },
                description: g._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),
                handler: function() {}
            }, {
                command: {
                    key: b("CometKeys").LEFT
                },
                description: g._("M\u1ee5c ti\u1ebfp theo"),
                handler: function() {}
            });
            d.vertical === !0 && a.push({
                command: {
                    key: b("CometKeys").UP
                },
                description: g._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),
                handler: function() {}
            }, {
                command: {
                    key: b("CometKeys").DOWN
                },
                description: g._("M\u1ee5c ti\u1ebfp theo"),
                handler: function() {}
            });
            return a
        }, [d]);
        return h.jsx(b("CometComponentWithKeyCommands.react"), {
            commandConfigs: a,
            children: h.jsx(b("CometCompositeFocusIndicatorContext").Provider, {
                value: d,
                children: h.jsx(b("BaseFocusRing.react"), {
                    children: function(a) {
                        return c(j ? a : i.noOutline)
                    }
                })
            })
        })
    }
}
), null);
__d("CometFocusGroup.react", ["CometCompositeFocusIndicator.react", "CometFocusGroupContext", "FocusGroup.react", "React", "focusScopeQueries"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    c = b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);
    var h = c[0]
      , i = c[1];
    function a(a) {
        var c = a.children
          , d = a.hideArrowSignifiers
          , e = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "hideArrowSignifiers"])
          , f = g.useMemo(function() {
            return {
                FocusContainer: h,
                FocusItem: i
            }
        }, [])
          , j = g.useMemo(function() {
            return {
                hideArrowSignifiers: d === !0,
                horizontal: a.orientation !== "vertical",
                vertical: a.orientation !== "horizontal"
            }
        }, [d, a.orientation]);
        return g.jsx(b("CometCompositeFocusIndicator.react"), {
            compositeInfo: j,
            children: function(a) {
                return g.jsx(b("CometFocusGroupContext").Provider, {
                    value: f,
                    children: g.jsx(h, babelHelpers["extends"]({}, e, {
                        children: c(a)
                    }))
                })
            }
        })
    }
}
), null);
__d("BaseTextInput.react", ["BaseFocusRing.react", "BaseInput.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.suppressFocusRing
          , e = a.xstyle
          , f = babelHelpers.objectWithoutPropertiesLoose(a, ["suppressFocusRing", "xstyle"]);
        return g.jsx(b("BaseFocusRing.react"), {
            suppressFocusRing: d,
            children: function(a) {
                return g.jsx(b("BaseInput.react"), babelHelpers["extends"]({}, f, {
                    ref: c,
                    xstyle: [a, e]
                }))
            }
        })
    }
    c = g.memo(g.forwardRef(a));
    e.exports = c
}
), null);
__d("CometRoundedTextInput.react", ["BaseTextInput.react", "Locale", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        disabledInput: {
            color: "erlsw9ld",
            cursor: "rj84mg9z"
        },
        fontPlaceholder: {
            backgroundColor: "b3i9ofy5",
            color: "pipptul6",
            "::placeholder": {
                color: "b1f16np4"
            },
            ":focus::placeholder": {
                color: "hdh3q7d8"
            }
        },
        fontSecondary: {
            backgroundColor: "tdjehn4e",
            color: "m9osqain"
        },
        hideIconAnimation: {
            transitionDuration: "ijkhr0an",
            transitionProperty: "pnx7fd3z",
            transitionTimingFunction: "sgqwj88q"
        },
        icon: {
            pointerEvents: "hzruof5a",
            position: "pmk7jnqg"
        },
        iconFocused: {
            opacity: "b5wmifdl",
            pointerEvents: "hzruof5a",
            transform: "jax01cp1"
        },
        iconFocusedRTL: {
            transform: "h13w3u8k"
        },
        root: {
            boxSizing: "rq0escxv",
            display: "a8c37x1j",
            minWidth: "a5nuqjux",
            position: "l9j0dhe7",
            width: "k4urcfbm"
        },
        textInput: {
            appearance: "dwo3fsh8",
            borderTop: "qu0x051f",
            borderEnd: "esr5mh6w",
            borderBottom: "e9989ue4",
            borderStart: "r7d6kgcz",
            borderTopStartRadius: "br7hx15l",
            borderTopEndRadius: "h2jyy9rg",
            borderBottomEndRadius: "n3ddgdk9",
            borderBottomStartRadius: "owxd89k7",
            boxSizing: "rq0escxv",
            color: "oo9gr5id",
            fontFamily: "ihxqhq3m",
            fontSize: "jq4qci2q",
            outline: "lzcic4wl",
            transitionProperty: "nlq1og4t",
            width: "k4urcfbm",
            "::-ms-clear": {
                display: "iu8raji3"
            }
        },
        textInputWithIcon: {
            textIndent: "o1lsuvei"
        }
    }, j = {
        large: {
            start: "rnx8an3s",
            top: "fcg2cn6m"
        },
        medium: {
            start: "ax37mqq2",
            top: "c0p38np4"
        }
    }, k = {
        center: {
            textAlign: "oqcyycmt"
        },
        end: {
            textAlign: "ftzlm3b6"
        },
        inherit: {
            textAlign: "i1ao9s8h"
        },
        start: {
            textAlign: "hzawbc8m"
        }
    }, l = {
        large: {
            height: "qypqp5cg",
            paddingTop: "l60d2q6s",
            paddingEnd: "hv4rvrfc",
            paddingBottom: "hwnh5xvq",
            paddingStart: "dati1w0a"
        },
        medium: {
            height: "tv7at329",
            paddingTop: "l60d2q6s",
            paddingEnd: "d1544ag0",
            paddingBottom: "hwnh5xvq",
            paddingStart: "tw6a2znq"
        }
    }, m = b("Locale").isRTL();
    function a(a, c) {
        var d = a.disabled;
        d = d === void 0 ? !1 : d;
        var e = a.hideIconAnimation;
        e = e === void 0 ? !1 : e;
        var f = a.hideIconOnFocus;
        f = f === void 0 ? !1 : f;
        var n = a.icon
          , o = a.label
          , p = a.onBlur
          , q = a.onFocus
          , r = a.onMouseUp
          , s = a.placeholderFontUse;
        s = s === void 0 ? "placeholder" : s;
        var t = a.size;
        t = t === void 0 ? "medium" : t;
        var u = a.textAlign;
        u = u === void 0 ? "start" : u;
        var v = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["disabled", "hideIconAnimation", "hideIconOnFocus", "icon", "label", "onBlur", "onFocus", "onMouseUp", "placeholderFontUse", "size", "textAlign", "xstyle"]);
        var w = h.useState(!1)
          , x = w[0]
          , y = w[1];
        w = function(a) {
            y(!0),
            q && q(a)
        }
        ;
        var z = function(a) {
            y(!1),
            p && p(a)
        }
          , A = function(a) {
            r && r(a)
        };
        return h.jsxs("label", {
            className: (g || (g = b("stylex")))(i.root),
            children: [n != null ? h.jsx("div", {
                className: (g || (g = b("stylex")))(!e && i.hideIconAnimation, i.icon, j[t], f && x && i.iconFocused, f && x && m && i.iconFocusedRTL),
                children: n
            }) : null, h.jsx(b("BaseTextInput.react"), babelHelpers["extends"]({}, a, {
                "aria-label": o,
                disabled: d,
                onBlur: z,
                onFocus: w,
                onMouseUp: A,
                ref: c,
                xstyle: [k[u], i.hideIconAnimation, s === "placeholder" && i.fontPlaceholder, s === "secondary" && i.fontSecondary, i.textInput, l[t], d && i.disabledInput, n != null && (!f || !x) && i.textInputWithIcon, v]
            }))]
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("TetraList.react", ["CometFocusGroup.react", "React", "focusScopeQueries", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        root: {
            marginBottom: "b20td4e0",
            marginTop: "muag1w35"
        }
    };
    function a(a) {
        var c = a.children
          , d = a.items;
        a = a.keyNavOrientation;
        var e = typeof c === "function" ? ((d = d) != null ? d : []).map(function(a, b) {
            return c({
                item: a,
                props: {
                    key: (a = a.key) != null ? a : b
                }
            })
        }) : c;
        return a != null ? h.jsx(b("CometFocusGroup.react"), {
            orientation: a,
            tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
            children: function(a) {
                return h.jsx("div", {
                    className: (g || (g = b("stylex")))(a, i.root),
                    children: e
                })
            }
        }) : h.jsx("div", {
            className: (g || (g = b("stylex")))(i.root),
            children: e
        })
    }
}
), null);
__d("createUseMutation_DEPRECATED", ["Promise", "CometRelay", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c, d, e) {
        return function() {
            var f = b("CometRelay").useRelayEnvironment();
            return g.useCallback(function(g, h, i) {
                return new (b("Promise"))(function(j, k) {
                    return b("CometRelay").enqueueMutation(f, {
                        mutation: a,
                        onCompleted: function(a, b) {
                            b && b.length ? k(b) : j(a)
                        },
                        onError: function(a) {
                            return k([a])
                        },
                        optimisticResponse: c ? c(g, h, i) : null,
                        optimisticUpdater: d ? d(g, h, i) : null,
                        updater: e ? e(g, h, i) : null,
                        variables: babelHelpers["extends"]({
                            input: g
                        }, h)
                    })
                }
                )
            }, [f])
        }
    }
}
), null);
__d("addToMap", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        if (a.get(b) === c)
            return a;
        a = new Map(a);
        a.set(b, c);
        return a
    }
}
), null);
__d("removeFromMap", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        if (a.has(b)) {
            var c = new Map(a);
            c["delete"](b);
            return c
        }
        return a
    }
}
), null);
__d("TetraUnitHeader.react", ["CometBase.react", "CometColumn.react", "CometColumnItem.react", "CometPressable.react", "IconSource", "React", "TetraIcon.react", "TetraText.react", "TetraTextPairing.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = 8, j = {
        action: {
            backgroundColor: "b0kwm4yp",
            borderTop: "gcieejh5",
            borderEnd: "bn081pho",
            borderBottom: "humdl8nn",
            borderStart: "izx4hr6d",
            borderTopStartRadius: "jk6sbkaj",
            borderTopEndRadius: "kdgqqoy6",
            borderBottomEndRadius: "ihh4hy1g",
            borderBottomStartRadius: "qttc61fc",
            display: "q9uorilb",
            marginTop: "kvgmc6g5",
            marginEnd: "cxmmr5t8",
            marginBottom: "oygrvhab",
            marginStart: "hcukyx3x",
            paddingTop: "jb3vyjys",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "qt6c0cv9",
            paddingStart: "a8nywdso",
            position: "l9j0dhe7",
            verticalAlign: "pzggbiyp"
        },
        actionButton: {
            color: "py34i1dx",
            cursor: "nhd2j8a9",
            textDecoration: "owjl8umy"
        },
        actionHidden: {
            opacity: "b5wmifdl"
        },
        hairline: {
            backgroundColor: "pwoa4pd7",
            height: "ay7djpcl",
            marginBottom: "mkjtxrlb"
        },
        root: {
            paddingBottom: "e5nlhep0"
        },
        showActionOnHover: {
            visibility: "kr9hpln1",
            "@media (pointer: coarse)": {
                visibility: "jbb2w91c"
            }
        }
    }, k = {
        8: {
            paddingTop: "cxgpxx05"
        },
        12: {
            paddingTop: "pybr56ya"
        },
        16: {
            paddingTop: "discj3wi"
        },
        20: {
            paddingTop: "aodizinl"
        }
    };
    function a(a) {
        var c = a.action
          , d = a.actionAccessibilityLabel
          , e = a.actionDisabled;
        e = e === void 0 ? !1 : e;
        var f = a.actionHidden;
        f = f === void 0 ? !1 : f;
        var l = a.actionLinkProps
          , m = a.actionRef
          , n = a.actiontestid
          , o = a.actionWrapper
          , p = a.addOn_DEPRECATED
          , q = a.body
          , r = a.bodyColor;
        r = r === void 0 ? "secondary" : r;
        var s = a.disabled
          , t = a.hasTopDivider;
        t = t === void 0 ? !1 : t;
        var u = a.headline
          , v = a.headlineColor;
        v = v === void 0 ? "primary" : v;
        var w = a.iconColor;
        w = w === void 0 ? "primary" : w;
        var x = a.level
          , y = a.linkProps
          , z = a.meta
          , A = a.metaColor;
        A = A === void 0 ? "secondary" : A;
        var B = a.metaLocation
          , C = a.onActionHoverIn
          , D = a.onActionHoverOut
          , E = a.onActionPress
          , F = a.onActionPressIn
          , G = a.onActionPressOut
          , H = a.onPress
          , I = a.onPressIn
          , J = a.onPressOut
          , K = a.paddingHorizontal;
        K = K === void 0 ? 16 : K;
        var L = a.paddingTop;
        L = L === void 0 ? 20 : L;
        var M = a.showActionOnHover;
        M = M === void 0 ? !1 : M;
        var N = a.testOnly_actionPressed
          , O = a.testOnly_pressed;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["action", "actionAccessibilityLabel", "actionDisabled", "actionHidden", "actionLinkProps", "actionRef", "actiontestid", "actionWrapper", "addOn_DEPRECATED", "body", "bodyColor", "disabled", "hasTopDivider", "headline", "headlineColor", "iconColor", "level", "linkProps", "meta", "metaColor", "metaLocation", "onActionHoverIn", "onActionHoverOut", "onActionPress", "onActionPressIn", "onActionPressOut", "onPress", "onPressIn", "onPressOut", "paddingHorizontal", "paddingTop", "showActionOnHover", "testOnly_actionPressed", "testOnly_pressed"]);
        var P = h.useState(!1)
          , Q = P[0];
        P = P[1];
        var R;
        if (c != null) {
            l = {
                "aria-label": d,
                disabled: e,
                linkProps: l,
                onHoverIn: C,
                onHoverOut: D,
                onPress: E,
                onPressIn: F,
                onPressOut: G,
                testOnly_pressed: (d = N) != null ? d : !1,
                testid: n
            };
            c instanceof b("IconSource") ? R = h.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, l, {
                color: w,
                icon: c,
                ref: m
            })) : R = h.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, l, {
                className_DEPRECATED: "actionChildElement",
                onFocusVisibleChange: P,
                overlayOffset: i,
                overlayRadius: 4,
                ref: m,
                xstyle: [j.actionButton, j.action, f && !Q && j.actionHidden, M && j.showActionOnHover],
                children: h.jsx(b("TetraText.react"), {
                    color: e ? "disabled" : "highlight",
                    numberOfLines: 1,
                    type: x === 2 ? "body2" : "body3",
                    children: c
                })
            }))
        } else
            p != null && (R = h.jsx("div", {
                className: (g || (g = b("stylex")))(j.action),
                children: p
            }));
        if (o != null) {
            C = o.component;
            R = h.jsx(C, babelHelpers["extends"]({}, o.props, {
                children: R
            }))
        }
        E = h.jsx(b("TetraTextPairing.react"), {
            body: q,
            bodyColor: r,
            bodyLineLimit: 3,
            headline: u,
            headlineAddOn: R,
            headlineColor: v,
            headlineLineLimit: 2,
            isSemanticHeading: !0,
            level: x,
            meta: z,
            metaColor: A,
            metaLineLimit: 1,
            metaLocation: (D = B) != null ? D : "below"
        });
        G = h.jsx(b("CometColumn.react"), babelHelpers["extends"]({}, a, {
            paddingHorizontal: t ? 0 : K,
            xstyle: [j.root, k[L]],
            children: h.jsx(b("CometColumnItem.react"), {
                children: H != null ? h.jsx(b("CometPressable.react"), {
                    disabled: s,
                    linkProps: y,
                    onPress: H,
                    onPressIn: I,
                    onPressOut: J,
                    overlayDisabled: !0,
                    ref: m,
                    testOnly_pressed: (F = O) != null ? F : !1,
                    children: E
                }) : E
            })
        }));
        return t ? h.jsxs(b("CometColumn.react"), {
            paddingHorizontal: K,
            children: [h.jsx(b("CometColumnItem.react"), {
                children: h.jsx(b("CometBase.react"), {
                    xstyle: j.hairline
                })
            }), G]
        }) : G
    }
}
), null);
__d("CometHomeRightRailUnit.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, b) {
        var c = a.children
          , d = a.hasBottomDivider;
        d = d === void 0 ? !0 : d;
        var e = a.header
          , f = a.showActionOnHover;
        f = f === void 0 ? !1 : f;
        a = a.testid;
        return g.jsxs("div", {
            className: "l9j0dhe7" + (f ? " ma38uw3q" : ""),
            "data-testid": void 0,
            ref: b,
            children: [e, g.jsx("div", {
                className: "cxgpxx05 sj5x9vvc",
                children: c
            }), d ? g.jsx("div", {
                className: "re5koujm pmk7jnqg ay7djpcl cypi58rs qee0rdz8 pwoa4pd7"
            }) : null]
        })
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("MessengerThreadFetchLoggerUtil", ["FBLogger", "MercuryIDs", "QuickPerformanceLogger", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = 1, i = new Map();
    a = function(a) {
        try {
            b("QuickPerformanceLogger").markerStart(25296904, h);
            a = b("MercuryIDs").isValid(a) ? b("MercuryIDs").tokenize(a).value : a;
            i.set(a, h);
            h++
        } catch (a) {
            b("FBLogger")("mercury").catching(a).warn("Logging thread info fetch encountered error")
        }
    }
    ;
    f.markerStart = a;
    c = function(a, c) {
        try {
            a = b("MercuryIDs").isValid(a) ? b("MercuryIDs").tokenize(a).value : a;
            var d = i.get(a);
            d != null && (b("QuickPerformanceLogger").markerEnd(25296904, c, d),
            i["delete"](a))
        } catch (a) {
            b("FBLogger")("mercury").catching(a).warn("Logging thread info fetch encountered error")
        }
    }
    ;
    f.markerEnd = c;
    d = function(a, c, d) {
        d === void 0 && (d = (g || (g = b("performanceAbsoluteNow")))());
        a = i.get(a);
        a != null && b("QuickPerformanceLogger").markerPoint(25296904, c, {
            instanceKey: a,
            timestamp: d
        })
    }
    ;
    f.markerPoint = d
}
), null);
__d("MessengerThreadsWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "3106009512862081"
        }
        ;
        b.getQueryID = function() {
            return "655761775309154"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerGraphQLThreadFetcher.bs", ["Promise", "gkx", "BanzaiODS", "bs_caml_array", "bs_pervasives", "WebGraphQL", "bs_caml_format", "bs_caml_option", "bs_caml_exceptions", "bs_js_null_undefined", "MercuryServerRequestsConfig", "ChatReliabilityInstrumentation", "MessengerThreadFetchLoggerUtil", "MessengerThreadsWebGraphQLQuery", "MessengerServerPayloadTransformer.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        contents: !0
    };
    function h(a, c, d, e, f) {
        if (a == null)
            if (e)
                return {
                    actions: null,
                    thread: void 0,
                    end_of_history: {
                        type: "user",
                        fbid: c
                    },
                    roger: null,
                    delivery_receipts: []
                };
            else
                return {
                    actions: null,
                    thread: void 0,
                    end_of_history: void 0,
                    roger: null,
                    delivery_receipts: []
                };
        else {
            e = [];
            var g = b("MessengerServerPayloadTransformer.bs").getThreadFBID(a)
              , h = b("MessengerServerPayloadTransformer.bs").getOtherUserID(a);
            g = h == null ? g == null ? b("bs_pervasives").failwith("No thread ID") : g : h;
            g !== c && b("bs_pervasives").failwith("Thread ID mismatch");
            h = b("MessengerServerPayloadTransformer.bs").transformThread(d, a, f);
            g = b("bs_js_null_undefined").fromOption(b("MessengerServerPayloadTransformer.bs").transformMessages(d, a, f));
            f = b("MessengerServerPayloadTransformer.bs").transformReadReceipts(d, a);
            if (f !== void 0) {
                d = {};
                d[c] = b("bs_caml_option").valFromOption(f);
                f = d
            } else
                f = null;
            d = b("MessengerServerPayloadTransformer.bs").transformDeliveryReceipts(a);
            if (d.length >= 1) {
                d = b("bs_caml_array").caml_array_get(d, 0);
                h.is_canonical ? e.push({
                    other_user_fbid: c,
                    thread_fbid: null,
                    time: b("bs_caml_format").caml_float_of_string(d.timestamp_precise)
                }) : e.push({
                    other_user_fbid: null,
                    thread_fbid: c,
                    time: b("bs_caml_format").caml_float_of_string(d.timestamp_precise)
                })
            }
            d = b("MessengerServerPayloadTransformer.bs").getMessagePageInfo(a);
            if (d !== void 0)
                if (b("bs_caml_option").valFromOption(d).has_previous_page)
                    return {
                        actions: g,
                        thread: h,
                        end_of_history: void 0,
                        roger: f,
                        delivery_receipts: e
                    };
                else
                    return {
                        actions: g,
                        thread: h,
                        end_of_history: {
                            type: "thread",
                            fbid: c
                        },
                        roger: f,
                        delivery_receipts: e
                    };
            else
                return {
                    actions: g,
                    thread: h,
                    end_of_history: void 0,
                    roger: f,
                    delivery_receipts: e
                }
        }
    }
    function i(a) {
        b("MessengerThreadFetchLoggerUtil").markerPoint(a.id, "sendThreadInfoFetchRequest");
        return new (b("MessengerThreadsWebGraphQLQuery"))({
            id: a.id,
            message_limit: a.limit,
            load_messages: a.limit > 0,
            load_read_receipts: a.loadReadReceipts,
            load_delivery_receipts: a.loadDeliveryReceipts,
            before: a.timestamp,
            is_work_teamwork_not_putting_muted_in_unreads: b("gkx")("1105011")
        })
    }
    var j = b("bs_caml_exceptions").create("MessengerGraphQLThreadFetcher.SessionLoggedOut");
    function a(a, c, d) {
        if (g.contents) {
            var e = c.map(i);
            return b("Promise").all(b("WebGraphQL").execAll(e, {
                actorID: d ? a : null,
                batchName: "MessengerGraphQLThreadFetcher",
                msgrRegion: b("MercuryServerRequestsConfig").msgrRegion,
                allowCrossPageTransition: !0
            }))["catch"](function(a) {
                var d;
                try {
                    d = b("bs_caml_array").caml_array_get(a.errors, 0).should_end_session
                } catch (a) {
                    d = !1
                }
                d && (g.contents = !1);
                b("BanzaiODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_thread.failure");
                c.forEach(function(a) {
                    b("MessengerThreadFetchLoggerUtil").markerEnd(a.id, "FAIL");
                    return 0
                });
                b("ChatReliabilityInstrumentation").logERROR("fetch_thread_fail");
                return b("Promise").reject(a)
            }).then(function(e) {
                b("BanzaiODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_thread.success");
                return e.map(function(e, f) {
                    e = e.message_thread;
                    f = b("bs_caml_array").caml_array_get(c, f);
                    b("MessengerThreadFetchLoggerUtil").markerPoint(f.id, "getThreadInfoFetchResponse");
                    return h(e, f.id, a, f.isCanonical, d)
                })
            })
        } else
            return b("Promise").reject(j)
    }
    f.canMakeRequests = g;
    f._transformPayload = h;
    f._getQuery = i;
    f.SessionLoggedOut = j;
    f.fetchAll = a
}
), null);
__d("ChatReliabilityTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, {
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
        c.setEventData = function(a) {
            this.$1.event_data = a;
            return this
        }
        ;
        return a
    }();
    c = {
        event: !0,
        event_data: !0
    };
    e.exports = a
}
), null);
__d("ChatReliabilityEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ERROR: "error",
        CHANNEL_DISCONNECT: "channel_disconnect",
        CHANNEL_CONNECT: "channel_connect",
        CHANNEL_INIT: "channel_init",
        CHANNEL_NOCONFIG: "channel_noconfig",
        CHANNEL_HISTORY_INVALID: "channel_history_invalid",
        CHANNEL_STALLED: "channel_stalled",
        MESSAGE_RECEIVED: "msg_received",
        MESSAGE_SEND_START: "msg_send_start",
        THREAD_INFO_ENDPOINT_FATAL: "thread_info_fatal",
        DFF_ENDPOINT_FATAL: "invalidate_global_state_fatal",
        DFF_DELTA_INIT: "dff_initiated_by_delta",
        DFF_HOLE_INIT: "dff_initiated_by_hole",
        FETCHING_MANY_MESSAGES: "fetching_many_messages",
        THREAD_INFO_MISSING: "thread_info_missing",
        SET_THREAD_ID_MAP: "set_thread_id_map",
        DELETE_THREAD: "delete_thread",
        PROCESS_DELTA: "process_delta",
        RTI_SESSION: "chatproxy_rti_session",
        ON_INVALID_HISTORY: "chatproxy_on_invalid_history",
        GET_DEBUG_PRESENCE: "chatproxy_get_debug_presence"
    });
    e.exports = a
}
), null);
__d("ChatReliabilityInstrumentation", ["ChatReliabilityEvents", "ChatReliabilityTypedLogger", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logERROR = a;
    f.logCHANNEL_DISCONNECT = c;
    f.logCHANNEL_CONNECT = d;
    f.logCHANNEL_HISTORY_INVALID = e;
    f.logMESSAGE_RECEIVED = h;
    f.logMESSAGE_SEND_START = i;
    f.logCHANNEL_STALLED = j;
    f.logCHANNEL_INIT = k;
    f.logCHANNEL_NOCONFIG = l;
    f.logDFF_DELTA_INIT = m;
    f.logDFF_HOLE_INIT = n;
    f.logFETCHING_MANY_MESSAGES = o;
    f.logPROCESS_DELTA = p;
    f.logTHREAD_INFO_MISSING = q;
    f.logSET_THREAD_ID_MAP = r;
    f.logDELETE_THREAD = s;
    f.logCHATPROXY_EVENT = t;
    var g = function(a, c) {
        if (!b("gkx")("678576"))
            return;
        new (b("ChatReliabilityTypedLogger"))().setEvent(a).setEventData(c).log()
    };
    function a(a) {
        g(b("ChatReliabilityEvents").ERROR, a)
    }
    function c(a) {
        g(b("ChatReliabilityEvents").CHANNEL_DISCONNECT, a)
    }
    function d(a) {
        g(b("ChatReliabilityEvents").CHANNEL_CONNECT, a)
    }
    function e(a) {
        g(b("ChatReliabilityEvents").CHANNEL_HISTORY_INVALID, a)
    }
    function h(a) {
        g(b("ChatReliabilityEvents").MESSAGE_RECEIVED, a)
    }
    function i(a) {
        g(b("ChatReliabilityEvents").MESSAGE_SEND_START, a)
    }
    function j(a) {
        g(b("ChatReliabilityEvents").CHANNEL_STALLED, a)
    }
    function k(a) {
        g(b("ChatReliabilityEvents").CHANNEL_INIT, a)
    }
    function l(a) {
        g(b("ChatReliabilityEvents").CHANNEL_NOCONFIG, a)
    }
    function m(a) {
        g(b("ChatReliabilityEvents").DFF_DELTA_INIT, a)
    }
    function n(a) {
        g(b("ChatReliabilityEvents").DFF_HOLE_INIT, a)
    }
    function o(a) {
        g(b("ChatReliabilityEvents").FETCHING_MANY_MESSAGES, a)
    }
    function p(a) {
        g(b("ChatReliabilityEvents").PROCESS_DELTA, a)
    }
    function q(a) {
        g(b("ChatReliabilityEvents").THREAD_INFO_MISSING, a)
    }
    function r(a) {
        g(b("ChatReliabilityEvents").SET_THREAD_ID_MAP, a)
    }
    function s(a) {
        g(b("ChatReliabilityEvents").DELETE_THREAD, a)
    }
    function t(a) {
        g(a)
    }
}
), null);
