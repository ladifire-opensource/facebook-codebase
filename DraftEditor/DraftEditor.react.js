if (self.CavalryLogger) {
	CavalryLogger.start_js(["yhMst"]);
}

__d("DraftEditorContents.react", ["requireCond", "cr:1264924"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("cr:1264924");
	e.exports = a
}), null);
__d("DefaultDraftBlockRenderMap", ["cx", "React", "immutable"], (function (a, b, c, d, e, f, g) {
	"use strict";
	a = b("React");
	c = b("immutable").Map;
	d = a.jsx("ul", {
		className: "_1bv0"
	});
	f = a.jsx("ol", {
		className: "_1bv1"
	});
	g = a.jsx("pre", {
		className: "_1bv2"
	});
	b = c({
		"header-one": {
			element: "h1"
		},
		"header-two": {
			element: "h2"
		},
		"header-three": {
			element: "h3"
		},
		"header-four": {
			element: "h4"
		},
		"header-five": {
			element: "h5"
		},
		"header-six": {
			element: "h6"
		},
		section: {
			element: "section"
		},
		article: {
			element: "article"
		},
		"unordered-list-item": {
			element: "li",
			wrapper: d
		},
		"ordered-list-item": {
			element: "li",
			wrapper: f
		},
		blockquote: {
			element: "blockquote"
		},
		atomic: {
			element: "figure"
		},
		"code-block": {
			element: "pre",
			wrapper: g
		},
		unstyled: {
			element: "div",
			aliasedElements: ["p"]
		}
	});
	e.exports = b
}), null);
__d("DefaultDraftInlineStyle", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = {
		BOLD: {
			fontWeight: "bold"
		},
		CODE: {
			fontFamily: "monospace",
			wordWrap: "break-word"
		},
		ITALIC: {
			fontStyle: "italic"
		},
		STRIKETHROUGH: {
			textDecoration: "line-through"
		},
		UNDERLINE: {
			textDecoration: "underline"
		}
	}
}), null);
__d("getSelectionOffsetKeyForNode", ["isElement"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a) {
		if (b("isElement")(a)) {
			a = a;
			var c = a.getAttribute("data-offset-key");
			if (c) return c;
			for (var c = 0; c < a.childNodes.length; c++) {
				var d = g(a.childNodes[c]);
				if (d) return d
			}
		}
		return null
	}
	e.exports = g
}), null);
__d("findAncestorOffsetKey", ["getCorrectDocumentFromNode", "getSelectionOffsetKeyForNode"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var c = a;
		while (c && c !== b("getCorrectDocumentFromNode")(a).documentElement) {
			var d = b("getSelectionOffsetKeyForNode")(c);
			if (d != null) return d;
			c = c.parentNode
		}
		return null
	}
	e.exports = a
}), null);
__d("getWindowForNode", [], (function (a, b, c, d, e, f) {
	function a(a) {
		return !a || !a.ownerDocument || !a.ownerDocument.defaultView ? window : a.ownerDocument.defaultView
	}
	e.exports = a
}), null);
__d("DOMObserver", ["invariant", "UserAgent", "findAncestorOffsetKey", "getWindowForNode", "immutable", "nullthrows"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("immutable").Map,
		i = {
			subtree: !0,
			characterData: !0,
			childList: !0,
			characterDataOldValue: !1,
			attributes: !1
		},
		j = b("UserAgent").isBrowser("IE <= 11");
	a = function () {
		function a(a) {
			var c = this;
			this.container = a;
			this.mutations = h();
			a = b("getWindowForNode")(a);
			a.MutationObserver && !j ? this.observer = new a.MutationObserver(function (a) {
				return c.registerMutations(a)
			}) : this.onCharData = function (a) {
				a.target instanceof Node || g(0, 16525), c.registerMutation({
					type: "characterData",
					target: a.target
				})
			}
		}
		var c = a.prototype;
		c.start = function () {
			this.observer ? this.observer.observe(this.container, i) : this.container.addEventListener("DOMCharacterDataModified", this.onCharData)
		};
		c.stopAndFlushMutations = function () {
			var a = this.observer;
			a ? (this.registerMutations(a.takeRecords()), a.disconnect()) : this.container.removeEventListener("DOMCharacterDataModified", this.onCharData);
			a = this.mutations;
			this.mutations = h();
			return a
		};
		c.registerMutations = function (a) {
			for (var b = 0; b < a.length; b++) this.registerMutation(a[b])
		};
		c.getMutationTextContent = function (a) {
			var b = a.type,
				c = a.target;
			a = a.removedNodes;
			if (b === "characterData") {
				if (c.textContent !== "") return j ? c.textContent.replace("\n", "") : c.textContent
			} else if (b === "childList")
				if (a && a.length) return "";
				else if (c.textContent !== "") return c.textContent;
			return null
		};
		c.registerMutation = function (a) {
			var c = this.getMutationTextContent(a);
			if (c != null) {
				a = b("nullthrows")(b("findAncestorOffsetKey")(a.target));
				this.mutations = this.mutations.set(a, c)
			}
		};
		return a
	}();
	e.exports = a
}), null);
__d("getContentEditableContainer", ["invariant", "isHTMLElement"], (function (a, b, c, d, e, f, g) {
	"use strict";

	function a(a) {
		a = a.editorContainer;
		a || g(0, 4998);
		b("isHTMLElement")(a.firstChild) || g(0, 4999);
		a = a.firstChild;
		return a
	}
	e.exports = a
}), null);
__d("getUpdatedSelectionState", ["DraftOffsetKey", "nullthrows"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c, d, e, f) {
		var g = b("nullthrows")(a.getSelection());
		if (!c || !e) return g;
		c = b("DraftOffsetKey").decode(c);
		var h = c.blockKey,
			i = a.getBlockTree(h);
		i = i && i.getIn([c.decoratorKey, "leaves", c.leafKey]);
		c = b("DraftOffsetKey").decode(e);
		var j = c.blockKey;
		e = a.getBlockTree(j);
		e = e && e.getIn([c.decoratorKey, "leaves", c.leafKey]);
		if (!i || !e) return g;
		c = i.get("start");
		var k = e.get("start"),
			l = i ? c + d : null,
			m = e ? k + f : null,
			n = g.getAnchorKey() === h && g.getAnchorOffset() === l && g.getFocusKey() === j && g.getFocusOffset() === m;
		if (n) return g;
		if (h === j) {
			n = i.get("end");
			i = e.get("end");
			k === c && i === n ? e = f < d : e = k < c
		} else {
			i = a.getCurrentContent().getBlockMap().keySeq().skipUntil(function (a) {
				return a === h || a === j
			}).first();
			e = i === j
		}
		return g.merge({
			anchorKey: h,
			anchorOffset: l,
			focusKey: j,
			focusOffset: m,
			isBackward: e
		})
	}
	e.exports = a
}), null);
__d("getDraftEditorSelectionWithNodes", ["invariant", "findAncestorOffsetKey", "getSelectionOffsetKeyForNode", "getUpdatedSelectionState", "isElement", "nullthrows"], (function (a, b, c, d, e, f, g) {
	"use strict";

	function a(a, c, d, e, f, g) {
		var h = d.nodeType === Node.TEXT_NODE,
			i = f.nodeType === Node.TEXT_NODE;
		if (h && i) return {
			selectionState: b("getUpdatedSelectionState")(a, b("nullthrows")(b("findAncestorOffsetKey")(d)), e, b("nullthrows")(b("findAncestorOffsetKey")(f)), g),
			needsRecovery: !1
		};
		var k = null,
			l = null,
			m = !0;
		h ? (k = {
			key: b("nullthrows")(b("findAncestorOffsetKey")(d)),
			offset: e
		}, l = j(c, f, g)) : i ? (l = {
			key: b("nullthrows")(b("findAncestorOffsetKey")(f)),
			offset: g
		}, k = j(c, d, e)) : (k = j(c, d, e), l = j(c, f, g), d === f && e === g && (m = !!d.firstChild && d.firstChild.nodeName !== "BR"));
		return {
			selectionState: b("getUpdatedSelectionState")(a, k.key, k.offset, l.key, l.offset),
			needsRecovery: m
		}
	}

	function h(a) {
		while (a.firstChild && (b("isElement")(a.firstChild) && a.firstChild.getAttribute("data-blocks") === "true" || b("getSelectionOffsetKeyForNode")(a.firstChild))) a = a.firstChild;
		return a
	}

	function i(a) {
		while (a.lastChild && (b("isElement")(a.lastChild) && a.lastChild.getAttribute("data-blocks") === "true" || b("getSelectionOffsetKeyForNode")(a.lastChild))) a = a.lastChild;
		return a
	}

	function j(a, c, d) {
		c = c;
		var e = b("findAncestorOffsetKey")(c);
		e != null || a && (a === c || a.firstChild === c) || g(0, 6007);
		if (a === c) {
			c = c.firstChild;
			b("isElement")(c) || g(0, 26030, [(a = c) == null ? void 0 : a.nodeType]);
			a = c;
			c = a;
			c.getAttribute("data-contents") === "true" || g(0, 6008);
			d > 0 && (d = c.childNodes.length)
		}
		if (d === 0) {
			if (e != null) a = e;
			else {
				var f = h(c);
				a = b("nullthrows")(b("getSelectionOffsetKeyForNode")(f))
			}
			return {
				key: a,
				offset: 0
			}
		}
		f = c.childNodes[d - 1];
		a = null;
		if (!b("getSelectionOffsetKeyForNode")(f)) a = b("nullthrows")(e), c = k(f);
		else {
			d = i(f);
			a = b("nullthrows")(b("getSelectionOffsetKeyForNode")(d));
			c = k(d)
		}
		return {
			key: a,
			offset: c
		}
	}

	function k(a) {
		a = a.textContent;
		return a === "\n" ? 0 : a.length
	}
	e.exports = a
}), null);
__d("getDraftEditorSelection", ["getDraftEditorSelectionWithNodes"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		var d = c.ownerDocument.defaultView.getSelection(),
			e = d.anchorNode,
			f = d.anchorOffset,
			g = d.focusNode,
			h = d.focusOffset;
		d = d.rangeCount;
		return d === 0 || e == null || g == null ? {
			selectionState: a.getSelection().set("hasFocus", !1),
			needsRecovery: !1
		} : b("getDraftEditorSelectionWithNodes")(a, c, e, f, g, h)
	}
	e.exports = a
}), null);
__d("editOnSelect", ["DraftJsDebugLogging", "EditorState", "getContentEditableContainer", "getDraftEditorSelection"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		if (a._blockSelectEvents || a._latestEditorState !== a.props.editorState) {
			if (a._blockSelectEvents) {
				var c = a.props.editorState;
				c = c.getSelection();
				b("DraftJsDebugLogging").logBlockedSelectionEvent({
					anonymizedDom: "N/A",
					extraParams: JSON.stringify({
						stacktrace: new Error().stack
					}),
					selectionState: JSON.stringify(c.toJS())
				})
			}
			return
		}
		c = a.props.editorState;
		var d = b("getDraftEditorSelection")(c, b("getContentEditableContainer")(a)),
			e = d.selectionState;
		e !== c.getSelection() && (d.needsRecovery ? c = b("EditorState").forceSelection(c, e) : c = b("EditorState").acceptSelection(c, e), a.update(c))
	}
	e.exports = a
}), null);
__d("draftKeyUtils", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		return a != null && a != ""
	}
	e.exports = {
		notEmptyKey: a
	}
}), null);
__d("getEntityKeyForSelection", ["draftKeyUtils"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("draftKeyUtils").notEmptyKey;

	function a(a, b) {
		var c;
		if (b.isCollapsed()) {
			var d = b.getAnchorKey(),
				e = b.getAnchorOffset();
			if (e > 0) {
				c = a.getBlockForKey(d).getEntityAt(e - 1);
				return c !== a.getBlockForKey(d).getEntityAt(e) ? null : h(a, c)
			}
			return null
		}
		d = b.getStartKey();
		e = b.getStartOffset();
		b = a.getBlockForKey(d);
		c = e === b.getLength() ? null : b.getEntityAt(e);
		return h(a, c)
	}

	function h(a, b) {
		if (g(b)) {
			a = a.getEntity(b);
			return a.getMutability() === "MUTABLE" ? b : null
		}
		return null
	}
	e.exports = a
}), null);
__d("DraftEditorCompositionHandler", ["DOMObserver", "DraftModifier", "DraftOffsetKey", "EditorState", "Keys", "UserAgent", "editOnSelect", "getContentEditableContainer", "getDraftEditorSelection", "getEntityKeyForSelection", "nullthrows"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("UserAgent").isBrowser("IE"),
		h = 20,
		i = !1,
		j = !1,
		k = null;

	function l(a) {
		k || (k = new(b("DOMObserver"))(b("getContentEditableContainer")(a)), k.start())
	}
	var m = {
		onCompositionStart: function (a) {
			j = !0, l(a)
		},
		onCompositionEnd: function (a) {
			i = !1, j = !1, setTimeout(function () {
				i || m.resolveComposition(a)
			}, h)
		},
		onSelect: b("editOnSelect"),
		onKeyDown: function (a, c) {
			if (!j) {
				i || m.resolveComposition(a);
				a._onKeyDown(c);
				return
			}(c.which === b("Keys").RIGHT || c.which === b("Keys").LEFT) && c.preventDefault()
		},
		onKeyPress: function (a, c) {
			c.which === b("Keys").RETURN && c.preventDefault()
		},
		resolveComposition: function (a) {
			if (j) return;
			var c = a._latestEditorState,
				d = b("nullthrows")(k).stopAndFlushMutations();
			k = null;
			i = !0;
			var e = b("EditorState").set(c, {
				inCompositionMode: !1
			});
			a.exitCurrentMode();
			if (!d.size) {
				a.update(e);
				return
			}
			var f = e.getCurrentContent();
			d.forEach(function (a, c) {
				c = b("DraftOffsetKey").decode(c);
				var d = c.blockKey,
					g = c.decoratorKey;
				c = c.leafKey;
				g = e.getBlockTree(d).getIn([g, "leaves", c]);
				c = g.start;
				g = g.end;
				g = e.getSelection().merge({
					anchorKey: d,
					focusKey: d,
					anchorOffset: c,
					focusOffset: g,
					isBackward: !1
				});
				var h = b("getEntityKeyForSelection")(f, g);
				d = f.getBlockForKey(d).getInlineStyleAt(c);
				f = b("DraftModifier").replaceText(f, g, a, d, h);
				e = b("EditorState").set(e, {
					currentContent: f
				})
			});
			d = b("getDraftEditorSelection")(c, b("getContentEditableContainer")(a));
			c = d.selectionState;
			a.restoreEditorDOM();
			d = g ? b("EditorState").forceSelection(e, c) : b("EditorState").acceptSelection(e, c);
			a.update(b("EditorState").push(d, f, "insert-characters"))
		}
	};
	e.exports = m
}), null);
__d("getTextContentFromFiles", ["invariant"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = /\.textClipping$/,
		i = {
			"text/plain": !0,
			"text/html": !0,
			"text/rtf": !0
		},
		j = 5e3;

	function b(a, b) {
		var c = 0,
			d = [];
		a.forEach(function (e) {
			k(e, function (e) {
				c++, e && d.push(e.slice(0, j)), c == a.length && b(d.join("\r"))
			})
		})
	}

	function k(b, c) {
		if (!a.FileReader || b.type && !(b.type in i)) {
			c("");
			return
		}
		if (b.type === "") {
			var d = "";
			h.test(b.name) && (d = b.name.replace(h, ""));
			c(d);
			return
		}
		var e = new FileReader();
		e.onload = function () {
			var a = e.result;
			typeof a === "string" || g(0, 1637);
			c(a)
		};
		e.onerror = function () {
			c("")
		};
		e.readAsText(b)
	}
	e.exports = b
}), null);
__d("isEventHandled", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		return a === "handled" || a === !0
	}
	e.exports = a
}), null);
__d("DraftEditorDragHandler", ["DataTransfer", "DraftModifier", "EditorState", "findAncestorOffsetKey", "getCorrectDocumentFromNode", "getTextContentFromFiles", "getUpdatedSelectionState", "getWindowForNode", "isEventHandled", "nullthrows"], (function (a, b, c, d, e, f) {
	"use strict";

	function g(a, c) {
		var d = null,
			e = null,
			f = b("getCorrectDocumentFromNode")(a.currentTarget);
		if (typeof f.caretRangeFromPoint === "function") {
			f = f.caretRangeFromPoint(a.x, a.y);
			d = f.startContainer;
			e = f.startOffset
		} else if (a.rangeParent) d = a.rangeParent, e = a.rangeOffset;
		else return null;
		d = b("nullthrows")(d);
		e = b("nullthrows")(e);
		f = b("nullthrows")(b("findAncestorOffsetKey")(d));
		return b("getUpdatedSelectionState")(c, f, e, f, e)
	}
	a = {
		onDragEnd: function (a) {
			a.exitCurrentMode(), h(a)
		},
		onDrop: function (a, c) {
			var d = new(b("DataTransfer"))(c.nativeEvent.dataTransfer),
				e = a._latestEditorState,
				f = g(c.nativeEvent, e);
			c.preventDefault();
			a._dragCount = 0;
			a.exitCurrentMode();
			if (f == null) return;
			c = d.getFiles();
			if (c.length > 0) {
				if (a.props.handleDroppedFiles && b("isEventHandled")(a.props.handleDroppedFiles(f, c))) return;
				b("getTextContentFromFiles")(c, function (b) {
					b && a.update(j(e, f, b))
				});
				return
			}
			c = a._internalDrag ? "internal" : "external";
			a.props.handleDrop && b("isEventHandled")(a.props.handleDrop(f, d, c)) || (a._internalDrag ? a.update(i(e, f)) : a.update(j(e, f, d.getText())));
			h(a)
		}
	};

	function h(a) {
		a._internalDrag = !1;
		a = a.editorContainer;
		if (a) {
			var c = new MouseEvent("mouseup", {
				view: b("getWindowForNode")(a),
				bubbles: !0,
				cancelable: !0
			});
			a.dispatchEvent(c)
		}
	}

	function i(a, c) {
		c = b("DraftModifier").moveText(a.getCurrentContent(), a.getSelection(), c);
		return b("EditorState").push(a, c, "insert-fragment")
	}

	function j(a, c, d) {
		c = b("DraftModifier").insertText(a.getCurrentContent(), c, d, a.getCurrentInlineStyle());
		return b("EditorState").push(a, c, "insert-fragment")
	}
	e.exports = a
}), null);
__d("isSelectionAtLeafStart", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var b = a.getSelection(),
			c = b.getAnchorKey();
		a = a.getBlockTree(c);
		var d = b.getStartOffset();
		c = !1;
		a.some(function (a) {
			if (d === a.get("start")) {
				c = !0;
				return !0
			}
			return d < a.get("end") ? a.get("leaves").some(function (a) {
				a = a.get("start");
				if (d === a) {
					c = !0;
					return !0
				}
				return !1
			}) : !1
		});
		return c
	}
	e.exports = a
}), null);
__d("editOnBeforeInput", ["DraftModifier", "EditorState", "UserAgent", "getEntityKeyForSelection", "isEventHandled", "isSelectionAtLeafStart", "nullthrows", "setImmediate"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = "'",
		h = "/",
		i = b("UserAgent").isBrowser("Firefox");

	function j(a) {
		return i && (a == g || a == h)
	}

	function k(a, c, d, e, f) {
		c = b("DraftModifier").replaceText(a.getCurrentContent(), a.getSelection(), c, d, e);
		return b("EditorState").push(a, c, "insert-characters", f)
	}

	function a(a, c) {
		a._pendingStateFromBeforeInput !== void 0 && (a.update(a._pendingStateFromBeforeInput), a._pendingStateFromBeforeInput = void 0);
		var d = a._latestEditorState,
			e = c.data;
		if (!e) return;
		if (a.props.handleBeforeInput && b("isEventHandled")(a.props.handleBeforeInput(e, d, c.timeStamp))) {
			c.preventDefault();
			return
		}
		var f = d.getSelection(),
			g = f.getStartOffset(),
			h = f.getAnchorKey();
		if (!f.isCollapsed()) {
			c.preventDefault();
			a.update(k(d, e, d.getCurrentInlineStyle(), b("getEntityKeyForSelection")(d.getCurrentContent(), d.getSelection()), !0));
			return
		}
		f = k(d, e, d.getCurrentInlineStyle(), b("getEntityKeyForSelection")(d.getCurrentContent(), d.getSelection()), !1);
		var i = !1;
		i || (i = b("isSelectionAtLeafStart")(a._latestCommittedEditorState));
		if (!i) {
			var l = d.getBlockTree(h),
				m = f.getBlockTree(h);
			i = l.size !== m.size || l.zip(m).some(function (a) {
				var b = a[0];
				a = a[1];
				var c = b.get("start"),
					d = c + (c >= g ? e.length : 0),
					f = b.get("end"),
					h = f + (f >= g ? e.length : 0),
					i = a.get("start"),
					j = a.get("end"),
					k = a.get("decoratorKey");
				return b.get("decoratorKey") !== k || b.get("leaves").size !== a.get("leaves").size || d !== i || h !== j || k != null && j - i !== f - c
			})
		}
		i || (i = j(e));
		i || (i = b("nullthrows")(f.getDirectionMap()).get(h) !== b("nullthrows")(d.getDirectionMap()).get(h));
		if (i) {
			c.preventDefault();
			f = b("EditorState").set(f, {
				forceSelection: !0
			});
			a.update(f);
			return
		}
		f = b("EditorState").set(f, {
			nativelyRenderedContent: f.getCurrentContent()
		});
		a._pendingStateFromBeforeInput = f;
		b("setImmediate")(function () {
			a._pendingStateFromBeforeInput !== void 0 && (a.update(a._pendingStateFromBeforeInput), a._pendingStateFromBeforeInput = void 0)
		})
	}
	e.exports = a
}), null);
__d("editOnBlur", ["EditorState", "containsNode", "getActiveElement"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		var d = c.currentTarget.ownerDocument;
		if (!Boolean(a.props.preserveSelectionOnBlur) && b("getActiveElement")(d) === d.body) {
			d = d.defaultView.getSelection();
			var e = a.editor;
			d.rangeCount === 1 && b("containsNode")(e, d.anchorNode) && b("containsNode")(e, d.focusNode) && d.removeAllRanges()
		}
		e = a._latestEditorState;
		d = e.getSelection();
		if (!d.getHasFocus()) return;
		d = d.set("hasFocus", !1);
		a.props.onBlur && a.props.onBlur(c);
		a.update(b("EditorState").acceptSelection(e, d))
	}
	e.exports = a
}), null);
__d("editOnCompositionStart", ["EditorState"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		a.setMode("composite"), a.update(b("EditorState").set(a._latestEditorState, {
			inCompositionMode: !0
		})), a._onCompositionStart(c)
	}
	e.exports = a
}), null);
__d("getFragmentFromSelection", ["getContentStateFragment"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var c = a.getSelection();
		return c.isCollapsed() ? null : b("getContentStateFragment")(a.getCurrentContent(), c)
	}
	e.exports = a
}), null);
__d("editOnCopy", ["getFragmentFromSelection"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		var d = a._latestEditorState;
		d = d.getSelection();
		if (d.isCollapsed()) {
			c.preventDefault();
			return
		}
		a.setClipboard(b("getFragmentFromSelection")(a._latestEditorState))
	}
	e.exports = a
}), null);
__d("isInstanceOfNode", [], (function (a, b, c, d, e, f) {
	function a(a) {
		if (!a || !("ownerDocument" in a)) return !1;
		if ("ownerDocument" in a) {
			a = a;
			if (!a.ownerDocument.defaultView) return a instanceof Node;
			if (a instanceof a.ownerDocument.defaultView.Node) return !0
		}
		return !1
	}
	e.exports = a
}), null);
__d("editOnCut", ["DraftModifier", "EditorState", "Style", "getFragmentFromSelection", "getScrollPosition", "isInstanceOfNode"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		var d = a._latestEditorState,
			e = d.getSelection(),
			f = c.target,
			h;
		if (e.isCollapsed()) {
			c.preventDefault();
			return
		}
		if (b("isInstanceOfNode")(f)) {
			e = f;
			h = b("getScrollPosition")(b("Style").getScrollParent(e))
		}
		c = b("getFragmentFromSelection")(d);
		a.setClipboard(c);
		a.setMode("cut");
		setTimeout(function () {
			a.restoreEditorDOM(h), a.exitCurrentMode(), a.update(g(d))
		}, 0)
	}

	function g(a) {
		var c = b("DraftModifier").removeRange(a.getCurrentContent(), a.getSelection(), "forward");
		return b("EditorState").push(a, c, "remove-range")
	}
	e.exports = a
}), null);
__d("editOnDragOver", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, b) {
		a.setMode("drag"), b.preventDefault()
	}
	e.exports = a
}), null);
__d("editOnDragStart", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		a._internalDrag = !0, a.setMode("drag")
	}
	e.exports = a
}), null);
__d("editOnFocus", ["EditorState", "UserAgent"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		var d = a._latestEditorState,
			e = d.getSelection();
		if (e.getHasFocus()) return;
		e = e.set("hasFocus", !0);
		a.props.onFocus && a.props.onFocus(c);
		b("UserAgent").isBrowser("Chrome < 60.0.3081.0") ? a.update(b("EditorState").forceSelection(d, e)) : a.update(b("EditorState").acceptSelection(d, e))
	}
	e.exports = a
}), null);
__d("keyCommandPlainBackspace", ["EditorState", "UnicodeUtils", "moveSelectionBackward", "removeTextWithStrategy"], (function (a, b, c, d, e, f) {
	"use strict";
	var g;

	function a(a) {
		var c = b("removeTextWithStrategy")(a, function (c) {
			var a = c.getSelection(),
				d = c.getCurrentContent(),
				e = a.getAnchorKey();
			a = a.getAnchorOffset();
			d = d.getBlockForKey(e).getText()[a - 1];
			return b("moveSelectionBackward")(c, d ? (g || (g = b("UnicodeUtils"))).getUTF16Length(d, 0) : 1)
		}, "backward");
		if (c === a.getCurrentContent()) return a;
		var d = a.getSelection();
		return b("EditorState").push(a, c.set("selectionBefore", d), d.isCollapsed() ? "backspace-character" : "remove-range")
	}
	e.exports = a
}), null);
__d("editOnInput", ["DraftModifier", "DraftOffsetKey", "EditorState", "UserAgent", "draftKeyUtils", "findAncestorOffsetKey", "keyCommandPlainBackspace", "nullthrows"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("draftKeyUtils").notEmptyKey,
		h = b("UserAgent").isEngine("Gecko"),
		i = "\n\n";

	function j(a, c) {
		switch (a) {
			case "deleteContentBackward":
				return b("keyCommandPlainBackspace")(c)
		}
		return c
	}

	function a(a, c) {
		a._pendingStateFromBeforeInput !== void 0 && (a.update(a._pendingStateFromBeforeInput), a._pendingStateFromBeforeInput = void 0);
		var d = a.editor;
		d = d.ownerDocument.defaultView.getSelection();
		var e = d.anchorNode,
			f = d.isCollapsed,
			k = (e == null ? void 0 : e.nodeType) !== Node.TEXT_NODE && (e == null ? void 0 : e.nodeType) !== Node.ELEMENT_NODE;
		if (e == null || k) return;
		if (e.nodeType === Node.TEXT_NODE && (e.previousSibling !== null || e.nextSibling !== null)) {
			k = e.parentNode;
			if (k == null) return;
			e.nodeValue = k.textContent;
			for (var l = k.firstChild; l != null; l = l.nextSibling) l !== e && k.removeChild(l)
		}
		l = e.textContent;
		k = a._latestEditorState;
		e = b("nullthrows")(b("findAncestorOffsetKey")(e));
		e = b("DraftOffsetKey").decode(e);
		var m = e.blockKey,
			n = e.decoratorKey;
		e = e.leafKey;
		n = k.getBlockTree(m).getIn([n, "leaves", e]);
		e = n.start;
		n = n.end;
		var o = k.getCurrentContent();
		m = o.getBlockForKey(m);
		var p = m.getText().slice(e, n);
		l.endsWith(i) && (l = l.slice(0, -1));
		if (l === p) {
			c = c.nativeEvent.inputType;
			if (c) {
				c = j(c, k);
				if (c !== k) {
					a.restoreEditorDOM();
					a.update(c);
					return
				}
			}
			return
		}
		c = k.getSelection();
		n = c.merge({
			anchorOffset: e,
			focusOffset: n,
			isBackward: !1
		});
		var q = m.getEntityAt(e);
		q = g(q) ? o.getEntity(q) : null;
		q = q != null ? q.getMutability() : null;
		q = q === "MUTABLE";
		var r = q ? "spellcheck-change" : "apply-entity";
		n = b("DraftModifier").replaceText(o, n, l, m.getInlineStyleAt(e), q ? m.getEntityAt(e) : null);
		if (h) q = d.anchorOffset, m = d.focusOffset, d = e + Math.min(q, m), e = d + Math.abs(q - m), q = d, m = e;
		else {
			l = l.length - p.length;
			d = c.getStartOffset();
			e = c.getEndOffset();
			q = f ? e + l : d;
			m = e + l
		}
		p = n.merge({
			selectionBefore: o.getSelectionAfter(),
			selectionAfter: c.merge({
				anchorOffset: q,
				focusOffset: m
			})
		});
		a.update(b("EditorState").push(k, p, r))
	}
	e.exports = a
}), null);
__d("SecondaryClipboard", ["DraftModifier", "EditorState", "getContentStateFragment", "nullthrows"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = null;
	a = {
		cut: function (a) {
			var c = a.getCurrentContent(),
				d = a.getSelection(),
				e = null;
			if (d.isCollapsed()) {
				var f = d.getAnchorKey(),
					h = c.getBlockForKey(f).getLength();
				if (h === d.getAnchorOffset()) {
					f = c.getKeyAfter(f);
					if (f == null) return a;
					e = d.set("focusKey", f).set("focusOffset", 0)
				} else e = d.set("focusOffset", h)
			} else e = d;
			e = b("nullthrows")(e);
			g = b("getContentStateFragment")(c, e);
			f = b("DraftModifier").removeRange(c, e, "forward");
			return f === c ? a : b("EditorState").push(a, f, "remove-range")
		},
		paste: function (a) {
			if (!g) return a;
			var c = b("DraftModifier").replaceWithFragment(a.getCurrentContent(), a.getSelection(), g);
			return b("EditorState").push(a, c, "insert-fragment")
		}
	};
	e.exports = a
}), null);
__d("getRangeClientRects", ["invariant", "UserAgent"], (function (a, b, c, d, e, f, g) {
	"use strict";
	c = b("UserAgent").isBrowser("Chrome");

	function a(a) {
		var b = a.cloneRange(),
			c = [];
		for (var d = a.endContainer; d != null; d = d.parentNode) {
			var e = d === a.commonAncestorContainer;
			e ? b.setStart(a.startContainer, a.startOffset) : b.setStart(b.endContainer, 0);
			var f = Array.from(b.getClientRects());
			c.push(f);
			if (e) {
				c.reverse();
				return (f = []).concat.apply(f, c)
			}
			b.setEndBefore(d)
		}
		g(0, 578)
	}
	d = c ? a : function (a) {
		return Array.from(a.getClientRects())
	};
	e.exports = d
}), null);
__d("expandRangeToStartOfLine", ["invariant", "UnicodeUtils", "getCorrectDocumentFromNode", "getRangeClientRects"], (function (a, b, c, d, e, f, g) {
	var h;

	function i(a) {
		var c = getComputedStyle(a);
		a = b("getCorrectDocumentFromNode")(a);
		var d = a.createElement("div");
		d.style.fontFamily = c.fontFamily;
		d.style.fontSize = c.fontSize;
		d.style.fontStyle = c.fontStyle;
		d.style.fontWeight = c.fontWeight;
		d.style.lineHeight = c.lineHeight;
		d.style.position = "absolute";
		d.textContent = "M";
		c = a.body;
		c || g(0, 5725);
		c.appendChild(d);
		a = d.getBoundingClientRect();
		c.removeChild(d);
		return a.height
	}

	function j(a, b) {
		var c = Infinity,
			d = Infinity,
			e = -Infinity,
			f = -Infinity;
		for (var g = 0; g < a.length; g++) {
			var h = a[g];
			if (h.width === 0 || h.width === 1) continue;
			c = Math.min(c, h.top);
			d = Math.min(d, h.bottom);
			e = Math.max(e, h.top);
			f = Math.max(f, h.bottom)
		}
		return e <= d && e - c < b && f - d < b
	}

	function k(a) {
		switch (a.nodeType) {
			case Node.DOCUMENT_TYPE_NODE:
				return 0;
			case Node.TEXT_NODE:
			case Node.PROCESSING_INSTRUCTION_NODE:
			case Node.COMMENT_NODE:
				return a.length;
			default:
				return a.childNodes.length
		}
	}

	function a(a) {
		a.collapsed || g(0, 5726);
		a = a.cloneRange();
		var c = a.startContainer;
		c.nodeType !== 1 && (c = c.parentNode);
		c = i(c);
		var d = a.endContainer,
			e = a.endOffset;
		a.setStart(a.startContainer, 0);
		while (j(b("getRangeClientRects")(a), c)) {
			d = a.startContainer;
			e = a.startOffset;
			d.parentNode || g(0, 5727);
			a.setStartBefore(d);
			if (d.nodeType === 1 && getComputedStyle(d).display !== "inline") break
		}
		var f = d,
			l = e - 1;
		do {
			var m = f.nodeValue,
				n = l;
			for (; n >= 0; n--) {
				if (m != null && n > 0 && (h || (h = b("UnicodeUtils"))).isSurrogatePair(m, n - 1)) continue;
				a.setStart(f, n);
				if (j(b("getRangeClientRects")(a), c)) d = f, e = n;
				else break
			}
			if (n === -1 || f.childNodes.length === 0) break;
			f = f.childNodes[n];
			l = k(f)
		} while (!0);
		a.setStart(d, e);
		return a
	}
	e.exports = a
}), null);
__d("keyCommandBackspaceToStartOfLine", ["EditorState", "expandRangeToStartOfLine", "getDraftEditorSelectionWithNodes", "moveSelectionBackward", "removeTextWithStrategy"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		var d = b("removeTextWithStrategy")(a, function (a) {
			var d = a.getSelection();
			if (d.isCollapsed() && d.getAnchorOffset() === 0) return b("moveSelectionBackward")(a, 1);
			d = c.currentTarget.ownerDocument;
			d = d.defaultView.getSelection();
			d = d.getRangeAt(0);
			d = b("expandRangeToStartOfLine")(d);
			return b("getDraftEditorSelectionWithNodes")(a, null, d.endContainer, d.endOffset, d.startContainer, d.startOffset).selectionState
		}, "backward");
		return d === a.getCurrentContent() ? a : b("EditorState").push(a, d, "remove-range")
	}
	e.exports = a
}), null);
__d("DraftRemovableWord", ["TokenizeUtil"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("TokenizeUtil").getPunctuation();
	c = "['\u2018\u2019]";
	d = "\\s|(?![_])" + a;
	f = "^(?:" + d + ")*(?:" + c + "|(?!" + d + ").)*(?:(?!" + d + ").)";
	var g = new RegExp(f);
	b = "(?:(?!" + d + ").)(?:" + c + "|(?!" + d + ").)*(?:" + d + ")*$";
	var h = new RegExp(b);

	function i(a, b) {
		b = b ? h.exec(a) : g.exec(a);
		return b ? b[0] : a
	}
	a = {
		getBackward: function (a) {
			return i(a, !0)
		},
		getForward: function (a) {
			return i(a, !1)
		}
	};
	e.exports = a
}), null);
__d("keyCommandBackspaceWord", ["DraftRemovableWord", "EditorState", "moveSelectionBackward", "removeTextWithStrategy"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var c = b("removeTextWithStrategy")(a, function (a) {
			var c = a.getSelection(),
				d = c.getStartOffset();
			if (d === 0) return b("moveSelectionBackward")(a, 1);
			c = c.getStartKey();
			var e = a.getCurrentContent();
			e = e.getBlockForKey(c).getText().slice(0, d);
			c = b("DraftRemovableWord").getBackward(e);
			return b("moveSelectionBackward")(a, c.length || 1)
		}, "backward");
		return c === a.getCurrentContent() ? a : b("EditorState").push(a, c, "remove-range")
	}
	e.exports = a
}), null);
__d("keyCommandDeleteWord", ["DraftRemovableWord", "EditorState", "moveSelectionForward", "removeTextWithStrategy"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var c = b("removeTextWithStrategy")(a, function (a) {
			var c = a.getSelection(),
				d = c.getStartOffset();
			c = c.getStartKey();
			var e = a.getCurrentContent();
			e = e.getBlockForKey(c).getText().slice(d);
			c = b("DraftRemovableWord").getForward(e);
			return b("moveSelectionForward")(a, c.length || 1)
		}, "forward");
		return c === a.getCurrentContent() ? a : b("EditorState").push(a, c, "remove-range")
	}
	e.exports = a
}), null);
__d("keyCommandInsertNewline", ["DraftModifier", "EditorState"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var c = b("DraftModifier").splitBlock(a.getCurrentContent(), a.getSelection());
		return b("EditorState").push(a, c, "split-block")
	}
	e.exports = a
}), null);
__d("keyCommandMoveSelectionToEndOfBlock", ["EditorState"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var c = a.getSelection(),
			d = c.getEndKey(),
			e = a.getCurrentContent();
		e = e.getBlockForKey(d).getLength();
		return b("EditorState").set(a, {
			selection: c.merge({
				anchorKey: d,
				anchorOffset: e,
				focusKey: d,
				focusOffset: e,
				isBackward: !1
			}),
			forceSelection: !0
		})
	}
	e.exports = a
}), null);
__d("keyCommandMoveSelectionToStartOfBlock", ["EditorState"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var c = a.getSelection(),
			d = c.getStartKey();
		return b("EditorState").set(a, {
			selection: c.merge({
				anchorKey: d,
				anchorOffset: 0,
				focusKey: d,
				focusOffset: 0,
				isBackward: !1
			}),
			forceSelection: !0
		})
	}
	e.exports = a
}), null);
__d("keyCommandPlainDelete", ["EditorState", "UnicodeUtils", "moveSelectionForward", "removeTextWithStrategy"], (function (a, b, c, d, e, f) {
	"use strict";
	var g;

	function a(a) {
		var c = b("removeTextWithStrategy")(a, function (c) {
			var a = c.getSelection(),
				d = c.getCurrentContent(),
				e = a.getAnchorKey();
			a = a.getAnchorOffset();
			d = d.getBlockForKey(e).getText()[a];
			return b("moveSelectionForward")(c, d ? (g || (g = b("UnicodeUtils"))).getUTF16Length(d, 0) : 1)
		}, "forward");
		if (c === a.getCurrentContent()) return a;
		var d = a.getSelection();
		return b("EditorState").push(a, c.set("selectionBefore", d), d.isCollapsed() ? "delete-character" : "remove-range")
	}
	e.exports = a
}), null);
__d("keyCommandTransposeCharacters", ["DraftModifier", "EditorState", "getContentStateFragment"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a) {
		var c = a.getSelection();
		if (!c.isCollapsed()) return a;
		var d = c.getAnchorOffset();
		if (d === 0) return a;
		var e = c.getAnchorKey(),
			f = a.getCurrentContent();
		e = f.getBlockForKey(e);
		e = e.getLength();
		if (e <= 1) return a;
		var g;
		d === e ? (e = c.set("anchorOffset", d - 1), g = c) : (e = c.set("focusOffset", d + 1), g = e.set("anchorOffset", d + 1));
		c = b("getContentStateFragment")(f, e);
		d = b("DraftModifier").removeRange(f, e, "backward");
		f = d.getSelectionAfter();
		e = f.getAnchorOffset() - 1;
		f = f.merge({
			anchorOffset: e,
			focusOffset: e
		});
		e = b("DraftModifier").replaceWithFragment(d, f, c);
		d = b("EditorState").push(a, e, "insert-fragment");
		return b("EditorState").acceptSelection(d, g)
	}
	e.exports = a
}), null);
__d("keyCommandUndo", ["EditorState"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c, d) {
		var e = b("EditorState").undo(c);
		if (c.getLastChangeType() === "spellcheck-change") {
			var f = e.getCurrentContent();
			d(b("EditorState").set(e, {
				nativelyRenderedContent: f
			}));
			return
		}
		a.preventDefault();
		if (!c.getNativelyRenderedContent()) {
			d(e);
			return
		}
		d(b("EditorState").set(c, {
			nativelyRenderedContent: null
		}));
		setTimeout(function () {
			d(e)
		}, 0)
	}
	e.exports = a
}), null);
__d("editOnKeyDown", ["DraftModifier", "EditorState", "KeyBindingUtil", "Keys", "SecondaryClipboard", "UserAgent", "isEventHandled", "keyCommandBackspaceToStartOfLine", "keyCommandBackspaceWord", "keyCommandDeleteWord", "keyCommandInsertNewline", "keyCommandMoveSelectionToEndOfBlock", "keyCommandMoveSelectionToStartOfBlock", "keyCommandPlainBackspace", "keyCommandPlainDelete", "keyCommandTransposeCharacters", "keyCommandUndo"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("KeyBindingUtil").isOptionKeyCommand,
		h = b("UserAgent").isBrowser("Chrome");

	function i(a, c, d) {
		switch (a) {
			case "redo":
				return b("EditorState").redo(c);
			case "delete":
				return b("keyCommandPlainDelete")(c);
			case "delete-word":
				return b("keyCommandDeleteWord")(c);
			case "backspace":
				return b("keyCommandPlainBackspace")(c);
			case "backspace-word":
				return b("keyCommandBackspaceWord")(c);
			case "backspace-to-start-of-line":
				return b("keyCommandBackspaceToStartOfLine")(c, d);
			case "split-block":
				return b("keyCommandInsertNewline")(c);
			case "transpose-characters":
				return b("keyCommandTransposeCharacters")(c);
			case "move-selection-to-start-of-block":
				return b("keyCommandMoveSelectionToStartOfBlock")(c);
			case "move-selection-to-end-of-block":
				return b("keyCommandMoveSelectionToEndOfBlock")(c);
			case "secondary-cut":
				return b("SecondaryClipboard").cut(c);
			case "secondary-paste":
				return b("SecondaryClipboard").paste(c);
			default:
				return c
		}
	}

	function a(a, c) {
		var d = c.which,
			e = a._latestEditorState;

		function f(b) {
			b = a.props[b];
			if (b) {
				b(c);
				return !0
			} else return !1
		}
		switch (d) {
			case b("Keys").RETURN:
				c.preventDefault();
				if (a.props.handleReturn && b("isEventHandled")(a.props.handleReturn(c, e))) return;
				break;
			case b("Keys").ESC:
				c.preventDefault();
				if (f("onEscape")) return;
				break;
			case b("Keys").TAB:
				if (f("onTab")) return;
				break;
			case b("Keys").UP:
				if (f("onUpArrow")) return;
				break;
			case b("Keys").RIGHT:
				if (f("onRightArrow")) return;
				break;
			case b("Keys").DOWN:
				if (f("onDownArrow")) return;
				break;
			case b("Keys").LEFT:
				if (f("onLeftArrow")) return;
				break;
			case b("Keys").SPACE:
				h && g(c) && c.preventDefault()
		}
		f = a.props.keyBindingFn(c);
		if (f == null || f === "") {
			if (d === b("Keys").SPACE && h && g(c)) {
				d = b("DraftModifier").replaceText(e.getCurrentContent(), e.getSelection(), "\xa0");
				a.update(b("EditorState").push(e, d, "insert-characters"))
			}
			return
		}
		if (f === "undo") {
			b("keyCommandUndo")(c, e, a.update);
			return
		}
		c.preventDefault();
		if (a.props.handleKeyCommand && b("isEventHandled")(a.props.handleKeyCommand(f, e, c.timeStamp))) return;
		d = i(f, e, c);
		d !== e && a.update(d)
	}
	e.exports = a
}), null);
__d("getSafeBodyFromHTML", ["invariant", "UserAgent"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("UserAgent").isBrowser("IE <= 9");

	function a(a) {
		var b, c = null;
		!h && document.implementation && document.implementation.createHTMLDocument && (b = document.implementation.createHTMLDocument("foo"), b.documentElement || g(0, 1805), b.documentElement.innerHTML = a, c = b.getElementsByTagName("body")[0]);
		return c
	}
	e.exports = a
}), null);
__d("isHTMLAnchorElement", ["isElement"], (function (a, b, c, d, e, f) {
	function a(a) {
		return !a || !a.ownerDocument ? !1 : b("isElement")(a) && a.nodeName === "A"
	}
	e.exports = a
}), null);
__d("isHTMLImageElement", ["isElement"], (function (a, b, c, d, e, f) {
	function a(a) {
		return !a || !a.ownerDocument ? !1 : b("isElement")(a) && a.nodeName === "IMG"
	}
	e.exports = a
}), null);
__d("convertFromHTMLToContentBlocks", ["cx", "CharacterMetadata", "ContentBlock", "ContentBlockNode", "ContentState", "DefaultDraftBlockRenderMap", "URI", "generateRandomKey", "getSafeBodyFromHTML", "gkx", "immutable", "isHTMLAnchorElement", "isHTMLBRElement", "isHTMLElement", "isHTMLImageElement"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("immutable").List,
		j = b("immutable").Map,
		k = b("immutable").OrderedSet,
		l = b("gkx")("676842");
	a = " ";
	var m = " ",
		n = new RegExp("\r", "g"),
		o = new RegExp("\n", "g"),
		p = new RegExp("^\n", "g"),
		q = new RegExp(a, "g"),
		r = new RegExp("
?", "g"),
		s = new RegExp("​?", "g"),
		t = ["bold", "bolder", "500", "600", "700", "800", "900"],
		u = ["light", "lighter", "normal", "100", "200", "300", "400"],
		v = ["className", "href", "rel", "target", "title"],
		w = ["alt", "className", "height", "src", "width"],
		x = (c = {}, c._3kq1 = 0, c._3kq2 = 1, c._3kq3 = 2, c._3kq4 = 3, c._3kq5 = 4, c),
		y = j({
			b: "BOLD",
			code: "CODE",
			del: "STRIKETHROUGH",
			em: "ITALIC",
			i: "ITALIC",
			s: "STRIKETHROUGH",
			strike: "STRIKETHROUGH",
			strong: "BOLD",
			u: "UNDERLINE",
			mark: "HIGHLIGHT"
		}),
		z = function (a) {
			var b = {};
			a.mapKeys(function (a, c) {
				var d = [c.element];
				c.aliasedElements !== void 0 && d.push.apply(d, c.aliasedElements);
				d.forEach(function (c) {
					b[c] === void 0 ? b[c] = a : typeof b[c] === "string" ? b[c] = [b[c], a] : b[c].push(a)
				})
			});
			return j(b)
		},
		A = function (a) {
			if (b("isHTMLElement")(a)) {
				a = a;
				if (a.style.fontFamily.includes("monospace")) return "CODE"
			}
			return null
		},
		B = function (a, b) {
			b === void 0 && (b = 0);
			Object.keys(x).some(function (c) {
				a.classList.contains(c) && (b = x[c])
			});
			return b
		},
		C = function (a) {
			if (!b("isHTMLAnchorElement")(a)) return !1;
			a = a;
			if (!a.href || a.protocol !== "http:" && a.protocol !== "https:" && a.protocol !== "mailto:" && a.protocol !== "tel:") return !1;
			try {
				new(h || (h = b("URI")))(a.href);
				return !0
			} catch (a) {
				return !1
			}
		},
		D = function (a) {
			if (!b("isHTMLImageElement")(a)) return !1;
			a = a;
			return !!(a.attributes.getNamedItem("src") && a.attributes.getNamedItem("src").value)
		},
		E = function (a, c) {
			if (!b("isHTMLElement")(a)) return c;
			a = a;
			var d = a.style.fontWeight,
				e = a.style.fontStyle,
				f = a.style.textDecoration;
			return c.withMutations(function (a) {
				t.indexOf(d) >= 0 ? a.add("BOLD") : u.indexOf(d) >= 0 && a.remove("BOLD"), e === "italic" ? a.add("ITALIC") : e === "normal" && a.remove("ITALIC"), f === "underline" && a.add("UNDERLINE"), f === "line-through" && a.add("STRIKETHROUGH"), f === "none" && (a.remove("UNDERLINE"), a.remove("STRIKETHROUGH"))
			})
		},
		F = function (a) {
			return a === "ul" || a === "ol"
		},
		G = function () {
			function a(a, c) {
				this.characterList = i(), this.currentBlockType = "unstyled", this.currentDepth = 0, this.currentEntity = null, this.currentText = "", this.wrapper = null, this.blockConfigs = [], this.contentBlocks = [], this.contentState = b("ContentState").createFromText(""), this.clear(), this.blockTypeMap = a, this.disambiguate = c
			}
			var c = a.prototype;
			c.clear = function () {
				this.characterList = i(), this.blockConfigs = [], this.currentBlockType = "unstyled", this.currentDepth = 0, this.currentEntity = null, this.currentText = "", this.contentState = b("ContentState").createFromText(""), this.wrapper = null, this.contentBlocks = []
			};
			c.addDOMNode = function (a) {
				var b;
				this.contentBlocks = [];
				this.currentDepth = 0;
				(b = this.blockConfigs).push.apply(b, this.$1([a], k()));
				this.$2();
				this.currentText !== "" && this.blockConfigs.push(this.$3());
				return this
			};
			c.getContentBlocks = function () {
				this.contentBlocks.length === 0 && (l ? this.$4(this.blockConfigs) : this.$5(this.blockConfigs));
				return {
					contentBlocks: this.contentBlocks,
					entityMap: this.contentState.getEntityMap()
				}
			};
			c.$3 = function (a) {
				a === void 0 && (a = {});
				var c = a.key || b("generateRandomKey")();
				c = babelHelpers["extends"]({
					key: c,
					type: this.currentBlockType,
					text: this.currentText,
					characterList: this.characterList,
					depth: this.currentDepth,
					parent: null,
					children: i(),
					prevSibling: null,
					nextSibling: null,
					childConfigs: []
				}, a);
				this.characterList = i();
				this.currentBlockType = "unstyled";
				this.currentText = "";
				return c
			};
			c.$1 = function (a, c) {
				var d = [];
				for (var e = 0; e < a.length; e++) {
					var f = a[e],
						g = f.nodeName.toLowerCase();
					if (g === "body" || F(g)) {
						this.$2();
						this.currentText !== "" && d.push(this.$3());
						var h = this.currentDepth,
							i = this.wrapper;
						F(g) && (this.wrapper = g, F(i) && this.currentDepth++);
						d.push.apply(d, this.$1(Array.from(f.childNodes), c));
						this.currentDepth = h;
						this.wrapper = i;
						continue
					}
					h = this.blockTypeMap.get(g);
					if (h !== void 0) {
						this.$2();
						this.currentText !== "" && d.push(this.$3());
						i = this.currentDepth;
						var j = this.wrapper;
						this.wrapper = g === "pre" ? "pre" : this.wrapper;
						typeof h !== "string" && (h = this.disambiguate(g, this.wrapper) || h[0] || "unstyled");
						if (!l && b("isHTMLElement")(f) && (h === "unordered-list-item" || h === "ordered-list-item")) {
							var k = f;
							this.currentDepth = B(k, this.currentDepth)
						}
						k = b("generateRandomKey")();
						var m = this.$1(Array.from(f.childNodes), c);
						this.$2();
						d.push(this.$3({
							key: k,
							childConfigs: m,
							type: h
						}));
						this.currentDepth = i;
						this.wrapper = j;
						continue
					}
					if (g === "#text") {
						this.$6(f, c);
						continue
					}
					if (g === "br") {
						this.$7(f, c);
						continue
					}
					if (D(f)) {
						this.$8(f, c);
						continue
					}
					if (C(f)) {
						this.$9(f, d, c);
						continue
					}
					k = c;
					y.has(g) && (k = k.add(y.get(g)));
					k = E(f, k);
					m = A(f);
					m != null && (k = k.add(m));
					d.push.apply(d, this.$1(Array.from(f.childNodes), k))
				}
				return d
			};
			c.$10 = function (a, c) {
				var d;
				this.currentText += a;
				c = b("CharacterMetadata").create({
					style: c,
					entity: this.currentEntity
				});
				this.characterList = (d = this.characterList).push.apply(d, Array(a.length).fill(c))
			};
			c.$2 = function () {
				var a = this.currentText.length,
					b = a - this.currentText.trimLeft().length,
					c = this.currentText.trimRight().length,
					d = this.characterList.findEntry(function (a) {
						return a.getEntity() !== null
					});
				b = d !== void 0 ? Math.min(b, d[0]) : b;
				d = this.characterList.reverse().findEntry(function (a) {
					return a.getEntity() !== null
				});
				c = d !== void 0 ? Math.max(c, a - d[0]) : c;
				b > c ? (this.currentText = "", this.characterList = i()) : (this.currentText = this.currentText.slice(b, c), this.characterList = this.characterList.slice(b, c))
			};
			c.$6 = function (a, b) {
				a = a.textContent;
				var c = a.trim();
				c === "" && this.wrapper !== "pre" && (a = " ");
				this.wrapper !== "pre" && (a = a.replace(p, ""), a = a.replace(o, m));
				this.$10(a, b)
			};
			c.$7 = function (a, c) {
				if (!b("isHTMLBRElement")(a)) return;
				this.$10("\n", c)
			};
			c.$8 = function (a, c) {
				if (!b("isHTMLImageElement")(a)) return;
				var d = a,
					e = {};
				w.forEach(function (a) {
					var b = d.getAttribute(a);
					b && (e[a] = b)
				});
				this.contentState = this.contentState.createEntity("IMAGE", "IMMUTABLE", e);
				this.currentEntity = this.contentState.getLastCreatedEntityKey();
				this.$10("\ud83d\udcf7", c);
				this.currentEntity = null
			};
			c.$9 = function (a, c, d) {
				if (!b("isHTMLAnchorElement")(a)) return;
				var e = a,
					f = {};
				v.forEach(function (a) {
					var b = e.getAttribute(a);
					b && (f[a] = b)
				});
				f.url = new(h || (h = b("URI")))(e.href).toString();
				this.contentState = this.contentState.createEntity("LINK", "MUTABLE", f || {});
				this.currentEntity = this.contentState.getLastCreatedEntityKey();
				c.push.apply(c, this.$1(Array.from(a.childNodes), d));
				this.currentEntity = null
			};
			c.$4 = function (a, c) {
				c === void 0 && (c = null);
				var d = a.length - 1;
				for (var e = 0; e <= d; e++) {
					var f = a[e];
					f.parent = c;
					f.prevSibling = e > 0 ? a[e - 1].key : null;
					f.nextSibling = e < d ? a[e + 1].key : null;
					f.children = i(f.childConfigs.map(function (a) {
						return a.key
					}));
					this.contentBlocks.push(new(b("ContentBlockNode"))(babelHelpers["extends"]({}, f)));
					this.$4(f.childConfigs, f.key)
				}
			};
			c.$11 = function (a) {
				var b = this;
				a = i(a).flatMap(function (a) {
					return a.type !== "unstyled" || a.text !== "" ? [a] : b.$11(a.childConfigs)
				});
				return a
			};
			c.$5 = function (a) {
				var c = this;
				a = this.$11(a);
				a.forEach(function (a) {
					var d = c.$12(a.childConfigs),
						e = d.text;
					d = d.characterList;
					c.contentBlocks.push(new(b("ContentBlock"))(babelHelpers["extends"]({}, a, {
						text: a.text + e,
						characterList: a.characterList.concat(d)
					})))
				})
			};
			c.$12 = function (a) {
				var b = a.length - 1,
					c = "",
					d = i();
				for (var e = 0; e <= b; e++) {
					var f = a[e];
					c += f.text;
					d = d.concat(f.characterList);
					c !== "" && f.type !== "unstyled" && (c += "\n", d = d.push(d.last()));
					f = this.$12(f.childConfigs);
					c += f.text;
					d = d.concat(f.characterList)
				}
				return {
					text: c,
					characterList: d
				}
			};
			return a
		}();
	d = function (a, c, d) {
		c === void 0 && (c = b("getSafeBodyFromHTML"));
		d === void 0 && (d = b("DefaultDraftBlockRenderMap"));
		a = a.trim().replace(n, "").replace(q, m).replace(r, "").replace(s, "");
		c = c(a);
		if (!c) return null;
		a = z(d);
		d = function (a, b) {
			return a === "li" ? b === "ol" ? "ordered-list-item" : "unordered-list-item" : null
		};
		return new G(a, d).addDOMNode(c).getContentBlocks()
	};
	e.exports = d
}), null);
__d("DraftPasteProcessor", ["ContentBlock", "ContentBlockNode", "convertFromHTMLToContentBlocks", "generateRandomKey", "getSafeBodyFromHTML", "gkx", "immutable", "sanitizeDraftText"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("immutable").List,
		h = b("immutable").Repeat,
		i = b("gkx")("676842"),
		j = i ? b("ContentBlockNode") : b("ContentBlock");
	a = {
		processHTML: function (a, c) {
			return b("convertFromHTMLToContentBlocks")(a, b("getSafeBodyFromHTML"), c)
		},
		processText: function (a, c, d) {
			return a.reduce(function (a, e, f) {
				e = b("sanitizeDraftText")(e);
				var k = b("generateRandomKey")();
				e = {
					key: k,
					type: d,
					text: e,
					characterList: g(h(c, e.length))
				};
				if (i && f !== 0) {
					f = f - 1;
					f = a[f] = a[f].merge({
						nextSibling: k
					});
					e = babelHelpers["extends"]({}, e, {
						prevSibling: f.getKey()
					})
				}
				a.push(new j(e));
				return a
			}, [])
		}
	};
	e.exports = a
}), null);
__d("adjustBlockDepthForContentState", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, b, c) {
		var d = b.getStartKey(),
			e = b.getEndKey(),
			f = a.getBlockMap(),
			g = f.toSeq().skipUntil(function (a, b) {
				return b === d
			}).takeUntil(function (a, b) {
				return b === e
			}).concat([
				[e, f.get(e)]
			]).map(function (a) {
				var b = a.getDepth() + c;
				b = Math.max(0, b);
				return a.set("depth", b)
			});
		f = f.merge(g);
		return a.merge({
			blockMap: f,
			selectionBefore: b,
			selectionAfter: b
		})
	}
	e.exports = a
}), null);
__d("RichTextEditorUtil", ["DraftModifier", "EditorState", "adjustBlockDepthForContentState", "nullthrows"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = {
		currentBlockContainsLink: function (a) {
			var b = a.getSelection(),
				c = a.getCurrentContent();
			return c.getBlockForKey(b.getAnchorKey()).getCharacterList().slice(b.getStartOffset(), b.getEndOffset()).some(function (a) {
				a = a.getEntity();
				return !!a && c.getEntity(a).getType() === "LINK"
			})
		},
		getCurrentBlockType: function (a) {
			var b = a.getSelection();
			return a.getCurrentContent().getBlockForKey(b.getStartKey()).getType()
		},
		getDataObjectForLinkURL: function (a) {
			return {
				url: a.toString()
			}
		},
		handleKeyCommand: function (a, b, c) {
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
		insertSoftNewline: function (a) {
			var c = b("DraftModifier").insertText(a.getCurrentContent(), a.getSelection(), "\n", a.getCurrentInlineStyle(), null);
			a = b("EditorState").push(a, c, "insert-characters");
			return b("EditorState").forceSelection(a, c.getSelectionAfter())
		},
		onBackspace: function (a) {
			var c = a.getSelection();
			if (!c.isCollapsed() || c.getAnchorOffset() || c.getFocusOffset()) return null;
			var d = a.getCurrentContent(),
				e = c.getStartKey();
			e = d.getBlockBefore(e);
			if (e && e.getType() === "atomic") {
				e = d.getBlockMap()["delete"](e.getKey());
				e = d.merge({
					blockMap: e,
					selectionAfter: c
				});
				if (e !== d) return b("EditorState").push(a, e, "remove-range")
			}
			c = g.tryToRemoveBlockStyle(a);
			return c ? b("EditorState").push(a, c, "change-block-type") : null
		},
		onDelete: function (a) {
			var c = a.getSelection();
			if (!c.isCollapsed()) return null;
			var d = a.getCurrentContent(),
				e = c.getStartKey(),
				f = d.getBlockForKey(e);
			f = f.getLength();
			if (c.getStartOffset() < f) return null;
			f = d.getBlockAfter(e);
			if (!f || f.getType() !== "atomic") return null;
			e = c.merge({
				focusKey: f.getKey(),
				focusOffset: f.getLength()
			});
			c = b("DraftModifier").removeRange(d, e, "forward");
			return c !== d ? b("EditorState").push(a, c, "remove-range") : null
		},
		onTab: function (a, c) {
			var d = c.getSelection(),
				e = d.getAnchorKey(),
				f = c.getCurrentContent();
			e = f.getBlockForKey(e);
			e = e.getType();
			if (e !== "unordered-list-item" && e !== "ordered-list-item") return c;
			a.preventDefault();
			e = b("adjustBlockDepthForContentState")(f, d, a.shiftKey ? -1 : 1);
			return b("EditorState").push(c, e, "adjust-depth")
		},
		toggleBlockType: function (a, c) {
			var d = a.getSelection(),
				e = d.getStartKey(),
				f = d.getEndKey(),
				g = a.getCurrentContent(),
				h = d;
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
			d = g.getBlockMap().skipWhile(function (a, b) {
				return b !== e
			}).reverse().skipWhile(function (a, b) {
				return b !== f
			}).some(function (a) {
				return a.getType() === "atomic"
			});
			if (d) return a;
			i = g.getBlockForKey(e).getType() === c ? "unstyled" : c;
			return b("EditorState").push(a, b("DraftModifier").setBlockType(g, h, i), "change-block-type")
		},
		toggleCode: function (a) {
			var b = a.getSelection(),
				c = b.getAnchorKey(),
				d = b.getFocusKey();
			return b.isCollapsed() || c !== d ? g.toggleBlockType(a, "code-block") : g.toggleInlineStyle(a, "CODE")
		},
		toggleInlineStyle: function (a, c) {
			var d = a.getSelection(),
				e = a.getCurrentInlineStyle();
			if (d.isCollapsed()) return b("EditorState").setInlineStyleOverride(a, e.has(c) ? e.remove(c) : e.add(c));
			var f = a.getCurrentContent();
			e.has(c) ? e = b("DraftModifier").removeInlineStyle(f, d, c) : e = b("DraftModifier").applyInlineStyle(f, d, c);
			return b("EditorState").push(a, e, "change-inline-style")
		},
		toggleLink: function (a, c, d) {
			c = b("DraftModifier").applyEntity(a.getCurrentContent(), c, d);
			return b("EditorState").push(a, c, "apply-entity")
		},
		tryToRemoveBlockStyle: function (a) {
			var c = a.getSelection(),
				d = c.getAnchorOffset();
			if (c.isCollapsed() && d === 0) {
				d = c.getAnchorKey();
				a = a.getCurrentContent();
				var e = a.getBlockForKey(d);
				e = e.getType();
				d = a.getBlockBefore(d);
				if (e === "code-block" && d && d.getType() === "code-block" && d.getLength() !== 0) return null;
				if (e !== "unstyled") return b("DraftModifier").setBlockType(a, c, "unstyled")
			}
			return null
		}
	};
	e.exports = g
}), null);
__d("splitTextIntoTextBlocks", [], (function (a, b, c, d, e, f) {
	"use strict";
	var g = /\r\n?|\n/g;

	function a(a) {
		return a.split(g)
	}
	e.exports = a
}), null);
__d("editOnPaste", ["BlockMapBuilder", "CharacterMetadata", "DataTransfer", "DraftModifier", "DraftPasteProcessor", "EditorState", "RichTextEditorUtil", "getEntityKeyForSelection", "getTextContentFromFiles", "isEventHandled", "splitTextIntoTextBlocks"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c) {
		c.preventDefault();
		c = new(b("DataTransfer"))(c.clipboardData);
		if (!c.isRichText()) {
			var d = c.getFiles(),
				e = c.getText();
			if (d.length > 0) {
				if (a.props.handlePastedFiles && b("isEventHandled")(a.props.handlePastedFiles(d))) return;
				b("getTextContentFromFiles")(d, function (d) {
					d = d || e;
					if (!d) return;
					var c = a._latestEditorState;
					d = b("splitTextIntoTextBlocks")(d);
					var f = b("CharacterMetadata").create({
							style: c.getCurrentInlineStyle(),
							entity: b("getEntityKeyForSelection")(c.getCurrentContent(), c.getSelection())
						}),
						g = b("RichTextEditorUtil").getCurrentBlockType(c);
					d = b("DraftPasteProcessor").processText(d, f, g);
					f = b("BlockMapBuilder").createFromArray(d);
					g = b("DraftModifier").replaceWithFragment(c.getCurrentContent(), c.getSelection(), f);
					a.update(b("EditorState").push(c, g, "insert-fragment"))
				});
				return
			}
		}
		d = [];
		var f = c.getText(),
			i = c.getHTML(),
			j = a._latestEditorState;
		if (a.props.formatPastedText) {
			var k = a.props.formatPastedText(f, i),
				l = k.text;
			k = k.html;
			f = l;
			i = k
		}
		if (a.props.handlePastedText && b("isEventHandled")(a.props.handlePastedText(f, i, j))) return;
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
		return a.length === b.size && b.valueSeq().every(function (b, c) {
			return b.getText() === a[c]
		})
	}
	e.exports = a
}), null);
__d("DraftEditorEditHandler", ["UserAgent", "editOnBeforeInput", "editOnBlur", "editOnCompositionStart", "editOnCopy", "editOnCut", "editOnDragOver", "editOnDragStart", "editOnFocus", "editOnInput", "editOnKeyDown", "editOnPaste", "editOnSelect"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("UserAgent").isBrowser("Chrome");
	c = b("UserAgent").isBrowser("Firefox");
	d = a || c ? b("editOnSelect") : function (a) {};
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
}), null);
__d("DraftEditorFlushControlled", ["ReactDOMComet"], (function (a, b, c, d, e, f) {
	a = b("ReactDOMComet").unstable_flushControlled;
	e.exports = a
}), null);
__d("DraftEditorPlaceholder.react", ["cx", "React", "shallowEqual"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.shouldComponentUpdate = function (a) {
			var c = this.props,
				d = c.editorState;
			c = babelHelpers.objectWithoutPropertiesLoose(c, ["editorState"]);
			var e = a.editorState;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["editorState"]);
			return d.getSelection().getHasFocus() !== e.getSelection().getHasFocus() || b("shallowEqual")(c, a)
		};
		d.render = function () {
			var a = "_1p1v" + (this.props.className != null ? " " + this.props.className : "");
			return h.jsx("div", {
				className: "_1p1t" + (this.props.editorState.getSelection().getHasFocus() ? " _1p1u" : ""),
				children: h.jsx("div", {
					className: a,
					id: this.props.accessibilityID,
					style: {
						whiteSpace: "pre-wrap"
					},
					children: this.props.text
				})
			})
		};
		return c
	}(h.Component);
	e.exports = a
}), null);
__d("DraftEditor.react", ["cx", "invariant", "DefaultDraftBlockRenderMap", "DefaultDraftInlineStyle", "DraftEditorCompositionHandler", "DraftEditorContents.react", "DraftEditorDragHandler", "DraftEditorEditHandler", "DraftEditorFlushControlled", "DraftEditorPlaceholder.react", "DraftEffects", "EditorState", "React", "Scroll", "Style", "UserAgent", "generateRandomKey", "getDefaultKeyBinding", "getScrollPosition", "gkx", "isHTMLElement", "nullthrows"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React"),
		j = b("UserAgent").isBrowser("IE"),
		k = !j,
		l = {
			edit: b("DraftEditorEditHandler"),
			composite: b("DraftEditorCompositionHandler"),
			drag: b("DraftEditorDragHandler"),
			cut: null,
			render: null
		},
		m = !1,
		n = function (b) {
			babelHelpers.inheritsLoose(a, b);

			function a() {
				return b.apply(this, arguments) || this
			}
			var c = a.prototype;
			c.render = function () {
				return null
			};
			c.componentDidMount = function () {
				this._update()
			};
			c.componentDidUpdate = function () {
				this._update()
			};
			c._update = function () {
				var a = this.props.editor;
				a._latestEditorState = this.props.editorState;
				a._blockSelectEvents = !0
			};
			return a
		}(i.Component);
	c = function (c) {
		babelHelpers.inheritsLoose(d, c);

		function d(a) {
			var d;
			d = c.call(this, a) || this;
			d._internalDrag = !1;
			d.state = {
				contentsKey: 0
			};
			d._handleEditorContainerRef = function (a) {
				d.editorContainer = a, d.editor = a !== null ? a.firstChild : null
			};
			d.focus = function (a) {
				var c = d.props.editorState,
					e = c.getSelection().getHasFocus(),
					f = d.editor;
				if (!f) return;
				var g = b("Style").getScrollParent(f);
				a = a || b("getScrollPosition")(g);
				var i = a.x;
				a = a.y;
				b("isHTMLElement")(f) || h(0, 2355);
				f.focus();
				g === window ? window.scrollTo(i, a) : b("Scroll").setTop(g, a);
				e || d.update(b("EditorState").forceSelection(c, c.getSelection()))
			};
			d.blur = function () {
				var a = d.editor;
				if (!a) return;
				b("isHTMLElement")(a) || h(0, 2355);
				a.blur()
			};
			d.setMode = function (a) {
				var b = d.props,
					c = b.onPaste,
					e = b.onCut;
				b = b.onCopy;
				var f = babelHelpers["extends"]({}, l.edit);
				c && (f.onPaste = c);
				e && (f.onCut = e);
				b && (f.onCopy = b);
				c = babelHelpers["extends"]({}, l, {
					edit: f
				});
				d._handler = c[a]
			};
			d.exitCurrentMode = function () {
				d.setMode("edit")
			};
			d.restoreEditorDOM = function (a) {
				b("DraftEditorFlushControlled") ? b("DraftEditorFlushControlled")(function () {
					return d.setState({
						contentsKey: d.state.contentsKey + 1
					}, function () {
						d.focus(a)
					})
				}) : d.setState({
					contentsKey: d.state.contentsKey + 1
				}, function () {
					d.focus(a)
				})
			};
			d.setClipboard = function (a) {
				d._clipboard = a
			};
			d.getClipboard = function () {
				return d._clipboard
			};
			d.update = function (a) {
				var c = d.props.onChange;
				d._latestEditorState = a;
				b("DraftEditorFlushControlled") ? b("DraftEditorFlushControlled")(function () {
					return c(a)
				}) : c(a)
			};
			d.onDragEnter = function () {
				d._dragCount++
			};
			d.onDragLeave = function () {
				d._dragCount--, d._dragCount === 0 && d.exitCurrentMode()
			};
			d._blockSelectEvents = !1;
			d._clipboard = null;
			d._handler = null;
			d._dragCount = 0;
			d._editorKey = a.editorKey || b("generateRandomKey")();
			d._placeholderAccessibilityID = "placeholder-" + d._editorKey;
			d._latestEditorState = a.editorState;
			d._latestCommittedEditorState = a.editorState;
			d._onBeforeInput = d._buildHandler("onBeforeInput");
			d._onBlur = d._buildHandler("onBlur");
			d._onCharacterData = d._buildHandler("onCharacterData");
			d._onCompositionEnd = d._buildHandler("onCompositionEnd");
			d._onCompositionStart = d._buildHandler("onCompositionStart");
			d._onCopy = d._buildHandler("onCopy");
			d._onCut = d._buildHandler("onCut");
			d._onDragEnd = d._buildHandler("onDragEnd");
			d._onDragOver = d._buildHandler("onDragOver");
			d._onDragStart = d._buildHandler("onDragStart");
			d._onDrop = d._buildHandler("onDrop");
			d._onInput = d._buildHandler("onInput");
			d._onFocus = d._buildHandler("onFocus");
			d._onKeyDown = d._buildHandler("onKeyDown");
			d._onKeyPress = d._buildHandler("onKeyPress");
			d._onKeyUp = d._buildHandler("onKeyUp");
			d._onMouseDown = d._buildHandler("onMouseDown");
			d._onMouseUp = d._buildHandler("onMouseUp");
			d._onPaste = d._buildHandler("onPaste");
			d._onSelect = d._buildHandler("onSelect");
			d.getEditorKey = function () {
				return d._editorKey
			};
			return d
		}
		var e = d.prototype;
		e._buildHandler = function (a) {
			var c = this;
			return function (d) {
				if (!c.props.readOnly) {
					var e = c._handler && c._handler[a];
					e && (b("DraftEditorFlushControlled") ? b("DraftEditorFlushControlled")(function () {
						return e(c, d)
					}) : e(c, d))
				}
			}
		};
		e._showPlaceholder = function () {
			return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText()
		};
		e._renderPlaceholder = function () {
			if (this._showPlaceholder()) {
				var a = {
					accessibilityID: this._placeholderAccessibilityID,
					className: this.props.placeholderClassName,
					editorState: this.props.editorState,
					text: b("nullthrows")(this.props.placeholder),
					textAlignment: this.props.textAlignment
				};
				return i.jsx(b("DraftEditorPlaceholder.react"), babelHelpers["extends"]({}, a))
			}
			return null
		};
		e._renderARIADescribedBy = function () {
			var a = this.props.ariaDescribedBy || "",
				b = this._showPlaceholder() ? this._placeholderAccessibilityID : "";
			return a.replace("{{editor_id_placeholder}}", b) || void 0
		};
		e.render = function () {
			var a = this.props,
				c = a.blockRenderMap,
				d = a.blockRendererFn,
				e = a.blockStyleFn,
				f = a.customStyleFn,
				g = a.customStyleMap,
				h = a.editorState,
				j = a.preventScroll,
				l = a.readOnly,
				m = a.textAlignment;
			a = a.textDirectionality;
			m = "_5rp7" + (m === "left" ? " _5rp8" : "") + (m === "right" ? " _5rp9" : "") + (m === "center" ? " _5rpa" : "");
			var o = {
					outline: "none",
					userSelect: "text",
					WebkitUserSelect: "text",
					whiteSpace: "pre-wrap",
					wordWrap: "break-word"
				},
				p = this.props.role || "textbox",
				q = p === "combobox" ? !!this.props.ariaExpanded : null;
			c = {
				blockRenderMap: c,
				blockRendererFn: d,
				blockStyleFn: e,
				customStyleMap: babelHelpers["extends"]({}, b("DefaultDraftInlineStyle"), g),
				customStyleFn: f,
				editorKey: this._editorKey,
				editorState: h,
				preventScroll: j,
				textDirectionality: a
			};
			d = this.props.contentClassName != null ? this.props.contentClassName + " " : "";
			return i.jsxs("div", {
				className: m,
				children: [this._renderPlaceholder(), i.jsx("div", {
					className: "_5rpb",
					ref: this._handleEditorContainerRef,
					children: i.jsxs("div", {
						"aria-activedescendant": l ? null : this.props.ariaActiveDescendantID,
						"aria-autocomplete": l ? null : this.props.ariaAutoComplete,
						"aria-controls": l ? null : this.props.ariaControls,
						"aria-describedby": this._renderARIADescribedBy(),
						"aria-expanded": l ? null : q,
						"aria-label": this.props.ariaLabel,
						"aria-labelledby": this.props.ariaLabelledBy,
						"aria-multiline": this.props.ariaMultiline,
						"aria-owns": l ? null : this.props.ariaOwneeID,
						autoCapitalize: this.props.autoCapitalize,
						autoComplete: this.props.autoComplete,
						autoCorrect: this.props.autoCorrect,
						className: d + ((l ? "" : "notranslate") + " _5rpu"),
						contentEditable: !l,
						"data-testid": void 0,
						onBeforeInput: this._onBeforeInput,
						onBlur: this._onBlur,
						onCompositionEnd: this._onCompositionEnd,
						onCompositionStart: this._onCompositionStart,
						onCopy: this._onCopy,
						onCut: this._onCut,
						onDragEnd: this._onDragEnd,
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this._onDragOver,
						onDragStart: this._onDragStart,
						onDrop: this._onDrop,
						onFocus: this._onFocus,
						onInput: this._onInput,
						onKeyDown: this._onKeyDown,
						onKeyPress: this._onKeyPress,
						onKeyUp: this._onKeyUp,
						onMouseUp: this._onMouseUp,
						onPaste: this._onPaste,
						onSelect: this._onSelect,
						ref: this.props.editorRef,
						role: l ? null : p,
						spellCheck: k && this.props.spellCheck,
						style: o,
						suppressContentEditableWarning: !0,
						tabIndex: this.props.tabIndex,
						children: [i.jsx(n, {
							editor: this,
							editorState: h
						}), i.createElement(b("DraftEditorContents.react"), babelHelpers["extends"]({}, c, {
							key: "contents" + this.state.contentsKey
						}))]
					})
				})]
			})
		};
		e.componentDidMount = function () {
			this._blockSelectEvents = !1, !m && b("gkx")("676845") && (m = !0, b("DraftEffects").initODS()), this.setMode("edit"), j && (!this.editor ? a.execCommand("AutoUrlDetect", !1, !1) : this.editor.ownerDocument.execCommand("AutoUrlDetect", !1, !1))
		};
		e.componentDidUpdate = function () {
			this._blockSelectEvents = !1, this._latestEditorState = this.props.editorState, this._latestCommittedEditorState = this.props.editorState
		};
		return d
	}(i.Component);
	c.defaultProps = {
		ariaDescribedBy: "{{editor_id_placeholder}}",
		blockRenderMap: b("DefaultDraftBlockRenderMap"),
		blockRendererFn: function () {
			return null
		},
		blockStyleFn: function () {
			return ""
		},
		keyBindingFn: b("getDefaultKeyBinding"),
		readOnly: !1,
		spellCheck: !1,
		stripPastedStyles: !1
	};
	e.exports = c
}), null);