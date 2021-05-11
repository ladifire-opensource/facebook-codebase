__d("TetraListCell.react", ["CometCompositeStructureContext", 
	"CometDensityAwarenessContext", "CometDensityModeContext", 
	"CometFocusGroupContext", "CometFocusTableContext", 
	"CometPressable.react", "CometProgressSkittleIndeterminate.react", 
	"CometVisualCompletionAttributes", "MWJewelThreadFacepile.react", 
	"React", "TetraIcon.react", "TetraishSkittleEmoji.react", 
	"TetraishSkittleIcon.react", "TetraProfilePhoto.react", 
	"TetraProfilePhotoForActor.react", "TetraText.react", 
	"TetraTextPairing.react", "getItemRoleFromCompositeRole",
	 "getTetraListCellAddOn.react", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			addOn: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				flexDirection: "btwxx1t3"
			},
			addOnWithExpander: {
				marginEnd: "oi9244e8"
			},
			addOnWithIcon: {
				display: "j83agx80"
			},
			addOnWithText: {
				marginStart: "kkf49tns"
			},
			bottomAddOn: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				marginEnd: "a9txdygg",
				marginStart: "fnu23jab"
			},
			bottomAddOnInner: {
				maxWidth: "d2edcug0"
			},
			bottomAddOnOverride_starRating: {
				flexDirection: "btwxx1t3",
				marginEnd: "cxmmr5t8",
				marginStart: "hcukyx3x",
				paddingTop: "ipjc6fyt"
			},
			bottomAddOnOverride_threadLabel: {
				flexDirection: "btwxx1t3",
				marginEnd: "cxmmr5t8",
				marginStart: "hcukyx3x",
				paddingTop: "ipjc6fyt"
			},
			bottomAddOnWithFacepile: {
				marginStart: "ocgrx2df"
			},
			bottomDivider: {
				backgroundColor: "pwoa4pd7",
				bottom: "i09qtzwb",
				end: "n7fi1qx3",
				height: "ay7djpcl",
				position: "pmk7jnqg",
				start: "j9ispegn"
			},
			content: {
				alignItems: "gs1a9yip",
				borderStyle: "ow4ym5g4",
				borderWidth: "auili1gw",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
				justifyContent: "i1fnvgqd",
				marginBottom: "oygrvhab",
				marginEnd: "cxmmr5t8",
				marginStart: "hcukyx3x",
				marginTop: "kvgmc6g5",
				minHeight: "tgvbjcpo",
				minWidth: "hpfvmrgz",
				paddingEnd: "rz4wbd8a",
				paddingStart: "a8nywdso",
				position: "l9j0dhe7",
				zIndex: "du4w35lb",
				flexBasis: "rj1gh0hx",
				paddingTop: "pybr56ya",
				paddingBottom: "f10w8fjw"
			},
			contentContainer: {
				borderStyle: "ow4ym5g4",
				borderWidth: "auili1gw",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
				justifyContent: "i1fnvgqd",
				marginBottom: "oygrvhab",
				marginEnd: "cxmmr5t8",
				marginStart: "hcukyx3x",
				marginTop: "kvgmc6g5",
				minHeight: "tgvbjcpo",
				minWidth: "hpfvmrgz",
				paddingBottom: "qt6c0cv9",
				paddingEnd: "rz4wbd8a",
				paddingStart: "a8nywdso",
				paddingTop: "jb3vyjys",
				zIndex: "du4w35lb",
				alignItems: "bp9cbjyn",
				flexDirection: "btwxx1t3",
				position: "l9j0dhe7"
			},
			contentDense: {
				paddingTop: "cxgpxx05",
				paddingBottom: "sj5x9vvc"
			},
			contentWithMoreSpacing: {
				paddingTop: "discj3wi",
				paddingBottom: "ihqw7lf3"
			},
			contentWithMoreSpacingDense: {
				paddingTop: "pybr56ya",
				paddingBottom: "f10w8fjw"
			},
			disabled: {
				cursor: "rj84mg9z",
				pointerEvents: "hzruof5a"
			},
			listCellMinHeight: {
				minHeight: "nnctdnn4"
			},
			pressable: {
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				display: "a8c37x1j"
			},
			primaryAddOn: {
				alignSelf: "nqmvxvec",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				marginEnd: "tvfksri0",
				marginTop: "aov4n071",
				marginBottom: "bi6gxh9e",
				position: "l9j0dhe7"
			},
			primaryAddOnDense: {
				marginTop: "qjjbsfad",
				marginBottom: "w0hvl6rk"
			},
			primaryAddOnDensityAware: {
				"@media (max-height: 700px)": {
					marginEnd: "m6uieof3",
					marginStart: "icc0peqn",
					marginTop: "hx8drtub",
					marginBottom: "j13r6fgp",
					transform: "nddp3pr2"
				}
			},
			responsiveButtons: {
				flexGrow: "buofh1pr",
				paddingBottom: "iuny7tx3",
				paddingTop: "ipjc6fyt"
			},
			responsiveContent: {
				alignItems: "bp9cbjyn",
				flexDirection: "btwxx1t3",
				flexWrap: "lhclo0ds",
				marginBottom: "mysgfdmx",
				marginTop: "hddg9phg"
			},
			responsiveText: {
				boxSizing: "rq0escxv",
				flexBasis: "hkbzh7o3",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
				maxWidth: "d2edcug0",
				minWidth: "ptc67a42",
				paddingBottom: "iuny7tx3",
				paddingEnd: "hv4rvrfc",
				paddingTop: "ipjc6fyt"
			},
			root: {
				borderStyle: "ow4ym5g4",
				borderWidth: "auili1gw",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
				justifyContent: "i1fnvgqd",
				marginBottom: "oygrvhab",
				marginEnd: "cxmmr5t8",
				marginStart: "hcukyx3x",
				marginTop: "kvgmc6g5",
				minHeight: "tgvbjcpo",
				minWidth: "hpfvmrgz",
				paddingBottom: "qt6c0cv9",
				paddingTop: "jb3vyjys",
				position: "l9j0dhe7",
				zIndex: "du4w35lb",
				alignItems: "bp9cbjyn",
				flexDirection: "btwxx1t3",
				paddingEnd: "dflh9lhu",
				paddingStart: "scb9dxdr"
			},
			rootWithIncreasedHeight: {
				minHeight: "e170dy2k"
			},
			secondaryAddOn: {
				marginBottom: "n851cfcs",
				marginStart: "ozuftl9m",
				marginTop: "n1l5q3vz",
				position: "l9j0dhe7"
			},
			secondaryAddOnCenter: {
				marginBottom: "bi6gxh9e",
				marginTop: "aov4n071"
			},
			secondaryAddOnSmall: {
				marginBottom: "bi6gxh9e",
				marginStart: "ozuftl9m",
				marginTop: "aov4n071",
				position: "l9j0dhe7"
			},
			selected: {
				backgroundColor: "i224opu6"
			},
			textRight: {
				flexShrink: "pfnyh3mw"
			}
		},
		j = {
			center: {
				alignSelf: "o8rfisnq"
			},
			start: {
				alignSelf: "nqmvxvec"
			}
		},
		k = {
			center: {
				alignSelf: "o8rfisnq"
			},
			start: {
				alignSelf: "nqmvxvec"
			}
		};

	function a(a, c) {
		var d = a.addOnBottom,
			e = a.addOnPrimary,
			f = a.addOnPrimaryCssSelectionId,
			o = a.addOnPrimaryOverrideVerticalStyle,
			p = a.addOnPrimaryTestId;
		p = a.addOnPrimaryVerticalAlign;
		p = p === void 0 ? "start" : p;
		var q = a.addOnSecondary,
			r = a.addOnSecondaryRef,
			s = a.addOnSecondaryTestId;
		s = a.addOnSecondaryVerticalAlign;
		s = s === void 0 ? "start" : s;
		var t = a.body,
			u = a.bodyColor;
		u = u === void 0 ? "secondary" : u;
		var v = a.bodyLineLimit,
			w = a.contentHorizontalPadding,
			x = a.dataAttributes,
			y = a.describedby,
			z = a.disabled;
		z = z === void 0 ? !1 : z;
		var A = a.emphasized;
		A = A === void 0 ? !1 : A;
		var B = a.focusable,
			C = a.hasBottomDivider,
			D = a.headline,
			E = a.headlineAddOn,
			F = a.headlineColor;
		F = F === void 0 ? "primary" : F;
		var G = a.headlineLineLimit,
			H = a.level;
		H = H === void 0 ? 3 : H;
		var I = a.linkProps,
			J = a.meta,
			K = a.metaColor;
		K = K === void 0 ? "tertiary" : K;
		var L = a.metaLineLimit,
			M = a.metaLocation,
			N = a.onFocusChange,
			O = a.onHoverIn,
			P = a.onHoverOut,
			Q = a.onPress,
			aa = a.onPressIn,
			ba = a.onPressOut,
			R = a.paddingHorizontal,
			ca = a.role,
			S = a.selected;
		S = S === void 0 ? !1 : S;
		var T = a.size;
		T = T === void 0 ? "default" : T;
		var U = a.testid;
		U = a.testOnly_pressed;
		a = h.useContext(b("CometDensityModeContext"));
		a = a[0];
		var V = h.useContext(b("CometDensityAwarenessContext")),
			W = D != null && t == null && J == null,
			X = D == null && t != null && J == null,
			Y = D == null && t == null && J != null,
			Z = W && G != null && G === 1 || X && v != null && v === 1 || Y && L != null && L === 1;
		W = W && G != null && G > 1 || X && v != null && v > 1 || Y && L != null && L > 1;
		X = q != null && (q.type === "primary-button" || q.type === "secondary-button" || q.type === "body");
		Y = q != null && q.type === "expander";
		s = X || Y ? "center" : s;
		p = Z ? "center" : p;
		var $ = d != null && d.type === "buttons";
		W = e == null && (W || Z && (X || Y));
		Z = x != null ? Object.keys(x).reduce(function(a, b) {
			a != null && b != null && (a["data-" + b] = x[b]);
			return a
		}, {}) : null;
		o = h.jsxs("div", {
			className: (g || (g = b("stylex")))(i.root, Y && T !== "small" ? i.rootWithIncreasedHeight : null, T !== "small" ? i.listCellMinHeight : null),
			style: w == null ? void 0 : {
				paddingLeft: w,
				paddingRight: w
			},
			children: [e != null ? h.jsx("div", {
				className: (g || (g = b("stylex")))(i.primaryAddOn, o, j[p], a && i.primaryAddOnDense, V === !0 && i.primaryAddOnDensityAware),
				"data-testid": void 0,
				id: f,
				children: h.jsx(l, {
					addOnPrimary: e,
					disabled: z
				})
			}) : null, h.jsxs("div", {
				className: g(i.contentContainer),
				children: [h.jsxs("div", {
					className: g(i.content, a ? i.contentDense : null, W ? i.contentWithMoreSpacing : null, W && a ? i.contentWithMoreSpacingDense : null, $ ? i.responsiveContent : null),
					children: [h.jsx("div", {
						className: g($ && i.responsiveText),
						children: h.jsx(b("TetraTextPairing.react"), {
							body: t,
							bodyColor: z ? "disabled" : u,
							bodyLineLimit: v,
							headline: D,
							headlineAddOn: E,
							headlineColor: z ? "disabled" : F,
							headlineLineLimit: G,
							level: H,
							meta: J,
							metaColor: z ? "disabled" : K,
							metaLineLimit: L,
							metaLocation: M,
							reduceEmphasis: A === !1
						})
					}), d != null && h.jsx("div", {
						className: (g || (g = b("stylex")))(i.bottomAddOn, d.type === "facepile" ? i.bottomAddOnWithFacepile : null, d.type === "designOverride_CometMarketplacePDPRHCSellerRating_bottomAddOn" ? i.bottomAddOnOverride_starRating : null, d.type === "designOverride_InboxThreadLabel_bottomAddOn" ? i.bottomAddOnOverride_threadLabel : null, $ ? i.responsiveButtons : null),
						children: h.jsx("div", {
							className: (g || (g = b("stylex")))(i.bottomAddOnInner),
							children: h.jsx(m, {
								addOnBottom: d
							})
						})
					})]
				}), q != null ? h.jsx("div", {
					className: (g || (g = b("stylex")))(T !== "small" && i.secondaryAddOn, T === "small" && i.secondaryAddOnSmall, (X || Y) && i.secondaryAddOnCenter, k[s]),
					"data-testid": void 0,
					ref: r,
					children: h.jsx(n, {
						addOn: q,
						disabled: z,
						level: H
					})
				}) : null, ((w = C) != null ? w : !1) ? h.jsx("div", {
					className: (g || (g = b("stylex")))(i.bottomDivider)
				}) : null]
			})]
		});
		p = q != null && q.type === "expander" && q.open === !0 && q.children != null ? q.children : null;
		V = void 0;
		f = void 0;
		if (q != null) switch (q.type) {
			case "checkbox":
				f = q.on;
				V = "checkbox";
				break;
			case "radio":
				f = q.on;
				V = "radio";
				break;
			case "switch":
				f = q.value;
				V = "switch";
				break
		}
		e = h.useContext(b("CometFocusGroupContext"));
		W = e.FocusItem;
		a = h.useContext(b("CometFocusTableContext"));
		t = a.FocusCell;
		u = a.FocusRow;
		v = h.useContext(b("CometCompositeStructureContext"));
		D = v.role;
		F = (E = ca) != null ? E : b("getItemRoleFromCompositeRole")(D);
		J = F === "row" && u ? u : (G = W) != null ? G : h.Fragment;
		L = (K = t) != null ? K : h.Fragment;
		return h.jsxs(J, {
			children: [h.jsx("div", babelHelpers["extends"]({}, b("CometVisualCompletionAttributes").IGNORE_DYNAMIC, {
				role: (M = F) != null ? M : void 0,
				style: {
					paddingLeft: (A = R) != null ? A : 8,
					paddingRight: ($ = R) != null ? $ : 8
				}
			}, Z, {
				children: h.jsx(L, {
					children: Q != null || I != null ? h.jsx(b("CometPressable.react"), {
						"aria-checked": f,
						"aria-describedby": y != null ? y : void 0,
						disabled: z,
						display: "block",
						focusable: B,
						linkProps: I,
						onFocusChange: N,
						onHoverIn: O,
						onHoverOut: P,
						onPress: Q,
						onPressIn: aa,
						onPressOut: ba,
						overlayDisabled: S,
						ref: c,
						role: V,
						testOnly_pressed: U,
						testid: void 0,
						xstyle: [i.pressable, S && i.selected, z && i.disabled],
						children: o
					}) : h.jsx("div", {
						className: (g || (g = b("stylex")))(i.pressable, S ? i.selected : null, z ? i.disabled : null),
						"data-testid": void 0,
						ref: c,
						children: o
					})
				})
			})), p]
		})
	}

	function l(a) {
		var c = a.addOnPrimary;
		a = a.disabled;
		switch (c.type) {
			case "icon":
				c.type;
				var d = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
				return h.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, d, {
					disabled: a
				}));
			case "profile-photo":
				c.type;
				d = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
				return h.jsx(b("TetraProfilePhoto.react"), babelHelpers["extends"]({}, d));
			case "profile-photo-for-actor":
				c.type;
				d = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
				return h.jsx(b("TetraProfilePhotoForActor.react"), babelHelpers["extends"]({}, d));
			case "contained-icon":
				d = c.color;
				d = d === void 0 ? "gray" : d;
				c.type;
				var e = babelHelpers.objectWithoutPropertiesLoose(c, ["color", "type"]);
				return h.jsx(b("TetraishSkittleIcon.react"), babelHelpers["extends"]({
					color: d
				}, e, {
					disabled: a
				}));
			case "contained-progress-ring-indeterminate":
				return h.jsx(b("CometProgressSkittleIndeterminate.react"), {});
			case "messenger-facepile":
				c.type;
				d = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
				return h.jsx(b("MWJewelThreadFacepile.react"), babelHelpers["extends"]({}, d));
			case "group_member_profile_primary_addon":
				return c.component;
			case "save_collection_initial":
				return c.component;
			case "emoji":
				e = c.color;
				a = e === void 0 ? "gray" : e;
				d = c.emoji;
				e = c.emojiSize;
				e = e === void 0 ? 20 : e;
				var f = c.size;
				f = f === void 0 ? 40 : f;
				return h.jsx(b("TetraishSkittleEmoji.react"), {
					color: a,
					emoji: d,
					emojiSize: e,
					size: f
				});
			default:
				c.type;
				return null
		}
	}
	var m = function(a) {
			a = a.addOnBottom;
			switch (a.type) {
				case "buttons":
					return a.component;
				case "facepile":
					return a.facepile;
				case "designOverride_Notifications_bottomAddOn":
					return a.override_component;
				case "designOverride_InboxThreadLabel_bottomAddOn":
					return a.label_component;
				case "designOverride_PageCompletionMeterActions_bottomAddOn":
					return a.actions_component;
				case "designOverride_CometMarketplacePDPRHCSellerRating_bottomAddOn":
					return a.rating_component;
				default:
					a.type;
					return null
			}
		},
		n = function(a) {
			var c = a.addOn,
				d = a.disabled;
			a = a.level;
			var e = b("getTetraListCellAddOn.react").getSecondaryAddOn(c, d, a),
				f = c.type === "disclosure" && c.text != null ? c.text : null;
			return h.jsxs("div", {
				className: (g || (g = b("stylex")))(i.addOn),
				children: [f != null && h.jsx("div", {
					className: (g || (g = b("stylex")))(i.textRight),
					children: h.jsx(b("TetraText.react"), {
						color: d ? "disabled" : "secondary",
						numberOfLines: 1,
						type: a === 3 ? "body2" : "body3",
						children: f
					})
				}), h.jsx("div", {
					"aria-label": c.type === "icon" ? c["aria-label"] : void 0,
					className: g(c.type === "expander" ? i.addOnWithExpander : null, f != null ? i.addOnWithText : null, c.type === "icon" ? i.addOnWithIcon : null),
					role: c.type === "icon" && c["aria-label"] != null ? "img" : void 0,
					children: e
				})]
			})
		};
	c = h.forwardRef(a);
	e.exports = c
}), null);