__d("CometUFICommentFallbackAttachment.react", ["ix", "BaseAccessibleElement_DEPRECATED.react", "BaseLink.react", "CometImage.react", "CometPlaceholder.react", "CometRelay", "CometUFICommentFallbackAttachment_attachment.graphql", "TetraTextPairing.react", "UFI2ScaleRect", "react", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i, j, k = i || b("react"),
		l = {
			attachmentContainer: {
				borderTop: "l6v480f0",
				borderEnd: "maa8sdkg",
				borderBottom: "s1tcr66n",
				borderStart: "aypy0576",
				borderTopStartRadius: "e72ty7fz",
				borderTopEndRadius: "qlfml3jp",
				borderBottomEndRadius: "inkptoze",
				borderBottomStartRadius: "qmr60zad",
				display: "j83agx80",
				flexDirection: "btwxx1t3",
				flexGrow: "buofh1pr",
				flexWrap: "owycx6da",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "l9j0dhe7"
			},
			body: {
				borderStart: "t63ysoy8",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr",
				justifyContent: "taijpn5t",
				paddingTop: "jktsbyx5",
				paddingEnd: "d1544ag0",
				paddingBottom: "osnr6wyh",
				paddingStart: "tw6a2znq",
				width: "k4urcfbm"
			},
			linkOverlay: {
				bottom: "i09qtzwb",
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4",
				":hover": {
					backgroundColor: "dwzzwef6"
				}
			},
			media: {
				display: "j83agx80",
				flexBasis: "cu69yu53",
				flexDirection: "cbu4d94t",
				flexShrink: "pfnyh3mw",
				height: "lc891dc2",
				justifyContent: "taijpn5t",
				pointerEvents: "hzruof5a",
				position: "l9j0dhe7",
				width: "aijzkk2f"
			},
			mediaImage: {
				borderBottomStartRadius: "qmr60zad",
				borderTopStartRadius: "e72ty7fz",
				verticalAlign: "j1lvzwm4"
			},
			playIcon: {
				bottom: "i09qtzwb",
				display: "pq6dq46d",
				end: "n7fi1qx3",
				height: "gvqrqva3",
				marginTop: "km676qkl",
				marginEnd: "ad2k81qe",
				marginBottom: "myj7ivm5",
				marginStart: "f9o22wc5",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4",
				width: "jokk5rks"
			},
			root: {
				marginTop: "rs0gx3tq",
				maxWidth: "d2edcug0",
				position: "l9j0dhe7",
				width: "i5up6316"
			}
		};

	function a(a) {
		var c, d, e, f;
		a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometUFICommentFallbackAttachment_attachment.graphql"), a.attachment);
		c = (c = (c = a.target) == null ? void 0 : c.url) != null ? c : a.url;
		var i = (d = a.title_with_entities) == null ? void 0 : d.text,
			m = (d = a.source) == null ? void 0 : d.text;
		d = (d = a.media) == null ? void 0 : (d = d.fallback_image) == null ? void 0 : d.uri;
		e = (e = a.media) == null ? void 0 : (e = e.fallback_image) == null ? void 0 : e.width;
		f = (f = a.media) == null ? void 0 : (f = f.fallback_image) == null ? void 0 : f.height;
		var n = null;
		if (d != null && e != null && f != null) {
			var o;
			f = b("UFI2ScaleRect").scaleToContain({
				gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero: !0,
				maxHeight: 98,
				maxWidth: 98,
				srcHeight: f,
				srcWidth: e
			});
			e = f.height;
			f = f.width;
			n = d && k.jsxs(k.Fragment, {
				children: [k.jsx(b("CometImage.react"), {
					alt: (o = (o = i) != null ? o : m) != null ? o : "",
					height: e,
					src: d,
					width: f,
					xstyle: l.mediaImage
				}), ((o = a.media) == null ? void 0 : o.is_playable) === !0 ? k.jsx("span", {
					className: (j || (j = b("stylex")))(l.playIcon),
					children: k.jsx(b("CometImage.react"), {
						src: g("40151")
					})
				}) : null]
			})
		}
		return k.jsxs("div", {
			className: (j || (j = b("stylex")))(l.root),
			"data-ft": a.tracking,
			children: [k.jsxs("div", {
				className: j(l.attachmentContainer),
				children: [n != null ? k.jsx("div", {
					className: (j || (j = b("stylex")))(l.media),
					children: n
				}) : null, k.jsxs("div", {
					className: j(l.body),
					children: [k.jsx(b("TetraTextPairing.react"), {
						body: i,
						bodyLineLimit: 2,
						level: 2,
						meta: m != null ? m.toLocaleUpperCase() : null,
						metaLocation: "above"
					}), c !== null ? k.jsx(b("BaseLink.react"), {
						href: c,
						rel: ["noopener", "nofollow"],
						target: "_blank",
						xstyle: l.linkOverlay,
						children: k.jsx(b("BaseAccessibleElement_DEPRECATED.react"), {
							children: (e = i) != null ? e : m
						})
					}) : null]
				})]
			}), k.jsx(b("CometPlaceholder.react"), {
				fallback: null,
				children: a.action_links.map(function(a, c) {
					return k.jsx(b("CometRelay").MatchContainer, {
						match: a,
						props: {
							title: (a = i) != null ? a : m
						}
					}, c)
				})
			})]
		})
	}
}), null);