import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./LobbyTools.js";
import * as h from "./MttBlindStructureItemComp.js";
import * as c from "./MttHallDetailExpandTab.js";

function main() {
    var d, p, b, f, v, L;
    n._RF.push({}, "6a843z8rtBOKI0ySC53fFCB", "MttBlindStructureComp", void 0);
    const {
        ccclass: m,
        property: S
    } = s;
    t("default", (d = S(l), p = S(o), m((v = e((f = class extends c {
        constructor(...t) {
            super(...t), this.mvcView = null, i(this, "tableTuplePrefab", v, this), i(this, "itemContentNode", L, this), this.blindPotList = [], this.tuples = [], this.levelStopSignUp = 0, this.currentLevel = 0, this.parentNode = null, this._isShortDesk = !1, this._blindHand = 0, this.levelDuration = 0, this.isAutoRefresh = !1, this._blindStructureItemList = {}
        }
        start() {}
        update(t) {}
        updateList() {
            if (this.itemContentNode.children.length > this.blindPotList.length) {
                let t = this.blindPotList.length;
                for (; t < this.itemContentNode.children.length;) {
                    let e = this.itemContentNode.children[t];
                    this.itemContentNode.removeChild(e), e.destroy()
                }
            }
            for (const t of this.blindPotList) {
                let e = this._blindStructureItemList[t.Level - 1];
                if (!r(e)) {
                    const i = a(this.tableTuplePrefab);
                    i.parent = this.itemContentNode, e = i.getComponent(h), this._blindStructureItemList[t.Level - 1] = e
                }
                const i = {
                    id: t.Level,
                    blindConfig: t,
                    isCurrentLevel: t.Level == this.currentLevel,
                    isStopSignUpLevel: t.Level == this.levelStopSignUp,
                    blindHand: this._blindHand,
                    levelDuration: this.levelDuration,
                    timeBank: t.TimeBank,
                    isShortDeck: this._isShortDesk
                };
                e.setInfo(i)
            }
        }
        setInfo(t) {
            this.blindPotList = t.blindPots, this.levelStopSignUp = t.levelStopSignUp, this.currentLevel = t.currentLevel, this.levelDuration = t.levelDuration, this._isShortDesk = t.isShortDesk, this._blindHand = t.blindHand, this.updateList()
        }
        onClickButtonBack() {
            var t;
            u.playSoundBack(), null == (t = this.mvcView) || null == t.onClickButtonBack || t.onClickButtonBack()
        }
        onLanguageChange() {
            this.itemContentNode.children.forEach((t => {
                t.getComponent(h).onLanguageChange()
            }))
        }
    }).prototype, "tableTuplePrefab", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(f.prototype, "itemContentNode", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = f)) || b));
    n._RF.pop()
}