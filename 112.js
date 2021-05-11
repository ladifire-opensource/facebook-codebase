if (self.CavalryLogger) {
    CavalryLogger.start_js(["C+our"]);
}

__d("Dialog", ["fbt", "Animation", "Arbiter", "AsyncRequest", "Button", "ContextualThing", "CSS", "DOM", "Env", "Event", "Focus", "Form", "HTML", "Keys", "Locale", "PageTransitions", "Parent", "Run", "Style", "URI", "Vector", "bind", "createArrayFromMixed", "emptyFunction", "getObjectValues", "getOverlayZIndex", "removeFromArray", "shield"], (function $module_Dialog(global, require, requireDynamic, requireLazy, module, exports, fbt) {
    var c_Env, c_URI, _supportsPositionFixed2 = function _supportsPositionFixed() {
        var body = document.body;
        if (!body)
            return !1;
        var test = document.createElement("div")
          , control = document.createElement("div");
        body.insertBefore(test, body.firstChild);
        body.insertBefore(control, body.firstChild);
        test.style.position = "fixed";
        test.style.top = "20px";
        var result = test.offsetTop !== control.offsetTop;
        body.removeChild(test);
        body.removeChild(control);
        _supportsPositionFixed2 = require("emptyFunction").thatReturns(result);
        return result
    }, Dialog = function() {
        function Dialog(model) {
            this._show_loading = !0,
            this._auto_focus = !0,
            this._submit_on_enter = !1,
            this._fade_enabled = !0,
            this._onload_handlers = [],
            this._top = 125,
            this._uniqueID = "dialog_" + Dialog._globalCount++,
            this._content = null,
            this._obj = null,
            this._popup = null,
            this._overlay = null,
            this._causal_elem = null,
            this._previous_focus = null,
            this._buttons = [],
            this._buildDialog(),
            model && this._setFromModel(model),
            Dialog._init()
        }
        var _proto = Dialog.prototype;
        _proto.show = function show() {
            this._showing = !0;
            this._async_request ? this._show_loading && this.showLoading() : this._update();
            return this
        }
        ;
        _proto.showLoading = function showLoading() {
            this._loading = !0;
            require("CSS").addClass(this._frame, "dialog_loading_shown");
            this._renderDialog();
            return this
        }
        ;
        _proto.hide = function hide() {
            if (!this._showing && !this._loading)
                return this;
            this._showing = !1;
            this._autohide_timeout && (clearTimeout(this._autohide_timeout),
            this._autohide_timeout = null);
            this._fade_enabled && Dialog._stack.length <= 1 ? this._fadeOut() : this._hide();
            return this
        }
        ;
        _proto.cancel = function cancel() {
            (!this._cancelHandler || this._cancelHandler() !== !1) && this.hide()
        }
        ;
        _proto.getRoot = function getRoot() {
            return this._obj
        }
        ;
        _proto.getBody = function getBody() {
            return require("DOM").scry(this._obj, "div.dialog_body")[0]
        }
        ;
        _proto.getButtonElement = function getButtonElement(button) {
            typeof button === "string" && (button = Dialog._findButton(this._buttons, button));
            if (!button || !button.name)
                return null;
            var inputs = require("DOM").scry(this._popup, "input")
              , name_filter = function name_filter(elem) {
                return elem.name == button.name
            };
            return inputs.filter(name_filter)[0] || null
        }
        ;
        _proto.getContentNode = function getContentNode() {
            return require("DOM").find(this._content, "div.dialog_content")
        }
        ;
        _proto.getFormData = function getFormData() {
            return require("Form").serialize(this.getContentNode())
        }
        ;
        _proto.setAllowCrossPageTransition = function setAllowCrossPageTransition(allow) {
            this._cross_transition = allow;
            return this
        }
        ;
        _proto.setAllowCrossQuicklingNavigation = function setAllowCrossQuicklingNavigation(allow) {
            this._cross_quickling = allow;
            return this
        }
        ;
        _proto.setShowing = function setShowing() {
            this.show();
            return this
        }
        ;
        _proto.setHiding = function setHiding() {
            this.hide();
            return this
        }
        ;
        _proto.setTitle = function setTitle(title) {
            var node = this._nodes.title
              , inner_node = this._nodes.title_inner
              , content_node = this._nodes.content;
            require("DOM").setContent(inner_node, this._format(title || "", !0));
            require("CSS").conditionShow(node, !!title);
            require("CSS").conditionClass(content_node, "dialog_content_titleless", !title);
            return this
        }
        ;
        _proto.setInvertTitleColor = function setInvertTitleColor(invert) {
            invert ? this._nodes.title.className = "dialog_title_inverted" : this._nodes.title.className = "dialog_title";
            return this
        }
        ;
        _proto.setBody = function setBody(body) {
            require("DOM").setContent(this._nodes.body, this._format(body));
            return this
        }
        ;
        _proto.setHiddenFields = function setHiddenFields(hidden_fields) {
            require("DOM").setContent(this._nodes.hidden_fields, this._format(hidden_fields));
            return this
        }
        ;
        _proto.setExtraData = function setExtraData(data) {
            this._extra_data = data;
            return this
        }
        ;
        _proto.setReturnData = function setReturnData(data) {
            this._return_data = data;
            return this
        }
        ;
        _proto.setShowLoading = function setShowLoading(show) {
            this._show_loading = show;
            return this
        }
        ;
        _proto.setFullBleed = function setFullBleed(is_full_bleed) {
            this._full_bleed = is_full_bleed;
            this._updateWidth();
            require("CSS").conditionClass(this._obj, "full_bleed", is_full_bleed);
            return this
        }
        ;
        _proto.setCausalElement = function setCausalElement(elem) {
            this._causal_elem = elem;
            return this
        }
        ;
        _proto.setUserData = function setUserData(data) {
            this._user_data = data;
            return this
        }
        ;
        _proto.getUserData = function getUserData() {
            return this._user_data
        }
        ;
        _proto.setAutohide = function setAutohide(autohide) {
            autohide ? this._showing ? this._autohide_timeout = setTimeout(require("shield")(this.hide, this), autohide) : this._autohide = autohide : (this._autohide = null,
            this._autohide_timeout && (clearTimeout(this._autohide_timeout),
            this._autohide_timeout = null));
            return this
        }
        ;
        _proto.setSummary = function setSummary(summary) {
            var node = this._nodes.summary;
            require("DOM").setContent(node, this._format(summary || ""));
            require("CSS").conditionShow(node, !!summary);
            return this
        }
        ;
        _proto.setButtons = function setButtons(b) {
            var buttons, button;
            !Array.isArray(b) ? buttons = Array.from(arguments) : buttons = b;
            for (var i = 0; i < buttons.length; ++i) {
                var currButton = buttons[i];
                typeof currButton === "string" && (button = Dialog._findButton(Dialog._STANDARD_BUTTONS, currButton),
                buttons[i] = button)
            }
            this._buttons = buttons;
            var button_content = [];
            if (buttons && buttons.length > 0)
                for (var ii = 0; ii < buttons.length; ii++) {
                    button = buttons[ii];
                    if (!button)
                        continue;
                    var button_input = require("DOM").create("input", {
                        type: "button",
                        name: button.name || "",
                        value: button.label
                    })
                      , button_node = require("DOM").create("label", {
                        className: "uiButton uiButtonLarge uiButtonConfirm"
                    }, button_input);
                    button.className && (button.className.split(/\s+/).forEach(function(e) {
                        require("CSS").addClass(button_node, e)
                    }),
                    require("CSS").hasClass(button_node, "inputaux") && (require("CSS").removeClass(button_node, "inputaux"),
                    require("CSS").removeClass(button_node, "uiButtonConfirm")),
                    require("CSS").hasClass(button_node, "uiButtonSpecial") && require("CSS").removeClass(button_node, "uiButtonConfirm"));
                    button.icon && require("DOM").prependContent(button_node, require("DOM").create("img", {
                        src: button.icon,
                        className: "img mrs"
                    }));
                    button.disabled && require("Button").setEnabled(button_node, !1);
                    require("Event").listen(button_input, "click", this._handleButton.bind(this, button.name));
                    for (var attr in button)
                        attr.indexOf("data-") === 0 && attr.length > 5 && button_input.setAttribute(attr, button[attr]);
                    button_content.push(button_node)
                }
            require("DOM").setContent(this._nodes.buttons, button_content);
            this._updateButtonVisibility();
            return this
        }
        ;
        _proto.setButtonsMessage = function setButtonsMessage(message) {
            require("DOM").setContent(this._nodes.button_message, this._format(message || ""));
            this._has_button_message = !!message;
            this._updateButtonVisibility();
            return this
        }
        ;
        _proto._updateButtonVisibility = function _updateButtonVisibility() {
            var show = this._buttons.length > 0 || this._has_button_message;
            require("CSS").conditionShow(this._nodes.button_wrapper, show);
            require("CSS").conditionClass(this._obj, "omitDialogFooter", !show)
        }
        ;
        _proto.setClickButtonOnEnter = function setClickButtonOnEnter(input_id, button) {
            this._clickOnEnterTarget = input_id;
            this._clickOnEnterListener || (this._clickOnEnterListener = require("Event").listen(this._nodes.body, "keypress", function(event) {
                var target = event.getTarget();
                target && target.id === this._clickOnEnterTarget && (require("Event").getKeyCode(event) == require("Keys").RETURN && (this._handleButton(button),
                event.kill()));
                return !0
            }
            .bind(this)));
            return this
        }
        ;
        _proto.setStackable = function setStackable(stackable, shown) {
            this._is_stackable = stackable;
            this._shown_while_stacked = stackable && shown;
            return this
        }
        ;
        _proto.setHandler = function setHandler(handler) {
            this._handler = handler;
            return this
        }
        ;
        _proto.setCancelHandler = function setCancelHandler(cancelHandler) {
            this._cancelHandler = Dialog.call_or_eval.bind(null, this, cancelHandler);
            return this
        }
        ;
        _proto.setCloseHandler = function setCloseHandler(close_handler) {
            this._close_handler = Dialog.call_or_eval.bind(null, this, close_handler);
            return this
        }
        ;
        _proto.clearHandler = function clearHandler() {
            return this.setHandler(null)
        }
        ;
        _proto.setPostURI = function setPostURI(post_uri, asynchronous, useParent) {
            asynchronous === void 0 && (asynchronous = !0);
            if (useParent && (c_Env || (c_Env = require("Env"))).isCQuick) {
                require("PageTransitions").go(post_uri);
                return this
            }
            asynchronous ? this.setHandler(this._submitForm.bind(this, "POST", post_uri)) : this.setHandler(function() {
                require("Form").post(post_uri, this.getFormData()),
                this.hide()
            }
            .bind(this));
            return this
        }
        ;
        _proto.setGetURI = function setGetURI(get_uri) {
            this.setHandler(this._submitForm.bind(this, "GET", get_uri));
            return this
        }
        ;
        _proto.setModal = function setModal(modal) {
            this._modal = modal;
            require("CSS").conditionClass(this._obj, "generic_dialog_modal", modal);
            return this
        }
        ;
        _proto.setSemiModal = function setSemiModal(clickout) {
            clickout ? (this.setModal(!0),
            this._semiModalListener = require("Event").listen(this._obj, "click", function(e) {
                require("DOM").contains(this._popup, e.getTarget()) || this.hide()
            }
            .bind(this))) : this._semiModalListener && this._semiModalListener.remove();
            this._semi_modal = clickout;
            return this
        }
        ;
        _proto.setWideDialog = function setWideDialog(is_wide) {
            this._wide_dialog = is_wide;
            this._updateWidth();
            return this
        }
        ;
        _proto.setContentWidth = function setContentWidth(width) {
            this._content_width = width;
            this._updateWidth();
            return this
        }
        ;
        _proto.setTitleLoading = function setTitleLoading(loading) {
            loading === void 0 && (loading = !0);
            var header = require("DOM").find(this._popup, "h2.dialog_title");
            header && require("CSS").conditionClass(header, "loading", loading);
            return this
        }
        ;
        _proto.setSecure = function setSecure(is_secure) {
            require("CSS").conditionClass(this._nodes.title, "secure", is_secure);
            return this
        }
        ;
        _proto.setClassName = function setClassName(class_name) {
            class_name.split(/\s+/).forEach(require("CSS").addClass.bind(require("CSS"), this._obj));
            return this
        }
        ;
        _proto.setFadeEnabled = function setFadeEnabled(enabled) {
            this._fade_enabled = enabled;
            return this
        }
        ;
        _proto.setFooter = function setFooter(footer) {
            var node = this._nodes.footer;
            require("DOM").setContent(node, this._format(footer || ""));
            require("CSS").conditionShow(node, !!footer);
            return this
        }
        ;
        _proto.setAutoFocus = function setAutoFocus(focus) {
            this._auto_focus = focus;
            return this
        }
        ;
        _proto.setTop = function setTop(top) {
            this._top = top;
            this._resetDialogObj();
            return this
        }
        ;
        _proto.onloadRegister = function onloadRegister(handler) {
            var _this = this;
            require("createArrayFromMixed")(handler).forEach(function(i) {
                typeof i === "string" && (i = new Function(i)),
                _this._onload_handlers.push(i.bind(_this))
            });
            return this
        }
        ;
        _proto.setAsyncURL = function setAsyncURL(url) {
            return this.setAsync(new (require("AsyncRequest"))(url))
        }
        ;
        _proto.setAsync = function setAsync(async_request) {
            var handler = function(response) {
                if (this._async_request != async_request)
                    return;
                this._async_request = null;
                var payload = response.getPayload()
                  , dialog = payload;
                this._loading && (this._showing = !0);
                typeof dialog === "string" ? this.setBody(dialog) : this._setFromModel(dialog);
                this._update()
            }
            .bind(this)
              , data = async_request.getData();
            data.__d = 1;
            async_request.setData(data);
            var orig_handler = async_request.getHandler() || require("emptyFunction");
            async_request.setHandler(function(response) {
                orig_handler(response),
                handler(response)
            });
            var request = async_request
              , orig_error_handler = request.getErrorHandler() || require("emptyFunction")
              , orig_trans_error_handler = request.getTransportErrorHandler() || require("emptyFunction")
              , handle_error = function() {
                this._async_request = null,
                this._loading = !1,
                this._showing && this._shown_while_stacked ? this._update() : this._hide(this._is_stackable)
            }
            .bind(this)
              , server_cancel_handler = request.getServerDialogCancelHandler() || handle_error;
            request.setAllowCrossPageTransition(this._cross_transition).setErrorHandler(function(response) {
                handle_error(),
                orig_error_handler(response)
            }).setTransportErrorHandler(function(response) {
                handle_error(),
                orig_trans_error_handler(response)
            }).setServerDialogCancelHandler(server_cancel_handler);
            async_request.send();
            this._async_request = async_request;
            this._showing && this.show();
            return this
        }
        ;
        _proto._format = function _format(content, sane) {
            sane === void 0 && (sane = !1);
            typeof content === "string" ? sane || (content = require("HTML")(content)) : content = require("HTML").replaceJSONWrapper(content);
            content instanceof require("HTML") && content.setDeferred(!0);
            return content
        }
        ;
        _proto._update = function _update() {
            if (!this._showing)
                return;
            this._autohide && !this._async_request && !this._autohide_timeout && (this._autohide_timeout = setTimeout(require("bind")(this, "hide"), this._autohide));
            require("CSS").removeClass(this._frame, "dialog_loading_shown");
            this._loading = !1;
            this._renderDialog();
            this._runOnloads();
            this._previous_focus = document.activeElement;
            require("Focus").set(this._frame)
        }
        ;
        _proto._runOnloads = function _runOnloads() {
            for (var i = 0; i < this._onload_handlers.length; ++i)
                try {
                    this._onload_handlers[i]()
                } catch (_unused) {}
            this._onload_handlers = []
        }
        ;
        _proto._updateWidth = function _updateWidth() {
            var dialog_width = 2 * (Dialog._BORDER_WIDTH + Dialog._HALO_WIDTH);
            this._content_width ? (dialog_width += this._content_width,
            this._full_bleed || (dialog_width += 2 * Dialog._PADDING_WIDTH)) : this._wide_dialog ? dialog_width += Dialog.SIZE.WIDE : dialog_width += Dialog.SIZE.STANDARD;
            this._popup.style.width = dialog_width + "px"
        }
        ;
        _proto._updateZIndex = function _updateZIndex() {
            if (!this._hasSetZIndex && this._causal_elem) {
                var z_index = require("getOverlayZIndex")(this._causal_elem)
                  , node = this._causal_elem;
                while (!z_index && (node = require("ContextualThing").getContext(node)))
                    z_index = require("getOverlayZIndex")(node);
                this._hasSetZIndex = z_index > (this._modal ? 400 : 200);
                require("Style").set(this._obj, "z-index", this._hasSetZIndex ? z_index : "")
            }
        }
        ;
        _proto._renderDialog = function _renderDialog() {
            this._updateZIndex();
            this._pushOntoStack();
            this._obj.style.height = null;
            this._obj && this._obj.style.display ? (this._obj.style.visibility = "hidden",
            this._obj.style.display = "",
            this.resetDialogPosition(),
            this._obj.style.visibility = "",
            this._obj.dialog = this) : this.resetDialogPosition();
            clearInterval(this.active_hiding);
            this.active_hiding = setInterval(this._activeResize.bind(this), 500);
            this._submit_on_enter = !1;
            if (this._auto_focus) {
                var input = require("Form").getFirstElement(this._content, ['input[type="text"]', "textarea", 'input[type="password"]']);
                input ? setTimeout(require("Form").focusFirst.bind(this, this._content), 0) : this._submit_on_enter = !0
            }
            var bottom = require("Vector").getElementDimensions(this._content).y + require("Vector").getElementPosition(this._content).y;
            Dialog._bottoms.push(bottom);
            this._bottom = bottom;
            Dialog._updateMaxBottom();
            return this
        }
        ;
        _proto._buildDialog = function _buildDialog() {
            this._obj = require("DOM").create("div", {
                className: "generic_dialog",
                id: this._uniqueID
            });
            this._obj.style.display = "none";
            require("DOM").appendContent(document.body, this._obj);
            this._popup || (this._popup = require("DOM").create("div", {
                className: "generic_dialog_popup"
            }));
            this._obj.appendChild(this._popup);
            require("CSS").addClass(this._obj, "pop_dialog");
            require("Locale").isRTL() && require("CSS").addClass(this._obj, "pop_dialog_rtl");
            require("DOM").setContent(this._popup, require("DOM").create("div", {
                className: "pop_container_advanced"
            }, require("DOM").create("div", {
                className: "pop_content",
                id: "pop_content"
            })));
            var frame = require("DOM").find(this._popup, "div.pop_content");
            frame.setAttribute("tabIndex", "0");
            frame.setAttribute("role", "alertdialog");
            this._frame = this._content = frame;
            var loading = require("DOM").create("div", {
                className: "dialog_loading"
            }, fbt._("\u0110ang t\u1ea3i..."))
              , title_inner = require("DOM").create("span")
              , title = require("DOM").create("h2", {
                className: "dialog_title hidden_elem",
                id: "title_" + this._uniqueID
            }, title_inner)
              , summary = require("DOM").create("div", {
                className: "dialog_summary hidden_elem"
            })
              , body = require("DOM").create("div", {
                className: "dialog_body"
            })
              , buttons = require("DOM").create("div", {
                className: "rfloat mlm"
            })
              , button_message = require("DOM").create("div", {
                className: "dialog_buttons_msg"
            })
              , button_wrapper = require("DOM").create("div", {
                className: "dialog_buttons clearfix hidden_elem"
            }, [buttons, button_message])
              , footer = require("DOM").create("div", {
                className: "dialog_footer hidden_elem"
            })
              , hidden_fields = require("DOM").create("div", {
                className: "hidden_elem"
            })
              , content = require("DOM").create("div", {
                className: "dialog_content"
            }, [summary, body, button_wrapper, footer, hidden_fields]);
            this._nodes = {
                summary: summary,
                body: body,
                buttons: buttons,
                button_message: button_message,
                button_wrapper: button_wrapper,
                footer: footer,
                hidden_fields: hidden_fields,
                content: content,
                title: title,
                title_inner: title_inner
            };
            require("DOM").setContent(this._frame, [title, content, loading])
        }
        ;
        _proto._activeResize = function _activeResize() {
            this.last_offset_height != this._content.offsetHeight && (this.last_offset_height = this._content.offsetHeight,
            this.resetDialogPosition())
        }
        ;
        _proto.resetDialogPosition = function resetDialogPosition() {
            if (!this._popup)
                return;
            this._resetDialogObj()
        }
        ;
        _proto._resetDialogObj = function _resetDialogObj() {
            var total_margin = 2 * Dialog._PAGE_MARGIN
              , viewport_dimensions = require("Vector").getViewportDimensions()
              , viewport_width = viewport_dimensions.x - total_margin
              , viewport_height = viewport_dimensions.y - total_margin
              , total_halo_width = 2 * Dialog._HALO_WIDTH
              , content_dimensions = require("Vector").getElementDimensions(this._content)
              , content_width = content_dimensions.x + total_halo_width
              , content_height = content_dimensions.y + total_halo_width
              , top = this._top
              , empty_horiz_space = viewport_width - content_width
              , empty_vertical_space = viewport_height - content_height;
            empty_vertical_space < 0 ? top = Dialog._PAGE_MARGIN : top > empty_vertical_space && (top = Dialog._PAGE_MARGIN + Math.max(empty_vertical_space, 0) / 2);
            var is_fixed = _supportsPositionFixed2();
            is_fixed || (top += require("Vector").getScrollPosition().y);
            require("Style").set(this._popup, "marginTop", top + "px");
            var scroll = is_fixed && (empty_horiz_space < 0 || empty_vertical_space < 0);
            require("CSS").conditionClass(this._obj, "generic_dialog_fixed_overflow", scroll);
            var documentEl = document.documentElement;
            documentEl && require("CSS").conditionClass(documentEl, "generic_dialog_overflow_mode", scroll)
        }
        ;
        _proto._fadeOut = function _fadeOut(temporary) {
            if (!this._popup)
                return;
            try {
                new (require("Animation"))(this._obj).duration(0).checkpoint().to("opacity", 0).hide().duration(250).ondone(this._hide.bind(this, temporary)).go()
            } catch (_unused2) {
                this._hide(temporary)
            }
        }
        ;
        _proto._hide = function _hide(temporary) {
            this._obj && (this._obj.style.display = "none");
            var documentEl = document.documentElement;
            documentEl && require("CSS").removeClass(documentEl, "generic_dialog_overflow_mode");
            clearInterval(this.active_hiding);
            if (this._bottom) {
                var bs = Dialog._bottoms;
                bs.splice(bs.indexOf(this._bottom), 1);
                Dialog._updateMaxBottom()
            }
            this._previous_focus && document.activeElement && require("DOM").contains(this._obj, document.activeElement) && require("Focus").set(this._previous_focus);
            if (temporary)
                return;
            this.destroy()
        }
        ;
        _proto.destroy = function destroy() {
            this._popFromStack(),
            clearInterval(this.active_hiding),
            this._obj && (require("DOM").remove(this._obj),
            this._obj = null),
            this._clickOnEnterListener && this._clickOnEnterListener.remove(),
            this._close_handler && this._close_handler({
                return_data: this._return_data
            })
        }
        ;
        _proto._handleButton = function _handleButton(button) {
            typeof button === "string" && (button = Dialog._findButton(this._buttons, button));
            if (!button)
                return;
            var value = Dialog.call_or_eval(button, button.handler);
            if (value === !1)
                return;
            button.name == "cancel" ? this.cancel() : Dialog.call_or_eval(this, this._handler, {
                button: button
            }) !== !1 && this.hide()
        }
        ;
        _proto._submitForm = function _submitForm(method, uri, button) {
            var data = this.getFormData();
            button && (data[button.name] = button.name);
            this._extra_data && Object.assign(data, this._extra_data);
            var async_request = new (require("AsyncRequest"))().setURI(uri).setData(data).setMethod(method).setNectarModuleDataSafe(this._causal_elem).setReadOnly(method == "GET");
            this.setAsync(async_request);
            return !1
        }
        ;
        _proto._setFromModel = function _setFromModel(original_model) {
            var model = {};
            Object.assign(model, original_model);
            for (var propertyName in model) {
                if (propertyName == "onloadRegister") {
                    this.onloadRegister(model[propertyName]);
                    continue
                }
                var mutator = this["set" + propertyName.substr(0, 1).toUpperCase() + propertyName.substr(1)];
                mutator.apply(this, require("createArrayFromMixed")(model[propertyName]))
            }
        }
        ;
        _proto._updateBottom = function _updateBottom() {
            var bottom = require("Vector").getElementDimensions(this._content).y + require("Vector").getElementPosition(this._content).y;
            Dialog._bottoms[Dialog._bottoms.length - 1] = bottom;
            Dialog._updateMaxBottom()
        }
        ;
        _proto._pushOntoStack = function _pushOntoStack() {
            var stack = Dialog._stack;
            stack.length || require("Arbiter").inform("layer_shown", {
                type: "Dialog"
            });
            require("removeFromArray")(stack, this);
            stack.push(this);
            for (var i = stack.length - 2; i >= 0; i--) {
                var prev_dialog = stack[i];
                !prev_dialog._is_stackable && !prev_dialog._async_request ? prev_dialog._hide() : prev_dialog._shown_while_stacked || prev_dialog._hide(!0)
            }
        }
        ;
        _proto._popFromStack = function _popFromStack() {
            var stack = Dialog._stack
              , was_top = stack[stack.length - 1] === this;
            require("removeFromArray")(stack, this);
            stack.length ? was_top && stack[stack.length - 1].show() : require("Arbiter").inform("layer_hidden", {
                type: "Dialog"
            })
        }
        ;
        Dialog._updateMaxBottom = function _updateMaxBottom() {
            Dialog.max_bottom = Math.max.apply(Math, Dialog._bottoms)
        }
        ;
        Dialog.newButton = function newButton(name, label, className, handler) {
            var button = {
                name: name,
                label: label,
                className: void 0,
                handler: void 0
            };
            className && (button.className = className);
            handler && (button.handler = handler);
            return button
        }
        ;
        Dialog.getCurrent = function getCurrent() {
            var stack = Dialog._stack;
            return stack.length ? stack[stack.length - 1] : null
        }
        ;
        Dialog.hideCurrent = function hideCurrent() {
            var dialog = Dialog.getCurrent();
            dialog && dialog.hide()
        }
        ;
        Dialog.bootstrap = function bootstrap(uri, data, read_only, method, model, elem) {
            data = data || {};
            Object.assign(data, new (c_URI || (c_URI = require("URI")))(uri).getQueryData());
            method = method || (read_only ? "GET" : "POST");
            var status_elem = require("Parent").byClass(elem, "stat_elem") || elem;
            if (status_elem && require("CSS").hasClass(status_elem, "async_saving"))
                return !1;
            if (!(status_elem instanceof HTMLElement))
                return !1;
            var request = new (require("AsyncRequest"))().setReadOnly(!!read_only).setMethod(method).setRelativeTo(elem).setStatusElement(status_elem).setURI(uri).setNectarModuleDataSafe(elem).setData(data)
              , dialog = new Dialog(model).setCausalElement(elem).setAsync(request);
            dialog.show();
            return !1
        }
        ;
        Dialog.showFromModel = function showFromModel(model, causal_element) {
            var dialog = new Dialog(model).setCausalElement(causal_element).show();
            model.hiding && dialog.hide()
        }
        ;
        Dialog._init = function _init() {
            this._init = require("emptyFunction"),
            require("Run").onLeave(require("shield")(Dialog._tearDown, null, !1)),
            require("Arbiter").subscribe("page_transition", require("shield")(Dialog._tearDown, null, !0)),
            require("Event").listen(document.documentElement, "keydown", function(event) {
                require("Event").getKeyCode(event) == require("Keys").ESC && !event.getModifiers().any ? Dialog._escape() && event.kill() : require("Event").getKeyCode(event) == require("Keys").RETURN && !event.getModifiers().any && (Dialog._enter() && event.kill())
            }),
            require("Event").listen(window, "resize", function(event) {
                var dialog = Dialog.getCurrent();
                dialog && dialog._resetDialogObj()
            })
        }
        ;
        Dialog._findButton = function _findButton(buttons, name) {
            if (buttons)
                for (var i = 0; i < buttons.length; ++i)
                    if (buttons[i].name == name)
                        return buttons[i];
            return null
        }
        ;
        Dialog._tearDown = function _tearDown(is_page_transition) {
            var stack = Dialog._stack.slice();
            for (var ii = stack.length - 1; ii >= 0; ii--)
                (is_page_transition && !stack[ii]._cross_transition || !is_page_transition && !stack[ii]._cross_quickling) && stack[ii].hide()
        }
        ;
        Dialog._escape = function _escape() {
            var dialog = Dialog.getCurrent();
            if (!dialog)
                return !1;
            var semi_modal = dialog._semi_modal
              , buttons = dialog._buttons;
            if (!buttons.length && !semi_modal)
                return !1;
            if (semi_modal && !buttons.length) {
                dialog.hide();
                return !0
            }
            var button_to_simulate, cancel_button = Dialog._findButton(buttons, "cancel");
            if (dialog._cancelHandler) {
                dialog.cancel();
                return !0
            } else if (cancel_button)
                button_to_simulate = cancel_button;
            else if (buttons.length == 1)
                button_to_simulate = buttons[0];
            else
                return !1;
            dialog._handleButton(button_to_simulate);
            return !0
        }
        ;
        Dialog._enter = function _enter() {
            var dialog = Dialog.getCurrent();
            if (!dialog || !dialog._submit_on_enter)
                return !1;
            if (document.activeElement != dialog._frame)
                return !1;
            var buttons = dialog._buttons;
            if (!buttons)
                return !1;
            dialog._handleButton(buttons[0]);
            return !0
        }
        ;
        Dialog.call_or_eval = function call_or_eval(obj, func, args) {
            if (!func)
                return void 0;
            args = args || {};
            if (typeof func === "string") {
                var params = Object.keys(args).join(", ");
                func = eval("({f: function(" + params + ") { " + func + "}})").f
            }
            return func.apply(obj, require("getObjectValues")(args))
        }
        ;
        return Dialog
    }();
    module.exports = Dialog;
    Dialog.OK = {
        name: "ok",
        label: fbt._("OK")
    };
    Dialog.CANCEL = {
        name: "cancel",
        label: fbt._("H\u1ee7y"),
        className: "inputaux"
    };
    Dialog.CLOSE = {
        name: "close",
        label: fbt._("\u0110\u00f3ng")
    };
    Dialog.NEXT = {
        name: "next",
        label: fbt._("Ti\u1ebfp")
    };
    Dialog.SAVE = {
        name: "save",
        label: fbt._("L\u01b0u")
    };
    Dialog.SUBMIT = {
        name: "submit",
        label: fbt._("G\u1eedi")
    };
    Dialog.CONFIRM = {
        name: "confirm",
        label: fbt._("X\u00e1c nh\u1eadn")
    };
    Dialog.DELETE = {
        name: "delete",
        label: fbt._("X\u00f3a")
    };
    Dialog._bottoms = [0];
    Dialog.max_bottom = 0;
    Dialog._globalCount = 0;
    Dialog.OK_AND_CANCEL = [Dialog.OK, Dialog.CANCEL];
    Dialog._STANDARD_BUTTONS = [Dialog.OK, Dialog.CANCEL, Dialog.CLOSE, Dialog.SAVE, Dialog.SUBMIT, Dialog.CONFIRM, Dialog.DELETE];
    Dialog.SIZE = {
        WIDE: 555,
        STANDARD: 445
    };
    Dialog._HALO_WIDTH = 10;
    Dialog._BORDER_WIDTH = 1;
    Dialog._PADDING_WIDTH = 10;
    Dialog._PAGE_MARGIN = 40;
    Dialog._stack = [];
    global.Dialog = Dialog
}
), null);
__d("XThisControllerNoLongerExistsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/dcb/tcnle/", {
        t: {
            type: "String"
        }
    })
}
), null);
__d("ThisControllerNoLongerExists", ["XControllerURIBuilder", "XThisControllerNoLongerExistsController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.__DEADURI__ = a;
    f.__DEADBUILDER__ = c;
    var g = function(c) {
        babelHelpers.inheritsLoose(a, c);
        function a(a) {
            var b;
            b = c.call(this, "/dcb/tcnle/", {}) || this;
            b.$XControllerURIBuilderNoOpDead1 = a;
            return b
        }
        var d = a.prototype;
        d.__validateRequiredParamsExistence = function() {}
        ;
        d.__assertParamExists = function(a) {}
        ;
        d.__setParam = function(a, b, c) {
            return this
        }
        ;
        d.__setParamInt = function(a, b) {}
        ;
        d.getRequest_LEGACY_UNTYPED = function(a) {
            return a.setURI(this.getURI())
        }
        ;
        d.getURI = function() {
            return b("XThisControllerNoLongerExistsController").getURIBuilder().setString("t", this.$XControllerURIBuilderNoOpDead1).getURI()
        }
        ;
        d.getLookasideURI = function() {
            return this.getURI()
        }
        ;
        return a
    }(b("XControllerURIBuilder"));
    function a(a) {
        return b("XThisControllerNoLongerExistsController").getURIBuilder().setString("t", a).getURI()
    }
    function c(a) {
        return new g(a)
    }
}
), null);
