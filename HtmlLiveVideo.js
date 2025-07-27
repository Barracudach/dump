import * as i from "./cc.js";
import * as e from "./cc.js";
import * as s from "./cc.js";

function main() {
    var a;
    e._RF.push({}, "8aadcBZXTVIJ7KzSJoBzU+H", "HtmlLiveVideo", void 0);
    const {
        ccclass: o,
        property: n
    } = s;
    t("default", o(a = class {
        constructor() {
            this.url = "", this.volume = 1, this.playStatus = 0, this.videoCanvas = null, this.gameCanvas = null, this.video = null
        }
        init() {
            if (this.volume = 1, this.gameCanvas = window.document.getElementById("GameCanvas"), this.videoCanvas = window.document.getElementById("VideoCanvas"), null == this.videoCanvas) {
                this.videoCanvas = document.createElement("canvas"), this.videoCanvas.id = "VideoCanvas";
                var t = this.videoCanvas.style;
                t.position = "absolute", t.zIndex = "-1", this.gameCanvas.parentElement.insertBefore(this.videoCanvas, this.gameCanvas)
            }
            this.updateLayout()
        }
        addLayoutListener() {
            i.setResizeCallback(this.resize.bind(this))
        }
        removeLayoutListener() {
            i.setResizeCallback(null), this.videoCanvas.width = 0, this.videoCanvas.height = 0, this.videoCanvas.style.visibility = "hidden"
        }
        getVolume() {
            return this.volume
        }
        setVolume(t) {
            this.volume != t && (this.volume = t, null != this.video && this.video.setVolume(this.volume))
        }
        playMedia() {
            this.playStatus = 1, this.play()
        }
        play() {
            var t = this.videoCanvas.id;
            null == this.video && (this.video = new WebPlayerNew, this.video.setView(t), this.video.setBufferTime(300), this.video.skipLoopFilter(32), this.video.setVolume(this.volume), this.video.on("start", (() => {})), this.video.on("stop", (() => {})), this.video.on("error", (() => {
                console.log("连接错误或播放发生错误")
            })), this.video.on("videoInfo", ((t, e) => {})), this.video.on("audioInfo", ((t, e) => {})), this.video.on("stats", (t => {}))), this.video.start(this.url)
        }
        stopMedia() {
            this.playStatus = 0, this.stop()
        }
        stop() {
            null != this.video && this.video.close()
        }
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
            return 0
        }
        mediaStatus() {
            return 0 == this.playStatus ? 0 : 2
        }
        getUrl() {
            return this.url
        }
        setUrl(t) {
            this.url = t
        }
        updateLayout() {
            let t = this.videoCanvas.style,
                e = this.gameCanvas.style,
                i = this.getStypeVal(e.width),
                s = this.getStypeVal(e.height);
            this.videoCanvas.width == i && this.videoCanvas.height == s || (this.videoCanvas.width = i, this.videoCanvas.height = s, null != this.video && this.video.resizeView(i, s)), t.transformOrigin = e.transformOrigin, t.transform = e.transform, t.visibility = "visible"
        }
        orientationChange() {
            this.updateLayout()
        }
        resize() {
            this.updateLayout()
        }
        getStypeVal(t) {
            return parseInt(t.substring(0, t.indexOf("px")))
        }
    }) || a);
    e._RF.pop()
}