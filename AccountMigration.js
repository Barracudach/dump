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
import * as p from "./Translator.js";
import * as m from "./LoadingBlocker.js";

function main() {
    var d, C, k, f, I, A, M, b, _, O, w, y;
    o._RF.push({}, "00685QzdIFCL7sJKPMEq7iU", "AccountMigration", void 0);
    const {
        ccclass: B,
        property: N
    } = r;
    t("AccountMigration", (d = N([n]), C = N([s]), k = N(a), f = N(a), I = N(c), B((b = i((M = class extends l {
        constructor(...t) {
            super(...t), e(this, "accountChoices", b, this), e(this, "accountInfo", _, this), e(this, "mask", O, this), e(this, "popup", w, this), e(this, "okButton", y, this), this._actionSpeed = .2, this._loadingTarget = "accountMigration", this.migrationMsg = null, this.migrationPwd = "", this.loginAction = void 0
        }
        onLoad() {
            this.mask.getComponent(h).opacity = 1, this.popup.setScale(1e-4, 1e-4)
        }
        start() {}
        setAccountInfo(t, i, e, o) {
            return p("ACCOUNT_MIGRATION.ACCOUNT_INFO").replace("${nickname}", t).replace("${id}", i.toString()).replace("${member}", e.toString()).replace("${downline}", o.toString())
        }
        callMigration(t, i, e) {
            cc_mtt.vv.ConsoleLog.log("check migration", t), this.migrationMsg = t, this.migrationPwd = i, this.loginAction = e, this.accountInfo[0].string = this.setAccountInfo(this.migrationMsg[0].Nickname, this.migrationMsg[0].Uuid, this.migrationMsg[0].UsersCount, this.migrationMsg[0].AgentsCount), this.accountInfo[1].string = this.setAccountInfo(this.migrationMsg[1].Nickname, this.migrationMsg[1].Uuid, this.migrationMsg[1].UsersCount, this.migrationMsg[1].AgentsCount), this.zoomIn(), this.resetCheckBox()
        }
        callConfirmBox(t, i, e) {
            const o = {
                Translation: "ACCOUNT_MIGRATION.MIGRATION_CONFIRM",
                payload: i => p(i).replace("${nickname}", t)
            };
            cc_mtt.vv.AssetsManager.showDialogBox("", o, !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.CANCEL",
                callback: i
            }, {
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: e
            }])
        }
        resetCheckBox() {
            this.accountChoices[0].isChecked = !0;
            for (let t = 1; t < this.accountChoices.length; t++) this.accountChoices[t].isChecked = !1
        }
        zoomIn() {
            this.okButton.enabled = !1, this.node.active = !0, u(this.mask.getComponent(h)).to(this._actionSpeed, {
                opacity: 255
            }).start(), u(this.popup).to(this._actionSpeed, {
                scale: new g(1, 1, 1)
            }, {
                easing: "backOut"
            }).call((() => {
                this.okButton.enabled = !0
            })).start()
        }
        zoomOut(t) {
            this.okButton.enabled = !1, u(this.mask.getComponent(h)).to(this._actionSpeed, {
                opacity: 0
            }).start(), u(this.popup).to(this._actionSpeed, {
                scale: new g(1e-4, 1e-4, 1e-4)
            }, {
                easing: "backIn"
            }).call((() => {
                this.node.active = !1, t instanceof Function && t()
            })).start()
        }
        requestImpokerUserChooseAgent(t, i) {
            let e = {
                UserId: t.Uuid,
                AgentId: t.Id,
                Password: this.migrationPwd
            };
            cc_mtt.vv.DataManager.worldNetwork.requestImpokerUserChooserAgent(e, (t => {
                i instanceof Function && i(t)
            }))
        }
        getChoice() {
            for (let t = 0; t < this.accountChoices.length; t++)
                if (this.accountChoices[t].isChecked) return this.migrationMsg[t];
            return this.migrationMsg[0]
        }
        onOkClicked() {
            let t = this.getChoice();
            this.zoomOut((() => {
                this.callConfirmBox(t.Nickname, (() => {
                    this.zoomIn()
                }), (() => {
                    m.show(this._loadingTarget), this.requestImpokerUserChooseAgent(t, this.loginAction), setTimeout((() => {
                        m.hide(this._loadingTarget)
                    }), 200)
                }))
            }))
        }
    }).prototype, "accountChoices", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), _ = i(M.prototype, "accountInfo", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), O = i(M.prototype, "mask", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), w = i(M.prototype, "popup", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = i(M.prototype, "okButton", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), A = M)) || A));
    o._RF.pop()
}