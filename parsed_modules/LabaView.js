import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as f from "./cc.js";
import * as p from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as z from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as _ from "./cc.js";
import * as b from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as d from "./cc.js";
import * as v from "./cc.js";
import * as w from "./cc.js";
import * as y from "./cc.js";
import * as S from "./cv.js";
import * as T from "./TweenControl.js";

function main() {
    var E, I, N, D, L, M, P, x, A, k, U, H, R, F, B, O, V, G, q, W, Z, j, J, K, X, Y, Q, $, tt, et, it, at, nt, lt, ot, st, rt, ht, ut, gt, _t, ct, mt, dt, pt, bt, ft, yt, wt, zt;
    a._RF.push({}, "ae155JeatZIKp6VFo0X8s4A", "LabaView", void 0);
    const {
        ccclass: Ct,
        property: vt
    } = h;
    t("default", (E = vt(n), I = vt(n), N = vt(n), D = vt(n), L = vt(n), M = vt(n), P = vt(l), x = vt(l), A = vt(l), k = vt(l), U = vt(l), H = vt(l), R = vt(o), F = vt(l), B = vt(n), O = vt(l), V = vt(l), G = vt(l), q = vt(s), W = vt(o), Z = vt(r), j = vt(n), J = vt(n), K = vt(n), Ct((Q = e((Y = class extends u {
        constructor(...t) {
            super(...t), i(this, "laba_panel", Q, this), i(this, "result_panel", $, this), i(this, "cell", tt, this), i(this, "gold_effect_panel", et, this), i(this, "item_panel", it, this), i(this, "effect_panel", at, this), i(this, "animation1", nt, this), i(this, "mask_image", lt, this), i(this, "animation2", ot, this), i(this, "arrow_left", st, this), i(this, "arrow_right", rt, this), i(this, "hand_image", ht, this), i(this, "result_number", ut, this), i(this, "result_gold_icon", gt, this), i(this, "result_effect_panel", _t, this), i(this, "light_image", ct, this), i(this, "stars_image", mt, this), i(this, "gold_image", dt, this), i(this, "des_num_text", pt, this), i(this, "des_text", bt, this), i(this, "labaCellPref", ft, this), i(this, "spTitle", yt, this), i(this, "bg_img", wt, this), i(this, "targetPos", zt, this), this._show_action = !1, this._item = null, this.ITEM_NUMBER = 120, this._num_list = [], this._num_virtual_list = [], this._index = 0, this._cellSize = null, this._tempLabel = null, this._audioID = -1
        }
        onLoad() {
            g(this.arrow_right.node).to(0, {
                scale: this.arrow_right.node.scale.multiply3f(-1, 1, 1)
            }).start(), this._num_list = [], this._num_virtual_list = [], this._item = new n, this._cellSize = this.cell.getComponent(_).contentSize, this._item.getComponent(_).setContentSize(new c(this.cell.getComponent(_).contentSize.width, this.cell.getComponent(_).contentSize.height * this.ITEM_NUMBER)), this.laba_panel.on(n.EventType.TOUCH_END, this.onTouchLabaPanelEnd, this);
            for (let t = 0; t < this.ITEM_NUMBER; t++) {
                let e = m(this.labaCellPref);
                e.setPosition(new d(0, t * e.getComponent(_).contentSize.height - 250)), this._item.addChild(e), this._num_list.push(e.getChildByName("animation_panel").getChildByName("number")), this._num_virtual_list.push(e.getChildByName("animation_panel").getChildByName("number_virtual"))
            }
            this.cell.active = !1, this.item_panel.addChild(this._item), this.des_text.string = S.config.getStringData("Laba_laba_panel_des_text"), S.resMgr.setSpriteFrame(this.spTitle, S.config.getLanguagePath("hall/laba/title")), S.resMgr.setSpriteFrame(this.bg_img, S.config.getLanguagePath("hall/laba/jieguozhansd")), S.resMgr.adaptWidget(this.node), S.resMgr.adaptWidget(this.result_gold_icon.node), S.resMgr.adaptWidget(this.result_number.node)
        }
        onDestroy() {
            S.AudioMgr.stop(this._audioID)
        }
        start() {}
        onTouchLabaPanelEnd(t) {
            console.log("Touch End LabaPanel"), this._show_action || (this._show_action = !0, this.runAnimation())
        }
        setLabaNum(t) {
            S.StringTools.setRichTextString(this.des_num_text.node, S.StringTools.formatC(S.config.getStringData("Laba_laba_panel_des_num_text"), t))
        }
        updateView(t = !0) {
            if (!this._show_action && S.dataHandler.getUserData().luckindex >= S.dataHandler.getUserData().lucks.length) return void(this.node.active = !1);
            this.setLabaNum(S.dataHandler.getUserData().lucks.length - S.dataHandler.getUserData().luckindex), 1 == t && (S.AudioMgr.stop(this._audioID), S.AudioMgr.play("zh_CN/hall/laba/audio/laba_bg", !0), this._audioID = S.AudioMgr.getAudioID("zh_CN/hall/laba/audio/laba_bg")), this.mask_image.node.active = !1, this.animation2.node.active = !1, this._item.position = new d(this._item.position.x, 0, this._item.position.z), this.animationRegularly(), this.animationHand(), this._show_action = !1, this.laba_panel.active = !0, this.result_panel.active = !1, this.gold_effect_panel.active = !1, S.resMgr.setSpriteFrame(this.mask_image.node, "zh_CN/hall/laba/zhezhao");
            let e = S.dataHandler.getUserData().luckindex,
                i = S.dataHandler.getUserData().lucks,
                a = i[e].index;
            for (let t = 0; t < this.ITEM_NUMBER - 12; t++) {
                let a = i[e].amount_ranges[t % i[e].amount_ranges.length],
                    n = S.StringTools.numberToString(S.StringTools.clientGoldByServer(a));
                this._num_list[t].getComponent(o).string = n
            }
            for (let t = 0; t < 12; t++) {
                let n;
                n = a >= 10 ? a - 10 + t + 1 : a - 10 + i[e].amount_ranges.length + 1 + t;
                let l = i[e].amount_ranges[n % i[e].amount_ranges.length],
                    s = S.StringTools.numberToString(S.StringTools.clientGoldByServer(l));
                this._num_list[this.ITEM_NUMBER - 12 + t].getComponent(o).string = s
            }
        }
        animationRegularly() {
            g(this.animation1.node).by(8, {
                angle: 45
            }).repeatForever().start()
        }
        animationHand() {
            this.effect_panel.active = !0;
            let t = g(this.hand_image.getComponent(p)).to(1, {
                    opacity: 255
                }),
                e = g().to(1, {
                    position: b(this.hand_image.node.getPosition().x, -120)
                }),
                i = g(this.hand_image.getComponent(p)).to(1, {
                    opacity: 0
                });
            g(this.hand_image.node).sequence(g().call((() => {
                let t = this.hand_image.node.getPosition();
                t.y = 35, this.hand_image.node.setPosition(t)
            })), g().call((() => {
                t.start()
            })), g().delay(1), e, g().call((() => {
                i.start()
            })), g().delay(1.5)).repeatForever().start()
        }
        runAnimation() {
            this.setLabaNum(S.dataHandler.getUserData().lucks.length - S.dataHandler.getUserData().luckindex - 1), this.mask_image.node.active = !0, this.effect_panel.active = !1, f.stopAllByTarget(this.hand_image.node), f.stopAllByTarget(this.animation1.node), f.stopAllByTarget(this.light_image.node), f.stopAllByTarget(this.stars_image.node), this._doAnimation2(), S.AudioMgr.playEffect("zh_CN/hall/laba/audio/laba")
        }
        _doAnimation2() {
            g(this.animation1.node).by(5, {
                angle: 1440
            }, {
                easing: "sineInOut"
            }).call((() => {
                this.animation3()
            })).start();
            let t = this._item.getComponent(_).height - this.item_panel.getComponent(_).height - 80;
            g(this._item).sequence(g().to(4, {
                position: b(0, 10 - t, 0)
            }, {
                easing: "sineInOut"
            }), g().to(1, {
                position: b(0, -t, 0)
            }, {
                easing: "elasticOut"
            })).start();
            let e = .03;
            g(this.arrow_left.node).sequence(g().repeat(1 / .06 + 1, g().to(e, {
                angle: 15
            }, {
                easing: "backIn"
            }).to(e, {
                angle: 0
            }, {
                easing: "backIn"
            })), g().repeat(15, g().to(.05, {
                angle: 15
            }).to(.05, {
                angle: 0
            })), g().repeat(2 / .06, g().to(e, {
                angle: 15
            }, {
                easing: "sineInOut"
            }).to(e, {
                angle: 0
            }, {
                easing: "sineInOut"
            }))).start(), g(this.arrow_right.node).sequence(g().repeat(1 / .06 + 1, g().to(e, {
                angle: -15
            }, {
                easing: "backIn"
            }).to(e, {
                angle: 0
            }, {
                easing: "backIn"
            })), g().repeat(15, g().to(.05, {
                angle: -15
            }).to(.05, {
                angle: 0
            })), g().repeat(2 / .06, g().to(e, {
                angle: -15
            }, {
                easing: "sineInOut"
            }).to(e, {
                angle: 0
            }, {
                easing: "sineInOut"
            }))).start(), this.animationNumVirtual()
        }
        animationNumVirtual() {
            let t = .5,
                e = g().delay(t).to(1, {
                    opacity: 0
                }).delay(t).to(1, {
                    opacity: 255
                }).delay(t),
                i = g().delay(t).to(1, {
                    opacity: 255
                }).delay(t).to(1, {
                    opacity: 0
                }).delay(t);
            for (let t = 0; t < this.ITEM_NUMBER; t++) e.clone(this._num_list[t].getComponent(p)).start(), i.clone(this._num_virtual_list[t].getComponent(p)).start()
        }
        animation3() {
            S.resMgr.setSpriteFrame(this.mask_image.node, "zh_CN/hall/laba/mengban"), S.AudioMgr.playEffect("zh_CN/hall/laba/audio/laba_result");
            let t = this._num_list[117];
            this.animation2.node.active = !0, T.blink(this.animation2.node, 3, 5, (() => {
                this.showResult(), z(this._tempLabel) && (this._tempLabel.removeFromParent(), this._tempLabel = null), t && (t.active = !0)
            }));
            let e = m(t);
            this.result_number.string = e.getComponent(o).string;
            let i = this.result_gold_icon.node.getPosition();
            i.x = -S.resMgr.getLabelStringSize(this.result_number).width / 2, this.result_gold_icon.node.setPosition(i), i = this.result_number.node.getPosition(), i.x = this.result_gold_icon.node.getComponent(_).width / 2, this.result_number.node.setPosition(i), t.parent.parent.parent.addChild(e), e.setPosition(t.parent.parent.getPosition()), g(e.getComponent(o)).repeat(5, g(e.getComponent(o)).to(.2, {
                color: y(180, 180, 180)
            }).to(.2, {
                color: w.WHITE
            })).call((() => {
                g(e).to(.5, {
                    scale: b(1.86, 1.86, 1.86)
                }).start()
            })).start(), z(this._tempLabel) && (this._tempLabel.removeFromParent(), this._tempLabel = null), this._tempLabel = e, t.active = !1, this.animationRegularly()
        }
        showResult() {
            f.stopAllByTarget(this.animation1.node), this.laba_panel.active = !1, this.result_panel.active = !0, this.gold_effect_panel.active = !1, this.result_panel.setScale(new d(d.ZERO)), this._index = 1, this.stars_image.getComponent(C).play("starAnim"), g(this.light_image.node).by(1.5, {
                angle: 180
            }).repeatForever().start();
            g(this.result_panel).to(1, {
                scale: b(d.ONE)
            }, {
                easing: "elasticOut"
            }).delay(1.2).call((() => {
                this.showGoldAnimation()
            })).start();
            let t = S.dataHandler.getUserData().lucks[S.dataHandler.getUserData().luckindex].id;
            S.worldNet.RequestLuckDrawDone(t), S.dataHandler.getUserData().luckindex++
        }
        showGoldAnimation() {
            this.laba_panel.active = !1, this.result_panel.active = !1, this.gold_effect_panel.active = !0;
            this.gold_effect_panel.getComponent(_).contentSize;
            this.gold_image.node.setPosition(b(d.ZERO));
            let t = this.gold_image.getComponent(C);
            t.play("goldAnim"), t.on(C.EventType.FINISHED, this.onAnimationFinished, this);
            let e = v.getVisibleSize().height / S.config.DESIGN_HEIGHT;
            S.config.IS_FULLSCREEN && (e = (v.getVisibleSize().height - S.config.FULLSCREEN_OFFSETY) / S.config.DESIGN_HEIGHT);
            let i = this.targetPos.getPosition();
            g(this.gold_image.node).to(.83, {
                position: b(i.x, i.y * e)
            }).start()
        }
        onAnimationFinished() {
            S.dataHandler.getUserData().luckindex < S.dataHandler.getUserData().lucks.length ? this._show_action && (this._show_action = !1, this.updateView(!1)) : this.closeView(), S.AudioMgr.playEffect("zh_CN/hall/laba/audio/laba_chipfly"), S.worldNet.requestGetUserData()
        }
        closeView() {
            S.AudioMgr.stopAll(), this.node.active = !1
        }
    }).prototype, "laba_panel", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(Y.prototype, "result_panel", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(Y.prototype, "cell", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(Y.prototype, "gold_effect_panel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(Y.prototype, "item_panel", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(Y.prototype, "effect_panel", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(Y.prototype, "animation1", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), lt = e(Y.prototype, "mask_image", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(Y.prototype, "animation2", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), st = e(Y.prototype, "arrow_left", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(Y.prototype, "arrow_right", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ht = e(Y.prototype, "hand_image", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ut = e(Y.prototype, "result_number", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), gt = e(Y.prototype, "result_gold_icon", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), _t = e(Y.prototype, "result_effect_panel", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ct = e(Y.prototype, "light_image", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), mt = e(Y.prototype, "stars_image", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), dt = e(Y.prototype, "gold_image", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), pt = e(Y.prototype, "des_num_text", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), bt = e(Y.prototype, "des_text", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ft = e(Y.prototype, "labaCellPref", [Z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), yt = e(Y.prototype, "spTitle", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), wt = e(Y.prototype, "bg_img", [J], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), zt = e(Y.prototype, "targetPos", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = Y)) || X));
    a._RF.pop()
}