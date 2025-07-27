import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./MttHallDetailTablePlayerItem.js";
import * as p from "./MultipleGame.js";
import * as d from "./EventCustom.js";
import * as h from "./mttconfig.js";
import * as b from "./cv.js";
import * as m from "./LobbyTools.js";

function main() {
    var f, C, y, g, T, v, P, D, B;
    i._RF.push({}, "e7a76OUfDVDYoKBxi/IcCQX", "MttHallDetailTablePlayerComp", void 0);
    const {
        ccclass: I,
        property: L
    } = r;
    t("MttHallDetailTablePlayerComp", (f = I("MttHallDetailTablePlayerComp"), C = L(l), y = L(a), g = L(o), f((P = e((v = class extends s {
        constructor(...t) {
            super(...t), n(this, "itemPrefab", P, this), n(this, "itemContent", D, this), n(this, "enterTableButton", B, this), this._data = null
        }
        render(t) {
            this._data = t;
            const e = t.playerList;
            if (e.sort(((t, e) => e.coins - t.coins)), b.appConfig.isLandscapeLayout) {
                const n = 100;
                let i = 0;
                for (; i < n && e.length < this.itemContent.children.length;) this.itemContent.children[0].destroy(), i++;
                for (i = 0; i < e.length; i++) {
                    let n = null;
                    n = i < this.itemContent.children.length ? this.itemContent.children[i] : this.createItemNode(), n.getComponent(u).render(e[i], t.bigBlind)
                }
            } else {
                this.itemContent.removeAllChildren();
                for (const n of e) {
                    this.createItemNode().getComponent(u).render(n, t.bigBlind)
                }
            }
            this.showEnterTableButton(!p.instance || b.appConfig.isLandscapeLayout)
        }
        createItemNode() {
            const t = c(this.itemPrefab);
            return t.parent = this.itemContent, t
        }
        reset() {
            this.itemContent.removeAllChildren()
        }
        showEnterTableButton(t) {
            this.enterTableButton && (this.enterTableButton.node.active = t)
        }
        onClickEnterTable() {
            var t, e;
            let n = new d(h.mttPlayerTableEvent, !0);
            n.setUserData({
                tableId: null == (t = this._data) ? void 0 : t.tableId,
                playerId: null == (e = this._data) ? void 0 : e.playerId
            }), b.appConfig.isLandscapeLayout ? m.emitMessage(h.mttPlayerTableEvent, n) : this.node.dispatchEvent(n)
        }
    }).prototype, "itemPrefab", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(v.prototype, "itemContent", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(v.prototype, "enterTableButton", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = v)) || T));
    i._RF.pop()
}