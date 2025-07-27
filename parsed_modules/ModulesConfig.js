import * as e from "./cc.js";

function main() {
    e._RF.push({}, "5d55bc3o8tPWrzxUrXD1vtw", "ModulesConfig", void 0);
    n("ModulesConfig", class {
        constructor(...n) {
            this.rgStatus = {
                rgEnabled: !1,
                rgGameBtnEnabled: !1,
                selfExclusionPeriodOptions: []
            }, this.analytics = {
                enabled: !1,
                segmentTool_KeyDev: "",
                segmentTool_KeyProd: "",
                segmentTool_AppName: ""
            }, this.branchConfig = {
                branch_Enable: !1,
                branch_Schema: "",
                branch_KeyDev: "",
                branch_KeyProd: "",
                branch_LinkDomain_Live: "",
                branch_LinkDomain_Alt_Live: "",
                branch_LinkDomain_Test: "",
                branch_LinkDomain_Alt_Test: ""
            }, this.customerioConfig = {
                cio_Enable: !1,
                cio_buildVariants: []
            }, this.appsflyerConfig = {
                appsflyer_Enable: !1,
                appsflyer_Schema: "",
                appsflyer_AndroidChannel: "",
                appsflyer_OneLinkPath: "",
                appsflyer_KeyDev: "",
                appsflyer_AppleAppID: "",
                appsflyer_LinkDomain: ""
            }, this.crashTracingConfig = {
                crashTracing_Enable: !1
            }, this.crowdinConfig = {
                enableCrowdinUsage: !1,
                enableCachingForCrowdin: !1
            }, this.actionCenterEnabled = !0, this.xPointEnabled = !0, this.sharedPlayersPool = !1, this.set(...n)
        }
        set(...n) {
            n.forEach((n => {
                n.analytics = {
                    ...this.analytics,
                    ...n.analytics
                }, Object.assign(this, n)
            }), this)
        }
    }), e._RF.pop()
}