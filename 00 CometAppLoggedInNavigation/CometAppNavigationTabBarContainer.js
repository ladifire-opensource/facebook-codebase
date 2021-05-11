__d("CometAppNavigationTabBarContainer.react", ["CometBase.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			content: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				justifyContent: "bkfpd7mw"
			},
			root: {
				backgroundColor: "cddn0xzi",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				height: "byvelhso"
			},
			shadow: {
				backgroundImage: "rozst971",
				backgroundRepeat: "g3xnvtyb",
				backgroundSize: "p1jhd9yy",
				bottom: "a0vgkybk",
				end: "n7fi1qx3",
				height: "ooasylqa",
				pointerEvents: "hzruof5a",
				position: "pmk7jnqg",
				start: "j9ispegn"
			}
		};

	function a(a) {
		var c = a.children;
		a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "xstyle"]);
		return g.jsxs(b("CometBase.react"), babelHelpers["extends"]({}, a, {
			xstyle: h.root,
			children: [g.jsx(b("CometBase.react"), {
				xstyle: h.content,
				children: c
			}), g.jsx(b("CometBase.react"), {
				xstyle: h.shadow
			})]
		}))
	}
}), null);