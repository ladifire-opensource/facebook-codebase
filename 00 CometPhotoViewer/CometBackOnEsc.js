__d("CometBackOnEsc.react", ["fbt", "CometKeys", "React", 
	"useCometRouterDispatcher", "useLayerKeyCommands"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		a = a.closeOnEsc;
		var c = a === void 0 ? !1 : a,
			d = b("useCometRouterDispatcher")(),
			e = h.useCallback(function () {
				d && d.goBack && d.goBack()
			}, [d]),
			f = h.useCallback(function () {
				d && d.popPushView && d.popPushView()
			}, [d]);
		a = h.useMemo(function () {
			return [{
				command: {
					key: b("CometKeys").ESCAPE
				},
				description: c ? g._("\u0110\u00f3ng") : g._("Quay l\u1ea1i trang tr\u01b0\u1edbc"),
				handler: c ? f : e
			}]
		}, [e, f, c]);
		b("useLayerKeyCommands")(a);
		return null
	}
}), null);