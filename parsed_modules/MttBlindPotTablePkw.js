import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as h from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as r from "./MttBlindPotTable.js";
import * as u from "./MttBlindPotTuplePkw.js";
import * as p from "./Translator.js";
import * as a from "./NodeTools.js";

function main() {
    var c, g, d, L;
    s._RF.push({}, "1bca5EpPM9CB4c/sz72q1lk", "MttBlindPotTablePkw", void 0);
    const {
        ccclass: T,
        property: P
    } = n;
    t("MttBlindPotTablePkw", (c = P([l]), T((L = e((d = class extends r {
        constructor(...t) {
            super(...t), i(this, "attrSet1Labels", L, this), this.levelDuration = 0
        }
        update(t) {
            this.blindPotList.length < 1 || (this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.updateTuplesPosition()))
        }
        selectTableAttributes(t) {
            t || (this.attrSet1Labels[1].string = p(this._isShortDesk ? "MTT_HALL.TAB.HALL.MTT_BLIND_LIST.COLUMN.BUTTON" : "MTT_HALL.TAB.HALL.MTT_BLIND_LIST.COLUMN.BLIND"), this.attrSet1Labels[3].string = p(this._blindHand > 0 ? "TOURNAMENT_DETAIL.TAB.BLIND_LEVEL.HEADER.HANDS" : "MTT_HALL.TAB.HALL.MTT_BLIND_LIST.COLUMN.LEVEL_DURATION"));
            for (let e = 0; e < this.tableAttributes.length; e++) this.tableAttributes[e].active = e == t
        }
        setInfo(t, e, i) {
            this.blindPotList = t, this.levelStopSignUp = i, this.currentLevel = e, this.scrollView.node.getComponent(o).updateAlignment(), this.setupScrollView(), this.updateList()
        }
        updateList() {
            let t;
            for (let e = 0; e < this.blindPotList.length; e++) {
                t = h(this.tableTuplePrefab), t.parent = this.scrollView.content, this.setTuplePosition(t, e), t.getComponent(u).setInfo(this.blindPotList[e], e, this.currentLevel, this.levelStopSignUp, this._isShortDesk, this._blindHand, this.levelDuration), this.tuples.push(t)
            }
        }
        setTuplePosition(t, e) {
            t.setPosition(0, -this._tupleHeight * (.5 + e) - this.spacing * e)
        }
        updateTuplesPosition() {
            let t = this.scrollView.content.getPosition().y < this.lastContentPosY,
                e = (this._tupleHeight + this.spacing) * this.tuples.length;
            for (let i = 0; i < this.tuples.length; i++) {
                let s = this.getPositionInView(this.tuples[i]);
                if (t) {
                    if (s.y < -this.bufferZone && this.tuples[i].getPosition().y + e < 0) {
                        let t = this.tuples[i].getPosition();
                        t.y = this.tuples[i].getPosition().y + e, this.tuples[i].setPosition(t);
                        let s = this.tuples[i].getComponent(u),
                            l = s._tupleId - this.tuples.length;
                        s.setInfo(this.blindPotList[l], l, this.currentLevel, this.levelStopSignUp, this._isShortDesk, this._blindHand, this.levelDuration)
                    }
                } else if (s.y > this.bufferZone && this.tuples[i].getPosition().y - e > -a.getNodeHeight(this.scrollView.content)) {
                    let t = this.tuples[i].getPosition();
                    t.y = this.tuples[i].getPosition().y - e, this.tuples[i].setPosition(t);
                    let s = this.tuples[i].getComponent(u),
                        l = s._tupleId + this.tuples.length;
                    s.setInfo(this.blindPotList[l], l, this.currentLevel, this.levelStopSignUp, this._isShortDesk, this._blindHand, this.levelDuration)
                }
            }
            this.lastContentPosY = this.scrollView.content.getPosition().y
        }
        setupScrollView() {
            a.setNodeHeight(this.scrollView.content, Math.max(0, (this._tupleHeight + this.spacing) * this.blindPotList.length - this.spacing));
            let t = this.scrollView.content.getPosition();
            t.y = a.getNodeHeight(this.scrollView.content.parent) / 2, this.scrollView.content.setPosition(t), this.bufferZone = .5 * a.getNodeHeight(this.scrollView.node) + 1.5 * this._tupleHeight
        }
    }).prototype, "attrSet1Labels", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), g = d)) || g));
    s._RF.pop()
}