import * as t from "./cc.js";

function main() {
    let e;
    _("PokerMasterDef", void 0), t._RF.push({}, "5c381LQvZJB9J3OTw79FNak", "PokerMasterDef", void 0),
        function(_) {
            let t = null,
                e = null;
            _.Sounds = function() {
                return t || (t = new s), t
            }, _.LocalMsg = function() {
                return e || (e = new o), e
            }, _.clear = function() {
                t = null, e = null
            };
            let E = function(_) {
                return _[_.Z_IDX_DUMMY = 0] = "Z_IDX_DUMMY", _[_.Z_IDX_IMG_HEAD = 9] = "Z_IDX_IMG_HEAD", _[_.Z_IDX_IMG_HEAD_TXT = 10] = "Z_IDX_IMG_HEAD_TXT", _[_.Z_IDX_IMG_HEAD_FLAG = 11] = "Z_IDX_IMG_HEAD_FLAG", _[_.Z_IDX_IMG_WIN_COUNT = 12] = "Z_IDX_IMG_WIN_COUNT", _[_.Z_IDX_COIN_POOL = 13] = "Z_IDX_COIN_POOL", _[_.Z_IDX_ANIM_NODE = 14] = "Z_IDX_ANIM_NODE", _[_.Z_IDX_ANIM_NODE_0 = 15] = "Z_IDX_ANIM_NODE_0", _[_.Z_IDX_ANIM_NODE_1 = 16] = "Z_IDX_ANIM_NODE_1", _[_.Z_IDX_ANIM_NODE_2 = 17] = "Z_IDX_ANIM_NODE_2", _[_.Z_IDX_ANIM_NODE_3 = 18] = "Z_IDX_ANIM_NODE_3", _[_.Z_IDX_PANEL_COUNT_DOWN = 19] = "Z_IDX_PANEL_COUNT_DOWN", _[_.Z_IDX_PANEL_ADVANCE_AUTO_SELECT = 20] = "Z_IDX_PANEL_ADVANCE_AUTO_SELECT", _[_.Z_IDX_PANEL_REWRAD_TIP = 21] = "Z_IDX_PANEL_REWRAD_TIP", _[_.Z_IDX_PANEL_RED_PACKET = 22] = "Z_IDX_PANEL_RED_PACKET", _[_.Z_IDX_PANEL_AUTO_SELECT = 23] = "Z_IDX_PANEL_AUTO_SELECT", _[_.Z_IDX_PANEL_RECORD = 24] = "Z_IDX_PANEL_RECORD", _[_.Z_IDX_PANEL_SETTING = 25] = "Z_IDX_PANEL_SETTING", _[_.Z_IDX_PANEL_SQUINT = 26] = "Z_IDX_PANEL_SQUINT", _[_.Z_IDX_PANEL_GUID = 27] = "Z_IDX_PANEL_GUID", _[_.Z_IDX_PANEL_SERVER_TOAST = 28] = "Z_IDX_PANEL_SERVER_TOAST", _[_.Z_IDX_ADVANCE_AUTO_ADD_SELECT = 29] = "Z_IDX_ADVANCE_AUTO_ADD_SELECT", _[_.Z_IDX_GIFT_POPUP = 30] = "Z_IDX_GIFT_POPUP", _[_.Z_IDX_GIFT_WELCOME = 31] = "Z_IDX_GIFT_WELCOME", _[_.Z_IDX_LOADING_SCREEN = 998] = "Z_IDX_LOADING_SCREEN", _
            }({});
            _.LayerZorder = E;
            let a = function(_) {
                return _[_.TABLE_NONE = 0] = "TABLE_NONE", _[_.TABLE_TURN = 1] = "TABLE_TURN", _[_.TABLE_RIVER = 2] = "TABLE_RIVER", _
            }({});
            _.TableStyle = a;
            class s {
                constructor() {
                    this.sound_bgm = "zh_CN/game/cowboy/audio/back", this.sound_begin_bet = "zh_CN/game/cowboy/audio/begin_bet", this.sound_end_bet = "zh_CN/game/cowboy/audio/end_bet", this.sound_kaipai = "zh_CN/game/cowboy/audio/kaipai", this.sound_fapai = "zh_CN/game/cowboy/audio/fapai", this.sound_start_round = "zh_CN/game/cowboy/audio/half_time", this.sound_betin = "zh_CN/game/cowboy/audio/chip", this.sound_betin_many = "zh_CN/game/cowboy/audio/hechip", this.sound_win_lose = "zh_CN/game/cowboy/audio/bx_getCoin", this.sound_get_win_coin = "zh_CN/game/cowboy/audio/bigying", this.sound_button = "zh_CN/game/cowboy/audio/press", this.sound_time_tick = "zh_CN/game/cowboy/audio/time", this.sound_dealer_vd = "zh_CN/game/cowboy/audio/dealer_vd", this.sound_special_card_type_small = "zh_CN/game/cowboy/audio/special_card_type_small", this.sound_special_card_type_middle = "zh_CN/game/cowboy/audio/special_card_type_middle", this.sound_special_card_type_big = "zh_CN/game/cowboy/audio/special_card_type_big", this.sound_jackpot = "zh_CN/game/cowboy/audio/jackpot"
                }
            }
            class o {
                constructor() {
                    this.SWITCH_SCENEB_EGAN = "switchSceneBegan", this.SWITCH_SCENE_TO_MINIGAME = "switchSceneToMiniGame", this.SHOW_MEDAL = "showMedalMsg", this.MsgPrefix = "on_msg_pokermaster_", this.ON_BGM_ENABLE = "on_minigame_background_music_enable_updated", this.RECHARGE = "recharge", this.ERROR = "error", this.ROOM_KICK = "room_kick", this.ROOM_PARAM_CHANGE = "room_param_change", this.UPDATE_PLAYER_LIST = "update_player_list", this.GAME_DATA_SYN = "game_data_syn", this.STATUS_DEAL = "status_deal", this.STATUS_SHOW_ODDS = "status_show_odds", this.STATUS_START_BET = "status_start_bet", this.STATUS_STOP_BET = "status_stop_bet_one", this.STATUS_ROUND_END = "status_round_end", this.STATUS_READY = "status_ready_game", this.BET = "bet", this.AUTO_BET = "auto_bet", this.AUTO_BET_MERGE = "merge_auto_bet", this.ADVANCE_AUTOBET = "on_advance_autobet", this.ADVANCE_AUTOBET_SET = "advance_autobet_set", this.ADVANCE_AUTOBET_CANCEL = "advance_autobet_cancel", this.ADVANCE_BET_LEVEL_CHANGE = "advance_bet_level_change", this.REACH_LIMIT_BET = "advance_autobet_limit_reached", this.REWARD_TIPS = "showMedalMsg", this.UPDATE_WORLDSERVER_GOLD = "update_gold", this.SHOW_LUCK_BUTTON = "showLuckButton", this.TURN_TABLE_REWARD = "turntableResultNotice", this.UPDATE_TREND = "update_trend", this.UPDATE_REVIEW = "update_review"
                }
            }
        }(e || (e = _("PokerMasterDef", {}))), t._RF.pop()
}