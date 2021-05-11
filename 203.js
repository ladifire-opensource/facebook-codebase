if (self.CavalryLogger) {
    CavalryLogger.start_js(["fobit"]);
}

__d("BizKitPermissionDisclosureForPageModalConfirmPermissionMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "bpnID"
        }
          , b = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "code"
        }
          , c = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "entryPoint"
        }
          , d = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "linkFlowSource"
        }
          , e = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "redirectURL"
        }
          , f = [{
            alias: null,
            args: [{
                fields: [{
                    kind: "Literal",
                    name: "actor_id",
                    value: ""
                }, {
                    kind: "Variable",
                    name: "bpn_id",
                    variableName: "bpnID"
                }, {
                    kind: "Literal",
                    name: "client_mutation_id",
                    value: ""
                }, {
                    kind: "Variable",
                    name: "code",
                    variableName: "code"
                }, {
                    kind: "Variable",
                    name: "entry_point",
                    variableName: "entryPoint"
                }, {
                    kind: "Variable",
                    name: "link_flow_source",
                    variableName: "linkFlowSource"
                }, {
                    kind: "Variable",
                    name: "redirect_url",
                    variableName: "redirectURL"
                }],
                kind: "ObjectValue",
                name: "data"
            }],
            concreteType: "ConfirmFeaturePermissionResponsePayload",
            kind: "LinkedField",
            name: "confirm_feature_permission",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_message",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "error_header",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: [a, b, c, d, e],
                kind: "Fragment",
                metadata: null,
                name: "BizKitPermissionDisclosureForPageModalConfirmPermissionMutation",
                selections: f,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [a, b, e, c, d],
                kind: "Operation",
                name: "BizKitPermissionDisclosureForPageModalConfirmPermissionMutation",
                selections: f
            },
            params: {
                id: "3112930732130488",
                metadata: {},
                name: "BizKitPermissionDisclosureForPageModalConfirmPermissionMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizKitPermissionDisclosureForPageModalQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "pageID"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "pictureSize"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "pageID"
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
            args: [{
                kind: "Variable",
                name: "height",
                variableName: "pictureSize"
            }, {
                kind: "Variable",
                name: "width",
                variableName: "pictureSize"
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
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            concreteType: "BusinessPresenceNode",
            kind: "LinkedField",
            name: "business_presence_node",
            plural: !1,
            selections: [e, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "tool_readiness_status",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "InstagramUserV2",
                kind: "LinkedField",
                name: "business_presence_linked_instagram",
                plural: !1,
                selections: [e, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "username",
                    storageKey: null
                }, d],
                storageKey: null
            }],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "BizKitPermissionDisclosureForPageModalQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [c, d, f],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "BizKitPermissionDisclosureForPageModalQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [c, d, f, e],
                    storageKey: null
                }]
            },
            params: {
                id: "2789099454532771",
                metadata: {
                    relayPreloadable: !0
                },
                name: "BizKitPermissionDisclosureForPageModalQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("useUserNonce_nonceMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            alias: null,
            args: [{
                kind: "Literal",
                name: "data",
                value: {
                    actor_id: "",
                    client_mutation_id: ""
                }
            }],
            concreteType: "GenUserNonceResponsePayload",
            kind: "LinkedField",
            name: "gen_user_nonce",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "nonce",
                storageKey: null
            }],
            storageKey: 'gen_user_nonce(data:{"actor_id":"","client_mutation_id":""})'
        }];
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useUserNonce_nonceMutation",
                selections: a,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "useUserNonce_nonceMutation",
                selections: a
            },
            params: {
                id: "2909726915816174",
                metadata: {},
                name: "useUserNonce_nonceMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizKitConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = 7;
    f.PRIMARY_COLUMNS = a;
    b = 3;
    f.SECONDARY_COLUMNS = b;
    c = "BizKit";
    f.BIZKIT_PROJECT_NAME = c;
    d = "bizkit";
    f.BIZKIT_MUTATION_SOURCE = d;
    e = 20;
    f.BIZKIT_ACTIVITY_PAGE_SIZE = e;
    a = 40;
    f.BIZKIT_UPDATES_COUNT_MAX = a;
    b = 7729;
    f.BIZKIT_WELCOME_TOUR_NUX_ID = b;
    c = "BIZKIT_PERMISSION_DISCLOSURE_MODAL_DISMISS_RECORDS";
    f.PERMISSION_DISCLOSURE_MODAL_DISMISS_RECORDS = c;
    d = "BIZKIT_PAGE_IG_UNIFIED_LINK_MANAGEMENT_DISMISS_RECORDS";
    f.BIZKIT_PAGE_IG_UNIFIED_LINK_MANAGEMENT_DISMISS_RECORDS = d
}
), null);
__d("BizKitErrorBoundary.react", ["BizKitConstants", "FBLogger", "React", "getErrorSafe"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                error: null
            },
            c.suppressReactDefaultErrorLogging = !0,
            b) || babelHelpers.assertThisInitialized(c)
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
            var d = c.onError;
            c = c.project;
            b("FBLogger")(c == null ? b("BizKitConstants").BIZKIT_PROJECT_NAME : c).catching(a).mustfix(a.message);
            d != null && d(a)
        }
        ;
        d.render = function() {
            var a = this.props
              , b = a.children;
            a = a.fallback;
            var c = this.state.error;
            return c ? typeof a === "function" ? a(c) : a : b
        }
        ;
        return c
    }(a.PureComponent);
    e.exports = c
}
), null);
__d("BizKitPermissionDisclosureContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        hideAlertCard: function() {},
        isAlertCardShown: !0
    });
    e.exports = c
}
), null);
__d("PageFamilyOfAppsLinkFlowSource", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        PAGE_SETTINGS: "page_settings",
        UNIFIED_INBOX: "unified_inbox",
        PAGES_MANAGER_APP: "pages_manager_app",
        BIZ_APP: "biz_app",
        BIZ_WEB: "biz_web",
        FB_APP: "fb_app",
        AYMT_LINK_CONFIRMATION_MOBILE: "aymt_link_confirmation_mobile",
        AYMT_LINK_CONFIRMATION_WWW: "aymt_link_confirmation_www",
        PROFILE_PLUS_ON_COMET: "profile_plus_on_comet",
        INSTAGRAM: "instagram",
        FB_WWW: "fb_www",
        COMET: "comet"
    });
    e.exports = a
}
), null);
__d("getGraphQLEnumSafe", ["flipObject", "memoizeByReference"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        if (b == null)
            return null;
        a = g(a);
        return !Object.prototype.hasOwnProperty.call(a, b) ? null : a[b]
    }
    var g = b("memoizeByReference")(b("flipObject"))
}
), null);
__d("useBrowserStorage", ["FBLogger", "React", "isStringNullOrEmpty"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c, d) {
        function e() {
            if (!a)
                return d;
            var e = a.getItem(c);
            try {
                return b("isStringNullOrEmpty")(e) ? d : JSON.parse(e)
            } catch (a) {
                return d
            }
        }
        e = g.useState(e);
        var f = e[0]
          , h = e[1]
          , i = g.useRef(f)
          , j = g.useRef(!1);
        g.useEffect(function() {
            if (!a)
                return;
            function d(d) {
                if (!j.current)
                    return;
                d = JSON.stringify(d);
                if (d == null)
                    return;
                try {
                    a.setItem(c, d),
                    j.current = !1
                } catch (c) {
                    d = c;
                    d != null && d.code === 22 && a.clear();
                    var e = b("FBLogger")("use_local_storage");
                    d instanceof Error && (e = e.catching(d));
                    e.warn("Cannot save to local storage.")
                }
            }
            d(f);
            return function() {
                d(i.current)
            }
        }, [c, a, f]);
        e = g.useCallback(function(a) {
            typeof a === "function" ? i.current = a(i.current) : i.current = a;
            j.current = !0;
            return h(a)
        }, []);
        return [f, e]
    }
}
), null);
__d("useLocalStorage", ["WebStorage", "useBrowserStorage"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    c = (g || b("WebStorage")).getLocalStorage;
    var h = c();
    function a(a, c) {
        return b("useBrowserStorage")(h, a, c)
    }
}
), null);
__d("useUserNonce", ["React", "RelayHooks", "useUserNonce_nonceMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a() {
        var a = b("RelayHooks").useMutation(g !== void 0 ? g : g = b("useUserNonce_nonceMutation.graphql"))
          , c = a[0];
        return h.useCallback(function(a) {
            var b = "";
            c({
                variables: {},
                onCompleted: function(b) {
                    function a(a) {
                        return b.apply(this, arguments)
                    }
                    a.toString = function() {
                        return b.toString()
                    }
                    ;
                    return a
                }(function(c) {
                    b = (c = (c = c.gen_user_nonce) == null ? void 0 : c.nonce) != null ? c : b;
                    a(b)
                })
            })
        }, [c])
    }
}
), null);
__d("BizKitPermissionDisclosureForPageModal.react", ["ix", "Base64", "useUserNonce", "BizKitPermissionDisclosureLoggingUtils", "BizKitConstants", "BizKitStrings", "BizKitPermissionDisclosureContext", "FlexLayout.react", "GeoButton.react", "GeoDivider.react", "GeoHeading.react", "GeoIcon.react", "GeoModal.react", "GeoModalFooter.react", "GeoModalHeader.react", "GeoSection.react", "GeoText.react", "qex", "Image.react", "PopupWindow", "React", "RelayHooks", "XBusinessClaimInstagramAccountWithOAuthController", "PageFamilyOfAppsLinkFlowSource", "URI", "asset", "fbicon", "geoMargin", "getGraphQLEnumSafe", "LayerHideSources", "keyMirror", "stylex", "useBoolean", "useLocalStorage", "BizKitPermissionDisclosureForPageModalQuery.graphql", "BizKitPermissionDisclosureForPageModalConfirmPermissionMutation.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i, j, k, l = b("React"), m = 80, n = 700, o = 800, p = b("keyMirror")({
        INITIAL: null,
        LOADING: null,
        ERROR: null,
        ACTIONABLE_ERROR: null,
        SUCCESS: null
    });
    (j || (j = b("stylex"))).inject(".h69wljid{margin-top:48px}", 1);
    j.inject(".g7d8m9fw{margin-bottom:48px}", 1);
    j.inject(".nj7eu8x7{margin-top:18px}", 1);
    j.inject(".l7ghb35v{margin-right:0}", 1, ".l7ghb35v{margin-left:0}");
    j.inject(".g7d8m9fw{margin-bottom:48px}", 1);
    j.inject(".kmwttqpk{margin-left:0}", 1, ".kmwttqpk{margin-right:0}");
    j.inject(".nj7eu8x7{margin-top:18px}", 1);
    j.inject(".l305kazv{width:508px}", 1);
    j.inject(".qmqpeqxj{border-top-left-radius:50%}", 1, ".qmqpeqxj{border-top-right-radius:50%}");
    j.inject(".e7u6y3za{border-top-right-radius:50%}", 1, ".e7u6y3za{border-top-left-radius:50%}");
    j.inject(".qwcclf47{border-bottom-right-radius:50%}", 1, ".qwcclf47{border-bottom-left-radius:50%}");
    j.inject(".nmlomj2f{border-bottom-left-radius:50%}", 1, ".nmlomj2f{border-bottom-right-radius:50%}");
    j.inject(".aglvbi8b{display:inline-block}", 1);
    j.inject(".pypt52fi{height:80px}", 1);
    j.inject(".lq84ybu9{overflow-x:hidden}", 1);
    j.inject(".hf30pyar{overflow-y:hidden}", 1);
    j.inject(".bob5073n{width:80px}", 1);
    j.inject(".aglvbi8b{display:inline-block}", 1);
    j.inject(".om3e55n1{position:relative}", 1);
    j.inject(".z6erz7xo{bottom:0}", 1);
    j.inject(".s8sjc6am{position:absolute}", 1);
    j.inject(".ql1abi13{right:0}", 1);
    j.inject(".n52wgbiq{transform:translateX(8px)}", .1);
    j.inject(".kgnml90y{background-color:var(--comment-background)}", 1);
    j.inject(".qmqpeqxj{border-top-left-radius:50%}", 1, ".qmqpeqxj{border-top-right-radius:50%}");
    j.inject(".e7u6y3za{border-top-right-radius:50%}", 1, ".e7u6y3za{border-top-left-radius:50%}");
    j.inject(".qwcclf47{border-bottom-right-radius:50%}", 1, ".qwcclf47{border-bottom-left-radius:50%}");
    j.inject(".nmlomj2f{border-bottom-left-radius:50%}", 1, ".nmlomj2f{border-bottom-right-radius:50%}");
    j.inject(".c7y9u1f0{flex-grow:0}", 1);
    j.inject(".jez8cy9q{flex-shrink:0}", 1);
    j.inject(".jvc6uz2b{height:36px}", 1);
    j.inject(".g90fjkqk{width:36px}", 1);
    j.inject(".o7bt71qk{flex-wrap:wrap}", 1);
    j.inject(".anf3k8p9{margin-top:20px}", 1);
    j.inject(".icbogavf{margin-bottom:-18px}", 1);
    j.inject(".dcpgn78f{margin-bottom:18px}", 1);
    j.inject(".ezi3dscr{width:50%}", 1);
    j.inject(".th51lws0{margin-top:8px}", 1);
    j.inject(".h07fizzr{margin-right:8px}", 1, ".h07fizzr{margin-left:8px}");
    j.inject(".kjdc1dyq{margin-bottom:0}", 1);
    j.inject(".p9ctufpz{margin-left:16px}", 1, ".p9ctufpz{margin-right:16px}");
    j.inject(".i85zmo3j{align-items:center}", 1);
    j.inject(".lvxyrigy{background-color:var(--negative)}", 1);
    j.inject(".qmqpeqxj{border-top-left-radius:50%}", 1, ".qmqpeqxj{border-top-right-radius:50%}");
    j.inject(".e7u6y3za{border-top-right-radius:50%}", 1, ".e7u6y3za{border-top-left-radius:50%}");
    j.inject(".qwcclf47{border-bottom-right-radius:50%}", 1, ".qwcclf47{border-bottom-left-radius:50%}");
    j.inject(".nmlomj2f{border-bottom-left-radius:50%}", 1, ".nmlomj2f{border-bottom-right-radius:50%}");
    j.inject(".alzwoclg{display:flex}", 1);
    j.inject(".jcxyg2ei{justify-content:center}", 1);
    j.inject(".p8bdhjjv{margin-bottom:16px}", 1);
    j.inject(".s1m0hq7j{padding-top:12px}", 1);
    j.inject(".aesu6q9g{padding-right:12px}", 1, ".aesu6q9g{padding-left:12px}");
    j.inject(".rj2hsocd{padding-bottom:12px}", 1);
    j.inject(".e4ay1f3w{padding-left:12px}", 1, ".e4ay1f3w{padding-right:12px}");
    j.inject(".i85zmo3j{align-items:center}", 1);
    j.inject(".p8bhzyuu{background-color:var(--positive)}", 1);
    j.inject(".qmqpeqxj{border-top-left-radius:50%}", 1, ".qmqpeqxj{border-top-right-radius:50%}");
    j.inject(".e7u6y3za{border-top-right-radius:50%}", 1, ".e7u6y3za{border-top-left-radius:50%}");
    j.inject(".qwcclf47{border-bottom-right-radius:50%}", 1, ".qwcclf47{border-bottom-left-radius:50%}");
    j.inject(".nmlomj2f{border-bottom-left-radius:50%}", 1, ".nmlomj2f{border-bottom-right-radius:50%}");
    j.inject(".alzwoclg{display:flex}", 1);
    j.inject(".jcxyg2ei{justify-content:center}", 1);
    j.inject(".p8bdhjjv{margin-bottom:16px}", 1);
    j.inject(".s1m0hq7j{padding-top:12px}", 1);
    j.inject(".aesu6q9g{padding-right:12px}", 1, ".aesu6q9g{padding-left:12px}");
    j.inject(".rj2hsocd{padding-bottom:12px}", 1);
    j.inject(".e4ay1f3w{padding-left:12px}", 1, ".e4ay1f3w{padding-right:12px}");
    var q = {
        container: {
            marginTop: "h69wljid",
            marginBottom: "g7d8m9fw"
        },
        containerNoHeader: {
            marginTop: "nj7eu8x7",
            marginEnd: "l7ghb35v",
            marginBottom: "g7d8m9fw",
            marginStart: "kmwttqpk"
        },
        content: {
            marginTop: "nj7eu8x7",
            width: "l305kazv"
        },
        image: {
            borderTopStartRadius: "qmqpeqxj",
            borderTopEndRadius: "e7u6y3za",
            borderBottomEndRadius: "qwcclf47",
            borderBottomStartRadius: "nmlomj2f",
            display: "aglvbi8b",
            height: "pypt52fi",
            overflowX: "lq84ybu9",
            overflowY: "hf30pyar",
            width: "bob5073n"
        },
        imageWrapper: {
            display: "aglvbi8b",
            position: "om3e55n1"
        },
        platformBadge: {
            bottom: "z6erz7xo",
            position: "s8sjc6am",
            right: "ql1abi13",
            transform: "n52wgbiq"
        },
        icon: {
            backgroundColor: "kgnml90y",
            borderTopStartRadius: "qmqpeqxj",
            borderTopEndRadius: "e7u6y3za",
            borderBottomEndRadius: "qwcclf47",
            borderBottomStartRadius: "nmlomj2f",
            flexGrow: "c7y9u1f0",
            flexShrink: "jez8cy9q",
            height: "jvc6uz2b",
            width: "g90fjkqk"
        },
        permissionsList: {
            flexWrap: "o7bt71qk",
            marginTop: "anf3k8p9",
            marginBottom: "icbogavf"
        },
        permission: {
            marginBottom: "dcpgn78f",
            width: "ezi3dscr"
        },
        permissionLabel: {
            marginTop: "th51lws0",
            marginEnd: "h07fizzr",
            marginBottom: "kjdc1dyq",
            marginStart: "p9ctufpz"
        },
        errorIcon: {
            alignItems: "i85zmo3j",
            backgroundColor: "lvxyrigy",
            borderTopStartRadius: "qmqpeqxj",
            borderTopEndRadius: "e7u6y3za",
            borderBottomEndRadius: "qwcclf47",
            borderBottomStartRadius: "nmlomj2f",
            display: "alzwoclg",
            justifyContent: "jcxyg2ei",
            marginBottom: "p8bdhjjv",
            paddingTop: "s1m0hq7j",
            paddingEnd: "aesu6q9g",
            paddingBottom: "rj2hsocd",
            paddingStart: "e4ay1f3w"
        },
        successIcon: {
            alignItems: "i85zmo3j",
            backgroundColor: "p8bhzyuu",
            borderTopStartRadius: "qmqpeqxj",
            borderTopEndRadius: "e7u6y3za",
            borderBottomEndRadius: "qwcclf47",
            borderBottomStartRadius: "nmlomj2f",
            display: "alzwoclg",
            justifyContent: "jcxyg2ei",
            marginBottom: "p8bdhjjv",
            paddingTop: "s1m0hq7j",
            paddingEnd: "aesu6q9g",
            paddingBottom: "rj2hsocd",
            paddingStart: "e4ay1f3w"
        }
    }
      , r = ["FEATURE_CONFIRMATION_NO_REAUTH", "FEATURE_CONFIRMATION_REAUTH"];
    function a(a) {
        var c, d, e, f = a.pageID, g = a.isHeaderShown;
        g = g === void 0 ? !0 : g;
        var k = babelHelpers.objectWithoutPropertiesLoose(a, ["pageID", "isHeaderShown"]);
        a = b("RelayHooks").useLazyLoadQuery(h !== void 0 ? h : h = b("BizKitPermissionDisclosureForPageModalQuery.graphql"), {
            pageID: f,
            pictureSize: m * 2
        }, {
            fetchPolicy: "network-only"
        });
        a = a.page;
        var n = a == null ? void 0 : a.business_presence_node
          , o = n == null ? void 0 : n.business_presence_linked_instagram
          , p = n == null ? void 0 : n.id
          , x = o == null ? void 0 : o.id
          , y = b("RelayHooks").useMutation(i !== void 0 ? i : i = b("BizKitPermissionDisclosureForPageModalConfirmPermissionMutation.graphql"))
          , C = y[0];
        y = b("useBoolean")(!1);
        var D = y.value
          , E = y.set;
        y = l.useState(!1);
        var F = y[0]
          , G = y[1];
        y = l.useState(null);
        var H = y[0]
          , I = y[1];
        y = b("useBoolean")(!1);
        var J = y.value
          , K = y.set;
        y = b("useLocalStorage")(b("BizKitConstants").PERMISSION_DISCLOSURE_MODAL_DISMISS_RECORDS, {});
        var L = y[0]
          , M = y[1]
          , N = l.useMemo(function() {
            return z(f, x, k.entryPoint, n == null ? void 0 : n.tool_readiness_status, k.linkFlowSource)
        }, [x, n, f, k.entryPoint, k.linkFlowSource])
          , O = l.useRef(null);
        l.useEffect(function() {
            k.isShown === void 0 && O.current !== f && !L[f] && (E(r.includes(n == null ? void 0 : n.tool_readiness_status)),
            r.includes(n == null ? void 0 : n.tool_readiness_status) && b("BizKitPermissionDisclosureLoggingUtils").logStart(N),
            O.current = f)
        });
        l.useEffect(function() {
            k.isShown !== void 0 && (E(k.isShown),
            k.isShown === !0 && b("BizKitPermissionDisclosureLoggingUtils").logStart(N))
        }, [N, n, k.entryPoint, k.isShown, E]);
        var P = window.location.origin + b("XBusinessClaimInstagramAccountWithOAuthController").getURIBuilder().getURI().toString()
          , Q = l.useContext(b("BizKitPermissionDisclosureContext"))
          , R = function(a) {
            if (p == null)
                return;
            C({
                variables: {
                    bpnID: p,
                    code: a,
                    redirectURL: P,
                    entryPoint: N.entryPoint,
                    linkFlowSource: b("getGraphQLEnumSafe")(b("PageFamilyOfAppsLinkFlowSource"), N.linkFlowSource)
                },
                onError: function(a) {
                    I({
                        header: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_ERROR_HEADER,
                        message: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_ERROR_MESSAGE
                    }),
                    b("BizKitPermissionDisclosureLoggingUtils").logFailureUnactionable(N),
                    k.onConfirmFailure !== void 0 && k.onConfirmFailure(),
                    G(!1)
                },
                onCompleted: function(c) {
                    var d;
                    if (((d = c.confirm_feature_permission) == null ? void 0 : d.error_message) != null && ((d = c.confirm_feature_permission) == null ? void 0 : d.error_header) != null) {
                        I({
                            header: (d = c.confirm_feature_permission) == null ? void 0 : d.error_header,
                            message: (d = c.confirm_feature_permission) == null ? void 0 : d.error_message,
                            isActionable: !0
                        });
                        b("BizKitPermissionDisclosureLoggingUtils").logFailureActionable(N);
                        k.onConfirmFailure !== void 0 && k.onConfirmFailure()
                    } else
                        b("BizKitPermissionDisclosureLoggingUtils").logSuccess(N),
                        Q.hideAlertCard(),
                        a != null ? K(!0) : U(),
                        k.onConfirmSuccess !== void 0 && k.onConfirmSuccess();
                    G(!1)
                }
            })
        };
        l.useEffect(function() {
            if (F) {
                var a = function(a) {
                    if (a.origin !== window.location.origin || !a.data.isFromOAuth)
                        return;
                    a.data.code === "" || a.data.code == null ? (I({
                        header: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_ERROR_HEADER,
                        message: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_ERROR_MESSAGE
                    }),
                    G(!1),
                    b("BizKitPermissionDisclosureLoggingUtils").logIGLoginFailure(N),
                    k.onConfirmFailure !== void 0 && k.onConfirmFailure()) : (R(a.data.code),
                    b("BizKitPermissionDisclosureLoggingUtils").logIGLoginSuccess(N),
                    k.onConfirmSuccess !== void 0 && k.onConfirmSuccess())
                };
                window.addEventListener("message", a);
                return function() {
                    window.removeEventListener("message", a)
                }
            }
        });
        var S = function() {
            var a = O.current;
            a != null && M(function(b) {
                return babelHelpers["extends"]({}, b, (b = {},
                b[a] = !0,
                b))
            })
        }
          , T = function() {
            I(null),
            G(!1),
            K(!1)
        }
          , U = function() {
            k.onHide !== void 0 ? k.onHide() : (S(),
            E(!1)),
            T()
        }
          , V = b("useUserNonce")();
        y = function() {
            k.onClickConfirmCallback !== void 0 && k.onClickConfirmCallback();
            G(!0);
            if ((n == null ? void 0 : n.tool_readiness_status) === "FEATURE_CONFIRMATION_REAUTH") {
                var a;
                a = (a = b("qex")._("1740362")) != null ? a : !1;
                var c = a ? W : null
                  , d = (a = b("qex")._("1764797")) != null ? a : !1;
                V(function(a) {
                    d ? B({
                        igUsername: c,
                        redirectURL: P,
                        nonce: a
                    }) : A({
                        igUsername: c,
                        redirectURL: P,
                        nonce: a
                    })
                });
                b("BizKitPermissionDisclosureLoggingUtils").logIGLoginStart(N)
            } else
                R()
        }
        ;
        if (!n)
            return null;
        c = a == null ? void 0 : (c = a.profile_picture) == null ? void 0 : c.uri;
        a = a == null ? void 0 : a.name;
        if (c == null || a == null)
            return null;
        d = o == null ? void 0 : (d = o.profile_picture) == null ? void 0 : d.uri;
        var W = o == null ? void 0 : o.username;
        if (d == null || W == null)
            return null;
        o = function(a) {
            U();
            b("BizKitPermissionDisclosureLoggingUtils").logDismiss(N);
            var c = null;
            switch (a) {
            case b("LayerHideSources").BLUR:
                c = " UI_FEATURE_CONFIRMATION_DISMISS_VIA_BACKGROUND";
                break;
            case b("LayerHideSources").LAYER_CANCEL_BUTTON:
                c = "UI_FEATURE_CONFIRMATION_DISMISS_VIA_CLOSE_BUTTON";
                break;
            case b("LayerHideSources").ESCAPE:
                c = " UI_FEATURE_CONFIRMATION_DISMISS_VIA_ESC";
                break
            }
            c != null && b("BizKitPermissionDisclosureLoggingUtils").logCustomEvent(N, c)
        }
        ;
        e = (e = b("qex")._("1745110")) != null ? e : !1;
        return l.jsxs(b("GeoModal.react"), {
            footer: l.jsx(b("GeoModalFooter.react"), {
                primaryButton: l.jsx(t, {
                    pageID: f,
                    instagramID: x,
                    entryPoint: k.entryPoint,
                    linkFlowSource: N.linkFlowSource,
                    isReauthFlow: (n == null ? void 0 : n.tool_readiness_status) === "FEATURE_CONFIRMATION_REAUTH",
                    modalState: s({
                        isLoading: F,
                        isSuccessful: J,
                        error: H
                    }),
                    onClickConfirm: y,
                    onClickDismiss: U,
                    onClickRefresh: T
                })
            }),
            header: l.jsx(b("GeoModalHeader.react"), {
                heading: g ? b("BizKitStrings").WELCOME_MODAL_HEADER : ""
            }),
            isShown: D,
            label: g ? b("BizKitStrings").WELCOME_MODAL_HEADER : "",
            hideOnEscape: !e,
            onHide: o,
            width: 636,
            children: [g ? l.jsx(b("GeoDivider.react"), {
                xstyle: b("geoMargin").all0
            }) : null, l.jsx(b("GeoSection.react"), {
                children: l.jsx("div", {
                    className: (j || (j = b("stylex")))(g ? q.container : q.containerNoHeader),
                    children: H == null ? J ? l.jsx(w, {}) : l.jsx(u, {
                        igProfilePicture: d,
                        igUsername: W,
                        pageProfilePicture: c,
                        pageName: a,
                        loggingData: N
                    }) : l.jsx(v, {
                        errorHeader: H.header,
                        errorMessage: H.message
                    })
                })
            }), l.jsx(b("GeoDivider.react"), {
                xstyle: b("geoMargin").all0
            })]
        })
    }
    function s(a) {
        var b = a.isLoading
          , c = a.isSuccessful;
        a = a.error;
        if (b)
            return p.LOADING;
        if (a != null)
            return a.isActionable === !0 ? p.ACTIONABLE_ERROR : p.ERROR;
        return c ? p.SUCCESS : p.INITIAL
    }
    function t(a) {
        var c = a.pageID
          , d = a.instagramID
          , e = a.entryPoint
          , f = a.modalState
          , g = a.isReauthFlow
          , h = a.linkFlowSource
          , i = a.onClickConfirm
          , j = a.onClickDismiss
          , k = a.onClickRefresh
          , m = a.onClickConfirmCallback;
        switch (f) {
        case p.ERROR:
            return l.jsx(b("GeoButton.react"), {
                label: b("BizKitStrings").OK,
                variant: "primary",
                onClick: j
            });
        case p.ACTIONABLE_ERROR:
            a = function() {
                b("BizKitPermissionDisclosureLoggingUtils").logTryAgain({
                    pageID: c,
                    linkedAccountID: d,
                    isReauthFlow: g,
                    entryPoint: e,
                    linkFlowSource: h
                }),
                k()
            }
            ;
            return l.jsx(b("GeoButton.react"), {
                label: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_BUTTON_LABEL_TRY_AGAIN,
                variant: "primary",
                onClick: a
            });
        case p.LOADING:
            return l.jsx(b("GeoButton.react"), {
                isDisabled: !0,
                label: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_BUTTON_LABEL_CONFIRM,
                variant: "primary",
                onClick: i
            });
        case p.SUCCESS:
            return l.jsx(b("GeoButton.react"), {
                label: b("BizKitStrings").OK,
                variant: "primary",
                onClick: j
            });
        default:
            a = function() {
                m !== void 0 && m(),
                i(),
                b("BizKitPermissionDisclosureLoggingUtils").logConfirm({
                    pageID: c,
                    linkedAccountID: d,
                    isReauthFlow: g,
                    entryPoint: e,
                    linkFlowSource: h
                })
            }
            ;
            return l.jsx(b("GeoButton.react"), {
                "data-testid": void 0,
                label: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_BUTTON_LABEL_CONFIRM,
                variant: "primary",
                onClick: a
            })
        }
    }
    function u(a) {
        var c = a.pageProfilePicture
          , d = a.igProfilePicture
          , e = a.pageName
          , f = a.igUsername;
        a = a.loggingData;
        return l.jsxs(b("FlexLayout.react"), {
            direction: "vertical",
            align: "center",
            children: [l.jsxs("div", {
                children: [l.jsxs("div", {
                    className: (j || (j = b("stylex")))(q.imageWrapper),
                    children: [l.jsx("div", {
                        className: j(q.image),
                        children: l.jsx(b("Image.react"), {
                            src: c,
                            width: m,
                            height: m
                        })
                    }), l.jsx("div", {
                        className: j(q.platformBadge),
                        children: l.jsx(b("Image.react"), {
                            src: g("1171995")
                        })
                    })]
                }), l.jsxs("div", {
                    className: j(q.imageWrapper, b("geoMargin").horiz12),
                    children: [l.jsx("div", {
                        className: j(q.image),
                        children: l.jsx(b("Image.react"), {
                            src: d,
                            width: m,
                            height: m
                        })
                    }), l.jsx("div", {
                        className: j(q.platformBadge),
                        children: l.jsx(b("Image.react"), {
                            src: g("1171996")
                        })
                    })]
                })]
            }), l.jsxs(b("FlexLayout.react"), {
                direction: "vertical",
                align: "center",
                className: j(q.content),
                children: [l.jsx(b("GeoHeading.react"), {
                    level: 1,
                    textAlign: "center",
                    children: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_HEADING
                }), l.jsx(b("GeoText.react"), {
                    xstyle: b("geoMargin").top12,
                    children: b("BizKitStrings").getPermissionDisclosureModalFirstParagraph(e, f, a)
                }), l.jsx(b("GeoText.react"), {
                    xstyle: b("geoMargin").top12,
                    children: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_SECOND_PARAGRAPH
                }), l.jsx(x, {})]
            })]
        })
    }
    function v(a) {
        var c = a.errorHeader;
        a = a.errorMessage;
        return l.jsxs(b("FlexLayout.react"), {
            direction: "vertical",
            align: "center",
            justify: "center",
            children: [l.jsx("div", {
                className: (j || (j = b("stylex")))(q.errorIcon),
                children: l.jsx(b("Image.react"), {
                    src: g("1355974")
                })
            }), l.jsx(b("GeoHeading.react"), {
                level: 1,
                textAlign: "center",
                children: c
            }), l.jsx(b("GeoText.react"), {
                xstyle: b("geoMargin").top8,
                children: a
            })]
        })
    }
    function w() {
        return l.jsxs(b("FlexLayout.react"), {
            direction: "vertical",
            align: "center",
            justify: "center",
            children: [l.jsx("div", {
                className: (j || (j = b("stylex")))(q.successIcon),
                children: l.jsx(b("Image.react"), {
                    src: g("1265633")
                })
            }), l.jsx(b("GeoHeading.react"), {
                level: 1,
                textAlign: "center",
                children: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_SUCCESS_HEADER
            }), l.jsx(b("GeoText.react"), {
                xstyle: b("geoMargin").top8,
                children: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_SUCCESS_MESSAGE
            })]
        })
    }
    function x() {
        return l.jsxs(b("FlexLayout.react"), {
            className: (j || (j = b("stylex")))(q.permissionsList),
            children: [l.jsx(y, {
                icon: b("fbicon")._(g("729676"), 20),
                children: l.jsx(b("GeoText.react"), {
                    children: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_ENTITY_POSTS
                })
            }), l.jsx(y, {
                icon: b("fbicon")._(g("508084"), 20),
                children: l.jsx(b("GeoText.react"), {
                    children: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_ENTITY_ADS
                })
            }), l.jsx(y, {
                icon: b("fbicon")._(g("542883"), 20),
                children: l.jsx(b("GeoText.react"), {
                    children: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_ENTITY_MESSAGES
                })
            }), l.jsx(y, {
                icon: b("fbicon")._(g("709451"), 20),
                children: l.jsx(b("GeoText.react"), {
                    children: b("BizKitStrings").PERMISSION_DISCLOSURE_MODAL_ENTITY_CONTACTS
                })
            })]
        })
    }
    function y(a) {
        var c = a.children;
        a = a.icon;
        return l.jsxs(b("FlexLayout.react"), {
            direction: "horizontal",
            className: (j || (j = b("stylex")))(q.permission),
            children: [l.jsx(b("FlexLayout.react"), {
                align: "center",
                className: j(q.icon),
                justify: "center",
                children: l.jsx(b("GeoIcon.react"), {
                    icon: a
                })
            }), l.jsx("div", {
                className: j(q.permissionLabel),
                children: c
            })]
        })
    }
    function z(a, b, c, d, e) {
        return {
            pageID: a,
            linkedAccountID: b,
            entryPoint: c,
            isReauthFlow: d === "FEATURE_CONFIRMATION_REAUTH",
            linkFlowSource: e
        }
    }
    function A(a) {
        var c = a.igUsername
          , d = a.redirectURL;
        a = a.nonce;
        var e = new (k || (k = b("URI")))("https://api.instagram.com/oauth/authorize/");
        a = {
            redirect_uri: d,
            app_id: 17951132926087090,
            response_type: "code",
            force_reauth: !0,
            state: a,
            e_un: b("Base64").encode((d = c) != null ? d : "")
        };
        e.addQueryData(a);
        b("PopupWindow").open(e.toString(), n, o)
    }
    function B(a) {
        var c = a.igUsername
          , d = a.redirectURL;
        a = a.nonce;
        var e = new (k || (k = b("URI")))("https://www.instagram.com/accounts/login/")
          , f = new k("/oauth/authorize/");
        f.addQueryData({
            redirect_uri: d,
            app_id: 17951132926087090,
            response_type: "code",
            scope: "basic",
            state: a
        });
        e.addQueryData({
            e_un: b("Base64").encode((d = c) != null ? d : ""),
            force_authentication: 1,
            next: f.toString(),
            platform_app_id: 17951132926087090
        });
        b("PopupWindow").open(e.toString(), n, o)
    }
}
), null);
__d("BusinessSharingExperimentUtils", ["QE2Logger", "gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isEligibleForBizComposerInPPT = a;
    f.isEligibleForBizComposerTailoring = c;
    f.isEligibleForBizComposerPlacementImprovement = d;
    f.isInColumnsCustomizerQETestGroup = e;
    f.shouldSeeFeedAndGridTab = g;
    f.shouldSeeSplitFeedAndGridView = h;
    f.logExposureForPPTBizComposerTest = i;
    function a() {
        return b("qex")._("1419297") === !0
    }
    function c() {
        return b("qex")._("1699017") === !0
    }
    function d() {
        return b("qex")._("1663807") === !0
    }
    function e() {
        var a;
        return (a = b("qex")._("1623240")) != null ? a : !1
    }
    function g() {
        var a;
        return (a = b("qex")._("1745596")) != null ? a : !1
    }
    function h() {
        var a;
        return (a = b("qex")._("1748570")) != null ? a : !1
    }
    c = (a = b("gkx"))("1663812");
    f.BIZ_SHARING_DEPRECATE_AD_POST_GK = c;
    d = a("1663813");
    f.BIZ_SHARING_DEPRECATE_SCHEDULUED_POST_IN_AD_GK = d;
    e = a("1391884");
    f.BIZ_SHARING_CM_DRAFT_FUNCTION_GK = e;
    g = a("1708086");
    f.VCK_BIZCOMPOSER_INTEGRATION_GK = g;
    function i() {
        b("QE2Logger").logExposureForUser("biz_sharing_ppt_biz_composer_opt_out_universe")
    }
}
), null);
__d("FDSPrivateDraggableListItemRenderer.react", ["cx", "AbstractDraggableItem.react", "FBOverlayBase.react", "FDSCloseButton.react", "FDSPrivateDraggableItemContext", "FDSPrivateDraggableListContext", "FDSPrivateListItemIDContext", "FDSPrivateThemeAtomsType", "FDSPrivateThemeContext.react", "React", "makeFDSStandardComponent", "stylex", "useUniqueID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a) {
        a.stopPropagation()
    }
    function a(a) {
        var c = a.item
          , d = c.onDragStart
          , e = c.onDragEnd;
        c = babelHelpers.objectWithoutPropertiesLoose(c, ["onDragStart", "onDragEnd"]);
        var f = a.onCancelDrag
          , g = a.onDrag
          , j = a.onDrop
          , k = a.onGrab
          , l = a.onRemove;
        a = a.useAbsolute;
        var m = c.id
          , n = h.useContext(b("FDSPrivateDraggableListContext"))
          , o = n.draggingRef
          , p = n.onDragStart
          , q = n.onDragEnd;
        n = h.useContext(b("FDSPrivateThemeContext.react"));
        n = n.id === b("FDSPrivateThemeAtomsType").FDS_GEODESIC;
        var r = h.useState(!1)
          , s = r[0]
          , t = r[1];
        r = h.useCallback(function(a) {
            a.stopPropagation(),
            l(m)
        }, [m, l]);
        var u = b("useUniqueID")();
        u = babelHelpers["extends"]({}, c, {
            label: h.jsx(b("FBOverlayBase.react"), {
                children: h.jsx("div", {
                    className: "t8j81tsk arnvtdg1 rnur6hgu ioxsrz27",
                    id: u,
                    ref: s ? o : null,
                    children: c.label
                })
            }),
            actionButton: c.isRemovable ? h.jsx("div", {
                className: "_7ivz",
                onKeyDown: i,
                children: h.jsx(b("FDSCloseButton.react"), {
                    onClick: r
                })
            }) : null
        });
        s = b("FDSPrivateListItemIDContext");
        var v = h.useCallback(function() {
            t(!0),
            p(),
            d && d(m)
        }, [m, d, p])
          , w = h.useCallback(function() {
            t(!1),
            q(),
            e && e(m)
        }, [m, e, q]);
        o = h.useCallback(function(a, b) {
            v(),
            k(a, b)
        }, [k, v]);
        r = h.useCallback(function() {
            j(),
            w()
        }, [j, w]);
        var x = h.useCallback(function() {
            f(),
            w()
        }, [w, f]);
        return h.jsx(s.Provider, {
            value: m,
            children: h.jsx(b("FDSPrivateDraggableItemContext").Provider, {
                value: !0,
                children: h.jsx("div", {
                    className: "_7iv-" + (n ? "" : " _8_-u") + (n ? " _8_-v" : "") + (c.isAccordion ? " _80ed" : ""),
                    children: h.jsx(b("AbstractDraggableItem.react"), {
                        item: u,
                        onCancelDrag: x,
                        onDrag: g,
                        onDrop: r,
                        onGrab: o,
                        onRemove: l,
                        useAbsolute: a
                    })
                })
            })
        })
    }
    c = b("makeFDSStandardComponent")("FDSPrivateDraggableListItemRenderer", a);
    e.exports = c
}
), null);
__d("FDSDraggableList.react", ["cx", "AbstractDraggableList.react", "FDSListItemContext", "FDSListSelectorContext", "FDSPrivateBoldItemLabelContext", "FDSPrivateDraggableListContext", "FDSPrivateDraggableListItemRenderer.react", "FDSPrivateNumberedListContext", "FDSPrivateThemeAtomsType", "FDSPrivateThemeContext.react", "FDSText.react", "Keys", "ObserveResize.react", "React", "divisorSignedModulo", "emptyFunction", "makeFDSStandardComponent", "stylex", "uniqueID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = b("uniqueID")(),
            d.$2 = function(a) {
                d.$3({
                    focusedItemID: a
                })
            }
            ,
            d.$4 = function() {
                d.setState({
                    isDragging: !0
                })
            }
            ,
            d.$5 = function() {
                d.setState({
                    isDragging: !1
                })
            }
            ,
            d.state = {
                isDragging: !1,
                itemsByID: {},
                contextValue: {
                    itemIDs: d.$6(),
                    selectedItemIDs: [],
                    focusedItemID: null,
                    deregisterItem: b("emptyFunction"),
                    registerItem: b("emptyFunction"),
                    onActivate: b("emptyFunction"),
                    onFocus: d.$2
                },
                listItemContextValue: {
                    density: "sparse",
                    isSelectable: !0
                },
                draggableListContextValue: {
                    isDragging: !1,
                    draggingRef: b("emptyFunction"),
                    draggingRect: null,
                    onDragStart: d.$4,
                    onDragEnd: d.$5
                }
            },
            d.$7 = function() {
                return d.state.contextValue.itemIDs
            }
            ,
            d.$8 = function(a) {
                var b = d.$7();
                d.props.onRemove(b.filter(function(b) {
                    return b !== a
                }), a)
            }
            ,
            d.$9 = function(a, b) {
                var c = d.$7();
                if (a !== b) {
                    var e = c.indexOf(a);
                    c.splice(e, 1);
                    if (b != null) {
                        e = c.indexOf(b);
                        c.splice(e, 0, a)
                    } else
                        c.push(a)
                }
                d.props.onReorder(c, a, b)
            }
            ,
            d.$14 = function(a) {
                var c = d.$7();
                switch (a.keyCode) {
                case b("Keys").ALT:
                    d.$15({
                        isDragging: !0
                    });
                    break;
                case b("Keys").DOWN:
                    a.preventDefault();
                    !a.altKey ? d.$12(1) : d.$10();
                    break;
                case b("Keys").UP:
                    a.preventDefault();
                    !a.altKey ? d.$12(-1) : d.$11();
                    break;
                case b("Keys").HOME:
                    a.preventDefault();
                    d.$3({
                        focusedItemID: c[0]
                    });
                    break;
                case b("Keys").END:
                    a.preventDefault(),
                    d.$3({
                        focusedItemID: c[c.length - 1]
                    })
                }
            }
            ,
            d.$16 = function(a) {
                a.keyCode === b("Keys").ALT && d.$15({
                    isDragging: !1
                })
            }
            ,
            d.$17 = function(a) {
                d.$15({
                    draggingRect: a
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getDerivedStateFromProps = function(a, b) {
            var d = h.Children.map(a.children, function(a) {
                return a.props.itemID
            })
              , e = a.itemIDs.filter(function(a) {
                return d.includes(a)
            });
            a = c.getItemsByID(a.children);
            return {
                contextValue: babelHelpers["extends"]({}, b.contextValue, {
                    itemIDs: e
                }),
                itemsByID: a
            }
        }
        ;
        var d = c.prototype;
        d.$10 = function() {
            var a = this.$7()
              , c = this.state.contextValue.focusedItemID
              , d = a.indexOf(c);
            if (c != null && this.state.itemsByID[c].isMovable) {
                d = b("divisorSignedModulo")(d + 2, a.length + 1);
                while (d !== a.length && !this.state.itemsByID[a[d]].isMovable)
                    d += 1;
                this.$9(c, a[d])
            }
        }
        ;
        d.$11 = function() {
            var a = this.$7()
              , c = this.state.contextValue.focusedItemID
              , d = a.indexOf(c);
            if (c != null && this.state.itemsByID[c].isMovable) {
                d = b("divisorSignedModulo")(d - 1, a.length + 1);
                while (d !== a.length && !this.state.itemsByID[a[d]].isMovable)
                    d -= 1;
                this.$9(c, a[d])
            }
        }
        ;
        d.$12 = function(a) {
            var c = this.$7()
              , d = this.state.contextValue.focusedItemID;
            d = d != null ? this.$13(d) : 0;
            this.$3({
                focusedItemID: c[b("divisorSignedModulo")(d + a, c.length)]
            })
        }
        ;
        d.$3 = function(a) {
            this.setState(function(b) {
                return {
                    contextValue: babelHelpers["extends"]({}, b.contextValue, a)
                }
            })
        }
        ;
        d.$15 = function(a) {
            this.setState(function(b) {
                return {
                    draggableListContextValue: babelHelpers["extends"]({}, b.draggableListContextValue, a)
                }
            })
        }
        ;
        d.$18 = function(a) {
            this.state.draggableListContextValue.draggingRef !== a && this.$15({
                draggingRef: a
            })
        }
        ;
        d.$13 = function(a) {
            return this.$7().findIndex(function(b) {
                return b === a
            })
        }
        ;
        c.getItemsByID = function(a) {
            var b = {};
            h.Children.forEach(a, function(a) {
                var c;
                b[a.props.itemID] = {
                    id: a.props.itemID,
                    isAccordion: "label"in a.props,
                    isMovable: a.props.isMovable,
                    isRemovable: (c = a.props.isRemovable) != null ? c : !1,
                    label: a,
                    onDragStart: a.props.onDragStart,
                    onDragEnd: a.props.onDragEnd
                }
            });
            return b
        }
        ;
        d.$6 = function() {
            var a = h.Children.map(this.props.children, function(a) {
                return a.props.itemID
            });
            return this.props.itemIDs.filter(function(b) {
                return a.includes(b)
            })
        }
        ;
        d.render = function() {
            var a = this
              , c = b("FDSListSelectorContext")
              , d = this.props
              , e = d.title != null || d.description != null
              , f = this.$7();
            if (f.length === 0) {
                var g;
                return (g = d.emptyListContent) != null ? g : null
            }
            return h.jsx(b("FDSPrivateNumberedListContext").Provider, {
                value: this.props.isNumbered,
                children: h.jsx(b("FDSPrivateBoldItemLabelContext").Provider, {
                    value: this.props.hasBoldItemLabel,
                    children: h.jsx(b("FDSListItemContext").Provider, {
                        value: this.state.listItemContextValue,
                        children: h.jsx(c.Provider, {
                            value: this.state.contextValue,
                            children: h.jsx(b("FDSPrivateDraggableListContext").Provider, {
                                value: this.state.draggableListContextValue,
                                children: h.jsx(b("ObserveResize.react"), {
                                    onResize: this.$17,
                                    children: function(c) {
                                        a.$18(c);
                                        return h.jsxs("div", {
                                            className: d.margin,
                                            onKeyDown: a.$14,
                                            onKeyUp: a.$16,
                                            children: [e ? h.jsxs("div", {
                                                className: "_7ivg",
                                                children: [h.jsxs("div", {
                                                    className: "osmv8kjw ax8g0185 onjcwjn2 olevwlzt",
                                                    id: a.$1,
                                                    role: "heading",
                                                    children: [h.jsx("div", {
                                                        className: "osmv8kjw ax8g0185 olevwlzt",
                                                        children: h.jsx(b("FDSText.react"), {
                                                            size: "header3",
                                                            weight: "bold",
                                                            children: d.title
                                                        })
                                                    }), h.jsx("div", {
                                                        className: "tn72i4zi osmv8kjw ax8g0185 olevwlzt",
                                                        children: h.jsx(b("FDSText.react"), {
                                                            size: "body2",
                                                            children: d.description
                                                        })
                                                    })]
                                                }), h.jsx("div", {
                                                    className: "osmv8kjw hz5dbled olevwlzt",
                                                    children: d.titleButton
                                                })]
                                            }) : null, h.jsxs("div", {
                                                "aria-labelledby": a.$1,
                                                className: "_7iv0",
                                                children: [h.jsx(b("AbstractDraggableList.react"), {
                                                    className: "_7iw5" + (a.state.isDragging ? " uiContextualLayerParent" : ""),
                                                    itemIDs: f,
                                                    itemsByID: a.state.itemsByID,
                                                    itemsRenderer: b("FDSPrivateDraggableListItemRenderer.react"),
                                                    onRemove: a.$8,
                                                    onReorder: a.$9,
                                                    placeholderRenderer: i,
                                                    role: "listbox"
                                                }), d.addToListItem]
                                            })]
                                        })
                                    }
                                })
                            })
                        })
                    })
                })
            })
        }
        ;
        return c
    }(h.Component);
    a.defaultProps = {
        hasBoldItemLabel: !1,
        isNumbered: !1
    };
    function i() {
        var a = h.useContext(b("FDSPrivateDraggableListContext"));
        a = a.draggingRect;
        var c = h.useContext(b("FDSPrivateThemeContext.react"));
        c = c.id === b("FDSPrivateThemeAtomsType").FDS_GEODESIC;
        return h.jsx("div", {
            className: "_89is _7iv-" + (c ? "" : " _8_-u") + (c ? " _8_-v" : ""),
            style: {
                width: a == null ? void 0 : a.width,
                height: a == null ? void 0 : a.height
            }
        })
    }
    c = b("makeFDSStandardComponent")("FDSDraggableList", a);
    e.exports = c
}
), null);
__d("GeoDateRangePickerUtils", ["GeoDateRangePickerDefaultPresets", "LocalDate", "LocalDateInterval", "React", "divisorSignedModulo"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useCompare = a;
    f.useOnChangeFunctions = c;
    f.getIntervalFromPreset = i;
    f.getIntervalsFromValue = d;
    f.getValidity = e;
    f.getValidityMessage = k;
    var g = b("React");
    function a(a) {
        var b = a.isCompareEnabled
          , c = a.initialCompareInterval
          , d = a.initialComparePreset
          , e = a.interval
          , f = a.timezoneID;
        a = g.useState(c);
        var h = a[0]
          , j = a[1];
        a = g.useState(d);
        var k = a[0];
        d = a[1];
        a = g.useState(b && c != null);
        c = a[0];
        a = a[1];
        g.useEffect(function() {
            if (b && k != null) {
                var a = i({
                    type: "compare",
                    presetValue: k,
                    interval: e,
                    timezoneID: f
                });
                a = a.newInterval;
                a && j(a)
            }
        }, [k, e, b, f]);
        return {
            compareInterval: h,
            setCompareInterval: j,
            comparePreset: k,
            setComparePreset: d,
            isCompareChecked: c,
            setIsCompareChecked: a
        }
    }
    function h(a, c) {
        var d = a == null ? void 0 : a.start
          , e = a == null ? void 0 : a.end.subtractDays(1);
        if (a == null)
            d = c;
        else if (d != null && e != null)
            if (c.equals(d) || c.equals(e))
                if (d.equals(e))
                    return null;
                else
                    d = c,
                    e = c;
            else
                c.isBefore(d) ? d = c : e = c;
        return new (b("LocalDateInterval"))((a = d) != null ? a : c,(a = (d = e) == null ? void 0 : d.addDays(1)) != null ? a : c.addDays(1))
    }
    function c(a) {
        var c = a.interval
          , d = a.setInterval
          , e = a.compareInterval
          , f = a.setCompareInterval
          , j = a.comparePreset
          , k = a.selectionPresets
          , l = a.setComparePreset
          , m = a.setSelectedPreset
          , n = a.isCompareEnabled
          , o = a.timezoneID
          , p = ["selectedStart", "selectedEnd", "compareStart", "compareEnd"];
        a = g.useState("selectedStart");
        var q = a[0]
          , r = a[1];
        function s(a) {
            a = a === "compare";
            if (a) {
                return {
                    startDate: e == null ? void 0 : e.start,
                    endDate: e == null ? void 0 : (a = e.end) == null ? void 0 : a.subtractDays(1),
                    value: e,
                    setValue: f,
                    setPreset: l
                }
            }
            return {
                startDate: c == null ? void 0 : c.start,
                endDate: c == null ? void 0 : (a = c.end) == null ? void 0 : a.subtractDays(1),
                value: c,
                setValue: d,
                setPreset: m
            }
        }
        function t(a) {
            m(b("GeoDateRangePickerDefaultPresets").CUSTOM.value);
            a = h(c, a);
            if (a == null) {
                r("selectedStart");
                m(null);
                d(null);
                return
            }
            d(a);
            r(q === "selectedStart" ? "selectedEnd" : "selectedStart")
        }
        function u(a, c) {
            return a.equals(c) ? new (b("LocalDateInterval"))(a,a.addDays(1)) : new (b("LocalDateInterval"))(a.min(c),a.max(c).addDays(1))
        }
        function v(a) {
            var g;
            switch (q) {
            case "selectedStart":
                m(b("GeoDateRangePickerDefaultPresets").CUSTOM.value);
                d(u(a, (g = c == null ? void 0 : c.end.subtractDays(1)) != null ? g : a));
                break;
            case "selectedEnd":
                m(b("GeoDateRangePickerDefaultPresets").CUSTOM.value);
                d(u((g = c == null ? void 0 : c.start) != null ? g : a, a));
                break;
            case "compareStart":
                l(b("GeoDateRangePickerDefaultPresets").CUSTOM.value);
                f(u(a, (g = e == null ? void 0 : e.end.subtractDays(1)) != null ? g : a));
                break;
            case "compareEnd":
                l(b("GeoDateRangePickerDefaultPresets").CUSTOM.value),
                f(u((g = e == null ? void 0 : e.start) != null ? g : a, a))
            }
            r(p[b("divisorSignedModulo")(p.findIndex(function(a) {
                return a === q
            }) + 1, p.length)])
        }
        function w(a) {
            n && (j === b("GeoDateRangePickerDefaultPresets").CUSTOM.value || j == null) ? v(a) : t(a)
        }
        function x(a) {
            var b = s(a)
              , d = b.setValue
              , e = b.setPreset;
            return function(b) {
                b = i({
                    type: a,
                    presetValue: b,
                    interval: c,
                    selectionPresets: k,
                    timezoneID: o
                });
                var f = b.newInterval;
                b = b.selectedPreset;
                f && d(f);
                e(b)
            }
        }
        function y(a) {
            a = s(a);
            var c = a.startDate
              , d = a.endDate
              , e = a.setValue
              , f = a.setPreset;
            return function(a) {
                f(b("GeoDateRangePickerDefaultPresets").CUSTOM.value);
                if (a == null)
                    e(null);
                else if (c && !a.equals(c) || c == null) {
                    var g = d && a.isBefore(d) ? d : a;
                    e(new (b("LocalDateInterval"))(a,g == null ? void 0 : g.addDays(1)))
                }
            }
        }
        function z(a) {
            a = s(a);
            var c = a.startDate
              , d = a.endDate
              , e = a.setValue
              , f = a.setPreset;
            return function(a) {
                f(b("GeoDateRangePickerDefaultPresets").CUSTOM.value),
                a == null ? e(null) : (d && !a.equals(d) || d == null) && e(new (b("LocalDateInterval"))(c && a.isAfter(c) ? c : a,a.addDays(1)))
            }
        }
        return {
            currentInput: q,
            onSelectDateChange: w,
            getOnPresetChange: x,
            getOnStartDateChange: y,
            getOnEndDateChange: z
        }
    }
    function i(a) {
        var c = a.type
          , d = a.presetValue
          , e = a.interval
          , f = a.timezoneID;
        a = a.selectionPresets;
        if (c === "compare") {
            var g;
            c = b("GeoDateRangePickerDefaultPresets").COMPARE_PRESETS.find(function(a) {
                return a.value === d
            });
            g = e && ((g = c) == null ? void 0 : g.calculateInterval) && ((g = c) == null ? void 0 : g.calculateInterval(e))
        } else {
            a = (e = a) != null ? e : b("GeoDateRangePickerDefaultPresets").DEFAULT_PRESETS.concat([b("GeoDateRangePickerDefaultPresets").CUSTOM]);
            c = a == null ? void 0 : a.find(function(a) {
                return a.value === d
            });
            g = ((e = c) == null ? void 0 : e.calculateInterval) && ((a = c) == null ? void 0 : a.calculateInterval(b("LocalDate").today(f)))
        }
        return {
            newInterval: g,
            selectedPreset: (e = c) == null ? void 0 : e.value
        }
    }
    function d(a) {
        var c = a.isCompareEnabled
          , d = a.value
          , e = a.timezoneID;
        a = a.selectionPresets;
        a = (d == null ? void 0 : d.preset) != null && (d == null ? void 0 : d.preset) !== b("GeoDateRangePickerDefaultPresets").CUSTOM.value ? i({
            type: "selection",
            presetValue: d == null ? void 0 : d.preset,
            interval: d == null ? void 0 : d.interval,
            selectionPresets: a,
            timezoneID: e
        }).newInterval : d == null ? void 0 : d.interval;
        var f;
        c && (f = (d == null ? void 0 : d.comparePreset) != null && (d == null ? void 0 : d.comparePreset) !== b("GeoDateRangePickerDefaultPresets").CUSTOM.value ? i({
            type: "compare",
            presetValue: d == null ? void 0 : d.comparePreset,
            interval: a,
            timezoneID: e
        }).newInterval : d == null ? void 0 : d.compareInterval);
        return {
            newInterval: a,
            newCompareInterval: f
        }
    }
    function j(a, b, c) {
        if (a == null)
            return !0;
        var d = c ? h(b, c) : b;
        b = c != null && (b == null || d == null);
        if (b)
            return !0;
        if (d != null) {
            return a((b = c) != null ? b : d.start, d)
        }
        return !0
    }
    function e(a, b, c) {
        return j(a, b, c) === !0
    }
    function k(a, b, c) {
        a = j(a, b, c);
        return typeof a === "boolean" ? null : a
    }
}
), null);
__d("GeoPrivateCalendarDay.react", ["JSResource", "lazyLoadComponent", "GeoDateRangePickerUtils", "React", "stylex", "useBoolean", "useGeoTheme"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("lazyLoadComponent")(b("JSResource")("GeoTooltip.react").__setRef("GeoPrivateCalendarDay.react")), i = b("React"), j = {
        root: {
            alignItems: "dfy4e4am",
            cursor: "svsqgeze",
            display: "rwb8dzxj",
            height: "glti7ijo",
            flexGrow: "hkvtgs2m",
            flexShrink: "nlmdo9b9",
            position: "s7wjoji2",
            width: "hqtdqcfc",
            ":first-child": {
                width: "irds8klj"
            }
        },
        day: {
            alignItems: "dfy4e4am",
            display: "rwb8dzxj",
            cursor: "svsqgeze",
            justifyContent: "olu7ajlf",
            marginStart: "bqg0j2v9",
            position: "rjrpm8ub",
            top: "pu1cs6ci",
            bottom: "g10zmv2e",
            start: "jeej7n5h",
            end: "q406f7mf"
        },
        background: {
            width: "pqbjp7ba",
            height: "lftrkhxp"
        },
        rowStart: {
            marginStart: "h8e39ki1"
        },
        borderRadiusStart: {
            borderTopEndRadius: "dvixm61r",
            borderBottomEndRadius: "cfpbkchl"
        },
        borderRadiusEnd: {
            borderTopStartRadius: "bijruzsu",
            borderBottomStartRadius: "ms26wupl"
        },
        compareFont: {
            fontWeight: "cu1gti5y"
        }
    };
    function a(a) {
        var c = a.compareInterval
          , d = a.date
          , e = a.restraint
          , f = a.focusRef
          , k = a.interval
          , l = a.isCompareEnabled
          , m = a.isHighlighted
          , n = a.isRowStart
          , o = a.isRowEnd
          , p = a.isSelected
          , q = a.isValid
          , r = a.onClick
          , s = a.onKeydown
          , t = a.overlap
          , u = a.rangePosition;
        a = a.tabIndex;
        var v = b("useBoolean")(!1)
          , w = v.value
          , x = v.setTrue;
        v = v.setFalse;
        var y = u != null
          , z = p || y ? "selected" : "none"
          , A = y && u !== "start" ? "selected" : "none";
        u = y && u !== "end" ? "selected" : "none";
        var B = A !== z || u !== z;
        l && c != null && (z = H({
            date: d,
            interval: k,
            compareInterval: c,
            overlap: t
        }),
        A = H({
            date: d.subtractDays(1),
            interval: k,
            compareInterval: c,
            overlap: t
        }),
        u = H({
            date: d.addDays(1),
            interval: k,
            compareInterval: c,
            overlap: t
        }),
        B = Boolean(k && I({
            interval: k,
            date: d
        })) || I({
            interval: c,
            date: d
        }) || Boolean(t && I({
            interval: t,
            date: d
        })));
        l = D({
            type: z,
            adjacentType: A
        });
        H = D({
            type: z,
            adjacentType: u
        });
        c = E({
            type: z,
            isBoundary: B
        });
        I = F();
        t = C({
            isForeground: !0
        });
        A = i.jsx("div", {
            "aria-disabled": !q,
            "aria-pressed": p ? !0 : void 0,
            className: (g || (g = b("stylex")))(G({
                isHighlighted: m,
                isValid: q,
                isHovered: w,
                isRowStart: n && d.getDayOfMonth() !== 1
            }), t, c),
            "data-testid": void 0,
            onClick: r,
            onKeyDown: s,
            onMouseDown: function(a) {
                return a.preventDefault()
            },
            onMouseOut: v,
            onMouseOver: x,
            ref: f,
            role: "button",
            tabIndex: a,
            children: d.getDayOfMonth()
        });
        D = b("GeoDateRangePickerUtils").getValidityMessage(e, k, d);
        return i.jsxs("div", {
            "aria-selected": p || y,
            className: g(j.root),
            role: "gridcell",
            children: [i.jsx("div", {
                className: g(j.background, C({
                    isRowStart: n
                }), l)
            }), i.jsx("div", {
                className: g(j.background, C({
                    isRowEnd: o
                }), H)
            }), z === "compare" && B && i.jsx("div", {
                className: (g || (g = b("stylex")))(I, t)
            }), D == null ? A : i.jsx(i.Suspense, {
                fallback: A,
                children: i.jsx(h, {
                    content: D,
                    "data-testid": void 0,
                    children: A
                })
            })]
        });
        function C(a) {
            var c = a.isForeground;
            c = c === void 0 ? !1 : c;
            var d = a.isRowStart;
            d = d === void 0 ? !1 : d;
            a = a.isRowEnd;
            a = a === void 0 ? !1 : a;
            var e = b("useGeoTheme")();
            e = e.selectBorderRadius;
            e = e({
                context: "content"
            });
            return [(c || d || a) && e, d && j.borderRadiusStart, a && j.borderRadiusEnd]
        }
        function D(c) {
            var a = c.type;
            c = c.adjacentType;
            var d = b("useGeoTheme")();
            d = d.selectInteractiveColorPalette;
            var e = a === "selected" || c === "selected"
              , f = a === "overlap" || c === "overlap"
              , g = a === "compare" || c === "compare";
            if (a === "none" || c === "none")
                return null;
            if (e && !g)
                return [d({
                    color: "selected",
                    isFocused: !0
                })];
            if (g && !e)
                return [d({
                    color: "wash",
                    isFocused: !0
                })];
            if (f)
                return [d({
                    color: "primary",
                    isActive: !0
                })]
        }
        function E(c) {
            var a = c.type;
            c = c.isBoundary;
            var d = b("useGeoTheme")()
              , e = d.selectTextColor
              , f = d.selectStaticBackgroundColor;
            d = d.selectInteractiveColorPalette;
            if (!c)
                return [a === "overlap" && e({
                    color: "inverted",
                    isDisabled: !1
                })];
            if (a === "selected")
                return [d({
                    color: "primary"
                })];
            if (a === "compare")
                return [f({
                    surface: "overlay"
                }), e({
                    color: "inverted",
                    isDisabled: !1
                }), j.compareFont];
            if (a === "overlap")
                return [d({
                    color: "primary",
                    isActive: !0
                })]
        }
        function F() {
            var a = b("useGeoTheme")();
            a = a.selectStaticBackgroundColor;
            return [j.day, a({
                surface: "content"
            })]
        }
        function G(e) {
            var a = e.isHighlighted
              , d = e.isHovered
              , c = e.isValid;
            e = e.isRowStart;
            var f = b("useGeoTheme")()
              , g = f.selectTextColor;
            f = f.selectInteractiveColorPalette;
            d = c && d;
            return [j.day, g({
                color: "value",
                isDisabled: !c
            }), e && j.rowStart, d && f({
                color: "wash",
                isFocused: !0
            }), a && g({
                color: "link",
                isDisabled: !1
            })]
        }
        function H(d) {
            var b = d.date
              , c = d.interval
              , a = d.compareInterval;
            d = d.overlap;
            if (d != null && d.contains(b))
                return "overlap";
            if (a.contains(b))
                return "compare";
            return (c == null ? void 0 : c.contains(b)) ? "selected" : "none"
        }
        function I(b) {
            var a = b.interval;
            b = b.date;
            return a.start.equals(b) || a.end.subtractDays(1).equals(b)
        }
    }
}
), null);
__d("GeoCalendarUtils", ["GeoPrivateCalendarDay.react", "LocalDateInterval", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getOverlap = h;
    f.getGeoCalendarDayRenderer = a;
    var g = b("React");
    function h(a, c) {
        var d = a == null ? void 0 : a.end.subtractDays(1)
          , e = c == null ? void 0 : c.end.subtractDays(1);
        if (!a || !c || e && a.start.isAfter(e) || d && d.isBefore(c.start))
            return null;
        if (a.start.isBefore(c.start))
            return new (b("LocalDateInterval"))(c.start,c.end.min(a.end));
        else
            return new (b("LocalDateInterval"))(a.start,a.end.min(c.end))
    }
    function a(a) {
        var c = a.interval
          , d = a.compareInterval
          , e = a.isCompareEnabled
          , f = a.restraint
          , i = h(c, d);
        return function(a) {
            return g.jsx(b("GeoPrivateCalendarDay.react"), babelHelpers["extends"]({}, a, {
                compareInterval: d,
                interval: c,
                isCompareEnabled: Boolean(e),
                overlap: i,
                restraint: f
            }))
        }
    }
}
), null);
__d("GeoPrivateCalendarDayRendererContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(void 0);
    e.exports = c
}
), null);
__d("GeoCalendar.react", ["AbstractCalendar.react", "GeoCalendarUtils", "GeoPrivateCalendarDayRendererContext", "GeoPrivateMakeComponent", "React", "stylex", "useGeoTheme"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = b("GeoCalendarUtils").getGeoCalendarDayRenderer({}), j = {
        root: {
            display: "rxo4gu2c"
        },
        row: {
            display: "rwb8dzxj",
            flexWrap: "apktr6ye",
            justifyContent: "tnsgtkb9",
            width: "tds9wb2m"
        },
        rowTopMargin: {
            marginTop: "s2546z68"
        },
        cell: {
            alignItems: "dfy4e4am",
            cursor: "svsqgeze",
            display: "rwb8dzxj",
            flexGrow: "hkvtgs2m",
            flexShrink: "nlmdo9b9",
            justifyContent: "olu7ajlf",
            textAlign: "jo61ktz3",
            width: "hqtdqcfc",
            ":first-child": {
                width: "irds8klj"
            }
        }
    };
    function a(a) {
        var c = a.dateRestraints
          , d = a.highlightedDates;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["dateRestraints", "highlightedDates"]);
        var e = h.useContext(b("GeoPrivateCalendarDayRendererContext"))
          , f = b("useGeoTheme")()
          , k = f.selectFont;
        f = f.selectTextColor;
        f = {
            classNames: {
                row: (g || (g = b("stylex")))(j.row, j.rowTopMargin),
                dayName: g(j.cell),
                dayNames: g(j.row, f({
                    color: "placeholder",
                    isDisabled: !1
                }), k({
                    size: "valueDescription"
                })),
                root: g(k({
                    size: "value"
                }), j.root),
                spacer: g(j.cell)
            }
        };
        k = c;
        c = d;
        return h.jsx(b("AbstractCalendar.react"), babelHelpers["extends"]({}, f, a, {
            allowDuplicateSelection: !0,
            dateRestraints: k,
            dayRenderer: (d = e) != null ? d : i,
            highlightedDates: c
        }))
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoCalendar", a);
    e.exports = c
}
), null);
__d("GeoCalendarPager.react", ["ix", "AbstractCalendarPager.react", "GeoCalendar.react", "GeoPrivateBaseButton.react", "GeoPrivateMakeComponent", "GeoTextSelectors", "LocalDate", "Locale", "React", "Timezone", "fbicon", "stylex", "useGeoTheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("React");
    c = b("Timezone").getEnvironmentTimezoneID() || b("Timezone").UTC;
    var j = b("LocalDate").today(c)
      , k = {
        root: {
            boxSizing: "puibpoiz",
            display: "rxo4gu2c",
            position: "s7wjoji2"
        },
        calendarWrapper: {
            ":last-child": {
                marginStart: "d8ru2wdz"
            }
        },
        main: {
            display: "rwb8dzxj"
        },
        monthHeader: {
            marginBottom: "dhycqfdu",
            textAlign: "jo61ktz3"
        },
        button: {
            position: "rjrpm8ub",
            top: "vfcz4ciq"
        },
        previousButton: {
            start: "iztg89wu"
        },
        nextButton: {
            end: "d9gpujxm"
        },
        year: {
            fontWeight: "jrvjs1jy"
        }
    };
    function a(a) {
        var c, d = a.count;
        d = d === void 0 ? 1 : d;
        var e = a.highlightedDates
          , f = a.restraint
          , g = a.isPagerLimitRestrained;
        g = g === void 0 ? !0 : g;
        var m = a.onSelectDateChange
          , n = a.rangeSelectDate
          , o = a.selectDate;
        a = b("useGeoTheme")();
        a = a.selectSpacing;
        c = i.useState((c = o) != null ? c : j);
        var p = c[0]
          , q = c[1];
        c = b("GeoTextSelectors").selectFont({
            size: "value"
        });
        var r = d === 2;
        i.useEffect(function() {
            o != null && q(o)
        }, [o]);
        return i.jsx(b("AbstractCalendarPager.react"), {
            calendarType: b("GeoCalendar.react"),
            className: (h || (h = b("stylex")))(k.root, a({
                context: "container",
                bounds: "internal",
                relation: "component"
            })),
            classNames: {
                calendarWrapper: h(r && k.calendarWrapper),
                main: h(k.main),
                monthHeader: h(k.monthHeader),
                month: h(c),
                year: h(k.year, c)
            },
            count: d,
            dateRestraints: f != null ? [f] : void 0,
            focusDate: p,
            highlightedDates: (a = e) != null ? a : [j],
            leftButton: i.jsx(l, {
                direction: "previous"
            }),
            limitPagerToRestraints: g,
            onFocusDateChange: q,
            onSelectDateChange: m,
            rangeSelectDate: n,
            rightButton: i.jsx(l, {
                direction: "next"
            }),
            selectDate: o
        })
    }
    function l(a) {
        var c = a.direction
          , d = a.disabled
          , e = a.label;
        e = e === void 0 ? "" : e;
        var f = a.labelIsHidden
          , j = a.onBlur
          , l = a.onClick
          , m = a.onFocus;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["direction", "disabled", "label", "labelIsHidden", "onBlur", "onClick", "onFocus"]);
        var n = i.useCallback(function() {
            j == null ? void 0 : j()
        }, [j])
          , o = i.useCallback(function() {
            l == null ? void 0 : l()
        }, [l])
          , p = i.useCallback(function() {
            m == null ? void 0 : m()
        }, [m]);
        c = c === "previous";
        var q = c ? k.previousButton : k.nextButton
          , r = b("Locale").isRTL()
          , s = c ? r ? b("fbicon")._(g("492533"), 16) : b("fbicon")._(g("492485"), 16) : null;
        c = c ? null : r ? b("fbicon")._(g("492485"), 16) : b("fbicon")._(g("492533"), 16);
        return i.jsx("div", {
            className: (h || (h = b("stylex")))(k.button, q),
            children: i.jsx(b("GeoPrivateBaseButton.react"), babelHelpers["extends"]({}, a, {
                "data-testid": void 0,
                icon: s,
                iconEnd: c,
                isDisabled: d,
                isLabelHidden: f,
                label: e,
                onBlur: n,
                onClick: o,
                onFocus: p,
                variant: "flat"
            }))
        })
    }
    d = b("GeoPrivateMakeComponent").makeGeoComponent("GeoCalendarPager", a);
    e.exports = d
}
), null);
__d("GeoDateInputUtils", ["CalendarUtils", "DateFormatConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getValue = a;
    f.extractDateStringParts = c;
    var g = {
        order: b("DateFormatConfig").numericDateOrder,
        separator: b("DateFormatConfig").numericDateSeparator
    }
      , h = "M d, Y";
    function i(a, c) {
        if (a == null)
            return "";
        else
            return c != null ? c(a) : a.format(b("DateFormatConfig").formats[h])
    }
    function a(a) {
        var c = a.rawValue
          , d = a.isFocused;
        a = a.dateFormatter;
        var e = "";
        if (c != null) {
            var f = b("CalendarUtils").stringToLocalDate(c, g.order);
            e = d ? c : i(f, a)
        }
        return e
    }
    function c(a) {
        var b = /[1-9]{1}[0-9]*/g, c, d = {}, e = 0;
        while (c = b.exec(a))
            d[g.order[e++]] = c;
        return d
    }
}
), null);
__d("GeoPrivateDateInput.react", ["ix", "CalendarUtils", "DateFormatConfig", "GeoDateInputUtils", "GeoPrivateBaseInputLayout.react", "GeoPrivateBaseInputLayoutAddonContainer.react", "GeoPrivateFormInputStatusContext", "GeoPrivateMakeComponent", "Image.react", "React", "RTLKeys", "asset", "isFalsey", "stylex", "useGeoPrivateUnstyledInputStyle"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("React"), j = {
        order: b("DateFormatConfig").numericDateOrder,
        separator: b("DateFormatConfig").numericDateSeparator
    }, k = {
        input: {
            width: "tds9wb2m"
        },
        layout: {
            minWidth: "j7u4251c"
        }
    }, l = null;
    function a(a, c) {
        var d = a["data-testid"];
        d = a.restraint;
        var e = a.dateFormatter
          , f = a.describedBy
          , l = a.errorMessageId
          , n = a.isDisabled
          , o = a.isIconHidden;
        o = o === void 0 ? !1 : o;
        var p = a.inputId
          , q = a.labelledBy
          , r = a.onBlur
          , s = a.onChange
          , t = a.onClick
          , u = a.onFocus
          , v = a.onInvalidDateSelected
          , w = a.value;
        a = m({
            value: w,
            restraint: d,
            onUpdateDate: s,
            onInvalidDateSelected: v
        });
        d = a.dateInputRef;
        var x = a.setRawValue
          , y = a.submitDate
          , z = a.moveDate;
        s = a.rawValue;
        v = i.useState(!1);
        a = v[0];
        var A = v[1];
        i.useEffect(function() {
            w != null ? x(b("CalendarUtils").localDateToString(w, j)) : x("")
        }, [w, x]);
        v = function() {
            y()
        }
        ;
        var B = function(a) {
            A(!0),
            u != null && u(a)
        }
          , C = function(a) {
            A(!1),
            r != null && r(a),
            w != null && x(b("CalendarUtils").localDateToString(w, j))
        }
          , D = function(a) {
            switch (a.keyCode) {
            case b("RTLKeys").DOWN:
                a.preventDefault();
                z(-1);
                break;
            case b("RTLKeys").UP:
                a.preventDefault();
                z(1);
                break
            }
        }
          , E = i.useContext(b("GeoPrivateFormInputStatusContext"));
        E = E.isEdited;
        E = b("useGeoPrivateUnstyledInputStyle")({
            isDisabled: n,
            isEdited: E,
            isEmpty: b("isFalsey")(w)
        });
        return i.jsxs(b("GeoPrivateBaseInputLayout.react"), {
            isDisabled: n,
            ref: c,
            xstyle: k.layout,
            children: [!o && i.jsx(b("GeoPrivateBaseInputLayoutAddonContainer.react"), {
                children: i.jsx(b("Image.react"), {
                    src: g("481115")
                })
            }), i.jsx("input", {
                "aria-describedby": f,
                "aria-errormessage": l,
                "aria-labelledby": q,
                autoComplete: "off",
                className: (h || (h = b("stylex")))(E, k.input),
                "data-testid": void 0,
                disabled: n,
                id: p,
                onBlur: C,
                onChange: v,
                onClick: t,
                onFocus: B,
                onKeyDown: D,
                onKeyUp: function(a) {
                    return a.preventDefault()
                },
                placeholder: b("CalendarUtils").placeholderDateString(j),
                ref: d,
                value: b("GeoDateInputUtils").getValue({
                    rawValue: s,
                    isFocused: a,
                    dateFormatter: e
                })
            })]
        })
    }
    function m(a) {
        var c = a.value
          , d = a.restraint
          , e = a.onUpdateDate
          , f = a.onInvalidDateSelected
          , g = i.useRef(null);
        a = c != null ? b("CalendarUtils").localDateToString(c, j) : "";
        c = i.useState(a);
        var h = c[0]
          , k = c[1];
        i.useEffect(function() {
            var a = g.current;
            if (l && a) {
                var c = b("GeoDateInputUtils").extractDateStringParts(h);
                c = c[l];
                c && a.setSelectionRange(c.index, c.index + c[0].length)
            }
            l = null
        }, [h]);
        var m = function(a) {
            return d == null || d(a)
        }
          , n = function(a) {
            a != null && (m(a) ? e(a) : f != null && f(a))
        };
        a = function() {
            if (g.current != null) {
                var a = g.current.value;
                k(a);
                if (a === "")
                    e(null);
                else {
                    a = b("CalendarUtils").stringToLocalDate(a, b("DateFormatConfig").numericDateOrder);
                    n(a)
                }
            }
        }
        ;
        c = function(a) {
            var c = g.current;
            if (c != null) {
                var d = c.value
                  , e = b("CalendarUtils").stringToLocalDate(d, b("DateFormatConfig").numericDateOrder);
                if (d == null || e == null || l != null)
                    return;
                c = c.selectionStart;
                d = b("GeoDateInputUtils").extractDateStringParts(d);
                for (var f in d) {
                    var h = d[f]
                      , i = h.index + h[0].length;
                    if (c >= h.index && c <= i)
                        switch (f) {
                        case "m":
                            l = f;
                            e = e.addMonths(a);
                            break;
                        case "d":
                            l = f;
                            e = e.addDays(a);
                            break;
                        case "y":
                            l = f;
                            e = e.addYears(a);
                            break
                        }
                }
                n(e)
            }
        }
        ;
        return {
            dateInputRef: g,
            rawValue: h,
            setRawValue: k,
            updateDate: n,
            submitDate: a,
            moveDate: c
        }
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoPrivateDateInput", i.forwardRef(a));
    e.exports = c
}
), null);
__d("GeoDateInput.react", ["GeoBaseFormInputLayout.react", "GeoPrivateDateInput.react", "GeoPrivateMakeComponent", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.description
          , e = a.disabledMessage
          , f = a.errorMessage
          , h = a.tooltip
          , i = a.isDisabled
          , j = a.isEdited
          , k = a.isLabelHidden
          , l = a.isOptional
          , m = a.isValid
          , n = a.label
          , o = a.labelID
          , p = a.warningMessage
          , q = babelHelpers.objectWithoutPropertiesLoose(a, ["description", "disabledMessage", "errorMessage", "tooltip", "isDisabled", "isEdited", "isLabelHidden", "isOptional", "isValid", "label", "labelID", "warningMessage"]);
        return g.jsx(b("GeoBaseFormInputLayout.react"), {
            description: d,
            disabledMessage: e,
            errorMessage: f,
            isDisabled: i,
            isEdited: j,
            isLabelHidden: k,
            isOptional: l,
            isValid: m,
            label: n,
            labelID: o,
            tooltip: h,
            warningMessage: p,
            children: function(a) {
                var d = a.inputID
                  , e = a.labelledBy
                  , f = a.describedBy;
                a = a.errorMessageID;
                return g.jsx(b("GeoPrivateDateInput.react"), babelHelpers["extends"]({}, q, {
                    describedBy: f,
                    errorMessageId: a,
                    inputId: d,
                    isDisabled: i,
                    labelledBy: e,
                    ref: c
                }))
            }
        })
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoDateInput", g.forwardRef(a));
    e.exports = c
}
), null);
__d("preventDefault", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a.preventDefault()
    }
}
), null);
__d("GeoDatePicker.react", ["ContextualThing", "GeoBaseContextualLayer.react", "GeoBaseLayerBlurBehavior.react", "GeoCalendarPager.react", "GeoDateInput.react", "GeoPrivateMakeComponent", "React", "preventDefault", "stylex", "useBoolean", "useGeoTheme"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        input: {
            width: "tds9wb2m"
        }
    };
    function a(a, c) {
        var d = a.value
          , e = a.restraint
          , f = a.onChange
          , k = a.isPagerLimitRestrained;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["value", "restraint", "onChange", "isPagerLimitRestrained"]);
        var l = h.useRef(null)
          , m = b("useBoolean")(!1)
          , n = m.value
          , o = m.setTrue
          , p = m.setFalse
          , q = h.useCallback(function(a) {
            l.current && !b("ContextualThing").containsIncludingLayers(l.current, a.target) && p()
        }, [p]);
        h.useEffect(function() {
            if (!n)
                return;
            window.addEventListener("click", q);
            return function() {
                return window.removeEventListener("click", q)
            }
        }, [n, l, p, q]);
        m = h.useCallback(function(a) {
            p(),
            f(a)
        }, [f, p]);
        return h.jsxs(h.Fragment, {
            children: [h.jsx("div", {
                className: (g || (g = b("stylex")))(i.input),
                ref: l,
                children: h.jsx(b("GeoDateInput.react"), babelHelpers["extends"]({}, a, {
                    onBlur: p,
                    onChange: f,
                    onClick: n ? void 0 : o,
                    onFocus: o,
                    ref: c,
                    restraint: e,
                    value: d
                }))
            }), n && h.jsx(j, {
                hideCalendar: p,
                inputRef: l,
                isCalendarShown: n,
                isPagerLimitRestrained: k,
                onChange: m,
                restraint: e,
                value: d
            })]
        })
    }
    function j(a) {
        var c = a.hideCalendar
          , d = a.isPagerLimitRestrained
          , e = a.restraint
          , f = a.value
          , i = a.inputRef
          , j = a.isCalendarShown;
        a = a.onChange;
        d = h.jsx("div", {
            className: (g || (g = b("stylex")))(k()),
            onMouseDown: b("preventDefault"),
            children: h.jsx(b("GeoCalendarPager.react"), {
                isPagerLimitRestrained: d,
                onSelectDateChange: a,
                restraint: e,
                selectDate: f
            })
        });
        return i.current == null || !j ? null : h.jsx(b("GeoBaseLayerBlurBehavior.react"), {
            context: i.current,
            onBlur: c,
            children: h.jsx(b("GeoBaseContextualLayer.react"), {
                context: i.current,
                position: "below",
                children: d
            })
        })
    }
    function k() {
        var a = b("useGeoTheme")()
          , c = a.selectBorderRadius
          , d = a.selectElevation;
        a = a.selectStaticBackgroundColor;
        return [c({
            context: "layer"
        }), d({
            level: 3
        }), a({
            surface: "content"
        })]
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoDatePicker", h.forwardRef(a));
    e.exports = c
}
), null);
__d("GeoPrivateBaseTimeInputColumn.react", ["GeoPrivateMakeComponent", "React", "RTLKeys", "padNumber", "stylex", "useBoolean", "useGeoPrivateUnstyledInputStyle", "useGeoTheme", "useUniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = (c = b("RTLKeys")).BACKSPACE, j = c.DELETE, k = c.DOWN, l = c.UP, m = c.getLeft, n = c.getRight, o = {
        column: {
            display: "rxo4gu2c",
            textAlign: "jo61ktz3",
            width: "pqcg8t22"
        },
        columnBody: {
            overflowX: "lgsfgr3h",
            overflowY: "mcogi7i5",
            position: "s7wjoji2",
            width: "tds9wb2m"
        },
        input: {
            borderTopWidth: "jza0iyw7",
            borderEndWidth: "njc9t6cs",
            borderBottomWidth: "qhe9tvzt",
            borderStartWidth: "spzutpn9",
            height: "lftrkhxp",
            opacity: "hluqg2un",
            paddingTop: "leumhs8v",
            paddingEnd: "iagzkrdz",
            paddingBottom: "my9zkn4v",
            paddingStart: "it3lqkse",
            position: "rjrpm8ub",
            start: "jeej7n5h",
            top: "pu1cs6ci",
            whiteSpace: "kiex77na",
            width: "tds9wb2m"
        },
        label: {
            borderTopStartRadius: "nr378gtj",
            borderTopEndRadius: "d836gx34",
            borderBottomEndRadius: "jokfiz6c",
            borderBottomStartRadius: "krw95x7b",
            boxSizing: "puibpoiz",
            display: "jrkk970q",
            fontWeight: "jbfqbifr",
            height: "lftrkhxp",
            outline: "qnavoh4n",
            overflowX: "lgsfgr3h",
            overflowY: "mcogi7i5",
            pointerEvents: "lxm2ky87",
            position: "s7wjoji2",
            whiteSpace: "kiex77na",
            width: "tds9wb2m",
            zIndex: "i6alm2u7"
        }
    };
    function a(a, c) {
        var d = a["data-testid"];
        d = a.isDisabled;
        var e = a.label
          , f = a.maxValue
          , p = a.minValue
          , q = a.onFocusPrevAttempt
          , r = a.onFocusNextAttempt
          , s = a.onSpin
          , t = a.onType
          , u = a.value
          , v = a.valueText;
        a = a.xstyle;
        var w = b("useBoolean")(!1)
          , x = b("useGeoTheme")();
        x = x.selectInteractiveColorPalette;
        var y = b("useUniqueID")();
        x = [b("useGeoPrivateUnstyledInputStyle")({
            isDisabled: d
        }), w.value && x({
            color: "selected",
            isFocused: !0
        }), o.label];
        var z = h.useCallback(function(a) {
            a.preventDefault(),
            q == null ? void 0 : q()
        }, [q])
          , A = h.useCallback(function(a) {
            a.preventDefault(),
            r == null ? void 0 : r()
        }, [r])
          , B = h.useCallback(function(a) {
            switch (a.keyCode) {
            case m():
                z(a);
                break;
            case l:
                s(1);
                break;
            case n():
                A(a);
                break;
            case k:
                s(-1);
                break;
            case i:
            case j:
                t == null ? void 0 : t(null);
                a.preventDefault();
                break
            }
        }, [z, s, A, t])
          , C = function(a) {
            t(a.target.value)
        };
        return h.jsx("div", {
            className: (g || (g = b("stylex")))(o.column, a),
            children: h.jsxs("div", {
                className: g(o.columnBody),
                children: [h.jsx("label", {
                    "aria-hidden": !0,
                    className: g(x),
                    htmlFor: y,
                    children: (a = v) != null ? a : b("padNumber")(u, 2)
                }), h.jsx("input", {
                    "aria-disabled": d,
                    "aria-label": e,
                    "aria-valuemax": f,
                    "aria-valuemin": p,
                    "aria-valuenow": u,
                    "aria-valuetext": v,
                    autoComplete: "off",
                    className: g(o.input),
                    "data-testid": void 0,
                    disabled: d,
                    id: y,
                    onBlur: w.setFalse,
                    onChange: C,
                    onFocus: w.setTrue,
                    onKeyDown: B,
                    ref: c,
                    role: "spinbutton",
                    value: ""
                })]
            })
        })
    }
    d = b("GeoPrivateMakeComponent").makeGeoComponent("GeoPrivateBaseTimeInputColumn", h.forwardRef(a));
    e.exports = d
}
), null);
__d("GeoTimeUtils", ["React", "TimeOfDay"], (function(a, b, c, d, e, f) {
    "use strict";
    f.parseValueFromInput = a;
    f.getRangeForField = l;
    f.getDisplayedHour = m;
    f.clampTime = n;
    f.useTimeManagement = c;
    var g = b("React")
      , h = new (b("TimeOfDay"))(0,0,0);
    f.START_OF_DAY = h;
    var i = new (b("TimeOfDay"))(23,59,59);
    f.END_OF_DAY = i;
    var j = 2e3;
    function k(a) {
        return !isNaN(a) && a !== ""
    }
    function a(a) {
        return k(a) ? parseInt(a, 10) : 0
    }
    function l(a, b) {
        b === void 0 && (b = 12);
        switch (a) {
        case "hour":
            return b === 12 ? [1, 12] : [0, 23];
        default:
            return [0, 59]
        }
    }
    function m(a, b) {
        if (b === 24)
            return a;
        b = a <= 12 ? a : a - 12;
        return b === 0 ? 12 : b
    }
    function n(a, b, c) {
        b === void 0 && (b = h);
        c === void 0 && (c = i);
        return a.min(c).max(b)
    }
    function o(a, b, c, d, e) {
        e === void 0 && (e = !1);
        if (isNaN(b) || b.length !== 1)
            return null;
        b = parseInt(b, 10);
        if (b > d)
            return null;
        if (e) {
            e = a * 10 + b;
            if (e <= d)
                return e >= c ? e : null
        }
        return b >= c ? b : null
    }
    function c(a) {
        var c = a.maxValue
          , d = a.minValue
          , e = a.onChange
          , f = a.pattern
          , k = a.value
          , p = k.hour
          , q = k.minute;
        a = g.useState(null);
        var r = a[0]
          , s = a[1]
          , t = g.useRef(null)
          , u = g.useCallback(function(a) {
            window.clearTimeout(t.current),
            s(a),
            t.current = window.setTimeout(function() {
                s(null)
            }, j)
        }, []);
        g.useEffect(function() {
            return function() {
                return window.clearTimeout(t.current)
            }
        }, []);
        var v = g.useCallback(function(a, e) {
            return n(b("TimeOfDay").create(a, e), d, c)
        }, [c, d])
          , w = g.useCallback(function(a, b) {
            return e(v(a, b))
        }, [v, e])
          , x = g.useCallback(function(a, b) {
            var f, g, j = d != null || c != null, l = k;
            f = (f = d) != null ? f : h;
            g = (g = c) != null ? g : i;
            var m = a > 0;
            a = a < 0;
            var n = b.isBefore(f) || b.isAfter(g);
            a = a && b.isAfter(l) || m && b.isBefore(l);
            s(null);
            if ((n || a) && j) {
                e(m ? g : f);
                return
            }
            e(b)
        }, [c, d, e, k]);
        a = g.useCallback(function(a) {
            if (a == null) {
                s(null);
                w(0, q);
                return
            }
            var b = l("hour", f)
              , c = b[0];
            b = b[1];
            a = o(m(p, f), a, c, b, r === "hour");
            f === 12 && a != null && (p >= 12 && a !== 12 ? a += 12 : p < 12 && a === 12 && (a = 0));
            a != null && (w(a, q),
            u("hour"))
        }, [r, p, q, f, w, u]);
        var y = g.useCallback(function(a) {
            if (a == null) {
                s(null);
                w(p, 0);
                return
            }
            var b = l("minute")
              , c = b[0];
            b = b[1];
            a = o(q, a, c, b, r === "minute");
            a != null && (w(p, a),
            u("minute"))
        }, [r, p, q, w, u])
          , z = g.useCallback(function(a) {
            var b = p >= 12 ? p : p + 12
              , c = p >= 12 ? p - 12 : p;
            a = a === "am" ? c : b;
            w(a, q)
        }, [p, q, w])
          , A = g.useCallback(function(a) {
            s(null);
            if (a == null)
                return;
            switch (a.toLowerCase()) {
            case "a":
                z("am");
                break;
            case "p":
                z("pm");
                break
            }
        }, [z])
          , B = g.useCallback(function(a) {
            return x(a, k.add({
                hour: a
            }))
        }, [x, k])
          , C = g.useCallback(function(a) {
            return x(a, k.add({
                minute: a
            }))
        }, [x, k])
          , D = g.useCallback(function() {
            s(null),
            z(p >= 12 ? "am" : "pm")
        }, [p, z]);
        return {
            spinHour: B,
            spinMeridiem: D,
            spinMinute: C,
            typeHours: a,
            typeMeridiem: A,
            typeMinutes: y
        }
    }
}
), null);
__d("GeoPrivateBaseTimeInput.react", ["ix", "fbt", "GeoBaseText.react", "GeoIcon.react", "GeoPrivateBaseInputLayout.react", "GeoPrivateBaseInputLayoutAddonContainer.react", "GeoPrivateBaseTimeInputColumn.react", "GeoPrivateFormInputStatusContext", "GeoPrivateMakeComponent", "GeoTimeUtils", "React", "fbicon", "stylex", "useGeoPrivateUnstyledInputStyle"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = b("React"), k = {
        inputLayout: {
            minWidth: "l8gg7ll4"
        },
        meridiemInput: {
            width: "nwjmkgrz"
        },
        noWrap: {
            display: "rwb8dzxj",
            flexShrink: "nlmdo9b9"
        }
    }, l = h._("gi\u1edd"), m = h._("ph\u00fat"), n = h._("bu\u1ed5i");
    function a(a, c) {
        var d = a["data-testid"];
        d = a["data-hour-testid"];
        d = a["data-minute-testid"];
        d = a["data-meridiem-testid"];
        d = a.describedBy;
        var e = a.errorMessageId
          , f = a.inputId
          , h = a.isDisabled;
        h = h === void 0 ? !1 : h;
        var o = a.isEdited
          , p = a.labelledBy
          , q = a.minValue
          , r = a.maxValue
          , s = a.onChange
          , t = a.pattern;
        t = t === void 0 ? 12 : t;
        var u = a.status
          , v = a.step
          , w = v === void 0 ? 1 : v;
        v = a.timezoneLabel;
        a = a.value;
        r = b("GeoTimeUtils").useTimeManagement({
            maxValue: r,
            minValue: q,
            onChange: s,
            pattern: t,
            value: a
        });
        q = r.spinHour;
        s = r.spinMeridiem;
        var x = r.spinMinute
          , y = r.typeHours
          , z = r.typeMeridiem;
        r = r.typeMinutes;
        var A = a.hour;
        a = a.minute;
        var B = j.useRef(null)
          , C = j.useRef(null)
          , D = j.useRef(null)
          , E = b("GeoTimeUtils").getRangeForField("hour", t)
          , F = E[0];
        E = E[1];
        var G = b("GeoTimeUtils").getRangeForField("minute", t)
          , H = G[0];
        G = G[1];
        var I = j.useContext(b("GeoPrivateFormInputStatusContext"));
        I = I.isEdited;
        o = (o = o) != null ? o : I;
        I = b("useGeoPrivateUnstyledInputStyle")({
            isDisabled: h,
            isEdited: o
        });
        return j.jsxs(b("GeoPrivateBaseInputLayout.react"), {
            "data-testid": void 0,
            isDisabled: h,
            ref: c,
            status: u,
            xstyle: k.inputLayout,
            children: [j.jsx(b("GeoPrivateBaseInputLayoutAddonContainer.react"), {
                children: j.jsx(b("GeoIcon.react"), {
                    icon: b("fbicon")._(g("478793"), 16)
                })
            }), j.jsxs("div", {
                "aria-atomic": !0,
                "aria-describedby": d,
                "aria-errormessage": e,
                "aria-labelledby": p,
                "aria-live": "polite",
                className: (i || (i = b("stylex")))(I, k.noWrap),
                id: f,
                role: "group",
                children: [j.jsx(b("GeoPrivateBaseTimeInputColumn.react"), {
                    "data-testid": void 0,
                    isDisabled: h,
                    label: l,
                    maxValue: E,
                    minValue: F,
                    onFocusNextAttempt: function() {
                        var a;
                        return (a = D.current) == null ? void 0 : a.focus()
                    },
                    onSpin: q,
                    onType: y,
                    ref: B,
                    value: b("GeoTimeUtils").getDisplayedHour(A, t)
                }), j.jsx(b("GeoBaseText.react"), {
                    color: "placeholder",
                    size: "value",
                    children: ":"
                }), j.jsx(b("GeoPrivateBaseTimeInputColumn.react"), {
                    "data-testid": void 0,
                    isDisabled: h,
                    label: m,
                    maxValue: G,
                    minValue: H,
                    onFocusNextAttempt: function() {
                        var a;
                        return (a = C.current) == null ? void 0 : a.focus()
                    },
                    onFocusPrevAttempt: function() {
                        var a;
                        return (a = B.current) == null ? void 0 : a.focus()
                    },
                    onSpin: function(a) {
                        return x(a * w)
                    },
                    onType: r,
                    ref: D,
                    value: a
                }), t === 12 && j.jsx(b("GeoPrivateBaseTimeInputColumn.react"), {
                    "data-testid": void 0,
                    isDisabled: h,
                    label: n,
                    maxValue: 1,
                    minValue: 0,
                    onFocusPrevAttempt: function() {
                        var a;
                        return (a = D.current) == null ? void 0 : a.focus()
                    },
                    onSpin: s,
                    onType: z,
                    ref: C,
                    value: A >= 12 ? 1 : 0,
                    valueText: A >= 12 ? "PM" : "AM",
                    xstyle: k.meridiemInput
                })]
            }), j.jsx(b("GeoBaseText.react"), {
                color: "placeholder",
                size: "value",
                whiteSpace: "nowrap",
                children: v
            })]
        })
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoPrivateBaseTimeInput", j.forwardRef(a));
    e.exports = c
}
), null);
__d("GeoTimeInput.react", ["GeoBaseFormInputLayout.react", "GeoPrivateBaseTimeInput.react", "GeoPrivateMakeComponent", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.description
          , e = a.disabledMessage
          , f = a.errorMessage
          , h = a.isDisabled
          , i = a.isEdited
          , j = a.isLabelHidden
          , k = a.isOptional
          , l = a.isValid
          , m = a.label
          , n = a.tooltipText
          , o = a.warningMessage
          , p = babelHelpers.objectWithoutPropertiesLoose(a, ["description", "disabledMessage", "errorMessage", "isDisabled", "isEdited", "isLabelHidden", "isOptional", "isValid", "label", "tooltipText", "warningMessage"]);
        return g.jsx(b("GeoBaseFormInputLayout.react"), {
            description: d,
            disabledMessage: e,
            errorMessage: f,
            isDisabled: h,
            isEdited: i,
            isLabelHidden: j,
            isOptional: k,
            isValid: l,
            label: m,
            tooltip: n,
            warningMessage: o,
            children: function(a) {
                var d = a.inputID
                  , e = a.labelledBy
                  , f = a.describedBy;
                a = a.errorMessageID;
                return g.jsx(b("GeoPrivateBaseTimeInput.react"), babelHelpers["extends"]({}, p, {
                    describedBy: f,
                    errorMessageId: a,
                    inputId: d,
                    isDisabled: h,
                    labelledBy: e,
                    ref: c
                }))
            }
        })
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoTimeInput", g.forwardRef(a));
    e.exports = c
}
), null);
__d("GeoDateTimeInput.react", ["fbt", "GeoDatePicker.react", "GeoInputGroup.react", "GeoPrivateMakeComponent", "GeoTimeInput.react", "LocalDate", "LocalDateTime", "React", "TimeOfDay", "Timezone"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var c = a["data-testid-date"];
        c = a["data-testid-time"];
        c = a.dateErrorMessage;
        var d = a.dateFormatter
          , e = a.dateRestraint
          , f = a.dateWarningMessage
          , i = a.isDisabled;
        i = i === void 0 ? !1 : i;
        var j = a.maxTime
          , k = a.minTime
          , l = a.onChange
          , m = a.onInvalidDateSelected
          , n = a.timeErrorMessage
          , o = a.timeWarningMessage
          , p = a.timezoneLabel
          , q = a.value;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["data-testid-date", "data-testid-time", "dateErrorMessage", "dateFormatter", "dateRestraint", "dateWarningMessage", "isDisabled", "maxTime", "minTime", "onChange", "onInvalidDateSelected", "timeErrorMessage", "timeWarningMessage", "timezoneLabel", "value"]);
        var r = h.useMemo(function() {
            return q ? new (b("LocalDate"))(q.getYear(),q.getMonth(),q.getDayOfMonth()) : null
        }, [q])
          , s = h.useCallback(function(a) {
            var c = null;
            a != null && (c = q ? q.set({
                year: a.year,
                month: a.month,
                day: a.day
            }) : b("LocalDateTime").create(a.year, a.month, a.day));
            l(c)
        }, [l, q])
          , t = h.useMemo(function() {
            return q ? b("TimeOfDay").fromLocalDateTime(q) : b("TimeOfDay").create()
        }, [q])
          , u = h.useCallback(function(a) {
            var c = null;
            if (a != null) {
                var d = q ? q : b("LocalDateTime").now(b("Timezone").UTC);
                c = d.set({
                    hour: a.hour,
                    minute: a.minute
                })
            }
            l(c)
        }, [l, q]);
        return h.jsxs(b("GeoInputGroup.react"), babelHelpers["extends"]({}, a, {
            children: [h.jsx(b("GeoDatePicker.react"), {
                "data-testid": void 0,
                dateFormatter: d,
                errorMessage: c,
                isDisabled: i,
                isLabelHidden: !0,
                label: g._("B\u1ed9 ch\u1ecdn ng\u00e0y"),
                onChange: s,
                onInvalidDateSelected: m,
                restraint: e,
                value: r,
                warningMessage: f
            }), h.jsx(b("GeoTimeInput.react"), {
                "data-testid": void 0,
                errorMessage: n,
                isDisabled: i,
                isLabelHidden: !0,
                label: g._("Th\u1eddi gian"),
                maxValue: j,
                minValue: k,
                onChange: u,
                timezoneLabel: p,
                value: t,
                warningMessage: o
            })]
        }))
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoDateTimeInput", a);
    e.exports = c
}
), null);
__d("GeoDraggableList.react", ["GeoPrivateBaseDraggableContainer.react", "GeoPrivateBaseList.react", "GeoPrivateDraggableListContext", "GeoPrivateDraggableListItem.react", "GeoPrivateMakeComponent", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.children
          , d = a.emptyListContent;
        d = d === void 0 ? null : d;
        var e = a.isNumbered
          , f = e === void 0 ? !1 : e
          , h = a.itemIDs
          , i = a.onRemove
          , j = a.onReorder
          , k = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "emptyListContent", "isNumbered", "itemIDs", "onRemove", "onReorder"]);
        e = g.useMemo(function() {
            var a = new Map();
            g.Children.forEach(c, function(b) {
                a.set(b.props.itemID, b)
            });
            var b = h.filter(function(b) {
                return a.has(b)
            });
            return [a, b]
        }, [c, h]);
        var l = e[0]
          , m = e[1];
        a = g.useCallback(function(a, b, c) {
            j([].concat(a), h[b], h[c])
        }, [h, j]);
        e = b("GeoPrivateDraggableListContext");
        var n = g.useMemo(function() {
            return {
                isNumbered: f,
                itemIDs: m,
                onRemove: function(a) {
                    return i(m.filter(function(b) {
                        return b !== a
                    }), a)
                }
            }
        }, [m, f, i]);
        return m.length === 0 ? d : g.jsx(e.Provider, {
            value: n,
            children: g.jsx(b("GeoPrivateBaseDraggableContainer.react"), {
                items: m,
                onReorder: a,
                children: function(a) {
                    a = a.items;
                    return g.jsx(b("GeoPrivateBaseList.react"), babelHelpers["extends"]({}, k, {
                        density: "sparse",
                        shouldSpaceRows: !1,
                        children: a.map(function(a, c) {
                            var d;
                            d = (d = l.get(a)) == null ? void 0 : d.props;
                            return d != null ? g.createElement(b("GeoPrivateDraggableListItem.react"), babelHelpers["extends"]({}, d, {
                                index: c,
                                key: a
                            })) : null
                        })
                    }))
                }
            })
        })
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoDraggableList", a);
    e.exports = c
}
), null);
__d("GeoDraggableListItem.react", ["GeoPrivateMakeComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        a = a.children;
        return a
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoDraggableListItem", a);
    e.exports = c
}
), null);
__d("PhotoEditorImageData", [], (function(a, b, c, d, e, f) {
    var g = function(a, b, c, d) {
        "use strict";
        this.r = a,
        this.g = b,
        this.b = c,
        this.a = d
    };
    g.fromArray = function(a, b) {
        return new g(a[b],a[b + 1],a[b + 2],a[b + 3])
    }
    ;
    a = function() {
        "use strict";
        function a(a) {
            this.image_data = a,
            this.width = a.width,
            this.height = a.height,
            this.array = a.data
        }
        var b = a.prototype;
        b.getData = function() {
            return this.image_data
        }
        ;
        b.getWidth = function() {
            return this.width
        }
        ;
        b.getHeight = function() {
            return this.height
        }
        ;
        b.getPixel = function(a, b) {
            a = this.getIndex(a, b);
            return g.fromArray(this.array, a)
        }
        ;
        b.setPixel = function(a, b, c) {
            a = this.getIndex(a, b);
            this.array[a] = c.r;
            this.array[a + 1] = c.g;
            this.array[a + 2] = c.b;
            this.array[a + 3] = c.a
        }
        ;
        b.getIndex = function(a, b) {
            return 4 * (a + b * this.width)
        }
        ;
        b.forEach = function(a) {
            for (var b = 0; b < this.getWidth(); b++)
                for (var c = 0; c < this.getHeight(); c++)
                    this.setPixel(b, c, a(this.getPixel(b, c)))
        }
        ;
        return a
    }();
    a.Pixel = g;
    e.exports = a
}
), null);
__d("PhotoEditorCanvas", ["BlobFactory", "DOM", "PhotoEditorImageData", "PhotoResizeModeConst", "Vector", "sprintf"], (function(a, b, c, d, e, f) {
    c = function() {
        "use strict";
        function c(a) {
            this._editor = a,
            this._canvas = b("DOM").create("canvas"),
            this._ctx = this._canvas.getContext("2d"),
            this._drawHandler = null
        }
        var d = c.prototype;
        d.setImageContent = function(a) {
            this._canvas.width = a.width;
            this._canvas.height = a.height;
            this._ctx.drawImage(a, 0, 0);
            return this
        }
        ;
        d.drawGraphic = function() {
            this._ctx.drawImage.apply(this._ctx, arguments);
            return this
        }
        ;
        d.isBlobSupported = function() {
            return !!this._canvas.toBlob
        }
        ;
        d.getElement = function() {
            return this._canvas
        }
        ;
        d.getDimensions = function() {
            return new (b("Vector"))(this._canvas.width,this._canvas.height,"document")
        }
        ;
        d.getWidth = function() {
            return this._canvas.width
        }
        ;
        d.getHeight = function() {
            return this._canvas.height
        }
        ;
        d.getContext = function() {
            return this._ctx
        }
        ;
        d.setWidth = function(a) {
            this._canvas.width = a;
            return this
        }
        ;
        d.setHeight = function(a) {
            this._canvas.height = a;
            return this
        }
        ;
        d.toBlob = function(a) {
            if (this.isBlobSupported()) {
                this._canvas.toBlob(a);
                return
            }
            this.getBlobFromDataURL(a)
        }
        ;
        d.getBlobFromDataURL = function(c) {
            var d = this.toDataURL("image/png")
              , e = d.match(/^data:(.*?);base64,/)
              , f = e[1];
            d = d.substr(e[0].length);
            e = a.atob(d);
            d = new ArrayBuffer(e.length);
            var g = new Uint8Array(d);
            for (var h = 0; h < e.length; h++)
                g[h] = e.charCodeAt(h);
            g = b("BlobFactory").getBlob([d], {
                type: f
            });
            c(g)
        }
        ;
        d.toBlobURL = function(b) {
            this.toBlob(function(c) {
                b(a.URL.createObjectURL(c))
            })
        }
        ;
        d.toURL = function(a) {
            if (this.isBlobSupported()) {
                this.toBlobURL(a);
                return
            }
            a(this.toDataURL())
        }
        ;
        d.toDataURL = function(a) {
            return this._canvas.toDataURL(a)
        }
        ;
        d.resizedCopy = function(a, b) {
            var c = a.x / this.getWidth();
            a = a.y / this.getHeight();
            if (b == "s")
                if (c > a)
                    return this.scaledCopy(a);
                else
                    return this.scaledCopy(c);
            else if (b == "p")
                if (c < a)
                    return this.scaledCopy(a);
                else
                    return this.scaledCopy(c);
            else
                throw new Error("mode must be one of PhotoResizeModeConst")
        }
        ;
        d.scaledCopy = function(a) {
            var b = this._canvas.width * a;
            a = this._canvas.height * a;
            return new c().setWidth(b).setHeight(a).drawGraphic(this._canvas, 0, 0, b, a)
        }
        ;
        d.copy = function() {
            return this.scaledCopy(1)
        }
        ;
        d.getPixelColor = function(a, c, d) {
            a = new (b("PhotoEditorImageData"))(this.getImageData(a, c, 1, 1)).getPixel(0, 0);
            d && (a = d(a));
            return b("sprintf")("rgba(%s,%s,%s,%s)", a.r, a.g, a.b, a.a)
        }
        ;
        d.getImageData = function(a, b, c, d) {
            return this._ctx.getImageData(a || 0, b || 0, c || this.getWidth(), d || this.getHeight())
        }
        ;
        d.putImageData = function(a, b, c) {
            this._ctx.putImageData(a, b || 0, c || 0);
            return this
        }
        ;
        d.toDataURI = function() {
            return this._canvas.toDataURL("image/png")
        }
        ;
        d.toBase64 = function() {
            var a = "data:image/png;base64,"
              , b = this.toDataURI();
            return b.slice(a.length)
        }
        ;
        d.applyFilter = function(a, b) {
            this.putImageData(new a(this).run(b))
        }
        ;
        d.enableDrawing = function(a, b) {
            if (!this._editor)
                return;
            this.disableDrawing();
            this._drawHandler = new a(this._editor,b).start();
            return this._drawHandler
        }
        ;
        d.setDrawingFillStyle = function(a) {
            if (!this._drawHandler)
                return;
            this._drawHandler.setFillStyle(a)
        }
        ;
        d.setFillStyle = function(a) {
            this._ctx.fillStyle = a
        }
        ;
        d.disableDrawing = function() {
            if (!this._drawHandler)
                return;
            this._drawHandler.stop();
            this._drawHandler = null
        }
        ;
        d.clear = function() {
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            return this
        }
        ;
        d.crop = function(a, b, d, e) {
            var f = new c().setWidth(d).setHeight(e);
            f.drawGraphic(this._canvas, Math.max(0, a), Math.max(0, b), d, e, 0, 0, d, e);
            this.setImageContent(f.getElement());
            return this
        }
        ;
        d.fillText = function(a, b, c, d, e, f) {
            this._ctx.font = b;
            f && (this._canvas.width = this._ctx.measureText(a).width,
            this._ctx.font = b);
            this._ctx.textBaseline = "top";
            this._ctx.fillStyle = c;
            this._ctx.fillText(a, d, e);
            return this
        }
        ;
        d.fillCircle = function(a, b, c, d) {
            this._ctx.fillStyle = d || "black",
            this._ctx.beginPath(),
            this._ctx.arc(a, b, c, 0, Math.PI * 2),
            this._ctx.closePath(),
            this._ctx.fill()
        }
        ;
        d.fillRect = function(a, b, c, d, e) {
            this._ctx.fillStyle = e || "black";
            this._ctx.fillRect(a || 0, b || 0, c || this._canvas.width, d || this._canvas.height);
            return this
        }
        ;
        return c
    }();
    e.exports = c
}
), null);
__d("XBizKitFlyTrapDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/bizkit/ajax/flytrap/dialog/", {
        product: {
            type: "Enum",
            enumType: 1
        },
        account_id: {
            type: "Int"
        },
        ad_objective: {
            type: "String"
        },
        biz_site_page_type: {
            type: "String"
        },
        business_id: {
            type: "Int"
        },
        help_platform_path: {
            type: "String",
            required: !0
        },
        on_hide_uri: {
            type: "String"
        },
        source: {
            type: "Enum",
            enumType: 1
        },
        category: {
            type: "Enum",
            enumType: 1
        },
        sub_category: {
            type: "Enum",
            enumType: 1
        }
    })
}
), null);
