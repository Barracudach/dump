import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cv.js";
import * as h from "./GlobalMsgLayer.js";
import * as p from "./GlobalMsgDataManager.js";
import * as f from "./GlobalMsgDataManager.js";
import * as d from "./RemindData.js";
import * as b from "./RemindData.js";

function main() {
    var I, S, T, y, x, C, M, D, R, v, w, k, F, N, E, G, U, z, A, P, L, Y, H, O, B, V, j, J, W, X, Z, q, K, Q, $, tt, et, it, nt, at;
    n._RF.push({}, "7dc941NX31Hwp96IEDorvNJ", "GlobalMsgItem", void 0);
    const {
        ccclass: lt,
        property: ot
    } = s;
    t("GlobalMsgItem", (I = ot(a), S = ot(a), T = ot(l), y = ot(l), x = ot(a), C = ot(a), M = ot(o), D = ot(o), R = ot(o), v = ot(r), w = ot(l), k = ot(r), F = ot(l), N = ot(r), E = ot(l), G = ot(a), U = ot(l), z = ot(a), A = ot(a), lt((Y = e((L = class extends _ {
        constructor(...t) {
            super(...t), i(this, "panel_top", Y, this), i(this, "img_dot", H, this), i(this, "rtxt_title", O, this), i(this, "txt_time", B, this), i(this, "panel_remind", V, this), i(this, "panel_content", j, this), i(this, "rtxt_up", J, this), i(this, "rtxt_middle", W, this), i(this, "rtxt_down", X, this), i(this, "btn_ensure", Z, this), i(this, "btn_ensure_txt", q, this), i(this, "btn_cancel", K, this), i(this, "btn_cancel_txt", Q, this), i(this, "btn_status", $, this), i(this, "btn_status_txt", tt, this), i(this, "panel_mail", et, this), i(this, "rtxt_mail_brief", it, this), i(this, "icon_read", nt, this), i(this, "icon_unread", at, this), this._cellFlagInfo = null, this._mailInfo = null
        }
        onLoad() {
            this.node.on("click", this._onClick, this), this.btn_ensure.node.on("click", this._onClickRemindEnsure, this), this.btn_cancel.node.on("click", this._onClickRemindCancel, this), this.btn_status.node.on("click", this._onClickRemindStatus, this)
        }
        start() {}
        _reset(t = !1) {
            this._restRemindPanel(t), this._cellFlagInfo = null, this._mailInfo = null
        }
        _restRemindPanel(t = !1) {
            this.btn_ensure.node.active = t, this.btn_ensure_txt.string = m.config.getStringData("NoticeItem_ok_button"), this.btn_cancel.node.active = t, this.btn_cancel_txt.string = m.config.getStringData("NoticeItem_no_button"), this.btn_status.node.active = t, this.btn_status_txt.string = m.config.getStringData("NoticeItem_status_button")
        }
        _restMailPanel(t = !1) {
            this.icon_read.active = !1, this.icon_unread.active = !0, this.rtxt_mail_brief.string = ""
        }
        _updateRemindData() {
            if (!this._cellFlagInfo) return;
            let t = this._cellFlagInfo.remindData;
            this.img_dot.active = t.msgNew;
            let e = d.RMSG_TYPE_NONE;
            t.msgType >= m.Number(d.RMSG_TYPE_NONE) && t.msgType <= m.Number(d.RMSG_TYPE_GLOBAL) && (e = t.msgType);
            let i = m.StringTools.formatC("UINoticeMsgType_%04u", e);
            this.rtxt_title.string = m.config.getStringData(i), this.txt_time.string = m.StringTools.formatTime(t.msgTime, m.Enum.eTimeType.Month_Day_Hour_Min);
            let n = t.msgContenUp.format_key;
            t.msgContenUp.isFormat || (n = m.config.getStringData(t.msgContenUp.format_key));
            let a = m.StringTools.formatC(n, t.msgContenUp.format_value1, t.msgContenUp.format_value2);
            m.StringTools.setRichTextString(this.rtxt_up.node, a);
            let l = t.msgContenMiddle.format_key;
            t.msgContenMiddle.isFormat || (l = m.config.getStringData(t.msgContenMiddle.format_key));
            let o = m.StringTools.formatC(l, t.msgContenMiddle.format_value1, t.msgContenMiddle.format_value2);
            m.StringTools.setRichTextString(this.rtxt_middle.node, o);
            let r = t.msgContenDown.format_key;
            t.msgContenDown.isFormat || (r = m.config.getStringData(t.msgContenDown.format_key));
            let s = m.StringTools.formatC(r, t.msgContenDown.format_value1, t.msgContenDown.format_value2);
            m.StringTools.setRichTextString(this.rtxt_down.node, s);
            {
                let t = [];
                t.push(this.rtxt_down.node), t.push(this.rtxt_middle.node), t.push(this.rtxt_up.node);
                let e = 0,
                    i = 0,
                    n = 0;
                for (let i = 0; i < t.length; ++i) t[i].active && (++n, e += t[i].getComponent(c).height * t[i].scale.y);
                i = (this.panel_content.getComponent(c).height - e) / (n + 1), i = Math.max(0, i);
                let a = (0 - this.panel_content.getComponent(c).anchorY) * this.panel_content.getComponent(c).height;
                for (let e = 0; e < t.length; ++e)
                    if (t[e].active) {
                        let n = a + i + t[e].getComponent(c).height * t[e].scale.y * t[e].getComponent(c).anchorY,
                            l = u(g.ZERO);
                        this.panel_content.getComponent(c).convertToWorldSpaceAR(new g(0, n), l), t[e].parent.getComponent(c).convertToNodeSpaceAR(l, l), t[e].setPosition(t[e].position.x, l.y), a = l.y + t[e].getComponent(c).height * t[e].scale.y * t[e].getComponent(c).anchorY
                    }
            }
            switch (t.msgStatus) {
                case b.RMSG_STATUS_PENDING:
                    this.btn_ensure.node.active = !0, this.btn_cancel.node.active = !0;
                    break;
                case b.RMSG_STATUS_RATIFIED:
                    this.btn_status.node.active = !0, this.btn_status_txt.string = m.config.getStringData("UINoticeHasRatify");
                    break;
                case b.RMSG_STATUS_REFUSED:
                    this.btn_status.node.active = !0, this.btn_status_txt.string = m.config.getStringData("UINoticeHasRefuse");
                    break;
                case b.RMSG_STATUS_TIMEOUT:
                    this.btn_status.node.active = !0, this.btn_status_txt.string = m.config.getStringData("UINoticeHasInvalid");
                    break;
                case b.RMSG_STATUS_CANCEL:
                    this.btn_status.node.active = !0, this.btn_status_txt.string = m.config.getStringData("UINoticeHasCancel");
                    break;
                case b.RMSG_STATUS_NONE:
            }
        }
        _updateMailData() {
            if (!this._mailInfo) return;
            let t = this._mailInfo;
            this._updateTitle(), this._updateSender(), this.txt_time.string = m.StringTools.formatTime(t.mail_sendtime, m.Enum.eTimeType.Month_Day_Hour_Min);
            {
                let e = !1;
                e = 1 !== t.isexpired && 2 === t.mail_state, this.img_dot.active = e, this.icon_read.active = 1 === t.mail_state, this.icon_unread.active = !this.icon_read.active
            }
        }
        _updateTitle() {
            if (!this._mailInfo) return;
            let t = "",
                e = h.getLanguageIndex(this._mailInfo);
            e >= 0 && (t = this._mailInfo.mail_title[e]), this.rtxt_mail_brief.string = t
        }
        _updateSender() {
            if (!this._mailInfo) return;
            let t = m.config.getStringData("ClubNotice_panel_0_fr_txt") + " " + this._mailInfo.mail_sender_nickname;
            this.rtxt_title.string = t
        }
        updateSVReuseData(t, e) {
            if (t < 0 || t >= e.length) return;
            let i = e[t];
            if (i) {
                this._reset(), this._cellFlagInfo = i, this._cellFlagInfo && (this._mailInfo = this._cellFlagInfo.mailData);
                let t = this.getComponent(r);
                switch (i.cellType) {
                    case f.GMSG_UI_TYPE_NONE:
                        break;
                    case f.GMSG_UI_TYPE_REMIND:
                        this.panel_mail.active = !1, this.panel_remind.active = !0, this._updateRemindData(), t.enabled = !1;
                        break;
                    case f.GMSG_UI_TYPE_MAIL:
                    case f.GMSG_UI_TYPE_ANNOUNCE:
                        this.panel_remind.active = !1, this.panel_mail.active = !0, this._updateMailData(), t.enabled = !0
                }
            }
        }
        _onClick(t) {
            if (!this._mailInfo) return;
            let e = this._mailInfo;
            switch (e.isexpired) {
                case 1:
                case 3:
                    let t = m.config.getStringData("tips_mail_type_0");
                    e.mail_type === p.REGULAR_MAIL && (t = m.config.getStringData("tips_mail_type_1"));
                    let i = m.StringTools.formatC("tips_mail_isexpired_%u", e.isexpired);
                    i = m.config.getStringData(i), i = m.StringTools.formatC(i, t), m.TT.showMsg(i, m.Enum.ToastType.ToastTypeInfo);
                    break;
                case 2:
                    m.MessageCenter.send("on_pop_one_anounce", e), 2 === e.mail_state && e.attachment_list.length <= h.getMailAttachmentDefaultIndex() && h.fetchMail(e.mail_id, e.mail_type)
            }
        }
        _onClickRemindEnsure(t) {
            if (m.AudioMgr.playButtonSound("button_click.mp3"), !this._cellFlagInfo) return;
            let e = this._cellFlagInfo.remindData.msgEnsureFunc;
            e && e(this._cellFlagInfo.remindData, this._cellFlagInfo.cellIndex, this._cellFlagInfo.dataIndex)
        }
        _onClickRemindCancel(t) {
            if (m.AudioMgr.playButtonSound("button_click.mp3"), !this._cellFlagInfo) return;
            let e = this._cellFlagInfo.remindData.msgCancelFunc;
            e && e(this._cellFlagInfo.remindData, this._cellFlagInfo.cellIndex, this._cellFlagInfo.dataIndex)
        }
        _onClickRemindStatus(t) {
            if (m.AudioMgr.playButtonSound("button_click.mp3"), !this._cellFlagInfo) return;
            let e = this._cellFlagInfo.remindData.msgStatusFunc;
            e && e(this._cellFlagInfo.remindData, this._cellFlagInfo.cellIndex, this._cellFlagInfo.dataIndex)
        }
    }).prototype, "panel_top", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(L.prototype, "img_dot", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(L.prototype, "rtxt_title", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), B = e(L.prototype, "txt_time", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(L.prototype, "panel_remind", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(L.prototype, "panel_content", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(L.prototype, "rtxt_up", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(L.prototype, "rtxt_middle", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(L.prototype, "rtxt_down", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(L.prototype, "btn_ensure", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(L.prototype, "btn_ensure_txt", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(L.prototype, "btn_cancel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(L.prototype, "btn_cancel_txt", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(L.prototype, "btn_status", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(L.prototype, "btn_status_txt", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(L.prototype, "panel_mail", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(L.prototype, "rtxt_mail_brief", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(L.prototype, "icon_read", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(L.prototype, "icon_unread", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = L)) || P));
    n._RF.pop()
}