// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",
            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
            [],
            []
        ]



    };
    var aa, ca = this || self,
        da = /^[\w+/_-]+[=]{0,2}$/,
        ea = null;
    var fa = function() {},
        ia = function(a) {
            return "function" == typeof a
        },
        ja = function(a) {
            return "string" == typeof a
        },
        ka = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        la = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        ma = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        na = function(a, b) {
            if (a && la(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        oa = function(a, b) {
            if (!ka(a) ||
                !ka(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        qa = function(a, b) {
            for (var c = new pa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        ra = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        sa = function(a) {
            return Math.round(Number(a)) || 0
        },
        ta = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        ua = function(a) {
            var b = [];
            if (la(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        va = function(a) {
            return a ?
                a.replace(/^\s+|\s+$/g, "") : ""
        },
        wa = function() {
            return (new Date).getTime()
        },
        pa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    pa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    pa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    pa.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var xa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        ya = function(a) {
            var b = !1;
            return function() {
                if (!b) try {
                    a()
                } catch (c) {}
                b = !0
            }
        },
        za = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Aa = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ba = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ca = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Da = function(a) {
            if (null == a) return String(a);
            var b = Ca.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ea = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Fa = function(a) {
            if (!a || "object" != Da(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ea(a, "constructor") && !Ea(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ea(a, b)
        },
        Ga = function(a, b) {
            var c = b || ("array" == Da(a) ? [] : {}),
                d;
            for (d in a)
                if (Ea(a, d)) {
                    var e = a[d];
                    "array" == Da(e) ? ("array" != Da(c[d]) && (c[d] = []), c[d] = Ga(e, c[d])) : Fa(e) ? (Fa(c[d]) || (c[d] = {}), c[d] = Ga(e, c[d])) : c[d] = e
                } return c
        };
    var Ha = {},
        Ia = function(a, b) {
            Ha[a] = Ha[a] || [];
            Ha[a][b] = !0
        };
    var f = window,
        u = document,
        Ja = navigator,
        Ka = u.currentScript && u.currentScript.src,
        La = function(a, b) {
            var c = f[a];
            f[a] = void 0 === c ? b : c;
            return f[a]
        },
        Ma = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Na = function(a, b, c) {
            var d = u.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Ma(d, b);
            c && (d.onerror = c);
            var e;
            if (null === ea) b: {
                var g = ca.document,
                    h = g.querySelector && g.querySelector("script[nonce]");
                if (h) {
                    var k = h.nonce || h.getAttribute("nonce");
                    if (k && da.test(k)) {
                        ea = k;
                        break b
                    }
                }
                ea = ""
            }
            e = ea;
            e && d.setAttribute("nonce", e);
            var l = u.getElementsByTagName("script")[0] || u.body || u.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        Oa = function() {
            if (Ka) {
                var a = Ka.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Qa = function(a, b) {
            var c = u.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = u.body && u.body.lastChild ||
                u.body || u.head;
            d.parentNode.insertBefore(c, d);
            Ma(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Ra = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Sa = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Ta = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        z = function(a) {
            f.setTimeout(a, 0)
        },
        Va = function(a) {
            var b =
                u.getElementById(a);
            if (b && Ua(b, "id") != a) {
                Ia("TAGGING", 1);
                for (var c = 1; c < document.all[a].length; c++)
                    if (Ua(document.all[a][c], "id") == a) return document.all[a][c]
            }
            return b
        },
        Ua = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Wa = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Xa = function(a) {
            var b = u.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Ya = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var g = a, h = 0; g && h <= c; h++) {
                if (d[String(g.tagName).toLowerCase()]) return g;
                g = g.parentElement
            }
            return null
        };
    var Za = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var $a = /:[0-9]+$/,
        ab = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
                    var h = g.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        db = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = bb(a.protocol) || bb(f.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : f.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || f.location.hostname).replace($a, "").toLowerCase());
            var g = b,
                h, k = bb(a.protocol);
            g && (g = String(g).toLowerCase());
            switch (g) {
                case "url_no_fragment":
                    h = cb(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace($a, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = h.split("/");
                    0 <=
                        ma(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = ab(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        },
        bb = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        cb = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        eb = function(a) {
            var b = u.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (c = "/" + c);
            var d = b.hostname.replace($a, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        };
    var fb = function(a, b, c) {
            for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
                var h = e[g].split("="),
                    k = h[0].replace(/^\s*|\s*$/g, "");
                if (k && k == a) {
                    var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        },
        ib = function(a, b, c, d) {
            var e = gb(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = hb(e, function(g) {
                    return g.zb
                }, b);
                if (1 === e.length) return e[0].id;
                e = hb(e, function(g) {
                    return g.Sa
                }, c);
                return e[0] ? e[0].id : void 0
            }
        };

    function jb(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= fb(b, e).indexOf(c)
    }
    var mb = function(a, b, c, d, e, g) {
        d = d || "auto";
        var h = {
            path: c || "/"
        };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
                m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                g && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var p = void 0,
                t = void 0,
                q;
            for (q in h)
                if (h.hasOwnProperty(q)) {
                    var r = h[q];
                    if (null != r) switch (q) {
                        case "secure":
                            r && (m += "; secure");
                            break;
                        case "domain":
                            p = r;
                            break;
                        default:
                            "path" == q && (t = r), "expires" == q && r instanceof Date && (r =
                                r.toUTCString()), m += "; " + q + "=" + r
                    }
                } if ("auto" === p) {
                for (var v = kb(), x = 0; x < v.length; ++x) {
                    var y = "none" != v[x] ? v[x] : void 0;
                    if (!lb(y, t) && jb(m + (y ? "; domain=" + y : ""), a, l)) {
                        k = !0;
                        break a
                    }
                }
                k = !1
            } else p && "none" != p && (m += "; domain=" + p),
            k = !lb(p, t) && jb(m, a, l)
        }
        return k
    };

    function hb(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function gb(a, b) {
        for (var c = [], d = fb(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({
                    id: g.join("."),
                    zb: 1 * k[0] || 1,
                    Sa: 1 * k[1] || 1
                }))
            }
        }
        return c
    }
    var nb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        pb = /(^|\.)doubleclick\.net$/i,
        lb = function(a, b) {
            return pb.test(document.location.hostname) || "/" === b && nb.test(a)
        },
        kb = function() {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            a.push("none");
            return a
        };
    var Mb = [],
        Nb = [],
        Ob = [],
        Pb = [],
        Qb = [],
        Rb = {},
        Sb, Tb, Ub, Vb = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Wb = function(a) {
            var b = a["function"];
            if (!b) throw Error("Error: No function name given for function call.");
            var c = !!Rb[b],
                d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && 0 === e.indexOf("vtp_") && (d[c ? e : e.substr(4)] = a[e]);
            return c ? Rb[b](d) : (void 0)(b, d)
        },
        Yb = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Xb(a[e], b, c));
            return d
        },
        Zb = function(a) {
            var b = a["function"];
            if (!b) throw "Error: No function name given for function call.";
            var c = Rb[b];
            return c ? c.priorityOverride || 0 : 0
        },
        Xb = function(a, b, c) {
            if (la(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Xb(a[e], b, c));
                        return d;
                    case "macro":
                        var g = a[1];
                        if (c[g]) return;
                        var h = Mb[g];
                        if (!h || b.qc(h)) return;
                        c[g] = !0;
                        try {
                            var k = Yb(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = Wb(k);
                            Ub && (d = Ub.kf(d, k))
                        } catch (x) {
                            b.Ld && b.Ld(x, Number(g)), d = !1
                        }
                        c[g] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[Xb(a[l], b, c)] = Xb(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, n = 1; n < a.length; n++) {
                            var p = Xb(a[n], b, c);
                            Tb && (m = m || p === Tb.ob);
                            d.push(p)
                        }
                        return Tb && m ? Tb.pf(d) : d.join("");
                    case "escape":
                        d = Xb(a[1], b, c);
                        if (Tb && la(a[1]) && "macro" === a[1][0] && Tb.Qf(a)) return Tb.Zf(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) qb[a[t]] && (d = qb[a[t]](d));
                        return d;
                    case "tag":
                        var q = a[1];
                        if (!Pb[q]) throw Error("Unable to resolve tag reference " + q + ".");
                        return d = {
                            xd: a[2],
                            index: q
                        };
                    case "zb":
                        var r = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        r["function"] = a[1];
                        var v = $b(r, b, c);
                        a[4] && (v = !v);
                        return v;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        $b = function(a, b, c) {
            try {
                return Sb(Yb(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return null
        };
    var ac = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Vc: a("convert_case_to"),
            Wc: a("convert_false_to"),
            Xc: a("convert_null_to"),
            Yc: a("convert_true_to"),
            Zc: a("convert_undefined_to"),
            qa: a("function"),
            Be: a("instance_name"),
            Ce: a("live_only"),
            De: a("malware_disabled"),
            Dg: a("original_vendor_template_id"),
            Ee: a("once_per_event"),
            nd: a("once_per_load"),
            od: a("setup_tags"),
            Fe: a("tag_id"),
            pd: a("teardown_tags")
        }
    }();
    var bc = null,
        ec = function(a) {
            function b(p) {
                for (var t = 0; t < p.length; t++) d[p[t]] = !0
            }
            var c = [],
                d = [];
            bc = cc(a);
            for (var e = 0; e < Nb.length; e++) {
                var g = Nb[e],
                    h = dc(g);
                if (h) {
                    for (var k = g.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || [])
            }
            for (var m = [], n = 0; n < Pb.length; n++) c[n] && !d[n] && (m[n] = !0);
            return m
        },
        dc = function(a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) {
                var d = bc(b[c]);
                if (!d) return null === d ? null : !1
            }
            for (var e = a.unless || [], g = 0; g < e.length; g++) {
                var h = bc(e[g]);
                if (null === h) return null;
                if (h) return !1
            }
            return !0
        },
        cc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = $b(Ob[c], a));
                return b[c]
            }
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

    var vc = {},
        wc = null,
        xc = Math.random();
    vc.m = "UA-123812391-1";
    vc.sb = "521";
    var yc = "www.googletagmanager.com/gtm.js";
    yc = "www.googletagmanager.com/gtag/js";
    var zc = yc,
        Ac = null,
        Bc = null,
        Cc = null,
        Dc = "//www.googletagmanager.com/a?id=" + vc.m + "&cv=1",
        Ec = {},
        Fc = {},
        Gc = function() {
            var a = wc.sequence || 0;
            wc.sequence = a + 1;
            return a
        };
    var E = function(a, b, c, d) {
            return (2 === Hc() || d || "http:" != f.location.protocol ? a : b) + c
        },
        Hc = function() {
            var a = Oa(),
                b;
            if (1 === a) a: {
                var c = zc;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, g = 1, h = u.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === g && 0 === l.indexOf(d) && (g = 2)
                    }
                }
                b = g
            }
            else b = a;
            return b
        };
    var Ic = !1;
    var Jc = function(a, b, c, d) {
        if (c) {
            d = d || {};
            var e = f._googWcmImpl || function() {
                e.q = e.q || [];
                e.q.push(arguments)
            };
            f._googWcmImpl = e;
            void 0 === f._googWcmAk && (f._googWcmAk = a);
            Ic ? d.ya && z(d.ya) : (Na(E("https://", "http://", "www.gstatic.com/wcm/loader.js"), d.ya, d.Od), Ic = !0);
            var g = {
                ak: a,
                cl: b
            };
            void 0 === d.ae && (g.autoreplace = c);
            e(2, d.ae, g, c, 0, new Date, d.yg)
        }
    };
    var Mc = function() {
            return "&tc=" + Pb.filter(function(a) {
                return a
            }).length
        },
        Vc = function() {
            Nc && (f.clearTimeout(Nc), Nc = void 0);
            void 0 === Oc || Pc[Oc] && !Qc || (Rc[Oc] || Sc.Sf() || 0 >= Tc-- ? (Ia("GTM", 1), Rc[Oc] = !0) : (Sc.hg(), Ra(Uc()), Pc[Oc] = !0, Qc = ""))
        },
        Uc = function() {
            var a = Oc;
            if (void 0 === a) return "";
            for (var b, c = [], d = Ha.GTM || [], e = 0; e < d.length; e++) d[e] && (c[Math.floor(e / 6)] ^= 1 << e % 6);
            for (var g = 0; g < c.length; g++) c[g] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g] || 0);
            b = c.join("");
            return [Wc, Pc[a] ?
                "" : "&es=1", Xc[a], b ? "&u=" + b : "", Mc(), Qc, "&z=0"
            ].join("")
        },
        Yc = function() {
            return [Dc, "&v=3&t=t", "&pid=" + oa(), "&rv=" + vc.sb].join("")
        },
        Zc = "0.005000" > Math.random(),
        Wc = Yc(),
        $c = function() {
            Wc = Yc()
        },
        Pc = {},
        Qc = "",
        Oc = void 0,
        Xc = {},
        Rc = {},
        Nc = void 0,
        Sc = function(a, b) {
            var c = 0,
                d = 0;
            return {
                Sf: function() {
                    if (c < a) return !1;
                    wa() - d >= b && (c = 0);
                    return c >= a
                },
                hg: function() {
                    wa() - d >= b && (c = 0);
                    c++;
                    d = wa()
                }
            }
        }(2, 1E3),
        Tc = 1E3,
        ad = function(a, b) {
            if (Zc && !Rc[a] && Oc !== a) {
                Vc();
                Oc = a;
                Qc = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) :
                    "*";
                Xc[a] = "&e=" + c + "&eid=" + a;
                Nc || (Nc = f.setTimeout(Vc, 500))
            }
        },
        bd = function(a, b, c) {
            if (Zc && !Rc[a] && b) {
                a !== Oc && (Vc(), Oc = a);
                var d = c + String(b[ac.qa] || "").replace(/_/g, "");
                Qc = Qc ? Qc + "." + d : "&tr=" + d;
                Nc || (Nc = f.setTimeout(Vc, 500));
                2022 <= Uc().length && Vc()
            }
        };
    var cd = {},
        dd = new pa,
        ed = {},
        fd = {},
        jd = {
            name: "dataLayer",
            set: function(a, b) {
                Ga(gd(a, b), ed);
                hd()
            },
            get: function(a) {
                return id(a, 2)
            },
            reset: function() {
                dd = new pa;
                ed = {};
                hd()
            }
        },
        id = function(a, b) {
            if (2 != b) {
                var c = dd.get(a);
                if (Zc) {
                    var d = kd(a);
                    c !== d && Ia("GTM", 5)
                }
                return c
            }
            return kd(a)
        },
        kd = function(a, b, c) {
            var d = a.split("."),
                e = !1,
                g = void 0;
            var h = function(k, l) {
                for (var m = 0; void 0 !== k && m < d.length; m++) {
                    if (null === k) return !1;
                    k = k[d[m]]
                }
                return void 0 !== k || 1 < m ? k : l.length ? h(ld(l.pop()), l) : md(d)
            };
            e = !0;
            g = h(ed.eventModel, [b, c]);
            return e ? g : md(d)
        },
        md = function(a) {
            for (var b = ed, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var nd = function(a, b) {
            return kd(a, b, void 0)
        },
        ld = function(a) {
            if (a) {
                var b = md(["gtag", "targets", a]);
                return Fa(b) ? b : void 0
            }
        },
        od = function(a, b) {
            function c(g) {
                g && ra(g, function(h) {
                    d[h] = null
                })
            }
            var d = {};
            c(ed);
            delete d.eventModel;
            c(ld(a));
            c(ld(b));
            c(ed.eventModel);
            var e = [];
            ra(d, function(g) {
                e.push(g)
            });
            return e
        };
    var pd = function(a, b) {
            fd.hasOwnProperty(a) || (dd.set(a, b), Ga(gd(a, b), ed), hd())
        },
        gd = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        hd = function(a) {
            ra(fd, function(b, c) {
                dd.set(b, c);
                Ga(gd(b, void 0), ed);
                Ga(gd(b, c), ed);
                a && delete fd[b]
            })
        },
        qd = function(a, b, c) {
            cd[a] = cd[a] || {};
            var d = 1 !== c ? kd(b) : dd.get(b);
            "array" === Da(d) || "object" === Da(d) ? cd[a][b] = Ga(d) : cd[a][b] = d
        },
        rd = function(a, b) {
            if (cd[a]) return cd[a][b]
        };
    var sd = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        td = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        ud = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        vd = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var xd = function(a) {
            var b = id("gtm.whitelist");
            b && Ia("GTM", 9);
            b = "google gtagfl lcl zone oid op".split(" ");
            var c = b && Ba(ua(b), td),
                d = id("gtm.blacklist");
            d || (d = id("tagTypeBlacklist")) && Ia("GTM", 3);
            d ? Ia("GTM", 8) : d = [];
            wd() && (d = ua(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            0 <= ma(ua(d), "google") && Ia("GTM", 2);
            var e = d && Ba(ua(d), ud),
                g = {};
            return function(h) {
                var k = h && h[ac.qa];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== g[k]) return g[k];
                var l = Fc[k] || [],
                    m = a(k);
                if (b) {
                    var n;
                    if (n = m) a: {
                        if (0 > ma(c, k))
                            if (l && 0 < l.length)
                                for (var p = 0; p < l.length; p++) {
                                    if (0 >
                                        ma(c, l[p])) {
                                        Ia("GTM", 11);
                                        n = !1;
                                        break a
                                    }
                                } else {
                                    n = !1;
                                    break a
                                }
                        n = !0
                    }
                    m = n
                }
                var t = !1;
                if (d) {
                    var q = 0 <= ma(e, k);
                    if (q) t = q;
                    else {
                        var r = qa(e, l || []);
                        r && Ia("GTM", 10);
                        t = r
                    }
                }
                var v = !m || t;
                v || !(0 <= ma(l, "sandboxedScript")) || c && -1 !== ma(c, "sandboxedScript") || (v = qa(e, vd));
                return g[k] = v
            }
        },
        wd = function() {
            return sd.test(f.location && f.location.hostname)
        };
    var yd = {
        kf: function(a, b) {
            b[ac.Vc] && "string" === typeof a && (a = 1 == b[ac.Vc] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(ac.Xc) && null === a && (a = b[ac.Xc]);
            b.hasOwnProperty(ac.Zc) && void 0 === a && (a = b[ac.Zc]);
            b.hasOwnProperty(ac.Yc) && !0 === a && (a = b[ac.Yc]);
            b.hasOwnProperty(ac.Wc) && !1 === a && (a = b[ac.Wc]);
            return a
        }
    };
    var zd = {
            active: !0,
            isWhitelisted: function() {
                return !0
            }
        },
        Ad = function(a) {
            var b = wc.zones;
            !b && a && (b = wc.zones = a());
            return b
        };
    var Bd = !1,
        Cd = 0,
        Dd = [];

    function Ed(a) {
        if (!Bd) {
            var b = u.createEventObject,
                c = "complete" == u.readyState,
                d = "interactive" == u.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Bd = !0;
                for (var e = 0; e < Dd.length; e++) z(Dd[e])
            }
            Dd.push = function() {
                for (var g = 0; g < arguments.length; g++) z(arguments[g]);
                return 0
            }
        }
    }

    function Fd() {
        if (!Bd && 140 > Cd) {
            Cd++;
            try {
                u.documentElement.doScroll("left"), Ed()
            } catch (a) {
                f.setTimeout(Fd, 50)
            }
        }
    }
    var Gd = function(a) {
        Bd ? a() : Dd.push(a)
    };
    var Hd = {};

    function Id(a) {
        for (var b = Hd[a] || [], c = 0; c < b.length; c++) b[c]();
        Hd[a] = {
            push: function(d) {
                d(vc.m)
            }
        }
    }
    var Ld = function(a, b, c) {
            ia(b) && Jd(a, b);
            c && f.setTimeout(function() {
                return Id(a)
            }, Number(c));
            return Kd(a)
        },
        Jd = function(a, b) {
            Hd[a] = Hd[a] || [];
            Hd[a].push(ya(function() {
                return z(function() {
                    return b(vc.m)
                })
            }))
        };

    function Kd(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function() {
                c++;
                return ya(function() {
                    b++;
                    d && b >= c && Id(a)
                })
            },
            Te: function() {
                d = !0;
                b >= c && Id(a)
            }
        }
    };
    var Md = function() {
        function a(d) {
            return !ka(d) || 0 > d ? 0 : d
        }
        if (!wc._li && f.performance && f.performance.timing) {
            var b = f.performance.timing.navigationStart,
                c = ka(jd.get("gtm.start")) ? jd.get("gtm.start") : 0;
            wc._li = {
                cst: a(c - b),
                cbt: a(Bc - b)
            }
        }
    };
    var Qd = !1,
        Rd = function() {
            return f.GoogleAnalyticsObject && f[f.GoogleAnalyticsObject]
        },
        Sd = !1;
    var Td = function(a) {
            f.GoogleAnalyticsObject || (f.GoogleAnalyticsObject = a || "ga");
            var b = f.GoogleAnalyticsObject;
            if (f[b]) f.hasOwnProperty(b) || Ia("GTM", 12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                f[b] = c
            }
            Md();
            return f[b]
        },
        Ud = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = Rd();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var Wd = function() {},
        Vd = function() {
            return f.GoogleAnalyticsObject || "ga"
        },
        Xd = !1;
    var Yd = function(a, b, c) {
        if (b) {
            c = c || {};
            var d = f._gaPhoneImpl || function() {
                d.q = d.q || [];
                d.q.push(arguments)
            };
            f._gaPhoneImpl = d;
            void 0 === f.ga_wpid && (f.ga_wpid = a);
            Xd ? c.ya && z(c.ya) : (Na(E("https://", "http://", "www.gstatic.com/gaphone/loader.js"), c.ya, c.Od), Xd = !0);
            var e = {};
            void 0 !== c.Ad ? e.receiver = c.Ad : e.replace = b;
            e.ga_wpid = a;
            e.destination = b;
            d(2, new Date, e)
        }
    };
    var de = function(a) {};

    function ce(a, b) {
        a.containerId = vc.m;
        var c = {
            type: "GENERIC",
            value: a
        };
        b.length && (c.trace = b);
        return c
    };

    function ee(a, b, c, d) {
        var e = Pb[a],
            g = fe(a, b, c, d);
        if (!g) return null;
        var h = Xb(e[ac.od], c, []);
        if (h && h.length) {
            var k = h[0];
            g = ee(k.index, {
                I: g,
                O: 1 === k.xd ? b.terminate : g,
                terminate: b.terminate
            }, c, d)
        }
        return g
    }

    function fe(a, b, c, d) {
        function e() {
            if (g[ac.De]) k();
            else {
                var x = Yb(g, c, []),
                    y = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!y) {
                        y = !0;
                        bd(c.id, Pb[a], "5");
                        h()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!y) {
                        y = !0;
                        bd(c.id, Pb[a], "6");
                        k()
                    }
                };
                x.vtp_gtmTagId = g.tag_id;
                x.vtp_gtmEventId = c.id;
                bd(c.id, g, "1");
                try {
                    Wb(x)
                } catch (w) {
                    de(w);
                    bd(c.id, g, "7");
                    y || (y = !0, k())
                }
            }
        }
        var g = Pb[a],
            h = b.I,
            k = b.O,
            l = b.terminate;
        if (c.qc(g)) return null;
        var m = Xb(g[ac.pd], c, []);
        if (m && m.length) {
            var n = m[0],
                p = ee(n.index, {
                    I: h,
                    O: k,
                    terminate: l
                }, c, d);
            if (!p) return null;
            h =
                p;
            k = 2 === n.xd ? l : p
        }
        if (g[ac.nd] || g[ac.Ee]) {
            var t = g[ac.nd] ? Qb : c.rg,
                q = h,
                r = k;
            if (!t[a]) {
                e = ya(e);
                var v = ge(a, t, e);
                h = v.I;
                k = v.O
            }
            return function() {
                t[a](q, r)
            }
        }
        return e
    }

    function ge(a, b, c) {
        var d = [],
            e = [];
        b[a] = he(d, e, c);
        return {
            I: function() {
                b[a] = ie;
                for (var g = 0; g < d.length; g++) d[g]()
            },
            O: function() {
                b[a] = je;
                for (var g = 0; g < e.length; g++) e[g]()
            }
        }
    }

    function he(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function ie(a) {
        a()
    }

    function je(a, b) {
        b()
    };
    var me = function(a, b) {
        for (var c = [], d = 0; d < Pb.length; d++)
            if (a.Ra[d]) {
                var e = Pb[d];
                var g = b.add();
                try {
                    var h = ee(d, {
                        I: g,
                        O: g,
                        terminate: g
                    }, a, d);
                    h ? c.push({
                        Zd: d,
                        b: Zb(e),
                        xf: h
                    }) : (ke(d, a), g())
                } catch (l) {
                    g()
                }
            } b.Te();
        c.sort(le);
        for (var k = 0; k < c.length; k++) c[k].xf();
        return 0 < c.length
    };

    function le(a, b) {
        var c, d = b.b,
            e = a.b;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c) g = c;
        else {
            var h = a.Zd,
                k = b.Zd;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }

    function ke(a, b) {
        if (!Zc) return;
        var c = function(d) {
            var e = b.qc(Pb[d]) ? "3" : "4",
                g = Xb(Pb[d][ac.od], b, []);
            g && g.length && c(g[0].index);
            bd(b.id, Pb[d], e);
            var h = Xb(Pb[d][ac.pd], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var ne = !1,
        oe = function(a, b, c, d, e) {
            if ("gtm.js" == b) {
                if (ne) return !1;
                ne = !0
            }
            ad(a, b);
            var g = Ld(a, d, e);
            qd(a, "event");
            qd(a, "ecommerce", 1);
            qd(a, "gtm");
            var h = {
                id: a,
                name: b,
                qc: xd(c),
                Ra: [],
                rg: [],
                Ld: function(p) {
                    Ia("GTM", 6);
                    de(p)
                }
            };
            h.Ra = ec(h);
            var k = me(h, g);
            "gtm.js" !== b && "gtm.sync" !== b || Wd();
            if (!k) return k;
            for (var l = {
                    __cl: !0,
                    __ecl: !0,
                    __ehl: !0,
                    __evl: !0,
                    __fsl: !0,
                    __hl: !0,
                    __jel: !0,
                    __lcl: !0,
                    __sdl: !0,
                    __tl: !0,
                    __ytl: !0
                }, m = 0; m < h.Ra.length; m++)
                if (h.Ra[m]) {
                    var n = Pb[m];
                    if (n && !l[n[ac.qa]]) return !0
                } return !1
        };
    var pe = function(a, b) {
        var c = Vb(a, b);
        Pb.push(c);
        return Pb.length - 1
    };
    var F = {
        Pb: "event_callback",
        Rb: "event_timeout"
    };
    F.aa = "gtag.config", F.Mb = "page_view", F.be = "user_engagement", F.S = "allow_ad_personalization_signals", F.ce = "allow_custom_scripts", F.de = "allow_display_features", F.ee = "allow_enhanced_conversions", F.$a = "client_id", F.N = "cookie_domain", F.U = "cookie_expires", F.ab = "cookie_name", F.ma = "cookie_path", F.he = "cookie_update", F.na = "currency", F.cb = "custom_params", F.je = "custom_map", F.Tb = "groups", F.Ga = "language", F.ie = "country", F.Cg = "non_interaction", F.jb = "page_location", F.kb = "page_referrer", F.jd = "page_title", F.Ia = "send_page_view",
        F.oa = "send_to", F.lb = "session_duration", F.Yb = "session_engaged", F.mb = "session_id", F.Zb = "session_number", F.ze = "tracking_id", F.nb = "user_properties", F.Ha = "linker", F.gb = "accept_incoming", F.H = "domains", F.ib = "url_position", F.hb = "decorate_forms", F.Xb = "phone_conversion_number", F.Vb = "phone_conversion_callback", F.Wb = "phone_conversion_css_class", F.kd = "phone_conversion_options", F.$c = "aw_remarketing", F.ad = "aw_remarketing_only", F.ca = "value", F.xe = "quantity", F.ne = "affiliation", F.se = "tax", F.qe = "shipping", F.Ob = "list_name",
        F.hd = "checkout_step", F.gd = "checkout_option", F.oe = "coupon", F.pe = "promotions", F.Ja = "transaction_id", F.ba = "user_id", F.Fa = "conversion_linker", F.Ea = "conversion_cookie_prefix", F.F = "cookie_prefix", F.T = "items", F.Nb = "aw_merchant_id", F.cd = "aw_feed_country", F.dd = "aw_feed_language", F.bd = "discount", F.fd = "disable_merchant_reported_purchases", F.Ub = "new_customer", F.ed = "customer_lifetime_value", F.me = "dc_natural_search", F.ke = "dc_custom_params", F.Ae = "trip_type", F.we = "passengers", F.ue = "method", F.ye = "search_term", F.fe =
        "content_type", F.ve = "optimize_id", F.te = "experiments", F.fb = "google_signals", F.Sb = "google_tld", F.eb = "ga_restrict_domain", F.Qb = "event_settings", F.ld = [F.S, F.N, F.U, F.ab, F.ma, F.F, F.cb, F.Pb, F.Qb, F.Rb, F.eb, F.fb, F.Sb, F.Tb, F.oa, F.Ia, F.lb, F.ba, F.nb], F.Uc = [F.oa, F.$c, F.ad, F.cb, F.Ia, F.Ga, F.ca, F.na, F.Ja, F.ba, F.Fa, F.Ea, F.F, F.jb, F.kb, F.Xb, F.Vb, F.Wb, F.kd, F.T, F.Nb, F.cd, F.dd, F.bd, F.fd, F.Ub, F.ed, F.S];
    var qe = {};
    var re = /[A-Z]+/,
        se = /\s/,
        te = function(a) {
            if (ja(a) && (a = va(a), !se.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (re.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            da: d
                        }
                    }
                }
            }
        },
        we = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = te(a[c]);
                d && (b[d.id] = d)
            }
            ve(b);
            var e = [];
            ra(b, function(g, h) {
                e.push(h)
            });
            return e
        };

    function ve(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.da[1] && b.push(d.containerId)
            } for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var xe = null,
        ye = {},
        ze = {},
        Ae, Be = function(a, b) {
            var c = {
                event: a
            };
            b && (c.eventModel = Ga(b), b[F.Pb] && (c.eventCallback = b[F.Pb]), b[F.Rb] && (c.eventTimeout = b[F.Rb]));
            return c
        };
    var Ce = function() {
            xe = xe || !wc.gtagRegistered;
            wc.gtagRegistered = !0;
            return xe
        },
        De = function(a) {
            if (void 0 === ze[a.id]) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = pe("gtagua", {
                            trackingId: a.id
                        });
                        break;
                    case "AW":
                        b = pe("gtagaw", {
                            conversionId: a
                        });
                        break;
                    case "DC":
                        b = pe("gtagfl", {
                            targetId: a.id
                        });
                        break;
                    case "GF":
                        b = pe("gtaggf", {
                            conversionId: a
                        });
                        break;
                    case "G":
                        b = pe("get", {
                            trackingId: a.id,
                            isAutoTag: !0
                        });
                        break;
                    case "HA":
                        b = pe("gtagha", {
                            conversionId: a
                        });
                        break;
                    default:
                        return
                }
                if (!Ae) {
                    var c = Vb("v", {
                        name: "send_to",
                        dataLayerVersion: 2
                    });
                    Mb.push(c);
                    Ae = ["macro", Mb.length - 1]
                }
                var d = {
                    arg0: Ae,
                    arg1: a.id,
                    ignore_case: !1
                };
                d[ac.qa] = "_lc";
                Ob.push(d);
                var e = {
                    "if": [Ob.length - 1],
                    add: [b]
                };
                e["if"] && (e.add || e.block) && Nb.push(e);
                ze[a.id] = b
            }
        },
        Ee = function(a) {
            ra(ye, function(b, c) {
                var d = ma(c, a);
                0 <= d && c.splice(d, 1)
            })
        },
        Fe = ya(function() {});
    var Ge = {
            config: function(a) {
                var b = a[2] || {};
                if (2 > a.length || !ja(a[1]) || !Fa(b)) return;
                var c = te(a[1]);
                if (!c) return;
                Ce() ? De(c) : Fe();
                Ee(c.id);
                var d = c.id,
                    e = b[F.Tb] || "default";
                e = e.toString().split(",");
                for (var g = 0; g < e.length; g++) ye[e[g]] = ye[e[g]] || [], ye[e[g]].push(d);
                delete b[F.Tb];
                pd("gtag.targets." + c.id, void 0);
                pd("gtag.targets." + c.id, Ga(b));
                var h = {};
                h[F.oa] = c.id;
                return Be(F.aa, h);
            },
            event: function(a) {
                var b = a[1];
                if (ja(b) && !(3 < a.length)) {
                    var c;
                    if (2 <
                        a.length) {
                        if (!Fa(a[2])) return;
                        c = a[2]
                    }
                    var d = Be(b, c);
                    var e;
                    var g = c,
                        h = id("gtag.fields.send_to", 2);
                    ja(h) || (h = F.oa);
                    var k = g && g[h];
                    void 0 === k && (k = id(h, 2), void 0 === k && (k = "default"));
                    if (ja(k) || la(k)) {
                        for (var l = k.toString().replace(/\s+/g, "").split(","), m = [], n = 0; n < l.length; n++) 0 <= l[n].indexOf("-") ? m.push(l[n]) : m = m.concat(ye[l[n]] || []);
                        e = we(m)
                    } else e = void 0;
                    var p = e;
                    if (!p) return;
                    var t = Ce();
                    t || Fe();
                    for (var q = [], r = 0; t && r < p.length; r++) {
                        var v = p[r];
                        q.push(v.id);
                        De(v)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < p.length ? d.eventModel[F.oa] = q.join() : delete d.eventModel[F.oa];
                    return d
                }
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) return {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
            },
            policy: function(a) {
                if (3 === a.length) {
                    var b = a[1],
                        c = a[2];
                    qe[b] || (qe[b] = []);
                    qe[b].push(c)
                }
            },
            set: function(a) {
                var b;
                2 == a.length && Fa(a[1]) ? b = Ga(a[1]) : 3 == a.length && ja(a[1]) && (b = {}, b[a[1]] = a[2]);
                if (b) return b.eventModel = Ga(b), b.event = "gtag.set", b._clear = !0, b
            }
        },
        He = {
            policy: !0
        };
    var Ie = function() {
        var a = !1;
        return a
    };
    var Oe = function(a) {
        if (Ne(a)) return a;
        this.wg = a
    };
    Oe.prototype.Df = function() {
        return this.wg
    };
    var Ne = function(a) {
        return !a || "object" !== Da(a) || Fa(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    Oe.prototype.getUntrustedUpdateValue = Oe.prototype.Df;
    var Pe = !1,
        Qe = [];

    function Re() {
        if (!Pe) {
            Pe = !0;
            for (var a = 0; a < Qe.length; a++) z(Qe[a])
        }
    }
    var Se = function(a) {
        Pe ? z(a) : Qe.push(a)
    };
    var Te = [],
        Ue = !1,
        Ve = function(a) {
            return f["dataLayer"].push(a)
        },
        Xe = function(a) {
            var b = a._clear;
            ra(a, function(g, h) {
                "_clear" !== g && (b && pd(g, void 0), pd(g, h))
            });
            if (!Ac) {
                Ac = a["gtm.start"];
            }
            var c = a.event;
            if (!c) return !1;
            var d = a["gtm.uniqueEventId"];
            d || (d = Gc(), a["gtm.uniqueEventId"] = d, pd("gtm.uniqueEventId", d));
            Cc = c;
            var e = We(a);
            Cc = null;
            return e
        };

    function We(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = wc.zones;
        d = e ? e.checkState(vc.m, c) : zd;
        return d.active ? oe(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }
    var Ye = function() {
            for (var a = !1; !Ue && 0 < Te.length;) {
                Ue = !0;
                delete ed.eventModel;
                hd();
                var b = Te.shift();
                if (null != b) {
                    var c = Ne(b);
                    if (c) {
                        var d = b;
                        b = Ne(d) ? d.getUntrustedUpdateValue() : void 0;
                        for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                            var h = e[g],
                                k = id(h, 1);
                            if (la(k) || Fa(k)) k = Ga(k);
                            fd[h] = k
                        }
                    }
                    try {
                        if (ia(b)) try {
                            b.call(jd)
                        } catch (v) {} else if (la(b)) {
                            var l = b;
                            if (ja(l[0])) {
                                var m =
                                    l[0].split("."),
                                    n = m.pop(),
                                    p = l.slice(1),
                                    t = id(m.join("."), 2);
                                if (void 0 !== t && null !== t) try {
                                    t[n].apply(t, p)
                                } catch (v) {}
                            }
                        } else {
                            var q = b;
                            if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                                a: {
                                    if (b.length && ja(b[0])) {
                                        var r = Ge[b[0]];
                                        if (r && (!c || !He[b[0]])) {
                                            b = r(b);
                                            break a
                                        }
                                    }
                                    b = void 0
                                }
                                if (!b) {
                                    Ue = !1;
                                    continue
                                }
                            }
                            a = Xe(b) || a
                        }
                    } finally {
                        c && hd(!0)
                    }
                }
                Ue = !1
            }
            return !a
        },
        Ze = function() {
            var a = Ye();
            try {
                var b = vc.m,
                    c = f["dataLayer"].hide;
                if (c && void 0 !== c[b] && c.end) {
                    c[b] = !1;
                    var d = !0,
                        e;
                    for (e in c)
                        if (c.hasOwnProperty(e) && !0 === c[e]) {
                            d = !1;
                            break
                        } d && (c.end(), c.end = null)
                }
            } catch (g) {}
            return a
        },
        $e = function() {
            var a = La("dataLayer", []),
                b = La("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Gd(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Se(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            var c = a.push;
            a.push = function() {
                var d;
                if (0 < wc.SANDBOXED_JS_SEMAPHORE) {
                    d = [];
                    for (var e = 0; e < arguments.length; e++) d[e] = new Oe(arguments[e])
                } else d = [].slice.call(arguments, 0);
                var g = c.apply(a, d);
                Te.push.apply(Te, d);
                if (300 < this.length)
                    for (Ia("GTM", 4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return Ye() && h
            };
            Te.push.apply(Te, a.slice(0));
            z(Ze)
        };
    var bf = function(a) {
            return af ? u.querySelectorAll(a) : null
        },
        cf = function(a, b) {
            if (!af) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!u.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        df = !1;
    if (u.querySelectorAll) try {
        var ef = u.querySelectorAll(":root");
        ef && 1 == ef.length && ef[0] == u.documentElement && (df = !0)
    } catch (a) {}
    var af = df;
    var ff;
    var Cf = {};
    Cf.ob = new String("undefined");
    var Df = function(a) {
        this.resolve = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Cf.ob ? b : a[d]);
            return c.join("")
        }
    };
    Df.prototype.toString = function() {
        return this.resolve("undefined")
    };
    Df.prototype.valueOf = Df.prototype.toString;
    Cf.Ge = Df;
    Cf.ac = {};
    Cf.pf = function(a) {
        return new Df(a)
    };
    var Ef = {};
    Cf.ig = function(a, b) {
        var c = Gc();
        Ef[c] = [a, b];
        return c
    };
    Cf.ud = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Ef[c];
            if (d && "function" === typeof d[b]) d[b]();
            Ef[c] = void 0
        }
    };
    Cf.Qf = function(a) {
        for (var b = !1, c = !1,
                d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Cf.Zf = function(a) {
        if (a === Cf.ob) return a;
        var b = Gc();
        Cf.ac[b] = a;
        return 'google_tag_manager["' + vc.m + '"].macro(' + b + ")"
    };
    Cf.Tf = function(a, b, c) {
        a instanceof Cf.Ge && (a = a.resolve(Cf.ig(b, c)), b = fa);
        return {
            nc: a,
            I: b
        }
    };
    var Ff = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": a.className,
                "gtm.elementId": a["for"] || Ua(a, "id") || "",
                "gtm.elementTarget": a.formTarget || a.target || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
            return d
        },
        Gf = function(a) {
            wc.hasOwnProperty("autoEventsSettings") || (wc.autoEventsSettings = {});
            var b = wc.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Hf = function(a, b, c) {
            Gf(a)[b] = c
        },
        If = function(a, b, c, d) {
            var e = Gf(a),
                g = xa(e, b, d);
            e[b] = c(g)
        },
        Jf = function(a, b, c) {
            var d = Gf(a);
            return xa(d, b, c)
        };
    var Kf = function() {
            for (var a = Ja.userAgent + (u.cookie || "") + (u.referrer || ""), b = a.length, c = f.history.length; 0 < c;) a += c-- ^ b++;
            var d = 1,
                e, g, h;
            if (a)
                for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(wa() / 1E3)].join(".")
        },
        Nf = function(a, b, c, d) {
            var e = Lf(b);
            return ib(a, e, Mf(c), d)
        },
        Lf = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Mf = function(a) {
            if (!a ||
                "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function Of(a, b) {
        var c = "" + Lf(a),
            d = Mf(b);
        1 < d && (c += "-" + d);
        return c
    };
    var Pf = ["1"],
        Qf = {},
        Uf = function(a, b, c, d) {
            var e = Rf(a);
            Qf[e] || Sf(e, b, c) || (Tf(e, Kf(), b, c, d), Sf(e, b, c))
        };

    function Tf(a, b, c, d, e) {
        var g;
        g = ["1", Of(d, c), b].join(".");
        mb(a, g, c, d, 0 == e ? void 0 : new Date(wa() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function Sf(a, b, c) {
        var d = Nf(a, b, c, Pf);
        d && (Qf[a] = d);
        return d
    }

    function Rf(a) {
        return (a || "_gcl") + "_au"
    };
    var Vf = function() {
        for (var a = [], b = u.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                Nc: e[1],
                value: e[2]
            })
        }
        var g = {};
        if (!a || !a.length) return g;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (g[a[h].Nc] || (g[a[h].Nc] = []), g[a[h].Nc].push({
                timestamp: k[1],
                Af: k[2]
            }))
        }
        return g
    };

    function Wf() {
        for (var a = Xf, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Yf() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Xf, Zf, $f = function(a) {
            Xf = Xf || Yf();
            Zf = Zf || Wf();
            for (var b = [], c = 0; c < a.length; c += 3) {
                var d = c + 1 < a.length,
                    e = c + 2 < a.length,
                    g = a.charCodeAt(c),
                    h = d ? a.charCodeAt(c + 1) : 0,
                    k = e ? a.charCodeAt(c + 2) : 0,
                    l = g >> 2,
                    m = (g & 3) << 4 | h >> 4,
                    n = (h & 15) << 2 | k >> 6,
                    p = k & 63;
                e || (p = 64, d || (n = 64));
                b.push(Xf[l], Xf[m], Xf[n], Xf[p])
            }
            return b.join("")
        },
        ag = function(a) {
            function b(l) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        n = Zf[m];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            Xf = Xf || Yf();
            Zf = Zf ||
                Wf();
            for (var c = "", d = 0;;) {
                var e = b(-1),
                    g = b(0),
                    h = b(64),
                    k = b(64);
                if (64 === k && -1 === e) return c;
                c += String.fromCharCode(e << 2 | g >> 4);
                64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
            }
        };
    var bg;

    function cg(a, b) {
        if (!a || b === u.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) {
                if (a[c].test(b)) return !0
            } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }
    var dg = function() {
        var a = La("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var eg = /(.*?)\*(.*?)\*(.*)/,
        fg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        gg = /^(?:www\.|m\.|amp\.)+/,
        hg = /([^?#]+)(\?[^#]*)?(#.*)?/,
        ig = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        kg = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push($f(String(d))))
                } var e = b.join("*");
            return ["1", jg(e), e].join("*")
        },
        jg = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
                    window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a
                ].join("*"),
                d;
            if (!(d = bg)) {
                for (var e = Array(256), g = 0; 256 > g; g++) {
                    for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[g] = h
                }
                d = e
            }
            bg = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ bg[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        mg = function() {
            return function(a) {
                var b = eb(f.location.href),
                    c = b.search.replace("?", ""),
                    d = ab(c, "_gl", !0) || "";
                a.query = lg(d) || {};
                var e = db(b, "fragment").match(ig);
                a.fragment = lg(e && e[3] ||
                    "") || {}
            }
        },
        lg = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var g = eg.exec(d);
                            if (g) {
                                c = g;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], n = 0; n < b; ++n)
                                if (m === jg(k, n)) {
                                    l = !0;
                                    break a
                                } l = !1
                        }
                        if (l) {
                            for (var p = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) p[t[q]] = ag(t[q + 1]);
                            return p
                        }
                    }
                }
            } catch (r) {}
        };

    function ng(a, b, c) {
        function d(m) {
            var n = m,
                p = ig.exec(n),
                t = n;
            if (p) {
                var q = p[2],
                    r = p[4];
                t = p[1];
                r && (t = t + q + r)
            }
            m = t;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = hg.exec(b);
        if (!e) return "";
        var g = e[1],
            h = e[2] || "",
            k = e[3] || "",
            l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }

    function og(a, b, c) {
        for (var d = {}, e = {}, g = dg().decorators, h = 0; h < g.length; ++h) {
            var k = g[h];
            (!c || k.forms) && cg(k.domains, b) && (k.fragment ? za(e, k.callback()) : za(d, k.callback()))
        }
        if (Aa(d)) {
            var l = kg(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], p = !1, t = 0; t < n.length; t++) {
                            var q = n[t];
                            if ("_gl" === q.name) {
                                q.setAttribute("value", l);
                                p = !0;
                                break
                            }
                        }
                        if (!p) {
                            var r = u.createElement("input");
                            r.setAttribute("type", "hidden");
                            r.setAttribute("name", "_gl");
                            r.setAttribute("value",
                                l);
                            a.appendChild(r)
                        }
                    } else if ("post" === m) {
                        var v = ng(l, a.action);
                        Za.test(v) && (a.action = v)
                    }
                }
            } else pg(l, a, !1)
        }
        if (!c && Aa(e)) {
            var x = kg(e);
            pg(x, a, !0)
        }
    }

    function pg(a, b, c) {
        if (b.href) {
            var d = ng(a, b.href, void 0 === c ? !1 : c);
            Za.test(d) && (b.href = d)
        }
    }
    var qg = function(a) {
            try {
                var b;
                a: {
                    for (var c = a.target || a.srcElement || {}, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var g = e.protocol;
                    "http:" !== g && "https:" !== g || og(e, e.hostname, !1)
                }
            } catch (h) {}
        },
        rg = function(a) {
            try {
                var b = a.target || a.srcElement || {};
                if (b.action) {
                    var c = db(eb(b.action), "host");
                    og(b, c, !0)
                }
            } catch (d) {}
        },
        sg = function(a, b, c, d) {
            var e = dg();
            e.init || (Sa(u, "mousedown", qg), Sa(u, "keyup", qg), Sa(u, "submit", rg), e.init = !0);
            var g = {
                callback: a,
                domains: b,
                fragment: "fragment" === c,
                forms: !!d
            };
            dg().decorators.push(g)
        },
        tg = function() {
            var a = u.location.hostname,
                b = fg.exec(u.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var g = c.split("/"),
                    h = g[1];
                e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            return a.replace(gg, "") === e.replace(gg, "")
        },
        ug = function(a, b) {
            return !1 === a ? !1 : a || b || tg()
        };
    var vg = {};
    var wg = /^\w+$/,
        xg = /^[\w-]+$/,
        yg = /^~?[\w-]+$/,
        zg = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha"
        };

    function Ag(a) {
        return a && "string" == typeof a && a.match(wg) ? a : "_gcl"
    }
    var Cg = function() {
        var a = eb(f.location.href),
            b = db(a, "query", !1, void 0, "gclid"),
            c = db(a, "query", !1, void 0, "gclsrc"),
            d = db(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || ab(e, "gclid", void 0);
            c = c || ab(e, "gclsrc", void 0)
        }
        return Bg(b, c, d)
    };

    function Bg(a, b, c) {
        var d = {},
            e = function(g, h) {
                d[h] || (d[h] = []);
                d[h].push(g)
            };
        if (void 0 !== a && a.match(xg)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                (void 0 == vg.gtm_3pds ? 0 : vg.gtm_3pds) && e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return d
    }

    function Dg(a, b, c) {
        function d(p, t) {
            var q = Eg(p, e);
            q && mb(q, t, h, g, l, !0)
        }
        b = b || {};
        var e = Ag(b.prefix),
            g = b.domain || "auto",
            h = b.path || "/",
            k = void 0 == b.Md ? 7776E3 : b.Md;
        c = c || wa();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
            m = Math.round(c / 1E3),
            n = function(p) {
                return ["GCL", m, p].join(".")
            };
        a.aw && (!0 === b.bh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]))
    }
    var Eg = function(a, b) {
            var c = zg[a];
            if (void 0 !== c) return b + c
        },
        Fg = function(a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
        };

    function Gg(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }
    var Hg = function(a, b, c, d, e) {
            if (la(b)) {
                var g = Ag(e);
                sg(function() {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = Eg(a[k], g);
                        if (l) {
                            var m = fb(l, u.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1])
                        }
                    }
                    return h
                }, b, c, d)
            }
        },
        Ig = function(a) {
            return a.filter(function(b) {
                return yg.test(b)
            })
        },
        Jg = function(a) {
            for (var b = ["aw", "dc"], c = Ag(a && a.prefix), d = {}, e = 0; e < b.length; e++) zg[b[e]] && (d[b[e]] = zg[b[e]]);
            ra(d, function(g, h) {
                var k = fb(c + h, u.cookie);
                if (k.length) {
                    var l = k[0],
                        m = Fg(l),
                        n = {};
                    n[g] = [Gg(l)];
                    Dg(n, a, m)
                }
            })
        };
    var Kg = /^\d+\.fls\.doubleclick\.net$/;

    function Lg(a) {
        var b = eb(f.location.href),
            c = db(b, "host", !1);
        if (c && c.match(Kg)) {
            var d = db(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function Mg(a, b) {
        if ("aw" == a || "dc" == a) {
            var c = Lg("gcl" + a);
            if (c) return c.split(".")
        }
        var d = Ag(b);
        if ("_gcl" == d) {
            var e;
            e = Cg()[a] || [];
            if (0 < e.length) return e
        }
        var g = Eg(a, d),
            h;
        if (g) {
            var k = [];
            if (u.cookie) {
                var l = fb(g, u.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = Gg(l[m]);
                        n && -1 === ma(k, n) && k.push(n)
                    }
                    h = Ig(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var Ng = function() {
            var a = Lg("gac");
            if (a) return decodeURIComponent(a);
            var b = Vf(),
                c = [];
            ra(b, function(d, e) {
                for (var g = [], h = 0; h < e.length; h++) g.push(e[h].Af);
                g = Ig(g);
                g.length && c.push(d + ":" + g.join(","))
            });
            return c.join(";")
        },
        Og = function(a, b, c, d, e) {
            Uf(b, c, d, e);
            var g = Qf[Rf(b)],
                h = Cg().dc || [],
                k = !1;
            if (g && 0 < h.length) {
                var l = wc.joined_au = wc.joined_au || {},
                    m = b || "_gcl";
                if (!l[m])
                    for (var n = 0; n < h.length; n++) {
                        var p = "https://adservice.google.com/ddm/regclk",
                            t = p = p + "?gclid=" + h[n] + "&auiddc=" + g;
                        Ja.sendBeacon && Ja.sendBeacon(t) || Ra(t);
                        k = l[m] = !0
                    }
            }
            null == a && (a = k);
            if (a && g) {
                var q = Rf(b),
                    r = Qf[q];
                r && Tf(q, r, c, d, e)
            }
        };
    var Pg;
    if (3 === vc.sb.length) Pg = "g";
    else {
        var Qg = "G";
        Qg = "g";
        Pg = Qg
    }
    var Rg = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Pg
        },
        Sg = function(a) {
            var b = vc.m.split("-"),
                c = b[0].toUpperCase(),
                d = Rg[c] || "i",
                e = a && "GTM" === c ? b[1] : "",
                g;
            if (3 === vc.sb.length) {
                var h = void 0;
                h = h || (Ie() ? "s" : "o");
                g = "2" + (h || "w")
            } else g = "";
            return g + d + vc.sb +
                e
        };
    var Tg = function(a) {
            return !(void 0 === a || null === a || 0 === (a + "").length)
        },
        Ug = function(a, b) {
            var c;
            if (2 === b.L) return a("ord", oa(1E11, 1E13)), !0;
            if (3 === b.L) return a("ord", "1"), a("num", oa(1E11, 1E13)), !0;
            if (4 === b.L) return Tg(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.L) c = "1";
            else if (6 === b.L) c = b.Hc;
            else return !1;
            Tg(c) && a("qty", c);
            Tg(b.vb) && a("cost", b.vb);
            Tg(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        Vg = encodeURIComponent,
        Wg = function(a, b) {
            function c(n, p, t) {
                g.hasOwnProperty(n) || (p += "", e += ";" + n + "=" +
                    (t ? p : Vg(p)))
            }
            var d = a.jc,
                e = a.protocol;
            e += a.Fb ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            e += ";src=" + Vg(d) + (";type=" + Vg(a.mc)) + (";cat=" + Vg(a.Ma));
            var g = a.rf || {};
            ra(g, function(n, p) {
                e += ";" + Vg(n) + "=" + Vg(p + "")
            });
            if (Ug(c, a)) {
                Tg(a.Kb) && c("u", a.Kb);
                Tg(a.Jb) && c("tran", a.Jb);
                c("gtm", Sg());
                !1 === a.Pe && c("npa", "1");
                if (a.ic) {
                    var h = Mg("dc", a.va);
                    h && h.length && c("gcldc", h.join("."));
                    var k = Mg("aw", a.va);
                    k && k.length && c("gclaw", k.join("."));
                    var l = Ng();
                    l && c("gac", l);
                    Uf(a.va, void 0, a.lf, a.nf);
                    var m = Qf[Rf(a.va)];
                    m && c("auiddc", m)
                }
                Tg(a.Dc) && c("prd", a.Dc, !0);
                ra(a.Qc, function(n, p) {
                    c(n, p)
                });
                e += b || "";
                Tg(a.Db) && c("~oref", a.Db);
                a.Fb ? Qa(e + "?", a.I) : Ra(e + "?", a.I, a.O)
            } else z(a.O)
        };
    var Yg = function(a) {
            var b = "/pagead/conversion/" + Xg(a.conversion_id) + "/?",
                c = Xg(JSON.stringify(a.conversion_data)),
                d = "https://www.googletraveladservices.com/travel/flights/clk" + b + "conversion_data=" + c;
            if (a.conversionLinkerEnabled) {
                var e = Mg("gf", a.cookiePrefix);
                if (e && e.length)
                    for (var g = 0; g < e.length; g++) d += "&gclgf=" + Xg(e[g])
            }
            Ra(d, a.onSuccess, a.onFailure)
        },
        Xg = function(a) {
            return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
        };
    var Zg = !!f.MutationObserver,
        $g = void 0,
        ah = function(a) {
            if (!$g) {
                var b = function() {
                    var c = u.body;
                    if (c)
                        if (Zg)(new MutationObserver(function() {
                            for (var e = 0; e < $g.length; e++) z($g[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Sa(c, "DOMNodeInserted", function() {
                                d || (d = !0, z(function() {
                                    d = !1;
                                    for (var e = 0; e < $g.length; e++) z($g[e])
                                }))
                            })
                        }
                };
                $g = [];
                u.body ? b() : z(b)
            }
            $g.push(a)
        };
    var sh = f.clearTimeout,
        th = f.setTimeout,
        G = function(a, b, c) {
            if (Ie()) {
                b && z(b)
            } else return Na(a, b, c)
        },
        uh = function() {
            return new Date
        },
        vh = function() {
            return f.location.href
        },
        wh = function(a) {
            return db(eb(a), "fragment")
        },
        xh = function(a) {
            return cb(eb(a))
        },
        yh = function(a, b) {
            return id(a, b || 2)
        },
        zh = function(a, b, c) {
            b && (a.eventCallback = b, c && (a.eventTimeout = c));
            return Ve(a)
        },
        Ah = function(a, b) {
            f[a] = b
        },
        K = function(a, b, c) {
            b && (void 0 === f[a] ||
                c && !f[a]) && (f[a] = b);
            return f[a]
        },
        Bh = function(a, b, c) {
            return fb(a, b, void 0 === c ? !0 : !!c)
        },
        Ch = function(a, b, c, d) {
            var e = {
                    prefix: a,
                    path: b,
                    domain: c,
                    Md: d
                },
                g = Cg();
            Dg(g, e);
            Jg(e)
        },
        Dh = function(a, b, c, d, e) {
            var g = mg(),
                h = dg();
            h.data || (h.data = {
                query: {},
                fragment: {}
            }, g(h.data));
            var k = {},
                l = h.data;
            l && (za(k, l.query), za(k, l.fragment));
            for (var m = Ag(b), n = 0; n < a.length; ++n) {
                var p = a[n];
                if (void 0 !== zg[p]) {
                    var t = Eg(p, m),
                        q = k[t];
                    if (q) {
                        var r = Math.min(Fg(q), wa()),
                            v;
                        b: {
                            for (var x = r, y = fb(t, u.cookie),
                                    w = 0; w < y.length; ++w)
                                if (Fg(y[w]) > x) {
                                    v = !0;
                                    break b
                                } v = !1
                        }
                        v || mb(t, q, c, d, 0 == e ? void 0 : new Date(r + 1E3 * (null == e ? 7776E3 : e)), !0)
                    }
                }
            }
            var A = {
                prefix: b,
                path: c,
                domain: d
            };
            Dg(Bg(k.gclid, k.gclsrc), A);
        },
        Eh = function(a, b, c, d, e) {
            Hg(a, b, c, d, e);
        },
        Fh = function(a, b) {
            if (Ie()) {
                b && z(b)
            } else Qa(a, b)
        },
        Gh = function(a) {
            return !!Jf(a,
                "init", !1)
        },
        Hh = function(a) {
            Hf(a, "init", !0)
        },
        Ih = function(a, b, c) {
            var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : zc;
            d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            b && ra(b, function(e, g) {
                g && (d += "&" + e + "=" + encodeURIComponent(g))
            });
            G(E("https://", "http://", d))
        };
    var Jh = function(a, b, c, d, e, g) {
        var h = {
            config: a,
            gtm: Sg()
        };
        c && (Uf(d, void 0, e, g), h.auiddc = Qf[Rf(d)]);
        b && (h.loadInsecure = b);
        K("__dc_ns_processor", []).push(h);
        G((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
    };
    var Kh = Cf.Tf;
    var Lh = new pa,
        Mh = function(a, b) {
            function c(h) {
                var k = eb(h),
                    l = db(k, "protocol"),
                    m = db(k, "host", !0),
                    n = db(k, "port"),
                    p = db(k, "path").toLowerCase().replace(/\/$/, "");
                if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n = "default";
                return [l, m, n, p]
            }
            for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
                if (d[g] !== e[g]) return !1;
            return !0
        },
        Nh = function(a) {
            var b = a.arg0,
                c = a.arg1;
            if (a.any_of && la(c)) {
                for (var d = 0; d < c.length; d++)
                    if (Nh({
                            "function": a["function"],
                            arg0: b,
                            arg1: c[d]
                        })) return !0;
                return !1
            }
            switch (a["function"]) {
                case "_cn":
                    return 0 <=
                        String(b).indexOf(String(c));
                case "_css":
                    var e;
                    a: {
                        if (b) {
                            var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                            try {
                                for (var h = 0; h < g.length; h++)
                                    if (b[g[h]]) {
                                        e = b[g[h]](c);
                                        break a
                                    }
                            } catch (v) {}
                        }
                        e = !1
                    }
                    return e;
                case "_ew":
                    var k, l;
                    k = String(b);
                    l = String(c);
                    var m = k.length - l.length;
                    return 0 <= m && k.indexOf(l, m) == m;
                case "_eq":
                    return String(b) == String(c);
                case "_ge":
                    return Number(b) >= Number(c);
                case "_gt":
                    return Number(b) > Number(c);
                case "_lc":
                    var n;
                    n = String(b).split(",");
                    return 0 <= ma(n, String(c));
                case "_le":
                    return Number(b) <= Number(c);
                case "_lt":
                    return Number(b) < Number(c);
                case "_re":
                    var p;
                    var t = a.ignore_case ? "i" : void 0;
                    try {
                        var q = String(c) + t,
                            r = Lh.get(q);
                        r || (r = new RegExp(c, t), Lh.set(q, r));
                        p = r.test(b)
                    } catch (v) {
                        p = !1
                    }
                    return p;
                case "_sw":
                    return 0 == String(b).indexOf(String(c));
                case "_um":
                    return Mh(b, c)
            }
            return !1
        };
    var Ph = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Qh = {},
        Rh = encodeURI,
        M = encodeURIComponent,
        Sh = Ra;
    var Th = function(a, b) {
        if (!a) return !1;
        var c = db(eb(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g) return !0
            }
        }
        return !1
    };
    var Uh = function(a, b, c) {
        for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
        return e ? d : null
    };
    Qh.Rf = function() {
        var a = !1;
        return a
    };
    var Di = function(a, b, c, d) {
            this.n = a;
            this.t = b;
            this.p = c;
            this.d = d
        },
        Ei = function() {
            this.c = 1;
            this.e = [];
            this.p = null
        };

    function Fi(a) {
        var b = wc,
            c = b.gss = b.gss || {};
        return c[a] = c[a] || new Ei
    }
    var Gi = function(a, b) {
            Fi(a).p = b
        },
        Hi = function(a) {
            var b = Fi(a),
                c = b.p;
            if (c) {
                var d = b.e,
                    e = [];
                b.e = [];
                var g = function(h) {
                    for (var k = 0; k < h.length; k++) try {
                        var l = h[k];
                        l.d ? (l.d = !1, e.push(l)) : c(l.n, l.t, l.p)
                    } catch (m) {}
                };
                g(d);
                g(e)
            }
        };
    var Ji = function() {
        var a = f.gaGlobal = f.gaGlobal || {};
        a.hid = a.hid || oa();
        return a.hid
    };
    var Yi = window,
        Zi = document,
        $i = function(a) {
            var b = Yi._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Yi["ga-disable-" + a]) return !0;
            try {
                var c = Yi.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (g) {}
            for (var d = fb("AMP_TOKEN", Zi.cookie, !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Zi.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var gj = function(a, b, c) {
            fj(a);
            var d = Math.floor(wa() / 1E3);
            Fi(a).e.push(new Di(b, d, c, void 0));
            Hi(a)
        },
        hj = function(a, b, c) {
            fj(a);
            var d = Math.floor(wa() / 1E3);
            Fi(a).e.push(new Di(b, d, c, !0))
        },
        fj = function(a) {
            if (1 === Fi(a).c) {
                Fi(a).c = 2;
                var b = encodeURIComponent(a);
                Na(("http:" != f.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
            }
        },
        jj = function(a, b) {},
        ij = function(a, b) {};
    var V = {
        a: {}
    };

    V.a.gtagha = ["google"],
        function() {
            function a(h) {
                function k(m, n) {
                    void 0 !== n && l.push(m + "=" + n)
                }
                if (void 0 === h) return "";
                var l = [];
                k("hct_base_price", h.Dd);
                k("hct_booking_xref", h.Ed);
                k("hct_checkin_date", h.Gf);
                k("hct_checkout_date", h.Hf);
                k("hct_currency_code", h.If);
                k("hct_partner_hotel_id", h.Fd);
                k("hct_total_price", h.Gd);
                return l.join(";")
            }

            function b(h, k, l, m) {
                var n = M(h),
                    p = M(a(k)),
                    t = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + n + "/?data=" + p;
                l && (t += Mg("ha", m).map(function(q) {
                    return "&gclha=" +
                        M(q)
                }).join(""));
                return t
            }

            function c(h, k, l, m, n, p) {
                /^\d+$/.test(h) ? Sh(b(h, k, l, m), n, p) : z(p)
            }

            function d(h, k, l, m) {
                var n = {};
                ja(h) ? n.Ed = h : "number" === typeof h && (n.Ed = String(h));
                ja(l) && (n.If = l);
                ja(k) ? n.Gd = n.Dd = k : "number" === typeof k && (n.Gd = n.Dd = String(k));
                if (!la(m) || 0 == m.length) return n;
                var p = m[0];
                if (!Fa(p)) return n;
                ja(p.id) ? n.Fd = p.id : "number" === typeof p.id && (n.Fd = String(p.id));
                ja(p.start_date) && (n.Gf = p.start_date);
                ja(p.end_date) && (n.Hf = p.end_date);
                return n
            }

            function e(h) {
                var k = Cc,
                    l = h.vtp_gtmOnSuccess,
                    m = h.vtp_gtmOnFailure,
                    n = h.vtp_conversionId,
                    p = n.containerId,
                    t = function(A) {
                        return kd(A, p, n.id)
                    },
                    q = !1 !== t(F.Fa),
                    r = t(F.Ea) || t(F.F),
                    v = t(F.N),
                    x = t(F.U);
                if (k === F.aa) {
                    var y = t(F.Ha) || {};
                    q && (ug(y[F.gb], !!y[F.H]) && Dh(g, r, void 0, v, x), Ch(r, void 0, v, x));
                    y[F.H] && Eh(g, y[F.H], y[F.ib], !!y[F.hb], r);
                    z(l)
                } else if ("purchase" === k) {
                    var w = d(t(F.Ja), t(F.ca), t(F.na), t(F.T));
                    c(n.da[0], w, q, r, l, m)
                } else z(m)
            }
            var g = ["ha"];
            V.__gtagha = e;
            V.__gtagha.g = "gtagha";
            V.__gtagha.h = !0;
            V.__gtagha.b = 0;
        }();

    V.a.e = ["google"],
        function() {
            (function(a) {
                V.__e = a;
                V.__e.g = "e";
                V.__e.h = !0;
                V.__e.b = 0
            })(function(a) {
                return String(rd(a.vtp_gtmEventId, "event"))
            })
        }();
    V.a.v = ["google"],
        function() {
            (function(a) {
                V.__v = a;
                V.__v.g = "v";
                V.__v.h = !0;
                V.__v.b = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = yh(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();




    V.a.gtagaw = ["google"],
        function() {
            var a = !1,
                b = [],
                c = ["aw", "dc"],
                d = function(m) {
                    var n = K("google_trackConversion"),
                        p = m.gtm_onFailure;
                    "function" == typeof n ? n(m) || p() : p()
                },
                e = function() {
                    for (; 0 < b.length;) d(b.shift())
                },
                g = function() {
                    a || (a = !0, Md(), G(E("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function() {
                        e();
                        b = {
                            push: d
                        }
                    }, function() {
                        e();
                        a = !1
                    }))
                },
                h = function(m, n, p, t) {
                    if (Ie()) {} else {
                        la(n) || (n = [n]);
                        for (var q =
                                0; q < n.length; q++) 1 > q && Jc(m.da[0], m.da[1], n[q], {
                            ae: p,
                            yg: t
                        })
                    }
                },
                k = function(m) {
                    if (m) {
                        for (var n = [], p = 0; p < m.length; ++p) {
                            var t = m[p];
                            t && n.push({
                                item_id: t.id,
                                quantity: t.quantity,
                                value: t.price,
                                start_date: t.start_date,
                                end_date: t.end_date
                            })
                        }
                        return n
                    }
                },
                l = function(m) {
                    var n = m.vtp_conversionId,
                        p = Cc,
                        t = p == F.aa,
                        q = n.da[0],
                        r = n.da[1],
                        v = void 0 !== r,
                        x = n.containerId,
                        y = v ? n.id : void 0,
                        w = function(X) {
                            return kd(X, x, y)
                        },
                        A = !1 !== w(F.Fa),
                        B = w(F.Ea) || w(F.F),
                        C = w(F.N),
                        D = w(F.U);
                    if (t) {
                        var H = w(F.Ha) || {};
                        A && (ug(H[F.gb], !!H[F.H]) && Dh(c, B, void 0,
                            C, D), Ch(B, void 0, C, D));
                        H[F.H] && Eh(c, H[F.H], H[F.ib], !!H[F.hb], B);
                        if (v) {
                            var S = w(F.Xb),
                                T = w(F.Vb),
                                W = w(F.Wb),
                                P = w(F.kd);
                            h(n, S, T || W, P)
                        }
                    }
                    var Q = !1 === w(F.$c) || !1 === w(F.Ia);
                    if (!t || !v && !Q)
                        if (!0 === w(F.ad) && (v = !1), !1 !== w(F.S) || v) {
                            var N = {
                                google_conversion_id: q,
                                google_remarketing_only: !v,
                                onload_callback: m.vtp_gtmOnSuccess,
                                gtm_onFailure: m.vtp_gtmOnFailure,
                                google_conversion_format: "3",
                                google_conversion_color: "ffffff",
                                google_conversion_domain: "",
                                google_conversion_label: r,
                                google_conversion_language: w(F.Ga),
                                google_conversion_value: w(F.ca),
                                google_conversion_currency: w(F.na),
                                google_conversion_order_id: w(F.Ja),
                                google_user_id: w(F.ba),
                                google_conversion_page_url: w(F.jb),
                                google_conversion_referrer_url: w(F.kb),
                                google_gtm: Sg()
                            };
                            Ie() && (N.opt_image_generator = function() {
                                return new Image
                            }, N.google_enable_display_cookie_match = !1);
                            !1 === w(F.S) && (N.google_allow_ad_personalization_signals = !1);
                            N.google_read_gcl_cookie_opt_out = !A;
                            A && B && (N.google_gcl_cookie_prefix = B);
                            var I = function() {
                                var X = w(F.cb),
                                    L = {
                                        event: p
                                    };
                                if (la(X)) {
                                    for (var O = 0; O < X.length; ++O) {
                                        var ba =
                                            X[O],
                                            Y = w(ba);
                                        void 0 !== Y && (L[ba] = Y)
                                    }
                                    return L
                                }
                                var Z = w("eventModel");
                                if (!Z) return null;
                                Ga(Z, L);
                                for (var ha = 0; ha < F.Uc.length; ++ha) delete L[F.Uc[ha]];
                                return L
                            }();
                            I && (N.google_custom_params = I);
                            !v && w(F.T) && (N.google_gtag_event_data = {
                                items: w(F.T),
                                value: w(F.ca)
                            });
                            if (v && "purchase" == p) {
                                w(F.Nb) && (N.google_conversion_merchant_id = w(F.Nb), N.google_basket_feed_country = w(F.cd), N.google_basket_feed_language = w(F.dd), N.google_basket_discount = w(F.bd), N.google_basket_transaction_type = p, N.google_disable_merchant_reported_conversions = !0 === w(F.fd), Ie() && (N.google_disable_merchant_reported_conversions = !0));
                                var J = k(w(F.T));
                                J && (N.google_conversion_items = J)
                            }
                            var R = function(X, L) {
                                void 0 != L && "" !== L && (N.google_additional_conversion_params = N.google_additional_conversion_params || {}, N.google_additional_conversion_params[X] = L)
                            };
                            v && ("boolean" == typeof w(F.Ub) && R("vdnc", w(F.Ub)), R("vdltv", w(F.ed)));
                            var U = !0;
                            U && b.push(N)
                        } g()
                };
            V.__gtagaw = l;
            V.__gtagaw.g = "gtagaw";
            V.__gtagaw.h = !0;
            V.__gtagaw.b = 0
        }();


    V.a.get = ["google"],
        function() {
            function a(b, c) {
                ra(c, function(e) {
                    "_" === e.charAt(0) && delete c[e]
                });
                var d = c[F.nb] || {};
                ra(d, function(e) {
                    "_" === e.charAt(0) && delete d[e]
                })
            }(function(b) {
                V.__get = b;
                V.__get.g = "get";
                V.__get.h = !0;
                V.__get.b = 0
            })(function(b) {
                if (b.vtp_isAutoTag) {
                    for (var c = String(b.vtp_trackingId), d = Cc || "", e = {}, g = F.ld, h = 0; h < g.length; h++) {
                        var k = nd(g[h], c);
                        void 0 !== k && (e[g[h]] = k)
                    }
                    var l = nd(F.cb, c);
                    if (la(l))
                        for (var m = 0; m < l.length; m++) {
                            var n = l[m],
                                p = nd(n, c);
                            void 0 !== p && (e[n] = p)
                        } else {
                            var t = yh("eventModel");
                            Ga(t, e)
                        }
                    if ("_" === d.charAt(0)) return;
                    a(d, e);
                    gj(c, d, Ga(e))
                } else {
                    var q = b.vtp_settings,
                        r = q.eventParameters,
                        v = q.userProperties;
                    Ga(Uh(b.vtp_eventParameters, "name", "value"), r);
                    Ga(Uh(b.vtp_userProperties, "name", "value"), v);
                    r[F.nb] = v;
                    var x = String(b.vtp_eventName),
                        y = b.vtp_allowSystemNames;
                    if (!y && "_" === x.charAt(0)) return;
                    y || a(x, r);
                    (b.vtp_deferrable ? hj : gj)(String(q.streamId), x, r)
                }
                b.vtp_gtmOnSuccess()
            })
        }();



    V.a.gtagfl = [],
        function() {
            function a(e) {
                var g = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(e);
                if (g) {
                    var h = {
                        standard: 2,
                        unique: 3,
                        per_session: 4,
                        transactions: 5,
                        items_sold: 6,
                        "": 1
                    } [(g[5] || "").toLowerCase()];
                    if (h) return {
                        containerId: "DC-" + g[1],
                        $d: g[3] ? e : "",
                        Je: g[1],
                        Ie: g[3] || "",
                        Ma: g[4] || "",
                        L: h
                    }
                }
            }

            function b(e, g) {
                function h(t, q, r) {
                    void 0 !== r && 0 !== (r + "").length && k.push(t + q + ":" + e(r + ""))
                }
                var k = [],
                    l = g(F.T) || [];
                if (la(l))
                    for (var m = 0; m < l.length; m++) {
                        var n = l[m],
                            p = m + 1;
                        h("i", p, n.id);
                        h("p", p, n.price);
                        h("q", p, n.quantity);
                        h("c", p, g(F.ie));
                        h("l", p, g(F.Ga))
                    }
                return k.join("|")
            }

            function c(e, g, h) {
                var k = /^u([1-9]\d?|100)$/,
                    l = e(F.je) || {},
                    m = od(g, h),
                    n = {},
                    p = {};
                if (Fa(l))
                    for (var t in l)
                        if (l.hasOwnProperty(t) && k.test(t)) {
                            var q = l[t];
                            ja(q) && (n[t] = q)
                        } for (var r = 0; r < m.length; r++) {
                    var v = m[r];
                    k.test(v) && (n[v] = v)
                }
                for (var x in n) n.hasOwnProperty(x) && (p[x] = e(n[x]));
                return p
            }
            var d = ["aw", "dc"];
            (function(e) {
                V.__gtagfl = e;
                V.__gtagfl.g = "gtagfl";
                V.__gtagfl.h = !0;
                V.__gtagfl.b = 0
            })(function(e) {
                var g = e.vtp_gtmOnSuccess,
                    h = e.vtp_gtmOnFailure,
                    k = a(e.vtp_targetId);
                if (k) {
                    var l = function(W) {
                            return kd(W, k.containerId, k.$d || void 0)
                        },
                        m = !1 !== l(F.Fa),
                        n = l(F.Ea) || l(F.F),
                        p = l(F.N),
                        t = l(F.U),
                        q = l(F.me),
                        r = 3 === Hc();
                    if (Cc === F.aa) {
                        var v = l(F.Ha) || {},
                            x = l(F.he),
                            y = void 0 === x ? !0 : !!x;
                        m && (ug(v[F.gb], !!v[F.H]) && Dh(d, n, void 0, p, t), Ch(n, void 0, p, t), Og(y, n, void 0, p, t));
                        v[F.H] && Eh(d, v[F.H], v[F.ib], !!v[F.hb], n);
                        if (q && q.exclusion_parameters && q.engines) {
                            Jh(q, r, m, n, p, t);
                        }
                        z(g)
                    } else {
                        var w = {},
                            A = l(F.ke);
                        if (Fa(A))
                            for (var B in A)
                                if (A.hasOwnProperty(B)) {
                                    var C = A[B];
                                    void 0 !== C && null !== C && (w[B] = C)
                                } var D = "";
                        if (5 === k.L || 6 === k.L) D = b(M, l);
                        var H = c(l, k.containerId, k.$d),
                            S = !0 === l(F.ce);
                        if (Ie() && S) {
                            S = !1
                        }
                        var T = {
                            Ma: k.Ma,
                            ic: m,
                            lf: p,
                            nf: t,
                            va: n,
                            vb: l(F.ca),
                            L: k.L,
                            rf: w,
                            jc: k.Je,
                            mc: k.Ie,
                            O: h,
                            I: g,
                            Db: xh(vh()),
                            Dc: D,
                            protocol: r ? "http:" : "https:",
                            Hc: l(F.xe),
                            Fb: S,
                            sessionId: l(F.mb),
                            Jb: void 0,
                            transactionId: l(F.Ja),
                            Kb: void 0,
                            Qc: H,
                            Pe: !1 !== l(F.S)
                        };
                        Wg(T)
                    }
                } else z(h)
            })
        }();


    V.a.gtaggf = ["google"],
        function() {
            var a = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
                b = function(c) {
                    if (c) {
                        for (var d = [], e = 0, g = 0; g < c.length; ++g) {
                            var h = c[g];
                            !h || void 0 !== h.category && "" !== h.category && "FlightSegment" !== h.category || (d[e] = {
                                cabin: h.travel_class,
                                fare_product: h.fare_product,
                                booking_code: h.booking_code,
                                flight_number: h.flight_number,
                                origin: h.origin,
                                destination: h.destination,
                                departure_date: h.start_date
                            }, e++)
                        }
                        return d
                    }
                };
            (function(c) {
                V.__gtaggf = c;
                V.__gtaggf.g = "gtaggf";
                V.__gtaggf.h = !0;
                V.__gtaggf.b =
                    0
            })(function(c) {
                var d = Cc,
                    e = c.vtp_gtmOnSuccess,
                    g = c.vtp_gtmOnFailure,
                    h = c.vtp_conversionId,
                    k = h.da[0],
                    l = h.containerId,
                    m = function(w) {
                        return kd(w, l, h.id)
                    },
                    n = !1 !== m(F.Fa),
                    p = m(F.Ea) || m(F.F),
                    t = m(F.N),
                    q = m(F.U);
                if (d === F.aa) n && Ch(p, void 0, t, q), z(e);
                else {
                    var r = {
                        conversion_id: k,
                        onFailure: g,
                        onSuccess: e,
                        conversionLinkerEnabled: n,
                        cookiePrefix: p
                    };
                    if ("purchase" === d) {
                        var v = a.test(vh()),
                            x = {
                                partner_id: k,
                                trip_type: m(F.Ae),
                                total_price: m(F.ca),
                                currency: m(F.na),
                                is_direct_booking: v,
                                flight_segment: b(m(F.T))
                            },
                            y = m(F.we);
                        y && "object" ===
                            typeof y && (x.passengers_total = y.total, x.passengers_adult = y.adult, x.passengers_child = y.child, x.passengers_infant_in_seat = y.infant_in_seat, x.passengers_infant_in_lap = y.infant_in_lap);
                        r.conversion_data = x
                    }
                    Yg(r)
                }
            })
        }();


    V.a.gtagua = ["google"],
        function() {
            var a, b = {
                    client_id: 1,
                    client_storage: "storage",
                    cookie_name: 1,
                    cookie_domain: 1,
                    cookie_expires: 1,
                    cookie_path: 1,
                    cookie_update: 1,
                    sample_rate: 1,
                    site_speed_sample_rate: 1,
                    use_amp_client_id: 1,
                    store_gac: 1,
                    conversion_linker: "storeGac"
                },
                c = {
                    anonymize_ip: 1,
                    app_id: 1,
                    app_installer_id: 1,
                    app_name: 1,
                    app_version: 1,
                    campaign: {
                        name: "campaignName",
                        source: "campaignSource",
                        medium: "campaignMedium",
                        term: "campaignTerm",
                        content: "campaignContent",
                        id: "campaignId"
                    },
                    currency: "currencyCode",
                    description: "exDescription",
                    fatal: "exFatal",
                    language: 1,
                    non_interaction: 1,
                    page_hostname: "hostname",
                    page_referrer: "referrer",
                    page_path: "page",
                    page_location: "location",
                    page_title: "title",
                    screen_name: 1,
                    transport_type: "transport",
                    user_id: 1
                },
                d = {
                    content_id: 1,
                    event_category: 1,
                    event_action: 1,
                    event_label: 1,
                    link_attribution: 1,
                    linker: 1,
                    method: 1,
                    name: 1,
                    send_page_view: 1,
                    value: 1
                },
                e = {
                    cookie_name: 1,
                    cookie_expires: "duration",
                    levels: 1
                },
                g = {
                    anonymize_ip: 1,
                    fatal: 1,
                    non_interaction: 1,
                    use_amp_client_id: 1,
                    send_page_view: 1,
                    store_gac: 1,
                    conversion_linker: 1
                },
                h = function(r, v, x, y) {
                    if (void 0 !== x)
                        if (g[v] && (x = ta(x)), "anonymize_ip" != v || x || (x = void 0), 1 === r) y[k(v)] = x;
                        else if (ja(r)) y[r] = x;
                    else
                        for (var w in r) r.hasOwnProperty(w) && void 0 !== x[w] && (y[r[w]] = x[w])
                },
                k = function(r) {
                    return r && ja(r) ? r.replace(/(_[a-z])/g, function(v) {
                        return v[1].toUpperCase()
                    }) : r
                },
                l = function(r, v, x) {
                    r.hasOwnProperty(v) || (r[v] = x)
                },
                m = function(r, v, x) {
                    var y = {},
                        w = {},
                        A = {},
                        B;
                    var C = nd(F.te, r);
                    if (la(C)) {
                        for (var D = [], H = 0; H < C.length; H++) {
                            var S = C[H];
                            if (void 0 != S) {
                                var T = S.id,
                                    W = S.variant;
                                void 0 != T && void 0 !=
                                    W && D.push(String(T) + "." + String(W))
                            }
                        }
                        B = 0 < D.length ? D.join("!") : void 0
                    } else B = void 0;
                    var P = B;
                    P && l(w, "exp", P);
                    var Q = nd("custom_map", r);
                    if (Fa(Q))
                        for (var N in Q)
                            if (Q.hasOwnProperty(N) && /^(dimension|metric)\d+$/.test(N) && void 0 != Q[N]) {
                                var I = nd(String(Q[N]), r);
                                void 0 !== I && l(w, N, I)
                            } for (var J = od(r), R = 0; R < J.length; ++R) {
                        var U = J[R],
                            X = nd(U, r);
                        d.hasOwnProperty(U) ? h(d[U], U, X, y) : c.hasOwnProperty(U) ? h(c[U], U, X, w) : b.hasOwnProperty(U) ? h(b[U], U, X, A) : /^(dimension|metric|content_group)\d+$/.test(U) ? h(1, U, X, w) : U === F.F &&
                            0 > ma(J, F.ab) && (A.cookieName = X + "_ga")
                    }
                    var L = String(Cc);
                    l(A, "cookieDomain", "auto");
                    l(w, "forceSSL", !0);
                    var O = "general";
                    0 <= ma("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), L) ? O = "ecommerce" : 0 <= ma("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), L) ? O = "engagement" : "exception" == L && (O = "error");
                    l(y, "eventCategory", O);
                    0 <= ma(["view_item",
                        "view_item_list", "view_promotion", "view_search_results"
                    ], L) && l(w, "nonInteraction", !0);
                    "login" == L || "sign_up" == L || "share" == L ? l(y, "eventLabel", nd(F.ue, r)) : "search" == L || "view_search_results" == L ? l(y, "eventLabel", nd(F.ye, r)) : "select_content" == L && l(y, "eventLabel", nd(F.fe, r));
                    var ba = y[F.Ha] || {},
                        Y = ba[F.gb];
                    Y || 0 != Y && ba[F.H] ? A.allowLinker = !0 : !1 === Y && l(A, "useAmpClientId", !1);
                    if (!1 === nd(F.de, r) || !1 === nd(F.S, r)) w.allowAdFeatures = !1;
                    A.name = v;
                    w["&gtm"] = Sg(!0);
                    w.hitCallback = x;
                    y.X = w;
                    y.vd = A;
                    return y
                },
                n = function(r) {
                    function v(I) {
                        var J =
                            Ga(I);
                        J.list = I.list_name;
                        J.listPosition = I.list_position;
                        J.position = I.list_position || I.creative_slot;
                        J.creative = I.creative_name;
                        return J
                    }

                    function x(I) {
                        for (var J = [], R = 0; I && R < I.length; R++) I[R] && J.push(v(I[R]));
                        return J.length ? J : void 0
                    }

                    function y(I) {
                        return {
                            id: A(w.Ja),
                            affiliation: A(w.ne),
                            revenue: A(w.ca),
                            tax: A(w.se),
                            shipping: A(w.qe),
                            coupon: A(w.oe),
                            list: A(w.Ob) || I
                        }
                    }
                    for (var w = F, A = function(I) {
                            return kd(I, r, void 0)
                        }, B = A(w.T), C, D = 0; B && D < B.length && !(C = B[D][w.Ob]); D++);
                    var H = A("custom_map");
                    if (Fa(H))
                        for (var S =
                                0; B && S < B.length; ++S) {
                            var T = B[S],
                                W;
                            for (W in H) H.hasOwnProperty(W) && /^(dimension|metric)\d+$/.test(W) && void 0 != H[W] && l(T, W, T[H[W]])
                        }
                    var P = null,
                        Q = Cc,
                        N = A(w.pe);
                    "purchase" == Q || "refund" == Q ? P = {
                        action: Q,
                        La: y(),
                        Aa: x(B)
                    } : "add_to_cart" == Q ? P = {
                        action: "add",
                        Aa: x(B)
                    } : "remove_from_cart" == Q ? P = {
                        action: "remove",
                        Aa: x(B)
                    } : "view_item" == Q ? P = {
                        action: "detail",
                        La: y(C),
                        Aa: x(B)
                    } : "view_item_list" == Q ? P = {
                        action: "impressions",
                        Lf: x(B)
                    } : "view_promotion" == Q ? P = {
                        action: "promo_view",
                        Ec: x(N)
                    } : "select_content" == Q && N && 0 < N.length ? P = {
                        action: "promo_click",
                        Ec: x(N)
                    } : "select_content" == Q ? P = {
                        action: "click",
                        La: {
                            list: A(w.Ob) || C
                        },
                        Aa: x(B)
                    } : "begin_checkout" == Q || "checkout_progress" == Q ? P = {
                        action: "checkout",
                        Aa: x(B),
                        La: {
                            step: "begin_checkout" == Q ? 1 : A(w.hd),
                            option: A(w.gd)
                        }
                    } : "set_checkout_option" == Q && (P = {
                        action: "checkout_option",
                        La: {
                            step: A(w.hd),
                            option: A(w.gd)
                        }
                    });
                    P && (P.Jg = A(w.na));
                    return P
                },
                p = {},
                t = function(r, v) {
                    var x = p[r];
                    p[r] = Ga(v);
                    if (!x) return !1;
                    for (var y in v)
                        if (v.hasOwnProperty(y) && v[y] !== x[y]) return !0;
                    for (var w in x)
                        if (x.hasOwnProperty(w) && x[w] !== v[w]) return !0;
                    return !1
                },
                q = function(r) {
                    var v = r.vtp_trackingId,
                        x = Td();
                    if (ia(x)) {
                        var y = "gtag_" + v.split("-").join("_"),
                            w = function(P) {
                                var Q = [].slice.call(arguments, 0);
                                Q[0] = y + "." + Q[0];
                                x.apply(window, Q)
                            },
                            A = function() {
                                var P = function(J, R) {
                                        for (var U = 0; R && U < R.length; U++) w(J, R[U])
                                    },
                                    Q = n(v);
                                if (Q) {
                                    var N = Q.action;
                                    if ("impressions" == N) P("ec:addImpression", Q.Lf);
                                    else if ("promo_click" == N || "promo_view" == N) {
                                        var I = Q.Ec;
                                        P("ec:addPromo", Q.Ec);
                                        I && 0 < I.length && "promo_click" == N && w("ec:setAction", N)
                                    } else P("ec:addProduct", Q.Aa), w("ec:setAction",
                                        N, Q.La)
                                }
                            },
                            B = function() {
                                if (Ie()) {} else {
                                    var P = nd(F.ve, v);
                                    P && (w("require", P, {
                                        dataLayer: "dataLayer"
                                    }), w("require", "render"))
                                }
                            },
                            C = function() {
                                if (Ie()) {} else {
                                    var P = nd(F.Xb, v),
                                        Q = nd(F.Wb, v),
                                        N = nd(F.Vb, v),
                                        I;
                                    I = la(P) ? P : [P];
                                    for (var J = 0; J < I.length; J++) 5 > J && Yd(v, I[J], {
                                        Ad: N || Q
                                    });
                                }
                            },
                            D = m(v, y, r.vtp_gtmOnSuccess);
                        t(y, D.vd) && x(function() {
                            Rd() && Rd().remove(y)
                        });
                        x("create", v, D.vd);
                        (function() {
                            var P = nd("custom_map", v);
                            x(function() {
                                if (Fa(P)) {
                                    var Q = D.X,
                                        N = Rd().getByName(y),
                                        I;
                                    for (I in P)
                                        if (P.hasOwnProperty(I) && /^(dimension|metric)\d+$/.test(I) && void 0 != P[I]) {
                                            var J = N.get(k(P[I]));
                                            l(Q, I, J)
                                        }
                                }
                            })
                        })();
                        (function(P) {
                            if (P) {
                                var Q = {};
                                if (Fa(P))
                                    for (var N in e) e.hasOwnProperty(N) && h(e[N], N, P[N], Q);
                                w("require", "linkid", Q)
                            }
                        })(D.linkAttribution);
                        var H = D[F.Ha];
                        if (H && H[F.H]) {
                            var S = H[F.ib];
                            Ud(y + ".", H[F.H],
                                void 0 === S ? !!H.use_anchor : "fragment" === S, !!H[F.hb])
                        }
                        var T = function(P, Q, N) {
                                N && (Q = "" + Q);
                                D.X[P] = Q
                            },
                            W = Cc;
                        W == F.Mb ? (B(), w("send", "pageview", D.X)) : W == F.aa ? (B(), C(), 0 != D.sendPageView && w("send", "pageview", D.X)) : "screen_view" == W ? w("send", "screenview", D.X) : "timing_complete" == W ? (T("timingCategory", D.eventCategory, !0), T("timingVar", D.name, !0), T("timingValue", sa(D.value)), void 0 !== D.eventLabel && T("timingLabel", D.eventLabel, !0), w("send", "timing", D.X)) : "exception" == W ? w("send", "exception", D.X) : "optimize.callback" !=
                            W && (0 <= ma("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), W) && (w("require", "ec", "ec.js"), A()), T("eventCategory", D.eventCategory, !0), T("eventAction", D.eventAction || W, !0), void 0 !== D.eventLabel && T("eventLabel", D.eventLabel, !0), void 0 !== D.value && T("eventValue", sa(D.value)), w("send", "event", D.X));
                        a || (a = !0, Md(), G("https://www.google-analytics.com/analytics.js", function() {
                                Rd().loaded || r.vtp_gtmOnFailure()
                            },
                            r.vtp_gtmOnFailure))
                    } else z(r.vtp_gtmOnFailure)
                };
            V.__gtagua = q;
            V.__gtagua.g = "gtagua";
            V.__gtagua.h = !0;
            V.__gtagua.b = 0
        }();

    var kj = {};
    kj.macro = function(a) {
        if (Cf.ac.hasOwnProperty(a)) return Cf.ac[a]
    }, kj.onHtmlSuccess = Cf.ud(!0), kj.onHtmlFailure = Cf.ud(!1);
    kj.dataLayer = jd;
    kj.callback = function(a) {
        Ec.hasOwnProperty(a) && ia(Ec[a]) && Ec[a]();
        delete Ec[a]
    };
    kj.Ye = function() {
        wc[vc.m] = kj;
        za(Fc, V.a);
        Tb = Tb || Cf;
        Ub = yd
    };
    kj.Mf = function() {
        wc = f.google_tag_manager = f.google_tag_manager || {};
        if (wc[vc.m]) {
            var a = wc.zones;
            a && a.unregisterChild(vc.m)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Mb.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++) Pb.push(e[g]);
            for (var h = b.predicates || [],
                    k = 0; k < h.length; k++) Ob.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, t = 0; t < n.length; t++) p[n[t][0]] = Array.prototype.slice.call(n[t], 1);
                Nb.push(p)
            }
            Rb = V;
            Sb = Nh;
            kj.Ye();
            $e();
            Bd = !1;
            Cd = 0;
            if ("interactive" == u.readyState && !u.createEventObject || "complete" == u.readyState) Ed();
            else {
                Sa(u, "DOMContentLoaded", Ed);
                Sa(u, "readystatechange", Ed);
                if (u.createEventObject && u.documentElement.doScroll) {
                    var q = !0;
                    try {
                        q = !f.frameElement
                    } catch (y) {}
                    q && Fd()
                }
                Sa(f, "load", Ed)
            }
            Pe = !1;
            "complete" === u.readyState ? Re() :
                Sa(f, "load", Re);
            a: {
                if (!Zc) break a;f.setInterval($c, 864E5);
            }
            Bc = (new Date).getTime();
        }
    };
    (0, kj.Mf)();

})()