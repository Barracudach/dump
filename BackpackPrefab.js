import * as t from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cv.js";
import * as o from "./BagPrefab.js";

function main() {
    var i;
    t._RF.push({}, "ba686K3Q6RAvJ0Xitujqa+M", "BackpackPrefab", void 0);
    const {
        ccclass: s,
        property: c
    } = n;
    e("default", s(i = class extends o {
        onEnable() {
            super.onEnable(), this.headerContainer.active = !1, a.action.showAction(this.node, a.action.eMoveActionDir.EMAD_TO_LEFT, a.action.eMoveActionType.EMAT_FADE_IN), a.appConfig.isLandscapeLayout || (a.MessageCenter.register("hall_bottom_lobby_button", this.onBackClicked.bind(this, !0, !0), this.node), a.MessageCenter.register("hall_bottom_profile_button", this.onBackClicked.bind(this, !0, !1), this.node), a.MessageCenter.send("show_back_pack", this))
        }
        onDisable() {
            super.onDisable(), a.appConfig.isLandscapeLayout || a.MessageCenter.unregister("hall_bottom_profile_button", this.node)
        }
        onBackClicked(e = !0, t = !1) {
            if (super.onBackClicked(), e) {
                let n;
                t ? n = a.action.delay_type.INSTANT : (n = a.action.delay_type.NORMAL, e.target && "backBtn" == e.target._name && a.AudioMgr.playButtonSound("back_button.mp3")), a.action.showAction(this.node, a.action.eMoveActionDir.EMAD_TO_RIGHT, a.action.eMoveActionType.EMAT_FADE_OUT, n, (() => {}), (() => {
                    a.MessageCenter.unregister("hall_bottom_lobby_button", this.node), this.node.active = !1, this.node.parent.active = !1
                }))
            } else this.node.active = !1, this.node.parent.active = !1;
            a.MessageCenter.send("hide_back_pack", this)
        }
    }) || i);
    t._RF.pop()
}