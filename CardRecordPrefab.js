import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as R from "./ImpokerHall.js";
import * as _ from "./CardRecordTuplePrefab.js";
import * as f from "./NodePage.js";
import * as L from "./Pb.js";
import * as v from "./mttconfig.js";
import * as P from "./mttconfig.js";
import * as y from "./httpApis.js";
import * as D from "./ListLoader.js";
import * as b from "./AndroidBackButton.js";
import * as C from "./CommonTools.js";

function main() {
    var E, S, I, A, w, G, M, T, N, O, B, k, F, U, x, V, H, z;
    a._RF.push({}, "a0343/Bl9JDFrsz3p60Hqa8", "CardRecordPrefab", void 0);
    const {
        ccclass: q,
        property: K
    } = h;
    t("CardRecordPrefab", (E = K(s), S = K(s), I = K(o), A = K(o), w = K(l), G = K(n), M = K(r), T = K(o), q((B = e((O = class extends d {
        constructor(...t) {
            super(...t), i(this, "backButton", B, this), i(this, "replayAllButton", k, this), i(this, "gameName", F, this), i(this, "gameDate", U, this), i(this, "emptyMessage", x, this), i(this, "scrollView", V, this), i(this, "tuplePrefab", H, this), i(this, "headerLabel", z, this), this._parentNode = null, this._hallScript = null, this._tupleHeight = 0, this.spawnNum = 15, this.spacing = 3, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.dataList = [], this.replayPage = null, this.gameResultDetail = null, this.gameResultId = 0, this._limitPerTime = 15, this._hasFullList = !1, this._gameMode = void 0
        }
        onDestroy() {
            this.unscheduleAllCallbacks()
        }
        onLoad() {
            this._hallScript = C.instance.getParentScene(c, this.node).getComponentInChildren(R), this._tupleHeight = this.tuplePrefab.data.height
        }
        start() {
            this.node.on(P.addCardRecord, (t => {
                this.handleAddRecord(t.getUserData()), t.propagationStopped = !0
            })), this.node.on(P.removeCardRecord, (t => {
                this.handleRemoveRecord(t.getUserData()), t.propagationStopped = !0
            })), this.node.on(P.replayEvent, (t => {
                this.handleReplay(t.getUserData()), t.propagationStopped = !0
            })), this.node.getComponent(D).initExtendLoader((t => {
                this.handleTupleExtension(t)
            }))
        }
        update(t) {
            this.dataList.length < 1 || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.dataList, this.tuples, this.scrollView, this.lastContentPosY)))
        }
        updateTuplesPosition(t, e, i, a) {
            let s = i.content.position.y < a,
                o = (this._tupleHeight + this.spacing) * e.length;
            for (let a = 0; a < e.length; a++) {
                let l = f.getPositionInView(e[a], i.node);
                if (s) {
                    if (l.y < -this.bufferZone && e[a].position.y + o < 0) {
                        e[a].position = new u(e[a].position.x, e[a].position.y + o, e[a].position.z);
                        let i = e[a].getComponent(_),
                            s = i._tupleId - e.length;
                        i.setInfo(t[s], s, this._gameMode)
                    }
                } else if (l.y > this.bufferZone && e[a].position.y - o > -i.content.getComponent(p).height) {
                    e[a].position = new u(e[a].position.x, e[a].position.y - o, e[a].position.z);
                    let i = e[a].getComponent(_),
                        s = i._tupleId + e.length;
                    i.setInfo(t[s], s, this._gameMode)
                }
            }
            return i.content.position.y
        }
        addList(t) {
            let e;
            this.scrollView.content.getComponent(p).height = Math.max(0, (this._tupleHeight + this.spacing) * t.length - this.spacing), this.scrollView.content.position = new u(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(p).height / 2, this.scrollView.content.position.z), this.bufferZone = .5 * this.scrollView.node.getComponent(p).height + this._tupleHeight, this.emptyMessage.active = t.length < 1;
            for (let i = 0; i < this.spawnNum && i < t.length; i++) e = g(this.tuplePrefab), e.parent = this.scrollView.content, e.setPosition(0, -this._tupleHeight * (.5 + i) - this.spacing * i), e.getComponent(_).setInfo(t[i], i, this._gameMode), this.tuples.push(e)
        }
        removeList() {
            this.tuples = [], this.scrollView.content.destroyAllChildren()
        }
        requestGameResultRounds(t, e = this.dataList) {
            return new Promise(((i, a) => {
                let s = {
                    GameResultId: t,
                    offset: e.length,
                    limit: this._limitPerTime
                };
                cc_mtt.vv.ConsoleLog.log("requestGameResultRounds", t, s.offset, s.limit), y.requestGameResultRounds(s, (t => {
                    cc_mtt.vv.ConsoleLog.log("requestGameResultRounds_res", t), t.ErrorCode ? a("ERROR_CODE_PKW." + t.ErrorCode) : i(t)
                }), (() => {
                    a("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
                }))
            }))
        }
        decodeRoundData(t) {
            for (let e of t) this._gameMode == L.commonProto.MTT_GAME_MODE.PP ? e.GameRoundData = L.commonProto.Pineapple_Round_Record.decode(new Uint8Array(e.GameRoundData)) : e.GameRoundData = L.commonProto.Holdem_Record.decode(new Uint8Array(e.GameRoundData));
            return t
        }
        setPage(t, e) {
            m.isNative && m.os === m.OS.ANDROID && b.getInstance().addBackFunction("CardRecordPrefab", this.onBackClicked.bind(this)), this._hallScript.showLoading(), this.gameResultDetail = t, this._gameMode = this.gameResultDetail.GameMode, this.gameResultId = e, this.replayAllButton.node.active = this.gameResultDetail.TypeId === L.commonProto.GAME_CATEGORY.MTT, this.setInfo(t), this.requestGameResultRounds(e).then((t => {
                this.dataList = this.decodeRoundData(t.GameDetailRounds), this.addList(this.dataList), this._hallScript.hidLoading()
            })).catch((t => {
                this.addList([]), this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, void 0)
                }))
            }))
        }
        resetPage() {
            this.resetInfo(), this.removeList(), this.unscheduleAllCallbacks()
        }
        setInfo(t) {
            this.setInfoDetail(t.Name, t.EndTime)
        }
        setInfoDetail(t, e) {
            this.gameName.string = t;
            let i, a, s, o = e;
            [i, a, s] = f.handleTimeLabel(o), this.gameDate.string = `${f.handleDateLabel(o).join("-")} ${i}:${a}`
        }
        resetInfo() {
            this.gameName.string = "", this.gameDate.string = "", this.dataList = [], this.gameResultId = 0, this.gameResultDetail = null, this._hasFullList = !1
        }
        updateContentList(t) {
            t.length < this._limitPerTime && (this._hasFullList = !0), this.dataList = this.dataList.concat(t), this.scrollView.content.getComponent(p).height += (this._tupleHeight + this.spacing) * t.length, this.bufferZone = .5 * this.scrollView.node.getComponent(p).height + this._tupleHeight
        }
        handleTupleExtension(t) {
            if (this._hasFullList) cc_mtt.vv.ConsoleLog.log("card record page: hasFullList"), t(!1);
            else {
                let e = !1;
                const i = () => {
                    e = !0, cc_mtt.vv.ConsoleLog.log("hidLoaderOverTime"), t(!1, !0)
                };
                this.scheduleOnce(i, 20), this.requestGameResultRounds(this.gameResultId).then((a => {
                    if (e) return;
                    this.unschedule(i);
                    let s = this.decodeRoundData(a.GameDetailRounds);
                    this.updateContentList(s), t(s.length > 0)
                })).catch((a => {
                    e || (this.unschedule(i), cc_mtt.vv.ConsoleLog.log("handleTupleExtension error:", a), t(!1, !0))
                }))
            }
        }
        handleAddRecord(t) {
            let e = {
                UserId: cc_mtt.vv.DataManager.userId,
                RecordPath: this.dataList[t.tupleId].RecordPath,
                Name: this.gameResultDetail.Name,
                EndTime: this.gameResultDetail.EndTime,
                GameMode: this._gameMode
            };
            this._hallScript.showLoading(), y.requestAddUserFavouriteRound(e, (e => {
                if (cc_mtt.vv.ConsoleLog.log("handleAddRecord_res"), e.ErrorCode) {
                    let t = "ERROR_CODE_PKW." + e.ErrorCode;
                    this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox(t, void 0)
                    }))
                } else this.dataList[t.tupleId].UserFavouriteRoundId = e.UserFavouriteRoundId, t.tupleScript.showStar(!0), this._hallScript.hidLoading()
            }), (() => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                }))
            }))
        }
        handleRemoveRecord(t) {
            let e = {
                UserFavouriteRoundId: this.dataList[t.tupleId].UserFavouriteRoundId
            };
            this._hallScript.showLoading(), y.requestRemoveUserFavouriteRound(e, (e => {
                if (cc_mtt.vv.ConsoleLog.log("handleRemoveRecord_res"), e.ErrorCode) {
                    let t = "ERROR_CODE_PKW." + e.ErrorCode;
                    this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox(t, void 0)
                    }))
                } else this.dataList[t.tupleId].UserFavouriteRoundId = 0, t.tupleScript.showStar(!1), this._hallScript.hidLoading()
            }), (() => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                }))
            }))
        }
        handleReplaySetPage(t) {
            this.refreshPlayersName(t, (() => {
                let e = t.reverse();
                cc_mtt.vv.DataManager.currentResultId = this.gameResultId, cc_mtt.vv.DataManager.replayRecord = e, cc_mtt.vv.DataManager.replayGameResultDetail = this.gameResultDetail, this._gameMode === L.commonProto.MTT_GAME_MODE.PP ? cc_mtt.vv.AssetsManager.loadScene(v.SCENE_NAME.PINEAPPLE_REPLAY) : cc_mtt.vv.AssetsManager.loadScene(v.SCENE_NAME.HOLDEM_REPLAY)
            }))
        }
        handleReplay(t) {
            this._hallScript.showLoading(), this.handleReplaySetPage([this.dataList[t]])
        }
        handleReplayAll() {
            this._hallScript.showLoading(), this.getFullRecords((t => {
                cc_mtt.vv.ConsoleLog.log("handleReplayAll", t.length), this.handleReplaySetPage(t)
            }), (t => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, void 0)
                }))
            }))
        }
        getFullRecords(t, e) {
            if (this._hasFullList) t(this.dataList.slice());
            else {
                const i = a => {
                    this.requestGameResultRounds(this.gameResultId, a).then((e => {
                        e.GameDetailRounds.length > 0 ? (a = a.concat(this.decodeRoundData(e.GameDetailRounds)), e.GameDetailRounds.length < this._limitPerTime ? t(a) : (this._hallScript.showLoading(), i(a))) : t(a)
                    })).catch((t => {
                        e(t)
                    }))
                };
                i(this.dataList)
            }
        }
        onReplayAllClicked() {
            this.dataList.length > 0 && this.handleReplayAll()
        }
        onBackClicked() {
            m.isNative && m.os === m.OS.ANDROID && b.getInstance().removeBackFunction("CardRecordPrefab"), this._hallScript.blockLayer.active = !0, this._hallScript.movePageToRight(this.node, this._parentNode), setTimeout((() => {
                this.resetPage(), this._hallScript.blockLayer.active = !1
            }), 1100 * this._hallScript.pageActionSpeed)
        }
        refreshPlayersName(t, e) {
            let i = [];
            if (this._gameMode == L.commonProto.MTT_GAME_MODE.PP) {
                for (let e = 0; e < t.length; e++) i = i.concat(Object.keys(t[e].GameRoundData.players));
                i.length > 0 ? y.requestPlayersNickName(i, (i => {
                    if (i) {
                        for (let e = 0; e < t.length; e++) {
                            let a = Object.keys(t[e].GameRoundData.players);
                            for (let s = 0; s < a.length; s++) t[e].GameRoundData.players[a[s]].userName = i[a[s]]
                        }
                        e()
                    }
                }), (() => {
                    e()
                })) : e()
            } else {
                for (let e = 0; e < t.length; e++) {
                    let a = Object.keys(t[e].GameRoundData.Players);
                    i = i.concat(a.map((i => t[e].GameRoundData.Players[i].userId)))
                }
                i.length > 0 ? y.requestPlayersNickName(i, (i => {
                    if (i) {
                        for (let e = 0; e < t.length; e++) {
                            let a = Object.keys(t[e].GameRoundData.Players);
                            for (let s = 0; s < a.length; s++) {
                                let o = t[e].GameRoundData.Players[a[s]].userId;
                                i[o] && (t[e].GameRoundData.Players[a[s]].nickname = i[o])
                            }
                        }
                        e()
                    }
                }), (() => {
                    e()
                })) : e()
            }
        }
    }).prototype, "backButton", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(O.prototype, "replayAllButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(O.prototype, "gameName", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(O.prototype, "gameDate", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(O.prototype, "emptyMessage", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(O.prototype, "scrollView", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(O.prototype, "tuplePrefab", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(O.prototype, "headerLabel", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = O)) || N));
    a._RF.pop()
}