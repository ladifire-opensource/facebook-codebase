__d("CometHovercardTrigger.react", ["CometRelay", "React", "useBaseHovercardTrigger", 
	"useCometRelayEntrypointContextualEnvironmentProvider"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {};

	function a(a) {
		var c = a.popoverEntryPoint,
			d = a.popoverOtherProps;
		d = d === void 0 ? h : d;
		var e = a.popoverProps;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["popoverEntryPoint", "popoverOtherProps", "popoverProps"]);
		var f = b("useCometRelayEntrypointContextualEnvironmentProvider")();
		f = b("CometRelay").useEntryPointLoader(f, c);
		c = f[0];
		var i = f[1];
		f = b("useBaseHovercardTrigger")(babelHelpers["extends"]({}, a, {
			onLoadEntryPoint: function() {
				return i(e)
			}
		}));
		a = f[0];
		return a(g.jsx(g.Fragment, {
			children: c != null && g.jsx(b("CometRelay").EntryPointContainer, {
				entryPointReference: c,
				props: d
			})
		}))
	}
}), null);