__d("CometFormTextInput.react", ["BaseTextInput.react", 
	"CometFormInputWrapper.react", 
	"React", "TetraIcon.react", "TetraishSkittleEmoji.react", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			disabled: {
				backgroundColor: "qsy8amke",
				color: "erlsw9ld",
				cursor: "rj84mg9z"
			},
			emoji: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				justifyContent: "taijpn5t",
				paddingStart: "tw6a2znq",
				pointerEvents: "hzruof5a"
			},
			icon: {
				paddingStart: "dati1w0a",
				paddingTop: "eluhq753",
				pointerEvents: "hzruof5a"
			},
			input: {
				backgroundColor: "g5ia77u1",
				borderTop: "gcieejh5",
				borderEnd: "bn081pho",
				borderBottom: "humdl8nn",
				borderStart: "izx4hr6d",
				boxSizing: "rq0escxv",
				color: "oo9gr5id",
				fontSize: "qc3s4z1d",
				fontWeight: "knj5qynh",
				lineHeight: "fo6rh5oj",
				paddingBottom: "osnr6wyh",
				paddingEnd: "hv4rvrfc",
				paddingStart: "dati1w0a",
				paddingTop: "p0x8y401",
				width: "k4urcfbm",
				"::-ms-clear": {
					display: "iu8raji3"
				}
			}
		};

	function a(a, c) {
		var d = a.autoComplete,
			e = a.autoFocus,
			f = a.auxContent,
			j = a.disabled,
			k = j === void 0 ? !1 : j;
		j = a.emojiSkittle;
		var l = a.helperText,
			m = a.icon,
			n = a.inputMode,
			o = a.label,
			p = a.labelRef,
			q = a.maxLength,
			r = a.onBlur,
			s = a.onClick,
			t = a.onFocus,
			u = a.onValueChange,
			v = a.placeholder,
			w = a.suppressFocusRing,
			x = a.testid;
		x = a.type;
		var y = x === void 0 ? "text" : x,
			z = a.validationState,
			A = a.value,
			B = a.xstyle,
			C = babelHelpers.objectWithoutPropertiesLoose(a, ["autoComplete", "autoFocus", "auxContent", "disabled", "emojiSkittle", "helperText", "icon", "inputMode", "label", "labelRef", "maxLength", "onBlur", "onClick", "onFocus", "onValueChange", "placeholder", "suppressFocusRing", "testid", "type", "validationState", "value", "xstyle"]);
		return h.jsx(b("CometFormInputWrapper.react"), {
			addOnPrimary: m != null && h.jsx("div", {
				className: (g || (g = b("stylex")))(i.icon),
				children: h.jsx(b("TetraIcon.react"), {
					color: "secondary",
					icon: m
				})
			}) || j != null && h.jsx("div", {
				className: (g || (g = b("stylex")))(i.emoji),
				children: j
			}),
			auxContent: f,
			cursor: "text",
			disabled: k,
			helperText: l,
			label: o,
			labelRef: p,
			suppressFocusRing: w,
			validationState: z,
			value: A,
			children: function (a) {
				var f = a.focused,
					g = a.helperTextID;
				a = a.id;
				return h.jsx(b("BaseTextInput.react"), babelHelpers["extends"]({
					"aria-describedby": g,
					"aria-invalid": z === "ERROR",
					autoComplete: d,
					autoFocus: e,
					disabled: k,
					id: a,
					inputMode: n,
					maxLength: q,
					onBlur: r,
					onClick: s,
					onFocus: t,
					onValueChange: u,
					placeholder: f ? v : null,
					ref: c,
					suppressFocusRing: !0,
					testid: void 0,
					type: y,
					value: A,
					xstyle: [i.input, k && i.disabled, B]
				}, C))
			}
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);