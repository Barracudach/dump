import * as t from "./rollupPluginModLoBabelHelpers.js";
import * as a from "./rollupPluginModLoBabelHelpers.js";
import * as d from "./cc.js";
import * as u from "./cc.js";
import * as s from "./cc.js";
import * as i from "./cc.js";
import * as n from "./cc.js";
import * as o from "./cc.js";
import * as l from "./cc.js";
import * as m from "./cv.js";
import * as p from "./BasicScene.js";
import * as r from "./MultipleGame.js";
import * as c from "./MultipleGame.js";
import * as f from "./MultipleGameAddTableDialog.js";
import * as h from "./MultipleRoomManager.js";
import * as g from "./Pb.js";
import * as b from "./FakeMultipleGame.js";

function main() {
    var G, T, M, y, I, D, C, v;
    l._RF.push({}, "d85fba80nVNQ65V3sN5Jt7g", "MultipleGameScene", void 0);
    const {
        ccclass: P,
        property: S
    } = u;
    e("default", (G = S(i), T = S(n), M = S(o), P((D = t((I = class extends p {
        constructor(...e) {
            super(...e), a(this, "addTableButton", D, this), a(this, "addTableDialogPrefab", C, this), a(this, "addTableDialogContainer", v, this), this.multipleGameType = void 0, this.multipleGameIndex = -1, this.addTableDialog = null, this.multipleGameInfo = null, this.isScrolling = !1
        }
        initMultipleGame(e, t) {
            this.multipleGameType = e, this.setMultipleGameIndex(t);
            const a = h.instance.listRoom[this.multipleGameIndex];
            var l;
            (null != a && (a.type == c.HOLDEM || (a.type, c.CASH), this.multipleGameInfo = a), !m.appConfig.isLandscapeLayout && r.instance && this.multipleGameInfo) && (this.multipleGameInfo.type == c.HOLDEM ? this.multipleGameInfo.data instanceof g.commonProto.MttTournament && (null == (l = b.instance._multipleGameTabButtons[this.multipleGameIndex]) || l.setGameType(this.multipleGameInfo.gameMode, this.multipleGameInfo.data.Detail.PlayOnJoint)) : (this.multipleGameInfo.type, c.CASH))
        }
        setMultipleGameIndex(e) {
            cc_mtt.vv.ConsoleLog.log("#34400 check in MultipleGameScene setMultipleGameIndex", e, this.multipleGameIndex), this.multipleGameIndex = e
        }
        startGame() {
            this.updateAddTableButton()
        }
        updateAddTableButton() {
            let e = m.appConfig.getGameConfig().enableMultiTableBar;
            r.instance && r.instance.getSelfPlayStatus() && !r.instance.shouldShowHeader() && e ? this.addTableButton.node.active = !0 : this.addTableButton.node.active = !1
        }
        onClickAddTableButton() {
            if (!s(this.addTableDialog)) {
                let e = d(this.addTableDialogPrefab);
                e.parent = this.addTableDialogContainer, this.addTableDialog = e.getComponent(f)
            }
            this.addTableDialog.show((() => {
                r.instance.showHall(h.instance.listRoom.length)
            }))
        }
        updateGameAlignment() {}
        isSelected() {
            return r.instance.isTabSelected(this.multipleGameIndex)
        }
        onMultipleGameChangePage(e) {
            cc_mtt.vv.ConsoleLog.log("onMultipleGameChangePage", e), e == this.multipleGameIndex && cc_mtt.vv.ConsoleLog.log("onMultipleGameChangePage isSelf", e)
        }
    }).prototype, "addTableButton", [G], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), C = t(I.prototype, "addTableDialogPrefab", [T], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), v = t(I.prototype, "addTableDialogContainer", [M], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
            return null
        }
    }), y = I)) || y));
    l._RF.pop()
}