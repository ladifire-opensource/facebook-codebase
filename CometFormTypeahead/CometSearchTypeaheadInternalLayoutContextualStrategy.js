__d("CometSearchTypeaheadInternalLayoutContextualStrategy.react", [
	"CometContextualLayer.react", "CometHeroHoldTrigger.react", 
	"CometHeroInteractionWithDiv.react", 
	"CometSearchTypeaheadBaseInputStrategyEventListener.react", 
	"CometSearchTypeaheadBaseViewStrategyEventListener.react", "React", 
	"cometWithHighlightDropOnMouseLeave", "mergeRefs", "stylex", 
	"useCometSearchInternalTypeaheadHeroTracing", 
	"useCometSearchInternalTypeaheadState", 
	"useCometSearchTypeaheadBaseLayoutStrategyStyles"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			helperText: {
				marginTop: "aov4n071"
			},
			view: {
				backgroundColor: "cwj9ozl2",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr",
				width: "k4urcfbm"
			},
			viewWithShadow: {
				boxShadow: "o55z2nyb"
			}
		};

	function a(a, c) {
		var d = a.contextualProps;
		d = d === void 0 ? {} : d;
		var e = d.align;
		e = e === void 0 ? "stretch" : e;
		var f = d.position;
		f = f === void 0 ? "below" : f;
		d = babelHelpers.objectWithoutPropertiesLoose(d, ["align", "position"]);
		var j = a.extraLayoutProps,
			k = j.ariaProps,
			l = k.ariaDescribedByProps,
			m = k.ariaInputProps,
			n = k.ariaViewProps;
		k = j.helperTextComponent;
		var o = j.isOpened,
			p = j.loadingIndicator,
			q = a.inputStrategyRenderer,
			r = a.label;
		j = a.onBackspace;
		var s = a.onBlur,
			t = a.onFocus,
			u = a.onClick,
			v = a.onDownArrow,
			w = a.onEnter,
			x = a.onEscape,
			y = a.onShiftTab,
			z = a.onTab,
			A = a.onUpArrow,
			B = a.queryString,
			C = a.viewStrategyRenderer,
			D = a.xstyles,
			E = a.traceProvider,
			F = babelHelpers.objectWithoutPropertiesLoose(a, ["contextualProps", "extraLayoutProps", "inputStrategyRenderer", "label", "onBackspace", "onBlur", "onFocus", "onClick", "onDownArrow", "onEnter", "onEscape", "onShiftTab", "onTab", "onUpArrow", "queryString", "viewStrategyRenderer", "xstyles", "traceProvider"]);
		a = h.useRef(null);
		var G = h.useRef(null),
			H = G.current,
			I = b("useCometSearchInternalTypeaheadState")(),
			J = I.activeEntries,
			K = I.highlightedEntry,
			L = I.highlightedEntrySource;
		I = b("useCometSearchTypeaheadBaseLayoutStrategyStyles")({
			isOpened: o,
			xstyles: D
		});
		D = I.inputXStyle;
		var M = I.layoutXStyle,
			N = I.viewXStyle,
			O = h.useMemo(function () {
				return b("cometWithHighlightDropOnMouseLeave")(C)
			}, [C]);
		I = b("useCometSearchInternalTypeaheadHeroTracing")(E, F.onChange);
		var P = I.interactionUUID;
		E = I.onTracedChange;
		var Q = I.shouldHoldHeroTracing,
			R = I.vcTrackerRef;
		return h.jsxs(h.Fragment, {
			children: [h.jsx("div", {
				className: (g || (g = b("stylex")))(M),
				ref: G,
				children: h.jsx("div", {
					className: g(D),
					children: h.jsx(b("CometSearchTypeaheadBaseInputStrategyEventListener.react"), {
						onBackspace: j,
						onBlur: s,
						onChange: E,
						onClick: u,
						onDownArrow: v,
						onEnter: w,
						onEscape: x,
						onFocus: t,
						onShiftTab: y,
						onTab: z,
						onUpArrow: A,
						ref: c,
						children: function (a, b) {
							return h.jsx(q, babelHelpers["extends"]({}, m, b, {
								autoFocus: F.autoFocus,
								id: F.id,
								inputEndContent: F.inputEndContent,
								inputExtraProps: F.inputExtraProps,
								inputStartContent: F.inputStartContent,
								isDisabled: F.isDisabled,
								label: r,
								placeholder: F.placeholder,
								queryString: Boolean(F.shouldQueryStringFollowHighlightedEntry) && L === "keyboard" && K != null ? K.getLabel() : B,
								ref: a,
								testid: void 0
							}))
						}
					})
				})
			}), k != null && h.jsx("div", babelHelpers["extends"]({
				className: (g || (g = b("stylex")))(i.helperText)
			}, l, {
				children: k
			})), H && o && h.jsx(b("CometContextualLayer.react"), babelHelpers["extends"]({}, d, {
				align: e,
				context_DEPRECATED: H,
				position: f,
				ref: a,
				children: h.jsx(b("CometSearchTypeaheadBaseViewStrategyEventListener.react"), {
					onOutsideClick: F.onOutsideClick,
					children: function (a) {
						return h.jsxs(b("CometHeroInteractionWithDiv.react"), {
							interactionDesc: "Search_Typeahead",
							interactionUUID: P,
							pageletAriaProps: n,
							ref: b("mergeRefs")(R, a),
							xstyle: [i.view, i.viewWithShadow, N],
							children: [h.jsx(b("CometHeroHoldTrigger.react"), {
								description: "SearchInternalTypeahead",
								hold: Q
							}), h.jsx(O, {
								entries: J,
								highlightedEntry: K,
								onAbandonTypeahead_DO_NOT_USE: F.onAbandonTypeahead_DO_NOT_USE,
								onHighlightEntry: F.onHighlightEntry,
								onPressEntry: F.onPressEntry,
								queryString: B
							}), p]
						})
					}
				})
			}))]
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);