__d("Pressability", ["ReactContextMenuEvent.react", "ReactFocusEvent.react", "ReactHoverEvent.react", "ReactPressEvent.react"], (function (a, b, c, d, e, f) {
	"use strict";
	f.usePressability = a;

	function a(a, c) {
		var d = c.disabled,
			e = c.onBlur,
			f = c.onContextMenu,
			g = c.onFocus,
			h = c.onFocusChange,
			i = c.onFocusVisibleChange,
			j = c.onHoverChange,
			k = c.onHoverEnd,
			l = c.onHoverMove,
			m = c.onHoverStart,
			n = c.onPressChange,
			o = c.onPressEnd,
			p = c.onPressMove,
			q = c.onPressStart;
		c = c.preventContextMenu;
		b("ReactHoverEvent.react").useHover(a, {
			disabled: d,
			onHoverChange: j,
			onHoverEnd: k,
			onHoverMove: l,
			onHoverStart: m
		});
		b("ReactPressEvent.react").usePress(a, {
			disabled: d,
			onPressChange: n,
			onPressEnd: o,
			onPressMove: p,
			onPressStart: q
		});
		b("ReactFocusEvent.react").useFocus(a, {
			disabled: d,
			onBlur: e,
			onFocus: g,
			onFocusChange: h,
			onFocusVisibleChange: i
		});
		b("ReactContextMenuEvent.react").useContextMenu(a, {
			disabled: d,
			onContextMenu: f,
			preventDefault: c || !1
		})
	}
}), null);