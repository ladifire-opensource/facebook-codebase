__d("createKeyCommandWidget", ["React", "createKeyCommandWrapper", "recoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a === void 0 && (a = !0);
		var c = g.createContext();
		a = b("createKeyCommandWrapper")(a, c);

		function d(a, d) {
			d === void 0 && (d = !1);
			var e = g.useContext(c);
			g.useEffect(function () {
				if (!e) {
					d || b("recoverableViolation")("Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.", "comet_ax");
					return
				}
				if (a) return e.addCommands(a)
			}, [e, a, d])
		}
		return {
			Context: c,
			Wrapper: a,
			useKeyCommands: d
		}
	}
}), null);