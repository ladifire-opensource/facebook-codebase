__d("ReactKeyboardEvent.react", ["React", "ReactUseEvent.react"], (function (a, b, c, d, e, f) {
	"use strict";
	f.useKeyboard = a;
	var g = b("React"),
		h = {
			passive: !0
		};

	function a(a, c) {
		var d = c.disabled,
			e = c.onKeyDown,
			f = c.onKeyUp,
			i = b("ReactUseEvent.react")("keydown"),
			j = b("ReactUseEvent.react")("keyup", h);
		g.useEffect(function () {
			var b = a.current;
			b !== null && (i.setListener(b, !d && e || null), j.setListener(b, !d && f || null))
		}, [d, e, i, j, a, f])
	}
}), null);