import * as t from "./cc.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as g from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as m from "./NativeEvent.js";

function main() {
    f._RF.push({}, "4a527LGTKNGJIZnE9b3o9iC", "NodeScreenshot", void 0);
    let S = e("NODE_SCREENSHOT_PROCESS_TYPE", function(e) {
        return e[e.SAVE_IMAGE = 0] = "SAVE_IMAGE", e[e.SHARE_IMAGE = 1] = "SHARE_IMAGE", e
    }({}));
    class _ {
        static capture(e) {
            return new Promise((l => {
                const d = _._worldBounds(e),
                    u = Math.ceil(d.width),
                    h = Math.ceil(d.height);
                if (u <= 0 || h <= 0) return l("");
                const g = new t;
                g.reset({
                    width: u,
                    height: h
                });
                const f = new n("CameraScreenshot"),
                    m = f.addComponent(r);
                m.targetTexture = g, m.projection = r.ProjectionType.ORTHO, m.orthoHeight = .5 * h, m.clearFlags = r.ClearFlag.SOLID_COLOR, m.clearColor = new o(0, 0, 0, 0), m.visibility = e.layer;
                const S = new a(d.center.x, d.center.y, e.worldPosition.z);
                f.setWorldPosition(S.x, S.y, S.z + 10), f.lookAt(S), e.scene.addChild(f), i.once(s.EVENT_AFTER_DRAW, (() => {
                    const e = g.readPixels();
                    if (m.enabled = !1, m.targetTexture = null, setTimeout((() => f.destroy()), 0), g.destroy(), !e) return l("");
                    const t = _._normalize(e, u, h);
                    if (!c.isNative) return l(_._pngWeb(t, u, h));
                    l(_._pngNative(t, u, h))
                }))
            }))
        }
        static captureWithType(e, u = S.SAVE_IMAGE, h = "", g = -1) {
            return new Promise((f => {
                const m = [];
                e.scene.getComponentsInChildren(l).forEach((e => {
                    var t;
                    const n = (null == (t = e.view) ? void 0 : t.getComponent(d)) ?? e.node.getComponent(d);
                    n && n.enabled && (n.enabled = !1, m.push(n))
                }));
                const w = _._worldBounds(e),
                    p = Math.ceil(w.width),
                    E = Math.ceil(w.height);
                if (p <= 0 || E <= 0) return f(null);
                const v = new t;
                v.reset({
                    width: p,
                    height: E
                });
                const A = new n("CameraScreenshot"),
                    y = A.addComponent(r);
                y.targetTexture = v, y.projection = r.ProjectionType.ORTHO, y.orthoHeight = .5 * Math.max(E, p), y.clearFlags = r.ClearFlag.SOLID_COLOR, y.clearColor = new o(0, 0, 0, 0), y.visibility = e.layer;
                const C = new a(w.center.x, w.center.y, e.worldPosition.z);
                A.setWorldPosition(C.x, C.y, C.z + 10), A.lookAt(C), e.scene.addChild(A), i.once(s.EVENT_AFTER_DRAW, (() => {
                    const e = v.readPixels();
                    if (y.enabled = !1, y.targetTexture = null, setTimeout((() => A.destroy()), 0), v.destroy(), !e) return f(null);
                    m.forEach((e => e.enabled = !0));
                    const t = _._normalize(e, p, E);
                    let n = t,
                        r = p,
                        o = E;
                    if (Math.max(p, E) > g && g > 0) {
                        const e = g / Math.max(p, E);
                        r = Math.ceil(p * e), o = Math.ceil(E * e), n = _._resizeImageData(t, p, E, r, o)
                    }
                    if (!c.isNative) return f(_._pngWeb(n, r, o));
                    let a = "";
                    switch (u) {
                        case S.SAVE_IMAGE:
                            a = _._processPixelAndSave(n, h, r, o);
                            break;
                        case S.SHARE_IMAGE:
                            a = _._processPixelAndShare(n, r, o)
                    }
                    f(a)
                }))
            }))
        }
        static _worldBounds(e) {
            var t;
            const n = e.getComponent(u);
            if (n) return n.getBoundingBoxToWorld();
            const r = e.getComponent("cc.Renderer"),
                o = null == r || null == (t = r.model) ? void 0 : t.worldBounds;
            if (o) {
                const e = o.center,
                    t = o.halfExtents;
                return new h(e.x - t.x, e.y - t.y, 2 * t.x, 2 * t.y)
            }
            return new h(e.worldPosition.x, e.worldPosition.y, 1, 1)
        }
        static _normalize(e, t, n) {
            const r = e.length / n,
                o = new Uint8Array(t * n * 4),
                a = 4 * t;
            for (let t = 0; t < n; ++t) o.set(e.subarray((n - 1 - t) * r, (n - 1 - t) * r + a), t * a);
            return o
        }
        static _pngWeb(e, t, n) {
            const r = document.createElement("canvas");
            return r.width = t, r.height = n, r.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(e.buffer), t, n), 0, 0), r.toDataURL("image/png")
        }
        static _processPixelAndShare(e, t, n) {
            const r = this._dumpRaw(e);
            return m.getInstance().encodeImageBufferAndShare(r, t, n)
        }
        static _dumpRaw(e) {
            const t = `${g.fileUtils.getWritablePath()}cap_${Date.now()}.rgba`;
            return g.fileUtils.writeDataToFile(e, t) ? t : ""
        }
        static _processPixelAndSave(e, t, n, r) {
            const o = this._dumpRaw(e);
            return m.getInstance().encodeImageBufferAndSave(o, n, r, t)
        }
        static _pngNative(e, t, n) {
            const r = _._toBase64(e);
            switch (c.os) {
                case c.OS.IOS:
                    return g.reflection.callStaticMethod("NativeEvent", "encodeBufferToBase64FromString:width:height:", r, t, n);
                case c.OS.OSX:
                    return g.reflection.callStaticMethod("NativeEvents", "encodeBufferToBase64FromString:width:height:", r, t, n);
                case c.OS.ANDROID:
                    return g.reflection.callStaticMethod("com/cocos/game/NativeEvent", "encodeBufferToBase64FromString", "(Ljava/lang/String;II)Ljava/lang/String;", r, t, n);
                case c.OS.WINDOWS:
                    return g.cppbridge.sendMessage("NativeEvents", "encodeBufferToBase64FromString", r, t, n);
                default:
                    return ""
            }
        }
        static _toBase64(e) {
            if ("undefined" != typeof Buffer) return Buffer.from(e).toString("base64");
            let t = "";
            for (let n = 0; n < e.length; n += 32768) t += String.fromCharCode(...e.subarray(n, n + 32768));
            return btoa(t)
        }
        static _resizeImageData(e, t, n, r, o) {
            const a = new Uint8Array(r * o * 4),
                i = t / r,
                s = n / o;
            for (let n = 0; n < o; n++)
                for (let o = 0; o < r; o++) {
                    const c = Math.floor(o * i),
                        l = 4 * (Math.floor(n * s) * t + c),
                        d = 4 * (n * r + o);
                    a[d] = e[l], a[d + 1] = e[l + 1], a[d + 2] = e[l + 2], a[d + 3] = e[l + 3]
                }
            return a
        }
    }
    e("default", _), f._RF.pop()
}