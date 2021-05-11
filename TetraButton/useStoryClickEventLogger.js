__d("useStoryClickEventLogger", ["CometFeedClickEventsLoggerContext", 
	"CometFeedLoggingExtraFieldsContext", "CometTrackingCodeContext",
	 "CometTrackingNodesContext", "MailLinkUtils", "React", "getAbsoluteUrl"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a() {
		var a = g.useContext(b("CometFeedClickEventsLoggerContext")),
			c = g.useContext(b("CometTrackingNodesContext")),
			d = g.useContext(b("CometTrackingCodeContext")),
			e = d.encrypted_tracking[0],
			f = g.useContext(b("CometFeedLoggingExtraFieldsContext"));
		return g.useCallback(function (d, g, h, i) {
			var j = h;
			b("MailLinkUtils").isMailToLink(h) || (j = b("getAbsoluteUrl")(h));
			a(d, c, e, g, j, f, i)
		}, [a, c, e, f])
	}
}), null);