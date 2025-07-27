import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as S from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as D from "./ObItem.js";
import * as y from "./cv.js";
import * as I from "./RecordData.js";
import * as T from "./Enum.js";
import * as C from "./CommonTools.js";
import * as E from "./StringTools.js";
import * as R from "./GameSceneInstance.js";
import * as x from "./HashMap.js";
import * as w from "./HandsRecordsManager.js";
import * as P from "./RecordType.js";

function main() {
    var v, G, N, H, A, M, B, k, L, U, O, z, F, V, W, j, X, q, K, Q, Z, J, Y, $, ee, te, ne;
    a._RF.push({}, "7343dleTwlPLrwkj4QXzXuO", "Audit", void 0);
    const {
        ccclass: ae,
        property: ie
    } = g;
    e("default", (v = ie(i), G = ie(i), N = ie(o), H = ie(o), A = ie(o), M = ie(o), B = ie(o), k = ie(r), L = ie(s), U = ie(c), O = ie(c), z = ie(l), ae(((ne = class e extends d {
        constructor(...e) {
            super(...e), n(this, "sure_btn", W, this), n(this, "cancel_btn", j, this), n(this, "expense_txt", X, this), n(this, "expense_money_txt", q, this), n(this, "des_txt", K, this), n(this, "pleaseChoose_txt", Q, this), n(this, "title_txt", Z, this), n(this, "email_EditBox", J, this), n(this, "head_Img", Y, this), this.obItemList = [], n(this, "obItemPrefab", $, this), n(this, "obViewPrefab", ee, this), n(this, "_pkObView", te, this), this._eDataSourceType = T.EDST_NONE, this.sourceGameScene = null, this._handRecord = null
        }
        static getSinglePrefabInst(t, n) {
            if (e._g_gameSceneShowing.has(n)) return e._g_gameSceneShowing.get(n);
            e._g_prefabInst || (e._g_prefabInst = new u);
            let a = null;
            e._g_prefabInst.size() > 0 && (a = e._g_prefabInst.get()), h(a) || (a = m(t));
            return (n.room.gameScene || C.instance.getParentScene(_, a)).getChildByUuid(a.uuid) || h(a, !0) || (a.active = !1, e._g_prefabInst.put(a), a = m(t)), a
        }
        async autoShow(t, n, a, i) {
            this.sourceGameScene = n, this.node.removeFromParent();
            let o = y.dataHandler.getUserData().auditGameuuid;
            var r;
            (o && (this._handRecord = await w.getInstance().getRecord(o, P.Cash)), e._g_gameSceneShowing.has(n) || e._g_gameSceneShowing.add(this.sourceGameScene, this.node), i && this.node.setSiblingIndex(i), t instanceof p && (t = y.config.getRootNodeOfScene(t) ?? t), t.getComponent(S).anchorPoint.equals(b.ZERO)) && (t = (null == n || null == (r = n.room) ? void 0 : r.gameScene) || t.scene);
            t.addChild(this.node), this.node.active = !0;
            let s = a || T.EDST_GAMEROOM;
            this.updateView(s), this.updateAuditMoney()
        }
        autoHide() {
            this.hide()
        }
        hide() {
            for (this.node.active = !1, e._g_prefabInst.put(this.node); e._g_prefabInst.size() > y.appConfig.getGameConfig().gameTablesConcurrent.cashGame;) {
                const t = e._g_prefabInst.get();
                h(t) && t.destroy()
            }
            e._g_gameSceneShowing.has(this.sourceGameScene) && e._g_gameSceneShowing.remove(this.sourceGameScene)
        }
        onLoad() {
            this.sure_btn.node.on(i.EventType.CLICK, (e => {
                y.AudioMgr.playButtonSound("button_click.mp3"), this.onClickSureBtn()
            }), this), this.cancel_btn.node.on(i.EventType.CLICK, (e => {
                y.AudioMgr.playButtonSound("button_click.mp3"), this.cancelAudit()
            }), this), this.email_EditBox.node.on(r.EventType.EDITING_DID_BEGAN, this._onEdtDidBegan, this), this.email_EditBox.node.on(r.EventType.EDITING_DID_BEGAN, this._onEdtDidEnded, this), this.email_EditBox.node.on(r.EventType.TEXT_CHANGED, this._onEdtTxtChanged, this), this.email_EditBox.node.on(r.EventType.EDITING_RETURN, this._onEdtReturn, this), this.onChangeLanguage(), y.MessageCenter.register(y.config.CHANGE_LANGUAGE, this.onChangeLanguage.bind(this), this.node)
        }
        onDestroy() {
            y.MessageCenter.unregister(y.config.CHANGE_LANGUAGE, this.node), e._g_gameSceneShowing.has(this.sourceGameScene) && e._g_gameSceneShowing.remove(this.sourceGameScene), 0 == e._g_gameSceneShowing.length && e._g_prefabInst && e._g_prefabInst.clear()
        }
        onChangeLanguage() {
            this.title_txt.string = y.config.getStringData("Audit_title_txt"), this.pleaseChoose_txt.string = y.config.getStringData("Audit_pleaseChoose_txt"), this.email_EditBox.placeholder = y.config.getStringData("Audit_email_text"), this.des_txt.string = y.StringTools.calculateAutoWrapString(this.des_txt.node, y.config.getStringData("Audit_des_txt")), this.expense_txt.string = E.getInstance().convertText(y.config.getStringData("Audit_expense_txt"), 1), this.setButtonTexts()
        }
        setButtonTexts() {
            this.cancel_btn.node.getChildByName("Label").getComponent(o).string = y.config.getStringData("Audit_cancel_button"), this.sure_btn.node.getChildByName("Label").getComponent(o).string = y.config.getStringData("AuditButton")
        }
        setData() {}
        start() {}
        onClickSureBtn() {
            var e;
            let t = y.currencyManager.getTextConvertedCurrencyWithSymbol(this.gameSceneInstance.gameData.tRoomData.currency.type, this.gameSceneInstance.gameData.tRoomData.currency.type, y.StringTools.serverGoldToShowNumber(y.dataHandler.getUserData().chargefee).toString()),
                n = y.StringTools.formatC(y.config.getStringData("UIGameSceneTips25"), t);
            const a = y.appConfig.isLandscapeLayout ? C.instance.getParentScene(_, this.node) : null == (e = this.gameSceneInstance) || null == (e = e.room) ? void 0 : e.gameScene;
            let i = this.email_EditBox.string;
            i.length > 0 && !y.StringTools.isEmailFormat(i) ? y.TT.showMsg(y.config.getStringData("AuditEmailTips"), y.Enum.ToastType.ToastTypeError, !1, !0, a) : y.dataHandler.getUserData().isfirst || y.dataHandler.getUserData().freecounts > 0 || y.dataHandler.getUserData().isgoldenough ? this.showConfirmationMessage(n) : (n = y.StringTools.formatC(y.config.getStringData("UIGameSceneTips24"), t), y.TP.showMsg(n, !0, this.gotoShop.bind(this), null, !1, !1, "", !1, o.HorizontalAlign.CENTER, !1, a))
        }
        showConfirmationMessage(e) {
            var t;
            this.hide();
            const n = y.appConfig.isLandscapeLayout ? C.instance.getParentScene(_, this.node) : null == (t = this.gameSceneInstance) || null == (t = t.room) ? void 0 : t.gameScene;
            y.TP.showMsg(e, !0, this.sureToAudit.bind(this), this.backFromConfirmationMessage.bind(this), !1, !1, y.config.getStringData("AuditReport_Confirmation_title"), !1, 0, !0, n)
        }
        backFromConfirmationMessage() {
            this.node.active = !0
        }
        sureToAudit() {
            const e = this.gameSceneInstance.gameData;
            let t = null;
            switch (this._eDataSourceType) {
                case T.EDST_NONE:
                case T.EDST_RECORD:
                case T.EDST_GAMEROOM:
                    t = e.tGameRecords.tPokerHandData;
                    break;
                case T.EDST_COLLECTION:
                    t = e.tCollectPokerMapData.tPokerHandData
            }
            let n = this._handRecord ? this._handRecord.customData.roomId : t.nRoomID,
                a = this._handRecord ? this._handRecord.customData.clubId : t.nClubID,
                i = this._handRecord ? this._handRecord.customData.roomUUIDjs : Number(t.sRoomUUID),
                o = this._handRecord ? this._handRecord.customData.cashGameId : Number(t.sGameUUID),
                r = [];
            for (let e = 0; e < this.obItemList.length; e++) {
                let t = this.obItemList[e].getComponent(D);
                t.headIsSelect() && r.push(t.playerData.nPlayerID)
            }
            if (r.length < 2) {
                var s;
                const e = y.appConfig.isLandscapeLayout ? C.instance.getParentScene(_, this.node) : null == (s = this.gameSceneInstance) || null == (s = s.room) ? void 0 : s.gameScene;
                return y.TT.showMsg(y.config.getStringData("AuditMustTwoPersons"), y.Enum.ToastType.ToastTypeError, !0, !0, e), void(this.node.active = !0)
            }
            let c = this.email_EditBox.string;
            this.hide(), y.worldNet.RequestFairPlayReport(n, a, i, o, r, c, "nice", e.tRoomData.u32GameID)
        }
        cancelAudit() {
            this.hide()
        }
        gotoShop() {
            this.cancelAudit(), y.SHOP.RechargeClick()
        }
        updateAuditMoney() {
            if (1 == y.dataHandler.getUserData().isfirst) this.expense_money_txt.string = E.getInstance().convertText(y.config.getStringData("UIGameSceneTips23"), 1);
            else if (y.dataHandler.getUserData().freecounts > 0) {
                let e = y.dataHandler.getUserData().freecounts,
                    t = E.getInstance().convertText(y.StringTools.formatC(y.config.getStringData("UIGameSceneTips27"), e), 1);
                this.expense_money_txt.string = t
            } else {
                let e = y.currencyManager.getTextConvertedCurrencyWithSymbol(this.gameSceneInstance.gameData.tRoomData.currency.type, this.gameSceneInstance.gameData.tRoomData.currency.type, y.StringTools.serverGoldToShowNumber(y.dataHandler.getUserData().chargefee).toString()),
                    t = y.StringTools.formatC(y.config.getStringData("UIGameSceneTips22"), e);
                this.expense_money_txt.string = t
            }
        }
        getPokerHandDataFromMapCache() {
            let e = y.dataHandler.getUserData().auditGameuuid;
            const t = this.gameSceneInstance.gameData;
            let n = [],
                a = (null == t ? void 0 : t.tGameRecords.mHandMapCache).get(e);
            if (e.length <= 0 || null == a) return n;
            let i = a.game_record,
                o = i.records ? i.records : [];
            for (let e = 0; e < o.length; ++e) {
                let t = new I;
                t.sPlayerName = y.String(o[e].player_name), t.sPlayerHead = y.String(o[e].player_head), t.plat = y.Number(o[e].plat), t.nPlayerBettingRoundBet = y.Number(o[e].player_betting_round_bet), t.nWinBet = y.Number(o[e].win_bet), t.nInsuranceBet = y.Number(o[e].insurance_bet_amount), t.nInsuranceAmount = y.Number(o[e].insurance_winbet), t.nPlayerID = y.Number(o[e].playerid), t.bMuck = Boolean(o[e].is_muck), t.bActiveShow = Boolean(o[e].is_active_show), t.bForceShowDown = Boolean(o[e].is_force_show), n.push(t)
            }
            return n
        }
        getPokerHandDataFromHandRecords() {
            let e = [];
            if (null == this._handRecord) return e;
            let t = this._handRecord.customData.players;
            for (let n = 0; n < t.length; ++n) {
                let a = new I;
                a.sPlayerName = y.String(t[n].name), a.sPlayerHead = y.String(t[n].avatarUrl), a.plat = y.Number(t[n].plat), a.nWinBet = y.Number(t[n].winningPot), a.nPlayerID = y.Number(t[n].uid), e.push(a)
            }
            return e
        }
        updateView(e) {
            this._eDataSourceType = e;
            let t = 0,
                n = [];
            const a = this.gameSceneInstance.gameData;
            switch (this._eDataSourceType) {
                case T.EDST_NONE:
                case T.EDST_RECORD:
                case T.EDST_GAMEROOM: {
                    let e = this.getPokerHandDataFromHandRecords();
                    0 == e.length && (e = this.getPokerHandDataFromMapCache()), e.length > 0 ? (t = e.length, n = e) : (t = a.tGameRecords.tPokerHandData.vPlayerRecords.length, n = a.tGameRecords.tPokerHandData.vPlayerRecords)
                }
                break;
                case T.EDST_COLLECTION:
                    t = a.tCollectPokerMapData.tPokerHandData.vPlayerRecords.length, n = a.tCollectPokerMapData.tPokerHandData.vPlayerRecords;
                    break;
                default:
                    t = a.tGameRecords.tPokerHandData.vPlayerRecords.length, n = a.tGameRecords.tPokerHandData.vPlayerRecords
            }
            if (this.obItemList.length > 0)
                for (let e = 0; e < this.obItemList.length; e++) this.obItemList[e].removeFromParent();
            this.obItemList = [];
            for (let e = 0; e < t; e++) {
                let t = m(this.obItemPrefab);
                this.setupItemPosition(t, e, .8), t.getComponent(D).setData(n[e]), this.head_Img.node.addChild(t), this.obItemList.push(t)
            }
            1 == y.dataHandler.getUserData().isfirst ? this.des_txt.node.active = !1 : (this.expense_txt.node.active = !0, this.expense_money_txt.node.active = !0)
        }
        setupItemPosition(e, t, n) {
            e.setPosition(f(t % 5 * e.getContentSize().width * n + 30, this.head_Img.node.getComponent(S).contentSize.height - (Math.floor(t / 5) + 1) * e.getContentSize().height * n - 450, 0)), e.setScale(n, n, 1)
        }
        _onEdtDidBegan(e) {
            console.log("editing - did_began")
        }
        _onEdtDidEnded(e) {
            console.log("editing - did_ended")
        }
        _onEdtTxtChanged(e) {
            console.log("editing - txt_changed = ")
        }
        _onEdtReturn(e) {
            console.log("editing - return")
        }
        get gameSceneInstance() {
            return this.sourceGameScene || R.getInstance(null == this ? void 0 : this.node)
        }
    })._g_prefabInst = null, ne._g_gameSceneShowing = new x, W = t((V = ne).prototype, "sure_btn", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(V.prototype, "cancel_btn", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(V.prototype, "expense_txt", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(V.prototype, "expense_money_txt", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(V.prototype, "des_txt", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(V.prototype, "pleaseChoose_txt", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(V.prototype, "title_txt", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(V.prototype, "email_EditBox", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(V.prototype, "head_Img", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(V.prototype, "obItemPrefab", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(V.prototype, "obViewPrefab", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t(V.prototype, "_pkObView", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = V)) || F));
    a._RF.pop()
}