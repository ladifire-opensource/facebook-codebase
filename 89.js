if (self.CavalryLogger) {
    CavalryLogger.start_js(["N8InH"]);
}

__d("VideoComponentWithLoopingPlaybackQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "videoID"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "videoID"
        }]
          , c = {
            kind: "InlineFragment",
            selections: [{
                alias: "isLooping",
                args: null,
                kind: "ScalarField",
                name: "is_looping",
                storageKey: null
            }, {
                alias: "loopCount",
                args: null,
                kind: "ScalarField",
                name: "loop_count",
                storageKey: null
            }],
            type: "Video",
            abstractKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "VideoComponentWithLoopingPlaybackQuery",
                selections: [{
                    alias: "video",
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [c],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "VideoComponentWithLoopingPlaybackQuery",
                selections: [{
                    alias: "video",
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }, c],
                    storageKey: null
                }]
            },
            params: {
                id: "1746038078808360",
                metadata: {},
                name: "VideoComponentWithLoopingPlaybackQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BUISwitch.react", ["cx", "fbt", "BUIComponent", "Event", "Keys", "React", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$BUISwitch1 = function(a) {
                if (d.props.disabled)
                    return;
                d.props.onToggle && d.props.onToggle(!d.props.value);
                d.props.preventEventBubbling && a.stopPropagation()
            }
            ,
            d.$BUISwitch2 = function(a) {
                if (d.props.disabled)
                    return;
                var c = b("Event").getKeyCode(a);
                (c === b("Keys").RETURN || c === b("Keys").SPACE) && (a.preventDefault(),
                d.props.onToggle && d.props.onToggle(!d.props.value),
                d.props.preventEventBubbling && a.stopPropagation())
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return i.jsxs("div", babelHelpers["extends"]({}, this.props, {
                className: "_128j" + (this.props.value ? " _128k" : "") + (this.props.value ? "" : " _128l") + (this.props.disabled ? " _128m" : "") + (this.props.animate ? " _128n" : "") + (this.props.inline ? " _3n6a" : ""),
                children: [i.jsx("div", {
                    "aria-checked": this.props.value ? "true" : "false",
                    className: "_128o",
                    onClick: this.$BUISwitch1,
                    onKeyDown: this.$BUISwitch2,
                    onMouseDown: this.$BUISwitch3,
                    role: "switch",
                    tabIndex: this.props.disabled ? "-1" : "0",
                    children: i.jsx("div", {
                        className: "_128p"
                    })
                }), this.$BUISwitch4()]
            }))
        }
        ;
        d.$BUISwitch4 = function() {
            return !this.props.showLabel ? null : i.jsx("span", {
                className: "_128q",
                children: this.props.value ? h._("B\u1eacT") : h._("T\u1eaeT")
            })
        }
        ;
        d.$BUISwitch3 = function(a) {
            a.preventDefault()
        }
        ;
        return c
    }(b("BUIComponent"));
    e.exports = a;
    a.propTypes = {
        animate: (c = b("prop-types")).bool.isRequired,
        disabled: c.bool,
        onToggle: c.func,
        showLabel: c.bool,
        value: c.bool.isRequired,
        preventEventBubbling: c.bool,
        inline: c.bool
    };
    a.defaultProps = {
        animate: !0
    }
}
), null);
__d("addEmojiToEditorState", ["DraftModifier", "EditorState", "FBEmojiUtils", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        d === void 0 && (d = b("emptyFunction"));
        a = typeof a !== "string" ? b("FBEmojiUtils").codepointsToString(a) : a;
        a = b("DraftModifier").replaceText(c.getCurrentContent(), c.getSelection(), a);
        a = b("EditorState").push(c, a, "insert-characters");
        a !== c && d(a);
        return a
    }
}
), null);
__d("XUIMenuSeparator.react", ["MenuSeparator.react"], (function(a, b, c, d, e, f) {
    a = b("MenuSeparator.react");
    c = a;
    e.exports = c
}
), null);
__d("ReactPagesComposerGlobalFlags", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.setIsPagesComposer = a;
    f.setIsObjectiveFirstPagesComposer = b;
    f.getIsPagesComposer = c;
    f.getIsObjectiveFirstPagesComposer = d;
    e = !1;
    f._isPagesComposer = e;
    a = !1;
    f._isObjectiveFirstPagesComposer = a;
    function a(a) {
        this._isPagesComposer = a
    }
    function b(a) {
        this._isObjectiveFirstPagesComposer = a,
        this._isPagesComposer = this._isObjectiveFirstPagesComposer
    }
    function c() {
        return this._isPagesComposer
    }
    function d() {
        return this._isObjectiveFirstPagesComposer
    }
}
), null);
__d("XComposerXVideoUploadDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/composerx/video/dialog/", {
        target_id: {
            type: "FBID",
            required: !0
        },
        source_id: {
            type: "String",
            required: !0
        },
        entry_point: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        is_reference_video: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
__d("ComposerXVideoUploadDialogController_DEPRECATED", ["ActorURI", "Arbiter", "AsyncDialog", "AsyncRequest", "Bootloader", "DOM", "JSResource", "React", "ReactDOM", "ReactPagesComposerGlobalFlags", "VideoComposerDialogUITypedLogger", "XComposerXVideoUploadDialogController", "lazyLoadComponent"], (function(a, b, c, d, e, f) {
    var g = b("React")
      , h = b("JSResource")("ComposerXVideoUploadDialog.react").__setRef("ComposerXVideoUploadDialogController_DEPRECATED")
      , i = b("lazyLoadComponent")(h)
      , j = {};
    function k(a) {
        return j[a]
    }
    function l(a) {
        j[a.getID()] = a
    }
    function m(a) {
        delete j[a]
    }
    function n(a) {
        return a in j
    }
    var o = "timeline";
    a = function() {
        "use strict";
        function a(c, d, e, f, g, h, i, j, k, l) {
            this.$1 = c,
            this.$2 = d,
            this.$3 = e,
            this.$4 = f,
            this.$5 = g,
            this.$6 = h,
            this.$7 = i,
            this.$8 = j,
            this.$9 = k,
            this.$10 = l,
            this.$11 = a.$12(this.$1, this.$4, this.$8),
            this.$13 = !1,
            this.$14 = b("DOM").create("span"),
            b("DOM").appendContent(document.body, this.$14),
            this.$15()
        }
        var c = a.prototype;
        c.getID = function() {
            return this.$11
        }
        ;
        c.setFileInput = function(a) {
            this.$2 = a
        }
        ;
        c.getFileInput = function() {
            return this.$2
        }
        ;
        c.setDroppedFiles = function(a) {
            this.$3 = a
        }
        ;
        c.getDroppedFiles = function() {
            return this.$3
        }
        ;
        c.$16 = function(a) {
            this.$17 = a,
            this.$18 && this.show()
        }
        ;
        c.$19 = function() {
            b("ReactPagesComposerGlobalFlags").getIsObjectiveFirstPagesComposer() && b("Bootloader").loadModules(["PagesPublishingLoggingActions", "PagesPublishingFunnelLoggingAdditionalPostTypes"], function(a, b) {
                a.setPostType(b.VIDEO)
            }, "ComposerXVideoUploadDialogController_DEPRECATED")
        }
        ;
        c.$15 = function() {
            var a = this
              , c = b("XComposerXVideoUploadDialogController").getURIBuilder().setFBID("target_id", this.$1).setString("source_id", this.$11).setEnum("entry_point", this.$4).setBool("is_reference_video", this.$9).getURI();
            c = b("ActorURI").create(c, this.$1);
            h.load();
            b("AsyncDialog").send(new (b("AsyncRequest"))(c).setAbortHandler(function() {
                a.$2.clear(),
                m(a.$11)
            }))
        }
        ;
        c.$20 = function() {
            this.$19(),
            b("ReactDOM").render(g.jsx(g.Suspense, {
                fallback: null,
                children: g.jsx(i, {
                    canShowOptimisticPost: this.$7,
                    composer: this.$17,
                    composerID: this.$11,
                    composerEntryPointRef: this.$4,
                    isProfileVideo: this.$4 === "profile_video",
                    isReferenceVideo: this.$9,
                    showDialogCancelButton: this.$5,
                    showProcessingDialog: this.$6,
                    isPageTrailer: this.$4 === "page_trailer",
                    onCancel: this.$21.bind(this),
                    onDone: this.$22.bind(this)
                })
            }), this.$14),
            this.$13 = !0
        }
        ;
        c.show = function() {
            this.$17 ? (this.$18 = !1,
            this.$2 ? b("Arbiter").inform("ComposerXFilesStore/filesAdded/" + this.$11 + "/videoupload", {
                fileInput: this.$2
            }, "persistent") : this.$3 && b("Arbiter").inform("ComposerXFilesStore/filesDropped/" + this.$11 + "/videoupload", {
                files: this.$3
            }, "persistent"),
            this.$20()) : this.$18 = !0
        }
        ;
        c.$21 = function() {
            b("Arbiter").inform("videoUpload/cancel", {
                composerID: this.$11
            }),
            this.hide()
        }
        ;
        c.$22 = function(a) {
            b("Arbiter").inform("videoUpload/" + this.$11 + "/done"),
            b("Arbiter").inform("Pages/composeFinished", {
                composerID: this.$11
            }),
            this.hide()
        }
        ;
        c.hide = function() {
            b("ReactDOM").unmountComponentAtNode(this.$14),
            this.$13 = !1
        }
        ;
        a.getComposerInstance = function(a) {
            return k(a)
        }
        ;
        a.$12 = function(a, b, c) {
            if (c)
                return c;
            else
                return b + "_" + a
        }
        ;
        a.clearInstances = function() {
            j = {}
        }
        ;
        a.showDialog = function(c) {
            c.composerEntryPointRef = c.composerEntryPointRef || o;
            var d = a.$12(c.targetID, c.composerEntryPointRef, c.originalComposerID);
            if (!c.fileInput && !c.files)
                return;
            !n(d) ? l(new a(c.targetID,c.fileInput || null,c.files || null,c.composerEntryPointRef,c.showDialogCancelButton || !1,c.showProcessingDialog || !1,c.canShowOptimisticPost || !1,c.originalComposerID || "",c.isReferenceVideoUpload || !1)) : (new (b("VideoComposerDialogUITypedLogger"))().setEvent("dialog_requested").setActorID(c.targetID).setComposerDialogVersion("V1").setComposerEntryPoint(c.composerEntryPointRef).setDialogMode("video_upload").log(),
            c.fileInput ? k(d).setFileInput(c.fileInput) : c.files && k(d).setDroppedFiles(c.files));
            k(d).show()
        }
        ;
        a.setVideoComposer = function(a, b) {
            j[a] && j[a].$16(b)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("PopoverMenuOverlappingBorder", ["cx", "CSS", "DOM", "Style", "shield"], (function(a, b, c, d, e, f, g) {
    a = function() {
        "use strict";
        function a(a) {
            this._popoverMenu = a,
            this._popover = a.getPopover(),
            this._triggerElem = a.getTriggerElem()
        }
        var c = a.prototype;
        c.enable = function() {
            this._setMenuSubscription = this._popoverMenu.subscribe("setMenu", b("shield")(this._onSetMenu, this))
        }
        ;
        c.disable = function() {
            this._popoverMenu.unsubscribe(this._setMenuSubscription),
            this._setMenuSubscription = null,
            this._removeBorderSubscriptions(),
            this._removeShortBorder()
        }
        ;
        c._onSetMenu = function() {
            this._removeBorderSubscriptions();
            this._menu = this._popoverMenu.getMenu();
            this._renderShortBorder(this._menu.getRoot());
            this._showSubscription = this._popover.subscribe("show", b("shield")(this._updateBorder, this));
            var a = this._updateBorder.bind(this);
            this._menuSubscription = this._menu.subscribe(["change", "resize"], function() {
                setTimeout(a, 0)
            });
            this._updateBorder()
        }
        ;
        c._updateBorder = function() {
            var a = this._menu.getRoot()
              , c = this._triggerElem.offsetWidth;
            a = Math.max(a.offsetWidth - c, 0);
            b("Style").set(this._shortBorder, "width", a + "px")
        }
        ;
        c._renderShortBorder = function(a) {
            this._shortBorder = b("DOM").create("div", {
                className: "_54hx"
            }),
            b("DOM").appendContent(a, this._shortBorder),
            b("CSS").addClass(a, "_54hy")
        }
        ;
        c._removeShortBorder = function() {
            this._shortBorder && (b("DOM").remove(this._shortBorder),
            this._shortBorder = null,
            b("CSS").removeClass(this._popoverMenu.getMenu().getRoot(), "_54hy"))
        }
        ;
        c._removeBorderSubscriptions = function() {
            this._showSubscription && (this._popover.unsubscribe(this._showSubscription),
            this._showSubscription = null),
            this._menuSubscription && (this._menu.unsubscribe(this._menuSubscription),
            this._menuSubscription = null)
        }
        ;
        return a
    }();
    Object.assign(a.prototype, {
        _shortBorder: null,
        _setMenuSubscription: null,
        _showSubscription: null,
        _menuSubscription: null
    });
    e.exports = a
}
), null);
__d("CanvasToBlobImpl", ["BlobFactory"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        a = atob(a.substr(a.indexOf(",") + 1));
        var d = new Uint8Array(a.length);
        for (var e = 0; e < a.length; e++)
            d[e] = a.charCodeAt(e);
        return b("BlobFactory").getBlob([d], {
            type: c
        })
    }
    e.exports = {
        getBlob: a
    }
}
), null);
__d("dataURLToBlob", ["Promise", "BlobFactory", "CanvasToBlobImpl", "CanvasToBlobResource", "WebWorker"], (function(a, b, c, d, e, f) {
    e.exports = c;
    var g = a.URL || a.webkitURL || {};
    function c(a, c) {
        if (!g.createObjectURL || !b("BlobFactory").isSupported)
            return b("Promise").reject("Browser doesn't support this feature");
        if (b("WebWorker").isSupported())
            return new (b("Promise"))(function(d, e) {
                var f = new (b("WebWorker"))(b("CanvasToBlobResource")).setMessageHandler(function(a) {
                    d(a),
                    f.terminate()
                }).setErrorHandler(function(a) {
                    e(a.message),
                    f.terminate()
                }).execute().postMessage({
                    dataURL: a,
                    fileType: c
                })
            }
            );
        else
            return b("Promise").resolve(b("CanvasToBlobImpl").getBlob(a, c))
    }
}
), null);
__d("canvasToBlob", ["Promise", "dataURLToBlob", "promiseDone"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, c, d) {
        return new (b("Promise"))(function(e, f) {
            if (a.toBlob)
                a.toBlob(e, c, d);
            else {
                var g = a.toDataURL(c, d);
                b("promiseDone")(b("dataURLToBlob")(g, c).then(function(a) {
                    e(a)
                }, f))
            }
        }
        )
    }
}
), null);
__d("VideoComponentWithLoopingPlayback.react", ["FBLogger", "React", "RelayModern", "VideoComponent", "VideoWithLoopingPlayback", "VideoComponentWithLoopingPlaybackQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = b("React");
    function h(a) {
        var b = a.video;
        if (b) {
            var c = a.infiniteLooping ? Number.POSITIVE_INFINITY : b.loopCount;
            b = b.isLooping || a.forceLooping || a.infiniteLooping;
            if (b)
                return c;
            else
                return 1
        } else
            return 0
    }
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = null,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidUpdate = function(a) {
            var c = h(this.props);
            a = h(a);
            c !== a && (this.$1 ? this.$1.setMaxLoopCount(c) : b("FBLogger")("video").mustfix("Missing instance of VideoWithLoopingPlayback in componentDidUpdate"))
        }
        ;
        d.enable = function(a) {
            this.$1 != null && (this.$1.destroy(),
            b("FBLogger")("video").mustfix("Existing instance of VideoWithLoopingPlayback in enable; is disable not called before?")),
            this.$1 = new (b("VideoWithLoopingPlayback"))(a,h(this.props))
        }
        ;
        d.disable = function() {
            this.$1 != null && (this.$1.destroy(),
            this.$1 = null)
        }
        ;
        d.render = function() {
            return null
        }
        ;
        return c
    }(a.Component);
    d = b("VideoComponent").createContainer(c, {
        videoGraphQLQuery: g !== void 0 ? g : g = b("VideoComponentWithLoopingPlaybackQuery.graphql")
    });
    e.exports = d
}
), null);
__d("EventActionContext", ["EventNotificationTypesForGraphQL", "FBJSON", "compactArray"], (function(a, b, c, d, e, f) {
    "use strict";
    f.toString = a;
    f.getActionHistoryFromString = s;
    f.getActionHistoryForActionContext = t;
    var g = {
        event_action_history: null
    }
      , h = {
        action_history: null
    }
      , i = {
        surface: "unknown",
        mechanism: "unknown"
    };
    function j(a) {
        return typeof a === "string" || !Array.isArray(a) && k(a) && Object.prototype.toString.call(a) === "[object String]"
    }
    function k(a) {
        return Object.prototype.toString.call(a) === "[object Object]"
    }
    var l = function() {
        return Object.assign({}, h)
    };
    f.getNewActionContext = l;
    c = function() {
        return Object.assign({}, g)
    }
    ;
    f.getNewActionContextForGraphQL = c;
    d = function(a) {
        return m(n(a))
    }
    ;
    f.getFromStringForGraphQL = d;
    var m = function(a) {
        var c = a.action_history
          , d = a.ref
          , e = a.ref_notif_type;
        a = a.source;
        e = e != null && e != "" ? b("EventNotificationTypesForGraphQL")[e] : null;
        c = {
            event_action_history: c
        };
        d != null && d != "" && (c.ref = d);
        e && (c.ref_notif_type = e);
        a != null && a != 0 && (c.source = a);
        return c
    };
    f.getForGraphQL = m;
    var n = function(a) {
        if (a == null || a == "")
            return h;
        a = b("FBJSON").parse(a);
        if (!a)
            return h;
        var c = a.action_history
          , d = a.ref
          , e = a.ref_notif_type
          , f = a.source;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["action_history", "ref", "ref_notif_type", "source"]);
        a;
        a = c;
        j(a) ? a = s(a) : a = t(a);
        c = {
            action_history: a,
            ref: d,
            ref_notif_type: e,
            source: f
        };
        (!c.ref || !parseInt(c.ref, 10)) && delete c.ref;
        (!c.ref_notif_type || !j(c.ref_notif_type)) && delete c.ref_notif_type;
        (!c.source || !parseInt(c.source, 10)) && delete c.source;
        return c
    };
    f.getFromString = n;
    var o = function(a, b) {
        var c = a.action_history || [];
        c.push(r(b, p(a)));
        a.action_history = c;
        return a
    };
    f.addActionHistoryEntry = o;
    e = function(a, c) {
        return b("FBJSON").stringify(o(n(a), c))
    }
    ;
    f.addActionHistoryEntryFromString = e;
    a = function(a) {
        var c = a.source != null && a.source != 0 ? a.source + "" : void 0;
        return {
            ref: a.ref,
            ref_notif_type: a.ref_notif_type,
            source: c,
            action_history: a.action_history ? b("FBJSON").stringify(a.action_history) : void 0
        }
    }
    ;
    f.toStringMap = a;
    var p = function(a) {
        a = a.action_history;
        return !a || a.length === 0 ? i : a[a.length - 1]
    };
    f.getLastActionHistoryEntry = p;
    var q = function(a, b) {
        var c = a.action_history || [];
        c.push(r(b, c.pop()));
        a.action_history = c;
        return a
    };
    f.updateLastActionHistoryEntry = q;
    c = function(a, c) {
        return b("FBJSON").stringify(q(n(a), c))
    }
    ;
    f.updateLastActionHistoryEntryFromString = c;
    var r = function(a, b) {
        var c = a.extra_data
          , d = a.mechanism;
        a = a.surface;
        b = b || i;
        a = {
            surface: a != null && a != "" ? a : b.surface,
            mechanism: d != null && d != "" ? d : b.mechanism,
            extra_data: c != null && c != "" ? c : b.extra_data
        };
        Boolean(a.extra_data) != !0 && delete a.extra_data;
        return a
    };
    f.createHistoryEntryBasedOnOther = r;
    function a(a) {
        return a ? b("FBJSON").stringify(a) : b("FBJSON").stringify(l())
    }
    function s(a) {
        return a === "null" ? null : t(b("FBJSON").parse(a))
    }
    function t(a) {
        a = a;
        if (a !== null && Array.isArray(a)) {
            a = a.map(function(a) {
                var c = a.mechanism
                  , d = a.surface
                  , e = a.extra_data;
                a = babelHelpers.objectWithoutPropertiesLoose(a, ["mechanism", "surface", "extra_data"]);
                if (!c || !d)
                    return null;
                a;
                a = e;
                j(a) || (Array.isArray(a) || k(a) ? a = b("FBJSON").stringify(a) : a = "");
                return {
                    mechanism: c,
                    surface: d,
                    extra_data: a
                }
            });
            return b("compactArray")(a)
        }
        return null
    }
}
), null);
__d("LoadObjectOperations", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        CREATING: null,
        DELETING: null,
        LOADING: null,
        UPDATING: null
    });
    c = a;
    e.exports = c
}
), null);
__d("LoadObject", ["invariant", "LoadObjectOperations", "immutable", "nullthrows", "shallowEqual"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = [void 0, null, !1, !0, 0, ""];
    var h = function(a, c) {
        return Object.is(a, c) || b("immutable").is(a, c)
    }
      , i = "SECRET_" + Math.random()
      , j = new Map(new Map(a.map(function(a) {
        return [a, new Map([[!0, new Map()], [!1, new Map()]])]
    })));
    c = b("immutable").Record({
        operation: void 0,
        value: void 0,
        error: void 0,
        internalHasValue: !1
    });
    d = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b, c, d, e, f) {
            b === i || g(0, 2084);
            return a.call(this, {
                operation: c,
                value: d,
                error: e,
                internalHasValue: f
            }) || this
        }
        c.$LoadObject1 = function(a, b, d, e) {
            var f = c.$LoadObject2(a, b, d, e);
            return f || new c(i,a,b,d,e)
        }
        ;
        c.$LoadObject2 = function(a, d, e, f) {
            if (e !== void 0 || !j.has(d))
                return null;
            var g = b("nullthrows")(j.get(d));
            g = b("nullthrows")(g.get(f));
            if (!g.has(a)) {
                d = new c(i,a,d,e,f);
                g.set(a, d)
            }
            return b("nullthrows")(g.get(a))
        }
        ;
        var d = c.prototype;
        d.getOperation = function() {
            return this.get("operation")
        }
        ;
        d.getValue = function() {
            return this.get("value")
        }
        ;
        d.getValueEnforcing = function() {
            this.hasValue() || g(0, 2085);
            var a = this.getValue();
            return a
        }
        ;
        d.getError = function() {
            return this.get("error")
        }
        ;
        d.getErrorEnforcing = function() {
            this.hasError() || g(0, 2086);
            return this.get("error")
        }
        ;
        d.hasValue = function() {
            return !!this.get("internalHasValue")
        }
        ;
        d.hasOperation = function() {
            return this.getOperation() !== void 0
        }
        ;
        d.hasError = function() {
            return this.getError() !== void 0
        }
        ;
        d.isEmpty = function() {
            return !this.hasValue() && !this.hasOperation() && !this.hasError()
        }
        ;
        d.setOperation = function(a) {
            var b = c.$LoadObject2(a, this.getValue(), this.getError(), this.hasValue());
            return b || this.set("operation", a)
        }
        ;
        d.setValue = function(a) {
            var b = c.$LoadObject2(this.getOperation(), a, this.getError(), !0);
            return b || this.set("value", a).set("internalHasValue", !0)
        }
        ;
        d.setError = function(a) {
            var b = c.$LoadObject2(this.getOperation(), this.getValue(), a, this.hasValue());
            return b || this.set("error", a)
        }
        ;
        d.removeOperation = function() {
            var a = this.remove("operation")
              , b = c.$LoadObject2(a.getOperation(), a.getValue(), a.getError(), a.hasValue());
            return b || a
        }
        ;
        d.removeValue = function() {
            var a = this.remove("value").remove("internalHasValue")
              , b = c.$LoadObject2(a.getOperation(), a.getValue(), a.getError(), a.hasValue());
            return b || a
        }
        ;
        d.removeError = function() {
            var a = this.remove("error")
              , b = c.$LoadObject2(a.getOperation(), a.getValue(), a.getError(), a.hasValue());
            return b || a
        }
        ;
        d.isCreating = function() {
            return this.getOperation() === b("LoadObjectOperations").CREATING
        }
        ;
        d.isDeleting = function() {
            return this.getOperation() === b("LoadObjectOperations").DELETING
        }
        ;
        d.isDone = function() {
            return !this.hasOperation()
        }
        ;
        d.hasValueWithoutError = function() {
            return this.isDone() && this.hasValue() && !this.hasError()
        }
        ;
        d.isLoading = function() {
            return this.getOperation() === b("LoadObjectOperations").LOADING
        }
        ;
        d.isLoadingOrEmpty = function() {
            return this.isLoading() || this.isEmpty()
        }
        ;
        d.isUpdating = function() {
            return this.getOperation() === b("LoadObjectOperations").UPDATING
        }
        ;
        d.creating = function() {
            return this.setOperation(b("LoadObjectOperations").CREATING)
        }
        ;
        d.deleting = function() {
            return this.setOperation(b("LoadObjectOperations").DELETING)
        }
        ;
        d.done = function() {
            return this.removeOperation()
        }
        ;
        d.loading = function() {
            return this.setOperation(b("LoadObjectOperations").LOADING)
        }
        ;
        d.updating = function() {
            return this.setOperation(b("LoadObjectOperations").UPDATING)
        }
        ;
        d.map = function(a) {
            if (!this.hasValue())
                return this;
            var b = this.getValueEnforcing();
            a = a(b);
            return a instanceof c ? a : this.setValue(a)
        }
        ;
        d.mapValue = function(a) {
            if (!this.hasValue())
                return this;
            var b = this.getValueEnforcing();
            a = a(b);
            if (a instanceof c) {
                !a.hasError() && this.hasError() && (a = a.setError(this.getErrorEnforcing()));
                !a.hasOperation() && this.hasOperation() && (a = a.setOperation(this.getOperation()));
                return a
            } else
                return this.setValue(a)
        }
        ;
        d.mapError = function(a) {
            if (!this.hasError())
                return this;
            var b = this.getErrorEnforcing();
            a = a(b);
            return a instanceof c ? a : this.setError(a)
        }
        ;
        d.match = function(a, c) {
            if (this.hasOperation()) {
                var d = a.loading;
                this.isCreating() && a.creating ? d = a.creating : this.isUpdating() && a.updating ? d = a.updating : this.isDeleting() && a.deleting && (d = a.deleting);
                return d(this.value, this.error, c)
            }
            if (this.hasError())
                return this.hasValue() && a.loadedWithError ? b("nullthrows")(a.loadedWithError)(this.getValueEnforcing(), this.getErrorEnforcing(), c) : a.error(this.getErrorEnforcing(), c);
            return this.hasValue() ? a.loaded(this.getValueEnforcing(), c) : a.empty ? a.empty(c) : a.error(new Error("No value"), c)
        }
        ;
        d.equals = function(a, b) {
            return c.equals(this, a, b)
        }
        ;
        d.shallowEquals = function(a) {
            return c.equals(this, a, b("shallowEqual"))
        }
        ;
        c.equals = function(a, b, c) {
            var d = a === b;
            if (!a || !b || d)
                return d;
            if (a.getOperation() !== b.getOperation() || a.hasError() !== b.hasError() || a.hasValue() !== b.hasValue())
                return !1;
            if (a.hasError() && b.hasError() && a.getError() === b.getError())
                return !0;
            d = a.getValue();
            a = b.getValue();
            if (!d || !a)
                return d === a;
            c = (b = c) != null ? b : h;
            return c(d, a)
        }
        ;
        c.shallowEquals = function(a, d) {
            return c.equals(a, d, b("shallowEqual"))
        }
        ;
        c.creating = function() {
            return c.$LoadObject1(b("LoadObjectOperations").CREATING, void 0, void 0, !1)
        }
        ;
        c.deleting = function() {
            return c.$LoadObject1(b("LoadObjectOperations").DELETING, void 0, void 0, !1)
        }
        ;
        c.empty = function() {
            return c.$LoadObject1(void 0, void 0, void 0, !1)
        }
        ;
        c.loading = function() {
            return c.$LoadObject1(b("LoadObjectOperations").LOADING, void 0, void 0, !1)
        }
        ;
        c.updating = function() {
            return c.$LoadObject1(b("LoadObjectOperations").UPDATING, void 0, void 0, !1)
        }
        ;
        c.withError = function(a) {
            return c.$LoadObject1(void 0, void 0, a, !1)
        }
        ;
        c.withValue = function(a) {
            return c.$LoadObject1(void 0, a, void 0, !0)
        }
        ;
        return c
    }(c);
    e.exports = d
}
), null);
__d("XEventCreateDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/events/dialog/create/", {
        acontext: {
            type: "String",
            required: !0
        },
        page_id: {
            type: "Int"
        },
        group_id: {
            type: "Int"
        },
        actor_id: {
            type: "Int"
        },
        post_id: {
            type: "Int"
        },
        post_text: {
            type: "String"
        },
        event_id_for_copy: {
            type: "Int"
        },
        schema_org: {
            type: "String"
        },
        default_user_event_privacy_type: {
            type: "Enum",
            defaultValue: "private_event",
            enumType: 1
        },
        intercept_session_id: {
            type: "String"
        },
        invite_ids: {
            type: "IntVector"
        },
        default_theme_id: {
            type: "Int"
        },
        default_title: {
            type: "String"
        },
        default_start_time: {
            type: "Int"
        },
        default_end_time: {
            type: "Int"
        },
        default_description: {
            type: "String"
        },
        default_cover_id: {
            type: "Int"
        },
        default_ticket_url: {
            type: "String"
        },
        friend_birthday_prompt_xout_id: {
            type: "FBID"
        },
        community_id: {
            type: "Int"
        },
        composer_id: {
            type: "String"
        },
        dialog_entry_point: {
            type: "Enum",
            defaultValue: "others",
            enumType: 1
        },
        is_arena: {
            type: "Bool",
            defaultValue: !1
        },
        show_work_tour: {
            type: "Bool",
            defaultValue: !1
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
__d("XPagesComposerDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/composer/dialog/", {
        entry_point: {
            type: "String",
            required: !0
        },
        open_composer: {
            type: "Enum",
            enumType: 1
        },
        preview_url: {
            type: "String"
        },
        extra_info: {
            type: "StringToStringMap"
        },
        composer_prefill: {
            type: "String"
        },
        composer_igphoto_id: {
            type: "String"
        },
        attach_support_now_cta: {
            type: "Bool",
            defaultValue: !1
        },
        archived_story_card_id: {
            type: "FBID"
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
