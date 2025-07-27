import * as t from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as o from "./cv.js";
import * as i from "./AudioEngine.js";

function main() {
    var n, r;
    t._RF.push({}, "f84f3l9hrBFsYuY08+cVlEb", "VoiceMessagePlayer", void 0);
    const {
        ccclass: a
    } = s;
    e("VoiceMessage", a(n = class {
        constructor() {
            this.voiceId = 0, this.voiceClip = null
        }
    }) || n), e("VoiceMessagePlayer", a(r = class extends c {
        playVoiceMessage(e, t) {
            if (e) {
                cc_mtt.vv.ConsoleLog.log("play voice message...", e.getDuration());
                let c = 0;
                try {
                    c = o.AudioMgr.executePlay(e, !1, 1)
                } catch (e) {
                    return cc_mtt.vv.ConsoleLog.log(JSON.stringify(e)), 0
                }
                return t && i.setFinishCallback(c, t), cc_mtt.vv.ConsoleLog.log("return voice id", c), c
            }
            return 0
        }
        stopVoiceMessage(e) {
            e && i.stop(e)
        }
    }) || r);
    t._RF.pop()
}