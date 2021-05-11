__d("CometFormCalendarDay.react", ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", 
	"CometPressable.react", "CometPressableOverlay.react", "React", "TetraText.react", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = {
			cell: {
				alignItems: "bp9cbjyn",
				cursor: "bnpdmtie",
				display: "j83agx80",
				flexBasis: "rj1gh0hx",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr",
				height: "orb7ywq3",
				justifyContent: "taijpn5t"
			},
			day: {
				alignItems: "bp9cbjyn",
				boxSizing: "rq0escxv",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr",
				justifyContent: "taijpn5t",
				width: "la0tivve"
			},
			disabled: {
				cursor: "rj84mg9z"
			},
			hidden: {
				visibility: "kr9hpln1"
			},
			highlighted: {
				backgroundColor: "b8zhkkm9"
			},
			large: {
				paddingBottom: "sj5x9vvc",
				paddingTop: "cxgpxx05"
			},
			placeholder: {
				backgroundColor: "qsy8amke"
			},
			roundedRectBorder: {
				borderTopStartRadius: "beltcj47",
				borderTopEndRadius: "p86d2i9g",
				borderBottomEndRadius: "aot14ch1",
				borderBottomStartRadius: "kzx2olss"
			},
			selected: {
				backgroundColor: "is6700om"
			},
			small: {
				paddingBottom: "e5nlhep0",
				paddingTop: "ecm0bbzt"
			}
		},
		k = g._("Select Date"),
		l = g._("Previous Day"),
		m = g._("Next Day"),
		n = g._("One week earlier"),
		o = g._("One week later"),
		p = g._("End of the previous month"),
		q = g._("End of the month"),
		r = g._("One month previous"),
		s = g._("One month ahead");

	function a(a, c) {
		var d = a.date,
			e = a.disabled,
			f = a.focusable;
		f = f === void 0 ? !1 : f;
		var g = a.hidden;
		g = g === void 0 ? !1 : g;
		var t = a.highlighted;
		t = t === void 0 ? !1 : t;
		var u = a.highlightStyle;
		u = u === void 0 ? "rect" : u;
		var v = a.monthID,
			w = a.moveDayCursorBy,
			x = a.onClick,
			y = a.onFocus,
			z = a.onMouseEnter,
			A = a.placeholder,
			B = A === void 0 ? !1 : A,
			C = a.selected;
		A = a.size;
		a = A === void 0 ? "small" : A;
		var D = i.useMemo(function() {
			var a = new Date();
			return a.getFullYear() === d.getYear() && a.getMonth() === d.getMonth() && a.getDate() === d.getDate()
		}, [d]);
		return i.jsx("div", {
			className: (h || (h = b("stylex")))(j.cell, C ? j.selected : t ? j.highlighted : B ? j.placeholder : null, g && j.hidden, e && j.disabled, u === "roundedRect" && j.roundedRectBorder),
			children: i.jsx(b("CometComponentWithKeyCommands.react"), {
				commandConfigs: [{
					command: {
						key: b("CometKeys").ENTER
					},
					description: k,
					handler: function() {
						return x && x()
					}
				}, {
					command: {
						key: b("CometKeys").SPACE
					},
					description: k,
					handler: function() {
						return x && x()
					}
				}, {
					command: {
						key: b("CometKeys").LEFT
					},
					description: l,
					handler: function() {
						return w(-1)
					}
				}, {
					command: {
						key: b("CometKeys").RIGHT
					},
					description: m,
					handler: function() {
						return w(1)
					}
				}, {
					command: {
						key: b("CometKeys").UP
					},
					description: n,
					handler: function() {
						return w(-7)
					}
				}, {
					command: {
						key: b("CometKeys").DOWN
					},
					description: o,
					handler: function() {
						return w(7)
					}
				}, {
					command: {
						key: b("CometKeys").HOME
					},
					description: p,
					handler: function() {
						return w(-((d.getDayOfWeekFromMonday() + 1) % 7))
					}
				}, {
					command: {
						key: b("CometKeys").END
					},
					description: q,
					handler: function() {
						return w(6 - (d.getDayOfWeekFromMonday() + 1) % 7)
					}
				}, {
					command: {
						key: b("CometKeys").PAGE_UP
					},
					description: r,
					handler: function() {
						return w(-d.getNumDaysInPrevMonth())
					}
				}, {
					command: {
						key: b("CometKeys").PAGE_UP,
						shift: !0
					},
					description: r,
					handler: function() {
						return w(-d.getNumDaysInThisYear())
					}
				}, {
					command: {
						alt: !0,
						key: b("CometKeys").PAGE_UP
					},
					description: r,
					handler: function() {
						return w(-d.getNumDaysInThisYear())
					}
				}, {
					command: {
						key: b("CometKeys").PAGE_DOWN
					},
					description: s,
					handler: function() {
						return w(d.getNumDaysInThisMonth())
					}
				}, {
					command: {
						key: b("CometKeys").PAGE_DOWN,
						shift: !0
					},
					description: s,
					handler: function() {
						return w(d.getNumDaysInThisYear())
					}
				}, {
					command: {
						alt: !0,
						key: b("CometKeys").PAGE_DOWN
					},
					description: s,
					handler: function() {
						return w(d.getNumDaysInThisYear())
					}
				}],
				children: i.jsx(b("CometPressable.react"), {
					"aria-describedby": v,
					"aria-selected": C,
					disabled: e,
					focusable: f,
					onFocusIn: y,
					onHoverIn: z,
					onPress: x,
					overlayDisabled: !0,
					ref: c,
					role: "gridcell",
					testid: void 0,
					xstyle: [j.day, e && j.disabled, a === "large" && j.large, a === "small" && j.small],
					children: function(a) {
						var c = a.focusVisible,
							f = a.hovered;
						a = a.pressed;
						return i.jsxs(i.Fragment, {
							children: [i.jsx(b("TetraText.react"), babelHelpers["extends"]({
								color: C ? "white" : e ? "disabled" : B ? "secondary" : "primary"
							}, D ? {
								type: "headlineEmphasized4"
							} : {
								type: "body3"
							}, {
								children: d.getDate().toString()
							})), i.jsx(b("CometPressableOverlay.react"), {
								focusVisible: c,
								hovered: f,
								offset: 3,
								pressed: a,
								radius: "50%"
							})]
						})
					}
				})
			})
		})
	}
	c = i.memo(i.forwardRef(a));
	e.exports = c
}), null);