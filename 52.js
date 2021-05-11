if (self.CavalryLogger) {
    CavalryLogger.start_js(["87aQp"]);
}

__d("BizKitLocalScopeSelectorContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        tool: null
    });
    e.exports = c
}
), null);
__d("PagesManagerInboxSavedRepliesUpsellNUXContainerWrapper.react", ["FluxContainer", "PagesManagerInboxSavedRepliesUpsellNUXContainer.react", "PagesManagerMessagingComposerStore", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.getStores = function() {
            return [b("PagesManagerMessagingComposerStore")]
        }
        ;
        c.calculateState = function() {
            var a = b("PagesManagerMessagingComposerStore").getShouldShowSavedReplyUpsellNUX();
            return {
                shouldShowNux: a
            }
        }
        ;
        var d = c.prototype;
        d.render = function() {
            return !this.state.shouldShowNux ? null : g.jsx(b("PagesManagerInboxSavedRepliesUpsellNUXContainer.react"), {
                contextRef: this.props.contextRef,
                onNuxDismiss: this.props.onNuxDismiss,
                onNuxShow: this.props.onNuxShow
            })
        }
        ;
        return c
    }(g.PureComponent);
    c = b("FluxContainer").create(a);
    e.exports = c
}
), null);
