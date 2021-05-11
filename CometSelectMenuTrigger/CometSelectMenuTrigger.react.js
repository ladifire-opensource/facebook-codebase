__d("CometSelectMenuTrigger.react", ["fbt", "BaseContextualLayer.react", 
	"CometComponentWithKeyCommands.react", "CometKeys", "CometMenu.react", 
	"CometMenuItemSelectable.react", "FocusInertRegion.react", 
	"FocusWithinHandler.react", "React", "clearTimeout", 
	"focusScopeQueries", "setTimeout", "stylex", "useCometUniqueID"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React"),
		i = 1e3,
		j = {
			hideOutline: {
				outline: "lzcic4wl"
			}
		};

	function k(a, b) {
		return a + "__" + (b != null ? b : "0")
	}

	function a(a) {
		var c = a.children,
			d = a.disabled;
		d = d === void 0 ? !1 : d;
		var e = a.onChange,
			f = a.options,
			l = a.selectedValue,
			m = a.size;
		m = m === void 0 ? "normal" : m;
		var n = a.truncate;
		n = n === void 0 ? !0 : n;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "disabled", "onChange", "options", "selectedValue", "size", "truncate"]);
		var o = h.useState(!1),
			p = o[0],
			q = o[1],
			r = p && f.length > 0,
			s = b("useCometUniqueID")();
		o = b("useCometUniqueID")();
		p = b("useCometUniqueID")();
		var t = h.useState(null),
			u = t[0],
			v = t[1],
			w = h.useRef(null),
			x = h.useCallback(function () {
				return q(!0)
			}, []),
			y = h.useCallback(function () {
				v(null), q(!1)
			}, []);
		t = h.useCallback(function (a) {
			a || y()
		}, [y]);
		var z = h.useCallback(function () {
				if (r) u != null && e(u), y();
				else {
					var a;
					v((a = l) != null ? a : null);
					x()
				}
			}, [u, r, e, y, x, l]),
			A = f.filter(function (a) {
				return !a.disabled
			}),
			B = h.useMemo(function () {
				return [{
					command: {
						key: b("CometKeys").ENTER
					},
					description: g._("Ch\u1ecdn m\u1ee5c"),
					handler: function () {},
					triggerOnKeyup: !0
				}].concat(r ? [{
					command: {
						key: b("CometKeys").ESCAPE
					},
					description: g._("\u0110\u00f3ng g\u1ee3i \u00fd"),
					handler: function () {
						r && y()
					}
				}] : [], [{
					command: {
						key: b("CometKeys").DOWN
					},
					description: g._("M\u1ee5c ti\u1ebfp theo"),
					handler: function () {
						if (A.length > 0) {
							var a = A.findIndex(function (a) {
								return a.value === u
							});
							if (u == null || a === -1) {
								var b;
								v((b = l) != null ? b : A[0].value)
							} else a === A.length - 1 ? v(A[0].value) : v(A[a + 1].value);
							x()
						}
					}
				}, {
					command: {
						key: b("CometKeys").UP
					},
					description: g._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),
					handler: function () {
						if (A.length > 0) {
							var a = A.findIndex(function (a) {
								return a.value === u
							});
							if (u == null || a === -1) {
								var b;
								v((b = l) != null ? b : A[A.length - 1].value)
							} else a === 0 ? v(A[A.length - 1].value) : v(A[a - 1].value);
							x()
						}
					}
				}, {
					command: {
						alt: !0,
						key: b("CometKeys").DOWN
					},
					description: g._("Hi\u1ec3n th\u1ecb g\u1ee3i \u00fd"),
					handler: x
				}, {
					command: {
						alt: !0,
						key: b("CometKeys").UP
					},
					description: g._("\u0110\u00f3ng g\u1ee3i \u00fd"),
					handler: y
				}, {
					command: {
						key: b("CometKeys").HOME
					},
					description: g._("M\u1ee5c \u0111\u1ea7u ti\u00ean"),
					handler: function () {
						r && v(A[0].value)
					}
				}, {
					command: {
						key: b("CometKeys").END
					},
					description: g._("M\u1ee5c cu\u1ed1i c\u00f9ng"),
					handler: function () {
						r && v(A[A.length - 1].value)
					}
				}])
			}, [x, u, y, l, r, A]),
			C = h.useRef(null),
			D = h.useRef(""),
			E = h.useCallback(function (a) {
				if (D.current === "" && (a.code === "Backspace" || a.code === "Clear" || a.key === " ")) return;
				if (!(a.key.length === 1 || a.code === "Backspace" || a.code === "Clear") || a.altKey || a.ctrlKey || a.metaKey) return;
				a.code === "Backspace" || a.code === "Clear" ? D.current = D.current.substring(0, D.current.length - 1) : D.current += a.key.toLocaleLowerCase();
				a.preventDefault();
				C.current != null && b("clearTimeout")(C.current);
				C.current = b("setTimeout")(function () {
					D.current = "", C.current = null
				}, i);
				a = A.findIndex(function (a) {
					return a.value === u
				});
				a = a === -1 ? 0 : a;
				for (var c = 0; c < A.length; c++) {
					var d = (c + a) % A.length;
					d = A[d];
					if (d.label.toString().toLocaleLowerCase().startsWith(D.current)) {
						r || x();
						v(d.value);
						return
					}
				}
			}, [u, A, r, x]);
		h.useEffect(function () {
			var a = w.current;
			if (a != null) {
				a.addEventListener("keydown", E);
				return function () {
					a.removeEventListener("keydown", E)
				}
			}
		}, [E]);
		var F = f.findIndex(function (a) {
			return a.value === u
		});
		return h.jsx(b("FocusWithinHandler.react"), {
			onFocusChange: t,
			children: h.jsxs(b("CometComponentWithKeyCommands.react"), {
				commandConfigs: B,
				children: [c(w, {
					"aria-activedescendant": r && u != null && F !== -1 ? k(s, F) : void 0,
					"aria-controls": r ? o : void 0,
					"aria-expanded": r,
					disabled: d,
					id: p,
					onPress: z,
					xstyle: [u != null && j.hideOutline]
				}), r && h.jsx(b("BaseContextualLayer.react"), babelHelpers["extends"]({}, a, {
					contextRef: w,
					children: h.jsx(b("FocusInertRegion.react"), {
						focusQuery: b("focusScopeQueries").tabbableScopeQuery,
						children: h.jsx(b("CometMenu.react"), {
							id: o,
							role: "listbox",
							size: m,
							truncate: n,
							children: f.map(function (a, c) {
								return h.jsx(b("CometMenuItemSelectable.react"), {
									"aria-checked": a.value === l,
									"aria-disabled": a.disabled,
									"aria-posinset": c,
									"aria-selected": a.value === l,
									"aria-setsize": f.length,
									bodyColor: a.bodyColor,
									bodyText: a.bodyText,
									disabled: a.disabled,
									icon: a.icon,
									iconStyle: "contained_small_icon",
									id: k(s, c),
									isSelected: a.value === l,
									onClick: function () {
										e(a.value), y()
									},
									preventClosingMenuOnSelect: !0,
									primaryText: a.label,
									role: "option",
									secondaryColor: a.secondaryColor,
									secondaryText: a.secondaryText,
									testid: void 0,
									visuallyFocused: a.value === u
								}, a.value)
							})
						})
					})
				}))]
			})
		})
	}
}), null);