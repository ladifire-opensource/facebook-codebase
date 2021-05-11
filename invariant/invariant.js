__d("invariant", ["Env", "TAALOpcodes", "sprintf"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g;

	function a(a, c) {
		if (!a) {
			var d = c;
			for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
			if (typeof d === "number") {
				var i = h(d, f),
					j = i.message,
					k = i.decoderLink;
				d = j;
				f.unshift(k)
			} else if (d === void 0) {
				d = "Invariant: ";
				for (var l = 0; l < f.length; l++) d += "%s,"
			}
			var m = d,
				n = new Error(m);
			n.name = "Invariant Violation";
			n.messageFormat = d;
			n.messageParams = f.map(function (a) {
				return String(a)
			});
			n.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FRAME];
			n.stack;
			throw n
		}
	}

	function h(a, c) {
		var d = "Minified invariant #" + a + "; %s";
		c.length > 0 && (d += " Params: " + c.map(function (a) {
			return "%s"
		}).join(", "));
		a = (g || (g = b("Env"))).show_invariant_decoder === !0 ? "visit " + i(a, c) + " to see the full message." : "";
		return {
			message: d,
			decoderLink: a
		}
	}

	function i(a, b) {
		a = "https://www.internalfb.com/intern/invariant/" + a + "/";
		b.length > 0 && (a += "?" + b.map(function (a, b) {
			return "args[" + b + "]=" + encodeURIComponent(String(a))
		}).join("&"));
		return a
	}
}), null);