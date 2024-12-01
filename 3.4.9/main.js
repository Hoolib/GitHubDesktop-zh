(() => {
    var e = {
            9082: (e, t, r) => {
                var n = {};
                e.exports = n, n.themes = {};
                var i = r(9023),
                    o = n.styles = r(7404),
                    s = Object.defineProperties,
                    a = new RegExp(/[\r\n]+/g);
                n.supportsColor = r(9411).supportsColor, void 0 === n.enabled && (n.enabled = !1 !== n.supportsColor()), n.enable = function () {
                    n.enabled = !0
                }, n.disable = function () {
                    n.enabled = !1
                }, n.stripColors = n.strip = function (e) {
                    return ("" + e).replace(/\x1B\[\d+m/g, "")
                }, n.stylize = function (e, t) {
                    if (!n.enabled) return e + "";
                    var r = o[t];
                    return !r && t in n ? n[t](e) : r.open + e + r.close
                };
                var l = /[|\\{}()[\]^$+*?.]/g;

                function u(e) {
                    var t = function e() {
                        return f.apply(e, arguments)
                    };
                    return t._styles = e, t.__proto__ = d, t
                }
                var c, h = (c = {}, o.grey = o.gray, Object.keys(o).forEach((function (e) {
                        o[e].closeRe = new RegExp(function (e) {
                            if ("string" != typeof e) throw new TypeError("Expected a string");
                            return e.replace(l, "\\$&")
                        }(o[e].close), "g"), c[e] = {
                            get: function () {
                                return u(this._styles.concat(e))
                            }
                        }
                    })), c),
                    d = s((function () {}), h);

                function f() {
                    var e = Array.prototype.slice.call(arguments).map((function (e) {
                        return null != e && e.constructor === String ? e : i.inspect(e)
                    })).join(" ");
                    if (!n.enabled || !e) return e;
                    for (var t = -1 != e.indexOf("\n"), r = this._styles, s = r.length; s--;) {
                        var l = o[r[s]];
                        e = l.open + e.replace(l.closeRe, l.open) + l.close, t && (e = e.replace(a, (function (e) {
                            return l.close + e + l.open
                        })))
                    }
                    return e
                }
                n.setTheme = function (e) {
                    if ("string" != typeof e)
                        for (var t in e) ! function (t) {
                            n[t] = function (r) {
                                if ("object" == typeof e[t]) {
                                    var i = r;
                                    for (var o in e[t]) i = n[e[t][o]](i);
                                    return i
                                }
                                return n[e[t]](r)
                            }
                        }(t);
                    else console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));")
                };
                var p = function (e, t) {
                    var r = t.split("");
                    return (r = r.map(e)).join("")
                };
                for (var g in n.trap = r(4715), n.zalgo = r(9891), n.maps = {}, n.maps.america = r(6606)(n), n.maps.zebra = r(2678)(n), n.maps.rainbow = r(4860)(n), n.maps.random = r(4131)(n), n.maps) ! function (e) {
                    n[e] = function (t) {
                        return p(n.maps[e], t)
                    }
                }(g);
                s(n, function () {
                    var e = {};
                    return Object.keys(h).forEach((function (t) {
                        e[t] = {
                            get: function () {
                                return u([t])
                            }
                        }
                    })), e
                }())
            },
            4715: e => {
                e.exports = function (e, t) {
                    var r = "";
                    e = (e = e || "Run the trap, drop the bass").split("");
                    var n = {
                        a: ["@", "Ą", "Ⱥ", "Ʌ", "Δ", "Λ", "Д"],
                        b: ["ß", "Ɓ", "Ƀ", "ɮ", "β", "฿"],
                        c: ["©", "Ȼ", "Ͼ"],
                        d: ["Ð", "Ɗ", "Ԁ", "ԁ", "Ԃ", "ԃ"],
                        e: ["Ë", "ĕ", "Ǝ", "ɘ", "Σ", "ξ", "Ҽ", "੬"],
                        f: ["Ӻ"],
                        g: ["ɢ"],
                        h: ["Ħ", "ƕ", "Ң", "Һ", "Ӈ", "Ԋ"],
                        i: ["༏"],
                        j: ["Ĵ"],
                        k: ["ĸ", "Ҡ", "Ӄ", "Ԟ"],
                        l: ["Ĺ"],
                        m: ["ʍ", "Ӎ", "ӎ", "Ԡ", "ԡ", "൩"],
                        n: ["Ñ", "ŋ", "Ɲ", "Ͷ", "Π", "Ҋ"],
                        o: ["Ø", "õ", "ø", "Ǿ", "ʘ", "Ѻ", "ם", "۝", "๏"],
                        p: ["Ƿ", "Ҏ"],
                        q: ["্"],
                        r: ["®", "Ʀ", "Ȑ", "Ɍ", "ʀ", "Я"],
                        s: ["§", "Ϟ", "ϟ", "Ϩ"],
                        t: ["Ł", "Ŧ", "ͳ"],
                        u: ["Ʊ", "Ս"],
                        v: ["ט"],
                        w: ["Ш", "Ѡ", "Ѽ", "൰"],
                        x: ["Ҳ", "Ӿ", "Ӽ", "ӽ"],
                        y: ["¥", "Ұ", "Ӌ"],
                        z: ["Ƶ", "ɀ"]
                    };
                    return e.forEach((function (e) {
                        e = e.toLowerCase();
                        var t = n[e] || [" "],
                            i = Math.floor(Math.random() * t.length);
                        r += void 0 !== n[e] ? n[e][i] : e
                    })), r
                }
            },
            9891: e => {
                e.exports = function (e, t) {
                    e = e || "   he is here   ";
                    var r = {
                            up: ["̍", "̎", "̄", "̅", "̿", "̑", "̆", "̐", "͒", "͗", "͑", "̇", "̈", "̊", "͂", "̓", "̈", "͊", "͋", "͌", "̃", "̂", "̌", "͐", "̀", "́", "̋", "̏", "̒", "̓", "̔", "̽", "̉", "ͣ", "ͤ", "ͥ", "ͦ", "ͧ", "ͨ", "ͩ", "ͪ", "ͫ", "ͬ", "ͭ", "ͮ", "ͯ", "̾", "͛", "͆", "̚"],
                            down: ["̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̤", "̥", "̦", "̩", "̪", "̫", "̬", "̭", "̮", "̯", "̰", "̱", "̲", "̳", "̹", "̺", "̻", "̼", "ͅ", "͇", "͈", "͉", "͍", "͎", "͓", "͔", "͕", "͖", "͙", "͚", "̣"],
                            mid: ["̕", "̛", "̀", "́", "͘", "̡", "̢", "̧", "̨", "̴", "̵", "̶", "͜", "͝", "͞", "͟", "͠", "͢", "̸", "̷", "͡", " ҉"]
                        },
                        n = [].concat(r.up, r.down, r.mid);

                    function i(e) {
                        return Math.floor(Math.random() * e)
                    }

                    function o(e) {
                        var t = !1;
                        return n.filter((function (r) {
                            t = r === e
                        })), t
                    }
                    return function (e, t) {
                        var n, s, a = "";
                        for (s in (t = t || {}).up = void 0 === t.up || t.up, t.mid = void 0 === t.mid || t.mid, t.down = void 0 === t.down || t.down, t.size = void 0 !== t.size ? t.size : "maxi", e = e.split(""))
                            if (!o(s)) {
                                switch (a += e[s], n = {
                                    up: 0,
                                    down: 0,
                                    mid: 0
                                }, t.size) {
                                case "mini":
                                    n.up = i(8), n.mid = i(2), n.down = i(8);
                                    break;
                                case "maxi":
                                    n.up = i(16) + 3, n.mid = i(4) + 1, n.down = i(64) + 3;
                                    break;
                                default:
                                    n.up = i(8) + 1, n.mid = i(6) / 2, n.down = i(8) + 1
                                }
                                var l = ["up", "mid", "down"];
                                for (var u in l)
                                    for (var c = l[u], h = 0; h <= n[c]; h++) t[c] && (a += r[c][i(r[c].length)])
                            } return a
                    }(e, t)
                }
            },
            6606: e => {
                e.exports = function (e) {
                    return function (t, r, n) {
                        if (" " === t) return t;
                        switch (r % 3) {
                        case 0:
                            return e.red(t);
                        case 1:
                            return e.white(t);
                        case 2:
                            return e.blue(t)
                        }
                    }
                }
            },
            4860: e => {
                e.exports = function (e) {
                    var t = ["red", "yellow", "green", "blue", "magenta"];
                    return function (r, n, i) {
                        return " " === r ? r : e[t[n++ % t.length]](r)
                    }
                }
            },
            4131: e => {
                e.exports = function (e) {
                    var t = ["underline", "inverse", "grey", "yellow", "red", "green", "blue", "white", "cyan", "magenta", "brightYellow", "brightRed", "brightGreen", "brightBlue", "brightWhite", "brightCyan", "brightMagenta"];
                    return function (r, n, i) {
                        return " " === r ? r : e[t[Math.round(Math.random() * (t.length - 2))]](r)
                    }
                }
            },
            2678: e => {
                e.exports = function (e) {
                    return function (t, r, n) {
                        return r % 2 == 0 ? t : e.inverse(t)
                    }
                }
            },
            7404: e => {
                var t = {};
                e.exports = t;
                var r = {
                    reset: [0, 0],
                    bold: [1, 22],
                    dim: [2, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    hidden: [8, 28],
                    strikethrough: [9, 29],
                    black: [30, 39],
                    red: [31, 39],
                    green: [32, 39],
                    yellow: [33, 39],
                    blue: [34, 39],
                    magenta: [35, 39],
                    cyan: [36, 39],
                    white: [37, 39],
                    gray: [90, 39],
                    grey: [90, 39],
                    brightRed: [91, 39],
                    brightGreen: [92, 39],
                    brightYellow: [93, 39],
                    brightBlue: [94, 39],
                    brightMagenta: [95, 39],
                    brightCyan: [96, 39],
                    brightWhite: [97, 39],
                    bgBlack: [40, 49],
                    bgRed: [41, 49],
                    bgGreen: [42, 49],
                    bgYellow: [43, 49],
                    bgBlue: [44, 49],
                    bgMagenta: [45, 49],
                    bgCyan: [46, 49],
                    bgWhite: [47, 49],
                    bgGray: [100, 49],
                    bgGrey: [100, 49],
                    bgBrightRed: [101, 49],
                    bgBrightGreen: [102, 49],
                    bgBrightYellow: [103, 49],
                    bgBrightBlue: [104, 49],
                    bgBrightMagenta: [105, 49],
                    bgBrightCyan: [106, 49],
                    bgBrightWhite: [107, 49],
                    blackBG: [40, 49],
                    redBG: [41, 49],
                    greenBG: [42, 49],
                    yellowBG: [43, 49],
                    blueBG: [44, 49],
                    magentaBG: [45, 49],
                    cyanBG: [46, 49],
                    whiteBG: [47, 49]
                };
                Object.keys(r).forEach((function (e) {
                    var n = r[e],
                        i = t[e] = [];
                    i.open = "[" + n[0] + "m", i.close = "[" + n[1] + "m"
                }))
            },
            9111: e => {
                "use strict";
                e.exports = function (e, t) {
                    var r = (t = t || process.argv).indexOf("--"),
                        n = /^-{1,2}/.test(e) ? "" : "--",
                        i = t.indexOf(n + e);
                    return -1 !== i && (-1 === r || i < r)
                }
            },
            9411: (e, t, r) => {
                "use strict";
                var n = r(857),
                    i = r(9111),
                    o = process.env,
                    s = void 0;

                function a(e) {
                    var t = function (e) {
                        if (!1 === s) return 0;
                        if (i("color=16m") || i("color=full") || i("color=truecolor")) return 3;
                        if (i("color=256")) return 2;
                        if (e && !e.isTTY && !0 !== s) return 0;
                        var t = n.release().split(".");
                        return Number(process.versions.node.split(".")[0]) >= 8 && Number(t[0]) >= 10 && Number(t[2]) >= 10586 ? Number(t[2]) >= 14931 ? 3 : 2 : 1
                    }(e);
                    return function (e) {
                        return 0 !== e && {
                            level: e,
                            hasBasic: !0,
                            has256: e >= 2,
                            has16m: e >= 3
                        }
                    }(t)
                }
                i("no-color") || i("no-colors") || i("color=false") ? s = !1 : (i("color") || i("colors") || i("color=true") || i("color=always")) && (s = !0), "FORCE_COLOR" in o && (s = 0 === o.FORCE_COLOR.length || 0 !== parseInt(o.FORCE_COLOR, 10)), e.exports = {
                    supportsColor: a,
                    stdout: a(process.stdout),
                    stderr: a(process.stderr)
                }
            },
            1555: (e, t, r) => {
                var n = r(9082);
                e.exports = n
            },
            8561: e => {
                var t = [],
                    r = [],
                    n = function () {};

                function i(e) {
                    return !~t.indexOf(e) && (t.push(e), !0)
                }

                function o(e) {
                    n = e
                }

                function s(e) {
                    for (var r = [], n = 0; n < t.length; n++)
                        if (t[n].async) r.push(t[n]);
                        else if (t[n](e)) return !0;
                    return !!r.length && new Promise((function (t) {
                        Promise.all(r.map((function (t) {
                            return t(e)
                        }))).then((function (e) {
                            t(e.some(Boolean))
                        }))
                    }))
                }

                function a(e) {
                    return !~r.indexOf(e) && (r.push(e), !0)
                }

                function l() {
                    n.apply(n, arguments)
                }

                function u(e) {
                    for (var t = 0; t < r.length; t++) e = r[t].apply(r[t], arguments);
                    return e
                }

                function c(e, t) {
                    var r = Object.prototype.hasOwnProperty;
                    for (var n in t) r.call(t, n) && (e[n] = t[n]);
                    return e
                }

                function h(e) {
                    return e.enabled = !1, e.modify = a, e.set = o, e.use = i, c((function () {
                        return !1
                    }), e)
                }

                function d(e) {
                    return e.enabled = !0, e.modify = a, e.set = o, e.use = i, c((function () {
                        var t = Array.prototype.slice.call(arguments, 0);
                        return l.call(l, e, u(t, e)), !0
                    }), e)
                }
                e.exports = function (e) {
                    return e.introduce = c, e.enabled = s, e.process = u, e.modify = a, e.write = l, e.nope = h, e.yep = d, e.set = o, e.use = i, e
                }
            },
            7206: (e, t, r) => {
                e.exports = r(6127)
            },
            6127: (e, t, r) => {
                var n = r(8561)((function e(t, r) {
                    return (r = r || {}).namespace = t, r.prod = !0, r.dev = !1, r.force || e.force ? e.yep(r) : e.nope(r)
                }));
                e.exports = n
            },
            3273: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e) {
                    return (0, o.isAsync)(e) ? function (...t) {
                        const r = t.pop();
                        return a(e.apply(this, t), r)
                    } : (0, n.default)((function (t, r) {
                        var n;
                        try {
                            n = e.apply(this, t)
                        } catch (e) {
                            return r(e)
                        }
                        if (n && "function" == typeof n.then) return a(n, r);
                        r(null, n)
                    }))
                };
                var n = s(r(787)),
                    i = s(r(7080)),
                    o = r(4933);

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function a(e, t) {
                    return e.then((e => {
                        l(t, null, e)
                    }), (e => {
                        l(t, e && e.message ? e : new Error(e))
                    }))
                }

                function l(e, t, r) {
                    try {
                        e(t, r)
                    } catch (e) {
                        (0, i.default)((e => {
                            throw e
                        }), e)
                    }
                }
                e.exports = t.default
            },
            9243: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = c(r(7307)),
                    i = c(r(1484)),
                    o = c(r(3124)),
                    s = c(r(8668)),
                    a = c(r(638)),
                    l = c(r(4933)),
                    u = c(r(673));

                function c(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function h(e, t, r) {
                    r = (0, s.default)(r);
                    var n = 0,
                        o = 0,
                        {
                            length: l
                        } = e,
                        u = !1;

                    function c(e, t) {
                        !1 === e && (u = !0), !0 !== u && (e ? r(e) : ++o !== l && t !== i.default || r(null))
                    }
                    for (0 === l && r(null); n < l; n++) t(e[n], n, (0, a.default)(c))
                }

                function d(e, t, r) {
                    return (0, o.default)(e, 1 / 0, t, r)
                }
                t.default = (0, u.default)((function (e, t, r) {
                    return ((0, n.default)(e) ? h : d)(e, (0, l.default)(t), r)
                }), 3), e.exports = t.default
            },
            3124: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = s(r(6610)),
                    i = s(r(4933)),
                    o = s(r(673));

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.default = (0, o.default)((function (e, t, r, o) {
                    return (0, n.default)(t)(e, (0, i.default)(r), o)
                }), 4), e.exports = t.default
            },
            1018: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = o(r(3124)),
                    i = o(r(673));

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.default = (0, i.default)((function (e, t, r) {
                    return (0, n.default)(e, 1, t, r)
                }), 3), e.exports = t.default
            },
            1265: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = a(r(9243)),
                    i = a(r(7089)),
                    o = a(r(4933)),
                    s = a(r(673));

                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.default = (0, s.default)((function (e, t, r) {
                    return (0, n.default)(e, (0, i.default)((0, o.default)(t)), r)
                }), 3), e.exports = t.default
            },
            4038: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e, t, r, n) {
                    let o = !1,
                        s = !1,
                        a = !1,
                        l = 0,
                        u = 0;

                    function c() {
                        l >= t || a || o || (a = !0, e.next().then((({
                            value: e,
                            done: t
                        }) => {
                            if (!s && !o) {
                                if (a = !1, t) return o = !0, void(l <= 0 && n(null));
                                l++, r(e, u, h), u++, c()
                            }
                        })).catch(d))
                    }

                    function h(e, t) {
                        if (l -= 1, !s) return e ? d(e) : !1 === e ? (o = !0, void(s = !0)) : t === i.default || o && l <= 0 ? (o = !0, n(null)) : void c()
                    }

                    function d(e) {
                        s || (a = !1, o = !0, n(e))
                    }
                    c()
                };
                var n, i = (n = r(1484)) && n.__esModule ? n : {
                    default: n
                };
                e.exports = t.default
            },
            673: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e, t = e.length) {
                    if (!t) throw new Error("arity is undefined");
                    return function (...r) {
                        return "function" == typeof r[t - 1] ? e.apply(this, r) : new Promise(((n, i) => {
                            r[t - 1] = (e, ...t) => {
                                if (e) return i(e);
                                n(t.length > 1 ? t : t[0])
                            }, e.apply(this, r)
                        }))
                    }
                }, e.exports = t.default
            },
            1484: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = {}, e.exports = t.default
            },
            6610: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = u(r(8668)),
                    i = u(r(6471)),
                    o = u(r(638)),
                    s = r(4933),
                    a = u(r(4038)),
                    l = u(r(1484));

                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.default = e => (t, r, u) => {
                    if (u = (0, n.default)(u), e <= 0) throw new RangeError("concurrency limit cannot be less than 1");
                    if (!t) return u(null);
                    if ((0, s.isAsyncGenerator)(t)) return (0, a.default)(t, e, r, u);
                    if ((0, s.isAsyncIterable)(t)) return (0, a.default)(t[Symbol.asyncIterator](), e, r, u);
                    var c = (0, i.default)(t),
                        h = !1,
                        d = !1,
                        f = 0,
                        p = !1;

                    function g(e, t) {
                        if (!d)
                            if (f -= 1, e) h = !0, u(e);
                            else if (!1 === e) h = !0, d = !0;
                        else {
                            if (t === l.default || h && f <= 0) return h = !0, u(null);
                            p || m()
                        }
                    }

                    function m() {
                        for (p = !0; f < e && !h;) {
                            var t = c();
                            if (null === t) return h = !0, void(f <= 0 && u(null));
                            f += 1, r(t.value, t.key, (0, o.default)(g))
                        }
                        p = !1
                    }
                    m()
                }, e.exports = t.default
            },
            5515: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e) {
                    return e[Symbol.iterator] && e[Symbol.iterator]()
                }, e.exports = t.default
            },
            787: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e) {
                    return function (...t) {
                        var r = t.pop();
                        return e.call(this, t, r)
                    }
                }, e.exports = t.default
            },
            7307: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e) {
                    return e && "number" == typeof e.length && e.length >= 0 && e.length % 1 == 0
                }, e.exports = t.default
            },
            6471: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e) {
                    if ((0, n.default)(e)) return function (e) {
                        var t = -1,
                            r = e.length;
                        return function () {
                            return ++t < r ? {
                                value: e[t],
                                key: t
                            } : null
                        }
                    }(e);
                    var t, r, o, s, a = (0, i.default)(e);
                    return a ? function (e) {
                        var t = -1;
                        return function () {
                            var r = e.next();
                            return r.done ? null : (t++, {
                                value: r.value,
                                key: t
                            })
                        }
                    }(a) : (r = (t = e) ? Object.keys(t) : [], o = -1, s = r.length, function e() {
                        var n = r[++o];
                        return "__proto__" === n ? e() : o < s ? {
                            value: t[n],
                            key: n
                        } : null
                    })
                };
                var n = o(r(7307)),
                    i = o(r(5515));

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.exports = t.default
            },
            8668: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e) {
                    function t(...t) {
                        if (null !== e) {
                            var r = e;
                            e = null, r.apply(this, t)
                        }
                    }
                    return Object.assign(t, e), t
                }, e.exports = t.default
            },
            638: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e) {
                    return function (...t) {
                        if (null === e) throw new Error("Callback was already called.");
                        var r = e;
                        e = null, r.apply(this, t)
                    }
                }, e.exports = t.default
            },
            8926: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = s(r(7307)),
                    i = s(r(4933)),
                    o = s(r(673));

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.default = (0, o.default)(((e, t, r) => {
                    var o = (0, n.default)(t) ? [] : {};
                    e(t, ((e, t, r) => {
                        (0, i.default)(e)(((e, ...n) => {
                            n.length < 2 && ([n] = n), o[t] = n, r(e)
                        }))
                    }), (e => r(e, o)))
                }), 3), e.exports = t.default
            },
            7080: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.fallback = s, t.wrap = a;
                var r, n = t.hasQueueMicrotask = "function" == typeof queueMicrotask && queueMicrotask,
                    i = t.hasSetImmediate = "function" == typeof setImmediate && setImmediate,
                    o = t.hasNextTick = "object" == typeof process && "function" == typeof process.nextTick;

                function s(e) {
                    setTimeout(e, 0)
                }

                function a(e) {
                    return (t, ...r) => e((() => t(...r)))
                }
                r = n ? queueMicrotask : i ? setImmediate : o ? process.nextTick : s, t.default = a(r)
            },
            7089: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e) {
                    return (t, r, n) => e(t, n)
                }, e.exports = t.default
            },
            4933: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isAsyncIterable = t.isAsyncGenerator = t.isAsync = void 0;
                var n, i = (n = r(3273)) && n.__esModule ? n : {
                    default: n
                };

                function o(e) {
                    return "AsyncFunction" === e[Symbol.toStringTag]
                }
                t.default = function (e) {
                    if ("function" != typeof e) throw new Error("expected a function");
                    return o(e) ? (0, i.default)(e) : e
                }, t.isAsync = o, t.isAsyncGenerator = function (e) {
                    return "AsyncGenerator" === e[Symbol.toStringTag]
                }, t.isAsyncIterable = function (e) {
                    return "function" == typeof e[Symbol.asyncIterator]
                }
            },
            2382: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function (e, t) {
                    return (0, n.default)(i.default, e, t)
                };
                var n = o(r(8926)),
                    i = o(r(1018));

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                e.exports = t.default
            },
            2334: function (e, t) {
                var r, n;
                void 0 === (n = "function" == typeof (r = function () {
                    var e = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

                    function t(e) {
                        var t, r, n = e.replace(/^v/, "").replace(/\+.*$/, ""),
                            i = (r = "-", -1 === (t = n).indexOf(r) ? t.length : t.indexOf(r)),
                            o = n.substring(0, i).split(".");
                        return o.push(n.substring(i + 1)), o
                    }

                    function r(e) {
                        return isNaN(Number(e)) ? e : Number(e)
                    }

                    function n(t) {
                        if ("string" != typeof t) throw new TypeError("Invalid argument expected string");
                        if (!e.test(t)) throw new Error("Invalid argument not valid semver ('" + t + "' received)")
                    }

                    function i(e, i) {
                        [e, i].forEach(n);
                        for (var o = t(e), s = t(i), a = 0; a < Math.max(o.length - 1, s.length - 1); a++) {
                            var l = parseInt(o[a] || 0, 10),
                                u = parseInt(s[a] || 0, 10);
                            if (l > u) return 1;
                            if (u > l) return -1
                        }
                        var c = o[o.length - 1],
                            h = s[s.length - 1];
                        if (c && h) {
                            var d = c.split(".").map(r),
                                f = h.split(".").map(r);
                            for (a = 0; a < Math.max(d.length, f.length); a++) {
                                if (void 0 === d[a] || "string" == typeof f[a] && "number" == typeof d[a]) return -1;
                                if (void 0 === f[a] || "string" == typeof d[a] && "number" == typeof f[a]) return 1;
                                if (d[a] > f[a]) return 1;
                                if (f[a] > d[a]) return -1
                            }
                        } else if (c || h) return c ? -1 : 1;
                        return 0
                    }
                    var o = [">", ">=", "=", "<", "<="],
                        s = {
                            ">": [1],
                            ">=": [0, 1],
                            "=": [0],
                            "<=": [-1, 0],
                            "<": [-1]
                        };
                    return i.validate = function (t) {
                        return "string" == typeof t && e.test(t)
                    }, i.compare = function (e, t, r) {
                        ! function (e) {
                            if ("string" != typeof e) throw new TypeError("Invalid operator type, expected string but got " + typeof e);
                            if (-1 === o.indexOf(e)) throw new TypeError("Invalid operator, expected one of " + o.join("|"))
                        }(r);
                        var n = i(e, t);
                        return s[r].indexOf(n) > -1
                    }, i
                }) ? r.apply(t, []) : r) || (e.exports = n)
            },
            3575: (e, t, r) => {
                "use strict";
                var n = r(2909);
                Object.defineProperty(t, "XT", {
                    enumerable: !0,
                    get: function () {
                        return n.initializeNotifications
                    }
                }), Object.defineProperty(t, "Ds", {
                    enumerable: !0,
                    get: function () {
                        return n.showNotification
                    }
                }), Object.defineProperty(t, "op", {
                    enumerable: !0,
                    get: function () {
                        return n.terminateNotifications
                    }
                }), Object.defineProperty(t, "Ym", {
                    enumerable: !0,
                    get: function () {
                        return n.getNotificationsPermission
                    }
                }), Object.defineProperty(t, "tC", {
                    enumerable: !0,
                    get: function () {
                        return n.requestNotificationsPermission
                    }
                });
                r(8026), r(1196);
                var i = r(6646);
                Object.defineProperty(t, "bz", {
                    enumerable: !0,
                    get: function () {
                        return i.onNotificationEvent
                    }
                })
            },
            2909: function (e, t, r) {
                "use strict";
                var n = this && this.__awaiter || function (e, t, r, n) {
                    return new(r || (r = Promise))((function (i, o) {
                        function s(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                                e(t)
                            }))).then(s, a)
                        }
                        l((n = n.apply(e, t || [])).next())
                    }))
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.closeNotification = t.showNotification = t.requestNotificationsPermission = t.getNotificationsPermission = t.terminateNotifications = t.initializeNotifications = void 0;
                const i = r(8026),
                    o = r(6646),
                    s = r(1962);
                let a;

                function l() {
                    return void 0 !== a || (a = i.supportsNotifications() ? r(2385) : null), a
                }
                t.initializeNotifications = e => {
                    var t;
                    return null === (t = l()) || void 0 === t ? void 0 : t.initializeNotifications(o.notificationCallback, e)
                }, t.terminateNotifications = () => {
                    var e;
                    return null === (e = l()) || void 0 === e ? void 0 : e.terminateNotifications()
                }, t.getNotificationsPermission = () => {
                    var e;
                    return null === (e = l()) || void 0 === e ? void 0 : e.getNotificationsPermission()
                }, t.requestNotificationsPermission = () => {
                    var e;
                    return null === (e = l()) || void 0 === e ? void 0 : e.requestNotificationsPermission()
                }, t.showNotification = (...e) => n(void 0, void 0, void 0, (function* () {
                    var t;
                    const r = s.v4();
                    try {
                        yield null === (t = l()) || void 0 === t ? void 0 : t.showNotification(r, ...e)
                    } catch (e) {
                        return null
                    }
                    return r
                })), t.closeNotification = (...e) => {
                    var t;
                    return null === (t = l()) || void 0 === t ? void 0 : t.closeNotification(...e)
                }
            },
            6646: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.onNotificationEvent = t.notificationCallback = void 0;
                let r = null;
                t.notificationCallback = (...e) => null == r ? void 0 : r(...e), t.onNotificationEvent = e => {
                    r = e
                }
            },
            1196: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getNotificationSettingsUrl = void 0;
                const n = r(8026);
                t.getNotificationSettingsUrl = function () {
                    return n.supportsNotifications() ? "ms-settings:notifications" : null
                }
            },
            8026: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.supportsNotificationsPermissionRequest = t.supportsNotifications = void 0;
                const n = r(857);
                t.supportsNotifications = function () {
                    return function () {
                        const e = n.release().split("."),
                            t = parseInt(e[0], 10),
                            r = e.length >= 3 ? parseInt(e[2], 10) : 15063;
                        return t > 10 || 10 === t && r >= 15063
                    }()
                }, t.supportsNotificationsPermissionRequest = function () {
                    return !1
                }
            },
            1962: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    NIL: () => E,
                    parse: () => v,
                    stringify: () => h,
                    v1: () => m,
                    v3: () => w,
                    v4: () => b,
                    v5: () => _,
                    validate: () => u,
                    version: () => S
                });
                var n = r(6982),
                    i = r.n(n);
                const o = new Uint8Array(256);
                let s = o.length;

                function a() {
                    return s > o.length - 16 && (i().randomFillSync(o), s = 0), o.slice(s, s += 16)
                }
                const l = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
                    u = function (e) {
                        return "string" == typeof e && l.test(e)
                    },
                    c = [];
                for (let e = 0; e < 256; ++e) c.push((e + 256).toString(16).substr(1));
                const h = function (e, t = 0) {
                    const r = (c[e[t + 0]] + c[e[t + 1]] + c[e[t + 2]] + c[e[t + 3]] + "-" + c[e[t + 4]] + c[e[t + 5]] + "-" + c[e[t + 6]] + c[e[t + 7]] + "-" + c[e[t + 8]] + c[e[t + 9]] + "-" + c[e[t + 10]] + c[e[t + 11]] + c[e[t + 12]] + c[e[t + 13]] + c[e[t + 14]] + c[e[t + 15]]).toLowerCase();
                    if (!u(r)) throw TypeError("Stringified UUID is invalid");
                    return r
                };
                let d, f, p = 0,
                    g = 0;
                const m = function (e, t, r) {
                        let n = t && r || 0;
                        const i = t || new Array(16);
                        let o = (e = e || {}).node || d,
                            s = void 0 !== e.clockseq ? e.clockseq : f;
                        if (null == o || null == s) {
                            const t = e.random || (e.rng || a)();
                            null == o && (o = d = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]), null == s && (s = f = 16383 & (t[6] << 8 | t[7]))
                        }
                        let l = void 0 !== e.msecs ? e.msecs : Date.now(),
                            u = void 0 !== e.nsecs ? e.nsecs : g + 1;
                        const c = l - p + (u - g) / 1e4;
                        if (c < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (c < 0 || l > p) && void 0 === e.nsecs && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                        p = l, g = u, f = s, l += 122192928e5;
                        const m = (1e4 * (268435455 & l) + u) % 4294967296;
                        i[n++] = m >>> 24 & 255, i[n++] = m >>> 16 & 255, i[n++] = m >>> 8 & 255, i[n++] = 255 & m;
                        const v = l / 4294967296 * 1e4 & 268435455;
                        i[n++] = v >>> 8 & 255, i[n++] = 255 & v, i[n++] = v >>> 24 & 15 | 16, i[n++] = v >>> 16 & 255, i[n++] = s >>> 8 | 128, i[n++] = 255 & s;
                        for (let e = 0; e < 6; ++e) i[n + e] = o[e];
                        return t || h(i)
                    },
                    v = function (e) {
                        if (!u(e)) throw TypeError("Invalid UUID");
                        let t;
                        const r = new Uint8Array(16);
                        return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, r[5] = 255 & t, r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, r[7] = 255 & t, r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, r[9] = 255 & t, r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = t / 4294967296 & 255, r[12] = t >>> 24 & 255, r[13] = t >>> 16 & 255, r[14] = t >>> 8 & 255, r[15] = 255 & t, r
                    };

                function y(e, t, r) {
                    function n(e, n, i, o) {
                        if ("string" == typeof e && (e = function (e) {
                                e = unescape(encodeURIComponent(e));
                                const t = [];
                                for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
                                return t
                            }(e)), "string" == typeof n && (n = v(n)), 16 !== n.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                        let s = new Uint8Array(16 + e.length);
                        if (s.set(n), s.set(e, n.length), s = r(s), s[6] = 15 & s[6] | t, s[8] = 63 & s[8] | 128, i) {
                            o = o || 0;
                            for (let e = 0; e < 16; ++e) i[o + e] = s[e];
                            return i
                        }
                        return h(s)
                    }
                    try {
                        n.name = e
                    } catch (e) {}
                    return n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", n
                }
                const w = y("v3", 48, (function (e) {
                        return Array.isArray(e) ? e = Buffer.from(e) : "string" == typeof e && (e = Buffer.from(e, "utf8")), i().createHash("md5").update(e).digest()
                    })),
                    b = function (e, t, r) {
                        const n = (e = e || {}).random || (e.rng || a)();
                        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
                            r = r || 0;
                            for (let e = 0; e < 16; ++e) t[r + e] = n[e];
                            return t
                        }
                        return h(n)
                    },
                    _ = y("v5", 80, (function (e) {
                        return Array.isArray(e) ? e = Buffer.from(e) : "string" == typeof e && (e = Buffer.from(e, "utf8")), i().createHash("sha1").update(e).digest()
                    })),
                    E = "00000000-0000-0000-0000-000000000000",
                    S = function (e) {
                        if (!u(e)) throw TypeError("Invalid UUID");
                        return parseInt(e.substr(14, 1), 16)
                    }
            },
            9734: (e, t, r) => {
                "use strict";
                const n = r(6928),
                    i = r(4157),
                    o = r(1125),
                    s = r(4672);
                e.exports = function (e) {
                    const t = i.app || i.remote.app,
                        r = i.screen || i.remote.screen;
                    let a, l, u;
                    const c = 100,
                        h = Object.assign({
                            file: "window-state.json",
                            path: t.getPath("userData"),
                            maximize: !0,
                            fullScreen: !0
                        }, e),
                        d = n.join(h.path, h.file);

                    function f() {
                        return a && Number.isInteger(a.x) && Number.isInteger(a.y) && Number.isInteger(a.width) && a.width > 0 && Number.isInteger(a.height) && a.height > 0
                    }

                    function p() {
                        const e = r.getPrimaryDisplay().bounds;
                        a = {
                            width: h.defaultWidth || 800,
                            height: h.defaultHeight || 600,
                            x: 0,
                            y: 0,
                            displayBounds: e
                        }
                    }

                    function g(e) {
                        if (e = e || l) try {
                            const t = e.getBounds();
                            (function (e) {
                                return !e.isMaximized() && !e.isMinimized() && !e.isFullScreen()
                            })(e) && (a.x = t.x, a.y = t.y, a.width = t.width, a.height = t.height), a.isMaximized = e.isMaximized(), a.isFullScreen = e.isFullScreen(), a.displayBounds = r.getDisplayMatching(t).bounds
                        } catch (e) {}
                    }

                    function m(e) {
                        e && g(e);
                        try {
                            s.sync(n.dirname(d)), o.writeFileSync(d, a)
                        } catch (e) {}
                    }

                    function v() {
                        clearTimeout(u), u = setTimeout(g, c)
                    }

                    function y() {
                        g()
                    }

                    function w() {
                        b(), m()
                    }

                    function b() {
                        l && (l.removeListener("resize", v), l.removeListener("move", v), clearTimeout(u), l.removeListener("close", y), l.removeListener("closed", w), l = null)
                    }
                    try {
                        a = o.readFileSync(d)
                    } catch (e) {}
                    return a && (f() || a.isMaximized || a.isFullScreen) ? f() && a.displayBounds && function () {
                        if (!r.getAllDisplays().some((e => {
                                return t = e.bounds, a.x >= t.x && a.y >= t.y && a.x + a.width <= t.x + t.width && a.y + a.height <= t.y + t.height;
                                var t
                            }))) p()
                    }() : a = null, a = Object.assign({
                        width: h.defaultWidth || 800,
                        height: h.defaultHeight || 600
                    }, a), {
                        get x() {
                            return a.x
                        },
                        get y() {
                            return a.y
                        },
                        get width() {
                            return a.width
                        },
                        get height() {
                            return a.height
                        },
                        get displayBounds() {
                            return a.displayBounds
                        },
                        get isMaximized() {
                            return a.isMaximized
                        },
                        get isFullScreen() {
                            return a.isFullScreen
                        },
                        saveState: m,
                        unmanage: b,
                        manage: function (e) {
                            h.maximize && a.isMaximized && e.maximize(), h.fullScreen && a.isFullScreen && e.setFullScreen(!0), e.on("resize", v), e.on("move", v), e.on("close", y), e.on("closed", w), l = e
                        },
                        resetStateToDefault: p
                    }
                }
            },
            4548: function (e, t, r) {
                (function () {
                    var t, n;
                    t = null, e.exports = function () {
                        function e() {
                            var e, t, r;
                            for (this.disposables = new Set, t = 0, r = arguments.length; t < r; t++) e = arguments[t], this.add(e)
                        }
                        return e.prototype.disposed = !1, e.prototype.dispose = function () {
                            this.disposed || (this.disposed = !0, this.disposables.forEach((function (e) {
                                return e.dispose()
                            })), this.disposables = null)
                        }, e.prototype.add = function () {
                            var e, t, r;
                            if (!this.disposed)
                                for (t = 0, r = arguments.length; t < r; t += 1) n(e = arguments[t]), this.disposables.add(e)
                        }, e.prototype.remove = function (e) {
                            this.disposed || this.disposables.delete(e)
                        }, e.prototype.delete = function (e) {
                            this.remove(e)
                        }, e.prototype.clear = function () {
                            this.disposed || this.disposables.clear()
                        }, e
                    }(), n = function (e) {
                        if (null == t && (t = r(8826)), !t.isDisposable(e)) throw new TypeError("Arguments to CompositeDisposable.add must have a .dispose() method")
                    }
                }).call(this)
            },
            8826: function (e) {
                (function () {
                    e.exports = function () {
                        function e(e) {
                            this.disposalAction = e
                        }
                        return e.prototype.disposed = !1, e.isDisposable = function (e) {
                            return "function" == typeof (null != e ? e.dispose : void 0)
                        }, e.prototype.dispose = function () {
                            this.disposed || (this.disposed = !0, "function" == typeof this.disposalAction && this.disposalAction(), this.disposalAction = null)
                        }, e
                    }()
                }).call(this)
            },
            5296: function (e, t, r) {
                (function () {
                    var t;
                    t = r(8826), e.exports = function () {
                        function e() {
                            this.clear()
                        }
                        return e.exceptionHandlers = [], e.onEventHandlerException = function (e) {
                            return 0 === this.exceptionHandlers.length && (this.dispatch = this.exceptionHandlingDispatch), this.exceptionHandlers.push(e), new t((r = this, function () {
                                if (r.exceptionHandlers.splice(r.exceptionHandlers.indexOf(e), 1), 0 === r.exceptionHandlers.length) return r.dispatch = r.simpleDispatch
                            }));
                            var r
                        }, e.simpleDispatch = function (e, t) {
                            return e(t)
                        }, e.exceptionHandlingDispatch = function (e, t) {
                            var r, n, i, o, s, a;
                            try {
                                return e(t)
                            } catch (e) {
                                for (r = e, a = [], i = 0, o = (s = this.exceptionHandlers).length; i < o; i++) n = s[i], a.push(n(r));
                                return a
                            }
                        }, e.dispatch = e.simpleDispatch, e.prototype.disposed = !1, e.prototype.clear = function () {
                            return this.handlersByEventName = {}
                        }, e.prototype.dispose = function () {
                            return this.handlersByEventName = null, this.disposed = !0
                        }, e.prototype.on = function (e, r, n) {
                            var i;
                            if (null == n && (n = !1), this.disposed) throw new Error("Emitter has been disposed");
                            if ("function" != typeof r) throw new Error("Handler must be a function");
                            return (i = this.handlersByEventName[e]) ? this.handlersByEventName[e] = n ? [r].concat(i) : i.concat(r) : this.handlersByEventName[e] = [r], new t(this.off.bind(this, e, r))
                        }, e.prototype.once = function (e, t, r) {
                            var n, i;
                            return null == r && (r = !1), i = function (e) {
                                return n.dispose(), t(e)
                            }, n = this.on(e, i, r)
                        }, e.prototype.preempt = function (e, t) {
                            return this.on(e, t, !0)
                        }, e.prototype.off = function (e, t) {
                            var r, n, i, o, s;
                            if (!this.disposed && (i = this.handlersByEventName[e])) {
                                for (n = [], o = 0, s = i.length; o < s; o++)(r = i[o]) !== t && n.push(r);
                                n.length > 0 ? this.handlersByEventName[e] = n : delete this.handlersByEventName[e]
                            }
                        }, e.prototype.emit = function (e, t) {
                            var r, n, i, o, s;
                            if (n = null != (s = this.handlersByEventName) ? s[e] : void 0)
                                for (i = 0, o = n.length; i < o; i++) r = n[i], this.constructor.dispatch(r, t)
                        }, e.prototype.emitAsync = function (e, t) {
                            var r, n, i, o;
                            return (n = null != (o = this.handlersByEventName) ? o[e] : void 0) ? (i = function () {
                                var e, i, o;
                                for (o = [], e = 0, i = n.length; e < i; e++) r = n[e], o.push(this.constructor.dispatch(r, t));
                                return o
                            }.call(this), Promise.all(i).then((function () {}))) : Promise.resolve()
                        }, e.prototype.getEventNames = function () {
                            return Object.keys(this.handlersByEventName)
                        }, e.prototype.listenerCountForEventName = function (e) {
                            var t, r;
                            return null != (t = null != (r = this.handlersByEventName[e]) ? r.length : void 0) ? t : 0
                        }, e.prototype.getTotalListenerCount = function () {
                            var e, t, r, n, i;
                            for (t = 0, r = 0, n = (i = Object.keys(this.handlersByEventName)).length; r < n; r++) e = i[r], t += this.handlersByEventName[e].length;
                            return t
                        }, e
                    }()
                }).call(this)
            },
            5327: function (e, t, r) {
                (function () {
                    t.Emitter = r(5296), t.Disposable = r(8826), t.CompositeDisposable = r(4548)
                }).call(this)
            },
            1003: (e, t, r) => {
                "use strict";
                r.r(t), r.d(t, {
                    assign: () => c,
                    default: () => k,
                    defaultI18n: () => p,
                    format: () => M,
                    parse: () => A,
                    setGlobalDateI18n: () => m,
                    setGlobalDateMasks: () => R
                });
                var n = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
                    i = "[1-9]\\d?",
                    o = "\\d\\d",
                    s = "[^\\s]+",
                    a = /\[([^]*?)\]/gm;

                function l(e, t) {
                    for (var r = [], n = 0, i = e.length; n < i; n++) r.push(e[n].substr(0, t));
                    return r
                }
                var u = function (e) {
                    return function (t, r) {
                        var n = r[e].map((function (e) {
                                return e.toLowerCase()
                            })),
                            i = n.indexOf(t.toLowerCase());
                        return i > -1 ? i : null
                    }
                };

                function c(e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    for (var n = 0, i = t; n < i.length; n++) {
                        var o = i[n];
                        for (var s in o) e[s] = o[s]
                    }
                    return e
                }
                var h = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    f = l(d, 3),
                    p = {
                        dayNamesShort: l(h, 3),
                        dayNames: h,
                        monthNamesShort: f,
                        monthNames: d,
                        amPm: ["am", "pm"],
                        DoFn: function (e) {
                            return e + ["th", "st", "nd", "rd"][e % 10 > 3 ? 0 : (e - e % 10 != 10 ? 1 : 0) * e % 10]
                        }
                    },
                    g = c({}, p),
                    m = function (e) {
                        return g = c(g, e)
                    },
                    v = function (e) {
                        return e.replace(/[|\\{()[^$+*?.-]/g, "\\$&")
                    },
                    y = function (e, t) {
                        for (void 0 === t && (t = 2), e = String(e); e.length < t;) e = "0" + e;
                        return e
                    },
                    w = {
                        D: function (e) {
                            return String(e.getDate())
                        },
                        DD: function (e) {
                            return y(e.getDate())
                        },
                        Do: function (e, t) {
                            return t.DoFn(e.getDate())
                        },
                        d: function (e) {
                            return String(e.getDay())
                        },
                        dd: function (e) {
                            return y(e.getDay())
                        },
                        ddd: function (e, t) {
                            return t.dayNamesShort[e.getDay()]
                        },
                        dddd: function (e, t) {
                            return t.dayNames[e.getDay()]
                        },
                        M: function (e) {
                            return String(e.getMonth() + 1)
                        },
                        MM: function (e) {
                            return y(e.getMonth() + 1)
                        },
                        MMM: function (e, t) {
                            return t.monthNamesShort[e.getMonth()]
                        },
                        MMMM: function (e, t) {
                            return t.monthNames[e.getMonth()]
                        },
                        YY: function (e) {
                            return y(String(e.getFullYear()), 4).substr(2)
                        },
                        YYYY: function (e) {
                            return y(e.getFullYear(), 4)
                        },
                        h: function (e) {
                            return String(e.getHours() % 12 || 12)
                        },
                        hh: function (e) {
                            return y(e.getHours() % 12 || 12)
                        },
                        H: function (e) {
                            return String(e.getHours())
                        },
                        HH: function (e) {
                            return y(e.getHours())
                        },
                        m: function (e) {
                            return String(e.getMinutes())
                        },
                        mm: function (e) {
                            return y(e.getMinutes())
                        },
                        s: function (e) {
                            return String(e.getSeconds())
                        },
                        ss: function (e) {
                            return y(e.getSeconds())
                        },
                        S: function (e) {
                            return String(Math.round(e.getMilliseconds() / 100))
                        },
                        SS: function (e) {
                            return y(Math.round(e.getMilliseconds() / 10), 2)
                        },
                        SSS: function (e) {
                            return y(e.getMilliseconds(), 3)
                        },
                        a: function (e, t) {
                            return e.getHours() < 12 ? t.amPm[0] : t.amPm[1]
                        },
                        A: function (e, t) {
                            return e.getHours() < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase()
                        },
                        ZZ: function (e) {
                            var t = e.getTimezoneOffset();
                            return (t > 0 ? "-" : "+") + y(100 * Math.floor(Math.abs(t) / 60) + Math.abs(t) % 60, 4)
                        },
                        Z: function (e) {
                            var t = e.getTimezoneOffset();
                            return (t > 0 ? "-" : "+") + y(Math.floor(Math.abs(t) / 60), 2) + ":" + y(Math.abs(t) % 60, 2)
                        }
                    },
                    b = function (e) {
                        return +e - 1
                    },
                    _ = [null, i],
                    E = [null, s],
                    S = ["isPm", s, function (e, t) {
                        var r = e.toLowerCase();
                        return r === t.amPm[0] ? 0 : r === t.amPm[1] ? 1 : null
                    }],
                    C = ["timezoneOffset", "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?", function (e) {
                        var t = (e + "").match(/([+-]|\d\d)/gi);
                        if (t) {
                            var r = 60 * +t[1] + parseInt(t[2], 10);
                            return "+" === t[0] ? r : -r
                        }
                        return 0
                    }],
                    x = {
                        D: ["day", i],
                        DD: ["day", o],
                        Do: ["day", i + s, function (e) {
                            return parseInt(e, 10)
                        }],
                        M: ["month", i, b],
                        MM: ["month", o, b],
                        YY: ["year", o, function (e) {
                            var t = +("" + (new Date).getFullYear()).substr(0, 2);
                            return +("" + (+e > 68 ? t - 1 : t) + e)
                        }],
                        h: ["hour", i, void 0, "isPm"],
                        hh: ["hour", o, void 0, "isPm"],
                        H: ["hour", i],
                        HH: ["hour", o],
                        m: ["minute", i],
                        mm: ["minute", o],
                        s: ["second", i],
                        ss: ["second", o],
                        YYYY: ["year", "\\d{4}"],
                        S: ["millisecond", "\\d", function (e) {
                            return 100 * +e
                        }],
                        SS: ["millisecond", o, function (e) {
                            return 10 * +e
                        }],
                        SSS: ["millisecond", "\\d{3}"],
                        d: _,
                        dd: _,
                        ddd: E,
                        dddd: E,
                        MMM: ["month", s, u("monthNamesShort")],
                        MMMM: ["month", s, u("monthNames")],
                        a: S,
                        A: S,
                        ZZ: C,
                        Z: C
                    },
                    O = {
                        default: "ddd MMM DD YYYY HH:mm:ss",
                        shortDate: "M/D/YY",
                        mediumDate: "MMM D, YYYY",
                        longDate: "MMMM D, YYYY",
                        fullDate: "dddd, MMMM D, YYYY",
                        isoDate: "YYYY-MM-DD",
                        isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
                        shortTime: "HH:mm",
                        mediumTime: "HH:mm:ss",
                        longTime: "HH:mm:ss.SSS"
                    },
                    R = function (e) {
                        return c(O, e)
                    },
                    M = function (e, t, r) {
                        if (void 0 === t && (t = O.default), void 0 === r && (r = {}), "number" == typeof e && (e = new Date(e)), "[object Date]" !== Object.prototype.toString.call(e) || isNaN(e.getTime())) throw new Error("Invalid Date pass to format");
                        t = O[t] || t;
                        var i = [];
                        t = t.replace(a, (function (e, t) {
                            return i.push(t), "@@@"
                        }));
                        var o = c(c({}, g), r);
                        return (t = t.replace(n, (function (t) {
                            return w[t](e, o)
                        }))).replace(/@@@/g, (function () {
                            return i.shift()
                        }))
                    };

                function A(e, t, r) {
                    if (void 0 === r && (r = {}), "string" != typeof t) throw new Error("Invalid format in fecha parse");
                    if (t = O[t] || t, e.length > 1e3) return null;
                    var i = {
                            year: (new Date).getFullYear(),
                            month: 0,
                            day: 1,
                            hour: 0,
                            minute: 0,
                            second: 0,
                            millisecond: 0,
                            isPm: null,
                            timezoneOffset: null
                        },
                        o = [],
                        s = [],
                        l = t.replace(a, (function (e, t) {
                            return s.push(v(t)), "@@@"
                        })),
                        u = {},
                        h = {};
                    l = v(l).replace(n, (function (e) {
                        var t = x[e],
                            r = t[0],
                            n = t[1],
                            i = t[3];
                        if (u[r]) throw new Error("Invalid format. " + r + " specified twice in format");
                        return u[r] = !0, i && (h[i] = !0), o.push(t), "(" + n + ")"
                    })), Object.keys(h).forEach((function (e) {
                        if (!u[e]) throw new Error("Invalid format. " + e + " is required in specified format")
                    })), l = l.replace(/@@@/g, (function () {
                        return s.shift()
                    }));
                    var d = e.match(new RegExp(l, "i"));
                    if (!d) return null;
                    for (var f = c(c({}, g), r), p = 1; p < d.length; p++) {
                        var m = o[p - 1],
                            y = m[0],
                            w = m[2],
                            b = w ? w(d[p], f) : +d[p];
                        if (null == b) return null;
                        i[y] = b
                    }
                    1 === i.isPm && null != i.hour && 12 != +i.hour ? i.hour = +i.hour + 12 : 0 === i.isPm && 12 == +i.hour && (i.hour = 0);
                    for (var _ = new Date(i.year, i.month, i.day, i.hour, i.minute, i.second, i.millisecond), E = [
                            ["month", "getMonth"],
                            ["day", "getDate"],
                            ["hour", "getHours"],
                            ["minute", "getMinutes"],
                            ["second", "getSeconds"]
                        ], S = (p = 0, E.length); p < S; p++)
                        if (u[E[p][0]] && i[E[p][0]] !== _[E[p][1]]()) return null;
                    return null == i.timezoneOffset ? _ : new Date(Date.UTC(i.year, i.month, i.day, i.hour, i.minute - i.timezoneOffset, i.second, i.millisecond))
                }
                const k = {
                    format: M,
                    parse: A,
                    defaultI18n: p,
                    setGlobalDateI18n: m,
                    setGlobalDateMasks: R
                }
            },
            5598: e => {
                "use strict";
                var t = Object.prototype.toString;
                e.exports = function (e) {
                    if ("string" == typeof e.displayName && e.constructor.name) return e.displayName;
                    if ("string" == typeof e.name && e.name) return e.name;
                    if ("object" == typeof e && e.constructor && "string" == typeof e.constructor.name) return e.constructor.name;
                    var r = e.toString(),
                        n = t.call(e).slice(8, -1);
                    return (r = "Function" === n ? r.substring(r.indexOf("(") + 1, r.indexOf(")")) : n) || "anonymous"
                }
            },
            4943: (e, t, r) => {
                "use strict";
                var n = r(9896);
                e.exports = function (e) {
                    if (null === e || "object" != typeof e) return e;
                    if (e instanceof Object) var t = {
                        __proto__: e.__proto__
                    };
                    else t = Object.create(null);
                    return Object.getOwnPropertyNames(e).forEach((function (r) {
                        Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                    })), t
                }(n)
            },
            8111: (e, t, r) => {
                var n, i, o = r(9896),
                    s = r(2714),
                    a = r(9539),
                    l = [],
                    u = r(9023),
                    c = function () {};

                function h(e) {
                    s(e), e.gracefulify = h, e.FileReadStream = p, e.FileWriteStream = g, e.createReadStream = function (e, t) {
                        return new p(e, t)
                    }, e.createWriteStream = function (e, t) {
                        return new g(e, t)
                    };
                    var t = e.readFile;
                    e.readFile = function (e, r, n) {
                        return "function" == typeof r && (n = r, r = null),
                            function e(r, n, i) {
                                return t(r, n, (function (t) {
                                    !t || "EMFILE" !== t.code && "ENFILE" !== t.code ? ("function" == typeof i && i.apply(this, arguments), f()) : d([e, [r, n, i]])
                                }))
                            }(e, r, n)
                    };
                    var r = e.writeFile;
                    e.writeFile = function (e, t, n, i) {
                        return "function" == typeof n && (i = n, n = null),
                            function e(t, n, i, o) {
                                return r(t, n, i, (function (r) {
                                    !r || "EMFILE" !== r.code && "ENFILE" !== r.code ? ("function" == typeof o && o.apply(this, arguments), f()) : d([e, [t, n, i, o]])
                                }))
                            }(e, t, n, i)
                    };
                    var n = e.appendFile;
                    n && (e.appendFile = function (e, t, r, i) {
                        return "function" == typeof r && (i = r, r = null),
                            function e(t, r, i, o) {
                                return n(t, r, i, (function (n) {
                                    !n || "EMFILE" !== n.code && "ENFILE" !== n.code ? ("function" == typeof o && o.apply(this, arguments), f()) : d([e, [t, r, i, o]])
                                }))
                            }(e, t, r, i)
                    });
                    var i = e.readdir;

                    function o(t) {
                        return i.apply(e, t)
                    }
                    if (e.readdir = function (e, t, r) {
                            var n = [e];
                            return "function" != typeof t ? n.push(t) : r = t, n.push((function (e, t) {
                                t && t.sort && t.sort(), !e || "EMFILE" !== e.code && "ENFILE" !== e.code ? ("function" == typeof r && r.apply(this, arguments), f()) : d([o, [n]])
                            })), o(n)
                        }, "v0.8" === process.version.substr(0, 4)) {
                        var l = a(e);
                        p = l.ReadStream, g = l.WriteStream
                    }
                    var u = e.ReadStream;
                    p.prototype = Object.create(u.prototype), p.prototype.open = function () {
                        var e = this;
                        v(e.path, e.flags, e.mode, (function (t, r) {
                            t ? (e.autoClose && e.destroy(), e.emit("error", t)) : (e.fd = r, e.emit("open", r), e.read())
                        }))
                    };
                    var c = e.WriteStream;

                    function p(e, t) {
                        return this instanceof p ? (u.apply(this, arguments), this) : p.apply(Object.create(p.prototype), arguments)
                    }

                    function g(e, t) {
                        return this instanceof g ? (c.apply(this, arguments), this) : g.apply(Object.create(g.prototype), arguments)
                    }
                    g.prototype = Object.create(c.prototype), g.prototype.open = function () {
                        var e = this;
                        v(e.path, e.flags, e.mode, (function (t, r) {
                            t ? (e.destroy(), e.emit("error", t)) : (e.fd = r, e.emit("open", r))
                        }))
                    }, e.ReadStream = p, e.WriteStream = g;
                    var m = e.open;

                    function v(e, t, r, n) {
                        return "function" == typeof r && (n = r, r = null),
                            function e(t, r, n, i) {
                                return m(t, r, n, (function (o, s) {
                                    !o || "EMFILE" !== o.code && "ENFILE" !== o.code ? ("function" == typeof i && i.apply(this, arguments), f()) : d([e, [t, r, n, i]])
                                }))
                            }(e, t, r, n)
                    }
                    return e.open = v, e
                }

                function d(e) {
                    c("ENQUEUE", e[0].name, e[1]), l.push(e)
                }

                function f() {
                    var e = l.shift();
                    e && (c("RETRY", e[0].name, e[1]), e[0].apply(null, e[1]))
                }
                u.debuglog ? c = u.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (c = function () {
                    var e = u.format.apply(u, arguments);
                    e = "GFS4: " + e.split(/\n/).join("\nGFS4: "), console.error(e)
                }), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", (function () {
                    c(l), r(2613).equal(l.length, 0)
                })), e.exports = h(r(4943)), process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && (e.exports = h(o)), e.exports.close = o.close = (n = o.close, function (e, t) {
                    return n.call(o, e, (function (e) {
                        e || f(), "function" == typeof t && t.apply(this, arguments)
                    }))
                }), e.exports.closeSync = o.closeSync = (i = o.closeSync, function (e) {
                    var t = i.apply(o, arguments);
                    return f(), t
                })
            },
            9539: (e, t, r) => {
                var n = r(2203).Stream;
                e.exports = function (e) {
                    return {
                        ReadStream: function t(r, i) {
                            if (!(this instanceof t)) return new t(r, i);
                            n.call(this);
                            var o = this;
                            this.path = r, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, i = i || {};
                            for (var s = Object.keys(i), a = 0, l = s.length; a < l; a++) {
                                var u = s[a];
                                this[u] = i[u]
                            }
                            if (this.encoding && this.setEncoding(this.encoding), void 0 !== this.start) {
                                if ("number" != typeof this.start) throw TypeError("start must be a Number");
                                if (void 0 === this.end) this.end = 1 / 0;
                                else if ("number" != typeof this.end) throw TypeError("end must be a Number");
                                if (this.start > this.end) throw new Error("start must be <= end");
                                this.pos = this.start
                            }
                            null === this.fd ? e.open(this.path, this.flags, this.mode, (function (e, t) {
                                if (e) return o.emit("error", e), void(o.readable = !1);
                                o.fd = t, o.emit("open", t), o._read()
                            })) : process.nextTick((function () {
                                o._read()
                            }))
                        },
                        WriteStream: function t(r, i) {
                            if (!(this instanceof t)) return new t(r, i);
                            n.call(this), this.path = r, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, i = i || {};
                            for (var o = Object.keys(i), s = 0, a = o.length; s < a; s++) {
                                var l = o[s];
                                this[l] = i[l]
                            }
                            if (void 0 !== this.start) {
                                if ("number" != typeof this.start) throw TypeError("start must be a Number");
                                if (this.start < 0) throw new Error("start must be >= zero");
                                this.pos = this.start
                            }
                            this.busy = !1, this._queue = [], null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
                        }
                    }
                }
            },
            2714: (e, t, r) => {
                var n = r(4943),
                    i = r(9140),
                    o = process.cwd,
                    s = null,
                    a = process.env.GRACEFUL_FS_PLATFORM || "win32";
                process.cwd = function () {
                    return s || (s = o.call(process)), s
                };
                try {
                    process.cwd()
                } catch (e) {}
                var l = process.chdir;

                function u(e) {
                    return e ? function (t, r, i) {
                        return e.call(n, t, r, (function (e) {
                            g(e) && (e = null), i && i.apply(this, arguments)
                        }))
                    } : e
                }

                function c(e) {
                    return e ? function (t, r) {
                        try {
                            return e.call(n, t, r)
                        } catch (e) {
                            if (!g(e)) throw e
                        }
                    } : e
                }

                function h(e) {
                    return e ? function (t, r, i, o) {
                        return e.call(n, t, r, i, (function (e) {
                            g(e) && (e = null), o && o.apply(this, arguments)
                        }))
                    } : e
                }

                function d(e) {
                    return e ? function (t, r, i) {
                        try {
                            return e.call(n, t, r, i)
                        } catch (e) {
                            if (!g(e)) throw e
                        }
                    } : e
                }

                function f(e) {
                    return e ? function (t, r) {
                        return e.call(n, t, (function (e, t) {
                            if (!t) return r.apply(this, arguments);
                            t.uid < 0 && (t.uid += 4294967296), t.gid < 0 && (t.gid += 4294967296), r && r.apply(this, arguments)
                        }))
                    } : e
                }

                function p(e) {
                    return e ? function (t) {
                        var r = e.call(n, t);
                        return r.uid < 0 && (r.uid += 4294967296), r.gid < 0 && (r.gid += 4294967296), r
                    } : e
                }

                function g(e) {
                    return !e || "ENOSYS" === e.code || !(process.getuid && 0 === process.getuid() || "EINVAL" !== e.code && "EPERM" !== e.code)
                }
                process.chdir = function (e) {
                    s = null, l.call(process, e)
                }, e.exports = function (e) {
                    var t, r, n;
                    i.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function (e) {
                        e.lchmod = function (t, r, n) {
                            e.open(t, i.O_WRONLY | i.O_SYMLINK, r, (function (t, i) {
                                t ? n && n(t) : e.fchmod(i, r, (function (t) {
                                    e.close(i, (function (e) {
                                        n && n(t || e)
                                    }))
                                }))
                            }))
                        }, e.lchmodSync = function (t, r) {
                            var n, o = e.openSync(t, i.O_WRONLY | i.O_SYMLINK, r),
                                s = !0;
                            try {
                                n = e.fchmodSync(o, r), s = !1
                            } finally {
                                if (s) try {
                                    e.closeSync(o)
                                } catch (e) {} else e.closeSync(o)
                            }
                            return n
                        }
                    }(e), e.lutimes || function (e) {
                        i.hasOwnProperty("O_SYMLINK") ? (e.lutimes = function (t, r, n, o) {
                            e.open(t, i.O_SYMLINK, (function (t, i) {
                                t ? o && o(t) : e.futimes(i, r, n, (function (t) {
                                    e.close(i, (function (e) {
                                        o && o(t || e)
                                    }))
                                }))
                            }))
                        }, e.lutimesSync = function (t, r, n) {
                            var o, s = e.openSync(t, i.O_SYMLINK),
                                a = !0;
                            try {
                                o = e.futimesSync(s, r, n), a = !1
                            } finally {
                                if (a) try {
                                    e.closeSync(s)
                                } catch (e) {} else e.closeSync(s)
                            }
                            return o
                        }) : (e.lutimes = function (e, t, r, n) {
                            n && process.nextTick(n)
                        }, e.lutimesSync = function () {})
                    }(e), e.chown = h(e.chown), e.fchown = h(e.fchown), e.lchown = h(e.lchown), e.chmod = u(e.chmod), e.fchmod = u(e.fchmod), e.lchmod = u(e.lchmod), e.chownSync = d(e.chownSync), e.fchownSync = d(e.fchownSync), e.lchownSync = d(e.lchownSync), e.chmodSync = c(e.chmodSync), e.fchmodSync = c(e.fchmodSync), e.lchmodSync = c(e.lchmodSync), e.stat = f(e.stat), e.fstat = f(e.fstat), e.lstat = f(e.lstat), e.statSync = p(e.statSync), e.fstatSync = p(e.fstatSync), e.lstatSync = p(e.lstatSync), e.lchmod || (e.lchmod = function (e, t, r) {
                        r && process.nextTick(r)
                    }, e.lchmodSync = function () {}), e.lchown || (e.lchown = function (e, t, r, n) {
                        n && process.nextTick(n)
                    }, e.lchownSync = function () {}), "win32" === a && (e.rename = (t = e.rename, function (r, n, i) {
                        var o = Date.now(),
                            s = 0;
                        t(r, n, (function a(l) {
                            if (l && ("EACCES" === l.code || "EPERM" === l.code) && Date.now() - o < 6e4) return setTimeout((function () {
                                e.stat(n, (function (e, o) {
                                    e && "ENOENT" === e.code ? t(r, n, a) : i(l)
                                }))
                            }), s), void(s < 100 && (s += 10));
                            i && i(l)
                        }))
                    })), e.read = (n = e.read, function (t, r, i, o, s, a) {
                        var l;
                        if (a && "function" == typeof a) {
                            var u = 0;
                            l = function (c, h, d) {
                                if (c && "EAGAIN" === c.code && u < 10) return u++, n.call(e, t, r, i, o, s, l);
                                a.apply(this, arguments)
                            }
                        }
                        return n.call(e, t, r, i, o, s, l)
                    }), e.readSync = (r = e.readSync, function (t, n, i, o, s) {
                        for (var a = 0;;) try {
                            return r.call(e, t, n, i, o, s)
                        } catch (e) {
                            if ("EAGAIN" === e.code && a < 10) {
                                a++;
                                continue
                            }
                            throw e
                        }
                    })
                }
            },
            8361: (e, t, r) => {
                try {
                    var n = r(9023);
                    if ("function" != typeof n.inherits) throw "";
                    e.exports = n.inherits
                } catch (t) {
                    e.exports = r(4562)
                }
            },
            4562: e => {
                "function" == typeof Object.create ? e.exports = function (e, t) {
                    t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }))
                } : e.exports = function (e, t) {
                    if (t) {
                        e.super_ = t;
                        var r = function () {};
                        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                    }
                }
            },
            7752: e => {
                "use strict";
                const t = e => null !== e && "object" == typeof e && "function" == typeof e.pipe;
                t.writable = e => t(e) && !1 !== e.writable && "function" == typeof e._write && "object" == typeof e._writableState, t.readable = e => t(e) && !1 !== e.readable && "function" == typeof e._read && "object" == typeof e._readableState, t.duplex = e => t.writable(e) && t.readable(e), t.transform = e => t.duplex(e) && "function" == typeof e._transform, e.exports = t
            },
            1125: (e, t, r) => {
                var n;
                try {
                    n = r(8111)
                } catch (e) {
                    n = r(9896)
                }

                function i(e, t) {
                    var r, n = "\n";
                    return "object" == typeof t && null !== t && (t.spaces && (r = t.spaces), t.EOL && (n = t.EOL)), JSON.stringify(e, t ? t.replacer : null, r).replace(/\n/g, n) + n
                }

                function o(e) {
                    return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "")
                }
                var s = {
                    readFile: function (e, t, r) {
                        null == r && (r = t, t = {}), "string" == typeof t && (t = {
                            encoding: t
                        });
                        var i = (t = t || {}).fs || n,
                            s = !0;
                        "throws" in t && (s = t.throws), i.readFile(e, t, (function (n, i) {
                            if (n) return r(n);
                            var a;
                            i = o(i);
                            try {
                                a = JSON.parse(i, t ? t.reviver : null)
                            } catch (t) {
                                return s ? (t.message = e + ": " + t.message, r(t)) : r(null, null)
                            }
                            r(null, a)
                        }))
                    },
                    readFileSync: function (e, t) {
                        "string" == typeof (t = t || {}) && (t = {
                            encoding: t
                        });
                        var r = t.fs || n,
                            i = !0;
                        "throws" in t && (i = t.throws);
                        try {
                            var s = r.readFileSync(e, t);
                            return s = o(s), JSON.parse(s, t.reviver)
                        } catch (t) {
                            if (i) throw t.message = e + ": " + t.message, t;
                            return null
                        }
                    },
                    writeFile: function (e, t, r, o) {
                        null == o && (o = r, r = {});
                        var s = (r = r || {}).fs || n,
                            a = "";
                        try {
                            a = i(t, r)
                        } catch (e) {
                            return void(o && o(e, null))
                        }
                        s.writeFile(e, a, r, o)
                    },
                    writeFileSync: function (e, t, r) {
                        var o = (r = r || {}).fs || n,
                            s = i(t, r);
                        return o.writeFileSync(e, s, r)
                    }
                };
                e.exports = s
            },
            6185: (e, t, r) => {
                var n = r(5957).Symbol;
                e.exports = n
            },
            6188: e => {
                e.exports = function (e, t) {
                    for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
                    return i
                }
            },
            3296: (e, t, r) => {
                var n = r(6185),
                    i = r(491),
                    o = r(7422),
                    s = n ? n.toStringTag : void 0;
                e.exports = function (e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? i(e) : o(e)
                }
            },
            2479: (e, t, r) => {
                var n = r(6185),
                    i = r(6188),
                    o = r(1113),
                    s = r(2162),
                    a = n ? n.prototype : void 0,
                    l = a ? a.toString : void 0;
                e.exports = function e(t) {
                    if ("string" == typeof t) return t;
                    if (o(t)) return i(t, e) + "";
                    if (s(t)) return l ? l.call(t) : "";
                    var r = t + "";
                    return "0" == r && 1 / t == -1 / 0 ? "-0" : r
                }
            },
            5760: e => {
                var t = "object" == typeof global && global && global.Object === Object && global;
                e.exports = t
            },
            491: (e, t, r) => {
                var n = r(6185),
                    i = Object.prototype,
                    o = i.hasOwnProperty,
                    s = i.toString,
                    a = n ? n.toStringTag : void 0;
                e.exports = function (e) {
                    var t = o.call(e, a),
                        r = e[a];
                    try {
                        e[a] = void 0;
                        var n = !0
                    } catch (e) {}
                    var i = s.call(e);
                    return n && (t ? e[a] = r : delete e[a]), i
                }
            },
            7422: e => {
                var t = Object.prototype.toString;
                e.exports = function (e) {
                    return t.call(e)
                }
            },
            5957: (e, t, r) => {
                var n = r(5760),
                    i = "object" == typeof self && self && self.Object === Object && self,
                    o = n || i || Function("return this")();
                e.exports = o
            },
            1630: e => {
                e.exports = function (e) {
                    return function () {
                        return e
                    }
                }
            },
            5248: (e, t, r) => {
                var n = r(2350),
                    i = /[\\^$.*+?()[\]{}|]/g,
                    o = RegExp(i.source);
                e.exports = function (e) {
                    return (e = n(e)) && o.test(e) ? e.replace(i, "\\$&") : e
                }
            },
            1113: e => {
                var t = Array.isArray;
                e.exports = t
            },
            658: e => {
                e.exports = function (e) {
                    return null != e && "object" == typeof e
                }
            },
            2162: (e, t, r) => {
                var n = r(3296),
                    i = r(658);
                e.exports = function (e) {
                    return "symbol" == typeof e || i(e) && "[object Symbol]" == n(e)
                }
            },
            294: e => {
                e.exports = function () {}
            },
            2350: (e, t, r) => {
                var n = r(2479);
                e.exports = function (e) {
                    return null == e ? "" : n(e)
                }
            },
            9162: (e, t, r) => {
                "use strict";
                const n = r(7604);
                e.exports = n((e => (e.message = `\t${e.message}`, e)))
            },
            2945: (e, t, r) => {
                "use strict";
                const {
                    Colorizer: n
                } = r(1624), {
                    Padder: i
                } = r(768), {
                    configs: o,
                    MESSAGE: s
                } = r(835);
                class a {
                    constructor(e = {}) {
                        e.levels || (e.levels = o.cli.levels), this.colorizer = new n(e), this.padder = new i(e), this.options = e
                    }
                    transform(e, t) {
                        return this.colorizer.transform(this.padder.transform(e, t), t), e[s] = `${e.level}:${e.message}`, e
                    }
                }
                e.exports = e => new a(e), e.exports.Format = a
            },
            1624: (e, t, r) => {
                "use strict";
                const n = r(1555),
                    {
                        LEVEL: i,
                        MESSAGE: o
                    } = r(835);
                n.enabled = !0;
                const s = /\s+/;
                class a {
                    constructor(e = {}) {
                        e.colors && this.addColors(e.colors), this.options = e
                    }
                    static addColors(e) {
                        const t = Object.keys(e).reduce(((t, r) => (t[r] = s.test(e[r]) ? e[r].split(s) : e[r], t)), {});
                        return a.allColors = Object.assign({}, a.allColors || {}, t), a.allColors
                    }
                    addColors(e) {
                        return a.addColors(e)
                    }
                    colorize(e, t, r) {
                        if (void 0 === r && (r = t), !Array.isArray(a.allColors[e])) return n[a.allColors[e]](r);
                        for (let t = 0, i = a.allColors[e].length; t < i; t++) r = n[a.allColors[e][t]](r);
                        return r
                    }
                    transform(e, t) {
                        return t.all && "string" == typeof e[o] && (e[o] = this.colorize(e[i], e.level, e[o])), (t.level || t.all || !t.message) && (e.level = this.colorize(e[i], e.level)), (t.all || t.message) && (e.message = this.colorize(e[i], e.level, e.message)), e
                    }
                }
                e.exports = e => new a(e), e.exports.Colorizer = e.exports.Format = a
            },
            2526: (e, t, r) => {
                "use strict";
                const n = r(7604);

                function i(e) {
                    if (e.every(o)) return t => {
                        let r = t;
                        for (let t = 0; t < e.length; t++)
                            if (r = e[t].transform(r, e[t].options), !r) return !1;
                        return r
                    }
                }

                function o(e) {
                    if ("function" != typeof e.transform) throw new Error(["No transform function found on format. Did you create a format instance?", "const myFormat = format(formatFn);", "const instance = myFormat();"].join("\n"));
                    return !0
                }
                e.exports = (...e) => {
                    const t = n(i(e)),
                        r = t();
                    return r.Format = t.Format, r
                }, e.exports.cascade = i
            },
            1752: (e, t, r) => {
                "use strict";
                const n = r(7604),
                    {
                        LEVEL: i,
                        MESSAGE: o
                    } = r(835);
                e.exports = n(((e, {
                    stack: t
                }) => {
                    if (e instanceof Error) {
                        const r = Object.assign({}, e, {
                            level: e.level,
                            [i]: e[i] || e.level,
                            message: e.message,
                            [o]: e[o] || e.message
                        });
                        return t && (r.stack = e.stack), r
                    }
                    if (!(e.message instanceof Error)) return e;
                    const r = e.message;
                    return Object.assign(e, r), e.message = r.message, e[o] = r.message, t && (e.stack = r.stack), e
                }))
            },
            7604: e => {
                "use strict";
                class t extends Error {
                    constructor(e) {
                        super(`Format functions must be synchronous taking a two arguments: (info, opts)\nFound: ${e.toString().split("\n")[0]}\n`), Error.captureStackTrace(this, t)
                    }
                }
                e.exports = e => {
                    if (e.length > 2) throw new t(e);

                    function r(e = {}) {
                        this.options = e
                    }

                    function n(e) {
                        return new r(e)
                    }
                    return r.prototype.transform = e, n.Format = r, n
                }
            },
            2671: (e, t, r) => {
                "use strict";
                const n = t.format = r(7604);

                function i(e, t) {
                    Object.defineProperty(n, e, {
                        get: () => t(),
                        configurable: !0
                    })
                }
                t.levels = r(5400), i("align", (function () {
                    return r(9162)
                })), i("errors", (function () {
                    return r(1752)
                })), i("cli", (function () {
                    return r(2945)
                })), i("combine", (function () {
                    return r(2526)
                })), i("colorize", (function () {
                    return r(1624)
                })), i("json", (function () {
                    return r(1345)
                })), i("label", (function () {
                    return r(1797)
                })), i("logstash", (function () {
                    return r(648)
                })), i("metadata", (function () {
                    return r(3874)
                })), i("ms", (function () {
                    return r(8223)
                })), i("padLevels", (function () {
                    return r(768)
                })), i("prettyPrint", (function () {
                    return r(4293)
                })), i("printf", (function () {
                    return r(9572)
                })), i("simple", (function () {
                    return r(9577)
                })), i("splat", (function () {
                    return r(6115)
                })), i("timestamp", (function () {
                    return r(459)
                })), i("uncolorize", (function () {
                    return r(927)
                }))
            },
            1345: (e, t, r) => {
                "use strict";
                const n = r(7604),
                    {
                        MESSAGE: i
                    } = r(835),
                    o = r(8588);

                function s(e, t) {
                    return "bigint" == typeof t ? t.toString() : t
                }
                e.exports = n(((e, t) => {
                    const r = o.configure(t);
                    return e[i] = r(e, t.replacer || s, t.space), e
                }))
            },
            1797: (e, t, r) => {
                "use strict";
                const n = r(7604);
                e.exports = n(((e, t) => t.message ? (e.message = `[${t.label}] ${e.message}`, e) : (e.label = t.label, e)))
            },
            5400: (e, t, r) => {
                "use strict";
                const {
                    Colorizer: n
                } = r(1624);
                e.exports = e => (n.addColors(e.colors || e), e)
            },
            648: (e, t, r) => {
                "use strict";
                const n = r(7604),
                    {
                        MESSAGE: i
                    } = r(835),
                    o = r(8588);
                e.exports = n((e => {
                    const t = {};
                    return e.message && (t["@message"] = e.message, delete e.message), e.timestamp && (t["@timestamp"] = e.timestamp, delete e.timestamp), t["@fields"] = e, e[i] = o(t), e
                }))
            },
            3874: (e, t, r) => {
                "use strict";
                const n = r(7604);
                e.exports = n(((e, t = {}) => {
                    let r = "metadata";
                    t.key && (r = t.key);
                    let n = [];
                    return t.fillExcept || t.fillWith || (n.push("level"), n.push("message")), t.fillExcept && (n = t.fillExcept), n.length > 0 ? function (e, t, r) {
                        const n = t.reduce(((t, r) => (t[r] = e[r], delete e[r], t)), {}),
                            i = Object.keys(e).reduce(((t, r) => (t[r] = e[r], delete e[r], t)), {});
                        return Object.assign(e, n, {
                            [r]: i
                        }), e
                    }(e, n, r) : t.fillWith ? function (e, t, r) {
                        return e[r] = t.reduce(((t, r) => (t[r] = e[r], delete e[r], t)), {}), e
                    }(e, t.fillWith, r) : e
                }))
            },
            8223: function (e, t, r) {
                "use strict";
                const n = r(7604),
                    i = r(273);
                e.exports = n((e => {
                    const t = +new Date;
                    return this.diff = t - (this.prevTime || t), this.prevTime = t, e.ms = `+${i(this.diff)}`, e
                }))
            },
            768: (e, t, r) => {
                "use strict";
                const {
                    configs: n,
                    LEVEL: i,
                    MESSAGE: o
                } = r(835);
                class s {
                    constructor(e = {
                        levels: n.npm.levels
                    }) {
                        this.paddings = s.paddingForLevels(e.levels, e.filler), this.options = e
                    }
                    static getLongestLevel(e) {
                        const t = Object.keys(e).map((e => e.length));
                        return Math.max(...t)
                    }
                    static paddingForLevel(e, t, r) {
                        const n = r + 1 - e.length,
                            i = Math.floor(n / t.length);
                        return `${t}${t.repeat(i)}`.slice(0, n)
                    }
                    static paddingForLevels(e, t = " ") {
                        const r = s.getLongestLevel(e);
                        return Object.keys(e).reduce(((e, n) => (e[n] = s.paddingForLevel(n, t, r), e)), {})
                    }
                    transform(e, t) {
                        return e.message = `${this.paddings[e[i]]}${e.message}`, e[o] && (e[o] = `${this.paddings[e[i]]}${e[o]}`), e
                    }
                }
                e.exports = e => new s(e), e.exports.Padder = e.exports.Format = s
            },
            4293: (e, t, r) => {
                "use strict";
                const n = r(9023).inspect,
                    i = r(7604),
                    {
                        LEVEL: o,
                        MESSAGE: s,
                        SPLAT: a
                    } = r(835);
                e.exports = i(((e, t = {}) => {
                    const r = Object.assign({}, e);
                    return delete r[o], delete r[s], delete r[a], e[s] = n(r, !1, t.depth || null, t.colorize), e
                }))
            },
            9572: (e, t, r) => {
                "use strict";
                const {
                    MESSAGE: n
                } = r(835);
                class i {
                    constructor(e) {
                        this.template = e
                    }
                    transform(e) {
                        return e[n] = this.template(e), e
                    }
                }
                e.exports = e => new i(e), e.exports.Printf = e.exports.Format = i
            },
            9577: (e, t, r) => {
                "use strict";
                const n = r(7604),
                    {
                        MESSAGE: i
                    } = r(835),
                    o = r(8588);
                e.exports = n((e => {
                    const t = o(Object.assign({}, e, {
                            level: void 0,
                            message: void 0,
                            splat: void 0
                        })),
                        r = e.padding && e.padding[e.level] || "";
                    return e[i] = "{}" !== t ? `${e.level}:${r} ${e.message} ${t}` : `${e.level}:${r} ${e.message}`, e
                }))
            },
            6115: (e, t, r) => {
                "use strict";
                const n = r(9023),
                    {
                        SPLAT: i
                    } = r(835),
                    o = /%[scdjifoO%]/g,
                    s = /%%/g;
                class a {
                    constructor(e) {
                        this.options = e
                    }
                    _splat(e, t) {
                        const r = e.message,
                            o = e[i] || e.splat || [],
                            a = r.match(s),
                            l = a && a.length || 0,
                            u = t.length - l - o.length,
                            c = u < 0 ? o.splice(u, -1 * u) : [],
                            h = c.length;
                        if (h)
                            for (let t = 0; t < h; t++) Object.assign(e, c[t]);
                        return e.message = n.format(r, ...o), e
                    }
                    transform(e) {
                        const t = e.message,
                            r = e[i] || e.splat;
                        if (!r || !r.length) return e;
                        const n = t && t.match && t.match(o);
                        if (!n && (r || r.length)) {
                            const t = r.length > 1 ? r.splice(0) : r,
                                n = t.length;
                            if (n)
                                for (let r = 0; r < n; r++) Object.assign(e, t[r]);
                            return e
                        }
                        return n ? this._splat(e, n) : e
                    }
                }
                e.exports = e => new a(e)
            },
            459: (e, t, r) => {
                "use strict";
                const n = r(1003),
                    i = r(7604);
                e.exports = i(((e, t = {}) => (t.format && (e.timestamp = "function" == typeof t.format ? t.format() : n.format(new Date, t.format)), e.timestamp || (e.timestamp = (new Date).toISOString()), t.alias && (e[t.alias] = e.timestamp), e)))
            },
            927: (e, t, r) => {
                "use strict";
                const n = r(1555),
                    i = r(7604),
                    {
                        MESSAGE: o
                    } = r(835);
                e.exports = i(((e, t) => (!1 !== t.level && (e.level = n.strip(e.level)), !1 !== t.message && (e.message = n.strip(e.message)), !1 !== t.raw && e[o] && (e[o] = n.strip(e[o])), e)))
            },
            4672: (e, t, r) => {
                var n = r(6928),
                    i = r(9896),
                    o = parseInt("0777", 8);

                function s(e, t, r, a) {
                    "function" == typeof t ? (r = t, t = {}) : t && "object" == typeof t || (t = {
                        mode: t
                    });
                    var l = t.mode,
                        u = t.fs || i;
                    void 0 === l && (l = o), a || (a = null);
                    var c = r || function () {};
                    e = n.resolve(e), u.mkdir(e, l, (function (r) {
                        if (!r) return c(null, a = a || e);
                        if ("ENOENT" === r.code) {
                            if (n.dirname(e) === e) return c(r);
                            s(n.dirname(e), t, (function (r, n) {
                                r ? c(r, n) : s(e, t, c, n)
                            }))
                        } else u.stat(e, (function (e, t) {
                            e || !t.isDirectory() ? c(r, a) : c(null, a)
                        }))
                    }))
                }
                e.exports = s.mkdirp = s.mkdirP = s, s.sync = function e(t, r, s) {
                    r && "object" == typeof r || (r = {
                        mode: r
                    });
                    var a = r.mode,
                        l = r.fs || i;
                    void 0 === a && (a = o), s || (s = null), t = n.resolve(t);
                    try {
                        l.mkdirSync(t, a), s = s || t
                    } catch (i) {
                        if ("ENOENT" === i.code) s = e(n.dirname(t), r, s), e(t, r, s);
                        else {
                            var u;
                            try {
                                u = l.statSync(t)
                            } catch (e) {
                                throw i
                            }
                            if (!u.isDirectory()) throw i
                        }
                    }
                    return s
                }
            },
            273: e => {
                var t = 1e3,
                    r = 60 * t,
                    n = 60 * r,
                    i = 24 * n,
                    o = 7 * i;

                function s(e, t, r, n) {
                    var i = t >= 1.5 * r;
                    return Math.round(e / r) + " " + n + (i ? "s" : "")
                }
                e.exports = function (e, a) {
                    a = a || {};
                    var l, u, c = typeof e;
                    if ("string" === c && e.length > 0) return function (e) {
                        if (!((e = String(e)).length > 100)) {
                            var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                            if (s) {
                                var a = parseFloat(s[1]);
                                switch ((s[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * a;
                                case "weeks":
                                case "week":
                                case "w":
                                    return a * o;
                                case "days":
                                case "day":
                                case "d":
                                    return a * i;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return a * n;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return a * r;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return a * t;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return a;
                                default:
                                    return
                                }
                            }
                        }
                    }(e);
                    if ("number" === c && isFinite(e)) return a.long ? (l = e, (u = Math.abs(l)) >= i ? s(l, u, i, "day") : u >= n ? s(l, u, n, "hour") : u >= r ? s(l, u, r, "minute") : u >= t ? s(l, u, t, "second") : l + " ms") : function (e) {
                        var o = Math.abs(e);
                        return o >= i ? Math.round(e / i) + "d" : o >= n ? Math.round(e / n) + "h" : o >= r ? Math.round(e / r) + "m" : o >= t ? Math.round(e / t) + "s" : e + "ms"
                    }(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                }
            },
            4283: (e, t, r) => {
                "use strict";
                var n = r(5598);
                e.exports = function (e) {
                    var t, r = 0;

                    function i() {
                        return r || (r = 1, t = e.apply(this, arguments), e = null), t
                    }
                    return i.displayName = n(e), i
                }
            },
            393: e => {
                "use strict";
                const t = {};

                function r(e, r, n) {
                    n || (n = Error);
                    class i extends n {
                        constructor(e, t, n) {
                            super(function (e, t, n) {
                                return "string" == typeof r ? r : r(e, t, n)
                            }(e, t, n))
                        }
                    }
                    i.prototype.name = n.name, i.prototype.code = e, t[e] = i
                }

                function n(e, t) {
                    if (Array.isArray(e)) {
                        const r = e.length;
                        return e = e.map((e => String(e))), r > 2 ? `one of ${t} ${e.slice(0,r-1).join(", ")}, or ` + e[r - 1] : 2 === r ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`
                    }
                    return `of ${t} ${String(e)}`
                }
                r("ERR_INVALID_OPT_VALUE", (function (e, t) {
                    return 'The value "' + t + '" is invalid for option "' + e + '"'
                }), TypeError), r("ERR_INVALID_ARG_TYPE", (function (e, t, r) {
                    let i;
                    var o;
                    let s;
                    if ("string" == typeof t && (o = "not ", t.substr(0, 4) === o) ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be", function (e, t, r) {
                            return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - 9, r) === t
                        }(e, " argument")) s = `The ${e} ${i} ${n(t,"type")}`;
                    else {
                        s = `The "${e}" ${"number"!=typeof l&&(l=0),l+1>(a=e).length||-1===a.indexOf(".",l)?"argument":"property"} ${i} ${n(t,"type")}`
                    }
                    var a, l;
                    return s += ". Received type " + typeof r, s
                }), TypeError), r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r("ERR_METHOD_NOT_IMPLEMENTED", (function (e) {
                    return "The " + e + " method is not implemented"
                })), r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r("ERR_STREAM_DESTROYED", (function (e) {
                    return "Cannot call " + e + " after a stream was destroyed"
                })), r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r("ERR_STREAM_WRITE_AFTER_END", "write after end"), r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r("ERR_UNKNOWN_ENCODING", (function (e) {
                    return "Unknown encoding: " + e
                }), TypeError), r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.F = t
            },
            2750: (e, t, r) => {
                "use strict";
                var n = Object.keys || function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t
                };
                e.exports = u;
                var i = r(1820),
                    o = r(9276);
                r(8361)(u, i);
                for (var s = n(o.prototype), a = 0; a < s.length; a++) {
                    var l = s[a];
                    u.prototype[l] || (u.prototype[l] = o.prototype[l])
                }

                function u(e) {
                    if (!(this instanceof u)) return new u(e);
                    i.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", c)))
                }

                function c() {
                    this._writableState.ended || process.nextTick(h, this)
                }

                function h(e) {
                    e.end()
                }
                Object.defineProperty(u.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function () {
                        return this._writableState.highWaterMark
                    }
                }), Object.defineProperty(u.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function () {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(u.prototype, "writableLength", {
                    enumerable: !1,
                    get: function () {
                        return this._writableState.length
                    }
                }), Object.defineProperty(u.prototype, "destroyed", {
                    enumerable: !1,
                    get: function () {
                        return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                    },
                    set: function (e) {
                        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                    }
                })
            },
            616: (e, t, r) => {
                "use strict";
                e.exports = i;
                var n = r(266);

                function i(e) {
                    if (!(this instanceof i)) return new i(e);
                    n.call(this, e)
                }
                r(8361)(i, n), i.prototype._transform = function (e, t, r) {
                    r(null, e)
                }
            },
            1820: (e, t, r) => {
                "use strict";
                var n;
                e.exports = C, C.ReadableState = S, r(4434).EventEmitter;
                var i, o = function (e, t) {
                        return e.listeners(t).length
                    },
                    s = r(7088),
                    a = r(181).Buffer,
                    l = global.Uint8Array || function () {},
                    u = r(9023);
                i = u && u.debuglog ? u.debuglog("stream") : function () {};
                var c, h, d, f = r(1281),
                    p = r(7472),
                    g = r(3459).getHighWaterMark,
                    m = r(393).F,
                    v = m.ERR_INVALID_ARG_TYPE,
                    y = m.ERR_STREAM_PUSH_AFTER_EOF,
                    w = m.ERR_METHOD_NOT_IMPLEMENTED,
                    b = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                r(8361)(C, s);
                var _ = p.errorOrDestroy,
                    E = ["error", "close", "destroy", "pause", "resume"];

                function S(e, t, i) {
                    n = n || r(2750), e = e || {}, "boolean" != typeof i && (i = t instanceof n), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = g(this, e, "readableHighWaterMark", i), this.buffer = new f, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (c || (c = r(7117).I), this.decoder = new c(e.encoding), this.encoding = e.encoding)
                }

                function C(e) {
                    if (n = n || r(2750), !(this instanceof C)) return new C(e);
                    var t = this instanceof n;
                    this._readableState = new S(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), s.call(this)
                }

                function x(e, t, r, n, o) {
                    i("readableAddChunk", t);
                    var s, u = e._readableState;
                    if (null === t) u.reading = !1,
                        function (e, t) {
                            if (i("onEofChunk"), !t.ended) {
                                if (t.decoder) {
                                    var r = t.decoder.end();
                                    r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                                }
                                t.ended = !0, t.sync ? A(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, k(e)))
                            }
                        }(e, u);
                    else if (o || (s = function (e, t) {
                            var r, n;
                            return n = t, a.isBuffer(n) || n instanceof l || "string" == typeof t || void 0 === t || e.objectMode || (r = new v("chunk", ["string", "Buffer", "Uint8Array"], t)), r
                        }(u, t)), s) _(e, s);
                    else if (u.objectMode || t && t.length > 0)
                        if ("string" == typeof t || u.objectMode || Object.getPrototypeOf(t) === a.prototype || (t = function (e) {
                                return a.from(e)
                            }(t)), n) u.endEmitted ? _(e, new b) : O(e, u, t, !0);
                        else if (u.ended) _(e, new y);
                    else {
                        if (u.destroyed) return !1;
                        u.reading = !1, u.decoder && !r ? (t = u.decoder.write(t), u.objectMode || 0 !== t.length ? O(e, u, t, !1) : T(e, u)) : O(e, u, t, !1)
                    } else n || (u.reading = !1, T(e, u));
                    return !u.ended && (u.length < u.highWaterMark || 0 === u.length)
                }

                function O(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && A(e)), T(e, t)
                }
                Object.defineProperty(C.prototype, "destroyed", {
                    enumerable: !1,
                    get: function () {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function (e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }), C.prototype.destroy = p.destroy, C.prototype._undestroy = p.undestroy, C.prototype._destroy = function (e, t) {
                    t(e)
                }, C.prototype.push = function (e, t) {
                    var r, n = this._readableState;
                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = a.from(e, t), t = ""), r = !0), x(this, e, t, !1, r)
                }, C.prototype.unshift = function (e) {
                    return x(this, e, null, !0, !1)
                }, C.prototype.isPaused = function () {
                    return !1 === this._readableState.flowing
                }, C.prototype.setEncoding = function (e) {
                    c || (c = r(7117).I);
                    var t = new c(e);
                    this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                    for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += t.write(n.data), n = n.next;
                    return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
                };
                var R = 1073741824;

                function M(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
                        return e >= R ? e = R : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                    }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
                }

                function A(e) {
                    var t = e._readableState;
                    i("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (i("emitReadable", t.flowing), t.emittedReadable = !0, process.nextTick(k, e))
                }

                function k(e) {
                    var t = e._readableState;
                    i("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, D(e)
                }

                function T(e, t) {
                    t.readingMore || (t.readingMore = !0, process.nextTick(L, e, t))
                }

                function L(e, t) {
                    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                        var r = t.length;
                        if (i("maybeReadMore read 0"), e.read(0), r === t.length) break
                    }
                    t.readingMore = !1
                }

                function j(e) {
                    var t = e._readableState;
                    t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                }

                function N(e) {
                    i("readable nexttick read 0"), e.read(0)
                }

                function P(e, t) {
                    i("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), D(e), t.flowing && !t.reading && e.read(0)
                }

                function D(e) {
                    var t = e._readableState;
                    for (i("flow", t.flowing); t.flowing && null !== e.read(););
                }

                function $(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r);
                    var r
                }

                function F(e) {
                    var t = e._readableState;
                    i("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, process.nextTick(I, t, e))
                }

                function I(e, t) {
                    if (i("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                        var r = t._writableState;
                        (!r || r.autoDestroy && r.finished) && t.destroy()
                    }
                }

                function U(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r] === t) return r;
                    return -1
                }
                C.prototype.read = function (e) {
                    i("read", e), e = parseInt(e, 10);
                    var t = this._readableState,
                        r = e;
                    if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return i("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? F(this) : A(this), null;
                    if (0 === (e = M(e, t)) && t.ended) return 0 === t.length && F(this), null;
                    var n, o = t.needReadable;
                    return i("need readable", o), (0 === t.length || t.length - e < t.highWaterMark) && i("length less than watermark", o = !0), t.ended || t.reading ? i("reading or ended", o = !1) : o && (i("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = M(r, t))), null === (n = e > 0 ? $(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && F(this)), null !== n && this.emit("data", n), n
                }, C.prototype._read = function (e) {
                    _(this, new w("_read()"))
                }, C.prototype.pipe = function (e, t) {
                    var r = this,
                        n = this._readableState;
                    switch (n.pipesCount) {
                    case 0:
                        n.pipes = e;
                        break;
                    case 1:
                        n.pipes = [n.pipes, e];
                        break;
                    default:
                        n.pipes.push(e)
                    }
                    n.pipesCount += 1, i("pipe count=%d opts=%j", n.pipesCount, t);
                    var s = t && !1 === t.end || e === process.stdout || e === process.stderr ? p : a;

                    function a() {
                        i("onend"), e.end()
                    }
                    n.endEmitted ? process.nextTick(s) : r.once("end", s), e.on("unpipe", (function t(o, s) {
                        i("onunpipe"), o === r && s && !1 === s.hasUnpiped && (s.hasUnpiped = !0, i("cleanup"), e.removeListener("close", d), e.removeListener("finish", f), e.removeListener("drain", l), e.removeListener("error", h), e.removeListener("unpipe", t), r.removeListener("end", a), r.removeListener("end", p), r.removeListener("data", c), u = !0, !n.awaitDrain || e._writableState && !e._writableState.needDrain || l())
                    }));
                    var l = function (e) {
                        return function () {
                            var t = e._readableState;
                            i("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && o(e, "data") && (t.flowing = !0, D(e))
                        }
                    }(r);
                    e.on("drain", l);
                    var u = !1;

                    function c(t) {
                        i("ondata");
                        var o = e.write(t);
                        i("dest.write", o), !1 === o && ((1 === n.pipesCount && n.pipes === e || n.pipesCount > 1 && -1 !== U(n.pipes, e)) && !u && (i("false write response, pause", n.awaitDrain), n.awaitDrain++), r.pause())
                    }

                    function h(t) {
                        i("onerror", t), p(), e.removeListener("error", h), 0 === o(e, "error") && _(e, t)
                    }

                    function d() {
                        e.removeListener("finish", f), p()
                    }

                    function f() {
                        i("onfinish"), e.removeListener("close", d), p()
                    }

                    function p() {
                        i("unpipe"), r.unpipe(e)
                    }
                    return r.on("data", c),
                        function (e, t, r) {
                            if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                            e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                        }(e, "error", h), e.once("close", d), e.once("finish", f), e.emit("pipe", r), n.flowing || (i("pipe resume"), r.resume()), e
                }, C.prototype.unpipe = function (e) {
                    var t = this._readableState,
                        r = {
                            hasUnpiped: !1
                        };
                    if (0 === t.pipesCount) return this;
                    if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
                    if (!e) {
                        var n = t.pipes,
                            i = t.pipesCount;
                        t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                        for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {
                            hasUnpiped: !1
                        });
                        return this
                    }
                    var s = U(t.pipes, e);
                    return -1 === s || (t.pipes.splice(s, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
                }, C.prototype.on = function (e, t) {
                    var r = s.prototype.on.call(this, e, t),
                        n = this._readableState;
                    return "data" === e ? (n.readableListening = this.listenerCount("readable") > 0, !1 !== n.flowing && this.resume()) : "readable" === e && (n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.flowing = !1, n.emittedReadable = !1, i("on readable", n.length, n.reading), n.length ? A(this) : n.reading || process.nextTick(N, this))), r
                }, C.prototype.addListener = C.prototype.on, C.prototype.removeListener = function (e, t) {
                    var r = s.prototype.removeListener.call(this, e, t);
                    return "readable" === e && process.nextTick(j, this), r
                }, C.prototype.removeAllListeners = function (e) {
                    var t = s.prototype.removeAllListeners.apply(this, arguments);
                    return "readable" !== e && void 0 !== e || process.nextTick(j, this), t
                }, C.prototype.resume = function () {
                    var e = this._readableState;
                    return e.flowing || (i("resume"), e.flowing = !e.readableListening, function (e, t) {
                        t.resumeScheduled || (t.resumeScheduled = !0, process.nextTick(P, e, t))
                    }(this, e)), e.paused = !1, this
                }, C.prototype.pause = function () {
                    return i("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (i("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                }, C.prototype.wrap = function (e) {
                    var t = this,
                        r = this._readableState,
                        n = !1;
                    for (var o in e.on("end", (function () {
                            if (i("wrapped end"), r.decoder && !r.ended) {
                                var e = r.decoder.end();
                                e && e.length && t.push(e)
                            }
                            t.push(null)
                        })), e.on("data", (function (o) {
                            i("wrapped data"), r.decoder && (o = r.decoder.write(o)), r.objectMode && null == o || (r.objectMode || o && o.length) && (t.push(o) || (n = !0, e.pause()))
                        })), e) void 0 === this[o] && "function" == typeof e[o] && (this[o] = function (t) {
                        return function () {
                            return e[t].apply(e, arguments)
                        }
                    }(o));
                    for (var s = 0; s < E.length; s++) e.on(E[s], this.emit.bind(this, E[s]));
                    return this._read = function (t) {
                        i("wrapped _read", t), n && (n = !1, e.resume())
                    }, this
                }, "function" == typeof Symbol && (C.prototype[Symbol.asyncIterator] = function () {
                    return void 0 === h && (h = r(9923)), h(this)
                }), Object.defineProperty(C.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function () {
                        return this._readableState.highWaterMark
                    }
                }), Object.defineProperty(C.prototype, "readableBuffer", {
                    enumerable: !1,
                    get: function () {
                        return this._readableState && this._readableState.buffer
                    }
                }), Object.defineProperty(C.prototype, "readableFlowing", {
                    enumerable: !1,
                    get: function () {
                        return this._readableState.flowing
                    },
                    set: function (e) {
                        this._readableState && (this._readableState.flowing = e)
                    }
                }), C._fromList = $, Object.defineProperty(C.prototype, "readableLength", {
                    enumerable: !1,
                    get: function () {
                        return this._readableState.length
                    }
                }), "function" == typeof Symbol && (C.from = function (e, t) {
                    return void 0 === d && (d = r(3452)), d(C, e, t)
                })
            },
            266: (e, t, r) => {
                "use strict";
                e.exports = c;
                var n = r(393).F,
                    i = n.ERR_METHOD_NOT_IMPLEMENTED,
                    o = n.ERR_MULTIPLE_CALLBACK,
                    s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                    a = n.ERR_TRANSFORM_WITH_LENGTH_0,
                    l = r(2750);

                function u(e, t) {
                    var r = this._transformState;
                    r.transforming = !1;
                    var n = r.writecb;
                    if (null === n) return this.emit("error", new o);
                    r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
                    var i = this._readableState;
                    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                }

                function c(e) {
                    if (!(this instanceof c)) return new c(e);
                    l.call(this, e), this._transformState = {
                        afterTransform: u.bind(this),
                        needTransform: !1,
                        transforming: !1,
                        writecb: null,
                        writechunk: null,
                        writeencoding: null
                    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", h)
                }

                function h() {
                    var e = this;
                    "function" != typeof this._flush || this._readableState.destroyed ? d(this, null, null) : this._flush((function (t, r) {
                        d(e, t, r)
                    }))
                }

                function d(e, t, r) {
                    if (t) return e.emit("error", t);
                    if (null != r && e.push(r), e._writableState.length) throw new a;
                    if (e._transformState.transforming) throw new s;
                    return e.push(null)
                }
                r(8361)(c, l), c.prototype.push = function (e, t) {
                    return this._transformState.needTransform = !1, l.prototype.push.call(this, e, t)
                }, c.prototype._transform = function (e, t, r) {
                    r(new i("_transform()"))
                }, c.prototype._write = function (e, t, r) {
                    var n = this._transformState;
                    if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                        var i = this._readableState;
                        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                    }
                }, c.prototype._read = function (e) {
                    var t = this._transformState;
                    null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
                }, c.prototype._destroy = function (e, t) {
                    l.prototype._destroy.call(this, e, (function (e) {
                        t(e)
                    }))
                }
            },
            9276: (e, t, r) => {
                "use strict";

                function n(e) {
                    var t = this;
                    this.next = null, this.entry = null, this.finish = function () {
                        ! function (e, t) {
                            var r = e.entry;
                            for (e.entry = null; r;) {
                                var n = r.callback;
                                t.pendingcb--, n(undefined), r = r.next
                            }
                            t.corkedRequestsFree.next = e
                        }(t, e)
                    }
                }
                var i;
                e.exports = C, C.WritableState = S;
                var o, s = {
                        deprecate: r(3303)
                    },
                    a = r(7088),
                    l = r(181).Buffer,
                    u = global.Uint8Array || function () {},
                    c = r(7472),
                    h = r(3459).getHighWaterMark,
                    d = r(393).F,
                    f = d.ERR_INVALID_ARG_TYPE,
                    p = d.ERR_METHOD_NOT_IMPLEMENTED,
                    g = d.ERR_MULTIPLE_CALLBACK,
                    m = d.ERR_STREAM_CANNOT_PIPE,
                    v = d.ERR_STREAM_DESTROYED,
                    y = d.ERR_STREAM_NULL_VALUES,
                    w = d.ERR_STREAM_WRITE_AFTER_END,
                    b = d.ERR_UNKNOWN_ENCODING,
                    _ = c.errorOrDestroy;

                function E() {}

                function S(e, t, o) {
                    i = i || r(2750), e = e || {}, "boolean" != typeof o && (o = t instanceof i), this.objectMode = !!e.objectMode, o && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = h(this, e, "writableHighWaterMark", o), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                    var s = !1 === e.decodeStrings;
                    this.decodeStrings = !s, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
                        ! function (e, t) {
                            var r = e._writableState,
                                n = r.sync,
                                i = r.writecb;
                            if ("function" != typeof i) throw new g;
                            if (function (e) {
                                    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                                }(r), t) ! function (e, t, r, n, i) {
                                --t.pendingcb, r ? (process.nextTick(i, n), process.nextTick(k, e, t), e._writableState.errorEmitted = !0, _(e, n)) : (i(n), e._writableState.errorEmitted = !0, _(e, n), k(e, t))
                            }(e, r, n, t, i);
                            else {
                                var o = M(r) || e.destroyed;
                                o || r.corked || r.bufferProcessing || !r.bufferedRequest || R(e, r), n ? process.nextTick(O, e, r, o, i) : O(e, r, o, i)
                            }
                        }(t, e)
                    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new n(this)
                }

                function C(e) {
                    var t = this instanceof(i = i || r(2750));
                    if (!t && !o.call(C, this)) return new C(e);
                    this._writableState = new S(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), a.call(this)
                }

                function x(e, t, r, n, i, o, s) {
                    t.writelen = n, t.writecb = s, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new v("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
                }

                function O(e, t, r, n) {
                    r || function (e, t) {
                        0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                    }(e, t), t.pendingcb--, n(), k(e, t)
                }

                function R(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                        var i = t.bufferedRequestCount,
                            o = new Array(i),
                            s = t.corkedRequestsFree;
                        s.entry = r;
                        for (var a = 0, l = !0; r;) o[a] = r, r.isBuf || (l = !1), r = r.next, a += 1;
                        o.allBuffers = l, x(e, t, !0, t.length, o, "", s.finish), t.pendingcb++, t.lastBufferedRequest = null, s.next ? (t.corkedRequestsFree = s.next, s.next = null) : t.corkedRequestsFree = new n(t), t.bufferedRequestCount = 0
                    } else {
                        for (; r;) {
                            var u = r.chunk,
                                c = r.encoding,
                                h = r.callback;
                            if (x(e, t, !1, t.objectMode ? 1 : u.length, u, c, h), r = r.next, t.bufferedRequestCount--, t.writing) break
                        }
                        null === r && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = r, t.bufferProcessing = !1
                }

                function M(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }

                function A(e, t) {
                    e._final((function (r) {
                        t.pendingcb--, r && _(e, r), t.prefinished = !0, e.emit("prefinish"), k(e, t)
                    }))
                }

                function k(e, t) {
                    var r = M(t);
                    if (r && (function (e, t) {
                            t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, process.nextTick(A, e, t)))
                        }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                        var n = e._readableState;
                        (!n || n.autoDestroy && n.endEmitted) && e.destroy()
                    }
                    return r
                }
                r(8361)(C, a), S.prototype.getBuffer = function () {
                        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                        return t
                    },
                    function () {
                        try {
                            Object.defineProperty(S.prototype, "buffer", {
                                get: s.deprecate((function () {
                                    return this.getBuffer()
                                }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                            })
                        } catch (e) {}
                    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (o = Function.prototype[Symbol.hasInstance], Object.defineProperty(C, Symbol.hasInstance, {
                        value: function (e) {
                            return !!o.call(this, e) || this === C && e && e._writableState instanceof S
                        }
                    })) : o = function (e) {
                        return e instanceof this
                    }, C.prototype.pipe = function () {
                        _(this, new m)
                    }, C.prototype.write = function (e, t, r) {
                        var n, i = this._writableState,
                            o = !1,
                            s = !i.objectMode && (n = e, l.isBuffer(n) || n instanceof u);
                        return s && !l.isBuffer(e) && (e = function (e) {
                            return l.from(e)
                        }(e)), "function" == typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof r && (r = E), i.ending ? function (e, t) {
                            var r = new w;
                            _(e, r), process.nextTick(t, r)
                        }(this, r) : (s || function (e, t, r, n) {
                            var i;
                            return null === r ? i = new y : "string" == typeof r || t.objectMode || (i = new f("chunk", ["string", "Buffer"], r)), !i || (_(e, i), process.nextTick(n, i), !1)
                        }(this, i, e, r)) && (i.pendingcb++, o = function (e, t, r, n, i, o) {
                            if (!r) {
                                var s = function (e, t, r) {
                                    return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = l.from(t, r)), t
                                }(t, n, i);
                                n !== s && (r = !0, i = "buffer", n = s)
                            }
                            var a = t.objectMode ? 1 : n.length;
                            t.length += a;
                            var u = t.length < t.highWaterMark;
                            if (u || (t.needDrain = !0), t.writing || t.corked) {
                                var c = t.lastBufferedRequest;
                                t.lastBufferedRequest = {
                                    chunk: n,
                                    encoding: i,
                                    isBuf: r,
                                    callback: o,
                                    next: null
                                }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                            } else x(e, t, !1, a, n, i, o);
                            return u
                        }(this, i, s, e, t, r)), o
                    }, C.prototype.cork = function () {
                        this._writableState.corked++
                    }, C.prototype.uncork = function () {
                        var e = this._writableState;
                        e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || R(this, e))
                    }, C.prototype.setDefaultEncoding = function (e) {
                        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new b(e);
                        return this._writableState.defaultEncoding = e, this
                    }, Object.defineProperty(C.prototype, "writableBuffer", {
                        enumerable: !1,
                        get: function () {
                            return this._writableState && this._writableState.getBuffer()
                        }
                    }), Object.defineProperty(C.prototype, "writableHighWaterMark", {
                        enumerable: !1,
                        get: function () {
                            return this._writableState.highWaterMark
                        }
                    }), C.prototype._write = function (e, t, r) {
                        r(new p("_write()"))
                    }, C.prototype._writev = null, C.prototype.end = function (e, t, r) {
                        var n = this._writableState;
                        return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || function (e, t, r) {
                            t.ending = !0, k(e, t), r && (t.finished ? process.nextTick(r) : e.once("finish", r)), t.ended = !0, e.writable = !1
                        }(this, n, r), this
                    }, Object.defineProperty(C.prototype, "writableLength", {
                        enumerable: !1,
                        get: function () {
                            return this._writableState.length
                        }
                    }), Object.defineProperty(C.prototype, "destroyed", {
                        enumerable: !1,
                        get: function () {
                            return void 0 !== this._writableState && this._writableState.destroyed
                        },
                        set: function (e) {
                            this._writableState && (this._writableState.destroyed = e)
                        }
                    }), C.prototype.destroy = c.destroy, C.prototype._undestroy = c.undestroy, C.prototype._destroy = function (e, t) {
                        t(e)
                    }
            },
            9923: (e, t, r) => {
                "use strict";
                var n;

                function i(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }
                var o = r(4214),
                    s = Symbol("lastResolve"),
                    a = Symbol("lastReject"),
                    l = Symbol("error"),
                    u = Symbol("ended"),
                    c = Symbol("lastPromise"),
                    h = Symbol("handlePromise"),
                    d = Symbol("stream");

                function f(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }

                function p(e) {
                    var t = e[s];
                    if (null !== t) {
                        var r = e[d].read();
                        null !== r && (e[c] = null, e[s] = null, e[a] = null, t(f(r, !1)))
                    }
                }

                function g(e) {
                    process.nextTick(p, e)
                }
                var m = Object.getPrototypeOf((function () {})),
                    v = Object.setPrototypeOf((i(n = {
                        get stream() {
                            return this[d]
                        },
                        next: function () {
                            var e = this,
                                t = this[l];
                            if (null !== t) return Promise.reject(t);
                            if (this[u]) return Promise.resolve(f(void 0, !0));
                            if (this[d].destroyed) return new Promise((function (t, r) {
                                process.nextTick((function () {
                                    e[l] ? r(e[l]) : t(f(void 0, !0))
                                }))
                            }));
                            var r, n = this[c];
                            if (n) r = new Promise(function (e, t) {
                                return function (r, n) {
                                    e.then((function () {
                                        t[u] ? r(f(void 0, !0)) : t[h](r, n)
                                    }), n)
                                }
                            }(n, this));
                            else {
                                var i = this[d].read();
                                if (null !== i) return Promise.resolve(f(i, !1));
                                r = new Promise(this[h])
                            }
                            return this[c] = r, r
                        }
                    }, Symbol.asyncIterator, (function () {
                        return this
                    })), i(n, "return", (function () {
                        var e = this;
                        return new Promise((function (t, r) {
                            e[d].destroy(null, (function (e) {
                                e ? r(e) : t(f(void 0, !0))
                            }))
                        }))
                    })), n), m);
                e.exports = function (e) {
                    var t, r = Object.create(v, (i(t = {}, d, {
                        value: e,
                        writable: !0
                    }), i(t, s, {
                        value: null,
                        writable: !0
                    }), i(t, a, {
                        value: null,
                        writable: !0
                    }), i(t, l, {
                        value: null,
                        writable: !0
                    }), i(t, u, {
                        value: e._readableState.endEmitted,
                        writable: !0
                    }), i(t, h, {
                        value: function (e, t) {
                            var n = r[d].read();
                            n ? (r[c] = null, r[s] = null, r[a] = null, e(f(n, !1))) : (r[s] = e, r[a] = t)
                        },
                        writable: !0
                    }), t));
                    return r[c] = null, o(e, (function (e) {
                        if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                            var t = r[a];
                            return null !== t && (r[c] = null, r[s] = null, r[a] = null, t(e)), void(r[l] = e)
                        }
                        var n = r[s];
                        null !== n && (r[c] = null, r[s] = null, r[a] = null, n(f(void 0, !0))), r[u] = !0
                    })), e.on("readable", g.bind(null, r)), r
                }
            },
            1281: (e, t, r) => {
                "use strict";

                function n(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function i(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function o(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                var s = r(181).Buffer,
                    a = r(9023).inspect,
                    l = a && a.custom || "inspect";
                e.exports = function () {
                    function e() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.head = null, this.tail = null, this.length = 0
                    }
                    var t, r;
                    return t = e, r = [{
                        key: "push",
                        value: function (e) {
                            var t = {
                                data: e,
                                next: null
                            };
                            this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                        }
                    }, {
                        key: "unshift",
                        value: function (e) {
                            var t = {
                                data: e,
                                next: this.head
                            };
                            0 === this.length && (this.tail = t), this.head = t, ++this.length
                        }
                    }, {
                        key: "shift",
                        value: function () {
                            if (0 !== this.length) {
                                var e = this.head.data;
                                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                            }
                        }
                    }, {
                        key: "clear",
                        value: function () {
                            this.head = this.tail = null, this.length = 0
                        }
                    }, {
                        key: "join",
                        value: function (e) {
                            if (0 === this.length) return "";
                            for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                            return r
                        }
                    }, {
                        key: "concat",
                        value: function (e) {
                            if (0 === this.length) return s.alloc(0);
                            for (var t, r, n, i = s.allocUnsafe(e >>> 0), o = this.head, a = 0; o;) t = o.data, r = i, n = a, s.prototype.copy.call(t, r, n), a += o.data.length, o = o.next;
                            return i
                        }
                    }, {
                        key: "consume",
                        value: function (e, t) {
                            var r;
                            return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
                        }
                    }, {
                        key: "first",
                        value: function () {
                            return this.head.data
                        }
                    }, {
                        key: "_getString",
                        value: function (e) {
                            var t = this.head,
                                r = 1,
                                n = t.data;
                            for (e -= n.length; t = t.next;) {
                                var i = t.data,
                                    o = e > i.length ? i.length : e;
                                if (o === i.length ? n += i : n += i.slice(0, e), 0 == (e -= o)) {
                                    o === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o));
                                    break
                                }++r
                            }
                            return this.length -= r, n
                        }
                    }, {
                        key: "_getBuffer",
                        value: function (e) {
                            var t = s.allocUnsafe(e),
                                r = this.head,
                                n = 1;
                            for (r.data.copy(t), e -= r.data.length; r = r.next;) {
                                var i = r.data,
                                    o = e > i.length ? i.length : e;
                                if (i.copy(t, t.length - e, 0, o), 0 == (e -= o)) {
                                    o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o));
                                    break
                                }++n
                            }
                            return this.length -= n, t
                        }
                    }, {
                        key: l,
                        value: function (e, t) {
                            return a(this, function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? n(Object(r), !0).forEach((function (t) {
                                        i(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }({}, t, {
                                depth: 0,
                                customInspect: !1
                            }))
                        }
                    }], r && o(t.prototype, r), e
                }()
            },
            7472: e => {
                "use strict";

                function t(e, t) {
                    n(e, t), r(e)
                }

                function r(e) {
                    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
                }

                function n(e, t) {
                    e.emit("error", t)
                }
                e.exports = {
                    destroy: function (e, i) {
                        var o = this,
                            s = this._readableState && this._readableState.destroyed,
                            a = this._writableState && this._writableState.destroyed;
                        return s || a ? (i ? i(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(n, this, e)) : process.nextTick(n, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function (e) {
                            !i && e ? o._writableState ? o._writableState.errorEmitted ? process.nextTick(r, o) : (o._writableState.errorEmitted = !0, process.nextTick(t, o, e)) : process.nextTick(t, o, e) : i ? (process.nextTick(r, o), i(e)) : process.nextTick(r, o)
                        })), this)
                    },
                    undestroy: function () {
                        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                    },
                    errorOrDestroy: function (e, t) {
                        var r = e._readableState,
                            n = e._writableState;
                        r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                    }
                }
            },
            4214: (e, t, r) => {
                "use strict";
                var n = r(393).F.ERR_STREAM_PREMATURE_CLOSE;

                function i() {}
                e.exports = function e(t, r, o) {
                    if ("function" == typeof r) return e(t, null, r);
                    r || (r = {}), o = function (e) {
                        var t = !1;
                        return function () {
                            if (!t) {
                                t = !0;
                                for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                                e.apply(this, n)
                            }
                        }
                    }(o || i);
                    var s = r.readable || !1 !== r.readable && t.readable,
                        a = r.writable || !1 !== r.writable && t.writable,
                        l = function () {
                            t.writable || c()
                        },
                        u = t._writableState && t._writableState.finished,
                        c = function () {
                            a = !1, u = !0, s || o.call(t)
                        },
                        h = t._readableState && t._readableState.endEmitted,
                        d = function () {
                            s = !1, h = !0, a || o.call(t)
                        },
                        f = function (e) {
                            o.call(t, e)
                        },
                        p = function () {
                            var e;
                            return s && !h ? (t._readableState && t._readableState.ended || (e = new n), o.call(t, e)) : a && !u ? (t._writableState && t._writableState.ended || (e = new n), o.call(t, e)) : void 0
                        },
                        g = function () {
                            t.req.on("finish", c)
                        };
                    return function (e) {
                            return e.setHeader && "function" == typeof e.abort
                        }(t) ? (t.on("complete", c), t.on("abort", p), t.req ? g() : t.on("request", g)) : a && !t._writableState && (t.on("end", l), t.on("close", l)), t.on("end", d), t.on("finish", c), !1 !== r.error && t.on("error", f), t.on("close", p),
                        function () {
                            t.removeListener("complete", c), t.removeListener("abort", p), t.removeListener("request", g), t.req && t.req.removeListener("finish", c), t.removeListener("end", l), t.removeListener("close", l), t.removeListener("finish", c), t.removeListener("end", d), t.removeListener("error", f), t.removeListener("close", p)
                        }
                }
            },
            3452: (e, t, r) => {
                "use strict";

                function n(e, t, r, n, i, o, s) {
                    try {
                        var a = e[o](s),
                            l = a.value
                    } catch (e) {
                        return void r(e)
                    }
                    a.done ? t(l) : Promise.resolve(l).then(n, i)
                }

                function i(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function o(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }
                var s = r(393).F.ERR_INVALID_ARG_TYPE;
                e.exports = function (e, t, r) {
                    var a;
                    if (t && "function" == typeof t.next) a = t;
                    else if (t && t[Symbol.asyncIterator]) a = t[Symbol.asyncIterator]();
                    else {
                        if (!t || !t[Symbol.iterator]) throw new s("iterable", ["Iterable"], t);
                        a = t[Symbol.iterator]()
                    }
                    var l = new e(function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? i(Object(r), !0).forEach((function (t) {
                                    o(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({
                            objectMode: !0
                        }, r)),
                        u = !1;

                    function c() {
                        return h.apply(this, arguments)
                    }

                    function h() {
                        var e;
                        return e = function* () {
                            try {
                                var e = yield a.next(), t = e.value;
                                e.done ? l.push(null) : l.push(yield t) ? c() : u = !1
                            } catch (e) {
                                l.destroy(e)
                            }
                        }, h = function () {
                            var t = this,
                                r = arguments;
                            return new Promise((function (i, o) {
                                var s = e.apply(t, r);

                                function a(e) {
                                    n(s, i, o, a, l, "next", e)
                                }

                                function l(e) {
                                    n(s, i, o, a, l, "throw", e)
                                }
                                a(void 0)
                            }))
                        }, h.apply(this, arguments)
                    }
                    return l._read = function () {
                        u || (u = !0, c())
                    }, l
                }
            },
            3494: (e, t, r) => {
                "use strict";
                var n, i = r(393).F,
                    o = i.ERR_MISSING_ARGS,
                    s = i.ERR_STREAM_DESTROYED;

                function a(e) {
                    if (e) throw e
                }

                function l(e) {
                    e()
                }

                function u(e, t) {
                    return e.pipe(t)
                }
                e.exports = function () {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    var c, h = function (e) {
                        return e.length ? "function" != typeof e[e.length - 1] ? a : e.pop() : a
                    }(t);
                    if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new o("streams");
                    var d = t.map((function (e, i) {
                        var o = i < t.length - 1;
                        return function (e, t, i, o) {
                            o = function (e) {
                                var t = !1;
                                return function () {
                                    t || (t = !0, e.apply(void 0, arguments))
                                }
                            }(o);
                            var a = !1;
                            e.on("close", (function () {
                                a = !0
                            })), void 0 === n && (n = r(4214)), n(e, {
                                readable: t,
                                writable: i
                            }, (function (e) {
                                if (e) return o(e);
                                a = !0, o()
                            }));
                            var l = !1;
                            return function (t) {
                                if (!a && !l) return l = !0,
                                    function (e) {
                                        return e.setHeader && "function" == typeof e.abort
                                    }(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void o(t || new s("pipe"))
                            }
                        }(e, o, i > 0, (function (e) {
                            c || (c = e), e && d.forEach(l), o || (d.forEach(l), h(c))
                        }))
                    }));
                    return t.reduce(u)
                }
            },
            3459: (e, t, r) => {
                "use strict";
                var n = r(393).F.ERR_INVALID_OPT_VALUE;
                e.exports = {
                    getHighWaterMark: function (e, t, r, i) {
                        var o = function (e, t, r) {
                            return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
                        }(t, i, r);
                        if (null != o) {
                            if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r : "highWaterMark", o);
                            return Math.floor(o)
                        }
                        return e.objectMode ? 16 : 16384
                    }
                }
            },
            7088: (e, t, r) => {
                e.exports = r(2203)
            },
            1534: (e, t, r) => {
                var n = r(2203);
                "disable" === process.env.READABLE_STREAM && n ? (e.exports = n.Readable, Object.assign(e.exports, n), e.exports.Stream = n) : ((t = e.exports = r(1820)).Stream = n || t, t.Readable = t, t.Writable = r(9276), t.Duplex = r(2750), t.Transform = r(266), t.PassThrough = r(616), t.finished = r(4214), t.pipeline = r(3494))
            },
            5303: function (e, t, r) {
                "use strict";
                var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
                        void 0 === n && (n = r), Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function () {
                                return t[r]
                            }
                        })
                    } : function (e, t, r, n) {
                        void 0 === n && (n = r), e[n] = t[r]
                    }),
                    i = this && this.__exportStar || function (e, t) {
                        for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), i(r(8168), t)
            },
            8168: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setValueSafe = t.setValue = t.createKeySafe = t.createKey = t.enumerateKeysSafe = t.enumerateKeys = t.enumerateValuesSafe = t.enumerateValues = t.HKEY = t.RegistryValueType = void 0;
                const n = r(1951);
                var i, o;

                function s(e) {
                    return e === o.HKEY_CLASSES_ROOT ? 2147483648 : e === o.HKEY_CURRENT_USER ? 2147483649 : e === o.HKEY_LOCAL_MACHINE ? 2147483650 : e === o.HKEY_USERS ? 2147483651 : e === o.HKEY_PERFORMANCE_DATA ? 2147483652 : e === o.HKEY_CURRENT_CONFIG ? 2147483653 : e === o.HKEY_DYN_DATA ? 2147483654 : e === o.HKEY_CURRENT_USER_LOCAL_SETTINGS ? 2147483655 : e === o.HKEY_PERFORMANCE_TEXT ? 2147483728 : e === o.HKEY_PERFORMANCE_NLSTEXT ? 2147483744 : function () {
                        throw new Error("The key does not map to an expected number value")
                    }()
                }

                function a(e, t) {
                    if (!n) return [];
                    const r = s(e);
                    return n.readValues(r, t)
                }

                function l(e, t) {
                    if (!n) return [];
                    const r = s(e);
                    return n.enumKeys(r, t)
                }

                function u(e, t) {
                    if (!n) return !1;
                    const r = s(e);
                    return n.createKey(r, t)
                }

                function c(e, t, r, o, a) {
                    if (!n) return !1;
                    if (o != i.REG_SZ && o != i.REG_EXPAND_SZ && o != i.REG_DWORD) return !1;
                    const l = s(e);
                    return n.setValue(l, t, r, o, a)
                }! function (e) {
                    e.REG_BINARY = "REG_BINARY", e.REG_DWORD = "REG_DWORD", e.REG_DWORD_LITTLE_ENDIAN = "REG_DWORD_LITTLE_ENDIAN", e.REG_DWORD_BIG_ENDIAN = "REG_DWORD_BIG_ENDIAN", e.REG_EXPAND_SZ = "REG_EXPAND_SZ", e.REG_LINK = "REG_LINK", e.REG_MULTI_SZ = "REG_MULTI_SZ", e.REG_NONE = "REG_NONE", e.REG_QWORD = "REG_QWORD", e.REG_QWORD_LITTLE_ENDIAN = "REG_QWORD_LITTLE_ENDIAN", e.REG_SZ = "REG_SZ"
                }(i = t.RegistryValueType || (t.RegistryValueType = {})),
                function (e) {
                    e.HKEY_CLASSES_ROOT = "HKEY_CLASSES_ROOT", e.HKEY_CURRENT_CONFIG = "HKEY_CURRENT_CONFIG", e.HKEY_DYN_DATA = "HKEY_DYN_DATA", e.HKEY_CURRENT_USER_LOCAL_SETTINGS = "HKEY_CURRENT_USER_LOCAL_SETTINGS", e.HKEY_CURRENT_USER = "HKEY_CURRENT_USER", e.HKEY_LOCAL_MACHINE = "HKEY_LOCAL_MACHINE", e.HKEY_PERFORMANCE_DATA = "HKEY_PERFORMANCE_DATA", e.HKEY_PERFORMANCE_TEXT = "HKEY_PERFORMANCE_TEXT", e.HKEY_PERFORMANCE_NLSTEXT = "HKEY_PERFORMANCE_NLSTEXT", e.HKEY_USERS = "HKEY_USERS"
                }(o = t.HKEY || (t.HKEY = {})), t.enumerateValues = a, t.enumerateValuesSafe = function (e, t) {
                    try {
                        return a(e, t)
                    } catch (e) {
                        return []
                    }
                }, t.enumerateKeys = l, t.enumerateKeysSafe = function (e, t) {
                    try {
                        return l(e, t)
                    } catch (e) {
                        return []
                    }
                }, t.createKey = u, t.createKeySafe = function (e, t) {
                    try {
                        return u(e, t)
                    } catch (e) {
                        return !1
                    }
                }, t.setValue = c, t.setValueSafe = function (e, t, r, n, i) {
                    try {
                        return c(e, t, r, n, i)
                    } catch (e) {
                        return !1
                    }
                }
            },
            8588: (e, t) => {
                "use strict";
                const r = g();
                r.configure = g, r.stringify = r, r.default = r, t.stringify = r, t.configure = g, e.exports = r;
                const n = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/,
                    i = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/g,
                    o = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000b", "\\f", "\\r", "\\u000e", "\\u000f", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001a", "\\u001b", "\\u001c", "\\u001d", "\\u001e", "\\u001f", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\"];

                function s(e) {
                    if (2 === e.length) {
                        const t = e.charCodeAt(1);
                        return `${e[0]}\\u${t.toString(16)}`
                    }
                    const t = e.charCodeAt(0);
                    return o.length > t ? o[t] : `\\u${t.toString(16)}`
                }

                function a(e) {
                    if (e.length < 5e3 && !n.test(e)) return e;
                    if (e.length > 100) return e.replace(i, s);
                    let t = "",
                        r = 0;
                    for (let n = 0; n < e.length; n++) {
                        const i = e.charCodeAt(n);
                        if (34 === i || 92 === i || i < 32) t += `${e.slice(r,n)}${o[i]}`, r = n + 1;
                        else if (i >= 55296 && i <= 57343) {
                            if (i <= 56319 && n + 1 < e.length) {
                                const t = e.charCodeAt(n + 1);
                                if (t >= 56320 && t <= 57343) {
                                    n++;
                                    continue
                                }
                            }
                            t += `${e.slice(r,n)}\\u${i.toString(16)}`, r = n + 1
                        }
                    }
                    return t += e.slice(r), t
                }

                function l(e) {
                    if (e.length > 200) return e.sort();
                    for (let t = 1; t < e.length; t++) {
                        const r = e[t];
                        let n = t;
                        for (; 0 !== n && e[n - 1] > r;) e[n] = e[n - 1], n--;
                        e[n] = r
                    }
                    return e
                }
                const u = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array)), Symbol.toStringTag).get;

                function c(e) {
                    return void 0 !== u.call(e) && 0 !== e.length
                }

                function h(e, t, r) {
                    e.length < r && (r = e.length);
                    const n = "," === t ? "" : " ";
                    let i = `"0":${n}${e[0]}`;
                    for (let o = 1; o < r; o++) i += `${t}"${o}":${n}${e[o]}`;
                    return i
                }

                function d(e, t) {
                    if (e && Object.prototype.hasOwnProperty.call(e, t)) {
                        var r = e[t];
                        if ("boolean" != typeof r) throw new TypeError(`The "${t}" argument must be of type boolean`)
                    }
                    return void 0 === r || r
                }

                function f(e, t) {
                    if (e && Object.prototype.hasOwnProperty.call(e, t)) {
                        var r = e[t];
                        if ("number" != typeof r) throw new TypeError(`The "${t}" argument must be of type number`);
                        if (!Number.isInteger(r)) throw new TypeError(`The "${t}" argument must be an integer`);
                        if (r < 1) throw new RangeError(`The "${t}" argument must be >= 1`)
                    }
                    return void 0 === r ? 1 / 0 : r
                }

                function p(e) {
                    return 1 === e ? "1 item" : `${e} items`
                }

                function g(e) {
                    const t = function (e) {
                            if (e && Object.prototype.hasOwnProperty.call(e, "circularValue")) {
                                var t = e.circularValue;
                                if ("string" == typeof t) return `"${t}"`;
                                if (null == t) return t;
                                if (t === Error || t === TypeError) return {
                                    toString() {
                                        throw new TypeError("Converting circular structure to JSON")
                                    }
                                };
                                throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')
                            }
                            return '"[Circular]"'
                        }(e),
                        r = d(e, "bigint"),
                        n = d(e, "deterministic"),
                        i = f(e, "maximumDepth"),
                        o = f(e, "maximumBreadth");

                    function s(e, u, d, f, g, m) {
                        let v = u[e];
                        switch ("object" == typeof v && null !== v && "function" == typeof v.toJSON && (v = v.toJSON(e)), v = f.call(u, e, v), typeof v) {
                        case "string":
                            return `"${a(v)}"`;
                        case "object": {
                            if (null === v) return "null";
                            if (-1 !== d.indexOf(v)) return t;
                            let e = "",
                                r = ",";
                            const u = m;
                            if (Array.isArray(v)) {
                                if (0 === v.length) return "[]";
                                if (i < d.length + 1) return '"[Array]"';
                                d.push(v), "" !== g && (e += `\n${m+=g}`, r = `,\n${m}`);
                                const t = Math.min(v.length, o);
                                let n = 0;
                                for (; n < t - 1; n++) {
                                    const t = s(n, v, d, f, g, m);
                                    e += void 0 !== t ? t : "null", e += r
                                }
                                const a = s(n, v, d, f, g, m);
                                return e += void 0 !== a ? a : "null", v.length - 1 > o && (e += `${r}"... ${p(v.length-o-1)} not stringified"`), "" !== g && (e += `\n${u}`), d.pop(), `[${e}]`
                            }
                            let y = Object.keys(v);
                            const w = y.length;
                            if (0 === w) return "{}";
                            if (i < d.length + 1) return '"[Object]"';
                            let b = "",
                                _ = "";
                            "" !== g && (r = `,\n${m+=g}`, b = " ");
                            let E = Math.min(w, o);
                            c(v) && (e += h(v, r, o), y = y.slice(v.length), E -= v.length, _ = r), n && (y = l(y)), d.push(v);
                            for (let t = 0; t < E; t++) {
                                const n = y[t],
                                    i = s(n, v, d, f, g, m);
                                void 0 !== i && (e += `${_}"${a(n)}":${b}${i}`, _ = r)
                            }
                            return w > o && (e += `${_}"...":${b}"${p(w-o)} not stringified"`, _ = r), "" !== g && _.length > 1 && (e = `\n${m}${e}\n${u}`), d.pop(), `{${e}}`
                        }
                        case "number":
                            return isFinite(v) ? String(v) : "null";
                        case "boolean":
                            return !0 === v ? "true" : "false";
                        case "bigint":
                            return r ? String(v) : void 0
                        }
                    }

                    function u(e, n, s, l, c, h) {
                        switch ("object" == typeof n && null !== n && "function" == typeof n.toJSON && (n = n.toJSON(e)), typeof n) {
                        case "string":
                            return `"${a(n)}"`;
                        case "object": {
                            if (null === n) return "null";
                            if (-1 !== s.indexOf(n)) return t;
                            const e = h;
                            let r = "",
                                d = ",";
                            if (Array.isArray(n)) {
                                if (0 === n.length) return "[]";
                                if (i < s.length + 1) return '"[Array]"';
                                s.push(n), "" !== c && (r += `\n${h+=c}`, d = `,\n${h}`);
                                const t = Math.min(n.length, o);
                                let a = 0;
                                for (; a < t - 1; a++) {
                                    const e = u(a, n[a], s, l, c, h);
                                    r += void 0 !== e ? e : "null", r += d
                                }
                                const f = u(a, n[a], s, l, c, h);
                                return r += void 0 !== f ? f : "null", n.length - 1 > o && (r += `${d}"... ${p(n.length-o-1)} not stringified"`), "" !== c && (r += `\n${e}`), s.pop(), `[${r}]`
                            }
                            if (0 === l.size) return "{}";
                            s.push(n);
                            let f = "";
                            "" !== c && (d = `,\n${h+=c}`, f = " ");
                            let g = "";
                            for (const e of l) {
                                const t = u(e, n[e], s, l, c, h);
                                void 0 !== t && (r += `${g}"${a(e)}":${f}${t}`, g = d)
                            }
                            return "" !== c && g.length > 1 && (r = `\n${h}${r}\n${e}`), s.pop(), `{${r}}`
                        }
                        case "number":
                            return isFinite(n) ? String(n) : "null";
                        case "boolean":
                            return !0 === n ? "true" : "false";
                        case "bigint":
                            return r ? String(n) : void 0
                        }
                    }

                    function g(e, s, u, d, f) {
                        switch (typeof s) {
                        case "string":
                            return `"${a(s)}"`;
                        case "object": {
                            if (null === s) return "null";
                            if ("function" == typeof s.toJSON) {
                                if ("object" != typeof (s = s.toJSON(e))) return g(e, s, u, d, f);
                                if (null === s) return "null"
                            }
                            if (-1 !== u.indexOf(s)) return t;
                            const r = f;
                            if (Array.isArray(s)) {
                                if (0 === s.length) return "[]";
                                if (i < u.length + 1) return '"[Array]"';
                                u.push(s);
                                let e = `\n${f+=d}`;
                                const t = `,\n${f}`,
                                    n = Math.min(s.length, o);
                                let a = 0;
                                for (; a < n - 1; a++) {
                                    const r = g(a, s[a], u, d, f);
                                    e += void 0 !== r ? r : "null", e += t
                                }
                                const l = g(a, s[a], u, d, f);
                                return e += void 0 !== l ? l : "null", s.length - 1 > o && (e += `${t}"... ${p(s.length-o-1)} not stringified"`), e += `\n${r}`, u.pop(), `[${e}]`
                            }
                            let m = Object.keys(s);
                            const v = m.length;
                            if (0 === v) return "{}";
                            if (i < u.length + 1) return '"[Object]"';
                            const y = `,\n${f+=d}`;
                            let w = "",
                                b = "",
                                _ = Math.min(v, o);
                            c(s) && (w += h(s, y, o), m = m.slice(s.length), _ -= s.length, b = y), n && (m = l(m)), u.push(s);
                            for (let e = 0; e < _; e++) {
                                const t = m[e],
                                    r = g(t, s[t], u, d, f);
                                void 0 !== r && (w += `${b}"${a(t)}": ${r}`, b = y)
                            }
                            return v > o && (w += `${b}"...": "${p(v-o)} not stringified"`, b = y), "" !== b && (w = `\n${f}${w}\n${r}`), u.pop(), `{${w}}`
                        }
                        case "number":
                            return isFinite(s) ? String(s) : "null";
                        case "boolean":
                            return !0 === s ? "true" : "false";
                        case "bigint":
                            return r ? String(s) : void 0
                        }
                    }

                    function m(e, s, u) {
                        switch (typeof s) {
                        case "string":
                            return `"${a(s)}"`;
                        case "object": {
                            if (null === s) return "null";
                            if ("function" == typeof s.toJSON) {
                                if ("object" != typeof (s = s.toJSON(e))) return m(e, s, u);
                                if (null === s) return "null"
                            }
                            if (-1 !== u.indexOf(s)) return t;
                            let r = "";
                            if (Array.isArray(s)) {
                                if (0 === s.length) return "[]";
                                if (i < u.length + 1) return '"[Array]"';
                                u.push(s);
                                const e = Math.min(s.length, o);
                                let t = 0;
                                for (; t < e - 1; t++) {
                                    const e = m(t, s[t], u);
                                    r += void 0 !== e ? e : "null", r += ","
                                }
                                const n = m(t, s[t], u);
                                return r += void 0 !== n ? n : "null", s.length - 1 > o && (r += `,"... ${p(s.length-o-1)} not stringified"`), u.pop(), `[${r}]`
                            }
                            let d = Object.keys(s);
                            const f = d.length;
                            if (0 === f) return "{}";
                            if (i < u.length + 1) return '"[Object]"';
                            let g = "",
                                v = Math.min(f, o);
                            c(s) && (r += h(s, ",", o), d = d.slice(s.length), v -= s.length, g = ","), n && (d = l(d)), u.push(s);
                            for (let e = 0; e < v; e++) {
                                const t = d[e],
                                    n = m(t, s[t], u);
                                void 0 !== n && (r += `${g}"${a(t)}":${n}`, g = ",")
                            }
                            return f > o && (r += `${g}"...":"${p(f-o)} not stringified"`), u.pop(), `{${r}}`
                        }
                        case "number":
                            return isFinite(s) ? String(s) : "null";
                        case "boolean":
                            return !0 === s ? "true" : "false";
                        case "bigint":
                            return r ? String(s) : void 0
                        }
                    }
                    return function (e, t, r) {
                        if (arguments.length > 1) {
                            let n = "";
                            if ("number" == typeof r ? n = " ".repeat(Math.min(r, 10)) : "string" == typeof r && (n = r.slice(0, 10)), null != t) {
                                if ("function" == typeof t) return s("", {
                                    "": e
                                }, [], t, n, "");
                                if (Array.isArray(t)) return u("", e, [], function (e) {
                                    const t = new Set;
                                    for (const r of e) "string" == typeof r ? t.add(r) : "number" == typeof r && t.add(String(r));
                                    return t
                                }(t), n, "")
                            }
                            if (0 !== n.length) return g("", e, [], n, "")
                        }
                        return m("", e, [])
                    }
                }
            },
            3657: (e, t) => {
                var r;
                t = e.exports = X, r = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    e.unshift("SEMVER"), console.log.apply(console, e)
                } : function () {}, t.SEMVER_SPEC_VERSION = "2.0.0";
                var n = 256,
                    i = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    o = n - 6,
                    s = t.re = [],
                    a = t.safeRe = [],
                    l = t.src = [],
                    u = 0,
                    c = "[a-zA-Z0-9-]",
                    h = [
                        ["\\s", 1],
                        ["\\d", n],
                        [c, o]
                    ];

                function d(e) {
                    for (var t = 0; t < h.length; t++) {
                        var r = h[t][0],
                            n = h[t][1];
                        e = e.split(r + "*").join(r + "{0," + n + "}").split(r + "+").join(r + "{1," + n + "}")
                    }
                    return e
                }
                var f = u++;
                l[f] = "0|[1-9]\\d*";
                var p = u++;
                l[p] = "\\d+";
                var g = u++;
                l[g] = "\\d*[a-zA-Z-]" + c + "*";
                var m = u++;
                l[m] = "(" + l[f] + ")\\.(" + l[f] + ")\\.(" + l[f] + ")";
                var v = u++;
                l[v] = "(" + l[p] + ")\\.(" + l[p] + ")\\.(" + l[p] + ")";
                var y = u++;
                l[y] = "(?:" + l[f] + "|" + l[g] + ")";
                var w = u++;
                l[w] = "(?:" + l[p] + "|" + l[g] + ")";
                var b = u++;
                l[b] = "(?:-(" + l[y] + "(?:\\." + l[y] + ")*))";
                var _ = u++;
                l[_] = "(?:-?(" + l[w] + "(?:\\." + l[w] + ")*))";
                var E = u++;
                l[E] = c + "+";
                var S = u++;
                l[S] = "(?:\\+(" + l[E] + "(?:\\." + l[E] + ")*))";
                var C = u++,
                    x = "v?" + l[m] + l[b] + "?" + l[S] + "?";
                l[C] = "^" + x + "$";
                var O = "[v=\\s]*" + l[v] + l[_] + "?" + l[S] + "?",
                    R = u++;
                l[R] = "^" + O + "$";
                var M = u++;
                l[M] = "((?:<|>)?=?)";
                var A = u++;
                l[A] = l[p] + "|x|X|\\*";
                var k = u++;
                l[k] = l[f] + "|x|X|\\*";
                var T = u++;
                l[T] = "[v=\\s]*(" + l[k] + ")(?:\\.(" + l[k] + ")(?:\\.(" + l[k] + ")(?:" + l[b] + ")?" + l[S] + "?)?)?";
                var L = u++;
                l[L] = "[v=\\s]*(" + l[A] + ")(?:\\.(" + l[A] + ")(?:\\.(" + l[A] + ")(?:" + l[_] + ")?" + l[S] + "?)?)?";
                var j = u++;
                l[j] = "^" + l[M] + "\\s*" + l[T] + "$";
                var N = u++;
                l[N] = "^" + l[M] + "\\s*" + l[L] + "$";
                var P = u++;
                l[P] = "(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
                var D = u++;
                l[D] = "(?:~>?)";
                var $ = u++;
                l[$] = "(\\s*)" + l[D] + "\\s+", s[$] = new RegExp(l[$], "g"), a[$] = new RegExp(d(l[$]), "g");
                var F = u++;
                l[F] = "^" + l[D] + l[T] + "$";
                var I = u++;
                l[I] = "^" + l[D] + l[L] + "$";
                var U = u++;
                l[U] = "(?:\\^)";
                var H = u++;
                l[H] = "(\\s*)" + l[U] + "\\s+", s[H] = new RegExp(l[H], "g"), a[H] = new RegExp(d(l[H]), "g");
                var B = u++;
                l[B] = "^" + l[U] + l[T] + "$";
                var q = u++;
                l[q] = "^" + l[U] + l[L] + "$";
                var z = u++;
                l[z] = "^" + l[M] + "\\s*(" + O + ")$|^$";
                var G = u++;
                l[G] = "^" + l[M] + "\\s*(" + x + ")$|^$";
                var W = u++;
                l[W] = "(\\s*)" + l[M] + "\\s*(" + O + "|" + l[T] + ")", s[W] = new RegExp(l[W], "g"), a[W] = new RegExp(d(l[W]), "g");
                var Y = u++;
                l[Y] = "^\\s*(" + l[T] + ")\\s+-\\s+(" + l[T] + ")\\s*$";
                var V = u++;
                l[V] = "^\\s*(" + l[L] + ")\\s+-\\s+(" + l[L] + ")\\s*$";
                var K = u++;
                l[K] = "(<|>)?=?\\s*\\*";
                for (var Z = 0; Z < 35; Z++) r(Z, l[Z]), s[Z] || (s[Z] = new RegExp(l[Z]), a[Z] = new RegExp(d(l[Z])));

                function J(e, t) {
                    if (t && "object" == typeof t || (t = {
                            loose: !!t,
                            includePrerelease: !1
                        }), e instanceof X) return e;
                    if ("string" != typeof e) return null;
                    if (e.length > n) return null;
                    if (!(t.loose ? a[R] : a[C]).test(e)) return null;
                    try {
                        return new X(e, t)
                    } catch (e) {
                        return null
                    }
                }

                function X(e, t) {
                    if (t && "object" == typeof t || (t = {
                            loose: !!t,
                            includePrerelease: !1
                        }), e instanceof X) {
                        if (e.loose === t.loose) return e;
                        e = e.version
                    } else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
                    if (e.length > n) throw new TypeError("version is longer than " + n + " characters");
                    if (!(this instanceof X)) return new X(e, t);
                    r("SemVer", e, t), this.options = t, this.loose = !!t.loose;
                    var o = e.trim().match(t.loose ? a[R] : a[C]);
                    if (!o) throw new TypeError("Invalid Version: " + e);
                    if (this.raw = e, this.major = +o[1], this.minor = +o[2], this.patch = +o[3], this.major > i || this.major < 0) throw new TypeError("Invalid major version");
                    if (this.minor > i || this.minor < 0) throw new TypeError("Invalid minor version");
                    if (this.patch > i || this.patch < 0) throw new TypeError("Invalid patch version");
                    o[4] ? this.prerelease = o[4].split(".").map((function (e) {
                        if (/^[0-9]+$/.test(e)) {
                            var t = +e;
                            if (t >= 0 && t < i) return t
                        }
                        return e
                    })) : this.prerelease = [], this.build = o[5] ? o[5].split(".") : [], this.format()
                }
                t.parse = J, t.valid = function (e, t) {
                    var r = J(e, t);
                    return r ? r.version : null
                }, t.clean = function (e, t) {
                    var r = J(e.trim().replace(/^[=v]+/, ""), t);
                    return r ? r.version : null
                }, t.SemVer = X, X.prototype.format = function () {
                    return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
                }, X.prototype.toString = function () {
                    return this.version
                }, X.prototype.compare = function (e) {
                    return r("SemVer.compare", this.version, this.options, e), e instanceof X || (e = new X(e, this.options)), this.compareMain(e) || this.comparePre(e)
                }, X.prototype.compareMain = function (e) {
                    return e instanceof X || (e = new X(e, this.options)), ee(this.major, e.major) || ee(this.minor, e.minor) || ee(this.patch, e.patch)
                }, X.prototype.comparePre = function (e) {
                    if (e instanceof X || (e = new X(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
                    if (!this.prerelease.length && e.prerelease.length) return 1;
                    if (!this.prerelease.length && !e.prerelease.length) return 0;
                    var t = 0;
                    do {
                        var n = this.prerelease[t],
                            i = e.prerelease[t];
                        if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
                        if (void 0 === i) return 1;
                        if (void 0 === n) return -1;
                        if (n !== i) return ee(n, i)
                    } while (++t)
                }, X.prototype.inc = function (e, t) {
                    switch (e) {
                    case "premajor":
                        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                        break;
                    case "preminor":
                        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                        break;
                    case "prepatch":
                        this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                        break;
                    case "prerelease":
                        0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                        break;
                    case "major":
                        0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                        break;
                    case "minor":
                        0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                        break;
                    case "patch":
                        0 === this.prerelease.length && this.patch++, this.prerelease = [];
                        break;
                    case "pre":
                        if (0 === this.prerelease.length) this.prerelease = [0];
                        else {
                            for (var r = this.prerelease.length; --r >= 0;) "number" == typeof this.prerelease[r] && (this.prerelease[r]++, r = -2); - 1 === r && this.prerelease.push(0)
                        }
                        t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                        break;
                    default:
                        throw new Error("invalid increment argument: " + e)
                    }
                    return this.format(), this.raw = this.version, this
                }, t.inc = function (e, t, r, n) {
                    "string" == typeof r && (n = r, r = void 0);
                    try {
                        return new X(e, r).inc(t, n).version
                    } catch (e) {
                        return null
                    }
                }, t.diff = function (e, t) {
                    if (ie(e, t)) return null;
                    var r = J(e),
                        n = J(t),
                        i = "";
                    if (r.prerelease.length || n.prerelease.length) {
                        i = "pre";
                        var o = "prerelease"
                    }
                    for (var s in r)
                        if (("major" === s || "minor" === s || "patch" === s) && r[s] !== n[s]) return i + s;
                    return o
                }, t.compareIdentifiers = ee;
                var Q = /^[0-9]+$/;

                function ee(e, t) {
                    var r = Q.test(e),
                        n = Q.test(t);
                    return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
                }

                function te(e, t, r) {
                    return new X(e, r).compare(new X(t, r))
                }

                function re(e, t, r) {
                    return te(e, t, r) > 0
                }

                function ne(e, t, r) {
                    return te(e, t, r) < 0
                }

                function ie(e, t, r) {
                    return 0 === te(e, t, r)
                }

                function oe(e, t, r) {
                    return 0 !== te(e, t, r)
                }

                function se(e, t, r) {
                    return te(e, t, r) >= 0
                }

                function ae(e, t, r) {
                    return te(e, t, r) <= 0
                }

                function le(e, t, r, n) {
                    switch (t) {
                    case "===":
                        return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e === r;
                    case "!==":
                        return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e !== r;
                    case "":
                    case "=":
                    case "==":
                        return ie(e, r, n);
                    case "!=":
                        return oe(e, r, n);
                    case ">":
                        return re(e, r, n);
                    case ">=":
                        return se(e, r, n);
                    case "<":
                        return ne(e, r, n);
                    case "<=":
                        return ae(e, r, n);
                    default:
                        throw new TypeError("Invalid operator: " + t)
                    }
                }

                function ue(e, t) {
                    if (t && "object" == typeof t || (t = {
                            loose: !!t,
                            includePrerelease: !1
                        }), e instanceof ue) {
                        if (e.loose === !!t.loose) return e;
                        e = e.value
                    }
                    if (!(this instanceof ue)) return new ue(e, t);
                    e = e.trim().split(/\s+/).join(" "), r("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === ce ? this.value = "" : this.value = this.operator + this.semver.version, r("comp", this)
                }
                t.rcompareIdentifiers = function (e, t) {
                    return ee(t, e)
                }, t.major = function (e, t) {
                    return new X(e, t).major
                }, t.minor = function (e, t) {
                    return new X(e, t).minor
                }, t.patch = function (e, t) {
                    return new X(e, t).patch
                }, t.compare = te, t.compareLoose = function (e, t) {
                    return te(e, t, !0)
                }, t.rcompare = function (e, t, r) {
                    return te(t, e, r)
                }, t.sort = function (e, r) {
                    return e.sort((function (e, n) {
                        return t.compare(e, n, r)
                    }))
                }, t.rsort = function (e, r) {
                    return e.sort((function (e, n) {
                        return t.rcompare(e, n, r)
                    }))
                }, t.gt = re, t.lt = ne, t.eq = ie, t.neq = oe, t.gte = se, t.lte = ae, t.cmp = le, t.Comparator = ue;
                var ce = {};

                function he(e, t) {
                    if (t && "object" == typeof t || (t = {
                            loose: !!t,
                            includePrerelease: !1
                        }), e instanceof he) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new he(e.raw, t);
                    if (e instanceof ue) return new he(e.value, t);
                    if (!(this instanceof he)) return new he(e, t);
                    if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map((function (e) {
                            return this.parseRange(e.trim())
                        }), this).filter((function (e) {
                            return e.length
                        })), !this.set.length) throw new TypeError("Invalid SemVer Range: " + this.raw);
                    this.format()
                }

                function de(e) {
                    return !e || "x" === e.toLowerCase() || "*" === e
                }

                function fe(e, t, r, n, i, o, s, a, l, u, c, h, d) {
                    return ((t = de(r) ? "" : de(n) ? ">=" + r + ".0.0" : de(i) ? ">=" + r + "." + n + ".0" : ">=" + t) + " " + (a = de(l) ? "" : de(u) ? "<" + (+l + 1) + ".0.0" : de(c) ? "<" + l + "." + (+u + 1) + ".0" : h ? "<=" + l + "." + u + "." + c + "-" + h : "<=" + a)).trim()
                }

                function pe(e, t, n) {
                    for (var i = 0; i < e.length; i++)
                        if (!e[i].test(t)) return !1;
                    if (t.prerelease.length && !n.includePrerelease) {
                        for (i = 0; i < e.length; i++)
                            if (r(e[i].semver), e[i].semver !== ce && e[i].semver.prerelease.length > 0) {
                                var o = e[i].semver;
                                if (o.major === t.major && o.minor === t.minor && o.patch === t.patch) return !0
                            } return !1
                    }
                    return !0
                }

                function ge(e, t, r) {
                    try {
                        t = new he(t, r)
                    } catch (e) {
                        return !1
                    }
                    return t.test(e)
                }

                function me(e, t, r, n) {
                    var i, o, s, a, l;
                    switch (e = new X(e, n), t = new he(t, n), r) {
                    case ">":
                        i = re, o = ae, s = ne, a = ">", l = ">=";
                        break;
                    case "<":
                        i = ne, o = se, s = re, a = "<", l = "<=";
                        break;
                    default:
                        throw new TypeError('Must provide a hilo val of "<" or ">"')
                    }
                    if (ge(e, t, n)) return !1;
                    for (var u = 0; u < t.set.length; ++u) {
                        var c = t.set[u],
                            h = null,
                            d = null;
                        if (c.forEach((function (e) {
                                e.semver === ce && (e = new ue(">=0.0.0")), h = h || e, d = d || e, i(e.semver, h.semver, n) ? h = e : s(e.semver, d.semver, n) && (d = e)
                            })), h.operator === a || h.operator === l) return !1;
                        if ((!d.operator || d.operator === a) && o(e, d.semver)) return !1;
                        if (d.operator === l && s(e, d.semver)) return !1
                    }
                    return !0
                }
                ue.prototype.parse = function (e) {
                    var t = this.options.loose ? a[z] : a[G],
                        r = e.match(t);
                    if (!r) throw new TypeError("Invalid comparator: " + e);
                    this.operator = r[1], "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new X(r[2], this.options.loose) : this.semver = ce
                }, ue.prototype.toString = function () {
                    return this.value
                }, ue.prototype.test = function (e) {
                    return r("Comparator.test", e, this.options.loose), this.semver === ce || ("string" == typeof e && (e = new X(e, this.options)), le(e, this.operator, this.semver, this.options))
                }, ue.prototype.intersects = function (e, t) {
                    if (!(e instanceof ue)) throw new TypeError("a Comparator is required");
                    var r;
                    if (t && "object" == typeof t || (t = {
                            loose: !!t,
                            includePrerelease: !1
                        }), "" === this.operator) return r = new he(e.value, t), ge(this.value, r, t);
                    if ("" === e.operator) return r = new he(this.value, t), ge(e.semver, r, t);
                    var n = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e.operator),
                        i = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e.operator),
                        o = this.semver.version === e.semver.version,
                        s = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e.operator),
                        a = le(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
                        l = le(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
                    return n || i || o && s || a || l
                }, t.Range = he, he.prototype.format = function () {
                    return this.range = this.set.map((function (e) {
                        return e.join(" ").trim()
                    })).join("||").trim(), this.range
                }, he.prototype.toString = function () {
                    return this.range
                }, he.prototype.parseRange = function (e) {
                    var t = this.options.loose,
                        n = t ? a[V] : a[Y];
                    e = e.replace(n, fe), r("hyphen replace", e), e = e.replace(a[W], "$1$2$3"), r("comparator trim", e, a[W]), e = (e = e.replace(a[$], "$1~")).replace(a[H], "$1^");
                    var i = t ? a[z] : a[G],
                        o = e.split(" ").map((function (e) {
                            return function (e, t) {
                                return r("comp", e, t), e = function (e, t) {
                                    return e.trim().split(/\s+/).map((function (e) {
                                        return function (e, t) {
                                            r("caret", e, t);
                                            var n = t.loose ? a[q] : a[B];
                                            return e.replace(n, (function (t, n, i, o, s) {
                                                var a;
                                                return r("caret", e, t, n, i, o, s), de(n) ? a = "" : de(i) ? a = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : de(o) ? a = "0" === n ? ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + ".0 <" + (+n + 1) + ".0.0" : s ? (r("replaceCaret pr", s), a = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + o + "-" + s + " <" + n + "." + i + "." + (+o + 1) : ">=" + n + "." + i + "." + o + "-" + s + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + o + "-" + s + " <" + (+n + 1) + ".0.0") : (r("no pr"), a = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + o + " <" + n + "." + i + "." + (+o + 1) : ">=" + n + "." + i + "." + o + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + o + " <" + (+n + 1) + ".0.0"), r("caret return", a), a
                                            }))
                                        }(e, t)
                                    })).join(" ")
                                }(e, t), r("caret", e), e = function (e, t) {
                                    return e.trim().split(/\s+/).map((function (e) {
                                        return function (e, t) {
                                            var n = t.loose ? a[I] : a[F];
                                            return e.replace(n, (function (t, n, i, o, s) {
                                                var a;
                                                return r("tilde", e, t, n, i, o, s), de(n) ? a = "" : de(i) ? a = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : de(o) ? a = ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : s ? (r("replaceTilde pr", s), a = ">=" + n + "." + i + "." + o + "-" + s + " <" + n + "." + (+i + 1) + ".0") : a = ">=" + n + "." + i + "." + o + " <" + n + "." + (+i + 1) + ".0", r("tilde return", a), a
                                            }))
                                        }(e, t)
                                    })).join(" ")
                                }(e, t), r("tildes", e), e = function (e, t) {
                                    return r("replaceXRanges", e, t), e.split(/\s+/).map((function (e) {
                                        return function (e, t) {
                                            e = e.trim();
                                            var n = t.loose ? a[N] : a[j];
                                            return e.replace(n, (function (t, n, i, o, s, a) {
                                                r("xRange", e, t, n, i, o, s, a);
                                                var l = de(i),
                                                    u = l || de(o),
                                                    c = u || de(s);
                                                return "=" === n && c && (n = ""), l ? t = ">" === n || "<" === n ? "<0.0.0" : "*" : n && c ? (u && (o = 0), s = 0, ">" === n ? (n = ">=", u ? (i = +i + 1, o = 0, s = 0) : (o = +o + 1, s = 0)) : "<=" === n && (n = "<", u ? i = +i + 1 : o = +o + 1), t = n + i + "." + o + "." + s) : u ? t = ">=" + i + ".0.0 <" + (+i + 1) + ".0.0" : c && (t = ">=" + i + "." + o + ".0 <" + i + "." + (+o + 1) + ".0"), r("xRange return", t), t
                                            }))
                                        }(e, t)
                                    })).join(" ")
                                }(e, t), r("xrange", e), e = function (e, t) {
                                    return r("replaceStars", e, t), e.trim().replace(a[K], "")
                                }(e, t), r("stars", e), e
                            }(e, this.options)
                        }), this).join(" ").split(/\s+/);
                    return this.options.loose && (o = o.filter((function (e) {
                        return !!e.match(i)
                    }))), o.map((function (e) {
                        return new ue(e, this.options)
                    }), this)
                }, he.prototype.intersects = function (e, t) {
                    if (!(e instanceof he)) throw new TypeError("a Range is required");
                    return this.set.some((function (r) {
                        return r.every((function (r) {
                            return e.set.some((function (e) {
                                return e.every((function (e) {
                                    return r.intersects(e, t)
                                }))
                            }))
                        }))
                    }))
                }, t.toComparators = function (e, t) {
                    return new he(e, t).set.map((function (e) {
                        return e.map((function (e) {
                            return e.value
                        })).join(" ").trim().split(" ")
                    }))
                }, he.prototype.test = function (e) {
                    if (!e) return !1;
                    "string" == typeof e && (e = new X(e, this.options));
                    for (var t = 0; t < this.set.length; t++)
                        if (pe(this.set[t], e, this.options)) return !0;
                    return !1
                }, t.satisfies = ge, t.maxSatisfying = function (e, t, r) {
                    var n = null,
                        i = null;
                    try {
                        var o = new he(t, r)
                    } catch (e) {
                        return null
                    }
                    return e.forEach((function (e) {
                        o.test(e) && (n && -1 !== i.compare(e) || (i = new X(n = e, r)))
                    })), n
                }, t.minSatisfying = function (e, t, r) {
                    var n = null,
                        i = null;
                    try {
                        var o = new he(t, r)
                    } catch (e) {
                        return null
                    }
                    return e.forEach((function (e) {
                        o.test(e) && (n && 1 !== i.compare(e) || (i = new X(n = e, r)))
                    })), n
                }, t.minVersion = function (e, t) {
                    e = new he(e, t);
                    var r = new X("0.0.0");
                    if (e.test(r)) return r;
                    if (r = new X("0.0.0-0"), e.test(r)) return r;
                    r = null;
                    for (var n = 0; n < e.set.length; ++n) e.set[n].forEach((function (e) {
                        var t = new X(e.semver.version);
                        switch (e.operator) {
                        case ">":
                            0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                        case "":
                        case ">=":
                            r && !re(r, t) || (r = t);
                            break;
                        case "<":
                        case "<=":
                            break;
                        default:
                            throw new Error("Unexpected operation: " + e.operator)
                        }
                    }));
                    return r && e.test(r) ? r : null
                }, t.validRange = function (e, t) {
                    try {
                        return new he(e, t).range || "*"
                    } catch (e) {
                        return null
                    }
                }, t.ltr = function (e, t, r) {
                    return me(e, t, "<", r)
                }, t.gtr = function (e, t, r) {
                    return me(e, t, ">", r)
                }, t.outside = me, t.prerelease = function (e, t) {
                    var r = J(e, t);
                    return r && r.prerelease.length ? r.prerelease : null
                }, t.intersects = function (e, t, r) {
                    return e = new he(e, r), t = new he(t, r), e.intersects(t)
                }, t.coerce = function (e) {
                    if (e instanceof X) return e;
                    if ("string" != typeof e) return null;
                    var t = e.match(a[P]);
                    return null == t ? null : J(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"))
                }
            },
            2593: (e, t, r) => {
                var n, i = r(8089).SourceMapConsumer,
                    o = r(6928);
                try {
                    (n = r(9896)).existsSync && n.readFileSync || (n = null)
                } catch (e) {}
                var s = !1,
                    a = !1,
                    l = !1,
                    u = "auto",
                    c = {},
                    h = {},
                    d = /^data:application\/json[^,]+base64,/,
                    f = [],
                    p = [];

                function g() {
                    return "browser" === u || "node" !== u && "undefined" != typeof window && "function" == typeof XMLHttpRequest && !(window.require && window.module && window.process && "renderer" === window.process.type)
                }

                function m(e) {
                    return function (t) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r](t);
                            if (n) return n
                        }
                        return null
                    }
                }
                var v = m(f);

                function y(e, t) {
                    if (!e) return t;
                    var r = o.dirname(e),
                        n = /^\w+:\/\/[^\/]*/.exec(r),
                        i = n ? n[0] : "";
                    return i + o.resolve(r.slice(i.length), t)
                }
                f.push((function (e) {
                    if ((e = e.trim()) in c) return c[e];
                    var t = null;
                    if (n) {
                        if (n.existsSync(e)) try {
                            t = n.readFileSync(e, "utf8")
                        } catch (e) {
                            t = ""
                        }
                    } else {
                        var r = new XMLHttpRequest;
                        r.open("GET", e, !1), r.send(null), t = null, 4 === r.readyState && 200 === r.status && (t = r.responseText)
                    }
                    return c[e] = t
                }));
                var w = m(p);

                function b(e) {
                    var t = h[e.source];
                    if (!t) {
                        var r = w(e.source);
                        r ? (t = h[e.source] = {
                            url: r.url,
                            map: new i(r.map)
                        }).map.sourcesContent && t.map.sources.forEach((function (e, r) {
                            var n = t.map.sourcesContent[r];
                            if (n) {
                                var i = y(t.url, e);
                                c[i] = n
                            }
                        })) : t = h[e.source] = {
                            url: null,
                            map: null
                        }
                    }
                    if (t && t.map) {
                        var n = t.map.originalPositionFor(e);
                        if (null !== n.source) return n.source = y(t.url, n.source), n
                    }
                    return e
                }

                function _(e) {
                    var t = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(e);
                    if (t) {
                        var r = b({
                            source: t[2],
                            line: +t[3],
                            column: t[4] - 1
                        });
                        return "eval at " + t[1] + " (" + r.source + ":" + r.line + ":" + (r.column + 1) + ")"
                    }
                    return (t = /^eval at ([^(]+) \((.+)\)$/.exec(e)) ? "eval at " + t[1] + " (" + _(t[2]) + ")" : e
                }

                function E() {
                    var e, t = "";
                    if (this.isNative()) t = "native";
                    else {
                        !(e = this.getScriptNameOrSourceURL()) && this.isEval() && (t = this.getEvalOrigin(), t += ", "), t += e || "<anonymous>";
                        var r = this.getLineNumber();
                        if (null != r) {
                            t += ":" + r;
                            var n = this.getColumnNumber();
                            n && (t += ":" + n)
                        }
                    }
                    var i = "",
                        o = this.getFunctionName(),
                        s = !0,
                        a = this.isConstructor();
                    if (this.isToplevel() || a) a ? i += "new " + (o || "<anonymous>") : o ? i += o : (i += t, s = !1);
                    else {
                        var l = this.getTypeName();
                        "[object Object]" === l && (l = "null");
                        var u = this.getMethodName();
                        o ? (l && 0 != o.indexOf(l) && (i += l + "."), i += o, u && o.indexOf("." + u) != o.length - u.length - 1 && (i += " [as " + u + "]")) : i += l + "." + (u || "<anonymous>")
                    }
                    return s && (i += " (" + t + ")"), i
                }

                function S(e) {
                    var t = {};
                    return Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function (r) {
                        t[r] = /^(?:is|get)/.test(r) ? function () {
                            return e[r].call(e)
                        } : e[r]
                    })), t.toString = E, t
                }

                function C(e) {
                    if (e.isNative()) return e;
                    var t = e.getFileName() || e.getScriptNameOrSourceURL();
                    if (t) {
                        var r = e.getLineNumber(),
                            n = e.getColumnNumber() - 1;
                        1 === r && n > 62 && !g() && !e.isEval() && (n -= 62);
                        var i = b({
                            source: t,
                            line: r,
                            column: n
                        });
                        return (e = S(e)).getFileName = function () {
                            return i.source
                        }, e.getLineNumber = function () {
                            return i.line
                        }, e.getColumnNumber = function () {
                            return i.column + 1
                        }, e.getScriptNameOrSourceURL = function () {
                            return i.source
                        }, e
                    }
                    var o = e.isEval() && e.getEvalOrigin();
                    return o ? (o = _(o), (e = S(e)).getEvalOrigin = function () {
                        return o
                    }, e) : e
                }

                function x(e, t) {
                    return l && (c = {}, h = {}), e + t.map((function (e) {
                        return "\n    at " + C(e)
                    })).join("")
                }

                function O(e) {
                    var t = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(e.stack);
                    if (t) {
                        var r = t[1],
                            i = +t[2],
                            o = +t[3],
                            s = c[r];
                        if (!s && n && n.existsSync(r)) try {
                            s = n.readFileSync(r, "utf8")
                        } catch (e) {
                            s = ""
                        }
                        if (s) {
                            var a = s.split(/(?:\r\n|\r|\n)/)[i - 1];
                            if (a) return r + ":" + i + "\n" + a + "\n" + new Array(o).join(" ") + "^"
                        }
                    }
                    return null
                }
                p.push((function (e) {
                    var t, r = function (e) {
                        var t;
                        if (g()) try {
                            var r = new XMLHttpRequest;
                            r.open("GET", e, !1), r.send(null), t = 4 === r.readyState ? r.responseText : null;
                            var n = r.getResponseHeader("SourceMap") || r.getResponseHeader("X-SourceMap");
                            if (n) return n
                        } catch (e) {}
                        t = v(e);
                        for (var i, o, s = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/)[ \t]*$)/gm; o = s.exec(t);) i = o;
                        return i ? i[1] : null
                    }(e);
                    if (!r) return null;
                    if (d.test(r)) {
                        var n = r.slice(r.indexOf(",") + 1);
                        t = new Buffer(n, "base64").toString(), r = e
                    } else r = y(e, r), t = v(r);
                    return t ? {
                        url: r,
                        map: t
                    } : null
                })), t.wrapCallSite = C, t.getErrorSource = O, t.mapSourcePosition = b, t.retrieveSourceMap = w, t.install = function (e) {
                    if ((e = e || {}).environment && (u = e.environment, -1 === ["node", "browser", "auto"].indexOf(u))) throw new Error("environment " + u + " was unknown. Available options are {auto, browser, node}");
                    if (e.retrieveFile && (e.overrideRetrieveFile && (f.length = 0), f.unshift(e.retrieveFile)), e.retrieveSourceMap && (e.overrideRetrieveSourceMap && (p.length = 0), p.unshift(e.retrieveSourceMap)), e.hookRequire && !g()) {
                        var t;
                        try {
                            t = r(3339)
                        } catch (e) {}
                        var n = t.prototype._compile;
                        n.__sourceMapSupport || (t.prototype._compile = function (e, t) {
                            return c[t] = e, h[t] = void 0, n.call(this, e, t)
                        }, t.prototype._compile.__sourceMapSupport = !0)
                    }
                    var i;
                    l || (l = "emptyCacheBetweenOperations" in e && e.emptyCacheBetweenOperations), s || (s = !0, Error.prepareStackTrace = x), a || (!("handleUncaughtExceptions" in e) || e.handleUncaughtExceptions) && "object" == typeof process && null !== process && "function" == typeof process.on && (a = !0, i = process.emit, process.emit = function (e) {
                        if ("uncaughtException" === e) {
                            var t = arguments[1] && arguments[1].stack,
                                r = this.listeners(e).length > 0;
                            if (t && !r) return (o = O(n = arguments[1])) && (console.error(), console.error(o)), console.error(n.stack), void process.exit(1)
                        }
                        var n, o;
                        return i.apply(this, arguments)
                    })
                }
            },
            4407: (e, t, r) => {
                var n = r(5251),
                    i = Object.prototype.hasOwnProperty,
                    o = "undefined" != typeof Map;

                function s() {
                    this._array = [], this._set = o ? new Map : Object.create(null)
                }
                s.fromArray = function (e, t) {
                    for (var r = new s, n = 0, i = e.length; n < i; n++) r.add(e[n], t);
                    return r
                }, s.prototype.size = function () {
                    return o ? this._set.size : Object.getOwnPropertyNames(this._set).length
                }, s.prototype.add = function (e, t) {
                    var r = o ? e : n.toSetString(e),
                        s = o ? this.has(e) : i.call(this._set, r),
                        a = this._array.length;
                    s && !t || this._array.push(e), s || (o ? this._set.set(e, a) : this._set[r] = a)
                }, s.prototype.has = function (e) {
                    if (o) return this._set.has(e);
                    var t = n.toSetString(e);
                    return i.call(this._set, t)
                }, s.prototype.indexOf = function (e) {
                    if (o) {
                        var t = this._set.get(e);
                        if (t >= 0) return t
                    } else {
                        var r = n.toSetString(e);
                        if (i.call(this._set, r)) return this._set[r]
                    }
                    throw new Error('"' + e + '" is not in the set.')
                }, s.prototype.at = function (e) {
                    if (e >= 0 && e < this._array.length) return this._array[e];
                    throw new Error("No element indexed by " + e)
                }, s.prototype.toArray = function () {
                    return this._array.slice()
                }, t.C = s
            },
            6044: (e, t, r) => {
                var n = r(5220);
                t.encode = function (e) {
                    var t, r = "",
                        i = function (e) {
                            return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
                        }(e);
                    do {
                        t = 31 & i, (i >>>= 5) > 0 && (t |= 32), r += n.encode(t)
                    } while (i > 0);
                    return r
                }, t.decode = function (e, t, r) {
                    var i, o, s, a, l = e.length,
                        u = 0,
                        c = 0;
                    do {
                        if (t >= l) throw new Error("Expected more digits in base 64 VLQ value.");
                        if (-1 === (o = n.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
                        i = !!(32 & o), u += (o &= 31) << c, c += 5
                    } while (i);
                    r.value = (a = (s = u) >> 1, 1 & ~s ? a : -a), r.rest = t
                }
            },
            5220: (e, t) => {
                var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                t.encode = function (e) {
                    if (0 <= e && e < r.length) return r[e];
                    throw new TypeError("Must be between 0 and 63: " + e)
                }, t.decode = function (e) {
                    return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
                }
            },
            2272: (e, t) => {
                function r(e, n, i, o, s, a) {
                    var l = Math.floor((n - e) / 2) + e,
                        u = s(i, o[l], !0);
                    return 0 === u ? l : u > 0 ? n - l > 1 ? r(l, n, i, o, s, a) : a == t.LEAST_UPPER_BOUND ? n < o.length ? n : -1 : l : l - e > 1 ? r(e, l, i, o, s, a) : a == t.LEAST_UPPER_BOUND ? l : e < 0 ? -1 : e
                }
                t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function (e, n, i, o) {
                    if (0 === n.length) return -1;
                    var s = r(-1, n.length, e, n, i, o || t.GREATEST_LOWER_BOUND);
                    if (s < 0) return -1;
                    for (; s - 1 >= 0 && 0 === i(n[s], n[s - 1], !0);) --s;
                    return s
                }
            },
            8846: (e, t, r) => {
                var n = r(5251);

                function i() {
                    this._array = [], this._sorted = !0, this._last = {
                        generatedLine: -1,
                        generatedColumn: 0
                    }
                }
                i.prototype.unsortedForEach = function (e, t) {
                    this._array.forEach(e, t)
                }, i.prototype.add = function (e) {
                    var t, r, i, o, s, a;
                    r = e, i = (t = this._last).generatedLine, o = r.generatedLine, s = t.generatedColumn, a = r.generatedColumn, o > i || o == i && a >= s || n.compareByGeneratedPositionsInflated(t, r) <= 0 ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e))
                }, i.prototype.toArray = function () {
                    return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
                }, t.P = i
            },
            8817: (e, t) => {
                function r(e, t, r) {
                    var n = e[t];
                    e[t] = e[r], e[r] = n
                }

                function n(e, t, i, o) {
                    if (i < o) {
                        var s = i - 1;
                        r(e, (c = i, h = o, Math.round(c + Math.random() * (h - c))), o);
                        for (var a = e[o], l = i; l < o; l++) t(e[l], a) <= 0 && r(e, s += 1, l);
                        r(e, s + 1, l);
                        var u = s + 1;
                        n(e, t, i, u - 1), n(e, t, u + 1, o)
                    }
                    var c, h
                }
                t.g = function (e, t) {
                    n(e, t, 0, e.length - 1)
                }
            },
            9710: (e, t, r) => {
                var n = r(5251),
                    i = r(2272),
                    o = r(4407).C,
                    s = r(6044),
                    a = r(8817).g;

                function l(e) {
                    var t = e;
                    return "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))), null != t.sections ? new h(t) : new u(t)
                }

                function u(e) {
                    var t = e;
                    "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                    var r = n.getArg(t, "version"),
                        i = n.getArg(t, "sources"),
                        s = n.getArg(t, "names", []),
                        a = n.getArg(t, "sourceRoot", null),
                        l = n.getArg(t, "sourcesContent", null),
                        u = n.getArg(t, "mappings"),
                        c = n.getArg(t, "file", null);
                    if (r != this._version) throw new Error("Unsupported version: " + r);
                    i = i.map(String).map(n.normalize).map((function (e) {
                        return a && n.isAbsolute(a) && n.isAbsolute(e) ? n.relative(a, e) : e
                    })), this._names = o.fromArray(s.map(String), !0), this._sources = o.fromArray(i, !0), this.sourceRoot = a, this.sourcesContent = l, this._mappings = u, this.file = c
                }

                function c() {
                    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
                }

                function h(e) {
                    var t = e;
                    "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
                    var r = n.getArg(t, "version"),
                        i = n.getArg(t, "sections");
                    if (r != this._version) throw new Error("Unsupported version: " + r);
                    this._sources = new o, this._names = new o;
                    var s = {
                        line: -1,
                        column: 0
                    };
                    this._sections = i.map((function (e) {
                        if (e.url) throw new Error("Support for url field in sections not implemented.");
                        var t = n.getArg(e, "offset"),
                            r = n.getArg(t, "line"),
                            i = n.getArg(t, "column");
                        if (r < s.line || r === s.line && i < s.column) throw new Error("Section offsets must be ordered and non-overlapping.");
                        return s = t, {
                            generatedOffset: {
                                generatedLine: r + 1,
                                generatedColumn: i + 1
                            },
                            consumer: new l(n.getArg(e, "map"))
                        }
                    }))
                }
                l.fromSourceMap = function (e) {
                    return u.fromSourceMap(e)
                }, l.prototype._version = 3, l.prototype.__generatedMappings = null, Object.defineProperty(l.prototype, "_generatedMappings", {
                    get: function () {
                        return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
                    }
                }), l.prototype.__originalMappings = null, Object.defineProperty(l.prototype, "_originalMappings", {
                    get: function () {
                        return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
                    }
                }), l.prototype._charIsMappingSeparator = function (e, t) {
                    var r = e.charAt(t);
                    return ";" === r || "," === r
                }, l.prototype._parseMappings = function (e, t) {
                    throw new Error("Subclasses must implement _parseMappings")
                }, l.GENERATED_ORDER = 1, l.ORIGINAL_ORDER = 2, l.GREATEST_LOWER_BOUND = 1, l.LEAST_UPPER_BOUND = 2, l.prototype.eachMapping = function (e, t, r) {
                    var i, o = t || null;
                    switch (r || l.GENERATED_ORDER) {
                    case l.GENERATED_ORDER:
                        i = this._generatedMappings;
                        break;
                    case l.ORIGINAL_ORDER:
                        i = this._originalMappings;
                        break;
                    default:
                        throw new Error("Unknown order of iteration.")
                    }
                    var s = this.sourceRoot;
                    i.map((function (e) {
                        var t = null === e.source ? null : this._sources.at(e.source);
                        return null != t && null != s && (t = n.join(s, t)), {
                            source: t,
                            generatedLine: e.generatedLine,
                            generatedColumn: e.generatedColumn,
                            originalLine: e.originalLine,
                            originalColumn: e.originalColumn,
                            name: null === e.name ? null : this._names.at(e.name)
                        }
                    }), this).forEach(e, o)
                }, l.prototype.allGeneratedPositionsFor = function (e) {
                    var t = n.getArg(e, "line"),
                        r = {
                            source: n.getArg(e, "source"),
                            originalLine: t,
                            originalColumn: n.getArg(e, "column", 0)
                        };
                    if (null != this.sourceRoot && (r.source = n.relative(this.sourceRoot, r.source)), !this._sources.has(r.source)) return [];
                    r.source = this._sources.indexOf(r.source);
                    var o = [],
                        s = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, i.LEAST_UPPER_BOUND);
                    if (s >= 0) {
                        var a = this._originalMappings[s];
                        if (void 0 === e.column)
                            for (var l = a.originalLine; a && a.originalLine === l;) o.push({
                                line: n.getArg(a, "generatedLine", null),
                                column: n.getArg(a, "generatedColumn", null),
                                lastColumn: n.getArg(a, "lastGeneratedColumn", null)
                            }), a = this._originalMappings[++s];
                        else
                            for (var u = a.originalColumn; a && a.originalLine === t && a.originalColumn == u;) o.push({
                                line: n.getArg(a, "generatedLine", null),
                                column: n.getArg(a, "generatedColumn", null),
                                lastColumn: n.getArg(a, "lastGeneratedColumn", null)
                            }), a = this._originalMappings[++s]
                    }
                    return o
                }, t.SourceMapConsumer = l, u.prototype = Object.create(l.prototype), u.prototype.consumer = l, u.fromSourceMap = function (e) {
                    var t = Object.create(u.prototype),
                        r = t._names = o.fromArray(e._names.toArray(), !0),
                        i = t._sources = o.fromArray(e._sources.toArray(), !0);
                    t.sourceRoot = e._sourceRoot, t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file;
                    for (var s = e._mappings.toArray().slice(), l = t.__generatedMappings = [], h = t.__originalMappings = [], d = 0, f = s.length; d < f; d++) {
                        var p = s[d],
                            g = new c;
                        g.generatedLine = p.generatedLine, g.generatedColumn = p.generatedColumn, p.source && (g.source = i.indexOf(p.source), g.originalLine = p.originalLine, g.originalColumn = p.originalColumn, p.name && (g.name = r.indexOf(p.name)), h.push(g)), l.push(g)
                    }
                    return a(t.__originalMappings, n.compareByOriginalPositions), t
                }, u.prototype._version = 3, Object.defineProperty(u.prototype, "sources", {
                    get: function () {
                        return this._sources.toArray().map((function (e) {
                            return null != this.sourceRoot ? n.join(this.sourceRoot, e) : e
                        }), this)
                    }
                }), u.prototype._parseMappings = function (e, t) {
                    for (var r, i, o, l, u, h = 1, d = 0, f = 0, p = 0, g = 0, m = 0, v = e.length, y = 0, w = {}, b = {}, _ = [], E = []; y < v;)
                        if (";" === e.charAt(y)) h++, y++, d = 0;
                        else if ("," === e.charAt(y)) y++;
                    else {
                        for ((r = new c).generatedLine = h, l = y; l < v && !this._charIsMappingSeparator(e, l); l++);
                        if (o = w[i = e.slice(y, l)]) y += i.length;
                        else {
                            for (o = []; y < l;) s.decode(e, y, b), u = b.value, y = b.rest, o.push(u);
                            if (2 === o.length) throw new Error("Found a source, but no line and column");
                            if (3 === o.length) throw new Error("Found a source and line, but no column");
                            w[i] = o
                        }
                        r.generatedColumn = d + o[0], d = r.generatedColumn, o.length > 1 && (r.source = g + o[1], g += o[1], r.originalLine = f + o[2], f = r.originalLine, r.originalLine += 1, r.originalColumn = p + o[3], p = r.originalColumn, o.length > 4 && (r.name = m + o[4], m += o[4])), E.push(r), "number" == typeof r.originalLine && _.push(r)
                    }
                    a(E, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = E, a(_, n.compareByOriginalPositions), this.__originalMappings = _
                }, u.prototype._findMapping = function (e, t, r, n, o, s) {
                    if (e[r] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);
                    if (e[n] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[n]);
                    return i.search(e, t, o, s)
                }, u.prototype.computeColumnSpans = function () {
                    for (var e = 0; e < this._generatedMappings.length; ++e) {
                        var t = this._generatedMappings[e];
                        if (e + 1 < this._generatedMappings.length) {
                            var r = this._generatedMappings[e + 1];
                            if (t.generatedLine === r.generatedLine) {
                                t.lastGeneratedColumn = r.generatedColumn - 1;
                                continue
                            }
                        }
                        t.lastGeneratedColumn = 1 / 0
                    }
                }, u.prototype.originalPositionFor = function (e) {
                    var t = {
                            generatedLine: n.getArg(e, "line"),
                            generatedColumn: n.getArg(e, "column")
                        },
                        r = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", n.compareByGeneratedPositionsDeflated, n.getArg(e, "bias", l.GREATEST_LOWER_BOUND));
                    if (r >= 0) {
                        var i = this._generatedMappings[r];
                        if (i.generatedLine === t.generatedLine) {
                            var o = n.getArg(i, "source", null);
                            null !== o && (o = this._sources.at(o), null != this.sourceRoot && (o = n.join(this.sourceRoot, o)));
                            var s = n.getArg(i, "name", null);
                            return null !== s && (s = this._names.at(s)), {
                                source: o,
                                line: n.getArg(i, "originalLine", null),
                                column: n.getArg(i, "originalColumn", null),
                                name: s
                            }
                        }
                    }
                    return {
                        source: null,
                        line: null,
                        column: null,
                        name: null
                    }
                }, u.prototype.hasContentsOfAllSources = function () {
                    return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some((function (e) {
                        return null == e
                    }))
                }, u.prototype.sourceContentFor = function (e, t) {
                    if (!this.sourcesContent) return null;
                    if (null != this.sourceRoot && (e = n.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
                    var r;
                    if (null != this.sourceRoot && (r = n.urlParse(this.sourceRoot))) {
                        var i = e.replace(/^file:\/\//, "");
                        if ("file" == r.scheme && this._sources.has(i)) return this.sourcesContent[this._sources.indexOf(i)];
                        if ((!r.path || "/" == r.path) && this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)]
                    }
                    if (t) return null;
                    throw new Error('"' + e + '" is not in the SourceMap.')
                }, u.prototype.generatedPositionFor = function (e) {
                    var t = n.getArg(e, "source");
                    if (null != this.sourceRoot && (t = n.relative(this.sourceRoot, t)), !this._sources.has(t)) return {
                        line: null,
                        column: null,
                        lastColumn: null
                    };
                    var r = {
                            source: t = this._sources.indexOf(t),
                            originalLine: n.getArg(e, "line"),
                            originalColumn: n.getArg(e, "column")
                        },
                        i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", n.compareByOriginalPositions, n.getArg(e, "bias", l.GREATEST_LOWER_BOUND));
                    if (i >= 0) {
                        var o = this._originalMappings[i];
                        if (o.source === r.source) return {
                            line: n.getArg(o, "generatedLine", null),
                            column: n.getArg(o, "generatedColumn", null),
                            lastColumn: n.getArg(o, "lastGeneratedColumn", null)
                        }
                    }
                    return {
                        line: null,
                        column: null,
                        lastColumn: null
                    }
                }, h.prototype = Object.create(l.prototype), h.prototype.constructor = l, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
                    get: function () {
                        for (var e = [], t = 0; t < this._sections.length; t++)
                            for (var r = 0; r < this._sections[t].consumer.sources.length; r++) e.push(this._sections[t].consumer.sources[r]);
                        return e
                    }
                }), h.prototype.originalPositionFor = function (e) {
                    var t = {
                            generatedLine: n.getArg(e, "line"),
                            generatedColumn: n.getArg(e, "column")
                        },
                        r = i.search(t, this._sections, (function (e, t) {
                            return e.generatedLine - t.generatedOffset.generatedLine || e.generatedColumn - t.generatedOffset.generatedColumn
                        })),
                        o = this._sections[r];
                    return o ? o.consumer.originalPositionFor({
                        line: t.generatedLine - (o.generatedOffset.generatedLine - 1),
                        column: t.generatedColumn - (o.generatedOffset.generatedLine === t.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
                        bias: e.bias
                    }) : {
                        source: null,
                        line: null,
                        column: null,
                        name: null
                    }
                }, h.prototype.hasContentsOfAllSources = function () {
                    return this._sections.every((function (e) {
                        return e.consumer.hasContentsOfAllSources()
                    }))
                }, h.prototype.sourceContentFor = function (e, t) {
                    for (var r = 0; r < this._sections.length; r++) {
                        var n = this._sections[r].consumer.sourceContentFor(e, !0);
                        if (n) return n
                    }
                    if (t) return null;
                    throw new Error('"' + e + '" is not in the SourceMap.')
                }, h.prototype.generatedPositionFor = function (e) {
                    for (var t = 0; t < this._sections.length; t++) {
                        var r = this._sections[t];
                        if (-1 !== r.consumer.sources.indexOf(n.getArg(e, "source"))) {
                            var i = r.consumer.generatedPositionFor(e);
                            if (i) return {
                                line: i.line + (r.generatedOffset.generatedLine - 1),
                                column: i.column + (r.generatedOffset.generatedLine === i.line ? r.generatedOffset.generatedColumn - 1 : 0)
                            }
                        }
                    }
                    return {
                        line: null,
                        column: null
                    }
                }, h.prototype._parseMappings = function (e, t) {
                    this.__generatedMappings = [], this.__originalMappings = [];
                    for (var r = 0; r < this._sections.length; r++)
                        for (var i = this._sections[r], o = i.consumer._generatedMappings, s = 0; s < o.length; s++) {
                            var l = o[s],
                                u = i.consumer._sources.at(l.source);
                            null !== i.consumer.sourceRoot && (u = n.join(i.consumer.sourceRoot, u)), this._sources.add(u), u = this._sources.indexOf(u);
                            var c = i.consumer._names.at(l.name);
                            this._names.add(c), c = this._names.indexOf(c);
                            var h = {
                                source: u,
                                generatedLine: l.generatedLine + (i.generatedOffset.generatedLine - 1),
                                generatedColumn: l.generatedColumn + (i.generatedOffset.generatedLine === l.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
                                originalLine: l.originalLine,
                                originalColumn: l.originalColumn,
                                name: c
                            };
                            this.__generatedMappings.push(h), "number" == typeof h.originalLine && this.__originalMappings.push(h)
                        }
                    a(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), a(this.__originalMappings, n.compareByOriginalPositions)
                }
            },
            6545: (e, t, r) => {
                var n = r(6044),
                    i = r(5251),
                    o = r(4407).C,
                    s = r(8846).P;

                function a(e) {
                    e || (e = {}), this._file = i.getArg(e, "file", null), this._sourceRoot = i.getArg(e, "sourceRoot", null), this._skipValidation = i.getArg(e, "skipValidation", !1), this._sources = new o, this._names = new o, this._mappings = new s, this._sourcesContents = null
                }
                a.prototype._version = 3, a.fromSourceMap = function (e) {
                    var t = e.sourceRoot,
                        r = new a({
                            file: e.file,
                            sourceRoot: t
                        });
                    return e.eachMapping((function (e) {
                        var n = {
                            generated: {
                                line: e.generatedLine,
                                column: e.generatedColumn
                            }
                        };
                        null != e.source && (n.source = e.source, null != t && (n.source = i.relative(t, n.source)), n.original = {
                            line: e.originalLine,
                            column: e.originalColumn
                        }, null != e.name && (n.name = e.name)), r.addMapping(n)
                    })), e.sources.forEach((function (t) {
                        var n = e.sourceContentFor(t);
                        null != n && r.setSourceContent(t, n)
                    })), r
                }, a.prototype.addMapping = function (e) {
                    var t = i.getArg(e, "generated"),
                        r = i.getArg(e, "original", null),
                        n = i.getArg(e, "source", null),
                        o = i.getArg(e, "name", null);
                    this._skipValidation || this._validateMapping(t, r, n, o), null != n && (n = String(n), this._sources.has(n) || this._sources.add(n)), null != o && (o = String(o), this._names.has(o) || this._names.add(o)), this._mappings.add({
                        generatedLine: t.line,
                        generatedColumn: t.column,
                        originalLine: null != r && r.line,
                        originalColumn: null != r && r.column,
                        source: n,
                        name: o
                    })
                }, a.prototype.setSourceContent = function (e, t) {
                    var r = e;
                    null != this._sourceRoot && (r = i.relative(this._sourceRoot, r)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[i.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[i.toSetString(r)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
                }, a.prototype.applySourceMap = function (e, t, r) {
                    var n = t;
                    if (null == t) {
                        if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
                        n = e.file
                    }
                    var s = this._sourceRoot;
                    null != s && (n = i.relative(s, n));
                    var a = new o,
                        l = new o;
                    this._mappings.unsortedForEach((function (t) {
                        if (t.source === n && null != t.originalLine) {
                            var o = e.originalPositionFor({
                                line: t.originalLine,
                                column: t.originalColumn
                            });
                            null != o.source && (t.source = o.source, null != r && (t.source = i.join(r, t.source)), null != s && (t.source = i.relative(s, t.source)), t.originalLine = o.line, t.originalColumn = o.column, null != o.name && (t.name = o.name))
                        }
                        var u = t.source;
                        null == u || a.has(u) || a.add(u);
                        var c = t.name;
                        null == c || l.has(c) || l.add(c)
                    }), this), this._sources = a, this._names = l, e.sources.forEach((function (t) {
                        var n = e.sourceContentFor(t);
                        null != n && (null != r && (t = i.join(r, t)), null != s && (t = i.relative(s, t)), this.setSourceContent(t, n))
                    }), this)
                }, a.prototype._validateMapping = function (e, t, r, n) {
                    if (t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
                    if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || r || n) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r)) throw new Error("Invalid mapping: " + JSON.stringify({
                        generated: e,
                        source: r,
                        original: t,
                        name: n
                    }))
                }, a.prototype._serializeMappings = function () {
                    for (var e, t, r, o, s = 0, a = 1, l = 0, u = 0, c = 0, h = 0, d = "", f = this._mappings.toArray(), p = 0, g = f.length; p < g; p++) {
                        if (e = "", (t = f[p]).generatedLine !== a)
                            for (s = 0; t.generatedLine !== a;) e += ";", a++;
                        else if (p > 0) {
                            if (!i.compareByGeneratedPositionsInflated(t, f[p - 1])) continue;
                            e += ","
                        }
                        e += n.encode(t.generatedColumn - s), s = t.generatedColumn, null != t.source && (o = this._sources.indexOf(t.source), e += n.encode(o - h), h = o, e += n.encode(t.originalLine - 1 - u), u = t.originalLine - 1, e += n.encode(t.originalColumn - l), l = t.originalColumn, null != t.name && (r = this._names.indexOf(t.name), e += n.encode(r - c), c = r)), d += e
                    }
                    return d
                }, a.prototype._generateSourcesContent = function (e, t) {
                    return e.map((function (e) {
                        if (!this._sourcesContents) return null;
                        null != t && (e = i.relative(t, e));
                        var r = i.toSetString(e);
                        return Object.prototype.hasOwnProperty.call(this._sourcesContents, r) ? this._sourcesContents[r] : null
                    }), this)
                }, a.prototype.toJSON = function () {
                    var e = {
                        version: this._version,
                        sources: this._sources.toArray(),
                        names: this._names.toArray(),
                        mappings: this._serializeMappings()
                    };
                    return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e
                }, a.prototype.toString = function () {
                    return JSON.stringify(this.toJSON())
                }, t.x = a
            },
            8299: (e, t, r) => {
                var n = r(6545).x,
                    i = r(5251),
                    o = /(\r?\n)/,
                    s = "$$$isSourceNode$$$";

                function a(e, t, r, n, i) {
                    this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == r ? null : r, this.name = null == i ? null : i, this[s] = !0, null != n && this.add(n)
                }
                a.fromStringWithSourceMap = function (e, t, r) {
                    var n = new a,
                        s = e.split(o),
                        l = 0,
                        u = function () {
                            return e() + (e() || "");

                            function e() {
                                return l < s.length ? s[l++] : void 0
                            }
                        },
                        c = 1,
                        h = 0,
                        d = null;
                    return t.eachMapping((function (e) {
                        if (null !== d) {
                            if (!(c < e.generatedLine)) {
                                var t = (r = s[l]).substr(0, e.generatedColumn - h);
                                return s[l] = r.substr(e.generatedColumn - h), h = e.generatedColumn, f(d, t), void(d = e)
                            }
                            f(d, u()), c++, h = 0
                        }
                        for (; c < e.generatedLine;) n.add(u()), c++;
                        if (h < e.generatedColumn) {
                            var r = s[l];
                            n.add(r.substr(0, e.generatedColumn)), s[l] = r.substr(e.generatedColumn), h = e.generatedColumn
                        }
                        d = e
                    }), this), l < s.length && (d && f(d, u()), n.add(s.splice(l).join(""))), t.sources.forEach((function (e) {
                        var o = t.sourceContentFor(e);
                        null != o && (null != r && (e = i.join(r, e)), n.setSourceContent(e, o))
                    })), n;

                    function f(e, t) {
                        if (null === e || void 0 === e.source) n.add(t);
                        else {
                            var o = r ? i.join(r, e.source) : e.source;
                            n.add(new a(e.originalLine, e.originalColumn, o, t, e.name))
                        }
                    }
                }, a.prototype.add = function (e) {
                    if (Array.isArray(e)) e.forEach((function (e) {
                        this.add(e)
                    }), this);
                    else {
                        if (!e[s] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                        e && this.children.push(e)
                    }
                    return this
                }, a.prototype.prepend = function (e) {
                    if (Array.isArray(e))
                        for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]);
                    else {
                        if (!e[s] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
                        this.children.unshift(e)
                    }
                    return this
                }, a.prototype.walk = function (e) {
                    for (var t, r = 0, n = this.children.length; r < n; r++)(t = this.children[r])[s] ? t.walk(e) : "" !== t && e(t, {
                        source: this.source,
                        line: this.line,
                        column: this.column,
                        name: this.name
                    })
                }, a.prototype.join = function (e) {
                    var t, r, n = this.children.length;
                    if (n > 0) {
                        for (t = [], r = 0; r < n - 1; r++) t.push(this.children[r]), t.push(e);
                        t.push(this.children[r]), this.children = t
                    }
                    return this
                }, a.prototype.replaceRight = function (e, t) {
                    var r = this.children[this.children.length - 1];
                    return r[s] ? r.replaceRight(e, t) : "string" == typeof r ? this.children[this.children.length - 1] = r.replace(e, t) : this.children.push("".replace(e, t)), this
                }, a.prototype.setSourceContent = function (e, t) {
                    this.sourceContents[i.toSetString(e)] = t
                }, a.prototype.walkSourceContents = function (e) {
                    for (var t = 0, r = this.children.length; t < r; t++) this.children[t][s] && this.children[t].walkSourceContents(e);
                    var n = Object.keys(this.sourceContents);
                    for (t = 0, r = n.length; t < r; t++) e(i.fromSetString(n[t]), this.sourceContents[n[t]])
                }, a.prototype.toString = function () {
                    var e = "";
                    return this.walk((function (t) {
                        e += t
                    })), e
                }, a.prototype.toStringWithSourceMap = function (e) {
                    var t = {
                            code: "",
                            line: 1,
                            column: 0
                        },
                        r = new n(e),
                        i = !1,
                        o = null,
                        s = null,
                        a = null,
                        l = null;
                    return this.walk((function (e, n) {
                        t.code += e, null !== n.source && null !== n.line && null !== n.column ? (o === n.source && s === n.line && a === n.column && l === n.name || r.addMapping({
                            source: n.source,
                            original: {
                                line: n.line,
                                column: n.column
                            },
                            generated: {
                                line: t.line,
                                column: t.column
                            },
                            name: n.name
                        }), o = n.source, s = n.line, a = n.column, l = n.name, i = !0) : i && (r.addMapping({
                            generated: {
                                line: t.line,
                                column: t.column
                            }
                        }), o = null, i = !1);
                        for (var u = 0, c = e.length; u < c; u++) 10 === e.charCodeAt(u) ? (t.line++, t.column = 0, u + 1 === c ? (o = null, i = !1) : i && r.addMapping({
                            source: n.source,
                            original: {
                                line: n.line,
                                column: n.column
                            },
                            generated: {
                                line: t.line,
                                column: t.column
                            },
                            name: n.name
                        })) : t.column++
                    })), this.walkSourceContents((function (e, t) {
                        r.setSourceContent(e, t)
                    })), {
                        code: t.code,
                        map: r
                    }
                }
            },
            5251: (e, t) => {
                t.getArg = function (e, t, r) {
                    if (t in e) return e[t];
                    if (3 === arguments.length) return r;
                    throw new Error('"' + t + '" is a required argument.')
                };
                var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
                    n = /^data:.+\,.+$/;

                function i(e) {
                    var t = e.match(r);
                    return t ? {
                        scheme: t[1],
                        auth: t[2],
                        host: t[3],
                        port: t[4],
                        path: t[5]
                    } : null
                }

                function o(e) {
                    var t = "";
                    return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t
                }

                function s(e) {
                    var r = e,
                        n = i(e);
                    if (n) {
                        if (!n.path) return e;
                        r = n.path
                    }
                    for (var s, a = t.isAbsolute(r), l = r.split(/\/+/), u = 0, c = l.length - 1; c >= 0; c--) "." === (s = l[c]) ? l.splice(c, 1) : ".." === s ? u++ : u > 0 && ("" === s ? (l.splice(c + 1, u), u = 0) : (l.splice(c, 2), u--));
                    return "" === (r = l.join("/")) && (r = a ? "/" : "."), n ? (n.path = r, o(n)) : r
                }
                t.urlParse = i, t.urlGenerate = o, t.normalize = s, t.join = function (e, t) {
                    "" === e && (e = "."), "" === t && (t = ".");
                    var r = i(t),
                        a = i(e);
                    if (a && (e = a.path || "/"), r && !r.scheme) return a && (r.scheme = a.scheme), o(r);
                    if (r || t.match(n)) return t;
                    if (a && !a.host && !a.path) return a.host = t, o(a);
                    var l = "/" === t.charAt(0) ? t : s(e.replace(/\/+$/, "") + "/" + t);
                    return a ? (a.path = l, o(a)) : l
                }, t.isAbsolute = function (e) {
                    return "/" === e.charAt(0) || !!e.match(r)
                }, t.relative = function (e, t) {
                    "" === e && (e = "."), e = e.replace(/\/$/, "");
                    for (var r = 0; 0 !== t.indexOf(e + "/");) {
                        var n = e.lastIndexOf("/");
                        if (n < 0) return t;
                        if ((e = e.slice(0, n)).match(/^([^\/]+:\/)?\/*$/)) return t;
                        ++r
                    }
                    return Array(r + 1).join("../") + t.substr(e.length + 1)
                };
                var a = !("__proto__" in Object.create(null));

                function l(e) {
                    return e
                }

                function u(e) {
                    if (!e) return !1;
                    var t = e.length;
                    if (t < 9) return !1;
                    if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
                    for (var r = t - 10; r >= 0; r--)
                        if (36 !== e.charCodeAt(r)) return !1;
                    return !0
                }

                function c(e, t) {
                    return e === t ? 0 : e > t ? 1 : -1
                }
                t.toSetString = a ? l : function (e) {
                    return u(e) ? "$" + e : e
                }, t.fromSetString = a ? l : function (e) {
                    return u(e) ? e.slice(1) : e
                }, t.compareByOriginalPositions = function (e, t, r) {
                    var n = e.source - t.source;
                    return 0 !== n || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) || r || 0 != (n = e.generatedColumn - t.generatedColumn) || 0 != (n = e.generatedLine - t.generatedLine) ? n : e.name - t.name
                }, t.compareByGeneratedPositionsDeflated = function (e, t, r) {
                    var n = e.generatedLine - t.generatedLine;
                    return 0 !== n || 0 != (n = e.generatedColumn - t.generatedColumn) || r || 0 != (n = e.source - t.source) || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) ? n : e.name - t.name
                }, t.compareByGeneratedPositionsInflated = function (e, t) {
                    var r = e.generatedLine - t.generatedLine;
                    return 0 !== r || 0 != (r = e.generatedColumn - t.generatedColumn) || 0 !== (r = c(e.source, t.source)) || 0 != (r = e.originalLine - t.originalLine) || 0 != (r = e.originalColumn - t.originalColumn) ? r : c(e.name, t.name)
                }
            },
            8089: (e, t, r) => {
                r(6545).x, t.SourceMapConsumer = r(9710).SourceMapConsumer, r(8299)
            },
            575: (e, t) => {
                function r(e) {
                    for (var t in e) this[t] = e[t]
                }
                t.get = function (e) {
                    var r = Error.stackTraceLimit;
                    Error.stackTraceLimit = 1 / 0;
                    var n = {},
                        i = Error.prepareStackTrace;
                    Error.prepareStackTrace = function (e, t) {
                        return t
                    }, Error.captureStackTrace(n, e || t.get);
                    var o = n.stack;
                    return Error.prepareStackTrace = i, Error.stackTraceLimit = r, o
                }, t.parse = function (e) {
                    if (!e.stack) return [];
                    var t = this;
                    return e.stack.split("\n").slice(1).map((function (e) {
                        if (e.match(/^\s*[-]{4,}$/)) return t._createParsedCallSite({
                            fileName: e,
                            lineNumber: null,
                            functionName: null,
                            typeName: null,
                            methodName: null,
                            columnNumber: null,
                            native: null
                        });
                        var r = e.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
                        if (r) {
                            var n = null,
                                i = null,
                                o = null,
                                s = null,
                                a = null,
                                l = "native" === r[5];
                            if (r[1]) {
                                var u = (o = r[1]).lastIndexOf(".");
                                if ("." == o[u - 1] && u--, u > 0) {
                                    n = o.substr(0, u), i = o.substr(u + 1);
                                    var c = n.indexOf(".Module");
                                    c > 0 && (o = o.substr(c + 1), n = n.substr(0, c))
                                }
                                s = null
                            }
                            i && (s = n, a = i), "<anonymous>" === i && (a = null, o = null);
                            var h = {
                                fileName: r[2] || null,
                                lineNumber: parseInt(r[3], 10) || null,
                                functionName: o,
                                typeName: s,
                                methodName: a,
                                columnNumber: parseInt(r[4], 10) || null,
                                native: l
                            };
                            return t._createParsedCallSite(h)
                        }
                    })).filter((function (e) {
                        return !!e
                    }))
                }, ["this", "typeName", "functionName", "methodName", "fileName", "lineNumber", "columnNumber", "function", "evalOrigin"].forEach((function (e) {
                    r.prototype[e] = null, r.prototype["get" + e[0].toUpperCase() + e.substr(1)] = function () {
                        return this[e]
                    }
                })), ["topLevel", "eval", "native", "constructor"].forEach((function (e) {
                    r.prototype[e] = !1, r.prototype["is" + e[0].toUpperCase() + e.substr(1)] = function () {
                        return this[e]
                    }
                })), t._createParsedCallSite = function (e) {
                    return new r(e)
                }
            },
            7117: (e, t, r) => {
                "use strict";
                var n = r(5283).Buffer,
                    i = n.isEncoding || function (e) {
                        switch ((e = "" + e) && e.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                        }
                    };

                function o(e) {
                    var t;
                    switch (this.encoding = function (e) {
                        var t = function (e) {
                            if (!e) return "utf8";
                            for (var t;;) switch (e) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return e;
                            default:
                                if (t) return;
                                e = ("" + e).toLowerCase(), t = !0
                            }
                        }(e);
                        if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                        return t || e
                    }(e), this.encoding) {
                    case "utf16le":
                        this.text = l, this.end = u, t = 4;
                        break;
                    case "utf8":
                        this.fillLast = a, t = 4;
                        break;
                    case "base64":
                        this.text = c, this.end = h, t = 3;
                        break;
                    default:
                        return this.write = d, void(this.end = f)
                    }
                    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
                }

                function s(e) {
                    return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
                }

                function a(e) {
                    var t = this.lastTotal - this.lastNeed,
                        r = function (e, t) {
                            if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                            if (e.lastNeed > 1 && t.length > 1) {
                                if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                            }
                        }(this, e);
                    return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
                }

                function l(e, t) {
                    if ((e.length - t) % 2 == 0) {
                        var r = e.toString("utf16le", t);
                        if (r) {
                            var n = r.charCodeAt(r.length - 1);
                            if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                        }
                        return r
                    }
                    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
                }

                function u(e) {
                    var t = e && e.length ? this.write(e) : "";
                    if (this.lastNeed) {
                        var r = this.lastTotal - this.lastNeed;
                        return t + this.lastChar.toString("utf16le", 0, r)
                    }
                    return t
                }

                function c(e, t) {
                    var r = (e.length - t) % 3;
                    return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
                }

                function h(e) {
                    var t = e && e.length ? this.write(e) : "";
                    return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
                }

                function d(e) {
                    return e.toString(this.encoding)
                }

                function f(e) {
                    return e && e.length ? this.write(e) : ""
                }
                t.I = o, o.prototype.write = function (e) {
                    if (0 === e.length) return "";
                    var t, r;
                    if (this.lastNeed) {
                        if (void 0 === (t = this.fillLast(e))) return "";
                        r = this.lastNeed, this.lastNeed = 0
                    } else r = 0;
                    return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
                }, o.prototype.end = function (e) {
                    var t = e && e.length ? this.write(e) : "";
                    return this.lastNeed ? t + "�" : t
                }, o.prototype.text = function (e, t) {
                    var r = function (e, t, r) {
                        var n = t.length - 1;
                        if (n < r) return 0;
                        var i = s(t[n]);
                        return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || -2 === i ? 0 : (i = s(t[n])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || -2 === i ? 0 : (i = s(t[n])) >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0
                    }(this, e, t);
                    if (!this.lastNeed) return e.toString("utf8", t);
                    this.lastTotal = r;
                    var n = e.length - (r - this.lastNeed);
                    return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
                }, o.prototype.fillLast = function (e) {
                    if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
                }
            },
            5283: (e, t, r) => {
                var n = r(181),
                    i = n.Buffer;

                function o(e, t) {
                    for (var r in e) t[r] = e[r]
                }

                function s(e, t, r) {
                    return i(e, t, r)
                }
                i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function (e, t, r) {
                    if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                    return i(e, t, r)
                }, s.alloc = function (e, t, r) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    var n = i(e);
                    return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
                }, s.allocUnsafe = function (e) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    return i(e)
                }, s.allocUnsafeSlow = function (e) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    return n.SlowBuffer(e)
                }
            },
            2196: (e, t) => {
                "use strict";
                t.levels = {
                    error: 0,
                    warn: 1,
                    help: 2,
                    data: 3,
                    info: 4,
                    debug: 5,
                    prompt: 6,
                    verbose: 7,
                    input: 8,
                    silly: 9
                }, t.colors = {
                    error: "red",
                    warn: "yellow",
                    help: "cyan",
                    data: "grey",
                    info: "green",
                    debug: "blue",
                    prompt: "grey",
                    verbose: "cyan",
                    input: "grey",
                    silly: "magenta"
                }
            },
            7906: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "cli", {
                    value: r(2196)
                }), Object.defineProperty(t, "npm", {
                    value: r(5375)
                }), Object.defineProperty(t, "syslog", {
                    value: r(1493)
                })
            },
            5375: (e, t) => {
                "use strict";
                t.levels = {
                    error: 0,
                    warn: 1,
                    info: 2,
                    http: 3,
                    verbose: 4,
                    debug: 5,
                    silly: 6
                }, t.colors = {
                    error: "red",
                    warn: "yellow",
                    info: "green",
                    http: "green",
                    verbose: "cyan",
                    debug: "blue",
                    silly: "magenta"
                }
            },
            1493: (e, t) => {
                "use strict";
                t.levels = {
                    emerg: 0,
                    alert: 1,
                    crit: 2,
                    error: 3,
                    warning: 4,
                    notice: 5,
                    info: 6,
                    debug: 7
                }, t.colors = {
                    emerg: "red",
                    alert: "yellow",
                    crit: "red",
                    error: "red",
                    warning: "red",
                    notice: "yellow",
                    info: "green",
                    debug: "blue"
                }
            },
            835: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "LEVEL", {
                    value: Symbol.for("level")
                }), Object.defineProperty(t, "MESSAGE", {
                    value: Symbol.for("message")
                }), Object.defineProperty(t, "SPLAT", {
                    value: Symbol.for("splat")
                }), Object.defineProperty(t, "configs", {
                    value: r(7906)
                })
            },
            3303: (e, t, r) => {
                e.exports = r(9023).deprecate
            },
            8751: e => {
                for (var t = [], r = 0; r < 256; ++r) t[r] = (r + 256).toString(16).substr(1);
                e.exports = function (e, r) {
                    var n = r || 0,
                        i = t;
                    return i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]]
                }
            },
            6431: (e, t, r) => {
                var n = r(6982).randomBytes;
                e.exports = function () {
                    return n(16)
                }
            },
            8030: (e, t, r) => {
                var n = r(6431),
                    i = r(8751);
                e.exports = function (e, t, r) {
                    var o = t && r || 0;
                    "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
                    var s = (e = e || {}).random || (e.rng || n)();
                    if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t)
                        for (var a = 0; a < 16; ++a) t[o + a] = s[a];
                    return t || i(s)
                }
            },
            6351: (e, t, r) => {
                "use strict";
                const n = r(9023),
                    i = r(9276),
                    {
                        LEVEL: o
                    } = r(835),
                    s = e.exports = function (e = {}) {
                        i.call(this, {
                            objectMode: !0,
                            highWaterMark: e.highWaterMark
                        }), this.format = e.format, this.level = e.level, this.handleExceptions = e.handleExceptions, this.handleRejections = e.handleRejections, this.silent = e.silent, e.log && (this.log = e.log), e.logv && (this.logv = e.logv), e.close && (this.close = e.close), this.once("pipe", (e => {
                            this.levels = e.levels, this.parent = e
                        })), this.once("unpipe", (e => {
                            e === this.parent && (this.parent = null, this.close && this.close())
                        }))
                    };
                n.inherits(s, i), s.prototype._write = function (e, t, r) {
                    if (this.silent || !0 === e.exception && !this.handleExceptions) return r(null);
                    const n = this.level || this.parent && this.parent.level;
                    if (!n || this.levels[n] >= this.levels[e[o]]) {
                        if (e && !this.format) return this.log(e, r);
                        let t, n;
                        try {
                            n = this.format.transform(Object.assign({}, e), this.format.options)
                        } catch (e) {
                            t = e
                        }
                        if (t || !n) {
                            if (r(), t) throw t;
                            return
                        }
                        return this.log(n, r)
                    }
                    return this._writableState.sync = !1, r(null)
                }, s.prototype._writev = function (e, t) {
                    if (this.logv) {
                        const r = e.filter(this._accept, this);
                        return r.length ? this.logv(r, t) : t(null)
                    }
                    for (let r = 0; r < e.length; r++) {
                        if (!this._accept(e[r])) continue;
                        if (e[r].chunk && !this.format) {
                            this.log(e[r].chunk, e[r].callback);
                            continue
                        }
                        let n, i;
                        try {
                            i = this.format.transform(Object.assign({}, e[r].chunk), this.format.options)
                        } catch (e) {
                            n = e
                        }
                        if (n || !i) {
                            if (e[r].callback(), n) throw t(null), n
                        } else this.log(i, e[r].callback)
                    }
                    return t(null)
                }, s.prototype._accept = function (e) {
                    const t = e.chunk;
                    if (this.silent) return !1;
                    const r = this.level || this.parent && this.parent.level;
                    return !(!0 !== t.exception && r && !(this.levels[r] >= this.levels[t[o]]) || !this.handleExceptions && !0 === t.exception)
                }, s.prototype._nop = function () {}, e.exports.LegacyTransportStream = r(4760)
            },
            4760: (e, t, r) => {
                "use strict";
                const n = r(9023),
                    {
                        LEVEL: i
                    } = r(835),
                    o = r(6351),
                    s = e.exports = function (e = {}) {
                        if (o.call(this, e), !e.transport || "function" != typeof e.transport.log) throw new Error("Invalid transport, must be an object with a log method.");
                        this.transport = e.transport, this.level = this.level || e.transport.level, this.handleExceptions = this.handleExceptions || e.transport.handleExceptions, this._deprecated(), this.transport.__winstonError || (this.transport.__winstonError = function (e) {
                            this.emit("error", e, this.transport)
                        }.bind(this), this.transport.on("error", this.transport.__winstonError))
                    };
                n.inherits(s, o), s.prototype._write = function (e, t, r) {
                    if (this.silent || !0 === e.exception && !this.handleExceptions) return r(null);
                    (!this.level || this.levels[this.level] >= this.levels[e[i]]) && this.transport.log(e[i], e.message, e, this._nop), r(null)
                }, s.prototype._writev = function (e, t) {
                    for (let t = 0; t < e.length; t++) this._accept(e[t]) && (this.transport.log(e[t].chunk[i], e[t].chunk.message, e[t].chunk, this._nop), e[t].callback());
                    return t(null)
                }, s.prototype._deprecated = function () {
                    console.error([`${this.transport.name} is a legacy winston transport. Consider upgrading: `, "- Upgrade docs: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md"].join("\n"))
                }, s.prototype.close = function () {
                    this.transport.close && this.transport.close(), this.transport.__winstonError && (this.transport.removeListener("error", this.transport.__winstonError), this.transport.__winstonError = null)
                }
            },
            2275: (e, t, r) => {
                "use strict";
                const n = r(2671),
                    {
                        warn: i
                    } = r(3639);
                t.version = r(296).version, t.transports = r(2171), t.config = r(4279), t.addColors = n.levels, t.format = n.format, t.createLogger = r(7351), t.ExceptionHandler = r(8096), t.RejectionHandler = r(8318), t.Container = r(5811), t.Transport = r(6351), t.loggers = new t.Container;
                const o = t.createLogger();
                Object.keys(t.config.npm.levels).concat(["log", "query", "stream", "add", "remove", "clear", "profile", "startTimer", "handleExceptions", "unhandleExceptions", "handleRejections", "unhandleRejections", "configure", "child"]).forEach((e => t[e] = (...t) => o[e](...t))), Object.defineProperty(t, "level", {
                    get: () => o.level,
                    set(e) {
                        o.level = e
                    }
                }), Object.defineProperty(t, "exceptions", {
                    get: () => o.exceptions
                }), ["exitOnError"].forEach((e => {
                    Object.defineProperty(t, e, {
                        get: () => o[e],
                        set(t) {
                            o[e] = t
                        }
                    })
                })), Object.defineProperty(t, "default", {
                    get: () => ({
                        exceptionHandlers: o.exceptionHandlers,
                        rejectionHandlers: o.rejectionHandlers,
                        transports: o.transports
                    })
                }), i.deprecated(t, "setLevels"), i.forFunctions(t, "useFormat", ["cli"]), i.forProperties(t, "useFormat", ["padLevels", "stripColors"]), i.forFunctions(t, "deprecated", ["addRewriter", "addFilter", "clone", "extend"]), i.forProperties(t, "deprecated", ["emitErrs", "levelLength"]), i.moved(t, "createLogger", "Logger")
            },
            3639: (e, t, r) => {
                "use strict";
                const {
                    format: n
                } = r(9023);
                t.warn = {
                    deprecated: e => () => {
                        throw new Error(n("{ %s } was removed in winston@3.0.0.", e))
                    },
                    useFormat: e => () => {
                        throw new Error([n("{ %s } was removed in winston@3.0.0.", e), "Use a custom winston.format = winston.format(function) instead."].join("\n"))
                    },
                    forFunctions(e, r, n) {
                        n.forEach((n => {
                            e[n] = t.warn[r](n)
                        }))
                    },
                    moved(e, t, r) {
                        function i() {
                            return () => {
                                throw new Error([n("winston.%s was moved in winston@3.0.0.", r), n("Use a winston.%s instead.", t)].join("\n"))
                            }
                        }
                        Object.defineProperty(e, r, {
                            get: i,
                            set: i
                        })
                    },
                    forProperties(e, r, n) {
                        n.forEach((n => {
                            const i = t.warn[r](n);
                            Object.defineProperty(e, n, {
                                get: i,
                                set: i
                            })
                        }))
                    }
                }
            },
            4279: (e, t, r) => {
                "use strict";
                const n = r(2671),
                    {
                        configs: i
                    } = r(835);
                t.cli = n.levels(i.cli), t.npm = n.levels(i.npm), t.syslog = n.levels(i.syslog), t.addColors = n.levels
            },
            5811: (e, t, r) => {
                "use strict";
                const n = r(7351);
                e.exports = class {
                    constructor(e = {}) {
                        this.loggers = new Map, this.options = e
                    }
                    add(e, t) {
                        if (!this.loggers.has(e)) {
                            const r = (t = Object.assign({}, t || this.options)).transports || this.options.transports;
                            t.transports = r ? r.slice() : [];
                            const i = n(t);
                            i.on("close", (() => this._delete(e))), this.loggers.set(e, i)
                        }
                        return this.loggers.get(e)
                    }
                    get(e, t) {
                        return this.add(e, t)
                    }
                    has(e) {
                        return !!this.loggers.has(e)
                    }
                    close(e) {
                        if (e) return this._removeLogger(e);
                        this.loggers.forEach(((e, t) => this._removeLogger(t)))
                    }
                    _removeLogger(e) {
                        this.loggers.has(e) && (this.loggers.get(e).close(), this._delete(e))
                    }
                    _delete(e) {
                        this.loggers.delete(e)
                    }
                }
            },
            7351: (e, t, r) => {
                "use strict";
                const {
                    LEVEL: n
                } = r(835), i = r(4279), o = r(418), s = r(7206)("winston:create-logger");
                e.exports = function (e = {}) {
                    e.levels = e.levels || i.npm.levels;
                    class t extends o {
                        constructor(e) {
                            super(e)
                        }
                    }
                    const r = new t(e);
                    return Object.keys(e.levels).forEach((function (e) {
                        s('Define prototype method for "%s"', e), "log" !== e ? (t.prototype[e] = function (...t) {
                            const i = this || r;
                            if (1 === t.length) {
                                const [o] = t, s = o && o.message && o || {
                                    message: o
                                };
                                return s.level = s[n] = e, i._addDefaultMeta(s), i.write(s), this || r
                            }
                            return 0 === t.length ? (i.log(e, ""), i) : i.log(e, ...t)
                        }, t.prototype[function (e) {
                            return "is" + e.charAt(0).toUpperCase() + e.slice(1) + "Enabled"
                        }(e)] = function () {
                            return (this || r).isLevelEnabled(e)
                        }) : console.warn('Level "log" not defined: conflicts with the method "log". Use a different level name.')
                    })), r
                }
            },
            8096: (e, t, r) => {
                "use strict";
                const n = r(857),
                    i = r(1265),
                    o = r(7206)("winston:exception"),
                    s = r(4283),
                    a = r(575),
                    l = r(1934);
                e.exports = class {
                    constructor(e) {
                        if (!e) throw new Error("Logger is required to handle exceptions");
                        this.logger = e, this.handlers = new Map
                    }
                    handle(...e) {
                        e.forEach((e => {
                            if (Array.isArray(e)) return e.forEach((e => this._addHandler(e)));
                            this._addHandler(e)
                        })), this.catcher || (this.catcher = this._uncaughtException.bind(this), process.on("uncaughtException", this.catcher))
                    }
                    unhandle() {
                        this.catcher && (process.removeListener("uncaughtException", this.catcher), this.catcher = !1, Array.from(this.handlers.values()).forEach((e => this.logger.unpipe(e))))
                    }
                    getAllInfo(e) {
                        let {
                            message: t
                        } = e;
                        return t || "string" != typeof e || (t = e), {
                            error: e,
                            level: "error",
                            message: [`uncaughtException: ${t||"(no error message)"}`, e.stack || "  No stack trace"].join("\n"),
                            stack: e.stack,
                            exception: !0,
                            date: (new Date).toString(),
                            process: this.getProcessInfo(),
                            os: this.getOsInfo(),
                            trace: this.getTrace(e)
                        }
                    }
                    getProcessInfo() {
                        return {
                            pid: process.pid,
                            uid: process.getuid ? process.getuid() : null,
                            gid: process.getgid ? process.getgid() : null,
                            cwd: process.cwd(),
                            execPath: process.execPath,
                            version: process.version,
                            argv: process.argv,
                            memoryUsage: process.memoryUsage()
                        }
                    }
                    getOsInfo() {
                        return {
                            loadavg: n.loadavg(),
                            uptime: n.uptime()
                        }
                    }
                    getTrace(e) {
                        return (e ? a.parse(e) : a.get()).map((e => ({
                            column: e.getColumnNumber(),
                            file: e.getFileName(),
                            function: e.getFunctionName(),
                            line: e.getLineNumber(),
                            method: e.getMethodName(),
                            native: e.isNative()
                        })))
                    }
                    _addHandler(e) {
                        if (!this.handlers.has(e)) {
                            e.handleExceptions = !0;
                            const t = new l(e);
                            this.handlers.set(e, t), this.logger.pipe(t)
                        }
                    }
                    _uncaughtException(e) {
                        const t = this.getAllInfo(e),
                            r = this._getExceptionHandlers();
                        let n, a = "function" == typeof this.logger.exitOnError ? this.logger.exitOnError(e) : this.logger.exitOnError;

                        function l() {
                            o("doExit", a), o("process._exiting", process._exiting), a && !process._exiting && (n && clearTimeout(n), process.exit(1))
                        }
                        if (!r.length && a && (console.warn("winston: exitOnError cannot be true with no exception handlers."), console.warn("winston: not exiting process."), a = !1), !r || 0 === r.length) return process.nextTick(l);
                        i(r, ((e, t) => {
                            const r = s(t),
                                n = e.transport || e;

                            function i(e) {
                                return () => {
                                    o(e), r()
                                }
                            }
                            n._ending = !0, n.once("finish", i("finished")), n.once("error", i("error"))
                        }), (() => a && l())), this.logger.log(t), a && (n = setTimeout(l, 3e3))
                    }
                    _getExceptionHandlers() {
                        return this.logger.transports.filter((e => (e.transport || e).handleExceptions))
                    }
                }
            },
            1934: (e, t, r) => {
                "use strict";
                const {
                    Writable: n
                } = r(1534);
                e.exports = class extends n {
                    constructor(e) {
                        if (super({
                                objectMode: !0
                            }), !e) throw new Error("ExceptionStream requires a TransportStream instance.");
                        this.handleExceptions = !0, this.transport = e
                    }
                    _write(e, t, r) {
                        return e.exception ? this.transport.log(e, r) : (r(), !0)
                    }
                }
            },
            418: (e, t, r) => {
                "use strict";
                const {
                    Stream: n,
                    Transform: i
                } = r(1534), o = r(1265), {
                    LEVEL: s,
                    SPLAT: a
                } = r(835), l = r(7752), u = r(8096), c = r(8318), h = r(4760), d = r(6919), {
                    warn: f
                } = r(3639), p = r(4279), g = /%[scdjifoO%]/g;
                class m extends i {
                    constructor(e) {
                        super({
                            objectMode: !0
                        }), this.configure(e)
                    }
                    child(e) {
                        const t = this;
                        return Object.create(t, {
                            write: {
                                value: function (r) {
                                    const n = Object.assign({}, e, r);
                                    r instanceof Error && (n.stack = r.stack, n.message = r.message), t.write(n)
                                }
                            }
                        })
                    }
                    configure({
                        silent: e,
                        format: t,
                        defaultMeta: n,
                        levels: i,
                        level: o = "info",
                        exitOnError: s = !0,
                        transports: a,
                        colors: l,
                        emitErrs: h,
                        formatters: d,
                        padLevels: f,
                        rewriters: g,
                        stripColors: m,
                        exceptionHandlers: v,
                        rejectionHandlers: y
                    } = {}) {
                        if (this.transports.length && this.clear(), this.silent = e, this.format = t || this.format || r(1345)(), this.defaultMeta = n || null, this.levels = i || this.levels || p.npm.levels, this.level = o, this.exceptions && this.exceptions.unhandle(), this.rejections && this.rejections.unhandle(), this.exceptions = new u(this), this.rejections = new c(this), this.profilers = {}, this.exitOnError = s, a && (a = Array.isArray(a) ? a : [a]).forEach((e => this.add(e))), l || h || d || f || g || m) throw new Error(["{ colors, emitErrs, formatters, padLevels, rewriters, stripColors } were removed in winston@3.0.0.", "Use a custom winston.format(function) instead.", "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md"].join("\n"));
                        v && this.exceptions.handle(v), y && this.rejections.handle(y)
                    }
                    isLevelEnabled(e) {
                        const t = v(this.levels, e);
                        if (null === t) return !1;
                        const r = v(this.levels, this.level);
                        return null !== r && (this.transports && 0 !== this.transports.length ? -1 !== this.transports.findIndex((e => {
                            let n = v(this.levels, e.level);
                            return null === n && (n = r), n >= t
                        })) : r >= t)
                    }
                    log(e, t, ...r) {
                        if (1 === arguments.length) return e[s] = e.level, this._addDefaultMeta(e), this.write(e), this;
                        if (2 === arguments.length) return t && "object" == typeof t ? (t[s] = t.level = e, this._addDefaultMeta(t), this.write(t), this) : (t = {
                            [s]: e,
                            level: e,
                            message: t
                        }, this._addDefaultMeta(t), this.write(t), this);
                        const [n] = r;
                        if ("object" == typeof n && null !== n && !(t && t.match && t.match(g))) {
                            const i = Object.assign({}, this.defaultMeta, n, {
                                [s]: e,
                                [a]: r,
                                level: e,
                                message: t
                            });
                            return n.message && (i.message = `${i.message} ${n.message}`), n.stack && (i.stack = n.stack), this.write(i), this
                        }
                        return this.write(Object.assign({}, this.defaultMeta, {
                            [s]: e,
                            [a]: r,
                            level: e,
                            message: t
                        })), this
                    }
                    _transform(e, t, r) {
                        if (this.silent) return r();
                        e[s] || (e[s] = e.level), this.levels[e[s]] || 0 === this.levels[e[s]] || console.error("[winston] Unknown logger level: %s", e[s]), this._readableState.pipes || console.error("[winston] Attempt to write logs with no transports %j", e);
                        try {
                            this.push(this.format.transform(e, this.format.options))
                        } finally {
                            this._writableState.sync = !1, r()
                        }
                    }
                    _final(e) {
                        const t = this.transports.slice();
                        o(t, ((e, t) => {
                            if (!e || e.finished) return setImmediate(t);
                            e.once("finish", t), e.end()
                        }), e)
                    }
                    add(e) {
                        const t = !l(e) || e.log.length > 2 ? new h({
                            transport: e
                        }) : e;
                        if (!t._writableState || !t._writableState.objectMode) throw new Error("Transports must WritableStreams in objectMode. Set { objectMode: true }.");
                        return this._onEvent("error", t), this._onEvent("warn", t), this.pipe(t), e.handleExceptions && this.exceptions.handle(), e.handleRejections && this.rejections.handle(), this
                    }
                    remove(e) {
                        if (!e) return this;
                        let t = e;
                        return (!l(e) || e.log.length > 2) && (t = this.transports.filter((t => t.transport === e))[0]), t && this.unpipe(t), this
                    }
                    clear() {
                        return this.unpipe(), this
                    }
                    close() {
                        return this.exceptions.unhandle(), this.rejections.unhandle(), this.clear(), this.emit("close"), this
                    }
                    setLevels() {
                        f.deprecated("setLevels")
                    }
                    query(e, t) {
                        "function" == typeof e && (t = e, e = {}), e = e || {};
                        const r = {},
                            n = Object.assign({}, e.query || {});
                        o(this.transports.filter((e => !!e.query)), (function (t, i) {
                            ! function (t, r) {
                                e.query && "function" == typeof t.formatQuery && (e.query = t.formatQuery(n)), t.query(e, ((n, i) => {
                                    if (n) return r(n);
                                    "function" == typeof t.formatResults && (i = t.formatResults(i, e.format)), r(null, i)
                                }))
                            }(t, ((e, n) => {
                                i && ((n = e || n) && (r[t.name] = n), i()), i = null
                            }))
                        }), (() => t(null, r)))
                    }
                    stream(e = {}) {
                        const t = new n,
                            r = [];
                        return t._streams = r, t.destroy = () => {
                            let e = r.length;
                            for (; e--;) r[e].destroy()
                        }, this.transports.filter((e => !!e.stream)).forEach((n => {
                            const i = n.stream(e);
                            i && (r.push(i), i.on("log", (e => {
                                e.transport = e.transport || [], e.transport.push(n.name), t.emit("log", e)
                            })), i.on("error", (e => {
                                e.transport = e.transport || [], e.transport.push(n.name), t.emit("error", e)
                            })))
                        })), t
                    }
                    startTimer() {
                        return new d(this)
                    }
                    profile(e, ...t) {
                        const r = Date.now();
                        if (this.profilers[e]) {
                            const n = this.profilers[e];
                            delete this.profilers[e], "function" == typeof t[t.length - 2] && (console.warn("Callback function no longer supported as of winston@3.0.0"), t.pop());
                            const i = "object" == typeof t[t.length - 1] ? t.pop() : {};
                            return i.level = i.level || "info", i.durationMs = r - n, i.message = i.message || e, this.write(i)
                        }
                        return this.profilers[e] = r, this
                    }
                    handleExceptions(...e) {
                        console.warn("Deprecated: .handleExceptions() will be removed in winston@4. Use .exceptions.handle()"), this.exceptions.handle(...e)
                    }
                    unhandleExceptions(...e) {
                        console.warn("Deprecated: .unhandleExceptions() will be removed in winston@4. Use .exceptions.unhandle()"), this.exceptions.unhandle(...e)
                    }
                    cli() {
                        throw new Error(["Logger.cli() was removed in winston@3.0.0", "Use a custom winston.formats.cli() instead.", "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md"].join("\n"))
                    }
                    _onEvent(e, t) {
                        t["__winston" + e] || (t["__winston" + e] = function (r) {
                            "error" !== e || this.transports.includes(t) || this.add(t), this.emit(e, r, t)
                        }.bind(this), t.on(e, t["__winston" + e]))
                    }
                    _addDefaultMeta(e) {
                        this.defaultMeta && Object.assign(e, this.defaultMeta)
                    }
                }

                function v(e, t) {
                    const r = e[t];
                    return r || 0 === r ? r : null
                }
                Object.defineProperty(m.prototype, "transports", {
                    configurable: !1,
                    enumerable: !0,
                    get() {
                        const {
                            pipes: e
                        } = this._readableState;
                        return Array.isArray(e) ? e : [e].filter(Boolean)
                    }
                }), e.exports = m
            },
            6919: e => {
                "use strict";
                e.exports = class {
                    constructor(e) {
                        if (!e) throw new Error("Logger is required for profiling.");
                        this.logger = e, this.start = Date.now()
                    }
                    done(...e) {
                        "function" == typeof e[e.length - 1] && (console.warn("Callback function no longer supported as of winston@3.0.0"), e.pop());
                        const t = "object" == typeof e[e.length - 1] ? e.pop() : {};
                        return t.level = t.level || "info", t.durationMs = Date.now() - this.start, this.logger.write(t)
                    }
                }
            },
            8318: (e, t, r) => {
                "use strict";
                const n = r(857),
                    i = r(1265),
                    o = r(7206)("winston:rejection"),
                    s = r(4283),
                    a = r(575),
                    l = r(1934);
                e.exports = class {
                    constructor(e) {
                        if (!e) throw new Error("Logger is required to handle rejections");
                        this.logger = e, this.handlers = new Map
                    }
                    handle(...e) {
                        e.forEach((e => {
                            if (Array.isArray(e)) return e.forEach((e => this._addHandler(e)));
                            this._addHandler(e)
                        })), this.catcher || (this.catcher = this._unhandledRejection.bind(this), process.on("unhandledRejection", this.catcher))
                    }
                    unhandle() {
                        this.catcher && (process.removeListener("unhandledRejection", this.catcher), this.catcher = !1, Array.from(this.handlers.values()).forEach((e => this.logger.unpipe(e))))
                    }
                    getAllInfo(e) {
                        let t = null;
                        return e && (t = "string" == typeof e ? e : e.message), {
                            error: e,
                            level: "error",
                            message: [`unhandledRejection: ${t||"(no error message)"}`, e && e.stack || "  No stack trace"].join("\n"),
                            stack: e && e.stack,
                            exception: !0,
                            date: (new Date).toString(),
                            process: this.getProcessInfo(),
                            os: this.getOsInfo(),
                            trace: this.getTrace(e)
                        }
                    }
                    getProcessInfo() {
                        return {
                            pid: process.pid,
                            uid: process.getuid ? process.getuid() : null,
                            gid: process.getgid ? process.getgid() : null,
                            cwd: process.cwd(),
                            execPath: process.execPath,
                            version: process.version,
                            argv: process.argv,
                            memoryUsage: process.memoryUsage()
                        }
                    }
                    getOsInfo() {
                        return {
                            loadavg: n.loadavg(),
                            uptime: n.uptime()
                        }
                    }
                    getTrace(e) {
                        return (e ? a.parse(e) : a.get()).map((e => ({
                            column: e.getColumnNumber(),
                            file: e.getFileName(),
                            function: e.getFunctionName(),
                            line: e.getLineNumber(),
                            method: e.getMethodName(),
                            native: e.isNative()
                        })))
                    }
                    _addHandler(e) {
                        if (!this.handlers.has(e)) {
                            e.handleRejections = !0;
                            const t = new l(e);
                            this.handlers.set(e, t), this.logger.pipe(t)
                        }
                    }
                    _unhandledRejection(e) {
                        const t = this.getAllInfo(e),
                            r = this._getRejectionHandlers();
                        let n, a = "function" == typeof this.logger.exitOnError ? this.logger.exitOnError(e) : this.logger.exitOnError;

                        function l() {
                            o("doExit", a), o("process._exiting", process._exiting), a && !process._exiting && (n && clearTimeout(n), process.exit(1))
                        }
                        if (!r.length && a && (console.warn("winston: exitOnError cannot be true with no rejection handlers."), console.warn("winston: not exiting process."), a = !1), !r || 0 === r.length) return process.nextTick(l);
                        i(r, ((e, t) => {
                            const r = s(t),
                                n = e.transport || e;

                            function i(e) {
                                return () => {
                                    o(e), r()
                                }
                            }
                            n._ending = !0, n.once("finish", i("finished")), n.once("error", i("error"))
                        }), (() => a && l())), this.logger.log(t), a && (n = setTimeout(l, 3e3))
                    }
                    _getRejectionHandlers() {
                        return this.logger.transports.filter((e => (e.transport || e).handleRejections))
                    }
                }
            },
            1615: (e, t, r) => {
                "use strict";
                const n = r(9896),
                    {
                        StringDecoder: i
                    } = r(3193),
                    {
                        Stream: o
                    } = r(1534);

                function s() {}
                e.exports = (e, t) => {
                    const r = Buffer.alloc(65536),
                        a = new i("utf8"),
                        l = new o;
                    let u = "",
                        c = 0,
                        h = 0;
                    return -1 === e.start && delete e.start, l.readable = !0, l.destroy = () => {
                        l.destroyed = !0, l.emit("end"), l.emit("close")
                    }, n.open(e.file, "a+", "0644", ((i, o) => {
                        if (i) return t ? t(i) : l.emit("error", i), void l.destroy();
                        ! function i() {
                            if (!l.destroyed) return n.read(o, r, 0, r.length, c, ((n, o) => {
                                if (n) return t ? t(n) : l.emit("error", n), void l.destroy();
                                if (!o) return u && ((null == e.start || h > e.start) && (t ? t(null, u) : l.emit("line", u)), h++, u = ""), setTimeout(i, 1e3);
                                let s = a.write(r.slice(0, o));
                                t || l.emit("data", s), s = (u + s).split(/\n+/);
                                const d = s.length - 1;
                                let f = 0;
                                for (; f < d; f++)(null == e.start || h > e.start) && (t ? t(null, s[f]) : l.emit("line", s[f])), h++;
                                return u = s[d], c += o, i()
                            }));
                            n.close(o, s)
                        }()
                    })), t ? l.destroy : l
                }
            },
            9354: (e, t, r) => {
                "use strict";
                const n = r(857),
                    {
                        LEVEL: i,
                        MESSAGE: o
                    } = r(835),
                    s = r(6351);
                e.exports = class extends s {
                    constructor(e = {}) {
                        super(e), this.name = e.name || "console", this.stderrLevels = this._stringArrayToSet(e.stderrLevels), this.consoleWarnLevels = this._stringArrayToSet(e.consoleWarnLevels), this.eol = "string" == typeof e.eol ? e.eol : n.EOL, this.setMaxListeners(30)
                    }
                    log(e, t) {
                        return setImmediate((() => this.emit("logged", e))), this.stderrLevels[e[i]] ? (console._stderr ? console._stderr.write(`${e[o]}${this.eol}`) : console.error(e[o]), void(t && t())) : this.consoleWarnLevels[e[i]] ? (console._stderr ? console._stderr.write(`${e[o]}${this.eol}`) : console.warn(e[o]), void(t && t())) : (console._stdout ? console._stdout.write(`${e[o]}${this.eol}`) : console.log(e[o]), void(t && t()))
                    }
                    _stringArrayToSet(e, t) {
                        if (!e) return {};
                        if (t = t || "Cannot make set from type other than Array of string elements", !Array.isArray(e)) throw new Error(t);
                        return e.reduce(((e, r) => {
                            if ("string" != typeof r) throw new Error(t);
                            return e[r] = !0, e
                        }), {})
                    }
                }
            },
            8033: (e, t, r) => {
                "use strict";
                const n = r(9896),
                    i = r(6928),
                    o = r(2382),
                    s = r(3106),
                    {
                        MESSAGE: a
                    } = r(835),
                    {
                        Stream: l,
                        PassThrough: u
                    } = r(1534),
                    c = r(6351),
                    h = r(7206)("winston:file"),
                    d = r(857),
                    f = r(1615);
                e.exports = class extends c {
                    constructor(e = {}) {
                        function t(t, ...r) {
                            r.slice(1).forEach((r => {
                                if (e[r]) throw new Error(`Cannot set ${r} and ${t} together`)
                            }))
                        }
                        if (super(e), this.name = e.name || "file", this._stream = new u, this._stream.setMaxListeners(30), this._onError = this._onError.bind(this), e.filename || e.dirname) t("filename or dirname", "stream"), this._basename = this.filename = e.filename ? i.basename(e.filename) : "winston.log", this.dirname = e.dirname || i.dirname(e.filename), this.options = e.options || {
                            flags: "a"
                        };
                        else {
                            if (!e.stream) throw new Error("Cannot log to file without filename or stream.");
                            console.warn("options.stream will be removed in winston@4. Use winston.transports.Stream"), t("stream", "filename", "maxsize"), this._dest = this._stream.pipe(this._setupStream(e.stream)), this.dirname = i.dirname(this._dest.path)
                        }
                        this.maxsize = e.maxsize || null, this.rotationFormat = e.rotationFormat || !1, this.zippedArchive = e.zippedArchive || !1, this.maxFiles = e.maxFiles || null, this.eol = "string" == typeof e.eol ? e.eol : d.EOL, this.tailable = e.tailable || !1, this._size = 0, this._pendingSize = 0, this._created = 0, this._drain = !1, this._opening = !1, this._ending = !1, this.dirname && this._createLogDirIfNotExist(this.dirname), this.open()
                    }
                    finishIfEnding() {
                        this._ending && (this._opening ? this.once("open", (() => {
                            this._stream.once("finish", (() => this.emit("finish"))), setImmediate((() => this._stream.end()))
                        })) : (this._stream.once("finish", (() => this.emit("finish"))), setImmediate((() => this._stream.end()))))
                    }
                    log(e, t = () => {}) {
                        if (this.silent) return t(), !0;
                        if (this._drain) return void this._stream.once("drain", (() => {
                            this._drain = !1, this.log(e, t)
                        }));
                        if (this._rotate) return void this._stream.once("rotate", (() => {
                            this._rotate = !1, this.log(e, t)
                        }));
                        const r = `${e[a]}${this.eol}`,
                            n = Buffer.byteLength(r);
                        this._pendingSize += n, this._opening && !this.rotatedWhileOpening && this._needsNewFile(this._size + this._pendingSize) && (this.rotatedWhileOpening = !0);
                        const i = this._stream.write(r, function () {
                            this._size += n, this._pendingSize -= n, h("logged %s %s", this._size, r), this.emit("logged", e), this._opening || this._needsNewFile() && (this._rotate = !0, this._endStream((() => this._rotateFile())))
                        }.bind(this));
                        return i ? t() : (this._drain = !0, this._stream.once("drain", (() => {
                            this._drain = !1, t()
                        }))), h("written", i, this._drain), this.finishIfEnding(), i
                    }
                    query(e, t) {
                        "function" == typeof e && (t = e, e = {}), e = function (e) {
                            return (e = e || {}).rows = e.rows || e.limit || 10, e.start = e.start || 0, e.until = e.until || new Date, "object" != typeof e.until && (e.until = new Date(e.until)), e.from = e.from || e.until - 864e5, "object" != typeof e.from && (e.from = new Date(e.from)), e.order = e.order || "desc", e
                        }(e);
                        const r = i.join(this.dirname, this.filename);
                        let o = "",
                            s = [],
                            a = 0;
                        const l = n.createReadStream(r, {
                            encoding: "utf8"
                        });

                        function u(t, r) {
                            try {
                                const r = JSON.parse(t);
                                (function (t) {
                                    if (!t) return;
                                    if ("object" != typeof t) return;
                                    const r = new Date(t.timestamp);
                                    return !(e.from && r < e.from || e.until && r > e.until || e.level && e.level !== t.level) || void 0
                                })(r) && function (t) {
                                    e.rows && s.length >= e.rows && "desc" !== e.order ? l.readable && l.destroy() : (e.fields && (t = e.fields.reduce(((e, r) => (e[r] = t[r], e)), {})), "desc" === e.order && s.length >= e.rows && s.shift(), s.push(t))
                                }(r)
                            } catch (e) {
                                r || l.emit("error", e)
                            }
                        }
                        l.on("error", (e => {
                            if (l.readable && l.destroy(), t) return "ENOENT" !== e.code ? t(e) : t(null, s)
                        })), l.on("data", (t => {
                            const r = (t = (o + t).split(/\n+/)).length - 1;
                            let n = 0;
                            for (; n < r; n++)(!e.start || a >= e.start) && u(t[n]), a++;
                            o = t[r]
                        })), l.on("close", (() => {
                            o && u(o, !0), "desc" === e.order && (s = s.reverse()), t && t(null, s)
                        }))
                    }
                    stream(e = {}) {
                        const t = i.join(this.dirname, this.filename),
                            r = new l,
                            n = {
                                file: t,
                                start: e.start
                            };
                        return r.destroy = f(n, ((e, t) => {
                            if (e) return r.emit("error", e);
                            try {
                                r.emit("data", t), t = JSON.parse(t), r.emit("log", t)
                            } catch (e) {
                                r.emit("error", e)
                            }
                        })), r
                    }
                    open() {
                        this.filename && (this._opening || (this._opening = !0, this.stat(((e, t) => {
                            if (e) return this.emit("error", e);
                            h("stat done: %s { size: %s }", this.filename, t), this._size = t, this._dest = this._createStream(this._stream), this._opening = !1, this.once("open", (() => {
                                this._stream.eventNames().includes("rotate") ? this._stream.emit("rotate") : this._rotate = !1
                            }))
                        }))))
                    }
                    stat(e) {
                        const t = this._getFile(),
                            r = i.join(this.dirname, t);
                        n.stat(r, ((n, i) => n && "ENOENT" === n.code ? (h("ENOENT ok", r), this.filename = t, e(null, 0)) : n ? (h(`err ${n.code} ${r}`), e(n)) : !i || this._needsNewFile(i.size) ? this._incFile((() => this.stat(e))) : (this.filename = t, void e(null, i.size))))
                    }
                    close(e) {
                        this._stream && this._stream.end((() => {
                            e && e(), this.emit("flush"), this.emit("closed")
                        }))
                    }
                    _needsNewFile(e) {
                        return e = e || this._size, this.maxsize && e >= this.maxsize
                    }
                    _onError(e) {
                        this.emit("error", e)
                    }
                    _setupStream(e) {
                        return e.on("error", this._onError), e
                    }
                    _cleanupStream(e) {
                        return e.removeListener("error", this._onError), e
                    }
                    _rotateFile() {
                        this._incFile((() => this.open()))
                    }
                    _endStream(e = () => {}) {
                        this._dest ? (this._stream.unpipe(this._dest), this._dest.end((() => {
                            this._cleanupStream(this._dest), e()
                        }))) : e()
                    }
                    _createStream(e) {
                        const t = i.join(this.dirname, this.filename);
                        h("create stream start", t, this.options);
                        const r = n.createWriteStream(t, this.options).on("error", (e => h(e))).on("close", (() => h("close", r.path, r.bytesWritten))).on("open", (() => {
                            h("file open ok", t), this.emit("open", t), e.pipe(r), this.rotatedWhileOpening && (this._stream = new u, this._stream.setMaxListeners(30), this._rotateFile(), this.rotatedWhileOpening = !1, this._cleanupStream(r), e.end())
                        }));
                        if (h("create stream ok", t), this.zippedArchive) {
                            const e = s.createGzip();
                            return e.pipe(r), e
                        }
                        return r
                    }
                    _incFile(e) {
                        h("_incFile", this.filename);
                        const t = i.extname(this._basename),
                            r = i.basename(this._basename, t);
                        this.tailable ? this._checkMaxFilesTailable(t, r, e) : (this._created += 1, this._checkMaxFilesIncrementing(t, r, e))
                    }
                    _getFile() {
                        const e = i.extname(this._basename),
                            t = i.basename(this._basename, e),
                            r = this.rotationFormat ? this.rotationFormat() : this._created,
                            n = !this.tailable && this._created ? `${t}${r}${e}` : `${t}${e}`;
                        return this.zippedArchive && !this.tailable ? `${n}.gz` : n
                    }
                    _checkMaxFilesIncrementing(e, t, r) {
                        if (!this.maxFiles || this._created < this.maxFiles) return setImmediate(r);
                        const o = this._created - this.maxFiles,
                            s = `${t}${0!==o?o:""}${e}${this.zippedArchive?".gz":""}`,
                            a = i.join(this.dirname, s);
                        n.unlink(a, r)
                    }
                    _checkMaxFilesTailable(e, t, r) {
                        const s = [];
                        if (!this.maxFiles) return;
                        const a = this.zippedArchive ? ".gz" : "";
                        for (let r = this.maxFiles - 1; r > 1; r--) s.push(function (r, o) {
                            let s = `${t}${r-1}${e}${a}`;
                            const l = i.join(this.dirname, s);
                            n.exists(l, (u => {
                                if (!u) return o(null);
                                s = `${t}${r}${e}${a}`, n.rename(l, i.join(this.dirname, s), o)
                            }))
                        }.bind(this, r));
                        o(s, (() => {
                            n.rename(i.join(this.dirname, `${t}${e}`), i.join(this.dirname, `${t}1${e}${a}`), r)
                        }))
                    }
                    _createLogDirIfNotExist(e) {
                        n.existsSync(e) || n.mkdirSync(e, {
                            recursive: !0
                        })
                    }
                }
            },
            2247: (e, t, r) => {
                "use strict";
                const n = r(8611),
                    i = r(5692),
                    {
                        Stream: o
                    } = r(1534),
                    s = r(6351),
                    a = r(8588);
                e.exports = class extends s {
                    constructor(e = {}) {
                        super(e), this.options = e, this.name = e.name || "http", this.ssl = !!e.ssl, this.host = e.host || "localhost", this.port = e.port, this.auth = e.auth, this.path = e.path || "", this.agent = e.agent, this.headers = e.headers || {}, this.headers["content-type"] = "application/json", this.batch = e.batch || !1, this.batchInterval = e.batchInterval || 5e3, this.batchCount = e.batchCount || 10, this.batchOptions = [], this.batchTimeoutID = -1, this.batchCallback = {}, this.port || (this.port = this.ssl ? 443 : 80)
                    }
                    log(e, t) {
                        this._request(e, ((t, r) => {
                            r && 200 !== r.statusCode && (t = new Error(`Invalid HTTP Status Code: ${r.statusCode}`)), t ? this.emit("warn", t) : this.emit("logged", e)
                        })), t && setImmediate(t)
                    }
                    query(e, t) {
                        "function" == typeof e && (t = e, e = {}), (e = {
                            method: "query",
                            params: this.normalizeQuery(e)
                        }).params.path && (e.path = e.params.path, delete e.params.path), e.params.auth && (e.auth = e.params.auth, delete e.params.auth), this._request(e, ((e, r, n) => {
                            if (r && 200 !== r.statusCode && (e = new Error(`Invalid HTTP Status Code: ${r.statusCode}`)), e) return t(e);
                            if ("string" == typeof n) try {
                                n = JSON.parse(n)
                            } catch (e) {
                                return t(e)
                            }
                            t(null, n)
                        }))
                    }
                    stream(e = {}) {
                        const t = new o;
                        (e = {
                            method: "stream",
                            params: e
                        }).params.path && (e.path = e.params.path, delete e.params.path), e.params.auth && (e.auth = e.params.auth, delete e.params.auth);
                        let r = "";
                        const n = this._request(e);
                        return t.destroy = () => n.destroy(), n.on("data", (e => {
                            const n = (e = (r + e).split(/\n+/)).length - 1;
                            let i = 0;
                            for (; i < n; i++) try {
                                t.emit("log", JSON.parse(e[i]))
                            } catch (e) {
                                t.emit("error", e)
                            }
                            r = e[n]
                        })), n.on("error", (e => t.emit("error", e))), t
                    }
                    _request(e, t) {
                        const r = (e = e || {}).auth || this.auth,
                            n = e.path || this.path || "";
                        delete e.auth, delete e.path, this.batch ? this._doBatch(e, t, r, n) : this._doRequest(e, t, r, n)
                    }
                    _doBatch(e, t, r, n) {
                        if (this.batchOptions.push(e), 1 === this.batchOptions.length) {
                            const e = this;
                            this.batchCallback = t, this.batchTimeoutID = setTimeout((function () {
                                e.batchTimeoutID = -1, e._doBatchRequest(e.batchCallback, r, n)
                            }), this.batchInterval)
                        }
                        this.batchOptions.length === this.batchCount && this._doBatchRequest(this.batchCallback, r, n)
                    }
                    _doBatchRequest(e, t, r) {
                        this.batchTimeoutID > 0 && (clearTimeout(this.batchTimeoutID), this.batchTimeoutID = -1);
                        const n = this.batchOptions.slice();
                        this.batchOptions = [], this._doRequest(n, e, t, r)
                    }
                    _doRequest(e, t, r, o) {
                        const s = Object.assign({}, this.headers);
                        r && r.bearer && (s.Authorization = `Bearer ${r.bearer}`);
                        const l = (this.ssl ? i : n).request({
                            ...this.options,
                            method: "POST",
                            host: this.host,
                            port: this.port,
                            path: `/${o.replace(/^\//,"")}`,
                            headers: s,
                            auth: r && r.username && r.password ? `${r.username}:${r.password}` : "",
                            agent: this.agent
                        });
                        l.on("error", t), l.on("response", (e => e.on("end", (() => t(null, e))).resume())), l.end(Buffer.from(a(e), "utf8"))
                    }
                }
            },
            2171: (e, t, r) => {
                "use strict";
                Object.defineProperty(t, "Console", {
                    configurable: !0,
                    enumerable: !0,
                    get: () => r(9354)
                }), Object.defineProperty(t, "File", {
                    configurable: !0,
                    enumerable: !0,
                    get: () => r(8033)
                }), Object.defineProperty(t, "Http", {
                    configurable: !0,
                    enumerable: !0,
                    get: () => r(2247)
                }), Object.defineProperty(t, "Stream", {
                    configurable: !0,
                    enumerable: !0,
                    get: () => r(2031)
                })
            },
            2031: (e, t, r) => {
                "use strict";
                const n = r(7752),
                    {
                        MESSAGE: i
                    } = r(835),
                    o = r(857),
                    s = r(6351);
                e.exports = class extends s {
                    constructor(e = {}) {
                        if (super(e), !e.stream || !n(e.stream)) throw new Error("options.stream is required.");
                        this._stream = e.stream, this._stream.setMaxListeners(1 / 0), this.isObjectMode = e.stream._writableState.objectMode, this.eol = "string" == typeof e.eol ? e.eol : o.EOL
                    }
                    log(e, t) {
                        if (setImmediate((() => this.emit("logged", e))), this.isObjectMode) return this._stream.write(e), void(t && t());
                        this._stream.write(`${e[i]}${this.eol}`), t && t()
                    }
                }
            },
            2385: (e, t, r) => {
                e = r.nmd(e);
                const n = r(6928).join(__dirname, "desktop-notifications.node");
                try {
                    global.process.dlopen(e, n)
                } catch (e) {
                    throw new Error("Cannot open " + n + ": " + e)
                }
            },
            1951: (e, t, r) => {
                e = r.nmd(e);
                const n = r(6928).join(__dirname, "registry.node");
                try {
                    global.process.dlopen(e, n)
                } catch (e) {
                    throw new Error("Cannot open " + n + ": " + e)
                }
            },
            2613: e => {
                "use strict";
                e.exports = require("assert")
            },
            181: e => {
                "use strict";
                e.exports = require("buffer")
            },
            9140: e => {
                "use strict";
                e.exports = require("constants")
            },
            6982: e => {
                "use strict";
                e.exports = require("crypto")
            },
            4157: e => {
                "use strict";
                e.exports = require("electron")
            },
            4434: e => {
                "use strict";
                e.exports = require("events")
            },
            9896: e => {
                "use strict";
                e.exports = require("fs")
            },
            8611: e => {
                "use strict";
                e.exports = require("http")
            },
            5692: e => {
                "use strict";
                e.exports = require("https")
            },
            3339: e => {
                "use strict";
                e.exports = require("module")
            },
            857: e => {
                "use strict";
                e.exports = require("os")
            },
            6928: e => {
                "use strict";
                e.exports = require("path")
            },
            2203: e => {
                "use strict";
                e.exports = require("stream")
            },
            3193: e => {
                "use strict";
                e.exports = require("string_decoder")
            },
            9023: e => {
                "use strict";
                e.exports = require("util")
            },
            3106: e => {
                "use strict";
                e.exports = require("zlib")
            },
            296: e => {
                "use strict";
                e.exports = {
                    version: "3.6.0"
                }
            }
        },
        t = {};

    function r(n) {
        var i = t[n];
        if (void 0 !== i) return i.exports;
        var o = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
    }
    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        "use strict";
        var e = r(2275),
            t = r(6928),
            n = r(4157);
        let i = null;

        function o() {
            if (!i) {
                const e = n.app.getPath("userData");
                i = t.join(e, "logs")
            }
            return i
        }
        var s = r(294),
            a = r.n(s),
            l = r(6351),
            u = r.n(l),
            c = r(835);
        const h = {
            error: console.error,
            warn: console.warn,
            info: console.info,
            debug: console.debug
        };
        class d extends(u()) {
            log(e, t) {
                setImmediate((() => this.emit("logged", e)));
                const r = h[e[c.LEVEL]] ?? console.log;
                try {
                    r(e[c.MESSAGE])
                } catch {}
                t?.()
            }
        }
        var f = function (e, t) {
            return e === t
        };
        const p = function (e, t) {
                var r;
                void 0 === t && (t = f);
                var n, i = [],
                    o = !1,
                    s = function (e, r) {
                        return t(e, i[r])
                    };
                return function () {
                    for (var t = arguments.length, a = new Array(t), l = 0; l < t; l++) a[l] = arguments[l];
                    return o && r === this && a.length === i.length && a.every(s) || (n = e.apply(this, a), o = !0, r = this, i = a), n
                }
            },
            g = require("fs/promises");
        var m = r(9896),
            v = r(857),
            y = r(9023),
            w = r(5248);
        const b = ".desktop.production.log",
            _ = new RegExp("(\\d{4}-\\d{2}-\\d{2})" + r.n(w)()(b) + "$");
        class E extends(u()) {
            stream;
            logDirectory;
            constructor(e) {
                const {
                    logDirectory: t,
                    ...r
                } = e;
                super(r), this.logDirectory = t
            }
            async log(e, t) {
                const r = C(this.logDirectory);
                void 0 !== this.stream && this.stream.path === r || (this.stream?.end(), this.stream = (0, m.createWriteStream)(r, {
                    flags: "a"
                }), this.stream.on("error", (e => {})), await x(this.logDirectory).catch((e => {}))), void 0 !== this.stream && (await S(this.stream, `${e[c.MESSAGE]}${v.EOL}`).catch((e => {})), this.emit("logged", e)), t?.()
            }
            close(e) {
                this.stream?.end(e), this.stream = void 0
            }
        }
        const S = (0, y.promisify)(((e, t, r) => e.write(t, r))),
            C = e => (0, t.join)(e, `${((e=new Date)=>e.toISOString().split("T",1)[0])()}${b}`),
            x = async e => {
                const r = await (e => (0, g.readdir)(e, {
                    withFileTypes: !0
                }).then((e => e.filter((e => e.isFile() && _.test(e.name))))).catch((e => {})))(e);
                if (r && r.length > 14) {
                    const n = r.length - 14 + 1,
                        i = r.sort().slice(0, n);
                    for (const r of i) await (0, g.unlink)((0, t.join)(e, r.name)).catch((e => {}))
                }
            };
        const O = p((async () => {
            const t = o();
            return await (0, g.mkdir)(t, {
                    recursive: !0
                }),
                function (t) {
                    const r = new E({
                        logDirectory: t,
                        level: "info",
                        format: e.format.printf((({
                            level: e,
                            message: t
                        }) => `${(new Date).toISOString()} - ${e}: ${t}`))
                    });
                    r.on("error", a());
                    const n = new d({
                        level: "error"
                    });
                    return e.configure({
                        transports: [n, r],
                        format: e.format.simple()
                    }), e.log
                }(t)
        }));
        async function R(e, t) {
            try {
                const r = await O();
                await new Promise(((n, i) => {
                    r(e, t, (e => {
                        e ? i(e) : n()
                    }))
                }))
            } catch (e) {}
        }
        var M = r(2593);
        const A = require("url"),
            k = ["renderer.js", "main.js"];

        function T(e) {
            if (!k.some((t => e.endsWith(t)))) return null;
            e.startsWith("file://") && (e = (0, A.fileURLToPath)(e));
            const r = `${e}.map`;
            if (!m.existsSync(r)) return null;
            try {
                const e = m.readFileSync(r, "utf8");
                return {
                    url: t.basename(r),
                    map: e
                }
            } catch (e) {
                return null
            }
        }
        const L = new WeakMap;
        let j;

        function N(e, t) {
            return L.set(e, t), e + t.map((e => `\n    at ${e}`)).join("")
        }

        function P(e) {
            return {
                name: e.name,
                message: e.message,
                stack: D(e)
            }
        }

        function D(e) {
            let t = L.get(e);
            return t || ((e.stack || "").toString(), t = L.get(e)), t ? j(e, t) : e.stack
        }

        function $(e, t) {
            return (e = P(e)).stack ? t ? `${t}\n${e.stack}` : e.stack.trim() : t ? `${t}\n${e.name}: ${e.message}` : `${e.name}: ${e.message}`
        }

        function F(e, t) {
            return t ? $(t, e) : e
        }
        global.log = {
            error(e, t) {
                R("error", "[main] " + F(e, t))
            },
            warn(e, t) {
                R("warn", "[main] " + F(e, t))
            },
            info(e, t) {
                R("info", "[main] " + F(e, t))
            },
            debug(e, t) {
                R("debug", "[main] " + F(e, t))
            }
        };
        const I = require("child_process");
        (0, y.promisify)(I.execFile);
        var U = r(1630),
            H = r.n(U);

        function B(e, t) {
            return (...r) => (r = r.length !== t ? r.slice(0, t) : r, function (e, ...t) {
                return n.ipcRenderer.invoke(e, ...t)
            }(e, ...r))
        }

        function q(e, t) {
            return (...r) => {
                r = r.length !== t ? r.slice(0, t) : r,
                    function (e, ...t) {
                        n.ipcRenderer.send(e, ...t)
                    }(e, ...r)
            }
        }
        q("select-all-window-contents", 0), q("update-menu-state", 1), q("renderer-ready", 1), q("execute-menu-item-by-id", 1), B("is-window-focused", 0), q("focus-window", 0), B("show-item-in-folder", 1), q("unsafe-open-directory", 1), B("open-external", 1), B("move-to-trash", 1), B("get-current-window-state", 0), B("get-current-window-zoom-factor", 0), q("dialog-did-open", 0), q("set-window-zoom-factor", 1), B("check-for-updates", 1), q("quit-and-install-updates", 0), q("quit-app", 0), q("set-native-theme-source", 1), B("should-use-dark-colors", 0), q("minimize-window", 0), q("maximize-window", 0), q("unmaximize-window", 0), q("close-window", 0), B("is-window-maximized", 0), B("get-apple-action-on-double-click", 0), q("show-certificate-trust-dialog", 2), B("get-path", 1), B("get-app-architecture", 0), B("get-app-path", 0), B("is-running-under-arm64-translation", 0), B("move-to-applications-folder", 0), q("get-app-menu", 0), B("show-contextual-menu", 2), q("update-preferred-app-menu-item-labels", 1), q("uncaught-exception", 1), q("send-error-report", 3), q("update-accounts", 1), B("resolve-proxy", 1), B("is-in-application-folder", 0), B("show-save-dialog", 1), B("show-open-dialog", 1), B("save-guid", 1), B("get-guid", 0), B("show-notification", 3), B("get-notifications-permission", 0), B("request-notifications-permission", 0), q("install-windows-cli", 0), q("uninstall-windows-cli", 0), n.shell.beep, n.shell.openPath;
        var z = r(5327);

        function G(e, t, ...r) {
            if (e.isDestroyed()) {
                const e = `failed to send on ${t}, webContents was destroyed`;
                log.error(e)
            } else e.send(t, ...r)
        }

        function W(e) {
            return e.isFullScreen() ? "full-screen" : e.isMaximized() ? "maximized" : e.isMinimized() ? "minimized" : e.isVisible() ? "normal" : "hidden"
        }

        function Y(e) {
            e.on("enter-full-screen", (() => V(e, "full-screen"))), e.on("leave-full-screen", (() => V(e, "normal"))), e.on("maximize", (() => V(e, "maximized"))), e.on("minimize", (() => V(e, "minimized"))), e.on("unmaximize", (() => V(e, "normal"))), e.on("restore", (() => V(e, "normal"))), e.on("hide", (() => V(e, "hidden"))), e.on("show", (() => {
                V(e, W(e))
            }))
        }

        function V(e, t) {
            G(e.webContents, "window-state-changed", t)
        }

        function K(e) {
            throw new Error(e)
        }

        function Z(e) {
            const t = e.id;
            if (!t) throw new Error(`menuItem must specify id: ${e.label}`);
            const r = e.enabled,
                n = e.visible,
                i = e.label,
                o = e.checked,
                s = function (e) {
                    if (e.accelerator) return e.accelerator;
                    if (e.role) {
                        const t = e.getDefaultRoleAccelerator;
                        if ("function" == typeof t) try {
                            const r = t.call(e);
                            if ("string" == typeof r) return r
                        } catch (e) {
                            console.error("Could not retrieve default accelerator", e)
                        }
                    }
                    return null
                }(e),
                a = function (e) {
                    const t = e.match(/&([^&])/);
                    return t ? t[1] : null
                }(e.label),
                l = function (e) {
                    switch (e) {
                    case "normal":
                    case "separator":
                    case "submenu":
                    case "checkbox":
                    case "radio":
                        return e;
                    default:
                        throw new Error(`Unable to parse string ${e} to a valid menu item type`)
                    }
                }(e.type);
            switch (l) {
            case "normal":
                return {
                    id: t, type: "menuItem", label: i, enabled: r, visible: n, accelerator: s, accessKey: a
                };
            case "separator":
                return {
                    id: t, type: "separator", visible: n
                };
            case "submenu":
                return {
                    id: t, type: "submenuItem", label: i, enabled: r, visible: n, menu: J(e.submenu, t), accessKey: a
                };
            case "checkbox":
                return {
                    id: t, type: "checkbox", label: i, enabled: r, visible: n, accelerator: s, checked: o, accessKey: a
                };
            case "radio":
                return {
                    id: t, type: "radio", label: i, enabled: r, visible: n, accelerator: s, checked: o, accessKey: a
                };
            default:
                return function (e, t) {
                    throw new Error(t)
                }(0, `Unknown menu item type ${l}`)
            }
        }

        function J(e, t) {
            return {
                id: t,
                type: "menu",
                items: e.items.map(Z)
            }
        }

        function X() {
            const e = process.hrtime();
            return 1e3 * e[0] + e[1] / 1e6
        }
        var Q = r(9734),
            ee = r.n(Q);
        const te = new Set,
            re = e => {
                te.add(e.id), e.on("destroyed", (() => te.delete(e.id)))
            },
            ne = e => te.has(e.id);

        function ie(e, t) {
            n.ipcMain.on(e, se(t))
        }

        function oe(e, t) {
            n.ipcMain.handle(e, se(t))
        }

        function se(e) {
            return (t, ...r) => {
                if (ne(t.sender)) return e(t, ...r);
                log.error(`IPC message received from invalid sender: ${t.senderFrame.url}`)
            }
        }
        var ae = r(3575);

        function le(e) {
            try {
                const t = n.shell.readShortcutLink(e);
                if (void 0 === t.toastActivatorClsid || "" === t.toastActivatorClsid) return;
                return t.toastActivatorClsid
            } catch (t) {
                return void log.error(`Error looking for toast activator CLSID in shortcut ${e}`, t)
            }
        }
        let ue;
        var ce = r(6982),
            he = r(8030),
            de = r.n(he);

        function fe(e) {
            if ("undefined" != typeof window && window.crypto) {
                const t = new Uint8Array(e);
                return crypto.getRandomValues(t), t
            }
            return (0, ce.randomBytes)(e)
        }

        function pe() {
            return de()({
                random: fe(16)
            })
        }
        let ge;
        const me = () => (0, t.join)(n.app.getPath("userData"), ".update-id"),
            ve = e => (0, g.writeFile)(me(), e).then((() => e));
        class ye {
            window;
            emitter = new z.Emitter;
            _loadTime = null;
            _rendererReadyTime = null;
            isDownloadingUpdate = !1;
            minWidth = 960;
            minHeight = 660;
            shouldMaximizeOnShow = !1;
            constructor() {
                const e = ee()({
                        defaultWidth: this.minWidth,
                        defaultHeight: this.minHeight,
                        maximize: !1
                    }),
                    t = {
                        x: e.x,
                        y: e.y,
                        width: e.width,
                        height: e.height,
                        minWidth: this.minWidth,
                        minHeight: this.minHeight,
                        show: !1,
                        backgroundColor: "#fff",
                        webPreferences: {
                            disableBlinkFeatures: "Auxclick",
                            nodeIntegration: !0,
                            spellcheck: !0,
                            contextIsolation: !1
                        },
                        acceptFirstMouse: !0,
                        frame: !1
                    };
                this.window = new n.BrowserWindow(t), re(this.window.webContents),
                    function (e) {
                        (0, ae.bz)(((t, r, n) => {
                            G(e.webContents, "notification-event", t, r, n)
                        }))
                    }(this.window), e.manage(this.window), this.shouldMaximizeOnShow = e.isMaximized;
                let r = !1,
                    i = !1;
                n.app.on("before-quit", (() => {
                    r = !0
                })), ie("will-quit", (e => {
                    r = !0, e.returnValue = !0
                })), ie("will-quit-even-if-updating", (e => {
                    r = !0, i = !0, e.returnValue = !0
                })), ie("cancel-quitting", (e => {
                    r = !1, i = !1, e.returnValue = !0
                })), this.window.on("close", (e => {
                    if (!i && this.isDownloadingUpdate) return e.preventDefault(), G(this.window.webContents, "show-installing-update"), void this.show();
                    n.nativeTheme.removeAllListeners(), n.autoUpdater.removeAllListeners(), (0, ae.op)()
                })), this.window.once("ready-to-show", (() => {
                    this.window.on("unmaximize", (() => {
                        setTimeout((() => {
                            const e = this.window.getBounds();
                            e.width += 1, this.window.setBounds(e), e.width -= 1, this.window.setBounds(e)
                        }), 5)
                    }))
                }))
            }
            load() {
                let e = 0;
                var r;
                this.window.webContents.once("did-start-loading", (() => {
                    this._rendererReadyTime = null, this._loadTime = null, e = X()
                })), this.window.webContents.once("did-finish-load", (() => {
                    this._loadTime = X() - e, this.maybeEmitDidLoad()
                })), this.window.webContents.on("did-finish-load", (() => {
                    this.window.webContents.setVisualZoomLevelLimits(1, 1)
                })), this.window.webContents.on("did-fail-load", (() => {
                    this.window.webContents.openDevTools(), this.window.show()
                })), r = (e, t) => {
                    this._rendererReadyTime = t, this.maybeEmitDidLoad()
                }, n.ipcMain.once("renderer-ready", se(r)), this.window.on("focus", (() => G(this.window.webContents, "focus"))), this.window.on("blur", (() => G(this.window.webContents, "blur"))), Y(this.window), this.window.loadURL(((...e) => (0, A.pathToFileURL)(t.resolve(...e)).toString())(__dirname, "index.html")), n.nativeTheme.addListener("updated", ((e, t) => {
                    G(this.window.webContents, "native-theme-updated")
                })), this.setupAutoUpdater()
            }
            maybeEmitDidLoad() {
                this.rendererLoaded && this.emitter.emit("did-load", null)
            }
            get rendererLoaded() {
                return !!this.loadTime && !!this.rendererReadyTime
            }
            onClosed(e) {
                this.window.on("closed", e)
            }
            onDidLoad(e) {
                return this.emitter.on("did-load", e)
            }
            isMinimized() {
                return this.window.isMinimized()
            }
            isVisible() {
                return this.window.isVisible()
            }
            restore() {
                this.window.restore()
            }
            isFocused() {
                return this.window.isFocused()
            }
            focus() {
                this.window.focus()
            }
            selectAllWindowContents() {
                this.window.webContents.selectAll()
            }
            show() {
                this.window.show(), this.shouldMaximizeOnShow && (this.shouldMaximizeOnShow = !1, this.window.maximize())
            }
            sendMenuEvent(e) {
                this.show(), G(this.window.webContents, "menu-event", e)
            }
            sendURLAction(e) {
                this.show(), G(this.window.webContents, "url-action", e)
            }
            sendLaunchTimingStats(e) {
                G(this.window.webContents, "launch-timing-stats", e)
            }
            sendAppMenu() {
                const e = n.Menu.getApplicationMenu();
                if (e) {
                    const t = J(e);
                    G(this.window.webContents, "app-menu", t)
                }
            }
            dialogDidOpen() {
                this.window.isFocused() || (this.window.once("focus", (() => this.window.flashFrame(!1))), this.window.flashFrame(!0))
            }
            sendCertificateError(e, t, r) {
                G(this.window.webContents, "certificate-error", e, t, r)
            }
            showCertificateTrustDialog(e, t) {
                n.dialog.showCertificateTrustDialog(this.window, {
                    certificate: e,
                    message: t
                }, (() => {}))
            }
            get loadTime() {
                return this._loadTime
            }
            get rendererReadyTime() {
                return this._rendererReadyTime
            }
            destroy() {
                this.window.destroy()
            }
            setupAutoUpdater() {
                n.autoUpdater.on("error", (e => {
                    this.isDownloadingUpdate = !1, G(this.window.webContents, "auto-updater-error", e)
                })), n.autoUpdater.on("checking-for-update", (() => {
                    this.isDownloadingUpdate = !1, G(this.window.webContents, "auto-updater-checking-for-update")
                })), n.autoUpdater.on("update-available", (() => {
                    this.isDownloadingUpdate = !0, G(this.window.webContents, "auto-updater-update-available")
                })), n.autoUpdater.on("update-not-available", (() => {
                    this.isDownloadingUpdate = !1, G(this.window.webContents, "auto-updater-update-not-available")
                })), n.autoUpdater.on("update-downloaded", (() => {
                    this.isDownloadingUpdate = !1, G(this.window.webContents, "auto-updater-update-downloaded")
                }))
            }
            async checkForUpdates(e) {
                try {
                    n.autoUpdater.setFeedURL({
                        url: await we(e)
                    }), n.autoUpdater.checkForUpdates()
                } catch (e) {
                    return e
                }
            }
            quitAndInstallUpdate() {
                n.autoUpdater.quitAndInstall()
            }
            minimizeWindow() {
                this.window.minimize()
            }
            maximizeWindow() {
                this.window.maximize()
            }
            unmaximizeWindow() {
                this.window.unmaximize()
            }
            closeWindow() {
                this.window.close()
            }
            isMaximized() {
                return this.window.isMaximized()
            }
            getCurrentWindowState() {
                return W(this.window)
            }
            getCurrentWindowZoomFactor() {
                return this.window.webContents.zoomFactor
            }
            setWindowZoomFactor(e) {
                this.window.webContents.zoomFactor = e
            }
            async showSaveDialog(e) {
                const {
                    canceled: t,
                    filePath: r
                } = await n.dialog.showSaveDialog(this.window, e);
                return t || void 0 === r ? null : r
            }
            async showOpenDialog(e) {
                const {
                    filePaths: t
                } = await n.dialog.showOpenDialog(this.window, e);
                return t.length > 0 ? t[0] : null
            }
        }
        const we = async e => {
            try {
                const t = await (async () => ge ?? (0, g.readFile)(me(), "utf8").then((e => e.trim())).then((e => 36 === e.length ? e : ve(pe()))).catch((() => ve(pe()))).catch((e => {
                    log.error("Could not read update id", e)
                })).then((e => ge = e)))();
                if (!t) return e;
                const r = new URL(e);
                return r.searchParams.set("guid", t), r.toString()
            } catch (t) {
                return e
            }
        };

        function be(e) {
            return e.id || e.label || e.role || "unknown"
        }

        function _e(e, t = "@", r = new Set) {
            for (const n of e) {
                let e = 0,
                    i = n.id;
                if (!i)
                    do {
                        i = `${t}.${be(n)}${e++||""}`
                    } while (r.has(i));
                n.id = i, r.add(i), n.submenu && _e(n.submenu, n.id, r)
            }
        }

        function Ee(e) {
            const t = e.endsWith("\\") ? e : `${e}\\`;
            n.shell.openPath(t).then((t => {
                "" !== t && log.error(`Failed to open directory (${e}): ${t}`)
            }))
        }
        var Se;

        function Ce({
            selectedExternalEditor: e,
            selectedShell: t,
            askForConfirmationOnForcePush: r,
            askForConfirmationOnRepositoryRemoval: i,
            hasCurrentPullRequest: s = !1,
            contributionTargetDefaultBranch: a = "默认分支",
            isForcePushForCurrentRepository: l = !1,
            isStashedChangesVisible: u = !1,
            askForConfirmationWhenStashingAllChanges: c = !0
        }) {
            a = function (e) {
                if (e.length <= 25) return e;
                const t = [...e];
                if (t.length <= 25) return e;
                const r = t.reduce(((e, t) => (t >= "︀" && t <= "️" ? e.length && e.push(`${e.pop()}${t}`) : e.push(t), e)), []);
                return r.length <= 25 ? e : `${r.slice(0,25).join("")}…`
            }(a);
            const h = i ? "移除(&R)" : "移除(&R)",
                d = s ? "在 GitHub 上查看拉取请求(&P)" : "创建拉取请求",
                f = new Array,
                p = {
                    type: "separator"
                },
                m = {
                    label: "文件(&F)",
                    submenu: [{
                        label: "新建仓库(&R)",
                        id: "new-repository",
                        click: Oe("create-repository"),
                        accelerator: "CmdOrCtrl+N"
                    }, p, {
                        label: "添加本地仓库(&L)",
                        id: "add-local-repository",
                        accelerator: "CmdOrCtrl+O",
                        click: Oe("add-local-repository")
                    }, {
                        label: "克隆仓库(&N)",
                        id: "clone-repository",
                        accelerator: "CmdOrCtrl+Shift+O",
                        click: Oe("clone-repository")
                    }]
                }; {
                const e = "Alt+F4";
                m.submenu.push(p, {
                    label: "选项(&O)",
                    id: "preferences",
                    accelerator: "CmdOrCtrl+,",
                    click: Oe("show-preferences")
                }, p, {
                    role: "quit",
                    label: "退出(&X)",
                    accelerator: e
                })
            }
            f.push(m), f.push({
                label: "编辑(&E)",
                submenu: [{
                    role: "undo",
                    label: "撤销(&U)"
                }, {
                    role: "redo",
                    label: "恢复(&R)"
                }, p, {
                    role: "cut",
                    label: "剪切(&T)"
                }, {
                    role: "copy",
                    label: "复制(&C)"
                }, {
                    role: "paste",
                    label: "粘贴(&P)"
                }, {
                    label: "全选(&A)",
                    accelerator: "CmdOrCtrl+A",
                    click: Oe("select-all")
                }, p, {
                    id: "find",
                    label: "查找(&F)",
                    accelerator: "CmdOrCtrl+F",
                    click: Oe("find-text")
                }]
            }), f.push({
                label: "查看(&V)",
                submenu: [{
                    label: "更改(&C)",
                    id: "show-changes",
                    accelerator: "CmdOrCtrl+1",
                    click: Oe("show-changes")
                }, {
                    label: "历史(&H)",
                    id: "show-history",
                    accelerator: "CmdOrCtrl+2",
                    click: Oe("show-history")
                }, {
                    label: "仓库列表(&L)",
                    id: "show-repository-list",
                    accelerator: "CmdOrCtrl+T",
                    click: Oe("choose-repository")
                }, {
                    label: "分支列表(&B)",
                    id: "show-branches-list",
                    accelerator: "CmdOrCtrl+B",
                    click: Oe("show-branches")
                }, p, {
                    label: "Go to &Summary",
                    id: "go-to-commit-message",
                    accelerator: "CmdOrCtrl+G",
                    click: Oe("go-to-commit-message")
                }, {
                    label: xe(u),
                    id: "toggle-stashed-changes",
                    accelerator: "Ctrl+H",
                    click: Oe(u ? "hide-stashed-changes" : "show-stashed-changes")
                }, {
                    label: "切换全屏(&F)",
                    role: "togglefullscreen"
                }, p, {
                    label: "重置缩放",
                    accelerator: "CmdOrCtrl+0",
                    click: Ae(Se.Reset)
                }, {
                    label: "放大",
                    accelerator: "CmdOrCtrl+=",
                    click: Ae(Se.In)
                }, {
                    label: "缩小",
                    accelerator: "CmdOrCtrl+-",
                    click: Ae(Se.Out)
                }, {
                    label: "Expand active resizable",
                    id: "increase-active-resizable-width",
                    accelerator: "CmdOrCtrl+9",
                    click: Oe("increase-active-resizable-width")
                }, {
                    label: "Contract active resizable",
                    id: "decrease-active-resizable-width",
                    accelerator: "CmdOrCtrl+8",
                    click: Oe("decrease-active-resizable-width")
                }, p, {
                    label: "重新加载(&R)",
                    id: "reload-window",
                    accelerator: "CmdOrCtrl+Alt+R",
                    click(e, t) {
                        t instanceof n.BrowserWindow && t.reload()
                    },
                    visible: !1
                }, {
                    id: "show-devtools",
                    label: "切换开发者工具(&T)",
                    accelerator: "Ctrl+Shift+I",
                    click(e, t) {
                        t instanceof n.BrowserWindow && t.webContents.toggleDevTools()
                    }
                }]
            });
            const v = function (e, t) {
                    return e ? t ? "强制推送(&U)" : "强制推送(&U)" : "推送(&U)"
                }(l, r),
                y = l ? "force-push" : "push";
            f.push({
                label: "仓库(&R)",
                id: "repository",
                submenu: [{
                    id: "push",
                    label: v,
                    accelerator: "CmdOrCtrl+P",
                    click: Oe(y)
                }, {
                    id: "pull",
                    label: "拉取(&L)",
                    accelerator: "CmdOrCtrl+Shift+P",
                    click: Oe("pull")
                }, {
                    id: "fetch",
                    label: "同步(&F)",
                    accelerator: "CmdOrCtrl+Shift+T",
                    click: Oe("fetch")
                }, {
                    label: h,
                    id: "remove-repository",
                    accelerator: "CmdOrCtrl+Backspace",
                    click: Oe("remove-repository")
                }, p, {
                    id: "view-repository-on-github",
                    label: "在 GitHub 上查看(&V)",
                    accelerator: "CmdOrCtrl+Shift+G",
                    click: Oe("view-repository-on-github")
                }, {
                    label: `使用 ${t??"shell"} 打开(&O)`,
                    id: "open-in-shell",
                    accelerator: "Ctrl+`",
                    click: Oe("open-in-shell")
                }, {
                    label: "在文件管理器中显示(&X)",
                    id: "open-working-directory",
                    accelerator: "CmdOrCtrl+Shift+F",
                    click: Oe("open-working-directory")
                }, {
                    label: `使用 ${e??"external editor"} 打开(&O)`,
                    id: "open-external-editor",
                    accelerator: "CmdOrCtrl+Shift+A",
                    click: Oe("open-external-editor")
                }, p, {
                    id: "create-issue-in-repository-on-github",
                    label: "在 GitHub 中新建议题(&I)",
                    accelerator: "CmdOrCtrl+I",
                    click: Oe("create-issue-in-repository-on-github")
                }, p, {
                    label: "仓库设置(&S)",
                    id: "show-repository-settings",
                    click: Oe("show-repository-settings")
                }]
            });
            const w = [{
                label: "新建分支(&B)",
                id: "create-branch",
                accelerator: "CmdOrCtrl+Shift+N",
                click: Oe("create-branch")
            }, {
                label: "重命名分支(&R)",
                id: "rename-branch",
                accelerator: "CmdOrCtrl+Shift+R",
                click: Oe("rename-branch")
            }, {
                label: "删除分支(&D)",
                id: "delete-branch",
                accelerator: "CmdOrCtrl+Shift+D",
                click: Oe("delete-branch")
            }, p, {
                label: "放弃所有更改",
                id: "discard-all-changes",
                accelerator: "CmdOrCtrl+Shift+Backspace",
                click: Oe("discard-all-changes")
            }, {
                label: c ? "暂存所有更改(&S)" : "暂存所有更改(&S)",
                id: "stash-all-changes",
                accelerator: "CmdOrCtrl+Shift+S",
                click: Oe("stash-all-changes")
            }, p, {
                label: `从 ${a} 中更新(&U)`,
                id: "update-branch-with-contribution-target-branch",
                accelerator: "CmdOrCtrl+Shift+U",
                click: Oe("update-branch-with-contribution-target-branch")
            }, {
                label: "分支对比(&C)",
                id: "compare-to-branch",
                accelerator: "CmdOrCtrl+Shift+B",
                click: Oe("compare-to-branch")
            }, {
                label: "合并到当前分支(&M)",
                id: "merge-branch",
                accelerator: "CmdOrCtrl+Shift+M",
                click: Oe("merge-branch")
            }, {
                label: "压缩并合并到当前分支(&H)",
                id: "squash-and-merge-branch",
                accelerator: "CmdOrCtrl+Shift+H",
                click: Oe("squash-and-merge-branch")
            }, {
                label: "R&ebase current branch…",
                id: "rebase-branch",
                accelerator: "CmdOrCtrl+Shift+E",
                click: Oe("rebase-branch")
            }, p, {
                label: "在 GitHub 上比较(&G)",
                id: "compare-on-github",
                accelerator: "CmdOrCtrl+Shift+C",
                click: Oe("compare-on-github")
            }, {
                label: "在 GitHub 上查看分支",
                id: "branch-on-github",
                accelerator: "CmdOrCtrl+Alt+B",
                click: Oe("branch-on-github")
            }];
            w.push({
                label: "预览拉取请求",
                id: "preview-pull-request",
                accelerator: "CmdOrCtrl+Alt+P",
                click: Oe("preview-pull-request")
            }), w.push({
                label: d,
                id: "create-pull-request",
                accelerator: "CmdOrCtrl+R",
                click: Oe("open-pull-request")
            }), f.push({
                label: "分支(&B)",
                id: "branch",
                submenu: w
            });
            const b = [{
                label: "报告问题",
                click() {
                    n.shell.openExternal("https://github.com/desktop/desktop/issues/new/choose").catch((e => log.error("Failed opening issue creation page", e)))
                }
            }, {
                label: "联系 GitHub 支持(&C)",
                click() {
                    n.shell.openExternal(`https://github.com/contact?from_desktop_app=1&app_version=${n.app.getVersion()}`).catch((e => log.error("Failed opening contact support page", e)))
                }
            }, {
                label: "显示用户指南",
                click() {
                    n.shell.openExternal("https://docs.github.com/en/desktop").catch((e => log.error("Failed opening user guides page", e)))
                }
            }, {
                label: "显示键盘快捷键",
                click() {
                    n.shell.openExternal("https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/keyboard-shortcuts").catch((e => log.error("Failed opening keyboard shortcuts page", e)))
                }
            }, {
                label: "在文件管理器中查看日志(&H)",
                click() {
                    const e = o();
                    (0, g.mkdir)(e, {
                        recursive: !0
                    }).then((() => Ee(e))).catch((e => log.error("Failed opening logs directory", e)))
                }
            }];
            return f.push({
                label: "帮助(&H)",
                submenu: [...b, p, {
                    label: "关于 GitHub Desktop(&A)",
                    click: Oe("show-about"),
                    id: "about"
                }]
            }), _e(f), n.Menu.buildFromTemplate(f)
        }

        function xe(e) {
            return e ? "隐藏暂存的更改(&I)" : "显示暂存的更改(&W)"
        }

        function Oe(e) {
            return (t, r) => {
                const i = r instanceof n.BrowserWindow ? r : n.BrowserWindow.getAllWindows()[0];
                void 0 !== i && G(i.webContents, "menu-event", e)
            }
        }! function (e) {
            e[e.Reset = 0] = "Reset", e[e.In = 1] = "In", e[e.Out = 2] = "Out"
        }(Se || (Se = {}));
        const Re = [.67, .75, .8, .9, 1, 1.1, 1.25, 1.5, 1.75, 2],
            Me = Re.slice().reverse();

        function Ae(e) {
            return (t, r) => {
                if (!(r instanceof n.BrowserWindow)) return;
                const {
                    webContents: i
                } = r;
                if (e === Se.Reset) i.zoomFactor = 1, G(i, "zoom-factor-changed", 1);
                else {
                    const t = i.zoomFactor,
                        r = e === Se.In ? Re : Me,
                        n = (o = t, r.reduce(((e, t) => Math.abs(t - o) < Math.abs(e - o) ? t : e))),
                        s = r.find((t => e === Se.In ? t > n : t < n)),
                        a = void 0 === s ? n : s;
                    i.zoomFactor = a, G(i, "zoom-factor-changed", a)
                }
                var o
            }
        }

        function ke(e) {
            let t = !1;
            if (e.submenu instanceof n.Menu)
                for (const r of e.submenu.items) ke(r) && (t = !0);
            if (t || e.role) return !0;
            const r = e.id;
            return "show-devtools" === r || "reload-window" === r || (e.enabled = !1, !1)
        }

        function* Te(e) {
            for (const t of e.items) yield t, "submenu" === t.type && void 0 !== t.submenu && (yield* Te(t.submenu))
        }
        var Le = r(2334);

        function je() {
            return v.release()
        }
        p((() => !1)), p((() => !1));
        const Ne = p((() => !1)),
            Pe = (p((() => !1)), p((() => !1)), p((() => function () {
                const e = je();
                return void 0 !== e && (0, Le.compare)(e, "10.0.17666", ">=")
            }())), p((() => function () {
                const e = je();
                return void 0 !== e && (0, Le.compare)(e, "10", "<")
            }()))),
            De = p((() => !1));
        p((() => De() || Pe())), new Set(["LOCAL_GIT_DIRECTORY"]);
        const $e = /[\x00-\x20\x7F~^:?*\[\\|""<>]+|@{|\.\.+|^\.|\.$|\.lock$|\/$/g;

        function Fe(e, t) {
            const r = e[t];
            return null == r ? null : Array.isArray(r) ? r[0] : r
        }
        var Ie = r(5303);

        function Ue() {
            for (const t of (0, Ie.enumerateValues)(Ie.HKEY.HKEY_CURRENT_USER, "Environment"))
                if ("Path" === t.name && ((e = t).type === Ie.RegistryValueType.REG_SZ || e.type === Ie.RegistryValueType.REG_EXPAND_SZ)) return t;
            var e;
            return null
        }

        function He() {
            const e = Ue();
            if (null === e) throw new Error("Could not find PATH environment variable");
            return e.data.split(";").filter((e => e.length > 0))
        }
        async function Be(e) {
            const t = Ue();
            if (null === t) throw new Error("Could not find PATH environment variable");
            try {
                (0, Ie.setValue)(Ie.HKEY.HKEY_CURRENT_USER, "Environment", "Path", t.type, e.join(";"))
            } catch (e) {
                throw log.error("Failed setting PATH environment variable", e), new Error("Could not set the PATH environment variable")
            }
        }
        const qe = t.resolve(process.execPath, ".."),
            ze = t.resolve(qe, ".."),
            Ge = t.resolve(t.join(ze, "Update.exe")),
            We = t.basename(process.execPath);
        async function Ye() {
            const e = Ke();
            await (0, g.mkdir)(e, {
                recursive: !0
            }), await
            function (e) {
                const r = `@echo off\n"%~dp0\\${Ze(e,"resources/app/static/github.bat")}" %*`,
                    n = t.join(e, "github.bat");
                return (0, g.writeFile)(n, r)
            }(e), await
            function (e) {
                const r = `#!/usr/bin/env bash\n  DIR="$( cd "$( dirname "\${BASH_SOURCE[0]}" )" && pwd )"\n  sh "$DIR/${Ze(e,"resources/app/static/github.sh").replace(/\\/g,"/")}" "$@"`,
                    n = t.join(e, "github");
                return (0, g.writeFile)(n, r, {
                    encoding: "utf8",
                    mode: 755
                })
            }(e);
            try {
                const t = He();
                t.indexOf(e) < 0 && await Be([...t, e])
            } catch (e) {
                log.error("Failed inserting bin path into PATH environment variable", e)
            }
        }
        async function Ve() {
            try {
                const e = He(),
                    t = Ke();
                return Be(e.filter((e => e !== t)))
            } catch (e) {
                log.error("Failed removing bin path from PATH environment variable", e)
            }
        }

        function Ke() {
            return t.resolve(process.execPath, "../../bin")
        }

        function Ze(e, r) {
            const n = t.resolve(process.execPath, "..");
            return t.relative(e, t.join(n, r))
        }
        async function Je(e) {
            await
            function (e, t) {
                try {
                    const r = (0, I.spawn)(e, t);
                    return new Promise(((n, i) => {
                        let o = "";
                        r.stdout && r.stdout.on("data", (e => {
                            o += e
                        })), r.on("close", (r => {
                            0 === r ? n(o) : i(new Error(`Command "${e} ${t}" failed: "${o}"`))
                        })), r.on("error", (e => {
                            i(e)
                        })), r.stdin && r.stdin.end()
                    }))
                } catch (e) {
                    return Promise.reject(e)
                }
            }(Ge, e)
        }

        function Xe(e) {
            return Je(["--createShortcut", We, "-l", e.join(",")])
        }

        function Qe(e) {
            return et(e) ? "x64-emulated" : "arm64" === process.arch ? "arm64" : "x64"
        }

        function et(e) {
            return "x64" === process.arch && !0 === e.runningUnderARM64Translation
        }
        let tt = null;
        async function rt() {
            if (!tt) {
                let e = await async function () {
                    let e;
                    try {
                        e = (await (0, g.readFile)(it(), "utf8")).trim(), 36 !== e.length && (e = void 0)
                    } catch (e) {}
                    return e
                }();
                void 0 === e && (e = pe(), await nt(e).catch((e => {
                    log.error(e)
                }))), tt = e
            }
            return tt
        }
        async function nt(e) {
            tt = e, await (0, g.writeFile)(it(), e, "utf8")
        }
        const it = () => (0, t.join)(n.app.getPath("userData"), ".guid");
        let ot = !1;
        async function st(e, t, r) {
            if (!0 !== r) {
                if (ot) return;
                ot = !0
            }
            const i = new Map;
            if (i.set("name", e.name), i.set("message", e.message), e.stack && i.set("stack", e.stack), i.set("platform", "win32"), i.set("architecture", Qe(n.app)), i.set("sha", "5be94b37835898b4eab90400f7d1bf0480daacf2"), i.set("version", n.app.getVersion()), i.set("guid", await rt()), t)
                for (const e of Object.keys(t)) i.set(e, t[e]);
            const o = [...i.entries()].map((([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(t)}`)).join("&");
            try {
                await new Promise(((e, t) => {
                    const i = r ? "https://central.github.com/api/desktop-non-fatal/exception" : "https://central.github.com/api/desktop/exception",
                        s = n.net.request({
                            method: "POST",
                            url: i
                        });
                    s.setHeader("Content-Type", "application/x-www-form-urlencoded"), s.on("response", (r => {
                        200 === r.statusCode ? e() : t(`Got ${r.statusCode} - ${r.statusMessage} from central`)
                    })), s.on("error", t), s.end(o)
                })), log.info("Error report submitted")
            } catch (t) {
                log.error("Failed submitting error report", e)
            }
        }
        class at {
            window;
            emitter = new z.Emitter;
            errorType;
            error;
            hasFinishedLoading = !1;
            hasSentReadyEvent = !1;
            constructor(e, t) {
                this.window = new n.BrowserWindow({
                    width: 600,
                    height: 500,
                    minWidth: 600,
                    minHeight: 500,
                    show: !1,
                    backgroundColor: "#fff",
                    webPreferences: {
                        disableBlinkFeatures: "Auxclick",
                        nodeIntegration: !0,
                        spellcheck: !1,
                        contextIsolation: !1
                    },
                    frame: !1
                }), re(this.window.webContents), this.error = t, this.errorType = e
            }
            load() {
                log.debug("Starting crash process"), this.window.webContents.once("did-start-loading", (() => {
                    log.debug("Crash process in startup")
                })), this.window.webContents.once("did-finish-load", (() => {
                    log.debug("Crash process started"), this.hasFinishedLoading = !0, this.maybeEmitDidLoad()
                })), this.window.webContents.on("did-finish-load", (() => {
                    this.window.webContents.setVisualZoomLevelLimits(1, 1)
                })), this.window.webContents.on("did-fail-load", (() => {
                    log.error("Crash process failed to load"), this.emitter.emit("did-fail-load", null)
                })), ie("crash-ready", (() => {
                    log.debug("Crash process is ready"), this.hasSentReadyEvent = !0, this.sendError(), this.maybeEmitDidLoad()
                })), ie("crash-quit", (() => {
                    log.debug("Got quit signal from crash process"), this.window.close()
                })), Y(this.window), this.window.loadURL(`file://${__dirname}/crash.html`)
            }
            maybeEmitDidLoad() {
                this.hasFinishedLoading && this.hasSentReadyEvent && this.emitter.emit("did-load", null)
            }
            onClose(e) {
                this.window.on("closed", e)
            }
            onFailedToLoad(e) {
                this.emitter.on("did-fail-load", e)
            }
            onDidLoad(e) {
                return this.emitter.on("did-load", e)
            }
            focus() {
                this.window.focus()
            }
            show() {
                log.debug("Showing crash process window"), this.window.show()
            }
            sendError() {
                const e = {
                        stack: this.error.stack,
                        message: this.error.message,
                        name: this.error.name
                    },
                    t = {
                        type: this.errorType,
                        error: e
                    };
                G(this.window.webContents, "error", t)
            }
            destroy() {
                this.window.destroy()
            }
        }
        let lt = !1;

        function ut(e, t) {
            return (e ? e.toLowerCase() : e) === (t ? t.toLowerCase() : t)
        }

        function ct() {
            const e = n.Menu.buildFromTemplate([{
                role: "editMenu"
            }]).items[0];
            return (e && e.submenu ? e.submenu.items : []).filter((e => !ut(e.role, "pasteandmatchstyle")))
        }

        function ht(e, t, r) {
            const n = dt(e, t);
            if (void 0 === r) return n;
            for (const e of r) n.append(e);
            return n
        }

        function dt(e, t, r = []) {
            const i = new n.Menu;
            for (const [o, s] of e.entries())
                if (ut(s.role, "editmenu"))
                    for (const e of ct()) i.append(e);
                else {
                    const e = [...r, o];
                    i.append(new n.MenuItem({
                        label: s.label,
                        type: s.type,
                        enabled: s.enabled,
                        role: s.role,
                        click: () => t(e),
                        submenu: s.submenu ? dt(s.submenu, t, e) : void 0
                    }))
                } return i
        }
        class ft {
            subscribe;
            listeners = new Set;
            constructor(e) {
                this.subscribe = e
            }
            addEventListener(e) {
                const t = 0 === this.listeners.size;
                this.listeners.add(e), t && this.subscribe((e => this.listeners.forEach((t => t(e)))))
            }
            removeEventListener(e) {
                this.listeners.delete(e), 0 === this.listeners.size && this.subscribe(null)
            }
        }
        class pt {
            subscribe;
            eventHandler;
            listeners = new Set;
            constructor(e, t) {
                this.subscribe = e, this.eventHandler = t
            }
            addEventListener(e) {
                const t = 0 === this.listeners.size;
                this.listeners.add(e), t && this.subscribe((async (e, t) => {
                    t(await this.eventHandler([...this.listeners], e))
                }))
            }
            removeEventListener(e) {
                this.listeners.delete(e), 0 === this.listeners.size && this.subscribe(null)
            }
        }
        class gt {
            onBeforeRedirect;
            onBeforeRequest;
            onBeforeSendHeaders;
            onCompleted;
            onErrorOccurred;
            onHeadersReceived;
            onResponseStarted;
            onSendHeaders;
            constructor(e) {
                this.onBeforeRedirect = new ft(e.onBeforeRedirect.bind(e)), this.onBeforeRequest = new pt(e.onBeforeRequest.bind(e), (async (e, t) => {
                    let r = {};
                    for (const n of e)
                        if (r = await n(t), !0 === r.cancel || void 0 !== r.redirectURL) break;
                    return r
                })), this.onBeforeSendHeaders = new pt(e.onBeforeSendHeaders.bind(e), (async (e, t) => {
                    let r = t,
                        n = {};
                    for (const t of e) {
                        if (n = await t(r), !0 === n.cancel) break;
                        if (void 0 !== n.requestHeaders) {
                            const e = mt(n.requestHeaders);
                            r = {
                                ...r,
                                requestHeaders: e
                            }
                        }
                    }
                    return r
                })), this.onCompleted = new ft(e.onCompleted.bind(e)), this.onErrorOccurred = new ft(e.onErrorOccurred.bind(e)), this.onHeadersReceived = new pt(e.onHeadersReceived.bind(e), (async (e, t) => {
                    let r = t,
                        n = {};
                    for (const t of e) {
                        if (n = await t(r), !0 === n.cancel) break;
                        if (void 0 !== n.responseHeaders) {
                            const e = vt(n.responseHeaders);
                            r = {
                                ...r,
                                responseHeaders: e
                            }
                        }
                        if (void 0 !== n.statusLine) {
                            const {
                                statusLine: e
                            } = n, t = parseInt(e.split(" ", 2)[1], 10);
                            r = {
                                ...r,
                                statusLine: e,
                                statusCode: t
                            }
                        }
                    }
                    return r
                })), this.onResponseStarted = new ft(e.onResponseStarted.bind(e)), this.onSendHeaders = new ft(e.onSendHeaders.bind(e))
            }
        }
        const mt = e => Object.entries(e).reduce(((e, [t, r]) => (e[t] = Array.isArray(r) ? r.join(",") : r, e)), {}),
            vt = e => Object.entries(e).reduce(((e, [t, r]) => (e[t] = Array.isArray(r) ? r : r.split(","), e)), {});
        Error;
        var yt = r(3657);
        const wt = new yt.SemVer("3.1.0"),
            bt = (new Map, new Map),
            _t = e => {
                if (e === Nt()) return !0;
                const {
                    hostname: t
                } = new URL(e);
                return "api.github.com" === t || "github.com" === t
            },
            Et = e => new URL(e).hostname.endsWith(".ghe.com");

        function St(e) {
            const t = `endpoint-version:${e}`,
                r = bt.get(t);
            if (void 0 !== r) return r;
            const n = localStorage.getItem(t),
                i = null === n ? null : yt.parse(n);
            return null !== i && bt.set(t, i), i
        }

        function Ct(e, t, r) {
            return void 0 !== e && !1 !== e && (!0 === e ? t : (null == r && K("Need to provide a version to compare against"), t && yt.satisfies(r, e)))
        }
        const xt = ({
            dotcom: e,
            ghe: t,
            es: r
        }, n = St) => i => Ct(e, _t(i)) || Ct(t ?? e, Et(i)) || Ct(r, (e => !_t(e) && !Et(e))(i), n(i) ?? wt);
        xt({
            es: ">= 3.0.0"
        }), xt({
            dotcom: !0,
            es: ">= 3.4.0"
        }), xt({
            dotcom: !0
        }), xt({
            dotcom: !0
        }), xt({
            dotcom: !0
        }), xt({
            dotcom: !0
        }), new Set;
        const Ot = process.env.DESKTOP_GITHUB_DOTCOM_API_ENDPOINT,
            Rt = process.env.DESKTOP_GITHUB_DOTCOM_HTML_URL,
            Mt = process.env.DESKTOP_GITHUB_DOTCOM_ADDITIONAL_COOKIES;
        var At, kt, Tt, Lt, jt;

        function Nt() {
            return Ot && Ot.length > 0 ? Ot : "https://api.github.com"
        }
        void 0 !== Mt && (document.cookie += "; " + Mt),
            function (e) {
                e[e.NotModified = 304] = "NotModified", e[e.NotFound = 404] = "NotFound"
            }(At || (At = {})), Error,
            function (e) {
                e.Queued = "queued", e.InProgress = "in_progress", e.Completed = "completed"
            }(kt || (kt = {})),
            function (e) {
                e.ActionRequired = "action_required", e.Canceled = "cancelled", e.TimedOut = "timed_out", e.Failure = "failure", e.Neutral = "neutral", e.Success = "success", e.Skipped = "skipped", e.Stale = "stale"
            }(Tt || (Tt = {})),
            function (e) {
                e.Creation = "creation", e.Update = "update", e.RequiredDeployments = "required_deployments", e.RequiredSignatures = "required_signatures", e.RequiredStatusChecks = "required_status_checks", e.PullRequest = "pull_request", e.CommitMessagePattern = "commit_message_pattern", e.CommitAuthorEmailPattern = "commit_author_email_pattern", e.CommitterEmailPattern = "committer_email_pattern", e.BranchNamePattern = "branch_name_pattern"
            }(Lt || (Lt = {})),
            function (e) {
                e.StartsWith = "starts_with", e.EndsWith = "ends_with", e.Contains = "contains", e.RegexMatch = "regex"
            }(jt || (jt = {})), new Set, new Set(["dev.azure.com", "gitlab.com", "bitbucket.org", "amazonaws.com", "visualstudio.com"]);
        const Pt = "Set spellcheck to English",
            Dt = "Set spellcheck to system language";
        n.app.setAppLogsPath(),
            function () {
                M.install({
                    environment: "node",
                    handleUncaughtExceptions: !1,
                    retrieveSourceMap: T
                });
                const e = Error;
                j = e.prepareStackTrace, e.prepareStackTrace = N
            }();
        let $t = null;
        const Ft = X();
        let It = !1,
            Ut = null,
            Ht = [];

        function Bt(e) {
            It = !0;
            const t = null === $t;
            $t && ($t.destroy(), $t = null),
                function (e, t) {
                    if (log.error($(t)), lt) return;
                    lt = !0,
                        function () {
                            const e = n.Menu.getApplicationMenu();
                            if (e)
                                for (const t of e.items) ke(t)
                        }();
                    const r = new at(e ? "launch" : "generic", t);
                    r.onDidLoad((() => {
                        r.show()
                    })), r.onFailedToLoad((async () => {
                        await n.dialog.showMessageBox({
                            type: "error",
                            title: "Unrecoverable error",
                            message: `GitHub Desktop has encountered an unrecoverable error and will need to restart.\n\nThis has been reported to the team, but if you encounter this repeatedly please report this issue to the GitHub Desktop issue tracker.\n\n${t.stack||t.message}`
                        }), n.app.relaunch(), n.app.quit()
                    })), r.onClose((() => {
                        n.app.relaunch(), n.app.quit()
                    })), r.load()
                }(t, e)
        }

        function qt() {
            return {
                uptime: ((X() - Ft) / 1e3).toFixed(3),
                time: (new Date).toString()
            }
        }
        const zt = "--protocol-launcher",
            Gt = new Set(["x-github-client"]);
        Gt.add("x-github-desktop-auth"), Gt.add("github-windows"), n.app.on("window-all-closed", (() => {})), process.on("uncaughtException", (e => {
            st(e = P(e), qt()), Bt(e)
        }));
        let Wt = !1;
        if (process.argv.length > 1) {
            const e = process.argv[1],
                r = function (e) {
                    switch (e) {
                    case "--squirrel-install":
                        return async function () {
                            await Xe(["StartMenu", "Desktop"]), await Ye()
                        }();
                    case "--squirrel-updated":
                        return async function () {
                            await async function () {
                                const e = v.homedir();
                                if (e) {
                                    const n = t.join(e, "Desktop", "GitHub Desktop.lnk");
                                    return Xe(await (r = n, (0, g.access)(r).then(H()(!0), H()(!1))) ? ["StartMenu", "Desktop"] : ["StartMenu"])
                                }
                                var r;
                                return Xe(["StartMenu", "Desktop"])
                            }(), await Ye()
                        }();
                    case "--squirrel-uninstall":
                        return async function () {
                            return await Je(["--removeShortcut", We]), Ve()
                        }();
                    case "--squirrel-obsolete":
                        return Promise.resolve()
                    }
                    return null
                }(e);
            r ? (Wt = !0, r.catch((t => {
                log.error(`Failed handling Squirrel event: ${e}`, t)
            })).then((() => {
                n.app.quit()
            }))) : Kt(process.argv)
        }

        function Yt(e) {
            log.info("Processing protocol url");
            const t = function (e) {
                const t = A.parse(e, !0),
                    r = t.hostname,
                    n = {
                        name: "unknown",
                        url: e
                    };
                if (!r) return n;
                const i = t.query,
                    o = r.toLowerCase();
                if ("oauth" === o) {
                    const e = Fe(i, "code"),
                        t = Fe(i, "state");
                    return null != e && null != t ? {
                        name: "oauth",
                        code: e,
                        state: t
                    } : n
                }
                const s = t.pathname;
                if (!s || s.length <= 1) return n;
                const a = s.substring(1);
                if ("openrepo" === o) {
                    const e = Fe(i, "pr"),
                        t = Fe(i, "branch"),
                        r = Fe(i, "filepath");
                    if (null != e) {
                        if (!/^\d+$/.test(e)) return n;
                        if (null != t && !/^pr\/\d+$/.test(t)) return n
                    }
                    return null != t && (l = t, $e.test(l)) ? n : {
                        name: "open-repository-from-url",
                        url: a,
                        branch: t,
                        pr: e,
                        filepath: r
                    }
                }
                var l;
                return "openlocalrepo" === o ? {
                    name: "open-repository-from-path",
                    path: decodeURIComponent(a)
                } : n
            }(e);
            Zt((e => {
                e.focus(), e.sendURLAction(t)
            }))
        }
        void 0 === ue && (ue = function () {
            const e = [t.join(v.homedir(), "AppData", "Roaming", "Microsoft", "Windows", "Start Menu", "Programs", "GitHub, Inc", "GitHub Desktop.lnk"), t.join(v.homedir(), "Desktop", "GitHub Desktop.lnk")];
            for (const t of e) {
                const e = le(t);
                if (void 0 !== e) return e
            }
        }(), void 0 === ue && (log.error("Toast activator CLSID not found in any of the shortcuts. Falling back to known CLSIDs."), ue = "{27D44D0C-A542-5B90-BCDB-AC3126048BA2}"), log.info(`Using toast activator CLSID ${ue}`), (0, ae.XT)({
            toastActivatorClsid: ue
        }));
        let Vt = !1;
        if (!Wt) {
            const e = n.app.requestSingleInstanceLock();
            Vt = !e, n.app.on("second-instance", ((e, t, r) => {
                $t && ($t.isMinimized() && $t.restore(), $t.isVisible() || $t.show(), $t.focus()), Kt(t)
            })), Vt && n.app.quit()
        }

        function Kt(e) {
            log.info(`Received possible protocol arguments: ${e.length}`); {
                const t = e.filter((e => {
                    try {
                        const t = A.parse(e);
                        return t.protocol && Gt.has(t.protocol.slice(0, -1))
                    } catch (t) {
                        return log.error(`Unable to parse argument as URL: ${e}`), !1
                    }
                }));
                e.includes(zt) && 1 === t.length ? Yt(t[0]) : log.error(`Malformed launch arguments received: ${e}`)
            }
        }

        function Zt(e) {
            Ht ? Ht.push(e) : $t && e($t)
        }(function (e) {
            return "browser" === e.type && Ne(), !1
        })(process) && async function () {}(), n.app.on("will-finish-launching", (() => {
            n.app.on("open-url", ((e, t) => {
                e.preventDefault(), Yt(t)
            }))
        })), process.env.GITHUB_DESKTOP_DISABLE_HARDWARE_ACCELERATION && (log.info("GITHUB_DESKTOP_DISABLE_HARDWARE_ACCELERATION environment variable set, disabling hardware acceleration"), n.app.disableHardwareAcceleration()), n.app.on("ready", (() => {
            if (Vt || Wt) return;
            Ut = X() - Ft, Gt.forEach((e => function (e) {
                    n.app.setAsDefaultProtocolClient(e, process.execPath, [zt])
                }(e))),
                function () {
                    const e = new ye;
                    e.onClosed((() => {
                        $t = null, It || n.app.quit()
                    })), e.onDidLoad((() => {
                        e.show(), e.sendLaunchTimingStats({
                            mainReadyTime: Ut,
                            loadTime: e.loadTime,
                            rendererReadyTime: e.rendererReadyTime
                        });
                        const t = Ht;
                        Ht = null;
                        for (const r of t) r(e)
                    })), e.load(), $t = e
                }();
            const e = new gt(n.session.defaultSession.webRequest);
            ! function (e) {
                const t = new Map,
                    r = new Set(["devtools:", "file:", "chrome-extension:"]),
                    n = new Set(["authentication", "authorization", "cookie"]);
                e.onBeforeRequest.addEventListener((async e => {
                    const {
                        protocol: n,
                        origin: i
                    } = new URL(e.url);
                    return r.has(n) || t.has(e.id) || t.set(e.id, i), {}
                })), e.onBeforeSendHeaders.addEventListener((async e => {
                    const r = t.get(e.id),
                        {
                            origin: i
                        } = new URL(e.url);
                    if (void 0 === r || r === i) return {
                        requestHeaders: e.requestHeaders
                    };
                    const o = {};
                    for (const [t, r] of Object.entries(e.requestHeaders)) n.has(t.toLowerCase()) || (o[t] = r);
                    return log.debug(`Sanitizing cross-origin redirect to ${i}`), {
                        requestHeaders: o
                    }
                })), e.onCompleted.addEventListener((e => t.delete(e.id)))
            }(e),
            function (e) {
                e.onBeforeSendHeaders.addEventListener((async e => {
                    const {
                        protocol: t,
                        host: r
                    } = new URL(e.url);
                    return "wss:" !== t ? {} : /^alive\.github\.com$/.test(r) || /^alive\.(.*)\.ghe\.com$/.test(r) ? {
                        requestHeaders: {
                            ...e.requestHeaders,
                            Origin: `https://${r.replace("alive.","desktop.")}`
                        }
                    } : {}
                }))
            }(e);
            const t = function (e) {
                let t = new Map;
                return e.onBeforeSendHeaders.addEventListener((async e => {
                    const {
                        origin: r,
                        pathname: n
                    } = new URL(e.url), i = t.get(r);
                    return i && (function (e) {
                        return e.startsWith("/api/v3/enterprise/avatars/")
                    }(n) || function (e) {
                        return /^\/[^/]+\/[^/]+\/assets\/[^/]+\/[^/]+\/?$/.test(e) || /^\/user-attachments\/assets\/[^/]+\/?$/.test(e)
                    }(n)) ? {
                        requestHeaders: {
                            ...e.requestHeaders,
                            Authorization: `token ${i}`
                        }
                    } : {}
                })), e => {
                    t = new Map(e.map((({
                        endpoint: e,
                        token: t
                    }) => [new URL(e).origin, t])));
                    const r = Nt(),
                        n = t.get(r);
                    n && t.set(function (e) {
                        if (void 0 !== Rt) return Rt;
                        if (e !== Nt() || Ot) {
                            if (Et(e)) {
                                const t = new window.URL(e);
                                return t.pathname = "/", t.hostname.startsWith("api.") && (t.hostname = t.hostname.replace(/^api\./, "")), t.toString()
                            }
                            const t = A.parse(e);
                            return `${t.protocol}//${t.hostname}`
                        }
                        return "https://github.com"
                    }(r), n)
                }
            }(e);
            n.Menu.setApplicationMenu(Ce({
                selectedShell: null,
                selectedExternalEditor: null,
                askForConfirmationOnRepositoryRemoval: !1,
                askForConfirmationOnForcePush: !1
            })), ie("update-accounts", ((e, r) => t(r))), ie("update-preferred-app-menu-item-labels", ((e, t) => {
                const r = Ce(t),
                    i = n.Menu.getApplicationMenu();
                if (null === i) return n.Menu.setApplicationMenu(r), void(null !== $t && $t.sendAppMenu());
                let o = !1;
                for (const e of Te(r)) {
                    const t = e.id;
                    if (!t) continue;
                    const r = i.getMenuItemById(t);
                    r ? (r.label !== e.label && (o = !0), r.enabled !== e.enabled && (e.enabled = r.enabled, o = !0)) : o = !0
                }
                o && $t && (n.Menu.setApplicationMenu(r), $t.sendAppMenu())
            })), ie("execute-menu-item-by-id", ((e, t) => {
                const r = n.Menu.getApplicationMenu();
                if (null === r) return;
                const i = r.getMenuItemById(t);
                if (i) {
                    const t = n.BrowserWindow.fromWebContents(e.sender) || void 0,
                        r = {
                            preventDefault: () => {},
                            sender: e.sender
                        };
                    i.click(r, t, e.sender)
                }
            })), ie("update-menu-state", ((e, t) => {
                let r = !1;
                const i = n.Menu.getApplicationMenu();
                if (null !== i) {
                    for (const e of t) {
                        const {
                            id: t,
                            state: n
                        } = e, o = i.getMenuItemById(t);
                        o ? void 0 !== n.enabled && o.enabled !== n.enabled && (o.enabled = n.enabled, r = !0) : K(`Unknown menu id: ${t}`)
                    }
                    r && $t && (n.Menu.setApplicationMenu(i), $t.sendAppMenu())
                } else log.debug("unable to get current menu, bailing out...")
            })), oe("show-contextual-menu", ((e, t, r) => new Promise((async i => {
                const o = n.BrowserWindow.fromWebContents(e.sender) || void 0,
                    s = r ? await async function (e) {
                        if (void 0 !== e) return new Promise((t => {
                            const r = setTimeout((() => {
                                t(void 0), log.error("Unable to get spell check menu items  - no electron context-menu event")
                            }), 100);
                            e.webContents.once("context-menu", ((i, o) => {
                                clearTimeout(r), t(function (e, t, r) {
                                    const {
                                        misspelledWord: i,
                                        dictionarySuggestions: o
                                    } = t;
                                    if (!i && 0 === o.length) return;
                                    const s = new Array;
                                    s.push(new n.MenuItem({
                                        type: "separator"
                                    }));
                                    for (const e of o) s.push(new n.MenuItem({
                                        label: e,
                                        click: () => r.replaceMisspelling(e)
                                    }));
                                    i && s.push(new n.MenuItem({
                                        label: "Add to dictionary",
                                        click: () => r.session.addWordToSpellCheckerDictionary(i)
                                    })); {
                                        const {
                                            session: e
                                        } = r, t = function (e, t, r) {
                                            const n = "en-US";
                                            if (e === n && t.includes(n) || !r.includes(e)) return null;
                                            const i = t.includes(n) && !t.includes(e) ? e : n;
                                            return {
                                                label: i === n ? Pt : Dt,
                                                languages: [i]
                                            }
                                        }(n.app.getLocale(), e.getSpellCheckerLanguages(), e.availableSpellCheckerLanguages);
                                        null !== t && s.push(new n.MenuItem({
                                            label: t.label,
                                            click: () => e.setSpellCheckerLanguages(t.languages)
                                        }))
                                    }
                                    return s
                                }(0, o, e.webContents))
                            }))
                        }))
                    }(o): void 0;
                ht(t, (e => i(e)), s).popup({
                    window: o,
                    callback: () => i(null)
                })
            })))), oe("check-for-updates", (async (e, t) => $t?.checkForUpdates(t))), ie("quit-and-install-updates", (() => $t?.quitAndInstallUpdate())), ie("quit-app", (() => n.app.quit())), ie("minimize-window", (() => $t?.minimizeWindow())), ie("maximize-window", (() => $t?.maximizeWindow())), ie("unmaximize-window", (() => $t?.unmaximizeWindow())), ie("close-window", (() => $t?.closeWindow())), oe("is-window-maximized", (async () => $t?.isMaximized() ?? !1)), oe("get-apple-action-on-double-click", (async () => n.systemPreferences.getUserDefault("AppleActionOnDoubleClick", "string"))), oe("get-current-window-state", (async () => $t?.getCurrentWindowState())), oe("get-current-window-zoom-factor", (async () => $t?.getCurrentWindowZoomFactor())), ie("set-window-zoom-factor", ((e, t) => $t?.setWindowZoomFactor(t))), ie("install-windows-cli", Ye), ie("uninstall-windows-cli", Ve), ie("get-app-menu", (() => $t?.sendAppMenu())), ie("show-certificate-trust-dialog", ((e, t, r) => {
                Zt((e => {
                    e.showCertificateTrustDialog(t, r)
                }))
            })), ie("log", ((e, t, r) => R(t, r))), ie("uncaught-exception", ((e, t) => Bt(t))), ie("send-error-report", ((e, t, r, n) => {
                st(t, {
                    ...qt(),
                    ...r
                }, n)
            })), oe("open-external", (async (e, t) => {
                const r = t.toLowerCase();
                (r.startsWith("http://") || r.startsWith("https://")) && log.info(`opening in browser: ${t}`);
                try {
                    return await n.shell.openExternal(t), !0
                } catch (e) {
                    return log.error(`Call to openExternal failed: '${e}'`), !1
                }
            })), oe("get-path", (async (e, t) => n.app.getPath(t))), oe("get-app-architecture", (async () => Qe(n.app))), oe("get-app-path", (async () => n.app.getAppPath())), oe("is-running-under-arm64-translation", (async () => et(n.app))), oe("move-to-applications-folder", (async () => {
                n.app.moveToApplicationsFolder?.()
            })), oe("move-to-trash", ((e, t) => n.shell.trashItem(t))), oe("show-item-in-folder", (async (e, t) => n.shell.showItemInFolder(t))), ie("unsafe-open-directory", (async (e, t) => Ee(t))), ie("select-all-window-contents", (() => $t?.selectAllWindowContents())), ie("dialog-did-open", (() => $t?.dialogDidOpen())), oe("is-in-application-folder", (async () => n.app.isInApplicationsFolder?.() ?? null)), oe("resolve-proxy", (async (e, t) => n.session.defaultSession.resolveProxy(t))), oe("show-save-dialog", (async (e, t) => $t?.showSaveDialog(t) ?? null)), oe("show-open-dialog", (async (e, t) => $t?.showOpenDialog(t) ?? null)), oe("is-window-focused", (async () => $t?.isFocused() ?? !1)), ie("focus-window", (() => {
                $t?.focus()
            })), ie("set-native-theme-source", ((e, t) => {
                n.nativeTheme.themeSource = t
            })), oe("should-use-dark-colors", (async () => n.nativeTheme.shouldUseDarkColors)), oe("get-guid", (() => rt())), oe("save-guid", ((e, t) => nt(t))), oe("show-notification", (async (e, t, r, n) => (0, ae.Ds)(t, r, n))), oe("get-notifications-permission", (async () => (0, ae.Ym)())), oe("request-notifications-permission", (async () => (0, ae.tC)()))
        })), n.app.on("activate", (() => {
            Zt((e => {
                e.show()
            }))
        })), n.app.on("web-contents-created", ((e, t) => {
            t.setWindowOpenHandler((({
                url: e
            }) => (log.warn(`Prevented new window to: ${e}`), {
                action: "deny"
            }))), t.on("will-navigate", ((e, t) => {
                e.preventDefault(), log.warn(`Prevented navigation to: ${t}`)
            }))
        })), n.app.on("certificate-error", ((e, t, r, n, i, o) => {
            o(!1), Zt((e => {
                e.sendCertificateError(i, n, r)
            }))
        }))
    })(), module.exports.main = {}
})();
//# sourceMappingURL=main.js.map