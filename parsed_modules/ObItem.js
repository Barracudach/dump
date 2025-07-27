import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";
import * as u from "./CircleSprite.js";
import * as d from "./GameSceneInstance.js";

function main() {
    var p, h, g, m, b, y, f, I, S, D, k, P;
    a._RF.push({}, "ad78dx+97FPKZGm58n92ASF", "ObItem", void 0);
    const {
        ccclass: _,
        property: H
    } = o;
    e("ObItem", (p = H({
        type: r,
        tooltip: "名字"
    }), h = H({
        type: n,
        tooltip: "角色图片"
    }), g = H({
        type: n,
        tooltip: "角色背景"
    }), m = H({
        type: n,
        tooltip: "勾选"
    }), b = H({
        type: l,
        tooltip: "点击头像"
    }), _((I = t((f = class extends s {
        constructor(...e) {
            super(...e), i(this, "roleName", I, this), i(this, "roleImg", S, this), i(this, "black_img", D, this), i(this, "check_img", k, this), i(this, "head_btn", P, this), this.playerId = null, this.obPlayerData = null, this.isInAudit = !1, this.playerData = null
        }
        onBtnHeadClick(e) {
            if (c.AudioMgr.playButtonSound("button_click.mp3"), this.isInAudit) return void(this.check_img.node.active = !this.check_img.node.active);
            e.propagationStopped = !0;
            const t = d.getInstanceGameData(null == this ? void 0 : this.node);
            t.tRoomData.obPlayer = this.obPlayerData, c.MessageCenter.send("showObRoleInfo", t)
        }
        setData(e) {
            this.isInAudit = !0, this.playerData = e;
            let t = c.dataHandler.getUserData().getRemarkData(e.nPlayerID);
            t.sRemark.length <= 0 ? c.StringTools.setShrinkString(this.roleName.node, e.sPlayerName, !0) : c.StringTools.setShrinkString(this.roleName.node, t.sRemark, !0), e.nPlayerID == c.dataHandler.getUserData().u32Uid ? e.sPlayerHead.length <= 0 ? u.setCircleSprite(this.roleImg.node, c.dataHandler.getUserData().HeadPath) : c.dataHandler.getUserData().HeadPath.length <= 0 ? u.setCircleSprite(this.roleImg.node, e.sPlayerHead, e.plat) : u.setCircleSprite(this.roleImg.node, c.dataHandler.getUserData().HeadPath) : u.setCircleSprite(this.roleImg.node, e.sPlayerHead, e.plat), this.check_img.node.setSiblingIndex(100)
        }
        headIsSelect() {
            return this.check_img.node.active
        }
    }).prototype, "roleName", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(f.prototype, "roleImg", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(f.prototype, "black_img", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(f.prototype, "check_img", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(f.prototype, "head_btn", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = f)) || y));
    a._RF.pop()
}