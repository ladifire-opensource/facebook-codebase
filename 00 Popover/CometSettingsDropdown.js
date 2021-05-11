__d("CometSettingsDropdown.react", ["fbt", "BaseMultiStepContainer.react", 
	"CometPopover.react", 
	"CometScrollableArea.react", 
	"CometSettingsDropdownList.react", 
	"React", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = {
			card: {
				maxHeight: "t1wsaese",
				maxWidth: "h77mwsce",
				width: "o36gj0jk"
			},
			root: {
				marginTop: "knvmm38d"
			}
		};

	function a(a) {
		var c = a.onClose;
		return i.jsx("div", {
			className: (h || (h = b("stylex")))(j.root),
			children: i.jsx(b("CometPopover.react"), {
				label: g._("T\u00e0i kho\u1ea3n"),
				children: i.jsx(b("CometScrollableArea.react"), {
					xstyle: j.card,
					children: i.jsx("div", {
						children: i.jsx(b("BaseMultiStepContainer.react"), {
							children: function (a) {
								return i.jsx(b("CometSettingsDropdownList.react"), {
									onClose: c,
									pushPage: a
								})
							}
						})
					})
				})
			})
		})
	}
}), null);