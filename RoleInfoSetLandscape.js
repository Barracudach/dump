import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as c from "./RoleInfoSet.js";
import * as p from "./UserProfileConfig.js";

function main() {
    var d, g, f, h, b, v;
    a._RF.push({}, "e96bbY8cuJH3KA1b/X7MgAh", "RoleInfoSetLandscape", void 0);
    const {
        ccclass: m,
        property: A
    } = n;
    e("default", (d = A(i), g = A(r), m((b = t((h = class extends c {
        constructor(...e) {
            super(...e), o(this, "roleImgButton", b, this), o(this, "uploadAvatar_btn", v, this)
        }
        adaptWidget() {
            u.resMgr.adaptWidget(this.node, !0, !1)
        }
        onEnable() {
            super.onEnable(), this.chooseHead_panel.active = !1, this.setUIForTourist()
        }
        updateView() {
            super.updateView(), this.setUIForTourist()
        }
        setUIForTourist() {
            s(this.male_toggle) && s(this.male_toggle.getComponent(l)) && (this.male_toggle.getComponent(l).interactable = !u.dataHandler.getUserData().isTouristUser), s(this.roleImgButton) && (this.roleImgButton.interactable = !u.dataHandler.getUserData().isTouristUser)
        }
        onClickChooseHeadPanel() {
            if (!this.showAvatarAccessDenied())
                if (u.appConfig.getUserProfileConfig().userAvatarAccepted !== p.Custom) {
                    if (u.appConfig.getUserProfileConfig().userAvatarAccepted === p.System) return this.uploadAvatar_btn.active = !1, void this.showSystemHeadPanel();
                    this.uploadAvatar_btn.active = !0, this.showSystemHeadPanel()
                } else this.openPhoto()
        }
    }).prototype, "roleImgButton", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(h.prototype, "uploadAvatar_btn", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), f = h)) || f));
    a._RF.pop()
}