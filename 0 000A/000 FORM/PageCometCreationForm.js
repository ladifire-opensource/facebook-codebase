__d("PageCometCreationForm.react", ["ix", "CometCreationLayout.react", "CometPageCreateMutation", "CometRelay", "JSResourceForInteraction", "NullStateFiles", "XCometLWIProductPickerControllerRouteBuilder", "deferredLoadComponent", "requireDeferred", "PageCometCreationPreviewUtils", "requireDeferredForDisplay", "PagesCometAdminEditingPageNameMutation", "PagesCometAdminEditingTopicMutation", "PagesCometCreationStringUtils", "PagesCometEditPageBlurbMutation", "ProfileCometProfilePictureSetMutation", "React", "TetraIcon.react", "TetraNullState.react", "XCometPageBrowserControllerRouteBuilder", "cometPushToast", "emptyFunction", "fbicon", "recoverableViolation", "unrecoverableViolation", "useCometDeferredDialog", "useCometLazyDialog", "useCometRouterDispatcher", "usePageCometCreateFormExitConfirmation", "usePageCreationInitialValues", "usePageCreationReducerAndRelayUpdater", "usePagesCometCoverPhotoUpdateMutation", "PageCometCreationForm_viewer.graphql"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("JSResourceForInteraction")("PageCometCreationLWIRedirectDialog.react").__setRef("PageCometCreationForm.react"),
		j = b("requireDeferred")("PageCometCreationWelcomeDialog.react"),
		k = b("React"),
		l = b("deferredLoadComponent")(b("requireDeferredForDisplay")("PageCometCreationFormBodyStepOne.react")),
		m = b("deferredLoadComponent")(b("requireDeferredForDisplay")("PageCometCreationFormFooterStepOne.react")),
		n = b("deferredLoadComponent")(b("requireDeferredForDisplay")("PageCometCreationPreview.react"));

	function a(a) {
		var c = a.pageCreateLogger,
			d = a.pageID,
			e = a.referrer,
			f = a.shouldLWIRedirect;
		a = a.viewer$key;
		var o = b("useCometRouterDispatcher")();
		if (o == null) throw b("unrecoverableViolation")("Route dispatcher is null during Page creation", "core_biz_growth");
		var p = b("useCometLazyDialog")(i),
			q = p[0];
		k.useEffect(function() {
			f && q({
				isPageCreated: !1
			})
		}, [q, f]);
		p = b("CometRelay").useFragment(h !== void 0 ? h : h = b("PageCometCreationForm_viewer.graphql"), a);
		a = b("usePageCreationInitialValues")(p, d);
		p = b("usePageCreationReducerAndRelayUpdater")(a);
		d = p[0];
		var r = p[1];
		b("usePageCometCreateFormExitConfirmation")(d, c);
		var s = d.category,
			t = d.coverPhoto,
			u = d.description;
		p = d.isLoading;
		var v = d.name,
			w = d.pageNameValidate,
			x = d.profilePhoto,
			y = d.publishedID,
			z = k.useState(null),
			A = z[0],
			B = z[1];
		z = k.useState([]);
		var C = z[0],
			D = z[1];
		z = k.useState(null);
		var E = z[0],
			F = z[1],
			G = b("CometRelay").useRelayEnvironment();
		z = v != null && v !== "" && s != null && s.length !== 0;
		var H = t == null ? void 0 : t.fbid,
			I = k.useState(null),
			J = I[0],
			K = I[1],
			L = k.useCallback(function(a, d) {
				a === void 0 && (a = null);
				var e = function(a) {
						return r({
							type: "SET_PAGE_NAME_VALIDATE",
							value: a
						})
					},
					f = function(a) {
						return r({
							type: "SET_PAGE_NAME_HELPER_TEXT",
							value: a
						})
					};
				if (d != null && d !== "") e("ERROR"), f(d);
				else {
					c("create_error");
					r({
						type: "SET_IS_LOADING",
						value: !1
					});
					b("cometPushToast").cometPushErrorToast({
						message: (f = (e = a) == null ? void 0 : e.message) != null ? f : b("PagesCometCreationStringUtils").PAGE_CREATE_ERROR_MESSAGE
					})
				}
			}, [r, c]),
			M = k.useCallback(function(a) {
				var d, e, g;
				r({
					type: "SET_IS_LOADING",
					value: !1
				});
				d = a == null ? void 0 : (d = a.page_create) == null ? void 0 : (d = d.page) == null ? void 0 : d.id;
				e = a == null ? void 0 : (e = a.page_create) == null ? void 0 : (e = e.page) == null ? void 0 : e.url;
				g = a == null ? void 0 : (g = a.page_create) == null ? void 0 : g.page_name_error;
				if (g != null && g !== "") L(null, g);
				else if (d != null && e != null) {
					c("create_success");
					r({
						type: "SET_IS_DIRTY",
						value: !1
					});
					if (f) {
						g = b("XCometLWIProductPickerControllerRouteBuilder").buildURL({
							entry_point: "www_comet_home_create_menu",
							page_id: d,
							selected_item: "CHOOSE_A_GOAL"
						});
						q({
							createAdRoute: g,
							isPageCreated: !0,
							pageRoute: e
						})
					}
					K(e);
					r({
						type: "SET_PUBLISHED_ID",
						value: d
					});
					r({
						type: "SET_HELPER_TEXT",
						value: null
					});
					D(s);
					F(u);
					B(v);
					b("cometPushToast").cometPushSimpleToast(b("PagesCometCreationStringUtils").getPageCreateSuccessMessage(v))
				} else {
					L(new Error(a == null ? void 0 : (g = a.page_create) == null ? void 0 : g.error_message))
				}
			}, [s, u, r, v, L, c, f, q]);
		I = function() {
			if (y == null) s != null ? (r({
				type: "SET_IS_LOADING",
				value: !0
			}), b("CometPageCreateMutation").cometPageCreateMutationAction(G, v, s, !0, u, e, M, L)) : b("recoverableViolation")("Category cannot be null when submitting page creation form", "core_biz_growth");
			else {
				r({
					type: "SET_IS_LOADING",
					value: !0
				});
				if (u !== E) {
					var a;
					c("description_change");
					b("PagesCometEditPageBlurbMutation").pageEditPageBlurbMutationAction((a = u) != null ? a : "", "PAGE_CREATION", "COMET", G, y, b("emptyFunction"), b("emptyFunction"))
				}
				v !== A && (c("name_change"), b("PagesCometAdminEditingPageNameMutation").pagesCometAdminEditingPageNameMutation("PAGE_CREATION", "COMET", G, y, v, b("emptyFunction"), b("emptyFunction")));
				s !== C && s != null && (c("category_change"), b("PagesCometAdminEditingTopicMutation").pageEditPageTopicMutationAction(s.map(function(a) {
					return a.getID()
				}), s.map(function(a) {
					return {
						id: a.getID(),
						title: a.getLabel()
					}
				}), "PAGE_CREATION", "COMET", G, y, b("emptyFunction"), b("emptyFunction")));
				D(s);
				F(u);
				B(v);
				R()
			}
		};
		var N = b("useCometDeferredDialog")(j),
			O = N[0],
			P = function() {
				y != null && J != null && (r({
					type: "SET_IS_DIRTY",
					value: !1
				}), c("save_success"), o.go(J, {
					replace: !0,
					target: "self"
				}))
			},
			Q = b("usePagesCometCoverPhotoUpdateMutation")(),
			R = function() {
				if (y != null) {
					var a = x == null ? void 0 : x.fbid;
					a == null && H == null && P();
					a != null && b("ProfileCometProfilePictureSetMutation").setProfilePicture(G, {
						caption: "",
						photoID: a,
						profileID: y,
						targetType: "page"
					}, {
						onCompleted: P,
						onError: L
					});
					if (H != null) {
						Q(P, L, (a = t == null ? void 0 : t.focusX) != null ? a : .5, (a = t == null ? void 0 : t.focusY) != null ? a : .5, y, H)
					}
				}
			};
		N = y == null ? b("PagesCometCreationStringUtils").CREATE_A_PAGE_TITLE : b("PagesCometCreationStringUtils").SET_UP_PAGE_TITLE;
		return k.jsx(b("CometCreationLayout.react"), {
			creationCategoryName: b("PagesCometCreationStringUtils").PAGES_TITLE,
			creationCategoryURL: b("XCometPageBrowserControllerRouteBuilder").buildURL({}),
			formAreaTitle: b("PagesCometCreationStringUtils").PAGE_CREATE_FORM_TITLE,
			formSteps: [{
				body: k.jsx(l, {
					dispatch: r,
					page: d,
					pageCreateLogger: c
				}),
				footer: k.jsx(m, {
					disabled: !z || p || w === "ERROR",
					onConfirm: I,
					page: d
				}),
				title: N,
				titleAddOn: k.jsx(b("TetraIcon.react"), {
					"aria-label": b("PagesCometCreationStringUtils").FORM_TITLE_ICON_LABEL,
					color: "secondary",
					icon: b("fbicon")._(g("479176"), 16),
					onPress: function() {
						return O({})
					}
				})
			}],
			preview: k.jsx(b("CometRelay").RelayEnvironmentProvider, {
				environment: b("PageCometCreationPreviewUtils").pagePreviewEnvironment,
				children: k.jsx(n, {
					page: d,
					pageID: a.pageID
				})
			}),
			previewAreaTitle: b("PagesCometCreationStringUtils").PREVIEW_TITLE,
			previewErrorFallback: function() {
				return k.jsx(b("TetraNullState.react"), {
					headline: b("PagesCometCreationStringUtils").CREATE_A_PAGE_TITLE,
					icon: b("NullStateFiles")
				})
			}
		})
	}
}), null);