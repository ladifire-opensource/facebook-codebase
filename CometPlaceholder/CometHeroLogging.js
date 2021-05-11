__d("CometHeroLogging", ["CometHeroPendingPlaceholderTracker",
 "CometVisualCompletionConstants", "InteractionTracingMetrics", 
 "PromiseAnnotate", "gkx", "performanceNow", "requireCond", 
 "uuid", "cr:1808490", "cr:1791018", "cr:683059", "$InternalEnum"], (function (a, b, c, d, e, f) {
	"use strict";
	f.genCometHeroInteractionUUIDAndMarkStart = a;
	f.endCometHeroInteraction = c;
	f.markStart = k;
	f.markStartPlaceholder = d;
	f.markEnd = l;
	f.markEndPlaceholder = e;
	f.measure = m;
	f.getSimpleUUID = n;
	f.createThenableDescription = o;
	var g, h = {},
		i = 0,
		j = b("$InternalEnum").Mirrored(["Successful", "Aborted", "Failed"]);
	f.InteractionOutcome = j;

	function a(a, c) {
		a = (a = a) != null ? a : b("uuid")();
		k(a, "Interaction Start", c);
		b("cr:1791018") && b("cr:1791018").holdVCTrace(a, b("CometVisualCompletionConstants").HERO_TRACING_HOLD);
		b("InteractionTracingMetrics") && b("InteractionTracingMetrics").get(a) && b("InteractionTracingMetrics").addMarkerPoint(a, "HeroTrace_start", "AppTiming");
		b("CometHeroPendingPlaceholderTracker").addInteraction(a);
		return a
	}

	function c(a, c) {
		b("CometHeroPendingPlaceholderTracker").removeInteraction(a), b("InteractionTracingMetrics").get(a) && (b("InteractionTracingMetrics").addMarkerPoint(a, "HeroTrace_end", "AppTiming"), c === j.Aborted && (b("InteractionTracingMetrics").addMetadata(a, "aborted", 1), b("InteractionTracingMetrics").addMetadata(a, "cancelType", "aborted"))), b("cr:1791018") && b("cr:1791018").resumeVCTrace(a, b("CometVisualCompletionConstants").HERO_TRACING_HOLD), b("cr:683059") && b("cr:683059").resumeTrigger(a), b("gkx")("1409295") && b("InteractionTracingMetrics").complete(a)
	}

	function k(a, c, d) {
		a = c + a;
		h[a] = (a = d) != null ? a : (g || (g = b("performanceNow")))();
		b("cr:1808490") !== null && b("cr:1808490").measureStart(c)
	}

	function d(a, c, d, e, f) {
		k(a, c, d);
		e != null && f != null ? d = (e.length > 0 ? e[e.length - 1] : "") + ":" + f : d = c + "_" + a;
		b("CometHeroPendingPlaceholderTracker").addPlaceholder(a, c, d)
	}

	function l(a, c, d, e, f, g, i) {
		var j = f + a;
		j = h[j];
		j != null && m(a, c, d, e, j, i, g);
		b("CometHeroPendingPlaceholderTracker").removePlaceholder(a, f)
	}

	function e(a, c, d, e, f, g, h) {
		l(a, c, d, e, f, g, h), b("CometHeroPendingPlaceholderTracker").removePlaceholder(a, f)
	}

	function m(a, c, d, e, f, h, i) {
		h === void 0 && (h = (g || (g = b("performanceNow")))());
		b("InteractionTracingMetrics").addSubspan(a, e, "HeroTracing", f, (a = h) != null ? a : (g || (g = b("performanceNow")))(), babelHelpers["extends"]({}, i, {
			pagelet: c[c.length - 1],
			pageletStack: c,
			spanType: d
		}));
		b("cr:1808490") !== null && b("cr:1808490").measureModern(e, {
			end: h,
			start: f
		}, d)
	}

	function n() {
		return String(i++)
	}

	function o(a) {
		if (a != null && a.size > 0) return Array.from(a).map(function (a) {
			a = b("PromiseAnnotate").getDisplayName(a);
			if (a != null) return a;
			else return "Promise"
		}).join(",");
		else return null
	}
}), null);