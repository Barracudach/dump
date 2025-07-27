import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as e from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as F from "./cc.js";
import * as s from "./cc.js";
import * as A from "./cc.js";
import * as l from "./cc.js";
import * as E from "./cc.js";
import * as D from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as C from "./PersonalSetting.js";
import * as k from "./Translator.js";
import * as B from "./NodePage.js";
import * as p from "./worldWebsocket.js";
import * as d from "./AndroidBackButton.js";
import * as N from "./NodeTools.js";

function main() {
    var m, S, _, L, b, v, I, O, R, T, G, f, y, P;
    e._RF.push({}, "2a53414d2BHdac0jA7l0b0b", "EditNickname", void 0);
    const {
        ccclass: M,
        property: w
    } = c;
    var x = n({
        none: 0,
        loading: 1,
        pass: 2,
        fail: 3
    });
    u("EditNickname", (m = w(s), S = w(a), _ = w([F]), L = w(r), b = w(o), v = w(o), M((R = t((O = class extends A {
        constructor(...u) {
            super(...u), i(this, "widget", R, this), i(this, "nickname", T, this), i(this, "checkSign", G, this), i(this, "blockInput", f, this), i(this, "costLabel", y, this), i(this, "remainLabel", P, this), this._personalSetting = null, this.cost = 50, this.isEdit = !1, this.isLoading = !1, this.isClick = !1, this.regexp = /[!-\/:-@[-`{-~\u00A1-\u00A9\u00AB\u00AC\u00AE-\u00B1\u00B4\u00B6-\u00B8\u00BB\u00BF\u00D7\u00F7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061E\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B6A\u1B74-\u1B7C\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B98-\u2BC8\u2BCA-\u2BFE\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uABEB\uFB29\uFBB2-\uFBC1\uFD3E\uFD3F\uFDFC\uFDFD\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD\u{10100}-\u{10102}\u{10137}-\u{1013F}\u{10179}-\u{10189}\u{1018C}-\u{1018E}\u{10190}-\u{1019B}\u{101A0}\u{101D0}-\u{101FC}\u{1039F}\u{103D0}\u{1056F}\u{10857}\u{10877}\u{10878}\u{1091F}\u{1093F}\u{10A50}-\u{10A58}\u{10A7F}\u{10AC8}\u{10AF0}-\u{10AF6}\u{10B39}-\u{10B3F}\u{10B99}-\u{10B9C}\u{10F55}-\u{10F59}\u{11047}-\u{1104D}\u{110BB}\u{110BC}\u{110BE}-\u{110C1}\u{11140}-\u{11143}\u{11174}\u{11175}\u{111C5}-\u{111C8}\u{111CD}\u{111DB}\u{111DD}-\u{111DF}\u{11238}-\u{1123D}\u{112A9}\u{1144B}-\u{1144F}\u{1145B}\u{1145D}\u{114C6}\u{115C1}-\u{115D7}\u{11641}-\u{11643}\u{11660}-\u{1166C}\u{1173C}-\u{1173F}\u{1183B}\u{11A3F}-\u{11A46}\u{11A9A}-\u{11A9C}\u{11A9E}-\u{11AA2}\u{11C41}-\u{11C45}\u{11C70}\u{11C71}\u{11EF7}\u{11EF8}\u{12470}-\u{12474}\u{16A6E}\u{16A6F}\u{16AF5}\u{16B37}-\u{16B3F}\u{16B44}\u{16B45}\u{16E97}-\u{16E9A}\u{1BC9C}\u{1BC9F}\u{1D000}-\u{1D0F5}\u{1D100}-\u{1D126}\u{1D129}-\u{1D164}\u{1D16A}-\u{1D16C}\u{1D183}\u{1D184}\u{1D18C}-\u{1D1A9}\u{1D1AE}-\u{1D1E8}\u{1D200}-\u{1D241}\u{1D245}\u{1D300}-\u{1D356}\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u{1D800}-\u{1D9FF}\u{1DA37}-\u{1DA3A}\u{1DA6D}-\u{1DA74}\u{1DA76}-\u{1DA83}\u{1DA85}-\u{1DA8B}\u{1E95E}\u{1E95F}\u{1ECAC}\u{1ECB0}\u{1EEF0}\u{1EEF1}\u{1F000}-\u{1F02B}\u{1F030}-\u{1F093}\u{1F0A0}-\u{1F0AE}\u{1F0B1}-\u{1F0BF}\u{1F0C1}-\u{1F0CF}\u{1F0D1}-\u{1F0F5}\u{1F110}-\u{1F16B}\u{1F170}-\u{1F1AC}\u{1F1E6}-\u{1F202}\u{1F210}-\u{1F23B}\u{1F240}-\u{1F248}\u{1F250}\u{1F251}\u{1F260}-\u{1F265}\u{1F300}-\u{1F6D4}\u{1F6E0}-\u{1F6EC}\u{1F6F0}-\u{1F6F9}\u{1F700}-\u{1F773}\u{1F780}-\u{1F7D8}\u{1F800}-\u{1F80B}\u{1F810}-\u{1F847}\u{1F850}-\u{1F859}\u{1F860}-\u{1F887}\u{1F890}-\u{1F8AD}\u{1F900}-\u{1F90B}\u{1F910}-\u{1F93E}\u{1F940}-\u{1F970}\u{1F973}-\u{1F976}\u{1F97A}\u{1F97C}-\u{1F9A2}\u{1F9B0}-\u{1F9B9}\u{1F9C0}-\u{1F9C2}\u{1F9D0}-\u{1F9FF}\u{1FA60}-\u{1FA6D}]/gu, this.alphabet = /^[a-z0-9]+$/i
        }
        init(u) {
            this._personalSetting = u, this.cost = cc_mtt.vv.DataManager.userData.NicknameReset ? 0 : 50, this.isEdit = !1, this.isLoading = !1, this.isClick = !1, this.updateUI(), l.isNative && this.nickname.setFocus(), l.isNative && l.os === l.OS.ANDROID && d.getInstance().addBackFunction(`SettingAction_${C.nickname}`, this._personalSetting.onClickBlockLayer.bind(this._personalSetting))
        }
        updateUI() {
            this.nickname.string = "", this.updateSign(x.none), this.costLabel.string = B.getCoinsLabel(this.cost), this.remainLabel.string = B.getCoinsLabel(cc_mtt.vv.DataManager.userData.Gold)
        }
        updateSign(u) {
            this.checkSign[0].enabled = u === x.fail, this.checkSign[1].enabled = u === x.pass, this.checkSign[2].enabled = u === x.loading, this.isLoading = this.checkSign[2].enabled, this.blockInput.enabled = this.isLoading, this.checkSign[2].enabled ? E(this.checkSign[2].node).by(.63, {
                angle: 360
            }).repeatForever().start() : g.stopAllByTarget(this.checkSign[2].node)
        }
        checkInvalid() {
            this.nickname.string = this.nickname.string.replace(this.regexp, "")
        }
        checkLength() {
            for (var u = 0, t = 0, i = 0; i < this.nickname.string.length; i++)
                if (this.alphabet.test(this.nickname.string[i]) ? u += 1 : u += 2, u >= 12) {
                    t = i + 1;
                    break
                } u >= 12 && (this.nickname.string = this.nickname.string.substr(0, t))
        }
        checkNickname() {
            return new Promise(((u, t) => {
                if (this._personalSetting.triggerLoading(!0), "" === this.nickname.string) u({
                    status: !1,
                    message: k("PERSONAL_SETTING.NICKNAME.DIALOG.EMPTY")
                });
                else if (this.nickname.string === this._personalSetting.nickname.string) u({
                    status: !1,
                    message: k("PERSONAL_SETTING.NICKNAME.DIALOG.SAME")
                });
                else {
                    let i = {
                        Nickname: this.nickname.string
                    };
                    p.checkNetwork("requestNicknameCheck") && t("checkNickname requestNicknameCheck return"), cc_mtt.vv.DataManager.worldNetwork.requestNicknameCheck(i, (t => {
                        t.ErrorCode ? u({
                            status: !1,
                            message: k(`ERROR_CODE_PKW.${t.ErrorCode}`)
                        }) : u({
                            status: !0
                        })
                    }))
                }
            }))
        }
        onEditBegin() {
            l.isNative && l.os === l.OS.ANDROID && h.reflection.callStaticMethod("com/cocos/game/AppActivity", "setLayout", "(F)V", -(N.getNodeHeight(this.node.parent) / 4 - this.node.parent.getComponent(D).convertToNodeSpaceAR(this.nickname.node.position).y)), this.isEdit = !0, this.updateSign(x.none)
        }
        onTextChange() {
            this.checkInvalid(), this.checkLength()
        }
        onEditEnd() {
            this.updateSign(x.loading), this.checkInvalid(), this.checkLength(), this.checkNickname().then((u => {
                this._personalSetting.triggerLoading(!1), setTimeout((() => {
                    u.status ? this.updateSign(x.pass) : (this.updateSign(x.fail), this._personalSetting.errorDialog(u.message, (() => {
                        this.isClick = !1
                    })))
                }), 1e3)
            })).catch((u => {
                this.updateSign(x.fail), this._personalSetting.errorDialog(k("PERSONAL_SETTING.GENERAL.DIALOG.NETWORK_ERROR"), (() => {
                    this.isClick = !1
                })), cc_mtt.vv.ConsoleLog.log(`onEditEnd ${u}`)
            })), this.isEdit = !1
        }
        changeDialog() {
            this._personalSetting.triggerLoading(!1);
            let u = {
                Translation: "PERSONAL_SETTING.NICKNAME.DIALOG.CHANGE",
                payload: u => k(u).replace("{0}", this._personalSetting.nickname.string).replace("{1}", this.nickname.string)
            };
            cc_mtt.vv.AssetsManager.showDialogBox("", u, !1, [{
                type: 1,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.CANCEL",
                callback: () => {
                    this.isClick = !1
                }
            }, {
                type: 0,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.CONFIRM",
                callback: () => {
                    this._personalSetting.triggerLoading(!0);
                    let u = {
                        UserId: cc_mtt.vv.DataManager.userId,
                        Nickname: this.nickname.string
                    };
                    p.checkNetwork("requestNicknameUpdate") ? this._personalSetting.errorDialog(k("PERSONAL_SETTING.GENERAL.DIALOG.NETWORK_ERROR"), (() => {
                        this.isClick = !1
                    })) : cc_mtt.vv.DataManager.worldNetwork.requestNicknameUpdate(u, (u => {
                        u.ErrorCode ? this._personalSetting.errorDialog(k(`ERROR_CODE_PKW.${u.ErrorCode}`), (() => {
                            this.isClick = !1
                        })) : (this._personalSetting.triggerNickname(!1), cc_mtt.vv.DataManager.userData.Gold = u.UserGold, cc_mtt.vv.DataManager.userData.Nickname = this.nickname.string, this._personalSetting.updateNickname(), this._personalSetting.triggerLoading(!1, !0))
                    }))
                }
            }], this._personalSetting._impokerHall.layers[7])
        }
        shopDialog() {
            this._personalSetting.triggerLoading(!1), cc_mtt.vv.AssetsManager.showDialogBox("", "PERSONAL_SETTING.NICKNAME.DIALOG.SHOP", !1, [{
                type: 1,
                text: "PERSONAL_SETTING.GENERAL.DIALOG.CANCEL",
                callback: () => {
                    this.isClick = !1
                }
            }, {
                type: 0,
                text: "PERSONAL_SETTING.NICKNAME.DIALOG.GOTO",
                callback: () => {
                    this._personalSetting._impokerHall.onClickTopUpOnOtherPage(this._personalSetting.node, void 0, !1), this.isClick = !1
                }
            }], this._personalSetting._impokerHall.layers[7])
        }
        onClickOutside() {
            return !(!this.isEdit && !this.isLoading) || (this._personalSetting.triggerNickname(!1), !1)
        }
        onClickFinish() {
            this.isClick || this.isLoading || (this.isClick = !0, this.checkNickname().then((u => {
                u.status ? !cc_mtt.vv.DataManager.userData.NicknameReset && cc_mtt.vv.DataManager.userData.Gold < this.cost ? this.shopDialog() : this.changeDialog() : this._personalSetting.errorDialog(u.message, (() => {
                    this.isClick = !1
                }))
            })).catch((u => {
                this._personalSetting.errorDialog(k("PERSONAL_SETTING.GENERAL.DIALOG.NETWORK_ERROR"), (() => {
                    this.isClick = !1
                })), cc_mtt.vv.ConsoleLog.log(`onClickFinish ${u}`)
            })))
        }
    }).prototype, "widget", [m], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), T = t(O.prototype, "nickname", [S], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), G = t(O.prototype, "checkSign", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), f = t(O.prototype, "blockInput", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = t(O.prototype, "costLabel", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), P = t(O.prototype, "remainLabel", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), I = O)) || I));
    e._RF.pop()
}