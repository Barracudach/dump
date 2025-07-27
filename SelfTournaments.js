import * as d from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as M from "./httpApis.js";
import * as g from "./Pb.js";
import * as S from "./cv.js";
import * as _ from "./MultipleGameJsng.js";

function main() {
    n._RF.push({}, "23a04y/65xMboJFYuMEVi14", "SelfTournaments", void 0);
    t("SelfTournaments", class {
        constructor() {
            this.DEBUG = !1, this._data = null
        }
        reloadAllTournamentsByCategory(t) {
            if (!t || !t.UserGameInfo || 0 == t.UserGameInfo.length || !t.UserGameInfo[0].Category) return;
            let n = t.UserGameInfo[0].Category;
            const e = this._data.tournaments;
            this._data.tournaments = this._data.tournaments.filter((t => t.Category !== n)), this._data.tournaments.push(...t.UserGameInfo), null == e || e.forEach((t => {
                if (t.RoomId && _.isSngCacheGameModelWatchingRoom(t.TournamentId)) {
                    this._data.tournaments.find((n => n.TournamentId == t.TournamentId)) || this._data.tournaments.push(t)
                }
            })), this._data.tournaments.forEach((t => {
                const n = e.find((n => n.TournamentId == t.TournamentId));
                n && Math.abs(n.JoinStatus) > Math.abs(t.JoinStatus) && (t.JoinStatus = n.JoinStatus)
            }))
        }
        init() {
            this._data = {
                tournaments: [],
                selectedToursMultiTableBar: []
            }, this.setupDebugLog(), e.on("requestMttMultiTable_onResponse", (t => {
                t && t.UserGameInfo && (this.reloadAllTournamentsByCategory(t), S.MessageCenter.send("SelfTournaments_Changed_My_MTT_List"))
            })), e.on("requestJsngMultiTable_onResponse", (t => {
                t && t.UserGameInfo && this.reloadAllTournamentsByCategory(t)
            })), e.on("requestMttPlayerSignUp_onResponse", ((t, n) => {
                if (t && !t.ErrorCode && n.UserId === cc_mtt.vv.DataManager.userId) {
                    var e, a;
                    const t = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments,
                        o = null == t ? void 0 : t.find((t => {
                            var e;
                            return (null == t || null == (e = t.Detail) ? void 0 : e.Id) == n.TournamentId
                        }));
                    this.manualAddTournament({
                        TournamentId: n.TournamentId,
                        SngMttLevelId: n.TournamentId,
                        JoinStatus: 1,
                        MttTournamentStatus: (null == o || null == (e = o.Detail) ? void 0 : e.Status) ?? g.commonProto.MTT_GAME_STATUS.NOT_STARTED,
                        Category: g.commonProto.GAME_CATEGORY.MTT,
                        GameMode: null == o || null == (a = o.Detail) ? void 0 : a.GameMode
                    }), M.requestMttTournamentStatus(n.TournamentId, (t => {
                        var e;
                        t && this.manualAddOrUpdateTournament({
                            TournamentId: n.TournamentId,
                            SngMttLevelId: n.TournamentId,
                            JoinStatus: 1,
                            MttTournamentStatus: t.Status,
                            MttTournamentIsPreparing: t.IsPreparing,
                            Category: g.commonProto.GAME_CATEGORY.MTT,
                            GameMode: null == o || null == (e = o.Detail) ? void 0 : e.GameMode
                        })
                    }), (() => {
                        var t;
                        this.manualAddTournament({
                            TournamentId: n.TournamentId,
                            SngMttLevelId: n.TournamentId,
                            JoinStatus: 1,
                            MttTournamentStatus: g.commonProto.MTT_GAME_STATUS.NOT_STARTED,
                            Category: g.commonProto.GAME_CATEGORY.MTT,
                            GameMode: null == o || null == (t = o.Detail) ? void 0 : t.GameMode
                        })
                    }))
                }
            })), e.on("requestMttPlayerSignUpCancel_onResponse", ((t, n) => {
                t && !t.ErrorCode && n.UserId === cc_mtt.vv.DataManager.userId && this.manualRemoveTournament(n.TournamentId)
            })), e.on("requestMttReenter_onResponse", ((t, n) => {
                if (t && !t.ErrorCode && n.UserId === cc_mtt.vv.DataManager.userId) {
                    const t = this._data.tournaments.find((t => t.TournamentId == n.TournamentId));
                    this.manualAddOrUpdateTournament({
                        TournamentId: n.TournamentId,
                        SngMttLevelId: n.TournamentId,
                        JoinStatus: t ? Math.abs(t.JoinStatus || 1) + 1 : 2,
                        MttTournamentStatus: g.commonProto.MTT_GAME_STATUS.STARTED
                    })
                }
            })), e.on("requestMttTournamentStatus_onResponse", ((t, n) => {
                t && this.manualUpdateTournament({
                    TournamentId: n,
                    SngMttLevelId: n,
                    MttTournamentStatus: t.Status,
                    MttTournamentIsPreparing: t.IsPreparing
                })
            })), e.on("requestMttTournamentDetail_onResponse", ((t, n) => {
                var e;
                t && (!t.ErrorCode && t.TournamentDetail ? this.manualUpdateTournament({
                    TournamentId: n,
                    SngMttLevelId: n,
                    MttTournamentStatus: null == (e = t.TournamentDetail) ? void 0 : e.Status,
                    Category: g.commonProto.GAME_CATEGORY.MTT
                }) : t.ErrorCode != g.commonProto.ErrorCode.Mtt_Tournament_Ended && t.ErrorCode != g.commonProto.ErrorCode.Mtt_Tournament_Canceled || this.manualRemoveTournament(n))
            })), e.on("requestSngPlayerSignUp_onResponse", ((t, n) => {
                if (t && !t.ErrorCode) {
                    var e;
                    const t = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.SngTournaments,
                        a = null == t ? void 0 : t.find((t => {
                            var e;
                            return (null == t || null == (e = t.Detail) ? void 0 : e.Id) == n.levelId
                        }));
                    this.manualAddTournament({
                        SngMttLevelId: n.levelId,
                        JoinStatus: 1,
                        MttTournamentStatus: g.commonProto.MTT_GAME_STATUS.NOT_STARTED,
                        Category: g.commonProto.GAME_CATEGORY.SNG,
                        GameMode: null == a || null == (e = a.Detail) ? void 0 : e.GameMode
                    })
                }
            })), S.MessageCenter.register(S.Enum.MessageCenterAction.RefreshLobbyMyMtts, (() => {
                let t = this.getAllRegisteredMttTournaments(),
                    n = [];
                t.forEach((t => {
                    -1 == cc_mtt.vv.DataManager.JoinedTournaments.findIndex((n => t.TournamentId == n.TournamentId)) && n.push(t.TournamentId)
                })), n.forEach((t => {
                    this.manualRemoveTournament(t)
                }));
                const e = cc_mtt.vv.DataManager.GAME_LEVEL_LIST.MttTournaments;
                cc_mtt.vv.DataManager.JoinedTournaments.forEach((t => {
                    var n, a;
                    const o = null == e ? void 0 : e.find((n => {
                        var e;
                        return (null == n || null == (e = n.Detail) ? void 0 : e.Id) == t.TournamentId
                    }));
                    this.manualAddOrUpdateTournament({
                        TournamentId: t.TournamentId,
                        SngMttLevelId: t.TournamentId,
                        JoinStatus: t.JoinStatus,
                        MttTournamentStatus: (null == o || null == (n = o.Detail) ? void 0 : n.Status) ?? g.commonProto.MTT_GAME_STATUS.NOT_STARTED,
                        Category: g.commonProto.GAME_CATEGORY.MTT,
                        GameMode: null == o || null == (a = o.Detail) ? void 0 : a.GameMode
                    })
                }))
            }), this)
        }
        resetTournamentsData(t) {
            let n = this._data;
            this._data = {
                tournaments: [],
                selectedToursMultiTableBar: S.appConfig.isWebApp ? n.selectedToursMultiTableBar : []
            }, t && t.forEach((t => {
                let e = null,
                    a = null,
                    o = g.commonProto.GAME_CATEGORY.MTT;
                if (n && n.tournaments) {
                    const r = n.tournaments.find((n => n.TournamentId == t.TournamentId));
                    r && (e = r.JoinStatus, a = r.MttTournamentIsPreparing, o = r.Category)
                }
                this.manualAddOrUpdateTournament({
                    TournamentId: t.TournamentId,
                    JoinStatus: t.JoinStatus,
                    MttTournamentStatus: e,
                    MttTournamentIsPreparing: a,
                    Category: o
                })
            }))
        }
        reloadUserTournaments(t, n) {
            return new Promise(((e, a) => {
                M.requestMttMultiTable((() => {
                    M.requestJSNGMultiTable((() => {
                        null == t || t(this._data), e(this._data)
                    }), (t => {
                        null == n || n(t), a(t)
                    }))
                }), (() => {
                    null == n || n(), a()
                }))
            }))
        }
        removeAllSelectedTournaments() {
            this._data && this._data.selectedToursMultiTableBar && this._data.selectedToursMultiTableBar.length > 0 && (this._data.selectedToursMultiTableBar.length = 0)
        }
        manualRemoveTournament(t) {
            const n = this._data.tournaments.findIndex((n => n.TournamentId == t));
            n >= 0 && (this._data.tournaments.splice(n, 1), S.MessageCenter.send("SelfTournaments_Changed_My_MTT_List"), S.MessageCenter.send("RemoveTournament", t))
        }
        manualAddTournament(t) {
            if (null == t.JoinStatus && (a("Please determine JoinStatus before add this item "), t.JoinStatus = 1), !t.GameMode && t.TournamentId) {
                var n;
                const a = null == (n = cc_mtt.vv.DataManager) || null == (n = n.GAME_LEVEL_LIST) ? void 0 : n.MttTournaments;
                if (a)
                    for (let n = 0; n < a.length; n++) {
                        var e;
                        if (t.TournamentId == (null == (e = a[n]) || null == (e = e.Detail) ? void 0 : e.Id)) {
                            var r;
                            t.GameMode = null == (r = a[n]) || null == (r = r.Detail) ? void 0 : r.GameMode;
                            break
                        }
                    }
                if (!t.GameMode) {
                    var u;
                    const n = null == (u = cc_mtt.vv.DataManager) || null == (u = u.GAME_LEVEL_LIST) ? void 0 : u.SngTournaments;
                    if (n)
                        for (let e = 0; e < n.length; e++) {
                            var s, m;
                            if (t.TournamentId == (null == (s = n[e]) || null == (s = s.Detail) ? void 0 : s.Id) || t.RoomId == (null == (m = n[e]) || null == (m = m.Detail) ? void 0 : m.Id)) {
                                var T;
                                t.GameMode = null == (T = n[e]) || null == (T = T.Detail) ? void 0 : T.GameMode;
                                break
                            }
                        }
                }
            }
            this._data.tournaments.find((n => n.TournamentId == t.TournamentId)) || (o(`manualAddTournament: ${JSON.stringify(this._data.tournaments)} - ${JSON.stringify(t)}`), this._data.tournaments.push(t), S.MessageCenter.send("SelfTournaments_Changed_My_MTT_List"))
        }
        manualUpdateTournament(t) {
            let n = this._data.tournaments.findIndex((n => n.TournamentId == t.TournamentId));
            if (n >= 0) {
                if (null != t.JoinStatus) {
                    const e = this._data.tournaments[n].JoinStatus;
                    t.JoinStatus = Math.abs(e) > Math.abs(t.JoinStatus) ? e : t.JoinStatus
                }
                null != t.MttTournamentStatus && this._data.tournaments[n].MttTournamentIsPreparing && t.MttTournamentStatus != g.commonProto.MTT_GAME_STATUS.NOT_STARTED && (t.MttTournamentIsPreparing = !1), this._data.tournaments[n] = {
                    ...this._data.tournaments[n],
                    ...t
                }, S.MessageCenter.send("SelfTournaments_update_My_MTT")
            }
        }
        manualAddOrUpdateTournament(t) {
            this._data.tournaments.find((n => n.TournamentId == t.TournamentId)) ? this.manualUpdateTournament(t) : this.manualAddTournament(t)
        }
        getSelectedTournamentMultiTableBar() {
            return this._data.selectedToursMultiTableBar
        }
        getSelectedTournamentMultiTableBarPlaying() {
            const t = this.getPlayingTournaments();
            return this.getSelectedTournamentMultiTableBar().filter((n => null != t.find((t => t.TournamentId == n))))
        }
        setSelectedTournamentMultiTableBar(t) {
            this._data.selectedToursMultiTableBar = t
        }
        getAllRegisteredTournaments() {
            return this._data.tournaments
        }
        getAllRegisteredTournamentsWithOutEnded() {
            return this.getTournamentsWithFilter((t => t.MttTournamentStatus && t.MttTournamentStatus != g.commonProto.MTT_GAME_STATUS.ENDED))
        }
        getAllRegisteredMttTournaments() {
            return this.getTournamentsWithFilter((t => t.Category == g.commonProto.GAME_CATEGORY.MTT))
        }
        getTournamentById(t) {
            return this._data.tournaments.find((n => n.TournamentId === t))
        }
        getNotStaredTournaments() {
            return this.getTournamentsWithFilter((t => !t.MttTournamentStatus || t.MttTournamentStatus == g.commonProto.MTT_GAME_STATUS.NOT_STARTED))
        }
        getPlayingTournaments() {
            return this.getMttPlayingTournaments().concat(this.getSngPlayingTournaments())
        }
        getMttPlayingTournaments() {
            return this.getTournamentsWithFilter((t => t.Category == g.commonProto.GAME_CATEGORY.MTT && t.MttTournamentStatus && t.MttTournamentStatus != g.commonProto.MTT_GAME_STATUS.NOT_STARTED && t.MttTournamentStatus != g.commonProto.MTT_GAME_STATUS.ENDED && t.JoinStatus > 0 || t.MttTournamentIsPreparing))
        }
        getSngPlayingTournaments() {
            return this.getTournamentsWithFilter((t => t.Category == g.commonProto.GAME_CATEGORY.SNG))
        }
        getRunningTournaments() {
            return this.getTournamentsWithFilter((t => t.MttTournamentStatus && t.MttTournamentStatus != g.commonProto.MTT_GAME_STATUS.NOT_STARTED && t.MttTournamentStatus != g.commonProto.MTT_GAME_STATUS.ENDED || t.MttTournamentIsPreparing))
        }
        getEliminatedTournaments() {
            return this.getTournamentsWithFilter((t => (t.MttTournamentStatus && t.MttTournamentStatus != g.commonProto.MTT_GAME_STATUS.NOT_STARTED && t.MttTournamentStatus != g.commonProto.MTT_GAME_STATUS.ENDED || t.MttTournamentIsPreparing) && t.JoinStatus < 1))
        }
        getTournamentsWithFilter(t) {
            var n;
            return null == (n = this._data) || null == (n = n.tournaments) ? void 0 : n.filter((n => !t || t(n)))
        }
        setupDebugLog() {
            if (!this.DEBUG) return;
            const t = new r;
            u.addPersistRootNode(t), t.addComponent(s), t.position = m(360, 500);
            const n = t.addComponent(T);
            n.node.getComponent(i).color = new l(l.RED), n.fontSize = 40, n.schedule((async () => {
                let t = this._data.tournaments,
                    e = this.getPlayingTournaments(),
                    a = this.getRunningTournaments(),
                    o = this.getEliminatedTournaments();
                n.string = `\n                Registered Tours: (${t.length}) - ${JSON.stringify(t.map((t=>t.TournamentId)))}\n                Playing Tours: (${e.length}) - ${JSON.stringify(e.map((t=>t.TournamentId)))}\n                Running Tours: (${a.length}) - ${JSON.stringify(a.map((t=>t.TournamentId)))}\n                Eliminated Tours: (${o.length}) - ${JSON.stringify(o.map((t=>t.TournamentId)))}\n                `
            }), .01, d.REPEAT_FOREVER, 0)
        }
    }), n._RF.pop()
}