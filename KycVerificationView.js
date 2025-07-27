import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as n from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as p from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as b from "./ColorSystemTypeOther.js";
import * as f from "./KycRequiredPopup.js";
import * as S from "./KYCFacade.js";
import * as y from "./KYCFacade.js";
import * as m from "./KYCFacade.js";
import * as C from "./KYCFacade.js";
import * as _ from "./cv.js";
import * as w from "./KycDocumentView.js";
import * as I from "./ResourceManager.js";
import * as P from "./MessageBroker.js";

function main() {
    var k, v, K, D, M, A, R, x, T, F, L, V, B, Y, j, U, z, E, O, N, W, q, H, G, J, Q, X;
    i._RF.push({}, "06895x67xtCpKRUgFBes6hI", "KycVerificationView", void 0);
    const {
        ccclass: Z,
        property: $
    } = l, ee = [y.ID, y.PROOF_OF_ADDRESS, y.PROOF_OF_PAYMENT], te = {
        Unverified: {
            textColor: b.kycUnverifiedText,
            bgColor: b.kycUnverifiedBase,
            statusText: "KYC_Status_Unverified",
            statusIconIndex: 0
        },
        InPrgress: {
            textColor: b.kycPendingText,
            bgColor: b.kycPendingBase,
            statusText: "KYC_Status_InProgress",
            statusIconIndex: 1
        },
        Rejected: {
            textColor: b.kycRejectedText,
            bgColor: b.kycRejectedBase,
            statusText: "KYC_Status_Rejected",
            statusIconIndex: 2
        },
        Approved: {
            textColor: b.kycVerifiedText,
            bgColor: b.kycVerifiedBase,
            statusText: "KYC_Status_Approved",
            statusIconIndex: 3
        }
    };
    var ne = function(e) {
        return e[e.Unverified = 0] = "Unverified", e[e.InPrgress = 1] = "InPrgress", e[e.Rejected = 2] = "Rejected", e[e.Approved = 3] = "Approved", e
    }(ne || {});
    e("KycVerificationView", (k = $(s), v = $(o), K = $(a), D = $(s), M = $(r), A = $(a), R = $(c), x = $(c), T = $(s), F = $(s), L = $(s), V = $(u), Z(((X = class e extends d {
        constructor(...e) {
            super(...e), n(this, "loadingView", j, this), n(this, "kycStatusLabel", U, this), n(this, "bgStatusSprite", z, this), n(this, "documentsParent", E, this), n(this, "kycDocumentsPrefab", O, this), n(this, "statusIcon", N, this), n(this, "iconSprites", W, this), n(this, "bgSprites", q, this), n(this, "documentMsg", H, this), n(this, "kycRejectedNode", G, this), n(this, "webViewParent", J, this), n(this, "documentListWidget", Q, this), this._documents = new Map
        }
        static getSinglePrefabInst(t, n) {
            return n || (n = g.getScene()), e.prefabInstant || (e.prefabInstant = h(t)), n.getChildByUuid(e.prefabInstant.uuid) || p(e.prefabInstant, !0) || (e.prefabInstant = h(t)), e.prefabInstant
        }
        static getKYCSimpliedStatus(e) {
            let t = ne.Unverified;
            switch (e.status) {
                case m.Succeed:
                case m.PaymentApproved:
                    t = ne.Approved;
                    break;
                case m.Failed:
                case m.PaymentRejected:
                    t = ne.Rejected;
                    break;
                case m.Pending:
                case m.PaymentPending:
                case m.PaymentOnHold:
                case m.Unverified:
                case m.NotTriggered:
                    t = ne.InPrgress
            }
            return t == ne.InPrgress && (e => {
                if (e && e.length > 0)
                    for (let t = 0; t < e.length; t++)
                        if (e[t].status != C.Pending) return !1;
                return !0
            })(e.documents) && (t = ne.Unverified), t
        }
        static getKYCStatusData(e) {
            return te[ne[e]]
        }
        start() {
            S.getInstance().setWebviewParent(this.webViewParent), _.MessageCenter.register("onLogout", this.onLogout.bind(this), this.node)
        }
        onEnable() {
            this.node.on(_.Enum.CustomEvent.ActionShowFinish, this.onShow, this), _.MessageCenter.register("kyc_document_uploaded", this.onKYCDocumentUploaded.bind(this), this.node), _.appConfig.isLandscapeLayout || _.MessageCenter.register("hall_bottom_profile_button", this.onClickBack.bind(this, !1), this.node)
        }
        onDisable() {
            var e;
            null == (e = this.webViewParent) || e.removeAllChildren(), this.node.off(_.Enum.CustomEvent.ActionShowFinish, this.onShow, this), _.MessageCenter.unregister("kyc_document_uploaded", this.node), _.appConfig.isLandscapeLayout || _.MessageCenter.unregister("hall_bottom_profile_button", this.node)
        }
        onDestroy() {
            _.MessageCenter.unregister("onLogout", this.node)
        }
        onLogout() {
            this.clearDocuments()
        }
        clearDocuments() {
            this._documents.clear(), this.documentsParent.removeAllChildren()
        }
        onShow() {
            this.loadingView.active = !0, S.getInstance().getCurrentKycStatus(this.onKycStatusFetched.bind(this), this.onKycStatusFetchFailed.bind(this), _.appConfig.getGeneralConfig().allowUserInitiatedKYC)
        }
        onWhyIsThisRequiredClicked() {
            let e = null,
                t = [...this._documents.keys()];
            const n = t.length;
            if (n > 0) {
                e = _.config.getStringData("KYC_Required_Popup_Text1_start") + " ";
                for (let i = 0; i < n; i++) e += _.config.getStringData("KYC_Required_Popup_Text1_" + t[i]), n > 1 && i < n - 1 && (e += ", ", i == n - 2 && (e += _.config.getStringData("AND_text") + " "));
                e += "."
            }
            f.getInstance().showMsg({
                step1Text: e,
                enableLaterButton: !1
            })
        }
        onKycStatusFetched(t) {
            _.MessageCenter.send("kyc_status_fetched", t), this.loadingView.active = !1;
            const n = e.getKYCSimpliedStatus(t),
                i = e.getKYCStatusData(n);
            this.kycStatusLabel.string = _.config.getStringData(i.statusText), this.statusIcon.spriteFrame = this.iconSprites[i.statusIconIndex], this.bgStatusSprite.spriteFrame = this.bgSprites[i.statusIconIndex], I.updateWidget(this.bgStatusSprite.node, !0, u.AlignMode.ALWAYS);
            const s = ee.reduce(((e, t, n) => ({
                    ...e,
                    [t]: n
                })), {}),
                o = t.documents.sort(((e, t) => s[e.type] - s[t.type]));
            let a = 0,
                r = !1;
            o.length < this._documents.size && this.clearDocuments(), o.forEach((e => {
                this.createKycDocument(e, a++), e.status == C.Pending && (r = !0)
            })), this.documentMsg.active = r, this.setRejectedMessageView(t.status)
        }
        createKycDocument(e, t) {
            if (!this._documents.has(e.type)) {
                let t = h(this.kycDocumentsPrefab);
                this.documentsParent.addChild(t), this._documents.set(e.type, t.getComponent(w))
            }
            this._documents.get(e.type).setCurrentStatus(e)
        }
        onKycStatusFetchFailed(e) {
            this.loadingView.active = !1
        }
        onKYCDocumentUploaded(e) {
            this.loadingView.active = !0, S.getInstance().getCurrentKycStatus(this.onKycStatusFetched.bind(this), this.onKycStatusFetchFailed.bind(this))
        }
        setRejectedMessageView(e) {
            let t = e == m.PaymentRejected;
            this.kycRejectedNode.active = t, _.appConfig.isLandscapeLayout || (this.documentListWidget.bottom = t ? 400 : 0)
        }
        onClickBack(e = !0) {
            let t;
            1 == e ? t = _.action.delay_type.INSTANT : (t = _.action.delay_type.NORMAL, e.target && "backBtn" == e.target._name && _.AudioMgr.playButtonSound("back_button.mp3")), this.showLogoBack(), _.action.showAction(this.node, _.action.eMoveActionDir.EMAD_TO_RIGHT, _.action.eMoveActionType.EMAT_FADE_OUT, t, ((e, t) => {}), ((e, t) => {
                _.MessageCenter.unregister("hall_bottom_lobby_button", this.node), e.destroy()
            }))
        }
        showLogoBack() {
            _.appConfig.isWebApp ? P.getInstance().sendShowBackButton(!1) : _.MessageCenter.send(_.Enum.MessageCenterAction.EnableTopAppLogo)
        }
    }).prefabInstant = null, j = t((Y = X).prototype, "loadingView", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = t(Y.prototype, "kycStatusLabel", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = t(Y.prototype, "bgStatusSprite", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = t(Y.prototype, "documentsParent", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = t(Y.prototype, "kycDocumentsPrefab", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = t(Y.prototype, "statusIcon", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = t(Y.prototype, "iconSprites", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), q = t(Y.prototype, "bgSprites", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), H = t(Y.prototype, "documentMsg", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(Y.prototype, "kycRejectedNode", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = t(Y.prototype, "webViewParent", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = t(Y.prototype, "documentListWidget", [V], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = Y)) || B));
    i._RF.pop()
}