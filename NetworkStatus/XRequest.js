__d("XRequest", ["invariant"], (function (a, b, c, d, e, f, g) {
	var h = function a(b, c, d) {
		var e;
		switch (b) {
			case "Bool":
				e = c && c !== "false" && c !== "0" || !1;
				break;
			case "Int":
				e = c.toString();
				/-?\d+/.test(e) || g(0, 5041, c);
				break;
			case "Float":
				e = parseFloat(c, 10);
				isNaN(e) && g(0, 5042, c);
				break;
			case "FBID":
				e = c.toString();
				for (var f = 0; f < e.length; ++f) {
					var h = e.charCodeAt(f);
					48 <= h && h <= 57 || g(0, 5043, c)
				}
				break;
			case "String":
				e = c.toString();
				break;
			case "Enum":
				d === 0 ? e = a("Int", c, null) : d === 1 ? e = a("String", c, null) : d === 2 ? e = c : g(0, 5044, d);
				break;
			default:
				if (h = /^Nullable(\w+)$/.exec(b)) c === null ? e = null : e = a(h[1], c, d);
				else if (f = /^(\w+)Vector$/.exec(b)) {
					!Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c;
					var i = f[1];
					typeof i === "string" || g(0, 5045);
					e = e.map(function (b) {
						return a(i, b, d && d.member)
					})
				} else if (h = /^(\w+)(Set|Keyset)$/.exec(b)) !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c, e = e.reduce(function (a, b) {
					a[b] = b;
					return a
				}, {}), i = h[1], typeof i === "string" || g(0, 5045), e = Object.keys(e).map(function (b) {
					return a(i, e[b], d && d.member)
				});
				else if (f = /^(\w+)To(\w+)Map$/.exec(b)) {
					e = {};
					var j = f[1],
						k = f[2];
					typeof j === "string" && typeof k === "string" || g(0, 5045);
					Object.keys(c).forEach(function (b) {
						e[a(j, b, d && d.key)] = a(k, c[b], d && d.value)
					})
				} else g(0, 5046, b)
		}
		return e
	};
	a = function () {
		function a(a, b, c) {
			this.$1 = b;
			this.$2 = babelHelpers["extends"]({}, c.getQueryData());
			b = a.split("/").filter(function (a) {
				return a
			});
			a = c.getPath().split("/").filter(function (a) {
				return a
			});
			for (var d = 0; d < b.length; ++d) {
				var e = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[d]);
				if (!e) {
					b[d] === a[d] || g(0, 5047, c.getPath());
					continue
				}
				var f = !!e[1],
					h = !!e[2];
				!h || d === b.length - 1 || g(0, 5048, i);
				var i = e[3];
				Object.prototype.hasOwnProperty.call(this.$1, i) || g(0, 5049, i);
				this.$1[i].required ? f && g(0, 5050, i) : f || g(0, 5057, i);
				a[d] && (this.$2[i] = h ? a.slice(d).join("/") : a[d])
			}
			Object.keys(this.$1).forEach(function (a) {
				!this.$1[a].required || Object.prototype.hasOwnProperty.call(this.$2, a) || g(0, 5051)
			}, this)
		}
		var b = a.prototype;
		b.getExists = function (a) {
			return this.$2[a] !== void 0
		};
		b.getBool = function (a) {
			return this.$3(a, "Bool")
		};
		b.getInt = function (a) {
			return this.$3(a, "Int")
		};
		b.getFloat = function (a) {
			return this.$3(a, "Float")
		};
		b.getFBID = function (a) {
			return this.$3(a, "FBID")
		};
		b.getString = function (a) {
			return this.$3(a, "String")
		};
		b.getEnum = function (a) {
			return this.$3(a, "Enum")
		};
		b.getOptionalInt = function (a) {
			return this.$4(a, "Int")
		};
		b.getOptionalFloat = function (a) {
			return this.$4(a, "Float")
		};
		b.getOptionalFBID = function (a) {
			return this.$4(a, "FBID")
		};
		b.getOptionalString = function (a) {
			return this.$4(a, "String")
		};
		b.getOptionalEnum = function (a) {
			return this.$4(a, "Enum")
		};
		b.getIntVector = function (a) {
			return this.$3(a, "IntVector")
		};
		b.getFloatVector = function (a) {
			return this.$3(a, "FloatVector")
		};
		b.getFBIDVector = function (a) {
			return this.$3(a, "FBIDVector")
		};
		b.getStringVector = function (a) {
			return this.$3(a, "StringVector")
		};
		b.getEnumVector = function (a) {
			return this.$3(a, "EnumVector")
		};
		b.getOptionalIntVector = function (a) {
			return this.$4(a, "IntVector")
		};
		b.getOptionalFloatVector = function (a) {
			return this.$4(a, "FloatVector")
		};
		b.getOptionalFBIDVector = function (a) {
			return this.$4(a, "FBIDVector")
		};
		b.getOptionalStringVector = function (a) {
			return this.$4(a, "StringVector")
		};
		b.getOptionalEnumVector = function (a) {
			return this.$4(a, "EnumVector")
		};
		b.getIntSet = function (a) {
			return this.$3(a, "IntSet")
		};
		b.getFBIDSet = function (a) {
			return this.$3(a, "FBIDSet")
		};
		b.getFBIDKeyset = function (a) {
			return this.$3(a, "FBIDKeyset")
		};
		b.getStringSet = function (a) {
			return this.$3(a, "StringSet")
		};
		b.getEnumKeyset = function (a) {
			return this.$3(a, "EnumKeyset")
		};
		b.getOptionalIntSet = function (a) {
			return this.$4(a, "IntSet")
		};
		b.getOptionalFBIDSet = function (a) {
			return this.$4(a, "FBIDSet")
		};
		b.getOptionalFBIDKeyset = function (a) {
			return this.$4(a, "FBIDKeyset")
		};
		b.getOptionalStringSet = function (a) {
			return this.$4(a, "StringSet")
		};
		b.getEnumToBoolMap = function (a) {
			return this.$3(a, "EnumToBoolMap")
		};
		b.getEnumToEnumMap = function (a) {
			return this.$3(a, "EnumToEnumMap")
		};
		b.getEnumToFloatMap = function (a) {
			return this.$3(a, "EnumToFloatMap")
		};
		b.getEnumToIntMap = function (a) {
			return this.$3(a, "EnumToIntMap")
		};
		b.getEnumToStringMap = function (a) {
			return this.$3(a, "EnumToStringMap")
		};
		b.getIntToBoolMap = function (a) {
			return this.$3(a, "IntToBoolMap")
		};
		b.getIntToEnumMap = function (a) {
			return this.$3(a, "IntToEnumMap")
		};
		b.getIntToFloatMap = function (a) {
			return this.$3(a, "IntToFloatMap")
		};
		b.getIntToIntMap = function (a) {
			return this.$3(a, "IntToIntMap")
		};
		b.getIntToStringMap = function (a) {
			return this.$3(a, "IntToStringMap")
		};
		b.getStringToBoolMap = function (a) {
			return this.$3(a, "StringToBoolMap")
		};
		b.getStringToEnumMap = function (a) {
			return this.$3(a, "StringToEnumMap")
		};
		b.getStringToFloatMap = function (a) {
			return this.$3(a, "StringToFloatMap")
		};
		b.getStringToIntMap = function (a) {
			return this.$3(a, "StringToIntMap")
		};
		b.getStringToStringMap = function (a) {
			return this.$3(a, "StringToStringMap")
		};
		b.getOptionalEnumToBoolMap = function (a) {
			return this.$4(a, "EnumToBoolMap")
		};
		b.getOptionalEnumToEnumMap = function (a) {
			return this.$4(a, "EnumToEnumMap")
		};
		b.getOptionalEnumToFloatMap = function (a) {
			return this.$4(a, "EnumToFloatMap")
		};
		b.getOptionalEnumToIntMap = function (a) {
			return this.$4(a, "EnumToIntMap")
		};
		b.getOptionalEnumToStringMap = function (a) {
			return this.$4(a, "EnumToStringMap")
		};
		b.getOptionalIntToBoolMap = function (a) {
			return this.$4(a, "IntToBoolMap")
		};
		b.getOptionalIntToEnumMap = function (a) {
			return this.$4(a, "IntToEnumMap")
		};
		b.getOptionalIntToFloatMap = function (a) {
			return this.$4(a, "IntToFloatMap")
		};
		b.getOptionalIntToIntMap = function (a) {
			return this.$4(a, "IntToIntMap")
		};
		b.getOptionalIntToStringMap = function (a) {
			return this.$4(a, "IntToStringMap")
		};
		b.getOptionalStringToBoolMap = function (a) {
			return this.$4(a, "StringToBoolMap")
		};
		b.getOptionalStringToEnumMap = function (a) {
			return this.$4(a, "StringToEnumMap")
		};
		b.getOptionalStringToFloatMap = function (a) {
			return this.$4(a, "StringToFloatMap")
		};
		b.getOptionalStringToIntMap = function (a) {
			return this.$4(a, "StringToIntMap")
		};
		b.getOptionalStringToStringMap = function (a) {
			return this.$4(a, "StringToStringMap")
		};
		b.getEnumToNullableEnumMap = function (a) {
			return this.$3(a, "EnumToNullableEnumMap")
		};
		b.getEnumToNullableFloatMap = function (a) {
			return this.$3(a, "EnumToNullableFloatMap")
		};
		b.getEnumToNullableIntMap = function (a) {
			return this.$3(a, "EnumToNullableIntMap")
		};
		b.getEnumToNullableStringMap = function (a) {
			return this.$3(a, "EnumToNullableStringMap")
		};
		b.getIntToNullableEnumMap = function (a) {
			return this.$3(a, "IntToNullableEnumMap")
		};
		b.getIntToNullableFloatMap = function (a) {
			return this.$3(a, "IntToNullableFloatMap")
		};
		b.getIntToNullableIntMap = function (a) {
			return this.$3(a, "IntToNullableIntMap")
		};
		b.getIntToNullableStringMap = function (a) {
			return this.$3(a, "IntToNullableStringMap")
		};
		b.getStringToNullableEnumMap = function (a) {
			return this.$3(a, "StringToNullableEnumMap")
		};
		b.getStringToNullableFloatMap = function (a) {
			return this.$3(a, "StringToNullableFloatMap")
		};
		b.getStringToNullableIntMap = function (a) {
			return this.$3(a, "StringToNullableIntMap")
		};
		b.getStringToNullableStringMap = function (a) {
			return this.$3(a, "StringToNullableStringMap")
		};
		b.getOptionalEnumToNullableEnumMap = function (a) {
			return this.$4(a, "EnumToNullableEnumMap")
		};
		b.getOptionalEnumToNullableFloatMap = function (a) {
			return this.$4(a, "EnumToNullableFloatMap")
		};
		b.getOptionalEnumToNullableIntMap = function (a) {
			return this.$4(a, "EnumToNullableIntMap")
		};
		b.getOptionalEnumToNullableStringMap = function (a) {
			return this.$4(a, "EnumToNullableStringMap")
		};
		b.getOptionalIntToNullableEnumMap = function (a) {
			return this.$4(a, "IntToNullableEnumMap")
		};
		b.getOptionalIntToNullableFloatMap = function (a) {
			return this.$4(a, "IntToNullableFloatMap")
		};
		b.getOptionalIntToNullableIntMap = function (a) {
			return this.$4(a, "IntToNullableIntMap")
		};
		b.getOptionalIntToNullableStringMap = function (a) {
			return this.$4(a, "IntToNullableStringMap")
		};
		b.getOptionalStringToNullableEnumMap = function (a) {
			return this.$4(a, "StringToNullableEnumMap")
		};
		b.getOptionalStringToNullableFloatMap = function (a) {
			return this.$4(a, "StringToNullableFloatMap")
		};
		b.getOptionalStringToNullableIntMap = function (a) {
			return this.$4(a, "StringToNullableIntMap")
		};
		b.getOptionalStringToNullableStringMap = function (a) {
			return this.$4(a, "StringToNullableStringMap")
		};
		b.$3 = function (a, b) {
			this.$5(a, b);
			var c = this.$1[a];
			if (!Object.prototype.hasOwnProperty.call(this.$2, a) && c.defaultValue != null) {
				c.required && g(0, 5052);
				return h(b, c.defaultValue, c.enumType)
			}
			c.required || b === "Bool" || c.defaultValue != null || g(0, 5053, b, a, b, a);
			return h(b, this.$2[a], c.enumType)
		};
		b.$4 = function (a, b) {
			this.$5(a, b);
			var c = this.$1[a];
			c.required && g(0, 5054, b, a, b, a);
			c.defaultValue && g(0, 5052);
			return Object.prototype.hasOwnProperty.call(this.$2, a) ? h(b, this.$2[a], c.enumType) : null
		};
		b.$5 = function (a, b) {
			Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 5055, a), this.$1[a].type === b || g(0, 5056, a, b, this.$1[a].type)
		};
		return a
	}();
	e.exports = a
}), null);