import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as F from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as M from "./cc.js";
import * as b from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as I from "./cc.js";
import * as T from "./cc.js";
import * as y from "./GameReview.js";
import * as w from "./CircleSprite.js";
import * as N from "./Enum.js";
import * as V from "./Enum.js";
import * as v from "./TagCom.js";
import * as O from "./UserProfileConfig.js";
import * as L from "./GameDataManager.js";
import * as B from "./ResponsibleGamingView.js";
import * as P from "./BonusHistoryView.js";
import * as R from "./cv.js";
import * as k from "./ChangePassword.js";
import * as D from "./profile_player_complaint.js";
import * as G from "./StatementReportView.js";
import * as H from "./two_factor_authentication.js";
import * as U from "./ActivityView.js";
import * as x from "./InviteFriendsView.js";
import * as Y from "./InviteFriendsView.js";
import * as K from "./LanguageSet.js";
import * as z from "./MttBackpack.js";
import * as W from "./ReferView.js";
import * as J from "./RoleInfoSet.js";
import * as mod21 from "./SystemSetting.js";
import * as q from "./DesignSystemButtonBase.js";
import * as j from "./DesignSystemRegularButton.js";
import * as X from "./FakeMultipleGame.js";
import * as Z from "./DataView.js";
import * as Q from "./MTTConnector.js";
import * as ee from "./MttMyTickets.js";
import * as te from "./MyRedPackets.js";
import * as ie from "./KycVerificationView.js";
import * as ne from "./KYCFacade.js";
import * as se from "./KycStatusView.js";
import * as oe from "./CommonHallSubViewController.js";
import * as ae from "./MessageBroker.js";
import * as re from "./InstallPromptStatusManager.js";
import * as le from "./Translator.js";

function main() {
    var _e, ue, he, ge, ce, de, pe, fe, Se, Ie, Te, be, Ce, Ae, Fe, me, Me, Ee, ye, we, Ne, Ve, ve, Oe, Le, Be, Pe, Re, ke, De, Ge, He, Ue, xe, Ye, Ke, ze, We, Je, $e, qe, je, Xe, Ze, Qe, et, tt, it, nt, st, ot, at, rt, lt, _t, ut, ht, gt, ct, dt, pt, ft, St, It, Tt, bt, Ct, At, Ft, mt, Mt, Et, yt, wt, Nt, Vt, vt, Ot, Lt, Bt, Pt, Rt, kt, Dt, Gt, Ht, Ut;
    n._RF.push({}, "c3d08exPlFJ8pE7s0KMlIFY", "SelfView", void 0);
    let xt = L.getInstance(),
        Yt = e("eSelfViewFuncFlagIdx", function(e) {
            return e[e.SVFFI_NONE = 0] = "SVFFI_NONE", e[e.SVFFI_MY_INVITATION_CODE = 1] = "SVFFI_MY_INVITATION_CODE", e[e.SVFFI_MY_CLUB = 2] = "SVFFI_MY_CLUB", e[e.SVFFI_MY_ALLIANCE = 3] = "SVFFI_MY_ALLIANCE", e[e.SVFFI_GAME_COLLECTION = 4] = "SVFFI_GAME_COLLECTION", e[e.SVFFI_GAME_LANGUAGE = 5] = "SVFFI_GAME_LANGUAGE", e[e.SVFFI_GAME_RECORD = 6] = "SVFFI_GAME_RECORD", e[e.SVFFI_GAME_BACKPACK = 7] = "SVFFI_GAME_BACKPACK", e[e.SVFFI_GAME_VIPTOOL = 8] = "SVFFI_GAME_VIPTOOL", e[e.SVFFI_GAME_SETTING = 9] = "SVFFI_GAME_SETTING", e[e.SVFFI_EXTRA = 10] = "SVFFI_EXTRA", e[e.SVFFI_RESPONSIBLE_GAMING = 11] = "SVFFI_RESPONSIBLE_GAMING", e[e.SVFFI_SIGN_OUT = 12] = "SVFFI_SIGN_OUT", e[e.SVFFI_LOGIN_HISTORY = 13] = "SVFFI_LOGIN_HISTORY", e[e.SVFFI_HANDS_HISTORY = 14] = "SVFFI_HANDS_HISTORY", e[e.SVFFI_GAME_TRANSACTIONS = 15] = "SVFFI_GAME_TRANSACTIONS", e[e.SVFFI_PLAYER_COMPLAINTS = 16] = "SVFFI_PLAYER_COMPLAINTS", e[e.SVFFI_TWO_FACTOR_AUTHENTICATION = 17] = "SVFFI_TWO_FACTOR_AUTHENTICATION", e[e.SVFFI_STATEMENT_DATA_REPORT = 18] = "SVFFI_STATEMENT_DATA_REPORT", e[e.SVFFI_CHANGE_PASSWORD = 19] = "SVFFI_CHANGE_PASSWORD", e[e.SVFFI_ACCOUNT_SETTINGS = 20] = "SVFFI_ACCOUNT_SETTINGS", e[e.SVFFI_BONUS_HISTORY = 21] = "SVFFI_BONUS_HISTORY", e[e.SVFFI_INVITE_FRIENDS = 22] = "SVFFI_INVITE_FRIENDS", e[e.SVFFI_GAME_MY_TICKETS = 23] = "SVFFI_GAME_MY_TICKETS", e[e.SVFFI_MY_RED_PACKETS = 24] = "SVFFI_MY_RED_PACKETS", e[e.SVFFI_KYC_VERIFICATION = 25] = "SVFFI_KYC_VERIFICATION", e
        }({}));
    const {
        ccclass: Kt,
        property: zt
    } = d;
    let Wt = e("ViewButtonItem", (_e = Kt("ViewButtonItem"), ue = zt({
        type: s(Yt)
    }), he = zt(o), ge = zt(a), ce = zt(r), _e((fe = t((pe = class {
        constructor() {
            i(this, "buttonType", fe, this), i(this, "itemIcon", Se, this), i(this, "itemKey", Ie, this), i(this, "hidden", Te, this)
        }
    }).prototype, "buttonType", [ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return Yt.SVFFI_NONE
        }
    }), Se = t(pe.prototype, "itemIcon", [he], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ie = t(pe.prototype, "itemKey", [ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), Te = t(pe.prototype, "hidden", [ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), de = pe)) || de));
    e("SelfView", (be = zt(l), Ce = zt(l), Ae = zt(l), Fe = zt(l), me = zt(l), Me = zt(l), Ee = zt(l), ye = zt(l), we = zt(l), Ne = zt(l), Ve = zt(l), ve = zt(l), Oe = zt(l), Le = zt(l), Be = zt(l), Pe = zt(l), Re = zt(l), ke = zt(l), De = zt(l), Ge = zt(l), He = zt(l), Ue = zt(_), xe = zt(_), Ye = zt(_), Ke = zt(_), ze = zt(_), We = zt(_), Je = zt(u), $e = zt(u), qe = zt(h), je = zt(h), Xe = zt(h), Ze = zt(g), Qe = zt(c), et = zt({
        type: Wt
    }), tt = zt(h), it = zt(h), Kt((ot = t((st = class extends oe {
        constructor(...e) {
            super(...e), i(this, "prefab_gameReview", ot, this), i(this, "prefab_gameRecord", at, this), i(this, "prefab_systemSetting", rt, this), i(this, "prefab_responsibleGaming", lt, this), i(this, "prefab_roleInfoSet", _t, this), i(this, "prefab_LangSet", ut, this), i(this, "prefab_MttBackpack", ht, this), i(this, "prefab_LoginHistory", gt, this), i(this, "prefab_BonusHistory", ct, this), i(this, "prefab_PlayerComplaints", dt, this), i(this, "prefab_HandsHistory", pt, this), i(this, "prefab_GameTransactionsHistory", ft, this), i(this, "prefab_TwoFactorAuthentication", St, this), i(this, "prefab_StatementDataReport", It, this), i(this, "prefab_ChangeLoginPassword", Tt, this), i(this, "prefab_AccountSettings", bt, this), i(this, "prefab_InviteFriends", Ct, this), i(this, "prefab_ReferFriends", At, this), i(this, "prefab_MttMyTickets", Ft, this), i(this, "prefab_MyRedPackets", mt, this), i(this, "prefab_KycVerification", Mt, this), i(this, "txt_edit_profile", Et, this), i(this, "txt_user_name", yt, this), i(this, "txt_user_id", wt, this), i(this, "txt_user_mark", Nt, this), i(this, "txt_user_wealth", Vt, this), i(this, "txt_user_last_login", vt, this), i(this, "img_user_head", Ot, this), i(this, "img_user_gender", Lt, this), this.img_invite_gift = null, i(this, "panel_1", Bt, this), i(this, "panel_2", Pt, this), i(this, "panel_3", Rt, this), i(this, "btn_user_info", kt, this), i(this, "scrollview", Dt, this), i(this, "buttonIcons", Gt, this), i(this, "appInstallNode", Ht, this), i(this, "addToHomeScreenNode", Ut, this), this.vBtns = [], this.SELF_BTN_NUMBER = 23, this._inst_gameRecord = null, this._inst_roleInfoSet = null, this._vBtnsSrcPos = [], this._backpack_node = null, this._backpack_url = "&page=2", this._txtInviteLabel = null, this._preHeadUrl = "", this._openAvatar = !1, this._inst_loginHistory = null, this._inst_handsHistory = null, this._inst_gameTransactionsHistory = null, this._inst_accountSettings = null, this._inst_inviteFriends = void 0, this._kycStatusView = null, this._inst_kycVerification = void 0, this._myTickets_node = null, this.hallScene = null, this.activeFlagIdx = Yt.SVFFI_NONE, this.AVERAGE_BACK_WIDTH = 300, this.downloadBannerUrl = "", this._hasJustLogged = !0, this._subPanels = []
        }
        onLoad() {
            super.onLoad(), this.txt_user_mark.node.active = !1, this.adaptWidget();
            let e = p("buttonItem", this.node),
                t = this.scrollview.content,
                i = this.SELF_BTN_NUMBER,
                n = t.getComponent(f).height,
                s = e.getComponent(f).height * i;
            s > n && t.getComponent(f).setContentSize(new S(t.getComponent(f).width, s));
            for (let n = 0; n < i; n++) {
                let i = I(e);
                i.setPosition(new T(t.getComponent(f).width / 2, -e.getComponent(f).height * n - e.getComponent(f).height / 2)), i.active = !0, t.addChild(i), this.vBtns.push(i.getComponent(g))
            }
            this.addButtonComp(), this.addButtonsText(), this.updateButtons(), this.updateMTTState(), this.addToHomeScreenNode && (this.addToHomeScreenNode.active = re.getInstance().previousAvailableStatus), R.MessageCenter.register("update_info", this._onMsgUpdateInfo.bind(this), this.node), R.MessageCenter.register("update_gold", this._onMsgUpdateGold.bind(this), this.node), R.MessageCenter.register("modify_info_succ", this._onMsgModifyInfo.bind(this), this.node), R.MessageCenter.register("on_update_club_list", this._onMsgUpdateAlliance.bind(this), this.node), R.MessageCenter.register(R.config.CHANGE_LANGUAGE, this._onMsgChangeLanguage.bind(this), this.node), R.MessageCenter.register("update_mtt_state", this.updateMTTState.bind(this), this.node), R.MessageCenter.register("open_avatar", this.openAvatar.bind(this), this.node), R.MessageCenter.register("rg_limits_updated", this.addButtonsText.bind(this), this.node), R.MessageCenter.register(R.Enum.MessageCenterAction.OnUserAvatarChanged, this.OnUserAvatarChanged.bind(this), this.node), R.MessageCenter.register(R.Enum.MessageCenterAction.OnUserAvatarMaterialChanged, this.updateAvatarMaterial.bind(this), this.node), R.MessageCenter.register("open_myredpackets", this.onOpenRedPackets.bind(this), this.node), R.MessageCenter.register("updata_my_redpackets_pos", this.onUodataRedPacketsPos.bind(this), this.node), R.MessageCenter.register("kyc_status_fetched", this.setKYCStatus.bind(this), this.node), R.MessageCenter.register(R.Enum.MessageCenterAction.OnLoginSuccess, this.onLoginSuccess.bind(this), this.node), R.MessageCenter.register(R.Enum.MessageCenterAction.NotificationShow, this.onNotificationOpen.bind(this), this.node), R.appConfig.isWebApp && (R.MessageCenter.register(R.Enum.MessageCenterAction.downloadBannerInfo, this.handleDownloadBannerInfo.bind(this), this.node), R.MessageCenter.register(R.Enum.MessageCenterAction.InstallPromptStatus, this.updateAddToHomeScreenButton.bind(this), this.node), R.MessageCenter.send("profile_page_loaded"))
        }
        adaptWidget() {
            this.scrollview.getComponent(b).bottom = this.hallScene.getBottomMenuHeight(), R.resMgr.adaptWidget(this.node, !0)
        }
        addButtonComp() {
            for (let e = 0; e < this.vBtns.length; ++e) {
                let t = this.vBtns[e].addComponent(v);
                t.nTag = this.remappingTagToFlagIndex(e);
                let i = this.vBtns[e].node.getChildByName("BgGift");
                t.nTag == Yt.SVFFI_MY_INVITATION_CODE ? (i.active = !0, this._txtInviteLabel = i.getChildByName("txtInvite")) : i.active = !1;
                let n = this.vBtns[e].node.getChildByName("KycStatus");
                R.appConfig.getGeneralConfig().enableKycVerification && n && t.nTag == Yt.SVFFI_KYC_VERIFICATION ? this._kycStatusView = n.getComponent(se) : n && (n.active = !1), this._vBtnsSrcPos.push(new T(this.vBtns[e].node.position)), this.vBtns[e].node.on("click", (i => {
                    this._onClickBtns(i, t.nTag, this.vBtns[e].node)
                }), this)
            }
        }
        getKYCStatus() {
            ne.getInstance().getCurrentKycStatus(this.setKYCStatus.bind(this), (() => {
                this._kycStatusView.node.active = !1
            }))
        }
        setKYCStatus(e) {
            if (this.updateButtons(), this.updateBtnsPos(), ne.getInstance().isKycTriggered()) {
                this._kycStatusView.node.active = !0;
                const t = ie.getKYCSimpliedStatus(e),
                    i = ie.getKYCStatusData(t);
                this._kycStatusView.setStatusView(i.statusText, i.textColor, i.bgColor)
            } else this._kycStatusView.node.active = !1
        }
        remappingTagToFlagIndex(e) {
            let t = Yt.SVFFI_NONE;
            switch (e) {
                case 0:
                    t = Yt.SVFFI_ACCOUNT_SETTINGS;
                    break;
                case 1:
                    t = Yt.SVFFI_KYC_VERIFICATION;
                    break;
                case 2:
                    t = Yt.SVFFI_MY_INVITATION_CODE;
                    break;
                case 3:
                    t = Yt.SVFFI_MY_CLUB;
                    break;
                case 4:
                    t = Yt.SVFFI_MY_ALLIANCE;
                    break;
                case 5:
                    t = Yt.SVFFI_GAME_COLLECTION;
                    break;
                case 6:
                    t = Yt.SVFFI_GAME_LANGUAGE;
                    break;
                case 7:
                    t = Yt.SVFFI_STATEMENT_DATA_REPORT;
                    break;
                case 8:
                    t = Yt.SVFFI_RESPONSIBLE_GAMING;
                    break;
                case 9:
                    t = Yt.SVFFI_LOGIN_HISTORY;
                    break;
                case 10:
                    t = Yt.SVFFI_GAME_BACKPACK;
                    break;
                case 11:
                    t = Yt.SVFFI_GAME_MY_TICKETS;
                    break;
                case 12:
                    t = Yt.SVFFI_GAME_VIPTOOL;
                    break;
                case 13:
                    t = Yt.SVFFI_GAME_SETTING;
                    break;
                case 14:
                    t = Yt.SVFFI_GAME_RECORD;
                    break;
                case 15:
                    t = Yt.SVFFI_PLAYER_COMPLAINTS;
                    break;
                case 16:
                    t = Yt.SVFFI_HANDS_HISTORY;
                    break;
                case 17:
                    t = Yt.SVFFI_INVITE_FRIENDS;
                    break;
                case 18:
                    t = Yt.SVFFI_BONUS_HISTORY;
                    break;
                case 19:
                    t = Yt.SVFFI_GAME_TRANSACTIONS;
                    break;
                case 20:
                    t = Yt.SVFFI_TWO_FACTOR_AUTHENTICATION;
                    break;
                case 21:
                    t = Yt.SVFFI_CHANGE_PASSWORD;
                    break;
                case 22:
                    t = Yt.SVFFI_SIGN_OUT
            }
            return t
        }
        addButtonsText() {
            for (let e = 0, t = this.vBtns.length; e < t; ++e) {
                let t = this.vBtns[e].getComponent(v),
                    i = this.vBtns[e].node.getChildByName("itemName").getComponent(_),
                    n = "";
                for (let e = 0; e < this.buttonIcons.length; ++e) t.nTag == this.buttonIcons[e].buttonType && (n = this.buttonIcons[e].itemKey, i.string = R.StringTools.convertText(R.config.getStringData(n), 2), t.nTag == Yt.SVFFI_RESPONSIBLE_GAMING && (i.string += " (" + R.rg.getLimitCount() + ")"))
            }
        }
        updateButtons() {
            for (let e = 0, t = this.vBtns.length; e < t; ++e) {
                let t = this.vBtns[e].getComponent(v),
                    i = null;
                i = p("icon_p/icon", this.vBtns[e].node).getComponent(u);
                let n = null;
                for (let i = 0; i < this.buttonIcons.length; ++i) t.nTag == this.buttonIcons[i].buttonType && (n = this.buttonIcons[i].itemIcon, this.updateButtonHidden(i, this.vBtns[e].node), this.vBtns[e].node.active = !this.buttonIcons[i].hidden);
                n && (n.insetLeft = i.spriteFrame.insetLeft, n.insetTop = i.spriteFrame.insetTop, n.insetRight = i.spriteFrame.insetRight, n.insetBottom = i.spriteFrame.insetBottom, i.spriteFrame = n)
            }
        }
        updateButtonHidden(e, t = null) {
            switch (this.buttonIcons[e].buttonType) {
                case Yt.SVFFI_ACCOUNT_SETTINGS:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showAcount;
                    break;
                case Yt.SVFFI_GAME_RECORD:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showMyStats;
                    break;
                case Yt.SVFFI_GAME_LANGUAGE:
                    this.buttonIcons[e].hidden = !0;
                    break;
                case Yt.SVFFI_GAME_TRANSACTIONS:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showGameTransactionHistory;
                    break;
                case Yt.SVFFI_HANDS_HISTORY:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showHandHistory;
                    break;
                case Yt.SVFFI_STATEMENT_DATA_REPORT:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showDataReport;
                    break;
                case Yt.SVFFI_TWO_FACTOR_AUTHENTICATION:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().show2FactorAuthentification;
                    break;
                case Yt.SVFFI_PLAYER_COMPLAINTS:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showPlayerComplaints;
                    break;
                case Yt.SVFFI_LOGIN_HISTORY:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showLoginHistory;
                    break;
                case Yt.SVFFI_BONUS_HISTORY:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showBonusHistory;
                    break;
                case Yt.SVFFI_GAME_BACKPACK:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showBackpack;
                    break;
                case Yt.SVFFI_RESPONSIBLE_GAMING:
                    this.buttonIcons[e].hidden = !R.appConfig.getModulesConfig().rgStatus.rgEnabled;
                    break;
                case Yt.SVFFI_SIGN_OUT:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showLogOutAt(O.UserProfileMenu) || R.dataHandler.getUserData().isTouristUser;
                    break;
                case Yt.SVFFI_CHANGE_PASSWORD:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showChangePasswordAt(O.UserProfileMenu);
                    break;
                case Yt.SVFFI_GAME_VIPTOOL:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showVIP;
                    break;
                case Yt.SVFFI_GAME_COLLECTION:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showSavedHands;
                    break;
                case Yt.SVFFI_MY_ALLIANCE:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showMyAlliance;
                    break;
                case Yt.SVFFI_INVITE_FRIENDS:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showInviteFriends;
                    break;
                case Yt.SVFFI_GAME_MY_TICKETS:
                    this.buttonIcons[e].hidden = !R.appConfig.getUserProfileConfig().showMyTickets;
                    break;
                case Yt.SVFFI_KYC_VERIFICATION:
                    this.buttonIcons[e].hidden = R.dataHandler.getUserData().isTouristUser || !R.appConfig.getGeneralConfig().enableKycVerification || !ne.getInstance().isKycTriggered()
            }
        }
        onDestroy() {
            R.MessageCenter.unregister("update_info", this.node), R.MessageCenter.unregister("update_gold", this.node), R.MessageCenter.unregister("modify_info_succ", this.node), R.MessageCenter.unregister("on_update_club_list", this.node), R.MessageCenter.unregister(R.config.CHANGE_LANGUAGE, this.node), R.MessageCenter.unregister("update_mtt_state", this.node), R.MessageCenter.unregister("open_avatar", this.node), R.MessageCenter.unregister("rg_limits_updated", this.node), R.MessageCenter.unregister(R.Enum.MessageCenterAction.OnUserAvatarChanged, this.node), R.MessageCenter.unregister(R.Enum.MessageCenterAction.OnUserAvatarMaterialChanged, this.node), R.MessageCenter.unregister("open_myredpackets", this.node), R.MessageCenter.unregister("updata_my_redpackets_pos", this.node), R.MessageCenter.unregister("kyc_status_fetched", this.node), R.MessageCenter.unregister(R.Enum.MessageCenterAction.OnLoginSuccess, this.node), R.MessageCenter.unregister(R.Enum.MessageCenterAction.NotificationShow, this.node), R.appConfig.isWebApp && (R.MessageCenter.unregister(R.Enum.MessageCenterAction.downloadBannerInfo, this.node), R.MessageCenter.unregister(R.Enum.MessageCenterAction.InstallPromptStatus, this.node))
        }
        onEnable() {
            super.onEnable(), this._hasJustLogged ? this.reloadDataAfterLogin() : R.appConfig.getGeneralConfig().enableKycVerification && this.getKYCStatus(), R.appConfig.isWebApp ? this.scheduleOnce((() => {
                this.adaptWidget()
            }), 1) : this.adaptWidget()
        }
        updateView() {
            this._onMsgChangeLanguage()
        }
        _onMsgChangeLanguage() {
            this.panel_1.getChildByName("txt_tile_word").getComponent(_).string = R.config.getStringData("selfView_titile_text");
            this.panel_2.getChildByName("txt_wealth_word").getComponent(_).string = R.config.getStringData("selfView_Button_0_chouMa_name_text");
            null != this.img_invite_gift && R.resMgr.setSpriteFrame(this.img_invite_gift, R.config.getLanguagePath("hall/selfView/inviteGift")), this._updateView(), this.addButtonsText(), this.updateVIPToolState();
            let e = this.img_user_head.node.getChildByName("spEdit").getChildByName("txtEdit");
            e.getComponent(_).string = R.config.getStringData("selfView_roleInfo_headIcon_Edit"), e.getComponent(_).fontSize = R.config.getCurrentLanguage() == R.Enum.LANGUAGE_TYPE.vi_VN ? 21 : 30, this._txtInviteLabel.getComponent(_).string = R.config.getStringData("selfView_ScrollView_Button_InviteGift")
        }
        _updateView() {
            let e = R.dataHandler.getUserData();
            R.dataHandler.getUserData().isTouristUser ? (this.txt_user_name.string = le("Guest"), this.txt_user_id.string = "") : (this.txt_user_name.string = R.String(e.nick_name), this.txt_user_id.string = `${R.config.getStringData("id")} ${e.getUserIdS()}`), this.txt_user_mark.string = e.getUserRemark(R.Number(e.u32Uid)), this.txt_user_wealth.string = R.StringTools.numToFloatString(R.Number(e.total_amount)), this._updateLastLogin(), this.updatePersionalInfo(), this._onMsgUpdateAlliance(), R.appConfig.getGeneralConfig().enableKycVerification && this.getKYCStatus()
        }
        _updateLastLogin() {
            R.dataHandler.getUserActivityData().updateLastLoginLabel(this.txt_user_last_login)
        }
        _onClickBtns(e, t, i = null) {
            R.AudioMgr.playButtonSound("tab.mp3"), t && this.performButtonAction(t, !1, i)
        }
        focusOnProfileMenu(e = !0) {
            this.activeFlagIdx == Yt.SVFFI_INVITE_FRIENDS && C(this._inst_inviteFriends) && this._inst_inviteFriends.active && this._inst_inviteFriends.getComponent(x).goBack(e), this.activeFlagIdx = Yt.SVFFI_NONE
        }
        focusOnAccount() {
            this.performButtonAction(Yt.SVFFI_ACCOUNT_SETTINGS)
        }
        focusOnInviteFriends(e = !0) {
            this.performButtonAction(Yt.SVFFI_INVITE_FRIENDS, e)
        }
        focusOnSettings(e = !0) {
            this.performButtonAction(Yt.SVFFI_GAME_SETTING, e)
        }
        performButtonAction(e, t = !1, i = null) {
            switch (e) {
                case Yt.SVFFI_ACCOUNT_SETTINGS:
                    R.action.showAction(this._inst_roleInfoSet, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, this.onFinishShowSubmenu.bind(this, e), 0, !0), this.moveRightMultipleBar(), this.setSubMenuPanel(this._inst_roleInfoSet, e);
                    break;
                case Yt.SVFFI_GAME_COLLECTION: {
                    let e = y.getSinglePrefabInst(A.getScene().getComponentInChildren(F).node, this.prefab_gameReview);
                    e && e.getComponent(y).autoShow(V.EDST_COLLECTION)
                }
                break;
                case Yt.SVFFI_GAME_RECORD: {
                    if (this.showTouristLimited("ViewStats_tourist_msg", e)) return;
                    let t = Z.getSinglePrefabInst(this.prefab_gameRecord);
                    null != t.parent && t.parent.uuid == this.node.uuid || this.node.addChild(t), R.action.showAction(t, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, this.onFinishShowSubmenu.bind(this, e), 0, !0), this.moveRightMultipleBar(), this.setSubMenuPanel(t, e)
                }
                break;
                case Yt.SVFFI_LOGIN_HISTORY:
                    if (this.showTouristLimited("LoginHistory_tourist_msg", e)) return;
                    null == this._inst_loginHistory && (this._inst_loginHistory = I(this.prefab_LoginHistory), A.getScene().addChild(this._inst_loginHistory), this._inst_loginHistory.setSiblingIndex(R.Enum.ZORDER_TYPE.ZORDER_2)), R.action.showAction(this._inst_loginHistory, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, null, 0, !0), R.MessageCenter.send("hide_mail_entrance", !0), this.setSubMenuPanel(this._inst_loginHistory, e);
                    break;
                case Yt.SVFFI_BONUS_HISTORY: {
                    if (this.showTouristLimited("BonusHistory_tourist_msg", e)) return;
                    let t = P.getSinglePrefabInst(this.prefab_BonusHistory);
                    null != t.parent && t.parent.uuid == this.node.uuid || this.node.addChild(t), R.action.showAction(t, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, this.onFinishShowSubmenu.bind(this, e), 0, !0), this.moveRightMultipleBar(), this.setSubMenuPanel(t, e)
                }
                break;
                case Yt.SVFFI_GAME_BACKPACK:
                    if (R.config.HAVE_MTT) {
                        if ("" == R.dataHandler.getUserData().mtt_url) return void R.TT.showMsg(R.config.getStringData("ResponseAuthApi_231"), R.Enum.ToastType.ToastTypeError);
                        if (!R.config.CAN_USE_WEBGL) return void R.TT.showMsg(R.config.getStringData("MTT_No_webgl"), R.Enum.ToastType.ToastTypeError);
                        R.config.setMTTWebIndex(1), this._backpack_node || (this._backpack_node = I(this.prefab_MttBackpack), this._backpack_node.getComponent(z).initBackpack()), this.showPage(this._backpack_node, e, this.node, t), this.moveRightMultipleBar()
                    }
                    break;
                case Yt.SVFFI_GAME_VIPTOOL: {
                    let e = R.dataHandler.getUserData().vipTool_url;
                    A.getScene().getComponentInChildren(F).node.getChildByName("activityView").getComponent(U).init(), A.getScene().getComponentInChildren(F).node.getChildByName("activityView").getComponent(U).showActivity_VIPTool(e)
                }
                break;
                case Yt.SVFFI_GAME_SETTING: {
                    let t = $.getSinglePrefabInst(this.prefab_systemSetting);
                    null != t.parent && t.parent.uuid == this.node.uuid || this.node.addChild(t), R.action.showAction(t, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, this.onFinishShowSubmenu.bind(this, e), 0, !0), this.moveRightMultipleBar(), this.setSubMenuPanel(t, e)
                }
                break;
                case Yt.SVFFI_RESPONSIBLE_GAMING: {
                    let t = B.getSinglePrefabInst(this.prefab_responsibleGaming);
                    t.getComponent(B).defaultState = N.Menu, R.action.addChildToSceneOnce(t), R.action.showAction(t, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, null, 0, !0), this.setSubMenuPanel(t, e)
                }
                break;
                case Yt.SVFFI_PLAYER_COMPLAINTS:
                    D.show(this.prefab_PlayerComplaints);
                    break;
                case Yt.SVFFI_HANDS_HISTORY:
                    if (this.showTouristLimited("HandsHistory_tourist_msg", e)) return;
                    null == this._inst_handsHistory && (this._inst_handsHistory = I(this.prefab_HandsHistory), A.getScene().addChild(this._inst_handsHistory)), R.action.showAction(this._inst_handsHistory, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, null, 0, !0), R.MessageCenter.send("hide_mail_entrance", !0), this.setSubMenuPanel(this._inst_handsHistory, e);
                    break;
                case Yt.SVFFI_GAME_TRANSACTIONS:
                    if (this.showTouristLimited("TransactionsHistory_tourist_msg", e)) return;
                    null == this._inst_gameTransactionsHistory && (this._inst_gameTransactionsHistory = I(this.prefab_GameTransactionsHistory), A.getScene().addChild(this._inst_gameTransactionsHistory)), R.action.showAction(this._inst_gameTransactionsHistory, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, null, 0, !0), R.MessageCenter.send("hide_mail_entrance", !0), this.setSubMenuPanel(this._inst_gameTransactionsHistory, e);
                    break;
                case Yt.SVFFI_TWO_FACTOR_AUTHENTICATION: {
                    if (this.showTouristLimited("TwoFactorAuth_tourist_msg", e)) return;
                    let t = H.getSinglePrefabInst(this.prefab_TwoFactorAuthentication);
                    R.action.addChildToSceneOnce(t), R.action.showAction(t, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, null, 0, !0), R.MessageCenter.send("hide_mail_entrance", !0), this.setSubMenuPanel(t, e)
                }
                break;
                case Yt.SVFFI_STATEMENT_DATA_REPORT: {
                    if (this.showTouristLimited("ReportRequest_tourist_msg", e)) return;
                    let t = G.getSinglePrefabInst(this.prefab_StatementDataReport);
                    R.action.addChildToSceneOnce(t), R.action.showAction(t, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, null, 0, !0), R.MessageCenter.send("hide_mail_entrance", !0), this.setSubMenuPanel(t, e)
                }
                break;
                case Yt.SVFFI_SIGN_OUT:
                    R.popUp.showMsgI18n({
                        txt: "ToastMessage10",
                        isTwoBtn: !0,
                        sureCallback: this._onSignOut.bind(this),
                        cancelLabel: "Signout_Confirmation_No",
                        sureLabel: "Signout_Confirmation_Yes"
                    });
                    break;
                case Yt.SVFFI_CHANGE_PASSWORD:
                    if (this.showTouristLimited("roleInfoSet_tips_usePassword_barntips_text", e)) return;
                    k.show(this.prefab_ChangeLoginPassword);
                    break;
                case Yt.SVFFI_GAME_LANGUAGE:
                    if (R.config.isThai()) R.TT.showMsg(R.config.getStringData("ChandgeLangue"), R.Enum.ToastType.ToastTypeError);
                    else {
                        let t = K.getSinglePrefabInst(this.prefab_LangSet);
                        R.action.addChildToSceneOnce(t), R.action.showAction(t, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, null, 0, !0), R.MessageCenter.send("hide_mail_entrance", !0), this.setSubMenuPanel(t, e)
                    }
                    break;
                case Yt.SVFFI_INVITE_FRIENDS:
                    if (this.showTouristLimited("selfview_InviteFriends_tourist_msg", e)) return;
                    this._inst_inviteFriends = x.getSinglePrefabInst(this.prefab_InviteFriends), this.showPage(this._inst_inviteFriends, e, this.node, t), this._inst_inviteFriends.getComponent(x).selfView = this, this.setMenuSideBarToCurrentPage(), this.moveRightMultipleBar();
                    break;
                case Yt.SVFFI_GAME_MY_TICKETS:
                    if (R.config.HAVE_MTT) {
                        if (this.showTouristLimited("", e)) return;
                        if ("" == R.dataHandler.getUserData().mtt_url) return void R.TT.showMsg(R.config.getStringData("ResponseAuthApi_231"), R.Enum.ToastType.ToastTypeError);
                        if (!R.config.CAN_USE_WEBGL) return void R.TT.showMsg(R.config.getStringData("MTT_No_webgl"), R.Enum.ToastType.ToastTypeError);
                        R.config.setMTTWebIndex(1), this._myTickets_node || (this._myTickets_node = I(this.prefab_MttMyTickets), this._myTickets_node.getComponent(ee).initTickets()), this.showPage(this._myTickets_node, e, this.node, !0), this.moveRightMultipleBar()
                    }
                    break;
                case Yt.SVFFI_KYC_VERIFICATION:
                    if (this.showTouristLimited("selfview_InviteFriends_tourist_msg", e)) return;
                    this._inst_kycVerification = ie.getSinglePrefabInst(this.prefab_KycVerification), this.showPage(this._inst_kycVerification, e, this.node, t), this.setMenuSideBarToCurrentPage(), this.moveRightMultipleBar()
            }
        }
        showTouristLimited(e, t = Yt.SVFFI_ACCOUNT_SETTINGS) {
            var i;
            const n = R.dataHandler.getUserData().showTouristLimited(e, null, null == (i = this.hallScene) ? void 0 : i.loginPopupParent);
            return n && (R.authenticator.autoShowTabInSelfView = {
                selfView: this,
                tabIndex: t
            }), n
        }
        showPage(e, t, i, n = !1) {
            !R.action.addChildToSceneOnce(e, i) && e.active || R.action.showAction(e, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, !0 === n ? R.action.delay_type.INSTANT : R.action.delay_type.NORMAL, null, this.onFinishShowSubmenu.bind(this, t), 0, !0), this.activeFlagIdx = t, this.setSubMenuPanel(e, t)
        }
        showPopup(e) {
            e.parent || A.getScene().getComponentInChildren(F).node.addChild(e), e.active = !0
        }
        _onSignOut() {
            R.authenticator.logOutAndDoGuestLogin()
        }
        setMenuSideBarButtonState(e) {
            var t;
            if (e < 0) return;
            null == (t = this.hallScene) || t.onSelfViewPageChange(e);
            let i = this.vBtns.length;
            for (let t = 0; t < i; ++t) {
                let i = this.vBtns[t].getComponent(v);
                if (i)
                    if (i.nTag == e) {
                        let e = this.vBtns[t].getComponent(j);
                        e && (e.btnState = q.pressed, e.isChecked = !0)
                    } else {
                        let e = this.vBtns[t].getComponent(j);
                        e && (e.btnState = q.normal, e.isChecked = !1)
                    }
            }
        }
        setMenuSideBarToCurrentPage() {
            this.setMenuSideBarButtonState(this.activeFlagIdx)
        }
        _onClickUserInfo(e) {
            R.AudioMgr.playButtonSound("tab.mp3"), this._inst_roleInfoSet && (R.MessageCenter.send("hide_mail_entrance"), R.action.showAction(this._inst_roleInfoSet, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, null, 0, !0))
        }
        _onMsgUpdateGold() {
            let e = R.dataHandler.getUserData();
            this.txt_user_wealth.string = R.StringTools.numToFloatString(R.Number(e.total_amount))
        }
        _onMsgUpdateInfo() {
            if (this._onMsgModifyInfo(), R.appConfig.isWebApp) {
                let e = R.dataHandler.getUserData();
                this.txt_user_id.string = `${R.config.getStringData("id")} ${e.getUserIdS()}`, this._updateLastLogin()
            }
        }
        _onMsgModifyInfo() {
            this._hasJustLogged && this.node.activeInHierarchy ? this.reloadDataAfterLogin() : this.updatePersionalInfo()
        }
        updatePersionalInfo() {
            let e = R.dataHandler.getUserData();
            this.OnUserAvatarChanged(e.headUrl), R.dataHandler.getUserData().isTouristUser ? (this.txt_user_name.string = le("Guest"), this.txt_user_id.string = "") : this.txt_user_name.string = R.String(e.nick_name), this.updateGenderUI(e), this._updateLastLogin(), this._preHeadUrl != e.headUrl && R.config.HAVE_MTT && (this._preHeadUrl = e.headUrl, R.config.HAVE_MTT && Q.instance.requestToken())
        }
        onLoginSuccess() {
            this._hasJustLogged = !0
        }
        reloadDataAfterLogin() {
            this._hasJustLogged = !1, this._preHeadUrl = R.dataHandler.getUserData().headUrl, C(this._inst_roleInfoSet) || (this._inst_roleInfoSet = I(this.prefab_roleInfoSet), this._inst_roleInfoSet.active = !1, this.node.addChild(this._inst_roleInfoSet)), this.updateView(), this.updateVIPToolState(), this.updateButtons(), this.updateMTTState(), xt.tCollectPokerMapDataHallScene.vCollectUUidList = [], R.httpHandler.requestGetFavoriteList(R.dataHandler.getUserData().u32Uid, 1, xt.tCollectPokerMapDataHallScene.nPageNum, null), R.worldNet.requestSnapshotList(), this._openAvatar && (this._openAvatar = !1, R.MessageCenter.send("hide_mail_entrance"), R.action.showAction(this._inst_roleInfoSet, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, null, 0, !0), this._inst_roleInfoSet.getComponent(J).setPropte(!0), this._inst_roleInfoSet.getComponent(J).updateView(), this.moveRightMultipleBar())
        }
        OnUserAvatarChanged(e) {
            if (R.dataHandler.getUserData().isTouristUser && (e = ""), e instanceof m ? w.setHeadTexture(this.img_user_head.node, e, 1) : w.setCircleSprite(this.img_user_head.node, e), R.appConfig.isWebApp) {
                const e = `${this.img_user_head.node.uuid}${w.HEAD_NAME}`,
                    t = p(e, this.img_user_head.node.parent);
                if (C(t)) {
                    let e = t.getComponent(b);
                    if (!e) {
                        e = t.addComponent(b);
                        const i = this.img_user_head.node.getComponent(b);
                        e.alignMode = b.AlignMode.ON_WINDOW_RESIZE, e.isAlignLeft = !0, e.left = (null == i ? void 0 : i.left) ?? 10, e.top = e.bottom = e.right = 0
                    }
                }
            }
        }
        updateAvatarMaterial(e) {
            let t = w.getHeadNode(this.img_user_head.node);
            t && t.getComponent(u).setMaterial(e, 0)
        }
        updateGenderUI(e) {
            this.img_user_gender.node.active = R.appConfig.getRegistrationConfig().showGenderField, R.appConfig.getRegistrationConfig().showGenderField || (this.txt_edit_profile.node.position = new T(this.img_user_gender.node.position.x, this.txt_edit_profile.node.position.y, this.txt_edit_profile.node.position.z)), 1 === e.gender ? R.resMgr.setSpriteFrame(this.img_user_gender.node, "zh_CN/hall/ui/male_icon") : R.resMgr.setSpriteFrame(this.img_user_gender.node, "zh_CN/hall/ui/female_icon")
        }
        _onMsgUpdateAlliance() {
            let e = R.clubDataMgr.getClubDataList();
            for (let t = 0; t < e.length && (e[t].club.club_owner !== R.dataHandler.getUserData().u32Uid || !e[t].club.has_create_alliance && !e[t].club.has_join_otheralliance); ++t);
            this.updateBtnsPos()
        }
        updateMTTState() {
            let e = R.config.HAVE_MTT;
            for (let t = 0; t < this.vBtns.length; ++t) {
                let i = this.vBtns[t].getComponent(v);
                if (i && i.nTag === Yt.SVFFI_GAME_BACKPACK) {
                    this.vBtns[t].node.active = e && R.appConfig.getUserProfileConfig().showBackpack;
                    break
                }
                if (i && i.nTag === Yt.SVFFI_GAME_MY_TICKETS) {
                    this.vBtns[t].node.active = e && R.appConfig.getUserProfileConfig().showMyTickets;
                    break
                }
            }
            this.updateBtnsPos()
        }
        updateVIPToolState() {
            let e = !0;
            (R.config.isSiyuType() || R.config.getCurrentLanguage() != R.Enum.LANGUAGE_TYPE.zh_CN) && (e = !1);
            for (let t = 0; t < this.vBtns.length; ++t) {
                let i = this.vBtns[t].getComponent(v);
                if (i && i.nTag === Yt.SVFFI_GAME_VIPTOOL) {
                    this.vBtns[t].node.active = e;
                    break
                }
            }
            this.updateBtnsPos()
        }
        updateBtnsPos() {
            let e = 0;
            for (let t = 0; t < this.vBtns.length; ++t) this.vBtns[t].node.active && this.vBtns[t].node.setPosition(this._vBtnsSrcPos[e++]);
            this.scrollview.content.getComponent(f).setContentSize(new S(this.scrollview.content.getComponent(f).width, e * this.vBtns[0].node.getComponent(f).height))
        }
        showSiYuMtt() {
            let e = 0;
            M.os == M.OS.IOS && R.config.IS_IPHONEX_SCREEN && (e = 0);
            let t = R.StringTools.formatC('{"cmd": "1006", "url":"%s", "op":1, "width":%d, "height":%d}', R.dataHandler.getUserData().mtt_url + this._backpack_url, R.config.WIDTH, R.config.HEIGHT - e);
            R.native.SYwebjsToClient(t)
        }
        openAvatar() {
            this._openAvatar = !0, this._inst_roleInfoSet && (this._openAvatar = !1, R.MessageCenter.send("hide_mail_entrance"), R.action.showAction(this._inst_roleInfoSet, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL, null, null, 0, !0), this._inst_roleInfoSet.getComponent(J).setPropte(!0), this._inst_roleInfoSet.getComponent(J).updateView(), this.moveRightMultipleBar())
        }
        onBtnInviteFriendsClick(e) {
            if (e && R.AudioMgr.playButtonSound("button_click.mp3"), !this.prefab_ReferFriends || R.dataHandler.getUserData().showTouristLimited("selfview_InviteFriends_tourist_msg")) return;
            let t = W.getSinglePrefabInst(this.prefab_ReferFriends);
            this.showPopup(t), t.getComponent(W).selfView = this, x.inviteFriendP2PEvent(Y.InviteButton)
        }
        moveRightMultipleBar() {
            var e;
            R.appConfig.isLandscapeLayout || (null == (e = X.instance) || e.moveHeaderToRight(this.AVERAGE_BACK_WIDTH))
        }
        getCurrentActiveFlag() {
            return this.activeFlagIdx
        }
        onUodataRedPacketsPos() {
            let e = R.dataHandler.getUserData().getHelpWarpList();
            for (let t = 0; t < this.vBtns.length; t++) {
                let i = this.vBtns[t].getComponent(v);
                if (i && i.nTag == Yt.SVFFI_MY_RED_PACKETS) {
                    let i = p("icon_dot", this.vBtns[t].node);
                    C(i) && (i.active = e.length > 0);
                    break
                }
            }
        }
        onOpenRedPackets() {
            let e = te.getSinglePrefabInst(this.prefab_MyRedPackets);
            R.action.addChildToSceneOnce(e), R.action.showAction(e, R.action.eMoveActionDir.EMAD_TO_LEFT, R.action.eMoveActionType.EMAT_FADE_IN, R.action.delay_type.NORMAL), e.getComponent(te).show(), R.MessageCenter.send("hide_mail_entrance", !0)
        }
        onFinishShowSubmenu(e) {
            E("[SelfView] onFinishShowSubmenu", e), R.appConfig.isWebApp ? ae.getInstance().sendShowBackButton(!0) : R.MessageCenter.send(R.Enum.MessageCenterAction.DisableTopAppLogo)
        }
        onClickAppInstallButton(e) {
            this.downloadBannerUrl && M.openURL(this.downloadBannerUrl)
        }
        onClickCloseAppInstallButton(e) {
            this.appInstallNode.active = !1, ae.getInstance().sendCloseDownloadBanner()
        }
        updateAddToHomeScreenButton(e) {
            R.appConfig.getUserProfileConfig().addToHomeEnabled && this.addToHomeScreenNode && (re.getInstance().info = e, this.addToHomeScreenNode.active = re.getInstance().isAvailableAddToHomeScreen(), re.getInstance().previousAvailableStatus = this.addToHomeScreenNode.active)
        }
        handleDownloadBannerInfo(e) {
            R.appConfig.getUserProfileConfig().installAppEnabled && (this.appInstallNode.active = !e.isInstallBannerDisabled, this.downloadBannerUrl = e.downloadLink, this.updateDownloadBannerInfo(e))
        }
        updateDownloadBannerInfo(e) {
            if (this.appInstallNode.active && e.content) {
                const t = p("layout/content/Label1", this.appInstallNode),
                    i = null == t ? void 0 : t.getComponent(_);
                i && (i.string = e.content.title);
                const n = p("layout/content/Label2", this.appInstallNode),
                    s = null == n ? void 0 : n.getComponent(_);
                s && (s.string = e.content.description);
                const o = p("InstallBtn/Label", this.appInstallNode).getComponent(_);
                o && (o.string = e.content.downloadButtonText)
            }
        }
        setSubMenuPanel(e, t) {
            this._subPanels[t] = e
        }
        onNotificationOpen(e) {
            if (!R.appConfig.isLandscapeLayout && C(this.node) && this.node.active)
                if (e) R.MessageCenter.send(R.Enum.MessageCenterAction.DisableTopAppLogo);
                else {
                    0 == this._subPanels.filter((e => C(e) && e.active)).length && R.MessageCenter.send(R.Enum.MessageCenterAction.EnableTopAppLogo)
                }
        }
    }).prototype, "prefab_gameReview", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = t(st.prototype, "prefab_gameRecord", [Ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = t(st.prototype, "prefab_systemSetting", [Ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = t(st.prototype, "prefab_responsibleGaming", [Fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = t(st.prototype, "prefab_roleInfoSet", [me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = t(st.prototype, "prefab_LangSet", [Me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = t(st.prototype, "prefab_MttBackpack", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = t(st.prototype, "prefab_LoginHistory", [ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = t(st.prototype, "prefab_BonusHistory", [we], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = t(st.prototype, "prefab_PlayerComplaints", [Ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = t(st.prototype, "prefab_HandsHistory", [Ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = t(st.prototype, "prefab_GameTransactionsHistory", [ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), St = t(st.prototype, "prefab_TwoFactorAuthentication", [Oe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), It = t(st.prototype, "prefab_StatementDataReport", [Le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Tt = t(st.prototype, "prefab_ChangeLoginPassword", [Be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = t(st.prototype, "prefab_AccountSettings", [Pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ct = t(st.prototype, "prefab_InviteFriends", [Re], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), At = t(st.prototype, "prefab_ReferFriends", [ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ft = t(st.prototype, "prefab_MttMyTickets", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = t(st.prototype, "prefab_MyRedPackets", [Ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Mt = t(st.prototype, "prefab_KycVerification", [He], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Et = t(st.prototype, "txt_edit_profile", [Ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = t(st.prototype, "txt_user_name", [xe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = t(st.prototype, "txt_user_id", [Ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Nt = t(st.prototype, "txt_user_mark", [Ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Vt = t(st.prototype, "txt_user_wealth", [ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), vt = t(st.prototype, "txt_user_last_login", [We], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ot = t(st.prototype, "img_user_head", [Je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Lt = t(st.prototype, "img_user_gender", [$e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Bt = t(st.prototype, "panel_1", [qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Pt = t(st.prototype, "panel_2", [je], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Rt = t(st.prototype, "panel_3", [Xe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = t(st.prototype, "btn_user_info", [Ze], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Dt = t(st.prototype, "scrollview", [Qe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Gt = t(st.prototype, "buttonIcons", [et], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Ht = t(st.prototype, "appInstallNode", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ut = t(st.prototype, "addToHomeScreenNode", [it], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = st)) || nt));
    n._RF.pop()
}