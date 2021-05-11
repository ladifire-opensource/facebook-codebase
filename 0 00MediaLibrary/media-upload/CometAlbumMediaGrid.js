__d("CometAlbumMediaGrid.react", ["CometDraggableGrid.react", "CometDraggableList.react", "React", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 500,
		i = 300;

	function a(a) {
		var c = a.onReorder;
		a = a.renderedItems;
		return g.jsx("div", {
			className: "sj5x9vvc cxgpxx05 tw6a2znq d1544ag0 eg9m0zos mqzoxkkh",
			"data-testid": void 0,
			children: g.jsx(b("CometDraggableGrid.react"), {
				columnMaxWidth: h,
				columnMinWidth: i,
				expanded: !0,
				items: a,
				minItems: a.length + 12,
				onReorder: c
			})
		})
	}
}), null);