import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as v from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as A from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./AndroidBackButton.js";
import * as d from "./Translator.js";
import * as u from "./EditSelfAvatar.js";
import * as p from "./PersonalSetting.js";
import * as m from "./PersonalSetting.js";
import * as f from "./SelfAvatar.js";
import * as S from "./SystemAvatar.js";

function main() {
    var y, L, E, I, b, w, _, k, T, C, N, D, G, x, R, O;
    a._RF.push({}, "931b7HMncpNLpReRI5bGk8I", "AvatarSetting", void 0);
    const {
        ccclass: P,
        property: B
    } = n;
    t("AvatarSetting", (y = B(s), L = B(r), E = B(S), I = B(f), b = B(u), w = B(r), _ = B(r), P((C = e((T = class extends o {
        constructor(...t) {
            super(...t), i(this, "avatar", C, this), i(this, "blockLayer", N, this), i(this, "systemAvatar", D, this), i(this, "selfAvatar", G, this), i(this, "editSelfAvatar", x, this), i(this, "loading", R, this), i(this, "loadingIcon", O, this), this._previewTexture = null, this.action = m.none, this.isAvatar = p.none, this.previewScale = 300 / 512, this.isClick = !1
        }
        start() {}
        init() {
            this._previewTexture = null, this.action = m.none, this.isAvatar = p.none, this.previewScale = Math.max(this.avatar.node.parent.getComponent(l).width, this.avatar.node.parent.getComponent(l).height) / 512, this.isClick = !1, this.selfAvatar.initSet(), this.updateUI()
        }
        updateUI() {
            this.updateAvatar(!1)
        }
        minScale(t, e) {
            return t <= e ? 512 / t : 512 / e
        }
        setImage(t, e = 1) {
            if (t && t.node) {
                t.node.getComponent(l).width = this._previewTexture.width, t.node.getComponent(l).height = this._previewTexture.height;
                const i = Math.max(this.minScale(this._previewTexture.width, this._previewTexture.height), this.selfAvatar.editInfo.scale) * e;
                t.node.setScale(i, i);
                const a = this.selfAvatar.editInfo.x * e,
                    s = this.selfAvatar.editInfo.y * e;
                t.node.setPosition(a, s);
                let r = new c;
                r.texture = this._previewTexture, t.spriteFrame = r
            } else cc_mtt.vv.ConsoleLog.error("AvatarSetting sprite or sprite.node is null")
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
        moveNode(t, e, i, a) {
            t.node.active = !0, t.node.active = !0, h(t.node).sequence(h.call((() => {
                t.widget.updateAlignment()
            })), i, h.call((() => {
                a(), t.node.active = e
            }))).start()
        }
        triggerLoading(t) {
            this.loading.active = t, t ? h(this.loadingIcon).to(.63, {
                angle: 360
            }).repeatForever().start() : v.stopAllByTarget(this.loadingIcon)
        }
        triggerBlockLayer(t) {
            this.blockLayer.active = t
        }
        triggerAvatar(t) {
            t && this.editSelfAvatar.init(this);
            let e = this.editSelfAvatar.node.getPosition();
            e.x = (t ? 0 : 1) * this.editSelfAvatar.node.getComponent(l).width, this.moveNode(this.editSelfAvatar, t, h(this.editSelfAvatar.node).to(.1, {
                position: e
            }), (() => {
                this.editSelfAvatar.widget.left = t ? 0 : 1, this.editSelfAvatar.widget.right = t ? 0 : -1
            }))
        }
        triggerSystemAvatar(t) {
            this.action = t ? m.systemAvatar : m.none, this.triggerBlockLayer(t), t && this.systemAvatar.init(this);
            let e = this.systemAvatar.node.getPosition();
            e.y = (t ? 0 : -1) * this.systemAvatar.node.getComponent(l).height, this.moveNode(this.systemAvatar, t, h(this.systemAvatar.node).to(.1, {
                position: e
            }), (() => {
                this.systemAvatar.widget.bottom = (t ? 0 : -1) * this.systemAvatar.node.getComponent(l).height
            }))
        }
        triggerSelfAvatar(t) {
            this.action = t ? m.selfAvatar : m.none, this.triggerBlockLayer(t), t && this.selfAvatar.init(this);
            let e = this.selfAvatar.node.getPosition();
            e.y = (t ? 0 : -1) * this.selfAvatar.node.getComponent(l).height, this.moveNode(this.selfAvatar, t, h(this.selfAvatar.node).to(.1, {
                position: e
            }), (() => {
                this.selfAvatar.widget.bottom = (t ? 0 : -1) * this.selfAvatar.node.getComponent(l).height
            }))
        }
        successDialog(t) {
            this.triggerLoading(!1), cc_mtt.vv.AssetsManager.showDialogBox("", t === p.self ? "PERSONAL_SETTING.GENERAL.DIALOG.UPLOAD_SUCCESS" : "PERSONAL_SETTING.GENERAL.DIALOG.ALL_SUCCESS", !1, [{
                type: 0,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.LEAVE",
                callback: () => {
                    cc_mtt.vv.AssetsManager.loadScene("hall")
                }
            }])
        }
        errorDialog(t, e = (() => {
            this.isClick = !1
        })) {
            this.triggerLoading(!1), cc_mtt.vv.AssetsManager.showDialogBox("", t, !1, [{
                type: 0,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.LEAVE",
                callback: () => {
                    cc_mtt.vv.AssetsManager.loadScene("hall")
                }
            }, {
                type: 0,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.EDIT",
                callback: e
            }])
        }
        checkChangeDialog(t) {
            cc_mtt.vv.AssetsManager.showDialogBox("", t, !1, [{
                type: 0,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.LEAVE",
                callback: () => {
                    cc_mtt.vv.AssetsManager.loadScene("hall")
                }
            }, {
                type: 0,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.EDIT",
                callback: () => {
                    this.isClick = !1
                }
            }])
        }
        saveAvatar() {
            return new Promise((t => {
                this.isAvatar === p.system ? this.systemAvatar.saveAvatar().then((e => {
                    t(e)
                })) : this.isAvatar === p.self ? this.selfAvatar.saveAvatar().then((e => {
                    t(e)
                })) : t({
                    status: !0
                })
            }))
        }
        onClickBlockLayer() {
            A.isNative && A.os === A.OS.ANDROID && g.getInstance().removeBackFunction(`SettingAction_${this.action}`);
            let t = !1;
            switch (this.action) {
                case m.systemAvatar:
                    t = this.systemAvatar.setAvatar();
                    break;
                case m.selfAvatar:
                    t = this.selfAvatar.onClickClose()
            }
            t && g.getInstance().addBackFunction(`SettingAction_${this.action}`, this.onClickBlockLayer.bind(this))
        }
        onClickAvatar() {
            A.isBrowser && this.isAvatar === p.self && this.triggerAvatar(!0)
        }
        onClickSystemAvatar() {
            this.triggerSystemAvatar(!0)
        }
        onClickSelfAvatar() {
            this.triggerSelfAvatar(!0)
        }
        onClickConfirm() {
            this.isClick || (this.isClick = !0, this.isAvatar !== p.none ? (this.triggerLoading(!0), Promise.all([this.saveAvatar()]).then((t => {
                if (t[0].status) this.successDialog(this.isAvatar), this.isAvatar = p.none;
                else {
                    let e = {
                        Translation: "PERSONAL_SETTING.GENERAL.DIALOG.AVATAR_FAIL",
                        payload: e => `${d(e)}\n${t[0].message}`
                    };
                    this.errorDialog(e)
                }
            })).catch((t => {
                this.triggerLoading(!1), cc_mtt.vv.ConsoleLog.log(`onClickConfirm ${t}`)
            }))) : this.successDialog(p.self))
        }
    }).prototype, "avatar", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(T.prototype, "blockLayer", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(T.prototype, "systemAvatar", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(T.prototype, "selfAvatar", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(T.prototype, "editSelfAvatar", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(T.prototype, "loading", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(T.prototype, "loadingIcon", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = T)) || k));
    a._RF.pop()
}