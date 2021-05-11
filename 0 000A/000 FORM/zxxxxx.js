__d("BirthdayCometComposer.react", ["fbt", "ix", "BirthdayCometComposer_user.graphql", "CometComposer.react", "CometComposerEditor.react", "CometComposerEmojiPickerTrigger.react", "CometComposerServerErrorMessage.react", "CometRelay", "GraphQLGender", "React", "SilenceableErrorMessageUtils", "TetraIcon.react", "cometUniqueID", "cr:1536687", "createComposerDeferredPlugin", "eventCometComposerValidateNonEmptyPost", "fbicon", "getDeferredComposerTransformer", "reduceComposerViewStateToCreationData", "requireCond", "requireDeferred", "stylex", "useNotificationsTrackingString"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j, k = b("React"),
		l = (c = b("requireDeferred"))("BirthdayCometPostMutation");
	d = c("composerMessageFeedTransform");
	var m = {
			message: b("eventCometComposerValidateNonEmptyPost")
		},
		n = [b("getDeferredComposerTransformer")(d)];

	function a(a) {
		var c = b("CometRelay").useFragment(i !== void 0 ? i : i = b("BirthdayCometComposer_user.graphql"), a.user$key),
			d = c == null ? void 0 : c.id,
			e = a.onSubmitUpdater,
			f = b("CometRelay").useRelayEnvironment();
		a = k.useState(!1);
		var h = a[0],
			s = a[1];
		a = k.useState(null);
		var t = a[0],
			u = a[1];
		a = k.useState(b("cometUniqueID")());
		var v = a[0],
			w = a[1],
			x = b("useNotificationsTrackingString")();
		a = k.useCallback(function() {
			s(!1)
		}, []);
		var y = k.useCallback(function() {
				s(!1)
			}, []),
			z = k.useCallback(function(a) {
				if (h) return;
				s(!0);
				b("reduceComposerViewStateToCreationData")(a, n, {
					audience: {
						to_id: d
					},
					composer_entry_point: "birthday_reminder_list",
					composer_source_surface: "event",
					source: "WWW"
				}, function(a) {
					a.tracking = a.tracking ? a.tracking.concat(x) : [x], l.onReady(function(c) {
						c = c.commit;
						c({
							environment: f,
							input: a,
							onCompleted: function() {
								s(!1), w(b("cometUniqueID")())
							},
							onError: function(a) {
								u(b("SilenceableErrorMessageUtils").getMetadataFromError(a)), s(!1)
							},
							updater: e
						})
					})
				})
			}, [h, f, d, e]);
		if (d == null) return null;
		c = new(b("GraphQLGender"))((c == null ? void 0 : c.gender) || null);
		var A = g._({
			"1": "Vi\u1ebft tr\u00ean d\u00f2ng th\u1eddi gian c\u1ee7a c\u00f4 \u1ea5y...",
			"2": "Vi\u1ebft tr\u00ean d\u00f2ng th\u1eddi gian c\u1ee7a anh \u1ea5y...",
			"*": "Vi\u1ebft tr\u00ean d\u00f2ng th\u1eddi gian c\u1ee7a h\u1ecd..."
		}, [g._pronoun(1, c.toGenderConstEnum())]);
		return k.jsx(b("CometComposer.react"), {
			onSubmitCommit: z,
			onSubmitHalt: a,
			onValidationErrors: y,
			validators: m,
			children: function(a) {
				return k.jsxs("div", {
					children: [k.jsxs("div", {
						className: (j || (j = b("stylex"))).dedupe({
							"align-items-1": "aovydwv3",
							"background-color-1": "b3i9ofy5",
							"border-top-start-radius-1": "orhb3f3m",
							"border-top-end-radius-1": "czkt41v7",
							"border-bottom-end-radius-1": "fmqxjp7s",
							"border-bottom-start-radius-1": "emzo65vh",
							"color-1": "oo9gr5id",
							"display-1": "j83agx80",
							"flex-direction-1": "btwxx1t3"
						}, h ? {
							"color-1": "erlsw9ld"
						} : null),
						children: [k.jsxs("div", {
							className: "tw6a2znq hwnh5xvq rz4wbd8a l60d2q6s eg9m0zos ni8dbmo4 rz7trki1 iko8p5ub jq4qci2q g3eujd1d rq0escxv ns4p8fja",
							children: [k.jsx(b("CometComposerEditor.react"), {
								autoFocus: !1,
								placeholder: A.toString(),
								readOnly: h,
								submitOnEnter: !0
							}), k.jsx(b("cr:1536687"), {}), k.jsx(o, {}), k.jsx(p, {}), k.jsx(q, {
								composerType: "feed"
							})]
						}), k.jsx("div", {
							className: "pcp91wgn sj5x9vvc dflh9lhu cxgpxx05",
							children: k.jsx(r, {
								disabled: h
							})
						})]
					}), k.jsx(b("CometComposerServerErrorMessage.react"), {
						errorMetadata: t
					})]
				})
			}
		}, v)
	}
	var o = b("createComposerDeferredPlugin")(c("CometComposerLinksPlugin.react")),
		p = b("createComposerDeferredPlugin")(c("FeedComposerCometMentionsPlugin.react")),
		q = b("createComposerDeferredPlugin")(c("CometComposerMisinformationLinkDetectorPlugin.react"));

	function r(a) {
		return k.jsx(b("CometComposerEmojiPickerTrigger.react"), {
			align: "end",
			position: "below",
			children: function(c, d) {
				return k.jsx(b("TetraIcon.react"), {
					"aria-label": g._("Ch\u00e8n m\u1ed9t bi\u1ec3u t\u01b0\u1ee3ng c\u1ea3m x\u00fac"),
					color: a.disabled ? "disabled" : "tertiary",
					disabled: a.disabled,
					icon: b("fbicon")._(h("642534"), 20),
					onPress: d,
					ref: c
				})
			}
		})
	}
}), null);