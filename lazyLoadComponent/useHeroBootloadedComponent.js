__d("useHeroBootloadedComponent", ["CometHeroInteractionContext", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = g.useContext(b("CometHeroInteractionContext").Context);
		g.useEffect(function () {
			c.consumeBootload(a.getModuleId())
		}, [c, a])
	}
}), null);