import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as b from "./cv.js";
import * as m from "./GameSceneInstance.js";
import * as f from "./RedEnvelopeLuckResult.js";
import * as w from "./AudioComp.js";

function main() {
    var v, y, R, k, P, D, T, A, I, L, G, M, z, C, S, E, N, U, H, V, x, B, j, F, O, W;
    n._RF.push({}, "1795bXUsjJMd4hv6Di3vsYG", "LuckTurntables", void 0);
    const {
        ccclass: q,
        property: J
    } = u;
    t("default", (v = J(s), y = J(s), R = J(s), k = J(a), P = J(s), D = J(l), T = J(s), A = J(a), I = J([o]), L = J([l]), G = J(r), M = m("GameDataInstance"), q((S = e((C = class extends h {
        constructor(...t) {
            super(...t), i(this, "luckTurntables_panel", S, this), i(this, "bg_mage", E, this), i(this, "node_wheel", N, this), i(this, "redEnvelopeLuckResultPrefab", U, this), this.redEnvelopeLuckResult = null, i(this, "gold_effect_panel", H, this), i(this, "gold_image_list", V, this), i(this, "gold_Panel", x, this), i(this, "Golb_Prefab", B, this), this.gold_image_pos = [], i(this, "num_list", j, this), i(this, "icon_list", F, this), i(this, "labaAni", O, this), this.isRun = !1, this.isRunGold = !1, this.info = null, this.start_id = 0, this.result_id = 0, this.isMovePosInit = !1, this.index = 0, this.show_action = !1, this.worldMovePos = null, this.goldView = null, i(this, "gameDataInstance", W, this)
        }
        onLoad() {
            this.labaAni.on(r.EventType.FINISHED, this.runAnimation, this);
            let t = c(this.redEnvelopeLuckResultPrefab);
            this.redEnvelopeLuckResult = t.getComponent(f), this.node.parent.addChild(t), t.active = !1;
            let e = c(this.Golb_Prefab);
            this.gold_Panel.addChild(e), e.name = "goldView", this.gold_Panel.active = !1;
            for (let t = 0; t < this.gold_image_list.length; t++) this.gold_image_pos[t] = this.gold_image_list[t].node.getPosition();
            b.resMgr.adaptWidget(this.node)
        }
        onDestroy() {
            b.MessageCenter.unregister(b.config.CHANGE_LANGUAGE, this.node)
        }
        updateView() {
            this.gold_Panel.active = !1, this.luckTurntables_panel.active = !0, this.redEnvelopeLuckResult.node.active = !1, this.gold_effect_panel.active = !1, b.dataHandler.getUserData().luckTurntables.length <= 0 ? this.closeView() : (this.bg_mage.angle = 0, this.node_wheel.angle = 0, this.setNumList(), this.onButtonStart())
        }
        runAnimation() {
            this.isRun && (this.isRun = !1, this.isRunGold = !1, this.node.active = !1, this.showResult())
        }
        showResult() {
            this.redEnvelopeLuckResult.setInfo(this.info.currency_type, this.info.amount_list[this.info.amount_index].amount), this.redEnvelopeLuckResult.show((() => {
                0 === b.dataHandler.getUserData().luckTurntables.length && this.closeView()
            })), this.updataResult(!0)
        }
        updataResult(t) {
            b.dataHandler.getUserData().removeLuckTurnById(this.info.record_id), 0 == b.dataHandler.getUserData().luckTurntables.length && b.MessageCenter.send("updataLuckTurntablesButton"), b.worldNet.requestGetUserData()
        }
        showNext() {
            b.dataHandler.getUserData().luckTurntables.length > 0 ? this.show_action && (this.show_action = !1, this.updateView()) : this.closeView()
        }
        closeView() {
            d.stopAllByTarget(this.node), this.bg_mage.angle = 0, b.AudioMgr.stop(this.start_id), b.AudioMgr.stop(this.result_id), this.labaAni.stop(), this.node.active = !1, b.MessageCenter.send("LuckTurntables_isView", !1)
        }
        setGoldMovePos(t) {
            this.worldMovePos = t, this.isMovePosInit = !0
        }
        playSound(t) {
            b.AudioMgr.playSoundMiniGame(w.Instance().setUrl(t).setRoomId(this.gameDataInstance.tRoomData.u32RoomId).setGameId(this.gameDataInstance.tRoomData.u32GameID))
        }
        onButtonStart() {
            this.isRun = !0, this.labaAni.play("SpinWheel"), this.playSound("zh_CN/hall/laba/audio/luck_start.mp3"), this.show_action = !0;
            let t = 30 * this.info.amount_index + 1800;
            d.stopAllByTarget(this.node_wheel), g(this.node_wheel).delay(1).to(4, {
                angle: t + 15
            }, {
                easing: "sineOut"
            }).to(.5, {
                angle: t
            }, {
                easing: "sineOut"
            }).call((() => {})).start()
        }
        setNumList() {
            this.info = b.dataHandler.getUserData().luckTurntables[0];
            for (let t = 0; t < this.num_list.length; t++) 3 == this.info.amount_list[t].currency_type ? (this.icon_list[t].node.active = !0, this.num_list[t].node.active = !1) : (this.icon_list[t].node.active = !1, this.num_list[t].node.active = !0, this.num_list[t].string = b.StringTools.serverGoldToShowString(this.info.amount_list[t].amount))
        }
        showGoldAnimation() {
            this.gold_effect_panel.active = !0;
            let t = this.gold_effect_panel.getParent().getComponent(p).convertToNodeSpaceAR(this.worldMovePos);
            this.playSound("zh_CN/hall/laba/audio/laba_chipfly.mp3");
            for (let e = 0; e < this.gold_image_list.length; e++) {
                this.gold_image_list[e].node.getComponent(_).opacity = 255, this.gold_image_list[e].node.setPosition(this.gold_image_pos[e]);
                let i = g(this.gold_image_list[e].node).to(.5 + .03 * e, {
                        position: t
                    }),
                    n = g(this.gold_image_list[e].node.getComponent(_)).to(.1, {
                        opacity: 0
                    });
                e < 5 ? i.call((() => {
                    n.start()
                })).start() : i.call((() => {
                    n.call((() => {
                        this.updataResult(!0), this.showNext()
                    })).start()
                })).start()
            }
        }
    }).prototype, "luckTurntables_panel", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(C.prototype, "bg_mage", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(C.prototype, "node_wheel", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(C.prototype, "redEnvelopeLuckResultPrefab", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(C.prototype, "gold_effect_panel", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(C.prototype, "gold_image_list", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), x = e(C.prototype, "gold_Panel", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(C.prototype, "Golb_Prefab", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(C.prototype, "num_list", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), F = e(C.prototype, "icon_list", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), O = e(C.prototype, "labaAni", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(C.prototype, "gameDataInstance", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = C)) || z));
    n._RF.pop()
}