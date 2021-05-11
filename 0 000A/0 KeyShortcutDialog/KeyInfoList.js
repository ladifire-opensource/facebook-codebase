__d("KeyInfoList.react", ["fbt", "CometScreenReaderText.react", "KeyInfo.react", "react"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = h || b("react");

	function a(a) {
		var c = a.commands,
			d = a.isTable,
			e = [],
			f = -1;
		if (c != null) {
			var h = Array.from(c.keys());
			h.sort(function(a, b) {
				if (a < b) return -1;
				return b > a ? 1 : 0
			});
			h.forEach(function(a, g) {
				var j = c.get(a);
				j && j.forEach(function(c, k) {
					f++;
					if (c.isHiddenCommand || c.command == null) return;
					var l = g === h.length - 1 && k === j.length - 1;
					return e.push(i.jsx(b("KeyInfo.react"), {
						command: c.command,
						description: c.description,
						displayType: d ? "table" : "list",
						index: k,
						isEndOfList: l,
						keyCommand: a
					}, f))
				})
			})
		}
		return d ? i.jsx("table", {
			cellSpacing: "0",
			className: "k4urcfbm",
			children: i.jsxs("tbody", {
				children: [i.jsxs("tr", {
					children: [i.jsx("th", {
						children: i.jsx(b("CometScreenReaderText.react"), {
							text: g._("\u0110\u1ec3 l\u00e0m vi\u1ec7c n\u00e0y")
						})
					}), i.jsx("th", {
						children: i.jsx(b("CometScreenReaderText.react"), {
							text: g._("D\u00f9ng l\u1ec7nh")
						})
					})]
				}), e]
			})
		}) : e
	}
}), null);