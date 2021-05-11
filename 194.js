if (self.CavalryLogger) {
    CavalryLogger.start_js(["52L17"]);
}

__d("CometRouterRenderTypeContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext();
    e.exports = c
}
), null);
__d("CometRouteRenderType", ["CometRouterRenderTypeContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useIsPushView = h;
    f.useIsHosted = i;
    f.useIsMain = j;
    f.RouteIsPushView = a;
    f.RouteIsHosted = c;
    f.RouteIsMain = d;
    var g = b("React");
    function h() {
        var a = g.useContext(b("CometRouterRenderTypeContext"));
        return a === "pushView"
    }
    function i() {
        var a = g.useContext(b("CometRouterRenderTypeContext"));
        return a === "hosted"
    }
    function j() {
        var a = g.useContext(b("CometRouterRenderTypeContext"));
        return a === "main"
    }
    function a(a) {
        a = a.children;
        return a(h())
    }
    function c(a) {
        a = a.children;
        return a(i())
    }
    function d(a) {
        a = a.children;
        return a(j())
    }
}
), null);
__d("CometDeferredPopoverTrigger.react", ["BasePopoverTrigger.react", 
    "CometPopoverLoadingState.react", "React", "deferredLoadComponent", 
    "useCometPopoverInteractionTracing"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.fallback;
        c = c === void 0 ? g.jsx(b("CometPopoverLoadingState.react"), {
            withArrow: !0
        }) : c;
        var d = a.popoverResource
          , e = a.doNotCloseOnOutsideClick
          , f = a.popoverProps
          , h = a.preloadTrigger
          , i = a.tracePolicy;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["", "", "", "", "", ""]);
        var j = b("deferredLoadComponent")(d);
        i = b("useCometPopoverInteractionTracing")(i);
        return g.jsx(b("BasePopoverTrigger.react"), babelHelpers["extends"]({
            doNotCloseOnOutsideClick: e,
            fallback: c,
            interactionTracker: i,
            popover: j,
            popoverPreloadResource: d,
            popoverProps: babelHelpers["extends"]({}, f, {
                loadImmediately: !0
            }),
            preloadTrigger: h
        }, a))
    }
}
), null);
__d("CometNonBreakingSpace.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        .5: {
            marginEnd: "kvj6zsgd"
        },
        .25: {
            marginEnd: "f7ugub2p"
        },
        .75: {
            marginEnd: "zs26xb6x"
        },
        1: {
            marginEnd: "t113ifn3"
        }
    };
    function a(a) {
        a = a.size;
        if (a != null)
            return h.jsx("span", {
                className: (g || (g = b("stylex")))(i[a]),
                children: "\ufeff"
            });
        else
            return h.jsx(h.Fragment, {
                children: "\xa0"
            })
    }
}
), null);
__d("CometTextWithIcon.react", ["BaseView.react", "CometNonBreakingSpace.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        icon: {
            alignItems: "bp9cbjyn",
            display: "pq6dq46d",
            verticalAlign: "sf5mxxl7"
        },
        iconContainer: {
            display: "nc684nl6",
            whiteSpace: "g0qnabr5"
        }
    };
    function a(a) {
        var c = a.children
          , d = a.iconAfter
          , e = a.iconBefore
          , f = a.iconOverrideVerticalStyle
          , i = a.observeDirectionality;
        i = i === void 0 ? !1 : i;
        a = a.spacing;
        a = a === void 0 ? .5 : a;
        e = g.jsxs(g.Fragment, {
            children: [e != null && g.jsxs(b("BaseView.react"), {
                xstyle: h.iconContainer,
                children: [g.jsx(b("BaseView.react"), {
                    xstyle: babelHelpers["extends"]({}, h.icon, f),
                    children: e
                }), g.jsx(b("CometNonBreakingSpace.react"), {
                    size: a
                })]
            }), c, d != null && g.jsxs(b("BaseView.react"), {
                xstyle: h.iconContainer,
                children: [g.jsx(b("CometNonBreakingSpace.react"), {
                    size: a
                }), g.jsx(b("BaseView.react"), {
                    xstyle: babelHelpers["extends"]({}, h.icon, f),
                    children: d
                })]
            })]
        });
        return i ? g.jsx("span", {
            dir: "auto",
            children: e
        }) : e
    }
}
), null);
__d("CometImageIcon.react", ["BaseImage_DEPRECATED.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c = a.auxiliary
          , d = a.size;
        d = d === void 0 ? 24 : d;
        var e = a.src
          , f = a.style;
        f = f === void 0 ? "circle" : f;
        a = a.testid;
        return h.jsxs("div", {
            className: "l9j0dhe7",
            children: [h.jsx(b("BaseImage_DEPRECATED.react"), {
                className: (g || (g = b("stylex"))).dedupe(f === "circle" ? {
                    "border-top-start-radius-1": "s45kfl79",
                    "border-top-end-radius-1": "emlxlaya",
                    "border-bottom-end-radius-1": "bkmhp75w",
                    "border-bottom-start-radius-1": "spb7xbtv"
                } : {}, {
                    "display-1": "a8c37x1j"
                }, f === "roundedRect" ? {
                    "border-top-start-radius-1": "ue3kfks5",
                    "border-top-end-radius-1": "pw54ja7n",
                    "border-bottom-end-radius-1": "uo3d90p7",
                    "border-bottom-start-radius-1": "l82x9zwi"
                } : null),
                height: d,
                src: e,
                testid: void 0,
                width: d
            }), f !== "square" ? h.jsx("div", {
                className: (g || (g = b("stylex"))).dedupe(f === "circle" ? {
                    "border-top-start-radius-1": "s45kfl79",
                    "border-top-end-radius-1": "emlxlaya",
                    "border-bottom-end-radius-1": "bkmhp75w",
                    "border-bottom-start-radius-1": "spb7xbtv"
                } : {}, {
                    "box-shadow-1": "oaz4zybt",
                    "position-1": "pmk7jnqg",
                    "start-1": "j9ispegn",
                    "top-1": "kr520xx4"
                }, f === "roundedRect" ? {
                    "border-top-start-radius-1": "ue3kfks5",
                    "border-top-end-radius-1": "pw54ja7n",
                    "border-bottom-end-radius-1": "uo3d90p7",
                    "border-bottom-start-radius-1": "l82x9zwi"
                } : null),
                style: {
                    height: d,
                    width: d
                }
            }) : null, c != null ? h.jsx("div", {
                className: "pmk7jnqg n7fi1qx3 i09qtzwb",
                children: c
            }) : null]
        })
    }
}
), null);
__d("ProfileCometContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        isInViewAs: !1,
        profileID: "",
        profileVanity: null,
        viewerID: ""
    });
    e.exports = c
}
), null);
__d("CometFullScreen", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    f.requestFullScreen = a;
    f.exitFullScreen = c;
    f.isSupported = d;
    f.getFullScreenElement = g;
    f.isFullScreen = e;
    f.getFullScreenChangeEventNames = h;
    f.subscribeToFullScreenChangeEvent = i;
    function a(a) {
        var c = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
        return typeof c === "function" ? c.call(a) : b("Promise").reject()
    }
    function c() {
        var a = document.exitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitExitFullscreen;
        return typeof a === "function" ? a.call(document) : b("Promise").reject()
    }
    function d() {
        return (typeof document.webkitFullscreenEnabled === "function" || typeof document.mozFullScreenEnabled === "function" || typeof document.msFullscreenEnabled === "function" || typeof document.fullscreenEnabled === "function") && (typeof document.webkitExitFullscreen === "function" || typeof document.mozCancelFullScreen === "function" || typeof document.msExitFullscreen === "function" || typeof document.exitFullscreen === "function")
    }
    function g() {
        return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || null
    }
    function e() {
        return g() != null
    }
    function h() {
        return ["webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange", "fullscreenchange"]
    }
    function i(a) {
        var b = window.document
          , c = !1
          , d = !0;
        h().forEach(function(e) {
            b.addEventListener(e, a, {
                capture: c,
                passive: d
            })
        });
        return function() {
            h().forEach(function(d) {
                b.removeEventListener(d, a, c)
            })
        }
    }
}
), null);
