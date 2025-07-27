import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as y from "./ws_protocol.mjs_cjs=&original=.js";
import * as C from "./FormatParser.js";
import * as b from "./MTTConnector.js";
import * as f from "./GameViewLoader.js";
import * as _ from "./httpApis.js";
import * as L from "./Pb.js";
import * as T from "./Translator.js";
import * as w from "./CurrencyValue.js";
import * as P from "./SngEvent.js";
import * as E from "./cv.js";
import * as I from "./MultipleGame.js";
import * as M from "./MultipleRoomManager.js";
import * as R from "./RoomManager.js";
import * as v from "./RoomManager.js";
import * as k from "./Enum.js";
import * as B from "./index.mjs_cjs=&original=.js";

function main() {
    var S, U, D, G, O, A, N, z, x, F, j, q, V, J, H, W, K, $, X, Y, Q, Z, ee, te, oe, ne, ie, re, ae, se, le, ue, ce, he, pe;
    n._RF.push({}, "32daciE8UlDy6zPIXQK8cvQ", "JackpotSngSignUpPopUp", void 0);
    const {
        ccclass: ge,
        property: me
    } = s;
    let de = e("Page", function(e) {
        return e[e.SignUp = 0] = "SignUp", e[e.Error = 1] = "Error", e
    }({}));
    e("default", (S = me(i), U = me(i), D = me(i), G = me(T), O = me(r), A = me(r), N = me(r), z = me(a), x = me(a), F = me(i), j = me(i), q = me(r), V = me(T), J = me(T), H = me(r), W = me(r), ge(((pe = class e extends l {
        constructor(...e) {
            super(...e), o(this, "popUpNode", X, this), o(this, "signUpPage", Y, this), o(this, "errorPage", Q, this), o(this, "buyInLabel", Z, this), o(this, "buyInMoneyLabel", ee, this), o(this, "buyInGoldLabel", te, this), o(this, "numOfGameLabel", oe, this), o(this, "numOfGamePlusButton", ne, this), o(this, "numOfGameMinusButton", ie, this), o(this, "paymentTicketRow", re, this), o(this, "paymentMoneyRow", ae, this), o(this, "paymentTicketLabel", se, this), o(this, "paymentMoneyLabel", le, this), o(this, "indicativeRateMoneyLabel", ue, this), o(this, "errorTitle", ce, this), o(this, "errorMessage", he, this), this.buyInLimit = 3, this.buyInCount = 0, this.popUpDuration = .1, this.currentAction = null, this.gameViewLoader = null, this.data = null, this.currency = R.USD, this.sngGameList = null, this.requestBuyInCallback = void 0, this.responseBuyInCallback = void 0, this._allowRegister = !0, this._isCheckingAccess = !1, this.showPromoOnBuyInClose = !1
        }
        init() {
            this.gameViewLoader = new b, C.instance.cv.resMgr.adaptWidget(this.node), this.switchPage(de.SignUp), this.paymentTicketRow.active = !1, this.paymentMoneyRow.active = !1, this.popUpNode.getComponent(u).updateLayout(), this.hide(!1), this.showPromoOnBuyInClose = !0
        }
        start() {}
        getAvailableRoomsToJoin() {
            return M.getInstance().getAvailableRoomsToJoin()
        }
        onLoad() {
            this.buyInLimit = this.getAvailableRoomsToJoin(), P.MessageCenter.register("join_room_access_check_response", this._joinRoomAccessCheckResponse.bind(this), this.node)
        }
        onDestroy() {
            P.MessageCenter.unregister("join_room_access_check_response", this.node)
        }
        _joinRoomAccessCheckResponse(e) {
            e.error !== k.pb.Error.OK && (this._allowRegister = !0)
        }
        switchPage(e) {
            c(this.signUpPage) && c(this.errorPage) && c(this.popUpNode) && (this.signUpPage.active = e == de.SignUp, this.errorPage.active = e == de.Error, this.popUpNode.getComponent(u).updateLayout())
        }
        show(e = !0) {
            this._show(e), this.setBuyInCount(1)
        }
        _show(e = !0) {
            this._allowRegister = !0, this._isCheckingAccess = !1;
            const t = h(0, 0);
            this.node.active = !0, e || (p.stopAllByTarget(this.popUpNode), this.popUpNode.setPosition(t), this.currentAction = null)
        }
        setRequestBuyInCallBack(e) {
            this.requestBuyInCallback = e
        }
        setResponseBuyInCallBack(e, t = null) {
            this.responseBuyInCallback = e, this.sngGameList = t
        }
        hide(e = !0) {
            const t = h(0, -this.node.getComponent(g).height / 2 - this.popUpNode.getComponent(g).height);
            if (c(this.currentAction) && p.stopAllByTarget(this.popUpNode), e) {
                const e = m().sequence(m().to(this.popUpDuration, {
                    position: t
                }), m().call((() => this.node.active = !1)));
                this.currentAction = e.target(this.popUpNode).start()
            } else this.popUpNode.setPosition(t), this.node.active = !1, this.currentAction = null;
            this.showPromoOnBuyInClose && (e ? setTimeout((() => {
                P.authenticator.showDelayedPromo()
            }), 1e3 * this.popUpDuration) : P.authenticator.showDelayedPromo()), this.showPromoOnBuyInClose = !0
        }
        getBuyInLimit(e) {
            let t = 0,
                o = P.appConfig.getGameConfig().gameTablesConcurrent.sng - e;
            return o > 0 && (t = Math.min(o, this.getAvailableRoomsToJoin())), t
        }
        setTournamentData(e) {
            this.data = e
        }
        updateBuyInLimit(e) {
            this.buyInLimit = this.getBuyInLimit(e)
        }
        updateBuyInCount(e, t = 0) {
            this.buyInCount = 0 == this.buyInLimit ? 0 : t, this.setBuyIn(e)
        }
        setData(e, t, o = 0) {
            this.setTournamentData(e), this.updateBuyInLimit(t), this.updateBuyInCount(e.Detail.RegFee, o)
        }
        getCurrencyRate() {
            var e;
            if (!this.data || !this.data.CurrencyRate) return 1;
            const t = null == (e = this.data.CurrencyRate.find((e => e.Currency == this.currency))) ? void 0 : e.Rate;
            return t || 1
        }
        setBuyIn(e) {
            this.setLabelMoney(this.buyInLabel, e)
        }
        setBuyInCount(e) {
            const t = cc_mtt.vv.DataManager.getSignUpToolsByRegFee(this.data.Detail.RegFee),
                o = null != this.data && null != this.data.Detail ? this.data.Detail.RegFee : 0;
            this.buyInCount = e, this.numOfGameLabel.string = e.toString(), this.numOfGameMinusButton.interactable = e > 1, this.numOfGamePlusButton.interactable = e < this.buyInLimit;
            const n = Math.min(t.length, e),
                i = e - n;
            if (n > 0) {
                var r;
                this.paymentTicketRow.active = !0;
                const e = null == (r = v[this.currency]) ? void 0 : r.symbol;
                this.paymentTicketLabel.string = n + " x " + e + o
            } else this.paymentTicketRow.active = !1;
            i > 0 ? (this.paymentMoneyRow.active = !0, this.updateCostLabel(o, i)) : this.paymentMoneyRow.active = !1, this.updateMxCost(o, e), this.popUpNode.getComponent(u).updateLayout()
        }
        updateMxCost(e, t) {
            this.indicativeRateMoneyLabel && this.indicativeRateMoneyLabel.node.activeInHierarchy && this.indicativeRateMoneyLabel.updateVal(y.ThousandPointFormat(e * t), R.USD)
        }
        updateCostLabel(e, t) {
            const o = e * t;
            this.setLabelMoney(this.paymentMoneyLabel, o)
        }
        setLabelMoney(e, t) {
            e.updateVal(y.ThousandPointFormat(t), this.currency, null, this.currency)
        }
        onClickNumOfGameMinus() {
            this.buyInCount--, this.setBuyInCount(this.buyInCount)
        }
        onClickNumOfGamePlus() {
            this.buyInCount++, this.setBuyInCount(this.buyInCount)
        }
        showLimitErrorPopup(e) {
            const t = L("GLOBAL_SPINS.BUY_IN_POPUP.MULTI_TABLE_LIMIT_TITLE");
            this.switchPage(de.Error), this.setErrorMessage(t, e)
        }
        onClickSignUp() {
            var t, o;
            if (!this._allowRegister) return;
            if (null != (t = P.geoComplyManager) && t.isGeoTokenRequired()) return void(null == (o = P.geoComplyManager) || o.requestValidToken(((e = "") => {
                e && this.onClickSignUp()
            }), (() => {})));
            if (P.dataHandler.getUserData().showWebAppTouristPopup()) return;
            if (P.dataHandler.getUserData().showTouristLimited()) return;
            if (P.dataHandler.getUserData().showNDRPVerificationReviewPopup()) return;
            if (!b.checkValidOpeningGame(I.Sng, (e => {
                    this.showLimitErrorPopup(e)
                }))) return void(P.appConfig.isWebApp && (() => {
                if (P.appConfig.isWebApp) {
                    const e = P.appConfig.getGameConfig().gameTablesConcurrent.maxConcurrent;
                    if (P.getTotalOpeningGames() >= e) {
                        let t = P.config.getStringData("Max_playing_table_warning_title"),
                            o = P.StringTools.formatC(P.config.getStringData("Max_concurrent_game_tables_mtt_web"), e),
                            n = P.Enum.PopUpIconType.PhoneWarning;
                        P.popUp.showMsg({
                            subtitle: t,
                            txt: o,
                            iconType: n
                        })
                    }
                }
            })());
            const n = P.appConfig.isLandscapeLayout;
            this._allowRegister = !1;
            const i = () => {
                P.popUp.showMsg({
                    title: P.config.getStringData("Get_User_Data_Error_Title"),
                    txt: P.config.getStringData("Something_Went_Wrong"),
                    msgType: P.Enum.ToastType.ToastTypeError,
                    onXCancelCallback: !0,
                    onXCancelBySureCallback: !0
                }), this._allowRegister = !0, this._isCheckingAccess = !1
            };
            P.worldNet.JoinRoomAccessCheck_Request(0, 0, (() => {
                this._isCheckingAccess = !1;
                let e = {};
                if (this.data.Detail.GpsLimit) {
                    var t;
                    let o = P.native.GetLocation(!0);
                    e = {
                        count: this.buyInCount,
                        levelId: this.data.Detail.Id,
                        lat: o.latitude,
                        lng: o.longitude,
                        IsDesktop: n,
                        geoComplianceToken: P.appConfig.getSecurityConfig().useGeoComply ? null == (t = P.geoComplyManager) ? void 0 : t.getGeoToken() : ""
                    }
                } else {
                    var o;
                    e = {
                        count: this.buyInCount,
                        levelId: this.data.Detail.Id,
                        IsDesktop: n,
                        geoComplianceToken: P.appConfig.getSecurityConfig().useGeoComply ? null == (o = P.geoComplyManager) ? void 0 : o.getGeoToken() : ""
                    }
                }
                this.requestEnterGame(e)
            })), this._isCheckingAccess = !0, this.scheduleOnce((() => {
                this._isCheckingAccess && i()
            }), e.timeOutCheckingAccess)
        }
        requestEnterGame(t) {
            var o;
            this._allowRegister = !1, f.requestEnterSngRoomLevel(_.mttPro.EnterSngRoomLevelReq.create(t)).then((o => {
                var n;
                if (o.code) {
                    if (this._allowRegister = !0, e.handleErrorCode(o, t, (() => {
                            this.requestEnterGame(t)
                        }), !1), o.code == P.Enum.ThirdPartyErrorCode.Mtt_Param_Error || o.code == P.Enum.ThirdPartyErrorCode.Sng_Max_Limit_Join) {
                        const e = P.appConfig.getGameConfig().gameTablesConcurrent.mtt,
                            t = d.formatStr(L("HALL.MTT_TABLE_LIMIT"), e);
                        this.showLimitErrorPopup(t)
                    } else o.code == _.commonProto.ErrorCode.Mtt_GeoComplianceToken_Check_Fail || o.code == _.commonProto.ErrorCode.Platform_Response_Error || (o.code == _.mttPro.Code.Sng_Buy_Part_Fail ? o.levelId && o.roomId.length >= 1 && this.enterGame(o, o.roomId.length) : e.showUnhandledErrorPopup(o, (e => {
                        this.showErrorDialog("", e)
                    })));
                    P.MessageCenter.send(w.GameStartError)
                } else P.appConfig.isLandscapeLayout && P.authenticator.showDelayedPromo(), this.enterGame(o, this.buyInCount);
                null == (n = this.responseBuyInCallback) || n.call(this, !o.code)
            })).catch((e => {
                var t, o;
                console.log("requestEnterSngRoomLevel error/timeout"), null == (t = this.sngGameList) || t.showNetworkErrorPopup(), null == (o = this.responseBuyInCallback) || o.call(this, !1)
            })), this.showPromoOnBuyInClose = !1, this.hide(), null == (o = this.requestBuyInCallback) || o.call(this, !0)
        }
        static handleErrorCode(t, o, n = null, i = !1) {
            const r = () => {
                P.authenticator.showDelayedPromo()
            };
            if (t.code == _.commonProto.ErrorCode.Platform_Response_Error) {
                const e = P.Enum.ThirdPartyErrorCode.MttErrorNotEnoughMoney,
                    t = L(`ERROR_CODE_PKW.${_.commonProto.ErrorCode.Platform_Response_Error}.${e}`);
                P.showOutOfFundsPopup(t, null, null, P.SHOP.RechargeClick)
            } else if (t.code == _.commonProto.ErrorCode.Mtt_GeoComplianceToken_Check_Fail) {
                var a;
                let e = B.Buffer.from(t.geoComplianceResult).toString("utf8");
                e = P.tryParseJSON(e) || {}, null == (a = P.geoComplyManager) || a.serverErrorHandler(e, null, n, null, {
                    ErrorType: "SngSignUpFailed",
                    ErrorCode: t.code.toString(),
                    ErrorDetails: JSON.stringify(e)
                })
            } else if (t.code == P.Enum.ThirdPartyErrorCode.Mtt_Param_Error || t.code == P.Enum.ThirdPartyErrorCode.Sng_Max_Limit_Join) {
                const e = P.appConfig.getGameConfig().gameTablesConcurrent.mtt,
                    t = d.formatStr(L("HALL.MTT_TABLE_LIMIT"), e);
                i && P.popUp.showMsg({
                    txt: t,
                    isTwoBtn: !1,
                    sureLabel: P.config.getStringData("OKAY"),
                    msgType: P.Enum.ToastType.ToastTypeDefault,
                    sureCallback: r,
                    cancelCallback: r
                })
            } else i && e.showUnhandledErrorPopup(t, (e => {
                P.popUp.showMsg({
                    txt: e,
                    isTwoBtn: !1,
                    sureLabel: P.config.getStringData("OKAY"),
                    msgType: P.Enum.ToastType.ToastTypeDefault,
                    sureCallback: r,
                    cancelCallback: r
                })
            }))
        }
        static showUnhandledErrorPopup(e, t) {
            let o = null,
                n = `ERROR_CODE_PKW.${e.code}`,
                i = L(n);
            null != i && "" != i && i !== n && (o = i), null == o && (o = L("MESSAGE_DIALOG_BLOCKER.ERROR_OCCUR"), o += `(ErrorCode: ${e.code})`), null == t || t(o)
        }
        showErrorDialog(e, t) {
            this.setErrorMessage(e, t), P.appConfig.isLandscapeLayout || (this.switchPage(de.Error), this.show())
        }
        enterGame(e, t) {
            P.appConfig.isLandscapeLayout || P.MessageCenter.send(w.ShowLoading), E.startSngGamesFromBuyin(e.roomId, e.levelId, t)
        }
        setErrorMessage(e, t) {
            e ? (this.errorTitle.string = e, this.errorTitle.node.active = !0) : this.errorTitle.node.active = !1, this.errorMessage.string = t
        }
    }).timeOutCheckingAccess = 5, X = t(($ = pe).prototype, "popUpNode", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t($.prototype, "signUpPage", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t($.prototype, "errorPage", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t($.prototype, "buyInLabel", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t($.prototype, "buyInMoneyLabel", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), te = t($.prototype, "buyInGoldLabel", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t($.prototype, "numOfGameLabel", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ne = t($.prototype, "numOfGamePlusButton", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ie = t($.prototype, "numOfGameMinusButton", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t($.prototype, "paymentTicketRow", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ae = t($.prototype, "paymentMoneyRow", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), se = t($.prototype, "paymentTicketLabel", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), le = t($.prototype, "paymentMoneyLabel", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ue = t($.prototype, "indicativeRateMoneyLabel", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ce = t($.prototype, "errorTitle", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), he = t($.prototype, "errorMessage", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = $)) || K));
    n._RF.pop()
}