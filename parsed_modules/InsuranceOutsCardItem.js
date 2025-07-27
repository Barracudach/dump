import * as n from "./cc.js";
import * as e from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as c from "./cv.js";
import * as o from "./Card.js";
import * as i from "./GameSceneInstance.js";

function main() {
    var r;
    e._RF.push({}, "4b0d089mxVKnZ/Ns7HTevyk", "InsuranceOutsCardItem", void 0);
    t("InsuranceOutsCardItemData", class {
        constructor() {
            this.index = 0, this.gameid = 0, this.outItem = null, this.isCheck = !1, this.clickEnable = !1, this.gameDataInstance = null
        }
    });
    const {
        ccclass: u,
        property: d
    } = a;
    t("InsuranceOutsCardItem", u(r = class extends s {
        constructor(...t) {
            super(...t), this.vCards = [], this._bCardClickEnable = !1
        }
        onLoad() {
            for (let t = 0; t < this.node.children.length; ++t) {
                let e = this.node.getChildByName(`card_${t}`);
                e && this.vCards.push(e.getComponent(o))
            }
        }
        start() {}
        _isAllowOutsSelected() {
            return !!i.getInstanceGameData(null == this ? void 0 : this.node).tRoomData.m_bChooseOuts || (c.TT.showMsg(c.config.getStringData("UICantChooseOuts"), c.Enum.ToastType.ToastTypeDefault), !1)
        }
        updateSVReuseData(t, e) {
            for (let t = 0; t < this.vCards.length; ++t) {
                let s = this.vCards[t];
                if (t < e.length) {
                    s.setActive(!0), s.tag = e[t].outItem.outs_id, s.setGameID(e[t].gameid), s.setContent(e[t].outItem.card.number, e[t].outItem.card.suit), s.setFace(!0), s.setFen(e[t].outItem.is_tie), s.setCheck(e[t].isCheck);
                    let a = s.rootNode.getComponent(n);
                    a && (a.enabled = e[t].clickEnable, a.interactable = e[t].clickEnable, a.node.hasEventListener("click") || (a.duration = .1, a.zoomScale = 1.1, a.transition = n.Transition.SCALE, a.node.on("click", (n => {
                        c.MessageCenter.send("click_insurance_outs_card_item", {
                            card: s,
                            data: e[t]
                        })
                    }), this)))
                } else s.setActive(!1)
            }
            this.node.active = !0
        }
    }) || r);
    e._RF.pop()
}