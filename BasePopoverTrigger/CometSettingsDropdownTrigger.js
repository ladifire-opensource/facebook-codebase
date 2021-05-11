__d("CometSettingsDropdownTrigger.react", ["ix", "fbt", 
	"CometDeferredPopoverTrigger.react", "CometImage.react", 
	"CometPlaceholder.react", "CometPressable.react", "CometRelay", "CometSettingsBadge.react", 
	"CometSettingsDropdownLoadingState.react", "CometTooltip.react", "React", 
	"TetraCircleButton.react", "UserCategoryWithAdminsOrLimitedAccessRoles", "fbicon", 
	"getJSEnumSafe", "gkx", "mergeRefs", "promiseDone", "recoverableViolation", 
	"requireDeferred", "stylex", "useCometCallout", "useTopNavigationLogging", 
	"CometSettingsDropdownTriggerQuery.graphql"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	var i, j, k = b("React"),
		l = b("requireDeferred")("CometDismissFBNuxMutation"),
		m = b("requireDeferred")("CometLogImpressionFBNuxMutation"),
		n = b("requireDeferred")("CometSettingsDropdown.react"),
		o = {
			badge: {
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				top: "kr520xx4"
			},
			circle: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv"
			},
			profileName: {
				fontWeight: "n3ffmt46"
			},
			tooltip: {
				maxWidth: "dlpeemhq"
			},
			wrapper: {
				display: "j83agx80",
				position: "l9j0dhe7"
			}
		},
		p = 8150,
		q = 8191,
		r = 8189,
		s = i !== void 0 ? i : i = b("CometSettingsDropdownTriggerQuery.graphql"),
		t = h._("\u0110\u00e3 c\u1eadp nh\u1eadt m\u1ed9t Trang do b\u1ea1n qu\u1ea3n l\u00fd. H\u00e3y nh\u1ea5p v\u00e0o \u0111\u00e2y \u0111\u1ec3 chuy\u1ec3n sang Trang c\u1ee7a m\u00ecnh."),
		u = h._("Chuy\u1ec3n sang Trang \u0111\u00e3 c\u1eadp nh\u1eadt"),
		v = b("gkx")("1663500"),
		w = k.forwardRef(function (a, c) {
			var d = b("CometRelay").useRelayEnvironment(),
				e = k.useState(""),
				f = e[0],
				i = e[1];
			e = k.useState(!1);
			var n = e[0],
				v = e[1];
			e = k.useState(!1);
			var w = e[0],
				x = e[1];
			e = k.useState(!1);
			var y = e[0],
				z = e[1];
			k.useEffect(function () {
				b("promiseDone")(b("CometRelay").fetchQuery(d, s, {
					coreAppAdminProfileSwitcherNuxId: r,
					pageManagementNuxId: q,
					profileSwitcherNuxId: p
				}).toPromise().then(function (a) {
					var c, d, e, f;
					c = (a == null ? void 0 : (c = a.viewer) == null ? void 0 : (c = c.actor) == null ? void 0 : (c = c.profile_switcher_eligible_profiles) == null ? void 0 : c.count) || 0;
					d = (a == null ? void 0 : (d = a.page_management_nux) == null ? void 0 : d.should_show) === !0 && c > 0;
					e = (a == null ? void 0 : (e = a.profile_switcher_nux) == null ? void 0 : e.should_show) === !0 && c > 0;
					c = b("getJSEnumSafe")(b("UserCategoryWithAdminsOrLimitedAccessRoles"), a == null ? void 0 : (c = a.viewer) == null ? void 0 : (c = c.actor) == null ? void 0 : c.user_category_with_admins_or_limited_access_roles);
					f = (a == null ? void 0 : (f = a.core_app_admin_profile_switcher_nux) == null ? void 0 : f.should_show) === !0 && c === "can_have_admin_and_limited_access_roles";
					i((c = a == null ? void 0 : (c = a.viewer) == null ? void 0 : (a = c.actor) == null ? void 0 : a.name) != null ? c : "");
					v(e);
					x(d);
					z(f)
				}))
			}, [d]);
			e = h._("Tuy \u0111\u00e3 chuy\u1ec3n sang Trang c\u1ee7a {=[profile_name]}, nh\u01b0ng b\u1ea1n c\u00f3 th\u1ec3 chuy\u1ec3n v\u1ec1 trang c\u00e1 nh\u00e2n c\u1ee7a m\u00ecnh b\u1ea5t c\u1ee9 l\u00fac n\u00e0o.", [h._param("=[profile_name]", k.jsx("span", {
				className: (j || (j = b("stylex")))(o.profileName),
				children: h._("{profile_name}", [h._param("profile_name", f)])
			}))]);
			f = {
				align: "end",
				arrowStyle: "edge",
				position: "below",
				type: "accent",
				xstyle: o.tooltip
			};
			var A = babelHelpers["extends"]({}, f, {
					label: t,
					onHide: function () {
						l.onReady(function (a) {
							a.commit(d, p, function () {}, function () {
								b("recoverableViolation")("dismiss fb nux mutation failed for profile switcher tooltip in settings dropdown trigger", "profile_comet")
							})
						})
					}
				}),
				B = babelHelpers["extends"]({}, f, {
					label: u,
					onHide: function () {
						m.onReady(function (a) {
							a.commit(d, q, function () {}, function () {
								b("recoverableViolation")("logimpression fb nux mutation failed for profile switcher tooltip in settings dropdown trigger", "profile_comet")
							})
						})
					}
				});
			f = babelHelpers["extends"]({}, f, {
				label: e,
				onHide: function () {
					m.onReady(function (a) {
						a.commit(d, r, function () {}, function () {
							b("recoverableViolation")("logimpression fb nux mutation failed for core app admin profile switcher tooltip in settings dropdown trigger", "profile_comet")
						})
					})
				}
			});
			e = b("useTopNavigationLogging").useSettingsButtonLoggingCallbacks();
			var C = e[0],
				D = e[1],
				E = a.onPress;
			e = k.useCallback(function (a) {
				E && E(a), v(!1), x(!1), z(!1), C()
			}, [E, C]);
			var F = b("useCometCallout")(B, a.isYourPagesTab && w),
				G = b("useCometCallout")(A, n),
				H = b("useCometCallout")(f, y);
			B = k.useMemo(function () {
				return b("mergeRefs")(H, F, G, c, D)
			}, [H, F, G, c, D]);
			w = h._("T\u00e0i kho\u1ea3n");
			A = a.onHoverIn;
			n = a.onHoverOut;
			f = a.onPressIn;
			y = a.profilePictureUri;
			var I = a.size,
				J = a.testid;
			J = a.type;
			if (y != null) return k.jsx(b("CometPressable.react"), {
				expanding: !1,
				label: w,
				onHoverIn: A,
				onHoverOut: n,
				onPress: e,
				onPressIn: f,
				overlayRadius: "50%",
				ref: B,
				testid: void 0,
				children: k.jsx(b("CometImage.react"), {
					height: I,
					src: y,
					width: I,
					xstyle: o.circle
				})
			});
			else return k.jsx(b("TetraCircleButton.react"), {
				icon: b("fbicon")._(g("481884"), 20),
				label: w,
				onHoverIn: A,
				onHoverOut: n,
				onPress: e,
				onPressIn: f,
				ref: B,
				size: I,
				testid: void 0,
				type: J
			})
		});

	function a(a) {
		var c = a.isYourPagesTab,
			d = a.profilePictureUri;
		a = k.useState(!1);
		var e = a[0];
		a = a[1];
		var f = e === !0 ? "deemphasized-overlay" : "normal",
			g = v ? "small" : "large";
		return k.jsx(b("CometDeferredPopoverTrigger.react"), {
			align: "end",
			fallback: k.jsx(b("CometSettingsDropdownLoadingState.react"), {
				iconSize: g
			}),
			onVisibilityChange: a,
			popoverProps: {},
			popoverResource: n,
			position: "below",
			tracePolicy: "comet.jewel.settings",
			children: function (a, g, i, l, m, n) {
				return k.jsx(b("CometTooltip.react"), {
					tooltip: h._("T\u00e0i kho\u1ea3n"),
					children: k.jsxs("div", {
						className: (j || (j = b("stylex")))(o.wrapper),
						children: [k.jsx(w, {
							isYourPagesTab: c,
							onHoverIn: l,
							onHoverOut: m,
							onPress: g,
							onPressIn: n,
							profilePictureUri: d,
							ref: a,
							size: 40,
							testid: void 0,
							type: f
						}), k.jsx("div", {
							className: j(o.badge),
							children: k.jsx(b("CometPlaceholder.react"), {
								fallback: null,
								children: k.jsx(b("CometSettingsBadge.react"), {
									isActive: e
								})
							})
						})]
					})
				})
			}
		})
	}
	c = k.memo(a);
	e.exports = c
}), null);