import * as t from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cc.js";
import * as i from "./cv.js";
import * as o from "./DeeplinksDataHandler.js";
import * as r from "./analytics-node.js";

function main() {
    var s, c;
    t._RF.push({}, "effd7xkZ3JPOb9MLfur5uVv", "SegmentTools", void 0);
    const {
        ccclass: l
    } = n;
    e("default", l(((c = class e {
        constructor() {
            this.config = null, this.analytics = null, this.config = i.appConfig.getModulesConfig().analytics, this.config.enabled
        }
        static getInstance() {
            return e.g_instance || (e.g_instance = new e, e.g_instance.init()), e.g_instance
        }
        init() {
            if (!this.config.enabled) return;
            let e = i.appConfig.isProd ? this.config.segmentTool_KeyProd : this.config.segmentTool_KeyDev;
            this.analytics = new r({
                writeKey: e
            })
        }
        sendEvent(e, t, n = "", r = null) {
            var s;
            if (!this.config.enabled) return;
            let c = JSON.parse(i.native.GenerateDeviceInfo()),
                l = {
                    application: this.config.segmentTool_AppName,
                    functionality: n,
                    isWebApp: i.appConfig.isWebApp,
                    platform: i.config.getPlatform(),
                    platformVersion: c.dversion,
                    screenName: e,
                    appVersion: i.config.GET_CLIENT_VERSION(),
                    platformType: i.config.IS_PC() ? "desktop" : "mobile"
                },
                d = i.native.getAdvertisingId(!1);
            var g = o.GetLastAttributedDataString(),
                f = null;
            if (null != g && "" != g) try {
                f = JSON.parse(g)
            } catch (e) {
                console.log("Parse Deeplink Data Json fail")
            }
            f && i.tools.copyObjectProperties(l, f), i.tools.copyObjectProperties(l, r);
            let p = i.native.GetLocation(),
                u = a.windowSize,
                v = {
                    library: {
                        name: i.config.getPlatform()
                    },
                    app: {
                        name: i.appConfig.getAppTitle(),
                        version: i.config.GET_CLIENT_VERSION()
                    },
                    device: {
                        type: i.config.getPlatform(),
                        id: i.native.GetDeviceUUID(!1, !0),
                        model: c.dmodel,
                        name: c.dname,
                        advertisingId: d
                    },
                    locale: i.config.getCurrentLanguage().toString(),
                    location: {
                        latitude: p && p.latitude ? p.latitude : "",
                        longitude: p && p.longitude ? p.longitude : "",
                        speed: (null == (s = i.netWorkManager) ? void 0 : s.connectionDelayMax) ?? 0
                    },
                    network: {
                        wifi: i.native.CheckNetWork()
                    },
                    os: {
                        name: i.config.getPlatform(),
                        version: c.dversion
                    },
                    screen: {
                        width: u.width,
                        height: u.height
                    },
                    traits: {
                        anonymousId: i.native.GetDeviceUUID()
                    }
                };
            this.analytics.track({
                anonymousId: i.native.GetDeviceUUID(),
                userId: i.dataHandler.getUserData().getUserIdS(),
                event: t,
                properties: l,
                context: v
            }), console.log("[SegmentTool => track] anonymousId:" + i.native.GetDeviceUUID() + " userId:" + i.dataHandler.getUserData().getUserIdS() + " event:" + t + " Application:" + i.config.getPlatform() + " currentScreen:" + e + " appVersion:" + i.config.GET_CLIENT_VERSION() + " properties:" + JSON.stringify(r))
        }
        alias() {
            this.config.enabled && (this.analytics.alias({
                previousId: i.native.GetDeviceUUID(),
                userId: i.dataHandler.getUserData().getUserIdS()
            }), console.log("previousId:" + i.native.GetDeviceUUID() + "userId:" + i.dataHandler.getUserData().getUserIdS()))
        }
        identify(e) {
            if (!this.config.enabled) return;
            this.alias();
            const {
                functionality: t,
                currentScreen: n
            } = e;
            let a = new Date,
                o = JSON.parse(i.native.GenerateDeviceInfo());
            this.analytics.identify({
                anonymousId: i.native.GetDeviceUUID(),
                userId: i.dataHandler.getUserData().getUserIdS(),
                traits: {
                    application: this.config.segmentTool_AppName,
                    functionality: t,
                    isWebApp: i.appConfig.isWebApp,
                    platform: i.config.getPlatform(),
                    platformVersion: o.dversion,
                    screenName: n,
                    appVersion: i.config.GET_CLIENT_VERSION(),
                    gender: 1 == i.dataHandler.getUserData().gender ? "man" : "woman",
                    createdAt: a.toISOString(),
                    areaCode: i.dataHandler.getUserData().areaCode,
                    countryIsoCode: i.dataHandler.getUserData().countryISO2,
                    invitationCode: "",
                    platformType: i.config.IS_PC() ? "desktop" : "mobile"
                }
            }), console.log("anonymousId:" + i.native.GetDeviceUUID() + "userId:" + i.dataHandler.getUserData().getUserIdS() + "name:" + i.dataHandler.getUserData().nick_name + "gender:" + i.dataHandler.getUserData().gender + "createdAt:" + a.toISOString())
        }
    }).g_instance = void 0, s = c)) || s);
    t._RF.pop()
}