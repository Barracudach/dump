import * as o from "./cc.js";
import * as s from "./ws_protocol.mjs_cjs=&original=.js";
import * as e from "./Pb.js";

function main() {
    o._RF.push({}, "ac7efWTY21N6J3uTe5JFkZM", "ILobbyItem", void 0);
    class i extends e.pb.ClubGameSnapshot {
        constructor(...t) {
            super(...t), this.id = void 0
        }
    }
    t("CashLobbyItem", i);
    class n extends s.commonProto.MttTournamentInfo {
        constructor(...t) {
            super(...t), this.updatedAt = void 0, this.id = void 0, this.canUseMyTicket = void 0, this.isMyMTT = void 0, this.convertCurrency = void 0, this.cachedShorterMttName = void 0, this.hidePin = void 0
        }
    }
    t("MttLobbyItem", n);
    class c extends s.commonProto.SngTournament {
        constructor(...t) {
            var o;
            super(...t), this.id = null == (o = this.Detail) ? void 0 : o.Id
        }
    }
    t("SngLobbyItem", c), o._RF.pop()
}