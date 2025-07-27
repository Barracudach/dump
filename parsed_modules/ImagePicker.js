import * as t from "./cc.js";
import * as d from "./cc.js";
import * as g from "./cc.js";
import * as h from "./cc.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as l from "./cc.js";
import * as i from "./cc.js";
import * as m from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as u from "./cv.js";
import * as p from "./CircleSprite.js";
import * as b from "./NativeEventCMD.js";

function main() {
    var v;
    t._RF.push({}, "1c270uuBh1FI4NrfdtbQiDp", "ImagePicker", void 0);
    const {
        ccclass: S,
        property: y
    } = m;
    e("ImagePicker", S(v = class extends i {
        constructor(...e) {
            super(...e), this.isRun = !1, this.spImg = null, this.PhotoObj = null, this.headStr = null, this.customHeadTime = 0, this.scaleNum = 1.5, this.headScale = 1
        }
        onLoad() {
            u.MessageCenter.register(u.config.CHANGE_LANGUAGE, this.initLanguage.bind(this), this.node), n("Panel_2", this.node).on(a.EventType.TOUCH_END, (e => {
                e.propagationStopped = !0
            }), this), this.initLanguage()
        }
        init(e) {
            this.spImg = e, s.isBrowser ? (this.PhotoObj || (this.PhotoObj = document.createElement("input"), this.PhotoObj.setAttribute("type", "file"), this.PhotoObj.setAttribute("accept", "image/*"), document.body.appendChild(this.PhotoObj), this.PhotoObj.addEventListener("change", this.tmpSelectFile.bind(this), !1)), this.PhotoObj.click()) : this.show(), s.os == s.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/ImagePicker", "getPermissions", "()V")
        }
        initLanguage() {
            u.StringTools.setLabelString(this.node, "m_layer/btnPhoto/Label", "ImagePicker_btnPhoto"), u.StringTools.setLabelString(this.node, "m_layer/btnCamera/Label", "ImagePicker_btnCamera"), u.StringTools.setLabelString(this.node, "m_layer/btnCancel/Label", "ImagePicker_btnCancel")
        }
        onDestroy() {
            u.MessageCenter.unregister(u.config.CHANGE_LANGUAGE, this.node)
        }
        onImageSaved(e) {
            c.loadRemote(e.msg, function(e, t) {
                console.log("Result should be a texture: " + (t instanceof r), !1, null), p.setHeadTexture(this.spImg, t, this.headScale)
            }.bind(this)), this.setHeadString(e.base64str)
        }
        setHeadString(e) {
            this.headStr = e, this.headStr = this.headStr.replace(/\+/g, "-"), this.headStr = this.headStr.replace(/\//g, "_")
        }
        onBtnPhotoClick() {
            u.native.openImagePicker()
        }
        onBtnCameraClick() {
            s.os == s.OS.IOS ? u.native.invokeAsynFunc(b.KEY_OPEN_CAMERA) : s.os == s.OS.ANDROID && o.reflection.callStaticMethod("com/cocos/game/ImagePicker", "openCamera", "()V")
        }
        onBtnCancelClick() {
            this.hide()
        }
        static add(e, t) {
            return u.action.addChildToScene(null, e, [], t, !0)
        }
        show() {
            this.node.active = !0;
            let e = n("m_layer", this.node);
            e.setScale(this.scaleNum, this.scaleNum);
            let t = e.getComponent(h).contentSize.height * this.scaleNum;
            this.isRun || (this.isRun = !0, e.setPosition(e.position.x, e.position.y - t)), l(e).by(.3, {
                position: d(0, t, e.getPosition().z)
            }).start();
            var i = n("Panel_2", this.node).getComponent(g);
            i && (i.opacity = 0, l(i).to(.2, {
                opacity: 255
            }).start())
        }
        hide() {
            let e = n("m_layer", this.node),
                t = e.getComponent(h).contentSize.height * this.scaleNum;
            l(e).by(.2, {
                position: d(0, -t, e.getPosition().z)
            }).start();
            var i = n("Panel_2", this.node).getComponent(g);
            i && l(i).to(.2, {
                opacity: 0
            }).call(function() {
                this.node.active = !1
            }.bind(this)).start()
        }
        loadLocalimg(e) {
            var t = document.getElementById("divCreator");
            null === t && (t = document.createElement("div"), document.body.appendChild(t), t.style.position = "absolute", t.id = "divCreator", t.style.width = "100", t.style.height = "100", t.style.backgroundColor = "#ffffcc"), t.innerHTML = "<img id=imghead>";
            var i = document.getElementById("imghead");
            i.onload = function() {
                let e = new r;
                e.initWithElement(i), e.handleLoadedTexture(), p.setHeadTexture(this.spImg, e, this.headScale)
            }.bind(this), i.setAttribute("src", e), t.style.display = "none", t.style.visibility = "hidden"
        }
        tmpSelectFile(e) {
            var t = e.target.files[0],
                i = new FileReader;
            i.readAsDataURL(t), i.onload = function() {
                this.canvasDataURL(i.result, 100)
            }.bind(this)
        }
        myCreateObjectURL(e) {
            return void 0 !== window.URL ? window.URL.createObjectURL(e) : window.webkitURL.createObjectURL(e)
        }
        canvasDataURL(e, t) {
            var i = new Image;
            i.src = e;
            var n = 0,
                a = 0;
            i.onload = function() {
                var e = document.createElement("img");
                e.src = i.src, n = e.width, a = e.height;
                var s = document.createElement("canvas"),
                    o = 1;
                o = n > a ? t / a : t / n, s.width = n * o, s.height = a * o, s.getContext("2d").drawImage(e, 0, 0, s.width, s.height);
                var c = s.toDataURL("image/jpeg");
                this.loadLocalimg(c), this.setHeadString(c.slice(c.search(",") + 1)), this.customHeadTime = (new Date).getTime()
            }.bind(this)
        }
    }) || v);
    t._RF.pop()
}