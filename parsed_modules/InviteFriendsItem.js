import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./CircleSprite.js";

function main() {
    var c, p, b, d, h, f, m, v;
    i._RF.push({}, "0df08erxA1GQrSly76axl5R", "InviteFriendsItem", void 0);
    const {
        ccclass: g,
        property: y
    } = s;
    e("InviteFriendsItem", (c = y(n), p = y(a), b = y(n), g((f = t((h = class extends o {
        constructor(...e) {
            super(...e), r(this, "avatar", f, this), r(this, "nameLabel", m, this), r(this, "background", v, this), this.userName = "", this.userID = ""
        }
        setUserId(e) {
            this.userID = e
        }
        SetAvatar(e) {
            e instanceof l ? u.setHeadTexture(this.avatar.node, e, 1) : u.setCircleSprite(this.avatar.node, e)
        }
        setUserName(e) {
            this.userName = e, this.nameLabel.string = e ?? ""
        }
        setBackground(e) {
            this.background.enabled = e
        }
    }).prototype, "avatar", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), m = t(h.prototype, "nameLabel", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(h.prototype, "background", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = h)) || d));
    i._RF.pop()
}