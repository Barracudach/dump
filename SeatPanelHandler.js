import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./i18nText.js";
import * as s from "./GameSceneInstance.js";
import * as u from "./StarPrivateInfo.js";
import * as f from "./cv.js";

function main() {
    var g, b, c, h, p, m, d, _, y, w, S, D, v, T, P, I, C, z, R, B, H, k, L, x, F, G, M, E, W, j, q, K, U, V, A, Z, J, N;
    i._RF.push({}, "d3949+3Cz1Gvo6roxe4jZlb", "SeatPanelHandler", void 0);
    const {
        ccclass: O,
        property: Q
    } = a;
    t("default", (g = Q(n), b = Q(n), c = Q(n), h = Q(n), p = Q(n), m = Q(n), d = Q(n), _ = Q(n), y = Q(n), w = Q(n), S = Q(n), D = Q(n), v = Q(n), T = Q(n), P = Q(l), I = Q(n), C = Q(n), z = s("GameDataInstance"), O((H = e((B = class extends o {
        constructor(...t) {
            super(...t), r(this, "totalHand", H, this), r(this, "levelHand", k, this), r(this, "vpip", L, this), r(this, "winRate", x, this), r(this, "af", F, this), r(this, "vpip_pfr", G, this), r(this, "etf", M, this), r(this, "wsf", E, this), r(this, "wtsd", W, this), r(this, "wsd", j, this), r(this, "threeBet", q, this), r(this, "cBet", K, this), r(this, "averageBuyIn", U, this), r(this, "averageResult", V, this), r(this, "bbPer100Label", A, this), r(this, "bbPer100", Z, this), r(this, "resultPer100", J, this), r(this, "gameDataInstance", N, this)
        }
        start() {
            f.MessageCenter.register("update_userPokerData", this.updatePokerData.bind(this), this.node), this.gameDataInstance.tRoomData.pkRoomParam.game_mode == f.Enum.CreateGameMode.CreateGame_Mode_Short ? this.bbPer100Label.setKey("roleInfo_root_selfInfo_panel_info_title_text_3_shot", !0) : this.bbPer100Label.setKey("roleInfo_root_selfInfo_panel_info_title_text_3", !0)
        }
        onDestroy() {
            f.MessageCenter.unregister("update_userPokerData", this.node)
        }
        onEnable() {
            this.requestData()
        }
        requestData() {
            for (let t = 0; t < this.gameDataInstance.tRoomData.kTablePlayerList.length; t++) {
                let e = this.gameDataInstance.tRoomData.kTablePlayerList[t];
                if (e.seatid == this.gameDataInstance.tRoomData.i32SelfSeat) {
                    f.httpHandler.requestInGameUserData(this.gameDataInstance, e.identity);
                    break
                }
            }
        }
        updatePokerData(t) {
            if (t.gameDataInstance !== this.gameDataInstance) return;
            const e = f.dataHandler.getUserData().pokerdata;
            this.totalHand.string = f.StringTools.formatC("%d", e.Total_hand_card_count), this.levelHand.string = f.StringTools.formatC("%d", e.level_hands), this.vpip.string = f.StringTools.formatC("%d", e.Enter_rate) + "%", this.winRate.string = f.StringTools.formatC("%d", e.Win_rate) + "%", this.af.string = f.StringTools.formatC("%0.1f", e.Af_rate / 100);
            let r = f.StringTools.formatC("%d", e.Pfr_rate) + "%";
            this.vpip_pfr.string = f.StringTools.formatC("%d", e.Vpip_rate) + "%/" + r, this.etf.string = f.StringTools.formatC("%d", e.Etf_rate) + "%", this.wsf.string = f.StringTools.formatC("%d", e.Wsf_rate) + "%", this.wtsd.string = f.StringTools.formatC("%d", e.Wtsd_rate) + "%", this.wsd.string = f.StringTools.formatC("%d", e.Wsd_rate) + "%", this.threeBet.string = f.StringTools.formatC("%d", e.Rate_3bet) + "%", this.cBet.string = f.StringTools.formatC("%d", e.Cbet_rate) + "%", this.averageBuyIn.string = f.StringTools.numToFloatString(e.Buyin_average), this.averageResult.string = f.StringTools.numToFloatString(e.Fight_average);
            let i = u.getBbValue(this.gameDataInstance);
            this.bbPer100.string = 0 != i ? f.StringTools.formatC("%f", i) : "0", this.resultPer100.string = f.StringTools.numToFloatString(e.Fight_100)
        }
    }).prototype, "totalHand", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(B.prototype, "levelHand", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(B.prototype, "vpip", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(B.prototype, "winRate", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(B.prototype, "af", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(B.prototype, "vpip_pfr", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(B.prototype, "etf", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(B.prototype, "wsf", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(B.prototype, "wtsd", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(B.prototype, "wsd", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(B.prototype, "threeBet", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(B.prototype, "cBet", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(B.prototype, "averageBuyIn", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(B.prototype, "averageResult", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(B.prototype, "bbPer100Label", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(B.prototype, "bbPer100", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(B.prototype, "resultPer100", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(B.prototype, "gameDataInstance", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = B)) || R));
    i._RF.pop()
}