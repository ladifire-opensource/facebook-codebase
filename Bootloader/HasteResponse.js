__d("HasteResponse", ["Bootloader", "BootloaderEvents", "ClientConsistencyEventEmitter", "HasteSupportData", 
	"ServerJS", "TimeSlice", "performanceAbsoluteNow"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = {
		handleSRPayload: function (a) {
			var c = a.hsdp;
			a = a.hblp;
			c && b("HasteSupportData").handle(c);
			a && b("Bootloader").handlePayload(a);
			(a == null ? void 0 : a.consistency) != null && b("ClientConsistencyEventEmitter").emit("newEntry", a.consistency)
		},
		handle: function (a, c) {
			var d = a.jsmods,
				e = a.allResources;
			a = a.hsrp;
			var f = c.source,
				i = c.sourceDetail,
				j = c.onBlocking,
				k = c.onJSLoaded,
				l = c.onLog;
			c = c.onAll;
			var m = (g || (g = b("performanceAbsoluteNow")))();
			a && h.handleSRPayload(a);
			var n = 0,
				o = 0;
			b("Bootloader").loadResources((a = e) != null ? a : [], {
				onBlocking: function () {
					n = (g || (g = b("performanceAbsoluteNow")))(), new(b("ServerJS"))().handle(d || {}), o = g(), j == null ? void 0 : j()
				},
				onAll: (e = c) != null ? e : k,
				onLog: function (a) {
					a = {
						source: f,
						sourceDetail: i,
						timesliceContext: b("TimeSlice").getContext(),
						startTime: m,
						logTime: (g || (g = b("performanceAbsoluteNow")))(),
						jsmodsStart: n,
						jsmodsEnd: o,
						rsrcs: a
					};
					l == null ? void 0 : l(a);
					b("BootloaderEvents").notifyHasteResponse(a)
				}
			}, "HasteResponse:" + f + ":" + ((a = i) != null ? a : "<unknown>"))
		}
	};
	e.exports = h
}), null);