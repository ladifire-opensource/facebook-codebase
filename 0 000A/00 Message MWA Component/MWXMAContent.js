__d("MWXMAContent.bs", ["CometImageCover.react", "CometLink.react", "CometObjectFitContainer.react", "CometPressable.react", "CometTooltip.react", "MWChatPollFacepile.bs", "MWChatVideoPlayer.react", "MWTheme.bs", "MWUIPostbackCtaHandler.bs", "MWUISendCometPostback.bs", "MWXMAThirdParty.bs", "MessengerSurfaceType.bs", "ODS", "TetraButton.react", "TetraText.react", "TetraTextPairing.react", "TetraishSkittleIcon.react", "WorkGalahadMWChatTabContext.bs", "bs_belt_Option", "bs_curry", "bs_int64", "gkx", "qex", "react", "recoverableViolation", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h, i = g || b("react");

	function j(a) {
		var c = b("bs_curry")._1(b("MWUIPostbackCtaHandler.bs").usePostbackCtaHandler, void 0),
			d = b("bs_curry")._1(b("MWUISendCometPostback.bs").useSendCometPostback, void 0);
		return i.useCallback(function(e) {
			switch (e.TAG | 0) {
				case 0:
					b("recoverableViolation")("Link Call To Action passed to button", "messenger_privacy_web");
					return;
				case 1:
					return b("bs_curry")._2(c, e._1, e._0);
				case 2:
					b("ODS").bumpEntityKey(3185, "mwchat_send", "postback");
					return b("bs_curry")._2(d, e._0, e._1);
				case 3:
					return a({
						NAME: "ShowWebViewDialog",
						VAL: e._0
					});
				case 4:
					return b("MWXMAThirdParty.bs").dispatchAction(e._0, a);
				case 5:
					return a({
						NAME: "ShowPollDetails",
						VAL: [e._0, e._1]
					})
			}
		}, [])
	}
	var k = {
		appIcon: {
			width: "hhz5lgdu",
			height: "gl3lb2sf",
			borderTopStartRadius: "s45kfl79",
			borderTopEndRadius: "emlxlaya",
			borderBottomEndRadius: "bkmhp75w",
			borderBottomStartRadius: "spb7xbtv"
		},
		appAttr: {
			paddingTop: "ecm0bbzt",
			paddingEnd: "p8fzw8mz",
			paddingBottom: "e5nlhep0",
			paddingStart: "pcp91wgn",
			display: "j83agx80",
			alignItems: "bp9cbjyn",
			borderBottomStartRadius: "qmr60zad",
			borderBottomEndRadius: "inkptoze",
			lineHeight: "dfwzkoeu"
		},
		appText: {
			fontSize: "e9vueds3",
			marginStart: "ggphbty4",
			color: "oo9gr5id",
			wordBreak: "qv66sw1b"
		}
	};

	function l(a) {
		a = a.attribution;
		if (a !== void 0) return i.jsxs("div", {
			children: [i.jsx("img", {
				className: (h || (h = b("stylex")))(k.appIcon),
				src: a.icon
			}), i.jsx("span", {
				children: a.name,
				className: h(k.appText)
			})],
			className: h(k.appAttr)
		});
		else return null
	}
	c = {
		radius: 18,
		styles: k,
		make: l
	};
	var m = {
		photo: {
			width: "k4urcfbm",
			display: "j83agx80"
		},
		notExpanded: {
			height: "ajpb0j6l"
		},
		notExpandedWorkplace: {
			height: "f0whzcxx"
		}
	};

	function n(a) {
		var c = a.preview;
		a = a.attribution;
		var d = i.useContext(b("WorkGalahadMWChatTabContext.bs").context);
		d = d.surface === b("MessengerSurfaceType.bs").workChat;
		if (c === void 0) return null;
		if (c.TAG) {
			var e = c._3,
				f = c._2,
				g = f.width;
			f = f.height;
			var j = g / f,
				k = f > 250 && j < .8;
			return i.jsxs(b("CometObjectFitContainer.react"), {
				contentAspectRatio: k ? .8 : j,
				children: [i.jsx(b("MWChatVideoPlayer.react"), {
					fbid: c._1,
					sdSrc: c._0,
					originalHeight: f,
					originalWidth: g,
					hideExpandButton: !1,
					controls: e ? "none" : "mwchat"
				}), e ? i.jsx(l, {
					attribution: a
				}) : null]
			})
		}
		k = c._1.expand;
		return i.jsx("div", {
			children: i.jsx(b("CometImageCover.react"), {
				alt: "XMA Header Image",
				src: c._0
			}),
			className: (h || (h = b("stylex")))(m.photo, k ? !1 : m.notExpanded, k || !d ? !1 : m.notExpandedWorkplace)
		})
	}
	d = {
		styles: m,
		make: n
	};
	var o = {
		root: {
			width: "k4urcfbm",
			maxWidth: "d2edcug0",
			whiteSpace: "ii04i59q"
		},
		hscroll: {
			paddingStart: "pcp91wgn",
			paddingEnd: "p8fzw8mz"
		},
		withIcon: {
			paddingTop: "linoseic",
			paddingBottom: "pby63qed"
		},
		description: {
			paddingTop: "jktsbyx5"
		}
	};

	function p(a) {
		var c = a.content;
		a = a.isHscroll;
		var d = b("bs_belt_Option").getWithDefault(c.title, ""),
			e = b("bs_belt_Option").getWithDefault(c.description, ""),
			f;
		if (d === "") {
			if (e === "") return null;
			f = 1
		} else f = 1;
		if (f === 1) {
			var g;
			if (d !== "") {
				f = b("qex")._("1586110");
				var j = 0;
				f == null || f !== 13 ? j = 2 : g = i.jsx(b("TetraText.react"), {
					type: "bodyLink4",
					children: d
				});
				j === 2 && (g = i.jsx(b("TetraTextPairing.react"), {
					headline: d,
					level: 4,
					headlineLineLimit: 3
				}))
			} else g = null;
			if (e !== "") {
				f = b("qex")._("1586110");
				var k;
				j = 0;
				f == null || f !== 13 ? j = 2 : k = i.jsx(b("TetraText.react"), {
					type: "meta4",
					children: e
				});
				j === 2 && (k = i.jsx(b("TetraTextPairing.react"), {
					body: e,
					level: 4,
					bodyLineLimit: 3,
					bodyColor: "secondary"
				}));
				d = i.jsx("div", {
					children: k,
					className: (h || (h = b("stylex")))(o.description)
				})
			} else d = null;
			return i.jsxs("div", {
				children: [g, d],
				className: (h || (h = b("stylex")))(o.root, c.icon === void 0 ? a ? o.hscroll : !1 : o.withIcon)
			})
		}
	}
	e = {
		styles: o,
		make: p
	};
	var q = {
		root: {
			marginEnd: "tvfksri0",
			display: "j83agx80",
			alignItems: "bp9cbjyn",
			height: "datstx6m"
		}
	};

	function r(a) {
		a = a.icon;
		if (a === void 0) return null;
		if (a.TAG) return i.jsx("div", {
			children: i.jsx(b("CometImageCover.react"), {
				alt: "Icon for this message",
				src: a._0,
				style: {
					height: "36px",
					width: "36px",
					borderRadius: "50%"
				}
			}),
			className: (h || (h = b("stylex")))(q.root)
		});
		a = a._0;
		return i.jsx("div", {
			children: i.jsx(b("TetraishSkittleIcon.react"), {
				color: a.color,
				size: 36,
				icon: a.icon
			}),
			className: (h || (h = b("stylex")))(q.root)
		})
	}
	var s = {
			styles: q,
			make: r
		},
		t = {
			button: {
				flexBasis: "lrurydbf",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
				paddingTop: "ecm0bbzt",
				paddingEnd: "ph5uu5jm",
				paddingBottom: "e5nlhep0",
				paddingStart: "b3onmgus"
			}
		};

	function u(a) {
		var c = a.button,
			d = a.messageId,
			e = a.dispatch;
		i.useEffect(function() {
			e({
				NAME: "CtaButtonRendered",
				VAL: c.action
			})
		}, []);
		var f = function(a) {
			return e({
				NAME: "CtaClicked",
				VAL: [d, c.title, c.action, 2]
			})
		};
		a = c.title;
		var g = j(e),
			k = b("gkx")("1845815"),
			l = c.action;
		if (l.TAG === 5 && !k) return null;
		var m = c.action;
		l = m.TAG ? i.jsx(b("CometTooltip.react"), {
			tooltip: a,
			children: i.jsx(b("TetraButton.react"), {
				label: a,
				type: "secondary",
				onPress: function(a) {
					f(void 0);
					return b("bs_curry")._1(g, m)
				}
			})
		}) : i.jsx(b("CometTooltip.react"), {
			tooltip: a,
			children: i.jsx(b("TetraButton.react"), {
				label: a,
				type: "secondary",
				onPress: f,
				linkProps: {
					target: m._1,
					url: m._0
				}
			})
		});
		return i.jsx("div", {
			children: l,
			className: (h || (h = b("stylex")))(t.button)
		})
	}
	var v = {
			styles: t,
			make: u
		},
		w = {
			link: {
				":hover": {
					textDecoration: "p8dawk7l"
				}
			}
		};

	function x(a) {
		var c = a.messageId,
			d = a.content,
			e = a.dispatch,
			f = a.disableDefaultAction;
		a = a.children;
		var g = j(e),
			h = d.defaultAction;
		if (f) return a;
		if (h === void 0) return a;
		var k = h._0;
		if (k.TAG) {
			var l = function(a) {
				return e({
					NAME: "CtaClicked",
					VAL: [c, "", k, 1]
				})
			};
			return i.jsx(b("CometPressable.react"), {
				"aria-label": b("bs_belt_Option").getWithDefault(d.title, ""),
				onPress: function(a) {
					l(void 0);
					return b("bs_curry")._1(g, k)
				},
				children: a
			})
		}
		var m = k._2,
			n = k._1,
			o = k._0;
		return i.jsx(b("CometLink.react"), {
			href: o,
			target: n,
			children: a,
			onClick: function(a) {
				return e({
					NAME: "CtaClicked",
					VAL: [c, "", {
						TAG: 0,
						_0: o,
						_1: n,
						_2: m
					}, 1]
				})
			},
			xstyle: [w.link]
		})
	}
	var y = {
			styles: w,
			make: x
		},
		z = {
			root: {
				flexGrow: "buofh1pr",
				display: "j83agx80",
				flexDirection: "btwxx1t3",
				marginEnd: "cgat1ltu",
				justifyContent: "taijpn5t"
			}
		};

	function A(a) {
		a = a.listItemsDescriptionText;
		return i.jsx("div", {
			children: i.jsx(b("TetraTextPairing.react"), {
				headline: a,
				level: 4,
				headlineLineLimit: 3
			}),
			className: (h || (h = b("stylex")))(z.root)
		})
	}
	var B = {
			styles: z,
			make: A
		},
		C = {
			item: {
				marginTop: "n1l5q3vz",
				paddingTop: "pybr56ya",
				paddingBottom: "f10w8fjw",
				borderTop: "kzizifcz",
				borderBottom: "ccq6eem2"
			},
			titleText: {
				marginTop: "aov4n071",
				marginStart: "kkf49tns"
			}
		},
		D = {
			item: {
				marginTop: "n1l5q3vz"
			},
			header: {
				display: "j83agx80",
				justifyContent: "i1fnvgqd"
			},
			progressBar: {
				backgroundColor: "g6srhlxm",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				height: "t6na6p9t",
				marginTop: "aov4n071",
				marginBottom: "n851cfcs"
			},
			progressBarInner: {
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				height: "t6na6p9t"
			},
			facepile: {
				marginStart: "h676nmdw"
			}
		};

	function E(a) {
		a = a.listItems;
		var c = b("MWTheme.bs").useTheme(void 0),
			d = b("MWTheme.bs").middle(c);
		return i.jsx("ul", {
			children: a.map(function(a, c) {
				var e = a.progressBarFilledPercentage;
				if (e !== void 0) {
					var f = a.titleText;
					return i.jsxs("li", {
						children: [i.jsxs("div", {
							children: [f !== void 0 ? i.jsx(b("TetraText.react"), {
								type: "headline4",
								numberOfLines: 1,
								children: f
							}) : null, i.jsx("div", {
								children: i.jsx(b("MWChatPollFacepile.bs").make, {
									contacts: a.contacts.map(function(a) {
										return a.url
									}),
									size: "small",
									gap: "negative",
									direction: "reversed"
								}),
								className: (h || (h = b("stylex")))(D.facepile)
							})],
							className: h(D.header)
						}), i.jsx("div", {
							children: i.jsx("div", {
								className: h(D.progressBarInner),
								style: {
									backgroundColor: d,
									width: b("bs_int64").to_string(e) + "%"
								}
							}),
							className: h(D.progressBar)
						})],
						className: h(D.item)
					}, String(c))
				}
				f = a.titleText;
				return i.jsx("li", {
					children: i.jsxs("div", {
						children: [i.jsx(b("MWChatPollFacepile.bs").make, {
							contacts: a.contacts.map(function(a) {
								return a.url
							}),
							size: "large",
							limit: 9,
							contactWithBorder: !1,
							overflowStyle: "overlayLastPhoto"
						}), f !== void 0 ? i.jsx("div", {
							children: i.jsx(b("TetraText.react"), {
								color: "secondary",
								type: "body4",
								numberOfLines: 2,
								children: f
							}),
							className: (h || (h = b("stylex")))(C.titleText)
						}) : null]
					}),
					className: (h || (h = b("stylex")))(C.item)
				}, String(c))
			})
		})
	}
	var F = {
			stylesDefault: C,
			stylesWithProgress: D,
			make: E
		},
		G = {
			root: {
				marginBottom: "n851cfcs"
			}
		};

	function H(a) {
		a = a.listItemsSecondaryDescriptionText;
		return i.jsx("div", {
			children: i.jsx(b("TetraTextPairing.react"), {
				body: a,
				level: 4,
				bodyLineLimit: 3,
				bodyColor: "secondary"
			}),
			className: (h || (h = b("stylex")))(G.root)
		})
	}
	var I = {
			styles: G,
			make: H
		},
		J = {
			root: {
				display: "j83agx80",
				justifyContent: "taijpn5t",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr",
				minHeight: "cehpxlet",
				marginTop: "n1l5q3vz",
				marginEnd: "tvfksri0",
				marginBottom: "n851cfcs",
				marginStart: "ozuftl9m"
			},
			description: {
				flexGrow: "buofh1pr",
				display: "j83agx80",
				flexDirection: "btwxx1t3",
				marginEnd: "cgat1ltu"
			},
			hasFavicon: {
				paddingStart: "a8nywdso",
				paddingEnd: "rz4wbd8a"
			},
			buttonsWrapper: {
				marginTop: "n1l5q3vz",
				justifySelf: "g8xlbnay"
			},
			buttonsOnly: {
				marginTop: "kvgmc6g5"
			}
		};

	function K(a) {
		var c = a.content,
			d = a.dispatch,
			e = a.messageId,
			f = a.isHscroll,
			g = a.disableDefaultAction;
		a = a.hasActionTrigger;
		var j = c.title,
			k = c.description,
			l = c.icon,
			m = c.action,
			n = 0,
			o = 0,
			q, s;
		l !== void 0 || m !== void 0 && m._0.length !== 0 ? n = 1 : (q = j, s = k, o = 2);
		if (o === 2) {
			if (b("bs_belt_Option").getWithDefault(q, "") === "" && b("bs_belt_Option").getWithDefault(s, "") === "") return null;
			n = 1
		}
		if (n === 1) {
			if (j !== void 0 || k !== void 0 || l !== void 0) o = 2;
			else {
				if (m === void 0) return null;
				if (m._0.length === 0) return null;
				o = 2
			}
			if (o === 2) {
				n = b("bs_belt_Option").getWithDefault(c.title, "") === "" && b("bs_belt_Option").getWithDefault(c.description, "") === "" && c.icon === void 0;
				j = i.jsxs("div", {
					children: [i.jsx(r, {
						icon: c.icon
					}), i.jsx(p, {
						content: c,
						isHscroll: f
					})],
					className: (h || (h = b("stylex")))(J.description, c.icon === void 0 ? !1 : J.hasFavicon)
				});
				k = c.listItemsDescriptionText;
				l = c.listItems;
				o = c.listItemsSecondaryDescriptionText;
				if (m !== void 0) {
					f = m._0;
					m = f.length > 0 ? i.jsx("div", {
						children: f.map(function(a, b) {
							return i.jsx(u, {
								button: a,
								messageId: e,
								dispatch: d
							}, b.toString())
						}),
						className: (h || (h = b("stylex")))(J.buttonsWrapper, n ? J.buttonsOnly : !1)
					}) : null
				} else m = null;
				return i.jsxs("div", {
					children: [a ? j : i.jsx(x, {
						messageId: e,
						content: c,
						dispatch: d,
						disableDefaultAction: g,
						children: j
					}), k !== void 0 ? i.jsx(A, {
						listItemsDescriptionText: k
					}) : null, l.length !== 0 ? i.jsx(E, {
						listItems: l
					}) : null, o !== void 0 ? i.jsx(H, {
						listItemsSecondaryDescriptionText: o
					}) : null, m],
					className: h(J.root)
				})
			}
		}
	}
	var L = {
			styles: J,
			make: K
		},
		M = {
			root: {
				marginEnd: "tvfksri0",
				display: "j83agx80",
				alignItems: "bp9cbjyn",
				height: "datstx6m"
			}
		};

	function N(a) {
		a = a.icon;
		if (a === void 0) return null;
		if (a.TAG) return i.jsx("div", {
			children: i.jsx(b("CometImageCover.react"), {
				alt: "Icon for this message's header",
				src: a._0,
				style: {
					height: "32px",
					width: "32px",
					borderRadius: "50%"
				}
			}),
			className: (h || (h = b("stylex")))(M.root)
		});
		a = a._0;
		return i.jsx("div", {
			children: i.jsx(b("TetraishSkittleIcon.react"), {
				color: a.color,
				size: 36,
				icon: a.icon
			}),
			className: (h || (h = b("stylex")))(M.root)
		})
	}
	var O = {
			styles: M,
			make: N
		},
		P = {
			root: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				marginTop: "n1l5q3vz",
				marginEnd: "tvfksri0",
				marginBottom: "n851cfcs",
				marginStart: "ozuftl9m"
			}
		};

	function Q(a) {
		a = a.content;
		var c = a.headerTitle;
		if (c !== void 0) return i.jsxs("div", {
			children: [i.jsx(N, {
				icon: a.headerIcon
			}), i.jsx(b("TetraText.react"), {
				type: "bodyLink3",
				children: c
			})],
			className: (h || (h = b("stylex")))(P.root)
		});
		else return null
	}
	var R = {
			styles: P,
			make: Q
		},
		S = {
			root: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				height: "datstx6m"
			},
			withBorder: {
				borderTop: "opwvks06",
				borderEnd: "hop1g133",
				borderBottom: "linmgsc8",
				borderStart: "t63ysoy8"
			}
		};

	function T(a) {
		return b("bs_belt_Option").mapWithDefault(a.preview, !1, function(a) {
			if (a.TAG) return a._3;
			else return !1
		})
	}

	function a(a) {
		var c = a.content,
			d = a.messageId,
			e = a.dispatch,
			f = a.attribution,
			g = a.isHscroll,
			j = a.disableDefaultAction;
		a = a.disableLinks;
		a = a !== void 0 ? a : !1;
		var k = T(c) && b("bs_belt_Option").isSome(f);
		k = (h || (h = b("stylex")))(S.root, k ? S.withBorder : !1);
		var l = c.action;
		if (a) return i.jsx("div", {
			children: i.jsx(Q, {
				content: c
			}),
			className: k
		});
		return l !== void 0 && l._0.length !== 0 ? i.jsxs("div", {
			children: [i.jsx(Q, {
				content: c
			}), i.jsx(x, {
				messageId: d,
				content: c,
				dispatch: e,
				disableDefaultAction: j,
				children: i.jsx(n, {
					preview: c.preview,
					attribution: f
				})
			}), i.jsx(K, {
				content: c,
				dispatch: e,
				messageId: d,
				isHscroll: g,
				disableDefaultAction: j,
				hasActionTrigger: b("bs_belt_Option").isSome(c.preview)
			})],
			className: k
		}) : i.jsx(x, {
			messageId: d,
			content: c,
			dispatch: e,
			disableDefaultAction: j,
			children: i.jsxs("div", {
				children: [i.jsx(Q, {
					content: c
				}), i.jsx(n, {
					preview: c.preview,
					attribution: f
				}), i.jsx(K, {
					content: c,
					dispatch: e,
					messageId: d,
					isHscroll: g,
					disableDefaultAction: j,
					hasActionTrigger: !0
				})],
				className: k
			})
		})
	}
	a = a;
	f.useDispatchAction = j;
	f.Attribution = c;
	f.Preview = d;
	f.MainText = e;
	f.Icon = s;
	f.CtaButton = v;
	f.DefaultActionTrigger = y;
	f.ListItemsDescriptionText = B;
	f.ListItems = F;
	f.ListItemsSecondaryDescriptionText = I;
	f.Body = L;
	f.HeaderIcon = O;
	f.Header = R;
	f.styles = S;
	f.getShouldAutoplay = T;
	f.make = a
}), null);