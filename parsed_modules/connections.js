import * as e from "./cc.js";
import * as s from "./httpApiTournamentList.js";
import * as n from "./CrashTracing.js";
import * as r from "./CrashTracing.js";
import * as a from "./cv.js";
import * as i from "./MTTConnector.js";
import * as o from "./mttconfig.js";
import * as l from "./Pb.js";
import * as c from "./worldWebsocket.js";
import * as u from "./MttItemHelper.js";

function main() {
    e._RF.push({}, "06838f8ytlJdaQHKvrj380o", "connections", void 0);
    let h = t("ConnectionType", function(t) {
        return t[t.Mtt = 0] = "Mtt", t[t.Sng = 1] = "Sng", t[t.CashWPTG = 2] = "CashWPTG", t[t.CashPKW = 3] = "CashPKW", t
    }({}));
    t("Connections", class {
        constructor(t) {
            this._type = void 0, this._callbackSuccess = null, this._callbackError = null, this._requestingServerType = null, this._requestingServerId = null, this._pendingMTTRequest = null, this._isProcessingMTTRequest = !1, this._type = t
        }
        requestLobbyData(t, e, s) {
            this._callbackSuccess = t, this._callbackError = e, this._type === h.Mtt ? this.requestMTTLobbyData(s) : this._type === h.Sng ? this.requestSNGLobbyData() : this._type === h.CashWPTG ? this.requestCashLobbyData(a.Enum.SeverType.SererType_World_WPTO, a.Enum.GameId.World_WPTO) : this._type === h.CashPKW ? this.requestCashLobbyData(a.Enum.SeverType.SeverType_World, a.Enum.GameId.World) : (null == e || e("Invalid type"), this.clearCallbacks())
        }
        clearCallbacks() {
            this._callbackSuccess = null, this._callbackError = null, this._isProcessingMTTRequest = !1, this._pendingMTTRequest = null
        }
        requestCashLobbyData(t, e) {
            this._requestingServerType = t, this._requestingServerId = e, a.MessageCenter.unregister("noticeCurrentBoardList", this), a.MessageCenter.unregister("noticeCurrentBoardListError", this), a.MessageCenter.register("noticeCurrentBoardList", this.onNoticeCashLobbyData.bind(this), this), a.MessageCenter.register("noticeCurrentBoardListError", this.onResponseCashLobbyData.bind(this), this), a.worldNet.requestCurrentBoardList(t)
        }
        onResponseCashLobbyData(t) {
            var e;
            1 != t.error && (null == (e = this._callbackError) || e.call(this, t), this.clearCallbacks())
        }
        onNoticeCashLobbyData(t) {
            var e;
            const {
                ServerType: s,
                ServerId: n,
                vClubCurrentBoardList: r
            } = t;
            s == this._requestingServerType && n == this._requestingServerId && (null == (e = this._callbackSuccess) || e.call(this, r), this.clearCallbacks())
        }
        requestMTTLobbyData(t) {
            if (this._isProcessingMTTRequest) {
                var e;
                const s = null == (e = this._pendingMTTRequest) ? void 0 : e.rows,
                    n = null == t ? void 0 : t.rows,
                    r = void 0 === s || 0 === s,
                    a = void 0 === n || 0 === n;
                if (r || !a && !r && void 0 !== s && void 0 !== n && s >= n) return
            }
            this._pendingMTTRequest = t ?? {}, this._isProcessingMTTRequest = !0, s.requestMttTournamentList((t => {
                this._isProcessingMTTRequest = !1, this._pendingMTTRequest = null, t.ErrorCode || (u.applyCurrencyToMttItem(t.TournamentInfos), cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments = t.TournamentInfos, this.onResponseMTTLobbyData(t), (!t.TournamentInfos || t.TournamentInfos.length && 0 == t.TournamentInfos.length) && n.Trace(r.MttActionComeWrong, "ListEmpty", t))
            }), (() => {
                var t;
                this._isProcessingMTTRequest = !1, this._pendingMTTRequest = null, null == (t = this._callbackError) || t.call(this, "HttpApiFail")
            }), t)
        }
        requestSNGLobbyData() {
            c.getInstance().RemoveMessageHandler(l.commonProto.SocketMessageId.Game_Level_List, this.onResponseSNGLobbyData.bind(this)), c.getInstance().AddMessageHandler(l.commonProto.SocketMessageId.Game_Level_List, this.onResponseSNGLobbyData.bind(this));
            const t = {
                ListId: o.GAME_LEVEL_LIST_ID.SNG,
                platForm: i.instance.PLATFORM.WPTG
            };
            c.getInstance().requestLevelList(t, null)
        }
        onResponseMTTLobbyData(t) {
            var e, s;
            t && !t.ErrorCode ? null == (e = this._callbackSuccess) || e.call(this, t) : null == (s = this._callbackError) || s.call(this, t)
        }
        onResponseSNGLobbyData(t) {
            var e, s;
            t && !t.ErrorCode ? t.ListId == o.GAME_LEVEL_LIST_ID.SNG && (null == (e = this._callbackSuccess) || e.call(this, t), this.clearCallbacks()) : (null == (s = this._callbackError) || s.call(this, t), this.clearCallbacks())
        }
    }), e._RF.pop()
}