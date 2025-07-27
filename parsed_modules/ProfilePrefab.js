import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as P from "./cc.js";
import * as _ from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./ImpokerHall.js";
import * as f from "./mttconfig.js";
import * as b from "./mttconfig.js";
import * as S from "./HistoryPrefab.js";
import * as v from "./CardCollectionPrefab.js";
import * as y from "./BagPrefab.js";
import * as C from "./AgentPrefabPage.js";
import * as L from "./NodePage.js";
import * as T from "./GiftPrefab.js";
import * as k from "./worldWebsocket.js";
import * as B from "./JoinedGameTuple.js";
import * as M from "./Pb.js";
import * as E from "./httpApis.js";
import * as G from "./Translator.js";
import * as A from "./MttHall.js";
import * as I from "./MttPrefab.js";
import * as w from "./LoadingBlocker.js";
import * as D from "./SettingPrefab.js";
import * as N from "./AndroidBackButton.js";

function main() {
    var H, O, R, z, J, F, U, V, q, j, W, x, Y, K, Q, X, Z, $, tt, et, it, at, nt, ot, lt, rt, st, ct, ht, gt, ut, pt, Pt, _t, mt, dt, ft, bt, St, vt, yt, Ct, Lt, Tt, kt, Bt;
    a._RF.push({}, "97de05NvHtDPoiOE2fH9DdE", "ProfilePrefab", void 0);
    const {
        ccclass: Mt,
        property: Et
    } = h;
    t("ProfilePrefab", (H = Et(n), O = Et(o), R = Et(o), z = Et(l), J = Et(l), F = Et(l), U = Et(l), V = Et(l), q = Et(l), j = Et(l), W = Et(r), x = Et(r), Y = Et(r), K = Et(r), Q = Et(r), X = Et(r), Z = Et(r), $ = Et(s), tt = Et(o), et = Et(c), it = Et(s), at = Et(s), Mt((lt = e((ot = class extends g {
        constructor(...t) {
            super(...t), i(this, "avatar", lt, this), i(this, "nickName", rt, this), i(this, "userId", st, this), i(this, "personalSettingButton", ct, this), i(this, "historyButton", ht, this), i(this, "cardCollectionButton", gt, this), i(this, "bagButton", ut, this), i(this, "agentButton", pt, this), i(this, "giftButton", Pt, this), i(this, "settingButton", _t, this), i(this, "personalSettingPrefab", mt, this), i(this, "historyPrefab", dt, this), i(this, "cardCollectionPrefab", ft, this), i(this, "bagPrefab", bt, this), i(this, "agentPrefab", St, this), i(this, "giftPrefab", vt, this), i(this, "settingPrefab", yt, this), i(this, "newBagsHint", Ct, this), i(this, "newBagsNum", Lt, this), i(this, "scrollView", Tt, this), i(this, "joinedGameNode", kt, this), i(this, "joinedGameTuple", Bt, this), this.__hallScript = void 0, this._personalSettingPage = null, this._historyPage = null, this._cardCollectionPage = null, this._bagPage = null, this._agentPage = null, this._giftPage = null, this._settingPage = null, this._avatarUrl = "", this._tuples = []
        }
        get _hallScript() {
            return this.__hallScript || (this.__hallScript = u.getScene().getComponentInChildren(d)), this.__hallScript
        }
        onDestroy() {
            L.releaseImage(this._avatarUrl)
        }
        onDisable() {
            this.resetPage()
        }
        onEnable() {
            this.setPage()
        }
        onLoad() {
            this.updateUserInfo()
        }
        start() {
            this.node.on(s.EventType.TOUCH_END, (() => {
                this.onBackClicked()
            })), this.node.on(f.clickJoinedGameEvent, (t => {
                this.handleJoinedGameClickedEvent(t.getUserData()), t.propagationStopped = !0
            }))
        }
        updateUserInfo() {
            const {
                DataManager: t
            } = cc_mtt.vv, {
                AssetsManager: e
            } = cc_mtt.vv;
            this._avatarUrl = e.getAvatarUrl(t.avatarId, {
                isThumbnails: !1,
                timestamp: Date.now()
            }), e.loadWebImage(this.avatar, this._avatarUrl), this.nickName.string = t.userData.Nickname, this.userId.string = G("PROFILE.ID") + t.userId
        }
        requestJoinedGame(t) {
            k.checkNetwork("requestJoinedGame") ? t([]) : cc_mtt.vv.DataManager.worldNetwork.requestJoinedGame({}, (e => {
                t(e.CurrentGames)
            }))
        }
        setPage() {
            cc_mtt.vv.ConsoleLog.log("profile setPage"), this.agentButton.node.active = cc_mtt.vv.DataManager.loginData.OwnAssociationId > 0, this.giftButton.node.active = cc_mtt.vv.DataManager.loginData.OwnAssociationId > 0 && 0 === cc_mtt.vv.DataManager.loginData.OwnParentAssociationId, this.checkForNewBags(), this.scrollView.scrollToTop(.01), this.requestJoinedGame((t => {
                p(this) && this.node.active && this.handleJoinedGame(t.length > 0, t)
            }))
        }
        resetPage() {
            this.handleJoinedGame(!1)
        }
        callMttHall(t) {
            let e = this._hallScript._mttPage.getComponent(I),
                i = {
                    returnPage: this._hallScript.hallLayer,
                    returnCallback: () => {}
                };
            e.handleMttHallCalling(t.SngMttLevelId, (() => {}), i)
        }
        checkBagPagesActive() {
            return this._bagPage && this._bagPage.active
        }
        checkForNewBags() {
            let t = cc_mtt.vv.DataManager.newBagsCount;
            this.newBagsHint.active = t > 0, t > 0 && (this.newBagsNum.string = t > 99 ? "99+" : t.toString())
        }
        handleJoinedGameClickedEvent(t) {
            this._hallScript.showLoading(), cc_mtt.vv.ConsoleLog.log("handleJoinedGameClickedEvent");
            const e = () => {
                let e, i, a;
                switch (e = t.GameMode, t.Category) {
                    case M.commonProto.GAME_CATEGORY.LOOP_PP:
                        e = M.commonProto.MTT_GAME_MODE.PP, i = b.GAME_LEVEL_LIST_ID.PINEAPPLE_ROLL, a = t.SngMttLevelId;
                        break;
                    case M.commonProto.GAME_CATEGORY.GEN_PP:
                        e = M.commonProto.MTT_GAME_MODE.PP, i = b.GAME_LEVEL_LIST_ID.PINEAPPLE_NORMAL, a = t.RoomId;
                        break;
                    case M.commonProto.GAME_CATEGORY.SNG:
                        i = b.GAME_LEVEL_LIST_ID.SNG, a = t.RoomId;
                        break;
                    case M.commonProto.GAME_CATEGORY.SNG_AOF:
                        i = b.GAME_LEVEL_LIST_ID.AOF, a = t.RoomId;
                        break;
                    case M.commonProto.GAME_CATEGORY.MTT:
                        i = b.GAME_LEVEL_LIST_ID.MTT, a = t.SngMttLevelId
                }
                this._hallScript.callGameView(e, i, a, 0, 0, !0)
            };
            if (t.Category === M.commonProto.GAME_CATEGORY.MTT) {
                const i = () => {
                        this._hallScript.hidLoading((() => {
                            this._hallScript.callPopUpBox("POPUP_HINTS.TOURNAMENT_END", void 0)
                        }))
                    },
                    a = (i, a) => {
                        i <= 0 || a <= 0 ? this.callMttHall(t) : e()
                    };
                E.requestMttTournamentStatus(t.SngMttLevelId, (e => {
                    if (e)
                        if (e.Status === M.commonProto.MTT_GAME_STATUS.ENDED) i();
                        else if (e.IsPreparing) a(0, 1);
                    else {
                        let i = new M.commonProto.MttTournamentPlayersRequest;
                        i.UserId = cc_mtt.vv.DataManager.userId, i.TournamentId = t.SngMttLevelId, E.requestMttTournamentPlayers(i, (t => {
                            if (t && !t.ErrorCode) {
                                cc_mtt.vv.ConsoleLog.log("profile requestMttTournamentPlayers:", t.PlayersDetail.length);
                                let i = t.PlayersDetail.findIndex((t => t.UserId == cc_mtt.vv.DataManager.userId));
                                a(e.Status, i >= 0 ? t.PlayersDetail[i].JoinStatus : 0)
                            } else {
                                let t = A.prototype.getMyJoinStatus();
                                a(e.Status, t)
                            }
                        }), (() => {
                            let t = A.prototype.getMyJoinStatus();
                            a(e.Status, t)
                        }))
                    } else cc_mtt.vv.ConsoleLog.log("profile requestMttTournamentStatus:no data response"), this._hallScript.hidLoading()
                }), (t => {
                    this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", void 0)
                    }))
                }))
            } else e()
        }
        handleJoinedGame(t, e) {
            this.joinedGameNode.active = t, t ? this.addJoinedTuples(e) : this.removeJoinedTuples()
        }
        addJoinedTuples(t) {
            this.joinedGameTuple.getComponent(B).setInfo(t[0]), this.removeJoinedTuples();
            for (let e = 1; e < t.length; e++) {
                let i = P(this.joinedGameTuple);
                i.parent = this.joinedGameNode, i.getComponent(B).setInfo(t[e]), this._tuples.push(i)
            }
        }
        removeJoinedTuples() {
            for (; this._tuples.length > 0;) this._tuples.pop().destroy()
        }
        onBackClicked() {
            _.isNative && _.os === _.OS.ANDROID && N.getInstance().removeBackFunction("ProfilePrefab"), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToLeft(this.node)
        }
        onPersonalSettingClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._personalSettingPage || (this._personalSettingPage = P(this.personalSettingPrefab), this._personalSettingPage.parent = this._hallScript.layers[0]), this._hallScript.movePageFromRight(this._personalSettingPage), setTimeout((() => {
                this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
        createHistoryPage(t, e = !0) {
            if (this._historyPage || (this._historyPage = P(this.historyPrefab), this._historyPage.parent = t.layers[0]), this._historyPage.active = !1, e) return this._historyPage.getComponent(S)
        }
        onHistoryClicked(t, e = !1) {
            this._hallScript.controlHallBlockLayer(!0, this.name), this.createHistoryPage(this._hallScript, !1), this._hallScript.movePageFromRight(this._historyPage, this._hallScript.hallLayer, !0, e, (() => {
                setTimeout((() => {
                    this._historyPage.getComponent(S).setPage(t), this._hallScript.controlHallBlockLayer(!1, this.name)
                }), 100 * cc_mtt.vv.DataManager.pageActionSpeed)
            }))
        }
        onCardCollectionClicked(t = !1) {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._cardCollectionPage || (this._cardCollectionPage = P(this.cardCollectionPrefab), this._cardCollectionPage.parent = this._hallScript.layers[0]), this._hallScript.movePageFromRight(this._cardCollectionPage, this._hallScript.hallLayer, !0, t), setTimeout((() => {
                this._cardCollectionPage.getComponent(v).setPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
        onBagClicked(t, e = !1) {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._bagPage || (this._bagPage = P(this.bagPrefab), this._bagPage.parent = this._hallScript.layers[0]), this._hallScript.movePageFromRight(this._bagPage, this._hallScript.hallLayer, !0, e), setTimeout((() => {
                this._bagPage.getComponent(y).setPage((() => {
                    t && t instanceof Function && t()
                })), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
        onAgentClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), w.show("ProfilePrefab onAgentClicked"), this._hallScript.showLoading(), this._agentPage || (this._agentPage = P(this.agentPrefab), this._agentPage.parent = this._hallScript.layers[0]), this._agentPage.getComponent(C).setPage().then((() => {
                this._hallScript.hidLoading((() => {
                    this._hallScript.movePageFromRight(this._agentPage), setTimeout((() => {
                        this._hallScript.controlHallBlockLayer(!1, this.name)
                    }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
                })), w.hide("ProfilePrefab onAgentClicked")
            })).catch((t => {
                this._agentPage.active = !1, this._hallScript.controlHallBlockLayer(!1, this.name), this._hallScript.hidLoading((() => {
                    this._hallScript.callPopUpBox(t, void 0)
                })), w.hide("ProfilePrefab onAgentClicked")
            }))
        }
        showGiftPage() {
            this._hallScript.controlHallBlockLayer(!0, this.name), m(this.node).sequence(m().call((() => {
                this._giftPage || (this._giftPage = P(this.giftPrefab), this._giftPage.parent = this._hallScript.layers[0])
            })), m().call((() => {
                this._hallScript.movePageFromRight(this._giftPage), setTimeout((() => {
                    this._giftPage.getComponent(T).setPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
                }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
            }))).start()
        }
        onGiftClicked() {
            cc_mtt.vv.ConsoleLog.log("onGiftClicked", cc_mtt.vv.DataManager.userData.WithdrawPassword.length);
            let t = G("WITHDRAW_POPUP.TITLE.GIFT");
            this._hallScript.checkIsThereAnyPswSet(t, (() => {
                this.showGiftPage()
            }))
        }
        onTransferClicked() {}
        onSettingClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._settingPage || (this._settingPage = P(this.settingPrefab), this._settingPage.parent = this._hallScript.layers[0]), this._hallScript.movePageFromRight(this._settingPage);
            let t = this._settingPage.getComponent(D);
            _.isNative && _.os === _.OS.ANDROID && N.getInstance().addBackFunction("SettingPrefab", t.onBackClicked.bind(t)), setTimeout((() => {
                this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
    }).prototype, "avatar", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(ot.prototype, "nickName", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(ot.prototype, "userId", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(ot.prototype, "personalSettingButton", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(ot.prototype, "historyButton", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(ot.prototype, "cardCollectionButton", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(ot.prototype, "bagButton", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(ot.prototype, "agentButton", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = e(ot.prototype, "giftButton", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(ot.prototype, "settingButton", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(ot.prototype, "personalSettingPrefab", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(ot.prototype, "historyPrefab", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(ot.prototype, "cardCollectionPrefab", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(ot.prototype, "bagPrefab", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = e(ot.prototype, "agentPrefab", [Q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = e(ot.prototype, "giftPrefab", [X], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(ot.prototype, "settingPrefab", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = e(ot.prototype, "newBagsHint", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = e(ot.prototype, "newBagsNum", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = e(ot.prototype, "scrollView", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(ot.prototype, "joinedGameNode", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = e(ot.prototype, "joinedGameTuple", [at], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = ot)) || nt));
    a._RF.pop()
}