import * as i from "./cc.js";
import * as s from "./cc.js";

function main() {
    var e, h, r;
    i._RF.push({}, "685d3w+9n1PrZTDFyuxfWIP", "JsLiveVideo", void 0);
    const {
        ccclass: o,
        property: u
    } = s;
    let n = o(e = class {
        constructor() {
            this.options = null, this.width = 0, this.height = 0, this.curwidth = 0, this.curheight = 0, this.buff = null, this.curbuff = null, this.buffState = -1, this.buffOpt = 0, this.bytesPerColor = 3, this.renderClk = 0, this.enabled = !1
        }
        init(t) {
            this.options = t, this.bytesPerColor = this.options && 4 == this.options.bytesPerColor ? 4 : 3, this.enabled = !0
        }
        resize(t, i) {
            this.buffState = 0, this.buffOpt = 0, this.width = 0 | t, this.height = 0 | i, this.buff = null
        }
        render(t, i, s) {
            this.renderClk = JSMpeg.Now(), this.enabled && -1 != this.buffState && 2 != this.buffOpt && (this.buffOpt = 1, this.buffState = 0, this.buff || (this.buff = new Uint8Array(this.width * this.height * this.bytesPerColor)), 4 == this.bytesPerColor ? this.YCbCrToRGBA(t, i, s, this.buff) : this.YCbCrToRGB(t, i, s, this.buff), this.buffState = 1, this.buffOpt = 0)
        }
        renderProgress(t) {}
        destroy() {
            this.clearBuff()
        }
        YCbCrToRGBA(t, i, s, e) {
            for (var h, r, o, u, n, d = this.width + 15 >> 4 << 4, a = d >> 1, l = 0, p = d, f = d + (d - this.width), c = 0, m = a - (this.width >> 1), b = 0, g = 4 * this.width, w = 4 * this.width, S = this.width >> 1, y = this.height >> 1, v = 0; v < y; v++) {
                for (var M = 0; M < S; M++) {
                    h = i[c], r = s[c], c++, o = h + (103 * h >> 8) - 179, u = (88 * r >> 8) - 44 + (183 * h >> 8) - 91, n = r + (198 * r >> 8) - 227;
                    var T = t[l++],
                        P = t[l++];
                    e[b] = T + o, e[b + 1] = T - u, e[b + 2] = T + n, e[b + 3] = 255, e[b + 4] = P + o, e[b + 5] = P - u, e[b + 6] = P + n, e[b + 7] = 255, b += 8;
                    var O = t[p++],
                        C = t[p++];
                    e[g] = O + o, e[g + 1] = O - u, e[g + 2] = O + n, e[g + 3] = 255, e[g + 4] = C + o, e[g + 5] = C - u, e[g + 6] = C + n, e[g + 7] = 255, g += 8
                }
                l += f, p += f, b += w, g += w, c += m
            }
        }
        YCbCrToRGB(t, i, s, e) {
            for (var h, r, o, u, n, d = this.width + 15 >> 4 << 4, a = d >> 1, l = 0, p = d, f = d + (d - this.width), c = 0, m = a - (this.width >> 1), b = 0, g = 3 * this.width, w = 3 * this.width, S = this.width >> 1, y = this.height >> 1, v = 0; v < y; v++) {
                for (var M = 0; M < S; M++) {
                    h = i[c], r = s[c], c++, o = h + (103 * h >> 8) - 179, u = (88 * r >> 8) - 44 + (183 * h >> 8) - 91, n = r + (198 * r >> 8) - 227;
                    var T = t[l++],
                        P = t[l++];
                    e[b] = T + o, e[b + 1] = T - u, e[b + 2] = T + n, e[b + 3] = P + o, e[b + 4] = P - u, e[b + 5] = P + n, b += 6;
                    var O = t[p++],
                        C = t[p++];
                    e[g] = O + o, e[g + 1] = O - u, e[g + 2] = O + n, e[g + 3] = C + o, e[g + 4] = C - u, e[g + 5] = C + n, g += 6
                }
                l += f, p += f, b += w, g += w, c += m
            }
        }
        getBuff() {
            if (-1 == this.buffState) return null;
            if (1 == this.buffState && 1 != this.buffOpt) {
                this.buffOpt = 2, !this.curbuff || this.curwidth == this.width && this.curheight == this.height || (this.curbuff = null);
                var t = this.curbuff;
                this.curbuff = this.buff, this.buff = t, this.curwidth = this.width, this.curheight = this.height, this.buffState = 0, this.buffOpt = 0
            }
            return this.curbuff
        }
        clearBuff() {
            this.buffState = -1, this.buffOpt = 0, this.buff = null, this.curbuff = null
        }
    }) || e;
    o(h = class {
        constructor() {
            this.running = !1, this.workCb = null, this.workParam = null, this.handle = 0
        }
        abort() {
            this.running = !1, clearTimeout(this.handle)
        }
        isRunning() {
            return this.running
        }
        start(t, i) {
            this.running || this.workCb || "function" != typeof t || (this.running = !0, this.workCb = t, this.workParam = i, this.handle = setTimeout(this.doWork.bind(this), 1))
        }
        doWork() {
            this.running && (this.workCb(this.workParam), this.handle = setTimeout(this.doWork.bind(this), 10))
        }
    }), t("default", o(r = class {
        constructor() {
            this.url = "", this.options = null, this.initFinish = !1, this.maxAudioLag = 0, this.loop = !1, this.autoplay = !1, this.wantsToPlay = !1, this.isPlaying = !1, this.paused = !0, this.unpauseOnShow = !1, this.workerId = null, this.startTime = 0, this.playStatus = 0, this.renderTimeOutCb = null, this.renderTimeOutParm = null, this.source = null, this.demuxer = null, this.wasmModule = null, this.video = null, this.renderer = null, this.audio = null, this.audioOut = null
        }
        init(t, i) {
            if (this.initFinish = !1, this.playStatus = 0, this.url = t, this.options = i || {}, t.match(/^wss?:\/\//) || console.log("invalid url"), this.options.onSourceEstablished = this.onSourceEstablished.bind(this), this.source = new JSMpeg.Source.WebSocket(t, this.options), this.options.streaming = !0, this.maxAudioLag = this.options.maxAudioLag || .25, this.loop = !1 !== this.options.loop, this.autoplay = !!this.options.autoplay, this.demuxer = new JSMpeg.Demuxer.TS(this.options), this.source.connect(this.demuxer), !this.options.disableWebAssembly && JSMpeg.WASMModule.IsSupported() && (this.wasmModule = new JSMpeg.WASMModule, this.options.wasmModule = this.wasmModule), !1 !== this.options.video && (this.video = this.options.wasmModule ? new JSMpeg.Decoder.MPEG1VideoWASM(this.options) : new JSMpeg.Decoder.MPEG1Video(this.options), this.renderer = new n, this.renderer.init(this.options), this.demuxer.connect(JSMpeg.Demuxer.TS.STREAM.VIDEO_1, this.video), this.video.connect(this.renderer)), !1 !== this.options.audio && JSMpeg.AudioOutput.WebAudio.IsSupported() && (this.audio = this.options.wasmModule ? new JSMpeg.Decoder.MP2AudioWASM(this.options) : new JSMpeg.Decoder.MP2Audio(this.options), this.audioOut = new JSMpeg.AudioOutput.WebAudio(this.options), this.demuxer.connect(JSMpeg.Demuxer.TS.STREAM.AUDIO_1, this.audio), this.audio.connect(this.audioOut)), this.paused = !0, this.unpauseOnShow = !1, !1 !== this.options.pauseWhenHidden && document.addEventListener("visibilitychange", this.showHide.bind(this)), this.wasmModule)
                if (JSMpeg.WASM_BINARY_INLINED) {
                    var s = JSMpeg.Base64ToArrayBuffer(JSMpeg.WASM_BINARY_INLINED);
                    this.wasmModule.loadFromBuffer(s, this.startLoading.bind(this))
                } else this.wasmModule.loadFromFile("jsmpeg.wasm", this.startLoading.bind(this));
            else this.startLoading()
        }
        startLoading() {
            this.initFinish = !0, this.autoplay && this.playMedia()
        }
        playMedia() {
            this.playStatus = 1, this.source.start(), this.play()
        }
        showHide() {
            "hidden" === document.visibilityState ? (this.unpauseOnShow = this.wantsToPlay, this.pause()) : this.unpauseOnShow && this.play()
        }
        play() {
            this.workerId || (this.renderer && (this.renderer.renderClk = JSMpeg.Now()), this.workerId = requestAnimationFrame(this.updateFrame.bind(this)), this.wantsToPlay = !0, this.paused = !1)
        }
        pause() {
            this.paused || (cancelAnimationFrame(this.workerId), this.workerId = null, this.wantsToPlay = !1, this.isPlaying = !1, this.paused = !0, this.audio && this.audio.canPlay && (this.audioOut.stop(), this.seek(this.getCurrentTime())), this.options.onPause && this.options.onPause(this))
        }
        getVolume() {
            return this.audioOut ? this.audioOut.volume : 0
        }
        setVolume(t) {
            this.audioOut && (this.audioOut.volume = t)
        }
        stopMedia() {
            this.playStatus = 0, this.source.destroy(), this.stop()
        }
        stop() {
            this.pause(), this.seek(0), this.video && !1 !== this.options.decodeFirstFrame && this.video.decode()
        }
        destroy() {
            this.playStatus = 0, this.pause(), this.source.destroy(), this.video && this.video.destroy(), this.renderer && this.renderer.destroy(), this.audio && this.audio.destroy(), this.audioOut && this.audioOut.destroy(), this.wasmModule = null
        }
        seek(t) {
            var i = this.audio && this.audio.canPlay ? this.audio.startTime : this.video.startTime;
            this.video && this.video.seek(t + i), this.audio && this.audio.seek(t + i), this.startTime = JSMpeg.Now() - t
        }
        getCurrentTime() {
            return this.audio && this.audio.canPlay ? this.audio.currentTime - this.audio.startTime : this.video.currentTime - this.video.startTime
        }
        setCurrentTime(t) {
            this.seek(t)
        }
        updateFrame() {
            if (this.workerId = requestAnimationFrame(this.updateFrame.bind(this)), this.source.established) {
                var t = JSMpeg.Now();
                this.isPlaying || (this.isPlaying = !0, this.startTime = t - this.getCurrentTime(), this.options.onPlay && this.options.onPlay(this)), this.updateForStreaming(), this.renderTimeOutCb && this.renderer && t - this.renderer.renderClk > 5 && (console.log("do renderTimeOutCb()"), this.renderer.renderClk = t, this.renderTimeOutCb.call(this.renderTimeOutParm))
            } else this.renderer && this.renderer.renderProgress(this.source.progress)
        }
        updateForStreaming() {
            if (this.video && this.video.decode(), this.audio) {
                var t = !1;
                do {
                    this.audioOut.enqueuedTime > this.maxAudioLag && (this.audioOut.resetEnqueuedTime(), this.audioOut.enabled = !1), t = this.audio.decode()
                } while (t);
                this.audioOut.enabled = !0
            }
        }
        nextFrame() {
            return !(!this.source.established || !this.video) && this.video.decode()
        }
        getPixelData() {
            return this.renderer ? this.renderer.getBuff() : null
        }
        getPixelSize() {
            return this.renderer ? this.renderer.curwidth * this.renderer.curheight * this.renderer.bytesPerColor : 0
        }
        getPixelWidth() {
            return this.renderer ? this.renderer.curwidth : 0
        }
        getPixelHeight() {
            return this.renderer ? this.renderer.curheight : 0
        }
        getPixelFormat() {
            return this.renderer ? this.renderer.bytesPerColor : 0
        }
        mediaStatus() {
            return 0 == this.playStatus ? 0 : 2
        }
        getUrl() {
            return this.url
        }
        setUrl(t) {
            this.url = t, this.url.match(/^wss?:\/\//) || console.log("invalid url"), this.source.url = this.url
        }
        setRenderTimeOutCb(t, i) {
            this.renderTimeOutCb = t, this.renderTimeOutParm = i
        }
        onSourceEstablished(t) {
            this.video && this.video.reset(), this.audio
        }
    }) || r);
    i._RF.pop()
}