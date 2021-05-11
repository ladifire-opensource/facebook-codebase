__d("XControllerURIBuilder", ["invariant", "URI", "gkx", "isInternalFBURI"], (function (a, b, c, d, e, f, g) {
	var h;
	a = function () {
		function a(a, b) {
			this.$1 = {}, this.$2 = a, this.$3 = b
		}
		var c = a.prototype;
		c.setInt = function (a, b) {
			return this.__setParam(a, "Int", b)
		};
		c.setFBID = function (a, b) {
			return this.__setParam(a, "FBID", b)
		};
		c.setFloat = function (a, b) {
			return this.__setParam(a, "Float", b)
		};
		c.setString = function (a, b) {
			return this.__setParam(a, "String", b)
		};
		c.setExists = function (a, b) {
			b === !1 && (b = void 0);
			return this.__setParam(a, "Exists", b)
		};
		c.setBool = function (a, b) {
			return this.__setParam(a, "Bool", b)
		};
		c.setBoolVector = function (a, b) {
			return this.__setParam(a, "BoolVector", b)
		};
		c.setEnum = function (a, b) {
			return this.__setParam(a, "Enum", b)
		};
		c.setPath = function (a, b) {
			return this.__setParam(a, "Path", b)
		};
		c.setIntVector = function (a, b) {
			return this.__setParam(a, "IntVector", b)
		};
		c.setIntKeyset = function (a, b) {
			return this.__setParam(a, "IntKeyset", b)
		};
		c.setIntSet = function (a, b) {
			return this.__setParam(a, "IntSet", b.join(","))
		};
		c.setFloatVector = function (a, b) {
			return this.__setParam(a, "FloatVector", b)
		};
		c.setFloatSet = function (a, b) {
			return this.__setParam(a, "FloatSet", b.join(","))
		};
		c.setStringVector = function (a, b) {
			return this.__setParam(a, "StringVector", b)
		};
		c.setStringKeyset = function (a, b) {
			return this.__setParam(a, "StringKeyset", b)
		};
		c.setStringSet = function (a, b) {
			return this.__setParam(a, "StringSet", b)
		};
		c.setFBIDVector = function (a, b) {
			return this.__setParam(a, "FBIDVector", b)
		};
		c.setFBIDSet = function (a, b) {
			return this.__setParam(a, "FBIDSet", b)
		};
		c.setFBIDKeyset = function (a, b) {
			return this.__setParam(a, "FBIDKeyset", b)
		};
		c.setEnumVector = function (a, b) {
			return this.__setParam(a, "EnumVector", b)
		};
		c.setEnumSet = function (a, b) {
			return this.__setParam(a, "EnumSet", b)
		};
		c.setEnumKeyset = function (a, b) {
			return this.__setParam(a, "EnumKeyset", b)
		};
		c.setIntToIntMap = function (a, b) {
			return this.__setParam(a, "IntToIntMap", b)
		};
		c.setIntToFloatMap = function (a, b) {
			return this.__setParam(a, "IntToFloatMap", b)
		};
		c.setIntToStringMap = function (a, b) {
			return this.__setParam(a, "IntToStringMap", b)
		};
		c.setIntToBoolMap = function (a, b) {
			return this.__setParam(a, "IntToBoolMap", b)
		};
		c.setStringToIntMap = function (a, b) {
			return this.__setParam(a, "StringToIntMap", b)
		};
		c.setStringToFloatMap = function (a, b) {
			return this.__setParam(a, "StringToFloatMap", b)
		};
		c.setStringToStringMap = function (a, b) {
			return this.__setParam(a, "StringToStringMap", b)
		};
		c.setStringToNullableStringMap = function (a, b) {
			return this.__setParam(a, "StringToNullableStringMap", b)
		};
		c.setStringToBoolMap = function (a, b) {
			return this.__setParam(a, "StringToBoolMap", b)
		};
		c.setStringToEnumMap = function (a, b) {
			return this.__setParam(a, "StringToEnumMap", b)
		};
		c.setEnumToStringVectorMap = function (a, b) {
			return this.__setParam(a, "EnumToStringVectorMap", b)
		};
		c.setEnumToBoolMap = function (a, b) {
			return this.__setParam(a, "EnumToBoolMap", b)
		};
		c.setEnumToEnumMap = function (a, b) {
			return this.__setParam(a, "EnumToEnumMap", b)
		};
		c.setEnumToIntMap = function (a, b) {
			return this.__setParam(a, "EnumToIntMap", b)
		};
		c.setEnumToFBIDVectorMap = function (a, b) {
			return this.__setParam(a, "EnumToFBIDVectorMap", b)
		};
		c.setStringToIntDict = function (a, b) {
			return this.__setParam(a, "StringToIntDict", b)
		};
		c.setStringToNullableIntDict = function (a, b) {
			return this.__setParam(a, "StringToNullableIntDict", b)
		};
		c.setStringToFloatDict = function (a, b) {
			return this.__setParam(a, "StringToFloatDict", b)
		};
		c.setStringToNullableFloatDict = function (a, b) {
			return this.__setParam(a, "StringToNullableFloatDict", b)
		};
		c.setStringToStringDict = function (a, b) {
			return this.__setParam(a, "StringToStringDict", b)
		};
		c.setStringToNullableStringDict = function (a, b) {
			return this.__setParam(a, "StringToNullableStringDict", b)
		};
		c.setStringToBoolDict = function (a, b) {
			return this.__setParam(a, "StringToBoolDict", b)
		};
		c.setStringToEnumDict = function (a, b) {
			return this.__setParam(a, "StringToEnumDict", b)
		};
		c.setEnumToIntDict = function (a, b) {
			return this.__setParam(a, "EnumToIntDict", b)
		};
		c.setHackType = function (a, b) {
			return this.__setParam(a, "HackType", b)
		};
		c.setTypeAssert = function (a, b) {
			return this.__setParam(a, "TypeAssert", b)
		};
		c.__validateRequiredParamsExistence = function () {
			for (var a in this.$3) !this.$3[a].required || Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 903, a)
		};
		c.setParams = function (a) {
			for (var b in a) {
				this.__assertParamExists(b);
				var c = this.$3[b].type;
				this.__setParam(b, c, a[b])
			}
			return this
		};
		c.__assertParamExists = function (a) {
			a in this.$3 || g(0, 904, a)
		};
		c.__setParam = function (a, b, c) {
			this.__assertParamExists(a);
			var d = this.$3[a].type;
			d === b || g(0, 905, a, b, d);
			this.__setParamInt(a, c);
			return this
		};
		c.__setParamInt = function (a, b) {
			this.$1[a] = b
		};
		c.getRequest_LEGACY_UNTYPED = function (a) {
			return a.setReplaceTransportMarkers().setURI(this.getURI())
		};
		c.getURI = function () {
			this.__validateRequiredParamsExistence();
			var a = {},
				c = "",
				d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
				e = this.$2.split("/"),
				f = !1;
			for (var i = 0; i < e.length; i++) {
				var j = e[i];
				if (j === "") continue;
				var k = d.exec(j);
				if (!k) c += "/" + j;
				else {
					j = k[2] === "?";
					var l = k[4],
						m = this.$3[l];
					m || g(0, 906, l, this.$2);
					if (j && f) continue;
					if (this.$1[l] == null && j) {
						f = !0;
						continue
					}
					j = this.$1[l] != null ? this.$1[l] : m.defaultValue;
					j != null || g(0, 907, l);
					m = k[1] ? k[1] : "";
					k = k[5] ? k[5] : "";
					c += "/" + m + j + k;
					a[l] = !0
				}
			}
			this.$2.slice(-1) === "/" && (c += "/");
			c === "" && (c = "/");
			m = new(h || (h = b("URI")))(c);
			for (var n in this.$1) {
				j = this.$1[n];
				if (!a[n] && j != null) {
					k = this.$3[n];
					m.addQueryData(n, k && k.type === "Exists" ? null : j)
				}
			}
			return m
		};
		c.getLookasideURI = function () {
			var a = "lookaside.facebook.com";
			b("isInternalFBURI")((h || (h = b("URI"))).getRequestURI()) ? a = "lookaside.internalfb.com" : b("gkx")("996940") && (a = "lookaside.internmc.facebook.com");
			return this.getURI().setDomain(a).setProtocol("https")
		};
		a.create = function (b, c) {
			return function () {
				return new a(b, c)
			}
		};
		return a
	}();
	e.exports = a;
	a.prototype.getRequest = function (a) {
		return this.getRequest_LEGACY_UNTYPED(a)
	}
}), null);