import * as n from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as c from "./cc.js";
import * as a from "./lz-string.mjs_cjs=&original=.js";
import * as r from "./httpApis.js";
import * as l from "./mttconfig.js";

function main() {
    var s, i;
    e._RF.push({}, "26c247RFa1IYZf03BE8XZEa", "ConsoleLog", void 0);
    let u = console.debug,
        g = console.log,
        p = console.error,
        f = console.warn,
        h = console.trace,
        v = "",
        m = [];
    class y {
        constructor(t) {
            this.s = [], this.s = t
        }
    }
    t("TL", y);
    let S = function() {
            try {
                if (n.os == n.OS.WINDOWS || n.os == n.OS.OSX) {
                    let t = (new Error).stack.split("\n");
                    return t = t.slice(3), new y([t])
                }
            } catch (t) {}
            return ""
        },
        _ = function() {
            return cc && cc_mtt.vv && cc_mtt.vv.DataManager ? cc_mtt.vv.DataManager.getNow().getTime() + " " + cc_mtt.vv.DataManager.getNow().toLocaleString("zh-hk", {
                timeZone: "Asia/Taipei",
                hour12: !1
            }) : (new Date).toLocaleString("zh-hk", {
                timeZone: "Asia/Taipei",
                hour12: !1
            })
        },
        D = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
            return t
        },
        L = function(t) {
            return t && t.length > 2e3 ? l.compressToBase64(t) : t
        },
        d = function(t, e) {
            if (r.writeWebLog && O(t, e), r.blockConsoleLog) return;
            let n = [];
            for (let t = 0; t < e.length; t++)
                if ("string" == typeof e[t] || "number" == typeof e[t] || "boolean" == typeof e[t] || e[t] instanceof y) n.push(e[t]);
                else {
                    n.push(e[t]);
                    try {
                        n.push(JSON.stringify(e[t]))
                    } catch (t) {}
                } t.apply(console, n)
        },
        O = function(t, e) {
            e = e.map((t => {
                if ("string" == typeof t) return L(t);
                if (t instanceof y) return "";
                try {
                    return L(JSON.stringify(t))
                } catch (t) {}
            })), m.push(e.toString());
            m.length > 3e3 && m.splice(0, m.length - 3e3)
        };
    const {
        ccclass: w
    } = o;
    t("ConsoleLog", w(((i = class {
        static writeLogs() {
            (() => {
                try {
                    v && (n.os === n.OS.ANDROID ? c.reflection.callStaticMethod("com/cocos/game/AppActivity", "writeLogs", "(Ljava/lang/String;)V", v) : n.os === n.OS.IOS && c.reflection.callStaticMethod("AppController", "writeLogs:", v), v = "")
                } catch (t) {
                    console.error(t)
                }
            })()
        }
        static uploadWebLogs() {
            m && m.length > 0 && a.uploadWebLogs(m.join("\n"), (t => {
                let e = "Upload success: " + (cc_mtt.vv.DataManager.userData ? cc_mtt.vv.DataManager.userData.ForeignId ? cc_mtt.vv.DataManager.userData.ForeignId : cc_mtt.vv.DataManager.userId : "login") + " " + cc_mtt.vv.DataManager.getNow();
                t && (e = "Upload fail: " + t), cc_mtt.vv.AssetsManager.showDialogBox(" ", e, !1, [{
                    type: 0,
                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                    callback: null
                }])
            }), (() => {
                cc_mtt.vv.AssetsManager.showDialogBox("", "Upload fail: unexpect Timeout or error", !1, [{
                    type: 0,
                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                    callback: null
                }])
            }))
        }
    }).log = function(...t) {
        d(g, [`[${_()}]`, S()].concat(D.apply(null, t)))
    }, i.error = function(...t) {
        d(p, [`[${_()}]`, S()].concat(D.apply(null, t)))
    }, i.warn = function(...t) {
        d(f, [`[${_()}]`, S()].concat(D.apply(null, t)))
    }, i.trace = function(...t) {
        d(h, [`[${_()}]`].concat(D.apply(null, t)))
    }, i.debug = function(...t) {
        d(u, [`[${_()}]`, S()].concat(D.apply(null, t)))
    }, i.getTrace = function(...t) {
        return [`[${_()}]`, S()].concat(D.apply(null, t))
    }, s = i)) || s);
    e._RF.pop()
}