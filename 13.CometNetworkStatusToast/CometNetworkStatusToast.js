__d("CometNetworkStatusToast", ["ix", "fbt", "CometIconWirelessSlashFilled.react", "CometRelayEnvironmentFactory", "CometToasterStateManager", "NetworkStatus", "React", "TetraIcon.react", "cometPushToast", "fbicon"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    f.subscribe = a;
    var i = b("React")
      , j = null;
    function k(a) {
        a = a.online;
        var c = b("CometToasterStateManager").getInstance();
        j != null && (c.expire(j),
        j = null);
        j = a ? b("cometPushToast").cometPushToast({
            icon: i.jsx(b("TetraIcon.react"), {
                color: "positive",
                icon: b("fbicon")._(g("485124"), 24)
            }),
            message: h._("\u0110\u00e3 kh\u00f4i ph\u1ee5c k\u1ebft n\u1ed1i Internet.")
        }, 4e3, c) : b("cometPushToast").cometPushToast({
            action: {
                label: h._("L\u00e0m m\u1edbi"),
                onPress: function() {
                    b("CometRelayEnvironmentFactory").commitLocalUpdateForEachEnvironment(function(a, b, c) {
                        c.invalidateStore()
                    })
                }
            },
            icon: i.jsx(b("TetraIcon.react"), {
                color: "disabled",
                icon: b("CometIconWirelessSlashFilled.react"),
                size: 24
            }),
            message: h._("B\u1ea1n \u0111ang offline.")
        }, Infinity, c)
    }
    function a() {
        b("NetworkStatus").onChange(k)
    }
}
), null);