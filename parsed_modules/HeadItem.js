import * as t from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./cc.js";
import * as l from "./cv.js";
import * as c from "./AssetsManager.js";

function main() {
    var r;
    t._RF.push({}, "79ddeWdeYZEIrW30pcrmdQ/", "HeadItem", void 0);
    const {
        ccclass: d,
        property: u
    } = o;
    e("default", d(r = class extends n {
        constructor(...e) {
            super(...e), this.SelectedScaleValue = new s(.75, .75, .75), this.NormalScaleValue = new s(1, 1, 1), this._index = 0
        }
        updateSVReuseData(e, t) {
            if (!(e < 0 || t.length <= 0 || t.length - 1 < e)) {
                this._index = e;
                for (let n = 0; n < this.getColumnCount(); n++) {
                    let s = a("Image_head_" + n, this.node);
                    if (n >= t[e].itemData.length) s.active = !1;
                    else {
                        let o = t[e].itemData[n].head_url;
                        if (-1 != o.toString().indexOf("http://") || -1 != o.toString().indexOf("https://")) {
                            let e = s.getComponent(i);
                            c.loadWebImage(e, o)
                        } else l.resMgr.setSpriteFrame(s, o);
                        this.setChosenItem(a(l.StringTools.formatC("Image_head_%d/Image_head_select", n), this.node), t[e].itemData[n].ischoose)
                    }
                }
            }
        }
        onBtnHeadClick(e, t) {
            l.AudioMgr.playButtonSound("button_click.mp3");
            let n = this._index * this.getColumnCount() + l.Number(t) + 1;
            l.MessageCenter.send("clickHeadItem", n)
        }
        setChosenItem(e, t) {
            e.active = t;
            let n = t ? this.SelectedScaleValue : this.NormalScaleValue;
            e.parent.setScale(n)
        }
        getColumnCount() {
            return this.node.children.length
        }
    }) || r);
    t._RF.pop()
}