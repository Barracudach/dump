import * as t from "./cc.js";
import * as i from "./cc.js";
import * as s from "./cc.js";

function main() {
    var c;
    t._RF.push({}, "1d3aaT4FQFOq6pcAS81EY+Z", "AudioSourceExtra", void 0);
    const {
        ccclass: r,
        property: d
    } = i;
    e("AudioSourceExtra", r("AudioSourceExtra")(c = class extends s {
        constructor(...e) {
            super(...e), this._shouldRecycleOnEnded = !1, this._isBGM = !0, this._extraId = 0, this._finishCallback = void 0
        }
        get isBGM() {
            return this._isBGM
        }
        set isBGM(e) {
            this._isBGM = e
        }
        get shouldRecycleOnEnded() {
            return this._shouldRecycleOnEnded
        }
        set shouldRecycleOnEnded(e) {
            this._shouldRecycleOnEnded = e
        }
        get id() {
            return this._extraId
        }
        set id(e) {
            this._extraId = e
        }
        get finishCallback() {
            return this._finishCallback
        }
        set finishCallback(e) {
            this._finishCallback = e
        }
    }) || c);
    t._RF.pop()
}