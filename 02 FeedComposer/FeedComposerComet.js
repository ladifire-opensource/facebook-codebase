__d("FeedComposerComet.react", ["ix", "fbt", "BaseMultiStepContainer.react", "CometComposer.react", "CometComposerIPSPlugin.react", "CometComposerMediaDropTarget.react", "CometComposerMinutiaeBar.react", "CometComposerMinutiaeBarLoading.react", "CometComposerPreAttachmentArea.react", "CometComposerPrivacyScope.react", "CometComposerPushPageContext", "CometComposerSavingIndicatorMask.react", "CometComposerServerErrorMessage.react", "CometComposerSubmitButton.react", "CometComposerSubmitButtonLayout.react", "CometDefaultPrivacyNux.react", "CometHero.react", "CometPlaceholder.react", "CometRelay", "CometToasterStateManager", "CometTrackingNodeProvider.react", "ComposerDefaultPrivacyUtils", "FeedComposerCometBody.react", "FeedComposerCometToolbar.react", "JSResource", "React", "ServerHTML.react", "SilenceableErrorMessageUtils", "TCometComposerTarget", "TetraIcon.react", "cometComposerAttachmentsEligibilityChecker", "cometComposerEditingEligibilityChecker", "cometComposerFooterAttachmentsEligibilityChecker", "cometComposerFormattedTextEligibilityChecker", "cometComposerTaggerEligibilityChecker", "cometComposerValidateMediaLimit", "cometComposerValidateMediaUploadSuccess", "cometComposerValidatePhoto3dAttachment", "cometComposerValidateStatusTextLength", "cometPushToast", "decorateMultiStepContainerPushPage", "fbicon", "feedStoryLiveInsertUpdater", "filterNulls", "getDeferredComposerLogger", "getDeferredComposerTransformer", "gkx", "lazyLoadComponent", "requireCond", "requireDeferred", "stylex", "useComposerSubmit", "useFeedComposerCometDialog", "useIPSCometComposerCallout", "useResumableComposerViewState", "uuid", "cr:1748165", "cr:1606271", "cr:1575126", "cr:1252280", "cr:1575921", "FeedComposerComet_profile.graphql", "FeedComposerComet_composer.graphql", "FeedComposerComet_scope.graphql", "FeedComposerComet_defaultprivacy.graphql", "FeedComposerComet_viewer.graphql"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	var i, j, k, l, m, n, o = b("React"),
		p = (c = b("requireDeferred"))("cometComposerAMACreationLogger"),
		q = c("cometComposerLogger"),
		r = c("cometComposerMediaUploadLogger"),
		s = c("cometComposerQuiltsCreationLogger");
	d = c("composerActivityMinutiaeTransform");
	f = c("composerAttachmentAreaFeedTransform");
	var t = c("composerAudienceFeedTransform"),
		u = c("composerBrandedContentTransform"),
		v = c("composerFooterAttachmentAreaFeedTransform"),
		w = c("composerFormattedTextTransform"),
		x = c("composerLocationMinutiaeTransform"),
		y = c("composerMessageFeedTransform"),
		z = c("composerPreAttachmentAreaFeedTransform"),
		A = c("composerTrackingTransform"),
		B = c("composerWithTagTransform"),
		C = c("composerWoodhengeSupportTransform");
	c = c("fundraiserForStoryTransform");
	var D = b("lazyLoadComponent")(b("JSResource")("ProfileCometComposerFunFactsAttachmentArea.react").__setRef("FeedComposerComet.react")),
		E = 4e3,
		F = {
			error: {
				marginBottom: "fi9g468h",
				marginEnd: "wkznzc2l",
				marginStart: "dhix69tm"
			}
		},
		G = b("filterNulls")([(n = b("getDeferredComposerTransformer"))(A), n(t), n(y), n(B), n(d), n(x), n(w), n(z), n(C), n(v), n(c), b("cr:1575921")]),
		H = [n(f), n(u)].concat(G),
		I = {
			mediaAttachment: b("cr:1252280"),
			mediaLimit: b("cometComposerValidateMediaLimit"),
			mediaUpload: b("cometComposerValidateMediaUploadSuccess"),
			photo3dAttachment: b("cometComposerValidatePhoto3dAttachment"),
			textLimit: b("cometComposerValidateStatusTextLength")
		};

	function a(a, c) {
		var d, e, f = a.askMeAnythingVisibleOnLoad,
			n = f === void 0 ? !1 : f,
			t = a.beginningViewState;
		f = a.composer$key;
		var u = a.composerType,
			v = a.defaultprivacy$key,
			w = a.feelingTaggerVisibleOnLoad,
			x = w === void 0 ? !1 : w,
			y = a.headerComponent,
			z = a.isViewerFeed;
		w = a.locationTaggerVisibleOnLoad;
		var A = w === void 0 ? !1 : w,
			B = a.onClose,
			C = a.onSave,
			J = a.onSaveError,
			K = a.onSubmit,
			L = a.privacySelectorRenderLocation;
		w = a.profile$key;
		var M = a.quiltsComposerVisibleOnLoad,
			aa = M === void 0 ? !1 : M;
		M = a.renderLocation;
		M = M === void 0 ? "homepage_stream" : M;
		var N = a.scope$key,
			ba = a.unalteredBeginningViewState,
			O = a.viewer$key;
		a = a.withTaggerVisibleOnLoad;
		var ca = a === void 0 ? !1 : a,
			P = b("CometRelay").useFragment(i !== void 0 ? i : i = b("FeedComposerComet_profile.graphql"), w),
			da = b("CometRelay").useFragment(j !== void 0 ? j : j = b("FeedComposerComet_composer.graphql"), f);
		a = P.id;
		var Q = b("CometRelay").useFragment(k !== void 0 ? k : k = b("FeedComposerComet_scope.graphql"), N);
		w = b("CometRelay").useRefetchableFragment(l !== void 0 ? l : l = b("FeedComposerComet_defaultprivacy.graphql"), v);
		f = w[0];
		var ea = w[1];
		N = b("CometRelay").useFragment(m !== void 0 ? m : m = b("FeedComposerComet_viewer.graphql"), O);
		var fa = b("ComposerDefaultPrivacyUtils").isDefaultPrivacyEnabled && (f == null ? void 0 : (v = f.default_privacy_user) == null ? void 0 : v.has_opt_in) === !1;
		w = o.useState(!1);
		var R = w[0],
			S = w[1];
		O = o.useState(null);
		var ga = O[0],
			ha = O[1],
			ia = o.useRef(null);
		f = o.useTransition();
		var ja = f[0],
			ka = function (a) {
				ja(function () {
					ea({}, {
						fetchPolicy: "network-only"
					})
				})
			},
			T = o.useRef(b("gkx")("1000924"));
		v = b("useResumableComposerViewState")();
		var U = v.clearResumableViewState,
			V = v.getResumableViewState,
			W = v.saveResumableViewState;
		w = o.useCallback(function (a) {
			W(a)
		}, [W]);
		O = b("useFeedComposerCometDialog")({
			composerType: "feed",
			onBeforeClose: w,
			onSave: C,
			tracePolicy: "comet.composer.editFeedPost"
		});
		var X = O[0],
			Y = o.useCallback(function (a, b) {
				var c;
				c = (c = V()) != null ? c : void 0;
				U();
				X({
					beginningViewState: c
				});
				a != null && (b != null && b !== "" && a.expire(b))
			}, [U, V, X]);
		f = o.useCallback(function () {
			S(!1)
		}, []);
		v = o.useCallback(function () {
			S(!1)
		}, []);
		w = o.useCallback(function (a, b) {
			(!T.current === !0 || (b == null ? void 0 : b.disableOptimisticMediaPost) === !0) && (B && B());
			(a.story_create && a.story_create.story == null && a.story_create.story_id != null || a != null && a.story_edit != null && ((b = a.story_edit) == null ? void 0 : b.story) == null) && ma();
			C && C()
		}, [B, C]);

		function la(a, c) {
			a = a == null ? h._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i. H\u00e3y th\u1eed \u0111\u0103ng l\u1ea1i sau.") : o.jsx(b("ServerHTML.react"), {
				blob: a
			});
			W(c);
			var d = b("CometToasterStateManager").getInstance();
			c = o.jsx(b("TetraIcon.react"), {
				"aria-label": h._("Ch\u1ec9nh s\u1eeda"),
				color: "white",
				icon: b("fbicon")._(g("477826"), 20),
				onPress: function () {
					return Y(d, e)
				}
			});
			var e = b("cometPushToast").cometPushToast({
				icon: c,
				message: a,
				onPress: function () {
					return Y(d, e)
				},
				testid: "CometStoriesReshareToast",
				truncateText: !1
			}, Infinity, d)
		}

		function ma() {
			var a = h._("B\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n \u0111ang \u0111\u01b0\u1ee3c x\u1eed l\u00fd. Ch\u00fang t\u00f4i s\u1ebd th\u00f4ng b\u00e1o khi c\u00f3 th\u1ec3 xem b\u00e0i vi\u1ebft."),
				c = b("CometToasterStateManager").getInstance();
			ia.current = b("cometPushToast").cometPushToast({
				message: a,
				testid: "FeedCometVideoOptimisticPostingToast"
			}, E, c)
		}
		O = function (a, c) {
			a = b("SilenceableErrorMessageUtils").getMetadataFromError(a);
			ha(a);
			J && J();
			!T.current === !0 || (c == null ? void 0 : c.disableOptimisticMediaPost) === !0 ? B && B() : b("SilenceableErrorMessageUtils").shouldHideErrorMessage(a) || la(a.message, c)
		};
		d = (d = t == null ? void 0 : t.creationSessionID) != null ? d : b("uuid")();
		var Z = b("useComposerSubmit")({
			actorID: a,
			composerEntryPoint: "inline_composer",
			composerSourceSurface: "newsfeed",
			composerType: u,
			creationSessionID: d,
			onCompleted: w,
			onError: O,
			optimisticTransformers: G,
			optimisticUpdater: function (a, c) {
				return b("feedStoryLiveInsertUpdater")(a, c)
			},
			requestType: "FEED",
			transformers: H,
			updater: b("feedStoryLiveInsertUpdater"),
			variables: {
				UFI2CommentsProvider_commentsKey: "CometModernHomeFeedQuery",
				creationSessionID: d,
				feedLocation: "NEWSFEED",
				feedbackSource: 1,
				renderLocation: M
			}
		});
		w = o.useCallback(function (a) {
			S(!0), K && K(), T.current === !0 && a.disableOptimisticMediaPost !== !0 && (B && B()), Z(a)
		}, [B, Z, K]);
		O = function () {
			return S(!0)
		};
		M = {
			attachments: b("cometComposerAttachmentsEligibilityChecker"),
			footerAttachments: b("cometComposerFooterAttachmentsEligibilityChecker").cometComposerFooterAttachmentsEligibilityChecker,
			formattedText: b("cometComposerFormattedTextEligibilityChecker"),
			tagger: b("cometComposerTaggerEligibilityChecker")
		};
		!b("gkx")("1749453") && u === "edit" && (M = babelHelpers["extends"]({}, M, {
			edit: b("cometComposerEditingEligibilityChecker")
		}));
		var $ = b("gkx")("1663744") ? !0 : u !== "share",
			na = [b("getDeferredComposerLogger")(q), b("getDeferredComposerLogger")(r), b("getDeferredComposerLogger")(p), b("getDeferredComposerLogger")(s)],
			oa = (e = b("cr:1575126")) != null ? e : o.Fragment;
		e = b("useIPSCometComposerCallout")();
		var pa = e.calloutRef;
		e = e.handleIPSResult;
		var qa = [o.jsx(b("CometComposerIPSPlugin.react"), {
			cometComposerIPSPlugin_viewer$key: N,
			onIPSClosedWithSelection: e,
			scopeRef: Q
		}, "ipsPlugin")];
		return o.jsx(b("CometComposer.react"), {
			beginningViewState: babelHelpers["extends"]({}, t, {
				creationSessionID: d
			}),
			eligibilityCheckers: M,
			loggers: na,
			onSubmitCommit: w,
			onSubmitHalt: f,
			onSubmitStart: O,
			onValidationErrors: v,
			ref: c,
			target: {
				id: a,
				type: b("TCometComposerTarget").ComposerTargetType.Feed
			},
			testid: void 0,
			unalteredBeginningViewState: ba,
			validators: I,
			children: function (a) {
				return o.jsx(b("BaseMultiStepContainer.react"), {
					fitContentWidth: !0,
					children: function (c) {
						return o.jsx(b("CometComposerPushPageContext").Provider, {
							value: b("decorateMultiStepContainerPushPage")(c),
							children: o.jsx(b("CometComposerMediaDropTarget.react"), {
								children: o.jsxs(oa, {
									children: [o.jsx(b("CometHero.react"), {
										description: "Composer",
										event: 30605316
									}), o.jsx(b("cr:1606271"), {
										header: o.jsxs(o.Fragment, {
											children: [y, o.jsxs(b("CometPlaceholder.react"), {
												fallback: o.jsx(b("CometComposerMinutiaeBarLoading.react"), {}),
												children: [o.jsx(b("CometHero.react"), {
													description: "MinutiaeBar",
													event: 30605316
												}), o.jsx(b("CometComposerMinutiaeBar.react"), {
													privacySelector: o.jsx("div", {
														ref: pa,
														children: o.jsx(b("CometComposerPrivacyScope.react"), {
															plugins: qa,
															privacySelectorRenderLocation: L,
															scope: Q,
															title: b("ComposerDefaultPrivacyUtils").isDefaultPrivacyEnabled ? h._("\u0110\u1ed1i t\u01b0\u1ee3ng c\u1ee7a b\u00e0i vi\u1ebft") : null
														})
													}),
													profile$key: P
												})]
											}), fa ? o.jsx(b("CometDefaultPrivacyNux.react"), {
												onClose: B,
												onPrivacyChange: ka,
												scopeRef: Q
											}) : null, o.jsx(b("CometComposerPreAttachmentArea.react"), {
												children: function (a) {
													switch (a) {
														case "FUN_FACT":
															return o.jsx(D, {})
													}
													return null
												}
											})]
										}),
										body: o.jsx(b("FeedComposerCometBody.react"), {
											composerType: u,
											isViewerFeed: z,
											onClose: B,
											placeholderText: t == null ? void 0 : t.placeholderTextOverride,
											profile$key: P
										}),
										footer: o.jsxs(o.Fragment, {
											children: [$ ? o.jsx(b("FeedComposerCometToolbar.react"), {
												askMeAnythingVisibleOnLoad: n,
												composer: da,
												composerType: u,
												feelingTaggerVisibleOnLoad: x,
												locationTaggerVisibleOnLoad: A,
												onClose: B,
												quiltsComposerVisibleOnLoad: aa,
												withTaggerVisibleOnLoad: ca
											}) : null, o.jsx(b("CometComposerSubmitButtonLayout.react"), {
												hasTopMargin: $,
												children: o.jsx(b("CometTrackingNodeProvider.react"), {
													trackingNode: 156,
													children: o.jsx(b("CometComposerSubmitButton.react"), {
														disabled: R,
														expanded: !0,
														onClick: a,
														testid: void 0,
														children: (t == null ? void 0 : t.storyID) ? h._("L\u01b0u") : h._("\u0110\u0103ng")
													})
												})
											}), o.jsx(b("CometComposerServerErrorMessage.react"), {
												errorMetadata: ga,
												xstyle: F.error
											}), b("cr:1748165") != null && o.jsx(b("cr:1748165"), {
												xstyle: F.error
											})]
										})
									}), R ? o.jsx(b("CometComposerSavingIndicatorMask.react"), {
										body: (t == null ? void 0 : t.storyID) ? h._("\u0110ang l\u01b0u") : h._("\u0110\u0103ng")
									}) : null]
								})
							})
						})
					}
				})
			}
		}, d)
	}
	A = o.forwardRef(a);
	e.exports = A
}), null);