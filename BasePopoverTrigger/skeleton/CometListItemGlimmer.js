__d("CometListItemGlimmer.react", ["BaseGlimmer.react", 
	"BaseListItem.react", "BaseLoadingStateElement.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React");

	function a(a) {
		var c = a.imageSize,
			d = c === void 0 ? 36 : c;
		c = a.imageStyle;
		var e = c === void 0 ? "none" : c;
		c = a.numberOfItems;
		var f = c === void 0 ? 1 : c;
		c = a.paddingHorizontal;
		var i = c === void 0 ? 16 : c;
		a = h.useMemo(function () {
			return Array(f).fill().map(function (a, b) {
				return Math.floor(Math.PI * Math.pow(10, b % 10) % 4)
			})
		}, [f]);
		return h.jsx(b("BaseLoadingStateElement.react"), {
			children: a.map(function (a, c) {
				return h.jsx(b("BaseListItem.react"), {
					addon: e !== "none" ? h.jsx(b("BaseGlimmer.react"), {
						className: (g || (g = b("stylex"))).dedupe(d === 20 ? {
							"height-1": "jnigpg78",
							"width-1": "odw8uiq3"
						} : {}, d === 36 ? {
							"height-1": "tv7at329",
							"width-1": "thwo4zme"
						} : null, d === 40 ? {
							"height-1": "qypqp5cg",
							"width-1": "q676j6op"
						} : null, d === 48 ? {
							"height-1": "m7zwrmfr",
							"width-1": "tmrshh9y"
						} : null, d === 56 ? {
							"height-1": "e5d9fub0",
							"width-1": "oeao4gh3"
						} : null, d === 60 ? {
							"height-1": "cb02d2ww",
							"width-1": "ljni7pan"
						} : null, e === "circle" ? {
							"border-top-start-radius-1": "s45kfl79",
							"border-top-end-radius-1": "emlxlaya",
							"border-bottom-end-radius-1": "bkmhp75w",
							"border-bottom-start-radius-1": "spb7xbtv"
						} : null, e === "roundedRect" ? {
							"border-top-start-radius-1": "ue3kfks5",
							"border-top-end-radius-1": "pw54ja7n",
							"border-bottom-end-radius-1": "uo3d90p7",
							"border-bottom-start-radius-1": "l82x9zwi"
						} : null),
						index: c
					}) : null,
					className: (g || (g = b("stylex"))).dedupe({
						"padding-top-1": "cxgpxx05",
						"padding-bottom-1": "sj5x9vvc"
					}, i ? {
						"padding-end-1": "hv4rvrfc",
						"padding-start-1": "dati1w0a"
					} : null, c === 0 ? {
						"padding-top-1": "jb3vyjys"
					} : null),
					children: h.jsx(b("BaseGlimmer.react"), {
						className: g.dedupe({
							"border-top-start-radius-1": "ue3kfks5",
							"border-top-end-radius-1": "pw54ja7n",
							"border-bottom-end-radius-1": "uo3d90p7",
							"border-bottom-start-radius-1": "l82x9zwi",
							"height-1": "ed3p1gfi"
						}, a === 0 ? {
							"width-1": "n99xedck"
						} : null, a === 1 ? {
							"width-1": "jico2p30"
						} : null, a === 2 ? {
							"width-1": "ptrm0iwj"
						} : null, a === 3 ? {
							"width-1": "k4urcfbm"
						} : null),
						index: c
					})
				}, c)
			})
		})
	}
}), null);