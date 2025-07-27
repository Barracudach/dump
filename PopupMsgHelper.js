import * as t from "./cc.js";
import * as i from "./Enum.js";
import * as s from "./Enum.js";
import * as c from "./cv.js";

function main() {
    t._RF.push({}, "94415dE0Z9DXacIKQVizUH9", "PopupMsgHelper", void 0);
    let o = e("NDRPPopupMsgType", function(e) {
        return e[e.Success = 0] = "Success", e[e.Verifcation_Failed = 1] = "Verifcation_Failed", e[e.Verifcation_Review = 2] = "Verifcation_Review", e
    }({}));
    e("PopupMsgHelper", class {
        static showNDRPPopupMsgI18n(e, t) {
            const p = {
                title: "PH_NDRP_VER_Title",
                sureLabel: "OKAY",
                sureButtonType: i.Primary,
                sureCallback: t,
                cancelCallback: t
            };
            switch (e) {
                case o.Success:
                    p.subtitle = "PH_NDRP_VER_Success_Sub_Title", p.txt = "PH_NDRP_VER_Success_Text", p.msgType = c.Enum.ToastType.ToastTypeSuccess;
                    break;
                case o.Verifcation_Failed:
                    p.subtitle = "PH_NDRP_VER_Failed_Sub_Title", p.txt = "PH_NDRP_VER_Failed_Text", p.msgType = c.Enum.ToastType.ToastTypeError;
                    break;
                case o.Verifcation_Review:
                    p.subtitle = "PH_NDRP_VER_Review_Sub_Title", p.txt = "PH_NDRP_VER_Review_Text", p.iconType = s.Waiting
            }
            c.popUp.isNodeActive() && c.popUp.hidePopupWithMsgTxt(c.config.getStringData(p.txt)), c.popUp.showMsgI18n(p)
        }
    }), t._RF.pop()
}