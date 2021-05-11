__d("CometHideLayerOnEscape.react", ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", "React"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.children,
			d = a.debugName;
		d = d === void 0 ? "ModalLayer" : d;
		var e = a.onHide;
		a = h.useMemo(function () {
			return [{
				command: {
					key: b("CometKeys").ESCAPE
				},
				description: g._("\u0110\u00f3ng"),
				handler: e,
				triggerFromInputs: !0
			}]
		}, [e]);
		return h.jsx(b("CometComponentWithKeyCommands.react"), {
			commandConfigs: a,
			debugName: d,
			isWrapperFocusable: !0,
			children: c
		})
	}
}), null);