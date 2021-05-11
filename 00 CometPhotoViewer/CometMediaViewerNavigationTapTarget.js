__d("CometMediaViewerNavigationTapTarget.react", ["ix", 
	"CometMediaViewerDispatcherContext", "CometPressable.react", 
	"CometTrackingNodeProvider.react", "React", "TetraishSkittleIcon.react", 
	"fbicon", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = {
			buttonContainerBackground: {
				backgroundColor: "r898ja9m"
			},
			buttonContainerHoverLeft: {
				opacity: "pedkr2u6",
				transform: "lhh4dqlf"
			},
			buttonContainerHoverRight: {
				opacity: "pedkr2u6",
				transform: "k9ht9y5y"
			},
			fullHeight: {
				height: "datstx6m"
			},
			invisible: {
				opacity: "b5wmifdl",
				transitionDuration: "ijkhr0an",
				transitionTimingFunction: "s13u9afw",
				visibility: "kr9hpln1"
			},
			navButton: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				opacity: "l8rlqa9s",
				paddingTop: "discj3wi",
				paddingEnd: "hv4rvrfc",
				paddingBottom: "ihqw7lf3",
				paddingStart: "dati1w0a",
				position: "l9j0dhe7",
				transitionDuration: "ms05siws",
				transitionProperty: "pnx7fd3z",
				transitionTimingFunction: "msbwk0y7",
				willChange: "ejg0drik"
			},
			root: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				justifyContent: "taijpn5t",
				opacity: "pedkr2u6",
				position: "l9j0dhe7",
				transitionDuration: "c5ndavph",
				transitionProperty: "art1omkt",
				transitionTimingFunction: "ot9fgl3s",
				zIndex: "tkr6xdv7"
			},
			tapTargetOverlay: {
				height: "datstx6m"
			}
		};

	function a(a) {
		var c = a.direction,
			d = a.hoverOverlayHeight,
			e = d === void 0 ? "default" : d;
		d = a.invisible;
		d = d === void 0 ? !1 : d;
		var f = a.label,
			k = a.onClick,
			l = a.testid;
		l = a.trackingNode;
		var m = i.useContext(b("CometMediaViewerDispatcherContext"));
		a = function () {
			m({
				isHovered: !0,
				type: "SET_IS_HOVERED"
			})
		};
		var n = function () {
			m({
				isHovered: !1,
				type: "SET_IS_HOVERED"
			})
		};
		return i.jsx("div", {
			className: (h || (h = b("stylex")))(j.root, d && j.invisible, e === "default" && j.fullHeight),
			"data-testid": void 0,
			onMouseEnter: a,
			onMouseLeave: n,
			children: i.jsx(b("CometTrackingNodeProvider.react"), {
				trackingNode: l,
				children: i.jsx(b("CometPressable.react"), {
					"aria-label": f,
					focusable: !1,
					onPress: k,
					testid: void 0,
					xstyle: e === "default" && j.tapTargetOverlay,
					children: function (a) {
						a = a.hovered;
						return i.jsx("div", {
							className: (h || (h = b("stylex")))(j.navButton, e === "default" && j.buttonContainerBackground, a && (c === "previous" ? j.buttonContainerHoverLeft : j.buttonContainerHoverRight)),
							children: i.jsx(b("TetraishSkittleIcon.react"), {
								color: "gray",
								icon: c === "previous" ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
								size: 48
							})
						})
					}
				})
			})
		})
	}
}), null);