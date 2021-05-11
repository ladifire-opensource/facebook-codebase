if (self.CavalryLogger) {
    CavalryLogger.start_js(["XFgmu"]);
}

__d("FDSPrivateGuidanceCardIconLayout.react", ["FlexLayout.react", "Image.react", "React", "cxMargin"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return a.icon != null ? g.jsxs(b("FlexLayout.react"), {
            align: "center",
            children: [g.jsx(b("Image.react"), {
                className: "_3-8_",
                src: a.icon
            }), a.children]
        }) : a.children
    }
}
), null);
__d("FDSGuidanceCardContentLink.react", ["FDSLink.react", "FDSPrivateGuidanceCardIconLayout.react", "React", "makeFDSGuidanceCardContentComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c;
        return g.jsx(b("FDSLink.react"), {
            "data-testid": void 0,
            display: "block",
            href: a.href,
            onClick: a.onPress,
            rel: a.rel,
            target: (c = a.target) != null ? c : "_blank",
            children: g.jsx(b("FDSPrivateGuidanceCardIconLayout.react"), {
                icon: a.icon,
                children: a.children
            })
        })
    }
    c = b("makeFDSGuidanceCardContentComponent")(a);
    e.exports = c
}
), null);
__d("XRelayBootloadController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/relay/bootload/", {
        component: {
            type: "String",
            required: !0
        },
        params: {
            type: "String",
            required: !0
        },
        route: {
            type: "String",
            required: !0
        },
        uri: {
            type: "String",
            required: !0
        },
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
__d("dliteRoot", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        return a
    }
    a.toString_DO_NOT_USE = function(a) {
        return a
    }
}
), null);
__d("forceSubdomain", ["URI"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g;
    function a(a, c) {
        var d = new (g || (g = b("URI")))(window.location.href)
          , e = d.getDomain().split(".");
        e.length <= 2 ? e.unshift(c) : e[0] = c;
        return new g(a).setProtocol(d.getProtocol()).setDomain(e.join(".")).setPort(d.getPort())
    }
}
), null);
