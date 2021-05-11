__d("ProfileCometHubsTypeaheadDataSource", [
	"CometSearchTypeaheadBaseDataProvider", 
	"CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder",
	 "CometSearchTypeaheadBaseNetworkDataSource", 
	 "ProfileCometHubsTypeaheadDataSource.query", 
	 "cometSearchTypeaheadBaseFetchPayloadDecorate", 
	 "cometSearchTypeaheadPayloadDecoratorAddLimit", 
	 "cometSearchTypeaheadPayloadDecoratorRemoveDuplicates",
	  "profileCometHubsQueryVariablesBuilder"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a(a) {
			var c = a.limit,
				d = a.relayEnvironment;
			a = a.section;
			this.$3 = [];
			this.$2 = c;
			c = new(b("CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder"))(b("profileCometHubsQueryVariablesBuilder")).setDefaultVariables({
				first: c,
				photo_size: 50,
				section: a
			});
			a = new(b("CometSearchTypeaheadBaseDataProvider"))({
				query: b("ProfileCometHubsTypeaheadDataSource.query").query,
				queryVariablesBuilder: c,
				relayEnvironment: d
			});
			this.$1 = new(b("CometSearchTypeaheadBaseNetworkDataSource"))(a, b("ProfileCometHubsTypeaheadDataSource.query").normalize)
		}
		var c = a.prototype;
		c.fetchNetwork = function (a) {
			var c = this,
				d = function (a) {
					return b("cometSearchTypeaheadBaseFetchPayloadDecorate")(a, [b("cometSearchTypeaheadPayloadDecoratorRemoveDuplicates")(c.$3), b("cometSearchTypeaheadPayloadDecoratorAddLimit")(c.$2)])
				};
			return this.$1.fetchNetwork(a).then(function (a) {
				return d(a)
			})
		};
		c.setTokens = function (a) {
			this.$3 = a
		};
		return a
	}();
	e.exports = a
}), null);