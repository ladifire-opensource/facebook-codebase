__d("CometPhotoEditorRotateButtonVertical.react", ["ix", "fbt", 
	"CometPhotoEditorButtonVertical.react", "React", "fbicon", 
	"qex", "rotationCoordinateTransform", 
	"rotationElementCoordinateTransform", "updateAngleReducer",
	 "updateCoordinateTransformsReducer", "updateToolReducer",
	  "useMediaEditorReducer", "useMediaEditorViewStateDispatcher"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React"),
		j = b("qex")._("1182332");

	function a(a) {
		a = a.activeTool;
		a = a === void 0 ? null : a;
		var c = i.useRef(!1);
		b("useMediaEditorReducer")(b("updateAngleReducer"));
		b("useMediaEditorReducer")(b("updateToolReducer"));
		b("useMediaEditorReducer")(b("updateCoordinateTransformsReducer"));
		var d = b("useMediaEditorViewStateDispatcher")(),
			e = function () {
				c.current || (c.current = !0, d({
					fn: b("rotationCoordinateTransform"),
					type: "ADD_COORDINATE_TRANSFORM_FN"
				}), d({
					fn: b("rotationElementCoordinateTransform"),
					priority: 5,
					type: "ADD_ELEMENT_COORDINATE_TRANSFORM"
				})), d({
					type: "ROTATE"
				})
			};
		return i.jsx(b("CometPhotoEditorButtonVertical.react"), {
			canToolToggle: !1,
			enabled: j === !0,
			icon: b("fbicon")._(g("1156852"), 24),
			isActive: a === "ROTATE",
			label: h._("Xoay"),
			onClick: function () {
				return e()
			},
			toolName: "ROTATE"
		})
	}
}), null);