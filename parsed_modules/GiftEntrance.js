import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as _ from "./cc.js";
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as g from "./gs_protocol.mjs_cjs=&original=.js";
import * as m from "./cv.js";
import * as b from "./TagCom.js";
import * as I from "./HashMap.js";
import * as A from "./GiftPanel.js";
import * as y from "./GiftAnim.js";
import * as S from "./GiftAnimOrbit.js";
import * as T from "./GiftData.js";
import * as C from "./GiftSmallBox.js";
import * as G from "./GiftSmallBox.js";
import * as R from "./GameSceneInstance.js";
import * as M from "./AudioComp.js";

function main() {
    var E, D, N, O, P, w, v, F, k, $, x, U, B, z, L, V, H, Z, K, W, j, Q, q, J, X, Y, ee;
    n._RF.push({}, "2beebrJ8YZOoZiJxqWhMnP2", "GiftEntrance", void 0);
    var te = function(e) {
        return e[e.NONE = 0] = "NONE", e[e.ORBIT = 1] = "ORBIT", e[e.AIRPLANE = 2] = "AIRPLANE", e[e.LAMBORGHINI = 3] = "LAMBORGHINI", e[e.ROCKET = 4] = "ROCKET", e[e.DIAMOND = 5] = "DIAMOND", e[e.GIFTCARD = 6] = "GIFTCARD", e[e.LOVEKISS = 7] = "LOVEKISS", e
    }(te || {});
    const {
        ccclass: ie,
        property: ne
    } = s;
    e("GiftEntrance", (E = ne(a), D = ne(a), N = ne(a), O = ne(a), P = ne(a), w = ne(a), v = ne(a), F = ne(a), k = ne(a), $ = ne(o), x = C(), U = C("GameDataInstance"), ie(((ee = class e extends l {
        constructor(...e) {
            super(...e), i(this, "prefab_smallbox", L, this), i(this, "prefab_giftpanel", V, this), i(this, "prefab_orbit", H, this), i(this, "prefab_airplane", Z, this), i(this, "prefab_lamborghini", K, this), i(this, "prefab_rocket", W, this), i(this, "prefab_diamond", j, this), i(this, "prefab_giftcard", Q, this), i(this, "prefab_lovekiss", q, this), i(this, "img_dot", J, this), this._panel_anim = null, this._panel_gift = null, this._panel_smallbox = null, this._animQueueMap = new b, this._animPoolMap = new b, this._overlapGiftMap = new b, i(this, "gameSceneInstance", X, this), i(this, "gameDataInstance", Y, this)
        }
        autoShow() {
            this.node.active = !0
        }
        autoHide() {
            this.node.active = !1, this._panel_gift && this._panel_gift.autoHide(!1)
        }
        showSmallBox(e) {
            let t = this._panel_smallbox.node.getComponent(r);
            e.x += t.width * t.anchorX, e.y += t.height * t.anchorY;
            let i = new p(p.ZERO);
            this._panel_smallbox.node.parent.getComponent(r).convertToNodeSpaceAR(e, i), this._panel_smallbox.node.setPosition(i), this._panel_smallbox.node.active = !0
        }
        onLoad() {
            if (this.node.on("click", this._onClick, this), this._registerEvent(), !this._panel_anim) {
                let t = new o;
                t.getComponent(r).setContentSize(c.getVisibleSize()), t.name = `${e.g_class_name}_panel_anim`, this._panel_anim = this._createInst(t, 0, this.node.parent), this._panel_anim.active = !1
            }
            if (!this._panel_smallbox) {
                let e = this._createInst(this.prefab_smallbox, 0, this.node.parent);
                this._panel_smallbox = e.getComponent(T), this._panel_smallbox.node.active = !1
            }
            this.img_dot.active = !1
        }
        start() {}
        onDestroy() {
            this._unregisterEvent(), this._clearAnimNodePool()
        }
        _registerEvent() {
            g.MessageCenter.register("click_seat_gift_icon", this._onClick.bind(this), this.node), g.MessageCenter.register(S.GIFT_MSG_NOTICE_NEWS, this._onMsgGiftNews.bind(this), this.node), g.MessageCenter.register(S.GIFT_MSG_STARS_RECVREAD_STATUS, this._onMsgStarsRecvReadStatus.bind(this), this.node), g.MessageCenter.register(S.GIFT_MSG_SELF_SENDGIFT, this._onMsgSelfSendGift.bind(this), this.node)
        }
        _unregisterEvent() {
            g.MessageCenter.unregister("click_seat_gift_icon", this.node), g.MessageCenter.unregister(S.GIFT_MSG_NOTICE_NEWS, this.node), g.MessageCenter.unregister(S.GIFT_MSG_STARS_RECVREAD_STATUS, this.node), g.MessageCenter.unregister(S.GIFT_MSG_SELF_SENDGIFT, this.node)
        }
        _createInst(e, t, i, n) {
            if (!g.tools.isValidNode(e)) return null;
            let o = new _(_.ZERO),
                s = new _(_.ZERO),
                l = i.getComponent(r);
            i ? (o.x = l.width, o.y = l.height) : (i = this.gameSceneInstance.room.gameScene, o.x = c.getVisibleSize().width, o.y = c.getVisibleSize().height), s.x = i.scale.x, s.y = i.scale.y, t = t || 0;
            let p = null;
            return p = e instanceof a ? d(e) : e, n = n || p.getComponent(r).anchorPoint.subtract(l.anchorPoint).multiply(o).multiply(s), p.setPosition(h(n.x, n.y, 0)), i.addChild(p), i.setSiblingIndex(t), p
        }
        _onClick() {
            if (g.AudioMgr.playButtonSound("button_click"), !this._panel_gift) {
                let e = this._createInst(this.prefab_giftpanel, this.node.getSiblingIndex(), this.node.parent);
                this._panel_gift = e.getComponent(I), this._panel_gift.node.active = !0
            }
            let e = !this.img_dot.active;
            this._panel_gift.autoShow(e)
        }
        _getAnimTypeByGiftID(e) {
            let t = te.NONE;
            switch (e) {
                case 1:
                    t = te.DIAMOND;
                    break;
                case 2:
                    t = te.LOVEKISS;
                    break;
                case 3:
                    t = te.GIFTCARD;
                    break;
                case 1001:
                    t = te.ROCKET;
                    break;
                case 1002:
                    t = te.AIRPLANE;
                    break;
                case 1003:
                    t = te.LAMBORGHINI
            }
            return t
        }
        _getAnimNodeFromPool(t) {
            let i = null,
                n = this._animPoolMap.get(t);
            if (!n) {
                let e = null;
                switch (t) {
                    case te.AIRPLANE:
                    case te.LAMBORGHINI:
                    case te.ROCKET:
                    case te.DIAMOND:
                    case te.GIFTCARD:
                    case te.LOVEKISS:
                        e = A;
                        break;
                    case te.ORBIT:
                        e = y
                }
                n = new u(e), this._animPoolMap.add(t, n)
            }
            let a = this._animQueueMap.get(t);
            if (a || (a = [], this._animQueueMap.add(t, a)), n.size() > 0) i = n.get(), a.push(i), console.log(`${e.g_class_name} - animi_inst => from pool: ${t}_${i.uuid}, [${n.size()}, ${a.length}]`);
            else if (a.length < S.GIFT_ANIMINS_TMAXCOUNT) {
                let o = null;
                switch (t) {
                    case te.ORBIT:
                        o = this.prefab_orbit;
                        break;
                    case te.AIRPLANE:
                        o = this.prefab_airplane;
                        break;
                    case te.LAMBORGHINI:
                        o = this.prefab_lamborghini;
                        break;
                    case te.ROCKET:
                        o = this.prefab_rocket;
                        break;
                    case te.DIAMOND:
                        o = this.prefab_diamond;
                        break;
                    case te.GIFTCARD:
                        o = this.prefab_giftcard;
                        break;
                    case te.LOVEKISS:
                        o = this.prefab_lovekiss
                }
                if (o) {
                    i = d(o), a.push(i);
                    let s = i.getComponent(m);
                    s || (s = i.addComponent(m)), s.reset(), console.log(`${e.g_class_name} - animi_inst => from create: ${t}_${i.uuid}, [${n.size()}, ${a.length}]`)
                }
            } else i = a[0], this._recycleAnimNodeToPool(i, t), i = n.get(), a.push(i), console.log(`${e.g_class_name} - animi_inst => from queue: ${t}_${i.uuid}, [${n.size()}, ${a.length}]`);
            return i
        }
        _recycleAnimNodeToPool(t, i) {
            if (!(t instanceof o && f(t, !0))) return;
            let n = this._animPoolMap.get(i),
                a = this._animQueueMap.get(i);
            if (n && a) {
                for (let e = 0; e < a.length; ++e)
                    if (t.uuid === a[e].uuid) {
                        a.splice(e--, 1);
                        break
                    } n.put(t), t.getComponent(m).reset(), console.log(`${e.g_class_name} - animi_inst => recycle: ${i}_${t.uuid}, [${n.size()}, ${a.length}]`)
            }
        }
        _clearAnimNodePool() {
            this._animPoolMap.forEach(((e, t, i) => {
                t.clear()
            })), this._animPoolMap.clear(), this._animQueueMap.clear()
        }
        _onMsgGiftNews(e) {
            e.gift && e.gift.newsType === M.protocol.NewsType.NewsType_Tip && e.gift.player.playerid !== g.dataHandler.getUserData().u32Uid && this._dealGiftNews(e.gift)
        }
        _onMsgStarsRecvReadStatus(e) {
            this.img_dot.active = !e
        }
        _onMsgSelfSendGift(e) {
            let t = M.protocol.RoomNews.create();
            t = M.protocol.RoomNews.create(), t.newsType = M.protocol.NewsType.NewsType_Tip, t.player = M.protocol.PlayerAtomData.create(), t.player.playerid = g.dataHandler.getUserData().u32Uid, t.toPlayer = M.protocol.PlayerAtomData.create(), t.toPlayer.playerid = e.toUID, t.toPlayer.identity = 1, t.tip = M.protocol.TipInfo.create(), t.tip.tipId = e.giftID, t.tip.tipCount = e.giftCount;
            let i = this._getGiftAnimUUID(t),
                n = this._overlapGiftMap.get(i);
            t.count5Second = null !== n ? n + 1 : 2, this._dealGiftNews(t)
        }
        _getGiftAnimUUID(e) {
            let t = "",
                i = e.tip.tipId;
            e.player.playerid;
            return t = `gift_anim_${i}_${e.toPlayer.playerid}`, t
        }
        _dealGiftNews(e) {
            let t = g.dataHandler.getUserData().u32Uid;
            if (t === e.toPlayer.playerid && 1 === e.toPlayer.identity && g.MessageCenter.send(S.GIFT_MSG_STARS_RECVREAD_STATUS, !1), !g.tools.isShowGiftAnim() && t !== e.player.playerid) return;
            if (!this.gameDataInstance.tGiftData.getStarInfoByID(e.toPlayer.playerid)) return;
            this._panel_anim.active = !0;
            let i = new p(p.ZERO),
                n = new p(p.ZERO),
                a = !1,
                s = g.Enum.SeatDriction.DRICTION_BOTTOM,
                l = this.gameDataInstance.tGiftData.getSeatListRef();
            for (let t = 0; t < l.length; ++t) {
                let c = l[t].getViewStyle(),
                    d = l[t].getData();
                if (d) {
                    if (d.playerid === e.player.playerid && (a = !0, l[t].node.getComponent(r).convertToWorldSpaceAR(p.ZERO, i), 2 === c)) {
                        let e = l[t];
                        e.starVideo instanceof o && e.starVideo.convertToWorldSpaceAR(_.ZERO, i)
                    }
                    if (d.playerid === e.toPlayer.playerid && (s = l[t].direction, l[t].node.getComponent(r).convertToWorldSpaceAR(p.ZERO, n), 2 === c)) {
                        let e = l[t];
                        e.starVideo instanceof o && e.starVideo.convertToWorldSpaceAR(_.ZERO, n)
                    }
                }
            }
            a || (i = h(this.gameDataInstance.tGiftData.getOnlookersPos().x, this.gameDataInstance.tGiftData.getOnlookersPos().y, 0));
            let c = this._getAnimNodeFromPool(te.ORBIT).getComponent(y);
            this._panel_anim.addChild(c.node);
            let d = this._playGiftAnim(e, n, s);
            g.AudioMgr.playEffectByAudioCompInGameCash(R.Instance().setUrl(`${S.GIFT_AUDIO_PATH}orbit_start`).setRoomId(G.getInstanceRoomId(null == this ? void 0 : this.node) ?? -1)), c.play(i, n, this._onOrbitAnimArrived.bind(this, e.tip.tipId, d), this._onAnimFinished.bind(this, c.node, te.ORBIT))
        }
        _playGiftAnim(e, t, i) {
            let n = e.tip.tipId,
                a = this._getAnimTypeByGiftID(n),
                o = !1;
            if (n >= 1e3) {
                let s = null,
                    l = this._getGiftAnimUUID(e),
                    r = this._animQueueMap.get(a);
                if (Array.isArray(r))
                    for (let e = 0; e < r.length; ++e) {
                        if (r[e].getComponent(m).sTag === l) {
                            s = r[e], o = !0;
                            break
                        }
                    }
                if (!s) {
                    s = this._getAnimNodeFromPool(a), s.getComponent(m).sTag = l, this._panel_anim.addChild(s)
                }
                o && this._overlapGiftMap.add(l, e.count5Second);
                let p = s.getComponent(A),
                    c = o ? e.count5Second : e.tip.tipCount;
                p.play(t, i, c, this._onAnimPlayEndClip.bind(this, p.node, n), this._onAnimFinished.bind(this, p.node, a), o)
            } else {
                let o = this._getAnimNodeFromPool(a).getComponent(A);
                this._panel_anim.addChild(o.node), o.play(t, i, e.tip.tipCount, this._onAnimPlayEndClip.bind(this, o.node, n), this._onAnimFinished.bind(this, o.node, a))
            }
            return o
        }
        _onOrbitAnimArrived(e, t) {
            g.AudioMgr.playEffectByAudioCompInGameCash(R.Instance().setUrl(`${S.GIFT_AUDIO_PATH}orbit_end`).setRoomId(G.getInstanceRoomId(null == this ? void 0 : this.node) ?? -1)), t || g.AudioMgr.playEffectByAudioCompInGameCash(R.Instance().setUrl(`${S.GIFT_AUDIO_PATH}gift${e}`).setRoomId(G.getInstanceRoomId(null == this ? void 0 : this.node) ?? -1))
        }
        _onAnimPlayEndClip(e, t) {
            g.AudioMgr.playEffectByAudioCompInGameCash(R.Instance().setUrl(`${S.GIFT_AUDIO_PATH}gift${t}_end`).setRoomId(G.getInstanceRoomId(null == this ? void 0 : this.node) ?? -1));
            let i = e.getComponent(m);
            this._overlapGiftMap.remove(i.sTag), i.reset()
        }
        _onAnimFinished(e, t) {
            this._recycleAnimNodeToPool(e, t)
        }
    }).g_class_name = "GiftEntrance", L = t((z = ee).prototype, "prefab_smallbox", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = t(z.prototype, "prefab_giftpanel", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = t(z.prototype, "prefab_orbit", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = t(z.prototype, "prefab_airplane", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = t(z.prototype, "prefab_lamborghini", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(z.prototype, "prefab_rocket", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = t(z.prototype, "prefab_diamond", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(z.prototype, "prefab_giftcard", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = t(z.prototype, "prefab_lovekiss", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(z.prototype, "img_dot", [$], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = t(z.prototype, "gameSceneInstance", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = t(z.prototype, "gameDataInstance", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = z)) || B));
    n._RF.pop()
}