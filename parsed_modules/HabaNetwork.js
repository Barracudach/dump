import * as n from "./cc.js";
import * as t from "./cc.js";
import * as a from "./cc.js";
import * as o from "./NetWorkProxy.js";
import * as s from "./cv.js";

function main() {
    var i, r;
    a._RF.push({}, "fda81TOx5VJcoT6ampF0Kpe", "HabaNetwork", void 0);
    const {
        ccclass: g,
        property: c
    } = n;
    e("HabaNetwork", g(((r = class e extends o {
        constructor(...e) {
            super(...e), this._habaUrls = void 0, this._gameId = void 0
        }
        static getInstance() {
            return e.g_instance || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
        init() {
            this._habaUrls = new Map
        }
        getHabaGamesUrl(e) {
            if (this._habaUrls.has(e)) {
                const a = this._habaUrls.get(e);
                return this._getCommonGameUrl(a)
            }
            return console.warn(`HabaNetwork :: getHabaGamesUrl :: habaUrls out of bound ${e}`), null
        }
        getHabaGameId() {
            return this._gameId
        }
        requestHabaLoginRequest(e) {
            var a;
            const n = null == (a = s.geoComplyManager) ? void 0 : a.getGeoToken(),
                t = s.config.getStringData("WEB_HABA_LOGIN_API", !0),
                o = {
                    gameId: e.toString(),
                    gameProvider: "haba",
                    geoComplyToken: n
                };
            s.http.sendRequest(t, o, (a => {
                const {
                    game_url: n,
                    is_banned: t
                } = a;
                if (1 === t) {
                    const e = {
                        code: -1,
                        error: s.config.getStringData("LOGIN.USER_ACCOUNT_LOCKED")
                    };
                    this.responseHabaLogin(e)
                } else {
                    const a = {
                        code: 1,
                        game_url: n,
                        gameId: e,
                        roomid: e,
                        is_banned: t
                    };
                    this.responseHabaLogin(a)
                }
            }), null, null, !1, !1, (e => {
                console.log(e);
                const a = {
                    code: e
                };
                this.responseHabaLogin(a)
            })), s.MessageCenter.send("HabaGameLoginRequest", e)
        }
        responseHabaLogin(e) {
            if (1 === e.code) switch (this._gameId = e.gameId, e.gameId) {
                case s.Enum.GameId.CaribbeanStud:
                case s.Enum.GameId.CaribbeanTexasHold:
                    this._habaUrls.set(e.gameId, e.game_url), s.roomManager.onJoinRoomResponse(e, e.gameId), s.roomManager.setMiniGameRoomIdTemplate(e.gameId, e.gameId)
            } else s.roomManager.onJoinRoomResponse(e, e.gameId);
            s.MessageCenter.send("HabaGameLoginResponse", e.code)
        }
        requestHabaLogout(e) {
            const a = s.config.getStringData("WEB_HABA_LOGOUT_API", !0),
                n = {
                    gameId: e.toString()
                };
            s.http.sendRequest(a, n, (a => {
                const {
                    balance: n,
                    bettingAmount: t,
                    game_coin_balance: o,
                    txUUID: s
                } = a, i = {
                    code: 1,
                    gameId: e,
                    balance: n,
                    bettingAmount: t,
                    game_coin_balance: o,
                    txUUID: s
                };
                this.responseHabaLogout(i)
            }), null, null, !1, !1, (() => {
                this.responseHabaLogout({
                    code: -1
                })
            }))
        }
        responseHabaLogout(e) {
            this._habaUrls.has(e.gameId) && this._habaUrls.delete(e.gameId), this._gameId = void 0, s.roomManager.onResponse_LeaveRoom(e, e.gameId, e.gameId)
        }
        _getCommonGameUrl(e) {
            let a = "";
            a = s.appConfig.isProd ? "&isNative=1" : "&isNative=" + (t.isNative ? "1" : "0");
            let n = "";
            s.appConfig.isLandscapeLayout && (n = "&isHide=1");
            let o = "&lang=en";
            switch (s.config.getCurrentLanguage()) {
                case s.Enum.LANGUAGE_TYPE.zh_CN:
                case s.Enum.LANGUAGE_TYPE.zh_TW:
                    o = "&lang=zh"
            }
            return e + a + o + n
        }
    }).g_instance = void 0, i = r)) || i);
    a._RF.pop()
}