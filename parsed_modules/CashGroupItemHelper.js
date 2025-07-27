import * as t from "./cc.js";
import * as a from "./LobbyHelper.js";
import * as n from "./LobbyTools.js";
import * as s from "./RuleDiscription.js";
import * as u from "./Enum.js";
import * as o from "./Enum.js";

function main() {
    t._RF.push({}, "43991E56rFDfqVI2G44KfHW", "CashGroupItemHelper", void 0);
    e("default", class {
        static getRenderData(e) {
            return {
                gameType: e.gameType,
                playerCount: e.playerCount,
                playerCountMax: e.playerCountMax,
                hasBombPot: e.hasBombPot,
                hasSquid: e.hasSquid,
                hasBigAnte: e.hasBigAnte,
                hasRedEnvelope: e.hasRedEnvelope,
                buyInLevel: a.getBuyInLevel(e.buyIn, e.currency),
                currency: e.currency,
                buyIn: e.buyIn,
                usdStake: e.usdStake,
                cnyStake: e.cnyStake,
                hasPace: e.hasPace
            }
        }
        static parseCashGroupItemData(e) {
            const t = e.name;
            let r = null,
                c = null,
                i = 0;
            null != e.usdStake && (r = {
                stakes: e.usdStake.stake,
                ante: e.usdStake.ante
            }, c = {
                stakes: e.cnyStake.stake,
                ante: e.cnyStake.ante
            }, i = e.usdStake.minBuyIn);
            let l = !1,
                m = !1,
                y = !1,
                p = [],
                d = 0,
                h = s.NLHE,
                _ = !1,
                g = !1;
            return e.items && e.items.length > 0 && (e.items.forEach((e => {
                1 == e.isCriticismField && (l = !0), e.game_id == u.Squid && (m = !0), e.room_name.startsWith(o) && (y = !0), e.red_envelope_switch && (_ = !0), d += e.player_count, p.includes(e.player_count_max) || p.push(e.player_count_max), a.getGameType(e.game_id, e.game_mode) == s.PACE && (g = !0)
            })), _ = _ && n.redEnvelopeEnabled, p.sort(((e, t) => e - t)), h = a.getGameType(e.items[0].game_id, e.items[0].game_mode)), {
                usdStake: r,
                cnyStake: c,
                hasBombPot: l,
                hasSquid: m,
                hasBigAnte: y,
                gameType: h,
                playerCountMax: p,
                playerCount: d,
                buyIn: i,
                groupName: t,
                hasRedEnvelope: _,
                hasPace: g
            }
        }
    }), t._RF.pop()
}