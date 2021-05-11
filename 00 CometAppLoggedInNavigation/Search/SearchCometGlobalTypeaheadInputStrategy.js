__d("SearchCometGlobalTypeaheadInputStrategy.react", [
	"CometSearchEventEmitterContext", 
	"CometTypeaheadInputRoundedStrategy.react", "React", 
	"useCometSearchTypeaheadBaseInputRefs"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.onChange;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["onChange"]);
		var e = g.useContext(b("CometSearchEventEmitterContext")),
			f = e.subscribeToGlobalTypeaheadFocus;
		e = b("useCometSearchTypeaheadBaseInputRefs")(c);
		c = e.composedRef;
		e = e.inputRef;
		var h = e.current;
		g.useEffect(function () {
			var a = f(function () {
				if (h == null) return;
				h.value = "";
				h.focus();
				d("")
			});
			return a
		}, [h, d, f]);
		return g.jsx(b("CometTypeaheadInputRoundedStrategy.react"), babelHelpers["extends"]({}, a, {
			onChange: d,
			ref: c
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);