import * as e from "./cc.js";
import * as i from "./MVCController.js";
import * as l from "./MttHallDetailPayoutView.js";
import * as a from "./MttHallDetailPayoutModel.js";
import * as o from "./MttItemHelper.js";

function main() {
    e._RF.push({}, "db077CZ9TxCIIblcgSUJ7K7", "MttHallDetailPayoutController", void 0);
    t("MttHallDetailPayoutController", class extends i {
        constructor(t) {
            super(l, a, t)
        }
        registerPageShowCallback(t) {
            this.view.registerOnShowCallback(t)
        }
        registerPageHideCallback(t) {
            this.view.registerOnHideCallback(t)
        }
        updateInfo(t) {
            const e = t.detailData,
                i = new a;
            i.entries = e.MultiFlightLevel > 0 ? e.MFJoinedCount : t.data.playOnJoin, i.prizeCircle = Math.min(e.InTheMoney, i.entries), i.payoutList = t.data.payouts, this.view.updateView(i)
        }
        updateInfoByMttDetail(t) {
            this.model.entries = t.MultiFlightLevel > 0 ? t.MFJoinedCount : o.getPlayOnJoinDetail(t, o.getStartingTimeFromDetail(t)), this.model.prizeCircle = Math.min(t.InTheMoney, this.model.entries), this.model.payoutList = o.getPayoutList(t), this.view.updateView(this.model)
        }
        show() {
            this.view.show()
        }
        hide() {
            this.view.hide()
        }
        hideImmediate() {
            this.view.hideImmediately()
        }
        isShowing() {
            return !!this.view.isShowing()
        }
        showPanel(t) {
            const e = this.view.getNode();
            e && (e.active = t)
        }
    }), e._RF.pop()
}