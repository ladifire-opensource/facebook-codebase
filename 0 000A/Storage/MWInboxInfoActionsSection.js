__d("MWInboxInfoActionsSection.bs", ["fbt", "LSBitOffset.bs", "LSThreadCapabilityBitOffset.bs", "MWInboxInfoEditEmoji.bs", "MWInboxInfoEditNicknames.bs", "MWInboxInfoEditPhoto.bs", "MWInboxInfoEditTheme.bs", "MWInboxInfoEditThreadName.bs", "MWInboxInfoSearchInConversation.bs", "MWInboxPersistedUIState.bs", "MWListCell.bs", "React", "TetraListCell.react", "bs_curry", "gkx"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");

	function a(a) {
		var c, d = a.thread,
			e = a.threadCapabilities;
		a = a.toggleSearch;
		var f = b("MWInboxPersistedUIState.bs").useHook(!1, "__MWInboxInfoActionsSection.isOpen__"),
			i = f[1],
			j = f[0],
			k = (f = b("LSBitOffset.bs")).has((c = b("LSThreadCapabilityBitOffset.bs")).threadNameCustomization, e),
			l = f.has(c.threadPhotoCustomization, e),
			m = f.has(c.colorCustomization, e),
			n = f.has(c.emojiCustomization, e),
			o = b("gkx")("1846003");
		f = f.has(c.nicknames, e);
		c = b("gkx")("1848989") && b("LSBitOffset.bs").has(b("LSThreadCapabilityBitOffset.bs").searchInConversation, e);
		e = h.jsxs(h.Fragment, {
			children: [k ? h.jsx(b("MWInboxInfoEditThreadName.bs").make, {
				thread: d
			}) : null, l ? h.jsx(b("MWInboxInfoEditPhoto.bs").make, {
				thread: d
			}) : null, m ? h.jsx(b("MWInboxInfoEditTheme.bs").make, {}) : null, n ? h.jsx(b("MWInboxInfoEditEmoji.bs").make, {
				thread: d
			}) : null, f && o ? h.jsx(b("MWInboxInfoEditNicknames.bs").make, {
				thread: d
			}) : null, c ? h.jsx(b("MWInboxInfoSearchInConversation.bs").make, {
				toggleSearch: a
			}) : null]
		});
		k = h.Children.toArray(e).some(function(a) {
			return a !== null
		});
		if (k) return h.jsx(b("TetraListCell.react"), {
			headline: g._("T\u00f9y ch\u1ec9nh \u0111o\u1ea1n chat"),
			addOnSecondary: b("MWListCell.bs").SecondaryAddOn.expander({
				children: e,
				open: j,
				type: "expander"
			}),
			emphasized: !0,
			level: 4,
			onPress: function(a) {
				return b("bs_curry")._1(i, function(a) {
					return !j
				})
			},
			testid: "mw_inbox_customize_chat_button"
		});
		else return null
	}
	c = a;
	f.make = c
}), null);