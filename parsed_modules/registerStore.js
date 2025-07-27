import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as s from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as i from "./mobx.cjs.production.min.mjs_cjs=&original=.js";
import * as o from "./md5.mjs_cjs=&original=.js";
import * as n from "./mttconfig.js";
import * as a from "./Pb.js";
import * as p from "./Translator.js";

function main() {
    var c, R, g, u, m, l, h, y, b, T, S, E, f, d, N, O, I, C, M, A, G, _;
    r._RF.push({}, "179b2/sA7NE5LsldAyaCVSa", "registerStore", void 0);
    let v = e("registerStore", (c = a.observable, R = a.observable, g = a.observable, u = a.observable, m = a.observable, l = a.action, h = a.action, y = a.action, b = a.action, T = a.action, S = a.action, E = a.action, (_ = class e {
        constructor() {
            t(this, "message1", d, this), t(this, "messageType1", N, this), t(this, "message2", O, this), t(this, "messageType2", I, this), t(this, "step", C, this), t(this, "responseRegister", M, this), t(this, "responseSMSCheck", A, this), t(this, "responseSmsCode", G, this), a.makeObservable(this)
        }
        Reset() {
            this.step = 1, this.message1 = n("REGISTER.WARNING_00"), this.messageType1 = e.MessageType.INFO, this.message2 = "", this.messageType2 = e.MessageType.INFO
        }
        RequestRegister(s, t, r, a, p, c, R, g, u) {
            if ("" !== s && s || (s = "86"), !p || !c) return this.message2 = n("REGISTER.WARNING_0"), void(this.messageType2 = e.MessageType.ERROR);
            if (c !== R) return this.message2 = n("REGISTER.WARNING_1"), void(this.messageType2 = e.MessageType.ERROR);
            const m = o.modelProto.User.create({
                    AreaCode: s,
                    Mobile: t,
                    RegCode: a,
                    Username: p,
                    Password: c,
                    Nickname: g
                }),
                l = o.commonProto.UserRegisterRequest.create({
                    User: m,
                    validationCode: r
                });
            fetch(`${i.registerApiServerHostUrl}/register`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                body: l.encode()
            }).then((e => {
                200 === e.status && e.arrayBuffer().then((e => {
                    this.responseRegister(e) && u()
                }))
            }))
        }
        RequestSMSCheck(s, t, r) {
            const {
                MessageType: o
            } = e;
            t && s ? r ? fetch(`${i.smsApiServerHostUrl}/smsCheck/${s}/${t}/${r}`).then((e => {
                e.text().then(this.responseSMSCheck)
            })) : (this.message1 = n("REGISTER.WARNING_6"), this.messageType1 = o.ERROR) : (this.message1 = n("REGISTER.WARNING_00"), this.messageType1 = o.ERROR)
        }
        RequestSmsCode(s, t) {
            const {
                MessageType: r
            } = e;
            t && s ? fetch(`${i.smsApiServerHostUrl}/sms/${s}/${t}/${p(`${s}${i.smsChecksumSalt}${t}`)}`).then((e => {
                e.text().then(this.responseSmsCode)
            })) : (this.message1 = n("REGISTER.WARNING_3"), this.messageType1 = r.ERROR)
        }
    }).MessageType = {
        INFO: 0,
        WARN: 1,
        ERROR: 2
    }, _.SmsResultTxt = {
        SENT: "sent",
        CHECKSUM: "checksum",
        ERROR: "error",
        WAIT: "wait"
    }, d = s((f = _).prototype, "message1", [c], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), N = s(f.prototype, "messageType1", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return v.MessageType.INFO
        }
    }), O = s(f.prototype, "message2", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return ""
        }
    }), I = s(f.prototype, "messageType2", [u], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return v.MessageType.INFO
        }
    }), C = s(f.prototype, "step", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return 1
        }
    }), s(f.prototype, "Reset", [l], Object.getOwnPropertyDescriptor(f.prototype, "Reset"), f.prototype), s(f.prototype, "RequestRegister", [h], Object.getOwnPropertyDescriptor(f.prototype, "RequestRegister"), f.prototype), M = s(f.prototype, "responseRegister", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return e => {
                const s = o.commonProto.UserRegisterResponse.decode(new Uint8Array(e));
                if (0 != s.ErrorCode) {
                    const e = "ERROR_CODE_PKW." + s.ErrorCode;
                    return this.message2 = e, this.messageType2 = v.MessageType.ERROR, !1
                }
                return !0
            }
        }
    }), s(f.prototype, "RequestSMSCheck", [b], Object.getOwnPropertyDescriptor(f.prototype, "RequestSMSCheck"), f.prototype), A = s(f.prototype, "responseSMSCheck", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return e => {
                e.includes("1") ? this.step = 2 : (this.message1 = n("REGISTER.WARNING_6"), this.messageType1 = v.MessageType.ERROR)
            }
        }
    }), s(f.prototype, "RequestSmsCode", [S], Object.getOwnPropertyDescriptor(f.prototype, "RequestSmsCode"), f.prototype), G = s(f.prototype, "responseSmsCode", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return e => {
                const {
                    MessageType: s,
                    SmsResultTxt: t
                } = v;
                switch (e) {
                    case t.SENT:
                        this.message1 = n("REGISTER.WARNING_7");
                        break;
                    case t.CHECKSUM:
                    case t.ERROR:
                        this.message1 = n("REGISTER.WARNING_4"), this.messageType1 = s.ERROR;
                        break;
                    case t.WAIT:
                        this.message1 = n("REGISTER.WARNING_9"), this.messageType1 = s.ERROR
                }
            }
        }
    }), f));
    r._RF.pop()
}