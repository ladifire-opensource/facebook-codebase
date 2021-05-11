if (self.CavalryLogger) {
    CavalryLogger.start_js(["emyYf"]);
}

__d("AbstractTextField.react", ["cx", "Keys", "React", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                focused: !1,
                value: d.props.defaultValue || ""
            },
            d.onInputKeyDown = function(a) {
                var c = d.props
                  , e = a.keyCode
                  , f = a.shiftKey;
                e === b("Keys").BACKSPACE && !f && c.onBackspace ? c.onBackspace(a) : e === b("Keys").TAB && !f && c.onTab ? c.onTab(a) : e === b("Keys").TAB && f && c.onBackTab ? c.onBackTab(a) : e === b("Keys").UP ? f ? c.onShiftUpArrow && c.onShiftUpArrow(a) : c.onUpArrow && c.onUpArrow(a) : e === b("Keys").DOWN && c.onDownArrow ? f ? c.onShiftDownArrow && c.onShiftDownArrow(a) : c.onDownArrow && c.onDownArrow(a) : e === b("Keys").LEFT && c.onLeftArrow ? c.onLeftArrow(a) : e === b("Keys").RIGHT && c.onRightArrow ? c.onRightArrow(a) : e === b("Keys").RETURN ? (c.onEnter && c.onEnter(a),
                f ? c.onShiftEnter && c.onShiftEnter(a) : c.onNoShiftEnter && c.onNoShiftEnter(a)) : e === b("Keys").ESC && c.onEscape ? c.onEscape(a) : e == b("Keys").COMMA && c.onComma ? c.onComma(a) : e == b("Keys").SPACE && c.onSpace && c.onSpace(a);
                c.onKeyDown && c.onKeyDown(a)
            }
            ,
            d.onInputChange = function(a) {
                d.props.onChange && d.props.onChange(a),
                d.props.value == null && d.setState({
                    value: a.currentTarget.value
                })
            }
            ,
            d.onInputBlur = function(a) {
                d.props.onBlur && d.props.onBlur(a),
                a.isDefaultPrevented() || d.setState({
                    focused: !1
                })
            }
            ,
            d.onInputFocus = function(a) {
                d.props.onFocus && d.props.onFocus(a),
                a.isDefaultPrevented() || d.setState({
                    focused: !0
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.getValue = function() {
            return this.props.value != null ? String(this.props.value) : this.state.value
        }
        ;
        d.getHint = function() {
            return this.props.hint != null ? String(this.props.hint) : ""
        }
        ;
        d.cloneElement = function(a) {
            var c = this.getHint() ? this.getHint() : this.getValue()
              , d = a.props != null && typeof a.props === "object" ? a.props : {}
              , e = typeof d.className === "string" ? d.className : void 0;
            d = typeof d.type === "string" ? d.type : void 0;
            return h.cloneElement(a, {
                "aria-activedescendant": this.props["aria-activedescendant"],
                "aria-autocomplete": this.props["aria-autocomplete"],
                "aria-controls": this.props["aria-controls"],
                "aria-describedby": this.props["aria-describedby"],
                "aria-errormessage": this.props["aria-errormessage"],
                "aria-invalid": this.props["aria-invalid"],
                "aria-label": this.props["aria-label"],
                "aria-labelledby": this.props["aria-labelledby"],
                "aria-multiline": this.props["aria-multiline"],
                "aria-owns": this.props["aria-owns"],
                "aria-expanded": this.props["aria-expanded"],
                "aria-valuenow": this.props["aria-valuenow"],
                "aria-valuetext": this.props["aria-valuetext"],
                "data-testid": this.props["data-testid"],
                required: this.props.required,
                role: this.props.role,
                placeholder: this.props.placeholder,
                autoCapitalize: this.props.autoCapitalize,
                autoComplete: this.props.autoComplete,
                autoCorrect: this.props.autoCorrect,
                autoFocus: this.props.autoFocus,
                onKeyDown: this.onInputKeyDown,
                onKeyUp: this.props.onKeyUp,
                onBlur: this.onInputBlur,
                onFocus: this.onInputFocus,
                onChange: this.onInputChange,
                onInput: this.props.onInput,
                onPaste: this.props.onPaste,
                onWheel: this.props.onWheel,
                className: this.props.useLabel ? e : b("joinClasses")(e, this.props.className),
                dir: this.props.dir,
                disabled: this.props.disabled,
                defaultValue: this.props.defaultValue,
                name: this.props.name,
                value: c,
                id: this.props.id,
                maxLength: this.props.maxLength,
                min: this.props.min,
                max: this.props.max,
                step: this.props.step,
                pattern: this.props.pattern,
                style: this.props.style,
                title: this.props.title,
                type: Boolean(this.props.type) ? this.props.type : d,
                spellCheck: this.props.spellCheck
            })
        }
        ;
        d.render = function() {
            var a = h.Children.only(this.props.children);
            if (!this.props.useLabel)
                return this.cloneElement(a);
            var c = this.props.className;
            this.props.classNames && (c = b("joinClasses")(c, this.props.classNames.root),
            this.getValue() || (c = b("joinClasses")(c, this.props.classNames.empty)));
            return h.jsxs("label", {
                className: c,
                style: this.props.styles.label,
                children: [this.props.leftChild, this.cloneElement(a), this.props.rightChild]
            })
        }
        ;
        return c
    }(h.Component);
    a.defaultProps = {
        useLabel: !0,
        classNames: {
            root: "_58ak",
            empty: "_3ct8"
        },
        styles: {
            label: null
        }
    };
    a.propTypes = {
        useLabel: (c = b("prop-types")).bool,
        hint: c.string,
        leftChild: c.node,
        rightChild: c.node,
        classNames: c.shape({
            root: c.string.isRequired,
            empty: c.string.isRequired
        }),
        styles: c.shape({
            label: c.object
        }),
        "aria-activedescendant": c.string,
        "aria-autocomplete": c.string,
        "aria-controls": c.string,
        "aria-describedby": c.string,
        "aria-errormessage": c.string,
        "aria-invalid": c.oneOf(["grammar", "false", "spelling", "true"]),
        "aria-label": c.node,
        "aria-labelledby": c.string,
        "aria-multiline": c.bool,
        "aria-owns": c.string,
        "aria-expanded": c.bool,
        "aria-valuenow": c.number,
        "aria-valuetext": c.string,
        "data-testid": c.string,
        autoComplete: c.string,
        autoFocus: c.bool,
        className: c.string,
        defaultValue: c.string,
        dir: c.string,
        disabled: c.bool,
        id: c.string,
        max: c.oneOfType([c.number, c.string]),
        maxLength: c.number,
        min: c.string,
        name: c.string,
        onBackspace: c.func,
        onBackTab: c.func,
        onBlur: c.func,
        onChange: c.func,
        onClick: c.func,
        onComma: c.func,
        onDownArrow: c.func,
        onEnter: c.func,
        onEscape: c.func,
        onFocus: c.func,
        onKeyDown: c.func,
        onKeyPress: c.func,
        onKeyUp: c.func,
        onLeftArrow: c.func,
        onNoShiftEnter: c.func,
        onPaste: c.func,
        onRightArrow: c.func,
        onShiftDownArrow: c.func,
        onShiftEnter: c.func,
        onShiftUpArrow: c.func,
        onSpace: c.func,
        onTab: c.func,
        onUpArrow: c.func,
        onWheel: c.func,
        pattern: c.string,
        placeholder: c.node,
        required: c.bool,
        role: c.string,
        step: c.string,
        style: c.object,
        tabIndex: c.number,
        title: c.string,
        type: c.string,
        value: c.string,
        spellCheck: c.bool,
        autoCapitalize: c.string,
        autoCorrect: c.string
    };
    e.exports = a
}
), null);
__d("TextInputControl", ["DOMControl", "Event", "Input", "debounce"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            c = a.call(this, c) || this;
            var d = c.getRoot()
              , e = b("debounce")(c.update.bind(babelHelpers.assertThisInitialized(c)), 0);
            b("Event").listen(d, {
                input: e,
                keydown: e,
                paste: e
            });
            return c
        }
        var d = c.prototype;
        d.setMaxLength = function(a) {
            b("Input").setMaxLength(this.getRoot(), a);
            return this
        }
        ;
        d.getValue = function() {
            return b("Input").getValue(this.getRoot())
        }
        ;
        d.isEmpty = function() {
            return b("Input").isEmpty(this.getRoot())
        }
        ;
        d.setValue = function(a) {
            b("Input").setValue(this.getRoot(), a);
            this.update();
            return this
        }
        ;
        d.clear = function() {
            return this.setValue("")
        }
        ;
        d.setPlaceholderText = function(a) {
            b("Input").setPlaceholder(this.getRoot(), a);
            return this
        }
        ;
        return c
    }(b("DOMControl"));
    e.exports = a
}
), null);
__d("transferTextStyles", ["Style"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = {
        fontFamily: null,
        fontSize: null,
        fontStyle: null,
        fontWeight: null,
        lineHeight: null,
        wordWrap: null
    };
    function a(a, c) {
        for (var d in g)
            Object.prototype.hasOwnProperty.call(g, d) && (g[d] = b("Style").get(a, d));
        b("Style").apply(c, g)
    }
}
), null);
__d("TextMetrics", ["DOM", "Style", "UserAgent", "transferTextStyles"], (function(a, b, c, d, e, f) {
    function g(a) {
        var c = a.clientWidth
          , d = b("Style").get(a, "-moz-box-sizing") == "border-box";
        if (d && b("UserAgent").isBrowser("Firefox < 29"))
            return c;
        d = b("Style").getFloat(a, "paddingLeft") + b("Style").getFloat(a, "paddingRight");
        return c - d
    }
    a = function() {
        function a(a, c) {
            this.$1 = a;
            this.$2 = !!c;
            c = "textarea";
            var d = "textMetrics";
            this.$2 && (c = "div",
            d += " textMetricsInline");
            this.$3 = b("DOM").create(c, {
                className: d
            });
            b("transferTextStyles")(a, this.$3);
            (c = document.body) == null ? void 0 : c.appendChild(this.$3)
        }
        var c = a.prototype;
        c.measure = function(a) {
            var c = this.$1
              , d = this.$3;
            a = ((a = a) != null ? a : c.value) + "...";
            if (!this.$2) {
                var e = g(c);
                b("Style").set(d, "width", Math.max(e, 0) + "px")
            }
            c.nodeName === "TEXTAREA" && d instanceof HTMLTextAreaElement ? d.value = a : b("DOM").setContent(d, a);
            return {
                width: d.scrollWidth,
                height: d.scrollHeight
            }
        }
        ;
        c.destroy = function() {
            b("DOM").remove(this.$3)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("TextAreaControl", ["Arbiter", "ArbiterMixin", "CSS", "DOMControl", "Event", "Style", "TextInputControl", "TextMetrics", "classWithMixins", "mixin"], (function(a, b, c, d, e, f) {
    function g(a, c) {
        return b("Style").getFloat(a, c) || 0
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.autogrow = b("CSS").hasClass(c, "uiTextareaAutogrow");
            d.autogrowWithPlaceholder = b("CSS").hasClass(c, "uiTextareaAutogrowWithPlaceholder");
            d.width = null;
            b("Event").listen(c, "focus", d._handleFocus.bind(babelHelpers.assertThisInitialized(d)));
            return d
        }
        var d = c.prototype;
        d.setAutogrow = function(a) {
            this.autogrow = a;
            return this
        }
        ;
        d.onupdate = function() {
            a.prototype.onupdate.call(this),
            this.updateHeight()
        }
        ;
        d.updateHeight = function() {
            if (this.autogrow) {
                var a = this.getRoot();
                this.metrics || (this.metrics = new (b("TextMetrics"))(a));
                typeof this.initialHeight === "undefined" && (this.isBorderBox = b("Style").get(a, "box-sizing") === "border-box" || b("Style").get(a, "-moz-box-sizing") === "border-box" || b("Style").get(a, "-webkit-box-sizing") === "border-box",
                this.borderBoxOffset = g(a, "padding-top") + g(a, "padding-bottom") + g(a, "border-top-width") + g(a, "border-bottom-width"),
                this.initialHeight = a.offsetHeight - this.borderBoxOffset);
                var c;
                (!a.value || a.value.length === 0) && this.autogrowWithPlaceholder ? c = this.metrics.measure(a.placeholder) : c = this.metrics.measure();
                c = Math.max(this.initialHeight, c.height);
                this.isBorderBox && (c += this.borderBoxOffset);
                this.maxHeight && c > this.maxHeight && (c = this.maxHeight,
                b("Arbiter").inform("maxHeightExceeded", {
                    textArea: a
                }));
                c !== this.height && (this.height = c,
                b("Style").set(a, "height", c + "px"),
                b("Arbiter").inform("reflow"),
                this.inform("resize"))
            } else
                this.metrics && (this.metrics.destroy(),
                this.metrics = null)
        }
        ;
        d.resetHeight = function() {
            this.height = -1,
            this.update()
        }
        ;
        d.setMaxHeight = function(a) {
            this.maxHeight = a
        }
        ;
        d.setAutogrowWithPlaceholder = function(a) {
            this.autogrowWithPlacedholder = a
        }
        ;
        d._handleFocus = function() {
            this.width = null
        }
        ;
        c.getInstance = function(a) {
            return b("DOMControl").getInstance(a) || new c(a)
        }
        ;
        return c
    }(b("classWithMixins")(b("TextInputControl"), b("mixin")(b("ArbiterMixin"))));
    e.exports = a
}
), null);
__d("AbstractTextArea.react", ["cx", "AbstractTextField.react", "React", "TextAreaControl", "mergeRefs", "prop-types"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$5 = function(a) {
                d.$1 = a,
                d.$6(),
                b("mergeRefs")(d.props.textareaRef)(a)
            }
            ,
            d.$7 = function() {
                d.$2 && d.$2.onupdate()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidUpdate = function() {
            this.$4()
        }
        ;
        d.componentWillUnmount = function() {
            window.cancelAnimationFrame(this.$3),
            this.$3 = null,
            this.$2 = null
        }
        ;
        d.render = function() {
            var a = this.props;
            a.autoGrow;
            a.textareaRef;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["autoGrow", "textareaRef"]);
            return h.jsx(b("AbstractTextField.react"), babelHelpers["extends"]({}, a, {
                children: h.jsx("textarea", {
                    className: "_58an",
                    onClick: this.props.onClick,
                    onMouseDown: this.props.onMouseDown,
                    onKeyUp: this.props.onKeyUp,
                    rows: this.props.rows,
                    tabIndex: this.props.tabIndex,
                    ref: this.$5
                })
            }))
        }
        ;
        d.$4 = function() {
            this.$1 && this.$1.offsetParent != null ? this.$7() : (window.cancelAnimationFrame(this.$3),
            this.$3 = window.requestAnimationFrame(this.$7))
        }
        ;
        d.$6 = function() {
            if (this.$1 && this.props.autoGrow && !this.$2) {
                var a = new (b("TextAreaControl"))(this.$1);
                a.setAutogrow(!0);
                this.$4();
                this.$2 = a
            }
        }
        ;
        d.focusInput = function() {
            this.$1 && this.$1.focus()
        }
        ;
        d.blurInput = function() {
            this.$1 && this.$1.blur()
        }
        ;
        d.getTextFieldDOM = function() {
            return this.$1
        }
        ;
        d.getValue = function() {
            return this.$1 ? this.$1.value : ""
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = babelHelpers["extends"]({}, b("AbstractTextField.react").propTypes, {
        autoGrow: b("prop-types").bool
    })
}
), null);
__d("List.react", ["cx", "React", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.className
              , d = a.border
              , e = a.direction
              , f = a.spacing
              , g = a.valign
              , i = a.edgepadding;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["className", "border", "direction", "spacing", "valign", "edgepadding"]);
            e === "vertical" && (g = null);
            e = (e === "vertical" ? "_4kg" : "") + (e === "horizontal" ? " _4ki" : "") + (g === "top" ? " _509-" : "") + (g === "middle" ? " _509_" : "") + (g === "bottom" ? " _50a0" : "");
            var j;
            (f !== "none" || d !== "none") && (j = (d === "none" ? "_6-i" : "") + (d === "light" ? " _4ks" : "") + (d === "medium" ? " _4kt" : "") + (d === "dark" ? " _4ku" : ""));
            var k;
            f !== "none" && (k = (i ? "" : "_6-h") + (f === "small" ? " _704" : "") + (f === "medium" ? " _6-j" : "") + (f === "large" ? " _703" : ""));
            c = b("joinClasses")(c, "uiList", e, j, k);
            return h.jsx("ul", babelHelpers["extends"]({
                className: c
            }, a))
        }
        ;
        return c
    }(h.Component);
    a.propTypes = {
        border: (c = b("prop-types")).oneOf(["none", "light", "medium", "dark"]),
        spacing: c.oneOf(["none", "small", "medium", "large"]),
        direction: c.oneOf(["vertical", "horizontal"]),
        valign: c.oneOf(["baseline", "top", "middle", "bottom"]),
        edgepadding: c.bool
    };
    a.defaultProps = {
        border: "medium",
        spacing: "medium",
        direction: "vertical",
        valign: "top",
        edgepadding: !1
    };
    e.exports = a
}
), null);
