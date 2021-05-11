__d("CometTextInputWithIcon.react", ["BaseTextInput.react", 
	"CometScreenReaderText.react", "TetraIcon.react", "react", "stylex", 
	"useBaseInputValidators", "useCometUniqueID"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h, i = g || b("react"),
		j = {
			disabledInput: {
				cursor: "rj84mg9z"
			},
			iconEnd: {
				end: "dpjh1vo5",
				position: "pmk7jnqg",
				top: "plgsh5y4"
			},
			iconStart: {
				position: "pmk7jnqg",
				start: "dnzpfbms",
				top: "plgsh5y4"
			},
			root: {
				color: "oo9gr5id",
				fontSize: "jq4qci2q",
				position: "l9j0dhe7"
			},
			textInput: {
				backgroundColor: "cwj9ozl2",
				borderTop: "l6v480f0",
				borderEnd: "maa8sdkg",
				borderBottom: "s1tcr66n",
				borderStart: "aypy0576",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				boxSizing: "rq0escxv",
				color: "oo9gr5id",
				fontSize: "l94mrbxd",
				fontWeight: "ekzkrbhg",
				height: "tv7at329",
				width: "k4urcfbm"
			},
			textInputEndIcon: {
				paddingTop: "jb3vyjys",
				paddingEnd: "bowiujrr",
				paddingBottom: "qt6c0cv9",
				paddingStart: "h4z51re5"
			},
			textInputStartIcon: {
				paddingTop: "jb3vyjys",
				paddingEnd: "rv4hoivh",
				paddingBottom: "qt6c0cv9",
				paddingStart: "jg4yhqs5"
			}
		};

	function a(a, c) {
		var d, e = a["aria-describedby"],
			f = a.disabled;
		f = f === void 0 ? !1 : f;
		var g = a.icon,
			k = a.iconColor,
			l = a.iconPlacement;
		l = l === void 0 ? "start" : l;
		var m = a.label,
			n = a.validator,
			o = a.value;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["aria-describedby", "disabled", "icon", "iconColor", "iconPlacement", "label", "validator", "value"]);
		var p = b("useCometUniqueID")();
		n = b("useBaseInputValidators")({
			validator: n,
			value: String(o)
		});
		var q = n.topResultReason;
		n = n.topResultType;
		e = q != null ? p + " " + ((d = e) != null ? d : "") : (d = e) != null ? d : void 0;
		return i.jsxs("div", {
			className: (h || (h = b("stylex")))(j.root),
			children: [l === "start" ? i.jsx("div", {
				className: (h || (h = b("stylex")))(j.iconStart),
				children: i.jsx(b("TetraIcon.react"), {
					color: k,
					icon: g,
					size: 16
				})
			}) : null, i.jsx(b("BaseTextInput.react"), babelHelpers["extends"]({
				"aria-describedby": e,
				"aria-invalid": n === "ERROR",
				"aria-label": m,
				disabled: f,
				value: o,
				xstyle: [f && j.disabledInput, j.textInput, l === "start" && j.textInputStartIcon, l === "end" && j.textInputEndIcon]
			}, a, {
				ref: c
			})), l === "end" ? i.jsx("div", {
				className: (h || (h = b("stylex")))(j.iconEnd),
				children: i.jsx(b("TetraIcon.react"), {
					color: k,
					icon: g,
					size: 16
				})
			}) : null, q != null ? i.jsx(b("CometScreenReaderText.react"), {
				id: p,
				text: q
			}) : null]
		})
	}
	c = i.forwardRef(a);
	e.exports = c
}), null);