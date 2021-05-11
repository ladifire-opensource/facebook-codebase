__d("CometCompactKeyCommandDisplay.react", ["fbt", 
	"CometCompactKeyCommandDisplayHeader.react", "CometKeyCommandUtilsContext", 
	"FocusRegion.react", "FocusWithinHandler.react", "KeyInfoList.react", 
	"React", "TetraText.react", "focusScopeQueries", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = h.useRef(!1),
			d = h.useRef(!1),
			e = h.useState(null),
			f = e[0],
			i = e[1],
			j = h.useContext(b("CometKeyCommandUtilsContext"));
		h.useEffect(function () {
			var a = j && j.addObserver;
			if (a) {
				var e = a(function (a) {
					if (a.type === "update") {
						if (d.current) return;
						a = e.getActiveCommands();
						a !== f && i(a);
						return
					}
				});
				c.current || (i(e.getActiveCommands()), b("FocusRegion.react").focusRegionById("KeyboardShortcutNubRegion", b("focusScopeQueries").headerAndSpinnerFocusScopeQuery), c.current = !0);
				return function () {
					e.remove()
				}
			}
		}, [f, d, j]);
		return h.jsx("div", {
			className: "k4urcfbm poy2od1o h4z51re5 osnr6wyh rv4hoivh jktsbyx5 rq0escxv i09qtzwb",
			children: h.jsx("div", {
				"aria-label": g._("L\u1ec7nh b\u00e0n ph\u00edm k\u00edch ho\u1ea1t"),
				className: "k4urcfbm j83agx80 oo9gr5id rq0escxv nwpbqux9 gob819ct ols5edhi gmcszhul emml16de cddn0xzi ehxjyohh",
				role: "dialog",
				children: h.jsx(b("FocusWithinHandler.react"), {
					onBlurWithin: function () {
						d.current = !1
					},
					onFocusWithin: function () {
						d.current = !0
					},
					children: h.jsxs("div", {
						className: "k4urcfbm",
						children: [h.jsx("div", {
							className: "dati1w0a osnr6wyh hv4rvrfc jktsbyx5 s1tcr66n",
							children: h.jsx(b("CometCompactKeyCommandDisplayHeader.react"), {
								onExpand: a.onExpand,
								onHide: a.onHide
							})
						}), h.jsxs("div", {
							className: "dati1w0a osnr6wyh hv4rvrfc discj3wi",
							children: [h.jsx("div", {
								className: "sjgh65i0",
								children: h.jsx(b("TetraText.react"), {
									type: "meta1",
									children: g._("Ch\u00fang t\u00f4i s\u1ebd hi\u1ec3n th\u1ecb cho b\u1ea1n c\u00e1c ph\u00edm t\u1eaft hi\u1ec7n c\u00f3, li\u00ean quan \u0111\u1ebfn ho\u1ea1t \u0111\u1ed9ng c\u1ee7a b\u1ea1n tr\u00ean Facebook.")
								})
							}), h.jsx("ul", {
								className: "ekzkrbhg jq4qci2q lhclo0ds buofh1pr j83agx80",
								children: h.jsx(b("KeyInfoList.react"), {
									commands: f,
									isTable: !1
								})
							})]
						})]
					})
				})
			})
		})
	}
}), null);