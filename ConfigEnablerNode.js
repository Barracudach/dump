import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as u from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as a from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as c from "./cv.js";

function main() {
    var d, h, g, f, p, C, b, y, w, v, m, A, O, E, x, z, D, S, _, I, N, U, k, F, M, P, R, L;
    n._RF.push({}, "df0efia7WRPRIFEcwxLQMjz", "ConfigEnablerNode", void 0);
    const {
        ccclass: V,
        property: W,
        executionOrder: j,
        menu: H
    } = a;
    var B = function(e) {
        return e[e.generalConfig = 0] = "generalConfig", e[e.loginConfig = 1] = "loginConfig", e[e.registrationConfig = 2] = "registrationConfig", e[e.lobbyConfig = 3] = "lobbyConfig", e[e.userProfileConfig = 4] = "userProfileConfig", e[e.gameConfig = 5] = "gameConfig", e[e.modulesConfig = 6] = "modulesConfig", e[e.securityConfig = 7] = "securityConfig", e[e.formsConfig = 8] = "formsConfig", e[e.walletConfig = 9] = "walletConfig", e[e.designConfig = 10] = "designConfig", e
    }(B || {});
    let Q = (d = V("ConfigEnablerNodeDecider"), h = W({
        tooltip: "Use && or || operator between this decider and the one behind\nIf this value is `false` then this decider will be grouped with the one behind him with || operator"
    }), g = W({
        type: o(B)
    }), f = W(r), p = W(s), d((y = t((b = class {
        constructor() {
            i(this, "useAndOperator", y, this), i(this, "config", w, this), i(this, "key", v, this), i(this, "negate", m, this)
        }
    }).prototype, "useAndOperator", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), w = t(b.prototype, "config", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return B.generalConfig
        }
    }), v = t(b.prototype, "key", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), m = t(b.prototype, "negate", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), C = b)) || C);
    e("ConfigEnablerNode", (A = H("Custom UI/Config Enabler"), O = j(-1), E = W([l]), x = W([Q]), z = W({
        tooltip: "Enable for countries which have extra currency"
    }), D = W({
        type: [r],
        tooltip: "List of country ISO codes in which you want enable this nodes.\n\nIf there is no element in this array nodes will be visible for all contries."
    }), S = W({
        type: [r],
        tooltip: "List of country ISO codes in which you want disable this nodes.\n\nIf there is no element in this array nodes will be visible for all contries."
    }), _ = W(s), I = W(s), V(N = A(N = O((k = t((U = class extends u {
        constructor(...e) {
            super(...e), i(this, "nodes", k, this), i(this, "deciders", F, this), i(this, "enableForCountriesWithExtraCurrency", M, this), i(this, "allowedContries", P, this), i(this, "excludedContries", R, this), i(this, "_shouldActive", L, this)
        }
        get shouldActive() {
            return this._shouldActive
        }
        set shouldActive(e) {
            this._shouldActive = e, this._shouldActive ? this.reloadConfig() : this.setActiveNodes(!1)
        }
        onLoad() {
            this.reloadConfig(), c.MessageCenter.register(c.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this.onUpdateConfig.bind(this), this.node)
        }
        onDestroy() {
            c.MessageCenter.unregister(c.Enum.MessageCenterAction.OnUpdateServerConfigSuccess, this.node)
        }
        reloadConfig() {
            let e = this.shouldEnable();
            this.setActiveNodes(e)
        }
        shouldEnable() {
            let e = !0,
                t = this.groupORDeciders();
            for (let i = 0, n = t.length; i < n; i++) e && (e = t[i]);
            if (this.enableForCountriesWithExtraCurrency) {
                let t = Object.keys(c.appConfig.getWalletConfig().countriesCurrency);
                e && (e = t.includes(c.dataHandler.getUserData().countryISO2))
            }
            return this.excludedContries.length > 0 && e && (e = !this.excludedContries.includes(c.dataHandler.getUserData().countryISO2)), this.allowedContries.length > 0 && e && (e = this.allowedContries.includes(c.dataHandler.getUserData().countryISO2)), e
        }
        groupORDeciders() {
            let e = [],
                t = !0,
                i = !1;
            for (let n = this.deciders.length - 1; n >= 0; n--) i && (t || (t = this.getValue(this.deciders[n]))), this.deciders[n].useAndOperator || 0 == n ? (!0 === i ? e.unshift(t) : e.unshift(this.getValue(this.deciders[n])), i = !1) : (!1 === i && (t = this.getValue(this.deciders[n])), i = !0);
            return e
        }
        onUpdateConfig() {
            this.reloadConfig()
        }
        setActiveNodes(e) {
            if (this.nodes && this.nodes.length > 0)
                for (let t = 0, i = this.nodes.length; t < i; t++) {
                    const i = this.nodes[t];
                    i && (i.active = e && this._shouldActive)
                } else this.node.active = e && this._shouldActive
        }
        getValue(e) {
            let t = c.tools.checkNestedValue(c.appConfig.baseConfig[B[e.config]], ...e.key.split("."));
            return e.negate ? !t : t
        }
    }).prototype, "nodes", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), F = t(U.prototype, "deciders", [x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), M = t(U.prototype, "enableForCountriesWithExtraCurrency", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !1
        }
    }), P = t(U.prototype, "allowedContries", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), R = t(U.prototype, "excludedContries", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), t(U.prototype, "shouldActive", [_], Object.getOwnPropertyDescriptor(U.prototype, "shouldActive"), U.prototype), L = t(U.prototype, "_shouldActive", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return !0
        }
    }), N = U)) || N) || N) || N));
    n._RF.pop()
}