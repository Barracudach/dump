import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as d from "./ScrollViewReuse.js";
import * as p from "./cv.js";

function main() {
    var b, f, m, _, w, S, T, y, A, D, I;
    n._RF.push({}, "bcb73NJTrNJt5f4Cg58jI0S", "RecordScrollViewBase", void 0);
    const {
        ccclass: v,
        property: V
    } = a;
    t("default", (b = V(o), f = V(d), m = V(s), _ = V(s), v(((I = class t extends r {
        constructor(...t) {
            super(...t), i(this, "itemPrefab", T, this), i(this, "scrollView", y, this), i(this, "loadingAnim", A, this), i(this, "noDataIcon", D, this), this.requestUrl = void 0, this.requestType = void 0, this.fetchDataOnShow = !0, this.fetchDataOnScrollTop = !0, this.loadingAnimUITransform = null
        }
        static getSinglePrefabInst(e, i) {
            let n = i;
            return n || (n = l.getScene()), t._g_prefabInst || (t._g_prefabInst = h(e)), n.getChildByUuid(t._g_prefabInst.uuid) || c(t._g_prefabInst, !0) || (t._g_prefabInst = h(e)), t._g_prefabInst
        }
        onLoad() {
            this.loadingAnimUITransform = this.loadingAnim.getComponent(u), this.init(), this.noDataIcon.active = !1, this.scrollView.bindPrefab(this.itemPrefab, this.itemPrefab.name), this.scrollView.generateItemPool(), this.scrollView.bindScrollEventTarget(this)
        }
        onEnable() {
            this.scrollView.scrollToFixedPosition(g.ZERO), this.node.on(p.Enum.CustomEvent.ActionShowFinish, this.onShow, this)
        }
        onDisable() {
            this.node.off(p.Enum.CustomEvent.ActionShowFinish, this.onShow, this), p.appConfig.isLandscapeLayout || p.MessageCenter.unregister("hall_bottom_profile_button", this.node)
        }
        onShow() {
            this.fetchDataOnShow && this.requesData()
        }
        requesData() {
            this.showLoading(), p.http.sendRequestV2(this.requestUrl, {}, this.onGetDataSuccessCb.bind(this), this.onGetDataSuccessFailCb.bind(this), this.requestType)
        }
        onGetDataSuccessCb(t) {
            this.hideLoading(), this.onGetDataSuccess(t)
        }
        onGetDataSuccessFailCb(t) {
            this.hideLoading(), this.onGetDataFail(t)
        }
        _onSVEventBounceTop(t) {
            this.fetchDataOnScrollTop && this.requesData()
        }
        setRequestData(t, e = p.http.HttpRequestType.GET) {
            this.requestUrl = t, this.requestType = e
        }
        showLoading() {
            this.loadingAnim.active = !0;
            let t = (1 - this.loadingAnimUITransform.anchorY) * this.loadingAnimUITransform.height,
                e = 0,
                i = this.scrollView.Items,
                n = 0;
            for (let t = 0, o = i.length; t < o; t++)
                if (i[t].active) {
                    let o = i[t].getComponent(u);
                    n = i[t].position.y - o.anchorY * o.height, n < e && (e = n)
                } this.loadingAnim.setPosition(0, e - t);
            let o = this.scrollView.scrollView.content.getComponent(u);
            o.height < Math.abs(e - this.loadingAnimUITransform.height) && (o.height += this.loadingAnimUITransform.height)
        }
        hideLoading() {
            this.loadingAnim && (this.loadingAnim.active = !1)
        }
        onClickBack(t = !0) {
            let e;
            1 == t ? e = p.action.delay_type.INSTANT : (e = p.action.delay_type.NORMAL, t.target && "backBtn" == t.target._name && p.AudioMgr.playButtonSound("back_button.mp3")), p.action.showAction(this.node, p.action.eMoveActionDir.EMAD_TO_RIGHT, p.action.eMoveActionType.EMAT_FADE_OUT, e, ((t, e) => {}), ((t, e) => {
                p.MessageCenter.unregister("hall_bottom_lobby_button", this.node), t.destroy()
            }))
        }
    })._g_prefabInst = null, T = e((S = I).prototype, "itemPrefab", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(S.prototype, "scrollView", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = e(S.prototype, "loadingAnim", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(S.prototype, "noDataIcon", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = S)) || w));
    n._RF.pop()
}