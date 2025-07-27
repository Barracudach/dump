import * as t from "./cc.js";
import * as o from "./cc.js";
import * as s from "./LocationBlockedArgs.js";
import * as n from "./RequestLoginArgs.js";
import * as r from "./UserLogoutArgs.js";
import * as g from "./Helpers2.js";
import * as i from "./Helpers2.js";
import * as c from "./Helpers2.js";
import * as a from "./MessageSender.js";
import * as u from "./cv.js";
import * as l from "./MessageBroker.js";

function main() {
    t._RF.push({}, "f6249DV7RBI2oKewB0KcoAq", "LoginController", void 0);
    class d {
        constructor() {
            this._tag = `[${d.name}]`, this._silentLogout = !1, this._logoutError = void 0
        }
        static getInstance() {
            return d._instance || (d._instance = new d), d._instance
        }
        init() {
            u.MessageCenter.register(i.UserLoginSuccess, this.onLoginSuccess.bind(this), this)
        }
        clearRegister() {
            u.MessageCenter.unregister(i.UserLoginSuccess, this)
        }
        get silentLogout() {
            return this._silentLogout
        }
        get logoutError() {
            return this._logoutError
        }
        set logoutError(e) {
            this._logoutError = e
        }
        getLogoutReason(e) {
            return 4 == e ? g.ServerErrorCode4 : 5 == e ? g.ServerErrorCode5 : 3 == e ? g.ServerErrorCode3 : 197 == e ? g.ServerErrorCode197 : 224 == e ? g.ServerErrorCode224 : 225 == e ? g.ServerErrorCode225 : 229 == e ? g.ServerErrorCode229 : null
        }
        onLoginSuccess(e) {
            o(`${this._tag} longha Webapp Login Success ${JSON.stringify(e)}`);
            const t = "isGuest" in e && e.isGuest;
            let s = `onLoginSuccess | data: ${JSON.stringify(e)}`;
            this.logoutError = null;
            let n = u.httpHandler.getResponseCode(e);
            if (null != n && "0" != n) {
                if (u.appConfig.isWebApp) return s += " | call: switchToLoginOrRegistrationScene()", void this.switchToLoginOrRegistrationScene()
            } else u.dataHandler.getUserData().isLoggedIn() && u.dataHandler.getUserData().isTouristUser && (this._silentLogout = !0, u.netWorkManager.Logout(!1, null, u.Enum.LogOutReason.TouristSwitchUser, (() => {
                console.log(`${this._tag} logout guest success`)
            })), o(`${this._tag} Web app retry login with new session`), s += " | call: Logout() => Web app retry login with new session"), u.config.getCurrentScene() !== u.Enum.SCENE.HOTUPDATE_SCENE ? (t || this.checkLegalDocPostLogin(e), u.config.getCurrentScene() == u.Enum.SCENE.HALL_SCENE ? (t && (this.onTouristLoginSuccess(e), s += " | [HallScene] call: onTouristLoginSuccess()"), u.netWorkManager.SceneOnLoad(), u.MessageCenter.send(u.Enum.MessageCenterAction.requestRefreshGamesList), s += " | [HallScene] call: requestRefreshGamesList()") : (s += " | [HallScene] call: switchScene => end of hot update scene", u.action.switchScene(u.Enum.SCENE.HALL_SCENE, (() => {
                l.getInstance().sendGetLoggedInUserData()
            }))), u.SwitchLoadingView.hide()) : (s += " | while in HotUpdate scene, send auth data to handle login flow", u.MessageCenter.send(u.Enum.MessageCenterAction.webAppReceiveAuth, {
                value: e,
                isGuest: t
            })), this._silentLogout = !1;
            t || u.MessageCenter.unregister(i.UserLoginSuccess, this);
            const r = {
                eventName: "WebLoadStatus",
                attribute: {
                    content: s
                }
            };
            u.tools.logInfoWebApp(r)
        }
        checkLegalDocPostLogin(e) {
            let t, o = u.httpHandler.getErrorMessage(e, !0),
                s = null,
                n = null;
            e.legal_documents_to_accept && Object.keys(e.legal_documents_to_accept).length > 0 && (s = {
                legal_documents_to_accept: e.legal_documents_to_accept
            }), t = e.payload ? e.payload : e, n = o || s, u.httpHandler.postLogin(t, n, "0")
        }
        onLoginFailed(e) {
            o(`${this._tag} Webapp Login Failed ${JSON.stringify(e)}`)
        }
        switchToLoginOrRegistrationScene(e) {
            this._silentLogout || (o(`${this._tag} >>>>>>> `), o(`${this._tag} >>>>>>> Webapp should redirect to login/register page`), o(`${this._tag} >>>>>>> `), a.sendParent(new n), e && u.SwitchLoadingView.show(u.config.getStringData("Loading")))
        }
        onTouristLoginFailed(e) {
            const {
                code: t
            } = e;
            if (10000010 == t && u.config.getCurrentScene() === u.Enum.SCENE.HOTUPDATE_SCENE) {
                const e = new s(c.Poker);
                a.sendParent(e)
            } else l.getInstance().sendShowErrorPopup(t)
        }
        onTouristLoginSuccess(e) {
            u.httpHandler.onTouristLoginSuccess(e)
        }
        onLogout({
            reason: e,
            isGuest: t
        }) {
            u.MessageCenter.send("webApp_close_profile"), t || u.MessageCenter.register(i.UserLoginSuccess, this.onLoginSuccess.bind(this), this);
            const o = new r({
                payload: {
                    reason: null != e && Object.keys(g).includes(e) ? e : null != this._logoutError && Object.keys(g).includes(this._logoutError) ? this._logoutError : g.Manual,
                    isGuest: t
                }
            });
            a.sendParent(o)
        }
    }
    e("WebAppLoginController", d), d._instance = void 0, t._RF.pop()
}