import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as l from "./cc.js";
import * as s from "./cc.js";
import * as c from "./CircleSprite.js";
import * as n from "./cv.js";

function main() {
    var o, u, p, h, _, d;
    i._RF.push({}, "6afcds1hdVL6ZATFCcUWvpW", "DanmuHeadItem", void 0);
    const {
        ccclass: f,
        property: g
    } = r;
    e("default", (o = g(l), u = g(l), f((_ = t((h = class extends s {
        constructor(...e) {
            super(...e), a(this, "select_img", _, this), a(this, "roleHead", d, this), this._playerData = null, this._faceView = null
        }
        start() {}
        setFaceView(e) {
            this._faceView = e
        }
        getPlayerId() {
            return this._playerData ? this._playerData.playerid : 0
        }
        onClick() {
            this._faceView.onOff ? (this.select_img.active = !this.select_img.active, this._playerData ? this._faceView.onclickRoleHead(this._playerData.playerid, this.select_img.active) : console.log("@玩家头像数据为空")) : n.TT.showMsg(n.config.getStringData("Faceview_danmu_button_onOff_Tips"), n.Enum.ToastType.ToastTypeWarning)
        }
        setData(e) {
            this.clearData(), this._playerData = e, c.setCircleSprite(this.roleHead, e.headurl, e.plat, !1)
        }
        clearData() {
            this._playerData = null, this.hideSelectImg(), c.cleanHeadNode(this.roleHead)
        }
        getRoleName() {
            return this._playerData.name
        }
        hideSelectImg() {
            this.select_img.active = !1
        }
        showSelectImg() {
            this.select_img.active = !0
        }
    }).prototype, "select_img", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = t(h.prototype, "roleHead", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), p = h)) || p));
    i._RF.pop()
}