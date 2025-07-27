import * as t from "./cc.js";
import * as h from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as i from "./cv.js";

function main() {
    var n, _;
    t._RF.push({}, "92bcbRG26tEHbvgLk2ETtkR", "ResConfig", void 0);
    const {
        ccclass: y,
        property: c
    } = a;
    e("ResConfig", y(((_ = class e extends p {
        constructor(...e) {
            super(...e), this._vCowboyRes = [{
                path: "zh_CN/game/cowboy/head",
                type: o
            }, {
                path: "zh_CN/game/cowboy/card_type_0",
                type: o
            }, {
                path: "zh_CN/game/cowboy/audio",
                type: h
            }, {
                path: "zh_CN/game/humanboyPlist/humanboy",
                type: s
            }], this._vCowboyResOnly = [{
                path: "zh_CN/game/cowboy",
                type: o
            }, {
                path: "zh_CN/game/cowboy/audio",
                type: h
            }], this._vVideoCowboyRes = [{
                path: "zh_CN/game/cowboy",
                type: o
            }, {
                path: "zh_CN/game/humanboy",
                type: o
            }, {
                path: "zh_CN/game/cowboy/audio",
                type: h
            }, {
                path: "zh_CN/game/humanboyPlist/humanboy",
                type: s
            }], this._vHumanboyRes = [{
                path: "zh_CN/game/cowboy",
                type: o
            }, {
                path: "zh_CN/game/humanboy",
                type: o
            }, {
                path: "zh_CN/game/cowboy/audio",
                type: h
            }, {
                path: "zh_CN/game/humanboyPlist/number",
                type: s
            }, {
                path: "zh_CN/game/humanboyPlist/humanboy",
                type: s
            }], this._vPokerMasterRes = [{
                path: "zh_CN/game/pokermaster",
                type: o
            }, {
                path: "zh_CN/game/cowboy/audio",
                type: h
            }, {
                path: "zh_CN/game/pokermasterPlist/pokermaster",
                type: s
            }, {
                path: "zh_CN/game/humanboyPlist/humanboy",
                type: s
            }], this._vClubRes = [{
                path: "zh_CN/club",
                type: o
            }], this._vOnlyHallRes = [], this._vHallRes = [{
                path: "zh_CN/hall",
                type: o
            }, {
                path: "zh_CN/game/dzpoker/card",
                type: o
            }], this._vreleaseHallRes = [{
                path: "zh_CN/hall/safe",
                type: o
            }, {
                path: "zh_CN/hall/lobby",
                type: o
            }, {
                path: "en_US/hall/lobby",
                type: o
            }, {
                path: "zh_CN/game/dzpoker/card",
                type: o
            }], this._vGameResDZPoker = [{
                path: "zh_CN/game/dzpoker/card",
                type: o
            }, {
                path: "zh_CN/game/dzpoker/common",
                type: o
            }, {
                path: "zh_CN/game/dzpoker/ui",
                type: o
            }, {
                path: "zh_CN/game/dzpoker/ui_seaStyle",
                type: o
            }, {
                path: "zh_CN/game/dzpoker/audio",
                type: h
            }, {
                path: "zh_CN/game/dzpoker/animation/icon/effect",
                type: s
            }, {
                path: "en_US/game/dzpoker/ui",
                type: o
            }], this._vGameResJackfruit = [{
                path: "zh_CN/game/dzpoker/audio",
                type: h
            }, {
                path: "zh_CN/game/jackfruit/bg",
                type: o
            }, {
                path: "zh_CN/game/jackfruit/cardtype",
                type: o
            }, {
                path: "zh_CN/game/jackfruit/seat",
                type: o
            }, {
                path: "zh_CN/game/jackfruit/animation/victory",
                type: o
            }, {
                path: "zh_CN/game/jackfruit/animation/youwin",
                type: o
            }, {
                path: "en_US/game/jackfruit/animation/victory",
                type: o
            }, {
                path: "en_US/game/jackfruit/animation/youwin",
                type: o
            }, {
                path: "en_US/game/jackfruit/cardtype",
                type: o
            }, {
                path: "en_US/game/jackfruit/common",
                type: o
            }, {
                path: "en_US/game/jackfruit/gamerule",
                type: o
            }, {
                path: "en_US/game/jackfruit/review",
                type: o
            }, {
                path: "en_US/game/jackfruit/rule",
                type: o
            }, {
                path: "en_US/game/jackfruit/seat",
                type: o
            }, {
                path: "en_US/game/jackfruit/setting",
                type: o
            }, {
                path: "en_US/game/jackfruit/ui",
                type: o
            }], this._vGameAtlasResDZPoker = [{
                path: "zh_CN/game/dzpoker/animation/icon/effect",
                type: s
            }], this.CommonRes = [{
                path: "zh_CN/common",
                type: o
            }], this.ClientTypeRes = [{
                path: i.config.isOverSeas() ? "client_type/pkc" : "client_type/pkw",
                type: o
            }], this.vPBInfo = [{
                path: "zh_CN/pb/ws_protocol_pk",
                type: "worldPB"
            }, {
                path: "zh_CN/pb/gs_protocol_pk",
                type: "gamePB"
            }, {
                path: "zh_CN/pb/cowboy_pk",
                type: "cowboy"
            }, {
                path: "zh_CN/pb/video_cowboy_pk",
                type: "video_cowboy"
            }, {
                path: "zh_CN/pb/gs_protocol_pk",
                type: "aof"
            }, {
                path: "zh_CN/pb/gate_pk",
                type: "gate"
            }, {
                path: "zh_CN/pb/pokermaster_pk",
                type: "pokermaster"
            }, {
                path: "zh_CN/pb/data_pk",
                type: "data"
            }]
        }
        static getInstance() {
            return e.g_instance || (e.g_instance = new e), e.g_instance
        }
        getLogoPath(e) {
            let t = "client_type/";
            return i.config.GET_CLIENT_TYPE() == i.Enum.ClientType.CowboyWeb ? t += "cowboy_web/" : i.config.isOverSeas() ? t += "pkc/" : i.config.isThai() ? t += "pkt/" : t += "pkw/", t += e ? "gameView_logo" : "login_logo", t
        }
        getResInfo(e) {
            console.log(e);
            for (let t = 0; t < e.length; t++) {
                e[t];
                if (e[t].islanguage) {
                    let a = e[t].path.indexOf("/"),
                        p = e[t].path.substring(a + 1, e[t].path.length);
                    e[t].path = i.config.getLanguagePath(p)
                }
            }
            return console.log("---------------------------------------------------------------------------"), console.log(e), e
        }
        getSceneRes(e, t) {
            let a = [];
            switch (e) {
                case i.Enum.SCENE.COWBOY_SCENE:
                    a = this.getResInfo(this._vCowboyRes);
                    break;
                case i.Enum.SCENE.VIDEOCOWBOY_SCENE:
                    a = this.getResInfo(this._vVideoCowboyRes);
                    break;
                case i.Enum.SCENE.HUMANBOY_SCENE:
                    a = this.getResInfo(this._vHumanboyRes);
                    break;
                case i.Enum.SCENE.POKERMASTER_SCENE:
                    a = this.getResInfo(this._vPokerMasterRes);
                    break;
                case i.Enum.SCENE.HALL_SCENE:
                    a = i.appConfig.getGeneralConfig().loadOnlyResourceHallScene ? this._vOnlyHallRes : t ? this._vreleaseHallRes : this._vHallRes;
                    break;
                case i.Enum.SCENE.GAME_SCENE:
                    a = this.getResInfo(this._vGameResDZPoker);
                    break;
                case i.Enum.SCENE.JACKFRUIT_SCENE:
                    a = this.getResInfo(this._vGameResJackfruit)
            }
            return console.log("预加载" + e + "资源" + a), a
        }
        getPBInfo() {
            return this.vPBInfo
        }
    }).g_instance = void 0, n = _)) || n);
    t._RF.pop()
}