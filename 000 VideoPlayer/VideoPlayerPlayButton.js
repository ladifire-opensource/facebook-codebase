__d("VideoPlayerPlayButton.react", ["fbt", "CometImage.react", "CometPressable.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React");

	function a(a) {
		var c = a.isVisible;
		a = a.onClick;
		var d = i.jsx(b("CometImage.react"), {
			src: "/images/video/play_72dp.png"
		});
		a = a != null ? i.jsx(b("CometPressable.react"), {
			display: "inline",
			label: g._("Ph\u00e1t video"),
			onPress: a,
			overlayDisabled: !0,
			children: d
		}) : d;
		return i.jsx("i", {
			className: (h || (h = b("stylex"))).dedupe({
				"border-top-start-radius-1": "s45kfl79",
				"border-top-end-radius-1": "emlxlaya",
				"border-bottom-end-radius-1": "bkmhp75w",
				"border-bottom-start-radius-1": "spb7xbtv",
				"cursor-1": "nhd2j8a9",
				"height-1": "rdkrh8wx",
				"margin-top-1": "jtnsf9zi",
				"margin-end-1": "cxmmr5t8",
				"margin-bottom-1": "oygrvhab",
				"margin-start-1": "kw0a5h6o",
				"opacity-1": "pedkr2u6",
				"position-1": "pmk7jnqg",
				"start-1": "kfkz5moi",
				"top-1": "rk01pc8j",
				"width-1": "orwu60u2"
			}, c ? null : {
				"opacity-1": "b5wmifdl",
				"visibility-1": "kr9hpln1"
			}),
			children: a
		})
	}
}), null);