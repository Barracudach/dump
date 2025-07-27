import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";

function main() {
    var p, d, m, _, b, g, u, N, x, C, S;
    r._RF.push({}, "701494531lGoICJJDUqKOjO", "HumanboyBetCoin", void 0);
    var f = function(t) {
            return t[t.SHAPE_COIN = 0] = "SHAPE_COIN", t[t.SHAPE_BLOCK = 1] = "SHAPE_BLOCK", t
        }(f || {}),
        y = function(t) {
            return t[t.NONE = 0] = "NONE", t[t.YELLOW = 1] = "YELLOW", t[t.GRAY = 2] = "GRAY", t
        }(y || {});
    const {
        ccclass: B,
        property: k
    } = l;
    t("HumanboyBetCoin", (p = k(o), d = k(n), m = k(s), _ = k({
        tooltip: "数字横向间隔"
    }), B(((S = class extends h {
        constructor(...t) {
            super(...t), i(this, "btn", u, this), i(this, "txtBetNode", N, this), i(this, "imgMask", x, this), i(this, "txtOffset", C, this), this._shape = f.SHAPE_COIN, this._txtColor = y.NONE, this._txtNum = 0
        }
        onLoad() {}
        start() {}
        setShape(t) {
            if (this._shape === t) return;
            this._shape = t;
            let e = c.resMgr.getSpriteAtlas("zh_CN/game/humanboyPlist/humanboy");
            switch (this._shape) {
                case f.SHAPE_COIN:
                    this.btn.node.getComponent(s).spriteFrame = e.getSpriteFrame("bet_coin_clicked"), this.btn.normalSprite = e.getSpriteFrame("bet_coin_clicked"), this.btn.pressedSprite = e.getSpriteFrame("bet_coin_clicked"), this.btn.hoverSprite = e.getSpriteFrame("bet_coin_clicked"), this.btn.disabledSprite = e.getSpriteFrame("bet_coin_disabled_big"), this.imgMask.spriteFrame = e.getSpriteFrame("bet_coin_disable_mask_big");
                    break;
                case f.SHAPE_BLOCK:
                    this.btn.node.getComponent(s).spriteFrame = e.getSpriteFrame("bet_block_clicked"), this.btn.normalSprite = e.getSpriteFrame("bet_block_clicked"), this.btn.pressedSprite = e.getSpriteFrame("bet_block_clicked"), this.btn.hoverSprite = e.getSpriteFrame("bet_block_clicked"), this.btn.disabledSprite = e.getSpriteFrame("bet_block_disabled_big"), this.imgMask.spriteFrame = e.getSpriteFrame("bet_block_disable_mask_big")
            }
        }
        getShape() {
            return this._shape
        }
        setTxtNum(t, e = y.YELLOW) {
            if (t === this._txtNum) return;
            this._txtNum = t, this._txtColor = e;
            let i = c.String(this._txtNum),
                r = "";
            switch (this._txtColor) {
                case y.NONE:
                case y.YELLOW:
                    r = "yellow_fnt_";
                    break;
                case y.GRAY:
                    r = "gray_fnt_"
            }
            if (this.txtBetNode.children.length > i.length) {
                let t = [];
                for (let e = i.length; e < this.txtBetNode.children.length; ++e) t.push(this.txtBetNode.children[e]);
                for (let e = 0; e < t.length; ++e) t[e].removeFromParent(), c.tools.destroyNode(t[e])
            }
            let o = 0,
                l = c.resMgr.getSpriteAtlas("zh_CN/game/humanboyPlist/humanboy");
            for (let t = 0; t < i.length; ++t) {
                let e = null;
                this.txtBetNode.children.length > t ? e = this.txtBetNode.children[t].getComponent(s) : (e = (new n).addComponent(s), this.txtBetNode.addChild(e.node)), e.spriteFrame = l.getSpriteFrame(r + i.charAt(t)), e.type = s.Type.SIMPLE, e.sizeMode = s.SizeMode.RAW, e.trim = !1, e.node.getComponent(a).setAnchorPoint(.5, .5), e.node.setPosition(0, 0), o += e.node.getComponent(a).width
            }
            let h = (this.txtBetNode.getComponent(a).width - (o + this.txtOffset * (i.length - 1))) / 2 - this.txtBetNode.getComponent(a).anchorX * this.txtBetNode.getComponent(a).width;
            h += this.txtBetNode.children[0].getComponent(a).width * this.txtBetNode.children[0].getComponent(a).anchorX;
            for (let t = 0; t < this.txtBetNode.children.length; ++t) {
                let e = this.txtBetNode.children[t];
                e.setPosition(h, 0), h += this.txtOffset, h += e.getComponent(a).width
            }
        }
        getTxtNum() {
            return this._txtNum
        }
        setTxtColor(t) {
            if (this._txtColor === t) return;
            this._txtColor = t;
            let e = "";
            switch (this._txtColor) {
                case y.NONE:
                case y.YELLOW:
                    e = "yellow_fnt_";
                    break;
                case y.GRAY:
                    e = "gray_fnt_"
            }
            let i = c.String(this._txtNum),
                r = c.resMgr.getSpriteAtlas("zh_CN/game/humanboyPlist/humanboy");
            for (let t = 0; t < this.txtBetNode.children.length; ++t) {
                this.txtBetNode.children[t].getComponent(s).spriteFrame = r.getSpriteFrame(e + i.charAt(t))
            }
        }
        getTxtColor() {
            return this._txtColor
        }
    }).eHumanboyBetCoinShape = f, S.eHumanboyBetCoinTxtColor = y, u = e((g = S).prototype, "btn", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(g.prototype, "txtBetNode", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(g.prototype, "imgMask", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(g.prototype, "txtOffset", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), b = g)) || b));
    r._RF.pop()
}