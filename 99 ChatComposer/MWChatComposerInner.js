__d("MWChatComposerInner.bs", ["fbt", "Keys", "bs_curry", "React", "Locale", "gkx", "qex", "bs_belt_Array", "stylex", "bs_caml_option", "requireCond", "MWChatComposerUtil.bs", "isMimeTypeForMedia", "recoverableViolation", "MWChatComposerButtons.bs", "useCometComposerHandler", "composerAudioClipReducer", "CometComposerEditor.react", "MWChatComposerEmojiButton.bs", "withComposerViewStatePart", "useComposerViewStateReducer", "MWChatComposerAttachmentArea.bs", "MWChatComposerRoundedCorners.bs", "CometComposerViewStateActions.bs", "useComposerViewStateDispatcher", "MWChatComposerMediaAttachmentArea.bs", "CometComposerAttachmentAreaReducer.re", "CometComposerMediaAttachmentReducer.re", "getPlainTextFromDeferredDraftEditorState", "cr:1701527"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = {
			root: {
				alignItems: "aovydwv3",
				display: "j83agx80",
				flexGrow: "buofh1pr",
				overflowX: "ni8dbmo4",
				paddingTop: "cxgpxx05",
				paddingBottom: "sj5x9vvc",
				width: "qio8uep8",
				pointerEvents: "hzruof5a",
				position: "l9j0dhe7"
			},
			container: {
				borderTopStartRadius: "orhb3f3m",
				borderTopEndRadius: "czkt41v7",
				borderBottomEndRadius: "fmqxjp7s",
				borderBottomStartRadius: "emzo65vh",
				display: "j83agx80",
				paddingBottom: "e5nlhep0",
				pointerEvents: "mrt03zmi"
			},
			composeArea: {
				paddingTop: "ecm0bbzt",
				paddingStart: "h4z51re5",
				borderTop: "gvyehdmr",
				borderEnd: "mu0vl6fp",
				borderBottom: "msuhji6j",
				borderStart: "iqy7zqfr",
				flexBasis: "rj1gh0hx",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr",
				display: "j83agx80",
				overflowX: "ni8dbmo4",
				alignItems: "ll8tlv6m",
				backgroundColor: "b3i9ofy5",
				color: "oo9gr5id",
				transitionProperty: "flx89l3n",
				transitionDuration: "dpja2al7",
				borderTopStartRadius: "orhb3f3m",
				borderTopEndRadius: "h905i5nu",
				borderBottomEndRadius: "jinzq4gt",
				borderBottomStartRadius: "emzo65vh"
			},
			composeAreaExpanded: {
				transform: "qiw3t3sk"
			},
			composeAreaCollapsed: {
				transform: "hedjyaoh"
			},
			composeAreaCollapsedRtl: {
				transform: "n83uzuu6"
			},
			inputBoxContainer: {
				position: "pmk7jnqg",
				end: "tdcub1r8",
				paddingTop: "jb3vyjys",
				paddingEnd: "rz4wbd8a",
				paddingBottom: "qt6c0cv9",
				paddingStart: "a8nywdso"
			},
			inputContainer: {
				display: "j83agx80",
				width: "k4urcfbm"
			},
			inputContainerContracted: {
				width: "thccjwpm"
			},
			photoAction: {
				marginEnd: "cxmmr5t8"
			},
			photoIcon: {
				marginTop: "kvgmc6g5",
				marginEnd: "cxmmr5t8",
				marginBottom: "oygrvhab",
				marginStart: "hcukyx3x"
			},
			photoPressable: {
				paddingTop: "cxgpxx05",
				paddingEnd: "dflh9lhu",
				paddingBottom: "sj5x9vvc",
				paddingStart: "scb9dxdr"
			},
			input: {
				paddingTop: "ecm0bbzt",
				paddingBottom: "e5nlhep0",
				flexGrow: "buofh1pr",
				fontSize: "jq4qci2q",
				lineHeight: "a3bd9o3v",
				maxHeight: "iko8p5ub",
				overflowY: "eg9m0zos",
				overflowX: "ni8dbmo4",
				boxSizing: "rq0escxv",
				marginEnd: "lexh0w6q"
			}
		};

	function a(a) {
		var c = a.actionTrayOpen,
			d = a.buttonColor,
			e = a.hasExtraTrayButtons,
			f = a.closeActionTray,
			k = a.fileUploadHandlerRef,
			l = a.hasContent,
			m = a.inputRef,
			n = a.editorState,
			o = a.hasMediaAttachments,
			p = a.canSendGif,
			q = a.sendGif,
			r = a.sendSticker,
			s = a.shouldExpandInput,
			t = a.onBlur,
			u = a.onContentsChange,
			v = a.onEscape,
			w = a.onFileUploadStart,
			x = a.onFileUploadSuccess,
			y = a.onAttachmentsChanged,
			z = a.logOnOpenStickerFlyout,
			A = a.logOnOpenEmojiFlyout,
			B = a.logOnSelectFileForUpload,
			C = a.audioRecorderShown;
		a = a.audioClip;
		b("useComposerViewStateReducer")(b("CometComposerAttachmentAreaReducer.re").composerAttachmentAreaReducer);
		b("useComposerViewStateReducer")(b("CometComposerMediaAttachmentReducer.re").reducer);
		b("useComposerViewStateReducer")(b("composerAudioClipReducer"));
		var D = b("useComposerViewStateDispatcher")(),
			E = !e || b("gkx")("1787593"),
			F = i.useMemo(function() {
				return {
					handleKeyCommand: function(a, c, d) {
						if (a !== "Messenger/CloseTab") return "not-handled";
						b("bs_curry")._1(v, void 0);
						return "handled"
					},
					keyBindingFn: function(a) {
						if (a.keyCode === b("Keys").ESC) return "Messenger/CloseTab"
					},
					priority: 10
				}
			}, [v]);
		b("useCometComposerHandler")(F);
		F = function(a) {
			a = b("bs_belt_Array").keepMap(a, function(a) {
				if (b("isMimeTypeForMedia").isMimeTypeForPhoto(a.type)) return b("bs_caml_option").some(a)
			});
			a.length > 0 && (b("bs_curry")._1(D, b("CometComposerViewStateActions.bs").convert({
				NAME: "ActivateAttachmentType",
				VAL: "MEDIA"
			})), b("bs_curry")._1(D, b("CometComposerViewStateActions.bs").convert({
				NAME: "AddMediaAttachmentItems",
				VAL: a
			})));
			return "handled"
		};
		var G = function(a, c) {
			return b("bs_curry")._1(D, b("CometComposerViewStateActions.bs").convert({
				NAME: "SetAudioClip",
				VAL: [a, c]
			}))
		};
		if (n !== void 0) {
			var H = b("bs_caml_option").valFromOption(n);
			l.contents = b("MWChatComposerUtil.bs").hasContent(H);
			var I = H.draftEditorState;
			if (I !== void 0) I = b("bs_caml_option").valFromOption(I).isInCompositionMode();
			else {
				H = H.isComposing;
				H !== void 0 ? I = H : (b("recoverableViolation")("viewState.editorState in MWChatComposerInner is malformed!", "messenger_comet"), I = !1)
			}
		} else b("recoverableViolation")("Did not properly supply editorState prop to MWChatComposerInner from viewState!", "messenger_comet"), I = !1;
		H = function(a) {
			if (n !== void 0) {
				var c = b("getPlainTextFromDeferredDraftEditorState")(b("bs_caml_option").valFromOption(n)),
					d = b("getPlainTextFromDeferredDraftEditorState")(a);
				c !== d && b("bs_curry")._1(u, d)
			}
			return a
		};
		var J = b("gkx")("1620337");
		s = s || J || I || c || o === !0 || C || l.contents && e;
		I = function(a) {
			a = m.current;
			if (!(a == null)) return a.focus()
		};
		c = b("qex")._("1586110");
		l = c == null ? {} : {
			fontSize: String(c) + "px"
		};
		e = {
			hasPermanentToggleButton: !E,
			fileUploadHandlerRef: k,
			canSendGif: p,
			sendGif: q,
			sendSticker: r,
			shouldHideButtons: s,
			logOnOpenStickerFlyout: z,
			logOnSelectFileForUpload: B
		};
		d !== void 0 && (e.buttonColor = b("bs_caml_option").valFromOption(d));
		var K;
		c = 0;
		b("cr:1701527") == null || !C ? c = 1 : K = i.jsx(b("cr:1701527").make, {
			audioClip: a,
			setAudioClip: G
		});
		if (c === 1) {
			E = {
				className: (h || (h = b("stylex")))(j.photoAction),
				withArrow: !J,
				logOnOpenEmojiFlyout: A,
				xstylePressable: j.photoPressable
			};
			d !== void 0 && (E.fill = b("bs_caml_option").valFromOption(d));
			K = i.jsxs(i.Fragment, {
				children: [i.jsxs("div", {
					children: [o === !0 ? i.jsx(b("MWChatComposerAttachmentArea.bs").make, {
						children: function(a) {
							return i.jsx(b("MWChatComposerMediaAttachmentArea.bs").make, {
								onFileUploadStart: w,
								onFileUploadSuccess: x,
								onAttachmentsChanged: y
							})
						},
						closeActionTray: f
					}) : null, i.jsx("div", {
						children: i.jsx("div", {
							children: i.jsx(b("CometComposerEditor.react"), {
								autoFocus: !1,
								handlePastedFiles: F,
								onChange: H,
								onBlur: t,
								placeholder: g._("Aa"),
								ref: m,
								submitOnEnter: !0,
								testid: "chat_input",
								typingPerformanceID: "MWChatComposer"
							}),
							className: h(j.input),
							style: l
						}),
						className: h(j.inputContainer, s ? !1 : j.inputContainerContracted)
					})],
					className: h(j.container, j.composeArea, s ? j.composeAreaExpanded : b("Locale").isRTL() ? j.composeAreaCollapsedRtl : j.composeAreaCollapsed),
					onClick: I
				}), i.jsx("div", {
					children: i.jsx(b("MWChatComposerEmojiButton.bs").make, E),
					className: h(j.container, j.inputBoxContainer)
				})]
			})
		}
		return i.jsxs(i.Fragment, {
			children: [i.jsx(b("MWChatComposerButtons.bs").make, e), i.jsxs("div", {
				children: [K, i.jsx(b("MWChatComposerRoundedCorners.bs").TopRight.make, {}), i.jsx(b("MWChatComposerRoundedCorners.bs").BottomRight.make, {})],
				className: (h || (h = b("stylex")))(j.root)
			})]
		})
	}
	c = b("withComposerViewStatePart")(a, function(a) {
		var c = a.mediaAttachments;
		return {
			audioClip: b("bs_caml_option").nullable_to_opt(a.audioClip),
			hasMediaAttachments: c == null ? !1 : c.length !== 0,
			editorState: a.editorState
		}
	});
	d = b("cr:1701527");
	f.styles = j;
	f.$MWChatComposerAudioRecorder$requireCond = b("cr:1701527");
	f.mwChatComposerAudioRecorder = d;
	f.make = c
}), null);