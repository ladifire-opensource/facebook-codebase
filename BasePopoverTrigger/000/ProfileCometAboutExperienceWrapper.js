__d("ProfileCometAboutExperienceWrapper.react", ["ix", "fbt", "BaseLink.react", "CometDeferredPopoverTrigger.react", "CometProgressIndicator.react", "ProfileCometLoadingOverlay.react", "React", "TetraCircleButton.react", "fbicon", "requireDeferred", "stylex"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = b("requireDeferred")("ProfileCometAboutExperienceDropdown.react"),
		l = {
			body: {
				flexGrow: "buofh1pr"
			},
			highlight: {
				color: "q66pz984"
			},
			link: {
				flexShrink: "pfnyh3mw"
			},
			root: {
				display: "j83agx80",
				position: "l9j0dhe7"
			}
		};

	function a(a) {
		var c = a.children,
			d = a.deleteLabel,
			e = a.editLabel,
			f = a.fieldType,
			m = a.inline,
			n = a.lifeEventURL,
			o = a.onDelete,
			p = a.onStartEditing;
		a = a.testid;
		a = j.useState(!1);
		var q = a[0],
			r = a[1];
		a = j.useCallback(function () {
			o(r)
		}, [o]);
		return m === !0 ? j.jsx(b("BaseLink.react"), {
			onClick: p,
			xstyle: l.highlight,
			children: c
		}) : j.jsxs("div", {
			className: (i || (i = b("stylex")))(l.root),
			children: [j.jsx("div", {
				className: i(l.body),
				children: c
			}), j.jsx("div", {
				className: i(l.link),
				children: j.jsx(b("CometDeferredPopoverTrigger.react"), {
					align: "end",
					fallback: j.jsx(b("CometProgressIndicator.react"), {}),
					popoverProps: {
						deleteLabel: d,
						editLabel: e,
						fieldType: f,
						lifeEventURL: n,
						onDelete: a,
						onEdit: p
					},
					popoverResource: k,
					position: "below",
					children: function (a, c) {
						return j.jsx(b("TetraCircleButton.react"), {
							icon: b("fbicon")._(g("484390"), 20),
							label: h._("T\u00f9y ch\u1ecdn"),
							onPress: c,
							ref: a,
							size: 36,
							testid: void 0
						})
					}
				})
			}), q && j.jsx(b("ProfileCometLoadingOverlay.react"), {})]
		})
	}
}), null);