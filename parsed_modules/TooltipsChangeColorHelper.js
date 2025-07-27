import * as o from "./cc.js";
import * as e from "./ColorSystemType.js";
import * as l from "./ColorSystemTypeOther.js";
import * as a from "./ThemeSystem.js";
import * as n from "./LobbyV2ColorMap.js";

function main() {
    var i;
    o._RF.push({}, "3bdbcnE65NFuY91cGIhduIh", "TooltipsChangeColorHelper", void 0);
    let p = t("TooltipsChangeColorIndentifier", function(t) {
        return t[t.Default = 0] = "Default", t[t.Help = 1] = "Help", t[t.MttDetailInfo = 2] = "MttDetailInfo", t[t.NewReplayerInfo = 3] = "NewReplayerInfo", t
    }({}));
    class r {
        static applySkinColorMap(t, o) {
            r.applyColorLstMtt(t, r.skinColorMap, o)
        }
        static getSkinColorMap() {
            let t = new n;
            const o = [l.LobbyV2DefaultTooltipBG, l.LobbyV2DefaultTooltipBG, l.LobbyV2DefaultTooltipText, l.LobbyV2DefaultTooltipText],
                e = [l.HandRankingToolTipBg, l.HandRankingToolTipBg, l.HandRankingTextColor, l.HandRankingTextColor],
                a = [l.LobbyV2MttDetailInfoTooltipBG, l.LobbyV2MttDetailInfoTooltipBG, l.LobbyV2MttDetailInfoTooltipText, l.LobbyV2MttDetailInfoTooltipText],
                i = [l.LobbyV2ReplayerTooltipBG, l.LobbyV2ReplayerTooltipBG, l.LobbyV2ReplayerTooltipText, l.LobbyV2ReplayerTooltipText];
            return t.data.set(p.Default, o), t.data.set(p.Help, e), t.data.set(p.MttDetailInfo, a), t.data.set(p.NewReplayerInfo, i), t
        }
        static applyColorLstMtt(t, o, l) {
            if (o && o.data && o.data.has(t)) {
                const n = o.data.get(t);
                if (!n || n.length < l.length) return;
                for (let t = 0, o = 0; t < l.length && o < n.length; t++) {
                    const i = l[t];
                    i instanceof a && (i.setColorScheme(e.Other, n[o]), i.applyTheme()), o++
                }
            }
        }
    }
    t("TooltipsChangeColorHelper", r), i = r, r.skinColorMap = i.getSkinColorMap(), o._RF.pop()
}