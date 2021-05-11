__d("MessengerAttachmentTransformer.bs", ["fbt", "bs_caml_primitive", "MercuryAttachmentType", "MessageSharedMediaIDStore.bs", "MercuryAttachmentContentType", "MessengerStoryAttachmentTransformer.bs"], (function(a, b, c, d, e, f, g) {
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
		}
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
		}
		a = b("bs_caml_primitive").caml_float_min(120, e / 2);
		c = a / (e / 2);
		return [d / 2 * c | 0, a | 0]
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
		if (!(c == null)) return b("MessageSharedMediaIDStore.bs").setMessageIDForAttachmentID(a, c)
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
		p == null || p.forEach(function(b) {
			switch (b.TAG | 0) {
				case 0:
					var c = b._0;
					o(c.legacy_attachment_id, d);
					f.push(l(c));
					return;
				case 1:
					c = b._0;
					o(c.legacy_attachment_id, d);
					f.push(k(c, a, e));
					return;
				case 2:
					f.push(j(b._0));
					return;
				case 3:
					c = b._0;
					o(c.legacy_attachment_id, d);
					f.push(i(c, a, e));
					return;
				case 4:
					f.push(h(b._0));
					return
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