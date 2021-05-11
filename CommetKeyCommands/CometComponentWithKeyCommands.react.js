__d("CometComponentWithKeyCommands.react", ["CometKeyCommandWrapper.react", "React", "stylex", "useKeyCommands"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			displayInherit: {
				display: "a8s20v7p"
			},
			inherit: {
				alignContent: "tojvnm2t",
				alignItems: "a6sixzi8",
				flexDirection: "k5wvi7nf",
				flexGrow: "q3lfd5jv",
				flexShrink: "pk4s997a",
				height: "bipmatt0",
				justifyContent: "cebpdrjk",
				maxHeight: "qowsmv63",
				maxWidth: "owwhemhu",
				minHeight: "dp1hu0rb",
				minWidth: "dhp61c6y",
				position: "l9j0dhe7",
				width: "iyyx5f41"
			}
		};

	function i(a) {
		b("useKeyCommands")(a.commandConfigs);
		return null
	}

	function a(a) {
		var c = a.children,
			d = a.commandConfigs,
			e = a.elementType,
			f = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "commandConfigs", "elementType", "xstyle"]);
		var j = e === "span" ? h.inherit : [h.inherit, h.displayInherit];
		return g.jsxs(b("CometKeyCommandWrapper.react"), babelHelpers["extends"]({
			elementType: e,
			xstyle: f != null ? f : j
		}, a, {
			children: [g.jsx(i, {
				commandConfigs: d
			}), c]
		}))
	}
}), null);