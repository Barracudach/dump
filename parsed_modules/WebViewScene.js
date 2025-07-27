import * as n from "./cc.js";
import * as t from "./cc.js";
import * as c from "./cc.js";
import * as o from "./cv.js";

function main() {
    var r;
    n._RF.push({}, "2a751pFMyBJn4pUYIeNP5On", "WebViewScene", void 0);
    const {
        ccclass: s,
        property: a
    } = c;
    e("WebViewScene", s(r = class extends t {
        onLoad() {
            o.config.adaptScreen(this.node.parent), o.resMgr.adaptWidget(this.node.parent, !0), o.config.setCurrentScene(o.Enum.SCENE.WEBVIEW_SCENE)
        }
        onDestroy() {}
    }) || r);
    n._RF.pop()
}