__d("MWChatComposerMediaAttachmentItem.bs", ["ix", "React", "fbicon", "MWChatFile.bs", "stylex", "MWChatImage.bs", "TetraIcon.react", "TetraText.react", "CometImage.react", "CometErrorBoundary.re", "CometComposerViewState.bs", "CometPlaceholder.react", "CometLocalVideoFileThumbnailSuspense.react", "MWChatComposerRemoveMediaAttachmentItemButton.bs"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = {
			root: {
				flexGrow: "kb5gq1qc",
				flexShrink: "pfnyh3mw",
				height: "m7zwrmfr",
				marginTop: "rs0gx3tq",
				marginEnd: "tvfksri0",
				marginBottom: "dicw6rsg",
				marginStart: "hcukyx3x",
				overflowWrap: "jm1wdb64",
				position: "l9j0dhe7",
				width: "tmrshh9y"
			},
			image: {
				borderTopStartRadius: "fni8adji",
				borderTopEndRadius: "hgaippwi",
				borderBottomEndRadius: "fykbt5ly",
				borderBottomStartRadius: "ns4ygwem",
				height: "datstx6m",
				objectFit: "bixrwtb6",
				width: "k4urcfbm"
			},
			videoIndicator: {
				position: "pmk7jnqg",
				start: "kfkz5moi",
				marginStart: "fnu23jab",
				top: "rk01pc8j",
				marginTop: "gy6hb44f"
			},
			fileRoot: {
				alignItems: "bp9cbjyn",
				backgroundColor: "n1jkxfxr",
				borderTopStartRadius: "fni8adji",
				borderTopEndRadius: "hgaippwi",
				borderBottomEndRadius: "fykbt5ly",
				borderBottomStartRadius: "ns4ygwem",
				display: "j83agx80",
				flexGrow: "kb5gq1qc",
				flexShrink: "pfnyh3mw",
				height: "m7zwrmfr",
				justifyContent: "taijpn5t",
				marginTop: "rs0gx3tq",
				marginEnd: "tvfksri0",
				marginBottom: "dicw6rsg",
				marginStart: "hcukyx3x",
				overflowWrap: "jm1wdb64",
				paddingStart: "scb9dxdr",
				paddingEnd: "hv4rvrfc",
				position: "l9j0dhe7",
				width: "k5ud4834"
			}
		};

	function a(a) {
		a = a.attachment;
		var c = b("CometComposerViewState.bs").MediaAttachment.fromJS(a),
			d;
		switch (c.TAG | 0) {
			case 0:
			case 1:
				d = [c._0, c._1];
				break;
			default:
				d = [c._0, c._1]
		}
		var e = d[1],
			f = e.uploadID;
		f = f == null ? null : i.jsx(b("MWChatComposerRemoveMediaAttachmentItemButton.bs").make, {
			attachment: a
		});
		var k = i.jsxs("div", {
			children: [f, i.jsx("div", {
				children: i.jsx(b("TetraIcon.react"), {
					icon: b("fbicon")._(g("908355"), 16),
					color: "primary"
				}),
				className: (h || (h = b("stylex")))(b("MWChatFile.bs").styles.icon)
			}), i.jsx("div", {
				children: i.jsx(b("TetraText.react"), {
					type: "bodyLink3",
					numberOfLines: 2,
					children: e.name
				}),
				className: h(b("MWChatFile.bs").styles.content)
			})],
			className: h(j.fileRoot)
		});
		if (c.TAG === 4) return i.jsx("div", {});
		a = i.jsxs("div", {
			children: [f, i.jsx(b("CometImage.react"), {
				alt: e.name,
				draggable: !1,
				src: URL.createObjectURL(e),
				loading: "lazy",
				xstyle: [j.image]
			})],
			className: h(j.root)
		});
		switch (d[0]) {
			case 0:
				return a;
			case 1:
				if (e.type === "image/gif") return a;
				else return i.jsx(b("CometErrorBoundary.re").make, {
					fallback: function(a) {
						return k
					},
					children: i.jsx("div", {
						children: i.jsxs(b("CometPlaceholder.react"), {
							children: [f, i.jsx(b("CometLocalVideoFileThumbnailSuspense.react"), {
								file: e,
								height: b("MWChatImage.bs").defaultMaxHeight,
								renderer: function(a) {
									return i.jsxs("div", {
										children: [i.jsx(b("CometImage.react"), {
											alt: e.name,
											draggable: !1,
											src: a,
											loading: "lazy",
											xstyle: [j.image]
										}), i.jsx(b("CometImage.react"), {
											src: "/images/video/play_24dp.png",
											xstyle: [j.videoIndicator]
										})]
									})
								},
								width: 200
							})],
							fallback: null
						}),
						className: (h || (h = b("stylex")))(j.root)
					})
				});
			case 2:
				return k
		}
	}
	c = a;
	f.make = c
}), null);