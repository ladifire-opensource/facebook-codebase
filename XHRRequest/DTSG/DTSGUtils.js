__d("DTSGUtils", ["SprinkleConfig", "isCdnURI", "isFacebookURI", "isMessengerDotComURI", 
	"isOculusDotComURI", "isWorkplaceDotComURI"], (function (a, b, c, d, e, f) {
	"use strict";
	a = {
		getNumericValue: function (a) {
			var c = 0;
			for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
			c = c.toString();
			return b("SprinkleConfig").should_randomize ? c : b("SprinkleConfig").version + c
		},
		shouldAppendToken: function (a) {
			return !b("isCdnURI")(a) && !a.isSubdomainOfDomain("fbsbx.com") && (b("isFacebookURI")(a) || b("isMessengerDotComURI")(a) || b("isWorkplaceDotComURI")(a) || b("isOculusDotComURI")(a) || a.isSubdomainOfDomain("freebasics.com") || a.isSubdomainOfDomain("discoverapp.com"))
		}
	};
	e.exports = a
}), null);


// TODO
// ["SprinkleConfig", [], {
// 									"param_name": "jazoest",
// 									"version": 2,
// 									"should_randomize": false
// 								}, 2111],