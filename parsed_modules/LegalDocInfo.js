import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as u from "./cv.js";
import * as p from "./ScrollViewReuse.js";
import * as d from "./userDocAcceptanceEntry.js";
import * as h from "./DocViewer.js";

function main() {
    var b, f, g, y, D, w, _, A, I, V;
    n._RF.push({}, "2d719yGEKFPBLo3NDTDAP5m", "LegalDocInfo", void 0);
    const {
        ccclass: m,
        property: E,
        executionOrder: S
    } = r;
    e("LegalDocInfo", (b = S(1), f = E(p), g = E(o), y = E(o), m(D = b(((V = class e extends c {
        constructor(...e) {
            super(...e), i(this, "scrollView", _, this), i(this, "legalDocViewer", A, this), i(this, "itemPrefab", I, this), this.backNode = null
        }
        onLoad() {
            this.scrollView.bindPrefab(this.itemPrefab, "LegalDocItem"), this.scrollView.generateItemPool(), this.scrollView.bindScrollEventTarget(this)
        }
        start() {
            this._requestUserActivityHistory()
        }
        static getSinglePrefabInst(t, i) {
            let n = i;
            return n || (n = s.getScene()), e.prefabInst && (n.getChildByUuid(e.prefabInst.uuid) || a(e.prefabInst, !0)) || (e.prefabInst = l(t), n.addChild(e.prefabInst)), e.prefabInst
        }
        docViewCb({
            name: e,
            version: t
        }) {
            let i = l(this.legalDocViewer);
            s.getScene().addChild(i), i.setSiblingIndex(this.node.getSiblingIndex()), i.getComponent(h).loadDoc(e, t, u.Enum.DocContentType.HTML, null)
        }
        _requestUserActivityHistory() {
            let e = u.config.getStringData("WEB_API_USER_ACCEPTED_LEGAL_DOC_INFO", !0);
            u.http.sendRequestV2(e, {}, this._onHistoryFetchedSuccessfully.bind(this), u.popUp.showFirstServerError.bind(u.popUp), u.http.HttpRequestType.GET)
        }
        _onHistoryFetchedSuccessfully(e) {
            let t = [];
            for (let i = 0; i < e.length; i++) {
                let n = d(e[i]);
                n.cb = this.docViewCb.bind(this), n && t.push(n)
            }
            t.sort((function(e, t) {
                return t.acceptedAt.getTime() - e.acceptedAt.getTime()
            })), this.scrollView.reloadView(t)
        }
        onBtnClickBack() {
            u.AudioMgr.playButtonSound("back_button.mp3"), this.goBack()
        }
        goBack() {
            this.backNode ? u.action.showActionBothRight(this.backNode, this.node) : u.action.showAction(this.node, u.action.eMoveActionDir.EMAD_TO_RIGHT, u.action.eMoveActionType.EMAT_FADE_OUT, u.action.delay_type.NORMAL, ((e, t) => {}), ((e, t) => {}))
        }
    }).prefabInst = null, _ = t((w = V).prototype, "scrollView", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = t(w.prototype, "legalDocViewer", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(w.prototype, "itemPrefab", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = w)) || D) || D));
    n._RF.pop()
}