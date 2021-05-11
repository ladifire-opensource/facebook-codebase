__d("CometFormTokenizer.react", ["BaseTokenizer.react", 
	"CometFormTokenizerInputStrategy.react", 
	"CometFormTokenizerLayoutContextualStrategy.react", 
	"CometTokenizerTokenStrategy.react", "CometTypeaheadTextViewItem.react", 
	"React", "useBaseTokenizerDecorators", "useCometTokenizerListTokenStrategy", 
	"useCometTypeaheadListViewStrategy", "withCometTokenizerTokenManagementDecorator"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.dataSource,
			d = a.disabled,
			e = a.validationState,
			f = a.viewStrategyRenderer,
			h = a.tokenListRenderer,
			i = a.tokenStrategyRenderer;
		i = i === void 0 ? b("CometTokenizerTokenStrategy.react") : i;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["dataSource", "disabled", "validationState", "viewStrategyRenderer", "tokenListRenderer", "tokenStrategyRenderer"]);
		var j = b("useBaseTokenizerDecorators")({
			tokenManagementDecorator: {
				decorate: b("withCometTokenizerTokenManagementDecorator"),
				params: {
					dataSource: c
				}
			}
		});
		f = (f = f) != null ? f : b("useCometTypeaheadListViewStrategy")({
			viewItemStrategyRenderer: b("CometTypeaheadTextViewItem.react")
		});
		i = b("useCometTokenizerListTokenStrategy")({
			tokenItemRenderer: i,
			tokenListRenderer: h
		});
		return g.jsx(b("BaseTokenizer.react"), babelHelpers["extends"]({}, a, {
			dataSource: c,
			decorators: j,
			inputExtraProps: {
				validationState: e
			},
			inputStrategyRenderer: b("CometFormTokenizerInputStrategy.react"),
			isDisabled: d,
			layoutStrategyRenderer: b("CometFormTokenizerLayoutContextualStrategy.react"),
			tokensStrategyRenderer: i,
			viewStrategyRenderer: f
		}))
	}
}), null);