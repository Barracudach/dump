import * as i from "./rollupPluginModLoBabelHelpers.js";
import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as u from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as p from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as m from "./ImpokerHall.js";
import * as f from "./TransferHistoryPrefab.js";
import * as _ from "./TransferPopUp.js";
import * as b from "./Translator.js";
import * as S from "./httpApis.js";
import * as w from "./mttconfig.js";
import * as C from "./md5.mjs_cjs=&original=.js";
import * as R from "./NodePage.js";
import * as P from "./CommonTools.js";
import * as B from "./AreaCodeInputPage.js";

function main() {
    var y, T, D, L, N, M, E, I, v, A, F, k, O, z, U, H, q, x, K, G, j, J, W, $, V, Y, Q, X, Z, tt, et, it, rt, nt, ot, at;
    r._RF.push({}, "218aeUw2JdIipqLRsWMKMvW", "TransferPrefab", void 0);
    const {
        ccclass: st,
        property: lt
    } = u, ht = n({
        NORMAL: 0,
        TRANS_TO_CLICKED: 1,
        TRANS_FROM_CLICKED: 3
    });
    t("TransferPrefab", (y = lt(o), T = lt(o), D = lt(o), L = lt(a), N = lt(a), M = lt(a), E = lt(a), I = lt(a), v = lt(a), A = lt(a), F = lt(s), k = lt(s), O = lt(s), z = lt(l), U = lt(l), H = lt(l), q = lt([h]), st((G = e((K = class extends c {
        constructor(...t) {
            super(...t), i(this, "phone", G, this), i(this, "password", j, this), i(this, "coins", J, this), i(this, "backButton", W, this), i(this, "areaCodeButton", $, this), i(this, "historyButton", V, this), i(this, "androidButton", Y, this), i(this, "iosButton", Q, this), i(this, "withdrawButton", X, this), i(this, "depositButton", Z, this), i(this, "withdrawBtnLabel", tt, this), i(this, "depositBtnLabel", et, this), i(this, "currentGold", it, this), i(this, "historyPrefab", rt, this), i(this, "transferPopUp", nt, this), i(this, "areaCodePrefab", ot, this), i(this, "radioIcons", at, this), this._hallScript = null, this._historyPage = null, this._transferPopUp = null, this._areaCodePage = null, this._areacode = "", this._mobileNumber = 0, this._password = "", this._platform = "", this._amount = 0, this._transferReqMem = "transferSmsRequest", this._buttonStatusMem = "buttonStatus", this.passwordRegex = /[^\w-\/:;()$&@".,?!'[\]{}#%^*+=_\\|~<>€£¥•\s]/g
        }
        onLoad() {
            this._hallScript = R.instance.getParentScene(p, this.node).getComponentInChildren(m), this._transferReqMem = this._transferReqMem + cc_mtt.vv.DataManager.userId, this.updateCurrentGold()
        }
        start() {}
        setPage() {
            this.resumeCountDown()
        }
        resetPage() {
            this.radioControl(-1), this.areaCodeButton.getComponentInChildren(s).string = "+86", this.phone.string = "", this.password.string = "", this.coins.string = "", this.onEditReturn()
        }
        radioControl(t) {
            for (let e = 0; e < this.radioIcons.length; e++) this.radioIcons[e].children[0].active = e != t, this.radioIcons[e].children[1].active = e == t;
            this._platform = t.toString()
        }
        onAndroidClicked() {
            this.radioControl(1), this.onEditReturn()
        }
        onIOSClicked() {
            this.radioControl(0), this.onEditReturn()
        }
        checkDecimal() {
            let t = Number(this.coins.string);
            t = t < 0 ? Math.abs(t) : t, this.coins.string = (Math.floor(100 * t) / 100).toString(), this.onEditReturn()
        }
        updateCurrentGold() {
            this.currentGold.string = cc_mtt.vv.DataManager.userData.Gold.toFixed(2)
        }
        startCountDown(t) {
            let e = (new Date).getTime() + 6e4;
            d.localStorage.setItem(this._transferReqMem, JSON.stringify(e)), d.localStorage.setItem(this._buttonStatusMem, (t ? ht.TRANS_FROM_CLICKED : ht.TRANS_TO_CLICKED).toString()), this.onEditReturn(), t ? this.countDown(e, this.depositBtnLabel, b("TRANSFER.TRANSFER_FROM")) : this.countDown(e, this.withdrawBtnLabel, b("TRANSFER.TRANSFER_TO"))
        }
        resumeCountDown() {
            let t = JSON.parse(d.localStorage.getItem(this._transferReqMem)),
                e = JSON.parse(d.localStorage.getItem(this._buttonStatusMem));
            if (t && t > (new Date).getTime() && e) switch (e) {
                case ht.TRANS_FROM_CLICKED:
                    this.countDown(t, this.depositBtnLabel, b("TRANSFER.TRANSFER_FROM"));
                    break;
                case ht.TRANS_TO_CLICKED:
                    this.countDown(t, this.withdrawBtnLabel, b("TRANSFER.TRANSFER_TO"))
            } else this.resetBtnLabels()
        }
        countDown(t, e, i) {
            if ((new Date).getTime() >= t) return void this.resetBtnLabels();
            let r = Math.ceil((t - (new Date).getTime()) / 1e3);
            e.string = i + "(" + r + ")", this.scheduleOnce((() => {
                this.countDown(t, e, i)
            }), 1)
        }
        resetBtnLabels() {
            this.withdrawBtnLabel.string = b("TRANSFER.TRANSFER_TO"), this.depositBtnLabel.string = b("TRANSFER.TRANSFER_FROM"), d.localStorage.setItem(this._buttonStatusMem, ht.NORMAL.toString()), this.onEditReturn()
        }
        enableButtons(t) {
            this.withdrawButton.interactable = t, this.depositButton.interactable = t
        }
        onAreaCodeClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._areaCodePage || (this._areaCodePage = g(this.areaCodePrefab), this._areaCodePage.parent = this._hallScript.layers[0], this._areaCodePage.getComponent(P)._pageComeFrom = this.node), this._hallScript.movePageFromRight(this._areaCodePage, this.node), setTimeout((() => {
                this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
        onBackClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._hallScript.movePageToRight(this.node), setTimeout((() => {
                this.resetPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * this._hallScript.pageActionSpeed)
        }
        onHistoryClicked() {
            this._hallScript.controlHallBlockLayer(!0, this.name), this._historyPage || (this._historyPage = g(this.historyPrefab), this._historyPage.parent = this._hallScript.layers[0], this._historyPage.getComponent(f)._pageComeFrom = this.node), this._hallScript.movePageFromRight(this._historyPage, this.node), setTimeout((() => {
                this._historyPage.getComponent(f).setPage(), this._hallScript.controlHallBlockLayer(!1, this.name)
            }), 1100 * cc_mtt.vv.DataManager.pageActionSpeed)
        }
        legacyImpokerLogin(t, e, i, r) {
            cc_mtt.vv.DataManager.worldNetwork.requestLegacyImpokerLogin(t, (t => {
                if (t && !t.errorCode)
                    if (r && t.balance < C.roundValue(Number(this.coins.string))) this._hallScript.hidLoading((() => {
                        this._hallScript.callPopUpBox("TRANSFER.NO_MONEY", void 0)
                    }));
                    else {
                        let n = B(`${e}${w.smsChecksumSalt}${i}`),
                            o = e + "/" + i + "/" + n;
                        this.startCountDown(r), S.requestTransferSMS(o, (n => {
                            this.handleSmsStatus(n, (() => {
                                this._hallScript.hidLoading((() => {
                                    let n = this._transferPopUp.getComponent(_);
                                    n.updateTips(r), n.setInfo((r ? 1 : -1) * Number(this.coins.string), t, e, i), n.zoomIn()
                                }))
                            }))
                        }))
                    }
                else this._hallScript.hidLoading((() => {
                    let e = 403 === t.errorCode ? "TRANSFER.FORBIDDEN" : "ERROR_CODE_PKW." + t.errorCode;
                    this._hallScript.callPopUpBox(e, void 0)
                }))
            }))
        }
        onWithdrawClicked() {
            if (C.coolDownButton(this.withdrawButton, this), cc_mtt.vv.DataManager.userData.Gold < C.roundValue(Number(this.coins.string))) {
                let t = "TRANSFER.NO_MONEY";
                this._hallScript.callPopUpBox(t, void 0)
            } else {
                this._hallScript.showLoading(), this._transferPopUp || (this._transferPopUp = g(this.transferPopUp), this._transferPopUp.parent = this.node);
                let t = cc_mtt.vv.DataManager.userData.AreaCode,
                    e = cc_mtt.vv.DataManager.userData.Mobile,
                    i = {
                        areaCode: this.areaCodeButton.getComponentInChildren(s).string.slice(1),
                        username: this.phone.string,
                        password: this.password.string,
                        platform: this._platform
                    };
                this.legacyImpokerLogin(i, t, e, !1)
            }
        }
        onDepositClicked() {
            C.coolDownButton(this.depositButton, this), this._hallScript.showLoading(), this._transferPopUp || (this._transferPopUp = g(this.transferPopUp), this._transferPopUp.parent = this.node);
            let t = this.areaCodeButton.getComponentInChildren(s).string.slice(1),
                e = this.phone.string,
                i = {
                    areaCode: t,
                    username: e,
                    password: this.password.string,
                    platform: this._platform
                };
            this.legacyImpokerLogin(i, t, e, !0)
        }
        handleSmsStatus(t, e) {
            t === cc_mtt.vv.DataManager.SMSStatus[0] ? e() : this._hallScript.hidLoading((() => {
                let e = C.getSmsErrorStr(t);
                this._hallScript.controlHallBlockLayer(!1, this.name), this._hallScript.callPopUpBox(e, void 0)
            }))
        }
        onEditReturn() {
            this.password.string = this.password.string.replace(this.passwordRegex, "");
            let t = JSON.parse(d.localStorage.getItem(this._transferReqMem)),
                e = this.phone.string.length > 0 && this.password.string.length >= 6 && Number(this.coins.string) > 0 && this._platform.length > 0;
            (!t || t < (new Date).getTime()) && e ? this.enableButtons(!0) : this.enableButtons(!1)
        }
    }).prototype, "phone", [y], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), j = e(K.prototype, "password", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), J = e(K.prototype, "coins", [D], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), W = e(K.prototype, "backButton", [L], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), $ = e(K.prototype, "areaCodeButton", [N], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), V = e(K.prototype, "historyButton", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Y = e(K.prototype, "androidButton", [E], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Q = e(K.prototype, "iosButton", [I], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), X = e(K.prototype, "withdrawButton", [v], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), Z = e(K.prototype, "depositButton", [A], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), tt = e(K.prototype, "withdrawBtnLabel", [F], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), et = e(K.prototype, "depositBtnLabel", [k], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), it = e(K.prototype, "currentGold", [O], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), rt = e(K.prototype, "historyPrefab", [z], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), nt = e(K.prototype, "transferPopUp", [U], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), ot = e(K.prototype, "areaCodePrefab", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), at = e(K.prototype, "radioIcons", [q], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return []
        }
    }), x = K)) || x));
    r._RF.pop()
}