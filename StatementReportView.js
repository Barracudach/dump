import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as m from "./ReportDateField.js";
import * as D from "./DatePickerManager.js";

function main() {
    var f, T, S, b, y, F, C, _, w, P, I, M, R;
    n._RF.push({}, "6f61eDJI9tKiZVxXnI+5HkP", "StatementReportView", void 0);
    const {
        ccclass: k,
        property: B
    } = s, A = 0, v = 2;
    e("default", (f = B(o), T = B(o), S = B(a), b = B(a), y = B(r), k(((R = class e extends l {
        constructor(...e) {
            super(...e), i(this, "onSuccessMsgKey", _, this), i(this, "onErrorMsgKey", w, this), i(this, "fromDateField", P, this), i(this, "toDateField", I, this), i(this, "datePickerPrefab", M, this), this.selectedDateType = v, this.nodeUITransform = null
        }
        static getSinglePrefabInst(t, i) {
            let n = i;
            return n || (n = c.getScene()), e._g_prefabInst || (e._g_prefabInst = g(t)), n.getChildByUuid(e._g_prefabInst.uuid) || d(e._g_prefabInst, !0) || (e._g_prefabInst = g(t)), e._g_prefabInst
        }
        onLoad() {
            this.nodeUITransform = this.node.getComponent(h)
        }
        start() {
            this.fromDateField.getComponent(m).Init(this.fromDateChanged.bind(this)), this.toDateField.getComponent(m).Init(this.toDateChanged.bind(this))
        }
        fromDateChanged() {
            let e = this.fromDateField.getComponent(m),
                t = this.toDateField.getComponent(m),
                i = u.config.getTimeWithTimeZone(),
                n = u.config.getTimeWithTimeZone();
            i.setDate(n.getDate() - 180), e.GetFieldDate().getTime() < i.getTime() && e.SetFieldDate(i), e.GetFieldDate().getTime() > t.GetFieldDate().getTime() && t.SetFieldDate(e.GetFieldDate())
        }
        toDateChanged() {
            let e = this.fromDateField.getComponent(m),
                t = this.toDateField.getComponent(m);
            e.GetFieldDate().getTime() > t.GetFieldDate().getTime() && t.SetFieldDate(e.GetFieldDate())
        }
        onBtnRequest() {
            u.AudioMgr.playButtonSound("button_click.mp3");
            let e = this.fromDateField.getComponent(m).GetFieldDate();
            e = u.config.getUTCWithTimeZone(e.setHours(0, 0, 0, 0));
            let t = this.toDateField.getComponent(m).GetFieldDate();
            t.setHours(23, 59, 59, 999), t.getTime() > u.config.getTimeWithTimeZone().getTime() && (t = u.config.getTimeWithTimeZone()), t = u.config.getUTCWithTimeZone(t.getTime());
            let i = {
                StartDate: e.toISOString(),
                EndDate: t.toISOString()
            };
            u.SwitchLoadingView.show(""), u.http.sendRequestV2(u.config.getStringData("WEB_API_GET_REPORT_DATA", !0), i, this.onStatementReportSuccess.bind(this), this.onStatementReportFailed.bind(this), u.http.HttpRequestType.POST)
        }
        onStatementReportSuccess(e) {
            u.SwitchLoadingView.hide();
            let t = u.config.getStringData(this.onSuccessMsgKey);
            null != t && 0 != t.length || (t = u.config.getStringData("StatementReport_success")), u.popUp.showMsg({
                txt: t,
                sureCallback: () => {
                    this.goBack()
                },
                msgType: u.Enum.ToastType.ToastTypeSuccess
            })
        }
        onStatementReportFailed(e) {
            u.SwitchLoadingView.hide();
            let t = u.config.getStringData(this.onErrorMsgKey);
            null != t && 0 != t.length || (t = u.config.getStringData("StatementReport_error")), u.popUp.showMsg({
                txt: t,
                sureCallback: () => {
                    this.goBack()
                },
                msgType: u.Enum.ToastType.ToastTypeWarning
            })
        }
        goBack() {
            u.AudioMgr.playButtonSound("close.mp3"), u.action.showAction(this.node, u.action.eMoveActionDir.EMAD_TO_RIGHT, u.action.eMoveActionType.EMAT_FADE_OUT), u.MessageCenter.send("show_mail_entrance", !0)
        }
        openDOBDatePicker(e, t, i) {
            var n = {
                datePickerPrefab: this.datePickerPrefab,
                parentRef: this.node,
                dpPosMultiplier: t,
                arrowPosMultiplier: i,
                arrowRotation: 270,
                localisationMethod: this.localiseDatePickerComponent,
                selectedDate: e
            };
            D.getInstance().show(n), D.getInstance().setCallbackMethod(this.onSelectedDateCB.bind(this))
        }
        localiseDatePickerComponent(e) {
            return u.config.getStringData(e)
        }
        onSelectedDateCB(e) {
            var t = this.toDateField.getComponent(m);
            this.selectedDateType == A && (t = this.fromDateField.getComponent(m)), t.SetFieldDate(e), this.selectedDateType = v
        }
        onBtnCB(e, t) {
            this.selectedDateType = t;
            var i = this.toDateField.getComponent(m);
            let n = e.target.getPosition();
            n.x -= e.target.width * e.target.anchorX, n.x += 71.5, n.y += e.target.height * (1.6 - e.target.anchorY), n.y += 15;
            let o = this.nodeUITransform.convertToNodeSpaceAR(e.target.parent.convertToWorldSpaceAR(n)),
                a = this.datePickerPrefab.data.getComponent(h),
                r = o.x + .13 * a.width,
                s = o.y + a.height * a.anchorY,
                l = new p(-.2, -.51);
            this.selectedDateType == A && (r = o.x + .18 * a.width, l = new p(-.25, -.51), i = this.fromDateField.getComponent(m));
            let c = new p(r / this.nodeUITransform.width, s / this.nodeUITransform.height);
            this.openDOBDatePicker(i.selectedDate, c, l)
        }
    })._g_prefabInst = null, _ = t((C = R).prototype, "onSuccessMsgKey", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), w = t(C.prototype, "onErrorMsgKey", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), P = t(C.prototype, "fromDateField", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = t(C.prototype, "toDateField", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), M = t(C.prototype, "datePickerPrefab", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = C)) || F));
    n._RF.pop()
}