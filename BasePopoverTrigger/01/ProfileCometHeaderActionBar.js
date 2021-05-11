__d("ProfileCometHeaderActionBar.react", ["ix", "fbt", "CometDeferredPopoverTrigger.react", "CometErrorBoundary.react", "CometPlaceholder.react", "CometRelay", "ProfileCometActionTrigger.react", "ProfileCometHeaderActionBarButton.react", "React", "TetraButton.react", "fbicon", "partitionArray", "requireDeferred", "stylex", "ProfileCometHeaderActionBar_actor.graphql"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j, k = b("React"),
		l = b("requireDeferred")("ProfileCometHeaderActionBarMoreMenu.react"),
		m = {
			buttonContainer: {
				marginStart: "h676nmdw"
			},
			buttonContainerExpanded: {
				flexGrow: "buofh1pr",
				maxWidth: "h8xcmbcu"
			},
			buttonContainerForHovercards: {
				flexGrow: "buofh1pr",
				maxWidth: "nxkscmto"
			},
			buttonsCentered: {
				justifyContent: "taijpn5t"
			},
			buttonsEnd: {
				justifyContent: "bkfpd7mw"
			},
			root: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				marginStart: "fop5sh7t",
				width: "g2wf7z4h"
			},
			rootPadded: {
				paddingBottom: "f10w8fjw",
				paddingTop: "pybr56ya"
			}
		},
		n = 3;

	function a(a) {
		var c = a.actor,
			d = a.centerButtons;
		d = d === void 0 ? !0 : d;
		var e = a.expanded,
			f = e === void 0 ? !1 : e;
		e = a.noPadding;
		e = e === void 0 ? !1 : e;
		a = a.source;
		var o = a === void 0 ? "WWW_COMET_PROFILE" : a;
		a = b("CometRelay").useFragment(i !== void 0 ? i : i = b("ProfileCometHeaderActionBar_actor.graphql"), c);
		if (a == null) return null;
		c = a.profile_actions;
		if (c.length === 0) return null;
		c = b("partitionArray")(c, function (a) {
			return a.is_secondary_only === !0
		});
		var p = c[0];
		c = c[1];
		var q = c.slice(0, n);
		c = [].concat(c.slice(n), p);
		p = k.jsxs(k.Fragment, {
			children: [q.map(function (a, c) {
				return k.jsx("div", {
					className: (j || (j = b("stylex")))(m.buttonContainer, c === 0 && (f ? m.buttonContainerForHovercards : m.buttonContainerExpanded)),
					children: k.jsx(b("ProfileCometHeaderActionBarButton.react"), {
						action: a,
						disabled: !0,
						labelIsHidden: c > 0
					})
				}, c)
			}), c.length > 0 && k.jsx("div", {
				className: (j || (j = b("stylex")))(m.buttonContainer),
				children: k.jsx(b("TetraButton.react"), {
					disabled: !0,
					icon: b("fbicon")._(g("484386"), 16),
					label: h._("Xem th\u00eam"),
					labelIsHidden: !0,
					type: "secondary"
				})
			})]
		});
		return k.jsx(b("CometErrorBoundary.react"), {
			children: k.jsx("div", {
				className: (j || (j = b("stylex")))(m.root, !e && m.rootPadded, d ? m.buttonsCentered : m.buttonsEnd),
				"data-testid": void 0,
				children: k.jsxs(b("CometPlaceholder.react"), {
					fallback: p,
					children: [q.map(function (a, c) {
						return k.jsx("div", {
							className: (j || (j = b("stylex")))(m.buttonContainer, c === 0 && (f ? m.buttonContainerForHovercards : m.buttonContainerExpanded)),
							children: k.jsx(b("CometErrorBoundary.react"), {
								children: k.jsx(b("ProfileCometActionTrigger.react"), {
									action: a,
									source: o,
									children: function (d) {
										return k.jsx(b("ProfileCometHeaderActionBarButton.react"), babelHelpers["extends"]({}, d, {
											action: a,
											labelIsHidden: c > 0
										}))
									}
								})
							})
						}, c)
					}), c.length > 0 && k.jsx("div", {
						className: (j || (j = b("stylex")))(m.buttonContainer),
						children: k.jsx(b("CometDeferredPopoverTrigger.react"), {
							align: "middle",
							autoAlign: !0,
							popoverProps: {
								actor: a
							},
							popoverResource: l,
							popoverType: "menu",
							children: function (a, c) {
								return k.jsx(b("TetraButton.react"), {
									icon: b("fbicon")._(g("484386"), 16),
									label: h._("Xem th\u00eam"),
									labelIsHidden: !0,
									onPress: c,
									ref: a,
									testid: void 0,
									type: "secondary"
								})
							}
						})
					})]
				})
			})
		})
	}
}), null);