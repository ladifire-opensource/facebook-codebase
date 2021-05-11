__d("CometMultiStepDialog.react", ["BaseDialog.react", "BaseHeadingContextWrapper.react", 
	"BaseMultiStepContainer.react", "CometHideLayerOnEscape.react", "CometMultiStepDialogCloseContext", 
	"CometMultiStepDialogClosingHeader.react", "emptyFunction", "react", "recoverableViolation", 
	"useIsCometOnMobile.hybrid"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = g || b("react"),
		i = {
			card: {
				backgroundColor: "cwj9ozl2",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				boxShadow: "nwpbqux9",
				"@media (max-width: 564px)": {
					borderTopStartRadius: "iy3k6uwz",
					borderTopEndRadius: "e9a99x49",
					borderBottomEndRadius: "g8p4j16d",
					borderBottomStartRadius: "bv25afu3"
				}
			}
		},
		j = {
			content: {},
			medium: {
				maxWidth: "pwh3vvf2",
				width: "k4urcfbm"
			},
			small: {
				maxWidth: "gc7gaz0o",
				width: "k4urcfbm"
			}
		};

	function a(a, c) {
		var d = a.anchorUntilHeight;
		d = d === void 0 ? 0 : d;
		var e = a.children,
			f = a.disableClosingWithMask;
		f = f === void 0 ? !1 : f;
		var g = a.iconCssSelectorId,
			k = a.onClose;
		k = k === void 0 ? b("emptyFunction") : k;
		var l = a.onPageChange,
			m = a.size;
		m = m === void 0 ? "small" : m;
		var n = a.testid,
			o = a.title;
		n = a.labelledBy;
		a = a.withCloseButton;
		var p = a === void 0 ? !1 : a;
		a = b("useIsCometOnMobile.hybrid")();
		p === !0 && k == null && b("recoverableViolation")("CometMultiStepDialog: withCloseButton is set to true without being provided an onClose handler. Please provide an onClose handler, or set withCloseButton to false", "comet_ui");
		var q = h.useMemo(function() {
			return function(a) {
				var c = a.children,
					d = a.initialTitle;
				d = d === void 0 ? null : d;
				var e = a.onReturn,
					f = a.withoutBackButton;
				f = f === void 0 ? !1 : f;
				a = a.withoutCloseButton;
				a = a === void 0 ? !1 : a;
				d = h.useState(d);
				var i = d[0];
				d = d[1];
				return h.jsxs(b("CometHideLayerOnEscape.react"), {
					onHide: e,
					children: [h.jsx(b("CometMultiStepDialogClosingHeader.react"), {
						iconCssSelectorId: g,
						onBack: e,
						title: i,
						withCloseButton: a ? !1 : p,
						withoutBackButton: f
					}), h.jsx(b("BaseHeadingContextWrapper.react"), {
						children: c(d)
					})]
				})
			}
		}, [g, p]);
		return h.jsx(b("BaseDialog.react"), {
			anchorUntilHeight: d,
			"aria-label": n != null ? void 0 : (d = o) != null ? d : void 0,
			"aria-labelledby": n,
			disableClosingWithMask: f,
			isMobileEnvironment: a,
			onClose: k,
			testid: void 0,
			xstyle: [i.card, j[m]],
			children: h.jsx(b("CometMultiStepDialogCloseContext").Provider, {
				value: k,
				children: h.jsx(b("BaseMultiStepContainer.react"), {
					fitContentWidth: m === "content",
					onPageChange: l,
					ref: c,
					children: function(a) {
						return h.jsxs(h.Fragment, {
							children: [h.jsx(b("CometMultiStepDialogClosingHeader.react"), {
								iconCssSelectorId: g,
								title: o,
								withCloseButton: p,
								withoutBackButton: !0
							}), h.jsx(b("BaseHeadingContextWrapper.react"), {
								children: e(function(b, c) {
									c = c === void 0 ? {} : c;
									var d = c.title,
										e = c.withoutBackButton,
										f = e === void 0 ? !1 : e;
									e = c.withoutCloseButton;
									var g = e === void 0 ? !1 : e;
									a(function(a) {
										var c = a.onReturn;
										return h.jsx(q, {
											initialTitle: d,
											onReturn: c,
											withoutBackButton: f,
											withoutCloseButton: g,
											children: function(a) {
												return h.jsx(b, {
													onReturn: c,
													setTitle: a
												})
											}
										})
									})
								})
							})]
						})
					}
				})
			})
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);