__d("CometUFIViewOptionsSelector.react", ["ix", "CometDeferredPopoverTrigger.react", "CometPressable.react", "CometRelay", "CometTextWithIcon.react", "CommentOrderingMode", "CommentOrderingModeFalcoEvent", "JSResourceForInteraction", "React", "TetraIcon.react", "TetraText.react", "fbicon", "promiseDone", "recoverableViolation", "requireDeferred", "stylex", "useVisibilityObserver", "CometUFIViewOptionsSelector_feedback.graphql"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = b("requireDeferred")("CometUFIViewOptionsSelectorMenu.react"),
		k = b("JSResourceForInteraction")("CometGroupsCommentSortSwitcherTypedLogger.react").__setRef("CometUFIViewOptionsSelector.react");

	function a(a) {
		var c = a.feedback,
			d = a.onChange,
			e = a.selectedViewOption,
			f = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometUFIViewOptionsSelector_feedback.graphql"), c);
		a = (f == null ? void 0 : f.localized_comment_orderings) || [];
		c = b("useVisibilityObserver")({
			onVisible: function () {
				var a = f.share_fbid;
				if (e != null && e !== "%future added value" && a != null) {
					var c = b("CommentOrderingMode")[e] === f.default_comment_ordering ? "default" : "changed";
					b("CommentOrderingModeFalcoEvent").log(function () {
						return {
							comment_ordering_mode: b("CommentOrderingMode")[e],
							event_type: c,
							feedback_id: a
						}
					})
				}
			}
		});
		var l = function () {
				var a;
				(f == null ? void 0 : (a = f.associated_group) == null ? void 0 : a.id) != null && b("promiseDone")(k.load(), function (a) {
					a.onSortingSwitchClick(e)
				})
			},
			m = function (a) {
				var c;
				(f == null ? void 0 : (c = f.associated_group) == null ? void 0 : c.id) != null && b("promiseDone")(k.load(), function (b) {
					b.onOptionChange(e, a)
				});
				d(a)
			};
		if (a.length <= 1) return null;
		var n = a.find(function (a) {
				return a.value === e
			}),
			o = n == null ? void 0 : n.title;
		if (o == null) {
			b("recoverableViolation")("Selected Label not found for CometUFIViewOptionsSelector", "ufi2");
			return null
		}
		return i.jsx("div", {
			className: "h3fqq6jp hcukyx3x oygrvhab cxmmr5t8 kvgmc6g5 j83agx80 bp9cbjyn",
			ref: c,
			children: i.jsx(b("CometDeferredPopoverTrigger.react"), {
				align: "end",
				popoverProps: {
					onChange: m,
					viewOptions: a
				},
				popoverResource: j,
				position: "below",
				children: function (a, c) {
					return i.jsx(b("CometPressable.react"), {
						display: "inline",
						onPress: c,
						onPressIn: l,
						overlayDisabled: !0,
						ref: a,
						children: i.jsx(b("TetraText.react"), {
							color: "secondary",
							type: "bodyLink3",
							children: i.jsx(b("CometTextWithIcon.react"), {
								iconAfter: i.jsx(b("TetraIcon.react"), {
									color: "secondary",
									icon: b("fbicon")._(g("481882"), 16),
									size: 16
								}),
								children: o
							})
						})
					})
				}
			})
		})
	}
}), null);