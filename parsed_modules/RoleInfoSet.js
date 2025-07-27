import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as U from "./cc.js";
import * as H from "./cc.js";
import * as N from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as E from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as S from "./cc.js";
import * as _ from "./cc.js";
import * as M from "./cc.js";
import * as D from "./cc.js";
import * as T from "./cc.js";
import * as b from "./cc.js";
import * as A from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as I from "./cc.js";
import * as k from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as V from "./SlideView.js";
import * as L from "./ChangePassword.js";
import * as B from "./UserProfileConfig.js";
import * as x from "./UserProfileConfig.js";
import * as O from "./aesHandler.js";
import * as R from "./CircleSprite.js";
import * as F from "./Enum.js";
import * as z from "./ScrollViewReuse.js";
import * as G from "./EditBoxValidator.js";
import * as W from "./cv.js";
import * as q from "./LoginScene.js";
import * as Y from "./RegisterView.js";
import * as Q from "./UpgradeView.js";
import * as Z from "./ValidateEmail.js";
import * as K from "./FakeMultipleGame.js";
import * as j from "./AnalyticsHandler.js";
import * as J from "./i18nText.js";
import * as X from "./MessageBroker.js";

function main() {
    var $, ee, te, ie, ae, ne, se, oe, re, le, he, de, ge, ce, ue, pe, me, fe, _e, Ce, Se, be, Pe, ve, ye, we, Ee, Ie, Ae, Te, De, He, Me, Ne, ke, Ue, Ve, Le, Be, xe, Oe, Re, Fe, ze, Ge, We, qe, Ye, Qe, Ze, Ke, je, Je, Xe, $e, et, tt, it, at, nt, st, ot, rt, lt, ht, dt, gt, ct, ut;
    a._RF.push({}, "f69eceJ/O1AXampey1snNBt", "RoleInfoSet", void 0);
    class pt {
        constructor() {
            this.head_url = "", this.ischoose = !1
        }
    }
    e("headData", pt);
    class mt {
        constructor() {
            this.itemData = []
        }
    }
    e("headRowData", mt);
    let ft = e("ePPFieldType", function(e) {
            return e[e.PPV_None = 0] = "PPV_None", e[e.PPV_UserName = 1] = "PPV_UserName", e[e.PPV_MobileNo = 2] = "PPV_MobileNo", e[e.PPV_Location = 3] = "PPV_Location", e[e.PPV_NickName = 4] = "PPV_NickName", e[e.PPV_EmailId = 5] = "PPV_EmailId", e[e.PPV_Gender = 6] = "PPV_Gender", e[e.PPV_Address = 7] = "PPV_Address", e[e.PPV_State = 8] = "PPV_State", e[e.PPV_FirstName = 9] = "PPV_FirstName", e[e.PPV_LastName = 10] = "PPV_LastName", e[e.PPV_Birthdate = 11] = "PPV_Birthdate", e[e.PPV_ZIP = 12] = "PPV_ZIP", e[e.PPV_City = 13] = "PPV_City", e[e.PPV_SSN = 14] = "PPV_SSN", e
        }({})),
        _t = e("requestType", function(e) {
            return e[e.requestType_modife = 0] = "requestType_modife", e[e.requestType_register = 1] = "requestType_register", e[e.requestType_upgrade = 2] = "requestType_upgrade", e
        }({}));
    e("cellType", function(e) {
        return e[e.NORMAL_CELL_TYPE = 0] = "NORMAL_CELL_TYPE", e[e.PHONE_CELL_TYPE = 1] = "PHONE_CELL_TYPE", e[e.PASSWORD_CELL_TYPE = 2] = "PASSWORD_CELL_TYPE", e[e.SECURITY_QUESTION_CELL_TYPE = 3] = "SECURITY_QUESTION_CELL_TYPE", e
    }({}));
    const {
        ccclass: Ct,
        property: St
    } = p;
    let bt = e("ProfileItemCellModel", ($ = Ct("ProfileItemCellModel"), ee = St(n), te = St(s), ie = St(o), ae = St({
        type: o(ft)
    }), $((oe = t((se = class {
        constructor() {
            i(this, "itemIcon", oe, this), i(this, "itemInfo", re, this), this.value = "", i(this, "cellType", le, this), i(this, "profileFiledType", he, this), this.showCheckmark = !1, this.showNotice = !1, this.isPlaceholder = !1, this.isVisible = !0
        }
    }).prototype, "itemIcon", [ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(se.prototype, "itemInfo", [te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), le = t(se.prototype, "cellType", [ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), he = t(se.prototype, "profileFiledType", [ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ft.PPV_None
        }
    }), ne = se)) || ne));
    e("RoleInfoSet", (de = St(r), ge = St(r), ce = St(r), ue = St(r), pe = St(r), me = St(l), fe = St(h), _e = St(d), Ce = St(h), Se = St(r), be = St(r), Pe = St(g), ve = St(l), ye = St(h), we = St(c), Ee = St(c), Ie = St({
        type: bt
    }), Ae = St(h), Te = St(h), De = St(r), He = St(r), Me = St(r), Ne = St(h), ke = St(g), Ue = St(G), Ve = St(r), Le = St(u), Be = St(u), Ct((Re = t((Oe = class extends m {
        constructor(...e) {
            super(...e), i(this, "roleinfo_panel", Re, this), i(this, "rolename_panel", Fe, this), i(this, "gender_panel", ze, this), i(this, "male_toggle", Ge, this), i(this, "female_toggle", We, this), i(this, "scrollView", qe, this), i(this, "headItem", Ye, this), this.itemData = [], this.isLoad = !1, this.chooseIndex = 0, i(this, "roleName", Qe, this), i(this, "ImagePicker_prefab", Ze, this), i(this, "chooseHead_panel", Ke, this), i(this, "system_panel", je, this), i(this, "userLastLogin", Je, this), i(this, "dataScrollView", Xe, this), i(this, "tempPrefab", $e, this), i(this, "avatar_confirmButton", et, this), i(this, "selectAvatarButton", tt, this), i(this, "profileItemModels", it, this), i(this, "updateSecurityPrefab", at, this), i(this, "validateEmailPrefab", nt, this), i(this, "confirmButton", st, this), i(this, "accountUpgradeButton", ot, this), i(this, "changePasswordButton", rt, this), i(this, "prefab_ChangeLoginPassword", lt, this), i(this, "systemAvatarLabel", ht, this), i(this, "nickNameEditBoxValidator", dt, this), i(this, "avatarLoading", gt, this), i(this, "normalSpriteMaterial", ct, this), i(this, "blurAvatarMaterial", ut, this), this.ImagePickerNode = null, this.headStr = "", this.systemHeadTime = 0, this.HEAD_COUNT = 200, this.isAllUncheck = !1, this.gender = 0, this.isclickbyprogram = !1, this._isSelfView = !1, this._cacheData = null, this.itemsData = [], this.validateEmailInst = null, this.systemPanelSlideView = null, this.urlAvatarList = [], this.currentScene = null, this._ishaveHead = !1, this.changePasswordPanel = null
        }
        onLoad() {
            if (this.adaptWidget(), W.appConfig.isPKW || W.appConfig.isWebApp && W.appConfig.isDev ? this.initHeadData() : W.httpHandler.getServerAvatars(this.initHeadDataFromAPI.bind(this)), f("roleImg/setRoleImg_Button", this.roleinfo_panel).active = !1, this.chooseHead_panel.active = !1, this.chooseHead_panel.setParent(_.getScene().getComponentInChildren(C).node), this.system_panel.active = !1, this.systemPanelSlideView = this.system_panel.getComponent(V), this.system_panel.setParent(_.getScene().getComponentInChildren(C).node), this.currentScene = W.config.getNodeScene(this.node), this.currentScene == F.GAME_SCENE && (this.registerMassage(), this.updateView()), W.appConfig.isLandscapeLayout || this.initProfileData(), this.nickNameEditBoxValidator.constraints[0].maxNr > 12 && (this.nickNameEditBoxValidator.constraints[0].max = "12"), W.MessageCenter.register(W.Enum.MessageCenterAction.OpenSecurityQuestion, this.openSecurityQuestion.bind(this), this.node), W.MessageCenter.register(W.Enum.MessageCenterAction.OpenValidateEmail, this.openValidateEmail.bind(this), this.node), W.appConfig.isWebApp) {
                const e = f("top_panel/backNode", this.node);
                e && (e.active = !1)
            }
        }
        enableComponents() {
            this.changePasswordButton.active = !W.dataHandler.getUserData().isTouristUser && W.appConfig.getUserProfileConfig().showChangePasswordAt(B.UserProfileSettings), this.accountUpgradeButton.active = !1, this.rolename_panel.active = !W.dataHandler.getUserData().isTouristUser, this.gender_panel.active = !W.dataHandler.getUserData().isTouristUser && W.appConfig.getRegistrationConfig().showGenderField
        }
        adaptWidget() {
            W.resMgr.adaptWidget(this.node)
        }
        onEnable() {
            this.enableComponents(), !W.dataHandler.getUserData().isTouristUser && this.dataScrollView && this.dataScrollView.node.active && this.fetchUserData(), W.appConfig.isLandscapeLayout || (W.MessageCenter.register("hall_bottom_lobby_button", this.goBack.bind(this, !0), this.node), W.MessageCenter.register("hall_bottom_profile_button", this.goBack.bind(this, !1), this.node)), W.appConfig.isWebApp && (W.MessageCenter.register(W.Enum.MessageCenterAction.onGoBack, (() => {
                var e, t;
                if (W.tools.visiblePopupCount > 0) W.popUp.hidePopup();
                else if (null != (e = this.chooseHead_panel) && e.active) this.hideChooseHeadPanel();
                else if (null != (t = this.changePasswordPanel) && t.active) {
                    let e = this.changePasswordPanel.getComponent(V);
                    e ? e.hide() : this.changePasswordPanel.active = !1
                } else this.onBtnBackClick()
            }).bind(this), this.node), W.MessageCenter.register("webApp_close_profile", (() => {
                var e, t, i;
                W.tools.visiblePopupCount > 0 && W.popUp.hidePopup(), null != (e = this.chooseHead_panel) && e.active && (this.chooseHead_panel.active = !1), null != (t = this.system_panel) && t.active && (this.system_panel.active = !1), null != (i = this.changePasswordPanel) && i.active && (this.changePasswordPanel.active = !1), this.goBack(!0)
            }).bind(this), this.node))
        }
        onBtnChangePassword() {
            if (W.AudioMgr.playButtonSound("tab.mp3"), W.dataHandler.getUserData().showTouristLimited("roleInfoSet_tips_usePassword_barntips_text")) return;
            const e = L.show(this.prefab_ChangeLoginPassword, _.getScene().getComponentInChildren(C).node);
            this.changePasswordPanel = e
        }
        openSecurityQuestion() {
            let e = S(this.updateSecurityPrefab);
            W.action.addChildToSceneOnce(e), e.setPosition(new b(0, 0)), e.setSiblingIndex(W.Enum.ZORDER_TYPE.ZORDER_7)
        }
        openValidateEmail() {
            this.validateEmailInst || (this.validateEmailInst = Z.getSinglePrefabInst(this.validateEmailPrefab).getComponent(Z)), this.validateEmailInst.backNode = this.node, W.action.showActionBothLeft(this.validateEmailInst.node, this.node)
        }
        start() {
            this.currentScene != F.GAME_SCENE && (this.registerMassage(), this.updateView())
        }
        registerMassage() {
            W.MessageCenter.register("update_info", this.OnModifyInfoCallBack.bind(this), this.node), W.MessageCenter.register("modify_info_succ", this.OnModifyInfoCallBack.bind(this), this.node), W.MessageCenter.register("clickHeadItem", this.clickHeadItem.bind(this), this.node), W.MessageCenter.register("native_onImageSaved", this.onImageSaved.bind(this), this.node), W.MessageCenter.register("UploadVarSuccess", this.onUploadSucess.bind(this), this.node), W.MessageCenter.register(W.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), W.MessageCenter.register("responseFailed_noNetwork", this.onInternetNotAvailable.bind(this), this.node)
        }
        onDestroy() {
            W.MessageCenter.unregister("update_info", this.node), W.MessageCenter.unregister("modify_info_succ", this.node), W.MessageCenter.unregister("clickHeadItem", this.node), W.MessageCenter.unregister("native_onImageSaved", this.node), W.MessageCenter.unregister("UploadVarSuccess", this.node), W.MessageCenter.unregister(W.Enum.MessageCenterAction.OpenSecurityQuestion, this.node), W.MessageCenter.unregister(W.Enum.MessageCenterAction.OpenValidateEmail, this.node), W.MessageCenter.unregister(W.config.CHANGE_LANGUAGE, this.node), W.MessageCenter.unregister("responseFailed_noNetwork", this.node)
        }
        onDisable() {
            W.appConfig.isLandscapeLayout || (W.MessageCenter.unregister("hall_bottom_lobby_button", this.node), W.MessageCenter.unregister("hall_bottom_profile_button", this.node)), W.appConfig.isWebApp && (W.MessageCenter.unregister(W.Enum.MessageCenterAction.onGoBack, this.node), W.MessageCenter.unregister("webApp_close_profile", this.node))
        }
        fetchUserData() {
            let e = W.config.getStringData("WEB_API_GET_USER_INFO", !0);
            W.http.sendRequestV2(e, null, this.onFetchUserDataSuccess.bind(this), this.onFetchUserDataFailed.bind(this), W.http.HttpRequestType.GET, W.http.HttpParseType.NONE, !1)
        }
        onInternetNotAvailable() {
            this.avatarLoading.active && this.setAvatarLoadingView(!1)
        }
        onFetchUserDataSuccess(e) {
            W.dataHandler.getUserData().email = e.email, this.itemsData = [];
            for (let t = 0, i = this.profileItemModels.length; t < i; t++) {
                switch (this.profileItemModels[t].profileFiledType) {
                    case ft.PPV_UserName:
                        this.profileItemModels[t].value = e.userName;
                        break;
                    case ft.PPV_NickName:
                        this.profileItemModels[t].value = e.nickName;
                        break;
                    case ft.PPV_EmailId:
                        this.profileItemModels[t].value = e.email, void 0 !== W.dataHandler.getUserData().emailValid && (this.profileItemModels[t].showCheckmark = W.dataHandler.getUserData().emailValid, this.profileItemModels[t].showNotice = !W.dataHandler.getUserData().emailValid);
                        break;
                    case ft.PPV_MobileNo:
                        this.profileItemModels[t].value = e.phone.areaCode + e.phone.mobile;
                        break;
                    case ft.PPV_FirstName:
                        this.profileItemModels[t].value = e.firstName || W.config.getStringData("firstName"), this.profileItemModels[t].isPlaceholder = !e.firstName;
                        break;
                    case ft.PPV_LastName:
                        this.profileItemModels[t].value = e.lastName || W.config.getStringData("lastName"), this.profileItemModels[t].isPlaceholder = !e.lastName;
                        break;
                    case ft.PPV_Gender:
                        if (this.profileItemModels[t].isVisible = W.appConfig.getRegistrationConfig().showGenderField, !W.appConfig.getRegistrationConfig().showGenderField) break;
                        e.gender ? 1 == e.gender ? (this.profileItemModels[t].value = "Male", this.profileItemModels[t].isPlaceholder = !1) : 2 == e.gender ? (this.profileItemModels[t].value = "Female", this.profileItemModels[t].isPlaceholder = !1) : (this.profileItemModels[t].value = "Not mentioned", this.profileItemModels[t].isPlaceholder = !0) : (this.profileItemModels[t].value = "Not mentioned", this.profileItemModels[t].isPlaceholder = !0);
                        break;
                    case ft.PPV_Birthdate:
                        if (e.dateOfBirth) {
                            try {
                                let i = new Date(e.dateOfBirth);
                                this.profileItemModels[t].value = W.StringTools.formatDateTimeByCountry(i.getTime(), !0, !1)
                            } catch (i) {
                                P(i), this.profileItemModels[t].value = e.dateOfBirth || W.config.getStringData("dateOfBirth")
                            }
                            this.profileItemModels[t].isPlaceholder = !e.dateOfBirth
                        } else this.profileItemModels[t].value = W.config.getStringData("dateOfBirth"), this.profileItemModels[t].isPlaceholder = !0;
                        break;
                    case ft.PPV_State:
                        this.profileItemModels[t].value = e.state || W.config.getStringData("state"), this.profileItemModels[t].isPlaceholder = !e.state;
                        break;
                    case ft.PPV_ZIP:
                        this.profileItemModels[t].value = e.postCode || W.config.getStringData("postCode"), this.profileItemModels[t].isPlaceholder = !e.postCode;
                        break;
                    case ft.PPV_City:
                        this.profileItemModels[t].value = e.city || W.config.getStringData("city"), this.profileItemModels[t].isPlaceholder = !e.city;
                        break;
                    case ft.PPV_Address:
                        this.profileItemModels[t].value = e.address || W.config.getStringData("address"), this.profileItemModels[t].isPlaceholder = !e.address;
                        break;
                    case ft.PPV_SSN:
                        this.profileItemModels[t].value = e.lastSsnDigits || W.config.getStringData("lastSsnDigits"), this.profileItemModels[t].isPlaceholder = !e.lastSsnDigits;
                        break;
                    default:
                        this.profileItemModels[t].value = ""
                }
                this.profileItemModels[t].isVisible && this.itemsData.push(this.profileItemModels[t])
            }
            this.dataScrollView.getComponent(z).reloadView(this.itemsData, !1), void 0 === W.dataHandler.getUserData().emailValid && W.dataHandler.getUserData().isEmailValid(this.emailValidCallback.bind(this))
        }
        emailValidCallback(e) {
            for (let t = 0, i = this.itemsData.length; t < i; t++)
                if (this.itemsData[t].profileFiledType == ft.PPV_EmailId) {
                    this.itemsData[t].showCheckmark = e, this.itemsData[t].showNotice = !e, this.dataScrollView.getComponent(z).reloadView(this.itemsData, !1);
                    break
                }
        }
        onFetchUserDataFailed(e) {
            W.popUp.showFirstServerError(e), this.goBack()
        }
        initProfileData() {
            if (this.dataScrollView && this.dataScrollView.node.active) {
                let e = this.dataScrollView.getComponent(z);
                e.bindPrefab(this.tempPrefab, "PlayerProfileItem"), e.generateItemPool(), e.bindScrollEventTarget(this)
            }
        }
        onUploadSucess(e) {
            this._cacheData && (this._cacheData.requestType == _t.requestType_modife ? W.httpHandler.ModifyPlayerInfo(this._cacheData.nick_name, this._cacheData.gender, e, this._cacheData.user_area) : this._cacheData.requestType == _t.requestType_register ? W.httpHandler.requestFinishRegister(this._cacheData.mobile, this._cacheData.nick_name, this._cacheData.passwd, "", "", this._cacheData.areaCode, this._cacheData.username, this._cacheData.invitation_code, e, this.gender) : W.httpHandler.requestFinishUpdateGrade(this._cacheData.mobile, this._cacheData.nick_name, this._cacheData.passwd, "", "", this._cacheData.areaCode, this._cacheData.username, this._cacheData.invitation_code, e, this.gender))
        }
        onImageSaved(e) {
            let t = f("roleImg/setRoleImg_Button", this.roleinfo_panel);
            t.active = !0, this.setAvatarLoadingView(!0), console.log("[RoleInfoSet] => onImageSaved(): " + JSON.stringify(e)), e && v.loadRemote(e.msg, function(i, a) {
                if (i) return void P("[RoleInfoSet] => onImageSaved() error: ", i);
                let n = new Uint8Array(y.fileUtils.getDataFromFile(e.msg)),
                    s = O.bytesToBase64(n);
                this.setHeadString(s), this._ishaveHead = !0;
                j.getInstance().sendEvent(W.Enum.CurrentScreen.profile, W.Enum.segmentEvent.InputFieldValueEntered, W.Enum.Functionality.registration, {
                    item: "avatarPicture"
                }), this.modifeRoleInfo(!0, !0, (() => {
                    let e = new w;
                    e.image = a, R.setHeadTexture(t, e, 1), W.MessageCenter.send(W.Enum.MessageCenterAction.OnUserAvatarChanged, e), this.setAvatarLoadingView(!1)
                }))
            }.bind(this))
        }
        setAvatarLoadingView(e) {
            if (e) {
                var t;
                let e = R.getHeadNode(f("roleImg/setRoleImg_Button", this.roleinfo_panel));
                e && e.getComponent(E).setSharedMaterial(this.blurAvatarMaterial, 0), this.avatarLoading.active = !0, null == (t = this.selectAvatarButton.getComponentInChildren(J)) || t.setKey("UploadingAvatar"), W.MessageCenter.send(W.Enum.MessageCenterAction.OnUserAvatarMaterialChanged, this.blurAvatarMaterial)
            } else {
                var i;
                let e = R.getHeadNode(f("roleImg/setRoleImg_Button", this.roleinfo_panel));
                e && e.getComponent(E).setSharedMaterial(this.normalSpriteMaterial, 0), this.avatarLoading.active = !1, null == (i = this.selectAvatarButton.getComponentInChildren(J)) || i.setKey("SetAvatar"), W.MessageCenter.send(W.Enum.MessageCenterAction.OnUserAvatarMaterialChanged, this.normalSpriteMaterial)
            }
        }
        setHeadString(e) {
            this.headStr = e, this.headStr = this.headStr.replace(/\+/g, "-"), this.headStr = this.headStr.replace(/\//g, "_")
        }
        initHeadData() {
            let e;
            e = W.appConfig.isWebApp && W.appConfig.isDev ? W.config.getStringData("WEB_SYS_AVATAR_URL_DEV", !0) + "/head_%d.png" : "zh_CN/common/head/head_%d";
            for (let t = 0; t < this.HEAD_COUNT;) {
                let i = new mt;
                for (let a = 0, n = this.getHeadColumnCount(); a < n; a++) {
                    let a = new pt;
                    if (a.head_url = W.StringTools.formatC(e, t + 1), i.itemData.push(a), W.appConfig.isWebApp && W.appConfig.isDev && (this.urlAvatarList[t] = a.head_url), t++, t >= this.HEAD_COUNT) break
                }
                this.itemData.push(i)
            }
        }
        initHeadDataFromAPI(e) {
            if (null == this.itemData) return;
            this.urlAvatarList = e.avatarUrls;
            let t = 0,
                i = this.urlAvatarList.length;
            for (; t < i;) {
                let e = new mt,
                    a = 0,
                    n = this.getHeadColumnCount();
                for (; a < n; a++) {
                    let a = new pt;
                    if (a.head_url = this.urlAvatarList[t], e.itemData.push(a), t++, t >= i) break
                }
                this.itemData.push(e)
            }
        }
        checkAndShowIsChoose() {
            if (0 != this.chooseIndex) return;
            const e = W.dataHandler.getUserData().headUrl;
            for (let t = 0; t < this.itemData.length; t++) {
                const i = this.itemData[t].itemData;
                for (let a = 0; a < this.getHeadColumnCount(); a++) {
                    const n = i[a].head_url;
                    if (e.includes(n)) {
                        this.chooseIndex = t * this.getHeadColumnCount() + a + 1, this.itemData[t].itemData[a].ischoose = !0;
                        break
                    }
                }
            }
        }
        getAvatarURLFromIndex(e) {
            return 0 == this.urlAvatarList.length ? e.toString() : this.urlAvatarList[e - 1]
        }
        initLanguage() {
            W.StringTools.setLabelString(this.roleinfo_panel, "updateaccount_button/Label", "RegisterTitle_Update_Text"), this.currentScene == W.Enum.SCENE.LOGIN_SCENE || W.dataHandler.getUserData().isOpenUpdateUserMode ? (W.StringTools.setLabelString(this.roleinfo_panel, "ok_button/Label", "LoginUITitle1"), W.StringTools.setLabelString(this.roleinfo_panel, "roleName_panel/tips_text", "roleInfoSet_tips_regiest_nicename_text")) : W.dataHandler.getUserData().isTouristUser ? (W.StringTools.setLabelString(this.roleinfo_panel, "ok_button/Label", "roleInfoSet_roOk_button"), W.StringTools.setLabelString(this.roleinfo_panel, "roleName_panel/tips_text", "roleInfoSet_tips_updateGrade_nicename_text")) : (W.StringTools.setLabelString(this.roleinfo_panel, "ok_button/Label", "roleInfoSet_roOk_button"), W.StringTools.setLabelString(this.roleinfo_panel, "roleName_panel/tips_text", "roleInfoSet_tips_nicename_text"));
            let e = this.confirmButton.getChildByName("Label").getComponent(g);
            e.string = W.StringTools.convertText(e.string, 2), this.systemAvatarLabel && (this.systemAvatarLabel.string = W.config.getStringData("roleInfoSet_chooseHead_button_system_text"))
        }
        showSystemHeadPanel() {
            this.hideChooseHeadPanel(), this.systemPanelSlideView ? this.systemPanelSlideView.show(!1) : this.system_panel.active = !0;
            let e = this.scrollView.getComponent(z);
            this.bindSystemHead(e)
        }
        hideSystemHeadPanel() {
            this.systemPanelSlideView ? this.systemPanelSlideView.hide() : this.system_panel.active = !1
        }
        bindSystemHead(e) {
            this.isLoad || (e.bindPrefab(this.headItem, "HeadItem", this.itemData), e.generateItemPool(), e.bindScrollEventTarget(this), this.isLoad = !0), this.checkAndShowIsChoose(), W.StringTools.getArrayLength(this.headStr) <= 0 && (this.chooseIndex = 1, this.updateHeadData(!0), this.headStr = "1"), e.reloadView(this.itemData, !0)
        }
        getHeadAvatarName() {
            let e = W.dataHandler.getUserData(),
                t = e.headUrl.lastIndexOf("/");
            return e.headUrl.slice(t + 1)
        }
        chooseHeadBydata() {
            let e = this.getHeadAvatarName();
            if (W.StringTools.isNumber(e)) {
                let t = W.Number(e);
                (t <= 0 || t > W.config.HEAD_LENGTH) && (t = 1), this.clickHeadItem(t)
            } else this.enableComponents(), this.updateView()
        }
        onBtnSetCustomHeadClick() {
            W.AudioMgr.playButtonSound("button_click.mp3"), W.dataHandler.getUserData().showTouristLimited("ChangeUserIcon_tourist_msg") || (W.config.isSiyuType() ? (W.MessageCenter.send("AlwaysNode_Active", !1), this.showChooseHeadPanel()) : W.StringTools.getArrayLength(this.headStr) > 0 ? W.MessageCenter.send("AlwaysNode_Active", !1) : this.openPhoto())
        }
        onBtnSystemClick() {
            W.AudioMgr.playButtonSound("button_click.mp3"), this.showSystemHeadPanel()
        }
        onBtnPhonePhotoClick() {
            W.AudioMgr.playButtonSound("button_click.mp3"), W.appConfig.isWebApp ? X.getInstance().sendShowDownloadPopup() : this.openPhoto()
        }
        openPhoto() {
            this.hideChooseHeadPanel(), this.scheduleOnce((() => {
                W.native.openImagePicker()
            }))
        }
        toRegisterOrUpgrade() {
            if (this.roleName.node.active = !0, W.StringTools.getArrayLength(this.headStr) <= 0 || !this._ishaveHead) return W.TT.showMsg(W.config.getStringData("ErrorToast47"), W.Enum.ToastType.ToastTypeWarning), W.MessageCenter.send("AlwaysNode_Active", !1), this.showChooseHeadPanel(), void this.hideSystemHeadPanel();
            let e = "";
            if (e = this.roleName.string, e.length <= 0) return void W.TT.showMsg(W.config.getStringData("ErrorToast3"), W.Enum.ToastType.ToastTypeWarning);
            if (!W.StringTools.isClubNameFormat(e)) return void W.TT.showMsg(W.config.getStringData("tips_no_special_words"), W.Enum.ToastType.ToastTypeWarning);
            if (W.StringTools.isSensitiveWords(e, !0)) return void W.TT.showMsg(W.config.getStringData("tips_no_sensitive_words"), W.Enum.ToastType.ToastTypeWarning);
            if (W.StringTools.getStrLen(e) < 4 || W.StringTools.getStrLen(e) > 12) {
                let e = W.StringTools.formatC(W.config.getStringData("EditBoxNickName1"), 4, 12);
                return void W.TT.showMsg(e, W.Enum.ToastType.ToastTypeError)
            }
            W.dataHandler.getUserData(), this.female_toggle.getComponent(I).isChecked, this.male_toggle.getComponent(I).isChecked;
            this.male_toggle.getComponent(I).isChecked ? this.gender = 1 : this.female_toggle.getComponent(I).isChecked ? this.gender = 2 : this.gender = 1;
            var t = "",
                i = "",
                a = "",
                n = "",
                s = "";
            if (W.dataHandler.getUserData().HeadPath = this.headStr, this.currentScene == W.Enum.SCENE.LOGIN_SCENE) {
                let e = this.node.getParent().getComponent(q);
                if (!A(e, !0)) return void cc_mtt.vv.ConsoleLog.log("Error : Null LoginScene In RoleInfoSet");
                t = f("phone_Panel/phoneNumber_text", e.registerView).getComponent(d).string, i = e.registerView.getComponent(Y).getAreacode(), a = e.getinvateCode(), n = f("account_panel1/account_text", e.setAccountAndPassword).getComponent(d).string, s = f("password_Panel/account_text", e.setAccountAndPassword).getComponent(d).string, e.saveAccountAndPsd(n, s)
            } else {
                let e = this.node.getParent().getComponent(Q);
                if (!A(e, !0)) return void cc_mtt.vv.ConsoleLog.log("Error : Null UpgradeView In RoleInfoSet");
                t = f("phone_Panel/phoneNumber_text", e.registerView).getComponent(d).string, i = e.registerView.getComponent(Y).getAreacode(), a = e.getinvateCode(), n = f("account_panel1/account_text", e.setAccountAndPassword).getComponent(d).string, s = f("password_Panel/account_text", e.setAccountAndPassword).getComponent(d).string, e.saveAccountAndPsd(n, s)
            }
            W.StringTools.isNumber(this.headStr) ? W.dataHandler.getUserData().isOpenUpdateUserMode ? W.httpHandler.requestFinishUpdateGrade(t, e, s, "", "", i, n, a, this.headStr, this.gender) : W.httpHandler.requestFinishRegister(t, e, s, "", "", i, n, a, this.headStr, this.gender) : (this._cacheData = {
                areaCode: i,
                mobile: t,
                nick_name: e,
                passwd: s,
                reg_code: "",
                v_code: "",
                username: n,
                invitation_code: a,
                gender: this.gender,
                requestType: W.dataHandler.getUserData().isOpenUpdateUserMode ? _t.requestType_upgrade : _t.requestType_register
            }, W.httpHandler.requestUploadVar(this.headStr))
        }
        onBtnUpdateClick() {
            W.AudioMgr.playButtonSound("button_click.mp3"), W.dataHandler.upgradeAccount()
        }
        modifeRoleInfo(e = !1, t = !1, i = (() => {})) {
            W.StringTools.getArrayLength(this.headStr) <= 0 && (this.headStr = this.getHeadAvatarName());
            let a = "";
            if (W.dataHandler.getUserData().is_allow_update_name && !e) {
                let e = this.nickNameEditBoxValidator.doValidate();
                if (!0 !== e) return void W.popUp.showMsg({
                    txt: e.toString(),
                    msgType: W.Enum.ToastType.ToastTypeWarning
                });
                if (a = this.roleName.string, !W.StringTools.isClubNameFormat(a)) return W.popUp.showMsg({
                    txt: W.config.getStringData("tips_no_special_words"),
                    msgType: W.Enum.ToastType.ToastTypeWarning
                }), void this.nickNameEditBoxValidator.showInvalidEffects();
                if (W.StringTools.isSensitiveWords(a, !0)) return W.popUp.showMsg({
                    txt: W.config.getStringData("tips_no_sensitive_words"),
                    msgType: W.Enum.ToastType.ToastTypeWarning
                }), void this.nickNameEditBoxValidator.showInvalidEffects()
            } else a = W.dataHandler.getUserData().nick_name;
            let n = W.dataHandler.getUserData();
            this.male_toggle.getComponent(I).isChecked ? this.gender = 1 : this.female_toggle.getComponent(I).isChecked ? this.gender = 2 : this.gender = 1, W.dataHandler.getUserData().HeadPath = this.headStr;
            let s = this.headStr == this.getHeadAvatarName();
            !W.appConfig.isPKW || W.StringTools.isNumber(this.headStr) || s ? (this.handleAvatarButtonState(!0), e ? W.httpHandler.UpdateAvatar(this.headStr.length > 0 ? this.headStr : "", t, (() => {
                this.handleAvatarButtonState(!1), i()
            })) : W.httpHandler.ModifyPlayerInfo(a, this.gender, this.headStr.length > 0 ? this.headStr : "", W.String(n.user_area), (() => {
                this.handleAvatarButtonState(!1)
            }))) : (this._cacheData = {
                nick_name: a,
                gender: this.gender,
                img_ext: "jpg",
                avatar: this.headStr.length > 0 ? this.headStr : "",
                avatar_thumb: this.headStr.length > 0 ? this.headStr : "",
                user_area: W.String(n.user_area),
                requestType: _t.requestType_modife
            }, W.httpHandler.requestUploadVar(this.headStr))
        }
        handleAvatarButtonState(e) {
            A(this.selectAvatarButton, !0) && (this.selectAvatarButton.interactable = !e)
        }
        onBtnSureClick() {
            if (W.AudioMgr.playButtonSound("button_click.mp3"), this.currentScene == W.Enum.SCENE.LOGIN_SCENE) {
                this.toRegisterOrUpgrade();
                let e = {
                    item: "doneButton"
                };
                j.getInstance().sendEvent(W.Enum.CurrentScreen.profile, W.Enum.segmentEvent.Clicked, W.Enum.Functionality.registration, e)
            } else W.dataHandler.getUserData().isOpenUpdateUserMode ? this.toRegisterOrUpgrade() : W.dataHandler.getUserData().isTouristUser || this.modifeRoleInfo()
        }
        ChooseSexByToggle(e, t) {
            if (!this.isclickbyprogram && (W.AudioMgr.playButtonSound("button_click.mp3"), this.currentScene == W.Enum.SCENE.LOGIN_SCENE)) {
                let e = {
                    item: "genderInput"
                };
                j.getInstance().sendEvent(W.Enum.CurrentScreen.profile, W.Enum.segmentEvent.InputFieldValueEntered, W.Enum.Functionality.registration, e)
            }
            if (1 == this.isAllUncheck) return void(this.isAllUncheck = !1);
            this.female_toggle.getComponent(I).isChecked, this.male_toggle.getComponent(I).isChecked;
            "man" == t ? (this.isclickbyprogram = !0, this.female_toggle.getComponent(I).isChecked = !this.male_toggle.getComponent(I).isChecked) : "woman" == t && (this.isclickbyprogram = !0, this.male_toggle.getComponent(I).isChecked = !this.female_toggle.getComponent(I).isChecked), this.isclickbyprogram = !1
        }
        setPropte(e) {
            this._isSelfView = e
        }
        OnModifyInfoCallBack() {
            this.enableComponents(), this.updateView()
        }
        updateView() {
            this.currentScene == W.Enum.SCENE.LOGIN_SCENE && j.getInstance().sendEvent(W.Enum.CurrentScreen.profile, W.Enum.segmentEvent.ScreenOpened, W.Enum.Functionality.registration), this.initLanguage();
            let e = W.dataHandler.getUserData();
            this.headStr = e.headUrl, this.updateHeadData(!1);
            let t = this.getHeadAvatarName();
            if (W.StringTools.isNumber(t)) {
                let e = W.Number(t);
                this.chooseIndex = e, this.headStr = e.toString(), this.updateHeadData(!0)
            } else this.chooseIndex = 0;
            this.updateHeadImg(), this.gender = e.gender, this.isclickbyprogram = !0, 0 == e.gender ? (this.isAllUncheck = !0, this.male_toggle.getComponent(I).isChecked = !1, this.isAllUncheck = !0, this.isclickbyprogram = !0, this.female_toggle.getComponent(I).isChecked = !1) : 1 == e.gender ? (this.male_toggle.getComponent(I).isChecked = !0, this.isclickbyprogram = !0, this.female_toggle.getComponent(I).isChecked = !1) : 2 == e.gender && (this.male_toggle.getComponent(I).isChecked = !1, this.isclickbyprogram = !0, this.female_toggle.getComponent(I).isChecked = !0), this.UpdateStatusNickname(), W.dataHandler.getUserData().isTouristUser ? f("roleName_panel/tips_text", this.roleinfo_panel).active = !1 : f("roleName_panel/tips_text", this.roleinfo_panel).active = W.appConfig.getUserProfileConfig().nickNameChangeEnable && W.dataHandler.getUserData().is_allow_update_name;
            this.currentScene == W.Enum.SCENE.HALL_SCENE && W.dataHandler.getUserData().isOpenUpdateUserMode;
            W.dataHandler.getUserActivityData().updateLastLoginLabel(this.userLastLogin)
        }
        UpdateStatusNickname() {
            let e = !0;
            this.currentScene == W.Enum.SCENE.LOGIN_SCENE ? (e = !0, this.roleName.string = 0 == this.roleName.string.length ? "" : this.roleName.string) : W.dataHandler.getUserData().isTouristUser ? (e = !1, this.roleName.string = W.dataHandler.getUserData().nick_name) : W.dataHandler.getUserData().is_allow_update_name && W.appConfig.getUserProfileConfig().nickNameChangeEnable ? (e = !0, this.roleName.string = 0 == this.roleName.string.length ? W.dataHandler.getUserData().nick_name : this.roleName.string) : (e = !1, this.roleName.string = W.dataHandler.getUserData().nick_name ? W.dataHandler.getUserData().nick_name : ""), this.nickNameEditBoxValidator.interactable = e, this.confirmButton.active = e || W.appConfig.getRegistrationConfig().showGenderField
        }
        updateHeadImg() {
            const e = W.dataHandler.getUserData().isTouristUser ? "" : this.headStr;
            let t = f("roleImg/setRoleImg_Button", this.roleinfo_panel);
            t.active = !0, R.setCircleSprite(t, e, 0, !0), this._ishaveHead = "" != this.headStr
        }
        updateHeadData(e) {
            if (console.log("chooseIndex:" + this.chooseIndex), this.chooseIndex > 0) {
                let t = this.chooseIndex - 1,
                    i = this.getHeadColumnCount(),
                    a = Math.floor(t / i),
                    n = t % i;
                console.log("group:" + a + "  group_index:" + n), this.itemData.length > 0 && this.itemData.length > a && (this.itemData[a].itemData[n].ischoose = e, this.avatar_confirmButton.interactable = e)
            }
        }
        clickHeadItem(e) {
            this._isSelfView && W.dataHandler.getUserData().isOpenUpdateUserMode || this.chooseIndex != e && (this.updateHeadData(!1), this.chooseIndex = e, console.log("clickHeadItem chooseIndex:", this.chooseIndex, e), this.updateHeadData(!0), this.headStr = this.getAvatarURLFromIndex(e), this.systemHeadTime = (new Date).getTime(), this.reloadHeadData())
        }
        reloadHeadData() {
            if (A(this.scrollView, !0)) {
                var e;
                let t = null == (e = this.scrollView) ? void 0 : e.getComponent(z);
                null == t || t.reloadView(this.itemData, !1)
            }
        }
        onBtnSysCompleteClick() {
            this.closeSystemHeadPanel(), this.setAvatarLoadingView(!0), this.modifeRoleInfo(!0, !1, (() => {
                this.updateHeadImg(), W.MessageCenter.send(W.Enum.MessageCenterAction.OnUserAvatarChanged, this.headStr), this.setAvatarLoadingView(!1)
            }))
        }
        closeSystemHeadPanel() {
            this.hideSystemHeadPanel(), this.hideChooseHeadPanel(), W.MessageCenter.send("AlwaysNode_Active", !0)
        }
        onClickChooseHeadPanel() {
            this.showAvatarAccessDenied() || (W.appConfig.getUserProfileConfig().userAvatarAccepted !== x.System ? W.appConfig.getUserProfileConfig().userAvatarAccepted !== x.Custom ? (this.chooseHead_panel.active = !0, W.MessageCenter.send("AlwaysNode_Active", !0)) : this.openPhoto() : this.showSystemHeadPanel())
        }
        onClickbackButton() {
            W.MessageCenter.send("exitRoleInfoSet");
            j.getInstance().sendEvent(W.Enum.CurrentScreen.profile, W.Enum.segmentEvent.Clicked, W.Enum.Functionality.registration, {
                item: "backButton"
            })
        }
        onBtnBackClick() {
            W.AudioMgr.playButtonSound("back_button.mp3"), this.goBack()
        }
        goBack(e = !1) {
            if (A(this, !0))
                if (A(this.system_panel, !0) && this.system_panel.active) this.closeSystemHeadPanel();
                else {
                    let i;
                    var t;
                    if (this.updateHeadData(!1), this.chooseIndex = 0, i = 1 == e ? W.action.delay_type.INSTANT : W.action.delay_type.NORMAL, this.showLogoBack(), W.action.showAction(this.node, W.action.eMoveActionDir.EMAD_TO_RIGHT, W.action.eMoveActionType.EMAT_FADE_OUT, i, ((e, t) => {}), ((e, t) => {})), !W.appConfig.isLandscapeLayout) null == (t = K.instance) || t.moveHeaderToLeft();
                    if (this.currentScene == F.GAME_SCENE) {
                        if (W.dataHandler.getUserData().isTouristUser) return;
                        let e = W.dataHandler.getUserData().headUrl,
                            t = e.lastIndexOf("/"),
                            i = e.slice(t + 1);
                        !W.StringTools.isNumber(i) && W.dataHandler.getActivityData().AvatarCallBack && W.dataHandler.getActivityData().AvatarCallBack()
                    }
                }
        }
        showLogoBack() {
            W.appConfig.isWebApp ? X.getInstance().sendShowBackButton(!1) : W.MessageCenter.send(W.Enum.MessageCenterAction.EnableTopAppLogo)
        }
        showChooseHeadPanel() {
            this.chooseHead_panel.active = !0;
            let e = f("panel_bg", this.chooseHead_panel).getComponent(T);
            e.opacity = 0, D(e).to(.2, {
                opacity: 100
            }).start();
            let t = f("layout", this.chooseHead_panel);
            H.stopAllByTarget(t);
            let i = -W.config.HEIGHT / 2 / this.node.scale.y;
            if (t.setPosition(t.getPosition().x, i - t.getComponent(M).height), D(t).to(.2, {
                    position: N(t.position.x, i, t.position.z)
                }).start(), W.config.isSiyuType()) {
                let e = t.getChildByName("button_phone"),
                    i = e.getChildByName("Background"),
                    a = e.getChildByName("Label");
                e.getComponent(c).interactable = !1, a.getComponent(k).color = U(99, 99, 99), i.getComponent(k).color = U(99, 99, 99)
            }
        }
        getHeadColumnCount() {
            return 4
        }
        showAvatarAccessDenied() {
            return W.dataHandler.getUserData().showTouristLimited()
        }
        hideChooseHeadPanel() {
            let e = this.chooseHead_panel.getComponent(V);
            e ? e.hide() : this.chooseHead_panel.active = !1
        }
    }).prototype, "roleinfo_panel", [de], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Fe = t(Oe.prototype, "rolename_panel", [ge], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ze = t(Oe.prototype, "gender_panel", [ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ge = t(Oe.prototype, "male_toggle", [ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), We = t(Oe.prototype, "female_toggle", [pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), qe = t(Oe.prototype, "scrollView", [me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ye = t(Oe.prototype, "headItem", [fe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Qe = t(Oe.prototype, "roleName", [_e], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ze = t(Oe.prototype, "ImagePicker_prefab", [Ce], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Ke = t(Oe.prototype, "chooseHead_panel", [Se], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), je = t(Oe.prototype, "system_panel", [be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Je = t(Oe.prototype, "userLastLogin", [Pe], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Xe = t(Oe.prototype, "dataScrollView", [ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $e = t(Oe.prototype, "tempPrefab", [ye], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = t(Oe.prototype, "avatar_confirmButton", [we], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = t(Oe.prototype, "selectAvatarButton", [Ee], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = t(Oe.prototype, "profileItemModels", [Ie], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), at = t(Oe.prototype, "updateSecurityPrefab", [Ae], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = t(Oe.prototype, "validateEmailPrefab", [Te], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = t(Oe.prototype, "confirmButton", [De], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = t(Oe.prototype, "accountUpgradeButton", [He], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = t(Oe.prototype, "changePasswordButton", [Me], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = t(Oe.prototype, "prefab_ChangeLoginPassword", [Ne], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = t(Oe.prototype, "systemAvatarLabel", [ke], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = t(Oe.prototype, "nickNameEditBoxValidator", [Ue], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = t(Oe.prototype, "avatarLoading", [Ve], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = t(Oe.prototype, "normalSpriteMaterial", [Le], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = t(Oe.prototype, "blurAvatarMaterial", [Be], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), xe = Oe)) || xe));
    a._RF.pop()
}