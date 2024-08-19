/*! For license information please see main.js.LICENSE.txt */
(() => {
    var e, t, a = {},
        r = {};

    function n(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var i = r[e] = {
            exports: {}
        };
        return a[e](i, i.exports, n), i.exports
    }
    if (n.m = a, n.d = (e, t) => {
            for (var a in t) n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((t, a) => (n.f[a](e, t), t)), [])), n.u = e => (({
            185: "tag.lazy",
            578: "game.lazy",
            831: "home.lazy",
            979: "page.lazy"
        }[e] || e) + "." + {
            51: "30f2c64a",
            176: "5b81fff3",
            185: "6df4ba34",
            578: "4635af95",
            831: "38c102a8",
            979: "7883dc64"
        }[e] + ".js"), n.miniCssF = e => ({
            185: "tag.lazy",
            578: "game.lazy",
            831: "home.lazy",
            979: "page.lazy"
        }[e] + "." + {
            185: "6df4ba34",
            578: "4635af95",
            831: "38c102a8",
            979: "7883dc64"
        }[e] + ".css"), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "orca:", n.l = (a, r, i, o) => {
            if (e[a]) e[a].push(r);
            else {
                var l, s;
                if (void 0 !== i)
                    for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
                        var u = d[c];
                        if (u.getAttribute("src") == a || u.getAttribute("data-webpack") == t + i) {
                            l = u;
                            break
                        }
                    }
                l || (s = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, n.nc && l.setAttribute("nonce", n.nc), l.setAttribute("data-webpack", t + i), l.src = a), e[a] = [r];
                var p = (t, r) => {
                        l.onerror = l.onload = null, clearTimeout(w);
                        var n = e[a];
                        if (delete e[a], l.parentNode && l.parentNode.removeChild(l), n && n.forEach((e => e(r))), t) return t(r)
                    },
                    w = setTimeout(p.bind(null, void 0, {
                        type: "timeout",
                        target: l
                    }), 12e4);
                l.onerror = p.bind(null, l.onerror), l.onload = p.bind(null, l.onload), s && document.head.appendChild(l)
            }
        }, n.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "/", (() => {
            if ("undefined" != typeof document) {
                var e = {
                    179: 0
                };
                n.f.miniCss = (t, a) => {
                    e[t] ? a.push(e[t]) : 0 !== e[t] && {
                        185: 1,
                        578: 1,
                        831: 1,
                        979: 1
                    }[t] && a.push(e[t] = (e => new Promise(((t, a) => {
                        var r = n.miniCssF(e),
                            i = n.p + r;
                        if (((e, t) => {
                                for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                                    var n = (o = a[r]).getAttribute("data-href") || o.getAttribute("href");
                                    if ("stylesheet" === o.rel && (n === e || n === t)) return o
                                }
                                var i = document.getElementsByTagName("style");
                                for (r = 0; r < i.length; r++) {
                                    var o;
                                    if ((n = (o = i[r]).getAttribute("data-href")) === e || n === t) return o
                                }
                            })(r, i)) return t();
                        ((e, t, a, r, n) => {
                            var i = document.createElement("link");
                            i.rel = "stylesheet", i.type = "text/css", i.onerror = i.onload = a => {
                                if (i.onerror = i.onload = null, "load" === a.type) r();
                                else {
                                    var o = a && ("load" === a.type ? "missing" : a.type),
                                        l = a && a.target && a.target.href || t,
                                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + l + ")");
                                    s.code = "CSS_CHUNK_LOAD_FAILED", s.type = o, s.request = l, i.parentNode.removeChild(i), n(s)
                                }
                            }, i.href = t, document.head.appendChild(i)
                        })(e, i, 0, t, a)
                    })))(t).then((() => {
                        e[t] = 0
                    }), (a => {
                        throw delete e[t], a
                    })))
                }
            }
        })(), (() => {
            var e = {
                179: 0
            };
            n.f.j = (t, a) => {
                var r = n.o(e, t) ? e[t] : void 0;
                if (0 !== r)
                    if (r) a.push(r[2]);
                    else if (979 != t) {
                    var i = new Promise(((a, n) => r = e[t] = [a, n]));
                    a.push(r[2] = i);
                    var o = n.p + n.u(t),
                        l = new Error;
                    n.l(o, (a => {
                        if (n.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var i = a && ("load" === a.type ? "missing" : a.type),
                                o = a && a.target && a.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", l.name = "ChunkLoadError", l.type = i, l.request = o, r[1](l)
                        }
                    }), "chunk-" + t, t)
                } else e[t] = 0
            };
            var t = (t, a) => {
                    var r, i, [o, l, s] = a,
                        d = 0;
                    if (o.some((t => 0 !== e[t]))) {
                        for (r in l) n.o(l, r) && (n.m[r] = l[r]);
                        s && s(n)
                    }
                    for (t && t(a); d < o.length; d++) i = o[d], n.o(e, i) && e[i] && e[i][0](), e[i] = 0
                },
                a = self.webpackChunkorca = self.webpackChunkorca || [];
            a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), window.TRANSLATIONS = window.TRANSLATIONS || {}, String.prototype.replaceAll || (String.prototype.replaceAll = function(e, t) {
            return "[object regexp]" === Object.prototype.toString.call(e).toLowerCase() ? this.replace(e, t) : this.replaceAll(new RegExp(e, "g"), t)
        }), "serviceWorker" in navigator) try {
        navigator.serviceWorker.register("/service-worker.js", {
            scope: "/"
        })
    } catch {}
    if (["disclaimer-page", "cookies-page", "privacy-page", "third-parties-page"].includes(window.SITE_OPTIONS.util)) {
        const e = document.querySelector("#policy");
        setTimeout((function() {
            e.contentWindow.postMessage({
                domain: window.SITE_OPTIONS.domain,
                url: window.SITE_OPTIONS.url,
                privacyStatementUrl: window.SITE_OPTIONS.privacyStatementUrl,
                termsOfUseUrl: window.SITE_OPTIONS.termsOfUseUrl,
                cookieStatementUrl: window.SITE_OPTIONS.cookieStatementUrl,
                thirdPartiesUrl: window.SITE_OPTIONS.thirdPartiesUrl,
                kidsPrivacyStatementUrl: window.SITE_OPTIONS.kidsPrivacyStatementUrl
            }, "https://CLASSRROOM1.TOP.com")
        }), 5e3), window.addEventListener("message", (function(e) {
            e.data && "open-privacy-settings" === e.data && window.Optanon && window.Optanon.ToggleInfoDisplay()
        }), !1)
    }
    if (window && window.SITE_OPTIONS && window.SITE_OPTIONS.util) try {
        switch (window.SITE_OPTIONS.util) {
            case "home-page":
                Promise.all([n.e(51), n.e(176), n.e(831)]).then(n.bind(n, 786)).then((async e => {
                    const t = new e.default(window.SITE_OPTIONS.util);
                    t.headerLift.template = "home", await t.start()
                }));
                break;
            case "game-page":
                Promise.all([n.e(51), n.e(176), n.e(578)]).then(n.bind(n, 290)).then((async e => {
                    const t = new e.default(window.SITE_OPTIONS.util);
                    t.headerLift.template = "game", await t.start()
                }));
                break;
            case "kids-game-page":
                Promise.all([n.e(51), n.e(176), n.e(578)]).then(n.bind(n, 290)).then((async e => {
                    const t = new e.default(window.SITE_OPTIONS.util);
                    await t.setupStartEvent()
                }));
                break;
            case "category-page":
                Promise.all([n.e(51), n.e(176), n.e(185)]).then(n.bind(n, 534)).then((async e => {
                    const t = new e.default(window.SITE_OPTIONS.util);
                    t.headerLift.template = "category", await t.start()
                }));
                break;
            default:
                window.SITE_OPTIONS.util.startsWith("kids-") || window.SITE_OPTIONS.util.startsWith("parents-") ? Promise.all([n.e(51), n.e(176), n.e(979)]).then(n.bind(n, 176)).then((async e => {
                    new e.default(window.SITE_OPTIONS.util)
                })) : Promise.all([n.e(51), n.e(176), n.e(979)]).then(n.bind(n, 176)).then((async e => {
                    const t = new e.default(window.SITE_OPTIONS.util);
                    t.headerLift.template = "default", await t.start()
                }))
        }
    } catch {}
})();