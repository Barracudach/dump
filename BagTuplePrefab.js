import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as b from "./Translator.js";
import * as E from "./ImpokerHall.js";
import * as _ from "./BagPrefab.js";
import * as B from "./NodePage.js";
import * as f from "./Pb.js";
import * as T from "./NodeTools.js";

function main() {
    var D, C, L, O, P, S, y, A, I, N, v, G, w, U, x, k, R, Y, z, M, F, K, H, $, X, V, j, W;
    i._RF.push({}, "30d39n55oNFsbDEitTGjIpI", "BagTuplePrefab", void 0);
    const {
        ccclass: q,
        property: J
    } = c;
    t("BagTuplePrefab", (D = J(n), C = J(n), L = J(a), O = J(n), P = J(n), S = J(n), y = J(n), A = J(r), I = J(r), N = J(l), v = J(n), G = J(n), w = J([s]), q((k = e((x = class extends u {
        constructor(...t) {
            super(...t), o(this, "gameName", k, this), o(this, "gameDate", R, this), o(this, "toolIcon", Y, this), o(this, "toolName", z, this), o(this, "toolSpecific", M, this), o(this, "expiredDate", F, this), o(this, "btnLabel", K, this), o(this, "redeemButton", H, this), o(this, "toolUseButton", $, this), o(this, "supplementNode", X, this), o(this, "toolDescription", V, this), o(this, "status", j, this), o(this, "statusSprite", W, this), this._tupleData = null, this._hallScript = null, this._toolUrl = "", this._index = 0, this._currentPage = 0
        }
        onDestroy() {
            B.releaseImage(this._toolUrl)
        }
        onLoad() {
            this._hallScript = p.getScene().getComponentInChildren(E)
        }
        start() {}
        update(t) {
            const e = this.node,
                o = e.parent,
                i = o.position.y + e.position.y,
                n = o.parent;
            T.setNodeOpacity(e, !this._tupleData || e.position.y > 0 || e.position.y <= -T.getNodeHeight(o) || i > T.getNodeHeight(e) || i < -T.getNodeHeight(n) ? 0 : 255)
        }
        setIndex(t, e = 0) {
            this._index = t, this._currentPage = e
        }
        showExpiredDate(t, e) {
            if (this.expiredDate.node.active = t, t) {
                let t = `${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`;
                this.expiredDate.string = b("BAG.EXPIRED_DATE").replace("expired_date", t)
            }
        }
        showUsedDate(t) {
            this.expiredDate.node.active = !0;
            let e = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`;
            this.expiredDate.string = b("BAG.USED_DATE").replace("used_date", e)
        }
        setInfo(t, e = !1, o = !1, i = !1) {
            if (this.node.getChildByName("tuple_header").active = e, this.node.getChildByName("background").active = !e, e) return this.node.getChildByName("tuple_header").getComponent(h).paddingTop = i ? 13 : 40, this.gameDate.string = t, this.gameName.node.active = o, void this.node.getComponent(h).updateLayout();
            this._tupleData = t, this.setInfoValues(t, i)
        }
        setInfoValues(t, e = !1) {
            this.toolName.string = t.Name;
            const o = t.Expiry || t.Expired;
            switch (this.showExpiredDate(t.needShowExpireDate && o, o), e && t.Consumed && this.showUsedDate(t.Consumed), t.Type) {
                case f.commonProto.TOOL_TYPE.ticket:
                    this.toolSpecific.string = b("BAG.TOOL_TYPE.TICKET");
                    break;
                case f.commonProto.TOOL_TYPE.redPocket:
                    this.toolSpecific.string = b("BAG.TOOL_TYPE.RED_POCKET");
                    break;
                case f.commonProto.TOOL_TYPE.gift:
                    this.toolSpecific.string = b("BAG.TOOL_TYPE.GIFT");
                    break;
                case f.commonProto.TOOL_TYPE.coupon:
                    this.toolSpecific.string = b("BAG.TOOL_TYPE.COUPON");
                    break;
                default:
                    this.toolSpecific.string = ""
            }
            let i = t.SellRatio > 0,
                r = !t.Consumed,
                l = e ? r ? o : t.Consumed : t.Created;
            this.gameDate.string = `${l.getFullYear()}-${l.getMonth()+1}-${l.getDate()}`, e ? (this.status.node.parent.active = !0, this.status.node.parent.getComponent(a).spriteFrame = this.statusSprite[r ? 1 : 0], this.status.node.getComponent(d).color = (new g).fromHEX(r ? "#CCCCCC" : "#FBCF7B"), this.status.string = b(r ? "BAG.BUTTON_LABEL.EXPIRED" : "BAG.BUTTON_LABEL.USED"), this.redeemButton.interactable = !1, this.btnLabel.node.getComponent(d).color = (new g).fromHEX("#282936"), this.btnLabel.string = b(r ? "BAG.BUTTON_LABEL.EXPIRED" : "BAG.BUTTON_LABEL.USED"), this.toolUseButton.node.active = !1, this.redeemButton.node.active = !0) : (this.status.node.parent.active = !1, this.redeemButton.interactable = !0, this.btnLabel.node.getComponent(d).color = new g(g.WHITE), this.btnLabel.string = b("BAG.BUTTON_LABEL.REDEEM"), this.toolUseButton.getComponentInChildren(n).string = b("BAG.BUTTON_LABEL.USE"), this.toolUseButton.node.active = !(t.Type === f.commonProto.TOOL_TYPE.redPocket), this.redeemButton.node.active = i), t.Description.length > 0 && (this.supplementNode.active = !0, this.toolDescription.string = t.Description), this.supplementNode.active = !1, this.supplementNode.parent.getComponent(h).updateLayout(), this.node.getComponent(h).updateLayout()
        }
        onUseClicked() {
            switch (this._tupleData.Type) {
                case f.commonProto.TOOL_TYPE.ticket:
                case f.commonProto.TOOL_TYPE.coupon:
                    let t = "BAG.DIALOG.TICKET_COUPON";
                    this._hallScript.callPopUpBox(t, void 0);
                    break;
                case f.commonProto.TOOL_TYPE.gift:
                    cc_mtt.vv.AssetsManager.showDialogBox("", "BAG.DIALOG.GIFT", !1, [{
                        type: 0,
                        text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                        callback: void 0
                    }, {
                        type: 1,
                        text: "MESSAGE_DIALOG_BLOCKER.OK",
                        callback: () => {
                            let t = p.getScene().getComponentInChildren("BagPrefab").node;
                            this._hallScript.onClickCustomerService(t)
                        }
                    }])
            }
        }
        onRedeemClicked() {
            let t = {
                Translation: "BAG.DIALOG.RED_POCKET",
                payload: t => m.formatStr(b(t), B.roundValue(this._tupleData.SellRatio / 100 * this._tupleData.Value))
            };
            cc_mtt.vv.AssetsManager.showDialogBox("", t, !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                callback: void 0
            }, {
                type: 1,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: () => {
                    this._hallScript.showLoading();
                    let t = {
                        ToolInBackpackId: this._tupleData.Id,
                        UserId: cc_mtt.vv.DataManager.userId
                    };
                    cc_mtt.vv.DataManager.worldNetwork.requestToolInBackpackRedeem(t, (t => {
                        cc_mtt.vv.ConsoleLog.log("redeem", t);
                        let e = this._hallScript;
                        if (t && !t.ErrorCode) {
                            p.getScene().getComponentInChildren(_).removeList(), p.getScene().getComponentInChildren(_).setPage();
                            let t = "BAG.DIALOG.REDEEM_SUCCESS";
                            this._hallScript.hidLoading((() => {
                                e.callPopUpBox(t, void 0)
                            }))
                        } else this._hallScript.hidLoading((() => {
                            e.callPopUpBox("ERROR_CODE_PKW." + t.ErrorCode, void 0)
                        }))
                    }))
                }
            }])
        }
    }).prototype, "gameName", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(x.prototype, "gameDate", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(x.prototype, "toolIcon", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(x.prototype, "toolName", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(x.prototype, "toolSpecific", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(x.prototype, "expiredDate", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(x.prototype, "btnLabel", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(x.prototype, "redeemButton", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(x.prototype, "toolUseButton", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(x.prototype, "supplementNode", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(x.prototype, "toolDescription", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(x.prototype, "status", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(x.prototype, "statusSprite", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), U = x)) || U));
    i._RF.pop()
}