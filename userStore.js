import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as o from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as n from "./mobx.cjs.production.min.mjs_cjs=&original=.js";
import * as i from "./mobx.cjs.production.min.mjs_cjs=&original=.js";
import * as a from "./websocket.js";
import * as l from "./Pb.js";

function main() {
    var c, p, u, d, g, b, h, f, y, m, L;
    e({
        InitialUserStore: function() {
            S || (S = e("UserStore", new U(new i(n.WORLD, a.commonProto))));
            return S
        },
        UserStore: void 0
    }), r._RF.push({}, "2ac29O5kLtNdqS3HRvGL7cT", "userStore", void 0);
    let S, U = (c = l.observable, p = l.observable, u = l.observable, d = l.action, g = l.action, b = l.action, f = t((h = class {
        constructor(e) {
            this.ws = void 0, o(this, "data", f, this), o(this, "errorMessage", y, this), o(this, "lastLoginKey", m, this), o(this, "InfoUpdated", L, this), l.makeObservable(this);
            const t = a.commonProto.SocketMessageId;
            this.lastLoginKey = s.localStorage.getItem("userLoginKey"), e.AddMessageHandler(t.User_Login_Response, this.InfoUpdated), e.AddMessageHandler(t.User_Info_Updated, this.InfoUpdated), e.AddMessageHandler(t.User_Logout_Response, this.InfoUpdated), l.reaction((() => this.data), (e => {})), this.ws = e
        }
        Login(e, t) {
            "" != e ? "" != t ? (this.lastLoginKey = e, s.localStorage.setItem("userLoginKey", e), this.ws.Send(a.commonProto.User_Login_Request.create({
                Username: e,
                Password: t
            }))) : this.errorMessage = "請輸入密碼" : this.errorMessage = "請輸入用戶名"
        }
        SetErrorMessage(e) {
            this.errorMessage = e
        }
    }).prototype, "data", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), y = t(h.prototype, "errorMessage", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), m = t(h.prototype, "lastLoginKey", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
    }), L = t(h.prototype, "InfoUpdated", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return e => {
                this.data = e.UserData ? e.UserData : null
            }
        }
    }), t(h.prototype, "Login", [g], Object.getOwnPropertyDescriptor(h.prototype, "Login"), h.prototype), t(h.prototype, "SetErrorMessage", [b], Object.getOwnPropertyDescriptor(h.prototype, "SetErrorMessage"), h.prototype), h);
    r._RF.pop()
}