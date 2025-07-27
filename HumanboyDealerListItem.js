import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./cv.js";
import * as u from "./HumanboyDataMgr.js";
import * as h from "./TagCom.js";
import * as c from "./HumanboyDealerList.js";
import * as p from "./CircleSprite.js";
import * as m from "./CircleSprite.js";

function main() {
    var x, b, f, y, S, H, D, C, w, R, v, z, L, T, P, I, E, M;
    o._RF.push({}, "72b93CRq5pHOJXPkICPko1M", "HumanboyDealerListItem", void 0);
    const {
        ccclass: N,
        property: F
    } = r;
    t("HumanboyDealerListItem", (x = F(n), b = F(n), f = F(n), y = F(n), S = F(s), H = F(s), D = F(s), C = F(s), N((v = e((R = class extends a {
        constructor(...t) {
            super(...t), i(this, "img_selected", v, this), i(this, "img_head", z, this), i(this, "img_head_box", L, this), i(this, "img_gold", T, this), i(this, "txt_index", P, this), i(this, "txt_name", I, this), i(this, "txt_gold", E, this), i(this, "txt_score", M, this), this._txt_gold_src_pos = l(d.ZERO), this._txt_score_src_pos = l(d.ZERO)
        }
        updateSVReuseData(t, e, i) {
            if (t < 0 || t >= e.length) return;
            let o = e[t];
            this._setData(t, o, i)
        }
        onLoad() {
            this._txt_gold_src_pos = l(this.txt_gold.node.position), this._txt_score_src_pos = l(this.txt_score.node.position)
        }
        start() {}
        _setData(t, e, i) {
            this.txt_index.string = g.StringTools.formatC("%d", t + 1);
            let o = .7,
                n = "",
                r = g.StringTools.times(e.stockNum, u.getHumanboyRoom().tCurRoom.moneyPerStock),
                a = e.winningCoin;
            this.txt_gold.node.active = !1, this.txt_score.node.active = !1;
            let d = i.getComponent(h);
            if (!d) return;
            let x = d.nTag;
            this.txt_gold.string = u.getHumanboyRoom().transGoldShortString(r);
            let b = g.resMgr.getLabelStringSize(this.txt_gold);
            if (0 === e.uid || x == c.HDLV_TYPE_WATTING) {
                this.txt_gold.node.active = !0, this.txt_gold.node.setPosition(this.txt_gold.node.position.x, 0, 0);
                let t = 0 === e.uid ? o : 1;
                this.img_gold.node.setScale(l(t, t, t)), this.img_gold.node.setPosition(this.txt_gold.node.position.x - b.width - 10, this.txt_gold.node.position.y, 0)
            } else if (x === c.HDLV_TYPE_CANDIDATE) {
                this.txt_gold.node.active = !0, this.txt_score.node.active = !0;
                let t = "",
                    e = _.WHITE;
                a > 0 ? (t = "+", e = new _(255, 0, 0, 255)) : e = a < 0 ? new _(66, 255, 65, 255) : _.WHITE, this.txt_score.string = t + u.getHumanboyRoom().transGoldShortString(a), this.txt_score.node.getComponent(s).color = e, this.txt_gold.node.setPosition(this._txt_gold_src_pos), this.txt_score.node.setPosition(this._txt_score_src_pos), this.img_gold.node.setScale(l(o, o, o)), this.img_gold.node.setPosition(this.txt_gold.node.position.x - b.width - 10, this.txt_gold.node.position.y, 0)
            }
            if (0 === e.uid) {
                n = g.config.getStringData("Humanboy_game_dealer_system");
                let t = m.getHeadNode(this.img_head.node);
                t && (t.parent.active = !1), g.resMgr.setSpriteFrame(this.img_head.node, "zh_CN/game/humanboy/head/head_system_suqare"), g.resMgr.setSpriteFrame(this.img_head_box.node, "zh_CN/game/humanboy/head/head_system_box_square")
            } else {
                n = e.name;
                let t = "";
                e.head.length > 0 && (t = g.dataHandler.getUserData().getImageURL(e.head)), m.setCircleSprite(this.img_head.node, t, e.plat, !1, p.IRREGULAR), this.img_head.spriteFrame = null, g.resMgr.setSpriteFrame(this.img_head_box.node, "zh_CN/game/humanboy/head/head_player_box_square")
            }
            this.txt_name.string = n, this.img_selected.node.active = e.uid === g.dataHandler.getUserData().u32Uid
        }
    }).prototype, "img_selected", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(R.prototype, "img_head", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(R.prototype, "img_head_box", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = e(R.prototype, "img_gold", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = e(R.prototype, "txt_index", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = e(R.prototype, "txt_name", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(R.prototype, "txt_gold", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = e(R.prototype, "txt_score", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = R)) || w));
    o._RF.pop()
}