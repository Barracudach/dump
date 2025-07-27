import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as A from "./cc.js";
import * as l from "./cc.js";
import * as p from "./cc.js";
import * as i from "./cc.js";
import * as I from "./cc.js";
import * as m from "./cc.js";
import * as C from "./cc.js";
import * as n from "./cc.js";
import * as T from "./cc.js";
import * as N from "./cc.js";
import * as O from "./cc.js";
import * as a from "./cc.js";
import * as u from "./Holdem_Basic_Item.js";
import * as d from "./Pb.js";
import * as f from "./CommonTools.js";
import * as b from "./ResourcesLoader.js";
import * as k from "./mttconfig.js";
import * as g from "./Translator.js";
import * as y from "./PlayerSetting_ts.js";

function main() {
    var M, P, E, S, K, w, R, v, D, H, F, L, G, z, B, x, W, q, V, U, Y, j, Q, $, J, X, Z, ee, te;
    a._RF.push({}, "1ccfdpiCkREzayBSm0tYqgS", "AttackIcons_ts", void 0);
    const {
        ccclass: oe,
        property: ae
    } = s;
    e("default", (M = ae(n), P = ae(i), E = ae(i), S = ae(i), K = ae(i), w = ae(i), R = ae(r), v = ae(r), D = ae(r), H = ae(r), F = ae(r), L = ae(r), G = ae(r), oe(((te = class e extends u {
        constructor(...e) {
            super(...e), o(this, "icon", x, this), o(this, "attackStart", W, this), o(this, "attacking", q, this), o(this, "attackEnd", V, this), o(this, "background", U, this), o(this, "price", Y, this), o(this, "calmDownPrefab", j, this), o(this, "fistPrefab", Q, this), o(this, "catchChickenPrefab", $, this), o(this, "flowerPrefab", J, this), o(this, "cashPrefab", X, this), o(this, "towelPrefab", Z, this), o(this, "fanPrefab", ee, this), this._playerSetting = null
        }
        getPositionInOtherNode(e, t) {
            if (null == t.parent) return null;
            let o = t.parent.getComponent(c).convertToWorldSpaceAR(t.getPosition()),
                a = e.getComponent(c).convertToNodeSpaceAR(o);
            return new A(a.x, a.y)
        }
        getRandomIntInclusive(e, t) {
            return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e
        }
        startAttack(t, o, a) {
            this.background.active = !1, this.icon.node.active = !1, this.price.active = !1;
            let n = this.getAnimNode(t);
            n.name = t;
            let i = cc_mtt.vv.DataManager.webPlatform;
            if (this.node.setPosition(this.getPositionInOtherNode(this.node.parent, o)), n != this.node) {
                let o = this.getPositionInOtherNode(this.node.parent, a),
                    r = n.getComponent(l);
                switch (t) {
                    case e.ATTACK_ICON_ANIMATION.CALM_DOWN:
                        let t = h("Node_HandScale/sprite_Hand", n);
                        t.setPosition(.962, -4.802), t.setRotation(new m(0, 0, 0)), t.getComponent(N).opacity = 255, I(this.node).sequence(I().to(.3, {
                            position: o
                        }), I().call((() => {
                            i == d.commonProto.PLATFORM.PKW && T(this.holdemRoom) && this.holdemRoom.audioPlayer.playEffect("mtt/audio/sound_effect/attack_icon_pkw/calmDown", this.holdemRoom.store), r.play(), r.on(l.EventType.FINISHED, (e => {
                                r.off(l.EventType.FINISHED), n.active = !1, this.node.destroy()
                            }))
                        }))).start();
                        break;
                    case e.ATTACK_ICON_ANIMATION.FIST:
                        this.playAttackAnimPkw(n, r, "item_fist", _(o.x, o.y), "fist");
                        break;
                    case e.ATTACK_ICON_ANIMATION.CATCH_CHICKEN:
                        this.playAttackAnimPkw(n, r, "item_chicken", _(o.x, o.y), "zhuaji");
                        break;
                    case e.ATTACK_ICON_ANIMATION.FLOWER:
                        this.playAttackAnimPkw(n, r, "item_flower", _(o.x, o.y), "flower");
                        break;
                    case e.ATTACK_ICON_ANIMATION.CASH:
                        this.playAttackAnimPkw(n, r, "item_money", _(o.x, o.y), "money");
                        break;
                    case e.ATTACK_ICON_ANIMATION.TOWEL:
                        this.playAttackAnimPkw(n, n.getChildByName("chahan_01").getComponent(l), "item_towel", _(o.x, o.y), "chahan");
                        break;
                    case e.ATTACK_ICON_ANIMATION.FAN:
                        let a = n.getChildByName("shanzi_01"),
                            s = n.getChildByName("shanzi_02"),
                            c = n.getChildByName("shanzi_03");
                        a.getComponent(l).play("shanzi_01"), a.getComponent(l).on(l.EventType.FINISHED, (e => {
                            a.getComponent(l).off(l.EventType.FINISHED);
                            let t = o;
                            t = o.x < 0 ? new A(o.x + 30, o.y - 40) : new A(o.x - 30, o.y - 40), I(this.node).sequence(I().to(.3, {
                                position: t
                            }), I().call((() => {
                                i == d.commonProto.PLATFORM.PKW && T(this.holdemRoom) && this.holdemRoom.audioPlayer.playEffect("mtt/audio/sound_effect/attack_icon_pkw/fan", this.holdemRoom.store), a.active = !1, o.x < 0 ? (c.active = !0, c.getComponent(l).play("shanzi_03"), c.getComponent(l).on(l.EventType.FINISHED, (e => {
                                    c.getComponent(l).off(l.EventType.FINISHED), this.node.destroy()
                                }))) : (s.active = !0, s.getComponent(l).play("shanzi_02"), s.getComponent(l).on(l.EventType.FINISHED, (e => {
                                    s.getComponent(l).off(l.EventType.FINISHED), this.node.destroy()
                                })))
                            }))).start()
                        }))
                }
            } else {
                let n = "";
                switch (t) {
                    case e.ATTACK_ICON_ANIMATION.KISS:
                        n = "01_kiss";
                        break;
                    case e.ATTACK_ICON_ANIMATION.BOMB:
                        n = "02_bomb";
                        break;
                    case e.ATTACK_ICON_ANIMATION.MISSILE:
                        n = "03_missile";
                        break;
                    case e.ATTACK_ICON_ANIMATION.TOMATO:
                        n = "04_tomato";
                        break;
                    case e.ATTACK_ICON_ANIMATION.BEER:
                        n = "05_beer";
                        break;
                    case e.ATTACK_ICON_ANIMATION.EGG:
                        n = "06_egg";
                        break;
                    case e.ATTACK_ICON_ANIMATION.BUCKET:
                        n = "07_bucket";
                        break;
                    case e.ATTACK_ICON_ANIMATION.GOOD:
                        n = "08_good";
                        break;
                    case e.ATTACK_ICON_ANIMATION.SHARK:
                        n = "09_shark";
                        break;
                    case e.ATTACK_ICON_ANIMATION.TAKE_PHOTO:
                        n = "10_takephoto";
                        break;
                    case e.ATTACK_ICON_ANIMATION.TEASE:
                        n = "11_chicken"
                }
                i == d.commonProto.PLATFORM.PKW && T(this.holdemRoom) && this.holdemRoom.audioPlayer.playEffect("mtt/audio/sound_effect/attack_icon_pkw/" + n, this.holdemRoom.store), this.attackEnd.getComponent(l).on(l.EventType.FINISHED, (function(e) {
                    this.node.destroy()
                }), this);
                let r = I().call((function() {
                        this.node.angle = 0, this.attacking.active = !1, this.node.position = this.getPositionInOtherNode(this.node.parent, a), this.attackEnd.getComponent(l).play(n)
                    })),
                    s = this.getPositionInOtherNode(this.node.parent, a),
                    c = I().sequence(I().to(.5, {
                        position: s
                    }), r);
                if (t == e.ATTACK_ICON_ANIMATION.MISSILE) {
                    let e = this.getPositionInOtherNode(this.node.parent, o),
                        t = this.getPositionInOtherNode(this.node.parent, a),
                        n = this.getRotation(new C(e.x, e.y), new C(t.x, t.y));
                    this.node.angle = f.instance.rotationToAngle(n)
                }
                this.attackStart.getComponent(l).on(l.EventType.FINISHED, (function(e) {
                    this.attackStart.active = !1, this.attacking.getComponent(l).play(n), c.target(this.node).start()
                }), this), this.attackStart.getComponent(l).play(n)
            }
        }
        getAnimNode(t) {
            let o = null;
            switch (t) {
                case e.ATTACK_ICON_ANIMATION.CALM_DOWN:
                    o = p(this.calmDownPrefab), o.parent = this.node, o.setPosition(0, 0);
                    break;
                case e.ATTACK_ICON_ANIMATION.CASH:
                    o = p(this.cashPrefab), o.parent = this.node, o.setPosition(0, 0);
                    break;
                case e.ATTACK_ICON_ANIMATION.CATCH_CHICKEN:
                    o = p(this.catchChickenPrefab), o.parent = this.node, o.setPosition(0, 0);
                    break;
                case e.ATTACK_ICON_ANIMATION.FAN:
                    o = p(this.fanPrefab), o.parent = this.node, o.setPosition(0, 0);
                    break;
                case e.ATTACK_ICON_ANIMATION.FIST:
                    o = p(this.fistPrefab), o.parent = this.node, o.setPosition(0, 0);
                    break;
                case e.ATTACK_ICON_ANIMATION.FLOWER:
                    o = p(this.flowerPrefab), o.parent = this.node, o.setPosition(0, 0);
                    break;
                case e.ATTACK_ICON_ANIMATION.TOWEL:
                    o = p(this.towelPrefab), o.parent = this.node, o.setPosition(0, 0);
                    break;
                default:
                    o = this.node
            }
            return o
        }
        setAnimationCallBack() {
            this.getComponent(l).on(l.EventType.FINISHED, (function(e) {
                this.node.active = !1, this.node.parent.parent.parent.setSiblingIndex(-32768)
            }), this)
        }
        setIcon(t) {
            this.node.name = t, this.node.active = !0;
            let o = b.RES_PATH.SPRITE.ATTACK_ICON;
            switch (t) {
                case e.ATTACK_ICON_ANIMATION.BEER:
                    o += "item_beer";
                    break;
                case e.ATTACK_ICON_ANIMATION.BOMB:
                    o += "item_bomb";
                    break;
                case e.ATTACK_ICON_ANIMATION.CALM_DOWN:
                    o += "item_calm_down";
                    break;
                case e.ATTACK_ICON_ANIMATION.CATCH_CHICKEN:
                    o += "item_chicken";
                    break;
                case e.ATTACK_ICON_ANIMATION.EGG:
                    o += "item_egg";
                    break;
                case e.ATTACK_ICON_ANIMATION.FAN:
                    o += "item_fan";
                    break;
                case e.ATTACK_ICON_ANIMATION.FIST:
                    o += "item_fist";
                    break;
                case e.ATTACK_ICON_ANIMATION.FLOWER:
                    o += "item_flower";
                    break;
                case e.ATTACK_ICON_ANIMATION.GOOD:
                    o += "item_like";
                    break;
                case e.ATTACK_ICON_ANIMATION.KISS:
                    o += "item_lip";
                    break;
                case e.ATTACK_ICON_ANIMATION.MISSILE:
                    o += "item_missile";
                    break;
                case e.ATTACK_ICON_ANIMATION.CASH:
                    o += "item_money";
                    break;
                case e.ATTACK_ICON_ANIMATION.SHARK:
                    o += "item_shark";
                    break;
                case e.ATTACK_ICON_ANIMATION.TAKE_PHOTO:
                    o += "item_take_photo";
                    break;
                case e.ATTACK_ICON_ANIMATION.TEASE:
                    o += "item_tease";
                    break;
                case e.ATTACK_ICON_ANIMATION.TOMATO:
                    o += "item_tomato";
                    break;
                case e.ATTACK_ICON_ANIMATION.TOWEL:
                    o += "item_towel";
                    break;
                case e.ATTACK_ICON_ANIMATION.BUCKET:
                    o += "item_water"
            }
            this.loadIconSprite(o)
        }
        loadIconSprite(e, t) {
            b.instance.loadRes(e, O, null, ((e, o) => {
                T(this) && T(this.icon) && (this.icon.spriteFrame = o, this.icon.node.active = !0, t && t())
            }))
        }
        playAttackAnimPkw(e, t, o, a, n) {
            e.active = !1, this.loadIconSprite(b.RES_PATH.SPRITE.ATTACK_ICON + o, (() => {
                I(this.node).sequence(I().to(.3, {
                    position: a
                }), I().call((() => {
                    cc_mtt.vv.DataManager.webPlatform == d.commonProto.PLATFORM.PKW && T(this.holdemRoom) && this.holdemRoom.audioPlayer.playEffect(`mtt/audio/sound_effect/attack_icon_pkw/${n}`, this.holdemRoom.store), e.active = !0, t.play(), this.icon.node.active = !1, t.on(l.EventType.FINISHED, (o => {
                        t.off(l.EventType.FINISHED), e.active = !1, this.node.destroy()
                    }))
                }))).start()
            }))
        }
        onGameAttackClicked() {
            let e = this._playerSetting;
            T(e) && (cc_mtt.vv.DataManager.gameViewType == d.commonProto.MTT_GAME_MODE.PP ? require(k.PineappleGlobal)._playersGame.getComponent(k.GameLogic).checkIsBystanderOrPlayer(require(k.DataManager).userId) ? require(k.PineappleGlobal)._playersGame.gameControls.getComponent(k.GameControls).showSendIconNotification(g("ICON_MESSAGE.NOT_PLAYER"), 1) : (e.getComponent(y).onClose(), require(k.PineappleGame)._pineappleNetwork.requestAnimReq({
                roomId: require(k.PineappleGame)._currentRoomID,
                targetUser: e.getComponent(y)._player.userId,
                anim: this.node.name
            })) : cc_mtt.vv.DataManager.gameViewType != d.commonProto.MTT_GAME_MODE.NLH && cc_mtt.vv.DataManager.gameViewType != d.commonProto.MTT_GAME_MODE.OMAHA && cc_mtt.vv.DataManager.gameViewType != d.commonProto.MTT_GAME_MODE.SHORT_DECK || (this.holdemRoom.store.checkIsPlayerSeated(require(k.DataManager).userId) || cc_mtt.vv.DataManager.webPlatform === d.commonProto.PLATFORM.PKW ? (e.getComponent(y).onClose(), this.holdemRoom.store.sendAnimReq(this.node.name, e.getComponent(y)._player.userId)) : this.holdemRoom.setNotificationMsg(g("ICON_MESSAGE.NOT_PLAYER"))))
        }
        calculateBezierPoint(e, t, o, a) {
            let n = 1 - e,
                i = n * n,
                r = i * t.x,
                s = i * t.y;
            return r += 2 * n * e * a.x, s += 2 * n * e * a.y, r += e * e * o.x, s += e * e * o.y, new C(r, s)
        }
        getRotation(e, t) {
            return 90 - 180 * Math.atan2(t.y - e.y, t.x - e.x) / Math.PI
        }
    }).ATTACK_ICON_ANIMATION = {
        MISSILE: "missile",
        TOMATO: "tomato",
        BOMB: "bomb",
        EGG: "egg",
        BUCKET: "bucket",
        GOOD: "good",
        CALM_DOWN: "calm_down",
        BEER: "beer",
        TAKE_PHOTO: "take_photo",
        TEASE: "tease",
        SHARK: "shark",
        KISS: "kiss",
        FIST: "fist",
        CATCH_CHICKEN: "catch_chicken",
        FLOWER: "flower",
        CASH: "cash",
        TOWEL: "towel",
        FAN: "fan"
    }, x = t((B = te).prototype, "icon", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(B.prototype, "attackStart", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(B.prototype, "attacking", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(B.prototype, "attackEnd", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(B.prototype, "background", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(B.prototype, "price", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(B.prototype, "calmDownPrefab", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(B.prototype, "fistPrefab", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = t(B.prototype, "catchChickenPrefab", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(B.prototype, "flowerPrefab", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(B.prototype, "cashPrefab", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(B.prototype, "towelPrefab", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ee = t(B.prototype, "fanPrefab", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = B)) || z));
    a._RF.pop()
}