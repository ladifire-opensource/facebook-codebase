__d("CometSearchTypeaheadBaseInputStrategyEventListener.react", ["fbt", 
	"CometComponentWithKeyCommands.react", "CometKeys", "React", "stylex", 
	"useCometSearchTypeaheadBaseInputHandlers", "useCometSearchTypeaheadBaseInputRefs"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = {
			root: {
				width: "k4urcfbm"
			}
		};

	function a(a, c) {
		var d = a.children,
			e = a.isInline,
			f = a.onBackspace,
			j = a.onDownArrow,
			k = a.onEnter,
			l = a.onEscape,
			m = a.onShiftTab,
			n = a.onTab,
			o = a.onUpArrow;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "isInline", "onBackspace", "onDownArrow", "onEnter", "onEscape", "onShiftTab", "onTab", "onUpArrow"]);
		var p = h.useMemo(function () {
			var a;
			return [{
				command: {
					key: (a = b("CometKeys")).DELETE
				},
				description: g._("X\u00f3a k\u00fd t\u1ef1 cu\u1ed1i kh\u1ecfi c\u1ee5m t\u1eeb nh\u1eadp v\u00e0o."),
				handler: function () {
					return f && f()
				},
				isHiddenCommand: !0,
				shouldPreventDefault: !1,
				triggerFromInputs: !0
			}, {
				command: {
					key: a.DOWN
				},
				description: g._("G\u1ee3i \u00fd ti\u1ebfp theo"),
				handler: function () {
					return j && j()
				},
				triggerFromInputs: !0
			}, {
				command: {
					key: a.UP
				},
				description: g._("G\u1ee3i \u00fd tr\u01b0\u1edbc \u0111\u00f3"),
				handler: function () {
					return o && o()
				},
				triggerFromInputs: !0
			}, {
				command: {
					key: a.ESCAPE
				},
				description: g._("\u0110\u00f3ng g\u1ee3i \u00fd"),
				handler: function () {
					return l && l()
				},
				triggerFromInputs: !0
			}, {
				command: {
					key: a.ENTER
				},
				description: g._("Ch\u1ecdn g\u1ee3i \u00fd"),
				handler: function () {
					return k && k()
				},
				triggerFromInputs: !0
			}, {
				command: {
					key: a.TAB
				},
				description: g._("\u0110\u1ec3 l\u1ea1i n\u1ed9i dung nh\u1eadp"),
				handler: function () {
					return n && n()
				},
				isHiddenCommand: !0,
				shouldPreventDefault: !1,
				shouldStopPropagation: !1,
				triggerFromInputs: !0
			}, {
				command: {
					key: a.TAB,
					shift: !0
				},
				description: g._("\u0110\u1ec3 l\u1ea1i n\u1ed9i dung nh\u1eadp"),
				handler: function () {
					return m && m()
				},
				isHiddenCommand: !0,
				shouldPreventDefault: !1,
				shouldStopPropagation: !1,
				triggerFromInputs: !0
			}]
		}, [f, j, k, l, m, n, o]);
		c = b("useCometSearchTypeaheadBaseInputRefs")(c);
		var q = c.composedRef;
		c = c.inputRef;
		c = b("useCometSearchTypeaheadBaseInputHandlers")(babelHelpers["extends"]({
			inputRef: c
		}, a));
		return h.jsx(b("CometComponentWithKeyCommands.react"), {
			commandConfigs: p,
			elementType: e === !0 ? "span" : "div",
			xstyle: i.root,
			children: d(q, c)
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);