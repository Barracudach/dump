import * as n from "./cc.js";
import * as e from "./cc.js";
import * as t from "./CrashTracing.js";
import * as c from "./CrashTracing.js";
import * as r from "./cv.js";
import * as s from "./Enum.js";
import * as i from "./DynamicPromoBaseComponent.js";

function main() {
    var a;
    n._RF.push({}, "c608dcYBNxD+6hu39IZdv90", "DynamicPromoPopup", void 0);
    const {
        ccclass: u
    } = e;
    o("default", u(a = class extends i {
        onLoad() {
            r.tools.triggerPopupShowEvent(s.Promotion)
        }
        onDisable() {
            r.tools.triggerPopupHideEvent(s.Promotion)
        }
        onPlayBtnClicked() {
            r.AudioMgr.playButtonSound("button_click.mp3"), this.processClose(), super.onClickPromo()
        }
        onCloseClicked() {
            r.AudioMgr.playButtonSound("close.mp3"), this.processClose()
        }
        onFailedClickPromo() {
            super.onFailedClickPromo(), t.Trace(c.DynamicPromotions, "promo_click_failed_banner", {
                redirectPath: this.redirectUrl,
                promo_name: this.node.name
            }, !1, !0)
        }
        processClose() {
            this.node.destroy()
        }
    }) || a);
    n._RF.pop()
}