import * as n from "./cc.js";
import * as e from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as o from "./AndroidBackButton.js";
import * as r from "./ImpokerHall.js";

function main() {
    var a;
    e._RF.push({}, "856078E8fJPiI4+gRVn1A5g", "WPTTerms", void 0);
    const {
        ccclass: i,
        property: u
    } = c;
    t("default", i(a = class extends n {
        constructor(...t) {
            super(...t), this.returnPage = null
        }
        start() {}
        setPage(t) {
            s.isNative && s.os === s.OS.ANDROID && o.getInstance().addBackFunction("WPTTerms", this.onClickBack.bind(this)), this.returnPage = t
        }
        onClickBack() {
            s.isNative && s.os === s.OS.ANDROID && o.getInstance().removeBackFunction("WPTTerms"), r.instance.movePageToRight(this.node, this.returnPage)
        }
    }) || a);
    e._RF.pop()
}