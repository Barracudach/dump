import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as v from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as C from "./EmojiConstant.js";
import * as E from "./IEmojiComponent.js";
import * as g from "./EmojiAnimation.js";
import * as w from "./EmojiSpine.js";
import * as j from "./EmojiResources.js";
import * as A from "./EmojiConfig.js";
import * as b from "./EmojiConfig.js";
import * as y from "./EmojiAudio.js";
import * as S from "./EmojiMagicItemFullscreen.js";
import * as F from "./cv.js";
import * as D from "./EmojiParticle3D.js";

function main() {
    var P, I, k, M, z, R, L, x, $, U;
    n._RF.push({}, "2f04eB+uyZDdZ3PNznINaKv", "EmojiMagicItem", void 0);
    const {
        ccclass: _,
        property: N
    } = l;
    t("EmojiMagicItem", (P = N({
        type: o(A.EmojiList)
    }), I = N(a), k = N({
        type: o(C)
    }), M = N([s]), _((L = i((R = class extends r {
        constructor(...t) {
            super(...t), e(this, "type", L, this), e(this, "sprite", x, this), e(this, "aspectRatioIcon", $, this), e(this, "listStateColor", U, this), this.name = "", this.onClickItemFunc = null, this.animationAvatarEndCallback = null, this.animationFullscreenEndCallback = null, this.timeCountDownStart = 0, this.timeCountDownEnd = 0, this.timeCountUpDelegated = void 0, this.iconActiveColor = new c(c.WHITE), this.iconInactiveColor = (new c).fromHEX("#454F69BF"), this.avatar = null, this.fullscreen = null, this.originalSpriteSize = null, this.emojiAvailable = !0, this.emojiViewParent = null
        }
        loadEmoji() {
            return Promise.all([this.loadAvatarEmoji(), this.loadFullscreenEmoji()])
        }
        loadIcon() {
            return h(this.sprite) ? (u("Loading icon: ", this.name), new Promise(((t, i) => {
                j.instance.loadIcon(this.name).then((i => {
                    this.sprite.spriteFrame = i;
                    const e = this.sprite.node.getContentSize(),
                        n = this.calculateAspectRatioFit(e.width, e.height, this.originalSpriteSize.width, this.originalSpriteSize.height, this.aspectRatioIcon);
                    this.sprite.node.getComponent(m).width = n.width, this.sprite.node.getComponent(m).height = n.height, t([this.sprite])
                })).catch((t => {
                    i(t)
                }))
            }))) : Promise.reject()
        }
        playAvatar(t, i, e, n = !1) {
            if (this.avatar) {
                e && this.avatar.setParent(e), t && this.avatar.setPosition(t.x, t.y), this.avatar.setScale(i ? new d(i.x, i.y, 1) : new d(d.ONE)), this.avatar.active = !0;
                const o = this.avatar.getComponents(E),
                    a = [];
                for (let t = 0; t < o.length; t++) {
                    const i = o[t];
                    h(i) && (i instanceof g || i instanceof w ? i.animationEndCallback = this.onAnimationAvatarEnd.bind(this, i, ...arguments) : i instanceof y && (i.isMuted = n), a.push(i.name), i.play())
                }
                u(`>>>>> [playAvatar ${this.name}] ${a.toString()}`)
            } else this.loadAvatarEmoji().then((() => {
                this.playAvatar(t, i, e, n)
            })).catch((t => {
                p(`>>>>> [playAvatar ${this.name} error] ${t.toString()}`)
            }))
        }
        playFullscreen(t, i, e, n = !1) {
            if (this.fullscreen) {
                if (e && this.fullscreen.setParent(e), t) {
                    this.fullscreen.setPosition(t.x, t.y);
                    let i = t;
                    if (0 == t.x && 0 == t.y && this.fullscreen.getComponent(S)) {
                        const t = this.fullscreen.getComponent(S);
                        !F.appConfig.isLandscapeLayout && t.customPositionMobileEnabled ? i = t.customPositionMobile : F.appConfig.isLandscapeLayout && t.customPositionDesktopEnabled && (i = t.customPositionDesktop)
                    }
                    this.fullscreen.setPosition(i.x, i.y)
                }
                this.fullscreen.setScale(i ? new d(i.x, i.y, 1) : new d(d.ONE)), this.fullscreen.active = !0;
                const o = this.fullscreen.getComponents(E),
                    a = [];
                for (let t = 0; t < o.length; t++) {
                    const i = o[t];
                    h(i) && (i instanceof g || i instanceof w || i instanceof D ? i.animationEndCallback = this.onAnimationFullscreenEnd.bind(this, i, ...arguments) : i instanceof y && (i.isMuted = n), a.push(i.name), i.play())
                }
                u(`>>>>> [playFullscreen ${this.name}] ${a.toString()}`)
            } else this.loadFullscreenEmoji().then((() => {
                this.playFullscreen(t, i, e, n)
            })).catch((t => {
                p(`>>>>> [playFullscreen ${this.name} error] ${t.toString()}`)
            }))
        }
        onItemClicked() {
            if (!this.emojiAvailable) return;
            if (this.emojiViewParent.isFullScreenAnimRunning) return;
            const t = Date.now();
            this.timeCountDownEnd > t || this.onClickItemFunc && this.onClickItemFunc()
        }
        startCountdown() {
            const t = Date.now();
            this.timeCountDownEnd > t || (this.timeCountDownStart = t, this.timeCountDownEnd = t + 1e3 * b.instance.EmojiCountdown, this.schedule(this.calculateCountDown))
        }
        setActiveState(t) {
            for (let i = 0; i < this.listStateColor.length; i++) h(this.listStateColor[i]) && (this.listStateColor[i].getComponent(f).color = this.emojiAvailable && t ? this.iconActiveColor : this.iconInactiveColor);
            this.sprite.node.getComponent(f).color = this.emojiAvailable ? this.iconActiveColor : this.iconInactiveColor
        }
        setEnabledEmoji(t) {
            this.emojiAvailable = t, this.setActiveState(t)
        }
        onLoad() {
            this.originalSpriteSize = this.sprite.node.getContentSize()
        }
        loadAvatarEmoji() {
            return h(this.avatar) ? (this.avatar.active = !1, Promise.resolve([this.avatar])) : new Promise(((t, i) => {
                j.instance.loadAvatar(this.name).then((i => {
                    h(this.avatar) || (this.avatar = v(i)), this.avatar.active = !1, t([this.avatar])
                })).catch((t => {
                    i(t)
                }))
            }))
        }
        loadFullscreenEmoji() {
            return h(this.fullscreen) ? (this.fullscreen.active = !1, Promise.resolve([this.fullscreen])) : new Promise(((t, i) => {
                j.instance.loadFullscreen(this.name).then((i => {
                    h(this.fullscreen) || (this.fullscreen = v(i)), this.fullscreen.active = !1, t([this.fullscreen])
                })).catch((t => {
                    i(t)
                }))
            }))
        }
        onAnimationAvatarEnd(t, ...i) {
            this.avatar.active = !1, this.animationAvatarEndCallback && this.animationAvatarEndCallback(t, i)
        }
        onAnimationFullscreenEnd(t, ...i) {
            this.fullscreen.active = !1, this.fullscreen.active = !1, this.animationFullscreenEndCallback && this.animationFullscreenEndCallback(t, i)
        }
        calculateAspectRatioFit(t, i, e, n, o) {
            let a = 1;
            switch (o) {
                case C.Unset:
                    return {
                        width: t, height: i
                    };
                case C.Fill:
                    return {
                        width: e, height: n
                    };
                case C.FitAll:
                    return a = Math.min(e / t, n / i), {
                        width: Math.round(t * a),
                        height: Math.round(i * a)
                    };
                case C.FitWidth:
                    return {
                        width: e, height: Math.round(i * (e / t))
                    };
                case C.FitHeight:
                    return {
                        width: Math.round(t * (n / i)), height: n
                    };
                default:
                    return {
                        width: e, height: n
                    }
            }
        }
        calculateCountDown() {
            let t = (Date.now() - this.timeCountDownStart) / (this.timeCountDownEnd - this.timeCountDownStart);
            (t < 0 || t >= 1) && (this.unschedule(this.calculateCountDown), t = 1), this.timeCountUpDelegated && this.timeCountUpDelegated(1 - t)
        }
    }).prototype, "type", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return A.EmojiList.BaoQuan
        }
    }), x = i(R.prototype, "sprite", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = i(R.prototype, "aspectRatioIcon", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return C.FitAll
        }
    }), U = i(R.prototype, "listStateColor", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), z = R)) || z));
    n._RF.pop()
}