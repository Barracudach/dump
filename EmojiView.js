import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as h from "./GameScene.js";
import * as d from "./EmojiIcon.js";
import * as g from "./cv.js";
import * as p from "./EmojiLoader.js";
import * as f from "./JackfruitScene.js";
import * as E from "./EmojiPanel.js";
import * as j from "./EmojiMagicItem.js";
import * as y from "./JackfruitManager.js";
import * as I from "./Enum.js";

function main() {
    var D, S, R, C, w, _;
    o._RF.push({}, "eb53a6pkfRKxI9rbn80L7ip", "EmojiView", void 0);
    const {
        ccclass: b,
        property: L
    } = s;
    t("default", (D = L(n), S = L(a), b((w = e((C = class extends E {
        constructor(...t) {
            super(...t), i(this, "layout", w, this), i(this, "avatar", _, this), this.game = null, this.maxItemEachRow = 4, this.listEmojiIconData = [], this._isUserBalanceEnough = !0, this._isPotSizeRestriction = !1, this._isAllinRestriction = !1, this.isFullScreenAnimRunning = !1
        }
        setGame(t) {
            c(t) ? (this.game = t, c(t.emoji_fullscreen) ? this.fullScreenParent = t.emoji_fullscreen : r("[EmojiView setGame] game emoji_fullscreen doesn't exist")) : r("[EmojiView setGame] game doesn't exist")
        }
        emojiIconClick(t) {
            this.game instanceof h ? this.game.gameDataInstance && -1 !== this.game.gameDataInstance.tRoomData.i32SelfSeat && (this.game.gameSceneInstance.room.getCurrentGameID() === g.Enum.GameId.Allin ? g.aofNet.RequestSendMagicEmoji(this.game.gameDataInstance.tRoomData.u32RoomId, t) : g.gameNet.RequestSendMagicEmoji(this.game.gameDataInstance.tRoomData.u32RoomId, t)) : -1 !== y.tRoomData.nSelfSeatID && g.jackfruitNet.requestSendMagicEmoji(g.roomManager.getCurrentRoomID(), t), this.hideUi()
        }
        showEmojiAni(t, e, i) {
            const o = !g.tools.isSoundEffectOpen(),
                n = this.game.gameMain_panel,
                a = g.tools.convertToNodeSpaceAR(n, t);
            this.playAnimation(e, a, n, o, i), this.updateConfig(), this._isUserBalanceEnough && this.showCountdown()
        }
        updateConfig() {
            this.updateEmojiInfo(), this.updateEmojiNeedCoin()
        }
        updateCost(t, e, i) {
            this.listEmojiIconData.length || this.createEmojiIconData(), this.listEmojiIconData.forEach(((e, o) => {
                e.cost = t, e.currencyType = i
            })), this._isUserBalanceEnough = e, this.updateEmojiInfo()
        }
        isGameStarSeat() {
            return this.game instanceof h && this.game.gameSceneInstance.room.getCurrentGameID() === g.Enum.GameId.StarSeat
        }
        playAnimation(t, e, i, o, n) {
            if (this.emojiList.has(t)) {
                const a = this.emojiList.get(t);
                let s = new m(m.ONE);
                this.game instanceof f ? (s = new m(.7, .7), e.add(new m(0, 50)), a.type === p.config.EmojiList.Dragon && e.add(new m(25, 0))) : (e.add(new m(0, 100)), a.type === p.config.EmojiList.Dragon && e.add(new m(g.appConfig.isLandscapeLayout ? 16 : n ? 15 : 25, 0))), a.playAvatar(e, s, i, o), setTimeout((t => {
                    t.playFullscreen(new m(m.ZERO), new m(m.ONE), this.fullScreenParent, o)
                }), 1e3, a)
            } else {
                const a = p.resources.listEmoji;
                for (let s = 0; s < a.length; s++)
                    if (t === a[s].value) {
                        const c = l(this.emojiPre).getComponent(j);
                        c.type = a[s].value, c.name = a[s].name, this.emojiList.set(a[s].value, c), this.playAnimation(t, e, i, o, n)
                    }
            }
        }
        showCountdown() {
            this.emojiList.forEach(((t, e) => {
                t.startCountdown()
            }))
        }
        setPotSizeRestriction(t) {
            this._isPotSizeRestriction = t, this.updateEmojiInfo()
        }
        setAllinRestriction(t) {
            this._isAllinRestriction = t, this.updateEmojiInfo()
        }
        updateEmojiInfo() {
            this.emojiList.forEach(((t, e) => {
                const i = t,
                    o = this.listEmojiIconData.find((e => e.type === t.type));
                o && i.updateData(o)
            })), this.setEmojiState()
        }
        showUi() {
            this.autoLayout()
        }
        hideUi() {}
        onLoad() {
            super.onLoad(), g.MessageCenter.register("update_info", this.updateEmojiNeedCoin.bind(this), this.node), g.MessageCenter.register("update_gold", this.updateEmojiNeedCoin.bind(this), this.node), g.MessageCenter.register("pot_changed", this.onPotSizeRestriction.bind(this), this.node)
        }
        onDestroy() {
            g.MessageCenter.unregister("update_info", this.node), g.MessageCenter.unregister("update_gold", this.node), g.MessageCenter.unregister("pot_changed", this.node), 0 == g.roomManager.getTotalOpeningRooms() && super.onDestroy()
        }
        loadEmojiIcons() {
            super.loadEmojiIcons(), this.listEmojiIconData.length || this.createEmojiIconData(), this.emojiList = new Map(Array.from(this.emojiList).sort()), this.emojiList.forEach(((t, e) => {
                const i = t;
                i.node.setParent(this.layout.node), i.onClickItemFunc = this.onClickIcon.bind(this, i), i.emojiViewParent = this, i.animationAvatarEndCallback = (t, ...e) => {}, i.animationFullscreenEndCallback = (t, ...e) => {
                    this.isFullScreenAnimRunning = !1
                };
                const o = this.listEmojiIconData.find((t => t.type === i.type));
                o ? i.updateData(o) : r("Invalid icon type: " + i.type)
            })), this.setEmojiState(), this.layout.updateLayout()
        }
        autoLayout() {
            const t = this.maxItemEachRow - 1,
                e = (this.node.getComponent(u).width - (this.layout.paddingLeft + this.layout.paddingRight) - this.emojiPre.data.width * this.maxItemEachRow) / t;
            this.layout.spacingX = e, this.layout.updateLayout()
        }
        createEmojiIconData() {
            const t = p.resources.listEmoji;
            for (let e = 0; e < t.length; e++) {
                const i = {
                    type: t[e].value,
                    cost: 0,
                    currencyType: I.USDT
                };
                this.listEmojiIconData.push(i)
            }
        }
        onClickIcon(t) {
            this.isFullScreenAnimRunning = !0;
            const e = t.type;
            this.emojiIconClick(e)
        }
        setEmojiState() {
            var t;
            const e = this._isUserBalanceEnough && !this._isPotSizeRestriction && !this._isAllinRestriction && p.config.Enable;
            let i = d.Available;
            p.config.Enable ? this._isUserBalanceEnough ? this._isPotSizeRestriction ? i = d.PotSizeRestriction : this._isAllinRestriction && (i = d.AllinRestriction) : i = d.NotEnoughBalance : i = d.DisableByServer, null == (t = this.emojiList) || t.forEach(((t, o) => {
                const n = t;
                this.listEmojiIconData.find((e => e.type === t.type)) && (n.setEnabledEmoji(e), n.EmojiAvailableState = i)
            }))
        }
        updateEmojiNeedCoin() {
            const t = g.dataHandler.getUserData().u32Chips,
                e = g.dataHandler.getUserData().usdt;
            let i = 0,
                o = I.GOLDCOIN,
                n = !0,
                a = 0;
            if (this.game instanceof f) i = y.tRoomData.fee.magicEmojiFee, a = t, n = a >= i;
            else {
                const c = this.game.gameDataInstance.tRoomData.pkPayMoneyItem.magicEmojiFee;
                if (c) {
                    var s;
                    o = this.game.gameDataInstance.tRoomData.currency.type, i = this.game.gameDataInstance.tRoomData.neededFeeAsPerCurrency(c);
                    a = g.appConfig.isPKW && (o === I.USDT || o === I.USD) ? e : t;
                    const r = null == (s = g.appConfig.getWalletConfig().defaultCurrency) ? void 0 : s.type,
                        m = g.currencyManager.convert(o, r, a);
                    n = a >= i || m >= i
                } else r("[updateEmojiNeedCoin] not found magicEmojiFee")
            }
            this.updateCost(i, n, o)
        }
        onPotSizeRestriction(t) {
            if (this.game instanceof h) {
                const e = t.pot > 0 && t.bb > 0 && p.config.PotSizeRestriction > 0 && t.pot >= t.bb * p.config.PotSizeRestriction;
                this.setPotSizeRestriction(e)
            }
        }
    }).prototype, "layout", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _ = e(C.prototype, "avatar", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = C)) || R));
    o._RF.pop()
}