__d("useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers", ["React", "useCometSearchInternalTypeaheadState", "useCometSearchInternalTypeaheadStateDispatcher", "useCometSearchTypeaheadInternalLayoutInlineStrategyHandlers"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.inputRef,
			d = a.onAbandonTypeahead_DO_NOT_USE,
			e = a.onClick,
			f = a.onOutsideClick,
			h = a.onShiftTab,
			i = a.onTab,
			j = babelHelpers.objectWithoutPropertiesLoose(a, ["inputRef", "onAbandonTypeahead_DO_NOT_USE", "onClick", "onOutsideClick", "onShiftTab", "onTab"]);
		a = b("useCometSearchInternalTypeaheadState")();
		var k = a.isOpened;
		a = b("useCometSearchInternalTypeaheadStateDispatcher")();
		var l = a.dispatchIsOpened;
		a = g.useCallback(function () {
			l(!1), f && f()
		}, [l, f]);
		c = b("useCometSearchTypeaheadInternalLayoutInlineStrategyHandlers")(babelHelpers["extends"]({
			inputRef: c,
			onOutsideClick: a
		}, j));
		a = c.onBlur;
		var m = c.onChange,
			n = c.onDownArrow,
			o = c.onEnter,
			p = c.onEscape,
			q = c.onHighlightEntry,
			r = c.onOutsideClick,
			s = c.onPressEntry,
			t = c.onUpArrow;
		c = g.useCallback(function () {
			l(!1), d && d()
		}, [l, d]);
		var u = g.useCallback(function () {
				l(!0), e && e()
			}, [l, e]),
			v = g.useCallback(function (a, b) {
				l(!0), m && m(a, b)
			}, [l, m]),
			w = g.useCallback(function () {
				k ? n && n() : l(!0)
			}, [l, k, n]),
			x = g.useCallback(function () {
				l(!1), o && o()
			}, [l, o]),
			y = g.useCallback(function () {
				k ? (l(!1), j.onEscape && j.onEscape()) : p && p()
			}, [l, j, k, p]),
			z = g.useCallback(function (a, b) {
				l(!1), s && s(a, b)
			}, [l, s]),
			A = g.useCallback(function () {
				l(!1), h && h()
			}, [l, h]),
			B = g.useCallback(function () {
				l(!1), i && i()
			}, [l, i]),
			C = g.useCallback(function () {
				!k ? l(!0) : t && t()
			}, [l, k, t]);
		return {
			onAbandonTypeahead_DO_NOT_USE: c,
			onBlur: a,
			onChange: v,
			onClick: u,
			onDownArrow: w,
			onEnter: x,
			onEscape: y,
			onHighlightEntry: q,
			onOutsideClick: r,
			onPressEntry: z,
			onShiftTab: A,
			onTab: B,
			onUpArrow: C
		}
	}
}), null);