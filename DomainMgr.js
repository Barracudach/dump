import * as t from "./cc.js";
import * as i from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cv.js";
import * as n from "./aesHandler.js";
import * as o from "./ArrayUtils.js";

function main() {
    i._RF.push({}, "bb2aeOhJBFJ675YhAxgvCJZ", "DomainMgr", void 0);
    class a {
        constructor() {
            this.data_server = "", this.web_server = "", this.image_server_2 = "", this.image_server = "", this.gate_server = "", this.pkt_shop = "", this.sports_server = "", this.kyc = "", this.invalid = void 0, this.image_server_wpk = "", this.image_server_wpto = ""
        }
    }
    e("ServerInfo", a);
    class l {
        constructor() {
            this._isLoginError = !1, this._loginServerList = [], this._loginServerList_index = 0, this._loginServer_updateTimestamp = 0, this._api_url = "", this._domain = [], this._domain_index = 0, this._domain_reconnect_num = 0, this._wpkUrl = "", this._domainStore = [], this.DOWNLOAD_IMAGE_FOLDER = "downloadFile/", this.CDN_FILE_NAME = "cdnFile", this.SERVE_FILE_PATH = "ip/", this.LASTLOGIN = "lastLogin", this.LOGINDOMAIN = "login", this._baiduUrl = "https://www.baidu.com/", this._lastFailServerName = "", this.HTTP_AES_KEY = "3RLojOn0Gp8AB1iktWY4qf7QmwaMK2hH", this.CDN = "cdn", this.defult_imgSever = "", this.defult_imgSever2 = "", this.pkwFileAddress = "", this.wpkAvatarAddress = ""
        }
        initLogin() {
            if (t.isNative) {
                let e = r.fileUtils.getWritablePath() + this.SERVE_FILE_PATH;
                r.fileUtils.removeFile(e + this.LASTLOGIN), r.fileUtils.removeFile(e + this.LOGINDOMAIN)
            }
            this.initLoginServer(), this._domain_index = 0, this._domain.splice(0, this._domain.length)
        }
        addDomain(e) {
            let i = new a;
            i.gate_server = e.h5, i.data_server = e.data, i.image_server = e.qiniu, i.image_server_2 = e.qiniu2, i.web_server = e.api, i.pkt_shop = e.ucenter, i.sports_server = e.sports, i.kyc = e.kyc, i.invalid = !1, i.image_server_wpk = e.wpk, i.image_server_wpto = e.wpto, this._domain.push(i), 0 == s.domainMgr.getWpkImageURL("").length && null != e.wpk && "" != e.wpk && s.domainMgr.setWpkImageURL(e.wpk)
        }
        init_server_file_path() {
            this.SERVE_FILE_PATH = s.appConfig.isProd ? "ip/" : "ip_debug/"
        }
        initDoMain() {
            this._domain_index = 0, this._domain.splice(0, this._domain.length), (this._loginServerList_index < this._loginServerList.length - 2 || this._isLoginError) && this._loginServerList_index < this._domainStore.length && this._domain.push(this._domainStore[this._loginServerList_index]), this._isLoginError = !1
        }
        initLoginServer() {
            let e = [],
                i = [],
                l = "",
                _ = t.isNative ? r.fileUtils.getWritablePath() : "";
            if (this._isLoginError && s.appConfig.isPKW) {
                let o = _ + this.DOWNLOAD_IMAGE_FOLDER + this.CDN_FILE_NAME;
                if (t.isNative && r.fileUtils.isFileExist(o)) {
                    let t = new Uint8Array(r.fileUtils.getDataFromFile(o));
                    console.log("cdnBuffer:::" + t);
                    let _ = n.bytesToBase64(t);
                    console.log("cdnbase64:::" + t);
                    let g = s.base64.decode(_);
                    console.log("aesdata:::" + g);
                    let h = n.DecryptBase64(g, this.HTTP_AES_KEY);
                    console.log("domainData:::" + h);
                    let d = JSON.parse(h).domain;
                    for (let t = 0; t < d.length; t++) {
                        let r = d[t];
                        if (l = r.api, l) {
                            e.push(l);
                            let t = new a;
                            t.web_server = r.api, t.data_server = r.data, t.gate_server = r.h5, t.image_server = r.qiniu, t.image_server_2 = r.qiniu2, t.pkt_shop = r.ucenter, t.kyc = r.kyc, t.image_server_wpk = r.wpk, t.image_server_wpto = r.wpto, null != t.image_server_2 && t.image_server_2.length > 0 && i.push(t)
                        }
                    }
                }
            } else {
                let n = _ + this.SERVE_FILE_PATH + this.LASTLOGIN;
                if (console.log("filepath:" + n), t.isNative && r.fileUtils.isFileExist(n) && s.appConfig.isPKW) {
                    let t = r.fileUtils.getStringFromFile(n),
                        o = s.base64.decode(t),
                        _ = JSON.parse(o);
                    if (l = _.api, s.StringTools.earseSpace(l).length > 0) {
                        e.push(l);
                        let t = new a;
                        t.web_server = _.api, t.data_server = _.data, t.gate_server = _.h5, t.image_server = _.qiniu, t.image_server_2 = _.qiniu2, t.pkt_shop = _.ucenter, t.kyc = _.kyc, t.image_server_wpk = _.wpk, t.image_server_wpto = _.wpto, console.log("lastloginJason:web_server:" + t.web_server), -1 != t.gate_server.indexOf("ws") && null != t.image_server_2 && t.image_server_2.length > 0 && i.push(t)
                    }
                }
                if (n = _ + this.SERVE_FILE_PATH + this.LOGINDOMAIN, t.isNative && r.fileUtils.isFileExist(n) && s.appConfig.isPKW) {
                    let t = r.fileUtils.getStringFromFile(n),
                        o = s.base64.decode(t),
                        _ = JSON.parse(o);
                    for (let t = 0; t < _.length; t++)
                        if (l = _[t].api, s.StringTools.earseSpace(l).length > 0) {
                            e.push(l), console.log("initLoginServer path login:" + l);
                            let r = new a;
                            r.web_server = _[t].api, r.data_server = _[t].data, r.gate_server = _[t].h5, r.image_server = _[t].qiniu, r.image_server_2 = _[t].qiniu2, r.pkt_shop = _[t].ucenter, r.kyc = _[t].kyc, r.image_server_wpk = _[t].wpk, r.image_server_wpto = _[t].wpto, -1 != r.gate_server.indexOf("ws") && null != r.image_server_2 && r.image_server_2.length > 0 && i.push(r)
                        }
                }
                if (0 == e.length) {
                    let i = this.getServerHead(),
                        t = 0,
                        r = i.length;
                    for (; t < r; t++) l = i[t], 0 != s.StringTools.earseSpace(l).length && e.push(l)
                }
                o(this._loginServerList, e) || (this._loginServerList = e, this._loginServerList_index = 0, this._loginServer_updateTimestamp = Date.now(), this._domainStore = i), console.log(this._loginServerList)
            }
        }
        getServerHead() {
            return [s.config.getStringData("WEB_API_HEAD", !0)]
        }
        writeLastLogin() {
            if (!t.isNative) return;
            if (this._domain.length <= this._domain_index) return;
            this.reset_reconnet_num();
            let e = this.getServerInfo();
            if (e.invalid) return;
            let i = {
                    api: e.web_server,
                    qiniu: e.image_server,
                    qiniu2: e.image_server_2,
                    data: e.data_server,
                    h5: e.gate_server,
                    ucenter: e.pkt_shop
                },
                n = JSON.stringify(i),
                o = s.base64.encode(n),
                a = r.fileUtils.getWritablePath() + this.SERVE_FILE_PATH;
            console.log("writeLastLogin path : ", a), r.fileUtils.isDirectoryExist(a) || r.fileUtils.createDirectory(a);
            let l = a + this.LASTLOGIN,
                _ = r.fileUtils.writeStringToFile(o, l);
            console.log("writeLastLogin Status : ", _)
        }
        getLoginServer() {
            return s.appConfig.isPKW ? (console.log("this._loginServerList_index:" + this._loginServerList_index), console.log("this._loginServer:" + this._loginServerList[this._loginServerList_index]), this._loginServerList[this._loginServerList_index]) : (console.log("this._loginServer:" + s.config.getStringData("WEB_API_HEAD", !0)), s.config.getStringData("WEB_API_HEAD", !0))
        }
        saveDomain(e) {
            if (!t.isNative) return;
            let i = JSON.stringify(e.domain),
                n = r.fileUtils.getWritablePath() + s.domainMgr.SERVE_FILE_PATH;
            r.fileUtils.isDirectoryExist(n) || r.fileUtils.createDirectory(n);
            let o = s.base64.encode(i);
            if (null != o && o.length > 0) {
                let e = n + this.LOGINDOMAIN,
                    i = r.fileUtils.writeStringToFile(o, e);
                console.log("saveDomain login isWritten:" + i)
            }
            if (null != e.cdn && e.cdn.length > 0) {
                let i = n + this.CDN,
                    t = r.fileUtils.writeStringToFile(e.cdn, i);
                console.log("saveDomain cnd isWritten:" + t)
            }
        }
        switchLoginServer() {
            this._loginServerList_index++, this._loginServer_updateTimestamp = Date.now()
        }
        isHaveNextLoginServer(e) {
            if (s.appConfig.isPKW) return 0 != this._loginServerList.length && (!(this._loginServerList_index >= this._loginServerList.length - 1) && (this.switchLoginServer(), !0));
            {
                if (0 != e.indexOf(this.getLoginServer())) return !1;
                let i = !0 === s.server.nextProxy("WEB_API_HEAD", !1)[0];
                return i && (this._loginServerList = [s.config.getStringData("WEB_API_HEAD", !0)], this._loginServer_updateTimestamp = Date.now()), i
            }
        }
        getLoginServerIndex() {
            return s.appConfig.isPKW ? this._loginServerList_index : s.server.getCurrentProxyIndex("WEB_API_HEAD")
        }
        reset_reconnet_num() {
            this._domain_reconnect_num = 0
        }
        getServerInfo() {
            if (this._domain_index < 0 || this._domain_index >= this._domain.length) {
                let e = new a;
                return e.invalid = !0, e
            }
            return this._domain[this._domain_index]
        }
        isHaveNextServer() {
            return s.appConfig.isPKW ? 0 != this._domain.length && !(this._domain_reconnect_num >= this._domain.length - 1) : s.server.nextProxyExist("WEB_SOCKET_HEAD")
        }
        switchServer() {
            return s.appConfig.isPKW ? 0 != this._domain.length && (this._domain_index++, this._domain_reconnect_num++, this._domain_index >= this._domain.length && (this._domain_index = 0), !0) : s.server.nextProxy("WEB_SOCKET_HEAD")[0]
        }
        getCdnUrl() {
            let e = r.fileUtils.getWritablePath() + this.SERVE_FILE_PATH + this.CDN;
            if (r.fileUtils.isFileExist(e)) {
                let i = r.fileUtils.getStringFromFile(e);
                return console.log("getCdn cdnBase64String:" + i), s.StringTools.earseSpace(i)
            }
            if (s.appConfig.isProd) return s.config.getStringData("WEB_API_CDN", !0);
            if (s.appConfig.isStg) {
                let e = s.config.getStringData("WEB_API_STG_CDN", !0);
                if (e) return e
            }
            return s.config.getStringData("WEB_API_DEBUG_CDN", !0)
        }
        pollingDomain(e, i) {
            let r = s.http.getRequestInfo(i);
            return r.requestTimestamp < this._loginServer_updateTimestamp || this.isHaveNextLoginServer(i) ? (s.MessageCenter.send("responseFailed_get_resource_url", s.StringTools.formatC(s.config.getStringData("Hotupdate_ConnectingtoLine"), this.getLoginServerIndex() + 1)), s.http.sendRequest(r.server_interface_nme, r.jsonData, r.handler, r.requestType, r.parseType, r.isshowloading, r.showTips, r.errorHandler, r.custom_header, r.isPHPEndpoint, r.callErrorHandlerExtra), !0) : this._isLoginError ? (this._isLoginError = !1, this.initLoginServer(), this.showError(), i == s.config.getStringData("WEB_API_UPLOAD_VOICE", !0) && s.MessageCenter.send("on_upload_voice_done"), !1) : t.isNative ? (this._isLoginError = !0, this._lastFailServerName = i, s.http.requestUrl(this._baiduUrl, this._onLinkBaiDu.bind(this), this._onDownloadError.bind(this)), !1) : (s.config.GET_CLIENT_TYPE() == s.Enum.ClientType.CowboyWeb ? s.netWorkManager.onGoLogout() : s.appConfig.isWebApp || s.TT.showMsg(s.config.getStringData("ErrorToast33"), s.Enum.ToastType.ToastTypeError), !1)
        }
        _onLinkBaiDu() {
            let e = this.getCdnUrl(),
                i = n.DecryptBase64(e, this.HTTP_AES_KEY);
            if (console.log("_onLinkBaiDu cdnUrl:" + i), null == i || "" == i) return console.log("cdnUrl Error ECB_AESDecrypt is error !"), void this.showError();
            s.http.requestDownload(i, this._onDownloadCdnCallback.bind(this), this._onDownloadError.bind(this), this.CDN_FILE_NAME)
        }
        _onDownloadCdnCallback(e, i, t) {
            let n = r.fileUtils.getWritablePath() + this.DOWNLOAD_IMAGE_FOLDER;
            r.fileUtils.isDirectoryExist(n) || r.fileUtils.createDirectory(n), n += t, r.fileUtils.isFileExist(n) && r.fileUtils.removeFile(n), console.log("cnd write path:" + n);
            let o = r.fileUtils.writeDataToFile(new Uint8Array(e), n);
            console.log("writeStatus:" + o), this.initLogin();
            let a = s.http.getRequestInfo(this._lastFailServerName);
            console.log("server_interface_nme::" + a.server_interface_nme), s.http.sendRequest(a.server_interface_nme, a.jsonData, a.handler, a.requestType, a.parseType, a.isshowloading, a.showTips, a.errorHandler, a.custom_header)
        }
        _onDownloadError() {
            this._isLoginError = !1, this.initLoginServer(), this.showError()
        }
        getImageURL(e, i = 0) {
            let t = s.String(e);
            if (s.appConfig.isPKW) t = this.getImageURLPKW(e, i);
            else if (-1 === t.indexOf("http")) {
                let e = this.wpkAvatarAddress.length > 0 && 1 == i;
                t = s.String(e ? this.wpkAvatarAddress : this.pkwFileAddress) + t
            }
            return t
        }
        getImageURLPKW(e, i = 0) {
            let t = s.String(e);
            if (this._domain_index >= 0 && this._domain_index < this._domain.length) {
                let e = this._domain[this._domain_index];
                switch (i) {
                    case 0:
                    case 3:
                        -1 === t.indexOf("http") && (t = s.String(e.image_server) + t);
                        break;
                    case 1:
                        -1 === t.indexOf("http") && (t = s.String(e.image_server_wpk) + t);
                        break;
                    case 2:
                        break;
                    case 4:
                        -1 === t.indexOf("http") && (t = s.String(e.image_server_wpto) + t)
                }
            }
            return t
        }
        setWpkImageURL(e) {
            this._wpkUrl = e
        }
        getWpkImageURL(e) {
            return this._wpkUrl + e
        }
        showError() {
            s.config.GET_CLIENT_TYPE() == s.Enum.ClientType.CowboyWeb ? s.netWorkManager.onGoLogout() : s.config.getCurrentScene() == s.Enum.SCENE.HOTUPDATE_SCENE ? s.MessageCenter.send("responseFailed_get_resource_url", s.config.getStringData("ErrorToast33")) : (s.TT.showMsg("LinkError" + s.config.getStringData("ErrorToast33"), s.Enum.ToastType.ToastTypeError), s.SwitchLoadingView.hide())
        }
        setDefultImgServer(e) {
            this.defult_imgSever = e
        }
        getDefultImgServer() {
            return this.defult_imgSever
        }
        setDefultImgServer2(e) {
            this.defult_imgSever2 = e
        }
        getDefultImgServer2() {
            return this.defult_imgSever2
        }
        setpkwFileAddress(e) {
            this.pkwFileAddress = e
        }
        setWpkAvatarAddress(e) {
            this.wpkAvatarAddress = e
        }
        set_api_url(e) {
            this._api_url = e
        }
        get_api_url() {
            return this._api_url
        }
        getSportUrl() {
            let e = this.getServerInfo().sports_server;
            if (s.StringTools.getArrayLength(e) > 0) return e;
            let i = s.StringTools.getArrayLength(this._domain);
            for (let e = 0; e < i; ++e) {
                let i = this._domain[e].sports_server;
                if (s.StringTools.getArrayLength(i) > 0) return i
            }
            return console.log("sports url不存在"), ""
        }
        static getInstance() {
            return l._g_instence || (l._g_instence = new l), l._g_instence
        }
    }
    e("DomainMgr", l), l._g_instence = null, i._RF.pop()
}