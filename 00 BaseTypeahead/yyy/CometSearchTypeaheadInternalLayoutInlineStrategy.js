__d("CometSearchTypeaheadInternalLayoutInlineStrategy.react", [
	"CometHeroHoldTrigger.react", 
	"CometHeroInteractionWithDiv.react", 
	"CometSearchTypeaheadBaseInputStrategyEventListener.react", 
	"CometSearchTypeaheadBaseViewStrategyEventListener.react", "React", 
	"cometWithHighlightDropOnMouseLeave", "stylex", "useCometSearchInternalTypeaheadHeroTracing",
	 "useCometSearchInternalTypeaheadState", "useCometSearchTypeaheadBaseLayoutStrategyStyles"], (function (a, b, c, d, e, f) {
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
				flexGrow: "buofh1pr"
			}
		};

	function a(a, c) {
		var d = a.extraLayoutProps,
			e = d.ariaProps,
			f = e.ariaDescribedByProps,
			j = e.ariaInputProps,
			k = e.ariaViewProps;
		e = d.helperTextComponent;
		var l = d.isOpened,
			m = d.loadingIndicator,
			n = a.inputStrategyRenderer,
			o = a.label;
		d = a.onBackspace;
		var p = a.onBlur,
			q = a.onClick,
			r = a.onDownArrow,
			s = a.onEnter,
			t = a.onEscape,
			u = a.onFocus,
			v = a.onShiftTab,
			w = a.onTab,
			x = a.onUpArrow,
			y = a.queryString,
			z = a.traceProvider,
			A = a.viewStrategyRenderer,
			B = a.xstyles,
			C = babelHelpers.objectWithoutPropertiesLoose(a, ["extraLayoutProps", "inputStrategyRenderer", "label", "onBackspace", "onBlur", "onClick", "onDownArrow", "onEnter", "onEscape", "onFocus", "onShiftTab", "onTab", "onUpArrow", "queryString", "traceProvider", "viewStrategyRenderer", "xstyles"]);
		a = b("useCometSearchInternalTypeaheadState")();
		var D = a.activeEntries,
			E = a.highlightedEntry,
			F = a.highlightedEntrySource;
		a = b("useCometSearchTypeaheadBaseLayoutStrategyStyles")({
			isOpened: l,
			xstyles: B
		});
		B = a.inputXStyle;
		var G = a.layoutXStyle,
			H = a.viewXStyle,
			I = h.useMemo(function () {
				return b("cometWithHighlightDropOnMouseLeave")(A)
			}, [A]);
		a = b("useCometSearchInternalTypeaheadHeroTracing")(z, C.onChange);
		z = a.interactionUUID;
		var J = a.onTracedChange,
			K = a.shouldHoldHeroTracing;
		a = a.vcTrackerRef;
		return h.jsxs(b("CometHeroInteractionWithDiv.react"), {
			interactionDesc: "Search_Typeahead",
			interactionUUID: z,
			ref: a,
			xstyle: G,
			children: [h.jsx(b("CometHeroHoldTrigger.react"), {
				description: "SearchInternalTypeahead",
				hold: K
			}), h.jsx("div", {
				className: (g || (g = b("stylex")))(B),
				children: h.jsx(b("CometSearchTypeaheadBaseInputStrategyEventListener.react"), {
					onBackspace: d,
					onBlur: p,
					onChange: J,
					onClick: q,
					onDownArrow: r,
					onEnter: s,
					onEscape: t,
					onFocus: u,
					onShiftTab: v,
					onTab: w,
					onUpArrow: x,
					ref: c,
					children: function (a, b) {
						return h.jsx(n, babelHelpers["extends"]({}, j, b, {
							autoFocus: C.autoFocus,
							inputEndContent: C.inputEndContent,
							inputExtraProps: C.inputExtraProps,
							inputStartContent: C.inputStartContent,
							isDisabled: C.isDisabled,
							label: o,
							placeholder: C.placeholder,
							queryString: Boolean(C.shouldQueryStringFollowHighlightedEntry) && F === "keyboard" && E != null ? E.getLabel() : y,
							ref: a,
							testid: void 0
						}))
					}
				})
			}), e != null && h.jsx("div", babelHelpers["extends"]({
				className: (g || (g = b("stylex")))(i.helperText)
			}, f, {
				children: e
			})), l && h.jsx(b("CometSearchTypeaheadBaseViewStrategyEventListener.react"), {
				onOutsideClick: C.onOutsideClick,
				children: function (a) {
					return h.jsxs("div", babelHelpers["extends"]({}, k, {
						className: (g || (g = b("stylex")))(i.view, H),
						ref: a,
						children: [h.jsx(I, {
							entries: D,
							highlightedEntry: E,
							onAbandonTypeahead_DO_NOT_USE: C.onAbandonTypeahead_DO_NOT_USE,
							onHighlightEntry: C.onHighlightEntry,
							onPressEntry: C.onPressEntry,
							queryString: y
						}), m]
					}))
				}
			})]
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);