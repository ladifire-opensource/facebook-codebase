__d("MessengerServerPayloadTransformer.bs", ["fbt", "URI", "FBID.bs", "bs_array", "bs_string",
 "bs_js_dict", "bs_js_json", "getByPath", "bs_caml_array", "ChatConfig", 
 "MercuryIDs", "bs_belt_Option", "bs_caml_format", "bs_caml_option", "CurrentUser", 
 "GenderConst", "bs_js_null_undefined", "DisplayGenderConst", "MessagingThreadType", 
 "isMessengerDotComURI", "WorkForeignEntityType", "MercuryParticipantTypes", "MessengerGroupAdminType", 
 "MessengerGroupsSyncStatus.bs", "MessengerGroupThreadSubType", "MessengerMessageTransformer.bs", 
 "MessengerAttachmentTransformer.bs", "MessengerGroupAdminModelStatus.bs", "MessengerObjectAssociationType", 
 "MessageThreadUnsendabilityStatus.bs", "MessengerThreadCannotReplyReason", 
 "MessengerThreadCannotReplyReason.bs"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h;

	function i(a) {
		var c = a.location_coordinates;
		c = c == null ? [null, null] : [c.latitude, c.longitude];
		var d = a.location_page,
			e;
		if (d == null) e = null;
		else {
			d = d.address;
			e = d == null ? null : d.full_address
		}
		d = a.allows_rsvp ? 1 : 0;
		var f = b("bs_array").fold_left(function(a, b) {
				a[b.node.id] = b.guest_list_state;
				return a
			}, {}, a.event_reminder_members.edges),
			g = a.lightweight_event_creator;
		return {
			creator_id: g == null ? null : g.id,
			event_members: f,
			event_time: a.time,
			event_type: a.lightweight_event_type,
			latitude: c[0],
			longitude: c[1],
			location_address: e,
			location_name: a.location_name,
			note: a.note,
			oid: a.id,
			related_event: a.related_event,
			repeat_mode: a.repeat_mode,
			seconds_to_notify_before: a.seconds_to_notify_before,
			status: a.lightweight_event_status,
			title: a.event_title,
			track_rsvp: d
		}
	}

	function j(a) {
		a = a.associated_object;
		if (a == null) return null;
		var c = a.action_link,
			d = a.profile_picture,
			e = a.group_general_chat,
			f = a.group_saves,
			g = a.verse_group_link;
		return {
			id: a.id,
			name: a.name,
			action_link: c == null ? null : b("CurrentUser").isWorkUser() ? c : new(h || (h = b("URI")))(c).setDomain("www.facebook.com"),
			profile_picture: d == null ? null : {
				uri: d.uri
			},
			group_general_chat: e == null ? null : {
				id: e.id
			},
			room_type: a.room_type,
			privacy_mode: a.privacy_mode,
			approval_mode_toggleable: a.approval_mode_toggleable,
			start_timestamp: a.start_timestamp,
			event_place: a.event_place,
			mentorship_program: a.mentorship_program,
			group_saves: f == null ? {
				count: 0
			} : {
				count: f.count
			},
			verse_group_link: g == null ? null : new(h || (h = b("URI")))(g).setDomain("www.facebook.com")
		}
	}

	function k(a) {
		a = a.related_page_thread;
		if (a == null) return null;
		var b = a.custom_thread_tags.nodes.map(function(a) {
				return {
					id: a.id,
					name: a.name,
					color: a.color
				}
			}),
			c = a.custom_thread_labels.nodes.map(function(a) {
				return {
					id: a.id,
					name: a.name,
					color: a.label_color
				}
			}),
			d = a.page;
		d = d == null ? null : d.id;
		return {
			flagged: a.is_flagged,
			pageID: d,
			customTags: b,
			customLabels: c
		}
	}

	function l(a) {
		var c = a.thread_key.other_user_id;
		if (c == null) return !1;
		a = a.all_participants.edges;
		return b("bs_array").fold_left(function(a, b) {
			b = b.node.messaging_actor;
			if (b.id === c) return b.__typename === "User";
			else return a
		}, !1, a)
	}

	function m(a) {
		if (a.length === 0) return null;
		var b = {};
		a.forEach(function(a) {
			var c = a.nickname;
			if (!(c == null)) {
				b[a.participant_id] = c;
				return
			}
		});
		return b
	}

	function n(a) {
		return "#" + b("bs_string").sub(a, 2, a.length - 2 | 0)
	}

	function o(a) {
		if (a == null || a === "") return null;
		else return n(a)
	}

	function a(a) {
		return a.thread_key.thread_fbid
	}

	function c(a) {
		return a.thread_key.other_user_id
	}

	function d(a) {
		return b("bs_caml_option").nullable_to_opt(b("getByPath")(a, ["messages", "page_info"]))
	}

	function e(a) {
		var c = b("CurrentUser").isWorkUser() ? g._("Ng\u01b0\u1eddi d\u00f9ng Workplace") : g._("Ng\u01b0\u1eddi d\u00f9ng Facebook");
		return {
			id: "fbid:" + a,
			fbid: b("FBID.bs").ofStringExn(a),
			gender: b("GenderConst").UNKNOWN_SINGULAR,
			href: null,
			image_src: null,
			square_image_src: null,
			big_image_src: null,
			name: c,
			short_name: c,
			user_type: null,
			vanity: null,
			accepts_messenger_user_feedback: !1,
			is_friend: !1,
			is_viewer_managing_parent: !1,
			is_messenger_user: !1,
			is_aloha_proxy_confirmed: !1,
			is_business_enabled: !1,
			is_messenger_platform_bot: !1,
			is_messenger_ignored: null,
			is_messenger_blocked: !1,
			is_facebook_blocked: !0,
			is_subscribed_to_page_updates: !1,
			title: null,
			company_name: null,
			employee: !1,
			instant_game_channel: null,
			work_foreign_entity_info: null,
			timezone: null,
			wec_group_admins: [],
			wec_group_creation_time: null,
			wec_group_invite_link: null,
			wec_group_participant_count: null,
			wec_group_participants: [],
			verification_status: null
		}
	}

	function p(a) {
		var c = a.profile_picture_url;
		if (c == null) {
			var d = a.big_image_src;
			d = d == null ? null : d.uri
		} else d = c;
		c = a.gender;
		var e = a.url,
			f;
		if (e == null) f = null;
		else {
			var g = b("isMessengerDotComURI")(new(h || (h = b("URI")))(e));
			f = g ? new(h || (h = b("URI")))(e).getUnqualifiedURI().setDomain("www.facebook.com").setProtocol("https").toString() : e
		}
		g = a.__typename;
		var i;
		switch (g) {
			case "NeoApprovedUser":
				i = b("MercuryParticipantTypes").PARENT_APPROVED_USER;
				break;
			case "Page":
				i = b("MercuryParticipantTypes").PAGE;
				break;
			case "ReducedMessagingActor":
				i = b("MercuryParticipantTypes").GUEST;
				break;
			case "User":
				i = b("MercuryParticipantTypes").USER;
				break;
			default:
				i = null
		}
		e = a.accepts_messenger_user_feedback;
		g = a.is_viewer_friend;
		var j = a.is_viewer_managing_parent,
			k = a.is_messenger_user,
			l = a.is_aloha_proxy_confirmed,
			m = a.is_messenger_platform_bot,
			n = a.is_message_blocked_by_viewer,
			o = a.is_blocked_by_viewer,
			p = a.is_viewer_subscribed_to_message_updates,
			q = a.work_info,
			r;
		if (q == null) r = null;
		else {
			var s = q.work_community;
			s = s == null ? null : s.name;
			q = q.job_title;
			r = s == null ? q == null ? null : q : q == null || q.length === 0 ? s : "" + q + " \u2022 " + s
		}
		q = a.work_info;
		if (q == null) s = null;
		else {
			q = q.work_community;
			q = q == null ? null : q.name;
			var t = a.work_foreign_entity_info;
			s = q == null || t == null || t.type !== b("WorkForeignEntityType").FOREIGN ? null : q
		}
		t = a.is_employee;
		q = a.work_foreign_entity_info;
		var u = a.wec_group_creation_time,
			v = a.wec_group_invite_link,
			w = a.wec_group_participants,
			x = a.wec_group_participants,
			y = a.wec_group_admins;
		return {
			id: "fbid:" + a.id,
			fbid: a.id,
			gender: c == null ? b("GenderConst").NOT_A_PERSON : c === b("DisplayGenderConst").MALE ? b("GenderConst").MALE_SINGULAR : c === b("DisplayGenderConst").FEMALE ? b("GenderConst").FEMALE_SINGULAR : b("GenderConst").NOT_A_PERSON,
			href: f,
			image_src: d,
			square_image_src: null,
			big_image_src: d,
			name: a.name,
			short_name: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(a.short_name), a.name),
			user_type: i,
			vanity: a.username,
			accepts_messenger_user_feedback: e == null ? !1 : e,
			is_friend: g == null ? !1 : g,
			is_viewer_managing_parent: j == null ? !1 : j,
			is_messenger_user: k == null ? !1 : k,
			is_aloha_proxy_confirmed: l == null ? !1 : l,
			is_business_enabled: a.__typename === "Page",
			is_messenger_platform_bot: m == null ? !1 : m,
			is_messenger_ignored: null,
			is_messenger_blocked: n == null ? !1 : n,
			is_facebook_blocked: o == null ? !1 : o,
			is_subscribed_to_page_updates: p == null ? !0 : p,
			title: r,
			company_name: s,
			employee: t == null ? !1 : t,
			instant_game_channel: a.__typename === "Page" ? a.instant_game_channel : null,
			work_foreign_entity_info: q == null ? null : q,
			timezone: null,
			wec_group_creation_time: u == null ? null : u,
			wec_group_invite_link: v == null ? null : v,
			wec_group_participant_count: w == null ? null : w.count,
			wec_group_participants: x == null ? [] : x.nodes.map(function(a) {
				return {
					id: b("MercuryIDs").getParticipantIDFromUserID(a.messaging_actor.id),
					name: a.messaging_actor.name
				}
			}),
			wec_group_admins: y == null ? [] : y.nodes.map(function(a) {
				return {
					id: b("MercuryIDs").getParticipantIDFromUserID(a.messaging_actor.id),
					name: a.messaging_actor.name
				}
			}),
			verification_status: a.verification_status
		}
	}

	function q(a) {
		return a.all_participants.edges.map(function(a) {
			return p(a.node.messaging_actor)
		})
	}

	function r(a, c) {
		c = c.read_receipts;
		if (c == null) return;
		var d = {};
		c.nodes.forEach(function(c) {
			var e = c.actor;
			if (!(e == null) && a !== e.id) {
				d[e.id] = {
					action: b("bs_caml_format").caml_float_of_string(c.action),
					watermark: b("bs_caml_format").caml_float_of_string(c.watermark)
				};
				return
			}
		});
		return b("bs_caml_option").some(d)
	}

	function s(a) {
		a = a.delivery_receipts;
		if (a == null) return [];
		else return a.nodes.sort(function(a, c) {
			a = b("bs_caml_format").caml_float_of_string(a.timestamp_precise);
			c = b("bs_caml_format").caml_float_of_string(c.timestamp_precise);
			if (a > c) return -1;
			else if (a === c) return 0;
			else return 1
		})
	}

	function t(a, c, d) {
		var e = c.messages;
		if (!(e == null)) return e.nodes.map(function(e) {
			return b("MessengerMessageTransformer.bs").transformMessage(a, e, {
				thread_id: null,
				thread_fbid: c.thread_key.thread_fbid,
				other_user_fbid: c.thread_key.other_user_id,
				folder: c.folder.toLowerCase()
			}, d)
		})
	}

	function u(a, c, d) {
		var e = c.last_message.nodes.map(function(d) {
				var f = b("MessengerMessageTransformer.bs").unsafeCastBlobAttachments(d),
					a = d.extensible_attachment,
					g;
				if (a == null) g = null;
				else {
					var h = a.story_attachment,
						i = a.genie_attachment,
						c;
					if (i == null) c = null;
					else {
						i = i.genie_message;
						var e;
						if (i == null) e = null;
						else {
							i = i.story_attachment;
							e = {
								story_attachment: i == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(i)
							}
						}
						c = {
							genie_message: e
						}
					}
					g = {
						legacy_attachment_id: a.legacy_attachment_id,
						story_attachment: h == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(h),
						genie_attachment: c
					}
				}
				return {
					message_id: d.message_id,
					snippet: d.snippet,
					message_sender: d.message_sender,
					timestamp_precise: d.timestamp_precise,
					commerce_message_type: d.commerce_message_type,
					extensible_attachment: g,
					blob_attachments: f,
					sticker: d.sticker,
					extensible_message_admin_text: d.extensible_message_admin_text,
					platform_xmd_encoded: d.platform_xmd_encoded,
					extensible_message_admin_text_type: d.extensible_message_admin_text_type,
					message_unsendability_status: d.message_unsendability_status
				}
			}),
			f = {
				id: c.id,
				thread_key: c.thread_key,
				name: c.name,
				all_participants: c.all_participants,
				last_message: {
					nodes: e
				},
				unread_count: c.unread_count,
				message_count: c.messages_count,
				image: c.image,
				square_image: c.square_image,
				updated_time_precise: c.updated_time_precise,
				mute_until: c.mute_until,
				is_pinned: c.is_pinned,
				is_pin_protected: c.is_pin_protected,
				is_viewer_subscribed: c.is_viewer_subscribed,
				is_other_recipient_page: c.is_other_recipient_page,
				is_canonical_neo_user: c.is_canonical_neo_user,
				thread_queue_enabled: c.thread_queue_enabled,
				folder: c.folder,
				unread_mentions_count: c.unread_mentions_count,
				has_viewer_archived: c.has_viewer_archived,
				is_page_follow_up: c.is_page_follow_up,
				is_page_unresponded_thread: c.is_page_unresponded_thread,
				cannot_reply_reason: c.cannot_reply_reason,
				can_viewer_report: c.can_viewer_report,
				composer_input_disabled: c.composer_input_disabled,
				ephemeral_ttl_mode: c.ephemeral_ttl_mode,
				customization_info: c.customization_info,
				thread_admins: c.thread_admins,
				approval_mode: c.approval_mode,
				joinable_mode: c.joinable_mode,
				thread_queue_metadata: c.thread_queue_metadata,
				event_reminders: c.event_reminders,
				montage_thread: c.montage_thread,
				last_read_receipt: c.last_read_receipt,
				related_page_thread: c.related_page_thread,
				rtc_call_data: c.rtc_call_data,
				associated_object: c.associated_object,
				reactions_mute_mode: c.reactions_mute_mode,
				mentions_mute_mode: c.mentions_mute_mode,
				privacy_mode: c.privacy_mode,
				customization_enabled: c.customization_enabled,
				thread_type: c.thread_type,
				group_thread_subtype: c.group_thread_subtype,
				thread_pin_timestamp: c.thread_pin_timestamp,
				page_unsubscribe_status: c.page_unsubscribe_status,
				participant_add_mode_as_string: c.participant_add_mode_as_string,
				participants_event_status: c.participants_event_status,
				marketplace_thread_data: c.marketplace_thread_data,
				page_comm_item: c.page_comm_item,
				group_approval_queue: c.group_approval_queue,
				admin_model_status_string: c.admin_model_status_string,
				groups_sync_status_string: c.groups_sync_status_string,
				work_groups_sync_metadata: c.work_groups_sync_metadata,
				pinned_messages: c.pinned_messages,
				description: c.description,
				joinable_link: c.joinable_link,
				linked_mentorship_programs: c.linked_mentorship_programs,
				theme: c.thread_theme,
				thread_connectivity_data: c.thread_connectivity_data,
				thread_unsendability_status: c.thread_unsendability_status,
				is_business_page_active: c.is_business_page_active,
				thread_associated_job_applications: c.thread_associated_job_applications,
				thread_associated_page_admin: c.thread_associated_page_admin,
				conversion_detection_data: c.conversion_detection_data,
				suggested_reply_data: c.suggested_reply_data
			};
		e = f.customization_info;
		var g;
		if (e == null) g = [null, null, null];
		else {
			var h = e.emoji;
			g = [o(e.outgoing_bubble_color), h == null ? null : {
				emoji: h
			}, m(e.participant_customizations)]
		}
		h = g[0];
		e = f.theme;
		if (e == null) h = [h, h, h, [], null, void 0, null, null];
		else {
			var p = e.reaction_pack,
				r;
			if (p == null) r = void 0;
			else {
				p = p.reaction_assets;
				r = p == null ? void 0 : p.nodes.map(function(a) {
					return {
						reactionName: a.reaction_name,
						reactionEmoji: a.reaction_emoji,
						keyframeAssetUri: a.keyframe_asset_uri,
						staticAssetUri: a.static_asset.uri
					}
				})
			}
			p = e.gradient_colors.length;
			var s = n(e.fallback_color),
				t = b("FBID.bs").ofString(e.id);
			t = t !== void 0 ? b("bs_caml_option").valFromOption(t) : null;
			if (p > 0 && b("ChatConfig").get("chat_tab_has_gradients")) {
				var u = e.gradient_colors.map(n);
				h = [s, b("bs_caml_array").get(u, 0), b("bs_caml_array").get(u, p - 1 | 0), u, t, r, e.accessibility_label, e.reverse_gradients_for_radial]
			} else h = [s, s, s, [], t, r, e.accessibility_label, e.reverse_gradients_for_radial]
		}
		p = f.page_comm_item;
		u = p == null ? [null, null, null, null, null, []] : [p.comm_status, p.comm_source_id, p.id, p.subtitle, p.comm_item_owners, p.comm_icon_type];
		s = f.last_message.nodes;
		t = s.length !== 0 ? b("bs_caml_option").some(s[0]) : void 0;
		r = f.last_read_receipt.nodes;
		e = r.length !== 0 ? b("bs_caml_option").some(r[0]) : void 0;
		if (t !== void 0) {
			p = b("bs_caml_option").valFromOption(t);
			s = b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
				extensible_attachment: p.extensible_attachment,
				blob_attachments: p.blob_attachments,
				sticker: p.sticker
			}, p.message_id, d)
		} else s = [];
		if (t !== void 0) {
			r = b("bs_caml_option").valFromOption(t).extensible_message_admin_text;
			if (r == null) p = null;
			else {
				d = r.game;
				p = d == null ? null : d.id
			}
		} else p = null;
		r = b("MessengerThreadCannotReplyReason.bs").fromName(f.cannot_reply_reason);
		d = f.thread_key.other_user_id;
		if (d == null) {
			var v = f.thread_key.thread_fbid;
			v = v == null ? null : v
		} else v = d;
		d = b("bs_array").fold_left(function(a, c) {
			a[c.id] = b("MessengerGroupAdminType").REGULAR_ADMIN;
			return a
		}, {}, f.thread_admins);
		d = b("bs_array").fold_left(function(a, c) {
			var d = c.node.messaging_actor.id;
			c = c.admin_type;
			var e = b("bs_js_dict").get(a, d);
			!(c == null) && e !== void 0 && (a[d] = c);
			return a
		}, d, f.all_participants.edges);
		var w = f.thread_queue_metadata,
			x = f.thread_type,
			y = f.group_thread_subtype,
			z = f.montage_thread,
			A = f.image,
			B = f.square_image,
			C = f.thread_key.other_user_id,
			D;
		if (t !== void 0) {
			var E = b("bs_caml_option").valFromOption(t).platform_xmd_encoded;
			if (E == null) D = !1;
			else {
				try {
					E = JSON.parse(E)
				} catch (a) {
					E = {}
				}
				E = b("bs_js_json").classify(E);
				D = typeof E === "number" || E.TAG !== 2 ? !1 : b("bs_js_dict").get(E._0, "landing_exp") !== void 0
			}
		} else D = !1;
		E = f.thread_queue_metadata;
		var F = f.event_reminders.nodes,
			G = f.name,
			H = f.associated_object,
			I;
		if (H == null) I = null;
		else {
			H = H.group_general_chat;
			I = H == null || v == null ? null : H.id === v ? b("MessengerObjectAssociationType").GENERAL_CHAT : b("MessengerObjectAssociationType").REGULAR_CHAT
		}
		H = f.rtc_call_data;
		var J;
		if (H == null) J = null;
		else {
			var K = H.initiator;
			J = {
				call_state: H.call_state,
				server_info_data: H.server_info_data,
				initiator_fbid: K == null ? null : b("bs_js_null_undefined").fromOption(b("FBID.bs").ofString(K.id))
			}
		}
		H = f.marketplace_thread_data;
		if (H == null) K = null;
		else {
			var L = H.for_sale_item,
				M;
			if (L == null) M = null;
			else {
				var N = L.formatted_price,
					O = L.location,
					P;
				if (O == null) P = null;
				else {
					O = O.reverse_geocode;
					P = {
						reverse_geocode: O == null ? null : {
							city: O.city,
							state: O.state
						}
					}
				}
				O = L.primary_photo;
				var Q;
				if (O == null) Q = null;
				else {
					O = O.image;
					Q = O == null ? null : O.uri
				}
				O = L.product_item;
				var R = L.product_item;
				M = {
					id: L.id,
					story_id: L.story_id,
					title: L.group_commerce_item_title,
					price: N == null ? null : N.text,
					location: P,
					c2c_shipping_eligible: L.c2c_shipping_eligible,
					is_pending: L.is_pending,
					is_shipping_offered: L.is_shipping_offered,
					is_sold: L.is_sold,
					inventory_count: L.inventory_count,
					delivery_types: L.delivery_types,
					image_uri: Q,
					is_commerce_post_item: O == null ? !1 : O.is_commerce_post_item,
					product_item_id: R == null ? null : R.id,
					url: L.url
				}
			}
			N = H.buyer;
			P = H.seller;
			Q = H.rating_state;
			O = H.seller;
			if (O == null) R = !1;
			else {
				L = O.marketplace_c2c_shipping_seller;
				R = L == null ? !1 : L.is_eligible
			}
			K = {
				for_sale_item: M,
				buyer_fbid: N == null ? null : N.id,
				seller_fbid: P == null ? null : P.id,
				is_eligible_to_rate: Q == null ? null : Q.is_eligible_to_rate,
				is_seller_eligible_for_shipping: R,
				seller_added_labels: H.seller_added_labels.map(function(a) {
					return {
						label_string: a.label_string,
						label_type: a.label_type
					}
				}),
				eligible_profile_selling_invoice_actions: H.eligible_profile_selling_invoice_actions,
				thread_fbid: v
			}
		}
		O = f.group_approval_queue;
		L = f.work_groups_sync_metadata;
		if (L == null) M = null;
		else {
			N = L.fb_group;
			M = N == null ? null : N
		}
		P = f.pinned_messages;
		Q = f.linked_mentorship_programs;
		R = f.thread_associated_job_applications;
		return {
			admins: d,
			approval_mode: f.approval_mode,
			approval_queue_ids: w == null ? [] : w.approval_requests.nodes.map(function(a) {
				return b("MercuryIDs").getParticipantIDFromUserID(b("FBID.bs").ofStringExn(a.id))
			}),
			can_reply: r === void 0,
			cannot_reply_reason: r !== void 0 ? b("bs_caml_option").valFromOption(r) : null,
			can_viewer_report: f.can_viewer_report,
			composer_input_disabled: f.composer_input_disabled,
			solid_color: h[0],
			header_color: h[1],
			footer_color: h[2],
			accessibility_label: h[6],
			reverse_gradients_for_radial: h[7],
			gradient_colors: h[3],
			theme_id: h[4],
			reactions: h[5],
			thread_connectivity_data: f.thread_connectivity_data,
			custom_like_icon: g[1],
			custom_nickname: g[2],
			customization_enabled: f.customization_enabled,
			thread_type: x == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingThreadType"), x)),
			group_thread_subtype: y == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessengerGroupThreadSubType"), y)),
			page_unsubscribe_status: f.page_unsubscribe_status,
			participant_add_mode: f.participant_add_mode_as_string,
			ephemeral_ttl_mode: f.ephemeral_ttl_mode,
			folder: f.folder.toLowerCase(),
			has_email_participant: r !== void 0 ? b("bs_caml_option").valFromOption(r) === b("MessengerThreadCannotReplyReason").HAS_EMAIL_PARTICIPANT : !1,
			has_montage: !(z == null),
			unread_mentions_count: f.unread_mentions_count,
			image_src: A == null ? null : A.uri,
			square_image_src: B == null ? null : B.uri,
			is_archived: f.has_viewer_archived,
			is_pinned: f.is_pinned,
			is_page_follow_up: f.is_page_follow_up,
			is_page_unresponded_thread: f.is_page_unresponded_thread,
			is_canonical_user: l(f),
			is_canonical: !(C == null),
			is_from_weak_entry_point: D,
			is_pin_protected: f.is_pin_protected,
			is_subscribed: f.is_viewer_subscribed,
			is_other_recipient_page: f.is_other_recipient_page,
			is_canonical_neo_user: f.is_canonical_neo_user,
			is_thread_queue_enabled: !(E == null),
			joinable_mode: {
				mode: b("bs_caml_format").caml_int_of_string(f.joinable_mode.mode),
				link: f.joinable_mode.link
			},
			last_message_timestamp: t !== void 0 ? b("bs_caml_format").caml_float_of_string(b("bs_caml_option").valFromOption(t).timestamp_precise) : 0,
			last_message_id: null,
			last_message_type: t !== void 0 ? b("bs_caml_option").valFromOption(t).commerce_message_type : null,
			last_message_admin_text_type: t !== void 0 ? b("bs_caml_option").valFromOption(t).extensible_message_admin_text_type : null,
			last_message_unsendability_status: t !== void 0 ? b("bs_caml_option").valFromOption(t).message_unsendability_status : null,
			last_read_timestamp: e !== void 0 ? b("bs_caml_format").caml_float_of_string(b("bs_caml_option").valFromOption(e).timestamp_precise) : 0,
			lightweight_event: F.length !== 0 ? i(F[0]) : null,
			lightweight_events: b("bs_array").fold_left(function(a, b) {
				a[b.id] = i(b);
				return a
			}, {}, f.event_reminders.nodes),
			message_count: f.message_count,
			mute_until: f.mute_until,
			name: G == null ? "" : G,
			object_association_type: I,
			other_user_fbid: f.thread_key.other_user_id,
			page_thread_info: k(f),
			participants: f.all_participants.edges.map(function(a) {
				return b("MercuryIDs").getParticipantIDFromUserID(a.node.messaging_actor.id)
			}),
			participants_event_status: f.participants_event_status,
			preloaded_participants: q(c),
			read_only: r !== void 0 ? b("bs_caml_option").valFromOption(r) === b("MessengerThreadCannotReplyReason").READ_ONLY : !1,
			recipients_loadable: r !== void 0 ? b("bs_caml_option").valFromOption(r) !== b("MessengerThreadCannotReplyReason").RECIPIENTS_NOT_LOADABLE : !0,
			server_timestamp: b("bs_caml_format").caml_float_of_string(f.updated_time_precise),
			snippet_attachments: s,
			snippet_sender: t !== void 0 ? b("MercuryIDs").getParticipantIDFromUserID(b("bs_caml_option").valFromOption(t).message_sender.messaging_actor.id) : null,
			snippet: t !== void 0 ? b("bs_caml_option").valFromOption(t).snippet : null,
			thread_fbid: v,
			thread_id: "",
			thread_pin_timestamp: f.thread_pin_timestamp,
			timestamp: b("bs_caml_format").caml_float_of_string(f.updated_time_precise),
			unread_count: f.unread_count,
			rtc_call_data: J,
			marketplace_thread_data: K,
			associated_object: j(f),
			reactions_mute_mode: f.reactions_mute_mode === "REACTIONS_NOT_MUTED" ? 0 : 1,
			mentions_mute_mode: f.mentions_mute_mode === "MENTIONS_NOT_MUTED" ? 0 : 1,
			comm_status: u[0],
			page_comm_item_id: u[2],
			comm_source_id: u[1],
			subtitle: u[3],
			comm_item_owners: u[4],
			comm_icon_type: u[5],
			group_approval_queue: O == null ? null : O.nodes,
			game_id: p,
			admin_model_status: b("MessengerGroupAdminModelStatus.bs").fromNullableString(f.admin_model_status_string),
			groups_sync_status: b("MessengerGroupsSyncStatus.bs").fromNullableString(f.groups_sync_status_string),
			work_associated_group: M,
			pinned_messages: P == null ? null : P.map(function(c) {
				var d = c.message;
				return {
					message_id: c.message_id,
					pinning_time: c.pinning_time,
					message: d == null ? null : b("MessengerMessageTransformer.bs").transformMessage(a, d, {
						thread_id: null,
						thread_fbid: f.thread_key.thread_fbid,
						other_user_fbid: f.thread_key.other_user_id,
						folder: f.folder.toLowerCase()
					}, !1)
				}
			}),
			description: f.description,
			joinable_link: f.joinable_link,
			linked_mentorship_programs: Q == null ? null : Q,
			thread_unsendability_status: b("MessageThreadUnsendabilityStatus.bs").fromNullableString(f.thread_unsendability_status),
			is_business_page_active: f.is_business_page_active,
			thread_associated_job_applications: R == null ? null : R,
			thread_associated_page_admin: f.thread_associated_page_admin,
			graphql_token: f.id,
			conversion_detection_data: f.conversion_detection_data,
			suggested_reply_data: f.suggested_reply_data
		}
	}
	f.getThreadFBID = a;
	f.getOtherUserID = c;
	f.getMessagePageInfo = d;
	f.getBlockedParticipant = e;
	f.transformParticipant = p;
	f.transformParticipants = q;
	f.transformReadReceipts = r;
	f.transformDeliveryReceipts = s;
	f.transformMessages = t;
	f.transformThread = u
}), null);