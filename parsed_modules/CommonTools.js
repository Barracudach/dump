import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as t from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as i from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as x from "./cv.js";

function main() {
    var S, b;
    t._RF.push({}, "60ec17APzpJwoBa5OxHrxHE", "CommonTools", void 0);
    const {
        ccclass: A,
        property: R
    } = n;
    e("default", A(((b = class e {
        static get instance() {
            return e._instance || (e._instance = new e), e._instance
        }
        convertToWorldSpace(e, t) {
            let n = e.getComponent(o).convertToWorldSpaceAR(new r(t.x, t.y)),
                a = e.getComponent(o).contentSize,
                l = e.getComponent(o).anchorPoint;
            return new i(n.x - l.x * a.width * e.scale.x, n.y - l.y * a.height * e.scale.y)
        }
        convertToNodeSpace(e, t) {
            let n = e.getComponent(o).convertToNodeSpaceAR(new r(t.x, t.y)),
                a = e.getComponent(o).contentSize,
                l = e.getComponent(o).anchorPoint;
            return new i(n.x + l.x * a.width * e.scale.x, n.y + l.y * a.height * e.scale.y)
        }
        rotationToAngle(e) {
            return -e
        }
        intFromBytes(e) {
            for (var t = 0, n = 0; n < e.length; ++n) t += e[n], n < e.length - 1 && (t <<= 8);
            return t
        }
        bytesFromInt(e, t) {
            const n = new Uint8Array(t);
            var o = t;
            do {
                n[--o] = 255 & e, e >>= 8
            } while (o);
            return n
        }
        compareVersion(e, t) {
            for (var n = e.split("."), o = t.split("."), r = 0; r < n.length; ++r) {
                var i = 0,
                    a = 0;
                try {
                    i = parseInt(n[r]), a = parseInt(o[r])
                } catch (e) {
                    console.error(e)
                }
                if (i !== a) {
                    return i - a
                }
            }
            return o.length > n.length ? -1 : 0
        }
        compareBigVersion(e, t) {
            for (var n = e.split("."), o = t.split("."), r = 0; r < n.length - 1; ++r) {
                var i = 0,
                    a = 0;
                try {
                    i = parseInt(n[r]), a = parseInt(o[r])
                } catch (e) {
                    console.error(e)
                }
                if (i !== a) {
                    return i - a
                }
            }
            return o.length > n.length ? -1 : 0
        }
        updateRenderData(e, t = !1) {
            e.updateRenderData(t)
        }
        updateAlignment(e, t = !0) {
            e && a(e, !0) && (e.enabled = !0, e.updateAlignment(), t && e.alignMode != l.AlignMode.ALWAYS && (e.enabled = !1))
        }
        updateAlignments(e, t = !1, n = !0) {
            if (!a(e)) return;
            let o = e.getComponent(l);
            if (this.updateAlignment(o, n), t) {
                let t = e.getComponentsInChildren(l);
                for (let e = 0; e < t.length; e++) o = t[e], this.updateAlignment(o, n)
            }
        }
        updateLayout(e, t = !1) {
            e && a(e, !0) && e.updateLayout(t)
        }
        updateLayouts(e, t = !1, n = !1) {
            if (!a(e)) return;
            if (t) {
                let t = e.getComponentsInChildren(s).reverse();
                for (let e = 0; e < t.length; e++) this.updateLayout(t[e], n)
            }
            let o = e.getComponent(s);
            o && a(o, !0) && this.updateLayout(o, n)
        }
        splitDateTime(e) {
            return {
                year: e.getFullYear(),
                month: e.getMonth() + 1,
                date: e.getDate(),
                hour: e.getHours(),
                min: e.getMinutes(),
                sec: e.getSeconds()
            }
        }
        splitSecond(e, t = {
            hasDay: !0,
            hasHour: !0
        }) {
            const {
                hasDay: n,
                hasHour: o
            } = t;
            let r, i, a, l;
            return l = Math.floor(e / 3600 / 24), a = Math.floor(e / 3600) % 24, i = Math.floor(e / 60) % 60, r = e % 60, n || (a += 24 * l, l = 0), o || (i += 60 * a, a = 0), {
                day: l,
                hour: a,
                min: i,
                sec: r
            }
        }
        getParentScene(e, t) {
            return x.appConfig.getGeneralConfig().multiWindowEnabled && t ? t.scene : e.getScene()
        }
        getWinSize(t) {
            let n = new c(0, 0);
            if (x.appConfig.getGeneralConfig().multiWindowEnabled) {
                var o;
                let r = null == (o = e.instance.getParentScene(g, t)) ? void 0 : o.visibleRect;
                r ? (n.width = r.width, n.height = r.height) : u(`get winSize multiWindow null check stack : ${(new Error).stack}`)
            } else n = t.scene.visibleRect ? new c(t.scene.visibleRect.width, t.scene.visibleRect.height) : d.getVisibleSize();
            return n
        }
        changeParentKeepPos(e, t) {
            if (a(e, !0) && a(e.parent, !0) && a(t, !0) && e.parent != t) {
                var n = function(e) {
                        for (var t = e, n = t.angle; null != t.parent;) n += (t = t.parent).angle;
                        return n %= 360
                    },
                    i = n(e) - n(t),
                    l = e.getComponent(o).convertToWorldSpaceAR(new r(r.ZERO)),
                    s = t.getComponent(o).convertToNodeSpaceAR(l);
                e.parent = t, e.setPosition(s), e.angle = i
            }
        }
        ellipseText(t, n, r, i = 0) {
            t.string = n, e.instance.updateRenderData(t, !0);
            const a = t.node.getComponent(o).width;
            if (!(a > r && (i <= 0 || a > i))) return n;
            let l = 0,
                s = n.length,
                c = "";
            for (; l <= s;) {
                const i = Math.floor((l + s) / 2),
                    a = n.substring(0, i) + "...";
                t.string = a, e.instance.updateRenderData(t, !0);
                t.node.getComponent(o).width <= r ? (c = a, l = i + 1) : s = i - 1
            }
            return "" === c && (c = "..."), t.string = c, c
        }
        getComponentFromNodeStructure(e, t, ...n) {
            let o = null,
                r = null;
            if (e || (o = "Invalid node"), !o) {
                let i = e;
                for (let e = 0; e < n.length; e++) {
                    const a = n[e];
                    if (i = i.getChildByName(a), !i) {
                        o = "Invalid path:" + a;
                        break
                    }
                    e == n.length - 1 && (r = i.getComponent(t), r || (o = "Component not found"))
                }
            }
            return o && o("getComponentFromNodeStructure error", o), r
        }
        isUrlExecutable(e) {
            var t, n;
            let o = e;
            return e && "object" == typeof e && (o = null == e ? void 0 : e.url), "string" == typeof o && ((null == (t = o) ? void 0 : t.indexOf(".js")) >= 0 || (null == (n = o) ? void 0 : n.indexOf(".ts")) >= 0)
        }
        setActive(e, t) {
            if (a(e))
                if (t) e.active = !0;
                else {
                    const t = e.getComponents(h);
                    for (let n = 0; n < t.length; n++) {
                        const o = t[n];
                        a(o) && o.enabled && !a(o.node) && (cc_mtt.vv.ConsoleLog.log("setActive component invalid", e.name, null == o ? void 0 : o.name), o.node = e)
                    }
                    e.active = !1
                }
            else cc_mtt.vv.ConsoleLog.log("setActive invalid node")
        }
        static parseURL(e) {
            const t = {
                    protocol: null,
                    hostname: null,
                    query: {}
                },
                n = e.indexOf("://"); - 1 !== n && (t.protocol = e.substring(0, n + 1), e = e.substring(n + 3));
            const o = e.indexOf("?");
            return -1 !== o ? (t.hostname = e.substring(0, o), e = e.substring(o + 1), t.query = e.split("&").reduce(((e, t) => {
                const [n, o] = t.split("=");
                return e[n] = decodeURIComponent(o || ""), e
            }), {})) : t.hostname = e, t
        }
        static takescreenshot({
            x: t,
            y: n,
            w: o,
            h: r,
            rt: i = !0
        } = {}, a) {
            return new Promise((async function(l) {
                try {
                    const l = g.getScene().getComponentInChildren(p).getComponentInChildren(m),
                        x = d.getVisibleSize(),
                        S = f(Math.ceil(o || x.width), Math.ceil(r || x.height)),
                        b = new v;
                    b.reset({
                        width: x.width,
                        height: x.height
                    }), l.targetTexture = b;
                    const {
                        width: A,
                        height: R
                    } = S;
                    await new Promise((function(e) {
                        g.once(w.EVENT_AFTER_DRAW, e)
                    }));
                    var s = b.readPixels(t || 0, n || 0, A, R),
                        c = s;
                    if (i) {
                        c = new Uint8Array(A * R * 4);
                        for (var u = R - 1; u >= 0; u--)
                            for (var h = 0; h < A; h++) c[4 * ((R - 1 - u) * A + h) + 0] = s[4 * (u * A + h) + 0], c[4 * ((R - 1 - u) * A + h) + 1] = s[4 * (u * A + h) + 1], c[4 * ((R - 1 - u) * A + h) + 2] = s[4 * (u * A + h) + 2], c[4 * ((R - 1 - u) * A + h) + 3] = s[4 * (u * A + h) + 3]
                    }
                    if (y.isNative) {
                        let e = (C.fileUtils ? C.fileUtils.getWritablePath() : "/") + "screenshot.png";
                        C.fileUtils.isFileExist(e) && C.fileUtils.removeFile(e), await C.saveImageData(c, S.width, S.height, e), a && a(e)
                    } else {
                        let t = e.toB64(c);
                        a && a(t)
                    }
                    l.targetTexture = null
                } catch (e) {
                    a && a("")
                }
            }))
        }
        static v2tov3(e) {
            return new r(e.x, e.y, 0)
        }
        static v3tov2(e) {
            return new i(e.x, e.y)
        }
        static toB64(e) {
            let t = document.createElement("canvas"),
                n = d.getVisibleSize(),
                o = t.width = Math.floor(n.width),
                r = t.height = Math.floor(n.height),
                i = t.getContext("2d"),
                a = new Uint8Array(e),
                l = 4 * o,
                s = 4 * r;
            for (let e = 0; e < s; e++) {
                let t = r - 1 - e,
                    n = i.createImageData(o, 1),
                    s = t * l;
                for (let e = 0; e < l; e++) n.data[e] = a[s + e];
                i.putImageData(n, 0, e)
            }
            return t.toDataURL("image/jpeg", .7)
        }
    })._instance = null, S = b)) || S);
    t._RF.pop()
}