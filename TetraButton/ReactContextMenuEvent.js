__d("ReactContextMenuEvent.react", ["React", "ReactEventHookPropagation", "ReactUseEvent.react"], (function (a, b, c, d, e, f) {
	"use strict";
	f.useContextMenu = a;
	var g = b("React");

	function a(a, c) {
		var d = c.disabled,
			e = c.onContextMenu,
			f = c.preventDefault,
			h = b("ReactUseEvent.react")("contextmenu");
		g.useEffect(function () {
			var c = a.current;
			c !== null && h.setListener(c, function (a) {
				if (d === !0) return;
				if (b("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useContextMenu")) return;
				b("ReactEventHookPropagation").stopEventHookPropagation(a, "useContextMenu");
				f !== !1 && !a.nativeEvent.defaultPrevented && a.preventDefault();
				e && e(a)
			})
		}, [d, a, h, f, e])
	}
}), null);