__d("MWXMAComponentVerticalLayout.bs", ["CurrentEnvironment", 
	"MWXMAComponentStyles.bs", "ReactStyle.bs", "react", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h, i = g || b("react");

	function a(a) {
		var c = a.outgoing,
			d = a.first,
			e = a.last,
			f = a.children,
			g = a.centered;
		a = a.hasText;
		g = g !== void 0 ? g : !1;
		var j = i.useMemo(function() {
			if (b("CurrentEnvironment").messengerdotcom) return b("ReactStyle.bs").unsafeAddProp({}, "--secondary-button-background", "rgba(0,0,0,.06)");
			else return {}
		}, []);
		return i.jsx("div", {
			children: f,
			className: (h || (h = b("stylex")))(b("MWXMAComponentStyles.bs").common.card, c ? b("MWXMAComponentStyles.bs").common.outgoing : b("MWXMAComponentStyles.bs").common.incoming, d ? c ? b("MWXMAComponentStyles.bs").common.outgoingFirst : b("MWXMAComponentStyles.bs").common.incomingFirst : !1, e ? c ? b("MWXMAComponentStyles.bs").common.outgoingLast : b("MWXMAComponentStyles.bs").common.incomingLast : !1, g ? b("MWXMAComponentStyles.bs").common.centered : !1, a ? b("MWXMAComponentStyles.bs").common.hasText : !1),
			style: j
		})
	}
	c = b("MWXMAComponentStyles.bs").common;
	d = a;
	f.common = c;
	f.make = d
}), null);