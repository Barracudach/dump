import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as P from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as p from "./ImpokerHall.js";
import * as u from "./AgentPageOne.js";
import * as d from "./AgentPageFour.js";
import * as f from "./AgentPageTwo.js";
import * as C from "./NestableScrollView_Outer_ts.js";
import * as _ from "./agent.js";
import * as b from "./NodePage.js";
import * as m from "./AgentPlayerDetailPage.js";
import * as S from "./QRCodePage.js";
import * as A from "./AndroidBackButton.js";
import * as y from "./CommonTools.js";

function main() {
    var w, k, D, T, B, R, I, N, H, V, v, F, O, E;
    n._RF.push({}, "5f564RkkahFaZ/cwG/q1buC", "AgentPrefabPage", void 0);
    const {
        ccclass: L,
        property: q
    } = s;
    e("AgentPrefabPage", (w = q([i]), k = q(i), D = q(C), T = q(r), B = q(r), R = q(r), L((H = t((N = class extends o {
        constructor(...e) {
            super(...e), a(this, "pageHeaders", H, this), a(this, "underline", V, this), a(this, "pageView", v, this), a(this, "secondAgentPrefab", F, this), a(this, "playerDetailPrefab", O, this), a(this, "qrCodePrefab", E, this), this._hallScript = null, this.agentPages = [], this.agentPagesScript = [], this.store = void 0, this._secondAgentPage = null, this._playerDetailPage = null, this._qrCodePage = null, this._updateTimer = 0
        }
        onLoad() {
            this._hallScript = y.instance.getParentScene(g, this.node).getComponentInChildren(p), this.agentPages = this.pageView.content.children, this.agentPagesScript.push(this.agentPages[0].getComponent(u)), this.agentPagesScript.push(this.agentPages[1].getComponent(f)), this.agentPagesScript.push(this.agentPages[2].getComponent(f)), this.agentPagesScript.push(this.agentPages[3].getComponent(d)), this.store = new _
        }
        start() {
            this.pageView.node.on("page-turning", (() => {
                this.onChangedPage(this.pageView.getCurrentPageIndex())
            }))
        }
        update(e) {
            this._updateTimer += e, this._updateTimer > .2 && b.hidePagesOutsidePageView(this.pageView), b.updateUnderlinePos(this.underline, this.pageView, this.pageHeaders.length)
        }
        setPage() {
            return l.isNative && l.os === l.OS.ANDROID && A.getInstance().addBackFunction("AgentPrefabPage", this.onBackClicked.bind(this)), this.pageView.scrollToPage(0, .001), Promise.all([this.agentPagesScript[0].setPage(), this.agentPagesScript[1].setPage(this.agentPagesScript[1].AGENT_TUPLE_REF.MEMEBER_LIST), this.agentPagesScript[2].setPage(this.agentPagesScript[2].AGENT_TUPLE_REF.DOWNLINE_LIST), this.agentPagesScript[3].setPage()])
        }
        resetPage() {
            for (let e of this.agentPagesScript) e.resetPage()
        }
        onPageOneClicked() {
            this.onChangedPage(0)
        }
        onPageTwoClicked() {
            this.onChangedPage(1)
        }
        onPageThreeClicked() {
            this.onChangedPage(2)
        }
        onPageFourClicked() {
            this.onChangedPage(3)
        }
        onChangedPage(e) {
            for (let t = 0; t < this.pageHeaders.length; t++) this.pageHeaders[t].children[0].getComponent(c).color = t === e ? new h(h.WHITE) : (new h).fromHEX("#9B9B9B");
            this.pageView.getCurrentPageIndex() !== e && this.pageView.scrollToPage(e, .3), b.updateContentWidget(this.pageView.content, e)
        }
        createPage(e, t, a, n) {
            if (e) return e;
            {
                let e = P(t);
                return e.parent = a, n instanceof Function && n(e), e
            }
        }
        createSecondAgentPage() {
            return this._secondAgentPage = this.createPage(this._secondAgentPage, this.secondAgentPrefab, this._hallScript.layers[0], (e => {
                e.getComponent(f).agentPage = this.node
            }))
        }
        createPlayerDetailPage() {
            return this._playerDetailPage = this.createPage(this._playerDetailPage, this.playerDetailPrefab, this._hallScript.layers[1], (e => {
                e.getComponent(m).resetInfo()
            }))
        }
        createQRCodePage() {
            return this._qrCodePage = this.createPage(this._qrCodePage, this.qrCodePrefab, this._hallScript.layers[0], (e => {
                e.getComponent(S).setPage(this.node)
            }))
        }
        getSecondAgentPage() {
            return this._secondAgentPage
        }
        getPlayerDetailPage() {
            return this._playerDetailPage
        }
        callQRCodePage() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this.createQRCodePage(), l.isNative && l.os === l.OS.ANDROID && A.getInstance().addBackFunction("QRCodePage", this._qrCodePage.getComponent(S).onBackClicked.bind(this._qrCodePage.getComponent(S))), this._hallScript.movePageFromRight(this._qrCodePage, this.node, !0, !1, (() => {
                setTimeout((() => {
                    this._hallScript.controlHallBlockLayer(!1, this.name)
                }), 100 * cc_mtt.vv.DataManager.pageActionSpeed)
            }))
        }
        onBackClicked() {
            l.isNative && l.os === l.OS.ANDROID && A.getInstance().removeBackFunction("AgentPrefabPage"), this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node), setTimeout((() => {
                this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * this._hallScript.pageActionSpeed)
        }
    }).prototype, "pageHeaders", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), V = t(N.prototype, "underline", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(N.prototype, "pageView", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = t(N.prototype, "secondAgentPrefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(N.prototype, "playerDetailPrefab", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(N.prototype, "qrCodePrefab", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = N)) || I));
    n._RF.pop()
}