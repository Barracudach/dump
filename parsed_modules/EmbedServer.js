import * as n from "./cc.js";
import * as i from "./cc.js";
import * as t from "./cc.js";
import * as r from "./cv.js";

function main() {
    n._RF.push({}, "76b07dHbcFBOotE0DZ/2y0R", "EmbedServer", void 0);
    class s {
        constructor() {
            this.isRunning = !1
        }
        static getInstance() {
            return s.g_instance || (s.g_instance = new s), s.g_instance
        }
        isEnableEmbeddedServer() {
            return t.isNative && t.os == t.OS.IOS && r.appConfig.isEnableEmbedLogic
        }
        runEmbedGame(e, n, t = 3600) {
            if (this.isRunning) return console.log("embed server already run ... no need to run again"), !0;
            if (!this.isEnableEmbeddedServer()) return !1;
            let r = i.reflection.callStaticMethod("EmbedServer", "runGameWithPath:andPort:andCacheTime:", e, n, t);
            return this.isRunning = r, r
        }
        stopEmbedGame() {
            t.isNative && t.os == t.OS.IOS && r.appConfig.isEnableEmbedLogic && (i.reflection.callStaticMethod("EmbedServer", "stopWebServer:", ""), this.isRunning = !1)
        }
    }
    e("EmbedServer", s), s.g_instance = void 0, n._RF.pop()
}