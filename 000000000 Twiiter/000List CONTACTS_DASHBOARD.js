(window.webpackJsonp = window.webpackJsonp || []).push([
	[176], {
		"+GrA": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "MutedAccountsScreen", (function() {
				return ce
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("v6aA"),
				i = (a("WNMA"), a("zh9S")),
				c = a("1YZw"),
				l = (a("IAdD"), a("WpDa")),
				d = a("ZNT5"),
				h = a("G6rE");
			var u = a("oEGd"),
				m = a("hqKg"),
				p = a("8UdT"),
				g = a("G0qc");
			const b = (e, t) => t.match.params.filter,
				f = Object(m.createSelector)(b, h.e.selectAll, (e, t) => ((e, t) => a => a.filter(a => {
					if (a.type !== p.b.User) return !1; {
						const n = a.content.id,
							r = e[n];
						return r && (t === g.a.Following && r.following || t === g.a.Not_Following && !r.following || t === g.a.All)
					}
				}))(t, e)),
				E = Object(m.createSelector)(f, b, (e, t) => ({
					filter: e,
					filterName: t
				})),
				_ = {
					addToast: c.b,
					cleanupMuteList: e => (t, a) => {
						const n = a();
						t(e.selectEntries(n).filter(e => {
							const t = e.content.id,
								a = h.e.select(n, t);
							return a && !a.muting
						}).map(t => e.removeEntry(t.entryId)))
					},
					googleAnalyticsPageView: i.a,
					scribePageImpression: i.d
				};
			var S = Object(u.g)(E, _),
				y = a("wrlS"),
				w = a("PnFR"),
				C = (a("JtPf"), a("/yvb")),
				T = a("rxPX"),
				v = a("0KEI"),
				I = a("0pUJ");
			const O = (e, t) => h.e.select(e, t.userId);
			var A = Object(T.a)().propsFromState(() => ({
					user: O
				})).propsFromActions(() => ({
					addToast: c.b,
					createLocalApiErrorHandler: Object(v.d)("MUTE_BUTTON_CONTAINER"),
					mute: I.a,
					unmute: h.e.unmute
				})).withAnalytics(),
				L = a("foB5"),
				k = a("Rp9C"),
				P = a("68+r"),
				x = a("P2xQ"),
				F = a("qz6Z"),
				R = a("w02m");
			class D extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_getUnmuteSuccessMessage", x.d.bind(null, this.context.featureSwitches)), r()(this, "_getMuteSuccessMessage", x.b.bind(null, this.context.featureSwitches)), r()(this, "_handleUnmuteToggle", () => {
						this._handleUnmuteToggleHelper()
					}), r()(this, "_handleUnmuteToggleHelper", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							mute: a,
							unmute: n,
							user: r,
							userId: s
						} = this.props;
						return r ? r.muting ? n(s).then(t => {
							e({
								text: this._getUnmuteSuccessMessage(r.screen_name)
							}), this._scribeAction("unmute_user")
						}, t(P.a)) : a(s).then(t => {
							e({
								text: this._getMuteSuccessMessage(r.screen_name)
							}), this._scribeAction("mute_user")
						}, t(L.a)) : Promise.resolve()
					})
				}
				render() {
					const {
						user: e
					} = this.props;
					if (!e) return null;
					const t = e.muting ? "destructiveSecondary" : "secondary",
						a = e.muting ? F.a : R.a,
						n = e.muting ? Object(x.e)(e.screen_name) : Object(x.c)(e.screen_name);
					return s.createElement(C.a, {
						accessibilityLabel: n,
						icon: s.createElement(a, null),
						onPress: this._handleUnmuteToggle,
						type: t
					})
				}
				_scribeAction(e) {
					const {
						analytics: t,
						user: a
					} = this.props;
					t.scribe({
						action: e,
						data: {
							items: a ? [k.a.getUserItem(a)] : []
						}
					})
				}
			}
			r()(D, "contextType", o.a);
			var N = A(D),
				j = a("Ka9G");
			var M = {
					[p.b.User]: Object(j.a)({
						decoration: ({
							userId: e
						}) => s.createElement(N, {
							userId: e
						})
					}),
					[p.b.TimelineCursor]: w.a
				},
				B = a("yoO3"),
				U = a("fTQJ"),
				H = a("7JQg"),
				K = a("eM8g"),
				V = a("7FtF"),
				G = a("t62R"),
				W = a("k/OQ"),
				z = a("I7xG"),
				q = a("FIs5"),
				Y = a("0yYu"),
				X = a("3XMw"),
				Q = a.n(X);
			const J = Q.a.daef29b7,
				$ = s.createElement(Q.a.I18NFormatMessage, {
					$i18n: "j694ca55"
				}, s.createElement(G.c, {
					link: "https://help.twitter.com/using-twitter/twitter-mute"
				}, Q.a.ja04553b)),
				Z = Q.a.f8321d82,
				ee = Q.a.d960b55b,
				te = Q.a.a6194d10,
				ae = Q.a.c7a6f0ae,
				ne = Q.a.ga3ef87d,
				re = Q.a.cd9701d3,
				se = Q.a.ca4db36d,
				oe = Q.a.i859a9d3,
				ie = {
					page: "settings",
					section: "muted_accounts"
				};
			class ce extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_fsSettingsRevamp", y.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "_renderTabs", () => {
						const e = [{
							to: "/settings/muted/all",
							label: Z,
							retainScrollPosition: !1
						}, {
							to: "/settings/muted/following",
							label: ee,
							retainScrollPosition: !1
						}, {
							to: "/settings/muted/not_following",
							label: ae,
							retainScrollPosition: !1
						}];
						return s.createElement(W.a, {
							accessibilityLabel: J,
							links: e
						})
					}), r()(this, "_getEmptyStateRenderer", Object(z.a)(this, e => e.filterName, e => () => {
						const t = e === g.a.Following ? se : re,
							a = s.createElement("div", null, t, " ", s.createElement(G.c, {
								link: "https://support.twitter.com/articles/20171399"
							}, oe));
						return s.createElement(q.a, {
							header: ne,
							message: a
						})
					}))
				}
				UNSAFE_componentWillMount() {
					var e;
					this._module = (e = this.context.loggedInUserId, Object(d.a)({
						timelineId: "mutedAccountsGraphQL-" + e,
						getEndpoint: e => e.Graphql.fetchMutedAccounts,
						getEndpointParams: t => Object.assign({
							user_id: e
						}, t),
						context: "FETCH_MUTED_ACCOUNTS",
						perfKey: "mutedAccountsGraphql",
						formatResponse: l.a
					}))
				}
				componentWillUnmount() {
					const {
						cleanupMuteList: e
					} = this.props;
					e(this._module)
				}
				render() {
					const {
						location: e,
						filter: t
					} = this.props;
					return s.createElement(H.b, {
						data: this._fsSettingsRevamp ? {
							context: "settings_revamp"
						} : void 0,
						namespace: ie
					}, s.createElement(B.a, null, s.createElement(V.a, {
						location: e,
						secondaryBar: this._renderTabs(),
						title: J,
						withBottomBorder: !0,
						withMarginBottom: !1
					}, s.createElement(K.a, null, $), s.createElement(Y.a, null), s.createElement(U.a, {
						entryConfiguration: M,
						loadingAccessibilityLabel: te,
						module: this._module,
						preprocessEntryList: t,
						renderEmptyState: this._getEmptyStateRenderer(),
						title: J
					}))))
				}
			}
			r()(ce, "contextType", o.a);
			t.default = S(ce)
		},
		"+OgG": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			a("IAdD");
			var n = a("P1r1"),
				r = a("UhuB"),
				s = a("BxsD");
			const o = e => (t, a) => {
				const o = Object.assign({}, e);
				if (e.hasOwnProperty("personalized_trends")) {
					if (!e.hasOwnProperty("trend_location_woeid")) {
						const e = Object(r.o)(a());
						o.trend_location_woeid = e && e[0] && e[0].woeid || "1"
					}
				} else o.personalized_trends = !1;
				return t(n.H(o)).then(() => t(Object(s.h)()))
			}
		},
		"2V91": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "PasswordScreen", (function() {
				return U
			}));
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("k49u"),
				i = a("dZRF"),
				c = a("1YZw"),
				l = a("oEOe"),
				d = a("oEGd"),
				h = a("0KEI"),
				u = a("hqKg");
			const m = Object(u.createSelector)(i.a.selectUniqUnrevokedApps, i.d, (e, t) => ({
					applicationCount: e && e.length,
					fetchStatus: t
				})),
				p = {
					addToast: c.b,
					changePassword: (e, t, a) => (n, r, {
						api: s
					}) => Object(l.d)(n, {
						params: {
							current_password: e,
							password: t,
							password_confirmation: a
						},
						request: s.Settings.changePassword
					})("CHANGE_PASSWORD"),
					createLocalApiErrorHandler: Object(h.d)("SETTINGS_PASSWORD_SCREEN"),
					fetchApplicationsIfNeeded: i.b
				};
			var g = Object(d.g)(m, p),
				b = a("7JQg"),
				f = a("v//M"),
				E = a("yoO3"),
				_ = a("7FtF"),
				S = a("WFkI"),
				y = a("p+r5"),
				w = a("t62R"),
				C = a("0yYu"),
				T = a("atVN"),
				v = a("3XMw"),
				I = a.n(v),
				O = a("/Dbh");
			const A = I.a.ab1f7eef,
				L = I.a.d241169c,
				k = I.a.d1091f50,
				P = I.a.a9bc3043,
				x = I.a.b8c03cfb,
				F = I.a.b731d32c,
				R = I.a.d555d7e0,
				D = I.a.fa8af9ad,
				N = I.a.c8cb0b4c,
				j = I.a.jea2ff04,
				M = I.a.a03f5c72,
				B = I.a.i9028824;
			class U extends s.Component {
				constructor(e, t) {
					super(e, t), r()(this, "_render", () => {
						const {
							applicationCount: e
						} = this.props, {
							current_password: t,
							currentPasswordError: a,
							new_password: n,
							newPasswordError: r,
							password_confirmation: o,
							passwordConfirmationError: i
						} = this.state;
						return s.createElement(S.a, null, s.createElement(y.a, {
							errorText: a,
							helperText: s.createElement(w.c, {
								link: "https://twitter.com/account/access_password_reset"
							}, k),
							invalid: !!a,
							label: L,
							name: "current_password",
							onChange: this._handleItemChanged,
							type: "password",
							value: t
						}), s.createElement(C.a, null), s.createElement(y.a, {
							errorText: r,
							invalid: !!r,
							label: P,
							name: "new_password",
							onChange: this._handleItemChanged,
							type: "password",
							value: n
						}), s.createElement(y.a, {
							errorText: i,
							invalid: !!i,
							label: x,
							name: "password_confirmation",
							onChange: this._handleItemChanged,
							type: "password",
							value: o
						}), s.createElement(C.a, null), e ? s.createElement(T.a, null, s.createElement(w.c, {
							color: "gray600"
						}, s.createElement(I.a.I18NFormatMessage, {
							$i18n: "hc585ff0"
						}, s.createElement(w.c, {
							link: "/settings/applications"
						}, M({
							applicationCount: e
						})), s.createElement(w.c, {
							link: "https://help.twitter.com/safety-and-security/account-security-tips"
						}, I.a.h1b4075d)))) : null)
					}), r()(this, "_handleFetchApps", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchApplicationsIfNeeded: t
						} = this.props;
						t().catch(e({
							showToast: !1
						}))
					}), r()(this, "_handleSubmit", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							changePassword: a
						} = this.props, {
							current_password: n,
							new_password: r,
							password_confirmation: s
						} = this.state;
						n === r ? this.setState({
							newPasswordError: R
						}) : r.length < O.b ? this.setState({
							newPasswordError: h.b
						}) : r.length > O.a ? this.setState({
							newPasswordError: h.a
						}) : r !== s ? this.setState({
							passwordConfirmationError: D
						}) : (this.setState({
							newPasswordError: void 0,
							passwordConfirmationError: void 0
						}), a(n, r, s).then(() => {
							this.setState({
								current_password: "",
								hasBlankFields: !0,
								new_password: "",
								password_confirmation: ""
							}), e({
								text: F
							})
						}).catch(t({
							[o.a.InvalidCurrentPassword]: {
								customAction: () => this.setState({
									currentPasswordError: N
								})
							},
							[o.a.NewPasswordLong]: {
								customAction: () => this.setState({
									newPasswordError: h.a
								})
							},
							[o.a.NewPasswordShort]: {
								customAction: () => this.setState({
									newPasswordError: h.b
								})
							},
							[o.a.NewPasswordWeak]: {
								customAction: () => this.setState({
									newPasswordError: j
								})
							},
							[o.a.CannotReuseCurrentPassword]: {
								customAction: () => this.setState({
									newPasswordError: R
								})
							},
							[o.a.PasswordResetMismatchedEntries]: {
								customAction: () => this.setState({
									passwordConfirmationError: D
								})
							},
							showToast: !0
						})))
					}), r()(this, "_handleItemChanged", e => {
						this.setState({
							[e.target.name]: e.target.value,
							currentPasswordError: void 0,
							newPasswordError: void 0,
							passwordConfirmationError: void 0
						}, () => {
							this.setState({
								hasBlankFields: "" === this.state.current_password || "" === this.state.new_password || "" === this.state.password_confirmation
							})
						})
					}), this.state = {
						current_password: "",
						hasBlankFields: !0,
						new_password: "",
						password_confirmation: ""
					}
				}
				UNSAFE_componentWillMount() {
					this._handleFetchApps()
				}
				render() {
					const {
						location: e,
						fetchStatus: t
					} = this.props;
					return s.createElement(_.a, {
						location: e,
						onSubmit: this._handleSubmit,
						submitDisabled: this.state.hasBlankFields,
						title: A
					}, s.createElement(E.a, null, s.createElement(f.a, {
						accessibilityLabel: B,
						fetchStatus: t,
						onRequestRetry: this._handleFetchApps,
						render: this._render
					})))
				}
			}
			t.default = Object(b.c)({
				page: "settings",
				section: "password"
			})(g(U))
		},
		"2dyk": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SettingsLocationScreen", (function() {
				return R
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("v6aA"),
				i = a("EPsT"),
				c = a("zh9S"),
				l = a("P1r1"),
				d = a("oEGd"),
				h = a("0KEI"),
				u = a("hqKg");
			const m = Object(u.createSelector)(l.f, e => ({
					settings: e
				})),
				p = {
					createLocalApiErrorHandler: Object(h.d)("SETTINGS_LOCATION_SCREEN"),
					deleteLocationData: l.c,
					googleAnalyticsPageView: c.a,
					scribePageImpression: c.d,
					updateSettings: l.H
				};
			var g = Object(d.g)(m, p),
				b = a("wrlS"),
				f = a("eM8g"),
				E = a("7FtF"),
				_ = a("MWbm"),
				S = a("t62R"),
				y = a("cCdp"),
				w = a("3XMw"),
				C = a.n(w);
			const T = C.a.jabb9c9a,
				v = C.a.eb029cab,
				I = C.a.eb029cab,
				O = C.a.j5267913,
				A = C.a.b15788db,
				L = C.a.h83e5c06,
				k = C.a.f9c44819,
				P = C.a.f4d69920,
				x = C.a.d96cf7cd,
				F = {
					page: "settings",
					section: "location"
				};
			class R extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_fsSettingsRevamp", b.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "_handleItemChanged", (e, t) => {
						const {
							createLocalApiErrorHandler: a,
							updateSettings: n
						} = this.props;
						n({
							[e]: t
						}).catch(a({
							showToast: !0
						}))
					}), r()(this, "_handleDeleteLocation", () => {
						const {
							createLocalApiErrorHandler: e,
							deleteLocationData: t
						} = this.props;
						t().catch(e({
							showToast: !0
						}))
					})
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					t(F), e(F)
				}
				render() {
					const {
						location: e,
						settings: t
					} = this.props;
					return s.createElement(E.a, {
						location: e,
						title: this._fsSettingsRevamp ? v : T
					}, s.createElement(_.a, null, s.createElement(f.a, null, s.createElement(C.a.I18NFormatMessage, {
						$i18n: "ia4557be"
					}, s.createElement(S.c, {
						link: "https://help.twitter.com/safety-and-security/tweet-location-settings"
					}, C.a.a18349ca))), s.createElement(y.a, {
						checked: t.geo_enabled,
						label: I,
						name: "geo_enabled",
						onChange: this._handleItemChanged
					}), s.createElement(i.a, {
						confirmationSheetConfirmButtonLabel: x,
						confirmationSheetConfirmButtonType: "destructive",
						confirmationSheetHeadline: this._fsSettingsRevamp ? P : k,
						confirmationSheetText: O,
						label: this._fsSettingsRevamp ? L : A,
						onConfirmationSheetConfirm: this._handleDeleteLocation,
						withBottomBorder: !1
					})))
				}
			}
			r()(R, "contextType", o.a);
			t.default = g(R)
		},
		"3GUV": function(e, t, a) {
			"use strict";
			var n = a("ERkP"),
				r = a("rHpw"),
				s = a("MWbm");
			class o extends n.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					return n.createElement(s.a, {
						style: i.root
					})
				}
			}
			const i = r.a.create(e => ({
				root: {
					height: 5 * parseInt(e.lineHeight, 10) + "rem"
				}
			}));
			t.a = o
		},
		"3WEv": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SessionDetailPage", (function() {
				return U
			}));
			a("IAdD"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("EPsT"),
				i = (a("WNMA"), a("uo4S")),
				c = a("1YZw"),
				l = a("oEGd"),
				d = a("0KEI"),
				h = a("hqKg"),
				u = a("zh9S");
			const m = Object(h.createSelector)(i.d, (e, t) => {
					const a = decodeURIComponent(t.match.params.sessionId || "");
					return i.e(e, a)
				}, (e, t) => ({
					fetchStatus: e,
					session: t
				})),
				p = {
					addToast: c.b,
					createLocalApiErrorHandler: Object(d.d)("SESSION_DETAIL"),
					fetchSessionsIfNeeded: i.a,
					revokeSession: i.c,
					scribeAction: u.c
				};
			var g = Object(l.g)(m, p),
				b = a("wrlS"),
				f = a("v//M"),
				E = a("3XMw"),
				_ = a.n(E),
				S = a("yoO3"),
				y = a("7JQg"),
				w = a("ZvNX"),
				C = a("7FtF"),
				T = a("jm1/"),
				v = a("MWbm"),
				I = a("FIs5"),
				O = a("t62R"),
				A = a("0yYu"),
				L = a("6vad");
			const k = _.a.ed5ab169,
				P = _.a.d64e29c5,
				x = {
					headline: _.a.idfa01cb,
					text: _.a.d4cca0f7,
					confirmButtonLabel: _.a.ae1bbb26
				},
				F = _.a.e04ba39c,
				R = _.a.bfbc051c,
				D = _.a.jaaa8984,
				N = _.a.h667fc02,
				j = _.a.ddcd3d26,
				M = _.a.d2f0f3fd,
				B = {
					page: "settings",
					section: "session_detail"
				};
			class U extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_fsSettingsRevamp", b.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "_fetchSessionsIfNeeded", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchSessionsIfNeeded: t
						} = this.props;
						return t().catch(e({
							showToast: !0
						}))
					}), r()(this, "_handleRetry", () => {
						this._fetchSessionsIfNeeded()
					}), r()(this, "_handleLogOut", () => {
						const {
							session: e
						} = this.props;
						e && (this._revokeSession(e.hashed_token), this._scribeAction("revoke_session"))
					}), r()(this, "_handleGoBack", () => {
						const {
							history: e
						} = this.props;
						e.goBack({
							backLocation: "/settings/applications"
						})
					}), r()(this, "_render", () => {
						const {
							session: e
						} = this.props;
						return e ? s.createElement(v.a, null, s.createElement(w.a, {
							session: e,
							withBottomBorder: !1,
							withSummary: !0
						}), this._renderDateAndTime(e), this._renderLocation(e)) : s.createElement(I.a, {
							header: M
						})
					})
				}
				componentDidMount() {
					this._fetchSessionsIfNeeded()
				}
				_revokeSession(e) {
					const {
						addToast: t,
						createLocalApiErrorHandler: a,
						revokeSession: n
					} = this.props;
					n(e).then(() => {
						t({
							text: N
						}), this._handleGoBack()
					}, a({
						showToast: !0
					}))
				}
				_scribeAction(e) {
					const {
						scribeAction: t
					} = this.props;
					t(Object.assign({}, B, {
						component: "active_session",
						element: e,
						action: "click"
					}), this._fsSettingsRevamp ? {
						context: "settings_revamp"
					} : void 0)
				}
				render() {
					const {
						fetchStatus: e,
						location: t,
						session: a
					} = this.props, n = a ? a.device_name : "";
					return s.createElement(y.b, {
						data: this._fsSettingsRevamp ? {
							context: "settings_revamp"
						} : void 0,
						namespace: B
					}, s.createElement(S.a, null, s.createElement(C.a, {
						location: t,
						title: n
					}, s.createElement(f.a, {
						accessibilityLabel: j,
						fetchStatus: e,
						onRequestRetry: this._handleRetry,
						render: this._render
					}))))
				}
				_renderDateLabel(e) {
					if (e.is_current_session) return s.createElement(O.c, null, k); {
						const t = new Date(Number(e.last_seen_at));
						return s.createElement("time", {
							dateTime: t.toISOString()
						}, R(t))
					}
				}
				_renderDateAndTime(e) {
					return s.createElement(v.a, null, e && e.last_seen_at ? s.createElement(v.a, null, s.createElement(A.a, null), s.createElement(L.b, {
						text: F
					}), s.createElement(v.a, {
						style: [T.a.labelContainer, !(e && e.is_current_session) && T.a.bottomBorder]
					}, s.createElement(O.c, {
						color: "gray600",
						size: "small"
					}, this._renderDateLabel(e)))) : null, e && e.is_current_session ? null : s.createElement(o.a, {
						confirmationSheetConfirmButtonLabel: x.confirmButtonLabel,
						confirmationSheetConfirmButtonType: "primary",
						confirmationSheetHeadline: x.headline,
						confirmationSheetText: x.text,
						label: P,
						onConfirmationSheetConfirm: this._handleLogOut,
						withBottomBorder: !1
					}))
				}
				_renderLocation(e) {
					const t = e.location;
					return t ? s.createElement(v.a, null, s.createElement(A.a, null), s.createElement(L.b, {
						text: D
					}), s.createElement(v.a, {
						style: T.a.labelContainer
					}, s.createElement(O.c, {
						color: "gray600",
						size: "small"
					}, t))) : null
				}
			}
			t.default = g(U)
		},
		"45mF": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var n = a("1YZw"),
				r = a("pXBW"),
				s = a("3XMw"),
				o = a.n(s),
				i = a("SrIh");
			const c = o.a.a5d4fda0,
				l = (e = c, t = !0) => ({
					customErrorHandler: a => {
						const {
							context: s
						} = a;
						return !a instanceof r.a && (a.message = `Strato error occurred in ${s.id}: ${s.action}`), Object(i.a)(a, {
							extra: {
								context: s,
								isStrato: !0
							}
						}), t ? Object(n.b)({
							text: e
						}) : []
					}
				})
		},
		"5UID": function(e, t, a) {
			"use strict";
			var n = a("ERkP"),
				r = a("3XMw"),
				s = a.n(r),
				o = a("rHpw"),
				i = a("+/1j"),
				c = a("MWbm");
			const l = s.a.e5b0063d;
			let d = 0;
			class h extends n.Component {
				constructor() {
					super(), this._listDomId = "accessible-list-" + d, d += 1
				}
				render() {
					const {
						children: e,
						title: t
					} = this.props, a = l({
						title: t
					});
					return n.createElement(c.a, {
						accessibilityRole: "region",
						"aria-labelledby": this._listDomId
					}, n.createElement(i.a, {
						accessibilityRole: "heading",
						"aria-level": 1,
						nativeID: this._listDomId,
						style: o.a.visuallyHidden
					}, t), n.createElement(c.a, {
						accessibilityLabel: a
					}, e))
				}
			}
			t.a = h
		},
		"5keN": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "FeatureSwitchesScreen", (function() {
				return k
			}));
			a("jQ/y"), a("DZ+c"), a("MvUL"), a("LJOr"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("oEGd"),
				i = a("hqKg"),
				c = a("O0uF");
			const l = Object(i.createSelector)(c.d, e => ({
				allSwitches: e.debug,
				config: e.config
			}));
			var d = Object(o.c)(l),
				h = a("7JQg"),
				u = a("hX3w"),
				m = a("VwDm"),
				p = a("sXY3"),
				g = a("yoO3"),
				b = a("7FtF"),
				f = a("MWbm"),
				E = a("p+r5"),
				_ = a("rHpw");
			class S extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_handleChange", e => {
						const {
							disabled: t,
							name: a,
							onChange: n,
							type: r
						} = this.props;
						if (!t) {
							n(a, "number" === r ? parseInt(e.target.value, 10) : e.target.value)
						}
					})
				}
				render() {
					const {
						disabled: e,
						label: t,
						withBottomBorder: a,
						helpText: n,
						type: r,
						value: o
					} = this.props, i = !!e;
					return s.createElement(f.a, {
						style: [a && y.bottomBorder, i && y.disabled]
					}, s.createElement(E.a, {
						editable: !i,
						helperText: n,
						label: t,
						maxLength: "number" === r ? 5 : void 0,
						name: t,
						onChange: this._handleChange,
						type: r,
						value: o
					}))
				}
			}
			r()(S, "defaultProps", {
				type: "text",
				withBottomBorder: !0
			});
			const y = _.a.create(e => ({
				bottomBorder: {
					borderBottomColor: e.colors.borderColor,
					borderBottomStyle: "solid",
					borderBottomWidth: e.borderWidths.small
				},
				disabled: {
					opacity: .5
				}
			}));
			var w = a("iCwC"),
				C = a("6vad"),
				T = a("t62R"),
				v = a("/yvb"),
				I = a("cCdp"),
				O = a("6OUF"),
				A = a("0yYu"),
				L = a("Y3cQ");
			class k extends s.Component {
				constructor(e) {
					super(e), r()(this, "_handleItemChanged", (e, t) => {
						u.a.set(e, t), this.forceUpdate()
					}), r()(this, "_handleClearOverrides", () => {
						u.a.clear(), this.forceUpdate()
					}), r()(this, "_renderCurrentOverrides", () => {
						const {
							config: e
						} = this.props, t = u.a.getAll();
						return Object.keys(t).length > 0 ? s.createElement(f.a, null, s.createElement(C.b, {
							text: "Currently Active Overrides"
						}), Object(p.a)(t).map(([t, a]) => s.createElement(f.a, {
							key: t,
							style: [w.a.viewItem, w.a.bottomBorder]
						}, s.createElement(T.c, null, t), s.createElement(T.c, {
							color: e[t] && e[t].value !== a ? "red500" : "gray600"
						}, a.toString()))), s.createElement(f.a, {
							style: w.a.viewItem
						}, s.createElement(v.a, {
							onPress: this._handleClearOverrides
						}, "Clear all overrides"))) : null
					}), r()(this, "_renderSearch", () => s.createElement(f.a, null, s.createElement(I.a, {
						checked: this.state.onlyDDGs,
						label: "Only DDGs",
						name: "onlyDDGs",
						onChange: this._handleFilterChanged
					}), s.createElement(O.a, {
						Icon: m.a,
						onChange: this._handleSearch,
						placeholder: "Search feature switches",
						style: w.a.searchBox,
						withClearButton: !0
					}))), r()(this, "_renderAll", () => {
						const {
							search: e
						} = this.state, {
							allSwitches: t,
							config: a
						} = this.props, n = u.a.getAll();
						return s.createElement(f.a, null, s.createElement(C.b, {
							text: "Filters"
						}), this._renderSearch(), s.createElement(A.a, null), s.createElement(C.b, {
							text: "Feature switches"
						}), Object(p.a)(a).map(([r, o]) => {
							if (!t[r] || e && -1 === r.indexOf(e) || this.state.onlyDDGs && "experiment" !== t[r].type) return null;
							const {
								description: i,
								enumeration_values: c,
								owner: l,
								type: d
							} = t[r], h = n[r], u = void 0 !== h ? h : a[r] ? a[r].value : t[r].default, m = i || l ? `${i}\n${l}` : void 0;
							switch (d) {
								case "boolean":
									return s.createElement(I.a, {
										checked: u,
										helpText: m,
										key: r,
										label: r,
										name: r,
										onChange: this._handleItemChanged
									});
								case "experiment":
									return s.createElement(L.a, {
										description: m,
										key: r,
										label: r,
										name: r,
										onChange: this._handleItemChanged,
										options: c.map(e => ({
											label: e,
											value: e
										})),
										value: u
									});
								case "number":
								default:
									return Array.isArray(u) ? s.createElement(f.a, {
										key: r,
										style: [w.a.viewItem, w.a.bottomBorder]
									}, s.createElement(T.c, null, r), s.createElement(T.c, {
										color: "gray600"
									}, "Array value type editing not supported yet"), s.createElement("br", null), s.createElement(T.c, null, u.toString())) : s.createElement(S, {
										helpText: m,
										key: r,
										label: r,
										name: r,
										onChange: this._handleItemChanged,
										type: "number" === d ? "number" : "text",
										value: u.toString()
									})
							}
						}))
					}), r()(this, "_handleSearch", e => {
						this.setState({
							search: e.target.value
						})
					}), r()(this, "_handleFilterChanged", (e, t) => {
						this.setState({
							[e]: t
						})
					}), this.state = {
						onlyDDGs: !1,
						search: ""
					}, 0 === Object.keys(e.allSwitches).length && e.history.replace("/settings")
				}
				render() {
					const {
						location: e
					} = this.props;
					return s.createElement(g.a, null, s.createElement(b.a, {
						location: e,
						title: "Feature switches"
					}, s.createElement(f.a, null, this._renderCurrentOverrides(), this._renderAll())))
				}
			}
			t.default = Object(h.c)({
				page: "settings",
				section: "feature_switches"
			})(d(k))
		},
		"6PlH": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "MutedKeywordsNotificationsScreen", (function() {
				return ee
			}));
			a("IAdD");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("v//M"),
				i = a("NTtI"),
				c = (a("kYxP"), a("3XMw")),
				l = a.n(c),
				d = a("qz6Z"),
				h = a("MWbm"),
				u = a("/yvb"),
				m = a("eb3s");
			const p = l.a.cfd2f35d,
				g = l.a.bb1cbeb5,
				b = l.a.ba4aaa9d,
				f = l.a.f837ed7d;
			class E extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "state", {
						showUnmuteConfirmation: !1
					}), r()(this, "_handleConfirm", () => {
						const {
							onUnmute: e,
							keyword: t
						} = this.props;
						this.setState({
							showUnmuteConfirmation: !1
						}), e(t)
					}), r()(this, "_handleCancel", () => {
						this.setState({
							showUnmuteConfirmation: !1
						})
					}), r()(this, "_handlePress", () => {
						const {
							keyword: e,
							onUnmute: t,
							shouldShowUnmuteEducationTip: a
						} = this.props;
						a ? (this.setState({
							showUnmuteConfirmation: !0
						}), this._updateUnmuteConfirmationPersistence()) : t(e)
					})
				}
				_updateUnmuteConfirmationPersistence() {
					const {
						addTip: e
					} = this.props;
					e({
						unmute_keyword_confirmation: !0
					})
				}
				render() {
					const {
						color: e
					} = this.props;
					return s.createElement(h.a, null, s.createElement(u.a, {
						accessibilityLabel: g,
						color: e,
						icon: s.createElement(d.a, null),
						onPress: this._handlePress
					}), this.state.showUnmuteConfirmation ? s.createElement(m.a, {
						cancelButtonLabel: p,
						confirmButtonLabel: g,
						headline: b,
						onCancel: this._handleCancel,
						onConfirm: this._handleConfirm,
						text: f
					}) : null)
				}
			}
			r()(E, "defaultProps", {
				color: "red500"
			});
			var _ = a("iY63");
			const S = s.createElement(_.a, null);
			class y extends s.PureComponent {
				render() {
					const {
						accessibilityLabel: e,
						link: t
					} = this.props;
					return s.createElement(u.a, {
						accessibilityLabel: e,
						icon: S,
						link: t,
						pullRight: !0,
						type: "text"
					})
				}
			}
			var w = y,
				C = a("7FtF"),
				T = a("iCwC"),
				v = a("t62R"),
				I = a("FIs5"),
				O = a("feu+"),
				A = a("htQn"),
				L = a("rHpw"),
				k = a("zh9S"),
				P = a("X8EX"),
				x = a("1YZw"),
				F = a("oEGd"),
				R = a("0KEI"),
				D = a("hqKg"),
				N = a("HAhZ");
			const j = Object(D.createSelector)(P.j, P.h, (e, t) => Object(N.c)(e, "mute_keyword_education"), (e, t) => Object(N.c)(e, "unmute_keyword_confirmation"), (e, t, a, n) => ({
					mutedKeywords: e,
					fetchStatus: t,
					shouldShowMuteEducationTip: a,
					shouldShowUnmuteEducationTip: n
				})),
				M = {
					addTip: N.a,
					addToast: x.b,
					createLocalApiErrorHandler: Object(R.d)("MUTED_KEYWORDS"),
					deleteMutedKeyword: P.b,
					fetchMutedKeywordsIfNeeded: P.e,
					googleAnalyticsPageView: k.a,
					scribeAction: k.c,
					scribePageImpression: k.d
				};
			var B = Object(F.g)(j, M);
			const U = l.a.cab9274e,
				H = l.a.e506aa92,
				K = l.a.cbd04965,
				V = l.a.j24c37b2,
				G = l.a.i0dd9b9d,
				W = l.a.eb4e810a,
				z = l.a.cabeb6c1,
				q = l.a.jade381b,
				Y = l.a.be59d8c3,
				X = l.a.i3d087da,
				Q = l.a.ga8d18c8,
				J = {
					page: "settings",
					section: "notifications",
					component: "mute_keyword",
					element: "list"
				},
				$ = l.a.f9bce916,
				Z = () => s.createElement(l.a.I18NFormatMessage, {
					$i18n: "f02520a9"
				}, s.createElement(v.c, {
					color: "link",
					link: "https://support.twitter.com/articles/20175032",
					withInteractiveStyling: !0
				}, l.a.f12c13b5));
			class ee extends s.Component {
				constructor(e) {
					super(e), r()(this, "_render", () => {
						const {
							mutedKeywords: e
						} = this.props;
						return e && e.length > 0 ? this._renderKeywords() : this._renderEmptyState()
					}), r()(this, "_renderEmptyState", () => s.createElement(I.a, {
						header: U,
						message: s.createElement(Z, null)
					})), r()(this, "_renderExpireTime", e => {
						const t = new Date(Number(e));
						return s.createElement("time", {
							"aria-label": q(t),
							dateTime: t.toISOString()
						}, this._calcRemainingTime(t))
					}), r()(this, "_isKeywordExpired", e => e && Number(e) < Date.now()), r()(this, "_calcRemainingTime", e => {
						const t = e - Date.now();
						if (t <= 0) return W;
						const a = Math.ceil(t / 6e4);
						if (a < 60) return Y(a);
						const n = Math.round(t / 36e5);
						if (n < 25) return X(n);
						const r = Math.round(t / 864e5);
						return r < 31 ? Q(r) : q(e)
					}), r()(this, "_handleFetch", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchMutedKeywordsIfNeeded: t
						} = this.props;
						t().catch(e())
					}), r()(this, "_handleUnmute", e => {
						const {
							addToast: t,
							createLocalApiErrorHandler: a,
							scribeAction: n,
							deleteMutedKeyword: r
						} = this.props;
						r([e.id]).then(() => {
							t({
								text: K({
									keyword: e.keyword
								})
							}), n(Object.assign({}, J, {
								action: "unmute"
							}))
						}, a({
							showToast: !0
						}))
					}), r()(this, "_handleCloseEducationPrompt", () => {
						this.setState({
							showMuteKeywordEducationSheet: !1
						})
					}), this.state = {
						showMuteKeywordEducationSheet: !1
					}
				}
				UNSAFE_componentWillMount() {
					this._handleFetch()
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t,
						shouldShowMuteEducationTip: a
					} = this.props;
					e(J), t(J), a && (this.setState({
						showMuteKeywordEducationSheet: !0
					}), this._updateMuteKeywordEducationCookie())
				}
				render() {
					const {
						fetchStatus: e,
						location: t
					} = this.props, a = s.createElement(w, {
						accessibilityLabel: H,
						link: "/settings/add_muted_keyword"
					});
					return s.createElement(C.a, {
						location: t,
						rightControl: a,
						title: G
					}, this.state.showMuteKeywordEducationSheet ? s.createElement(O.a, {
						actionLabel: V,
						graphic: i.a,
						graphicDisplayMode: "illustration",
						headline: $,
						onAction: this._handleCloseEducationPrompt,
						onClose: this._handleCloseEducationPrompt,
						subtext: s.createElement(Z, null)
					}) : null, s.createElement(o.a, {
						fetchStatus: e,
						onRequestRetry: this._handleFetch,
						render: this._render
					}))
				}
				_renderKeywords() {
					const {
						addTip: e,
						shouldShowUnmuteEducationTip: t
					} = this.props;
					return s.createElement(h.a, null, s.createElement(v.c, {
						color: "gray600",
						size: "small",
						style: [T.a.descriptionText, T.a.bottomBorder]
					}, s.createElement(Z, null)), this.props.mutedKeywords.map(a => s.createElement(A.a, {
						key: a.id,
						link: {
							pathname: "/settings/muted_keywords/" + a.id,
							anchorless: !0
						},
						style: te.item
					}, s.createElement(h.a, {
						style: te.keywordContainer
					}, s.createElement(v.c, {
						color: this._isKeywordExpired(a.valid_until) ? "gray600" : "normal",
						numberOfLines: 1,
						style: te.keyword
					}, a.keyword), s.createElement(v.c, {
						color: "gray600",
						size: "small",
						style: te.muteTime
					}, a.valid_until ? this._renderExpireTime(a.valid_until) : z)), s.createElement(E, {
						addTip: e,
						color: this._isKeywordExpired(a.valid_until) ? "gray600" : "red500",
						keyword: a,
						onUnmute: this._handleUnmute,
						shouldShowUnmuteEducationTip: t
					}))))
				}
				_updateMuteKeywordEducationCookie() {
					const {
						addTip: e
					} = this.props;
					e({
						mute_keyword_education: !0
					})
				}
			}
			const te = L.a.create(e => ({
				item: {
					borderBottomColor: e.colors.borderColor,
					borderBottomStyle: "solid",
					borderBottomWidth: e.borderWidths.small,
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "space-between",
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.spaces.small,
					maxWidth: "100%"
				},
				keywordContainer: {
					alignItems: "flex-start",
					flexGrow: 1,
					justifyContent: "space-between",
					marginRight: e.spaces.small,
					minHeight: e.spaces.xLarge,
					maxWidth: "85%"
				},
				keyword: {
					maxWidth: "100%"
				},
				muteTime: {
					flexShrink: 0
				}
			}));
			t.default = B(ee)
		},
		"7WHe": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SettingsContactsDashboardScreen", (function() {
				return Q
			}));
			a("tVqn"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("EPsT"),
				i = a("P1r1"),
				c = a("oEGd"),
				l = a("0KEI"),
				d = a("hqKg"),
				h = (a("IAdD"), a("JtPf"), a("kGix")),
				u = a("XMGw"),
				m = a("Ssj5"),
				p = a("oEOe");
			const g = u.a + "/contacts",
				b = "rweb/" + u.a,
				f = Object(p.a)(b, "FETCH_ADDRESS_BOOK"),
				E = {
					cursor: null,
					contacts: [],
					fetchStatus: h.a.NONE
				};
			m.a.register({
				[g]: function(e = E, t = {}) {
					let a;
					switch (t.type) {
						case f.REQUEST:
							return Object.assign({}, e, {
								fetchStatus: h.a.LOADING
							});
						case f.SUCCESS:
							return a = t.payload.entities.vcards ? Object.values(t.payload.entities.vcards) : [], Object.assign({}, e, {
								contacts: [...e.contacts, ...a],
								cursor: t.payload.result.next_cursor,
								fetchStatus: h.a.LOADED
							});
						case f.FAILURE:
							return Object.assign({}, e, {
								error: t.payload,
								fetchStatus: h.a.FAILED
							});
						default:
							return e
					}
				}
			});
			const _ = e => e[g].fetchStatus,
				S = e => (t, a, {
					api: n
				}) => Object(p.b)(t, {
					request: n.Contacts.fetchAddressBook,
					params: e
				})({
					actionTypes: f,
					context: "FETCH_ADDRESS_BOOK"
				}),
				y = Object(d.createSelector)(e => e[g].contacts, _, (e, t) => ({
					contacts: e,
					fetchStatus: t
				})),
				w = {
					createLocalApiErrorHandler: Object(l.d)("SETTINGS_CONTACTS_DASHBOARD_SCREEN"),
					deleteContacts: i.b,
					fetchContactsIfNeeded: e => (t, a) => _(a()) === h.a.LOADED ? Promise.resolve() : t(S(e)),
					fetchContactsNext: e => (t, a) => {
						const n = a(),
							r = (e => e[g].cursor)(n);
						return r && _(n) === h.a.LOADED ? t(S(Object.assign({}, e, {
							cursor: r
						}))) : Promise.resolve()
					}
				};
			var C = Object(c.g)(y, w),
				T = a("wrlS"),
				v = a("v//M"),
				I = a("w6IS"),
				O = a("6ZHn"),
				A = a("TEoO"),
				L = a("yoO3"),
				k = a("PK8P"),
				P = a("7JQg"),
				x = a("eM8g"),
				F = a("7FtF"),
				R = a("iCwC"),
				D = a("MWbm"),
				N = a("t62R"),
				j = a("j7Bv"),
				M = a("0yYu"),
				B = a("rHpw"),
				U = a("3XMw"),
				H = a.n(U);
			const K = {
					page: "settings",
					section: "contacts_dashboard"
				},
				V = H.a.bbcafbd9,
				G = s.createElement(H.a.I18NFormatMessage, {
					$i18n: "ec152666"
				}, s.createElement(N.c, {
					link: "https://help.twitter.com/using-twitter/upload-your-contacts-to-search-for-friends"
				}, H.a.b8dd5e4d)),
				W = H.a.b864be79,
				z = {
					headline: H.a.g5fa1090,
					text: H.a.h0d21912,
					confirmButtonLabel: H.a.e68b09b4
				},
				q = H.a.ca24589e,
				Y = e => e.id_str,
				X = () => null;
			class Q extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_fsSettingsRevamp", T.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "state", {
						verificationRequired: !1
					}), r()(this, "_renderTimeline", () => {
						const {
							contacts: e,
							fetchStatus: t
						} = this.props;
						return s.createElement(A.a, {
							assumedItemHeight: 70,
							cacheKey: "CONTACTS_DASHBOARD",
							footer: this._renderFooter(t),
							identityFunction: Y,
							items: e,
							onNearEnd: this._handleFetchMoreContacts,
							renderer: this._renderContact
						})
					}), r()(this, "_renderContact", e => {
						const {
							id_str: t,
							vcard: a,
							import_source: n
						} = e, r = this._getContactProp(a.get("fn")) || q, o = this._getContactProperties(a.get("tel")), i = [...this._getContactProperties(a.get("email")), ...o];
						return s.createElement(D.a, {
							key: t,
							style: [
								[R.a.infoText, R.a.bottomBorder], J.contactContainer
							]
						}, s.createElement(j.a, {
							Icon: O.a,
							color: "neutral",
							style: J.personIcon
						}), s.createElement(D.a, null, s.createElement(N.c, null, r), i ? i.map(e => s.createElement(N.c, {
							color: "gray600",
							key: e,
							size: "small"
						}, e)) : null, n ? s.createElement(N.c, {
							color: "gray600",
							size: "small"
						}, "Imported from " + n) : null))
					}), r()(this, "_renderFooter", e => e === h.a.LOADING ? s.createElement(D.a, {
						style: J.loadingContainer
					}, s.createElement(v.a, {
						fetchStatus: e,
						render: X
					})) : null), r()(this, "_handleRemoveContacts", () => {
						const {
							createLocalApiErrorHandler: e,
							deleteContacts: t
						} = this.props;
						t().catch(e({
							showToast: !0
						}))
					}), r()(this, "_handleFetchMoreContacts", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchContactsNext: t
						} = this.props;
						t().catch(e())
					}), r()(this, "_getContactProp", e => (this._getContactProperties(e)[0] || "").trim()), r()(this, "_getContactProperties", e => e ? Array.isArray(e) ? Object(I.a)(e.map(e => this._getContactProperties(e))) : [e.valueOf()] : [])
				}
				render() {
					const {
						contacts: e,
						location: t,
						fetchContactsIfNeeded: a,
						fetchStatus: n
					} = this.props;
					return s.createElement(P.b, {
						data: this._fsSettingsRevamp ? {
							context: "settings_revamp"
						} : void 0,
						namespace: K
					}, s.createElement(L.a, null, s.createElement(F.a, {
						location: t,
						title: V
					}, s.createElement(o.a, {
						confirmationSheetConfirmButtonLabel: z.confirmButtonLabel,
						confirmationSheetConfirmButtonType: "destructive",
						confirmationSheetHeadline: z.headline,
						confirmationSheetText: z.text,
						label: W,
						onConfirmationSheetConfirm: this._handleRemoveContacts
					}), s.createElement(x.a, null, G), s.createElement(M.a, null), s.createElement(k.a, {
						fetch: a,
						fetchStatus: e.length > 0 ? h.a.LOADED : n,
						render: this._renderTimeline
					}))))
				}
			}
			const J = B.a.create(e => ({
				contactContainer: {
					flexDirection: "row",
					flexWrap: "wrap"
				},
				personIcon: {
					marginRight: e.spaces.xSmall
				},
				loadingContainer: {
					paddingVertical: e.spaces.small,
					justifyContent: "center"
				}
			}));
			t.default = C(Q)
		},
		"98E1": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return _
			}));
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("3XMw"),
				i = a.n(o),
				c = a("7FtF"),
				l = a("iCwC"),
				d = a("MWbm"),
				h = a("t62R"),
				u = a("6vad"),
				m = a("p+r5");
			const p = i.a.a999cb72,
				g = i.a.dec3c9b8,
				b = i.a.acc20811,
				f = i.a.d1091f50,
				E = i.a.i2209530;
			class _ extends s.Component {
				constructor(e, t) {
					super(e, t), r()(this, "_handleSubmit", () => {
						const {
							onPasswordSubmit: e
						} = this.props, {
							current_password: t
						} = this.state;
						t && e(t), this.setState({
							current_password: ""
						})
					}), r()(this, "_handleChange", e => {
						this.setState({
							current_password: e.target.value
						})
					}), this.state = {
						current_password: ""
					}
				}
				_renderPasswordPrompt() {
					const {
						location: e,
						reenterPasswordLabel: t,
						saveChangesHeaderLabel: a,
						submitLabel: n,
						submitType: r
					} = this.props, o = s.createElement(h.c, {
						link: {
							pathname: "https://twitter.com/account/begin_password_reset",
							external: !0,
							openInSameFrame: !0
						}
					}, f);
					return s.createElement(c.a, {
						location: e,
						onSubmit: this._handleSubmit,
						submitLabel: n,
						submitType: r,
						title: a
					}, s.createElement(u.b, {
						text: a
					}), s.createElement(d.a, {
						style: [l.a.viewItem, l.a.bottomBorder]
					}, s.createElement(h.c, {
						color: "gray600",
						size: "small"
					}, t)), s.createElement(m.a, {
						helperText: o,
						label: g,
						name: "current_password",
						onChange: this._handleChange,
						type: "password",
						value: this.state.current_password
					}))
				}
				render() {
					const {
						children: e,
						location: t,
						promptForPassword: a,
						title: n
					} = this.props;
					return a ? this._renderPasswordPrompt() : s.createElement(c.a, {
						location: t,
						title: n
					}, e || null)
				}
			}
			r()(_, "defaultProps", {
				children: null,
				promptForPassword: !1,
				reenterPasswordLabel: b,
				saveChangesHeaderLabel: p,
				submitLabel: E
			})
		},
		BxsD: function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return l
			})), a.d(t, "c", (function() {
				return d
			})), a.d(t, "e", (function() {
				return u
			})), a.d(t, "d", (function() {
				return m
			})), a.d(t, "g", (function() {
				return p
			})), a.d(t, "f", (function() {
				return g
			})), a.d(t, "h", (function() {
				return b
			}));
			a("IAdD");
			var n = a("vXCH"),
				r = a("oQhu"),
				s = a("ZNT5"),
				o = a("eR3e");
			const i = Object.freeze({
					Trends: "trends"
				}),
				c = Object.freeze({
					WebSidebar: "web_sidebar"
				}),
				l = "explore-",
				d = ({
					featureSwitches: e,
					contentType: t,
					displayLocation: a,
					includePageConfiguration: n = !1,
					initialTabId: r,
					profileUserId: o
				} = {}) => {
					const i = t || a || "main",
						c = o ? `${l}${i}-${o}` : `${l}${i}`,
						d = !0 === e.getValueWithoutScribeImpression("responsive_web_new_client_events_enabled");
					return Object(s.a)({
						timelineId: c,
						formatResponse: h(d),
						getEndpoint: e => e.URT.fetchExplore,
						getEndpointParams: e => Object.assign({}, e, {
							candidate_source: t,
							display_location: a,
							include_page_configuration: n,
							initial_tab_id: r,
							profile_user_id: o,
							entity_tokens: d
						}),
						context: "FETCH_EXPLORE",
						perfKey: `${l}${i}`,
						staleIntervalMs: 9e5
					})
				},
				h = e => t => {
					const {
						pageConfiguration: a
					} = t;
					if (e && a && a.tabs) {
						const r = a.tabs.tabs.map(t => {
								var a, n, r;
								const s = Object.assign({}, null == (a = t.urtEndpoint) || null == (n = a.urtEndpointOptions) ? void 0 : n.requestParams, {
									entity_tokens: e
								});
								return Object.assign({}, t, {
									urtEndpoint: Object.assign({}, t.urtEndpoint, {
										urtEndpointOptions: Object.assign({}, null == (r = t.urtEndpoint) ? void 0 : r.urtEndpointOptions, {
											requestParams: s
										})
									})
								})
							}),
							s = Object.assign({}, t, {
								pageConfiguration: Object.assign({}, a, {
									tabs: Object.assign({}, a.tabs, {
										tabs: r
									})
								})
							});
						return Object(n.a)(s)
					}
					return Object(n.a)(t)
				},
				u = (e, t) => d({
					featureSwitches: e,
					includePageConfiguration: !0,
					initialTabId: t
				}),
				m = Object(r.a)(u),
				p = Object(r.a)(e => d({
					featureSwitches: e,
					contentType: i.Trends
				})),
				g = Object(r.a)(e => d({
					featureSwitches: e,
					displayLocation: c.WebSidebar
				})),
				b = () => (e, t) => e(Object(o.r)(t()).filter(e => 0 === e.indexOf(l)).map(e => Object(o.e)(e)))
		},
		CKSU: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "DeviceFollowingScreen", (function() {
				return K
			}));
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("v6aA"),
				i = a("zh9S"),
				c = a("oEGd");
			const l = {
				googleAnalyticsPageView: i.a,
				scribePageImpression: i.d
			};
			var d = Object(c.b)(l),
				h = a("7JQg"),
				u = (a("IAdD"), a("ZNT5")),
				m = (a("kYxP"), a("LdEA")),
				p = a.n(m),
				g = a("vWJI"),
				b = a("PiaM"),
				f = a("9/1j"),
				E = a("Re5t");
			const _ = (e, t = {}) => {
					const {
						cursor: a
					} = t, n = [];
					if (e.result.users.length > 0) {
						let t = (a && "object" == typeof a ? a.sortValue : Date.now()) - 1;
						e.result.users.forEach(e => {
							n.push(b.m({
								id: e,
								sortIndex: "" + t,
								displayType: E.a.UserDetailed
							})), t -= 1
						}), n.push(...S(e, t))
					}
					return y(n, e.entities, w)
				},
				S = (e, t) => {
					const {
						next_cursor_str: a
					} = e.result;
					if ("0" === a) return [];
					return [g.cursorEntry({
						cursorType: g.CursorType.Bottom,
						value: {
							param: "cursor",
							id: a || "-1",
							sortValue: t
						},
						sortIndex: "" + t
					})]
				},
				y = (e, t, a) => ({
					globalObjects: t,
					timeline: {
						responseObjects: a,
						instructions: e.length ? [{
							type: f.a.AddEntries,
							parameters: {
								entries: e
							}
						}] : []
					}
				}),
				w = {
					feedbackActions: {}
				},
				C = e => Object(u.a)({
					timelineId: "deviceFollowingLegacy-" + e,
					getEndpoint: e => {
						return t = e.Friendships.fetchFollowing, (e, a) => {
							let {
								cursor: n
							} = e, r = p()(e, ["cursor"]), s = r;
							return n && "object" == typeof n && (s = Object.assign({}, r, {
								[n.param]: n.id
							})), t(s, a)
						};
						var t
					},
					getEndpointParams: t => Object.assign({}, t, {
						user_id: e,
						type: "sms,live"
					}),
					context: "FETCH_FOLLOWING",
					perfKey: "deviceFollowingLegacy",
					formatResponse: _
				});
			var T = a("FIs5"),
				v = a("QIgh"),
				I = a("8UdT"),
				O = a("88ay"),
				A = a("Ka9G"),
				L = Object.assign({}, Object(v.a)({
					tweetDismissable: !0
				}), {
					[I.b.User]: Object(A.a)({
						decoration: O.c
					})
				}),
				k = a("3XMw"),
				P = a.n(k),
				x = a("tI3i"),
				F = a.n(x),
				R = a("fTQJ"),
				D = a("7FtF");
			const N = {
					page: "settings",
					section: "device_following"
				},
				j = P.a.e6b2d3de,
				M = P.a.fd6f8a70,
				B = P.a.a820d092,
				U = P.a.i2775c58,
				H = () => s.createElement(T.a, {
					header: j,
					message: M
				});
			class K extends s.Component {
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					e(N), t(N)
				}
				render() {
					const {
						loggedInUserId: e
					} = this.context, {
						location: t
					} = this.props;
					F()(!!e, "loggedInUserId must be defined");
					const a = C(e);
					return s.createElement(D.a, {
						location: t,
						title: U
					}, s.createElement(R.a, {
						entryConfiguration: L,
						loadingAccessibilityLabel: B,
						module: a,
						renderEmptyState: H,
						title: U
					}))
				}
			}
			r()(K, "contextType", o.a);
			t.default = Object(h.c)(N)(d(K))
		},
		EyIn: function(e, t, a) {
			"use strict";
			a.d(t, "e", (function() {
				return l
			})), a.d(t, "f", (function() {
				return d
			})), a.d(t, "c", (function() {
				return S
			})), a.d(t, "d", (function() {
				return y
			})), a.d(t, "b", (function() {
				return h
			})), a.d(t, "a", (function() {
				return w
			})), a.d(t, "g", (function() {
				return C
			}));
			var n = a("9OUN");
			var r = a("Ssj5"),
				s = (a("IAdD"), a("oEOe")),
				o = a("kGix");
			const i = s.a("rweb/trends", "FETCH_TRENDS_LOCATIONS"),
				c = {
					fetchStatus: o.a.NONE,
					trendsLocations: []
				};
			const l = e => e.trends.locations.trendsLocations,
				d = e => e.trends.locations.fetchStatus,
				h = e => (t, a, {
					api: n
				}) => s.b(t, {
					params: e,
					request: n.Settings.fetchPlaceTrendsLocations
				})({
					actionTypes: i,
					context: "FETCH_TRENDS_LOCATIONS"
				});
			a("JtPf");
			var u = a("LdEA"),
				m = a.n(u),
				p = a("RqPI"),
				g = a("YeIG"),
				b = a("BxsD");
			const f = s.a("rweb/trends", "UPDATE_TRENDS_SETTINGS"),
				E = s.a("rweb/trends", "FETCH_TRENDS_SETTINGS"),
				_ = {
					settings: {},
					fetchStatus: o.a.NONE
				};
			const S = e => e.trends.settings && e.trends.settings.settings,
				y = e => e.trends.settings && e.trends.settings.fetchStatus,
				w = () => (e, t) => y(t()) === o.a.LOADED ? Promise.resolve() : e((e, t, {
					api: a
				}) => p.e(t()) ? s.b(e, {
					request: a.Settings.fetchPlaceTrendSettings
				})({
					actionTypes: E,
					context: "FETCH_TRENDS_SETTINGS"
				}) : Promise.resolve()),
				C = e => (t, a, {
					api: n
				}) => {
					if (Object(g.a)(e)) return Promise.resolve();
					const r = m()(e, ["places"]),
						o = Object.assign({}, r);
					e.places && e.places.length && (o.places = e.places.map(e => e.place_id));
					return s.b(t, {
						params: o,
						request: n.Settings.updatePlaceTrendSettings
					})({
						actionTypes: f,
						context: "UPDATE_TRENDS_SETTINGS",
						meta: e
					}).then(() => t(Object(b.h)()))
				},
				T = {
					settings: function(e = _, t) {
						switch (t.type) {
							case E.REQUEST:
								return Object.assign({}, e, {
									fetchStatus: o.a.LOADING
								});
							case E.SUCCESS:
								return Object.assign({}, e, {
									settings: Object.assign({}, e.settings, t.payload),
									fetchStatus: o.a.LOADED
								});
							case f.SUCCESS:
								return Object.assign({}, e, {
									settings: Object.assign({}, e.settings, t.meta),
									fetchStatus: o.a.LOADED
								});
							case E.FAILURE:
								return Object.assign({}, e, {
									fetchStatus: o.a.FAILED
								});
							default:
								return e
						}
					},
					locations: function(e = c, t) {
						switch (t.type) {
							case i.REQUEST:
								return Object.assign({}, e, {
									fetchStatus: o.a.LOADING
								});
							case i.FAILURE:
								return Object.assign({}, e, {
									fetchStatus: o.a.FAILED
								});
							case i.SUCCESS:
								return t.payload ? Object.assign({}, e, {
									trendsLocations: t.payload,
									fetchStatus: o.a.LOADED
								}) : e;
							default:
								return e
						}
					}
				},
				v = Object(n.c)(T);
			r.a.register({
				trends: v
			})
		},
		LXAX: function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return d
			})), a.d(t, "a", (function() {
				return h
			}));
			a("IAdD");
			var n = a("XMGw"),
				r = a("Ssj5"),
				s = a("oEOe");
			const o = n.a + "/usernames",
				i = "rweb/" + o,
				c = Object(s.a)(i, "FETCH_USERNAMES"),
				l = {
					isLoaded: !1
				};
			const d = e => e[o],
				h = e => (t, a, {
					api: n
				}) => Object(s.b)(t, {
					params: e,
					request: n.Settings.usernameAvailable
				})({
					actionTypes: c,
					context: "FETCH_SETTINGS_USERNAME_AVAILABLE",
					meta: {
						username: e.username
					}
				}),
				u = `${i}/${"CLEAR_USERNAMES"}`;
			r.a.register({
				[o]: function(e = l, t = {}) {
					switch (t.type) {
						case c.REQUEST:
							return Object.assign({}, e, {
								isLoading: !0
							});
						case c.FAILURE:
							return Object.assign({}, e, {
								isLoading: !1
							});
						case c.SUCCESS:
							return Object.assign({}, e, t.payload, {
								username: t.meta.username,
								isLoading: !1
							});
						case u:
							return {
								isLoading: !1
							};
						default:
							return e
					}
				}
			})
		},
		La9P: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "PreferencesPage", (function() {
				return y
			}));
			var n = a("ERkP"),
				r = a("kPZX"),
				s = a("rxPX"),
				o = a("0KEI");
			var i = Object(s.a)().propsFromState(() => ({
					browserPushAllowed: r.g
				})).propsFromActions(() => ({
					createLocalApiErrorHandler: Object(o.d)("SETTINGS_PREFERENCES_SCREEN")
				})),
				c = a("3XMw"),
				l = a.n(c),
				d = a("yoO3"),
				h = a("7JQg"),
				u = a("7FtF"),
				m = a("xHsv"),
				p = a("csss");
			const g = l.a.b96cf52d,
				b = l.a.hee41732,
				f = l.a.e75f25a8,
				E = l.a.bcd81cab,
				_ = l.a.da867c58,
				S = l.a.i859a9d3;

			function y({
				browserPushAllowed: e,
				location: t
			}) {
				return n.createElement(h.b, {
					data: {
						context: "settings_revamp"
					},
					namespace: {
						page: "settings",
						section: "preferences"
					}
				}, n.createElement(d.a, null, n.createElement(u.a, {
					location: t,
					title: E
				}, n.createElement(m.a, {
					description: _,
					learnMoreLabel: S,
					learnMoreLink: "https://help.twitter.com/managing-your-account/notifications-on-mobile-devices",
					withBottomBorder: !0
				}), e ? n.createElement(p.a, {
					label: b,
					link: "/settings/push_notifications"
				}) : null, n.createElement(p.a, {
					label: g,
					link: "/settings/sms_notifications"
				}), n.createElement(p.a, {
					label: f,
					link: "/settings/email_notifications",
					withBottomBorder: !1
				}))))
			}
			const w = i(y);
			t.default = w
		},
		LdZt: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SmsNotificationsScreen", (function() {
				return R
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = a("vEo5"),
				c = a("oEGd"),
				l = a("0KEI"),
				d = a("hqKg"),
				h = a("RgK2"),
				u = a.n(h),
				m = a("G6rE"),
				p = a("k49u");
			const g = Object(d.createSelector)(i.selectSmsFetchStatus, e => !Object(p.c)(i.selectSmsFetchError(e) || u.a, p.a.MobileSettingsNoDevicesFound), e => !!(m.e.selectLoggedInUser(e) || {}).verified, i.selectSmsSettings, i.selectSmsTemplate, (e, t, a, n, r) => ({
					fetchStatus: e,
					isRetryableError: t,
					isVerified: a,
					smsSettings: n,
					smsTemplate: r
				})),
				b = {
					createLocalApiErrorHandler: Object(l.d)("SETTINGS_NOTIFICATIONS_SMS_SCREEN"),
					fetchSmsSettings: i.fetchSmsSettings,
					googleAnalyticsPageView: o.a,
					scribeAction: o.c,
					scribePageImpression: o.d,
					updateSmsNotificationSettings: i.updateSmsNotificationSettings
				};
			var f = Object(c.g)(g, b),
				E = a("v//M"),
				_ = a("vTtz"),
				S = a("7FtF"),
				y = a("iCwC"),
				w = a("MWbm"),
				C = a("csss"),
				T = a("t62R"),
				v = a("FIs5"),
				I = a("3XMw"),
				O = a.n(I);
			const A = O.a.b96cf52d,
				L = O.a.c7d36299,
				k = O.a.bdc43b51,
				P = O.a.df086319,
				x = O.a.ca1c1d59,
				F = {
					page: "settings",
					section: "sms_notifications"
				};
			class R extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_render", () => {
						const {
							isVerified: e,
							scribeAction: t,
							smsSettings: a,
							smsTemplate: n
						} = this.props;
						return s.createElement(w.a, null, s.createElement(C.a, {
							label: L,
							link: "/settings/phone",
							withBottomBorder: !1
						}), s.createElement(_.a, {
							currentSettings: a,
							isVerified: e,
							onChange: this._handleSettingsChanged,
							scribeAction: t,
							scribeNamespace: F,
							template: n
						}), s.createElement(T.c, {
							color: "gray600",
							size: "small",
							style: y.a.infoText
						}, s.createElement(O.a.I18NFormatMessage, {
							$i18n: "b2de2130"
						}, s.createElement(T.c, {
							link: "https://support.twitter.com/articles/110250"
						}, O.a.ad273880))))
					}), r()(this, "_handleFetch", () => {
						const {
							fetchSmsSettings: e,
							createLocalApiErrorHandler: t
						} = this.props;
						e().catch(t())
					}), r()(this, "_handleSettingsChanged", e => {
						const {
							createLocalApiErrorHandler: t,
							updateSmsNotificationSettings: a
						} = this.props;
						a(e).catch(t({
							showToast: !0
						}))
					})
				}
				UNSAFE_componentWillMount() {
					this._handleFetch()
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					t(F), e(F)
				}
				render() {
					const {
						fetchStatus: e,
						isRetryableError: t,
						location: a
					} = this.props;
					return s.createElement(S.a, {
						location: a,
						title: A
					}, s.createElement(E.a, {
						fetchStatus: e,
						onRequestRetry: this._handleFetch,
						render: this._render,
						renderFailure: this._renderDeviceNotFound,
						retryable: t
					}))
				}
				_renderDeviceNotFound() {
					return s.createElement(v.a, {
						buttonLink: "/settings/phone",
						buttonText: x,
						header: k,
						message: P
					})
				}
			}
			t.default = f(R)
		},
		NCPH: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "ApplicationDetailPage", (function() {
				return Q
			}));
			a("jQ/y"), a("IAdD"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = (a("WNMA"), a("dZRF")),
				i = a("oEGd"),
				c = a("0KEI"),
				l = a("hqKg"),
				d = a("zh9S");
			const h = Object(l.createSelector)((e, t) => t.match.params.appId, o.d, (e, t) => o.a.selectAppsById(e, t.match.params.appId), (e, t, a) => ({
					appId: e,
					fetchStatus: t,
					details: a
				})),
				u = {
					createLocalApiErrorHandler: Object(c.d)("APPLICATION_DETAIL"),
					fetchApplication: o.c,
					revokeApplication: o.a.revokeApplication,
					scribeAction: d.c
				};
			var m = Object(i.g)(h, u),
				p = a("wrlS"),
				g = a("v//M"),
				b = a("3XMw"),
				f = a.n(b),
				E = a("yoO3"),
				_ = a("jtO7"),
				S = a("MWbm");
			const y = f.a.c05e6984,
				w = f.a.ef1d3dcc;
			class C extends s.PureComponent {
				constructor(...e) {
					super(...e), r()(this, "_handleRevokeApp", () => {
						this.props.onRevoke(this.props.token)
					})
				}
				render() {
					const {
						revoked: e,
						reportApplicationHref: t
					} = this.props;
					return s.createElement(S.a, null, e ? s.createElement(_.a, {
						color: "primary",
						label: w,
						link: t
					}) : s.createElement(_.a, {
						color: "red500",
						label: y,
						onPress: this._handleRevokeApp
					}))
				}
			}
			var T = a("7JQg"),
				v = a("7FtF"),
				I = a("prCu"),
				O = a("jm1/"),
				A = a("FIs5"),
				L = a("csss"),
				k = a("t62R"),
				P = a("0yYu"),
				x = a("6vad"),
				F = a("o1YB"),
				R = a("htQn"),
				D = a("U+bB");
			const N = f.a.g8d1b99b,
				j = f.a.ff950ce6,
				M = f.a.b2347f7b,
				B = f.a.e1fda16d,
				U = f.a.da1201c6,
				H = f.a.gb8d09b9,
				K = f.a.g6dc09af,
				V = f.a.a6e6e897,
				G = f.a.cde3b9ae,
				W = f.a.g0d78139,
				z = f.a.c9b35b9e,
				q = f.a.e0191264,
				Y = f.a.b73e1e89,
				X = {
					page: "settings",
					section: "application_detail"
				};
			class Q extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_fsSettingsRevamp", p.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "_handleRevokeApp", e => {
						this._revokeApplication(e), this._scribeAction("revoke_access")
					}), r()(this, "_handleUnrevokeApp", e => {
						this._revokeApplication(e), this._scribeAction("unrevoke_access")
					}), r()(this, "_handleRetry", () => {
						this._fetchApp()
					}), r()(this, "_fetchApp", () => {
						const {
							appId: e,
							createLocalApiErrorHandler: t,
							fetchApplication: a
						} = this.props;
						a(e).catch(t({
							showToast: !0
						}))
					}), r()(this, "_render", () => {
						const {
							details: e
						} = this.props, t = e[0];
						if (!t) return s.createElement(A.a, {
							header: B,
							message: U
						});
						const a = {
							app_id: t.app_id,
							app_name: t.name
						};
						return s.createElement(S.a, null, s.createElement(L.a, {
							description: t.organization,
							label: t.name,
							thumbnail: s.createElement(D.a, {
								accessibilityLabel: "",
								source: t.img_url,
								style: O.a.avatar
							})
						}), t.organization_url ? s.createElement(_.a, {
							color: "primary",
							label: t.organization_url,
							link: t.organization_url
						}) : null, s.createElement(S.a, {
							style: O.a.itemContainer
						}, s.createElement(k.c, {
							color: "gray600",
							size: "small"
						}, t.description)), s.createElement(P.a, null), s.createElement(x.b, {
							text: K
						}), e.map(e => s.createElement(S.a, {
							key: e.token
						}, s.createElement(F.a, {
							label: this._renderPermissions(e) || ""
						}), this._renderAdsPermission(e), this._renderEmailPermission(e), s.createElement(S.a, {
							style: [O.a.itemContainer, O.a.bottomBorder]
						}, s.createElement(k.c, null, this._renderApprovalDate(e.approved))), e.ios ? null : s.createElement(C, {
							onRevoke: this._handleRevokeApp,
							onUnrevoke: this._handleUnrevokeApp,
							reportApplicationHref: "https://support.twitter.com/forms/platform?" + Object(I.stringify)(a),
							revoked: !!e.revoked,
							token: e.token
						}))), t.ios ? s.createElement(R.a, {
							link: "https://support.twitter.com/articles/20170805",
							style: [O.a.itemContainer, O.a.center]
						}, s.createElement(k.c, {
							color: "link"
						}, Y)) : null)
					})
				}
				UNSAFE_componentWillMount() {
					this._fetchApp()
				}
				_renderPermissions(e) {
					return e.can_read_dms ? W : e.can_write ? G : e.can_read ? V : null
				}
				_renderEmailPermission(e) {
					return e.email_access ? s.createElement(F.a, {
						label: H
					}) : null
				}
				_renderAdsPermission(e) {
					return e.has_ads_read_write_access ? s.createElement(F.a, {
						label: q
					}) : e.has_ads_read_access ? s.createElement(F.a, {
						label: z
					}) : null
				}
				_renderApprovalDate(e) {
					const t = new Date(Number(e)),
						a = j({
							date: N(t)
						});
					return s.createElement("time", {
						dateTime: t.toISOString()
					}, a)
				}
				_revokeApplication(e) {
					const {
						createLocalApiErrorHandler: t,
						revokeApplication: a
					} = this.props;
					a(e).catch(t({
						showToast: !0
					}))
				}
				_scribeAction(e) {
					const {
						scribeAction: t
					} = this.props;
					t(Object.assign({}, X, {
						component: "oauth_app",
						action: "click",
						element: e
					}), this._fsSettingsRevamp ? {
						context: "settings_revamp"
					} : void 0)
				}
				render() {
					const {
						fetchStatus: e,
						details: t,
						location: a
					} = this.props, n = t[0], r = n ? n.name : "";
					return s.createElement(T.b, {
						data: this._fsSettingsRevamp ? {
							context: "settings_revamp"
						} : void 0,
						namespace: X
					}, s.createElement(E.a, null, s.createElement(v.a, {
						location: a,
						title: r
					}, s.createElement(g.a, {
						accessibilityLabel: M,
						fetchStatus: e,
						onRequestRetry: this._handleRetry,
						render: this._render
					}))))
				}
			}
			t.default = m(Q)
		},
		NTtI: function(e, t, a) {
			"use strict";
			a("IAdD");
			var n = a("ERkP"),
				r = a("Lsrn"),
				s = a("k/Ka");
			const o = (e = {}) => Object(s.a)("svg", Object.assign({}, e, {
				style: [r.a.root, e.style],
				viewBox: "0 0 200 200"
			}), n.createElement("g", null, n.createElement("circle", {
				cx: "100",
				cy: "100",
				fill: "#97E3FF",
				r: "100"
			}), n.createElement("path", {
				d: "M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z",
				fill: "#005FD1"
			}), n.createElement("path", {
				d: "M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z",
				fill: "#1DA1F2"
			}), n.createElement("ellipse", {
				cx: "123.283",
				cy: "100.225",
				fill: "#97E3FF",
				rx: "6.567",
				ry: "45.075"
			}), n.createElement("path", {
				d: "M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z",
				fill: "#71C9F8"
			}), n.createElement("path", {
				d: "M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267",
				fill: "#005FD1"
			}), n.createElement("path", {
				d: "M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z",
				fill: "#1DA1F2"
			})));
			o.metadata = {
				width: 200,
				height: 200
			}, t.a = o
		},
		Oib4: function(e, t, a) {
			"use strict";
			a("IAdD");
			var n = a("ERkP"),
				r = a("Lsrn"),
				s = a("k/Ka");
			const o = (e = {}) => Object(s.a)("svg", Object.assign({}, e, {
				style: [r.a.root, e.style],
				viewBox: "0 0 24 24"
			}), n.createElement("g", null, n.createElement("path", {
				d: "M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm.025 16.468c-.708 0-1.28-.574-1.28-1.28 0-.71.572-1.282 1.28-1.282.708 0 1.28.573 1.28 1.28.002.708-.57 1.282-1.28 1.282zM14.47 7.636l-1.815 6.098c-.063.212-.258.357-.48.357h-.298c-.222 0-.416-.145-.48-.356L9.583 7.636c-.045-.152-.016-.316.08-.442.093-.127.24-.2.4-.2h3.927c.157 0 .306.073.4.2.094.126.124.29.08.442z"
			})));
			o.metadata = {
				width: 24,
				height: 24
			}, t.a = o
		},
		PCpk: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "TemporaryPasswordScreen", (function() {
				return B
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = (a("IAdD"), a("kGix")),
				i = a("XMGw"),
				c = a("Ssj5"),
				l = a("oEOe");
			const d = `rweb/${i.a}/temporaryPassword`,
				h = Object(l.a)(d, "FETCH_TEMPORARY_PASSWORD"),
				u = {
					fetchStatus: o.a.NONE
				};
			c.a.register({
				temporaryPassword: function(e = u, t) {
					switch (t.type) {
						case h.REQUEST:
							return Object.assign({}, e, {
								fetchStatus: o.a.LOADING
							});
						case h.SUCCESS: {
							const a = t.payload && t.payload.temporary_password;
							return Object.assign({}, e, {
								temporaryPassword: a,
								fetchStatus: o.a.LOADED
							})
						}
						case h.FAILURE:
							return Object.assign({}, e, {
								fetchStatus: o.a.FAILED
							});
						default:
							return e
					}
				}
			});
			var m = a("1YZw"),
				p = a("oEGd"),
				g = a("0KEI"),
				b = a("hqKg");
			const f = Object(b.createSelector)(e => e.temporaryPassword.temporaryPassword, e => e.temporaryPassword.fetchStatus, (e, t) => ({
					temporaryPassword: e,
					fetchStatus: t
				})),
				E = {
					addToast: m.b,
					createLocalApiErrorHandler: Object(g.d)("SETTINGS_TEMPORARY_PASSWORD_SCREEN"),
					fetchTemporaryPassword: () => (e, t, {
						api: a
					}) => Object(l.b)(e, {
						request: a.Settings.fetchTemporaryPassword
					})({
						actionTypes: h,
						context: "FETCH_TEMPORARY_PASSWORD"
					})
				};
			var _ = Object(p.g)(f, E),
				S = a("7JQg"),
				y = a("v//M");
			a("WNMA");
			var w = a("3XMw"),
				C = a.n(w),
				T = a("yoO3"),
				v = a("7FtF"),
				I = a("XUJi"),
				O = a("t62R"),
				A = a("/yvb"),
				L = a("atVN"),
				k = a("CaKu"),
				P = a("MWbm");
			const x = C.a.j2327f80,
				F = C.a.fbfeaf8e,
				R = C.a.h4a8bd11,
				D = C.a.f88553c8,
				N = C.a.g247dc1b,
				j = C.a.f2d47b4d,
				M = C.a.d70fceac;
			class B extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_renderContent", () => {
						const {
							temporaryPassword: e
						} = this.props;
						return s.createElement(s.Fragment, null, s.createElement(P.a, {
							style: I.a.centeredContainer
						}, s.createElement(O.c, {
							align: "center",
							size: "jumbo",
							weight: "bold"
						}, e ? ((t = e).match(/.{1,4}/g) || [t]).join(" ") : null)), k.a.isAvailable() ? s.createElement(P.a, {
							style: I.a.centeredContainer
						}, s.createElement(A.a, {
							alignContent: "center",
							onPress: this._handleCopy,
							type: "primary"
						}, R)) : null, s.createElement(P.a, {
							style: I.a.centeredContainer
						}, s.createElement(A.a, {
							alignContent: "center",
							onPress: this._handleGenerate,
							type: "text"
						}, F)));
						var t
					}), r()(this, "_handleCopy", () => {
						const {
							addToast: e,
							temporaryPassword: t
						} = this.props;
						t && (k.a.setString(t), e({
							text: D
						}))
					}), r()(this, "_handleGenerate", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchTemporaryPassword: t
						} = this.props;
						t().catch(e())
					})
				}
				componentDidMount() {
					this._handleGenerate()
				}
				render() {
					const {
						fetchStatus: e,
						location: t
					} = this.props;
					return s.createElement(T.a, null, s.createElement(v.a, {
						location: t,
						title: x
					}, s.createElement(L.a, null, s.createElement(O.c, {
						color: "gray600"
					}, j)), s.createElement(L.a, null, s.createElement(O.c, {
						color: "gray600"
					}, M)), s.createElement(y.a, {
						accessibilityLabel: N,
						fetchStatus: e,
						onRequestRetry: this._handleGenerate,
						render: this._renderContent
					})))
				}
			}
			t.default = Object(S.c)({
				page: "settings",
				section: "temporary_password"
			})(_(B))
		},
		PK8P: function(e, t, a) {
			"use strict";
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("k49u"),
				i = a("oEGd"),
				c = a("0KEI"),
				l = a("hqKg"),
				d = (a("IAdD"), a("kGix")),
				h = a("XMGw"),
				u = a("Ssj5"),
				m = a("oEOe");
			const p = `rweb/${h.a}/verifyPassword`,
				g = Object(m.a)(p, "VERIFY_PASSWORD"),
				b = {
					fetchStatus: d.a.NONE
				};
			u.a.register({
				verifyPassword: function(e = b, t = {}) {
					switch (t.type) {
						case g.REQUEST:
							return Object.assign({}, e, {
								fetchStatus: d.a.LOADING
							});
						case g.SUCCESS:
							return Object.assign({}, e, {
								fetchStatus: d.a.LOADED
							});
						case g.FAILURE:
							return Object.assign({}, e, {
								error: t.payload,
								fetchStatus: d.a.FAILED
							});
						default:
							return e
					}
				}
			});
			const f = Object(l.createSelector)(e => e.verifyPassword.fetchStatus, e => ({
					verifyPasswordFetchStatus: e
				})),
				E = {
					verifyPassword: e => (t, a, {
						api: n
					}) => Object(m.b)(t, {
						params: {
							password: e
						},
						request: n.Settings.verifyPassword
					})({
						actionTypes: g,
						context: "VERIFY_PASSWORD"
					}),
					createLocalApiErrorHandler: Object(c.d)("PASSWORD_GATEWAY")
				};
			var _ = Object(i.g)(f, E, null, {
					pure: !1
				}),
				S = a("v//M"),
				y = a("3XMw"),
				w = a.n(y),
				C = a("iCwC"),
				T = a("MWbm"),
				v = a("t62R"),
				I = a("6vad"),
				O = a("p+r5"),
				A = a("mw9i"),
				L = a("/yvb"),
				k = a("rHpw");
			const P = w.a.fe36fe1f,
				x = w.a.dec3c9b8,
				F = w.a.hccd9dbd,
				R = w.a.d1091f50,
				D = w.a.g9677c6d,
				N = w.a.c8cb0b4c;
			class j extends s.Component {
				constructor(e, t) {
					super(e, t), r()(this, "_handlePasswordSubmit", () => {
						const {
							createLocalApiErrorHandler: e,
							verifyPassword: t
						} = this.props, {
							password: a
						} = this.state;
						"" !== a && t(a).then(() => {
							this.setState({
								password: "",
								verificationRequired: !1
							}), this._makeFetch()
						}).catch(e({
							[o.a.InvalidCurrentPassword]: {
								customAction: () => this.setState({
									passwordError: N
								})
							},
							showToast: !0
						}))
					}), r()(this, "_makeFetch", () => {
						const {
							createLocalApiErrorHandler: e,
							fetch: t
						} = this.props;
						t().then(() => {
							this.setState({
								verificationRequired: !1
							})
						}).catch(e({
							[o.a.PasswordVerificationRequired]: {
								customAction: () => {
									this.setState({
										verificationRequired: !0
									})
								}
							},
							showToast: !1
						}))
					}), r()(this, "_handleFetch", this._makeFetch), r()(this, "_handleChange", e => {
						this.setState({
							passwordError: void 0,
							password: e.target.value
						})
					}), this.state = {
						password: ""
					}
				}
				componentDidMount() {
					this._makeFetch()
				}
				componentDidUpdate(e) {
					e.fetchStatus === d.a.LOADED && this.props.fetchStatus === d.a.NONE && this._makeFetch()
				}
				_renderPasswordPrompt() {
					const {
						titleHeader: e
					} = this.props, {
						passwordError: t
					} = this.state, a = s.createElement(v.c, {
						link: {
							pathname: "https://twitter.com/account/begin_password_reset",
							external: !0,
							openInSameFrame: !0
						}
					}, R);
					return s.createElement(s.Fragment, null, e ? s.createElement(I.b, {
						text: e
					}) : null, s.createElement(T.a, {
						style: [C.a.viewItem, C.a.bottomBorder]
					}, s.createElement(v.c, {
						color: "gray600",
						size: "small"
					}, F)), s.createElement(O.a, {
						errorText: t,
						helperText: a,
						invalid: !!t,
						label: x,
						name: "current_password",
						onChange: this._handleChange,
						onSubmitEditing: this._handlePasswordSubmit,
						type: "password",
						value: this.state.password
					}), s.createElement(A.a, {
						style: M.buttonContainer
					}, s.createElement(L.a, {
						disabled: !1,
						onPress: this._handlePasswordSubmit,
						style: M.button,
						type: "primary"
					}, D)))
				}
				render() {
					const {
						fetchStatus: e,
						render: t
					} = this.props, {
						verificationRequired: a
					} = this.state, n = e === d.a.FAILED && a;
					return s.createElement(s.Fragment, null, n ? this._renderPasswordPrompt() : s.createElement(S.a, {
						fetchStatus: e,
						onRequestRetry: this._handleFetch,
						render: t
					}))
				}
			}
			r()(j, "defaultProps", {
				titleHeader: P
			});
			const M = k.a.create(e => ({
				buttonContainer: {
					flexDirection: "row",
					justifyContent: "flex-end",
					marginVertical: 0,
					marginHorizontal: "auto",
					paddingBottom: e.spaces.xSmall,
					paddingHorizontal: 0
				},
				button: {
					marginVertical: 0,
					marginHorizontal: e.componentDimensions.gutterHorizontal
				}
			}));
			t.a = _(j)
		},
		QJRq: function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "b", (function() {
				return r
			}));
			const n = Object.freeze({
					INTAKE_PROGRESS: "intake_progress",
					NOT_ELIGIBLE: "not_eligible",
					NOT_STARTED: "not_started",
					VERIFICATION_DENIED: "verification_denied",
					VERIFICATION_PENDING: "verification_pending",
					VERIFIED: "verified"
				}),
				r = (Object.freeze({
					PROFILE_COMPLETION: "profile_completion",
					ACCOUNT_SECURITY: "account_security"
				}), Object.freeze({
					IN_COMPLIANCE: "in_compliance",
					OUT_OF_COMPLIANCE: "out_of_compliance"
				}))
		},
		Rdmj: function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return z
			}));
			a("kYxP");
			var n = a("97Jx"),
				r = a.n(n),
				s = a("KEM+"),
				o = a.n(s),
				i = a("ERkP"),
				c = a("PFE4"),
				l = a("oEGd");
			const d = {
				cleanupBlockList: c.c
			};
			var h = Object(l.b)(d),
				u = a("7JQg"),
				m = a("PnFR"),
				p = a("8UdT"),
				g = (a("IAdD"), a("EbOo")),
				b = a("/yvb"),
				f = a("zh9S"),
				E = a("1YZw"),
				_ = a("0KEI"),
				S = a("hqKg"),
				y = a("G6rE");
			const w = Object(S.createSelector)((e, t) => y.e.select(e, t.userId), e => ({
					user: e
				})),
				C = {
					addToast: E.b,
					block: y.e.block,
					createLocalApiErrorHandler: Object(_.d)("UNBLOCK_BUTTON"),
					scribeAction: f.c,
					unblock: y.e.unblock
				};
			var T = Object(l.g)(w, C),
				v = a("3XMw"),
				I = a.n(v),
				O = a("Rp9C"),
				A = a("u0B7");
			const L = I.a.if594962,
				k = I.a.a6450e83,
				P = I.a.i2b9632d,
				x = I.a.a9fd20be;
			class F extends i.Component {
				constructor(...e) {
					super(...e), o()(this, "_handleUnblockToggle", () => {
						const {
							addToast: e,
							block: t,
							createLocalApiErrorHandler: a,
							unblock: n,
							user: r,
							userId: s
						} = this.props;
						r && r.blocking ? n(s).then(t => {
							e({
								text: P
							}), this._scribeAction("unblock")
						}, a(A.a)) : t(s).then(t => {
							e({
								text: x
							}), this._scribeAction("block")
						}, a(g.a))
					})
				}
				render() {
					const {
						user: e
					} = this.props;
					if (e) {
						const t = e.blocking ? L : k;
						return i.createElement(b.a, {
							accessibilityLabel: t,
							onPress: this._handleUnblockToggle,
							size: "normal",
							type: e.blocking ? "destructive" : "destructiveSecondary"
						}, t)
					}
					return null
				}
				_scribeAction(e) {
					const {
						scribeAction: t,
						scribeNamespace: a,
						user: n
					} = this.props, r = n ? [O.a.getUserItem(n)] : [];
					t(Object.assign({}, a, {
						action: e
					}), {
						items: r
					})
				}
			}
			var R = Object(u.c)()(T(F)),
				D = a("Ka9G");
			var N = {
					[p.b.User]: Object(D.a)({
						decoration: ({
							userId: e
						}) => i.createElement(R, {
							userId: e
						})
					}),
					[p.b.TimelineCursor]: m.a
				},
				j = a("yoO3"),
				M = a("fTQJ"),
				B = a("I7xG"),
				U = a("t62R"),
				H = a("FIs5");
			const K = I.a.a5f32aa2,
				V = I.a.ef731b13,
				G = I.a.i859a9d3;
			class W extends i.Component {
				constructor(...e) {
					super(...e), o()(this, "_getLegacyModule", Object(B.a)(this, e => e.blockType, e => Object(c.b)(e))), o()(this, "_getEmptyStateRenderer", Object(B.a)(this, e => e.blockType, e => e.supportUrl, e => e.emptyStateTitle, e => e.emptyStateMessage, (e, t, a, n) => () => {
						const e = i.createElement("div", null, n, " ", i.createElement(U.c, {
							link: t
						}, G));
						return i.createElement(H.a, {
							header: a,
							message: e
						})
					}))
				}
				componentWillUnmount() {
					const {
						cleanupBlockList: e
					} = this.props;
					e(this._getLegacyModule())
				}
				render() {
					return i.createElement(j.a, null, i.createElement(M.a, {
						entryConfiguration: N,
						loadingAccessibilityLabel: V,
						module: this._getLegacyModule(),
						renderEmptyState: this._getEmptyStateRenderer(),
						title: K
					}))
				}
			}
			const z = ({
				scribeNamespace: e,
				blockType: t,
				emptyStateTitle: a,
				emptyStateMessage: n,
				supportUrl: s
			}) => Object(u.c)(e)(h(e => i.createElement(W, r()({}, e, {
				blockType: t,
				emptyStateMessage: n,
				emptyStateTitle: a,
				supportUrl: s
			}))))
		},
		TEoO: function(e, t, a) {
			"use strict";
			var n = a("LdEA"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("5UID"),
				i = a("3GUV"),
				c = a("iBK2");
			const l = s.createElement(i.a, null),
				d = e => {
					let {
						accessibilityTitle: t
					} = e, a = r()(e, ["accessibilityTitle"]);
					const n = s.createElement(c.b, a);
					return t ? s.createElement(o.a, {
						title: t
					}, n) : n
				};
			d.defaultProps = {
				footer: l
			}, t.a = d
		},
		TetP: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SettingsTrendsScreen", (function() {
				return K
			}));
			a("IAdD"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = a("P1r1"),
				c = a("EyIn"),
				l = a("oEGd"),
				d = a("0KEI"),
				h = a("hqKg"),
				u = a("+OgG");
			const m = Object(h.createSelector)(i.f, c.d, c.c, (e, t, a) => ({
					woeTrendSettings: e,
					placeTrendSettingsFetchStatus: t,
					placeTrendSettings: a
				})),
				p = {
					createLocalApiErrorHandler: Object(d.d)("SETTINGS_TRENDS_SCREEN"),
					googleAnalyticsPageView: o.a,
					scribePageImpression: o.d,
					scribeAction: o.c,
					fetchPlaceTrendSettingsIfNeeded: c.a,
					updateWoeTrendSettings: u.a,
					updatePlaceTrendSettings: c.g
				};
			var g = Object(l.g)(m, p),
				b = a("wrlS"),
				f = a("v//M"),
				E = a("jHSc"),
				_ = a("3XMw"),
				S = a.n(_),
				y = a("OySi"),
				w = a("MWbm"),
				C = a("cCdp"),
				T = a("0yYu"),
				v = a("csss"),
				I = a("6vad");
			const O = S.a.bc7fd99f,
				A = S.a.c5f4befa,
				L = S.a.j018f2a1,
				k = S.a.e2f1665f,
				P = S.a.e5e88f4f,
				x = S.a.jaaa8984,
				F = S.a.i4d54b0e,
				R = S.a.df9f03c8,
				D = S.a.c6cf5c7d,
				N = S.a.a55db872,
				j = S.a.h0b5152e,
				M = S.a.dfeada5d,
				B = S.a.ac854308,
				U = S.a.d429c942,
				H = {
					page: "guide",
					section: "settings"
				};
			class K extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_usePlaceTrendSettings", b.b.isTrue("responsive_web_trends_setting_new_endpoints")), r()(this, "_policySectionUrl", b.b.getStringValue("explore_settings_trends_policy_url")), r()(this, "_handleRetry", () => {
						this._fetchPlaceTrendSettingsIfNeeded()
					}), r()(this, "_fetchPlaceTrendSettingsIfNeeded", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchPlaceTrendSettingsIfNeeded: t
						} = this.props;
						t().catch(e({
							showToast: !0
						}))
					}), r()(this, "_handleItemChanged", (e, t) => {
						const {
							createLocalApiErrorHandler: a,
							scribeAction: n,
							updateWoeTrendSettings: r,
							updatePlaceTrendSettings: s
						} = this.props, o = {
							[e]: t
						};
						this._usePlaceTrendSettings ? s(o).catch(a({
							showToast: !0
						})) : r(o).catch(a({
							showToast: !0
						})), n(Object.assign({}, H, {
							element: "personalized_trends",
							action: "toggle"
						}))
					}), r()(this, "_renderWoeContent", () => {
						const {
							woeTrendSettings: e
						} = this.props, t = e.trend_location, a = t && t[0] && t[0].name || "Worldwide";
						return s.createElement(w.a, null, s.createElement(C.a, {
							checked: e.personalized_trends,
							helpText: R,
							label: F,
							name: "personalized_trends",
							onChange: this._handleItemChanged,
							withBottomBorder: !1
						}), !e.personalized_trends && s.createElement(w.a, null, s.createElement(T.a, null), s.createElement(v.a, {
							description: a,
							label: j,
							link: "/settings/trends/location"
						})))
					}), r()(this, "_renderPlaceLoader", () => {
						const {
							placeTrendSettingsFetchStatus: e
						} = this.props;
						return s.createElement(f.a, {
							accessibilityLabel: O,
							fetchStatus: e,
							onRequestRetry: this._handleRetry,
							render: this._renderPlaceContent
						})
					}), r()(this, "_renderPlaceContent", () => {
						const {
							placeTrendSettings: e,
							location: t
						} = this.props, a = "/settings/explore" === t.pathname, n = e.places && e.places[0] && e.places[0].name, r = !a || !e.is_unified_trends, o = a ? "/settings/explore/location" : "/settings/trends/location";
						return s.createElement(w.a, null, s.createElement(I.b, {
							text: x
						}), s.createElement(C.a, {
							checked: e.use_current_location,
							helpText: P,
							label: k,
							name: "use_current_location",
							onChange: this._handleItemChanged,
							withBottomBorder: !0
						}), !e.use_current_location && s.createElement(w.a, null, s.createElement(v.a, {
							description: n,
							label: M,
							link: o
						})), r && s.createElement(s.Fragment, null, s.createElement(T.a, null), s.createElement(I.b, {
							text: N
						}), s.createElement(C.a, {
							checked: e.use_personalized_trends,
							helpText: D,
							label: F,
							name: "use_personalized_trends",
							onChange: this._handleItemChanged,
							withBottomBorder: !1
						})))
					})
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					t(H), e(H), this._usePlaceTrendSettings && this._fetchPlaceTrendSettingsIfNeeded()
				}
				render() {
					const {
						history: e,
						location: t
					} = this.props, a = "/settings/explore" === t.pathname, n = this._usePlaceTrendSettings && a ? L : A;
					return s.createElement(E.b, {
						history: e,
						title: n
					}, this._usePlaceTrendSettings ? this._renderPlaceLoader() : this._renderWoeContent(), this._policySectionUrl ? this._renderPolicySection() : null)
				}
				_renderPolicySection() {
					return s.createElement(w.a, null, s.createElement(T.a, null), s.createElement(I.b, {
						text: B
					}), s.createElement(y.a, {
						label: U,
						link: this._policySectionUrl
					}))
				}
			}
			t.default = g(K)
		},
		UbIW: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SettingsContactsScreen", (function() {
				return M
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("P1r1"),
				i = a("oEGd"),
				c = a("0KEI"),
				l = a("hqKg");
			const d = Object(l.createSelector)(o.f, e => ({
					discoverableByEmail: e.discoverable_by_email,
					discoverableByMobilePhone: e.discoverable_by_mobile_phone
				})),
				h = {
					createLocalApiErrorHandler: Object(c.d)("SETTINGS_CONTACTS_SCREEN"),
					deleteContacts: o.b,
					updateSettings: o.H
				};
			var u = Object(i.g)(d, h),
				m = a("wrlS"),
				p = a("3XMw"),
				g = a.n(p),
				b = a("yoO3"),
				f = a("7JQg"),
				E = a("7FtF"),
				_ = a("xHsv"),
				S = a("6vad"),
				y = a("cCdp"),
				w = a("0yYu"),
				C = a("csss");
			const T = g.a.fd4d9068,
				v = g.a.ab987f3b,
				I = g.a.b033248c,
				O = g.a.a904e0ee,
				A = g.a.ebc41952,
				L = g.a.f40a6338,
				k = g.a.ac9314aa,
				P = g.a.d86a220e,
				x = "https://help.twitter.com/safety-and-security/email-and-phone-discoverability-settings",
				F = g.a.ac77c66c,
				R = g.a.bbcafbd9,
				D = g.a.jadf483e,
				N = g.a.i859a9d3,
				j = {
					page: "settings",
					section: "contacts"
				};
			class M extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_fsSettingsRevamp", m.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "_handleItemChanged", (e, t) => {
						const {
							createLocalApiErrorHandler: a,
							updateSettings: n
						} = this.props;
						n({
							[e]: t
						}).catch(a({
							showToast: !0
						}))
					}), r()(this, "_handleRemoveContacts", () => {
						const {
							createLocalApiErrorHandler: e,
							deleteContacts: t
						} = this.props;
						return t().catch(e({
							showToast: !0
						}))
					})
				}
				render() {
					const {
						location: e,
						discoverableByEmail: t,
						discoverableByMobilePhone: a
					} = this.props;
					return s.createElement(f.b, {
						data: this._fsSettingsRevamp ? {
							context: "settings_revamp"
						} : void 0,
						namespace: j
					}, s.createElement(b.a, null, s.createElement(E.a, {
						location: e,
						title: T
					}, s.createElement(_.a, {
						description: v,
						withBottomBorder: !0
					}), s.createElement(S.b, {
						text: I
					}), s.createElement(_.a, {
						description: O,
						withBottomBorder: !0
					}), s.createElement(y.a, {
						checked: t,
						helpText: L,
						label: A,
						learnMoreLink: x,
						name: "discoverable_by_email",
						onChange: this._handleItemChanged
					}), s.createElement(y.a, {
						checked: a,
						helpText: P,
						label: k,
						learnMoreLink: x,
						name: "discoverable_by_mobile_phone",
						onChange: this._handleItemChanged,
						withBottomBorder: !1
					}), s.createElement(w.a, null), s.createElement(S.b, {
						text: F
					}), s.createElement(_.a, {
						description: D,
						learnMoreLabel: N,
						learnMoreLink: "https://help.twitter.com/using-twitter/upload-your-contacts-to-search-for-friends",
						withBottomBorder: !0
					}), s.createElement(C.a, {
						label: R,
						link: "/settings/contacts_dashboard",
						withBottomBorder: !1
					}))))
				}
			}
			t.default = u(M)
		},
		VaVF: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "BackupCodeScreen", (function() {
				return B
			}));
			a("WNMA"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = (a("IAdD"), a("kGix")),
				i = a("XMGw"),
				c = a("Ssj5"),
				l = a("oEOe");
			const d = `rweb/${i.a}/backupCode`,
				h = Object(l.a)(d, "FETCH_BACKUP_CODE"),
				u = {
					fetchStatus: o.a.NONE
				};
			c.a.register({
				backupCode: function(e = u, t) {
					switch (t.type) {
						case h.REQUEST:
							return Object.assign({}, e, {
								fetchStatus: o.a.LOADING
							});
						case h.SUCCESS: {
							const a = t.payload && t.payload.codes;
							return Object.assign({}, e, {
								backupCode: a && a[0],
								fetchStatus: o.a.LOADED
							})
						}
						case h.FAILURE:
							return Object.assign({}, e, {
								fetchStatus: o.a.FAILED
							});
						default:
							return e
					}
				}
			});
			var m = a("1YZw"),
				p = a("oEGd"),
				g = a("0KEI"),
				b = a("hqKg");
			const f = Object(b.createSelector)(e => e.backupCode.backupCode, e => e.backupCode.fetchStatus, (e, t) => ({
					backupCode: e,
					fetchStatus: t
				})),
				E = {
					addToast: m.b,
					createLocalApiErrorHandler: Object(g.d)("SETTINGS_BACKUP_CODE_SCREEN"),
					fetchBackupCode: () => (e, t, {
						api: a
					}) => Object(l.b)(e, {
						request: a.Settings.fetchBackupCode
					})({
						actionTypes: h,
						context: "FETCH_BACKUP_CODE"
					}),
					fetchNewBackupCode: () => (e, t, {
						api: a
					}) => Object(l.b)(e, {
						request: a.Settings.fetchNewBackupCode
					})({
						actionTypes: h,
						context: "FETCH_BACKUP_CODE"
					})
				};
			var _ = Object(p.g)(f, E),
				S = a("7JQg"),
				y = a("v//M"),
				w = a("yoO3"),
				C = a("7FtF"),
				T = a("XUJi"),
				v = a("t62R"),
				I = a("/yvb"),
				O = a("atVN"),
				A = a("CaKu"),
				L = a("MWbm"),
				k = a("3XMw"),
				P = a.n(k);
			const x = P.a.i3bb3f78,
				F = P.a.ec6a76ef,
				R = P.a.f2c3c31c,
				D = P.a.f88553c8,
				N = P.a.e8016b64,
				j = P.a.c4ca22bc,
				M = s.createElement(v.c, {
					link: "https://help.twitter.com/managing-your-account/two-factor-authentication"
				});
			class B extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_renderContent", () => {
						const {
							backupCode: e
						} = this.props;
						return s.createElement(s.Fragment, null, s.createElement(L.a, {
							style: T.a.centeredContainer
						}, s.createElement(v.c, {
							align: "center",
							size: "jumbo",
							weight: "bold"
						}, e ? ((t = e).match(/.{1,4}/g) || [t]).join(" ") : null)), A.a.isAvailable() ? s.createElement(L.a, {
							style: T.a.centeredContainer
						}, s.createElement(I.a, {
							alignContent: "center",
							onPress: this._handleCopy,
							type: "primary"
						}, R)) : null, s.createElement(L.a, {
							style: T.a.centeredContainer
						}, s.createElement(I.a, {
							alignContent: "center",
							onPress: this._handleGenerate,
							type: "text"
						}, F)));
						var t
					}), r()(this, "_handleCopy", () => {
						const {
							addToast: e,
							backupCode: t
						} = this.props;
						t && (A.a.setString(t), e({
							text: D
						}))
					}), r()(this, "_handleGenerate", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchNewBackupCode: t
						} = this.props;
						t().catch(e())
					}), r()(this, "_handleRetry", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchBackupCode: t
						} = this.props;
						t().catch(e())
					})
				}
				componentDidMount() {
					this._handleRetry()
				}
				render() {
					const {
						fetchStatus: e,
						location: t
					} = this.props;
					return s.createElement(w.a, null, s.createElement(C.a, {
						location: t,
						title: x
					}, s.createElement(O.a, null, s.createElement(v.c, {
						color: "gray600"
					}, j)), s.createElement(O.a, null, s.createElement(v.c, {
						color: "gray600"
					}, s.createElement(P.a.I18NFormatMessage, {
						$i18n: "a4455c04"
					}, s.cloneElement(M, null, P.a.ecb6fccf)))), s.createElement(y.a, {
						accessibilityLabel: N,
						fetchStatus: e,
						onRequestRetry: this._handleRetry,
						render: this._renderContent
					})))
				}
			}
			t.default = Object(S.c)({
				page: "settings",
				section: "backup_code"
			})(_(B))
		},
		W0Ti: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "ContentPreferencesPage", (function() {
				return D
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("NeAX"),
				i = a("oEGd"),
				c = a("hqKg");
			const l = Object(c.createSelector)(o.selectUserPreferences, e => ({
				personalizationSettings: e
			}));
			var d = Object(i.g)(l, {}),
				h = a("7JQg"),
				u = a("wrlS"),
				m = a("uD2z"),
				p = a("3XMw"),
				g = a.n(p),
				b = a("yoO3"),
				f = a("7FtF"),
				E = "exploreHeader",
				_ = a("6vad"),
				S = a("csss"),
				y = a("0yYu"),
				w = a("xHsv");
			const C = g.a.aeddb289,
				T = g.a.fcf3e54b,
				v = g.a.hfb77cf5,
				I = g.a.d495680d,
				O = g.a.f350f0c0,
				A = g.a.cb9bb63f,
				L = g.a.h1ef00db,
				k = u.b.isTrue("responsive_web_trends_setting_new_endpoints") ? g.a.j018f2a1 : g.a.c5f4befa,
				P = g.a.e8f57e07,
				x = g.a.e8f57e07,
				F = g.a.hfc86556,
				R = g.a.a5f32aa2;
			class D extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_contentLanguageSettingsEnabled", u.b.isTrue("content_language_setting_enabled"))
				}
				_renderPersonalizationDescription() {
					const {
						personalizationSettings: e
					} = this.props;
					return Object(m.a)(e)
				}
				render() {
					const {
						location: e
					} = this.props, t = u.b.isTrue("responsive_web_trends_setting_new_endpoints") ? "/settings/explore" : "/settings/trends";
					return s.createElement(b.a, null, s.createElement(f.a, {
						location: e,
						screenType: "primaryDetail",
						title: C
					}, s.createElement(_.b, {
						testID: E,
						text: T
					}), s.createElement(S.a, {
						label: L,
						link: "/settings/search"
					}), s.createElement(S.a, {
						label: k,
						link: t,
						withBottomBorder: !1
					}), this._contentLanguageSettingsEnabled ? s.createElement(s.Fragment, null, s.createElement(y.a, null), s.createElement(_.b, {
						text: I
					}), s.createElement(S.a, {
						label: O,
						link: "/i/flow/language_selector"
					}), s.createElement(w.a, {
						description: A
					})) : null, s.createElement(y.a, null), s.createElement(_.b, {
						text: v
					}), s.createElement(S.a, {
						label: F,
						link: "/settings/mute"
					}), s.createElement(S.a, {
						label: R,
						link: "/settings/blocked/all",
						withBottomBorder: !1
					}), s.createElement(y.a, null), s.createElement(_.b, {
						text: P
					}), s.createElement(S.a, {
						description: this._renderPersonalizationDescription(),
						label: x,
						link: "/settings/account/personalization",
						withBottomBorder: !1
					})))
				}
			}
			t.default = Object(h.c)({
				page: "settings",
				section: "timeline"
			})(d(D))
		},
		WFkI: function(e, t, a) {
			"use strict";
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("rHpw"),
				i = a("MWbm");
			class c extends s.PureComponent {
				render() {
					const {
						children: e,
						withBottomBorder: t,
						withTopBorder: a
					} = this.props;
					return s.createElement(i.a, {
						style: [t && l.bottomBorder, a && l.topBorder]
					}, e)
				}
			}
			r()(c, "defaultProps", {
				withBottomBorder: !1,
				withTopBorder: !1
			});
			const l = o.a.create(e => ({
				bottomBorder: {
					borderBottomWidth: 1,
					borderBottomStyle: "solid",
					borderBottomColor: e.colors.borderColor
				},
				topBorder: {
					borderTopWidth: 1,
					borderTopStyle: "solid",
					borderTopColor: e.colors.borderColor
				}
			}));
			t.a = c
		},
		WtWS: function(e, t, a) {
			"use strict";
			a("IAdD");
			var n = a("ERkP"),
				r = a("Lsrn"),
				s = a("k/Ka");
			const o = (e = {}) => Object(s.a)("svg", Object.assign({}, e, {
				style: [r.a.root, e.style],
				viewBox: "0 0 24 24"
			}), n.createElement("g", null, n.createElement("path", {
				d: "M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm4.086 7.698L11.744 15.6s-.354.545-.416.607c-.146.146-.338.22-.53.22s-.384-.073-.53-.22l-2.7-2.704c-.293-.293-.293-.77 0-1.06.293-.294.768-.294 1.06 0l2.048 2.05 4.155-6.365c.227-.346.693-.443 1.04-.218.345.227.443.692.216 1.038z"
			})));
			o.metadata = {
				width: 24,
				height: 24
			}, t.a = o
		},
		X1GS: function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("ERkP"),
				r = a("yoO3"),
				s = a("7JQg"),
				o = a("7FtF"),
				i = a("iCwC"),
				c = a("MWbm"),
				l = a("6vad"),
				d = a("t62R"),
				h = a("3XMw"),
				u = a.n(h);
			const m = u.a.g0ec0beb,
				p = u.a.g89f4613,
				g = {
					page: "settings",
					section: "deactivate_success"
				};
			t.default = ({
				location: e
			}) => n.createElement(s.b, {
				namespace: g
			}, n.createElement(r.a, null, n.createElement(o.a, {
				location: e,
				screenType: "primaryDetail",
				title: m
			}, n.createElement(l.b, {
				text: p
			}), n.createElement(c.a, {
				style: i.a.viewItem
			}, n.createElement(d.c, {
				color: "gray600",
				size: "small"
			}, n.createElement(u.a.I18NFormatMessage, {
				$i18n: "if2bb997"
			}))))))
		},
		X8EX: function(e, t, a) {
			"use strict";
			a.d(t, "g", (function() {
				return p
			})), a.d(t, "j", (function() {
				return g
			})), a.d(t, "h", (function() {
				return b
			})), a.d(t, "i", (function() {
				return f
			})), a.d(t, "f", (function() {
				return E
			})), a.d(t, "d", (function() {
				return _
			})), a.d(t, "e", (function() {
				return C
			})), a.d(t, "c", (function() {
				return A
			})), a.d(t, "k", (function() {
				return L
			})), a.d(t, "a", (function() {
				return k
			})), a.d(t, "b", (function() {
				return P
			})), a.d(t, "l", (function() {
				return x
			}));
			a("IAdD"), a("JtPf");
			var n = a("oEOe"),
				r = a("kGix"),
				s = a("Ssj5");
			const o = "rweb/mutedKeywords",
				i = n.a(o, "FETCH_DISCOURAGED_KEYWORDS"),
				c = n.a(o, "FETCH_MUTED_KEYWORDS"),
				l = n.a(o, "ADD_MUTED_KEYWORD"),
				d = n.a(o, "DELETE_MUTED_KEYWORD"),
				h = n.a(o, "UPDATE_MUTED_KEYWORD"),
				u = {
					defaultOptions: {
						id: "",
						keyword: "",
						mute_notifications: !0,
						mute_notifications_option: "following",
						mute_home_timeline: !0,
						time_duration: "forever"
					},
					defaultOptionsLoaded: !1,
					discouragedKeywords: [],
					fetchStatus: r.a.NONE,
					mutedKeywords: []
				};

			function m(e = u, t = {}) {
				switch (t.type) {
					case y:
					case i.SUCCESS:
						return Object.assign({}, e, {
							discouragedKeywords: t.payload.discouraged_keywords
						});
					case c.REQUEST:
						return Object.assign({}, e, {
							fetchStatus: r.a.LOADING
						});
					case c.FAILURE:
						return Object.assign({}, e, {
							error: t.payload,
							fetchStatus: r.a.FAILED
						});
					case c.SUCCESS:
						return Object.assign({}, e, {
							mutedKeywords: t.payload.muted_keywords,
							error: null,
							fetchStatus: r.a.LOADED
						});
					case l.SUCCESS:
					case d.SUCCESS:
					case h.SUCCESS:
						return Object.assign({}, e, {
							mutedKeywords: t.payload.muted_keywords
						});
					case v:
						return Object.assign({}, e, {
							defaultOptions: t.payload.default_options
						});
					case I:
						return Object.assign({}, e, {
							defaultOptionsLoaded: !0
						});
					default:
						return e
				}
			}
			const p = e => e.mutedKeywords.discouragedKeywords,
				g = e => e.mutedKeywords.mutedKeywords,
				b = e => e.mutedKeywords.fetchStatus,
				f = (e, t) => e.mutedKeywords.mutedKeywords.find(e => e.id === t),
				E = (e, t) => e.mutedKeywords.defaultOptions,
				_ = () => (e, t, {
					userPersistence: a
				}) => p(t()).length ? Promise.resolve() : a.get("rweb.mutedKeywords", 6048e5).then(n => {
					const {
						discouragedKeywords: r
					} = n || {};
					return r && r.length ? (e(w(r)), Promise.resolve()) : e(S()).then(() => a.set("rweb.mutedKeywords", {
						discouragedKeywords: p(t())
					}))
				}),
				S = (e = {}) => (t, a, {
					api: r
				}) => n.b(t, {
					params: e,
					request: r.MuteKeywordSettings.fetchDiscouragedKeywords
				})({
					actionTypes: i,
					context: "FETCH_DISCOURAGED_KEYWORDS"
				}),
				y = o + "/INIT_DISCOURAGED_KEYWORDS",
				w = e => ({
					type: y,
					payload: {
						discouraged_keywords: e
					}
				}),
				C = () => (e, t) => b(t()) === r.a.LOADED ? Promise.resolve() : e(T()),
				T = e => (t, a, {
					api: r
				}) => n.b(t, {
					params: e,
					request: r.MuteKeywordSettings.fetchMutedKeywords
				})({
					actionTypes: c,
					context: "FETCH_MUTED_KEYWORDS"
				}),
				v = o + "/SET_DEFAULT_OPTIONS",
				I = o + "/DEFAULT_OPTIONS_LOADED",
				O = e => ({
					type: v,
					payload: {
						default_options: e
					}
				}),
				A = () => (e, t, {
					userPersistence: a
				}) => t().mutedKeywords.defaultOptionsLoaded ? Promise.resolve() : a.get("rweb.mutedKeywords", 6048e5).then(t => {
					if (t && t.defaultOptions) {
						const {
							defaultOptions: a
						} = t;
						e(O(a))
					}
					e({
						type: I
					})
				}),
				L = e => (t, a, {
					userPersistence: n
				}) => (t(O(e)), n.set("rweb.mutedKeywords", {
					defaultOptions: e
				})),
				k = e => (t, a, {
					api: r
				}) => n.b(t, {
					params: e,
					request: r.MuteKeywordSettings.addMutedKeyword
				})({
					actionTypes: l,
					context: "ACTION_ADD_MUTED_KEYWORD",
					meta: {
						params: e
					}
				}),
				P = e => (t, a, {
					api: r
				}) => {
					const s = {
						ids: e.join(",")
					};
					return n.b(t, {
						params: s,
						request: r.MuteKeywordSettings.deleteMutedKeyword
					})({
						actionTypes: d,
						context: "ACTION_DELETE_MUTED_KEYWORD",
						meta: {
							ids: e
						}
					})
				},
				x = e => (t, a, {
					api: r
				}) => n.b(t, {
					params: e,
					request: r.MuteKeywordSettings.updateMutedKeyword
				})({
					actionTypes: h,
					context: "ACTION_UPDATE_MUTED_KEYWORD",
					meta: {
						params: e
					}
				});
			s.a.register({
				mutedKeywords: m
			})
		},
		XFGu: function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("PFE4"),
				r = a("Rdmj"),
				s = a("3XMw"),
				o = a.n(s);
			const i = o.a.b90c89c3,
				c = o.a.f587e41e;
			t.default = Object(r.a)({
				scribeNamespace: {
					page: "blocked",
					section: "all_blocked_accounts"
				},
				blockType: n.a.All,
				emptyStateTitle: c,
				emptyStateMessage: i,
				supportUrl: "https://support.twitter.com/articles/117063"
			})
		},
		XUJi: function(e, t, a) {
			"use strict";
			var n = a("rHpw");
			t.a = n.a.create(e => ({
				centeredContainer: {
					padding: e.spaces.xSmall,
					flexDirection: "row",
					justifyContent: "center"
				}
			}))
		},
		Y3cQ: function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var n = a("LdEA"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("V2ml"),
				i = a("rHpw"),
				c = a("MWbm");
			class l extends s.Component {
				render() {
					const e = this.props,
						{
							withBottomBorder: t = !0
						} = e,
						a = r()(e, ["withBottomBorder"]);
					return s.createElement(c.a, {
						style: [d.root, t && d.bottomBorder]
					}, s.createElement(o.a, a))
				}
			}
			const d = i.a.create(e => ({
				root: {
					backgroundColor: e.colors.cellBackground,
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				},
				bottomBorder: {
					borderBottomWidth: e.borderWidths.small,
					borderBottomStyle: "solid",
					borderBottomColor: e.colors.borderColor
				}
			}))
		},
		Y5Sz: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "bouncerEnrollmentUrl", (function() {
				return _
			})), a.d(t, "EnrollmentScreen", (function() {
				return y
			}));
			a("MvUL"), a("LJOr"), a("kYxP"), a("Cm4o");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("wvRX"),
				i = a("oEGd"),
				c = a("0KEI"),
				l = a("hqKg"),
				d = a("QK5w");
			const h = Object(l.createSelector)(d.a, (e, t) => t.location && t.location.state && t.location.state.bounce_location, o.e, (e, t, a) => ({
					canGoBack: e,
					bounceLocation: t,
					fetchStatus: a
				})),
				u = {
					createLocalApiErrorHandler: Object(c.d)("SETTINGS_LOGIN_VERIFICATION_ENROLLMENT_CONTEXT"),
					fetchLoginVerificationSettings: o.d
				};
			var m = Object(i.g)(h, u),
				p = a("kGix"),
				g = a("jHSc"),
				b = a("bPFD"),
				f = a("rHpw"),
				E = a("2qJZ");
			const _ = (e, t = window.location) => {
					const a = "https://" + (t.host === E.a ? E.a : E.b),
						n = new window.URL(`${a}${e}`),
						r = n.search ? "&" : "?";
					return n.search = `${n.search}${r}initiated_in_iframe=true`, n.href
				},
				S = (e, t, a) => e !== p.a.LOADED || !t || !a;
			class y extends s.Component {
				constructor(e) {
					super(e), r()(this, "_handleClose", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchLoginVerificationSettings: t,
							history: a
						} = this.props;
						t().catch(e());
						const n = window.history.length;
						a.go(Math.min(-1, this._initialHistoryLength - n - 1))
					}), r()(this, "_messageHandler", e => {
						const {
							data: t,
							origin: a
						} = e;
						if ((a === "https://" + E.b || a === "https://" + E.a) && t.bouncer) switch (t.event) {
							case "2fa_complete": {
								const {
									createLocalApiErrorHandler: e,
									fetchLoginVerificationSettings: t,
									history: a
								} = this.props;
								t().catch(e()), a.replace("/settings/account/login_verification/backup_code");
								break
							}
							case "complete":
							case "cancel":
								this._handleClose()
						}
					});
					const {
						history: t,
						canGoBack: a,
						fetchStatus: n,
						bounceLocation: s
					} = this.props;
					S(n, a, s) && t.replace("/settings/account/login_verification")
				}
				componentDidMount() {
					var e;
					e = this._messageHandler, window.addEventListener("message", e), this._initialHistoryLength = window.history.length
				}
				componentWillUnmount() {
					var e;
					e = this._messageHandler, window.removeEventListener("message", e)
				}
				render() {
					const {
						bounceLocation: e,
						history: t,
						canGoBack: a,
						fetchStatus: n
					} = this.props;
					return S(n, a, e) ? null : s.createElement(g.b, {
						backButtonType: "close",
						backLocation: "/settings/account/login_verification",
						history: t,
						onBackClick: this._handleClose
					}, s.createElement(b.a, {
						allowForms: !0,
						src: _(e),
						style: [f.a.absoluteFill, w.iframe]
					}))
				}
			}
			const w = f.a.create(e => ({
				iframe: {
					backgroundColor: e.colors.cellBackground,
					paddingLeft: e.spaces.small
				}
			}));
			t.default = m(y)
		},
		YWNO: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "NotificationAdvancedFiltersPage", (function() {
				return Y
			}));
			a("IAdD"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = (a("JtPf"), a("oEOe")),
				c = a("kGix"),
				l = a("Ssj5");
			const d = "rweb/notificationFilters",
				h = "rweb.notificationFilters",
				u = i.a(d, "FETCH_NOTIFICATION_FILTERS"),
				m = i.a(d, "ENABLE_NOTIFICATION_FILTER"),
				p = i.a(d, "DISABLE_NOTIFICATION_FILTER"),
				g = {
					fetchStatus: c.a.NONE,
					notificationFilters: {}
				};
			l.a.register({
				notificationFilters: function(e = g, t = {}) {
					switch (t.type) {
						case u.REQUEST:
							return Object.assign({}, e, {
								fetchStatus: c.a.LOADING
							});
						case u.FAILURE:
							return Object.assign({}, e, {
								fetchStatus: c.a.FAILED
							});
						case u.SUCCESS:
							return Object.assign({}, e, {
								notificationFilters: t.payload,
								fetchStatus: c.a.LOADED
							});
						case m.REQUEST:
							return Object.assign({}, e, {
								notificationFilters: Object.assign({}, e.notificationFilters, {
									[t.meta.filterName]: !0
								})
							});
						case p.REQUEST:
							return Object.assign({}, e, {
								notificationFilters: Object.assign({}, e.notificationFilters, {
									[t.meta.filterName]: !1
								})
							});
						default:
							return e
					}
				}
			});
			const b = e => e.notificationFilters.notificationFilters,
				f = e => e.notificationFilters.fetchStatus,
				E = () => (e, t, {
					api: a,
					userPersistence: n
				}) => i.b(e, {
					request: a.Settings.fetchNotificationFilters
				})({
					actionTypes: u,
					context: "FETCH_NOTIFICATION_FILTERS"
				}).then(e => (n.set(h, b(t())), e));
			var _ = a("oEGd"),
				S = a("0KEI"),
				y = a("hqKg");
			const w = Object(y.createSelector)(f, b, (e, t) => ({
					fetchStatus: e,
					notificationFilters: t
				})),
				C = {
					createLocalApiErrorHandler: Object(S.d)("ADVANCED_FILTERS_SCREEN"),
					disableNotificationFilter: e => (t, a, {
						api: n,
						userPersistence: r
					}) => i.c(t, {
						params: {
							[e]: !1
						},
						request: n.Settings.updateNotificationFilters
					})({
						actionTypes: p,
						context: "ACTION_DISABLE_NOTIFICATION_FILTER",
						meta: {
							filterName: e
						}
					}).then(e => (r.set(h, b(a())), e)),
					enableNotificationFilter: e => (t, a, {
						api: n,
						userPersistence: r
					}) => i.c(t, {
						params: {
							[e]: !0
						},
						request: n.Settings.updateNotificationFilters
					})({
						actionTypes: m,
						context: "ACTION_ENABLE_NOTIFICATION_FILTER",
						meta: {
							filterName: e
						}
					}).then(e => (r.set(h, b(a())), e)),
					fetchNotificationFiltersIfNeeded: () => (e, t, {
						api: a,
						userPersistence: n
					}) => f(t()) === c.a.LOADED ? Promise.resolve() : n.get(h, 24e4).then(t => e(t ? {
						payload: t,
						type: u.SUCCESS
					} : E())),
					scribeAction: o.c
				};
			var T = Object(_.g)(w, C),
				v = a("wrlS"),
				I = a("v//M"),
				O = a("yoO3"),
				A = a("7JQg"),
				L = a("7FtF"),
				k = a("iCwC"),
				P = a("MWbm"),
				x = a("6vad"),
				F = a("cCdp"),
				R = a("t62R"),
				D = a("3XMw"),
				N = a.n(D);
			const j = N.a.f8bd75d4,
				M = N.a.aaafffd9,
				B = N.a.j29ab12f,
				U = N.a.jdfc82f6,
				H = N.a.cfcda0e5,
				K = N.a.c75b9b29,
				V = N.a.f39b9c9d,
				G = N.a.d227f94f,
				W = N.a.b210936d,
				z = {
					page: "settings",
					section: "advanced_filters"
				},
				q = {
					filter_not_following: "people_you_follow_only",
					filter_not_followed_by: "filter_not_following_me",
					filter_new_users: "new_users",
					filter_default_profile_image: "default_profile_image",
					filter_no_confirmed_email: "no_confirmed_email",
					filter_no_confirmed_phone: "no_confirmed_phone"
				};
			class Y extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_fsSettingsRevamp", v.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "_handleFetch", () => {
						const {
							fetchNotificationFiltersIfNeeded: e,
							createLocalApiErrorHandler: t
						} = this.props;
						e().catch(t())
					}), r()(this, "_handleItemChanged", (e, t) => {
						const {
							createLocalApiErrorHandler: a,
							disableNotificationFilter: n,
							enableNotificationFilter: r
						} = this.props;
						t ? r(e).then(() => this._scribeNotificationFilterChanged(e, "select"), a()) : n(e).then(() => this._scribeNotificationFilterChanged(e, "deselect"), a())
					}), r()(this, "_scribeNotificationFilterChanged", (e, t) => {
						const {
							scribeAction: a
						} = this.props;
						a(Object.assign({}, z, {
							component: "advanced_filters",
							element: q[e],
							action: t
						}), this._fsSettingsRevamp ? {
							context: "settings_revamp"
						} : void 0)
					}), r()(this, "_renderNotificationFilters", () => {
						const {
							notificationFilters: e
						} = this.props;
						return s.createElement(P.a, null, s.createElement(x.b, {
							text: B
						}), s.createElement(F.a, {
							checked: e.filter_not_following,
							label: U,
							name: "filter_not_following",
							onChange: this._handleItemChanged
						}), s.createElement(F.a, {
							checked: e.filter_not_followed_by,
							label: H,
							name: "filter_not_followed_by",
							onChange: this._handleItemChanged
						}), s.createElement(F.a, {
							checked: e.filter_new_users,
							label: K,
							name: "filter_new_users",
							onChange: this._handleItemChanged
						}), s.createElement(F.a, {
							checked: e.filter_default_profile_image,
							label: V,
							name: "filter_default_profile_image",
							onChange: this._handleItemChanged
						}), s.createElement(F.a, {
							checked: e.filter_no_confirmed_email,
							label: G,
							name: "filter_no_confirmed_email",
							onChange: this._handleItemChanged
						}), s.createElement(F.a, {
							checked: e.filter_no_confirmed_phone,
							label: W,
							name: "filter_no_confirmed_phone",
							onChange: this._handleItemChanged
						}), s.createElement(R.c, {
							color: "gray600",
							size: "small",
							style: k.a.infoText
						}, s.createElement(N.a.I18NFormatMessage, {
							$i18n: "eb96a831"
						}, s.createElement(R.c, {
							link: "https://support.twitter.com/articles/20169398"
						}, N.a.ed0df109))))
					})
				}
				componentDidMount() {
					this._handleFetch()
				}
				render() {
					const {
						fetchStatus: e,
						location: t
					} = this.props;
					return s.createElement(A.b, {
						data: this._fsSettingsRevamp ? {
							context: "settings_revamp"
						} : void 0,
						namespace: z
					}, s.createElement(O.a, null, s.createElement(L.a, {
						location: t,
						title: this._fsSettingsRevamp ? M : j
					}, s.createElement(I.a, {
						fetchStatus: e,
						onRequestRetry: this._handleFetch,
						render: this._renderNotificationFilters
					}))))
				}
			}
			t.default = T(Y)
		},
		"Yq/0": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "NotificationSettingsPage", (function() {
				return R
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = a("kPZX"),
				c = a("P1r1"),
				l = a("oEGd"),
				d = a("0KEI"),
				h = a("hqKg");
			const u = Object(h.createSelector)(e => i.g(), c.C, (e, t) => ({
					browserPushAllowed: e,
					universalQualityFilteringEnabled: t
				})),
				m = {
					createLocalApiErrorHandler: Object(d.d)("SETTINGS_NOTIFICATIONS_SCREEN"),
					googleAnalyticsPageView: o.a,
					scribeAction: o.c,
					scribePageImpression: o.d,
					updateSettings: c.H
				};
			var p = Object(l.g)(u, m),
				g = a("3XMw"),
				b = a.n(g),
				f = a("7FtF"),
				E = "filtersHeader",
				_ = a("6vad"),
				S = a("cCdp"),
				y = a("csss"),
				w = a("0yYu");
			const C = b.a.eb75875d,
				T = b.a.i647fb03,
				v = b.a.b96cf52d,
				I = b.a.hee41732,
				O = b.a.e75f25a8,
				A = b.a.f8bd75d4,
				L = b.a.bcd81cab,
				k = b.a.hfc86556,
				P = b.a.afdf29b8,
				x = b.a.b293c4bd,
				F = {
					page: "settings",
					section: "notifications"
				};
			class R extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_handleUqfChanged", (e, t) => {
						const {
							createLocalApiErrorHandler: a,
							updateSettings: n
						} = this.props;
						n({
							[e]: t ? "enabled" : "disabled"
						}).catch(a({
							showToast: !0
						}))
					})
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					e(F), t(F)
				}
				render() {
					const {
						browserPushAllowed: e,
						location: t,
						universalQualityFilteringEnabled: a
					} = this.props;
					return s.createElement(f.a, {
						location: t,
						screenType: "primaryDetail",
						title: C
					}, s.createElement(_.b, {
						testID: E,
						text: T
					}), s.createElement(S.a, {
						checked: a,
						helpText: x,
						label: P,
						learnMoreLink: "https://support.twitter.com/articles/20169398",
						name: "universal_quality_filtering",
						onChange: this._handleUqfChanged
					}), s.createElement(y.a, {
						label: A,
						link: "/settings/notifications/advanced_filters"
					}), s.createElement(y.a, {
						label: k,
						link: "/settings/mute",
						withBottomBorder: !1
					}), s.createElement(w.a, null), s.createElement(_.b, {
						text: L
					}), e ? s.createElement(y.a, {
						label: I,
						link: "/settings/push_notifications"
					}) : null, s.createElement(y.a, {
						label: v,
						link: "/settings/sms_notifications"
					}), s.createElement(y.a, {
						label: O,
						link: "/settings/email_notifications",
						withBottomBorder: !1
					}))
				}
			}
			t.default = p(R)
		},
		Zh1i: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "DeactivateScreen", (function() {
				return Q
			}));
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("v6aA"),
				i = a("oEGd"),
				c = a("0KEI"),
				l = a("hqKg"),
				d = a("4+NY"),
				h = a("XMGw"),
				u = a("8jkQ"),
				m = a("oEOe");
			const p = "rweb/" + (h.a + "/deactivate"),
				g = Object(m.a)(p, "DEACTIVATE_ACCOUNT"),
				b = () => u.b.navigateTo("/settings/deactivated");
			var f = a("G6rE");
			const E = Object(l.createSelector)(e => {
					const t = f.e.selectLoggedInUser(e);
					return !!t && t.verified
				}, e => ({
					isVerified: e
				})),
				_ = {
					createLocalApiErrorHandler: Object(c.d)("DEACTIVATE"),
					deactivate: (e, t) => (a, n, {
						api: r
					}) => a(Object(d.d)()).then(() => a(((e, t) => (a, n, {
						api: r
					}) => Object(m.b)(a, {
						params: {
							password: e,
							deactivation_timespan: t
						},
						request: r.Settings.deactivate
					})({
						actionTypes: g,
						context: "DEACTIVATE_ACCOUNT"
					}).then(b))(e, t)))
				};
			var S = Object(i.g)(E, _),
				y = a("wrlS"),
				w = a("tI3i"),
				C = a.n(w),
				T = a("yoO3"),
				v = a("98E1"),
				I = a("iCwC"),
				O = a("88ay"),
				A = a("MWbm"),
				L = a("Irs7"),
				k = a("t62R"),
				P = a("6vad"),
				x = a("0yYu"),
				F = a("Y3cQ"),
				R = a("jtO7"),
				D = a("3XMw"),
				N = a.n(D);
			const j = N.a.ic2937a1,
				M = N.a.d86e6d9a,
				B = N.a.i945795c,
				U = N.a.c3216543,
				H = N.a.ea989810,
				K = N.a.f6e73faa,
				V = N.a.c3743327,
				G = N.a.a20cd24d,
				W = N.a.g8fb7f85,
				z = N.a.fe36fe1f,
				q = N.a.e93b0aef,
				Y = [{
					label: N.a.b8971cfa,
					value: "30_days"
				}, {
					label: N.a.ce0f88f6,
					value: "1_year"
				}],
				X = ({
					children: e,
					withBottomBorder: t = !0
				}) => s.createElement(A.a, {
					style: [I.a.viewItem, t && I.a.bottomBorder]
				}, s.createElement(k.c, {
					color: "gray600",
					size: "small"
				}, e));
			class Q extends s.Component {
				constructor(e, t) {
					super(e, t), r()(this, "_fsSettingsRevamp", y.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "_handleDeactivateRequest", () => {
						window.scrollTo(0, 0), this.setState({
							showPasswordDialog: !0
						})
					}), r()(this, "_handlePasswordSubmit", e => {
						const {
							createLocalApiErrorHandler: t,
							deactivate: a
						} = this.props, {
							dataReactivation: n
						} = this.state;
						a(e, n).catch(e => (this.setState({
							showPasswordDialog: !1
						}), t({
							showToast: !0
						})(e)))
					}), r()(this, "_handleReactivationChanged", (e, t) => {
						this.setState({
							dataReactivation: t
						})
					}), this.state = {
						dataReactivation: e.isVerified ? void 0 : "30_days",
						showPasswordDialog: !1
					}
				}
				_scribeAction(e) {
					const {
						analytics: t
					} = this.props;
					t.scribe({
						component: "deactivate",
						element: e,
						action: "click"
					})
				}
				render() {
					const {
						isVerified: e,
						location: t
					} = this.props, {
						loggedInUserId: a
					} = this.context, {
						dataReactivation: n,
						showPasswordDialog: r
					} = this.state, o = "1_year" === n, i = "30_days" === n, c = null === n;
					return C()(!!a, "loggedInUserId must be defined"), s.createElement(T.a, null, s.createElement(v.a, {
						location: t,
						onPasswordSubmit: this._handlePasswordSubmit,
						promptForPassword: r,
						reenterPasswordLabel: q,
						saveChangesHeaderLabel: z,
						submitLabel: K,
						submitType: "destructive",
						title: H
					}, s.createElement(A.a, null, s.createElement(O.b, {
						key: a,
						userId: a,
						withLink: !1
					}), s.createElement(P.b, {
						text: V
					}), s.createElement(X, {
						withBottomBorder: !1
					}, j), s.createElement(P.b, {
						text: G
					}), o ? s.createElement(X, null, M) : i ? s.createElement(X, null, B) : s.createElement(X, null, U), e ? s.createElement(s.Fragment, null, s.createElement(x.a, null), s.createElement(F.a, {
						label: W,
						name: "reactivation",
						onChange: this._handleReactivationChanged,
						options: Y,
						value: n
					}), s.createElement(x.a, null)) : null, s.createElement(X, null, s.createElement(N.a.I18NFormatMessage, {
						$i18n: "g124fce8"
					}, s.createElement(k.c, {
						link: "https://help.twitter.com/safety-and-security/remove-twitter-profile-from-google-search"
					}, N.a.ae256744))), s.createElement(X, null, s.createElement(N.a.I18NFormatMessage, {
						$i18n: "d9ef8fba"
					}, s.createElement(k.c, {
						link: this._fsSettingsRevamp ? "/settings/your_twitter_data/account" : "/settings/account"
					}, N.a.g7b28903))), s.createElement(X, null, s.createElement(N.a.I18NFormatMessage, {
						$i18n: "g4dcd62a"
					}, s.createElement(k.c, {
						link: this._fsSettingsRevamp ? "/settings/your_twitter_data/account" : "/settings/account"
					}, N.a.b5e3246e))), s.createElement(X, {
						withBottomBorder: !1
					}, s.createElement(N.a.I18NFormatMessage, {
						$i18n: "b44893f9"
					}, s.createElement(k.c, {
						link: "/settings/your_twitter_data"
					}, N.a.g392e08c))), s.createElement(x.a, null), s.createElement(R.a, {
						color: "red500",
						disabled: c,
						label: K,
						onPress: this._handleDeactivateRequest,
						withBottomBorder: !1
					}))))
				}
			}
			r()(Q, "contextType", o.a);
			t.default = Object(L.a)(S(Q), {
				page: "settings",
				section: "deactivate"
			})
		},
		ZqFf: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "AccountPage", (function() {
				return W
			}));
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("oEGd"),
				i = a("0KEI"),
				c = a("hqKg"),
				l = a("P1r1"),
				d = a("RqPI"),
				h = a("G6rE"),
				u = a("FDFL"),
				m = a("S/HT"),
				p = a("vEo5");
			const g = Object(c.createSelector)(e => {
					const t = Object(l.j)(e);
					return t && Object(m.b)(e, t)
				}, p.selectEmails, d.f, e => {
					const t = Object(d.f)(e);
					return t && Object(u.b)(e, t)
				}, h.e.selectLoggedInUser, p.selectPhoneNumbers, (e, t, a, n, r, s) => ({
					countryName: e,
					emails: t,
					languageCode: a,
					languageName: n,
					loggedInUser: r,
					phones: s
				})),
				b = {
					createLocalApiErrorHandler: Object(i.d)("SETTINGS_ACCOUNT_SCREEN"),
					fetchAvailableLanguagesIfNeeded: u.a,
					fetchDevices: p.fetchDevices,
					fetchCountryNamesIfNeeded: m.a
				};
			var f = Object(o.g)(g, b),
				E = a("7JQg"),
				_ = a("wrlS"),
				S = a("3XMw"),
				y = a.n(S),
				w = a("yoO3"),
				C = a("7FtF"),
				T = "accountScreen",
				v = a("MWbm"),
				I = a("6vad"),
				O = a("csss"),
				A = a("0yYu");
			const L = y.a.i5f7b6b8,
				k = y.a.cd32dbfd,
				P = y.a.e7efe72a,
				x = y.a.a3841918,
				F = y.a.f70cd5ed,
				R = y.a.dec3c9b8,
				D = y.a.j95edf76,
				N = y.a.a4b69cbb,
				j = y.a.c21037d0,
				M = y.a.d1f6d336,
				B = y.a.ae72d4c4,
				U = y.a.b7fde2b8,
				H = y.a.hfb92b14,
				K = y.a.bc38469e,
				V = y.a.fa98627a,
				G = y.a.hd0765e3;
			class W extends s.Component {
				constructor(e) {
					super(e), r()(this, "_fetchDevices", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchDevices: t
						} = this.props;
						t().catch(e())
					});
					const {
						createLocalApiErrorHandler: t,
						fetchAvailableLanguagesIfNeeded: a,
						fetchCountryNamesIfNeeded: n,
						languageCode: s
					} = this.props;
					this._fetchDevices(), s && n(s).catch(t()), a().catch(t()), this._isVerificationIntakeEnabled = _.b.isTrue("identity_verification_intake_enabled")
				}
				render() {
					const {
						countryName: e,
						emails: t,
						languageName: a,
						location: n,
						loggedInUser: r,
						phones: o
					} = this.props, i = r && "@" + r.screen_name, c = o[0] && o[0].phone_number, l = t[0] && t[0].email;
					return s.createElement(w.a, null, s.createElement(C.a, {
						location: n,
						screenType: "primaryDetail",
						title: L
					}, s.createElement(v.a, {
						testID: T
					}, s.createElement(I.b, {
						text: P
					}), s.createElement(O.a, {
						description: i,
						label: M,
						link: "/settings/screen_name"
					}), s.createElement(O.a, {
						description: c,
						label: F,
						link: "/settings/phone"
					}), s.createElement(O.a, {
						description: l,
						label: x,
						link: "/settings/email"
					}), s.createElement(O.a, {
						label: R,
						link: "/settings/password"
					}), s.createElement(O.a, {
						label: D,
						link: "/settings/security",
						withBottomBorder: !1
					}), this._isVerificationIntakeEnabled && s.createElement(s.Fragment, null, s.createElement(A.a, null), s.createElement(I.b, {
						text: K
					}), s.createElement(O.a, {
						label: V,
						link: "/settings/profile"
					}), s.createElement(O.a, {
						label: G,
						link: "/settings/request_verification",
						withBottomBorder: !1
					})), s.createElement(A.a, null), s.createElement(I.b, {
						text: k
					}), s.createElement(O.a, {
						description: a,
						label: N,
						link: "/settings/language"
					}), s.createElement(O.a, {
						description: e,
						label: j,
						link: "/settings/country"
					}), s.createElement(O.a, {
						label: U,
						link: "/settings/your_twitter_data"
					}), s.createElement(O.a, {
						label: B,
						link: "/settings/applications",
						withBottomBorder: !1
					}), s.createElement(A.a, null), s.createElement(O.a, {
						label: H,
						link: "/settings/deactivate",
						withBottomBorder: !1
					}))))
				}
			}
			t.default = Object(E.c)({
				page: "settings",
				section: "account"
			})(f(W))
		},
		ZyHq: function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return m
			})), a.d(t, "d", (function() {
				return p
			})), a.d(t, "e", (function() {
				return g
			})), a.d(t, "f", (function() {
				return b
			})), a.d(t, "a", (function() {
				return f
			})), a.d(t, "b", (function() {
				return _
			}));
			a("IAdD"), a("JtPf");
			var n = a("QJRq"),
				r = a("iD2S"),
				s = a.n(r),
				o = a("kGix"),
				i = a("Ssj5"),
				c = a("oEOe");
			const l = "rweb/accountVerification",
				d = Object(c.a)(l, "ACTION_FETCH_ACCESS"),
				h = Object(c.a)(l, "ACTION_FETCH_BADGE_VIOLATIONS"),
				u = (Object(c.a)(l, "ACTION_VERIFY_ACCOUNT"), s()({
					access: {
						data: {
							status: n.a.NOT_STARTED
						},
						error: null,
						fetchStatus: o.a.NONE
					},
					badgeViolations: {
						data: {
							button_text: "",
							debadge_timestamp_ms: 0,
							violation_modal_title: "",
							violation_modal_desc: {
								entities: [],
								text: ""
							},
							violations: []
						},
						error: null,
						fetchStatus: o.a.NONE
					}
				}));
			i.a.register({
				accountVerification: function(e = u, t) {
					switch (t.type) {
						case d.REQUEST:
							return Object.assign({}, e, {
								access: Object.assign({}, e.access, {
									fetchStatus: o.a.LOADING
								})
							});
						case d.SUCCESS:
							return Object.assign({}, e, {
								access: {
									data: Object.assign({}, e.access.data, {
										status: t.payload && t.payload.status || n.a.NOT_STARTED
									}),
									error: null,
									fetchStatus: o.a.LOADED
								}
							});
						case d.FAILURE:
							return Object.assign({}, e, {
								access: Object.assign({}, e.access, {
									error: t.payload,
									fetchStatus: o.a.FAILED
								})
							});
						case h.REQUEST:
							return Object.assign({}, e, {
								badgeViolations: Object.assign({}, e.badgeViolations, {
									fetchStatus: o.a.LOADING
								})
							});
						case h.SUCCESS:
							return t.payload ? Object.assign({}, e, {
								badgeViolations: {
									data: Object.assign({}, t.payload),
									error: null,
									fetchStatus: o.a.LOADED
								}
							}) : e;
						case h.FAILURE:
							return Object.assign({}, e, {
								badgeViolations: Object.assign({}, e.badgeViolations, {
									error: t.payload,
									fetchStatus: o.a.FAILED
								})
							});
						default:
							return e
					}
				}
			});
			const m = e => e.accountVerification.access.data,
				p = e => e.accountVerification.access.fetchStatus,
				g = e => e.accountVerification.badgeViolations.data,
				b = e => e.accountVerification.badgeViolations.fetchStatus,
				f = () => (e, t, {
					api: a
				}) => {
					const n = t(),
						r = p(n);
					return r !== o.a.LOADING && r !== o.a.LOADED ? e(E()) : Promise.resolve()
				},
				E = () => (e, t, {
					api: a
				}) => Object(c.b)(e, {
					request: a.AccountVerification.fetchAccess
				})({
					actionTypes: d,
					context: "ACTION_FETCH_ACCESS"
				}),
				_ = () => (e, t, {
					api: a
				}) => Object(c.b)(e, {
					request: a.AccountVerification.fetchBadgeViolations
				})({
					actionTypes: h,
					context: "ACTION_FETCH_BADGE_VIOLATIONS"
				})
		},
		aaHS: function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("PFE4"),
				r = a("Rdmj"),
				s = a("3XMw"),
				o = a.n(s);
			const i = o.a.i3889a1f,
				c = o.a.iefef10b;
			t.default = Object(r.a)({
				scribeNamespace: {
					page: "blocked",
					section: "imported_blocked_accounts"
				},
				blockType: n.a.Imported,
				emptyStateTitle: c,
				emptyStateMessage: i,
				supportUrl: "https://help.twitter.com/articles/20172663"
			})
		},
		adsa: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "TrendsLocationsScreen", (function() {
				return ee
			})), a.d(t, "styles", (function() {
				return te
			}));
			a("3voH");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = a("P1r1"),
				c = a("EyIn"),
				l = (a("IAdD"), a("JtPf"), a("oEOe")),
				d = a("kGix"),
				h = a("XMGw"),
				u = a("Ssj5");
			const m = h.a + "/woeTrendsLocations",
				p = "rweb/" + m,
				g = l.a(p, "FETCH_TRENDS_LOCATIONS"),
				b = {
					fetchStatus: d.a.NONE,
					trendsLocations: []
				};

			function f(e = b, t = {}) {
				switch (t.type) {
					case g.REQUEST:
						return Object.assign({}, e, {
							fetchStatus: d.a.LOADING
						});
					case g.FAILURE:
						return Object.assign({}, e, {
							error: t.payload,
							fetchStatus: d.a.FAILED
						});
					case g.SUCCESS:
						return Object.assign({}, e, {
							trendsLocations: t.payload,
							fetchStatus: d.a.LOADED
						});
					default:
						return e
				}
			}
			u.a.register({
				[m]: f
			});
			const E = e => e[m].fetchStatus,
				_ = e => (t, a, {
					api: n
				}) => l.b(t, {
					params: e,
					request: n.Settings.fetchWoeTrendsLocations
				})({
					actionTypes: g,
					context: "FETCH_TRENDS_LOCATIONS"
				});
			var S = a("oEGd"),
				y = a("0KEI"),
				w = a("hqKg"),
				C = a("+OgG");
			const T = Object(w.createSelector)(E, e => e[m].trendsLocations, i.A, c.f, c.e, c.c, (e, t, a, n, r, s) => ({
					woeTrendsLocationsFetchStatus: e,
					woeTrendsLocations: t,
					woeTrendsLocationSettings: a,
					placeTrendsLocationsFetchStatus: n,
					placeTrendsLocations: r,
					placeTrendsSettings: s
				})),
				v = {
					createLocalApiErrorHandler: Object(y.d)("SETTINGS_TRENDS_LOCATION_SCREEN"),
					fetchWoeTrendsLocationsIfNeeded: () => (e, t) => E(t()) === d.a.LOADED ? Promise.resolve() : e(_()),
					fetchPlaceTrendsLocations: c.b,
					googleAnalyticsPageView: o.a,
					scribePageImpression: o.d,
					updateWoeTrendSettings: C.a,
					updatePlaceTrendSettings: c.g
				};
			var I = Object(S.g)(T, v),
				O = a("VY6S"),
				A = a("wrlS"),
				L = a("v//M"),
				k = a("jHSc"),
				P = a("3XMw"),
				x = a.n(P),
				F = a("VwDm");
			const R = 19,
				D = 12,
				N = e => e.placeType && (e.placeType.code === R || e.placeType.code === D);
			var j = a("IMYl"),
				M = a("htQn"),
				B = a("t62R"),
				U = a("rHpw");
			const H = x.a.d5c9174e,
				K = U.a.create(e => ({
					item: {
						borderBottomWidth: e.borderWidths.small,
						borderBottomStyle: "solid",
						borderBottomColor: e.colors.borderColor,
						flexDirection: "row",
						padding: e.spaces.small,
						justifyContent: "space-between"
					},
					iconCheckmark: {
						color: e.colors.primary
					}
				}));
			var V = ({
					country: e,
					onClick: t,
					name: a,
					isSelected: n
				}) => s.createElement(M.a, {
					onPress: t,
					style: K.item
				}, e ? s.createElement(B.c, null, H({
					location: a,
					country: e
				})) : s.createElement(B.c, null, a), n ? s.createElement(j.a, {
					style: K.iconCheckmark
				}) : null),
				G = a("IRWI");
			var W = Object.assign({}, G.a, {
					anchorCandidates: e => []
				}),
				z = a("MWbm"),
				q = a("9YUM"),
				Y = a("6OUF"),
				X = a("I7xG");
			const Q = x.a.b3aab6d3,
				J = x.a.e53e05e4,
				$ = x.a.be6cc44d,
				Z = {
					page: "settings",
					section: "trends",
					component: "locations",
					element: "list"
				};
			class ee extends s.Component {
				constructor(e, t) {
					super(e, t), r()(this, "_handleRetry", () => {
						this._fetchTrendsLocations()
					}), r()(this, "_fetchTrendsLocations", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchPlaceTrendsLocations: t,
							fetchWoeTrendsLocationsIfNeeded: a
						} = this.props;
						this._usePlaceTrendLocations ? t({
							prefix: this.state.query
						}).catch(e({
							showToast: !0
						})) : a().catch(e({
							showToast: !0
						}))
					}), r()(this, "_renderScroller", () => {
						const {
							placeTrendsLocations: e
						} = this.props;
						return s.createElement(q.a, {
							anchoring: W,
							cacheKey: "LOCATIONS_LIST",
							identityFunction: this._identityFunction,
							items: e,
							renderer: this._renderPlaceLocation
						})
					}), r()(this, "_renderWoeLocations", () => {
						const {
							query: e
						} = this.state, t = "" === e ? this._getTopLevelWoeLocations() : this._getFilteredWoeLocations();
						return s.createElement(z.a, null, s.createElement(z.a, {
							style: te.searchBox
						}, s.createElement(Y.a, {
							Icon: F.a,
							autoFocus: !1,
							onChange: this._handleInputChange,
							onClear: this._handleInputClear,
							placeholder: $,
							value: this.state.query,
							withClearButton: !0
						})), s.createElement(z.a, null, t.map(e => this._renderWoeLocation(e))))
					}), r()(this, "_getFilteredWoeLocations", Object(X.a)(this, (e, t) => t.query, e => e.woeTrendsLocations, (e, t) => t.filter(t => t.name.toLowerCase().startsWith(e.toLowerCase())))), r()(this, "_getTopLevelWoeLocations", Object(X.a)(this, e => e.woeTrendsLocations, e => e.filter(e => N(e)))), r()(this, "_handleInputClear", () => {
						this._updateQuery("")
					}), r()(this, "_updateQuery", e => {
						this.setState({
							query: e
						})
					}), r()(this, "_handleInputChange", e => {
						this._updateQuery(e.target.value)
					}), r()(this, "_renderWoeLocation", e => {
						const {
							woeTrendsLocationSettings: t
						} = this.props, a = !!e.woeid && e.woeid === (t && t[0] && t[0].woeid);
						return s.createElement(V, {
							country: N(e) ? void 0 : e.country,
							isSelected: a,
							key: e.woeid,
							name: e.name,
							onClick: this._handleWoeLocationClick(e.woeid)
						})
					}), r()(this, "_renderPlaceLocation", e => {
						const {
							placeTrendsSettings: t
						} = this.props, a = !!e.place_id && t.places && t.places.some(t => t.place_id === e.place_id);
						return s.createElement(V, {
							country: void 0,
							isSelected: a,
							key: e.place_id,
							name: e.name,
							onClick: this._handlePlaceLocationClick(e.place_id, e.name)
						})
					}), r()(this, "_handleWoeLocationClick", e => () => {
						const {
							updateWoeTrendSettings: t,
							history: a,
							createLocalApiErrorHandler: n
						} = this.props;
						a.goBack(), t({
							trend_location_woeid: e
						}).catch(n({
							showToast: !0
						}))
					}), r()(this, "_handlePlaceLocationClick", (e, t) => () => {
						const {
							updatePlaceTrendSettings: a,
							history: n,
							createLocalApiErrorHandler: r
						} = this.props;
						a({
							places: [{
								place_id: e,
								name: t
							}]
						}).then(() => n.goBack()).catch(r({
							showToast: !0
						}))
					}), this._fetchFilteredPlacesDebounced = Object(O.a)(this._fetchTrendsLocations, 250), this._identityFunction = e => e.place_id, this._usePlaceTrendLocations = A.b.isTrue("responsive_web_trends_setting_new_endpoints"), this.state = {
						query: ""
					}
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					t(Z), e(Z), this._fetchTrendsLocations()
				}
				componentDidUpdate(e, t) {
					this._usePlaceTrendLocations && t.query !== this.state.query && this._fetchFilteredPlacesDebounced()
				}
				render() {
					const {
						history: e,
						woeTrendsLocationsFetchStatus: t,
						placeTrendsLocationsFetchStatus: a
					} = this.props;
					return s.createElement(k.b, {
						backButtonType: "back",
						backLocation: "/settings/trends",
						history: e,
						title: Q
					}, this._usePlaceTrendLocations ? s.createElement(s.Fragment, null, s.createElement(Y.a, {
						Icon: F.a,
						autoFocus: !1,
						onChange: this._handleInputChange,
						onClear: this._handleInputClear,
						placeholder: $,
						style: te.searchBox,
						value: this.state.query,
						withClearButton: !0
					}), s.createElement(L.a, {
						accessibilityLabel: J,
						fetchStatus: a,
						onRequestRetry: this._handleRetry,
						render: this._renderScroller
					})) : s.createElement(L.a, {
						accessibilityLabel: J,
						fetchStatus: t,
						onRequestRetry: this._handleRetry,
						render: this._renderWoeLocations
					}))
				}
			}
			const te = U.a.create(e => ({
				searchBox: {
					flexGrow: 0,
					flexShrink: 0,
					margin: e.spaces.xSmall
				}
			}));
			t.default = I(ee)
		},
		atVN: function(e, t, a) {
			"use strict";
			var n = a("ERkP"),
				r = a("rHpw"),
				s = a("MWbm");
			class o extends n.PureComponent {
				render() {
					const {
						children: e
					} = this.props;
					return n.createElement(s.a, {
						style: i.root
					}, e)
				}
			}
			const i = r.a.create(e => ({
				root: {
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				}
			}));
			t.a = o
		},
		d0Wu: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "FilterPage", (function() {
				return y
			}));
			var n = a("ERkP"),
				r = a("P1r1"),
				s = a("rxPX"),
				o = a("0KEI");
			var i = Object(s.a)().propsFromState(() => ({
					universalQualityFilteringEnabled: r.C
				})).propsFromActions(() => ({
					createLocalApiErrorHandler: Object(o.d)("SETTINGS_FILTERS_SCREEN"),
					updateSettings: r.H
				})),
				c = a("3XMw"),
				l = a.n(c),
				d = a("yoO3"),
				h = a("7JQg"),
				u = a("7FtF"),
				m = a("xHsv"),
				p = a("cCdp"),
				g = a("csss");
			const b = l.a.ef1b5cbb,
				f = l.a.i647fb03,
				E = l.a.aaafffd9,
				_ = l.a.afdf29b8,
				S = l.a.c54b6236;

			function y(e) {
				const {
					location: t,
					universalQualityFilteringEnabled: a,
					createLocalApiErrorHandler: r,
					updateSettings: s
				} = e;
				return n.createElement(h.b, {
					data: {
						context: "settings_revamp"
					},
					namespace: {
						page: "settings",
						section: "filters"
					}
				}, n.createElement(d.a, null, n.createElement(u.a, {
					location: t,
					title: f
				}, n.createElement(m.a, {
					description: b,
					withBottomBorder: !0
				}), n.createElement(p.a, {
					checked: a,
					helpText: S,
					label: _,
					learnMoreLink: "https://help.twitter.com/managing-your-account/understanding-the-notifications-timeline",
					name: "universal_quality_filtering",
					onChange: function(e, t) {
						s({
							[e]: t ? "enabled" : "disabled"
						}).catch(r({
							showToast: !0
						}))
					}
				}), n.createElement(g.a, {
					label: E,
					link: "/settings/notifications/advanced_filters",
					withBottomBorder: !1
				}))))
			}
			const w = i(y);
			t.default = w
		},
		dMlH: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SettingsTeamsScreen", (function() {
				return k
			}));
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = a("P1r1"),
				c = a("/MKj"),
				l = a("0KEI"),
				d = a("hqKg");
			const h = Object(d.createSelector)(i.B, e => ({
					teamsSetting: e
				})),
				u = {
					createLocalApiErrorHandler: Object(l.d)("SETTINGS_TEAMS_SCREEN"),
					fetchSettingsIfNeeded: i.e,
					googleAnalyticsPageView: o.a,
					scribePageImpression: o.d,
					updateSettings: i.H
				};
			var m = Object(c.b)(h, u),
				p = a("wrlS"),
				g = a("3XMw"),
				b = a.n(g),
				f = a("98E1"),
				E = a("MWbm"),
				_ = a("xHsv"),
				S = a("qYi+"),
				y = a("t62R");
			a("aWzz");
			const w = b.a.b41d7d42,
				C = b.a.c089dc32,
				T = b.a.b59540c2,
				v = b.a.e2aa2651,
				I = [{
					label: b.a.a2ffab26,
					value: "all"
				}, {
					label: b.a.h69bd4ee,
					value: "following"
				}],
				O = b.a.ad9c093e,
				A = b.a.i859a9d3,
				L = {
					page: "settings",
					section: "teams"
				};
			class k extends s.Component {
				constructor(e) {
					super(e), r()(this, "_handleSubmit", e => {
						const {
							createLocalApiErrorHandler: t,
							updateSettings: a
						} = this.props, {
							allow_contributor_request: n
						} = this.state;
						a({
							current_password: e,
							allow_contributor_request: n
						}).catch(e => {
							this._resetValue(), t({
								showToast: !0
							})(e)
						})
					}), r()(this, "_resetValue", () => {
						const {
							teamsSetting: e
						} = this.props;
						this.setState({
							allow_contributor_request: e
						})
					}), r()(this, "_handleItemChanged", (e, t) => {
						this.setState({
							[e]: t
						})
					}), this.state = {}, this._fsSettingsRevamp = p.b.isTrue("responsive_web_settings_revamp_enabled")
				}
				UNSAFE_componentWillMount() {
					const {
						createLocalApiErrorHandler: e,
						fetchSettingsIfNeeded: t
					} = this.props;
					t().catch(e())
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					t(L), e(L)
				}
				render() {
					const {
						location: e,
						teamsSetting: t
					} = this.props, {
						allow_contributor_request: a
					} = this.state, n = a && t !== a, r = a || t;
					return s.createElement(f.a, {
						location: e,
						onPasswordSubmit: this._handleSubmit,
						promptForPassword: n,
						title: this._fsSettingsRevamp ? w : T
					}, s.createElement(E.a, null, this._fsSettingsRevamp ? s.createElement(_.a, {
						description: v,
						withBottomBorder: !0
					}) : void 0, s.createElement(S.a, {
						description: s.createElement(s.Fragment, null, O + " ", s.createElement(y.c, {
							link: "https://help.twitter.com/using-twitter/tweetdeck-teams"
						}, A)),
						label: this._fsSettingsRevamp ? C : T,
						name: "allow_contributor_request",
						offValue: "none",
						onChange: this._handleItemChanged,
						options: I,
						value: r,
						withBottomBorder: !1
					})))
				}
			}
			t.default = m(k)
		},
		dUVB: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "MuteKeywordDetailScreen", (function() {
				return Z
			}));
			a("IAdD"), a("tVqn");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("k49u"),
				i = (a("WNMA"), a("zh9S")),
				c = a("X8EX"),
				l = a("1YZw"),
				d = a("/MKj"),
				h = a("0KEI"),
				u = a("hqKg");
			const m = (e, t) => t.match.params.mutedKeywordId,
				p = Object(u.createSelector)(c.f, c.g, c.h, (e, t) => !!m(0, t), (e, t) => c.i(e, m(0, t)), (e, t, a, n, r) => ({
					defaultOptions: e,
					discouragedKeywords: t,
					fetchStatus: a,
					isEditing: n,
					mutedKeyword: r
				})),
				g = {
					addMutedKeyword: c.a,
					addToast: l.b,
					createLocalApiErrorHandler: Object(h.d)("MUTED_KEYWORD_DETAIL"),
					fetchDefaultOptionsIfNeeded: c.c,
					fetchDiscouragedKeywordsIfNeeded: c.d,
					fetchMutedKeywordsIfNeeded: c.e,
					googleAnalyticsPageView: i.a,
					scribeAction: i.c,
					updateDefaultOptions: c.k,
					updateMutedKeyword: c.l
				};
			var b = Object(d.b)(p, g),
				f = a("kGix"),
				E = a("v//M"),
				_ = a("gaV8"),
				S = a.n(_),
				y = a("VTxf"),
				w = a("7FtF"),
				C = a("MWbm"),
				T = a("t62R"),
				v = a("p+r5"),
				I = a("0yYu"),
				O = a("6vad"),
				A = a("cCdp"),
				L = a("Y3cQ"),
				k = a("rHpw"),
				P = (a("aWzz"), a("3XMw")),
				x = a.n(P);
			const F = x.a.bdbf8f4e,
				R = x.a.h43e2ea7,
				D = x.a.da8c044f,
				N = x.a.eb75875d,
				j = [{
					label: x.a.defb4aa9,
					value: "everyone"
				}, {
					label: x.a.e7d47b00,
					value: "following"
				}],
				M = x.a.c67e3fc1,
				B = x.a.bf701a4d,
				U = x.a.gfa5008d,
				H = x.a.c5595dfe,
				K = x.a.cabeb6c1,
				V = [{
					label: K,
					value: "forever"
				}, {
					label: x.a.b5b3d60d,
					value: "day"
				}, {
					label: x.a.c8bf2620,
					value: "week"
				}, {
					label: x.a.b15e4773,
					value: "month"
				}],
				G = [{
					label: x.a.a268406c,
					value: "day"
				}, {
					label: x.a.fc638aa2,
					value: "week"
				}, {
					label: x.a.b8971cfa,
					value: "month"
				}, {
					label: K,
					value: "forever"
				}],
				W = x.a.cc7bedfc,
				z = x.a.d768049b,
				q = x.a.c6203da8,
				Y = x.a.e3f0d3db,
				X = x.a.h5746cf6,
				Q = x.a.d2693eb8,
				J = x.a.jf4e00e1,
				$ = {
					page: "settings",
					section: "notifications",
					component: "mute_keyword",
					element: "add"
				};
			class Z extends s.Component {
				constructor(e, t) {
					super(e, t), r()(this, "_renderSettings", () => {
						const {
							isEditing: e,
							mutedKeyword: t
						} = this.props, {
							errorText: a,
							warningText: n
						} = this.state, r = a || n, o = s.createElement(x.a.I18NFormatMessage, {
							$i18n: "aba5a348"
						}, s.createElement(T.c, {
							link: "https://support.twitter.com/articles/20175032"
						}, x.a.e456bd5f));
						return s.createElement(C.a, null, s.createElement(v.a, {
							defaultValue: e ? t.keyword : "",
							editable: !e,
							errorText: r,
							helperText: e ? null : o,
							invalid: !!r,
							label: e ? R : F,
							name: "keyword",
							numberOfLines: 1,
							onChange: this._handleKeywordChanged,
							onUpdate: this._handleEntryUpdated,
							type: "text"
						}), this._renderOptions())
					}), r()(this, "_renderOptions", () => {
						const {
							isEditing: e
						} = this.props;
						return s.createElement(C.a, null, s.createElement(I.a, null), s.createElement(O.b, {
							text: D
						}), s.createElement(A.a, {
							checked: this.state.mute_home_timeline,
							label: M,
							name: "mute_home_timeline",
							onChange: this._handleEntryUpdated
						}), s.createElement(A.a, {
							checked: this.state.mute_notifications,
							label: N,
							name: "mute_notifications",
							onChange: this._handleEntryUpdated,
							withBottomBorder: this.state.mute_notifications
						}), this.state.mute_notifications ? s.createElement(L.a, {
							name: "mute_notifications_option",
							onChange: this._handleEntryUpdated,
							options: j,
							value: this.state.mute_notifications_option,
							withBottomBorder: !1
						}) : null, s.createElement(I.a, null), s.createElement(O.b, {
							text: e ? this._renderEditTimeDurationLabel() : B
						}), s.createElement(L.a, {
							name: "time_duration",
							onChange: this._handleEntryUpdated,
							options: e ? G : V,
							value: this.state.time_duration,
							withBottomBorder: e
						}), e ? s.createElement(T.c, {
							color: "gray600",
							size: "small",
							style: ee.infoText
						}, W) : null)
					}), r()(this, "_renderEditTimeDurationLabel", () => {
						const {
							mutedKeyword: e
						} = this.props;
						return e.valid_until ? U : H
					}), r()(this, "_renderNotFound", () => s.createElement(y.a, null)), r()(this, "_handleFetch", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchStatus: t,
							fetchDiscouragedKeywordsIfNeeded: a,
							fetchMutedKeywordsIfNeeded: n,
							fetchDefaultOptionsIfNeeded: r,
							isEditing: s
						} = this.props;
						a().catch(e()), s || t === f.a.NONE ? n().catch(e()) : r()
					}), r()(this, "_handleKeywordChanged", e => {
						const t = e.target.value;
						this.setState({
							keyword: t
						}, this._checkKeywordValidity)
					}), r()(this, "_handleEntryUpdated", (e, t) => {
						this.setState({
							[e]: t
						}, this._checkKeywordValidity)
					}), r()(this, "_handleGoBack", () => {
						const {
							history: e
						} = this.props;
						e.goBack({
							backLocation: "/settings/muted_keywords"
						})
					}), r()(this, "_handleSubmit", () => {
						const e = this._getMuteKeywordParams();
						this.props.isEditing ? this._updateExistingMutedKeyword(e) : this._createNewMutedKeyword(e)
					});
					const {
						defaultOptions: a,
						mutedKeyword: n
					} = e, o = n ? this._initializeMuteKeywordStates(n) : a;
					this.state = Object.assign({
						errorText: null,
						hasValidKeyword: !1,
						warningText: null
					}, o)
				}
				componentDidMount() {
					this.props.googleAnalyticsPageView($), this._handleFetch(), this._mutateMutedKeywordApiErrorHandlingConfiguration = {
						[o.a.ValidationFailure]: {
							customAction: e => {
								e.message && this.setState({
									errorText: e.message,
									hasValidKeyword: !1
								})
							}
						}
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						isEditing: t,
						defaultOptions: a,
						fetchStatus: n,
						mutedKeyword: r
					} = e;
					t && n === f.a.LOADED && r && !this.props.mutedKeyword && this.setState(this._initializeMuteKeywordStates(r)), t || n !== f.a.LOADED || a === this.props.defaultOptions || this.setState(a)
				}
				render() {
					const {
						isEditing: e,
						fetchStatus: t,
						location: a,
						mutedKeyword: n
					} = this.props, r = e && t === f.a.LOADED && !n;
					return s.createElement(w.a, {
						location: a,
						onSubmit: this._handleSubmit,
						submitDisabled: !this.state.hasValidKeyword || r,
						title: e ? q : z
					}, s.createElement(E.a, {
						fetchStatus: r ? f.a.FAILED : t,
						onRequestRetry: this._handleFetch,
						render: this._renderSettings,
						renderFailure: this._renderNotFound,
						retryable: !r
					}))
				}
				_initializeMuteKeywordStates(e) {
					return {
						id: e.id,
						keyword: e.keyword,
						mute_home_timeline: e.mute_surfaces.indexOf("home_timeline") > -1,
						mute_notifications: e.mute_surfaces.indexOf("notifications") > -1,
						mute_notifications_option: e.mute_options.indexOf("exclude_following_accounts") > -1 ? "following" : "everyone",
						time_duration: e.valid_until ? "" : "forever"
					}
				}
				_isDiscouragedWord(e) {
					return this.props.discouragedKeywords.indexOf(e) >= 0
				}
				_checkKeywordValidity() {
					const {
						keyword: e = "",
						mute_home_timeline: t,
						mute_notifications: a
					} = this.state, n = S()(e), r = this._isDiscouragedWord(e.trim()), s = n > 0 && n <= 140, o = s && (t || a);
					let i = null,
						c = null;
					s || n > 140 && (i = Q), r && (c = J), this.setState({
						hasValidKeyword: o,
						errorText: i,
						warningText: c
					})
				}
				_getMuteKeywordParams() {
					const {
						id: e,
						keyword: t,
						mute_notifications: a,
						mute_notifications_option: n,
						mute_home_timeline: r,
						time_duration: s
					} = this.state, {
						isEditing: o
					} = this.props, i = {}, c = [], l = [];
					return o ? i.id = e : i.keyword = t, a && c.push("notifications"), r && c.push("home_timeline", "tweet_replies"), i.mute_surfaces = c.join(","), a && "following" === n && l.push("exclude_following_accounts"), i.mute_options = l.join(","), i.duration = this._getDuration(s), i
				}
				_getDuration(e) {
					switch (e) {
						case "day":
							return 864e5;
						case "week":
							return 6048e5;
						case "month":
							return 2592e6;
						case "forever":
							return "";
						default:
							return
					}
				}
				_createNewMutedKeyword(e) {
					const {
						addToast: t,
						addMutedKeyword: a,
						createLocalApiErrorHandler: n,
						scribeAction: r,
						updateDefaultOptions: s
					} = this.props, {
						mute_notifications: o,
						mute_notifications_option: i,
						mute_home_timeline: c,
						time_duration: l
					} = this.state;
					s({
						mute_notifications: o,
						mute_notifications_option: i,
						mute_home_timeline: c,
						time_duration: l
					}), a(e).then(a => {
						let n = e.keyword;
						if ("object" == typeof a && Array.isArray(a.muted_keywords)) {
							const e = a.muted_keywords[0];
							"object" == typeof e && e.keyword && (n = e.keyword)
						}
						const s = Y({
							keyword: n
						});
						t({
							text: s
						}), r(Object.assign({}, $, {
							action: "mute"
						})), this._handleGoBack()
					}, n(this._mutateMutedKeywordApiErrorHandlingConfiguration))
				}
				_updateExistingMutedKeyword(e) {
					const {
						addToast: t,
						createLocalApiErrorHandler: a,
						updateMutedKeyword: n
					} = this.props;
					n(e).then(() => {
						t({
							text: X({
								keyword: this.state.keyword
							})
						}), this._handleGoBack()
					}, a(this._mutateMutedKeywordApiErrorHandlingConfiguration))
				}
			}
			const ee = k.a.create(e => ({
				infoText: {
					marginVertical: e.spaces.medium,
					marginHorizontal: e.spaces.xSmall
				}
			}));
			t.default = b(Z)
		},
		e7uq: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "BlockedAccountsScreen", (function() {
				return O
			}));
			a("JtPf"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("wrlS"),
				i = a("yoO3"),
				c = a("wytG"),
				l = a("7JQg"),
				d = a("eM8g"),
				h = a("7FtF"),
				u = a("t62R"),
				m = a("k/OQ"),
				p = a("0yYu"),
				g = a("3XMw"),
				b = a.n(g),
				f = a("zCf4");
			const E = b.a.a5f32aa2,
				_ = s.createElement(b.a.I18NFormatMessage, {
					$i18n: "ab3bf5a7"
				}, s.createElement(u.c, {
					link: "https://support.twitter.com/articles/117063"
				}, b.a.e554ba82)),
				S = b.a.f8321d82,
				y = b.a.b23cdbfe,
				w = b.a.eb233865,
				C = {
					page: "settings",
					section: "blocked_accounts"
				},
				T = Object(c.a)(() => Promise.all([a.e(0), a.e(4), a.e(20), a.e(176)]).then(a.bind(null, "XFGu"))),
				v = Object(c.a)(() => Promise.all([a.e(0), a.e(4), a.e(20), a.e(176)]).then(a.bind(null, "t8Yo"))),
				I = Object(c.a)(() => Promise.all([a.e(0), a.e(4), a.e(20), a.e(176)]).then(a.bind(null, "aaHS")));
			class O extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_fsSettingsRevamp", o.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "_fsAutoBlockListEnabled", o.b.isTrue("rito_smart_block_list_enabled")), r()(this, "_renderTabs", () => {
						const e = [{
							to: "/settings/blocked/all",
							label: S,
							retainScrollPosition: !1
						}, this._fsAutoBlockListEnabled ? {
							to: "/settings/blocked/autoblock",
							label: y,
							retainScrollPosition: !1
						} : void 0, {
							to: "/settings/blocked/imported",
							label: w,
							retainScrollPosition: !1
						}];
						return s.createElement(m.a, {
							accessibilityLabel: E,
							links: e.filter(Boolean)
						})
					})
				}
				render() {
					return s.createElement(l.b, {
						data: this._fsSettingsRevamp ? {
							context: "settings_revamp"
						} : void 0,
						namespace: C
					}, s.createElement(i.a, null, s.createElement(h.a, {
						location: this.props.location,
						secondaryBar: this._renderTabs(),
						title: E,
						withBottomBorder: !0,
						withMarginBottom: !1
					}, s.createElement(d.a, null, _), s.createElement(p.a, null), s.createElement(f.d, null, s.createElement(f.b, {
						component: T,
						exact: !0,
						path: "/settings/blocked/all"
					}), this._fsAutoBlockListEnabled ? s.createElement(f.b, {
						component: v,
						exact: !0,
						path: "/settings/blocked/autoblock"
					}) : null, s.createElement(f.b, {
						component: I,
						exact: !0,
						path: "/settings/blocked/imported"
					})))))
				}
			}
			t.default = O
		},
		fLnR: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "PersonalizationScreen", (function() {
				return ne
			}));
			a("IAdD");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("v6aA"),
				i = a("zh9S"),
				c = a("NeAX"),
				l = a("RqPI"),
				d = a("P1r1"),
				h = a("oEGd"),
				u = a("0KEI"),
				m = a("hqKg");
			const p = Object(m.createSelector)(l.e, d.f, c.selectPreferences, (e, t, a) => !(!t.settings_metadata || !t.settings_metadata.is_eu) || a.is_eu_country),
				g = Object(m.createSelector)(c.selectPreferencesFetchStatus, p, c.selectPreferences, c.selectUserPreferences, (e, t, a, n) => ({
					fetchStatus: e,
					isEUUser: t,
					personalization: a,
					settings: n
				})),
				b = {
					createLocalApiErrorHandler: Object(u.d)("SETTINGS_PERSONALIZATION_SCREEN"),
					fetchPreferencesIfNeeded: c.fetchPreferencesIfNeeded,
					googleAnalyticsPageView: i.a,
					scribeAction: i.c,
					scribePageImpression: i.d,
					syncSettings: c.syncSettings,
					updateSettings: c.updateSettings
				};
			var f = Object(h.g)(g, b),
				E = a("v//M"),
				_ = a("uD2z"),
				S = a("3XMw"),
				y = a.n(S),
				w = a("fs1G"),
				C = a("7FtF"),
				T = a("iCwC"),
				v = a("MWbm"),
				I = a("t62R"),
				O = a("cCdp"),
				A = a("0yYu"),
				L = a("6vad"),
				k = a("csss"),
				P = a("eb3s");
			const x = y.a.e8f57e07,
				F = y.a.ce8450f1,
				R = y.a.ja94f34d,
				D = y.a.e8f57e07,
				N = y.a.bd73f7e5,
				j = y.a.a55db872,
				M = y.a.ddbc3287,
				B = y.a.i7b329e0,
				U = {
					headline: y.a.b934e0ea,
					text: y.a.bf917ce9,
					confirmButtonLabel: y.a.a148acb9
				},
				H = y.a.e8313b32,
				K = y.a.f1d46fd5,
				V = y.a.cfd2f35d,
				G = y.a.ib3357a5,
				W = y.a.c4ca418c,
				z = y.a.b0b3ed8e,
				q = y.a.f6c8ccc7,
				Y = y.a.f748b0fc,
				X = y.a.aa023546,
				Q = y.a.cb2ed998,
				J = y.a.b85127bc,
				$ = y.a.b276596b,
				Z = y.a.c966aaf4,
				ee = y.a.d3c20d8f,
				te = y.a.jdaf84e3,
				ae = {
					page: "settings",
					section: "personalization"
				};
			class ne extends s.Component {
				constructor(e, t) {
					super(e, t), r()(this, "_render", () => {
						const {
							allowDeviceAccess: e,
							allowLocationHistoryUse: t,
							allowPartnerships: a,
							allowPersonalization: n
						} = this.props.settings, {
							showDisableEUConfirmation: r,
							showSwitchAllConfirmation: o
						} = this.state;
						return s.createElement(v.a, null, s.createElement(v.a, null, s.createElement(I.c, {
							color: "gray600",
							size: "small",
							style: [T.a.infoText, T.a.bottomBorder]
						}, this._isLoggedIn ? F : R)), s.createElement(O.a, {
							checked: this._getSwitchAllValue(),
							helpText: N,
							key: "switchAll",
							label: D,
							name: "switchAll",
							onChange: this._handleSwitchAllChanged,
							type: "switch",
							withBottomBorder: !1
						}), s.createElement(A.a, null), s.createElement(L.b, {
							text: j
						}), s.createElement(O.a, {
							checked: n,
							disabled: this._adsPersonalizationOSLevelDisabled,
							helpText: this._adsPersonalizationOSLevelDisabled ? z : W,
							key: "allowPersonalization",
							label: G,
							learnMoreLink: "https://support.twitter.com/articles/20170405",
							name: "allowPersonalization",
							onChange: this._handleBooleanChanged
						}), s.createElement(O.a, {
							checked: e,
							helpText: Y,
							key: "allowDeviceAccess",
							label: q,
							learnMoreLink: "https://support.twitter.com/articles/20175257",
							name: "allowDeviceAccess",
							onChange: this._handleBooleanChanged,
							withBottomBorder: this._isLoggedIn
						}), this._isLoggedIn && s.createElement(O.a, {
							checked: t,
							helpText: Q,
							key: "allowLocationHistoryUse",
							label: X,
							name: "allowLocationHistoryUse",
							onChange: this._handleBooleanChanged,
							withBottomBorder: !1
						}), s.createElement(A.a, null), s.createElement(L.b, {
							text: M
						}), this._renderCookiePersonalizationSetting(), s.createElement(O.a, {
							checked: a,
							helpText: te,
							key: "allowPartnerships",
							label: ee,
							learnMoreLink: "https://support.twitter.com/articles/20175379",
							name: "allowPartnerships",
							onChange: this._handleBooleanChanged,
							withBottomBorder: this._isLoggedIn
						}), this._isLoggedIn && s.createElement(k.a, {
							label: B,
							link: "/settings/your_twitter_data",
							withBottomBorder: !1
						}), r && s.createElement(P.a, {
							cancelButtonLabel: V,
							confirmButtonLabel: K,
							onCancel: this._handleCancelDisableEU,
							onConfirm: this._handleDisableEUCookies,
							text: H
						}), o && s.createElement(P.a, {
							confirmButtonLabel: U.confirmButtonLabel,
							headline: U.headline,
							onCancel: this._handleCancelSwitchAll,
							onConfirm: this._handleConfirmSwitchAll,
							text: U.text
						}))
					}), r()(this, "_handleCancelSwitchAll", () => {
						this.setState({
							showSwitchAllConfirmation: !1
						})
					}), r()(this, "_handleConfirmSwitchAll", () => {
						this._handleBulkUpdateSettings(!1)
					}), r()(this, "_handleSwitchAllChanged", (e, t) => {
						t ? this._handleBulkUpdateSettings(!0) : this.setState({
							showSwitchAllConfirmation: !0
						})
					}), r()(this, "_handleCancelDisableEU", () => {
						this.setState({
							showDisableEUConfirmation: !1
						})
					}), r()(this, "_handleEUCookiesChanged", () => {
						this.setState({
							showDisableEUConfirmation: !0
						})
					}), r()(this, "_handleDisableEUCookies", () => {
						const {
							createLocalApiErrorHandler: e,
							updateSettings: t
						} = this.props;
						t({
							allowCookieUse: !1
						}).catch(e()), this.setState({
							showDisableEUConfirmation: !1
						})
					}), r()(this, "_handleBulkUpdateSettings", e => {
						const {
							createLocalApiErrorHandler: t,
							isEUUser: a,
							settings: n,
							updateSettings: r
						} = this.props, s = {};
						Object.keys(n).forEach(t => {
							a && "allowCookieUse" === t || (s[t] = e)
						}), this._scribeAction("toggle_all", s), r(s).catch(t()), this.setState({
							showSwitchAllConfirmation: !1
						})
					}), r()(this, "_handleBooleanChanged", (e, t) => {
						const {
							createLocalApiErrorHandler: a,
							updateSettings: n
						} = this.props, r = {
							[e]: t
						};
						this._scribeAction(e, r), n(r).catch(a())
					}), r()(this, "_scribeAction", (e, t) => {
						const {
							scribeAction: a
						} = this.props;
						a(Object.assign({}, ae, {
							component: e,
							action: "edit"
						}), {
							metadata: t
						})
					}), r()(this, "_handleFetchPreferences", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchPreferencesIfNeeded: t
						} = this.props;
						t().catch(e())
					}), this.state = {
						showSwitchAllConfirmation: !1,
						showDisableEUConfirmation: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						loggedInUserId: e
					} = this.context;
					this._handleFetchPreferences(), this._isLoggedIn = !!e, this._adsPersonalizationOSLevelDisabled = window.apkInterface && window.apkInterface.isOsAdsTrackingOn && !window.apkInterface.isOsAdsTrackingOn()
				}
				componentDidMount() {
					const {
						createLocalApiErrorHandler: e,
						googleAnalyticsPageView: t,
						scribePageImpression: a,
						syncSettings: n
					} = this.props;
					t(ae), a(ae), this._isLoggedIn || n().catch(e())
				}
				render() {
					const {
						fetchStatus: e,
						location: t
					} = this.props;
					return s.createElement(C.a, {
						location: t,
						title: x
					}, s.createElement(E.a, {
						fetchStatus: e,
						onRequestRetry: this._handleFetchPreferences,
						render: this._render
					}))
				}
				_renderCookiePersonalizationSetting() {
					const {
						isEUUser: e
					} = this.props, {
						allowCookieUse: t
					} = this.props.settings, a = !!t;
					let n, r = !1,
						o = w.a;
					const i = J;
					return e ? (n = Z, a ? o = this._handleEUCookiesChanged : r = !0) : (n = $, o = this._handleBooleanChanged), s.createElement(O.a, {
						checked: t,
						disabled: r,
						helpText: n,
						key: "allowCookieUse",
						label: i,
						learnMoreLink: "https://support.twitter.com/articles/20169421",
						name: "allowCookieUse",
						onChange: o
					})
				}
				_getSwitchAllValue() {
					const {
						settings: e
					} = this.props, t = Object(_.b)(e);
					return "some" === t || "all" === t
				}
			}
			r()(ne, "contextType", o.a);
			t.default = f(ne)
		},
		i6OR: function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			a("IAdD"), a("x4t0");
			var n = a("u3ZE"),
				r = a("3IPs"),
				s = a("ZNT5"),
				o = a("eR3e");
			const i = {
					[r.c.Top]: {},
					[r.c.Live]: {
						tweet_search_mode: r.c.Live
					},
					[r.c.User]: {
						result_filter: r.c.User
					},
					[r.c.Image]: {
						result_filter: r.c.Image
					},
					[r.c.Video]: {
						result_filter: r.c.Video
					}
				},
				c = e => (e => e === n.a.SpellingCorrectionRevertClick || e === n.a.SpellingExpansionRevertClick)(e) ? "-revert" : "",
				l = () => (e, t) => {
					e(Object(o.r)(t()).filter(e => 0 === e.indexOf("search-")).map(e => Object(o.e)(e)))
				};
			t.b = ({
				query: e,
				searchMode: t = r.c.Top,
				querySource: a,
				searchFilters: n,
				vertical: o,
				urtEndpointOptions: l
			}) => {
				const d = c(a),
					h = n && n.peopleFilter ? "searcher_follows" : void 0,
					u = h ? "-pf" : "",
					m = n && n.locationFilter && !e.includes(" near:me") ? e + " near:me" : e,
					p = `search-${m}-${t}${d}${u}`;
				return Object(s.a)({
					timelineId: p,
					getEndpoint: e => e.URT.fetchSearch,
					getEndpointParams: e => Object.assign({}, null == l ? void 0 : l.requestParams, {
						q: m,
						social_filter: h,
						vertical: o
					}, i[t], e),
					context: "FETCH_SEARCH_TIMELINE",
					isUserRefreshable: !0,
					perfKey: "search",
					staleIntervalMs: t === r.c.Live ? 5e3 : void 0,
					timelineType: "search"
				})
			}
		},
		iCwC: function(e, t, a) {
			"use strict";
			a("IAdD");
			var n = a("rHpw");
			const r = e => ({
				borderBottomColor: e.colors.borderColor,
				borderBottomStyle: "solid",
				borderBottomWidth: "1px"
			});
			t.a = n.a.create(e => ({
				descriptionText: {
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.spaces.small
				},
				searchBox: {
					margin: e.spaces.xxSmall
				},
				infoText: {
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				},
				linkItem: {
					padding: e.spaces.xSmall,
					backgroundColor: e.colors.cellBackground
				},
				viewItem: {
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical,
					backgroundColor: e.colors.cellBackground
				},
				calloutTextBlock: {
					paddingVertical: e.spaces.medium,
					paddingHorizontal: e.componentDimensions.gutterHorizontal
				},
				bottomBorder: Object.assign({}, r(e))
			}))
		},
		iD2S: function(e, t) {
			e.exports = function e(t) {
				return Object.freeze(t), Object.getOwnPropertyNames(t).forEach((function(a) {
					!t.hasOwnProperty(a) || null === t[a] || "object" != typeof t[a] && "function" != typeof t[a] || Object.isFrozen(t[a]) || e(t[a])
				})), t
			}
		},
		iQBX: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "AccountVerification", (function() {
				return T
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("QJRq"),
				i = a("rxPX"),
				c = a("ZyHq"),
				l = Object(i.a)().propsFromState(() => ({
					access: c.c,
					accessFetchStatus: c.d
				})).adjustStateProps(({
					access: e,
					accessFetchStatus: t
				}) => ({
					accessFetchStatus: t,
					accessStatus: e.status
				})).propsFromActions(() => ({
					fetchAccess: c.a
				})).withAnalytics(),
				d = a("wrlS"),
				h = a("jHSc"),
				u = a("3XMw"),
				m = a.n(u),
				p = a("lUZE"),
				g = a("rHpw").a.create(e => ({
					button: {
						minWidth: 130,
						maxWidth: "80%",
						marginTop: e.spaces.medium
					},
					centerContent: {
						alignItems: "center",
						display: "flex",
						width: "100%"
					},
					container: {
						marginTop: e.spaces.xxLarge,
						marginBottom: e.spaces.xxLarge,
						marginLeft: e.spaces.medium,
						marginRight: e.spaces.medium
					},
					content: {
						color: e.colors.gray600,
						marginTop: e.spaces.small,
						overflowX: "hidden"
					},
					doneButton: {
						width: 80,
						maxWidth: "80%",
						marginTop: e.spaces.xLarge
					},
					icon: {
						height: "10em"
					},
					iconTwitter: {
						color: e.colors.brandColor,
						height: "2em"
					},
					image: {
						marginBottom: e.spaces.small
					}
				})),
				b = a("MWbm"),
				f = a("6vad"),
				E = a("t62R"),
				_ = a("/yvb");
			const S = m.a.fc5bfd95;
			var y = ({
				_handleOnClick: e
			}) => s.createElement(b.a, {
				style: g.container
			}, s.createElement(b.a, {
				style: [g.centerContent, g.image]
			}, s.createElement(p.a, {
				style: g.icon
			})), s.createElement(b.a, {
				style: g.centerContent
			}, s.createElement(f.b, {
				text: "Let’s get you #Verified",
				withBottomBorder: !1
			}), s.createElement(E.c, {
				align: "center",
				style: g.content
			}, "Confirming your Twitter account unlocks special privileges like priority in search and enhanced reporting. Here’s what to expect from the process.", s.createElement("ul", null, s.createElement("li", null, "We ask that you confirm the personal information you’ve provided to Twitter is correct and meets our standards for verification. This means the name provided should be your real name (this typically means what’s reflected on your government issued ID)."), s.createElement("li", null, "You’ll need to provide a copy of your government issued ID. We use this to confirm that you are who you say you are."))), s.createElement(_.a, {
				onClick: e,
				style: g.button,
				type: "primary"
			}, S)));
			const w = m.a.b772cd65;
			var C = ({
				_handleOnClick: e,
				status: t
			}) => {
				const a = {
						[o.a.INTAKE_PROGRESS]: {
							title: "placeholder text",
							content: "placeholder text"
						},
						[o.a.NOT_ELIGIBLE]: {
							title: "placeholder text",
							content: "placeholder text"
						},
						[o.a.NOT_STARTED]: {
							title: null,
							content: null
						},
						[o.a.VERIFICATION_DENIED]: {
							title: "Your account cannot be verified at this time",
							content: "You are unable to request verification at this time. Verification requests are limited to once every thirty days. In addition, if you’ve violated Twitter’s policy within the last 3 months, you are also ineligible. More information about the verification program at Twitter can be found here."
						},
						[o.a.VERIFICATION_PENDING]: {
							title: "Your verification request is pending",
							content: "We have received your request. The account will be reviewed by our team, and we will get back to you with our decision via email. More information about the verification program at Twitter can be found here."
						},
						[o.a.VERIFIED]: {
							title: "Your account is verified",
							content: "Your Twitter account was successfully verified on May 15, 2020. Verification status is dependent on adhering to Twitter policy and maintaining the personal details you confirmed when requesting this account be verified originally. More information about the verification program at Twitter can be found here."
						}
					},
					{
						content: n,
						title: r
					} = a[t];
				return r && n ? s.createElement(b.a, {
					style: g.container
				}, s.createElement(b.a, {
					style: [g.centerContent, g.image]
				}, s.createElement(p.a, {
					style: g.iconTwitter
				})), s.createElement(b.a, {
					style: g.centerContent
				}, s.createElement(f.b, {
					text: r,
					withBottomBorder: !1
				}), s.createElement(E.c, {
					align: "center",
					style: g.content
				}, n), s.createElement(_.a, {
					onClick: e,
					style: g.doneButton,
					type: "primary"
				}, w))) : null
			};
			class T extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_isVerificationIntakeEnabled", d.b.isTrue("identity_verification_intake_enabled")), r()(this, "_modalChildComponentOptions", {
						[y.name]: {
							proceed: () => {
								this.props.history.goBack()
							}
						},
						[C.name]: {
							proceed: () => {
								this.props.history.goBack()
							}
						}
					}), r()(this, "_modalComponentProps", {
						[y.name]: {
							hideBackButton: !0,
							withBottomBorder: !1
						},
						[C.name]: {
							hideBackButton: !1,
							withBottomBorder: !1
						}
					}), r()(this, "_renderVerificationWorkflow", () => {
						let e, t;
						const {
							accessStatus: a,
							history: n
						} = this.props;
						a === o.a.NOT_STARTED ? (e = s.createElement(y, {
							_handleOnClick: this._modalChildComponentOptions[y.name].proceed
						}), t = y.name) : (e = s.createElement(C, {
							_handleOnClick: this._modalChildComponentOptions[C.name].proceed,
							status: a
						}), t = C.name);
						const {
							hideBackButton: r,
							withBottomBorder: i
						} = this._modalComponentProps[t];
						return s.createElement(h.b, {
							hideBackButton: r,
							history: n,
							withBottomBorder: i
						}, e)
					})
				}
				componentDidMount() {
					this.props.fetchAccess()
				}
				render() {
					return this._isVerificationIntakeEnabled ? this._renderVerificationWorkflow() : null
				}
			}
			const v = l(T);
			t.default = v
		},
		"jU/U": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "ApplicationsScreen", (function() {
				return q
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("EPsT"),
				i = a("dZRF"),
				c = a("uo4S"),
				l = a("oEGd"),
				d = a("0KEI"),
				h = a("hqKg"),
				u = a("kGix");
			const m = Object(h.createSelector)((e, t) => Object(u.c)(i.d(e), c.d(e, t)), i.a.selectUniqUnrevokedApps, c.f, (e, t, a) => ({
					fetchStatus: e,
					applications: t,
					sessions: a
				})),
				p = {
					createLocalApiErrorHandler: Object(d.d)("APPLICATIONS"),
					fetchApplications: i.b,
					fetchSessionsIfNeeded: c.a,
					revokeAllSessions: c.b
				};
			var g = Object(l.g)(m, p),
				b = a("7JQg"),
				f = a("v//M"),
				E = a("yoO3"),
				_ = a("VIKJ"),
				S = a("ZvNX"),
				y = a("eM8g"),
				w = a("7FtF"),
				C = a("6vad"),
				T = a("FIs5"),
				v = a("csss"),
				I = a("0yYu"),
				O = a("t62R"),
				A = a("rHpw"),
				L = a("3XMw"),
				k = a.n(L),
				P = a("U+bB"),
				x = a("MWbm");
			const F = k.a.i23e2807,
				R = k.a.dd823129,
				D = k.a.ae1bbb26,
				N = k.a.ae72d4c4,
				j = k.a.i859a9d3,
				M = k.a.e5e8a899,
				B = k.a.hb12114e,
				U = k.a.f810f279,
				H = k.a.ge06310e,
				K = k.a.dd1b86f9,
				V = k.a.ee4b16f8,
				G = k.a.gf673efb,
				W = k.a.e25e40f0,
				z = k.a.d1baa458;
			class q extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_fetchApps", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchApplications: t
						} = this.props;
						t().catch(e({
							showToast: !0
						}))
					}), r()(this, "_fetchSessions", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchSessionsIfNeeded: t
						} = this.props;
						t().catch(e({
							showToast: !0
						}))
					}), r()(this, "_handleRetry", () => {
						this._fetchApps(), this._fetchSessions()
					}), r()(this, "_handleLogOutAll", () => {
						const {
							createLocalApiErrorHandler: e,
							revokeAllSessions: t
						} = this.props;
						t().catch(e({
							showToast: !0
						}))
					}), r()(this, "_render", () => {
						const e = this.props.applications;
						return s.createElement(x.a, null, s.createElement(C.b, {
							text: F
						}), e.length ? null : s.createElement(T.a, {
							header: H,
							message: V
						}), e.map((t, a) => {
							const n = "/settings/applications/" + t.app_id,
								r = e && e.length - 1 === a;
							return s.createElement(v.a, {
								description: t.organization ? K({
									name: t.organization
								}) : null,
								key: t.app_id,
								label: t.name,
								link: n,
								thumbnail: s.createElement(P.a, {
									accessibilityLabel: "",
									source: t.img_url,
									style: Y.avatar
								}),
								withBottomBorder: !r
							})
						}), this._renderSessionsDashboard())
					}), r()(this, "_renderSession", (e, t) => {
						const a = "/settings/sessions/" + encodeURIComponent(e.hashed_token);
						return s.createElement(S.a, {
							key: e.hashed_token,
							link: a,
							session: e,
							withBottomBorder: !t,
							withSummary: !1
						})
					})
				}
				UNSAFE_componentWillMount() {
					this._fetchApps(), this._fetchSessions()
				}
				render() {
					const {
						fetchStatus: e,
						location: t
					} = this.props;
					return s.createElement(E.a, null, s.createElement(w.a, {
						location: t,
						title: N
					}, s.createElement(f.a, {
						accessibilityLabel: M,
						fetchStatus: e,
						onRequestRetry: this._handleRetry,
						render: this._render
					})))
				}
				_renderSessionsDashboard() {
					const e = this.props.sessions,
						t = e.length,
						[a, n] = Object(_.a)(e, e => e.is_current_session);
					return t ? s.createElement(x.a, null, s.createElement(I.a, null), s.createElement(C.b, {
						text: R
					}), a[0] ? this._renderSession(a[0], !1) : null, s.createElement(o.a, {
						confirmationSheetConfirmButtonLabel: D,
						confirmationSheetConfirmButtonType: "primary",
						confirmationSheetHeadline: U,
						confirmationSheetText: z,
						label: B,
						onConfirmationSheetConfirm: this._handleLogOutAll
					}), s.createElement(y.a, null, s.createElement(k.a.I18NFormatMessage, {
						$i18n: "i34eeb36",
						infoText: t > 1 ? G({
							num: t - 1
						}) : W
					}, s.createElement(O.c, {
						link: "https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps",
						withInteractiveStyling: !1
					}, k.a.j3223a5b({
						learnMoreLabel: j
					})))), s.createElement(I.a, null), n.map((e, a) => this._renderSession(e, t - 1 === a))) : null
				}
			}
			r()(q, "defaultProps", {
				applications: [],
				sessions: []
			});
			const Y = A.a.create(e => ({
				avatar: {
					borderRadius: e.borderRadii.small,
					height: "100%",
					width: "100%"
				}
			}));
			t.default = Object(b.c)({
				page: "settings",
				section: "applications"
			})(g(q))
		},
		"jm1/": function(e, t, a) {
			"use strict";
			var n = a("rHpw");
			t.a = n.a.create(e => ({
				avatarContainer: {
					height: e.spaces.xxLarge,
					width: e.spaces.xxLarge
				},
				avatar: {
					borderRadius: e.borderRadii.small,
					height: "100%",
					width: "100%"
				},
				appText: {
					flexShrink: 1,
					marginHorizontal: e.spaces.small,
					width: "100%"
				},
				badge: {
					paddingHorizontal: e.spaces.xxSmall,
					marginLeft: e.spaces.xSmall,
					cursor: "default",
					backgroundColor: e.colors.gray50,
					flexShrink: 2
				},
				center: {
					justifyContent: "center"
				},
				device: {
					flexDirection: "row",
					width: "100%"
				},
				infoItem: {
					justifyContent: "center",
					minHeight: e.spaces.xxLarge,
					paddingHorizontal: e.spaces.small,
					paddingVertical: e.spaces.xSmall
				},
				itemContainer: {
					alignItems: "center",
					flexDirection: "row",
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical,
					width: "100%"
				},
				labelContainer: {
					alignItems: "center",
					flexDirection: "row",
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical,
					width: "100%"
				},
				bottomBorder: {
					borderBottomWidth: "1px",
					borderBottomStyle: "solid",
					borderBottomColor: e.colors.borderColor
				},
				link: {
					whiteSpace: "nowrap"
				},
				linkIcon: {
					color: e.colors.gray600,
					marginRight: e.spaces.xxSmall
				}
			}))
		},
		mEn7: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "EmailScreen", (function() {
				return N
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("vEo5"),
				i = a("1YZw"),
				c = a("oEGd"),
				l = a("0KEI"),
				d = a("hqKg"),
				h = a("P1r1");
			const u = Object(d.createSelector)(o.selectEmails, o.selectFetchStatus, (e, t) => ({
					emails: e,
					fetchStatus: t
				})),
				m = {
					addToast: i.b,
					createLocalApiErrorHandler: Object(l.d)("SETTINGS_EMAIL_SCREEN"),
					fetchDevices: o.fetchDevices,
					fetchSettings: h.d,
					resendConfirmationEmail: o.resendConfirmationEmail,
					updateEmail: o.updateEmail
				};
			var p = Object(c.g)(u, m),
				g = a("7JQg"),
				b = a("v//M"),
				f = a("yoO3"),
				E = a("VIKJ"),
				_ = a("7FtF"),
				S = a("WFkI"),
				y = a("p+r5"),
				w = a("0yYu"),
				C = a("jtO7"),
				T = a("atVN"),
				v = a("t62R"),
				I = a("3XMw"),
				O = a.n(I);
			const A = O.a.i2209530,
				L = O.a.ebeeac1a,
				k = O.a.dc013356,
				P = O.a.ea28c7ce,
				x = O.a.f3f66251,
				F = O.a.i5107de3,
				R = O.a.d19fd429,
				D = O.a.g4da3245;
			class N extends s.Component {
				constructor(e, t) {
					super(e, t), r()(this, "_render", () => {
						const {
							emails: e
						} = this.props, [t, a] = Object(E.a)(e, e => e.email_verified), n = t[0] && t[0].email, r = a[0] && a[0].email;
						return s.createElement(S.a, null, n ? s.createElement(y.a, {
							defaultValue: n,
							editable: !1,
							label: k,
							name: "current_email",
							type: "email"
						}) : null, r ? this._renderUnverifiedEmailMessage(r) : null, s.createElement(w.a, null), s.createElement(C.a, {
							color: "primary",
							label: e.length ? F : x,
							link: "/i/flow/add_email"
						}))
					}), r()(this, "_renderUnverifiedEmailMessage", e => s.createElement(T.a, null, s.createElement(v.c, {
						color: "gray600"
					}, s.createElement(O.a.I18NFormatMessage, {
						$i18n: "f3c4e2c5",
						unverifiedEmail: e
					}, s.createElement(v.c, {
						accessibilityRole: "button",
						color: "link",
						onClick: this._handleResendVerification
					}, O.a.h021352e({
						resendConfirmationLabel: R
					})))))), r()(this, "_handleResendVerification", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							resendConfirmationEmail: a
						} = this.props;
						a().then(() => e({
							text: D
						}), t({
							showToast: !0
						}))
					}), r()(this, "_handleFetchDevices", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchDevices: t
						} = this.props;
						t({
							include_pending_email: !0
						}).catch(e({
							showToast: !0
						}))
					}), this.state = {
						email: void 0
					}, this._handleFetchDevices(), this._initialPath = this._previousPath = window.location.pathname
				}
				shouldComponentUpdate(e, t) {
					const {
						createLocalApiErrorHandler: a,
						fetchSettings: n
					} = this.props;
					return this._previousPath !== location.pathname && this._initialPath === location.pathname && (this._handleFetchDevices(), n().catch(a())), this._previousPath = location.pathname, e !== this.props || t !== this.state
				}
				render() {
					const {
						location: e,
						fetchStatus: t
					} = this.props;
					return s.createElement(_.a, {
						location: e,
						submitDisabled: !this.state.email,
						submitLabel: A,
						title: L
					}, s.createElement(f.a, null, s.createElement(b.a, {
						accessibilityLabel: P,
						fetchStatus: t,
						onRequestRetry: this._handleFetchDevices,
						render: this._render
					})))
				}
			}
			t.default = Object(g.c)({
				page: "settings",
				section: "email"
			})(p(N))
		},
		o1YB: function(e, t, a) {
			"use strict";
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("t62R"),
				i = a("rHpw"),
				c = a("MWbm");
			class l extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_renderSubtextAndLink", () => {
						const {
							subtext: e
						} = this.props;
						return s.createElement(o.c, {
							color: "gray600",
							size: "small"
						}, e, " ", this._renderLearnMore())
					}), r()(this, "_renderLearnMore", () => {
						const {
							learnMoreLabel: e,
							learnMoreLink: t
						} = this.props;
						return t && e ? s.createElement(o.c, {
							link: t,
							size: "small"
						}, e) : null
					})
				}
				render() {
					const {
						label: e,
						learnMoreLabel: t,
						learnMoreLink: a,
						subtext: n,
						withBottomBorder: r
					} = this.props;
					return s.createElement(c.a, {
						style: [d.root, r && d.bottomBorder]
					}, s.createElement(o.c, null, e), n ? t && a ? this._renderSubtextAndLink() : s.createElement(o.c, {
						color: "gray600",
						size: "small"
					}, n) : null)
				}
			}
			r()(l, "defaultProps", {
				withBottomBorder: !0
			});
			const d = i.a.create(e => ({
				root: {
					backgroundColor: e.colors.cellBackground,
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				},
				bottomBorder: {
					borderBottomWidth: e.borderWidths.small,
					borderBottomStyle: "solid",
					borderBottomColor: e.colors.borderColor
				}
			}));
			t.a = l
		},
		oWwl: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "PushNotificationsScreen", (function() {
				return H
			}));
			a("IAdD"), a("MvUL"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("kPZX"),
				o = a("ERkP"),
				i = a("zh9S"),
				c = a("vEo5"),
				l = a("1YZw"),
				d = a("oEGd"),
				h = a("0KEI"),
				u = a("hqKg"),
				m = a("auX9"),
				p = a("G6rE");
			const g = Object(u.createSelector)(c.selectPushSettingsFetchStatus, e => {
					const t = p.e.selectLoggedInUser(e);
					return t && t.verified
				}, c.selectBrowserPushStatus, c.selectPushSettings, c.selectPushTemplate, m.j, (e, t, a, n, r, s) => ({
					fetchStatus: e,
					isVerified: t,
					pushStatus: a,
					pushSettings: n,
					pushTemplate: r,
					hasMultiAccount: s && s.length > 0
				})),
				b = {
					addToast: l.b,
					createLocalApiErrorHandler: Object(h.d)("SETTINGS_NOTIFICATIONS_PUSH_SCREEN"),
					fetchPushSettingsIfNeeded: c.fetchPushSettingsIfNeeded,
					googleAnalyticsPageView: i.a,
					pushSubscribe: c.pushSubscribe,
					removePushDeviceIfSubscribed: c.removePushDeviceIfSubscribed,
					scribeAction: i.c,
					scribePageImpression: i.d,
					updatePushNotificationSettings: c.updatePushNotificationSettings
				};
			var f = Object(d.g)(g, b),
				E = a("kGix"),
				_ = a("v//M"),
				S = a("3XMw"),
				y = a.n(S),
				w = a("vTtz"),
				C = a("7FtF"),
				T = a("FIs5"),
				v = a("cCdp");
			const I = y.a.hee41732,
				O = y.a.dcef34ab,
				A = y.a.a39f706d,
				L = y.a.hee41732,
				k = y.a.bb443ca5,
				P = y.a.cdce0394,
				x = y.a.b39bcae1,
				F = y.a.e542c362,
				R = y.a.fe11b3e9,
				D = y.a.a1245d3a,
				N = y.a.f580c738,
				j = y.a.i4ac9969,
				M = y.a.d8f69f09,
				B = {
					page: "settings",
					section: "push_notifications"
				},
				U = () => s.e() === s.a.APK_PUSH;
			class H extends o.Component {
				constructor(...e) {
					super(...e), r()(this, "_render", () => {
						const {
							isVerified: e,
							pushStatus: t,
							pushSettings: a,
							pushTemplate: n,
							scribeAction: r
						} = this.props, i = "denied" === s.d();
						if (t.subscribed) return o.createElement(w.a, {
							currentSettings: a,
							isVerified: e,
							onChange: this._handleSettingsChanged,
							scribeAction: r,
							scribeNamespace: B,
							template: n
						});
						if (i) {
							const e = U() ? M : j;
							return o.createElement(T.a, {
								header: N,
								message: e
							})
						}
						return t.supported ? o.createElement(T.a, {
							buttonText: O,
							header: x,
							message: F,
							onButtonPress: this._handlePushSubscribe
						}) : o.createElement(T.a, {
							header: R,
							message: D
						})
					}), r()(this, "_handleFetch", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchPushSettingsIfNeeded: t
						} = this.props;
						t().catch(e())
					}), r()(this, "_handleSettingsChanged", e => {
						const {
							createLocalApiErrorHandler: t,
							updatePushNotificationSettings: a
						} = this.props;
						a(e).catch(t({
							showToast: !0
						}))
					}), r()(this, "_handleSwitchChanged", (e, t) => {
						const {
							createLocalApiErrorHandler: a,
							pushSubscribe: n,
							removePushDeviceIfSubscribed: r,
							scribeAction: s
						} = this.props;
						t ? (s(Object.assign({}, B, {
							action: "enable"
						})), n().catch(a())) : (s(Object.assign({}, B, {
							action: "disable"
						})), r().catch(a({
							showToast: !0
						})))
					}), r()(this, "_handlePushSubscribe", () => {
						this.props.scribeAction(Object.assign({}, B, {
							element: "soft_prompt",
							action: "click"
						})), this.props.pushSubscribe()
					})
				}
				UNSAFE_componentWillMount() {
					this._handleFetch()
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					t(B), e(B)
				}
				UNSAFE_componentWillUpdate(e) {
					e.fetchStatus === E.a.LOADED && !1 === s.g() && (this.props.addToast({
						text: A
					}), e.history.replace("/settings")), e.fetchStatus === E.a.LOADED && !e.pushStatus.subscribed && e.pushStatus.supported && this.props.scribeAction(Object.assign({}, B, {
						element: "soft_prompt",
						action: "impression"
					}))
				}
				render() {
					const {
						fetchStatus: e,
						hasMultiAccount: t,
						location: a,
						pushStatus: n
					} = this.props, r = !U() && n.supported ? o.createElement(v.a, {
						checked: n.subscribed,
						helpText: k + (t ? " " + P : ""),
						key: "switchAll",
						label: L,
						name: "switchAll",
						onChange: this._handleSwitchChanged,
						type: "switch",
						withBottomBorder: !1
					}) : null;
					return o.createElement(C.a, {
						location: a,
						title: I
					}, r, o.createElement(_.a, {
						fetchStatus: e,
						onRequestRetry: this._handleFetch,
						render: this._render
					}))
				}
			}
			t.default = f(H)
		},
		oX5A: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "disableLoginVerificationLabel", (function() {
				return k
			})), a.d(t, "disableLabel", (function() {
				return x
			})), a.d(t, "oldDisableMethodLabel", (function() {
				return F
			})), a.d(t, "LoginVerificationScreen", (function() {
				return oe
			}));
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("k49u"),
				i = a("wvRX"),
				c = a("oEGd"),
				l = a("0KEI"),
				d = a("hqKg");
			const h = Object(d.createSelector)(i.e, i.f, (e, t) => ({
					fetchStatus: e,
					loginVerificationSettings: t
				})),
				u = {
					createLocalApiErrorHandler: Object(l.d)("SETTINGS_LOGIN_VERIFICATION_SCREEN"),
					disableLoginVerification: i.a,
					disableLoginVerificationMethod: i.b,
					enrollIn2FA: i.c,
					fetchLoginVerificationSettings: i.d
				};
			var m = Object(c.g)(h, u),
				p = a("7JQg"),
				g = a("wrlS"),
				b = a("v//M"),
				f = a("3XMw"),
				E = a.n(f),
				_ = a("yoO3"),
				S = a("7FtF"),
				y = a("eb3s"),
				w = a("6vad"),
				C = a("cCdp"),
				T = a("csss"),
				v = a("jtO7"),
				I = a("0yYu");
			const O = E.a.bc262c2d,
				A = E.a.hc1a91da,
				L = E.a.gee4dc74,
				k = E.a.b39c7b14,
				P = E.a.a923fce6,
				x = E.a.ff781e0a,
				F = E.a.c557ac30,
				R = E.a.d1334649,
				D = E.a.ee3a7bf9,
				N = E.a.aa9139cc,
				j = E.a.i0d4f09e,
				M = E.a.ja6bbfa0,
				B = E.a.dd703318,
				U = E.a.i859a9d3,
				H = E.a.c2570921,
				K = E.a.f3820211,
				V = E.a.ab61b41a,
				G = E.a.h4787492,
				W = E.a.h6d0d89c,
				z = E.a.f57be1cc,
				q = E.a.e2b81a1f,
				Y = E.a.cd195528,
				X = E.a.b1686800,
				Q = E.a.a1860ee7,
				J = E.a.j45a2856,
				$ = E.a.d8612d9c,
				Z = E.a.e13d4467,
				ee = E.a.j24c37b2,
				te = E.a.a219e217,
				ae = E.a.j265ddb6,
				ne = E.a.a136ecac,
				re = {
					two_factor: "two_factor",
					sms: "two_factor_auth_sms",
					totp: "two_factor_auth_totp",
					u2fSecurityKey: g.b.isTrue("2fa_multikey_management_enabled") ? void 0 : "two_factor_auth_u2f_security_key",
					U2fSecurityKey: g.b.isTrue("2fa_multikey_management_enabled") ? "two_factor_auth_multi_security_key" : void 0
				},
				se = Object.freeze({
					NONE: "NONE",
					VERIFY_EMAIL: "verify_email",
					METHOD: "method",
					ROOT_SETTING: "root_setting",
					ENABLE_LOGIN_VERIFICATION: "enable_login_verification",
					SUSPENDED: "suspended"
				});
			class oe extends s.Component {
				constructor(e) {
					super(e), r()(this, "_u2f_security_key", g.b.isTrue("2fa_multikey_management_enabled") ? "U2fSecurityKey" : "u2fSecurityKey"), r()(this, "_2FAMultiKeyEnabled", g.b.isTrue("2fa_multikey_management_enabled")), r()(this, "_render", () => {
						const {
							loginVerificationSettings: {
								isOldPushUser: e
							}
						} = this.props;
						return s.createElement(s.Fragment, null, e ? this._renderLegacyPush2FASettings() : this._render2FASettings(), this.state.confirmationType !== se.NONE ? this._renderConfirmationSheet() : null)
					}), r()(this, "_renderConfirmationSheet", () => {
						const {
							confirmationType: e
						} = this.state;
						switch (e) {
							case se.ROOT_SETTING:
								return s.createElement(y.a, {
									confirmButtonLabel: D,
									headline: x,
									onCancel: this._handleCloseConfirmation,
									onConfirm: this._handleConfirmDisableLoginVerification,
									text: P
								});
							case se.METHOD:
								return s.createElement(y.a, {
									confirmButtonLabel: D,
									headline: x,
									onCancel: this._handleCloseConfirmation,
									onConfirm: this._handleConfirmDisableMethod,
									text: R
								});
							case se.VERIFY_EMAIL:
								return s.createElement(y.a, {
									cancelButtonLabel: U,
									cancelButtonLink: "https://help.twitter.com/managing-your-account/cant-confirm-my-email-address",
									confirmButtonLabel: te,
									headline: ae,
									onCancel: this._handleCloseConfirmation,
									onConfirm: this._handleCloseConfirmation,
									text: ne
								});
							case se.ENABLE_LOGIN_VERIFICATION:
								return s.createElement(y.a, {
									confirmButtonLabel: ee,
									headline: $,
									onConfirm: this._handleCloseConfirmation,
									text: Z,
									withCancelButton: !1
								});
							case se.SUSPENDED:
								return s.createElement(y.a, {
									confirmButtonLabel: ee,
									headline: "Something went wrong",
									learnMoreLink: "https://help.twitter.com/managing-your-account/suspended-twitter-accounts",
									learnMoreText: U,
									onConfirm: this._handleCloseConfirmation,
									text: "It looks like your account is currently suspended. You can’t turn on two-factor authentication while your account is suspended.",
									withCancelButton: !1
								});
							default:
								return null
						}
					}), r()(this, "_handleRetry", () => {
						this.props.fetchLoginVerificationSettings()
					}), r()(this, "_handleTwoFactorEnrollmentChange", (e, t) => {
						if (t) {
							const {
								createLocalApiErrorHandler: e,
								enrollIn2FA: t
							} = this.props;
							t({
								flow: "two_factor"
							}).catch(e(this._enrollmentErrorHandlingMap))
						} else this._showDisableLoginVerificationConfirmation()
					}), r()(this, "_handleTwoFactorMethodsChange", (e, t) => {
						const {
							createLocalApiErrorHandler: a
						} = this.props;
						if (t) {
							const {
								enrollIn2FA: t
							} = this.props;
							t({
								flow: re[e]
							}).catch(a(this._enrollmentErrorHandlingMap))
						} else this._showDisableMethodConfirmation(e)
					}), r()(this, "_handleAddSecurityKey", () => this._handleTwoFactorMethodsChange(this._u2f_security_key, !0)), r()(this, "_showDisableLoginVerificationConfirmation", () => {
						this.setState({
							confirmationType: se.ROOT_SETTING
						})
					}), r()(this, "_handleConfirmDisableLoginVerification", () => {
						const {
							createLocalApiErrorHandler: e,
							disableLoginVerification: t
						} = this.props;
						this._handleCloseConfirmation(), t().catch(e())
					}), r()(this, "_showDisableMethodConfirmation", e => {
						"sms" !== e && "totp" !== e && "u2fSecurityKey" !== e || this.setState({
							confirmationType: se.METHOD,
							method: e
						})
					}), r()(this, "_handleConfirmDisableMethod", () => {
						const {
							createLocalApiErrorHandler: e,
							disableLoginVerificationMethod: t
						} = this.props, {
							method: a
						} = this.state;
						this._handleCloseConfirmation(), a && t({
							method: a
						}).catch(e(this._disableMethodErrorHandlingMap))
					}), r()(this, "_showVerifyEmailConfirmation", () => {
						this.setState({
							confirmationType: se.VERIFY_EMAIL
						})
					}), r()(this, "_showEnableLoginVerificationConfirmation", () => {
						this.setState({
							confirmationType: se.ENABLE_LOGIN_VERIFICATION
						})
					}), r()(this, "_showSuspendedConfirmation", () => {
						this.setState({
							confirmationType: se.SUSPENDED
						})
					}), r()(this, "_handleCloseConfirmation", () => {
						this.setState({
							confirmationType: se.NONE,
							method: void 0
						})
					}), r()(this, "_isChecked", e => {
						const {
							loginVerificationSettings: t
						} = this.props;
						return Object.keys(t.methods).some(t => t.toLowerCase() === e.toLowerCase())
					}), r()(this, "_createEnrollmentErrorHandlingMap", () => {
						const {
							history: e
						} = this.props;
						return {
							[o.a.AccessDeniedByBouncer]: {
								customAction: ({
									bounce_location: t
								}) => {
									t && e.push({
										state: {
											bounce_location: t
										},
										pathname: "/settings/account/login_verification/enrollment"
									})
								}
							},
							[o.a.CannotEnableLoginVerificationUnconfirmedEmail]: {
								customAction: () => {
									this._showVerifyEmailConfirmation()
								}
							},
							[o.a.CannotEnrollLoginVerificationNotYetEnabled]: {
								customAction: () => {
									this._showEnableLoginVerificationConfirmation()
								}
							},
							[o.a.CurrentUserSuspended]: {
								customAction: () => {
									this._showSuspendedConfirmation()
								}
							}
						}
					}), this.state = {
						confirmationType: se.NONE,
						method: void 0
					}, this._disableMethodErrorHandlingMap = {
						[o.a.IneligibleFor2faAfterModification]: {
							customAction: () => {
								this._showDisableLoginVerificationConfirmation()
							}
						}
					}, this._enrollmentErrorHandlingMap = this._createEnrollmentErrorHandlingMap()
				}
				UNSAFE_componentWillMount() {
					const {
						createLocalApiErrorHandler: e,
						fetchLoginVerificationSettings: t
					} = this.props;
					t().catch(e())
				}
				render() {
					const {
						fetchStatus: e,
						location: t
					} = this.props;
					return s.createElement(_.a, null, s.createElement(S.a, {
						location: t,
						title: B
					}, s.createElement(b.a, {
						accessibilityLabel: M,
						fetchStatus: e,
						onRequestRetry: this._handleRetry,
						render: this._render
					})))
				}
				_render2FASettings() {
					const {
						loginVerificationSettings: {
							twoFactorAuthEnabled: e
						}
					} = this.props;
					return s.createElement(s.Fragment, null, s.createElement(w.b, {
						text: B
					}), s.createElement(C.a, {
						checked: e && this._isChecked("sms"),
						helpText: K,
						label: H,
						name: "sms",
						onChange: this._handleTwoFactorMethodsChange
					}), s.createElement(C.a, {
						checked: e && this._isChecked("totp"),
						helpText: G,
						label: V,
						name: "totp",
						onChange: this._handleTwoFactorMethodsChange
					}), s.createElement(C.a, {
						checked: e && this._isChecked(this._u2f_security_key),
						helpText: g.b.isTrue("responsive_web_new_copy_security_key_2fa_enabled") ? q : z,
						label: W,
						learnMoreLink: "https://help.twitter.com/managing-your-account/two-factor-authentication",
						name: this._u2f_security_key,
						onChange: this._handleTwoFactorMethodsChange
					}), e && this._2FAMultiKeyEnabled ? this._renderU2fSecurityKeyLinks() : null, e ? this._renderAdditionalMethods() : null)
				}
				_renderU2fSecurityKeyLinks() {
					const {
						loginVerificationSettings: {
							methods: e
						}
					} = this.props;
					return Array.isArray(e[this._u2f_security_key]) && e[this._u2f_security_key].length ? s.createElement(s.Fragment, null, s.createElement(T.a, {
						label: X,
						link: {
							pathname: "/settings/account/login_verification/security_keys"
						}
					}), s.createElement(v.a, {
						align: "left",
						color: "primary",
						label: Y,
						onPress: this._handleAddSecurityKey
					})) : null
				}
				_renderLegacyPush2FASettings() {
					const {
						loginVerificationSettings: {
							twoFactorAuthEnabled: e
						}
					} = this.props;
					return s.createElement(s.Fragment, null, s.createElement(C.a, {
						checked: e,
						helpText: j,
						label: N,
						name: "legacy_push",
						onChange: this._handleTwoFactorEnrollmentChange
					}), this._renderAdditionalMethods())
				}
				_renderAdditionalMethods() {
					return s.createElement(s.Fragment, null, s.createElement(I.a, null), s.createElement(w.b, {
						text: O
					}), s.createElement(T.a, {
						description: L,
						label: A,
						link: "/settings/account/login_verification/backup_code"
					}), s.createElement(T.a, {
						description: J,
						label: Q,
						link: "/settings/account/login_verification/temporary_password",
						withBottomBorder: !1
					}))
				}
			}
			t.default = Object(p.c)({
				page: "settings",
				section: "loginVerification"
			})(m(oe))
		},
		oXNP: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SecurityKeysScreen", (function() {
				return C
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("wvRX"),
				i = a("rxPX"),
				c = a("0KEI");
			var l = Object(i.a)().propsFromState(() => ({
					fetchStatus: o.e,
					loginVerificationSettings: o.f
				})).propsFromActions(() => ({
					createLocalApiErrorHandler: Object(c.d)("SETTINGS_SECURITY_KEYS_SCREEN"),
					enrollIn2FA: o.c,
					fetchLoginVerificationSettings: o.d
				})),
				d = a("v//M"),
				h = a("3XMw"),
				u = a.n(h),
				m = a("5FtR"),
				p = a("7FtF"),
				g = a("xHsv"),
				b = a("csss"),
				f = a("t62R"),
				E = a("jtO7");
			const _ = u.a.b1686800,
				S = u.a.f7954a0c,
				y = u.a.h69986c1,
				w = u.a.i5896ba2;
			class C extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_renderContent", () => {
						const {
							location: e,
							loginVerificationSettings: {
								methods: t
							}
						} = this.props;
						return !(!t.U2fSecurityKey || !t.U2fSecurityKey.length) ? s.createElement(p.a, {
							location: e,
							title: _
						}, s.createElement(g.a, {
							description: y,
							withBottomBorder: !0
						}), this._renderU2fSecurityKeys()) : s.createElement(m.a, {
							to: "/settings/account/login_verification"
						})
					}), r()(this, "_fetchLoginVerificationSettings", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchLoginVerificationSettings: t
						} = this.props;
						t().catch(e())
					}), r()(this, "_handleFetchRetry", () => this._fetchLoginVerificationSettings())
				}
				componentDidMount() {
					this._fetchLoginVerificationSettings()
				}
				render() {
					const {
						fetchStatus: e
					} = this.props;
					return s.createElement(d.a, {
						accessibilityLabel: S,
						fetchStatus: e,
						onRequestRetry: this._handleFetchRetry,
						render: this._renderContent
					})
				}
				_renderU2fSecurityKeys() {
					const {
						loginVerificationSettings: {
							methods: e
						}
					} = this.props;
					return Array.isArray(e.U2fSecurityKey) ? s.createElement(s.Fragment, null, e.U2fSecurityKey.map(e => s.createElement(b.a, {
						key: e.id,
						label: s.createElement(f.c, null, e.name || "(Unnamed Security Key)"),
						link: {
							pathname: "/settings/account/login_verification/security_keys/" + e.id
						}
					})), s.createElement(E.a, {
						align: "left",
						color: "primary",
						label: w
					})) : null
				}
			}
			const T = l(C);
			t.default = T
		},
		"p+r5": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return v
			}));
			a("IAdD");
			var n = a("97Jx"),
				r = a.n(n),
				s = a("LdEA"),
				o = a.n(s),
				i = a("KEM+"),
				c = a.n(i),
				l = a("ERkP"),
				d = a("t62R"),
				h = a("piX5"),
				u = a("3XMw"),
				m = a.n(u),
				p = a("tI3i"),
				g = a.n(p),
				b = a("oQhu"),
				f = a("rHpw"),
				E = a("aITJ"),
				_ = a("MWbm"),
				S = (a("aWzz"), a("Oib4")),
				y = a("WtWS"),
				w = a("ioan");
			const C = e => e.length,
				T = (e, t = C) => t(e);
			class v extends l.Component {
				constructor(e) {
					super(e), c()(this, "_blurOnBackspaceKeyUpForKaiOS", !1), c()(this, "_getTextInputStyle", Object(b.a)(e => [I.root, !e && I.disabled])), c()(this, "_calculateLength", e => T(e, this.props.calculateLength)), c()(this, "_shouldRenderCharCount", () => {
						const {
							isFocused: e
						} = this.state, t = this._isFormInvalid();
						return Boolean((e || t) && this._getMaxCharCount())
					}), c()(this, "_handleBlur", e => {
						const {
							onBlur: t
						} = this.props, {
							value: a
						} = e.currentTarget, n = this._calculateLength(a);
						this.setState({
							isFocused: !1,
							charCount: n
						}), t && t(e)
					}), c()(this, "_handleChange", e => {
						const {
							onChange: t
						} = this.props, {
							value: a
						} = e.currentTarget, n = this._calculateLength(a);
						this.setState({
							isFocused: !0,
							charCount: n
						}), t && t(e)
					}), c()(this, "_handleFocus", e => {
						const {
							onFocus: t
						} = this.props;
						this.setState({
							isFocused: !0
						}), t && t(e)
					}), c()(this, "_handleKeyPress", e => {
						const {
							multiline: t,
							onKeyPress: a,
							onSubmitEditing: n
						} = this.props;
						a && a(e), e.isDefaultPrevented() || "Enter" !== e.key || e.shiftKey || t || !n || (e.preventDefault(), n(e))
					}), c()(this, "_handleKeyDown", e => {
						const {
							onKeyDown: t
						} = this.props, {
							charCount: a
						} = this.state, n = 0 === a;
						E.a.isKaiOS() && "Backspace" === e.key && n ? this._blurOnBackspaceKeyUpForKaiOS = n : t && t(e)
					}), c()(this, "_handleKeyUp", e => {
						const {
							onKeyUp: t
						} = this.props;
						E.a.isKaiOS() && "Backspace" === e.key && this._blurOnBackspaceKeyUpForKaiOS && (e.preventDefault(), this.blur()), t && t(e)
					}), c()(this, "_setTextInputRef", e => {
						this._textInput = e
					}), c()(this, "_checkComponentPropsUsageCorrectness", e => {
						const {
							defaultValue: t,
							maxLength: a,
							validLength: n,
							value: r,
							onChange: s
						} = e, o = !!s, i = "string" == typeof r, c = "string" == typeof t;
						g()(!(!c && i && !o), "A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined."), g()(!(a && n && n > a), "Max length should be equal or greater than valid length."), g()(!(void 0 !== a && a <= 0 || void 0 !== n && n <= 0), "Set editable to false instead of limiting the valid character count to 0.")
					}), c()(this, "_exceedsValidLength", e => {
						const t = this._getMaxCharCount();
						return !!t && e > t
					}), c()(this, "_getMaxCharCount", () => this.props.validLength || this.props.maxLength), this._checkComponentPropsUsageCorrectness(e);
					const {
						defaultValue: t,
						value: a
					} = e;
					this.state = {
						charCount: this._calculateLength(a || t || ""),
						isFocused: !1
					}
				}
				componentDidUpdate(e) {
					const {
						validLength: t,
						maxLength: a,
						onChange: n,
						value: r
					} = this.props, {
						validLength: s,
						maxLength: o,
						onChange: i,
						value: c
					} = e;
					s === t && a === o && !!n === !!i && "string" == typeof r === ("string" == typeof c) || this._checkComponentPropsUsageCorrectness(this.props)
				}
				static getDerivedStateFromProps(e, t) {
					const {
						calculateLength: a,
						value: n
					} = e, r = "string" == typeof n ? T(n, a) : 0;
					return "string" == typeof n && r !== t.charCount ? {
						charCount: r
					} : null
				}
				render() {
					const {
						accessibilityLabel: e,
						errorText: t,
						helperText: a,
						style: n,
						editable: r
					} = this.props, {
						isFocused: s
					} = this.state, o = this._isFormInvalid();
					return l.createElement(_.a, {
						style: [O.root, n]
					}, l.createElement(_.a, {
						accessibilityLabel: e,
						accessibilityRole: "label",
						style: [h.a.border, O.textInputFormStyle, o && h.a.invalidBorderColor, s && o && h.a.focusedBorderInvalid, s && !o && h.a.focusedBorderValid, !r && h.a.disabled]
					}, l.createElement(_.a, {
						style: O.textInputFormWrapper
					}, l.createElement(_.a, {
						style: [O.textInputHeader]
					}, this._renderLabel(), this._shouldRenderCharCount() ? this._renderCharCount() : null), this._renderTextInput())), l.createElement(_.a, {
						style: [O.sidePadding, O.underTextInputForm]
					}, l.createElement(_.a, {
						style: O.subtextWrapper
					}, a ? this._renderHelperText() : null, o && t ? this._renderErrorText() : null)))
				}
				_renderLabel() {
					const {
						label: e
					} = this.props, {
						isFocused: t
					} = this.state, a = t ? "primary" : "gray600", n = this._isFormInvalid() ? "red500" : a;
					return l.createElement(d.c, {
						color: n,
						numberOfLines: 1,
						size: "small",
						style: O.textInputHeaderItem
					}, e)
				}
				_renderTextInput() {
					const e = this.props,
						{
							editable: t,
							Icon: a,
							maxLength: n,
							showValidationIcon: s
						} = e,
						i = o()(e, ["accessibilityLabel", "calculateLength", "editable", "errorText", "helperText", "Icon", "invalid", "label", "maxLength", "onBlur", "onChange", "onSubmitEditing", "onFocus", "onKeyDown", "onKeyPress", "onKeyUp", "showValidationIcon", "style", "validLength"]),
						c = this.getValue(),
						h = this._calculateLength(c),
						u = n + c.length - h;
					return l.createElement(_.a, {
						style: I.container
					}, a ? this._renderIcon() : null, l.createElement(d.c, {
						size: "large",
						style: I.wrapper
					}, l.createElement(w.a, r()({}, i, {
						editable: t,
						maxLength: n ? u : void 0,
						onBlur: this._handleBlur,
						onChange: this._handleChange,
						onFocus: this._handleFocus,
						onKeyDown: this._handleKeyDown,
						onKeyPress: this._handleKeyPress,
						onKeyUp: this._handleKeyUp,
						ref: this._setTextInputRef,
						style: this._getTextInputStyle(t)
					}))), s ? this._renderValidationIcon() : null)
				}
				_renderHelperText() {
					return l.createElement(_.a, {
						accessibilityLiveRegion: "polite"
					}, l.createElement(d.c, {
						color: "gray600",
						size: "small",
						style: O.subtext
					}, this.props.helperText))
				}
				_renderErrorText() {
					return l.createElement(_.a, {
						accessibilityLiveRegion: "assertive"
					}, l.createElement(d.c, {
						color: "red500",
						size: "small",
						style: O.subtext
					}, this.props.errorText))
				}
				_renderCharCount() {
					const {
						charCount: e
					} = this.state, t = this._getMaxCharCount(), a = this._exceedsValidLength(e), n = t && m.a.ia24dc8c(t), r = m.a.ia24dc8c(e);
					return l.createElement(_.a, {
						accessibilityLiveRegion: "polite",
						style: [O.textInputHeaderItem, O.charCount]
					}, l.createElement(d.c, {
						color: a ? "red500" : "gray600",
						size: "small"
					}, n ? `${r}/${n}` : ""))
				}
				_renderIcon() {
					const {
						Icon: e
					} = this.props, {
						isFocused: t
					} = this.state, a = [O.icon, t && O.focusedIcon];
					return e && l.createElement(e, {
						style: a
					})
				}
				_renderValidationIcon() {
					return this._isFormInvalid() ? l.createElement(S.a, {
						style: [O.validationIcon, h.a.invalidColor]
					}) : l.createElement(y.a, {
						style: [O.validationIcon, h.a.validColor]
					})
				}
				_isFormInvalid() {
					const {
						charCount: e
					} = this.state;
					return this.props.invalid || this._exceedsValidLength(e) || !1
				}
				blur() {
					this._textInput && this._textInput.blur()
				}
				getValue() {
					return this._textInput && this._textInput.getValue() || ""
				}
				focus() {
					this._textInput && this._textInput.focus()
				}
				isValidLength() {
					const e = this.getValue(),
						t = this._calculateLength(e);
					return !this._exceedsValidLength(t)
				}
			}
			c()(v, "defaultProps", {
				autoComplete: "on",
				autoCorrect: !0,
				autoFocus: !1,
				editable: !0,
				invalid: !1
			}), v.propTypes = {};
			const I = f.a.create(e => ({
					container: {
						flexDirection: "row",
						flexGrow: 1,
						flexShrink: 1,
						overflow: "hidden",
						paddingBottom: e.spaces.xxSmall,
						paddingHorizontal: e.spaces.xxSmall,
						paddingTop: e.spaces.micro
					},
					root: {
						backgroundColor: "transparent",
						borderRadius: e.borderRadii.none,
						borderWidth: e.borderWidths.none,
						boxSizing: "border-box",
						color: "inherit",
						fontFamily: "inherit",
						fontSize: "inherit",
						textAlign: "inherit",
						outlineStyle: "none",
						padding: 0
					},
					wrapper: {
						alignItems: "center",
						alignSelf: "flex-start",
						display: "flex",
						width: "100%"
					},
					disabled: {
						color: e.colors.gray600
					}
				})),
				O = f.a.create(e => ({
					root: {
						paddingHorizontal: e.componentDimensions.gutterHorizontal,
						paddingVertical: e.componentDimensions.gutterVertical
					},
					textInputFormStyle: {
						flexDirection: "row"
					},
					textInputFormWrapper: {
						flexGrow: 1,
						flexShrink: 1
					},
					textInputHeader: {
						flexDirection: "row",
						justifyContent: "space-between"
					},
					textInputHeaderItem: {
						paddingTop: e.spaces.xxSmall,
						paddingHorizontal: e.spaces.xxSmall
					},
					charCount: {
						flexGrow: 1,
						alignItems: "flex-end"
					},
					sidePadding: {
						paddingHorizontal: e.spaces.xxSmall
					},
					underTextInputForm: {
						flexDirection: "row"
					},
					subtextWrapper: {
						flexDirection: "column",
						flex: 1,
						paddingRight: e.spaces.medium,
						paddingTop: e.spaces.micro
					},
					subtext: {
						alignSelf: "flex-start"
					},
					focusedIcon: {
						color: e.colors.primary
					},
					icon: {
						alignSelf: "center",
						color: e.colors.gray600,
						paddingRight: e.spaces.xxSmall
					},
					validationIcon: {
						alignSelf: "center",
						paddingLeft: e.spaces.xxSmall
					}
				}))
		},
		piX5: function(e, t, a) {
			"use strict";
			const n = a("rHpw").a.create(e => ({
				border: {
					borderRadius: e.borderRadii.small,
					borderWidth: e.borderWidths.small,
					borderColor: e.colors.gray200
				},
				focusedBorderValid: {
					boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`,
					borderColor: e.colors.primary
				},
				focusedBorderInvalid: {
					boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}`
				},
				invalidBorderColor: {
					borderColor: e.colors.red500
				},
				invalidColor: {
					color: e.colors.red500
				},
				validColor: {
					color: e.colors.primary
				},
				disabled: {
					cursor: "default",
					opacity: .5,
					backgroundColor: e.colors.gray50,
					borderColor: e.colors.gray50
				}
			}));
			t.a = n
		},
		q1AG: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "ScreenNameScreen", (function() {
				return D
			}));
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = a("P1r1"),
				c = a("oEGd"),
				l = a("0KEI"),
				d = a("hqKg"),
				h = a("G6rE");
			const u = Object(d.createSelector)(h.e.selectLoggedInUser, e => ({
					loggedInUser: e
				})),
				m = {
					createLocalApiErrorHandler: Object(l.d)("SETTINGS_SCREEN_NAME_SCREEN"),
					googleAnalyticsPageView: o.a,
					scribePageImpression: o.d,
					updateSettings: i.H
				};
			var p = Object(c.g)(u, m),
				g = a("3XMw"),
				b = a.n(g),
				f = (a("kYxP"), a("LXAX")),
				E = a("rxPX"),
				_ = Object(E.a)().propsFromState(() => ({
					loggedInUser: h.e.selectLoggedInUser,
					usernameData: f.b
				})).adjustStateProps(({
					loggedInUser: e,
					usernameData: t
				}) => ({
					loggedInUser: e,
					suggestions: (t.suggestions ? t.suggestions.map(e => e.suggestion) : []).filter(e => e !== t.username),
					valid: t.valid,
					validatedScreenName: t.username,
					validationError: t.desc
				})).propsFromActions(() => ({
					fetchUsernameAvailability: f.a
				})),
				S = a("VY6S"),
				y = a("MWbm"),
				w = a("t62R"),
				C = a("p+r5"),
				T = a("0yYu"),
				v = a("6vad"),
				I = a("rHpw");
			const O = b.a.d1f6d336,
				A = b.a.de65c756;
			class L extends s.Component {
				constructor(e) {
					super(e), r()(this, "_fetchUsernameStatus", e => {
						const {
							fetchUsernameAvailability: t,
							loggedInUser: a
						} = this.props;
						a && t({
							email: a.email && a.email[0] && a.email[0].address,
							full_name: a.name,
							suggest: !0,
							username: e
						})
					}), r()(this, "_handleTypedFieldChange", e => {
						const {
							onScreenNameChanged: t
						} = this.props;
						this._fetchUsernameStatusDebounced(e.target.value), this.setState({
							value: e.target.value
						}), t(e.target.value)
					}), r()(this, "_handleItemSelect", e => {
						const {
							onScreenNameChanged: t
						} = this.props;
						if (e.target instanceof Node) {
							const a = e.target.textContent;
							this.setState({
								value: a
							}), t(a)
						}
					}), this.state = {
						value: e.loggedInUser && e.loggedInUser.screen_name
					}, this._fetchUsernameStatusDebounced = Object(S.a)((...e) => this._fetchUsernameStatus(...e), 250)
				}
				componentDidMount() {
					const {
						loggedInUser: e
					} = this.props;
					e && this._fetchUsernameStatus(e.screen_name)
				}
				_renderOption(e, t) {
					return s.createElement(w.c, {
						accessibilityRole: "button",
						color: "link",
						key: t,
						onPress: this._handleItemSelect,
						style: k.altOptionText,
						withInteractiveStyling: !0
					}, e)
				}
				render() {
					const {
						loggedInUser: e,
						suggestions: t,
						valid: a,
						validatedScreenName: n,
						validationError: r
					} = this.props;
					if (!e) return null;
					const o = !(n === e.screen_name || a || !r);
					return s.createElement(y.a, null, s.createElement(C.a, {
						autoComplete: "off",
						autoCorrect: !1,
						errorText: r,
						invalid: o,
						label: O,
						name: "typedScreenName",
						onChange: this._handleTypedFieldChange,
						spellCheck: "false",
						value: this.state.value
					}), s.createElement(T.a, null), s.createElement(v.b, {
						text: A
					}), s.createElement(y.a, {
						style: k.container
					}, t.map((e, t) => this._renderOption(e, t))))
				}
			}
			const k = I.a.create(e => ({
				container: {
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				},
				altOptionText: {
					display: "block",
					paddingVertical: e.spaces.xSmall
				}
			}));
			var P = _(L),
				x = a("7FtF");
			const F = b.a.je506a60,
				R = {
					page: "settings",
					section: "screen_name"
				};
			class D extends s.Component {
				constructor(e) {
					super(e), r()(this, "_handleCancel", () => {
						const {
							history: e
						} = this.props;
						e.goBack({
							backLocation: "/settings"
						})
					}), r()(this, "_handleSubmit", () => {
						const {
							createLocalApiErrorHandler: e,
							updateSettings: t
						} = this.props, {
							screenName: a
						} = this.state;
						a && t({
							screen_name: a
						}).then(this._handleCancel, e({
							showToast: !0
						}))
					}), r()(this, "_handleScreenNameChange", e => {
						this.setState({
							screenName: e
						})
					}), this.state = {
						screenName: void 0
					}
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					t(R), e(R)
				}
				render() {
					const {
						location: e,
						loggedInUser: t
					} = this.props, {
						screenName: a
					} = this.state, n = a && t && a !== t.screen_name;
					return s.createElement(x.a, {
						location: e,
						onSubmit: this._handleSubmit,
						submitDisabled: !n,
						title: F
					}, s.createElement(P, {
						onScreenNameChanged: this._handleScreenNameChange
					}))
				}
			}
			t.default = p(D)
		},
		"qYi+": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return m
			}));
			a("jQ/y");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zfvc"),
				i = a("t62R"),
				c = a("V2ml"),
				l = a("rHpw"),
				d = a("CK8+"),
				h = a("MWbm");
			let u = 1;
			class m extends s.Component {
				constructor() {
					super(), r()(this, "_handleGateToggle", () => {
						const {
							name: e,
							offValue: t,
							onChange: a,
							options: n,
							value: r
						} = this.props;
						a(e, r === t ? n[0].value : t)
					}), r()(this, "_handleAnimationComplete", () => {
						this._radioGroupRef && this._radioGroupRef.focus()
					}), r()(this, "_setRadioGroupRef", e => {
						this._radioGroupRef = e
					}), this._labelId = `RADIO_GROUP_${u}_LABEL`, u += 1
				}
				render() {
					const {
						accessibilityLabel: e,
						description: t,
						disabled: a,
						label: n,
						name: r,
						onChange: l,
						offValue: u,
						options: m,
						value: g
					} = this.props;
					return s.createElement(h.a, {
						accessibilityLabel: e,
						accessibilityRole: "group",
						"aria-labelledby": n && !e ? this._labelId : void 0,
						style: [p.root, a && p.disabled]
					}, s.createElement(s.Fragment, null, n ? s.createElement(h.a, {
						accessibilityRole: "label",
						nativeID: this._labelId,
						style: p.header
					}, s.createElement(h.a, {
						style: p.label
					}, s.createElement(i.c, {
						weight: "bold"
					}, n), s.createElement(d.a, {
						disabled: a,
						onValueChange: this._handleGateToggle,
						value: g !== u
					})), t ? s.createElement(i.c, {
						color: "gray600",
						size: "small"
					}, t) : null) : null, m && s.createElement(o.b, {
						onAnimateComplete: this._handleAnimationComplete,
						show: g !== u
					}, s.createElement(h.a, null, s.createElement(h.a, {
						style: p.radioGroup,
						tabIndex: 0
					}, s.createElement(c.a, {
						accessibilityLabel: e || n,
						disabled: a,
						name: r,
						onChange: l,
						options: m,
						ref: this._setRadioGroupRef,
						value: g
					}))))))
				}
			}
			r()(m, "defaultProps", {
				disabled: !1
			});
			const p = l.a.create(e => ({
				root: {
					backgroundColor: e.colors.cellBackground
				},
				header: {
					alignItems: "flex-start",
					marginHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.spaces.small
				},
				label: {
					paddingBottom: e.spaces.xxSmall,
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%"
				},
				radioGroup: {
					borderTopColor: e.colors.borderColor,
					borderTopStyle: "solid",
					borderTopWidth: e.borderWidths.small,
					marginHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				},
				disabled: {
					opacity: .5
				}
			}))
		},
		"s+x+": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "ManageSecurityKeyScreen", (function() {
				return F
			}));
			a("WNMA"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("EPsT"),
				i = a("wvRX"),
				c = a("rxPX"),
				l = a("0KEI");
			var d = Object(c.a)().propsFromState(() => ({
					fetchStatus: i.e,
					loginVerificationSettings: i.f
				})).propsFromActions(() => ({
					createLocalApiErrorHandler: Object(l.d)("SETTINGS_MANAGE_SECURITY_KEY_SCREEN"),
					fetchLoginVerificationSettings: i.d
				})),
				h = a("v//M"),
				u = a("3XMw"),
				m = a.n(u),
				p = a("5FtR"),
				g = a("7FtF"),
				b = a("WFkI"),
				f = a("MWbm"),
				E = a("p+r5"),
				_ = a("xHsv"),
				S = a("0yYu"),
				y = a("jtO7"),
				w = a("rHpw");
			const C = m.a.d4e220b3,
				T = m.a.g6d0f0b6,
				v = m.a.b894f68a,
				I = m.a.g2601bb5,
				O = m.a.b464b726,
				A = m.a.a4101e1b,
				L = m.a.e56aa013,
				k = m.a.f0977f51,
				P = m.a.jda00812,
				x = m.a.a9f397f3;
			class F extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_renderContent", () => {
						const {
							location: e,
							loginVerificationSettings: {
								methods: {
									U2fSecurityKey: t
								}
							},
							match: {
								params: {
									securityKeyId: a
								}
							}
						} = this.props, n = Array.isArray(t) && t.find(e => e.id === a), r = n && this._getSecurityKeyAddedDate(n.createdAtMs);
						return n ? s.createElement(g.a, {
							location: e,
							title: T
						}, s.createElement(b.a, null, s.createElement(E.a, {
							defaultValue: n.name || "(Unnamed Security Key)",
							editable: !1,
							label: C,
							name: "current_security_key",
							style: R.formTextInput
						}), s.createElement(f.a, {
							style: R.settingDescriptionCellContainer
						}, s.createElement(_.a, {
							description: A({
								securityKeyAddedDate: r
							})
						})), s.createElement(S.a, null), s.createElement(y.a, {
							color: "primary",
							label: I
						}), this._renderDeleteButton())) : s.createElement(p.a, {
							to: "/settings/account/login_verification"
						})
					}), r()(this, "_fetchLoginVerificationSettings", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchLoginVerificationSettings: t
						} = this.props;
						t().catch(e())
					}), r()(this, "_getSecurityKeyAddedDate", e => {
						if (e) {
							const t = new Date(parseInt(e, 10));
							return x(t)
						}
						return ""
					}), r()(this, "_handleFetchRetry", () => this._fetchLoginVerificationSettings())
				}
				componentDidMount() {
					this._fetchLoginVerificationSettings()
				}
				render() {
					const {
						fetchStatus: e
					} = this.props;
					return s.createElement(h.a, {
						accessibilityLabel: v,
						fetchStatus: e,
						onRequestRetry: this._handleFetchRetry,
						render: this._renderContent
					})
				}
				_renderDeleteButton() {
					const e = {
						headline: L,
						text: P,
						confirmButtonLabel: k
					};
					return s.createElement(o.a, {
						confirmationSheetConfirmButtonLabel: e.confirmButtonLabel,
						confirmationSheetConfirmButtonType: "destructive",
						confirmationSheetHeadline: e.headline,
						confirmationSheetText: e.text,
						label: O,
						onConfirmationSheetConfirm: () => {},
						withBottomBorder: !1
					})
				}
			}
			const R = w.a.create(e => ({
					formTextInput: {
						paddingBottom: 0
					},
					settingDescriptionCellContainer: {
						paddingLeft: e.spaces.xSmall
					}
				})),
				D = d(F);
			t.default = D
		},
		t8Yo: function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("PFE4"),
				r = a("Rdmj"),
				s = a("3XMw"),
				o = a.n(s);
			const i = o.a.b90c89c3,
				c = o.a.f587e41e;
			t.default = Object(r.a)({
				scribeNamespace: {
					page: "blocked",
					section: "auto_blocked_accounts"
				},
				blockType: n.a.AutoBlock,
				emptyStateTitle: c,
				emptyStateMessage: i,
				supportUrl: "https://support.twitter.com/articles/117063"
			})
		},
		tfP1: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "PhoneScreen", (function() {
				return U
			}));
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("EPsT"),
				i = a("zh9S"),
				c = a("vEo5"),
				l = a("wvRX"),
				d = a("1YZw"),
				h = a("oEGd"),
				u = a("0KEI"),
				m = a("hqKg"),
				p = a("P1r1");
			const g = Object(m.createSelector)(c.selectFetchStatus, c.selectPhoneNumbers, l.f, (e, t, a) => ({
					fetchStatus: e,
					phones: t,
					loginVerificationSettings: a
				})),
				b = {
					addToast: d.b,
					createLocalApiErrorHandler: Object(u.d)("SETTINGS_PHONE_SCREEN"),
					fetchDevices: c.fetchDevices,
					fetchSettings: p.d,
					googleAnalyticsPageView: i.a,
					removeDevice: c.removeDevice,
					scribePageImpression: i.d,
					fetchLoginVerificationSettings: l.d
				};
			var f = Object(h.g)(g, b),
				E = a("v//M"),
				_ = a("3XMw"),
				S = a.n(_),
				y = a("7FtF"),
				w = a("WFkI"),
				C = a("p+r5"),
				T = a("0yYu"),
				v = a("jtO7");
			const I = S.a.cb841d55,
				O = S.a.dc013356,
				A = S.a.ce37ea43,
				L = S.a.ibaf239e,
				k = S.a.j2636557,
				P = {
					headline: S.a.e49b16d3,
					text: S.a.i931719e,
					confirmButtonLabel: S.a.d96cf7cd
				},
				x = S.a.j841d1f4,
				F = S.a.e49b16d3,
				R = S.a.f0977f51,
				D = S.a.da23c5b6,
				N = S.a.hf186732,
				j = {
					headline: F,
					text: D,
					confirmButtonLabel: R
				},
				M = {
					headline: F,
					text: N,
					confirmButtonLabel: R
				},
				B = {
					page: "settings",
					section: "phone"
				};
			class U extends s.Component {
				constructor(e) {
					super(e), r()(this, "state", {
						awaitingPin: !1,
						phone: null,
						isPhoneValid: null,
						smsVerifyError: void 0
					}), r()(this, "_renderOCFPhone", () => {
						const {
							phones: e
						} = this.props, t = e[0] && e[0].phone_number;
						return s.createElement(w.a, null, t ? s.createElement(s.Fragment, null, s.createElement(C.a, {
							defaultValue: t,
							editable: !1,
							label: O,
							name: "current_phone"
						}), s.createElement(T.a, null)) : null, s.createElement(v.a, {
							color: "primary",
							label: t ? L : A,
							link: "/i/flow/add_phone"
						}), t ? this._renderDeleteButton() : null)
					}), r()(this, "_handleFetchDevices", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchDevices: t
						} = this.props;
						t().catch(e({
							showToast: !0
						}))
					}), r()(this, "_handleGoBack", () => {
						const {
							history: e
						} = this.props;
						e.goBack({
							backLocation: "/settings"
						})
					}), r()(this, "_handleRemove", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							phones: a,
							removeDevice: n,
							fetchLoginVerificationSettings: r,
							loginVerificationSettings: {
								twoFactorAuthEnabled: s,
								methods: o
							}
						} = this.props;
						a[0] && n(a[0].phone_number).then(() => {
							e({
								text: x
							}), s && "sms" in o && r().catch(t()), this._handleGoBack()
						}, t({
							showToast: !0
						}))
					}), this._handleFetchDevices(), this._initialPath = this._previousPath = window.location.pathname
				}
				shouldComponentUpdate(e, t) {
					const {
						createLocalApiErrorHandler: a,
						fetchLoginVerificationSettings: n,
						fetchSettings: r
					} = this.props;
					return this._previousPath !== location.pathname && this._initialPath === location.pathname && (this._handleFetchDevices(), r().catch(a()), n().catch(a())), this._previousPath = location.pathname, e !== this.props || t !== this.state
				}
				componentDidMount() {
					const {
						createLocalApiErrorHandler: e,
						googleAnalyticsPageView: t,
						scribePageImpression: a,
						fetchLoginVerificationSettings: n
					} = this.props;
					a(B), t(B), n().catch(e())
				}
				render() {
					const {
						fetchStatus: e,
						location: t
					} = this.props;
					return s.createElement(y.a, {
						location: t,
						title: I
					}, s.createElement(E.a, {
						fetchStatus: e,
						onRequestRetry: this._handleFetchDevices,
						render: this._renderOCFPhone
					}))
				}
				_renderDeleteButton() {
					const {
						loginVerificationSettings: {
							twoFactorAuthEnabled: e,
							methods: t
						}
					} = this.props, a = e && "sms" in t ? "totp" in t ? M : j : P;
					return s.createElement(o.a, {
						confirmationSheetConfirmButtonLabel: a.confirmButtonLabel,
						confirmationSheetConfirmButtonType: "destructive",
						confirmationSheetHeadline: a.headline,
						confirmationSheetText: a.text,
						label: k,
						onConfirmationSheetConfirm: this._handleRemove,
						withBottomBorder: !1
					})
				}
			}
			t.default = f(U)
		},
		tvRM: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "emailSettingsLabels", (function() {
				return V
			})), a.d(t, "EmailNotificationsScreen", (function() {
				return z
			}));
			a("IAdD"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = a("oEGd"),
				c = a("0KEI"),
				l = a("hqKg"),
				d = a("G6rE"),
				h = (a("JtPf"), a("oEOe")),
				u = a("RqPI"),
				m = a("kGix"),
				p = a("XMGw"),
				g = a("Ssj5");
			const b = p.a + "/email_notifications",
				f = "rweb/" + b,
				E = h.a(f, "FETCH_EMAIL_NOTIFICATIONS"),
				_ = h.a(f, "UPDATE_EMAIL_NOTIFICATIONS"),
				S = {
					emailSettings: {},
					error: null,
					fetchStatus: m.a.NONE
				};

			function y(e = S, t = {}) {
				switch (t.type) {
					case E.REQUEST:
						return Object.assign({}, e, {
							fetchStatus: m.a.LOADING
						});
					case E.FAILURE:
						return Object.assign({}, e, {
							error: t.payload,
							fetchStatus: m.a.FAILED
						});
					case E.SUCCESS:
						return Object.assign({}, e, {
							emailSettings: t.payload,
							error: null,
							fetchStatus: m.a.LOADED
						});
					case _.SUCCESS:
						return Object.assign({}, e, {
							emailSettings: Object.assign({}, e.emailSettings, t.meta),
							error: null,
							fetchStatus: m.a.LOADED
						});
					default:
						return e
				}
			}
			g.a.register({
				[b]: y
			});
			const w = e => e[b].fetchStatus,
				C = () => (e, t, {
					api: a
				}) => {
					const n = u.g(t());
					return h.b(e, {
						params: {
							userId: n
						},
						request: a.EmailNotificationSettings.fetch
					})({
						actionTypes: E,
						context: "FETCH_EMAIL_NOTIFICATIONS"
					})
				},
				T = Object(l.createSelector)(w, e => {
					const t = d.e.selectLoggedInUser(e);
					return !(!t || !t.verified)
				}, e => e[b].emailSettings, (e, t, a) => ({
					fetchStatus: e,
					isVerified: t,
					emailSettings: a
				})),
				v = {
					createLocalApiErrorHandler: Object(c.d)("SETTINGS_NOTIFICATIONS_EMAIL_SCREEN"),
					fetchEmailSettingsIfNeeded: () => (e, t) => w(t()) === m.a.LOADED ? Promise.resolve() : e(C()),
					googleAnalyticsPageView: o.a,
					scribePageImpression: o.d,
					updateEmailSettings: e => (t, a, {
						api: n
					}) => {
						const r = u.g(a());
						return h.c(t, {
							params: {
								userId: r,
								settings: e
							},
							request: n.EmailNotificationSettings.update
						})({
							actionTypes: _,
							context: "UPDATE_EMAIL_NOTIFICATIONS",
							meta: e
						})
					}
				};
			var I = Object(i.g)(T, v),
				O = a("45mF");
			const A = Object.freeze({
				Daily: "Daily",
				Weekly: "Weekly",
				Periodically: "Periodically",
				None: "None"
			});
			var L = a("v//M"),
				k = a("3XMw"),
				P = a.n(k),
				x = a("7FtF"),
				F = a("MWbm"),
				R = a("cCdp"),
				D = a("Y3cQ"),
				N = a("0yYu"),
				j = a("6vad");
			const M = P.a.e75f25a8,
				B = P.a.b2c4ab0a,
				U = P.a.ic2ea6b5,
				H = P.a.f823bbbe,
				K = P.a.b47cc5f3,
				V = {
					send_twitter_emails: P.a.e75f25a8,
					send_email_vit_weekly: P.a.e8eb54af,
					send_network_activity_email: P.a.ib80b0f1,
					send_new_direct_text_email: P.a.i58a274b,
					send_shared_tweet_email: P.a.b109e307,
					send_network_digest: P.a.ddd34fa1,
					send_performance_digest: P.a.b7ea9501,
					send_email_newsletter: P.a.af38c138,
					send_activation_email: P.a.cb881bc2,
					send_resurrection_email: P.a.e4a5e08d,
					send_partner_email: P.a.be91c4ff,
					send_survey_email: P.a.f296795c,
					send_follow_recs_email: P.a.ddfe3776,
					send_similar_people_email: P.a.d17ba8c1,
					send_smb_sales_marketing_email: P.a.jf51b93c
				},
				G = {
					page: "settings",
					section: "email_notifications"
				},
				W = [{
					label: P.a.fcad1e2d,
					value: "Daily"
				}, {
					label: P.a.h9e0dfde,
					value: "Weekly"
				}, {
					label: P.a.e26d98ab,
					value: "Periodically"
				}, {
					label: P.a.e3a761ee,
					value: "None"
				}];
			class z extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_renderBooleanSetting", (e, t = {}) => {
						const {
							emailSettings: a
						} = this.props, {
							helpText: n,
							learnMoreLink: r,
							type: o,
							withBottomBorder: i
						} = t || {}, c = V[e];
						return a.hasOwnProperty(e) ? s.createElement(R.a, {
							checked: a[e],
							disabled: !a.send_twitter_emails && "send_twitter_emails" !== e,
							helpText: n,
							key: e,
							label: c,
							learnMoreLink: r,
							name: e,
							onChange: this._handleBooleanSettingChanged(e),
							type: o,
							withBottomBorder: i
						}) : null
					}), r()(this, "_renderNetworkDigestSetting", e => {
						const {
							emailSettings: t
						} = this.props, a = V[e], n = t[e];
						return t.hasOwnProperty(e) ? s.createElement(D.a, {
							disabled: !t.send_twitter_emails,
							key: e,
							label: a,
							name: e,
							onChange: this._handleSelectSettingChanged(e),
							options: W,
							value: n
						}) : null
					}), r()(this, "_renderPerformanceDigestSetting", (e, t) => {
						const {
							emailSettings: a
						} = this.props, {
							withBottomBorder: n
						} = t, r = V[e], o = a[e];
						return a.hasOwnProperty(e) ? s.createElement(R.a, {
							checked: o && "Weekly" === o,
							disabled: !a.send_twitter_emails,
							key: e,
							label: r,
							name: e,
							onChange: this._handlePerformanceDigestSettingChanged(e),
							withBottomBorder: n
						}) : null
					}), r()(this, "_render", () => {
						const {
							isVerified: e
						} = this.props;
						return s.createElement(F.a, null, this._renderBooleanSetting("send_twitter_emails", {
							helpText: K,
							learnMoreLink: "https://help.twitter.com/managing-your-account/updating-email-preferences#tweet-activity",
							type: "switch",
							withBottomBorder: e
						}), e ? s.createElement(s.Fragment, null, s.createElement(N.a, null), s.createElement(j.b, {
							text: H
						}), this._renderBooleanSetting("send_email_vit_weekly")) : null, s.createElement(N.a, null), s.createElement(j.b, {
							text: B
						}), this._renderBooleanSetting("send_network_activity_email"), this._renderBooleanSetting("send_new_direct_text_email"), this._renderBooleanSetting("send_shared_tweet_email"), this._renderNetworkDigestSetting("send_network_digest"), this._renderPerformanceDigestSetting("send_performance_digest", {
							withBottomBorder: !1
						}), s.createElement(N.a, null), s.createElement(j.b, {
							text: U
						}), this._renderBooleanSetting("send_email_newsletter"), this._renderBooleanSetting("send_activation_email"), this._renderBooleanSetting("send_resurrection_email"), this._renderBooleanSetting("send_partner_email"), this._renderBooleanSetting("send_survey_email"), this._renderBooleanSetting("send_follow_recs_email"), this._renderBooleanSetting("send_similar_people_email"), this._renderBooleanSetting("send_smb_sales_marketing_email", {
							withBottomBorder: !1
						}))
					}), r()(this, "_handleFetch", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchEmailSettingsIfNeeded: t
						} = this.props;
						t().catch(e(Object.assign({}, Object(O.a)(), {
							showToast: !0
						})))
					}), r()(this, "_handleSelectSettingChanged", e => (t, a) => {
						const {
							createLocalApiErrorHandler: n,
							updateEmailSettings: r
						} = this.props, s = {};
						s[e] = function(e) {
							return A[e] || "None"
						}(a), r(s).catch(n(Object.assign({}, Object(O.a)(), {
							showToast: !0
						})))
					}), r()(this, "_handleBooleanSettingChanged", e => (t, a) => {
						const {
							createLocalApiErrorHandler: n,
							updateEmailSettings: r
						} = this.props, s = {};
						s[e] = !!a, r(s).catch(n(Object.assign({}, Object(O.a)(), {
							showToast: !0
						})))
					}), r()(this, "_handlePerformanceDigestSettingChanged", e => (t, a) => {
						const {
							createLocalApiErrorHandler: n,
							updateEmailSettings: r
						} = this.props, s = {};
						s[e] = a ? "Weekly" : "None", r(s).catch(n(Object.assign({}, Object(O.a)(), {
							showToast: !0
						})))
					})
				}
				UNSAFE_componentWillMount() {
					this._handleFetch()
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					t(G), e(G)
				}
				render() {
					const {
						fetchStatus: e,
						location: t
					} = this.props;
					return s.createElement(x.a, {
						location: t,
						title: M
					}, s.createElement(L.a, {
						fetchStatus: e,
						onRequestRetry: this._handleFetch,
						render: this._render
					}))
				}
			}
			t.default = I(z)
		},
		uCpT: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SettingsSecurityScreen", (function() {
				return N
			}));
			a("IAdD");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = a("P1r1"),
				c = a("oEGd"),
				l = a("0KEI"),
				d = a("hqKg");
			const h = Object(d.createSelector)(i.f, e => ({
					protectPasswordReset: e.protect_password_reset
				})),
				u = {
					createLocalApiErrorHandler: Object(l.d)("SETTINGS_SECURITY_SCREEN"),
					googleAnalyticsPageView: o.a,
					scribePageImpression: o.d,
					updateSettings: i.H
				};
			var m = Object(c.g)(h, u),
				p = a("wrlS"),
				g = a("3XMw"),
				b = a.n(g),
				f = a("98E1"),
				E = a("MWbm"),
				_ = a("xHsv"),
				S = a("0yYu"),
				y = a("6vad"),
				w = a("cCdp"),
				C = a("csss");
			const T = b.a.j95edf76,
				v = b.a.a2197725,
				I = b.a.dd703318,
				O = b.a.eb89b0ef,
				A = b.a.d788d51e,
				L = b.a.ead60eb7,
				k = b.a.gfaf9a4a,
				P = b.a.he30e464,
				x = b.a.f724bf30,
				F = b.a.i859a9d3,
				R = {
					page: "settings",
					section: "security"
				},
				D = Object.freeze({});
			class N extends s.Component {
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					t(R, this._fsSettingsRevamp ? {
						context: "settings_revamp"
					} : void 0), e(R)
				}
				constructor(e, t) {
					super(e, t), r()(this, "_fsSettingsRevamp", p.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "_handleProtectPasswordResetChanged", (e, t) => {
						this.setState({
							showPasswordDialog: !0,
							data: {
								protect_password_reset: t
							}
						})
					}), r()(this, "_handlePasswordSubmit", e => {
						const {
							createLocalApiErrorHandler: t,
							updateSettings: a
						} = this.props, {
							data: n
						} = this.state;
						a(Object.assign({}, n, {
							current_password: e
						})).then(() => {
							this.setState({
								showPasswordDialog: !1,
								data: D
							})
						}, t({
							showToast: !0
						}))
					}), this.state = {
						showPasswordDialog: !1,
						data: D
					}
				}
				render() {
					const {
						location: e,
						protectPasswordReset: t
					} = this.props, {
						showPasswordDialog: a
					} = this.state;
					return s.createElement(f.a, {
						location: e,
						onPasswordSubmit: this._handlePasswordSubmit,
						promptForPassword: a,
						title: T
					}, s.createElement(E.a, null, this._fsSettingsRevamp && s.createElement(_.a, {
						description: v,
						withBottomBorder: !0
					}), this._renderTwoFactorAuthentication(), s.createElement(S.a, null), s.createElement(y.b, {
						text: L
					}), this._fsSettingsRevamp && s.createElement(_.a, {
						description: P,
						withBottomBorder: !0
					}), s.createElement(w.a, {
						checked: !!t,
						helpText: this._fsSettingsRevamp ? void 0 : x,
						label: k,
						learnMoreLink: this._fsSettingsRevamp ? "https://help.twitter.com/safety-and-security/account-security-tips" : void 0,
						name: "protect_password_reset",
						onChange: this._handleProtectPasswordResetChanged,
						withBottomBorder: !1
					})))
				}
				_renderTwoFactorAuthentication() {
					const e = s.createElement(y.b, {
							text: I
						}),
						t = s.createElement(C.a, {
							label: I,
							link: "/settings/account/login_verification"
						}),
						a = s.createElement(_.a, {
							description: this._fsSettingsRevamp ? O : A,
							learnMoreLabel: F,
							learnMoreLink: "https://help.twitter.com/managing-your-account/two-factor-authentication",
							withBottomBorder: this._fsSettingsRevamp
						});
					return this._fsSettingsRevamp ? s.createElement(s.Fragment, null, e, a, t) : s.createElement(s.Fragment, null, e, t, a)
				}
			}
			t.default = m(N)
		},
		uD2z: function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return c
			})), a.d(t, "a", (function() {
				return l
			}));
			var n = a("3XMw"),
				r = a.n(n);
			const s = r.a.dae57a41,
				o = r.a.i7cbc154,
				i = r.a.e3a761ee,
				c = e => {
					switch ((e => Object.keys(e).reduce((t, a) => e[a] ? t + 1 : t, 0))(e)) {
						case Object.keys(e).length:
							return "all";
						case 0:
							return "none";
						default:
							return "some"
					}
				},
				l = e => ({
					some: o,
					none: i,
					all: s
				} [c(e)])
		},
		vTtz: function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return g
			}));
			a("IAdD"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("3XMw"),
				i = a.n(o),
				c = a("SrIh"),
				l = a("0yYu"),
				d = a("6vad"),
				h = a("Y3cQ"),
				u = a("cCdp");
			const m = i.a.g8f8fd07,
				p = i.a.b68050dc;
			class g extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_handleSettingChanged", e => (t, a) => {
						const {
							onChange: n,
							scribeAction: r,
							scribeNamespace: s
						} = this.props, o = {
							[t]: a
						};
						r(Object.assign({}, s, {
							component: e,
							action: a
						})), n(o)
					}), r()(this, "_handleBooleanChanged", e => (t, a) => {
						this._handleSettingChanged(e)(t, a ? "on" : "off")
					})
				}
				render() {
					const {
						currentSettings: e,
						isVerified: t,
						template: a
					} = this.props, {
						settings: n
					} = a.template;
					return n.length ? s.createElement("div", null, n.map((a, n) => s.createElement("div", {
						key: n
					}, a.section_header ? s.createElement(s.Fragment, null, s.createElement(l.a, null), s.createElement(d.b, {
						text: a.section_header
					})) : null, a.section_entries.map((n, r) => {
						if ("vit-only" === n.vit && !t) return null;
						if ("vit-off" === n.vit && t) return null;
						const o = a.section_entries && a.section_entries.length - 1 === r;
						switch (n.control_type) {
							case "list": {
								const t = n.selections.map(e => {
									const t = Object.keys(e)[0];
									return {
										label: e[t],
										value: t
									}
								});
								return t.push({
									label: n.off_description,
									value: "off"
								}), s.createElement(h.a, {
									key: n.id,
									label: n.name,
									name: n.id,
									onChange: this._handleSettingChanged(n.scribe_component),
									options: t,
									value: e[n.id],
									withBottomBorder: !o
								})
							}
							case "tweet_control": {
								const t = e[n.id] && "on" === e[n.id];
								return s.createElement(u.a, {
									checked: t,
									helpText: m,
									key: n.id,
									label: n.name,
									learnMoreLabel: p,
									learnMoreLink: "/settings/device_follow",
									name: n.id,
									onChange: this._handleBooleanChanged(n.scribe_component),
									withBottomBorder: !o
								})
							}
							case "on_off": {
								const t = e[n.id] && "on" === e[n.id];
								return s.createElement(u.a, {
									checked: t,
									key: n.id,
									label: n.name,
									name: n.id,
									onChange: this._handleBooleanChanged(n.scribe_component),
									withBottomBorder: !o
								})
							}
							default:
								return Object(c.a)("Unsupported control type: " + n.control_type), null
						}
					})))) : null
				}
			}
		},
		wtjx: function(e, t, a) {
			"use strict";
			a.d(t, "g", (function() {
				return c
			})), a.d(t, "f", (function() {
				return l
			})), a.d(t, "e", (function() {
				return d
			})), a.d(t, "d", (function() {
				return p
			})), a.d(t, "b", (function() {
				return b
			})), a.d(t, "a", (function() {
				return E
			})), a.d(t, "c", (function() {
				return _
			}));
			a("IAdD"), a("JtPf");
			var n = a("Ssj5"),
				r = a("RqPI");
			const s = e => (t, a, {
					userPersistence: n
				}) => n.set("rweb.recentSearches", {
					recentSearches: e
				}).catch(() => {
					Promise.resolve()
				}),
				o = (e, t) => {
					let a = [];
					if (e && e.user) {
						const n = e.user;
						a = t.filter(e => e.keyword || e.user && e.user.id !== n.id)
					} else if (e && e.keyword) {
						const n = e.keyword;
						a = t.filter(e => e.keyword && e.keyword.query !== n.query || e.user)
					}
					return a
				},
				i = {
					fetched: !1,
					recentSearches: []
				};
			const c = e => e.recentSearches.recentSearches,
				l = e => c(e)[0] || null,
				d = e => e.recentSearches.fetched,
				h = "rweb/recentSearches/INIT_FROM_CACHE",
				u = e => ({
					type: h,
					payload: e
				}),
				m = "rweb/recentSearches/REMOVE_QUERY",
				p = e => (t, a, {
					userPersistence: n
				}) => {
					t({
						payload: e,
						type: m
					});
					const o = a().recentSearches;
					return Object(r.e)(a()) ? t(s(o.recentSearches)) : Promise.resolve()
				},
				g = "rweb/recentSearches/CLEAR_ALL",
				b = () => (e, t, {
					userPersistence: a
				}) => {
					e({
						type: g
					});
					const n = t().recentSearches;
					return Object(r.e)(t()) ? e(s(n.recentSearches)) : Promise.resolve()
				},
				f = "rweb/recentSearches/ADD_QUERY",
				E = e => (t, a, {
					userPersistence: n
				}) => {
					t({
						payload: e,
						type: f
					});
					const o = a().recentSearches;
					return Object(r.e)(a()) ? t(s(o.recentSearches)) : Promise.resolve()
				},
				_ = () => (e, t, {
					userPersistence: a
				}) => t().recentSearches.fetched ? Promise.resolve() : e((e, t, {
					userPersistence: a
				}) => {
					const n = t();
					return Object(r.e)(n) ? a.get("rweb.recentSearches").then(t => {
						e(u(t))
					}).catch(() => {
						e(u())
					}) : (e(u()), Promise.resolve())
				});
			n.a.register({
				recentSearches: function(e = i, t) {
					switch (t.type) {
						case f: {
							const a = t.payload,
								n = a ? o(a, e.recentSearches) : [];
							return n.length > 49 && n.splice(49, 1), a && n.unshift(a), Object.assign({}, e, {
								recentSearches: n
							})
						}
						case m: {
							const a = t.payload,
								n = a ? o(a, e.recentSearches) : [];
							return Object.assign({}, e, {
								recentSearches: n
							})
						}
						case g:
							return {
								fetched: !0, recentSearches: []
							};
						case h:
							return Object.assign({}, e, t.payload, {
								fetched: !0
							});
						default:
							return e
					}
				}
			})
		},
		wvRX: function(e, t, a) {
			"use strict";
			a.d(t, "f", (function() {
				return f
			})), a.d(t, "e", (function() {
				return E
			})), a.d(t, "d", (function() {
				return _
			})), a.d(t, "c", (function() {
				return S
			})), a.d(t, "a", (function() {
				return y
			})), a.d(t, "b", (function() {
				return w
			}));
			a("IAdD"), a("kYxP");
			var n = a("RqPI"),
				r = a("wrlS"),
				s = a("kGix"),
				o = a("Ssj5"),
				i = a("oEOe");
			const c = "U2fSecurityKey",
				l = r.b.isTrue("2fa_multikey_management_enabled"),
				d = {
					REQUEST: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_REQUEST",
					SUCCESS: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_SUCCESS",
					FAILURE: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_FAILURE"
				},
				h = {
					REQUEST: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_2_REQUEST",
					SUCCESS: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_2_SUCCESS",
					FAILURE: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_2_FAILURE"
				},
				u = {
					REQUEST: "rweb/settings/loginVerification/RENAME_SECURITY_KEY_REQUEST",
					SUCCESS: "rweb/settings/loginVerification/RENAME_SECURITY_KEY_SUCCESS",
					FAILURE: "rweb/settings/loginVerification/RENAME_SECURITY_KEY_FAILURE"
				},
				m = {
					REQUEST: "rweb/settings/loginVerification/DELETE_SECURITY_KEY_REQUEST",
					SUCCESS: "rweb/settings/loginVerification/DELETE_SECURITY_KEY_SUCCESS",
					FAILURE: "rweb/settings/loginVerification/DELETE_SECURITY_KEY_FAILURE"
				},
				p = {
					REQUEST: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_REQUEST",
					SUCCESS: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_SUCCESS",
					FAILURE: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_FAILURE"
				},
				g = {
					REQUEST: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_REQUEST",
					SUCCESS: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_SUCCESS",
					FAILURE: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_FAILURE"
				},
				b = {
					isOldPushUser: !1,
					twoFactorAuthEnabled: !1,
					methods: {},
					fetchStatus: s.a.NONE
				};
			o.a.register({
				loginVerification: function(e = b, t) {
					switch (t.type) {
						case d.REQUEST:
						case h.REQUEST:
							return Object.assign({}, e, {
								fetchStatus: s.a.LOADING
							});
						case d.SUCCESS: {
							if (!t.payload) return e;
							const {
								twoFactorAuthEnabled: a,
								isOldPushUser: n,
								methods: r
							} = t.payload;
							return Object.assign({}, e, {
								isOldPushUser: n,
								twoFactorAuthEnabled: a,
								methods: r.reduce((e, t) => {
									const [a] = Object.keys(t.twoFactorType);
									return e[a] = t.id, e
								}, {}),
								fetchStatus: s.a.LOADED
							})
						}
						case h.SUCCESS: {
							if (!t.payload) return e;
							const {
								twoFactorAuthEnabled: a,
								isOldPushUser: n,
								methods: r
							} = t.payload;
							return Object.assign({}, e, {
								isOldPushUser: n,
								twoFactorAuthEnabled: a,
								methods: r.reduce((e, t) => {
									const {
										createdAtMs: a,
										externalDisplayName: n,
										id: r,
										twoFactorType: s
									} = t;
									if (s === c) {
										const t = {
											createdAtMs: a,
											id: r,
											name: n
										};
										e[s] = [...e[s] || [], t]
									} else e[s] = r;
									return e
								}, {}),
								fetchStatus: s.a.LOADED
							})
						}
						case d.FAILURE:
						case h.FAILURE:
							return Object.assign({}, e, {
								error: t.payload,
								fetchStatus: s.a.FAILED
							});
						case p.REQUEST:
							return Object.assign({}, e, {
								isOldPushUser: !1,
								twoFactorAuthEnabled: !1,
								methods: {}
							});
						case g.SUCCESS: {
							const a = t && t.meta && t.meta.method || "",
								n = Object.keys(e.methods).reduce((t, n) => (n !== a && (t[n] = e.methods[n]), t), {});
							return Object.assign({}, e, {
								methods: n
							})
						}
						case u.SUCCESS: {
							const {
								methods: a
							} = e;
							if (!t.meta) return e;
							const {
								name: n,
								securityKeyId: r
							} = t.meta, s = Array.isArray(a[c]) ? a[c].map(e => e.id !== r ? e : Object.assign({}, e, {
								name: n
							})) : null;
							return Object.assign({}, e, {
								methods: Object.assign({}, a, {
									[c]: s
								})
							})
						}
						case m.SUCCESS: {
							if (!t.meta) return e;
							const {
								methods: a
							} = e, n = t.meta.securityKeyId, r = Array.isArray(a[c]) ? a[c].filter(e => e.id !== n) : null;
							return Object.assign({}, e, {
								methods: Object.assign({}, a, {
									[c]: r
								})
							})
						}
						default:
							return e
					}
				}
			});
			const f = e => e.loginVerification,
				E = e => e.loginVerification.fetchStatus,
				_ = () => (e, t, {
					api: a
				}) => {
					const r = n.g(t());
					return Object(i.b)(e, {
						params: {
							userId: r
						},
						request: a.Settings.fetchLoginVerificationSettings
					})({
						actionTypes: l ? h : d,
						context: "FETCH_LOGIN_VERIFICATION_SETTINGS"
					})
				},
				S = e => (t, a, {
					api: n
				}) => Object(i.d)(t, {
					params: e,
					request: n.Settings.enrollIn2FA
				})("TWO_FACTOR_ENROLLMENT"),
				y = () => (e, t, {
					api: a
				}) => Object(i.c)(e, {
					request: a.Settings.disable2FA
				})({
					actionTypes: p,
					context: "DISABLE_LOGIN_VERIFICATION"
				}),
				w = ({
					method: e
				}) => (t, a, {
					api: n
				}) => {
					const r = f(a()).methods[e];
					return Object(i.b)(t, {
						request: n.Settings.disable2FAMethod,
						params: {
							methodId: r
						}
					})({
						actionTypes: g,
						context: "DISABLE_LOGIN_VERIFICATION_METHOD",
						meta: {
							method: e
						}
					})
				}
		},
		xKqQ: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SettingsTaggingScreen", (function() {
				return I
			}));
			a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = a("P1r1"),
				c = a("oEGd"),
				l = a("0KEI"),
				d = a("hqKg");
			const h = Object(d.createSelector)(i.f, e => ({
					mediaTaggingOption: e.allow_media_tagging
				})),
				u = {
					createLocalApiErrorHandler: Object(l.d)("SETTINGS_TAGGING_SCREEN"),
					googleAnalyticsPageView: o.a,
					scribePageImpression: o.d,
					updateSettings: i.H
				};
			var m = Object(c.g)(h, u),
				p = a("wrlS"),
				g = a("3XMw"),
				b = a.n(g),
				f = a("7FtF"),
				E = a("qYi+"),
				_ = a("MWbm");
			const S = b.a.f56d108e,
				y = b.a.f56d108e,
				w = b.a.gd758533,
				C = b.a.fa476139,
				T = [{
					label: b.a.d165c992,
					value: "all"
				}, {
					label: b.a.ea339390,
					value: "following"
				}],
				v = {
					page: "settings",
					section: "tagging"
				};
			class I extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_fsSettingsRevamp", p.b.isTrue("responsive_web_settings_revamp_enabled")), r()(this, "_handleItemChanged", (e, t) => {
						const {
							createLocalApiErrorHandler: a,
							updateSettings: n
						} = this.props;
						n({
							[e]: t
						}).catch(a({
							showToast: !0
						}))
					})
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t
					} = this.props;
					t(v), e(v)
				}
				render() {
					const {
						location: e,
						mediaTaggingOption: t
					} = this.props;
					return s.createElement(f.a, {
						location: e,
						title: S
					}, s.createElement(_.a, null, s.createElement(E.a, {
						description: this._fsSettingsRevamp ? w : C,
						label: y,
						name: "allow_media_tagging",
						offValue: "none",
						onChange: this._handleItemChanged,
						options: T,
						value: t
					})))
				}
			}
			t.default = m(I)
		},
		z6lV: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SearchSettingsPage", (function() {
				return K
			}));
			a("IAdD"), a("kYxP");
			var n = a("KEM+"),
				r = a.n(n),
				s = a("ERkP"),
				o = a("zh9S"),
				i = a("wtjx"),
				c = (a("JtPf"), a("oEOe")),
				l = a("RqPI"),
				d = a("kGix"),
				h = a("Ssj5");
			const u = c.a("rweb/safeSearch", "FETCH_SEARCH_SETTINGS"),
				m = c.a("rweb/safeSearch", "UPDATE_SEARCH_SETTINGS"),
				p = {
					fetchStatus: d.a.NONE,
					searchSettings: {}
				};
			h.a.register({
				safeSearch: function(e = p, t = {}) {
					switch (t.type) {
						case u.REQUEST:
							return Object.assign({}, e, {
								fetchStatus: d.a.LOADING
							});
						case u.FAILURE:
							return Object.assign({}, e, {
								fetchStatus: d.a.FAILED
							});
						case u.SUCCESS:
							return Object.assign({}, e, {
								searchSettings: t.payload,
								fetchStatus: d.a.LOADED
							});
						case m.REQUEST:
							return Object.assign({}, e, {
								searchSettings: Object.assign({}, e.searchSettings, {
									[t.meta.settingName]: t.meta.settingValue
								})
							});
						default:
							return e
					}
				}
			});
			const g = e => e.safeSearch.searchSettings,
				b = e => e.safeSearch.fetchStatus,
				f = () => (e, t, {
					api: a
				}) => {
					const n = l.g(t());
					return c.b(e, {
						params: {
							userId: n
						},
						request: a.SafeSearch.fetch
					})({
						actionTypes: u,
						context: "FETCH_SEARCH_SETTINGS"
					})
				};
			var E = a("1YZw"),
				_ = a("i6OR"),
				S = a("oEGd"),
				y = a("0KEI"),
				w = a("hqKg");
			const C = Object(w.createSelector)(b, i.f, g, (e, t, a) => ({
					fetchStatus: e,
					lastSearchQuery: t,
					settings: a
				})),
				T = {
					addToast: E.b,
					clearAllSearchResults: _.a,
					createLocalApiErrorHandler: Object(y.d)("SAFE_SEARCH_SCREEN"),
					fetchSettings: f,
					googleAnalyticsPageView: o.a,
					scribeAction: o.c,
					scribePageImpression: o.d,
					updateSettings: (e, t) => (a, n, {
						api: r
					}) => {
						const s = n(),
							o = Object.assign({}, g(s), {
								[e]: t,
								userId: l.g(s)
							});
						return c.c(a, {
							params: o,
							request: r.SafeSearch.set
						})({
							actionTypes: m,
							context: "ACTION_UPDATE_SEARCH_SETTINGS",
							meta: {
								settingName: e,
								settingValue: t
							}
						})
					}
				};
			var v = Object(S.g)(C, T),
				I = a("45mF"),
				O = a("v//M"),
				A = a("jHSc"),
				L = a("3XMw"),
				k = a.n(L),
				P = a("cCdp");
			const x = k.a.h1ef00db,
				F = k.a.a90af44e,
				R = k.a.a25e2ec5,
				D = k.a.b827a057,
				N = k.a.b27c9851,
				j = k.a.c81b9707,
				M = k.a.if05bca6,
				B = "https://support.twitter.com/articles/132700",
				U = {
					page: "settings",
					section: "search"
				},
				H = "optInFiltering";
			class K extends s.Component {
				constructor(...e) {
					super(...e), r()(this, "_handleSettingChanged", (e, t) => {
						const {
							addToast: a,
							clearAllSearchResults: n,
							createLocalApiErrorHandler: r,
							updateSettings: s
						} = this.props;
						this._scribeValueChanged(e, t), s(e, t).then(() => {
							n(), a({
								text: D
							})
						}, r(Object.assign({}, Object(I.a)(N), {
							showToast: !0
						})))
					}), r()(this, "_scribeValueChanged", (e, t) => {
						const {
							lastSearchQuery: a,
							scribeAction: n
						} = this.props, r = a ? {
							search_details: {
								query: a
							}
						} : {}, s = e === H ? "filtering" : "blocking", o = t ? "on" : "off";
						n(Object.assign({}, U, {
							component: "safe_search_settings",
							element: s,
							action: o
						}), r)
					}), r()(this, "_render", () => {
						const {
							settings: e
						} = this.props;
						return s.createElement("div", null, s.createElement(P.a, {
							checked: e.optInFiltering,
							helpText: j,
							label: F,
							learnMoreLink: B,
							name: "optInFiltering",
							onChange: this._handleSettingChanged
						}), s.createElement(P.a, {
							checked: e.optInBlocking,
							helpText: M,
							label: R,
							learnMoreLink: B,
							name: "optInBlocking",
							onChange: this._handleSettingChanged
						}))
					}), r()(this, "_handleFetchSettings", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchSettings: t
						} = this.props;
						t().catch(e(Object(I.a)()))
					})
				}
				componentDidMount() {
					const {
						googleAnalyticsPageView: e,
						scribePageImpression: t,
						lastSearchQuery: a
					} = this.props;
					t(U, {
						search_details: {
							query: a
						}
					}), e(U), this._handleFetchSettings()
				}
				render() {
					const {
						fetchStatus: e,
						history: t
					} = this.props;
					return s.createElement(A.b, {
						history: t,
						title: x
					}, s.createElement(O.a, {
						fetchStatus: e,
						onRequestRetry: this._handleFetchSettings,
						render: this._render
					}))
				}
			}
			t.default = v(K)
		}
	}
]);