__d("TetraFacepileUnstyled.react", ["fbt", "ix", "BaseContainerQueryElement.react", "CometComponentWithKeyCommands.react", "CometKeys", "CometPressable.react", "CometTooltip.react", "FocusGroup.react", "ReactDOMComet", "TetraIcon.react", "TetraProfilePhoto.react", "TetraText.react", "fbicon", "focusScopeQueries", "react", "stylex", "useCometUniqueID", "useIntersectionObserver"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j, k = i || b("react");
	c = b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);
	var l = c[0],
		m = c[1],
		n = 4,
		o = 6,
		p = -4,
		q = {
			item: {
				position: "l9j0dhe7"
			},
			itemWithActivity: {
				marginStart: "ggphbty4"
			},
			itemWithSpacing: {
				marginStart: "kkf49tns"
			},
			items: {
				display: "j83agx80",
				flexDirection: "btwxx1t3",
				marginTop: "o7xrwllt",
				marginBottom: "quq7zyon",
				overflowX: "ni8dbmo4",
				paddingTop: "jktsbyx5",
				paddingBottom: "osnr6wyh",
				position: "l9j0dhe7"
			},
			overflow24: {
				height: "rgmg9uty",
				width: "b73ngqbp"
			},
			overflow32: {
				height: "k7cz35w2",
				width: "bsnbvmp4"
			},
			overflow40: {
				height: "qypqp5cg",
				width: "q676j6op"
			},
			overflow48: {
				height: "m7zwrmfr",
				width: "tmrshh9y"
			},
			overflowItem: {
				alignItems: "bp9cbjyn",
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				display: "j83agx80",
				flexShrink: "pfnyh3mw",
				justifyContent: "taijpn5t",
				pointerEvents: "oqq733wu"
			},
			overflowItemBg: {
				fill: "lw8b5zex"
			},
			overflowItemContainer: {
				bottom: "k01i5q8h",
				display: "j83agx80",
				end: "n7fi1qx3",
				flexDirection: "btwxx1t3",
				pointerEvents: "hzruof5a",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "c0p38np4"
			},
			overflowItemOverlay: {
				fill: "lw8b5zex",
				opacity: "b5wmifdl",
				transitionDuration: "c5ndavph",
				transitionProperty: "art1omkt",
				transitionTimingFunction: "ot9fgl3s"
			},
			overflowItemOverlayHovered: {
				fill: "geeicf24",
				opacity: "pedkr2u6",
				transitionDuration: "akwz6i9j"
			},
			overflowItemOverlayPressed: {
				fill: "jchep4xs",
				opacity: "pedkr2u6",
				transitionDuration: "akwz6i9j"
			},
			overflowItemSVG: {
				bottom: "i09qtzwb",
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4"
			},
			overlappingItem: {
				marginStart: "rl04r1d5"
			},
			pressableItem: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				display: "a8c37x1j"
			},
			root: {
				display: "j83agx80",
				flexDirection: "cbu4d94t"
			},
			rootInline: {
				alignItems: "bp9cbjyn",
				flexDirection: "btwxx1t3"
			},
			text: {
				paddingTop: "pybr56ya"
			},
			textInline: {
				paddingStart: "b3onmgus",
				paddingTop: "jb3vyjys"
			}
		};

	function a(a) {
		a.align;
		var c = a.items,
			d = a.isTextInline;
		d = d === void 0 ? !1 : d;
		var e = a.count,
			f = e === void 0 ? c.length : e;
		e = a.ellipsisTooltip;
		var h = a.linkProps,
			i = a.onPress,
			u = a.overlapping,
			v = u === void 0 ? !1 : u,
			w = a.size;
		u = a.testID;
		u = a.testOnly_pressed;
		var x = u === void 0 ? !1 : u;
		u = a.text;
		a = c.some(function(a) {
			return a.addOn != null
		});
		var y = c.some(function(a) {
				return ((a = a.addOn) == null ? void 0 : a.type) === "activityBadge"
			}),
			z = v ? p : y ? o : n,
			A = Math.min(f, c.length, d ? 3 : Infinity),
			B = k.useRef(null),
			C = b("useCometUniqueID")(),
			D = [{
				command: {
					key: b("CometKeys").LEFT
				},
				description: g._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),
				handler: function() {}
			}, {
				command: {
					key: b("CometKeys").RIGHT
				},
				description: g._("M\u1ee5c ti\u1ebfp theo"),
				handler: function() {}
			}];
		a = k.jsxs("div", {
			className: (j || (j = b("stylex")))(q.items),
			ref: B,
			role: "row",
			children: [c.slice(0, A).map(function(a, c) {
				var d = a.containerComponent,
					e = a.linkProps,
					f = a.onPress,
					g = a.testOnly_pressed;
				a = babelHelpers.objectWithoutPropertiesLoose(a, ["containerComponent", "linkProps", "onPress", "testOnly_pressed"]);
				return k.jsxs(k.Fragment, {
					children: [k.jsx(b("BaseContainerQueryElement.react"), {
						breakpoint: (c + 1) * (w + z) - z,
						inverseToContainer: !0,
						maxWidth: "100%",
						minWidth: 0
					}), k.jsx(r, babelHelpers["extends"]({}, a, {
						Container: d,
						FocusItemComponent: m,
						divClassName: (j || (j = b("stylex")))(q.item, c > 0 && q.itemWithSpacing, c > 0 && y && q.itemWithActivity, c > 0 && v && q.overlappingItem),
						isOverlapped: v && c > 0,
						overlapping: v,
						parentRef: B,
						pressableProps: f || e ? {
							display: "inline",
							linkProps: e,
							onPress: f,
							overlayDisabled: v,
							overlayRadius: w / 2,
							testOnly_pressed: g,
							xstyle: q.pressableItem
						} : null,
						role: "cell",
						shape: "circle",
						size: w
					}))]
				}, c)
			}), !a && (i || h) && k.jsxs("div", {
				className: (j || (j = b("stylex")))(q.overflowItemContainer),
				children: [c.slice(0, Math.min(c.length, A < f ? A : f)).map(function(a, c) {
					return c === 0 && f > 1 ? null : k.jsx(b("BaseContainerQueryElement.react"), {
						breakpoint: (c + 1) * (w + z) - z,
						maxWidth: c === f - 1 ? "100%" : w + z,
						minWidth: 0
					}, "overflowPusher" + c)
				}), k.jsx(t, {
					FocusItemComponent: m,
					"aria-label": g._("Li\u00ean k\u1ebft \u0111\u1ec3 xem trang c\u00e1 nh\u00e2n c\u1ee7a m\u1ecdi ng\u01b0\u1eddi"),
					count: f,
					ellipsisTooltip: e,
					linkProps: h,
					onPress: i,
					overlayDisabled: !0,
					parentRef: B,
					size: w,
					spacing: z,
					testid: void 0,
					xstyle: [q.overflowItem, w === 24 && q.overflow24, w === 32 && q.overflow32, w === 40 && q.overflow40, w === 48 && q.overflow48],
					children: function(a) {
						var c = a.hovered;
						a = a.pressed;
						return k.jsxs(k.Fragment, {
							children: [k.jsxs("svg", {
								className: (j || (j = b("stylex")))(q.overflowItemSVG),
								height: w,
								viewBox: "0 0 " + w + " " + w,
								width: w,
								children: [v && A > 1 && k.jsxs("mask", {
									id: C,
									suppressHydrationWarning: !0,
									children: [k.jsx("circle", {
										cx: w / 2,
										cy: w / 2,
										fill: "white",
										r: w / 2
									}), k.jsx("circle", {
										cx: -w / 2 + 4,
										cy: w / 2,
										fill: "black",
										r: w / 2 + 2
									})]
								}), k.jsx("circle", babelHelpers["extends"]({
									className: j(q.overflowItemBg),
									cx: w / 2,
									cy: w / 2,
									r: w / 2,
									suppressHydrationWarning: !0
								}, v && A > 1 ? {
									mask: "url(#" + C + ")"
								} : null)), k.jsx("circle", babelHelpers["extends"]({
									className: j(q.overflowItemOverlay, c && q.overflowItemOverlayHovered, (a || x) && q.overflowItemOverlayPressed),
									cx: w / 2,
									cy: w / 2,
									r: w / 2,
									suppressHydrationWarning: !0
								}, v && A > 1 ? {
									mask: "url(#" + C + ")"
								} : null))]
							}), k.jsx(b("TetraIcon.react"), {
								color: "white",
								icon: s(w)
							})]
						})
					}
				})]
			})]
		});
		return k.jsxs("div", {
			className: j(q.root, d && q.rootInline),
			"data-testid": void 0,
			role: "grid",
			children: [k.jsx(b("CometComponentWithKeyCommands.react"), {
				commandConfigs: D,
				children: k.jsx(l, {
					orientation: "horizontal",
					tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
					wrap: !0,
					children: a
				})
			}), u != null ? k.jsx("div", {
				className: (j || (j = b("stylex")))(q.text, d && q.textInline),
				children: k.jsx(b("TetraText.react"), {
					color: "secondary",
					type: "body3",
					children: u
				})
			}) : null]
		})
	}

	function r(a) {
		var c = a.Container,
			d = a.FocusItemComponent,
			e = a.divClassName;
		a.overlapping;
		var f = a.parentRef,
			g = a.pressableProps;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["Container", "FocusItemComponent", "divClassName", "overlapping", "parentRef", "pressableProps"]);
		var h = k.useState(!1),
			i = h[0],
			j = h[1];
		h = k.useCallback(function(a) {
			var c = a.intersectionRatio;
			b("ReactDOMComet").flushSync(function() {
				j(c < .5)
			})
		}, []);
		h = b("useIntersectionObserver")(h, {
			root: function() {
				var a;
				return (a = f.current) != null ? a : null
			},
			threshold: .5
		});
		a = k.jsx(b("TetraProfilePhoto.react"), babelHelpers["extends"]({}, a, {
			overlayDisabled: !0
		}));
		g && (a = k.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, g, {
			disabled: i,
			role: "cell",
			children: a
		})));
		c && (a = k.jsx(c, {
			children: a
		}));
		return k.jsx("div", {
			className: e,
			ref: h,
			role: "cell",
			children: k.jsx(d, {
				disabled: i,
				children: a
			})
		})
	}

	function s(a) {
		switch (a) {
			case 32:
				return b("fbicon")._(h("484386"), 16);
			case 40:
			case 48:
				return b("fbicon")._(h("484388"), 24);
			default:
				return b("fbicon")._(h("484385"), 12)
		}
	}

	function t(a) {
		var c = a.FocusItemComponent;
		a.count;
		var d = a.ellipsisTooltip,
			e = a.parentRef,
			f = a.size,
			g = a.spacing;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["FocusItemComponent", "count", "ellipsisTooltip", "parentRef", "size", "spacing"]);
		var h = k.useState(!1),
			i = h[0],
			j = h[1];
		h = k.useState(null);
		var l = h[0],
			m = h[1];
		h = k.useCallback(function(a) {
			var c = a.intersectionRatio;
			b("ReactDOMComet").flushSync(function() {
				j(c < .5)
			})
		}, []);
		h = b("useIntersectionObserver")(h, {
			root: function() {
				var a;
				return (a = e.current) != null ? a : null
			},
			threshold: .5
		});
		var n = function(a) {
			if (!a) return;
			a = e.current;
			if (!a) return;
			a = a.getBoundingClientRect();
			a = a.width;
			a = Math.floor((a + g) / (f + g));
			m(a - 1)
		};
		a = k.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, a, {
			ref: h,
			role: "cell"
		}));
		d && (a = k.jsx(b("CometTooltip.react"), {
			align: "middle",
			onVisibilityChange: n,
			position: "below",
			tooltip: l != null ? d(l) : "",
			children: a
		}));
		return k.jsxs(c, {
			disabled: i,
			children: [" ", a, " "]
		})
	}
}), null);