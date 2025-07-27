import * as i from "./cc.js";
import * as e from "./cc.js";
import * as n from "./mttconfig.js";
import * as a from "./mttconfig.js";
import * as s from "./mttconfig.js";
import * as R from "./AppConfig.js";
import * as E from "./Enum.js";
import * as o from "./cv.js";

function main() {
    i._RF.push({}, "405425yjw5MoJWdDOr2hioX", "BasicConfig", void 0);
    t("BasicConfig", class {
        constructor() {
            this.SERVER_CONFIG = {
                1: {
                    world: ["mtt-world.dev.wptg.a5labsapp.co:2053", "35.241.112.190:3001", "18.162.83.29:3001"],
                    game: ["mtt-game.dev.wptg.a5labsapp.co:2083", "35.241.112.190:4001", "18.162.83.29:4001"],
                    api: ["mtt-api.dev.wptg.a5labsapp.co", "35.241.112.190:22001", "18.162.83.29:22001"],
                    web: ["35.241.112.190:22000", "18.162.83.29:22000"],
                    download: ["mtt-download.dev.wptg.a5labsapp.co", "35.241.112.190:22000", "18.162.83.29:22000"],
                    file: ["mtt-file.dev.wptg.a5labsapp.co", "35.241.112.190:22000", "18.162.83.29:22000"],
                    config: ["s3.ap-southeast-1.amazonaws.com/mtt-url-config.dev.wptg.a5labsapp.co"],
                    uploadlog: ["http://120.25.145.39:31380"],
                    apiWorld: ["mtt-apiWorld.dev.wptg.a5labsapp.co", "35.241.112.190:29000", "18.162.83.29:29000"],
                    apiData: ["mtt-apiData.dev.wptg.a5labsapp.co", "35.241.112.190:29004", "18.162.83.29:29004"],
                    apiMtt: ["mtt-apiMtt.dev.wptg.a5labsapp.co", "35.241.112.190:29002", "18.162.83.29:29002"],
                    log: ["mtt-log.dev.wptg.a5labsapp.co", "35.241.112.190:29008", "18.162.83.29:29008"],
                    resource: ["mtt-resource.dev.wptg.a5labsapp.co", "35.241.112.190:29013", "18.162.83.29:29013"],
                    jsng: ["35.241.112.190:29014", "18.162.83.29:29014"],
                    ws: "wss",
                    http: "https"
                },
                2: {
                    world: ["mtt-world.stg.wptg.a5labsapp.co:2053", "47.91.151.126:3001", "47.76.215.147:3001"],
                    game: ["mtt-game.stg.wptg.a5labsapp.co:2083", "47.91.151.126:4001", "47.76.215.147:4001"],
                    api: ["mtt-api.stg.wptg.a5labsapp.co", "47.91.151.126:29002", "47.76.215.147:22001"],
                    web: ["47.91.151.126:22000", "47.76.215.147:22000"],
                    download: ["mtt-download.stg.wptg.a5labsapp.co", "47.91.151.126:22000", "47.76.215.147:22000"],
                    file: ["mtt-file.stg.wptg.a5labsapp.co", "47.91.151.126:29008", "47.76.215.147:22000"],
                    config: ["mtt-url-config.stg.wptg.a5labsapp.co", "47.91.151.126:29011", "47.76.215.147:29011"],
                    uploadlog: ["http://120.25.145.39:31380"],
                    apiWorld: ["mtt-apiWorld.stg.wptg.a5labsapp.co", "47.91.151.126:29000", "47.76.215.147:29000"],
                    apiData: ["mtt-apiData.stg.wptg.a5labsapp.co", "47.91.151.126:29004", "47.76.215.147:29004"],
                    apiMtt: ["mtt-apiMtt.stg.wptg.a5labsapp.co", "47.91.151.126:29002", "47.76.215.147:29002"],
                    log: ["mtt-log.stg.wptg.a5labsapp.co", "47.91.151.126:29008", "47.76.215.147:29008"],
                    resource: ["mtt-resource.stg.wptg.a5labsapp.co", "47.91.151.126:29013", "47.76.215.147:29013"],
                    jsng: ["mtt-jsng.stg.wptg.a5labsapp.co", "47.91.151.126:29014", "47.76.215.147:29014"],
                    ws: "wss",
                    http: "https"
                },
                4: {
                    world: ["a92smtp.depucloud.cn:3011", "203.107.46.107:3011", "92smtp.omq2uk.com:3011"],
                    game: ["a92smtp.depucloud.cn:4011", "203.107.46.107:4011", "92smtp.omq2uk.com:4011"],
                    api: ["mttapi.lihail.com", "mttapi.akrsjk.com"],
                    web: ["mtth5.ekoqj.com", "mtth5.kybelekuafor.com"],
                    download: ["mtth5.lihail.com", "mtth5.akrsjk.com"],
                    file: ["playlog.lihail.com", "playlog.akrsjk.com"],
                    config: ["92mtt-front.oss-accelerate.aliyuncs.com/mtt", "a93n-hotupdate.oss-accelerate.aliyuncs.com/mtt"],
                    uploadlog: ["http://120.25.145.39:31380"],
                    apiWorld: ["mttapi.lihail.com", "mttapi.akrsjk.com"],
                    apiData: ["mttapi.lihail.com", "mttapi.akrsjk.com"],
                    apiMtt: ["mttapi.lihail.com", "mttapi.akrsjk.com"],
                    log: ["playlog.lihail.com", "playlog.akrsjk.com"],
                    resource: ["playlog.lihail.com", "playlog.akrsjk.com"],
                    jsng: ["mttapi.lihail.com", "mttapi.akrsjk.com"],
                    ws: "wss",
                    http: "https"
                }
            }, this.OVERRIDE_SERVER_CONFIG = null, this.basicConfigItem = [new r("", 0), new r("api", 1), new r("web", 1), new r("world", 0), new r("game", 0), new r("download", 1), new r("file", 1), new r("config", 1), new r("asset", 1), new r("customer", 1), new r("customerurl", 1), new r("uploadlog", 1), new r("getgamelisttype", 1), new r("apiWorld", 1), new r("apiData", 1), new r("apiMtt", 1), new r("log", 1), new r("resource", 1), new r("jsng", 1)], this.defaultPlatform = E.PKW_PRO, this.SERVER_URL_WORLD_INDEX = 0, this.SERVER_URL_GAME_INDEX = 0, this.SERVER_URL_API_INDEX = 0, this.SERVER_URL_APIMTT_INDEX = 0, this.SERVER_URL_WEB_INDEX = 0, this.SERVER_URL_DOWNLOAD_INDEX = 0, this.SERVER_URL_FILE_INDEX = 0, this.SERVER_URL_CONFIG_INDEX = 0, this.SERVER_URL_APIDATA_INDEX = 0, this.URL_TYPE = {
                NONE: 0,
                API: 1,
                WEB: 2,
                WORLD: 3,
                GAME: 4,
                DOWNLOAD: 5,
                FILE: 6,
                CONFIG: 7,
                ASSET: 8,
                CUSTOMER: 9,
                CUSTOMERURL: 10,
                UPLOADLOG: 11,
                GETGAMELISTTYPE: 12,
                APIWORLD: 13,
                APIDATA: 14,
                APIMTT: 15,
                LOG: 16,
                RESOURCE: 17,
                JSNG: 18
            }
        }
        get SERVER_URL_WORLD_TEXT() {
            return this.basicConfigItem[this.URL_TYPE.WORLD].SERVER_URL_TEXT
        }
        get SERVER_URL_GAME_TEXT() {
            return this.basicConfigItem[this.URL_TYPE.GAME].SERVER_URL_TEXT
        }
        get SERVER_URL_API_TEXT() {
            return this.basicConfigItem[this.URL_TYPE.API].SERVER_URL_TEXT
        }
        get SERVER_URL_APIMTT_TEXT() {
            return this.basicConfigItem[this.URL_TYPE.APIMTT].SERVER_URL_TEXT
        }
        get SERVER_URL_WEB_TEXT() {
            return this.basicConfigItem[this.URL_TYPE.WEB].SERVER_URL_TEXT
        }
        get SERVER_URL_DOWNLOAD_TEXT() {
            return this.basicConfigItem[this.URL_TYPE.DOWNLOAD].SERVER_URL_TEXT
        }
        get SERVER_URL_FILE_TEXT() {
            return this.basicConfigItem[this.URL_TYPE.FILE].SERVER_URL_TEXT
        }
        get SERVER_URL_CONFIG_TEXT() {
            return this.basicConfigItem[this.URL_TYPE.CONFIG].SERVER_URL_TEXT
        }
        get SERVER_URL_WS_PREFIX() {
            return this.OVERRIDE_SERVER_CONFIG && this.OVERRIDE_SERVER_CONFIG.ws ? this.OVERRIDE_SERVER_CONFIG.ws : this.SERVER_CONFIG[s.buildPlatform] && this.SERVER_CONFIG[s.buildPlatform].ws ? this.SERVER_CONFIG[s.buildPlatform].ws : this.SERVER_CONFIG[this.defaultPlatform].ws
        }
        get SERVER_URL_HTTP_PREFIX() {
            return this.OVERRIDE_SERVER_CONFIG && this.OVERRIDE_SERVER_CONFIG.http ? this.OVERRIDE_SERVER_CONFIG.http : this.SERVER_CONFIG[s.buildPlatform] && this.SERVER_CONFIG[s.buildPlatform].http ? this.SERVER_CONFIG[s.buildPlatform].http : this.SERVER_CONFIG[this.defaultPlatform].http
        }
        get SERVER_URL_APIDATA_TEXT() {
            return this.basicConfigItem[this.URL_TYPE.APIDATA].SERVER_URL_TEXT
        }
        get SERVER_URL_WORLD() {
            return this.basicConfigItem[this.URL_TYPE.WORLD].SERVER_URL
        }
        get SERVER_URL_GAME() {
            return this.basicConfigItem[this.URL_TYPE.GAME].SERVER_URL
        }
        get SERVER_URL_API() {
            return this.basicConfigItem[this.URL_TYPE.API].SERVER_URL
        }
        get SERVER_URL_APIMTT() {
            return this.basicConfigItem[this.URL_TYPE.APIMTT].SERVER_URL
        }
        get SERVER_URL_APIDATA() {
            return this.basicConfigItem[this.URL_TYPE.APIDATA].SERVER_URL
        }
        get SERVER_URL_WEB() {
            return this.basicConfigItem[this.URL_TYPE.WEB].SERVER_URL
        }
        get SERVER_URL_DOWNLOAD() {
            return this.basicConfigItem[this.URL_TYPE.DOWNLOAD].SERVER_URL
        }
        get SERVER_URL_FILE() {
            return this.basicConfigItem[this.URL_TYPE.FILE].SERVER_URL
        }
        get SERVER_URL_CONFIG() {
            return this.basicConfigItem[this.URL_TYPE.CONFIG].SERVER_URL
        }
        getURLWorldIndex() {
            return this.basicConfigItem[this.URL_TYPE.WORLD].index
        }
        addPrefix(t, i) {
            return i ? i.indexOf("http://") >= 0 || i.indexOf("https://") >= 0 || i.indexOf("ws://") >= 0 || i.indexOf("wss://") >= 0 ? i : t + "://" + i : i
        }
        getServerURL(t, i = !0) {
            return this.basicConfigItem[t].getServerURL(i)
        }
        isLastIndex(t) {
            return this.basicConfigItem[t].isLastIndex()
        }
        changeIndex(t, i) {
            return this.basicConfigItem[t].changeIndex(i)
        }
        changeNextIndex(t) {
            return this.basicConfigItem[t].changeNextIndex()
        }
        getCurrentIndex(t) {
            return this.basicConfigItem[t].getCurrentIndex()
        }
        getConfig(t) {
            return this.basicConfigItem[t].getConfig()
        }
        changeWorldIndex(t) {
            return this.basicConfigItem[this.URL_TYPE.WORLD].changeIndex(t)
        }
        changeGameIndex(t) {
            return this.basicConfigItem[this.URL_TYPE.GAME].changeIndex(t)
        }
        changeApiIndex(t) {
            return this.basicConfigItem[this.URL_TYPE.API].changeIndex(t)
        }
        changeApiMttIndex(t) {
            return this.basicConfigItem[this.URL_TYPE.APIMTT].changeIndex(t)
        }
        changeApiDataIndex(t) {
            return this.basicConfigItem[this.URL_TYPE.APIDATA].changeIndex(t)
        }
        changeWebIndex(t) {
            return this.basicConfigItem[this.URL_TYPE.WEB].changeIndex(t)
        }
        changeDownloadIndex(t) {
            return this.basicConfigItem[this.URL_TYPE.DOWNLOAD].changeIndex(t)
        }
        changeFileIndex(t) {
            return this.basicConfigItem[this.URL_TYPE.FILE].changeIndex(t)
        }
        changeConfigIndex(t) {
            return this.basicConfigItem[this.URL_TYPE.CONFIG].changeIndex(t)
        }
        changeNextApiIndex() {
            return this.basicConfigItem[this.URL_TYPE.API].changeNextIndex()
        }
        changeNextApiMttIndex() {
            return this.basicConfigItem[this.URL_TYPE.APIMTT].changeNextIndex()
        }
        changeNextApiDataIndex() {
            return this.basicConfigItem[this.URL_TYPE.APIDATA].changeNextIndex()
        }
        changeNextWebIndex() {
            return this.basicConfigItem[this.URL_TYPE.WEB].changeNextIndex()
        }
        changeNextWorldIndex() {
            return this.basicConfigItem[this.URL_TYPE.WORLD].changeNextIndex()
        }
        changeNextGameIndex() {
            return this.basicConfigItem[this.URL_TYPE.GAME].changeNextIndex()
        }
        changeNextDownloadIndex() {
            return this.basicConfigItem[this.URL_TYPE.DOWNLOAD].changeNextIndex()
        }
        changeNextFileIndex() {
            return this.basicConfigItem[this.URL_TYPE.FILE].changeNextIndex()
        }
        changeNextConfigIndex() {
            return this.basicConfigItem[this.URL_TYPE.CONFIG].changeNextIndex()
        }
        isApiLastIndex() {
            return this.basicConfigItem[this.URL_TYPE.API].isLastIndex()
        }
        isApiMttLastIndex() {
            return this.basicConfigItem[this.URL_TYPE.APIMTT].isLastIndex()
        }
        isApiDataLastIndex() {
            return this.basicConfigItem[this.URL_TYPE.APIDATA].isLastIndex()
        }
        isWebLastIndex() {
            return this.basicConfigItem[this.URL_TYPE.WEB].isLastIndex()
        }
        isWorldLastIndex() {
            return this.basicConfigItem[this.URL_TYPE.WORLD].isLastIndex()
        }
        isGameLastIndex() {
            return this.basicConfigItem[this.URL_TYPE.GAME].isLastIndex()
        }
        isDownloadLastIndex() {
            return this.basicConfigItem[this.URL_TYPE.DOWNLOAD].isLastIndex()
        }
        isFileLastIndex() {
            return this.basicConfigItem[this.URL_TYPE.FILE].isLastIndex()
        }
        isConfigLastIndex() {
            return this.basicConfigItem[this.URL_TYPE.CONFIG].isLastIndex()
        }
        getServerIndex(t) {
            return this.basicConfigItem[t].getCurrentIndex()
        }
        updateUrlConfig(t = "") {
            if (t || (t = e.localStorage.getItem(n.key_urlConfig)), t) {
                cc_mtt.vv.ConsoleLog.log("updateUrlConfig", s.buildPlatform, t);
                try {
                    let e = JSON.parse(t);
                    var i;
                    if (e) this.OVERRIDE_SERVER_CONFIG = e, this.OVERRIDE_SERVER_CONFIG.config || (this.OVERRIDE_SERVER_CONFIG.config = null == (i = this.SERVER_CONFIG[s.buildPlatform]) ? void 0 : i.config), this.injectPlatformCFUrls(s.buildPlatform, this.OVERRIDE_SERVER_CONFIG);
                    else this.injectCFUrls(this.SERVER_CONFIG)
                } catch (t) {
                    this.injectCFUrls(this.SERVER_CONFIG), cc_mtt.vv.ConsoleLog.error("Parse UrlConfig json error")
                }
                cc_mtt.vv.ConsoleLog.log("UrlConfig updated", JSON.stringify(this.OVERRIDE_SERVER_CONFIG))
            } else this.injectCFUrls(this.SERVER_CONFIG), cc_mtt.vv.ConsoleLog.log("Empty UrlConfig")
        }
        getMTTDynamicProxies() {
            return {
                world: o.server.getDynamicProxiesByKey("MTT_world"),
                game: o.server.getDynamicProxiesByKey("MTT_game"),
                config: o.server.getDynamicProxiesByKey("MTT_config")
            }
        }
        injectPlatformCFUrls(t, i) {
            this.injectConfigUrls(this.getMTTDynamicProxies(), i)
        }
        injectConfigUrls(t, i) {
            for (let e in t) "ws" == e || "http" == e ? i[e] = t[e] : (i[e] || (i[e] = []), i[e] = [...t[e], ...i[e]])
        }
        injectCFUrls(t) {
            R.Instance, this.injectConfigUrls(this.getMTTDynamicProxies(), t[s.buildPlatform])
        }
    });
    class r {
        constructor(t, i) {
            this.protocolType = 0, this.type = "", this.index = 0, this.type = t, this.protocolType = i
        }
        get SERVER_URL_TEXT() {
            return a.OVERRIDE_SERVER_CONFIG && a.OVERRIDE_SERVER_CONFIG[this.type] ? a.OVERRIDE_SERVER_CONFIG[this.type] : a.SERVER_CONFIG[s.buildPlatform] && a.SERVER_CONFIG[s.buildPlatform][this.type] ? a.SERVER_CONFIG[s.buildPlatform][this.type] : a.SERVER_CONFIG[a.defaultPlatform][this.type]
        }
        get SERVER_URL_PREFIX() {
            switch (this.protocolType) {
                case 1:
                    return a.SERVER_URL_HTTP_PREFIX;
                case 0:
                    return a.SERVER_URL_WS_PREFIX
            }
            return ""
        }
        get SERVER_URL() {
            return this.SERVER_URL_TEXT && this.index < this.SERVER_URL_TEXT.length ? this.SERVER_URL_TEXT[this.index] : null
        }
        getServerURL(t = !0) {
            return t ? a.addPrefix(this.SERVER_URL_PREFIX, this.SERVER_URL) : this.SERVER_URL
        }
        isLastIndex() {
            return this.index + 1 >= this.SERVER_URL_TEXT.length
        }
        changeIndex(t) {
            this.index = t, this.index = this.index % this.SERVER_URL_TEXT.length
        }
        changeNextIndex() {
            this.index++, this.index = this.index % this.SERVER_URL_TEXT.length
        }
        getCurrentIndex() {
            return this.index
        }
        getConfig() {
            return this.SERVER_URL_TEXT
        }
    }
    i._RF.pop()
}