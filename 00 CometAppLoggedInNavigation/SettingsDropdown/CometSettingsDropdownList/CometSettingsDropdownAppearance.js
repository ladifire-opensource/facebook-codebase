__d("CometSettingsDropdownAppearance.react", ["ix", "fbt", 
	"CometAccessibilitySettingsFalcoEvent", "CometDarkModeContext", 
	"CometDensityModeContext", "CometListCellRadioAddon.react", 
	"CometListCellText.react", "CometRadioGroupList.react", 
	"CometRadioListCellLayout.react", "CometSettingsDropdownKeyboard.react", 
	"Locale", "React", "TetraIcon.react", "TetraList.react", "TetraListCell.react", 
	"TetraText.react", "fbicon", "gkx", "stylex", "useTopNavigationLogging"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React"),
		j = b("Locale").isRTL(),
		k = b("gkx")("1279132"),
		l = b("gkx")("1850946");

	function m(a) {
		b("CometAccessibilitySettingsFalcoEvent").log(function() {
			return a
		})
	}

	function a(a) {
		var c = a.onReturn,
			d = a.pushPage;
		a = i.useContext(b("CometDarkModeContext"));
		var e = a.isDarkModeEnabled,
			f = a.setDarkModePreference;
		a = i.useContext(b("CometDensityModeContext"));
		var n = a[0],
			o = a[1];
		a = b("useTopNavigationLogging").useSettingsItemLoggingCallbacks("dark-mode", 1, e);
		var p = a[0];
		a = a[1];
		var q = b("useTopNavigationLogging").useSettingsItemLoggingCallbacks("compact-mode", 2, n),
			r = q[0];
		q = q[1];
		var s = k ? h._("M\u00e0n h\u00ecnh & tr\u1ee3 n\u0103ng") : h._("Hi\u1ec3n th\u1ecb t\u00f9y ch\u1ecdn");
		return i.jsxs("div", {
			className: "cbu4d94t j83agx80",
			children: [i.jsxs("div", {
				className: "dati1w0a sj5x9vvc hv4rvrfc discj3wi btwxx1t3 j83agx80",
				children: [i.jsx("div", {
					className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
					children: i.jsx(b("TetraIcon.react"), {
						"aria-label": h._("Quay l\u1ea1i"),
						icon: j ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
						onPress: c
					})
				}), i.jsx("div", {
					className: "h4z51re5 j83agx80 bp9cbjyn",
					children: i.jsx(b("TetraText.react"), {
						isSemanticHeading: !0,
						type: "headlineEmphasized1",
						children: s
					})
				})]
			}), i.jsxs("div", {
				className: "a8nywdso jbae33se rz4wbd8a cxgpxx05",
				children: [i.jsx(b("TetraList.react"), {
					children: i.jsx(b("TetraListCell.react"), {
						addOnPrimary: {
							icon: b("fbicon")._(g("832941"), 20),
							size: 36,
							type: "contained-icon"
						},
						body: l ? h._("\u0110i\u1ec1u ch\u1ec9nh giao di\u1ec7n c\u1ee7a Facebook \u0111\u1ec3 gi\u1ea3m \u0111\u1ed9 ch\u00f3i v\u00e0 cho \u0111\u00f4i m\u1eaft \u0111\u01b0\u1ee3c ngh\u1ec9 ng\u01a1i.") : null,
						emphasized: !0,
						headline: h._("Ch\u1ebf \u0111\u1ed9 t\u1ed1i")
					})
				}), i.jsxs(b("CometRadioGroupList.react"), {
					label: h._("Ch\u1ebf \u0111\u1ed9 t\u1ed1i"),
					name: "dark-mode",
					onValueChange: function(a) {
						p(), f(a === "on")
					},
					children: [i.jsx(b("CometRadioListCellLayout.react"), {
						content: i.jsx(b("CometListCellText.react"), {
							headline: h._("T\u1eaft")
						}),
						contentPaddingHorizontal: 16,
						level: 4,
						nestedSpacing: 36,
						radioAddonComponent: b("CometListCellRadioAddon.react"),
						radioAddonProps: {
							checked: !e,
							value: "off"
						},
						ref: e ? a : void 0
					}), i.jsx(b("CometRadioListCellLayout.react"), {
						content: i.jsx(b("CometListCellText.react"), {
							headline: h._("B\u1eadt")
						}),
						contentPaddingHorizontal: 16,
						level: 4,
						nestedSpacing: 36,
						radioAddonComponent: b("CometListCellRadioAddon.react"),
						radioAddonProps: {
							checked: e,
							value: "on"
						},
						ref: e ? void 0 : a
					})]
				}), i.jsx(b("TetraList.react"), {
					children: i.jsx(b("TetraListCell.react"), {
						addOnPrimary: {
							icon: b("fbicon")._(g("1252034"), 20),
							size: 36,
							type: "contained-icon"
						},
						body: l ? h._("L\u00e0m gi\u1ea3m k\u00edch th\u01b0\u1edbc ph\u00f4ng ch\u1eef \u0111\u1ec3 c\u00f3 th\u00eam n\u1ed9i dung v\u1eeba v\u1edbi m\u00e0n h\u00ecnh.") : null,
						emphasized: !0,
						headline: h._("Ch\u1ebf \u0111\u1ed9 Thu g\u1ecdn")
					})
				}), i.jsxs(b("CometRadioGroupList.react"), {
					label: h._("Ch\u1ebf \u0111\u1ed9 Thu g\u1ecdn"),
					name: "compact-mode",
					onValueChange: function(a) {
						r(), o(a === "on")
					},
					children: [i.jsx(b("CometRadioListCellLayout.react"), {
						content: i.jsx(b("CometListCellText.react"), {
							headline: h._("T\u1eaft")
						}),
						contentPaddingHorizontal: 16,
						level: 4,
						nestedSpacing: 36,
						radioAddonComponent: b("CometListCellRadioAddon.react"),
						radioAddonProps: {
							checked: !n,
							value: "off"
						},
						ref: n ? q : void 0
					}), i.jsx(b("CometRadioListCellLayout.react"), {
						content: i.jsx(b("CometListCellText.react"), {
							headline: h._("B\u1eadt")
						}),
						contentPaddingHorizontal: 16,
						level: 4,
						nestedSpacing: 36,
						radioAddonComponent: b("CometListCellRadioAddon.react"),
						radioAddonProps: {
							checked: n,
							value: "on"
						},
						ref: n ? void 0 : q
					})]
				}), k ? i.jsx(b("TetraList.react"), {
					children: i.jsx(b("TetraListCell.react"), {
						addOnPrimary: {
							icon: b("fbicon")._(g("577844"), 20),
							size: 36,
							type: "contained-icon"
						},
						addOnSecondary: {
							color: "secondary",
							icon: j ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
							type: "icon"
						},
						emphasized: !0,
						headline: h._("B\u00e0n ph\u00edm"),
						onPress: function() {
							d(function(a) {
								return i.jsx(b("CometSettingsDropdownKeyboard.react"), {
									onReturn: a.onReturn
								})
							}), m({
								event_type: "click",
								target_item: "keyboard"
							})
						}
					})
				}) : null]
			})]
		})
	}
}), null);