import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as F from "./cc.js";
import * as A from "./cc.js";
import * as E from "./cc.js";
import * as i from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as c from "./Login_ts.js";
import * as D from "./httpApis.js";
import * as B from "./Pb.js";
import * as C from "./worldWebsocket.js";
import * as g from "./LoadingBlocker.js";
import * as h from "./AndroidBackButton.js";

function main() {
    var d, p, I, R, S, _, b, O, m, k, v, L, x, P;
    n._RF.push({}, "61041Zb43BNmYm+deA/VH/2", "RegisterInputPage", void 0);
    const {
        ccclass: w,
        property: f
    } = o;
    u("RegisterInputPage", (d = f(i), p = f(F), I = f(F), R = f(F), S = f(i), _ = f(i), w((m = t((O = class extends s {
        constructor(...u) {
            super(...u), e(this, "backButton", m, this), e(this, "passwordInput", k, this), e(this, "nicknameInput", v, this), e(this, "regCodeInput", L, this), e(this, "isHidButton", x, this), e(this, "nextButton", P, this), this.regex = /[!-\/:-@[-`{-~\u00A1-\u00A9\u00AB\u00AC\u00AE-\u00B1\u00B4\u00B6-\u00B8\u00BB\u00BF\u00D7\u00F7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061E\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B6A\u1B74-\u1B7C\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B98-\u2BC8\u2BCA-\u2BFE\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uABEB\uFB29\uFBB2-\uFBC1\uFD3E\uFD3F\uFDFC\uFDFD\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD\u{10100}-\u{10102}\u{10137}-\u{1013F}\u{10179}-\u{10189}\u{1018C}-\u{1018E}\u{10190}-\u{1019B}\u{101A0}\u{101D0}-\u{101FC}\u{1039F}\u{103D0}\u{1056F}\u{10857}\u{10877}\u{10878}\u{1091F}\u{1093F}\u{10A50}-\u{10A58}\u{10A7F}\u{10AC8}\u{10AF0}-\u{10AF6}\u{10B39}-\u{10B3F}\u{10B99}-\u{10B9C}\u{10F55}-\u{10F59}\u{11047}-\u{1104D}\u{110BB}\u{110BC}\u{110BE}-\u{110C1}\u{11140}-\u{11143}\u{11174}\u{11175}\u{111C5}-\u{111C8}\u{111CD}\u{111DB}\u{111DD}-\u{111DF}\u{11238}-\u{1123D}\u{112A9}\u{1144B}-\u{1144F}\u{1145B}\u{1145D}\u{114C6}\u{115C1}-\u{115D7}\u{11641}-\u{11643}\u{11660}-\u{1166C}\u{1173C}-\u{1173F}\u{1183B}\u{11A3F}-\u{11A46}\u{11A9A}-\u{11A9C}\u{11A9E}-\u{11AA2}\u{11C41}-\u{11C45}\u{11C70}\u{11C71}\u{11EF7}\u{11EF8}\u{12470}-\u{12474}\u{16A6E}\u{16A6F}\u{16AF5}\u{16B37}-\u{16B3F}\u{16B44}\u{16B45}\u{16E97}-\u{16E9A}\u{1BC9C}\u{1BC9F}\u{1D000}-\u{1D0F5}\u{1D100}-\u{1D126}\u{1D129}-\u{1D164}\u{1D16A}-\u{1D16C}\u{1D183}\u{1D184}\u{1D18C}-\u{1D1A9}\u{1D1AE}-\u{1D1E8}\u{1D200}-\u{1D241}\u{1D245}\u{1D300}-\u{1D356}\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u{1D800}-\u{1D9FF}\u{1DA37}-\u{1DA3A}\u{1DA6D}-\u{1DA74}\u{1DA76}-\u{1DA83}\u{1DA85}-\u{1DA8B}\u{1E95E}\u{1E95F}\u{1ECAC}\u{1ECB0}\u{1EEF0}\u{1EEF1}\u{1F000}-\u{1F02B}\u{1F030}-\u{1F093}\u{1F0A0}-\u{1F0AE}\u{1F0B1}-\u{1F0BF}\u{1F0C1}-\u{1F0CF}\u{1F0D1}-\u{1F0F5}\u{1F110}-\u{1F16B}\u{1F170}-\u{1F1AC}\u{1F1E6}-\u{1F202}\u{1F210}-\u{1F23B}\u{1F240}-\u{1F248}\u{1F250}\u{1F251}\u{1F260}-\u{1F265}\u{1F300}-\u{1F6D4}\u{1F6E0}-\u{1F6EC}\u{1F6F0}-\u{1F6F9}\u{1F700}-\u{1F773}\u{1F780}-\u{1F7D8}\u{1F800}-\u{1F80B}\u{1F810}-\u{1F847}\u{1F850}-\u{1F859}\u{1F860}-\u{1F887}\u{1F890}-\u{1F8AD}\u{1F900}-\u{1F90B}\u{1F910}-\u{1F93E}\u{1F940}-\u{1F970}\u{1F973}-\u{1F976}\u{1F97A}\u{1F97C}-\u{1F9A2}\u{1F9B0}-\u{1F9B9}\u{1F9C0}-\u{1F9C2}\u{1F9D0}-\u{1F9FF}\u{1FA60}-\u{1FA6D}]/gu, this.agentRegex = /^[a-z0-9]+$/i, this.passwordRegex = /[^\w-\/:;()$&@".,?!'[\]{}#%^*+=_\\|~<>€£¥•\s]/g, this.loginScript = null
        }
        start() {
            this.loginScript = r.getScene().getComponentInChildren("Login_ts")
        }
        update(u) {
            1 == this.node.active && ("" == this.passwordInput.string || "" == this.nicknameInput.string || this.passwordInput.string.length < 6 || null == this.passwordInput.string || null == this.nicknameInput.string ? this.nextButton.interactable = !1 : this.nextButton.interactable = !0, this.nextButton.getComponentInChildren(A).node.getComponent(E).color = this.nextButton.interactable ? a.WHITE : (new a).fromHEX("#9B9B9B"))
        }
        onIsHidClicked() {
            this.isHidButton.node.children[0].active = !this.isHidButton.node.children[0].active, this.isHidButton.node.children[1].active = !this.isHidButton.node.children[1].active, 1 == this.isHidButton.node.children[0].active ? this.passwordInput.inputFlag = F.InputFlag.SENSITIVE : this.passwordInput.inputFlag = F.InputFlag.PASSWORD
        }
        onPasswordChange() {
            this.passwordInput.string = this.passwordInput.string.replace(this.passwordRegex, "")
        }
        checkLength() {
            for (var u = 0, t = 0, e = 0, n = !1; e < this.nicknameInput.string.length; e++) this.agentRegex.test(this.nicknameInput.string[e]) ? u += 1 : u += 2, !n && u >= 12 && (n = !0, t = e + 1);
            u >= 12 && (this.nicknameInput.string = this.nicknameInput.string.substr(0, t))
        }
        checkInvalid() {
            this.nicknameInput.string = this.nicknameInput.string.replace(this.regex, "")
        }
        onTextChange() {
            this.checkInvalid(), this.checkLength()
        }
        onEditEnd() {
            this.checkInvalid(), this.checkLength()
        }
        onAgentCodeEditChange() {
            let u = "";
            for (let t = 0; t < this.regCodeInput.string.length; t++) {
                let e = this.regCodeInput.string[t];
                this.agentRegex.test(e) && (u += e)
            }
            this.regCodeInput.string = u
        }
        onBackClicked() {
            l.isNative && l.os === l.OS.ANDROID && h.getInstance().removeBackFunction("RegisterInputPage"), this.loginScript.moveFromCenter(c.REGISTER, c.VALID_CODE)
        }
        onRegisterClicked() {
            this.nextButton.enabled = !1;
            let u, t = this.loginScript._userAreaCode,
                e = this.loginScript._userValidCode,
                n = this.loginScript._userPhone,
                i = this.passwordInput.string,
                F = this.nicknameInput.string,
                o = this.regCodeInput.string;
            return o.length > 0 && o.length < 6 ? (cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", "REGISTER.AGENT_CODE_INVALID", !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: void 0
            }]), void(this.nextButton.enabled = !0)) : this.passwordRegex.test(i) ? (cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", "RESET_PASSWORD.PASSWORD_INVALID", !1, [{
                type: 0,
                text: "MESSAGE_DIALOG_BLOCKER.OK",
                callback: void 0
            }]), void(this.nextButton.enabled = !0)) : (u = o && "" !== o ? {
                AreaCode: t,
                Mobile: n,
                Password: i,
                RegCode: o,
                Nickname: F
            } : {
                AreaCode: t,
                Mobile: n,
                Password: i,
                Nickname: F
            }, g.show(this.loginScript.loginLoadingKey), void D.requestUserRegister(u, e, (u => {
                if (this.nextButton.enabled = !0, g.hide(this.loginScript.loginLoadingKey), u)
                    if (0 !== u.ErrorCode) {
                        let t = u.ErrorCode === B.commonProto.ErrorCode.Not_Found && "" != o ? "ASSOCIATION.AGENT_CODE_NOT_EXIST" : "ERROR_CODE_PKW." + u.ErrorCode;
                        cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", t, !1, [{
                            type: 0,
                            text: "MESSAGE_DIALOG_BLOCKER.OK",
                            callback: void 0
                        }])
                    } else cc_mtt.vv.ConsoleLog.log("Register rc", o), o && "" != o || (C.needBindAssoCode = !0), this.loginScript.areaCodeButton.node.getComponentInChildren(A).string = "+" + t, this.loginScript.userAccountValue.string = n, this.loginScript.userPasswordValue.string = i, this.loginScript.isRegister = !0, this.loginScript.delayLoadScene = !0, this.loginScript.onLoginConfirmClicked();
                else cc_mtt.vv.AssetsManager.showDialogBox("POPUP_TITLE.REMIND", "REGISTER.SERVER_NOT_RESPONSE", !1, [{
                    type: 0,
                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                    callback: void 0
                }])
            }), (u => {
                cc_mtt.vv.AssetsManager.showDialogBox("ERROR_CODE_PKW.TITLE", "MESSAGE_DIALOG_BLOCKER.NETWORK_ERROR", !1, [{
                    type: 0,
                    text: "MESSAGE_DIALOG_BLOCKER.OK",
                    callback: void 0
                }]), this.nextButton.enabled = !0, g.hide(this.loginScript.loginLoadingKey)
            })))
        }
    }).prototype, "backButton", [d], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = t(O.prototype, "passwordInput", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(O.prototype, "nicknameInput", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), L = t(O.prototype, "regCodeInput", [R], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), x = t(O.prototype, "isHidButton", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(O.prototype, "nextButton", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), b = O)) || b));
    n._RF.pop()
}