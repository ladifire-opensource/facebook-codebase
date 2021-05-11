__d("CometFormTextArea.react", ["BaseTextArea.react", "CometFormInputWrapper.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			disabled: {
				color: "erlsw9ld",
				cursor: "rj84mg9z"
			},
			hideLabel: {
				marginTop: "ku2m03ct"
			},
			textArea: {
				backgroundColor: "g5ia77u1",
				borderTop: "gcieejh5",
				borderEnd: "bn081pho",
				borderBottom: "humdl8nn",
				borderStart: "izx4hr6d",
				boxSizing: "rq0escxv",
				color: "oo9gr5id",
				display: "j83agx80",
				fontSize: "jagab5yi",
				fontWeight: "knj5qynh",
				lineHeight: "fo6rh5oj",
				marginBottom: "oud54xpy",
				marginTop: "l9qdfxac",
				outline: "lzcic4wl",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				paddingEnd: "hv4rvrfc",
				paddingStart: "dati1w0a",
				resize: "ieid39z1",
				width: "k4urcfbm"
			}
		};

	function a(a, c) {
		var d = a.addOnBottom,
			e = a.autoComplete,
			f = a.disabled,
			i = f === void 0 ? !1 : f;
		f = a.helperText;
		var j = a.hideLabel,
			k = j === void 0 ? !1 : j;
		j = a.label;
		var l = a.maxLength,
			m = a.maxRows,
			n = a.minRows,
			o = a.onBlur,
			p = a.onFocus,
			q = a.onValueChange,
			r = a.placeholder,
			s = a.suppressFocusRing,
			t = a.testid,
			u = a.validationState,
			v = a.value;
		return g.jsx(b("CometFormInputWrapper.react"), {
			addOnBottom: d,
			cursor: "text",
			disabled: i,
			helperText: f,
			hideLabel: k,
			label: j,
			suppressFocusRing: s,
			validationState: u,
			value: v,
			withHeaderMask: !k,
			children: function (a) {
				var d = a.focused,
					f = a.helperTextID;
				a = a.id;
				return g.jsx(b("BaseTextArea.react"), {
					"aria-describedby": f,
					"aria-invalid": u === "ERROR",
					autoComplete: e,
					disabled: i,
					id: a,
					maxLength: l,
					maxRows: m,
					minRows: n,
					onBlur: o,
					onFocus: p,
					onValueChange: q,
					placeholder: d ? r : null,
					ref: c,
					suppressFocusRing: !0,
					testid: void 0,
					value: v,
					xstyle: [h.textArea, i && h.disabled, k && h.hideLabel]
				})
			}
		})
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);