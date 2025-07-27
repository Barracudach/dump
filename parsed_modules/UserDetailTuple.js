import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./NodeTools.js";

function main() {
    var d, f, N, b, p, v, _, k, y, T, I, w, z, D, A, C, P, S, F, U, x, B, L, M;
    r._RF.push({}, "cbe9fovrPdC4oXrPKarqA1z", "UserDetailTuple", void 0);
    const {
        ccclass: R,
        property: W
    } = l;
    t("UserDetailTuple", (d = W(a), f = W(n), N = W(a), b = W(o), p = W(o), v = W(o), _ = W(a), k = W(u), y = W(u), T = W(a), I = W(s), R((D = e((z = class extends c {
        constructor(...t) {
            super(...t), i(this, "userName", D, this), i(this, "avatar", A, this), i(this, "userId", C, this), i(this, "chooseTicket", P, this), i(this, "addButton", S, this), i(this, "reduceButton", F, this), i(this, "ticketName", U, this), i(this, "giftSelectNode", x, this), i(this, "giftNumberNode", B, this), i(this, "giftTicketNumber", L, this), this._maxNum = 1, this._currentNum = 1, i(this, "_defaultPhoto", M, this), this._url = ""
        }
        onDestroy() {
            cc_mtt.vv.ConsoleLog.log("onDestroy Holdem_PlayerAvatar"), this.releaseImage()
        }
        onLoad() {
            this._defaultPhoto = this.avatar.spriteFrame, this.ticketName.node.on(u.EventType.SIZE_CHANGED, (() => {
                let t = this.ticketName.getComponentInChildren(h);
                t.left = g.getNodeWidth(this.ticketName.node) + 20, t.updateAlignment()
            }))
        }
        loadDefaultPhoto() {
            this.avatar.spriteFrame = this._defaultPhoto
        }
        releaseImage() {
            m(this.avatar) && this.avatar.webImageUrl && cc_mtt.vv.AssetsManager.releaseWebImage(this.avatar.webImageUrl)
        }
        load(t) {
            this._url = t, cc_mtt.vv.AssetsManager.loadWebImage(this.avatar, t, this._defaultPhoto, (t => {
                this.avatar.spriteFrame = new s, this.avatar.spriteFrame.texture = t
            })) || this.loadDefaultPhoto()
        }
        initUserDetail(t, e) {
            this.giftSelectNode.active = !0, this.giftNumberNode.active = !1, this.chooseTicket.node.active = this.giftNumberNode.active, this.ticketName.string = "", this.userName.string = t.Nickname;
            let i = cc_mtt.vv.DataManager.getAvatarId(t.Avatar, t.UserId);
            this.load(cc_mtt.vv.AssetsManager.getAvatarUrl(i, {
                isThumbnails: !0
            })), this.userId.string = `${t.ForeignId}`
        }
        updateTicketInfo(t, e) {
            this.ticketName.string = t, this._maxNum = e, this._currentNum = 1, this.giftSelectNode.active = !1, this.giftNumberNode.active = !0, this.chooseTicket.node.active = this.giftNumberNode.active, this.giftTicketNumber.string = "1"
        }
        onReduceClick() {
            cc_mtt.vv.ConsoleLog.log("onReduceClick", this._currentNum), this._currentNum - 1 >= 1 && (this._currentNum = this._currentNum - 1, this.giftTicketNumber.string = this._currentNum.toString())
        }
        onAddClick() {
            cc_mtt.vv.ConsoleLog.log("onAddClick", this._currentNum), this._currentNum + 1 <= this._maxNum && this._currentNum + 1 < 51 && (this._currentNum = this._currentNum + 1, this.giftTicketNumber.string = this._currentNum.toString())
        }
    }).prototype, "userName", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(z.prototype, "avatar", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(z.prototype, "userId", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(z.prototype, "chooseTicket", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = e(z.prototype, "addButton", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(z.prototype, "reduceButton", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(z.prototype, "ticketName", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(z.prototype, "giftSelectNode", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(z.prototype, "giftNumberNode", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(z.prototype, "giftTicketNumber", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(z.prototype, "_defaultPhoto", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = z)) || w));
    r._RF.pop()
}