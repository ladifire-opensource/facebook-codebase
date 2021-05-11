__d("CometHomeCreateJewel.react", ["ix", "fbt", "CometDeferredPopoverTrigger.react", 
	"CometPressable.react", "CometSettingsListDropdownLoadingState.react", 
	"CometTooltip.react", "React", "TetraCircleButton.react", 
	"TetraText.react", "fbicon", "qex", "requireDeferred", "stylex", 
	"useCreateMenuComposerDialog", "useMergeRefs", "useTopNavigationLogging"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React"),
		j = b("requireDeferred")("CometHomeCreateMenu.react"),
		k = 36,
		l = {
			pressable: {
				alignItems: "bp9cbjyn",
				backgroundColor: "tdjehn4e",
				borderTopStartRadius: "e72ty7fz",
				borderTopEndRadius: "qlfml3jp",
				borderBottomEndRadius: "inkptoze",
				borderBottomStartRadius: "qmr60zad",
				display: "j83agx80",
				flexDirection: "btwxx1t3",
				height: "tv7at329",
				justifyContent: "taijpn5t",
				paddingEnd: "d1544ag0",
				paddingStart: "tw6a2znq",
				position: "l9j0dhe7"
			},
			pressed: {
				transform: "mtfd0dr2"
			}
		},
		m = b("qex")._("1682419") === "label";
	c = "CometHomeCreateJewel";
	var n = i.forwardRef(function(a, c) {
		var d = b("useTopNavigationLogging").useCreateButtonLoggingCallbacks(),
			e = d[0];
		d = d[1];
		var f = a.isActive,
			j = a.onPress;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["isActive", "onPress"]);
		var n = i.useCallback(function(a) {
			j && j(a), e()
		}, [e, j]);
		c = b("useMergeRefs")(c, d);
		return m ? i.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, a, {
			onPress: n,
			overlayRadius: k / 2,
			ref: c,
			testid: void 0,
			xstyle: function(a) {
				a = a.pressed;
				return [l.pressable, a && l.pressed]
			},
			children: i.jsx(b("TetraText.react"), {
				numberOfLines: 1,
				type: "bodyLink3",
				children: h._("T\u1ea1o")
			})
		})) : i.jsx(b("CometTooltip.react"), {
			tooltip: h._("T\u1ea1o"),
			children: i.jsx(b("TetraCircleButton.react"), babelHelpers["extends"]({}, a, {
				color: f === !0 ? "highlight" : "primary",
				icon: b("fbicon")._(g("483769"), 20),
				label: h._("T\u1ea1o"),
				onPress: n,
				ref: c,
				size: 40,
				testid: void 0,
				type: f === !0 ? "deemphasized-overlay" : "normal"
			}))
		})
	});

	function a() {
		var a = i.useState(!1),
			c = a[0];
		a = a[1];
		var d = b("useCreateMenuComposerDialog")();
		d = d[0];
		return i.jsx(b("CometDeferredPopoverTrigger.react"), {
			align: "start",
			autoAlign: !0,
			fallback: i.jsx(b("CometSettingsListDropdownLoadingState.react"), {
				glimmerSize: 36,
				numberOfItems: 6,
				title: h._("T\u1ea1o")
			}),
			onVisibilityChange: a,
			popoverProps: {
				showComposerDialog: d
			},
			popoverResource: j,
			position: "below",
			children: function(a, b, d, e, f, g) {
				return i.jsx(n, {
					isActive: c,
					onHoverIn: e,
					onHoverOut: f,
					onPress: b,
					onPressIn: g,
					ref: a
				})
			}
		})
	}
	d = i.memo(a);
	e.exports = d
}), null);