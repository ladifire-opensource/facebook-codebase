__d("CometTopNavTab.react", ["fbt", "CometErrorBoundary.react", "CometHomeProductBadgedNavigationLogger", "CometPlaceholder.react", "CometPressable.react", "CometRelay", "CometRouteMapper", "CometRouteMatch", "CometTooltip.react", "HiddenSubtreePassiveContext", "QE2Logger", "React", "TetraText.react", "WebSession", "getTopMostRoute", "logCometWatchTopLevelEvent", "qex", "requireDeferred", "stylex", "unrecoverableViolation", "useAppShellCombinedTracePolicy", "useCometRoute", "useCometRouterState", "useShouldPrefetchQueriesBasedOnLastUsedTimestamp"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = b("requireDeferred")("CometRecordProductUsageMutation"),
		k = b("requireDeferred")("CometTopnavItemClickFalcoEvent"),
		l = b("requireDeferred")("CometTopnavItemImpressionFalcoEvent"),
		m = {
			badgeContainer: {
				position: "pmk7jnqg",
				start: "h5g66v2i",
				top: "nezaghv5"
			},
			badgeContainerBottom: {
				position: "pmk7jnqg",
				start: "dnzpfbms",
				top: "daor5o6w"
			},
			badgeContainerWithLabels: {
				position: "pmk7jnqg",
				start: "re5koujm",
				top: "nezaghv5"
			},
			hideMore: {
				display: "mkhogb32"
			},
			iconContainer: {
				position: "l9j0dhe7"
			},
			iconContainerLabels: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				flexDirection: "cbu4d94t"
			},
			labelWrapper: {
				display: "j83agx80",
				justifyContent: "taijpn5t",
				paddingTop: "cxgpxx05",
				width: "k4urcfbm"
			},
			link: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				height: "m7zwrmfr",
				justifyContent: "taijpn5t",
				position: "l9j0dhe7",
				width: "k4urcfbm"
			},
			linkOverlayPressed: {
				backgroundColor: "k19f6yf2"
			},
			linkUnderline: {
				borderBottomColor: "ooq845xs",
				borderBottomStyle: "s44p3ltw",
				borderBottomWidth: "b2mspmbn",
				borderTopEndRadius: "akjuzmll",
				borderTopStartRadius: "bub6lnnc",
				bottom: "i09qtzwb",
				end: "lthxh50u",
				position: "pmk7jnqg",
				start: "tkxwya3v",
				transform: "b5ifovcx",
				transformOrigin: "tt24zdws",
				transitionDuration: "ms05siws",
				transitionProperty: "flx89l3n",
				transitionTimingFunction: "b7h9ocf4"
			},
			linkUnderlineSelected: {
				transform: "jav28p83"
			},
			linkWrapper: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				height: "byvelhso",
				position: "l9j0dhe7"
			},
			moreTab: {
				"@media (min-width: 1100px)": {
					display: "k5e9hw6w"
				}
			},
			tab: {
				flexGrow: "buofh1pr",
				maxWidth: "to382e16",
				minWidth: "o5zgeu5y"
			},
			tab500: {
				maxWidth: "acodgwtc"
			},
			tab584: {
				maxWidth: "qv5dp139"
			},
			tabHiddenAtLargeViewport: {
				"@media (max-width: 1099px)": {
					display: "bx45vsiw"
				}
			},
			tabHiddenAtSmallViewport: {
				"@media (max-width: 700px)": {
					display: "hw7htvoc"
				}
			},
			tabResponsive: {
				"@media (min-width: 1100px) and (max-height: 789px), (min-width: 1100px) and (max-width: 1379px)": {
					maxWidth: "jrc8bbd0"
				},
				"@media (max-width: 1099px)": {
					maxWidth: "dawyy4b1"
				}
			},
			tabSpacing: {
				marginStart: "h676nmdw"
			},
			tabStyles1: {
				"@media (max-width: 999px)": {
					display: "lq0a8jme"
				}
			},
			tabStyles2: {
				"@media (max-width: 899px)": {
					display: "hlyrhctz"
				}
			},
			tabStyles3: {
				"@media (max-width: 799px)": {
					display: "sybrdicc"
				}
			},
			tabStyles4: {
				"@media (max-width: 699px)": {
					display: "hqaqkjpe"
				}
			},
			tabStyles5: {
				"@media (max-width: 599px)": {
					display: "bbtpyesa"
				}
			}
		},
		n = new Set(["home", "watch", "marketplace", "groups", "gaming"]);
	f = (d = b("qex")._("1493007")) != null ? d : "red_numbered_badge";
	var o = f === "blue_badge" || f === "red_bottom_badge",
		p = 9,
		q = function(a) {
			var c = a.badgeUpdate,
				d = a.badgeValue,
				e = a.navItemId,
				f = a.navItemName,
				g = a.position,
				h = a.selected;
			a = a.source;
			return {
				bt: "number",
				bu: (c = c) != null ? c : !1,
				bv: d,
				nii: e,
				nin: f,
				nip: (c = g) != null ? c : -1,
				nit: "tab",
				s: a,
				sel: h,
				si: b("WebSession").getId()
			}
		};

	function a(a) {
		var c = a.hideSelected,
			d = a.position,
			e = a.tabKey,
			f = a.url,
			g = b("useCometRouterState")(),
			h = b("useCometRoute")(f),
			j = i.useContext(b("HiddenSubtreePassiveContext")),
			k = i.useRef(!1),
			m = i.useRef(null),
			n = b("useAppShellCombinedTracePolicy")(),
			o = i.useState(0),
			p = o[0];
		o = o[1];
		if (f == null) throw b("unrecoverableViolation")("Must provide a URL to CometTopNavTab", "comet_infra");
		var s = g != null ? b("getTopMostRoute")(g) : null;
		g = g != null && (g == null ? void 0 : g.main.route.tabKey) === e;
		var t = s != null && (h != null ? b("CometRouteMatch").MatchFunctions.routeMatchFunction(h, s) : b("CometRouteMatch").MatchFunctions.urlMatchFunction(f, s));
		h = g && c !== !0;
		var u = i.useCallback(function(a) {
				var c = b("CometRouteMapper").getRoute(f);
				c = c == null ? void 0 : c.productAttributionId;
				return q({
					badgeUpdate: a,
					badgeValue: String(p),
					navItemId: c,
					navItemName: e,
					position: d,
					selected: t,
					source: n
				})
			}, [f, p, e, d, t, n]),
			v = i.useRef(u);
		i.useEffect(function() {
			v.current = u
		});
		s = i.useCallback(function() {
			return v.current()
		}, []);
		var w = i.useCallback(function(a, b) {
				if (a) return;
				l.onReady(function(a) {
					a.log(function() {
						return u(b)
					})
				})
			}, [u]),
			x = i.useRef(p);
		i.useEffect(function() {
			x.current !== p && w(k.current, !0), x.current = p
		}, [w, p]);
		i.useEffect(function() {
			var a = b("WebSession").getId();
			!k.current && a !== m.current && (m.current = a, w(!1));
			var c = j.subscribeToChanges(function(a) {
				k.current = a.hiddenOrBackgrounded_FIXME
			});
			return function() {
				return c.remove()
			}
		}, [w, j]);
		g = a.pendingTabKey;
		c = babelHelpers.objectWithoutPropertiesLoose(a, ["pendingTabKey"]);
		return i.jsx(r, babelHelpers["extends"]({}, c, {
			badgeCount: p,
			getLoggingDataForPress: s,
			isActiveTab: h,
			isPendingTab: g === e,
			selected: t,
			setBadgeCount: o
		}))
	}
	var r = i.memo(c);

	function c(a) {
		var c = a.activeIcon,
			d = a.appID,
			e = a.badge,
			f = a.badgeCount,
			l = a.customIcon,
			q = a.getLoggingDataForPress,
			r = a.icon,
			t = a.isActiveTab,
			u = a.isBadgeHidden,
			v = a.isPendingTab,
			w = a.label,
			x = a.lastUsedTimestamp,
			y = a.passthroughProps,
			z = a.position,
			A = a.prefetchQueriesEligible,
			B = a.preload,
			C = a.preventLocalNavigation,
			D = C === void 0 ? !1 : C;
		C = a.responsiveStyle;
		var E = a.selected,
			F = a.setBadgeCount,
			G = a.setIsPendingTab,
			H = a.tabKey,
			I = a.testid;
		I = a.url;
		var J = b("CometRelay").useRelayEnvironment();
		A = b("useShouldPrefetchQueriesBasedOnLastUsedTimestamp")(A, x);
		x = function() {
			a.onPress && a.onPress(), D || G(!0, H), k.onReady(function(a) {
				a.log(function() {
					return q()
				})
			}), j.onReady(function(a) {
				d != null && a.updateProductUsage(J, d)
			})
		};
		var K = b("qex")._("1694462") === !0,
			L = null;
		if (l != null) {
			l = l;
			L = i.jsx(l, {
				isActive: t
			})
		} else if (r != null && c != null) {
			l = t ? c : r;
			c = e;
			L = i.jsxs(i.Fragment, {
				children: [i.jsxs("span", {
					className: (h || (h = b("stylex")))([m.iconContainer, K && m.iconContainerLabels]),
					children: [i.jsx(l, {
						color: t ? "active-tab" : "inactive-tab",
						size: K ? 24 : 28
					}), c != null && i.jsx(b("CometErrorBoundary.react"), {
						children: i.jsx(b("CometPlaceholder.react"), {
							fallback: i.jsx("span", {}),
							children: i.jsx("span", {
								className: (h || (h = b("stylex")))(!o && !K && m.badgeContainer, !o && K && m.badgeContainerWithLabels, o && m.badgeContainerBottom),
								children: i.jsx(c, {
									isBadgeHidden: u,
									isTab: !0,
									overflow: p,
									setBadgeCount: F
								})
							})
						})
					})]
				}), K ? i.jsx("div", {
					className: (h || (h = b("stylex")))(m.labelWrapper),
					children: i.jsx(b("TetraText.react"), {
						color: t ? "highlight" : "secondary",
						numberOfLines: 1,
						type: "meta2",
						children: w
					})
				}) : null]
			})
		}
		r = function() {
			G(!1, H), s(H, f, d)
		};
		e = function() {
			!E && n.has(H) && b("QE2Logger").logExposureForUser("comet_nav_tabs_preloading")
		};
		l = f > 0 ? g._({
			"*": "{label}, {number} m\u1ee5c c\u1eadp nh\u1eadt",
			"_1": "{label}, 1 m\u1ee5c c\u1eadp nh\u1eadt"
		}, [g._param("label", w), g._plural(f, "number")]) : w;
		u = i.jsxs("div", {
			className: (h || (h = b("stylex")))(m.linkWrapper),
			children: [i.jsx("div", {
				className: h(m.linkUnderline, t && m.linkUnderlineSelected)
			}), i.jsx(b("CometPressable.react"), {
				"aria-current": t ? "page" : void 0,
				"aria-label": l,
				display: "inline",
				linkProps: {
					onNavigate: r,
					passthroughProps: y,
					prefetchQueries: !E && A,
					preload: B,
					preventLocalNavigation: D,
					productAttribution: {
						tap_point: "tap_tabbar"
					},
					traceParams: {
						navigation_source: "tab_click"
					},
					url: (c = I) != null ? c : "#"
				},
				onHoverIn: e,
				onPress: x,
				overlayDisabled: E,
				overlayHoveredStyle: v ? m.linkOverlayPressed : void 0,
				overlayRadius: 8,
				testid: void 0,
				xstyle: m.link,
				children: L
			})]
		});
		F = C === !0 ? [z != null && z < 4 && m.tabHiddenAtSmallViewport, z != null && z === 4 && m.tabHiddenAtLargeViewport, H === "more" && m.moreTab] : [z != null && z === 0 && m.tabStyles1, z != null && z === 1 && m.tabStyles2, z != null && z === 2 && m.tabStyles3, z != null && z === 3 && m.tabStyles4, z != null && z === 4 && m.tabStyles5, H === "more" && m.hideMore];
		t = null;
		switch (b("qex")._("1570039")) {
			case "500":
				t = m.tab500;
				break;
			case "584":
				t = m.tab584;
				break
		}
		return i.jsx("li", {
			className: h(m.tab, m.tabResponsive, t, z !== 0 && m.tabSpacing, F),
			children: K ? u : i.jsx(b("CometTooltip.react"), {
				align: "middle",
				tooltip: w,
				children: u
			})
		})
	}

	function s(a, c, d) {
		d != null && c > 0 && b("CometHomeProductBadgedNavigationLogger").markerStartAndAnnotateWithProductID(d);
		switch (a) {
			case "watch":
				b("logCometWatchTopLevelEvent")("tab", c);
				break;
			default:
				break
		}
	}
}), null);