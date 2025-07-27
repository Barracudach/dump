import * as e from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";

function main() {
    var a;
    e._RF.push({}, "aee1ap7nAJNbq67le3/d822", "RefreshFont", void 0);
    const {
        ccclass: i,
        property: r
    } = s;
    t("default", i(a = class extends n {
        constructor(...t) {
            super(...t), this.allLabel = [], this.originalFont = [], this.overrideLang = []
        }
        onLoad() {
            this.getAllLabel()
        }
        start() {}
        onEnable() {
            this.setFont()
        }
        getAllLabel() {
            this.originalFont = [], this.allLabel = [], this.allLabel = this.node.getComponentsInChildren(l), this.allLabel.forEach((t => {
                this.originalFont.push(t.font)
            }))
        }
        setFont() {
            this.allLabel.forEach(((t, e) => {
                null != t && t.node && this.overrideLang.includes(cc_mtt.vv.DataManager.lang) && (null === t.font || t.font instanceof o) && (t.font = null, t.isSystemFontUsed = !0)
            }))
        }
    }) || a);
    e._RF.pop()
}