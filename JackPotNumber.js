import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";

function main() {
    var p, l, g, c, P, d, b, L;
    e._RF.push({}, "854d5GVEGBFnbsoRaIvRYEk", "JackPotNumber", void 0);
    const {
        ccclass: N,
        property: f
    } = h;
    i("JackPotNumber", (p = f(o), l = f(o), g = f(o), N((d = t((P = class extends n {
        constructor(...i) {
            super(...i), s(this, "root", d, this), s(this, "panel", b, this), s(this, "panel_new", L, this), this._imgPos = [], this._imgList = [], this._posY = [], this._objNum = 0, this._curShowNum = 0, this._runTime = 0, this._isRuning = !1
        }
        onLoad() {}
        start() {}
        init(i) {
            if (this.panel.active = !i, this.panel_new.active = i, i) {
                for (let i = 0; i < 10; i++) {
                    let t = this.panel_new.getChildByName(`num${i}`).getComponent(m);
                    t.node.name = i.toString(), this._imgList.push(t), this._posY[i] = 110 * -i
                }
                this._imgPos.push(r(0, 0)), this._imgPos.push(r(0, -33)), this._imgPos.push(r(0, -66)), this._imgPos.push(r(0, -99)), this._imgPos.push(r(0, -132)), this._imgPos.push(r(0, -165)), this._imgPos.push(r(0, -198)), this._imgPos.push(r(0, -231)), this._imgPos.push(r(0, -264)), this._imgPos.push(r(0, 33))
            } else {
                for (let i = 0; i < 10; i++) {
                    let t = this.panel.getChildByName(`img${i}`).getComponent(u);
                    t.node.name = i.toString(), this._imgList.push(t), this._posY[i] = 110 * -i
                }
                this._imgPos.push(r(0, 0)), this._imgPos.push(r(0, -110)), this._imgPos.push(r(0, -220)), this._imgPos.push(r(0, -330)), this._imgPos.push(r(0, -440)), this._imgPos.push(r(0, -550)), this._imgPos.push(r(0, -660)), this._imgPos.push(r(0, -770)), this._imgPos.push(r(0, -880)), this._imgPos.push(r(0, 110))
            }
        }
        hideBg() {
            this.root.active = !1
        }
        showNum(i, t = 1) {
            this._objNum = i, this._isRuning || this._objNum !== this._curShowNum && (this._runTime = t, this.run())
        }
        run() {
            for (let i = 0; i < 10; i++) {
                9 === parseInt(this._imgList[i].node.name) && (this._imgList[i].node.opacity = 0), this._imgList[i].node.stopAllActions();
                let t = parseInt(this._imgList[i].node.name) - 1 == -1 ? 9 : parseInt(this._imgList[i].node.name) - 1,
                    s = 0;
                s = 1 != this._runTime ? this._runTime : .1 * this._objNum, this._imgList[i].node.name = t.toString(), 9 === i ? _(this._imgList[i].node).to(s, {
                    position: this._imgPos[t]
                }).call((() => {
                    this.moveCallBack(this._imgList[i])
                })).start() : this._imgList[i].node.runAction(moveTo), this._isRuning = !0
            }
        }
        moveCallBack(i) {
            for (let i = 0; i < 10; i++) 8 === parseInt(this._imgList[i].node.name) && (this._imgList[i].node.opacity = 255);
            this._curShowNum += 1, this._curShowNum >= 10 && (this._curShowNum = 0), this._curShowNum != this._objNum ? this.run() : this._isRuning = !1
        }
        setGameStyle(i = .4) {
            this.panel.setScale(a(i, i, i)), this.root.setScale(a(i, i, i))
        }
        setNumberImg(i, t) {
            if (i < 0 || i >= this._imgList.length) return;
            this._imgList[i].spriteFrame = t
        }
    }).prototype, "root", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = t(P.prototype, "panel", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(P.prototype, "panel_new", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = P)) || c));
    e._RF.pop()
}