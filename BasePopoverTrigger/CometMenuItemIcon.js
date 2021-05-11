__d("CometMenuItemIcon.react", ["CometImageIcon.react", 
    "IconSource", "ImageIconSource", "React", "TetraIcon.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        contained: {
            backgroundColor: "tdjehn4e",
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            height: "tv7at329",
            minWidth: "odlk74j0"
        },
        root: {
            alignItems: "bp9cbjyn",
            alignSelf: "tiyi1ipj",
            display: "j83agx80",
            justifyContent: "taijpn5t",
            marginEnd: "tvfksri0"
        }
    };
    function a(a) {
        var c = a.disabled
          , d = a.icon
          , e = a.iconColor
          , f = a.iconCssSelectorId;
        a = a.use;
        var j = a === void 0 ? "normal" : a;
        a = h.useMemo(function() {
            if (d instanceof b("IconSource")) {
                var a;
                return h.jsx(b("TetraIcon.react"), {
                    color: (a = e) != null ? a : "primary",
                    disabled: c,
                    icon: d
                })
            }
            if (d instanceof b("ImageIconSource"))
                return h.jsx(b("TetraIcon.react"), {
                    disabled: c,
                    icon: d
                });
            return typeof d === "object" && typeof d !== "function" ? h.jsx(b("CometImageIcon.react"), babelHelpers["extends"]({}, d, {
                size: j === "contained" ? 36 : 20
            })) : h.jsx(b("TetraIcon.react"), {
                color: (a = e) != null ? a : "secondary",
                disabled: c,
                icon: d
            })
        }, [c, d, e, j]);
        return h.jsx("div", {
            className: (g || (g = b("stylex")))([i.root, (j === "contained" || j === "contained_small_icon") && i.contained]),
            id: f,
            children: a
        })
    }
    c = h.memo(a);
    e.exports = c
}
), null);