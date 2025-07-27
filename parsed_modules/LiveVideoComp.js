import * as t from "./cc.js";
import * as d from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as g from "./LiveVideoAdapter.js";
import * as v from "./AssetsManager.js";
import * as V from "./TweenControl.js";

function main() {
    var C;
    i._RF.push({}, "1fdedtnME5FK7YGRGH3bGzK", "LiveVideoComp", void 0);
    const {
        ccclass: c,
        property: p
    } = l;
    e("default", c(C = class extends t {
        constructor(...e) {
            super(...e), this.liveVideo = null, this.autoPlayOnLoadFinish = !0, this.url = "", this.renderClk = 0, this.cameraColor = null
        }
        onLoad() {
            var e = 1 == o.isBrowser ? "web" : "native";
            this.liveVideo = g.getAdapter(e), this.liveVideo.setMediaStopTimeOutCb(this._mediaStopTimeOut, this), this.liveVideo.setMediaReadyTimeOutCb(this._mediaReadyTimeOut, this), this.liveVideo.setMediaPlayTimeOutCb(this._mediaPlayTimeOut, this), this.liveVideo.enableLayout(), this.registerMsg()
        }
        start() {
            o.isBrowser && (this.cameraColor = s.getScene().getComponentInChildren(n).cameraComponent.clearColor, this.getComponent(d).destroy())
        }
        update(e) {
            if (!o.isBrowser) {
                var i = this.getComponent(d);
                if (this.liveVideo.loadFinish()) {
                    var t = this.liveVideo.getPixelData(),
                        n = this.liveVideo.getPixelWidth(),
                        r = this.liveVideo.getPixelHeight();
                    if (t)
                        if (i.spriteFrame.width != n || i.spriteFrame.height != r) {
                            let e = new a;
                            e.texture = v.texture_InitWithData(t, this.liveVideo.getPixelFormat(), n, r, !1), i.spriteFrame = e
                        } else {
                            const e = [],
                                o = [],
                                d = new h.BufferTextureCopy;
                            d.texOffset.x = 0, d.texOffset.y = 0, d.texExtent.width = n, d.texExtent.height = r, e.push(t), o.push(d), s.root.device.copyBuffersToTexture(e, i.spriteFrame.texture.getGFXTexture(), o)
                        }
                }
            }
        }
        onDestroy() {
            u.MessageCenter.unregister("LiveVideo_onChangeXianLu", this.node), u.MessageCenter.unregister("onExitCowboyLiveVideo", this.node), u.MessageCenter.unregister("onBackMainScene", this.node), u.MessageCenter.unregister("videoCowBoyToLogout", this.node), u.MessageCenter.unregister("stopVideoCowBoy", this.node), u.MessageCenter.unregister("playVideoCowBoy", this.node), u.MessageCenter.unregister(u.Enum.MessageCenterAction.OnExitMainApp, this.node), V.stopAll(this.node), this.liveVideo.loadFinish() && this.liveVideo.release(), this.liveVideo.disableLayout()
        }
        registerMsg() {
            u.MessageCenter.register("LiveVideo_onChangeXianLu", this.onChangeXianLu.bind(this), this.node), u.MessageCenter.register("onExitCowboyLiveVideo", this.onExitCowboyLiveVideo.bind(this), this.node), u.MessageCenter.register("onBackMainScene", this.onBackMainScene.bind(this), this.node), u.MessageCenter.register("videoCowBoyToLogout", this.onLogout.bind(this), this.node), u.MessageCenter.register("stopVideoCowBoy", this.onStopVideo.bind(this), this.node), u.MessageCenter.register("playVideoCowBoy", this.onPlayVideo.bind(this), this.node), u.MessageCenter.register(u.Enum.MessageCenterAction.OnExitMainApp, this.onStopVideo.bind(this), this.node)
        }
        onChangeXianLu(e) {
            if (V.stopAll(this.node), this.liveVideo.loadFinish()) {
                this.autoPlayOnLoadFinish = !1;
                var i = this.liveVideo.getFilePath(),
                    t = this.liveVideo.mediaStatus();
                if (i === e && (1 == t || 2 == t)) return;
                this.liveVideo.stopMedia(), this.liveVideo.setFilePath(e), this._onPlayMedia()
            } else r(this.node).delay(.01).call((() => {
                this.onChangeXianLu(e)
            })).start();
            this.url = e
        }
        _onPlayMedia() {
            V.stopAll(this.node), 0 == this.liveVideo.mediaStatus() ? (this.renderClk = Date.now(), this.liveVideo.playMedia()) : r(this.node).delay(.01).call(this._onPlayMedia.bind(this)).start()
        }
        onExitCowboyLiveVideo() {
            this.liveVideo.loadFinish() && (this.liveVideo.stopMedia(), this._doExitCowboyLiveVideo())
        }
        _doExitCowboyLiveVideo() {
            V.stopAll(this.node), 0 == this.liveVideo.mediaStatus() ? this.destroy() : r(this.node).delay(.01).call(this._doExitCowboyLiveVideo.bind(this)).start()
        }
        onBackMainScene() {
            this.liveVideo.loadFinish() && (this.liveVideo.stopMedia(), this._doBackMainScene())
        }
        _doBackMainScene() {
            V.stopAll(this.node), 0 == this.liveVideo.mediaStatus() ? this.destroy() : r(this.node).delay(.01).call(this._doBackMainScene.bind(this)).start()
        }
        onLogout() {
            this.liveVideo.loadFinish() && (this.liveVideo.stopMedia(), this._doLogout())
        }
        _doLogout() {
            V.stopAll(this.node), 0 == this.liveVideo.mediaStatus() ? (this.destroy(), u.netWorkManager.onThredEndTologout()) : r(this.node).delay(.01).call(this._doLogout.bind(this)).start()
        }
        onPlayVideo() {
            if (this.liveVideo.loadFinish()) {
                if (2 == this.liveVideo.mediaStatus()) return;
                this._onPlayMedia()
            }
        }
        onPauseVideo() {
            this.liveVideo.loadFinish() && this.liveVideo.pauseMedia()
        }
        onSeekToPosition(e) {
            this.liveVideo.loadFinish() && this.liveVideo.seekToPosition(e)
        }
        onStopVideo() {
            this.liveVideo.loadFinish() && this.liveVideo.stopMedia()
        }
        _mediaStopTimeOut() {
            console.log("->mediaStopTimeOut"), o.isBrowser ? u.MessageCenter.send("on_videocowboy_showVideoStatusTips") : Date.now() - this.renderClk >= 5e3 && (u.MessageCenter.send("on_videocowboy_showVideoStatusTips"), this._onPlayMedia())
        }
        _mediaReadyTimeOut() {
            console.log("->mediaReadyTimeOut"), o.isBrowser ? u.MessageCenter.send("on_videocowboy_showVideoStatusTips") : Date.now() - this.renderClk >= 5e3 && (u.MessageCenter.send("on_videocowboy_showVideoStatusTips"), this.liveVideo.stopMedia(), this._onPlayMedia())
        }
        _mediaPlayTimeOut() {
            console.log("->mediaPlayTimeOut"), o.isBrowser ? u.MessageCenter.send("on_videocowboy_showVideoStatusTips") : Date.now() - this.renderClk >= 5e3 && (u.MessageCenter.send("on_videocowboy_showVideoStatusTips"), this.liveVideo.stopMedia(), this._onPlayMedia())
        }
    }) || C);
    i._RF.pop()
}