import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./ImpokerHall.js";
import * as g from "./GiftRecordTuple.js";
import * as f from "./worldWebsocket.js";
import * as m from "./NodePage.js";
import * as P from "./mttconfig.js";
import * as _ from "./AndroidBackButton.js";
import * as b from "./CommonTools.js";
import * as L from "./NodeTools.js";

function main() {
    var I, y, w, v, G, T, k, C;
    s._RF.push({}, "5c2e9IbzotLjL5un3UGhPzL", "GiftRecordPrefab", void 0);
    const {
        ccclass: N,
        property: S
    } = a;
    t("GiftRecordPrefab", (I = S(o), y = S(n), w = S(l), N((T = e((G = class extends r {
        constructor(...t) {
            super(...t), i(this, "scrollView", T, this), i(this, "tuplePrefab", k, this), i(this, "emptyMessage", C, this), this.returnPage = null, this._hallScript = void 0, this.dataList = [], this._tupleHeight = 0, this.spawnNum = 15, this.spacing = 3, this.tuples = [], this.updateTimer = 0, this.updateInterval = .2, this.bufferZone = 0, this.lastContentPosY = 0, this.toolInfoList = [], this._imgGetTime = 0
        }
        onLoad() {
            this._hallScript = b.instance.getParentScene(h, this.node).getComponentInChildren(u), this._tupleHeight = this.tuplePrefab.data.height
        }
        update(t) {
            this.updateTimer += t, this.updateTimer > this.updateInterval && (this.updateTimer = 0, this.lastContentPosY = this.updateTuplesPosition(this.dataList, this.tuples, this.scrollView, this.lastContentPosY))
        }
        updateTuplesPosition(t, e, i, s) {
            let o = i.content.position.y < s,
                n = (this._tupleHeight + this.spacing) * e.length;
            for (let s = 0; s < e.length; s++) {
                let l = m.getPositionInView(e[s], i.node);
                if (o) {
                    if (l.y < -this.bufferZone && e[s].position.y + n < 0) {
                        e[s].setPosition(e[s].position.x, e[s].position.y + n);
                        let i = e[s].getComponent(g),
                            o = i._tupleId - e.length;
                        i.setInfo(t[o], o, this._imgGetTime)
                    }
                } else if (l.y > this.bufferZone && e[s].position.y - n > -L.getNodeHeight(i.content)) {
                    e[s].setPosition(e[s].position.x, e[s].position.y - n);
                    let i = e[s].getComponent(g),
                        o = i._tupleId + e.length;
                    i.setInfo(t[o], o, this._imgGetTime)
                }
            }
            return i.content.position.y
        }
        addList(t) {
            let e;
            L.setNodeHeight(this.scrollView.content, (this._tupleHeight + this.spacing) * t.length - this.spacing), this.scrollView.content.setPosition(this.scrollView.content.position.x, L.getNodeHeight(this.scrollView.content.parent) / 2), this.bufferZone = .5 * L.getNodeHeight(this.scrollView.node) + 1.5 * this._tupleHeight, this.emptyMessage.active = t.length <= 0;
            for (let i = 0; i < t.length && i < this.spawnNum; i++) e = c(this.tuplePrefab), e.parent = this.scrollView.content, e.setPosition(0, -this._tupleHeight * (.5 + i) - this.spacing * i), e.getComponent(g).setInfo(t[i], i, this._imgGetTime), this.tuples.push(e)
        }
        removeList() {
            this.dataList = [], this.tuples = [], this.scrollView.content.destroyAllChildren()
        }
        setPage(t, e) {
            if (this.returnPage = t, this._imgGetTime = e, p.isNative && p.os === p.OS.ANDROID && _.getInstance().addBackFunction("GiftRecordPrefab", this.onBackClicked.bind(this)), f.checkNetwork("requestUserGift")) return this.dataList = [], void this.addList(this.dataList);
            this._hallScript.showLoading();
            let i = {
                FromUserId: cc_mtt.vv.DataManager.userId
            };
            cc_mtt.vv.DataManager.worldNetwork.requestListUserGifts(i, (t => {
                if (d(this) && this.node.active)
                    if (t.ErrorCode) {
                        let e = "ERROR_CODE_PKW." + t.ErrorCode;
                        this._hallScript.hidLoading((() => {
                            this._hallScript.callPopUpBox(e, (() => {
                                this.dataList = [], this.addList(this.dataList)
                            }))
                        }))
                    } else t.Gifts = t.Gifts.sort(((t, e) => e.Gift.Id - t.Gift.Id)), this.dataList = t.Gifts, this.addList(this.dataList), this._hallScript.hidLoading()
            }))
        }
        resetPage() {
            this.removeList()
        }
        releaseImages() {
            this.releaseToolIcons()
        }
        releaseToolIcons() {
            for (let t of this.dataList) m.releaseImage(P.avatarHost + t.GiftToolImgUrl)
        }
        onBackClicked() {
            p.isNative && p.os === p.OS.ANDROID && _.getInstance().removeBackFunction("GiftRecordPrefab"), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node, this.returnPage, (() => {
                setTimeout((() => {
                    this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
                }), 100 * this._hallScript.pageActionSpeed)
            }))
        }
    }).prototype, "scrollView", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(G.prototype, "tuplePrefab", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = e(G.prototype, "emptyMessage", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = G)) || v));
    s._RF.pop()
}