__d("CometDraggableList.react", ["React", "stylex", "useCometDraggableItems"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			root: {
				boxSizing: "rq0escxv",
				paddingTop: "ggysqto6",
				paddingEnd: "exrn9cbp",
				paddingBottom: "ojkyduve",
				paddingStart: "abpf7j7b",
				position: "l9j0dhe7"
			}
		};

	function a(a) {
		var c = a.direction;
		c = c === void 0 ? "vertical" : c;
		var d = a.expanded;
		d = d === void 0 ? !1 : d;
		var e = a.items,
			f = a.onReorder;
		a = a.xstyle;
		var j = h.useRef(null);
		d = b("useCometDraggableItems")({
			direction: c,
			expanded: d,
			items: e,
			onReorder: f
		});
		return h.jsx("div", {
			className: (g || (g = b("stylex")))(i.root, a),
			ref: j,
			style: {
				display: "flex",
				flexDirection: c === "vertical" ? "column" : "row"
			},
			children: d
		})
	}
}), null);