import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./AgentPrefabPage.js";
import * as u from "./ImpokerHall.js";
import * as p from "./observer.js";
import * as g from "./observer.js";
import * as h from "./FormatParser.js";
import * as m from "./httpApis.js";
import * as b from "./CommonTools.js";

function main() {
    var y, f, P, d, w, A, _, v, S, I, k, C, D, R, L, z, W, O, E, G;
    o._RF.push({}, "93bbcONYBRDApBId8aGYBXj", "AgentPageFour", void 0);
    const {
        ccclass: $,
        property: F
    } = s;
    t("AgentPageFour", (y = F(n), f = F(r), P = F(r), d = F(r), w = F(r), A = F(r), _ = F(r), v = F(r), S = F(r), $(I = g((C = e((k = class extends a {
        constructor(...t) {
            super(...t), i(this, "agentPage", C, this), i(this, "todayIncome", D, this), i(this, "weekIncome", R, this), i(this, "monthIncome", L, this), i(this, "todayActive", z, this), i(this, "weekActive", W, this), i(this, "monthActive", O, this), i(this, "incomeCowboyThisWeek", E, this), i(this, "incomeCowboyLastWeek", G, this), this._agentPageScript = null, this._hallScript = null
        }
        onLoad() {
            this._agentPageScript = this.agentPage.getComponent(l), this._hallScript = b.instance.getParentScene(c, this.node).getComponentInChildren(u)
        }
        start() {}
        setPage() {
            return this.requestAssociationStatisticPage()
        }
        resetPage() {}
        setInfo() {
            this.todayIncome.string = `${h.DisplayGold(this._agentPageScript.store.todayIncome)}`, this.weekIncome.string = `${h.DisplayGold(this._agentPageScript.store.weekIncome)}`, this.monthIncome.string = `${h.DisplayGold(this._agentPageScript.store.monthIncome)}`, this.todayActive.string = `${this._agentPageScript.store.todayActive}`, this.weekActive.string = `${this._agentPageScript.store.weekActive}`, this.monthActive.string = `${this._agentPageScript.store.monthActive}`, this.incomeCowboyThisWeek.string = `${h.DisplayGold(this._agentPageScript.store.incomeCowboyThisWeek)}`, this.incomeCowboyLastWeek.string = `${h.DisplayGold(this._agentPageScript.store.incomeCowboyLastWeek)}`
        }
        requestAssociationStatisticPage() {
            let t = {
                assoId: cc_mtt.vv.DataManager.ownAssociationId
            };
            return new Promise(((e, i) => {
                m.requestAssociationStatistic(t, (t => {
                    if (cc_mtt.vv.ConsoleLog.log("requestAssociationStatistic_RES", t), t.errorCode) {
                        let e = "ERROR_CODE_PKW." + t.errorCode;
                        i(e)
                    } else this._agentPageScript.store.reloadStatistic(t), e()
                }), (() => {
                    cc_mtt.vv.ConsoleLog.log("onerror:requestAssociationStatistic"), i("MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR")
                }))
            }))
        }
    }).prototype, "agentPage", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), D = e(k.prototype, "todayIncome", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), R = e(k.prototype, "weekIncome", [P], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = e(k.prototype, "monthIncome", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), z = e(k.prototype, "todayActive", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(k.prototype, "weekActive", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), O = e(k.prototype, "monthActive", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), E = e(k.prototype, "incomeCowboyThisWeek", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = e(k.prototype, "incomeCowboyLastWeek", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), e(k.prototype, "setInfo", [p], Object.getOwnPropertyDescriptor(k.prototype, "setInfo"), k.prototype), I = k)) || I) || I));
    o._RF.pop()
}