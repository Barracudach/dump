import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./cc.js";
import * as i from "./JackpotSngSignUpPopUp.js";
import * as u from "./cv.js";

function main() {
    var r, c, l, p;
    a._RF.push({}, "04a49JPoQdL05u1wlhnsylx", "JackpotRighPanel", void 0);
    const {
        ccclass: h,
        property: d
    } = s;
    t("default", (r = d(o), h((p = n((l = class extends i {
        constructor(...t) {
            super(...t), this.takeInCount = void 0, this.jackpotSngGameListLandscape = void 0, e(this, "loadingBlocker", p, this)
        }
        onLoad() {
            super.onLoad(), this.numOfGameLabel.string = "1", u.MessageCenter.register("sng_show_buy_in_popup", this.onEventShowBuyIn.bind(this), this.node)
        }
        onDestroy() {
            super.onDestroy(), u.MessageCenter.unregister("sng_show_buy_in_popup", this.node)
        }
        onEventShowBuyIn(t) {
            this.onClickedPlayNow()
        }
        setGameListLandscape(t) {
            this.jackpotSngGameListLandscape = t
        }
        updateBuyInCount(t, n = 0) {}
        setTakeInCount(t) {
            this.takeInCount = t, this.updateBuyInLimit(t)
        }
        getData() {
            return this.data
        }
        setLoading(t) {
            this.loadingBlocker.active = t
        }
        onClickedPlayNow() {
            var t, n;
            u.dataHandler.getUserData().showTouristLimited() ? u.authenticator.autoShowBuyInSNG = this.data : null != (t = this.jackpotSngGameListLandscape) && t.isFullRoomsToJoin() || null == (n = this.jackpotSngGameListLandscape) || n.updateRightPanel(!0, (t => {
                var n, e;
                null != (n = this.jackpotSngGameListLandscape) && n.isFullRoomsToJoin() || t && (this.takeInCount > 0 ? null == (e = this.jackpotSngGameListLandscape) || e.showBackToGamePopUp(this.data, this.takeInCount, this.buyInCount) : this.showBuyInPopup())
            }))
        }
        showBuyInPopup() {
            var t;
            null == (t = this.jackpotSngGameListLandscape) || t.showSignUpPopUp(this.data, this.takeInCount, this.buyInCount)
        }
        setBuyInCount(t) {
            this.buyInCount = t, this.numOfGameLabel.string = t.toString();
            const n = t > 1;
            this.numOfGameMinusButton.interactable = n;
            const e = t < this.buyInLimit && t > 0;
            this.numOfGamePlusButton.interactable = e
        }
    }).prototype, "loadingBlocker", [r], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = l)) || c));
    a._RF.pop()
}