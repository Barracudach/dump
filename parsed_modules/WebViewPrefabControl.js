import * as d from "./cc.js";
import * as t from "./cc.js";
import * as e from "./cc.js";
import * as a from "./cc.js";
import * as N from "./cc.js";
import * as T from "./cc.js";
import * as W from "./cc.js";
import * as l from "./cc.js";
import * as Z from "./Translator.js";
import * as F from "./TopUpPage.js";

function main() {
    var U;
    l._RF.push({}, "edafeOOJQVKfrRxb47hVcqH", "WebViewPrefabControl", void 0);
    const {
        ccclass: c,
        property: n
    } = t;
    V("WebViewPrefabControl", c(U = class extends d {
        constructor(...V) {
            super(...V), this._onWebFinishLoadCallback = null, this._loadTime = 0, this._loadingPage = "data:text/html;base64,PGh0bWw+DQo8aGVhZD4NCgk8bWV0YSBuYW1lPSJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlIiBjb250ZW50PSJ5ZXMiIC8+DQoJPHRpdGxlPui9veWFpeS4rTwvdGl0bGU+DQoJPHN0eWxlPg0KCWh0bWwsIGJvZHl7DQoJCWJhY2tncm91bmQtY29sb3I6IzAwMDAwMDsNCgkJY29sb3I6I2ZmZmZmZjsNCgkJdGV4dC1hbGlnbjpjZW50ZXI7DQoJfQ0KCS5ncmlkLWNvbnRhaW5lcnsNCgkJcG9zaXRpb246Zml4ZWQ7DQoJCXRvcDowOw0KCQlib3R0b206MDsNCgkJbGVmdDowOw0KCQlyaWdodDowOw0KCQlkaXNwbGF5OmZsZXg7DQoJCWFsaWduLWl0ZW1zOmNlbnRlcjsNCgkJanVzdGlmeS1jb250ZW50OmNlbnRlcjsNCgl9DQoJLmdyaWR7DQoJCQ0KCQkNCgl9DQoJDQoJQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0aW5nIHsNCgkJMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO30NCgkJOC4zMyUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTsgfQ0KCQkxNi42NyUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTsgfQ0KCQkyNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfQ0KCQkzMy4zMyUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7IH0NCgkJNDEuNjclIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpOyB9DQoJCTUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfQ0KCQk1OC4zMyUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7IH0NCgkJNjYuNjclIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpOyB9DQoJCTc1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfQ0KCQk4My4zMyUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7IH0NCgkJOTEuNjclIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpOyB9DQoJCTEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0NCgl9DQoNCgkucm90YXRpbmcgew0KCQktd2Via2l0LWFuaW1hdGlvbjogcm90YXRpbmcgMS4ycyBzdGVwLWVuZCBpbmZpbml0ZTsNCgkJd2lkdGg6NTAlOw0KCX0NCgkNCgk8L3N0eWxlPg0KPC9oZWFkPg0KPGJvZHk+DQoJPGRpdiBjbGFzcz0iZ3JpZC1jb250YWluZXIiPg0KCQk8ZGl2IGNsYXNzPSJncmlkIj48aW1nIGNsYXNzPSJyb3RhdGluZyIgc3JjPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUpZQUFBQ1dDQU1BQUFBTDM0SFFBQUFCSUZCTVZFVUFBQUEzT1VzM09VczNPVXMzT1VzQWxQb0FsUG9BbFBvQWxQbzNPVXMzT1VzM09VczNPVXMzT1VzM09VczNPVXMzT1VzM09VczNPVXMzT1VzM09VczNPVXMzT1VzM09VczNPVXMzT1VzM09VczNPVXMzT1VzM09VczNPVXMzT1VzM09VczNPVXMzT1VzQWxQbzNPVXNBbFBvQWxQb0FsUG8zT1VzM09VczNPVXMzT1VzQWxQb0FsUG8zT1VzM09Vc0FsUG8zT1VzM09VczNPVXNBbFBvM09Vc0FsUG8zT1VzQWxQbzNPVXMzT1VzQWxQbzNPVXNBbFBvQWxQbzNPVXNBbFBvQWxQbzNPVXNBbFBvQWxQbzNPVXMzT1VzQWxQb0FsUG8zT1VzQWxQb0FsUG9BbFBvQWxQb0FsUG9BbFBvQWxQb0FsUG9BbFBvQWxQb0FsUG8zT1VzM09VczNPVXNBbFBvM09Vc0FsUG8zT1VzQWxQb0FsUG8zT1VzQWxQcFhMNU8zQUFBQVhuUlNUbE1BUDBWTVVsTStURWJpQ1dnNGdBVDE3MGdySS9takZ1alZuWmQzYnR5dHk4QzBxV1UwSUt1VFkxOXpWUHIwMEpGN2Exb3ZMUnJQdVoyTGhXMG5KaFFOM3RmSGdUY2RFUXdHL2UvcjZMMnpvNGxjVDBFWi9zUldNeC9HZTNVUWliNHNKd0FBQnUxSlJFRlVlTnJzMll0eVdWRVV4dkdQQ25HSjBOS3FOTmZqa3JSMHRCSFJDRU1pWWR4Rk9rM1RkSy8zZjR1YXRvUEZQczQ1YkZQVHllOEYvTWZadHJXQUtzV25SQ2VUeFpySnBHa28xY05hU2RKZkNheVJPeHJSc0Q0cU5OS3FZMTNFYWNJRDFvV1RKbXhnWFF6V00rdWZ2VnVlRjUrOHZtV3pIclRDUmcwS3ZYT0xvZjNnTWxuT1J4cHFacURNVy9IWHllSlpMdVVYN3JFWXVWdzA2NTVHTWxEQ0h4QWorNHRtZFdqc0oxU3dpd21PeGJLcU5LRVBGYnhpd3B2RnNpcEVxcC9paVppMHRVaVdScE9lb01KTGx2WDF0ZldzV3BwbE9hSEVGZXZhczU2VlpGVmxxT0VUVE14cVZweVlPeWl5eDdJaVZyUGFyT29ScXB3SjVzUmExaVl4UlNpenhiSUNma3RaWlZhVmgwSnZXTmNYSzFsUHJDcGRnMExmQkhOalB1dG5pbVVWb05RK3l6bzBuNVZYZkRsd3A0S3htYzNLRWpPQVltR1d0V3MyNjVGVnRhSGFiWWgxZWMxbDNSRVRoM0k3TEd2Yll5cXJ4YXFTV0FFMzY0cWF5Y3F3cWtZZEt4QVV6Q3ZqUGJIRUx3Y05LM0hBc2c1MFprOFhSaEtzcW9MVnVCUk1VSDVseG5udFdCV0w4dHU5eHpIb2l1cGRFbDNwSFpCalZSM295bXFhcTJhMHBWNDVvTU96emJxK2pkZXRsR1JBR0JCekR4MmJiUnBxWlF5MzFMMVR5SDFpV1dHTU9CdjBXK3BPYnlhOWhseXhhN0RYZWlkbmhGdEk3ZW9jZXR3blcwU05mQkU2Qjc0SnFmcDFpcFViUGFFM1hzalk5TCt3YTlrczMwdnp4a3R0bjg5aUplbTF4RjNaSVhFdXhuNkFtYmVGNVNCUmJSUFhsNTEzTWUzb0ZXYmNpTEV6TVBQV3NDeG0zT2VKa3ovRll6RWpkT0dmVSsrRmdZMTVyL2VVcGhrWi9ZbUtjNS9vZm1YdndKQ1dvdDk2czhVVmtoaEE0cU9RT2JCaFNpd2FjVWVpTVpoUVRGYktsYndUVXg0NkpOT0NURXpJdmIzQk5EOU1xMk5hS1VseW01RDZFQkpTMnp0K3FGTm9rcHdHSFM4UGhWekVBVVZjT1pKclY2SFBFUkZ5NTZkUW9KZ2d1WElmODcwUENMa3RMSzFBY3Fuck9veThqZ3E1aTFWVmRlTXd3M2N1cEdLSy9yRGlIcDB3Ni9PdWtBZ3IrU3VVYTJtd3dMOFZrbHo1Zml3alI3TjZOVmp6S2l5bUJUeFlScG1tSmJLd3puYTEybmNyNThKaWp0MHF6MWFQUlRVTFdKam5Ra3c0VmZoSlRKYXdqTXNqSWN4UE1tYkgxVTRXeXdyK09XTGI3N0MwZnVQUG9kcUFDbzdvNGRHN015aFFLblE3K1Q2ZVBYdjI3SC8xMGhhMHl3VjlyNkZjcWJxcFo1QWR6Nkw3WW81QStCSkt4Zk1ObWlPbnNWOUU5WVhzVU9paFFRYTZHSG92akgySE1xVTBHZW9CTjErRnNUMG9reVFUNHRnUkpvUnVvVWk5U1Naa2NDVE04RUdST0ptUldOZXNYKzJjWDJ2aVFCVEZyMFphckxiV3BLYkdQN1dLTERVQmd4WXBsaTVoV1Zyd2FhRnNYVVNZNy84eEZ2UWh2ZTJNWjJ5dUpRLytubFZPSnVPZE81bHpzbFlXTEw3NUp2NG1UK1Z3eXY4a3F6bnZmWHVCSUFvVTRNMGhRVTZncmgrMFlkVGNXUndHcnZEaTgyZW5zRi9wdnZhKzdwZ29QSk00ZjA5ZVQvVzhudWJIRW4za3lKRWowdFRqUWFQaWt3QXZkNDFCcTBRU0ZHKzNHNkNLZ0pWdmF6SHNPUVN4Znc0ZVVrYW1hYVBrVWhiTzJLbUJLK2hlblNjWkxxL01qMkVwRTQ4S0dDM3NxTjRxVHBjeTBjTkdDOHdza0Q1Y0thdVBORHphay9hbCtGSFVXTk5pbnU5MXBaRzJYeDFRSm1LbG9Uc2lXNGI5ZzJ3V1BhWGwxdTVuL1ZqcG1WTkdRcVVubUJGa2NubW9vMnJ6M3EvV1JzdmZXT0doeHV4dnRJaklqSGVqOUhTbkpJUmoydnoxNzQxZnFTa0creHRMY1dFeVdpeEd3SHNPaWw1V1ppMmxwd2pMWGNyeTA0ZmRlTndkeHk1WjRNMTczV2FyYW1tMEtJUHdVMHE1WXJTN2RRZ3l1bUkrR0dpMEtOcVo4QmJ6WkljTjlJNEFwUjMrbkl0enpVUnVXMWtXYjl6ZFRaTVBtclhhemxidHVXSGxMbklVWjF3bkRYMXdjV3o0UWR5eXNGU2NFYlREWG5iMnRjT2VQVDN4T3NJNm84akdhT0VqdzNMc2s1YW15VHpzeDJXbHJsc3JVL0xzbXJRa2oyOW9lVXZES2YwaERuYnlSbWQ0clRiVTZyeVJ3YTQwZDhBR1gwZTQrZkhlUDB0aitqUWRxeXZOWTlhaU1XN0pjWmFiV1hPT3d1WkdXdHBtbFUrakIxTjl2aUVqdzBxbmxFajFjVTQ2UTJyYWZGa1ZkNUh5RVpHbHdVaGJ0NGxiSGk1UTgyUW9HKzltcHI4QVpVa0M0MTZXeTRwQTNGS1lrUGU1aVVsV0NjUXRaVW00aDdGRFZySWkrVk5jVHNDTEF3RloraDMrQXduaktrWVJ5c0p4Uy9raytnTUJXU0J1S1VWSk1WWkFsamx1T1NHR2FJQTVKaUFMeEMybFdHdnFENUFGNHBZWk1GWHJPd0t5d09vZ3hRQ3NiVndXakZzS2dEc0JMTXZUeEMwRldHcjZKaUFMeFMzbEs2bVBaTUd1dG5DUVY2QWdXWEFQRUpMOEMyTXVvQ3dZdDF6THYxNG5JaWdMZm1KS0VwenhseEZoV1NodStVTFNkOUg5cXF3Wm01MHlORmg5UjdMQVl0OG5NZHFicFhyczBOZGxVYUczV1U4ZlNaQWtDanNGSWp0WkpxcVRjT3FUT0xheThzS0hFcElYY2pwYUhzL2w1WVltVzUxeVEvUitENUVqZ3JRYnl4VmJaOEppVGpsak5RbUNqa2RDL0FkQkNHK1RkUHd4dFFBQUFBQkpSVTVFcmtKZ2dnPT0iIGFsdD0i6L295YWl5LitIi8+PC9kaXY+DQoJPC9kaXY+DQo8L2JvZHk+DQo8L2h0bWw+", this._loadingWebViewNode = null, this._loadingWebView = null
        }
        hideLoading() {
            cc_mtt.vv.ConsoleLog.log("hide webview loading"), this._loadingWebView && this._loadingWebViewNode && (this._loadingWebViewNode.active = !1)
        }
        setWebFinishLoadAction(V) {
            this._onWebFinishLoadCallback = V, e.isNative && (this._loadingWebViewNode = W(this.node), this._loadingWebViewNode.scale = new N(N.ONE), this._loadingWebViewNode.parent = this.node.parent, this._loadingWebView = this._loadingWebViewNode.getComponent(T), this._loadingWebView.getComponent(a).top = this.getComponent(a).top, this._loadingWebView.url = this._loadingPage)
        }
        onWebFinishLoad(V, l) {
            if (this._onWebFinishLoadCallback) {
                if (cc_mtt.vv.ConsoleLog.log(`webview check: ${this._loadTime} event: ${l===T.EventType.LOADING?"LOADING":l===T.EventType.LOADED?"LOADED":"ERROR"}`), e.isNative) {
                    l === T.EventType.LOADED && this._loadTime++;
                    let V = e.os === e.OS.ANDROID && !this.node.parent.getComponent("TopUpPage") && this._loadTime >= 1;
                    (this._loadTime >= 2 || V) && (this.hideLoading(), this._loadTime = 0)
                }
                this._onWebFinishLoadCallback(V, l)
            } else {
                let V = this.node.parent.getComponent(F);
                V && (l === T.EventType.LOADED ? V.pageTitle.string = V._title : l === T.EventType.LOADING ? V.pageTitle.string = Z("WEBVIEW.LOADING_TITLE") : l === T.EventType.ERROR && (V.pageTitle.string = V._title))
            }
        }
    }) || U);
    l._RF.pop()
}