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
import * as a from "./cc.js";
import * as f from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as T from "./ImpokerHall.js";
import * as P from "./MttBlindPotTableTuple.js";
import * as S from "./AndroidBackButton.js";
import * as _ from "./Translator.js";
import * as w from "./CommonTools.js";

function main() {
    var k, B, I, v, y, L, C, V, A, H, D, N, M, z;
    s._RF.push({}, "2c977cJIGBL54kI9pCvUCHV", "MttBlindPotTable", void 0);
    const {
        ccclass: R,
        property: U
    } = a;
    t("MttBlindPotTable", (k = U(n), B = U(l), I = U(o), v = U([r]), y = U(h), L = U(o), R((A = e((V = class extends p {
        constructor(...t) {
            super(...t), i(this, "tableTuplePrefab", A, this), i(this, "backButton", H, this), i(this, "tableTitle", D, this), i(this, "tableAttributes", N, this), i(this, "scrollView", M, this), i(this, "remark", z, this), this._hallScript = null, this._actionSpeed = .2, this._tupleHeight = 0, this.blindPotList = [], this.levelStopSignUp = 0, this.currentLevel = 0, this.spawnNum = 20, this.spacing = 0, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.parentNode = null, this._isShortDesk = !1, this._blindHand = 0
        }
        onLoad() {
            this._hallScript = w.instance.getParentScene(u, this.node).getComponentInChildren(T), this._tupleHeight = this.tableTuplePrefab.data.height
        }
        update(t) {
            if (!(this.blindPotList.length < 1) && (this.updateTimer += t, this.updateTimer > this.updateInterval)) {
                this.updateTimer = 0;
                let t = this.scrollView.content.position.y < this.lastContentPosY,
                    e = (this._tupleHeight + this.spacing) * this.tuples.length;
                for (let i = 0; i < this.tuples.length; i++) {
                    let s = this.getPositionInView(this.tuples[i]);
                    if (t) {
                        if (s.y < -this.bufferZone && this.tuples[i].position.y + e < 0) {
                            this.tuples[i].position = new c(this.tuples[i].position.x, this.tuples[i].position.y + e, this.tuples[i].position.z);
                            let t = this.tuples[i].getComponent(P),
                                s = t._tupleId - this.tuples.length;
                            t.setInfo(this.blindPotList[s], s, this.currentLevel, this.levelStopSignUp, this._isShortDesk)
                        }
                    } else if (s.y > this.bufferZone && this.tuples[i].position.y - e > -this.scrollView.content.getComponent(b).height) {
                        this.tuples[i].position = new c(this.tuples[i].position.x, this.tuples[i].position.y - e, this.tuples[i].position.z);
                        let t = this.tuples[i].getComponent(P),
                            s = t._tupleId + this.tuples.length;
                        t.setInfo(this.blindPotList[s], s, this.currentLevel, this.levelStopSignUp, this._isShortDesk)
                    }
                }
                this.lastContentPosY = this.scrollView.content.position.y
            }
        }
        setInfo(t, e, i) {
            let s;
            this.blindPotList = t, this.levelStopSignUp = i, this.currentLevel = e, this.remark.string = d.formatStr(_("MTT_HALL.TAB.HALL.MTT_BLIND_LIST.NOTE_STOP_SIGN_UP"), i), this.scrollView.node.getComponent(g).updateAlignment(), this.scrollView.content.getComponent(b).height = Math.max(0, (this._tupleHeight + this.spacing) * this.blindPotList.length - this.spacing), this.scrollView.content.position = new c(this.scrollView.content.position.x, this.scrollView.content.parent.getComponent(b).height / 2, this.scrollView.content.position.z), this.bufferZone = .5 * this.scrollView.node.getComponent(b).height + 1.5 * this._tupleHeight;
            for (let e = 0; e < this.spawnNum && e < t.length; e++) {
                s = f(this.tableTuplePrefab), s.parent = this.scrollView.content, s.setPosition(0, -this._tupleHeight * (.5 + e) - this.spacing * e), s.getComponent(P).setInfo(t[e], e, this.currentLevel, i, this._isShortDesk), this.tuples.push(s)
            }
        }
        setPage(t, e, i, s, n, l = !1) {
            m.isNative && m.os === m.OS.ANDROID && S.getInstance().addBackFunction("MttBlindPotTable", this.onBackClicked.bind(this)), this._blindHand = n, this._isShortDesk = l, this.selectTableAttributes(t), this.setInfo(e, i, s), this.scrollView.scrollToTop(.01)
        }
        resetTable() {
            this.tuples = [], this.scrollView.content.destroyAllChildren()
        }
        resetPage() {
            this.resetTable()
        }
        selectTableAttributes(t) {
            for (let e = 0; e < this.tableAttributes.length; e++) this.tableAttributes[e].active = e == t
        }
        getPositionInView(t) {
            let e = t.parent.getComponent(b).convertToWorldSpaceAR(t.position);
            return this.scrollView.node.getComponent(b).convertToNodeSpaceAR(e)
        }
        onBackClicked() {
            m.isNative && m.os === m.OS.ANDROID && S.getInstance().removeBackFunction("MttBlindPotTable"), this._hallScript.controlHallBlockLayer(!0, this.name), this.hide()
        }
        hide() {
            this._hallScript.movePageToRight(this.node, this.parentNode), setTimeout((() => {
                this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * this._hallScript.pageActionSpeed)
        }
    }).prototype, "tableTuplePrefab", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(V.prototype, "backButton", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(V.prototype, "tableTitle", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(V.prototype, "tableAttributes", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), M = e(V.prototype, "scrollView", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(V.prototype, "remark", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = V)) || C));
    s._RF.pop()
}