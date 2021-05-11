__d("generateLiteTypedLogger", ["Banzai", "getDataWithLoggerOptions"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		return {
			log: function (c, d) {
				b("Banzai").post(a, b("getDataWithLoggerOptions")(c, d), b("Banzai").BASIC)
			},
			logVital: function (c, d) {
				b("Banzai").post(a, b("getDataWithLoggerOptions")(c, d), b("Banzai").VITAL)
			},
			logImmediately: function (c, d) {
				b("Banzai").post(a, b("getDataWithLoggerOptions")(c, d), {
					signal: !0
				})
			}
		}
	}
}), null);