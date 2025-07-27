import * as t from "./cc.js";
import * as _ from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as s from "./mttconfig.js";
import * as i from "./CommonTools.js";
import * as r from "./CrashTracing.js";
import * as d from "./TimeElapse.js";

function main() {
    t._RF.push({}, "5bad2FiIp1OY6ILurQ1cL5O", "ResourcesLoader", void 0);
    class n {
        constructor(e) {
            this.resourcePath = void 0, this.loadedTimes = void 0, this.resourcePath = e, this.loadedTimes = 1
        }
    }
    class c {
        constructor() {
            this.loadedResourceList = new Map, this.loadWaitingCount = 0, this.neccessaryPrefabPath = []
        }
        static get instance() {
            return c._instance || (c._instance = new c), c._instance
        }
        initNeccessaryPrefabPath() {}
        updateResPath() {
            if (cc_mtt.vv && cc_mtt.vv.DataManager) {
                let e = cc_mtt.vv.DataManager.lang;
                "tc" == e ? e = "sc" : "en" != e && "sc" != e && "hi" != e && "th" != e && "vn" != e && (e = "en"), c.RES_PATH.SPRITE.HOLDEM.BUBBLE_OVERTIME = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_overtime_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_FOLD = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_fold_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_ALL_IN = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_allin_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_CALL = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_call_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_BET = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_bet_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_RAISE = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_raise_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_WATCH = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_watch_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_OVERTIME_LEFT = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_overtime_left_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_FOLD_LEFT = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_fold_left_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_ALL_IN_LEFT = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_allin_left_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_CALL_LEFT = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_call_left_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_BET_LEFT = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_bet_left_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_RAISE_LEFT = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_raise_left_" + e, c.RES_PATH.SPRITE.HOLDEM.BUBBLE_WATCH_LEFT = "mtt/holdem/bitmap_font/" + e + "/tag/bubble_watch_left_" + e, c.RES_PATH.SPRITE.HOLDEM.MODE_HUNTERGAME = "mtt/common/game_mode/" + e + "/mode_huntergame_" + e, c.RES_PATH.SPRITE.HOLDEM.MODE_OMAHA = "mtt/common/game_mode/" + e + "/mode_omaha_" + e, c.RES_PATH.SPRITE.HOLDEM.MODE_SHORTCARD = "mtt/common/game_mode/" + e + "/mode_shortcard_" + e, "sc" == e ? (c.RES_PATH.SPRITE.HOLDEM.FONT_CALL = "mtt/holdem/bitmap_font/" + e + "/font_call_" + e, c.RES_PATH.SPRITE.HOLDEM.FONT_CHECK = "mtt/holdem/bitmap_font/" + e + "/font_check_" + e) : (c.RES_PATH.SPRITE.HOLDEM.FONT_CALL = "mtt/holdem/bitmap_font/" + e + "/pkw_ingame/font_call_" + e, c.RES_PATH.SPRITE.HOLDEM.FONT_CHECK = "mtt/holdem/bitmap_font/" + e + "/pkw_ingame/font_check_" + e)
            }
        }
        loadWebImage(e, t, a = 4) {
            i.instance.isUrlExecutable(e) ? cc_mtt.vv.ConsoleLog.log("ResourceLoader loadWebImage block js ts", e) : (this.loadWaitingCount++, _.loadRemote(e, {
                maxRetryCount: a
            }, ((_, a) => {
                if (_ || !a) return void console.error("load remote Error " + e);
                console.log("load remote success " + e), this.loadWaitingCount--;
                let m = new o;
                m.image = a, t(_, m)
            })))
        }
        loadRes(e, t = null, _ = null, l = null, s = !0) {
            t != o || e.includes("/texture") ? t != a || e.includes("/spriteFrame") || (e += "/spriteFrame") : e += "/texture", i.instance.isUrlExecutable(e) ? cc_mtt.vv.ConsoleLog.log("ResourceLoader loadRes block js ts", e) : (this.loadWaitingCount++, !e || t || _ || l ? e && t && !_ && !l ? m.load(e, t, ((o, a) => {
                this.loadWaitingCount--, o ? this.loadResError(e, o, t, _, l, s) : this.setAutoReleaseRecursively(e, a)
            })) : e && !t && !_ && l ? m.load(e, ((o, a) => {
                this.loadWaitingCount--, o ? this.loadResError(e, o, t, _, l, s) : (this.setAutoReleaseRecursively(e, a), l(o, a))
            })) : e && !t && _ && l ? m.load(e, _, ((o, a) => {
                this.loadWaitingCount--, o ? this.loadResError(e, o, t, _, l, s) : (this.setAutoReleaseRecursively(e, a), l(o, a))
            })) : e && t && !_ && l ? m.load(e, t, ((o, a) => {
                this.loadWaitingCount--, o ? this.loadResError(e, o, t, _, l, s) : (this.setAutoReleaseRecursively(e, a), l(o, a))
            })) : e && t && _ && l ? m.load(e, t, _, ((o, a) => {
                o ? this.loadResError(e, o, t, _, l, s) : (this.setAutoReleaseRecursively(e, a), l(o, a))
            })) : this.loadWaitingCount-- : m.load(e, ((o, a) => {
                this.loadWaitingCount--, o ? this.loadResError(e, o, t, _, l, s) : this.setAutoReleaseRecursively(e, a)
            })))
        }
        setAutoReleaseRecursively(e, t) {}
        loadResError(e, t, _ = null, o = null, a = null, m = !0) {
            cc_mtt.vv.ConsoleLog.error("ResourceLoader loadRes error", e, t), cc_mtt.vv.DataManager.isWebFeature && m ? cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "LOADER.DATA_FAILED", !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.RETRY",
                callback: () => {
                    cc_mtt.vv.ConsoleLog.log("ResourceLoader retry", e), this.loadRes(e, _, o, a)
                }
            }]) : a && a(t, null)
        }
        releaseRes(e, t = null) {
            e && this.ReleaseRes(e)
        }
        isIncluded(e) {
            return !cc_mtt.vv.DataManager.isWebFeature || e.indexOf("mtt/BG/") >= 0
        }
        RetainRes(e) {
            e && this.isIncluded(e) && (this.loadedResourceList.has(e) ? (this.loadedResourceList.get(e).loadedTimes++, s.isPro || cc_mtt.vv.ConsoleLog.log("ResourcesLoader RetainRes url", e, this.loadedResourceList.get(e).loadedTimes)) : (this.loadedResourceList.set(e, new n(e)), s.isPro || cc_mtt.vv.ConsoleLog.log("ResourcesLoader RetainRes url", e, this.loadedResourceList.get(e).loadedTimes)))
        }
        ReleaseRes(e) {
            d.getInstance().start("ReleaseRes", "main"), e && this.isIncluded(e) && (this.loadedResourceList.has(e) && this.loadedResourceList.get(e).loadedTimes > 0 ? (this.loadedResourceList.get(e).loadedTimes--, s.isPro || cc_mtt.vv.ConsoleLog.log("ResourcesLoader ReleaseRes url", e, this.loadedResourceList.get(e).loadedTimes)) : cc_mtt.vv.ConsoleLog.warn("ResourcesLoader already be released", e), this.loadWaitingCount <= 0 && this.ReleaseUnusedAsset()), d.getInstance().end("ReleaseRes", "main", {
                url: e,
                trace: r.getTrace(0, 20)
            }, 3e3)
        }
        RetainResArray(e) {
            if (e)
                for (const t of e) this.RetainRes(t)
        }
        ReleaseResArray(e) {
            if (e)
                for (const t of e) this.ReleaseRes(t)
        }
        ReleaseUnusedAsset() {
            if (this.loadedResourceList)
                for (let e of Array.from(this.loadedResourceList.keys())) this.loadedResourceList.get(e) && this.loadedResourceList.get(e).loadedTimes <= 0 && (s.isPro || cc_mtt.vv.ConsoleLog.log("ResourcesLoader release", e), l.release(e), this.loadedResourceList.delete(e))
        }
        Reset() {
            this.loadedResourceList.clear(), this.loadWaitingCount = 0
        }
    }
    e("ResourcesLoader", c), c.RES_PATH = {
        PREFAB: {
            COMMON: {
                DIALOG_BOX_WPK: "mtt/prefab/pkw/dialog_box_wpk",
                DIALOG_BOX: "mtt/prefab/pkw/dialog_box_pkw",
                DIALOG_BOX_LANDSCAPE: "mtt/prefab/pkw/dialog_box_pkw_landscape",
                VISITOR: "mtt/prefab/common/visitor",
                PLAYER_SETTING: "mtt/prefab/pkw/player_setting_pkw",
                RED_POCKET: "mtt/prefab/common/redpocket",
                ATTACK_ICON: "mtt/prefab/pineapple/game_attacks/attack_icon_pkw",
                ATTACK_ICON_LIST: "mtt/prefab/pineapple/game_attacks/attack_list_pkw",
                BIG_WIN: "mtt/prefab/common/big_win",
                SIGNUP_WITH_TOOLS_BLOCKER: "mtt/common/sign_up_with_tools_blocker_pkw",
                MTT_SIGN_UP_BOX: "mtt/common/mtt_sign_up_box_pkw",
                MTT_SIGN_UP_BOX_LANDSCAPE: "mtt/common/mtt_sign_up_box_pkw_landscape",
                MTT_ADD_ON_BOX: "mtt/common/mtt_add_on_box_pkw",
                MARQUEE: "mtt/prefab/common/marquee",
                MTT_MULTI_TABLE_BAR_SELECTOR_PKW: "mtt/prefab/common/multi_table_bar_selector/MultiTableBarSelector",
                LOADING: "mtt/prefab/common/loadingNode"
            },
            HALL: {
                PSW_DIALOG: "prefab/common/psw_box",
                MULTIPLE_GAME: "mtt/hall/multiple_game",
                MULTIPLE_MTT_DETAILS: "mtt/hall/multiple_mtt_details_window",
                MULTIPLE_NEW_REPLAYER: "mtt/hall/multiple_new_replayer_window"
            },
            HOLDEM: {
                PLAYER: "mtt/prefab/holdem/holdem_player_new",
                EMOTICONS: "mtt/prefab/pkw/holdem_emoticons_pkw",
                EMOTICONS_LIST: "mtt/prefab/pkw/holdem_emoticons_list_pkw",
                TABLE_SETTING: "mtt/prefab/pkw/table_setting",
                REAL_TIME_RECORD: "mtt/prefab/holdem/real_time_record/holdem_game_records",
                REAL_TIME_RECORD_ROW: "mtt/prefab/holdem/real_time_record/holdem_real_time_record_player_row",
                GAME_ROUND_REVIEW_PAGE: "mtt/prefab/holdem/real_time_record/player_review_page_view",
                GAME_ROUND_REVIEW_HAND: "mtt/prefab/holdem/real_time_record/game_review_player_hand_pkw",
                GAME_ROUND_REVIEW_PAGE_LANDSCAPE: "mtt/prefab/holdem/real_time_record/Mtt_player_review_page_view_landscape",
                GAME_ROUND_REVIEW_HAND_LANDSCAPE: "mtt/prefab/holdem/real_time_record/Mtt_game_review_player_hand_pkw_landscape",
                MTT_GAME_RULES_PKW: "mtt/prefab/pkw/holdem_game_explanation_pkw",
                MTT_GAME_RULES_LANDSCAPE: "mtt/prefab/pkw/MTT_Game_Rules_Landscape",
                MTT_GAME_RULES: "mtt/prefab/pkw/MTT_Game_Rules",
                GAME_OVER_WINDOW: "mtt/common/game_end_pop_up/game_over_window_pkw",
                GAME_OVER_WINDOW_LANDSCAPE: "mtt/common/game_end_pop_up/game_over_window_pkw_landscape",
                GAME_END_POP_UP: "mtt/common/game_end_pop_up/game_end_pop_up_pkw",
                GAME_END_POP_UP_REVIEW: "mtt/common/game_end_pop_up/game_end_pop_up_review_pkw",
                GAME_END_POP_UP_JSNG: "jsng/holdem/game_end_pop_up_jsng",
                CELEBRITY_SELF_SETTING: "mtt/prefab/pkw/celebrity_self_setting",
                MYSTERY_BOUNTY: "mtt/prefab/holdem/mystery_bounty/mystery_bounty",
                MYSTERY_BOUNTY_LANDSCAPE: "mtt/prefab/holdem/mystery_bounty/mystery_bounty_landscape",
                MYSTERY_BOUNTY_TABLE: "mtt/prefab/holdem/mystery_bounty/MB_Table",
                MYSTERY_BOUNTY_TABLE_LANDSCAPE: "mtt/prefab/holdem/mystery_bounty/MB_Table_Landscape"
            }
        },
        SPRITE: {
            HOLDEM: {
                GAMBLING_CHIP: "mtt/holdem/playing_ui/gambling_chip_pkw",
                GAMBLING_CHIP_BIG: "mtt/holdem/playing_ui/gambling_chip_big_pkw",
                GAMBLING_CHIP_SMALL: "mtt/holdem/playing_ui/gambling_chip_small_pkw",
                MODE_HUNTERGAME: "mtt/common/game_mode/mode_huntergame",
                MODE_MTT: "mtt/common/game_mode/mode_mtt",
                MODE_AOF: "mtt/common/game_mode/mode_aof",
                MODE_SNG: "mtt/common/game_mode/mode_sng",
                MODE_GLOBAL_SPINES: "mtt/common/game_mode/GlobalSpin",
                MODE_OMAHA: "mtt/common/game_mode/mode_omaha",
                MODE_SHORTCARD: "mtt/common/game_mode/mode_shortcard",
                MODE_AIPT: "mtt/common/game_mode/mode_aipt",
                BUBBLE_OVERTIME: "mtt/holdem/bitmap_font/sc/tag/bubble_overtime_sc",
                BUBBLE_FOLD: "mtt/holdem/bitmap_font/sc/tag/bubble_fold_sc",
                BUBBLE_ALL_IN: "mtt/holdem/bitmap_font/sc/tag/bubble_allin_sc",
                BUBBLE_CALL: "mtt/holdem/bitmap_font/sc/tag/bubble_call_sc",
                BUBBLE_BET: "mtt/holdem/bitmap_font/sc/tag/bubble_bet_sc",
                BUBBLE_RAISE: "mtt/holdem/bitmap_font/sc/tag/bubble_raise_sc",
                BUBBLE_WATCH: "mtt/holdem/bitmap_font/sc/tag/bubble_watch_sc",
                BUBBLE_OVERTIME_LEFT: "mtt/holdem/bitmap_font/sc/tag/bubble_overtime_left_sc",
                BUBBLE_FOLD_LEFT: "mtt/holdem/bitmap_font/sc/tag/bubble_fold_left_sc",
                BUBBLE_ALL_IN_LEFT: "mtt/holdem/bitmap_font/sc/tag/bubble_allin_left_sc",
                BUBBLE_CALL_LEFT: "mtt/holdem/bitmap_font/sc/tag/bubble_call_left_sc",
                BUBBLE_BET_LEFT: "mtt/holdem/bitmap_font/sc/tag/bubble_bet_left_sc",
                BUBBLE_RAISE_LEFT: "mtt/holdem/bitmap_font/sc/tag/bubble_raise_left_sc",
                BUBBLE_WATCH_LEFT: "mtt/holdem/bitmap_font/sc/tag/bubble_watch_left_sc",
                FONT_ALL_IN: "mtt/holdem/player_control/pkw_v2/icon_allin",
                FONT_CALL: "mtt/holdem/bitmap_font/sc/font_call_sc",
                FONT_FREE_CALL: "mtt/holdem/bitmap_font/sc/font_freecall_sc",
                FONT_CHECK: "mtt/holdem/bitmap_font/sc/font_check_sc"
            },
            ATTACK_ICON: "mtt/common/interactive_items_pkw/"
        },
        AUDIO: {
            HOLDEM: {
                AFRAID_KING: "zh_CN/game/dzpoker/audio/voice_5",
                ANGRY_KING: "zh_CN/game/dzpoker/audio/voice_3",
                CRY_KING: "zh_CN/game/dzpoker/audio/voice_1",
                GUN_KING: "zh_CN/game/dzpoker/audio/voice_8",
                HAPPY_KING: "zh_CN/game/dzpoker/audio/voice_2",
                HIP_KING: "zh_CN/game/dzpoker/audio/voice_11",
                PROVOCATIVE_KING: "zh_CN/game/dzpoker/audio/voice_4",
                SMILE_KING: "zh_CN/game/dzpoker/audio/voice_6",
                SMIRKING_KING: "zh_CN/game/dzpoker/audio/voice_9",
                SURRENDER_KING: "zh_CN/game/dzpoker/audio/voice_10",
                SWEAT_KING: "zh_CN/game/dzpoker/audio/voice_12",
                YEAH_KING: "zh_CN/game/dzpoker/audio/voice_7"
            }
        }
    }, c._instance = null, t._RF.pop()
}