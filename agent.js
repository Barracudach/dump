import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as o from "./mobx.cjs.production.min.mjs_cjs=&original=.js";

function main() {
    var n, a, l, b, c, s, u, m, p, h, y, w, d, f, g, v, z, k, D, M, C, I, A, O, j, L, W, T, R, P, S, B, G, _, x, F, V, H, K, U, q, E, J, N, Q, X, Y, Z, $, ee, te, ie, re, oe, ne;
    r._RF.push({}, "b7c4fV/lVdOcK3weC1UI+CD", "agent", void 0);
    e("agentStore", (n = o.observable, a = o.observable, l = o.observable, b = o.observable, c = o.observable, s = o.observable, u = o.observable, m = o.observable, p = o.observable, h = o.observable, y = o.observable, w = o.observable, d = o.observable, f = o.observable, g = o.observable, v = o.observable, z = o.observable, k = o.observable, D = o.observable, M = o.observable, C = o.observable, I = o.observable, A = o.observable, O = o.observable, j = o.action, L = o.action, W = o.action, T = o.action, R = o.action, P = o.action, B = t((S = class {
        constructor() {
            i(this, "members", B, this), i(this, "onlineMember", G, this), i(this, "newMember", _, this), i(this, "incomeDownline", x, this), i(this, "incomeMember", F, this), i(this, "incomeGuessCard", V, this), i(this, "incomeCowboy", H, this), i(this, "balance", K, this), i(this, "todayIncome", U, this), i(this, "weekIncome", q, this), i(this, "monthIncome", E, this), i(this, "todayActive", J, this), i(this, "weekActive", N, this), i(this, "monthActive", Q, this), i(this, "incomeCowboyThisWeek", X, this), i(this, "incomeCowboyLastWeek", Y, this), i(this, "withdrawRecords", Z, this), i(this, "memberList", $, this), i(this, "userId", ee, this), i(this, "nickname", te, this), i(this, "regTime", ie, this), i(this, "lastAction", re, this), i(this, "coin", oe, this), i(this, "contribution", ne, this), o.makeObservable(this)
        }
        reloadDetail(e) {
            this.members = e.members, this.onlineMember = e.onlineMember, this.newMember = e.newMember, this.incomeDownline = e.incomeDownline, this.incomeMember = e.incomeMember, this.incomeGuessCard = e.incomeGuessCard, this.incomeCowboy = e.incomeCowboy, this.balance = e.balance
        }
        reloadStatistic(e) {
            this.todayIncome = e.todayIncome, this.weekIncome = e.weekIncome, this.monthIncome = e.monthIncome, this.todayActive = e.todayActive, this.weekActive = e.weekActive, this.monthActive = e.monthActive, this.incomeCowboyThisWeek = e.incomeCowboyThisWeek, this.incomeCowboyLastWeek = e.incomeCowboyLastWeek
        }
        reloadBalance(e) {
            this.balance = e.remain
        }
        reloadWithdrawRecords(e) {
            this.withdrawRecords = e.records.sort(((e, t) => t.date.getTime() - e.date.getTime()))
        }
        reloadMemberDetail(e) {
            this.userId = e.userId, this.nickname = e.nickname, this.regTime = e.regTime, this.lastAction = e.lastAction, this.coin = e.coin
        }
        reloadMemberList(e) {
            this.memberList = e
        }
    }).prototype, "members", [n], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), G = t(S.prototype, "onlineMember", [a], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), _ = t(S.prototype, "newMember", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), x = t(S.prototype, "incomeDownline", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), F = t(S.prototype, "incomeMember", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), V = t(S.prototype, "incomeGuessCard", [s], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), H = t(S.prototype, "incomeCowboy", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), K = t(S.prototype, "balance", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), U = t(S.prototype, "todayIncome", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), q = t(S.prototype, "weekIncome", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), E = t(S.prototype, "monthIncome", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), J = t(S.prototype, "todayActive", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), N = t(S.prototype, "weekActive", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Q = t(S.prototype, "monthActive", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), X = t(S.prototype, "incomeCowboyThisWeek", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Y = t(S.prototype, "incomeCowboyLastWeek", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), Z = t(S.prototype, "withdrawRecords", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), $ = t(S.prototype, "memberList", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), ee = t(S.prototype, "userId", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), te = t(S.prototype, "nickname", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), ie = t(S.prototype, "regTime", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), re = t(S.prototype, "lastAction", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), oe = t(S.prototype, "coin", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), ne = t(S.prototype, "contribution", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 0
        }
    }), t(S.prototype, "reloadDetail", [j], Object.getOwnPropertyDescriptor(S.prototype, "reloadDetail"), S.prototype), t(S.prototype, "reloadStatistic", [L], Object.getOwnPropertyDescriptor(S.prototype, "reloadStatistic"), S.prototype), t(S.prototype, "reloadBalance", [W], Object.getOwnPropertyDescriptor(S.prototype, "reloadBalance"), S.prototype), t(S.prototype, "reloadWithdrawRecords", [T], Object.getOwnPropertyDescriptor(S.prototype, "reloadWithdrawRecords"), S.prototype), t(S.prototype, "reloadMemberDetail", [R], Object.getOwnPropertyDescriptor(S.prototype, "reloadMemberDetail"), S.prototype), t(S.prototype, "reloadMemberList", [P], Object.getOwnPropertyDescriptor(S.prototype, "reloadMemberList"), S.prototype), S));
    r._RF.pop()
}