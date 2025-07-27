import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as y from "./observer.js";
import * as m from "./SignUpWithToolPopUp.js";
import * as _ from "./Translator.js";
import * as P from "./mttconfig.js";
import * as g from "./Pb.js";
import * as d from "./ResourcesLoader.js";
import * as O from "./FormatParser.js";
import * as L from "./Holdem_Basic_Item.js";
import * as T from "./LanguageManager.js";
import * as v from "./SignUpBoxProperty.js";

function main() {
    var b, f, D, S, E, N, C, M, U, I;
    a._RF.push({}, "ae846ak/wBDUrCJhCe1g5Aa", "Holdem_PlayerSeat_ts", void 0);
    const {
        ccclass: A,
        property: w
    } = n;
    e("Holdem_PlayerSeat", (b = w(r), f = w(r), D = w(i), S = w(i), A(E = y((C = t((N = class extends L {
        constructor(...e) {
            super(...e), o(this, "emptyNode", C, this), o(this, "seatNode", M, this), o(this, "seatEmptyLabel", U, this), o(this, "sitDownLabel", I, this), this._hasPlayer = !1, this._createdPopUp = null, this._index = 0, this.player = void 0
        }
        get hasPlayer() {
            return this._hasPlayer
        }
        set hasPlayer(e) {
            this._hasPlayer = e, s(this.node).to(.2, {
                scale: e ? new l(.2, 0, 0) : new l(.2, 1, 1)
            }).start()
        }
        get enableSeat() {
            return !(!this.emptyNode || !this.seatNode) && this.seatNode.active
        }
        set enableSeat(e) {
            this.emptyNode && this.seatNode && (this.emptyNode.active = !e, this.seatNode.active = e)
        }
        onDestroy() {}
        onLoad() {
            this.enableSeat = !0, this.seatNode.on(p.EventType.CLICK, this.onClickSeat.bind(this)), this.seatEmptyLabel.string = T.t("HOLDEM.SEAT_EMPTY"), this.sitDownLabel.string = T.t("HOLDEM.SIT_DOWN")
        }
        removeClick() {
            this.seatNode.getComponent(p).interactable = !1
        }
        removeTakeInPopUp() {
            this._createdPopUp && (this._createdPopUp.active = !1)
        }
        onClickSeat() {
            cc_mtt.vv.DataManager.updateToolList((() => {
                if (cc_mtt.vv.ConsoleLog.log("onClickSeat updateToolList ", this.hasPlayer, this.player.room.hasPopupJoinDialog), !this.hasPlayer && !this.player.room.hasPopupJoinDialog) {
                    if (this.player.room.hasPopupJoinDialog = !0, this.player.room.store.minTakein != this.player.room.store.maxTakein) this.player.room.hasPopupJoinDialog = !1, cc_mtt.vv.ConsoleLog.log("tryShowMoreCoinBoxHoldem deprecated");
                    else {
                        let e = d.RES_PATH.PREFAB.COMMON.SIGNUP_WITH_TOOLS_BLOCKER,
                            t = cc_mtt.vv.DataManager.gameMode == P.GAME_LEVEL_LIST_ID.SNG ? P.GAME_TO_TOOL_ID.SNG : P.GAME_TO_TOOL_ID.AOF;
                        cc_mtt.vv.ConsoleLog.log("join game mode ", cc_mtt.vv.DataManager.gameMode, t);
                        const o = () => {
                            cc_mtt.vv.AssetsManager.loadRes(e, c, ((e, a) => {
                                let r = h(a),
                                    i = r.getComponent(m);
                                r.parent = this.holdemRoom.node.parent;
                                let n = this.player.room.store.srvFee + this.player.room.store.regFee;
                                this._createdPopUp = r;
                                let s = new v(_("HOLDEM.JOIN_TOURNAMENT"), n, t, P.SIGN_UP_OPTIONS.all, this.player.room.store.getCurrencyType(), null, [], this.player.room.store.getDisplayCurrencyType(), this.player.room.store.getExchangeRate());
                                i.callPopUp(s, (e => {
                                    let t = e ? e.Id : 0;
                                    this.handleCoupon(e, (() => {
                                        if (!e && cc_mtt.vv.DataManager.userData.Gold < n) this.player.room.store.handleNoMoney();
                                        else {
                                            let o = e && e.Type === g.commonProto.TOOL_TYPE.coupon ? e.Value : n;
                                            this.player.room.store.SitDown(this._index + 1, o, t)
                                        }
                                    }), (() => {
                                        o()
                                    }), n), this.player.room.hasPopupJoinDialog = !1
                                }), (() => {
                                    this.player.room.hasPopupJoinDialog = !1
                                }))
                            }))
                        };
                        o()
                    }
                }
            }), !1)
        }
        handleCoupon(e, t, o, a) {
            if (cc_mtt.vv.ConsoleLog.log("PAT0115 tool", e), e && e.Type === g.commonProto.TOOL_TYPE.coupon && e.Value != a) {
                let r = "",
                    i = O.DisplayGold(e.Value, 2);
                i > a ? r = "POPUP_HINTS.HIGHER_COUPON_VALUE" : (cc_mtt.vv.ConsoleLog.log("PAT0115 tool", a, e.Value), r = {
                    Translation: "POPUP_HINTS.LOWER_COUPON_VALUE",
                    payload: e => u.formatStr(_(e), i, a - i)
                }), this.callPopUpBox(r, (() => {
                    a - e.Value > cc_mtt.vv.DataManager.userData.Gold ? this.player.room.store.handleNoMoney() : t instanceof Function && t(e)
                }), (() => {
                    o instanceof Function && o()
                }), "POPUP_TITLE.JOIN_TOURNAMENT")
            } else t instanceof Function && t(e)
        }
        callPopUpBox(e, t, o, a) {
            this.holdemRoom.dialogController.showDialogBox(a, e, !1, [{
                type: 1,
                text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                callback: o
            }, {
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: t
            }])
        }
    }).prototype, "emptyNode", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(N.prototype, "seatNode", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(N.prototype, "seatEmptyLabel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(N.prototype, "sitDownLabel", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), t(N.prototype, "hasPlayer", [w], Object.getOwnPropertyDescriptor(N.prototype, "hasPlayer"), N.prototype), t(N.prototype, "enableSeat", [w], Object.getOwnPropertyDescriptor(N.prototype, "enableSeat"), N.prototype), E = N)) || E) || E));
    a._RF.pop()
}