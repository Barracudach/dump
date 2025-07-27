import * as e from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as s from "./DataManager.js";
import * as o from "./LoadingBlocker.js";

function main() {
    var r, l;
    c._RF.push({}, "cb6cePS0UlIprrP7xwvMyXe", "AndroidBackButton", void 0);
    const {
        ccclass: u
    } = a;
    class k {
        constructor(t, ...c) {
            this.backFunction = null, this.backParameter = null, this.backFunction = t, this.backParameter = [...c]
        }
    }
    let d = t("AndroidBackButton", u(((l = class t {
        static getInstance() {
            return t.g_instance || (t.g_instance = new t), t.g_instance
        }
        constructor() {
            this.backButton = new Map, this.callOrder = [], this.resetBackFunction()
        }
        resetBackFunction() {
            this.backButton.clear(), this.callOrder = []
        }
        addBackFunction(t, c, ...n) {
            this.backButton.has(t) || (this.backButton.set(t, new k(c, ...n)), this.callOrder.push(t))
        }
        removeBackFunction(t) {
            this.backButton.has(t) && (this.backButton.delete(t), this.callOrder = this.callOrder.filter((c => c !== t)))
        }
        onBackClick() {
            var c = t.getInstance();
            try {
                if ("update" !== e.getScene().name && !o.instance.loadingAnimation.enabled && 0 === s.popUps.length && c.callOrder.length > 0) {
                    let t = c.backButton.get(c.callOrder.pop());
                    t.backFunction(...t.backParameter)
                } else i.reflection.callStaticMethod("com/cocos/game/AppActivity", "onBackClick", "()V")
            } catch (t) {
                cc_mtt.vv.ConsoleLog.log(t.stack.split("\n"))
            }
        }
    }).g_instance = null, r = l)) || r);
    n.isNative && n.os === n.OS.ANDROID && (window.onBackClick = d.getInstance().onBackClick), c._RF.pop()
}