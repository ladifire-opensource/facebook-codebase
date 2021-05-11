if (self.CavalryLogger) {
    CavalryLogger.start_js(["Y2kZa"]);
}

__d("serializeFormQueryMap", [], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        return [].concat(Array.from(a.querySelectorAll("input")), Array.from(a.querySelectorAll("select")), Array.from(a.querySelectorAll("textarea")), Array.from(a.querySelectorAll("button")))
    }
    function h(a, b) {
        g(a).forEach(function(a) {
            if (!a.name || a.disabled)
                return;
            var c = a.type;
            if (c === "submit" || c === "reset" || c === "button" || c === "image" || c === "file")
                return;
            if ((c === "radio" || c === "checkbox") && !a.checked)
                return;
            if (a.nodeName === "SELECT") {
                for (var d = 0, e = a.options.length; d < e; d++) {
                    var f = a.options[d];
                    f.selected && b("select", a.name, f.value)
                }
                return
            }
            b(c, a.name, a.value || "")
        })
    }
    function a(a) {
        var b = {};
        h(a, function(a, c, d) {
            a = b[c];
            Object.prototype.hasOwnProperty.call(b, c) ? Array.isArray(a) ? a.push(d) : b[c] = [a, d] : b[c] = d
        });
        return b
    }
    e.exports = a
}
), null);
