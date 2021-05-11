__d("MWInboxPersistedUIState.bs", ["React", "WebStorage", "bs_caml_option", "recoverableViolation"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = (g || (g = b("WebStorage"))).getLocalStorage();

	function a(a, c) {
		var d = h.useState(function() {
				var d = i.getItem(c);
				if (d == null) return a;
				try {
					d = b("bs_caml_option").some(JSON.parse(d))
				} catch (a) {
					b("recoverableViolation")("Unable to parse value at " + c, "messenger_web_product"), d = void 0
				}
				if (d !== void 0) return b("bs_caml_option").valFromOption(d);
				else return a
			}),
			e = d[0];
		h.useEffect(function() {
			var a = JSON.stringify(e);
			if (a !== void 0) {
				a = (g || (g = b("WebStorage"))).setItemGuarded(i, c, a);
				a == null || b("recoverableViolation")("Unable to set item at path " + c, "messenger_web_product")
			}
		}, [e, c]);
		return [e, d[1]]
	}
	f.localStorage = i;
	f.useHook = a
}), null);