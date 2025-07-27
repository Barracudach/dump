import * as t from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as s from "./cc.js";
import * as i from "./MttGameItemPrizepoolValGradient.js";
import * as a from "./cv.js";

function main() {
    var r;
    t._RF.push({}, "2a475zkfxBB4a91/o+nXpXH", "MttGameListInformer", void 0);
    const {
        ccclass: c,
        property: h
    } = s;
    e("MttGameListInformer", c("MttGameListInformer")(r = class extends n {
        constructor(...e) {
            super(...e), this.onCloseCB = null, this._onChangeLang = !1
        }
        onLoad() {
            a.MessageCenter.register(a.config.CHANGE_LANGUAGE, this.onLanguageChange.bind(this), this)
        }
        onDestroy() {
            a.MessageCenter.unregister(a.config.CHANGE_LANGUAGE, this)
        }
        onLanguageChange() {
            this._onChangeLang = !0
        }
        setCloseCallback(e) {
            this.onCloseCB = e
        }
        onClickClose() {
            cc_mtt.vv.ConsoleLog.log("MttGameListInformer onClickClose"), this.onCloseCB && this.onCloseCB()
        }
        hide() {
            this.node.active = !1
        }
        show() {
            this.node.active = !0
        }
        onEnable() {
            this.node.getComponentInChildren(i);
            this._onChangeLang ? this.scheduleOnce((() => {
                o(this) && (this.reactiveGradient(), this._onChangeLang = !1)
            })) : this.reactiveGradient()
        }
        reactiveGradient() {
            if (!o(this) || !o(this.node)) return;
            const e = this.node.getComponentInChildren(i);
            o(e) && (e.enabled = !1, this.scheduleOnce((() => {
                o(e) && (e.enabled = !0)
            })))
        }
    }) || r);
    t._RF.pop()
}