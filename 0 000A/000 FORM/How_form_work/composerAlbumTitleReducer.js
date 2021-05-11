__d("composerAlbumTitleReducer", [], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, b) {
		switch (b.type) {
			case "update_album_title":
				return babelHelpers["extends"]({}, a, {
					albumData: babelHelpers["extends"]({}, a.albumData, {
						albumTitle: b.albumTitle
					})
				})
		}
		return a
	}
}), null);