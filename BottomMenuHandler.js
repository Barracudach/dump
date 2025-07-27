import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cv.js";
import * as p from "./Gradient.js";
import * as f from "./BottomMenuTabItemHandler.js";
import * as B from "./GameEmoticonsLandscape.js";
import * as C from "./GameSceneInstance.js";
import * as T from "./CurrentTime.js";

function main() {
    var z, w, v, W, y, k, S, E, N, _, L, x, M, j, I, G, A, H, F, R, V, D, O, P, U, Z, q, J, K, Q, X, Y, $, tt, et, it, nt, ot, at, lt, rt, st, ut, ct, ht, gt;
    n._RF.push({}, "fb672PjLLpINZyDhfzrC1RL", "BottomMenuHandler", void 0);
    const {
        ccclass: dt,
        property: bt
    } = c;
    let mt = t("ExpandType", function(t) {
            return t[t.Minimize = 0] = "Minimize", t[t.Normal = 1] = "Normal", t[t.Maximize = 2] = "Maximize", t
        }({})),
        pt = t("BottomMenuType", function(t) {
            return t[t.Chat = 0] = "Chat", t[t.Emoji = 1] = "Emoji", t[t.Hands = 2] = "Hands", t[t.Stats = 3] = "Stats", t[t.GameLog = 4] = "GameLog", t[t.FullscreenEmoji = 5] = "FullscreenEmoji", t
        }({}));
    t("default", (z = bt(o), w = bt(a), v = bt(a), W = bt(a), y = bt(l), k = bt(r), S = bt(s), E = bt(s), N = bt(s), _ = bt(s), L = bt(s), x = bt(s), M = bt(s), j = bt(s), I = bt(s), G = bt(s), A = bt(l), H = bt(u), F = bt(s), R = bt(s), V = bt(u), D = C("GameDataInstance"), dt((U = e((P = class extends h {
        constructor(...t) {
            super(...t), i(this, "toggleContainer", U, this), i(this, "bgSprite", Z, this), i(this, "bgBorder", q, this), i(this, "tabSpriteBorder", J, this), i(this, "bgNodeWidget", K, this), i(this, "changeSizeButton", Q, this), i(this, "closeButton", X, this), i(this, "maximizeImg", Y, this), i(this, "minimizeImg", $, this), i(this, "panels", tt, this), i(this, "fullscreenEmojiTabButton", et, this), i(this, "chatTabButton", it, this), i(this, "emojiTabButton", nt, this), i(this, "gameLogTabButton", ot, this), i(this, "customTabButton", at, this), i(this, "handsTabButton", lt, this), i(this, "scrollviewWidget", rt, this), i(this, "scrollViewAllContent", st, this), i(this, "handsWindowButton", ut, this), i(this, "tabButtonContainer", ct, this), i(this, "tabButtonsScrollView", ht, this), this._clickHandCB = null, this._clickGameLogCB = null, this._clickFullscreenEmojiCB = null, this.currentCheckedToggle = null, this._currentExpandType = void 0, i(this, "gameDataInstance", gt, this), this._lastOpenTab = void 0, this._tabButtonContainerLeftAlign = -1
        }
        onLoad() {
            m.appConfig.isLandscapeLayout && (this.expand(mt.Minimize), this._lastOpenTab = -1)
        }
        setClickGameLogCb(t) {
            this._clickGameLogCB = t
        }
        setClickHandCb(t) {
            this._clickHandCB = t
        }
        setClickFullscreenEmojiCb(t) {
            this._clickFullscreenEmojiCB = t
        }
        getMttGameReviewNode() {
            return this.panels[pt.Hands]
        }
        setHoldemRoom(t) {
            let e = this.panels[1].getComponent(B);
            e && (e.setHoldemRoom(t), e.init())
        }
        onEnable() {
            null != this.chatTabButton && (this.chatTabButton.active = m.appConfig.getGameConfig().chatTabEnabled), null != this.emojiTabButton && (this.emojiTabButton.active = m.appConfig.getGameConfig().faceEmojiEnabled), null != this.gameLogTabButton && (this.gameLogTabButton.active = m.appConfig.getGameConfig().gameLogTabEnabled), null != this.customTabButton && (this.customTabButton.active = m.appConfig.getGameConfig().statsTabEnabled), null != this.bgNodeWidget && g(this.bgNodeWidget.node) && (this.bgNodeWidget.node.active = m.appConfig.getGameConfig().bottomGameMenuEnabled)
        }
        onToggleEvent(t, e) {
            if (m.AudioMgr.playButtonSound("button_click.mp3"), t instanceof d) {
                let i = t.node.getComponent(f);
                if (i.setTextTheme(!0), this.currentCheckedToggle) {
                    if (this.currentCheckedToggle == t) return void this.onClickCloseButon();
                    this._currentExpandType == mt.Minimize && this.expand(mt.Normal), i = this.currentCheckedToggle.node.getComponent(f), i.setTextTheme(!1)
                } else this.expand(mt.Normal);
                if (this.currentCheckedToggle = t, !isNaN(e)) {
                    let t = Number(e);
                    this.loadTab(t)
                }
            }
        }
        loadTab(t) {
            if (t >= 0) {
                if (this._lastOpenTab >= 0) {
                    const t = this.panels[this._lastOpenTab];
                    t && (t.active = !1)
                }
                this._lastOpenTab = t;
                const o = this.panels[t];
                if (o) {
                    var e;
                    if (t == pt.Hands) null == (e = this._clickHandCB) || e.call(this, o);
                    else if (t == pt.GameLog) {
                        var i;
                        null == (i = this._clickGameLogCB) || i.call(this, o)
                    } else if (t == pt.FullscreenEmoji) {
                        var n;
                        null == (n = this._clickFullscreenEmojiCB) || n.call(this, o), o.active = !0
                    } else o.active = !0;
                    this.scrollViewAllContent && (t == pt.Hands || t == pt.GameLog ? this.scrollViewAllContent.enabled = !1 : this.scrollViewAllContent.enabled = !0)
                }
            } else
                for (let t = 0; t < this.panels.length; t++) {
                    const e = this.panels[t];
                    e && (e.active = !1)
                }
        }
        updateResizeTab() {
            for (let e = 0; e < this.panels.length; e++) {
                const i = this.panels[e];
                var t;
                if (i)
                    if (e == pt.GameLog) null == (t = i.getComponent(T)) || t.onUpdateResize(this._currentExpandType)
            }
        }
        onClickCloseButon() {
            if (this.expand(mt.Minimize), this.currentCheckedToggle) {
                this.currentCheckedToggle.node.getComponent(f).setTextTheme(!1), this.currentCheckedToggle.isChecked = !1, this.currentCheckedToggle = null
            }
        }
        onClickMaximizeButton() {
            m.AudioMgr.playButtonSound("button_click.mp3"), this.expand(mt.Maximize)
        }
        openTab(t) {
            for (let e = 0; e < this.toggleContainer.toggleItems.length; e++)
                if (e == t) {
                    const t = this.toggleContainer.toggleItems[e];
                    t && (t.isChecked = !0);
                    break
                }
        }
        expand(t) {
            this._currentExpandType = t;
            switch (t) {
                case mt.Maximize:
                    if (this.bgNodeWidget.isAlignTop) return void this.expand(mt.Normal);
                    this.bgNodeWidget.bottom = 40, this.bgNodeWidget.isAlignTop = !0, this.bgNodeWidget.top = 40, this.bgSprite.enabled = !0, this.bgBorder.enabled = !0, this.tabSpriteBorder.enabled = !0, this.closeButton.active = !0, this.changeSizeButton.target = this.minimizeImg, this.minimizeImg.active = !0, this.maximizeImg.active = !1, this.changeSizeButton.node.active = !0, this.scrollviewWidget && (this.scrollviewWidget.bottom = 200, this.scrollviewWidget.updateAlignment());
                    break;
                case mt.Minimize:
                    this.bgNodeWidget.isAlignTop = !1, this.bgNodeWidget.node.getComponent(b).setContentSize(this.bgNodeWidget.node.getComponent(b).contentSize.width, 570), this.bgNodeWidget.bottom = -470, this.bgSprite.enabled = !1, this.bgBorder.enabled = !1, this.tabSpriteBorder.enabled = !1, this.changeSizeButton.node.active = !1, this.closeButton.active = !1, this.loadTab(-1);
                    break;
                case mt.Normal:
                    if (this.bgNodeWidget.isAlignTop = !1, this.bgNodeWidget.node.getComponent(b).setContentSize(this.bgNodeWidget.node.getComponent(b).contentSize.width, 570), this.bgNodeWidget.bottom = 40, this.bgSprite.enabled = !0, this.bgBorder.enabled = !0, this.tabSpriteBorder.enabled = !0, this.closeButton.active = !0, this.changeSizeButton.target = this.maximizeImg, this.minimizeImg.active = !1, this.maximizeImg.active = !0, this.changeSizeButton.node.active = !0, this.scrollviewWidget) {
                        const t = this.bgBorder.node.parent.convertToWorldSpaceAR(this.bgBorder.node.position).y - this.scrollviewWidget.node.parent.convertToWorldSpaceAR(this.scrollviewWidget.node.position).y;
                        this.scrollviewWidget.bottom = this.scrollviewWidget.node.parent.getComponent(b).height - this.scrollviewWidget.top - (this.bgNodeWidget.node.getComponent(b).height - t), this.scrollviewWidget.updateAlignment()
                    }
            }
            this.updateResizeTab(), m.resMgr.adaptWidget(this.bgNodeWidget.node, !0, !1), this.toggleContainer.toggleItems.forEach((t => {
                if (t.isChecked) {
                    let e = t.checkMark.getComponentsInChildren(p);
                    e && e.forEach((t => {
                        t.forceUpdate()
                    }))
                }
            })), this.updateHandsWindowButton(t)
        }
        updateFullscreenEmojiState(t) {
            null != this.fullscreenEmojiTabButton && (this.fullscreenEmojiTabButton.active = t), g(this.panels[pt.FullscreenEmoji]) && !t && this._lastOpenTab == pt.FullscreenEmoji && (this.loadTab(-1), this.onClickCloseButon())
        }
        updateHandsWindowButton(t) {
            if (m.appConfig.isLandscapeLayout && g(this.tabButtonContainer)) {
                const e = this.tabButtonContainer.getComponent(l);
                g(this.handsWindowButton) && g(e) && (-1 == this._tabButtonContainerLeftAlign && (this._tabButtonContainerLeftAlign = e.left), this.handsWindowButton.active = t == mt.Minimize, e.left = this.handsWindowButton.active ? this._tabButtonContainerLeftAlign : 0, e.node.active = !1, e.node.active = !0), g(this.tabButtonsScrollView) && (this.tabButtonsScrollView.enabled = t != mt.Minimize)
            }
        }
        onHandButtonClick() {
            var t;
            m.AudioMgr.playButtonSound("button_click.mp3"), null == (t = this._clickHandCB) || t.call(this)
        }
    }).prototype, "toggleContainer", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(P.prototype, "bgSprite", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(P.prototype, "bgBorder", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(P.prototype, "tabSpriteBorder", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(P.prototype, "bgNodeWidget", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(P.prototype, "changeSizeButton", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(P.prototype, "closeButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(P.prototype, "maximizeImg", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(P.prototype, "minimizeImg", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(P.prototype, "panels", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), et = e(P.prototype, "fullscreenEmojiTabButton", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(P.prototype, "chatTabButton", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(P.prototype, "emojiTabButton", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(P.prototype, "gameLogTabButton", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(P.prototype, "customTabButton", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(P.prototype, "handsTabButton", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(P.prototype, "scrollviewWidget", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(P.prototype, "scrollViewAllContent", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(P.prototype, "handsWindowButton", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(P.prototype, "tabButtonContainer", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(P.prototype, "tabButtonsScrollView", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(P.prototype, "gameDataInstance", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = P)) || O));
    n._RF.pop()
}