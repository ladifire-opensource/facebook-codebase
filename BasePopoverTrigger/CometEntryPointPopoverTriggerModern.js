__d("CometEntryPointPopoverTriggerModern.react", ["BasePopoverTrigger.react", 
	"CometPopoverLoadingState.react", "CometRelay", "React", "deepEquals",
	 "useCometPopoverInteractionTracing", "useCometRelayEntrypointContextualEnvironmentProvider"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a) {
		a.entryPointParams;
		var c = a.entryPointReference,
			d = a.load,
			e = a.otherProps,
			f = babelHelpers.objectWithoutPropertiesLoose(a, ["entryPointParams", "entryPointReference", "load", "otherProps"]);
		a = g.useMemo(function () {
			return babelHelpers["extends"]({}, e, f)
		}, [e, f]);
		g.useLayoutEffect(function () {
			c == null && d()
		}, [c, d]);
		return c == null ? null : g.jsx(b("CometRelay").EntryPointContainer, {
			entryPointReference: c,
			props: a
		})
	}

	function a(a) {
		var c = a.fallback;
		c = c === void 0 ? g.jsx(b("CometPopoverLoadingState.react"), {
			withArrow: !0
		}) : c;
		var d = a.popoverEntryPoint,
			e = a.entryPointParams,
			f = a.otherProps,
			i = a.preloadTrigger,
			j = a.tracePolicy,
			k = a.onVisibilityChange,
			l = a.doNotCloseOnOutsideClick;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback", "popoverEntryPoint", "entryPointParams", "otherProps", "preloadTrigger", "tracePolicy", "onVisibilityChange", "doNotCloseOnOutsideClick"]);
		j = b("useCometPopoverInteractionTracing")(j);
		var m = b("useCometRelayEntrypointContextualEnvironmentProvider")();
		m = b("CometRelay").useEntryPointLoader(m, d);
		var n = m[0],
			o = m[1],
			p = m[2],
			q = g.useRef(null),
			r = g.useCallback(function () {
				if (e == null) return;
				if (n !== null && b("deepEquals")(q.current, e)) return;
				q.current = e;
				o(e)
			}, [e, n, o]);
		m = g.useMemo(function () {
			return {
				entryPointParams: e,
				entryPointReference: n,
				load: r,
				otherProps: f
			}
		}, [e, n, r, f]);
		var s = g.useCallback(function () {
			(arguments.length <= 0 ? void 0 : arguments[0]) ? r(): p(), k && k.apply(void 0, arguments)
		}, [r, p, k]);
		return g.jsx(b("BasePopoverTrigger.react"), babelHelpers["extends"]({
			doNotCloseOnOutsideClick: l,
			fallback: c,
			interactionTracker: j,
			onHighIntentPreload: r,
			onVisibilityChange: s,
			popover: h,
			popoverPreloadResource: d.root,
			popoverProps: m,
			preloadTrigger: i
		}, a))
	}
}), null);