import * as t from "./cc.js";
import * as i from "./cc.js";
import * as a from "./cc.js";
import * as s from "./JsLiveVideo.js";
import * as r from "./HtmlLiveVideo.js";

function main() {
    var d, n, l, u, o;
    t._RF.push({}, "35db2OZMYNA3a5jBlMX1smU", "LiveVideoAdapter", void 0);
    const {
        ccclass: p,
        property: h
    } = i;
    let g = p(d = class {
            loadFinish() {
                return !0
            }
            free() {}
            checkMediaStatus() {}
            getFilePath() {
                return ""
            }
            setFilePath(e) {}
            mediaStatus() {
                return 0
            }
            playMedia() {}
            pauseMedia() {}
            stopMedia() {}
            seekToPosition(e) {}
            retain() {}
            release() {}
            getPixelData() {
                return 0
            }
            getPixelSize() {
                return 0
            }
            getPixelWidth() {
                return 0
            }
            getPixelHeight() {
                return 0
            }
            getPixelFormat() {
                return a.PixelFormat.RGB888
            }
            enableRealTime() {}
            disableRealTime() {}
            enableInfiniteBuffer() {}
            disableInfiniteBuffer() {}
            enableFramedrop() {}
            disableFramedrop() {}
            setSyncAndMode(e, t) {}
            getDebugInfo() {
                return ""
            }
            getDuration() {
                return 0
            }
            getTime() {
                return 0
            }
            setMediaStopTimeOutCb(e, t) {}
            setMediaReadyTimeOutCb(e, t) {}
            setMediaPlayTimeOutCb(e, t) {}
            enableLayout() {}
            disableLayout() {}
        }) || d,
        b = p(n = class extends g {
            constructor(...e) {
                super(...e), this.adaptee = null
            }
            init() {
                this.adaptee = new LiveVideo
            }
            loadFinish() {
                return !0
            }
            free() {}
            checkMediaStatus() {}
            getFilePath() {
                return this.adaptee.getFilePath()
            }
            setFilePath(e) {
                this.adaptee.setFilePath(e)
            }
            mediaStatus() {
                return this.adaptee.mediaStatus()
            }
            playMedia() {
                this.adaptee.playMedia()
            }
            pauseMedia() {
                this.adaptee.pauseMedia()
            }
            stopMedia() {
                this.adaptee.stopMedia()
            }
            seekToPosition(e) {
                this.adaptee.seekToPosition(e)
            }
            retain() {
                this.adaptee.retain()
            }
            release() {
                this.adaptee.release()
            }
            getPixelData() {
                return this.adaptee.getPixelData()
            }
            getPixelSize() {
                return this.adaptee.getPixelSize()
            }
            getPixelWidth() {
                return this.adaptee.getPixelWidth()
            }
            getPixelHeight() {
                return this.adaptee.getPixelHeight()
            }
            getPixelFormat() {
                return a.PixelFormat.RGBA8888
            }
            enableRealTime() {
                this.adaptee.enableRealTime()
            }
            disableRealTime() {
                this.adaptee.disableRealTime()
            }
            enableInfiniteBuffer() {
                this.adaptee.enableInfiniteBuffer()
            }
            disableInfiniteBuffer() {
                this.adaptee.disableInfiniteBuffer()
            }
            enableFramedrop() {
                this.adaptee.enableFramedrop()
            }
            disableFramedrop() {
                this.adaptee.disableFramedrop()
            }
            setSyncAndMode(e, t) {
                this.adaptee.setSyncAndMode(e, t)
            }
            getDebugInfo() {
                return this.adaptee.getDebugInfo()
            }
            getDuration() {
                return this.adaptee.getDuration()
            }
            getTime() {
                return this.adaptee.getTime()
            }
            setMediaStopTimeOutCb(e, t) {
                this.adaptee.setMediaStopTimeOutCb(e, t)
            }
            setMediaReadyTimeOutCb(e, t) {
                this.adaptee.setMediaReadyTimeOutCb(e, t)
            }
            setMediaPlayTimeOutCb(e, t) {
                this.adaptee.setMediaPlayTimeOutCb(e, t)
            }
            enableLayout() {}
            disableLayout() {}
        }) || n;
    p(l = class {
        constructor() {
            this.adaptee = null
        }
        init() {
            this.adaptee = new s, this.adaptee.init("ws://", {
                autoplay: !1,
                disableWebAssembly: !1,
                videoBufferSize: null,
                audio: !0
            })
        }
        loadFinish() {
            return this.adaptee.initFinish
        }
        free() {}
        checkMediaStatus() {}
        getFilePath() {
            return this.adaptee.getUrl()
        }
        setFilePath(e) {
            this.adaptee.setUrl(e)
        }
        mediaStatus() {
            return this.adaptee.mediaStatus()
        }
        playMedia() {
            this.adaptee.playMedia()
        }
        pauseMedia() {
            this.adaptee.pause()
        }
        stopMedia() {
            this.adaptee.stopMedia()
        }
        seekToPosition(e) {}
        retain() {}
        release() {
            this.adaptee.destroy()
        }
        getPixelData() {
            return this.adaptee.getPixelData()
        }
        getPixelSize() {
            return this.adaptee.getPixelSize()
        }
        getPixelWidth() {
            return this.adaptee.getPixelWidth()
        }
        getPixelHeight() {
            return this.adaptee.getPixelHeight()
        }
        getPixelFormat() {
            return 4 == this.adaptee.getPixelFormat() ? a.PixelFormat.RGBA8888 : a.PixelFormat.RGB888
        }
        enableRealTime() {}
        disableRealTime() {}
        enableInfiniteBuffer() {}
        disableInfiniteBuffer() {}
        enableFramedrop() {}
        disableFramedrop() {}
        setSyncAndMode(e, t) {}
        getDebugInfo() {
            return ""
        }
        getDuration() {
            return 0
        }
        getTime() {
            return 0
        }
        setMediaStopTimeOutCb(e, t) {}
        setMediaReadyTimeOutCb(e, t) {}
        setMediaPlayTimeOutCb(e, t) {
            this.adaptee.setRenderTimeOutCb(e, t)
        }
        enableLayout() {}
        disableLayout() {}
    }), p(u = class extends g {
        constructor(...e) {
            super(...e), this.adaptee = null
        }
        init() {
            this.adaptee = new r, this.adaptee.init()
        }
        loadFinish() {
            return !0
        }
        free() {}
        checkMediaStatus() {}
        getFilePath() {
            return this.adaptee.getUrl()
        }
        setFilePath(e) {
            this.adaptee.setUrl(e)
        }
        mediaStatus() {
            return this.adaptee.mediaStatus()
        }
        playMedia() {
            this.adaptee.playMedia()
        }
        pauseMedia() {}
        stopMedia() {
            this.adaptee.stopMedia()
        }
        seekToPosition(e) {}
        retain() {}
        release() {}
        getPixelData() {
            return null
        }
        getPixelSize() {
            return 0
        }
        getPixelWidth() {
            return 0
        }
        getPixelHeight() {
            return 0
        }
        getPixelFormat() {
            return a.PixelFormat.RGB888
        }
        enableRealTime() {}
        disableRealTime() {}
        enableInfiniteBuffer() {}
        disableInfiniteBuffer() {}
        enableFramedrop() {}
        disableFramedrop() {}
        setSyncAndMode(e, t) {}
        getDebugInfo() {
            return ""
        }
        getDuration() {
            return 0
        }
        getTime() {
            return 0
        }
        setMediaStopTimeOutCb(e, t) {}
        setMediaReadyTimeOutCb(e, t) {}
        setMediaPlayTimeOutCb(e, t) {}
        enableLayout() {
            this.adaptee.addLayoutListener()
        }
        disableLayout() {
            this.adaptee.removeLayoutListener()
        }
    }), e("default", p(o = class {
        static getAdapter(e) {
            var t;
            return "web" == e ? (t = new g, console.log("function" == typeof WebPlayerNew ? "video yes" : "video no")) : "native" == e ? (t = new b).init() : t = new g, t
        }
    }) || o);
    t._RF.pop()
}