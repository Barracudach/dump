import * as e from "./cc.js";
import * as o from "./MVCController.js";
import * as i from "./MVCModel.js";
import * as l from "./MttStructurePayoutPrizePoolView.js";
import * as a from "./MttItemHelper.js";
import * as r from "./Pb.js";
import * as n from "./MttBlindStructureControllerLandscape.js";
import * as s from "./HallMttPrizepoolControllerLandscape.js";
import * as u from "./MttHallDetailPayoutController.js";

function main() {
    e._RF.push({}, "283ecIJvDNKsL/CDnLXRJrp", "MttStructurePayoutPrizePoolController", void 0);
    class d extends i {
        constructor(...t) {
            super(...t), this.mttData = void 0, this.currentSelectedTab = void 0, this.showPayout = void 0, this.showPrizepool = void 0
        }
    }
    t("MttStructurePayoutPrizePoolModel", d);
    t("MttStructurePayoutPrizePoolController", class extends o {
        constructor(t) {
            super(l, d, t), this._mttBlindStructureController = void 0, this._prizepoolController = void 0, this._payoutController = void 0
        }
        onInitializeBegin(t) {}
        onInitializeEnded(t) {
            this._mttBlindStructureController = new n(this.view.getBlindStructureEngineView()), this._mttBlindStructureController.init(), this._prizepoolController = new s(this.view.getPrizePoolRendererNode()), this._prizepoolController.init(), this._payoutController = new u(this.view.getPayoutRenderNode()), this._payoutController.init()
        }
        setMttData(t) {
            this.model.mttData = t;
            let e = cc_mtt.vv.DataManager.getNow() < a.getStartingTimeFromDetail(this.model.mttData.detailData).getTime() ? 0 : this.model.mttData.detailData.CurrentLevel;
            this._mttBlindStructureController.updateInfo(this.model.mttData.data.blindConfig, e, this.model.mttData.detailData.LevelStopSignup, this.model.mttData.detailData.LevelTime, this.model.mttData.detailData.GameMode == r.commonProto.MTT_GAME_MODE.SHORT_DECK, this.model.mttData.detailData.BlindHands), this.model.showPrizepool = !a.isMultiFlightDay1(this.model.mttData.detailData), this.model.showPrizepool && this._prizepoolController.updateInfo(this.model.mttData.data.prizeMoney, this.model.mttData.data.prizeTools, this.model.mttData.detailData, this.model.mttData.tournamentData), this.model.showPayout = !a.isMultiFlightDay1(this.model.mttData.detailData), this.model.showPayout && this._payoutController.updateInfoByMttDetail(this.model.mttData.detailData), this.view.updateView(this.model)
        }
    }), e._RF.pop()
}