if (self.CavalryLogger) { CavalryLogger.start_js(["TOVoy"]); }

__d("AdsDaoResult",[],(function(a,b,c,d,e,f){a=Object.freeze({SUCCESS:1,NO_RESULT_RETURNED:2,RESULT_HAS_ERROR:3});e.exports=a}),null);
__d("adsDaoCaching",["AdsUtils","Assert"],(function(a,b,c,d,e,f){"use strict";function g(a){var b=Object.keys(a).sort(),c={};for(var d=0;d<b.length;++d){var e=b[d];c[e]=typeof a[e]==="number"?""+a[e]:a[e]}return JSON.stringify(c)}a=function(){function a(){}var b=a.prototype;b.isCached=function(a,b){return!1};b.getCache=function(a,b){return null};b.setCache=function(a,b,c){return null};b.invalidateCache=function(a,b){return null};b.clear=function(a){return null};return a}();f.BaseCacheMechanism=a;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$InMemoryCacheMechanism1={};return b}var d=c.prototype;d.isCached=function(a,b){return!!this.getCache(a,b)};d.getCache=function(a,b){var c=this.$InMemoryCacheMechanism2(a,void 0);a=this.$InMemoryCacheMechanism3(a,b);return Object.prototype.hasOwnProperty.call(c,a)&&c[a]};d.setCache=function(a,b,c){var d=this.$InMemoryCacheMechanism2(a);d[this.$InMemoryCacheMechanism3(a,b)]=c};d.invalidateCache=function(a,b){a.conflictDataCommands.forEach(function(a){delete this.$InMemoryCacheMechanism1[this.$InMemoryCacheMechanism4(a)]},this)};d.clear=function(a){delete this.$InMemoryCacheMechanism1[a.dataCommandId]};d.$InMemoryCacheMechanism2=function(a,c){c=this.$InMemoryCacheMechanism4(a);this.$InMemoryCacheMechanism1[c]||(this.$InMemoryCacheMechanism1[c]={});b("Assert").isTruthy(this.$InMemoryCacheMechanism1[c],"Cache bucket is null even after initialization");return this.$InMemoryCacheMechanism1[c]};d.$InMemoryCacheMechanism4=function(a){return a.dataCommandId};d.$InMemoryCacheMechanism3=function(a,b){a=this.$InMemoryCacheMechanism5(a,b);return g(a)};d.$InMemoryCacheMechanism5=function(a,c){a=babelHelpers["extends"]({},a.requiredParameters,a.optionalParameters);return b("AdsUtils").mapIntersectKey(c,a)};return c}(a);f.InMemoryCacheMechanism=c}),null);
__d("AdsDao",["invariant","Promise","AdsDaoEvents","AdsDaoResult","TAAL","adsDaoCaching","isValidID"],(function(a,b,c,d,e,f,g){"use strict";var h=b("AdsDaoEvents").Arbiter,i=b("AdsDaoEvents").ArbiterEvents;a=b("adsDaoCaching").BaseCacheMechanism;var j=function(a,b,c){a={parameters:a,rawData:b};c!=null&&(a.commandName=c);h.inform(i.ERROR,a,"event")},k=function(){function a(a,c){this.$1=a;this.$2=c;if(!c)throw new Error(b("TAAL").blameToPreviousFile("Failed to explicitly state which parameter is used to build the\n          endpoint! All DAO commands that use TransformParameterValue to build\n          the endpoint must provide which parameters are needed to build the\n          endpoint. This is to prevent CSRF attacks!"))}var c=a.prototype;c.transformParameterValue=function(a){if(!b("isValidID")(a[this.$2]))throw new Error(b("TAAL").blameToPreviousFile("parameters."+this.$2+" is not a valid FBID: received "+a[this.$2]));return this.$1(a)};return a}();f.TransformParameterValue=k;var l=function(){function a(){this.$1=[]}var b=a.prototype;b.addRequest=function(a){this.$1.push(a)};b.fireCallbacks=function(a){for(var b=0;b<this.$1.length;++b)this.$1[b].callback(a);this.$1=[]};return a}();c=function(){function a(){}var c=a.prototype;c.handleError=function(){g(0,2482)};c.execute=function(a,b){return null};c.one=function(a,b){this.execute(a,this.$1(b))};c.promiseOne=function(a){var c=this;return new(b("Promise"))(function(b,d){function e(a,b,c){d({result:a,rawData:b,actualParameters:c})}c.one(b,Object.assign(a||{},{handleError:e}))})};c.multi=function(a,b){b=b.requests;var c=b.length;c===0&&(a&&a());var d=function(){--c===0&&(a&&a())};b.forEach(function(a){var b=function(b){a.callback&&a.callback(b),d()};this.one(b,a.parameters||{})},this)};c.clearCache=function(){this.cacheMechanism.clear(this)};c.isCached=function(a){return this.cacheMechanism.isCached(this,a)};c.getCache=function(a){return this.cacheMechanism.getCache(this,a)};c.setCache=function(a,b){this.cacheMechanism.setCache(this,a,b)};c.invalidateCache=function(a){var b=this.getCache(a);b instanceof l||this.cacheMechanism.invalidateCache(this,a)};c.$1=function(a){a=babelHelpers["extends"]({},this.constantParameters,a);this.$2(a);this.$3(a);return a};c.unittest__verifyParameters=function(a){this.$2(a)};c.$2=function(a){for(var b in this.requiredParameters)a[b]!=null||g(0,2481,b)};c.$3=function(a){for(var b in a){var c=a[b];c instanceof k&&(a[b]=c.transformParameterValue(a))}};return a}();f.DataCommand=c;Object.assign(c.prototype,{constantParameters:{},requiredParameters:{},optionalParameters:{handleError:!0},cacheMechanism:new a()});d=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.provideData=function(a,b){return null};d.validateData=function(a){return b("AdsDaoResult").SUCCESS};d.processData=function(a){return a};d.execute=function(a,c){var d=this,e=function(e){var f=d.validateData(e);d.setCache(c,e);if(f===b("AdsDaoResult").SUCCESS)a&&a(d.processData(e),e);else{j(c,e,d.commandName);var g=c.handleError||d.handleError;g.call(d,f,e,c)}};this.isCached(c)?this.$DataProvider1(c,e):this.$DataProvider2(c,e)};d.$DataProvider1=function(a,b){var c=this.getCache(a);c instanceof l?c.addRequest({callback:b}):c!=null&&window.setTimeout(function(){b(c)},1)};d.$DataProvider2=function(a,b){var c=new l();c.addRequest({callback:b});this.setCache(a,c);this.provideData(a,function(a){c.fireCallbacks(a)})};return c}(c);f.DataProvider=d;e=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.mutateData=function(a,b){return null};d.validateData=function(a){return b("AdsDaoResult").SUCCESS};d.execute=function(a,c){var d=this,e=function(e){var f=d.validateData(e);if(f===b("AdsDaoResult").SUCCESS)d.invalidateCache(c),a&&a(e);else{j(c,e,d.commandName);var g=c.handleError||d.handleError;g.call(d,f,e)}};this.mutateData(c,e)};return c}(c);f.DataMutator=e;Object.assign(e.prototype,{conflictDataCommands:[]})}),null);
__d("adsDaoUtils",["invariant"],(function(a,b,c,d,e,f,g){"use strict";f.primeDao=a;f.createDataCommand=b;f.transformIdToString=c;var h=1;function a(a,b,c){var d=babelHelpers["extends"]({},a);for(var e in c)Object.prototype.hasOwnProperty.call(a,e)&&(d[e]=i(a[e],b));return d}function i(a,b){var c={};for(var d in a)c[d]=a[d];a=c.constantParameters||{};b=b.constantParameters||{};typeof a==="object"||g(0,4611);typeof b==="object"||g(0,4612);c.constantParameters=babelHelpers["extends"]({},a,b);return c}function b(a,b,c){var d=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(a);Object.assign(d.prototype,b,{dataCommandId:c||h++});c=["requiredParameters","constantParameters","optionalParameters"];c.forEach(function(c){var e=a.prototype[c]||{},f=b[c]||{};typeof e==="object"||g(0,4611);typeof f==="object"||g(0,4612);d.prototype[c]=babelHelpers["extends"]({},e,f)});return new d()}function c(a){typeof a.id==="number"&&(a.id=""+a.id)}}),null);
__d("AdsDaoGraphSpec",["AdsDaoResult","adsDaoCaching"],(function(a,b,c,d,e,f){f.validateData=a;f.handleError=c;d={endpoint:!0};f.requiredParameters=d;e={__after_id:!0,after:!0,before:!0,limit:!0,offset:!0,version:!0};f.optionalParameters=e;function a(a){if(!a)return b("AdsDaoResult").NO_RESULT_RETURNED;else if(a.error)return b("AdsDaoResult").RESULT_HAS_ERROR;return b("AdsDaoResult").SUCCESS}function c(a,b,c){}a=new(b("adsDaoCaching").InMemoryCacheMechanism)();f.cacheMechanism=a}),null);
__d("AdsDaoGraphDataProvider",["Promise","AdsDao","AdsDaoGraphSpec","AdsGraphAPI","AdsInterfacesLogger","BanzaiODS","GraphAPI","URI","promiseDone"],(function(a,b,c,d,e,f){"use strict";var g;a=b("AdsDao").DataProvider;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.provideData=function(a,c){var d=this,f=a.version?b("GraphAPI")(a.version,e.id):b("AdsGraphAPI").get(e.id);f=f.path_DO_NOT_USE(a.endpoint);a.__batched&&(f=f.batched());delete a.__batched;b("promiseDone")(f.get(a),c,function(a){return d.$AdsDaoGraphDataProvider1(a,c)})};d.$AdsDaoGraphDataProvider1=function(a,c){b("AdsInterfacesLogger").log({eventName:"ads_api_call_from_dao_fail"},b("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP),b("BanzaiODS").bumpEntityKey(2966,"ads_dao","api_fail"),c&&c({error:a})};d.processData=function(a){return a.data||a};d.accumulate=function(a,b,c){var d=[],e=0,f=function b(f,g,h){d=d.concat(f);e++;f=c&&e>=c||h&&h.summary&&h.summary.total_count<=d.length;g&&!f?g(b):a(d)};this.paged(f,b)};d.paged=function(a,c){var d=this;function e(a,c){return function(f,h){var i=h.paging&&h.paging.next,j=new(g||(g=b("URI")))(i);function k(a){var b=babelHelpers["extends"]({},c,j.getQueryData());d.one(e(a,b),b)}a(f,i?k:null,h)}}this.one(e(a,c),c)};d.promiseAccumulate=function(a,c){var d=this;return new(b("Promise"))(function(b,e){var f=function(a,b,c){e({result:a,rawData:b,actualParameters:c})};a=babelHelpers["extends"]({},a,{handleError:f});d.accumulate(b,a,c)})};return c}(a);e.exports=c;Object.assign(c.prototype,b("AdsDaoGraphSpec"))}),null);
__d("adsDaoGraphFetch",["AdsAPISpec","AdsCreateFlowQueryLimits","AdsDao","AdsDaoGraphDataProvider","AdsUtils","adsDaoUtils"],(function(a,b,c,d,e,f){"use strict";var g;a=b("AdsDao").TransformParameterValue;c=b("AdsAPISpec").ACCOUNT_FIELDS;d=b("AdsAPISpec").USER_APP_FIELDS.map(b("AdsUtils").underscoreKey);c={picture:(e=b("adsDaoUtils")).createDataCommand(g=b("AdsDaoGraphDataProvider"),{requiredParameters:{fbid:!0},constantParameters:{endpoint:new a(function(a){return"/"+a.fbid+"/picture"},"fbid")}}),pixel:e.createDataCommand(g,{requiredParameters:{pixelId:!0},optionalParameters:{start_time:!0,fields:!0},constantParameters:{endpoint:new a(function(a){return"/"+a.pixelId},"pixelId")}}),userInfo:e.createDataCommand(g,{constantParameters:{endpoint:"/me"}}),audience:e.createDataCommand(g,{requiredParameters:{audienceID:!0},constantParameters:{__batched:!0,endpoint:new a(function(a){return"/"+a.audienceID},"audienceID"),migrations_override:'{"ads_api_graphnode_q4_2014": true}'}}),imagesForAccount:e.createDataCommand(g,{requiredParameters:{accountId:!0},constantParameters:{endpoint:new a(function(a){return"/act_"+a.accountId+"/adimages"},"accountId")},optionalParameters:{hashes:!0}}),accountInfo:e.createDataCommand(g,{requiredParameters:{accountId:!0},optionalParameters:{fields:!0},constantParameters:{endpoint:new a(function(a){return"/act_"+a.accountId},"accountId"),fields:c}}),appInfo:e.createDataCommand(g,{requiredParameters:{appId:!0},optionalParameters:{fields:!0},constantParameters:{endpoint:new a(function(a){return"/"+a.appId},"appId"),fields:d}}),languages:e.createDataCommand(g,{requiredParameters:{locale:!0},optionalParameters:{q:!0},constantParameters:{endpoint:"/search",type:"adlocale",limit:b("AdsCreateFlowQueryLimits").AD_COUNTRY_QUERY_LIMIT}}),countries:e.createDataCommand(g,{requiredParameters:{locale:!0},constantParameters:{endpoint:"/search",type:"adcountry",limit:b("AdsCreateFlowQueryLimits").AD_COUNTRY_QUERY_LIMIT},processData:function(a){return b("AdsUtils").indexedMap(a.data,"country_code","name")}})};f.fetch=c;for(var h in c){a=c[h];a&&(a.commandName="fetch_"+h)}}),null);
__d("adsDaoGraphDataMutator",["AdsDao","AdsDaoGraphSpec","AdsGraphAPI","GraphAPI","promiseDone"],(function(a,b,c,d,e,f){a=b("AdsDao").DataMutator;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.mutateData=function(a,c){var d=a.version?b("GraphAPI")(a.version,e.id):b("AdsGraphAPI").get(e.id);d=d.path_DO_NOT_USE(a.endpoint);b("promiseDone")(d.post(a),c,function(a){c({error:a})})};return c}(a);f.GraphDataMutator=c;Object.assign(c.prototype,b("AdsDaoGraphSpec"));d=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.mutateData=function(a,c){var d=a.version?b("GraphAPI")(a.version,e.id):b("AdsGraphAPI").get(e.id);d=d.path_DO_NOT_USE(a.endpoint);b("promiseDone")(d.remove(a),c,function(a){c({error:a})})};return c}(a);f.GraphDataRemover=d;Object.assign(d.prototype,b("AdsDaoGraphSpec"))}),null);
__d("adsDaoGraphMutate",["AdsDao","adsDaoGraphDataMutator","adsDaoGraphFetch","adsDaoUtils"],(function(a,b,c,d,e,f){a=b("adsDaoGraphDataMutator").GraphDataMutator;c=b("adsDaoGraphDataMutator").GraphDataRemover;d=b("AdsDao").TransformParameterValue;b={imageForAccount:(e=b("adsDaoUtils")).createDataCommand(a,{requiredParameters:{accountId:!0,bytes:!0},constantParameters:{endpoint:new d(function(a){return"/act_"+a.accountId+"/adimages"},"accountId")},conflictDataCommands:[b("adsDaoGraphFetch").fetch.imagesForAccount]}),updateAccount:e.createDataCommand(a,{requiredParameters:{accountId:!0},constantParameters:{endpoint:new d(function(a){return"/act_"+a.accountId},"accountId")}}),updateAdgroup:e.createDataCommand(a,{requiredParameters:{adgroupId:!0},optionalParameters:{locale:!0},constantParameters:{endpoint:new d(function(a){return"/"+a.adgroupId},"adgroupId")}}),updateCampaign:e.createDataCommand(a,{requiredParameters:{campaignId:!0},optionalParameters:{name:!0,daily_budget:!0,campaign_status:!0},constantParameters:{endpoint:new d(function(a){return"/"+a.campaignId},"campaignId")}}),audiencesImport:e.createDataCommand(a,{requiredParameters:{accountId:!0,name:!0,third_party_data:!0},constantParameters:{endpoint:new d(function(a){return"/act_"+a.accountId+"/emailimport"},"accountId")}}),createLookalikeCluster:e.createDataCommand(a,{requiredParameters:{accountId:!0,origin_audience_id:!0,lookalike_spec:!0},optionalParameters:{name:!0,description:!0},constantParameters:{subtype:"lookalike",endpoint:new d(function(a){return"/act_"+a.accountId+"/customaudiences"},"accountId")}}),createCustomAudience:e.createDataCommand(a,{requiredParameters:{accountId:!0,name:!0,subtype:!0},optionalParameters:{opt_out_link:!0,rev_share_policy_id:!0,is_category:!0,creation_params:!0,description:!0,details:!0,source:!0,isPrivate:!0,additionalMetadata:!0,countries:!0,minAge:!0,maxAge:!0,expectedSize:!0,gender:!0,partner_reference_key:!0,partnerID:!0,is_household:!0,seed_audience:!0},constantParameters:{endpoint:new d(function(a){return"/act_"+a.accountId+"/customaudiences"},"accountId")}}),createWebsiteCombinationAudience:e.createDataCommand(a,{requiredParameters:{accountId:!0,name:!0,inclusions:!0},optionalParameters:{exclusions:!0,prefill:!0,creation_params:!0,pixel_id:!0},constantParameters:{subtype:"combination",endpoint:new d(function(a){return"/act_"+a.accountId+"/customaudiences"},"accountId")}}),createActionsLookalike:e.createDataCommand(a,{requiredParameters:{accountId:!0,lookalike_spec:!0},optionalParameters:{name:!0,description:!0},constantParameters:{subtype:"lookalike",endpoint:new d(function(a){return"/act_"+a.accountId+"/customaudiences"},"accountId")}}),reportSpecs:e.createDataCommand(a,{requiredParameters:{accountId:!0,name:!0},optionalParameters:{data_columns:!0,export_columns:!0,date_preset:!0,filters:!0,time_increment:!0,sort_by:!0,sort_dir:!0,time_interval:!0},constantParameters:{endpoint:new d(function(a){return"/act_"+a.accountId+"/adreportspecs"},"accountId")}}),scheduleReport:e.createDataCommand(a,{requiredParameters:{accountId:!0,name:!0,schedule_frequency:!0,status:!0,emails:!0},optionalParameters:{actions_group_by:!0,data_columns:!0,date_preset:!0,filters:!0,time_increment:!0,sort_by:!0,sort_dir:!0,time_interval:!0,report_spec_id:!0,start_date:!0},constantParameters:{endpoint:new d(function(a){return"/act_"+a.accountId+"/adreportschedules"},"accountId")}}),acceptCustomAudiencesTos:e.createDataCommand(a,{requiredParameters:{accountId:!0,tos_id:!0},constantParameters:{endpoint:new d(function(a){return"/act_"+a.accountId+"/customaudiencestos"},"accountId")}})};f.add=b;c={objectByFBID:e.createDataCommand(c,{requiredParameters:{fbid:!0},optionalParameters:{fields:!0},constantParameters:{endpoint:new d(function(a){return"/"+a.fbid},"fbid")}}),audience:e.createDataCommand(c,{requiredParameters:{audienceId:!0},optionalParameters:{force_delete_lookalikes:!0},constantParameters:{endpoint:new d(function(a){return"/"+a.audienceId},"audienceId")}}),brand:e.createDataCommand(c,{requiredParameters:{brandID:!0},constantParameters:{endpoint:new d(function(a){return"/"+a.brandID},"brandID")}}),removeAudienceCapabilities:e.createDataCommand(c,{requiredParameters:{audienceID:!0,adaccounts:!0},constantParameters:{endpoint:new d(function(a){return"/"+a.audienceID+"/capabilities"},"audienceID")}}),reportSpecs:e.createDataCommand(c,{requiredParameters:{reportSpecId:!0},constantParameters:{endpoint:new d(function(a){return"/"+a.reportSpecId},"reportSpecId")}}),scheduledReport:e.createDataCommand(c,{requiredParameters:{scheduledReportId:!0},constantParameters:{endpoint:new d(function(a){var b=a.scheduledReportId;delete a.scheduledReportId;return"/"+b},"scheduledReportId")}}),productCatalog:e.createDataCommand(c,{requiredParameters:{productCatalogID:!0},constantParameters:{endpoint:new d(function(a){return"/"+a.productCatalogID},"productCatalogID")}}),project:e.createDataCommand(c,{requiredParameters:{projectID:!0},constantParameters:{endpoint:new d(function(a){return"/"+a.projectID},"projectID")}})};f.remove=c;c={customAudience:e.createDataCommand(a,{requiredParameters:{id:!0},optionalParameters:{name:!0,description:!0,rule:!0,rule_aggregation:!0,opt_out_link:!0},constantParameters:{endpoint:new d(function(a){var b="/"+a.id;delete a.id;return b},"id")}}),reportSpecs:e.createDataCommand(a,{requiredParameters:{id:!0},optionalParameters:{data_columns:!0,export_columns:!0,date_preset:!0,filters:!0,time_increment:!0,sort_by:!0,sort_dir:!0,time_interval:!0},constantParameters:{endpoint:new d(function(a){var b="/"+a.id;delete a.id;return b},"id")}}),updateAccount:e.createDataCommand(a,{requiredParameters:{accountId:!0},optionalParameters:{timezone_id:!0,currency:!0},constantParameters:{endpoint:new d(function(a){return"/act_"+a.accountId},"accountId")}}),scheduledReport:e.createDataCommand(a,{requiredParameters:{scheduledReportId:!0,name:!0,schedule_frequency:!0,status:!0,emails:!0},optionalParameters:{actions_group_by:!0,data_columns:!0,date_preset:!0,filters:!0,time_increment:!0,sort_by:!0,sort_dir:!0,time_interval:!0,report_spec_id:!0,start_date:!0},constantParameters:{endpoint:new d(function(a){var b=a.scheduledReportId;delete a.scheduledReportId;return"/"+b},"scheduledReportId")}}),acceptBusinessRequest:e.createDataCommand(a,{requiredParameters:{requestId:!0,request_status:!0},constantParameters:{endpoint:new d(function(a){return"/"+a.requestId},"requestId")}})};f.mutate=c;for(var g in b){e=b[g];e&&(e.commandName="add_"+g)}}),null);
__d("adsDaoGraphPrimed",["adsDaoUtils"],(function(a,b,c,d,e,f){f.forAccount=a;f.forBrand=c;f.forLocale=d;function a(a){a={constantParameters:{accountId:a}};this.fetch=b("adsDaoUtils").primeDao(this.fetch,a,{imagesForAccount:!0,accountInfo:!0,customCluster:!0,appsForUser:!0,contactsLists:!0});this.add=b("adsDaoUtils").primeDao(this.add,a,{audiencesImport:!0,acceptCustomAudiencesTos:!0,imageForAccount:!0,updateAccount:!0,createCustomAudience:!0,createAdsPixel:!0,reportSpecs:!0,scheduleReport:!0});this.mutate=b("adsDaoUtils").primeDao(this.mutate,a,{customAudience:!0,reportSpecs:!0,savedTargetSpec:!0,updateAccount:!0});return this}function c(a,c){var d={fetch:this.fetch,add:this.add,remove:this.remove,mutate:this.mutate,primedForAccount:this.forAccount,primedForLocale:this.forLocale,primedForBrand:this.forBrand};a={constantParameters:{brandID:a,locale:c}};d.mutate=b("adsDaoUtils").primeDao(this.mutate,a,{brandPersona:!0});return d}function d(a){a={constantParameters:{locale:a}};this.add=b("adsDaoUtils").primeDao(this.add,a,{createLookalikeCluster:!0,createActionsLookalike:!0});this.fetch=b("adsDaoUtils").primeDao(this.fetch,a,{adTargetingCategory:!0,countries:!0,geolocation:!0,languages:!0});return this}}),null);
__d("AdsDaoGraph",["adsDaoGraphFetch","adsDaoGraphMutate","adsDaoGraphPrimed"],(function(a,b,c,d,e,f){a={fetch:b("adsDaoGraphFetch").fetch,add:b("adsDaoGraphMutate").add,remove:b("adsDaoGraphMutate").remove,mutate:b("adsDaoGraphMutate").mutate,primedForAccount:b("adsDaoGraphPrimed").forAccount,primedForLocale:b("adsDaoGraphPrimed").forLocale,primedForBrand:b("adsDaoGraphPrimed").forBrand};c=a;e.exports=c}),null);
__d("FDSFooterSection.react",["React","makeFDSStandardComponent","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){return g.jsx("div",{className:"kq0njkpp qfqc7jwe r731vybg rwu7h5hb nwsrlgme",children:this.props.children})};return b}(g.Component);c=b("makeFDSStandardComponent")("FDSFooterSection",a);e.exports=c}),null);
__d("XUIDataTableBody.react",["cx","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a,c){var e=d.props.columns.map(function(b){return a[b.id]}),f=d.props.onRowMouseEnter?d.props.onRowMouseEnter.bind(null,a):null,g=d.props.onRowMouseLeave?d.props.onRowMouseLeave.bind(null,a):null,i=d.props.onRowClick?d.props.onRowClick.bind(null,a):null;e=e.map(function(b,e){return d.$2(b,c,e,a)});var j=d.props.highlightedRows&&d.props.highlightedRows.indexOf(a.index)>=0;return h.jsx("tr",{className:b("joinClasses")(a.className||null,(d.props.selectedRow===a?"_4jpt":"")+(d.props.selectedRow===a?" _6nr3":"")+(j?" _73go":"")+(j?" _73gp":"")),ref:d.props.rowRef(a,c),onMouseEnter:f,onMouseLeave:g,onClick:i,children:e},a.key||"row"+c)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$2=function(a,c,d,e){var f=this.props.columns[d];f.cellRenderer?c=f.cellRenderer(a,d,e,c):c=a;a=b("joinClasses")(f.cellClassName||null,(this.props.smallPadding&&!this.props.noPadding?"_73gq":"")+(this.props.noPadding?" _5m_a":"")+" _100u"+(f.isNumeric?" _54_7":""));this.props.height?c=h.jsx("div",{style:{display:"block",width:f.width},children:c}):this.props.fixColumnWidth&&(c=h.jsx("div",{style:{width:f.width},children:c}));f=f.hovercardURIGenerator&&e.active?f.hovercardURIGenerator(e):null;return h.jsx("td",{className:a,"data-hovercard":f,children:c},"cell"+d)};d.render=function(){var a=this.props.height?{height:this.props.height,overflowY:"scroll",display:"block"}:null;return h.jsx("tbody",{className:"_100w",style:a,children:this.props.rows.map(this.$1)})};return c}(h.Component);e.exports=a;a.propTypes={columns:(c=b("prop-types")).array.isRequired,rows:c.array.isRequired,height:c.number,selectedRow:c.object,rowRef:c.func,onRowMouseEnter:c.func,onRowMouseLeave:c.func,onRowClick:c.func,fixColumnWidth:c.bool,highlightedRows:c.array,smallPadding:c.bool,noPadding:c.bool};a.defaultProps={rowRef:function(){return null}}}),null);
__d("XUIDataTableHead.react",["cx","AccessibleTableParts.react","Keys","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){d.props.onSortSelection(a.id)},d.$2=function(a){var c="ascending",e="descending",f="none",g=a.sortable,i=a.id===d.props.columnToSortBy,j=b("joinClasses")("_jxx"+(g?" _54_8":"")+(i?" _54_9":"")+(a.isNumeric?" _54_7":"")+(i&&d.props.reverseSort?" _5y6x":""),a.className),k,l=null,m=null;isNaN(parseFloat(a.width))||(k=typeof a.width==="number"?"px":"",m=a.width+k);isNaN(parseFloat(a.paddingLeft))||(k=typeof a.paddingLeft==="number"?"px":"",l=a.paddingLeft+k);k=null;(l||m)&&(k={},l&&(k.paddingLeft=l),m&&(k.width=m));a.headerRenderer?l=a.headerRenderer(a.label):l=a.label||null;d.props.useFixedWidth&&(l=h.jsx("div",{style:{display:"block",width:a.width},children:l}));return h.jsx("th",{style:k,"aria-sort":i?d.props.reverseSort?e:c:f,onKeyPress:g?function(b){return d.$3(b,a)}:null,tabIndex:0,onClick:g?d.$1.bind(babelHelpers.assertThisInitialized(d),a):null,className:j,children:l},a.id)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$3=function(a,c){a=a||window.event;var d=a.keyCode||a.which;(d===b("Keys").RETURN||d===b("Keys").SPACE)&&(a.preventDefault(),this.$1(c))};d.render=function(){var a=this.props.useFixedWidth?{display:"block"}:null;return h.jsx("thead",{className:"_jy0"+(this.props.hidden?" _-4-":""),style:a,children:h.jsx(b("AccessibleTableParts.react").HeadRow,{className:"_jy1",children:this.props.columns.map(this.$2)})})};return c}(h.Component);e.exports=a;a.propTypes={columns:(c=b("prop-types")).array.isRequired,columnToSortBy:c.string,onSortSelection:c.func.isRequired,reverseSort:c.bool,useFixedWidth:c.bool,hidden:c.bool}}),null);
__d("XUIDataTable.react",["cx","BootloadOnRender.react","JSResource","LazyComponent.react","React","XUIDataTableBody.react","XUIDataTableHead.react","XUITable.react","emptyFunction","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React"),i=100;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(){return!c.props.bodyHeight?c.props.columns:c.props.columns.map(function(a){return babelHelpers["extends"]({},a,{width:a.width||i})})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=null,c=this.props,d=c.viewStart;c=c.viewLength;c=this.props.viewLength!==null?this.props.rows.slice(d,d+c):this.props.rows.slice(d,this.props.rows.length);d=h.jsx(b("XUIDataTableBody.react"),{columns:this.$1(),rows:c,height:this.props.bodyHeight,selectedRow:this.props.selectedRow,rowRef:this.props.rowRef,onRowMouseEnter:this.props.onRowMouseEnter,onRowMouseLeave:this.props.onRowMouseLeave,onRowClick:this.props.onRowClick,fixColumnWidth:this.props.fixColumnWidth,highlightedRows:this.props.highlightedRows,smallPadding:this.props.smallPadding,noPadding:this.props.noPadding});c="_54_6"+(this.props.bodyHeight?" _4yv-":"");if(this.props.showHeader&&this.props.stickyHeader){a=h.jsx(b("BootloadOnRender.react"),{component:h.jsx(b("LazyComponent.react"),{className:"_3vw9",children:h.jsx(b("XUITable.react"),{"data-testid":void 0,outerBorder:this.props.outerBorder,className:(c,"_1i_v"),children:h.jsx(b("XUIDataTableHead.react"),{columns:this.$1(),columnToSortBy:this.props.columnToSortBy,onSortSelection:this.props.onSortAttempt,reverseSort:this.props.reverseSort,useFixedWidth:!!this.props.bodyHeight})})}),loader:b("JSResource")("StickyArea.react").__setRef("XUIDataTable.react"),placeholder:h.jsx("div",{})});return h.jsxs("div",{className:this.props.className,children:[a,h.jsxs(b("XUITable.react"),{"data-testid":void 0,outerBorder:this.props.outerBorder,className:c,children:[h.jsx(b("XUIDataTableHead.react"),{columns:this.$1(),onSortSelection:b("emptyFunction"),hidden:!0}),d]})]})}this.props.showHeader&&(a=h.jsx(b("XUIDataTableHead.react"),{columns:this.$1(),columnToSortBy:this.props.columnToSortBy,onSortSelection:this.props.onSortAttempt,reverseSort:this.props.reverseSort,useFixedWidth:!!this.props.bodyHeight}));return h.jsxs(b("XUITable.react"),{"data-testid":void 0,outerBorder:this.props.outerBorder,className:b("joinClasses")(this.props.className,c),children:[a,d]})};return c}(h.Component);e.exports=a;a.propTypes={fixColumnWidth:(c=b("prop-types")).bool,onSortAttempt:c.func.isRequired,reverseSort:c.bool.isRequired,columnToSortBy:c.string,columns:c.array.isRequired,rows:c.array.isRequired,selectedRow:c.object,outerBorder:c.bool,showHeader:c.bool,stickyHeader:c.bool,bodyHeight:c.number,viewStart:c.number,viewLength:c.number,onRowMouseEnter:c.func,onRowMouseLeave:c.func,onRowClick:c.func,highlightedRows:c.array,smallPadding:c.bool,noPadding:c.bool,rowRef:c.func};a.defaultProps={showHeader:!0,viewStart:0,viewLength:null,fixColumnWidth:!1,rowRef:function(){return null}}}),null);
__d("ObjectSort",["invariant"],(function(a,b,c,d,e,f,g){f.getStringSortFunction=a;f.getNullableStringSortFunction=b;f.getReverseStringSortFunction=c;f.getNumericSortFunction=d;f.getReverseNumericSortFunction=e;f.getObjectInnerNumericSortFunction=h;f.getReverseObjectInnerNumericSortFunction=i;f.getObjectInnerStringSortFunction=j;f.getReverseObjectInnerStringSortFunction=k;f.getDateSortFunction=l;f.getReverseDateSortFunction=m;f.getLinkInnerStringSortFunction=n;f.getLinkInnerNumericSortFunction=o;f.getTooltipInnerDateSortFunction=p;function a(a){return function(b,c){b=b[a];c=c[a];typeof b==="string"&&typeof c==="string"||g(0,2652);return b.toLowerCase().localeCompare(c.toLowerCase())}}function b(a){return function(b,c){b=b[a];c=c[a];b==null||c==null||typeof b==="string"&&typeof c==="string"||g(0,19701);if(b==null)return 1;return c==null?-1:b.toLowerCase().localeCompare(c.toLowerCase())}}function c(a){return function(b,c){b=b[a];c=c[a];typeof b==="string"&&typeof c==="string"||g(0,2652);return-b.toLowerCase().localeCompare(c.toLowerCase())}}function d(a){return function(b,c){return(b[a]||0)-(c[a]||0)}}function e(a){return function(b,c){return-((b[a]||0)-(c[a]||0))}}function h(a){return function(b,c){b=+b[a].innerHTML;c=+c[a].innerHTML;return(b||0)-(c||0)}}function i(a){return function(b,c){b=+b[a].innerHTML;c=+c[a].innerHTML;return-((b||0)-(c||0))}}function j(a){return function(b,c){b=b[a].innerHTML;c=c[a].innerHTML;return b.toLowerCase().localeCompare(c.toLowerCase())}}function k(a){return function(b,c){b=b[a].innerHTML;c=c[a].innerHTML;return-b.toLowerCase().localeCompare(c.toLowerCase())}}function l(a){return function(b,c){b=b[a];c=c[a];b=Date.parse(b);c=Date.parse(c);(isNaN(b)||isNaN(c))&&g(0,2653);if(b===c)return 0;else if(b<c)return-1;else return 1}}function m(a){return function(b,c){b=b[a];c=c[a];b=Date.parse(b);c=Date.parse(c);(isNaN(b)||isNaN(c))&&g(0,2653);if(b===c)return 0;else if(b<c)return 1;else return-1}}function n(a){return function(b,c){b=b[a].props.children;c=c[a].props.children;return b.toLowerCase().localeCompare(c.toLowerCase())}}function o(a){return function(b,c){b=b[a].props.children;c=c[a].props.children;return(b||0)-(c||0)}}function p(a){return function(b,c){b=b[a].props.children[0];c=c[a].props.children[0];return(b||0)-(c||0)}}}),null);
__d("getDataTableSlice",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b,c){return b===0&&(c==null||c>=a.length)?a:a.slice(b,c==null?void 0:b+c)}}),null);
__d("XUISortableDataTable.react",["invariant","ObjectSort","React","XUIDataTable.react","arrayStableSort","emptyFunction","getDataTableSlice","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={columnToSortBy:c.props.columnToSortBy,selectedRow:null,reverseSort:c.props.reverseSort},c.$1=function(a,b){for(var c=0;c<a.length;c++)if(a[c].id===b)return a[c];return null},c.$4=function(a){var b=a===c.state.columnToSortBy&&!c.state.reverseSort;c.setState({columnToSortBy:a,reverseSort:b});c.props.onSort(a,b)},c.$5=function(a,b){c.props.highlightClickedRow&&c.setState({selectedRow:a}),c.props.onRowClick&&c.props.onRowClick(a,b)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(a){var b=this.state.columnToSortBy;if(!b)return;a=this.$1(a.columns,b);a||this.setState({columnToSortBy:null})};d.$2=function(a,c){switch(typeof a){case"string":return b("ObjectSort").getNullableStringSortFunction(c);case"number":return b("ObjectSort").getNumericSortFunction(c);case"object":a=a.innerHTML;if(typeof a==="string")if(!isNaN(a))return b("ObjectSort").getObjectInnerNumericSortFunction(c);else return b("ObjectSort").getObjectInnerStringSortFunction(c);default:throw new Error("No sort comparator available for column "+String(c)+".Columns not displaying strings or numbers should have custom comparator functions.")}};d.$3=function(a,c,d){var e=this.$1(this.props.columns,c),f=e?e.comparator:null;if(!f){for(var e=0;e<a.length;e++)if(a[e][c]!=null)break;f=a.length>0&&e<a.length?this.$2(a[e][c],c):b("emptyFunction")}return d?function(a,b){return-f(a,b)}:f};d.$6=function(){var a=this.state,c=a.columnToSortBy;a=a.reverseSort;if(c){var d=this.$1(this.props.columns,c);d=this.$3(this.props.rows,c,a);c=b("arrayStableSort")(this.props.rows,d)}else c=this.props.rows;a=b("getDataTableSlice")(c,this.props.viewStart,this.props.viewLength);d=this.props.stickyRows.concat(a).concat(this.props.stickyFooterRows);this.props.onSortFinished&&this.props.onSortFinished(d,c);return d};d.render=function(){return h.jsx(b("XUIDataTable.react"),babelHelpers["extends"]({},this.props,{ref:"table",selectedRow:this.props.highlightClickedRow?this.state.selectedRow:this.props.selectedRow,columnToSortBy:this.state.columnToSortBy,reverseSort:this.state.reverseSort,onSortAttempt:this.$4,onRowClick:this.$5,rows:this.$6(),rowRef:this.props.rowRef,viewStart:0,stickyHeader:this.props.stickyHeader,fixColumnWidth:this.props.fixColumnWidth,highlightedRows:this.props.highlightedRows,smallPadding:this.props.smallPadding,noPadding:this.props.noPadding}))};return c}(h.Component);e.exports=a;a.propTypes={fixColumnWidth:(c=b("prop-types")).bool,outerBorder:c.bool,columns:c.array.isRequired,columnToSortBy:c.string,selectedRow:c.object,rowRef:c.func,onSort:c.func,onSortFinished:c.func,reverseSort:c.bool,rows:c.array.isRequired,stickyRows:c.array,stickyFooterRows:c.array,stickyHeader:c.bool,showHeader:c.bool,highlightClickedRow:c.bool,viewStart:c.number,viewLength:c.number,onRowMouseEnter:c.func,onRowMouseLeave:c.func,onRowClick:c.func,highlightedRows:c.array,smallPadding:c.bool,noPadding:c.bool};a.defaultProps={onSort:b("emptyFunction"),showHeader:!0,highlightClickedRow:!1,reverseSort:!1,viewStart:0,viewLength:null,stickyRows:[],stickyFooterRows:[],fixColumnWidth:!1,rowRef:function(){return null}}}),null);
__d("PresmaSettingsSaveCancelView.react",["cx","fbt","LeftRight.react","React","XUIButton.react","XUISpinner.react","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React");function a(a){var c=null;a.shouldShowSpinnerForSave&&(c=i.jsx(b("XUISpinner.react"),{className:"_vug",background:"dark"}));return i.jsx("div",{children:i.jsxs(b("LeftRight.react"),{className:b("joinClasses")(a.className,"_1nbz"),children:[a.leftView,i.jsxs("div",{children:[a.hideCancelButton===!0?null:i.jsx(b("XUIButton.react"),{className:"_1nb-",size:"xlarge",label:h._("H\u1ee7y"),onClick:a.onCancel,disabled:a.shouldDisableCancel}),i.jsx(b("XUIButton.react"),{className:"_1nb-",size:"xlarge",use:"confirm",label:a.saveLabel?a.saveLabel:h._("L\u01b0u"),onClick:a.onSave,disabled:a.shouldDisableSave,imageRight:c})]})]})})}}),null);
__d("XDeveloperAppController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/apps/{app_id}/{?page}/{?tab}/{?view}/",{app_id:{type:"Int",required:!0},page:{type:"Enum",enumType:1},tab:{type:"String"},view:{type:"String"},placement_id:{type:"Int"},active_placements_offset:{type:"Int"},disabled_placements_offset:{type:"Int"},blocked_placements_offset:{type:"Int"},alert_id:{type:"Int"},ref:{type:"String"},id:{type:"Int"},app_locale:{type:"String"},a_n:{type:"String"},c_n:{type:"String"},new_app_email_pending:{type:"Exists",defaultValue:!1},show_messenger_webhook_errors:{type:"Exists",defaultValue:!1},submission_id:{type:"FBID"},duc_app_ids:{type:"FBIDVector"},business_id:{type:"Int"}})}),null);