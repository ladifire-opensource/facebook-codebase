__d("CometFormInputWrapper.react", [
	"BaseFocusRing.react", 
	"CometFormInputValidationStateIcon", 
	"CometFormInputWrapperHelperText.react", "FocusWithinHandler.react", "React", "stylex", "useCometUniqueID"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			disabled: {
				backgroundColor: "qsy8amke",
				borderTopColor: "qbxu24ho",
				borderEndColor: "bxzzcbxg",
				borderBottomColor: "lxuwth05",
				borderStartColor: "h2mp5456",
				boxShadow: "mvk8q8v6",
				cursor: "rj84mg9z",
				":active": {
					backgroundColor: "mqpsvyrg"
				}
			},
			error: {
				borderTopColor: "jw3uvs1e",
				borderEndColor: "hmw3o7ox",
				borderBottomColor: "ku5f423u",
				borderStartColor: "a64ryyup",
				":active": {
					backgroundColor: "fitdx2wt"
				}
			},
			errorFocused: {
				boxShadow: "d7fyn1kr"
			},
			errorHovered: {
				backgroundColor: "h6vcs4m2"
			},
			focused: {
				borderTopColor: "ng4oes9w",
				borderEndColor: "epui8hbc",
				borderBottomColor: "nxp5a7ae",
				borderStartColor: "og13rbbo",
				boxShadow: "gxj1dplq"
			},
			headerMask: {
				backgroundColor: "cwj9ozl2",
				end: "cypi58rs",
				height: "gl3lb2sf",
				position: "pmk7jnqg",
				start: "re5koujm",
				top: "plgsh5y4"
			},
			helperText: {
				marginTop: "aov4n071"
			},
			hovered: {
				borderTopColor: "np24d88i",
				borderEndColor: "p9mcbvme",
				borderBottomColor: "krxe8813",
				borderStartColor: "ph5sz0o6"
			},
			input: {
				backgroundColor: "g5ia77u1",
				flexGrow: "buofh1pr",
				maxWidth: "d2edcug0",
				minWidth: "hpfvmrgz",
				position: "l9j0dhe7"
			},
			inputRow: {
				display: "j83agx80",
				width: "k4urcfbm"
			},
			label: {
				color: "m9osqain",
				cursor: "t5a262vz",
				display: "a8c37x1j",
				end: "b5fwa0m2",
				fontSize: "jagab5yi",
				fontWeight: "knj5qynh",
				lineHeight: "fo6rh5oj",
				maxWidth: "d2edcug0",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				pointerEvents: "hzruof5a",
				position: "pmk7jnqg",
				start: "re5koujm",
				textOverflow: "ltmttdrg",
				top: "fgv6swy9",
				transformOrigin: "dd2scrzq",
				transitionDuration: "ms05siws",
				transitionProperty: "flx89l3n",
				transitionTimingFunction: "b7h9ocf4",
				whiteSpace: "g0qnabr5"
			},
			labelDisabled: {
				color: "erlsw9ld"
			},
			labelError: {
				color: "jdix4yx3"
			},
			labelHighlighted: {
				color: "q66pz984"
			},
			labelShrunk: {
				end: "qeu253yp",
				transform: "benu5kxt"
			},
			root: {
				backgroundColor: "cwj9ozl2",
				borderTopColor: "qbxu24ho",
				borderEndColor: "bxzzcbxg",
				borderBottomColor: "lxuwth05",
				borderStartColor: "h2mp5456",
				borderTopStartRadius: "beltcj47",
				borderTopEndRadius: "p86d2i9g",
				borderBottomEndRadius: "aot14ch1",
				borderBottomStartRadius: "kzx2olss",
				borderTopStyle: "goun2846",
				borderEndStyle: "ccm00jje",
				borderBottomStyle: "s44p3ltw",
				borderStartStyle: "mk2mc5f4",
				borderTopWidth: "frvqaej8",
				borderEndWidth: "ed0hlay0",
				borderBottomWidth: "afxsp9o4",
				borderStartWidth: "jcgfde61",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "l9j0dhe7",
				zIndex: "du4w35lb",
				":active": {
					backgroundColor: "hw4tbnyy"
				}
			},
			secondary: {
				display: "j83agx80"
			},
			shake: {
				animationDuration: "snb1aq0c",
				animationFillMode: "ev399l9o",
				animationName: "bdkv5917",
				animationTimingFunction: "r2dqequf"
			},
			validationIcon: {
				paddingEnd: "hv4rvrfc",
				paddingTop: "eluhq753"
			},
			validationIconHideLabel: {
				paddingTop: "pybr56ya"
			},
			warn: {
				borderTopColor: "o9os1wxa",
				borderEndColor: "mkmln09k",
				borderBottomColor: "sx6p85o9",
				borderStartColor: "au5c3ovr",
				":active": {
					backgroundColor: "qfsyapuy"
				}
			},
			warnFocused: {
				boxShadow: "hcyst5jg"
			},
			warnHovered: {
				backgroundColor: "q7skrjnd"
			}
		},
		j = {
			pointer: {
				cursor: "nhd2j8a9"
			},
			text: {
				cursor: "o6r2urh6"
			}
		};

	function k(a) {
		if (Array.isArray(a)) return a.length === 0;
		else if (typeof a === "object") {
			if (a)
				for (var b in a) return !1;
			return !0
		} else return a == null || a === ""
	}

	function a(a) {
		var c = a.addOnBottom,
			d = a.addOnPrimary,
			e = a.ariaLabel,
			f = a.auxContent,
			l = a.children,
			m = a.cursor,
			n = a.disabled,
			o = n === void 0 ? !1 : n,
			p = a.helperText;
		n = a.hideLabel;
		var q = n === void 0 ? !1 : n,
			r = a.label,
			s = a.labelRef;
		n = a.onFocusChange;
		var t = a.onPress,
			u = a.shrinkLabelOnFocus,
			v = u === void 0 ? !0 : u,
			w = a.suppressFocusRing,
			x = a.validationState;
		u = a.value;
		a = a.withHeaderMask;
		var y = a === void 0 ? !1 : a,
			z = b("useCometUniqueID")(),
			A = b("useCometUniqueID")();
		a = h.useState(!1);
		var B = a[0],
			C = a[1];
		a = h.useState(!1);
		var D = a[0],
			E = a[1],
			F = !k(u),
			G = h.useCallback(function () {
				D || E(!0)
			}, [D]),
			H = h.useCallback(function () {
				D && E(!1)
			}, [D]),
			I = h.useRef(null);
		a = h.useState(!1);
		var J = a[0],
			K = a[1];
		return h.jsxs("div", {
			children: [h.jsx(b("FocusWithinHandler.react"), {
				onFocusChange: n,
				children: function (a) {
					return h.jsx(b("BaseFocusRing.react"), {
						suppressFocusRing: !J || w,
						children: function (k) {
							var n;
							return h.jsxs("label", {
								"aria-label": (n = e) != null ? n : r,
								className: (g || (g = b("stylex")))(i.root, j[m], D && i.hovered, a && i.focused, x === "WARN" && [i.warn, D && i.warnHovered, a && i.warnFocused], x === "ERROR" && [i.error, D && i.errorHovered, a && i.errorFocused], o && i.disabled, B && i.shake, k),
								htmlFor: z,
								onAnimationEnd: function () {
									C(!1)
								},
								onClick: function () {
									o ? C(!0) : t && t()
								},
								onMouseEnter: G,
								onMouseLeave: H,
								ref: I,
								role: t != null ? "button" : void 0,
								tabIndex: t != null ? 0 : void 0,
								children: [h.jsxs("div", {
									className: g(i.inputRow),
									children: [d, h.jsxs("div", {
										className: g(i.input),
										children: [y && !o && (F || a) && h.jsx("span", {
											className: (g || (g = b("stylex")))(i.headerMask)
										}), !q && h.jsx("span", {
											className: (g || (g = b("stylex")))(i.label, x === "ERROR" ? i.labelError : null, x == null && a ? i.labelHighlighted : null, F || a && v ? i.labelShrunk : null, o ? i.labelDisabled : null),
											ref: s,
											children: r
										}), h.jsx(b("FocusWithinHandler.react"), {
											onFocusChange: K,
											children: l({
												filled: F,
												focused: a,
												helperTextID: p != null ? A : void 0,
												id: z,
												rootRef: I
											})
										})]
									}), (f != null || x != null) && h.jsxs("div", {
										className: (g || (g = b("stylex")))(i.secondary),
										children: [x != null && h.jsx("div", {
											className: (g || (g = b("stylex")))(i.validationIcon, q && i.validationIconHideLabel),
											children: b("CometFormInputValidationStateIcon")[x]
										}), f]
									})]
								}), c]
							})
						}
					})
				}
			}), p != null && h.jsx("div", {
				className: (g || (g = b("stylex")))(i.helperText),
				id: A,
				children: h.jsx(b("CometFormInputWrapperHelperText.react"), {
					validationState: x,
					value: p
				})
			})]
		})
	}
}), null);