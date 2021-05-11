__d("CometSuspendWhileWaitingOnDOM.react", ["Promise", "ExecutionEnvironment", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    b("React");
    function a() {
        if (!b("ExecutionEnvironment").canUseDOM)
            throw b("Promise").reject();
        return null
    }
}
), null);