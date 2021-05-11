__d("CometCompositeFocusIndicator.react", ["fbt", "BaseFocusRing.react", 
	"CometComponentWithKeyCommands.react", "CometCompositeFocusIndicatorContext",
	 "CometKeys", "React", "gkx", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React"),
		i = {
			noOutline: {
				outline: "lzcic4wl"
			}
		},
		j = b("gkx")("1721477");

	function a(a) {
		var c = a.children,
			d = a.compositeInfo;
		a = h.useMemo(function () {
			var a = [];
			d.horizontal === !0 && a.push({
				command: {
					key: b("CometKeys").RIGHT
				},
				description: g._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),
				handler: function () {}
			}, {
				command: {
					key: b("CometKeys").LEFT
				},
				description: g._("M\u1ee5c ti\u1ebfp theo"),
				handler: function () {}
			});
			d.vertical === !0 && a.push({
				command: {
					key: b("CometKeys").UP
				},
				description: g._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),
				handler: function () {}
			}, {
				command: {
					key: b("CometKeys").DOWN
				},
				description: g._("M\u1ee5c ti\u1ebfp theo"),
				handler: function () {}
			});
			return a
		}, [d]);
		return h.jsx(b("CometComponentWithKeyCommands.react"), {
			commandConfigs: a,
			children: h.jsx(b("CometCompositeFocusIndicatorContext").Provider, {
				value: d,
				children: h.jsx(b("BaseFocusRing.react"), {
					children: function (a) {
						return c(j ? a : i.noOutline)
					}
				})
			})
		})
	}
}), null);