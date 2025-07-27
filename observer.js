import * as t from "./cc.js";
import * as s from "./cc.js";
import * as r from "./mobx.cjs.production.min.mjs_cjs=&original=.js";

function main() {
    s._RF.push({}, "48f5cJ7AMRIGpo/M3QyoZsM", "observer", void 0), t.isBrowser && (window.mobx = r), r.configure({
        enforceActions: "observed"
    });
    o("observer", (o => class extends o {
        constructor(...o) {
            super(...o), this._disposer = [], this._reaction = void 0, this._autorun = void 0
        }
        onLoad() {
            super.onLoad && super.onLoad(), this.setRenders()
        }
        onDestroy() {
            super.onDestroy && super.onDestroy(), this._disposer && this._disposer.forEach((o => o())), this._disposer.length = 0
        }
        setRenders() {
            this.__proto__.__proto__._disposer && (this._disposer = this.__proto__.__proto__._disposer, this._disposer.forEach((o => o())), this._disposer = []), this.__proto__.__proto__._autorun && (this._autorun = this.__proto__.__proto__._autorun, this._disposer.push(...this._autorun.map((o => r.autorun(this[o].bind(this)))))), this.__proto__.__proto__._reaction && (this._reaction = this.__proto__.__proto__._reaction, this._disposer.push(...this._reaction.map((o => this[o]()))))
        }
    })), o("render", ((o, s, t) => {
        let r = o._autorun;
        r || (r = o._autorun = []), r.push(s)
    })), o("reactor", ((o, s, t) => {
        let r = o._reaction;
        r || (r = o._reaction = []), r.push(s)
    })), o("react", ((o, s) => r.reaction(o, s, {
        fireImmediately: !0
    })));
    s._RF.pop()
}