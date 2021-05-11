__d("CometProfiler.react", ["CometHeroInteractionContext", 
	"CometHeroInteractionIDContext", 
	"React", "createProfilerOnCommitCallback",
	 "createProfilerOnPostCommitCallback", 
	 "createProfilerOnRenderCallback", "gkx"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	c = function (a) {
		a = a.children;
		return a
	};

	function a(a) {
		var c = a.children,
			d = a.id,
			e = a.isPagelet;
		e = e === void 0 ? !1 : e;
		a = a.logDurationToQPL;
		var f = g.useContext(b("CometHeroInteractionContext").Context),
			h = g.useContext(b("CometHeroInteractionIDContext"));
		a = b("createProfilerOnRenderCallback")(d, a === !0, h, e, f);
		var i = b("createProfilerOnCommitCallback")(d, h, e, f);
		h = b("createProfilerOnPostCommitCallback")(d, h, e, f);
		return g.jsx(g.Profiler, {
			id: d,
			onCommit: i,
			onPostCommit: h,
			onRender: a,
			children: c
		})
	}
	d = b("gkx")("823029") ? a : c;
	e.exports = d
}), null);