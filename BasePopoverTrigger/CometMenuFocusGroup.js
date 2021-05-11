__d("CometMenuFocusGroup", ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", "FocusGroup.react", "React", "focusScopeQueries"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	c = b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);
	var i = c[0];
	d = c[1];

	function a(a) {
		var c = [{
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
		}];
		return h.jsx(b("CometComponentWithKeyCommands.react"), {
			commandConfigs: c,
			children: h.jsx(i, babelHelpers["extends"]({}, a))
		})
	}
	f = {
		FocusGroup: a,
		FocusItem: d
	};
	e.exports = f
}), null);