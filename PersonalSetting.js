import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as v from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as l from "./cc.js";
import * as A from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as k from "./ImpokerHall.js";
import * as b from "./SystemAvatar.js";
import * as S from "./SelfAvatar.js";
import * as y from "./EditSelfAvatar.js";
import * as N from "./EditNickname.js";
import * as E from "./worldWebsocket.js";
import * as D from "./Translator.js";
import * as _ from "./AndroidBackButton.js";
import * as L from "./NodeTools.js";

function main() {
    var I, w, C, G, T, O, R, B, M, P, x, H, z, U, F, $, W, V, q, K, j, J, Q, X, Y, Z, tt, et, it, at, st, nt;
    a._RF.push({}, "8a771+NG7VN6a4miwiUl3mm", "PersonalSetting", void 0);
    const {
        ccclass: rt,
        property: ot
    } = l;
    var lt = t("SettingAction", s({
            none: 0,
            systemAvatar: 1,
            selfAvatar: 2,
            nickname: 3
        })),
        ct = t("AvatarType", s({
            none: 0,
            system: 1,
            self: 2
        })),
        ht = s({
            undefined: 0,
            male: 1,
            female: 2
        });
    t("PersonalSetting", (I = ot(n), w = ot(r), C = ot(n), G = ot(n), T = ot(r), O = ot(r), R = ot(o), B = ot(b), M = ot(S), P = ot(y), x = ot(N), H = ot(o), z = ot(o), U = ot(o), F = ot(o), rt((V = e((W = class extends c {
        constructor(...t) {
            super(...t), i(this, "avatar", V, this), i(this, "nickname", q, this), i(this, "femaleSelector", K, this), i(this, "maleSelector", j, this), i(this, "phone", J, this), i(this, "userID", Q, this), i(this, "blockLayer", X, this), i(this, "systemAvatar", Y, this), i(this, "selfAvatar", Z, this), i(this, "editSelfAvatar", tt, this), i(this, "editNickname", et, this), i(this, "loading", it, this), i(this, "loadingIcon", at, this), i(this, "confirmButton", st, this), i(this, "uploadMessage", nt, this), this._impokerHall = null, this._previewTexture = null, this.action = lt.none, this.isAvatar = ct.none, this.previewScale = 300 / 512, this.gender = ht.undefined, this.isGender = !1, this.isClick = !1
        }
        onLoad() {
            this._impokerHall = h.getScene().getComponentInChildren(k), this.confirmButton.active = !1
        }
        onEnable() {
            this.init()
        }
        init() {
            g.isNative && g.os === g.OS.ANDROID && _.getInstance().addBackFunction("PersonalSetting", this.onClickBack.bind(this)), this._previewTexture = null, this.action = lt.none, this.isAvatar = ct.none, this.previewScale = Math.max(this.avatar.node.parent.getComponent(u).width, this.avatar.node.parent.getComponent(u).height) / 512, this.gender = cc_mtt.vv.DataManager.userData.Gender, this.isGender = !1, this.isClick = !1, this.selfAvatar.initSet(), this.updateUI()
        }
        updateUI() {
            this.updateAvatar(!1), this.updateNickname(), this.updateGender(), this.updatePhone(cc_mtt.vv.DataManager.userData.AreaCode, cc_mtt.vv.DataManager.userData.Mobile), this.userID.string = cc_mtt.vv.DataManager.userId
        }
        minScale(t, e) {
            return t <= e ? 512 / t : 512 / e
        }
        setImage(t, e = 1) {
            t && t.node ? (t.node.getComponent(u).width = this._previewTexture.width, t.node.getComponent(u).height = this._previewTexture.height, t.node.scale = new m(Math.max(this.minScale(this._previewTexture.width, this._previewTexture.height), this.selfAvatar.editInfo.scale) * e), t.node.position = new m(this.selfAvatar.editInfo.x * e, this.selfAvatar.editInfo.y * e, t.node.position.z), t.spriteFrame = new d, t.spriteFrame.texture = this._previewTexture) : cc_mtt.vv.ConsoleLog.error("PersonalSetting sprite or sprite.node is null")
        }
        loadWebImage(t, e) {
            cc_mtt.vv.AssetsManager.loadWebImage(t, e, null, (e => {
                this._previewTexture = e, this.setImage(t, this.previewScale)
            }))
        }
        updateAvatar(t, e = !1) {
            e ? this.setImage(this.avatar, this.previewScale) : this.loadWebImage(this.avatar, cc_mtt.vv.AssetsManager.getAvatarUrl(cc_mtt.vv.DataManager.avatarId, {
                isThumbnails: !1,
                timestamp: Date.now()
            }))
        }
        updateNickname() {
            this.nickname.string = cc_mtt.vv.DataManager.userData.Nickname
        }
        updateGender() {
            this.femaleSelector.enabled = this.gender === ht.female, this.maleSelector.enabled = this.gender === ht.male, this.isGender = this.gender !== cc_mtt.vv.DataManager.userData.Gender
        }
        addSpace(t, e, i) {
            if (t.length === e)
                for (let e = 0; e < i.length; e++) t = `${t.slice(0,i[e])} ${t.slice(i[e])}`;
            return t
        }
        updatePhone(t, e) {
            switch (t) {
                case "86":
                    e = this.addSpace(e, 11, [3, 8]);
                    break;
                case "852":
                    e = this.addSpace(e, 8, [4])
            }
            this.phone.string = `+${t} ${e}`
        }
        moveNode(t, e, i, a) {
            t.node.active = !0, v(t.node).sequence(v().call((() => {
                t.widget.updateAlignment()
            })), i, v().call((() => {
                a(), t.node.active = e
            }))).start()
        }
        triggerLoading(t, e = !1) {
            this.loading.active = t, t ? v(this.loadingIcon).by(.63, {
                angle: 360
            }).repeatForever().start() : (p.stopAllByTarget(this.loadingIcon), e && v(this.uploadMessage.getComponent(A)).to(.01, {
                opacity: 255
            }).delay(1.55).to(.3, {
                opacity: 0
            }).start())
        }
        triggerBlockLayer(t) {
            this.blockLayer.active = t
        }
        triggerAvatar(t) {
            t && this.editSelfAvatar.init(this), this.moveNode(this.editSelfAvatar, t, v().to(.1, {
                position: f((t ? 0 : 1) * this.editSelfAvatar.node.getComponent(u).width, 0)
            }), (() => {
                this.editSelfAvatar.widget.left = t ? 0 : 1, this.editSelfAvatar.widget.right = t ? 0 : -1
            }))
        }
        triggerSystemAvatar(t) {
            this.action = t ? lt.systemAvatar : lt.none, this.triggerBlockLayer(t), t && this.systemAvatar.init(this), this.moveNode(this.systemAvatar, t, v().by(.1, {
                position: f(0, (t ? 1 : -1) * this.systemAvatar.node.getComponent(u).height)
            }), (() => {
                this.systemAvatar.widget.bottom = (t ? 0 : -1) * this.systemAvatar.node.getComponent(u).height
            }))
        }
        triggerSelfAvatar(t) {
            this.action = t ? lt.selfAvatar : lt.none, this.triggerBlockLayer(t), t && this.selfAvatar.init(this), this.moveNode(this.selfAvatar, t, v().by(.1, {
                position: f(0, (t ? 1 : -1) * this.selfAvatar.node.getComponent(u).height)
            }), (() => {
                this.selfAvatar.widget.bottom = (t ? 0 : -1) * this.selfAvatar.node.getComponent(u).height
            }))
        }
        triggerNickname(t) {
            this.action = t ? lt.nickname : lt.none, this.triggerBlockLayer(t), t && this.editNickname.init(this), this.moveNode(this.editNickname, t, v().by(.1, {
                position: f(0, (t ? 1 : -1) * this.editNickname.node.getComponent(u).height)
            }), (() => {
                this.editNickname.widget.bottom = (t ? 0 : -1) * this.editNickname.node.getComponent(u).height
            }))
        }
        successDialog() {
            this.triggerLoading(!1), cc_mtt.vv.AssetsManager.showDialogBox("", "PERSONAL_SETTING.GENERAL.DIALOG.UPLOAD_SUCCESS", !1, [{
                type: 0,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.LEAVE",
                callback: () => {
                    this.backToHall()
                }
            }], this._impokerHall.layers[7])
        }
        errorDialog(t, e = (() => {
            this.isClick = !1
        })) {
            this.triggerLoading(!1), cc_mtt.vv.AssetsManager.showDialogBox("", t, !1, [{
                type: 0,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.CONFIRM",
                callback: e
            }], this._impokerHall.layers[7])
        }
        checkChangeDialog(t) {
            cc_mtt.vv.AssetsManager.showDialogBox("", t, !1, [{
                type: 0,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.LEAVE",
                callback: () => {
                    this.backToHall()
                }
            }, {
                type: 0,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.EDIT",
                callback: () => {
                    this.isClick = !1
                }
            }], this._impokerHall.layers[7])
        }
        saveAvatar() {
            return new Promise(((t, e) => {
                this.isAvatar === ct.system ? this.systemAvatar.saveAvatar().then((i => {
                    i.status || -1 !== i.message.indexOf("onabort") && !i.message.indexOf("onerror") && !i.message.indexOf("ontimeout") ? t(i) : e(i.message)
                })) : this.isAvatar === ct.self ? this.selfAvatar.saveAvatar().then((i => {
                    i.status || -1 !== i.message.indexOf("onabort") && !i.message.indexOf("onerror") && !i.message.indexOf("ontimeout") ? t(i) : e(i.message)
                })) : t({
                    status: !0
                })
            }))
        }
        saveGender() {
            return new Promise(((t, e) => {
                if (this.isGender) {
                    cc_mtt.vv.DataManager.userData.Password && delete cc_mtt.vv.DataManager.userData.Password, cc_mtt.vv.DataManager.userData.Gender = this.gender;
                    let i = {
                        UserData: cc_mtt.vv.DataManager.userData
                    };
                    E.checkNetwork("requestUserUpdate") && e("saveGender requestUserUpdate return"), cc_mtt.vv.DataManager.worldNetwork.requestUserUpdate(i, (e => {
                        e.ErrorCode ? t({
                            status: !1,
                            message: D(`ERROR_CODE_PKW.${e.ErrorCode}`)
                        }) : t({
                            status: !0
                        })
                    }))
                } else t({
                    status: !0
                })
            }))
        }
        backToHall() {
            p.stopAllByTarget(this.uploadMessage), this._impokerHall.controlHallBlockLayer(!0, this.name), this._impokerHall.movePageToRight(this.node), setTimeout((() => {
                L.setNodeOpacity(this.uploadMessage, 0), this._impokerHall.controlHallBlockLayer(!1, this.name)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
        onClickBlockLayer() {
            g.isNative && g.os === g.OS.ANDROID && _.getInstance().removeBackFunction(`SettingAction_${this.action}`);
            let t = !1;
            switch (this.action) {
                case lt.systemAvatar:
                    t = this.systemAvatar.setAvatar();
                    break;
                case lt.selfAvatar:
                    t = this.selfAvatar.onClickClose();
                    break;
                case lt.nickname:
                    t = this.editNickname.onClickOutside()
            }
            t && _.getInstance().addBackFunction(`SettingAction_${this.action}`, this.onClickBlockLayer.bind(this))
        }
        onClickBack() {
            g.isNative && g.os === g.OS.ANDROID && _.getInstance().removeBackFunction("PersonalSetting"), this.confirmButton.active && (this.isAvatar !== ct.none || this.isGender) ? this.checkChangeDialog("PERSONAL_SETTING.GENERAL.DIALOG.HAVE_CHANGE") : this.backToHall()
        }
        onClickAvatar() {
            g.isBrowser && this.isAvatar === ct.self && this.triggerAvatar(!0)
        }
        onClickSystemAvatar() {
            this.triggerSystemAvatar(!0)
        }
        onClickSelfAvatar() {
            this.triggerSelfAvatar(!0)
        }
        onClickNickname() {
            this.triggerNickname(!0)
        }
        onClickMale() {
            this.gender = ht.male, this.updateGender(), this.triggerConfirmButton()
        }
        onClickFemale() {
            this.gender = ht.female, this.updateGender(), this.triggerConfirmButton()
        }
        triggerConfirmButton() {
            this.confirmButton.active || this.onClickConfirm()
        }
        onClickConfirm() {
            if (this.confirmButton.active) {
                if (this.isClick) return;
                this.isClick = !0
            }
            this.isAvatar !== ct.none || this.isGender ? (this.triggerLoading(!0), Promise.all([this.saveAvatar(), this.saveGender()]).then((t => {
                if (t[0].status && t[1].status) this.confirmButton.active ? this.successDialog() : this.triggerLoading(!1, this.isAvatar === ct.self);
                else if (t[0].status || t[1].status)
                    if (t[0].status) {
                        if (!t[1].status) {
                            let e = {
                                Translation: "PERSONAL_SETTING.GENERAL.DIALOG.GENDER_FAIL",
                                payload: e => `${D(e)}\n${t[1].message}`
                            };
                            this.errorDialog(e)
                        }
                    } else {
                        let e = {
                            Translation: "PERSONAL_SETTING.GENERAL.DIALOG.AVATAR_FAIL",
                            payload: e => `${D(e)}\n${t[0].message}`
                        };
                        this.errorDialog(e, (() => {
                            this.isClick = !1, this.updateAvatar(!1)
                        }))
                    }
                else {
                    let e = {
                        Translation: "PERSONAL_SETTING.GENERAL.DIALOG.ALL_FAIL",
                        payload: e => `${D(e)}\n${t[0].message}\n${t[1].message}`
                    };
                    this.errorDialog(e, (() => {
                        this.isClick = !1, this.updateAvatar(!1)
                    }))
                }
                t[0].status && (this.isAvatar = ct.none, setTimeout((() => {
                    this._impokerHall.refreshUserInfo()
                }), 1e3)), t[1].status && (this.isGender = !1)
            })).catch((t => {
                this.errorDialog("PERSONAL_SETTING.GENERAL.DIALOG.NETWORK_ERROR"), cc_mtt.vv.ConsoleLog.log(`onClickConfirm ${t}`)
            }))) : this.checkChangeDialog("PERSONAL_SETTING.GENERAL.DIALOG.NO_CHANGE")
        }
    }).prototype, "avatar", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(W.prototype, "nickname", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(W.prototype, "femaleSelector", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(W.prototype, "maleSelector", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(W.prototype, "phone", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(W.prototype, "userID", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(W.prototype, "blockLayer", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(W.prototype, "systemAvatar", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(W.prototype, "selfAvatar", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(W.prototype, "editSelfAvatar", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(W.prototype, "editNickname", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(W.prototype, "loading", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(W.prototype, "loadingIcon", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(W.prototype, "confirmButton", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(W.prototype, "uploadMessage", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = W)) || $));
    a._RF.pop()
}