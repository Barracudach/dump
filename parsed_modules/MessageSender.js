import * as t from "./cc.js";
import * as s from "./Helpers2.js";
import * as r from "./IFrameRegister.js";

function main() {
    t._RF.push({}, "0e1c2+TPF1FG7Zuh8GIlidq", "MessageSender", void 0);
    const a = {
        enableDispatchEarlyEventsOnRegister: !1
    };
    class i {
        static registerIframe(e) {
            r.registerIframe(e), this.Config[e.frameName] && this.dispatchEarlyEvents(e.frameName)
        }
        static deRegisterIframe(e) {
            r.deRegisterIframe(e), this.EarlyRegisteredEvents[e] && delete this.EarlyRegisteredEvents[e]
        }
        static send(e) {
            if (!e.appType) return;
            const t = r.getIframe(e.appType);
            if (t) {
                const {
                    origin: s,
                    frameRef: r
                } = t;
                r.postMessage(e, {
                    targetOrigin: s
                })
            } else console.debug(`Iframe ref not registered for given appType: ${e.appType}`), this.Config[e.appType].enableDispatchEarlyEventsOnRegister && (console.debug("Adding event message to EarlyRegisteredEvents"), this.addToEarlyEvents(e, e.appType))
        }
        static sendMessage(e) {
            if (e.targetApp === s.WebApp) window.parent.postMessage(e, r.getParentOrigin());
            else if (Array.isArray(e.targetApp)) e.targetApp.forEach((t => {
                this.sendMessage({
                    ...e,
                    targetApp: t
                })
            }));
            else {
                const t = r.getIframe(e.targetApp);
                t && t.frameRef.postMessage(JSON.stringify(e), {
                    targetOrigin: t.origin
                })
            }
        }
        static sendParent(e) {
            window.parent.postMessage(e, r.getParentOrigin())
        }
        static addToEarlyEvents(e, t) {
            var s;
            this.EarlyRegisteredEvents[t] ? null == (s = this.EarlyRegisteredEvents[t]) || null == s.push || s.push(e) : this.EarlyRegisteredEvents[t] = [e]
        }
        static dispatchEarlyEvents(e) {
            const t = this.EarlyRegisteredEvents[e];
            if (null != t && t.length)
                for (; t.length;) {
                    const e = t.shift();
                    e && this.send(e)
                }
        }
        static setConfig(e, t) {
            this.Config[t] = e
        }
    }
    e("default", i), i.EarlyRegisteredEvents = {}, i.Config = Object.values(s).reduce(((e, t) => (e[t] = a, e)), {}), t._RF.pop()
}