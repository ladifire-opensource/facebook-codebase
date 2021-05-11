__d("MWChatComposerButtons.bs", ["fbt", "bs_curry", "React", "Locale", "gkx", "stylex", "CometTooltip.react", "MWChatComposerIcons.bs", "CometPressable.react", "MWChatComposerGifButton.bs", "MWChatComposerStickerButton.bs", "MWChatComposerUploadFileButton.bs"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = b("gkx")("1787594"),
		k = b("gkx")("1787595"),
		l = b("gkx")("1787596"),
		m = {
			container: {
				zIndex: "tkr6xdv7"
			},
			button: {
				position: "pmk7jnqg",
				marginStart: "kkf49tns",
				marginEnd: "cgat1ltu",
				marginBottom: "sw24d88r",
				bottom: "i09qtzwb"
			},
			buttonPressable: {
				display: "a8c37x1j",
				paddingStart: "b3onmgus",
				paddingEnd: "ph5uu5jm",
				paddingBottom: "e5nlhep0",
				paddingTop: "ecm0bbzt"
			},
			buttonHidden: {
				transform: "qpbg1qsm",
				transitionProperty: "flx89l3n",
				transitionDuration: "mb8dcdod"
			},
			uploadFileButtonHidden: {
				transitionDelay: "lbhrjshz"
			},
			stickerButtonHidden: {
				transitionDelay: "awe8hfj4"
			},
			gifButtonHidden: {
				transitionDelay: "lxbcnve3"
			},
			buttonShown: {
				transform: "g3zh7qmp",
				transitionProperty: "flx89l3n",
				transitionDuration: "mb8dcdod"
			},
			uploadFileButtonShown: {
				transitionDelay: "lbhrjshz"
			},
			stickerButtonShown: {
				transitionDelay: "tntlmw5q"
			},
			gifButtonShown: {
				transitionDelay: "chkx7lpg"
			}
		},
		n = g._("\u0110\u00ednh k\u00e8m m\u1ed9t \u1ea3nh ho\u1eb7c video"),
		o = g._("Ch\u1ecdn nh\u00e3n d\u00e1n"),
		p = g._("Ch\u1ecdn file gif");
	c = g._("T\u1ea1o cu\u1ed9c th\u0103m d\u00f2 \u00fd ki\u1ebfn");
	d = g._("Chat video trong Ph\u00f2ng h\u1ecdp m\u1eb7t");
	e = g._("G\u1eedi clip \u00e2m thanh");
	var q = g._("Ch\u1ee5p \u1ea3nh b\u1eb1ng quick cam");
	g = g._("Chia s\u1ebb v\u1ecb tr\u00ed");
	var r = b("Locale").isRTL();

	function a(a) {
		var c = a.buttonColor,
			d = a.hasPermanentToggleButton,
			e = a.fileUploadHandlerRef,
			f = a.canSendGif,
			g = a.sendGif,
			q = a.sendSticker,
			s = a.shouldHideButtons,
			t = a.logOnOpenStickerFlyout;
		a = a.logOnSelectFileForUpload;
		var u = k || !d ? 0 : 32,
			v = l ? u : u + 32 | 0,
			w = j ? v : v + 32 | 0,
			x = i.useMemo(function() {
				return {
					photoButtonStart: r ? {
						right: String(u) + "px"
					} : {
						left: String(u) + "px"
					},
					stickerButtonStart: r ? {
						right: String(v) + "px"
					} : {
						left: String(v) + "px"
					},
					gifButtonStart: r ? {
						right: String(w) + "px"
					} : {
						left: String(w) + "px"
					}
				}
			}, [u, v, w]);
		return i.jsxs("div", {
			children: [i.jsx(b("MWChatComposerUploadFileButton.bs").make, {
				button: function(a) {
					return i.jsx("div", {
						children: i.jsx(b("CometTooltip.react"), {
							tooltip: n,
							align: "middle",
							position: "above",
							children: i.jsx(b("CometPressable.react"), {
								"aria-label": n,
								"aria-hidden": s,
								testid: "composer_photo_uploader",
								onPress: function(c) {
									return b("bs_curry")._1(a, void 0)
								},
								overlayRadius: "50%",
								xstyle: function(a) {
									return [m.buttonPressable]
								},
								children: i.jsx(b("MWChatComposerIcons.bs").Photo.make, {
									size: 20,
									fill: c
								})
							})
						}),
						className: (h || (h = b("stylex")))(m.button, s || k ? m.buttonHidden : m.buttonShown, s || k ? m.uploadFileButtonHidden : m.uploadFileButtonShown),
						style: x.photoButtonStart
					})
				},
				logOnSelectFileForUpload: a,
				ref: e
			}), i.jsx(b("MWChatComposerStickerButton.bs").make, {
				button: function(a, d, e, f, g, j, k) {
					return i.jsx("div", {
						children: i.jsx(b("CometTooltip.react"), {
							tooltip: o,
							align: "middle",
							position: "above",
							children: i.jsx(b("CometPressable.react"), {
								"aria-label": o,
								"aria-hidden": s,
								ref: a,
								testid: "composer_sticker_picker",
								onPress: function(a) {
									return b("bs_curry")._1(d, void 0)
								},
								overlayRadius: "50%",
								xstyle: function(a) {
									return [m.buttonPressable]
								},
								children: i.jsx(b("MWChatComposerIcons.bs").Sticker.make, {
									size: 20,
									fill: c
								})
							})
						}),
						className: (h || (h = b("stylex")))(m.button, s || l ? m.buttonHidden : m.buttonShown, s || l ? m.stickerButtonHidden : m.stickerButtonShown),
						style: x.stickerButtonStart
					})
				},
				onStickerSelect: q,
				logOnOpenStickerFlyout: t
			}), i.jsx(b("MWChatComposerGifButton.bs").make, {
				button: function(a, d, e, g, k, l, n) {
					return i.jsx("div", {
						children: i.jsx(b("CometTooltip.react"), {
							tooltip: p,
							align: "middle",
							position: "above",
							children: i.jsx(b("CometPressable.react"), {
								"aria-label": p,
								"aria-hidden": s,
								disabled: !f,
								ref: a,
								testid: "composer_gif_picker",
								onPress: function(a) {
									return b("bs_curry")._1(d, void 0)
								},
								overlayRadius: "50%",
								xstyle: function(a) {
									return [m.buttonPressable]
								},
								children: i.jsx(b("MWChatComposerIcons.bs").Gif.make, {
									size: 20,
									fill: f ? c : void 0
								})
							})
						}),
						className: (h || (h = b("stylex")))(m.button, s || j ? m.buttonHidden : m.buttonShown, s || j ? m.gifButtonHidden : m.gifButtonShown),
						style: x.gifButtonStart
					})
				},
				onGifSelect: g
			})],
			className: (h || (h = b("stylex")))(m.container)
		})
	}
	a = a;
	f.gifButtonDisabled = j;
	f.photoButtonDisabled = k;
	f.stickerButtonDisabled = l;
	f.styles = m;
	f.uploadPhotoLabel = n;
	f.stickerLabel = o;
	f.gifLabel = p;
	f.pollLabel = c;
	f.roomLabel = d;
	f.sendAudioLabel = e;
	f.quickCamLabel = q;
	f.locationLabel = g;
	f.isRTL = r;
	f.make = a
}), null);