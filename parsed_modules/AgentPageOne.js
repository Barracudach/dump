import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as g from "./AgentPrefabPage.js";
import * as d from "./ImpokerHall.js";
import * as p from "./AgentWithdrawRecordPage.js";
import * as b from "./Translator.js";
import * as w from "./observer.js";
import * as P from "./observer.js";
import * as f from "./NodePage.js";
import * as m from "./FormatParser.js";
import * as _ from "./httpApis.js";
import * as C from "./CommonTools.js";

function main() {
    var y, R, A, S, D, I, v, O, N, E, z, G, M, T, B, L, W, k, $, F, H, q, x, K, U, Q, j, V, J, X;
    n._RF.push({}, "2d5f25QlExLl5wUIyid5DnG", "AgentPageOne", void 0);
    const {
        ccclass: Y,
        property: Z
    } = s;
    t("AgentPageOne", (y = Z(r), R = Z(o), A = Z(o), S = Z(o), D = Z(o), I = Z(o), v = Z(o), O = Z(o), N = Z(o), E = Z(o), z = Z(o), G = Z(a), M = Z(a), T = Z(l), Y(B = w((W = e((L = class extends c {
        constructor(...t) {
            super(...t), i(this, "agentPage", W, this), i(this, "agentCode", k, this), i(this, "totalChildren", $, this), i(this, "onlineChildren", F, this), i(this, "newChildren", H, this), i(this, "todayIncome", q, this), i(this, "childrenContribution", x, this), i(this, "secondAgentContribution", K, this), i(this, "guessCardContribution", U, this), i(this, "cowboyContribution", Q, this), i(this, "availableIncome", j, this), i(this, "withdrawRecordButton", V, this), i(this, "withdrawButton", J, this), i(this, "withdrawRecordPrefab", X, this), this._withdrawRecordPage = null, this._agentPageScript = null, this._hallScript = null
        }
        onLoad() {
            this._agentPageScript = this.agentPage.getComponent(g), this._hallScript = C.instance.getParentScene(u, this.node).getComponentInChildren(d)
        }
        start() {}
        setPage() {
            return this.agentCode.string = b("AGENT.INFORMATION.AGENT_CODE") + cc_mtt.vv.DataManager.loginData.DefaultAgentCode, this.requestAssociationDetailPage()
        }
        resetPage() {}
        setInfo() {
            this.totalChildren.string = `${this._agentPageScript.store.members}`, this.onlineChildren.string = `${this._agentPageScript.store.onlineMember}`, this.newChildren.string = `${this._agentPageScript.store.newMember}`, this.todayIncome.string = `${m.DisplayGold(this._agentPageScript.store.todayIncome)}`, this.childrenContribution.string = `${m.DisplayGold(this._agentPageScript.store.incomeMember)}`, this.secondAgentContribution.string = `${m.DisplayGold(this._agentPageScript.store.incomeDownline)}`, this.guessCardContribution.string = `${m.DisplayGold(this._agentPageScript.store.incomeGuessCard)}`, this.cowboyContribution.string = `${m.DisplayGold(this._agentPageScript.store.incomeCowboy)}`, this.availableIncome.string = `${m.DisplayGold(this._agentPageScript.store.balance)}`
        }
        requestAssociationDetailPage() {
            let t = {
                assoId: cc_mtt.vv.DataManager.ownAssociationId
            };
            return new Promise(((e, i) => {
                _.requestAssociationDetail(t, (t => {
                    if (cc_mtt.vv.ConsoleLog.log("requestAssociationDetail_RES", t), t.errorCode) {
                        let e = "ERROR_CODE_PKW." + t.errorCode;
                        i(e)
                    } else this._agentPageScript.store.reloadDetail(t), e()
                }), (() => {
                    cc_mtt.vv.ConsoleLog.log("onerror:requestAssociationDetail"), i("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
                }))
            }))
        }
        onQRCodeClicked() {
            this._agentPageScript.callQRCodePage()
        }
        onWithdrawRecordClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), setTimeout((() => {
                this._withdrawRecordPage.getComponent(p).setPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed), this._withdrawRecordPage || (this._withdrawRecordPage = h(this.withdrawRecordPrefab), this._withdrawRecordPage.parent = this._hallScript.layers[0], this._withdrawRecordPage.getComponent(p)._parentPage = this.agentPage), this._hallScript.movePageFromRight(this._withdrawRecordPage, this.agentPage)
        }
        onWithdrawClicked() {
            let t = this._agentPageScript.store.balance;
            if (0 === f.roundValue(t)) {
                let t = "AGENT.INFORMATION.WITHDRAW.NO_INCOME";
                this._hallScript.callPopUpBox(t, void 0)
            } else {
                let e = {
                    assoId: cc_mtt.vv.DataManager.ownAssociationId,
                    amount: t
                };
                this._hallScript.showLoading(), cc_mtt.vv.DataManager.worldNetwork.requestAssociationWithdraw(e, (t => {
                    this._hallScript.hidLoading((() => {
                        if (t.errorCode) {
                            let e = "ERROR_CODE_PKW." + t.errorCode;
                            this._hallScript.callPopUpBox(e, void 0)
                        } else {
                            this._agentPageScript.store.reloadBalance(t);
                            let e = "AGENT.INFORMATION.WITHDRAW.INCOME_GAIN";
                            this._hallScript.callPopUpBox(e, void 0)
                        }
                    }))
                }))
            }
        }
    }).prototype, "agentPage", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(L.prototype, "agentCode", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(L.prototype, "totalChildren", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), F = e(L.prototype, "onlineChildren", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), H = e(L.prototype, "newChildren", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), q = e(L.prototype, "todayIncome", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = e(L.prototype, "childrenContribution", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), K = e(L.prototype, "secondAgentContribution", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), U = e(L.prototype, "guessCardContribution", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(L.prototype, "cowboyContribution", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(L.prototype, "availableIncome", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(L.prototype, "withdrawRecordButton", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(L.prototype, "withdrawButton", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(L.prototype, "withdrawRecordPrefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(L.prototype, "setInfo", [P], Object.getOwnPropertyDescriptor(L.prototype, "setInfo"), L.prototype), B = L)) || B) || B));
    n._RF.pop()
}