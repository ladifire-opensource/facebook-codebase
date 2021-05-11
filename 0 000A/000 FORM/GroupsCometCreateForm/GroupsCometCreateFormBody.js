__d("GroupsCometCreateFormBody.react", ["fbt", "Actor", "CometCheckbox.react", "CometFormTextInput.react", "CometRelay", "CometRow.react", "CometRowItem.react", "GroupVisibility", "GroupsBulkInviteAsPageVoiceFunnelLogger", "GroupsCometBulkInviteFromPageVoiceTokenizer.react", "GroupsCometCreateFormBody_viewer.graphql", "GroupsCometDiscoverabilitySelector.react", "GroupsCometEventLinkedGroupInviteButton.react", "GroupsCometMemberManualInviteSelector.react", "GroupsCometMonthlyLimitReminderText.react", "GroupsCometPrivacySelector.react", "React", "getJSEnumSafe", "gkx", "useGroupsCometBulkInviteForPageSearchDataSource", "useGroupsCometCreationQPLPointLogger", "useGroupsCometMemberInviteForCreateForPageSearchDataSource", "useGroupsCometMemberInviteForCreateSearchDataSource"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = 75;

	function a(a) {
		var c, d, e, f, k = a.discoverabilityOptions,
			l = a.dispatch,
			m = a.group,
			n = m.discoverability,
			o = m.eventID,
			p = m.hasGroupNameError,
			q = m.hasPrivacyError,
			r = m.isFormValidated,
			s = m.isForum,
			t = m.isLoading,
			u = m.name,
			v = m.privacy;
		m = m.selectedUsers;
		var w = a.groupCreationLogger,
			x = a.pageVoiceBulkInviteLogger,
			y = a.privacyOptions,
			z = a.shouldBulkInvitePageFans;
		a = a.viewer$key;
		a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("GroupsCometCreateFormBody_viewer.graphql"), a);
		var A = b("useGroupsCometCreationQPLPointLogger")(),
			B = function(a) {
				l({
					type: "SET_NAME",
					value: a
				}), A("name_edited")
			},
			C = i.useState(!1),
			D = C[0],
			E = C[1];
		C = function(a) {
			l({
				type: "SET_SELECTED_USERS",
				value: a
			}), A("invite_list_edited")
		};
		var F = i.useState(!1),
			G = F[0],
			H = F[1];
		F = function(a) {
			w("groupcreate_change_privacy"), l({
				type: "SET_PRIVACY",
				value: a
			}), A("privacy_set")
		};
		var I = function(a) {
				w("groupcreate_change_visibility"), l({
					type: "SET_DISCOVERABILITY",
					value: a
				}), A("discoverability_edited")
			},
			J = 16,
			K = b("getJSEnumSafe")(b("GroupVisibility"), v == null ? void 0 : v.type) === 3,
			L = b("gkx")("1676581"),
			M = function() {
				return l({
					type: "SET_IS_FORUM",
					value: !s
				})
			};
		c = (a == null ? void 0 : (c = a.actor) == null ? void 0 : c.id) != null;
		var N = b("useGroupsCometMemberInviteForCreateSearchDataSource")(),
			O = b("Actor").useActor();
		O = O[0];
		d = (d = a == null ? void 0 : (d = a.actor) == null ? void 0 : d.id) != null ? d : O;
		O = b("useGroupsCometMemberInviteForCreateForPageSearchDataSource")({
			pageID: d
		});
		var P = b("useGroupsCometBulkInviteForPageSearchDataSource")({
			groupID: null,
			pageID: d
		});
		i.useEffect(function() {
			z && (x(b("GroupsBulkInviteAsPageVoiceFunnelLogger").PageVoiceInviteAction.CLICK_CREATE_LINKED_GROUP_G4P_CTA), x(b("GroupsBulkInviteAsPageVoiceFunnelLogger").PageVoiceInviteAction.SEE_G4P_GROUP_CREATION_WYSIWYG_FORM))
		}, [z, x]);
		c ? z ? P = P : P = O : P = N;
		O = i.useState(!0);
		N = O[0];
		O = O[1];
		e = (e = a == null ? void 0 : (e = a.actor) == null ? void 0 : e.maximum_bulk_invite_fans_per_month) != null ? e : 0;
		var Q;
		G = G || m.length > 0;
		f = (a == null ? void 0 : (f = a.actor) == null ? void 0 : (f = f.page_likers) == null ? void 0 : f.is_empty) === !1;
		c ? G ? Q = g._("M\u1eddi fan c\u1ee7a Trang") : Q = g._("M\u1eddi fan c\u1ee7a trang (kh\u00f4ng b\u1eaft bu\u1ed9c)") : G ? Q = g._("M\u1eddi b\u1ea1n b\u00e8") : Q = g._("M\u1eddi b\u1ea1n b\u00e8 (kh\u00f4ng b\u1eaft bu\u1ed9c)");
		G = c || ((G = a.can_have_friends) != null ? G : !0);
		var R = i.useCallback(function() {
			return p === !0 ? {
				reason: g._("Ch\u1ecdn t\u00ean nh\u00f3m."),
				type: "ERROR"
			} : {
				type: "CORRECT"
			}
		}, [p]);
		return i.jsxs(i.Fragment, {
			children: [i.jsx(b("CometRow.react"), {
				paddingHorizontal: J,
				testid: void 0,
				children: i.jsx(b("CometRowItem.react"), {
					expanding: !0,
					children: i.jsx(b("CometFormTextInput.react"), {
						autoComplete: "off",
						autoFocus: !0,
						disabled: t,
						label: D || u !== "" ? g._("T\u00ean nh\u00f3m") : g._("T\u00ean nh\u00f3m"),
						maxLength: j,
						onBlur: function() {
							return E(!1)
						},
						onFocus: function() {
							return E(!0)
						},
						onValueChange: B,
						validator: R,
						value: u
					})
				})
			}), i.jsx(b("CometRow.react"), {
				paddingHorizontal: J,
				testid: void 0,
				children: i.jsx(b("CometRowItem.react"), {
					expanding: !0,
					children: i.jsx(b("GroupsCometPrivacySelector.react"), {
						allOptions: y,
						currentPrivacyOption: v,
						disabled: t,
						hasError: q === !0 && r,
						onChange: F
					})
				})
			}), K && n && k ? i.jsx(b("CometRow.react"), {
				paddingHorizontal: J,
				testid: void 0,
				children: i.jsx(b("CometRowItem.react"), {
					expanding: !0,
					children: i.jsx(b("GroupsCometDiscoverabilitySelector.react"), {
						allOptions: k,
						currentDiscoverabilityOption: n,
						disabled: t,
						onChange: I
					})
				})
			}) : null, !N && o == null && i.jsx(b("CometRow.react"), {
				paddingHorizontal: J,
				paddingTop: 16,
				paddingVertical: 0,
				children: i.jsx(b("CometRowItem.react"), {
					expanding: !0,
					children: i.jsx(b("GroupsCometMonthlyLimitReminderText.react"), {
						canSelectAllBulkSuggestions: N,
						maxBulkInvitesPerMonth: e
					})
				})
			}), o != null ? i.jsx(b("GroupsCometEventLinkedGroupInviteButton.react"), {
				disabled: t,
				eventID: o,
				selectedUsers: m,
				setSelectedUsers: C
			}) : z && (a == null ? void 0 : a.actor) != null ? i.jsx(b("CometRow.react"), {
				paddingHorizontal: J,
				testid: void 0,
				children: i.jsx(b("CometRowItem.react"), {
					expanding: !0,
					children: i.jsx(b("GroupsCometBulkInviteFromPageVoiceTokenizer.react"), {
						dataSource: P,
						hasPageLikers: f,
						onChangeSelectInvites: C,
						page$key: a == null ? void 0 : a.actor,
						pageID: d,
						pageVoiceBulkInviteLogger: x,
						selectedInvites: m,
						setCanSelectAllBulkSuggestions: O
					})
				})
			}) : G ? i.jsx(b("CometRow.react"), {
				paddingHorizontal: J,
				testid: void 0,
				children: i.jsx(b("CometRowItem.react"), {
					expanding: !0,
					children: i.jsx(b("GroupsCometMemberManualInviteSelector.react"), {
						dataSource: P,
						disableContent: c && !f ? g._("Trang n\u00e0y ch\u01b0a c\u00f3 fan n\u00e0o \u0111\u1ec3 m\u1eddi. B\u1ea1n c\u00f3 th\u1ec3 t\u1ea1o nh\u00f3m ngay v\u00e0 m\u1eddi fan tr\u00ean Trang sau.") : null,
						disabled: t || c && !f,
						label: Q,
						onBlur: function() {
							return H(!1)
						},
						onChangeSelectInvites: C,
						onFocus: function() {
							return H(!0)
						},
						selectedInvites: m
					})
				})
			}) : null, L && i.jsx(b("CometRow.react"), {
				paddingHorizontal: J,
				children: i.jsx(b("CometRowItem.react"), {
					expanding: !0,
					children: i.jsx(b("CometCheckbox.react"), {
						checked: s,
						disabled: K || t,
						label: g._("[FB-ONLY] Is forum"),
						name: "isForum",
						onChange: M,
						value: "isForum"
					})
				})
			})]
		})
	}
}), null);