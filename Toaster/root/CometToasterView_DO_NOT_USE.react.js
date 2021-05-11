__d("CometToasterView_DO_NOT_USE.react", [
	"BasePortal.react", 
	"BaseToasterView.react", 
	"CometContextualLayerAnchorRoot.react", 
	"CometToastAnimationInternal.react", 
	"React", "gkx", "stylex", "useToasterStateManager"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			root: {
				bottom: "lfi1tu6t",
				listStyle: "p7hjln8o",
				position: "poy2od1o",
				start: "re5koujm",
				zIndex: "kavbgo14"
			},
			rootBlue: {
				zIndex: "guygq49l"
			},
			rootWorkplaceLegacy: {
				zIndex: "lidd1b6n"
			},
			toastContainer: {
				display: "q9uorilb",
				position: "pmk7jnqg",
				start: "j9ispegn"
			}
		};

	function a(a) {
		var c = a.filterToasts;
		a = a.maxVisible;
		a = a === void 0 ? 1 : a;
		var d = b("useToasterStateManager")(),
			e = h.useState(function () {
				return d.getEmptyState()
			}),
			f = e[0],
			j = e[1];
		h.useEffect(function () {
			var a = d.registerView(j, 0);
			return function () {
				a.remove()
			}
		}, [d]);
		return h.jsx(b("BasePortal.react"), {
			target: document.body,
			children: h.jsx(b("BaseToasterView.react"), {
				className: (g || (g = b("stylex")))([i.root, b("gkx")("708253") ? null : b("gkx")("1341692") ? i.rootWorkplaceLegacy : i.rootBlue]),
				filterToasts: c,
				maxVisible: a,
				toasterState: f,
				children: function (a, c, d, e) {
					return h.jsx(b("CometContextualLayerAnchorRoot.react"), {
						children: h.jsx(b("CometToastAnimationInternal.react"), {
							expired: d,
							id: c,
							position: e,
							xstyle: i.toastContainer,
							children: a
						})
					}, c)
				}
			})
		})
	}
}), null);