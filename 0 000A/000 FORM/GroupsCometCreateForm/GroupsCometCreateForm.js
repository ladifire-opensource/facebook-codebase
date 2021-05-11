__d("GroupsCometCreateForm.react", ["fbt", "CometCreationLayout.react", "CometRelay", "GroupsBulkInviteAsPageVoiceFunnelLogger", "GroupsCometCreateActorSelector.react", "GroupsCometCreateFormBody.react", "GroupsCometCreateFormFooter.react", "GroupsCometCreateForm_viewer.graphql", "GroupsCometCreatePreview.react", "GroupsCometCreatePreviewContext", "GroupsCometCreatePreviewUtils", "GroupsCometDefaultFormState", "GroupsCometFormReducer", "GroupsCometFormValidationUtils", "NullStatePeople", "QPLUserFlow", "React", "TetraNullState.react", "XCometCampusControllerRouteBuilder", "XCometGroupsTabControllerRouteBuilder", "cometPushToast", "unrecoverableViolation", "useCometRouteTracePolicy", "useCometRouterDispatcher", "useGroupsCometCreateMutation", "useGroupsCometCreationQPLPointLogger", "useGroupsCometFormExitConfirmation", "useOnBeforeUnload", "useQPLInstanceKey"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React");

	function a(a) {
		var c, d, e = a.groupCreationLogger,
			f = a.initialFormState,
			j = a.parentGroupID,
			k = a.referrer,
			l = a.shouldEnableCreateButtonAtBeginning;
		a = a.viewer$key;
		var m = b("useQPLInstanceKey")();
		i.useEffect(function() {
			b("QPLUserFlow").start(431630887, {
				instanceKey: m
			});
			return function() {
				b("QPLUserFlow").endCancel(431630887, {
					instanceKey: m
				})
			}
		}, [m]);
		var n = b("useGroupsCometCreationQPLPointLogger")(m);
		n("form_loaded");
		var o = b("useCometRouterDispatcher")();
		a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("GroupsCometCreateForm_viewer.graphql"), a);
		c = a == null ? void 0 : (c = a.actor) == null ? void 0 : c.id;
		if (o == null) throw b("unrecoverableViolation")("Route dispatcher is null during group creation", "groups_comet");
		var p = i.useReducer(b("GroupsCometFormReducer").reducer, f),
			q = p[0],
			r = p[1];
		p = q.actor;
		var s = q.coverPhoto,
			t = q.discoverability,
			u = q.eventID,
			v = q.isCoverPhotoLoading,
			w = q.isForum,
			x = q.isLoading,
			y = q.name,
			z = q.privacy,
			A = q.selectedUsers,
			B = z == null ? void 0 : z.discoverability_options;
		i.useEffect(function() {
			var a = b("GroupsCometDefaultFormState").getDefaultDiscoverability(B);
			a != null && (r({
				type: "SET_DISCOVERABILITY",
				value: a
			}), r({
				type: "SET_IS_FORUM",
				value: w && (z == null ? void 0 : z.value) === "PUBLIC"
			}))
		}, [B, r, w, z]);
		i.useEffect(function() {
			if (A.length === 0) return;
			e("3-groupcreate_addmember")
		}, [e, A]);
		i.useEffect(function() {
			if (y === "") return;
			e("groupcreate_add_groupname")
		}, [e, y]);
		b("useGroupsCometFormExitConfirmation")(q, f);
		f = i.useMemo(function() {
			var a = new Set(),
				b = new Set();
			A.forEach(function(c) {
				c.isSelectedBulkInvite() ? a.add(c.getKey()) : b.add(c.getKey())
			});
			return {
				bulkInvites: a,
				nonBulkInvites: b
			}
		}, [A]);
		var C = f.bulkInvites,
			D = f.nonBulkInvites;
		f = s == null ? void 0 : s.fbid;
		s = (s == null ? void 0 : s.focusX) != null && (s == null ? void 0 : s.focusY) != null ? {
			x: s.focusX,
			y: s.focusY
		} : null;
		var E = function(a) {
				e("4-groupcreate_create_failed");
				b("QPLUserFlow").endFailure(431630887, (a = a == null ? void 0 : a.name) != null ? a : "", {
					instanceKey: m
				});
				r({
					type: "SET_IS_LOADING",
					value: !1
				});
				b("cometPushToast").cometPushErrorToast({
					message: g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi t\u1ea1o nh\u00f3m.")
				})
			},
			F = (a == null ? void 0 : (d = a.actor) == null ? void 0 : (d = d.qe_check) == null ? void 0 : d.should_display_bulk_invites) === !0,
			G = b("GroupsBulkInviteAsPageVoiceFunnelLogger").useGroupsBulkInviteAsPageVoiceFunnelLogger((d = c) != null ? d : "", null);
		d = (a == null ? void 0 : (d = a.streamer_group_creation_options) == null ? void 0 : d.if_viewer_can_see_streamer_group_creation) != null;
		var H = function(a) {
				a = (a = a.create_group) == null ? void 0 : (a = a.group) == null ? void 0 : a.url;
				if (a == null) {
					E();
					throw b("unrecoverableViolation")("New group has no comet URL", "groups_comet")
				}
				G(b("GroupsBulkInviteAsPageVoiceFunnelLogger").PageVoiceInviteAction.CLICK_CREATE_BUTTON_IN_G4P_GROUP_CREATION, b("GroupsBulkInviteAsPageVoiceFunnelLogger").GroupsBulkInviteAsPageVoiceFunnelLogger.buildInvitationSuccessInDialogPayload(C.size, D.size));
				e("4-groupcreate_create_succeed");
				b("QPLUserFlow").endSuccess(431630887, {
					instanceKey: m
				});
				o.go(a, {
					replace: !0,
					target: "self"
				})
			},
			I = b("useGroupsCometCreateMutation")(y, D, t ? t.value : "ANYONE", z ? z.value : "PRIVATE", k, H, (t = c) != null ? t : null, E, f, s, w, C, j, u),
			J = i.useCallback(function() {
				var a = b("GroupsCometFormValidationUtils").validateGroup(q);
				r({
					type: "SET_ERRORS",
					value: a
				});
				r({
					type: "SET_IS_FORM_VALIDATED",
					value: !0
				});
				a.hasGroupNameError === !0 && n("group_name_validation_error");
				a.hasPrivacyError === !0 && n("privacy_validation_error");
				return a
			}, [r, q, n]);
		H = i.useCallback(function() {
			J()
		}, [J]);
		c = i.useCallback(function() {
			if (l) {
				var a = J();
				if (b("GroupsCometFormValidationUtils").hasError(a)) {
					e("groupcreate_called_without_required_info");
					return
				}
			}
			e("4-groupcreate_create_called");
			r({
				type: "SET_IS_LOADING",
				value: !0
			});
			n("form_submitted");
			I()
		}, [r, J, I, e, n, l]);
		b("useOnBeforeUnload")(function() {
			F && !x && G(b("GroupsBulkInviteAsPageVoiceFunnelLogger").PageVoiceInviteAction.CLOSE_GROUP_CREATION_WITHOUT_INVITING)
		});
		t = i.useMemo(function() {
			return {
				isPreview: !0
			}
		}, []);
		f = b("useCometRouteTracePolicy")() === "comet.colleges.campus.groups.create";
		s = f ? g._("Campus") : g._("Nh\u00f3m");
		j = f ? b("XCometCampusControllerRouteBuilder").buildURL({}) : b("XCometGroupsTabControllerRouteBuilder").buildURL({});
		return i.jsx(b("CometCreationLayout.react"), {
			actorSelector: i.jsx(b("GroupsCometCreateActorSelector.react"), {
				actor: p
			}),
			creationCategoryName: s,
			creationCategoryURL: j,
			formAreaTitle: g._("M\u1eabu t\u1ea1o nh\u00f3m"),
			formSteps: [{
				body: i.jsx(b("GroupsCometCreateFormBody.react"), {
					discoverabilityOptions: B,
					dispatch: r,
					group: q,
					groupCreationLogger: e,
					pageVoiceBulkInviteLogger: F ? G : function(a, b) {},
					privacyOptions: q.privacyOptions,
					referrer: k,
					shouldBulkInvitePageFans: F,
					viewer$key: a
				}),
				footer: i.jsx(b("GroupsCometCreateFormFooter.react"), {
					disabled: b("GroupsCometFormValidationUtils").hasError(q) || v,
					loading: x,
					onCreate: c,
					onRevealErrors: H,
					viewer$key: a
				}),
				title: d ? g._("T\u1ea1o nh\u00f3m ng\u01b0\u1eddi ph\u00e1t tr\u1ef1c ti\u1ebfp") : g._("T\u1ea1o nh\u00f3m")
			}],
			preview: i.jsx(b("CometRelay").RelayEnvironmentProvider, {
				environment: b("GroupsCometCreatePreviewUtils").groupPreviewEnvironment,
				children: i.jsx(b("GroupsCometCreatePreviewContext").Provider, {
					value: t,
					children: i.jsx(b("GroupsCometCreatePreview.react"), {
						group: q
					})
				})
			}),
			previewAreaTitle: g._("Xem tr\u01b0\u1edbc quy tr\u00ecnh t\u1ea1o nh\u00f3m"),
			previewErrorFallback: function() {
				return i.jsx(b("TetraNullState.react"), {
					headline: g._("T\u1ea1o nh\u00f3m"),
					icon: b("NullStatePeople")
				})
			}
		})
	}
}), null);