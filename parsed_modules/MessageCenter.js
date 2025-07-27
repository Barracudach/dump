import * as t from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./CrashTracing.js";

function main() {
    var o, u;
    t._RF.push({}, "3b40bHXLbBIfrYnIEni/4cn", "MessageCenter", void 0);
    class l {
        constructor() {
            this.callback = null, this.object = null
        }
    }
    const {
        ccclass: g,
        property: h
    } = s;
    e("MessageCenter", g(((u = class e extends r {
        constructor(...e) {
            super(...e), this._Que = null
        }
        static getInstance() {
            return e.g_instance || (e.g_instance = new e), e.g_instance
        }
        register(e, t, s, r = !0) {
            if (!s || !(s instanceof n) && "object" != typeof s) return void i("Please pass in the correct registered object");
            if (null === this._Que && (this._Que = {}), this._Que[e] || (this._Que[e] = []), this.isObjectHasRegister(e, s)) return void i("The object has already been registered for the message： " + e);
            let c = new l;
            c.callback = t, c.object = s, r ? this._Que[e].push(c) : this._Que[e].unshift(c)
        }
        isObjectHasRegister(e, t) {
            let s = this._Que[e];
            for (let e = s.length - 1; e >= 0; e--)
                if (s[e].object === t) return !0;
            return !1
        }
        unregister(e, t) {
            if (null === this._Que) return void console.log("_Que未初始化");
            if (!this._Que[e]) return void console.log("未注册该消息" + e);
            let s = this._Que[e];
            for (let e = s.length - 1; e >= 0; e--)
                if (s[e].object === t) {
                    s.splice(e, 1);
                    break
                }
        }
        send(e, t = null) {
            if (null === this._Que) return void c("_Que Uninitialized/Empty");
            if (!this._Que[e]) return void c("Message not registered: " + e);
            let s = this._Que[e],
                r = s.length;
            c("send ===> " + e + ", Number: " + r);
            for (let n = r - 1; n >= 0; n--) try {
                s[n].callback(t)
            } catch (t) {
                i("Error in callback for message: " + e, t);
                const s = t instanceof Error ? {
                    message: t.message,
                    stack: t.stack,
                    name: t.name
                } : {
                    error: String(t)
                };
                a.Trace("MessageCenter", e, s, !1, !0)
            }
        }
    }).g_instance = void 0, o = u)) || o);
    t._RF.pop()
}