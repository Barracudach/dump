import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as b from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./MttHallDetailFeederComp.js";
import * as d from "./DesignSystemRegularButton.js";
import * as v from "./DesignSystemButtonBase.js";
import * as D from "./CollapsibleLabel.js";
import * as E from "./MTTDetailInfoItemComp.js";
import * as T from "./Translator.js";
import * as w from "./AutoResizeLabel.js";
import * as C from "./cv.js";
import * as L from "./MttItemRenderHelper.js";

function main() {
    var N, P, y, I, z, W, B, S, x, R, M, _, k, V, F, A, H, j, G, O, U, J, q, K, Q, X, Y, Z, $, tt, et, it, nt, at, rt;
    n._RF.push({}, "4fb21G5db5NmJvibBBtr21z", "MttDetailWindowLeftComp", void 0);
    const {
        ccclass: lt,
        property: ot
    } = h;
    t("MttDetailWindowLeftComp", (N = lt("MttDetailWindowLeftComp"), P = ot(a), y = ot(r), I = ot(f), z = ot(f), W = ot(l), B = ot(a), S = ot([a]), x = ot([a]), R = ot(l), M = ot(a), _ = ot(o), k = ot(s), V = ot(o), F = ot(u), A = ot(Number), H = ot(Number), N((O = e((G = class extends g {
        constructor(...t) {
            super(...t), this.mvcView = null, i(this, "panelDetailDescription", O, this), i(this, "txtDetail", U, this), i(this, "multiflightFeederComp", J, this), i(this, "satelliteFeederComp", q, this), i(this, "infoItemPrefab", K, this), i(this, "infoContentNode", Q, this), i(this, "tabs", X, this), i(this, "tabPages", Y, this), i(this, "eventListPagePrefab", Z, this), i(this, "targetEventNode", $, this), i(this, "targetEventName", tt, this), i(this, "targetEventsBtn", et, this), i(this, "targetEventsBtnTxt", it, this), i(this, "targetEventNameWidget", nt, this), i(this, "numWidgetRightDisable", at, this), i(this, "numWidgetRightEnable", rt, this), this.itemCompList = {}, this.currentTabPageIndex = 0, this._eventListPage = null, this.model = void 0
        }
        onLoad() {
            this.targetEventName.node.on(a.EventType.TOUCH_END, this.onClickTargetEventName.bind(this))
        }
        onClickTargetEventName() {
            var t, e;
            if (null == (t = this.model) || null == (t = t.detailData) || !t.TargetID) return;
            let i = C.lobbyService.getMttItemsByFilter(null),
                n = null == i ? void 0 : i.find((t => {
                    var e, i;
                    return (null == (e = t.Detail) ? void 0 : e.Id) == (null == (i = this.model.detailData) ? void 0 : i.TargetID)
                }));
            this.mvcView.onClickTargetEventName(null == (e = this.model.detailData) ? void 0 : e.TargetID, n)
        }
        getEventListPage() {
            var t, e;
            this._eventListPage || (this._eventListPage = c(this.eventListPagePrefab), this._eventListPage.parent = null == (t = (e = this.mvcView).onGetMttPopupParent) ? void 0 : t.call(e));
            return this._eventListPage
        }
        getTabSatellite() {
            return this.tabs ? this.tabs[1] : null
        }
        updateViewSatellite(t) {}
        showTargetEvent(t) {
            this.targetEventNode.active = t
        }
        setTargetEventName(t) {
            var e;
            let i = null == (e = this.targetEventName) ? void 0 : e.getComponent(w);
            b(i) && i.getOriginString() != t && i.setString(t, !0)
        }
        showTargetEventsBtn(t) {
            this.targetEventsBtn.node.active = t, b(this.targetEventNameWidget) && (this.targetEventNameWidget.right = t ? this.numWidgetRightEnable : this.numWidgetRightDisable, this.targetEventNameWidget.updateAlignment())
        }
        setTargetEventsCount(t) {
            this.showTargetEventsBtn(t > 1), this.targetEventsBtnTxt.string = m.formatStr(T("MTT_HALL.VIEW_ALL"), t)
        }
        updateViewInfo(t) {
            if (null == t || null == t.data) return;
            this.model = t, this.setRoomDetailDescription(t.data.infoData.fullDescription);
            let e = t.data.infoData.detailInfo;
            L.rendertMttInfoItem(e, t.detailData, (t => {
                if (!b(this.itemCompList[t])) {
                    const e = c(this.infoItemPrefab);
                    e.parent = this.infoContentNode;
                    const i = e.getComponent(E);
                    this.itemCompList[t] = i
                }
            }).bind(this), ((t, i) => {
                this.itemCompList[t].setInfo(t, i, e)
            }).bind(this)), this.showTargetEvent(e.targetId > 0), this.setTargetEventName(e.targetEventName), this.setTargetEventsCount(e.targetEvents.length)
        }
        setRoomDetailDescription(t) {
            "" == t ? this.panelDetailDescription.active = !1 : (this.panelDetailDescription.active = !0, this.txtDetail.getComponent(D).setText(t, !0), this.txtDetail.maxWidth = this.txtDetail.node.parent.getComponent(p).width - 25)
        }
        switchTab(t) {
            this.currentTabPageIndex = t;
            for (let e = 0; e < this.tabPages.length; e++) this.tabPages[e].active = e == t;
            for (let t = 0; t < this.tabs.length; t++)
                if (t === Number(this.currentTabPageIndex)) {
                    let e = this.tabs[t].getComponent(d);
                    e.btnState = v.pressed, e.isChecked = !0
                } else {
                    let e = this.tabs[t].getComponent(d);
                    e.btnState = v.normal, e.isChecked = !1
                }
        }
        onClickTabInfo() {
            var t, e;
            null == (t = (e = this.mvcView).onTabSwitched) || t.call(e, 0)
        }
        onClickTabSatellite() {
            var t, e;
            null == (t = (e = this.mvcView).onTabSwitched) || t.call(e, 1)
        }
        onClickShowAllTargetEvent() {
            var t, e;
            null == (t = (e = this.mvcView).onClickShowAllTargetEvent) || t.call(e)
        }
    }).prototype, "panelDetailDescription", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(G.prototype, "txtDetail", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(G.prototype, "multiflightFeederComp", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(G.prototype, "satelliteFeederComp", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(G.prototype, "infoItemPrefab", [W], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(G.prototype, "infoContentNode", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(G.prototype, "tabs", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Y = e(G.prototype, "tabPages", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), Z = e(G.prototype, "eventListPagePrefab", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(G.prototype, "targetEventNode", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(G.prototype, "targetEventName", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(G.prototype, "targetEventsBtn", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(G.prototype, "targetEventsBtnTxt", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(G.prototype, "targetEventNameWidget", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(G.prototype, "numWidgetRightDisable", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 24
        }
    }), rt = e(G.prototype, "numWidgetRightEnable", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 250
        }
    }), j = G)) || j));
    n._RF.pop()
}