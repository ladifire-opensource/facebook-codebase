__d("CometPushView.react", ["ix", "fbt", "BaseCometModal.react", "CometBackOnEsc.react", "CometViewportMarginsAddonContextProvider.react", "React", "TetraCircleButton.react", "fbicon", "gkx", "stylex", "useCometRouterDispatcher"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = b("gkx")("976093") && !b("gkx")("1441635") ? 92 : 60;

	function l() {
		var a = j.useState(!1),
			c = a[0],
			d = a[1],
			e = b("useCometRouterDispatcher")();
		a = function () {
			e && e.popPushView && e.popPushView()
		};
		return j.jsx("div", {
			className: (i || (i = b("stylex"))).dedupe({
				"height-1": "qypqp5cg",
				"opacity-1": "b5wmifdl",
				"position-1": "poy2od1o",
				"start-1": "re5koujm",
				"top-1": "k4u0uxbm",
				"width-1": "q676j6op",
				"z-index-1": "tkr6xdv7"
			}, c ? {
				"opacity-1": "pedkr2u6"
			} : null),
			children: j.jsx(b("TetraCircleButton.react"), {
				color: "primary",
				icon: b("fbicon")._(g("478233"), 20),
				label: h._("\u0110\u00f3ng"),
				onFocusIn: function () {
					return d(!0)
				},
				onFocusOut: function () {
					return d(!1)
				},
				onPress: a,
				size: 40
			})
		})
	}

	function a(a) {
		var c = a.background;
		c = c === void 0 ? "web-wash" : c;
		var d = a.children,
			e = a.closeButtonComponent;
		e = e === void 0 ? l : e;
		var f = a.contextKey,
			g = a.hasTabBar;
		g = g === void 0 ? !1 : g;
		var h = a.hidden;
		h = h === void 0 ? !1 : h;
		var m = a.interactionDesc,
			n = a.interactionUUID,
			o = a.label,
			p = a.preferDialog;
		p = p === void 0 ? !1 : p;
		a = a.roleDialog;
		a = a === void 0 ? !1 : a;
		e = e;
		o = p ? j.jsx("div", babelHelpers["extends"]({
			"aria-label": o,
			"data-testid": void 0
		}, a ? {
			role: "dialog"
		} : {}, {
			children: d
		})) : j.jsxs(j.Fragment, {
			children: [c === "web-wash" && j.jsx("div", {
				className: "kr520xx4 j9ispegn poy2od1o n7fi1qx3 i09qtzwb qsy8amke"
			}), j.jsx("div", babelHelpers["extends"]({
				"aria-label": o,
				className: (i || (i = b("stylex"))).dedupe({
					"display-1": "j83agx80",
					"flex-direction-1": "cbu4d94t",
					"min-height-1": "h3gjbzrl",
					"position-1": "l9j0dhe7",
					"z-index-1": "du4w35lb"
				}, c === "web-wash" ? {
					"background-color-1": "qsy8amke"
				} : null, g ? {
					"min-height-1": "jgljxmt5",
					"top-1": "be9z9djy"
				} : null),
				"data-testid": void 0
			}, a ? {
				role: "dialog"
			} : {}, {
				children: j.jsxs(b("CometViewportMarginsAddonContextProvider.react"), {
					addon: g ? k : 0,
					children: [a ? j.jsx(e, {}) : null, d]
				})
			}))]
		});
		return j.jsxs(b("BaseCometModal.react"), {
			contextKey: f,
			hidden: h,
			interactionDesc: m,
			interactionUUID: n,
			showMaskOverlay: c === "web-wash" || p,
			stackingBehavior: "above-everything",
			children: [a ? j.jsx(b("CometBackOnEsc.react"), {
				closeOnEsc: !0
			}) : null, o]
		})
	}
}), null);