import * as t from "./cc.js";
import * as s from "./cv.js";

function main() {
    t._RF.push({}, "7f588KkpqBLm7XvoRWCROtd", "httpApiQueueRequests", void 0);
    class u {
        static getRequestInterval() {
            return s.appConfig.getLobbyConfig().httpApiQueueInterval || u.requestInterval
        }
        static processQueue(e) {
            if (u.processing.get(e)) return;
            u.processing.set(e, !0);
            setInterval((() => {
                (() => {
                    if (u.lastProcessedTime.has(e) && u.lastProcessedTime.get(e) + u.getRequestInterval() > Date.now()) return;
                    const t = u.requestQueues.get(e);
                    if (!t || 0 === t.length) return;
                    const s = t.shift();
                    s && (s(), u.lastProcessedTime.set(e, Date.now()))
                })()
            }), 50)
        }
        static queueRequest(e, t) {
            u.requestQueues.has(e) || u.requestQueues.set(e, []);
            const s = u.requestQueues.get(e);
            null == s || s.push(t), u.processQueue(e)
        }
        static requestHttpApi(e, ...t) {
            u.queueRequest(e, (() => {
                e(...t)
            }))
        }
    }
    e("HttpApiQueueRequests", u), u.requestQueues = new Map, u.lastProcessedTime = new Map, u.requestInterval = 350, u.processing = new Map, t._RF.pop()
}