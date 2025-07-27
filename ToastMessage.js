import * as n from "./cc.js";
import * as i from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cv.js";

function main() {
    var g;
    e._RF.push({}, "2e535A1J8hJzrgN9BqcwqN/", "ToastMessage", void 0);
    const {
        ccclass: r
    } = i;
    t("default", r(g = class extends s {
        constructor(...t) {
            super(...t), this.label = null, this.textKey = "", this.textArgs = null
        }
        onLoad() {
            this.label = this.getComponent(n), a.MessageCenter.register(a.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node)
        }
        onDestroy() {
            a.MessageCenter.unregister(a.config.CHANGE_LANGUAGE, this.node)
        }
        onChangeLanguage() {
            this.label && (this.label.string = this.getMessage())
        }
        setMessage(t, e) {
            return this.textKey = t, this.textArgs = e, this
        }
        getMessage() {
            var t;
            return this.textKey ? null != (t = this.textArgs) && t.length ? a.StringTools.formatC(a.config.getStringDataCasino(this.textKey), ...this.textArgs) : a.config.getStringDataCasino(this.textKey) : ""
        }
    }) || g);
    e._RF.pop()
}