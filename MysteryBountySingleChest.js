import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as y from "./SetLabel_MB.js";
import * as m from "./PlayAnim_MB.js";
import * as c from "./PlaySpine_Skin_Animation_MB.js";
import * as d from "./PlayAudioClip_MB.js";
import * as C from "./MysteryBountyWinners.js";
import * as f from "./Pb.js";
import * as g from "./mttconfig.js";

function main() {
    var b, A, M, P, _, w, z, N, W, B, v, S, R, I, L, T, k, F, D, U, G, O, E, V, x, j;
    n._RF.push({}, "41f5beZEsdEypmCADW5/O60", "MysteryBountySingleChest", void 0);
    const {
        ccclass: H,
        property: Z
    } = l;
    class q {
        constructor() {
            this.name = void 0, this.url = void 0, this.starUrl = void 0
        }
    }
    e("MysteryBountySingleChest", (b = Z(r), A = Z(m), M = Z(m), P = Z(m), _ = Z(d), w = Z(a), z = Z(s), N = Z(o), W = Z(o), B = Z(y), v = Z(o), S = Z(o), H((L = i((I = class extends h {
        constructor(...e) {
            super(...e), this.closeBtn = null, t(this, "Animator", L, this), t(this, "showAnimManager", T, this), t(this, "chestAnimManager", k, this), t(this, "hideAnimManager", F, this), t(this, "AudioManager", D, this), t(this, "chestAudioClip", U, this), t(this, "WinnerPrefab", G, this), t(this, "WinnerNodeContainerRow1", O, this), t(this, "WinnerNodeContainerRow2", E, this), this.WinnerNode = [], t(this, "setPrizeLabel", V, this), t(this, "spineContainer", x, this), t(this, "spinePrefab", j, this), this._winners = [], this.allPlayChestCount = 0, this.playedChestCount = 0, this.ieliminatInfo = null, this.mysteryBountyMain = null, this.animFinishCb = null
        }
        start() {}
        startPlayChestAnimation(e, i, t) {
            this.mysteryBountyMain = i, this.animFinishCb = t;
            try {
                let i = e;
                i.length > 0 && (this.ieliminatInfo = e, this.allPlayChestCount = i.length, this.playedChestCount = 0, this.playOneChestAnimation())
            } catch (e) {
                cc_mtt.vv.ConsoleLog.error(e), this.node.destroy()
            }
        }
        playOneChestAnimation() {
            if (this.playedChestCount == this.allPlayChestCount) return this.hideAnimManager.FinishCallback = () => {
                this.mysteryBountyMain.stopBGMusic(), this.node.destroy(), this.animFinishCb && this.animFinishCb()
            }, void this.hideAnimManager.playAnimation();
            this.playedChestCount += 1;
            let e = this.ieliminatInfo[this.playedChestCount - 1],
                i = 0,
                t = [];
            e.winnerInfoList.forEach((e => {
                i += e.prize;
                let n = this.mysteryBountyMain.holdemRoom.getPlayerByUserId(e.userId);
                if (n) {
                    let i = new q;
                    i.name = n.store.nickName, i.url = n.store.avatar;
                    let r = n.CelebrityList.filter((i => i.UserID == e.userId && 0 == i.Role));
                    if (r.length > 0) {
                        let t = g.webUrl + cc_mtt.vv.DataManager.getAvatarId(r[0].Avatar, e.userId);
                        i.starUrl = t
                    }
                    t.push(i)
                }
            }));
            let n = u(this.spinePrefab);
            n.parent = this.spineContainer, n.active = !0;
            let r = n.getComponent(c);
            this.setChestType(r, e.Tier), this.setPrizeValue(i), this.setWinners(t), 1 == this.playedChestCount && this.playShowAnim(), this.playChestAnim(), this.playSpineAnim(n), this.playAudio(this.node)
        }
        setChestType(e, i) {
            switch (i) {
                case f.mttPro.MysteryPrize_Tier.Tier_Gold:
                    this.chestAnimManager.PlayClipName = "SingleChest_RedGold", e.AnimationName = "1_single_chest_gold", this.AudioManager.Clip = this.chestAudioClip[0];
                    break;
                case f.mttPro.MysteryPrize_Tier.Tier_Red:
                    this.chestAnimManager.PlayClipName = "SingleChest_RedGold", e.AnimationName = "1_single_chest_red", this.AudioManager.Clip = this.chestAudioClip[1];
                    break;
                case f.mttPro.MysteryPrize_Tier.Tier_Purple:
                default:
                    this.chestAnimManager.PlayClipName = "SingleChest_Purple", e.AnimationName = "1_single_chest_purple", this.AudioManager.Clip = this.chestAudioClip[2]
            }
        }
        setPrizeValue(e) {
            this.setPrizeLabel.Word = this.mysteryBountyMain.GetDisplayCurrency(e), this.setPrizeLabel.SetLabel()
        }
        setWinners(e) {
            for (let e = 0; e < this.WinnerNode.length; e++) {
                this.WinnerNode[e].node.destroy()
            }
            this.WinnerNode = [], this._winners = e;
            for (var i = 0; i < e.length; i++) {
                let t = e[i],
                    n = u(this.WinnerPrefab);
                n.parent = i < 4 ? this.WinnerNodeContainerRow1 : this.WinnerNodeContainerRow2, this.WinnerNodeContainerRow2.active = e.length > 4, n.getComponent(C).initNode(t.url, t.starUrl, t.name), this.WinnerNode.push(n.getComponent(C))
            }
            for (i = 0; i < this.WinnerNode.length; i++) this.WinnerNode[i].getComponent(m).playAnimation()
        }
        playShowAnim() {
            this.showAnimManager.playAnimation()
        }
        playChestAnim() {
            this.chestAnimManager.playAnimation()
        }
        hideAnim() {
            this.hideAnimManager.playAnimation()
        }
        playSpineAnim(e) {
            if (e) {
                let i = e.getComponent(c);
                i.FinishedCallBack = () => {
                    var e;
                    p(this.node) && (this.playOneChestAnimation(), null == (e = i.node) || e.destroy())
                }, i && i.PlaySpine_SkinAndAnim()
            }
        }
        playAudio(e) {
            if (e) {
                let i = e.getComponent(d);
                i && i.ClipPlay()
            }
        }
    }).prototype, "Animator", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = i(I.prototype, "showAnimManager", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = i(I.prototype, "chestAnimManager", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = i(I.prototype, "hideAnimManager", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = i(I.prototype, "AudioManager", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = i(I.prototype, "chestAudioClip", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), G = i(I.prototype, "WinnerPrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = i(I.prototype, "WinnerNodeContainerRow1", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = i(I.prototype, "WinnerNodeContainerRow2", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = i(I.prototype, "setPrizeLabel", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = i(I.prototype, "spineContainer", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = i(I.prototype, "spinePrefab", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = I)) || R));
    n._RF.pop()
}