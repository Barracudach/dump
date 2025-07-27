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
import * as R from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as _ from "./ImpokerHall.js";
import * as P from "./CardRecordTuplePrefab.js";
import * as f from "./NodePage.js";
import * as v from "./Pb.js";
import * as L from "./mttconfig.js";
import * as C from "./mttconfig.js";
import * as y from "./httpApis.js";
import * as D from "./AndroidBackButton.js";
import * as E from "./CommonTools.js";
import * as G from "./DataManager.js";

function main() {
    var I, b, S, T, M, O, A, w, N, k;
    o._RF.push({}, "09106QhssNDvqtlDBA9mg+K", "CardCollectionPrefab", void 0);
    const {
        ccclass: B,
        property: U
    } = r;
    t("CardCollectionPrefab", (I = U(s), b = U(a), S = U(n), T = U(l), B((A = e((O = class extends h {
        constructor(...t) {
            super(...t), i(this, "backButton", A, this), i(this, "scrollView", w, this), i(this, "tuplePrefab", N, this), i(this, "emptyMessage", k, this), this._hallScript = null, this._tupleHeight = 0, this.spawnNum = 15, this.spacing = 3, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.dataList = [], this._historyList = [], this._currentGameResultDetail = null, this.tuplePool = new c
        }
        onLoad() {
            this._hallScript = E.instance.getParentScene(u, this.node).getComponentInChildren(_), this._tupleHeight = this.tuplePrefab.data.height + this.tuplePrefab.data.getComponent(P).header.height
        }
        start() {
            this.node.on(C.removeCardRecord, (t => {
                this.handleRemoveRecord(t.getUserData()), t.propagationStopped = !0
            })), this.node.on(C.replayEvent, (t => {
                this.handleReplay(t.getUserData()), t.propagationStopped = !0
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
                } else this.dataList[t.tupleId].UserFavouriteRoundId = 0, this.dataList.splice(t.tupleId, 1), this.recycleTuples(), this.addList(this.dataList), this._hallScript.hidLoading()
            }), (() => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                }))
            }))
        }
        update(t) {
            this.dataList.length < 1 || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.dataList, this.tuples, this.scrollView, this.lastContentPosY)))
        }
        updateTuplesPosition(t, e, i, o) {
            let s = i.content.position.y < o,
                a = (this._tupleHeight + this.spacing) * e.length;
            for (let o = 0; o < e.length; o++) {
                let n = f.getPositionInView(e[o], i.node);
                if (s) {
                    if (n.y < -this.bufferZone && e[o].position.y + a < 0) {
                        e[o].position = new d(e[o].position.x, e[o].position.y + a, e[o].position.z);
                        let i = e[o].getComponent(P),
                            s = i._tupleId - e.length;
                        i.setInfo(t[s], s)
                    }
                } else if (n.y > this.bufferZone && e[o].position.y - a > -i.content.getComponent(p).height) {
                    e[o].position = new d(e[o].position.x, e[o].position.y - a, e[o].position.z);
                    let i = e[o].getComponent(P),
                        s = i._tupleId + e.length;
                    i.setInfo(t[s], s)
                }
            }
            return i.content.position.y
        }
        addList(t) {
            let e;
            this.emptyMessage.active = t.length < 1, this.scrollView.content.getComponent(p).height = Math.max(0, (this._tupleHeight + this.spacing) * t.length - this.spacing), this.scrollView.content.position = new d(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(p).height / 2, this.scrollView.content.position.z), this.bufferZone = .5 * this.scrollView.node.getComponent(p).height + this._tupleHeight;
            for (let i = 0; i < this.spawnNum && i < t.length; i++) e = this.tuplePool.get(), e.parent = this.scrollView.content, e.getComponent(P).setInfo(t[i], i), e.setPosition(0, -this._tupleHeight * (.5 + i) - this.spacing * i), this.tuples.push(e)
        }
        removeList() {
            this.tuples = [], this.scrollView.content.destroyAllChildren(), this.tuplePool.clear()
        }
        createTuples() {
            if (!(this.tuplePool.size() + this.tuples.length >= this.spawnNum))
                for (let t = 0; t < this.spawnNum; ++t) {
                    let t = m(this.tuplePrefab);
                    this.tuplePool.put(t)
                }
        }
        recycleTuples() {
            for (; this.tuples.length > 0;) this.tuplePool.put(this.tuples.pop())
        }
        requestListUserFavouriteRounds(t, e) {
            let i = {
                UserId: G.userId
            };
            y.requestListUserFavouriteRounds(i, (i => {
                cc_mtt.vv.ConsoleLog.log("requestListUserFavouriteRounds_res", i), i && !i.ErrorCode ? t(i) : e("ERROR_CODE_PKW." + i.ErrorCode)
            }), (() => {
                cc_mtt.vv.ConsoleLog.log("onerror:requestListUserFavouriteRounds"), e("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
            }))
        }
        setPage() {
            g.isNative && g.os === g.OS.ANDROID && D.getInstance().addBackFunction("CardCollectionPrefab", this.onBackClicked.bind(this)), this._hallScript.showLoading(), this.createTuples(), this.requestListUserFavouriteRounds((t => {
                for (let e of t.GameDetailRounds) e.GameMode == v.commonProto.MTT_GAME_MODE.PP ? e.GameRoundData = v.commonProto.Pineapple_Round_Record.decode(new Uint8Array(e.GameRoundData)) : e.GameRoundData = v.commonProto.Holdem_Record.decode(new Uint8Array(e.GameRoundData));
                this.dataList = t.GameDetailRounds.reverse(), this.addList(this.dataList), this.requestHistory()
            }), (t => {
                this.addList([]), this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, void 0)
                }))
            }))
        }
        resetPage() {
            this.dataList = [], this.removeList()
        }
        requestHistory(t) {
            let e = {
                UserId: cc_mtt.vv.DataManager.userId
            };
            this._hallScript.getGameResult(e, (e => {
                cc_mtt.vv.ConsoleLog.log("CardCollectionPrefab check history"), this._historyList = e.GameResults, this._hallScript.hidLoading(), t && t instanceof Function && t()
            }), (() => {
                this._hallScript.hidLoading()
            }))
        }
        getGameResultDetail(t, e) {
            if (this._currentGameResultDetail = this._historyList.find((e => {
                    if (e.EndTime.getTime() == t.EndTime.getTime()) switch (e.TypeId) {
                        case v.commonProto.GAME_CATEGORY.GEN_PP:
                            return e.RoomId == t.GameRoundData.roomId || e.RoomId == t.GameRoundData.levelId;
                        case v.commonProto.GAME_CATEGORY.LOOP_PP:
                            return e.LevelId == t.GameRoundData.roomId || e.LevelId == t.GameRoundData.levelId;
                        case v.commonProto.GAME_CATEGORY.MTT:
                        case v.commonProto.GAME_CATEGORY.SNG:
                            return e.TournamentId == t.GameRoundData.roomId || e.TournamentId == t.GameRoundData.levelId
                    }
                    return !1
                })), R("CardCollectionPrefab _currentGameResultDetail", this._currentGameResultDetail), this._currentGameResultDetail) {
                let t = {
                    GameResultId: this._currentGameResultDetail.Id
                };
                y.requestGameResultDetail(t, (t => {
                    cc_mtt.vv.ConsoleLog.log("CardCollectionPrefab check history detail"), t && !t.ErrorCode ? e && e instanceof Function && e() : this._hallScript.hidLoading((() => {
                        let e = "ERROR_CODE_PKW." + t.ErrorCode;
                        this._hallScript.callPopUpBox(e, void 0)
                    }))
                }), (() => {
                    this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                    }))
                }))
            } else e && e instanceof Function && e()
        }
        onBackClicked() {
            g.isNative && g.os === g.OS.ANDROID && D.getInstance().removeBackFunction("CardCollectionPrefab"), this._hallScript.blockLayer.active = !0, this._hallScript.movePageToRight(this.node), setTimeout((() => {
                this.resetPage(), this._hallScript.blockLayer.active = !1
            }), 1100 * this._hallScript.pageActionSpeed)
        }
        handleReplay(t) {
            this._hallScript.showLoading(), this.getGameResultDetail(this.dataList[t], (() => {
                this.refreshPlayersName(this.dataList[t], (() => {
                    this.handleReplaySetPage(this.dataList[t])
                }))
            }))
        }
        handleReplaySetPage(t) {
            let e = [t];
            cc_mtt.vv.DataManager.currentFavouriteResultId = t.UserFavouriteRoundId, cc_mtt.vv.DataManager.replayRecord = e, cc_mtt.vv.DataManager.replayGameResultDetail = this._currentGameResultDetail, t.GameMode === v.commonProto.MTT_GAME_MODE.PP ? cc_mtt.vv.AssetsManager.loadScene(L.SCENE_NAME.PINEAPPLE_REPLAY) : cc_mtt.vv.AssetsManager.loadScene(L.SCENE_NAME.HOLDEM_REPLAY)
        }
        refreshPlayersName(t, e) {
            let i = [];
            if (t.GameMode == v.commonProto.MTT_GAME_MODE.PP) i = Object.keys(t.GameRoundData.players), y.requestPlayersNickName(i, (i => {
                if (i) {
                    let o = Object.keys(i);
                    for (let e = 0; e < o.length; e++) t.GameRoundData.players[o[e]].userName = i[o[e]];
                    e()
                }
            }), (() => {
                e()
            }));
            else {
                let o = Object.keys(t.GameRoundData.Players);
                i = i.concat(o.map((e => t.GameRoundData.Players[e].userId))), i.length > 0 ? y.requestPlayersNickName(i, (i => {
                    if (i) {
                        let o = Object.keys(t.GameRoundData.Players);
                        for (let e = 0; e < o.length; e++) {
                            let s = t.GameRoundData.Players[o[e]].userId;
                            i[s] && (t.GameRoundData.Players[o[e]].nickname = i[s])
                        }
                        e()
                    }
                }), (() => {
                    e()
                })) : e()
            }
        }
    }).prototype, "backButton", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = e(O.prototype, "scrollView", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(O.prototype, "tuplePrefab", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(O.prototype, "emptyMessage", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = O)) || M));
    o._RF.pop()
}