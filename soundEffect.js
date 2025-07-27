import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./mttconfig.js";
import * as r from "./Pb.js";

function main() {
    o._RF.push({}, "1c314Qu7+xA/JMUDlyybEV5", "soundEffect", void 0);
    e("soundEffect", {
        BoardCardDelivered: "zh_CN/game/dzpoker/audio/allocateCardSound",
        PlayerSitDown: "zh_CN/game/dzpoker/audio/chairSitSound",
        PlayerStandUp: "zh_CN/game/dzpoker/audio/chairStandSound",
        Check: "zh_CN/game/dzpoker/audio/checkSound",
        ChipsToPot: "zh_CN/game/dzpoker/audio/chips_to_pot",
        ChipsToTable: "zh_CN/game/dzpoker/audio/chips_to_table",
        DealCard: "zh_CN/game/dzpoker/audio/dealcard",
        Fold: "zh_CN/game/dzpoker/audio/foldCardSound",
        PlayerEnter: "zh_CN/game/dzpoker/audio/playerInSound",
        PlayerExit: "zh_CN/game/dzpoker/audio/playerOutSound",
        PlayerTurn: "zh_CN/game/dzpoker/audio/pturn",
        SendAudio: "zh_CN/game/dzpoker/audio/sendAudio",
        GetProfit: "zh_CN/game/dzpoker/audio/specialSound",
        TimeOverTip: "zh_CN/game/dzpoker/audio/timeOverTipSound",
        SlideBarScroll: "zh_CN/game/dzpoker/audio/insure_click",
        Silent: "zh_CN/game/dzpoker/audio/silence",
        MTTFinalTableIntro: "zh_CN/game/mtt/audio/finalTableIntro",
        play: (e, o = !1) => {
            1 == d.getLocalStorageItem(d.key_enableSoundEffect, 1) && (cc_mtt.vv.DataManager.webPlatform == r.commonProto.PLATFORM.PKW && a.os == a.OS.IOS && (e += "?useDom=1"), cc_mtt.vv.AssetsManager.loadResSoundEffect(e, o))
        }
    });
    o._RF.pop()
}