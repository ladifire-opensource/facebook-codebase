__d("RichTextEditorUtil", ["DraftModifier", "EditorState", "adjustBlockDepthForContentState", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        currentBlockContainsLink: function(a) {
            var b = a.getSelection()
              , c = a.getCurrentContent();
            return c.getBlockForKey(b.getAnchorKey()).getCharacterList().slice(b.getStartOffset(), b.getEndOffset()).some(function(a) {
                a = a.getEntity();
                return !!a && c.getEntity(a).getType() === "LINK"
            })
        },
        getCurrentBlockType: function(a) {
            var b = a.getSelection();
            return a.getCurrentContent().getBlockForKey(b.getStartKey()).getType()
        },
        getDataObjectForLinkURL: function(a) {
            return {
                url: a.toString()
            }
        },
        handleKeyCommand: function(a, b, c) {
            switch (b) {
            case "bold":
                return g.toggleInlineStyle(a, "BOLD");
            case "italic":
                return g.toggleInlineStyle(a, "ITALIC");
            case "underline":
                return g.toggleInlineStyle(a, "UNDERLINE");
            case "code":
                return g.toggleCode(a);
            case "backspace":
            case "backspace-word":
            case "backspace-to-start-of-line":
                return g.onBackspace(a);
            case "delete":
            case "delete-word":
            case "delete-to-end-of-block":
                return g.onDelete(a);
            default:
                return null
            }
        },
        insertSoftNewline: function(a) {
            var c = b("DraftModifier").insertText(a.getCurrentContent(), a.getSelection(), "\n", a.getCurrentInlineStyle(), null);
            a = b("EditorState").push(a, c, "insert-characters");
            return b("EditorState").forceSelection(a, c.getSelectionAfter())
        },
        onBackspace: function(a) {
            var c = a.getSelection();
            if (!c.isCollapsed() || c.getAnchorOffset() || c.getFocusOffset())
                return null;
            var d = a.getCurrentContent()
              , e = c.getStartKey();
            e = d.getBlockBefore(e);
            if (e && e.getType() === "atomic") {
                e = d.getBlockMap()["delete"](e.getKey());
                e = d.merge({
                    blockMap: e,
                    selectionAfter: c
                });
                if (e !== d)
                    return b("EditorState").push(a, e, "remove-range")
            }
            c = g.tryToRemoveBlockStyle(a);
            return c ? b("EditorState").push(a, c, "change-block-type") : null
        },
        onDelete: function(a) {
            var c = a.getSelection();
            if (!c.isCollapsed())
                return null;
            var d = a.getCurrentContent()
              , e = c.getStartKey()
              , f = d.getBlockForKey(e);
            f = f.getLength();
            if (c.getStartOffset() < f)
                return null;
            f = d.getBlockAfter(e);
            if (!f || f.getType() !== "atomic")
                return null;
            e = c.merge({
                focusKey: f.getKey(),
                focusOffset: f.getLength()
            });
            c = b("DraftModifier").removeRange(d, e, "forward");
            return c !== d ? b("EditorState").push(a, c, "remove-range") : null
        },
        onTab: function(a, c) {
            var d = c.getSelection()
              , e = d.getAnchorKey()
              , f = c.getCurrentContent();
            e = f.getBlockForKey(e);
            e = e.getType();
            if (e !== "unordered-list-item" && e !== "ordered-list-item")
                return c;
            a.preventDefault();
            e = b("adjustBlockDepthForContentState")(f, d, a.shiftKey ? -1 : 1);
            return b("EditorState").push(c, e, "adjust-depth")
        },
        toggleBlockType: function(a, c) {
            var d = a.getSelection()
              , e = d.getStartKey()
              , f = d.getEndKey()
              , g = a.getCurrentContent()
              , h = d;
            if (e !== f && d.getEndOffset() === 0) {
                var i = b("nullthrows")(g.getBlockBefore(f));
                f = i.getKey();
                h = h.merge({
                    anchorKey: e,
                    anchorOffset: d.getStartOffset(),
                    focusKey: f,
                    focusOffset: i.getLength(),
                    isBackward: !1
                })
            }
            d = g.getBlockMap().skipWhile(function(a, b) {
                return b !== e
            }).reverse().skipWhile(function(a, b) {
                return b !== f
            }).some(function(a) {
                return a.getType() === "atomic"
            });
            if (d)
                return a;
            i = g.getBlockForKey(e).getType() === c ? "unstyled" : c;
            return b("EditorState").push(a, b("DraftModifier").setBlockType(g, h, i), "change-block-type")
        },
        toggleCode: function(a) {
            var b = a.getSelection()
              , c = b.getAnchorKey()
              , d = b.getFocusKey();
            return b.isCollapsed() || c !== d ? g.toggleBlockType(a, "code-block") : g.toggleInlineStyle(a, "CODE")
        },
        toggleInlineStyle: function(a, c) {
            var d = a.getSelection()
              , e = a.getCurrentInlineStyle();
            if (d.isCollapsed())
                return b("EditorState").setInlineStyleOverride(a, e.has(c) ? e.remove(c) : e.add(c));
            var f = a.getCurrentContent();
            e.has(c) ? e = b("DraftModifier").removeInlineStyle(f, d, c) : e = b("DraftModifier").applyInlineStyle(f, d, c);
            return b("EditorState").push(a, e, "change-inline-style")
        },
        toggleLink: function(a, c, d) {
            c = b("DraftModifier").applyEntity(a.getCurrentContent(), c, d);
            return b("EditorState").push(a, c, "apply-entity")
        },
        tryToRemoveBlockStyle: function(a) {
            var c = a.getSelection()
              , d = c.getAnchorOffset();
            if (c.isCollapsed() && d === 0) {
                d = c.getAnchorKey();
                a = a.getCurrentContent();
                var e = a.getBlockForKey(d);
                e = e.getType();
                d = a.getBlockBefore(d);
                if (e === "code-block" && d && d.getType() === "code-block" && d.getLength() !== 0)
                    return null;
                if (e !== "unstyled")
                    return b("DraftModifier").setBlockType(a, c, "unstyled")
            }
            return null
        }
    };
    e.exports = g
}
), null);
__d("splitTextIntoTextBlocks", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /\r\n?|\n/g;
    function a(a) {
        return a.split(g)
    }
    e.exports = a
}
), null);
__d("editOnPaste", ["BlockMapBuilder", "CharacterMetadata", "DataTransfer", "DraftModifier", "DraftPasteProcessor", "EditorState", "RichTextEditorUtil", "getEntityKeyForSelection", "getTextContentFromFiles", "isEventHandled", "splitTextIntoTextBlocks"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        c.preventDefault();
        c = new (b("DataTransfer"))(c.clipboardData);
        if (!c.isRichText()) {
            var d = c.getFiles()
              , e = c.getText();
            if (d.length > 0) {
                if (a.props.handlePastedFiles && b("isEventHandled")(a.props.handlePastedFiles(d)))
                    return;
                b("getTextContentFromFiles")(d, function(d) {
                    d = d || e;
                    if (!d)
                        return;
                    var c = a._latestEditorState;
                    d = b("splitTextIntoTextBlocks")(d);
                    var f = b("CharacterMetadata").create({
                        style: c.getCurrentInlineStyle(),
                        entity: b("getEntityKeyForSelection")(c.getCurrentContent(), c.getSelection())
                    })
                      , g = b("RichTextEditorUtil").getCurrentBlockType(c);
                    d = b("DraftPasteProcessor").processText(d, f, g);
                    f = b("BlockMapBuilder").createFromArray(d);
                    g = b("DraftModifier").replaceWithFragment(c.getCurrentContent(), c.getSelection(), f);
                    a.update(b("EditorState").push(c, g, "insert-fragment"))
                });
                return
            }
        }
        d = [];
        var f = c.getText()
          , i = c.getHTML()
          , j = a._latestEditorState;
        if (a.props.formatPastedText) {
            var k = a.props.formatPastedText(f, i)
              , l = k.text;
            k = k.html;
            f = l;
            i = k
        }
        if (a.props.handlePastedText && b("isEventHandled")(a.props.handlePastedText(f, i, j)))
            return;
        f && (d = b("splitTextIntoTextBlocks")(f));
        if (!a.props.stripPastedStyles) {
            l = a.getClipboard();
            if (!a.props.formatPastedText && c.isRichText() && l) {
                if (((k = i) == null ? void 0 : k.indexOf(a.getEditorKey())) !== -1 || d.length === 1 && l.size === 1 && l.first().getText() === f) {
                    a.update(g(a._latestEditorState, l));
                    return
                }
            } else if (l && c.types.includes("com.apple.webarchive") && !c.types.includes("text/html") && h(d, l)) {
                a.update(g(a._latestEditorState, l));
                return
            }
            if (i) {
                k = b("DraftPasteProcessor").processHTML(i, a.props.blockRenderMap);
                if (k) {
                    f = k.contentBlocks;
                    c = k.entityMap;
                    if (f) {
                        l = b("BlockMapBuilder").createFromArray(f);
                        a.update(g(a._latestEditorState, l, c));
                        return
                    }
                }
            }
            a.setClipboard(null)
        }
        if (d.length) {
            i = b("CharacterMetadata").create({
                style: j.getCurrentInlineStyle(),
                entity: b("getEntityKeyForSelection")(j.getCurrentContent(), j.getSelection())
            });
            k = b("RichTextEditorUtil").getCurrentBlockType(j);
            f = b("DraftPasteProcessor").processText(d, i, k);
            l = b("BlockMapBuilder").createFromArray(f);
            a.update(g(a._latestEditorState, l))
        }
    }
    function g(a, c, d) {
        c = b("DraftModifier").replaceWithFragment(a.getCurrentContent(), a.getSelection(), c);
        return b("EditorState").push(a, c.set("entityMap", d), "insert-fragment")
    }
    function h(a, b) {
        return a.length === b.size && b.valueSeq().every(function(b, c) {
            return b.getText() === a[c]
        })
    }
    e.exports = a
}
), null);
__d("DraftEditorEditHandler", ["UserAgent", "editOnBeforeInput", "editOnBlur", "editOnCompositionStart", "editOnCopy", "editOnCut", "editOnDragOver", "editOnDragStart", "editOnFocus", "editOnInput", "editOnKeyDown", "editOnPaste", "editOnSelect"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("UserAgent").isBrowser("Chrome");
    c = b("UserAgent").isBrowser("Firefox");
    d = a || c ? b("editOnSelect") : function(a) {}
    ;
    f = {
        onBeforeInput: b("editOnBeforeInput"),
        onBlur: b("editOnBlur"),
        onCompositionStart: b("editOnCompositionStart"),
        onCopy: b("editOnCopy"),
        onCut: b("editOnCut"),
        onDragOver: b("editOnDragOver"),
        onDragStart: b("editOnDragStart"),
        onFocus: b("editOnFocus"),
        onInput: b("editOnInput"),
        onKeyDown: b("editOnKeyDown"),
        onPaste: b("editOnPaste"),
        onSelect: b("editOnSelect"),
        onMouseUp: d,
        onKeyUp: d
    };
    e.exports = f
}
), null);
__d("DraftEditorFlushControlled", ["ReactDOMComet"], (function(a, b, c, d, e, f) {
    a = b("ReactDOMComet").unstable_flushControlled;
    e.exports = a
}
), null);
__d("DraftEditorPlaceholder.react", ["cx", "React", "joinClasses", "shallowEqual"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            var c = this.props
              , d = c.editorState;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["editorState"]);
            var e = a.editorState;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["editorState"]);
            return d.getSelection().getHasFocus() !== e.getSelection().getHasFocus() || b("shallowEqual")(c, a)
        }
        ;
        d.render = function() {
            return h.jsx("div", {
                className: "_1p1t" + (this.props.editorState.getSelection().getHasFocus() ? " _1p1u" : ""),
                children: h.jsx("div", {
                    className: b("joinClasses")("_1p1v", this.props.className),
                    id: this.props.accessibilityID,
                    style: {
                        whiteSpace: "pre-wrap"
                    },
                    children: this.props.text
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);