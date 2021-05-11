__d("useCometLoadingStateTracker", ["CometVisualCompletionAttributes",
 "React", "requireCond", "cr:1791018", "cr:683059"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a() {
		var a = g.useRef(null);
		g.useEffect(function () {
			var c = a.current,
				d = [];
			b("cr:1791018") && c != null && d.concat(b("cr:1791018").trackLoadingState(c));
			b("cr:683059") && c != null && d.push(b("cr:683059").trackLoadingState(c));
			return function () {
				d.forEach(function (a) {
					a()
				})
			}
		}, []);
		return [b("CometVisualCompletionAttributes").LOADING_STATE, a]
	}
}), null);