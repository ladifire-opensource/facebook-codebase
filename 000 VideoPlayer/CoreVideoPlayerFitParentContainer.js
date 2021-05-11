__d("CoreVideoPlayerFitParentContainer.react", ["DOMContainer.react", "React", "requireCond", "stylex", "cr:964538"], (function(a, b, c, d, e, f) {
	"use strict";
	f.createFitParentContainerDiv = a;
	var g = b("React");
	c = g.forwardRef(function(a, b) {
		var c = a.debugRole;
		c = babelHelpers.objectWithoutPropertiesLoose(a, ["debugRole"]);
		return g.jsx("div", babelHelpers["extends"]({}, {}, c, {
			className: "k4urcfbm l9j0dhe7 datstx6m a8c37x1j du4w35lb",
			ref: b
		}))
	});
	f.CoreVideoPlayerFitParentContainer = c;
	d = g.forwardRef(function(a, c) {
		var d = a.debugRole;
		d = a.domElement;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["debugRole", "domElement"]);
		return g.jsx(b("DOMContainer.react"), babelHelpers["extends"]({}, {}, a, {
			className: "k4urcfbm l9j0dhe7 datstx6m a8c37x1j du4w35lb",
			display: "block",
			ref: c,
			children: d
		}))
	});
	f.CoreVideoPlayerFitParentDOMContainer = d;

	function a(a) {
		a = a.debugRole;
		a = document.createElement("div");
		a.className = "k4urcfbm l9j0dhe7 datstx6m a8c37x1j du4w35lb";
		return a
	}
}), null);