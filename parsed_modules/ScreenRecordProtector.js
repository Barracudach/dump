import * as t from "./cc.js";
import * as r from "./cc.js";
import * as _ from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as n from "./cc.js";
import * as i from "./cv.js";

function main() {
    _._RF.push({}, "e463aNJJcBMwJCtsaCJbPHd", "ScreenRecordProtector", void 0);
    var o = function(e) {
        return e[e.PRINT_SCREEN_TAKEN = 1] = "PRINT_SCREEN_TAKEN", e[e.SCREEN_CAPTURING_START = 2] = "SCREEN_CAPTURING_START", e[e.SCREEN_CAPTURING_STOP = 3] = "SCREEN_CAPTURING_STOP", e
    }(o || {});
    class a {
        static onPrintScreenCb(e) {
            if (!i || !i.appConfig || i.appConfig.getSecurityConfig().screenCaptureAllowed) return;
            let _ = "zh_CN/commonPrefab/ScreenCapturePopup";
            switch (e = parseInt(e)) {
                case o.PRINT_SCREEN_TAKEN:
                    break;
                case o.SCREEN_CAPTURING_START:
                    n.load(_, r, (function(e, n) {
                        if (e) return void t(e.message || e.toString());
                        a._inst_msg_screen = c(n), s.getScene().addChild(a._inst_msg_screen), a._inst_msg_screen.setSiblingIndex(i.Enum.ZORDER_TYPE.SCREEN_PROTECTOR)
                    }));
                    break;
                case o.SCREEN_CAPTURING_STOP:
                    a._inst_msg_screen && (a._inst_msg_screen.removeFromParent(), n.release(_, r))
            }
        }
    }
    e("default", a), a._inst_msg_screen = null, window.OnPrintScreenCb = a.onPrintScreenCb, _._RF.pop()
}