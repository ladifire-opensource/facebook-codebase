__d("CometKeyShortcutDialog.react", ["fbt", "ix", "BaseHeadingContextWrapper.react", "CometCardedDialog.react", "CometComponentWithKeyCommands.react", "CometDefaultKeyCommands", "CometKeyCommandSettingsContext", "CometRow.react", "CometRowItem.react", "CometToggle.react", "KeyInfoList.react", "TetraCircleButton.react", "TetraText.react", "TetraTextPairing.react", "cometGetKeyCommandConfig", "createKeyCommand", "fbicon", "gkx", "isSingleCharKey", "react"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = i || b("react"),
		k = b("gkx")("1820857");

	function l(a) {
		var c = a.areSingleKeysDisabled,
			d = a.keyCommandSection,
			e = new Map(),
			f = new Map();
		Object.keys(d.shortcuts).forEach(function(a) {
			a = d.shortcuts[a];
			var g = b("createKeyCommand")(a.command),
				h = b("isSingleCharKey")(g);
			c === !0 && h ? f.set(g, [a]) : e.set(g, [a])
		});
		return j.jsxs("div", {
			className: "oihenvwg dati1w0a hv4rvrfc fer614ym qhjacvs6",
			children: [j.jsx(b("TetraText.react"), {
				isSemanticHeading: !0,
				type: "headlineEmphasized3",
				children: d.label
			}), j.jsx("div", {
				className: "a8nywdso ihqw7lf3 rz4wbd8a discj3wi ekzkrbhg jq4qci2q lhclo0ds buofh1pr j83agx80",
				children: j.jsx(b("KeyInfoList.react"), {
					commands: e,
					isTable: !0
				})
			}), c === !0 ? j.jsxs(b("BaseHeadingContextWrapper.react"), {
				children: [j.jsx(b("TetraText.react"), {
					color: "secondary",
					isSemanticHeading: !0,
					type: "headlineEmphasized4",
					children: g._("\u0110\u00e3 t\u1eaft")
				}), j.jsx("div", {
					className: "a8nywdso ihqw7lf3 rz4wbd8a discj3wi ekzkrbhg jq4qci2q lhclo0ds buofh1pr j83agx80",
					children: j.jsx(b("KeyInfoList.react"), {
						commands: f,
						isTable: !0
					})
				})]
			}) : null]
		})
	}

	function a(a) {
		var c = a.onClose;
		a = Object.keys(b("CometDefaultKeyCommands"));
		var d = j.useContext(b("CometKeyCommandSettingsContext")),
			e = d.getAreSingleKeysDisabled,
			f = d.setAreSingleKeysDisabled,
			i = d.setViewerInfo;
		d = j.useState(e());
		var m = d[0],
			n = d[1],
			o = j.useCallback(function() {
				i(!1, "see_all"), c()
			}, [c, i]);
		e = j.useMemo(function() {
			return [b("cometGetKeyCommandConfig")("global", "toggleNub", function() {
				o()
			})]
		}, [o]);
		d = j.useCallback(function() {
			i(!0, "pinned"), c()
		}, [i, c]);
		a = a.map(function(a) {
			var c = b("CometDefaultKeyCommands")[a];
			return j.jsx(l, {
				areSingleKeysDisabled: m,
				keyCommandSection: c
			}, a)
		});
		return j.jsx(b("CometComponentWithKeyCommands.react"), {
			commandConfigs: e,
			children: j.jsx(b("CometCardedDialog.react"), {
				onClose: o,
				size: "content",
				title: g._("T\u1ea5t c\u1ea3 ph\u00edm t\u1eaft"),
				withCloseButton: !0,
				children: j.jsxs(b("BaseHeadingContextWrapper.react"), {
					children: [j.jsx("div", {
						className: "a8nywdso ihqw7lf3 rz4wbd8a discj3wi lhclo0ds j83agx80",
						children: a
					}), j.jsx("div", {
						className: "ihqw7lf3 l6v480f0",
						children: j.jsxs(b("CometRow.react"), {
							align: "end",
							paddingHorizontal: 16,
							children: [j.jsx(b("CometRowItem.react"), {
								children: j.jsx("div", {
									className: "tpi298a0 ov3tfbu9 cdv8y374",
									children: j.jsx(b("TetraTextPairing.react"), {
										headline: g._("Ph\u00edm t\u1eaft c\u00f3 m\u1ed9t k\u00fd t\u1ef1"),
										isSemanticHeading: !0,
										level: 4,
										meta: g._("D\u00f9ng l\u1ed1i t\u1eaft c\u00f3 m\u1ed9t k\u00fd t\u1ef1 \u0111\u1ec3 th\u1ef1c hi\u1ec7n h\u00e0nh \u0111\u1ed9ng ph\u1ed5 bi\u1ebfn.")
									})
								})
							}), j.jsx(b("CometRowItem.react"), {
								children: j.jsx(b("CometToggle.react"), {
									onValueChange: function(a) {
										n(!a), f(!a)
									},
									size: "small",
									value: m !== !0,
									children: g._("Ph\u00edm t\u1eaft c\u00f3 m\u1ed9t k\u00fd t\u1ef1")
								})
							}), j.jsx(b("CometRowItem.react"), {
								expanding: !0,
								children: j.jsx("div", {})
							}), k ? j.jsx(b("CometRowItem.react"), {
								children: j.jsx("div", {
									className: "tpi298a0 ov3tfbu9 cdv8y374",
									children: j.jsx(b("TetraTextPairing.react"), {
										headline: g._("Pin Keyboard Shortcuts to Your Screen"),
										isSemanticHeading: !0,
										level: 4,
										meta: g._("We'll show keyboard shortcuts that are related to what you're doing on Facebook")
									})
								})
							}) : null, k ? j.jsx(b("CometRowItem.react"), {
								children: j.jsx(b("TetraCircleButton.react"), {
									icon: b("fbicon")._(h("1414201"), 20),
									label: g._("See Available Shortcuts"),
									onPress: d,
									size: 36
								})
							}) : null]
						})
					})]
				})
			})
		})
	}
}), null);