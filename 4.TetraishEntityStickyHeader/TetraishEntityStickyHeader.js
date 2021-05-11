__d("TetraishEntityStickyHeader.react", ["BaseRow.react", 
	"BaseRowItem.react", 
	"CometEntityHeaderStickyBar.react", 
	"CometStickyHeader.react", "React", 
	"TetraishEntityHeaderResponsiveRow.react",
	 "TetraListCell.react", "stylex", 
	 "useResizeObserver"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			headerHiddenByDefault: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				height: "do00u71z",
				justifyContent: "bkfpd7mw"
			},
			headerHiddenByDefaultNotSticky: {
				pointerEvents: "hzruof5a",
				visibility: "kr9hpln1",
				zIndex: "enjifjd9"
			},
			headerHiddenByDefaultSticky: {
				position: "poy2od1o",
				width: "k4urcfbm"
			},
			row: {
				backgroundColor: "cddn0xzi",
				boxShadow: "dsne8k7f",
				flexShrink: "pfnyh3mw"
			}
		};

	function a(a) {
		var c = a.headline,
			d = a.headlineLinkProps,
			e = a.headlineOnPress,
			f = a.hiddenByDefault;
		f = f === void 0 ? !1 : f;
		var j = a.primaryContent,
			k = a.profilePhoto,
			l = a.profilePhotoShape,
			m = a.secondaryContent,
			n = a.url;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["headline", "headlineLinkProps", "headlineOnPress", "hiddenByDefault", "primaryContent", "profilePhoto", "profilePhotoShape", "secondaryContent", "url"]);
		var o = g.useState(!1),
			p = o[0],
			q = o[1];
		o = g.useRef();
		var r = g.useRef(),
			s = g.useState(0),
			t = s[0],
			u = s[1];
		s = b("useResizeObserver")(function (a) {
			t !== a.height && u(a.height)
		});
		var v = function (a) {
				q(a), r.current != null && r.current.setSticky(a)
			},
			w = g.useMemo(function () {
				return babelHelpers["extends"]({
					preventLocalNavigation: !0,
					url: n
				}, d)
			}, [d, n]);
		e = (e = e) != null ? e : i;
		return g.jsx(b("CometStickyHeader.react"), babelHelpers["extends"]({}, a, {
			onStickyChange: v,
			ref: o,
			topOffset: f ? t : 0,
			xstyle: [f && h.headerHiddenByDefault, f && (p ? h.headerHiddenByDefaultSticky : h.headerHiddenByDefaultNotSticky)],
			children: g.jsx(b("TetraishEntityHeaderResponsiveRow.react"), {
				ref: s,
				xstyle: h.row,
				children: g.jsxs(b("BaseRow.react"), {
					verticalAlign: "center",
					children: [g.jsx(b("BaseRowItem.react"), {
						expanding: !0,
						children: g.jsx(b("CometEntityHeaderStickyBar.react"), {
							primaryContent: j,
							ref: r,
							stickyContent: g.jsx(b("BaseRow.react"), {
								align: "start",
								children: g.jsx(b("BaseRowItem.react"), {
									children: g.jsx(b("TetraListCell.react"), {
										addOnPrimary: k != null ? {
											shape: l,
											size: 40,
											source: {
												uri: k
											},
											type: "profile-photo"
										} : void 0,
										headline: c,
										headlineLineLimit: 1,
										level: 3,
										linkProps: w,
										onPress: e
									})
								})
							})
						})
					}), m != null && g.jsx(b("BaseRowItem.react"), {
						verticalAlign: "center",
						children: typeof m === "function" ? m({
							sticky: p
						}) : m
					})]
				})
			})
		}))
	}

	function i(a) {
		a.preventDefault(), scrollTo({
			behavior: "smooth",
			left: 0,
			top: 0
		})
	}
}), null);