__d("PagesCometAdminSettingsEditPageTabsList.react", ["fbt", "CometRelay", 
	"PagesCometAdminLiveTabSettingsNux.react", "PagesCometAdminSettingsEditPageAddTabMutation", 
	"PagesCometAdminSettingsEditPageRemoveTabMutation", "PagesCometAdminSettingsEditPageTabReorderMutation", 
	"PagesCometAdminSettingsEditPageTabsListBar.react", "PagesCometAdminSettingsEditPageTabsListDraggableItem.react", 
	"PagesCometAdminSettingsEditPageTabsList_tabs.graphql", "cometPushToast", "react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i, j = i || b("react"),
		k = g._("\u0110\u00e3 c\u1eadp nh\u1eadt th\u1ee9 t\u1ef1 tab!"),
		l = g._("Kh\u00f4ng th\u1ec3 c\u1eadp nh\u1eadt th\u1ee9 t\u1ef1 tab tr\u00ean Trang"),
		m = g._("Ch\u01b0a th\u00eam tab"),
		n = g._("M\u1ed9t tab m\u1edbi \u0111\u00e3 \u0111\u01b0\u1ee3c th\u00eam v\u00e0o Trang"),
		o = g._("\u0110\u00e3 g\u1ee1 tab th\u00e0nh c\u00f4ng.");

	function a(a) {
		a = a.page$key;
		var c = j.useState([]),
			d = c[0],
			e = c[1];
		c = j.useState(!1);
		var f = c[0],
			i = c[1];
		c = j.useState(!1);
		var p = c[0],
			q = c[1],
			r = f || p,
			s = b("CometRelay").useRelayEnvironment();
		c = b("CometRelay").useFragment(h !== void 0 ? h : h = b("PagesCometAdminSettingsEditPageTabsList_tabs.graphql"), a);
		var t = (f = c.activeTabs) == null ? void 0 : f.actions,
			u = (p = c.disabledTabs) == null ? void 0 : p.actions;
		a = c.currentTemplate[0];
		var v = c.name,
			w = (a == null ? void 0 : a.can_reorder_tabs) === !0,
			x = (a == null ? void 0 : a.can_edit_tabs) === !0,
			y = c.id,
			z = j.useMemo(function() {
				return t != null ? t.reduce(function(a, b, c) {
					b != null && b.action_type != null && (b.optional_id != null && (a[b.action_type + "." + b.optional_id] = c), a[b.action_type] = c);
					return a
				}, {}) : {}
			}, [t]),
			A = j.useCallback(function() {
				if (t == null) return !1;
				var a = t.map(function(a) {
						return a.action_type
					}),
					b = d.filter(function(a) {
						return a != null && z[a] != null
					});
				if (a.length !== b.length) return !0;
				for (var c = 0; c < a.length; c += 1)
					if (!a.includes(b[c], c)) return !0;
				return !1
			}, [z, t, d]);
		f = j.useState(null);
		var B = f[0],
			C = f[1];
		p = j.useState(null);
		var D = p[0],
			E = p[1];
		c = j.useState(null);
		var F = c[0],
			G = c[1],
			H = j.useCallback(function() {
				t != null && u != null && e(t.concat(u).map(function(a) {
					return a.optional_id != null && a.action_type != null ? a.action_type + "." + a.optional_id : a.action_type
				}).filter(function(a) {
					return a != null
				}).filter(Boolean))
			}, [t, u]);
		j.useEffect(function() {
			!r && D == null && A() && H()
		}, [H, A, r, D]);
		var I = j.useCallback(function(a, b, c) {
				C(c);
				if (c != null && D != null && F != null && c > 0 && B != null && B > 0) {
					b = d.filter(function(a) {
						return a !== F
					});
					e(b.slice(0, c).concat(F).concat(b.slice(c, b.length)))
				}
				a.preventDefault()
			}, [D, F, B, d]),
			J = j.useCallback(function() {
				y != null && b("PagesCometAdminSettingsEditPageTabReorderMutation").editPageTabReorderMutation(s, {
					pageID: y,
					tabOrder: d.filter(function(a) {
						return a != null && z[a] != null
					})
				}, {
					onCompleted: function() {
						i(!1), b("cometPushToast").cometPushSimpleToast(k)
					},
					onError: function() {
						i(!1), b("cometPushToast").cometPushSimpleToast(l)
					}
				})
			}, [z, s, y, d]),
			K = j.useCallback(function(a) {
				var c = a.position,
					d = a.tabName;
				y != null && (q(!0), b("PagesCometAdminSettingsEditPageAddTabMutation").editPageAddTabMutation(s, {
					pageID: y,
					position: c,
					tabName: d
				}, {
					onCompleted: function(a) {
						q(!1);
						a = a == null ? void 0 : (a = a.page_action_channel_add_to_ordering) == null ? void 0 : (a = a.page) == null ? void 0 : (a = a.updatedTabs) == null ? void 0 : a.actions;
						if (!a) {
							b("cometPushToast").cometPushSimpleToast(n);
							return
						}
						a = a.filter(function(a) {
							return a.action_type === d
						})[0];
						a = a == null ? void 0 : (a = a.name_propercase) == null ? void 0 : a.text;
						if (a == null) {
							b("cometPushToast").cometPushSimpleToast(n);
							return
						}
						b("cometPushToast").cometPushSimpleToast(g._("{page-name} hi\u1ec7n c\u00f3 tab {page-tab}.", [g._param("page-name", v), g._param("page-tab", a)]))
					},
					onError: function() {
						q(!1), b("cometPushToast").cometPushSimpleToast(m)
					}
				}))
			}, [s, y, v]),
			L = j.useCallback(function(a) {
				a = a.tabName;
				y != null && (q(!0), b("PagesCometAdminSettingsEditPageRemoveTabMutation").editPageRemoveTabMutation(s, {
					pageID: y,
					tabName: a
				}, {
					onCompleted: function() {
						q(!1), b("cometPushToast").cometPushSimpleToast(o)
					},
					onError: function() {
						q(!1), b("cometPushToast").cometPushSimpleToast(l)
					}
				}))
			}, [s, y]),
			M = j.useCallback(function(a) {
				var b = d.filter(function(b) {
					return b != null && (z[b] != null || b === a)
				}).indexOf(a);
				return b === -1 ? null : b
			}, [z, d]),
			N = j.useCallback(function(a, b) {
				a != null && b != null && (A() && (i(!0), J())), G(null), E(null), C(null)
			}, [J, A]);
		f = j.useCallback(function() {
			C(null)
		}, []);
		var O = j.useCallback(function(a, b) {
			G(a), E(b)
		}, []);
		if (t == null || u == null || y == null || a == null || a.is_current !== !0) {
			b("recoverableViolation")("Settings TemplateList toggle menu needs a template, activeTabs, and disabledTabs, currentTemplate, and pageID", "pages_consumer_experience_www");
			return null
		}
		p = t.map(function(a, b) {
			var c, d = a.action_type;
			a.optional_id != null && d != null && (d = d + "." + a.optional_id);
			return {
				body: a == null ? void 0 : (c = a.description) == null ? void 0 : c.text,
				headline: a == null ? void 0 : (c = a.name_propercase) == null ? void 0 : c.text,
				isDraggable: w && b > 0,
				isSaving: r,
				mutation: L,
				position: M(d),
				showToggle: x && (a == null ? void 0 : a.hideable) === !0,
				tabName: d,
				value: !0
			}
		});
		c = u.map(function(a) {
			var b, c = a.action_type;
			a.optional_id != null && c != null && (c = c + "." + a.optional_id);
			return {
				body: a == null ? void 0 : (b = a.description) == null ? void 0 : b.text,
				headline: a == null ? void 0 : (b = a.label) == null ? void 0 : b.text,
				isDraggable: w,
				isSaving: r,
				mutation: K,
				position: M(c),
				showToggle: x,
				tabName: c,
				value: !1
			}
		});
		var P = p.concat(x ? c : []);
		return j.jsx("div", {
			onDragLeave: f,
			children: d.map(function(a, c) {
				if (a == null) return null;
				var d = P.filter(function(b) {
					return b.tabName === a
				})[0];
				return d == null || d.tabName == null ? null : j.jsxs("div", {
					children: [j.jsx(b("PagesCometAdminSettingsEditPageTabsListDraggableItem.react"), {
						index: c,
						isBlank: c === B && D != null && c > 0,
						isDragging: D != null,
						listDragStart: O,
						listOnDragOver: I,
						listOnDrop: N,
						tab: d
					}), j.jsx(b("PagesCometAdminSettingsEditPageTabsListBar.react"), {
						barIndex: c,
						draggingIndex: D,
						draggingOverIndex: B,
						isLastBar: c === P.length - 1
					}), d.tabName === "TAB_LIVE_VIDEOS" ? j.jsx(b("PagesCometAdminLiveTabSettingsNux.react"), {
						pageID: y
					}) : null]
				}, d.tabName)
			})
		})
	}
}), null);