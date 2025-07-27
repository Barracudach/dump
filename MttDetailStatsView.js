import * as r from "./cc.js";
import * as t from "./MVCView.js";
import * as i from "./MttDetailStatsRenderer.js";

function main() {
    r._RF.push({}, "999247cjP1PUKCZV+KCX+7O", "MttDetailStatsView", void 0);
    e("default", class extends t {
        constructor(...e) {
            super(...e), this._renderer = void 0, this.onClickButtonBack = null, this.showLoading = void 0, this.callPopup = void 0
        }
        onAttachedEngineView(e) {
            this._renderer = e.getComponent(i), this._renderer.mvcView = this, this._renderer.playerView.mvcView = this, this._renderer.tableView.mvcView = this, this.emitEvent("VIEW_LOADED")
        }
        registerHandlers(e) {
            var r;
            null == (r = this._renderer) || r.registerHandlers(e)
        }
        registerPageHideCallback(e) {
            var r;
            null == (r = this._renderer) || r.registerPageHideCallback(e)
        }
        registerPageChangedCallback(e) {
            var r;
            null == (r = this._renderer) || r.registerPageChangedCallback(e)
        }
        updateView(e) {
            var r, t;
            null == (r = this._renderer) || r.renderPlayerView(e.playerInfos, e.isBounty, e.tournamentId, e.isAutoRefresh), null == (t = this._renderer) || t.renderTableView(e.tableInfos, e.isAutoRefresh)
        }
        show() {
            var e;
            null == (e = this._renderer) || e.show()
        }
        getNode() {
            var e;
            return null == (e = this._renderer) ? void 0 : e.node
        }
        hide() {
            var e;
            null == (e = this._renderer) || e.hide()
        }
        searchPlayerText(e) {
            var r;
            null == (r = this.showLoading) || r.call(this, !0)
        }
        get enable() {
            var e;
            return null == (e = this._renderer) ? void 0 : e.enabledInHierarchy
        }
    }), r._RF.pop()
}