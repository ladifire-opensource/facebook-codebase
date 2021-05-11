__d("jsRouteBuilder", ["ConstUriUtils", "FBLogger", "routeBuilderUtils"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, c, d, e, f) {
		f === void 0 && (f = !1);
		var g = b("routeBuilderUtils").getPathParts(a);

		function h(f) {
			var h = e != null ? babelHelpers["extends"]({}, e, f) : f,
				i = {};
			f = "";
			var j = !1;
			f = g.reduce(function (a, b) {
				if (!b.isToken) return a + "/" + b.part;
				else {
					var d, e = b.optional,
						f = b.prefix,
						g = b.suffix;
					b = b.token;
					if (e && j) return a;
					d = (d = h[b]) != null ? d : c[b];
					if (d == null && e) {
						j = !0;
						return a
					}
					if (d == null) throw new Error("Missing required template parameter: " + b);
					if (d === "") throw new Error("Required template parameter is an empty string: " + b);
					i[b] = !0;
					return a + "/" + f + d + g
				}
			}, "");
			a.slice(-1) === "/" && (f += "/");
			f === "" && (f = "/");
			var k = b("ConstUriUtils").getUri(f);
			for (var l in h) {
				var m = h[l];
				!i[l] && m != null && k != null && (d != null && d.has(l) ? m !== !1 && (k = k.addQueryParam(l, null)) : k = k.addQueryParam(l, m))
			}
			return k == null ? f : k.toString()
		}
		return {
			buildURL: function (c) {
				try {
					return h(c)
				} catch (e) {
					c = e == null ? void 0 : e.message;
					var d = b("FBLogger")("JSRouteBuilder").blameToPreviousFrame();
					f && (d = d.blameToPreviousFrame());
					d.mustfix("Failed building URL for base path: %s message: %s", a, c);
					return "#"
				}
			}
		}
	}
}), null);