__d("CometFeedMatchRenderer.react", ["CometErrorBoundary.react", "CometFeedUnitLoggingContext", "CometFeedUnitOnFeedUnitErrorContext", "CometFeedUnitShouldPropagateErrorContext", "CometOnInitialMount.react", "CometRelay", "FBLogger", "ODS", "react", "recoverableViolation", "requireDeferred", "useCommitCountRef"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = g || b("react"),
		i = b("requireDeferred")("CometFeedStoriesStrategyErrorsTypedLoggerLite");

	function a(a) {
		var c = a.match,
			d = a.matchRequired,
			e = d === void 0 ? !1 : d,
			f = a.onUnsupported;
		d = a.preventErrorsFromFailingTheFeedUnit_USE_WITH_CAUTION;
		var g = a.props,
			j = a.section,
			k = a.trackingData,
			l = b("useCommitCountRef")(),
			m = h.useContext(b("CometFeedUnitOnFeedUnitErrorContext"));
		a = h.useContext(b("CometFeedUnitShouldPropagateErrorContext"));
		var n = h.useContext(b("CometFeedUnitLoggingContext")),
			o = n.position,
			p = n.renderLocation,
			q = c != null ? b("CometRelay").ModuleResource.getModuleId(c) : null,
			r = h.useRef(!1);
		h.useEffect(function() {
			!r.current && q != null && (b("ODS").bumpFraction(3478, "comet_feed_strategy_errors", q, 0, 1), r.current = !0)
		}, [q]);
		n = function() {
			f != null && f(), e && b("recoverableViolation")("match required for Comet Feed section " + j + " and none was found", "comet_feed")
		};
		var s = d != null ? !d : a;
		d = h.useCallback(function(a) {
			q != null && b("ODS").bumpFraction(3478, "comet_feed_strategy_errors", q, 1, 0);
			i.onReady(function(b) {
				b.log({
					error_name: a.message,
					error_propagated_to_feed_unit: m != null && s,
					is_within_feed_unit: m != null,
					num_commits_before_error: l.current,
					position: o,
					render_location: p !== "%future added value" ? p : null,
					section: j,
					strategy: q,
					tracking_data: k
				})
			});
			if (m == null) {
				var c;
				b("FBLogger")("CometFeedSectionErrorOutsideFeedUnit").info(((c = q) != null ? c : "Unknown Strategy/Attachment Renderer") + " threw a js error outside of CometFeedUnit.");
				throw a
			} else s && m(a)
		}, [m, s, l, q, o, p, j, k]);
		return c == null ? h.jsx(b("CometOnInitialMount.react"), {
			onInitialMount: n
		}) : h.jsx(b("CometErrorBoundary.react"), {
			context: {
				project: "CometFeedSectionErrorBoundary"
			},
			onError: d,
			children: h.jsx(b("CometFeedUnitShouldPropagateErrorContext").Provider, {
				value: s,
				children: h.jsx(b("CometRelay").MatchContainer, {
					fallback: h.jsx(b("CometOnInitialMount.react"), {
						onInitialMount: n
					}),
					match: c,
					props: g
				})
			})
		})
	}
}), null);