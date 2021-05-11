__d("MessengerMessageTransformer.bs", ["bs_js_dict", "FBIDCheck", "getByPath", 
	"MercuryIDs", "bs_caml_format", "bs_caml_option", "CurrentUser", "bs_js_null_undefined", 
	"MercuryActionType", "MercurySourceType", "MessagingTagUtils", "StoryAttachmentStyle", 
	"MNCommerceMessageType", "MercuryLogMessageType", "MessageProfileRangeType", 
	"MessageUnsendabilityStatus.bs", "P2PPaymentLogMessageSubtype", 
	"MessagingGenericAdminTextType", "MessengerAttachmentTransformer.bs", 
	"InstantGameUpdateXMATUpdateType"], (function(a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		a = a.blob_attachments;
		var b = [];
		a == null || a.forEach(function(a) {
			if (a.__typename === "MessageImage") {
				b.push({
					TAG: 0,
					_0: {
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
					}
				});
				return
			} else if (a.__typename === "MessageAnimatedImage") {
				b.push({
					TAG: 1,
					_0: {
						attribution_app: a.attribution_app,
						attribution_metadata: a.attribution_metadata,
						filename: a.filename,
						animated_image: a.animated_image,
						legacy_attachment_id: a.legacy_attachment_id,
						preview_image: a.preview_image,
						original_dimensions: a.original_dimensions
					}
				});
				return
			} else if (a.__typename === "MessageAudio") {
				b.push({
					TAG: 2,
					_0: {
						attribution_app: a.attribution_app,
						attribution_metadata: a.attribution_metadata,
						filename: a.filename,
						playable_url: a.playable_url,
						playable_duration_in_ms: a.playable_duration_in_ms,
						is_voicemail: a.is_voicemail,
						audio_type: a.audio_type,
						url_shimhash: a.url_shimhash,
						url_skipshim: a.url_skipshim
					}
				});
				return
			} else if (a.__typename === "MessageVideo") {
				b.push({
					TAG: 3,
					_0: {
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
					}
				});
				return
			} else if (a.__typename === "MessageFile") {
				b.push({
					TAG: 4,
					_0: {
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
					}
				});
				return
			} else return
		});
		return b
	}

	function h(a, c, d) {
		var e = c.call_capture_attachments;
		if (e == null) return [];
		else return b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
			extensible_attachment: null,
			blob_attachments: g({
				blob_attachments: e.edges.map(function(a) {
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
					options: g.options.nodes.map(function(a) {
						var b = Object.assign({}, a);
						return Object.assign(b, {
							total_count: a.voters.nodes.length,
							voters: a.voters.nodes.map(function(a) {
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
		return a.map(function(a) {
			if (a === "p2p_transfer") return b("StoryAttachmentStyle").ORION;
			else if (a === "p2p_payment_request") return b("StoryAttachmentStyle").ORION_REQUEST;
			else return a
		})
	}

	function k(a) {
		var b = a.target,
			c;
		if (b == null) c = null;
		else if (b.__typename === "CrisisListing") c = {
			TAG: 0,
			_0: {
				listing_type: b.listing_type,
				listing_category: b.listing_category,
				map_image: b.map_image
			}
		};
		else if (b.__typename === "MoneyTransfer") c = {
			TAG: 1,
			_0: {
				sender: b.sender,
				receiver: b.receiver,
				transfer_id: b.transfer_id,
				bubble_view: b.bubble_view
			}
		};
		else if (b.__typename === "PeerToPeerTransfer") c = {
			TAG: 2,
			_0: {
				sender: b.sender,
				receiver_profile: b.receiver_profile,
				transaction_amount: b.transaction_amount,
				transfer_status: b.transfer_status,
				transfer_id: b.transfer_id,
				completedTime: b.completedTime,
				updatedTime: b.updatedTime,
				creationTime: b.creationTime,
				transfer_context: b.transfer_context,
				amount_fb_discount: b.amount_fb_discount,
				funds_availability: b.funds_availability,
				group_thread_fbid: b.group_thread_fbid,
				platform_item: b.platform_item,
				id: b.id,
				status_description: b.status_description,
				bubble_view: b.bubble_view,
				currency_amount: b.currency_amount,
				memo_text: b.memo_text
			}
		};
		else if (b.__typename === "PeerToPeerPaymentRequest") c = {
			TAG: 3,
			_0: {
				amount: b.amount,
				transaction_amount: b.transaction_amount,
				requester: b.requester,
				requestee: b.requestee,
				request_status: b.request_status,
				request_theme: b.request_theme,
				id: b.id,
				memo_text: b.memo_text,
				transfer: b.transfer,
				creation_time: b.creation_time,
				group_thread_fbid: b.group_thread_fbid,
				updated_time: b.updated_time,
				status_description: b.status_description,
				bubble_view: b.bubble_view,
				individual_requests: b.individual_requests
			}
		};
		else if (b.__typename === "PaymentPlatformAttachment") c = {
			TAG: 4,
			_0: {
				payment_modules_client: b.payment_modules_client,
				is_viewer_seller: b.is_viewer_seller,
				payment_snippet: b.payment_snippet,
				item_list: b.item_list,
				components: b.components,
				payment_call_to_actions: b.payment_call_to_actions,
				click_action: b.click_action,
				summary_action: b.summary_action,
				invoicer_id: b.invoicer_id,
				is_last_attachment: b.is_last_attachment,
				payment_total: b.payment_total,
				product_detail: b.product_detail,
				payment_status_icon: b.payment_status_icon,
				user_facing_payment_status: b.user_facing_payment_status,
				payment_sub_statuses: b.payment_sub_statuses,
				should_show_new_xma: b.should_show_new_xma,
				buyer_name: b.buyer_name
			}
		};
		else if (b.__typename === "MessengerRetailPromotion") c = {
			TAG: 5,
			_0: {
				message: b.message,
				call_to_actions: b.call_to_actions,
				promotion_items: b.promotion_items
			}
		};
		else if (b.__typename === "MessengerBusinessMessage") c = {
			TAG: 6,
			_0: {
				message: b.message,
				call_to_actions: b.call_to_actions,
				business_items: b.business_items
			}
		};
		else if (b.__typename === "Video") c = {
			TAG: 7,
			_0: {
				video_id: b.video_id
			}
		};
		else if (b.__typename === "PagesPlatformLeadGenInfo") c = {
			TAG: 8,
			_0: {
				field_data_list: b.field_data_list
			}
		};
		else if (b.__typename === "MessageLiveLocation") c = {
			TAG: 9,
			_0: {
				live_location_id: b.live_location_id,
				is_expired: b.is_expired,
				expiration_time: b.expiration_time,
				sender: b.sender,
				coordinate: b.coordinate,
				location_title: b.location_title,
				sender_destination: b.sender_destination,
				stop_reason: b.stop_reason
			}
		};
		else if (b.__typename === "QuickInvite") c = {
			TAG: 10,
			_0: {
				id: b.id,
				invite_sender: b.invite_sender,
				invite_recipient: b.invite_recipient
			}
		};
		else if (b.__typename === "PagesPlatformBookingMessage") c = {
			TAG: 11,
			_0: {
				id: b.id,
				page: b.page,
				message_bubble_type: b.message_bubble_type,
				user: b.user,
				ls_xma_title: b.ls_xma_title,
				ls_xma_subtitle: b.ls_xma_subtitle,
				native_component_flow_request: b.native_component_flow_request
			}
		};
		else if (b.__typename === "ServicesAppointmentAvailability") c = {
			TAG: 12,
			_0: {
				id: b.id,
				page: b.page,
				consumer: b.consumer,
				formatted_available_time_ranges: b.formatted_available_time_ranges,
				has_booking_request_created: b.has_booking_request_created
			}
		};
		else if (b.__typename === "ServicesGenericAdminText") c = {
			TAG: 13,
			_0: {
				id: b.id
			}
		};
		else if (b.__typename === "GenieMessage") c = {
			TAG: 14,
			_0: {
				genie_sender: b.genie_sender,
				story_attachment: b.story_attachment
			}
		};
		else if (b.__typename === "Event") c = {
			TAG: 15,
			_0: {
				eventID: b.eventID,
				guestStatus: b.guestStatus,
				canViewerJoin: b.canViewerJoin,
				timeString: b.timeString,
				event_place: b.event_place,
				social_context: b.social_context,
				watchStatus: b.watchStatus,
				connection_style: b.connection_style,
				canViewerWatch: b.canViewerWatch,
				profile_picture: b.profile_picture,
				name: b.name,
				start_timestamp: b.start_timestamp
			}
		};
		else if (b.__typename === "ExternalSong") c = {
			TAG: 16,
			_0: {
				application_name: b.application_name,
				artist_names: b.artist_names,
				audio_url: b.audio_url,
				duration_ms: b.duration_ms,
				music_title: b.music_title
			}
		};
		else if (b.__typename === "LightweightAction") c = {
			TAG: 17,
			_0: {
				lwa_state: b.lwa_state,
				lwa_type: b.lwa_type
			}
		};
		else if (b.__typename === "MessengerRetailItem") c = {
			TAG: 18,
			_0: {
				id: b.id,
				name: b.name,
				desc: b.desc,
				thumb_url: b.thumb_url,
				item_url: b.item_url,
				source: b.source,
				image_aspect_ratio: b.image_aspect_ratio,
				first_metaline: b.first_metaline,
				second_metaline: b.second_metaline,
				third_metaline: b.third_metaline,
				default_action: b.default_action,
				call_to_actions: b.call_to_actions
			}
		};
		else if (b.__typename === "AgentItemSuggestion") c = {
			TAG: 19,
			_0: {
				id: b.id,
				desc: b.desc,
				total_cost: b.total_cost,
				merchant_name: b.merchant_name,
				target_url: b.target_url,
				thumb_url: b.thumb_url,
				raw_amount: b.raw_amount,
				payment: b.payment,
				price_amount: b.price_amount,
				price_currency: b.price_currency,
				name: b.name
			}
		};
		else if (b.__typename === "FundraiserPersonToCharity" || b.__typename === "FundraiserPersonForPerson") {
			var d = b.fundraiser_detailed_progress_text,
				e = b.fundraiser_subtitle_text,
				f = b.focused_cover_photo;
			c = {
				TAG: 20,
				_0: {
					fundraiserID: b.id,
					canDonate: b.can_donate,
					hasViewerDonated: b.has_viewer_donated,
					fundraiserDetailedProgressText: d == null ? null : d.text,
					fundraiserSubtitleText: e == null ? null : e.text,
					focusedCoverPhoto: f == null ? null : {
						src: f.photo.image.uri,
						data: {
							height: f.photo.image.height,
							width: f.photo.image.width
						}
					}
				}
			}
		} else c = b.__typename === "MessengerRetailReceipt" ? {
			TAG: 21,
			_0: {
				account_holder_name: b.account_holder_name,
				adjustments: b.retail_adjustments,
				cancellation_url: b.cancellation_url,
				items: b.retail_items,
				merchant_name: b.merchant_name,
				messenger_commerce_bubble_type: b.bubble_type,
				order_id: b.receipt_id,
				order_time: b.order_time_for_display,
				order_url: b.receipt_url,
				payment_method: b.order_payment_method,
				receipt_id: b.id,
				recipient_name: b.recipient_name,
				shipping_cost: b.shipping_cost,
				shipping_method: b.shipping_method,
				status: b.status,
				structured_address: b.structured_address,
				subtotal: b.subtotal,
				total_cost: b.total,
				total_tax: b.tax,
				partner_logo: b.partner_log
			}
		} : b.__typename === "JobApplication" ? {
			TAG: 22,
			_0: {
				id: b.id
			}
		} : b.__typename === "GroupCommerceProductItem" ? {
			TAG: 23,
			_0: {
				group_commerce_item_description: b.group_commerce_item_description,
				group_commerce_item_seller: b.group_commerce_item_seller,
				formatted_price: b.formatted_price,
				group_commerce_item_title: b.group_commerce_item_title,
				primary_photo: b.primary_photo,
				url: b.url
			}
		} : b.__typename === "Page" ? {
			TAG: 24,
			_0: {
				address: b.address,
				top_category_name: b.top_category_name,
				cover_photo: b.cover_photo,
				location: b.location,
				name: b.name,
				overall_star_rating: b.overall_star_rating,
				id: b.id,
				price_range_description: b.price_range_description
			}
		} : b.__typename === "MessengerEventReminder" ? {
			TAG: 25,
			_0: {
				is_active: b.is_active,
				event_title: b.event_title,
				time: b.time
			}
		} : b.__typename === "FormProgressStoryAttachment" ? {
			TAG: 50,
			_0: {
				progress: b.progress,
				url: b.url
			}
		} : b.__typename === "AirlineBoardingPassCollectionMessageAttachment" ? {
			TAG: 26,
			_0: {
				tint_color: b.tint_color,
				logo: b.logo,
				flight_label: b.flight_label,
				boarding_time_label: b.boarding_time_label,
				departure_label: b.departure_label,
				passenger_names_label: b.passenger_names_label,
				passenger_seat_label: b.passenger_seat_label,
				flight_terminal_label: b.flight_terminal_label,
				flight_gate_label: b.flight_gate_label,
				view_boarding_pass_cta_label: b.view_boarding_pass_cta_label,
				boarding_passes: b.boarding_passes,
				share_cta_label: b.share_cta_label,
				message_cta_label: b.message_cta_label,
				boarding_pass_title_label: b.boarding_pass_title_label,
				boarding_pass_error_title_label: b.boarding_pass_error_title_label
			}
		} : b.__typename === "AirlineCheckInReminderMessageAttachment" ? {
			TAG: 27,
			_0: {
				pnr_number: b.pnr_number,
				tint_color: b.tint_color,
				checkin_url: b.checkin_url,
				booking_number_label: b.booking_number_label,
				flight_label: b.flight_label,
				arrival_time_label: b.arrival_time_label,
				departure_time_label: b.departure_time_label,
				checkin_cta_label: b.checkin_cta_label,
				logo: b.logo,
				flight_infos: b.flight_infos
			}
		} : b.__typename === "AirlineUpdateMessageAttachment" ? {
			TAG: 28,
			_0: {
				pnr_number: b.pnr_number,
				tint_color: b.tint_color,
				update_type: b.update_type,
				departure_time_label: b.departure_time_label,
				arrival_time_label: b.arrival_time_label,
				booking_number_label: b.booking_number_label,
				flight_gate_label: b.flight_gate_label,
				flight_label: b.flight_label,
				flight_status_label: b.flight_status_label,
				passenger_names_label: b.passenger_names_label,
				passenger_seat_label: b.passenger_seat_label,
				logo: b.logo,
				flight_info: b.flight_info,
				hightlighted_labels: b.hightlighted_labels
			}
		} : b.__typename === "AirlineItineraryMessageAttachment" ? {
			TAG: 29,
			_0: {
				confirmation_number: b.confirmation_number,
				pnr_number: b.pnr_number,
				tint_color: b.tint_color,
				formatted_total: b.formatted_total,
				itemized_price_infos: b.itemized_price_infos,
				formatted_tax: b.formatted_tax,
				formatted_base_price: b.formatted_base_price,
				passenger_infos: b.passenger_infos,
				logo: b.logo,
				aircraft_type_label: b.aircraft_type_label,
				arrival_time_label: b.arrival_time_label,
				base_price_label: b.base_price_label,
				booking_number_label: b.booking_number_label,
				cabin_type_label: b.cabin_type_label,
				departure_time_label: b.departure_time_label,
				flight_confirmation_label: b.flight_confirmation_label,
				flight_date_label: b.flight_date_label,
				flight_label: b.flight_label,
				flight_terminal_label: b.flight_terminal_label,
				itinerary_error_title_label: b.itinerary_error_title_label,
				itinerary_title_label: b.itinerary_title_label,
				passenger_name_label: b.passenger_name_label,
				passenger_names_label: b.passenger_names_label,
				passenger_seat_label: b.passenger_seat_label,
				purchase_summary_label: b.purchase_summary_label,
				taxes_label: b.taxes_label,
				total_label: b.total_label,
				view_details_cta_label: b.view_details_cta_label,
				itinerary_legs: b.itinerary_legs
			}
		} : b.__typename === "MessengerRetailShipmentTrackingEvent" ? {
			TAG: 30,
			_0: {
				id: b.id,
				shipment: b.shipment,
				tracking_event_time_for_display: b.tracking_event_time_for_display,
				shipment_tracking_event_type: b.shipment_tracking_event_type,
				messenger_commerce_location: b.messenger_commerce_location,
				tracking_event_description: b.tracking_event_description,
				bubble_type: b.bubble_type
			}
		} : b.__typename === "MessengerRetailShipment" ? {
			TAG: 31,
			_0: {
				id: b.id,
				tracking_number: b.tracking_number,
				shipdate_for_display: b.shipdate_for_display,
				estimated_delivery_time_for_display: b.estimated_delivery_time_for_display,
				commerce_origin: b.commerce_origin,
				commerce_destination: b.commerce_destination,
				retail_carrier: b.retail_carrier,
				shipment_tracking_events: b.shipment_tracking_events,
				receipt: b.receipt,
				recipient: b.recipient,
				retail_shipment_items: b.retail_shipment_items,
				bubble_type: b.bubble_type
			}
		} : b.__typename === "EventAttendanceConfirmation" ? {
			TAG: 33,
			_0: {
				id: b.id,
				num_guests: b.num_guests,
				attendee_answers: b.attendee_answers,
				event: b.event
			}
		} : b.__typename === "LeadGenDeepLinkData" ? {
			TAG: 32,
			_0: {
				id: b.id,
				cover_image: b.cover_image,
				headline: b.headline,
				name: b.name,
				page: b.page
			}
		} : b.__typename === "UserLeadGenInfo" ? {
			TAG: 34,
			_0: {
				id: b.id,
				field_data: b.field_data
			}
		} : b.__typename === "WECMessageAudio" ? {
			TAG: 38,
			_0: {
				id: b.id,
				filename: b.filename,
				playable_url: b.playable_url,
				url_shimhash: b.url_shimhash,
				filesize: b.filesize,
				extension: b.extension,
				duration: b.duration
			}
		} : b.__typename === "IceBreakerMessageAttachment" ? {
			TAG: 35,
			_0: {
				ice_breaker_title: b.ice_breaker_title,
				ice_breaker_messages: b.ice_breaker_messages,
				ad_id: b.ad_id
			}
		} : b.__typename === "WECMessage" ? {
			TAG: 36,
			_0: {
				sender_wec_number: b.sender_wec_number,
				sender_wec_number_formated: b.sender_wec_number_formated,
				sender_wec_number_fbid: b.sender_wec_number_fbid,
				sender_wec_name: b.sender_wec_name
			}
		} : b.__typename === "WECMessageImage" ? {
			TAG: 37,
			_0: {
				id: b.id,
				extension: b.extension,
				preview: b.preview,
				large_preview: b.large_preview
			}
		} : b.__typename === "WECMessageFile" ? {
			TAG: 39,
			_0: {
				id: b.id,
				name: b.name,
				is_malicious: b.is_malicious,
				uri: b.uri,
				extension: b.extension,
				filesize: b.filesize
			}
		} : b.__typename === "WECMessageVideo" ? {
			TAG: 40,
			_0: {
				id: b.id,
				playable_url: b.playable_url,
				url_shimhash: b.url_shimhash,
				filesize: b.filesize,
				extension: b.extension,
				filename: b.filename,
				height: b.height,
				width: b.width
			}
		} : b.__typename === "MontageDirect" ? {
			TAG: 41,
			_0: {
				message_state: b.message_state,
				is_keep_disabled: b.is_keep_disabled,
				blob_media_type: b.blob_media_type,
				blob_media: b.blob_media,
				image: b.image
			}
		} : b.__typename === "MBirthdayReminderAttachment" ? {
			TAG: 42,
			_0: {
				friend_id: b.friend_id,
				confidence: b.confidence,
				birthday_date: b.birthday_date
			}
		} : b.__typename === "MPersonalRemindersList" ? {
			TAG: 43,
			_0: {
				has_more_upcoming_reminders: b.has_more_upcoming_reminders,
				personal_reminders: b.personal_reminders
			}
		} : b.__typename === "MentorshipMessengerCurriculumStep" ? {
			TAG: 44,
			_0: {
				id: b.id,
				module_name: b.module_name,
				mentorship_program: b.mentorship_program,
				program_name: b.program_name,
				curriculum_message: b.curriculum_message,
				prompt: b.prompt,
				step_count: b.step_count,
				total_steps: b.total_steps
			}
		} : b.__typename === "MentorshipMessengerDiscussionTopicSet" ? {
			TAG: 45,
			_0: {
				id: b.id,
				topics: b.topics
			}
		} : b.__typename === "MentorshipMessengerLeavePrompt" ? {
			TAG: 46,
			_0: {
				mentorship_program: b.mentorship_program,
				id: b.id,
				xma_type: b.xma_type
			}
		} : b.__typename === "MentorshipMessengerReminder" ? {
			TAG: 47,
			_0: {
				id: b.id,
				xma_type: b.xma_type
			}
		} : b.__typename === "MentorshipMessengerSurvey" ? {
			TAG: 48,
			_0: {
				id: b.id,
				xma_type: b.xma_type,
				xma_title: b.xma_title,
				xma_disclaimer: b.xma_disclaimer,
				mentorship_program: b.mentorship_program
			}
		} : b.__typename === "MentorshipMessengerProgressTracker" ? {
			TAG: 49,
			_0: {
				id: b.id,
				xma_type: b.xma_type,
				xma_title: b.xma_title,
				xma_body: b.xma_body
			}
		} : b.__typename === "Story" ? {
			TAG: 51,
			_0: {
				title: b.title,
				message_richtext: b.message_richtext,
				feedback: b.feedback,
				reaction_count_reduced: b.reaction_count_reduced,
				top_reactions: b.top_reactions,
				post_id: b.post_id,
				creation_time: b.creation_time,
				description: b.description,
				actors: b.actors,
				to: b.to,
				attachments: b.attachments,
				attached_story: b.attached_story
			}
		} : b.__typename === "User" ? {
			TAG: 52,
			_0: {
				type: b.__typename,
				id: b.id,
				name: b.name,
				profile_picture: b.profile_picture,
				cover_photo: b.cover_photo,
				work_info: b.work_info,
				subscribe_status: b.subscribe_status
			}
		} : b.__typename === "Group" ? {
			TAG: 53,
			_0: {
				type: b.__typename,
				id: b.id,
				name: b.name,
				cover_photo: b.cover_photo,
				visibility: b.visibility,
				visibility_sentence: b.visibility_sentence,
				viewer_join_state: b.viewer_join_state,
				group_general_chat: b.group_general_chat,
				work_groups_sync_metadata: b.work_groups_sync_metadata
			}
		} : b.__typename === "AppContent" ? {
			TAG: 54,
			_0: {
				type: b.__typename,
				id: b.id,
				attachment_type_name: b.attachment_type_name,
				privacy_status: b.privacy_status,
				file_type_category: b.file_type_category,
				app_integration: b.app_integration,
				attachment_icon: b.app_integration,
				content_uri: b.content_uri,
				link_preview_additional_data: b.link_preview_additional_data
			}
		} : b.__typename === "OneVCMeetingPublic" ? {
			TAG: 55,
			_0: {
				type: b.__typename,
				subject: b.subject,
				joinable_link: b.joinable_link
			}
		} : b.__typename === "OfferItem" ? {
			TAG: 56,
			_0: {
				type: b.__typename,
				id: b.id
			}
		} : b.__typename === "CommerceProductItemShare" ? {
			TAG: 57,
			_0: {
				type: b.__typename,
				default_action: b.default_action
			}
		} : b.__typename === "ApplicationReferralXMA" ? {
			TAG: 58,
			_0: {
				type: b.__typename,
				id: b.id,
				referral_offer_link: b.referral_offer_link
			}
		} : b.__typename === "PostPurchaseOrderUpdateXma" ? {
			TAG: 59,
			_0: {
				type: b.__typename,
				order_progress: b.order_progress
			}
		} : b.__typename === "InThreadMultiphotoItemCTAData" ? {
			TAG: 60,
			_0: {
				type: b.__typename,
				action_prefill: b.action_prefill,
				ad_id: b.ad_id,
				cta_title: b.cta_title,
				customer_id: b.customer_id,
				index: b.index,
				page_id: b.page_id,
				reply_image_uri: b.reply_image_uri
			}
		} : null;
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
			target: c
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
		a = a.subattachments.map(k);
		return Object.assign({
			subattachments: a
		}, b)
	}

	function m(a) {
		a = a.message;
		if (a == null) return [];
		var c = [];
		a.ranges.forEach(function(a) {
			var d = a.entity;
			if (d == null) return;
			var e = d.id,
				f = d.thread_key;
			if (e == null) {
				if (f == null) return;
				f = f.thread_fbid;
				if (f == null) return;
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
				return
			}
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
			})
		});
		return c
	}

	function n(a, c, d, e) {
		var f = {};
		c.message_reactions.forEach(function(a) {
			f[a.user.id] = a.reaction
		});
		var j = b("FBIDCheck").isUser_deprecated(c.message_sender.id),
			k = j ? b("MessagingTagUtils").getSourceFromTags(c.tags_list) : b("MercurySourceType").UNKNOWN;
		j = j ? b("MessagingTagUtils").getSourceTags(c.tags_list, k) : [];
		var o = c.message_id,
			p = d.thread_id,
			q = d.thread_fbid,
			r = d.other_user_fbid;
		r = p == null ? q == null ? r == null ? null : b("MercuryIDs").getThreadIDFromUserID(r) : b("MercuryIDs").getThreadIDFromThreadFBID(q) : p;
		q = c.tags_list.some(function(a) {
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
			is_one_way_sent: c.tags_list.some(function(a) {
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
				meta_ranges: c.meta_ranges.map(function(a) {
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
					added_participants: u == null ? [] : u.map(function(a) {
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
					removed_participants: w == null ? [] : w.map(function(a) {
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