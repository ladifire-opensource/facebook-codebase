__d("ImageCore.react", ["Bootloader", "EncryptedImgUtils", "FBLogger", "React", 
	"SubscriptionsHandler", "URI", "coerceImageishSprited", "coerceImageishURL", 
	"createCancelableFunction", "getImageSourceURLFromImageish", "ifRequired", 
	"joinClasses", "validateImageSrcPropType", "warnUnsupportedProp"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React");
	c = {
		alt: ""
	};

	function i(a) {
		return a instanceof(g || (g = b("URI"))) ? a.toString() : a
	}
	var j = function (c) {
		babelHelpers.inheritsLoose(a, c);

		function a() {
			var a, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (a = d = c.call.apply(c, [this].concat(f)) || this, d.$1 = !1, d.$2 = null, d.$3 = new(b("SubscriptionsHandler"))(), d.state = {
				decryptedSrc: null
			}, a) || babelHelpers.assertThisInitialized(d)
		}
		var d = a.prototype;
		d.$4 = function (a) {
			var c = this;
			this.$2 && this.$2.cancel();
			var d = b("getImageSourceURLFromImageish")(this.props.encryptedSrc),
				e = b("createCancelableFunction")(function (a) {
					d === b("getImageSourceURLFromImageish")(c.props.encryptedSrc) && c.setState({
						decryptedSrc: a
					})
				});
			a.load(d, e);
			this.$3.addSubscriptions({
				remove: function () {
					e.cancel()
				}
			});
			this.$2 = e
		};
		d.$5 = function () {
			var a = this;
			b("ifRequired")("EncryptedImg", function (b) {
				a.$4(b)
			}, function () {
				if (a.$1) return;
				a.$1 = !0;
				a.$3.addSubscriptions(b("Bootloader").loadModules(["EncryptedImg"], function (b) {
					return a.$4(b)
				}, "ImageCore.react"))
			})
		};
		d.componentDidMount = function () {
			this.$5()
		};
		d.componentDidUpdate = function (a) {
			a.encryptedSrc !== this.props.encryptedSrc && this.$5()
		};
		d.componentWillUnmount = function () {
			this.$3.release()
		};
		d.render = function () {
			var a = this.props,
				c = a.encryptedSrc,
				d = a.forwardedRef;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["encryptedSrc", "forwardedRef"]);
			var e = this.state.decryptedSrc;
			b("EncryptedImgUtils").isEncrypted(c) === !1 && (b("FBLogger")("image").mustfix("The `EncryptedImage` component was rendered with a non-encrypted image (%s). Only images that meet the encrypted image test (see `EncryptedImgUtils.isEncrypted()`) should be rendered with this component. Falling back to `ImageishRenderer`.", JSON.stringify(c)), e = c);
			return h.jsx(k, babelHelpers["extends"]({}, a, {
				forwardedRef: d,
				src: e
			}))
		};
		return a
	}(h.Component);
	j.defaultProps = c;
	j.propTypes = {
		encryptedSrc: b("validateImageSrcPropType")
	};

	function k(a) {
		var c = a.forwardedRef;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["forwardedRef"]);
		var d = b("joinClasses")(a.className, "img"),
			e = i(a.src);
		if (e == null) return h.jsx("img", babelHelpers["extends"]({}, a, {
			className: d,
			ref: c
		}));
		var f = b("coerceImageishSprited")(e),
			g = !!f && a.alt != null && String(a.alt) !== "" ? h.jsx("u", {
				children: a.alt
			}) : null;
		if (typeof e === "string") return h.jsx("img", babelHelpers["extends"]({}, a, {
			className: d,
			ref: c,
			src: e,
			children: g
		}));
		if (f) {
			var j = f.spriteCssClass;
			f = f.spriteMapCssClass;
			a.src;
			var k = babelHelpers.objectWithoutPropertiesLoose(a, ["src"]);
			return h.jsx("i", babelHelpers["extends"]({}, k, {
				className: b("joinClasses")(d, f, j),
				ref: c,
				children: g
			}))
		}
		k = b("getImageSourceURLFromImageish")(e);
		f = b("coerceImageishURL")(e);
		return a.width === void 0 && a.height === void 0 && f ? h.jsx("img", babelHelpers["extends"]({}, a, {
			className: d,
			height: f.height,
			src: k,
			ref: c,
			width: f.width,
			children: g
		})) : h.jsx("img", babelHelpers["extends"]({}, a, {
			className: d,
			ref: c,
			src: k,
			children: g
		}))
	}
	k.defaultProps = c;
	k.propTypes = {
		src: b("validateImageSrcPropType")
	};

	function a(a, c) {
		Object.prototype.hasOwnProperty.call(a, "source") && b("warnUnsupportedProp")("ImageCore", "source", "Did you mean `src`?");
		var d = i(a.src);
		d = b("getImageSourceURLFromImageish")(d);
		if (b("EncryptedImgUtils").isEncrypted(d)) {
			a.src;
			var e = babelHelpers.objectWithoutPropertiesLoose(a, ["src"]);
			return h.jsx(j, babelHelpers["extends"]({}, e, {
				encryptedSrc: d,
				forwardedRef: c
			}))
		} else return h.jsx(k, babelHelpers["extends"]({}, a, {
			forwardedRef: c
		}))
	}
	a.displayName = "ImageCore";
	d = h.forwardRef(a);
	e.exports = d
}), null);