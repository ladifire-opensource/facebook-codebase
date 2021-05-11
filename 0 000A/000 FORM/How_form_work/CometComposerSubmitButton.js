__d("CometComposerSubmitButton.react", ["ix", "fbt", "JSResourceForInteraction",
 "React", "TetraButton.react", "TetraButtonGroup.react", "fbicon", "lazyLoadComponent",
  "requireCond", "stylex", "useCometComposerPushPage", "useComposerValidationErrors", 
  "withComposerViewStatePart", "cr:1772245", "cr:1772246"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React"),
		j = b("lazyLoadComponent")(b("JSResourceForInteraction")("PagesCometComposerScheduleView.react").__setRef("CometComposerSubmitButton.react")),
		k = function(a) {
			var b = a.mediaAttachments;
			a = a.videoLiteComposerEligible;
			a = a === void 0 ? !1 : a;
			b = (b == null ? void 0 : b.length) ? b[0] : {};
			a = a && b.fileType === "VIDEO";
			return a
		},
		l = function(a) {
			var b = a.disabled,
				c = a.props;
			a = a.scheduledPostDate;
			var d = c.label,
				e = h._("L\u00ean l\u1ecbch \u0111\u0103ng b\u00e0i");
			return {
				disabled: b,
				label: a ? e : d,
				onPress: c.onPress,
				testid: c.testid,
				type: "primary"
			}
		},
		m = function(a) {
			var c = a.cometVideoComposerLog,
				d = a.disabled,
				e = a.pushPage,
				f = a.scheduledPostDate;
			if (!e) return;
			a = h._("L\u00ean l\u1ecbch \u0111\u0103ng b\u00e0i");
			return {
				disabled: d,
				icon: b("fbicon")._(g("481115"), 16),
				label: "",
				labelIsHidden: !0,
				onPress: function() {
					if (c != null && b("cr:1772245") != null) {
						var a = c.logEvent;
						a(b("cr:1772245").VIDEO_SCHEDULE_DIALOG_OPEN)
					}
					e(h._("L\u00ean l\u1ecbch \u0111\u0103ng b\u00e0i"), function(a) {
						var d = a.onReturn;
						return i.jsx(j, {
							initialDate: f,
							onPressBack: function() {
								d();
								if (c != null && b("cr:1772245") != null) {
									var a = c.logEvent;
									a(b("cr:1772245").VIDEO_SCHEDULE_DIALOG_BACK)
								}
							}
						})
					}, {
						hasCustomHeader: !1
					})
				},
				tooltip: a
			}
		},
		n = function(a) {
			if (!a) return null;
			var b = a == null ? void 0 : a.toDateString();
			a = a == null ? void 0 : a.toLocaleTimeString();
			return i.jsx("div", {
				className: "oqcyycmt discj3wi h73f3l24",
				children: h._("\u0110\u00e3 l\u00ean l\u1ecbch \u0111\u0103ng v\u00e0o {scheduled_post_date_string} l\u00fac {scheduled_post_time_string}.", [h._param("scheduled_post_date_string", b), h._param("scheduled_post_time_string", a)])
			})
		};

	function a(a) {
		var c = a.isDirty,
			d = a.mediaAttachments,
			e = a.scheduledPostDate,
			f = a.videoLiteComposerEligible;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["isDirty", "mediaAttachments", "scheduledPostDate", "videoLiteComposerEligible"]);
		d = k({
			mediaAttachments: d,
			videoLiteComposerEligible: f
		});
		f = b("cr:1772246")();
		var g = b("useComposerValidationErrors")(),
			h = b("useCometComposerPushPage")();
		c = c === !1 || a.disabled === !0 || Object.keys(g).length > 0;
		if (!d) return i.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, a, {
			disabled: c
		}));
		g = l({
			disabled: c,
			props: a,
			scheduledPostDate: e
		});
		d = m({
			cometVideoComposerLog: f,
			disabled: c,
			pushPage: h,
			scheduledPostDate: e
		});
		return i.jsxs(i.Fragment, {
			children: [i.jsx(b("TetraButtonGroup.react"), {
				paddingHorizontal: 0,
				paddingTop: 0,
				primary: g,
				secondaryIcon: d
			}), n(e)]
		})
	}
	c = b("withComposerViewStatePart")(a, function(a) {
		return {
			isDirty: a.isDirty,
			mediaAttachments: a.mediaAttachments,
			scheduledPostDate: a.scheduledPostDate
		}
	});
	e.exports = c
}), null);