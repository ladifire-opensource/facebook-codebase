__d("SetActiveLayerIfAttached.react", [
	"CometKeyCommandUtilsContext", 
	"CometLayerKeyCommandWidget", 
	"HiddenSubtreeContext", "React", "recoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = g.useContext(b("HiddenSubtreeContext"));
		a = g.useContext(b("CometKeyCommandUtilsContext"));
		var d = a && a.setActiveLayer,
			e = g.useContext(b("CometLayerKeyCommandWidget").Context);
		g.useEffect(function () {
			if (!d) {
				b("recoverableViolation")("The current layer is not wrapped in a *KeyCommandListener", "comet_ax");
				return
			}
			if (!e) {
				b("recoverableViolation")("setActiveLayer not wrapped in CometLayerKeyCommandWidget.Wrapper", "comet_ax");
				return
			}
			c.hiddenOrBackgrounded || d(e)
		}, [e, c, d]);
		return null
	}
}), null);