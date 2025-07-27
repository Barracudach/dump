import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./CircleSprite.js";
import * as h from "./cv.js";

function main() {
    var p, d, m, g, y, f, _, b, D, I;
    r._RF.push({}, "1e444aaHc1CAbJOcBsbcj7l", "BarrageHeadItem", void 0);
    const {
        ccclass: v,
        property: w
    } = s;
    e("default", (p = w(i), d = w(i), m = w(l), g = w(i), v((_ = t((f = class extends n {
        constructor(...e) {
            super(...e), a(this, "selectImg", _, this), a(this, "roleHead", b, this), a(this, "roleName", D, this), a(this, "starBorder", I, this), this._playerData = null, this._faceView = null
        }
        start() {}
        setFaceView(e) {
            this._faceView = e
        }
        getPlayerId() {
            return this._playerData ? this._playerData.playerid : 0
        }
        onClick() {
            h.AudioMgr.playButtonSound("button_click"), this._faceView.currentCdStatus() || null == this._playerData || (this.selectImg.active = !this.selectImg.active, this._faceView.onclickRoleHead(this._playerData.playerid, this.selectImg.active))
        }
        setData(e) {
            this.clearData(), this._playerData = e, u.setCircleSprite(this.roleHead, e.headurl, e.plat, !0), this.roleName.string = this._playerData.name, 1 == this._playerData.identity ? (this.roleName.node.getComponent(o).color = c(208, 171, 110), this.starBorder.active = !0) : (this.roleName.node.getComponent(o).color = c(255, 255, 255), this.starBorder.active = !1)
        }
        clearData() {
            this._playerData = null, this.hideSelectImg(), u.cleanHeadNode(this.roleHead)
        }
        getRoleName() {
            return this._playerData.name
        }
        hideSelectImg() {
            this.selectImg.active = !1
        }
        showSelectImg() {
            this.selectImg.active = !0
        }
    }).prototype, "selectImg", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = t(f.prototype, "roleHead", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(f.prototype, "roleName", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(f.prototype, "starBorder", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = f)) || y));
    r._RF.pop()
}