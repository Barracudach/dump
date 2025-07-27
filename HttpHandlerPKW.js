import * as t from "./cc.js";
import * as n from "./cc.js";
import * as a from "./cv.js";
import * as s from "./HttpHandler.js";

function main() {
    t._RF.push({}, "f0ba9gynBZB/pP3MfjEQDoa", "HttpHandlerPKW", void 0);
    class r extends s {
        static getInstance() {
            return this.instence || (this.instence = new r), this.instence
        }
        getDefaultLoginObj() {
            let e = super.getDefaultLoginObj();
            return e.latitude = e.location.latitude || "", e.longitude = e.location.longitude || "", delete e.location, e.device_version = a.native.getSystemVersion(), e
        }
        getDefaultRegistrationObj() {
            return {
                captcha: "",
                version: a.config.GET_CLIENT_VERSION(),
                device_uuid: a.native.GetDeviceUUID(),
                is_emulator: a.native.IsSimulator() ? 1 : 0,
                avatar: "2",
                reg_code: "",
                is_down_sl: 1
            }
        }
        getResponseCode(e) {
            return null == e ? null : e.msg_code
        }
        getResponseMessage(e) {
            return null == e ? null : a.config.getCurrentLanguage() == a.Enum.LANGUAGE_TYPE.zh_CN ? e.msg : e.message
        }
        getErrorMessage(e, t) {
            a.SwitchLoadingView.hide();
            let n = null;
            return "0" === e.msg_code ? !0 === t && a.httpHandler.initUserData(e, !1) : (n = {
                code: e.msg_code
            }, n.description = this.getResponseMessage(e), !0 === t && this.doLoginFaile(e, !0)), n
        }
        initUserData(e, t) {
            super.initUserData(e.data, t)
        }
        postLogin(e, t, n) {
            "0" === e.msg_code && super.postLogin(e.data, t, n)
        }
        requestUserActivityHistory() {}
        requestMTTMatchListData(e, t) {
            let n = a.dataHandler.getUserData().mtt_token,
                s = a.dataHandler.getUserData().getUserIdS(),
                r = a.config.getStringData("WEB_MTT_GET_MATCH_LIST_DATA", !0) + "?token=" + n + "&platform=1&page=1&foreign_id=" + s + "&offset=" + e + "&limit=" + t;
            console.log("requestMTTListData url = " + r), a.http.requestUrl(r, this._onResponseMTTListSucced.bind(this), this._onResponseMTTListFailed.bind(this))
        }
        requestMTTMatchDetailData(e) {
            let t = a.dataHandler.getUserData().mtt_token,
                n = a.dataHandler.getUserData().getUserIdS(),
                s = a.config.getStringData("WEB_MTT_GET_MATCH_DEATAIL_DATA", !0) + "?token=" + t + "&platform=1&page=1&foreign_id=" + n + "&mttId=" + e;
            console.log("requestMTTListData url = " + s), a.http.requestUrl(s, this._onResponseMTTDetailSucced.bind(this), this._onResponseDetailListFailed.bind(this))
        }
        requestMTTUserData() {
            let e = a.dataHandler.getUserData().mtt_token,
                t = a.dataHandler.getUserData().getUserIdS(),
                n = a.config.getStringData("WEB_MTT_GET_USER_INFO_DATA", !0) + "?token=" + e + "&foreign_id=" + t;
            console.log("requestMTTUserData url = " + n), a.http.requestUrl(n, this._onResponseMTTUserInfoSucced.bind(this), this._onResponseMTTUserInfoFailed.bind(this))
        }
        onGetHotUpdateUrl(e, t, s) {
            if ("0" == e.msg_code) {
                let r = e.data;
                return a.domainMgr.setDefultImgServer(r.imgServer), a.domainMgr.setDefultImgServer2(r.imgServer2), a.domainMgr.set_api_url(r.api_url), n("this.manifestUrl:" + s), a.StringTools.earseSpace(r.url).length > 0 ? t(r.url, s) : n("invalid url"), !1
            } {
                let t = e.data;
                return a.dataHandler.getUserData().download_url = t.download_url, a.netWorkManager.OnHttplogin(), !0
            }
        }
        requestHotupdateUrl(e, t, n) {
            return a.http.sendRequest(e, t, n, null, null, !1)
        }
        getLegalDocsURL(e, t = -1) {
            let n = a.config.getStringData("WEB_API_USER_GET_LEGAL_DOC", !0);
            return n = a.http.constructFullURL(n), n += a.StringTools.formatC("?unique=register&clientType=%s&language=%s", a.config.GET_CLIENT_TYPE(), a.config.getCurrentLanguage()), n
        }
    }
    e("HttpHandlerPKW", r), t._RF.pop()
}