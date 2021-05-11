if (self.CavalryLogger) {
    CavalryLogger.start_js(["h+BBn"]);
}

__d("useHeroBootloadedComponent", ["CometHeroInteractionContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("CometHeroInteractionContext").Context);
        g.useEffect(function() {
            c.consumeBootload(a.getModuleId())
        }, [c, a])
    }
}
), null);
__d("BootloaderResource", [], (function(a, b, c, d, e, f) {
    f.preload = a;
    f.read = b;
    var g = {};
    function a(a) {
        a.load()
    }
    function b(b) {
        var a = b.getModuleIfRequireable();
        if (a == null) {
            var c = b.getModuleId();
            if (!g[c]) {
                b = g[c] = b.load();
                b["finally"](function() {
                    delete g[c]
                })
            }
            throw g[c]
        }
        return a
    }
}
), null);
__d("lazyLoadComponent", ["BootloaderResource", "react", "useHeroBootloadedComponent"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g, h = g || b("react"), i = new Map();
    function j(a, b) {
        i.set(a, b)
    }
    function k(a) {
        return i.get(a)
    }
    function a(a) {
        var c = k(a);
        if (c)
            return c;
        function d(c, d) {
            d === void 0 && (d = void 0);
            var e = b("BootloaderResource").read(a);
            b("useHeroBootloadedComponent")(a);
            return h.jsx(e, babelHelpers["extends"]({}, c, {
                ref: d
            }))
        }
        d.displayName = "lazyLoadComponent(" + a.getModuleId() + ")";
        c = h.forwardRef(d);
        j(a, c);
        return c
    }
}
), null);
__d("EmoticonsList", [], (function(a, b, c, d, e, f) {
    e.exports = {
        emotes: {
            "O:)": "angel",
            "O:-)": "angel",
            "0:)": "angel",
            "0:-)": "angel",
            "'-_-": "coldsweat",
            ":3": "colonthree",
            "o.O": "confused",
            O_O: "confused",
            o_o: "confused",
            "0_0": "confused",
            "O.o": "confused_rev",
            ":'(": "cry",
            ":'-(": "cry",
            "3:)": "devil",
            "3:-)": "devil",
            ":dog:": "dog",
            "-3-": "flushkiss",
            ":(": "frown",
            ":-(": "frown",
            ":[": "frown",
            "=(": "frown",
            ")=": "frown",
            ":o": "gasp",
            ":-O": "gasp",
            ":O": "gasp",
            ":-o": "gasp",
            "8-)": "glasses",
            "B-)": "glasses",
            "=D": "grin",
            ":-D": "grin",
            ":D": "grin",
            ">:(": "grumpy",
            ">:-(": "grumpy",
            "<3": "heart",
            "&lt;3": "heart",
            "^_^": "kiki",
            "^~^": "kiki",
            ":*": "kiss",
            ":-*": "kiss",
            "(y)": "like",
            ":like:": "like",
            "(Y)": "like",
            T_T: "loudly_crying",
            "T-T": "loudly_crying",
            ToT: "loudly_crying",
            "T.T": "loudly_crying",
            ":-|": "neutral",
            ":|": "neutral",
            ":v": "pacman",
            ":V": "pacman",
            '<(")': "penguin",
            ">_<": "persevere",
            ">.<": "persevere",
            ":poop:": "poop",
            ":|]": "robot",
            "(^^^)": "shark",
            ":)": "smile",
            ":-)": "smile",
            ":]": "smile",
            "(:": "smile",
            "=)": "smilingface",
            "(=": "smilingface",
            "-_-": "squint",
            "B|": "sunglasses",
            "8-|": "sunglasses",
            "8|": "sunglasses",
            "B-|": "sunglasses",
            "(n)": "thumbsdown",
            "(N)": "thumbsdown",
            ":P": "tongue",
            ":-P": "tongue",
            ":-p": "tongue",
            ":p": "tongue",
            "=P": "tongue",
            ":trans:": "transflag",
            ":/": "unsure",
            ":-/": "unsure",
            ":\\": "unsure",
            ":-\\": "unsure",
            "=/": "unsure",
            "=\\": "unsure",
            ">:o": "upset",
            ">:O": "upset",
            ">:-O": "upset",
            ">:-o": "upset",
            ";)": "wink",
            ";-)": "wink",
            ";*": "winkkiss",
            ";-*": "winkkiss",
            ";-P": "winktongue",
            ";P": "winktongue",
            ";-p": "winktongue",
            ";p": "winktongue"
        },
        symbols: {
            angel: "O:)",
            coldsweat: "'-_-",
            colonthree: ":3",
            confused: "o.O",
            confused_rev: "O.o",
            cry: ":'(",
            devil: "3:)",
            dog: ":dog:",
            flushkiss: "-3-",
            frown: ":(",
            gasp: ":o",
            glasses: "8-)",
            grin: "=D",
            grumpy: ">:(",
            heart: "<3",
            kiki: "^_^",
            kiss: ":*",
            like: "(y)",
            loudly_crying: "T_T",
            neutral: ":-|",
            pacman: ":v",
            penguin: '<(")',
            persevere: ">_<",
            poop: ":poop:",
            robot: ":|]",
            shark: "(^^^)",
            smile: ":)",
            smilingface: "=)",
            squint: "-_-",
            sunglasses: "B|",
            thumbsdown: "(n)",
            tongue: ":P",
            transflag: ":trans:",
            unsure: ":/",
            upset: ">:o",
            wink: ";)",
            winkkiss: ";*",
            winktongue: ";-P"
        },
        emoji: {
            angel: "1f607",
            coldsweat: "1f613",
            colonthree: "FACE_WITH_COLON_THREE",
            confused: "1f633",
            confused_rev: "1f633",
            cry: "1f622",
            devil: "1f608",
            dog: "1f436",
            flushkiss: "1f61a",
            frown: "1f641",
            gasp: "1f62e",
            glasses: "1f913",
            grin: "1f603",
            grumpy: "1f620",
            heart: "2764",
            kiki: "1f60a",
            kiss: "1f618",
            like: "LIKE",
            loudly_crying: "1f62d",
            neutral: "1f610",
            pacman: "PACMAN",
            penguin: "1f427",
            persevere: "1f623",
            poop: "1f4a9",
            robot: "1f916",
            shark: "1f988",
            smile: "1f642",
            smilingface: "1f60a",
            squint: "1f611",
            sunglasses: "1f60e",
            thumbsdown: "1f44e",
            tongue: "1f61b",
            transflag: "1f3f3_200d_26a7",
            unsure: "1f615",
            upset: "1f620",
            wink: "1f609",
            winkkiss: "1f618",
            winktongue: "1f61c"
        },
        regexp: /(^|[\s\'\".\(])(O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|\'\-_\-|:3|o\.O|O_O|o_o|0_0|O\.o|:\'\(|:\'\-\(|3:\)(?!\))|3:\-\)(?!\))|:dog:|\-3\-|:\(|:\-\(|:\[|=\(|\)=|:o|:\-O|:O|:\-o|8\-\)(?!\))|B\-\)(?!\))|=D|:\-D|:D|>:\(|>:\-\(|<3|&lt;3|\^_\^|\^~\^|:\*|:\-\*|\(y\)(?!\))|:like:|\(Y\)(?!\))|T_T|T\-T|ToT|T\.T|:\-\||:\||:v|:V|<\(\"\)(?!\))|>_<|>\.<|:poop:|:\|\]|\(\^\^\^\)(?!\))|:\)(?!\))|:\-\)(?!\))|:\]|\(:|=\)(?!\))|\(=|\-_\-|B\||8\-\||8\||B\-\||\(n\)(?!\))|\(N\)(?!\))|:P|:\-P|:\-p|:p|=P|:trans:|:\/|:\-\/|:\\|:\-\\|=\/|=\\|>:o|>:O|>:\-O|>:\-o|;\)(?!\))|;\-\)(?!\))|;\*|;\-\*|;\-P|;P|;\-p|;p)([\s\'\".,!?\)]|<br>|$)/,
        noncapturingRegexp: /(?:^|[\s\'\".\(])(O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|\'\-_\-|:3|o\.O|O_O|o_o|0_0|O\.o|:\'\(|:\'\-\(|3:\)(?!\))|3:\-\)(?!\))|:dog:|\-3\-|:\(|:\-\(|:\[|=\(|\)=|:o|:\-O|:O|:\-o|8\-\)(?!\))|B\-\)(?!\))|=D|:\-D|:D|>:\(|>:\-\(|<3|&lt;3|\^_\^|\^~\^|:\*|:\-\*|\(y\)(?!\))|:like:|\(Y\)(?!\))|T_T|T\-T|ToT|T\.T|:\-\||:\||:v|:V|<\(\"\)(?!\))|>_<|>\.<|:poop:|:\|\]|\(\^\^\^\)(?!\))|:\)(?!\))|:\-\)(?!\))|:\]|\(:|=\)(?!\))|\(=|\-_\-|B\||8\-\||8\||B\-\||\(n\)(?!\))|\(N\)(?!\))|:P|:\-P|:\-p|:p|=P|:trans:|:\/|:\-\/|:\\|:\-\\|=\/|=\\|>:o|>:O|>:\-O|>:\-o|;\)(?!\))|;\-\)(?!\))|;\*|;\-\*|;\-P|;P|;\-p|;p)(?:[\s\'\".,!?\)]|<br>|$)/
    }
}
), null);
