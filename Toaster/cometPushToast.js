__d("cometPushToast", ["ix", 
	"CometToasterStateManager", 
	"React", 
	"TetraIcon.react", 
	"deferredLoadComponent", 
	"fbicon", 
	"requireDeferred"], (function (a, b, c, d, e, f, g) {
	"use strict";
	f.cometPushToast = k;
	f.cometPushSimpleToast = a;
	f.cometPushErrorToast = c;
	var h = b("React"),
		i = b("CometToasterStateManager").getInstance(),
		j = b("deferredLoadComponent")(b("requireDeferred")("CometToast.react"));

	function k(a, b, c) {
		b === void 0 && (b = 2750);
		var d = (c = c) != null ? c : i,
			e = d.push(h.jsx(j, babelHelpers["extends"]({}, a, {
				loadImmediately: !0,
				onDismiss: function () {
					return d.expire(e)
				}
			})), b);
		return e
	}

	function a(a, b) {
		return k({
			message: a
		}, b)
	}

	function c(a, c, d) {
		c === void 0 && (c = 2750);
		return k(babelHelpers["extends"]({}, a, {
			icon: h.jsx(b("TetraIcon.react"), {
				color: "warning",
				icon: b("fbicon")._(g("502062"), 20)
			})
		}), c, d)
	}
}), null);