__d("MWXMAContent.bs", ["bs_curry", "bs_int64", "React", "gkx", "MWTheme.bs", "qex", "stylex", "bs_belt_Option", "CometLink.react", "MWXMAThirdParty.bs", "TetraText.react", "TetraButton.react", "CometTooltip.react", "MWChatPollFacepile.bs", "CometPressable.react", "MessengerSurfaceType.bs", "recoverableViolation", "CometImageCover.react", "MWUIPostbackCtaHandler.bs", "TetraTextPairing.react", "MWChatVideoPlayer.react", "TetraishSkittleIcon.react", "WorkGalahadMWChatTabContext.bs", "CometObjectFitContainer.react"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React");

	function i(a) {
		var c = b("bs_curry")._1(b("MWUIPostbackCtaHandler.bs").usePostbackCtaHandler, void 0);
		return h.useCallback(function(d) {
			switch (d.TAG | 0) {
				case 0:
					b("recoverableViolation")("Link Call To Action passed to button", "messenger_privacy_web");
					return;
				case 1:
					return b("bs_curry")._2(c, d._1, d._0);
				case 2:
					return a({
						NAME: "SendCometPostback",
						VAL: [d._0, d._1]
					});
				case 3:
					return a({
						NAME: "ShowWebViewDialog",
						VAL: d._0
					});
				case 4:
					return b("MWXMAThirdParty.bs").dispatchAction(d._0, a);
				case 5:
					return a({
						NAME: "ShowPollDetails",
						VAL: [d._0, d._1]
					})
			}
		}, [])
	}
	var j = {
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

	function k(a) {
		a = a.attribution;
		if (a !== void 0) return h.jsxs("div", {
			children: [h.jsx("img", {
				className: (g || (g = b("stylex")))(j.appIcon),
				src: a.icon
			}), h.jsx("span", {
				children: a.name,
				className: g(j.appText)
			})],
			className: g(j.appAttr)
		});
		else return null
	}
	c = {
		radius: 18,
		styles: j,
		make: k
	};
	var l = {
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

	function m(a) {
		var c = a.preview;
		a = a.attribution;
		var d = h.useContext(b("WorkGalahadMWChatTabContext.bs").context);
		d = d.surface === b("MessengerSurfaceType.bs").workChat;
		if (c === void 0) return null;
		if (c.TAG) {
			var e = c._3,
				f = c._2,
				i = f.width;
			f = f.height;
			var j = i / f,
				m = f > 250 && j < .8;
			return h.jsxs(b("CometObjectFitContainer.react"), {
				contentAspectRatio: m ? .8 : j,
				children: [h.jsx(b("MWChatVideoPlayer.react"), {
					fbid: c._1,
					sdSrc: c._0,
					originalHeight: f,
					originalWidth: i,
					hideExpandButton: !1,
					controls: e ? "none" : "default"
				}), e ? h.jsx(k, {
					attribution: a
				}) : null]
			})
		}
		m = c._1.expand;
		return h.jsx("div", {
			children: h.jsx(b("CometImageCover.react"), {
				alt: "XMA Header Image",
				src: c._0
			}),
			className: (g || (g = b("stylex")))(l.photo, m ? !1 : l.notExpanded, m || !d ? !1 : l.notExpandedWorkplace)
		})
	}
	d = {
		styles: l,
		make: m
	};
	var n = {
		root: {
			width: "k4urcfbm",
			maxWidth: "d2edcug0",
			whiteSpace: "ii04i59q"
		},
		withIcon: {
			paddingTop: "linoseic",
			paddingBottom: "pby63qed"
		},
		description: {
			paddingTop: "jktsbyx5"
		}
	};

	function o(a) {
		a = a.content;
		var c = b("bs_belt_Option").getWithDefault(a.title, ""),
			d = b("bs_belt_Option").getWithDefault(a.description, ""),
			e;
		if (c === "") {
			if (d === "") return null;
			e = 1
		} else e = 1;
		if (e === 1) {
			var f;
			if (c !== "") {
				e = b("qex")._("1586110");
				var i = 0;
				e == null || e !== 13 ? i = 2 : f = h.jsx(b("TetraText.react"), {
					type: "bodyLink4",
					children: c
				});
				i === 2 && (f = h.jsx(b("TetraTextPairing.react"), {
					headline: c,
					level: 4,
					headlineLineLimit: 3
				}))
			} else f = null;
			if (d !== "") {
				e = b("qex")._("1586110");
				var j;
				i = 0;
				e == null || e !== 13 ? i = 2 : j = h.jsx(b("TetraText.react"), {
					type: "meta4",
					children: d
				});
				i === 2 && (j = h.jsx(b("TetraTextPairing.react"), {
					body: d,
					level: 4,
					bodyLineLimit: 3,
					bodyColor: "secondary"
				}));
				c = h.jsx("div", {
					children: j,
					className: (g || (g = b("stylex")))(n.description)
				})
			} else c = null;
			return h.jsxs("div", {
				children: [f, c],
				className: (g || (g = b("stylex")))(n.root, a.icon === void 0 ? !1 : n.withIcon)
			})
		}
	}
	e = {
		styles: n,
		make: o
	};
	var p = {
		root: {
			marginEnd: "tvfksri0",
			display: "j83agx80",
			alignItems: "bp9cbjyn",
			height: "datstx6m"
		}
	};

	function q(a) {
		a = a.icon;
		if (a === void 0) return null;
		if (a.TAG) return h.jsx("div", {
			children: h.jsx(b("CometImageCover.react"), {
				alt: "Icon for this message",
				src: a._0,
				style: {
					height: "36px",
					width: "36px",
					borderRadius: "50%"
				}
			}),
			className: (g || (g = b("stylex")))(p.root)
		});
		a = a._0;
		return h.jsx("div", {
			children: h.jsx(b("TetraishSkittleIcon.react"), {
				color: a.color,
				size: 36,
				icon: a.icon
			}),
			className: (g || (g = b("stylex")))(p.root)
		})
	}
	var r = {
			styles: p,
			make: q
		},
		s = {
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

	function t(a) {
		var c = a.button,
			d = a.messageId,
			e = a.dispatch;
		h.useEffect(function() {
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
		var j = i(e),
			k = b("gkx")("1845815"),
			l = c.action;
		if (l.TAG === 5 && !k) return null;
		var m = c.action;
		l = m.TAG ? h.jsx(b("CometTooltip.react"), {
			tooltip: a,
			children: h.jsx(b("TetraButton.react"), {
				label: a,
				type: "secondary",
				onPress: function(a) {
					f(void 0);
					return b("bs_curry")._1(j, m)
				}
			})
		}) : h.jsx(b("CometTooltip.react"), {
			tooltip: a,
			children: h.jsx(b("TetraButton.react"), {
				label: a,
				type: "secondary",
				onPress: f,
				linkProps: {
					target: m._1,
					url: m._0
				}
			})
		});
		return h.jsx("div", {
			children: l,
			className: (g || (g = b("stylex")))(s.button)
		})
	}
	var u = {
			styles: s,
			make: t
		},
		v = {
			link: {
				":hover": {
					textDecoration: "p8dawk7l"
				}
			}
		};

	function w(a) {
		var c = a.messageId,
			d = a.content,
			e = a.dispatch;
		a = a.children;
		var f = i(e),
			g = d.defaultAction;
		if (g === void 0) return a;
		var j = g._0;
		if (j.TAG) {
			var k = function(a) {
				return e({
					NAME: "CtaClicked",
					VAL: [c, "", j, 1]
				})
			};
			return h.jsx(b("CometPressable.react"), {
				"aria-label": b("bs_belt_Option").getWithDefault(d.title, ""),
				onPress: function(a) {
					k(void 0);
					return b("bs_curry")._1(f, j)
				},
				children: a
			})
		}
		var l = j._2,
			m = j._1,
			n = j._0;
		return h.jsx(b("CometLink.react"), {
			href: n,
			target: m,
			children: a,
			onClick: function(a) {
				return e({
					NAME: "CtaClicked",
					VAL: [c, "", {
						TAG: 0,
						_0: n,
						_1: m,
						_2: l
					}, 1]
				})
			},
			xstyle: [v.link]
		})
	}
	var x = {
			styles: v,
			make: w
		},
		y = {
			root: {
				flexGrow: "buofh1pr",
				display: "j83agx80",
				flexDirection: "btwxx1t3",
				marginEnd: "cgat1ltu",
				justifyContent: "taijpn5t"
			}
		};

	function z(a) {
		a = a.listItemsDescriptionText;
		return h.jsx("div", {
			children: h.jsx(b("TetraTextPairing.react"), {
				headline: a,
				level: 4,
				headlineLineLimit: 3
			}),
			className: (g || (g = b("stylex")))(y.root)
		})
	}
	var A = {
			styles: y,
			make: z
		},
		B = {
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
		C = {
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

	function D(a) {
		a = a.listItems;
		var c = b("MWTheme.bs").useTheme(void 0),
			d = b("MWTheme.bs").middle(c);
		return h.jsx("ul", {
			children: a.map(function(a, c) {
				var e = a.progressBarFilledPercentage;
				if (e !== void 0) {
					var f = a.titleText;
					return h.jsxs("li", {
						children: [h.jsxs("div", {
							children: [f !== void 0 ? h.jsx(b("TetraText.react"), {
								type: "headline4",
								numberOfLines: 1,
								children: f
							}) : null, h.jsx("div", {
								children: h.jsx(b("MWChatPollFacepile.bs").make, {
									contacts: a.contacts.map(function(a) {
										return a.url
									}),
									size: "small",
									gap: "negative",
									direction: "reversed"
								}),
								className: (g || (g = b("stylex")))(C.facepile)
							})],
							className: g(C.header)
						}), h.jsx("div", {
							children: h.jsx("div", {
								className: g(C.progressBarInner),
								style: {
									backgroundColor: d,
									width: b("bs_int64").to_string(e) + "%"
								}
							}),
							className: g(C.progressBar)
						})],
						className: g(C.item)
					}, String(c))
				}
				f = a.titleText;
				return h.jsx("li", {
					children: h.jsxs("div", {
						children: [h.jsx(b("MWChatPollFacepile.bs").make, {
							contacts: a.contacts.map(function(a) {
								return a.url
							}),
							size: "large",
							limit: 9,
							contactWithBorder: !1,
							overflowStyle: "overlayLastPhoto"
						}), f !== void 0 ? h.jsx("div", {
							children: h.jsx(b("TetraText.react"), {
								color: "secondary",
								type: "body4",
								numberOfLines: 2,
								children: f
							}),
							className: (g || (g = b("stylex")))(B.titleText)
						}) : null]
					}),
					className: (g || (g = b("stylex")))(B.item)
				}, String(c))
			})
		})
	}
	var E = {
			stylesDefault: B,
			stylesWithProgress: C,
			make: D
		},
		F = {
			root: {
				marginBottom: "n851cfcs"
			}
		};

	function G(a) {
		a = a.listItemsSecondaryDescriptionText;
		return h.jsx("div", {
			children: h.jsx(b("TetraTextPairing.react"), {
				body: a,
				level: 4,
				bodyLineLimit: 3,
				bodyColor: "secondary"
			}),
			className: (g || (g = b("stylex")))(F.root)
		})
	}
	var H = {
			styles: F,
			make: G
		},
		I = {
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

	function J(a) {
		var c = a.content,
			d = a.dispatch,
			e = a.messageId;
		a = c.title;
		var f = c.description,
			i = c.icon,
			j = c.action,
			k = 0,
			l = 0,
			m, n;
		i !== void 0 || j !== void 0 && j._0.length !== 0 ? k = 1 : (m = a, n = f, l = 2);
		if (l === 2) {
			if (b("bs_belt_Option").getWithDefault(m, "") === "" && b("bs_belt_Option").getWithDefault(n, "") === "") return null;
			k = 1
		}
		if (k === 1) {
			if (a !== void 0 || f !== void 0 || i !== void 0) l = 2;
			else {
				if (j === void 0) return null;
				if (j._0.length === 0) return null;
				l = 2
			}
			if (l === 2) {
				k = b("bs_belt_Option").getWithDefault(c.title, "") === "" && b("bs_belt_Option").getWithDefault(c.description, "") === "" && c.icon === void 0;
				a = h.jsxs("div", {
					children: [h.jsx(q, {
						icon: c.icon
					}), h.jsx(o, {
						content: c
					})],
					className: (g || (g = b("stylex")))(I.description, c.icon === void 0 ? !1 : I.hasFavicon)
				});
				f = c.preview;
				i = c.listItemsDescriptionText;
				l = c.listItems;
				var p = c.listItemsSecondaryDescriptionText;
				if (j !== void 0) {
					j = j._0;
					j = j.length > 0 ? h.jsx("div", {
						children: j.map(function(a, b) {
							return h.jsx(t, {
								button: a,
								messageId: e,
								dispatch: d
							}, b.toString())
						}),
						className: (g || (g = b("stylex")))(I.buttonsWrapper, k ? I.buttonsOnly : !1)
					}) : null
				} else j = null;
				return h.jsxs("div", {
					children: [f !== void 0 ? a : h.jsx(w, {
						messageId: e,
						content: c,
						dispatch: d,
						children: a
					}), i !== void 0 ? h.jsx(z, {
						listItemsDescriptionText: i
					}) : null, l.length !== 0 ? h.jsx(D, {
						listItems: l
					}) : null, p !== void 0 ? h.jsx(G, {
						listItemsSecondaryDescriptionText: p
					}) : null, j],
					className: g(I.root)
				})
			}
		}
	}
	var K = {
			styles: I,
			make: J
		},
		L = {
			root: {
				marginEnd: "tvfksri0",
				display: "j83agx80",
				alignItems: "bp9cbjyn",
				height: "datstx6m"
			}
		};

	function M(a) {
		a = a.icon;
		if (a === void 0) return null;
		if (a.TAG) return h.jsx("div", {
			children: h.jsx(b("CometImageCover.react"), {
				alt: "Icon for this message's header",
				src: a._0,
				style: {
					height: "32px",
					width: "32px",
					borderRadius: "50%"
				}
			}),
			className: (g || (g = b("stylex")))(L.root)
		});
		a = a._0;
		return h.jsx("div", {
			children: h.jsx(b("TetraishSkittleIcon.react"), {
				color: a.color,
				size: 36,
				icon: a.icon
			}),
			className: (g || (g = b("stylex")))(L.root)
		})
	}
	var N = {
			styles: L,
			make: M
		},
		O = {
			root: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				marginTop: "n1l5q3vz",
				marginEnd: "tvfksri0",
				marginBottom: "n851cfcs",
				marginStart: "ozuftl9m"
			}
		};

	function P(a) {
		a = a.content;
		var c = a.headerTitle;
		if (c !== void 0) return h.jsxs("div", {
			children: [h.jsx(M, {
				icon: a.headerIcon
			}), h.jsx(b("TetraText.react"), {
				type: "bodyLink3",
				children: c
			})],
			className: (g || (g = b("stylex")))(O.root)
		});
		else return null
	}
	var Q = {
			styles: O,
			make: P
		},
		R = {
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

	function S(a) {
		return b("bs_belt_Option").mapWithDefault(a.preview, !1, function(a) {
			if (a.TAG) return a._3;
			else return !1
		})
	}

	function a(a) {
		var c = a.content,
			d = a.messageId,
			e = a.dispatch;
		a = a.attribution;
		var f = S(c) && b("bs_belt_Option").isSome(a);
		f = (g || (g = b("stylex")))(R.root, f ? R.withBorder : !1);
		var i = c.action;
		return i !== void 0 && i._0.length !== 0 ? h.jsxs("div", {
			children: [h.jsx(P, {
				content: c
			}), h.jsx(w, {
				messageId: d,
				content: c,
				dispatch: e,
				children: h.jsx(m, {
					preview: c.preview,
					attribution: a
				})
			}), h.jsx(J, {
				content: c,
				dispatch: e,
				messageId: d
			})],
			className: f
		}) : h.jsx(w, {
			messageId: d,
			content: c,
			dispatch: e,
			children: h.jsxs("div", {
				children: [h.jsx(P, {
					content: c
				}), h.jsx(m, {
					preview: c.preview,
					attribution: a
				}), h.jsx(J, {
					content: c,
					dispatch: e,
					messageId: d
				})],
				className: f
			})
		})
	}
	a = a;
	f.useDispatchAction = i;
	f.Attribution = c;
	f.Preview = d;
	f.MainText = e;
	f.Icon = r;
	f.CtaButton = u;
	f.DefaultActionTrigger = x;
	f.ListItemsDescriptionText = A;
	f.ListItems = E;
	f.ListItemsSecondaryDescriptionText = H;
	f.Body = K;
	f.HeaderIcon = N;
	f.Header = Q;
	f.styles = R;
	f.getShouldAutoplay = S;
	f.make = a
}), null);