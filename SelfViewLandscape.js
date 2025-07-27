import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./Enum.js";
import * as g from "./cv.js";
import * as d from "./SelfView.js";
import * as _ from "./SelfView.js";
import * as h from "./SystemSetting.js";
import * as p from "./BonusHistoryViewLandscape.js";
import * as S from "./GameReviewLandscape.js";
import * as f from "./DataViewLandscape.js";

function main() {
    var m, w, b, C, F, I, T, B;
    i._RF.push({}, "e4583ZfrwFFo5EE7LN/BZr5", "SelfViewLandscape", void 0);
    const {
        ccclass: V,
        property: E
    } = o;
    e("default", (m = E(s), w = E(a), b = E(a), V((I = t((F = class extends _ {
        constructor(...e) {
            super(...e), n(this, "content_container", I, this), n(this, "gender_male_sf", T, this), n(this, "gender_female_sf", B, this)
        }
        adaptWidget() {
            g.resMgr.adaptWidget(this.node, !0, !1)
        }
        addButtonComp() {
            super.addButtonComp()
        }
        performButtonAction(e, t = !1, n = null) {
            switch (this.setMenuSideBarButtonState(e), e) {
                case d.SVFFI_ACCOUNT_SETTINGS:
                    null == this._inst_accountSettings ? (this._inst_accountSettings = c(this.prefab_AccountSettings), this.showPage(this._inst_accountSettings, e)) : this.showPage(this._inst_accountSettings, e);
                    break;
                case d.SVFFI_GAME_COLLECTION: {
                    let t = S.getSinglePrefabInst(r.getScene(), this.prefab_gameReview);
                    this.showPage(t, e), t && (t.getComponent(S).setShowAudit(!0), t.getComponent(S).autoShow(l.EDST_COLLECTION))
                }
                break;
                case d.SVFFI_GAME_SETTING: {
                    let t = h.getSinglePrefabInst(this.prefab_systemSetting);
                    this.showPage(t, e)
                }
                break;
                case d.SVFFI_GAME_RECORD: {
                    if (this.showTouristLimited("ViewStats_tourist_msg", e)) return;
                    let t = f.getSinglePrefabInst(this.prefab_gameRecord);
                    this.showPage(t, e)
                }
                break;
                case d.SVFFI_BONUS_HISTORY: {
                    if (this.showTouristLimited("BonusHistory_tourist_msg", e)) return;
                    let t = p.getSinglePrefabInst(this.prefab_BonusHistory);
                    this.showPage(t, e)
                }
                break;
                case d.SVFFI_SIGN_OUT:
                    g.popUp.showMsgI18n({
                        txt: "ToastMessage10",
                        isTwoBtn: !0,
                        sureCallback: this._onSignOut.bind(this),
                        cancelCallback: this.onCancelSignOut.bind(this),
                        onXCancelCallback: !0,
                        cancelLabel: "Signout_Confirmation_No",
                        sureLabel: "Signout_Confirmation_Yes"
                    });
                    break;
                case d.SVFFI_GAME_MY_TICKETS:
                    super.performButtonAction(e, t, n), this.setMenuSideBarToCurrentPage();
                    break;
                default:
                    super.performButtonAction(e, t, n)
            }
            this.updateGenderUI(g.dataHandler.getUserData())
        }
        onCancelSignOut() {
            this.setMenuSideBarToCurrentPage()
        }
        showPage(e, t) {
            this.content_container.children.forEach((e => {
                e.active = !1
            })), this.content_container.getChildByUuid(e.uuid) || this.content_container.addChild(e), e.active = !0, e.emit(g.Enum.CustomEvent.ActionShowFinish), this.activeFlagIdx = t
        }
        updateVIPToolState() {}
        updateGenderUI(e) {
            this.img_user_gender.node.active = g.appConfig.getRegistrationConfig().showGenderField, 1 === e.gender ? this.img_user_gender.node.getComponent(u).spriteFrame = this.gender_male_sf : this.img_user_gender.node.getComponent(u).spriteFrame = this.gender_female_sf
        }
        _onClickUserInfo() {}
        openAvatar() {
            this._inst_accountSettings && (this.showPage(this._inst_accountSettings, d.SVFFI_ACCOUNT_SETTINGS), this.setMenuSideBarToCurrentPage())
        }
    }).prototype, "content_container", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(F.prototype, "gender_male_sf", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = t(F.prototype, "gender_female_sf", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = F)) || C));
    i._RF.pop()
}