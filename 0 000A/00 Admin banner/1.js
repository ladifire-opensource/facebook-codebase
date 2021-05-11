__d("PagesCometAdminPublishBanner.react", ["fbt", "ix", "BaseRow.react", "BaseRowItem.react", 
	"BaseStickyHeader.react", "CometErrorBoundary.react", "CometRelay", "CometTheme.react", 
	"PagesCometAdminPublishBanner_renderer.graphql", "PagesCometAdminPublishPageMutation", 
	"TetraButton.react", "TetraIcon.react", "TetraText.react", "fbicon", "react", 
	"recoverableViolation", "stylex"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j, k, l = j || b("react"),
		m = {
			description: {
				alignItems: "bp9cbjyn",
				display: "j83agx80"
			},
			icon: {
				marginEnd: "tvfksri0",
				marginStart: "h676nmdw"
			},
			root: {
				backgroundColor: "d6rk862h",
				end: "n7fi1qx3",
				paddingBottom: "f10w8fjw",
				paddingEnd: "hv4rvrfc",
				paddingStart: "dati1w0a",
				paddingTop: "pybr56ya",
				position: "l9j0dhe7",
				start: "j9ispegn"
			},
			stickyHeader: {
				zIndex: "kavbgo14"
			}
		};

	function a(a) {
		var c;
		a = a.renderer;
		a = b("CometRelay").useFragment(i !== void 0 ? i : i = b("PagesCometAdminPublishBanner_renderer.graphql"), a);
		var d = b("CometRelay").useRelayEnvironment();
		c = ((c = a.page) == null ? void 0 : c.can_viewer_administer) === !0;
		var e = (a = a.page) == null ? void 0 : a.id;
		if (e == null) return b("recoverableViolation")("page id should not be null", "pages_consumer_experience_www");
		a = function() {
			b("PagesCometAdminPublishPageMutation").pagesAdminPublishPageMutationAction(d, e, "PUBLISHED")
		};
		return l.jsx(b("CometErrorBoundary.react"), {
			children: l.jsx(b("BaseStickyHeader.react"), {
				xstyle: m.stickyHeader,
				children: l.jsxs(b("BaseRow.react"), {
					xstyle: m.root,
					children: [l.jsx(b("BaseRowItem.react"), {
						expanding: !0,
						verticalAlign: "center",
						children: l.jsxs("div", {
							className: (k || (k = b("stylex")))(m.description),
							children: [l.jsx("div", {
								className: k(m.icon),
								children: l.jsx(b("TetraIcon.react"), {
									color: "white",
									icon: b("fbicon")._(h("511436"), 24)
								})
							}), l.jsxs(b("TetraText.react"), {
								color: "white",
								type: "body3",
								children: [l.jsx(b("TetraText.react"), {
									color: "white",
									type: "bodyLink3",
									children: g._("Trang n\u00e0y ch\u01b0a hi\u1ec3n th\u1ecb.")
								}), " ", c ? g._("B\u1ea1n c\u00f3 th\u1ec3 \u0111\u0103ng khi \u0111\u00e3 s\u1eb5n s\u00e0ng ra m\u1eaft Trang v\u1edbi m\u1ecdi ng\u01b0\u1eddi.") : g._("Li\u00ean h\u1ec7 v\u1edbi qu\u1ea3n tr\u1ecb vi\u00ean Trang \u0111\u1ec3 \u0111\u0103ng ho\u1eb7c x\u00f3a Trang n\u00e0y")]
							})]
						})
					}), c ? l.jsx(b("BaseRowItem.react"), {
						children: l.jsx(b("CometTheme.react"), {
							theme: "invert",
							children: l.jsx(b("TetraButton.react"), {
								label: g._("\u0110\u0103ng Trang"),
								onPress: a,
								padding: "wide",
								type: "primary"
							})
						})
					}) : null]
				})
			})
		})
	}
}), null);