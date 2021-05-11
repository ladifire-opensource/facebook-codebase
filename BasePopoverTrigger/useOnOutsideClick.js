__d("useOnOutsideClick", ["HiddenSubtreePassiveContext", "React", "setTimeout"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = g.useRef(null),
			d = g.useContext(b("HiddenSubtreePassiveContext"));
		g.useEffect(function() {
			if (a === null) return;

			function e(b) {
				var d = c.current;
				if (d != null && d instanceof Node) {
					var e = b.target;
					e instanceof Node && !d.contains(e) && a(b)
				}
			}
			var f = !1;

			function g() {
				f || document.addEventListener("click", e), f = !0
			}

			function h() {
				f && document.removeEventListener("click", e), f = !1
			}
			var i = d.getCurrentState();
			i.hiddenOrBackgrounded || g();
			var j = d.subscribeToChanges(function(a) {
				a.hiddenOrBackgrounded ? b("setTimeout")(function() {
					h()
				}, 0) : g()
			});
			return function() {
				j.remove(), h()
			}
		}, [a, d]);
		return c
	}
}), null);