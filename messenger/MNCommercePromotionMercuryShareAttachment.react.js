__d("MNCommercePromotionMercuryShareAttachment.react", ["Banzai", "MercuryFallbackShareAttachment.react", "MercuryIDs", "MercuryShareAttachmentReactShape", "MercuryShareAttachmentRenderLocations", "MessengerPlatformGenericItemMercuryAttachment.react", "MessengerPlayGameCallToActionHelper", "MNPlatformMessageUserEngagementTypedLogger", "React", "prop-types"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function h(a) {
		if (a !== void 0) {
			a = a.match(/\d+/);
			if (a !== void 0 && a !== null) return a[0]
		}
		return null
	}

	function i(a, c) {
		var d = h(a.props.pageID),
			e = a.getRetailItem(a.props.attachment.target);
		e = e && e.id;
		if (a.props.mnMessageType == "content_subscription") switch (c) {
			case "mn_platform_msg_imp":
				b("Banzai").post("mn_platform_message_imp_setsuna", {
					page_id: d,
					item_id: e
				});
				break;
			case "mn_platform_msg_click":
				b("Banzai").post("mn_platform_message_click_setsuna", {
					page_id: d,
					item_id: e
				});
				break;
			default:
				break
		}
		new(b("MNPlatformMessageUserEngagementTypedLogger"))().setPageID(d).setMessageID(a.props.messageID).setCommerceItemID(e).setName(c).log()
	}
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.componentDidMount = function () {
			i(this, "mn_platform_msg_imp")
		};
		d.render = function () {
			var a = this.props.attachment && this.props.attachment.target;
			if (!a) return g.jsx(b("MercuryFallbackShareAttachment.react"), babelHelpers["extends"]({}, this.props));
			var c = this.props.attachment && this.props.attachment.uri,
				d = this.props.attachment && this.props.attachment.label,
				e = this.$1(),
				f = this.getRetailItem(a),
				h;
			f && f.call_to_actions && f.call_to_actions.length > 0 ? h = f.call_to_actions : h = a.call_to_actions;
			a = (a = this.props) != null ? (a = a.attachment) != null ? (a = a.messaging_attribution) != null ? a.attribution_type : a : a : a;
			var i = null;
			if (a === "GAME") {
				var j, k;
				a = ((a = this.props) != null ? (a = a.attachment) != null ? (a = a.messaging_attribution) != null ? a.name : a : a : a) || null;
				k = ((k = this.props) != null ? (k = k.attachment) != null ? (k = k.messaging_attribution) != null ? k.icon_url : k : k : k) || null;
				j = ((j = this.props) != null ? (j = j.attachment) != null ? (j = j.target) != null ? (j = j.items) != null ? j[0] : j : j : j : j) || {};
				j = ((j = j) != null ? (j = j.call_to_actions) != null ? j[0] : j : j) || {};
				j = (j = j) != null ? j.action_link : j;
				var l = null;
				if (j) {
					var m, n;
					l = b("MessengerPlayGameCallToActionHelper").parseActionLink(j);
					j = ((j = l) != null ? j.contextSourceID : j) || null;
					n = ((n = l) != null ? n.contextType : n) || null;
					m = ((m = l) != null ? m.gameID : m) || null;
					n || (n = "THREAD", j = b("MercuryIDs").getThreadFBIDFromThreadID(this.props.threadID));
					l = (l = l) != null ? l.payload : l;
					i = a && k && m && j ? {
						gameName: String(a),
						gameUrl: String(k),
						source: "custom_update_xma",
						gameID: String(m),
						contextSourceID: String(j),
						contextType: String(n),
						payload: l
					} : null
				}
			}
			return g.jsx(b("MessengerPlatformGenericItemMercuryAttachment.react"), {
				callToActions: this.$2(h),
				isMediaAttachment: this.$3(),
				isSponsored: this.props.isSponsored,
				isSubattachment: this.props.isSubattachment,
				itemID: f && f.id,
				label: d,
				location: this.props.location,
				longestCTAs: this.props.longestCTAs,
				longestMetaline: this.props.longestMetaline,
				longestName: this.props.longestName,
				messageID: this.props.messageID,
				mnMessageType: this.props.mnMessageType,
				pageID: this.props.pageID,
				threadID: this.props.threadID,
				retailItem: f,
				url: c,
				width: this.props.maxWidth,
				isButtonList: e,
				gameInfo: i
			})
		};
		d.$2 = function (a) {
			a = a || [];
			a = a.map(function (a) {
				var b = a.action_link && (a.action_link.startsWith("fb-messenger://payments/buy/mc?") || a.action_link.startsWith("fb-messenger://business/commerce/")),
					c = a.action_link && a.action_link.startsWith("https://www.facebook.com/commerce/messenger_monetization/messenger_buyer_info_form/");
				if (b) return null;
				else if (c && a.is_disabled) {
					b = a;
					b.is_disabled = !1;
					return b
				} else return a
			});
			return a.filter(function (a) {
				return a
			})
		};
		d.$1 = function () {
			var a = this.props.attachment;
			a = a && a.style_list;
			return a && a.length && a[0] === "messenger_platform_button_list" ? !0 : !1
		};
		d.$3 = function () {
			var a = this.props.attachment;
			a = a && a.style_list;
			return a && a.length && a[0] === "messenger_platform_media_attachment" ? !0 : !1
		};
		d.getRetailItem = function (a) {
			var b = this.$1();
			if (b) return a;
			if (a && a.items)
				if (a.items.length) return a.items[0];
				else return null;
			return a
		};
		return c
	}(g.Component);
	e.exports = a;
	a.propTypes = {
		attachment: b("MercuryShareAttachmentReactShape"),
		isSponsored: (c = b("prop-types")).bool,
		isSubattachment: c.bool,
		location: c.oneOf(b("MercuryShareAttachmentRenderLocations").getValues()),
		maxWidth: c.number,
		messageID: c.string,
		mnMessageType: c.string,
		pageID: c.string,
		threadID: c.string,
		longestCTAs: c.number,
		longestMetaline: c.string,
		longestName: c.string
	}
}), null);