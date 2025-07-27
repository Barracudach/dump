import * as s from "./cc.js";
import * as t from "./MessageSender.js";

function main() {
    s._RF.push({}, "4dba1VIDgNOP5q8srjIoSn9", "MessageListener", void 0);
    e("CocosMessageListener", class {
        constructor() {
            this.messageHandler = void 0, this.isInitialized = !1
        }
        connectToWebApp(e, s) {
            this.messageHandler = e => {
                const t = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
                ("targetApp" in t || t.appType) && (null == s || s(t))
            }, window.addEventListener("message", this.messageHandler), this.isInitialized = !0
        }
        disconnectWebApp() {
            this.messageHandler && (window.removeEventListener("message", this.messageHandler), this.messageHandler = void 0), this.isInitialized = !1
        }
        sendMessage(e) {
            this.isInitialized && t.sendParent(e)
        }
    }), s._RF.pop()
}