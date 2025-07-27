import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as y from "./cc.js";
import * as l from "./cc.js";
import * as C from "./PlayAnim_MB.js";
import * as f from "./PlaySpine_Skin_Animation_MB.js";
import * as B from "./Holdem_Basic_Item.js";
import * as T from "./PlayAudioClip_MB.js";
import * as M from "./Number_Increase_MB.js";
import * as A from "./PlaySound_MB.js";
import * as P from "./MysteryBountySingleChest.js";
import * as S from "./MysteryBountyPopup.js";
import * as _ from "./ButtonEmit_MB.js";
import * as z from "./FormatParser.js";
import * as w from "./MysteryBountyTripleChest.js";
import * as I from "./Translator.js";
import * as R from "./MysteryBounty_EnterTips.js";
import * as v from "./cv.js";
import * as L from "./ResourcesLoader.js";
import * as k from "./MysteryBountyTable.js";
import * as D from "./Enum.js";

function main() {
    var N, E, j, G, O, x, F, H, q, Y, V, W, U, J, K, X, Q, Z, $, tt, et, ot, it, nt, rt, lt, pt, st, at, ut;
    i._RF.push({}, "0804cTvb2dI7KVQd17RhkuN", "MysteryBountyMain", void 0);
    const {
        ccclass: ht,
        property: yt
    } = p;
    t("MysteryBountyMain", (N = yt(n), E = yt(n), j = yt(r), G = yt(n), O = yt(r), x = yt(n), F = yt(r), H = yt(n), q = yt(r), Y = yt(n), V = yt(n), W = yt(l), U = yt(n), J = yt(r), ht((Q = e((X = class extends B {
        constructor(...t) {
            super(...t), o(this, "popupButton", Q, this), o(this, "popupContainer", Z, this), o(this, "popupPrefab", $, this), this.popup = null, o(this, "startIntroContainer", tt, this), o(this, "startIntroPrefab", et, this), this.startIntro = null, o(this, "singleChestContainer", ot, this), o(this, "singleChestPrefab", it, this), o(this, "tripleChestContainer", nt, this), o(this, "tripleChestPrefab", rt, this), this.tripleChest = null, o(this, "bellsSound", lt, this), o(this, "jackpotMsgBgNode", pt, this), o(this, "jackpotMsgLable", st, this), o(this, "enterTipsContainer", at, this), o(this, "enterTipsPrefab", ut, this), this.enterTips = null, this._prizeList = [], this.prizeTable = null, this.totalPrize = 0, this.tierArr = [], this.chestTypeArr = [], this.qtyArr = [], this.hitArr = [], this.popButtonSchedule = null, this.table = null, this._initedTable = !1, this._showTableImmediately = !1
        }
        start() {
            this.initPrefab(), this.showPopupButton(), this.updateXDeviceLayout()
        }
        onDestroy() {
            this.unscheduleAllCallbacks()
        }
        playBGMusic() {
            this.node.getComponent(A).SoundPlay()
        }
        stopBGMusic() {
            this.node.getComponent(A).SoundStop()
        }
        showPopupButton() {
            console.log("MysteryBounty :showPopupButton"), this.popupButton.active = !0, this.playAnimation(this.popupButton), this.playAudio(this.popupButton)
        }
        initPrefab() {
            console.log("MysteryBounty :initPrefab");
            let t = s(this.startIntroPrefab);
            t.parent = this.startIntroContainer, this.startIntro = t;
            let e = s(this.tripleChestPrefab);
            e.parent = this.tripleChestContainer, this.tripleChest = e;
            let o = s(this.enterTipsPrefab);
            o.parent = this.enterTipsContainer, this.enterTips = o
        }
        onClickOpenPopup() {
            console.log("MysteryBounty :onClickOpenPopup"), this.holdemRoom.store.sendMysteryPrizeTableReq(), this.popupButton.getComponent(a).interactable = !1, this.popButtonSchedule && (this.unschedule(this.popButtonSchedule), this.popButtonSchedule = null), this.popButtonSchedule = () => {
                u(this.node) && (this.popupButton.getComponent(a).interactable = !0)
            }, this.scheduleOnce(this.popButtonSchedule, 1)
        }
        setPrizeList(t) {
            this._prizeList = t
        }
        updatePrizeList(t, e) {
            let o = this.createPrizeTable(t);
            this.prizeTable = o, this.totalPrize = e, this.tierArr = o.tierArr, this.chestTypeArr = o.chestTypeArr, this.qtyArr = o.qtyArr, this.hitArr = o.hitArr
        }
        openBountyPopup() {
            u(this.popup) || (this.popup = s(this.popupPrefab), this.popup.parent = this.popupContainer);
            let t = this.popup.getComponent(S);
            t.isShowing || (t.setPrizeList(this.prizeTable, this), this.playAnimation(this.popup), t.show(this), this.popup.active = !0)
        }
        playStartIntroAnim() {
            console.log("MysteryBounty :playStartIntroAnim");
            let t = this.tripleChest.getComponent(w).popup.getComponent(S);
            t.setTotalPrize(this.GetDisplayCurrency(this.totalPrize)), t.setIntroPrizeList(this.prizeTable, this), this.startIntroContainer.getComponent(_).ClickAnotherButton()
        }
        playStartIntro() {
            console.log("MysteryBounty :playStartIntro"), this.startIntro.active = !0, this.playAnimation(this.startIntro), this.playAudio(this.startIntro)
        }
        playTripleChest() {
            console.log("MysteryBounty :playTripleChest");
            let t = z.DisplayGold(this.totalPrize),
                e = z.DisplayGold(.96 * this.totalPrize);
            this.tripleChest.active = !0, this.tripleChest.getComponent(w).popup.getComponent(S).show(this), this.playAnimation(this.tripleChest), this.playSpineAnim(this.tripleChest), this.playNumberIncrease(this.tripleChest, e, t)
        }
        playTableChangeAnimaiton(t = !1) {
            if (console.log("MysteryBounty :playTableChange"), this.holdemRoom.lastRoomVisualNodes[0].active) return;
            if (t && (this._showTableImmediately = !0), this._initedTable) return;
            this._initedTable = !0;
            let e = L.RES_PATH.PREFAB.HOLDEM.MYSTERY_BOUNTY_TABLE,
                o = this.holdemRoom.node,
                i = this.holdemRoom.bgTable.node.getSiblingIndex() + 1;
            v.appConfig.isLandscapeLayout && (e = L.RES_PATH.PREFAB.HOLDEM.MYSTERY_BOUNTY_TABLE_LANDSCAPE, o = this.holdemRoom.bgTable.node, i = this.holdemRoom.bgTable.node.getChildByName("holdem_game_final_table_table_landscape").getSiblingIndex() + 1), this.holdemRoom.specialTournamentType == D.None && cc_mtt.vv.AssetsManager.loadRes(e, r, ((t, n) => {
                console.log("load prefab :", e, o, i);
                let r = s(n);
                this.table = r, r.parent = o, r.setSiblingIndex(i), r.getComponent(h).width = this.holdemRoom.bg.node.getComponent(h).width, r.getComponent(h).height = this.holdemRoom.bg.node.getComponent(h).height, r.position = y(0, 0, 0), r.scale = new d(1 / this.holdemRoom.node.scale.x, 1 / this.holdemRoom.node.scale.y, 1), this._showTableImmediately ? r.getComponent(k).showImmediately() : r.getComponent(_).ClickAnotherButton()
            }))
        }
        playSingleChest(t, e) {
            var o;
            if (console.log("MysteryBounty :playSingleChest"), this.playBGMusic(), !t) return void cc_mtt.vv.ConsoleLog.error("winnner info data is null");
            let i = s(this.singleChestPrefab);
            i.parent = this.singleChestContainer, i.active = !0, null == (o = i.getComponent(P)) || o.startPlayChestAnimation(t, this, e)
        }
        playBellSound() {
            this.playAudio(this.bellsSound)
        }
        playAnimation(t) {
            if (t) {
                let e = t.getComponent(C);
                e && e.playAnimation()
            }
        }
        playAnimationWithClipname(t, e) {
            if (t) {
                let o = t.getComponent(C);
                o && (o.PlayClipName = e, o.playAnimation())
            }
        }
        playAnimationWithDelay(t, e) {
            if (t) {
                let o = t.getComponent(C);
                o && (o.delay = e, o.playAnimation())
            }
        }
        playAudio(t) {
            if (t) {
                let e = t.getComponent(T);
                e && e.ClipPlay()
            }
        }
        playSpineAnim(t) {
            if (t) {
                let e = t.getComponent(f);
                e && e.PlaySpine_SkinAndAnim()
            }
        }
        playNumberIncrease(t, e, o) {
            if (t) {
                let i = t.getComponent(M);
                if (i) {
                    i._start = e, i.startInitCount = e, i._end = o;
                    let t = z.GetCurrencySign(this.holdemRoom.store.MTTDetail.DisplayCurrency) + " ";
                    i.numberIncrease(t)
                }
            }
        }
        onPlayerIntroChestButton() {
            this.holdemRoom.playMysteryBountyIntroChestAnim()
        }
        onPlayerShowWinChestLabelButton() {
            this.holdemRoom.showMysteryBountyWinValueAnim(100)
        }
        onPlayerGloveHitButton() {
            for (let t = 1; t < 9; t++) this.holdemRoom.playMysteryBountyGloveHitTestAnim(t)
        }
        getMysteryBountyChestTypeByPrize(t) {
            try {
                let e = this.tierArr.indexOf(t);
                if (-1 != e) return this.chestTypeArr[e]
            } catch (t) {
                return cc_mtt.vv.ConsoleLog.error(t), null
            }
        }
        createPrizeTable(t) {
            t = t.sort(((t, e) => e.prize - t.prize));
            let e = [],
                o = [],
                i = [],
                n = [];
            if (t.forEach((t => {
                    const {
                        prize: o,
                        hit: r
                    } = t, l = e.indexOf(o); - 1 === l ? (e.push(o), i.push(1), n.push(r ? 1 : 0)) : (i[l]++, n[l] += r ? 1 : 0)
                })), e && e.length > 0) {
                o = {
                    2: ["gold", "purple"],
                    3: ["gold", "red", "purple"],
                    4: ["gold", "red", "purple", "purple"],
                    5: ["gold", "red", "red", "purple", "purple"],
                    6: ["gold", "gold", "red", "red", "purple", "purple"],
                    7: ["gold", "gold", "red", "red", "purple", "purple", "purple"],
                    8: ["gold", "gold", "red", "red", "purple", "purple", "purple", "purple"],
                    9: ["gold", "gold", "red", "red", "red", "purple", "purple", "purple", "purple"],
                    10: ["gold", "gold", "red", "red", "red", "purple", "purple", "purple", "purple", "purple"],
                    11: ["gold", "gold", "red", "red", "red", "red", "purple", "purple", "purple", "purple", "purple"],
                    12: ["gold", "gold", "gold", "red", "red", "red", "red", "purple", "purple", "purple", "purple", "purple"],
                    13: ["gold", "gold", "gold", "red", "red", "red", "red", "purple", "purple", "purple", "purple", "purple", "purple"],
                    14: ["gold", "gold", "gold", "red", "red", "red", "red", "purple", "purple", "purple", "purple", "purple", "purple", "purple"],
                    15: ["gold", "gold", "gold", "red", "red", "red", "red", "red", "purple", "purple", "purple", "purple", "purple", "purple", "purple"],
                    16: ["gold", "gold", "gold", "red", "red", "red", "red", "red", "purple", "purple", "purple", "purple", "purple", "purple", "purple", "purple"]
                } [e.length] || []
            }
            return console.log("MysteryBounty tierArr: ", e), console.log("MysteryBounty hitArr: ", n), console.log("MysteryBounty qtyArr: ", i), console.log("MysteryBounty chestTypeArr: ", o), {
                tierArr: e,
                hitArr: n,
                qtyArr: i,
                chestTypeArr: o
            }
        }
        playJackpotAnimation(t, e) {
            console.log("123123123123123123");
            let o = "";
            t.forEach((t => {
                o += " " + t
            }));
            let i = z.GetCurrencySign(this.holdemRoom.store.MTTDetail.DisplayCurrency),
                n = z.DisplayGold(e).toString();
            this.jackpotMsgLable.string = c.formatStr(I("MB.JACKPOT_MESSAGE"), o, i + n);
            let r = this.jackpotMsgLable.node.getContentSize().width;
            this.jackpotMsgLable.node.position = new d(r / 2 + 240, 0, 0);
            let l = new d(-r / 2 - 240, 0, 0);
            this.jackpotMsgBgNode.parent.active = !0, this.jackpotMsgBgNode.scale = new d(0, this.jackpotMsgBgNode.scale.y, this.jackpotMsgBgNode.scale.z), this.jackpotMsgBgNode.getComponent(g).opacity = 255, m(this.jackpotMsgBgNode).to(.15, {
                scale: new d(1, this.jackpotMsgBgNode.scale.y, this.jackpotMsgBgNode.scale.z)
            }).delay(3 + r / 200).call((() => {
                this.jackpotMsgBgNode.parent.active = !1
            })).start(), m(this.jackpotMsgBgNode.getComponent(g)).delay(3 + r / 200).to(.5, {
                opacity: 0
            }).start(), m(this.jackpotMsgLable.node).delay(.15).to(3 + r / 200, {
                position: l
            }).start()
        }
        GetDisplayCurrency(t) {
            return z.GetCurrencySign(this.holdemRoom.store.MTTDetail.DisplayCurrency) + " " + this.ThousandSpaceFormat(t)
        }
        showEnterTips(t, e) {
            if (cc_mtt.vv.ConsoleLog.log("showEnterTips", JSON.stringify(t)), this.enterTips) {
                var o;
                let i = z.GetCurrencySign(this.holdemRoom.store.MTTDetail.DisplayCurrency) + " " + z.ThousandPointFormat(z.DisplayGold(t.totalBounty)).toString();
                null == (o = this.enterTips.getComponent(R)) || o.showMysteryBountyEnterTips(t, e, i)
            }
        }
        ThousandSpaceFormat(t) {
            let e = (t = z.DisplayGold(t)).toString().split("."),
                o = e[0].split(""),
                i = "";
            return o.reverse().forEach(((t, e) => {
                e % 3 == 0 && e > 0 && (i = " " + i), i = t + i
            })), e.length > 1 && (i += "." + e[1]), i
        }
        updateXDeviceLayout() {
            v.appConfig.isLandscapeLayout ? (this.popupButton.getComponent(b).top = 230, this.enterTips.getComponent(R).bg.getComponent(b).top = 170) : this.popupButton.getComponent(b).top = 297
        }
    }).prototype, "popupButton", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(X.prototype, "popupContainer", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(X.prototype, "popupPrefab", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(X.prototype, "startIntroContainer", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(X.prototype, "startIntroPrefab", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(X.prototype, "singleChestContainer", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(X.prototype, "singleChestPrefab", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(X.prototype, "tripleChestContainer", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(X.prototype, "tripleChestPrefab", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(X.prototype, "bellsSound", [Y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(X.prototype, "jackpotMsgBgNode", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(X.prototype, "jackpotMsgLable", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(X.prototype, "enterTipsContainer", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(X.prototype, "enterTipsPrefab", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = X)) || K));
    i._RF.pop()
}