__d("CometToastBridge.react", [
	"BaseToasterView.react", 
	"CometToastAnimationInternal.react", 
	"React", "stylex", 
	"useToasterStateManager"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a = a.maxVisible;
		a = a === void 0 ? 1 : a;
		var c = b("useToasterStateManager")(),
			d = g.useState(function () {
				return c.getEmptyState()
			}),
			e = d[0],
			f = d[1];
		g.useEffect(function () {
			var a = c.registerView(f);
			return function () {
				a.remove()
			}
		}, [c]);
		return g.jsx("div", {
			className: "l9j0dhe7",
			children: g.jsx(b("BaseToasterView.react"), {
				maxVisible: a,
				toasterState: e,
				children: function (a, c, d, e) {
					return g.jsx(b("CometToastAnimationInternal.react"), {
						expired: d,
						id: c,
						position: e,
						children: a
					}, c)
				}
			})
		})
	}
}), null);