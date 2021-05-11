__d("createKeyCommandWrapper", ["fbt", 
    "CometKeyCommandContext", 
    "CometKeyCommandSettingsContext", 
    "CometKeyCommandsTypedLoggerLite", 
    "CometKeyCommandUtilsContext", "React", 
    "createKeyCommand", "recoverableViolation", "stylex", "useCometConfirmationDialog", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("CometKeyCommandsTypedLoggerLite").log, j = b("React"), k = {
        wrapperFocusable: {
            ":focus": {
                outline: "iqfcb0g7"
            }
        }
    };
    function l(a) {
        if (a instanceof HTMLInputElement)
            return a.type !== "hidden" && a.type !== "file" && !a.disabled;
        return a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement ? !a.disabled : a instanceof HTMLElement && a.isContentEditable
    }
    function m(a) {
        return a instanceof HTMLElement && a.getAttribute("role") === "listbox" ? !a.getAttribute("aria-disabled") : !1
    }
    function a(a, c) {
        return function(d) {
            var e = j.useContext(b("CometKeyCommandContext"))
              , f = j.useContext(b("CometKeyCommandUtilsContext"))
              , n = j.useContext(b("CometKeyCommandSettingsContext"))
              , o = f && f.setActiveWrapper
              , p = b("useCometConfirmationDialog")()
              , q = p[0]
              , r = b("useStable")(function() {
                return new Map()
            })
              , s = j.useMemo(function() {
                return {
                    addCommands: function(a) {
                        a.forEach(function(a) {
                            var c = a.command;
                            if (c != null) {
                                c = b("createKeyCommand")(c);
                                r.has(c) && b("recoverableViolation")("Conflicting key command registered for " + c, "comet_ax");
                                r.set(c, a);
                                f && f.notifyCommandUpdate()
                            }
                        });
                        return function() {
                            a.forEach(function(a) {
                                var c = a.command;
                                c = b("createKeyCommand")(c);
                                var d = r.get(c);
                                d === a && r["delete"](c)
                            }),
                            f && f.notifyCommandUpdate()
                        }
                    },
                    applyCommand: function(a, b) {
                        var c = r.get(a);
                        if (c === null || c === void 0)
                            return !1;
                        var e = /^[a-z0-9]$/;
                        if (!c.triggerFromInputs && l(b.target) || m(b.target) && e.test(a))
                            return !1;
                        if (!(b.type === "keyup" && c.triggerOnKeyup || b.type === "keydown" && !c.triggerOnKeyup))
                            return !1;
                        c.shouldPreventDefault !== !1 && b.preventDefault();
                        b = c.handler;
                        if (b !== null && b !== void 0) {
                            var f = n && n.getAreSingleKeysDisabled();
                            if (f === !0)
                                return !0;
                            if (n != null && f === null && e.test(a)) {
                                q({
                                    body: g._("You can use single-character keyboard shortcuts to perform common actions on Facebook. To see your keyboard shortcut settings, press 'Shift + ?'."),
                                    cancel: g._("H\u1ee7y"),
                                    confirm: g._("Enable Shortcuts"),
                                    title: g._("Enable single-character keyboard shortcuts?")
                                }, function() {
                                    n && n.setAreSingleKeysDisabled(!1)
                                }, function() {
                                    n && n.setAreSingleKeysDisabled(!0)
                                });
                                return !0
                            }
                            b();
                            f = c.description;
                            i({
                                key_combo: a,
                                key_context: d.debugName,
                                key_description: f
                            });
                            return c.shouldStopPropagation !== !1
                        }
                        return !1
                    },
                    debugName: d.debugName,
                    getCommandMap: function() {
                        return r
                    },
                    getParent: function() {
                        return e
                    },
                    removeCommand: function(a) {
                        r["delete"](a),
                        f && f.notifyCommandUpdate()
                    }
                }
            }, [n, f, r, e, d.debugName, q]);
            p = j.useCallback(function() {
                if (!o) {
                    b("recoverableViolation")("setActiveWrapper is undefined in " + (d.debugName != null ? d.debugName : "unknown"), "comet_ax");
                    return
                }
                o(s)
            }, [o, s, d.debugName]);
            if (a || d.elementType !== void 0) {
                var t = d.elementType !== void 0 ? d.elementType : "div";
                p = {
                    className: (h || (h = b("stylex")))(d.isWrapperFocusable ? k.wrapperFocusable : void 0, d.xstyle),
                    "data-testid": "Keycommand_wrapper" + (d.debugName != null ? "_" + d.debugName : ""),
                    onFocusCapture: a ? p : void 0,
                    tabIndex: d.isWrapperFocusable ? -1 : void 0
                };
                t = j.createElement(t, p, d.children)
            } else
                t = j.jsx(j.Fragment, {
                    children: d.children
                });
            c && (t = j.jsx(c.Provider, {
                value: s,
                children: t
            }));
            return j.jsx(b("CometKeyCommandContext").Provider, {
                value: s,
                children: t
            })
        }
    }
}
), null);