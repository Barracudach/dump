import * as t from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cv.js";
import * as o from "./CrashTracing.js";
import * as s from "./ObjUtils.js";
import * as a from "./Enum.js";
import * as g from "./WebviewHelperData.js";

function main() {
    t._RF.push({}, "70eadUjnKxDqYYJCTIFRD9A", "AppConfigServer", void 0);
    class f {
        constructor() {
            this.CMS_APP_CONFIG_KEY = "config", this.isFinishedLoadAppConfig = !1, this._req = null
        }
        static getInstance() {
            return f._instance || (f._instance = new f), f._instance
        }
        getConfigFromServer() {
            var e;
            if (!r.config.getServerHead()) return;
            this._req && 4 != this._req.readyState && "function" == typeof this._req.abort && (null == (e = this._req) || e.abort());
            const t = this.getAppConfigUrl(),
                n = {
                    status: "call func getConfigFromServer",
                    times: 1
                },
                i = {
                    spanName: o.AppConfigServerRequest,
                    eventName: "callFuncGetConfigFromServer",
                    attribute: {
                        data: JSON.stringify(n)
                    },
                    spandCode: 1
                };
            r.tools.logInfo(i), this.isFinishedLoadAppConfig = !1, r.http.addURLtoSkipUnderMaintenance(t), this._req = r.http.sendRequestV2(t, null, this.onGetConfigFromServerSuccess.bind(this), this.onGetConfigFromServerError.bind(this), r.http.HttpRequestType.GET, null, !1, !1, !1, null, !0)
        }
        onGetConfigFromServerSuccess(e) {
            const t = {
                    status: "onGetConfigFromServerSuccess at 1",
                    dataConfig: e
                },
                n = {
                    spanName: o.AppConfigServerRequest,
                    eventName: "onGetConfigFromServer",
                    attribute: {
                        data: JSON.stringify(t)
                    },
                    spandCode: 1
                };
            r.tools.logInfo(n), this.updateConfig(e[this.CMS_APP_CONFIG_KEY]), this.isFinishedLoadAppConfig = !0, r.MessageCenter.send(a.OnUpdateServerConfigSuccess), r.MessageCenter.send(a.FinishUpdateServerConfig)
        }
        onGetConfigFromServerError(e) {
            this.isFinishedLoadAppConfig = !0, r.MessageCenter.send(a.FinishUpdateServerConfig);
            if ("timeout" === e || "error" === e) {
                const t = {
                    spanName: o.AppConfigServerRequest,
                    eventName: "onGetConfigFromServer",
                    attribute: {
                        data: `have error: ${e}`
                    },
                    spandCode: 2
                };
                r.tools.logInfo(t)
            }
        }
        updateConfig(e) {
            if (null != e) try {
                const t = {
                    SpriteFrame: n,
                    Font: i
                };
                s.deepMerge(r.appConfig.baseConfig, e, t), r.appConfig.filterAvailableLanguages()
            } catch (e) {
                console.log("Parse JSON App Config get from server fail")
            }
        }
        getAppConfigUrl() {
            const e = g.getCMSConfigParams();
            return r.config.getStringData("API_APP_CONFIG_URL", !0) + "?" + e
        }
    }
    e("AppConfigServer", f), f._instance = void 0, t._RF.pop()
}