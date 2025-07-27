import * as r from "./cc.js";

function main() {
    r._RF.push({}, "791067B43VNG7ResDByICNL", "IFrameRegister", void 0);
    class t {
        static registerIframe(e) {
            this.IFramesByName[e.frameName] = {
                origin: e.frameOrigin,
                frameRef: e.frameRef
            }
        }
        static deRegisterIframe(e) {
            this.IFramesByName[e] && delete this.IFramesByName[e]
        }
        static getIframe(e) {
            return this.IFramesByName[e]
        }
        static getParentOrigin() {
            return this.parentOrigin
        }
    }
    e("default", t), t.IFramesByName = {}, t.parentOrigin = "*", r._RF.pop()
}