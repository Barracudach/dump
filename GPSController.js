import * as e from "./cc.js";
import * as c from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as s from "./Translator.js";

function main() {
    var a;
    o._RF.push({}, "82987I0mipI7qU+lgE+dZL5", "GPSController", void 0);
    const {
        ccclass: n
    } = i;
    t("default", n(a = class extends e {
        GPS(t) {
            if (c.isNative) try {
                if (this.checkGPS())
                    if (this.checkGPSPermission()) {
                        let o = this.getLocation();
                        if (void 0 !== o.lat && void 0 !== o.lng) t(o);
                        else if (c.os === c.OS.ANDROID)
                            if (l.reflection.callStaticMethod("com/cocos/game/AppActivity", "checkNetworkOpen", "()Z")) {
                                let t = {
                                    dualTranslation: ["GPS.GENERAL.DIALOG.NO_LOCATION", "GPS.GENERAL.DIALOG.SETTING_OR_RETRY"],
                                    dualResultArray: t => t.map((t => s(t))).join("")
                                };
                                this.noGPSDialog(t)
                            } else t(null);
                        else if (c.os === c.OS.IOS) {
                            let t = {
                                dualTranslation: ["GPS.GENERAL.DIALOG.NO_LOCATION", "GPS.GENERAL.DIALOG.SETTING_OR_RETRY"],
                                dualResultArray: t => t.map((t => s(t))).join("")
                            };
                            this.noGPSDialog(t)
                        }
                    } else this.settingDialog("GPS.GENERAL.DIALOG.NO_PERMISSION", (() => {
                        l.reflection.callStaticMethod("com/cocos/game/AppActivity", "requestGPSPermission", "()V")
                    }), (() => {
                        l.reflection.callStaticMethod("AppController", "gotoGPSAuth")
                    }));
                else this.settingDialog("GPS.GENERAL.DIALOG.NO_OPEN", (() => {
                    l.reflection.callStaticMethod("com/cocos/game/AppActivity", "requestGPSOpen", "()V")
                }), (() => {
                    l.reflection.callStaticMethod("AppController", "gotoGPSOpen")
                }))
            } catch (t) {
                cc_mtt.vv.ConsoleLog.log(t.stack.split("\n"))
            } else this.getLocation((o => {
                if (void 0 !== o.lat && void 0 !== o.lng) t(o);
                else {
                    let t = {
                        payload: t => o.msg
                    };
                    this.noGPSDialog(t)
                }
            }))
        }
        noGPSDialog(t) {
            cc_mtt.vv.AssetsManager.showDialogBox("GPS.GENERAL.DIALOG.TITLE", t, !1, [{
                type: 0,
                text: "GPS.GENERAL.BUTTON.CONFIRM",
                callback: void 0
            }])
        }
        settingDialog(t, o, e) {
            cc_mtt.vv.AssetsManager.showDialogBox("GPS.GENERAL.DIALOG.TITLE", t, !1, [{
                type: 0,
                text: "GPS.GENERAL.BUTTON.CANCEL",
                callback: void 0
            }, {
                type: 1,
                text: "GPS.GENERAL.BUTTON.SETTING",
                callback: () => {
                    c.os === c.OS.ANDROID ? o() : c.os === c.OS.IOS && e()
                }
            }])
        }
        getLocation(t) {
            if (c.isNative) {
                if (c.os === c.OS.ANDROID) return JSON.parse(l.reflection.callStaticMethod("com/cocos/game/AppActivity", "getLocation", "()Ljava/lang/String;"));
                if (c.os === c.OS.IOS) {
                    let t = l.reflection.callStaticMethod("AppController", "getLatitude"),
                        o = l.reflection.callStaticMethod("AppController", "getLongitude");
                    return "" !== t && "" !== o ? {
                        lat: t,
                        lng: o
                    } : {}
                }
            } else navigator.geolocation.getCurrentPosition((o => {
                cc_mtt.vv.ConsoleLog.log("gps granted", o.coords), t({
                    lat: o.coords.latitude,
                    lng: o.coords.longitude
                })
            }), (o => {
                cc_mtt.vv.ConsoleLog.log("gps error", o.message, o);
                let e = "";
                switch (o.code) {
                    case o.PERMISSION_DENIED:
                        cc_mtt.vv.ConsoleLog.log("gps permission denied"), e = s("GPS.GENERAL.DIALOG.NO_PERMISSION.DENIED." + (c.os === c.OS.ANDROID || c.os === c.OS.IOS ? "NATIVE" : "DEFAULT"));
                        break;
                    case o.POSITION_UNAVAILABLE:
                        cc_mtt.vv.ConsoleLog.log("gps position unavailable"), e = `${s("GPS.GENERAL.DIALOG.NO_LOCATION")}${s("GPS.GENERAL.DIALOG.SETTING_OR_RETRY")}`;
                        break;
                    case o.TIMEOUT:
                        cc_mtt.vv.ConsoleLog.log("gps timeout"), e = `${s("GPS.GENERAL.DIALOG.TIMEOUT")}${s("GPS.GENERAL.DIALOG.SETTING_OR_RETRY")}`
                }
                t({
                    msg: e
                })
            }))
        }
        checkGPSPermission() {
            return c.os === c.OS.ANDROID ? l.reflection.callStaticMethod("com/cocos/game/AppActivity", "checkGPSPermission", "()Z") : c.os === c.OS.IOS ? "true" === l.reflection.callStaticMethod("AppController", "getStatus:", "false") : void 0
        }
        checkGPS() {
            return c.os === c.OS.ANDROID ? l.reflection.callStaticMethod("com/cocos/game/AppActivity", "checkGPSOpen", "()Z") : c.os === c.OS.IOS ? "true" === l.reflection.callStaticMethod("AppController", "getStatus:", "true") : void 0
        }
    }) || a);
    o._RF.pop()
}