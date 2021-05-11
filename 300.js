if (self.CavalryLogger) { CavalryLogger.start_js(["xsjWl"]); }

__d("SpotlightViewerBottomBar",["cx","LeftRight.react","React","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=Array.isArray(this.props.children)?this.props.children:[this.props.children],c="_4_8n _51an";this.props.className&&(c=b("joinClasses")(c,this.props.className));if(a.length===1)return h.jsx("div",{className:c,children:a[0]});c=b("joinClasses")(c,"_50-m");return h.jsxs(b("LeftRight.react"),{className:c,children:[a[0],a[1]]})};return c}(h.Component);e.exports=a}),null);
__d("SpotlightViewerBottomBarGroup",["cx","React"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){var a=this.props.itemmargin||"right";a=(a=="left"?"marginLeft":"")+(a=="right"?" marginRight":"")+" _4_8i";return h.jsx("div",{className:a,children:this.props.children})};return b}(h.Component);e.exports=a}),null);
__d("MessagingVideoViewer.react",["cx","fbt","ActorURI","ArbiterMixin","AsyncRequest","MessagingForwardingButtonNUX.react","PageTransitionsRegistrar","PhotoViewerDimensions","React","ReactFragment","SpotlightViewer","SpotlightViewerBottomBar","SpotlightViewerBottomBarGroup","SpotlightViewerBottomBarLink","SpotlightViewerClose","SpotlightViewport","Vector","XMessagingVideoAttachmentController","createReactClass_DEPRECATED","guid","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("React"),j=200;c=b("createReactClass_DEPRECATED")({displayName:"MessagingVideoViewer",propTypes:{disableForward:(a=b("prop-types")).bool,forwardDialogComponent:a.func.isRequired,pageID:a.number,rootClassName:a.string,videoSize:a.instanceOf(b("Vector")).isRequired,videoID:a.string.isRequired,videoURI:a.string.isRequired},mixins:[b("ArbiterMixin")],getInitialState:function(){var a=new(b("PhotoViewerDimensions"))({verticalPadding:j});return{dimensions:a.getStageDimensions(this.props.videoSize),loading:!0,open:!0,showForward:!1}},UNSAFE_componentWillMount:function(){this._domID=b("guid")()},componentDidMount:function(){var a=this;this._loadVideoPlayer();b("PageTransitionsRegistrar").registerCompletionCallback(function(){a.close();return!0})},_loadVideoPlayer:function(){var a=this,c=b("XMessagingVideoAttachmentController").getURIBuilder().setString("video_id",this.props.videoID).setString("video_container_id",this._domID).setInt("width",this.state.dimensions.x).setInt("height",this.state.dimensions.y).getURI();this.props.pageID&&(c=b("ActorURI").create(c,this.props.pageID));this.request=new(b("AsyncRequest"))().setMethod("GET").setURI(c).setReadOnly(!0).setHandler(function(b){return a.setState({loading:!1})}).send()},close:function(){if(!this.state.open)return;this.setState({open:!1},function(){this.inform("close")})},_showForwardDialog:function(){this.setState({showForward:!0}),this.refs_forwardNUX.close()},_hideForwardDialog:function(){this.setState({showForward:!1})},renderLayers:function(){var a=this;if(this.props.disableForward)return null;var c=h._("Chuy\u1ec3n ti\u1ebfp qua nhi\u1ec1u tin nh\u1eafn ri\u00eang"),d=this.props.forwardDialogComponent;return b("ReactFragment").create({forwardDialog:i.jsx(d,{attachmentID:this.props.videoID,onClose:this._hideForwardDialog,shown:this.state.showForward,title:c}),forwardButtonNUX:i.jsx(b("MessagingForwardingButtonNUX.react"),{contextRef:function(){return a.refs_forwardButton},ref:function(b){return a.refs_forwardNUX=b},children:h._("G\u1eedi video n\u00e0y cho ng\u01b0\u1eddi kh\u00e1c b\u1eb1ng tin nh\u1eafn ri\u00eang.")})})},render:function(){var a=this,c=i.jsx("div",{className:"rfloat",id:this._domID}),d;this.props.disableForward||(d=i.jsx(b("SpotlightViewerBottomBarLink"),{onClick:this._showForwardDialog,ref:function(b){return a.refs_forwardButton=b},children:h._("Chuy\u1ec3n ti\u1ebfp")}));return i.jsxs("span",{children:[i.jsx(b("SpotlightViewer"),{onHide:this.close,open:this.state.open,rootClassName:this.props.rootClassName,children:i.jsxs(b("SpotlightViewport"),{active:!0,className:"_39hc",media:c,showLoadingIndicator:this.state.loading,stageDimensions:this.state.dimensions,useWidth:!0,children:[i.jsx(b("SpotlightViewerClose"),{onClick:this.close}),i.jsxs(b("SpotlightViewerBottomBar"),{className:"stat_elem",children:[i.jsx(b("SpotlightViewerBottomBarGroup"),{}),i.jsxs(b("SpotlightViewerBottomBarGroup"),{children:[d,i.jsx(b("SpotlightViewerBottomBarLink"),{s:"true",href:this.props.videoURI,children:h._("T\u1ea3i xu\u1ed1ng")})]})]})]})}),this.renderLayers()]})}});e.exports=c}),null);
__d("SpotlightMessagesViewer",["fbt","ActorURI","ArbiterMixin","MessagingForwardingButtonNUX.react","PageTransitionsRegistrar","React","ReactFragment","SpotlightViewer","SpotlightViewerAutoResize","SpotlightViewerBehaviorsMixin","SpotlightViewerBottomBar","SpotlightViewerBottomBarGroup","SpotlightViewerBottomBarLink","SpotlightViewerClose","SpotlightViewerCoreMixin","SpotlightViewerDimensionMixin","SpotlightViewerPagers","SpotlightViewerPageWithKeys","SpotlightViewerThumbnailMixin","SpotlightViewport","SubscriptionsHandler","XMessagingPhotoDownloadController","createReactClass_DEPRECATED"],(function(a,b,c,d,e,f,g){var h=b("React");a=b("createReactClass_DEPRECATED")({displayName:"SpotlightMessagesViewer",mixins:[b("ArbiterMixin"),b("SpotlightViewerBehaviorsMixin"),b("SpotlightViewerCoreMixin"),b("SpotlightViewerThumbnailMixin"),b("SpotlightViewerDimensionMixin")],behaviors:[b("SpotlightViewerPageWithKeys"),b("SpotlightViewerAutoResize")],componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release(),this._subscriptions=null},getViewerID:function(){return this.props.setid},getInitialState:function(){this._subscriptions=new(b("SubscriptionsHandler"))();return{photoData:this._getInitialPhotoData(),open:!0,showForward:!1}},_enableSubscriptions:function(){var a=this;this.props.useloadingindicator&&this._subscriptions.addSubscriptions(this.viewState.subscribe("photo_fetch",function(){return a.setState({photoData:null})}))},_showForwardDialog:function(){this.setState({showForward:!0}),this.refs_forwardNUX.close()},_hideForwardDialog:function(){this.setState({showForward:!1})},renderLayers:function(){var a=this;if(this.props.disableForward)return null;var c=g._("Chuy\u1ec3n ti\u1ebfp qua nhi\u1ec1u tin nh\u1eafn ri\u00eang"),d=this.props.forwardDialogComponent;return b("ReactFragment").create({forwardDialog:h.jsx(d,{attachmentID:String(this.state.photoData.id),onClose:this._hideForwardDialog,shown:this.state.showForward,title:c}),forwardButtonNUX:h.jsx(b("MessagingForwardingButtonNUX.react"),{contextRef:function(){return a.refs_forwardButton},ref:function(b){return a.refs_forwardNUX=b},children:g._("G\u1eedi h\u00ecnh \u1ea3nh n\u00e0y cho ng\u01b0\u1eddi kh\u00e1c b\u1eb1ng tin nh\u1eafn ri\u00eang.")})})},render:function(){var a=this,c=this.getMedia(),d=this.props.snapToPhoto?this.getImageDimensions():this.getStageDimensions();d.x=Math.max(d.x,185);d.y=Math.max(d.y,185);var e=this.props.useloadingindicator&&!this.state.photoData;b("PageTransitionsRegistrar").registerCompletionCallback(function(){a.state.open&&a.close();return!0});return h.jsxs("span",{children:[h.jsx(b("SpotlightViewer"),{rootClassName:this.props.rootClassName,open:this.state.open,onHide:this.close,children:h.jsxs(b("SpotlightViewport"),{active:!1,onClick:this._onClickViewport,stageDimensions:d,media:c,showLoadingIndicator:e,useWidth:!0,children:[h.jsx(b("SpotlightViewerClose"),{onClick:this.close}),this.props.disablepaging?null:h.jsx(b("SpotlightViewerPagers"),{}),this._renderBottomBar()]})}),this.renderLayers()]})},_renderBottomBar:function(){var a=this,c;this.props.disableForward||(c=h.jsx(b("SpotlightViewerBottomBarLink"),{onClick:this._showForwardDialog,ref:function(b){return a.refs_forwardButton=b},children:g._("Chuy\u1ec3n ti\u1ebfp")}));var d=b("XMessagingPhotoDownloadController").getURIBuilder().setString("photo_id",String(this.state.photoData.id)).getURI();this.props.actorid&&(d=b("ActorURI").create(d,this.props.actorid));return h.jsxs(b("SpotlightViewerBottomBar"),{children:[h.jsx(b("SpotlightViewerBottomBarGroup"),{}),h.jsxs(b("SpotlightViewerBottomBarGroup"),{children:[c,h.jsx(b("SpotlightViewerBottomBarLink"),{rel:"async",ajaxify:d,children:g._("T\u1ea3i xu\u1ed1ng")})]})]})}});e.exports=a}),null);