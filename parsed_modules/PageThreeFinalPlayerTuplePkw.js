import * as e from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as r from "./cc.js";
import * as c from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as l from "./cc.js";
import * as o from "./mttconfig.js";
import * as u from "./Translator.js";

function main() {
    var p, f, h, g, d, b, m, v, y, k;
    r._RF.push({}, "84224WAcCtNFoU2idYp+/fl", "PageThreeFinalPlayerTuplePkw", void 0);
    const {
        ccclass: _,
        property: P
    } = s;
    t("default", (p = P(i), f = P(n), h = P(l), g = P(l), _((m = e((b = class extends c {
        constructor(...t) {
            super(...t), a(this, "avatar", m, this), a(this, "defaultAvatar", v, this), a(this, "rank", y, this), a(this, "nickName", k, this), this.playerData = null, this._parentScript = null
        }
        start() {}
        createCardRecordPrefab(t) {
            this._parentScript && this._parentScript.createCardRecordPrefab(this.playerData, t)
        }
        setInfo(t, e) {
            cc_mtt.vv.ConsoleLog.log("Final Player - setInfo", JSON.stringify(t)), this.playerData = t, this._parentScript = e;
            let a = `${o.avatarHost}/images/avatar_thumbnails/${t.UserId}.jpg`;
            cc_mtt.vv.AssetsManager.loadWebImage(this.avatar, a, this.defaultAvatar), this.rank.string = u("FORMAT.UNIT.RANK").replace("%s", t.Rank.toString()), this.nickName.string = t.Nickname
        }
        onClick(t) {
            cc_mtt.vv.ConsoleLog.log("mtt final player clicked", this.playerData.UserId), cc_mtt.vv.DataManager.currentResultUserId = this.playerData.UserId, this.createCardRecordPrefab(t)
        }
    }).prototype, "avatar", [p], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = e(b.prototype, "defaultAvatar", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = e(b.prototype, "rank", [h], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), k = e(b.prototype, "nickName", [g], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), d = b)) || d));
    r._RF.pop()
}