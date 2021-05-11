__d("useFeedImageErrorEventLoggerCbs", ["Banzai", "CometInteractionSourceContext", "Random", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 1e3,
		i = function (a) {
			var c = a.result,
				d = a.src;
			a = a.surface;
			b("Random").coinflip(h) && b("Banzai").post("logger:WWWImageLoadSrcEventLoggerConfig", {
				surface: a,
				src: d,
				result: c
			})
		};

	function a(a) {
		var c = a.onError,
			d = a.onLoad,
			e = a.src,
			f = g.useRef(null);
		a = g.useContext(b("CometInteractionSourceContext"));
		var h = a === 3 ? "profile" : a === 0 ? "feed" : null;
		a = g.useCallback(function (a) {
			d != null && d(a);
			if (f.current === e) return;
			typeof e === "string" && (i({
				result: "success",
				src: e,
				surface: h
			}), f.current = e)
		}, [d, e, h]);
		var j = g.useCallback(function (a) {
			c != null && c(a);
			if (f.current === e) return;
			typeof e === "string" && (i({
				result: "error",
				src: e,
				surface: h
			}), f.current = e)
		}, [c, e, h]);
		return h == null || typeof e !== "string" ? {
			_onError: c,
			_onLoad: d
		} : {
			_onError: j,
			_onLoad: a
		}
	}
}), null);