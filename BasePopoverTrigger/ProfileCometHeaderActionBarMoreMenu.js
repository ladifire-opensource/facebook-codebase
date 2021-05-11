__d("ProfileCometHeaderActionBarMoreMenu.react", ["CometMenu.react", "CometRelay", 
	"ProfileCometHeaderActionBarMenuItem.react", "React", "recoverableViolation", 
	"ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React");

	function a(a) {
		var c = a.actor;
		a = a.onClose;
		c = b("CometRelay").useFragment(g !== void 0 ? g : g = b("ProfileCometHeaderActionBarMoreMenu_actorWithActionBar.graphql"), c);
		if (!c || !c.profile_actions) {
			b("recoverableViolation")("Rendering more menu with no actions", "profile_comet");
			return null
		}
		var d = c.profile_actions.findIndex(function (a) {
			return a.is_secondary_only
		});
		d = Math.min(d === -1 ? Infinity : d, 3);
		if (d >= c.profile_actions.length) {
			b("recoverableViolation")("Rendering more menu with no actions", "profile_comet");
			return null
		}
		c = c.profile_actions.slice(d).filter(function (a) {
			return a != null
		});
		return h.jsx(b("CometMenu.react"), {
			onClose: a,
			withArrow: !0,
			children: c.map(function (a) {
				return h.jsx(b("ProfileCometHeaderActionBarMenuItem.react"), {
					action: a
				}, a == null ? void 0 : a.id)
			})
		})
	}
}), null);