if (self.CavalryLogger) {
	CavalryLogger.start_js(["dubHD"]);
}

__d("MercuryAPIArgsSource", [], (function (a, b, c, d, e, f) {
	e.exports = {
		CHAT: "chat",
		JEWEL: "jewel",
		MERCURY: "mercury",
		MERCURYSYNC: "mercury_sync",
		WEBMESSENGER: "web_messenger",
		MESSENGER: "messenger"
	}
}), null);
__d("MercuryAudioType", [], (function (a, b, c, d, e, f) {
	e.exports = {
		FileAttachment: "file_attachment",
		AudioClip: "fb_voice_message",
		VoiceMessageWithTranscript: "fb_voice_message_with_transcript"
	}
}), null);
__d("MessageLiveLocationClientSyncProtocolStopReason", [], (function (a, b, c, d, e, f) {
	e.exports = {
		EXPIRED: 1,
		CANCELED: 2,
		ARRIVED: 3
	}
}), null);
__d("PageCommItemStatus", [], (function (a, b, c, d, e, f) {
	e.exports = {
		FOLLOW_UP: "FOLLOW_UP",
		DONE: "DONE",
		TODO: "TODO",
		SPAM: "SPAM",
		DELETED: "DELETED"
	}
}), null);
__d("MercurySyncHolesTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a() {
			this.$1 = {}
		}
		var c = a.prototype;
		c.log = function (a) {
			b("GeneratedLoggerUtils").log("logger:MercurySyncHolesLoggerConfig", this.$1, b("Banzai").BASIC, a)
		};
		c.logVital = function (a) {
			b("GeneratedLoggerUtils").log("logger:MercurySyncHolesLoggerConfig", this.$1, b("Banzai").VITAL, a)
		};
		c.logImmediately = function (a) {
			b("GeneratedLoggerUtils").log("logger:MercurySyncHolesLoggerConfig", this.$1, {
				signal: !0
			}, a)
		};
		c.clear = function () {
			this.$1 = {};
			return this
		};
		c.getData = function () {
			return babelHelpers["extends"]({}, this.$1)
		};
		c.updateData = function (a) {
			this.$1 = babelHelpers["extends"]({}, this.$1, a);
			return this
		};
		c.setDifference = function (a) {
			this.$1.difference = a;
			return this
		};
		c.setSeqID = function (a) {
			this.$1.seq_id = a;
			return this
		};
		c.setTopicType = function (a) {
			this.$1.topic_type = a;
			return this
		};
		return a
	}();
	c = {
		difference: !0,
		seq_id: !0,
		topic_type: !0
	};
	e.exports = a
}), null);
__d("MessengerWebGraphQLTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a() {
			this.$1 = {}
		}
		var c = a.prototype;
		c.log = function (a) {
			b("GeneratedLoggerUtils").log("logger:MessengerWebGraphQLLoggerConfig", this.$1, b("Banzai").BASIC, a)
		};
		c.logVital = function (a) {
			b("GeneratedLoggerUtils").log("logger:MessengerWebGraphQLLoggerConfig", this.$1, b("Banzai").VITAL, a)
		};
		c.logImmediately = function (a) {
			b("GeneratedLoggerUtils").log("logger:MessengerWebGraphQLLoggerConfig", this.$1, {
				signal: !0
			}, a)
		};
		c.clear = function () {
			this.$1 = {};
			return this
		};
		c.getData = function () {
			return babelHelpers["extends"]({}, this.$1)
		};
		c.updateData = function (a) {
			this.$1 = babelHelpers["extends"]({}, this.$1, a);
			return this
		};
		c.setErrorMessage = function (a) {
			this.$1.error_message = a;
			return this
		};
		c.setEvent = function (a) {
			this.$1.event = a;
			return this
		};
		c.setQueryParams = function (a) {
			this.$1.query_params = a;
			return this
		};
		return a
	}();
	c = {
		error_message: !0,
		event: !0,
		query_params: !0
	};
	e.exports = a
}), null);
__d("ThreadConnectivityStatusGraphQLType.bs", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = "UNCONNECTED";
	b = "IMPLICIT_OR_TWO_WAY_MESSAGING";
	f.unconnected = a;
	f.implicitOrTwoWayMessaging = b
}), null);
__d("ThreadConnectivityStatusGraphQLType.re", ["ThreadConnectivityStatusGraphQLType.bs"], (function (a, b, c, d, e, f) {
	a = b("ThreadConnectivityStatusGraphQLType.bs").unconnected;
	f.unconnected = a;
	c = b("ThreadConnectivityStatusGraphQLType.bs").implicitOrTwoWayMessaging;
	f.implicitOrTwoWayMessaging = c
}), null);
__d("getPageIDFromThreadID", ["FBIDCheck", "MercuryIDs"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		a = b("MercuryIDs").getUserIDFromThreadID(a);
		return !a || b("FBIDCheck").isUser_deprecated(a) ? null : a
	}
}), null);
__d("MessageRequestUtils", ["CurrentUser", "MercuryIDs", "MessagingTag", "ThreadConnectivityStatusGraphQLType.re", "getPageIDFromThreadID"], (function (a, b, c, d, e, f) {
	"use strict";
	f.isMessageRequest = a;
	f.isFiltered = c;
	f.shouldShowComposerPendingActions = d;
	f.shouldShowUnconnectedThreadInfoText = e;
	f.shouldSendTypingIndicators = g;

	function a(a) {
		return (a.folder === b("MessagingTag").PENDING || a.folder === b("MessagingTag").OTHER) && a.can_reply
	}

	function c(a) {
		return a.folder === b("MessagingTag").OTHER
	}

	function d(a) {
		return this.isMessageRequest(a) && (b("MercuryIDs").isGroupChat(a.thread_id) || !!b("getPageIDFromThreadID")(a.thread_id) || b("CurrentUser").isWorkUser())
	}

	function e(a) {
		var c;
		return !b("CurrentUser").isWorkUser() && b("CurrentUser").getID() !== a.other_user_fbid && ((c = a.thread_connectivity_data) == null ? void 0 : c.connectivity_status) === b("ThreadConnectivityStatusGraphQLType.re").unconnected && ((c = a.thread_connectivity_data) == null ? void 0 : c.first_sender_id) === a.other_user_fbid
	}

	function g(a) {
		if (!a) return !1;
		if (this.isMessageRequest(a)) return !1;
		return b("CurrentUser").isWorkUser() || b("MercuryIDs").isGroupChat(a.thread_id) ? !0 : ((a = a.thread_connectivity_data) == null ? void 0 : a.connectivity_status) === b("ThreadConnectivityStatusGraphQLType.re").implicitOrTwoWayMessaging
	}
}), null);
__d("MWChatDeleteMessageEventEmitter", ["BaseEventEmitter"], (function (a, b, c, d, e, f) {
	"use strict";
	f.emit = a;
	f.subscribe = c;
	var g = "deleteMessage",
		h = new(b("BaseEventEmitter"))();

	function a(a) {
		h.emit(g, a)
	}

	function c(a) {
		var b = h.addListener(g, a);
		return function () {
			return b.remove()
		}
	}
}), null);
__d("EmojiLikeConstants", ["EmojiStaticConfig"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("EmojiStaticConfig").sizeMap;
	f.sizeMap = a;
	c = Object.freeze({
		XSMALL: "xsmall",
		SMALL: "small",
		MEDIUM: "medium",
		LARGE: "large"
	});
	f.size = c;
	d = {
		dp16: "xsmall",
		dp32: "small",
		dp64: "medium",
		db64: "medium",
		dp128: "large"
	};
	f.sizeMapTransfer = d;
	e = Object.freeze({
		PICKER: "picker",
		HOT_LIKE: "hot_like"
	});
	f.source = e;
	b = [983040];
	f.FB_THUMBS_UP_EMOJI = b;
	a = "hot_emoji_source";
	f.SOURCE_TAG_PREFIX = a;
	c = "hot_emoji_size";
	f.TAG_PREFIX_NEW = c;
	d = "emoji_like";
	f.TAG_PREFIX_OLD = d;
	e = "\ud83d\udc4d";
	f.THUMBS_UP_EMOJI = e;
	b = [128077];
	f.THUMBS_UP_EMOJI_CODES = b
}), null);
__d("MercuryActionStatus", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		UNSENT: 0,
		SUCCESS: 1,
		UNCONFIRMED: 3,
		FAILED_UNKNOWN_REASON: 4,
		UNABLE_TO_CONFIRM: 5,
		RESENT: 6,
		RESENDING: 7,
		ERROR: 10
	});
	e.exports = a
}), null);
__d("MercuryActionType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		ADD_GROUP_ADMINS: "ma-type:add_group_admins",
		ADD_PARTICIPANTS: "ma-type:add-participants",
		ADS_CONVERSION_UPDATE: "ma-type:ads_conversion_update",
		APPROVAL_MODE: "ma-type:approval-mode",
		APPROVAL_QUEUE: "ma-type:approval-queue",
		BLOCK_STATUS_CHANGED: "ma-type:block-status-changed",
		BLURRED_IMAGE_STATUS: "ma-type:blurred-image-status",
		CANCEL_ATTACHMENT_PLACEHOLDER: "ma-type:cancel-attachment-placeholder",
		CHANGE_ARCHIVED_STATUS: "ma-type:change-archived-status",
		CHANGE_FLAG: "ma-type:change_flag",
		CHANGE_FOLDER: "ma-type:change-folder",
		CHANGE_MUTE_SETTINGS: "ma-type:change-mute-settings",
		CHANGE_PAGE_FOLLOW_UP_STATUS: "ma-type:change-page-follow-up-status",
		CHANGE_PINNED_STATUS: "ma-type:change-pinned-status",
		CHANGE_READ_STATUS: "ma-type:change_read_status",
		CONFIRM_ATTACHMENT_PLACEHOLDER: "ma-type:confirm-attachment-placeholder",
		CREATE_OMNI_M_SUGGESTIONS: "ma-type:create-omni-m-suggestions",
		CREATE_PAGE_ADMIN_NOTE: "ma-type:create-page-admin-note",
		DELETE_MESSAGES: "ma-type:delete-messages",
		DELETE_MONTAGE_MESSAGES: "ma-type:delete-montage-messages",
		DELETE_THREAD: "ma-type:delete-thread",
		DESCRIPTION_CHANGED: "ma-type:description-changed",
		EVENT_RSVP_CHANGED: "ma-type:event-rsvp-changed",
		GROUPS_SYNC_METADATA_UPDATE: "ma-type:groups-sync-metadata-update",
		GROUPS_SYNC_STATUS_CHANGED: "ma-type:groups-sync-status-changed",
		IS_PIN_PROTECTED: "ma-type:is_pin_protected",
		JOINABLE_MODE: "ma-type:joinable-mode",
		LIVE_LOCATION_UPDATE: "ma-type:live-location-update",
		LOG_MESSAGE: "ma-type:log-message",
		MARK_THREAD_SEEN: "ma-type:mark_thread_seen",
		MONTAGE_DIRECT_EXPIRE: "ma-type:montage-direct-expire",
		MOVE_PENDING_TO_INBOX: "ma-type:move_pending_to_inbox",
		MUTATE_TAGS: "ma-type:mutate_tags",
		NEW_MONTAGE_MESSAGE: "ma-type:new-montage-message",
		PIN_MESSAGE: "ma-type:pin-message",
		PROMOTE_GROUP_ADMINS: "ma-type:promote-group-admins",
		REACTION_UPDATE: "ma-type:reaction-update",
		REMOVE_GROUP_ADMINS: "ma-type:remove_group_admins",
		REMOVE_MESSAGE: "ma-type:remove-message",
		REPLACE_MESSAGE: "ma-type:replace-message",
		SEND_MESSAGE: "ma-type:send-message",
		SUGGESTED_REPLY_UPDATE: "ma-type:suggested_reply_update",
		UNPIN_MESSAGE: "ma-type:unpin-message",
		UNSUBSCRIBE_STATUS_UPDATE: "ma-type:unsubscribe-status-update",
		UNWRAP_MESSAGE: "ma-type:unwrap-message",
		UPDATE_COMM_ITEM_OWNER: "ma-type:update-comm-item-owner",
		UPDATE_COMM_STATUS: "ma-type:update-comm-status",
		UPDATE_CONNECTIVITY_STATUS: "ma-type:update-connectivity-status",
		UPDATE_CUSTOM_LIKE: "ma-type:update_custom_like",
		UPDATE_JOINABLE_LINK: "ma-type:update-joinable-link",
		UPDATE_RTC_CALL_DATA: "ma-type:update-rtc-call-data",
		UPDATE_SNIPPET: "ma-type:update-snippet",
		UPDATE_THREAD_THEME: "ma-type:update-thread-theme",
		USER_GENERATED_MESSAGE: "ma-type:user-generated-message"
	});
	e.exports = a
}), null);
__d("MercuryLogMessageType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		SUBSCRIBE: "log:subscribe",
		UNSUBSCRIBE: "log:unsubscribe",
		VIDEO_CALL: "log:video-call",
		PHONE_CALL: "log:phone-call",
		THREAD_NAME: "log:thread-name",
		THREAD_IMAGE: "log:thread-image",
		SERVER_ERROR: "log:error-msg",
		LIVE_LISTEN: "log:live-listen",
		WALLPAPER: "log:wallpaper",
		ORION: "log:orion",
		SWITCH_TO_WORK: "log:switch",
		PAGE_REPLY: "log:page-reply",
		GENERIC_ADMIN_TEXT: "log:generic-admin-text"
	});
	e.exports = a
}), null);
__d("MercuryMessageDeliveryState", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = Object.freeze({
		SENDING: 1,
		SENT: 2,
		DELIVERED: 3,
		ERROR: 0,
		UNKNOWN: -1
	});
	e.exports = a
}), null);
__d("MercuryPayloadSource", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		UNKNOWN: "unknown",
		CLIENT_CHANNEL_MESSAGE: "client_channel_message",
		CLIENT_SEND_MESSAGE: "client_send_message",
		CLIENT_CHANGE_ARCHIVED_STATUS: "client_change-archived_status",
		CLIENT_CHANGE_PINNED_MESSAGES: "client_change-pinned_messages",
		CLIENT_CHANGE_PINNED_STATUS: "client_change-pinned_status",
		CLIENT_CHANGE_PAGE_FOLLOW_UP_STATUS: "client_change_page_follow_up_status",
		CLIENT_CHANGE_FOLDER: "client_change_folder",
		CLIENT_CHANGE_MUTE_SETTINGS: "client_change_mute_settings",
		CLIENT_CHANGE_READ_STATUS: "client_change_read_status",
		CLIENT_CHANGE_CUSTOM_LIKE: "client_change_custom_like",
		CLIENT_MARK_THREAD_SEEN: "client_mark_thread_seen",
		CLIENT_ADD_PARTICIPANTS: "client_add_participants",
		CLIENT_FETCH_PARTICIPANTS: "client_fetch_participants",
		CLIENT_DELETE_MESSAGES: "client_delete_messages",
		CLIENT_DELETE_THREAD: "client_delete_thread",
		CLIENT_UPDATE_SNIPPET: "client_update_snippet",
		CLIENT_HANDLE_ERROR: "client_handle_error",
		CLIENT_CHANGE_FLAG: "client_change_flag",
		CLIENT_MOVE_PENDING_TO_INBOX: "client_move_pending_to_inbox",
		CLIENT_CREATE_PAGE_ADMIN_NOTE: "client_create_page_admin_note",
		CLIENT_UNWRAP_MESSAGE: "client_unwrap_message",
		CLIENT_UPDATE_COMM_STATUS: "client_update_comm_status",
		CLIENT_UPDATE_COMM_ITEM_OWNER: "client_update_comm_item_owner",
		CLIENT_CHANGE_SAVED_MESSAGE_STATUS: "client_update_saved_message_status",
		SERVER_INITIAL_DATA: "server_initial_data",
		SERVER_SEND_MESSAGE: "server_send_message",
		SERVER_CHANGE_ARCHIVED_STATUS: "server_change_archived_status",
		SERVER_CHANGE_PINNED_MESSAGES: "server_change-pinned_messages",
		SERVER_CHANGE_PINNED_STATUS: "server_change_pinned_status",
		SERVER_CHANGE_PAGE_FOLLOW_UP_STATUS: "server_change_page_follow_up_status",
		SERVER_CHANGE_READ_STATUS: "server_change_read_status",
		SERVER_MARK_FOLDER_READ: "server_mark_folder_read",
		SERVER_MARK_SEEN: "server_mark_seen",
		SERVER_FETCH_PARTICIPANTS: "server_fetch_participants",
		SERVER_FETCH_THREAD_INFO: "server_fetch_thread_info",
		SERVER_FETCH_THREADLIST_INFO: "server_fetch_threadlist_info",
		SERVER_STANDALONE_NOTIFICATIONS: "server_standalone_notifications",
		SERVER_THREAD_SYNC: "server_thread_sync",
		SERVER_TAB_PRESENCE: "server_tab_presence",
		SERVER_UNREAD_THREADS: "server_unread_threads",
		SERVER_UNSEEN_THREADS: "server_unseen_threads",
		SERVER_SEARCH: "server_search",
		SERVER_CHANGE_FLAG: "server_change_flag",
		SERVER_INVALIDATE_THREAD_STATE: "server_invalidate_thread_state",
		SERVER_INVALIDATE_GLOBAL_STATE: "server_invalidate_global_state"
	});
	e.exports = a
}), null);
__d("MercuryAssert", ["MercuryIDs"], (function (a, b, c, d, e, f) {
	f.isParticipantID = a;
	f.allParticipantIDs = c;
	f.isUserParticipantID = d;
	f.isEmailParticipantID = e;
	f.allThreadID = g;
	f.isThreadID = h;

	function a(a) {
		if (a == null) throw new Error("participant_id null/undefined");
		if (!b("MercuryIDs").isValid(a)) throw new Error("bad_participant_id " + a)
	}

	function c(a) {
		a.forEach(this.isParticipantID)
	}

	function d(a) {
		var c = b("MercuryIDs").tokenize(a);
		if (a == null) throw new Error("participant_id null/undefined");
		if (c.type != "fbid") throw new Error("bad_user_id " + a)
	}

	function e(a) {
		var c = b("MercuryIDs").tokenize(a);
		if (a == null) throw new Error("participant_id null/undefined");
		if (c.type != "email") throw new Error("bad_email_id " + a)
	}

	function g(a) {
		a.forEach(this.isThreadID)
	}

	function h(a) {
		if (a == null) throw new Error("participant_id null/undefined");
		if (!b("MercuryIDs").isValid(a)) throw new Error("bad_thread_id " + a)
	}
}), null);
__d("MercuryViewer", ["CurrentUser", "MercuryAssert"], (function (a, b, c, d, e, f) {
	"use strict";
	f.getID = a;
	f.isViewer = c;
	var g = "fbid:" + b("CurrentUser").getID();

	function a() {
		return g
	}

	function c(a) {
		b("MercuryAssert").isParticipantID(a);
		return a === g
	}
}), null);
__d("Utils.bs", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		if (a == null) return !1;
		else return a
	}

	function b(a) {
		if (a !== void 0) return a;
		else return !1
	}
	f.isTruthy = a;
	f.optionBoolToBool = b
}), null);
__d("bs_block", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, b) {
		b.tag = a;
		return b
	}
	f.__ = a
}), null);
__d("bs_caml_primitive", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, b) {
		if (a < b) return -1;
		else if (a === b) return 0;
		else return 1
	}

	function b(a, b) {
		if (a)
			if (b) return 0;
			else return 1;
		else if (b) return -1;
		else return 0
	}

	function c(a, b) {
		if (a === b) return 0;
		else if (a < b) return -1;
		else if (a > b || a === a) return 1;
		else if (b === b) return -1;
		else return 0
	}

	function d(a, b) {
		if (a === b) return 0;
		else if (a < b) return -1;
		else return 1
	}

	function g(a, b, c, d, e) {
		while (!0) {
			var f = c;
			if (f < d) {
				var g = a[f],
					h = b[f];
				if (g > h) return 1;
				else if (g < h) return -1;
				else {
					c = f + 1 | 0;
					continue
				}
			} else return e
		}
	}

	function e(a, b) {
		var c = a.length,
			d = b.length;
		if (c === d) return g(a, b, 0, c, 0);
		else if (c < d) return g(a, b, 0, c, -1);
		else return g(a, b, 0, d, 1)
	}

	function h(a, b) {
		var c = a.length,
			d = b.length;
		if (c === d) {
			d = a;
			a = b;
			b = 0;
			c = c;
			while (!0) {
				var e = b;
				if (e === c) return !0;
				else {
					var f = d[e],
						g = a[e];
					if (f === g) {
						b = e + 1 | 0;
						continue
					} else return !1
				}
			}
		} else return !1
	}

	function i(a, b) {
		if (a) return b;
		else return a
	}

	function j(a, b) {
		if (a < b) return a;
		else return b
	}

	function k(a, b) {
		if (a < b) return a;
		else return b
	}

	function l(a, b) {
		if (a < b) return a;
		else return b
	}

	function m(a, b) {
		if (a < b) return a;
		else return b
	}

	function n(a, b) {
		if (a < b) return a;
		else return b
	}

	function o(a, b) {
		if (a) return a;
		else return b
	}

	function p(a, b) {
		if (a > b) return a;
		else return b
	}

	function q(a, b) {
		if (a > b) return a;
		else return b
	}

	function r(a, b) {
		if (a > b) return a;
		else return b
	}

	function s(a, b) {
		if (a > b) return a;
		else return b
	}

	function t(a, b) {
		if (a > b) return a;
		else return b
	}
	var u = a,
		v = a;
	f.caml_bytes_compare = e;
	f.caml_bytes_equal = h;
	f.caml_int_compare = a;
	f.caml_bool_compare = b;
	f.caml_float_compare = c;
	f.caml_nativeint_compare = u;
	f.caml_string_compare = d;
	f.caml_int32_compare = v;
	f.caml_bool_min = i;
	f.caml_int_min = j;
	f.caml_float_min = k;
	f.caml_string_min = l;
	f.caml_nativeint_min = m;
	f.caml_int32_min = n;
	f.caml_bool_max = o;
	f.caml_int_max = p;
	f.caml_float_max = q;
	f.caml_string_max = r;
	f.caml_nativeint_max = s;
	f.caml_int32_max = t
}), null);
__d("bs_caml_obj", ["bs_block", "bs_caml_primitive", "bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = function (a, b) {
		for (var c in a) b(c)
	};

	function a(a, b) {
		b = new Array(b);
		b.tag = a;
		return b
	}

	function c(a) {
		if (Array.isArray(a)) {
			var b = a.length | 0,
				c = new Array(b);
			for (var d = 0, b = b - 1 | 0; d <= b; ++d) c[d] = a[d];
			c.tag = a.tag | 0;
			return c
		} else return Object.assign({}, a)
	}

	function d(a, c) {
		var d = a.length | 0;
		if (c <= 0 || c > d) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Obj.truncate"];
		if (d !== c) {
			for (var e = c, d = d - 1 | 0; e <= d; ++e) a[e] = 0;
			a.length = c;
			return 0
		} else return 0
	}

	function e(a) {
		return b("bs_block").__(250, [a])
	}

	function h(a) {
		a = [a];
		a.tag = 246;
		return a
	}
	var i = function (a, b) {
		for (var c in b) a[c] = b[c];
		return 0
	};

	function j(a, c) {
		while (!0) {
			var d = c,
				e = a;
			if (e === d) return 0;
			else {
				var f = typeof e,
					h = typeof d;
				switch (f) {
					case "boolean":
						if (h === "boolean") return b("bs_caml_primitive").caml_bool_compare(e, d);
						break;
					case "function":
						if (h === "function") throw [b("bs_caml_builtin_exceptions").invalid_argument, "compare: functional value"];
						break;
					case "number":
						if (h === "number") return b("bs_caml_primitive").caml_int_compare(e, d);
						break;
					case "string":
						if (h === "string") return b("bs_caml_primitive").caml_string_compare(e, d);
						else return 1;
					case "undefined":
						return -1;
					default:
				}
				switch (h) {
					case "string":
						return -1;
					case "undefined":
						return 1;
					default:
						if (f === "boolean") return 1;
						else if (h === "boolean") return -1;
						else if (f === "function") return 1;
						else if (h === "function") return -1;
						else if (f === "number")
							if (d === null || d.tag === 256) return 1;
							else return -1;
						else if (h === "number")
							if (e === null || e.tag === 256) return -1;
							else return 1;
						else if (e === null)
							if (d.tag === 256) return 1;
							else return -1;
						else if (d === null)
							if (e.tag === 256) return -1;
							else return 1;
						else {
							f = e.tag | 0;
							h = d.tag | 0;
							if (f === 250) {
								a = e[0];
								continue
							} else if (h === 250) {
								c = d[0];
								continue
							} else if (f === 256)
								if (h === 256) return b("bs_caml_primitive").caml_int_compare(e[1], d[1]);
								else return -1;
							else if (f === 248) return b("bs_caml_primitive").caml_int_compare(e[1], d[1]);
							else {
								if (f === 251) throw [b("bs_caml_builtin_exceptions").invalid_argument, "equal: abstract value"];
								if (f !== h)
									if (f < h) return -1;
									else return 1;
								else {
									f = e.length | 0;
									h = d.length | 0;
									if (f === h)
										if (Array.isArray(e)) {
											var i = e,
												k = d,
												l = 0,
												m = f;
											while (!0) {
												var n = l;
												if (n === m) return 0;
												else {
													var o = j(i[n], k[n]);
													if (o !== 0) return o;
													else {
														l = n + 1 | 0;
														continue
													}
												}
											}
										} else if (e instanceof Date && d instanceof Date) return e - d;
									else {
										o = e;
										n = d;
										l = {
											contents: void 0
										};
										i = {
											contents: void 0
										};
										var p = function (b, c) {
											var d = b[2],
												a = b[1];
											if (!Object.prototype.hasOwnProperty.call(a, c) || j(b[0][c], a[c]) > 0) {
												b = d.contents;
												if (b !== void 0 && c >= b) return 0;
												else {
													d.contents = c;
													return 0
												}
											} else return 0
										};
										k = [o, n, i];
										m = function (a) {
											return function (b) {
												return p(a, b)
											}
										}(k);
										k = [n, o, l];
										k = function (a) {
											return function (b) {
												return p(a, b)
											}
										}(k);
										g(o, m);
										g(n, k);
										o = l.contents;
										m = i.contents;
										if (o !== void 0)
											if (m !== void 0) return b("bs_caml_primitive").caml_string_compare(o, m);
											else return -1;
										else if (m !== void 0) return 1;
										else return 0
									} else if (f < h) {
										n = e;
										k = d;
										l = 0;
										i = f;
										while (!0) {
											o = l;
											if (o === i) return -1;
											else {
												m = j(n[o], k[o]);
												if (m !== 0) return m;
												else {
													l = o + 1 | 0;
													continue
												}
											}
										}
									} else {
										f = e;
										m = d;
										o = 0;
										l = h;
										while (!0) {
											n = o;
											if (n === l) return 1;
											else {
												k = j(f[n], m[n]);
												if (k !== 0) return k;
												else {
													o = n + 1 | 0;
													continue
												}
											}
										}
									}
								}
							}
						}
				}
			}
		}
	}

	function k(a, c) {
		while (!0) {
			var d = c,
				e = a;
			if (e === d) return !0;
			else {
				var f = typeof e;
				if (f === "string" || f === "number" || f === "boolean" || f === "undefined" || e === null) return !1;
				else {
					var h = typeof d;
					if (f === "function" || h === "function") throw [b("bs_caml_builtin_exceptions").invalid_argument, "equal: functional value"];
					if (h === "number" || h === "undefined" || d === null) return !1;
					else {
						f = e.tag | 0;
						h = d.tag | 0;
						if (f === 250) {
							a = e[0];
							continue
						} else if (h === 250) {
							c = d[0];
							continue
						} else if (f === 248) return e[1] === d[1];
						else {
							if (f === 251) throw [b("bs_caml_builtin_exceptions").invalid_argument, "equal: abstract value"];
							if (f !== h) return !1;
							else if (f === 256) return e[1] === d[1];
							else {
								h = e.length | 0;
								f = d.length | 0;
								if (h === f)
									if (Array.isArray(e)) {
										f = e;
										var i = d,
											j = 0;
										h = h;
										while (!0) {
											var l = j;
											if (l === h) return !0;
											else if (k(f[l], i[l])) {
												j = l + 1 | 0;
												continue
											} else return !1
										}
									} else if (e instanceof Date && d instanceof Date) return !(e > d || e < d);
								else {
									l = e;
									j = d;
									f = {
										contents: !0
									};
									i = function (a, b) {
										return function (c) {
											if (Object.prototype.hasOwnProperty.call(a, c)) return 0;
											else {
												b.contents = !1;
												return 0
											}
										}
									}(j, f);
									h = function (a, b, c) {
										return function (d) {
											if (!Object.prototype.hasOwnProperty.call(a, d) || !k(b[d], a[d])) {
												c.contents = !1;
												return 0
											} else return 0
										}
									}(l, j, f);
									g(l, i);
									f.contents && g(j, h);
									return f.contents
								} else return !1
							}
						}
					}
				}
			}
		}
	}

	function l(a, b) {
		if (b !== null) return k(a, b);
		else return a === b
	}

	function m(a, b) {
		if (b !== void 0) return k(a, b);
		else return a === b
	}

	function n(a, b) {
		if (b == null) return a === b;
		else return k(a, b)
	}

	function o(a, b) {
		return !k(a, b)
	}

	function p(a, b) {
		return j(a, b) >= 0
	}

	function q(a, b) {
		return j(a, b) > 0
	}

	function r(a, b) {
		return j(a, b) <= 0
	}

	function s(a, b) {
		return j(a, b) < 0
	}

	function t(a, b) {
		if (j(a, b) <= 0) return a;
		else return b
	}

	function u(a, b) {
		if (j(a, b) >= 0) return a;
		else return b
	}

	function v(a, b) {
		a.tag = b;
		return 0
	}
	f.caml_obj_block = a;
	f.caml_obj_dup = c;
	f.caml_obj_truncate = d;
	f.caml_lazy_make_forward = e;
	f.caml_lazy_make = h;
	f.caml_update_dummy = i;
	f.caml_compare = j;
	f.caml_equal = k;
	f.caml_equal_null = l;
	f.caml_equal_undefined = m;
	f.caml_equal_nullable = n;
	f.caml_notequal = o;
	f.caml_greaterequal = p;
	f.caml_greaterthan = q;
	f.caml_lessthan = s;
	f.caml_lessequal = r;
	f.caml_min = t;
	f.caml_max = u;
	f.caml_obj_set_tag = v
}), null);
__d("bs_js_dict", ["bs_caml_option"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		if (c in a) return b("bs_caml_option").some(a[c])
	}
	var g = function (a, b) {
		delete a[b];
		return 0
	};

	function c(a) {
		var b = Object.keys(a),
			c = b.length,
			d = new Array(c);
		for (var e = 0, c = c - 1 | 0; e <= c; ++e) {
			var f = b[e];
			d[e] = [f, a[f]]
		}
		return d
	}

	function d(a) {
		var b = Object.keys(a),
			c = b.length,
			d = new Array(c);
		for (var e = 0, c = c - 1 | 0; e <= c; ++e) d[e] = a[b[e]];
		return d
	}

	function e(a) {
		var b = {};
		a = a;
		while (!0) {
			var c = a;
			if (c) {
				var d = c[0];
				b[d[0]] = d[1];
				a = c[1];
				continue
			} else return b
		}
	}

	function h(a) {
		var b = {},
			c = a.length;
		for (var d = 0, c = c - 1 | 0; d <= c; ++d) {
			var e = a[d];
			b[e[0]] = e[1]
		}
		return b
	}

	function i(a, b) {
		var c = {},
			d = Object.keys(b),
			e = d.length;
		for (var f = 0, e = e - 1 | 0; f <= e; ++f) {
			var g = d[f];
			c[g] = a(b[g])
		}
		return c
	}
	f.get = a;
	f.unsafeDeleteKey = g;
	f.entries = c;
	f.values = d;
	f.fromList = e;
	f.fromArray = h;
	f.map = i
}), null);
__d("bs_js_json", ["bs_block", "bs_caml_option"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var c = typeof a;
		if (c === "string") return b("bs_block").__(0, [a]);
		else if (c === "number") return b("bs_block").__(1, [a]);
		else if (c === "boolean")
			if (a === !0) return 1;
			else return 0;
		else if (a === null) return 2;
		else if (Array.isArray(a)) return b("bs_block").__(3, [a]);
		else return b("bs_block").__(2, [a])
	}

	function c(a, b) {
		switch (b) {
			case 0:
				return typeof a === "string";
			case 1:
				return typeof a === "number";
			case 2:
				if (a !== null && typeof a === "object") return !Array.isArray(a);
				else return !1;
			case 3:
				return Array.isArray(a);
			case 4:
				return typeof a === "boolean";
			case 5:
				return a === null
		}
	}

	function d(a) {
		if (typeof a === "string") return a
	}

	function e(a) {
		if (typeof a === "number") return a
	}

	function g(a) {
		if (typeof a === "object" && !Array.isArray(a) && a !== null) return b("bs_caml_option").some(a)
	}

	function h(a) {
		if (Array.isArray(a)) return a
	}

	function i(a) {
		if (typeof a === "boolean") return a
	}

	function j(a) {
		if (a === null) return null
	}
	f.classify = a;
	f.test = c;
	f.decodeString = d;
	f.decodeNumber = e;
	f.decodeObject = g;
	f.decodeArray = h;
	f.decodeBoolean = i;
	f.decodeNull = j
}), null);
__d("MessengerMessage.bs", ["URI", "Utils.bs", "bs_js_dict", "bs_js_json", "bs_caml_obj", "bs_caml_option", "MercuryViewer", "bs_caml_primitive", "MercuryActionType", "MercuryActionStatus", "MercuryPayloadSource", "isMessengerDotComURI", "MercuryLogMessageType", "MercuryMessageDeliveryState"], (function (a, b, c, d, e, f) {
	"use strict";
	var g;

	function a(a, b, c, d, e, f) {
		b = {
			thread_id: b,
			thread_fbid: null,
			other_user_fbid: null,
			action_type: d,
			message_id: a,
			threading_id: null,
			offline_threading_id: null,
			author: c,
			author_email: "",
			ephemeral_ttl_mode: null,
			timestamp: e,
			is_unread: null,
			is_filtered_content: !1,
			is_filtered_content_bh: !1,
			is_filtered_content_account: !1,
			is_filtered_content_quasar: !1,
			is_filtered_content_invalid_app: !1,
			is_sponsored: !1,
			is_one_way_sent: !1,
			ad_id: null,
			ad_client_token: null,
			commerce_message_type: null,
			customizations: [],
			source: "",
			source_tags: [],
			m_suggestions: null,
			tags: [],
			is_spoof_warning: !1,
			folder: "inbox",
			platform_xmd: null,
			message_source: null,
			montage_reply_data: null,
			replied_to_message: null,
			skip_bump_thread: !1,
			profile_ranges: null,
			reactions: null,
			attachments: null,
			ranges: null,
			meta_ranges: null,
			status: null,
			log_message_type: null,
			log_message_data: null,
			log_message_body: null,
			raw_attachments: null,
			body: null,
			subject: null,
			has_attachment: null,
			creator_info: null,
			error_data: null,
			removed_timestamp: null,
			unsender: null,
			verse_group_role_xmd: null,
			message_unsendability_status: null,
			is_forwarded: !1,
			preview_attachments: null,
			sticker_id: null,
			mib_direct_message_data: null
		};
		return Object.assign(b, f)
	}

	function c(a) {
		var b = a.offline_threading_id;
		if (b == null) return !1;
		else return b === a.message_id
	}

	function d(a) {
		if (b("bs_caml_obj").caml_equal(a.action_type, b("MercuryActionType").USER_GENERATED_MESSAGE)) return !0;
		else {
			a = a.log_message_type;
			if (a == null) return !0;
			else return !(b("bs_caml_obj").caml_equal(a, b("MercuryLogMessageType").SUBSCRIBE) || b("bs_caml_obj").caml_equal(a, b("MercuryLogMessageType").UNSUBSCRIBE) || b("bs_caml_obj").caml_equal(a, b("MercuryLogMessageType").SERVER_ERROR) || b("bs_caml_obj").caml_equal(a, b("MercuryLogMessageType").LIVE_LISTEN))
		}
	}

	function e(a) {
		var c = a.ranges;
		if (c == null) return 0;
		else {
			c = c.map(function (c) {
				var a = c.entity;
				if (a == null) return c;
				else {
					var d = b("Utils.bs").isTruthy(a.external),
						e = a.url;
					if (d || e == null) return c;
					else {
						d = new(g || (g = b("URI")))(e);
						e = b("isMessengerDotComURI")(g.getRequestURI());
						var f = d.getDomain();
						return !(e && !(!(f == null) && f !== "")) ? c : Object.assign(Object.assign({}, c), {
							entity: Object.assign(Object.assign({}, a), {
								url: d.setProtocol("https").setDomain("www.facebook.com").toString()
							})
						})
					}
				}
			});
			Object.assign(a, {
				ranges: c
			});
			return 0
		}
	}

	function h(a) {
		if (b("bs_caml_obj").caml_equal(a, b("MercuryPayloadSource").UNKNOWN) || b("bs_caml_obj").caml_equal(a, b("MercuryPayloadSource").SERVER_INITIAL_DATA) || b("bs_caml_obj").caml_equal(a, b("MercuryPayloadSource").SERVER_FETCH_THREAD_INFO)) return !0;
		else return b("bs_caml_obj").caml_equal(a, b("MercuryPayloadSource").SERVER_THREAD_SYNC)
	}

	function i(a) {
		a = a.author;
		if (a == null) return !1;
		else return a === b("MercuryViewer").getID()
	}

	function j(a) {
		a = a.author;
		if (a == null) return !1;
		else return a !== b("MercuryViewer").getID()
	}

	function k(a) {
		a = a.status;
		if (a == null) return !1;
		else if (b("bs_caml_obj").caml_equal(a, b("MercuryActionStatus").UNSENT) || b("bs_caml_obj").caml_equal(a, b("MercuryActionStatus").UNCONFIRMED) || b("bs_caml_obj").caml_equal(a, b("MercuryActionStatus").UNABLE_TO_CONFIRM)) return !0;
		else return b("bs_caml_obj").caml_equal(a, b("MercuryActionStatus").RESENDING)
	}

	function l(a) {
		a = a.status;
		if (a == null) return !0;
		else return b("bs_caml_obj").caml_equal(a, b("MercuryActionStatus").SUCCESS)
	}

	function m(a, c) {
		return b("bs_caml_primitive").caml_float_compare(a.timestamp, c.timestamp)
	}

	function n(a) {
		a = a.status;
		if (a == null) return !1;
		else if (b("bs_caml_obj").caml_equal(a, b("MercuryActionStatus").FAILED_UNKNOWN_REASON) || b("bs_caml_obj").caml_equal(a, b("MercuryActionStatus").UNABLE_TO_CONFIRM)) return !0;
		else return b("bs_caml_obj").caml_equal(a, b("MercuryActionStatus").ERROR)
	}

	function o(a) {
		a = a.error_data;
		if (a == null) return;
		else return b("bs_caml_option").nullable_to_opt(a.description)
	}

	function p(a, c) {
		if (n(a)) return b("MercuryMessageDeliveryState").ERROR;
		else if (k(a)) return b("MercuryMessageDeliveryState").SENDING;
		else if (l(a))
			if (a.is_one_way_sent || a.timestamp > c) return b("MercuryMessageDeliveryState").SENT;
			else return b("MercuryMessageDeliveryState").DELIVERED;
		else return b("MercuryMessageDeliveryState").UNKNOWN
	}

	function q(a, b) {
		if (n(a)) return 4;
		else if (k(a)) return 1;
		else if (l(a))
			if (a.timestamp <= b && !a.is_one_way_sent) return 3;
			else return 2;
		else return 0
	}

	function r(a) {
		try {
			a = b("bs_caml_option").some(JSON.parse(a))
		} catch (b) {
			a = void 0
		}
		if (a !== void 0) {
			a = b("bs_js_json").classify(b("bs_caml_option").valFromOption(a));
			if (typeof a === "number" || a.tag !== 2) return;
			else {
				a = b("bs_js_dict").get(a[0], "persona");
				if (a !== void 0) {
					a = b("bs_js_json").classify(b("bs_caml_option").valFromOption(a));
					if (typeof a === "number" || a.tag !== 2) return;
					else return b("bs_caml_option").some(a[0])
				} else return
			}
		}
	}

	function s(a) {
		if (a == null) return null;
		else {
			a = a.platform_xmd;
			if (a == null) return null;
			else {
				a = r(a);
				if (a !== void 0) {
					a = b("bs_caml_option").valFromOption(a);
					var c = b("bs_js_dict").get(a, "id"),
						d = b("bs_js_dict").get(a, "name");
					a = b("bs_js_dict").get(a, "profile_picture_url");
					if (c !== void 0 && d !== void 0 && a !== void 0) return {
						id: b("bs_caml_option").valFromOption(c),
						name: b("bs_caml_option").valFromOption(d),
						profile_picture_url: b("bs_caml_option").valFromOption(a)
					};
					else return null
				} else return null
			}
		}
	}

	function t(a) {
		var c = a.log_message_type;
		if (!(c == null) && b("bs_caml_obj").caml_equal(c, b("MercuryLogMessageType").SERVER_ERROR)) return b("bs_caml_obj").caml_equal(a.action_type, b("MercuryActionType").LOG_MESSAGE);
		else return !1
	}

	function u(a, b) {
		var c = a.thread_fbid,
			d = a.other_user_fbid;
		a = a.is_from_iris;
		if (!(b == null) && b) return !1;
		if (!(c == null) || !(d == null) || a) return !0;
		else return !1
	}
	f.makeFakeMessage = a;
	f.isLocalMessage = c;
	f.isTitanMessage = d;
	f.finalizeRanges = e;
	f.shouldSortForPayloadSource = h;
	f.isOutbound = i;
	f.isInbound = j;
	f.isSending = k;
	f.isSent = l;
	f.compare = m;
	f.hasError = n;
	f.getError = o;
	f.getDeliveryState = p;
	f.getGutterItemStatus = q;
	f.getPersonaData = r;
	f.getPersona = s;
	f.isErrorLogMessage = t;
	f.hasServerTimestamp = u
}), null);
__d("DisplayGenderConst", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		UNKNOWN: "UNKNOWN",
		FEMALE: "FEMALE",
		MALE: "MALE",
		NEUTER: "NEUTER"
	});
	e.exports = a
}), null);
__d("bs_belt_Id", ["bs_curry"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		return a
	}

	function c(a) {
		a = a.cmp;
		a = b("bs_curry").__2(a);
		return {
			cmp: a
		}
	}

	function d(a) {
		return {
			cmp: a
		}
	}

	function e(a) {
		a = b("bs_curry").__2(a);
		return {
			cmp: a
		}
	}

	function g(a) {
		return a
	}

	function h(a) {
		var c = a.hash;
		c = b("bs_curry").__1(c);
		a = a.eq;
		a = b("bs_curry").__2(a);
		return {
			hash: c,
			eq: a
		}
	}

	function i(a, b) {
		return {
			hash: a,
			eq: b
		}
	}

	function j(a, c) {
		a = b("bs_curry").__1(a);
		c = b("bs_curry").__2(c);
		return {
			hash: a,
			eq: c
		}
	}
	f.MakeComparableU = a;
	f.MakeComparable = c;
	f.comparableU = d;
	f.comparable = e;
	f.MakeHashableU = g;
	f.MakeHashable = h;
	f.hashableU = i;
	f.hashable = j
}), null);
__d("FBID.bs", ["bs_belt_Id"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, b) {
		return b.localeCompare(a) | 0
	}
	e = b("bs_belt_Id").MakeComparable({
		cmp: a
	});

	function c(a) {
		return a
	}

	function d(a) {
		return a
	}
	b = e.cmp;
	f.cmp = b;
	f.compare = a;
	f.ofString = d;
	f.ofStringExn = c
}), null);
__d("MercuryParticipantTypes", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		USER: "user",
		THREAD: "thread",
		EVENT: "event",
		PAGE: "page",
		FRIEND: "friend",
		FB4C: "fb4c",
		NON_FRIEND: "non_friend",
		SERVICE: "service",
		GUEST: "guest",
		PARENT_APPROVED_USER: "parent_approved_user",
		MESSAGE: "message",
		ASSISTANT_TYPEAHEAD: "assistant_typeahead"
	});
	e.exports = a
}), null);
__d("MessageThreadUnsendabilityStatus", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		CAN_UNSEND: "can_unsend",
		DENY_FOR_SPECIFIC_IDS: "deny_for_specific_ids",
		DENY_IF_THREAD_CONTAINS_PAU: "deny_if_thread_contains_pau",
		DENY_IF_THREAD_CONTAINS_WORK_USER: "deny_if_thread_contains_work_user",
		DENY_IF_THREAD_CONTAINS_WORK_USER_FAILING_KILLSWITCH: "deny_if_thread_contains_work_user_failing_killswitch",
		DENY_IF_PAGE_THREAD: "deny_if_page_thread",
		DENY_IF_MARKETPLACE_THREAD: "deny_if_marketplace_thread",
		DENY_IF_CANNOT_LOAD_THREAD: "deny_if_cannot_load_thread",
		DENY_IF_CANONICAL_THREAD_CONTAINS_BLOCKED_USERS: "deny_if_canonical_thread_contains_blocked_users",
		DENY_IF_CANNOT_REPLY_TO_VIEWER_THREAD: "deny_if_cannot_reply_to_viewer_thread"
	});
	e.exports = a
}), null);
__d("MessageThreadUnsendabilityStatus.bs", ["MessageThreadUnsendabilityStatus"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		if (a == null) return null;
		else switch (a) {
			case "can_unsend":
				return b("MessageThreadUnsendabilityStatus").CAN_UNSEND;
			case "deny_for_specific_ids":
				return b("MessageThreadUnsendabilityStatus").DENY_FOR_SPECIFIC_IDS;
			case "deny_if_cannot_load_thread":
				return b("MessageThreadUnsendabilityStatus").DENY_IF_CANNOT_LOAD_THREAD;
			case "deny_if_marketplace_thread":
				return b("MessageThreadUnsendabilityStatus").DENY_IF_MARKETPLACE_THREAD;
			case "deny_if_page_thread":
				return b("MessageThreadUnsendabilityStatus").DENY_IF_PAGE_THREAD;
			case "deny_if_thread_contains_pau":
				return b("MessageThreadUnsendabilityStatus").DENY_IF_THREAD_CONTAINS_PAU;
			default:
				return null
		}
	}
	f.fromNullableString = a
}), null);
__d("MessagingThreadType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		ONE_TO_ONE: 1,
		GROUP: 2,
		ROOM: 3,
		MONTAGE: 4,
		MARKETPLACE: 5,
		FOLDER: 6,
		TINCAN_ONE_TO_ONE: 7,
		TINCAN_GROUP_DISAPPEARING: 8,
		CARRIER_MESSAGING_ONE_TO_ONE: 10,
		CARRIER_MESSAGING_GROUP: 11,
		TINCAN_ONE_TO_ONE_DISAPPEARING: 13,
		PAGE_FOLLOW_UP: 14
	});
	e.exports = a
}), null);
__d("MercuryAttachmentContentType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		PHOTO: "attach:image",
		VIDEO: "attach:video",
		MUSIC: "attach:music",
		VOICE: "attach:voice",
		TEXT: "attach:text",
		PDF: "attach:pdf",
		RICHTEXT: "attach:richtext",
		SPREADSHEET: "attach:spreadsheet",
		PRESENTATION: "attach:presentation",
		ARCHIVE: "attach:archive",
		MSWORD: "attach:ms:word",
		MSXLS: "attach:ms:xls",
		MSPPT: "attach:ms:ppt",
		ORION: "attach:orion",
		SHOERACK_INVITATION: "attach:shoerackinvite",
		UNKNOWN: "attach:unknown"
	});
	e.exports = a
}), null);
__d("MercuryAttachmentType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		AUDIO: "audio",
		ERROR: "error",
		FILE: "file",
		PHOTO: "photo",
		STICKER: "sticker",
		SHARE: "share",
		UNKNOWN: "unknown",
		VIDEO: "video",
		ANIMATED_IMAGE: "animated_image",
		EMOJI_LIKE: "emoji_like",
		GIFT: "gift",
		THIRDPARTYSTICKER: "third_party_sticker"
	});
	e.exports = a
}), null);
__d("MessageSharedMediaIDStore.bs", ["bs_js_dict"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = {};

	function a(a, b) {
		g[a] = b;
		return 0
	}

	function c(a) {
		a = b("bs_js_dict").get(g, a);
		if (a !== void 0) return a;
		else return null
	}
	f._store = g;
	f.setMessageIDForAttachmentID = a;
	f.getMessageIDForAttachmentID = c
}), null);
__d("LeadGenInfoFieldTypes", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		CUSTOM: "CUSTOM",
		CITY: "CITY",
		COMPANY_NAME: "COMPANY_NAME",
		COUNTRY: "COUNTRY",
		DOB: "DOB",
		EMAIL: "EMAIL",
		GENDER: "GENDER",
		FIRST_NAME: "FIRST_NAME",
		FULL_ADDRESS: "FULL_ADDRESS",
		FULL_NAME: "FULL_NAME",
		JOB_TITLE: "JOB_TITLE",
		LAST_NAME: "LAST_NAME",
		MARITIAL_STATUS: "MARITIAL_STATUS",
		PHONE: "PHONE",
		POST_CODE: "POST_CODE",
		PROVINCE: "PROVINCE",
		RELATIONSHIP_STATUS: "RELATIONSHIP_STATUS",
		STATE: "STATE",
		STREET_ADDRESS: "STREET_ADDRESS",
		ZIP: "ZIP",
		WORK_EMAIL: "WORK_EMAIL",
		MILITARY_STATUS: "MILITARY_STATUS",
		WORK_PHONE_NUMBER: "WORK_PHONE_NUMBER",
		STORE_LOOKUP: "STORE_LOOKUP",
		STORE_LOOKUP_WITH_TYPEAHEAD: "STORE_LOOKUP_WITH_TYPEAHEAD",
		DATE_TIME: "DATE_TIME",
		ID_CPF: "ID_CPF",
		ID_AR_DNI: "ID_AR_DNI",
		ID_CL_RUT: "ID_CL_RUT",
		ID_CO_CC: "ID_CO_CC",
		ID_EC_CI: "ID_EC_CI",
		ID_PE_DNI: "ID_PE_DNI",
		ID_MX_RFC: "ID_MX_RFC"
	});
	e.exports = a
}), null);
__d("MNCommerceBubbleType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		FB_RETAIL_RECEIPT: 1,
		FB_RETAIL_CANCELLATION: 2,
		FB_RETAIL_SHIPMENT: 3,
		FB_RETAIL_SHIPMENT_TRACKING_EVENT_ETA: 4,
		FB_RETAIL_SHIPMENT_TRACKING_EVENT_IN_TRANSIT: 5,
		FB_RETAIL_SHIPMENT_TRACKING_EVENT_OUT_FOR_DELIVERY: 6,
		FB_RETAIL_SHIPMENT_TRACKING_EVENT_DELAYED: 7,
		FB_RETAIL_SHIPMENT_TRACKING_EVENT_DELIVERED: 8,
		FB_RETAIL_SHIPMENT_FOR_UNSUPPORTED_CARRIER: 9,
		FB_RETAIL_SHIPMENT_ETA: 10,
		FB_RETAIL_NOW_IN_STOCK: 11,
		FB_RETAIL_AGENT_ITEM_SUGGESTION: 12,
		FB_RETAIL_AGENT_ITEM_RECEIPT: 13,
		FB_RETAIL_PROMOTIONAL_MSG: 14
	});
	e.exports = a
}), null);
__d("MNCommerceCallToActionType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		OPEN_NATIVE: 1,
		OPEN_URL: 2,
		POSTBACK: 4,
		ACCOUNT_LINK: 5,
		SHARE: 7,
		PAYMENT: 8,
		FACEBOOK_REPORT_A_PROBLEM: 9,
		NAVIGATION: 11,
		EXTENSIBLE_SHARE: 12,
		OPEN_PAGE_ABOUT: 14,
		OPEN_BRANDED_CAMERA: 15,
		OPEN_THREAD: 16,
		OPEN_MARKETPLACE_PROFILE_REPORT: 17,
		OPEN_DIRECT_SEND_VIEW: 18,
		BOOKING: 19,
		BOOKING_ADD_TO_CALENDAR: 20,
		ACCOUNT_UNLINK: 21,
		RATE_SELLER: 22,
		ROOMS_SPEAKEASY_INVITE: 23,
		ROOMS_SPEAKEASY_INTERESTED: 24,
		ROOMS_SPEAKEASY_EDIT: 25,
		ROOMS_SPEAKEASY_UNDO: 26,
		ROOMS_SPEAKEASY_CALLBACK: 27,
		ROOMS_SPEAKEASY_COPY_LINK: 32,
		FB_LOGIN: 28,
		FEEDBACK_SEND: 29,
		SHOPS_PDP: 30,
		OPEN_DIALOG: 31,
		SUBSCRIPTION_PRESELECT: 10,
		OPEN_REACT_NATIVE_MINI_APP: 13,
		OPEN_CANCEL_RIDE_MUTATION: 3,
		MANAGE_MESSAGES: 6
	});
	e.exports = a
}), null);
__d("P2PPaymentRequestStatus", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		INITED: 1,
		DECLINED: 2,
		TRANSFER_INITED: 3,
		TRANSFER_COMPLETED: 4,
		TRANSFER_FAILED: 5,
		CANCELED: 6,
		EXPIRED: 7
	});
	e.exports = a
}), null);
__d("P2PTransferStatus", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		PENDING_SENDER_MANUAL_REVIEW: 1,
		PENDING_SENDER_VERIFICATION: 2,
		CANCELED_SENDER_RISK: 3,
		PENDING_RECIPIENT_NUX: 4,
		CANCELED_DECLINED: 5,
		PENDING_RECIPIENT_VERIFICATION: 6,
		PENDING_RECIPIENT_MANUAL_REVIEW: 7,
		PENDING_RECIPIENT_PROCESSING: 8,
		PENDING_PUSH_FAIL: 9,
		CANCELED_RECIPIENT_RISK: 10,
		CANCELED_SYSTEM_FAIL: 11,
		CANCELED_EXPIRED: 12,
		COMPLETED: 13,
		INTERMEDIATE_PROCESSING: 14,
		PENDING_SENDER_INITED: 15,
		CANCELED_SAME_CARD: 16,
		PENDING_SENDER_VERIFICATION_PROCESSING: 17,
		PENDING_RECIPIENT_VERIFICATION_PROCESSING: 18,
		CANCELED_SENDER_CANCEL: 19,
		PENDING_SENDER_IDV_REVIEW: 20,
		PENDING_RECEIVER_IDV_REVIEW: 21,
		PENDING_RTS_REVIEW: 22,
		CANCELED_RTS_FAIL: 23
	});
	e.exports = a
}), null);
__d("PaymentModulesClient", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		DONATION_P4P: "donation_p4p",
		MOR_DONATIONS: "mor_donations",
		PPGF_DONATION: "ppgf_donation",
		DONATION_P4C: "donation_p4c",
		INSTANT_EXPERIENCES: "instant_experiences",
		BUSINESS_PLATFORM_COMMERCE: "business_platform_commerce",
		MESSENGER_OMNIM: "messenger_omnim",
		MESSENGER_PLATFORM: "messenger_platform",
		PAGES_COMMERCE: "pages_commerce",
		MESSAGING_COMMERCE: "messaging_commerce",
		SHIPPING_LABEL: "shipping_label",
		SYNCHRONOUS_COMPONENT_FLOW: "synchronous_component_flow",
		PAGES_SOLUTION: "pages_solution",
		CHECKOUT_EXPERIENCES: "checkout_experiences",
		C2C_CHECKOUT_EXPERIENCES: "c2c_checkout_experiences",
		MOBILE_TOP_UP: "mobile_top_up",
		MOCK: "mock",
		ADVERTISER_SUBSCRIPTION: "advertiser_subscription",
		NMOR_FB_BROWSER_PAY: "fb_browser_payment"
	});
	e.exports = a
}), null);
__d("ServicesCalendarSyncType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		CLIENT_ONLY: "client_only",
		NO_CALENDAR_SYNC: "no_calendar_sync",
		SERVER_CONTINUOUS: "server_continuous",
		SERVER_SINGLE: "server_single"
	});
	e.exports = a
}), null);
__d("bs_caml_int32", ["bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		if (c === 0) throw b("bs_caml_builtin_exceptions").division_by_zero;
		return a / c | 0
	}

	function c(a, c) {
		if (c === 0) throw b("bs_caml_builtin_exceptions").division_by_zero;
		return a % c
	}

	function d(a) {
		return (a & 255) << 8 | (a & 65280) >>> 8
	}

	function e(a) {
		return (a & 255) << 24 | (a & 65280) << 8 | (a & 16711680) >>> 8 | (a & 4278190080) >>> 24
	}
	var g = Math.imul || function (a, b) {
			b |= 0;
			return ((a >> 16) * b << 16) + (a & 65535) * b | 0
		},
		h = e;
	f.div = a;
	f.mod_ = c;
	f.caml_bswap16 = d;
	f.caml_int32_bswap = e;
	f.caml_nativeint_bswap = h;
	f.imul = g
}), null);
__d("bs_caml_utils", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = function (a, b) {
		if (b.repeat) return b.repeat(a);
		if (b.length == 0 || a == 0) return "";
		if (b.length * a >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
		var c = "";
		for (;;) {
			(a & 1) == 1 && (c += b);
			a >>>= 1;
			if (a == 0) break;
			b += b
		}
		return c
	};
	f.repeat = a
}), null);
__d("bs_caml_int64", ["bs_caml_int32", "bs_caml_utils", "bs_caml_primitive", "bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = [-2147483648, 0],
		h = [2147483647, 1],
		i = [0, 1],
		j = [0, 0],
		k = [-1, 4294967295];

	function l(a) {
		return (a & 2147483648) !== 0
	}

	function a(a) {
		var b = a[1];
		a = a[0];
		b = b + 1 & 4294967295;
		a = a + (b === 0 ? 1 : 0) & 4294967295;
		return [a, b >>> 0]
	}

	function m(a) {
		var b = (a[1] ^ -1) + 1 & 4294967295;
		a = (a[0] ^ -1) + (b === 0 ? 1 : 0) & 4294967295;
		return [a, b >>> 0]
	}

	function n(a, b, c) {
		var d = a[1],
			e = d + b & 4294967295;
		d = l(d) && (l(b) || !l(e)) || l(b) && !l(e) ? 1 : 0;
		b = a[0] + c + d & 4294967295;
		return [b, e >>> 0]
	}

	function o(a, b) {
		return n(a, b >>> 0, 0)
	}

	function p(a, b) {
		return n(a, b[1], b[0])
	}

	function q(a, b) {
		if (a[0] === b[0]) return a[1] === b[1];
		else return !1
	}

	function c(a, b) {
		if (b !== null) return q(a, b);
		else return !1
	}

	function d(a, b) {
		if (b !== void 0) return q(a, b);
		else return !1
	}

	function e(a, b) {
		if (b == null) return !1;
		else return q(a, b)
	}

	function r(a, b, c) {
		b = ((b ^ -1) + 1 & 4294967295) >>> 0;
		c = (c ^ -1) + (b === 0 ? 1 : 0) & 4294967295;
		return n(a, b, c)
	}

	function s(a, b) {
		return r(a, b[1], b[0])
	}

	function t(a, b) {
		if (b === 0) return a;
		else {
			var c = a[1];
			if (b >= 32) return [c << (b - 32 | 0), 0];
			else {
				a = c >>> (32 - b | 0) | a[0] << b;
				return [a, c << b >>> 0]
			}
		}
	}

	function u(a, b) {
		if (b === 0) return a;
		else {
			var c = a[0],
				d = b - 32 | 0;
			if (d === 0) return [0, c >>> 0];
			else if (d > 0) {
				var e = c >>> d;
				return [0, e >>> 0]
			} else {
				e = c >>> b;
				c = c << (-d | 0) | a[1] >>> b;
				return [e, c >>> 0]
			}
		}
	}

	function v(a, b) {
		if (b === 0) return a;
		else {
			var c = a[0];
			if (b < 32) {
				var d = c >> b;
				a = c << (32 - b | 0) | a[1] >>> b;
				return [d, a >>> 0]
			} else {
				d = c >> (b - 32 | 0);
				return [c >= 0 ? 0 : -1, d >>> 0]
			}
		}
	}

	function w(a) {
		if (a[0] !== 0 || a[1] !== 0) return !1;
		else return !0
	}

	function x(a, b) {
		while (!0) {
			var c = b,
				d = a,
				e, f = 0,
				h;
			if (d[0] !== 0 || d[1] !== 0) h = 3;
			else return j;
			if (h === 3)
				if (c[0] !== 0 || c[1] !== 0) f = 2;
				else return j;
			if (f === 2) {
				h = d[0];
				f = 0;
				h !== -2147483648 || d[1] !== 0 ? f = 3 : e = c[1];
				if (f === 3) {
					f = c[0];
					var i = d[1],
						k = 0;
					f !== -2147483648 || c[1] !== 0 ? k = 4 : e = i;
					if (k === 4) {
						k = c[1];
						if (h < 0)
							if (f < 0) {
								b = m(c);
								a = m(d);
								continue
							} else return m(x(m(d), c));
						else if (f < 0) return m(x(d, m(c)));
						else {
							d = h >>> 16;
							c = h & 65535;
							h = i >>> 16;
							i = i & 65535;
							var l = f >>> 16;
							f = f & 65535;
							var n = k >>> 16;
							k = k & 65535;
							var o, p, q, r = i * k;
							q = (r >>> 16) + h * k;
							p = q >>> 16;
							q = (q & 65535) + i * n;
							p = p + (q >>> 16) + c * k;
							o = p >>> 16;
							p = (p & 65535) + h * n;
							o = o + (p >>> 16);
							p = (p & 65535) + i * f;
							o = o + (p >>> 16);
							p = p & 65535;
							o = o + (d * k + c * n + h * f + i * l) & 65535;
							d = p | o << 16;
							k = r & 65535 | (q & 65535) << 16;
							return [d, k >>> 0]
						}
					}
				}
			}
			if ((e & 1) === 0) return j;
			else return g
		}
	}

	function y(a) {
		var c = b("bs_caml_int32").caml_int32_bswap(a[1]);
		a = b("bs_caml_int32").caml_int32_bswap(a[0]);
		return [c, a >>> 0]
	}

	function z(a, b) {
		return [a[0] ^ b[0], (a[1] ^ b[1]) >>> 0]
	}

	function A(a, b) {
		return [a[0] | b[0], (a[1] | b[1]) >>> 0]
	}

	function B(a, b) {
		return [a[0] & b[0], (a[1] & b[1]) >>> 0]
	}

	function C(a, b) {
		var c = b[0],
			d = a[0];
		if (d > c) return !0;
		else if (d < c) return !1;
		else return a[1] >= b[1]
	}

	function D(a, b) {
		return !q(a, b)
	}

	function E(a, b) {
		return !C(a, b)
	}

	function F(a, b) {
		if (a[0] > b[0]) return !0;
		else if (a[0] < b[0]) return !1;
		else return a[1] > b[1]
	}

	function G(a, b) {
		return !F(a, b)
	}

	function H(a, b) {
		if (C(a, b)) return b;
		else return a
	}

	function I(a, b) {
		if (F(a, b)) return a;
		else return b
	}

	function J(a) {
		return a[0] * 4294967296 + a[1]
	}

	function K(a) {
		if (isNaN(a) || !isFinite(a)) return j;
		else if (a <= -9223372036854776e3) return g;
		else if (a + 1 >= 9223372036854776e3) return h;
		else if (a < 0) return m(K(-a));
		else {
			var b = a / 4294967296 | 0;
			a = a % 4294967296 | 0;
			return [b, a >>> 0]
		}
	}

	function L(a) {
		var b = a[0],
			c = b >> 21;
		if (c === 0) return !0;
		else if (c === -1) return !(a[1] === 0 && b === (4292870144 | 0));
		else return !1
	}

	function M(a) {
		if (L(a)) return String(J(a));
		else if (a[0] < 0)
			if (q(a, g)) return "-9223372036854775808";
			else return "-" + M(m(a));
		else {
			var b = K(Math.floor(J(a) / 10)),
				c = b[1],
				d = b[0];
			a = r(r(a, c << 3, c >>> 29 | d << 3), c << 1, c >>> 31 | d << 1);
			c = a[1];
			d = a[0];
			if (c === 0 && d === 0) return M(b) + "0";
			else if (d < 0) {
				a = ((c ^ -1) + 1 & 4294967295) >>> 0;
				d = Math.ceil(a / 10);
				a = 10 * d - a;
				return M(r(b, d | 0, 0)) + String(a | 0)
			} else {
				d = c;
				a = Math.floor(d / 10);
				c = d - 10 * a;
				return M(o(b, a | 0)) + String(c | 0)
			}
		}
	}

	function N(a, c) {
		while (!0) {
			var d = c,
				e = a,
				f = 0,
				h;
			if (d[0] !== 0 || d[1] !== 0) h = 3;
			else throw b("bs_caml_builtin_exceptions").division_by_zero;
			if (h === 3) {
				h = e[0];
				if (h !== -2147483648)
					if (h !== 0 || e[1] !== 0) f = 2;
					else return j;
				else if (e[1] !== 0) f = 2;
				else if (q(d, i) || q(d, k)) return e;
				else if (q(d, g)) return i;
				else {
					h = v(e, 1);
					h = t(N(h, d), 1);
					var l;
					if (h[0] !== 0 || h[1] !== 0) l = 4;
					else if (d[0] < 0) return i;
					else return m(i);
					if (l === 4) {
						l = s(e, x(d, h));
						return p(h, N(l, d))
					}
				}
			}
			if (f === 2 && d[0] === -2147483648 && d[1] === 0) return j;
			h = d[0];
			if (e[0] < 0)
				if (h < 0) {
					c = m(d);
					a = m(e);
					continue
				} else return m(N(m(e), d));
			else if (h < 0) return m(N(e, m(d)));
			else {
				l = j;
				f = e;
				while (C(f, d)) {
					h = b("bs_caml_primitive").caml_float_max(1, Math.floor(J(f) / J(d)));
					e = Math.ceil(Math.log(h) / Math.LN2);
					e = e <= 48 ? 1 : Math.pow(2, e - 48);
					var n = K(h),
						o = x(n, d);
					while (o[0] < 0 || F(o, f)) h = h - e, n = K(h), o = x(n, d);
					w(n) && (n = i);
					l = p(l, n);
					f = s(f, o)
				}
				return l
			}
		}
	}

	function O(a, b) {
		return s(a, x(N(a, b), b))
	}

	function P(a, b) {
		var c = N(a, b);
		return [c, s(a, x(c, b))]
	}

	function Q(a, c) {
		var d = b("bs_caml_primitive").caml_nativeint_compare(a[0], c[0]);
		if (d === 0) return b("bs_caml_primitive").caml_nativeint_compare(a[1], c[1]);
		else return d
	}

	function R(a) {
		return [a < 0 ? -1 : 0, a >>> 0]
	}

	function S(a) {
		return a[1] | 0
	}

	function T(a) {
		var c = a[1];
		a = a[0];
		var d = function (a) {
			return (a >>> 0).toString(16)
		};
		if (a === 0 && c === 0) return "0";
		if (c !== 0)
			if (a !== 0) {
				var e = d(c),
					f = 8 - e.length | 0;
				if (f <= 0) return d(a) + e;
				else return d(a) + (b("bs_caml_utils").repeat(f, "0") + e)
			} else return d(c);
		else return d(a) + "00000000"
	}

	function U(a) {
		return [2147483647 & a[0], a[1]]
	}

	function V(a) {
		return function (a, b) {
			return new Float64Array(new Int32Array([a, b]).buffer)[0]
		}(a[1], a[0])
	}

	function W(a) {
		a = function (a) {
			return new Int32Array(new Float64Array([a]).buffer)
		}(a);
		return [a[1], a[0] >>> 0]
	}
	f.succ = a;
	f.min_int = g;
	f.max_int = h;
	f.one = i;
	f.zero = j;
	f.of_int32 = R;
	f.to_int32 = S;
	f.add = p;
	f.neg = m;
	f.sub = s;
	f.lsl_ = t;
	f.lsr_ = u;
	f.asr_ = v;
	f.is_zero = w;
	f.mul = x;
	f.xor = z;
	f.or_ = A;
	f.and_ = B;
	f.swap = y;
	f.ge = C;
	f.eq = q;
	f.neq = D;
	f.lt = E;
	f.gt = F;
	f.le = G;
	f.equal_null = c;
	f.equal_undefined = d;
	f.equal_nullable = e;
	f.min = H;
	f.max = I;
	f.to_float = J;
	f.of_float = K;
	f.div = N;
	f.mod_ = O;
	f.compare = Q;
	f.float_of_bits = V;
	f.bits_of_float = W;
	f.div_mod = P;
	f.to_hex = T;
	f.discard_sign = U;
	f.to_string = M
}), null);
__d("bs_caml_format", ["bs_caml_int32", "bs_caml_int64", "bs_caml_utils", "bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		if (a >= 65)
			if (a >= 97)
				if (a >= 123) return -1;
				else return a - 87 | 0;
		else if (a >= 91) return -1;
		else return a - 55 | 0;
		else if (a > 57 || a < 48) return -1;
		else return a - 48 | 0
	}

	function h(a) {
		switch (a) {
			case 0:
				return 8;
			case 1:
				return 16;
			case 2:
				return 10;
			case 3:
				return 2
		}
	}

	function i(a) {
		var b = 1,
			c = 2,
			d = 0,
			e = a.charCodeAt(d);
		switch (e) {
			case 43:
				d = d + 1 | 0;
				break;
			case 44:
				break;
			case 45:
				b = -1;
				d = d + 1 | 0;
				break;
			default:
		}
		if (a[d] === "0") {
			e = a.charCodeAt(d + 1 | 0);
			if (e >= 89)
				if (e >= 111) {
					if (e < 121) switch (e - 111 | 0) {
						case 0:
							c = 0;
							d = d + 2 | 0;
							break;
						case 6:
							d = d + 2 | 0;
							break;
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
						case 7:
						case 8:
							break;
						case 9:
							c = 1;
							d = d + 2 | 0;
							break
					}
				} else e === 98 && (c = 3, d = d + 2 | 0);
			else if (e !== 66) {
				if (e >= 79) switch (e - 79 | 0) {
					case 0:
						c = 0;
						d = d + 2 | 0;
						break;
					case 6:
						d = d + 2 | 0;
						break;
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 7:
					case 8:
						break;
					case 9:
						c = 1;
						d = d + 2 | 0;
						break
				}
			} else c = 3, d = d + 2 | 0
		}
		return [d, b, c]
	}

	function a(a) {
		var c = i(a),
			d = c[0],
			e = h(c[2]),
			f = 4294967295,
			j = a.length,
			k = d < j ? a.charCodeAt(d) : 0;
		k = g(k);
		if (k < 0 || k >= e) throw [b("bs_caml_builtin_exceptions").failure, "int_of_string"];
		var l = function (c, d) {
			while (!0) {
				var h = d,
					i = c;
				if (h === j) return i;
				else {
					var k = a.charCodeAt(h);
					if (k === 95) {
						d = h + 1 | 0;
						continue
					} else {
						k = g(k);
						if (k < 0 || k >= e) throw [b("bs_caml_builtin_exceptions").failure, "int_of_string"];
						i = e * i + k;
						if (i > f) throw [b("bs_caml_builtin_exceptions").failure, "int_of_string"];
						d = h + 1 | 0;
						c = i;
						continue
					}
				}
			}
		};
		c = c[1] * l(k, d + 1 | 0);
		l = c | 0;
		if (e === 10 && c !== l) throw [b("bs_caml_builtin_exceptions").failure, "int_of_string"];
		return l
	}

	function c(a) {
		var c = i(a),
			d = c[2],
			e = c[0],
			f = b("bs_caml_int64").of_int32(h(d));
		c = b("bs_caml_int64").of_int32(c[1]);
		var j;
		switch (d) {
			case 0:
				j = [536870911, 4294967295];
				break;
			case 1:
				j = [268435455, 4294967295];
				break;
			case 2:
				j = [429496729, 2576980377];
				break;
			case 3:
				j = [2147483647, 4294967295];
				break
		}
		var k = a.length;
		d = e < k ? a.charCodeAt(e) : 0;
		d = b("bs_caml_int64").of_int32(g(d));
		if (b("bs_caml_int64").lt(d, [0, 0]) || b("bs_caml_int64").ge(d, f)) throw [b("bs_caml_builtin_exceptions").failure, "int64_of_string"];
		var l = function (c, d) {
			while (!0) {
				var e = d,
					h = c;
				if (e === k) return h;
				else {
					var i = a.charCodeAt(e);
					if (i === 95) {
						d = e + 1 | 0;
						continue
					} else {
						i = b("bs_caml_int64").of_int32(g(i));
						if (b("bs_caml_int64").lt(i, [0, 0]) || b("bs_caml_int64").ge(i, f) || b("bs_caml_int64").gt(h, j)) throw [b("bs_caml_builtin_exceptions").failure, "int64_of_string"];
						h = b("bs_caml_int64").add(b("bs_caml_int64").mul(f, h), i);
						d = e + 1 | 0;
						c = h;
						continue
					}
				}
			}
		};
		c = b("bs_caml_int64").mul(c, l(d, e + 1 | 0));
		l = b("bs_caml_int64").or_(c, [0, 0]);
		if (b("bs_caml_int64").eq(f, [0, 10]) && b("bs_caml_int64").neq(c, l)) throw [b("bs_caml_builtin_exceptions").failure, "int64_of_string"];
		return l
	}

	function j(a) {
		switch (a) {
			case 0:
				return 8;
			case 1:
				return 16;
			case 2:
				return 10
		}
	}

	function k(a) {
		if (a >= 65 && a <= 90 || a >= 192 && a <= 214 || a >= 216 && a <= 222) return a + 32 | 0;
		else return a
	}

	function l(a) {
		var c = a.length;
		if (c > 31) throw [b("bs_caml_builtin_exceptions").invalid_argument, "format_int: format too long"];
		var d = {
				justify: "+",
				signstyle: "-",
				filter: " ",
				alternate: !1,
				base: 2,
				signedconv: !1,
				width: 0,
				uppercase: !1,
				sign: 1,
				prec: -1,
				conv: "f"
			},
			e = 0;
		while (!0) {
			var f = e;
			if (f >= c) return d;
			else {
				var g = a.charCodeAt(f),
					h = 0;
				if (g >= 69)
					if (g >= 88)
						if (g >= 121) h = 1;
						else switch (g - 88 | 0) {
								case 0:
									d.base = 1;
									d.uppercase = !0;
									e = f + 1 | 0;
									continue;
								case 13:
								case 14:
								case 15:
									h = 5;
									break;
								case 12:
								case 17:
									h = 4;
									break;
								case 23:
									d.base = 0;
									e = f + 1 | 0;
									continue;
								case 29:
									d.base = 2;
									e = f + 1 | 0;
									continue;
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
								case 6:
								case 7:
								case 8:
								case 9:
								case 10:
								case 11:
								case 16:
								case 18:
								case 19:
								case 20:
								case 21:
								case 22:
								case 24:
								case 25:
								case 26:
								case 27:
								case 28:
								case 30:
								case 31:
									h = 1;
									break;
								case 32:
									d.base = 1;
									e = f + 1 | 0;
									continue
							} else if (g >= 72) h = 1;
							else {
								d.signedconv = !0;
								d.uppercase = !0;
								d.conv = String.fromCharCode(k(g));
								e = f + 1 | 0;
								continue
							}
				else switch (g) {
					case 35:
						d.alternate = !0;
						e = f + 1 | 0;
						continue;
					case 32:
					case 43:
						h = 2;
						break;
					case 45:
						d.justify = "-";
						e = f + 1 | 0;
						continue;
					case 46:
						d.prec = 0;
						var i = f + 1 | 0;
						while (function (b) {
								return function () {
									var c = a.charCodeAt(b) - 48 | 0;
									return c >= 0 && c <= 9
								}
							}(i)()) d.prec = (b("bs_caml_int32").imul(d.prec, 10) + a.charCodeAt(i) | 0) - 48 | 0, i = i + 1 | 0;
						e = i;
						continue;
					case 33:
					case 34:
					case 36:
					case 37:
					case 38:
					case 39:
					case 40:
					case 41:
					case 42:
					case 44:
					case 47:
						h = 1;
						break;
					case 48:
						d.filter = "0";
						e = f + 1 | 0;
						continue;
					case 49:
					case 50:
					case 51:
					case 52:
					case 53:
					case 54:
					case 55:
					case 56:
					case 57:
						h = 3;
						break;
					default:
						h = 1
				}
				switch (h) {
					case 1:
						e = f + 1 | 0;
						continue;
					case 2:
						d.signstyle = String.fromCharCode(g);
						e = f + 1 | 0;
						continue;
					case 3:
						d.width = 0;
						i = f;
						while (function (b) {
								return function () {
									var c = a.charCodeAt(b) - 48 | 0;
									return c >= 0 && c <= 9
								}
							}(i)()) d.width = (b("bs_caml_int32").imul(d.width, 10) + a.charCodeAt(i) | 0) - 48 | 0, i = i + 1 | 0;
						e = i;
						continue;
					case 4:
						d.signedconv = !0;
						d.base = 2;
						e = f + 1 | 0;
						continue;
					case 5:
						d.signedconv = !0;
						d.conv = String.fromCharCode(g);
						e = f + 1 | 0;
						continue
				}
			}
		}
	}

	function m(a, b) {
		var c = a.justify,
			d = a.signstyle,
			e = a.filter,
			f = a.alternate,
			g = a.base,
			h = a.signedconv,
			i = a.width,
			j = a.uppercase;
		a = a.sign;
		var k = b.length;
		h && (a < 0 || d !== "-") && (k = k + 1 | 0);
		f && (g === 0 ? k = k + 1 | 0 : g === 1 && (k = k + 2 | 0));
		var l = "";
		if (c === "+" && e === " ")
			for (var m = k, n = i - 1 | 0; m <= n; ++m) l = l + e;
		h && (a < 0 ? l = l + "-" : d !== "-" && (l = l + d));
		f && g === 0 && (l = l + "0");
		f && g === 1 && (l = l + "0x");
		if (c === "+" && e === "0")
			for (var m = k, n = i - 1 | 0; m <= n; ++m) l = l + e;
		l = j ? l + b.toUpperCase() : l + b;
		if (c === "-")
			for (var h = k, a = i - 1 | 0; h <= a; ++h) l = l + " ";
		return l
	}

	function d(a, c) {
		if (a === "%d") return String(c);
		else {
			a = l(a);
			a = a;
			c = c;
			c = c < 0 ? a.signedconv ? (a.sign = -1, -c) : c >>> 0 : c;
			c = c.toString(j(a.base));
			if (a.prec >= 0) {
				a.filter = " ";
				var d = a.prec - c.length | 0;
				d > 0 && (c = b("bs_caml_utils").repeat(d, "0") + c)
			}
			return m(a, c)
		}
	}

	function n(a) {
		if (b("bs_caml_int64").lt(a, [0, 0])) {
			var c, d = [0, 10],
				e = (c = b("bs_caml_int64")).discard_sign(a);
			e = c.div_mod(e, d);
			d = c.div_mod(c.add([0, 8], e[1]), d);
			e = c.add(c.add([214748364, 3435973836], e[0]), d[0]);
			return c.to_string(e) + "0123456789" [c.to_int32(d[1])]
		} else return b("bs_caml_int64").to_string(a)
	}

	function o(a) {
		var c = "",
			d = [0, 8],
			e = "01234567";
		if (b("bs_caml_int64").lt(a, [0, 0])) {
			var f, g = (f = b("bs_caml_int64")).discard_sign(a);
			g = f.div_mod(g, d);
			var h = f.add([268435456, 0], g[0]);
			g = g[1];
			c = e[f.to_int32(g)] + c;
			while (b("bs_caml_int64").neq(h, [0, 0])) {
				f = b("bs_caml_int64").div_mod(h, d);
				h = f[0];
				g = f[1];
				c = e[b("bs_caml_int64").to_int32(g)] + c
			}
		} else {
			f = b("bs_caml_int64").div_mod(a, d);
			g = f[0];
			h = f[1];
			c = e[b("bs_caml_int64").to_int32(h)] + c;
			while (b("bs_caml_int64").neq(g, [0, 0])) {
				a = b("bs_caml_int64").div_mod(g, d);
				g = a[0];
				h = a[1];
				c = e[b("bs_caml_int64").to_int32(h)] + c
			}
		}
		return c
	}

	function e(a, c) {
		if (a === "%d") return b("bs_caml_int64").to_string(c);
		else {
			a = l(a);
			c = a.signedconv && b("bs_caml_int64").lt(c, [0, 0]) ? (a.sign = -1, b("bs_caml_int64").neg(c)) : c;
			var d = a.base,
				e;
			switch (d) {
				case 0:
					e = o(c);
					break;
				case 1:
					e = b("bs_caml_int64").to_hex(c);
					break;
				case 2:
					e = n(c);
					break
			}
			if (a.prec >= 0) {
				a.filter = " ";
				d = a.prec - e.length | 0;
				c = d > 0 ? b("bs_caml_utils").repeat(d, "0") + e : e
			} else c = e;
			return m(a, c)
		}
	}

	function p(a, b) {
		a = l(a);
		var c = a.prec < 0 ? 6 : a.prec,
			d = b < 0 ? (a.sign = -1, -b) : b;
		b = "";
		if (isNaN(d)) b = "nan", a.filter = " ";
		else if (isFinite(d)) {
			var e = a.conv;
			switch (e) {
				case "e":
					b = d.toExponential(c);
					e = b.length;
					b[e - 3 | 0] === "e" && (b = b.slice(0, e - 1 | 0) + ("0" + b.slice(e - 1 | 0)));
					break;
				case "f":
					b = d.toFixed(c);
					break;
				case "g":
					var f = c !== 0 ? c : 1;
					b = d.toExponential(f - 1 | 0);
					e = b.indexOf("e");
					c = Number(b.slice(e + 1 | 0)) | 0;
					if (c < -4 || d >= 1e21 || d.toFixed().length > f) {
						var g = e - 1 | 0;
						while (b[g] === "0") g = g - 1 | 0;
						b[g] === "." && (g = g - 1 | 0);
						b = b.slice(0, g + 1 | 0) + b.slice(e);
						g = b.length;
						b[g - 3 | 0] === "e" && (b = b.slice(0, g - 1 | 0) + ("0" + b.slice(g - 1 | 0)))
					} else {
						var h = f;
						if (c < 0) h = h - (c + 1 | 0) | 0, b = d.toFixed(h);
						else
							while (function () {
									b = d.toFixed(h);
									return b.length > (f + 1 | 0)
								}()) h = h - 1 | 0;
						if (h !== 0) {
							e = b.length - 1 | 0;
							while (b[e] === "0") e = e - 1 | 0;
							b[e] === "." && (e = e - 1 | 0);
							b = b.slice(0, e + 1 | 0)
						}
					}
					break;
				default:
			}
		} else b = "inf", a.filter = " ";
		return m(a, b)
	}
	var q = function (a, b, c) {
			if (!isFinite(a)) return isNaN(a) ? "nan" : a > 0 ? "infinity" : "-infinity";
			var d = a == 0 && 1 / a == -Infinity ? 1 : a >= 0 ? 0 : 1;
			d && (a = -a);
			var e = 0;
			if (!(a == 0))
				if (a < 1)
					while (a < 1 && e > -1022) a *= 2, e--;
				else
					while (a >= 2) a /= 2, e++;
			var f = e < 0 ? "" : "+",
				g = "";
			if (d) g = "-";
			else switch (c) {
				case 43:
					g = "+";
					break;
				case 32:
					g = " ";
					break;
				default:
					break
			}
			if (b >= 0 && b < 13) {
				d = Math.pow(2, b * 4);
				a = Math.round(a * d) / d
			}
			c = a.toString(16);
			if (b >= 0) {
				d = c.indexOf(".");
				if (d < 0) c += "." + "0".repeat(b);
				else {
					a = d + 1 + b;
					c.length < a ? c += "0".repeat(a - c.length) : c = c.substr(0, a)
				}
			}
			return g + "0x" + c + "p" + f + e.toString(10)
		},
		r = function (a, b) {
			var c = +a;
			if (a.length > 0 && c === c) return c;
			a = a.replace(/_/g, "");
			c = +a;
			if (a.length > 0 && c === c || /^[+-]?nan$/i.test(a)) return c;
			var d = /^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(a);
			if (d) {
				var e = d[3].replace(/0+$/, ""),
					f = parseInt(d[1] + d[2] + e, 16);
				d = (d[4] | 0) - 4 * e.length;
				c = f * Math.pow(2, d);
				return c
			}
			if (/^\+?inf(inity)?$/i.test(a)) return Infinity;
			if (/^-inf(inity)?$/i.test(a)) return -Infinity;
			throw b
		};

	function s(a) {
		return r(a, [b("bs_caml_builtin_exceptions").failure, "float_of_string"])
	}
	var t = d,
		u = d,
		v = a,
		w = a;
	f.caml_format_float = p;
	f.caml_hexstring_of_float = q;
	f.caml_format_int = d;
	f.caml_nativeint_format = t;
	f.caml_int32_format = u;
	f.caml_float_of_string = s;
	f.caml_int64_format = e;
	f.caml_int_of_string = a;
	f.caml_int32_of_string = v;
	f.caml_int64_of_string = c;
	f.caml_nativeint_of_string = w
}), null);
__d("bs_caml_bytes", ["bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		if (c < 0 || c >= a.length) throw [b("bs_caml_builtin_exceptions").invalid_argument, "index out of bounds"];
		return a[c]
	}

	function c(a, b, c, d) {
		if (c > 0) {
			for (var e = b, c = (c + b | 0) - 1 | 0; e <= c; ++e) a[e] = d;
			return 0
		} else return 0
	}

	function d(a) {
		if (a < 0) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.create"];
		var c = new Array(a);
		for (var d = 0, a = a - 1 | 0; d <= a; ++d) c[d] = 0;
		return c
	}

	function g(a, b, c, d, e) {
		if (e > 0)
			if (a === c) {
				var f = a,
					g = b,
					h = d,
					i = e;
				if (g < h) {
					var j = (f.length - h | 0) - 1 | 0,
						k = i - 1 | 0;
					k = j > k ? k : j;
					for (var j = k; j >= 0; --j) f[h + j | 0] = f[g + j | 0];
					return 0
				} else if (g > h) {
					k = (f.length - g | 0) - 1 | 0;
					j = i - 1 | 0;
					i = k > j ? j : k;
					for (var j = 0; j <= i; ++j) f[h + j | 0] = f[g + j | 0];
					return 0
				} else return 0
			} else {
				k = a.length - b | 0;
				if (e <= k) {
					for (var g = 0, h = e - 1 | 0; g <= h; ++g) c[d + g | 0] = a[b + g | 0];
					return 0
				} else {
					for (var j = 0, i = k - 1 | 0; j <= i; ++j) c[d + j | 0] = a[b + j | 0];
					for (var f = k, g = e - 1 | 0; f <= g; ++f) c[d + f | 0] = 0;
					return 0
				}
			}
		else return 0
	}

	function e(a) {
		var b = a,
			c = 0;
		a = a.length;
		var d = "",
			e = a;
		if (c === 0 && a <= 4096 && a === b.length) return String.fromCharCode.apply(null, b);
		else {
			c = 0;
			while (e > 0) {
				a = e < 1024 ? e : 1024;
				var f = new Array(a);
				g(b, c, f, 0, a);
				d = d + String.fromCharCode.apply(null, f);
				e = e - a | 0;
				c = c + a | 0
			}
			return d
		}
	}

	function h(a, b, c, d, e) {
		if (e > 0) {
			var f = a.length - b | 0;
			if (e <= f) {
				for (var g = 0, h = e - 1 | 0; g <= h; ++g) c[d + g | 0] = a.charCodeAt(b + g | 0);
				return 0
			} else {
				for (var g = 0, h = f - 1 | 0; g <= h; ++g) c[d + g | 0] = a.charCodeAt(b + g | 0);
				for (var g = f, b = e - 1 | 0; g <= b; ++g) c[d + g | 0] = 0;
				return 0
			}
		} else return 0
	}

	function i(a) {
		var b = a.length,
			c = new Array(b);
		for (var d = 0, b = b - 1 | 0; d <= b; ++d) c[d] = a.charCodeAt(d);
		return c
	}
	f.caml_create_bytes = d;
	f.caml_fill_bytes = c;
	f.get = a;
	f.bytes_to_string = e;
	f.caml_blit_bytes = g;
	f.caml_blit_string = h;
	f.bytes_of_string = i
}), null);
__d("bs_char", ["bs_caml_bytes", "bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		if (a < 0 || a > 255) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Char.chr"];
		return a
	}

	function c(a) {
		var c = 0;
		if (a >= 40)
			if (a !== 92) c = a >= 127 ? 1 : 2;
			else return "\\\\";
		else if (a >= 32)
			if (a >= 39) return "\\'";
			else c = 2;
		else if (a >= 14) c = 1;
		else switch (a) {
			case 8:
				return "\\b";
			case 9:
				return "\\t";
			case 10:
				return "\\n";
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 11:
			case 12:
				c = 1;
				break;
			case 13:
				return "\\r"
		}
		switch (c) {
			case 1:
				c = [0, 0, 0, 0];
				c[0] = 92;
				c[1] = 48 + (a / 100 | 0) | 0;
				c[2] = 48 + (a / 10 | 0) % 10 | 0;
				c[3] = 48 + a % 10 | 0;
				return b("bs_caml_bytes").bytes_to_string(c);
			case 2:
				c = [0];
				c[0] = a;
				return b("bs_caml_bytes").bytes_to_string(c)
		}
	}

	function d(a) {
		if (a >= 65 && a <= 90 || a >= 192 && a <= 214 || a >= 216 && a <= 222) return a + 32 | 0;
		else return a
	}

	function e(a) {
		if (a >= 97 && a <= 122 || a >= 224 && a <= 246 || a >= 248 && a <= 254) return a - 32 | 0;
		else return a
	}

	function g(a) {
		if (a >= 65 && a <= 90) return a + 32 | 0;
		else return a
	}

	function h(a) {
		if (a >= 97 && a <= 122) return a - 32 | 0;
		else return a
	}

	function i(a, b) {
		return a - b | 0
	}

	function j(a, b) {
		return (a - b | 0) === 0
	}
	f.chr = a;
	f.escaped = c;
	f.lowercase = d;
	f.uppercase = e;
	f.lowercase_ascii = g;
	f.uppercase_ascii = h;
	f.compare = i;
	f.equal = j
}), null);
__d("bs_bytes", ["bs_char", "bs_curry", "bs_caml_bytes", "bs_caml_primitive", "bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		var d = b("bs_caml_bytes").caml_create_bytes(a);
		b("bs_caml_bytes").caml_fill_bytes(d, 0, a, c);
		return d
	}

	function c(a, c) {
		var d = b("bs_caml_bytes").caml_create_bytes(a);
		for (var e = 0, a = a - 1 | 0; e <= a; ++e) d[e] = b("bs_curry")._1(c, e);
		return d
	}
	var g = [];

	function h(a) {
		var c = a.length,
			d = b("bs_caml_bytes").caml_create_bytes(c);
		b("bs_caml_bytes").caml_blit_bytes(a, 0, d, 0, c);
		return d
	}

	function d(a) {
		return b("bs_caml_bytes").bytes_to_string(h(a))
	}

	function e(a) {
		return h(b("bs_caml_bytes").bytes_of_string(a))
	}

	function i(a, c, d) {
		if (c < 0 || d < 0 || c > (a.length - d | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.sub / Bytes.sub"];
		var e = b("bs_caml_bytes").caml_create_bytes(d);
		b("bs_caml_bytes").caml_blit_bytes(a, c, e, 0, d);
		return e
	}

	function j(a, c, d) {
		return b("bs_caml_bytes").bytes_to_string(i(a, c, d))
	}

	function k(a, c) {
		var d = a + c | 0;
		a = a < 0;
		c = c < 0;
		var e = d < 0;
		if (a)
			if (c && !e) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Bytes.extend"];
			else return d;
		else if (c) return d;
		else {
			if (e) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Bytes.extend"];
			return d
		}
	}

	function l(a, c, d) {
		d = k(k(a.length, c), d);
		var e = b("bs_caml_bytes").caml_create_bytes(d);
		c = c < 0 ? [-c | 0, 0] : [0, c];
		var f = c[1];
		c = c[0];
		d = b("bs_caml_primitive").caml_int_min(a.length - c | 0, d - f | 0);
		d > 0 && b("bs_caml_bytes").caml_blit_bytes(a, c, e, f, d);
		return e
	}

	function m(a, c, d, e) {
		if (c < 0 || d < 0 || c > (a.length - d | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.fill / Bytes.fill"];
		return b("bs_caml_bytes").caml_fill_bytes(a, c, d, e)
	}

	function n(a, c, d, e, f) {
		if (f < 0 || c < 0 || c > (a.length - f | 0) || e < 0 || e > (d.length - f | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Bytes.blit"];
		return b("bs_caml_bytes").caml_blit_bytes(a, c, d, e, f)
	}

	function o(a, c, d, e, f) {
		if (f < 0 || c < 0 || c > (a.length - f | 0) || e < 0 || e > (d.length - f | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.blit / Bytes.blit_string"];
		return b("bs_caml_bytes").caml_blit_string(a, c, d, e, f)
	}

	function p(a, c) {
		for (var d = 0, e = c.length - 1 | 0; d <= e; ++d) b("bs_curry")._1(a, c[d]);
		return 0
	}

	function q(a, c) {
		for (var d = 0, e = c.length - 1 | 0; d <= e; ++d) b("bs_curry")._2(a, d, c[d]);
		return 0
	}

	function r(a, c) {
		if (a >= c) return a;
		else throw [b("bs_caml_builtin_exceptions").invalid_argument, "Bytes.concat"]
	}

	function s(a, b, c) {
		while (!0) {
			var d = c,
				e = a;
			if (d) {
				var f = d[1];
				d = d[0];
				if (f) {
					c = f;
					a = r((d.length + b | 0) + e | 0, e);
					continue
				} else return d.length + e | 0
			} else return e
		}
	}

	function t(a, c) {
		if (c) {
			var d = a.length,
				e = b("bs_caml_bytes").caml_create_bytes(s(0, d, c)),
				f = 0;
			a = a;
			d = d;
			c = c;
			while (!0) {
				var h = c,
					i = f;
				if (h) {
					var j = h[1];
					h = h[0];
					if (j) {
						b("bs_caml_bytes").caml_blit_bytes(h, 0, e, i, h.length);
						b("bs_caml_bytes").caml_blit_bytes(a, 0, e, i + h.length | 0, d);
						c = j;
						f = (i + h.length | 0) + d | 0;
						continue
					} else {
						b("bs_caml_bytes").caml_blit_bytes(h, 0, e, i, h.length);
						return e
					}
				} else return e
			}
		} else return g
	}

	function u(a, c) {
		var d = a.length,
			e = c.length,
			f = b("bs_caml_bytes").caml_create_bytes(d + e | 0);
		b("bs_caml_bytes").caml_blit_bytes(a, 0, f, 0, d);
		b("bs_caml_bytes").caml_blit_bytes(c, 0, f, d, e);
		return f
	}

	function v(a) {
		a = a - 9 | 0;
		if (a > 4 || a < 0) return a === 23;
		else return a !== 2
	}

	function w(a) {
		var b = a.length,
			c = 0;
		while (c < b && v(a[c])) c = c + 1 | 0;
		b = b - 1 | 0;
		while (b >= c && v(a[b])) b = b - 1 | 0;
		if (b >= c) return i(a, c, (b - c | 0) + 1 | 0);
		else return g
	}

	function x(a) {
		var c = 0;
		for (var d = 0, e = a.length - 1 | 0; d <= e; ++d) {
			var f = a[d];
			if (f >= 32) {
				var g = f - 34 | 0;
				g = g > 58 || g < 0 ? g >= 93 ? 4 : 1 : g > 57 || g < 1 ? 2 : 1
			} else g = f >= 11 ? f !== 13 ? 4 : 2 : f >= 8 ? 2 : 4;
			c = c + g | 0
		}
		if (c === a.length) return h(a);
		else {
			f = b("bs_caml_bytes").caml_create_bytes(c);
			c = 0;
			for (var g = 0, d = a.length - 1 | 0; g <= d; ++g) {
				e = a[g];
				var i = 0;
				if (e >= 35) e !== 92 ? e >= 127 ? i = 1 : f[c] = e : i = 2;
				else if (e >= 32) e >= 34 ? i = 2 : f[c] = e;
				else if (e >= 14) i = 1;
				else switch (e) {
					case 8:
						f[c] = 92;
						c = c + 1 | 0;
						f[c] = 98;
						break;
					case 9:
						f[c] = 92;
						c = c + 1 | 0;
						f[c] = 116;
						break;
					case 10:
						f[c] = 92;
						c = c + 1 | 0;
						f[c] = 110;
						break;
					case 0:
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 11:
					case 12:
						i = 1;
						break;
					case 13:
						f[c] = 92;
						c = c + 1 | 0;
						f[c] = 114;
						break
				}
				switch (i) {
					case 1:
						f[c] = 92;
						c = c + 1 | 0;
						f[c] = 48 + (e / 100 | 0) | 0;
						c = c + 1 | 0;
						f[c] = 48 + (e / 10 | 0) % 10 | 0;
						c = c + 1 | 0;
						f[c] = 48 + e % 10 | 0;
						break;
					case 2:
						f[c] = 92;
						c = c + 1 | 0;
						f[c] = e;
						break
				}
				c = c + 1 | 0
			}
			return f
		}
	}

	function y(a, c) {
		var d = c.length;
		if (d === 0) return c;
		else {
			var e = b("bs_caml_bytes").caml_create_bytes(d);
			for (var f = 0, d = d - 1 | 0; f <= d; ++f) e[f] = b("bs_curry")._1(a, c[f]);
			return e
		}
	}

	function z(a, c) {
		var d = c.length;
		if (d === 0) return c;
		else {
			var e = b("bs_caml_bytes").caml_create_bytes(d);
			for (var f = 0, d = d - 1 | 0; f <= d; ++f) e[f] = b("bs_curry")._2(a, f, c[f]);
			return e
		}
	}

	function A(a) {
		return y(b("bs_char").uppercase_ascii, a)
	}

	function B(a) {
		return y(b("bs_char").lowercase_ascii, a)
	}

	function C(a, c) {
		if (c.length === 0) return c;
		else {
			var d = h(c);
			d[0] = b("bs_curry")._1(a, c[0]);
			return d
		}
	}

	function D(a) {
		return C(b("bs_char").uppercase_ascii, a)
	}

	function E(a) {
		return C(b("bs_char").lowercase_ascii, a)
	}

	function F(a, c, d, e) {
		while (!0) {
			var f = d;
			if (f >= c) throw b("bs_caml_builtin_exceptions").not_found;
			if (a[f] === e) return f;
			else {
				d = f + 1 | 0;
				continue
			}
		}
	}

	function G(a, b) {
		return F(a, a.length, 0, b)
	}

	function H(a, b, c, d) {
		while (!0) {
			var e = c;
			if (e >= b) return;
			else if (a[e] === d) return e;
			else {
				c = e + 1 | 0;
				continue
			}
		}
	}

	function I(a, b) {
		return H(a, a.length, 0, b)
	}

	function J(a, c, d) {
		var e = a.length;
		if (c < 0 || c > e) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.index_from / Bytes.index_from"];
		return F(a, e, c, d)
	}

	function K(a, c, d) {
		var e = a.length;
		if (c < 0 || c > e) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.index_from_opt / Bytes.index_from_opt"];
		return H(a, e, c, d)
	}

	function L(a, c, d) {
		while (!0) {
			var e = c;
			if (e < 0) throw b("bs_caml_builtin_exceptions").not_found;
			if (a[e] === d) return e;
			else {
				c = e - 1 | 0;
				continue
			}
		}
	}

	function M(a, b) {
		return L(a, a.length - 1 | 0, b)
	}

	function N(a, c, d) {
		if (c < -1 || c >= a.length) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rindex_from / Bytes.rindex_from"];
		return L(a, c, d)
	}

	function O(a, b, c) {
		while (!0) {
			var d = b;
			if (d < 0) return;
			else if (a[d] === c) return d;
			else {
				b = d - 1 | 0;
				continue
			}
		}
	}

	function P(a, b) {
		return O(a, a.length - 1 | 0, b)
	}

	function Q(a, c, d) {
		if (c < -1 || c >= a.length) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rindex_from_opt / Bytes.rindex_from_opt"];
		return O(a, c, d)
	}

	function R(a, c, d) {
		var e = a.length;
		if (c < 0 || c > e) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.contains_from / Bytes.contains_from"];
		try {
			F(a, e, c, d);
			return !0
		} catch (a) {
			if (a === b("bs_caml_builtin_exceptions").not_found) return !1;
			else throw a
		}
	}

	function S(a, b) {
		return R(a, 0, b)
	}

	function T(a, c, d) {
		if (c < 0 || c >= a.length) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rcontains_from / Bytes.rcontains_from"];
		try {
			L(a, c, d);
			return !0
		} catch (a) {
			if (a === b("bs_caml_builtin_exceptions").not_found) return !1;
			else throw a
		}
	}
	var U = b("bs_caml_primitive").caml_bytes_compare;

	function V(a) {
		return y(b("bs_char").uppercase, a)
	}

	function W(a) {
		return y(b("bs_char").lowercase, a)
	}

	function X(a) {
		return C(b("bs_char").uppercase, a)
	}

	function Y(a) {
		return C(b("bs_char").lowercase, a)
	}
	var Z = b("bs_caml_primitive").caml_bytes_equal,
		$ = b("bs_caml_bytes").bytes_to_string,
		aa = b("bs_caml_bytes").bytes_of_string;
	f.make = a;
	f.init = c;
	f.empty = g;
	f.copy = h;
	f.of_string = e;
	f.to_string = d;
	f.sub = i;
	f.sub_string = j;
	f.extend = l;
	f.fill = m;
	f.blit = n;
	f.blit_string = o;
	f.concat = t;
	f.cat = u;
	f.iter = p;
	f.iteri = q;
	f.map = y;
	f.mapi = z;
	f.trim = w;
	f.escaped = x;
	f.index = G;
	f.index_opt = I;
	f.rindex = M;
	f.rindex_opt = P;
	f.index_from = J;
	f.index_from_opt = K;
	f.rindex_from = N;
	f.rindex_from_opt = Q;
	f.contains = S;
	f.contains_from = R;
	f.rcontains_from = T;
	f.uppercase = V;
	f.lowercase = W;
	f.capitalize = X;
	f.uncapitalize = Y;
	f.uppercase_ascii = A;
	f.lowercase_ascii = B;
	f.capitalize_ascii = D;
	f.uncapitalize_ascii = E;
	f.compare = U;
	f.equal = Z;
	f.unsafe_to_string = $;
	f.unsafe_of_string = aa
}), null);
__d("bs_string", ["bs_bytes", "bs_curry", "bs_caml_bytes", "bs_caml_primitive", "bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").make(a, c))
	}

	function c(a, c) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").init(a, c))
	}

	function d(a) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").copy(b("bs_caml_bytes").bytes_of_string(a)))
	}

	function g(a, c, d) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").sub(b("bs_caml_bytes").bytes_of_string(a), c, d))
	}

	function h(a, c) {
		if (a >= c) return a;
		else throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.concat"]
	}

	function i(a, b, c) {
		while (!0) {
			var d = c,
				e = a;
			if (d) {
				var f = d[1];
				d = d[0];
				if (f) {
					c = f;
					a = h((d.length + b | 0) + e | 0, e);
					continue
				} else return d.length + e | 0
			} else return e
		}
	}

	function j(a, c, d, e, f) {
		while (!0) {
			var g = f,
				h = c;
			if (g) {
				var i = g[1];
				g = g[0];
				if (i) {
					b("bs_caml_bytes").caml_blit_string(g, 0, a, h, g.length);
					b("bs_caml_bytes").caml_blit_string(d, 0, a, h + g.length | 0, e);
					f = i;
					c = (h + g.length | 0) + e | 0;
					continue
				} else {
					b("bs_caml_bytes").caml_blit_string(g, 0, a, h, g.length);
					return a
				}
			} else return a
		}
	}

	function e(a, c) {
		if (c) {
			var d = a.length;
			return b("bs_caml_bytes").bytes_to_string(j(b("bs_caml_bytes").caml_create_bytes(i(0, d, c)), 0, a, d, c))
		} else return ""
	}

	function k(a, c) {
		for (var d = 0, e = c.length - 1 | 0; d <= e; ++d) b("bs_curry")._1(a, c.charCodeAt(d));
		return 0
	}

	function l(a, c) {
		for (var d = 0, e = c.length - 1 | 0; d <= e; ++d) b("bs_curry")._2(a, d, c.charCodeAt(d));
		return 0
	}

	function m(a, c) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").map(a, b("bs_caml_bytes").bytes_of_string(c)))
	}

	function n(a, c) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").mapi(a, b("bs_caml_bytes").bytes_of_string(c)))
	}

	function o(a) {
		a = a - 9 | 0;
		if (a > 4 || a < 0) return a === 23;
		else return a !== 2
	}

	function p(a) {
		if (a === "" || !(o(a.charCodeAt(0)) || o(a.charCodeAt(a.length - 1 | 0)))) return a;
		else return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").trim(b("bs_caml_bytes").bytes_of_string(a)))
	}

	function q(a) {
		var c = function (b) {
			while (!0) {
				var c = b;
				if (c >= a.length) return !1;
				else {
					var d = a.charCodeAt(c);
					if (d >= 32) {
						d = d - 34 | 0;
						if (d > 58 || d < 0)
							if (d >= 93) return !0;
							else {
								b = c + 1 | 0;
								continue
							}
						else if (d > 57 || d < 1) return !0;
						else {
							b = c + 1 | 0;
							continue
						}
					} else return !0
				}
			}
		};
		if (c(0)) return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").escaped(b("bs_caml_bytes").bytes_of_string(a)));
		else return a
	}

	function r(a, c, d, e) {
		while (!0) {
			var f = d;
			if (f >= c) throw b("bs_caml_builtin_exceptions").not_found;
			if (a.charCodeAt(f) === e) return f;
			else {
				d = f + 1 | 0;
				continue
			}
		}
	}

	function s(a, b) {
		return r(a, a.length, 0, b)
	}

	function t(a, b, c, d) {
		while (!0) {
			var e = c;
			if (e >= b) return;
			else if (a.charCodeAt(e) === d) return e;
			else {
				c = e + 1 | 0;
				continue
			}
		}
	}

	function u(a, b) {
		return t(a, a.length, 0, b)
	}

	function v(a, c, d) {
		var e = a.length;
		if (c < 0 || c > e) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.index_from / Bytes.index_from"];
		return r(a, e, c, d)
	}

	function w(a, c, d) {
		var e = a.length;
		if (c < 0 || c > e) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.index_from_opt / Bytes.index_from_opt"];
		return t(a, e, c, d)
	}

	function x(a, c, d) {
		while (!0) {
			var e = c;
			if (e < 0) throw b("bs_caml_builtin_exceptions").not_found;
			if (a.charCodeAt(e) === d) return e;
			else {
				c = e - 1 | 0;
				continue
			}
		}
	}

	function y(a, b) {
		return x(a, a.length - 1 | 0, b)
	}

	function z(a, c, d) {
		if (c < -1 || c >= a.length) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rindex_from / Bytes.rindex_from"];
		return x(a, c, d)
	}

	function A(a, b, c) {
		while (!0) {
			var d = b;
			if (d < 0) return;
			else if (a.charCodeAt(d) === c) return d;
			else {
				b = d - 1 | 0;
				continue
			}
		}
	}

	function B(a, b) {
		return A(a, a.length - 1 | 0, b)
	}

	function C(a, c, d) {
		if (c < -1 || c >= a.length) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rindex_from_opt / Bytes.rindex_from_opt"];
		return A(a, c, d)
	}

	function D(a, c, d) {
		var e = a.length;
		if (c < 0 || c > e) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.contains_from / Bytes.contains_from"];
		try {
			r(a, e, c, d);
			return !0
		} catch (a) {
			if (a === b("bs_caml_builtin_exceptions").not_found) return !1;
			else throw a
		}
	}

	function E(a, b) {
		return D(a, 0, b)
	}

	function F(a, c, d) {
		if (c < 0 || c >= a.length) throw [b("bs_caml_builtin_exceptions").invalid_argument, "String.rcontains_from / Bytes.rcontains_from"];
		try {
			x(a, c, d);
			return !0
		} catch (a) {
			if (a === b("bs_caml_builtin_exceptions").not_found) return !1;
			else throw a
		}
	}

	function G(a) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uppercase_ascii(b("bs_caml_bytes").bytes_of_string(a)))
	}

	function H(a) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").lowercase_ascii(b("bs_caml_bytes").bytes_of_string(a)))
	}

	function I(a) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").capitalize_ascii(b("bs_caml_bytes").bytes_of_string(a)))
	}

	function J(a) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uncapitalize_ascii(b("bs_caml_bytes").bytes_of_string(a)))
	}
	var K = b("bs_caml_primitive").caml_string_compare;

	function L(a, b) {
		var c = 0,
			d = b.length;
		for (var e = b.length - 1 | 0; e >= 0; --e) b.charCodeAt(e) === a && (c = [g(b, e + 1 | 0, (d - e | 0) - 1 | 0), c], d = e);
		return [g(b, 0, d), c]
	}

	function M(a) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uppercase(b("bs_caml_bytes").bytes_of_string(a)))
	}

	function N(a) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").lowercase(b("bs_caml_bytes").bytes_of_string(a)))
	}

	function O(a) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").capitalize(b("bs_caml_bytes").bytes_of_string(a)))
	}

	function P(a) {
		return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uncapitalize(b("bs_caml_bytes").bytes_of_string(a)))
	}
	var Q = b("bs_bytes").fill,
		R = b("bs_bytes").blit_string;

	function S(a, b) {
		return a === b
	}
	f.make = a;
	f.init = c;
	f.copy = d;
	f.sub = g;
	f.fill = Q;
	f.blit = R;
	f.concat = e;
	f.iter = k;
	f.iteri = l;
	f.map = m;
	f.mapi = n;
	f.trim = p;
	f.escaped = q;
	f.index = s;
	f.index_opt = u;
	f.rindex = y;
	f.rindex_opt = B;
	f.index_from = v;
	f.index_from_opt = w;
	f.rindex_from = z;
	f.rindex_from_opt = C;
	f.contains = E;
	f.contains_from = D;
	f.rcontains_from = F;
	f.uppercase = M;
	f.lowercase = N;
	f.capitalize = O;
	f.uncapitalize = P;
	f.uppercase_ascii = G;
	f.lowercase_ascii = H;
	f.capitalize_ascii = I;
	f.uncapitalize_ascii = J;
	f.compare = K;
	f.equal = S;
	f.split_on_char = L
}), null);
__d("MessengerStoryAttachmentTransformer.bs", ["fbt", "URI", "bs_string", "bs_js_dict", "bs_caml_array", "bs_belt_Option", "bs_caml_format", "bs_caml_option", "CurrentUser", "FundsAvailability", "bs_js_null_undefined", "P2PTransferStatus", "MNCommerceBubbleType", "PaymentModulesClient", "MercuryAttachmentType", "bs_caml_builtin_exceptions", "P2PPaymentRequestStatus", "ServicesCalendarSyncType", "MNCommerceCallToActionType", "LeadGenInfoFieldTypes"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h;

	function i(a) {
		return a.map(function (a) {
			var c = a.user_confirmation;
			c = c == null ? [null, null, null, null, !1] : [c.cancel_button_label, c.continue_button_label, c.confirmation_message, c.confirmation_title, !0];
			var d = a.payment_metadata;
			return {
				action_link: a.action_link,
				action_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceCallToActionType"), a.action_open_type)),
				action_objects: a.action_objects,
				title: a.title,
				confirmation_cancel_label: c[0],
				confirmation_continue_label: c[1],
				confirmation_message: c[2],
				confirmation_title: c[3],
				id: a.id,
				is_disabled: a.is_disabled,
				is_mutable_by_server: a.is_mutable_by_server,
				logging_token: a.logging_token,
				payment_metadata: d == null ? {
					payment_module_config: null,
					total_price: null
				} : {
					payment_module_config: d.payment_module_config,
					total_price: d.total_price
				},
				render_style: a.render_style,
				webview_metadata: {
					fallback_url: a.webview_metadata.fallback_url,
					messenger_extensions: a.webview_metadata.messenger_extensions,
					webview_height_ratio: a.webview_metadata.webview_height_ratio,
					webview_share_button: a.webview_metadata.webview_share_button
				},
				should_show_user_confirmation: c[4],
				page_id: a.page_id,
				cta_data: a.cta_data
			}
		})
	}

	function j(a) {
		return a.map(function (a) {
			var c = a.url;
			c = c == null ? null : new(h || (h = b("URI")))(c).getUnqualifiedURI().toString();
			return {
				title: a.title,
				uri: c
			}
		})
	}

	function a(a) {
		if (!(a == null) && a !== "") return "#" + b("bs_string").sub(a, 2, a.length - 2 | 0);
		else return null
	}

	function c(a) {
		if (a == null) return null;
		else return {
			url: a.uri,
			src: a.uri,
			width: a.width,
			height: a.height
		}
	}

	function k(a, b) {
		var c = b.cover_photo,
			d;
		if (c == null) d = [null, null, null];
		else {
			var e = c.photo.image;
			e = e == null ? [null, null] : [e.uri, {
				height: e.height,
				width: e.width
			}];
			d = [c.photo.id, e[0], e[1]]
		}
		c = b.location;
		e = c == null ? [null, null] : [c.latitude, c.longitude];
		c = b.overall_star_rating;
		return {
			address: b.address.single_line_full_address,
			category: b.top_category_name,
			coverPhotoID: d[0],
			coverPhotoURL: d[1],
			coverPhotoDimensions: d[2],
			latitude: e[0],
			longitude: e[1],
			name: b.name,
			rating: c == null ? null : c.value,
			pageID: b.id,
			priceRange: b.price_range_description,
			viewerID: a
		}
	}

	function l(a) {
		var b = a.group_commerce_item_seller,
			c = a.primary_photo,
			d;
		if (c == null) d = null;
		else {
			c = c.image;
			d = c == null ? null : c.uri
		}
		return {
			caption: a.group_commerce_item_description.text,
			desc: a.group_commerce_item_description.text,
			owner_id: b == null ? null : b.id,
			price: a.formatted_price.text,
			text: a.group_commerce_item_description.text,
			title: a.group_commerce_item_title,
			thumb_url: d,
			url: a.url
		}
	}

	function m(a) {
		return {
			app_name: a.application_name,
			artists: a.artist_names,
			audio_url: a.audio_url,
			duration_ms: a.duration_ms,
			title: a.music_title
		}
	}

	function n(a) {
		var c = a.payment;
		return {
			id: a.id,
			desc: a.desc,
			display_total_cost: a.total_cost,
			merchant_name: a.merchant_name,
			target_url: a.target_url,
			thumb_url: a.thumb_url,
			raw_amount: a.raw_amount,
			payment_id: c == null ? null : c.id,
			total_cost: {
				amount: b("bs_caml_format").caml_float_of_string(a.price_amount),
				currency: a.price_currency
			},
			name: a.name
		}
	}

	function o(a) {
		return {
			fundraiserID: a.fundraiserID,
			canDonate: a.canDonate,
			hasViewerDonated: a.hasViewerDonated,
			fundraiserDetailedProgressText: a.fundraiserDetailedProgressText,
			fundraiserSubtitleText: a.fundraiserSubtitleText,
			focusedCoverPhoto: a.focusedCoverPhoto
		}
	}

	function p(a) {
		return {
			id: a.id,
			name: a.name,
			is_malicious: a.is_malicious,
			attach_type: b("MercuryAttachmentType").FILE,
			url: a.uri,
			extension: a.extension,
			filesize: a.filesize
		}
	}

	function q(a) {
		return {
			id: a.id,
			url_shimhash: a.url_shimhash,
			attach_type: b("MercuryAttachmentType").VIDEO,
			url: a.playable_url,
			extension: a.extension,
			filesize: a.filesize,
			name: a.filename,
			height: a.height,
			width: a.width
		}
	}

	function r(a) {
		return {
			id: a.id,
			name: a.name,
			desc: a.desc,
			thumb_url: a.thumb_url,
			item_url: a.item_url,
			title: a.name,
			text: a.desc,
			source: a.source,
			image_aspect_ratio: a.image_aspect_ratio,
			metalines: {
				metaline_1: a.first_metaline,
				metaline_2: a.second_metaline,
				metaline_3: a.third_metaline
			},
			default_action: a.default_action,
			call_to_actions: i(a.call_to_actions)
		}
	}

	function s(a) {
		var c = function (a) {
				a = a.services_vertical_info;
				if (a == null) return;
				else return {
					isEligibleForAppointmentCalendar: a.is_eligible_for_appointment_calendar,
					timezoneName: a.time_zone_name
				}
			},
			d = a.page;
		c = d == null ? [void 0, void 0, void 0] : [d.id, b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("ServicesCalendarSyncType"), d.calendar_sync_type)), c(d)];
		d = a.native_component_flow_request;
		var e;
		if (d == null) e = null;
		else {
			var f = d.page,
				h = d.page,
				i = d.page,
				j;
			if (i == null) j = void 0;
			else {
				i = i.profile_picture;
				j = i == null ? void 0 : i.uri
			}
			i = d.suggested_time_range;
			var k = d.user,
				l = d.user,
				m = d.job_application,
				n = d.user,
				o;
			if (n == null) o = void 0;
			else {
				n = n.profile_picture;
				o = n == null ? void 0 : n.uri
			}
			e = {
				additionalInfo: d.additional_info,
				appointmentAddress: d.appointment_address,
				archivedStatus: d.archived_status,
				availability: d.availability,
				consumer_phone_number: d.consumer_phone_number,
				hasSavedToCalendar: d.has_saved_to_calendar,
				recurMessage: d.recur_message,
				requestFlowType: d.request_flow_type,
				generalInfo: d.service_general_info,
				id: d.id,
				pageID: f == null ? void 0 : f.id,
				pageName: h == null ? void 0 : h.name,
				pageProfilePic: j,
				preferredTimeRange: i == null ? null : {
					end: i.end,
					start: i.start
				},
				productItems: d.services_product_items,
				reminderBubbleText: d.reminder_bubble_text,
				requestAdminApprovalType: d.request_admin_approval_type,
				requestedTime: d.requested_time,
				specialRequest: d.special_request,
				status: d.booking_status_value,
				statusLabel: d.status,
				userID: k == null ? void 0 : k.id,
				username: l == null ? void 0 : l.short_name,
				jobApplicationID: m == null ? void 0 : m.id,
				userProfilePic: o
			}
		}
		n = a.message_bubble_type;
		var p;
		switch (n) {
			case "CANCELLED":
				p = ["Cancelled", g._("\u0110a\u0303 hu\u0309y")];
				break;
			case "DECLINED":
				p = ["Declined", g._("\u0110\u00e3 t\u1eeb ch\u1ed1i")];
				break;
			case "NO_SHOW":
				p = ["No-Show", g._("V\u1eafng m\u1eb7t")];
				break;
			case "REQUESTED":
				p = ["Requested", g._("\u0110\u00e3 y\u00eau c\u1ea7u")];
				break;
			case "SCHEDULEED":
				p = ["Scheduled", g._("\u0110\u00e3 l\u00ean l\u1ecbch")];
				break;
			default:
				throw [b("bs_caml_builtin_exceptions").invalid_argument, "Erroneous target status"]
		}
		f = a.user;
		return {
			id: a.id,
			pageID: c[0],
			calendarSyncType: c[1],
			userID: f == null ? "0" : f.id,
			status: p[0],
			statusLabel: p[1],
			ls_xma_title: a.ls_xma_title,
			ls_xma_subtitle: a.ls_xma_subtitle,
			viewerID: b("CurrentUser").getAccountID(),
			requestMetadata: e,
			servicesVerticalInfo: c[2]
		}
	}

	function t(a) {
		return {
			id: a.id,
			page_id: a.page.id,
			user_id: a.consumer.id,
			time_ranges: a.formatted_available_time_ranges.map(function (a) {
				return {
					start: a.start,
					end: a.end
				}
			}),
			has_booking_request_created: a.has_booking_request_created
		}
	}

	function u(a) {
		return {
			id: a.id
		}
	}

	function v(a) {
		return {
			live_location_id: a.live_location_id,
			is_expired: a.is_expired,
			expiration_time: a.expiration_time,
			sender: a.sender,
			coordinate: a.coordinate,
			location_title: a.location_title,
			sender_destination: a.sender_destination,
			stop_reason: a.stop_reason
		}
	}

	function w(a) {
		return {
			sender_wec_number: a.sender_wec_number,
			sender_wec_number_formated: a.sender_wec_number_formated,
			sender_wec_number_fbid: a.sender_wec_number_fbid,
			sender_wec_name: a.sender_wec_name
		}
	}

	function x(a) {
		var b = a.preview;
		b = b == null ? null : b.uri;
		var c = a.large_preview;
		c = c == null ? null : c.uri;
		return {
			id: a.id,
			extension: a.extension,
			preview: a.preview,
			large_preview: a.large_preview,
			attach_type: "photo",
			large_preview_url: c,
			preview_url: b
		}
	}

	function y(a) {
		return {
			id: a.id,
			name: a.filename,
			url_shimhash: a.url_shimhash,
			attach_type: b("MercuryAttachmentType").AUDIO,
			url: a.playable_url,
			extension: a.extension,
			filesize: a.filesize,
			duration: a.duration
		}
	}

	function z(a) {
		var b = a.first_metaline;
		return {
			desc: a.description,
			id: a.id,
			image_aspect_ratio: a.image_aspect_ratio,
			item_url: a.target_url,
			metalines: b == null ? {} : {
				metaline_1: b
			},
			name: a.name,
			source: a.source_name,
			text: a.description,
			thumb_url: a.image_url,
			title: a.name,
			default_action: a.default_action,
			call_to_actions: i(a.call_to_actions),
			media_blob_attachments: a.media_blob_attachments
		}
	}

	function A(a) {
		var b = a.business_items.nodes.map(z),
			c = i(a.call_to_actions);
		return {
			message: a.message,
			call_to_actions: c,
			items: b
		}
	}

	function B(a) {
		return {
			message: a.message,
			call_to_actions: i(a.call_to_actions),
			items: a.promotion_items.nodes.map(z)
		}
	}

	function C(a) {
		var c = a.structured_address.streets,
			d = a.partner_logo;
		return {
			account_holder_name: a.account_holder_name,
			adjustments: a.adjustments.map(function (a) {
				return {
					adjustment_type: a.adjustment_type,
					display_adjustment_amount: a.adjustment_amount
				}
			}),
			cancellation_url: a.cancellation_url,
			items: a.items.nodes.map(z),
			merchant_name: a.merchant_name,
			messenger_commerce_bubble_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceBubbleType"), a.messenger_commerce_bubble_type)),
			order_id: a.order_id,
			order_time: a.order_time,
			order_url: a.order_url,
			payment_method: a.payment_method,
			receipt_id: a.receipt_id,
			recipient_name: a.recipient_name,
			shipping_cost: a.shipping_cost,
			shipping_method: a.shipping_method,
			status: a.status,
			structured_address: {
				city: a.structured_address.city,
				state: a.structured_address.state,
				country: a.structured_address.country,
				postal_code: a.structured_address.postal_code,
				street_1: b("bs_caml_array").caml_array_get(c, 0),
				street_2: b("bs_caml_array").caml_array_get(c, 1)
			},
			subtotal: a.subtotal,
			total_cost: a.total_cost,
			total_tax: a.total_tax,
			partner_logo: d == null ? void 0 : d.uri
		}
	}

	function D(a, c) {
		return {
			payment_modules_client: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("PaymentModulesClient"), c.payment_modules_client)),
			is_viewer_seller: c.is_viewer_seller,
			payment_snippet: c.payment_snippet,
			item_list: c.item_list.map(function (a) {
				return {
					item_id: a.item_id,
					name: a.name,
					subtitle: a.subtitle,
					description: a.description,
					unit_price: a.unit_price,
					image_urls: a.images.map(function (a) {
						return a.uri
					}),
					quantity: a.quantity
				}
			}),
			components: c.components,
			payment_call_to_actions: c.payment_call_to_actions,
			click_action: c.click_action,
			summary_action: c.summary_action,
			actor_id: a,
			invoicer_id: c.invoicer_id,
			is_last_attachment: c.is_last_attachment,
			payment_total: c.payment_total,
			product_detail: c.product_detail,
			payment_status_icon: c.payment_status_icon,
			user_facing_payment_status: c.user_facing_payment_status,
			payment_sub_statuses: c.payment_sub_statuses,
			should_show_new_xma: c.should_show_new_xma,
			buyer_name: c.buyer_name
		}
	}
	var E = function (a) {
		var c = b("LeadGenInfoFieldTypes"),
			d = {},
			e = [];
		for (var a = a.field_data_list, f = Array.isArray(a), g = 0, a = f ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var h;
			if (f) {
				if (g >= a.length) break;
				h = a[g++]
			} else {
				g = a.next();
				if (g.done) break;
				h = g.value
			}
			h = h;
			var i = h.field_type,
				j = h.label;
			h = h.values;
			i === c.CUSTOM || i === c.ZIP ? e.push({
				label: j,
				values: h
			}) : d[i] = {
				label: j,
				values: h
			}
		}
		d.questions = e;
		return d
	};

	function F(a, b) {
		var c = b.invite_recipient;
		c = c == null ? null : c.id;
		var d = b.invite_sender;
		d = d == null ? null : d.id;
		return {
			quick_invite_id: b.id,
			recipient_id: c,
			sender_id: d,
			is_viewer_recipient: a === c
		}
	}

	function G(a) {
		var b = function (a) {
				if (a == null) return null;
				else return a.uri
			},
			c = a.listing_category;
		c = c == null ? [null, null] : [c.offer_image, c.request_image];
		return {
			listingType: a.listing_type,
			mapURI: b(a.map_image),
			offerURI: b(c[0]),
			requestURI: b(c[1])
		}
	}

	function H(a) {
		return {
			sender: a.sender,
			receiver: a.receiver,
			transfer_id: a.transfer_id,
			bubbleView: a.bubble_view
		}
	}

	function I(a) {
		var c = a.receiver_profile,
			d;
		if (c == null) d = null;
		else {
			var e = c.profile_picture;
			d = {
				id: c.id,
				name: c.short_name,
				full_name: c.name,
				picture: e == null ? null : e.uri,
				profile_url: c.url
			}
		}
		e = a.sender;
		if (e == null) c = {};
		else {
			var f = e.profile_picture;
			c = {
				id: e.id,
				name: e.name,
				full_name: e.full_name,
				picture: f == null ? null : f.uri,
				profile_uri: e.url
			}
		}
		f = a.transfer_context;
		if (f == null) e = [null, null];
		else {
			var g = f.transfer_theme;
			e = [f.memo_images.map(function (a) {
				a = a.image;
				if (a == null) return null;
				else return a.uri
			}), g == null ? null : g.id]
		}
		f = a.platform_item;
		g = f == null ? null : {
			name: f.name,
			description: f.description,
			image: f.photos.map(function (a) {
				a = a.image;
				if (a == null) return null;
				else return a.uri
			}),
			refURL: f.url
		};
		f = a.amount_fb_discount;
		return {
			sender: c,
			amountWithSymbol: a.transaction_amount.formatted_amount,
			status: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("P2PTransferStatus"), a.transfer_status)),
			receiver: d,
			transfer_id: a.transfer_id,
			completedTime: a.completedTime,
			updatedTime: a.updatedTime,
			creationTime: a.creationTime,
			amount: a.transaction_amount.amount,
			memoText: a.memo_text,
			memoPhotoURLs: e[0],
			themeID: e[1],
			discountAmount: f == null ? null : f.formatted,
			fundsAvailability: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("FundsAvailability"), a.funds_availability)),
			groupThreadFBID: a.group_thread_fbid,
			platform_item: g,
			statusDescription: {
				markup: a.status_description
			},
			bubbleView: a.bubble_view,
			currencyCode: a.currency_amount.currency
		}
	}

	function J(a) {
		var c = a.requester,
			d;
		if (c == null) d = void 0;
		else {
			var e = c.profile_picture;
			d = {
				id: c.id,
				name: c.short_name,
				full_name: c.name,
				picture: e == null ? null : e.uri,
				profile_url: c.url
			}
		}
		e = a.requestee;
		if (e == null) c = void 0;
		else {
			var f = e.profile_picture;
			c = {
				id: e.id,
				name: e.short_name,
				full_name: e.name,
				picture: f == null ? null : f.uri,
				profile_url: e.url
			}
		}
		f = b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("P2PPaymentRequestStatus"), a.request_status));
		e = a.transfer;
		e = e == null ? [null, ""] : [I(e), e.id];
		var g = a.request_theme;
		return {
			amount: a.transaction_amount.amount,
			amountWithSymbol: a.amount.formatted,
			requestee: c,
			requester: d,
			currentStatus: f,
			currency: a.amount.currency,
			creationTime: a.creation_time,
			groupThreadFBID: a.group_thread_fbid,
			id: a.id,
			memoText: a.memo_text,
			themeID: g == null ? null : g.id,
			transfer: e[0],
			transferID: e[1],
			updatedTime: a.updated_time,
			bubbleView: a.bubble_view,
			statusDescription: {
				markup: a.status_description
			}
		}
	}

	function K(a) {
		var b = J({
			amount: a.amount,
			transaction_amount: a.transaction_amount,
			requester: a.requester,
			requestee: a.requestee,
			request_status: a.request_status,
			request_theme: a.request_theme,
			id: a.id,
			memo_text: a.memo_text,
			transfer: a.transfer,
			creation_time: a.creation_time,
			group_thread_fbid: a.group_thread_fbid,
			updated_time: a.updated_time,
			bubble_view: a.bubble_view,
			status_description: a.status_description
		});
		a = {
			individualRequests: a.individual_requests.map(J)
		};
		return Object.assign(b, a)
	}

	function L(a, c, d) {
		var e = c.media,
			f = e == null ? null : e.animated_image,
			g = e == null ? null : e.image,
			h = {};
		c.properties.forEach(function (b) {
			var a = b.value;
			h[b.key] = a == null ? null : a.text;
			return 0
		});
		var i = c.target,
			z;
		if (i == null) z = null;
		else switch (i.tag | 0) {
			case 0:
				z = G(i[0]);
				break;
			case 1:
				z = H(i[0]);
				break;
			case 2:
				z = I(i[0]);
				break;
			case 3:
				z = K(i[0]);
				break;
			case 4:
				z = D(a, i[0]);
				break;
			case 5:
				z = B(i[0]);
				break;
			case 6:
				z = A(i[0]);
				break;
			case 8:
				z = E(i[0]);
				break;
			case 9:
				z = v(i[0]);
				break;
			case 10:
				z = F(a, i[0]);
				break;
			case 11:
				z = s(i[0]);
				break;
			case 12:
				z = t(i[0]);
				break;
			case 13:
				z = u(i[0]);
				break;
			case 14:
				var J = i[0],
					L = J.genie_sender;
				L = L == null ? [null, null] : [L.messaging_actor.id, L.messaging_actor.name];
				var N = L[0],
					O = {
						action_links: [],
						messaging_attribution: null,
						messenger_call_to_actions: [],
						xma_layout_info: null,
						deduplication_key: null,
						description: null,
						media: null,
						properties: [],
						source: null,
						style_list: [],
						title_with_entities: null,
						url: null,
						subattachments: [],
						target: null,
						messenger_generic_xma_template_extra_info: null
					},
					P = c.media,
					Q;
				if (P == null) Q = null;
				else {
					P = P.pack;
					if (P == null) {
						P = J.story_attachment;
						Q = P == null || d == null ? null : M(a, {
							legacy_attachment_id: N,
							story_attachment: {
								action_links: d.action_links,
								messaging_attribution: d.messaging_attribution,
								messenger_call_to_actions: d.messenger_call_to_actions,
								xma_layout_info: d.xma_layout_info,
								deduplication_key: d.deduplication_key,
								description: d.description,
								media: d.media,
								properties: d.properties,
								source: d.source,
								style_list: d.style_list,
								title_with_entities: d.title_with_entities,
								url: d.url,
								subattachments: d.subattachments,
								target: d.target,
								messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info
							},
							genie_attachment: {
								genie_message: {
									story_attachment: O
								}
							}
						})
					} else Q = d == null ? null : M(a, {
						legacy_attachment_id: N,
						story_attachment: O,
						genie_attachment: {
							genie_message: {
								story_attachment: O
							}
						}
					})
				}
				z = {
					genie_id: N,
					genie_name: L[1],
					attachment: Q
				};
				break;
			case 16:
				z = m(i[0]);
				break;
			case 18:
				z = r(i[0]);
				break;
			case 19:
				z = n(i[0]);
				break;
			case 20:
				z = o(i[0]);
				break;
			case 21:
				z = C(i[0]);
				break;
			case 23:
				z = l(i[0]);
				break;
			case 24:
				z = k(a, i[0]);
				break;
			case 36:
				z = w(i[0]);
				break;
			case 37:
				z = x(i[0]);
				break;
			case 38:
				z = y(i[0]);
				break;
			case 39:
				z = p(i[0]);
				break;
			case 40:
				z = q(i[0]);
				break;
			default:
				z = i[0]
		}
		J = c.target;
		P = J == null || J.tag !== 5 ? null : 0;
		d = c.description;
		O = c.source;
		N = c.title_with_entities;
		return {
			description: d == null ? null : d.text,
			media: {
				animated_image: f == null ? null : f.uri,
				animated_image_size: f == null ? {
					height: null,
					width: null
				} : {
					height: f.height,
					width: f.width
				},
				image: g == null ? null : g.uri,
				image_size: g == null ? {
					height: null,
					width: null
				} : {
					height: g.height,
					width: g.width
				},
				duration: e == null ? null : e.playable_duration,
				playable: e == null ? null : e.is_playable,
				source: e == null ? null : e.playable_url
			},
			source: O == null ? null : O.text,
			style_list: c.style_list,
			title: N == null ? null : N.text,
			action_links: j(c.action_links),
			messaging_attribution: c.messaging_attribution,
			messenger_ctas: c.messenger_call_to_actions.map(function (a) {
				return {
					id: a.id,
					page_id: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(a.page_id), ""),
					action_title: a.title,
					action_url: a.action_link,
					action_open_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceCallToActionType"), a.action_open_type)),
					is_high_confidence: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(a.is_high_confidence), !1),
					is_mutable_by_server: a.is_mutable_by_server,
					native_url: a.native_url,
					is_disabled: a.is_disabled,
					webview_metadata: {
						fallback_url: a.webview_metadata.fallback_url,
						messenger_extensions: a.webview_metadata.messenger_extensions,
						webview_height_ratio: a.webview_metadata.webview_height_ratio,
						webview_share_button: a.webview_metadata.webview_share_button
					}
				}
			}),
			xma_layout_info: c.xma_layout_info,
			properties: h,
			uri: c.url,
			deduplication_key: c.deduplication_key,
			target: z,
			label: P,
			messenger_generic_xma_template_extra_info: c.messenger_generic_xma_template_extra_info
		}
	}

	function M(a, c) {
		var d = c.genie_attachment,
			e;
		if (d == null) e = null;
		else {
			d = d.genie_message;
			if (d == null) e = null;
			else {
				d = d.story_attachment;
				e = d == null ? null : {
					description: d.description,
					media: d.media,
					source: d.source,
					style_list: d.style_list,
					title_with_entities: d.title_with_entities,
					properties: d.properties,
					url: d.url,
					deduplication_key: d.deduplication_key,
					action_links: d.action_links,
					messaging_attribution: d.messaging_attribution,
					messenger_call_to_actions: d.messenger_call_to_actions,
					xma_layout_info: d.xma_layout_info,
					messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info,
					target: d.target,
					subattachments: d.subattachments
				}
			}
		}
		d = c.story_attachment;
		var f;
		if (d == null) f = null;
		else {
			var g = {
				description: null,
				media: null,
				source: null,
				style_list: [],
				title_with_entities: null,
				properties: [],
				url: null,
				deduplication_key: null,
				action_links: [],
				messaging_attribution: null,
				messenger_call_to_actions: [],
				xma_layout_info: null,
				target: null,
				subattachments: [],
				messenger_generic_xma_template_extra_info: null
			};
			c = {
				share_id: c.legacy_attachment_id,
				subattachments: d.subattachments.map(function (b) {
					return L(a, b, g)
				})
			};
			var h = {
				description: d.description,
				media: d.media,
				source: d.source,
				style_list: d.style_list,
				title_with_entities: d.title_with_entities,
				properties: d.properties,
				url: d.url,
				deduplication_key: d.deduplication_key,
				action_links: d.action_links,
				messaging_attribution: d.messaging_attribution,
				messenger_call_to_actions: d.messenger_call_to_actions,
				xma_layout_info: d.xma_layout_info,
				target: d.target,
				messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info
			};
			d = e == null ? {
				description: d.description,
				media: d.media,
				source: d.source,
				style_list: d.style_list,
				title_with_entities: d.title_with_entities,
				properties: d.properties,
				url: d.url,
				deduplication_key: d.deduplication_key,
				action_links: d.action_links,
				messaging_attribution: d.messaging_attribution,
				messenger_call_to_actions: d.messenger_call_to_actions,
				xma_layout_info: d.xma_layout_info,
				target: d.target,
				subattachments: d.subattachments,
				messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info
			} : {
				description: e.description,
				media: e.media,
				source: e.source,
				style_list: e.style_list,
				title_with_entities: e.title_with_entities,
				properties: e.properties,
				url: e.url,
				deduplication_key: e.deduplication_key,
				action_links: e.action_links,
				messaging_attribution: e.messaging_attribution,
				messenger_call_to_actions: e.messenger_call_to_actions,
				xma_layout_info: e.xma_layout_info,
				target: e.target,
				subattachments: e.subattachments,
				messenger_generic_xma_template_extra_info: e.messenger_generic_xma_template_extra_info
			};
			f = Object.assign(c, L(a, h, d))
		}
		return {
			app_attribution: null,
			attach_type: b("MercuryAttachmentType").SHARE,
			name: null,
			url: null,
			rel: null,
			preview_url: null,
			preview_width: null,
			preview_height: null,
			large_preview_url: null,
			large_preview_width: null,
			large_preview_height: null,
			icon_type: null,
			metadata: null,
			share: f,
			thumbnail_url: null
		}
	}
	f._getCallToActions = i;
	f._getActionLinks = j;
	f._getColor = a;
	f._getLogo = c;
	f._getPageTarget = k;
	f._getGroupCommerceProductItemTarget = l;
	f._getExternalSongTarget = m;
	f._getAgentSuggestionItemTarget = n;
	f._getFundraiserTarget = o;
	f._getWECFileTarget = p;
	f._getWECMessageVideoTarget = q;
	f._getRetailItemTarget = r;
	f._getPagesPlatformBookingMessageTarget = s;
	f._getServicesAppointmentAvailabilityTarget = t;
	f._getServicesGenericAdminTextTarget = u;
	f._getMessageLiveLocationTarget = v;
	f._getWECMessageTarget = w;
	f._getWECMessageImageTarget = x;
	f._getWECMessageAudioTarget = y;
	f._getBusinessRetailItem = z;
	f._getMessengerBusinessMessageTarget = A;
	f._getMessengerRetailPromotionTarget = B;
	f._getMessengerRetailReceiptTarget = C;
	f._getPagesPlatformAttachmentTarget = D;
	f._getPagesPlatformLeadGenInfoTarget = E;
	f._getQuickInviteTarget = F;
	f._getCrisisListingTarget = G;
	f._getMoneyTransferTarget = H;
	f._getP2PTransferTarget = I;
	f._getP2PTransferRequestTarget = J;
	f._getP2PTransferRequestWithIndividualRequests = K;
	f.transformStoryAttachment = L;
	f.getExtensibleAttachmentPayload = M
}), null);
__d("MessengerAttachmentTransformer.bs", ["fbt", "bs_caml_primitive", "MercuryAttachmentType", "MessageSharedMediaIDStore.bs", "MercuryAttachmentContentType", "MessengerStoryAttachmentTransformer.bs"], (function (a, b, c, d, e, f, g) {
	"use strict";

	function h(a) {
		if (a.is_malicious) {
			var c = g._("T\u1ec7p \u0111\u00ednh k\u00e8m n\u00e0y \u0111\u00e3 b\u1ecb \u0111\u00e1nh d\u1ea5u l\u00e0 \u0111\u1ed9c h\u1ea1i.");
			return {
				app_attribution: null,
				icon_type: b("MercuryAttachmentContentType").UNKNOWN,
				mime_type: null,
				metadata: null,
				name: null,
				preview_height: null,
				preview_url: null,
				preview_width: null,
				rel: null,
				share: null,
				thumbnail_url: null,
				url: null,
				attach_type: b("MercuryAttachmentType").ERROR,
				error_msg: c,
				message_file_fbid: null,
				url_shimhash: null,
				url_skipshim: null,
				preview: null
			}
		} else {
			c = a.attribution_app;
			var d;
			if (c == null) d = null;
			else {
				var e = c.square_logo;
				d = {
					id: c.id,
					icon_url: e == null ? null : e.uri,
					metadata: a.attribution_metadata,
					name: c.name
				}
			}
			e = a.url;
			return {
				app_attribution: d,
				icon_type: a.content_type,
				mime_type: a.mimetype,
				metadata: null,
				name: a.filename,
				preview_height: null,
				preview_url: a.preview_url,
				preview_width: null,
				rel: "ignore",
				share: null,
				thumbnail_url: null,
				url: e == null ? null : e,
				attach_type: b("MercuryAttachmentType").FILE,
				error_msg: void 0,
				message_file_fbid: a.message_file_fbid,
				url_shimhash: a.url_shimhash,
				url_skipshim: a.url_skipshim,
				preview: a.preview
			}
		}
	}

	function i(a, c, d) {
		var e = a.chat_image;
		e = e == null ? [null, null, null] : [e.uri, e.width, e.height];
		var f = e[0],
			g = a.chat_image;
		g = g == null ? null : {
			width: g.width,
			height: g.height
		};
		var h = a.large_image;
		h = h == null ? [null, null] : [h.uri, {
			width: h.width,
			height: h.height
		}];
		var i = a.inbox_image;
		i = i == null ? [null, null] : [i.uri, {
			width: i.width,
			height: i.height
		}];
		var j = a.attribution_app,
			k;
		if (j == null) k = null;
		else {
			var l = j.square_logo;
			k = {
				id: j.id,
				icon_url: l == null ? null : l.uri,
				metadata: a.attribution_metadata,
				name: j.name
			}
		}
		return {
			app_attribution: k,
			attach_type: b("MercuryAttachmentType").VIDEO,
			name: a.filename,
			url: a.playable_url,
			rel: "async",
			preview_url: f,
			preview_width: e[1],
			preview_height: e[2],
			large_preview_url: null,
			large_preview_width: null,
			large_preview_height: null,
			icon_type: b("MercuryAttachmentContentType").VIDEO,
			metadata: {
				fbid: a.legacy_attachment_id,
				render_as_sticker: a.video_type === "SPEAKING_STICKER",
				dimensions: {
					width: a.original_dimensions.x,
					height: a.original_dimensions.y
				},
				duration: a.playable_duration_in_ms,
				large_size: h[1],
				large_preview: h[0],
				chat_size: g,
				chat_preview: f,
				inbox_size: i[1],
				inbox_preview: i[0],
				pageid: d ? c : void 0
			},
			thumbnail_url: f,
			share: null
		}
	}

	function j(a) {
		var c = a.attribution_app,
			d;
		if (c == null) d = null;
		else {
			var e = c.square_logo;
			d = {
				id: c.id,
				icon_url: e == null ? null : e.uri,
				metadata: a.attribution_metadata,
				name: c.name
			}
		}
		return {
			app_attribution: d,
			attach_type: b("MercuryAttachmentType").FILE,
			name: a.filename,
			url: a.playable_url,
			rel: "ignore",
			preview_url: null,
			preview_width: null,
			preview_height: null,
			large_preview_url: null,
			large_preview_width: null,
			large_preview_height: null,
			icon_type: b("MercuryAttachmentContentType").MUSIC,
			metadata: {
				duration: a.playable_duration_in_ms,
				isVoicemail: a.is_voicemail ? "1" : "0",
				type: a.audio_type === "VOICE_MESSAGE" ? "fb_voice_message" : a.audio_type === "VOICE_MESSAGE_WITH_TRANSCRIPT" ? "fb_voice_message_with_transcript" : "file_attachment"
			},
			thumbnail_url: null,
			share: null,
			url_shimhash: a.url_shimhash,
			url_skipshim: a.url_skipshim
		}
	}

	function k(a, c, d) {
		var e = a.preview_image;
		e = e == null ? [null, null, null] : [e.uri, e.width, e.height];
		var f = a.animated_image;
		f = f == null ? null : f.uri;
		var g = a.attribution_app,
			h;
		if (g == null) h = null;
		else {
			var i = g.square_logo;
			h = {
				id: g.id,
				icon_url: i == null ? null : i.uri,
				metadata: a.attribution_metadata,
				name: g.name
			}
		}
		return {
			app_attribution: h,
			attach_type: b("MercuryAttachmentType").ANIMATED_IMAGE,
			name: a.filename,
			url: f,
			rel: "async",
			preview_url: e[0],
			preview_width: e[1],
			preview_height: e[2],
			large_preview_url: null,
			large_preview_width: null,
			large_preview_height: null,
			icon_type: b("MercuryAttachmentContentType").PHOTO,
			metadata: {
				fbid: a.legacy_attachment_id,
				image: f,
				dimensions: String(a.original_dimensions.x) + ("," + String(a.original_dimensions.y)),
				pageid: d ? c : void 0
			},
			thumbnail_url: f,
			share: null
		}
	}

	function l(a) {
		var c = a.original_extension === "gif" ? b("MercuryAttachmentType").ANIMATED_IMAGE : a.render_as_sticker ? b("MercuryAttachmentType").THIRDPARTYSTICKER : b("MercuryAttachmentType").PHOTO,
			d = a.preview;
		d = d == null ? [null, null, null] : [d.uri, d.width, d.height];
		if (c === b("MercuryAttachmentType").PHOTO) {
			var e = a.large_preview;
			e = e == null ? [null, null, null] : [e.uri, e.width, e.height]
		} else e = [null, null, null];
		var f = a.attribution_app,
			g;
		if (f == null) g = null;
		else {
			var h = f.square_logo;
			g = {
				id: f.id,
				icon_url: h == null ? null : h.uri,
				metadata: a.attribution_metadata,
				name: f.name
			}
		}
		h = a.thumbnail;
		return {
			app_attribution: g,
			attach_type: c,
			blurred_image_uri: a.blurred_image_uri,
			name: a.filename,
			url: null,
			rel: "async",
			preview_url: d[0],
			preview_width: d[1],
			preview_height: d[2],
			large_preview_url: e[0],
			large_preview_width: e[1],
			large_preview_height: e[2],
			icon_type: b("MercuryAttachmentContentType").PHOTO,
			metadata: {
				fbid: a.legacy_attachment_id,
				dimensions: String(a.original_dimensions.x) + ("," + String(a.original_dimensions.y))
			},
			thumbnail_url: h == null ? null : h.uri,
			share: null,
			photo_encodings: a.photo_encodings
		}
	}

	function m(a, c) {
		var d = a,
			e = c;
		if (a >= c) {
			a = b("bs_caml_primitive").caml_float_min(120, d / 2);
			c = a / (d / 2);
			return [a | 0, e / 2 * c | 0]
		} else {
			a = b("bs_caml_primitive").caml_float_min(120, e / 2);
			c = a / (e / 2);
			return [d / 2 * c | 0, a | 0]
		}
	}

	function n(a) {
		var c = m(a.width, a.height),
			d = a.pack,
			e = a.sprite_image,
			f = a.sprite_image_2x,
			g = a.padded_sprite_image,
			h = a.padded_sprite_image_2x;
		return {
			app_attribution: null,
			attach_type: b("MercuryAttachmentType").STICKER,
			name: null,
			url: a.url,
			rel: null,
			preview_url: null,
			preview_width: null,
			preview_height: null,
			large_preview_url: null,
			large_preview_width: null,
			large_preview_height: null,
			icon_type: b("MercuryAttachmentContentType").UNKNOWN,
			metadata: {
				accessibilityLabel: a.label,
				stickerID: a.id,
				packID: d == null ? null : d.id,
				frameCount: a.frame_count,
				frameRate: a.frame_rate,
				framesPerRow: a.frame_count > 1 ? a.frames_per_row : 1,
				framesPerCol: a.frame_count > 1 ? a.frames_per_column : 1,
				height: c[1],
				width: c[0],
				spriteURI: e == null ? null : e.uri,
				spriteURI2x: f == null ? null : f.uri,
				paddedSpriteURI: g == null ? null : g.uri,
				paddedSpriteURI2x: h == null ? null : h.uri,
				thumbnail_url: null,
				share: null
			}
		}
	}

	function o(a, c) {
		if (c == null) return 0;
		else return b("MessageSharedMediaIDStore.bs").setMessageIDForAttachmentID(a, c)
	}

	function a(a, c, d, e) {
		var f = [],
			g = {
				id: "",
				pack: null,
				label: "",
				frame_count: 0,
				frame_rate: 0,
				frames_per_row: 0,
				frames_per_column: 0,
				height: 0,
				padded_sprite_image: null,
				padded_sprite_image_2x: null,
				sprite_image_2x: null,
				sprite_image: null,
				url: null,
				width: 0
			},
			m = c.extensible_attachment,
			p;
		if (m == null) p = g;
		else {
			m = m.story_attachment;
			if (m == null) p = g;
			else {
				m = m.media;
				p = m == null ? g : {
					id: m.id,
					pack: m.pack,
					label: m.label,
					frame_count: m.frame_count,
					frame_rate: m.frame_rate,
					frames_per_row: m.frames_per_row,
					frames_per_column: m.frames_per_column,
					height: m.height,
					padded_sprite_image: m.padded_sprite_image,
					padded_sprite_image_2x: m.padded_sprite_image_2x,
					sprite_image_2x: m.sprite_image_2x,
					sprite_image: m.sprite_image,
					url: m.url,
					width: m.width
				}
			}
		}
		g = p.id;
		!(g == null) && g !== "" && f.push(n(p));
		m = c.extensible_attachment;
		m == null || f.push(b("MessengerStoryAttachmentTransformer.bs").getExtensibleAttachmentPayload(a, m));
		g = c.sticker;
		g == null || f.push(n(g));
		p = c.blob_attachments;
		p == null || p.forEach(function (b) {
			switch (b.tag | 0) {
				case 0:
					var c = b[0];
					o(c.legacy_attachment_id, d);
					f.push(l(c));
					return 0;
				case 1:
					c = b[0];
					o(c.legacy_attachment_id, d);
					f.push(k(c, a, e));
					return 0;
				case 2:
					f.push(j(b[0]));
					return 0;
				case 3:
					c = b[0];
					o(c.legacy_attachment_id, d);
					f.push(i(c, a, e));
					return 0;
				case 4:
					f.push(h(b[0]));
					return 0
			}
		});
		return f
	}
	f._getFilePayload = h;
	f._getVideoPayload = i;
	f._getAudioPayload = j;
	f._getAnimatedImagePayload = k;
	f._getImagePayload = l;
	f._getStickerDimensions = m;
	f._getStickerPayload = n;
	f._storeAttachmentMapping = o;
	f.transformAttachment = a
}), null);
__d("MessengerGroupAdminModelStatus", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		REQUIRED: "required",
		OPTIONAL: "optional",
		NOT_SUPPORTED: "not_supported"
	});
	e.exports = a
}), null);
__d("MessengerGroupAdminModelStatus.bs", ["MessengerGroupAdminModelStatus"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		if (a == null) return null;
		else {
			a = a.toUpperCase();
			switch (a) {
				case "NOT_SUPPORTED":
					return b("MessengerGroupAdminModelStatus").NOT_SUPPORTED;
				case "OPTIONAL":
					return b("MessengerGroupAdminModelStatus").OPTIONAL;
				case "REQUIRED":
					return b("MessengerGroupAdminModelStatus").REQUIRED;
				default:
					return null
			}
		}
	}
	f.fromNullableString = a
}), null);
__d("MessengerGroupAdminType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		REGULAR_ADMIN: 0,
		GROUP_CREATOR: 1,
		CHAT_SUPER_ADMIN: 2
	});
	e.exports = a
}), null);
__d("MessengerGroupThreadSubType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		ADMIN_MODEL_V2_THREAD: 1,
		FB_GROUP_CHAT: 2,
		MARKETPLACE_THREAD: 3,
		SCHOOL_CHAT: 4,
		DEPRECATED__WORK_SYNCED_CHAT: 5,
		ADMIN_NOT_SUPPORTED_THREAD: 6,
		BELL_SYNCED_CHAT: 7,
		GAMES_APP_THREAD: 8,
		VAULT_CHAT: 9,
		VERSE_CHAT: 10,
		GENERIC_COMMERCE_THREAD: 11,
		USER_JOB_THREAD: 12,
		COWORKER_GROUP_THREAD: 13,
		APPROVAL_ENFORCED_CHATROOM_THREAD: 14,
		PARENT_APPROVED_SHEPHERD_MANAGED_THREAD: 15,
		CAMPUS_GROUP_THREAD: 16,
		LOCAL_COMMUNITIES_THREAD: 17,
		CHAT_FOR_ROOM_THREAD: 18,
		GAMING_PLAY_SQUAD: 19,
		CHAT_FOR_GROUP_ADMIN_TO_MEMBER_THREAD: 20,
		EITM_BACKED_IG_1TO1_THREAD: 21
	});
	e.exports = a
}), null);
__d("MessengerGroupsSyncStatus", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		PENDING_OPT_IN: "PENDING_OPT_IN",
		OPT_IN: "OPT_IN",
		PENDING_OPT_OUT: "PENDING_OPT_OUT",
		OPT_OUT: "OPT_OUT",
		UNSET: "UNSET",
		UNSUPPORTED: "UNSUPPORTED"
	});
	e.exports = a
}), null);
__d("MessengerGroupsSyncStatus.bs", ["MessengerGroupsSyncStatus"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		if (a == null) return null;
		else switch (a) {
			case "OPT_IN":
				return b("MessengerGroupsSyncStatus").OPT_IN;
			case "OPT_OUT":
				return b("MessengerGroupsSyncStatus").OPT_OUT;
			case "PENDING_OPT_IN":
				return b("MessengerGroupsSyncStatus").PENDING_OPT_IN;
			case "PENDING_OPT_OUT":
				return b("MessengerGroupsSyncStatus").PENDING_OPT_OUT;
			case "UNSET":
				return b("MessengerGroupsSyncStatus").UNSET;
			case "UNSUPPORTED":
				return b("MessengerGroupsSyncStatus").UNSUPPORTED;
			default:
				return null
		}
	}
	f.fromNullableString = a
}), null);
__d("InstantGameUpdateXMATUpdateType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		UNKNOWN: "unknown",
		GAME_SCORE: "game_score",
		CUSTOM_MESSAGE: "custom_message"
	});
	e.exports = a
}), null);
__d("MNCommerceMessageType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		TEXT: "text",
		IMAGE: "image",
		VIDEO: "video",
		AUDIO: "audio",
		FILE: "file",
		ROBOT_TEXT: "robot_text",
		LOCATION: "location",
		FORCED_FETCH_MESSAGE: "forced_fetch_message",
		SENDER_ACTION: "sender_action",
		SHOPS_PRODUCT: "shops_product",
		SHOPS_PRODUCT_HSCROLL: "shops_product_hscroll",
		RETAIL_PRODUCT_SUBSCRIPTION: "retail_product_subscription",
		RETAIL_PROMOTION: "retail_promotion",
		RETAIL_CANCELLATION: "retail_cancellation",
		RETAIL_SHIPMENT: "retail_shipment",
		SHIPMENT_TRACKING_EVENT: "shipment_tracking_event",
		AIRLINE_CHECKIN_REMINDER: "airline_checkin_reminder",
		AIRLINE_BOARDING_PASS: "airline_boarding_pass",
		AIRLINE_CHECKIN: "airline_checkin",
		AIRLINE_BOARDINGPASS: "airline_boardingpass",
		AIRLINE_UPDATE: "airline_update",
		AIRLINE_ITINERARY: "airline_itinerary",
		CONTENT_SUBSCRIPTION: "content_subscription",
		AD_ADMIN_TEXT: "ad_admin_text",
		AD_TEXT: "ad_text",
		AD_BUBBLE: "ad_bubble",
		NON_AD: "non_ad",
		UNKNOWN: "unknown",
		OTHER: "other",
		TEMPLATE: "template",
		OPEN_GRAPH: "open_graph",
		GENERIC: "generic",
		LIST: "list",
		COMPACT_LIST: "compact_list",
		BUTTON: "button",
		RECEIPT: "receipt",
		GENERIC_LEGACY: "generic_legacy",
		ICE_BREAKER: "ice_breaker",
		FALLBACK: "fallback",
		ONE_TIME_NOTIF_REQ: "one_time_notif_req",
		CUSTOMER_FEEDBACK: "customer_feedback",
		RIDE_INTENT: "ride_intent",
		RIDE_SIGNUP: "ride_signup",
		RIDE_WELCOME: "ride_welcome",
		RIDE_ORDER_CONFIRMATION: "ride_order_confirmation",
		RIDE_REQUESTED: "ride_requested",
		RIDE_DRIVER_ON_THE_WAY: "ride_driver_on_the_way",
		RIDE_NO_DRIVER: "ride_no_driver",
		RIDE_DRIVER_ARRIVING: "ride_driver_arriving",
		RIDE_DRIVER_CANCELED: "ride_driver_canceled",
		RIDE_RIDER_CANCELED: "ride_rider_canceled",
		RIDE_COMPLETE: "ride_complete",
		RIDE_ADMIN_MESSAGE: "ride_admin_message",
		RIDE_RECEIPT: "ride_receipt",
		RIDE_REENGAGEMENT_FIRST_RIDE: "ride_reengagement_first_ride",
		GET_RIDE: "give_get_ride",
		GIVE_RIDE: "send_give_get_ride",
		REFERER_PROMO: "referer_promo",
		INSTANT_GAMES_SHARE: "instant_games_share",
		INSTANT_GAMES_SCORE: "instant_games_score",
		INSTANT_GAMES_LIVE_STREAM: "instant_games_live_stream",
		INSTANT_GAMES_CUSTOM_UPDATE: "instant_games_custom_update",
		INSTANT_GAMES_CUSTOM_UPDATE_MEDIA: "instant_games_custom_update_media",
		INSTANT_GAMES_TOURNAMENT_UPDATE: "instant_games_tournament_update",
		GAMING_SERVICES_GAME_INVITE: "GAMING_SERVICES_GAME_INVITE",
		LINK: "link_admin_message",
		UNLINK: "unlink_admin_message",
		BLOCK_ALL: "block_all_admin_message",
		UNBLOCK_ALL: "unblock_all_admin_message",
		BLOCK_PROMOTION: "block_promotion_admin_message",
		UNBLOCK_PROMOTION: "unblock_promotion_admin_message",
		INITIAL_PROMOTION: "initial_promotion_admin_message",
		WEAK_CONSENT_ADMIN_MESSAGE: "weak_consent_admin_message",
		MESSENGER_TEAM_BOT_MESSAGE: "messenger_team_bot",
		MESSENGER_BOT_BASE_GENERIC: "messenger_bot_base_generic",
		COMMERCE_COMPACT_LIST: "commerce_compact_list",
		FEEDBACK: "feedback",
		FORM_PROGRESS: "form_progress",
		MEDIA: "media",
		PLACE_CARD: "place_card"
	});
	e.exports = a
}), null);
__d("MercurySourceType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		CHAT_ORCA: "source:chat:orca",
		CHAT_LIGHT_SPEED: "source:chat:light_speed",
		CHAT_IPHONE: "source:chat:iphone",
		CHAT_JABBER: "source:chat:jabber",
		CHAT_MEEBO: "source:chat:meebo",
		CHAT_WEB: "source:chat:web",
		CHAT_TEST: "source:chat:test",
		CHAT_FORWARD_DIALOG: "source:chat:forward",
		CHAT: "source:chat",
		CONTACT_ADD_MUTATION: "source:contact_add:graphql_mutation",
		CONTACT_ADD_CYMK: "source:contact_add:cymk_suggestion",
		CONTEXTUAL_PROFILE_MESSAGE: "source:contextual_profile:message",
		COWORKER_GROUP: "source:work:coworker_group",
		COVID_HUB_MENTAL_HEALTH_UNIT: "source:covid_hub_mental_health",
		CUSTOMER_CHAT_PLUGIN: "source:discovery:customer_chat_plugin",
		EMAIL: "source:email",
		EVENT_MESSAGE_BLAST: "source:event_message_blast",
		EVENT_TICKETING: "source:event_ticket",
		EVENT_REMINDERS: "source:event_reminders",
		WHITEHAT_FBDL: "source:whitehat_fbdl",
		GENERIC_ADMIN_TEXT: "source:generic_admin_text",
		GIGABOXX_API: "source:gigaboxx:api",
		GIGABOXX_BLAST: "source:gigaboxx:blast",
		GIGABOXX_EMAIL_REPLY: "source:gigaboxx:emailreply",
		GIGABOXX_MOBILE: "source:gigaboxx:mobile",
		GIGABOXX_WAP: "source:gigaboxx:wap",
		GIGABOXX_WEB: "source:gigaboxx:web",
		GROUP_GENERAL_THREAD_AUTOJOIN: "source:group:general_thread_autojoin",
		INVITE: "source:invite",
		LEIA: "source:leia",
		MESSENGER_WEB: "source:messenger:web",
		MESSENGER_WEB_SEARCH: "source:messenger:web_search",
		MESSENGER_UNKNOWN: "source:messenger:unknown",
		REFERRALS_DIALOG: "source:referrals:dialog",
		SAM_UFI: "source:sam:ufi",
		SHARE_DIALOG: "source:share:dialog",
		SEND_PLUGIN: "source:sendplugin",
		SMS: "source:sms",
		SSI_RESOURCES: "source:ssi_resources",
		TEST: "source:test",
		TITAN_WAP: "source:titan:wap",
		TITAN_M_BASIC: "source:titan:m_basic",
		TITAN_M_FREE: "source:titan:m_free_basic",
		TITAN_M_JAPAN: "source:titan:m_japan",
		TITAN_M_MINI: "source:titan:m_mini",
		TITAN_M_TOUCH: "source:titan:m_touch",
		TITAN_M_APP: "source:titan:m_app",
		TITAN_M_TABLET: "source:titan:m_tablet",
		TITAN_M_ZERO: "source:titan:m_zero",
		TITAN_M_TALK: "source:titan:m_talk",
		TITAN_WEB: "source:titan:web",
		TITAN_FACEWEB_ANDROID: "source:titan:faceweb_android",
		TITAN_FACEWEB_BUFFY: "source:titan:faceweb_buffy",
		TITAN_FACEWEB_IPAD: "source:titan:faceweb_ipad",
		TITAN_FACEWEB_IPHONE: "source:titan:faceweb_iphone",
		TITAN_FACEWEB_UNKNOWN: "source:titan:faceweb_unknown",
		TITAN_API: "source:titan:api",
		TITAN_API_MOBILE: "source:titan:api_mobile",
		TITAN_ORCA: "source:titan:orca",
		TITAN_EMAIL_REPLY: "source:titan:emailreply",
		MOBILE: "source:mobile",
		PAGE_PLATFORM_API: "source:page_platform_api",
		PAGE_UNIFIED_INBOX: "source:page_unified_inbox",
		WHATSAPP_CALLBACK: "source:wa_callback",
		UNKNOWN: "source:unknown",
		WEB: "source:web",
		WESTWORLD: "source:westworld",
		TESTDATA: "source:testdata",
		HELPCENTER: "source:helpcenter",
		NEW_SHARE_DIALOG: "source:share:dialog:new",
		PAID_PROMOTION: "source:paid_promotion",
		BUFFY_SMS: "source:buffy:sms",
		WEBRTC_MOBILE: "source:webrtc:mobile",
		MESSENGER_COMMERCE: "source:messenger:commerce",
		MESSENGER_BOT: "source:bot",
		SERVICES_QPC_CTA_TRIGGER_MESSAGE: "source:services:qpc:cta:trigger:message",
		MESSENGER_EMPLOYEE_ONLY_BOT: "source:bot:employee_only",
		MESSENGER_OMNIM: "source:messenger:omnim",
		PAGES_PRIVATE_REPLY: "source:pages:private_reply",
		MESSENGER_FORWARD_DIALOG: "source:messenger:forward",
		MESSENGER_AD: "source:messenger:ad",
		CLICK_TO_MESSENGER_AD: "source:click_to_messenger_ad",
		MARKETPLACE: "source:marketplace",
		MARKETPLACE_CARE: "source:marketplace:care",
		MARKETPLACE_BOT: "source:marketplace:bot",
		CHEX_C2C: "source:chex:c2c",
		MESSENGER_LEAD_GEN: "source:messenger:lead_gen",
		PAGES_MESSAGE_SHORTLINK: "source:pages:message_shortlink",
		STICKER_SUBSCRIBE: "source:messenger:sticker_subscribe",
		PHOTO_TAG: "source:messenger:photo_tag",
		INTERNAL_TEST_INBOX: "source:internal:test_inbox",
		INTERNAL_TEST_PENDING: "source:internal:test_pending",
		INTERNAL_TEST_OTHER: "source:internal:test_other",
		INTERNAL_TEST_ML_ONLY: "source:internal:test_ml_only",
		JOB_SEARCH_APPLICATION: "source:job_search:application",
		JOB_SEARCH_JOB_OPENING: "source:job_search:job_opening",
		MESSENGER_JOINABLE_LINK: "source:messenger:joinable_link",
		MESSENGER_ADD_WITH_APPROVAL: "source:messenger:add_with_approval",
		MESSENGER_SMS_BRIDGE_CONVERT: "source:messenger:sms_bridge_conversion",
		TINCAN_ORCA: "source:tincan:orca",
		TINCAN_IOS: "source:tincan:ios",
		TINCAN_UNKNOWN: "source:tincan:unknown",
		FACEBOOK_GROUPS_CHANNELS: "source:groups:channels",
		GROUP_COMMERCE: "source:group_commerce",
		INTERNAL_TOOL: "source:internal:tool",
		PAGES_PLATFORM: "source:pages:platform",
		PAGES_RECOMMENDATION: "source:pages:recommendation",
		PAGES_ORDER_MANAGEMENT: "source:pages:order_management",
		PAGE_AUTO_RESPONSE: "source:pages:auto_response",
		PAGES_INVITE: "source:pages:invite",
		PAGES_CHAT_EXTENSION: "source:pages:chat_extension",
		PAGES_COMPOSER: "source:pages:composer",
		PTX: "source:ptx",
		SAVED_CHAT_EXTENSION: "source:saved:chat_extension",
		CREATOR_PAGE_INITIATE_TO_CREATOR_PAGE: "source:pages:creator_page_initiate_to_creator_page",
		LIVE_VIDEO_CHAT: "source:live_video_chat",
		GEMSTONE: "source:gemstone",
		WATCH_PARTY: "source:watch_party",
		WORK_ACTIVATION_CARD_GENERAL_GROUP_CHAT: "source:work:activation_card_general_group_chat",
		SCHOOL_COMMUNITY: "source:school_community",
		SCHOOL_COMMUNITY_COURSE: "source:school_community_course",
		SOCIAL_ASSISTANT: "source:social_assistant",
		BELL_RESEARCH: "source:bell_research",
		BELL_MESSENGER_LINKED: "source:bell_messenger_linked",
		BELL_MESSENGER_UNLINKED: "source:bell_messenger_unlinked",
		BELL_MESSENGER_ONBOARD: "source:bell_messenger_onboard",
		PROFILE_MEET_NEW_FRIENDS: "source:profile_meet_new_friends",
		PROFILE_MEET_NEW_FRIENDS_REPLY: "source:profile_meet_new_friends_reply",
		OCULUS_SHARE_TO_MESSENGER: "source:oculus_share_to_messenger",
		BFF_BOT: "source:bff:bot",
		FRIENDING_ADMIN_BUMP: "source:messenger_growth:friending_admin_bump",
		NEW_MESSENGER_USER_ADMIN_BUMP: "source:messenger_growth:new_messenger_user_admin_bump",
		EVENT_UPCOMING_BUMP: "source:messenger_growth:event_upcoming_bump",
		PHOTO_TAG_BUMP: "source:messenger_growth:photo_tag_bump",
		WALL_POST_BUMP: "source:messenger_growth:wall_post_bump",
		FRIENDVERSARY_BUMP: "source:messenger_growth:friendversary_bump",
		CUSTOMIZATION_UPSELL_BUMP: "source:messenger_growth:customization_upsell_bump",
		MESSENGER_BROADCASTFLOW: "source:messenger:broadcastflow",
		PAGE_COMMENT_MSG: "source:pages:question_triggered_convo",
		COMMENT_PIVOT: "source:messenger_growth:comment_pivot",
		PAGE_HOVERCARD: "source:pages:hovercard",
		INSTANT_GAMES_GAME_UPDATE: "source:instant_games_game_updates",
		INSTANT_GAMES_GAME_SHARE: "source:instant_games_game_share",
		INSTANT_GAMES_MATCH_MAKING: "source:instant_games_match_making",
		INSTANT_GAMES_GROUP_CREATION: "source:instant_games_group_creation",
		MOBILE_GAME_SHARE: "source:games_app:mobile_game_share",
		GAMES_SERVICE_GAME_INVITE: "source:games_service_game_invite",
		PAGE_EMAIL_REPLY: "source:pages:email_reply",
		PAGE_HOME_PAGE_PANEL: "source:page_home_page_panel",
		GROUPSYNC_MESSENGER_GROUP_CREATE: "source:groupsync:messenger_group_create",
		GROUPSYNC_SYNC_FROM_FB: "source:groupsync:sync_from_fb",
		GROUPSYNC_NAMING: "source:groupsync:naming",
		GROUPSYNC_THREAD_INFO_SYNC_FROM_FB: "source:groupsync:thread_info_sync",
		GROUPSYNC_THREAD_INFO_SYNC_FROM_FB_NON_PARTICIPANT: "source:groupsync:thread_info_sync_non_participant",
		WORK_GARDEN_CREATION: "source:work:garden:creation",
		WORK_GROUP_SYNCED_CHAT_CREATION: "source:work:groupchat:creation",
		WORK_DEFAULT_GROUP_SYNCED_CHAT_CREATION: "source:work:defaultgroupchat:creation",
		WORK_GROUP_SYNCED_CHAT_MEMBER_SYNC: "source:work:groupchat:member_sync",
		WORK_MEETING_SYNCED_CHAT_MEMBER_SYNC: "source:work:meetingchat:member_sync",
		WORK_GROUP_SYNCED_CHAT_DESCRIPTION_SYNC: "source:work:groupchat:description_sync",
		WORK_GROUP_SYNCED_CHAT_NAME_SYNC: "source:work:groupchat:name_sync",
		WORK_GROUP_SYNCED_CHAT_OPT_IN: "source:work:groupchat:opt_in",
		PAGE_PQI_MESSAGE: "source:pages:pqi_message",
		PAGE_PLUGIN_MESSAGE: "source:pages:page_plugin_message",
		WORKPLACE_ACTIVATION_GOLDIE_CUSTOM_INVITE: "source:workplace:activation_goldie_custom_invite",
		WORKPLACE_CHAT_DESKTOP: "source:workchat:desktop",
		WORKPLACE_QUICKCHAT: "source:workchat:quickchat",
		WORKPLACE_SIGNUP_PAGE_ADMIN_INVITE: "source:workplace:signup_page_admin_invite",
		WORKPLACE_APPROVALS: "source:workplace:approvals",
		WORKPLACE_TEAMWORK_CALL: "source:workplace:teamwork_call",
		WORKPLACE_TEAMWORK_TEST: "source:workplace:test",
		WORKPLACE_TEAMWORK_GROUP_POST: "source:workplace:group_post",
		CREATOR_STUDIO: "source:creator_studio",
		FB_GROUP_ADMINSHIP_SYNC: "source:fbgroup:adminship_sync",
		FB_GROUP_CHAT_MUTE_MEMBER: "source:fbgroup:mute_member",
		MESSENGER_ADS_PARTIAL_AUTOMATED_REMINDER: "source:ads_partial_automated:reminder",
		COMMUNITY_HELP_LISTING: "source:community_help_listing",
		FUNDRAISER_MESSAGE_BLAST: "source:fundraiser_message_blast",
		MENTORSHIP: "source:mentorship",
		MENTORSHIP_DISCUSSION_TOPIC: "source:mentorship_discussion_topic",
		MENTORSHIP_OUTREACH: "source:mentorship_outreach",
		VOLUNTEERING_ORGANIZER_REACHOUT: "source:volunteering_organizer_reachout",
		VOD_CONVERSATION: "source:vod_conversation",
		LOCAL_SEARCH_SERVICES: "source:local_search_services",
		YOUTH_VAULT: "source:youth_vault",
		MESSENGER_KIDS: "source:messenger_kids",
		MESSENGER_KIDS_ACTIVITY: "source:messenger_kids:activity",
		STORY_REPLY: "source:story_reply",
		LOCAL_DEV_PLATFORM: "source:local_dev_platform",
		INSTAGRAM_DIRECT: "source:instagram_direct",
		WA_MSGR_INTEROP: "source:wa-msgr-interop",
		C4G_CURRENT_GROUP_MEMBERS_ENTINTEGRITY: "source:c4g_current_group_members_entintegrity",
		CHATROOM: "source:chatroom",
		FB_GROUPS: "source:fb_groups",
		FB_INBOX: "source:messaging_inbox_in_blue",
		FB_JOINABLE_VIDEO_CHATS: "source:fb_joinable_video_chats",
		FB_PAGE: "source:fb_page",
		FB_PROFILE: "source:fb_profile",
		FB_STORY: "source:fb_story",
		FB_TOP_OF_FEED_UNIT: "source:fb_top_of_feed_unit",
		FEED: "source:feed",
		MIB_NOTIFICATION: "source:mib_notification",
		KOTOTORO: "source:kototoro",
		SHARESHEET: "source:sharesheet",
		UFI: "source:ufi",
		ROOMS_INVITE: "source:rooms_invite",
		FRIENDS_HOME: "source:friends_home",
		FRIENDS_HOME_SENDER_SIDE_POST_ACCEPT: "source:friends_home:sender_side_post_accept",
		NPE_WHALE: "source:npe_whale",
		NPE_POUTINE: "source:npe_poutine",
		NPE_HOBBI: "source:npe_hobbi",
		SHOPS_XMA_DOGFOODING: "source:shops_xma_dogfooding",
		CHAT_FOR_ROOM: "source:chat_for_room",
		WORK_AUTOMATION: "source:work_automation",
		WORK_ROOM_INCALL_CHAT: "source:work_room_incall_chat",
		MESSENGER_ROOM_INCALL_CHAT: "source:messenger_room_incall_chat",
		SECURITY_ACADEMY_BOT: "source:security_academy_bot",
		VR_MESSENGER: "source:vr_messenger",
		PRODUCT_PICKER: "product_picker"
	});
	e.exports = a
}), null);
__d("MessageProfileRangeType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		NONE: "n",
		PROFILE: "p",
		THREAD: "t",
		THREAD_ACTIVE: "a"
	});
	e.exports = a
}), null);
__d("MessageUnsendabilityStatus", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		CAN_UNSEND: "can_unsend",
		DENY_LOG_MESSAGE: "deny_log_message",
		DENY_TOMBSTONE_MESSAGE: "deny_tombstone_message",
		DENY_FOR_NON_SENDER: "deny_for_non_sender",
		DENY_P2P_PAYMENT: "deny_p2p_payment",
		DENY_STORY_REACTION: "deny_story_reaction",
		DENY_BLOB_ATTACHMENT: "deny_blob_attachment",
		DENY_MESSAGE_NOT_FOUND: "deny_message_not_found"
	});
	e.exports = a
}), null);
__d("MessageUnsendabilityStatus.bs", ["MessageUnsendabilityStatus"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		if (a == null) return null;
		else switch (a) {
			case "can_unsend":
				return b("MessageUnsendabilityStatus").CAN_UNSEND;
			case "deny_blob_attachment":
				return b("MessageUnsendabilityStatus").DENY_BLOB_ATTACHMENT;
			case "deny_for_non_sender":
				return b("MessageUnsendabilityStatus").DENY_FOR_NON_SENDER;
			case "deny_log_message":
				return b("MessageUnsendabilityStatus").DENY_LOG_MESSAGE;
			case "deny_p2p_payment":
				return b("MessageUnsendabilityStatus").DENY_P2P_PAYMENT;
			case "deny_story_reaction":
				return b("MessageUnsendabilityStatus").DENY_STORY_REACTION;
			case "deny_tombstone_message":
				return b("MessageUnsendabilityStatus").DENY_TOMBSTONE_MESSAGE;
			default:
				return null
		}
	}
	f.fromNullableString = a
}), null);
__d("MessagingGenericAdminTextType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		ALOHA_AUTOCONNECT_INVITED: "aloha_autoconnect_invited",
		ALOHA_CONTACT_ADDED: "aloha_contact_added",
		ALOHA_CONTACT_ADDED_TO_ALOHA_PROXY_USER: "aloha_contact_added_to_aloha_proxy_user",
		ALOHA_CONTACT_REMOVED: "aloha_contact_removed",
		ALOHA_INVITE_OWNER_ACCEPT: "aloha_invite_owner_accept",
		ALOHA_INVITE_OWNER_DECLINE: "aloha_invite_owner_decline",
		ALOHA_MEDIA_ADDED: "aloha_media_added",
		ALOHA_MEDIA_SENT: "aloha_media_sent",
		ALOHA_VISUAL_MEDIA_SENT: "aloha_visual_media_sent",
		ALOHA_OWNER_INVITED: "aloha_owner_invited",
		ALOHA_PROXY_USER_NAME_SET: "aloha_proxy_user_name_set",
		ALOHA_PROXY_USER_PROFILE_PHOTO_SET: "aloha_proxy_user_profile_photo_set",
		ALOHA_WIFI_CREDENTIALS_SET: "aloha_wifi_credentials_set",
		ALOHA_USER_JOINED_CALL_ON_ALOHA: "aloha_user_joined_call_on_aloha",
		ALOHA_CALL_ENDED_ON_ALOHA: "aloha_call_ended_on_aloha",
		ALOHA_CALL_INVITE: "aloha_call_invite",
		BCMP_RESPOND_TO_PROJECT_BRIEF: "bcmp_respond_to_project_brief",
		BCMP_BRAND_INITIATED_MESSAGE: "bcmp_brand_initiated_message",
		MADE_POLL_VOTE: "made_poll_vote",
		GROUP_POLL: "group_poll",
		ROLL_CALL_STICKER: "roll_call_sticker",
		GENERIC_NEW_CONNECTION: "generic_new_connection",
		CONFIRM_FRIEND_REQUEST: "confirm_friend_request",
		THREAD_CUSTOMIZATION_UPSELL: "thread_customization_upsell",
		PHONE_CONTACT_UPLOAD: "phone_contact_upload",
		RELATIONSHIP_CREATED: "relationship_created",
		ACCEPT_PENDING_THREAD: "accept_pending_thread",
		RAMP_UP_WELCOME_MESSAGE: "ramp_up_welcome_message",
		CHANGE_THREAD_THEME: "change_thread_theme",
		CHANGE_THREAD_ICON: "change_thread_icon",
		GROUP_THREAD_CREATED: "group_thread_created",
		THREAD_EPHEMERAL_SEND_MODE: "thread_ephemeral_send_mode",
		INVITE_ACCEPTED: "invite_accepted",
		MESSENGER_INVITE_SENT: "messenger_invite_sent",
		TURN_ON_PUSH: "turn_on_push",
		JOURNEY_PROMPT_COLOR: "journey_prompt_color",
		JOURNEY_PROMPT_LIKE: "journey_prompt_like",
		JOURNEY_PROMPT_NICKNAME: "journey_prompt_nickname",
		JOURNEY_PROMPT_SETUP: "journey_prompt_setup",
		CHANGE_THREAD_NICKNAME: "change_thread_nickname",
		NOTIFY_GROUP_MAYORSHIP: "notify_group_mayorship",
		PROMPT_GROUP_MAYORSHIP_CUSTOMIZATION: "prompt_group_mayorship_customization",
		MESSAGE_COUNT_MILESTONE_MESSAGE: "message_count_milestone_message",
		BOT_THREAD_SUBSCRIPTION: "bot_thread_subscription",
		RTC_CALL_LOG: "rtc_call_log",
		RTC_PAGE_CALLBACK: "rtc_page_callback",
		RTC_INSTANT_VIDEO_LIFECYCLE: "rtc_instant_video_lifecycle",
		JOURNEY_PROMPT_BOT: "journey_prompt_bot",
		RIDE_ORDERED_MESSAGE: "ride_ordered_message",
		DESTINATION_ETA_MESSAGE: "destination_eta_message",
		RIDE_ARRIVED_MESSAGE: "ride_arrived_message",
		JOURNEY_PROMPT_NEW_SETUP: "journey_prompt_new_setup",
		LIGHTWEIGHT_EVENT_CREATE: "lightweight_event_create",
		LIGHTWEIGHT_EVENT_DELETE: "lightweight_event_delete",
		LIGHTWEIGHT_EVENT_NOTIFY: "lightweight_event_notify",
		LIGHTWEIGHT_EVENT_NOTIFY_BEFORE_EVENT: "lightweight_event_notify_before_event",
		LIGHTWEIGHT_EVENT_RSVP: "lightweight_event_rsvp",
		LIGHTWEIGHT_EVENT_UPDATE: "lightweight_event_update",
		LIGHTWEIGHT_EVENT_UPDATE_LOCATION: "lightweight_event_update_location",
		LIGHTWEIGHT_EVENT_UPDATE_TIME: "lightweight_event_update_time",
		LIGHTWEIGHT_EVENT_UPDATE_TITLE: "lightweight_event_update_title",
		SAFETY_LOCATION_REQUEST_SENT: "safety_location_request_sent",
		SAFETY_LOCATION_REQUEST_RESPONDED: "safety_location_request_responded",
		SAFETY_LOCATION_REQUEST_DENIED: "safety_location_request_denied",
		AD_MANAGE_MESSAGE: "ad_manage_message",
		ADMIN_TEXT_WITH_LINK: "admin_text_with_link",
		AD_REPLY_MESSAGE: "ad_reply_message",
		TAGGED_PHOTO: "tagged_photo",
		GAME_SCORE: "game_score",
		INSTANT_GAME_UPDATE: "instant_game_update",
		INSTANT_GAME_BOT_INTRO: "instant_game_bot_intro",
		INSTANT_GAME_BOT_FEEDBACK: "instant_game_bot_feedback",
		INSTANT_GAME_WORLD_CUP_INTRO: "intant_games_world_cup_intro",
		INSTANT_GAME_CUSTOM_UPDATE_NUX_ADMIN_MESSAGE: "instant_game_custom_update_nux_admin_message",
		INSTANT_GAME_OFFLINE_MATCH_INTRO: "instant_game_offline_match_intro",
		INSTANT_GAME_TOURNAMENT_REMINDER: "instant_game_tournament_reminder",
		MEDIA_SUBSCRIPTION_MANAGE: "media_subscription_manage",
		M_AI_SURVEY: "m_ai_survey",
		PHONE_NUMBER_LOOKUP_NOTICE: "phone_number_lookup_notice",
		MESSENGER_PRECHECKED_PLUGIN: "messenger_prechecked_plugin",
		MESSENGER_THREAD_RESURRECTION_NOTICE: "messenger_thread_resurrection_notice",
		MESSENGER_ENTRY_BY_MDOTME_LINK_WITH_REF: "messenger_entry_by_mdotme_link_with_ref",
		ADD_CONTACT: "add_contact",
		PRODUCT_INVOICE_RECEIPT_REJECTED: "product_invoice_receipt_rejected",
		PRODUCT_INVOICE_PAID: "product_invoice_paid",
		PRODUCT_INVOICE_VOIDED: "product_invoice_voided",
		PRODUCT_INVOICE_SHIPPED: "product_invoice_shipped",
		PRODUCT_INVOICE_PAYMENT_EXPIRED: "product_invoice_payment_expired",
		PRODUCT_INVOICE_RECEIPT_UPLOADED: "product_invoice_receipt_uploaded",
		PRODUCT_INVOICE_PAYMENT_PROCESSING: "product_invoice_payment_processing",
		PRODUCT_INVOICE_PAYMENT_FAILED: "product_invoice_payment_failed",
		PRODUCT_INVOICE_SHIPPING_UPDATE: "product_invoice_shipping_update",
		PRODUCT_INVOICE_STATUS_UPDATE: "product_invoice_status_update",
		SELLER_NOT_ONBOARDED_FOR_PAYMENTS: "seller_not_onboarded_for_payments",
		CHANGE_JOINABLE_SETTING: "change_joinable_setting",
		CHANGE_THREAD_ADMINS: "change_thread_admins",
		CHANGE_THREAD_APPROVAL_MODE: "change_thread_approval_mode",
		CAPY_SESSION_BEGIN: "capy_session_begin",
		CAPY_SESSION_BOT_BEGIN: "capy_session_bot_begin",
		CAPY_SESSION_END: "capy_session_end",
		CAPY_AGENT_JOIN: "capy_agent_join",
		CAPY_AGENT_DUMPED: "capy_agent_dumped",
		CAPY_SESSION_UNAVAILABLE: "capy_session_unavailable",
		CAPY_SESSION_WAIT_TIME: "capy_session_wait_time",
		GROUP_SMS_PARTICIPANT_JOINED: "group_sms_participant_joined",
		GROUP_SMS_PARTICIPANT_CAPPED: "group_sms_participant_capped",
		SMS_PHONE_NUMBER_CHECK: "sms_phone_number_check",
		MESSENGER_BOT_REVIEW_SENT: "messenger_bot_review_sent",
		MESSENGER_CODE_SCAN: "messenger_code_scan",
		MESSENGER_LIVECHAT_PLUGIN_OPEN: "messenger_livechat_plugin_open",
		MESSENGER_LIVECHAT_PLUGIN_GUEST_END_CHAT: "messenger_livechat_plugin_guest_end_chat",
		MESSENGER_LIVECHAT_PLUGIN_GUEST_START_CHAT: "messenger_livechat_plugin_guest_start_chat",
		MN_ACCOUNT_LINKING_TEXT: "mn_account_linking_text",
		MN_ACCOUNT_UNLINKING_TEXT: "mn_account_unlinking_text",
		MN_ACCOUNT_FORCED_UNLINKING_TEXT: "mn_account_forced_unlinking_text",
		MN_REF_SEND_TEXT: "mn_ref_send_text",
		ADS_WELCOME_MSG: "ads_welcome_msg",
		THREAD_JOINABLE_PROMOTION_TEXT: "thread_joinable_promotion_text",
		PAGES_PLATFORM_REQUEST_TEXT: "pages_platform_request_text",
		MESSENGER_NEW_USER_GET_STARTED: "messenger_new_user_get_started",
		SMS_PHONE_NUMBER_TOGGLE: "sms_phone_number_toggle",
		PAGES_PLATFORM_CREATE_APPOINTMENT: "Pages_Platform_create_appointment",
		INTERNAL_CAREER_JOBSY_REACHOUT_CONNECTED: "internal_career_jobsy_reachout_connected",
		JOINABLE_GROUP_THREAD_CREATED: "joinable_group_thread_created",
		JOINABLE_ROOM_CREATED_WITH_CO_CREATORS: "joinable_room_created_with_co_creators",
		PAGES_PLATFORM_ACCEPT_APPOINTMENT: "pages_platform_accept_appointment",
		PAGES_PLATFORM_REFERRAL_CONFIRMED_APPOINTMENT: "pages_platform_referral_confirmed_appointment",
		PAGES_PLATFORM_DECLINE_APPOINTMENT: "pages_platform_decline_appointment",
		PAGES_PLATFORM_USER_CANCEL: "pages_platform_user_cancel",
		PAGES_PLATFORM_ADMIN_CANCEL: "pages_platform_admin_cancel",
		MESSENGER_OMNIM_CREATE_FLOW: "messenger_omnim_create_flow",
		MESSENGER_OMNIM_UPDATE_FLOW: "messenger_omnim_update_flow",
		MESSENGER_OMNIM_UPDATE_FLOW_STATE: "messenger_omnim_update_flow_state",
		MESSENGER_GROUP_DESCRITPION_UPDATE: "messenger_group_description_update",
		MESSENGER_GROUP_DESCRIPTION_UPDATE_V2: "messenger_group_description_update_v2",
		MESSENGER_EXTENSION_ADD_CART: "messenger_extension_add_cart",
		MESSENGER_EXTENSION_ADD_FAVORITE: "messenger_extension_add_favorite",
		MESSENGER_AD_CONTEXT: "messenger_ad_context",
		PAGES_PLATFORM_APPOINTMENT_REMINDER: "pages_platform_appointment_reminder",
		PAGES_PLATFORM_ADMIN_DECLINE: "pages_platform_admin_decline",
		POKE_RECEIVED: "poke_received",
		MESSENGER_STATION_SUBSCRIPTION: "messenger_station_subscription",
		MESSENGER_USER_ALSO_ON_MESSENGER: "messenger_user_also_on_messenger",
		MESSENGER_INBOX2_BIRTHDAY_BUMP: "messenger_inbox2_birthday_bump",
		MESSENGER_RESPOND_REMINDER_CONFIRMATION: "messenger_respond_reminder_confirmation",
		MESSENGER_RESPOND_REMINDER: "messenger_respond_reminder",
		MESSENGER_RESPOND_REMINDER_USER_CANCEL: "messenger_respond_reminder_user_cancel",
		MESSENGER_RESPOND_REMINDER_CANCEL_SUGGESTION: "messenger_respond_reminder_cancel_suggestion",
		STARTED_SHARING_VIDEO: "started_sharing_video",
		LIVE_VIDEO_CHAT: "live_video_chat",
		PARTICIPANT_JOINED_GROUP_CALL: "participant_joined_group_call",
		MESSENGER_ONLY_PHONE_JOINED_WITH_NEW_ACCOUNT: "messenger_only_phone_joined_with_new_account",
		PAGES_COMMERCE_PAYMENT_ENABLED: "pages_commerce_payment_enabled",
		GROUP_PAYMENT_REQUEST: "group_payment_request",
		P2P_CALL_ESCALATED_TO_GROUP_CALL: "p2p_call_escalated_to_group_call",
		INVITED_TO_ESCALATED_P2P_CALL: "invited_to_escalated_p2p_call",
		EVENT_UPCOMING: "event_upcoming",
		PAGES_VISITOR_POST_SEND_MESSAGE_UPSELL: "pages_visitor_post_send_message_upsell",
		PAGES_LOW_MESSAGE_RESPONSE_RATE: "pages_low_message_response_rate",
		PAGES_START_CALL: "pages_start_call",
		PARTIES_INVITE: "parties_invite",
		WORK_INVITE_CLAIMED: "work_invite_claimed",
		WORK_BOT_INSTALLED: "work_bot_installed",
		WORK_NEW_MULTI_COMPANY_CHAT: "work_new_multi_company_chat",
		PARTIAL_AUTOMATED_FEEDBACK: "partial_automated_feedback",
		P2P_PAYMENT_REQUEST_REMINDER: "p2p_payment_request_reminder",
		PHOTO_TAG_BUMP: "photo_tag_bump",
		MESSENGER_CALL_UPGRADE_LEGACY_CLIENT: "messenger_call_upgrade_legacy_client",
		DIRECTED_WALL_POST: "directed_wall_post",
		MESSENGER_CALL_LOG: "messenger_call_log",
		P2P_PAYMENT_MONEY_RAIN_GAME_ENTRY_POINT: "p2p_payment_money_rain_game_entry_point",
		MESSENGER_MONTAGE_MENTIONS: "messenger_montage_mentions",
		PAGES_MESSAGING_BLOCK_WORDS: "pages_messaging_block_words",
		SHIPPO_TRACKING_UPDATES: "shippo_tracking_updates",
		NEO_APPROVED_CONNECTION_ADDED: "neo_approved_connection_added",
		NEO_APPROVED_USERNAME: "neo_approved_username",
		NEO_PARENT_PROXY_CREATED: "neo_parent_proxy_created",
		NEO_PARENT_PROXY_FORWARDED: "neo_parent_proxy_forwarded",
		NEO_PARENT_UNLOCK_STICKER: "neo_parent_unlock_sticker",
		CHANGE_FAVORITE_COLOR: "change_favorite_color",
		VAULT_NEW_FRIEND: "vault_new_friend",
		VAULT_DELETE_THREAD: "vault_delete_thread",
		VAULT_SCREENSHOT_THREAD: "vault_screenshot_thread",
		MARKETPLACE_ITEM_CHANGED: "marketplace_item_changed",
		MARKETPLACE_SERVICES_INITIAL_MESSAGE_CONTEXT: "marketplace_services_initial_message_context",
		LINK_CTA: "link_cta",
		BUSINESS_FEEDBACK_FORM_CONFIRMATION: "business_feedback_form_confirmation",
		BUSINESS_FEEDBACK_FORM_EXPIRING: "business_feedback_form_expiring",
		SERVICES_VERTICAL_REDEEMED_REFERRAL: "services_vertical_redeemed_referral",
		SERVICES_VERTICAL_OPT_OUT_REQUESTS: "services_vertical_opt_out_requests",
		SERVICES_VERTICAL_OPT_OUT_REQUESTS_SUCCESS: "services_vertical_opt_out_requests_success",
		SERVICES_VERTICAL_LEAD_GEN_SURVEY: "services_vertical_lead_gen_survey",
		SERVICES_VERTICAL_LEAD_GEN_SURVEY_EDIT: "services_vertical_lead_gen_survey_edit",
		PAGES_MARK_AS_PAID: "pages_mark_as_paid",
		MIGRATED_TO_WORKPLACE: "migrated_to_workplace",
		MESSENGER_GROUP_EVENT_STATUS_UPDATE: "messenger_group_event_status_update",
		NEO_APPROVED_USER_REMOVED_FROM_GROUP: "neo_approved_user_removed_from_group",
		LIVE_CHAT_SUPPORT_AGENT_JOIN: "live_chat_support_agent_join",
		LIVE_CHAT_SUPPORT_SESSION_BEGIN: "live_chat_support_session_begin",
		LIVE_CHAT_SUPPORT_SESSION_END: "live_chat_support_session_end",
		MONTAGE_DIRECT_KEEP: "montage_direct_keep",
		MONTAGE_DIRECT_EXPIRE: "montage_direct_expire",
		CHSBOT_CONVERSATION_ENDED: "chsbot_conversation_ended",
		CHSBOT_LIVE_CHAT_SUPPORT_AGENT_BEGIN: "chsbot_live_chat_support_agent_begin",
		CHSBOT_LIVE_CHAT_SUPPORT_AGENT_END: "chsbot_live_chat_support_agent_end",
		CHSBOT_LIVE_PHONE_SUPPORT_AGENT_CALLING: "chsbot_live_phone_support_agent_calling",
		CHSBOT_SUPPORT_REQUESTED: "chsbot_support_requested",
		SUPPORT_BOT_SESSION_AGENT_JOIN: "support_bot_session_agent_join",
		SUPPORT_BOT_SESSION_AGENT_LEAVE: "support_bot_session_agent_leave",
		SUPPORT_BOT_SESSION_END: "support_bot_session_end",
		SUPPORT_BOT_CALL_BEGIN: "support_bot_call_begin",
		SUPPORT_BOT_CALL_END: "support_bot_call_end",
		MESSENGER_SUBSCRIBE_TO_UPDATES: "messenger_subscribe_to_updates",
		MESSENGER_UNSUBSCRIBE_FROM_UPDATES: "messenger_unsubscribe_from_updates",
		MESSENGER_BLOCK_MESSAGES: "messenger_block_messages",
		MESSENGER_UNBLOCK_MESSAGES: "messenger_unblock_messages",
		MESSENGER_TURN_ON_MESSAGES: "messenger_turn_on_messages",
		MESSENGER_TURN_OFF_MESSAGES: "messenger_turn_off_messages",
		THANKS_FOR_SHARING_MESSAGE_CONTEXT: "thanks_for_sharing_message_context",
		GROUP_ADMIN_MODEL_NUX: "group_admin_model_nux",
		MESSENGER_PAYMENT_INCENTIVE_INFO: "messenger_payment_incentive_info",
		MESSENGER_PLATFORM_PERSONA: "messenger_platform_persona",
		MESSENGER_GROUP_SYNC_OPT_IN: "messenger_group_sync_opt_in",
		MESSENGER_GROUP_SYNC_OPT_OUT: "messenger_group_sync_opt_out",
		MENTORSHIP_MATCH: "mentorship_match",
		MENTORSHIP_PROGRAM_MATCH: "mentorship_program_match",
		MENTORSHIP_PROGRAM_CONTINUE: "mentorship_program_continue",
		MENTORSHIP_PROGRAM_LEAVE: "mentorship_program_leave",
		MENTORSHIP_PROGRAM_LEAVE_PROMPT: "mentorship_program_leave_prompt",
		MENTORSHIP_CURRICULUM_STEP: "mentorship_curriculum_step",
		MENTORSHIP_DISCUSSION_TOPIC_SET_PROMPT: "mentorship_discussion_topic_set_prompt",
		MENTORSHIP_CHECK_IN_REMINDER: "mentorship_check_in_reminder",
		MENTORSHIP_DISCLAIMER: "mentorship_disclaimer",
		PAGES_CALL_DEFLECTION_UPSELL: "pages_call_deflection_upsell",
		RTC_PHOTOBOOTH: "rtc_photobooth",
		DELAYED_PHONE_NUMBER_MATCH: "delayed_phone_number_match",
		AUTOMATIC_TRANSLATION_ENABLED: "automatic_translation_enabled",
		AUTOMATIC_TRANSLATION_AUTO_ENABLED: "automatic_translation_auto_enabled",
		AUTOMATIC_TRANSLATION_DISABLED: "automatic_translation_disabled",
		AUTOMATIC_TRANSCRIPTION_ENABLED: "automatic_transcription_enabled",
		AUTOMATIC_TRANSCRIPTION_DISABLED: "automatic_transcription_disabled",
		MESSENGER_ROOM_MIGRATION: "messenger_room_migration",
		PAGE_ADMIN_RESPONSIVENESS_REMINDER: "page_admin_responsiveness_reminder",
		MESSENGER_GROWTH_GENERIC_ADMIN_TEXT: "messenger_growth_generic_admin_text",
		MESSENGER_TALK_TO_YOUR_MOM_REMINDER: "messenger_talk_to_your_mom_reminder",
		PAYMENT_INCENTIVE_RECEIVED: "payment_incentive_received",
		PAGES_THREAD_REMINDER: "pages_thread_reminder",
		MESSENGER_PLATFORM_PERSONA_LEAVE_THREAD: "messenger_platform_persona_leave_thread",
		STORY_REPLY_CONTEXT: "story_reply_context",
		PAGES_AUTOMATED_RESPONSE_RECOMMENDATION: "pages_automated_response_recommendation",
		PAGES_AUTOMATED_RESPONSE_SMART_REPLY: "pages_automated_response_smart_reply",
		PAGES_AUTOMATED_RESPONSE_JOB_APPLICATION: "pages_automated_response_job_APPLICATION",
		MESSENGER_ICEBREAKER_VOTE_CAST: "messenger_icebreaker_vote_cast",
		PARTIES_PRESENCE: "parties_presence",
		PAGE_THREAD_ADMIN_ASSIGNMENT_TEXT: "page_thread_admin_assignment_text",
		RTC_INSTANT_ACTIVITY_LIFECYCLE: "rtc_instant_activity_lifecycle",
		RTC_VIDEO_CHAT_LINK_LIFECYCLE: "rtc_video_chat_link_lifecycle",
		RTC_REDUCE_CALL_QUALITY: "rtc_reduce_call_quality",
		SHIBA_MOCK_BOT_RESTART_CHAT_TEXT: "shiba_mock_bot_restart_chat_text",
		MARKETPLACE_RENTALS_INITIAL_MESSAGE: "marketplace_rentals_initial_message",
		MARKETPLACE_RENTALS_SENDER_INFO: "marketplace_rentals_sender_info",
		PAGES_MARK_AS_PAID_NEW: "pages_mark_as_paid_new",
		MESSENGER_BUSINESS_REPORT_SPAM: "messenger_business_report_spam",
		MESSENGER_BUSINESS_REPORT_INAPPROPRIATE: "messenger_business_report_inappropriate",
		MESSENGER_BUSINESS_REPORT_OTHER_ABUSE: "messenger_business_report_other_abuse",
		FRIENDED_IN_MESSENGER: "friended_in_messenger",
		MARKETPLACE_REPLY_REMINDER: "marketplace_reply_reminder",
		VOD_CONVERSATION_SEND_MESSAGE: "vod_conversation_send_message",
		SENT_UNCONNECTED_MESSAGE: "sent_unconnected_message",
		MESSENGER_SHARED_WITH: "messenger_shared_with",
		PAGE_THREAD_ACTION_SYSTEM_ADD_DETAILS: "page_thread_action_system_add_details",
		PAGE_USER_MESSENGER_CONNECTED: "page_user_messenger_connected",
		FB_ONLY_BOT_TEXT: "fb_only_bot_text",
		MESSENGER_SCHOOL_CHAT_AUTO_ADD_USER: "messenger_school_chat_auto_add_user",
		LIVING_ROOM_MESSAGE: "living_room_message",
		MESSENGER_FRIENDVERSARY_SHARED_TO: "messenger_friendversary_shared_to",
		PARENT_APPROVED_NEW_FRIEND_CODE: "parent_approved_new_friend_code",
		CHAT_ENTICEMENT_JOINED: "chat_enticement_joined",
		EVENT_CONFIRMED_GOING: "event_confirmed_going",
		CHEX_ORDER_STATE_CHANGED: "chex_order_state_changed",
		TWEENS_MUTUAL_INTERESTS: "tweens_mutual_interests",
		MESSENGER_CARE_PII_PRIVACY_INTRO: "messenger_care_pii_privacy_intro",
		MESSENGER_CARE_AUTH_LINKS_REF: "messenger_care_auth_links_ref",
		MARKETPLACE_RATE_SELLER: "marketplace_rate_seller",
		GEMSTONE_THREAD_CREATION: "gemstone_thread_creation",
		GEMSTONE_FB_MESSENGER_THREAD_CREATION: "gemstone_fb_messenger_thread_creation",
		GEMSTONE_CONTACT_SHARE_UPSELL: "gemstone_contact_share_upsell",
		MNF_LIGHTWEIGHT_LIKE: "mnf_lightweight_like",
		WORKCHAT_REMINDER_ADMIN_TEXT: "workchat_reminder_admin_text",
		WORKCHAT_REMINDER_LINK_CTA: "workchat_reminder_link_cta",
		WORKCHAT_RECIPIENT_ON_DND_WARNING: "workchat_recipient_on_dnd_warning",
		WORKCHAT_PIN_MESSAGE_ACTION: "workchat_pin_message_action",
		WORKCHAT_UNPIN_MESSAGE_ACTION: "workchat_unpin_message_action",
		CHATS_IN_GROUPS_PRE_MIGRATION: "chats_in_groups_pre_migration",
		CHATS_IN_GROUPS_MIGRATION: "chats_in_groups_migration",
		POST_SHARED_FROM_GROUP: "post_shared_from_group",
		WORKCHAT_ACTIVATION_WELCOME_MESSAGE: "workchat_activation_welcome_message",
		WORKCHAT_SELF_CHAT_INITIATOR: "workchat_self_chat_initiator",
		WORKCHAT_ACTIVATION_UNCLAIMED_ACCOUNT_WELCOME_MESSAGE: "workchat_activation_unclaimed_account_welcome_message",
		MARKETPLACE_ASSISTANT_SUPPORT_CASE_START: "marketplace_assistant_support_case_start",
		MARKETPLACE_ASSISTANT_SUPPORT_CASE_END: "marketplace_assistant_support_case_end",
		SECURITY_HUB_AGENT_LEFT: "security_hub_agent_left",
		SECURITY_HUB_AGENT_JOINED: "security_hub_agent_joined",
		NEO_SEND_DGG: "neo_send_dgg",
		SECURITY_HUB_AGENT_REASSIGNED: "security_hub_agent_reassigned",
		MARKETPLACE_MESSAGE_ENHANCEMENT: "marketplace_message_enhancement",
		C4G_NEW_PARTICIPANT_JOIN: "c4g_new_participant_join",
		NEO_SHARE_VIRTUAL_PET: "neo_share_virtual_pet",
		NEO_SHARE_ASYNC_GAME_SCORE: "neo_share_async_game_score",
		NEO_UPDATE_EMOJI_STATUS: "neo_update_emoji_status",
		NEO_NOTIFY_PARENT_EMOJI_STATUS: "neo_notify_parent_emoji_status",
		NEO_BEACON_QUICK_REACTION: "neo_beacon_quick_reaction",
		NEO_BEACON_QUICK_REPLY: "neo_beacon_quick_reply",
		MARKETPLACE_PROFILE_DESCRIPTION: "marketplace_profile_description",
		THREAD_THEME_DEPRECATION: "thread_theme_deprecation",
		MAKETPLACE_SELLER_REQUEST_RATING: "maketplace_seller_request_rating",
		PRODUCT_INVOICE_CREATED: "PRODUCT_INVOICE_CREATED",
		REJOINED_GROUP_THREAD_AFTER_ERROR: "rejoined_group_thread_after_error",
		IG_DIRECT_CALL_LOG: "ig_direct_call_log",
		PAYMENT_REQUEST_REMINDER: "payment_request_reminder",
		MARKETPLACE_BSG_CONTACT_SELLER: "marketplace_bsg_contact_seller",
		MARKETPLACE_TXN_QUESTION: "marketplace_txn_question",
		MARKETPLACE_BUYER_TXN_QUESTION: "marketplace_buyer_txn_question",
		WORKCHAT_DETACH_SYNCED_GROUP_CHAT: "workchat_detach_synced_group_chat",
		CHAT_PLUGIN_GUEST_EXPIRATION: "chat_plugin_guest_expiration",
		MARKETPLACE_FOLLOW_SUGGESTION: "marketplace_follow_suggestion",
		CIP_REFERRAL_MESSAGE: "cip_referral_message",
		FB_LOGIN_B2P: "fb_login_b2p",
		GROUP_STORIES_STARTER: "group_stories_starter",
		GROUP_STORIES_GROUP_POLL_VOTE: "group_stories_group_poll_vote",
		UPDATE_EVENT_RSVP: "update_event_rsvp",
		EO_SRT_HELPDESK_TECHNICIAN_JOINED: "eo_srt_helpdesk_technician_joined",
		EO_SRT_HELPDESK_TECHNICIAN_LEFT: "eo_srt_helpdesk_technician_left",
		KICKOFF_EVENT_CHAT_THREAD: "kickoff_event_chat_thread",
		COMMUNITY_CHATS_DESCRITPION_UPDATE: "community_chats_description_update",
		COMMUNITY_CHATS_THREAD_CREATION: "community_chats_thread_creation",
		MARKETPLACE_MEETING_PLAN_DELETED: "marketplace_meeting_plan_deleted",
		MARKETPLACE_COMMERCE_POST_PRIVATE_REPLY: "marketplace_commerce_post_private_reply",
		PRIVATE_REPLY_ADMIN_TEXT_LOG: "private_reply_admin_text_log",
		CHAT_PLUGIN_UPGRADE_PAGE_SIDE: "chat_plugin_upgrade_page_side",
		MARKETPLACE_DRAFT_THREAD: "marketplace_draft_thread",
		PRODUCT_INVOICE_PAYMENT_DISPUTED: "product_invoice_payment_disputed",
		SHH_MODE_SCREENSHOT: "shh_mode_screenshot",
		MESSAGING_REACHABILITY_ONE_WAY_SEND: "messaging_reachability_one_way_send",
		NEO_LINK_SHARING: "neo_link_sharing",
		MARKETPLACE_REPLY_REMINDER_1_TO_1_THREAD: "marketplace_reply_reminder_1_to_1_thread",
		MARKETPLACE_COMMENT_TO_MESSAGING: "marketplace_comment_to_messaging",
		ADULT_MINOR_INTERACTION_ONE_WAY_SEND: "adult_minor_interaction_one_way_send",
		SHARED_ITEM_XMA: "shared_item_xma"
	});
	e.exports = a
}), null);
__d("MessagingTagUtils", ["MercurySourceType", "MessagingTagConstants"], (function (a, b, c, d, e, f) {
	"use strict";
	f.getSourceFromTags = a;
	f.getSourceTags = c;
	var g = new Set(Object.values(b("MercurySourceType")));

	function a(a) {
		for (var b = 0; b < a.length; b++) {
			var c = a[b];
			if (g.has(c)) return c
		}
		return "source:unknown"
	}

	function h(a) {
		for (var c = 0; c < a.length; c++) {
			var d = a[c];
			d = d.split(b("MessagingTagConstants").app_id_root);
			if (d.length > 1) return d[1].trim()
		}
		return null
	}

	function c(a, c) {
		var d = [],
			e = h(a);
		e && b("MessagingTagConstants").orca_app_ids.indexOf(e) !== -1 && d.push("source:messenger");
		b("MessagingTagConstants").chat_sources.indexOf(c) !== -1 && d.push("source:chat");
		b("MessagingTagConstants").email_source === c && d.push("source:email");
		b("MessagingTagConstants").mobile_sources.indexOf(c) !== -1 && d.push("source:mobile");
		a.indexOf("source:workchat:desktop") !== -1 && d.push("source:workchat:desktop");
		return d
	}
}), null);
__d("P2PPaymentLogMessageSubtype", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		SENT_IN_GROUP: "sent_in_group",
		CANCELED_SENDER_RISK: "canceled_sender_risk",
		CANCELED_DECLINED: "canceled_declined",
		CANCELED_RECIPIENT_RISK: "canceled_recipient_risk",
		CANCELED_EXPIRED: "canceled_expired",
		CANCELED_SAME_CARD: "canceled_same_card",
		CANCELED_CUSTOMER_SERVICE: "canceled_customer_service",
		CANCELED_CHARGEBACK: "canceled_chargeback",
		CANCELED_SYSTEM_FAIL: "canceled_system_fail",
		REQUEST_CANCELED_BY_REQUESTER: "request_canceled_by_requester",
		REQUEST_DECLINED_BY_REQUESTEE: "request_declined_by_requestee",
		REQUEST_EXPIRED: "request_expired",
		REQUEST_REMINDER: "request_reminder",
		MONEY_RAIN_GAME_ENTRY_POINT: "money_rain_game_entry_point"
	});
	e.exports = a
}), null);
__d("StoryAttachmentStyle", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		FALLBACK: "fallback",
		SHARE: "share",
		SHARE_MEDIUM: "share_medium",
		SHARE_SEVERE: "share_severe",
		SHARE_PORTRAIT: "share_portrait",
		OG_COMPOSER_SIMPLE: "og_composer_simple",
		SPORTS_MATCHUP: "sports_matchup",
		SHARE_LARGE_IMAGE: "share_large_image",
		PHOTO: "photo",
		COVER_PHOTO: "cover_photo",
		INSPIRATION_PHOTO: "inspiration_photo",
		ALBUM: "album",
		NEW_ALBUM: "new_album",
		COUPON: "coupon",
		QUESTION: "question",
		ANSWER: "answer",
		OPTION: "option",
		GALLERY: "gallery",
		STREAM_PUBLISH: "stream_publish",
		MUSIC_AGGREGATION: "music_aggregation",
		ITEM_LIST: "list",
		HIGH_SCORE: "high_score",
		SCORE_LEADERBOARD: "score_leaderboard",
		FRIEND_LIST: "friend_list",
		POPULAR_OBJECTS: "popular_objects",
		AVATAR_LIST: "avatar_list",
		AVATAR: "avatar",
		AVATAR_WITH_VIDEO: "avatar_with_video",
		EVENT: "event",
		CANCELED_EVENT: "canceled_event",
		MINUTIAE_EVENT: "minutiae_event",
		EXPERIENCE: "experience",
		LIFE_EVENT: "life_event",
		GIFT: "gift",
		IMAGE_SHARE: "image_share",
		ANIMATED_IMAGE_SHARE: "animated_image_share",
		ANIMATED_IMAGE_AUTOPLAY: "animated_image_autoplay",
		ANIMATED_IMAGE_VIDEO: "animated_image_video",
		ANIMATED_IMAGE_VIDEO_AUTOPLAY: "animated_image_video_autoplay",
		NOTE: "note",
		TOPIC: "topic",
		TOPIC_FOLLOWING_TOPIC: "topic_following_topic",
		FILE_UPLOAD: "file_upload",
		FOLDER: "folder",
		NOTIFICATION_TARGET: "notification_target",
		UNAVAILABLE: "unavailable",
		PAGE_RECOMMENDATION: "page_recommendation",
		PAGE_VIDEO_PLAYLIST: "page_video_playlist",
		VIDEO: "video",
		VIDEO_INLINE: "video_inline",
		VIDEO_AUTOPLAY: "video_autoplay",
		VIDEO_SHARE: "video_share",
		VIDEO_SHARE_HIGHLIGHTED: "video_share_highlighted",
		VIDEO_SHARE_YOUTUBE: "video_share_youtube",
		VIDEO_DIRECT_RESPONSE: "video_direct_response",
		VIDEO_DIRECT_RESPONSE_AUTOPLAY: "video_direct_response_autoplay",
		VIDEO_SHOP: "video_shop",
		INSPIRATION_VIDEO: "inspiration_video",
		MULTI_VIDEOS_STITCHED: "multi_videos_stitched",
		MAP: "map",
		OG_MAP: "og_map",
		PRODUCT: "product",
		EXTERNAL_PRODUCT: "external_product",
		FITNESS_COURSE: "fitness_course",
		APPLICATION: "application",
		STICKER: "sticker",
		EXTERNAL_OG_PRODUCT: "external_og_product",
		TRAVEL_LOG: "travel_log",
		MULTI_SHARE: "multi_share",
		MULTI_SHARE_NO_END_CARD: "multi_share_no_end_card",
		MULTI_SHARE_NON_LINK_VIDEO: "multi_share_non_link_video",
		MULTI_SHARE_SEARCH_END_CARD: "multi_share_search_end_card",
		MULTI_SHARE_FIXED_TEXT: "multi_share_fixed_text",
		MULTI_SHARE_CAROUSEL_FREE_SCROLL: "multi_share_carousel_free_scroll",
		MULTI_SHARE_CAROUSEL_FREE_SCROLL_SNAP_CENTER: "multi_share_carousel_free_scroll_snap_center",
		MULTI_SHARE_LARGER_CAROUSEL: "multi_share_larger_carousel",
		MULTI_SHARE_WITH_INSTANT_EXPERIENCE: "multi_share_with_instant_experience",
		MULTI_SHARE_WITH_PROMO_CARD: "multi_share_with_promo_card",
		YEAR_IN_REVIEW: "year_in_review",
		AVATAR_LARGE_COVER: "avatar_large_cover",
		COMMERCE_PRODUCT_ITEM: "commerce_product_item",
		COMMERCE_STORE: "commerce_store",
		THIRD_PARTY_PHOTO: "third_party_photo",
		PROMPT: "prompt",
		BIRTHDAY: "birthday",
		BIRTHDAY_PERCEPTICONS: "birthday_percepticons",
		DISCUSSION_CONVERSATION: "discussion_conversation",
		DISCUSSION_COMMENT: "discussion_comment",
		GROUP_SELL_PRODUCT_ITEM: "group_sell_product_item",
		GROUP_SELL_PRODUCT_ITEM_MARK_AS_SOLD: "group_sell_mark_as_sold",
		GAMETIME: "gametime",
		GAMETIME_LEAGUE: "gametime_league",
		GAMETIME_PLAY: "gametime_play",
		GROUP_REPORTED_POST_QUEUE: "group_reported_post_queue",
		GROUP_PENDING_POST_QUEUE: "group_pending_post_queue",
		GROUP_JOIN_REQUEST_QUEUE: "group_join_request_queue",
		GREETING_CARD: "greeting_card",
		LEAD_GEN: "lead_gen",
		ATTACHED_STORY: "attached_story",
		POST_CHANNEL: "post_channel",
		TEXT_FOR_COLLAGE: "text_for_collage",
		SOUVENIR: "souvenir",
		SLIDESHOW: "slideshow",
		ORION: "orion",
		ORION_REQUEST: "orion_request",
		P2P_PAYMENT: "p2p_payment",
		P2P_SERVER_BUBBLE: "p2p_server_bubble",
		INSTANT_ARTICLE: "instant_article",
		MOMENTS_APP_INVITATION: "moments_app_invitation",
		MOMENTS_APP_PHOTO_REQUEST: "moments_app_photo_request",
		RIDE_ORDERED: "ride_ordered",
		RIDE_RECEIPT: "ride_receipt",
		BUSINESS_MESSAGE_ITEMS: "business_message_items",
		RETAIL_CANCELLATION: "retail_cancellation",
		RETAIL_PROMOTION: "retail_promotion",
		RETAIL_ITEM: "retail_item",
		RETAIL_NOW_IN_STOCK: "retail_now_in_stock",
		RETAIL_RECEIPT: "retail_receipt",
		RETAIL_SHIPMENT: "retail_shipment",
		RETAIL_SHIPMENT_FOR_SUPPORTED_CARRIER: "retail_shipment_for_supported_carrier",
		RETAIL_SHIPMENT_FOR_UNSUPPORTED_CARRIER: "retail_shipment_for_unsupported_carrier",
		RETAIL_SHIPMENT_TRACKING_EVENT: "retail_shipment_tracking_event",
		RETAIL_SHIPMENT_TRACKING_EVENT_ETA: "retail_shipment_tracking_event_eta",
		RETAIL_SHIPMENT_TRACKING_EVENT_IN_TRANSIT: "retail_shipment_tracking_event_in_transit",
		RETAIL_SHIPMENT_TRACKING_EVENT_OUT_FOR_DELIVERY: "retail_shipment_tracking_event_out_for_delivery",
		RETAIL_SHIPMENT_TRACKING_EVENT_DELAYED: "retail_shipment_tracking_event_delayed",
		RETAIL_SHIPMENT_TRACKING_EVENT_DELIVERED: "retail_shipment_tracking_event_delivered",
		SURVEY: "survey",
		MESSAGE_LOCATION: "message_location",
		GROUP_ADD_MEMBERS: "group_add_memebers",
		GROUP_MEMBER_ADDED: "group_member_added",
		RTC_CALL_LOG: "rtc_call_log",
		JOINABLE_CALL: "joinable_call",
		EVENTS_PENDING_POST_QUEUE: "events_pending_post_queue",
		EVENT_CALENDAR: "event_calendar",
		FACEPILE: "facepile",
		ATTRIBUTED_SHARE: "attributed_share",
		VIDEO_CINEMAGRAPH: "video_cinemagraph",
		LOCAL_CONTEXT_SHARE: "local_context_share",
		H_SCROLL: "h_scroll",
		EGO_HSCROLL: "ego_hscroll",
		MEDIA_QUESTION: "media_question",
		RICH_MEDIA: "rich_media",
		RICH_MEDIA_COLLECTION: "rich_media_collection",
		SQUARE_IMAGE_SHARE: "square_image_share",
		RETAIL_AGENT_ITEM_SUGGESTION: "retail_agent_item_suggestion",
		RETAIL_AGENT_ITEM_RECEIPT: "retail_agent_item_receipt",
		NOTE_COMPOSED: "note_composed",
		AVATAR_WITH_BIRTHDAY: "avatar_with_birthday",
		AIRLINE_FLIGHT_RESCHEDULE_UPDATE_BUBBLE: "airline_flight_reschedule_update_bubble",
		AIRLINE_CONFIRMATION: "airline_confirmation",
		AIRLINE_CHECK_IN: "airline_check_in",
		AIRLINE_BOARDING_PASS: "airline_boarding_pass",
		AIRLINE_FLIGHT_RESCHEDULE_UPDATE: "airline_flight_reschedule_update",
		LIGHTBOX_VIDEO: "lightbox_video",
		GLOBALLY_DELETED_MESSAGE_PLACEHOLDER: "globally_deleted_message_placeholder",
		GENIE_MESSAGE: "genie_message",
		MOVIE_BOT_MOVIE_LIST: "movie_bot_movie_list",
		MOVIE_BOT_MOVIE_SHOWTIME_LIST: "movie_bot_movie_showtime_list",
		GROUPSMASH_MEDIA: "groupsmash_media",
		AVATAR_WITH_EGO_ACTION: "avatar_with_ego_action",
		EVENT_TICKET_DEPRECATED: "event_ticket",
		VERTICAL_ATTACHMENT_LIST: "vertical_attachment_list",
		INSTANT_ARTICLE_LEGACY: "instant_article_legacy",
		FUNDRAISER_PAGE: "fundraiser_page",
		FINANCIAL_BILL_PAYMENT_REQUEST: "financial_bill_payment_request",
		GOODWILL_THROWBACK_FRIENDVERSARY_POLAROIDS_CARD: "goodwill_throwback_friendversary_polaroids_card",
		WELCOME_CARD_IMAGE: "welcome_card_image",
		LARGE_IMAGE_LIKE: "large_image_like",
		ASK_FRIENDS: "ask_friends",
		CULTURAL_MOMENT: "cultural_moment",
		TELEPHONE_CALL_LOG: "telephone_call_log",
		SUPER_EMOJI: "super_emoji",
		BOOK: "book",
		SUBTOPIC_CUSTOMIZATION_QUESTION: "subtopic_customization_question",
		SUBTOPIC_CUSTOMIZATION_OPTION: "subtopic_customization_option",
		RESTAURANT: "restaurant",
		CONNECTION_QUESTION: "connection_question",
		CONNECTION_QUESTION_OPTION: "connection_question_option",
		PYMI_ITEM: "pymi_item",
		GOODWILL_THROWBACK_FRIENDVERSARY_COLLAGE_CARD: "goodwill_throwback_friendversary_collage_card",
		CITY: "city",
		AVATAR_WITH_SHARE: "avatar_with_share",
		LIGHTWEIGHT_PLACE: "lightweight_place",
		QUOTED_SHARE: "quoted_share",
		SMS_LOG: "sms_log",
		CENTERED_TEXT: "centered_text",
		GOODWILL_THROWBACK_FRIENDVERSARY_DATA_CARD: "goodwill_throwback_friendversary_data_card",
		GOODWILL_THROWBACK_FACEVERSARY_COLLAGE_CARD: "goodwill_throwback_faceversary_collage_card",
		GOODWILL_THROWBACK_ANNIVERSARY_COLLAGE_CARD: "goodwill_throwback_anniversary_collage_card",
		MESSAGE_EVENT: "message_event",
		MESSAGE_THREAD: "message_thread",
		QUOTE: "quote",
		AIRLINE_ITINERARY: "airline_itinerary",
		AIRLINE_UPDATE: "airline_update",
		PLACE_LIST: "place_list",
		IMPLICIT_PLACE_LIST_CONVERSION: "implicit_place_list_conversion",
		AIRLINE_CHECKIN_REMINDER: "airline_checkin_reminder",
		MINUTIAE_UNIT: "minutiae_unit",
		INSTANT_ARTICLE_PHOTO: "instant_article_photo",
		INSTANT_ARTICLE_VIDEO: "instant_article_video",
		PHOTO_LINK_SHARE: "photo_link_share",
		PHOTO_LINK_SHARE_WITH_INSTAGRAM_CONTEXT: "photo_link_share_with_instagram_context",
		BUSINESS_LOCATION: "business_location",
		GOODWILL_WEATHER: "goodwill_weather",
		CULTURAL_MOMENT_HOLIDAY_CARD: "cultural_moment_holiday_card",
		GROUP: "group",
		COMMENT_PLACE_INFO: "comment_place_info",
		COMMENT_PRODUCT_INFO: "comment_product_info",
		GOODWILL_THROWBACK_FRIENDVERSARY_POLAROIDS_CARD_IPB: "goodwill_throwback_friendversary_polaroids_card_ipb",
		GOODWILL_THROWBACK_FRIENDVERSARY_COLLAGE_CARD_IPB: "goodwill_throwback_friendversary_collage_card_ipb",
		FUNDRAISER_PERSON_TO_CHARITY: "fundraiser_person_to_charity",
		FUNDRAISER_PERSON_FOR_PERSON: "fundraiser_person_for_person",
		FUNDRAISER_FOR_STORY: "fundraiser_for_story",
		FUNDRAISER_PROFILE_FOR_CHARITY: "fundraiser_profile_for_charity",
		MESSAGE_LIVE_LOCATION: "message_live_location",
		MESSENGER_INVITE: "messenger_invite",
		MESSENGER_NATIVE_TEMPLATES: "messenger_native_templates",
		GAMES_INSTANT_PLAY: "games_instant_play",
		PROFILE_MEDIA: "profile_media",
		NATIVE_TEMPLATES: "native_templates",
		NATIVE_TEMPLATES_FOX: "native_templates_fox",
		NATIVE_TEMPLATES_KEEP_ATTACHED: "native_templates_keep_attached",
		GOODWILL_THROWBACK_VIDEO_BASIC: "goodwill_throwback_video_basic",
		COMMERCE_PRODUCT_MINI: "commerce_product_mini",
		COMMERCE_PRODUCT_MINI_LIST: "commerce_product_mini_list",
		COMMENT: "comment",
		MESSENGER_TEAM_BOT_SHARE: "messenger_team_bot_share",
		LIVE_VIDEO_SCHEDULE: "live_video_schedule",
		PRODUCT_ITEM: "product_item",
		PLATFORM_INSTANT_APP: "platform_instant_app",
		YEAR_OVERVIEW: "year_overview",
		NATIVE_COMPONENT_FLOW_BOOKING_REQUEST: "native_component_flow_booking_request",
		FRIEND_REQUEST: "friend_request",
		MESSENGER_GROUP_JOINABLE_LINK: "messenger_group_joinable_link",
		MESSENGER_GROUP_JOINABLE_LINK_V2: "messenger_group_joinable_link_v2",
		SOCIAL_SEARCH_CONVERSION_PROMPT: "social_search_conversion_prompt",
		MDOTME_USER_LINK: "mdotme_user_link",
		DYNAMIC_MULTI_SHARE_ITEMS: "dynamic_multi_share_items",
		EVENT_REMINDER: "event_reminder",
		INSTANT_GAMES_SHARE_MESSAGE: "instant_games_share_message",
		INSTANT_GAMES_LEADERBOARD_UPDATE: "instant_games_leaderboard_update",
		INSTANT_GAMES_CUSTOM_UPDATE: "instant_games_custom_update",
		MESSENGER_PLATFORM_COMPACT_ITEM: "messenger_platform_compact_item",
		MESSENGER_PLATFORM_COVER_ITEM: "messenger_platform_cover_item",
		MULTI_SHARE_NON_LINK_VIDEO_AUTO_SCROLL: "multi_share_non_link_video_auto_scroll",
		OFFER_VIEW_LIVE_COUNTDOWN: "offer_view_live_countdown",
		ENHANCED_LINK_REDDIT_POST: "enhanced_link_reddit_post",
		MESSENGER_COMMERCE_COVER_ITEM: "messenger_commerce_cover_item",
		ENHANCED_LINK_YELP_BUSINESS: "enhanced_link_yelp_business",
		PAGES_PLATFORM_LEAD_GEN: "pages_platform_lead_gen",
		NATIVE_STORY: "native_story",
		MFS_BILL_PAY_CREATION_UPDATE: "mfs_bill_pay_creation_update",
		MFS_BILL_PAY_REFERENCE_CODE_UPDATE: "mfs_bill_pay_reference_code_update",
		MFS_BILL_PAY_AGENT_CASH_IN_UPDATE: "mfs_bill_pay_agent_cash_in_update",
		PAGES_PLATFORM_BOOKING_MESSAGE: "pages_platform_booking_message",
		EXTERNAL_GALLERY: "external_gallery",
		MEME_SHARE: "meme_share",
		MESSENGER_PLATFORM_ELEMENT: "messenger_platform_element",
		INSTANT_GAMES_SHARE_SCORE_MESSAGE: "instant_games_share_score_message",
		MESSENGER_PLATFORM_BUTTON_LIST: "messenger_platform_button_list",
		LIGHTWEIGHT_ACTION: "lightweight_action",
		TAROT_DIGEST: "tarot_digest",
		EVENT_TOUR: "event_tour",
		ADAPTIVE_MEDIA: "adaptive_media",
		DYNAMIC_GAME_BOARD: "dynamic_game_board",
		PAYMENT_PLATFORM: "payment_platform",
		OMNI_M_FLOW: "omni_m_flow",
		GROUP_QUIZ: "group_quiz",
		TRIAL_AD: "trial_ad",
		TEEM_COLLECTIONS: "teem_collections",
		CRISIS_DONATION: "crisis_donation",
		CRISIS_STATUS: "crisis_status",
		CRISIS_SHARE: "crisis_share",
		CRISIS_MARK_SAFE: "crisis_mark_safe",
		CRISIS_LISTING: "crisis_listing",
		CORONAVIRUS_HUB: "coronavirus_hub",
		CORONAVIRUS_FACTS: "coronavirus_facts",
		RACIAL_JUSTICE_HUB: "racial_justice_hub",
		FBPAY_OFFER: "fbpay_offer",
		APPLICATION_SHARE_REFERRAL: "application_share_referral",
		VR_CONTENT: "vr_content",
		VIDEO_RECOMMENDATION_HSCROLL: "video_recommendation_hscroll",
		VIDEO_TRAILER: "video_trailer",
		SHOW_PAGE_SHARE: "show_page_share",
		MFS_ATTACHMENT: "mfs_attachment",
		MFS_TIME_SENSITIVE_ATTACHMENT: "mfs_time_sensitive_attachment",
		VIDEO_RECOMMENDATION_SINGLETON: "video_recommendation_singleton",
		PAGE_REVIEW_PROMPT: "page_review_prompt",
		VIDEO_SHOW: "video_show",
		UNCONNECTED_VIDEO: "unconnected_video",
		SHOW_SHARE: "show_share",
		JOB_SEARCH_JOB_APPLICATION: "job_search_job_application",
		PAGE_MESSENGER_ATTACHMENT: "page_messenger_attachment",
		CONTACT_YOUR_REP: "contact_your_rep",
		LOCATION_EXTENSION: "location_extension",
		SERVICES_CONSUMER_HUB: "services_consumer_hub",
		PLACE_RECOMMENDATION: "place_recommendation",
		JOB_SEARCH_JOB_OPENING: "job_search_job_opening",
		PAGE_MESSAGE_ONLINE_INDICATOR: "page_message_online_indicator",
		LOCAL_PIVOT: "local_pivot",
		ORION_REQUEST_NEW: "orion_request_new",
		PHOTO_WITH_SHIELD: "photo_with_shield",
		PLAYABLE_AD: "playable_ad",
		FUN_FACT_PROMPT: "fun_fact_prompt",
		FUN_FACT_STACK: "fun_fact_stack",
		FATIGUED_SHARE: "fatigued_share",
		DISCUSSION_QUESTION: "discussion_question",
		PARTIES_INVITE: "parties_invite",
		PROFILE_INTRO_CARD_BIO: "profile_intro_card_bio",
		PAGES_SHARE: "pages_share",
		PRODUCT_RECOMMENDATION_LIST: "product_recommendation_list",
		VISUAL_POLL: "visual_poll",
		MULTI_PLACE_RECOMMENDATION: "multi_place_recommendation",
		PAGE_IN_COMMENT: "page_in_comment",
		PAGE_ANNOUNCEMENT: "page_announcement",
		MESSENGER_PLATFORM_MEDIA_ATTACHMENT: "messenger_platform_media_attachment",
		SCHEDULED_VIDEO_ANNOUNCEMENT: "scheduled_video_announcement",
		HSCROLL_ITEM: "hscroll_item",
		MESSENGER_CALL_LOG: "messenger_call_log",
		PAGE_REVIEW_UPDATE: "page_review_update",
		LOYALTY_CARD_OFFER: "loyalty_card_offer",
		GOODWILL_GRID: "goodwill_grid",
		TRAVEL_PLAN: "travel_plan",
		FIND_PLAYERS: "find_players",
		ASSET3D: "asset3d",
		MESSENGER_GROUP_PERSONAL_LINK: "messenger_group_personal_link",
		FREQUENTLY_ASKED_QUESTION: "frequently_asked_question",
		STORY_LIST: "story_list",
		GOODWILL_SHARED_CARD: "goodwill_shared_card",
		PAYMENT_BUBBLE_VIEW: "PAYMENT_BUBBLE_VIEW",
		POST_TO_EVENT_CREATE: "post_to_event_create",
		MONTAGE_DIRECT: "montage_direct",
		NEO_INVITATION: "NEO_INVITATION",
		NATIVE_TEMPLATES_LINK_SHARE_TEST: "native_templates_link_share_test",
		GOODWILL_HSCROLL: "goodwill_hscroll",
		NEO_KID_INITIATE_FRIENDING: "NEO_KID_INITIATE_FRIENDING",
		NEO_VIDEO_PROMPT: "NEO_VIDEO_PROMPT",
		EVENT_MICRO_ATTACHMENT: "event_micro_attachment",
		SAVED_LIST: "saved_list",
		LOCAL_GUIDE: "local_guide",
		MEET_UP_EVENT: "meet_up_event",
		DONATION: "donation",
		FUNDRAISER_FB_SEEDING_GIFT: "fundraiser_fb_seeding_gift",
		BREAKING_NEWS: "breaking_news",
		GOODWILL_COLLAGE: "goodwill_collage",
		LEAD_FORM: "lead_form",
		LEAD_FORM_USER_INFO: "lead_form_user_info",
		EVENT_TICKET_ORDER: "event_ticket_order",
		PROFILE_CHANNEL: "profile_channel",
		ICE_BREAKER: "ICE_BREAKER",
		MOVIE: "movie",
		ALOHA_CALL: "aloha_call",
		TIP_JAR_PAYMENT: "tip_jar_payment",
		SUBSCRIPTION_GIFT: "subscription_gift",
		COMMENT_MESSAGE_INFO: "comment_message_info",
		CASH_ON_DELIVERY_ORDER: "cash_on_delivery_order",
		CENSUS: "census",
		VOTE_BY_MAIL: "vote_by_mail",
		VOTER_REGISTRATION_DRIVE: "voter_registration_drive",
		VOTING_INFO: "voting_info",
		LIVING_ROOM: "living_room",
		ACHIEVEMENT_POST: "achievement_post",
		M_BIRTHDAY_REMINDER: "m_birthday_reminder",
		INSIGHTS_CHART: "insights_chart",
		GROUP_PROACTIVE_FLAGGED_POST_QUEUE: "group_proactive_flagged_post_queue",
		GROUP_ACCEPT_RULE_TO_UNMUTE: "group_accept_rule_to_unmute",
		SHOW_CLICK_TO_WATCH_TAB: "show_click_to_watch_tab",
		SHOW_CLICK_TO_WATCH_TAB_V2: "show_click_to_watch_tab_v2",
		SHOW_CLICK_TO_WATCH_TAB_V3: "show_click_to_watch_tab_v3",
		SHOW_CLICK_TO_WATCH_TAB_V4: "show_click_to_watch_tab_v4",
		SHOW_MASKED: "show_masked",
		SHOW_CONTINUE_WATCHING: "show_continue_watching",
		WATCH_CLICK_STORY_HEADER_TO_WATCH_TAB: "watch_click_story_header_to_watch_tab",
		FOX_ALBUM: "fox_album",
		TOOL_SHARE: "tool_share",
		PHONE_REMOVED_ACTION_LIST: "phone_removed_action_list",
		AMP: "amp",
		LDP_APP_INSTANCE: "ldp_app_instance",
		PAGE_RECOMMENDATION_V2: "page_recommendation_v2",
		PLAY_WITH_FRIENDS: "play_with_friends",
		BLOOD_REQUEST: "blood_request",
		BLOOD_DONATION_PARTNER_CTA: "blood_donation_partner_cta",
		HIGH_SCHOOL_COMMUNITY_INVITE: "high_school_community_invite",
		SCHEDULED_LIVE_VIDEO: "scheduled_live_video",
		GAMESHOW: "gameshow",
		GAMESHOW_INVITE: "gameshow_invite",
		MK_FRIEND_REQUEST: "mk_friend_request",
		GOODWILL_PHOTO_CIRCLE: "goodwill_photo_circle",
		SERVICES_APPOINTMENT_AVAILABILITY: "services_appointment_availability",
		NEO_SOCIAL_INVITATION: "neo_social_invitation",
		NEO_KID_INVITATION: "neo_kid_invitation",
		GROUP_SELL_PRODUCT_ITEM_CONDENSED: "group_sell_product_item_condensed",
		GROUP_SELL_PRODUCT_ITEM_MARK_AS_PENDING: "group_sell_product_item_mark_as_pending",
		GAMES_VIDEO: "games_video",
		MOVIE_WITH_SHOWTIMES: "movie_with_showtimes",
		WORK_CONTENT_ATTACHMENT: "work_content_attachment",
		GROUP_SAFETY_HUB: "group_safety_hub",
		NEWS_STORYLINE: "news_storyline",
		EVENT_TICKET_REQUEST: "event_ticket_request",
		GROUP_APPLICATION: "group_application",
		MESSAGE_MULTIPLE_LOCATIONS: "message_multiple_locations",
		TODO_LIST: "todo_list",
		PERSONAL_REMINDER: "personal_reminder",
		ARTICLE_MESSAGE: "article_message",
		PERSONAL_REMINDER_LIST: "personal_reminder_list",
		GAMES_APP: "games_app",
		GAMES_APP_SHARED: "games_app_shared",
		MOBILE_GAME_SHARE: "mobile_game_share",
		MONTAGE_MEDIA_EFFECT: "montage_media_effect",
		GROUPS_VOTER_REGISTRATION_DRIVE: "groups_voter_registration_drive",
		MONTAGE_SHARE: "montage_share",
		WEC_MESSAGE: "wec_message",
		INSTAGRAM_DIRECT_MESSAGE_ATTACHMENT: "instagram_direct_message_attachment",
		GROUP_APPLICATION_CTA: "group_application_cta",
		MENTORSHIP_CURRICULUM_STEP: "mentorship_curriculum_step",
		SCHEDULED_LIVING_ROOM: "scheduled_living_room",
		STORY_ADS_SURVEY: "story_ads_survey",
		MESSENGER_FORM_PROGRESS_ATTACHMENT: "messenger_form_progress_attachment",
		VIDEO_COMMERCE_INTEREST: "video_commerce_interest",
		PAGES_COMMERCE_BUYER_INTENT: "pages_commerce_buyer_intent",
		BREAKING_NEWS_STORY_GALLERY: "breaking_news_story_gallery",
		BRANDING_PLAYABLE_AD: "branding_playable_ad",
		PAGE_SURFACE_MENU_ITEM: "page_surface_menu_item",
		VIDEO_LIVING_ROOM_MESSENGER: "video_living_room_messenger",
		IMAGE_SHARE_NO_OVERLAY: "image_share_no_overlay",
		JOIN_GROUP_CTA: "join_group_cta",
		ASSISTANT_DRAFT_MESSAGE: "assistant_draft_message",
		ASSISTANT_CONTACT_INFO: "assistant_contact_info",
		NEO_DRAW_AND_GUESS_GAME_REQUEST: "neo_draw_and_guess_game_request",
		SOCIAL_LEARNING_UNIT_CREATED: "social_learning_unit_created",
		SOCIAL_LEARNING_UNIT_COMPLETED: "social_learning_unit_completed",
		GOODWILL_THROWBACK_SINGLE_PHOTO: "goodwill_throwback_single_photo",
		FAN_FUNDING_SUPPORT_CREATOR_CTA: "fan_funding_support_creator_cta",
		WOODHENGE_MEMBERSHIP_CARD: "woodhenge_membership_card",
		USER_PAY_REFERRALS_WWW: "user_pay_referrals_www",
		GOODWILL_VIDEO_SHARED_VIDEO: "goodwill_video_shared_video",
		INSTANT_GAMES_TOURNAMENT: "instant_games_tournament",
		INSTANT_GAMES_TOURNAMENT_ACTIVITY: "instant_games_tournament_activity",
		INSTANT_GAMES_UPDATE_COMMENT: "instant_games_update_comment",
		SCHEDULED_LIVE_VIDEO_POST: "scheduled_live_video_post",
		CHAT_COMMAND_RESULT: "chat_command_result",
		CROSSROADS: "crossroads",
		MOBILE_GAME_THREAD_SHARE: "mobile_game_thread_share",
		SHOW_CLICK_TO_WATCH_TOPIC: "show_click_to_watch_topic",
		LIFE_EVENT_FB_STORY: "life_event_fb_story",
		GROUP_KEYWORD_ALERTED_QUEUE: "group_keyword_alerted_queue",
		PARENT_APPROVED_PLAIN_TEXT_BOT_MESSAGE: "parent_approved_plain_text_bot_message",
		LIVE_VIDEO_REHEARSAL: "live_video_rehearsal",
		ASSISTANT_CONTACT_INFO_LIST: "assistant_contact_info_list",
		PARENT_APPROVED_IMAGE_AND_TEXT_BOT_MESSAGE: "parent_approved_image_and_text_bot_message",
		LIVE_VIDEO_SCHEDULED_REHEARSAL: "live_video_scheduled_rehearsal",
		LIVE_VIDEO_SCHEDULED_POST_REHEARSAL: "live_video_scheduled_post_rehearsal",
		GROUPS_LINKED_GROUP_FEED_HSCROLL: "groups_linked_group_feed_hscroll",
		SCHEDULED_LIVING_ROOM_POST: "scheduled_living_room_post",
		EVENT_ATTENDANCE_CONFIRMATION: "event_attendance_confirmation",
		ATTACHMENT_FOOTER_SIMPLE_HEADLINE: "attachment_footer_simple_headline",
		ATTACHMENT_FOOTER_CTA: "attachment_footer_cta",
		ATTACHMENT_FOOTER_ACCENT_COLOR: "attachment_footer_accent_color",
		CLICK_TO_WATCH_TAB_WARION_V1: "click_to_watch_tab_warion_v1",
		COMMERCE_UPSELL_MESSAGE: "commerce_upsell_message",
		PROFILE_SONG: "profile_song",
		MENTORSHIP_DISCUSSION_TOPIC_SET: "mentorship_discussion_topic_set",
		LINK_SOCIAL_CONTEXT: "link_social_context",
		POLITICAL_CANDIDATE_VIDEO: "political_candidate_video",
		TWEENS_WOULD_YOU_RATHER: "tweens_would_you_rather",
		TWEENS_INTEREST_CONTENT: "tweens_interest_content",
		SERVICES_GENERIC_ADMIN_TEXT: "services_generic_admin_text",
		MENTORSHIP_H_SCROLL: "mentorship_h_scroll",
		CRS_FEED_LINK_LARGE: "crs_feed_link_large",
		CRS_FEED_LINK_SMALL: "crs_feed_link_small",
		CRS_FEED_PHOTO_SMALL: "crs_feed_photo_small",
		CRS_FEED_PHOTO_LARGE: "crs_feed_photo_large",
		ANONYMOUS_AUTHOR_INFO: "anonymous_author_info",
		MENTORSHIP_XMA: "mentorship_xma",
		GEMSTONE_CENTERED_CONTENT: "gemstone",
		SHOW_EPISODE: "show_episode",
		PLAYLIST_VIDEO: "playlist_video",
		RECRUITING_CANDIDATE: "recruiting_candidate",
		RECRUITING_RESUME_REVIEW: "recruiting_resume_review",
		VIDEO_LIST: "video_list",
		GROUPS_BUY_SELL_TAB_SALE_ITEM: "groups_buy_sell_tab_sale_item",
		ALBUM_SALE_ITEM: "album_sale_item",
		PHOTO_SALE_ITEM: "photo_sale_item",
		MARKETPLACE_GENERIC_ADMIN_TEXT: "marketplace_generic_admin_text",
		PARENT_APPROVED_USER_SCHOOL_REQUEST: "parent_approved_user_school_request",
		PARENT_APPROVED_REMIX_PHOTO_REQUEST: "PARENT_APPROVED_REMIX_PHOTO_REQUEST",
		ANONYMOUS_POST_CONTENT: "anonymous_post_content",
		TWEENS_TOPIC_STORY: "tweens_topic_story",
		NEO_KID_PARENT_INVITATION: "neo_kid_parent_invitation",
		GAMING_VIDEO_CHAT_ATTACHMENT: "gaming_video_chat_attachment",
		GAMING_VIDEO_CLIP_ATTACHMENT: "gaming_video_clip_attachment",
		MARKETPLACE_RATE_SELLER_REQUEST: "marketplace_rate_seller_request",
		GROUP_INVITE_NONMEMBER_MENTIONED: "group_invite_nonmember_mentioned",
		AR_AD: "ar_ad",
		INSTANT_GAMES_INTERACTIVE_POLL: "instant_games_interactive_poll",
		CHATROOM: "chatroom",
		MARKETPLACE_ECOMM_PRODUCT_ITEM: "marketplace_ecomm_product_item",
		VOLUNTEERING_SUPPORT_RELATIONSHIP: "volunteering_support_relationship",
		MARKETPLACE_OFFER: "marketplace_offer",
		VIDEO_HOME_ELIGIBLE_VIDEO_ENDSCREEN: "video_home_eligible_video_endscreen",
		COMMERCE_ATTACHMENT: "commerce_attachment",
		GOODWILL_PRODUCT_SYSTEM_CAMPAIGN: "goodwill_product_system_campaign",
		WORK_SHIFT_SWAP: "work_shift_swap",
		FLIPPER_TRACE: "flipper_trace",
		MARKETPLACE_BOT_ORDER_DETAILS: "marketplace_bot_order_details",
		NEO_ASYNC_GAME_REQUEST: "neo_async_game_request",
		GROUP_PENDING_ANONYMOUS_POST_DISCLAIMER: "group_pending_anonymous_post_disclaimer",
		AVATAR_FEATURE: "avatar_feature",
		FIRST_PARTY_MUSIC: "first_party_music",
		STORY_CARD_PHOTO: "story_card_photo",
		STORY_CARD_VIDEO: "story_card_video",
		CRICKET_VIDEO: "cricket_video",
		C4G_THREAD_CREATION: "c4g_thread_creation",
		QUARANTINED_VIDEO: "quarantined_video",
		WORK_MAJOR_EVENT: "work_major_event",
		WORK_CHECKLIST: "work_checklist",
		MESSENGER_GENERIC_TEMPLATE: "messenger_generic_template",
		IG_ANIMATED_IMAGE_AUTOPLAY: "ig_animated_image_autoplay",
		VIDEO_MEETUP: "video_meetup",
		CRISIS_HUB: "crisis_hub",
		COLLABORATIVE_DOCUMENT: "collaborative_document",
		AMA_POST: "ama_post",
		ROOMS_SPEAKEASY_XMA: "rooms_speakeasy_xma",
		COLLAB_MEDIA: "collab_media",
		MARKETPLACE_TXN_QUESTION: "marketplace_txn_question",
		KNOWLEDGE_NOTE: "knowledge_note",
		KNOWLEDGE_COLLECTION: "knowledge_collection",
		GIFT_CARD: "gift_card",
		VIDEO_MEETUP_LINK: "video_meetup_link",
		COMMUNITY_PROMPT: "community_prompt",
		MARKETPLACE_GENERIC_XMA: "marketplace_generic_xma",
		TOURNAMENT_MATCH_SET: "tournament_match_set",
		FB_SHORTS: "fb_shorts",
		FB_SHORTS_CREATION: "fb_shorts_creation",
		C4G_MESSAGE: "c4g_message",
		COMMUNITY_QUESTIONS: "community_questions",
		MILAN_WORKOUT: "milan_workout",
		IN_THREAD_MULTIPHOTO_CAROUSEL: "in_thread_multiphoto_carousel",
		SHOP_PRODUCT_ITEM: "shop_product_item",
		NEO_SHORT_FORM_VIDEO: "neo_short_form_video",
		WORK_JOINABLE_CALL_INVITE: "work_joinable_call_invite",
		WORK_MEETING: "work_meeting",
		PROFILE_COMMERCE_POST: "profile_commerce_post",
		GAMING_COPLAY_SHARE_LINK: "gaming_coplay_share_link",
		ROOMS_SPEAKEASY_TOMBSTONE_XMA: "rooms_speakeasy_tombstone_xma",
		COMMUNITY_QA: "community_qa",
		FUNDRAISER_PERSON_TO_CHARITY_VIDEO: "fundraiser_person_to_charity_video",
		WORKPLACE_APPROVALS: "workplace_approvals",
		GROUP_VOTER_PLEDGE_DRIVE: "group_voter_pledge_drive",
		SHOP_ORDER_UPDATES: "shop_order_updates",
		SHOP_ORDER_UPDATES_COLLAPSED: "shop_order_updates_collapsed",
		PREVENTIVE_HEALTH_FLU_SHOT_PLEDGE: "preventive_health_flu_shot_pledge",
		GAMES_SERVICE_PLAYER_INVITE_MESSAGE: "games_service_player_invite_message",
		REPORTED_GROUP_EVENT: "reported_group_event",
		WORK_MEETING_TRANSCRIPT: "work_meeting_transcript",
		INTERACTIVE_MEDIA: "interactive_media",
		SHOP_STOREFRONT: "shop_storefront"
	});
	e.exports = a
}), null);
__d("MessengerMessageTransformer.bs", ["bs_block", "bs_js_dict", "FBIDCheck", "getByPath", "MercuryIDs", "bs_caml_format", "bs_caml_option", "CurrentUser", "bs_js_null_undefined", "MercuryActionType", "MercurySourceType", "MessagingTagUtils", "StoryAttachmentStyle", "MNCommerceMessageType", "MercuryLogMessageType", "MessageProfileRangeType", "MessageUnsendabilityStatus.bs", "P2PPaymentLogMessageSubtype", "MessagingGenericAdminTextType", "MessengerAttachmentTransformer.bs", "InstantGameUpdateXMATUpdateType"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		a = a.blob_attachments;
		var c = [];
		a == null || a.forEach(function (a) {
			if (a.__typename === "MessageImage") {
				c.push(b("bs_block").__(0, [{
					attribution_app: a.attribution_app,
					attribution_metadata: a.attribution_metadata,
					blurred_image_uri: a.blurred_image_uri,
					filename: a.filename,
					id: a.id,
					preview: a.preview,
					large_preview: a.large_preview,
					thumbnail: a.thumbnail,
					legacy_attachment_id: a.legacy_attachment_id,
					original_dimensions: a.original_dimensions,
					original_extension: a.original_extension,
					render_as_sticker: a.render_as_sticker,
					photo_encodings: a.photo_encodings
				}]));
				return 0
			} else if (a.__typename === "MessageAnimatedImage") {
				c.push(b("bs_block").__(1, [{
					attribution_app: a.attribution_app,
					attribution_metadata: a.attribution_metadata,
					filename: a.filename,
					animated_image: a.animated_image,
					legacy_attachment_id: a.legacy_attachment_id,
					preview_image: a.preview_image,
					original_dimensions: a.original_dimensions
				}]));
				return 0
			} else if (a.__typename === "MessageAudio") {
				c.push(b("bs_block").__(2, [{
					attribution_app: a.attribution_app,
					attribution_metadata: a.attribution_metadata,
					filename: a.filename,
					playable_url: a.playable_url,
					playable_duration_in_ms: a.playable_duration_in_ms,
					is_voicemail: a.is_voicemail,
					audio_type: a.audio_type,
					url_shimhash: a.url_shimhash,
					url_skipshim: a.url_skipshim
				}]));
				return 0
			} else if (a.__typename === "MessageVideo") {
				c.push(b("bs_block").__(3, [{
					attribution_app: a.attribution_app,
					attribution_metadata: a.attribution_metadata,
					filename: a.filename,
					playable_url: a.playable_url,
					playable_duration_in_ms: a.playable_duration_in_ms,
					legacy_attachment_id: a.legacy_attachment_id,
					chat_image: a.chat_image,
					video_type: a.video_type,
					original_dimensions: a.original_dimensions,
					large_image: a.large_image,
					inbox_image: a.inbox_image
				}]));
				return 0
			} else if (a.__typename === "MessageFile") {
				c.push(b("bs_block").__(4, [{
					attribution_app: a.attribution_app,
					attribution_metadata: a.attribution_metadata,
					filename: a.filename,
					url: a.url,
					mimetype: a.mimetype,
					content_type: a.content_type,
					is_malicious: a.is_malicious,
					message_file_fbid: a.message_file_fbid,
					url_shimhash: a.url_shimhash,
					url_skipshim: a.url_skipshim,
					preview_url: a.preview_url,
					preview: a.preview
				}]));
				return 0
			} else return 0
		});
		return c
	}

	function h(a, c, d) {
		var e = c.call_capture_attachments;
		if (e == null) return [];
		else return b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
			extensible_attachment: null,
			blob_attachments: g({
				blob_attachments: e.edges.map(function (a) {
					return a.node
				})
			}),
			sticker: null
		}, c.message_id, d)
	}

	function i(a, c, d, e, f) {
		if (c.__typename === "GroupPollExtensibleMessageAdminText") {
			var g = c.question,
				i;
			if (g == null) i = [{}, null];
			else {
				var j = Object.assign({}, g);
				Object.assign(j, {
					total_count: c.total_count,
					options: g.options.nodes.map(function (a) {
						var b = Object.assign({}, a);
						return Object.assign(b, {
							total_count: a.voters.nodes.length,
							voters: a.voters.nodes.map(function (a) {
								return a.id
							})
						})
					})
				});
				i = [j, g.id]
			}
			j = {
				message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
				untypedData: {
					event_type: c.event_type.toLowerCase(),
					question_id: i[1],
					question_json: b("bs_js_null_undefined").fromOption(JSON.stringify(i[0]))
				}
			}
		} else if (c.__typename === "InstantGameUpdateExtensibleMessageAdminText") {
			j = {
				message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
				untypedData: {
					game_id: (g = b("getByPath"))(c, ["game", "id"]),
					update_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("InstantGameUpdateXMATUpdateType"), c.update_type)),
					collapsed_text: c.collapsed_text,
					expanded_text: c.expanded_text,
					leaderboard_json: c.leaderboard_json,
					cta_url: g(c, ["instant_game_update_data", "cta_url"]),
					cta_title: g(c, ["instant_game_update_data", "cta_title"]),
					custom_image_url: g(c, ["instant_game_update_data", "photo", "image", "uri"]),
					template: g(c, ["instant_game_update_data", "template"])
				}
			}
		} else if (c.__typename === "MessengerAdContextAdminText") j = {
			message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
			untypedData: {
				ad_url: c.ad_url
			}
		};
		else if (c.__typename === "AdExtensibleMessageAdminText") j = {
			message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
			untypedData: {
				ad_client_token: c.ad_client_token,
				ad_id: c.ad_id,
				ad_preferences_link: c.ad_preferences_link,
				ad_properties: c.ad_properties
			}
		};
		else if (c.__typename === "MessengerCallLogExtensibleMessageAdminText") j = {
			message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
			untypedData: Object.assign(Object.assign({}, c), {
				call_capture_attachments: h(a, c, f)
			})
		};
		else if (c.__typename === "ThemeColorExtensibleMessageAdminText" || c.__typename === "ThreadIconExtensibleMessageAdminText" || c.__typename === "ThreadNicknameExtensibleMessageAdminText" || c.__typename === "AcceptPendingThreadExtensibleMessageAdminText" || c.__typename === "AddContactExtensibleMessageAdminText" || c.__typename === "RtcCallLogExtensibleMessageAdminText" || c.__typename === "GameScoreExtensibleMessageAdminText" || c.__typename === "ConfirmFriendRequestExtensibleMessageAdminText" || c.__typename === "MessengerGrowthGenericExtensibleMessageAdminText" || c.__typename === "PartiesInviteExtensibleMessageAdminText" || c.__typename === "AppointmentReminderExtensibleMessageAdminText" || c.__typename === "LinkCTAExtensibleMessageAdminText" || c.__typename === "GraphQLServicesAppointmentsOptOutExtensibleMessageAdminText" || c.__typename === "ServicesLeadGenSurveyExtensibleMessageAdminText" || c.__typename === "ServicesLeadGenSurveyEditExtensibleMessageAdminText" || c.__typename === "MessengerIcebreakerVoteCastExtensibleMessageAdminText" || c.__typename === "PagesMarkAsPaidExtensibleMessageAdminText" || c.__typename === "PagesMarkAsPaidNewExtensibleMessageAdminText" || c.__typename === "WorkBotInstalledExtensibleMessageAdminText" || c.__typename === "WorkChatReminderLinkCTAExtensibleMessageAdminText" || c.__typename === "PageThreadActionSystemAddDetailsXMAT" || c.__typename === "PostSharedFromGroupExtensibleMessageAdminText") j = {
			message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
			untypedData: Object.assign({}, c)
		};
		else if (c.__typename === "LightweightEventCreateExtensibleMessageAdminText" || c.__typename === "LightweightEventDeleteExtensibleMessageAdminText" || c.__typename === "LightweightEventNotifyBeforeEventExtensibleMessageAdminText" || c.__typename === "LightweightEventNotifyExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateLocationExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateTimeExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateTitleExtensibleMessageAdminText" || c.__typename === "LightweightEventRSVPExtensibleMessageAdminText") {
			i = c.event_reminder;
			if (i == null) g = void 0;
			else {
				a = i.lightweight_event_creator;
				f = a == null ? void 0 : a.id;
				a = i.location_page;
				a = a == null ? void 0 : a.id;
				var k = i.timezone_id;
				k = k == null ? void 0 : k.timezone;
				var l = i.location_coordinates;
				l = l == null ? {
					latitude: void 0,
					longitude: void 0
				} : l;
				var m = i.event_reminder_members;
				m = m == null ? void 0 : m.edges;
				g = {
					event_creator_id: f,
					event_id: i.id,
					event_location_id: a,
					event_location_name: i.location_name,
					event_seconds_to_notify_before: i.seconds_to_notify_before,
					event_time: i.time,
					event_end_time: i.end_time,
					event_timezone: k,
					event_title: i.event_title,
					event_type: i.lightweight_event_type,
					event_track_rsvp: i.allows_rsvp,
					latitude: l.latitude,
					longitude: l.longitude,
					guest_state_list: m,
					guest_id: c.guest_id,
					guest_status: c.guest_status
				}
			}
			j = {
				message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
				untypedData: g
			}
		} else j = c.__typename === "AdReplyMessageAdminText" ? {
			message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
			untypedData: {
				ad_url: c.ad_url,
				should_show_url: c.should_show_url
			}
		} : {
			message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
			untypedData: void 0
		};
		return {
			log_message_body: e,
			log_message_data: j,
			log_message_type: b("MercuryLogMessageType").GENERIC_ADMIN_TEXT
		}
	}

	function j(a) {
		return a.map(function (a) {
			if (a === "p2p_transfer") return b("StoryAttachmentStyle").ORION;
			else if (a === "p2p_payment_request") return b("StoryAttachmentStyle").ORION_REQUEST;
			else return a
		})
	}

	function k(a) {
		var c = a.target,
			d;
		if (c == null) d = null;
		else if (c.__typename === "CrisisListing") d = b("bs_block").__(0, [{
			listing_type: c.listing_type,
			listing_category: c.listing_category,
			map_image: c.map_image
		}]);
		else if (c.__typename === "MoneyTransfer") d = b("bs_block").__(1, [{
			sender: c.sender,
			receiver: c.receiver,
			transfer_id: c.transfer_id,
			bubble_view: c.bubble_view
		}]);
		else if (c.__typename === "PeerToPeerTransfer") d = b("bs_block").__(2, [{
			sender: c.sender,
			receiver_profile: c.receiver_profile,
			transaction_amount: c.transaction_amount,
			transfer_status: c.transfer_status,
			transfer_id: c.transfer_id,
			completedTime: c.completedTime,
			updatedTime: c.updatedTime,
			creationTime: c.creationTime,
			transfer_context: c.transfer_context,
			amount_fb_discount: c.amount_fb_discount,
			funds_availability: c.funds_availability,
			group_thread_fbid: c.group_thread_fbid,
			platform_item: c.platform_item,
			id: c.id,
			status_description: c.status_description,
			bubble_view: c.bubble_view,
			currency_amount: c.currency_amount,
			memo_text: c.memo_text
		}]);
		else if (c.__typename === "PeerToPeerPaymentRequest") d = b("bs_block").__(3, [{
			amount: c.amount,
			transaction_amount: c.transaction_amount,
			requester: c.requester,
			requestee: c.requestee,
			request_status: c.request_status,
			request_theme: c.request_theme,
			id: c.id,
			memo_text: c.memo_text,
			transfer: c.transfer,
			creation_time: c.creation_time,
			group_thread_fbid: c.group_thread_fbid,
			updated_time: c.updated_time,
			status_description: c.status_description,
			bubble_view: c.bubble_view,
			individual_requests: c.individual_requests
		}]);
		else if (c.__typename === "PaymentPlatformAttachment") d = b("bs_block").__(4, [{
			payment_modules_client: c.payment_modules_client,
			is_viewer_seller: c.is_viewer_seller,
			payment_snippet: c.payment_snippet,
			item_list: c.item_list,
			components: c.components,
			payment_call_to_actions: c.payment_call_to_actions,
			click_action: c.click_action,
			summary_action: c.summary_action,
			invoicer_id: c.invoicer_id,
			is_last_attachment: c.is_last_attachment,
			payment_total: c.payment_total,
			product_detail: c.product_detail,
			payment_status_icon: c.payment_status_icon,
			user_facing_payment_status: c.user_facing_payment_status,
			payment_sub_statuses: c.payment_sub_statuses,
			should_show_new_xma: c.should_show_new_xma,
			buyer_name: c.buyer_name
		}]);
		else if (c.__typename === "MessengerRetailPromotion") d = b("bs_block").__(5, [{
			message: c.message,
			call_to_actions: c.call_to_actions,
			promotion_items: c.promotion_items
		}]);
		else if (c.__typename === "MessengerBusinessMessage") d = b("bs_block").__(6, [{
			message: c.message,
			call_to_actions: c.call_to_actions,
			business_items: c.business_items
		}]);
		else if (c.__typename === "Video") d = b("bs_block").__(7, [{
			video_id: c.video_id
		}]);
		else if (c.__typename === "PagesPlatformLeadGenInfo") d = b("bs_block").__(8, [{
			field_data_list: c.field_data_list
		}]);
		else if (c.__typename === "MessageLiveLocation") d = b("bs_block").__(9, [{
			live_location_id: c.live_location_id,
			is_expired: c.is_expired,
			expiration_time: c.expiration_time,
			sender: c.sender,
			coordinate: c.coordinate,
			location_title: c.location_title,
			sender_destination: c.sender_destination,
			stop_reason: c.stop_reason
		}]);
		else if (c.__typename === "QuickInvite") d = b("bs_block").__(10, [{
			id: c.id,
			invite_sender: c.invite_sender,
			invite_recipient: c.invite_recipient
		}]);
		else if (c.__typename === "PagesPlatformBookingMessage") d = b("bs_block").__(11, [{
			id: c.id,
			page: c.page,
			message_bubble_type: c.message_bubble_type,
			user: c.user,
			ls_xma_title: c.ls_xma_title,
			ls_xma_subtitle: c.ls_xma_subtitle,
			native_component_flow_request: c.native_component_flow_request
		}]);
		else if (c.__typename === "ServicesAppointmentAvailability") d = b("bs_block").__(12, [{
			id: c.id,
			page: c.page,
			consumer: c.consumer,
			formatted_available_time_ranges: c.formatted_available_time_ranges,
			has_booking_request_created: c.has_booking_request_created
		}]);
		else if (c.__typename === "ServicesGenericAdminText") d = b("bs_block").__(13, [{
			id: c.id
		}]);
		else if (c.__typename === "GenieMessage") d = b("bs_block").__(14, [{
			genie_sender: c.genie_sender,
			story_attachment: c.story_attachment
		}]);
		else if (c.__typename === "Event") d = b("bs_block").__(15, [{
			eventID: c.eventID,
			guestStatus: c.guestStatus,
			canViewerJoin: c.canViewerJoin,
			timeString: c.timeString,
			event_place: c.event_place,
			social_context: c.social_context,
			watchStatus: c.watchStatus,
			connection_style: c.connection_style,
			canViewerWatch: c.canViewerWatch,
			profile_picture: c.profile_picture,
			name: c.name,
			start_timestamp: c.start_timestamp
		}]);
		else if (c.__typename === "ExternalSong") d = b("bs_block").__(16, [{
			application_name: c.application_name,
			artist_names: c.artist_names,
			audio_url: c.audio_url,
			duration_ms: c.duration_ms,
			music_title: c.music_title
		}]);
		else if (c.__typename === "LightweightAction") d = b("bs_block").__(17, [{
			lwa_state: c.lwa_state,
			lwa_type: c.lwa_type
		}]);
		else if (c.__typename === "MessengerRetailItem") d = b("bs_block").__(18, [{
			id: c.id,
			name: c.name,
			desc: c.desc,
			thumb_url: c.thumb_url,
			item_url: c.item_url,
			source: c.source,
			image_aspect_ratio: c.image_aspect_ratio,
			first_metaline: c.first_metaline,
			second_metaline: c.second_metaline,
			third_metaline: c.third_metaline,
			default_action: c.default_action,
			call_to_actions: c.call_to_actions
		}]);
		else if (c.__typename === "AgentItemSuggestion") d = b("bs_block").__(19, [{
			id: c.id,
			desc: c.desc,
			total_cost: c.total_cost,
			merchant_name: c.merchant_name,
			target_url: c.target_url,
			thumb_url: c.thumb_url,
			raw_amount: c.raw_amount,
			payment: c.payment,
			price_amount: c.price_amount,
			price_currency: c.price_currency,
			name: c.name
		}]);
		else if (c.__typename === "FundraiserPersonToCharity" || c.__typename === "FundraiserPersonForPerson") {
			var e = c.fundraiser_detailed_progress_text,
				f = c.fundraiser_subtitle_text,
				g = c.focused_cover_photo;
			d = b("bs_block").__(20, [{
				fundraiserID: c.id,
				canDonate: c.can_donate,
				hasViewerDonated: c.has_viewer_donated,
				fundraiserDetailedProgressText: e == null ? null : e.text,
				fundraiserSubtitleText: f == null ? null : f.text,
				focusedCoverPhoto: g == null ? null : {
					src: g.photo.image.uri,
					data: {
						height: g.photo.image.height,
						width: g.photo.image.width
					}
				}
			}])
		} else d = c.__typename === "MessengerRetailReceipt" ? b("bs_block").__(21, [{
			account_holder_name: c.account_holder_name,
			adjustments: c.retail_adjustments,
			cancellation_url: c.cancellation_url,
			items: c.retail_items,
			merchant_name: c.merchant_name,
			messenger_commerce_bubble_type: c.bubble_type,
			order_id: c.receipt_id,
			order_time: c.order_time_for_display,
			order_url: c.receipt_url,
			payment_method: c.order_payment_method,
			receipt_id: c.id,
			recipient_name: c.recipient_name,
			shipping_cost: c.shipping_cost,
			shipping_method: c.shipping_method,
			status: c.status,
			structured_address: c.structured_address,
			subtotal: c.subtotal,
			total_cost: c.total,
			total_tax: c.tax,
			partner_logo: c.partner_log
		}]) : c.__typename === "JobApplication" ? b("bs_block").__(22, [{
			id: c.id
		}]) : c.__typename === "GroupCommerceProductItem" ? b("bs_block").__(23, [{
			group_commerce_item_description: c.group_commerce_item_description,
			group_commerce_item_seller: c.group_commerce_item_seller,
			formatted_price: c.formatted_price,
			group_commerce_item_title: c.group_commerce_item_title,
			primary_photo: c.primary_photo,
			url: c.url
		}]) : c.__typename === "Page" ? b("bs_block").__(24, [{
			address: c.address,
			top_category_name: c.top_category_name,
			cover_photo: c.cover_photo,
			location: c.location,
			name: c.name,
			overall_star_rating: c.overall_star_rating,
			id: c.id,
			price_range_description: c.price_range_description
		}]) : c.__typename === "MessengerEventReminder" ? b("bs_block").__(25, [{
			is_active: c.is_active,
			event_title: c.event_title,
			time: c.time
		}]) : c.__typename === "FormProgressStoryAttachment" ? b("bs_block").__(50, [{
			progress: c.progress,
			url: c.url
		}]) : c.__typename === "AirlineBoardingPassCollectionMessageAttachment" ? b("bs_block").__(26, [{
			tint_color: c.tint_color,
			logo: c.logo,
			flight_label: c.flight_label,
			boarding_time_label: c.boarding_time_label,
			departure_label: c.departure_label,
			passenger_names_label: c.passenger_names_label,
			passenger_seat_label: c.passenger_seat_label,
			flight_terminal_label: c.flight_terminal_label,
			flight_gate_label: c.flight_gate_label,
			view_boarding_pass_cta_label: c.view_boarding_pass_cta_label,
			boarding_passes: c.boarding_passes,
			share_cta_label: c.share_cta_label,
			message_cta_label: c.message_cta_label,
			boarding_pass_title_label: c.boarding_pass_title_label,
			boarding_pass_error_title_label: c.boarding_pass_error_title_label
		}]) : c.__typename === "AirlineCheckInReminderMessageAttachment" ? b("bs_block").__(27, [{
			pnr_number: c.pnr_number,
			tint_color: c.tint_color,
			checkin_url: c.checkin_url,
			booking_number_label: c.booking_number_label,
			flight_label: c.flight_label,
			arrival_time_label: c.arrival_time_label,
			departure_time_label: c.departure_time_label,
			checkin_cta_label: c.checkin_cta_label,
			logo: c.logo,
			flight_infos: c.flight_infos
		}]) : c.__typename === "AirlineUpdateMessageAttachment" ? b("bs_block").__(28, [{
			pnr_number: c.pnr_number,
			tint_color: c.tint_color,
			update_type: c.update_type,
			departure_time_label: c.departure_time_label,
			arrival_time_label: c.arrival_time_label,
			booking_number_label: c.booking_number_label,
			flight_gate_label: c.flight_gate_label,
			flight_label: c.flight_label,
			flight_status_label: c.flight_status_label,
			passenger_names_label: c.passenger_names_label,
			passenger_seat_label: c.passenger_seat_label,
			logo: c.logo,
			flight_info: c.flight_info,
			hightlighted_labels: c.hightlighted_labels
		}]) : c.__typename === "AirlineItineraryMessageAttachment" ? b("bs_block").__(29, [{
			confirmation_number: c.confirmation_number,
			pnr_number: c.pnr_number,
			tint_color: c.tint_color,
			formatted_total: c.formatted_total,
			itemized_price_infos: c.itemized_price_infos,
			formatted_tax: c.formatted_tax,
			formatted_base_price: c.formatted_base_price,
			passenger_infos: c.passenger_infos,
			logo: c.logo,
			aircraft_type_label: c.aircraft_type_label,
			arrival_time_label: c.arrival_time_label,
			base_price_label: c.base_price_label,
			booking_number_label: c.booking_number_label,
			cabin_type_label: c.cabin_type_label,
			departure_time_label: c.departure_time_label,
			flight_confirmation_label: c.flight_confirmation_label,
			flight_date_label: c.flight_date_label,
			flight_label: c.flight_label,
			flight_terminal_label: c.flight_terminal_label,
			itinerary_error_title_label: c.itinerary_error_title_label,
			itinerary_title_label: c.itinerary_title_label,
			passenger_name_label: c.passenger_name_label,
			passenger_names_label: c.passenger_names_label,
			passenger_seat_label: c.passenger_seat_label,
			purchase_summary_label: c.purchase_summary_label,
			taxes_label: c.taxes_label,
			total_label: c.total_label,
			view_details_cta_label: c.view_details_cta_label,
			itinerary_legs: c.itinerary_legs
		}]) : c.__typename === "MessengerRetailShipmentTrackingEvent" ? b("bs_block").__(30, [{
			id: c.id,
			shipment: c.shipment,
			tracking_event_time_for_display: c.tracking_event_time_for_display,
			shipment_tracking_event_type: c.shipment_tracking_event_type,
			messenger_commerce_location: c.messenger_commerce_location,
			tracking_event_description: c.tracking_event_description,
			bubble_type: c.bubble_type
		}]) : c.__typename === "MessengerRetailShipment" ? b("bs_block").__(31, [{
			id: c.id,
			tracking_number: c.tracking_number,
			shipdate_for_display: c.shipdate_for_display,
			estimated_delivery_time_for_display: c.estimated_delivery_time_for_display,
			commerce_origin: c.commerce_origin,
			commerce_destination: c.commerce_destination,
			retail_carrier: c.retail_carrier,
			shipment_tracking_events: c.shipment_tracking_events,
			receipt: c.receipt,
			recipient: c.recipient,
			retail_shipment_items: c.retail_shipment_items,
			bubble_type: c.bubble_type
		}]) : c.__typename === "EventAttendanceConfirmation" ? b("bs_block").__(33, [{
			id: c.id,
			num_guests: c.num_guests,
			attendee_answers: c.attendee_answers,
			event: c.event
		}]) : c.__typename === "LeadGenDeepLinkData" ? b("bs_block").__(32, [{
			id: c.id,
			cover_image: c.cover_image,
			headline: c.headline,
			name: c.name,
			page: c.page
		}]) : c.__typename === "UserLeadGenInfo" ? b("bs_block").__(34, [{
			id: c.id,
			field_data: c.field_data
		}]) : c.__typename === "WECMessageAudio" ? b("bs_block").__(38, [{
			id: c.id,
			filename: c.filename,
			playable_url: c.playable_url,
			url_shimhash: c.url_shimhash,
			filesize: c.filesize,
			extension: c.extension,
			duration: c.duration
		}]) : c.__typename === "IceBreakerMessageAttachment" ? b("bs_block").__(35, [{
			ice_breaker_title: c.ice_breaker_title,
			ice_breaker_messages: c.ice_breaker_messages,
			ad_id: c.ad_id
		}]) : c.__typename === "WECMessage" ? b("bs_block").__(36, [{
			sender_wec_number: c.sender_wec_number,
			sender_wec_number_formated: c.sender_wec_number_formated,
			sender_wec_number_fbid: c.sender_wec_number_fbid,
			sender_wec_name: c.sender_wec_name
		}]) : c.__typename === "WECMessageImage" ? b("bs_block").__(37, [{
			id: c.id,
			extension: c.extension,
			preview: c.preview,
			large_preview: c.large_preview
		}]) : c.__typename === "WECMessageFile" ? b("bs_block").__(39, [{
			id: c.id,
			name: c.name,
			is_malicious: c.is_malicious,
			uri: c.uri,
			extension: c.extension,
			filesize: c.filesize
		}]) : c.__typename === "WECMessageVideo" ? b("bs_block").__(40, [{
			id: c.id,
			playable_url: c.playable_url,
			url_shimhash: c.url_shimhash,
			filesize: c.filesize,
			extension: c.extension,
			filename: c.filename,
			height: c.height,
			width: c.width
		}]) : c.__typename === "MontageDirect" ? b("bs_block").__(41, [{
			message_state: c.message_state,
			is_keep_disabled: c.is_keep_disabled,
			blob_media_type: c.blob_media_type,
			blob_media: c.blob_media,
			image: c.image
		}]) : c.__typename === "MBirthdayReminderAttachment" ? b("bs_block").__(42, [{
			friend_id: c.friend_id,
			confidence: c.confidence,
			birthday_date: c.birthday_date
		}]) : c.__typename === "MPersonalRemindersList" ? b("bs_block").__(43, [{
			has_more_upcoming_reminders: c.has_more_upcoming_reminders,
			personal_reminders: c.personal_reminders
		}]) : c.__typename === "MentorshipMessengerCurriculumStep" ? b("bs_block").__(44, [{
			id: c.id,
			module_name: c.module_name,
			mentorship_program: c.mentorship_program,
			program_name: c.program_name,
			curriculum_message: c.curriculum_message,
			prompt: c.prompt,
			step_count: c.step_count,
			total_steps: c.total_steps
		}]) : c.__typename === "MentorshipMessengerDiscussionTopicSet" ? b("bs_block").__(45, [{
			id: c.id,
			topics: c.topics
		}]) : c.__typename === "MentorshipMessengerLeavePrompt" ? b("bs_block").__(46, [{
			mentorship_program: c.mentorship_program,
			id: c.id,
			xma_type: c.xma_type
		}]) : c.__typename === "MentorshipMessengerReminder" ? b("bs_block").__(47, [{
			id: c.id,
			xma_type: c.xma_type
		}]) : c.__typename === "MentorshipMessengerSurvey" ? b("bs_block").__(48, [{
			id: c.id,
			xma_type: c.xma_type,
			xma_title: c.xma_title,
			xma_disclaimer: c.xma_disclaimer,
			mentorship_program: c.mentorship_program
		}]) : c.__typename === "MentorshipMessengerProgressTracker" ? b("bs_block").__(49, [{
			id: c.id,
			xma_type: c.xma_type,
			xma_title: c.xma_title,
			xma_body: c.xma_body
		}]) : c.__typename === "Story" ? b("bs_block").__(51, [{
			title: c.title,
			message_richtext: c.message_richtext,
			feedback: c.feedback,
			reaction_count_reduced: c.reaction_count_reduced,
			top_reactions: c.top_reactions,
			post_id: c.post_id,
			creation_time: c.creation_time,
			description: c.description,
			actors: c.actors,
			to: c.to,
			attachments: c.attachments,
			attached_story: c.attached_story
		}]) : c.__typename === "User" ? b("bs_block").__(52, [{
			type: c.__typename,
			id: c.id,
			name: c.name,
			profile_picture: c.profile_picture,
			cover_photo: c.cover_photo,
			work_info: c.work_info,
			subscribe_status: c.subscribe_status
		}]) : c.__typename === "Group" ? b("bs_block").__(53, [{
			type: c.__typename,
			id: c.id,
			name: c.name,
			cover_photo: c.cover_photo,
			visibility: c.visibility,
			visibility_sentence: c.visibility_sentence,
			viewer_join_state: c.viewer_join_state,
			group_general_chat: c.group_general_chat,
			work_groups_sync_metadata: c.work_groups_sync_metadata
		}]) : c.__typename === "AppContent" ? b("bs_block").__(54, [{
			type: c.__typename,
			id: c.id,
			attachment_type_name: c.attachment_type_name,
			privacy_status: c.privacy_status,
			file_type_category: c.file_type_category,
			app_integration: c.app_integration,
			attachment_icon: c.app_integration,
			content_uri: c.content_uri,
			link_preview_additional_data: c.link_preview_additional_data
		}]) : c.__typename === "OneVCMeetingPublic" ? b("bs_block").__(55, [{
			type: c.__typename,
			subject: c.subject,
			joinable_link: c.joinable_link
		}]) : c.__typename === "OfferItem" ? b("bs_block").__(56, [{
			type: c.__typename,
			id: c.id
		}]) : c.__typename === "CommerceProductItemShare" ? b("bs_block").__(57, [{
			type: c.__typename,
			default_action: c.default_action
		}]) : c.__typename === "ApplicationReferralXMA" ? b("bs_block").__(58, [{
			type: c.__typename,
			id: c.id,
			referral_offer_link: c.referral_offer_link
		}]) : c.__typename === "PostPurchaseOrderUpdateXma" ? b("bs_block").__(59, [{
			type: c.__typename,
			order_progress: c.order_progress
		}]) : c.__typename === "InThreadMultiphotoItemCTAData" ? b("bs_block").__(60, [{
			type: c.__typename,
			action_prefill: c.action_prefill,
			ad_id: c.ad_id,
			cta_title: c.cta_title,
			customer_id: c.customer_id,
			index: c.index,
			page_id: c.page_id,
			reply_image_uri: c.reply_image_uri
		}]) : null;
		return {
			description: a.description,
			media: a.media,
			source: a.source,
			style_list: j(a.style_list),
			title_with_entities: a.title_with_entities,
			properties: a.properties,
			url: a.url,
			deduplication_key: a.deduplication_key,
			action_links: a.action_links,
			messaging_attribution: a.messaging_attribution,
			messenger_call_to_actions: a.messenger_call_to_actions,
			xma_layout_info: a.xma_layout_info,
			messenger_generic_xma_template_extra_info: a.messenger_generic_xma_template_extra_info,
			target: d
		}
	}

	function l(a) {
		var b = k({
			description: a.description,
			media: a.media,
			source: a.source,
			style_list: a.style_list,
			title_with_entities: a.title_with_entities,
			properties: a.properties,
			url: a.url,
			deduplication_key: a.deduplication_key,
			action_links: a.action_links,
			messaging_attribution: a.messaging_attribution,
			messenger_call_to_actions: a.messenger_call_to_actions,
			xma_layout_info: a.xma_layout_info,
			messenger_generic_xma_template_extra_info: a.messenger_generic_xma_template_extra_info,
			target: a.target
		});
		if (b == null) return null;
		else {
			a = a.subattachments.map(k);
			return Object.assign({
				subattachments: a
			}, b)
		}
	}

	function m(a) {
		a = a.message;
		if (a == null) return [];
		else {
			var c = [];
			a.ranges.forEach(function (a) {
				var d = a.entity;
				if (d == null) return 0;
				else {
					var e = d.id,
						f = d.thread_key;
					if (e == null)
						if (f == null) return 0;
						else {
							f = f.thread_fbid;
							if (f == null) return 0;
							else {
								var g = d.__typename,
									h;
								switch (g) {
									case "MessengerViewerGroupThread":
										h = b("MessageProfileRangeType").THREAD;
										break;
									case "User":
										h = b("MessageProfileRangeType").PROFILE;
										break;
									default:
										h = b("MessageProfileRangeType").NONE
								}
								c.push({
									id: f,
									offset: a.offset,
									length: a.length,
									type: h
								});
								return 0
							}
						}
					else {
						g = d.__typename;
						var i;
						switch (g) {
							case "MessengerViewerGroupThread":
								i = b("MessageProfileRangeType").THREAD;
								break;
							case "User":
								i = b("MessageProfileRangeType").PROFILE;
								break;
							default:
								i = b("MessageProfileRangeType").NONE
						}
						c.push({
							id: e,
							offset: a.offset,
							length: a.length,
							type: i
						});
						return 0
					}
				}
			});
			return c
		}
	}

	function n(a, c, d, e) {
		var f = {};
		c.message_reactions.forEach(function (a) {
			f[a.user.id] = a.reaction;
			return 0
		});
		var j = b("FBIDCheck").isUser_deprecated(c.message_sender.id),
			k = j ? b("MessagingTagUtils").getSourceFromTags(c.tags_list) : b("MercurySourceType").UNKNOWN;
		j = j ? b("MessagingTagUtils").getSourceTags(c.tags_list, k) : [];
		var o = c.message_id,
			p = d.thread_id,
			q = d.thread_fbid,
			r = d.other_user_fbid;
		r = p == null ? q == null ? r == null ? null : b("MercuryIDs").getThreadIDFromUserID(r) : b("MercuryIDs").getThreadIDFromThreadFBID(q) : p;
		q = c.tags_list.some(function (a) {
			if (a === "action:copy_message" || a === "copy_self_message" || a === "action:copy_attachment") return !0;
			else return a === "copy_self_attachment"
		});
		p = c.commerce_message_type;
		var s = c.customizations,
			t = c.replied_to_message,
			u;
		if (t == null) u = null;
		else {
			var v = t.message;
			u = v == null ? {
				status: t.status,
				message: null
			} : {
				status: t.status,
				message: b("bs_js_null_undefined").fromOption(b("bs_caml_option").some(n(a, v, d, e)))
			}
		}
		t = c.error_data;
		v = c.unsent_timestamp_precise;
		v = v == null || v === "0" ? null : b("bs_js_null_undefined").fromOption(b("bs_caml_format").caml_float_of_string(v));
		var w = c.unsender;
		r = {
			thread_id: r,
			thread_fbid: d.thread_fbid,
			other_user_fbid: d.other_user_fbid,
			action_type: c.__typename === "UserMessage" ? b("MercuryActionType").USER_GENERATED_MESSAGE : b("MercuryActionType").LOG_MESSAGE,
			message_id: o,
			threading_id: null,
			offline_threading_id: c.offline_threading_id,
			author: b("MercuryIDs").getParticipantIDFromUserID(c.message_sender.id),
			author_email: c.message_sender.email,
			ephemeral_ttl_mode: c.ttl,
			timestamp: b("bs_caml_format").caml_float_of_string(c.timestamp_precise),
			is_unread: c.unread,
			is_filtered_content: c.tags_list.indexOf("filtered_content") !== -1,
			is_filtered_content_bh: c.tags_list.indexOf("filtered_content_bh") !== -1,
			is_filtered_content_account: c.tags_list.indexOf("filtered_content_account") !== -1,
			is_filtered_content_quasar: c.tags_list.indexOf("filtered_content_quasar") !== -1,
			is_filtered_content_invalid_app: c.tags_list.indexOf("filtered_content_invalid_app") !== -1,
			is_sponsored: c.is_sponsored,
			is_one_way_sent: c.tags_list.some(function (a) {
				return a === "one_way_message"
			}),
			ad_id: c.ad_id,
			ad_client_token: c.ad_client_token,
			commerce_message_type: p == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceMessageType"), p)),
			customizations: s == null ? [] : s,
			source: k,
			source_tags: j,
			tags: c.tags_list,
			is_spoof_warning: c.tags_list.indexOf("MTA:dmarc:fail") !== -1 || c.tags_list.indexOf("spam:spoofing") !== -1 || c.tags_list.indexOf("MTA:spoof_warning") !== -1,
			folder: d.folder,
			platform_xmd: c.platform_xmd_encoded,
			m_suggestions: c.m_suggestions,
			message_source: c.message_source_data,
			montage_reply_data: c.montage_reply_data,
			replied_to_message: u,
			skip_bump_thread: !1,
			profile_ranges: m(c),
			reactions: f,
			error_data: t == null ? null : {
				description: t.description
			},
			removed_timestamp: v,
			unsender: w == null ? null : {
				id: b("MercuryIDs").getParticipantIDFromUserID(w.messaging_actor.id),
				name: w.messaging_actor.name,
				short_name: w.messaging_actor.short_name
			},
			verse_group_role_xmd: c.verse_group_role_xmd,
			mib_direct_message_data: c.mib_direct_message_data,
			message_unsendability_status: b("MessageUnsendabilityStatus.bs").fromNullableString(c.message_unsendability_status),
			has_attachment: null,
			attachments: null,
			raw_attachments: null,
			ranges: null,
			meta_ranges: null,
			status: null,
			log_message_type: null,
			log_message_data: null,
			log_message_body: null,
			body: null,
			subject: null,
			creator_info: null,
			is_forwarded: q,
			preview_attachments: null,
			sticker_id: null
		};
		if (c.__typename === "UserMessage") {
			p = g(c);
			s = c.extensible_attachment;
			if (s == null) k = null;
			else {
				j = s.story_attachment;
				u = s.genie_attachment;
				if (u == null) t = null;
				else {
					v = u.genie_message;
					if (v == null) w = null;
					else {
						q = v.story_attachment;
						w = {
							story_attachment: q == null ? null : l(q)
						}
					}
					t = {
						genie_message: w
					}
				}
				k = {
					legacy_attachment_id: s.legacy_attachment_id,
					story_attachment: j == null ? null : l(j),
					genie_attachment: t
				}
			}
			u = b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
				extensible_attachment: k,
				blob_attachments: p,
				sticker: c.sticker
			}, o, e);
			v = c.message;
			q = c.page_admin_sender;
			Object.assign(r, {
				body: v == null ? null : v.text,
				creator_info: q == null ? null : {
					creatorID: q.admin_id,
					creatorName: q.name,
					creatorType: q.sender_type,
					labelType: q.label_type,
					pageID: q.page_id,
					profileURI: q.profile_uri
				},
				subject: null,
				has_attachment: u.length > 0,
				attachments: u,
				raw_attachments: null,
				ranges: void 0,
				meta_ranges: c.meta_ranges.map(function (a) {
					return babelHelpers["extends"]({}, a, {
						data: JSON.parse(a.data)
					})
				})
			})
		} else if (c.__typename === "VoiceCallMessage" || c.__typename === "VideoCallMessage") {
			w = c.__typename;
			s = w === "VoiceCallMessage" ? b("MercuryLogMessageType").PHONE_CALL : b("MercuryLogMessageType").VIDEO_CALL;
			j = c.message_sender.id;
			t = d.other_user_fbid;
			k = t == null ? null : b("MercuryIDs").getParticipantIDFromUserID(j === t ? b("CurrentUser").getID() : t);
			p = c.answered;
			Object.assign(r, {
				log_message_type: s,
				log_message_data: {
					answered: p == null ? !1 : p,
					call_capture_attachments: h(a, c, e),
					caller: b("MercuryIDs").getParticipantIDFromUserID(j),
					callee: k
				},
				log_message_body: c.snippet
			})
		} else if (c.__typename === "ThreadNameMessage") Object.assign(r, {
			log_message_type: b("MercuryLogMessageType").THREAD_NAME,
			log_message_data: {
				name: c.thread_name
			},
			log_message_body: c.snippet
		});
		else if (c.__typename === "ThreadImageMessage") {
			o = c.image_with_metadata;
			if (o == null) v = null;
			else {
				q = o.preview;
				v = {
					preview_url: q == null ? null : q.uri,
					metadata: {
						fbid: o.legacy_attachment_id,
						dimensions: String(o.original_dimensions.x) + ("," + String(o.original_dimensions.y))
					}
				}
			}
			Object.assign(r, {
				log_message_type: b("MercuryLogMessageType").THREAD_IMAGE,
				log_message_data: {
					image: v
				},
				log_message_body: c.snippet
			})
		} else if (c.__typename === "ParticipantsAddedMessage") {
			u = c.participants_added;
			Object.assign(r, {
				log_message_type: b("MercuryLogMessageType").SUBSCRIBE,
				log_message_data: {
					added_participants: u == null ? [] : u.map(function (a) {
						return b("MercuryIDs").getParticipantIDFromUserID(a.id)
					})
				},
				log_message_body: c.snippet
			})
		} else if (c.__typename === "ParticipantLeftMessage") {
			w = c.participants_removed;
			Object.assign(r, {
				log_message_type: b("MercuryLogMessageType").UNSUBSCRIBE,
				log_message_data: {
					removed_participants: w == null ? [] : w.map(function (a) {
						return b("MercuryIDs").getParticipantIDFromUserID(a.id)
					})
				},
				log_message_body: c.snippet
			})
		} else if (c.__typename === "GenericAdminTextMessage") {
			d = c.extensible_message_admin_text;
			t = c.extensible_message_admin_text_type;
			d == null ? t == null || Object.assign(r, {
				log_message_body: c.snippet,
				log_message_data: {
					message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), t)),
					untypedData: void 0
				},
				log_message_type: b("MercuryLogMessageType").GENERIC_ADMIN_TEXT
			}) : t == null || Object.assign(r, i(a, d, t, c.snippet, e))
		} else if (c.__typename === "P2PPaymentRequestMessage" || c.__typename === "P2PPaymentMessage") {
			s = c.p2p_sender;
			p = c.p2p_receiver;
			j = c.amount;
			k = c.message_type;
			Object.assign(r, {
				log_message_body: c.snippet,
				log_message_data: {
					transfer_id: c.transfer_id,
					senderId: s == null ? null : b("MercuryIDs").getParticipantIDFromUserID(s.id),
					receiverId: p == null ? null : b("MercuryIDs").getParticipantIDFromUserID(p.id),
					formattedAmount: j == null ? null : j.formatted,
					subtype: k == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("P2PPaymentLogMessageSubtype"), k))
				},
				log_message_type: b("MercuryLogMessageType").ORION
			})
		}
		return r
	}
	f.unsafeCastBlobAttachments = g;
	f._getCallCaptureAttachments = h;
	f._getGenericAdminTextMessage = i;
	f._getStyleList = j;
	f.unsafeCastExtensibleAttachmentWithoutSubattachments = k;
	f.unsafeCastExtensibleAttachment = l;
	f._getProfileRanges = m;
	f.transformMessage = n
}), null);
__d("MessengerObjectAssociationType", ["keyMirror"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("keyMirror")({
		REGULAR_CHAT: null,
		GENERAL_CHAT: null
	});
	e.exports = a
}), null);
__d("MessengerThreadCannotReplyReason", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		BLOCKED: "blocked",
		MESSENGER_BLOCKEE: "messenger_blockee",
		COMPOSER_DISABLED_BOT: "composer_disabled_bot",
		HAS_EMAIL_PARTICIPANT: "has_email_participant",
		OBJECT_ORIGINATED: "object_originated",
		READ_ONLY: "read_only",
		VIEWER_NOT_SUBSCRIBED: "viewer_not_subscribed",
		RECIPIENTS_NOT_LOADABLE: "recipients_not_loadable",
		RECIPIENTS_UNAVAILABLE: "recipients_unavailable",
		RECIPIENTS_INVALID: "recipients_invalid",
		RECIPIENTS_INACTIVE_WORK_ACC: "recipients_inactive_work_account",
		MONTAGE_NOT_AUTHOR: "montage_not_author",
		VIEWER_MUTED_IN_FBGROUP: "viewer_muted_in_fbgroup"
	});
	e.exports = a
}), null);
__d("MessengerThreadCannotReplyReason.bs", ["bs_js_dict", "MessengerThreadCannotReplyReason"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		if (a == null) return;
		else return b("bs_js_dict").get(b("MessengerThreadCannotReplyReason"), a)
	}

	function c(a) {
		if (a == null) return null;
		else if (a !== 0) switch (a - 1 | 0) {
			case 0:
				return b("MessengerThreadCannotReplyReason").RECIPIENTS_NOT_LOADABLE;
			case 1:
				return b("MessengerThreadCannotReplyReason").BLOCKED;
			case 2:
				return b("MessengerThreadCannotReplyReason").MESSENGER_BLOCKEE
		} else return b("MessengerThreadCannotReplyReason").BLOCKED
	}
	f.fromName = a;
	f.fromMessageThreadCannotReplyReason = c
}), null);
__d("bs_caml_js_exceptions", ["bs_caml_option", "bs_caml_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("bs_caml_exceptions").create("Caml_js_exceptions.Error");

	function a(a) {
		if (b("bs_caml_exceptions").caml_is_extension(a)) return a;
		else return [g, a]
	}

	function c(a) {
		if (a[0] === g) return b("bs_caml_option").some(a[1])
	}
	f.$$Error = g;
	f.internalToOCamlException = a;
	f.caml_as_js_exn = c
}), null);
__d("bs_array", ["bs_curry", "bs_caml_obj", "bs_caml_array", "bs_caml_exceptions", "bs_caml_js_exceptions", "bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("bs_caml_array").caml_make_float_vect,
		h = {};

	function a(a, c) {
		if (a === 0) return [];
		else {
			if (a < 0) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.init"];
			var d = b("bs_caml_array").caml_make_vect(a, b("bs_curry")._1(c, 0));
			for (var e = 1, a = a - 1 | 0; e <= a; ++e) d[e] = b("bs_curry")._1(c, e);
			return d
		}
	}

	function c(a, c, d) {
		var e = b("bs_caml_array").caml_make_vect(a, []);
		for (var f = 0, a = a - 1 | 0; f <= a; ++f) e[f] = b("bs_caml_array").caml_make_vect(c, d);
		return e
	}

	function i(a) {
		var c = a.length;
		if (c === 0) return [];
		else return b("bs_caml_array").caml_array_sub(a, 0, c)
	}

	function d(a, c) {
		var d = a.length;
		if (d === 0) return i(c);
		else if (c.length === 0) return b("bs_caml_array").caml_array_sub(a, 0, d);
		else return a.concat(c)
	}

	function e(a, c, d) {
		if (c < 0 || d < 0 || c > (a.length - d | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.sub"];
		return b("bs_caml_array").caml_array_sub(a, c, d)
	}

	function j(a, c, d, e) {
		if (c < 0 || d < 0 || c > (a.length - d | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.fill"];
		for (var f = c, c = (c + d | 0) - 1 | 0; f <= c; ++f) a[f] = e;
		return 0
	}

	function k(a, c, d, e, f) {
		if (f < 0 || c < 0 || c > (a.length - f | 0) || e < 0 || e > (d.length - f | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.blit"];
		return b("bs_caml_array").caml_array_blit(a, c, d, e, f)
	}

	function l(a, c) {
		for (var d = 0, e = c.length - 1 | 0; d <= e; ++d) b("bs_curry")._1(a, c[d]);
		return 0
	}

	function m(a, c, d) {
		if (c.length !== d.length) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.iter2: arrays must have the same length"];
		for (var e = 0, f = c.length - 1 | 0; e <= f; ++e) b("bs_curry")._2(a, c[e], d[e]);
		return 0
	}

	function n(a, c) {
		var d = c.length;
		if (d === 0) return [];
		else {
			var e = b("bs_caml_array").caml_make_vect(d, b("bs_curry")._1(a, c[0]));
			for (var f = 1, d = d - 1 | 0; f <= d; ++f) e[f] = b("bs_curry")._1(a, c[f]);
			return e
		}
	}

	function o(a, c, d) {
		var e = c.length,
			f = d.length;
		if (e !== f) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Array.map2: arrays must have the same length"];
		if (e === 0) return [];
		else {
			f = b("bs_caml_array").caml_make_vect(e, b("bs_curry")._2(a, c[0], d[0]));
			for (var g = 1, e = e - 1 | 0; g <= e; ++g) f[g] = b("bs_curry")._2(a, c[g], d[g]);
			return f
		}
	}

	function p(a, c) {
		for (var d = 0, e = c.length - 1 | 0; d <= e; ++d) b("bs_curry")._2(a, d, c[d]);
		return 0
	}

	function q(a, c) {
		var d = c.length;
		if (d === 0) return [];
		else {
			var e = b("bs_caml_array").caml_make_vect(d, b("bs_curry")._2(a, 0, c[0]));
			for (var f = 1, d = d - 1 | 0; f <= d; ++f) e[f] = b("bs_curry")._2(a, f, c[f]);
			return e
		}
	}

	function r(a) {
		var b = a.length - 1 | 0,
			c = 0;
		while (!0) {
			var d = c,
				e = b;
			if (e < 0) return d;
			else {
				c = [a[e], d];
				b = e - 1 | 0;
				continue
			}
		}
	}

	function s(a, b) {
		while (!0) {
			var c = b,
				d = a;
			if (c) {
				b = c[1];
				a = d + 1 | 0;
				continue
			} else return d
		}
	}

	function t(a) {
		if (a) {
			var c = b("bs_caml_array").caml_make_vect(s(0, a), a[0]),
				d = 1;
			a = a[1];
			while (!0) {
				var e = a,
					f = d;
				if (e) {
					c[f] = e[0];
					a = e[1];
					d = f + 1 | 0;
					continue
				} else return c
			}
		} else return []
	}

	function u(a, c, d) {
		c = c;
		for (var e = 0, f = d.length - 1 | 0; e <= f; ++e) c = b("bs_curry")._2(a, c, d[e]);
		return c
	}

	function v(a, c, d) {
		d = d;
		for (var e = c.length - 1 | 0; e >= 0; --e) d = b("bs_curry")._2(a, c[e], d);
		return d
	}

	function w(a, c) {
		var d = c.length,
			e = 0;
		while (!0) {
			var f = e;
			if (f === d) return !1;
			else if (b("bs_curry")._1(a, c[f])) return !0;
			else {
				e = f + 1 | 0;
				continue
			}
		}
	}

	function x(a, c) {
		var d = c.length,
			e = 0;
		while (!0) {
			var f = e;
			if (f === d) return !0;
			else if (b("bs_curry")._1(a, c[f])) {
				e = f + 1 | 0;
				continue
			} else return !1
		}
	}

	function y(a, c) {
		var d = c.length,
			e = 0;
		while (!0) {
			var f = e;
			if (f === d) return !1;
			else if (b("bs_caml_obj").caml_equal(c[f], a)) return !0;
			else {
				e = f + 1 | 0;
				continue
			}
		}
	}

	function z(a, b) {
		var c = b.length,
			d = 0;
		while (!0) {
			var e = d;
			if (e === c) return !1;
			else if (a === b[e]) return !0;
			else {
				d = e + 1 | 0;
				continue
			}
		}
	}
	var A = b("bs_caml_exceptions").create("Array.Bottom");

	function B(a, c) {
		var d = function (d, e) {
				var f = ((e + e | 0) + e | 0) + 1 | 0,
					g = f;
				if ((f + 2 | 0) < d) {
					b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(c, f), b("bs_caml_array").caml_array_get(c, f + 1 | 0)) < 0 && (g = f + 1 | 0);
					b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(c, g), b("bs_caml_array").caml_array_get(c, f + 2 | 0)) < 0 && (g = f + 2 | 0);
					return g
				} else if ((f + 1 | 0) < d && b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(c, f), b("bs_caml_array").caml_array_get(c, f + 1 | 0)) < 0) return f + 1 | 0;
				else if (f < d) return f;
				else throw [A, e]
			},
			e = function (e, f, g) {
				try {
					e = e;
					f = f;
					var h = g;
					while (!0) {
						var i = f,
							j = d(e, i);
						if (b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(c, j), h) > 0) {
							b("bs_caml_array").caml_array_set(c, i, b("bs_caml_array").caml_array_get(c, j));
							f = j;
							continue
						} else return b("bs_caml_array").caml_array_set(c, i, h)
					}
				} catch (a) {
					j = b("bs_caml_js_exceptions").internalToOCamlException(a);
					if (j[0] === A) return b("bs_caml_array").caml_array_set(c, j[1], g);
					else throw j
				}
			},
			f = function (a, e) {
				try {
					a = a;
					e = e;
					while (!0) {
						var f = e,
							g = d(a, f);
						b("bs_caml_array").caml_array_set(c, f, b("bs_caml_array").caml_array_get(c, g));
						e = g;
						continue
					}
				} catch (a) {
					f = b("bs_caml_js_exceptions").internalToOCamlException(a);
					if (f[0] === A) return f[1];
					else throw f
				}
			},
			g = function (e, f) {
				while (!0) {
					var d = e,
						g = (d - 1 | 0) / 3 | 0;
					if (d === g) throw [b("bs_caml_builtin_exceptions").assert_failure, ["array.ml", 238, 4]];
					if (b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(c, g), f) < 0) {
						b("bs_caml_array").caml_array_set(c, d, b("bs_caml_array").caml_array_get(c, g));
						if (g > 0) {
							e = g;
							continue
						} else return b("bs_caml_array").caml_array_set(c, 0, f)
					} else return b("bs_caml_array").caml_array_set(c, d, f)
				}
			},
			h = c.length;
		for (var i = ((h + 1 | 0) / 3 | 0) - 1 | 0; i >= 0; --i) e(h, i, b("bs_caml_array").caml_array_get(c, i));
		for (var i = h - 1 | 0; i >= 2; --i) {
			e = b("bs_caml_array").caml_array_get(c, i);
			b("bs_caml_array").caml_array_set(c, i, b("bs_caml_array").caml_array_get(c, 0));
			g(f(i, 0), e)
		}
		if (h > 1) {
			f = (e = b("bs_caml_array")).caml_array_get(c, 1);
			e.caml_array_set(c, 1, e.caml_array_get(c, 0));
			return e.caml_array_set(c, 0, f)
		} else return 0
	}

	function C(a, c) {
		var d = function (d, e, f, g, h, i, j) {
				e = d + e | 0;
				h = g + h | 0;
				var l = d;
				d = b("bs_caml_array").caml_array_get(c, d);
				var m = g;
				g = b("bs_caml_array").caml_array_get(f, g);
				j = j;
				while (!0) {
					var n = j,
						o = g,
						p = m,
						q = d,
						r = l;
					if (b("bs_curry")._2(a, q, o) <= 0) {
						b("bs_caml_array").caml_array_set(i, n, q);
						q = r + 1 | 0;
						if (q < e) {
							j = n + 1 | 0;
							d = b("bs_caml_array").caml_array_get(c, q);
							l = q;
							continue
						} else return k(f, p, i, n + 1 | 0, h - p | 0)
					} else {
						b("bs_caml_array").caml_array_set(i, n, o);
						q = p + 1 | 0;
						if (q < h) {
							j = n + 1 | 0;
							g = b("bs_caml_array").caml_array_get(f, q);
							m = q;
							continue
						} else return k(c, r, i, n + 1 | 0, e - r | 0)
					}
				}
			},
			e = function (d, e, f, g) {
				for (var h = 0, g = g - 1 | 0; h <= g; ++h) {
					var i = b("bs_caml_array").caml_array_get(c, d + h | 0),
						j = (f + h | 0) - 1 | 0;
					while (j >= f && b("bs_curry")._2(a, b("bs_caml_array").caml_array_get(e, j), i) > 0) b("bs_caml_array").caml_array_set(e, j + 1 | 0, b("bs_caml_array").caml_array_get(e, j)), j = j - 1 | 0;
					b("bs_caml_array").caml_array_set(e, j + 1 | 0, i)
				}
				return 0
			},
			f = function a(f, g, h, i) {
				if (i <= 5) return e(f, g, h, i);
				else {
					var b = i / 2 | 0;
					i = i - b | 0;
					a(f + b | 0, g, h + b | 0, i);
					a(f, c, f + i | 0, b);
					return d(f + i | 0, b, g, h + b | 0, i, g, h)
				}
			},
			g = c.length;
		if (g <= 5) return e(0, c, 0, g);
		else {
			var h = g / 2 | 0;
			g = g - h | 0;
			var i = b("bs_caml_array").caml_make_vect(g, b("bs_caml_array").caml_array_get(c, 0));
			f(h, i, 0, g);
			f(0, c, g, h);
			return d(g, h, i, 0, g, c, 0)
		}
	}
	var D = c,
		E = b("bs_caml_array").caml_array_concat,
		F = C;
	f.make_float = g;
	f.init = a;
	f.make_matrix = c;
	f.create_matrix = D;
	f.append = d;
	f.concat = E;
	f.sub = e;
	f.copy = i;
	f.fill = j;
	f.blit = k;
	f.to_list = r;
	f.of_list = t;
	f.iter = l;
	f.iteri = p;
	f.map = n;
	f.mapi = q;
	f.fold_left = u;
	f.fold_right = v;
	f.iter2 = m;
	f.map2 = o;
	f.for_all = x;
	f.exists = w;
	f.mem = y;
	f.memq = z;
	f.sort = B;
	f.stable_sort = C;
	f.fast_sort = F;
	f.Floatarray = h
}), null);
__d("MessengerServerPayloadTransformer.bs", ["fbt", "URI", "FBID.bs", "bs_array", "bs_string", "bs_js_dict", "bs_js_json", "getByPath", "bs_caml_array", "ChatConfig", "MercuryIDs", "bs_belt_Option", "bs_caml_format", "bs_caml_option", "CurrentUser", "GenderConst", "bs_js_null_undefined", "DisplayGenderConst", "MessagingThreadType", "isMessengerDotComURI", "WorkForeignEntityType", "MercuryParticipantTypes", "MessengerGroupAdminType", "MessengerGroupsSyncStatus.bs", "MessengerGroupThreadSubType", "MessengerMessageTransformer.bs", "MessengerAttachmentTransformer.bs", "MessengerGroupAdminModelStatus.bs", "MessengerObjectAssociationType", "MessageThreadUnsendabilityStatus.bs", "MessengerThreadCannotReplyReason", "MessengerThreadCannotReplyReason.bs"], (function (a, b, c, d, e, f, g) {
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
		var f = b("bs_array").fold_left(function (a, b) {
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
		else {
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
	}

	function k(a) {
		a = a.related_page_thread;
		if (a == null) return null;
		else {
			var b = a.custom_thread_tags.nodes.map(function (a) {
					return {
						id: a.id,
						name: a.name,
						color: a.color
					}
				}),
				c = a.custom_thread_labels.nodes.map(function (a) {
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
	}

	function l(a) {
		var c = a.thread_key.other_user_id;
		if (c == null) return !1;
		else {
			a = a.all_participants.edges;
			return b("bs_array").fold_left(function (a, b) {
				b = b.node.messaging_actor;
				if (b.id === c) return b.__typename === "User";
				else return a
			}, !1, a)
		}
	}

	function m(a) {
		if (a.length !== 0) {
			var b = {};
			a.forEach(function (a) {
				var c = a.nickname;
				if (c == null) return 0;
				else {
					b[a.participant_id] = c;
					return 0
				}
			});
			return b
		} else return null
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
			r = s == null ? q == null ? null : q : q == null || q.length === 0 ? s : "" + (String(q) + (" \u2022 " + (String(s) + "")))
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
			wec_group_participants: x == null ? [] : x.nodes.map(function (a) {
				return {
					id: b("MercuryIDs").getParticipantIDFromUserID(a.messaging_actor.id),
					name: a.messaging_actor.name
				}
			}),
			wec_group_admins: y == null ? [] : y.nodes.map(function (a) {
				return {
					id: b("MercuryIDs").getParticipantIDFromUserID(a.messaging_actor.id),
					name: a.messaging_actor.name
				}
			}),
			verification_status: a.verification_status
		}
	}

	function q(a) {
		return a.all_participants.edges.map(function (a) {
			return p(a.node.messaging_actor)
		})
	}

	function r(a, c) {
		c = c.read_receipts;
		if (c == null) return;
		else {
			var d = {};
			c.nodes.forEach(function (c) {
				var e = c.actor;
				if (!(e == null) && a !== e.id) {
					d[e.id] = {
						action: b("bs_caml_format").caml_float_of_string(c.action),
						watermark: b("bs_caml_format").caml_float_of_string(c.watermark)
					};
					return 0
				} else return 0
			});
			return b("bs_caml_option").some(d)
		}
	}

	function s(a) {
		a = a.delivery_receipts;
		if (a == null) return [];
		else return a.nodes.sort(function (a, c) {
			a = b("bs_caml_format").caml_float_of_string(a.timestamp_precise);
			c = b("bs_caml_format").caml_float_of_string(c.timestamp_precise);
			if (a > c) return -1;
			else if (a === c) return 0;
			else return 1
		})
	}

	function t(a, c, d) {
		var e = c.messages;
		if (e == null) return;
		else return e.nodes.map(function (e) {
			return b("MessengerMessageTransformer.bs").transformMessage(a, e, {
				thread_id: null,
				thread_fbid: c.thread_key.thread_fbid,
				other_user_fbid: c.thread_key.other_user_id,
				folder: c.folder.toLowerCase()
			}, d)
		})
	}

	function u(a, c, d) {
		var e = c.last_message.nodes.map(function (f) {
				var g = b("MessengerMessageTransformer.bs").unsafeCastBlobAttachments(f),
					h = f.extensible_attachment,
					i;
				if (h == null) i = null;
				else {
					var a = h.story_attachment,
						c = h.genie_attachment,
						d;
					if (c == null) d = null;
					else {
						c = c.genie_message;
						var e;
						if (c == null) e = null;
						else {
							c = c.story_attachment;
							e = {
								story_attachment: c == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(c)
							}
						}
						d = {
							genie_message: e
						}
					}
					i = {
						legacy_attachment_id: h.legacy_attachment_id,
						story_attachment: a == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(a),
						genie_attachment: d
					}
				}
				return {
					message_id: f.message_id,
					snippet: f.snippet,
					message_sender: f.message_sender,
					timestamp_precise: f.timestamp_precise,
					commerce_message_type: f.commerce_message_type,
					extensible_attachment: i,
					blob_attachments: g,
					sticker: f.sticker,
					extensible_message_admin_text: f.extensible_message_admin_text,
					platform_xmd_encoded: f.platform_xmd_encoded,
					extensible_message_admin_text_type: f.extensible_message_admin_text_type,
					message_unsendability_status: f.message_unsendability_status
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
				r = p == null ? void 0 : p.nodes.map(function (a) {
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
				h = [s, b("bs_caml_array").caml_array_get(u, 0), b("bs_caml_array").caml_array_get(u, p - 1 | 0), u, t, r, e.accessibility_label, e.reverse_gradients_for_radial]
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
		d = b("bs_array").fold_left(function (a, c) {
			a[c.id] = b("MessengerGroupAdminType").REGULAR_ADMIN;
			return a
		}, {}, f.thread_admins);
		d = b("bs_array").fold_left(function (c, d) {
			var e = d.node.messaging_actor.id;
			d = d.admin_type;
			var a = b("bs_js_dict").get(c, e);
			d == null || a !== void 0 && (c[e] = d);
			return c
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
				D = typeof E === "number" || E.tag !== 2 ? !1 : b("bs_js_dict").get(E[0], "landing_exp") !== void 0
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
				seller_added_labels: H.seller_added_labels.map(function (a) {
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
			approval_queue_ids: w == null ? [] : w.approval_requests.nodes.map(function (a) {
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
			lightweight_events: b("bs_array").fold_left(function (a, b) {
				a[b.id] = i(b);
				return a
			}, {}, f.event_reminders.nodes),
			message_count: f.message_count,
			mute_until: f.mute_until,
			name: G == null ? "" : G,
			object_association_type: I,
			other_user_fbid: f.thread_key.other_user_id,
			page_thread_info: k(f),
			participants: f.all_participants.edges.map(function (a) {
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
			pinned_messages: P == null ? null : P.map(function (c) {
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
__d("MessengerThreadFetchLoggerUtil", ["FBLogger", "MercuryIDs", "QuickPerformanceLogger", "performanceAbsoluteNow"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = 1,
		i = new Map();
	a = function (a) {
		try {
			b("QuickPerformanceLogger").markerStart(25296904, h);
			a = b("MercuryIDs").isValid(a) ? b("MercuryIDs").tokenize(a).value : a;
			i.set(a, h);
			h++
		} catch (a) {
			b("FBLogger")("mercury").catching(a).warn("Logging thread info fetch encountered error")
		}
	};
	f.markerStart = a;
	c = function (a, c) {
		try {
			a = b("MercuryIDs").isValid(a) ? b("MercuryIDs").tokenize(a).value : a;
			var d = i.get(a);
			d != null && (b("QuickPerformanceLogger").markerEnd(25296904, c, d), i["delete"](a))
		} catch (a) {
			b("FBLogger")("mercury").catching(a).warn("Logging thread info fetch encountered error")
		}
	};
	f.markerEnd = c;
	d = function (a, c, d) {
		d === void 0 && (d = (g || (g = b("performanceAbsoluteNow")))());
		a = i.get(a);
		a != null && b("QuickPerformanceLogger").markerPoint(25296904, c, {
			instanceKey: a,
			timestamp: d
		})
	};
	f.markerPoint = d
}), null);
__d("MessengerThreadsWebGraphQLQuery", ["WebGraphQLQueryBase"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = function (a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		b.__getDocID = function () {
			return "3106009512862081"
		};
		b.getQueryID = function () {
			return "655761775309154"
		};
		return b
	}(b("WebGraphQLQueryBase"))
}), null);
__d("bs_caml_external_polyfill", [], (function (a, b, c, d, e, f) {
	"use strict";
	var g = function () {
		if (typeof globalThis !== "undefined") return globalThis;
		if (typeof self !== "undefined") return self;
		if (typeof window !== "undefined") return window;
		if (typeof a !== "undefined") return a;
		if (typeof this !== "undefined") return this;
		throw new Error("Unable to locate global `this`")
	};
	b = function (a) {
		var b = g();
		if (b[a] === void 0) throw new Error(a + " not polyfilled by BuckleScript yet\n");
		return b[a]
	};
	c = function (a, b) {
		var c = g();
		c[a] = b;
		return 0
	};
	f.getGlobalThis = g;
	f.resolve = b;
	f.register = c
}), null);
__d("bs_caml_io", ["bs_curry"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = {
			buffer: "",
			output: function (a, b) {
				a = b.length - 1 | 0;
				if (typeof process !== "undefined" && process.stdout && process.stdout.write) return process.stdout.write(b);
				else if (b[a] === "\n") return 0;
				else return 0
			}
		},
		h = {
			buffer: "",
			output: function (a, b) {
				a = b.length - 1 | 0;
				if (b[a] === "\n") return 0;
				else return 0
			}
		};

	function i(a) {
		if (a.buffer !== "") {
			b("bs_curry")._2(a.output, a, a.buffer);
			a.buffer = "";
			return 0
		} else return 0
	}

	function j(a, b, c, d) {
		b = c === 0 && d === b.length ? b : b.slice(c, d);
		if (typeof process !== "undefined" && process.stdout && process.stdout.write && a === g) return process.stdout.write(b);
		else {
			c = b.lastIndexOf("\n");
			if (c < 0) {
				a.buffer = a.buffer + b;
				return 0
			} else {
				a.buffer = a.buffer + b.slice(0, c + 1 | 0);
				i(a);
				a.buffer = a.buffer + b.slice(c + 1 | 0);
				return 0
			}
		}
	}

	function a(a, b) {
		return j(a, String.fromCharCode(b), 0, 1)
	}

	function c(a) {
		return [g, [h, 0]]
	}
	d = void 0;
	f.stdin = d;
	f.stdout = g;
	f.stderr = h;
	f.caml_ml_flush = i;
	f.caml_ml_output = j;
	f.caml_ml_output_char = a;
	f.caml_ml_out_channels_list = c
}), null);
__d("bs_caml_string", ["bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		if (c >= a.length || c < 0) throw [b("bs_caml_builtin_exceptions").invalid_argument, "index out of bounds"];
		return a.charCodeAt(c)
	}
	f.get = a
}), null);
__d("bs_caml_sys", ["bs_caml_builtin_exceptions"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		if (typeof process === "undefined" || process.env === void 0) throw b("bs_caml_builtin_exceptions").not_found;
		a = process.env[a];
		if (a !== void 0) return a;
		else throw b("bs_caml_builtin_exceptions").not_found
	}
	var g = function (a) {
		if (typeof process !== "undefined" && process.platform === "win32") return "Win32";
		else return "Unix"
	};

	function c(a) {
		if (typeof process === "undefined" || process.uptime === void 0) return -1;
		else return process.uptime()
	}

	function d(a) {
		return [((Date.now() | 0) ^ 4294967295) * Math.random() | 0]
	}

	function e(a) {
		return 127
	}
	var h = function (a) {
		return typeof process === "undefined" || process.cwd === void 0 ? "/" : process.cwd()
	};

	function i(a) {
		if (typeof process === "undefined") return ["", [""]];
		else {
			a = process.argv;
			if (a == null) return ["", [""]];
			else return [a[0], a]
		}
	}

	function j(a) {
		if (typeof process !== "undefined") return process.exit(a);
		else return 0
	}

	function k(a) {
		throw [b("bs_caml_builtin_exceptions").failure, "caml_sys_is_directory not implemented"]
	}

	function l(a) {
		throw [b("bs_caml_builtin_exceptions").failure, "caml_sys_file_exists not implemented"]
	}
	f.caml_sys_getenv = a;
	f.caml_sys_time = c;
	f.os_type = g;
	f.caml_sys_random_seed = d;
	f.caml_sys_system_command = e;
	f.caml_sys_getcwd = h;
	f.caml_sys_get_argv = i;
	f.caml_sys_exit = j;
	f.caml_sys_is_directory = k;
	f.caml_sys_file_exists = l
}), null);
__d("bs_camlinternalFormatBasics", ["bs_block"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		if (typeof a === "number") return 0;
		else switch (a.tag | 0) {
			case 0:
				return b("bs_block").__(0, [g(a[0])]);
			case 1:
				return b("bs_block").__(1, [g(a[0])]);
			case 2:
				return b("bs_block").__(2, [g(a[0])]);
			case 3:
				return b("bs_block").__(3, [g(a[0])]);
			case 4:
				return b("bs_block").__(4, [g(a[0])]);
			case 5:
				return b("bs_block").__(5, [g(a[0])]);
			case 6:
				return b("bs_block").__(6, [g(a[0])]);
			case 7:
				return b("bs_block").__(7, [g(a[0])]);
			case 8:
				return b("bs_block").__(8, [a[0], g(a[1])]);
			case 9:
				var c = a[0];
				return b("bs_block").__(9, [c, c, g(a[2])]);
			case 10:
				return b("bs_block").__(10, [g(a[0])]);
			case 11:
				return b("bs_block").__(11, [g(a[0])]);
			case 12:
				return b("bs_block").__(12, [g(a[0])]);
			case 13:
				return b("bs_block").__(13, [g(a[0])]);
			case 14:
				return b("bs_block").__(14, [g(a[0])])
		}
	}

	function h(a, c) {
		if (typeof a === "number") return c;
		else switch (a.tag | 0) {
			case 0:
				return b("bs_block").__(0, [h(a[0], c)]);
			case 1:
				return b("bs_block").__(1, [h(a[0], c)]);
			case 2:
				return b("bs_block").__(2, [h(a[0], c)]);
			case 3:
				return b("bs_block").__(3, [h(a[0], c)]);
			case 4:
				return b("bs_block").__(4, [h(a[0], c)]);
			case 5:
				return b("bs_block").__(5, [h(a[0], c)]);
			case 6:
				return b("bs_block").__(6, [h(a[0], c)]);
			case 7:
				return b("bs_block").__(7, [h(a[0], c)]);
			case 8:
				return b("bs_block").__(8, [a[0], h(a[1], c)]);
			case 9:
				return b("bs_block").__(9, [a[0], a[1], h(a[2], c)]);
			case 10:
				return b("bs_block").__(10, [h(a[0], c)]);
			case 11:
				return b("bs_block").__(11, [h(a[0], c)]);
			case 12:
				return b("bs_block").__(12, [h(a[0], c)]);
			case 13:
				return b("bs_block").__(13, [h(a[0], c)]);
			case 14:
				return b("bs_block").__(14, [h(a[0], c)])
		}
	}

	function i(a, c) {
		if (typeof a === "number") return c;
		else switch (a.tag | 0) {
			case 0:
				return b("bs_block").__(0, [i(a[0], c)]);
			case 1:
				return b("bs_block").__(1, [i(a[0], c)]);
			case 2:
				return b("bs_block").__(2, [a[0], i(a[1], c)]);
			case 3:
				return b("bs_block").__(3, [a[0], i(a[1], c)]);
			case 4:
				return b("bs_block").__(4, [a[0], a[1], a[2], i(a[3], c)]);
			case 5:
				return b("bs_block").__(5, [a[0], a[1], a[2], i(a[3], c)]);
			case 6:
				return b("bs_block").__(6, [a[0], a[1], a[2], i(a[3], c)]);
			case 7:
				return b("bs_block").__(7, [a[0], a[1], a[2], i(a[3], c)]);
			case 8:
				return b("bs_block").__(8, [a[0], a[1], a[2], i(a[3], c)]);
			case 9:
				return b("bs_block").__(9, [a[0], i(a[1], c)]);
			case 10:
				return b("bs_block").__(10, [i(a[0], c)]);
			case 11:
				return b("bs_block").__(11, [a[0], i(a[1], c)]);
			case 12:
				return b("bs_block").__(12, [a[0], i(a[1], c)]);
			case 13:
				return b("bs_block").__(13, [a[0], a[1], i(a[2], c)]);
			case 14:
				return b("bs_block").__(14, [a[0], a[1], i(a[2], c)]);
			case 15:
				return b("bs_block").__(15, [i(a[0], c)]);
			case 16:
				return b("bs_block").__(16, [i(a[0], c)]);
			case 17:
				return b("bs_block").__(17, [a[0], i(a[1], c)]);
			case 18:
				return b("bs_block").__(18, [a[0], i(a[1], c)]);
			case 19:
				return b("bs_block").__(19, [i(a[0], c)]);
			case 20:
				return b("bs_block").__(20, [a[0], a[1], i(a[2], c)]);
			case 21:
				return b("bs_block").__(21, [a[0], i(a[1], c)]);
			case 22:
				return b("bs_block").__(22, [i(a[0], c)]);
			case 23:
				return b("bs_block").__(23, [a[0], i(a[1], c)]);
			case 24:
				return b("bs_block").__(24, [a[0], a[1], i(a[2], c)])
		}
	}
	f.concat_fmtty = h;
	f.erase_rel = g;
	f.concat_fmt = i
}), null);
__d("bs_pervasives", ["bs_curry", "bs_caml_io", "bs_caml_sys", "bs_caml_bytes", "bs_caml_format", "bs_caml_string", "bs_caml_exceptions", "bs_caml_js_exceptions", "bs_caml_external_polyfill", "bs_caml_builtin_exceptions", "bs_camlinternalFormatBasics"], (function (a, b, c, d, e, f) {
	"use strict";
	var g;

	function a(a) {
		throw [b("bs_caml_builtin_exceptions").failure, a]
	}

	function c(a) {
		throw [b("bs_caml_builtin_exceptions").invalid_argument, a]
	}
	var h = b("bs_caml_exceptions").create("Pervasives.Exit");

	function d(a) {
		if (a >= 0) return a;
		else return -a | 0
	}

	function e(a) {
		return a ^ -1
	}
	var i = -2147483648;

	function j(a) {
		if (isFinite(a))
			if (Math.abs(a) >= 22250738585072014e-324) return 0;
			else if (a !== 0) return 1;
		else return 2;
		else if (isNaN(a)) return 4;
		else return 3
	}

	function k(a) {
		if (a < 0 || a > 255) throw [b("bs_caml_builtin_exceptions").invalid_argument, "char_of_int"];
		return a
	}

	function l(a) {
		if (a) return "true";
		else return "false"
	}

	function m(a) {
		switch (a) {
			case "false":
				return !1;
			case "true":
				return !0;
			default:
				throw [b("bs_caml_builtin_exceptions").invalid_argument, "bool_of_string"]
		}
	}

	function n(a) {
		switch (a) {
			case "false":
				return !1;
			case "true":
				return !0;
			default:
				return
		}
	}

	function o(a) {
		try {
			return b("bs_caml_format").caml_int_of_string(a)
		} catch (c) {
			a = b("bs_caml_js_exceptions").internalToOCamlException(c);
			if (a[0] === b("bs_caml_builtin_exceptions").failure) return;
			else throw a
		}
	}

	function p(a) {
		var c = a.length,
			d = 0;
		while (!0) {
			var e = d;
			if (e >= c) return a + ".";
			else {
				var f = b("bs_caml_string").get(a, e);
				if (f >= 48)
					if (f >= 58) return a;
					else {
						d = e + 1 | 0;
						continue
					}
				else if (f !== 45) return a;
				else {
					d = e + 1 | 0;
					continue
				}
			}
		}
	}

	function q(a) {
		return p(b("bs_caml_format").caml_format_float("%.12g", a))
	}

	function r(a) {
		try {
			return b("bs_caml_format").caml_float_of_string(a)
		} catch (c) {
			a = b("bs_caml_js_exceptions").internalToOCamlException(c);
			if (a[0] === b("bs_caml_builtin_exceptions").failure) return;
			else throw a
		}
	}

	function s(a, b) {
		if (a) return [a[0], s(a[1], b)];
		else return b
	}
	var t = (g = b("bs_caml_io")).stdin,
		u = g.stdout,
		v = g.stderr;

	function w(a, c, d) {
		a = b("bs_caml_external_polyfill").resolve("caml_ml_open_descriptor_out")(b("bs_caml_external_polyfill").resolve("caml_sys_open")(d, a, c));
		b("bs_caml_external_polyfill").resolve("caml_ml_set_channel_name")(a, d);
		return a
	}

	function x(a) {
		return w([1, [3, [4, [7, 0]]]], 438, a)
	}

	function y(a) {
		return w([1, [3, [4, [6, 0]]]], 438, a)
	}

	function z(a) {
		a = b("bs_caml_io").caml_ml_out_channels_list(0);
		while (!0) {
			var c = a;
			if (c) {
				try {
					b("bs_caml_io").caml_ml_flush(c[0])
				} catch (a) {
					var d = b("bs_caml_js_exceptions").internalToOCamlException(a);
					if (d[0] !== b("bs_caml_builtin_exceptions").sys_error) throw d
				}
				a = c[1];
				continue
			} else return 0
		}
	}

	function A(a, c) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_output_bytes")(a, c, 0, c.length)
	}

	function B(a, c) {
		return b("bs_caml_io").caml_ml_output(a, c, 0, c.length)
	}

	function C(a, c, d, e) {
		if (d < 0 || e < 0 || d > (c.length - e | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "output"];
		return b("bs_caml_external_polyfill").resolve("caml_ml_output_bytes")(a, c, d, e)
	}

	function D(a, c, d, e) {
		if (d < 0 || e < 0 || d > (c.length - e | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "output_substring"];
		return b("bs_caml_io").caml_ml_output(a, c, d, e)
	}

	function E(a, c) {
		return b("bs_caml_external_polyfill").resolve("caml_output_value")(a, c, 0)
	}

	function F(a) {
		b("bs_caml_io").caml_ml_flush(a);
		return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
	}

	function G(a) {
		try {
			b("bs_caml_io").caml_ml_flush(a)
		} catch (a) {}
		try {
			return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
		} catch (a) {
			return 0
		}
	}

	function H(a, c, d) {
		a = b("bs_caml_external_polyfill").resolve("caml_ml_open_descriptor_in")(b("bs_caml_external_polyfill").resolve("caml_sys_open")(d, a, c));
		b("bs_caml_external_polyfill").resolve("caml_ml_set_channel_name")(a, d);
		return a
	}

	function I(a) {
		return H([0, [7, 0]], 0, a)
	}

	function J(a) {
		return H([0, [6, 0]], 0, a)
	}

	function K(a, c, d, e) {
		if (d < 0 || e < 0 || d > (c.length - e | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "input"];
		return b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, c, d, e)
	}

	function L(a, c, d, e) {
		while (!0) {
			var f = e,
				g = d;
			if (f <= 0) return 0;
			else {
				var h = b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, c, g, f);
				if (h === 0) throw b("bs_caml_builtin_exceptions").end_of_file;
				e = f - h | 0;
				d = g + h | 0;
				continue
			}
		}
	}

	function M(a, c, d, e) {
		if (d < 0 || e < 0 || d > (c.length - e | 0)) throw [b("bs_caml_builtin_exceptions").invalid_argument, "really_input"];
		return L(a, c, d, e)
	}

	function N(a, c) {
		var d = b("bs_caml_bytes").caml_create_bytes(c);
		M(a, d, 0, c);
		return b("bs_caml_bytes").bytes_to_string(d)
	}

	function O(a) {
		var c = function (a, c, d) {
				while (!0) {
					var e = d,
						f = c;
					if (e) {
						var g = e[0],
							h = g.length;
						b("bs_caml_bytes").caml_blit_bytes(g, 0, a, f - h | 0, h);
						d = e[1];
						c = f - h | 0;
						continue
					} else return a
				}
			},
			d = function (d, e) {
				while (!0) {
					var f = e,
						g = d,
						h = b("bs_caml_external_polyfill").resolve("caml_ml_input_scan_line")(a);
					if (h === 0)
						if (g) return c(b("bs_caml_bytes").caml_create_bytes(f), f, g);
						else throw b("bs_caml_builtin_exceptions").end_of_file;
					else if (h > 0) {
						var i = b("bs_caml_bytes").caml_create_bytes(h - 1 | 0);
						b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, i, 0, h - 1 | 0);
						b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a);
						if (g) {
							var j = (f + h | 0) - 1 | 0;
							return c(b("bs_caml_bytes").caml_create_bytes(j), j, [i, g])
						} else return i
					} else {
						j = b("bs_caml_bytes").caml_create_bytes(-h | 0);
						b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, j, 0, -h | 0);
						e = f - h | 0;
						d = [j, g];
						continue
					}
				}
			};
		return b("bs_caml_bytes").bytes_to_string(d(0, 0))
	}

	function P(a) {
		try {
			return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
		} catch (a) {
			return 0
		}
	}

	function Q(a) {
		return b("bs_caml_io").caml_ml_output_char(u, a)
	}

	function R(a) {
		return B(u, a)
	}

	function S(a) {
		return A(u, a)
	}

	function T(a) {
		return B(u, String(a))
	}

	function U(a) {
		return B(u, p(b("bs_caml_format").caml_format_float("%.12g", a)))
	}

	function V(a) {
		b("bs_caml_io").caml_ml_output_char(u, 10);
		return b("bs_caml_io").caml_ml_flush(u)
	}

	function W(a) {
		return b("bs_caml_io").caml_ml_output_char(v, a)
	}

	function X(a) {
		return B(v, a)
	}

	function aa(a) {
		return A(v, a)
	}

	function ba(a) {
		return B(v, String(a))
	}

	function ca(a) {
		return B(v, p(b("bs_caml_format").caml_format_float("%.12g", a)))
	}

	function da(a) {
		b("bs_caml_io").caml_ml_output_char(v, 10);
		return b("bs_caml_io").caml_ml_flush(v)
	}

	function ea(a) {
		b("bs_caml_io").caml_ml_flush(u);
		return O(t)
	}

	function fa(a) {
		return b("bs_caml_format").caml_int_of_string((b("bs_caml_io").caml_ml_flush(u), O(t)))
	}

	function ga(a) {
		return o((b("bs_caml_io").caml_ml_flush(u), O(t)))
	}

	function ha(a) {
		return b("bs_caml_format").caml_float_of_string((b("bs_caml_io").caml_ml_flush(u), O(t)))
	}

	function ia(a) {
		return r((b("bs_caml_io").caml_ml_flush(u), O(t)))
	}

	function ja(a) {
		return a[1]
	}

	function ka(a, c) {
		return [b("bs_camlinternalFormatBasics").concat_fmt(a[0], c[0]), a[1] + ("%," + c[1])]
	}
	var Y = {
		contents: z
	};

	function la(a) {
		var c = Y.contents;
		Y.contents = function (d) {
			b("bs_curry")._1(a, 0);
			return b("bs_curry")._1(c, 0)
		};
		return 0
	}

	function Z(a) {
		return b("bs_curry")._1(Y.contents, 0)
	}

	function ma(a) {
		Z(0);
		return b("bs_caml_sys").caml_sys_exit(a)
	}
	var na = 2147483647,
		oa = Infinity,
		pa = -Infinity,
		qa = 17976931348623157e292,
		ra = 22250738585072014e-324,
		sa = 2220446049250313e-31,
		ta = g.caml_ml_flush,
		ua = g.caml_ml_output_char;
	g = g.caml_ml_output_char;

	function va(a, c) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_output_int")(a, c)
	}

	function wa(a, c) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_seek_out")(a, c)
	}

	function xa(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_pos_out")(a)
	}

	function ya(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size")(a)
	}

	function za(a, c) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_set_binary_mode")(a, c)
	}

	function Aa(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a)
	}

	function Ba(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a)
	}

	function Ca(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_input_int")(a)
	}

	function Da(a) {
		return b("bs_caml_external_polyfill").resolve("caml_input_value")(a)
	}

	function Ea(a, c) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_seek_in")(a, c)
	}

	function Fa(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_pos_in")(a)
	}

	function Ga(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size")(a)
	}

	function Ha(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
	}

	function Ia(a, c) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_set_binary_mode")(a, c)
	}

	function $(a, c) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_seek_out_64")(a, c)
	}

	function Ja(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_pos_out_64")(a)
	}

	function Ka(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size_64")(a)
	}

	function La(a, c) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_seek_in_64")(a, c)
	}

	function Ma(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_pos_in_64")(a)
	}

	function Na(a) {
		return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size_64")(a)
	}
	$ = {
		seek_out: $,
		pos_out: Ja,
		out_channel_length: Ka,
		seek_in: La,
		pos_in: Ma,
		in_channel_length: Na
	};
	f.invalid_arg = c;
	f.failwith = a;
	f.Exit = h;
	f.abs = d;
	f.max_int = na;
	f.min_int = i;
	f.lnot = e;
	f.infinity = oa;
	f.neg_infinity = pa;
	f.max_float = qa;
	f.min_float = ra;
	f.epsilon_float = sa;
	f.classify_float = j;
	f.char_of_int = k;
	f.string_of_bool = l;
	f.bool_of_string = m;
	f.bool_of_string_opt = n;
	f.int_of_string_opt = o;
	f.string_of_float = q;
	f.float_of_string_opt = r;
	f.$at = s;
	f.stdin = t;
	f.stdout = u;
	f.stderr = v;
	f.print_char = Q;
	f.print_string = R;
	f.print_bytes = S;
	f.print_int = T;
	f.print_float = U;
	f.print_newline = V;
	f.prerr_char = W;
	f.prerr_string = X;
	f.prerr_bytes = aa;
	f.prerr_int = ba;
	f.prerr_float = ca;
	f.prerr_newline = da;
	f.read_line = ea;
	f.read_int = fa;
	f.read_int_opt = ga;
	f.read_float = ha;
	f.read_float_opt = ia;
	f.open_out = x;
	f.open_out_bin = y;
	f.open_out_gen = w;
	f.flush = ta;
	f.flush_all = z;
	f.output_char = ua;
	f.output_string = B;
	f.output_bytes = A;
	f.output = C;
	f.output_substring = D;
	f.output_byte = g;
	f.output_binary_int = va;
	f.output_value = E;
	f.seek_out = wa;
	f.pos_out = xa;
	f.out_channel_length = ya;
	f.close_out = F;
	f.close_out_noerr = G;
	f.set_binary_mode_out = za;
	f.open_in = I;
	f.open_in_bin = J;
	f.open_in_gen = H;
	f.input_char = Aa;
	f.input_line = O;
	f.input = K;
	f.really_input = M;
	f.really_input_string = N;
	f.input_byte = Ba;
	f.input_binary_int = Ca;
	f.input_value = Da;
	f.seek_in = Ea;
	f.pos_in = Fa;
	f.in_channel_length = Ga;
	f.close_in = Ha;
	f.close_in_noerr = P;
	f.set_binary_mode_in = Ia;
	f.LargeFile = $;
	f.string_of_format = ja;
	f.$caret$caret = ka;
	f.exit = ma;
	f.at_exit = la;
	f.valid_float_lexem = p;
	f.unsafe_really_input = L;
	f.do_at_exit = Z
}), null);
__d("MessengerGraphQLThreadFetcher.bs", ["Promise", "gkx", "BanzaiODS", "bs_caml_array", "bs_pervasives", "WebGraphQL", "bs_caml_format", "bs_caml_option", "bs_caml_exceptions", "bs_js_null_undefined", "MercuryServerRequestsConfig", "ChatReliabilityInstrumentation", "MessengerThreadFetchLoggerUtil", "MessengerThreadsWebGraphQLQuery", "MessengerServerPayloadTransformer.bs"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = {
		contents: !0
	};

	function h(a, c, d, e, f) {
		if (a == null)
			if (e) return {
				actions: null,
				thread: void 0,
				end_of_history: {
					type: "user",
					fbid: c
				},
				roger: null,
				delivery_receipts: []
			};
			else return {
				actions: null,
				thread: void 0,
				end_of_history: void 0,
				roger: null,
				delivery_receipts: []
			};
		else {
			e = [];
			var g = b("MessengerServerPayloadTransformer.bs").getThreadFBID(a),
				h = b("MessengerServerPayloadTransformer.bs").getOtherUserID(a);
			g = h == null ? g == null ? b("bs_pervasives").failwith("No thread ID") : g : h;
			g !== c && b("bs_pervasives").failwith("Thread ID mismatch");
			h = b("MessengerServerPayloadTransformer.bs").transformThread(d, a, f);
			g = b("bs_js_null_undefined").fromOption(b("MessengerServerPayloadTransformer.bs").transformMessages(d, a, f));
			f = b("MessengerServerPayloadTransformer.bs").transformReadReceipts(d, a);
			if (f !== void 0) {
				d = {};
				d[c] = b("bs_caml_option").valFromOption(f);
				f = d
			} else f = null;
			d = b("MessengerServerPayloadTransformer.bs").transformDeliveryReceipts(a);
			if (d.length >= 1) {
				d = b("bs_caml_array").caml_array_get(d, 0);
				h.is_canonical ? e.push({
					other_user_fbid: c,
					thread_fbid: null,
					time: b("bs_caml_format").caml_float_of_string(d.timestamp_precise)
				}) : e.push({
					other_user_fbid: null,
					thread_fbid: c,
					time: b("bs_caml_format").caml_float_of_string(d.timestamp_precise)
				})
			}
			d = b("MessengerServerPayloadTransformer.bs").getMessagePageInfo(a);
			if (d !== void 0)
				if (b("bs_caml_option").valFromOption(d).has_previous_page) return {
					actions: g,
					thread: h,
					end_of_history: void 0,
					roger: f,
					delivery_receipts: e
				};
				else return {
					actions: g,
					thread: h,
					end_of_history: {
						type: "thread",
						fbid: c
					},
					roger: f,
					delivery_receipts: e
				};
			else return {
				actions: g,
				thread: h,
				end_of_history: void 0,
				roger: f,
				delivery_receipts: e
			}
		}
	}

	function i(a) {
		b("MessengerThreadFetchLoggerUtil").markerPoint(a.id, "sendThreadInfoFetchRequest");
		return new(b("MessengerThreadsWebGraphQLQuery"))({
			id: a.id,
			message_limit: a.limit,
			load_messages: a.limit > 0,
			load_read_receipts: a.loadReadReceipts,
			load_delivery_receipts: a.loadDeliveryReceipts,
			before: a.timestamp,
			is_work_teamwork_not_putting_muted_in_unreads: b("gkx")("1105011")
		})
	}
	var j = b("bs_caml_exceptions").create("MessengerGraphQLThreadFetcher.SessionLoggedOut");

	function a(a, c, d) {
		if (g.contents) {
			var e = c.map(i);
			return b("Promise").all(b("WebGraphQL").execAll(e, {
				actorID: d ? a : null,
				batchName: "MessengerGraphQLThreadFetcher",
				msgrRegion: b("MercuryServerRequestsConfig").msgrRegion,
				allowCrossPageTransition: !0
			}))["catch"](function (a) {
				var d;
				try {
					d = b("bs_caml_array").caml_array_get(a.errors, 0).should_end_session
				} catch (a) {
					d = !1
				}
				d && (g.contents = !1);
				b("BanzaiODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_thread.failure");
				c.forEach(function (a) {
					b("MessengerThreadFetchLoggerUtil").markerEnd(a.id, "FAIL");
					return 0
				});
				b("ChatReliabilityInstrumentation").logERROR("fetch_thread_fail");
				return b("Promise").reject(a)
			}).then(function (e) {
				b("BanzaiODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_thread.success");
				return e.map(function (e, f) {
					e = e.message_thread;
					f = b("bs_caml_array").caml_array_get(c, f);
					b("MessengerThreadFetchLoggerUtil").markerPoint(f.id, "getThreadInfoFetchResponse");
					return h(e, f.id, a, f.isCanonical, d)
				})
			})
		} else return b("Promise").reject(j)
	}
	f.canMakeRequests = g;
	f._transformPayload = h;
	f._getQuery = i;
	f.SessionLoggedOut = j;
	f.fetchAll = a
}), null);
__d("bs_js_int", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, b) {
		return a === b
	}
	b = 2147483647;
	c = -2147483648;
	f.equal = a;
	f.max = b;
	f.min = c
}), null);
__d("bs_js_math", ["bs_js_int"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		return Math.ceil(a)
	}

	function c(a) {
		if (a > b("bs_js_int").max) return b("bs_js_int").max;
		else if (a < b("bs_js_int").min) return b("bs_js_int").min;
		else return Math.ceil(a)
	}

	function d(a) {
		return Math.floor(a)
	}

	function g(a) {
		if (a > b("bs_js_int").max) return b("bs_js_int").max;
		else if (a < b("bs_js_int").min) return b("bs_js_int").min;
		else return Math.floor(a)
	}

	function e(a, b) {
		return g(Math.random() * (b - a | 0)) + a | 0
	}
	var h = c,
		i = g;
	f.unsafe_ceil = a;
	f.ceil_int = c;
	f.ceil = h;
	f.unsafe_floor = d;
	f.floor_int = g;
	f.floor = i;
	f.random_int = e
}), null);
__d("bs_belt_Array", ["bs_curry", "bs_js_math", "bs_caml_option", "bs_caml_primitive"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		if (c >= 0 && c < a.length) return b("bs_caml_option").some(a[c])
	}

	function c(a, b) {
		if (!(b >= 0 && b < a.length)) throw new Error('File "belt_Array.ml", line 25, characters 6-12');
		return a[b]
	}

	function d(a, b, c) {
		if (b >= 0 && b < a.length) {
			a[b] = c;
			return !0
		} else return !1
	}

	function e(a, b, c) {
		if (!(b >= 0 && b < a.length)) throw new Error('File "belt_Array.ml", line 31, characters 4-10');
		a[b] = c;
		return 0
	}

	function g(a, b, c) {
		var d = a[b];
		a[b] = a[c];
		a[c] = d;
		return 0
	}

	function h(a) {
		var c = a.length;
		for (var d = 0, e = c - 1 | 0; d <= e; ++d) g(a, d, b("bs_js_math").random_int(d, c));
		return 0
	}

	function i(a) {
		a = a.slice(0);
		h(a);
		return a
	}

	function j(a) {
		var b = a.length;
		a = a;
		var c = 0;
		b = b;
		for (var d = 0, e = (b / 2 | 0) - 1 | 0; d <= e; ++d) g(a, c + d | 0, ((c + b | 0) - d | 0) - 1 | 0);
		return 0
	}

	function k(a) {
		var b = a.length,
			c = new Array(b);
		for (var d = 0, e = b - 1 | 0; d <= e; ++d) c[d] = a[(b - 1 | 0) - d | 0];
		return c
	}

	function l(a, b) {
		if (a <= 0) return [];
		else {
			var c = new Array(a);
			for (var d = 0, a = a - 1 | 0; d <= a; ++d) c[d] = b;
			return c
		}
	}

	function m(a, b) {
		if (a <= 0) return [];
		else {
			var c = new Array(a);
			for (var d = 0, a = a - 1 | 0; d <= a; ++d) c[d] = b(d);
			return c
		}
	}

	function n(a, c) {
		return m(a, b("bs_curry").__1(c))
	}

	function o(a, b) {
		a = m(a, b);
		h(a);
		return a
	}

	function p(a, c) {
		return o(a, b("bs_curry").__1(c))
	}

	function q(a, b) {
		b = b - a | 0;
		if (b < 0) return [];
		else {
			var c = new Array(b + 1 | 0);
			for (var d = 0; d <= b; ++d) c[d] = a + d | 0;
			return c
		}
	}

	function r(a, b, c) {
		b = b - a | 0;
		if (b < 0 || c <= 0) return [];
		else {
			b = (b / c | 0) + 1 | 0;
			var d = new Array(b);
			a = a;
			for (var e = 0, b = b - 1 | 0; e <= b; ++e) d[e] = a, a = a + c | 0;
			return d
		}
	}

	function s(a, b) {
		var c = a.length,
			d = b.length;
		c = c < d ? c : d;
		d = new Array(c);
		for (var e = 0, c = c - 1 | 0; e <= c; ++e) d[e] = [a[e], b[e]];
		return d
	}

	function t(a, b, c) {
		var d = a.length,
			e = b.length;
		d = d < e ? d : e;
		e = new Array(d);
		for (var f = 0, d = d - 1 | 0; f <= d; ++f) e[f] = c(a[f], b[f]);
		return e
	}

	function u(a, c, d) {
		return t(a, c, b("bs_curry").__2(d))
	}

	function v(a, b) {
		var c = a.length,
			d = b.length,
			e = new Array(c + d | 0);
		for (var f = 0, g = c - 1 | 0; f <= g; ++f) e[f] = a[f];
		for (var a = 0, f = d - 1 | 0; a <= f; ++a) e[c + a | 0] = b[a];
		return e
	}

	function w(a) {
		var b = a.length,
			c = 0;
		for (var d = 0, e = b - 1 | 0; d <= e; ++d) c = c + a[d].length | 0;
		d = new Array(c);
		c = 0;
		for (var e = 0, b = b - 1 | 0; e <= b; ++e) {
			var f = a[e];
			for (var g = 0, h = f.length - 1 | 0; g <= h; ++g) d[c] = f[g], c = c + 1 | 0
		}
		return d
	}

	function x(a, c, d) {
		if (d <= 0) return [];
		else {
			var e = a.length;
			c = c < 0 ? b("bs_caml_primitive").caml_int_max(e + c | 0, 0) : c;
			e = e - c | 0;
			e = e < d ? e : d;
			if (e <= 0) return [];
			else {
				d = new Array(e);
				for (var f = 0, e = e - 1 | 0; f <= e; ++f) d[f] = a[c + f | 0];
				return d
			}
		}
	}

	function y(a, c) {
		var d = a.length;
		c = c < 0 ? b("bs_caml_primitive").caml_int_max(d + c | 0, 0) : c;
		d = d - c | 0;
		var e = new Array(d);
		for (var f = 0, d = d - 1 | 0; f <= d; ++f) e[f] = a[c + f | 0];
		return e
	}

	function z(a, c, d, e) {
		if (d > 0) {
			var f = a.length;
			c = c < 0 ? b("bs_caml_primitive").caml_int_max(f + c | 0, 0) : c;
			f = f - c | 0;
			f = f < d ? f : d;
			if (f > 0) {
				for (var d = c, c = (c + f | 0) - 1 | 0; d <= c; ++d) a[d] = e;
				return 0
			} else return 0
		} else return 0
	}

	function A(a, b, c, d, e) {
		if (d <= b) {
			for (var f = 0, g = e - 1 | 0; f <= g; ++f) c[f + d | 0] = a[f + b | 0];
			return 0
		} else {
			for (var f = e - 1 | 0; f >= 0; --f) c[f + d | 0] = a[f + b | 0];
			return 0
		}
	}

	function B(a, c, d, e, f) {
		var g = a.length,
			h = d.length;
		c = c < 0 ? b("bs_caml_primitive").caml_int_max(g + c | 0, 0) : c;
		e = e < 0 ? b("bs_caml_primitive").caml_int_max(h + e | 0, 0) : e;
		f = b("bs_caml_primitive").caml_int_min(f, b("bs_caml_primitive").caml_int_min(g - c | 0, h - e | 0));
		if (e <= c) {
			for (var g = 0, h = f - 1 | 0; g <= h; ++g) d[g + e | 0] = a[g + c | 0];
			return 0
		} else {
			for (var g = f - 1 | 0; g >= 0; --g) d[g + e | 0] = a[g + c | 0];
			return 0
		}
	}

	function C(a, b) {
		for (var c = 0, d = a.length - 1 | 0; c <= d; ++c) b(a[c]);
		return 0
	}

	function D(a, c) {
		return C(a, b("bs_curry").__1(c))
	}

	function E(a, b) {
		var c = a.length,
			d = new Array(c);
		for (var e = 0, c = c - 1 | 0; e <= c; ++e) d[e] = b(a[e]);
		return d
	}

	function F(a, c) {
		return E(a, b("bs_curry").__1(c))
	}

	function G(a, c) {
		var d = a.length,
			e = 0,
			f = void 0;
		while (f === void 0 && e < d) {
			var g = a[e];
			c(g) && (f = b("bs_caml_option").some(g));
			e = e + 1 | 0
		}
		return f
	}

	function H(a, c) {
		return G(a, b("bs_curry").__1(c))
	}

	function I(a, b) {
		var c = a.length,
			d = 0,
			e = void 0;
		while (e === void 0 && d < c) {
			var f = a[d];
			b(f) && (e = d);
			d = d + 1 | 0
		}
		return e
	}

	function J(a, c) {
		return I(a, b("bs_curry").__1(c))
	}

	function K(a, b) {
		var c = a.length,
			d = new Array(c),
			e = 0;
		for (var f = 0, c = c - 1 | 0; f <= c; ++f) {
			var g = a[f];
			b(g) && (d[e] = g, e = e + 1 | 0)
		}
		d.length = e;
		return d
	}

	function aa(a, c) {
		return K(a, b("bs_curry").__1(c))
	}

	function L(a, b) {
		var c = a.length,
			d = new Array(c),
			e = 0;
		for (var f = 0, c = c - 1 | 0; f <= c; ++f) {
			var g = a[f];
			b(g, f) && (d[e] = g, e = e + 1 | 0)
		}
		d.length = e;
		return d
	}

	function ba(a, c) {
		return L(a, b("bs_curry").__2(c))
	}

	function M(a, c) {
		var d = a.length,
			e = new Array(d),
			f = 0;
		for (var g = 0, d = d - 1 | 0; g <= d; ++g) {
			var h = a[g];
			h = c(h);
			h !== void 0 && (e[f] = b("bs_caml_option").valFromOption(h), f = f + 1 | 0)
		}
		e.length = f;
		return e
	}

	function ca(a, c) {
		return M(a, b("bs_curry").__1(c))
	}

	function N(a, b) {
		for (var c = 0, d = a.length - 1 | 0; c <= d; ++c) b(c, a[c]);
		return 0
	}

	function da(a, c) {
		return N(a, b("bs_curry").__2(c))
	}

	function O(a, b) {
		var c = a.length,
			d = new Array(c);
		for (var e = 0, c = c - 1 | 0; e <= c; ++e) d[e] = b(e, a[e]);
		return d
	}

	function ea(a, c) {
		return O(a, b("bs_curry").__2(c))
	}

	function P(a, b, c) {
		b = b;
		for (var d = 0, e = a.length - 1 | 0; d <= e; ++d) b = c(b, a[d]);
		return b
	}

	function fa(a, c, d) {
		return P(a, c, b("bs_curry").__2(d))
	}

	function Q(a, b, c) {
		b = b;
		for (var d = a.length - 1 | 0; d >= 0; --d) b = c(b, a[d]);
		return b
	}

	function ga(a, c, d) {
		return Q(a, c, b("bs_curry").__2(d))
	}

	function R(a, c, d, e) {
		d = d;
		var f = b("bs_caml_primitive").caml_int_min(a.length, c.length);
		for (var f = f - 1 | 0; f >= 0; --f) d = e(d, a[f], c[f]);
		return d
	}

	function ha(a, c, d, e) {
		return R(a, c, d, b("bs_curry").__3(e))
	}

	function S(a, b, c) {
		b = b;
		for (var d = 0, e = a.length - 1 | 0; d <= e; ++d) b = c(b, a[d], d);
		return b
	}

	function ia(a, c, d) {
		return S(a, c, b("bs_curry").__3(d))
	}

	function T(a, b) {
		var c = a.length;
		a = a;
		var d = 0;
		b = b;
		c = c;
		while (!0) {
			var e = d;
			if (e === c) return !0;
			else if (b(a[e])) {
				d = e + 1 | 0;
				continue
			} else return !1
		}
	}

	function ja(a, c) {
		return T(a, b("bs_curry").__1(c))
	}

	function U(a, b) {
		var c = a.length;
		a = a;
		var d = 0;
		b = b;
		c = c;
		while (!0) {
			var e = d;
			if (e === c) return !1;
			else if (b(a[e])) return !0;
			else {
				d = e + 1 | 0;
				continue
			}
		}
	}

	function ka(a, c) {
		return U(a, b("bs_curry").__1(c))
	}

	function V(a, b, c, d, e) {
		while (!0) {
			var f = c;
			if (f === e) return !0;
			else if (d(a[f], b[f])) {
				c = f + 1 | 0;
				continue
			} else return !1
		}
	}

	function W(a, c, d) {
		return V(a, c, 0, d, b("bs_caml_primitive").caml_int_min(a.length, c.length))
	}

	function la(a, c, d) {
		return W(a, c, b("bs_curry").__2(d))
	}

	function X(a, c, d) {
		var e = a,
			f = c,
			g = 0;
		d = d;
		a = b("bs_caml_primitive").caml_int_min(a.length, c.length);
		while (!0) {
			c = g;
			if (c === a) return !1;
			else if (d(e[c], f[c])) return !0;
			else {
				g = c + 1 | 0;
				continue
			}
		}
	}

	function ma(a, c, d) {
		return X(a, c, b("bs_curry").__2(d))
	}

	function Y(a, b, c) {
		var d = a.length,
			e = b.length;
		if (d === e) return V(a, b, 0, c, d);
		else return !1
	}

	function na(a, c, d) {
		return Y(a, c, b("bs_curry").__2(d))
	}

	function Z(a, b, c) {
		var d = a.length,
			e = b.length;
		if (d > e) return 1;
		else if (d < e) return -1;
		else {
			e = a;
			a = b;
			b = 0;
			c = c;
			d = d;
			while (!0) {
				var f = b;
				if (f === d) return 0;
				else {
					var g = c(e[f], a[f]);
					if (g === 0) {
						b = f + 1 | 0;
						continue
					} else return g
				}
			}
		}
	}

	function oa(a, c, d) {
		return Z(a, c, b("bs_curry").__2(d))
	}

	function $(a, b) {
		var c = a.length,
			d = 0,
			e = 0,
			f = new Array(c),
			g = new Array(c);
		for (var h = 0, c = c - 1 | 0; h <= c; ++h) {
			var i = a[h];
			b(i) ? (f[d] = i, d = d + 1 | 0) : (g[e] = i, e = e + 1 | 0)
		}
		f.length = d;
		g.length = e;
		return [f, g]
	}

	function pa(a, c) {
		return $(a, b("bs_curry").__1(c))
	}

	function qa(a) {
		var b = a.length,
			c = new Array(b),
			d = new Array(b);
		for (var e = 0, b = b - 1 | 0; e <= b; ++e) {
			var f = a[e];
			c[e] = f[0];
			d[e] = f[1]
		}
		return [c, d]
	}
	f.get = a;
	f.getExn = c;
	f.set = d;
	f.setExn = e;
	f.shuffleInPlace = h;
	f.shuffle = i;
	f.reverseInPlace = j;
	f.reverse = k;
	f.make = l;
	f.range = q;
	f.rangeBy = r;
	f.makeByU = m;
	f.makeBy = n;
	f.makeByAndShuffleU = o;
	f.makeByAndShuffle = p;
	f.zip = s;
	f.zipByU = t;
	f.zipBy = u;
	f.unzip = qa;
	f.concat = v;
	f.concatMany = w;
	f.slice = x;
	f.sliceToEnd = y;
	f.fill = z;
	f.blit = B;
	f.blitUnsafe = A;
	f.forEachU = C;
	f.forEach = D;
	f.mapU = E;
	f.map = F;
	f.getByU = G;
	f.getBy = H;
	f.getIndexByU = I;
	f.getIndexBy = J;
	f.keepU = K;
	f.keep = aa;
	f.keepWithIndexU = L;
	f.keepWithIndex = ba;
	f.keepMapU = M;
	f.keepMap = ca;
	f.forEachWithIndexU = N;
	f.forEachWithIndex = da;
	f.mapWithIndexU = O;
	f.mapWithIndex = ea;
	f.partitionU = $;
	f.partition = pa;
	f.reduceU = P;
	f.reduce = fa;
	f.reduceReverseU = Q;
	f.reduceReverse = ga;
	f.reduceReverse2U = R;
	f.reduceReverse2 = ha;
	f.reduceWithIndexU = S;
	f.reduceWithIndex = ia;
	f.someU = U;
	f.some = ka;
	f.everyU = T;
	f.every = ja;
	f.every2U = W;
	f.every2 = la;
	f.some2U = X;
	f.some2 = ma;
	f.cmpU = Z;
	f.cmp = oa;
	f.eqU = Y;
	f.eq = na
}), null);
__d("MessengerThreadFetcher.bs", ["Promise", "bs_curry", "gkx", "FBIDCheck", "bs_belt_Array", "bs_caml_int32", "LogHistory", "MercuryIDs", "bs_caml_option", "MercuryDispatcher", "MercuryThreadIDMap", "MercuryPayloadSource", "bs_caml_builtin_exceptions", "setTimeoutAcrossTransitions", "MessengerGraphQLThreadFetcher.bs"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = new Map();

	function h(a, c) {
		var d = c.other_user_fbid;
		if (d == null) {
			c = c.thread_fbid;
			if (c == null) throw [b("bs_caml_builtin_exceptions").invalid_argument, "Encountered thread with no server identifier"];
			else c = [c, b("MercuryIDs").getThreadIDFromThreadFBID(c)]
		} else c = [d, b("MercuryIDs").getThreadIDFromUserID(d)];
		d = c[1];
		c = c[0];
		a = b("MercuryThreadIDMap").getForFBID(a);
		var e = {},
			f = a.getClientIDFromServerIDNow(c);
		if (f == null) {
			b("gkx")("1199097") && b("LogHistory").getInstance("MessengerThreadFetcher").debug("setServerIDToClientID", d);
			a.setServerIDToClientID(c, d);
			e[c] = d;
			return [d, e]
		} else return [f, e]
	}

	function i(a, c, d) {
		var e = !b("FBIDCheck").isUser_deprecated(a);
		return b("MessengerGraphQLThreadFetcher.bs").fetchAll(a, [{
			id: c,
			limit: 0,
			loadReadReceipts: !1,
			loadDeliveryReceipts: !1,
			timestamp: null,
			isCanonical: d
		}], e).then(function (c) {
			c = b("bs_belt_Array").get(c, 0);
			if (c !== void 0) {
				c = b("bs_caml_option").valFromOption(c).thread;
				if (c == null) return b("Promise").resolve(!1);
				else {
					var d = h(a, c);
					b("MercuryDispatcher").getForFBID(a).handleUpdate({
						threads: [Object.assign(c, {
							thread_id: d[0]
						})],
						pinned_thread_ids: [],
						newlyAddedClientIDs: d[1],
						actions: [],
						preprocessed: !0,
						payload_source: b("MercuryPayloadSource").SERVER_FETCH_THREAD_INFO
					});
					return b("Promise").resolve(!0)
				}
			} else return b("Promise").resolve(!1)
		})
	}

	function j(a, c, d) {
		return i(a, c, d).then(function (d) {
			var e = g.get(a);
			if (e == null) return b("Promise").resolve(!1);
			else {
				var f = e.get(c);
				if (f == null) return b("Promise").resolve(!1);
				else {
					b("bs_belt_Array").forEach(f[1], function (a) {
						return b("bs_curry")._1(a, d)
					});
					e["delete"](c);
					return b("Promise").resolve(d)
				}
			}
		})["catch"](function (e) {
			var f = g.get(a);
			if (f == null) return b("Promise").resolve(!1);
			else {
				e = f.get(c);
				if (e == null) return b("Promise").resolve(!1);
				else {
					var h = e[1];
					e = e[0];
					if (e < 5 || b("gkx")("678666")) {
						var k = b("bs_caml_int32").imul(Math.pow(2, Math.min(e, 5)) | 0, 1e3),
							l = new(b("Promise"))(function (e, g) {
								b("setTimeoutAcrossTransitions")(function (g) {
									i(a, c, d).then(function (a) {
										e(a);
										b("bs_belt_Array").forEach(h, function (c) {
											return b("bs_curry")._1(c, a)
										});
										f["delete"](c);
										return b("Promise").resolve(a)
									})["catch"](function (b) {
										return j(a, c, d)
									});
									return 0
								}, k);
								return 0
							});
						f.set(c, [e + 1 | 0, h]);
						return l
					} else {
						f["delete"](c);
						return b("Promise").resolve(!1)
					}
				}
			}
		})
	}

	function a(a, b, c, d) {
		var e = g.get(a);
		if (e == null) {
			var f = new Map();
			f.set(b, [0, [d]]);
			g.set(a, f);
			j(a, b, c);
			return 0
		} else {
			f = e.get(b);
			if (f == null) {
				e.set(b, [0, [d]]);
				j(a, b, c);
				return 0
			} else {
				f[1].push(d);
				return 0
			}
		}
	}
	f.$$fetch = a
}), null);
__d("ClientSyncProtocol_GroupsSyncAction", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		OPT_IN: 0,
		OPT_OUT: 1,
		UPDATE_EMOJI: 2
	});
	e.exports = a
}), null);
__d("MSuggestionDispatcher", ["ExplicitRegistrationDispatcher"], (function (a, b, c, d, e, f) {
	"use strict";
	a = new(b("ExplicitRegistrationDispatcher"))({
		strict: !1
	});
	e.exports = a
}), null);
__d("MSuggestionActions", ["MSuggestionDispatcher", "keyMirror"], (function (a, b, c, d, e, f) {
	"use strict";
	f.saveAllSuggestions = a;
	f.removeAllSuggestions = c;
	f.removeSuggestionsByType = d;
	var g = b("keyMirror")({
		SAVE_ALL_SUGGESTIONS: null,
		REMOVE_ALL_SUGGESTIONS: null,
		REMOVE_SUGGESTIONS_BY_TYPE: null
	});
	f.Types = g;

	function a(a, c) {
		b("MSuggestionDispatcher").dispatch({
			type: g.SAVE_ALL_SUGGESTIONS,
			threadID: a,
			suggestions: c
		})
	}

	function c(a) {
		a && b("MSuggestionDispatcher").dispatch({
			type: g.REMOVE_ALL_SUGGESTIONS,
			threadID: a
		})
	}

	function d(a, c) {
		b("MSuggestionDispatcher").dispatch({
			type: g.REMOVE_SUGGESTIONS_BY_TYPE,
			threadID: a,
			typeID: c
		})
	}
}), null);
__d("MercuryGlobalActionType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		MARK_ALL_READ: "mga-type:mark-all-read",
		MARK_ALL_SEEN: "mga-type:mark-all-seen"
	});
	e.exports = a
}), null);
__d("MercuryMessageCustomizations", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.parseCustomizations = a;

	function a(a) {
		var b = JSON.parse(a),
			c = [];
		Object.keys(b).forEach(function (a) {
			c.push({
				customization_type: a,
				customization_value: b[a]
			})
		});
		return c
	}
}), null);
__d("MercuryProfileRanges", [], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		return !a.id && a.i ? {
			id: a.i,
			offset: a.o,
			length: a.l,
			type: a.t
		} : a
	}
	e.exports = {
		extractFromDelta: function (a) {
			a = (a = a) != null ? (a = a.data) != null ? a.prng : a : a;
			if (!a) return [];
			var b = [];
			try {
				b = JSON.parse(a);
				if (b.length > 0) return b.map(g)
			} catch (a) {}
			return b
		}
	}
}), null);
__d("MercurySyncDeltaTypes", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = {
		AdminAddedToGroupThread: "AdminAddedToGroupThread",
		AdminRemovedFromGroupThread: "AdminRemovedFromGroupThread",
		AdminTextMessage: "AdminTextMessage",
		ChangeViewerStatus: "ChangeViewerStatus",
		DeliveryReceipt: "DeliveryReceipt",
		ForcedFetch: "ForcedFetch",
		MarkRead: "MarkRead",
		MarkUnread: "MarkUnread",
		MarkFolderSeen: "MarkFolderSeen",
		MessageDelete: "MessageDelete",
		NewMessage: "NewMessage",
		NoOp: "NoOp",
		PagesManagerEvent: "PagesManagerEvent",
		ParticipantLeftGroupThread: "ParticipantLeftGroupThread",
		ParticipantsAddedToGroupThread: "ParticipantsAddedToGroupThread",
		ReadReceipt: "ReadReceipt",
		ReplaceMessage: "ReplaceMessage",
		ThreadAction: "ThreadAction",
		ThreadDelete: "ThreadDelete",
		ThreadFolder: "ThreadFolder",
		ThreadMuteSettings: "ThreadMuteSettings",
		ThreadName: "ThreadName",
		JoinableMode: "JoinableMode",
		ApprovalMode: "ApprovalMode",
		ApprovalQueue: "ApprovalQueue",
		ClientPayload: "ClientPayload",
		GenieMessage: "GenieMessage",
		MontageMessage: "MontageMessage",
		RtcCallData: "RtcCallData"
	};
	b = a;
	e.exports = b
}), null);
__d("MessageThreadReadState", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = {
		MARK_READ: 1,
		MARK_UNREAD: 2,
		KEEP_AS_IS: 3
	};
	b = a;
	e.exports = b
}), null);
__d("MessageThreadReadStateEffect", ["MessageThreadReadState"], (function (a, b, c, d, e, f) {
	"use strict";
	f.extractThreadStateEffectFromDelta = a;

	function a(a, c) {
		var d = c.messageMetadata.threadReadStateEffect;
		if (d != null) {
			var e = b("MessageThreadReadState")[d];
			return e === void 0 && typeof d === "number" ? d : e
		}
		d = c.messageMetadata.skipBumpThread;
		return d === !0 ? b("MessageThreadReadState").KEEP_AS_IS : a !== c.messageMetadata.actorFbId ? b("MessageThreadReadState").MARK_UNREAD : b("MessageThreadReadState").KEEP_AS_IS
	}
}), null);
__d("MessagingThreadAction", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		ACTION_INVALID: "ACTION_INVALID",
		ACTION_ARCHIVED: "ACTION_ARCHIVED",
		ACTION_UNARCHIVED: "ACTION_UNARCHIVED"
	});
	e.exports = a
}), null);
__d("MessengerApprovalModeTypes", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		OPEN: 0,
		APPROVALS: 1
	});
	e.exports = a
}), null);
__d("MessengerApprovalQueueTypes", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		REQUESTED: "REQUESTED",
		REMOVED: "REMOVED"
	});
	e.exports = a
}), null);
__d("MessengerGroupRequestSource", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		ADD: 0,
		JOIN_THROUGH_LINK: 1
	});
	e.exports = a
}), null);
__d("MessengerMessageWebGraphQLQuery", ["WebGraphQLQueryBase"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = function (a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		b.__getDocID = function () {
			return "2905186442914677"
		};
		b.getQueryID = function () {
			return "341205296991235"
		};
		return b
	}(b("WebGraphQLQueryBase"))
}), null);
__d("MessengerThreadMetadataWebGraphQLQuery", ["WebGraphQLQueryBase"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = function (a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		b.__getDocID = function () {
			return "1844738185554526"
		};
		b.getQueryID = function () {
			return "506565903040384"
		};
		return b
	}(b("WebGraphQLQueryBase"))
}), null);
__d("MessengerMessageDFFFetcher.bs", ["Promise", "bs_caml_array", "WebGraphQL", "bs_caml_builtin_exceptions", "MessengerMessageTransformer.bs", "MessengerMessageWebGraphQLQuery", "MessengerThreadMetadataWebGraphQLQuery"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c, d) {
		return b("Promise").all(b("WebGraphQL").execAll([new(b("MessengerThreadMetadataWebGraphQLQuery"))({
			id: c.thread_id
		}), new(b("MessengerMessageWebGraphQLQuery"))({
			thread_and_message_id: {
				thread_id: c.thread_id,
				message_id: c.message_id
			}
		})], {
			actorID: a,
			batchName: "MessengerMessageDFFFetcher"
		})).then(function (c) {
			var e = b("bs_caml_array").caml_array_get(c, 0);
			c = b("bs_caml_array").caml_array_get(c, 1);
			e = e.message_thread;
			c = c.message;
			if (e == null) throw b("bs_caml_builtin_exceptions").not_found;
			else if (c == null) throw b("bs_caml_builtin_exceptions").not_found;
			else return b("Promise").resolve(b("MessengerMessageTransformer.bs").transformMessage(a, c, {
				thread_id: null,
				thread_fbid: e.thread_key.thread_fbid,
				other_user_fbid: e.thread_key.other_user_id,
				folder: e.folder.toLowerCase()
			}, d))
		})
	}
	f.fetch_ = a
}), null);
__d("MessengerParticipantsWebGraphQLQuery", ["WebGraphQLQueryBase"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = function (a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		b.__getDocID = function () {
			return "3322299604515601"
		};
		b.getQueryID = function () {
			return "685701365370722"
		};
		return b
	}(b("WebGraphQLQueryBase"))
}), null);
__d("MessengerParticipantsFetcher.bs", ["Promise", "BanzaiODS", "WebGraphQL", "MessengerServerPayloadTransformer.bs", "MessengerParticipantsWebGraphQLQuery"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var c = new(b("MessengerParticipantsWebGraphQLQuery"))(a);
		return b("WebGraphQL").exec(c, {
			actorID: null,
			batchName: "MessengerParticipantsFetcher"
		})["catch"](function (a) {
			b("BanzaiODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_participants.failure");
			return b("Promise").reject(a)
		}).then(function (c) {
			b("BanzaiODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_participants.success");
			var d = [],
				e = new Set();
			c.messaging_actors.forEach(function (a) {
				if (a == null) return 0;
				else {
					a = b("MessengerServerPayloadTransformer.bs").transformParticipant(a);
					e.add(a.fbid);
					d.push(a);
					return 0
				}
			});
			c = a.ids.filter(function (a) {
				return !e.has(a)
			});
			c.length > 0 && c.forEach(function (a) {
				d.push(b("MessengerServerPayloadTransformer.bs").getBlockedParticipant(a));
				return 0
			});
			return d
		})
	}
	f.$$fetch = a
}), null);
__d("MessengerRealtimeAttachmentTransformer.bs", ["MessengerMessageTransformer.bs", "MessengerAttachmentTransformer.bs"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c, d) {
		var e = b("MessengerMessageTransformer.bs").unsafeCastBlobAttachments(c),
			f = c.extensible_attachment,
			g;
		if (f == null) g = null;
		else {
			var h = f.story_attachment,
				i = f.genie_attachment,
				j;
			if (i == null) j = null;
			else {
				i = i.genie_message;
				var k;
				if (i == null) k = null;
				else {
					i = i.story_attachment;
					k = {
						story_attachment: i == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(i)
					}
				}
				j = {
					genie_message: k
				}
			}
			g = {
				legacy_attachment_id: f.legacy_attachment_id,
				story_attachment: h == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(h),
				genie_attachment: j
			}
		}
		return b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
			extensible_attachment: g,
			blob_attachments: e,
			sticker: c.sticker
		}, null, d)
	}
	f.transform = a
}), null);
__d("MessengerWebDeltaEvents", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		DELTA_RECEIVED: "DELTA_RECEIVED",
		DELTA_IGNORED: "DELTA_IGNORED"
	});
	e.exports = a
}), null);
__d("PagesMessagingEventType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		FLAG: 1,
		CREATE_ADMIN_NOTE: 2,
		PRIORITY_UPDATE: 3
	});
	e.exports = a
}), null);
__d("RepliedToMessageStatusForGraphQL", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		VALID: "VALID",
		DELETED: "DELETED",
		TEMPORARILY_UNAVAILABLE: "TEMPORARILY_UNAVAILABLE"
	});
	e.exports = a
}), null);
__d("MessengerDeltaTransformer.bs", ["Promise", "FBID.bs", "bs_block", "bs_curry", "gkx", "bs_js_dict", "bs_js_json", "bs_caml_obj", "FBIDCheck", "bs_belt_Array", "Bootloader", "bs_caml_array", "DateConsts", "LogHistory", "MercuryIDs", "bs_belt_Option", "bs_caml_option", "MessengerState.bs", "MontageActions", "bs_js_null_undefined", "MercuryActionType", "MercuryDispatcher", "MSuggestionActions", "MercuryThreadIDMap", "PageCommItemStatus", "MercuryPayloadSource", "MercuryProfileRanges", "MercuryLogMessageType", "MercuryServerRequests", "MercurySyncDeltaTypes", "MessagingThreadAction", "MessageThreadReadState", "MessengerThreadFetcher.bs", "bs_caml_builtin_exceptions", "MercuryGlobalActionType", "MessengerWebDeltaEvents", "PagesMessagingEventType", "MessengerGroupsSyncStatus", "MessengerGroupsSyncStatus.bs", "MessageUnsendabilityStatus.bs", "MessengerApprovalModeTypes", "MessengerMessageDFFFetcher.bs", "IrisProtocolMessageLifetime", "MessengerApprovalQueueTypes", "MessengerGroupRequestSource", "MercuryMessageCustomizations", "MessageThreadReadStateEffect", "MessengerParticipantsFetcher.bs", "ChatReliabilityInstrumentation", "RepliedToMessageStatusForGraphQL", "ClientSyncProtocol_GroupsSyncAction", "MessengerRealtimeAttachmentTransformer.bs", "MessageLiveLocationClientSyncProtocolStopReason"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		try {
			return JSON.parse(a)
		} catch (a) {
			return {}
		}
	}
	var h = b("gkx")("780647") ? 0 : 1;

	function i(a, c) {
		var d = b("bs_belt_Option").map(b("bs_caml_option").nullable_to_opt(c.otherUserFbId), function (a) {
			return a.toString()
		});
		c = b("bs_belt_Option").map(b("bs_caml_option").nullable_to_opt(c.threadFbId), function (a) {
			return a.toString()
		});
		a = b("MercuryThreadIDMap").getForFBID(a);
		if (d !== void 0) {
			d = d;
			d = [b("bs_caml_option").some(b("MercuryIDs").getThreadIDFromUserID(b("FBID.bs").ofStringExn(d))), d]
		} else if (c !== void 0) {
			c = c;
			d = [b("bs_caml_option").some(b("MercuryIDs").getThreadIDFromThreadFBID(b("FBID.bs").ofStringExn(c))), c]
		} else d = [void 0, void 0];
		c = d[1];
		d = d[0];
		if (c !== void 0 && d !== void 0) {
			c = c;
			if (a.hasClientIDForServerID(c)) return b("bs_caml_option").nullable_to_opt(a.getClientIDFromServerIDNow(c));
			else return b("bs_caml_option").valFromOption(d)
		}
	}

	function j(a, b, c, d) {
		if (a == null)
			if (b == null) return [void 0, void 0];
			else {
				d = c.toString() !== d ? c : b;
				return [d.toString(), {
					otherUserFbId: d,
					threadFbId: null
				}]
			}
		else return [a.toString(), {
			otherUserFbId: null,
			threadFbId: a
		}]
	}

	function k(a, c) {
		var d = parseInt(c.messageMetadata.timestamp, 10),
			e = b("MessageThreadReadStateEffect").extractThreadStateEffectFromDelta(a, c),
			f = {
				contents: c.messageMetadata.actorFbId.toString()
			},
			h = !b("FBIDCheck").isUser_deprecated(a),
			j = c.attachments;
		j = j == null ? [] : b("bs_belt_Array").keepMapU(j, function (e) {
			var c = e.mercury;
			if (c == null) {
				e = e.mercuryJSON;
				e = e == null ? null : g(e)
			} else e = c;
			if (e == null) return;
			else {
				c = e.extensible_attachment;
				var d = e.blob_attachment;
				e = e.sticker_attachment;
				e = c == null ? d == null ? e == null ? [] : b("MessengerRealtimeAttachmentTransformer.bs").transform(a, {
					extensible_attachment: null,
					blob_attachments: null,
					sticker: e
				}, h) : b("MessengerRealtimeAttachmentTransformer.bs").transform(a, {
					extensible_attachment: null,
					blob_attachments: [d],
					sticker: null
				}, h) : b("MessengerRealtimeAttachmentTransformer.bs").transform(a, {
					extensible_attachment: b("bs_js_null_undefined").fromOption(c == null ? void 0 : b("bs_caml_option").some(c)),
					blob_attachments: null,
					sticker: null
				}, h);
				d = b("bs_belt_Array").get(e, 0);
				if (d !== void 0) {
					c = b("bs_caml_option").valFromOption(d).share;
					if (c == null) e = f.contents;
					else {
						c = c.target;
						if (c == null) e = f.contents;
						else {
							c = c.genie_id;
							e = c == null ? f.contents : c
						}
					}
				} else e = f.contents;
				f.contents = e;
				return d
			}
		});
		var k = c.messageMetadata.tags;
		k = k == null ? void 0 : b("bs_js_null_undefined").fromOption(b("bs_belt_Array").get(k, 0));
		var l = c.data,
			m;
		if (l == null) m = null;
		else {
			var n = b("bs_js_dict").get(l, "adminSignatureCreatorID");
			m = n !== void 0 ? {
				creatorID: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(l, "adminSignatureCreatorID")),
				creatorName: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(l, "adminSignatureCreatorName")),
				creatorType: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(l, "adminSignatureCreatorType")),
				labelType: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(l, "adminSignatureLabelType")),
				pageID: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(l, "adminSignaturePageID")),
				profileURI: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(l, "adminSignatureProfileURI"))
			} : null
		}
		n = f.contents;
		l = b("bs_caml_obj").caml_equal(e, b("MessageThreadReadState").MARK_UNREAD) && a !== n;
		var o = i(a, c.messageMetadata.threadKey);
		if (o !== void 0) {
			var p = c.ttl,
				q = c.messageMetadata.threadKey.threadFbId,
				r = c.messageMetadata.threadKey.otherUserFbId,
				s = c.body,
				t = c.data;
			if (t == null) {
				var u = c.untypedData;
				u = u == null ? !1 : b("bs_belt_Option").getWithDefault(b("bs_js_dict").get(u, "is_sponsored"), "false") === "true"
			} else u = b("bs_belt_Option").getWithDefault(b("bs_js_dict").get(t, "is_sponsored"), "false") === "true";
			t = c.data;
			var v = c.data,
				w;
			if (v == null) w = null;
			else {
				v = b("bs_js_dict").get(v, "customization");
				w = v !== void 0 ? b("MercuryMessageCustomizations").parseCustomizations(v) : null
			}
			v = c.data;
			var x = c.data,
				y = c.data,
				z;
			if (y == null) z = null;
			else {
				y = b("bs_js_dict").get(y, "mib_direct_message_data");
				z = y !== void 0 ? g(y) : null
			}
			y = c.data;
			var A;
			if (y == null) A = null;
			else {
				y = b("bs_js_dict").get(y, "message_source_data");
				if (y !== void 0) {
					y = g(y);
					y = b("bs_js_json").classify(y);
					if (typeof y === "number" || y.tag !== 2) A = null;
					else {
						y = b("bs_js_dict").get(y[0], "message_source");
						A = y !== void 0 ? b("bs_js_null_undefined").fromOption(y) : null
					}
				} else A = null
			}
			y = c.messageMetadata.skipBumpThread;
			var B = c.data,
				C;
			if (B == null) C = null;
			else {
				B = b("bs_js_dict").get(B, "montage_reply_data");
				C = B !== void 0 ? g(B) : null
			}
			B = c.data;
			var D;
			if (B == null) D = null;
			else {
				B = b("bs_js_dict").get(B, "meta_ranges");
				D = B !== void 0 ? g(B) : null
			}
			return {
				message_id: c.messageMetadata.messageId,
				threading_id: null,
				offline_threading_id: c.messageMetadata.offlineThreadingId,
				author: b("MercuryIDs").getParticipantIDFromUserID(b("FBID.bs").ofStringExn(n)),
				author_email: n + "@facebook.com",
				ephemeral_ttl_mode: p == null ? 0 : b("bs_belt_Option").getWithDefault(b("bs_js_dict").get(b("IrisProtocolMessageLifetime"), p), 0),
				timestamp: d,
				is_unread: l,
				is_filtered_content: !1,
				is_filtered_content_bh: !1,
				is_filtered_content_account: !1,
				is_filtered_content_quasar: !1,
				is_filtered_content_invalid_app: !1,
				is_one_way_sent: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(c.messageMetadata.tags), []).some(function (a) {
					return a === "one_way_message"
				}),
				is_forwarded: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(c.messageMetadata.tags), []).some(function (a) {
					if (a === "action:copy_message" || a === "copy_self_message" || a === "action:copy_attachment") return !0;
					else return a === "copy_self_attachment"
				}),
				source: k,
				tags: c.messageMetadata.tags,
				is_spoof_warning: !1,
				folder: null,
				thread_fbid: q == null ? null : q.toString(),
				other_user_fbid: r == null ? null : r.toString(),
				body: s == null ? "" : s,
				html_body: null,
				subject: null,
				has_attachment: j.length !== 0,
				attachments: j,
				ranges: void 0,
				thread_id: o,
				action_type: b("MercuryActionType").USER_GENERATED_MESSAGE,
				is_from_iris: !0,
				is_sponsored: u,
				commerce_message_type: t == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(t, "commerce_message_type")),
				customizations: w,
				platform_xmd: v == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(v, "platform_xmd")),
				profile_ranges: b("MercuryProfileRanges").extractFromDelta(c),
				verse_group_role_xmd: x == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(x, "verse_group_role_id")),
				mib_direct_message_data: z,
				message_source: A,
				skip_bump_thread: y == null ? !1 : y,
				thread_read_state_effect: e,
				montage_reply_data: C,
				meta_ranges: D,
				creator_info: m,
				message_unsendability_status: b("MessageUnsendabilityStatus.bs").fromNullableString(c.messageMetadata.unsendType),
				comm_status: h ? b("PageCommItemStatus").TODO : null
			}
		} else throw [b("bs_caml_builtin_exceptions").invalid_argument, "invalid thread id"]
	}

	function l(a, c) {
		b("LogHistory").getInstance("MessengerDeltaTransformer").debug(a, c);
		return 0
	}

	function m(a, c, d, e) {
		b("Bootloader").loadModules(["MessengerWebDeltasTypedLogger.bs"], function (f) {
			f = b("bs_curry")._1(f.messengerWebDeltasTypedLogger, 0);
			f = f.setDeltaEvent(a).setDeltaType(c).setIgnoreReason(d).setSyncSeqID(e);
			f.log();
			return 0
		}, "MessengerDeltaTransformer.bs");
		return 0
	}

	function n(a) {
		return m(b("MessengerWebDeltaEvents").DELTA_RECEIVED, a, null, null)
	}

	function o(a, c) {
		m(b("MessengerWebDeltaEvents").DELTA_IGNORED, a, c, null);
		return l("DeltaIgnored", a)
	}

	function p(a, c, d, e, f) {
		return b("MessengerThreadFetcher.bs").$$fetch(a, c, d, function (c) {
			if (c) {
				b("MercuryDispatcher").getForFBID(a).handleUpdate({
					actions: [e],
					pinned_thread_ids: [],
					newlyAddedClientIDs: {},
					preprocessed: !0,
					payload_source: b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE
				});
				return n(f)
			} else return o(f, "thread fetch failed")
		})
	}

	function q(a, c, d, e) {
		var f = c.other_user_fbid;
		if (f == null) {
			var g = c.thread_fbid;
			if (g == null) throw [b("bs_caml_builtin_exceptions").invalid_argument, "invalid thread id"];
			else g = [g, !1]
		} else g = [f, !0];
		f = g[1];
		g = g[0];
		var h = b("MercuryThreadIDMap").getForFBID(a);
		h = h.getClientIDFromServerIDNow(g);
		var i = h == null ? null : b("MessengerState.bs").getThreadMetaNow(a, h),
			j = b("gkx")("1143875");
		if (h == null)
			if (e) return p(a, g, f, c, d);
			else return o(d, "thread not already loaded, not required to be loaded");
		else if (i == null)
			if (e) {
				if (j) {
					p(a, g, f, c, d);
					l("ThreadMetaMissing", g);
					b("ChatReliabilityInstrumentation").logTHREAD_INFO_MISSING(b("LogHistory").formatEntries(b("LogHistory").getEntries()));
					return 0
				} else if (j) return o(d, "thread not already loaded, not required to be loaded")
			} else if (j) return o(d, "thread not already loaded, not required to be loaded");
		b("MercuryDispatcher").getForFBID(a).handleUpdate({
			actions: [c],
			pinned_thread_ids: [],
			newlyAddedClientIDs: {},
			preprocessed: !0,
			payload_source: b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE
		});
		return n(d)
	}

	function r(a, c) {
		var d = c.threadKey.threadFbId,
			e = d == null ? void 0 : b("bs_caml_option").some(d);
		if (d == null) {
			d = c.threadKey.otherUserFbId;
			var f = d == null ? void 0 : b("bs_caml_option").some(d);
			d = d == null ? [void 0, void 0] : [f, {
				otherUserFbId: b("bs_js_null_undefined").fromOption(f),
				threadFbId: null
			}]
		} else d = [e, {
			otherUserFbId: null,
			threadFbId: b("bs_js_null_undefined").fromOption(e)
		}];
		f = d[1];
		e = d[0];
		if (e !== void 0 && f !== void 0) {
			d = i(a, b("bs_caml_option").valFromOption(f));
			if (d !== void 0) return {
				thread_id: d,
				action_type: b("MercuryActionType").REACTION_UPDATE,
				messageId: c.messageId,
				offlineThreadingId: c.offlineThreadingId,
				reaction: c.reaction,
				senderId: c.senderId.toString(),
				thread_fbid: e.toString(),
				other_user_fbid: null,
				userId: c.userId.toString()
			};
			else return
		}
	}

	function s(a) {
		return a / Math.pow(10, 8)
	}

	function t(a, c) {
		var d = c.threadKey.threadFbId,
			e = d == null ? void 0 : b("bs_caml_option").some(d),
			f = c.threadKey.otherUserFbId,
			g = f == null ? void 0 : b("bs_caml_option").some(f);
		d = d == null ? f == null ? [void 0, void 0] : [g, {
			otherUserFbId: null,
			threadFbId: b("bs_js_null_undefined").fromOption(g)
		}] : [e, {
			otherUserFbId: b("bs_js_null_undefined").fromOption(e),
			threadFbId: null
		}];
		f = d[1];
		g = d[0];
		if (g !== void 0 && f !== void 0) {
			e = i(a, b("bs_caml_option").valFromOption(f));
			if (e !== void 0 && c.messageLiveLocations.length === 1) {
				d = b("bs_caml_array").caml_array_get(c.messageLiveLocations, 0);
				a = d.expirationTime;
				f = d.stopReason;
				c = f == null ? Date.now() / b("DateConsts").MS_PER_SEC > a : !0;
				f = d.coordinate;
				f = f == null ? null : {
					latitude: s(f.latitude),
					longitude: s(f.longitude)
				};
				var h = d.destination;
				h = h == null ? null : {
					latitude: s(h.latitude),
					longitude: s(h.longitude),
					label: h.label
				};
				var j = d.stopReason;
				j = j == null ? null : j === b("MessageLiveLocationClientSyncProtocolStopReason").EXPIRED || j === b("MessageLiveLocationClientSyncProtocolStopReason").CANCELED ? "EXPIRED" : j === b("MessageLiveLocationClientSyncProtocolStopReason").ARRIVED ? "ARRIVED" : null;
				return {
					thread_id: e,
					action_type: b("MercuryActionType").LIVE_LOCATION_UPDATE,
					thread_fbid: g.toString(),
					other_user_fbid: null,
					messageId: d.messageId,
					liveLocation: {
						live_location_id: d.id.toString(),
						is_expired: c,
						expiration_time: a,
						sender: {
							id: d.senderId.toString()
						},
						coordinate: f,
						location_title: d.locationTitle,
						sender_destination: h,
						stop_reason: j
					}
				}
			} else return
		}
	}

	function u(a, c) {
		var d = c.threadKey.threadFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: null,
				threadFbId: d
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").EVENT_RSVP_CHANGED,
				actor_fbid: c.actorFbId.toString(),
				rsvp_status: c.rsvpStatus,
				thread_fbid: d.toString(),
				other_user_fbid: null,
				thread_id: a
			};
			else return
		}
	}

	function v(a, c) {
		var d = c.threadKey.otherUserFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: d,
				threadFbId: null
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").UPDATE_COMM_STATUS,
				comm_status: c.isFollowUp ? b("PageCommItemStatus").FOLLOW_UP : b("PageCommItemStatus").TODO,
				thread_fbid: d.toString(),
				other_user_fbid: null,
				thread_id: a
			};
			else return
		}
	}

	function w(a, c) {
		var d = [];
		c.forEach(function (a) {
			a = b("MercuryIDs").getUserIDFromParticipantID(a);
			if (a == null) return 0;
			else {
				d.push(a);
				return 0
			}
		});
		return b("MessengerParticipantsFetcher.bs").$$fetch({
			ids: d
		}).then(function (c) {
			var d = [],
				e = [];
			c.forEach(function (a) {
				var b = a.id;
				if (a.is_messenger_blocked || a.is_facebook_blocked) {
					d.push(b);
					return 0
				} else {
					e.push(b);
					return 0
				}
			});
			b("MercuryDispatcher").getForFBID(a).handleUpdate({
				from_client: !0,
				message_blocked_ids: d,
				message_unblocked_ids: e
			});
			return b("Promise").resolve(0)
		})["catch"](function (a) {
			return b("Promise").resolve(0)
		})
	}

	function x(a, c) {
		var d = c.actorFbid.toString(),
			e = b("FBID.bs").ofStringExn(d);
		if (b("bs_caml_obj").caml_notequal(e, a)) e = b("bs_caml_option").some(b("MercuryIDs").getParticipantIDFromUserID(a));
		else {
			var f = c.threadKey.otherUserFbId;
			if (f == null) e = void 0;
			else {
				f = b("FBID.bs").ofString(f.toString());
				e = f !== void 0 ? b("bs_caml_option").some(b("MercuryIDs").getParticipantIDFromUserID(b("bs_caml_option").valFromOption(f))) : void 0
			}
		}
		if (e !== void 0) {
			f = b("bs_caml_option").valFromOption(e);
			e = c.threadKey.otherUserFbId;
			if (e == null) return;
			else {
				w(a, [f]);
				a = i(a, {
					otherUserFbId: e,
					threadFbId: null
				});
				if (a !== void 0) return {
					action_type: b("MercuryActionType").BLOCK_STATUS_CHANGED,
					actorFbid: d,
					canViewerReply: c.canViewerReply,
					reason: c.reason,
					message_blocked_ids: [f],
					other_user_fbid: e.toString(),
					thread_fbid: null,
					thread_id: a
				};
				else return
			}
		}
	}

	function y(a, c) {
		var d = c.threadKey.threadFbId;
		if (d == null) {
			var e = c.threadKey.otherUserFbId;
			e = e == null ? [void 0, void 0] : [e.toString(), {
				otherUserFbId: e,
				threadFbId: null
			}]
		} else e = [d.toString(), {
			otherUserFbId: null,
			threadFbId: d
		}];
		d = e[1];
		e = e[0];
		if (e !== void 0 && d !== void 0) {
			a = i(a, b("bs_caml_option").valFromOption(d));
			if (a !== void 0) return {
				action_type: b("MercuryActionType").MONTAGE_DIRECT_EXPIRE,
				messageId: c.messageId,
				timestamp: c.timestamp,
				thread_fbid: e,
				other_user_fbid: null,
				keep_expiry_timestamp: c.keepExpiryTimestamp,
				thread_id: a
			};
			else return
		}
	}

	function z(a, c) {
		var d = k(a, c.message),
			e = c.repliedToMessage;
		if (e == null) return b("bs_caml_option").some(d);
		else {
			a = k(a, e);
			e = c.status;
			var f;
			if (e == null) f = void 0;
			else switch (e) {
				case 0:
					f = b("bs_caml_option").some(b("RepliedToMessageStatusForGraphQL").VALID);
					break;
				case 1:
					f = b("bs_caml_option").some(b("RepliedToMessageStatusForGraphQL").DELETED);
					break;
				case 2:
					f = b("bs_caml_option").some(b("RepliedToMessageStatusForGraphQL").TEMPORARILY_UNAVAILABLE);
					break;
				default:
					f = void 0
			}
			if (f !== void 0) return b("bs_caml_option").some(Object.assign(d, {
				replied_to_message: {
					status: b("bs_caml_option").valFromOption(f),
					message: a
				}
			}));
			else return
		}
	}

	function A(a, c) {
		var d = c.threadKey.threadFbId,
			e = d == null ? void 0 : b("bs_caml_option").some(d);
		if (d == null) {
			d = c.threadKey.otherUserFbId;
			var f = d == null ? void 0 : b("bs_caml_option").some(d);
			d = d == null ? [void 0, void 0] : [f, {
				otherUserFbId: b("bs_js_null_undefined").fromOption(f),
				threadFbId: null
			}]
		} else d = [e, {
			otherUserFbId: null,
			threadFbId: b("bs_js_null_undefined").fromOption(e)
		}];
		f = d[1];
		e = d[0];
		if (e !== void 0 && f !== void 0) {
			d = i(a, b("bs_caml_option").valFromOption(f));
			if (d !== void 0) return {
				action_type: b("MercuryActionType").GROUPS_SYNC_STATUS_CHANGED,
				thread_fbid: e.toString(),
				other_user_fbid: null,
				actor_fbid: c.actorFbid.toString(),
				groups_sync_status_string: b("MessengerGroupsSyncStatus.bs").fromNullableString(c.groupsSyncStatus),
				thread_id: d
			};
			else return
		}
	}

	function B(a, c) {
		var d = c.threadKey.threadFbId,
			e = d == null ? void 0 : b("bs_caml_option").some(d);
		if (d == null) {
			d = c.threadKey.otherUserFbId;
			var f = d == null ? void 0 : b("bs_caml_option").some(d);
			d = d == null ? [void 0, void 0] : [f, {
				otherUserFbId: b("bs_js_null_undefined").fromOption(f),
				threadFbId: null
			}]
		} else d = [e, {
			otherUserFbId: null,
			threadFbId: b("bs_js_null_undefined").fromOption(e)
		}];
		f = d[1];
		e = d[0];
		d = c.syncAction === b("ClientSyncProtocol_GroupsSyncAction").OPT_IN ? b("bs_caml_option").some(b("MessengerGroupsSyncStatus").OPT_IN) : c.syncAction === b("ClientSyncProtocol_GroupsSyncAction").OPT_OUT ? b("bs_caml_option").some(b("MessengerGroupsSyncStatus").OPT_OUT) : void 0;
		if (e !== void 0 && d !== void 0 && f !== void 0) {
			a = i(a, b("bs_caml_option").valFromOption(f));
			if (a !== void 0) {
				f = c.syncedFbGroupId;
				return {
					action_type: b("MercuryActionType").GROUPS_SYNC_METADATA_UPDATE,
					thread_fbid: e.toString(),
					other_user_fbid: null,
					actor_fbid: c.actorFbid.toString(),
					groups_sync_action: b("bs_caml_option").valFromOption(d),
					source_surface: c.sourceSurface,
					fb_group_id: f == null ? null : f.toString(),
					thread_id: a,
					emoji_codepoints: c.emojiCodePoints
				}
			} else return
		}
	}

	function C(a, c) {
		var d = c.threadKey.threadFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: null,
				threadFbId: d
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").DESCRIPTION_CHANGED,
				thread_fbid: d.toString(),
				other_user_fbid: null,
				group_thread_description_string: c.threadDescription,
				thread_id: a
			};
			else return
		}
	}

	function D(a) {
		return "#" + a.slice(2)
	}

	function E(a, c) {
		var d = c.threadKey.threadFbId,
			e = d == null ? void 0 : b("bs_caml_option").some(d);
		if (d == null) {
			d = c.threadKey.otherUserFbId;
			var f = d == null ? void 0 : b("bs_caml_option").some(d);
			d = d == null ? [void 0, void 0] : [f, {
				otherUserFbId: b("bs_js_null_undefined").fromOption(f),
				threadFbId: null
			}]
		} else d = [e, {
			otherUserFbId: null,
			threadFbId: b("bs_js_null_undefined").fromOption(e)
		}];
		f = d[1];
		e = d[0];
		if (e !== void 0 && f !== void 0) {
			d = e;
			e = i(a, b("bs_caml_option").valFromOption(f));
			if (e !== void 0) {
				a = e;
				f = c.fallbackColor !== "" ? D(c.fallbackColor) : "";
				e = c.reactionPack;
				var g;
				if (e == null) g = [void 0, void 0];
				else {
					var h = e.reactionAssets;
					e = e.fontAsset;
					g = [h == null ? void 0 : h.map(function (a) {
						return {
							reactionName: a.reactionName,
							reactionEmoji: a.reactionEmoji,
							keyframeAssetUri: a.keyframeAssetUri
						}
					}), e == null ? void 0 : e.assetUri]
				}
				h = g[1];
				e = g[0];
				g = c.gradientColors;
				if (!(g == null) && g.length !== 0) {
					g = b("bs_belt_Array").map(g, D);
					return {
						action_type: b("MercuryActionType").UPDATE_THREAD_THEME,
						thread_fbid: d.toString(),
						other_user_fbid: null,
						theme_id: c.themeId.toString(),
						solid_color: f,
						header_color: b("bs_caml_array").caml_array_get(g, 0),
						footer_color: b("bs_caml_array").caml_array_get(g, g.length - 1 | 0),
						gradient_colors: g,
						thread_id: a,
						reactions: e,
						reactionFont: h
					}
				}
				return {
					action_type: b("MercuryActionType").UPDATE_THREAD_THEME,
					thread_fbid: d.toString(),
					other_user_fbid: null,
					theme_id: c.themeId.toString(),
					solid_color: f,
					header_color: f,
					footer_color: f,
					gradient_colors: [],
					thread_id: a,
					reactions: e,
					reactionFont: h
				}
			} else return
		}
	}

	function F(a, c, d, e, f, g) {
		d = {
			action_type: b("MercuryActionType").PIN_MESSAGE,
			thread_fbid: d.threadFbId === null ? null : c,
			other_user_fbid: d.otherUserFbId === null ? null : c,
			thread_id: e,
			actor_fbid: f.actorFbid.toString(),
			pin_message_action: {
				message: {
					message_id: f.pinnedMessage.pinnedMessageId,
					pinning_time: f.pinnedMessage.timestamp,
					message: g
				}
			}
		};
		return q(a, d, "DeltaClientDelta.deltaUpdatePinnedMessage", h)
	}

	function G(a, c, d) {
		var e = j(c.threadKey.threadFbId, c.threadKey.otherUserFbId, c.actorFbid, a),
			f = e[1];
		e = e[0];
		if (e !== void 0 && f !== void 0) {
			var g = b("bs_caml_option").valFromOption(f),
				h = e;
			f = i(a, g);
			if (f !== void 0) {
				var k = f;
				e = c.pinnedMessage.pinnedMessageId;
				f = b("MessengerState.bs").getMessageFromID(a, e);
				if (f !== void 0) return F(a, h, g, k, c, b("bs_caml_option").valFromOption(f));
				else {
					b("MessengerMessageDFFFetcher.bs").fetch_(a, {
						message_id: e,
						thread_id: h
					}, !1).then(function (d) {
						F(a, h, g, k, c, d);
						return b("Promise").resolve(0)
					})["catch"](function (a) {
						d.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdatePinnedMessage", "error on fetching pinned message payload"]);
						return b("Promise").resolve(0)
					});
					return 0
				}
			} else {
				d.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdatePinnedMessage", "transform failed"]);
				return 0
			}
		} else {
			d.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdatePinnedMessage", "transform failed"]);
			return 0
		}
	}

	function H(a, c) {
		var d = j(c.threadKey.threadFbId, c.threadKey.otherUserFbId, c.actorFbid, a),
			e = d[1];
		d = d[0];
		if (d !== void 0 && e !== void 0) {
			e = b("bs_caml_option").valFromOption(e);
			d = d;
			a = i(a, e);
			if (a !== void 0) return {
				action_type: b("MercuryActionType").UNPIN_MESSAGE,
				thread_fbid: e.threadFbId === null ? null : d,
				other_user_fbid: e.otherUserFbId === null ? null : d,
				thread_id: a,
				unpin_message_action: {
					message_id: c.pinnedMessage.pinnedMessageId
				},
				actor_fbid: c.actorFbid.toString()
			};
			else return
		}
	}

	function I(a, c) {
		var d = c.threadKey.threadFbId;
		if (d == null) {
			var e = c.threadKey.otherUserFbId;
			e = e == null ? [void 0, void 0] : [e.toString(), {
				otherUserFbId: e,
				threadFbId: null
			}]
		} else e = [d.toString(), {
			otherUserFbId: null,
			threadFbId: d
		}];
		d = e[1];
		e = e[0];
		if (e !== void 0 && d !== void 0) {
			a = i(a, b("bs_caml_option").valFromOption(d));
			if (a !== void 0) return {
				action_type: b("MercuryActionType").CHANGE_PINNED_STATUS,
				thread_fbid: e,
				other_user_fbid: null,
				is_pinned: c.isPinned,
				thread_id: a,
				thread_pin_timestamp: c.timestamp
			};
			else return
		}
	}

	function J(a, c) {
		var d = c.threadKey.threadFbId,
			e = c.threadKey.otherUserFbId;
		e = d == null ? e == null ? [void 0, void 0] : [e.toString(), {
			otherUserFbId: e,
			threadFbId: null
		}] : [d.toString(), {
			otherUserFbId: null,
			threadFbId: d
		}];
		d = e[1];
		e = e[0];
		if (e !== void 0 && d !== void 0) {
			a = i(a, b("bs_caml_option").valFromOption(d));
			if (a !== void 0) return {
				action_type: b("MercuryActionType").MUTATE_TAGS,
				thread_fbid: e,
				other_user_fbid: null,
				thread_id: a,
				messageId: c.messageId,
				tags_to_add: c.isSaved ? ["message:save"] : [],
				tags_to_delete: c.isSaved ? [] : ["message:save"]
			};
			else return
		}
	}

	function K(a, c) {
		var d = c.threadKey.threadFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: null,
				threadFbId: d
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").UPDATE_JOINABLE_LINK,
				joinable_link: c.privateGroupLink,
				thread_fbid: d.toString(),
				other_user_fbid: null,
				thread_id: a
			};
			else return
		}
	}

	function L(a) {
		a = a.directives;
		if (a == null) return;
		else {
			a = b("bs_belt_Array").get(a, 0);
			if (a !== void 0) {
				a = b("bs_caml_option").valFromOption(a).data;
				if (a == null) return;
				else {
					a = a.add_actions;
					if (a == null) return;
					else {
						var c = a.actions;
						if (c == null) return;
						else {
							c = b("bs_belt_Array").get(c, 0);
							if (c !== void 0) {
								c = b("bs_caml_option").valFromOption(c).thread_key;
								if (c == null) return;
								else {
									var d = c.thread_fbid;
									c = c.other_user_fbid;
									if (d == null)
										if (c == null) return;
										else c = c;
									else c = d;
									return {
										action_type: b("MercuryActionType").CREATE_OMNI_M_SUGGESTIONS,
										thread_fbid: b("MercuryIDs").getThreadIDFromThreadFBID(b("FBID.bs").ofStringExn(c)),
										other_user_fbid: null,
										thread_id: c,
										suggestions: a
									}
								}
							} else return
						}
					}
				}
			} else return
		}
	}

	function M(a, c) {
		var d = c.threadKey.threadFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: null,
				threadFbId: d
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").PROMOTE_GROUP_ADMINS,
				thread_fbid: d.toString(),
				other_user_fbid: null,
				promoted_admins: b("bs_belt_Array").map(c.promotedAdmins, function (a) {
					return {
						admin_fbid: a.adminFbId.toString(),
						admin_type: a.adminType
					}
				}),
				thread_id: a
			};
			else return
		}
	}

	function N(a, c) {
		var d = c.threadKey.threadFbId,
			e = c.threadKey.otherUserFbId;
		if (d == null)
			if (e == null) return;
			else {
				var f = i(a, {
					otherUserFbId: e,
					threadFbId: null
				});
				if (f !== void 0) return {
					action_type: b("MercuryActionType").REMOVE_MESSAGE,
					thread_fbid: null,
					messageId: c.messageID,
					other_user_fbid: e.toString(),
					removed_timestamp: c.deletionTimestamp,
					thread_id: f,
					author: b("MercuryIDs").getParticipantIDFromUserID(c.senderID)
				};
				else return
			}
		else {
			e = i(a, {
				otherUserFbId: null,
				threadFbId: d
			});
			if (e !== void 0) return {
				action_type: b("MercuryActionType").REMOVE_MESSAGE,
				thread_fbid: d.toString(),
				messageId: c.messageID,
				other_user_fbid: null,
				removed_timestamp: c.deletionTimestamp,
				thread_id: e,
				author: b("MercuryIDs").getParticipantIDFromUserID(c.senderID)
			};
			else return
		}
	}

	function O(a, c) {
		var d = c.threadKey.otherUserFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: d,
				threadFbId: null
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").UNSUBSCRIBE_STATUS_UPDATE,
				page_unsubscribe_status: c.unSubscribeStatus,
				thread_fbid: d.toString(),
				other_user_fbid: null,
				thread_id: a
			};
			else return
		}
	}

	function P(a, c) {
		var d = c.threadKey.otherUserFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: d,
				threadFbId: null
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").BLURRED_IMAGE_STATUS,
				blurred_image_uri: c.blurredImageUri,
				image_message_id: c.messageId,
				image_id: c.imageId,
				should_show: c.shouldShow,
				thread_fbid: d.toString(),
				other_user_fbid: null,
				thread_id: a
			};
			else return
		}
	}

	function Q(a, c) {
		var d = c.threadKey.otherUserFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: d,
				threadFbId: null
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").IS_PIN_PROTECTED,
				thread_fbid: d.toString(),
				other_user_fbid: null,
				is_pin_protected: c.isPinProtected,
				thread_id: a
			};
			else return
		}
	}

	function R(a, c) {
		var d = c.threadKey.otherUserFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: d,
				threadFbId: null
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").UPDATE_CONNECTIVITY_STATUS,
				other_user_fbid: d.toString(),
				subtitle_type: c.subtitleType,
				thread_connectivity_status: c.threadConnectivityStatus,
				thread_fbid: d.toString(),
				thread_id: a
			};
			else return
		}
	}

	function S(a, c) {
		var d = c.threadkey.otherUserFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: d,
				threadFbId: null
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").ADS_CONVERSION_UPDATE,
				other_user_fbid: d.toString(),
				thread_fbid: d.toString(),
				thread_id: a,
				conversion_detection_data: {
					is_eligible: c.isEligible,
					conversion_type: c.conversionType,
					currency_code: c.currencyCode,
					currency_amount: c.currencyAmount,
					timestamp: c.timestamp,
					classifier: c.classifier,
					page_reply: c.pageReply,
					icebreaker_key: c.icebreakerKey,
					icebreaker_message: c.icebreakerMessage,
					trigger_id: c.triggerId
				}
			};
			else return
		}
	}

	function T(a, c) {
		var d = c.threadkey.otherUserFbId;
		if (d == null) return;
		else {
			a = i(a, {
				otherUserFbId: d,
				threadFbId: null
			});
			if (a !== void 0) return {
				action_type: b("MercuryActionType").SUGGESTED_REPLY_UPDATE,
				other_user_fbid: d.toString(),
				thread_fbid: d.toString(),
				thread_id: a,
				suggested_reply_data: {
					suggestion_type: c.suggestionType,
					suggestion_content: c.suggestionContent,
					triggered_timestamp: c.triggeredTimestamp
				}
			};
			else return
		}
	}
	var U = function (a) {
		return String.fromCharCode.apply(null, a)
	};

	function V(a, c) {
		c = JSON.parse(U(c.payload));
		c = b("bs_js_json").classify(c);
		if (typeof c === "number" || c.tag !== 2) return b("bs_block").__(1, ["DeltaClientDelta", "malformed payload"]);
		else {
			c = b("bs_js_dict").get(c[0], "deltas");
			if (c !== void 0) {
				c = b("bs_js_json").classify(b("bs_caml_option").valFromOption(c));
				if (typeof c === "number" || c.tag !== 3) return b("bs_block").__(1, ["DeltaClientDelta", "delta is not an array"]);
				else {
					c = b("bs_belt_Array").get(c[0], 0);
					if (c !== void 0) {
						c = b("bs_js_json").classify(b("bs_caml_option").valFromOption(c));
						if (typeof c === "number" || c.tag !== 2) return b("bs_block").__(1, ["DeltaClientDelta", "client delta is not an object"]);
						else {
							c = c[0];
							var d = !1,
								e = {
									contents: 0
								},
								f = b("bs_js_dict").get(c, "deltaMessageReaction");
							if (f !== void 0) {
								d = !0;
								f = r(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaMessageReaction", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaMessageReaction", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "liveLocationData");
							if (f !== void 0 && !d) {
								d = !0;
								f = t(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.liveLocationData", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.liveLocationData", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaUpdateGroupEventRSVPStatus");
							if (f !== void 0 && !d) {
								d = !0;
								f = u(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaUpdateGroupEventRSVPStatus", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdateGroupEventRSVPStatus", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaPageThreadFollowUpData");
							if (f !== void 0 && !d) {
								d = !0;
								f = v(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaPageThreadFollowUpData", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaPageThreadFollowUpData", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaChangeViewerStatus");
							if (f !== void 0 && !d) {
								d = !0;
								f = x(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaChangeViewerStatus", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaChangeViewerStatus", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaMontageDirectExpire");
							if (f !== void 0 && !d) {
								d = !0;
								f = y(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaMontageDirectExpire", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaMontageDirectExpire", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaMessageReply");
							if (f !== void 0 && !d) {
								d = !0;
								f = z(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaMessageReply", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaMessageReply", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaUpdateGroupsSyncStatus");
							if (f !== void 0 && !d) {
								d = !0;
								f = A(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaUpdateGroupsSyncStatus", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdateGroupsSyncStatus", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaUpdateGroupsSyncMetadata");
							if (f !== void 0 && !d) {
								d = !0;
								f = B(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaUpdateGroupsSyncMetadata", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdateGroupsSyncMetadata", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaGroupThreadDescription");
							if (f !== void 0 && !d) {
								d = !0;
								f = C(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaGroupThreadDescription", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaGroupThreadDescription", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaUpdateThreadTheme");
							if (f !== void 0 && !d) {
								d = !0;
								f = E(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaUpdateThreadTheme", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdateThreadTheme", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaUpdateSavedMessage");
							if (f !== void 0 && !d) {
								d = !0;
								f = J(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaUpdateSavedMessage", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdateSavedMessage", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaUpdatePinnedThread");
							if (f !== void 0 && !d) {
								d = !0;
								f = I(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaUpdatePinnedThread", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdatePinnedThread", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaUpdatePinnedMessage");
							if (f !== void 0 && !d) {
								f = b("bs_caml_option").valFromOption(f);
								d = !0;
								if (f.pinnedMessageAction === 0) G(a, f, e);
								else {
									f = H(a, f);
									f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaUpdatePinnedMessage", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdatePinnedMessage", "transform failed"])
								}
							}
							f = b("bs_js_dict").get(c, "deltaUpdatePrivateGroupJoinableLink");
							if (f !== void 0 && !d) {
								d = !0;
								f = K(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaUpdatePrivateGroupJoinableLink", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaUpdatePrivateGroupJoinableLink", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaOmniMDirectivesV2");
							if (f !== void 0 && !d) {
								d = !0;
								f = L(b("bs_caml_option").valFromOption(f));
								if (f !== void 0) {
									f = b("bs_caml_option").valFromOption(f);
									e.contents = b("bs_block").__(0, ["DeltaClientDelta.deltaOmniMDirectivesV2"]);
									b("MSuggestionActions").saveAllSuggestions(f.thread_id, f.suggestions)
								} else e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaOmniMDirectivesV2", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaPromoteGroupThreadAdmin");
							if (f !== void 0 && !d) {
								d = !0;
								f = M(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaPromoteGroupThreadAdmin", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaPromoteGroupThreadAdmin", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaRecallMessageData");
							if (f !== void 0 && !d) {
								d = !0;
								f = N(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaRecallMessageData", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaRecallMessageData", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaPageUnSubscribeStatus");
							if (f !== void 0 && !d) {
								d = !0;
								f = O(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaPageUnSubscribeStatus", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaPageUnSubscribeStatus", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaPageBlurredImageStatus");
							if (f !== void 0 && !d) {
								d = !0;
								f = P(a, b("bs_caml_option").valFromOption(f));
								f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaPageBlurredImageStatus", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaPageBlurredImageStatus", "transform failed"])
							}
							f = b("bs_js_dict").get(c, "deltaPaymentPinProtectionStatusData");
							if (f !== void 0) {
								if (!d) {
									d = !0;
									f = Q(a, b("bs_caml_option").valFromOption(f));
									f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaPaymentPinProtectionStatusData", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaPaymentPinProtectionStatusData", "transform failed"])
								}
							} else d || (e.contents = b("bs_block").__(1, ["DeltaClientDelta", "unknown delta type: " + Object.keys(c).join(",")]));
							f = b("bs_js_dict").get(c, "deltaThreadConnectivityStatusUpdate");
							if (f !== void 0) {
								if (!d) {
									d = !0;
									f = R(a, b("bs_caml_option").valFromOption(f));
									f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaThreadConnectivityStatusUpdateData", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaThreadConnectivityStatusUpdateData", "transform failed"])
								}
							} else d || (e.contents = b("bs_block").__(1, ["DeltaClientDelta", "unknown delta type: " + Object.keys(c).join(",")]));
							f = b("bs_js_dict").get(c, "deltaMessengerAdsConversionUpdate");
							if (f !== void 0) {
								if (!d) {
									d = !0;
									f = S(a, b("bs_caml_option").valFromOption(f));
									f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaMessengerAdsConversionUpdate", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaMessengerAdsConversionUpdate", "transform failed"])
								}
							} else d || (e.contents = b("bs_block").__(1, ["DeltaClientDelta", "unknown delta type: " + Object.keys(c).join(",")]));
							f = b("bs_js_dict").get(c, "deltaMessengerBusinessSuggestedReplyUpdate");
							if (f !== void 0) {
								if (!d) {
									d = !0;
									f = T(a, b("bs_caml_option").valFromOption(f));
									f !== void 0 ? q(a, b("bs_caml_option").valFromOption(f), "DeltaClientDelta.deltaMessengerBusinessSuggestedReplyUpdate", h) : e.contents = b("bs_block").__(1, ["DeltaClientDelta.deltaMessengerBusinessSuggestedReplyUpdate", "transform failed"])
								}
							} else d || (e.contents = b("bs_block").__(1, ["DeltaClientDelta", "unknown delta type: " + Object.keys(c).join(",")]));
							return e.contents
						}
					} else return b("bs_block").__(1, ["DeltaClientDelta", "client delta is missing"])
				}
			} else return b("bs_block").__(1, ["DeltaClientDelta", "client delta has no deltas"])
		}
	}

	function W(a, c) {
		var d = [],
			e = [],
			f = c.folders,
			g = 0;
		f == null || f.length === 0 ? g = 1 : b("bs_belt_Array").forEachU(f, function (a) {
			d.push({
				action_type: b("MercuryGlobalActionType").MARK_ALL_READ,
				action_id: null,
				folder: b("bs_js_dict").get(b("MessengerState.bs").irisMapping, a),
				timestamp: parseInt(c.watermarkTimestamp, 10)
			});
			return 0
		});
		g === 1 && b("bs_belt_Array").forEachU(c.threadKeys, function (f) {
			var d = i(a, f);
			if (d !== void 0) {
				var g = parseInt(c.watermarkTimestamp, 10);
				b("MercuryServerRequests").getForFBID(a).updateLastActionTimestamp(g);
				e.push({
					thread_id: d,
					action_type: b("MercuryActionType").CHANGE_READ_STATUS,
					other_user_fbid: f.otherUserFbId,
					thread_fbid: f.threadFbId,
					mark_as_read: !0,
					timestamp: g,
					folder: "inbox"
				});
				return 0
			} else return 0
		});
		return [d, e]
	}

	function X(a) {
		if (a == null) return null;
		else return a.toString()
	}

	function Y(a) {
		a = a.skipBumpThread;
		if (!(a == null) && a) return h;
		else return 1
	}

	function Z(a, c) {
		var d;
		switch (c.tag | 0) {
			case 0:
				var e = c[0],
					f = k(a, e);
				q(a, f, "deltaNewMessage", Y(e.messageMetadata));
				d = 0;
				break;
			case 1:
				f = c[0];
				q(a, Object.assign(k(a, f.newMessage), {
					action_type: b("MercuryActionType").REPLACE_MESSAGE,
					replaced_message_id: f.replacedMessageId
				}), "deltaReplaceMessage", h);
				d = 0;
				break;
			case 2:
				e = c[0];
				f = e.threadKey.otherUserFbId;
				var g;
				if (f == null) {
					var j = e.threadKey.threadFbId;
					if (j == null) g = void 0;
					else {
						var l = b("MercuryThreadIDMap").getForFBID(a);
						l = l.getClientIDFromServerIDNow(j.toString());
						g = l == null ? void 0 : b("bs_caml_option").some(l)
					}
				} else {
					j = b("FBID.bs").ofString(f.toString());
					g = j !== void 0 ? b("bs_caml_option").some(b("MercuryIDs").getThreadIDFromUserID(b("bs_caml_option").valFromOption(j))) : void 0
				}
				if (g !== void 0) {
					l = {};
					f = parseInt(e.deliveredWatermarkTimestampMs, 10);
					l[b("bs_caml_option").valFromOption(g)] = f;
					b("MercuryDispatcher").getForFBID(a).handleUpdate({
						delivery_receipts: l,
						pinned_thread_ids: [],
						newlyAddedClientIDs: {},
						actions: [],
						preprocessed: !0
					});
					d = b("bs_block").__(0, ["DeltaDeliveryReceipt"])
				} else d = b("bs_block").__(1, ["DeltaDeliveryReceipt", "no thread id"]);
				break;
			case 3:
				j = W(a, c[0]);
				e = j[1];
				g = j[0];
				g.length !== 0 && b("MercuryDispatcher").getForFBID(a).handleUpdate({
					actions: [],
					global_actions: g,
					pinned_thread_ids: [],
					newlyAddedClientIDs: {},
					preprocessed: !0,
					payload_source: b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE
				});
				e.length !== 0 && b("MercuryDispatcher").getForFBID(a).handleUpdate({
					pinned_thread_ids: [],
					newlyAddedClientIDs: {},
					actions: e,
					preprocessed: !0,
					payload_source: b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE
				});
				d = g.length === 0 && e.length === 0 ? b("bs_block").__(1, ["DeltaMarkRead", "no local or global action"]) : b("bs_block").__(0, ["DeltaMarkRead"]);
				break;
			case 4:
				var m = c[0];
				f = b("bs_belt_Array").keepMapU(m.threadKeys, function (c) {
					var d = i(a, c);
					if (d !== void 0) {
						var e = parseInt(m.watermarkTimestamp, 10);
						b("MercuryServerRequests").getForFBID(a).updateLastActionTimestamp(e);
						return {
							thread_id: d,
							action_type: b("MercuryActionType").CHANGE_READ_STATUS,
							other_user_fbid: c.otherUserFbId,
							thread_fbid: c.threadFbId,
							mark_as_read: !1,
							timestamp: e,
							folder: "inbox"
						}
					}
				});
				b("MercuryDispatcher").getForFBID(a).handleUpdate({
					pinned_thread_ids: [],
					newlyAddedClientIDs: {},
					actions: f,
					preprocessed: !0,
					payload_source: b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE
				});
				d = b("bs_block").__(0, ["DeltaMarkUnread"]);
				break;
			case 5:
				l = c[0];
				q(a, Object.assign(k(a, l), {
					action_type: b("MercuryActionType").LOG_MESSAGE,
					log_message_body: l.messageMetadata.adminText,
					log_message_data: {
						removed_participants: [b("MercuryIDs").getParticipantIDFromUserID(l.leftParticipantFbId)]
					},
					log_message_type: b("MercuryLogMessageType").UNSUBSCRIBE
				}), "DeltaParticipantLeftGroupThread", Y(l.messageMetadata));
				d = 0;
				break;
			case 6:
				j = c[0];
				q(a, Object.assign(k(a, j), {
					action_type: b("MercuryActionType").LOG_MESSAGE,
					log_message_body: j.messageMetadata.adminText,
					log_message_data: {
						added_participants: b("bs_belt_Array").map(j.addedParticipants, function (a) {
							return b("MercuryIDs").getParticipantIDFromUserID(a.userFbId)
						})
					},
					log_message_type: b("MercuryLogMessageType").SUBSCRIBE
				}), "DeltaParticipantsAddedToGroupThread", Y(j.messageMetadata));
				d = 0;
				break;
			case 7:
				g = c[0];
				q(a, Object.assign(k(a, g), {
					action_type: b("MercuryActionType").LOG_MESSAGE,
					log_message_body: g.messageMetadata.adminText,
					log_message_data: {
						name: g.name
					},
					log_message_type: b("MercuryLogMessageType").THREAD_NAME
				}), "DeltaThreadName", Y(g.messageMetadata));
				d = 0;
				break;
			case 8:
				e = c[0];
				f = {
					watermark: parseInt(e.watermarkTimestampMs, 10),
					action: parseInt(e.actionTimestampMs, 10)
				};
				l = e.threadKey.otherUserFbId;
				j = l == null ? b("bs_caml_option").nullable_to_opt(e.actorFbId) : l.toString();
				g = e.threadKey.otherUserFbId;
				if (g == null) {
					l = e.threadKey.threadFbId;
					e = l == null ? void 0 : l.toString()
				} else e = g.toString();
				if (j !== void 0)
					if (e !== void 0) {
						l = e;
						g = b("MercuryThreadIDMap").getForFBID(a);
						e = g.getClientIDFromServerIDNow(l);
						if (e == null) d = b("bs_block").__(1, ["DeltaReadReceipt", "No clientID for serverID: " + l]);
						else {
							g = {};
							l = {};
							j = b("MercuryIDs").getParticipantIDFromUserID(b("FBID.bs").ofStringExn(j));
							l[j] = f;
							g[e] = l;
							b("MercuryDispatcher").getForFBID(a).handleUpdate({
								roger: g,
								pinned_thread_ids: [],
								newlyAddedClientIDs: {},
								actions: [],
								preprocessed: !0
							});
							d = b("bs_block").__(0, ["DeltaReadReceipt"])
						}
					} else d = b("bs_block").__(1, ["DeltaReadReceipt", "serverID is invalid"]);
				else d = b("bs_block").__(1, ["DeltaReadReceipt", "userID is invalid"]);
				break;
			case 9:
				j = c[0];
				q(a, Object.assign(k(a, j), {
					action_type: b("MercuryActionType").LOG_MESSAGE,
					log_message_body: j.messageMetadata.adminText,
					log_message_data: {
						message_type: j.type,
						untypedData: j.untypedData
					},
					log_message_type: b("MercuryLogMessageType").GENERIC_ADMIN_TEXT,
					message_unsendability_status: b("MessageUnsendabilityStatus.bs").fromNullableString(j.messageMetadata.unsendType)
				}), "DeltaAdminTextMessage", Y(j.messageMetadata));
				d = 0;
				break;
			case 10:
				f = c[0];
				e = i(a, {
					otherUserFbId: f.threadKey.otherUserFbId,
					threadFbId: f.threadKey.threadFbId
				});
				l = e !== void 0 ? {
					action_type: b("MercuryActionType").DELETE_MESSAGES,
					message_ids: f.messageIds,
					other_user_fbid: X(f.threadKey.otherUserFbId),
					thread_fbid: X(f.threadKey.threadFbId),
					thread_id: e
				} : void 0;
				g = f.threadKey.threadFbId;
				j = f.folder;
				if (l !== void 0) {
					e = b("bs_caml_option").valFromOption(l);
					g == null || j == null ? (q(a, e, "DeltaMessageDelete", h), d = 0) : (j === "FOLDER_MONTAGE" ? b("MontageActions").requestUpdate(g.toString()) : q(a, e, "DeltaMessageDelete", h), d = 0)
				} else d = b("bs_block").__(1, ["DeltaMessageDelete", "transform failed"]);
				break;
			case 11:
				f = c[0];
				l = i(a, {
					otherUserFbId: f.threadKey.otherUserFbId,
					threadFbId: f.threadKey.threadFbId
				});
				if (l !== void 0) {
					j = f.action;
					q(a, {
						action_type: b("MercuryActionType").CHANGE_ARCHIVED_STATUS,
						thread_fbid: X(f.threadKey.threadFbId),
						other_user_fbid: X(f.threadKey.otherUserFbId),
						archived: j == null ? !1 : j === b("MessagingThreadAction").ACTION_ARCHIVED,
						thread_id: l
					}, "DeltaThreadAction", h);
					d = 0
				} else d = b("bs_block").__(1, ["DeltaThreadAction", "transform failed"]);
				break;
			case 12:
				g = b("bs_belt_Array").keepMapU(c[0].threadKeys, function (c) {
					var d = i(a, c);
					if (d !== void 0) return {
						thread_id: d,
						action_type: b("MercuryActionType").DELETE_THREAD,
						other_user_fbid: c.otherUserFbId,
						thread_fbid: c.threadFbId
					}
				});
				b("MercuryDispatcher").getForFBID(a).handleUpdate({
					pinned_thread_ids: [],
					newlyAddedClientIDs: {},
					actions: g,
					preprocessed: !0,
					payload_source: b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE
				});
				d = b("bs_block").__(0, ["DeltaThreadDelete"]);
				break;
			case 13:
				e = c[0];
				f = i(a, {
					otherUserFbId: null,
					threadFbId: e.messageMetadata.threadKey.threadFbId
				});
				f !== void 0 ? (q(a, {
					action_type: b("MercuryActionType").REMOVE_GROUP_ADMINS,
					action_id: null,
					thread_fbid: X(e.messageMetadata.threadKey.threadFbId),
					other_user_fbid: null,
					removed_admin_ids: e.removedAdminFbIds,
					thread_id: f
				}, "DeltaAdminRemovedFromGroupThread", h), d = 0) : d = b("bs_block").__(1, ["DeltaAdminRemovedFromGroupThread", "transform failed"]);
				break;
			case 14:
				j = c[0];
				l = i(a, j.threadKey);
				if (l !== void 0) {
					g = [{
						thread_id: l,
						action_type: b("MercuryActionType").CHANGE_MUTE_SETTINGS,
						thread_fbid: j.threadKey.threadFbId,
						other_user_fbid: j.threadKey.otherUserFbId,
						mute_until: parseInt(j.expireTime, 10)
					}];
					b("MercuryDispatcher").getForFBID(a).handleUpdate({
						pinned_thread_ids: [],
						newlyAddedClientIDs: {},
						actions: g,
						preprocessed: !0,
						payload_source: b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE
					});
					d = b("bs_block").__(0, ["DeltaThreadMuteSettings"])
				} else d = b("bs_block").__(1, ["DeltaThreadMuteSettings", "invalid thread ID"]);
				break;
			case 15:
				e = c[0];
				f = e.jsonBlob;
				if (f == null) d = b("bs_block").__(1, ["DeltaPagesManagerEvent", "no jsonBlob"]);
				else {
					try {
						l = JSON.parse(f)
					} catch (a) {
						l = {}
					}
					j = b("bs_js_json").classify(l);
					if (typeof j === "number" || j.tag !== 2) d = b("bs_block").__(1, ["DeltaPagesManagerEvent", "jsonBlob is not an object"]);
					else {
						g = j[0];
						f = b("bs_js_dict").get(g, "type");
						if (f !== void 0) {
							l = b("bs_js_json").classify(b("bs_caml_option").valFromOption(f));
							if (typeof l === "number" || l.tag !== 1) d = b("bs_block").__(1, ["DeltaPagesManagerEvent", "type is not a number"]);
							else if (l[0] === b("PagesMessagingEventType").FLAG) {
								j = b("bs_js_dict").get(g, "flagData");
								if (j !== void 0) {
									f = b("bs_js_json").classify(b("bs_caml_option").valFromOption(j));
									if (typeof f === "number" || f.tag !== 2) l = !1;
									else {
										g = b("bs_js_dict").get(f[0], "state");
										if (g !== void 0) {
											j = b("bs_js_json").classify(b("bs_caml_option").valFromOption(g));
											l = typeof j === "number" ? j === 1 : !1
										} else l = !1
									}
								} else l = !1;
								f = i(a, e.threadKey);
								if (f !== void 0) {
									g = [{
										thread_id: f,
										action_type: b("MercuryActionType").CHANGE_FLAG,
										mark_as_flag: l,
										other_user_fbid: e.threadKey.otherUserFbId,
										thread_fbid: e.threadKey.threadFbId
									}];
									b("MercuryDispatcher").getForFBID(a).handleUpdate({
										pinned_thread_ids: [],
										newlyAddedClientIDs: {},
										actions: g,
										preprocessed: !0,
										payload_source: b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE
									});
									d = b("bs_block").__(0, ["DeltaPagesManagerEvent"])
								} else d = b("bs_block").__(1, ["DeltaPagesManagerEvent", "threadID is invalid"])
							} else d = b("bs_block").__(1, ["DeltaPagesManagerEvent", "type is not pagesFlag"])
						} else d = b("bs_block").__(1, ["DeltaPagesManagerEvent", "no type on jsonBlob"])
					}
				}
				break;
			case 16:
				j = c[0];
				f = i(a, {
					otherUserFbId: null,
					threadFbId: j.messageMetadata.threadKey.threadFbId
				});
				f !== void 0 ? (q(a, {
					action_type: b("MercuryActionType").APPROVAL_MODE,
					action_id: null,
					thread_fbid: X(j.messageMetadata.threadKey.threadFbId),
					other_user_fbid: null,
					approval_mode: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessengerApprovalModeTypes"), j.mode)),
					thread_id: f
				}, "DeltaApprovalMode", h), d = 0) : d = b("bs_block").__(1, ["DeltaApprovalMode", "transform failed"]);
				break;
			case 17:
				l = c[0];
				e = i(a, {
					otherUserFbId: l.messageMetadata.threadKey.otherUserFbId,
					threadFbId: l.messageMetadata.threadKey.threadFbId
				});
				if (e !== void 0) {
					g = e;
					j = l.inviterFbId;
					if (j == null) {
						f = l.recipientFbId;
						if (!(f == null)) {
							e = b("MercuryIDs").getParticipantIDFromUserID(b("FBID.bs").ofStringExn(f));
							q(a, {
								action_type: b("MercuryActionType").APPROVAL_QUEUE,
								action_id: null,
								thread_fbid: X(l.messageMetadata.threadKey.threadFbId),
								other_user_fbid: X(l.messageMetadata.threadKey.otherUserFbId),
								removed_id: l.action === b("MessengerApprovalQueueTypes").REMOVED ? e : null,
								added_id: l.action === b("MessengerApprovalQueueTypes").REQUESTED ? e : null,
								thread_id: g
							}, "DeltaApprovalQueue", h)
						}
					} else {
						if (l.action === b("MessengerApprovalQueueTypes").REQUESTED) {
							f = l.requestSource;
							var p;
							if (f == null) p = b("MessengerGroupRequestSource").ADD;
							else switch (f) {
								case "ADD":
									p = b("MessengerGroupRequestSource").ADD;
									break;
								case "JOIN_THROUGH_LINK":
									p = b("MessengerGroupRequestSource").JOIN_THROUGH_LINK;
									break;
								default:
									p = b("MessengerGroupRequestSource").ADD
							}
							e = {
								requester: {
									id: l.recipientFbId
								},
								inviter: {
									id: j
								},
								request_source: p,
								request_timestamp: l.requestTimestamp
							}
						} else e = null;
						q(a, {
							action_type: b("MercuryActionType").APPROVAL_QUEUE,
							action_id: null,
							thread_fbid: X(l.messageMetadata.threadKey.threadFbId),
							other_user_fbid: X(l.messageMetadata.threadKey.otherUserFbId),
							removed_group_id: l.action === b("MessengerApprovalQueueTypes").REMOVED ? l.recipientFbId : null,
							added_group_id: e,
							thread_id: g
						}, "DeltaApprovalQueue", h)
					}
					d = 0
				} else d = b("bs_block").__(1, ["DeltaApprovalQueue", "transform failed"]);
				break;
			case 18:
				f = c[0];
				q(a, k(a, f.deltaNewMessage), "DeltaGenieMessage", Y(f.deltaNewMessage.messageMetadata));
				d = 0;
				break;
			case 19:
				j = c[0];
				l = j.messageMetadata.threadKey;
				if (l == null) e = void 0;
				else {
					g = l.threadFbId;
					e = g == null ? void 0 : g
				}
				f = j.initiator;
				if (f == null) l = void 0;
				else {
					g = f.userFbId;
					l = g == null ? void 0 : g.toString()
				}
				f = i(a, {
					otherUserFbId: null,
					threadFbId: e
				});
				f !== void 0 ? (q(a, {
					action_type: b("MercuryActionType").UPDATE_RTC_CALL_DATA,
					thread_fbid: X(e),
					other_user_fbid: null,
					call_state: j.callState,
					server_info_data: j.serverInfoData,
					initiator_fbid: l,
					thread_id: f
				}, "DeltaRTCCallData", h), d = 0) : d = b("bs_block").__(1, ["DeltaRTCCallData", "transform failed"]);
				break;
			case 20:
				g = c[0];
				e = i(a, g.threadKey);
				if (e !== void 0) {
					j = [{
						thread_id: e,
						action_type: b("MercuryActionType").CHANGE_FOLDER,
						other_user_fbid: g.threadKey.otherUserFbId,
						new_folder: b("bs_js_dict").get(b("MessengerState.bs").irisMapping, g.folder)
					}];
					b("MercuryDispatcher").getForFBID(a).handleUpdate({
						pinned_thread_ids: [],
						newlyAddedClientIDs: {},
						actions: j,
						preprocessed: !0,
						payload_source: b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE
					});
					d = b("bs_block").__(0, ["DeltaThreadFolder"])
				} else d = b("bs_block").__(1, ["DeltaThreadFolder", "threadID is invalid"]);
				break;
			case 21:
				l = c[0];
				f = i(a, l.threadKey);
				if (f !== void 0) {
					e = [{
						thread_id: f,
						action_type: b("MercuryActionType").MUTATE_TAGS,
						messageId: l.messageId,
						tags_to_add: l.tagsToAdd,
						tags_to_delete: l.tagsToDelete
					}];
					b("MercuryDispatcher").getForFBID(a).handleUpdate({
						pinned_thread_ids: [],
						newlyAddedClientIDs: {},
						actions: e,
						preprocessed: !0,
						payload_source: b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE
					});
					d = b("bs_block").__(0, ["DeltaMutateMessageTags"])
				} else d = b("bs_block").__(1, ["DeltaMutateMessageTags", "threadID is invalid"]);
				break;
			case 22:
				d = V(a, c[0]);
				break
		}
		if (typeof d === "number") return 0;
		else if (d.tag) return o(d[0], d[1]);
		else return n(d[0])
	}

	function a(a, c) {
		if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").NewMessage)) return Z(a, b("bs_block").__(0, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ReplaceMessage)) return Z(a, b("bs_block").__(1, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").DeliveryReceipt)) return Z(a, b("bs_block").__(2, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").MarkRead)) return Z(a, b("bs_block").__(3, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").MarkUnread)) return Z(a, b("bs_block").__(4, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ParticipantLeftGroupThread)) return Z(a, b("bs_block").__(5, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ParticipantsAddedToGroupThread)) return Z(a, b("bs_block").__(6, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ThreadName)) return Z(a, b("bs_block").__(7, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ReadReceipt)) return Z(a, b("bs_block").__(8, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").AdminTextMessage)) return Z(a, b("bs_block").__(9, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").MessageDelete)) return Z(a, b("bs_block").__(10, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ThreadAction)) return Z(a, b("bs_block").__(11, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ThreadDelete)) return Z(a, b("bs_block").__(12, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").AdminRemovedFromGroupThread)) return Z(a, b("bs_block").__(13, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ThreadMuteSettings)) return Z(a, b("bs_block").__(14, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").PagesManagerEvent)) return Z(a, b("bs_block").__(15, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ApprovalMode)) return Z(a, b("bs_block").__(16, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ApprovalQueue)) return Z(a, b("bs_block").__(17, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ClientPayload)) return Z(a, b("bs_block").__(22, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").GenieMessage)) return Z(a, b("bs_block").__(18, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").RtcCallData)) return Z(a, b("bs_block").__(19, [c]));
		else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").MarkFolderSeen)) {
			n("DeltaMarkFolderSeen");
			return b("MessengerState.bs").send(b("bs_caml_option").some(a), [b("bs_block").__(0, [b("bs_block").__(66, [c])])])
		} else if (b("bs_caml_obj").caml_equal(c["class"], b("MercurySyncDeltaTypes").ThreadFolder)) return Z(a, b("bs_block").__(20, [c]));
		else return 0
	}
	f.transform = a
}), null);
__d("JSSet.bs", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		return Array.from(a.values())
	}
	f.values = a
}), null);
__d("MercuryTagHelper", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.get = a;

	function a(a, b) {
		a = a.find(function (a) {
			return a != null ? a.startsWith(b) : !1
		});
		return a == null ? a : a.substr(a.indexOf(":") + 1)
	}
}), null);
__d("EmojiLikeUtils", ["EmojiLikeConstants", "MercuryTagHelper"], (function (a, b, c, d, e, f) {
	"use strict";
	f.setEmojiSize = a;
	f.setEmojiSource = c;
	f.isEmojiLike = d;
	f.getEmojiSize = i;

	function a(a, b) {
		!a.tags ? a.tags = [g(b)] : a.tags.push(g(b));
		return a
	}

	function g(a) {
		var c = b("EmojiLikeConstants").TAG_PREFIX_NEW;
		return c + ":" + a
	}

	function c(a, b) {
		!a.tags ? a.tags = [h(b)] : a.tags.push(h(b));
		return a
	}

	function h(a) {
		return b("EmojiLikeConstants").SOURCE_TAG_PREFIX + ":" + a
	}

	function d(a) {
		return i(a) != null
	}

	function i(a) {
		if (!a.tags) return null;
		var c = b("MercuryTagHelper").get(a.tags, b("EmojiLikeConstants").TAG_PREFIX_NEW);
		return c ? c : b("MercuryTagHelper").get(a.tags, b("EmojiLikeConstants").TAG_PREFIX_OLD)
	}
}), null);
__d("MercuryAttachment", ["cx", "EmojiLikeUtils", "MercuryAudioType"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = function (a) {
			return a === Object(a)
		},
		i = "_1c_u",
		j = new Set(["animated_image", "photo", "video", "third_party_sticker"]),
		k = {
			getAttachIconClass: function (a) {
				switch (a) {
					case "attach:image":
						return "_y2-";
					case "attach:video":
						return "_y2_";
					case "attach:music":
						return "_y30";
					case "attach:voice":
						return "_y31";
					case "attach:text":
						return "_y32";
					case "attach:pdf":
						return "_1k9k";
					case "attach:richtext":
						return "_1k9l";
					case "attach:spreadsheet":
						return "_1k9p";
					case "attach:presentation":
						return "_1k9r";
					case "attach:archive":
						return "_1k9s";
					case "attach:ms:word":
						return "_y33";
					case "attach:ms:xls":
						return "_y34";
					case "attach:ms:ppt":
						return "_y35"
				}
				return "_y36"
			},
			getAttachIconClassByMime: function (a) {
				return this.getAttachIconClass(this.getAttachTypeByMime(a))
			},
			getAttachTypeByMime: function (a) {
				if (!a) return "attach:unknown";
				if (a.startsWith("image")) return "attach:image";
				else if (a.startsWith("video")) return "attach:video";
				else if (a.startsWith("audio")) return "attach:music";
				else if (a.startsWith("text/plain")) return "attach:text";
				else if (a == "text/pdf" || a == "application/pdf" || a == "application/vnd.pdf" || a == "application/x-pdf") return "attach:pdf";
				else if (a == "text/richtext" || a == "application/rtf" || a == "application/x-iwork-pages-sffkey") return "attach:richtext";
				else if (a == "text/csv" || a == "application/x-iwork-numbers-sffkey") return "attach:spreadsheet";
				else if (a == "application/x-iwork-keynote-sffkey") return "attach:presentation";
				else if (a == "application/vnd.ms-cab-compressed" || a == "application/x-7z-compressed" || a == "application/x-ace-compressed" || a == "application/x-apple-diskimage" || a == "application/x-compress" || a == "application/x-compressed" || a == "application/x-gzip" || a == "application/x-rar-compressed" || a == "application/x-tar" || a == "application/x-zip-compressed" || a == "application/zip") return "attach:archive";
				else if (a == "application/msword" || a.startsWith("application/vnd.ms-word") || a.startsWith("application/vnd.openxmlformats-officedocument.wordprocessingml")) return "attach:ms:word";
				else if (a.startsWith("application/vnd.ms-excel") || a.startsWith("application/vnd.openxmlformats-officedocument.spreadsheetml")) return "attach:ms:xls";
				else if (a.startsWith("application/vnd.ms-powerpoint") || a.startsWith("application/vnd.openxmlformats-officedocument.presentationml")) return "attach:ms:ppt";
				else return "attach:unknown"
			},
			convertRaw: function (a) {
				var b = [];
				for (var c = 0; c < a.length; c++) {
					var d = a[c];
					if (d.attach_type === "photo") b.push(d);
					else if (d.filename) {
						var e = k.getAttachTypeByMime(d.filetype),
							f = {};
						f.attach_type = "file";
						f.name = d.filename;
						f.icon_type = e;
						f.url = "";
						b.push(f)
					}
				}
				return b
			},
			get: function (a) {
				var c = [];
				a.attachments ? c = a.attachments : a.raw_attachments && (c = this.convertRaw(a.raw_attachments));
				var d = b("EmojiLikeUtils").getEmojiSize(a);
				d && (c = c.concat([{
					attach_type: "emoji_like",
					size: d
				}]));
				if (!(a.attachments && a.attachments.length > 0)) {
					if (a.sticker_id) return c.concat([{
						attach_type: "sticker"
					}]);
					if (a.preview_attachments && a.preview_attachments.length > 0) return c.concat(a.preview_attachments)
				}
				return c
			},
			resizeContain: function (a, b) {
				var c = a.width / a.height,
					d = b.width / b.height;
				if (d < c) return {
					width: Math.ceil(Math.min(a.height * d, b.width)),
					height: Math.ceil(Math.min(a.height, b.height))
				};
				else return {
					width: Math.ceil(Math.min(a.width, b.width)),
					height: Math.ceil(Math.min(a.width / d, b.height))
				}
			},
			isBubblePreferred: function (a) {
				return this.isFileAttachment(a)
			},
			isPhotoAttachment: function (a) {
				return (this == null ? void 0 : this.getAttachTypeByMime) && this.getAttachTypeByMime(a.mime_type) === "attach:pdf" ? !1 : !!(a.attach_type == "photo" || a.attach_type == "animated_image" || a.attach_type == "third_party_sticker" || a.attach_type == "file" && a.preview_url)
			},
			isPhotoGroupAttachment: function (a) {
				return j.has(a.attach_type)
			},
			isSinglePhotoGroupAttachment: function (a) {
				return !!(a.attachments && a.attachments.length === 1 && a.attachments[0] && this.isPhotoGroupAttachment(a.attachments[0]))
			},
			isVideoAttachment: function (a) {
				return a.attach_type == "video"
			},
			isShareAttachment: function (a) {
				return a.attach_type == "share"
			},
			isFileAttachment: function (a) {
				return a.attach_type == "file"
			},
			isErrorAttachment: function (a) {
				return a.attach_type == "error"
			},
			isStickerAttachment: function (a) {
				return a.attach_type == "sticker"
			},
			isEmojiLikeAttachment: function (a) {
				return a.attach_type === "emoji_like"
			},
			isVoiceAttachment: function (a) {
				return !a.metadata ? !1 : a.metadata.type === b("MercuryAudioType").AudioClip || a.metadata.type === b("MercuryAudioType").VoiceMessageWithTranscript
			},
			hasAttribution: function (a) {
				return !!a.app_attribution
			},
			isLightweightActionAttachment: function (a) {
				return !!(k.isShareAttachment(a) && a.share && a.share.target != null && a.share.target.lwa_type != null)
			},
			isSingleVideoAttachment: function (a) {
				var b = this;
				a = this.get(a).filter(h).filter(function (a) {
					return b.isVideoAttachment(a)
				});
				return a.length === 1
			},
			isSharedVideoAttachment: function (a) {
				a = a.attach_type === "share" && a.share && a.share.subattachments && a.share.subattachments[0];
				return !!(a && a.target && a.target.video_id)
			},
			isGenieSharedVideoAttachment: function (a) {
				return !!(a.attach_type === "share" && a.share && a.share.style_list.indexOf("genie_message") > -1 && a.share.target && a.share.target.attachment && this.isSharedVideoAttachment(a.share.target.attachment))
			},
			isSharedVideoAttachmentMessage: function (a) {
				var b = this;
				a = this.get(a).filter(h).filter(function (a) {
					return b.isSharedVideoAttachment(a) || b.isGenieSharedVideoAttachment(a)
				});
				return a.length === 1
			},
			getVideoElem: function (a, b) {
				b = b.getMessageElement(a);
				if (!b) return null;
				a = b.getElementsByClassName(i);
				return a && a.length ? a[0] : b
			}
		};
	e.exports = k
}), null);
__d("MercuryDisplayTimeFilterMessageRenderer", ["fbt"], (function (a, b, c, d, e, f, g) {
	"use strict";
	a = {
		renderFilteredContent: function (a) {
			if (a.is_filtered_content_bh) return g._("Tin nh\u1eafn n\u00e0y \u0111\u00e3 b\u1ecb g\u1ee1 do ch\u1ee9a li\u00ean k\u1ebft vi ph\u1ea1m Ti\u00eau chu\u1ea9n c\u1ed9ng \u0111\u1ed3ng c\u1ee7a ch\u00fang t\u00f4i.");
			if (a.is_filtered_content_account) return g._("Tin nh\u1eafn n\u00e0y \u0111\u00e3 t\u1ea1m th\u1eddi b\u1ecb g\u1ee1 v\u00ec t\u00e0i kho\u1ea3n c\u1ee7a ng\u01b0\u1eddi g\u1eedi c\u1ea7n ph\u1ea3i \u0111\u01b0\u1ee3c x\u00e1c minh.");
			if (a.is_filtered_content_quasar) return g._("Tin nh\u1eafn n\u00e0y \u0111\u00e3 b\u1ecb g\u1ee1 v\u00ec c\u00f3 ch\u1ee9a n\u1ed9i dung b\u1ecb ch\u1eb7n ho\u1eb7c c\u00f3 h\u1ea1i.");
			return a.is_filtered_content_invalid_app ? g._("Tin nh\u1eafn n\u00e0y \u0111\u00e3 b\u1ecb g\u1ee1 v\u00ec \u1ee9ng d\u1ee5ng g\u1eedi tin nh\u1eafn b\u1ecb ch\u1eb7n g\u1eedi tin.") : g._("Tin nh\u1eafn n\u00e0y \u0111\u00e3 t\u1ea1m th\u1eddi b\u1ecb g\u1ee1 v\u00ec t\u00e0i kho\u1ea3n c\u1ee7a ng\u01b0\u1eddi g\u1eedi c\u1ea7n \u0111\u01b0\u1ee3c x\u00e1c minh ho\u1eb7c t\u00e0i kho\u1ea3n \u0111\u00f3 \u0111\u00e3 b\u1ecb x\u00e1c \u0111\u1ecbnh l\u00e0 l\u1ea1m d\u1ee5ng.")
		}
	};
	e.exports = a
}), null);
__d("MercuryFilters.bs", [], (function (a, b, c, d, e, f) {
	"use strict";
	var g = "unread";

	function a(a) {
		return [g]
	}

	function b(a) {
		return a === g
	}
	c = "all";
	d = "groups";
	e = "named";
	var h = "unnamed",
		i = "WORK_UNSYNCED_CHAT";
	f.all = c;
	f.unread = g;
	f.groups = d;
	f.named = e;
	f.unnamed = h;
	f.unsyncedChat = i;
	f.getSupportedFilters = a;
	f.isSupportedFilter = b
}), null);
__d("MercuryLocalIDs", ["randomInt"], (function (a, b, c, d, e, f) {
	"use strict";
	f.generateThreadID = a;
	f.generateOfflineThreadingID = g;

	function a(a) {
		return "root:" + g(a)
	}

	function g(a) {
		a = a != null ? a : Date.now();
		var c = b("randomInt")(0, 4294967295);
		c = ("0000000000000000000000" + c.toString(2)).slice(-22);
		a = a.toString(2) + c;
		return h(a.slice(-63))
	}

	function h(a) {
		var b = "";
		a = a;
		while (a != "0") {
			var c = 0,
				d = "";
			for (var e = 0; e < a.length; e++) c = 2 * c + parseInt(a[e], 10), c >= 10 ? (d += "1", c -= 10) : d += "0";
			b = c.toString() + b;
			a = d.slice(d.indexOf("1"))
		}
		return b
	}
}), null);
__d("MercuryMessageClientState", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		DO_NOT_SEND_TO_SERVER: "do_not_send_to_server",
		SEND_TO_SERVER: "send_to_server"
	});
	b = a;
	e.exports = b
}), null);
__d("MercuryMessageIDs.bs", ["bs_curry", "bs_js_dict", "KeyedCallbackManager"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = new(b("KeyedCallbackManager"))();

	function a(a, c) {
		var d = a.filter(function (a) {
				return a.indexOf("id") === -1
			}),
			e = function (d) {
				return b("bs_curry")._1(c, a.map(function (a) {
					var c = b("bs_js_dict").get(d, a);
					if (c !== void 0) return c;
					else return a
				}))
			};
		return g.executeOrEnqueue(d, e)
	}

	function c(a, b) {
		g.setResource(a, b);
		return 0
	}
	f.getServerIDs = a;
	f.addServerID = c
}), null);
__d("MercurySingletonProvider", ["CurrentUser"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a(a) {
			this.$1 = {}, this.$2 = a
		}
		var c = a.prototype;
		c.getForFBID = function (a) {
			this.$1[a] || (this.$1[a] = new this.$2(a));
			return this.$1[a]
		};
		c.get = function () {
			return this.getForFBID(b("CurrentUser").getID())
		};
		c.resetAll = function () {
			var a = this.$1;
			this.$1 = {};
			return a
		};
		a.mock = function (a) {
			throw new Error("MercurySingletonProvider.mock() must only be used in tests.")
		};
		return a
	}();
	e.exports = a
}), null);
__d("MessengerMQTTConnectionEvents", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = "messenger-mqtt-delta";
	f.DELTA_EVENT = a;
	b = "messenger-mqtt-stream-disconnect";
	f.STREAM_DISCONNECT = b;
	c = "messenger-mqtt-stream-connecting";
	f.STREAM_CONNECTING = c;
	d = "messenger-mqtt-stream-connect";
	f.STREAM_CONNECT = d;
	e = "Connected";
	f.STATE_CONNECTED = e;
	a = "Disconnected";
	f.STATE_DISCONNECTED = a;
	b = "Connecting";
	f.STATE_CONNECTING = b;
	c = "messenger-mqtt-typ";
	f.TYP = c
}), null);
__d("MercurySyncEventsProxy", ["Arbiter", "ChannelConstants", "LogHistory", "MercurySingletonProvider", "MessengerMQTTConnectionEvents"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("LogHistory").getInstance("mercury_event_proxy"),
		h = {
			DELTA: "DELTA",
			FAKE_DFF: "FAKE_DFF",
			FLOW: "FLOW",
			FLOW_REJECT: "FLOW_REJECT",
			INIT: "MercurySyncDeltaHandler/initSeqID",
			CONNECTED: "CONNECTED",
			RECONNECTING: "RECONNECTING",
			SHUTDOWN: "SHUTDOWN",
			TYP: "TYP"
		};
	a = function () {
		a.getArbiterTypeForFBID = function (a, b) {
			return a + "/" + b
		};
		a.getForFBID = function (a) {
			return i.getForFBID(a)
		};
		a.get = function () {
			return i.get()
		};

		function a(a) {
			this.$2 = [], this.$1 = a, this.init()
		}
		var c = a.prototype;
		c.getArbiterType = function (b) {
			return a.getArbiterTypeForFBID(this.$1, b)
		};
		c.init = function () {
			var a = this,
				c, d;
			this.$2.forEach(function (a) {
				return b("Arbiter").unsubscribe(a)
			});
			this.$2 = [(c = b("Arbiter")).subscribe((d = b("MessengerMQTTConnectionEvents")).DELTA_EVENT, function (c) {
				for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
				return b("Arbiter").inform.apply(b("Arbiter"), [a.getArbiterType(h.DELTA)].concat(e))
			}), c.subscribe(d.STREAM_CONNECT, function (c) {
				for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
				return b("Arbiter").inform.apply(b("Arbiter"), [a.getArbiterType(h.CONNECTED)].concat(e))
			}), c.subscribe(d.STREAM_DISCONNECT, function (c) {
				for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
				return b("Arbiter").inform.apply(b("Arbiter"), [a.getArbiterType(h.SHUTDOWN)].concat(e))
			}), c.subscribe(d.STREAM_CONNECTING, function (c) {
				for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
				return b("Arbiter").inform.apply(b("Arbiter"), [a.getArbiterType(h.RECONNECTING)].concat(e))
			}), c.subscribe(b("ChannelConstants").getArbiterType(b("ChannelConstants").FAKE_DFF), function (c) {
				g.debug("fakedff", JSON.stringify({
					fbid: a.$1
				}));
				for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
				b("Arbiter").inform.apply(b("Arbiter"), [a.getArbiterType(h.FAKE_DFF)].concat(e))
			}), c.subscribe(d.TYP, function (c) {
				for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
				b("Arbiter").inform.apply(b("Arbiter"), [a.getArbiterType(h.TYP)].concat(e))
			})]
		};
		return a
	}();
	e.exports = a;
	a.Events = h;
	var i = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MercuryThreadInfo", ["MercuryIDs"], (function (a, b, c, d, e, f) {
	"use strict";
	f.canReply = a;
	f.getMuteSetting = g;
	f.isEmptyLocalThread = h;
	f.isMuted = c;
	f.areMentionsMuted = d;
	f.areReactionsMuted = e;
	f.isNewEmptyLocalThread = i;
	f.showSettingsMenu = j;
	f.isColdOpen = k;

	function a(a) {
		return !!(a.is_subscribed && (a.can_reply === void 0 || a.can_reply) && !a.has_email_participant && !a.read_only)
	}

	function g(a) {
		return a.mute_until == null ? void 0 : a.mute_until
	}

	function h(a) {
		return b("MercuryIDs").tokenize(a.thread_id).type === "root" && !a.timestamp
	}

	function c(a) {
		a = g(a);
		return a != null && (a > Date.now() / 1e3 || a === -1)
	}

	function d(a) {
		return a.mentions_mute_mode === 1
	}

	function e(a) {
		return a.reactions_mute_mode === 1
	}

	function i(a) {
		return !!(h(a) && a.participants && a.participants.length === 0)
	}

	function j(a) {
		return !!((a.can_reply || !a.cannot_reply_reason || a.cannot_reply_reason.toLowerCase() === "blocked" || a.cannot_reply_reason.toLowerCase() === "messenger_blockee") && !a.has_email_participant && !a.read_only && a.is_subscribed)
	}

	function k(a) {
		return !!(a.is_canonical_user && (a.message_count === 0 || !a.timestamp))
	}
}), null);
__d("MercuryThreadInformer", ["ArbiterMixin", "LogHistory", "MercuryAssert", "MercurySingletonProvider", "mixin"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("LogHistory").getInstance("mercury_informer");
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);
		c.get = function () {
			return h.get()
		};
		c.getForFBID = function (a) {
			return h.getForFBID(a)
		};

		function c(b) {
			var c;
			c = a.call(this) || this;
			c.$MercuryThreadInformer1 = b;
			c.$MercuryThreadInformer2 = {};
			c.$MercuryThreadInformer3 = {};
			c.$MercuryThreadInformer4 = {};
			c.$MercuryThreadInformer5 = {};
			c.$MercuryThreadInformer6 = !1;
			c.$MercuryThreadInformer7 = !1;
			c.$MercuryThreadInformer8 = !1;
			c.$MercuryThreadInformer9 = !1;
			c.$MercuryThreadInformer10 = {};
			c.$MercuryThreadInformer11 = {};
			c.$MercuryThreadInformer12 = {};
			c.$MercuryThreadInformer13 = {};
			c.$MercuryThreadInformer14 = 0;
			return c
		}
		var d = c.prototype;
		d.informNewMessage = function (a, b) {
			this.inform("new-message", {
				threadID: a,
				message: b
			})
		};
		d.informNewLogMessage = function (a, b) {
			this.inform("new-log-message", {
				threadID: a,
				message: b
			})
		};
		d.updatedThread = function (a) {
			this.$MercuryThreadInformer3[a] = !0, this.$MercuryThreadInformer15()
		};
		d.invalidatedThread = function (a) {
			this.$MercuryThreadInformer4[a] = !0, this.$MercuryThreadInformer15()
		};
		d.deletedThread = function (a) {
			this.$MercuryThreadInformer2[a] = !0, this.$MercuryThreadInformer15()
		};
		d.updatedThreadlist = function () {
			this.$MercuryThreadInformer6 = !0, this.$MercuryThreadInformer15()
		};
		d.updatedUnseenState = function () {
			this.$MercuryThreadInformer7 = !0, this.$MercuryThreadInformer15()
		};
		d.updatedUnseenTimestamp = function () {
			this.$MercuryThreadInformer8 = !0, this.$MercuryThreadInformer15()
		};
		d.updatedUnreadState = function () {
			this.$MercuryThreadInformer9 = !0, this.$MercuryThreadInformer15()
		};
		d.changedThreadReadState = function (a, b, c) {
			(!this.$MercuryThreadInformer5[a] || this.$MercuryThreadInformer5[a].timestamp < c) && (this.$MercuryThreadInformer5[a] = {
				mark_as_read: b,
				timestamp: c
			}), this.$MercuryThreadInformer15()
		};
		d.receivedMessage = function (a) {
			b("MercuryAssert").isThreadID(a.thread_id);
			var c = a.thread_id;
			this.$MercuryThreadInformer10[c] || (this.$MercuryThreadInformer10[c] = []);
			this.$MercuryThreadInformer10[c].push(a);
			this.updatedThread(c)
		};
		d.reorderedMessages = function (a, b) {
			this.$MercuryThreadInformer11[a] = {
				source: b
			}, this.$MercuryThreadInformer15()
		};
		d.updatedMessage = function (a, b, c) {
			this.$MercuryThreadInformer12[a] || (this.$MercuryThreadInformer12[a] = {}), this.$MercuryThreadInformer12[a][b] = {
				source: c
			}, this.updatedThread(a)
		};
		d.deletedMessage = function (a, b, c, d) {
			this.$MercuryThreadInformer13[a] || (this.$MercuryThreadInformer13[a] = {}), this.$MercuryThreadInformer13[a][b] = {
				attachmentIDs: d,
				source: c
			}, this.updatedThread(a)
		};
		d.synchronizeInforms = function (a) {
			this.$MercuryThreadInformer14++;
			try {
				a()
			} catch (a) {
				throw a
			} finally {
				this.$MercuryThreadInformer14--, this.$MercuryThreadInformer15()
			}
		};
		d.listen = function (a, b) {
			return this.subscribe("threads-updated", function (c, d) {
				d[a] && b(a)
			})
		};
		d.$MercuryThreadInformer15 = function () {
			if (!this.$MercuryThreadInformer14) {
				var a = this.$MercuryThreadInformer2,
					b = this.$MercuryThreadInformer3,
					c = this.$MercuryThreadInformer4,
					d = this.$MercuryThreadInformer5,
					e = this.$MercuryThreadInformer6,
					f = this.$MercuryThreadInformer7,
					g = this.$MercuryThreadInformer8,
					h = this.$MercuryThreadInformer9,
					i = this.$MercuryThreadInformer10,
					j = this.$MercuryThreadInformer11,
					k = this.$MercuryThreadInformer12,
					l = this.$MercuryThreadInformer13;
				this.$MercuryThreadInformer2 = {};
				this.$MercuryThreadInformer3 = {};
				this.$MercuryThreadInformer4 = {};
				this.$MercuryThreadInformer5 = {};
				this.$MercuryThreadInformer6 = !1;
				this.$MercuryThreadInformer7 = !1;
				this.$MercuryThreadInformer8 = !1;
				this.$MercuryThreadInformer9 = !1;
				this.$MercuryThreadInformer10 = {};
				this.$MercuryThreadInformer11 = {};
				this.$MercuryThreadInformer12 = {};
				this.$MercuryThreadInformer13 = {};
				var m = Object.keys(b);
				(m.length || e) && this.inform("threadlist-updated", m);
				m.length && this.$MercuryThreadInformer16("threads-updated", b);
				for (var e in c) {
					this.$MercuryThreadInformer16("thread-invalidated", c);
					break
				}
				for (var e in d) {
					this.$MercuryThreadInformer16("thread-read-changed", d);
					break
				}
				for (e in a) {
					this.$MercuryThreadInformer16("threads-deleted", a);
					break
				}
				f && this.$MercuryThreadInformer16("unseen-updated", null);
				g && this.$MercuryThreadInformer16("unseen-timestamp-updated", null);
				h && this.$MercuryThreadInformer16("unread-updated", null);
				for (e in i) {
					this.$MercuryThreadInformer16("messages-received", i);
					break
				}
				for (e in j) {
					this.$MercuryThreadInformer16("messages-reordered", j);
					break
				}
				for (e in k) {
					this.$MercuryThreadInformer16("messages-updated", k);
					break
				}
				for (e in l) {
					this.$MercuryThreadInformer16("messages-deleted", l);
					break
				}
			}
		};
		d.$MercuryThreadInformer16 = function (a, b) {
			a === "threads-updated" && g.debug(a, JSON.stringify(b)), this.inform(a, b)
		};
		return c
	}(b("mixin")(b("ArbiterMixin")));
	e.exports = a;
	var h = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MessengerDesktopNotificationPermissions", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		DEFAULT: "default",
		DENIED: "denied",
		GRANTED: "granted"
	});
	e.exports = a
}), null);
__d("MessengerDesktopNotifications", ["MessengerDesktopNotificationPermissions", "Run", "UserAgent", "WorkplaceChatHelper"], (function (a, b, c, d, e, f) {
	"use strict";
	f.isSupported = c;
	f.checkPermission = d;
	f.hasDefaultSound = e;
	f.isDenied = i;
	f.isGranted = j;
	f.requestPermission = k;
	f.showNotification = l;
	f.removeNotification = m;
	var g = 5e3,
		h = new Map();

	function a() {
		h.forEach(function (a, b, c) {
			a.close && a.close()
		})
	}
	c = null;
	f._closeTimer = c;

	function c() {
		return !!window.Notification
	}

	function d() {
		if (window.Notification) return window.Notification.permission
	}

	function e() {
		return b("UserAgent").isBrowser("FireFox") && b("UserAgent").isPlatform("Mac OS X")
	}

	function i() {
		return this.checkPermission() === b("MessengerDesktopNotificationPermissions").DENIED
	}

	function j() {
		return this.checkPermission() === b("MessengerDesktopNotificationPermissions").GRANTED
	}

	function k(a) {
		window.Notification && window.Notification.requestPermission(a)
	}

	function l(a) {
		if (this.isGranted()) {
			var c = window.Notification ? new window.Notification(a.title, {
				body: a.body,
				icon: a.icon,
				tag: a.tag,
				silent: a.silent
			}) : {};
			h.set(a.tag, c);
			a.onShow && a.onShow();
			c.onclick = function () {
				b("WorkplaceChatHelper").isDesktopChatApp() && b("WorkplaceChatHelper").showWindow(), a.onClick()
			};
			c.onclose = function () {
				h["delete"](a.tag)
			};
			this._closeTimer = setTimeout(function () {
				c.close()
			}, a.closeTime || g);
			return c
		} else return null
	}

	function m(a) {
		a = h.get(a);
		a && a.close()
	}
	b("Run").onUnload(a)
}), null);
__d("MessengerFolders.bs", ["gkx", "qex", "MessagingThreadType", "MercuryFoldersConfig", "MessengerEnvironment"], (function (a, b, c, d, e, f) {
	"use strict";
	d = b("qex")._("998180") && b("MessengerEnvironment").messengerdotcom ? ["inbox", "pending", "other", "action:archived", "marketplace_folder"] : ["inbox", "pending", "other", "action:archived"];
	var g = d.filter(function (a) {
		if (a === "pending") return !b("MercuryFoldersConfig").hide_message_filtered;
		else if (a === "other") return !b("MercuryFoldersConfig").hide_message_requests;
		else return !0
	});

	function a(a) {
		return [].concat(g)
	}

	function c(a) {
		if (a.is_archived) return "action:archived";
		else {
			var c = a.thread_type;
			if (!(c == null) && c === b("MessagingThreadType").MARKETPLACE && b("gkx")("965951")) return "marketplace_folder";
			else return a.folder
		}
	}
	f.getSupportedFolders = a;
	f.getFromMeta = c
}), null);
__d("MessengerPersonas.bs", ["bs_js_dict", "bs_js_null_undefined"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = {};

	function a(a) {
		if (a == null) return 0;
		else {
			var c = b("bs_js_dict").get(g, a.id);
			if (c !== void 0) return 0;
			else {
				g[a.id] = a;
				return 0
			}
		}
	}

	function c(a) {
		return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(g, a))
	}
	f.personas = g;
	f.addPersona = a;
	f.getNow = c
}), null);
__d("MessengerSharedMediaActionsLoader", ["JSResource"], (function (a, b, c, d, e, f) {
	"use strict";
	f.deletePhotos = a;

	function a(a, c) {
		b("JSResource").loadAll([b("JSResource")("MessengerSharedMediaActions").__setRef("MessengerSharedMediaActionsLoader")], function (b) {
			b.deletePhotos(a, c)
		})
	}
}), null);
__d("MessengerSharedPhotosVideosBaseData.bs", ["bs_js_dict"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = {};

	function a(a) {
		return b("bs_js_dict").get(g, a)
	}

	function h(a, b) {
		g[a] = b;
		return 0
	}

	function c(a, c) {
		var d = b("bs_js_dict").get(g, a);
		if (d !== void 0) {
			d = d;
			var e = d.actualData;
			if (e !== void 0) {
				e = e;
				var f = e.edges;
				if (f.length !== 0) {
					f = f.filter(function (a) {
						return !c.some(function (b) {
							return b === a.node.legacy_attachment_id
						})
					});
					d = d.fetchingState;
					f = {
						edges: f,
						newestItemCursor: e.newestItemCursor,
						oldestItemCursor: e.oldestItemCursor,
						hasNextPage: e.hasNextPage
					};
					e = {
						fetchingState: d,
						actualData: f
					};
					return h(a, e)
				} else return 0
			} else return 0
		} else return 0
	}
	f.data = g;
	f.get = a;
	f.set = h;
	f.localRemove = c
}), null);
__d("MessengerJoinableModeType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		PRIVATE: 0,
		JOINABLE: 1
	});
	e.exports = a
}), null);
__d("MercuryVanityIDMap.bs", ["bs_js_dict", "MercuryAssert", "bs_js_null_undefined"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = {},
		h = {};

	function a(a) {
		return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(g, a.toLowerCase()))
	}

	function c(a) {
		return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(h, a))
	}

	function d(a) {
		return b("bs_js_dict").get(h, a) !== void 0
	}

	function e(a) {
		return b("bs_js_dict").get(g, a.toLowerCase()) !== void 0
	}

	function i(a, c) {
		b("MercuryAssert").isParticipantID(c);
		a = a.toLowerCase();
		g[a] = c;
		h[c] = a;
		return 0
	}
	f.vanityToID = g;
	f.idToVanity = h;
	f.getID = a;
	f.getVanity = c;
	f.hasID = d;
	f.hasVanity = e;
	f.set = i
}), null);
__d("MessengerParticipants.bs", ["fbt", "Promise", "FBID.bs", "bs_curry", "bs_js_dict", "bs_caml_obj", "BanzaiODS", "immutable", "bs_belt_Array", "MercuryIDs", "bs_caml_option", "CurrentUser", "MercuryAssert", "ImmutableObject", "bs_js_null_undefined", "MercuryVanityIDMap.bs", "MercuryParticipantTypes", "MessengerParticipantsFetcher.bs"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = {
			contents: 1
		},
		i = {},
		j = new Set(),
		k = {},
		l = function (b, a) {
			delete b[a];
			return 0
		},
		m = function (b, a) {
			delete b[a];
			return 0
		};

	function n(a) {
		if (b("CurrentUser").isWorkUser()) return g._("Ng\u01b0\u1eddi d\u00f9ng Workplace");
		else return g._("Ng\u01b0\u1eddi d\u00f9ng Facebook")
	}

	function o(a) {
		var c = a.user_type;
		if (c == null || !(b("bs_caml_obj").caml_equal(c, b("MercuryParticipantTypes").USER) || b("bs_caml_obj").caml_equal(c, b("MercuryParticipantTypes").FRIEND))) return a;
		else {
			c = a.href;
			var d = a.vanity;
			if (c == null && d == null) {
				c = n(0);
				return Object.assign(a, {
					name: c,
					short_name: c
				})
			} else return a
		}
	}

	function a(a) {
		Object.keys(i).forEach(function (a) {
			return m(i, a)
		});
		return 0
	}

	function p(a) {
		var c = a.id,
			d = a.vanity;
		d == null || b("MercuryVanityIDMap.bs").set(d, c);
		d = b("bs_js_dict").get(i, c);
		if (d !== void 0) {
			i[c] = b("ImmutableObject").set(b("bs_caml_option").valFromOption(d), a);
			return 0
		} else {
			i[c] = new(b("ImmutableObject"))(o(a));
			return 0
		}
	}

	function c(a) {
		a = a.participants;
		if (a == null) return 0;
		else {
			a.map(p);
			return 0
		}
	}

	function d(a) {
		a = a.preloaded_participants;
		if (a == null) return 0;
		else {
			a.map(p);
			return 0
		}
	}

	function q(a, c) {
		var d = {},
			e = [];
		a.forEach(function (a) {
			var c = b("bs_js_dict").get(i, a);
			if (c !== void 0) {
				d[a] = b("bs_caml_option").valFromOption(c);
				return 0
			} else {
				e.push(a);
				return 0
			}
		});
		if (e.length !== 0) {
			var f = [];
			e.forEach(function (a) {
				if (j.has(a)) return 0;
				else {
					var c = b("MercuryIDs").getUserIDFromParticipantID(a);
					if (c == null) return 0;
					else {
						f.push(c);
						j.add(a);
						return 0
					}
				}
			});
			var g = h.contents.toString();
			k[g] = [a, c];
			h.contents = h.contents + 1 | 0;
			f.length > 0 && b("MessengerParticipantsFetcher.bs").$$fetch({
				ids: f
			}).then(function (a) {
				a.forEach(function (a) {
					i[a.id] = new(b("ImmutableObject"))(a);
					var c = a.id;
					a = a.vanity;
					a == null || b("MercuryVanityIDMap.bs").set(a, c);
					j["delete"](c);
					return 0
				});
				Object.keys(k).forEach(function (a) {
					var d = b("bs_js_dict").get(k, a);
					if (d !== void 0) {
						d = d;
						var e = d[0],
							c = {};
						e.forEach(function (d) {
							var a = b("bs_js_dict").get(i, d);
							if (a !== void 0) {
								c[d] = b("bs_caml_option").valFromOption(a);
								return 0
							} else return 0
						});
						if (Object.keys(c).length === e.length) {
							l(k, a);
							return d[1](c)
						} else return 0
					} else return 0
				});
				b("BanzaiODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_participant.success");
				return b("Promise").resolve(0)
			})["catch"](function (a) {
				b("BanzaiODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_participant.failure");
				return b("Promise").resolve(0)
			});
			return g
		} else {
			c(d);
			return null
		}
	}

	function e(a, c) {
		b("MercuryAssert").isParticipantID(a);
		return q([a], function (d) {
			d = b("bs_js_dict").get(d, a);
			if (d !== void 0) return b("bs_curry")._1(c, b("bs_caml_option").valFromOption(d));
			else return 0
		})
	}

	function r(a) {
		return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(i, a))
	}

	function s(c, d) {
		var e = [],
			a = [];
		c.forEach(function (b) {
			var c = r(b);
			c == null ? e.push(b) : a.push(c);
			return 0
		});
		if (e.length !== 0) {
			var f = q(e, function (a) {
				return b("bs_curry")._1(d, b("bs_belt_Array").keepMap(c, function (a) {
					return b("bs_caml_option").nullable_to_opt(r(a))
				}))
			});
			return [a, f]
		} else return [a, null]
	}

	function t(a, c) {
		var d = function (a) {
				return b("immutable").Map(a.map(function (a) {
					return [a.id, a]
				}))
			},
			e = function (a) {
				return b("bs_curry")._1(c, d(a))
			};
		a = s(a, e);
		return [d(a[0]), a[1]]
	}

	function u(a) {
		return l(k, a)
	}

	function v(a) {
		if (a == null) return null;
		else if (b("MercuryVanityIDMap.bs").hasVanity(a)) {
			var c = b("MercuryVanityIDMap.bs").getID(a);
			if (c == null) return null;
			else return c
		} else {
			c = /^\d+$/;
			if (c.test(a)) {
				c = b("FBID.bs").ofString(a);
				if (c !== void 0) return b("MercuryIDs").getParticipantIDFromUserID(b("bs_caml_option").valFromOption(c));
				else return null
			} else return null
		}
	}
	f.reset = a;
	f.addParticipants = c;
	f.addPreloadedParticipants = d;
	f.getDefaultName = n;
	f.get = e;
	f.getNow = r;
	f.getMulti = q;
	f.getMultiEager = s;
	f.getMultiEagerMap = t;
	f.removeCallback = u;
	f.getIDFromVanityOrFBID = v
}), null);
__d("MessengerThreadUtils.bs", ["FBID.bs", "bs_caml_obj", "MercuryIDs", "CurrentUser", "ImmutableObject", "MessengerParticipants.bs", "MercuryParticipantTypes", "MessengerJoinableModeType", "MessengerObjectAssociationType", "MessengerThreadCannotReplyReason"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a, c) {
		return c.filter(function (c) {
			return b("bs_caml_obj").caml_notequal(c, a)
		}).length <= 1
	}

	function h(a, c, d, e) {
		var f = b("MercuryIDs").tokenize(c),
			h = f.type;
		f = f.value;
		var i = d.find(function (b) {
			return b !== a
		});
		i = i !== void 0 ? b("MessengerParticipants.bs").getNow(i) : null;
		var j = b("CurrentUser").isWorkUser();
		j = !(i == null) && j && i.work_foreign_entity_info == null && i.user_type === b("MercuryParticipantTypes").USER ? [!1, b("MessengerThreadCannotReplyReason").RECIPIENTS_INVALID] : [!0, null];
		return new(b("ImmutableObject"))({
			thread_id: c,
			participants: Array.from(d),
			preloaded_participants: [],
			admins: {},
			name: "",
			snippet: "",
			snippet_sender: null,
			unread_count: e == null ? 0 : e,
			message_count: 0,
			image_src: null,
			square_image_src: null,
			timestamp: 0,
			other_user_fbid: h === "user" ? b("FBID.bs").ofStringExn(f) : null,
			is_canonical_user: h === "user",
			is_canonical: g(a, d),
			is_subscribed: !0,
			is_other_recipient_page: !1,
			folder: "inbox",
			is_archived: !1,
			is_page_follow_up: !1,
			is_page_unresponded_thread: !1,
			admin_model_status: null,
			approval_mode: 0,
			approval_queue_ids: [],
			associated_object: null,
			can_reply: j[0],
			cannot_reply_reason: j[1],
			can_viewer_report: !1,
			comm_item_owners: null,
			comm_source_id: null,
			comm_status: null,
			comm_icon_type: [],
			composer_input_disabled: null,
			custom_like_icon: null,
			custom_nickname: null,
			customization_enabled: !1,
			description: null,
			ephemeral_ttl_mode: 0,
			footer_color: null,
			game_id: null,
			group_approval_queue: null,
			work_associated_group: null,
			pinned_messages: null,
			groups_sync_status: null,
			group_thread_subtype: null,
			has_email_participant: !1,
			has_montage: !1,
			unread_mentions_count: 0,
			header_color: null,
			is_canonical_neo_user: !1,
			is_from_weak_entry_point: !1,
			is_pin_protected: !1,
			is_pinned: !1,
			is_thread_queue_enabled: !1,
			joinable_mode: {
				mode: 0,
				link: ""
			},
			last_message_timestamp: 0,
			last_message_id: null,
			last_message_type: null,
			last_read_timestamp: 0,
			last_message_admin_text_type: null,
			last_message_unsendability_status: null,
			lightweight_event: null,
			lightweight_events: {},
			marketplace_thread_data: null,
			mentions_mute_mode: 0,
			mute_until: null,
			object_association_type: null,
			page_comm_item_id: null,
			page_thread_info: null,
			page_unsubscribe_status: !1,
			participant_add_mode: null,
			participants_event_status: null,
			reactions_mute_mode: 0,
			read_only: !1,
			recipients_loadable: !1,
			rtc_call_data: null,
			server_timestamp: 0,
			snippet_attachments: [],
			solid_color: null,
			subtitle: null,
			theme_id: null,
			reactions: void 0,
			thread_connectivity_data: null,
			thread_fbid: null,
			thread_pin_timestamp: null,
			thread_type: null,
			thread_unsendability_status: null,
			gradient_colors: [],
			accessibility_label: null,
			reverse_gradients_for_radial: null,
			joinable_link: null,
			linked_mentorship_programs: null,
			is_business_page_active: !1,
			thread_associated_job_applications: null,
			thread_associated_page_admin: null,
			graphql_token: null,
			conversion_detection_data: null,
			suggested_reply_data: null
		})
	}

	function a(a, c, d, e) {
		a = h(a, c, d, null);
		return b("ImmutableObject").set(a, {
			associated_object: e,
			name: e.name,
			joinable_mode: {
				mode: b("MessengerJoinableModeType").JOINABLE,
				link: ""
			},
			object_association_type: b("MessengerObjectAssociationType").GENERAL_CHAT
		})
	}
	f.isCanonicalFromInitialParticipants = g;
	f.createNewLocalThread = h;
	f.createNewLocalGroupGeneralThread = a
}), null);
__d("MessengerWebEvent", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		RENDER_FIRST_THREAD_CONTENT: "render_first_thread_content",
		SEND_MSG: "send_msg",
		SENT_MSG: "sent_msg",
		RENDER_INCOMING_MSG: "render_incoming_msg",
		RENDER_INBOX: "render_inbox",
		SHOW_SIDEBAR_CONTACTS: "show_sidebar_contacts",
		SEARCH_RENDER_RESULT: "search_render_result",
		CREATE_THREAD: "create_thread",
		SEARCH_CLICK_RESULT: "search_click_result",
		CHANGE_NICKNAME: "change_nickname",
		SUPPRESS_NEW_MESSAGE: "suppress_new_message",
		DELIVERY_RECEIPT: "delivery_receipt",
		OPEN_CHAT_TAB: "open_chat_tab",
		SWITCH_CHAT_TAB: "switch_chat_tab",
		MINIMIZE_CHAT_TAB: "minimize_chat_tab",
		LOAD_TAB_FROM_COOKIE: "load_tab_from_cookie",
		OPEN_THREAD_SETTINGS_MENU: "open_thread_settings_menu",
		OPEN_EMOJI_FLYOUT: "open_emoji_flyout",
		OPEN_STICKER_FLYOUT: "open_sticker_flyout",
		MINIMIZE_ALL_CHAT_TABS: "minimize_all_chat_tabs",
		CLOSE_ALL_CHAT_TABS: "close_all_chat_tabs",
		SELECT_FILE_FOR_UPLOAD: "select_file_for_upload",
		UPLOAD_FILE_SUCCESS: "upload_file_success",
		HIT_SEND_MESSAGE_WITH_FILES_PENDING: "hit_send_message_with_files_pending",
		HIT_SEND_MESSAGE_WITH_ALL_FILES_UPLOADED: "hit_send_message_with_all_files_uploaded",
		SEND_FILES: "send_files",
		RENDER_QUICK_REPLIES: "render_quick_replies",
		CLICK_ICEBKREAKER: "click_icebreaker"
	});
	e.exports = a
}), null);
__d("ParticipantId.bs", ["bs_string", "bs_belt_Id"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("bs_string").compare;
	c = b("bs_belt_Id").MakeComparable({
		cmp: a
	});
	d = c.cmp;
	f.cmp = d
}), null);
__d("RemoteAction.bs", ["bs_curry"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		return 0
	}

	function a(a) {
		return {
			send: g
		}
	}

	function c(a, b) {
		if (b.send === g) {
			b.send = a;
			return b
		}
	}

	function d(a) {
		a.send = g;
		return 0
	}

	function e(a, c) {
		return b("bs_curry")._1(a.send, c)
	}
	f.create = a;
	f.subscribe = c;
	f.unsubscribe = d;
	f.send = e
}), null);
__d("ThreadConnectivityStatus", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		UNCONNECTED: 0,
		IMPLICIT_OR_TWO_WAY_MESSAGING: 1
	});
	e.exports = a
}), null);
__d("ThreadConnectivityStatus.bs", ["bs_caml_obj", "ThreadConnectivityStatus", "ThreadConnectivityStatusGraphQLType.bs"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		if (b("bs_caml_obj").caml_equal(a, b("ThreadConnectivityStatus").UNCONNECTED)) return b("ThreadConnectivityStatusGraphQLType.bs").unconnected;
		else return b("ThreadConnectivityStatusGraphQLType.bs").implicitOrTwoWayMessaging
	}
	f.toGraphQLValue = a
}), null);
__d("ThreadId.bs", ["bs_string", "bs_belt_Id"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("bs_string").compare;
	c = b("bs_belt_Id").MakeComparable({
		cmp: a
	});
	d = c.cmp;
	f.cmp = d
}), null);
__d("XMercuryThreadLikeIconController", ["XController"], (function (a, b, c, d, e, f) {
	e.exports = b("XController").create("/mercury/like_icon/", {
		emoji: {
			type: "String",
			defaultValue: ""
		}
	})
}), null);
__d("bs_belt_SortArray", ["bs_curry", "bs_belt_Array"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a, b, c, d, e) {
		while (!0) {
			var f = c,
				g = b;
			if (f >= d) return f;
			else {
				var h = a[f];
				if (e(h, g)) {
					c = f + 1 | 0;
					b = h;
					continue
				} else return f
			}
		}
	}

	function h(a, b) {
		var c = a.length;
		if (c === 0 || c === 1) return c;
		else {
			var d = a[0],
				e = a[1];
			if (b(d, e)) {
				var f = a,
					h = e,
					i = 2,
					j = c,
					k = b;
				while (!0) {
					var l = i,
						m = h;
					if (l >= j) return l;
					else {
						var n = f[l];
						if (k(m, n)) {
							i = l + 1 | 0;
							h = n;
							continue
						} else return l
					}
				}
			} else if (b(e, d)) return -g(a, e, 2, c, b) | 0;
			else return 1
		}
	}

	function a(a, c) {
		return h(a, b("bs_curry").__2(c))
	}

	function i(a, b) {
		var c = a.length;
		if (c === 0) return !0;
		else {
			a = a;
			var d = 0;
			b = b;
			c = c - 1 | 0;
			while (!0) {
				var e = d;
				if (e === c) return !0;
				else if (b(a[e], a[e + 1 | 0]) <= 0) {
					d = e + 1 | 0;
					continue
				} else return !1
			}
		}
	}

	function c(a, c) {
		return i(a, b("bs_curry").__2(c))
	}

	function j(a, c, d, e, f, g, h, i, j) {
		d = c + d | 0;
		g = f + g | 0;
		var k = c;
		c = a[c];
		var l = f;
		f = e[f];
		i = i;
		while (!0) {
			var m = i,
				n = f,
				o = l,
				p = c,
				q = k;
			if (j(p, n) <= 0) {
				h[m] = p;
				p = q + 1 | 0;
				if (p < d) {
					i = m + 1 | 0;
					c = a[p];
					k = p;
					continue
				} else return b("bs_belt_Array").blitUnsafe(e, o, h, m + 1 | 0, g - o | 0)
			} else {
				h[m] = n;
				p = o + 1 | 0;
				if (p < g) {
					i = m + 1 | 0;
					f = e[p];
					l = p;
					continue
				} else return b("bs_belt_Array").blitUnsafe(a, q, h, m + 1 | 0, d - q | 0)
			}
		}
	}

	function k(a, c, d, e, f, g, h, i, j) {
		d = c + d | 0;
		g = f + g | 0;
		var k = c;
		c = a[c];
		var l = f;
		f = e[f];
		i = i;
		while (!0) {
			var m = i,
				n = f,
				o = l,
				p = c,
				q = k,
				r = j(p, n);
			if (r < 0) {
				h[m] = p;
				var s = q + 1 | 0,
					t = m + 1 | 0;
				if (s < d) {
					i = t;
					c = a[s];
					k = s;
					continue
				} else {
					b("bs_belt_Array").blitUnsafe(e, o, h, t, g - o | 0);
					return (t + g | 0) - o | 0
				}
			} else if (r === 0) {
				h[m] = p;
				s = q + 1 | 0;
				t = o + 1 | 0;
				r = m + 1 | 0;
				if (s < d && t < g) {
					i = r;
					f = e[t];
					l = t;
					c = a[s];
					k = s;
					continue
				} else if (s === d) {
					b("bs_belt_Array").blitUnsafe(e, t, h, r, g - t | 0);
					return (r + g | 0) - t | 0
				} else {
					b("bs_belt_Array").blitUnsafe(a, s, h, r, d - s | 0);
					return (r + d | 0) - s | 0
				}
			} else {
				h[m] = n;
				p = o + 1 | 0;
				t = m + 1 | 0;
				if (p < g) {
					i = t;
					f = e[p];
					l = p;
					continue
				} else {
					b("bs_belt_Array").blitUnsafe(a, q, h, t, d - q | 0);
					return (t + d | 0) - q | 0
				}
			}
		}
	}

	function d(a, c, d, e, f, g, h, i, j) {
		return k(a, c, d, e, f, g, h, i, b("bs_curry").__2(j))
	}

	function l(a, b, c, d, e, f, g, h, i) {
		c = b + c | 0;
		f = e + f | 0;
		var j = b;
		b = a[b];
		var k = e;
		e = d[e];
		h = h;
		while (!0) {
			var l = h,
				m = e,
				n = k,
				o = b,
				p = j;
			m = i(o, m);
			if (m < 0) {
				var q = p + 1 | 0;
				if (q < c) {
					b = a[q];
					j = q;
					continue
				} else return l
			} else if (m === 0) {
				g[l] = o;
				q = p + 1 | 0;
				m = n + 1 | 0;
				o = l + 1 | 0;
				if (q < c && m < f) {
					h = o;
					e = d[m];
					k = m;
					b = a[q];
					j = q;
					continue
				} else return o
			} else {
				p = n + 1 | 0;
				if (p < f) {
					e = d[p];
					k = p;
					continue
				} else return l
			}
		}
	}

	function e(a, c, d, e, f, g, h, i, j) {
		return l(a, c, d, e, f, g, h, i, b("bs_curry").__2(j))
	}

	function m(a, c, d, e, f, g, h, i, j) {
		d = c + d | 0;
		g = f + g | 0;
		var k = c;
		c = a[c];
		var l = f;
		f = e[f];
		i = i;
		while (!0) {
			var m = i,
				n = f,
				o = l,
				p = c,
				q = k;
			n = j(p, n);
			if (n < 0) {
				h[m] = p;
				p = m + 1 | 0;
				var r = q + 1 | 0;
				if (r < d) {
					i = p;
					c = a[r];
					k = r;
					continue
				} else return p
			} else if (n === 0) {
				r = q + 1 | 0;
				p = o + 1 | 0;
				if (r < d && p < g) {
					f = e[p];
					l = p;
					c = a[r];
					k = r;
					continue
				} else if (r === d) return m;
				else {
					b("bs_belt_Array").blitUnsafe(a, r, h, m, d - r | 0);
					return (m + d | 0) - r | 0
				}
			} else {
				n = o + 1 | 0;
				if (n < g) {
					f = e[n];
					l = n;
					continue
				} else {
					b("bs_belt_Array").blitUnsafe(a, q, h, m, d - q | 0);
					return (m + d | 0) - q | 0
				}
			}
		}
	}

	function n(a, c, d, e, f, g, h, i, j) {
		return m(a, c, d, e, f, g, h, i, b("bs_curry").__2(j))
	}

	function o(a, b, c, d, e, f) {
		for (var g = 0, e = e - 1 | 0; g <= e; ++g) {
			var h = a[b + g | 0],
				i = (d + g | 0) - 1 | 0;
			while (i >= d && f(c[i], h) > 0) c[i + 1 | 0] = c[i], i = i - 1 | 0;
			c[i + 1 | 0] = h
		}
		return 0
	}

	function p(a, b, c, d, e, f) {
		if (e <= 5) return o(a, b, c, d, e, f);
		else {
			var g = e / 2 | 0;
			e = e - g | 0;
			p(a, b + g | 0, c, d + g | 0, e, f);
			p(a, b, a, b + e | 0, g, f);
			return j(a, b + e | 0, g, c, d + g | 0, e, c, d, f)
		}
	}

	function q(a, b) {
		var c = a.length;
		if (c <= 5) return o(a, 0, a, 0, c, b);
		else {
			var d = c / 2 | 0;
			c = c - d | 0;
			var e = new Array(c);
			p(a, d, e, 0, c, b);
			p(a, 0, a, c, d, b);
			return j(a, c, d, e, 0, c, a, 0, b)
		}
	}

	function r(a, c) {
		return q(a, b("bs_curry").__2(c))
	}

	function s(a, b) {
		a = a.slice(0);
		q(a, b);
		return a
	}

	function t(a, c) {
		return s(a, b("bs_curry").__2(c))
	}

	function u(a, b, c) {
		var d = a.length;
		if (d === 0) return -1;
		else {
			var e = a[0];
			e = c(b, e);
			if (e < 0) return -1;
			else {
				e = a[d - 1 | 0];
				e = c(b, e);
				if (e > 0) return -(d + 1 | 0) | 0;
				else {
					e = a;
					a = 0;
					d = d - 1 | 0;
					b = b;
					c = c;
					while (!0) {
						var f = d,
							g = a,
							h = (g + f | 0) / 2 | 0,
							i = e[h];
						i = c(b, i);
						if (i === 0) return h;
						else if (i < 0)
							if (f === h)
								if (c(e[g], b) === 0) return g;
								else return -(f + 1 | 0) | 0;
						else {
							d = h;
							continue
						} else if (g === h)
							if (c(e[f], b) === 0) return f;
							else return -(f + 1 | 0) | 0;
						else {
							a = h;
							continue
						}
					}
				}
			}
		}
	}

	function v(a, c, d) {
		return u(a, c, b("bs_curry").__2(d))
	}
	var w = 0,
		x = 0;
	f.Int = w;
	f.$$String = x;
	f.strictlySortedLengthU = h;
	f.strictlySortedLength = a;
	f.isSortedU = i;
	f.isSorted = c;
	f.stableSortInPlaceByU = q;
	f.stableSortInPlaceBy = r;
	f.stableSortByU = s;
	f.stableSortBy = t;
	f.binarySearchByU = u;
	f.binarySearchBy = v;
	f.unionU = k;
	f.union = d;
	f.intersectU = l;
	f.intersect = e;
	f.diffU = m;
	f.diff = n
}), null);
__d("bs_belt_internalAVLtree", ["bs_curry", "bs_caml_option", "bs_belt_SortArray"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		if (a !== null) return a.height;
		else return 0
	}

	function h(a) {
		if (a !== null) {
			var b = a.left,
				c = a.right;
			return {
				key: a.key,
				value: a.value,
				height: a.height,
				left: h(b),
				right: h(c)
			}
		} else return a
	}

	function i(a, b, c, d) {
		var e = g(a),
			f = g(d);
		return {
			key: b,
			value: c,
			height: e >= f ? e + 1 | 0 : f + 1 | 0,
			left: a,
			right: d
		}
	}

	function j(a, b) {
		return {
			key: a,
			value: b,
			height: 1,
			left: null,
			right: null
		}
	}

	function k(a, b) {
		if (b !== null)
			if (a !== null) return a.height >= b.height;
			else return !1;
		else return !0
	}

	function a(a, b) {
		if (a.value === b) return a;
		else return {
			key: a.key,
			value: b,
			height: a.height,
			left: a.left,
			right: a.right
		}
	}

	function l(a, b, c, d) {
		var e = a !== null ? a.height : 0,
			f = d !== null ? d.height : 0;
		if (e > (f + 2 | 0)) {
			var h = a.left,
				j = a.key,
				k = a.value,
				l = a.right;
			if (g(h) >= g(l)) return i(h, j, k, i(l, b, c, d));
			else {
				var m = l.left,
					n = l.key,
					o = l.value;
				l = l.right;
				return i(i(h, j, k, m), n, o, i(l, b, c, d))
			}
		} else if (f > (e + 2 | 0)) {
			h = d.left;
			j = d.key;
			k = d.value;
			m = d.right;
			if (g(m) >= g(h)) return i(i(a, b, c, h), j, k, m);
			else {
				n = h.left;
				o = h.key;
				l = h.value;
				h = h.right;
				return i(i(a, b, c, n), o, l, i(h, j, k, m))
			}
		} else return {
			key: b,
			value: c,
			height: e >= f ? e + 1 | 0 : f + 1 | 0,
			left: a,
			right: d
		}
	}

	function m(a) {
		while (!0) {
			var b = a,
				c = b.left;
			if (c !== null) {
				a = c;
				continue
			} else return b.key
		}
	}

	function c(a) {
		if (a !== null) return b("bs_caml_option").some(m(a))
	}

	function d(a) {
		if (a !== null) return m(a)
	}

	function n(a) {
		while (!0) {
			var b = a,
				c = b.right;
			if (c !== null) {
				a = c;
				continue
			} else return b.key
		}
	}

	function e(a) {
		if (a !== null) return b("bs_caml_option").some(n(a))
	}

	function o(a) {
		if (a !== null) return n(a)
	}

	function p(a) {
		while (!0) {
			var b = a,
				c = b.left;
			if (c !== null) {
				a = c;
				continue
			} else return [b.key, b.value]
		}
	}

	function q(a) {
		if (a !== null) return p(a)
	}

	function r(a) {
		if (a !== null) return p(a)
	}

	function s(a) {
		while (!0) {
			var b = a,
				c = b.right;
			if (c !== null) {
				a = c;
				continue
			} else return [b.key, b.value]
		}
	}

	function t(a) {
		if (a !== null) return s(a)
	}

	function aa(a) {
		if (a !== null) return s(a)
	}

	function u(a, b, c) {
		var d = a.left,
			e = a.right,
			f = a.key;
		a = a.value;
		if (d !== null) return l(u(d, b, c), f, a, e);
		else {
			b.contents = f;
			c.contents = a;
			return e
		}
	}

	function ba(a) {
		return a === null
	}

	function v(a, b) {
		while (!0) {
			var c = b,
				d = a;
			if (d !== null) {
				b = [d, c];
				a = d.left;
				continue
			} else return c
		}
	}

	function w(a, b) {
		if (a !== null) {
			var c = w(a.left, b);
			if (c !== void 0) return c;
			else {
				c = a.key;
				var d = a.value,
					e = b(c, d);
				if (e) return [c, d];
				else {
					e = w(a.right, b);
					if (e !== void 0) return e;
					else return
				}
			}
		}
	}

	function ca(a, c) {
		return w(a, b("bs_curry").__2(c))
	}

	function x(a, b) {
		while (!0) {
			var c = a;
			if (c !== null) {
				x(c.left, b);
				b(c.key, c.value);
				a = c.right;
				continue
			} else return 0
		}
	}

	function da(a, c) {
		return x(a, b("bs_curry").__2(c))
	}

	function y(a, b) {
		if (a !== null) {
			var c = y(a.left, b),
				d = b(a.value);
			b = y(a.right, b);
			return {
				key: a.key,
				value: d,
				height: a.height,
				left: c,
				right: b
			}
		} else return null
	}

	function ea(a, c) {
		return y(a, b("bs_curry").__1(c))
	}

	function z(a, b) {
		if (a !== null) {
			var c = a.key,
				d = z(a.left, b),
				e = b(c, a.value);
			b = z(a.right, b);
			return {
				key: c,
				value: e,
				height: a.height,
				left: d,
				right: b
			}
		} else return null
	}

	function fa(a, c) {
		return z(a, b("bs_curry").__2(c))
	}

	function A(a, b, c) {
		while (!0) {
			var d = b,
				e = a;
			if (e !== null) {
				var f = e.left,
					g = e.key,
					h = e.value;
				e = e.right;
				b = c(A(f, d, c), g, h);
				a = e;
				continue
			} else return d
		}
	}

	function ga(a, c, d) {
		return A(a, c, b("bs_curry").__3(d))
	}

	function B(a, b) {
		while (!0) {
			var c = a;
			if (c !== null)
				if (b(c.key, c.value) && B(c.left, b)) {
					a = c.right;
					continue
				} else return !1;
			else return !0
		}
	}

	function ha(a, c) {
		return B(a, b("bs_curry").__2(c))
	}

	function C(a, b) {
		while (!0) {
			var c = a;
			if (c !== null)
				if (b(c.key, c.value) || C(c.left, b)) return !0;
				else {
					a = c.right;
					continue
				}
			else return !1
		}
	}

	function ia(a, c) {
		return C(a, b("bs_curry").__2(c))
	}

	function D(a, b, c) {
		if (a !== null) return l(D(a.left, b, c), a.key, a.value, a.right);
		else return j(b, c)
	}

	function E(a, b, c) {
		if (a !== null) return l(a.left, a.key, a.value, E(a.right, b, c));
		else return j(b, c)
	}

	function F(a, b, c, d) {
		if (a !== null)
			if (d !== null) {
				var e = a.left,
					f = a.key,
					g = a.value,
					h = a.right,
					j = a.height,
					k = d.left,
					m = d.key,
					n = d.value,
					o = d.right,
					p = d.height;
				if (j > (p + 2 | 0)) return l(e, f, g, F(h, b, c, d));
				else if (p > (j + 2 | 0)) return l(F(a, b, c, k), m, n, o);
				else return i(a, b, c, d)
			} else return E(a, b, c);
		else return D(d, b, c)
	}

	function G(a, b) {
		if (a !== null)
			if (b !== null) {
				var c = {
						contents: b.key
					},
					d = {
						contents: b.value
					},
					e = u(b, c, d);
				return F(a, c.contents, d.contents, e)
			} else return a;
		else return b
	}

	function ja(a, c, d, e) {
		if (d !== void 0) return F(a, c, b("bs_caml_option").valFromOption(d), e);
		else return G(a, e)
	}

	function H(a, b) {
		if (a !== null) {
			var c = a.key,
				d = a.value,
				e = H(a.left, b),
				f = b(c, d);
			a = H(a.right, b);
			if (f) return F(e, c, d, a);
			else return G(e, a)
		} else return null
	}

	function ka(a, c) {
		return H(a, b("bs_curry").__2(c))
	}

	function I(a, c) {
		if (a !== null) {
			var d = a.key,
				e = a.value,
				f = I(a.left, c);
			e = c(d, e);
			a = I(a.right, c);
			if (e !== void 0) return F(f, d, b("bs_caml_option").valFromOption(e), a);
			else return G(f, a)
		} else return null
	}

	function la(a, c) {
		return I(a, b("bs_curry").__2(c))
	}

	function J(a, b) {
		if (a !== null) {
			var c = a.key,
				d = a.value,
				e = J(a.left, b),
				f = e[1];
			e = e[0];
			var g = b(c, d);
			a = J(a.right, b);
			b = a[1];
			a = a[0];
			if (g) return [F(e, c, d, a), G(f, b)];
			else return [G(e, a), F(f, c, d, b)]
		} else return [null, null]
	}

	function ma(a, c) {
		return J(a, b("bs_curry").__2(c))
	}

	function K(a) {
		var b = a.left;
		a = a.right;
		b = b !== null ? K(b) : 0;
		a = a !== null ? K(a) : 0;
		return (1 + b | 0) + a | 0
	}

	function L(a) {
		if (a !== null) return K(a);
		else return 0
	}

	function M(a, b) {
		while (!0) {
			var c = b,
				d = a;
			if (d !== null) {
				var e = d.left,
					f = d.right,
					g = d.key;
				d = d.value;
				b = [
					[g, d], M(f, c)
				];
				a = e;
				continue
			} else return c
		}
	}

	function na(a) {
		return M(a, 0)
	}

	function N(a) {
		while (!0) {
			var b = a;
			if (b !== null) {
				var c = b.left;
				b = b.right;
				var d = g(c) - g(b) | 0;
				if (!(d <= 2 && d >= -2)) throw new Error('File "belt_internalAVLtree.ml", line 385, characters 6-12');
				N(c);
				a = b;
				continue
			} else return 0
		}
	}

	function O(a, b, c) {
		while (!0) {
			var d = b,
				e = a,
				f = e.left,
				g = e.key;
			e = e.right;
			f = f !== null ? O(f, d, c) : d;
			c[f] = g;
			d = f + 1 | 0;
			if (e !== null) {
				b = d;
				a = e;
				continue
			} else return d
		}
	}

	function P(a, b, c) {
		while (!0) {
			var d = b,
				e = a,
				f = e.left,
				g = e.right;
			f = f !== null ? P(f, d, c) : d;
			c[f] = e.value;
			d = f + 1 | 0;
			if (g !== null) {
				b = d;
				a = g;
				continue
			} else return d
		}
	}

	function Q(a, b, c) {
		while (!0) {
			var d = b,
				e = a,
				f = e.left,
				g = e.key,
				h = e.right;
			f = f !== null ? Q(f, d, c) : d;
			c[f] = [g, e.value];
			d = f + 1 | 0;
			if (h !== null) {
				b = d;
				a = h;
				continue
			} else return d
		}
	}

	function oa(b) {
		if (b !== null) {
			var a = K(b);
			a = new Array(a);
			Q(b, 0, a);
			return a
		} else return []
	}

	function pa(b) {
		if (b !== null) {
			var a = K(b);
			a = new Array(a);
			O(b, 0, a);
			return a
		} else return []
	}

	function qa(b) {
		if (b !== null) {
			var a = K(b);
			a = new Array(a);
			P(b, 0, a);
			return a
		} else return []
	}

	function R(a, b, c) {
		switch (c) {
			case 0:
				return null;
			case 1:
				var d = a[b];
				return j(d[0], d[1]);
			case 2:
				d = a[b];
				var e = a[b - 1 | 0];
				e = e;
				d = d;
				return {
					key: e[0],
					value: e[1],
					height: 2,
					left: j(d[0], d[1]),
					right: null
				};
			case 3:
				e = a[b];
				d = a[b - 1 | 0];
				var f = a[b - 2 | 0];
				f = f;
				d = d;
				e = e;
				return {
					key: d[0],
					value: d[1],
					height: 2,
					left: j(e[0], e[1]),
					right: j(f[0], f[1])
				};
			default:
				d = c / 2 | 0;
				e = R(a, b, d);
				f = a[b - d | 0];
				a = R(a, (b - d | 0) - 1 | 0, (c - d | 0) - 1 | 0);
				return i(e, f[0], f[1], a)
		}
	}

	function S(a, b, c) {
		switch (c) {
			case 0:
				return null;
			case 1:
				var d = a[b];
				return j(d[0], d[1]);
			case 2:
				d = a[b];
				var e = a[b + 1 | 0];
				e = e;
				d = d;
				return {
					key: e[0],
					value: e[1],
					height: 2,
					left: j(d[0], d[1]),
					right: null
				};
			case 3:
				e = a[b];
				d = a[b + 1 | 0];
				var f = a[b + 2 | 0];
				f = f;
				d = d;
				e = e;
				return {
					key: d[0],
					value: d[1],
					height: 2,
					left: j(e[0], e[1]),
					right: j(f[0], f[1])
				};
			default:
				d = c / 2 | 0;
				e = S(a, b, d);
				f = a[b + d | 0];
				a = S(a, (b + d | 0) + 1 | 0, (c - d | 0) - 1 | 0);
				return i(e, f[0], f[1], a)
		}
	}

	function ra(a) {
		return S(a, 0, a.length)
	}

	function T(a, b, c, d) {
		var e = L(a),
			f = L(b);
		if (e === f) {
			a = v(a, 0);
			b = v(b, 0);
			c = c;
			d = d;
			while (!0) {
				var g = b,
					h = a;
				if (h && g) {
					var i = g[0],
						j = h[0],
						k = c(j.key, i.key);
					if (k === 0) {
						var l = d(j.value, i.value);
						if (l === 0) {
							b = v(i.right, g[1]);
							a = v(j.right, h[1]);
							continue
						} else return l
					} else return k
				} else return 0
			}
		} else if (e < f) return -1;
		else return 1
	}

	function sa(a, c, d, e) {
		return T(a, c, d, b("bs_curry").__2(e))
	}

	function U(a, b, c, d) {
		var e = L(a),
			f = L(b);
		if (e === f) {
			e = v(a, 0);
			f = v(b, 0);
			a = c;
			b = d;
			while (!0) {
				c = f;
				d = e;
				if (d && c) {
					var g = c[0],
						h = d[0];
					if (a(h.key, g.key) === 0 && b(h.value, g.value)) {
						f = v(g.right, c[1]);
						e = v(h.right, d[1]);
						continue
					} else return !1
				} else return !0
			}
		} else return !1
	}

	function ta(a, c, d, e) {
		return U(a, c, d, b("bs_curry").__2(e))
	}

	function ua(c, d, a) {
		while (!0) {
			var e = c;
			if (e !== null) {
				var f = e.key;
				f = a(d, f);
				if (f === 0) return b("bs_caml_option").some(e.value);
				else {
					c = f < 0 ? e.left : e.right;
					continue
				}
			} else return
		}
	}

	function va(b, c, a) {
		while (!0) {
			var d = b;
			if (d !== null) {
				var e = d.key;
				e = a(c, e);
				if (e === 0) return d.value;
				else {
					b = e < 0 ? d.left : d.right;
					continue
				}
			} else return
		}
	}

	function wa(b, c, a) {
		while (!0) {
			var d = b;
			if (d !== null) {
				var e = d.key;
				e = a(c, e);
				if (e === 0) return d.value;
				else {
					b = e < 0 ? d.left : d.right;
					continue
				}
			} else throw new Error("getExn0")
		}
	}

	function xa(b, c, d, a) {
		while (!0) {
			var e = b;
			if (e !== null) {
				var f = e.key;
				f = a(c, f);
				if (f === 0) return e.value;
				else {
					b = f < 0 ? e.left : e.right;
					continue
				}
			} else return d
		}
	}

	function ya(b, c, a) {
		while (!0) {
			var d = b;
			if (d !== null) {
				var e = d.key;
				e = a(c, e);
				if (e === 0) return !0;
				else {
					b = e < 0 ? d.left : d.right;
					continue
				}
			} else return !1
		}
	}

	function V(a) {
		var b = a.left;
		a.left = b.right;
		b.right = a;
		var c = g(a.left),
			d = g(a.right);
		a.height = (c > d ? c : d) + 1 | 0;
		c = g(b.left);
		d = a.height;
		b.height = (c > d ? c : d) + 1 | 0;
		return b
	}

	function W(a) {
		var b = a.right;
		a.right = b.left;
		b.left = a;
		var c = g(a.left),
			d = g(a.right);
		a.height = (c > d ? c : d) + 1 | 0;
		c = g(b.right);
		d = a.height;
		b.height = (c > d ? c : d) + 1 | 0;
		return b
	}

	function za(a) {
		var b = W(a.left);
		a.left = b;
		return V(a)
	}

	function Aa(a) {
		var b = V(a.right);
		a.right = b;
		return W(a)
	}

	function X(a) {
		var b = g(a.left),
			c = g(a.right);
		a.height = (b > c ? b : c) + 1 | 0;
		return a
	}

	function Y(a) {
		var b = a.left,
			c = a.right,
			d = g(b),
			e = g(c);
		if (d > (2 + e | 0)) {
			var f = b.left;
			b = b.right;
			if (k(f, b)) return X(V(a));
			else return X(za(a))
		} else if (e > (2 + d | 0)) {
			f = c.left;
			b = c.right;
			if (k(b, f)) return X(W(a));
			else return X(Aa(a))
		} else {
			a.height = (d > e ? d : e) + 1 | 0;
			return a
		}
	}

	function Z(b, c, d, a) {
		if (b !== null) {
			var e = b.key;
			e = a(c, e);
			if (e === 0) {
				b.value = d;
				return b
			} else {
				var f = b.left,
					g = b.right;
				if (e < 0) {
					e = Z(f, c, d, a);
					b.left = e
				} else b.right = Z(g, c, d, a);
				return Y(b)
			}
		} else return j(c, d)
	}

	function Ba(c, a) {
		var d = c.length;
		if (d === 0) return null;
		else {
			var e = b("bs_belt_SortArray").strictlySortedLengthU(c, function (b, c) {
					return a(b[0], c[0]) < 0
				}),
				f;
			e >= 0 ? f = S(c, 0, e) : (e = -e | 0, f = R(c, e - 1 | 0, e));
			for (var e = e, d = d - 1 | 0; e <= d; ++e) {
				var g = c[e];
				f = Z(f, g[0], g[1], a)
			}
			return f
		}
	}

	function $(a, b) {
		var c = b.right,
			d = b.left;
		if (d !== null) {
			b.left = $(a, d);
			return Y(b)
		} else {
			a.key = b.key;
			return c
		}
	}
	f.copy = h;
	f.create = i;
	f.bal = l;
	f.singleton = j;
	f.updateValue = a;
	f.minKey = c;
	f.minKeyUndefined = d;
	f.maxKey = e;
	f.maxKeyUndefined = o;
	f.minimum = q;
	f.minUndefined = r;
	f.maximum = t;
	f.maxUndefined = aa;
	f.removeMinAuxWithRef = u;
	f.isEmpty = ba;
	f.stackAllLeft = v;
	f.findFirstByU = w;
	f.findFirstBy = ca;
	f.forEachU = x;
	f.forEach = da;
	f.mapU = y;
	f.map = ea;
	f.mapWithKeyU = z;
	f.mapWithKey = fa;
	f.reduceU = A;
	f.reduce = ga;
	f.everyU = B;
	f.every = ha;
	f.someU = C;
	f.some = ia;
	f.join = F;
	f.concat = G;
	f.concatOrJoin = ja;
	f.keepSharedU = H;
	f.keepShared = ka;
	f.keepMapU = I;
	f.keepMap = la;
	f.partitionSharedU = J;
	f.partitionShared = ma;
	f.lengthNode = K;
	f.size = L;
	f.toList = na;
	f.checkInvariantInternal = N;
	f.fillArray = Q;
	f.toArray = oa;
	f.keysToArray = pa;
	f.valuesToArray = qa;
	f.fromSortedArrayAux = S;
	f.fromSortedArrayRevAux = R;
	f.fromSortedArrayUnsafe = ra;
	f.cmpU = T;
	f.cmp = sa;
	f.eqU = U;
	f.eq = ta;
	f.get = ua;
	f.getUndefined = va;
	f.getWithDefault = xa;
	f.getExn = wa;
	f.has = ya;
	f.fromArray = Ba;
	f.updateMutate = Z;
	f.balMutate = Y;
	f.removeMinAuxWithRootMutate = $
}), null);
__d("bs_belt_MapDict", ["bs_curry", "bs_caml_option", "bs_belt_internalAVLtree"], (function (a, b, c, d, e, f) {
	"use strict";
	var g;

	function h(c, d, e, a) {
		if (c !== null) {
			var f = c.key,
				g = a(d, f);
			if (g === 0) return b("bs_belt_internalAVLtree").updateValue(c, e);
			else {
				var i = c.left,
					j = c.right;
				c = c.value;
				if (g < 0) return b("bs_belt_internalAVLtree").bal(h(i, d, e, a), f, c, j);
				else return b("bs_belt_internalAVLtree").bal(i, f, c, h(j, d, e, a))
			}
		} else return b("bs_belt_internalAVLtree").singleton(d, e)
	}

	function i(c, d, e, a) {
		if (c !== null) {
			var f = c.key,
				g = a(d, f);
			if (g === 0) {
				var h = e(b("bs_caml_option").some(c.value));
				if (h !== void 0) return b("bs_belt_internalAVLtree").updateValue(c, b("bs_caml_option").valFromOption(h));
				else {
					h = c.left;
					var j = c.right;
					if (h !== null)
						if (j !== null) {
							var k = {
									contents: j.key
								},
								l = {
									contents: j.value
								},
								m = b("bs_belt_internalAVLtree").removeMinAuxWithRef(j, k, l);
							return b("bs_belt_internalAVLtree").bal(h, k.contents, l.contents, m)
						} else return h;
					else return j
				}
			} else {
				k = c.left;
				l = c.right;
				m = c.value;
				if (g < 0) {
					h = i(k, d, e, a);
					if (k === h) return c;
					else return b("bs_belt_internalAVLtree").bal(h, f, m, l)
				} else {
					j = i(l, d, e, a);
					if (l === j) return c;
					else return b("bs_belt_internalAVLtree").bal(k, f, m, j)
				}
			}
		} else {
			g = e(void 0);
			if (g !== void 0) return b("bs_belt_internalAVLtree").singleton(d, b("bs_caml_option").valFromOption(g));
			else return c
		}
	}

	function a(c, d, e, a) {
		return i(c, d, b("bs_curry").__1(e), a)
	}

	function j(c, d, a) {
		var e = c.left,
			f = c.key,
			g = c.right,
			h = a(d, f);
		if (h === 0)
			if (e !== null)
				if (g !== null) {
					var i = {
							contents: g.key
						},
						k = {
							contents: g.value
						},
						l = b("bs_belt_internalAVLtree").removeMinAuxWithRef(g, i, k);
					return b("bs_belt_internalAVLtree").bal(e, i.contents, k.contents, l)
				} else return e;
		else return g;
		else if (h < 0)
			if (e !== null) {
				i = j(e, d, a);
				if (i === e) return c;
				else return b("bs_belt_internalAVLtree").bal(i, f, c.value, g)
			} else return c;
		else if (g !== null) {
			k = j(g, d, a);
			if (k === g) return c;
			else return b("bs_belt_internalAVLtree").bal(e, f, c.value, k)
		} else return c
	}

	function c(b, c, a) {
		if (b !== null) return j(b, c, a);
		else return null
	}

	function d(b, c, a) {
		var d = c.length;
		b = b;
		for (var e = 0, d = d - 1 | 0; e <= d; ++e) {
			var f = c[e];
			b = h(b, f[0], f[1], a)
		}
		return b
	}

	function k(c, d, e, a) {
		var f = c.left,
			g = c.key,
			h = c.value,
			i = c.right,
			j = a(d, g);
		if (j === 0) {
			e.contents = b("bs_caml_option").some(h);
			return [f, i]
		} else if (j < 0)
			if (f !== null) {
				j = k(f, d, e, a);
				return [j[0], b("bs_belt_internalAVLtree").join(j[1], g, h, i)]
			} else return [null, c];
		else if (i !== null) {
			j = k(i, d, e, a);
			return [b("bs_belt_internalAVLtree").join(f, g, h, j[0]), j[1]]
		} else return [c, null]
	}

	function e(b, c, a) {
		if (b !== null) {
			var d = {
				contents: void 0
			};
			b = k(b, c, d, a);
			return [b, d.contents]
		} else return [
			[null, null], void 0
		]
	}

	function l(c, d, e, a) {
		if (c !== null)
			if (d !== null)
				if (c.height >= d.height) {
					var f = c.left,
						g = c.key,
						h = c.value,
						i = c.right,
						j = {
							contents: void 0
						},
						m = k(d, g, j, a);
					j = j.contents;
					f = l(f, m[0], e, a);
					h = e(g, b("bs_caml_option").some(h), j);
					j = l(i, m[1], e, a);
					return b("bs_belt_internalAVLtree").concatOrJoin(f, g, h, j)
				} else {
					i = d.left;
					m = d.key;
					f = d.value;
					g = d.right;
					h = {
						contents: void 0
					};
					j = k(c, m, h, a);
					h = h.contents;
					i = l(j[0], i, e, a);
					h = e(m, h, b("bs_caml_option").some(f));
					f = l(j[1], g, e, a);
					return b("bs_belt_internalAVLtree").concatOrJoin(i, m, h, f)
				}
		else return b("bs_belt_internalAVLtree").keepMapU(c, function (a, c) {
			return e(a, b("bs_caml_option").some(c), void 0)
		});
		else if (d !== null) return b("bs_belt_internalAVLtree").keepMapU(d, function (a, c) {
			return e(a, void 0, b("bs_caml_option").some(c))
		});
		else return null
	}

	function m(c, d, e, a) {
		return l(c, d, b("bs_curry").__3(e), a)
	}

	function n(b, c, a) {
		var d = c.length;
		if (b !== null) {
			b = b;
			c = c;
			var e = 0;
			d = d;
			a = a;
			while (!0) {
				var f = e,
					g = b;
				if (f < d) {
					var h = c[f];
					h = j(g, h, a);
					if (h !== null) {
						e = f + 1 | 0;
						b = h;
						continue
					} else return h
				} else return g
			}
		} else return null
	}
	var o = null,
		p = (g = b("bs_belt_internalAVLtree")).isEmpty,
		q = g.has,
		r = g.cmpU,
		s = g.cmp,
		t = g.eqU,
		u = g.eq,
		v = g.findFirstByU,
		w = g.findFirstBy,
		x = g.forEachU,
		y = g.forEach,
		z = g.reduceU,
		A = g.reduce,
		B = g.everyU,
		C = g.every,
		D = g.someU,
		E = g.some,
		F = g.size,
		G = g.toList,
		H = g.toArray,
		I = g.fromArray,
		J = g.keysToArray,
		K = g.valuesToArray,
		L = g.minKey,
		M = g.minKeyUndefined,
		N = g.maxKey,
		O = g.maxKeyUndefined,
		P = g.minimum,
		Q = g.minUndefined,
		R = g.maximum,
		S = g.maxUndefined,
		T = g.get,
		U = g.getUndefined,
		V = g.getWithDefault,
		W = g.getExn,
		X = g.checkInvariantInternal,
		Y = g.keepSharedU,
		Z = g.keepShared,
		$ = g.partitionSharedU,
		aa = g.partitionShared,
		ba = g.mapU,
		ca = g.map,
		da = g.mapWithKeyU;
	g = g.mapWithKey;
	f.empty = o;
	f.isEmpty = p;
	f.has = q;
	f.cmpU = r;
	f.cmp = s;
	f.eqU = t;
	f.eq = u;
	f.findFirstByU = v;
	f.findFirstBy = w;
	f.forEachU = x;
	f.forEach = y;
	f.reduceU = z;
	f.reduce = A;
	f.everyU = B;
	f.every = C;
	f.someU = D;
	f.some = E;
	f.size = F;
	f.toList = G;
	f.toArray = H;
	f.fromArray = I;
	f.keysToArray = J;
	f.valuesToArray = K;
	f.minKey = L;
	f.minKeyUndefined = M;
	f.maxKey = N;
	f.maxKeyUndefined = O;
	f.minimum = P;
	f.minUndefined = Q;
	f.maximum = R;
	f.maxUndefined = S;
	f.get = T;
	f.getUndefined = U;
	f.getWithDefault = V;
	f.getExn = W;
	f.checkInvariantInternal = X;
	f.remove = c;
	f.removeMany = n;
	f.set = h;
	f.updateU = i;
	f.update = a;
	f.mergeU = l;
	f.merge = m;
	f.mergeMany = d;
	f.keepU = Y;
	f.keep = Z;
	f.partitionU = $;
	f.partition = aa;
	f.split = e;
	f.mapU = ba;
	f.map = ca;
	f.mapWithKeyU = da;
	f.mapWithKey = g
}), null);
__d("bs_belt_Map", ["bs_curry", "bs_belt_MapDict"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		c = c.cmp;
		return {
			cmp: c,
			data: b("bs_belt_MapDict").fromArray(a, c)
		}
	}

	function c(c, d) {
		var a = c.cmp,
			e = c.data;
		d = b("bs_belt_MapDict").remove(e, d, a);
		if (d === e) return c;
		else return {
			cmp: a,
			data: d
		}
	}

	function d(c, d) {
		var a = c.cmp;
		c = c.data;
		c = b("bs_belt_MapDict").removeMany(c, d, a);
		return {
			cmp: a,
			data: c
		}
	}

	function e(c, d, e) {
		var a = c.cmp;
		return {
			cmp: a,
			data: b("bs_belt_MapDict").set(c.data, d, e, a)
		}
	}

	function g(c, d) {
		var a = c.cmp;
		return {
			cmp: a,
			data: b("bs_belt_MapDict").mergeMany(c.data, d, a)
		}
	}

	function h(c, d, e) {
		var a = c.cmp;
		return {
			cmp: a,
			data: b("bs_belt_MapDict").updateU(c.data, d, e, a)
		}
	}

	function i(a, c, d) {
		return h(a, c, b("bs_curry").__1(d))
	}

	function j(c, d) {
		var a = c.cmp;
		c = b("bs_belt_MapDict").split(c.data, d, a);
		d = c[0];
		return [
			[{
				cmp: a,
				data: d[0]
			}, {
				cmp: a,
				data: d[1]
			}], c[1]
		]
	}

	function k(c, d, e) {
		var a = c.cmp;
		return {
			cmp: a,
			data: b("bs_belt_MapDict").mergeU(c.data, d.data, e, a)
		}
	}

	function l(a, c, d) {
		return k(a, c, b("bs_curry").__3(d))
	}

	function m(a) {
		return {
			cmp: a.cmp,
			data: null
		}
	}

	function n(a) {
		return b("bs_belt_MapDict").isEmpty(a.data)
	}

	function o(a, c) {
		return b("bs_belt_MapDict").findFirstByU(a.data, c)
	}

	function p(a, c) {
		return b("bs_belt_MapDict").findFirstByU(a.data, b("bs_curry").__2(c))
	}

	function q(a, c) {
		return b("bs_belt_MapDict").forEachU(a.data, c)
	}

	function r(a, c) {
		return b("bs_belt_MapDict").forEachU(a.data, b("bs_curry").__2(c))
	}

	function s(a, c, d) {
		return b("bs_belt_MapDict").reduceU(a.data, c, d)
	}

	function t(a, c, d) {
		return s(a, c, b("bs_curry").__3(d))
	}

	function u(a, c) {
		return b("bs_belt_MapDict").everyU(a.data, c)
	}

	function v(a, c) {
		return b("bs_belt_MapDict").everyU(a.data, b("bs_curry").__2(c))
	}

	function w(a, c) {
		return b("bs_belt_MapDict").someU(a.data, c)
	}

	function x(a, c) {
		return b("bs_belt_MapDict").someU(a.data, b("bs_curry").__2(c))
	}

	function y(a, c) {
		return {
			cmp: a.cmp,
			data: b("bs_belt_MapDict").keepU(a.data, c)
		}
	}

	function z(a, c) {
		return y(a, b("bs_curry").__2(c))
	}

	function A(c, d) {
		var a = c.cmp;
		c = b("bs_belt_MapDict").partitionU(c.data, d);
		return [{
			cmp: a,
			data: c[0]
		}, {
			cmp: a,
			data: c[1]
		}]
	}

	function B(a, c) {
		return A(a, b("bs_curry").__2(c))
	}

	function C(a, c) {
		return {
			cmp: a.cmp,
			data: b("bs_belt_MapDict").mapU(a.data, c)
		}
	}

	function D(a, c) {
		return C(a, b("bs_curry").__1(c))
	}

	function E(a, c) {
		return {
			cmp: a.cmp,
			data: b("bs_belt_MapDict").mapWithKeyU(a.data, c)
		}
	}

	function F(a, c) {
		return E(a, b("bs_curry").__2(c))
	}

	function G(a) {
		return b("bs_belt_MapDict").size(a.data)
	}

	function H(a) {
		return b("bs_belt_MapDict").toList(a.data)
	}

	function I(a) {
		return b("bs_belt_MapDict").toArray(a.data)
	}

	function J(a) {
		return b("bs_belt_MapDict").keysToArray(a.data)
	}

	function K(a) {
		return b("bs_belt_MapDict").valuesToArray(a.data)
	}

	function L(a) {
		return b("bs_belt_MapDict").minKey(a.data)
	}

	function M(a) {
		return b("bs_belt_MapDict").minKeyUndefined(a.data)
	}

	function N(a) {
		return b("bs_belt_MapDict").maxKey(a.data)
	}

	function O(a) {
		return b("bs_belt_MapDict").maxKeyUndefined(a.data)
	}

	function P(a) {
		return b("bs_belt_MapDict").minimum(a.data)
	}

	function Q(a) {
		return b("bs_belt_MapDict").minUndefined(a.data)
	}

	function R(a) {
		return b("bs_belt_MapDict").maximum(a.data)
	}

	function S(a) {
		return b("bs_belt_MapDict").maxUndefined(a.data)
	}

	function T(a, c) {
		return b("bs_belt_MapDict").get(a.data, c, a.cmp)
	}

	function U(a, c) {
		return b("bs_belt_MapDict").getUndefined(a.data, c, a.cmp)
	}

	function V(a, c, d) {
		return b("bs_belt_MapDict").getWithDefault(a.data, c, d, a.cmp)
	}

	function W(a, c) {
		return b("bs_belt_MapDict").getExn(a.data, c, a.cmp)
	}

	function X(a, c) {
		return b("bs_belt_MapDict").has(a.data, c, a.cmp)
	}

	function Y(a) {
		return b("bs_belt_MapDict").checkInvariantInternal(a.data)
	}

	function Z(a, c, d) {
		return b("bs_belt_MapDict").eqU(a.data, c.data, a.cmp, d)
	}

	function aa(a, c, d) {
		return Z(a, c, b("bs_curry").__2(d))
	}

	function $(a, c, d) {
		return b("bs_belt_MapDict").cmpU(a.data, c.data, a.cmp, d)
	}

	function ba(a, c, d) {
		return $(a, c, b("bs_curry").__2(d))
	}

	function ca(a) {
		return a.data
	}

	function da(a) {
		a = a.cmp;
		return {
			cmp: a
		}
	}

	function ea(a, b) {
		return {
			cmp: a.cmp,
			data: b
		}
	}
	var fa = 0,
		ga = 0,
		ha = 0;
	f.Int = fa;
	f.$$String = ga;
	f.Dict = ha;
	f.make = m;
	f.isEmpty = n;
	f.has = X;
	f.cmpU = $;
	f.cmp = ba;
	f.eqU = Z;
	f.eq = aa;
	f.findFirstByU = o;
	f.findFirstBy = p;
	f.forEachU = q;
	f.forEach = r;
	f.reduceU = s;
	f.reduce = t;
	f.everyU = u;
	f.every = v;
	f.someU = w;
	f.some = x;
	f.size = G;
	f.toArray = I;
	f.toList = H;
	f.fromArray = a;
	f.keysToArray = J;
	f.valuesToArray = K;
	f.minKey = L;
	f.minKeyUndefined = M;
	f.maxKey = N;
	f.maxKeyUndefined = O;
	f.minimum = P;
	f.minUndefined = Q;
	f.maximum = R;
	f.maxUndefined = S;
	f.get = T;
	f.getUndefined = U;
	f.getWithDefault = V;
	f.getExn = W;
	f.remove = c;
	f.removeMany = d;
	f.set = e;
	f.updateU = h;
	f.update = i;
	f.mergeMany = g;
	f.mergeU = k;
	f.merge = l;
	f.keepU = y;
	f.keep = z;
	f.partitionU = A;
	f.partition = B;
	f.split = j;
	f.mapU = C;
	f.map = D;
	f.mapWithKeyU = E;
	f.mapWithKey = F;
	f.getData = ca;
	f.getId = da;
	f.packIdData = ea;
	f.checkInvariantInternal = Y
}), null);
__d("bs_belt_internalMapString", ["bs_curry", "bs_caml_option", "bs_belt_SortArray", "bs_caml_primitive", "bs_belt_internalAVLtree"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a, c, d) {
		if (a !== null) {
			var e = a.key;
			if (c === e) return b("bs_belt_internalAVLtree").updateValue(a, d);
			else {
				var f = a.value;
				if (c < e) return b("bs_belt_internalAVLtree").bal(g(a.left, c, d), e, f, a.right);
				else return b("bs_belt_internalAVLtree").bal(a.left, e, f, g(a.right, c, d))
			}
		} else return b("bs_belt_internalAVLtree").singleton(c, d)
	}

	function a(a, c) {
		while (!0) {
			var d = a;
			if (d !== null) {
				var e = d.key;
				if (c === e) return b("bs_caml_option").some(d.value);
				else {
					a = c < e ? d.left : d.right;
					continue
				}
			} else return
		}
	}

	function c(a, b) {
		while (!0) {
			var c = a;
			if (c !== null) {
				var d = c.key;
				if (b === d) return c.value;
				else {
					a = b < d ? c.left : c.right;
					continue
				}
			} else return
		}
	}

	function d(a, b) {
		while (!0) {
			var c = a;
			if (c !== null) {
				var d = c.key;
				if (b === d) return c.value;
				else {
					a = b < d ? c.left : c.right;
					continue
				}
			} else throw new Error("getExn")
		}
	}

	function e(a, b, c) {
		while (!0) {
			var d = a;
			if (d !== null) {
				var e = d.key;
				if (b === e) return d.value;
				else {
					a = b < e ? d.left : d.right;
					continue
				}
			} else return c
		}
	}

	function h(a, b) {
		while (!0) {
			var c = a;
			if (c !== null) {
				var d = c.key;
				if (b === d) return !0;
				else {
					a = b < d ? c.left : c.right;
					continue
				}
			} else return !1
		}
	}

	function i(a, c) {
		if (a !== null) {
			var d = a.left,
				e = a.key,
				f = a.right;
			if (c === e)
				if (d !== null)
					if (f !== null) {
						var g = {
								contents: f.key
							},
							h = {
								contents: f.value
							},
							j = b("bs_belt_internalAVLtree").removeMinAuxWithRef(f, g, h);
						return b("bs_belt_internalAVLtree").bal(d, g.contents, h.contents, j)
					} else return d;
			else return f;
			else if (c < e) return b("bs_belt_internalAVLtree").bal(i(d, c), e, a.value, f);
			else return b("bs_belt_internalAVLtree").bal(d, e, a.value, i(f, c))
		} else return a
	}

	function j(a, c) {
		var d = c.left,
			e = c.key,
			f = c.value,
			g = c.right;
		if (a === e) return [d, b("bs_caml_option").some(f), g];
		else if (a < e)
			if (d !== null) {
				var h = j(a, d);
				return [h[0], h[1], b("bs_belt_internalAVLtree").join(h[2], e, f, g)]
			} else return [null, void 0, c];
		else if (g !== null) {
			h = j(a, g);
			return [b("bs_belt_internalAVLtree").join(d, e, f, h[0]), h[1], h[2]]
		} else return [c, void 0, null]
	}

	function k(a, b) {
		if (b !== null) return j(a, b);
		else return [null, void 0, null]
	}

	function l(a, c, d) {
		if (a !== null) {
			if (a.height >= (c !== null ? c.height : 0)) {
				var e = a.left,
					f = a.key,
					g = a.value,
					h = a.right,
					i = k(f, c);
				return b("bs_belt_internalAVLtree").concatOrJoin(l(e, i[0], d), f, d(f, b("bs_caml_option").some(g), i[1]), l(h, i[2], d))
			}
		} else if (c === null) return null;
		if (c !== null) {
			e = c.left;
			f = c.key;
			g = c.value;
			h = c.right;
			i = k(f, a);
			return b("bs_belt_internalAVLtree").concatOrJoin(l(i[0], e, d), f, d(f, i[1], b("bs_caml_option").some(g)), l(i[2], h, d))
		} else return 0
	}

	function m(a, c, d) {
		return l(a, c, b("bs_curry").__3(d))
	}

	function n(a, c, d) {
		while (!0) {
			var e = c,
				f = a;
			if (f && e) {
				var g = e[0],
					h = f[0],
					i = b("bs_caml_primitive").caml_string_compare(h.key, g.key);
				if (i === 0) {
					var j = d(h.value, g.value);
					if (j === 0) {
						c = b("bs_belt_internalAVLtree").stackAllLeft(g.right, e[1]);
						a = b("bs_belt_internalAVLtree").stackAllLeft(h.right, f[1]);
						continue
					} else return j
				} else return i
			} else return 0
		}
	}

	function o(c, d, a) {
		var e = b("bs_belt_internalAVLtree").size(c),
			f = b("bs_belt_internalAVLtree").size(d);
		if (e === f) return n(b("bs_belt_internalAVLtree").stackAllLeft(c, 0), b("bs_belt_internalAVLtree").stackAllLeft(d, 0), a);
		else if (e < f) return -1;
		else return 1
	}

	function p(a, c, d) {
		return o(a, c, b("bs_curry").__2(d))
	}

	function q(c, d, a) {
		while (!0) {
			var e = d,
				f = c;
			if (f && e) {
				var g = e[0],
					h = f[0];
				if (h.key === g.key && a(h.value, g.value)) {
					d = b("bs_belt_internalAVLtree").stackAllLeft(g.right, e[1]);
					c = b("bs_belt_internalAVLtree").stackAllLeft(h.right, f[1]);
					continue
				} else return !1
			} else return !0
		}
	}

	function r(c, d, a) {
		var e = b("bs_belt_internalAVLtree").size(c),
			f = b("bs_belt_internalAVLtree").size(d);
		if (e === f) return q(b("bs_belt_internalAVLtree").stackAllLeft(c, 0), b("bs_belt_internalAVLtree").stackAllLeft(d, 0), a);
		else return !1
	}

	function s(a, c, d) {
		return r(a, c, b("bs_curry").__2(d))
	}

	function t(a, c, d) {
		if (a !== null) {
			var e = a.key;
			if (c === e) {
				a.key = c;
				a.value = d;
				return a
			} else {
				var f = a.left,
					g = a.right;
				if (c < e) {
					e = t(f, c, d);
					a.left = e
				} else a.right = t(g, c, d);
				return b("bs_belt_internalAVLtree").balMutate(a)
			}
		} else return b("bs_belt_internalAVLtree").singleton(c, d)
	}

	function u(a) {
		var c = a.length;
		if (c === 0) return null;
		else {
			var d = b("bs_belt_SortArray").strictlySortedLengthU(a, function (a, b) {
					return a[0] < b[0]
				}),
				e;
			d >= 0 ? e = b("bs_belt_internalAVLtree").fromSortedArrayAux(a, 0, d) : (d = -d | 0, e = b("bs_belt_internalAVLtree").fromSortedArrayRevAux(a, d - 1 | 0, d));
			for (var d = d, c = c - 1 | 0; d <= c; ++d) {
				var f = a[d];
				e = t(e, f[0], f[1])
			}
			return e
		}
	}
	var v = 0,
		w = 0,
		x = 0;
	f.N = v;
	f.A = w;
	f.S = x;
	f.add = g;
	f.get = a;
	f.getUndefined = c;
	f.getExn = d;
	f.getWithDefault = e;
	f.has = h;
	f.remove = i;
	f.splitAux = j;
	f.split = k;
	f.mergeU = l;
	f.merge = m;
	f.compareAux = n;
	f.cmpU = o;
	f.cmp = p;
	f.eqAux = q;
	f.eqU = r;
	f.eq = s;
	f.addMutate = t;
	f.fromArray = u
}), null);
__d("bs_belt_MapString", ["bs_curry", "bs_caml_option", "bs_belt_internalAVLtree", "bs_belt_internalMapString"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h;

	function i(a, c, d) {
		if (a !== null) {
			var e = a.key;
			if (c === e) return b("bs_belt_internalAVLtree").updateValue(a, d);
			else {
				var f = a.value;
				if (c < e) return b("bs_belt_internalAVLtree").bal(i(a.left, c, d), e, f, a.right);
				else return b("bs_belt_internalAVLtree").bal(a.left, e, f, i(a.right, c, d))
			}
		} else return b("bs_belt_internalAVLtree").singleton(c, d)
	}

	function j(a, c, d) {
		if (a !== null) {
			var e = a.key;
			if (c === e) {
				var f = d(b("bs_caml_option").some(a.value));
				if (f !== void 0) return b("bs_belt_internalAVLtree").updateValue(a, b("bs_caml_option").valFromOption(f));
				else {
					f = a.left;
					var g = a.right;
					if (f !== null)
						if (g !== null) {
							var h = {
									contents: g.key
								},
								i = {
									contents: g.value
								},
								k = b("bs_belt_internalAVLtree").removeMinAuxWithRef(g, h, i);
							return b("bs_belt_internalAVLtree").bal(f, h.contents, i.contents, k)
						} else return f;
					else return g
				}
			} else {
				h = a.left;
				i = a.right;
				k = a.value;
				if (c < e) {
					f = j(h, c, d);
					if (h === f) return a;
					else return b("bs_belt_internalAVLtree").bal(f, e, k, i)
				} else {
					g = j(i, c, d);
					if (i === g) return a;
					else return b("bs_belt_internalAVLtree").bal(h, e, k, g)
				}
			}
		} else {
			f = d(void 0);
			if (f !== void 0) return b("bs_belt_internalAVLtree").singleton(c, b("bs_caml_option").valFromOption(f));
			else return a
		}
	}

	function a(a, c, d) {
		return j(a, c, b("bs_curry").__1(d))
	}

	function k(a, c) {
		var d = a.left,
			e = a.key,
			f = a.right;
		if (c === e)
			if (d !== null)
				if (f !== null) {
					var g = {
							contents: f.key
						},
						h = {
							contents: f.value
						},
						i = b("bs_belt_internalAVLtree").removeMinAuxWithRef(f, g, h);
					return b("bs_belt_internalAVLtree").bal(d, g.contents, h.contents, i)
				} else return d;
		else return f;
		else if (c < e)
			if (d !== null) {
				g = k(d, c);
				if (g === d) return a;
				else return b("bs_belt_internalAVLtree").bal(g, e, a.value, f)
			} else return a;
		else if (f !== null) {
			h = k(f, c);
			return b("bs_belt_internalAVLtree").bal(d, e, a.value, h)
		} else return a
	}

	function c(a, b) {
		if (a !== null) return k(a, b);
		else return null
	}

	function d(a, b) {
		var c = b.length;
		if (a !== null) {
			a = a;
			b = b;
			var d = 0;
			c = c;
			while (!0) {
				var e = d,
					f = a;
				if (e < c) {
					var g = b[e];
					g = k(f, g);
					if (g !== null) {
						d = e + 1 | 0;
						a = g;
						continue
					} else return g
				} else return f
			}
		} else return null
	}

	function e(a, b) {
		var c = b.length;
		a = a;
		for (var d = 0, c = c - 1 | 0; d <= c; ++d) {
			var e = b[d];
			a = i(a, e[0], e[1])
		}
		return a
	}
	var l = null,
		m = (g = b("bs_belt_internalAVLtree")).isEmpty,
		n = (h = b("bs_belt_internalMapString")).has,
		o = h.cmpU,
		p = h.cmp,
		q = h.eqU,
		r = h.eq,
		s = g.findFirstByU,
		t = g.findFirstBy,
		u = g.forEachU,
		v = g.forEach,
		w = g.reduceU,
		x = g.reduce,
		y = g.everyU,
		z = g.every,
		A = g.someU,
		B = g.some,
		C = g.size,
		D = g.toList,
		E = g.toArray,
		F = h.fromArray,
		G = g.keysToArray,
		H = g.valuesToArray,
		I = g.minKey,
		J = g.minKeyUndefined,
		K = g.maxKey,
		L = g.maxKeyUndefined,
		M = g.minimum,
		N = g.minUndefined,
		O = g.maximum,
		P = g.maxUndefined,
		Q = h.get,
		R = h.getUndefined,
		S = h.getWithDefault,
		T = h.getExn,
		U = g.checkInvariantInternal,
		V = h.mergeU,
		W = h.merge,
		X = g.keepSharedU,
		Y = g.keepShared,
		Z = g.partitionSharedU,
		$ = g.partitionShared;
	h = h.split;
	var aa = g.mapU,
		ba = g.map,
		ca = g.mapWithKeyU;
	g = g.mapWithKey;
	f.empty = l;
	f.isEmpty = m;
	f.has = n;
	f.cmpU = o;
	f.cmp = p;
	f.eqU = q;
	f.eq = r;
	f.findFirstByU = s;
	f.findFirstBy = t;
	f.forEachU = u;
	f.forEach = v;
	f.reduceU = w;
	f.reduce = x;
	f.everyU = y;
	f.every = z;
	f.someU = A;
	f.some = B;
	f.size = C;
	f.toList = D;
	f.toArray = E;
	f.fromArray = F;
	f.keysToArray = G;
	f.valuesToArray = H;
	f.minKey = I;
	f.minKeyUndefined = J;
	f.maxKey = K;
	f.maxKeyUndefined = L;
	f.minimum = M;
	f.minUndefined = N;
	f.maximum = O;
	f.maxUndefined = P;
	f.get = Q;
	f.getUndefined = R;
	f.getWithDefault = S;
	f.getExn = T;
	f.checkInvariantInternal = U;
	f.remove = c;
	f.removeMany = d;
	f.set = i;
	f.updateU = j;
	f.update = a;
	f.mergeU = V;
	f.merge = W;
	f.mergeMany = e;
	f.keepU = X;
	f.keep = Y;
	f.partitionU = Z;
	f.partition = $;
	f.split = h;
	f.mapU = aa;
	f.map = ba;
	f.mapWithKeyU = ca;
	f.mapWithKey = g
}), null);
__d("bs_belt_internalAVLset", ["bs_curry", "bs_caml_option", "bs_belt_SortArray"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		if (a !== null) return a.height;
		else return 0
	}

	function h(a) {
		if (a !== null) {
			var b = a.left,
				c = a.right;
			return {
				value: a.value,
				height: a.height,
				left: h(b),
				right: h(c)
			}
		} else return a
	}

	function i(a, b, c) {
		var d = a !== null ? a.height : 0,
			e = c !== null ? c.height : 0;
		return {
			value: b,
			height: d >= e ? d + 1 | 0 : e + 1 | 0,
			left: a,
			right: c
		}
	}

	function j(a) {
		return {
			value: a,
			height: 1,
			left: null,
			right: null
		}
	}

	function k(a, b) {
		if (b !== null)
			if (a !== null) return a.height >= b.height;
			else return !1;
		else return !0
	}

	function l(a, b, c) {
		var d = a !== null ? a.height : 0,
			e = c !== null ? c.height : 0;
		if (d > (e + 2 | 0)) {
			var f = a.left,
				g = a.value,
				h = a.right;
			if (k(f, h)) return i(f, g, i(h, b, c));
			else {
				var j = h.left,
					l = h.value;
				h = h.right;
				return i(i(f, g, j), l, i(h, b, c))
			}
		} else if (e > (d + 2 | 0)) {
			f = c.left;
			g = c.value;
			j = c.right;
			if (k(j, f)) return i(i(a, b, f), g, j);
			else {
				l = f.left;
				h = f.value;
				f = f.right;
				return i(i(a, b, l), h, i(f, g, j))
			}
		} else return {
			value: b,
			height: d >= e ? d + 1 | 0 : e + 1 | 0,
			left: a,
			right: c
		}
	}

	function m(a) {
		while (!0) {
			var b = a,
				c = b.left;
			if (c !== null) {
				a = c;
				continue
			} else return b.value
		}
	}

	function a(a) {
		if (a !== null) return b("bs_caml_option").some(m(a))
	}

	function c(a) {
		if (a !== null) return m(a)
	}

	function n(a) {
		while (!0) {
			var b = a,
				c = b.right;
			if (c !== null) {
				a = c;
				continue
			} else return b.value
		}
	}

	function d(a) {
		if (a !== null) return b("bs_caml_option").some(n(a))
	}

	function e(a) {
		if (a !== null) return n(a)
	}

	function o(a, b) {
		var c = a.left,
			d = a.right;
		a = a.value;
		if (c !== null) return l(o(c, b), a, d);
		else {
			b.contents = a;
			return d
		}
	}

	function p(a) {
		return a === null
	}

	function q(a, b) {
		while (!0) {
			var c = b,
				d = a;
			if (d !== null) {
				b = [d, c];
				a = d.left;
				continue
			} else return c
		}
	}

	function r(a, b) {
		while (!0) {
			var c = a;
			if (c !== null) {
				r(c.left, b);
				b(c.value);
				a = c.right;
				continue
			} else return 0
		}
	}

	function s(a, c) {
		return r(a, b("bs_curry").__1(c))
	}

	function t(a, b, c) {
		while (!0) {
			var d = b,
				e = a;
			if (e !== null) {
				var f = e.left,
					g = e.value;
				e = e.right;
				b = c(t(f, d, c), g);
				a = e;
				continue
			} else return d
		}
	}

	function u(a, c, d) {
		return t(a, c, b("bs_curry").__2(d))
	}

	function v(a, b) {
		while (!0) {
			var c = a;
			if (c !== null)
				if (b(c.value) && v(c.left, b)) {
					a = c.right;
					continue
				} else return !1;
			else return !0
		}
	}

	function w(a, c) {
		return v(a, b("bs_curry").__1(c))
	}

	function x(a, b) {
		while (!0) {
			var c = a;
			if (c !== null)
				if (b(c.value) || x(c.left, b)) return !0;
				else {
					a = c.right;
					continue
				}
			else return !1
		}
	}

	function y(a, c) {
		return x(a, b("bs_curry").__1(c))
	}

	function z(a, b) {
		if (a !== null) return l(z(a.left, b), a.value, a.right);
		else return j(b)
	}

	function A(a, b) {
		if (a !== null) return l(a.left, a.value, A(a.right, b));
		else return j(b)
	}

	function B(a, b, c) {
		if (a !== null)
			if (c !== null) {
				var d = a.height,
					e = c.height;
				if (d > (e + 2 | 0)) return l(a.left, a.value, B(a.right, b, c));
				else if (e > (d + 2 | 0)) return l(B(a, b, c.left), c.value, c.right);
				else return i(a, b, c)
			} else return A(a, b);
		else return z(c, b)
	}

	function C(a, b) {
		if (a !== null)
			if (b !== null) {
				var c = {
						contents: b.value
					},
					d = o(b, c);
				return B(a, c.contents, d)
			} else return a;
		else return b
	}

	function D(a, b) {
		if (a !== null) {
			var c = a.value,
				d = D(a.left, b),
				e = d[1];
			d = d[0];
			var f = b(c);
			a = D(a.right, b);
			b = a[1];
			a = a[0];
			if (f) return [B(d, c, a), C(e, b)];
			else return [C(d, a), B(e, c, b)]
		} else return [null, null]
	}

	function E(a, c) {
		return D(a, b("bs_curry").__1(c))
	}

	function F(a) {
		var b = a.left;
		a = a.right;
		b = b !== null ? F(b) : 0;
		a = a !== null ? F(a) : 0;
		return (1 + b | 0) + a | 0
	}

	function G(a) {
		if (a !== null) return F(a);
		else return 0
	}

	function H(a, b) {
		while (!0) {
			var c = b,
				d = a;
			if (d !== null) {
				b = [d.value, H(d.right, c)];
				a = d.left;
				continue
			} else return c
		}
	}

	function I(a) {
		return H(a, 0)
	}

	function J(a) {
		while (!0) {
			var b = a;
			if (b !== null) {
				var c = b.left;
				b = b.right;
				var d = g(c) - g(b) | 0;
				if (!(d <= 2 && d >= -2)) throw new Error('File "belt_internalAVLset.ml", line 304, characters 6-12');
				J(c);
				a = b;
				continue
			} else return 0
		}
	}

	function K(a, b, c) {
		while (!0) {
			var d = b,
				e = a,
				f = e.left,
				g = e.value;
			e = e.right;
			f = f !== null ? K(f, d, c) : d;
			c[f] = g;
			d = f + 1 | 0;
			if (e !== null) {
				b = d;
				a = e;
				continue
			} else return d
		}
	}

	function L(a, b, c, d) {
		while (!0) {
			var e = a,
				f = e.left,
				g = e.value;
			e = e.right;
			f !== null && L(f, b, c, d);
			if (d(g)) {
				f = b.forward;
				c[f] = g;
				b.forward = f + 1 | 0
			} else {
				f = b.backward;
				c[f] = g;
				b.backward = f - 1 | 0
			}
			if (e !== null) {
				a = e;
				continue
			} else return 0
		}
	}

	function M(a, b, c, d) {
		while (!0) {
			var e = b,
				f = a,
				g = f.left,
				h = f.value;
			f = f.right;
			g = g !== null ? M(g, e, c, d) : e;
			e = d(h) ? (c[g] = h, g + 1 | 0) : g;
			if (f !== null) {
				b = e;
				a = f;
				continue
			} else return e
		}
	}

	function N(b) {
		if (b !== null) {
			var a = F(b);
			a = new Array(a);
			K(b, 0, a);
			return a
		} else return []
	}

	function O(a, b, c) {
		switch (c) {
			case 0:
				return null;
			case 1:
				return j(a[b]);
			case 2:
				var d = a[b],
					e = a[b - 1 | 0];
				return {
					value: e,
					height: 2,
					left: j(d),
					right: null
				};
			case 3:
				e = a[b];
				d = a[b - 1 | 0];
				var f = a[b - 2 | 0];
				return {
					value: d,
					height: 2,
					left: j(e),
					right: j(f)
				};
			default:
				d = c / 2 | 0;
				e = O(a, b, d);
				f = a[b - d | 0];
				a = O(a, (b - d | 0) - 1 | 0, (c - d | 0) - 1 | 0);
				return i(e, f, a)
		}
	}

	function P(a, b, c) {
		switch (c) {
			case 0:
				return null;
			case 1:
				return j(a[b]);
			case 2:
				var d = a[b],
					e = a[b + 1 | 0];
				return {
					value: e,
					height: 2,
					left: j(d),
					right: null
				};
			case 3:
				e = a[b];
				d = a[b + 1 | 0];
				var f = a[b + 2 | 0];
				return {
					value: d,
					height: 2,
					left: j(e),
					right: j(f)
				};
			default:
				d = c / 2 | 0;
				e = P(a, b, d);
				f = a[b + d | 0];
				a = P(a, (b + d | 0) + 1 | 0, (c - d | 0) - 1 | 0);
				return i(e, f, a)
		}
	}

	function aa(a) {
		return P(a, 0, a.length)
	}

	function Q(a, b) {
		if (a !== null) {
			var c = a.left,
				d = a.value,
				e = a.right,
				f = Q(c, b),
				g = b(d);
			b = Q(e, b);
			if (g)
				if (c === f && e === b) return a;
				else return B(f, d, b);
			else return C(f, b)
		} else return null
	}

	function ba(a, c) {
		return Q(a, b("bs_curry").__1(c))
	}

	function R(b, c) {
		if (b !== null) {
			var a = F(b);
			a = new Array(a);
			b = M(b, 0, a, c);
			return P(a, 0, b)
		} else return null
	}

	function ca(a, c) {
		return R(a, b("bs_curry").__1(c))
	}

	function S(b, c) {
		if (b !== null) {
			var a = F(b),
				d = new Array(a),
				e = a - 1 | 0,
				f = {
					forward: 0,
					backward: e
				};
			L(b, f, d, c);
			b = f.forward;
			return [P(d, 0, b), O(d, e, a - b | 0)]
		} else return [null, null]
	}

	function da(a, c) {
		return S(a, b("bs_curry").__1(c))
	}

	function ea(b, c, a) {
		while (!0) {
			var d = b;
			if (d !== null) {
				var e = d.value;
				e = a(c, e);
				if (e === 0) return !0;
				else {
					b = e < 0 ? d.left : d.right;
					continue
				}
			} else return !1
		}
	}

	function T(a, b, c) {
		var d = G(a),
			e = G(b);
		if (d === e) {
			a = q(a, 0);
			b = q(b, 0);
			c = c;
			while (!0) {
				var f = b,
					g = a;
				if (g && f) {
					var h = f[0],
						i = g[0],
						j = c(i.value, h.value);
					if (j === 0) {
						b = q(h.right, f[1]);
						a = q(i.right, g[1]);
						continue
					} else return j
				} else return 0
			}
		} else if (d < e) return -1;
		else return 1
	}

	function fa(a, b, c) {
		return T(a, b, c) === 0
	}

	function U(b, c, a) {
		while (!0) {
			var d = c,
				e = b;
			if (e !== null)
				if (d !== null) {
					var f = e.left,
						g = e.value;
					e = e.right;
					var h = d.left,
						j = d.value;
					d = d.right;
					j = a(g, j);
					if (j === 0)
						if (U(f, h, a)) {
							c = d;
							b = e;
							continue
						} else return !1;
					else if (j < 0)
						if (U(i(f, g, null), h, a)) {
							b = e;
							continue
						} else return !1;
					else if (U(i(null, g, e), d, a)) {
						b = f;
						continue
					} else return !1
				} else return !1;
			else return !0
		}
	}

	function ga(c, d, a) {
		while (!0) {
			var e = c;
			if (e !== null) {
				var f = e.value,
					g = a(d, f);
				if (g === 0) return b("bs_caml_option").some(f);
				else {
					c = g < 0 ? e.left : e.right;
					continue
				}
			} else return
		}
	}

	function ha(b, c, a) {
		while (!0) {
			var d = b;
			if (d !== null) {
				var e = d.value,
					f = a(c, e);
				if (f === 0) return e;
				else {
					b = f < 0 ? d.left : d.right;
					continue
				}
			} else return
		}
	}

	function ia(b, c, a) {
		while (!0) {
			var d = b;
			if (d !== null) {
				var e = d.value,
					f = a(c, e);
				if (f === 0) return e;
				else {
					b = f < 0 ? d.left : d.right;
					continue
				}
			} else throw new Error("getExn0")
		}
	}

	function V(a) {
		var b = a.left;
		a.left = b.right;
		b.right = a;
		var c = g(a.left),
			d = g(a.right);
		a.height = (c > d ? c : d) + 1 | 0;
		c = g(b.left);
		d = a.height;
		b.height = (c > d ? c : d) + 1 | 0;
		return b
	}

	function W(a) {
		var b = a.right;
		a.right = b.left;
		b.left = a;
		var c = g(a.left),
			d = g(a.right);
		a.height = (c > d ? c : d) + 1 | 0;
		c = g(b.right);
		d = a.height;
		b.height = (c > d ? c : d) + 1 | 0;
		return b
	}

	function ja(a) {
		var b = W(a.left);
		a.left = b;
		return V(a)
	}

	function ka(a) {
		var b = V(a.right);
		a.right = b;
		return W(a)
	}

	function X(a) {
		var b = g(a.left),
			c = g(a.right);
		a.height = (b > c ? b : c) + 1 | 0;
		return a
	}

	function Y(a) {
		var b = a.left,
			c = a.right,
			d = g(b),
			e = g(c);
		if (d > (2 + e | 0)) {
			var f = b.left;
			b = b.right;
			if (k(f, b)) return X(V(a));
			else return X(ja(a))
		} else if (e > (2 + d | 0)) {
			f = c.left;
			b = c.right;
			if (k(b, f)) return X(W(a));
			else return X(ka(a))
		} else {
			a.height = (d > e ? d : e) + 1 | 0;
			return a
		}
	}

	function Z(a, b, c) {
		if (b !== null) {
			var d = b.value;
			d = a(c, d);
			if (d === 0) return b;
			else {
				var e = b.left,
					f = b.right;
				if (d < 0) {
					d = Z(a, e, c);
					b.left = d
				} else b.right = Z(a, f, c);
				return Y(b)
			}
		} else return j(c)
	}

	function la(c, a) {
		var d = c.length;
		if (d === 0) return null;
		else {
			var e = b("bs_belt_SortArray").strictlySortedLengthU(c, function (b, c) {
					return a(b, c) < 0
				}),
				f;
			e >= 0 ? f = P(c, 0, e) : (e = -e | 0, f = O(c, e - 1 | 0, e));
			for (var e = e, d = d - 1 | 0; e <= d; ++e) f = Z(a, f, c[e]);
			return f
		}
	}

	function $(a, b) {
		var c = b.right,
			d = b.left;
		if (d !== null) {
			b.left = $(a, d);
			return Y(b)
		} else {
			a.value = b.value;
			return c
		}
	}
	f.copy = h;
	f.create = i;
	f.bal = l;
	f.singleton = j;
	f.minimum = a;
	f.minUndefined = c;
	f.maximum = d;
	f.maxUndefined = e;
	f.removeMinAuxWithRef = o;
	f.isEmpty = p;
	f.stackAllLeft = q;
	f.forEachU = r;
	f.forEach = s;
	f.reduceU = t;
	f.reduce = u;
	f.everyU = v;
	f.every = w;
	f.someU = x;
	f.some = y;
	f.joinShared = B;
	f.concatShared = C;
	f.keepSharedU = Q;
	f.keepShared = ba;
	f.keepCopyU = R;
	f.keepCopy = ca;
	f.partitionSharedU = D;
	f.partitionShared = E;
	f.partitionCopyU = S;
	f.partitionCopy = da;
	f.lengthNode = F;
	f.size = G;
	f.toList = I;
	f.checkInvariantInternal = J;
	f.fillArray = K;
	f.toArray = N;
	f.fromSortedArrayAux = P;
	f.fromSortedArrayRevAux = O;
	f.fromSortedArrayUnsafe = aa;
	f.has = ea;
	f.cmp = T;
	f.eq = fa;
	f.subset = U;
	f.get = ga;
	f.getUndefined = ha;
	f.getExn = ia;
	f.fromArray = la;
	f.addMutate = Z;
	f.balMutate = Y;
	f.removeMinAuxWithRootMutate = $
}), null);
__d("bs_belt_SetDict", ["bs_belt_internalAVLset"], (function (a, b, c, d, e, f) {
	"use strict";
	var g;

	function h(c, d, a) {
		if (c !== null) {
			var e = c.value,
				f = a(d, e);
			if (f === 0) return c;
			else {
				var g = c.left,
					i = c.right;
				if (f < 0) {
					f = h(g, d, a);
					if (f === g) return c;
					else return b("bs_belt_internalAVLset").bal(f, e, i)
				} else {
					f = h(i, d, a);
					if (f === i) return c;
					else return b("bs_belt_internalAVLset").bal(g, e, f)
				}
			}
		} else return b("bs_belt_internalAVLset").singleton(d)
	}

	function i(c, d, a) {
		if (c !== null) {
			var e = c.left,
				f = c.value,
				g = c.right,
				h = a(d, f);
			if (h === 0)
				if (e !== null)
					if (g !== null) {
						var j = {
								contents: g.value
							},
							k = b("bs_belt_internalAVLset").removeMinAuxWithRef(g, j);
						return b("bs_belt_internalAVLset").bal(e, j.contents, k)
					} else return e;
			else return g;
			else if (h < 0) {
				j = i(e, d, a);
				if (j === e) return c;
				else return b("bs_belt_internalAVLset").bal(j, f, g)
			} else {
				k = i(g, d, a);
				if (k === g) return c;
				else return b("bs_belt_internalAVLset").bal(e, f, k)
			}
		} else return c
	}

	function a(b, c, a) {
		var d = c.length;
		b = b;
		for (var e = 0, d = d - 1 | 0; e <= d; ++e) {
			var f = c[e];
			b = h(b, f, a)
		}
		return b
	}

	function c(b, c, a) {
		var d = c.length;
		b = b;
		for (var e = 0, d = d - 1 | 0; e <= d; ++e) {
			var f = c[e];
			b = i(b, f, a)
		}
		return b
	}

	function j(a, c, d) {
		var e = c.left,
			f = c.value,
			g = c.right,
			h = a(d, f);
		if (h === 0) return [e, g];
		else if (h < 0)
			if (e !== null) {
				h = j(a, e, d);
				return [h[0], b("bs_belt_internalAVLset").joinShared(h[1], f, g)]
			} else return [null, c];
		else if (g !== null) {
			h = j(a, g, d);
			return [b("bs_belt_internalAVLset").joinShared(e, f, h[0]), h[1]]
		} else return [c, null]
	}

	function k(a, c, d, e) {
		var f = c.left,
			g = c.value,
			h = c.right,
			i = a(d, g);
		if (i === 0) {
			e.contents = !0;
			return [f, h]
		} else if (i < 0)
			if (f !== null) {
				i = k(a, f, d, e);
				return [i[0], b("bs_belt_internalAVLset").joinShared(i[1], g, h)]
			} else return [null, c];
		else if (h !== null) {
			i = k(a, h, d, e);
			return [b("bs_belt_internalAVLset").joinShared(f, g, i[0]), i[1]]
		} else return [c, null]
	}

	function d(b, c, a) {
		if (b !== null) {
			var d = {
				contents: !1
			};
			a = k(a, b, c, d);
			return [a, d.contents]
		} else return [
			[null, null], !1
		]
	}

	function l(c, d, a) {
		if (c !== null)
			if (d !== null) {
				var e = c.height,
					f = d.height;
				if (e >= f)
					if (f === 1) return h(c, d.value, a);
					else {
						f = c.left;
						var g = c.value,
							i = c.right,
							k = j(a, d, g);
						return b("bs_belt_internalAVLset").joinShared(l(f, k[0], a), g, l(i, k[1], a))
					}
				else if (e === 1) return h(d, c.value, a);
				else {
					f = d.left;
					g = d.value;
					i = d.right;
					k = j(a, c, g);
					return b("bs_belt_internalAVLset").joinShared(l(k[0], f, a), g, l(k[1], i, a))
				}
			} else return c;
		else return d
	}

	function m(c, d, a) {
		if (c !== null && d !== null) {
			var e = c.left,
				f = c.value;
			c = c.right;
			var g = {
				contents: !1
			};
			d = k(a, d, f, g);
			e = m(e, d[0], a);
			c = m(c, d[1], a);
			if (g.contents) return b("bs_belt_internalAVLset").joinShared(e, f, c);
			else return b("bs_belt_internalAVLset").concatShared(e, c)
		} else return null
	}

	function n(c, d, a) {
		if (c !== null && d !== null) {
			var e = c.left,
				f = c.value,
				g = c.right,
				h = {
					contents: !1
				};
			d = k(a, d, f, h);
			e = n(e, d[0], a);
			g = n(g, d[1], a);
			if (h.contents) return b("bs_belt_internalAVLset").concatShared(e, g);
			else return b("bs_belt_internalAVLset").joinShared(e, f, g)
		} else return c
	}
	e = null;
	var o = (g = b("bs_belt_internalAVLset")).fromArray,
		p = g.fromSortedArrayUnsafe,
		q = g.isEmpty,
		r = g.has,
		s = g.subset,
		t = g.cmp,
		u = g.eq,
		v = g.forEachU,
		w = g.forEach,
		x = g.reduceU,
		y = g.reduce,
		z = g.everyU,
		A = g.every,
		B = g.someU,
		C = g.some,
		D = g.keepSharedU,
		E = g.keepShared,
		F = g.partitionSharedU,
		G = g.partitionShared,
		H = g.size,
		I = g.toList,
		J = g.toArray,
		K = g.minimum,
		L = g.minUndefined,
		M = g.maximum,
		N = g.maxUndefined,
		O = g.get,
		P = g.getUndefined,
		Q = g.getExn;
	g = g.checkInvariantInternal;
	f.empty = e;
	f.fromArray = o;
	f.fromSortedArrayUnsafe = p;
	f.isEmpty = q;
	f.has = r;
	f.add = h;
	f.mergeMany = a;
	f.remove = i;
	f.removeMany = c;
	f.union = l;
	f.intersect = m;
	f.diff = n;
	f.subset = s;
	f.cmp = t;
	f.eq = u;
	f.forEachU = v;
	f.forEach = w;
	f.reduceU = x;
	f.reduce = y;
	f.everyU = z;
	f.every = A;
	f.someU = B;
	f.some = C;
	f.keepU = D;
	f.keep = E;
	f.partitionU = F;
	f.partition = G;
	f.size = H;
	f.toList = I;
	f.toArray = J;
	f.minimum = K;
	f.minUndefined = L;
	f.maximum = M;
	f.maxUndefined = N;
	f.get = O;
	f.getUndefined = P;
	f.getExn = Q;
	f.split = d;
	f.checkInvariantInternal = g
}), null);
__d("bs_belt_Set", ["bs_curry", "bs_belt_SetDict"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		c = c.cmp;
		return {
			cmp: c,
			data: b("bs_belt_SetDict").fromArray(a, c)
		}
	}

	function c(c, d) {
		var a = c.cmp,
			e = c.data;
		d = b("bs_belt_SetDict").remove(e, d, a);
		if (d === e) return c;
		else return {
			cmp: a,
			data: d
		}
	}

	function d(c, d) {
		var a = c.cmp,
			e = c.data;
		d = b("bs_belt_SetDict").add(e, d, a);
		if (d === e) return c;
		else return {
			cmp: a,
			data: d
		}
	}

	function e(c, d) {
		var a = c.cmp;
		return {
			cmp: a,
			data: b("bs_belt_SetDict").mergeMany(c.data, d, a)
		}
	}

	function g(c, d) {
		var a = c.cmp;
		return {
			cmp: a,
			data: b("bs_belt_SetDict").removeMany(c.data, d, a)
		}
	}

	function h(c, d) {
		var a = c.cmp;
		return {
			cmp: a,
			data: b("bs_belt_SetDict").union(c.data, d.data, a)
		}
	}

	function i(c, d) {
		var a = c.cmp;
		return {
			cmp: a,
			data: b("bs_belt_SetDict").intersect(c.data, d.data, a)
		}
	}

	function j(c, d) {
		var a = c.cmp;
		return {
			cmp: a,
			data: b("bs_belt_SetDict").diff(c.data, d.data, a)
		}
	}

	function k(c, d) {
		var a = c.cmp;
		return b("bs_belt_SetDict").subset(c.data, d.data, a)
	}

	function l(c, d) {
		var a = c.cmp;
		c = b("bs_belt_SetDict").split(c.data, d, a);
		d = c[0];
		return [
			[{
				cmp: a,
				data: d[0]
			}, {
				cmp: a,
				data: d[1]
			}], c[1]
		]
	}

	function m(a) {
		return {
			cmp: a.cmp,
			data: null
		}
	}

	function n(a) {
		return b("bs_belt_SetDict").isEmpty(a.data)
	}

	function o(a, c) {
		var d = a.cmp;
		return b("bs_belt_SetDict").cmp(a.data, c.data, d)
	}

	function p(a, c) {
		return b("bs_belt_SetDict").eq(a.data, c.data, a.cmp)
	}

	function q(a, c) {
		return b("bs_belt_SetDict").forEachU(a.data, c)
	}

	function r(a, c) {
		return b("bs_belt_SetDict").forEachU(a.data, b("bs_curry").__1(c))
	}

	function s(a, c, d) {
		return b("bs_belt_SetDict").reduceU(a.data, c, d)
	}

	function t(a, c, d) {
		return s(a, c, b("bs_curry").__2(d))
	}

	function u(a, c) {
		return b("bs_belt_SetDict").everyU(a.data, c)
	}

	function v(a, c) {
		return b("bs_belt_SetDict").everyU(a.data, b("bs_curry").__1(c))
	}

	function w(a, c) {
		return b("bs_belt_SetDict").someU(a.data, c)
	}

	function x(a, c) {
		return b("bs_belt_SetDict").someU(a.data, b("bs_curry").__1(c))
	}

	function y(a, c) {
		return {
			cmp: a.cmp,
			data: b("bs_belt_SetDict").keepU(a.data, c)
		}
	}

	function z(a, c) {
		return y(a, b("bs_curry").__1(c))
	}

	function A(a, c) {
		c = b("bs_belt_SetDict").partitionU(a.data, c);
		a = a.cmp;
		return [{
			cmp: a,
			data: c[0]
		}, {
			cmp: a,
			data: c[1]
		}]
	}

	function B(a, c) {
		return A(a, b("bs_curry").__1(c))
	}

	function C(a) {
		return b("bs_belt_SetDict").size(a.data)
	}

	function D(a) {
		return b("bs_belt_SetDict").toList(a.data)
	}

	function E(a) {
		return b("bs_belt_SetDict").toArray(a.data)
	}

	function F(a) {
		return b("bs_belt_SetDict").minimum(a.data)
	}

	function G(a) {
		return b("bs_belt_SetDict").minUndefined(a.data)
	}

	function H(a) {
		return b("bs_belt_SetDict").maximum(a.data)
	}

	function I(a) {
		return b("bs_belt_SetDict").maxUndefined(a.data)
	}

	function J(a, c) {
		return b("bs_belt_SetDict").get(a.data, c, a.cmp)
	}

	function K(a, c) {
		return b("bs_belt_SetDict").getUndefined(a.data, c, a.cmp)
	}

	function L(a, c) {
		return b("bs_belt_SetDict").getExn(a.data, c, a.cmp)
	}

	function M(a, c) {
		return b("bs_belt_SetDict").has(a.data, c, a.cmp)
	}

	function N(a, c) {
		return {
			cmp: c.cmp,
			data: b("bs_belt_SetDict").fromSortedArrayUnsafe(a)
		}
	}

	function O(a) {
		return a.data
	}

	function P(a) {
		a = a.cmp;
		return {
			cmp: a
		}
	}

	function Q(a, b) {
		return {
			cmp: a.cmp,
			data: b
		}
	}

	function R(a) {
		return b("bs_belt_SetDict").checkInvariantInternal(a.data)
	}
	var S = 0,
		T = 0,
		U = 0;
	f.Int = S;
	f.$$String = T;
	f.Dict = U;
	f.make = m;
	f.fromArray = a;
	f.fromSortedArrayUnsafe = N;
	f.isEmpty = n;
	f.has = M;
	f.add = d;
	f.mergeMany = e;
	f.remove = c;
	f.removeMany = g;
	f.union = h;
	f.intersect = i;
	f.diff = j;
	f.subset = k;
	f.cmp = o;
	f.eq = p;
	f.forEachU = q;
	f.forEach = r;
	f.reduceU = s;
	f.reduce = t;
	f.everyU = u;
	f.every = v;
	f.someU = w;
	f.some = x;
	f.keepU = y;
	f.keep = z;
	f.partitionU = A;
	f.partition = B;
	f.size = C;
	f.toArray = E;
	f.toList = D;
	f.minimum = F;
	f.minUndefined = G;
	f.maximum = H;
	f.maxUndefined = I;
	f.get = J;
	f.getUndefined = K;
	f.getExn = L;
	f.split = l;
	f.checkInvariantInternal = R;
	f.getData = O;
	f.getId = P;
	f.packIdData = Q
}), null);
__d("MessengerState.bs", ["invariant", "URI", "FBID.bs", "bs_array", "bs_block", "bs_curry", "JSSet.bs", "React", "Utils.bs", "FBJSON", "Arbiter", "gkx", "bs_js_dict", "qex", "bs_belt_Map", "bs_belt_Set", "bs_caml_obj", "ThreadId.bs", "FBIDCheck", "immutable", "bs_belt_Array", "bs_caml_array", "ChatConfig", "LogHistory", "MercuryIDs", "bs_pervasives", "bs_belt_Option", "bs_caml_option", "CurrentUser", "requireCond", "AsyncRequest", "MessagingTag", "RemoteAction.bs", "TypingStates", "MercuryAssert", "MercuryViewer", "ParticipantId.bs", "bs_belt_MapString", "bs_caml_primitive", "MercuryFilters.bs", "ImmutableObject", "MercuryLocalIDs", "ChannelConstants", "MessengerFolders.bs", "MessengerMessage.bs", "bs_js_null_undefined", "MercuryActionType", "MercuryAttachment", "MercuryDispatcher", "MercuryMessageIDs.bs", "MercuryThreadInfo", "MessengerPersonas.bs", "MessengerWebEvent", "XGroupsController", "MercuryThreadIDMap", "PageCommItemStatus", "MercuryActionStatus", "MessageRequestUtils", "MessagingThreadType", "MercuryPayloadSource", "MessengerEnvironment", "MessengerThreadUtils.bs", "recoverableViolation", "MercuryLogMessageType", "MercuryServerRequests", "MercuryThreadInformer", "MercurySyncEventsProxy", "unrecoverableViolation", "MercuryGlobalActionType", "MessageProfileRangeType", "ThreadConnectivityStatus.bs", "MercuryMessageClientState", "MessengerGroupsSyncStatus", "MercuryThreadlistConstants", "MessageUnsendabilityStatus", "setTimeoutAcrossTransitions", "MessagingGenericAdminTextType", "MessengerDesktopNotifications", "ChatReliabilityInstrumentation", "RemovedMessageTombstoneContent", "MWChatDeleteMessageEventEmitter", "MessengerThreadCannotReplyReason.bs", "RepliedToMessageStatusForGraphQL", "XMercuryThreadLikeIconController", "MessengerSharedMediaActionsLoader", "MessengerSharedPhotosVideosBaseData.bs", "MercuryDisplayTimeFilterMessageRenderer", "cr:1299779"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = b("MessagingTag").IRIS_MAPPING;

	function k(a) {
		var c = {};
		b("bs_belt_Map").forEach(a, function (b, a) {
			c[b] = a;
			return 0
		});
		return c
	}

	function a(a) {
		return k(a.threads)
	}

	function l(a, c) {
		return b("bs_js_null_undefined").fromOption(b("bs_belt_Map").get(a.threads, c))
	}

	function c(a) {
		return a.fbid
	}

	function d(a) {
		return a.deliveryReceipts
	}

	function e(a) {
		return a.readReceiptsPerThread
	}

	function m(a) {
		return a.ignoredIds
	}

	function n(a) {
		return a.blockedIds
	}

	function aa(a) {
		return a.pendingFolderUnseenCount
	}

	function ba(a) {
		return a.typing
	}

	function ca(a) {
		return a.pendingReadStatusThreads
	}

	function da(a) {
		return a.messages
	}

	function o(a) {
		return a.localIDsMap
	}

	function p(a) {
		return a.messagesWithUploadsInFlight
	}

	function q(a) {
		return a.threadlistOrderMap
	}

	function r(a) {
		return a.pinnedThreads
	}

	function ea(a) {
		return a.montage
	}

	function fa(a) {
		return a.orderedMessageLists
	}

	function ga(a) {
		return a.unreadCounts
	}

	function s(a) {
		return a.initialUnreadCounts
	}

	function ha(a) {
		return a.unseenTimestamp
	}

	function ia(a) {
		b("ChatReliabilityInstrumentation").logMESSAGE_RECEIVED(b("FBJSON").stringify({
			otid: a.offline_threading_id,
			message_id: a.message_id,
			other_user_fbid: a.other_user_fbid
		}));
		return 0
	}

	function ja(a, c, d) {
		d = d.reduce(b("bs_belt_Set").remove, c.reduce(b("bs_belt_Set").add, a.ignoredIds));
		if (d === a.ignoredIds) return a;
		else return {
			fbid: a.fbid,
			deliveryReceipts: a.deliveryReceipts,
			readReceiptsPerThread: a.readReceiptsPerThread,
			ignoredIds: d,
			blockedIds: a.blockedIds,
			pendingFolderUnseenCount: a.pendingFolderUnseenCount,
			typing: a.typing,
			threads: a.threads,
			pendingReadStatusThreads: a.pendingReadStatusThreads,
			messages: a.messages,
			localIDsMap: a.localIDsMap,
			messagesWithUploadsInFlight: a.messagesWithUploadsInFlight,
			threadlistOrderMap: a.threadlistOrderMap,
			pinnedThreads: a.pinnedThreads,
			montage: a.montage,
			orderedMessageLists: a.orderedMessageLists,
			unreadCounts: a.unreadCounts,
			initialUnreadCounts: a.initialUnreadCounts,
			unseenTimestamp: a.unseenTimestamp
		}
	}
	var ka = function (a, b) {
		delete a[b];
		return 0
	};

	function la(a, c, d) {
		var e = b("bs_belt_MapString").get(a, c);
		if (e !== void 0) {
			e = b("bs_caml_option").valFromOption(e);
			var f = b("bs_belt_Map").get(e, d);
			if (f !== void 0) return b("bs_belt_MapString").set(a, c, b("bs_belt_Map").remove(e, d));
			else return a
		} else return a
	}

	function ma(a, c) {
		var d = c.thread_fbid;
		if (d == null)
			if (c.type === "typ" || c.type === "page_typing") {
				c = b("FBID.bs").ofString(c.from.toString());
				if (c !== void 0) return b("MercuryIDs").getThreadIDFromUserID(b("bs_caml_option").valFromOption(c));
				else return null
			} else return null;
		else {
			c = b("MercuryThreadIDMap").getForFBID(a);
			return c.getClientIDFromServerIDNow(d.toString())
		}
	}
	var na = b("gkx")("1275193") ? b("MercuryFilters.bs").getSupportedFilters(0).concat([b("MercuryFilters.bs").all, b("MercuryFilters.bs").groups, b("MercuryFilters.bs").named, b("MercuryFilters.bs").unnamed]) : b("gkx")("1660458") ? b("MercuryFilters.bs").getSupportedFilters(0).concat([b("MercuryFilters.bs").all, b("MercuryFilters.bs").groups, b("MercuryFilters.bs").unsyncedChat]) : b("MercuryFilters.bs").getSupportedFilters(0).concat([b("MercuryFilters.bs").all, b("MercuryFilters.bs").groups]),
		oa = b("MessengerFolders.bs").getSupportedFolders(0).concat(["spam", "page_background"]);

	function pa(a) {
		var b = {};
		oa.forEach(function (a) {
			var c = {};
			na.forEach(function (a) {
				c[a] = {
					threadlist: [],
					reachedEnd: !1,
					existingIDs: new Set()
				};
				return 0
			});
			b[a] = c;
			return 0
		});
		return b
	}

	function qa(a, c) {
		a = b("MercuryThreadInformer").getForFBID(a);
		a.invalidatedThread(c);
		return 0
	}

	function t(a, c) {
		a = b("MercuryThreadInformer").getForFBID(a);
		a.updatedThread(c);
		return 0
	}

	function ra(a, c) {
		a = b("MercuryThreadInformer").getForFBID(a);
		a.deletedThread(c);
		return 0
	}

	function sa(a, c, d, e) {
		a = b("MercuryThreadInformer").getForFBID(a);
		a.changedThreadReadState(c, d, e);
		return 0
	}

	function u(a, c) {
		var d = new Map();
		c.forEach(function (a, b) {
			d.set(a, b);
			return 0
		});
		return c.sort(function (c, e) {
			var f = b("bs_belt_Map").get(a.threads, c),
				g = b("bs_belt_Map").get(a.threads, e);
			if (f !== void 0 && g !== void 0) {
				g = b("bs_caml_option").valFromOption(g).timestamp - b("bs_caml_option").valFromOption(f).timestamp;
				if (g > 0) return 1;
				else if (g < 0) return -1;
				else return 0
			}
			f = d.get(c);
			g = d.get(e);
			return b("bs_belt_Option").getExn(f == null ? void 0 : b("bs_caml_option").some(f)) - b("bs_belt_Option").getExn(g == null ? void 0 : b("bs_caml_option").some(g)) | 0
		})
	}

	function ta(a, c, d, e) {
		a = b("bs_js_dict").get(a.threadlistOrderMap, d);
		if (a !== void 0) {
			d = b("bs_js_dict").get(b("bs_caml_option").valFromOption(a), e);
			if (d !== void 0) {
				var f = b("bs_caml_option").valFromOption(d);
				c.forEach(function (a) {
					if (f.existingIDs.has(a)) {
						f.existingIDs["delete"](a);
						a = f.threadlist.indexOf(a);
						f.threadlist.splice(a, 1);
						return 0
					} else return 0
				});
				return 0
			} else return 0
		} else return 0
	}

	function v(a, c, d, e) {
		a = a !== void 0 ? a : function (a) {
			return !0
		};
		var f = b("bs_belt_Map").get(c.threads, d);
		if (f !== void 0) {
			f = b("bs_caml_option").valFromOption(f);
			if (b("bs_curry")._1(a, f)) {
				a = b("ImmutableObject").set(f, e);
				f = b("bs_belt_Map").set(c.threads, d, a);
				t(c.fbid, d);
				return {
					fbid: c.fbid,
					deliveryReceipts: c.deliveryReceipts,
					readReceiptsPerThread: c.readReceiptsPerThread,
					ignoredIds: c.ignoredIds,
					blockedIds: c.blockedIds,
					pendingFolderUnseenCount: c.pendingFolderUnseenCount,
					typing: c.typing,
					threads: f,
					pendingReadStatusThreads: c.pendingReadStatusThreads,
					messages: c.messages,
					localIDsMap: c.localIDsMap,
					messagesWithUploadsInFlight: c.messagesWithUploadsInFlight,
					threadlistOrderMap: c.threadlistOrderMap,
					pinnedThreads: c.pinnedThreads,
					montage: c.montage,
					orderedMessageLists: c.orderedMessageLists,
					unreadCounts: c.unreadCounts,
					initialUnreadCounts: c.initialUnreadCounts,
					unseenTimestamp: c.unseenTimestamp
				}
			} else return c
		} else return c
	}

	function ua(c, a, d) {
		var e = new Set(a.participants);
		Object.assign(a, {
			participants: Array.from(a.participants)
		});
		d.forEach(function (d) {
			if (e.has(d)) return 0;
			else {
				a.participants.push(d);
				if (b("bs_caml_obj").caml_equal(d, c)) {
					Object.assign(a, {
						is_subscribed: !0,
						can_reply: !0,
						cannot_reply_reason: null
					});
					return 0
				} else return 0
			}
		});
		return 0
	}
	var va = b("XGroupsController");

	function wa(a) {
		var c = [b("MercuryFilters.bs").all];
		a.unread_count > 0 && c.push(b("MercuryFilters.bs").unread);
		a.is_canonical || c.push(b("MercuryFilters.bs").groups);
		if (b("gkx")("1660458")) {
			var d = a.groups_sync_status;
			d == null ? c.push(b("MercuryFilters.bs").unsyncedChat) : b("bs_caml_obj").caml_equal(d, b("MessengerGroupsSyncStatus").OPT_IN) || c.push(b("MercuryFilters.bs").unsyncedChat)
		}
		if (b("gkx")("1275193"))
			if (a.name.length !== 0) {
				c.push(b("MercuryFilters.bs").named);
				return c
			} else {
				c.push(b("MercuryFilters.bs").unnamed);
				return c
			}
		else return c
	}

	function xa(a, c, d, e) {
		oa.forEach(function (b) {
			if (b !== d) return ta(a, c, b, e);
			else return 0
		});
		var f = b("bs_js_dict").get(a.threadlistOrderMap, d);
		if (f !== void 0) {
			f = b("bs_js_dict").get(b("bs_caml_option").valFromOption(f), e);
			if (f !== void 0) {
				f = b("bs_caml_option").valFromOption(f);
				f = [f.threadlist, f.existingIDs]
			} else f = [
				[], new Set()
			]
		} else f = [
			[], new Set()
		];
		var g = f[1],
			h = f[0];
		c.forEach(function (a) {
			if (g.has(a)) return 0;
			else {
				g.add(a);
				h.push(a);
				return 0
			}
		});
		return [u(a, h), g]
	}

	function w(a, c, d, e) {
		c = b("gkx")("1275193") || b("gkx")("1660458") ? c.filter(function (c) {
			c = b("bs_belt_Map").get(a.threads, c);
			if (c !== void 0) {
				c = wa(b("bs_caml_option").valFromOption(c));
				return c.some(function (a) {
					return a === e
				})
			} else return !1
		}) : c;
		return xa(a, c, d, e)
	}

	function ya(a, c, d) {
		if (d !== void 0) {
			var e = b("bs_js_dict").get(a.unreadCounts, c);
			if (e !== void 0) {
				b("bs_caml_option").valFromOption(e).add(b("bs_caml_option").valFromOption(d));
				e = b("MercuryThreadInformer").getForFBID(a.fbid);
				e.updatedUnreadState();
				return 0
			} else {
				d = b("MercuryServerRequests").getForFBID(a.fbid);
				d.fetchUnreadThreadIDs(c);
				return 0
			}
		} else return 0
	}
	var za = b("MessengerFolders.bs").getSupportedFolders(0).filter(function (a) {
		return a !== "action:archived"
	});

	function Aa(a, c, d) {
		if (d !== void 0) {
			var e = b("bs_js_dict").get(a.unreadCounts, c);
			if (e !== void 0) {
				b("bs_caml_option").valFromOption(e)["delete"](b("bs_caml_option").valFromOption(d));
				e = b("MercuryThreadInformer").getForFBID(a.fbid);
				e.updatedUnreadState();
				return 0
			} else {
				d = b("MercuryServerRequests").getForFBID(a.fbid);
				d.fetchUnreadThreadIDs(c);
				return 0
			}
		} else return 0
	}

	function Ba(c, a, d) {
		var e = b("MessengerFolders.bs").getFromMeta(a);
		if (d !== e) {
			za.includes(e) && a.unread_count > 0 && ya(c, e, b("bs_caml_option").some(a.thread_id));
			if (za.includes(d)) return Aa(c, d, b("bs_caml_option").some(a.thread_id));
			else return 0
		} else return 0
	}

	function Ca(a, c, d, e, f) {
		var g = b("gkx")("1275193"),
			h = b("gkx")("1660458"),
			i = a.threadlistOrderMap[c][d],
			j = i.existingIDs.has(e);
		!f && (g || h) ? w(a, [e], c, d) : xa(a, [e], c, d);
		if (!g && !h || i.threadlist.length !== 0) {
			f = b("bs_caml_array").caml_array_get(i.threadlist, i.threadlist.length - 1 | 0) === e;
			if (!i.reachedEnd && !j && f) return ta(a, [e], c, d);
			else return 0
		} else return 0
	}

	function Da(a, c, d) {
		if (oa.includes(c))
			if ((c === "inbox" || c === "action:archived" || c === "pending") && (b("gkx")("1275193") || b("gkx")("1660458"))) return Ca(a, c, b("MercuryFilters.bs").unread, d, !0);
			else {
				xa(a, [d], c, b("MercuryFilters.bs").unread);
				return 0
			}
		else return 0
	}

	function Ea(c, a) {
		var d = b("MessengerFolders.bs").getFromMeta(a);
		if (oa.includes(d)) {
			na.forEach(function (b) {
				return Ca(c, d, b, a.thread_id, !1)
			});
			return 0
		} else return 0
	}

	function Fa(a, c, d, e) {
		var f = b("bs_belt_Map").get(a.threads, c);
		if (f !== void 0) {
			f = b("bs_caml_option").valFromOption(f);
			var g = b("MessengerFolders.bs").getFromMeta(f);
			if (g !== d) {
				if (e) {
					e = f.comm_status;
					e = e == null ? b("ImmutableObject").set(f, {
						folder: d
					}) : d === "other" ? b("ImmutableObject").set(f, {
						folder: d,
						comm_status: b("PageCommItemStatus").SPAM
					}) : d === "inbox" ? b("ImmutableObject").set(f, {
						folder: d,
						comm_status: b("PageCommItemStatus").TODO
					}) : b("ImmutableObject").set(f, {
						folder: d
					})
				} else e = f;
				var h = f.other_user_fbid;
				h = h == null ? [] : d === "other" ? [b("MercuryIDs").getParticipantIDFromUserID(h)] : [];
				var i = f.other_user_fbid;
				d = i == null ? [] : d === "other" ? [] : [b("MercuryIDs").getParticipantIDFromUserID(i)];
				i = ja(a, h, d);
				h = b("bs_belt_Map").set(i.threads, c, e);
				Ba(i, e, g);
				Ea(i, e);
				t(i.fbid, c);
				return {
					fbid: i.fbid,
					deliveryReceipts: i.deliveryReceipts,
					readReceiptsPerThread: i.readReceiptsPerThread,
					ignoredIds: i.ignoredIds,
					blockedIds: i.blockedIds,
					pendingFolderUnseenCount: i.pendingFolderUnseenCount,
					typing: i.typing,
					threads: h,
					pendingReadStatusThreads: i.pendingReadStatusThreads,
					messages: i.messages,
					localIDsMap: i.localIDsMap,
					messagesWithUploadsInFlight: i.messagesWithUploadsInFlight,
					threadlistOrderMap: i.threadlistOrderMap,
					pinnedThreads: i.pinnedThreads,
					montage: i.montage,
					orderedMessageLists: i.orderedMessageLists,
					unreadCounts: i.unreadCounts,
					initialUnreadCounts: i.initialUnreadCounts,
					unseenTimestamp: i.unseenTimestamp
				}
			} else {
				Ea(a, f);
				return a
			}
		} else return a
	}

	function Ga(a, c, d) {
		d = c.is_filtered_content ? b("MercuryDisplayTimeFilterMessageRenderer").renderFilteredContent(c) : d !== void 0 ? d : c.body;
		var e = c.raw_attachments;
		e = !(e == null) && e.length !== 0 ? b("MercuryAttachment").convertRaw(e) : c.attachments;
		var f = c.removed_timestamp;
		if (f == null) {
			f = c.log_message_type;
			d = {
				snippet: d,
				snippet_attachments: e,
				snippet_sender: f == null ? c.author : null
			}
		} else d = {
			snippet: b("RemovedMessageTombstoneContent").getTombstoneContentForSnippet(c.author),
			snippet_attachments: null,
			snippet_sender: null
		};
		return Object.assign(a, d)
	}

	function Ha(a, c, d) {
		var e = a.event_title,
			f = a.event_time;
		a = a.event_location_name;
		return {
			creator_id: null,
			latitude: null,
			location_address: null,
			longitude: null,
			note: "",
			related_event: {
				id: ""
			},
			repeat_mode: null,
			seconds_to_notify_before: 0,
			status: null,
			track_rsvp: c.track_rsvp,
			title: e == null ? c.title : e,
			event_time: f == null ? c.event_time : parseInt(f, 10),
			location_name: a == null ? c.location_name : a,
			event_members: d !== void 0 ? b("bs_caml_option").valFromOption(d) : c.event_members,
			oid: c.oid,
			event_type: c.event_type
		}
	}

	function Ia(b, a) {
		var c = {};
		Object.keys(b).forEach(function (a) {
			c[a] = b[a];
			return 0
		});
		c[a.guest_id] = a.guest_status;
		return c
	}
	var x = function (a, b) {
			delete a[b];
			return 0
		},
		Ja = function (a, b) {
			delete a[b];
			return 0
		};

	function y(a) {
		var c = {
				contents: -1
			},
			d = {
				contents: null
			},
			e = Math.floor(Date.now() / 1e3);
		b("bs_js_dict").entries(a).forEach(function (a) {
			a = a[1];
			var b = a.event_time;
			if (b > e && (c.contents < 0 || c.contents > b)) {
				c.contents = b;
				d.contents = a;
				return 0
			} else return 0
		});
		return d.contents
	}
	var z = b("XMercuryThreadLikeIconController");

	function Ka(a, c, d) {
		d = z.getURIBuilder().setString("emoji", d).getURI();
		new(b("AsyncRequest"))(d).setHandler(function (d) {
			var e = b("MercuryDispatcher").getForFBID(a);
			e.handleUpdate({
				actions: [{
					action_type: b("MercuryActionType").UPDATE_CUSTOM_LIKE,
					thread_id: c,
					custom_like: d.getPayload()
				}],
				from_client: !0,
				payload_source: b("MercuryPayloadSource").CLIENT_CHANGE_CUSTOM_LIKE
			});
			return 0
		}).send();
		return 0
	}

	function La(d, a, c, e) {
		c = c.log_message_data;
		if (c == null) return 0;
		else {
			var f = c.untypedData;
			if (c.message_type === b("MessagingGenericAdminTextType").CHANGE_THREAD_NICKNAME) {
				var g = a.custom_nickname;
				if (!(g == null)) {
					g = b("bs_js_dict").fromArray(b("bs_js_dict").entries(g));
					var h = f.nickname;
					h.trim().length > 0 ? g[f.participant_id] = h : Ja(g, f.participant_id);
					Object.assign(a, {
						custom_nickname: g
					})
				}
				t(d, e)
			} else if (c.message_type === b("MessagingGenericAdminTextType").CHANGE_THREAD_ICON) Ka(d, e, f.thread_icon);
			else if (c.message_type === b("MessagingGenericAdminTextType").CHANGE_THREAD_THEME) {
				if (!b("ChatConfig").get("chat_tab_has_gradients")) {
					h = f.theme_color;
					if (h == null) Object.assign(a, {
						solid_color: null,
						header_color: null,
						footer_color: null,
						gradient_colors: []
					});
					else if (h.length > 0) {
						g = "#" + h.slice(2);
						Object.assign(a, {
							solid_color: g,
							header_color: g,
							footer_color: g,
							gradient_colors: [g]
						})
					} else Object.assign(a, {
						solid_color: null,
						header_color: null,
						footer_color: null,
						gradient_colors: []
					});
					t(d, e)
				}
			} else if (f !== void 0)
				if (c.message_type === b("MessagingGenericAdminTextType").LIGHTWEIGHT_EVENT_CREATE) {
					var i = {},
						j = f.event_creator_id;
					a.participants.forEach(function (a) {
						a = b("MercuryIDs").getUserIDFromParticipantID(a);
						if (a == null) return 0;
						else {
							i[a] = b("bs_caml_obj").caml_equal(a, j) ? "GOING" : "INVITED";
							return 0
						}
					});
					h = b("bs_js_dict").fromArray(b("bs_js_dict").entries(a.lightweight_events));
					g = f.event_time;
					g = {
						track_rsvp: f.event_track_rsvp,
						title: f.event_title,
						event_time: g == null ? 0 : parseInt(g, 10),
						location_name: f.event_location_name,
						event_members: i,
						oid: f.event_id,
						event_type: f.event_type
					};
					Object.assign(a, {
						lightweight_event: g
					});
					h[f.event_id] = Object.assign({}, g);
					Object.assign(a, {
						lightweight_events: h
					});
					t(d, e)
				} else if (c.message_type === b("MessagingGenericAdminTextType").LIGHTWEIGHT_EVENT_UPDATE || c.message_type === b("MessagingGenericAdminTextType").LIGHTWEIGHT_EVENT_UPDATE_TIME || c.message_type === b("MessagingGenericAdminTextType").LIGHTWEIGHT_EVENT_UPDATE_TITLE || c.message_type === b("MessagingGenericAdminTextType").LIGHTWEIGHT_EVENT_UPDATE_LOCATION) {
				g = a.lightweight_event;
				if (!(g == null)) {
					h = b("bs_js_dict").fromArray(b("bs_js_dict").entries(a.lightweight_events));
					g.oid === f.event_id && Object.assign(a, {
						lightweight_event: Ha(f, g, b("bs_caml_option").some(g.event_members))
					});
					g = b("bs_js_dict").get(h, f.event_id);
					g !== void 0 && (h[f.event_id] = Ha(f, b("bs_caml_option").valFromOption(g), void 0), Object.assign(a, {
						lightweight_events: h
					}))
				}
				t(d, e)
			} else if (c.message_type === b("MessagingGenericAdminTextType").LIGHTWEIGHT_EVENT_RSVP) {
				g = b("bs_js_dict").fromArray(b("bs_js_dict").entries(a.lightweight_events));
				h = a.lightweight_event;
				if (!(h == null) && h.oid === f.event_id) {
					var k = Ia(h.event_members, f);
					Object.assign(a, {
						lightweight_event: Ha(f, h, b("bs_caml_option").some(k))
					})
				}
				h = b("bs_js_dict").get(g, f.event_id);
				if (h !== void 0) {
					k = b("bs_caml_option").valFromOption(h);
					h = Ia(k.event_members, f);
					g[f.event_id] = Ha(f, k, b("bs_caml_option").some(h));
					Object.assign(a, {
						lightweight_events: g
					})
				}
				t(d, e)
			} else if (c.message_type === b("MessagingGenericAdminTextType").LIGHTWEIGHT_EVENT_DELETE || c.message_type === b("MessagingGenericAdminTextType").LIGHTWEIGHT_EVENT_NOTIFY) {
				k = b("bs_js_dict").fromArray(b("bs_js_dict").entries(a.lightweight_events));
				x(k, f.event_id);
				Object.assign(a, {
					lightweight_event: y(k),
					lightweight_events: k
				});
				t(d, e)
			}
			return 0
		}
	}

	function Ma(a, c, d) {
		if (b("CurrentUser").isWorkUser() && b("gkx")("1179386")) {
			var e = a;
			c = c;
			var f = d;
			d = b("bs_belt_Map").get(e.threads, c);
			if (d !== void 0) {
				d = b("bs_caml_option").valFromOption(d);
				var g = d.pinned_messages;
				g = g == null ? void 0 : g.map(function (a) {
					if (f.findIndex(function (b) {
							return b === a.message_id
						}) !== -1) return {
						message_id: a.message_id,
						pinning_time: a.pinning_time,
						message: null
					};
					else return a
				});
				if (g !== void 0) {
					d = b("ImmutableObject").set(d, {
						pinned_messages: g
					});
					g = b("bs_belt_Map").set(e.threads, c, d);
					t(e.fbid, c);
					d = g
				} else d = e.threads
			} else d = e.threads;
			return {
				fbid: e.fbid,
				deliveryReceipts: e.deliveryReceipts,
				readReceiptsPerThread: e.readReceiptsPerThread,
				ignoredIds: e.ignoredIds,
				blockedIds: e.blockedIds,
				pendingFolderUnseenCount: e.pendingFolderUnseenCount,
				typing: e.typing,
				threads: d,
				pendingReadStatusThreads: e.pendingReadStatusThreads,
				messages: e.messages,
				localIDsMap: e.localIDsMap,
				messagesWithUploadsInFlight: e.messagesWithUploadsInFlight,
				threadlistOrderMap: e.threadlistOrderMap,
				pinnedThreads: e.pinnedThreads,
				montage: e.montage,
				orderedMessageLists: e.orderedMessageLists,
				unreadCounts: e.unreadCounts,
				initialUnreadCounts: e.initialUnreadCounts,
				unseenTimestamp: e.unseenTimestamp
			}
		} else return a
	}

	function Na(a, c, d, e) {
		a = b("MercuryThreadInformer").getForFBID(a);
		a.updatedMessage(c, d, b("bs_js_null_undefined").fromOption(e));
		return 0
	}

	function A(c, a) {
		c = b("MercuryThreadInformer").getForFBID(c);
		c.receivedMessage(a);
		return 0
	}

	function Oa(a, c, d) {
		a = b("MercuryThreadInformer").getForFBID(a);
		a.reorderedMessages(c, d);
		return 0
	}

	function Pa(a, c, d, e, f) {
		a = b("MercuryThreadInformer").getForFBID(a);
		f = b("bs_belt_Option").getWithDefault(b("bs_belt_Option").map(f == null ? void 0 : b("bs_caml_option").some(f), function (a) {
			return b("bs_belt_Array").keepMap(a, function (a) {
				return b("bs_caml_option").nullable_to_opt(a.message_file_fbid)
			})
		}), []);
		b("MWChatDeleteMessageEventEmitter").emit(d);
		a.deletedMessage(c, d, b("bs_js_null_undefined").fromOption(e), f);
		return 0
	}

	function Qa(a, c, d, e) {
		a = b("MercuryThreadInformer").getForFBID(a);
		a.deletedMessage(c, d, b("bs_js_null_undefined").fromOption(e), null);
		return 0
	}
	var Ra = function (a, b) {
		delete a[b];
		return 0
	};

	function Sa(c, a) {
		var d = c.localIDsMap.get(a);
		return b("bs_caml_option").nullable_to_opt(c.messages.get(b("bs_belt_Option").getWithDefault(d == null ? void 0 : b("bs_caml_option").some(d), a)))
	}

	function Ta(a, c, d) {
		a = a !== void 0 ? a : !1;
		d = b("bs_belt_Array").keepMap(d, function (a) {
			return Sa(c, a)
		});
		if (a) return d.slice().reverse();
		else return d
	}

	function Ua(a, c) {
		return b("bs_belt_Array").keepMap(c, function (b) {
			return Sa(a, b)
		}).sort(function (a, c) {
			return b("MessengerMessage.bs").compare(c, a)
		}).map(function (a) {
			return a.message_id
		})
	}

	function Va(a, b) {
		return {
			fbid: a.fbid,
			deliveryReceipts: a.deliveryReceipts,
			readReceiptsPerThread: a.readReceiptsPerThread,
			ignoredIds: a.ignoredIds,
			blockedIds: a.blockedIds,
			pendingFolderUnseenCount: a.pendingFolderUnseenCount,
			typing: a.typing,
			threads: a.threads,
			pendingReadStatusThreads: a.pendingReadStatusThreads,
			messages: a.messages.set(b[0], b[1]),
			localIDsMap: a.localIDsMap,
			messagesWithUploadsInFlight: a.messagesWithUploadsInFlight,
			threadlistOrderMap: a.threadlistOrderMap,
			pinnedThreads: a.pinnedThreads,
			montage: a.montage,
			orderedMessageLists: a.orderedMessageLists,
			unreadCounts: a.unreadCounts,
			initialUnreadCounts: a.initialUnreadCounts,
			unseenTimestamp: a.unseenTimestamp
		}
	}

	function Wa(b, a) {
		b.localIDsMap.set(a.message_id, a.message_id);
		return {
			fbid: b.fbid,
			deliveryReceipts: b.deliveryReceipts,
			readReceiptsPerThread: b.readReceiptsPerThread,
			ignoredIds: b.ignoredIds,
			blockedIds: b.blockedIds,
			pendingFolderUnseenCount: b.pendingFolderUnseenCount,
			typing: b.typing,
			threads: b.threads,
			pendingReadStatusThreads: b.pendingReadStatusThreads,
			messages: b.messages,
			localIDsMap: b.localIDsMap,
			messagesWithUploadsInFlight: b.messagesWithUploadsInFlight,
			threadlistOrderMap: b.threadlistOrderMap,
			pinnedThreads: b.pinnedThreads,
			montage: b.montage,
			orderedMessageLists: b.orderedMessageLists,
			unreadCounts: b.unreadCounts,
			initialUnreadCounts: b.initialUnreadCounts,
			unseenTimestamp: b.unseenTimestamp
		}
	}
	var Xa = function (a, b) {
		delete a[b];
		return 0
	};

	function Ya(c, d) {
		var a = c.orderedMessageLists;
		Object.keys(d).forEach(function (e) {
			var f = b("bs_js_dict").get(d, e);
			if (f !== void 0) {
				f = f;
				var g = f[0],
					h = g.limit,
					i = g.offset;
				g = a.get(g.threadID);
				if (g == null) return 0;
				else {
					g = g.messageIDs;
					if (g.length >= (i + h | 0)) {
						Xa(d, e);
						return b("bs_curry")._1(f[1], Ta(!0, c, g.slice(i, i + h | 0)))
					} else return 0
				}
			} else return 0
		});
		return 0
	}

	function Za(d, c, e) {
		var a = e[1],
			f = e[0];
		b("MessengerMessage.bs").finalizeRanges(a);
		var g = a.offline_threading_id;
		if (!(g == null) && g !== a.message_id) {
			d.localIDsMap.set(g, a.message_id);
			b("MercuryMessageIDs.bs").addServerID(g, a.message_id);
			g = a.threading_id;
			g == null || b("MercuryMessageIDs.bs").addServerID(g, a.message_id)
		}
		g = d.messages.has(f);
		var h = d.fbid,
			i = d.deliveryReceipts,
			j = d.readReceiptsPerThread,
			k = d.ignoredIds,
			l = d.blockedIds,
			m = d.pendingFolderUnseenCount,
			n = d.typing,
			aa = d.threads,
			ba = d.pendingReadStatusThreads,
			ca = d.messages.set(f, a),
			da = d.localIDsMap,
			o = d.messagesWithUploadsInFlight,
			p = d.threadlistOrderMap,
			q = d.pinnedThreads,
			r = d.montage,
			ea = d.orderedMessageLists,
			fa = d.unreadCounts,
			ga = d.initialUnreadCounts;
		d = d.unseenTimestamp;
		h = {
			fbid: h,
			deliveryReceipts: i,
			readReceiptsPerThread: j,
			ignoredIds: k,
			blockedIds: l,
			pendingFolderUnseenCount: m,
			typing: n,
			threads: aa,
			pendingReadStatusThreads: ba,
			messages: ca,
			localIDsMap: da,
			messagesWithUploadsInFlight: o,
			threadlistOrderMap: p,
			pinnedThreads: q,
			montage: r,
			orderedMessageLists: ea,
			unreadCounts: fa,
			initialUnreadCounts: ga,
			unseenTimestamp: d
		};
		if (!g && e[2] === 1) {
			i = b("bs_belt_Option").getWithDefault(b("bs_belt_Option").flatMap(b("bs_caml_option").nullable_to_opt(a.thread_id), function (a) {
				return b("bs_caml_option").nullable_to_opt(ea.get(a))
			}), {
				messageLoadingState: b("MercuryIDs").isLocalThread(a.thread_id) ? 1 : 0,
				messageIDs: []
			});
			j = a.thread_id;
			if (!(j == null)) {
				k = Ua(h, [f].concat(i.messageIDs.filter(function (c) {
					return b("bs_caml_obj").caml_notequal(c, a.offline_threading_id)
				})));
				ea.set(j, {
					messageLoadingState: i.messageLoadingState,
					messageIDs: k
				})
			}
			Ya(h, c.messageCallbacks.contents)
		}
		return h
	}

	function B(b, c, a) {
		b.messagesWithUploadsInFlight.set(c, a);
		return {
			fbid: b.fbid,
			deliveryReceipts: b.deliveryReceipts,
			readReceiptsPerThread: b.readReceiptsPerThread,
			ignoredIds: b.ignoredIds,
			blockedIds: b.blockedIds,
			pendingFolderUnseenCount: b.pendingFolderUnseenCount,
			typing: b.typing,
			threads: b.threads,
			pendingReadStatusThreads: b.pendingReadStatusThreads,
			messages: b.messages,
			localIDsMap: b.localIDsMap,
			messagesWithUploadsInFlight: b.messagesWithUploadsInFlight,
			threadlistOrderMap: b.threadlistOrderMap,
			pinnedThreads: b.pinnedThreads,
			montage: b.montage,
			orderedMessageLists: b.orderedMessageLists,
			unreadCounts: b.unreadCounts,
			initialUnreadCounts: b.initialUnreadCounts,
			unseenTimestamp: b.unseenTimestamp
		}
	}

	function $a(a, c) {
		var d = c[1];
		c = c[0];
		var e = a.messagesWithUploadsInFlight.get(c);
		b("bs_belt_Option").isSome(e == null ? void 0 : b("bs_caml_option").some(e)) || g(0, 1777);
		a.messagesWithUploadsInFlight["delete"](c);
		if (e == null) return b("bs_pervasives").failwith("Message must exist to update");
		else return Object.assign(e, {
			image_ids: d.image_ids,
			file_ids: d.file_ids,
			audio_ids: d.audio_ids,
			gif_ids: d.gif_ids,
			video_ids: d.video_ids,
			client_state: b("MercuryMessageClientState").SEND_TO_SERVER
		})
	}

	function ab(a, c) {
		var d = c[1],
			e = c[0],
			f = a.orderedMessageLists.get(e);
		if (f == null) return a;
		else {
			var g = b("bs_belt_Array").keepMap(d, function (b) {
					return Sa(a, b)
				}).map(function (a) {
					return a.message_id
				}),
				h = Ua(a, f.messageIDs.filter(function (a) {
					return g.indexOf(a) === -1
				}));
			a.orderedMessageLists.set(e, {
				messageLoadingState: f.messageLoadingState,
				messageIDs: h
			});
			Oa(a.fbid, e, b("bs_js_null_undefined").fromOption(c[2]));
			f = Ma(a, e, d);
			return {
				fbid: f.fbid,
				deliveryReceipts: f.deliveryReceipts,
				readReceiptsPerThread: f.readReceiptsPerThread,
				ignoredIds: f.ignoredIds,
				blockedIds: f.blockedIds,
				pendingFolderUnseenCount: f.pendingFolderUnseenCount,
				typing: f.typing,
				threads: f.threads,
				pendingReadStatusThreads: f.pendingReadStatusThreads,
				messages: f.messages,
				localIDsMap: f.localIDsMap,
				messagesWithUploadsInFlight: f.messagesWithUploadsInFlight,
				threadlistOrderMap: f.threadlistOrderMap,
				pinnedThreads: f.pinnedThreads,
				montage: f.montage,
				orderedMessageLists: f.orderedMessageLists,
				unreadCounts: f.unreadCounts,
				initialUnreadCounts: f.initialUnreadCounts,
				unseenTimestamp: f.unseenTimestamp
			}
		}
	}

	function bb(c, d) {
		var e = {
			snippet: "...",
			snippet_attachments: null,
			snippet_sender: null
		};
		d = b("bs_belt_Option").flatMap(b("bs_caml_option").nullable_to_opt(c.orderedMessageLists.get(d)), function (a) {
			return b("bs_belt_Array").get(Ta(void 0, c, a.messageIDs), 0)
		});
		if (d !== void 0) {
			var a = b("bs_caml_option").valFromOption(d);
			a = a.is_filtered_content ? b("MercuryDisplayTimeFilterMessageRenderer").renderFilteredContent(a) : a.body
		} else a = null;
		if (d !== void 0) {
			d = b("bs_caml_option").valFromOption(d);
			var f = d.removed_timestamp;
			if (f == null)
				if (a == null) return e;
				else {
					f = d.log_message_type;
					return {
						snippet: a,
						snippet_attachments: d.attachments,
						snippet_sender: f == null ? d.author : null
					}
				}
			else return {
				snippet: b("RemovedMessageTombstoneContent").getTombstoneContentForSnippet(d.author),
				snippet_attachments: null,
				snippet_sender: null
			}
		} else return e
	}

	function cb(c, a) {
		var d = a.attachments;
		if (d == null) return 0;
		else {
			var e = b("bs_belt_Array").keepMap(d, function (a) {
				if (b("MercuryAttachment").isPhotoAttachment(a) || b("MercuryAttachment").isVideoAttachment(a)) {
					a = a.metadata;
					if (a == null) return;
					else return b("bs_caml_option").nullable_to_opt(a.fbid)
				}
			});
			b("MessengerSharedMediaActionsLoader").deletePhotos(b("MercuryIDs").getThreadFBIDFromThreadID(a.thread_id), e);
			if (c !== void 0) return b("MessengerSharedPhotosVideosBaseData.bs").localRemove(b("bs_caml_option").valFromOption(c), b("bs_belt_Array").keepMap(d, function (a) {
				if (b("MercuryAttachment").isPhotoAttachment(a) || b("MercuryAttachment").isVideoAttachment(a)) {
					a = a.metadata;
					if (a == null) return;
					else return b("bs_caml_option").nullable_to_opt(a.fbid)
				}
			}));
			else return 0
		}
	}

	function db(a, c, d) {
		d = a.orderedMessageLists.get(d);
		if (d == null) return a;
		else {
			d = d.messageIDs;
			var e = {
				contents: !0
			};
			return b("bs_belt_Array").reduce(d, a, function (d, a) {
				if (e.contents) {
					var f = d.localIDsMap.get(a);
					f = b("bs_belt_Option").getWithDefault(f == null ? void 0 : b("bs_caml_option").some(f), a);
					if (f === c) {
						e.contents = !1;
						return d
					} else {
						a = Sa(d, f);
						if (a !== void 0) {
							a = b("bs_caml_option").valFromOption(a);
							var g = a.replied_to_message,
								h;
							if (g == null) h = void 0;
							else {
								g = g.message;
								if (g == null) h = void 0;
								else {
									var i = d.localIDsMap.get(g.message_id);
									h = b("bs_belt_Option").getWithDefault(i == null ? void 0 : b("bs_caml_option").some(i), g.message_id)
								}
							}
							if (h !== void 0 && h === c) {
								i = {
									status: b("RepliedToMessageStatusForGraphQL").DELETED,
									message: null
								};
								g = Object.assign(Object.assign({}, a), {
									replied_to_message: i
								});
								return Va(d, [f, g])
							} else return d
						} else return d
					}
				} else return d
			})
		}
	}

	function eb(a, c) {
		if (a == null || a.length === 0) return 0;
		else {
			a = b("bs_array").map(function (a) {
				var d = a.type;
				if (b("bs_caml_obj").caml_equal(d, b("MessageProfileRangeType").THREAD_ACTIVE) || b("bs_caml_obj").caml_equal(d, b("MessageProfileRangeType").THREAD)) return b("gkx")("678578");
				else {
					d = a.id;
					if (d == null) return !1;
					else return b("bs_caml_obj").caml_equal(b("FBID.bs").ofStringExn(d), c)
				}
			}, a);
			return b("bs_array").fold_left(function (a, b) {
				if (b) return a + 1 | 0;
				else return a
			}, 0, a)
		}
	}

	function fb(a, c, d) {
		if (b("cr:1299779") == null) return 0;
		else {
			var e = b("MercuryIDs").getThreadFBIDFromThreadID(a);
			return b("bs_curry")._1(b("cr:1299779").log, {
				event_name: b("MessengerWebEvent").SENT_MSG,
				mid: c,
				offline_threading_id: d,
				other_user_fbid: b("MercuryIDs").isCanonical(a) ? e : null,
				thread_fbid: b("MercuryIDs").isGroupChat(a) ? e : null
			})
		}
	}

	function gb(d, c, e, f) {
		var g = e.client_message_id,
			h;
		if (g == null) h = d;
		else {
			var i = Sa(d, g);
			if (i !== void 0) {
				i = b("bs_caml_option").valFromOption(i);
				var j = e.message_id,
					k = e.status;
				if (b("bs_caml_obj").caml_equal(i.status, b("MercuryActionStatus").SUCCESS)) h = d;
				else if (d.messages.has(j)) {
					var a = Object.assign(Object.assign({}, i), e);
					Na(d.fbid, a.thread_id, a.message_id, f);
					h = Va(d, [j, a])
				} else {
					a = b("bs_caml_obj").caml_equal(e.status, b("MercuryActionStatus").SUCCESS) ? e.error_data : null;
					b("MercuryMessageIDs.bs").addServerID(g, j);
					d.localIDsMap.set(g, j);
					i = Object.assign(Object.assign({}, i), {
						status: k,
						error_data: a,
						timestamp: e.timestamp,
						log_message_data: e.log_message_data,
						ranges: e.ranges,
						attachments: e.attachments,
						has_attachment: e.has_attachment,
						is_one_way_sent: e.is_one_way_sent,
						is_forwarded: e.is_forwarded
					});
					b("MessengerMessage.bs").finalizeRanges(i);
					k = Va(d, [j, i]);
					k.messages.set(g, {});
					k.messages["delete"](g);
					a = i.thread_id;
					var l = k.orderedMessageLists.get(a);
					if (!(l == null)) {
						var m = Ua(k, l.messageIDs);
						k.orderedMessageLists.set(a, {
							messageLoadingState: l.messageLoadingState,
							messageIDs: m
						})
					}
					Na(k.fbid, i.thread_id, i.message_id, f);
					a = b("MessengerMessage.bs").isTitanMessage(i);
					l = c.localTitanMessageCount.get(i.thread_id);
					a && (l == null || c.localTitanMessageCount.set(i.thread_id, l - 1 | 0));
					h = {
						fbid: k.fbid,
						deliveryReceipts: k.deliveryReceipts,
						readReceiptsPerThread: k.readReceiptsPerThread,
						ignoredIds: k.ignoredIds,
						blockedIds: k.blockedIds,
						pendingFolderUnseenCount: k.pendingFolderUnseenCount,
						typing: k.typing,
						threads: k.threads,
						pendingReadStatusThreads: k.pendingReadStatusThreads,
						messages: k.messages,
						localIDsMap: k.localIDsMap.set(g, j),
						messagesWithUploadsInFlight: k.messagesWithUploadsInFlight,
						threadlistOrderMap: k.threadlistOrderMap,
						pinnedThreads: k.pinnedThreads,
						montage: k.montage,
						orderedMessageLists: k.orderedMessageLists,
						unreadCounts: k.unreadCounts,
						initialUnreadCounts: k.initialUnreadCounts,
						unseenTimestamp: k.unseenTimestamp
					}
				}
			} else h = d
		}
		m = {};
		f = e.log_message_type;
		if (f == null) Object.assign(m, {
			snippet_attachments: e.attachments
		});
		else {
			if (b("bs_caml_obj").caml_equal(f, b("MercuryLogMessageType").THREAD_IMAGE)) {
				a = e.log_message_data;
				if (a == null) c = null;
				else {
					i = a.image;
					c = i == null ? null : i.preview_url
				}
				Object.assign(m, {
					image_src: c
				});
				t(h.fbid, e.thread_id)
			}
			b("bs_caml_obj").caml_notequal(f, b("MercuryLogMessageType").SUBSCRIBE) && b("bs_caml_obj").caml_notequal(f, b("MercuryLogMessageType").UNSUBSCRIBE) && Object.assign(m, {
				snippet_attachments: e.attachments
			})
		}
		fb(e.thread_id, e.message_id, e.offline_threading_id);
		return v(void 0, h, e.thread_id, m)
	}

	function hb(c, a, d, e) {
		if (b("bs_caml_obj").caml_equal(d.action_type, b("MercuryActionType").SEND_MESSAGE)) return gb(c, a, d, e);
		else {
			var f = d.offline_threading_id;
			f = b("bs_belt_Option").flatMap(f == null ? void 0 : b("bs_caml_option").some(f), function (a) {
				return b("bs_caml_option").nullable_to_opt(c.localIDsMap.get(a))
			});
			var g = Sa(c, d.message_id);
			if (f !== void 0)
				if (g !== void 0) {
					f = b("bs_caml_option").valFromOption(g);
					if (b("bs_caml_option").nullable_to_opt(f.sticker_id) !== void 0) {
						var h = Object.assign(f, {
							attachments: d.attachments
						});
						return Va(c, [f.message_id, h])
					} else return c
				} else return c;
			else if (g !== void 0) return c;
			else {
				f = b("bs_caml_obj").caml_equal(e, b("bs_caml_option").some(b("MercuryPayloadSource").CLIENT_SEND_MESSAGE)) ? Wa(c, d) : c;
				h = b("bs_caml_obj").caml_equal(d.client_state, b("MercuryMessageClientState").DO_NOT_SEND_TO_SERVER);
				g = d.upload_id;
				e = h && !(g == null) ? B(f, g, d) : f;
				h = b("MessengerMessage.bs").isErrorLogMessage(d);
				g = d.thread_id;
				h && (g == null || (a.failedHistoryFetchThreads.contents[g] = !0));
				f = d.manual_retry_cnt;
				h = d.thread_id;
				f == null || !(h == null) && f > 0 && Oa(e.fbid, h, b("MercuryPayloadSource").CLIENT_SEND_MESSAGE);
				g = Za(e, a, [d.message_id, d, 1]);
				A(g.fbid, d);
				return g
			}
		}
	}

	function ib(a, c, d, e) {
		if (c !== void 0) {
			c = b("bs_caml_obj").caml_equal(b("bs_caml_option").valFromOption(c), b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE);
			var f = d.thread_id;
			if (c && !(f == null)) {
				c = b("MercuryThreadInformer").getForFBID(a);
				return b("bs_curry")._3(e, c, f, d)
			} else return 0
		} else return 0
	}

	function jb(a, b) {
		var c = a.participants.indexOf(b);
		if (c > 0) {
			Object.assign(a, {
				participants: [b].concat(a.participants.slice(0, c), a.participants.slice(c + 1 | 0))
			});
			return 0
		} else return 0
	}

	function kb(a, c, d, e) {
		var f = c.thread_id;
		if (f == null) return a;
		else {
			var g = b("bs_belt_Map").get(a.threads, f);
			if (g !== void 0) {
				g = b("bs_caml_option").valFromOption(g);
				var h = {};
				if (!c.skip_bump_thread && b("bs_caml_obj").caml_notequal(d, b("bs_caml_option").some(b("MercuryPayloadSource").SERVER_FETCH_THREAD_INFO))) {
					Ga(h, c, b("bs_caml_option").nullable_to_opt(c.log_message_body));
					if (c.timestamp > g.timestamp) {
						Object.assign(h, {
							timestamp: c.timestamp
						});
						if (c.is_unread) {
							Object.assign(h, {
								unread_count: g.unread_count + 1 | 0
							});
							d = eb(c.profile_ranges, a.fbid);
							d > 0 && Object.assign(h, {
								unread_mentions_count: g.unread_mentions_count + d | 0
							})
						}
					}
					Object.assign(h, {
						message_count: g.message_count + 1 | 0,
						is_archived: !1
					})
				}
				e !== !0 && (c.timestamp > h.server_timestamp && Object.assign(h, {
					server_timestamp: c.timestamp
				}));
				if (b("bs_caml_obj").caml_notequal(h, {})) return v(void 0, a, f, h);
				else return a
			} else return a
		}
	}

	function lb(b, a, c) {
		var d = new Set(c);
		Object.assign(a, {
			participants: a.participants.filter(function (a) {
				return !d.has(a)
			})
		});
		if (d.has(b)) {
			Object.assign(a, {
				can_reply: !1,
				is_subscribed: !1
			});
			return 0
		} else return 0
	}

	function C(c, a, d) {
		a = a.specific_to_list;
		if (a == null) {
			d = b("MercuryIDs").tokenize(d);
			if (d.type !== "user" || d.value.length === 0) return [c];
			else return [b("MercuryIDs").getParticipantIDFromUserID(b("FBID.bs").ofStringExn(d.value)), c]
		} else return a
	}

	function D(c, a, d) {
		var e = b("MercuryIDs").tokenize(d),
			f = e.type === "user",
			g = a.specific_to_list;
		g = f ? !0 : g == null ? !1 : b("MessengerThreadUtils.bs").isCanonicalFromInitialParticipants(c, g);
		if (g || f) c = C(c, a, d);
		else {
			var h = a.specific_to_list;
			c = h == null ? [] : h
		}
		return new(b("ImmutableObject"))({
			admins: {},
			admin_model_status: null,
			approval_mode: 0,
			approval_queue_ids: [],
			associated_object: null,
			can_reply: !0,
			cannot_reply_reason: null,
			can_viewer_report: !1,
			comm_item_owners: null,
			comm_source_id: null,
			comm_status: null,
			comm_icon_type: [],
			composer_input_disabled: null,
			custom_like_icon: null,
			custom_nickname: null,
			customization_enabled: !1,
			description: null,
			ephemeral_ttl_mode: 0,
			footer_color: null,
			game_id: null,
			gradient_colors: [],
			accessibility_label: null,
			reverse_gradients_for_radial: null,
			group_approval_queue: null,
			group_thread_subtype: null,
			work_associated_group: null,
			pinned_messages: null,
			groups_sync_status: null,
			has_email_participant: !1,
			has_montage: !1,
			unread_mentions_count: 0,
			header_color: null,
			is_canonical_neo_user: !1,
			is_from_weak_entry_point: !1,
			is_pin_protected: !1,
			is_pinned: !1,
			is_thread_queue_enabled: !1,
			joinable_mode: {
				link: "",
				mode: 0
			},
			last_message_timestamp: 0,
			last_message_type: null,
			last_message_admin_text_type: null,
			last_message_unsendability_status: null,
			last_message_id: null,
			last_read_timestamp: 0,
			lightweight_event: null,
			lightweight_events: {},
			marketplace_thread_data: null,
			mentions_mute_mode: 0,
			mute_until: null,
			page_comm_item_id: null,
			page_thread_info: null,
			page_unsubscribe_status: !1,
			participant_add_mode: null,
			participants_event_status: null,
			reactions_mute_mode: 0,
			read_only: !1,
			recipients_loadable: !0,
			rtc_call_data: null,
			server_timestamp: 0,
			solid_color: null,
			subtitle: null,
			theme_id: null,
			reactions: void 0,
			thread_associated_job_applications: null,
			thread_associated_page_admin: null,
			thread_connectivity_data: null,
			thread_fbid: null,
			thread_type: null,
			thread_pin_timestamp: null,
			thread_id: d,
			participants: c,
			preloaded_participants: [],
			name: "",
			snippet: a.body,
			snippet_attachments: [],
			snippet_sender: a.author,
			unread_count: 0,
			message_count: 0,
			image_src: null,
			square_image_src: null,
			timestamp: a.timestamp,
			other_user_fbid: f ? b("FBID.bs").ofStringExn(e.value) : null,
			is_canonical_user: f,
			is_other_recipient_page: !1,
			is_canonical: g,
			is_subscribed: !0,
			folder: "inbox",
			is_archived: !1,
			is_page_follow_up: !1,
			is_page_unresponded_thread: !1,
			object_association_type: null,
			joinable_link: null,
			linked_mentorship_programs: null,
			thread_unsendability_status: null,
			is_business_page_active: !1,
			graphql_token: null,
			conversion_detection_data: null,
			suggested_reply_data: null
		})
	}

	function mb(c, d, a, e) {
		e = b("MessengerMessage.bs").hasServerTimestamp(a, e);
		var f = a.thread_id;
		if (f == null) return;
		else {
			b("MercuryAssert").isThreadID(f);
			d = b("bs_belt_Map").get(d, f);
			if (d !== void 0) return b("bs_caml_option").some(b("bs_caml_option").valFromOption(d));
			else if (b("bs_caml_obj").caml_equal(a.action_type, b("MercuryActionType").USER_GENERATED_MESSAGE) && !e) return b("bs_caml_option").some(D(b("MercuryIDs").getParticipantIDFromUserID(c), a, f));
			else return
		}
	}

	function nb(a, c) {
		var d = c.other_user_fbid;
		if (d == null) {
			var e = c.thread_fbid;
			e = e == null ? void 0 : b("bs_caml_option").some(b("MercuryIDs").getThreadIDFromThreadFBID(e))
		} else e = b("bs_caml_option").some(b("MercuryIDs").getThreadIDFromUserID(d));
		d = c.thread_id;
		e = d == null ? e : d == null ? void 0 : b("bs_caml_option").some(d);
		d = c.thread_id;
		var f;
		if (d == null) f = "";
		else {
			d = b("bs_belt_Map").get(a.threads, d);
			f = d !== void 0 ? b("MessengerFolders.bs").getFromMeta(b("bs_caml_option").valFromOption(d)) : c.folder
		}
		za.includes(f) && ((b("bs_caml_obj").caml_equal(c.action_type, b("MercuryActionType").USER_GENERATED_MESSAGE) || b("bs_caml_obj").caml_equal(c.action_type, b("MercuryActionType").LOG_MESSAGE)) && c.is_unread && ya(a, f, e));
		return {
			fbid: a.fbid,
			deliveryReceipts: a.deliveryReceipts,
			readReceiptsPerThread: a.readReceiptsPerThread,
			ignoredIds: a.ignoredIds,
			blockedIds: a.blockedIds,
			pendingFolderUnseenCount: a.pendingFolderUnseenCount,
			typing: a.typing,
			threads: a.threads,
			pendingReadStatusThreads: a.pendingReadStatusThreads,
			messages: a.messages,
			localIDsMap: a.localIDsMap,
			messagesWithUploadsInFlight: a.messagesWithUploadsInFlight,
			threadlistOrderMap: a.threadlistOrderMap,
			pinnedThreads: a.pinnedThreads,
			montage: a.montage,
			orderedMessageLists: a.orderedMessageLists,
			unreadCounts: a.unreadCounts,
			initialUnreadCounts: a.initialUnreadCounts,
			unseenTimestamp: a.unseenTimestamp
		}
	}
	var ob = function (a, b) {
		delete a[b];
		return 0
	};

	function pb(a, c) {
		Object.keys(c).forEach(function (d) {
			var e = b("bs_js_dict").get(c, d);
			if (e !== void 0) {
				e = e;
				var f = e[0],
					g = k(f.reduce(function (d, e) {
						var c = b("bs_belt_Map").get(a, e);
						if (c !== void 0) return b("bs_belt_Map").set(d, e, b("bs_caml_option").valFromOption(c));
						else return d
					}, b("bs_belt_Map").make(b("ThreadId.bs"))));
				if (Object.keys(g).length === f.length) {
					ob(c, d);
					return b("bs_curry")._1(e[1], g)
				} else return 0
			} else return 0
		});
		return 0
	}

	function qb(c, a, d, e, f) {
		var g = c.fbid;
		d !== 0 && sa(g, a.thread_id, f, d);
		if (a.timestamp === 0) {
			b("ChatReliabilityInstrumentation").logERROR("thread timestamp is 0");
			e.add(a.thread_id);
			return
		} else {
			d = a.unread_count === 0;
			if (d === f) return;
			else {
				t(g, a.thread_id);
				if (f) e = 0;
				else {
					d = b("bs_belt_Option").flatMap(b("bs_caml_option").nullable_to_opt(c.orderedMessageLists.get(a.thread_id)), function (a) {
						return b("bs_belt_Array").get(Ta(void 0, c, a.messageIDs), 0)
					});
					g = d !== void 0 ? b("bs_caml_option").valFromOption(d).profile_ranges : null;
					e = eb(g, c.fbid)
				}
				return {
					unread_count: f ? 0 : 1,
					unread_mentions_count: e
				}
			}
		}
	}

	function rb(a, c, d, e, f) {
		f = b("gkx")("1275193") || b("gkx")("1660458") ? w(a, f, c, d) : xa(a, f, c, d);
		a = a.threadlistOrderMap[c];
		c = b("bs_js_dict").get(a, d);
		c = c !== void 0 ? b("bs_caml_option").valFromOption(c).reachedEnd : !1;
		a[d] = {
			reachedEnd: e.contents ? e.contents : c,
			threadlist: f[0],
			existingIDs: f[1]
		};
		return 0
	}

	function sb(a, c, d, e) {
		var f = b("bs_belt_Array").make(e.length, []),
			g = {
				contents: !1
			};
		d.forEach(function (d) {
			d.thread_ids.forEach(function (c) {
				var h = b("bs_belt_Map").get(a.threads, c);
				if (h !== void 0) {
					h = wa(b("bs_caml_option").valFromOption(h));
					for (var g = 0, d = e.length - 1 | 0; g <= d; ++g) {
						var i = h.find(function (a) {
							return function (c) {
								return c === b("bs_caml_array").caml_array_get(e, a)
							}
						}(g));
						(i === void 0 ? void 0 : b("bs_caml_option").some(i)) !== void 0 && b("bs_caml_array").caml_array_get(f, g).push(c)
					}
					return 0
				} else return 0
			});
			d = d.limit;
			var h = e.find(function (a) {
				return a === b("MercuryFilters.bs").all
			});
			h = h === void 0 ? void 0 : b("bs_caml_option").some(h);
			for (var i = 0, c = f.length - 1 | 0; i <= c; ++i) h === void 0 && b("bs_caml_array").caml_array_get(f, i).length < d ? g.contents = !0 : b("bs_caml_array").caml_array_get(e, i) === b("MercuryFilters.bs").all && b("bs_caml_array").caml_array_get(f, i).length < d && (g.contents = !0);
			return 0
		});
		for (var d = 0, h = e.length - 1 | 0; d <= h; ++d) rb(a, c, b("bs_caml_array").caml_array_get(e, d), g, b("bs_caml_array").caml_array_get(f, d));
		return 0
	}

	function tb(c, a) {
		var d;
		if (a.is_archived) d = "action:archived";
		else {
			var e = a.thread_type;
			d = e == null || e !== b("MessagingThreadType").MARKETPLACE ? a.folder : "marketplace_folder"
		}
		e = b("bs_js_dict").get(c.threadlistOrderMap, d);
		if (e !== void 0) return d
	}

	function ub(a, c) {
		var d = {};
		oa.forEach(function (a) {
			var b = {};
			na.forEach(function (a) {
				b[a] = [];
				return 0
			});
			d[a] = b;
			return 0
		});
		c.forEach(function (c) {
			var e = b("bs_belt_Map").get(a.threads, c.thread_id);
			if (e !== void 0) {
				var f = b("bs_caml_option").valFromOption(e);
				e = tb(a, f);
				if (e !== void 0) {
					var g = e;
					wa(f).forEach(function (a) {
						if (f.timestamp !== 0) {
							d[g][a].push(c.thread_id);
							return 0
						} else return 0
					});
					return 0
				} else return 0
			} else return 0
		});
		oa.forEach(function (c) {
			na.forEach(function (e) {
				var f = d[c][e];
				if (b("gkx")("1275193") || b("gkx")("1660458")) {
					w(a, f, c, e);
					return 0
				} else {
					xa(a, f, c, e);
					return 0
				}
			});
			return 0
		});
		return {
			fbid: a.fbid,
			deliveryReceipts: a.deliveryReceipts,
			readReceiptsPerThread: a.readReceiptsPerThread,
			ignoredIds: a.ignoredIds,
			blockedIds: a.blockedIds,
			pendingFolderUnseenCount: a.pendingFolderUnseenCount,
			typing: a.typing,
			threads: a.threads,
			pendingReadStatusThreads: a.pendingReadStatusThreads,
			messages: a.messages,
			localIDsMap: a.localIDsMap,
			messagesWithUploadsInFlight: a.messagesWithUploadsInFlight,
			threadlistOrderMap: a.threadlistOrderMap,
			pinnedThreads: a.pinnedThreads,
			montage: a.montage,
			orderedMessageLists: a.orderedMessageLists,
			unreadCounts: a.unreadCounts,
			initialUnreadCounts: a.initialUnreadCounts,
			unseenTimestamp: a.unseenTimestamp
		}
	}

	function vb(a) {
		b("bs_belt_Map").map(a.threads, function (c) {
			c = b("bs_belt_Map").get(a.threads, c.thread_id);
			if (c !== void 0) {
				c = b("bs_caml_option").valFromOption(c);
				if (b("bs_caml_option").nullable_to_opt(c.thread_type) === b("MessagingThreadType").MARKETPLACE) {
					c = b("ImmutableObject").set(c, {
						folder: "marketplace_folder"
					});
					ub(a, [c]);
					return 0
				} else return 0
			} else return 0
		});
		return 0
	}

	function wb(c, a, d) {
		var e = function (a) {
				return a.timestamp > (d && c.unseenTimestamp <= a.last_read_timestamp ? a.last_read_timestamp : c.unseenTimestamp)
			},
			f = function (a) {
				var d;
				return (d = b("bs_belt_Option")).mapWithDefault(d.flatMap(d.map(d.map(b("bs_caml_option").nullable_to_opt(c.orderedMessageLists.get(a.thread_id)), function (a) {
					return b("bs_caml_array").caml_array_get(a.messageIDs, 0)
				}), function (a) {
					return b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(c.localIDsMap.get(a)), a)
				}), function (a) {
					return b("bs_caml_option").nullable_to_opt(c.messages.get(a))
				}), !1, function (a) {
					return a.author === b("MercuryIDs").getParticipantIDFromUserID(c.fbid)
				})
			},
			g = function (a, c) {
				if (e(a) && !b("MercuryThreadInfo").isMuted(a) && !f(a)) return c + 1 | 0;
				else return c
			};
		return b("bs_belt_Option").getWithDefault(b("bs_belt_Option").map(b("bs_belt_Option").flatMap(b("bs_js_dict").get(c.threadlistOrderMap, "inbox"), function (a) {
			return b("bs_js_dict").get(a, b("MercuryFilters.bs").all)
		}), function (d) {
			d = d.threadlist;
			if (d.length !== 0) return d.reduce(function (a, d) {
				d = b("bs_belt_Map").get(c.threads, d);
				if (d !== void 0) return g(b("bs_caml_option").valFromOption(d), a);
				else return a
			}, 0);
			else if (b("bs_belt_Map").isEmpty(c.threads)) return a.fallbackUnseenCount.contents;
			else return b("bs_belt_Map").reduce(c.threads, 0, function (b, d, a) {
				d = tb(c, a);
				if (d === "inbox") return g(a, b);
				else return b
			})
		}), a.fallbackUnseenCount.contents)
	}

	function xb(c, a) {
		return b("bs_belt_Option").getWithDefault(b("bs_belt_Option").map(b("bs_belt_Option").flatMap(b("bs_js_dict").get(c.threadlistOrderMap, "inbox"), function (a) {
			return b("bs_js_dict").get(a, b("MercuryFilters.bs").all)
		}), function (d) {
			if (d.threadlist.length === 0)
				if (b("bs_belt_Map").isEmpty(c.threads)) return a.fallbackUnseenCount.contents;
				else return b("bs_belt_Map").reduce(c.threads, 0, function (d, e, a) {
					var f = tb(c, a);
					if (f !== void 0 && f === "inbox" && a.timestamp > c.unseenTimestamp && !b("MercuryThreadInfo").isMuted(a)) {
						f = b("bs_js_dict").get(c.unreadCounts, "inbox");
						if (f !== void 0 && b("bs_caml_option").valFromOption(f).has(e)) return d + 1 | 0;
						else return d
					} else return d
				});
			else return d.threadlist.reduce(function (a, d) {
				var e = b("bs_belt_Map").get(c.threads, d);
				if (e !== void 0) {
					e = b("bs_caml_option").valFromOption(e);
					if (e.timestamp > c.unseenTimestamp && !b("MercuryThreadInfo").isMuted(e)) {
						e = b("bs_js_dict").get(c.unreadCounts, "inbox");
						if (e !== void 0 && b("bs_caml_option").valFromOption(e).has(d)) return a + 1 | 0;
						else return a
					} else return a
				} else return a
			}, 0)
		}), a.fallbackUnseenCount.contents)
	}

	function yb(c, a, d) {
		if (d === "pending") return {
			fbid: c.fbid,
			deliveryReceipts: c.deliveryReceipts,
			readReceiptsPerThread: c.readReceiptsPerThread,
			ignoredIds: c.ignoredIds,
			blockedIds: c.blockedIds,
			pendingFolderUnseenCount: 0,
			typing: c.typing,
			threads: c.threads,
			pendingReadStatusThreads: c.pendingReadStatusThreads,
			messages: c.messages,
			localIDsMap: c.localIDsMap,
			messagesWithUploadsInFlight: c.messagesWithUploadsInFlight,
			threadlistOrderMap: c.threadlistOrderMap,
			pinnedThreads: c.pinnedThreads,
			montage: c.montage,
			orderedMessageLists: c.orderedMessageLists,
			unreadCounts: c.unreadCounts,
			initialUnreadCounts: c.initialUnreadCounts,
			unseenTimestamp: c.unseenTimestamp
		};
		else {
			if (b("gkx")("969964")) {
				d = b("MercuryThreadInformer").getForFBID(c.fbid);
				d.updatedUnseenTimestamp()
			}
			return {
				fbid: c.fbid,
				deliveryReceipts: c.deliveryReceipts,
				readReceiptsPerThread: c.readReceiptsPerThread,
				ignoredIds: c.ignoredIds,
				blockedIds: c.blockedIds,
				pendingFolderUnseenCount: c.pendingFolderUnseenCount,
				typing: c.typing,
				threads: c.threads,
				pendingReadStatusThreads: c.pendingReadStatusThreads,
				messages: c.messages,
				localIDsMap: c.localIDsMap,
				messagesWithUploadsInFlight: c.messagesWithUploadsInFlight,
				threadlistOrderMap: c.threadlistOrderMap,
				pinnedThreads: c.pinnedThreads,
				montage: c.montage,
				orderedMessageLists: c.orderedMessageLists,
				unreadCounts: c.unreadCounts,
				initialUnreadCounts: c.initialUnreadCounts,
				unseenTimestamp: a
			}
		}
	}

	function zb(a, c, d) {
		var e = [];
		d = b("bs_array").fold_left(function (f, g) {
			switch (g.tag | 0) {
				case 0:
					e.push(g[0].tag | 0);
					break;
				case 1:
				case 2:
					break
			}
			switch (g.tag | 0) {
				case 0:
					var i = g[0];
					if (typeof i === "number") {
						var m = f,
							n = a;
						n.threadCallbacks.contents = {};
						n.threadSubToken.contents = n.threadSubToken.contents;
						n.failedHistoryFetchThreads.contents = {};
						n.localTitanMessageCount.clear();
						b("bs_belt_Map").keysToArray(m.threads).forEach(function (a) {
							return qa(m.fbid, a)
						});
						return {
							fbid: m.fbid,
							deliveryReceipts: m.deliveryReceipts,
							readReceiptsPerThread: null,
							ignoredIds: m.ignoredIds,
							blockedIds: m.blockedIds,
							pendingFolderUnseenCount: m.pendingFolderUnseenCount,
							typing: m.typing,
							threads: b("bs_belt_Map").make(b("ThreadId.bs")),
							pendingReadStatusThreads: new Set(),
							messages: new Map(),
							localIDsMap: new Map(),
							messagesWithUploadsInFlight: m.messagesWithUploadsInFlight,
							threadlistOrderMap: pa(0),
							pinnedThreads: m.pinnedThreads,
							montage: m.montage,
							orderedMessageLists: new Map(),
							unreadCounts: m.unreadCounts,
							initialUnreadCounts: m.initialUnreadCounts,
							unseenTimestamp: m.unseenTimestamp
						}
					} else switch (i.tag | 0) {
						case 0:
							n = f;
							var aa = i[0],
								ca = {
									contents: !1
								},
								da = {
									contents: n.deliveryReceipts
								};
							Object.keys(aa).forEach(function (a) {
								var c = aa[a],
									d = b("bs_belt_Option").getWithDefault(b("bs_belt_MapString").get(da.contents, a), 0);
								if (c > d) {
									ca.contents = !0;
									da.contents = b("bs_belt_MapString").set(da.contents, a, c);
									return 0
								} else return 0
							});
							if (ca.contents) return {
								fbid: n.fbid,
								deliveryReceipts: da.contents,
								readReceiptsPerThread: n.readReceiptsPerThread,
								ignoredIds: n.ignoredIds,
								blockedIds: n.blockedIds,
								pendingFolderUnseenCount: n.pendingFolderUnseenCount,
								typing: n.typing,
								threads: n.threads,
								pendingReadStatusThreads: n.pendingReadStatusThreads,
								messages: n.messages,
								localIDsMap: n.localIDsMap,
								messagesWithUploadsInFlight: n.messagesWithUploadsInFlight,
								threadlistOrderMap: n.threadlistOrderMap,
								pinnedThreads: n.pinnedThreads,
								montage: n.montage,
								orderedMessageLists: n.orderedMessageLists,
								unreadCounts: n.unreadCounts,
								initialUnreadCounts: n.initialUnreadCounts,
								unseenTimestamp: n.unseenTimestamp
							};
							else return n;
						case 1:
							return ja(f, i[0], []);
						case 2:
							n = f;
							var o = i[0],
								p = i[1];
							p = p.reduce(b("bs_belt_Set").remove, o.reduce(b("bs_belt_Set").add, n.blockedIds));
							if (p === n.blockedIds) return n;
							else return {
								fbid: n.fbid,
								deliveryReceipts: n.deliveryReceipts,
								readReceiptsPerThread: n.readReceiptsPerThread,
								ignoredIds: n.ignoredIds,
								blockedIds: p,
								pendingFolderUnseenCount: n.pendingFolderUnseenCount,
								typing: n.typing,
								threads: n.threads,
								pendingReadStatusThreads: n.pendingReadStatusThreads,
								messages: n.messages,
								localIDsMap: n.localIDsMap,
								messagesWithUploadsInFlight: n.messagesWithUploadsInFlight,
								threadlistOrderMap: n.threadlistOrderMap,
								pinnedThreads: n.pinnedThreads,
								montage: n.montage,
								orderedMessageLists: n.orderedMessageLists,
								unreadCounts: n.unreadCounts,
								initialUnreadCounts: n.initialUnreadCounts,
								unseenTimestamp: n.unseenTimestamp
							};
						case 3:
							o = f;
							p = i[0];
							n = p.reduce(function (c, d) {
								var a = d.is_messenger_ignored;
								if (a == null) return c;
								else if (a) return b("bs_belt_Set").add(c, b("MercuryIDs").getParticipantIDFromUserID(d.fbid));
								else return b("bs_belt_Set").remove(c, b("MercuryIDs").getParticipantIDFromUserID(d.fbid))
							}, o.ignoredIds);
							if (n === o.ignoredIds) return o;
							else return {
								fbid: o.fbid,
								deliveryReceipts: o.deliveryReceipts,
								readReceiptsPerThread: o.readReceiptsPerThread,
								ignoredIds: n,
								blockedIds: o.blockedIds,
								pendingFolderUnseenCount: o.pendingFolderUnseenCount,
								typing: o.typing,
								threads: o.threads,
								pendingReadStatusThreads: o.pendingReadStatusThreads,
								messages: o.messages,
								localIDsMap: o.localIDsMap,
								messagesWithUploadsInFlight: o.messagesWithUploadsInFlight,
								threadlistOrderMap: o.threadlistOrderMap,
								pinnedThreads: o.pinnedThreads,
								montage: o.montage,
								orderedMessageLists: o.orderedMessageLists,
								unreadCounts: o.unreadCounts,
								initialUnreadCounts: o.initialUnreadCounts,
								unseenTimestamp: o.unseenTimestamp
							};
						case 4:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("SetInitialPendingFolderUnseenCount");
							p = f;
							n = i[0];
							return {
								fbid: p.fbid,
								deliveryReceipts: p.deliveryReceipts,
								readReceiptsPerThread: p.readReceiptsPerThread,
								ignoredIds: p.ignoredIds,
								blockedIds: p.blockedIds,
								pendingFolderUnseenCount: n,
								typing: p.typing,
								threads: p.threads,
								pendingReadStatusThreads: p.pendingReadStatusThreads,
								messages: p.messages,
								localIDsMap: p.localIDsMap,
								messagesWithUploadsInFlight: p.messagesWithUploadsInFlight,
								threadlistOrderMap: p.threadlistOrderMap,
								pinnedThreads: p.pinnedThreads,
								montage: p.montage,
								orderedMessageLists: p.orderedMessageLists,
								unreadCounts: p.unreadCounts,
								initialUnreadCounts: p.initialUnreadCounts,
								unseenTimestamp: p.unseenTimestamp
							};
						case 5:
							o = f;
							n = i[0];
							p = ma(o.fbid, n);
							if (p == null) return o;
							else {
								var q = b("FBID.bs").ofString(n.from.toString());
								if (q !== void 0) {
									b("MessengerPersonas.bs").addPersona(n.persona);
									var r = n.persona;
									q = r == null ? b("MercuryIDs").getParticipantIDFromUserID(b("bs_caml_option").valFromOption(q)) : b("MercuryIDs").getParticipantIDFromUserID(r.id);
									if (n.st === b("TypingStates").TYPING) {
										r = b("bs_belt_MapString").get(o.typing, p);
										if (r !== void 0) return {
											fbid: o.fbid,
											deliveryReceipts: o.deliveryReceipts,
											readReceiptsPerThread: o.readReceiptsPerThread,
											ignoredIds: o.ignoredIds,
											blockedIds: o.blockedIds,
											pendingFolderUnseenCount: o.pendingFolderUnseenCount,
											typing: b("bs_belt_MapString").set(o.typing, p, b("bs_belt_Map").set(b("bs_caml_option").valFromOption(r), q, Date.now())),
											threads: o.threads,
											pendingReadStatusThreads: o.pendingReadStatusThreads,
											messages: o.messages,
											localIDsMap: o.localIDsMap,
											messagesWithUploadsInFlight: o.messagesWithUploadsInFlight,
											threadlistOrderMap: o.threadlistOrderMap,
											pinnedThreads: o.pinnedThreads,
											montage: o.montage,
											orderedMessageLists: o.orderedMessageLists,
											unreadCounts: o.unreadCounts,
											initialUnreadCounts: o.initialUnreadCounts,
											unseenTimestamp: o.unseenTimestamp
										};
										else {
											r = b("bs_belt_Map").set(b("bs_belt_Map").make(b("ParticipantId.bs")), q, Date.now());
											return {
												fbid: o.fbid,
												deliveryReceipts: o.deliveryReceipts,
												readReceiptsPerThread: o.readReceiptsPerThread,
												ignoredIds: o.ignoredIds,
												blockedIds: o.blockedIds,
												pendingFolderUnseenCount: o.pendingFolderUnseenCount,
												typing: b("bs_belt_MapString").set(o.typing, p, r),
												threads: o.threads,
												pendingReadStatusThreads: o.pendingReadStatusThreads,
												messages: o.messages,
												localIDsMap: o.localIDsMap,
												messagesWithUploadsInFlight: o.messagesWithUploadsInFlight,
												threadlistOrderMap: o.threadlistOrderMap,
												pinnedThreads: o.pinnedThreads,
												montage: o.montage,
												orderedMessageLists: o.orderedMessageLists,
												unreadCounts: o.unreadCounts,
												initialUnreadCounts: o.initialUnreadCounts,
												unseenTimestamp: o.unseenTimestamp
											}
										}
									} else if (n.st === b("TypingStates").INACTIVE) {
										r = la(o.typing, p, q);
										if (r !== o.typing) return {
											fbid: o.fbid,
											deliveryReceipts: o.deliveryReceipts,
											readReceiptsPerThread: o.readReceiptsPerThread,
											ignoredIds: o.ignoredIds,
											blockedIds: o.blockedIds,
											pendingFolderUnseenCount: o.pendingFolderUnseenCount,
											typing: r,
											threads: o.threads,
											pendingReadStatusThreads: o.pendingReadStatusThreads,
											messages: o.messages,
											localIDsMap: o.localIDsMap,
											messagesWithUploadsInFlight: o.messagesWithUploadsInFlight,
											threadlistOrderMap: o.threadlistOrderMap,
											pinnedThreads: o.pinnedThreads,
											montage: o.montage,
											orderedMessageLists: o.orderedMessageLists,
											unreadCounts: o.unreadCounts,
											initialUnreadCounts: o.initialUnreadCounts,
											unseenTimestamp: o.unseenTimestamp
										};
										else return o
									} else return o
								} else return o
							}
						case 6:
							n = f;
							var ea = i[0],
								fa = {
									contents: !1
								},
								ga = {
									contents: n.readReceiptsPerThread
								};
							Object.keys(ea).forEach(function (c) {
								Object.keys(ea[c]).forEach(function (d) {
									var a = b("bs_belt_MapString").get(ga.contents, c);
									a = a !== void 0 ? b("bs_caml_option").valFromOption(a) : b("immutable").OrderedMap();
									var e = a.get(d),
										f = ea[c][d];
									if (!(e == null) && f.watermark <= e.watermark) return 0;
									fa.contents = !0;
									ga.contents = b("bs_belt_MapString").set(ga.contents, c, a.set(d, f));
									return 0
								});
								var a = b("bs_belt_MapString").get(ga.contents, c);
								if (a !== void 0) {
									fa.contents = !0;
									ga.contents = b("bs_belt_MapString").set(ga.contents, c, b("bs_caml_option").valFromOption(a).sort(function (a, c) {
										return b("bs_caml_primitive").caml_float_compare(a.watermark, c.watermark)
									}));
									return 0
								} else return 0
							});
							if (fa.contents) return {
								fbid: n.fbid,
								deliveryReceipts: n.deliveryReceipts,
								readReceiptsPerThread: ga.contents,
								ignoredIds: n.ignoredIds,
								blockedIds: n.blockedIds,
								pendingFolderUnseenCount: n.pendingFolderUnseenCount,
								typing: n.typing,
								threads: n.threads,
								pendingReadStatusThreads: n.pendingReadStatusThreads,
								messages: n.messages,
								localIDsMap: n.localIDsMap,
								messagesWithUploadsInFlight: n.messagesWithUploadsInFlight,
								threadlistOrderMap: n.threadlistOrderMap,
								pinnedThreads: n.pinnedThreads,
								montage: n.montage,
								orderedMessageLists: n.orderedMessageLists,
								unreadCounts: n.unreadCounts,
								initialUnreadCounts: n.initialUnreadCounts,
								unseenTimestamp: n.unseenTimestamp
							};
							else return n;
						case 7:
							var s = f;
							p = a;
							q = i[0];
							if (q.length !== 0) {
								r = s.threads;
								o = q.reduce(function (c, a) {
									return b("bs_belt_Map").set(c, a.thread_id, new(b("ImmutableObject"))(a))
								}, r);
								pb(o, p.threadCallbacks.contents);
								q.forEach(function (a) {
									return t(s.fbid, a.thread_id)
								});
								return {
									fbid: s.fbid,
									deliveryReceipts: s.deliveryReceipts,
									readReceiptsPerThread: s.readReceiptsPerThread,
									ignoredIds: s.ignoredIds,
									blockedIds: s.blockedIds,
									pendingFolderUnseenCount: s.pendingFolderUnseenCount,
									typing: s.typing,
									threads: o,
									pendingReadStatusThreads: s.pendingReadStatusThreads,
									messages: s.messages,
									localIDsMap: s.localIDsMap,
									messagesWithUploadsInFlight: s.messagesWithUploadsInFlight,
									threadlistOrderMap: s.threadlistOrderMap,
									pinnedThreads: s.pinnedThreads,
									montage: s.montage,
									orderedMessageLists: s.orderedMessageLists,
									unreadCounts: s.unreadCounts,
									initialUnreadCounts: s.initialUnreadCounts,
									unseenTimestamp: s.unseenTimestamp
								}
							} else return s;
						case 8:
							n = f;
							r = i[0];
							if (r.length !== 0) {
								var ia = n.pendingReadStatusThreads,
									sa = b("MercuryServerRequests").getForFBID(n.fbid);
								r.forEach(function (a) {
									var b = a.thread_id;
									if (ia.has(b)) {
										ia["delete"](b);
										if (a.unread_count > 0) {
											sa.changeThreadReadStatus(b, !0, null, null, null, null);
											return 0
										} else return 0
									} else return 0
								});
								return {
									fbid: n.fbid,
									deliveryReceipts: n.deliveryReceipts,
									readReceiptsPerThread: n.readReceiptsPerThread,
									ignoredIds: n.ignoredIds,
									blockedIds: n.blockedIds,
									pendingFolderUnseenCount: n.pendingFolderUnseenCount,
									typing: n.typing,
									threads: n.threads,
									pendingReadStatusThreads: ia,
									messages: n.messages,
									localIDsMap: n.localIDsMap,
									messagesWithUploadsInFlight: n.messagesWithUploadsInFlight,
									threadlistOrderMap: n.threadlistOrderMap,
									pinnedThreads: n.pinnedThreads,
									montage: n.montage,
									orderedMessageLists: n.orderedMessageLists,
									unreadCounts: n.unreadCounts,
									initialUnreadCounts: n.initialUnreadCounts,
									unseenTimestamp: n.unseenTimestamp
								}
							} else return n;
						case 9:
							var u = f,
								wa = i[0];
							b("qex")._("998180") && b("MessengerEnvironment").messengerdotcom && vb(u);
							oa.forEach(function (a) {
								na.forEach(function (d) {
									var c = u,
										e = wa,
										f = a,
										g = d;
									d = e.filter(function (c) {
										var a = c.filter;
										a = a == null ? b("MercuryFilters.bs").all : a;
										c = c.folder;
										c = c == null ? f === "inbox" : c === f;
										if (c) return a === g;
										else return !1
									});
									if (!b("gkx")("1275193") && !b("gkx")("1660458") || f !== "inbox" && f !== "action:archived" && f !== "pending" || g === b("MercuryFilters.bs").groups) {
										var h = [],
											i = {
												contents: !1
											};
										d.forEach(function (a) {
											a.thread_ids.forEach(function (a) {
												h.push(a);
												return 0
											});
											var b = a.limit;
											if (a.thread_ids.length < b) {
												i.contents = !0;
												return 0
											} else return 0
										});
										return rb(c, f, g, i, h)
									} else if (g === b("MercuryFilters.bs").all) {
										e = b("gkx")("1275193") ? [b("MercuryFilters.bs").all, b("MercuryFilters.bs").unread, b("MercuryFilters.bs").named, b("MercuryFilters.bs").unnamed] : [b("MercuryFilters.bs").all, b("MercuryFilters.bs").unread, b("MercuryFilters.bs").unsyncedChat];
										return sb(c, f, d, e)
									} else return sb(c, f, d, [b("MercuryFilters.bs").all, g])
								});
								return 0
							});
							return {
								fbid: u.fbid,
								deliveryReceipts: u.deliveryReceipts,
								readReceiptsPerThread: u.readReceiptsPerThread,
								ignoredIds: u.ignoredIds,
								blockedIds: u.blockedIds,
								pendingFolderUnseenCount: u.pendingFolderUnseenCount,
								typing: u.typing,
								threads: u.threads,
								pendingReadStatusThreads: u.pendingReadStatusThreads,
								messages: u.messages,
								localIDsMap: u.localIDsMap,
								messagesWithUploadsInFlight: u.messagesWithUploadsInFlight,
								threadlistOrderMap: u.threadlistOrderMap,
								pinnedThreads: u.pinnedThreads,
								montage: u.montage,
								orderedMessageLists: u.orderedMessageLists,
								unreadCounts: u.unreadCounts,
								initialUnreadCounts: u.initialUnreadCounts,
								unseenTimestamp: u.unseenTimestamp
							};
						case 10:
							return ub(f, i[0]);
						case 11:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("UpdatePinnedThreads");
							var w = f,
								Ca = a;
							p = i[0];
							if (p.length !== 0) {
								p.forEach(function (a) {
									if (Ca.existingPinnedThreads.has(a)) return 0;
									else {
										w.pinnedThreads.push(a);
										Ca.existingPinnedThreads.add(a);
										return 0
									}
								});
								q = b("MercuryThreadInformer").getForFBID(w.fbid);
								q.updatedThreadlist();
								return {
									fbid: w.fbid,
									deliveryReceipts: w.deliveryReceipts,
									readReceiptsPerThread: w.readReceiptsPerThread,
									ignoredIds: w.ignoredIds,
									blockedIds: w.blockedIds,
									pendingFolderUnseenCount: w.pendingFolderUnseenCount,
									typing: w.typing,
									threads: w.threads,
									pendingReadStatusThreads: w.pendingReadStatusThreads,
									messages: w.messages,
									localIDsMap: w.localIDsMap,
									messagesWithUploadsInFlight: w.messagesWithUploadsInFlight,
									threadlistOrderMap: w.threadlistOrderMap,
									pinnedThreads: w.pinnedThreads,
									montage: w.montage,
									orderedMessageLists: w.orderedMessageLists,
									unreadCounts: w.unreadCounts,
									initialUnreadCounts: w.initialUnreadCounts,
									unseenTimestamp: w.unseenTimestamp
								}
							} else return w;
						case 12:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("UnSubscribeStatusUpdate");
							o = f;
							r = i[0];
							var Ga = i[1];
							return v(function (a) {
								return a.page_unsubscribe_status !== Ga
							}, o, r, {
								page_unsubscribe_status: Ga
							});
						case 13:
							n = f;
							p = i[0];
							q = i[1];
							o = i[2];
							return v(void 0, n, p, {
								can_reply: q,
								cannot_reply_reason: o
							});
						case 14:
							r = f;
							n = i[0];
							p = i[1];
							q = b("bs_belt_Map").get(r.threads, n);
							if (q !== void 0) {
								o = Object.assign({}, b("bs_caml_option").valFromOption(q));
								ua(b("MercuryIDs").getParticipantIDFromUserID(r.fbid), o, p);
								return v(void 0, r, n, o)
							} else return r;
						case 15:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("ChangeFlag");
							q = f;
							p = i[0];
							n = i[1];
							o = b("bs_belt_Map").get(q.threads, p);
							if (o !== void 0) {
								r = b("bs_caml_option").valFromOption(o);
								o = r.page_thread_info;
								r = b("ImmutableObject").set(r, {
									page_thread_info: Object.assign(o == null ? {} : o, {
										flagged: n
									})
								});
								o = b("bs_belt_Map").set(q.threads, p, r);
								t(q.fbid, p);
								return {
									fbid: q.fbid,
									deliveryReceipts: q.deliveryReceipts,
									readReceiptsPerThread: q.readReceiptsPerThread,
									ignoredIds: q.ignoredIds,
									blockedIds: q.blockedIds,
									pendingFolderUnseenCount: q.pendingFolderUnseenCount,
									typing: q.typing,
									threads: o,
									pendingReadStatusThreads: q.pendingReadStatusThreads,
									messages: q.messages,
									localIDsMap: q.localIDsMap,
									messagesWithUploadsInFlight: q.messagesWithUploadsInFlight,
									threadlistOrderMap: q.threadlistOrderMap,
									pinnedThreads: q.pinnedThreads,
									montage: q.montage,
									orderedMessageLists: q.orderedMessageLists,
									unreadCounts: q.unreadCounts,
									initialUnreadCounts: q.initialUnreadCounts,
									unseenTimestamp: q.unseenTimestamp
								}
							} else return q;
						case 16:
							n = f;
							r = i[0];
							return v(function (a) {
								return b("MessageRequestUtils").isMessageRequest(a)
							}, n, r, {
								folder: "inbox"
							});
						case 17:
							p = f;
							o = i[0];
							q = i[1];
							return v(void 0, p, o, {
								custom_like_icon: q
							});
						case 18:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("PromoteGroupAdmins");
							n = f;
							r = i[0];
							p = i[1];
							o = b("bs_belt_Map").get(n.threads, r);
							if (o !== void 0) {
								q = b("bs_caml_option").valFromOption(o);
								o = b("bs_js_dict").fromArray(b("bs_js_dict").entries(q.admins));
								q = b("ImmutableObject").set(q, {
									admins: b("bs_array").fold_left(function (a, b) {
										a[b.admin_fbid] = b.admin_type;
										return a
									}, o, p)
								});
								o = b("bs_belt_Map").set(n.threads, r, q);
								t(n.fbid, r);
								return {
									fbid: n.fbid,
									deliveryReceipts: n.deliveryReceipts,
									readReceiptsPerThread: n.readReceiptsPerThread,
									ignoredIds: n.ignoredIds,
									blockedIds: n.blockedIds,
									pendingFolderUnseenCount: n.pendingFolderUnseenCount,
									typing: n.typing,
									threads: o,
									pendingReadStatusThreads: n.pendingReadStatusThreads,
									messages: n.messages,
									localIDsMap: n.localIDsMap,
									messagesWithUploadsInFlight: n.messagesWithUploadsInFlight,
									threadlistOrderMap: n.threadlistOrderMap,
									pinnedThreads: n.pinnedThreads,
									montage: n.montage,
									orderedMessageLists: n.orderedMessageLists,
									unreadCounts: n.unreadCounts,
									initialUnreadCounts: n.initialUnreadCounts,
									unseenTimestamp: n.unseenTimestamp
								}
							} else return n;
						case 19:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("RemoveGroupAdmins");
							p = f;
							q = i[0];
							r = i[1];
							o = b("bs_belt_Map").get(p.threads, q);
							if (o !== void 0) {
								n = b("bs_caml_option").valFromOption(o);
								o = b("bs_js_dict").fromArray(b("bs_js_dict").entries(n.admins));
								n = b("ImmutableObject").set(n, {
									admins: b("bs_array").fold_left(function (d, c) {
										var a = b("bs_js_dict").get(d, c);
										a !== void 0 && ka(d, c);
										return d
									}, o, r)
								});
								o = b("bs_belt_Map").set(p.threads, q, n);
								t(p.fbid, q);
								return {
									fbid: p.fbid,
									deliveryReceipts: p.deliveryReceipts,
									readReceiptsPerThread: p.readReceiptsPerThread,
									ignoredIds: p.ignoredIds,
									blockedIds: p.blockedIds,
									pendingFolderUnseenCount: p.pendingFolderUnseenCount,
									typing: p.typing,
									threads: o,
									pendingReadStatusThreads: p.pendingReadStatusThreads,
									messages: p.messages,
									localIDsMap: p.localIDsMap,
									messagesWithUploadsInFlight: p.messagesWithUploadsInFlight,
									threadlistOrderMap: p.threadlistOrderMap,
									pinnedThreads: p.pinnedThreads,
									montage: p.montage,
									orderedMessageLists: p.orderedMessageLists,
									unreadCounts: p.unreadCounts,
									initialUnreadCounts: p.initialUnreadCounts,
									unseenTimestamp: p.unseenTimestamp
								}
							} else return p;
						case 20:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("JoinableMode");
							r = f;
							n = i[0];
							q = i[1];
							return v(void 0, r, n, {
								joinable_mode: q
							});
						case 21:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("ApprovalMode");
							o = f;
							p = i[0];
							r = i[1];
							return v(void 0, o, p, {
								approval_mode: r
							});
						case 22:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("ApprovalQueue");
							n = f;
							q = i[0];
							o = i[1];
							p = i[2];
							var Ha = i[3],
								Ia = i[4];
							r = b("bs_belt_Map").get(n.threads, q);
							if (r !== void 0) {
								r = b("bs_caml_option").valFromOption(r);
								var x = r.group_approval_queue;
								r = {
									approval_queue_ids: r.approval_queue_ids.slice(),
									group_approval_queue: x == null ? null : x.slice()
								};
								o == null || r.approval_queue_ids.indexOf(o) === -1 && Object.assign(r, {
									approval_queue_ids: r.approval_queue_ids.concat([o])
								});
								if (!(p == null)) {
									x = r.group_approval_queue;
									x == null ? Object.assign(r, {
										group_approval_queue: [p]
									}) : x.map(function (a) {
										return a.requester.id
									}).indexOf(p.requester.id) === -1 && Object.assign(r, {
										group_approval_queue: x.concat([p])
									})
								}
								Ha == null || Object.assign(r, {
									approval_queue_ids: r.approval_queue_ids.filter(function (a) {
										return b("bs_caml_obj").caml_notequal(a, Ha)
									})
								});
								if (!(Ia == null)) {
									o = r.group_approval_queue;
									Object.assign(r, {
										group_approval_queue: (o == null ? [] : o).filter(function (a) {
											return a.requester.id !== Ia
										})
									})
								}
								return v(void 0, n, q, r)
							} else return n;
						case 23:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("IsPinProtected");
							x = f;
							p = i[0];
							o = i[1];
							return v(void 0, x, p, {
								is_pin_protected: o
							});
						case 24:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("UpdateRtcCallData");
							q = f;
							r = i[0];
							n = i[1];
							x = i[2];
							p = i[3];
							o = b("bs_belt_Map").get(q.threads, r);
							if (o !== void 0) {
								if (n == null) {
									o = b("bs_caml_option").valFromOption(o).rtc_call_data;
									o = o == null ? void 0 : n
								} else o = n;
								return v(void 0, q, r, {
									rtc_call_data: new(b("ImmutableObject"))({
										call_state: x,
										server_info_data: p,
										initiator_fbid: o
									})
								})
							} else return q;
						case 25:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("UpdateCommStatus");
							n = f;
							r = i[0];
							x = i[1];
							return v(void 0, n, r, {
								comm_status: x
							});
						case 26:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("UpdateCommItemOwner");
							p = f;
							o = i[0];
							q = i[1];
							n = i[2];
							r = i[3];
							x = q == null ? {
								nodes: []
							} : {
								nodes: [{
									admin: {
										id: q,
										name: n,
										profile_picture: {
											uri: r
										}
									}
								}]
							};
							v(void 0, p, o, {
								comm_item_owners: x
							});
							if (q == null) return v(void 0, p, o, {
								thread_associated_page_admin: null
							});
							else return v(void 0, p, o, {
								thread_associated_page_admin: {
									id: q,
									name: n,
									profile_picture: {
										uri: r
									}
								}
							});
						case 27:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("EventRsvpChanged");
							x = f;
							p = i[0];
							var Ja = i[1];
							o = i[2];
							q = b("bs_belt_Map").get(x.threads, p);
							if (q !== void 0) {
								n = b("bs_caml_option").valFromOption(q).participants_event_status;
								r = (n == null ? [] : n).filter(function (a) {
									return b("bs_caml_obj").caml_notequal(a.participant_id, Ja)
								});
								r.push({
									participant_id: Ja,
									event_status: o
								});
								return v(void 0, x, p, {
									participants_event_status: r
								})
							} else return x;
						case 28:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("GroupsSyncStatusChanged");
							q = f;
							n = i[0];
							o = i[1];
							p = i[2];
							return !(p == null) && b("bs_caml_obj").caml_equal(p, b("MessengerGroupsSyncStatus").OPT_IN) ? v(void 0, q, n, {
								groups_sync_status: o
							}) : v(void 0, q, n, {
								groups_sync_status: o,
								work_associated_group: null
							});
						case 29:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("GroupsSyncMetadataUpdate");
							r = f;
							x = i[0];
							p = i[1];
							q = i[2];
							n = i[3];
							if (p == null) return v(void 0, r, x, {
								work_associated_group: null
							});
							else if (b("bs_caml_obj").caml_equal(p, b("MessengerGroupsSyncStatus").OPT_IN)) {
								o = new(h || (h = b("URI")))(document.URL);
								var y = o.getDomain();
								y = va.getURIBuilder().setString("idorvanity", q).getURI().setDomain(y == null ? "" : y.replace("messenger.com", "facebook.com")).setPort(o.getPort()).setProtocol("https");
								return v(void 0, r, x, {
									work_associated_group: {
										id: q,
										url: y.toString(),
										group_saves: {
											count: 0
										},
										group_events: {
											count: 0
										}
									}
								})
							} else if (b("bs_caml_obj").caml_equal(p, b("MessengerGroupsSyncStatus").UPDATE_EMOJI)) return v(void 0, r, x, {
								work_associated_group: {
									id: q,
									group_icon: {
										emoji_codepoints: n
									}
								}
							});
							else return v(void 0, r, x, {
								work_associated_group: null
							});
						case 30:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("DescriptionChanged");
							o = f;
							y = i[0];
							p = i[1];
							return v(void 0, o, y, {
								description: p
							});
						case 31:
							q = f;
							n = i[0];
							r = i[1];
							return v(void 0, q, n, {
								solid_color: r.solid_color,
								header_color: r.header_color,
								footer_color: r.footer_color,
								gradient_colors: r.gradient_colors,
								theme_id: r.theme_id,
								reactions: r.reactions
							});
						case 32:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("UpdateJoinableLink");
							x = f;
							o = i[0];
							y = i[1];
							return v(void 0, x, o, {
								joinable_link: y
							});
						case 33:
							var z = f,
								Ka = i[0];
							p = b("bs_belt_Map").toArray(z.threads).reduce(function (c, d) {
								var a = d[1];
								d = d[0];
								if (a.folder === Ka) {
									t(z.fbid, d);
									return b("bs_belt_Map").set(c, d, b("ImmutableObject").set(a, {
										unread_count: 0,
										unread_mentions_count: 0
									}))
								} else return c
							}, z.threads);
							z.unreadCounts[Ka] = new Set();
							q = b("MercuryThreadInformer").getForFBID(z.fbid);
							q.updatedUnreadState();
							return {
								fbid: z.fbid,
								deliveryReceipts: z.deliveryReceipts,
								readReceiptsPerThread: z.readReceiptsPerThread,
								ignoredIds: z.ignoredIds,
								blockedIds: z.blockedIds,
								pendingFolderUnseenCount: z.pendingFolderUnseenCount,
								typing: z.typing,
								threads: p,
								pendingReadStatusThreads: z.pendingReadStatusThreads,
								messages: z.messages,
								localIDsMap: z.localIDsMap,
								messagesWithUploadsInFlight: z.messagesWithUploadsInFlight,
								threadlistOrderMap: z.threadlistOrderMap,
								pinnedThreads: z.pinnedThreads,
								montage: z.montage,
								orderedMessageLists: z.orderedMessageLists,
								unreadCounts: z.unreadCounts,
								initialUnreadCounts: z.initialUnreadCounts,
								unseenTimestamp: z.unseenTimestamp
							};
						case 34:
							var A = f,
								Ta = i[0];
							b("gkx")("1199097") && (b("ChatReliabilityInstrumentation").logDELETE_THREAD(Ta), b("LogHistory").getInstance("messenger_state").debug("delete_thread", Ta));
							n = b("bs_belt_Map").remove(A.threads, Ta);
							A.orderedMessageLists["delete"](Ta);
							A.messages.forEach(function (a, c, d) {
								if (b("bs_caml_obj").caml_equal(a.thread_id, Ta)) {
									A.messages["delete"](a.message_id);
									c = a.offline_threading_id;
									if (!(c == null)) {
										d = A.localIDsMap.get(c);
										d == null || (A.messages["delete"](d), A.localIDsMap["delete"](c))
									}
									A.localIDsMap["delete"](a.message_id);
									return 0
								} else return 0
							});
							qa(A.fbid, Ta);
							return {
								fbid: A.fbid,
								deliveryReceipts: A.deliveryReceipts,
								readReceiptsPerThread: A.readReceiptsPerThread,
								ignoredIds: A.ignoredIds,
								blockedIds: A.blockedIds,
								pendingFolderUnseenCount: A.pendingFolderUnseenCount,
								typing: A.typing,
								threads: n,
								pendingReadStatusThreads: A.pendingReadStatusThreads,
								messages: A.messages,
								localIDsMap: A.localIDsMap,
								messagesWithUploadsInFlight: A.messagesWithUploadsInFlight,
								threadlistOrderMap: A.threadlistOrderMap,
								pinnedThreads: A.pinnedThreads,
								montage: A.montage,
								orderedMessageLists: A.orderedMessageLists,
								unreadCounts: A.unreadCounts,
								initialUnreadCounts: A.initialUnreadCounts,
								unseenTimestamp: A.unseenTimestamp
							};
						case 35:
							r = i[0];
							return Za(f, a, [r.message_id, r, i[1]]);
						case 36:
							x = f;
							o = [i[0], i[1], i[2]];
							var Wa = o[2];
							y = o[1];
							var Xa = o[0];
							if (y.length !== 0) {
								q = ab(x, [Xa, y, Wa]);
								p = 0;
								Wa !== void 0 && b("bs_caml_obj").caml_equal(b("bs_caml_option").valFromOption(Wa), b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE) || (p = 1);
								p === 1 && b("MercuryServerRequests").getForFBID(q.fbid).deleteMessages(Xa, y);
								return b("bs_belt_Array").reduce(y, q, function (c, e) {
									var a = Sa(c, e),
										d = b("bs_belt_Map").get(c.threads, Xa);
									if (d !== void 0) {
										d = b("bs_caml_option").valFromOption(d);
										d = b("ImmutableObject").set(b("ImmutableObject").set(d, bb(c, Xa)), {
											message_count: d.message_count - 1 | 0
										});
										d = b("bs_belt_Map").set(c.threads, Xa, d);
										t(c.fbid, Xa);
										d = {
											fbid: c.fbid,
											deliveryReceipts: c.deliveryReceipts,
											readReceiptsPerThread: c.readReceiptsPerThread,
											ignoredIds: c.ignoredIds,
											blockedIds: c.blockedIds,
											pendingFolderUnseenCount: c.pendingFolderUnseenCount,
											typing: c.typing,
											threads: d,
											pendingReadStatusThreads: c.pendingReadStatusThreads,
											messages: c.messages,
											localIDsMap: c.localIDsMap,
											messagesWithUploadsInFlight: c.messagesWithUploadsInFlight,
											threadlistOrderMap: c.threadlistOrderMap,
											pinnedThreads: c.pinnedThreads,
											montage: c.montage,
											orderedMessageLists: c.orderedMessageLists,
											unreadCounts: c.unreadCounts,
											initialUnreadCounts: c.initialUnreadCounts,
											unseenTimestamp: c.unseenTimestamp
										}
									} else d = c;
									if (a !== void 0) {
										c = b("bs_caml_option").valFromOption(a);
										cb(b("bs_caml_option").some(Xa), c);
										Pa(d.fbid, Xa, e, Wa, c.attachments)
									}
									return d
								})
							} else return x;
						case 37:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("ChangeFolder");
							return Fa(f, i[0], i[1], 1);
						case 38:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("ChangeMuteSettings");
							n = f;
							r = i[0];
							o = i[1];
							p = b("bs_belt_Map").get(n.threads, r);
							if (p !== void 0) {
								y = b("bs_caml_option").valFromOption(p);
								var Ya;
								switch (o.tag | 0) {
									case 0:
										Ya = b("ImmutableObject").set(y, {
											reactions_mute_mode: o[0] ? 1 : 0
										});
										break;
									case 1:
										Ya = b("ImmutableObject").set(y, {
											mentions_mute_mode: o[0] ? 1 : 0
										});
										break;
									case 2:
										q = o[0];
										Ya = b("ImmutableObject").set(y, {
											mute_until: q === 0 ? void 0 : q
										});
										break
								}
								x = b("bs_belt_Map").set(n.threads, r, Ya);
								t(n.fbid, r);
								return {
									fbid: n.fbid,
									deliveryReceipts: n.deliveryReceipts,
									readReceiptsPerThread: n.readReceiptsPerThread,
									ignoredIds: n.ignoredIds,
									blockedIds: n.blockedIds,
									pendingFolderUnseenCount: n.pendingFolderUnseenCount,
									typing: n.typing,
									threads: x,
									pendingReadStatusThreads: n.pendingReadStatusThreads,
									messages: n.messages,
									localIDsMap: n.localIDsMap,
									messagesWithUploadsInFlight: n.messagesWithUploadsInFlight,
									threadlistOrderMap: n.threadlistOrderMap,
									pinnedThreads: n.pinnedThreads,
									montage: n.montage,
									orderedMessageLists: n.orderedMessageLists,
									unreadCounts: n.unreadCounts,
									initialUnreadCounts: n.initialUnreadCounts,
									unseenTimestamp: n.unseenTimestamp
								}
							} else return n;
						case 39:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("ChangeArchivedStatus");
							p = f;
							o = i[0];
							y = i[1];
							q = b("bs_belt_Map").get(p.threads, o);
							if (q !== void 0) {
								r = b("bs_caml_option").valFromOption(q);
								if (r.is_archived !== y) {
									x = b("MessengerFolders.bs").getFromMeta(r);
									n = r.comm_status;
									q = n == null ? b("ImmutableObject").set(r, {
										is_archived: y
									}) : b("ImmutableObject").set(r, {
										is_archived: y,
										comm_status: y ? b("PageCommItemStatus").DONE : b("PageCommItemStatus").TODO
									});
									n = b("bs_belt_Map").set(p.threads, o, q);
									Ba(p, q, x);
									Ea(p, q);
									t(p.fbid, o);
									return {
										fbid: p.fbid,
										deliveryReceipts: p.deliveryReceipts,
										readReceiptsPerThread: p.readReceiptsPerThread,
										ignoredIds: p.ignoredIds,
										blockedIds: p.blockedIds,
										pendingFolderUnseenCount: p.pendingFolderUnseenCount,
										typing: p.typing,
										threads: n,
										pendingReadStatusThreads: p.pendingReadStatusThreads,
										messages: p.messages,
										localIDsMap: p.localIDsMap,
										messagesWithUploadsInFlight: p.messagesWithUploadsInFlight,
										threadlistOrderMap: p.threadlistOrderMap,
										pinnedThreads: p.pinnedThreads,
										montage: p.montage,
										orderedMessageLists: p.orderedMessageLists,
										unreadCounts: p.unreadCounts,
										initialUnreadCounts: p.initialUnreadCounts,
										unseenTimestamp: p.unseenTimestamp
									}
								} else return p
							} else return p;
						case 40:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("ChangePageFollowUpStatus");
							r = f;
							y = i[0];
							x = i[1];
							q = b("bs_belt_Map").get(r.threads, y);
							if (q !== void 0) {
								o = b("bs_caml_option").valFromOption(q);
								if (o.is_page_follow_up !== x) {
									n = b("ImmutableObject").set(o, {
										is_page_follow_up: x
									});
									p = b("bs_belt_Map").set(r.threads, y, n);
									t(r.fbid, y);
									return {
										fbid: r.fbid,
										deliveryReceipts: r.deliveryReceipts,
										readReceiptsPerThread: r.readReceiptsPerThread,
										ignoredIds: r.ignoredIds,
										blockedIds: r.blockedIds,
										pendingFolderUnseenCount: r.pendingFolderUnseenCount,
										typing: r.typing,
										threads: p,
										pendingReadStatusThreads: r.pendingReadStatusThreads,
										messages: r.messages,
										localIDsMap: r.localIDsMap,
										messagesWithUploadsInFlight: r.messagesWithUploadsInFlight,
										threadlistOrderMap: r.threadlistOrderMap,
										pinnedThreads: r.pinnedThreads,
										montage: r.montage,
										orderedMessageLists: r.orderedMessageLists,
										unreadCounts: r.unreadCounts,
										initialUnreadCounts: r.initialUnreadCounts,
										unseenTimestamp: r.unseenTimestamp
									}
								} else return r
							} else return r;
						case 41:
							q = f;
							o = i[0];
							x = i[1];
							n = i[2];
							y = i[3];
							p = i[4];
							r = b("bs_belt_Map").get(q.threads, o);
							if (r !== void 0) {
								r = b("bs_caml_option").valFromOption(r);
								n = qb(q, r, n, q.pendingReadStatusThreads, x);
								n = n !== void 0 && r.last_message_timestamp > r.last_read_timestamp ? b("bs_caml_option").some(Object.assign(b("bs_caml_option").valFromOption(n), {
									last_read_timestamp: r.last_message_timestamp
								})) : n;
								if (n !== void 0) {
									n = b("ImmutableObject").set(r, b("bs_caml_option").valFromOption(n));
									var B = b("bs_belt_Map").set(q.threads, o, n);
									if (y) {
										y = !r.read_only && r.folder === "inbox";
										var C = b("MercuryServerRequests").getForFBID(q.fbid);
										C.changeThreadReadStatus(n.thread_id, x, p, n.last_read_timestamp, y, n.last_message_type)
									}
									C = B
								} else C = q.threads;
								p = b("MessengerFolders.bs").getFromMeta(r);
								x ? (ta(q, [o], p, b("MercuryFilters.bs").unread), Aa(q, p, b("bs_caml_option").some(o))) : (b("gkx")("1275193") || b("gkx")("1660458") ? Da(q, p, o) : xa(q, [o], p, b("MercuryFilters.bs").unread), ya(q, p, b("bs_caml_option").some(o)));
								return {
									fbid: q.fbid,
									deliveryReceipts: q.deliveryReceipts,
									readReceiptsPerThread: q.readReceiptsPerThread,
									ignoredIds: q.ignoredIds,
									blockedIds: q.blockedIds,
									pendingFolderUnseenCount: q.pendingFolderUnseenCount,
									typing: q.typing,
									threads: C,
									pendingReadStatusThreads: q.pendingReadStatusThreads,
									messages: q.messages,
									localIDsMap: q.localIDsMap,
									messagesWithUploadsInFlight: q.messagesWithUploadsInFlight,
									threadlistOrderMap: q.threadlistOrderMap,
									pinnedThreads: q.pinnedThreads,
									montage: q.montage,
									orderedMessageLists: q.orderedMessageLists,
									unreadCounts: q.unreadCounts,
									initialUnreadCounts: q.initialUnreadCounts,
									unseenTimestamp: q.unseenTimestamp
								}
							} else return q;
						case 42:
							var D = f,
								tb = i[0];
							y = b("bs_belt_Option").getWithDefault(b("bs_belt_Option").map(b("bs_caml_option").nullable_to_opt(D.orderedMessageLists.get(tb)), function (a) {
								return {
									messageLoadingState: a.messageLoadingState,
									messageIDs: []
								}
							}), {
								messageLoadingState: 0,
								messageIDs: []
							});
							D.orderedMessageLists.set(tb, y);
							n = b("bs_belt_Option").map(b("bs_belt_Map").get(D.threads, tb), function (a) {
								return b("ImmutableObject").set(a, {
									message_count: 0
								})
							});
							if (n !== void 0) {
								var xb = b("bs_caml_option").valFromOption(n);
								B = b("bs_belt_Map").set(D.threads, tb, xb);
								na.forEach(function (a) {
									return ta(D, [tb], b("MessengerFolders.bs").getFromMeta(xb), a)
								});
								r = B
							} else r = D.threads;
							za.forEach(function (a) {
								a = b("bs_js_dict").get(D.unreadCounts, a);
								if (a !== void 0) {
									b("bs_caml_option").valFromOption(a)["delete"](tb);
									return 0
								} else return 0
							});
							ra(D.fbid, tb);
							return {
								fbid: D.fbid,
								deliveryReceipts: D.deliveryReceipts,
								readReceiptsPerThread: D.readReceiptsPerThread,
								ignoredIds: D.ignoredIds,
								blockedIds: D.blockedIds,
								pendingFolderUnseenCount: D.pendingFolderUnseenCount,
								typing: D.typing,
								threads: r,
								pendingReadStatusThreads: D.pendingReadStatusThreads,
								messages: D.messages,
								localIDsMap: D.localIDsMap,
								messagesWithUploadsInFlight: D.messagesWithUploadsInFlight,
								threadlistOrderMap: D.threadlistOrderMap,
								pinnedThreads: D.pinnedThreads,
								montage: D.montage,
								orderedMessageLists: D.orderedMessageLists,
								unreadCounts: D.unreadCounts,
								initialUnreadCounts: D.initialUnreadCounts,
								unseenTimestamp: D.unseenTimestamp
							};
						case 43:
							x = f;
							p = a;
							o = [i[0], i[1], i[2]];
							C = $a(x, [o[0], o[1]]);
							q = C.thread_id;
							y = ab(x, [q, [C.message_id], o[2]]);
							n = p.localTitanMessageCount.get(q);
							n == null || p.localTitanMessageCount.set(q, Math.max(0, n - 1 | 0));
							return y;
						case 44:
							B = f;
							r = [i[0], i[1]];
							x = $a(B, [r[0], r[1]]);
							b("MercuryServerRequests").getForFBID(B.fbid).sendNewMessage(Object.assign(x, {
								preview_attachments: void 0
							}));
							return B;
						case 45:
							C = f;
							o = [i[0], i[1], i[2], i[3]];
							p = o[2];
							q = o[1];
							n = o[0];
							y = Sa(C, n);
							if (y !== void 0) {
								r = b("bs_caml_option").valFromOption(y);
								x = b("bs_js_dict").map(function (a) {
									return a
								}, b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(r.reactions), {}));
								q !== void 0 ? x[p] = q : Ra(x, p);
								B = Object.assign(Object.assign({}, r), {
									reactions: x
								});
								y = r.thread_id;
								y == null || Na(C.fbid, y, n, o[3]);
								return Va(C, [n, B])
							} else return C;
						case 46:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("MontageDirectExpire");
							q = f;
							p = i[0];
							x = Sa(q, p);
							if (x !== void 0) {
								r = b("bs_caml_option").valFromOption(x);
								y = r.attachments;
								if (y == null || y.length === 0) return q;
								else {
									o = b("bs_caml_array").caml_array_get(y, 0);
									n = o.share;
									if (n == null) return q;
									else {
										B = n.target;
										if (B == null) return q;
										else {
											C = B.message_state;
											if (C == null) return q;
											else {
												x = Object.assign(Object.assign({}, r), {
													attachments: b("bs_caml_array").caml_array_set(b("bs_array").copy(y), 0, Object.assign(Object.assign({}, o), {
														share: Object.assign(Object.assign({}, n), {
															target: Object.assign(Object.assign({}, B), {
																message_state: "EXPIRED"
															})
														})
													}))
												});
												return Va(q, [p, x])
											}
										}
									}
								}
							} else return q;
						case 47:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("LiveLocationUpdate");
							C = f;
							r = [i[0], i[1], i[2]];
							y = r[0];
							o = Sa(C, y);
							if (o !== void 0) {
								n = b("bs_caml_option").valFromOption(o);
								B = n.attachments;
								if (B == null || B.length === 0) return C;
								else {
									p = b("bs_caml_array").caml_array_get(B, 0);
									x = p.share;
									if (x == null) return C;
									else {
										q = x.target;
										if (q == null) return C;
										else {
											o = b("bs_array").copy(B);
											b("bs_caml_array").caml_array_set(o, 0, Object.assign(Object.assign({}, p), {
												share: Object.assign(Object.assign({}, x), {
													target: Object.assign(Object.assign({}, r[1]), {
														live_location_id: q.live_location_id
													})
												})
											}));
											B = Object.assign(Object.assign({}, n), {
												attachments: o
											});
											p = n.thread_id;
											p == null || Na(C.fbid, p, y, r[2]);
											return Va(C, [y, B])
										}
									}
								}
							} else return C;
						case 48:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("ReplaceMessage");
							x = f;
							q = i[0];
							o = i[1];
							var zb = q.replaced_message_id;
							if (zb == null) return x;
							else {
								n = Sa(x, zb);
								if (n !== void 0) {
									p = q.message_id;
									r = {
										timestamp: q.timestamp
									};
									y = b("bs_caml_option").nullable_to_opt(q.status);
									y !== void 0 && (r.status = b("bs_caml_option").valFromOption(y));
									B = b("bs_caml_option").nullable_to_opt(q.log_message_data);
									B !== void 0 && (r.log_message_data = b("bs_caml_option").valFromOption(B));
									C = b("bs_caml_option").nullable_to_opt(q.meta_ranges);
									C !== void 0 && (r.meta_ranges = b("bs_caml_option").valFromOption(C));
									y = b("bs_caml_option").nullable_to_opt(q.ranges);
									y !== void 0 && (r.ranges = b("bs_caml_option").valFromOption(y));
									B = b("bs_caml_option").nullable_to_opt(q.raw_attachments);
									B !== void 0 && (r.raw_attachments = b("bs_caml_option").valFromOption(B));
									C = b("bs_caml_option").nullable_to_opt(q.attachments);
									C !== void 0 && (r.attachments = b("bs_caml_option").valFromOption(C));
									y = b("bs_caml_option").nullable_to_opt(q.body);
									y !== void 0 && (r.body = b("bs_caml_option").valFromOption(y));
									B = b("bs_caml_option").nullable_to_opt(q.platform_xmd);
									B !== void 0 && (r.platform_xmd = b("bs_caml_option").valFromOption(B));
									C = b("bs_caml_option").nullable_to_opt(q.profile_ranges);
									C !== void 0 && (r.profile_ranges = b("bs_caml_option").valFromOption(C));
									y = r;
									B = Object.assign(Object.assign({}, b("bs_caml_option").valFromOption(n)), y);
									b("MercuryMessageIDs.bs").addServerID(p, p);
									var E = Va(x, [p, B]);
									if (p !== zb) {
										E.messages["delete"](zb);
										E.localIDsMap.set(zb, p);
										C = b("bs_belt_Option").flatMap(b("bs_caml_option").nullable_to_opt(q.thread_id), function (a) {
											return b("bs_caml_option").nullable_to_opt(E.orderedMessageLists.get(a))
										});
										r = q.thread_id;
										if (C !== void 0 && !(r == null)) {
											n = C;
											y = Ua(E, [p].concat(n.messageIDs.filter(function (a) {
												return a !== zb
											})));
											E.orderedMessageLists.set(r, {
												messageLoadingState: n.messageLoadingState,
												messageIDs: y
											})
										}
									}
									B = q.message_id;
									C = q.thread_id;
									C == null || (Na(E.fbid, C, zb, o), Na(E.fbid, C, B, o));
									return {
										fbid: E.fbid,
										deliveryReceipts: E.deliveryReceipts,
										readReceiptsPerThread: E.readReceiptsPerThread,
										ignoredIds: E.ignoredIds,
										blockedIds: E.blockedIds,
										pendingFolderUnseenCount: E.pendingFolderUnseenCount,
										typing: E.typing,
										threads: E.threads,
										pendingReadStatusThreads: E.pendingReadStatusThreads,
										messages: E.messages,
										localIDsMap: E.localIDsMap,
										messagesWithUploadsInFlight: E.messagesWithUploadsInFlight,
										threadlistOrderMap: E.threadlistOrderMap,
										pinnedThreads: E.pinnedThreads,
										montage: E.montage,
										orderedMessageLists: E.orderedMessageLists,
										unreadCounts: E.unreadCounts,
										initialUnreadCounts: E.initialUnreadCounts,
										unseenTimestamp: E.unseenTimestamp
									}
								} else return x
							}
						case 49:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("UpdateLocalTitanMessagesCount");
							p = f;
							r = a;
							n = [i[0], i[1]];
							y = n[0];
							q = Sa(p, n[1]);
							if (q !== void 0 && b("MessengerMessage.bs").isTitanMessage(b("bs_caml_option").valFromOption(q))) {
								C = r.localTitanMessageCount.get(y);
								C == null ? r.localTitanMessageCount.set(y, 1) : r.localTitanMessageCount.set(y, 1 + C | 0)
							}
							return p;
						case 50:
							return gb(f, a, i[0], i[1]);
						case 51:
							B = f;
							o = a;
							x = i[0];
							n = i[1];
							q = i[2];
							r = x.author;
							if (r == null) y = !1;
							else {
								C = b("MercuryIDs").getUserIDFromParticipantID(r);
								y = C == null ? !1 : C === b("CurrentUser").getID()
							}
							p = x.offline_threading_id;
							r = p == null ? void 0 : b("bs_caml_option").nullable_to_opt(B.localIDsMap.get(p));
							C = r !== void 0;
							if (b("gkx")("1491696") && !y && b("bs_caml_obj").caml_equal(n, b("bs_caml_option").some(b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE)) && C) return B;
							else {
								p = kb(B, x, n, q == null ? void 0 : b("bs_caml_option").some(q));
								ib(p.fbid, n, x, function (a, b, c) {
									a.informNewMessage(b, c);
									return 0
								});
								r = p.fbid;
								if (x.folder === "pending" && b("bs_caml_obj").caml_equal(n, b("bs_caml_option").some(b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE))) y = {
									fbid: p.fbid,
									deliveryReceipts: p.deliveryReceipts,
									readReceiptsPerThread: p.readReceiptsPerThread,
									ignoredIds: p.ignoredIds,
									blockedIds: p.blockedIds,
									pendingFolderUnseenCount: p.pendingFolderUnseenCount + 1 | 0,
									typing: p.typing,
									threads: p.threads,
									pendingReadStatusThreads: p.pendingReadStatusThreads,
									messages: p.messages,
									localIDsMap: p.localIDsMap,
									messagesWithUploadsInFlight: p.messagesWithUploadsInFlight,
									threadlistOrderMap: p.threadlistOrderMap,
									pinnedThreads: p.pinnedThreads,
									montage: p.montage,
									orderedMessageLists: p.orderedMessageLists,
									unreadCounts: p.unreadCounts,
									initialUnreadCounts: p.initialUnreadCounts,
									unseenTimestamp: p.unseenTimestamp
								};
								else if (x.folder === "inbox") {
									C = x.thread_id;
									y = C == null ? p : Fa(p, C, x.folder, 0)
								} else {
									B = x.thread_id;
									if (B == null) y = p;
									else {
										C = mb(p.fbid, p.threads, x, q);
										if (C !== void 0) {
											q = b("bs_caml_option").valFromOption(C);
											C = p.fbid;
											var F = p.deliveryReceipts,
												G = p.readReceiptsPerThread,
												H = p.ignoredIds,
												I = p.blockedIds,
												J = p.pendingFolderUnseenCount,
												K = p.typing,
												L = b("bs_belt_Map").set(p.threads, q.thread_id, q),
												M = p.pendingReadStatusThreads,
												N = p.messages,
												O = p.localIDsMap,
												P = p.messagesWithUploadsInFlight,
												Bb = p.threadlistOrderMap,
												Q = p.pinnedThreads,
												R = p.montage,
												S = p.orderedMessageLists,
												T = p.unreadCounts,
												U = p.initialUnreadCounts,
												V = p.unseenTimestamp;
											C = {
												fbid: C,
												deliveryReceipts: F,
												readReceiptsPerThread: G,
												ignoredIds: H,
												blockedIds: I,
												pendingFolderUnseenCount: J,
												typing: K,
												threads: L,
												pendingReadStatusThreads: M,
												messages: N,
												localIDsMap: O,
												messagesWithUploadsInFlight: P,
												threadlistOrderMap: Bb,
												pinnedThreads: Q,
												montage: R,
												orderedMessageLists: S,
												unreadCounts: T,
												initialUnreadCounts: U,
												unseenTimestamp: V
											};
											if (b("bs_caml_obj").caml_equal(n, b("bs_caml_option").some(b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE))) {
												F = x.offline_threading_id;
												F == null ? Object.assign(x, {
													folder: q.folder
												}) : b("bs_caml_obj").caml_equal(b("bs_caml_option").nullable_to_opt(O.get(F)), F) ? Object.assign(x, {
													client_message_id: x.offline_threading_id,
													status: b("MercuryActionStatus").SUCCESS,
													action_type: b("MercuryActionType").SEND_MESSAGE
												}) : Object.assign(x, {
													folder: q.folder
												})
											}
											Ea(C, q);
											G = Object.assign({}, q);
											H = x.offline_threading_id;
											if (!(H == null)) {
												if (H !== x.message_id) {
													Object.assign(G, {
														last_message_timestamp: x.timestamp
													});
													I = x.comm_status;
													I == null || Object.assign(G, {
														last_message_id: x.message_id
													})
												}
												J = x.author;
												if (!(b("cr:1299779") == null) && !(J == null)) {
													K = b("MercuryIDs").getParticipantIDFromUserID(r);
													x.has_attachment && K === J && fb(B, x.message_id, H)
												}
											}
											L = x.comm_status;
											M = G.comm_status;
											L == null || !(M == null) && b("bs_caml_obj").caml_notequal(M, b("PageCommItemStatus").FOLLOW_UP) && Object.assign(G, {
												comm_status: L
											});
											N = x.creator_info;
											N == null || b("bs_caml_obj").caml_equal(N.pageID, r) && Object.assign(G, {
												folder: x.folder
											});
											P = x.author;
											P == null || jb(G, P);
											y = v(void 0, C, B, G)
										} else y = p
									}
								}
								Bb = hb(y, o, x, n);
								Q = nb(Bb, x);
								R = Q;
								S = x;
								T = b("bs_caml_obj").caml_notequal(S.author, b("MercuryViewer").getID());
								U = S.thread_id;
								V = S.author;
								if (T && !(U == null || V == null)) {
									O = la(R.typing, U, V);
									if (O !== R.typing) return {
										fbid: R.fbid,
										deliveryReceipts: R.deliveryReceipts,
										readReceiptsPerThread: R.readReceiptsPerThread,
										ignoredIds: R.ignoredIds,
										blockedIds: R.blockedIds,
										pendingFolderUnseenCount: R.pendingFolderUnseenCount,
										typing: O,
										threads: R.threads,
										pendingReadStatusThreads: R.pendingReadStatusThreads,
										messages: R.messages,
										localIDsMap: R.localIDsMap,
										messagesWithUploadsInFlight: R.messagesWithUploadsInFlight,
										threadlistOrderMap: R.threadlistOrderMap,
										pinnedThreads: R.pinnedThreads,
										montage: R.montage,
										orderedMessageLists: R.orderedMessageLists,
										unreadCounts: R.unreadCounts,
										initialUnreadCounts: R.initialUnreadCounts,
										unseenTimestamp: R.unseenTimestamp
									};
									else return R
								} else return R
							}
						case 52:
							F = f;
							q = a;
							I = i[0];
							K = i[1];
							J = i[2];
							H = b("bs_caml_obj").caml_notequal(J == null ? void 0 : b("bs_caml_option").some(J), !1);
							M = b("bs_caml_obj").caml_equal(J == null ? void 0 : b("bs_caml_option").some(J), !0);
							L = F.fbid;
							N = b("MercuryIDs").getParticipantIDFromUserID(L);
							r = hb(F, q, I, K);
							ib(r.fbid, K, I, function (a, b, c) {
								a.informNewLogMessage(b, c);
								return 0
							});
							P = kb(r, I, K, J == null ? void 0 : b("bs_caml_option").some(J));
							C = I.thread_id;
							if (C == null) B = P;
							else {
								G = b("bs_belt_Map").get(P.threads, C);
								if (G !== void 0) {
									p = Object.assign({}, b("bs_caml_option").valFromOption(G));
									Ea(P, p);
									p.last_message_timestamp < I.timestamp && Object.assign(p, {
										last_message_timestamp: I.timestamp
									});
									if (I.timestamp >= p.timestamp || b("gkx")("1183082")) {
										y = I.log_message_type;
										if (!(y == null))
											if (b("bs_caml_obj").caml_equal(y, b("MercuryLogMessageType").SUBSCRIBE) && !M) {
												o = I.log_message_data;
												if (o == null) n = [];
												else {
													Bb = o.added_participants;
													n = Bb == null ? [] : Bb
												}
												ua(N, p, n);
												t(L, C)
											} else if (b("bs_caml_obj").caml_equal(y, b("MercuryLogMessageType").UNSUBSCRIBE) && !M) {
											Q = I.log_message_data;
											if (Q == null) x = [];
											else {
												S = Q.removed_participants;
												x = S == null ? [] : S
											}
											lb(N, p, x);
											t(L, C)
										} else if (b("bs_caml_obj").caml_equal(y, b("MercuryLogMessageType").THREAD_IMAGE)) {
											if (!H) {
												T = I.log_message_data;
												if (T == null) U = null;
												else {
													V = T.image;
													U = V == null ? null : V.preview_url
												}
												Object.assign(p, {
													image_src: U
												})
											}
										} else if (b("bs_caml_obj").caml_equal(y, b("MercuryLogMessageType").THREAD_NAME)) {
											O = I.log_message_data;
											if (!(O == null)) {
												R = O.name;
												!(R == null) && p.name === R || t(L, C);
												Object.assign(p, {
													name: O.name
												})
											}
										} else b("bs_caml_obj").caml_equal(y, b("MercuryLogMessageType").GENERIC_ADMIN_TEXT) && La(L, p, I, C)
									}
									B = v(void 0, P, C, p)
								} else B = P
							}
							return nb(B, I);
						case 53:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("PinMessage");
							if (b("gkx")("1179386")) {
								F = f;
								q = i[0];
								var Cb = i[1];
								r = b("bs_belt_Map").get(F.threads, q);
								if (r !== void 0 && !(Cb == null)) {
									K = b("bs_caml_option").valFromOption(r);
									J = K.pinned_messages;
									G = J == null ? [Cb.message] : J.findIndex(function (a) {
										return a.message_id === Cb.message.message_id
									}) === -1 ? [Cb.message] : void 0;
									if (G !== void 0) {
										o = b("ImmutableObject").set(K, {
											pinned_messages: b("bs_belt_Option").getExn(G)
										});
										Bb = b("bs_belt_Map").set(F.threads, q, o);
										t(F.fbid, q);
										n = Bb
									} else n = F.threads
								} else n = F.threads;
								return {
									fbid: F.fbid,
									deliveryReceipts: F.deliveryReceipts,
									readReceiptsPerThread: F.readReceiptsPerThread,
									ignoredIds: F.ignoredIds,
									blockedIds: F.blockedIds,
									pendingFolderUnseenCount: F.pendingFolderUnseenCount,
									typing: F.typing,
									threads: n,
									pendingReadStatusThreads: F.pendingReadStatusThreads,
									messages: F.messages,
									localIDsMap: F.localIDsMap,
									messagesWithUploadsInFlight: F.messagesWithUploadsInFlight,
									threadlistOrderMap: F.threadlistOrderMap,
									pinnedThreads: F.pinnedThreads,
									montage: F.montage,
									orderedMessageLists: F.orderedMessageLists,
									unreadCounts: F.unreadCounts,
									initialUnreadCounts: F.initialUnreadCounts,
									unseenTimestamp: F.unseenTimestamp
								}
							} else return f;
						case 54:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("UnpinMessage");
							if (b("gkx")("1179386")) {
								M = f;
								Q = i[0];
								var Db = i[1];
								S = b("bs_belt_Map").get(M.threads, Q);
								if (S !== void 0 && !(Db == null)) {
									N = b("bs_caml_option").valFromOption(S);
									x = N.pinned_messages;
									H = x == null ? void 0 : x.filter(function (a) {
										return a.message_id !== Db.message_id
									});
									if (H !== void 0) {
										T = b("ImmutableObject").set(N, {
											pinned_messages: b("bs_belt_Option").getExn(H)
										});
										V = b("bs_belt_Map").set(M.threads, Q, T);
										t(M.fbid, Q);
										U = V
									} else U = M.threads
								} else U = M.threads;
								return {
									fbid: M.fbid,
									deliveryReceipts: M.deliveryReceipts,
									readReceiptsPerThread: M.readReceiptsPerThread,
									ignoredIds: M.ignoredIds,
									blockedIds: M.blockedIds,
									pendingFolderUnseenCount: M.pendingFolderUnseenCount,
									typing: M.typing,
									threads: U,
									pendingReadStatusThreads: M.pendingReadStatusThreads,
									messages: M.messages,
									localIDsMap: M.localIDsMap,
									messagesWithUploadsInFlight: M.messagesWithUploadsInFlight,
									threadlistOrderMap: M.threadlistOrderMap,
									pinnedThreads: M.pinnedThreads,
									montage: M.montage,
									orderedMessageLists: M.orderedMessageLists,
									unreadCounts: M.unreadCounts,
									initialUnreadCounts: M.initialUnreadCounts,
									unseenTimestamp: M.unseenTimestamp
								}
							} else return f;
						case 55:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("ChangePinnedStatus");
							R = f;
							O = a;
							y = i[0];
							L = i[1];
							C = i[2];
							p = b("bs_belt_Map").get(R.threads, y);
							P = !1;
							if (L && !O.existingPinnedThreads.has(y)) R.pinnedThreads.push(y), O.existingPinnedThreads.add(y), P = !0;
							else if (!L && O.existingPinnedThreads.has(y)) {
								B = R.pinnedThreads.indexOf(y);
								B > -1 && R.pinnedThreads.splice(B, 1);
								O.existingPinnedThreads["delete"](y);
								P = !0
							}
							if (p !== void 0) {
								I = b("bs_caml_option").valFromOption(p);
								r = b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(I.thread_pin_timestamp), 0);
								if (I.is_pinned !== L || r !== C) {
									J = b("ImmutableObject").set(I, {
										is_pinned: L,
										thread_pin_timestamp: C
									});
									K = b("bs_belt_Map").set(R.threads, y, J);
									t(R.fbid, y);
									P = !0;
									G = K
								} else G = R.threads
							} else G = R.threads;
							if (P) return {
								fbid: R.fbid,
								deliveryReceipts: R.deliveryReceipts,
								readReceiptsPerThread: R.readReceiptsPerThread,
								ignoredIds: R.ignoredIds,
								blockedIds: R.blockedIds,
								pendingFolderUnseenCount: R.pendingFolderUnseenCount,
								typing: R.typing,
								threads: G,
								pendingReadStatusThreads: R.pendingReadStatusThreads,
								messages: R.messages,
								localIDsMap: R.localIDsMap,
								messagesWithUploadsInFlight: R.messagesWithUploadsInFlight,
								threadlistOrderMap: R.threadlistOrderMap,
								pinnedThreads: R.pinnedThreads,
								montage: R.montage,
								orderedMessageLists: R.orderedMessageLists,
								unreadCounts: R.unreadCounts,
								initialUnreadCounts: R.initialUnreadCounts,
								unseenTimestamp: R.unseenTimestamp
							};
							else return R;
						case 56:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("InvalidateMontageState");
							o = f;
							q = i[0];
							Bb = b("bs_js_dict").fromArray(b("bs_js_dict").entries(o.montage));
							Bb[q] = [];
							return {
								fbid: o.fbid,
								deliveryReceipts: o.deliveryReceipts,
								readReceiptsPerThread: o.readReceiptsPerThread,
								ignoredIds: o.ignoredIds,
								blockedIds: o.blockedIds,
								pendingFolderUnseenCount: o.pendingFolderUnseenCount,
								typing: o.typing,
								threads: o.threads,
								pendingReadStatusThreads: o.pendingReadStatusThreads,
								messages: o.messages,
								localIDsMap: o.localIDsMap,
								messagesWithUploadsInFlight: o.messagesWithUploadsInFlight,
								threadlistOrderMap: o.threadlistOrderMap,
								pinnedThreads: o.pinnedThreads,
								montage: Bb,
								orderedMessageLists: o.orderedMessageLists,
								unreadCounts: o.unreadCounts,
								initialUnreadCounts: o.initialUnreadCounts,
								unseenTimestamp: o.unseenTimestamp
							};
						case 57:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("NewMontageMessage");
							n = f;
							F = i[0];
							S = b("bs_js_dict").fromArray(b("bs_js_dict").entries(n.montage));
							x = F.actor.id;
							N = b("bs_js_dict").get(S, x);
							if (N !== void 0) {
								H = N;
								H.push(F);
								S[x] = H
							} else S[x] = [F];
							return {
								fbid: n.fbid,
								deliveryReceipts: n.deliveryReceipts,
								readReceiptsPerThread: n.readReceiptsPerThread,
								ignoredIds: n.ignoredIds,
								blockedIds: n.blockedIds,
								pendingFolderUnseenCount: n.pendingFolderUnseenCount,
								typing: n.typing,
								threads: n.threads,
								pendingReadStatusThreads: n.pendingReadStatusThreads,
								messages: n.messages,
								localIDsMap: n.localIDsMap,
								messagesWithUploadsInFlight: n.messagesWithUploadsInFlight,
								threadlistOrderMap: n.threadlistOrderMap,
								pinnedThreads: n.pinnedThreads,
								montage: S,
								orderedMessageLists: n.orderedMessageLists,
								unreadCounts: n.unreadCounts,
								initialUnreadCounts: n.initialUnreadCounts,
								unseenTimestamp: n.unseenTimestamp
							};
						case 58:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("InstantiateMontageThread");
							T = f;
							Q = i[0];
							V = b("bs_js_dict").fromArray(b("bs_js_dict").entries(T.montage));
							U = b("bs_js_dict").get(V, Q);
							U === void 0 && (V[Q] = []);
							return {
								fbid: T.fbid,
								deliveryReceipts: T.deliveryReceipts,
								readReceiptsPerThread: T.readReceiptsPerThread,
								ignoredIds: T.ignoredIds,
								blockedIds: T.blockedIds,
								pendingFolderUnseenCount: T.pendingFolderUnseenCount,
								typing: T.typing,
								threads: T.threads,
								pendingReadStatusThreads: T.pendingReadStatusThreads,
								messages: T.messages,
								localIDsMap: T.localIDsMap,
								messagesWithUploadsInFlight: T.messagesWithUploadsInFlight,
								threadlistOrderMap: T.threadlistOrderMap,
								pinnedThreads: T.pinnedThreads,
								montage: V,
								orderedMessageLists: T.orderedMessageLists,
								unreadCounts: T.unreadCounts,
								initialUnreadCounts: T.initialUnreadCounts,
								unseenTimestamp: T.unseenTimestamp
							};
						case 59:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("DeleteMontageMessage");
							M = f;
							var Eb = i[0],
								Fb = b("bs_js_dict").fromArray(b("bs_js_dict").entries(M.montage));
							B = Object.keys(Fb);
							B.forEach(function (c) {
								var a = b("bs_js_dict").get(Fb, c);
								if (a !== void 0) {
									a = a.filter(function (a) {
										return a.id !== Eb.messageFBID
									});
									Fb[c] = a;
									return 0
								} else return 0
							});
							return {
								fbid: M.fbid,
								deliveryReceipts: M.deliveryReceipts,
								readReceiptsPerThread: M.readReceiptsPerThread,
								ignoredIds: M.ignoredIds,
								blockedIds: M.blockedIds,
								pendingFolderUnseenCount: M.pendingFolderUnseenCount,
								typing: M.typing,
								threads: M.threads,
								pendingReadStatusThreads: M.pendingReadStatusThreads,
								messages: M.messages,
								localIDsMap: M.localIDsMap,
								messagesWithUploadsInFlight: M.messagesWithUploadsInFlight,
								threadlistOrderMap: M.threadlistOrderMap,
								pinnedThreads: M.pinnedThreads,
								montage: Fb,
								orderedMessageLists: M.orderedMessageLists,
								unreadCounts: M.unreadCounts,
								initialUnreadCounts: M.initialUnreadCounts,
								unseenTimestamp: M.unseenTimestamp
							};
						case 60:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("AddFetchedAllHistoryMarkers");
							var W = f;
							O = [i[0], i[1]];
							var Gb = O[1];
							O[0].forEach(function (b) {
								var a = W.orderedMessageLists.get(b);
								a == null ? W.orderedMessageLists.set(b, {
									messageLoadingState: 1,
									messageIDs: []
								}) : W.orderedMessageLists.set(b, {
									messageLoadingState: 1,
									messageIDs: a.messageIDs
								});
								return Oa(W.fbid, b, Gb)
							});
							return {
								fbid: W.fbid,
								deliveryReceipts: W.deliveryReceipts,
								readReceiptsPerThread: W.readReceiptsPerThread,
								ignoredIds: W.ignoredIds,
								blockedIds: W.blockedIds,
								pendingFolderUnseenCount: W.pendingFolderUnseenCount,
								typing: W.typing,
								threads: W.threads,
								pendingReadStatusThreads: W.pendingReadStatusThreads,
								messages: W.messages,
								localIDsMap: W.localIDsMap,
								messagesWithUploadsInFlight: W.messagesWithUploadsInFlight,
								threadlistOrderMap: W.threadlistOrderMap,
								pinnedThreads: W.pinnedThreads,
								montage: W.montage,
								orderedMessageLists: W.orderedMessageLists,
								unreadCounts: W.unreadCounts,
								initialUnreadCounts: W.initialUnreadCounts,
								unseenTimestamp: W.unseenTimestamp
							};
						case 61:
							var X = f;
							p = i[0];
							p.forEach(function (c) {
								var a = c.folder;
								if (za.includes(a)) {
									c = c.thread_fbids.map(function (a) {
										return b("MercuryIDs").getThreadIDFromThreadFBID(a)
									}).concat(c.other_user_fbids.map(function (a) {
										return b("MercuryIDs").getThreadIDFromUserID(a)
									}));
									X.unreadCounts[a] = new Set(c);
									a = b("MercuryThreadInformer").getForFBID(X.fbid);
									a.updatedUnreadState();
									return 0
								} else return 0
							});
							return {
								fbid: X.fbid,
								deliveryReceipts: X.deliveryReceipts,
								readReceiptsPerThread: X.readReceiptsPerThread,
								ignoredIds: X.ignoredIds,
								blockedIds: X.blockedIds,
								pendingFolderUnseenCount: X.pendingFolderUnseenCount,
								typing: X.typing,
								threads: X.threads,
								pendingReadStatusThreads: X.pendingReadStatusThreads,
								messages: X.messages,
								localIDsMap: X.localIDsMap,
								messagesWithUploadsInFlight: X.messagesWithUploadsInFlight,
								threadlistOrderMap: X.threadlistOrderMap,
								pinnedThreads: X.pinnedThreads,
								montage: X.montage,
								orderedMessageLists: X.orderedMessageLists,
								unreadCounts: X.unreadCounts,
								initialUnreadCounts: X.initialUnreadCounts,
								unseenTimestamp: X.unseenTimestamp
							};
						case 62:
							var Y = f,
								Hb = a;
							r = i[0];
							var d = {
								contents: Y.unseenTimestamp
							};
							r.forEach(function (a) {
								Y.initialUnreadCounts[a.folder] = a.unread_count;
								a.unread_count === 0 && (Y.unreadCounts[a.folder] = new Set());
								a.folder === "inbox" && (d.contents = b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(a.seen_timestamp), d.contents), Hb.fallbackUnseenCount.contents = a.unseen_count);
								a = b("MercuryThreadInformer").getForFBID(Y.fbid);
								a.updatedUnreadState();
								a.updatedUnseenState();
								return 0
							});
							return {
								fbid: Y.fbid,
								deliveryReceipts: Y.deliveryReceipts,
								readReceiptsPerThread: Y.readReceiptsPerThread,
								ignoredIds: Y.ignoredIds,
								blockedIds: Y.blockedIds,
								pendingFolderUnseenCount: Y.pendingFolderUnseenCount,
								typing: Y.typing,
								threads: Y.threads,
								pendingReadStatusThreads: Y.pendingReadStatusThreads,
								messages: Y.messages,
								localIDsMap: Y.localIDsMap,
								messagesWithUploadsInFlight: Y.messagesWithUploadsInFlight,
								threadlistOrderMap: Y.threadlistOrderMap,
								pinnedThreads: Y.pinnedThreads,
								montage: Y.montage,
								orderedMessageLists: Y.orderedMessageLists,
								unreadCounts: Y.unreadCounts,
								initialUnreadCounts: Y.initialUnreadCounts,
								unseenTimestamp: d.contents
							};
						case 63:
							var Ib = f,
								Jb = i[0];
							za.forEach(function (a) {
								a = b("bs_js_dict").get(Ib.unreadCounts, a);
								if (a !== void 0) {
									var c = b("bs_caml_option").valFromOption(a);
									b("bs_js_dict").entries(Jb).forEach(function (a) {
										var b = a[0];
										if (c.has(b)) {
											c.add(a[1]);
											c["delete"](b);
											return 0
										} else return 0
									});
									return 0
								} else return 0
							});
							return {
								fbid: Ib.fbid,
								deliveryReceipts: Ib.deliveryReceipts,
								readReceiptsPerThread: Ib.readReceiptsPerThread,
								ignoredIds: Ib.ignoredIds,
								blockedIds: Ib.blockedIds,
								pendingFolderUnseenCount: Ib.pendingFolderUnseenCount,
								typing: Ib.typing,
								threads: Ib.threads,
								pendingReadStatusThreads: Ib.pendingReadStatusThreads,
								messages: Ib.messages,
								localIDsMap: Ib.localIDsMap,
								messagesWithUploadsInFlight: Ib.messagesWithUploadsInFlight,
								threadlistOrderMap: Ib.threadlistOrderMap,
								pinnedThreads: Ib.pinnedThreads,
								montage: Ib.montage,
								orderedMessageLists: Ib.orderedMessageLists,
								unreadCounts: Ib.unreadCounts,
								initialUnreadCounts: Ib.initialUnreadCounts,
								unseenTimestamp: Ib.unseenTimestamp
							};
						case 64:
							I = f;
							L = i[0];
							C = i[1];
							J = i[2];
							y = i[3];
							K = i[4];
							P = Ma(I, L, [C]);
							G = Sa(P, C);
							if (G !== void 0) {
								R = b("bs_caml_option").valFromOption(G);
								cb(b("bs_caml_option").some(L), R);
								q = b("MessengerMessage.bs").makeFakeMessage(R.message_id, R.thread_id, R.author, R.action_type, R.timestamp, {
									removed_timestamp: y,
									message_unsendability_status: b("MessageUnsendabilityStatus").DENY_TOMBSTONE_MESSAGE,
									unsender: {
										id: J
									}
								});
								Bb = Va(P, [C, q]);
								o = R.thread_id;
								if (o == null) return Bb;
								else {
									N = db(Bb, C, o);
									Na(N.fbid, o, C, K);
									Pa(N.fbid, o, C, K, R.attachments);
									H = b("bs_belt_Map").get(N.threads, o);
									if (H !== void 0) {
										x = b("bs_caml_option").valFromOption(H);
										F = eb(R.profile_ranges, N.fbid);
										S = b("ImmutableObject").set(b("ImmutableObject").set(x, bb(N, o)), {
											unread_mentions_count: x.unread_mentions_count - F | 0
										});
										n = b("bs_belt_Map").set(N.threads, o, S);
										t(N.fbid, o);
										return {
											fbid: N.fbid,
											deliveryReceipts: N.deliveryReceipts,
											readReceiptsPerThread: N.readReceiptsPerThread,
											ignoredIds: N.ignoredIds,
											blockedIds: N.blockedIds,
											pendingFolderUnseenCount: N.pendingFolderUnseenCount,
											typing: N.typing,
											threads: n,
											pendingReadStatusThreads: N.pendingReadStatusThreads,
											messages: N.messages,
											localIDsMap: N.localIDsMap,
											messagesWithUploadsInFlight: N.messagesWithUploadsInFlight,
											threadlistOrderMap: N.threadlistOrderMap,
											pinnedThreads: N.pinnedThreads,
											montage: N.montage,
											orderedMessageLists: N.orderedMessageLists,
											unreadCounts: N.unreadCounts,
											initialUnreadCounts: N.initialUnreadCounts,
											unseenTimestamp: N.unseenTimestamp
										}
									} else return N
								}
							} else {
								Qa(P.fbid, L, C, K);
								return P
							}
						case 65:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("UpdateConnectivityStatus");
							U = f;
							Q = i[0];
							V = i[1];
							T = b("ThreadConnectivityStatus.bs").toGraphQLValue(V);
							B = b("bs_belt_Map").get(U.threads, Q);
							if (B !== void 0) {
								M = b("bs_caml_option").valFromOption(B);
								O = M.thread_connectivity_data;
								p = O == null ? b("ImmutableObject").set(M, {
									thread_connectivity_data: {
										connectivity_status: T,
										first_sender_id: null
									}
								}) : b("ImmutableObject").set(M, {
									thread_connectivity_data: {
										connectivity_status: T,
										first_sender_id: O.first_sender_id
									}
								});
								return {
									fbid: U.fbid,
									deliveryReceipts: U.deliveryReceipts,
									readReceiptsPerThread: U.readReceiptsPerThread,
									ignoredIds: U.ignoredIds,
									blockedIds: U.blockedIds,
									pendingFolderUnseenCount: U.pendingFolderUnseenCount,
									typing: U.typing,
									threads: b("bs_belt_Map").set(U.threads, Q, p),
									pendingReadStatusThreads: U.pendingReadStatusThreads,
									messages: U.messages,
									localIDsMap: U.localIDsMap,
									messagesWithUploadsInFlight: U.messagesWithUploadsInFlight,
									threadlistOrderMap: U.threadlistOrderMap,
									pinnedThreads: U.pinnedThreads,
									montage: U.montage,
									orderedMessageLists: U.orderedMessageLists,
									unreadCounts: U.unreadCounts,
									initialUnreadCounts: U.initialUnreadCounts,
									unseenTimestamp: U.unseenTimestamp
								}
							} else return U;
						case 66:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("DeltaMarkFolderSeen");
							r = f;
							var Kb = i[0];
							return b("bs_belt_Array").reduceU(Kb.folders, r, function (c, a) {
								a = b("bs_js_dict").get(j, a);
								if (a !== void 0) return yb(c, Number(Kb.timestamp), a);
								else return c
							});
						case 67:
							I = f;
							G = [i[0], i[1], i[2], i[3]];
							var Lb = G[2];
							y = G[0];
							J = Sa(I, y);
							if (J !== void 0) {
								q = b("bs_caml_option").valFromOption(J);
								Bb = G[1].concat(q.tags).filter(function (a) {
									return Lb.indexOf(a) === -1
								});
								H = Object.assign(Object.assign({}, q), {
									tags: Bb
								});
								R = q.thread_id;
								R == null || Na(I.fbid, R, y, G[3]);
								return Va(I, [y, H])
							} else return I;
						case 68:
							x = f;
							F = i[0];
							S = i[1];
							return v(void 0, x, F, {
								conversion_detection_data: S
							});
						case 69:
							o = f;
							n = [i[0], i[1], i[2], i[3], i[4]];
							N = n[0];
							L = Sa(o, N);
							if (L !== void 0) {
								C = b("bs_caml_option").valFromOption(L);
								K = C.attachments;
								if (K == null || K.length !== 1) return o;
								else {
									P = K[0];
									V = n[2] ? [Object.assign(Object.assign({}, P), {
										blurred_image_uri: void 0
									})] : [Object.assign(Object.assign({}, P), {
										blurred_image_uri: n[3]
									})];
									B = Object.assign(Object.assign({}, C), {
										attachments: V
									});
									M = C.thread_id;
									M == null || Na(o.fbid, M, N, n[4]);
									return Va(o, [N, B])
								}
							} else return o;
						case 70:
							T = f;
							O = i[0];
							Q = i[1];
							return v(void 0, T, O, {
								suggested_reply_data: Q
							})
					}
				case 1:
					p = g[0];
					if (typeof p === "number")
						if (p === 0) {
							U = f;
							var Mb = [];
							b("bs_belt_MapString").forEach(U.typing, function (a, c) {
								return b("bs_belt_Map").forEach(c, function (b, c) {
									if (c < Date.now() - 3e4) {
										Mb.push([a, b]);
										return 0
									} else return 0
								})
							});
							if (Mb.length !== 0) {
								var c = {
									contents: U.typing
								};
								Mb.forEach(function (a) {
									c.contents = la(c.contents, a[0], a[1]);
									return 0
								});
								return {
									fbid: U.fbid,
									deliveryReceipts: U.deliveryReceipts,
									readReceiptsPerThread: U.readReceiptsPerThread,
									ignoredIds: U.ignoredIds,
									blockedIds: U.blockedIds,
									pendingFolderUnseenCount: U.pendingFolderUnseenCount,
									typing: c.contents,
									threads: U.threads,
									pendingReadStatusThreads: U.pendingReadStatusThreads,
									messages: U.messages,
									localIDsMap: U.localIDsMap,
									messagesWithUploadsInFlight: U.messagesWithUploadsInFlight,
									threadlistOrderMap: U.threadlistOrderMap,
									pinnedThreads: U.pinnedThreads,
									montage: U.montage,
									orderedMessageLists: U.orderedMessageLists,
									unreadCounts: U.unreadCounts,
									initialUnreadCounts: U.initialUnreadCounts,
									unseenTimestamp: U.unseenTimestamp
								}
							} else return U
						} else {
							r = f;
							J = a;
							if (wb(r, J, !1) > 0) {
								Bb = b("MercuryServerRequests").getForFBID(r.fbid);
								Bb.markSeen();
								return yb(r, Bb.getLastActionTimestamp(), "inbox")
							} else return r
						}
					else switch (p.tag | 0) {
						case 0:
							var Z = f,
								Nb = a;
							q = p[0];
							R = p[1];
							G = p[2];
							y = p[3];
							var Ob = Z.threads,
								Pb = [];
							H = k(q.reduce(function (d, a) {
								var c = b("bs_belt_Map").get(Ob, a);
								if (c !== void 0) return b("bs_belt_Map").set(d, a, b("bs_caml_option").valFromOption(c));
								else {
									Pb.push(a);
									return d
								}
							}, b("bs_belt_Map").make(b("ThreadId.bs"))));
							if (Pb.length !== 0) {
								I = Nb.threadSubToken;
								x = I.contents.toString();
								Nb.threadSubToken.contents = I.contents + 1 | 0;
								Nb.threadCallbacks.contents[x] = [q, G];
								F = b("MercuryServerRequests").getForFBID(Z.fbid);
								S = Pb.reduce(function (c, a) {
									var d = b("MercuryIDs").tokenize(a),
										e = d.type;
									d = d.value;
									if (e === "user") {
										e = b("MercuryIDs").getParticipantIDFromUserID(b("FBID.bs").ofStringExn(d));
										d = b("MercuryIDs").getParticipantIDFromUserID(Z.fbid);
										d = b("MessengerThreadUtils.bs").createNewLocalThread(d, a, b("bs_caml_obj").caml_equal(e, d) ? [d] : [d, e], null);
										e = b("bs_belt_Map").set(c, a, d);
										b("gkx")("1074761") || pb(e, Nb.threadCallbacks.contents);
										return e
									} else return c
								}, Z.threads);
								F.fetchThreadData(Pb, y);
								b("bs_curry")._1(R, x);
								if (S === Z.threads) return Z;
								else return {
									fbid: Z.fbid,
									deliveryReceipts: Z.deliveryReceipts,
									readReceiptsPerThread: Z.readReceiptsPerThread,
									ignoredIds: Z.ignoredIds,
									blockedIds: Z.blockedIds,
									pendingFolderUnseenCount: Z.pendingFolderUnseenCount,
									typing: Z.typing,
									threads: S,
									pendingReadStatusThreads: Z.pendingReadStatusThreads,
									messages: Z.messages,
									localIDsMap: Z.localIDsMap,
									messagesWithUploadsInFlight: Z.messagesWithUploadsInFlight,
									threadlistOrderMap: Z.threadlistOrderMap,
									pinnedThreads: Z.pinnedThreads,
									montage: Z.montage,
									orderedMessageLists: Z.orderedMessageLists,
									unreadCounts: Z.unreadCounts,
									initialUnreadCounts: Z.initialUnreadCounts,
									unseenTimestamp: Z.unseenTimestamp
								}
							} else {
								b("bs_curry")._1(G, H);
								return Z
							}
						case 1:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("UnsubscribeThread");
							L = a.threadCallbacks.contents;
							ob(L, p[0]);
							a.threadCallbacks.contents = L;
							return f;
						case 2:
							var $ = f;
							K = p[0];
							P = b("bs_belt_Array").keepMap(K, function (a) {
								a = Sa($, a);
								if (a !== void 0) return b("bs_caml_option").nullable_to_opt(b("bs_caml_option").valFromOption(a).offline_threading_id)
							});
							P.forEach(function (a) {
								$.localIDsMap["delete"](a);
								return 0
							});
							return {
								fbid: $.fbid,
								deliveryReceipts: $.deliveryReceipts,
								readReceiptsPerThread: $.readReceiptsPerThread,
								ignoredIds: $.ignoredIds,
								blockedIds: $.blockedIds,
								pendingFolderUnseenCount: $.pendingFolderUnseenCount,
								typing: $.typing,
								threads: $.threads,
								pendingReadStatusThreads: $.pendingReadStatusThreads,
								messages: $.messages,
								localIDsMap: $.localIDsMap,
								messagesWithUploadsInFlight: $.messagesWithUploadsInFlight,
								threadlistOrderMap: $.threadlistOrderMap,
								pinnedThreads: $.pinnedThreads,
								montage: $.montage,
								orderedMessageLists: $.orderedMessageLists,
								unreadCounts: $.unreadCounts,
								initialUnreadCounts: $.initialUnreadCounts,
								unseenTimestamp: $.unseenTimestamp
							};
						case 3:
							b("ChatReliabilityInstrumentation").logPROCESS_DELTA("MontagePollStickerVoted");
							V = f;
							var Qb = p[0];
							C = b("bs_js_dict").fromArray(b("bs_js_dict").entries(V.montage));
							M = Qb.montageActorID;
							n = b("bs_js_dict").get(C, M);
							if (n !== void 0) {
								N = n.map(function (a) {
									if (b("bs_caml_obj").caml_equal(Qb.montageMessageID, a.id)) {
										var c = a,
											d = Qb,
											e = c.montage_overlays.map(function (a) {
												if (b("bs_caml_obj").caml_equal(a.poll.id, d.pollID)) {
													var c = a.poll.poll_options.map(function (a, c) {
														if (c === d.optionVotedIndex) return new(b("ImmutableObject"))({
															text: a.text,
															vote_count: a.vote_count + 1 | 0
														});
														else return a
													});
													c = new(b("ImmutableObject"))({
														can_viewer_vote: a.poll.can_viewer_vote,
														id: a.poll.id,
														poll_options: c,
														viewer_vote_index: d.optionVotedIndex
													});
													return b("ImmutableObject").set(new(b("ImmutableObject"))(a), {
														poll: c
													})
												} else return a
											});
										return b("ImmutableObject").set(new(b("ImmutableObject"))(c), {
											montage_overlays: e
										})
									} else return a
								});
								C[M] = N
							}
							return {
								fbid: V.fbid,
								deliveryReceipts: V.deliveryReceipts,
								readReceiptsPerThread: V.readReceiptsPerThread,
								ignoredIds: V.ignoredIds,
								blockedIds: V.blockedIds,
								pendingFolderUnseenCount: V.pendingFolderUnseenCount,
								typing: V.typing,
								threads: V.threads,
								pendingReadStatusThreads: V.pendingReadStatusThreads,
								messages: V.messages,
								localIDsMap: V.localIDsMap,
								messagesWithUploadsInFlight: V.messagesWithUploadsInFlight,
								threadlistOrderMap: V.threadlistOrderMap,
								pinnedThreads: V.pinnedThreads,
								montage: C,
								orderedMessageLists: V.orderedMessageLists,
								unreadCounts: V.unreadCounts,
								initialUnreadCounts: V.initialUnreadCounts,
								unseenTimestamp: V.unseenTimestamp
							};
						case 4:
							B = b("bs_belt_Map").set(f.threads, p[0], p[1]);
							return {
								fbid: f.fbid,
								deliveryReceipts: f.deliveryReceipts,
								readReceiptsPerThread: f.readReceiptsPerThread,
								ignoredIds: f.ignoredIds,
								blockedIds: f.blockedIds,
								pendingFolderUnseenCount: f.pendingFolderUnseenCount,
								typing: f.typing,
								threads: B,
								pendingReadStatusThreads: f.pendingReadStatusThreads,
								messages: f.messages,
								localIDsMap: f.localIDsMap,
								messagesWithUploadsInFlight: f.messagesWithUploadsInFlight,
								threadlistOrderMap: f.threadlistOrderMap,
								pinnedThreads: f.pinnedThreads,
								montage: f.montage,
								orderedMessageLists: f.orderedMessageLists,
								unreadCounts: f.unreadCounts,
								initialUnreadCounts: f.initialUnreadCounts,
								unseenTimestamp: f.unseenTimestamp
							};
						case 5:
							b("MercuryServerRequests").getForFBID(f.fbid).updateLastActionTimestamp(p[0]);
							return f
					}
				case 2:
					o = g[0];
					switch (o.tag | 0) {
						case 0:
							b("bs_curry")._1(o[0], {
								blocked_ids: f.blockedIds
							});
							break;
						case 1:
							b("bs_curry")._1(o[1], b("bs_belt_Map").get(f.threads, o[0]));
							break;
						case 2:
							b("bs_curry")._1(o[0], f.pinnedThreads.concat([]));
							break;
						case 3:
							b("bs_curry")._2(o[0], f, a);
							break
					}
					return f
			}
		}, d, c);
		e.length > 0 && b("LogHistory").getInstance("messenger_state").debug("actions", b("bs_belt_Option").getWithDefault(JSON.stringify(e), ""));
		return d
	}

	function E(a) {
		var c = [b("MercurySyncEventsProxy").getArbiterTypeForFBID(a, "TYP")];
		b("FBIDCheck").isUser_deprecated(a) || c.push(b("ChannelConstants").getArbiterType("page_typing"));
		return c
	}

	function F(a) {
		return {
			fbid: a,
			deliveryReceipts: null,
			readReceiptsPerThread: null,
			ignoredIds: b("bs_belt_Set").make(b("ParticipantId.bs")),
			blockedIds: b("bs_belt_Set").make(b("ParticipantId.bs")),
			pendingFolderUnseenCount: 0,
			typing: null,
			threads: b("bs_belt_Map").make(b("ThreadId.bs")),
			pendingReadStatusThreads: new Set(),
			messages: new Map(),
			localIDsMap: new Map(),
			messagesWithUploadsInFlight: new Map(),
			threadlistOrderMap: pa(0),
			pinnedThreads: [],
			montage: {},
			orderedMessageLists: new Map(),
			unreadCounts: {},
			initialUnreadCounts: {},
			unseenTimestamp: 0
		}
	}
	var G = {
			contents: {}
		},
		H = {
			contents: 0
		},
		I = new Map(),
		J = {
			contents: {}
		},
		K = {
			contents: 0
		},
		L = new Set(),
		M = {
			contents: {}
		},
		N = {
			contents: 0
		},
		O = {
			threadCallbacks: G,
			threadSubToken: H,
			localTitanMessageCount: I,
			messageCallbacks: J,
			messageSubToken: K,
			existingPinnedThreads: L,
			failedHistoryFetchThreads: M,
			fallbackUnseenCount: N
		},
		Ab = {
			contents: 0
		},
		P = {};

	function Bb(a, c, d) {
		d = c !== void 0 ? b("bs_caml_option").valFromOption(c) : b("RemoteAction.bs").create(0);
		c = b("bs_js_dict").get(P, a);
		if (c !== void 0) return 0;
		else {
			P[a] = {
				subscriptions: new Set(),
				state: F(a),
				remoteAction: d
			};
			b("RemoteAction.bs").subscribe(function (c) {
				var d = b("bs_js_dict").get(P, a);
				if (d !== void 0) {
					d = d;
					var e = d.state;
					c = zb(O, c, e);
					P[a] = {
						subscriptions: d.subscriptions,
						state: c,
						remoteAction: d.remoteAction
					};
					if (c !== e) {
						d = b("bs_js_dict").get(P, a);
						if (d !== void 0) {
							d.subscriptions.forEach(function (a) {
								return b("bs_curry")._1(a.fn, 0)
							});
							return 0
						} else {
							b("recoverableViolation")("Subscriptions deleted after createion", "messenger_comet");
							return 0
						}
					} else return 0
				} else {
					b("recoverableViolation")("State deleted after creation", "messenger_comet");
					return 0
				}
			}, d);
			var e = b("bs_caml_option").some(a),
				f = a,
				g = function (a) {
					return Q(e, a)
				},
				h = function (a) {
					b("bs_curry")._1(g, [b("bs_block").__(0, [b("bs_block").__(5, [a])])]);
					b("setTimeoutAcrossTransitions")(function (a) {
						return b("bs_curry")._1(g, [b("bs_block").__(1, [0])])
					}, 3e4);
					return 0
				};
			b("Arbiter").subscribe(E(f), function (a, b) {
				a = b.obj;
				b = a.to;
				if (!(b == null) && b.toString() !== f) return 0;
				else {
					h(a);
					return 0
				}
			});
			return 0
		}
	}

	function Q(a, c) {
		a = a !== void 0 ? b("bs_caml_option").valFromOption(a) : b("CurrentUser").getID();
		Bb(a, void 0, 0);
		a = b("bs_js_dict").get(P, a);
		if (a !== void 0) return b("RemoteAction.bs").send(a.remoteAction, c);
		else {
			b("recoverableViolation")("Subscriptions deleted after createion", "messenger_comet");
			return 0
		}
	}

	function R(a, c, d, e) {
		var f = a !== void 0 ? b("bs_caml_option").valFromOption(a) : b("CurrentUser").getID();
		e = c !== void 0 ? b("bs_caml_option").valFromOption(c) : b("RemoteAction.bs").create(0);
		Bb(f, b("bs_caml_option").some(e), 0);
		a = i.useState(function () {
			var a = b("bs_js_dict").get(P, f);
			if (a !== void 0) return a.state;
			else return b("unrecoverableViolation")("Rendering without state initialized", "messenger_comet")
		});
		var g = a[1],
			h = a[0];
		c = b("bs_js_dict").get(P, f);
		var j = i.useCallback(function (a) {
			a = b("bs_js_dict").get(P, f);
			var c = a !== void 0 ? a.state : b("unrecoverableViolation")("Rendering without state initialized", "messenger_comet");
			if (d !== void 0)
				if (b("bs_curry")._2(d, h, c)) return b("bs_curry")._1(g, function (a) {
					return c
				});
				else return 0;
			else return b("bs_curry")._1(g, function (a) {
				return c
			})
		}, [d, h, g, c, f]);
		i.useEffect(function () {
			Ab.contents = Ab.contents + 1 | 0;
			var a = Ab.contents,
				c = {
					id: a,
					fn: j
				};
			a = b("bs_js_dict").get(P, f);
			a !== void 0 ? a.subscriptions.add(c) : b("recoverableViolation")("Subscriptions deleted after createion, can't add subscription", "messenger_comet");
			b("bs_curry")._1(j, 0);
			return function (a) {
				a = b("bs_js_dict").get(P, f);
				if (a !== void 0) {
					a.subscriptions["delete"](c);
					return 0
				} else {
					b("recoverableViolation")("Subscriptions deleted after createion, can't remove subscription", "messenger_comet");
					return 0
				}
			}
		}, [j, f]);
		return h
	}

	function S(a) {
		var c = a.shouldUpdate,
			d = a.remoteAction,
			e = a.fbid;
		a = a.children;
		e = e !== void 0 ? b("bs_caml_option").valFromOption(e) : b("CurrentUser").getID();
		return b("bs_curry")._1(a, R(b("bs_caml_option").some(e), d, c, 0))
	}

	function T(a) {
		b("gkx")("1463539") && b("recoverableViolation")("messenger state is not allowed when lightspeed is enabled", "messenger_comet");
		return R(b("bs_caml_option").some(a), void 0, void 0, 0)
	}

	function U(a, c) {
		return Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(0, [c])])])
	}

	function V(a, c) {
		b("MercuryAssert").isThreadID(c);
		var d = {
				contents: void 0
			},
			e = function (a) {
				d.contents = a;
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(1, [c, e])])]);
		return b("bs_js_null_undefined").fromOption(d.contents)
	}

	function Cb(a, c, d, e) {
		if (c.length !== 0) {
			b("MercuryAssert").allThreadID(c);
			var f = {
					contents: null
				},
				g = function (a) {
					f.contents = a;
					return 0
				};
			Q(b("bs_caml_option").some(a), [b("bs_block").__(1, [b("bs_block").__(0, [c, g, d, e])])]);
			return f.contents
		} else {
			b("bs_curry")._1(d, {});
			return null
		}
	}

	function Db(a, c, d, e) {
		return Cb(a, [c], function (a) {
			return b("bs_curry")._1(d, a[c])
		}, e)
	}

	function Eb(a, c, d, e) {
		var f = {
				contents: void 0
			},
			g = function (a) {
				f.contents = a;
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(1, [c, g])])]);
		g = f.contents;
		if (g !== void 0) return b("bs_caml_option").valFromOption(g);
		else {
			g = b("MessengerThreadUtils.bs").createNewLocalThread(b("MercuryIDs").getParticipantIDFromUserID(a), c, d, e);
			Q(b("bs_caml_option").some(a), [b("bs_block").__(1, [b("bs_block").__(4, [c, g])])]);
			return g
		}
	}

	function Fb(a) {
		var c = b("MercuryLocalIDs").generateThreadID(null);
		Eb(a, c, [], null);
		return c
	}

	function W(a, c, d, e) {
		var f = {
				contents: void 0
			},
			g = function (a) {
				f.contents = a;
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(1, [c, g])])]);
		g = f.contents;
		if (g !== void 0) return b("bs_caml_option").valFromOption(g);
		else {
			g = b("MessengerThreadUtils.bs").createNewLocalGroupGeneralThread(b("MercuryIDs").getParticipantIDFromUserID(a), c, d, e);
			Q(b("bs_caml_option").some(a), [b("bs_block").__(1, [b("bs_block").__(4, [c, g])])]);
			return g
		}
	}

	function Gb(a, c, d) {
		var e = b("MercuryLocalIDs").generateThreadID(null);
		W(a, e, c, d);
		return e
	}

	function X(a, c) {
		var d = {
				contents: void 0
			},
			e = function (a) {
				d.contents = a;
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(1, [c, e])])]);
		a = d.contents;
		if (a !== void 0) return b("MercuryThreadInfo").isEmptyLocalThread(b("bs_caml_option").valFromOption(a));
		else return !1
	}

	function Y(a, c) {
		var d = {
				contents: void 0
			},
			e = function (a) {
				d.contents = a;
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(1, [c, e])])]);
		a = d.contents;
		if (a !== void 0) return b("MercuryThreadInfo").isNewEmptyLocalThread(b("bs_caml_option").valFromOption(a));
		else return !1
	}

	function Hb(c) {
		var a = {
				contents: []
			},
			d = function (b) {
				a.contents = b;
				return 0
			};
		Q(b("bs_caml_option").some(c), [b("bs_block").__(2, [b("bs_block").__(2, [d])])]);
		return a.contents
	}

	function Ib(a, c) {
		return Q(b("bs_caml_option").some(a), [b("bs_block").__(1, [b("bs_block").__(1, [c])])])
	}

	function Jb(a) {
		var c = a.payload_source;
		if (c == null) return !1;
		else if (b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").CLIENT_CHANGE_ARCHIVED_STATUS) || b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").CLIENT_CHANNEL_MESSAGE) || b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").CLIENT_SEND_MESSAGE) || b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").SERVER_SEND_MESSAGE) || b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").SERVER_FETCH_THREADLIST_INFO) || b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").SERVER_THREAD_SYNC) || b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").SERVER_CHANGE_PINNED_STATUS) || b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").SERVER_CHANGE_PINNED_MESSAGES) || b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").SERVER_INVALIDATE_GLOBAL_STATE) || b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").CLIENT_UPDATE_COMM_STATUS)) return !0;
		else if (b("bs_caml_obj").caml_equal(c, b("MercuryPayloadSource").SERVER_INITIAL_DATA)) {
			c = a.ordered_threadlists;
			return !(c == null)
		} else return !1
	}

	function Kb(a, c) {
		c = b("bs_block").__(1, [b("bs_block").__(3, [c])]);
		return Q(b("bs_caml_option").some(a), [c])
	}

	function Lb(a, c) {
		return Q(a == null ? void 0 : b("bs_caml_option").some(a), c)
	}

	function Mb(a) {
		var c = [],
			d = !1;
		if (!(a == null)) {
			var e = a.payload_source;
			!(e == null) && b("bs_caml_obj").caml_equal(e, b("MercuryPayloadSource").SERVER_INVALIDATE_GLOBAL_STATE) && (d = !0);
			e = a.newlyAddedClientIDs;
			e == null || Object.keys(e).length > 0 && c.push(b("bs_block").__(0, [b("bs_block").__(63, [e])]));
			e = a.delivery_receipts;
			e == null || c.push(b("bs_block").__(0, [b("bs_block").__(0, [e])]));
			e = a.message_ignored_ids;
			e == null || c.push(b("bs_block").__(0, [b("bs_block").__(1, [e])]));
			e = a.threads;
			if (!(e == null)) {
				var f = a.payload_source;
				f == null || (b("bs_caml_obj").caml_equal(f, b("MercuryPayloadSource").SERVER_FETCH_THREAD_INFO) && c.push(b("bs_block").__(0, [b("bs_block").__(8, [e])])), b("bs_caml_obj").caml_equal(f, b("MercuryPayloadSource").SERVER_INVALIDATE_THREAD_STATE) && (e.length > 0 && c.unshift(b("bs_block").__(0, [b("bs_block").__(34, [b("bs_caml_array").caml_array_get(e, 0).thread_id])]))));
				c.push(b("bs_block").__(0, [b("bs_block").__(7, [e])]))
			}
			f = a.participants;
			if (!(f == null)) {
				c.push(b("bs_block").__(0, [b("bs_block").__(3, [f])]));
				var g = [],
					h = [];
				f.forEach(function (a) {
					if (a.is_messenger_blocked || a.is_facebook_blocked) {
						g.push(b("MercuryIDs").getParticipantIDFromUserID(a.fbid));
						return 0
					} else {
						h.push(b("MercuryIDs").getParticipantIDFromUserID(a.fbid));
						return 0
					}
				});
				e = 0;
				(g.length !== 0 || h.length !== 0) && (e = 1);
				e === 1 && c.push(b("bs_block").__(0, [b("bs_block").__(2, [g, h])]))
			}
			f = a.message_blocked_ids;
			f == null || f.length > 0 && c.push(b("bs_block").__(0, [b("bs_block").__(2, [f, []])]));
			e = a.message_unblocked_ids;
			e == null || e.length > 0 && c.push(b("bs_block").__(0, [b("bs_block").__(2, [
				[], e
			])]));
			f = a.pending_folder_unseen_count;
			f == null || c.push(b("bs_block").__(0, [b("bs_block").__(4, [f])]));
			e = a.global_actions;
			e == null || e.forEach(function (a) {
				if (b("bs_caml_obj").caml_equal(a.action_type, b("MercuryGlobalActionType").MARK_ALL_READ)) {
					c.push(b("bs_block").__(0, [b("bs_block").__(33, [a.folder])]));
					return 0
				} else return 0
			});
			if (Jb(a)) {
				f = a.ordered_threadlists;
				e = 0;
				f == null || f.length === 0 ? e = 1 : c.push(b("bs_block").__(0, [b("bs_block").__(9, [f])]));
				if (e === 1) {
					f = a.threads;
					e = a.payload_source;
					f == null || !(e == null) && f.length > 0 && e !== b("MercuryPayloadSource").SERVER_CHANGE_PINNED_STATUS && c.push(b("bs_block").__(0, [b("bs_block").__(10, [f])]))
				}
			}
			e = a.pinned_thread_ids;
			e == null || e.length > 0 && Jb(a) && c.push(b("bs_block").__(0, [b("bs_block").__(11, [e])]));
			f = a.roger;
			f == null || c.push(b("bs_block").__(0, [b("bs_block").__(6, [f])]));
			e = a.montage_delete_message_delta;
			e == null || c.push(b("bs_block").__(0, [b("bs_block").__(59, [e])]));
			f = a.montage_new_message_delta;
			f == null || c.push(b("bs_block").__(0, [b("bs_block").__(57, [f])]));
			e = a.montage_poll_sticker_vote;
			e == null || e.forEach(function (a) {
				c.push(b("bs_block").__(1, [b("bs_block").__(3, [a])]));
				return 0
			});
			f = a.current_montage_thread;
			if (!(f == null)) {
				e = f.user;
				if (!(e == null)) {
					f = e.messenger_montage_thread;
					f == null || (c.push(b("bs_block").__(0, [b("bs_block").__(58, [e.id])])), f.montage_messages.edges.forEach(function (a) {
						c.push(b("bs_block").__(0, [b("bs_block").__(57, [a.node])]));
						return 0
					}))
				}
			}
			e = a.unread_thread_fbids;
			e == null || c.push(b("bs_block").__(0, [b("bs_block").__(61, [e])]));
			f = a.message_counts;
			f == null || c.push(b("bs_block").__(0, [b("bs_block").__(62, [f])]));
			e = a.actions;
			if (!(e == null)) {
				var i = a.payload_source,
					j = i == null ? void 0 : b("bs_caml_option").some(i);
				e.forEach(function (d) {
					var e = d.action_type,
						f = 0;
					(i == null || !i.startsWith("server")) && (f = 1);
					f === 1 && c.push(b("bs_block").__(1, [b("bs_block").__(5, [d.timestamp])]));
					if (b("bs_caml_obj").caml_equal(j, b("bs_caml_option").some(b("MercuryPayloadSource").SERVER_SEARCH)) || b("bs_caml_obj").caml_equal(b("bs_caml_option").nullable_to_opt(d.client_state), b("bs_caml_option").some(b("MercuryMessageClientState").SEND_TO_SERVER))) {
						c.push(b("bs_block").__(0, [b("bs_block").__(35, [d, 0])]));
						return 0
					} else {
						f = d.thread_id;
						var g = d.upload_id,
							h = d.upload_data,
							k = d.message_ids;
						ia(d);
						if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").DELETE_MESSAGES))
							if (!(f == null) && !(k == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(36, [f, k, j])]));
								return 0
							} else return 0;
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").CHANGE_FOLDER)) {
							k = d.new_folder;
							if (!(f == null) && !(k == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(37, [f, k])]));
								return 0
							} else return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").CHANGE_ARCHIVED_STATUS))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(39, [f, d.archived])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").CHANGE_MUTE_SETTINGS)) {
							k = d.reactions_mute_mode;
							var l = d.mentions_mute_mode,
								m = d.mute_until;
							l = k == null ? l == null ? m == null ? void 0 : b("bs_block").__(2, [m]) : m == null ? b("bs_block").__(1, [l === 1]) : void 0 : !(l == null) || !(m == null) ? void 0 : b("bs_block").__(0, [k === 1]);
							if (!(f == null) && l !== void 0) {
								c.push(b("bs_block").__(0, [b("bs_block").__(38, [f, l])]));
								return 0
							} else return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").CHANGE_READ_STATUS))
							if (f == null) return 0;
							else {
								m = a.from_client;
								c.push(b("bs_block").__(0, [b("bs_block").__(41, [f, d.mark_as_read, d.timestamp, m == null ? !1 : m, d.source])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").CHANGE_PAGE_FOLLOW_UP_STATUS))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(40, [f, d.is_page_follow_up])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").BLOCK_STATUS_CHANGED))
							if (f == null) return 0;
							else {
								k = d.canViewerReply ? null : b("MessengerThreadCannotReplyReason.bs").fromMessageThreadCannotReplyReason(d.reason);
								c.push(b("bs_block").__(0, [b("bs_block").__(13, [f, d.canViewerReply, k])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").DELETE_THREAD))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(42, [f])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").REACTION_UPDATE)) {
							l = d.messageId;
							m = d.userId;
							if (!(l == null) && !(m == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(45, [l, b("bs_caml_option").nullable_to_opt(d.reaction), m, j])]));
								return 0
							} else return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").MONTAGE_DIRECT_EXPIRE)) {
							k = d.messageId;
							if (k == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(46, [k, j])]));
								return 0
							}
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").LIVE_LOCATION_UPDATE)) {
							l = d.messageId;
							m = d.liveLocation;
							if (!(l == null) && !(m == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(47, [l, m, j])]));
								return 0
							} else return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").REPLACE_MESSAGE)) {
							c.push(b("bs_block").__(0, [b("bs_block").__(48, [d, j])]));
							return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").CONFIRM_ATTACHMENT_PLACEHOLDER))
							if (!(g == null) && !(h == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(44, [g, h])]));
								return 0
							} else return 0;
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").CANCEL_ATTACHMENT_PLACEHOLDER))
							if (!(g == null) && !(h == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(43, [g, h, j])]));
								return 0
							} else return 0;
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").SEND_MESSAGE)) {
							c.push(b("bs_block").__(0, [b("bs_block").__(50, [d, j])]));
							return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").USER_GENERATED_MESSAGE)) {
							c.push(b("bs_block").__(0, [b("bs_block").__(51, [d, j, a.from_client])]));
							return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").LOG_MESSAGE))
							if (b("MessengerMessage.bs").isLocalMessage(d)) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(52, [d, j, a.from_client])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").CHANGE_PINNED_STATUS))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(55, [f, d.is_pinned, d.thread_pin_timestamp])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").PIN_MESSAGE))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(53, [f, d.pin_message_action])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").UNPIN_MESSAGE))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(54, [f, d.unpin_message_action])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").REMOVE_MESSAGE)) {
							k = d.thread_id;
							l = d.messageId;
							m = d.removed_timestamp;
							g = d.author;
							if (!(k == null) && !(l == null) && !(m == null) && !(g == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(64, [k, l, g, m, j])]));
								b("MessengerDesktopNotifications").removeNotification(l);
								return 0
							} else return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").UNSUBSCRIBE_STATUS_UPDATE))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(12, [f, d.page_unsubscribe_status])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").BLURRED_IMAGE_STATUS)) {
							h = d.image_message_id;
							k = d.image_id;
							g = d.should_show;
							m = d.blurred_image_uri;
							if (!(h == null) && !(k == null) && !(g == null) && !(m == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(69, [h, k, g, m, j])]));
								return 0
							} else return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").ADD_PARTICIPANTS))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(14, [f, d.participants])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").CHANGE_FLAG))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(15, [f, d.mark_as_flag])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").MOVE_PENDING_TO_INBOX))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(16, [f])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").UPDATE_CUSTOM_LIKE))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(17, [f, d.custom_like])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").PROMOTE_GROUP_ADMINS)) {
							l = d.promoted_admins;
							if (!(f == null) && !(l == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(18, [f, l])]));
								return 0
							} else return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").REMOVE_GROUP_ADMINS)) {
							h = d.removed_admin_ids;
							if (!(f == null) && !(h == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(19, [f, h])]));
								return 0
							} else return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").JOINABLE_MODE))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(20, [f, d.joinable_mode])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").APPROVAL_MODE))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(21, [f, d.approval_mode])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").APPROVAL_QUEUE))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(22, [f, d.added_id, d.added_group_id, d.removed_id, d.removed_group_id])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").IS_PIN_PROTECTED))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(23, [f, d.is_pin_protected])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").UPDATE_RTC_CALL_DATA))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(24, [f, d.initiator_fbid, d.call_state, d.server_info_data])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").UPDATE_COMM_STATUS))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(25, [f, d.comm_status])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").UPDATE_COMM_ITEM_OWNER))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(26, [f, d.id, d.name, d.profile_pic_uri])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").EVENT_RSVP_CHANGED))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(27, [f, d.actor_fbid, d.rsvp_status])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").UPDATE_CONNECTIVITY_STATUS)) {
							k = d.thread_connectivity_status;
							if (!(f == null) && !(k == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(65, [f, k])]));
								return 0
							} else return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").GROUPS_SYNC_STATUS_CHANGED))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(28, [f, d.groups_sync_action, d.groups_sync_status_string])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").GROUPS_SYNC_METADATA_UPDATE))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(29, [f, d.groups_sync_action, d.fb_group_id, d.emoji_codepoints])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").DESCRIPTION_CHANGED))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(30, [f, d.group_thread_description_string])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").UPDATE_THREAD_THEME))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(31, [f, {
									solid_color: d.solid_color,
									header_color: d.header_color,
									footer_color: d.footer_color,
									gradient_colors: d.gradient_colors,
									theme_id: d.theme_id,
									reactions: d.reactions
								}])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").UPDATE_JOINABLE_LINK))
							if (f == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(32, [f, d.joinable_link])]));
								return 0
							}
						else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").MUTATE_TAGS)) {
							g = d.tags_to_add;
							m = g == null ? [] : g;
							l = d.tags_to_delete;
							h = l == null ? [] : l;
							k = d.messageId;
							if (k == null) return 0;
							else {
								c.push(b("bs_block").__(0, [b("bs_block").__(67, [k, m, h, j])]));
								return 0
							}
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").ADS_CONVERSION_UPDATE)) {
							g = d.conversion_detection_data;
							if (!(f == null) && !(g == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(68, [f, g])]));
								return 0
							} else return 0
						} else if (b("bs_caml_obj").caml_equal(e, b("MercuryActionType").SUGGESTED_REPLY_UPDATE)) {
							l = d.suggested_reply_data;
							if (!(f == null) && !(l == null)) {
								c.push(b("bs_block").__(0, [b("bs_block").__(70, [f, l])]));
								return 0
							} else return 0
						} else return 0
					}
				});
				b("Utils.bs").isTruthy(a.from_client) && e.forEach(function (d) {
					var a = d.thread_id;
					if (a == null) return 0;
					else {
						c.push(b("bs_block").__(0, [b("bs_block").__(49, [a, d.message_id])]));
						return 0
					}
				})
			}
			f = a.end_of_history;
			f == null || c.push(b("bs_block").__(0, [b("bs_block").__(60, [f, a.payload_source])]))
		}
		d && c.unshift(b("bs_block").__(0, [0]));
		return c
	}

	function Z(c, d) {
		var a = {
				contents: []
			},
			e = function (b, c) {
				c = b.orderedMessageLists.get(d);
				if (c == null) return 0;
				else {
					a.contents = Ta(!0, b, c.messageIDs);
					return 0
				}
			};
		Q(b("bs_caml_option").some(c), [b("bs_block").__(2, [b("bs_block").__(3, [e])])]);
		return a.contents
	}

	function Nb(c, d) {
		var a = {
				contents: d
			},
			e = function (b, c) {
				c = b.localIDsMap.get(d);
				if (c == null) return 0;
				else {
					a.contents = c;
					return 0
				}
			};
		Q(b("bs_caml_option").some(c), [b("bs_block").__(2, [b("bs_block").__(3, [e])])]);
		return a.contents
	}

	function Ob(a, c) {
		var d = {
				contents: void 0
			},
			e = function (a, b) {
				d.contents = a;
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [e])])]);
		a = d.contents;
		if (a !== void 0) return Ta(!1, a, c);
		else return []
	}

	function Pb(a, c) {
		var d = {
				contents: void 0
			},
			e = function (a, b) {
				d.contents = a;
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [e])])]);
		a = d.contents;
		if (a !== void 0) return b("bs_caml_option").nullable_to_opt(a.messages.get(c))
	}

	function $(a, c, d) {
		var e = {
				contents: !1
			},
			f = function (a, b) {
				b = a.orderedMessageLists.get(c);
				if (b == null) return 0;
				else {
					a = b.messageLoadingState;
					b = b.messageIDs.length;
					if (a) {
						e.contents = !0;
						return 0
					} else {
						e.contents = b >= d;
						return 0
					}
				}
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [f])])]);
		return e.contents
	}

	function Qb(a, c) {
		var d = {
				contents: !1
			},
			e = function (a, b) {
				b = a.orderedMessageLists.get(c);
				if (b == null) return 0;
				else {
					a = b.messageLoadingState;
					if (a) {
						d.contents = !0;
						return 0
					} else {
						d.contents = !1;
						return 0
					}
				}
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [e])])]);
		return d.contents
	}

	function Rb(a, c) {
		return Q(b("bs_caml_option").some(a), [b("bs_block").__(1, [b("bs_block").__(2, [c])])])
	}

	function Sb(a, c, d, e) {
		var f = [],
			g = function (g, h) {
				h = g.orderedMessageLists.get(c);
				if (h == null) return 0;
				else {
					h = h.messageIDs;
					for (var i = d, j = d + e | 0; i <= j; ++i) {
						var a = b("bs_belt_Option").flatMap(b("bs_belt_Array").get(h, i), function (a) {
							return Sa(g, a)
						});
						a !== void 0 && f.push(b("bs_caml_option").valFromOption(a))
					}
					return 0
				}
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [g])])]);
		return f
	}
	var Tb = {
		contents: void 0
	};

	function Ub(a, c, d, e, f, g, h) {
		var i = function (j, i) {
			Tb.contents = [c, d, e];
			var k = j.orderedMessageLists.get(c);
			k = k == null ? [
				[], void 0
			] : [k.messageIDs, k.messageLoadingState];
			var l = k[0];
			if (b("bs_js_dict").get(i.failedHistoryFetchThreads.contents, c) !== !0) {
				var m = i.localTitanMessageCount;
				m = l.length - b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(m.get(c)), 0) | 0;
				m > 0 && b("ChatReliabilityInstrumentation").logERROR("fetch made with message in flight");
				var n = m - d | 0;
				n = e - n | 0;
				if (n > 0 && b("bs_caml_obj").caml_notequal(k[1], 1)) {
					k = b("MercuryServerRequests").getForFBID(a);
					var aa = b("bs_js_null_undefined").fromOption(b("bs_belt_Option").map(b("bs_belt_Option").flatMap(b("bs_belt_Array").get(l, m - 1 | 0), function (a) {
							return Sa(j, a)
						}), function (a) {
							return a.timestamp
						})),
						ba = i.messageSubToken.contents;
					i.messageSubToken.contents = ba + 1 | 0;
					i.messageCallbacks.contents[String(ba)] = [{
						threadID: c,
						offset: d,
						limit: e
					}, f];
					if (b("bs_caml_obj").caml_equal([c, d, e], Tb.contents)) {
						k.fetchThreadMessages(c, m, n, aa, g, h);
						return 0
					} else return 0
				} else return b("bs_curry")._1(f, b("bs_belt_Array").keepMap(l, function (a) {
					return Sa(j, a)
				}).slice(d, e))
			} else {
				Tb.contents = void 0;
				i.failedHistoryFetchThreads.contents[c] = !1;
				return 0
			}
		};
		return Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [i])])])
	}

	function Vb(a, b, c, d, e, f, g) {
		if (Qb(a, b)) return 0;
		else return Ub(a, b, c, d, e, f, g)
	}

	function Wb(a) {
		var c = {
				contents: 0
			},
			d = function (d, a) {
				c.contents = b("bs_caml_primitive").caml_int_min(xb(d, a), b("MercuryThreadlistConstants").MAX_UNSEEN_COUNT);
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [d])])]);
		return c.contents
	}

	function Xb(a) {
		var c = {
				contents: 0
			},
			d = function (b, a) {
				c.contents = xb(b, a);
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [d])])]);
		return c.contents
	}

	function Yb(a) {
		var c = {
				contents: 0
			},
			d = function (d, a) {
				c.contents = b("bs_caml_primitive").caml_int_min(wb(d, a, !0), b("MercuryThreadlistConstants").MAX_UNSEEN_COUNT);
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [d])])]);
		return c.contents
	}

	function Zb(a) {
		return Q(b("bs_caml_option").some(a), [b("bs_block").__(1, [1])])
	}

	function $b(a, c) {
		var d = {
				contents: null
			},
			e = function (a, e) {
				e = b("bs_js_dict").get(a.unreadCounts, c);
				d.contents = e !== void 0 ? b("bs_belt_Array").keepMap(b("JSSet.bs").values(b("bs_caml_option").valFromOption(e)), function (c) {
					return b("bs_caml_option").nullable_to_opt(l(a, c))
				}).filter(function (a) {
					return !b("MercuryThreadInfo").isMuted(a)
				}).length : null;
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [e])])]);
		return d.contents
	}

	function ac(a) {
		var c = {
				contents: []
			},
			d = function (a, d) {
				c.contents = b("bs_belt_Map").keysToArray(a.threads);
				return 0
			};
		Q(b("bs_caml_option").some(a), [b("bs_block").__(2, [b("bs_block").__(3, [d])])]);
		return c.contents
	}
	G = {
		make: S
	};
	H = S;
	f.irisMapping = j;
	f.fbid = c;
	f.deliveryReceipts = d;
	f.readReceiptsPerThread = e;
	f.ignoredIds = m;
	f.blockedIds = n;
	f.pendingFolderUnseenCount = aa;
	f.typing = ba;
	f.pendingReadStatusThreads = ca;
	f.messages = da;
	f.localIDsMap = o;
	f.messagesWithUploadsInFlight = p;
	f.threadlistOrderMap = q;
	f.pinnedThreads = r;
	f.montage = ea;
	f.orderedMessageLists = fa;
	f.unreadCounts = ga;
	f.initialUnreadCounts = s;
	f.unseenTimestamp = ha;
	f.threads = a;
	f.thread = l;
	f.send = Q;
	f.compute = U;
	f.getThreadMetaNow = V;
	f.getMultiThreadMeta = Cb;
	f.getThreadMeta = Db;
	f.createNewLocalThread = Eb;
	f.createNewLocalThreadGenerateID = Fb;
	f.createNewLocalGroupGeneralThreadGenerateID = Gb;
	f.isEmptyLocalThread = X;
	f.isNewEmptyLocalThread = Y;
	f.getPinnedThreadlist = Hb;
	f.unsubscribeThread = Ib;
	f.sendJS = Lb;
	f.invalidateSearchedMessages = Rb;
	f.hasLoadedNMessages = $;
	f.hasLoadedAllMessages = Qb;
	f.getCurrentlyLoadedMessages = Z;
	f.getServerMessageID = Nb;
	f.getMessagesFromIDs = Ob;
	f.getMessageFromID = Pb;
	f.getThreadMessagesRange = Ub;
	f.getThreadMessagesRangeNow = Sb;
	f.fetchMoreMessages = Vb;
	f.processPollStickerVoted = Kb;
	f.getUnseenUnreadCount = Wb;
	f.getUnseenUnreadCountRaw = Xb;
	f.getUnseenCount = Yb;
	f.getThreadIDs_debug = ac;
	f.getUnreadThreadCount = $b;
	f.markAsSeen = Zb;
	f.processJSActions = Mb;
	f.Provider = G;
	f.jsComponent = H;
	f.useHook = T
}), null);
__d("MessengerState.re", ["bs_curry", "MessengerState.bs"], (function (a, b, c, d, e, f) {
	c = (a = b("MessengerState.bs")).fbid;
	f.fbid = c;
	d = a.deliveryReceipts;
	f.deliveryReceipts = d;
	e = a.readReceiptsPerThread;
	f.readReceiptsPerThread = e;
	c = a.ignoredIds;
	f.ignoredIds = c;
	d = a.blockedIds;
	f.blockedIds = d;
	e = a.pendingFolderUnseenCount;
	f.pendingFolderUnseenCount = e;
	c = a.typing;
	f.typing = c;
	d = a.pendingReadStatusThreads;
	f.pendingReadStatusThreads = d;
	e = a.messages;
	f.messages = e;
	c = a.localIDsMap;
	f.localIDsMap = c;
	d = a.messagesWithUploadsInFlight;
	f.messagesWithUploadsInFlight = d;
	e = a.threadlistOrderMap;
	f.threadlistOrderMap = e;
	c = a.pinnedThreads;
	f.pinnedThreads = c;
	d = a.montage;
	f.montage = d;
	e = a.orderedMessageLists;
	f.orderedMessageLists = e;
	c = a.unreadCounts;
	f.unreadCounts = c;
	d = a.initialUnreadCounts;
	f.initialUnreadCounts = d;
	e = a.unseenTimestamp;
	f.unseenTimestamp = e;
	c = a.threads;
	f.threads = c;
	d = function (a, c) {
		a = b("bs_curry")._2(b("MessengerState.bs").thread, a, c);
		return a
	};
	f.thread = d;
	e = function (a, c) {
		a = b("bs_curry")._2(b("MessengerState.bs").compute, a, c);
		return a
	};
	f.compute = e;
	c = function (a, c) {
		a = b("bs_curry")._2(b("MessengerState.bs").getThreadMetaNow, a, c);
		return a
	};
	f.getThreadMetaNow = c;
	d = function (a, c, d, e) {
		a = b("bs_curry")._4(b("MessengerState.bs").getMultiThreadMeta, a, c, d, e);
		return a
	};
	f.getMultiThreadMeta = d;
	e = function (a, c, d, e) {
		a = b("bs_curry")._4(b("MessengerState.bs").getThreadMeta, a, c, d, e);
		return a
	};
	f.getThreadMeta = e;
	c = function (a, c) {
		a = b("bs_curry")._2(b("MessengerState.bs").isEmptyLocalThread, a, c);
		return a
	};
	f.isEmptyLocalThread = c;
	d = a.getPinnedThreadlist;
	f.getPinnedThreadlist = d;
	e = function (a, c) {
		a = b("bs_curry")._2(b("MessengerState.bs").unsubscribeThread, a, c);
		return a
	};
	f.unsubscribeThread = e;
	c = function (a, c, d) {
		a = b("bs_curry")._3(b("MessengerState.bs").hasLoadedNMessages, a, c, d);
		return a
	};
	f.hasLoadedNMessages = c;
	d = function (a, c) {
		a = b("bs_curry")._2(b("MessengerState.bs").getCurrentlyLoadedMessages, a, c);
		return a
	};
	f.getCurrentlyLoadedMessages = d;
	e = function (a, c) {
		a = b("bs_curry")._2(b("MessengerState.bs").getServerMessageID, a, c);
		return a
	};
	f.getServerMessageID = e;
	c = function (a, c) {
		a = b("bs_curry")._2(b("MessengerState.bs").getMessagesFromIDs, a, c);
		return a
	};
	f.getMessagesFromIDs = c;
	d = function (a, c) {
		a = b("bs_curry")._2(b("MessengerState.bs").getMessageFromID, a, c);
		return a
	};
	f.getMessageFromID = d;
	e = function (a, c, d, e, f, g, h) {
		a = b("bs_curry")._7(b("MessengerState.bs").getThreadMessagesRange, a, c, d, e, f, g, h);
		return a
	};
	f.getThreadMessagesRange = e;
	c = function (a, c, d, e) {
		a = b("bs_curry")._4(b("MessengerState.bs").getThreadMessagesRangeNow, a, c, d, e);
		return a
	};
	f.getThreadMessagesRangeNow = c;
	d = function (a, c, d, e, f, g, h) {
		a = b("bs_curry")._7(b("MessengerState.bs").fetchMoreMessages, a, c, d, e, f, g, h);
		return a
	};
	f.fetchMoreMessages = d;
	e = a.getUnseenUnreadCount;
	f.getUnseenUnreadCount = e;
	c = a.getUnseenCount;
	f.getUnseenCount = c;
	d = a.getThreadIDs_debug;
	f.getThreadIDs_debug = d;
	e = function (a, c) {
		a = b("bs_curry")._2(b("MessengerState.bs").getUnreadThreadCount, a, c);
		return a
	};
	f.getUnreadThreadCount = e;
	(function (a) {
		return null
	});
	c = a.jsComponent;
	f.jsComponent = c;
	d = a.useHook;
	f.useHook = d
}), null);
__d("MercuryDelayedDispatcher", ["MercuryDispatcher", "MercuryServerPayloadPreprocessor", "MercuryServerRequests", "MercurySingletonProvider", "MercuryThreadIDMap"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a(a) {
			var c = this;
			this.$1 = a;
			this.$2 = [];
			this.$3 = b("MercuryThreadIDMap").getForFBID(this.$1);
			this.$4 = b("MercuryDispatcher").getForFBID(this.$1);
			this.$5 = b("MercuryServerRequests").getForFBID(this.$1);
			this.$6 = b("MercuryServerPayloadPreprocessor").getForFBID(this.$1);
			this.$4.subscribe("model-update-completed", function (a, b) {
				return c.$7()
			})
		}
		a.getForFBID = function (a) {
			return g.getForFBID(a)
		};
		a.get = function () {
			return g.get()
		};
		var c = a.prototype;
		c.handleUpdateWaitForThread = function (a, b) {
			var c = this,
				d = this.$3.getClientIDFromServerIDNow(b);
			if (d) {
				this.$8(a);
				return
			}
			this.$3.getClientIDFromServerID(b, function () {
				return c.$2.push({
					thread_fbid: b,
					payload: a
				})
			});
			this.$5.ensureThreadIsFetched(b)
		};
		c.$7 = function () {
			if (this.$2 && this.$2.length) {
				var a = this.$2.shift(),
					b = a.thread_fbid;
				a = a.payload;
				this.handleUpdateWaitForThread(a, b)
			}
		};
		c.$8 = function (a) {
			a.from_client ? this.$4.handleUpdate(a) : this.$6.handleUpdate(a)
		};
		return a
	}();
	e.exports = a;
	var g = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MercuryDispatcher", ["invariant", "ArbiterMixin", "LogHistory", "MercurySingletonProvider", "MercuryThreadInformer", "MessengerParticipants.bs", "MessengerState.bs", "gkx", "isEmpty", "mixin"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("LogHistory").getInstance("mercury_dispatcher");
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);
		c.getForFBID = function (a) {
			return j.getForFBID(a)
		};
		c.get = function () {
			return j.get()
		};

		function c(b) {
			var c;
			c = a.call(this) || this;
			c.$MercuryDispatcher1 = b;
			return c
		}
		var d = c.prototype;
		d.handlePreprocessedUpdate = function (a) {
			a.preprocessed = !0, this.handleUpdate(a)
		};
		d.handleUpdate = function (a) {
			var c = this;
			this.$MercuryDispatcher2(a);
			!!a.from_client !== !!a.preprocessed || g(0, 5757);
			delete a.preprocessed;
			(h || (h = b("isEmpty")))(a) || b("MercuryThreadInformer").getForFBID(this.$MercuryDispatcher1).synchronizeInforms(function () {
				a.payload_source === "server_invalidate_global_state" && (c.inform("invalidate-global-state", {}), b("MessengerParticipants.bs").reset());
				if (a.payload_source === "server_invalidate_thread_state") {
					var d = a.threads && a.threads.length > 0 && a.threads[0] && a.threads[0].thread_id;
					d && c.inform("invalidate-thread-state", d)
				}
				a.threads && Array.isArray(a.threads) && a.threads.length > 0 && b("gkx")("1443200") && b("MessengerParticipants.bs").addPreloadedParticipants(a.threads[0]);
				b("MessengerParticipants.bs").addParticipants(a);
				b("MessengerState.bs").sendJS(c.$MercuryDispatcher1, b("MessengerState.bs").processJSActions(a));
				c.inform("update-threadlist", a);
				c.inform("update-messages", a);
				c.inform("model-update-completed", null)
			})
		};
		d.$MercuryDispatcher2 = function (a) {
			var b = a.payload_source;
			if (b === "client_change_read_status" || b === "client_mark_thread_seen") return;
			var c = {
				from_client: a.from_client,
				messages: null
			};
			if (a.actions) {
				a = a.actions.filter(function (a) {
					return a.action_type === "ma-type:user-generated-message" || a.action_type === "ma-type:log-message"
				}).map(function (a) {
					return {
						action_type: a.action_type,
						other_user_fbid: a.other_user_fbid,
						thread_fbid: a.thread_fbid,
						message_id: a.message_id
					}
				});
				a.length && (c.messages = a)
			}
			i.debug("update:" + b, JSON.stringify(c))
		};
		return c
	}(b("mixin")(b("ArbiterMixin")));
	e.exports = a;
	var j = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MercurySendErrorLogger", ["Banzai", "BanzaiLogger"], (function (a, b, c, d, e, f) {
	var g = b("BanzaiLogger").create({
			retry: !0
		}),
		h = b("Banzai").isEnabled("mercury_send_error_logging");
	a = {
		log: function (a) {
			if (!h) return;
			a = {
				message_id: a.message_id,
				timestamp_client: Date.now(),
				error_type: a.error_data.type,
				error_code: a.error_data.code,
				error_description: a.error_data.description,
				is_transient: a.error_data.is_transient
			};
			g.log("MercurySendErrorLoggerConfig", a)
		}
	};
	e.exports = a
}), null);
__d("MercuryServerPayloadPreprocessor", ["invariant", "ChatReliabilityInstrumentation", "LogHistory", "MercuryAttachment", "MercuryDispatcher", "MercuryIDs", "MercurySendErrorLogger", "MercurySingletonProvider", "MercuryThreadIDMap", "MessengerEnvironment", "MessengerState.re", "URI", "gkx"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h;
	a = function () {
		function a(a) {
			this.$4 = b("LogHistory").getInstance("MercuryServerPayloadPreprocessor"), this.$1 = a, this.$2 = b("MercuryThreadIDMap").getForFBID(this.$1), this.$3 = b("MercuryDispatcher").getForFBID(this.$1)
		}
		a.getForFBID = function (a) {
			return i.getForFBID(a)
		};
		a.get = function () {
			return i.get()
		};
		var c = a.prototype;
		c.handleUpdate = function (a) {
			var c = this,
				e = {};
			a.from_client && g(0, 2150);
			(a.threads || []).forEach(function (a) {
				c.$5(a, e);
				var b = c.$2.getServerIDFromClientIDNow(a.thread_id);
				d(["MercuryServerRequests"], function (d) {
					d = d.getForFBID(c.$1);
					d.markThreadFetched(a.thread_id);
					b && d.markThreadFetched(b);
					d.updateLastActionTimestamp(a.timestamp)
				})
			});
			a.pinned_thread_ids = (a.pinned_thread_ids || []).map(function (a) {
				return c.$2.getClientIDFromServerIDNow(a)
			});
			(a.ordered_threadlists || []).forEach(function (a) {
				var b = a.thread_fbids || [];
				b = b.concat(a.other_user_fbids || []);
				a.thread_ids = b.map(function (a) {
					return c.$2.getClientIDFromServerIDNow(a.toString())
				})
			});
			if (a.delivery_receipts) {
				var f = {};
				for (var h = a.delivery_receipts, i = Array.isArray(h), j = 0, h = i ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					var k;
					if (i) {
						if (j >= h.length) break;
						k = h[j++]
					} else {
						j = h.next();
						if (j.done) break;
						k = j.value
					}
					k = k;
					var l = k.other_user_fbid ? b("MercuryIDs").getThreadIDFromUserID(k.other_user_fbid) : this.$2.getClientIDFromServerIDNow(k.thread_fbid);
					l && (f[l] = k.time)
				}
				a.delivery_receipts = f
			}
			a.actions = a.actions || [];
			a.actions.forEach(function (f) {
				f.action_type === "ma-type:send-message" && f.status === 10 && b("MercurySendErrorLogger").log(f);
				var h = null,
					i = null;
				f.other_user_fbid ? (i = b("MercuryIDs").getThreadIDFromUserID(f.other_user_fbid), h = f.other_user_fbid) : f.thread_fbid ? (i = b("MercuryIDs").getThreadIDFromThreadFBID(f.thread_fbid), h = f.thread_fbid) : f.thread_id ? (i = b("MercuryIDs").getThreadIDFromThreadFBID(f.thread_id), h = f.thread_id) : f.status && f.status != 1 && f.client_thread_id ? i = f.client_thread_id : g(0, 2151, f.action_type, f.status);
				h = h && h.toString();
				f.thread_id = c.$2.hasClientIDForServerID(h) ? c.$2.getClientIDFromServerIDNow(h) : i;
				f.action_type == "ma-type:send-message" && f.client_thread_id && h && (f.thread_id = f.client_thread_id, c.$6("forceSetServerIDToClientID", h, f.client_thread_id) && b("ChatReliabilityInstrumentation").logSET_THREAD_ID_MAP(h + ":" + f.client_thread_id), c.$2.forceSetServerIDToClientID(h, f.client_thread_id), e[h] = f.client_thread_id);
				f.thread_id || g(0, 2152, f.action_type);
				(!a.payload_source || !a.payload_source.startsWith("server")) && d(["MercuryServerRequests"], function (a) {
					a.getForFBID(c.$1).updateLastActionTimestamp(f.timestamp)
				})
			});
			this.$7(a);
			this.$8(a);
			if (a.end_of_history) {
				l = [];
				for (var k = 0; k < a.end_of_history.length; k++) {
					j = a.end_of_history[k];
					j.type == "user" ? l.push("user:" + j.fbid) : j.type == "thread" && this.$2.hasClientIDForServerID(j.fbid) && l.push(this.$2.getClientIDFromServerIDNow(j.fbid))
				}
				a.end_of_history = l
			}
			if (a.roger) {
				var m = {};
				Object.keys(a.roger).forEach(function (d) {
					var e = Object.keys(a.roger[d]),
						f;
					d ? f = c.$2.getClientIDFromServerIDNow(d) : e.length === 1 && (f = b("MercuryIDs").getThreadIDFromUserID(e[0]));
					if (f) {
						e = a.roger[d];
						m[f] = {};
						for (var g in e)
							if (Object.prototype.hasOwnProperty.call(e, g)) {
								d = b("MercuryIDs").getParticipantIDFromUserID(g);
								m[f][d] = e[g]
							}
					}
				});
				a.roger = m
			}
			a.newlyAddedClientIDs = e;
			a.preprocessed = !0;
			this.$3.handleUpdate(a)
		};
		c.$6 = function (a, c, d) {
			if (!b("gkx")("1199097")) return;
			var e = b("MessengerState.re").getThreadMetaNow(this.$1, d);
			if (e == null) {
				this.$4.debug(a, c + ":" + d);
				return !0
			}
			return !1
		};
		c.$5 = function (a, c) {
			var d = a.other_user_fbid ? a.other_user_fbid : a.thread_fbid;
			d || g(0, 2153);
			var e = this.$2.getClientIDFromServerIDNow(d);
			e || (e = a.other_user_fbid ? b("MercuryIDs").getThreadIDFromUserID(a.other_user_fbid) : b("MercuryIDs").getThreadIDFromThreadFBID(a.thread_fbid), this.$6("setServerIDToClientID", d, e), this.$2.setServerIDToClientID(d, e), this.$2.setDeprecatedServerIDToClientID(a.thread_id, e), c[d] = e);
			a.thread_id = e
		};
		c.$7 = function (a) {
			a.actions.forEach(function (a) {
				a.action_type === "ma-type:user-generated-message" && (a.attachments = a.attachments || [], a.attachments.forEach(function (a) {
					if (b("MercuryAttachment").isShareAttachment(a) && a.share && b("MessengerEnvironment").messengerui) {
						var c = new(h || (h = b("URI")))(a.share.uri);
						c.getDomain() || (a.share.uri = c.setDomain("facebook.com").setSubdomain((h || (h = b("URI"))).getRequestURI().getSubdomain()).setProtocol("https").toString())
					}
				}))
			})
		};
		c.$8 = function (a) {
			a.actions.forEach(function (a) {
				if (a.action_type !== "ma-type:user-generated-message") return;
				a = a;
				if (!a.has_attachment || !a.attachments) return;
				for (var c = a.attachments.length - 1; c >= 0; c -= 1) {
					var d = a.attachments[c];
					if (!d.share || !d.share.style_list || d.share.style_list[0] != "genie_message") continue;
					d.share.target.genie_id && (a.author = b("MercuryIDs").getParticipantIDFromUserID(d.share.target.genie_id));
					d.share.target && !d.share.target.attachment && (a.attachments.splice(c, 1), a.has_attachment = a.attachments.length > 0)
				}
			})
		};
		return a
	}();
	e.exports = a;
	var i = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MercuryServerURIs", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = "/ajax/mercury/thread_info.php";
	f.THREAD_INFO = a;
	b = "/ajax/mercury/mark_folder_as_read.php";
	f.MARK_FOLDER_READ = b;
	c = "/ajax/mercury/change_read_status.php";
	f.CHANGE_READ_STATUS = c;
	d = "/ajax/mercury/mark_seen.php";
	f.MARK_SEEN = d;
	e = "/ajax/mercury/threadlist_info.php";
	f.THREADLIST_INFO = e;
	a = "/ajax/mercury/mark_spam.php";
	f.MARK_SPAM = a;
	b = "/ajax/mercury/unmark_spam.php";
	f.UNMARK_SPAM = b;
	c = "/ajax/mercury/unread_threads.php";
	f.UNREAD_THREADS = c;
	d = "/ajax/mercury/change_pinned_status.php";
	f.CHANGE_PINNED_STATUS = d;
	e = "/ajax/mercury/change_archived_status.php";
	f.CHANGE_ARCHIVED_STATUS = e;
	a = "/ajax/mercury/change_page_follow_up_status.php";
	f.CHANGE_PAGE_FOLLOW_UP_STATUS = a;
	b = "/ajax/mercury/delete_thread.php";
	f.DELETE_THREAD = b;
	c = "/ajax/mercury/delete_messages.php";
	f.DELETE_MESSAGES = c;
	d = "/ajax/mercury/delivery_receipts.php";
	f.DELIVERY_RECEIPTS = d;
	e = "/ajax/mercury/move_thread.php";
	f.MOVE_THREAD = e;
	a = "/ajax/mercury/change_mute_thread.php";
	f.CHANGE_MUTE_THREAD = a
}), null);
__d("areJSONRepresentationsEqual", [], (function (a, b, c, d, e, f) {
	e.exports = a;

	function a(a, b) {
		return JSON.stringify(a) == JSON.stringify(b)
	}
}), null);
__d("MercuryServerDispatcher", ["AsyncRequest", "AsyncResponse", "BanzaiLogger", "Bootloader", "ChatReliabilityInstrumentation", "CurrentUser", "FBIDCheck", "LogHistory", "MercuryServerURIs", "MessagingTag", "MessengerWebGraphQLTypedLogger", "areJSONRepresentationsEqual", "debounceAcrossTransitions", "getByPath", "performanceAbsoluteNow"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = {},
		i = b("LogHistory").getInstance("mercury_server_dispatcher"),
		j = 50,
		k = [],
		l = !1,
		m = {
			IMMEDIATE: "immediate",
			IDEMPOTENT: "idempotent",
			BATCH_SUCCESSIVE: "batch-successive",
			BATCH_SUCCESSIVE_UNIQUE: "batch-successive-unique",
			BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR: "batch-successive-piggyback-retry",
			BATCH_DEFERRED_MULTI: "batch-deferred-multi",
			BATCH_CONDITIONAL: "batch-conditional",
			DEFAULT_ENDPOINT_ID: "mercuryServerDispatcherDefaultEndpointID",
			registerEndpoints: function (a) {
				for (var c in a) {
					var d = a[c],
						e = d.request_user_id || b("CurrentUser").getID(),
						f = d.endpoint_id || m.DEFAULT_ENDPOINT_ID;
					h[c] || (h[c] = {});
					h[c][e] || (h[c][e] = {});
					h[c][e][f] = new n(c, d)
				}
			},
			trySend: function (a, c, d, e, f) {
				e = e || b("CurrentUser").getID(), f = f || m.DEFAULT_ENDPOINT_ID, h[a][e][f].trySend(c, d)
			},
			getRequestErrors: function () {
				return k
			}
		};

	function n(a, c) {
		var d = c.mode || m.IMMEDIATE;
		switch (d) {
			case m.IMMEDIATE:
			case m.IDEMPOTENT:
			case m.BATCH_SUCCESSIVE:
			case m.BATCH_SUCCESSIVE_UNIQUE:
			case m.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR:
			case m.BATCH_DEFERRED_MULTI:
			case m.BATCH_CONDITIONAL:
				break;
			default:
				throw new Error("Invalid MercuryServerDispatcher mode " + d)
		}
		this._endpoint = a;
		this._mode = d;
		this._customHeader = c.customHeader;
		this._requestUserID = c.request_user_id;
		this._combineData = c.batch_function;
		this._combineDataIf = c.batch_if;
		this._batches = [];
		this._handler = c.handler;
		this._errorHandler = c.error_handler;
		this._transportErrorHandler = c.transport_error_handler || c.error_handler;
		this._connectionRetries = c.connection_retries || 0;
		this._timeoutHandler = c.timeout_handler;
		this._timeout = c.timeout;
		this._serverDialogCancelHandler = c.server_dialog_cancel_handler || c.error_handler;
		this._deferredSend = b("debounceAcrossTransitions")(this._batchSend, 0, this)
	}
	Object.assign(n.prototype, {
		_inFlight: 0,
		_handler: null,
		_errorHandler: null,
		_transportErrorHandler: null,
		_timeoutHandler: null,
		_timeout: null,
		_serverDialogCancelHandler: null,
		_combineData: null,
		trySend: function (a, b) {
			if (l) return;
			a === void 0 && (a = null);
			b = b || this._mode;
			if (b == m.IMMEDIATE) this._send(a);
			else if (b == m.IDEMPOTENT) this._inFlight || this._send(a);
			else if (b == m.BATCH_SUCCESSIVE || b == m.BATCH_SUCCESSIVE_UNIQUE) !this._inFlight ? this._send(a) : this._batchData(a);
			else if (b == m.BATCH_CONDITIONAL) {
				var c = this._batches[0] && this._batches[0].getData();
				this._inFlight && (this._combineDataIf(this._pendingRequestData, a) || this._combineDataIf(c, a)) ? this._batchData(a) : this._send(a)
			} else b == m.BATCH_DEFERRED_MULTI ? (this._batchData(a), this._deferredSend()) : b == m.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR && (this._batchData(a), this._inFlight || this._batchSend())
		},
		_send: function (a) {
			var c = this;
			this._inFlight++;
			this._pendingRequestData = babelHelpers["extends"]({}, a);
			this._requestUserID != b("CurrentUser").getID() && (a.request_user_id = this._requestUserID);
			i.log("send", JSON.stringify({
				endpoint: this._endpoint,
				inflight_count: this._inFlight
			}));
			var d = (g || (g = b("performanceAbsoluteNow")))(),
				e = new(b("AsyncRequest"))(this._endpoint).setData(a).setOption("retries", this._connectionRetries).setAllowCrossPageTransition(!0);
			this._customHeader && e.setRequestHeader(this._customHeader.name, this._customHeader.value);
			if (this._endpoint === b("MercuryServerURIs").THREADLIST_INFO) {
				b("Bootloader").loadModules(["MessengerGraphQLThreadlistFetcher.bs", "MercuryJewelBootloadModules"], function (f, g) {
					var h = a.request_user_id || b("CurrentUser").getID(),
						d = a.request_user_id && !b("FBIDCheck").isUser_deprecated(a.request_user_id);
					g = (g = {}, g[b("MessagingTag").INBOX] = "INBOX", g[b("MessagingTag").OTHER] = "OTHER", g[b("MessagingTag").ACTION_ARCHIVED] = "ARCHIVED", g[b("MessagingTag").SPAM] = "SPAM", g[b("MessagingTag").PENDING] = "PENDING", g[b("MessagingTag").PAGE_BACKGROUND] = "PAGE_BACKGROUND", g);
					var i = [],
						j = Object.keys(g);
					for (var k = 0; k < j.length; k++) {
						var l = j[k];
						if (Object.prototype.hasOwnProperty.call(a, l)) {
							var m = a[l];
							i.push({
								limit: m.before ? m.limit + 1 : m.limit,
								folder: l,
								tags: m.filter ? [g[l], m.filter] : [g[l]],
								timestamp: m.before,
								filter: m.filter,
								includeDeliveryReceipts: !0,
								includeSeqID: !1
							})
						}
					}
					l = function () {
						f.fetchAll(h, i, d, "fetch_threadlist").done(function (a) {
							a = new(b("AsyncResponse"))(e, babelHelpers["extends"]({}, a, {
								payload_source: "server_fetch_threadlist_info"
							}));
							c._handleResponse(a)
						}, function (a) {
							c._handleGraphQLError("threadlist_failure", i, a, e)
						})
					};
					l()
				}, "MercuryServerDispatcher");
				return
			}
			if (this._endpoint === b("MercuryServerURIs").THREAD_INFO) {
				var f, h = (f = b("getByPath"))(a, ["threads", "user_ids"], []),
					j = f(a, ["threads", "thread_fbids"], []),
					k = f(a, ["messages", "user_ids"], {}),
					l = f(a, ["messages", "thread_fbids"], {}),
					m = a.request_user_id && !b("FBIDCheck").isUser_deprecated(a.request_user_id);
				b("Bootloader").loadModules(["MessengerGraphQLThreadFetcher.bs"], function (d) {
					var f = a.request_user_id || b("CurrentUser").getID(),
						g = Object.keys(k),
						i = g.map(function (a) {
							var b = k[a].limit,
								c = k[a].timestamp;
							return {
								id: a,
								limit: c ? b + 1 : b,
								loadReadReceipts: !0,
								loadDeliveryReceipts: !0,
								timestamp: c,
								isCanonical: !0
							}
						}),
						n = new Set(g);
					h.forEach(function (a) {
						if (n.has(a)) return;
						i.push({
							id: a,
							limit: 0,
							loadReadReceipts: !1,
							loadDeliveryReceipts: !1,
							timestamp: null,
							isCanonical: !0
						})
					});
					g = Object.keys(l);
					var o = g.map(function (a) {
							var b = l[a].limit,
								c = l[a].timestamp;
							return {
								id: a,
								limit: c ? b + 1 : b,
								loadReadReceipts: !0,
								loadDeliveryReceipts: !0,
								timestamp: c,
								isCanonical: !1
							}
						}),
						p = new Set(g);
					j.forEach(function (a) {
						if (p.has(a)) return;
						o.push({
							id: a,
							limit: 0,
							loadReadReceipts: !1,
							loadDeliveryReceipts: !1,
							timestamp: null,
							isCanonical: !1
						})
					});
					var q = [].concat(i, o);
					q.forEach(function (a) {
						a.limit > 21 && b("ChatReliabilityInstrumentation").logFETCHING_MANY_MESSAGES(JSON.stringify(a))
					});
					d.fetchAll(f, q, m).done(function (a) {
						a = a.slice(0);
						if (a.length > 0) {
							var d = {};
							a.forEach(function (a) {
								return Object.assign(d, a.roger)
							});
							var f = [];
							a.forEach(function (a) {
								return f.push.apply(f, a.delivery_receipts)
							});
							var g = [];
							a.forEach(function (a) {
								return g = g.concat(a.actions)
							});
							g = g.filter(Boolean);
							a = {
								actions: g,
								threads: a.map(function (a) {
									return a.thread
								}).filter(Boolean),
								end_of_history: a.map(function (a) {
									return a.end_of_history
								}).filter(Boolean),
								roger: d,
								delivery_receipts: f,
								payload_source: "server_fetch_thread_info"
							};
							a = new(b("AsyncResponse"))(e, a);
							c._handleResponse(a)
						} else c._handleResponse(new(b("AsyncResponse"))(e, {}))
					}, function (a) {
						c._handleGraphQLError("thread_failure", q, a, e)
					})
				}, "MercuryServerDispatcher");
				return
			}
			e.setHandler(function (a) {
				b("BanzaiLogger").log("ChatPerfLoggerConfig", {
					event: "async_request",
					duration: (g || (g = b("performanceAbsoluteNow")))() - d,
					endpoint: c._endpoint
				}), c._handleResponse(a)
			}).setErrorHandler(this._handleError.bind(this)).setTransportErrorHandler(this._handleTransportError.bind(this)).setServerDialogCancelHandler(this._handleServerDialogCancel.bind(this));
			this._timeout && this._timeoutHandler && e.setTimeoutHandler(this._timeout, this._handleTimeout.bind(this));
			e.send()
		},
		_handleGraphQLError: function (a, c, d, e) {
			var f = null,
				g = e.getData().retry_count;
			typeof d.toString === "function" && (f = d.toString());
			if (typeof d.getRequest !== "function") {
				var h = d.errors && d.errors[0];
				d = new(b("AsyncResponse"))(e, d);
				d.errorSummary = d.errors && d.errors.map();
				d.errorDescription = h ? h.message : null;
				f = h && h.message ? h.message : f;
				d.silentError = h && h.is_silent;
				d.transientError = h && h.is_transient
			}
			g || new(b("MessengerWebGraphQLTypedLogger"))().setErrorMessage(f).setEvent(a).setQueryParams(JSON.stringify(c)).log();
			this._handleError(d)
		},
		_batchData: function (a, c) {
			if (this._mode == m.BATCH_SUCCESSIVE_UNIQUE && this._pendingRequestData !== void 0 && b("areJSONRepresentationsEqual")(a, this._pendingRequestData)) return;
			else {
				var d = this._batches.length - 1;
				d >= 0 ? c ? this._batches[d].combineWithOlder(a, this._combineData) : this._batches[d].combineWith(a, this._combineData) : this._batches.push(new o(a));
				i.debug("batch", JSON.stringify({
					endpoint: this._endpoint
				}))
			}
		},
		_batchSend: function () {
			this._batches[0] && (this._send(this._batches[0].getData()), this._batches.shift())
		},
		_handleResponse: function (a) {
			this._inFlight--;
			i.log("response", JSON.stringify({
				endpoint: this._endpoint,
				inflight_count: this._inFlight
			}));
			var b = a.getPayload();
			l = b && b.kill_chat;
			l && i.log("killswitch_enabled", JSON.stringify({
				endpoint: this._endpoint,
				inflight_count: this._inFlight
			}));
			b && b.error_payload ? this._errorHandler && this._errorHandler(a) : this._handler && this._handler(b, a.getRequest());
			(this._mode == m.BATCH_SUCCESSIVE || this._mode == m.BATCH_SUCCESSIVE_UNIQUE || this._mode == m.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR || this._mode == m.BATCH_CONDITIONAL) && this._batchSend();
			delete this._pendingRequestData
		},
		_createErrorRecord: function (a) {
			return a instanceof b("AsyncResponse") ? {
				endpoint: this._endpoint,
				user: this._requestUserID,
				time: Date.now(),
				code: a.getError(),
				description: a.getErrorDescriptionString(),
				summary: a.getErrorSummary(),
				isSilent: a.isSilent,
				isTransient: a.isTransient(),
				isBlockedAction: a.isBlockedAction(),
				isWarning: a.getErrorIsWarning(),
				payload: a.getPayload()
			} : {
				endpoint: this._endpoint,
				user: this._requestUserID,
				time: Date.now(),
				description: a.toString()
			}
		},
		_postErrorHandler: function (a) {
			this._inFlight--;
			i.error("error", JSON.stringify({
				endpoint: this._endpoint,
				inflight_count: this._inFlight,
				error: a instanceof b("AsyncResponse") ? a.getError() + " " + a.getErrorDescription() : a instanceof Error ? a.toString() : "Unknown"
			}));
			k.push(this._createErrorRecord(a));
			k.length > j && (k = k.slice(-1 * j));
			a = this._mode;
			a == m.BATCH_SUCCESSIVE || a == m.BATCH_SUCCESSIVE_UNIQUE || a == m.BATCH_CONDITIONAL ? this._batchSend() : a == m.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR && (this._batches[0] ? (this._batchData(this._pendingRequestData, !0), this._batchSend()) : this._batchData(this._pendingRequestData, !0));
			delete this._pendingRequestData
		},
		_handleError: function (a) {
			this._errorHandler && this._errorHandler(a), this._postErrorHandler(a)
		},
		_handleTransportError: function (a) {
			this._transportErrorHandler && this._transportErrorHandler(a), this._postErrorHandler(a)
		},
		_handleTimeout: function (a) {
			this._timeoutHandler && this._timeoutHandler(a), this._postErrorHandler(new Error("Endpoint Timeout"))
		},
		_handleServerDialogCancel: function (a) {
			this._serverDialogCancelHandler && this._serverDialogCancelHandler(a), this._postErrorHandler(a)
		}
	});

	function o(a) {
		this._data = a, this._size = 1
	}
	Object.assign(o.prototype, {
		getData: function () {
			return this._data
		},
		getSize: function () {
			return this._size
		},
		combineWith: function (a, b) {
			this._data = b(this._data, a), this._size++
		},
		combineWithOlder: function (a, b) {
			this._data = b(a, this._data), this._size++
		}
	});
	e.exports = m
}), null);
__d("MercuryServerSendMessageQueueOptions", [], (function (a, b, c, d, e, f) {
	a = function (a, b, c, d, e, f) {
		this.success_handler = a, this.error_handler = b, this.transport_error_handler = c, this.timeout_handler = d, this.timeout = e, this.connection_retries = f
	};
	e.exports = a
}), null);
__d("MercurySyncDeltaHolder", ["MercurySingletonProvider"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a() {
			this.$2 = new Map(), this.$3 = [], this.$1 = 0
		}
		a.getForFBID = function (a) {
			return g.getForFBID(a)
		};
		a.get = function () {
			return g.get()
		};
		var b = a.prototype;
		b.peek = function () {
			this.$3 = this.$3.sort(function (a, b) {
				return a - b
			});
			return this.$3[0]
		};
		b.getTop = function () {
			this.$3 = this.$3.sort(function (a, b) {
				return a - b
			});
			return this.$3.reverse()[0]
		};
		b.pop = function () {
			this.$3 = this.$3.sort(function (a, b) {
				return a - b
			});
			if (this.$3.length === 0) return void 0;
			var a = this.$3.shift(),
				b = this.$2.get(a);
			this.$2["delete"](a);
			return {
				seqID: a,
				delta: b
			}
		};
		b.push = function (a, b) {
			if (this.$2.has(a)) return;
			this.$2.set(a, b);
			this.$3.push(a)
		};
		b.getLastSeqID = function () {
			return this.$1
		};
		b.updateLastSeqID = function (a) {
			this.$1 = a
		};
		b.updateLastSeqIDAndClearHistory = function (a) {
			this.$2 = new Map(), this.$3 = [], this.$1 = a
		};
		return a
	}();
	e.exports = a;
	var g = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MessengerWebStgTypedLoggerLite", ["generateLiteTypedLogger"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = b("generateLiteTypedLogger")("logger:MessengerWebStgLoggerConfig")
}), null);
__d("XMercuryUnseenThreadIDsController", ["XController"], (function (a, b, c, d, e, f) {
	e.exports = b("XController").create("/mercury/unseen_thread_ids/", {})
}), null);
__d("XMessagingChangeMentionsMuteModeController", ["XController"], (function (a, b, c, d, e, f) {
	e.exports = b("XController").create("/ajax/mercury/change_mentions_mute_thread/", {})
}), null);
__d("XMessagingChangeReactionsMuteModeController", ["XController"], (function (a, b, c, d, e, f) {
	e.exports = b("XController").create("/ajax/mercury/change_reactions_mute_thread/", {})
}), null);
__d("MercuryServerRequests", ["errorCode", "invariant", "Promise", "Arbiter", "AsyncResponse", "AvailableListConstants", "BanzaiODS", "Bootloader", "ChannelConstants", "ChatReliabilityInstrumentation", "CurrentUser", "Env", "LogHistory", "MercuryAPIArgsSource", "MercuryAssert", "MercuryDispatcher", "MercuryIDs", "MercuryMessageClientState", "MercuryMessageIDs.bs", "MercurySendErrorLogger", "MercuryServerDispatcher", "MercuryServerPayloadPreprocessor", "MercuryServerRequestsConfig", "MercuryServerSendMessageQueueOptions", "MercuryServerSendMessageQueueRouter", "MercuryServerURIs", "MercurySingletonProvider", "MercurySyncDeltaHolder", "MercuryTagHelper", "MercuryThreadIDMap", "MessagingConfig", "MessagingTag", "MessengerEnvironment", "MessengerWebStgTypedLoggerLite", "PresenceStatus", "ScriptPath", "XMercuryUnseenThreadIDsController", "XMessagingChangeMentionsMuteModeController", "XMessagingChangeReactionsMuteModeController", "createObjectFrom", "promiseDone", "setTimeoutAcrossTransitions", "gkx"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	var i, j = b("MessengerWebStgTypedLoggerLite").log,
		k = b("LogHistory").getInstance("mercury_server"),
		l = b("MercuryAPIArgsSource").MERCURY,
		m = 30 * 1e3;

	function n(a) {
		return a.getError() ? "_" + a.getError() : ""
	}

	function o(a, c) {
		var d = babelHelpers["extends"]({}, a),
			e;
		if (c.threads) {
			d.threads || (d.threads = {});
			for (e in c.threads) d.threads[e] = Object.keys(b("createObjectFrom")((d.threads[e] || []).concat(c.threads[e] || [])))
		}
		if (c.messages) {
			d.messages || (d.messages = {});
			for (e in c.messages) {
				d.messages[e] || (d.messages[e] = {});
				for (var f in c.messages[e]) d.messages[e][f] ? d.messages[e][f] = s(d.messages[e][f], c.messages[e][f]) : d.messages[e][f] = c.messages[e][f]
			}
		}
		d.client = a.client || c.client;
		return d
	}

	function p(a, c) {
		var d = Object.assign(b("createObjectFrom")(a.folders, !0), b("createObjectFrom")(c.folders, !0));
		a = a.client || c.client;
		return {
			folders: Object.keys(d),
			client: a
		}
	}

	function q(a, b) {
		for (var c in b)
			if (a[c] && typeof a[c] === "object") a[c] = s(a[c], b[c]);
			else if (b[c] && typeof b[c] === "object") {
			var d = {};
			Object.assign(d, b[c]);
			a[c] = d
		}
		return a
	}

	function r(a, b) {
		return b
	}

	function s(a, b) {
		var c = Math.max(a.limit, b.limit),
			d;
		!a.timestamp ? d = b.timestamp : !b.timestamp ? d = a.timestamp : d = Math.min(a.timestamp, b.timestamp);
		return {
			limit: c,
			timestamp: d
		}
	}

	function t(a, b) {
		var c = a.client || b.client;
		c = {
			ids: {},
			client: c
		};
		Object.assign(c.ids, a.ids, b.ids);
		return c
	}

	function u(a, c) {
		var d = {},
			e, f = a.client || c.client;
		delete a.client;
		delete c.client;
		for (e in a) Object.assign(d, b("createObjectFrom")(a[e], e));
		for (e in c) Object.assign(d, b("createObjectFrom")(c[e], e));
		a = {
			client: f
		};
		for (var g in d) e = d[g], a[e] || (a[e] = []), a[e].push(g);
		return a
	}

	function v(a, c) {
		var d = a.client || c.client;
		a = b("createObjectFrom")(a.ids, !0);
		c = b("createObjectFrom")(c.ids, !0);
		a = Object.assign(a, c);
		return {
			ids: Object.keys(a),
			client: d
		}
	}
	a = function () {
		function a(a) {
			var c = this;
			this.$1 = a;
			this.$2 = 0;
			this.$3 = {};
			this.$4 = {};
			this.__threadIDMap = b("MercuryThreadIDMap").getForFBID(this.$1);
			this.$5 = b("MercuryDispatcher").getForFBID(this.$1);
			this.$6 = b("MercuryServerPayloadPreprocessor").getForFBID(this.$1);
			this.$7 = new(b("MercuryServerSendMessageQueueOptions"))(function (a, b) {
				c.__handleUpdate(a, b)
			}, function (a) {
				return c.$9(a)
			}, function (a) {
				c.$10(a)
			}, function (a) {
				return c.$11(a)
			}, b("MercuryServerRequestsConfig").sendMessageTimeout, b("MessagingConfig").SEND_CONNECTION_RETRIES);
			this.$8 = b("MercurySyncDeltaHolder").getForFBID(this.$1);
			this.$12()
		}
		a.getForFBID = function (a) {
			return w.getForFBID(a)
		};
		a.get = function () {
			return w.get()
		};
		var c = a.prototype;
		c.fetchThreadlistInfo = function (a, c, d, e, f, g) {
			d === void 0 && (d = b("MessagingTag").INBOX);
			f === void 0 && (f = l);
			var h = e ? b("MercuryServerDispatcher").IMMEDIATE : null;
			f = {
				client: f
			};
			f[d] = {
				offset: a,
				limit: c,
				filter: e,
				before: g
			};
			this.__sendRequest(b("MercuryServerURIs").THREADLIST_INFO, f, h)
		};
		c.fetchUnseenThreadIDs = function (a, c) {
			a === void 0 && b("MessagingTag").INBOX, c === void 0 && (c = l), this.__sendRequest(b("XMercuryUnseenThreadIDsController").getURIBuilder().getURI().toString(), {})
		};
		c.fetchUnreadThreadIDs = function (a, c) {
			c === void 0 && (c = l), this.__sendRequest(b("MercuryServerURIs").UNREAD_THREADS, {
				folders: [a],
				client: c
			})
		};
		c.fetchThreadData = function (a, c) {
			var d = this;
			c === void 0 && (c = l);
			b("MercuryAssert").allThreadID(a);
			var e = {
					threads: {},
					client: c
				},
				f = [],
				g = [];
			a.forEach(function (a) {
				if (d.$3[a]) return;
				d.$3[a] = !0;
				var c = d.__threadIDMap.getServerIDFromClientIDNow(a);
				a = b("MercuryIDs").tokenize(a);
				if (a.type == "user") f.push(a.value), e.threads.user_ids = f;
				else if (a.type == "thread") c ? g.push(c) : g.push(a.value), e.threads.thread_fbids = g;
				else if (a.type == "root") c && (g.push(c), e.threads.thread_fbids = g);
				else if (a.type != "pending") throw new Error("Unknown thread type", a)
			});
			e.threads.user_ids && e.threads.user_ids.forEach(function (a) {
				a || (k.error("empty user id", JSON.stringify(f)), b("ChatReliabilityInstrumentation").logERROR("Invalid user ID sent to thread_info.php: " + JSON.stringify(f)))
			});
			e.threads.thread_fbids && e.threads.thread_fbids.forEach(function (c) {
				c || b("ChatReliabilityInstrumentation").logERROR("Invalid FBID sent to thread_info.php: " + JSON.stringify(a))
			});
			for (var h in e.threads) {
				this.__sendRequest(b("MercuryServerURIs").THREAD_INFO, e);
				break
			}
		};
		c.ensureThreadIsFetched = function (a, c) {
			c === void 0 && (c = l);
			if (!this.__threadIDMap.getClientIDFromServerIDNow(a) && !this.$3[a]) {
				if (!a) {
					b("ChatReliabilityInstrumentation").logERROR("Ensure invalid FBID sent to thread_info.php");
					k.error("attempting to fetch empty thread_fbid. Bad idea!");
					return
				}
				this.$3[a] = !0;
				this.__sendRequest(b("MercuryServerURIs").THREAD_INFO, {
					threads: {
						thread_fbids: [a]
					},
					client: c
				})
			}
		};
		c.fetchThreadMessages = function (a, c, d, e, f, g) {
			var h = this;
			g === void 0 && (g = l);
			b("MercuryAssert").isThreadID(a);
			var i;
			c = b("MercuryIDs").tokenize(a);
			var j = this.__threadIDMap.getServerIDFromClientIDNow(a),
				k = !1;
			if (j) j = j, i = c.type == "user" ? "user_ids" : "thread_fbids";
			else {
				j = c.value;
				switch (c.type) {
					case "user":
						i = "user_ids";
						k = !0;
						break;
					case "thread":
						i = "thread_fbids";
						break
				}
			}
			var m = {
				messages: {},
				threads: {},
				client: g
			};
			i ? (m.messages[i] = {}, m.messages[i][j] = {
				timestamp: e,
				limit: d
			}, k && (m.threads[i] = [j]), this.__sendRequest(b("MercuryServerURIs").THREAD_INFO, m, f)) : this.__threadIDMap.getServerIDFromClientID(a, function (a) {
				m.messages.thread_fbids = {}, m.messages.thread_fbids[a] = {
					timestamp: e,
					limit: d
				}, h.__sendRequest(b("MercuryServerURIs").THREAD_INFO, m, f)
			})
		};
		c.handleThreadInfoError = function (a, c) {
			var d = a.getData();
			c = [];
			if (d.messages && !b("gkx")("1738138")) {
				for (var e in d.messages.thread_fbids) {
					a = this.__threadIDMap.getClientIDFromServerIDNow(e);
					a && c.push(this.$13(a))
				}
				for (var f in d.messages.user_ids) c.push(this.$13("user:" + f));
				for (var g in d.messages.group_ids) c.push(this.$13("group:" + g))
			}
			c.length && this.$5.handleUpdate({
				actions: c,
				from_client: !0,
				payload_source: "client_channel_message"
			});
			if (d.threads && (d.threads.user_ids || d.threads.thread_fbids || d.threads.group_ids || d.threads.thread_ids)) {
				a = 5;
				c = !0;
				d.retry_count || (d.retry_count = 0, d.messages && delete d.messages);
				if (c) {
					c = Math.pow(2, Math.min(d.retry_count, a)) * 1e3;
					b("setTimeoutAcrossTransitions")(function () {
						k.log("retry_thread", "{}"), this.__sendRequest(b("MercuryServerURIs").THREAD_INFO, d)
					}.bind(this), c);
					d.retry_count++
				}
			}
		};
		c.markFolderAsRead = function (a) {
			this.__sendRequest(b("MercuryServerURIs").MARK_FOLDER_READ, {
				folder: a
			});
			a = [{
				action_type: "mga-type:mark-all-read",
				folder: a
			}];
			this.$5.handleUpdate({
				global_actions: a,
				from_client: !0,
				payload_source: "client_change_read_status"
			})
		};
		c.changeThreadReadStatus = function (a, c, d, e, f, g) {
			var h = this;
			b("MercuryAssert").isThreadID(a);
			this.__threadIDMap.getServerIDFromClientID(a, function (i) {
				var j;
				j = {
					ids: (j = {}, j[i] = c, j),
					source: d,
					watermarkTimestamp: e,
					shouldSendReadReceipt: f,
					commerce_last_message_type: g
				};
				k.log("initiate_change_read_status", JSON.stringify({
					thread_id: a,
					thread_fbid: i,
					mark_as_read: c,
					watermarkTimestamp: e
				}));
				h.__sendRequest(b("MercuryServerURIs").CHANGE_READ_STATUS, j)
			})
		};
		c.changeThreadArchivedStatus = function (a, c, d) {
			var e = this;
			b("MercuryAssert").isThreadID(a);
			this.__threadIDMap.getServerIDFromClientID(a, function (a) {
				var f = {
					ids: {},
					source: d
				};
				f.ids[a] = c;
				e.__sendRequest(b("MercuryServerURIs").CHANGE_ARCHIVED_STATUS, f)
			})
		};
		c.changeThreadPinnedStatus = function (a, c, d) {
			var e = this;
			b("MercuryAssert").isThreadID(a);
			this.__threadIDMap.getServerIDFromClientID(a, function (a) {
				var f = {
					ids: {},
					source: d
				};
				f.ids[a] = c;
				e.__sendRequest(b("MercuryServerURIs").CHANGE_PINNED_STATUS, f)
			})
		};
		c.changeThreadPageFollowUpStatus = function (a, c, d) {
			var e = this;
			b("MercuryAssert").isThreadID(a);
			this.__threadIDMap.getServerIDFromClientID(a, function (a) {
				var f = {
					ids: {},
					source: d
				};
				f.ids[a] = c;
				e.__sendRequest(b("MercuryServerURIs").CHANGE_PAGE_FOLLOW_UP_STATUS, f)
			})
		};
		c.changeThreadFolder = function (a, c) {
			var d = this;
			b("MercuryAssert").isThreadID(a);
			this.__threadIDMap.getServerIDFromClientID(a, function (a) {
				var e = {};
				e[c] = [a];
				d.__sendRequest(b("MercuryServerURIs").MOVE_THREAD, e)
			})
		};
		c.changeMutingOnThread = function (a, c) {
			var d = this;
			b("MercuryAssert").isThreadID(a);
			this.__threadIDMap.getServerIDFromClientID(a, function (a) {
				d.__sendRequest(b("MercuryServerURIs").CHANGE_MUTE_THREAD, {
					thread_fbid: a,
					mute_settings: c,
					payload_source: l
				})
			})
		};
		c.changeMentionsMutingOnThread = function (a, c) {
			var d = this;
			b("MercuryAssert").isThreadID(a);
			this.__threadIDMap.getServerIDFromClientID(a, function (a) {
				d.__sendRequest(b("XMessagingChangeMentionsMuteModeController").getURIBuilder().getURI(), {
					thread_fbid: a,
					mentions_mute_mode: c,
					payload_source: l
				})
			})
		};
		c.changeReactionsMutingOnThread = function (a, c) {
			var d = this;
			b("MercuryAssert").isThreadID(a);
			this.__threadIDMap.getServerIDFromClientID(a, function (a) {
				d.__sendRequest(b("XMessagingChangeReactionsMuteModeController").getURIBuilder().getURI(), {
					thread_fbid: a,
					reactions_mute_mode: c,
					payload_source: l
				})
			})
		};
		c.markThreadSpam = function (a, c) {
			var d = this;
			b("MercuryAssert").isThreadID(a);
			this.__threadIDMap.getServerIDFromClientID(a, function (a) {
				d.__sendRequest(b("MercuryServerURIs").MARK_SPAM, {
					id: a,
					source: c
				})
			})
		};
		c.unmarkThreadSpam = function (a, c) {
			var d = this;
			b("MercuryAssert").isThreadID(a);
			this.__threadIDMap.getServerIDFromClientID(a, function (a) {
				d.__sendRequest(b("MercuryServerURIs").UNMARK_SPAM, {
					id: a,
					source: c
				})
			})
		};
		c.deleteThread = function (a, b) {
			this.deleteThreads([a], b)
		};
		c.deleteThreads = function (a, c) {
			var d = this;
			b("promiseDone")(b("Promise").all(a.map(function (a) {
				b("MercuryAssert").isThreadID(a);
				return new(b("Promise"))(function (b) {
					return d.__threadIDMap.getServerIDFromClientID(a, b)
				})
			})).then(function (a) {
				d.__sendRequest(b("MercuryServerURIs").DELETE_THREAD, {
					ids: a,
					source: c
				})
			}))
		};
		c.deleteMessages = function (a, c) {
			b("MercuryMessageIDs.bs").getServerIDs(c || [], function (a) {
				this.__sendRequest(b("MercuryServerURIs").DELETE_MESSAGES, {
					message_ids: a
				})
			}.bind(this))
		};
		c.sendDeliveryReceipts = function (a, c) {
			b("MercuryMessageIDs.bs").getServerIDs(a || [], function (a) {
				this.__sendRequest(b("MercuryServerURIs").DELIVERY_RECEIPTS, {
					message_ids: a,
					thread_ids: c
				})
			}.bind(this))
		};
		c.sendNewMessage = function (a, c) {
			var d = this;
			c === void 0 && (c = l);
			a.offline_threading_id || b("BanzaiODS").bumpEntityKey(3303, "chat.web", "missing_otid_on_send");
			if (a.client_state && a.client_state !== b("MercuryMessageClientState").SEND_TO_SERVER) return;
			var e = b("MercuryIDs").tokenize(a.thread_id),
				f = e.type,
				g = babelHelpers["extends"]({}, a);
			g.thread_id = null;
			f == "user" ? (g.other_user_fbid = e.value, this.$14(g, c)) : f == "thread" ? (g.thread_fbid = e.value, this.$14(g, c)) : f == "root" && e.value == g.offline_threading_id ? (g.client_thread_id = a.thread_id, this.$14(g, c)) : (b("MercuryIDs").isLocalThread(a.thread_id) || h(0, 5587, a.thread_id), this.__threadIDMap.getServerIDFromClientID(a.thread_id, function (a) {
				g.thread_fbid = a, d.$14(g, c)
			}));
			this.$15("send_msg", a);
			b("Bootloader").loadModules(["QuickPerformanceLogger", "MessengerWebQuickLogModule"], function (b, c) {
				b.markerStart(c.SEND_MESSAGE, a.offline_threading_id)
			}, "MercuryServerRequests")
		};
		c.$15 = function (a, c) {
			try {
				var d = (i || (i = b("Env"))).isCQuick ? "Comet Inbox" : b("MessengerEnvironment").messengerdotcom ? "messenger_dot_com" : b("MessengerEnvironment").facebookdotcom ? "Facebook Messenger (other)" : "Other",
					e = b("MercuryTagHelper").get(c.tags || [], "entrypoint"),
					f = b("MercuryIDs").getThreadFBIDFromThreadID(c.thread_id),
					g = b("PresenceStatus").get(f) === b("AvailableListConstants").ACTIVE;
				j({
					attachment_infos: void 0,
					client_timestamp: Date.now(),
					entry_point: e,
					event_name: a,
					first_attachment_type: void 0,
					"interface": d,
					mid: c.message_id,
					offline_threading_id: c.offline_threading_id,
					other_user_fbid: b("MercuryIDs").isGroupChat(c.thread_id) ? void 0 : f,
					thread_fbid: b("MercuryIDs").isGroupChat(c.thread_id) ? f : void 0,
					extra_data: {
						pathName: b("ScriptPath").getScriptPath(),
						isActiveNow: g
					}
				})
			} catch (a) {
				b("BanzaiODS").bumpEntityKey(3303, "chat.web", "logging_error")
			}
		};
		c.$14 = function (a, c) {
			b("Arbiter").inform(b("ChannelConstants").ATTEMPT_RECONNECT), this.$4[a.message_id] = Date.now(), b("MercuryServerSendMessageQueueRouter").getForFBID(this.$1).enqueue(a.other_user_fbid || a.thread_fbid || a.client_thread_id, this.$7, c, a)
		};
		c.__getSendMessageQueueOptions = function () {
			return this.$7
		};
		c.markSeen = function () {
			var a = this.$2;
			this.__sendRequest(b("MercuryServerURIs").MARK_SEEN, {
				seen_timestamp: a
			})
		};
		c.$16 = function (a, c, d, e) {
			a = a.getData();
			a = a.message_batch || [a];
			k.debug("handle_send_message_error_common", JSON.stringify({
				reliability_error_status: d,
				request_error_status: c,
				error_data: e,
				message_list: a
			}));
			b("ChatReliabilityInstrumentation").logERROR("send_message_fail");
			var f = a.map(function (a) {
				a = {
					action_type: "ma-type:send-message",
					other_user_fbid: a.other_user_fbid,
					thread_fbid: a.thread_fbid,
					client_message_id: a.message_id,
					message_id: a.message_id,
					client_thread_id: a.client_thread_id,
					status: c,
					error_data: e
				};
				return a
			});
			f.forEach(function (a) {
				a.action_type === "ma-type:send-message" && a.status === 10 && this.__logMercurySendError(a)
			}, this);
			d = {
				actions: f,
				payload_source: "client_handle_error"
			};
			b("Bootloader").loadModules(["QuickPerformanceLogger", "MessengerWebQuickLogModule"], function (a, b) {
				f.map(function (c) {
					a.markerEnd(b.SEND_MESSAGE, "FAIL", c.client_message_id)
				})
			}, "MercuryServerRequests");
			this.$6.handleUpdate(d)
		};
		c.handleSendMessageError = function (a) {
			var c = a.getPayload(),
				d = null,
				e = null;
			c && c.error_payload ? (d = 3, e = "send_error") : (d = 10, e = "request_error" + n(a));
			c = a.error;
			c === 1404102 ? b("AsyncResponse").verboseErrorHandler(a) : (c === 1545052 || c === 1409009 || c === 1409008 || c === 1409007 || c === 1409006 || c === 1545083 || c === 1545084) && b("AsyncResponse").defaultErrorHandler(a);
			c = /<.*>/.test(a.getErrorDescription()) ? a.getErrorSummary() : a.getErrorDescription();
			this.$16(a.getRequest(), d, e, {
				type: 1,
				code: a.getError(),
				description: c,
				is_transient: a.isTransient()
			})
		};
		c.handleSendMessageTransportError = function (a) {
			this.$16(a.getRequest(), 10, "transport_error" + n(a), {
				type: 2,
				code: a.getError(),
				is_transient: !0
			})
		};
		c.handleSendMessageTimeout = function (a) {
			this.$16(a, 10, "transport_timeout", {
				type: 3,
				is_transient: !0
			})
		};
		c.getLastActionTimestamp = function () {
			return this.$2
		};
		c.__logMercurySendError = function (a) {
			b("MercurySendErrorLogger").log(a)
		};
		c.updateLastActionTimestamp = function (a) {
			var b = Date.now() - 1e3 * 60 * 60 * 24;
			a && a > b && (this.$2 = Math.max(this.$2, a))
		};
		c.markThreadFetched = function (a) {
			delete this.$3[a]
		};
		c.$13 = function (a) {
			return {
				action_type: "ma-type:log-message",
				thread_id: a,
				message_id: a,
				timestamp: Date.now(),
				is_unread: !1,
				source: "source:unknown",
				log_message_body: "",
				log_message_type: "log:error-msg",
				log_message_data: {}
			}
		};
		c.__getForAsyncRequest = function (c) {
			c = c.getData();
			c = c.request_user_id ? c.request_user_id : b("CurrentUser").getID();
			return a.getForFBID(c)
		};
		c.__handleUpdate = function (a, c) {
			a.payload_source === "server_send_message" && b("Bootloader").loadModules(["QuickPerformanceLogger", "MessengerWebQuickLogModule"], function (b, c) {
				var d = a.actions && a.actions[0] && a.actions[0].client_message_id;
				d && b.markerEnd(c.SEND_MESSAGE, "SUCCESS", d)
			}, "MercuryServerRequests"), this.__getForAsyncRequest(c).$6.handleUpdate(a)
		};
		c.$17 = function (a) {
			var b = this.__getForAsyncRequest(a);
			b.handleThreadInfoError(a)
		};
		c.$18 = function (a) {
			var b = this.__getForAsyncRequest(a);
			b.handleThreadInfoError(a, !0)
		};
		c.$9 = function (a) {
			var b = this.__getForAsyncRequest(a.getRequest());
			b.handleSendMessageError(a)
		};
		c.$10 = function (a) {
			var b = this.__getForAsyncRequest(a.getRequest());
			b.handleSendMessageTransportError(a)
		};
		c.$11 = function (a) {
			var b = this.__getForAsyncRequest(a);
			b.handleSendMessageTimeout(a)
		};
		c.$12 = function () {
			var a = this,
				c, d = null;
			b("MercuryServerRequestsConfig").msgrRegion && (d = {
				name: "X-MSGR-Region",
				value: b("MercuryServerRequestsConfig").msgrRegion
			});
			c = (c = {}, c[b("MercuryServerURIs").THREAD_INFO] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").BATCH_DEFERRED_MULTI,
				customHeader: d,
				batch_function: o,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				},
				error_handler: function (b) {
					return a.$17(b.getRequest())
				},
				timeout_handler: function (b) {
					return a.$18(b)
				},
				timeout: m
			}, c[b("MercuryServerURIs").MARK_FOLDER_READ] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: d,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").CHANGE_READ_STATUS] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: d,
				handler: function (b, c) {
					a.__handleUpdate(b, c);
					c = (b.threads || []).map(function (a) {
						return a && a.thread_id
					});
					k.log("response_change_read_status", JSON.stringify({
						threads: c
					}))
				}
			}, c[b("MercuryServerURIs").MARK_SEEN] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").BATCH_SUCCESSIVE,
				customHeader: d,
				batch_function: r,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").THREADLIST_INFO] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").BATCH_SUCCESSIVE_UNIQUE,
				customHeader: d,
				batch_function: q,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").MARK_SPAM] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: d,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").UNMARK_SPAM] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: d,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").UNREAD_THREADS] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").BATCH_SUCCESSIVE_UNIQUE,
				customHeader: d,
				batch_function: p,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").CHANGE_ARCHIVED_STATUS] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").BATCH_SUCCESSIVE,
				customHeader: d,
				batch_function: t,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").CHANGE_PINNED_STATUS] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").BATCH_SUCCESSIVE,
				customHeader: d,
				batch_function: t,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").CHANGE_PAGE_FOLLOW_UP_STATUS] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").BATCH_SUCCESSIVE,
				customHeader: d,
				batch_function: t,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").DELETE_THREAD] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").BATCH_SUCCESSIVE,
				customHeader: d,
				batch_function: v,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").DELETE_MESSAGES] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: d,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").DELIVERY_RECEIPTS] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: d,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").MOVE_THREAD] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").BATCH_SUCCESSIVE,
				customHeader: d,
				batch_function: u,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c[b("MercuryServerURIs").CHANGE_MUTE_THREAD] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: d,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			}, c);
			var e = b("XMercuryUnseenThreadIDsController").getURIBuilder().getURI().toString();
			c[e] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: d,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			};
			e = b("XMessagingChangeMentionsMuteModeController").getURIBuilder().getURI().toString();
			c[e] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: d,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			};
			e = b("XMessagingChangeReactionsMuteModeController").getURIBuilder().getURI().toString();
			c[e] = {
				request_user_id: this.$1,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: d,
				handler: function (b, c) {
					return a.__handleUpdate(b, c)
				}
			};
			b("MercuryServerDispatcher").registerEndpoints(c)
		};
		c.__sendRequest = function (a, c, d) {
			if (this.$8) switch (a) {
				case b("MercuryServerURIs").THREADLIST_INFO:
				case b("MercuryServerURIs").THREAD_INFO:
					c.cachius_min_seq_id = this.$8.getLastSeqID();
					break;
				default:
					break
			}
			b("MercuryServerDispatcher").trySend(a, c, d, this.$1)
		};
		c.__getFBID = function () {
			return this.$1
		};
		return a
	}();
	e.exports = a;
	var w = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MercuryThreadIDMap", ["KeyedCallbackManager", "MercuryAssert", "MercuryIDs", "MercurySingletonProvider"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a(a) {
			this.$1 = a, this.$2 = new(b("KeyedCallbackManager"))(), this.$3 = new(b("KeyedCallbackManager"))()
		}
		a.getForFBID = function (a) {
			return g.getForFBID(a)
		};
		a.get = function () {
			return g.get()
		};
		var c = a.prototype;
		c.setServerIDToClientID = function (a, b) {
			var c = this.getClientIDFromServerIDNow(a);
			if (c) return;
			this.forceSetServerIDToClientID(a, b)
		};
		c.forceSetServerIDToClientID = function (a, b) {
			this.$2.setResource(a, b), this.$3.setResource(b, a)
		};
		c.setDeprecatedServerIDToClientID = function (a, b) {
			a && this.$2.setResource(a, b)
		};
		c.getClientIDFromServerIDNow = function (a) {
			return this.$2.getResource(a)
		};
		c.getClientIDFromServerID = function (a, b) {
			var c = this;
			this.$2.executeOrEnqueue(a, b);
			d(["MercuryServerRequests"], function (b) {
				b.getForFBID(c.$1).ensureThreadIsFetched(a)
			})
		};
		c.getServerIDFromClientIDNow = function (a) {
			return this.$3.getResource(a)
		};
		c.getServerIDFromClientID = function (a, c) {
			var e = this;
			b("MercuryAssert").isThreadID(a);
			var f = this.$3.executeOrEnqueue(a, c);
			d(["MercuryServerRequests"], function (c) {
				var d = e.$3.getUnavailableResources(f),
					g = b("MercuryIDs").tokenize(a);
				d.length && g.type != "root" && c.getForFBID(e.$1).fetchThreadData(d)
			})
		};
		c.hasClientIDForServerID = function (a) {
			return !!this.getClientIDFromServerIDNow(a)
		};
		c.convertThreadIDIfAvailable = function (a) {
			var b = this.getClientIDFromServerIDNow(a);
			return b || a
		};
		c.canLinkExternally = function (a) {
			b("MercuryAssert").isThreadID(a);
			var c = b("MercuryIDs").tokenize(a);
			return c.type == "user" || !!this.getServerIDFromClientIDNow(a)
		};
		c.reset = function () {
			this.$3.reset(), this.$2.reset()
		};
		return a
	}();
	e.exports = a;
	var g = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MercuryLoggingHelper", [], (function (a, b, c, d, e, f) {
	a = {
		obfuscateThread: function (a) {
			var b = babelHelpers["extends"]({}, a);
			a && a.snippet && a.snippet.length > 0 && (b.snippet = "*** [redacted] ***");
			return b
		},
		obfuscateMessage: function (a) {
			var b = babelHelpers["extends"]({}, a);
			a && a.body && a.body.length > 0 && (b.body = "*** [redacted] ***");
			return b
		}
	};
	e.exports = a
}), null);
__d("MercuryServerSendMessageQueueSimulatedError", ["AsyncRequest", "AsyncResponse"], (function (a, b, c, d, e, f) {
	var g = 9999;
	a = {
		create: function (a) {
			a = new(b("AsyncRequest"))(this.endpoint_uri).setData({
				message_batch: [a],
				client: this.client
			});
			var c = new(b("AsyncResponse"))(a, {});
			Object.assign(c, {
				error: g,
				silentError: !1,
				transientError: !0,
				request: a
			});
			return c
		}
	};
	e.exports = a
}), null);
__d("MessengerAttachmentTransformerForSend.bs", ["MercuryAttachmentType", "MessengerMessageTransformer.bs", "MessengerAttachmentTransformer.bs"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a, c, d, e) {
		c = c.node;
		if (c == null) return {
			attach_type: b("MercuryAttachmentType").ERROR
		};
		else {
			if (c.__typename === "ExtensibleMessageAttachment") {
				var f = c.story_attachment,
					g = c.genie_attachment,
					h;
				if (g == null) h = null;
				else {
					g = g.genie_message;
					var i;
					if (g == null) i = null;
					else {
						g = g.story_attachment;
						i = {
							story_attachment: g == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(g)
						}
					}
					h = {
						genie_message: i
					}
				}
				g = {
					legacy_attachment_id: c.legacy_attachment_id,
					story_attachment: f == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(f),
					genie_attachment: h
				}
			} else g = null;
			i = c.__typename === "Sticker" ? c : null;
			f = c.__typename;
			var j;
			switch (f) {
				case "MessageAnimatedImage":
				case "MessageAudio":
				case "MessageFile":
				case "MessageImage":
				case "MessageVideo":
					j = [c];
					break;
				default:
					j = null
			}
			h = b("MessengerMessageTransformer.bs").unsafeCastBlobAttachments({
				blob_attachments: j
			});
			f = b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
				extensible_attachment: g,
				blob_attachments: h,
				sticker: i
			}, d, e);
			if (f.length !== 0) return f[0];
			else return {}
		}
	}

	function a(a, b, c, d) {
		return b.map(function (b) {
			return g(a, b, c, d)
		})
	}
	f._transform = g;
	f.transform = a
}), null);
__d("XMessagingSendController", ["XController"], (function (a, b, c, d, e, f) {
	e.exports = b("XController").create("/messaging/send/", {
		privacy_mutation_token: {
			type: "String"
		}
	})
}), null);
__d("MercuryServerSendMessageQueue", ["fbt", "BanzaiODS", "ChatReliabilityInstrumentation", "CurrentUser", "LogHistory", "MercuryIDs", "MercuryLoggingHelper", "MercuryServerDispatcher", "MercuryServerRequestsConfig", "MercuryServerSendMessageQueueSimulatedError", "MercurySyncDeltaHandler", "MessengerAttachmentTransformerForSend.bs", "MessengerObjectAssociationType", "MessengerState.bs", "Run", "XMessagingSendController"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("LogHistory").getInstance("mercury_server_send_message_queue");
	a = function () {
		function a(a, c, d, e) {
			var f = this;
			this.pending_message = null;
			this.queue = [];
			this.$6 = function () {
				return f.queue.length || f.pending_message ? g._("B\u1ea1n v\u1eabn ch\u01b0a g\u1eedi tin nh\u1eafn. B\u1ea1n c\u00f3 mu\u1ed1n tho\u00e1t m\u00e0 kh\u00f4ng g\u1eedi kh\u00f4ng?") : void 0
			};
			this.sender_id = a;
			this.queue_id = c;
			this.$2 = d.success_handler;
			this.$1 = d.error_handler;
			this.$4 = d.transport_error_handler;
			this.$3 = d.timeout_handler;
			this.$5 = b("MercurySyncDeltaHandler").getForFBID(this.sender_id);
			this.client = e;
			b("Run").onBeforeUnload(this.$6, !1);
			a = null;
			b("MercuryServerRequestsConfig").msgrRegion && (a = {
				name: "X-MSGR-Region",
				value: b("MercuryServerRequestsConfig").msgrRegion
			});
			c = this.__getSendURI();
			c = (e = {}, e[c] = {
				request_user_id: this.sender_id,
				endpoint_id: this.queue_id,
				mode: b("MercuryServerDispatcher").IMMEDIATE,
				customHeader: a,
				handler: this.handleSuccess.bind(this),
				error_handler: this.handleError.bind(this),
				transport_error_handler: this.handleTransportError.bind(this),
				timeout: d.timeout,
				timeout_handler: this.handleTimeout.bind(this),
				connection_retries: d.connection_retries
			}, e);
			b("MercuryServerDispatcher").registerEndpoints(c)
		}
		var c = a.prototype;
		c.__getSendURI = function () {
			return b("XMessagingSendController").getURIBuilder().getURI().toString()
		};
		c.__preparePayload = function (a) {
			var c;
			c = (c = a) != null ? (c = c.replied_to_message) != null ? (c = c.message) != null ? c.message_id : c : c : c;
			var d = null,
				e = a.client_thread_id;
			if (b("MercuryIDs").isLocalThread(e)) {
				e = b("MessengerState.bs").getThreadMetaNow(b("CurrentUser").getID(), e);
				if (e && e.message_count === 1 && e.object_association_type === b("MessengerObjectAssociationType").GENERAL_CHAT) {
					d = (e = e) != null ? (e = e.associated_object) != null ? e.id : e : e
				}
			}
			e = c ? b("MessengerState.bs").getServerMessageID(b("CurrentUser").getID(), c) : null;
			return {
				client: this.client,
				action_type: a.action_type,
				app_id: a.app_id,
				audio_ids: a.audio_ids,
				body: a.body,
				client_thread_id: a.client_thread_id,
				ephemeral_ttl_mode: a.ephemeral_ttl_mode,
				file_ids: a.file_ids,
				gif_ids: a.gif_ids,
				has_attachment: a.has_attachment,
				image_ids: a.image_ids,
				location_attachment: a.location_attachment,
				lightweight_action_attachment: a.lightweight_action_attachment,
				log_message_data: a.log_message_data,
				log_message_type: a.log_message_type,
				message_id: a.message_id,
				message_source_data: a.message_source_data,
				montage_reply_data: a.montage_reply_data,
				offline_threading_id: a.offline_threading_id,
				other_user_fbid: a.other_user_fbid,
				photo_fbids: a.photo_fbids,
				shareable_attachment: a.shareable_attachment,
				signature_id: a.signatureID,
				source: a.source,
				specific_to_list: a.specific_to_list,
				sticker_id: a.sticker_id,
				tags: a.tags,
				thread_fbid: a.thread_fbid,
				timestamp: a.timestamp,
				ui_push_phase: a.ui_push_phase,
				video_ids: a.video_ids,
				platform_xmd: a.platform_xmd,
				profile_xmd: a.profile_xmd,
				replied_to_message_id: e,
				work_synced_group_id: d,
				to_list_md5: a.to_list_md5,
				mib_direct_message_data: a.mib_direct_message_data
			}
		};
		c.enqueue = function (a) {
			this.queue.push(a), this.$7()
		};
		c.$7 = function () {
			if (this.pending_message || !this.queue.length) {
				this.pending_message && this.$8();
				return
			}
			this.pending_message = this.queue.shift();
			var a = this.__preparePayload(this.pending_message);
			for (var c in a)(a[c] === void 0 || a[c] === null) && delete a[c];
			if (!a.action_type) {
				var d = b("MercuryLoggingHelper").obfuscateMessage(a);
				b("ChatReliabilityInstrumentation").logERROR("missing action type before sending to send controller");
				h.debug("missing_action_type", JSON.stringify(d))
			}
			if (!a.message_id) {
				d = b("MercuryLoggingHelper").obfuscateMessage(a);
				b("ChatReliabilityInstrumentation").logERROR("missing action type before sending to send controller" + JSON.stringify(d));
				h.debug("missing_message_id", JSON.stringify(d))
			}
			this.$9();
			b("MercuryServerDispatcher").trySend(this.__getSendURI(), a, null, this.sender_id, this.queue_id)
		};
		c.$10 = function () {
			while (this.queue.length) this.$11(this.queue.shift())
		};
		c.$11 = function (a) {
			this.$1(b("MercuryServerSendMessageQueueSimulatedError").create(a)), h.error("mark_as_failed", JSON.stringify({
				fbid: this.sender_id,
				queue_id: this.queue_id,
				message: b("MercuryLoggingHelper").obfuscateMessage(a)
			}))
		};
		c.handleSuccess = function (a, c) {
			var d = this;
			this.pending_message = null;
			var e = (a.actions || []).map(function (a) {
				var c = babelHelpers["extends"]({}, a);
				if (a.graphql_payload && a.graphql_payload.length > 0) {
					var e = b("MessengerAttachmentTransformerForSend.bs").transform(d.sender_id, a.graphql_payload, a.message_id, a.for_page);
					c = Object.assign(c, {
						attachments: e
					})
				}
				e = (e = a) != null ? (e = e.log_message_data) != null ? e.graphql_image : e : e;
				if (e) {
					e = b("MessengerAttachmentTransformerForSend.bs").transform(d.sender_id, [e], a.message_id, a.for_page);
					c = Object.assign(c, {
						log_message_data: {
							image: e[0]
						}
					})
				}
				return c
			});
			a.actions = e;
			this.resumeAfterSuccess(a, c)
		};
		c.resumeAfterSuccess = function (a, b) {
			this.$2(a, b), this.$12(), this.$7()
		};
		c.handleError = function (a) {
			this.pending_message = null, this.$12(), this.$1(a), this.$10()
		};
		c.handleTransportError = function (a) {
			this.pending_message = null, this.$12(), this.$4(a), this.$10()
		};
		c.handleTimeout = function (a) {
			this.pending_message = null, this.$12(), this.$3(a), this.$10()
		};
		c.$9 = function () {
			this.$5.pause()
		};
		c.$12 = function () {
			this.$5.resume()
		};
		c.$8 = function () {
			h.debug("maybe_send_next_pending_message", JSON.stringify({
				fbid: this.sender_id,
				queue_id: this.queue_id,
				pending_message: b("MercuryLoggingHelper").obfuscateMessage(this.pending_message),
				queue: this.queue.map(function (a) {
					return b("MercuryLoggingHelper").obfuscateMessage(a)
				})
			}));
			var a = "send_queue.delayed.queue_length." + this.queue.length.toString();
			b("BanzaiODS").bumpEntityKey(3303, "chat.web", a)
		};
		return a
	}();
	e.exports = a
}), null);
__d("MercurySingletonMixin", ["CurrentUser"], (function (a, b, c, d, e, f) {
	a = {
		_getInstances: function () {
			this._instances || (this._instances = {});
			return this._instances
		},
		get: function () {
			return this.getForFBID(b("CurrentUser").getID())
		},
		getForFBID: function (a) {
			var b = this._getInstances();
			b[a] || (b[a] = new this(a));
			return b[a]
		}
	};
	e.exports = a
}), null);
__d("MercuryServerSendMessageQueueRouter", ["BanzaiODS", "LogHistory", "MercuryServerSendMessageQueue", "MercurySingletonMixin"], (function (a, b, c, d, e, f) {
	var g = b("LogHistory").getInstance("mercury_server_send_message_queue_router"),
		h = "chat.web.send_queue_router";
	b("BanzaiODS").setEntitySample(h, .1);
	a = function () {
		function a(a) {
			this.queues = new Map(), this.fbid = a
		}
		var c = a.prototype;
		c.enqueue = function (a, c, d, e) {
			var f = this.queues.get(a);
			f === void 0 && (f = new(b("MercuryServerSendMessageQueue"))(this.fbid, a, c, d), this.queues.set(a, f), g.debug("added queue", JSON.stringify({
				fbid: this.fbid,
				queue_id: a
			})), b("BanzaiODS").bumpEntityKey(3303, h, "new_queue"));
			f.enqueue(e)
		};
		return a
	}();
	e.exports = a;
	Object.assign(a, b("MercurySingletonMixin"))
}), null);
__d("MercurySyncDataFetcherImpl", ["invariant", "Promise", "AsyncResponse", "Bootloader", "CurrentUser", "FBIDCheck", "MercuryConfig", "MercuryThreadlistConstants", "MessagingConfig", "QE2Logger", "UserActivity", "clearTimeout", "setTimeoutAcrossTransitions"], (function (a, b, c, d, e, f, g) {
	"use strict";
	f.fetchThreadlistFromGraphQL = a;
	f.fetchThreadFromGraphQL = c;
	f.fetchMessageFromGraphQL = d;
	var h = null,
		i = null,
		j = null,
		k = {
			limit: b("MercuryThreadlistConstants").WEBMESSENGER_THREAD_COUNT + 1,
			folder: "inbox",
			tags: ["INBOX"],
			timestamp: null,
			filter: null,
			includeDeliveryReceipts: !1,
			includeSeqID: !0
		},
		l = {};

	function a(a) {
		return new(b("Promise"))(function (b, c) {
			m(a, b, c, 0)
		})
	}

	function m(a, c, d, e) {
		if (!b("CurrentUser").isLoggedInNow() || e > b("MessagingConfig").syncFetchRetries) {
			b("clearTimeout")(l[a]);
			d();
			return
		}
		var f = e === 0 ? 0 : b("MessagingConfig").syncFetchInitialTimeoutMs * Math.pow(b("MessagingConfig").syncFetchTimeoutMultiplier, e);
		b("UserActivity").isOnTab() || (b("QE2Logger").logExposureForUser("mercury_dff_fetch_delay", a), f += b("MercuryConfig").DFFD * Math.random());
		b("clearTimeout")(l[a]);
		l[a] = b("setTimeoutAcrossTransitions")(function () {
			var f = !1,
				n = function (h) {
					if (f) return;
					if (h.errors && h.errors.length > 0) {
						var k = h.errors[0].message;
						if (k) {
							var l = function () {
								j && i || g(0, 3650), new j().setErrorMessage(k).setEvent(i.DFF_FAILURE).setQueryParams(a).log()
							};
							j && i ? l() : b("Bootloader").loadModules(["MessengerWebGraphQLTypedLogger", "MessengerWebGraphQLEvent"], function (a, b) {
								j = a, i = b, l()
							}, "MercurySyncDataFetcherImpl")
						}
					}
					f = !0;
					m(a, c, d, e + 1)
				},
				o = function () {
					if (!b("CurrentUser").isLoggedInNow()) return;
					h || g(0, 3651);
					h.fetchAll(a, [k], !b("FBIDCheck").isUser_deprecated(a), "dff").then(function (d) {
						f = !0, c(new(b("AsyncResponse"))(null, babelHelpers["extends"]({}, d, {
							payload_source: "server_invalidate_global_state"
						}))), b("clearTimeout")(l[a])
					}, n)
				};
			h ? o() : b("Bootloader").loadModules(["MessengerGraphQLThreadlistFetcher.bs"], function (a) {
				h = a, o()
			}, "MercurySyncDataFetcherImpl")
		}, f)
	}

	function c(a, c, d) {
		return new(b("Promise"))(function (b, e) {
			n(a, c, d, b, e, 0)
		})
	}

	function n(a, c, d, e, f, g) {
		if (g > b("MessagingConfig").syncFetchRetries) {
			f();
			return
		}
		var h = g === 0 ? 0 : b("MessagingConfig").syncFetchInitialTimeoutMs * Math.pow(b("MessagingConfig").syncFetchTimeoutMultiplier, g);
		b("setTimeoutAcrossTransitions")(function () {
			var h = !1,
				i = function (b) {
					if (h) return;
					h = !0;
					n(a, c, d, e, f, g + 1)
				};
			b("Bootloader").loadModules(["MessengerThreadDFFFetcher.bs"], function (f) {
				return f.fetch_(a, {
					id: c,
					limit: d
				}, !b("FBIDCheck").isUser_deprecated(a)).then(function (a) {
					h = !0, e(new(b("AsyncResponse"))(null, babelHelpers["extends"]({}, a, {
						payload_source: "server_invalidate_thread_state"
					})))
				}, i)
			}, "MercurySyncDataFetcherImpl")
		}, h)
	}

	function d(a, c, d) {
		return new(b("Promise"))(function (b, e) {
			o(a, c, d, b, e, 0)
		})
	}

	function o(a, c, d, e, f, g) {
		if (g > b("MessagingConfig").syncFetchRetries) {
			f();
			return
		}
		var h = g === 0 ? 0 : b("MessagingConfig").syncFetchInitialTimeoutMs * Math.pow(b("MessagingConfig").syncFetchTimeoutMultiplier, g);
		b("setTimeoutAcrossTransitions")(function () {
			var h = !1,
				i = function (b) {
					if (h) return;
					h = !0;
					o(a, c, d, e, f, g + 1)
				};
			b("Bootloader").loadModules(["MessengerMessageDFFFetcher.bs"], function (f) {
				return f.fetch_(a, {
					thread_id: c,
					message_id: d
				}, !b("FBIDCheck").isUser_deprecated(a)).then(function (a) {
					h = !0, e(new(b("AsyncResponse"))(null, babelHelpers["extends"]({}, a)))
				}, i)
			}, "MercurySyncDataFetcherImpl")
		}, h)
	}
}), null);
__d("MercurySyncDataFetcher", ["Promise", "LogHistory", "MercurySyncDataFetcherImpl", "MessagingConfig", "WebGraphQLConfig", "clearTimeout", "promiseDone", "setTimeoutAcrossTransitions"], (function (a, b, c, d, e, f) {
	"use strict";
	f.getMaxTimeoutMs = a;
	f.fetchThreadlistFromGraphQL = c;
	f.fetchThreadFromGraphQL = d;
	f.fetchMessageFromGraphQL = e;
	var g = b("LogHistory").getInstance("mercury_sync_data_fetcher");

	function a() {
		var a = 0;
		for (var c = 0; c < b("MessagingConfig").syncFetchRetries; c++) {
			var d = c === 0 ? 0 : b("MessagingConfig").syncFetchInitialTimeoutMs * Math.pow(b("MessagingConfig").syncFetchTimeoutMultiplier, c);
			a += d + b("MessagingConfig").syncFetchRequestTimeoutMs
		}
		return a
	}
	var h = a();

	function c(a) {
		var c = null;
		return new(b("Promise"))(function (d, e) {
			var f = function (a) {
				g.error("fetch_threadlist_graphql_timeout", JSON.stringify({
					timeout: h
				})), b("clearTimeout")(c), e(a)
			};
			c = b("setTimeoutAcrossTransitions")(f, Math.max(h, b("WebGraphQLConfig").timeout * b("MessagingConfig").syncFetchRetries));
			b("promiseDone")(b("MercurySyncDataFetcherImpl").fetchThreadlistFromGraphQL(a), function (a) {
				b("clearTimeout")(c), d(a)
			}, f)
		})
	}

	function d(a, c, d) {
		return new(b("Promise"))(function (e, f) {
			var i = function (a) {
					g.error("fetch_thread_graphql_timeout", JSON.stringify({
						timeout: h
					})), f(a)
				},
				j = b("setTimeoutAcrossTransitions")(i, h);
			b("promiseDone")(b("MercurySyncDataFetcherImpl").fetchThreadFromGraphQL(a, c, d), function (a) {
				b("clearTimeout")(j), e(a)
			}, i)
		})
	}

	function e(a, c, d) {
		return new(b("Promise"))(function (e, f) {
			var i = function (a) {
					g.error("fetch_message_graphql_timeout", JSON.stringify({
						timeout: h
					})), f(a)
				},
				j = b("setTimeoutAcrossTransitions")(i, h);
			b("promiseDone")(b("MercurySyncDataFetcherImpl").fetchMessageFromGraphQL(a, c, d), function (a) {
				b("clearTimeout")(j), e(a)
			}, i)
		})
	}
}), null);
__d("MercurySyncDFFDataFetcher", ["Promise", "CurrentUser", "MercurySingletonProvider", "MercurySyncDataFetcher", "MercuryThreadIDMap", "MessengerState.bs"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a(a) {
			this.$1 = a, this.__threadIDMap = b("MercuryThreadIDMap").getForFBID(this.$1)
		}
		a.getForFBID = function (a) {
			return g.getForFBID(a)
		};
		a.get = function () {
			return g.get()
		};
		var c = a.prototype;
		c.fetchInvalidateGlobalStateForGraphQL = function () {
			return this.$1 && this.$1 !== "0" && b("CurrentUser").isLoggedIn() ? b("MercurySyncDataFetcher").fetchThreadlistFromGraphQL(this.$1) : new(b("Promise"))(function (a, b) {
				return b(!0)
			})
		};
		c.fetchInvalidateThreadState = function (a, c) {
			var d = 11,
				e = 3;
			a = a || c;
			c = this.__threadIDMap.getClientIDFromServerIDNow(a);
			if (!c) return b("Promise").resolve({
				getPayload: function () {
					return {}
				}
			});
			e = e + b("MessengerState.bs").getCurrentlyLoadedMessages(this.$1, c).length;
			return !a ? b("Promise").resolve({
				getPayload: function () {
					return {}
				}
			}) : b("MercurySyncDataFetcher").fetchThreadFromGraphQL(this.$1, a, Math.max(e, d))
		};
		c.fetchInvalidateMessage = function (a, c, d) {
			a = a || c;
			return !a ? b("Promise").resolve({
				getPayload: function () {
					return {}
				}
			}) : b("MercurySyncDataFetcher").fetchMessageFromGraphQL(this.$1, a, d)
		};
		return a
	}();
	e.exports = a;
	var g = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MercurySyncConstants", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = Object.freeze({
		ARBITER_EVENT_INVALID_STATE: "SYNC:INVALID_STATE",
		ARBITER_EVENT_INVALID_STATE_RETRY: "SYNC:INVALID_STATE_RETRY",
		ARBITER_EVENT_INVALID_STATE_RECOVER: "SYNC:INVALID_STATE_RECOVER",
		ARBITER_EVENT_INVALID_STATE_STALE: "SYNC:INVALID_STATE_STALE"
	});
	e.exports = a
}), null);
__d("MercurySyncTopicType", [], (function (a, b, c, d, e, f) {
	a = Object.freeze({
		DELTA: "delta",
		DELTAFLOW: "deltaflow",
		DELTAFLOWREJECT: "deltaflowreject"
	});
	e.exports = a
}), null);
__d("MercurySyncDeltaHandler", ["invariant", "Arbiter", "Bootloader", "ChatReliabilityInstrumentation", "CurrentUser", "LogHistory", "MercuryDelayedDispatcher", "MercuryServerPayloadPreprocessor", "MercurySingletonProvider", "MercurySyncConstants", "MercurySyncDeltaHolder", "MercurySyncDeltaTypes", "MercurySyncEventsProxy", "MercurySyncForcedFetchHandler", "MercurySyncHolesTypedLogger", "MercurySyncTopicType", "MercuryThreadIDMap", "MessengerDeltaTransformer.bs", "gkx", "onAfterLoadSafe", "performanceAbsoluteNow", "promiseDone"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("LogHistory").getInstance("mercury_sync_delta_handler"),
		j = "app_id:219994525426954";
	a = function () {
		a.getForFBID = function (a) {
			return k.getForFBID(a)
		};
		a.get = function () {
			return k.get()
		};

		function a(a) {
			var c = this;
			this.$1 = a;
			this.$2 = b("MercurySyncForcedFetchHandler").getForFBID(this.$1);
			this.__payloadPreprocessor = b("MercuryServerPayloadPreprocessor").getForFBID(this.$1);
			this.__delayedDispatcher = b("MercuryDelayedDispatcher").getForFBID(this.$1);
			this.$3 = b("MercurySyncDeltaHolder").getForFBID(this.$1);
			this.$4 = 0;
			this.$11 = b("MercuryThreadIDMap").getForFBID(this.$1);
			this.$5 = [];
			this.$10 = b("MercurySyncEventsProxy").getForFBID(this.$1);
			i.debug("constructor", JSON.stringify({
				fbid: this.$1
			}));
			b("Arbiter").subscribe(b("MercurySyncEventsProxy").Events.INIT, function (a, d) {
				i.debug("initSeqID", JSON.stringify(d));
				a = d && d.seqID;
				d = d && d.fbid;
				if (!d) return;
				if (d !== c.$1) return;
				a ? c.$3.updateLastSeqID(a) : c.$3.updateLastSeqID(0);
				c.$12();
				b("gkx")("678667") && b("onAfterLoadSafe")(function () {
					b("Bootloader").loadModules(["MessengerSyncSeqIDSanityCheck"], function (a) {
						a.getForFBID(c.$1).init()
					}, "MercurySyncDeltaHandler")
				})
			})
		}
		var c = a.prototype;
		c.$12 = function () {
			var a = this;
			i.debug("setUpSubscriptionsToRealTimeUpdates", JSON.stringify({
				fbid: this.$1
			}));
			this.$6 = b("Arbiter").subscribe(this.$10.getArbiterType(b("MercurySyncEventsProxy").Events.DELTA), function (c, d) {
				c = d && d.obj && d.obj.queue;
				if (c && c.toString() !== a.$1) return;
				c = d && d.obj && d.obj.delta;
				d = d && d.obj && d.obj.iseq;
				if (!c || !d) return;
				a.$13(d, b("MercurySyncTopicType").DELTA);
				a.$14(d, c);
				a.$3.push(d, c);
				a.$15()
			});
			this.$8 = b("Arbiter").subscribe(this.$10.getArbiterType(b("MercurySyncEventsProxy").Events.FLOW_REJECT), function (b, c) {
				b = c && c.obj && c.obj.queue;
				if (b && b.toString() !== a.$1) return;
				a.$9 && a.$16()
			});
			this.$7 = b("Arbiter").subscribe(this.$10.getArbiterType(b("MercurySyncEventsProxy").Events.FAKE_DFF), function (b, c) {
				b = c && c.obj && c.obj.queue;
				if (b && b.toString() !== a.$1) return;
				b = c && c.obj && c.obj.delta;
				if (!b) return;
				if (a.$17(b))
					if (a.$5.some(function (b) {
							return a.$17(b)
						})) return;
					else a.$5.push(b);
				else a.$5.push(b);
				a.$15()
			});
			this.$9 = !0
		};
		c.$17 = function (a) {
			return a["class"] === b("MercurySyncDeltaTypes").ForcedFetch && !a.threadKey && !a.messageId
		};
		c.$15 = function () {
			if (this.$4 > 0) return;
			if (this.$5.length > 0) {
				var a = this.$5.shift();
				this.$18(this.$3.getLastSeqID(), a);
				this.$15()
			}
			a = this.$3.peek();
			if (!a) return;
			a = a - this.$3.getLastSeqID();
			if (a === 1) {
				var b = this.$3.pop();
				if (!b) return;
				var c = b.seqID;
				b = b.delta;
				this.$18(c, b);
				this.$15()
			} else a > 1 ? this.$19() : (this.$3.pop(), this.$15())
		};
		c.$18 = function (a, c) {
			c.numNoOps && c.numNoOps > 1 ? this.$3.updateLastSeqID(a + c.numNoOps - 1) : this.$3.updateLastSeqID(a), c["class"] === b("MercurySyncDeltaTypes").ForcedFetch ? (i.debug("DFF", JSON.stringify(c)), c.threadKey !== void 0 && c.messageId === void 0 ? this.$20(a, c) : c.threadKey !== void 0 && c.messageId !== void 0 ? this.$21(a, c) : (b("ChatReliabilityInstrumentation").logDFF_DELTA_INIT(JSON.stringify(c)), this.$22(a))) : b("MessengerDeltaTransformer.bs").transform(this.$1, c)
		};
		c.$19 = function () {
			var a = JSON.stringify({
				$23: this.$3.getLastSeqID(),
				nextSeqID: this.$3.peek()
			});
			i.warn("hole", a);
			var c = this.$3.peek();
			!c && g(0, 5132);
			c = c - 1;
			b("ChatReliabilityInstrumentation").logDFF_HOLE_INIT(a);
			this.$22(c)
		};
		c.$24 = function (a, c, d, e) {
			var f = this;
			this.$4 && g(0, 5134);
			this.$4++;
			i.debug("_scheduleDataFetch:start", JSON.stringify({
				seqID: a
			}));
			b("promiseDone")(c(), function (b) {
				i.debug("_scheduleDataFetch:success", JSON.stringify({
					seqID: a
				})), f.$4--, d(a, b), f.$15()
			}, function (b) {
				i.error("_scheduleDataFetch:failure", JSON.stringify({
					seqID: a
				})), f.$4--, e(a, b), f.$15()
			})
		};
		c.emergencyDFF = function (a, b) {
			this.$22(0, a, b)
		};
		c.$22 = function (a, c, d) {
			var e = this;
			if (!b("CurrentUser").isLoggedInNow()) return;
			this.$24(void 0, function () {
				return e.$2.processGlobalDFFForGraphQL()
			}, function (a, d) {
				b("gkx")("1199098") && e.$11.reset();
				a = d.getPayload();
				e.__payloadPreprocessor.handleUpdate(a);
				a.sequence_id && (i.debug("_initiateGlobalDFF:success", JSON.stringify({
					seqID: a.sequence_id
				})), b("gkx")("678668") ? e.$3.updateLastSeqIDAndClearHistory(a.sequence_id) : e.$3.updateLastSeqID(a.sequence_id));
				b("Arbiter").inform(b("MercurySyncConstants").ARBITER_EVENT_INVALID_STATE_RECOVER);
				c && c(a.sequence_id)
			}, function (f, g) {
				i.error("_initiateGlobalDFF:failure", ""), g ? (e.$9 && e.$16(), d && d()) : (b("Arbiter").inform(b("MercurySyncConstants").ARBITER_EVENT_INVALID_STATE_RETRY), i.debug("_initiateGlobalDFF:retry", ""), e.$22(a, c, d))
			})
		};
		c.$20 = function (a, b) {
			var c = this;
			this.$24(a, function () {
				return c.$2.processThreadDFF(a, b.threadKey, b.isLazy)
			}, function (a, b) {
				c.__payloadPreprocessor.handleUpdate(b.getPayload()), c.$3.updateLastSeqID(a)
			}, function () {
				i.error("_initiateThreadDFF:failure", JSON.stringify(b));
				var d = babelHelpers["extends"]({}, b);
				delete d.threadKey;
				c.$3.updateLastSeqID(a - 1);
				c.$3.push(a, d)
			})
		};
		c.$21 = function (a, b) {
			var c = this;
			this.$24(a, function () {
				return c.$2.processMessageDFF(a, b.threadKey, b.messageId, b.isLazy)
			}, function (a, b) {
				b = b.getPayload();
				var d = b.other_user_fbid ? b.other_user_fbid : b.thread_fbid;
				b = [babelHelpers["extends"]({}, b)];
				var e = "client_channel_message";
				c.__delayedDispatcher.handleUpdateWaitForThread({
					actions: b,
					payload_source: e
				}, d);
				c.$3.updateLastSeqID(a)
			}, function () {
				i.error("_initiateMessageDFF:failure", JSON.stringify(b));
				var d = babelHelpers["extends"]({}, b);
				delete d.messageId;
				c.$3.updateLastSeqID(a - 1);
				c.$3.push(a, d)
			})
		};
		c.$13 = function (a, c) {
			var d = a - this.$3.getLastSeqID();
			if (d !== 1 && d !== 0) {
				if (!b("CurrentUser").isEmployee()) return;
				new(b("MercurySyncHolesTypedLogger"))().setSeqID(a).setDifference(d).setTopicType(c).log()
			}
		};
		c.$14 = function (a, c) {
			switch (c["class"]) {
				case b("MercurySyncDeltaTypes").NewMessage:
					var d = (h || (h = b("performanceAbsoluteNow")))();
					b("Bootloader").loadModules(["QuickPerformanceLogger", "MessengerWebQuickLogModule"], function (a, b) {
						var e = c.messageMetadata.tags;
						Array.isArray(e) && e.includes(j) && a.markerEnd(b.SEND_MESSAGE, "SUCCESS", c.messageMetadata.offlineThreadingId, d)
					}, "MercurySyncDeltaHandler");
					i.debug("message_delta", JSON.stringify({
						seqID: a,
						threadKey: c.messageMetadata.threadKey,
						messageId: c.messageMetadata.messageId
					}));
					break;
				case b("MercurySyncDeltaTypes").ReadReceipt:
					i.debug("read_receipt_delta", JSON.stringify({
						seqID: a,
						threadKey: c.threadKey,
						actionTimestampMs: c.actionTimestampMs,
						watermarkTimestampMs: c.watermarkTimestampMs
					}));
					break;
				case b("MercurySyncDeltaTypes").DeliveryReceipt:
					i.debug("delivery_receipt_delta", JSON.stringify({
						seqID: a,
						deliveredWatermarkTimestampMs: c.deliveredWatermarkTimestampMs,
						messageIds: c.messageIds
					}));
					break
			}
		};
		c.pause = function () {
			this.$4++
		};
		c.resume = function () {
			this.$4--, this.$15()
		};
		c.$16 = function (a) {
			a === void 0 && (a = !1), this.$9 = !1, b("Arbiter").unsubscribe(this.$6), b("Arbiter").unsubscribe(this.$7), b("Arbiter").unsubscribe(this.$8), a || b("Arbiter").inform(b("MercurySyncConstants").ARBITER_EVENT_INVALID_STATE)
		};
		return a
	}();
	e.exports = a;
	var k = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MercurySyncForcedFetchHandler", ["Promise", "MercurySingletonProvider", "MercurySyncDFFDataFetcher", "MercuryThreadIDMap", "MessengerState.bs"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		return {
			getPayload: function () {
				return {
					sequence_id: a
				}
			}
		}
	}
	a = function () {
		a.getForFBID = function (a) {
			return h.getForFBID(a)
		};
		a.get = function () {
			return h.get()
		};

		function a(a) {
			this.$1 = a, this.$2 = b("MercuryThreadIDMap").getForFBID(this.$1), this.$3 = b("MercurySyncDFFDataFetcher").getForFBID(this.$1)
		}
		var c = a.prototype;
		c.processMessageDFF = function (a, c, d, e) {
			if (e) {
				e = c.otherUserFbId !== void 0 ? c.otherUserFbId.toString() : c.threadFbId.toString();
				e = this.$2.getClientIDFromServerIDNow(e);
				if (e === void 0) return b("Promise").resolve(g(a));
				e = b("MessengerState.bs").getMessagesFromIDs(this.$1, [d]);
				if (e.length === 0) return b("Promise").resolve(g(a))
			}
			return this.$3.fetchInvalidateMessage(c.otherUserFbId, c.threadFbId, d)
		};
		c.processThreadDFF = function (a, c, d) {
			if (d) {
				d = c.otherUserFbId !== void 0 ? c.otherUserFbId.toString() : c.threadFbId.toString();
				d = this.$2.getClientIDFromServerIDNow(d);
				if (d === void 0) return b("Promise").resolve(g(a))
			}
			return this.$3.fetchInvalidateThreadState(c.otherUserFbId, c.threadFbId)
		};
		c.processGlobalDFFForGraphQL = function () {
			return this.$3.fetchInvalidateGlobalStateForGraphQL()
		};
		return a
	}();
	e.exports = a;
	var h = new(b("MercurySingletonProvider"))(a)
}), null);
__d("MontageDispatcher", ["ExplicitRegistrationDispatcher"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function (a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		return b
	}(b("ExplicitRegistrationDispatcher"));
	c = new a({
		strict: !1
	});
	e.exports = c
}), null);
__d("MontageActions", ["Bootloader", "CurrentUser", "MercuryServerPayloadPreprocessor", "MontageDispatcher", "WebGraphQL", "keyMirror", "promiseDone", "uniqueID"], (function (a, b, c, d, e, f) {
	"use strict";
	f.requestUpdate = a;
	f.montageThreadChanged = c;
	f.hasUpdated = d;
	f.loadMontageThreadForActor = e;
	f.deleteMontage = i;
	f.handleNewMontageDelta = j;
	f.updatePollStickerChoice = k;
	var g = b("keyMirror")({
		REQUEST_UPDATE: null,
		HAS_UPDATED: null,
		HANDLE_ACTION: null
	});
	f.Types = g;
	var h = new Set();

	function a(a) {
		b("MontageDispatcher").dispatch({
			type: g.REQUEST_UPDATE,
			threadFBID: a
		})
	}

	function c(a, c) {
		b("MontageDispatcher").dispatch({
			type: g.REQUEST_UPDATE,
			threadFBID: a
		})
	}

	function d(a) {
		b("MontageDispatcher").dispatch({
			type: g.HAS_UPDATED,
			threadFBID: a
		})
	}

	function e(a) {
		if (h.has(a)) return;
		h.add(a);
		b("Bootloader").loadModules(["MessengerMontageThreadQueryWebGraphQLQuery"], function (c) {
			c = b("WebGraphQL").exec(new c({
				id: a
			}));
			b("promiseDone")(c, function (c) {
				b("MercuryServerPayloadPreprocessor").getForFBID(b("CurrentUser").getID()).handleUpdate({
					current_montage_thread: c
				}), h["delete"](a)
			})
		}, "MontageActions")
	}

	function i(a, c) {
		b("MercuryServerPayloadPreprocessor").getForFBID(b("CurrentUser").getID()).handleUpdate({
			montage_delete_message_delta: c
		})
	}

	function j(a, c) {
		b("Bootloader").loadModules(["MessengerNewMontageMessageWebGraphQLQuery"], function (a) {
			a = b("WebGraphQL").exec(new a({
				id: c.message_fbid
			}));
			b("promiseDone")(a, function (a) {
				b("MercuryServerPayloadPreprocessor").getForFBID(b("CurrentUser").getID()).handleUpdate({
					montage_new_message_delta: a.montage_message
				})
			})
		}, "MontageActions")
	}

	function k(a) {
		b("Bootloader").loadModules(["MessengerState.bs", "MessengerMontagePollVoteMutationWebGraphQLMutation"], function (c, d) {
			b("MercuryServerPayloadPreprocessor").getForFBID(b("CurrentUser").getID()).handleUpdate({
				montage_poll_sticker_vote: [a]
			});
			c = b("WebGraphQL").exec(new d({
				input: {
					client_mutation_id: b("uniqueID")(),
					story_card_poll_id: a.pollID,
					option: a.optionVotedIndex,
					actor_id: b("CurrentUser").getID()
				}
			}));
			b("promiseDone")(c, function (a) {}, function (a) {})
		}, "MontageActions")
	}
}), null);
__d("RemovedMessageTombstoneContent", ["fbt", "CurrentUser", "GenderConst", "IntlVariations", "MercuryIDs", "MessengerParticipants.bs", "MessengerState.bs", "gkx", "immutable"], (function (a, b, c, d, e, f, g) {
	"use strict";
	f.getRemovedMessageTombstoneContent = a;
	f.getTombstoneContentForSnippet = c;
	f._getFbtForCurrentViewerAuthor = d;
	f._getFbtForOtherAuthor = e;
	f._getFbtForUnknownAuthor = h;

	function a(a, c) {
		var d;
		d = ((d = a.unsender) == null ? void 0 : d.id) || a.author;
		var e = b("MercuryIDs").getUserIDFromParticipantID(d),
			f = b("CurrentUser").getID();
		if (e === f) return this._getFbtForCurrentViewerAuthor();
		f = b("MessengerState.bs").getThreadMetaNow(f, a.thread_id);
		f = f == null ? void 0 : (f = f.custom_nickname) == null ? void 0 : f[e];
		f = f || ((e = c.get(d)) == null ? void 0 : e.short_name) || ((f = a.unsender) == null ? void 0 : f.short_name) || ((e = a.unsender) == null ? void 0 : e.name);
		e = (a = c.get(d)) == null ? void 0 : a.gender;
		if (f) return this._getFbtForOtherAuthor(f, e);
		else return this._getFbtForUnknownAuthor()
	}

	function c(a) {
		if (a == null) return this._getFbtForUnknownAuthor().toString();
		var c = b("MercuryIDs").getUserIDFromParticipantID(a);
		if (c === b("CurrentUser").getID()) return this._getFbtForCurrentViewerAuthor().toString();
		c = b("MessengerParticipants.bs").getNow(a);
		a = c && c.short_name;
		c = c && c.gender;
		if (a) return this._getFbtForOtherAuthor(a, c).toString();
		else return this._getFbtForUnknownAuthor().toString()
	}

	function d() {
		return b("gkx")("1531920") ? g._("B\u1ea1n \u0111\u00e3 thu h\u1ed3i m\u1ed9t tin nh\u1eafn") : g._("B\u1ea1n \u0111\u00e3 g\u1ee1 m\u1ed9t tin nh\u1eafn")
	}

	function e(a, c) {
		return b("gkx")("1531920") ? g._({
			"*": "{name} \u0111\u00e3 thu h\u1ed3i m\u1ed9t tin nh\u1eafn"
		}, [g._param("name", a, [1, c === b("GenderConst").FEMALE_SINGULAR ? b("IntlVariations").GENDER_FEMALE : b("IntlVariations").GENDER_MALE])]) : g._({
			"*": "{name} \u0111\u00e3 g\u1ee1 m\u1ed9t tin nh\u1eafn"
		}, [g._param("name", a, [1, c === b("GenderConst").FEMALE_SINGULAR ? b("IntlVariations").GENDER_FEMALE : b("IntlVariations").GENDER_MALE])])
	}

	function h() {
		return b("gkx")("1531920") ? g._("M\u1ed9t ng\u01b0\u1eddi li\u00ean h\u1ec7 \u0111\u00e3 thu h\u1ed3i tin nh\u1eafn") : g._("Ng\u01b0\u1eddi li\u00ean h\u1ec7 \u0111\u00e3 g\u1ee1 m\u1ed9t tin nh\u1eafn")
	}
}), null);
__d("DocumentTitle", ["Arbiter"], (function (a, b, c, d, e, f) {
	var g = 1500,
		h = null,
		i = !1,
		j = 0,
		k = [],
		l = null,
		m = document.title,
		n = 0;

	function o() {
		k.length > 0 ? !i ? (p(k[j].title), j = ++j % k.length) : q() : (clearInterval(h), h = null, q())
	}

	function p(a) {
		document.title = a, i = !0
	}

	function q() {
		r.set(l || m, !0), i = !1
	}
	var r = function () {
		function a(a) {
			this.$1 = a
		}
		a.get = function () {
			return m
		};
		a.set = function (a, c) {
			var d = a.toString();
			document.title = d;
			!c ? (m = d, l = null, b("Arbiter").inform("update_title", a)) : l = d
		};
		a.blink = function (b) {
			b = {
				title: b.toString()
			};
			k.push(b);
			h === null && (h = setInterval(o, g));
			return new a(b)
		};
		var c = a.prototype;
		c.stop = function () {
			var a = k.indexOf(this.$1);
			a >= 0 && (k.splice(a, 1), j > a ? j-- : j == a && j == k.length && (j = 0))
		};
		a.badge = function (c) {
			var d = a.get();
			d = c ? "(" + c + ") " + d : d;
			a.set(d, !0);
			b("Arbiter").inform("update_title_badge", c, "state");
			n = c
		};
		a.preserveBadgeAndSet = function (c) {
			a.set(c, !1), b("Arbiter").inform("update_title", c), a.badge(n)
		};
		return a
	}();
	e.exports = r
}), null);
__d("SoundPlayer", ["BanzaiODS", "URI", "createArrayFromMixed"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = new Map();

	function i(a) {
		var c = new(g || (g = b("URI")))(a);
		return c.getDomain() ? a : new(g || (g = b("URI")))(window.location.href).setPath(c.getPath()).toString()
	}

	function j(a) {
		a = new(g || (g = b("URI")))(a).getPath();
		if (/\.mp3$/.test(a)) return "audio/mpeg";
		return /\.og[ga]$/.test(a) ? "audio/ogg" : ""
	}
	var k = function (a, c) {
		for (var a = b("createArrayFromMixed")(a), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var f;
			if (d) {
				if (e >= a.length) break;
				f = a[e++]
			} else {
				e = a.next();
				if (e.done) break;
				f = e.value
			}
			f = f;
			if (h.has(f)) return;
			var g = document.createElement("audio");
			if (!g || !g.canPlayType || !g.canPlayType(j(f))) continue;
			g.preload = "auto";
			g.src = i(f);
			document.body && document.body.appendChild(g);
			h.set(f, g);
			(c == null ? void 0 : c.onPreload) != null && c.onPreload(g);
			return
		}
	};
	f.preload = k;
	a = function (a, c) {
		c === void 0 && (c = {});
		for (var a = b("createArrayFromMixed")(a), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var f;
			if (d) {
				if (e >= a.length) break;
				f = a[e++]
			} else {
				e = a.next();
				if (e.done) break;
				f = e.value
			}
			f = f;
			h.has(f) || k(f, c.callbacks);
			f = h.get(f);
			if (!f) continue;
			c.loop && f.setAttribute("loop", "");
			c.volume && (f.volume = c.volume);
			f = f.play();
			f != null && typeof f.then === "function" ? f.then(function (a) {
				b("BanzaiODS").bumpEntityKey(2966, "sound_player", "play.success")
			})["catch"](function (a) {
				b("BanzaiODS").bumpEntityKey(2966, "sound_player", "play.error")
			}) : b("BanzaiODS").bumpEntityKey(2966, "sound_player", "non_promise");
			return
		}
	};
	f.play = a;
	c = function (a) {
		for (var a = b("createArrayFromMixed")(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var e;
			if (c) {
				if (d >= a.length) break;
				e = a[d++]
			} else {
				d = a.next();
				if (d.done) break;
				e = d.value
			}
			e = e;
			e = h.get(e);
			if (e) {
				e.pause();
				return
			}
		}
	};
	f.pause = c;
	d = function (a) {
		for (var a = b("createArrayFromMixed")(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var e;
			if (c) {
				if (d >= a.length) break;
				e = a[d++]
			} else {
				d = a.next();
				if (d.done) break;
				e = d.value
			}
			e = e;
			var f = h.get(e);
			f && (f.pause(), f.removeAttribute("src"), f.src = i(e))
		}
	};
	f.stop = d
}), null);
__d("SecurePostMessage", ["invariant"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = "*";
	a = {
		sendMessageToSpecificOrigin: function (a, b, c, d) {
			c !== h || g(0, 21157), a.postMessage(b, c, d)
		},
		sendMessageForCurrentOrigin: function (a, b) {
			a.postMessage(b)
		},
		sendMessageAllowAnyOrigin_UNSAFE: function (a, b, c) {
			a.postMessage(b, h, c)
		}
	};
	e.exports = a
}), null);
__d("SoundSynchronizer", ["SoundPlayer", "WebStorage", "createArrayFromMixed"], (function (a, b, c, d, e, f) {
	var g, h = "fb_sounds_playing3";

	function i() {
		var a = (g || (g = b("WebStorage"))).getLocalStorage();
		if (a) try {
			a = a[h];
			if (a) {
				a = JSON.parse(a);
				if (Array.isArray(a)) return a
			}
		} catch (a) {}
		return []
	}

	function j(a) {
		var c = (g || (g = b("WebStorage"))).getLocalStorage();
		if (c) {
			var d = i();
			d.push(a);
			while (d.length > 5) d.shift();
			try {
				c[h] = JSON.stringify(d)
			} catch (a) {}
		}
	}

	function k(a) {
		return i().some(function (b) {
			return b === a
		})
	}
	a = {
		play: function (a, c, d, e) {
			a = b("createArrayFromMixed")(a);
			c = c || a[0] + Math.floor(Date.now() / 1e3);
			if (k(c)) return;
			b("SoundPlayer").play(a, {
				loop: !!d,
				callbacks: e
			});
			j(c)
		},
		isSupported: function () {
			return !!(g || (g = b("WebStorage"))).getLocalStorage()
		}
	};
	e.exports = a
}), null);
__d("SoundRPC", ["FBJSON", "SecurePostMessage", "SoundSynchronizer", "requireCond", "cr:950105"], (function (a, b, c, d, e, f) {
	f.playLocal = g;
	f.playRemote = a;
	f.supportsRPC = c;
	f._listen = d;

	function g(a, c, d, e) {
		b("SoundSynchronizer").play(a, c, d, e)
	}

	function a(a, c, d, e) {
		c = {
			name: "SoundRPC",
			data: {
				paths: c,
				sync: d,
				loop: e
			}
		};
		b("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(a, b("FBJSON").stringify(c))
	}

	function c() {
		return !!window.postMessage
	}

	function d() {
		var a = function (a) {
			if (!/\.facebook.com$/.test(a.origin)) return;
			var c = {};
			try {
				a = a.data;
				typeof a === "string" && (c = b("FBJSON").parse(a))
			} catch (a) {}
			a = c;
			c = a.name;
			a = a.data;
			c === "SoundRPC" && a != null && typeof a === "object" && g(a.paths, a.sync, a.loop)
		};
		b("cr:950105") != null ? b("cr:950105").listen(window, "message", a) : window.addEventListener("message", a)
	}
}), null);
__d("Sound", ["SoundInitialData", "SoundPlayer", "SoundRPC", "SoundSynchronizer", "URI", "UserAgent_DEPRECATED", "Visibility", "isFacebookURI"], (function (a, b, c, d, e, f) {
	f.init = a;
	f.play = c;
	f.hasPlayedSoundBefore = d;
	f.playOnlyIfImmediate = e;
	f.stop = j;
	var g, h = null,
		i = !1;

	function a(a) {}

	function c(a, c, d, e) {
		h ? b("SoundRPC").playRemote(h.contentWindow, a, c, !1) : b("SoundRPC").playLocal(a, c, d, e), i = !0
	}

	function d() {
		return i
	}

	function e(a, c, d) {
		if (!i && b("Visibility").isHidden()) return;
		this.play(a, c, d)
	}

	function j(a) {
		h || b("SoundPlayer").stop(a)
	}
	a = new(g || b("URI"))(location.href);
	a.getSubdomain() && a.getSubdomain() !== "comet" && a.getSubdomain() !== "www" && a.setSubdomain("www");
	c = a.getDomain();

	function k() {
		if (b("UserAgent_DEPRECATED").ie() < 9) return !1;
		return b("SoundInitialData").RPC_DISABLED ? !1 : b("SoundSynchronizer").isSupported() && b("SoundRPC").supportsRPC()
	}
	b("isFacebookURI")(a) && location.host !== c && k() && (h = document.createElement("iframe"), h.setAttribute("src", "//" + c + "/sound_iframe.php"), h.style.display = "none", document.body && document.body.appendChild(h))
}), null);