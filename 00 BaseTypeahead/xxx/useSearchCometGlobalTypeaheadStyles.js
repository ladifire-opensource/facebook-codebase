__d("useSearchCometGlobalTypeaheadStyles", ["React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = {
			inputXStyle: {
				alignItems: "bp9cbjyn",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				height: "byvelhso",
				paddingEnd: "hv4rvrfc",
				paddingStart: "dati1w0a"
			}
		},
		i = {
			typeaheadLayout: {
				display: "a8c37x1j",
				position: "l9j0dhe7",
				"::before": {
					bottom: "p9906w3d",
					boxShadow: "rp3cc1xn",
					content: "keod5gw0",
					end: "rpedc2ei",
					opacity: "bjz44bnn",
					position: "kf6kxqaw",
					start: "ex9rxw2n",
					top: "owhxnkwg"
				}
			},
			typeaheadLayoutOpened: {
				borderBottom: "e9989ue4",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				borderEnd: "esr5mh6w",
				borderStart: "r7d6kgcz",
				borderTop: "qu0x051f",
				"::before": {
					borderBottomEndRadius: "odn1etrg",
					borderBottomStartRadius: "chwxu43p",
					opacity: "e3vzygv9",
					transitionDuration: "apxoh5wl",
					transitionProperty: "ai9h399o",
					transitionTimingFunction: "ge6oauey"
				}
			},
			typeaheadView: {
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				paddingBottom: "sj5x9vvc",
				paddingEnd: "dflh9lhu",
				paddingStart: "scb9dxdr"
			}
		};

	function a() {
		return g.useMemo(function () {
			return {
				inputXStyle: h.inputXStyle,
				layoutOpenedXStyle: i.typeaheadLayoutOpened,
				layoutXStyle: i.typeaheadLayout,
				viewXStyle: i.typeaheadView
			}
		}, [])
	}
}), null);