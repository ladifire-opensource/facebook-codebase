__d("MWChatMultitabProvider.bs", ["React", "MWCount.bs", "MWChatCrushState.bs", "MWChatMultitabContext.bs", "MWChatMultitabReducer.bs", "MWChatMultitabDispatcher.bs", "MWChatMultitabCookieReader.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			contents: void 0
		};

	function i(a) {
		b("MWCount.bs").Comet.load(void 0);
		a = b("MWChatMultitabDispatcher.bs").make(b("MWChatMultitabReducer.bs").reducer, b("MWChatMultitabCookieReader.bs").read(void 0));
		h.contents = a;
		return h.contents
	}

	function a(a) {
		a = h.contents;
		if (a !== void 0) return a.state;
		else return b("MWChatCrushState.bs").none
	}

	function c(a) {
		a = a.children;
		var c = h.contents;
		c = c !== void 0 ? c : i(void 0);
		return g.createElement(b("MWChatMultitabContext.bs").context.Provider, {
			value: c,
			children: a
		})
	}
	d = c;
	f.environment = h;
	f.createEnvironment = i;
	f.getStateSnapshot = a;
	f.make = d
}), null);