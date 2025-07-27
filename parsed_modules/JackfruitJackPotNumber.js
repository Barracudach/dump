import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./cc.js";

function main() {
    var o, c, n, h;
    e._RF.push({}, "9bbb3DWaG5B3pyHLDyzin3p", "JackfruitJackPotNumber", void 0);
    const {
        ccclass: u,
        property: r
    } = cc._decorator;
    i("JackPotNumber", (o = r(cc.Node), u((n = class extends cc.Component {
        constructor(...i) {
            super(...i), t(this, "panel_new", h, this), this._imgPos = [], this._imgList = [], this._posY = [], this._objNum = 0, this._curShowNum = 0, this._runTime = 0, this._isRuning = !1
        }
        onLoad() {}
        start() {}
        init() {
            for (let i = 0; i < 10; i++) {
                let t = this.panel_new.getChildByName(`num${i}`).getComponent(cc.Label);
                t.node.name = i.toString(), this._imgList.push(t), this._posY[i] = 110 * -i
            }
            this._imgPos.push(cc.v2(0, 0)), this._imgPos.push(cc.v2(0, -33)), this._imgPos.push(cc.v2(0, -66)), this._imgPos.push(cc.v2(0, -99)), this._imgPos.push(cc.v2(0, -132)), this._imgPos.push(cc.v2(0, -165)), this._imgPos.push(cc.v2(0, -198)), this._imgPos.push(cc.v2(0, -231)), this._imgPos.push(cc.v2(0, -264)), this._imgPos.push(cc.v2(0, 33))
        }
        showNum(i, t = 1) {
            this._objNum = i, this._isRuning || this._objNum !== this._curShowNum && (this._runTime = t, this.run())
        }
        run() {
            for (let i = 0; i < 10; i++) {
                this._imgList[i].node.stopAllActions();
                let t = parseInt(this._imgList[i].node.name) - 1 == -1 ? 9 : parseInt(this._imgList[i].node.name) - 1,
                    s = 0;
                s = 1 != this._runTime ? this._runTime : .1 * this._objNum;
                let e = cc.moveTo(s, this._imgPos[t]);
                if (this._imgList[i].node.name = t.toString(), 9 === i) {
                    let t = cc.callFunc(this.moveCallBack, this, this._imgList[i]);
                    this._imgList[i].node.runAction(cc.sequence(e, t))
                } else this._imgList[i].node.runAction(e);
                this._isRuning = !0
            }
        }
        moveCallBack(i) {
            this._curShowNum += 1, this._curShowNum >= 10 && (this._curShowNum = 0), this._curShowNum != this._objNum ? this.run() : this._isRuning = !1
        }
        setNumberImg(i, t) {
            if (i < 0 || i >= this._imgList.length) return;
            this._imgList[i].spriteFrame = t
        }
    }, h = s(n.prototype, "panel_new", [o], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), c = n)) || c));
    e._RF.pop()
}