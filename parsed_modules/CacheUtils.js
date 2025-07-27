import * as t from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as r from "./cv.js";

function main() {
    t._RF.push({}, "fef149UXC1OX4NcbJx2L7oi", "CacheUtils", void 0);
    var n = function(e) {
        return e.JPG = "jpg", e.JPEG = "jpeg", e.PNG = "png", e.MP3 = "mp3", e.MP4 = "mp4", e.AVI = "avi", e.WMV = "wmv", e
    }(n || {});
    let a = e("ERROR", function(e) {
        return e[e.LOAD_ERROR = 0] = "LOAD_ERROR", e[e.DOWNLOAD_FAILED = 1] = "DOWNLOAD_FAILED", e[e.DOWNLOAD_ERROR = 2] = "DOWNLOAD_ERROR", e[e.DOWNLOAD_TIMEOUT = 3] = "DOWNLOAD_TIMEOUT", e
    }({}));
    class h {
        constructor() {
            this._cacheDir = void 0
        }
        static getInstance() {
            return h.g_instance || (h.g_instance = new h), h.g_instance
        }
        initCache() {
            i.isNative && (console.log("初始化开始"), this._cacheDir = `${o.fileUtils.getWritablePath()}FilesCache`, o.fileUtils.createDirectory(this._cacheDir), console.log(`初始化结束,缓存目录:${this._cacheDir}`))
        }
        getCacheSize() {
            if (!i.isNative) return 0;
            console.log("开始获取缓存大小");
            let e = 0;
            return o.fileUtils.listFiles(this._cacheDir).forEach((t => {
                o.fileUtils.isDirectoryExist(t) || (e += o.fileUtils.getFileSize(t))
            })), console.log(`缓存大小:${e}`), e
        }
        isCacheExist(e) {
            return !i.isNative || o.fileUtils.isFileExist(this.convertUrlToCachePath(e))
        }
        clearCache() {
            i.isNative && (console.log("清理开始"), o.fileUtils.removeDirectory(this._cacheDir), console.log(`清理结束,缓存目录:${this._cacheDir}`), this.initCache())
        }
        deleteCache(e) {
            i.isNative && (o.fileUtils.removeFile(this.convertUrlToCachePath(e)), console.log(`删除缓存成功:${e}`))
        }
        load(e, t, o) {
            let s = this._getTypeByUrl(e);
            return console.log(`加载开始:${e},类型:${s}`), i.isNative ? this.isCacheExist(e) ? (console.log(`使用缓存:${e}`), void this._loadResource(this.convertUrlToCachePath(e), s, t, (t => {
                this.deleteCache(e), o && o(t)
            }))) : (console.log(`使用网络下载:${e}`), void this.cache(e, (e => {
                this._loadResource(e, s, t, o)
            }), o)) : (console.log(`使用Web加载:${e}`), void this._loadResource(e, s, t, o))
        }
        loadAudioclipByVideo(e, t, i) {
            this.isCacheExist(e) && (console.log(`使用缓存:${e}`), this._loadResource(this.convertUrlToCachePath(e), "mp3", t, (e => {
                i && i(e)
            })))
        }
        cache(e, t, o) {
            if (!i.isNative) return;
            console.log(`缓存开始:${e}`);
            let s = this.convertUrlToCachePath(e);
            if (this.isCacheExist(e)) return console.log(`缓存已存在:${e}`), void(t && t(s));
            this._download(e, s, (() => {
                t && t(s)
            }), o)
        }
        convertUrlToCachePath(e) {
            let t = `${this._cacheDir}/${r.md5.md5(e)}`;
            return this._getTypeByUrl(e) == n.MP4 ? t += `.${n.MP4}` : this._getTypeByUrl(e) == n.AVI ? t += `.${n.AVI}` : this._getTypeByUrl(e) == n.WMV ? t += `.${n.WMV}` : this._getTypeByUrl(e) == n.MP3 && (t += `.${n.MP3}`), t
        }
        _download(e, t, s, l) {
            if (!i.isNative) return;
            console.log(`下载开始:${e},路径:${t}`);
            let c = new XMLHttpRequest;
            c.onreadystatechange = () => {
                4 == c.readyState && (200 == c.status && c.response ? (o.fileUtils.writeDataToFile(new Uint8Array(c.response), t), console.log(`下载成功:${e}`), s && s()) : (console.log(`下载失败:${e}`), l && l(a.DOWNLOAD_FAILED)))
            }, c.ontimeout = () => {
                console.log(`下载超时:${e}`), l && l(a.DOWNLOAD_TIMEOUT)
            }, c.onerror = () => {
                console.log(`下载错误:${e}`), l && l(a.DOWNLOAD_ERROR)
            }, c.responseType = "arraybuffer", c.open("GET", e, !0), c.send()
        }
        _loadResource(e, t, i, o) {
            console.log(`加载资源开始:${e},类型:${t}`), s.loadAny({
                url: e,
                type: t
            }, ((t, s) => {
                if (t) return console.log(`加载资源失败:${e}`), void(o && o(a.LOAD_ERROR));
                console.log(`加载资源成功:${e}`);
                var r = null;
                s instanceof l ? (r = new c).texture = s : r = s, i && i(r)
            }))
        }
        _getTypeByUrl(e) {
            return e.endsWith(n.JPG) || e.endsWith(n.JPEG) ? n.JPG : e.endsWith(n.MP4) ? n.MP4 : e.endsWith(n.AVI) ? n.AVI : e.endsWith(n.WMV) ? n.WMV : e.endsWith(n.MP3) ? n.MP3 : n.PNG
        }
    }
    e("CacheUtils", h), h.g_instance = void 0, t._RF.pop()
}