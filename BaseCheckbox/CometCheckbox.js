__d("CometCheckbox.react", ["ix", "BaseCheckbox.react", "CometPressableOverlay.react", "React", "TetraIcon.react", "TetraText.react", "fbicon", "stylex", "useCometPressableEventHandlers"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = {
			checkbox: {
				display: "j83agx80"
			},
			root: {
				WebkitTapHighlightColor: "oajrlxb2",
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				paddingBottom: "sj5x9vvc",
				paddingTop: "cxgpxx05",
				position: "l9j0dhe7",
				touchAction: "f1sip0of"
			},
			text: {
				flexBasis: "rj1gh0hx",
				flexGrow: "buofh1pr",
				marginStart: "h676nmdw",
				minWidth: "hpfvmrgz"
			}
		};

	function a(a, c) {
		var d = a.checked,
			e = a.disabled;
		e = e === void 0 ? !1 : e;
		var f = a.id,
			k = a.label,
			l = a.labelIsHidden;
		l = l === void 0 ? !1 : l;
		var m = a.name,
			n = a.onChange,
			o = a.reduceEmphasis;
		o = o === void 0 ? !1 : o;
		var p = a.testid,
			q = a.value;
		p = b("useCometPressableEventHandlers")({
			disabled: e
		});
		a = p[0];
		p[1];
		var r = p[2],
			s = r.focusVisible,
			t = r.hovered;
		r = r.pressed;
		p = p[3];
		var u = i.useCallback(function () {
			n(q)
		}, [n, q]);
		return i.jsxs("label", babelHelpers["extends"]({
			className: (h || (h = b("stylex")))(j.root)
		}, p, {
			ref: a,
			children: [i.jsxs(b("BaseCheckbox.react"), {
				"aria-label": l ? k : void 0,
				checked: d,
				disabled: e,
				id: f,
				name: m,
				onValueChange: u,
				ref: c,
				testid: void 0,
				xstyle: j.checkbox,
				children: [i.jsx(b("TetraIcon.react"), {
					color: e ? "disabled" : d ? "highlight" : "secondary",
					icon: d ? b("fbicon")._(g("531032"), 24) : b("fbicon")._(g("659289"), 24)
				}), i.jsx(b("CometPressableOverlay.react"), {
					focusVisible: s,
					hovered: t,
					offset: 8,
					pressed: r,
					radius: "50%"
				})]
			}), l ? null : i.jsx("div", {
				className: (h || (h = b("stylex")))(j.text),
				children: i.jsx(b("TetraText.react"), {
					color: e ? "disabled" : "primary",
					type: o ? "body3" : "button2",
					children: k
				})
			})]
		}))
	}
	c = i.forwardRef(a);
	e.exports = c
}), null);