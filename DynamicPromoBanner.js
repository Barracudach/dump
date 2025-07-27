import * as i from "./cc.js";
import * as o from "./cc.js";
import * as e from "./cc.js";
import * as t from "./CrashTracing.js";
import * as r from "./CrashTracing.js";
import * as s from "./cv.js";
import * as c from "./DynamicPromoBaseComponent.js";

function main() {
    var a;
    o._RF.push({}, "408a58di6BJCbs+7n2gnm5n", "DynamicPromoBanner", void 0);
    const {
        ccclass: d
    } = e;
    n("default", d(a = class extends c {
        constructor(...n) {
            super(...n), this._siblingIndex = 0
        }
        set rank(n) {
            this._siblingIndex = n
        }
        updatePositionUsingRank() {
            i(this.node) && this.node.setSiblingIndex(this._siblingIndex)
        }
        onBannerClicked() {
            s.AudioMgr.playButtonSound("button_click.mp3"), super.onClickPromo()
        }
        onFailedClickPromo() {
            super.onFailedClickPromo(), t.Trace(r.DynamicPromotions, "promo_click_failed_banner", {
                redirectPath: this.redirectUrl,
                promo_name: this.node.name
            }, !1, !0)
        }
    }) || a);
    o._RF.pop()
}