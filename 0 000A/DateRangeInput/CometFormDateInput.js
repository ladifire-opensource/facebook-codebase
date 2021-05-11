__d("CometFormDateInput.react", ["ix", "fbt", "BaseContextualLayer.react", "BaseTextInput.react", "CometComponentWithKeyCommands.react", "CometFormCalendarPager.react", "CometFormDateInputUtils", "CometFormInputWrapper.react", "CometHideLayerOnEscape.react", "CometKeys", "CometPopover.react", "FocusManager", "FocusRegion.react", "FocusWithinHandler.react", "JSScheduler", "React", "TetraIcon.react", "fbicon", "focusScopeQueries", "stylex", "useCometUniqueID", "useOnOutsideClick"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i, j = b("React"),
		k = {
			calendar: {
				paddingTop: "discj3wi",
				paddingEnd: "hv4rvrfc",
				paddingBottom: "ihqw7lf3",
				paddingStart: "dati1w0a",
				width: "bn50mez6"
			},
			disabled: {
				color: "erlsw9ld",
				cursor: "rj84mg9z"
			},
			input: {
				backgroundColor: "g5ia77u1",
				borderTop: "gcieejh5",
				borderEnd: "bn081pho",
				borderBottom: "humdl8nn",
				borderStart: "izx4hr6d",
				boxSizing: "rq0escxv",
				color: "oo9gr5id",
				fontSize: "jagab5yi",
				fontWeight: "knj5qynh",
				lineHeight: "fo6rh5oj",
				paddingBottom: "osnr6wyh",
				paddingEnd: "hv4rvrfc",
				paddingStart: "dati1w0a",
				paddingTop: "p0x8y401",
				width: "k4urcfbm"
			},
			primaryIcon: {
				paddingStart: "dati1w0a",
				paddingTop: "eluhq753",
				pointerEvents: "hzruof5a"
			}
		},
		l = "M d, Y";

	function m(a, b) {
		if (a == null) return "";
		else return b != null ? b(a) : a.format(l)
	}
	var n = [];

	function a(a) {
		var c = a.constraints,
			d = c === void 0 ? n : c,
			e = a.date,
			f = a.dateFormatter;
		c = a.disabled;
		var l = c === void 0 ? !1 : c;
		c = a.helperText;
		var o = a.hideIcon;
		o = o === void 0 ? !1 : o;
		var p = a.icon;
		p = p === void 0 ? b("fbicon")._(g("481127"), 20) : p;
		var q = a.initialCalendarDate,
			r = a.label,
			s = a.onBlur,
			t = a.onDateChange,
			u = a.onFocus,
			v = a.placeholder,
			w = a.testid,
			x = a.validationState;
		w = j.useState(function() {
			return m(e, f)
		});
		var y = w[0],
			z = w[1];
		a = j.useState(!1);
		var A = a[0],
			B = a[1],
			C = j.useRef(null),
			D = j.useRef(null);
		w = j.useState(!1);
		a = w[0];
		var E = w[1],
			F = j.useRef(!0),
			G = b("useCometUniqueID")(),
			H = j.useCallback(function(a) {
				z(a), F.current = !1
			}, []),
			I = j.useCallback(function(a) {
				if (e === a || a != null && (!a.isValid() || !d.every(function(b) {
						return b(a)
					}))) {
					H(m(e, f));
					F.current = !0;
					return
				}
				t(a)
			}, [d, e, f, t, H]),
			J = j.useCallback(function() {
				if (F.current === !1) {
					if (y === "") {
						I(null);
						return
					}
					var a = b("CometFormDateInputUtils").parseStringToDate(y);
					if (a != null && a.isValid() && d.every(function(b) {
							return b(a)
						})) {
						I(a);
						return
					}
				}
				I(e)
			}, [d, e, y, I]),
			K = j.useCallback(function() {
				return B(!0)
			}, []),
			L = j.useCallback(function() {
				return B(!1)
			}, []),
			M = j.useCallback(function() {
				b("JSScheduler").defer(function() {
					D.current != null && b("FocusManager").focusElement(D.current)
				})
			}, []),
			N = j.useRef(e),
			O = j.useRef(f);
		j.useEffect(function() {
			(e !== N.current || f !== O.current) && (H(m(e, f)), F.current = !0), N.current = e, O.current = f
		}, [e, f, H]);
		w = j.useCallback(function() {
			A || K(), M()
		}, [M, A, K]);
		var P = j.useCallback(function(a) {
				L(), t(a)
			}, [t, L]),
			Q = j.useCallback(function(a) {
				a || (L(), J())
			}, [L, J]),
			R = j.useCallback(function(a) {
				a.target !== C.current && L()
			}, [L]),
			S = j.useMemo(function() {
				var a;
				return [{
					command: {
						key: (a = b("CometKeys")).ENTER
					},
					description: h._("Select date"),
					handler: function() {
						L(), J()
					},
					triggerFromInputs: !0
				}, {
					command: {
						key: a.ESCAPE
					},
					description: h._("Close calendar"),
					handler: function() {
						A && (H(""), L())
					},
					triggerFromInputs: !0
				}, {
					command: {
						key: a.DOWN
					},
					description: h._("Show calendar"),
					handler: function() {
						J(), K(), M()
					},
					triggerFromInputs: !0
				}, {
					command: {
						key: a.UP
					},
					description: h._("Show calendar"),
					handler: function() {
						J(), K(), M()
					},
					triggerFromInputs: !0
				}, {
					command: {
						alt: !0,
						key: a.DOWN
					},
					description: h._("Show calendar"),
					handler: K,
					isHiddenCommand: !0,
					triggerFromInputs: !0
				}, {
					command: {
						alt: !0,
						key: a.UP
					},
					description: h._("Close calendar"),
					handler: L,
					isHiddenCommand: !0,
					triggerFromInputs: !0
				}]
			}, [L, J, A, H, K, M]),
			T = j.useMemo(function() {
				var a;
				return [{
					command: {
						key: (a = b("CometKeys")).DOWN
					},
					description: h._("Show calendar"),
					handler: function() {
						K(), M()
					}
				}, {
					command: {
						key: a.UP
					},
					description: h._("Show calendar"),
					handler: function() {
						K(), M()
					}
				}, {
					command: {
						alt: !0,
						key: a.DOWN
					},
					description: h._("Show calendar"),
					handler: K,
					isHiddenCommand: !0
				}, {
					command: {
						alt: !0,
						key: a.UP
					},
					description: h._("Close calendar"),
					handler: L,
					isHiddenCommand: !0
				}]
			}, [M, L, K]);
		r = (r = r) != null ? r : h._("Date");
		var U = b("useOnOutsideClick")(R);
		return j.jsx(b("CometFormInputWrapper.react"), {
			addOnPrimary: o ? void 0 : j.jsx(b("CometComponentWithKeyCommands.react"), {
				commandConfigs: T,
				xstyle: k.primaryIcon,
				children: j.jsx(b("TetraIcon.react"), {
					"aria-controls": A ? G : void 0,
					"aria-expanded": A,
					"aria-label": e != null ? h._("{label}, Selected: {date}", [h._param("label", r), h._param("date", m(e, f))]) : r,
					color: "secondary",
					icon: p,
					onPress: w,
					testid: void 0
				})
			}),
			cursor: "text",
			disabled: l,
			helperText: c,
			label: r,
			onFocusChange: Q,
			suppressFocusRing: a,
			validationState: x,
			value: y,
			children: function(a) {
				var c = a.focused,
					f = a.helperTextID,
					g = a.id;
				a = a.rootRef;
				return j.jsxs(j.Fragment, {
					children: [j.jsx(b("CometComponentWithKeyCommands.react"), {
						commandConfigs: S,
						children: j.jsx(b("BaseTextInput.react"), {
							"aria-autocomplete": "none",
							"aria-controls": A ? G : void 0,
							"aria-describedby": f,
							"aria-expanded": A,
							"aria-invalid": x === "ERROR",
							disabled: l,
							id: g,
							onBlur: s,
							onClick: K,
							onFocus: u,
							onValueChange: H,
							placeholder: c ? v : void 0,
							ref: C,
							role: "combobox",
							suppressFocusRing: !0,
							testid: void 0,
							value: y,
							xstyle: [k.input, l && k.disabled]
						})
					}), A && j.jsx(b("BaseContextualLayer.react"), {
						align: "start",
						contextRef: a,
						position: "below",
						ref: U,
						children: j.jsx(b("CometHideLayerOnEscape.react"), {
							onHide: L,
							children: j.jsx(b("FocusRegion.react").FocusRegion, {
								autoRestoreFocus: !0,
								containFocusQuery: b("focusScopeQueries").tabbableScopeQuery,
								children: j.jsx(b("FocusWithinHandler.react"), {
									onFocusChange: E,
									children: j.jsx(b("CometPopover.react"), {
										id: G,
										label: h._("Calendar"),
										children: j.jsx("div", {
											className: (i || (i = b("stylex")))(k.calendar),
											children: j.jsx(b("CometFormCalendarPager.react"), {
												constraints: d,
												initialCalendarDate: q,
												onSelected: P,
												ref: D,
												selectedDates: e != null ? [e] : []
											})
										})
									})
								})
							})
						})
					})]
				})
			}
		})
	}
	c = j.memo(a);
	e.exports = c
}), null);