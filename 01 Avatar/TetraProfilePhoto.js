__d("TetraProfilePhoto.react", [
	"BaseImage_DEPRECATED.react", 
	"BaseSvgImage.react", 
	"CometErrorBoundary.react", 
	"CometLoadingAnimation.react", 
	"CometPlaceholder.react", 
	"CometPressable.react", 
	"CometPressableChildrenWithOverlay.react", 
	"CometPressableOverlay.react", 
	"CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react", 
	"CometSSRSuspendOnServer.react", 
	"CometTrackingNodeProvider.react", 
	"CometVisualCompletionAttributes", 
	"React", 
	"TetraProfilePhotoAvailabilityBadge.react", 
	"TetraProfilePhotoLastActiveTimeBadge.react", 
	"TetraProfilePhotoNotificationBadge.react", 
	"TetraProfileVideoSection.react", 
	"profilePhotoUtils", 
	"stylex", "useCometUniqueID", "useSetAttributeRef"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			activityBadge: {
				borderStyle: "ow4ym5g4",
				borderWidth: "auili1gw",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
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
				position: "l9j0dhe7",
				zIndex: "du4w35lb",
				alignItems: "bp9cbjyn",
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				justifyContent: "taijpn5t",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs"
			},
			activityIcon8: {
				height: "i4qgphn6",
				width: "gab7stmx"
			},
			activityIcon10: {
				height: "p1ueia1e",
				paddingTop: "fdg1wqfs",
				paddingEnd: "jxrgncrl",
				paddingBottom: "ae35evdt",
				paddingStart: "qnrpqo6b",
				width: "pgctjfs5"
			},
			activityIcon16: {
				height: "csbtt2a9",
				paddingTop: "fdg1wqfs",
				paddingEnd: "jxrgncrl",
				paddingBottom: "ae35evdt",
				paddingStart: "qnrpqo6b",
				width: "brl5nffy"
			},
			badge: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				position: "pmk7jnqg",
				zIndex: "kavbgo14"
			},
			badgeWithBorder: {
				borderTopColor: "ojftbsqr",
				borderEndColor: "gue7h8pr",
				borderBottomColor: "fqvp6vww",
				borderStartColor: "saceo20m",
				borderTopStyle: "goun2846",
				borderEndStyle: "ccm00jje",
				borderBottomStyle: "s44p3ltw",
				borderStartStyle: "mk2mc5f4"
			},
			badgeWithLastActiveTime: {
				bottom: "i09qtzwb",
				display: "j83agx80",
				end: "n7fi1qx3",
				justifyContent: "bkfpd7mw",
				start: "j9ispegn"
			},
			badgeWithShadow: {
				boxShadow: "jcrsxscb"
			},
			insetSVG: {
				fill: "mlqo0dh0",
				stroke: "georvekb",
				strokeWidth: "s6kb5r3f"
			},
			photo: {
				verticalAlign: "pzggbiyp"
			},
			photoCircle: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv"
			},
			photoRoundedRect: {
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi"
			},
			pressable: {
				color: "oo9gr5id",
				display: "q9uorilb"
			},
			pressed: {
				transform: "mtfd0dr2"
			},
			storyRingBlue: {
				stroke: "s06bi357"
			},
			storyRingGray: {
				stroke: "m74jz5tg"
			},
			storyRingRed: {
				stroke: "dusrvvrf"
			},
			storyRingSize2: {
				strokeWidth: "s6kb5r3f"
			},
			storyRingSize3: {
				strokeWidth: "ggutxrqb"
			},
			storyRingSize4: {
				strokeWidth: "gjkn0k4t"
			},
			svgOverlay: {
				fill: "jchep4xs"
			},
			videoContainer: {
				WebkitMaskImage: "ihfvnk0y",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs"
			},
			videoContainerRectRounded: {
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi"
			},
			videoContainerRounded: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv"
			},
			wrapper: {
				display: "q9uorilb",
				position: "l9j0dhe7",
				verticalAlign: "pzggbiyp",
				zIndex: "du4w35lb"
			}
		};

	function a(a, c) {
		var d = a.addOn,
			e = a.addOnTopEnd,
			f = a.alt,
			k = a.children,
			l = a.isOverlapped,
			m = l === void 0 ? !1 : l,
			n = a.linkProps,
			o = a.onHoverIn,
			p = a.onHoverOut,
			q = a.onPress,
			r = a.onPressIn;
		l = a.overlayDisabled;
		l = l === void 0 ? !1 : l;
		a.preview;
		var s = a.profileVideo,
			t = a.shape,
			u = t === void 0 ? "circle" : t,
			v = a.size,
			w = a.source;
		t = a.storyStatus;
		var x = t === void 0 ? "none" : t;
		t = a.testid;
		t = a.testOnly_pressed;
		a.testOnly_previewDelay;
		var y = babelHelpers.objectWithoutPropertiesLoose(a, ["addOn", "addOnTopEnd", "alt", "children", "isOverlapped", "linkProps", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "overlayDisabled", "preview", "profileVideo", "shape", "size", "source", "storyStatus", "testid", "testOnly_pressed", "testOnly_previewDelay"]),
			z = b("useCometUniqueID")(),
			A = b("useSetAttributeRef")("id", z),
			B = "url(#" + z + ")",
			C = b("useSetAttributeRef")("mask", B),
			D = function (a, c) {
				var l, t = a.overlay;
				a = a.pressed;
				var D = x !== "none" ? b("profilePhotoUtils").getStoryRingSize(v) : 0,
					E = b("profilePhotoUtils").getBadgePosition(v / 2, !0),
					F = b("profilePhotoUtils").getBadgeSizeAndStrokeWidth(v, d == null ? void 0 : d.type),
					G = F[0];
				F = F[1];
				var H = s != null ? {
						borderWidth: F
					} : {},
					I = (d == null ? void 0 : d.type) !== "lastActiveTimeBadge" ? b("profilePhotoUtils").getBadgePosition(v / 2, !1) : {};
				H = d != null ? h.jsx("div", babelHelpers["extends"]({
					className: (g || (g = b("stylex")))(i.badge, d.type === "lastActiveTimeBadge" ? i.badgeWithLastActiveTime : null, v === 60 && d.type === "activityBadge" ? i.badgeWithShadow : null, d.type === "activityBadge" && (s != null || d.withBorder) ? i.badgeWithBorder : null)
				}, b("CometVisualCompletionAttributes").IGNORE, {
					style: babelHelpers["extends"]({}, I, H),
					children: h.jsx(j, {
						addOn: d,
						pressed: a,
						size: v
					})
				})) : null;
				var J = e != null ? h.jsx("div", {
						className: (g || (g = b("stylex")))(i.badge),
						style: babelHelpers["extends"]({}, E),
						children: h.jsx(b("TetraProfilePhotoNotificationBadge.react"), {
							number: e.number
						})
					}) : null,
					K = typeof w.uri === "string" ? h.jsx(b("BaseSvgImage.react"), {
						src: w.uri,
						style: {
							height: v - D * 4,
							width: v - D * 4
						},
						x: 2 * D,
						y: 2 * D
					}) : h.jsx(b("BaseImage_DEPRECATED.react"), {
						alt: f,
						className: (g || (g = b("stylex")))(i.photo, u === "circle" ? i.photoCircle : null, u === "roundedRect" ? i.photoRoundedRect : null),
						height: v - 4 * D,
						src: w.uri,
						width: v - 4 * D
					});
				G = typeof w.uri === "string" ? h.jsxs("svg", babelHelpers["extends"]({
					"aria-label": f,
					className: (g || (g = b("stylex")))(i.photo)
				}, b("CometVisualCompletionAttributes").IGNORE_DYNAMIC, {
					role: f != null ? "img" : "none",
					style: {
						height: v,
						width: v
					},
					children: [h.jsxs("mask", {
						id: z,
						ref: A,
						suppressHydrationWarning: !0,
						children: [u === "circle" ? h.jsx("circle", {
							cx: v / 2,
							cy: v / 2,
							fill: "white",
							r: v / 2
						}) : h.jsx("rect", {
							cy: v / 2,
							fill: "white",
							height: v,
							rx: u === "square" ? 0 : 8,
							ry: u === "square" ? 0 : 8,
							width: v,
							x: 0,
							y: 0
						}), h.jsx(b("CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react"), {
							useSuspenseDirectlyForSVG: !0,
							children: H != null && (d == null ? void 0 : d.type) !== "trigger" && (d == null ? void 0 : d.type) !== "lastActiveTimeBadge" && (d == null ? void 0 : d.type) !== "notificationBadge" && (d == null ? void 0 : d.backgroundColor) !== "none" && h.jsx("circle", babelHelpers["extends"]({
								cx: (l = I.left) != null ? l : v - ((l = I.right) != null ? l : 0),
								cy: (l = I.top) != null ? l : v - ((l = I.bottom) != null ? l : 0)
							}, b("CometVisualCompletionAttributes").IGNORE, {
								fill: "black",
								r: Math.max((d == null ? void 0 : d.type) === "activityBadge" ? 8 : 0, G / 2 + F)
							}))
						}), J != null && e != null && e.type === "notificationBadge" && h.jsx("rect", {
							height: 22,
							rx: 11,
							ry: 11,
							width: e.number <= 9 ? 22 : e.number <= 99 ? 33 : 44,
							x: E.left != null ? E.left - (e.number <= 9 ? 11 : e.number <= 99 ? 22 : 33) : v - ((I = E.right) != null ? I : 0) - 11,
							y: E.top != null ? E.top - 11 : v - ((l = E.bottom) != null ? l : 0) - 11
						}), x === "uploading" && (v === 36 || v === 60) ? h.jsx("circle", {
							cx: v / 2,
							cy: v / 2,
							fill: "transparent",
							r: v / 2 - 1 * D,
							stroke: "black",
							strokeWidth: D * 2
						}) : x !== "none" && D > 0 && h.jsx("circle", {
							cx: v / 2,
							cy: v / 2,
							fill: "transparent",
							r: v / 2 - 1.5 * D,
							stroke: "black",
							strokeWidth: D
						}), m && h.jsx("circle", {
							cx: -v / 2 + 4,
							cy: v / 2,
							fill: "black",
							r: v / 2 + 2
						})]
					}), h.jsxs("g", {
						mask: B,
						ref: C,
						suppressHydrationWarning: !0,
						children: [s != null ? h.jsx(b("CometErrorBoundary.react"), {
							fallback: function () {
								return K
							},
							children: h.jsx(b("CometPlaceholder.react"), {
								fallback: K,
								children: h.jsx(b("CometSSRSuspendOnServer.react"), {
									children: h.jsx("foreignObject", {
										height: "100%",
										width: "100%",
										x: 2 * D,
										y: 2 * D,
										children: h.jsx("div", {
											className: (g || (g = b("stylex")))(i.videoContainer, u === "roundedRect" ? i.videoContainerRectRounded : null, u === "circle" ? i.videoContainerRounded : null),
											style: {
												height: v - D * 4,
												width: v - D * 4
											},
											children: h.jsx(b("TetraProfileVideoSection.react"), babelHelpers["extends"]({
												linkProps: n,
												onHoverIn: o,
												onHoverOut: p,
												onPress: q,
												onPressIn: r,
												profileVideo: s,
												size: v - D * 4,
												thumbnailUri: w.uri
											}, y))
										})
									})
								})
							})
						}) : K, u === "circle" ? h.jsx("circle", {
							className: (g || (g = b("stylex")))(i.insetSVG, a && i.svgOverlay),
							cx: v / 2,
							cy: v / 2,
							r: v / 2
						}) : h.jsx("rect", {
							className: (g || (g = b("stylex")))(i.insetSVG, a && i.svgOverlay),
							cy: v / 2,
							fill: "white",
							height: v,
							rx: 8,
							ry: 8,
							width: v,
							x: 0,
							y: 0
						}), x === "uploading" && (v === 36 || v === 60) ? null : x !== "none" && D > 0 && h.jsx("circle", {
							className: (g || (g = b("stylex")))(x === "unseen" && i.storyRingBlue, x === "seen" && i.storyRingGray, x === "live" && i.storyRingRed, D === 4 && i.storyRingSize4, D === 3 && i.storyRingSize3, D === 2 && i.storyRingSize2),
							cx: v / 2,
							cy: v / 2,
							fill: "transparent",
							r: v / 2 - D / 2,
							stroke: "var(--accent)",
							strokeWidth: D
						})]
					}), x === "uploading" && (v === 36 || v === 60) && h.jsx("g", {
						style: {
							transform: "scale(" + (v - Math.floor(v / 30)) / v + ")"
						},
						children: h.jsx(b("CometLoadingAnimation.react"), {
							size: v
						})
					})]
				})) : K;
				return h.jsxs("div", {
					className: (g || (g = b("stylex")))(i.wrapper),
					ref: c,
					children: [G, k, t, h.jsx(b("CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react"), {
						children: H
					}), J]
				})
			};
		return !q && !n && t !== !0 ? D({
			pressed: !1
		}, c) : h.jsx(b("CometTrackingNodeProvider.react"), {
			trackingNode: 3,
			children: h.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, y, {
				linkProps: n,
				onHoverIn: o,
				onHoverOut: p,
				onPress: q,
				onPressIn: r,
				overlayDisabled: l,
				overlayRadius: u === "circle" ? "50%" : u === "roundedRect" ? 8 : 0,
				ref: c,
				testOnly_pressed: t,
				testid: void 0,
				xstyle: function (a) {
					a = a.pressed;
					return [i.pressable, a && i.pressed]
				},
				children: function (a) {
					var b = a.overlay;
					a = a.pressed;
					return D({
						overlay: b,
						pressed: a
					}, null)
				}
			}))
		})
	}

	function j(a) {
		var c = a.addOn,
			d = a.pressed;
		a = a.size;
		switch (c.type) {
			case "availabilityBadge":
				a = b("profilePhotoUtils").getBadgeSizeAndStrokeWidth(a, c == null ? void 0 : c.type);
				a = a[0];
				return h.jsx(b("TetraProfilePhotoAvailabilityBadge.react"), {
					pressed: d,
					size: a
				});
			case "lastActiveTimeBadge":
				return h.jsx(b("TetraProfilePhotoLastActiveTimeBadge.react"), {
					border: c.border,
					pressed: d,
					time: c.time
				});
			case "activityBadge":
				return h.jsx(k, {
					backgroundColor: c.backgroundColor,
					icon: c.icon,
					pressed: d,
					size: c.size
				});
			case "trigger":
				return c.icon;
			default:
				return null
		}
	}

	function k(a) {
		var c = a.backgroundColor;
		c = c === void 0 ? "white" : c;
		var d = a.icon,
			e = a.pressed;
		a = a.size;
		return h.jsx(b("CometPressableChildrenWithOverlay.react"), {
			overlay: h.jsx(b("CometPressableOverlay.react"), {
				offset: 0,
				pressed: e,
				radius: "50%"
			}),
			children: h.jsx("div", {
				className: (g || (g = b("stylex")))(i.activityBadge, a === 8 ? i.activityIcon8 : null, a === 10 ? i.activityIcon10 : null, a === 16 ? i.activityIcon16 : null),
				style: {
					backgroundColor: c
				},
				children: d
			})
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);