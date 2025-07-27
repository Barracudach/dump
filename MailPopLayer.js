import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as p from "./cc.js";
import * as a from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as f from "./ws_protocol.mjs_cjs=&original=.js";
import * as d from "./cv.js";
import * as y from "./MailGoods.js";
import * as b from "./GlobalMsgLayer.js";
import * as g from "./SlideView.js";
import * as I from "./i18nText.js";
import * as S from "./ThemeSystem.js";
import * as x from "./ColorSystemType.js";
import * as C from "./ColorSystemTypeOther.js";
import * as M from "./KYCFacade.js";
import * as k from "./KycStatusPopup.js";

function main() {
    var T, w, D, v, K, P, z, A, L, E, R, j, B, F, G, V, O, N, U, Y, W, H, J, Q, q, $, X, Z, tt, et;
    n._RF.push({}, "80717htv0JI37zimq+6AQW9", "MailPopLayer", void 0);
    const {
        ccclass: it,
        property: nt
    } = h;
    t("MailPopLayer", (T = nt(a), w = nt(l), D = nt(l), v = nt(o), K = nt(l), P = nt(s), z = nt(s), A = nt(g), L = nt(r), E = nt(r), R = nt(c), j = nt(c), B = nt(g), F = nt([u]), it((O = e((V = class extends _ {
        constructor(...t) {
            super(...t), i(this, "prefab_mailGoods", O, this), i(this, "txt_title", N, this), i(this, "txt_appelation", U, this), i(this, "txt_content", Y, this), i(this, "txt_inscribe", W, this), i(this, "btn_close", H, this), i(this, "btn_deal", J, this), i(this, "btn_deal_txt", Q, this), i(this, "panel_icon", q, this), i(this, "kyc_Status_Node", $, this), i(this, "kyc_statusIconSprite", X, this), i(this, "kyc_statusBgSprite", Z, this), i(this, "kycStatus_Txt", tt, this), i(this, "statusIconItem", et, this), this._mailInfo = null, this._slideView = null
        }
        onLoad() {
            this._slideView = this.getComponent(b), this.btn_deal.node.on("click", this._onClickDeal.bind(this)), this.btn_close && this.btn_close.node.on("click", (t => {
                f.AudioMgr.playButtonSound("close.mp3"), this.autoClose()
            })), f.MessageCenter.register("close_mailPopLayer", this.autoClose.bind(this), this.node)
        }
        onDisable() {
            this.node.active || f.tools.triggerPopupHideEvent()
        }
        onDestroy() {
            f.MessageCenter.unregister("close_mailPopLayer", this.node)
        }
        autoShow(t) {
            if (!t) return;
            this.node.active || f.tools.triggerPopupShowEvent(), this._mailInfo = t, this.node.active = !0;
            let e = "",
                i = "",
                n = "",
                a = "",
                l = y.getLanguageIndex(this._mailInfo);
            l >= 0 && (e = this._mailInfo.mail_title[l], i = this._mailInfo.mail_appellation, n = this._mailInfo.mail_content[l], a = this._mailInfo.mail_sender_nickname), this.txt_title.string = e, this.txt_appelation.node.active = i.length > 0, this.txt_appelation.string = i, this.parseUrlText(this.txt_content, n), this.txt_inscribe.string = a, this._checkAttachMent()
        }
        autoClose() {
            this._slideView ? this._slideView.hide() : this.node.active = !1
        }
        _checkAttachMent() {
            let t = "tips_mail_btn_deal_0";
            this._mailInfo.attachment_list.length > y.getMailAttachmentDefaultIndex() && (t = "tips_mail_btn_deal_1"), this.btn_deal.interactable = !0, this.btn_deal_txt.setKey(t), this._mailInfo.attachment_list.length > y.getMailAttachmentDefaultIndex() ? (this.panel_icon.active = !0, this._layoutAttachMent()) : this.panel_icon.active = !1
        }
        _layoutAttachMent() {
            if (!this.panel_icon || !this._mailInfo || this._mailInfo.attachment_list.length <= y.getMailAttachmentDefaultIndex()) return;
            let t = Math.floor(this.panel_icon.getComponent(p).width / this.prefab_mailGoods.data.width);
            t = Math.min(t, this._mailInfo.attachment_list.length);
            let e = y.getMailAttachmentDefaultIndex();
            for (let i = e, n = 1; i < t + e; ++i, ++n) {
                let t = m(this.prefab_mailGoods);
                this.panel_icon.addChild(t);
                let e = k.pb.AttachmentInfo.create(this._mailInfo.attachment_list[i]);
                t.getComponent(d).setData(e)
            }
        }
        _onClickDeal(t) {
            if (f.AudioMgr.playButtonSound("button_click.mp3"), !this._mailInfo) return;
            if (1 !== this._mailInfo.mail_type || this._mailInfo.attachment_list.length <= y.getMailAttachmentDefaultIndex()) {
                const t = f.StringTools.formatC("[%d attachment]", this._mailInfo.attachment_list.length - y.getMailAttachmentDefaultIndex());
                console.log("OnClickDeal - MailPopLayer : Close the Mail " + t), this.autoClose()
            } else console.log("OnClickDeal - MailPopLayer : Fetch the Mail"), y.fetchMail(this._mailInfo.mail_id, this._mailInfo.mail_type, !0), this.btn_deal_txt.setKey("tips_mail_btn_deal_2"), this.btn_deal.interactable = !1
        }
        parseUrlText(t, e) {
            const i = e.split(/\r\n|\r|\n/);
            for (let t = 0; t < i.length; t++) {
                const e = i[t].split(" ");
                for (let t = 0; t < e.length; t++)(e[t].startsWith("http") || e[t].startsWith("https")) && (e[t] = f.StringTools.formatC('<on click="openURL" param="%s">|%s#2B63F3|</on>', e[t], e[t]));
                i[t] = e.join(" ")
            }
            f.StringTools.setRichTextString(t.node, i.join("\n"))
        }
        updateKycStatusData() {
            const t = C.getInstance().getKycPopupStatusType(this._mailInfo.kyc_status.status);
            if (t === M.REQESTED) return void this.btn_deal_txt.setKey("KYC_verify_now");
            this.btn_deal_txt.setKey("tips_mail_btn_deal_0"), this.kyc_Status_Node && (this.kyc_Status_Node.active = !0), this.kyc_statusIconSprite.spriteFrame = this.statusIconItem[t], this.kycStatus_Txt.setKey(`KYC_status_subtitle_${M[t]}`);
            const e = this.getKycStatusColorCode(t),
                i = this.getThemeSystem(this.kyc_statusBgSprite.node);
            null == i || i.setColorScheme(S.Other, e)
        }
        getThemeSystem(t) {
            return null == t ? null : t.getComponent(I)
        }
        getKycStatusColorCode(t) {
            const e = this.getMailInfoKycStatus();
            return e === M.APPROVED ? x.kycVerifiedText : e === M.REJECTED ? x.kycRejectedText : x.kycUnverifiedText
        }
        getMailInfoKycStatus() {
            return C.getInstance().getKycPopupStatusType(this._mailInfo.kyc_status.status)
        }
    }).prototype, "prefab_mailGoods", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), N = e(V.prototype, "txt_title", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(V.prototype, "txt_appelation", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(V.prototype, "txt_content", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(V.prototype, "txt_inscribe", [K], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(V.prototype, "btn_close", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(V.prototype, "btn_deal", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(V.prototype, "btn_deal_txt", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(V.prototype, "panel_icon", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(V.prototype, "kyc_Status_Node", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(V.prototype, "kyc_statusIconSprite", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(V.prototype, "kyc_statusBgSprite", [j], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(V.prototype, "kycStatus_Txt", [B], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(V.prototype, "statusIconItem", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), G = V)) || G));
    n._RF.pop()
}