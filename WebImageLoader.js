import * as t from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as g from "./httpApis.js";
import * as m from "./md5.mjs_cjs=&original=.js";

function main() {
    var h, n;
    t._RF.push({}, "a46ee1sRtJEHK7DDWPFX6ti", "WebImageLoader", void 0);
    const {
        ccclass: d
    } = i;
    class c {
        constructor(e, t, i, s = "", a = -1) {
            this.url = void 0, this.fileName = void 0, this.extension = void 0, this.lastModified = void 0, this.timestamp = -1, this.url = e, this.fileName = t, this.extension = L.getExtension(this.url), this.changeLastModified(i), s && (this.extension = s), a >= 0 && (this.timestamp = a)
        }
        changeLastModified(e) {
            this.lastModified = e, this.updateTimestamp()
        }
        updateTimestamp() {
            this.timestamp = (new Date).getTime()
        }
        getFilePath() {
            return L.path + this.fileName + "." + this.extension
        }
    }
    let L = e("WebImageLoader", d(((n = class e {
        static get instance() {
            return this._instance || (this._instance = new e), this._instance
        }
        constructor() {
            this.storageKey = "WebImageLoader", this.folderName = "WebImage", this.expiredTimeInterval = 864e5, this.imageList = new Map, this.loadLocalImage = (e, t, i, r) => {
                if (cc_mtt.vv.ConsoleLog.log("WebImageLoader loadLocalImage filePath", e), t) {
                    let o = this;
                    s.loadRemote(e, (function(e, s) {
                        if (o.logMessage("WebImageLoader loadLocalImage", s.isValid), r && r instanceof Function) r(e, s);
                        else try {
                            e ? (o.logMessage(e), i && (t.spriteFrame = i)) : s && s.isValid ? (t.spriteFrame = new a, t.spriteFrame.texture = s) : (i && (t.spriteFrame = i), cc_mtt.vv.ConsoleLog.error("WebImageLoader loadLocalImage tex is null"))
                        } catch (e) {
                            cc_mtt.vv.ConsoleLog.error("WebImageLoader loadLocalImage error", e)
                        }
                    }))
                } else cc_mtt.vv.ConsoleLog.error("WebImageLoader loadLocalImage sprite is null")
            }, this.saveLocalImage = (t, i, s, a, r, o) => {
                if (t && void 0 !== t) {
                    this.isDirectoryExist(e.path) || this.createDirectory(e.path);
                    let l = this.getFilePathByUrl(i);
                    this.writeDataToFile(new Uint8Array(t), l) ? (this.updateImageList(i, s), this.loadLocalImage(l, a, r, o), this.logMessage("Remote write file succeed.")) : cc_mtt.vv.ConsoleLog.error("Remote write file failed.")
                } else cc_mtt.vv.ConsoleLog.error("Remote download file failed.")
            }, this.loadImage = (e, t, i, s, a) => {
                let r = m(e),
                    o = null;
                if (this.logMessage("WebImageLoader loadImage", e, t, r), this.removeExpired(r), this.imageList.has(r)) {
                    o = this.imageList.get(r);
                    let l = o.getFilePath();
                    this.logMessage("WebImageLoader loadImage", this.isFileExist(l), o.lastModified == t), this.isFileExist(l) && o.lastModified == t ? this.loadLocalImage(l, i, s, a) : g.requestWebImage(e, this.saveLocalImage, this.loadImageError, i, s, a)
                } else g.requestWebImage(e, this.saveLocalImage, this.loadImageError, i, s, a);
                this.logMessage("WebImageLoader imageList", this.imageList, JSON.stringify(this.imageList))
            }, this.loadImageError = e => {
                this.logMessage("WebImageLoader error", e)
            }, this.isNative() && (e.path = this.getWritablePath() + this.folderName + "/"), this.load(), this.removeAllExpired()
        }
        static getExtension(e) {
            return e.split("?").shift().split(".").pop()
        }
        checkAndLoadWebImage(e, t, i, s) {
            g.requestWebHead(e, this.loadImage, this.loadImageError, t, i, s)
        }
        getFilePathByFileName(t, i) {
            return e.path + t + "." + i
        }
        getFilePathByUrl(t) {
            let i = m(t),
                s = "";
            if (this.imageList.has(i)) {
                s = this.imageList.get(i).getFilePath()
            } else {
                let a = e.getExtension(t);
                s = this.getFilePathByFileName(i, a)
            }
            return s
        }
        isNative() {
            return r.isNative
        }
        getWritablePath() {
            return o.fileUtils.getWritablePath()
        }
        isDirectoryExist(e) {
            return o.fileUtils.isDirectoryExist(e)
        }
        isFileExist(e) {
            return o.fileUtils.isFileExist(e)
        }
        createDirectory(e) {
            return o.fileUtils.createDirectory(e)
        }
        removeFile(e) {
            return o.fileUtils.removeFile(e)
        }
        writeDataToFile(e, t) {
            return this.logMessage("WebImageLoader writeDataToFile", t), o.fileUtils.writeDataToFile(new Uint8Array(e), t)
        }
        updateImageList(e, t) {
            let i = m(e),
                s = null;
            this.imageList.has(i) ? (s = this.imageList.get(i), s.changeLastModified(t)) : (s = new c(e, i, t), this.imageList.set(i, s)), this.save()
        }
        removeImageList(e) {
            this.imageList.delete(e) && this.save()
        }
        removeExpired(e) {
            if (this.logMessage("WebImageLoader removeExpired", e, this.imageList.has(e)), this.imageList.has(e)) {
                let t = this.imageList.get(e),
                    i = (new Date).getTime();
                i - t.timestamp > this.expiredTimeInterval && (this.logMessage("WebImageLoader removeExpired", t, i, i - t.timestamp), this.isNative && this.removeFile(t.getFilePath()), this.removeImageList(e))
            }
        }
        removeAllExpired() {
            this.logMessage("WebImageLoader removeAllExpired before", this.imageList.size, this.imageList), this.imageList.forEach(((e, t) => {
                this.removeExpired(t)
            })), this.logMessage("WebImageLoader removeAllExpired after", this.imageList.size, this.imageList)
        }
        logMessage(...e) {}
        loadFromWeb(e, t, i, r) {
            null != t ? (this.logMessage("WebImageLoader loadFromWeb url", e), s.loadRemote(e, ((s, o) => {
                if (r && r instanceof Function) r(s, o);
                else {
                    if (s) return cc_mtt.vv.ConsoleLog.error("WebImageLoader loadFromWeb error!\nurl: " + e + "\nerror: "), cc_mtt.vv.ConsoleLog.error(s), void(i && (t.spriteFrame = i));
                    if (o) try {
                        t.spriteFrame = new a
                    } catch (s) {
                        cc_mtt.vv.ConsoleLog.error("trycatch WebImageLoader loadFromWeb error!\nurl: " + e + "\nerror: "), cc_mtt.vv.ConsoleLog.error(s), i && (t.spriteFrame = i)
                    } else cc_mtt.vv.ConsoleLog.error("WebImageLoader loadFromWeb tex is null")
                }
            }))) : cc_mtt.vv.ConsoleLog.error("WebImageLoader loadFromWeb sprite is null")
        }
        loadWebImage(e, t, i, s) {
            this.isNative() ? this.checkAndLoadWebImage(e, t, i, s) : this.loadFromWeb(e, t, i, s)
        }
        releaseWebImage(e) {
            e && e.length > 0 && (this.isNative() ? this.releaseLocalImage(e) : l.release(e))
        }
        releaseLocalImage(e) {
            let t = m(e),
                i = this.getFilePathByUrl(e);
            this.logMessage("WebImageLoader releaseLocalImage", this.imageList.has(t), e, i), l.release(i)
        }
        save() {
            let e = [];
            this.imageList.forEach((t => {
                e.push(t)
            }));
            let t = JSON.stringify(e);
            r.localStorage.setItem(this.storageKey, t), this.logMessage("WebImageLoader save", this.imageList, e, JSON.stringify(e))
        }
        load() {
            this.imageList.clear();
            let e = r.localStorage.getItem(this.storageKey),
                t = null;
            if (e && (t = JSON.parse(e), t && t.length))
                for (const e of t) this.imageList.set(e.fileName, new c(e.url, e.fileName, e.lastModified, e.extension, e.timestamp));
            this.logMessage("WebImageLoader load", this.imageList, t, e)
        }
    })._instance = null, n.path = "", h = n)) || h);
    t._RF.pop()
}