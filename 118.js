if (self.CavalryLogger) {
    CavalryLogger.start_js(["qixbX"]);
}

__d("CometBlueBridgeKeyCommandListener.react", ["BaseKeyCommandListener.react", "CometGlobalKeyCommandWidget", "CometLayerKeyCommandWrapper.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx(b("CometGlobalKeyCommandWidget").Wrapper, {
            debugName: "global",
            children: g.jsx(b("BaseKeyCommandListener.react"), {
                observersEnabled: !1,
                children: g.jsx(b("CometLayerKeyCommandWrapper.react"), {
                    debugName: "Comet blue bridge layer",
                    children: a.children
                })
            })
        })
    }
}
), null);
__d("CometBlueBridgeContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(!1);
    e.exports = c
}
), null);
__d("CometToasterStateManagerContext.react", ["CometToasterStateManager", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("CometToasterStateManager").getInstance());
    e.exports = c
}
), null);
__d("useToasterStateManager", ["CometToasterStateManagerContext.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometToasterStateManagerContext.react"))
    }
}
), null);
__d("CometLazyToasterView_DO_NOT_USE.react", ["CometPlaceholder.react", "React", "deferredLoadComponent", "requireDeferred", "useToasterStateManager"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    c = b("requireDeferred")("CometToasterView_DO_NOT_USE.react");
    var h = b("deferredLoadComponent")(c);
    function i(a) {
        return Object.keys(a).length > 0
    }
    function a(a) {
        var c = a.maxVisible;
        c = c === void 0 ? 1 : c;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["maxVisible"]);
        var d = b("useToasterStateManager")()
          , e = g.useState(function() {
            return i(d.getState())
        })
          , f = e[0]
          , j = e[1];
        g.useEffect(function() {
            var a = d.addListener(function() {
                a.remove(),
                j(!0)
            });
            return a.remove
        }, [d]);
        return f ? g.jsx(b("CometPlaceholder.react"), {
            fallback: null,
            children: g.jsx(h, babelHelpers["extends"]({
                loadImmediately: !0,
                maxVisible: c
            }, a))
        }) : null
    }
}
), null);
__d("CometOnBlueHiddenSubtreePassiveContextProvider.react", ["Arbiter", "HiddenSubtreeContext", "HiddenSubtreePassiveContext", "React", "removeFromArray", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h(a, b) {
        return a.length > 0 || b
    }
    function a(a) {
        a = a.children;
        var c = g.useRef([])
          , d = g.useRef([])
          , e = g.useContext(b("HiddenSubtreePassiveContext"))
          , f = g.useRef(e.getCurrentState())
          , i = g.useState(h(c.current, f.current.hiddenOrBackgrounded_FIXME))
          , j = i[0]
          , k = i[1]
          , l = g.useMemo(function() {
            return {
                backgrounded: j,
                hidden: j,
                hiddenOrBackgrounded: j,
                hiddenOrBackgrounded_FIXME: j
            }
        }, [j]);
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            var a = Array.from(d.current);
            a.forEach(function(a) {
                a(l)
            })
        }, [l]);
        g.useEffect(function() {
            var a = b("Arbiter").subscribe("layer_shown", function(a) {
                a = (a = a == null ? void 0 : a.type) != null ? a : "UNKNOWN";
                c.current.push(a);
                k(h(c.current, f.current.hiddenOrBackgrounded_FIXME))
            })
              , d = b("Arbiter").subscribe("layer_hidden", function(a) {
                a = (a = a == null ? void 0 : a.type) != null ? a : "UNKNOWN";
                a = c.current.lastIndexOf(a);
                c.current = c.current.slice(0, a);
                k(h(c.current, f.current.hiddenOrBackgrounded_FIXME))
            })
              , g = e.subscribeToChanges(function(a) {
                f.current = a,
                k(h(c.current, f.current.hiddenOrBackgrounded_FIXME))
            });
            return function() {
                a.unsubscribe(),
                d.unsubscribe(),
                g.remove()
            }
        }, [e]);
        i = g.useMemo(function() {
            return {
                getCurrentState: function() {
                    var a = h(c.current, f.current.hiddenOrBackgrounded_FIXME);
                    return {
                        backgrounded: a,
                        hidden: a,
                        hiddenOrBackgrounded: a,
                        hiddenOrBackgrounded_FIXME: a
                    }
                },
                subscribeToChanges: function(a) {
                    var c = d.current;
                    c.push(a);
                    return {
                        remove: function() {
                            b("removeFromArray")(c, a)
                        }
                    }
                }
            }
        }, []);
        return g.jsx(b("HiddenSubtreeContext").Provider, {
            value: l,
            children: g.jsx(b("HiddenSubtreePassiveContext").Provider, {
                value: i,
                children: a
            })
        })
    }
}
), null);
__d("CometOnBlueViewPortMarginsProvider.react", ["CometViewportMarginsContext", "React", "ViewportBounds", "shallowEqual"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h() {
        var a;
        return {
            bottom: (a = b("ViewportBounds")).getBottom(),
            left: a.getLeft(),
            right: a.getRight(),
            top: a.getTop()
        }
    }
    function a(a) {
        a = a.children;
        var c = g.useState(function() {
            return h()
        })
          , d = c[0]
          , e = c[1];
        g.useEffect(function() {
            var a = b("ViewportBounds").subscribe("change", function() {
                e(function(a) {
                    var c = h();
                    return b("shallowEqual")(c, a) ? a : c
                })
            });
            return function() {
                a.unsubscribe()
            }
        }, []);
        return g.jsx(b("CometViewportMarginsContext").Provider, {
            value: d,
            children: a
        })
    }
}
), null);
__d("CometToasterStateManagerProvider.react", ["CometToasterStateManager", "CometToasterStateManagerContext.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("CometToasterStateManager").getInstance();
    function a(a) {
        a = a.children;
        return g.jsx(b("CometToasterStateManagerContext.react").Provider, {
            value: h,
            children: a
        })
    }
}
), null);
__d("ShowAllReactWarnings", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    b("React");
    function a(a) {
        a = a.children;
        return a
    }
}
), null);
__d("SimpleCometOnBlueRouterDispatcher.react", ["CometRouterDispatcherContext", "React", "goURI"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        go: function(a, c) {
            b("goURI")(a, !1, c.replace)
        },
        goBack: function() {
            window.navigation.back()
        },
        goTo: function(a, c) {
            b("goURI")(a.url, !1, c.replace)
        },
        popPushView: function() {
            window.navigation.back()
        },
        prefetchRouteQueries: function(a, b) {
            return {
                cancel: function() {},
                usePrefetchedEntrypointForRouting: function() {}
            }
        },
        preloadRoute: function(a, b) {},
        withContext: function() {
            return h
        }
    };
    function a(a) {
        a = a.children;
        var c = g.useContext(b("CometRouterDispatcherContext"));
        return g.jsx(b("CometRouterDispatcherContext").Provider, {
            value: (c = c) != null ? c : h,
            children: a
        })
    }
}
), null);
__d("StrictMode", ["React", "ShowAllReactWarnings"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.children;
        return g.jsx(b("ShowAllReactWarnings"), {
            children: g.jsx(g.StrictMode, {
                children: a
            })
        })
    }
}
), null);
__d("CometBlueBridge.react", ["Actor", "CometBlueBridgeContext", "CometBlueBridgeKeyCommandListener.react", "CometContextualLayerAnchorRoot.react", "CometErrorProjectContext", "CometHeroInteractionWithDiv.react", "CometLazyToasterView_DO_NOT_USE.react", "CometOnBlueHiddenSubtreePassiveContextProvider.react", "CometOnBlueViewPortMarginsProvider.react", "CometToasterStateManagerProvider.react", "CometTransientDialogProvider.react", "CurrentUser", "React", "ReactXHPContext", "ShowAllReactWarnings", "SimpleCometOnBlueRouterDispatcher.react", "StrictMode", "gkx", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("gkx")("1401837") ? b("StrictMode") : g.Fragment;
    function a(a) {
        var c = a.children
          , d = g.useContext(b("ReactXHPContext"));
        d = d == null ? void 0 : d.interactionID;
        a = (a = a.actorID) != null ? a : b("CurrentUser").getID();
        b("gkx")("708253") && b("recoverableViolation")("CometBlueBridge should not be rendered in Comet", "comet_infra");
        return g.jsx(b("ShowAllReactWarnings"), {
            children: g.jsxs(h, {
                children: [g.jsx(b("CometLazyToasterView_DO_NOT_USE.react"), {}), g.jsx(b("SimpleCometOnBlueRouterDispatcher.react"), {
                    children: g.jsx(b("CometErrorProjectContext").Provider, {
                        value: "comet_infra",
                        children: g.jsx(b("Actor").ActorProvider, {
                            initialActorID: a,
                            readonly: !0,
                            children: g.jsx(b("CometBlueBridgeContext").Provider, {
                                value: !0,
                                children: g.jsx(b("CometOnBlueViewPortMarginsProvider.react"), {
                                    children: g.jsx(b("CometToasterStateManagerProvider.react"), {
                                        children: g.jsx(b("CometBlueBridgeKeyCommandListener.react"), {
                                            children: g.jsx(b("CometContextualLayerAnchorRoot.react"), {
                                                children: g.jsx(b("CometTransientDialogProvider.react"), {
                                                    children: g.jsx(b("CometOnBlueHiddenSubtreePassiveContextProvider.react"), {
                                                        children: g.jsx(b("CometHeroInteractionWithDiv.react"), {
                                                            interactionDesc: "CometBlueBridge Navigation",
                                                            interactionUUID: d,
                                                            children: c
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })]
            })
        })
    }
}
), null);

