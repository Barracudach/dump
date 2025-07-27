import * as t from "./cc.js";
import * as s from "./ua-parser.min.mjs_cjs=&original=.js";

function main() {
    t._RF.push({}, "4ed0cULVeFBipytGhNwtEW0", "WebSystemInfo", void 0);
    class n {
        constructor() {
            this.systemInfo = void 0, this.systemInfo = {}, this.parseSystemInfo()
        }
        static getInstance() {
            return n.instance || (n.instance = new n), n.instance
        }
        async parseSystemInfo() {
            const e = (new s).getResult();
            this.systemInfo.ScreenWidth = window.screen.width, this.systemInfo.ScreenHeight = window.screen.height, this.systemInfo.UserAgent = e.ua, this.systemInfo.SystemVersion = e.os.version, this.systemInfo.DeviceModel = e.device.model, this.systemInfo.DeviceName = `${e.device.vendor} ${e.device.model}`, this.systemInfo.OS = e.os.name, this.systemInfo.OsVersion = e.os.version, this.systemInfo.Browser = {
                name: e.browser.name,
                version: e.browser.version
            }, this.systemInfo.Engine = `${e.engine.name} ${e.engine.version}`, navigator.connection && (this.systemInfo.NetworkStatus = navigator.connection.effectiveType), this.systemInfo.CPU = e.cpu.architecture, this.systemInfo.Language = navigator.language, navigator.deviceMemory && (this.systemInfo.DeviceMemory = `${navigator.deviceMemory} GB`), this.systemInfo.HardwareConcurrency = navigator.hardwareConcurrency, navigator.getBattery && navigator.getBattery().then((e => {
                this.systemInfo.BatteryLevel = (100 * e.level).toFixed(0), this.systemInfo.BatteryState = e.charging ? "Charging" : "Not Charging"
            }))
        }
        getScreenWidth() {
            return this.systemInfo.ScreenWidth
        }
        getScreenHeight() {
            return this.systemInfo.ScreenHeight
        }
        getUserAgent() {
            return this.systemInfo.UserAgent
        }
        getSystemVersion() {
            return this.systemInfo.SystemVersion
        }
        getDeviceModel() {
            return this.systemInfo.DeviceModel
        }
        getDeviceName() {
            return this.systemInfo.DeviceName
        }
        getOS() {
            return this.systemInfo.OS
        }
        getOsVersion() {
            return this.systemInfo.OsVersion
        }
        getBrowserName() {
            return this.systemInfo.Browser.name
        }
        getBrowserVersion() {
            return this.systemInfo.Browser.version
        }
        getEngine() {
            return this.systemInfo.Engine
        }
        getNetworkStatus() {
            return this.systemInfo.NetworkStatus
        }
        getCPUArchitecture() {
            return this.systemInfo.CPU
        }
        getLanguage() {
            return this.systemInfo.Language
        }
        getDeviceMemory() {
            return this.systemInfo.DeviceMemory
        }
        getHardwareConcurrency() {
            return this.systemInfo.HardwareConcurrency
        }
        getWebSystemInfo() {
            return JSON.stringify(this.systemInfo)
        }
    }
    e("default", n), n.instance = void 0, t._RF.pop()
}