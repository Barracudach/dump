import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as h from "./StarPrivateInfo.js";
import * as p from "./cv.js";
import * as d from "./GenderIconHandler.js";

function main() {
    var g, b, m, k, f, _, B, y, v, I, T, x, S, w, z, R, N, P, C, D, L, O, E, A, H, M, F, U, W, G, j, V, q, J, K, Q, X, Y, Z, $, tt, et, it, nt, rt, at, ot, lt, ut, st, ct, ht, pt, dt, gt, bt, mt, kt, ft, _t;
    n._RF.push({}, "a78b5n/6llDdoozr0SiHeGz", "StarPrivateInfoLandscape", void 0);
    const {
        ccclass: Bt,
        property: yt
    } = u;
    t("default", (g = yt(d), b = yt(r), m = yt(r), k = yt(r), f = yt(r), _ = yt(r), B = yt(a), y = yt(r), v = yt(r), I = yt(r), T = yt(a), x = yt(r), S = yt(r), w = yt(r), z = yt(a), R = yt(r), N = yt(r), P = yt(r), C = yt(r), D = yt(r), L = yt(r), O = yt(a), E = yt(r), A = yt(r), H = yt(r), M = yt(r), F = yt(o), U = yt(r), W = yt(l), Bt((V = e((j = class extends h {
        constructor(...t) {
            super(...t), i(this, "genderIconHandler", V, this), i(this, "replayButton", q, this), i(this, "blockButton", J, this), i(this, "blockIconOn", K, this), i(this, "blockIconOff", Q, this), i(this, "blockIconOnAvatar", X, this), i(this, "blockText", Y, this), i(this, "muteButton", Z, this), i(this, "muteIconOn", $, this), i(this, "muteIconOff", tt, this), i(this, "muteText", et, this), i(this, "messageButton", it, this), i(this, "roleRemarkText", nt, this), i(this, "noteButton", rt, this), i(this, "noteButtonText", at, this), i(this, "likeButton", ot, this), i(this, "likeButtonImg", lt, this), i(this, "likeButtonImgLiked", ut, this), i(this, "likeButtonBg", st, this), i(this, "likeText", ct, this), i(this, "remarkbtn_panel", ht, this), i(this, "priceEmoticon", pt, this), i(this, "starNode", dt, this), i(this, "interactionPanel", gt, this), i(this, "saveNoteButton", bt, this), i(this, "cancelSaveNoteButton", mt, this), i(this, "nodeEditBox", kt, this), i(this, "markerIcon", ft, this), i(this, "markerToggleContainer", _t, this)
        }
        onLoad() {
            var t;
            super.onLoad();
            let e = null == (t = this.gameDataInstance.tRoomData) || null == (t = t.pkPayMoneyItem) || null == (t = t.emotionFee) ? void 0 : t.needCoin;
            this.priceEmoticon.string = p.StringTools.numberToString(p.StringTools.clientGoldByServer(e)), this.adaptWidget(this.node.parent, !0), this._certification_sp.active = !1, this._signature_panel.active = !1
        }
        getStarNode() {
            this._star_node = this.starNode
        }
        getInteractionPanel() {
            this._interaction_panel = this.interactionPanel
        }
        updateMarkerIcon(t) {
            t > 0 ? (p.resMgr.setSpriteFrame(this.markerIcon, p.StringTools.formatC("zh_CN/game/dzpoker/ui/common_remark_icon%d", t)), this.markerIcon.active = !0) : this.markerIcon.active = !1
        }
        runNodeAnimation(t) {}
        initGenderObject() {
            this._gender_img = this.genderIconHandler.node, this._gender_img.active = p.appConfig.getRegistrationConfig().showGenderField
        }
        setGender(t) {
            this.genderIconHandler.setGender(1 != t)
        }
        startScaleAnimation() {}
        adaptOtherWidget() {}
        adaptSelfWidget() {}
        adaptOtherStarWidget() {}
        adaptSelfStarWidget() {}
        resetPos() {}
        setSpriteFrame(t, e) {
            super.setSpriteFrame(t, e)
        }
        adaptWidget(t, e) {
            p.resMgr.adaptWidget(t, e, !1)
        }
        addEvent() {
            super.addEvent()
        }
        initUserDataTextFields() {}
        recetRoleInfo(t) {
            this.playerStats_recetRoleInfo(t)
        }
        updatePokerData(t) {
            t.gameDataInstance === this.gameDataInstance && (this.playerStats_updatePokerData(t), this.updateLikesText(), this.updateLikes(p.dataHandler.getUserData().pokerdata.has_liked))
        }
        getLikeNodes() {
            this._like_node = this.likeButton, this._self_like_text = this.likeText
        }
        updateLikes(t) {
            this._like_button && (this._like_button.getComponent(s).interactable = !t), this.likeButtonImg && (this.likeButtonImg.active = !t), this.likeButtonImgLiked && (this.likeButtonImgLiked.active = t)
        }
        onLikeDisableBg() {
            this.updateLikes(!0)
        }
        setLikeNodeActive(t) {
            this.updateLikes(!t)
        }
        setRoleNameTextColor(t) {}
        setRoleNameTextPosition(t, e) {}
        initButtons() {
            this._recond_button = this.muteButton, this._block_button = this.blockButton, this._remark_button = this.noteButton, this._like_button = this.likeButton, this._like_img = this.likeButtonBg, this._other_like_text = this.likeText
        }
        showRemarkPanel(t) {
            super.showRemarkPanel(t), t.propagationStopped = !0
        }
        addNodeCloseOnTouch() {}
        initRoleNameText() {}
        initAddNotes() {
            this.remark_panel.on(r.EventType.TOUCH_END, (t => {
                t.propagationStopped = !0, this.setRemarkPanelActive(!1)
            })), this.setRemarkPanelActive(!1), this.sure_button = this.saveNoteButton, this.cancle_button = this.cancelSaveNoteButton, this._remarkbtn_panel = this.remarkbtn_panel, this._remark_text = this.roleRemarkText
        }
        setRemarkPanelActive(t) {
            this.remark_panel.active = t, this.saveNoteButton.active = t, this.cancelSaveNoteButton.active = t, this._remark_button.active = !t
        }
        setBlockImageActive(t) {
            this.blockIconOn.active = !t, this.blockIconOnAvatar.active = t
        }
        setRemarkButtonPosition(t, e, i) {}
        updateBlockButton(t) {
            this.blockText.string = p.config.getStringData(t ? "Star_unblock" : "Star_block")
        }
        setItemPosition(t, e) {}
        updateView(t) {
            super.updateView(t);
            let e = p.dataHandler.getUserData().getRemarkData(this.u32CurrentUid);
            this.updateMarkerIcon(e.nType)
        }
        stopPropagationEventOnRemarkClick(t) {}
        updateNodeMenuText(t) {
            this.updateMarkerIcon(t.nType);
            let e = this.markerToggleContainer.toggleItems[t.nType];
            e && (e.isChecked = !0)
        }
        setPlayerNoteString(t) {
            this.nodeEditBox.string = t, this.nodeEditBox.placeholder = t
        }
        getPlayerNoteString() {
            return this.nodeEditBox.string
        }
        setEventForMenuButton() {}
        updateMenuButton() {}
        setButtonListToShow(t) {}
        OnUpdate_remarks(t) {
            super.OnUpdate_remarks(t);
            let e = p.dataHandler.getUserData().getRemarkData(this.u32CurrentUid);
            this.updateNodeMenuText(e)
        }
        setRoleRemarkTextActive(t) {
            super.setRoleRemarkTextActive(t);
            let e = p.dataHandler.getUserData().getRemarkData(this.u32CurrentUid);
            this.updateChangeNoteButton(e && e.sRemark.length > 0)
        }
        updateRemarkText(t) {
            super.updateRemarkText(t);
            let e = this._remark_text.getComponent(a).string.length <= 0;
            this.setRoleRemarkTextActive(!e)
        }
        updateChangeNoteButton(t) {
            this.noteButtonText.string = t ? p.config.getStringData("edit_note") : p.config.getStringData("add_note")
        }
        getDefaultNoteText() {
            return ""
        }
        getLikeFont() {
            return this.likeText.getComponent(a).font
        }
        getLikeFontSize() {
            return this.likeText.getComponent(a).fontSize
        }
        enableMessageButton(t) {
            this._at_button.active = t
        }
        showOtherPanel(t) {
            super.showOtherPanel(t), this.playerStats_panel.getComponent(c).updateLayout(), this.adaptWidget(this.playerStats_panel, !0)
        }
    }).prototype, "genderIconHandler", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(j.prototype, "replayButton", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(j.prototype, "blockButton", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(j.prototype, "blockIconOn", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(j.prototype, "blockIconOff", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(j.prototype, "blockIconOnAvatar", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(j.prototype, "blockText", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(j.prototype, "muteButton", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(j.prototype, "muteIconOn", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(j.prototype, "muteIconOff", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(j.prototype, "muteText", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(j.prototype, "messageButton", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(j.prototype, "roleRemarkText", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(j.prototype, "noteButton", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(j.prototype, "noteButtonText", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(j.prototype, "likeButton", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(j.prototype, "likeButtonImg", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(j.prototype, "likeButtonImgLiked", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(j.prototype, "likeButtonBg", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(j.prototype, "likeText", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(j.prototype, "remarkbtn_panel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(j.prototype, "priceEmoticon", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(j.prototype, "starNode", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(j.prototype, "interactionPanel", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(j.prototype, "saveNoteButton", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(j.prototype, "cancelSaveNoteButton", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), kt = e(j.prototype, "nodeEditBox", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(j.prototype, "markerIcon", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(j.prototype, "markerToggleContainer", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = j)) || G));
    n._RF.pop()
}