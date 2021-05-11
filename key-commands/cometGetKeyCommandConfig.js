__d("cometGetKeyCommandConfig", ["fbt", "CometCustomKeyCommands", 
	"CometDefaultKeyCommands", "CometKeys", "recoverableViolation"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;

	function h(a, c) {
		var d = b("CometCustomKeyCommands").customCommands;
		for (var e = 0; e < d.length; e++)
			if (d[e].group === a && d[e].commandID === c) {
				for (var f in b("CometKeys"))
					if (b("CometKeys")[f] === d[e].key) return {
						alt: d[e].alt,
						command: d[e].command,
						key: b("CometKeys")[f],
						shift: d[e].shift
					};
				return null
			}
		return b("CometDefaultKeyCommands")[a].shortcuts[c].command
	}
	var i = {
		command: null,
		description: g._("Thi\u1ebfu ph\u00edm t\u1eaft"),
		handler: function () {
			return void 0
		},
		isHiddenCommand: !0
	};

	function a(a, c, d) {
		if (!Object.prototype.hasOwnProperty.call(b("CometDefaultKeyCommands"), a) || !Object.prototype.hasOwnProperty.call(b("CometDefaultKeyCommands")[a].shortcuts, c)) {
			b("recoverableViolation")("Missing default key command config for " + a + " and " + c, "comet_ax");
			return i
		}
		var e = h(a, c);
		a = b("CometDefaultKeyCommands")[a].shortcuts[c];
		c = a.description;
		return e != null && c != null ? {
			command: e,
			description: c,
			handler: d,
			isHiddenCommand: a.isHiddenCommand
		} : i
	}
}), null);