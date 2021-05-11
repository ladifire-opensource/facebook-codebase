__d("CometPhotoViewerResponsiveInnerWrapper.react", ["CometRouteRenderType", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	f.useCometPhotoViewerContainerStyles = j;
	var g, h = b("React"),
		i = {
			backgroundContainerDialog: {
				"@media (max-width: 899px)": {
					height: "nos9j3a5"
				}
			},
			backgroundContainerDialogWithFooter: {
				height: "n626y76b",
				"@media (max-width: 899px)": {
					height: "aessy0lw"
				}
			},
			backgroundContainerResponsive: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				position: "l9j0dhe7",
				"@media (max-width: 899px)": {
					height: "spskuzq3"
				}
			},
			backgroundContainerTabs: {
				height: "bkyfam09",
				"@media (max-width: 899px)": {
					height: "pw8zj2ei"
				}
			},
			backgroundContainerTabsWithFooter: {
				height: "bekozo2m",
				"@media (max-width: 899px)": {
					height: "f6tgzqhp"
				}
			},
			image: {
				maxWidth: "d2edcug0",
				"@media (max-width: 899px)": {
					maxHeight: "r9f5tntg"
				}
			},
			maxImageHeightDialog: {
				maxHeight: "ji94ytn4",
				"@media (max-width: 899px)": {
					maxHeight: "bnxxjg7g"
				}
			},
			maxImageHeightDialogWithFooter: {
				maxHeight: "nskh8ow2",
				"@media (max-width: 899px)": {
					maxHeight: "dx5evmzu"
				}
			},
			maxImageHeightTabs: {
				maxHeight: "gitj76qy",
				"@media (max-width: 899px)": {
					maxHeight: "bnxxjg7g"
				}
			},
			maxImageHeightTabsWithFooter: {
				maxHeight: "kgqd366c",
				"@media (max-width: 899px)": {
					maxHeight: "a7lra598"
				}
			},
			passthroughImage: {
				backgroundPosition: "d2hbt3d9",
				backgroundRepeat: "qb00l2mb",
				backgroundSize: "gj6al65z",
				height: "datstx6m",
				width: "k4urcfbm"
			},
			photoWrapperPlaceholder: {
				height: "datstx6m",
				width: "k4urcfbm"
			},
			photoWrapperResponsive: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				justifyContent: "taijpn5t",
				position: "l9j0dhe7"
			},
			placeholderContainer: {
				height: "datstx6m",
				width: "k4urcfbm"
			}
		};

	function j(a, c) {
		a === void 0 && (a = !1);
		c === void 0 && (c = !1);
		var d = b("CometRouteRenderType").useIsPushView();
		return (g || (g = b("stylex")))(i.backgroundContainerResponsive, !a && d && i.backgroundContainerDialog, !a && !d && i.backgroundContainerTabs, a && d && i.backgroundContainerDialogWithFooter, a && !d && i.backgroundContainerTabsWithFooter, c && i.placeholderContainer)
	}

	function k(a, c) {
		var d = b("CometRouteRenderType").useIsPushView();
		return (g || (g = b("stylex")))(!a && d ? i.maxImageHeightDialog : null, !a && !d ? i.maxImageHeightTabs : null, a && d ? i.maxImageHeightDialogWithFooter : null, a && !d ? i.maxImageHeightTabsWithFooter : null, c ? i.passthroughImage : null, c ? null : i.image)
	}

	function l(a, c) {
		var d = b("CometRouteRenderType").useIsPushView();
		return [!a && d && i.maxImageHeightDialog, !a && !d && i.maxImageHeightTabs, a && d && i.maxImageHeightDialogWithFooter, a && !d && i.maxImageHeightTabsWithFooter, c && i.passthroughImage, !c && i.image]
	}

	function a(a, c) {
		var d = a.height,
			e = a.imageUri,
			f = a.showPlaceholderImage;
		f = f === void 0 ? !0 : f;
		var l = a.width;
		a = a.withFooter;
		a = a === void 0 ? !1 : a;
		a = k(a, !0);
		var m = j(!1, !0);
		return h.jsx("div", {
			className: m,
			ref: (m = c) != null ? m : null,
			children: e != null && f && h.jsx("div", {
				className: (g || (g = b("stylex")))(i.photoWrapperResponsive, i.photoWrapperPlaceholder),
				children: h.jsx("div", {
					className: a,
					style: d != null && l != null ? {
						backgroundImage: "url(" + e + ")",
						maxHeight: d,
						maxWidth: l
					} : {
						backgroundImage: "url(" + e + ")"
					}
				}, e)
			})
		})
	}

	function c(a, c) {
		var d = a.imageComponent,
			e = a.imageComponentWithXStyle;
		a = a.withFooter;
		a = a === void 0 ? !1 : a;
		var f = k(a, !1);
		a = l(a, !1);
		return h.jsx("div", {
			className: (g || (g = b("stylex")))(i.photoWrapperResponsive),
			ref: c,
			children: d != null ? d(f) : e != null ? e(a) : null
		})
	}
	d = h.forwardRef(c);
	f.CometPhotoViewerImageWrapper = d;
	e = h.forwardRef(a);
	f.CometPhotoViewerPlaceholderWrapper = e
}), null);