if (self.CavalryLogger) {
    CavalryLogger.start_js(["hAu4i"]);
}

__d("EmojiFormat.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        return a.split("_").map(function(a) {
            return parseInt(a, 16)
        })
    }
    function a(a) {
        return a.map(function(a) {
            return a.toString(16)
        }).join("_")
    }
    function h(a) {
        return a.map(function(a) {
            return String.fromCodePoint(a)
        }).join("")
    }
    function b(a) {
        return h(g(a))
    }
    f.codeStringToCodeArray = g;
    f.codeArrayToCodeString = a;
    f.codeArrayToUnicode = h;
    f.codeStringToUnicode = b
}
), null);
__d("ServerHTML.react", ["React"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            var a = this.props
              , b = a.blob;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["blob"]);
            return typeof b === "string" ? g.jsx("div", babelHelpers["extends"]({}, a, {
                children: b
            })) : g.jsx("div", babelHelpers["extends"]({}, a, {
                dangerouslySetInnerHTML: b
            }))
        }
        ;
        return b
    }(g.Component);
    e.exports = a
}
), null);
__d("DraftEffectsPerSite", ["fbt", "Bootloader"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.handleExtensionCausedError = a;
    function a() {
        b("Bootloader").loadModules(["SimpleXUIDialog"], function(a) {
            a.show(g._("T\u00ednh n\u0103ng nh\u1eadp v\u0103n b\u1ea3n kh\u00f4ng th\u1ec3 ho\u1ea1t \u0111\u1ed9ng \u0111\u00fang c\u00e1ch do b\u1ea1n \u0111\u00e3 c\u00e0i \u0111\u1eb7t m\u1ed9t ti\u1ec7n \u00edch t\u00edch h\u1ee3p tr\u00ean tr\u00ecnh duy\u1ec7t web c\u1ee7a m\u00ecnh. Vui l\u00f2ng v\u00f4 hi\u1ec7u h\u00f3a m\u1ecdi ti\u1ec7n \u00edch t\u00edch h\u1ee3p v\u00e0 t\u1ea3i l\u1ea1i trang."), g._("Gi\u1edbi h\u1ea1n ch\u1ec9nh s\u1eeda v\u0103n b\u1ea3n"), null, {
                width: 600
            })
        }, "DraftEffectsPerSite")
    }
}
), null);
__d("DragDropFileUpload", [], (function(a, b, c, d, e, f) {
    f.isSupported = a;
    function a() {
        return typeof FileList !== "undefined"
    }
}
), null);
__d("DocumentDragDrop", ["Arbiter", "CSS", "DOMQuery", "DragDropFileUpload", "Event", "emptyFunction", "getObjectValues", "getOrCreateDOMID"], (function(a, b, c, d, e, f) {
    var g = {}
      , h = 0;
    function i() {
        h = 0,
        b("getObjectValues")(g).forEach(function(a) {
            b("CSS").removeClass(a.element, a.className),
            b("Arbiter").inform("dragleave", {
                element: a.element
            })
        })
    }
    var j = null;
    function k() {
        j && window.clearTimeout(j),
        j = window.setTimeout(function() {
            i()
        }, 500)
    }
    var l = function() {
        if (!b("DragDropFileUpload").isSupported())
            return;
        b("Event").listen(document, "dragenter", function(a) {
            h === 0 && b("getObjectValues")(g).forEach(function(c) {
                b("CSS").addClass(c.element, c.className),
                b("Arbiter").inform("dragenter", {
                    element: c.element,
                    event: a
                })
            }),
            h++,
            k()
        });
        b("Event").listen(document, "dragleave", function(a) {
            h--,
            h === 0 && i(),
            k()
        });
        b("Event").listen(document, "drop", function(a) {
            i();
            var c = a.getTarget();
            if (b("DOMQuery").isNodeOfType(a.getTarget(), "input") && c.type === "file")
                return;
            a.prevent()
        });
        b("Event").listen(document, "dragover", b("Event").prevent);
        document.addEventListener("dragover", k, !0);
        l = b("emptyFunction")
    };
    a = {
        init: function() {
            l()
        },
        registerStatusElement: function(a, c) {
            l(),
            g[b("getOrCreateDOMID")(a)] = {
                element: a,
                className: c
            },
            h > 0 && b("CSS").addClass(a, c)
        },
        removeStatusElement: function(a) {
            a = b("getOrCreateDOMID")(a);
            var c = g[a];
            c && (b("CSS").removeClass(c.element, c.className),
            delete g[a])
        }
    };
    e.exports = a
}
), null);
__d("DataTransfer", ["Promise", "PhotosMimeType", "createArrayFromMixed", "emptyFunction", "promiseDone"], (function(a, b, c, d, e, f) {
    var g = new RegExp("\r\n","g")
      , h = "\n"
      , i = {
        "text/rtf": 1,
        "text/html": 1
    };
    function j(a) {
        if (a.kind == "file")
            return a.getAsFile()
    }
    function k(a) {
        return new (b("Promise"))(function(b) {
            a.file(function(a) {
                b([a])
            })
        }
        )
    }
    function l(a) {
        return typeof a.webkitGetAsEntry === "function" ? a.webkitGetAsEntry() : null
    }
    function m(a, c) {
        return new (b("Promise"))(function(d) {
            b("promiseDone")(b("Promise").all(a.map(function(a) {
                var b = l(a);
                if (b && b.createReader != null) {
                    c();
                    return n(b)
                } else {
                    return (b = j(a)) != null ? b : []
                }
            })), function(a) {
                d(a.flatMap(b("emptyFunction").thatReturnsArgument))
            })
        }
        )
    }
    function n(a) {
        return new (b("Promise"))(function(c) {
            var d = a.createReader()
              , e = []
              , f = function() {
                b("promiseDone")(b("Promise").all(e.map(function(a) {
                    if (a.isDirectory)
                        return n(a);
                    else
                        return k(a)
                })), function(a) {
                    c(a.flatMap(b("emptyFunction").thatReturnsArgument))
                })
            }
              , g = function a() {
                d.readEntries(function(b) {
                    b.length ? (e = e.concat(b),
                    a()) : f()
                }, f)
            };
            g()
        }
        )
    }
    a = function() {
        "use strict";
        function a(a) {
            this.data = a,
            this.types = a.types ? b("createArrayFromMixed")(a.types) : []
        }
        var c = a.prototype;
        c.isRichText = function() {
            if (this.getHTML() && this.getText())
                return !0;
            return this.isImage() ? !1 : this.types.some(function(a) {
                return i[a]
            })
        }
        ;
        c.getText = function() {
            var a;
            !this.types.length ? a = this.data.getData("Text") : this.types.indexOf("text/plain") != -1 && (a = this.data.getData("text/plain"));
            return a ? a.replace(g, h) : null
        }
        ;
        c.getHTML = function() {
            if (this.data.getData)
                if (!this.types.length)
                    return this.data.getData("Text");
                else if (this.types.indexOf("text/html") != -1)
                    return this.data.getData("text/html")
        }
        ;
        c.isLink = function() {
            return this.types.some(function(a) {
                return a.indexOf("Url") != -1 || a.indexOf("text/uri-list") != -1 || a.indexOf("text/x-moz-url") != -1
            })
        }
        ;
        c.getLink = function() {
            if (this.data.getData) {
                if (this.types.indexOf("text/x-moz-url") != -1) {
                    var a = this.data.getData("text/x-moz-url").split("\n");
                    return a[0]
                }
                return this.types.indexOf("text/uri-list") != -1 ? this.data.getData("text/uri-list") : this.data.getData("url")
            }
            return null
        }
        ;
        c.isImage = function() {
            var a = this.types.some(function(a) {
                return a.indexOf("application/x-moz-file") != -1
            });
            if (a)
                return !0;
            a = this.getFiles();
            for (var c = 0; c < a.length; c++) {
                var d = a[c].type;
                if (!b("PhotosMimeType").isImage(d))
                    return !1
            }
            return !0
        }
        ;
        c.getCount = function() {
            if (Object.prototype.hasOwnProperty.call(this.data, "items"))
                return this.data.items.length;
            else if (Object.prototype.hasOwnProperty.call(this.data, "mozItemCount"))
                return this.data.mozItemCount;
            else if (this.data.files)
                return this.data.files.length;
            return null
        }
        ;
        c.getFiles = function() {
            if (this.data.items)
                return Array.prototype.slice.call(this.data.items).map(j).filter(b("emptyFunction").thatReturnsArgument);
            else if (this.data.files)
                return Array.prototype.slice.call(this.data.files);
            else
                return []
        }
        ;
        c.getRecursiveFiles = function(a) {
            if (this.data.items)
                return m(Array.prototype.slice.call(this.data.items), a);
            else if (this.data.files)
                return new (b("Promise"))(Array.prototype.slice.call(this.data.files))
        }
        ;
        c.hasFiles = function() {
            return this.getFiles().length > 0
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("DragDropTarget", ["Arbiter", "CSS", "DataTransfer", "DocumentDragDrop", "DragDropFileUpload", "Event", "SubscriptionsHandler", "emptyFunction"], (function(a, b, c, d, e, f) {
    function a(a) {
        this._element = a,
        this._listeners = new (b("SubscriptionsHandler"))(),
        this._statusElem = a,
        this._dragEnterCount = 0,
        this._enabled = !1,
        this._traverseFoldersRecursively = !1
    }
    Object.assign(a.prototype, {
        _onFilesDropCallback: c = b("emptyFunction"),
        _onFolderDropLogging: c,
        _onURLDropCallback: c,
        _onPlainTextDropCallback: c,
        _onDropCallback: c,
        _fileFilterFn: c.thatReturnsArgument,
        setOnDocumentDragEnterCallback: function(a) {
            this._onDocumentDragEnterCallback = a;
            return this
        },
        setOnDocumentDragLeaveCallback: function(a) {
            this._onDocumentDragLeaveCallback = a;
            return this
        },
        setOnDragEnterCallback: function(a) {
            this._onDragEnterCallback = a;
            return this
        },
        setOnDragLeaveCallback: function(a) {
            this._onDragLeaveCallback = a;
            return this
        },
        setOnFilesDropCallback: function(a) {
            this._onFilesDropCallback = a;
            return this
        },
        setOnFolderDropLogging: function(a) {
            this._onFolderDropLogging = a;
            return this
        },
        setOnURLDropCallback: function(a) {
            this._onURLDropCallback = a;
            return this
        },
        setOnPlainTextDropCallback: function(a) {
            this._onPlainTextDropCallback = a;
            return this
        },
        setOnDropCallback: function(a) {
            this._onDropCallback = a;
            return this
        },
        setTraverseFoldersRecursively: function(a) {
            this._traverseFoldersRecursively = a;
            return this
        },
        _uploadData: function(a, b, c) {
            var d = {}
              , e = !1;
            c.length && (this._onFilesDropCallback(c, b),
            d.files = c,
            e = !0);
            c = a.getLink();
            c && (this._onURLDropCallback(c, b),
            d.url = c,
            e = !0);
            c = a.getText();
            c && (this._onPlainTextDropCallback(c, b),
            d.plainText = c,
            e = !0);
            e && this._onDropCallback(d, b)
        },
        enable: function() {
            if (!b("DragDropFileUpload").isSupported())
                return this;
            this._listeners.engage();
            b("DocumentDragDrop").registerStatusElement(this._statusElem, "fbWantsDragDrop");
            this._listeners.addSubscriptions(b("Event").listen(this._element, "dragenter", this._onDragEnter.bind(this)), b("Event").listen(this._element, "dragleave", this._onDragLeave.bind(this)), b("Event").listen(this._element, "dragover", this._onDragOver.bind(this)), b("Event").listen(this._element, "drop", function(a) {
                var c = this, d;
                this._dragEnterCount = 0;
                (d = b("CSS")).removeClass(this._statusElem, "fbDropReady");
                d.removeClass(this._statusElem, "fbDropReadyPhoto");
                d.removeClass(this._statusElem, "fbDropReadyPhotos");
                d.removeClass(this._statusElem, "fbDropReadyLink");
                var e = new (b("DataTransfer"))(a.dataTransfer);
                if (this._traverseFoldersRecursively) {
                    (d = e.getRecursiveFiles(this._onFolderDropLogging)) == null ? void 0 : d.then(function(b) {
                        c._uploadData(e, a, c._fileFilterFn(b))
                    })
                } else
                    this._uploadData(e, a, this._fileFilterFn(a.dataTransfer.files));
                a.kill()
            }
            .bind(this)));
            this._listeners.addSubscriptions(b("Arbiter").subscribe("dragenter", this._onDocumentDragEnter.bind(this)), b("Arbiter").subscribe("dragleave", this._onDocumentDragLeave.bind(this)));
            this._enabled = !0;
            return this
        },
        disable: function() {
            if (!this._enabled)
                return this;
            b("DocumentDragDrop").removeStatusElement(this._statusElem);
            b("CSS").removeClass(this._statusElem, "fbDropReady");
            b("CSS").removeClass(this._statusElem, "fbDropReadyPhoto");
            b("CSS").removeClass(this._statusElem, "fbDropReadyPhotos");
            b("CSS").removeClass(this._statusElem, "fbDropReadyLink");
            this._listeners.release();
            this._enabled = !1;
            return this
        },
        setFileFilter: function(a) {
            this._fileFilterFn = a;
            return this
        },
        setStatusElement: function(a) {
            this._statusElem = a;
            return this
        },
        _onDragEnter: function(a) {
            if (this._dragEnterCount === 0) {
                var c = new (b("DataTransfer"))(a.dataTransfer);
                b("CSS").addClass(this._statusElem, "fbDropReady");
                if (c.isLink() || !c.isImage())
                    b("CSS").addClass(this._statusElem, "fbDropReadyLink");
                else {
                    ((c = c.getCount()) != null ? c : 0) > 1 ? b("CSS").addClass(this._statusElem, "fbDropReadyPhotos") : b("CSS").addClass(this._statusElem, "fbDropReadyPhoto")
                }
                this._onDragEnterCallback && this._onDragEnterCallback()
            }
            this._dragEnterCount++;
            a.preventDefault()
        },
        _onDragLeave: function(a) {
            this._dragEnterCount = Math.max(this._dragEnterCount - 1, 0);
            if (this._dragEnterCount === 0) {
                (a = b("CSS")).removeClass(this._statusElem, "fbDropReady");
                a.removeClass(this._statusElem, "fbDropReadyPhoto");
                a.removeClass(this._statusElem, "fbDropReadyPhotos");
                a.removeClass(this._statusElem, "fbDropReadyLink");
                this._onDragLeaveCallback && this._onDragLeaveCallback()
            }
        },
        _onDragOver: function(a) {
            if (!a.dataTransfer) {
                b("Event").kill(a);
                return
            }
            try {
                var c = a.dataTransfer.effectAllowed;
                a.dataTransfer.dropEffect = c == "move" || c == "linkMove" ? "move" : "copy"
            } catch (a) {}
            b("Event").kill(a)
        },
        _onDocumentDragEnter: function(a, b) {
            this._onDocumentDragEnterCallback && b.element == this._element && this._onDocumentDragEnterCallback()
        },
        _onDocumentDragLeave: function(a, b) {
            this._dragEnterCount = 0,
            this._onDragLeave(a),
            this._onDocumentDragLeaveCallback && b.element == this._element && this._onDocumentDragLeaveCallback()
        }
    });
    d = a;
    e.exports = d
}
), null);
__d("Cache", ["DateConsts", "TimeSlice"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new Map()
        }
        var c = a.prototype;
        c.has = function(a) {
            return this.$1.has(a)
        }
        ;
        c.get = function(a, b) {
            a = this.__getRaw(a);
            return !a ? b : a.$2
        }
        ;
        c.getAll = function(a, b) {
            var c = this
              , d = new Map();
            a.forEach(function(a) {
                return d.set(a, c.get(a, b))
            });
            return d
        }
        ;
        c["delete"] = function(a) {
            var b = this.__getRaw(a);
            b && b.$3 && clearTimeout(b.$3);
            return this.$1["delete"](a)
        }
        ;
        c.clear = function() {
            this.$1.forEach(function(a) {
                a && a.$3 && clearTimeout(a.$3)
            }),
            this.$1.clear()
        }
        ;
        c.set = function(a, c, d, e) {
            if (!this.shouldUpdate(a, d))
                return !1;
            var f = this.__getRaw(a);
            f || (f = this.__getNewRawObject());
            delete f.$2;
            delete f.$4;
            f.$3 && clearTimeout(f.$3);
            delete f.$3;
            f.$2 = c;
            d != null && (f.$4 = d);
            e != null && e >= 0 && (f.$3 = setTimeout(b("TimeSlice").guard(this["delete"].bind(this, a), "Cache expiration timeout"), e * b("DateConsts").MS_PER_SEC * b("DateConsts").SEC_PER_MIN));
            this.__setRaw(a, f);
            return !0
        }
        ;
        c.shouldUpdate = function(a, b) {
            a = this.__getRaw(a);
            return a == null || a.$4 == null || b == null || b > a.$4
        }
        ;
        c.size = function() {
            return this.$1.size
        }
        ;
        c.__getRaw = function(a) {
            return this.$1.get(a)
        }
        ;
        c.__setRaw = function(a, b) {
            this.$1.set(a, b)
        }
        ;
        c.__getNewRawObject = function() {
            return {
                $2: null,
                $3: null,
                $4: null,
                $5: null,
                $6: null
            }
        }
        ;
        c.__keys = function() {
            return this.$1.keys()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("codedError", ["fbt", "invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
        h(0, 2095)
    }
    a.withParams = function(a, b) {
        h(0, 2095)
    }
    ;
    a._ = function(a, b, c, d) {
        b = b(g);
        c = c(g, d);
        d = b + ": " + c;
        d = new Error(d);
        Object.assign(d, {
            framesToPop: 1,
            code: a,
            description: c,
            summary: b
        });
        return d
    }
    ;
    b = a;
    e.exports = b
}
), null);
__d("getCorrectDocumentFromNode", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return !a || !a.ownerDocument ? document : a.ownerDocument
    }
    e.exports = a
}
), null);
__d("isElement", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return !a || !a.ownerDocument ? !1 : a.nodeType === Node.ELEMENT_NODE
    }
    e.exports = a
}
), null);
__d("DraftOffsetKey", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "-";
    a = {
        encode: function(a, b, c) {
            return a + g + b + g + c
        },
        decode: function(a) {
            a = a.split(g).reverse();
            var b = a[0]
              , c = a[1];
            a = a.slice(2);
            return {
                blockKey: a.reverse().join(g),
                decoratorKey: parseInt(c, 10),
                leafKey: parseInt(b, 10)
            }
        }
    };
    e.exports = a
}
), null);
__d("DraftJsEventsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:DraftJsEventsLoggerConfig", this.$1, {
                signal: !0
            }, a)
        }
        ;
        c.clear = function() {
            this.$1 = {};
            return this
        }
        ;
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        }
        ;
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.setAnonymizedDom = function(a) {
            this.$1.anonymized_dom = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setExtraParams = function(a) {
            this.$1.extra_params = a;
            return this
        }
        ;
        c.setScriptPath = function(a) {
            this.$1.script_path = a;
            return this
        }
        ;
        c.setSelectionState = function(a) {
            this.$1.selection_state = a;
            return this
        }
        ;
        return a
    }();
    c = {
        anonymized_dom: !0,
        event: !0,
        extra_params: !0,
        script_path: !0,
        selection_state: !0
    };
    e.exports = a
}
), null);
__d("DraftJsDebugLogging", ["CurrentUser", "DraftJsEventsTypedLogger", "ScriptPath"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        var c = a.anonymizedDom
          , d = a.extraParams;
        a = a.selectionState;
        new (b("DraftJsEventsTypedLogger"))().setEvent("blocked_selection_event").setAnonymizedDom(c).setExtraParams(d).setScriptPath(b("ScriptPath").getScriptPath()).setSelectionState(a).log()
    }
    ;
    f.logBlockedSelectionEvent = a;
    c = function(a) {
        var c = a.anonymizedDom
          , d = a.extraParams;
        a = a.selectionState;
        b("CurrentUser").isEmployee() && new (b("DraftJsEventsTypedLogger"))().setEvent("selection_state_failure").setAnonymizedDom(c).setExtraParams(d).setScriptPath(b("ScriptPath").getScriptPath()).setSelectionState(a).log()
    }
    ;
    f.logSelectionStateFailure = c
}
), null);
__d("isHTMLElement", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (!a || !a.ownerDocument)
            return !1;
        if (!a.ownerDocument.defaultView)
            return a instanceof HTMLElement;
        return a instanceof a.ownerDocument.defaultView.HTMLElement ? !0 : !1
    }
    e.exports = a
}
), null);
__d("moveSelectionBackward", ["warning"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        var d = a.getSelection();
        b("warning")(d.isCollapsed(), "moveSelectionBackward should only be called with a collapsed SelectionState");
        a = a.getCurrentContent();
        var e = d.getStartKey()
          , f = d.getStartOffset()
          , g = e
          , h = 0;
        if (c > f) {
            var i = a.getKeyBefore(e);
            if (i == null)
                g = e;
            else {
                g = i;
                e = a.getBlockForKey(i);
                h = e.getText().length
            }
        } else
            h = f - c;
        return d.merge({
            focusKey: g,
            focusOffset: h,
            isBackward: !0
        })
    }
    e.exports = a
}
), null);
__d("removeTextWithStrategy", ["DraftModifier", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("gkx")("676842");
    function a(a, c, d) {
        var e = a.getSelection()
          , f = a.getCurrentContent()
          , h = e
          , i = e.getAnchorKey()
          , j = e.getFocusKey()
          , k = f.getBlockForKey(i);
        if (g && (d === "forward" && i !== j))
            return f;
        if (e.isCollapsed()) {
            if (d === "forward") {
                if (a.isSelectionAtEndOfContent())
                    return f;
                if (g) {
                    j = e.getAnchorOffset() === f.getBlockForKey(i).getLength();
                    if (j) {
                        i = f.getBlockForKey(k.nextSibling);
                        if (!i || i.getLength() === 0)
                            return f
                    }
                }
            } else if (a.isSelectionAtStartOfContent())
                return f;
            h = c(a);
            if (h === e)
                return f
        }
        return b("DraftModifier").removeRange(f, h, d)
    }
    e.exports = a
}
), null);
__d("KeyBindingUtil", ["UserAgent", "isSoftNewlineEvent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("UserAgent").isPlatform("Mac OS X")
      , h = {
        isCtrlKeyCommand: function(a) {
            return !!a.ctrlKey && !a.altKey
        },
        isOptionKeyCommand: function(a) {
            return g && a.altKey
        },
        usesMacOSHeuristics: function() {
            return g
        },
        hasCommandModifier: function(a) {
            return g ? !!a.metaKey && !a.altKey : h.isCtrlKeyCommand(a)
        },
        isSoftNewlineEvent: b("isSoftNewlineEvent")
    };
    e.exports = h
}
), null);
__d("moveSelectionForward", ["warning"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        var d = a.getSelection();
        b("warning")(d.isCollapsed(), "moveSelectionForward should only be called with a collapsed SelectionState");
        var e = d.getStartKey()
          , f = d.getStartOffset();
        a = a.getCurrentContent();
        var g = e
          , h = a.getBlockForKey(e);
        c > h.getText().length - f ? (g = a.getKeyAfter(e),
        h = 0) : h = f + c;
        return d.merge({
            focusKey: g,
            focusOffset: h
        })
    }
    e.exports = a
}
), null);
__d("isHTMLBRElement", ["isElement"], (function(a, b, c, d, e, f) {
    function a(a) {
        return !a || !a.ownerDocument ? !1 : b("isElement")(a) && a.nodeName === "BR"
    }
    e.exports = a
}
), null);
__d("DraftEffects", ["cx", "BanzaiODS", "CurrentUser", "DraftEffectsPerSite", "fbjs/lib/CSSCore", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("CurrentUser").isEmployee() ? ".employee" : ""
      , i = !1;
    a = {
        initODS: function() {
            document.addEventListener("input", function(a) {
                a.target.nodeType === 1 && b("fbjs/lib/CSSCore").hasClass(a.target, "_5rpu") && b("BanzaiODS").bumpEntityKey(2966, "draft_js", "input_events" + h)
            })
        },
        handleExtensionCausedError: function() {
            b("BanzaiODS").bumpEntityKey(2966, "draft_js", "extension_caused_errors" + h);
            if (i || !b("gkx")("676843"))
                return;
            i = !0;
            b("DraftEffectsPerSite").handleExtensionCausedError()
        }
    };
    e.exports = a
}
), null);
__d("getDefaultKeyBinding", ["KeyBindingUtil", "Keys", "UserAgent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("UserAgent").isPlatform("Mac OS X")
      , h = g && b("UserAgent").isBrowser("Firefox < 29")
      , i = b("KeyBindingUtil").hasCommandModifier
      , j = b("KeyBindingUtil").isCtrlKeyCommand;
    function k(a) {
        return g && a.altKey || j(a)
    }
    function l(a) {
        return !i(a) ? null : a.shiftKey ? "redo" : "undo"
    }
    function m(a) {
        return !g && a.shiftKey ? null : k(a) ? "delete-word" : "delete"
    }
    function n(a) {
        return i(a) && g ? "backspace-to-start-of-line" : k(a) ? "backspace-word" : "backspace"
    }
    function a(a) {
        switch (a.keyCode) {
        case 66:
            return i(a) ? "bold" : null;
        case 68:
            return j(a) ? "delete" : null;
        case 72:
            return j(a) ? "backspace" : null;
        case 73:
            return i(a) ? "italic" : null;
        case 74:
            return i(a) ? "code" : null;
        case 75:
            return g && j(a) ? "secondary-cut" : null;
        case 77:
            return j(a) ? "split-block" : null;
        case 79:
            return j(a) ? "split-block" : null;
        case 84:
            return g && j(a) ? "transpose-characters" : null;
        case 85:
            return i(a) ? "underline" : null;
        case 87:
            return g && j(a) ? "backspace-word" : null;
        case 89:
            return j(a) ? g ? "secondary-paste" : "redo" : null;
        case 90:
            return l(a) || null;
        case b("Keys").RETURN:
            return "split-block";
        case b("Keys").DELETE:
            return m(a);
        case b("Keys").BACKSPACE:
            return n(a);
        case b("Keys").LEFT:
            return h && i(a) ? "move-selection-to-start-of-block" : null;
        case b("Keys").RIGHT:
            return h && i(a) ? "move-selection-to-end-of-block" : null;
        default:
            return null
        }
    }
    e.exports = a
}
), null);
__d("replaceSelectionWithMention", ["DraftModifier", "EditorState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e, f) {
        e = e(c.getCurrentContent(), a);
        var g = e.getLastCreatedEntityKey();
        f = f ? f(a) : a.getTitle();
        a = b("DraftModifier").replaceText(e, d, f, c.getCurrentInlineStyle(), g);
        return b("EditorState").push(c, a, "insert-fragment")
    }
}
), null);
__d("replaceMentionedTextInEditorState", ["replaceSelectionWithMention"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e, f) {
        var i = c.getSelection()
          , j = c.getCurrentContent()
          , k = i.getAnchorKey()
          , l = i.getAnchorOffset();
        j = j.getBlockMap().get(k);
        k = i.getStartOffset();
        k = j.getText().substr(k - d, d);
        var m = f ? f(a, k) : g(a, k);
        f = l - h(j.getText().substr(0, l), m, d);
        return b("replaceSelectionWithMention")(a, c, i.set("anchorOffset", f), e, function() {
            return m
        })
    }
    function g(a, b) {
        return a.getType() === "group_rule" ? a.getSubtitle() : a.getTitle()
    }
    function h(a, b, c) {
        (b.startsWith("#") || b.startsWith("\\uFF03")) && (a = a.toLowerCase(),
        b = b.toLowerCase());
        for (var d = c; d <= b.length; d++)
            a.substr(-d) == b.substr(0, d) && (c = d);
        return c
    }
}
), null);
__d("AbstractMentionsTextEditor.react", ["requireCond", "cr:1600421", "DraftEditor.react", "Keys", "React", "TypeaheadNavigation", "clearImmediate", "getDefaultKeyBinding", "getOrCreateDOMID", "prop-types", "replaceMentionedTextInEditorState", "setImmediate", "uniqueID"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = 5;
    var h = "handled"
      , i = "not-handled";
    c = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c(c, d) {
            var e;
            e = a.call(this, c, d) || this;
            e.$1 = b("uniqueID")();
            e.$2 = !1;
            e.$3 = [];
            e.containerRef = g.createRef();
            e.abstractTextEditorRef = g.createRef();
            e.__onShowMentions = function(a, b, c, d) {
                d === void 0 && (d = !0);
                if (!e.$2)
                    return;
                b = b || 0;
                if (!a || !a.length) {
                    var f = e.state.mentionableEntries;
                    if (f && f.length && f[0].getDataType() !== (c || ""))
                        return;
                    e.setState({
                        highlightedMentionable: null,
                        activeDescendantID: null,
                        mentionableEntries: null,
                        characterOffset: 0
                    });
                    return
                }
                f = e.props.typeaheadViewProps;
                c = a;
                f && f.mentionSortFn && c.sort(f.mentionSortFn);
                c = a.slice(0, e.props.maxResults);
                e.props.reverseOrder && (c = c.reverse());
                f = null;
                (e.props.autoHighlight || e.state.highlightedMentionable !== null) && (f = e.props.autoUpdateHighlight ? c[0] : e.state.highlightedMentionable);
                e.setState({
                    highlightedMentionable: d ? f : null,
                    mentionableEntries: c,
                    characterOffset: b
                });
                e.props.onShowMentions && e.props.onShowMentions(c, b)
            }
            ;
            e.$13 = function(a) {
                var c;
                if (a.keyCode === b("Keys").TAB)
                    return e.$6(a);
                if (a.keyCode === b("Keys").ESC)
                    return e.$5(a);
                if (a.keyCode === b("Keys").UP)
                    return e.$11(a);
                return a.keyCode === b("Keys").DOWN ? e.$4(a) : (c = e.props.keyBindingFn == null ? void 0 : e.props.keyBindingFn(a)) != null ? c : b("getDefaultKeyBinding")(a)
            }
            ;
            e.$8 = function(a) {
                e.setState(e.$12()),
                e.props.onBlur && e.props.onBlur(a)
            }
            ;
            e.$7 = function(a) {
                e.props.mentionsSource && e.props.mentionsSource.bootstrap(),
                e.props.onFocus && e.props.onFocus(a)
            }
            ;
            e.$14 = function(a, b) {
                if (e.state.highlightedMentionable) {
                    e.$10(e.state.highlightedMentionable, a);
                    return h
                } else if (e.props.handleContentReturn && e.props.handleContentReturn(a, b))
                    return h;
                return i
            }
            ;
            e.$6 = function(a) {
                var b = e.state.highlightedMentionable;
                b ? (a.preventDefault(),
                e.$10(b, a)) : e.props.onTab && e.props.onTab(a)
            }
            ;
            e.$5 = function(a) {
                e.props.onEscape && e.props.onEscape(a),
                e.state.mentionableEntries && (a.stopPropagation(),
                a.nativeEvent.composerPropagationStopped = !0,
                e.setState(e.$12()))
            }
            ;
            e.$11 = function(a) {
                var c = e.state.mentionableEntries;
                c ? (a.preventDefault(),
                b("TypeaheadNavigation").moveUp(c, e.state.highlightedMentionable, e.$9)) : e.props.onUpArrow && e.props.onUpArrow(a)
            }
            ;
            e.$4 = function(a) {
                var c = e.state.mentionableEntries;
                c ? (a.preventDefault(),
                b("TypeaheadNavigation").moveDown(c, e.state.highlightedMentionable, e.$9)) : e.props.onDownArrow && e.props.onDownArrow(a)
            }
            ;
            e.$9 = function(a) {
                e.setState({
                    highlightedMentionable: a
                })
            }
            ;
            e.$15 = function(a) {
                a = b("getOrCreateDOMID")(a);
                e.setState({
                    ariaActiveDescendantID: a
                })
            }
            ;
            e.$10 = function(a, c) {
                var d, f = a.getDataType(), g = e.props.mentionCreationForContentStateFn;
                f === "ASSISTANT_TYPEAHEAD" && e.props.mentionTypeaheadCreationForContentStateFn && (g = e.props.mentionTypeaheadCreationForContentStateFn);
                f = e.props.onMentionSelect;
                f == null ? d = b("replaceMentionedTextInEditorState")(a, e.props.editorState, e.state.characterOffset, g, e.props.overrideMentionGetEntryText) : d = f(a, e.props.editorState, e.state.characterOffset, g);
                e.props.onChange(d);
                e.setState(e.$12());
                f = e.props.onAddMention;
                g = e.state.mentionableEntries;
                if (f && g) {
                    d = g.indexOf(a);
                    f(a, d, c)
                }
            }
            ;
            e.$17 = null;
            e.$18 = function(a) {
                if (b("cr:1600421") == null)
                    return;
                if (a != null && !b("cr:1600421").isRegistered(a)) {
                    e.$17 && b("cr:1600421").unregister(e.$17);
                    e.$17 = a;
                    b("cr:1600421").registerForMeasurement(a, (a = e.props.typingPerformanceID) != null ? a : "AbstractMentionsTextEditor")
                }
            }
            ;
            e.__onShowMentions = e.__onShowMentions.bind(babelHelpers.assertThisInitialized(e));
            e.$4 = e.$4.bind(babelHelpers.assertThisInitialized(e));
            e.$5 = e.$5.bind(babelHelpers.assertThisInitialized(e));
            e.$6 = e.$6.bind(babelHelpers.assertThisInitialized(e));
            e.$7 = e.$7.bind(babelHelpers.assertThisInitialized(e));
            e.$8 = e.$8.bind(babelHelpers.assertThisInitialized(e));
            e.$9 = e.$9.bind(babelHelpers.assertThisInitialized(e));
            e.$10 = e.$10.bind(babelHelpers.assertThisInitialized(e));
            e.$11 = e.$11.bind(babelHelpers.assertThisInitialized(e));
            e.state = e.$12();
            return e
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$2 = !0
        }
        ;
        d.componentWillUnmount = function() {
            this.$2 = !1,
            this.$3.forEach(function(a) {
                return b("clearImmediate")(a)
            }),
            this.$3 = []
        }
        ;
        d.$12 = function() {
            return {
                highlightedMentionable: null,
                mentionableEntries: null,
                characterOffset: 0
            }
        }
        ;
        d.shouldComponentUpdate = function(a, b) {
            return this.props.editorState !== a.editorState || this.props.placeholder !== a.placeholder || this.props.readOnly !== a.readOnly || this.props.className !== a.className || this.state.mentionableEntries !== b.mentionableEntries || this.state.highlightedMentionable !== b.highlightedMentionable || this.state.ariaActiveDescendantID !== b.ariaActiveDescendantID
        }
        ;
        d.componentDidUpdate = function(a) {
            var c = this
              , d = this.props.editorState;
            if (d === a.editorState)
                return;
            var e = d.getSelection();
            if (e.getHasFocus() && e.isCollapsed()) {
                var f = d.getCurrentContent()
                  , g = this.props.mentionsSource;
                g && this.$3.push(b("setImmediate")(function() {
                    f.getBlockForKey(e.getAnchorKey()) != null && g.search(f, e, c.__onShowMentions)
                }));
                var h = this.props.assistantTypeaheadSource;
                h && this.$3.push(b("setImmediate")(function() {
                    h.search(f, e, c.__onShowMentions)
                }))
            }
        }
        ;
        d.blur = function() {
            var a;
            (a = this.abstractTextEditorRef.current) == null ? void 0 : a.blur()
        }
        ;
        d.focus = function() {
            var a;
            (a = this.abstractTextEditorRef.current) == null ? void 0 : a.focus()
        }
        ;
        d.$16 = function() {
            var a = this.state.mentionableEntries;
            if (!a || !a.length)
                return null;
            var b = this.props.mentionResultsComponent;
            return g.jsx(b, babelHelpers["extends"]({}, this.props.mentionResultsProps, {
                viewID: this.$1,
                selection: this.props.editorState.getSelection(),
                contextComponent: this,
                characterOffset: this.state.characterOffset,
                mentionableEntries: a || [],
                highlightedMentionable: this.state.highlightedMentionable,
                onMentionSelect: this.$10,
                onMentionHighlight: this.$9,
                onMentionRenderHighlight: this.$15
            }))
        }
        ;
        d.exitCurrentMode = function() {
            var a;
            (a = this.abstractTextEditorRef.current) == null ? void 0 : a.exitCurrentMode()
        }
        ;
        d.render = function() {
            var a = this.state.mentionableEntries;
            a = !!(a && a.length);
            var c = this.props.readOnly ? null : "-1"
              , d = this.props.role || "combobox"
              , e = this.props.ariaAutoComplete || "list"
              , f = this.props.ariaLabel
              , h = this.props;
            h.onTab;
            h.onUpArrow;
            h.onDownArrow;
            h.onEscape;
            h = babelHelpers.objectWithoutPropertiesLoose(h, ["onTab", "onUpArrow", "onDownArrow", "onEscape"]);
            return g.jsxs("div", {
                ref: this.containerRef,
                className: this.props.className,
                tabIndex: c,
                children: [g.jsx(b("DraftEditor.react"), babelHelpers["extends"]({}, h, {
                    ref: this.abstractTextEditorRef,
                    editorRef: this.$18,
                    role: d,
                    ariaActiveDescendantID: this.state.ariaActiveDescendantID,
                    ariaAutoComplete: e,
                    ariaControls: this.$1,
                    ariaExpanded: a,
                    ariaHasPopup: a,
                    ariaLabel: f,
                    editorState: this.props.editorState,
                    onBlur: this.$8,
                    onChange: this.props.onChange,
                    onFocus: this.$7,
                    handleReturn: this.$14,
                    keyBindingFn: this.$13
                })), this.$16()]
            })
        }
        ;
        d.isShowingMentionables = function() {
            return !!this.state.mentionableEntries
        }
        ;
        return c
    }(g.Component);
    c.defaultProps = babelHelpers["extends"]({}, b("DraftEditor.react").defaultProps, {
        autoHighlight: !0,
        autoUpdateHighlight: !0,
        maxResults: a,
        reverseOrder: !1
    });
    c.propTypes = {
        mentionsSource: (d = b("prop-types")).object,
        assistantTypeaheadSource: d.object,
        mentionCreationForContentStateFn: d.func.isRequired,
        mentionTypeaheadCreationForContentStateFn: d.func,
        mentionResultsComponent: d.func.isRequired,
        mentionResultsProps: d.object,
        excludedEntries: d.object,
        handleContentReturn: d.func,
        onAddMention: d.func,
        onShowMentions: d.func,
        autoHighlight: d.bool,
        maxResults: d.number,
        webDriverTestID: d.string
    };
    e.exports = c
}
), null);
__d("DocumentCompositeMentionsSource", ["invariant", "createCancelableFunction", "emptyFunction", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
        var c = a.getCharacterList().toSeq().slice(0, b).reverse().takeWhile(function(a) {
            return a.getEntity() === null
        }).count();
        return a.getText().slice(b - c, b)
    }
    a = function() {
        function a(a) {
            a.length > 0 || g(0, 1514),
            this.$1 = a,
            this.$2 = !1,
            this.$3 = null
        }
        var c = a.prototype;
        c.bootstrap = function(a) {
            if (this.$2)
                return;
            this.$2 = !0;
            a = a || b("emptyFunction");
            var c = this.$1.length;
            function d() {
                c--,
                c || a && a()
            }
            this.$1.forEach(function(a) {
                a.bootstrap(d)
            })
        }
        ;
        c.search = function(a, c, d) {
            var e = c.getAnchorKey();
            a = a.getBlockForKey(e);
            var f = b("createCancelableFunction")(d);
            this.$4(h(a, c.getAnchorOffset()), f);
            return {
                remove: function() {
                    f.cancel()
                }
            }
        }
        ;
        c.$4 = function(a, c) {
            var d = this, e = this.$1.length, f, g;
            for (var h = 0; h < e; h++) {
                f = this.$1[h];
                g = f.findMatch(a);
                if (g === null)
                    continue;
                else {
                    var i = b("nullthrows")(g).matchingString;
                    this.$3 = i;
                    f.search(i, function(a, b) {
                        d.$3 === b && c(a, g.leadOffset)
                    });
                    return
                }
            }
            this.$3 = null;
            c(null, null)
        }
        ;
        c.getSources = function() {
            return this.$1
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("DocumentMentionsSource", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            typeof a.findMentionableString === "function" || g(0, 558),
            this.$1 = a,
            this.$2 = b,
            this.$3 = !1
        }
        var b = a.prototype;
        b.findMatch = function(a) {
            return this.$1.findMentionableString(a)
        }
        ;
        b.bootstrap = function(a) {
            this.$3 || (this.$3 = !0,
            this.$2.bootstrap(a))
        }
        ;
        b.search = function(a, b) {
            this.$2.search(a, b, {
                strategyName: this.$1.name,
                disableExistingIDs: !0
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("PhotosUploadWaterfall", ["AsyncRequest", "AsyncSignal", "Banzai", "PhotosUploadWaterfallXConfig", "ThisControllerNoLongerExists", "emptyFunction", "randomInt", "throttle"], (function(a, b, c, d, e, f) {
    var g = [];
    a = {
        APP_SIMPLE: "simple",
        APP_ARCHIVE: "archive",
        APP_COMPOSER: "composer",
        APP_MESSENGER: "messenger",
        APP_HTML5: "html5",
        APP_CHAT: "chat",
        INSTALL_CANCEL: 1,
        INSTALL_INSTALL: 2,
        INSTALL_UPDATE: 3,
        INSTALL_REINSTALL: 4,
        INSTALL_PERMA_CANCEL: 5,
        INSTALL_SILENT_SKIP: 6,
        INSTALL_DOWNLOAD: 7,
        CERROR_RESIZING_FAILED: 6,
        CERROR_MARKER_EXTRACTION_FAILED: 9,
        BEGIN: 1,
        UPLOAD_START: 4,
        ALL_UPLOADS_DONE: 6,
        CLIENT_ERROR: 7,
        RECOVERABLE_CLIENT_ERROR: 12,
        IMAGES_SELECTED: 9,
        UPGRADE_REQUIRED: 11,
        VERSION: 15,
        SELECT_START: 18,
        SELECT_CANCELED: 19,
        CANCEL: 22,
        CANCEL_DURING_UPLOAD: 83,
        ONE_RESIZING_START: 2,
        ONE_UPLOAD_START: 10,
        ONE_UPLOAD_DONE: 29,
        ONE_RESIZING_DONE: 34,
        PROGRESS_BAR_STOPPED: 44,
        MISSED_BEAT: 45,
        HEART_ATTACK: 46,
        PUBLISH_SENT: 99,
        PUBLISH_START: 100,
        PUBLISH_SUCCESS: 101,
        PUBLISH_FAILURE: 102,
        CLUSTERING_START: 103,
        CLUSTERING_SUCCESS: 104,
        CLUSTERING_FAILURE: 105,
        POST_BUTTON_CLICKED: 110,
        POST_BUTTON_ERROR: 111,
        PHOTO_DELETED: 114,
        PUBLISH_CLIENT_SUCCESS: 115,
        PHOTO_ROTATED: 117,
        SAVE_DRAFT_BUTTON_CLICKED: 123,
        RECOVERY_START_ON_CLIENT: 124,
        CHANGE_PHOTO_QUALITY_SETTING: 126,
        TAG_ADDED: 127,
        TAG_REMOVED: 128,
        TAB_BUTTON_CLICKED: 129,
        DONE_SPHERICAL_CHECK: 131,
        FAIL_SPHERICAL_CHECK: 133,
        EDITABLE_PHOTO_FETCH_START: 106,
        EDITABLE_PHOTO_FETCH_SUCCESS: 107,
        EDITABLE_PHOTO_FETCH_FAILURE: 108,
        EDITABLE_PHOTO_FETCH_DELAY: 116,
        CANCEL_INDIVIDUAL_UPLOAD: 109,
        MISSING_OVERLAY_NODE: 118,
        PUBLISH_RETRY_FAILURE: 119,
        MISSING_UPLOAD_STATE: 120,
        SESSION_POSTED: 72,
        POST_PUBLISHED: 80,
        ONE_UPLOAD_CANCELED: 81,
        ONE_UPLOAD_CANCELED_DURING_UPLOAD: 82,
        RESIZER_AVAILABLE: 20,
        OVERLAY_FIRST: 61,
        ASYNC_AVAILABLE: 63,
        FALLBACK_TO_HTML5: 130,
        RETRY_UPLOAD: 17,
        TAGGED_ALL_FACES: 14,
        VAULT_IMAGES_SELECTED: 62,
        VAULT_CREATE_POST_CANCEL: 65,
        VAULT_SEND_IN_MESSAGE_CLICKED: 66,
        VAULT_DELETE_CANCEL: 68,
        VAULT_ADD_TO_ALBUM_CANCEL: 74,
        VAULT_SHARE_IN_AN_ALBUM_CLICKED: 76,
        VAULT_SHARE_OWN_TIMELINE_CLICKED: 77,
        VAULT_SHARE_FRIENDS_TIMELINE_CLICKED: 78,
        VAULT_SHARE_IN_A_GROUP_CLICKED: 79,
        VAULT_SYNCED_PAGED_LINK_CLICKED: 84,
        VAULTBOX: "vaultbox",
        GRID: "grid",
        SPOTLIGHT_VAULT_VIEWER: "spotlight_vault_viewer",
        REF_VAULT_NOTIFICATION: "vault_notification",
        _checkRequiredFields: function(a) {},
        sendBanzai: function(a, c) {
            this._checkRequiredFields(a);
            var d = {};
            a.scuba_ints = a.scuba_ints || {};
            a.scuba_ints.client_time = Math.round(Date.now() / 1e3);
            b("PhotosUploadWaterfallXConfig").retryBanzai && (d.retry = !0,
            a.scuba_ints.nonce = b("randomInt")(4294967296));
            b("Banzai").post(b("PhotosUploadWaterfallXConfig").deprecatedBanzaiRoute, a, d);
            c && setTimeout(c, 0)
        },
        sendSignal: function(a, c) {
            this._checkRequiredFields(a);
            if (b("PhotosUploadWaterfallXConfig").useBanzai)
                this.sendBanzai(a, c);
            else {
                a = new (b("AsyncSignal"))("/ajax/photos/waterfall.php",{
                    data: JSON.stringify(a)
                }).setHandler(c);
                b("PhotosUploadWaterfallXConfig").timeout && a.setTimeout(10 * 1e3);
                a.send()
            }
        },
        queueLog: function(a, b) {
            g.push(a),
            b ? this.flushQueue(b) : h()
        },
        flushQueue: function(a) {
            var c = JSON.stringify(g);
            g = [];
            var d = b("ThisControllerNoLongerExists").__DEADURI__("b18c5aklg");
            new (b("AsyncRequest"))().setURI(d).setData({
                logs: c
            }).setFinallyHandler(a || b("emptyFunction")).setTimeoutHandler(10 * 1e3, a || b("emptyFunction")).send()
        }
    };
    var h = b("throttle")(a.flushQueue, b("PhotosUploadWaterfallXConfig").batchInterval * 1e3);
    e.exports = a
}
), null);
__d("isEventSupported", ["fbjs/lib/ExecutionEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    b("fbjs/lib/ExecutionEnvironment").canUseDOM && (g = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
    function a(a, c) {
        if (!b("fbjs/lib/ExecutionEnvironment").canUseDOM || c && !("addEventListener"in document))
            return !1;
        c = "on" + a;
        var d = c in document;
        if (!d) {
            var e = document.createElement("div");
            e.setAttribute(c, "return;");
            d = typeof e[c] === "function"
        }
        !d && g && a === "wheel" && (d = document.implementation.hasFeature("Events.wheel", "3.0"));
        return d
    }
    e.exports = a
}
), null);
__d("DraftEditorTextNode.react", ["invariant", "React", "UserAgent", "isElement"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("UserAgent").isBrowser("IE <= 11");
    function j(a) {
        return i ? a.textContent === "\n" : a.tagName === "BR"
    }
    var k = function(a) {
        return i ? h.jsx("span", {
            "data-text": "true",
            ref: a,
            children: "\n"
        }, "A") : h.jsx("br", {
            "data-text": "true",
            ref: a
        }, "A")
    }
      , l = function(a) {
        return i ? h.jsx("span", {
            "data-text": "true",
            ref: a,
            children: "\n"
        }, "B") : h.jsx("br", {
            "data-text": "true",
            ref: a
        }, "B")
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            b = a.call(this, b) || this;
            b.$1 = !1;
            return b
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            var c = this.$2
              , d = a.children === "";
            b("isElement")(c) || g(0, 6158);
            c = c;
            return d ? !j(c) : c.textContent !== a.children
        }
        ;
        d.componentDidMount = function() {
            this.$1 = !this.$1
        }
        ;
        d.componentDidUpdate = function() {
            this.$1 = !this.$1
        }
        ;
        d.render = function() {
            var a = this;
            return this.props.children === "" ? this.$1 ? k(function(b) {
                return a.$2 = b
            }) : l(function(b) {
                return a.$2 = b
            }) : h.jsx("span", {
                "data-text": "true",
                ref: function(b) {
                    return a.$2 = b
                },
                children: this.props.children
            }, this.$1 ? "A" : "B")
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("setDraftEditorSelection", ["invariant", "DraftEffects", "DraftJsDebugLogging", "UserAgent", "containsNode", "getActiveElement", "getCorrectDocumentFromNode", "isElement"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("UserAgent").isBrowser("IE");
    function i(a, c) {
        if (!a)
            return "[empty]";
        a = j(a, c);
        if (a.nodeType === Node.TEXT_NODE)
            return a.textContent;
        b("isElement")(a) || g(0, 3425);
        c = a;
        return c.outerHTML
    }
    function j(a, c) {
        var d = c !== void 0 ? c(a) : [];
        if (a.nodeType === Node.TEXT_NODE) {
            var e = a.textContent.length;
            return b("getCorrectDocumentFromNode")(a).createTextNode("[text " + e + (d.length ? " | " + d.join(", ") : "") + "]")
        }
        e = a.cloneNode();
        e.nodeType === 1 && d.length && e.setAttribute("data-labels", d.join(", "));
        d = a.childNodes;
        for (var a = 0; a < d.length; a++)
            e.appendChild(j(d[a], c));
        return e
    }
    function k(a, c) {
        a = a;
        var d = a;
        while (a)
            if (b("isElement")(a) && d.hasAttribute("contenteditable"))
                return i(a, c);
            else
                a = a.parentNode,
                d = a;
        return "Could not find contentEditable parent of node"
    }
    function l(a) {
        return a.nodeValue === null ? a.childNodes.length : a.nodeValue.length
    }
    function a(a, c, d, e, f) {
        var g = b("getCorrectDocumentFromNode")(c);
        if (!b("containsNode")(g.documentElement, c))
            return;
        g = g.defaultView.getSelection();
        var h = a.getAnchorKey()
          , i = a.getAnchorOffset()
          , j = a.getFocusKey()
          , k = a.getFocusOffset()
          , l = a.getIsBackward();
        if (!g.extend && l) {
            var o = h
              , p = i;
            h = j;
            i = k;
            j = o;
            k = p;
            l = !1
        }
        o = h === d && e <= i && f >= i;
        p = j === d && e <= k && f >= k;
        if (o && p) {
            g.removeAllRanges();
            n(g, c, i - e, a);
            m(g, c, k - e, a);
            return
        }
        if (!l)
            o && (g.removeAllRanges(),
            n(g, c, i - e, a)),
            p && m(g, c, k - e, a);
        else {
            p && (g.removeAllRanges(),
            n(g, c, k - e, a));
            if (o) {
                h = g.focusNode;
                j = g.focusOffset;
                g.removeAllRanges();
                n(g, c, i - e, a);
                m(g, h, j, a)
            }
        }
    }
    function m(a, c, d, e) {
        var f = b("getActiveElement")()
          , g = a.extend;
        if (g && c != null && b("containsNode")(f, c)) {
            d > l(c) && b("DraftJsDebugLogging").logSelectionStateFailure({
                anonymizedDom: k(c),
                extraParams: JSON.stringify({
                    offset: d
                }),
                selectionState: JSON.stringify(e.toJS())
            });
            g = c === a.focusNode;
            try {
                a.rangeCount > 0 && a.extend && a.extend(c, d)
            } catch (h) {
                b("DraftJsDebugLogging").logSelectionStateFailure({
                    anonymizedDom: k(c, function(b) {
                        var c = [];
                        b === f && c.push("active element");
                        b === a.anchorNode && c.push("selection anchor node");
                        b === a.focusNode && c.push("selection focus node");
                        return c
                    }),
                    extraParams: JSON.stringify({
                        activeElementName: f ? f.nodeName : null,
                        nodeIsFocus: c === a.focusNode,
                        nodeWasFocus: g,
                        selectionRangeCount: a.rangeCount,
                        selectionAnchorNodeName: a.anchorNode ? a.anchorNode.nodeName : null,
                        selectionAnchorOffset: a.anchorOffset,
                        selectionFocusNodeName: a.focusNode ? a.focusNode.nodeName : null,
                        selectionFocusOffset: a.focusOffset,
                        message: h ? "" + h : null,
                        offset: d
                    }, null, 2),
                    selectionState: JSON.stringify(e.toJS(), null, 2)
                });
                throw h
            }
        } else if (c && a.rangeCount > 0) {
            g = a.getRangeAt(0);
            g.setEnd(c, d);
            a.addRange(g.cloneRange())
        }
    }
    function n(a, c, d, e) {
        var f = b("getCorrectDocumentFromNode")(c).createRange();
        d > l(c) && (b("DraftJsDebugLogging").logSelectionStateFailure({
            anonymizedDom: k(c),
            extraParams: JSON.stringify({
                offset: d
            }),
            selectionState: JSON.stringify(e.toJS())
        }),
        b("DraftEffects").handleExtensionCausedError());
        f.setStart(c, d);
        if (h)
            try {
                a.addRange(f)
            } catch (a) {}
        else
            a.addRange(f)
    }
    e.exports = {
        setDraftEditorSelection: a,
        addFocusToSelection: m
    }
}
), null);
__d("DraftEditorLeaf.react", ["invariant", "DraftEditorTextNode.react", "React", "isHTMLBRElement", "setDraftEditorSelection"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("setDraftEditorSelection").setDraftEditorSelection;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.$1 = function() {
            var a = this.props.selection;
            if (a == null || !a.getHasFocus())
                return;
            var c = this.props
              , d = c.block
              , e = c.start;
            c = c.text;
            d = d.getKey();
            c = e + c.length;
            if (!a.hasEdgeWithin(d, e, c))
                return;
            var f = this.leaf;
            f || g(0, 5590);
            var h = f.firstChild;
            h || g(0, 5591);
            var j;
            h.nodeType === Node.TEXT_NODE ? j = h : b("isHTMLBRElement")(h) ? j = f : (j = h.firstChild,
            j || g(0, 5592));
            i(a, j, d, e, c)
        }
        ;
        d.shouldComponentUpdate = function(a) {
            var b = this.leaf;
            b || g(0, 5593);
            b = b.textContent !== a.text || a.styleSet !== this.props.styleSet || a.forceSelection;
            return b
        }
        ;
        d.componentDidUpdate = function() {
            this.$1()
        }
        ;
        d.componentDidMount = function() {
            this.$1()
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props.block
              , d = this.props.text;
            d.endsWith("\n") && this.props.isLast && (d += "\n");
            var e = this.props
              , f = e.customStyleMap
              , g = e.customStyleFn
              , i = e.offsetKey;
            e = e.styleSet;
            var j = e.reduce(function(a, b) {
                var c = {};
                b = f[b];
                b !== void 0 && a.textDecoration !== b.textDecoration && (c.textDecoration = [a.textDecoration, b.textDecoration].join(" ").trim());
                return Object.assign(a, b, c)
            }, {});
            if (g) {
                g = g(e, c);
                j = Object.assign(j, g)
            }
            return h.jsx("span", {
                "data-offset-key": i,
                ref: function(b) {
                    return a.leaf = b
                },
                style: j,
                children: h.jsx(b("DraftEditorTextNode.react"), {
                    children: d
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("DraftEditorBlock.react", ["cx", "invariant", "DraftEditorLeaf.react", "DraftOffsetKey", "React", "Scroll", "Style", "UnicodeBidi", "UnicodeBidiDirection", "getElementPosition", "getScrollPosition", "getViewportDimensions", "isHTMLElement", "nullthrows"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = 10
      , k = function(a, b) {
        return a.getAnchorKey() === b || a.getFocusKey() === b
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            return this.props.block !== a.block || this.props.tree !== a.tree || this.props.direction !== a.direction || k(a.selection, a.block.getKey()) && a.forceSelection
        }
        ;
        d.componentDidMount = function() {
            if (this.props.preventScroll)
                return;
            var a = this.props.selection
              , c = a.getEndKey();
            if (!a.getHasFocus() || c !== this.props.block.getKey())
                return;
            a = this.$1;
            if (a == null)
                return;
            c = b("Style").getScrollParent(a);
            var d = b("getScrollPosition")(c);
            if (c === window) {
                var e = b("getElementPosition")(a);
                e = e.y + e.height;
                var f = b("getViewportDimensions")().height;
                e = e - f;
                e > 0 && window.scrollTo(d.x, d.y + e + j)
            } else {
                b("isHTMLElement")(a) || h(0, 4852);
                f = a.offsetHeight + a.offsetTop;
                a = c.offsetTop + c.offsetHeight;
                a = a + d.y;
                e = f - a;
                e > 0 && b("Scroll").setTop(c, b("Scroll").getTop(c) + e + j)
            }
        }
        ;
        d.$2 = function() {
            var a = this
              , c = this.props.block
              , d = c.getKey()
              , e = c.getText()
              , f = this.props.tree.size - 1
              , g = k(this.props.selection, d);
            return this.props.tree.map(function(h, j) {
                var k = h.get("leaves");
                if (k.size === 0)
                    return null;
                var l = k.size - 1
                  , m = k.map(function(k, m) {
                    var n = b("DraftOffsetKey").encode(d, j, m)
                      , h = k.get("start");
                    k = k.get("end");
                    return i.jsx(b("DraftEditorLeaf.react"), {
                        offsetKey: n,
                        block: c,
                        start: h,
                        selection: g ? a.props.selection : null,
                        forceSelection: a.props.forceSelection,
                        text: e.slice(h, k),
                        styleSet: c.getInlineStyleAt(h),
                        customStyleMap: a.props.customStyleMap,
                        customStyleFn: a.props.customStyleFn,
                        isLast: j === f && m === l
                    }, n)
                }).toArray()
                  , n = h.get("decoratorKey");
                if (n == null)
                    return m;
                if (!a.props.decorator)
                    return m;
                var o = b("nullthrows")(a.props.decorator)
                  , p = o.getComponentForKey(n);
                if (!p)
                    return m;
                o = o.getPropsForKey(n);
                n = b("DraftOffsetKey").encode(d, j, 0);
                var q = k.first().get("start");
                k = k.last().get("end");
                var r = e.slice(q, k);
                h = c.getEntityAt(h.get("start"));
                var s = b("UnicodeBidiDirection").getHTMLDirIfDifferent(b("UnicodeBidi").getDirection(r), a.props.direction);
                r = {
                    contentState: a.props.contentState,
                    decoratedText: r,
                    dir: s,
                    start: q,
                    end: k,
                    blockKey: d,
                    entityKey: h,
                    offsetKey: n
                };
                return i.createElement(p, babelHelpers["extends"]({}, o, r, {
                    key: n
                }), m)
            }).toArray()
        }
        ;
        d.render = function() {
            var a = this
              , b = this.props
              , c = b.direction;
            b = b.offsetKey;
            c = "_1mf" + (c === "LTR" ? " _1mj" : "") + (c === "RTL" ? " _1mk" : "");
            return i.jsx("div", {
                "data-offset-key": b,
                className: c,
                ref: function(b) {
                    return a.$1 = b
                },
                children: this.$2()
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
__d("DraftEditorContents-core.react", ["cx", "DraftEditorBlock.react", "DraftOffsetKey", "React", "joinClasses", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = function(a, b, c, d) {
        return (a === "unordered-list-item" ? "_3kpz" : "") + (a === "ordered-list-item" ? " _3kp_" : "") + (c ? " _3kq0" : "") + (b === 0 ? " _3kq1" : "") + (b === 1 ? " _3kq2" : "") + (b === 2 ? " _3kq3" : "") + (b === 3 ? " _3kq4" : "") + (b >= 4 ? " _3kq5" : "") + (d === "LTR" ? " _3kq6" : "") + (d === "RTL" ? " _3kq7" : "")
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            var b = this.props.editorState;
            a = a.editorState;
            var c = b.getDirectionMap()
              , d = a.getDirectionMap();
            if (c !== d)
                return !0;
            c = b.getSelection().getHasFocus();
            d = a.getSelection().getHasFocus();
            if (c !== d)
                return !0;
            c = a.getNativelyRenderedContent();
            d = b.isInCompositionMode();
            var e = a.isInCompositionMode();
            if (b === a || c !== null && a.getCurrentContent() === c || d && e)
                return !1;
            c = b.getCurrentContent();
            var f = a.getCurrentContent();
            b = b.getDecorator();
            var g = a.getDecorator();
            return d !== e || c !== f || b !== g || a.mustForceSelection()
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.blockRenderMap
              , d = a.blockRendererFn
              , e = a.blockStyleFn
              , f = a.customStyleMap
              , g = a.customStyleFn
              , j = a.editorState
              , k = a.editorKey
              , l = a.preventScroll;
            a = a.textDirectionality;
            var m = j.getCurrentContent()
              , n = j.getSelection()
              , o = j.mustForceSelection()
              , p = j.getDecorator()
              , q = b("nullthrows")(j.getDirectionMap())
              , r = m.getBlocksAsArray()
              , s = []
              , t = null
              , u = null;
            for (var v = 0; v < r.length; v++) {
                var w = r[v]
                  , x = w.getKey()
                  , y = w.getType()
                  , z = d(w)
                  , A = void 0
                  , B = void 0
                  , C = void 0;
                z && (A = z.component,
                B = z.props,
                C = z.editable);
                z = a ? a : q.get(x);
                var D = b("DraftOffsetKey").encode(x, 0, 0);
                B = {
                    contentState: m,
                    block: w,
                    blockProps: B,
                    blockStyleFn: e,
                    customStyleMap: f,
                    customStyleFn: g,
                    decorator: p,
                    direction: z,
                    forceSelection: o,
                    offsetKey: D,
                    preventScroll: l,
                    selection: n,
                    tree: j.getBlockTree(x)
                };
                var E = c.get(y) || c.get("unstyled")
                  , F = E.wrapper;
                E = E.element || c.get("unstyled").element;
                var G = w.getDepth()
                  , H = "";
                e && (H = e(w));
                if (E === "li") {
                    var I = u !== F || t === null || G > t;
                    H = b("joinClasses")(H, i(y, G, I, z))
                }
                y = A || b("DraftEditorBlock.react");
                G = {
                    className: H,
                    "data-block": !0,
                    "data-editor": k,
                    "data-offset-key": D,
                    key: x
                };
                C !== void 0 && (G = babelHelpers["extends"]({}, G, {
                    contentEditable: C,
                    suppressContentEditableWarning: !0
                }));
                I = h.createElement(E, G, h.createElement(y, babelHelpers["extends"]({}, B, {
                    key: x
                })));
                s.push({
                    block: I,
                    wrapperTemplate: F,
                    key: x,
                    offsetKey: D
                });
                F ? t = w.getDepth() : t = null;
                u = F
            }
            z = [];
            for (var A = 0; A < s.length; ) {
                H = s[A];
                if (H.wrapperTemplate) {
                    C = [];
                    do
                        C.push(s[A].block),
                        A++;
                    while (A < s.length && s[A].wrapperTemplate === H.wrapperTemplate);E = h.cloneElement(H.wrapperTemplate, {
                        key: H.key + "-wrap",
                        "data-offset-key": H.offsetKey
                    }, C);
                    z.push(E)
                } else
                    z.push(H.block),
                    A++
            }
            return h.jsx("div", {
                "data-contents": "true",
                children: z
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
