import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as o from "./CircleSprite.js";
import * as d from "./cv.js";

function main() {
    var _, c, g, p, h, f, m, b, y, U, x, D, w, C, I, S;
    r._RF.push({}, "b9e58Ae715NhY9XJwwQbCmA", "UserProfileHeader", void 0);
    const {
        ccclass: v,
        property: z
    } = u;
    e("UserProfileHeader", (_ = z(n), c = z(n), g = z(n), p = z(s), h = z(s), f = z(a), m = z(a), v((U = t((y = class extends l {
        constructor(...e) {
            super(...e), i(this, "txt_user_name", U, this), i(this, "txt_user_id", x, this), i(this, "txt_user_last_login", D, this), i(this, "img_user_head", w, this), i(this, "img_user_gender", C, this), i(this, "gender_male_sf", I, this), i(this, "gender_female_sf", S, this)
        }
        onEnable() {
            this.updateUI(), d.MessageCenter.register("modify_info_succ", this.updateDynamicUI.bind(this), this.node), d.MessageCenter.register("update_info", this.updateUI.bind(this), this.node)
        }
        onDisable() {
            d.MessageCenter.unregister("modify_info_succ", this.node), d.MessageCenter.unregister("update_info", this.node)
        }
        updateUI() {
            let e = d.dataHandler.getUserData();
            this.updateDynamicUI(), this.txt_user_id.node.active && (this.txt_user_id.string = `${d.config.getStringData("id")} ${e.getUserIdS()}`), d.dataHandler.getUserActivityData().updateLastLoginLabel(this.txt_user_last_login)
        }
        updateDynamicUI() {
            let e = d.dataHandler.getUserData();
            this.txt_user_name.string = d.String(e.nick_name), o.setCircleSprite(this.img_user_head.node, e.isTouristUser ? "" : e.headUrl), this.updateGenderUI(e)
        }
        updateGenderUI(e = d.dataHandler.getUserData()) {
            this.img_user_gender.node.active && (1 === e.gender ? this.img_user_gender.spriteFrame = this.gender_male_sf : this.img_user_gender.spriteFrame = this.gender_female_sf)
        }
    }).prototype, "txt_user_name", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(y.prototype, "txt_user_id", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = t(y.prototype, "txt_user_last_login", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = t(y.prototype, "img_user_head", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(y.prototype, "img_user_gender", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(y.prototype, "gender_male_sf", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), S = t(y.prototype, "gender_female_sf", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = y)) || b));
    r._RF.pop()
}