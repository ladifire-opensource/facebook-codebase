__d("MWChatOutgoingMessageReplyToPhotoGroup.bs", ["React", "stylex", "CometPhotoGrid.react", "CometImageCover.react", "MWChatOutgoingMessageReplyRows.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			root: {
				backgroundColor: "nred35xi"
			},
			originalRow: {
				backgroundColor: "g5ia77u1",
				position: "l9j0dhe7",
				display: "j83agx80"
			},
			responseRow: {
				position: "l9j0dhe7",
				marginTop: "hy1o8qpp"
			},
			imagesWrap: {
				width: "nf4m65g7"
			},
			originalSpacer: {
				flexShrink: "pfnyh3mw",
				flexGrow: "buofh1pr",
				flexBasis: "ir1wk9f7"
			},
			originalGutter: {
				width: "pgctjfs5",
				flexShrink: "pfnyh3mw"
			},
			image: {
				width: "k4urcfbm",
				height: "datstx6m",
				objectFit: "bixrwtb6"
			}
		};

	function a(a) {
		var c = a.pos,
			d = a.response,
			e = a.content,
			f = a.dispatch,
			j = a.hovered;
		a = a.buildSharedMediaViewerURL;
		e = e.attachments.map(function(a, c) {
			return h.jsx(b("CometImageCover.react"), {
				src: a,
				style: i.image
			}, String(c))
		});
		return h.jsxs(b("MWChatOutgoingMessageReplyRows.bs").make, {
			pos: c,
			response: d,
			dispatch: f,
			hovered: j,
			buildSharedMediaViewerURL: a,
			children: [h.jsx("div", {
				className: (g || (g = b("stylex")))(i.originalSpacer)
			}), h.jsx("div", {
				children: h.jsx(b("CometPhotoGrid.react"), {
					children: e
				}),
				className: g(i.imagesWrap)
			}), h.jsx("div", {
				className: g(i.originalGutter)
			})],
			rootStyle: i.root,
			originalRowStyle: i.originalRow,
			responseRowStyle: i.responseRow
		})
	}
	c = a;
	f.styles = i;
	f.make = c
}), null);