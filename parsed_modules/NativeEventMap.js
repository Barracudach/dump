import * as _ from "./cc.js";

function main() {
    _._RF.push({}, "25408dkMO1Gc5GEBmJzqt3T", "NativeEventMap", void 0);
    let e = E("NATIVE_KEY", function(E) {
        return E[E.KEY_TEST_CALL = 0] = "KEY_TEST_CALL", E[E.KEY_TEST_CALL_ASYN = 1] = "KEY_TEST_CALL_ASYN", E[E.KEY_IS_NETWORK_AVAILABLE = 2] = "KEY_IS_NETWORK_AVAILABLE", E[E.KEY_GET_CURRENT_BATTERY_LEVEL = 3] = "KEY_GET_CURRENT_BATTERY_LEVEL", E[E.KEY_GET_SYSTEM_VOLUME = 4] = "KEY_GET_SYSTEM_VOLUME", E[E.KEY_IS_BATTERY_CHARGE = 5] = "KEY_IS_BATTERY_CHARGE", E[E.KEY_GET_WIFI_STENGTH = 6] = "KEY_GET_WIFI_STENGTH", E[E.KEY_GET_PASTEBOARD_STRING = 7] = "KEY_GET_PASTEBOARD_STRING", E[E.KEY_SET_PASTEBOARDSTRING = 8] = "KEY_SET_PASTEBOARDSTRING", E[E.KEY_IS_PAD = 9] = "KEY_IS_PAD", E[E.KEY_GET_DEVICE_NAME = 10] = "KEY_GET_DEVICE_NAME", E[E.KEY_GET_DEVICE_MODE = 11] = "KEY_GET_DEVICE_MODE", E[E.KEY_GET_NETWORK_TYPE = 12] = "KEY_GET_NETWORK_TYPE", E[E.KEY_GET_DEVICE_UUID = 13] = "KEY_GET_DEVICE_UUID", E[E.KEY_IS_DEVICE_ROOT = 14] = "KEY_IS_DEVICE_ROOT", E[E.KEY_GET_DEVICE_SYSTEM_VERSION = 15] = "KEY_GET_DEVICE_SYSTEM_VERSION", E[E.KEY_IS_SIMULATOR = 16] = "KEY_IS_SIMULATOR", E[E.KEY_GET_DEVICE_INO = 17] = "KEY_GET_DEVICE_INO", E[E.KEY_GET_LOCATION = 18] = "KEY_GET_LOCATION", E[E.KEY_HAVE_GPS = 19] = "KEY_HAVE_GPS", E[E.KEY_CHECK_NEAR = 20] = "KEY_CHECK_NEAR", E[E.KEY_TOAST_MESSAGE = 21] = "KEY_TOAST_MESSAGE", E[E.KEY_JUMP_TO_UPDATE_SITE = 22] = "KEY_JUMP_TO_UPDATE_SITE", E[E.KEY_OPEN_URL = 23] = "KEY_OPEN_URL", E[E.KEY_GET_SYS_LANGUAGE = 24] = "KEY_GET_SYS_LANGUAGE", E[E.KEY_SAVE_TO_ABLM = 25] = "KEY_SAVE_TO_ABLM", E[E.KEY_IS_CONTAINS_EMOJI = 26] = "KEY_IS_CONTAINS_EMOJI", E[E.KEY_REMOVE_ALL_EMOJIS = 27] = "KEY_REMOVE_ALL_EMOJIS", E[E.KEY_EMOJI_LIB_IS_EMOJI = 28] = "KEY_EMOJI_LIB_IS_EMOJI", E[E.KEY_EMOJI_LIB_REMOVE_ALL_EMOJIS = 29] = "KEY_EMOJI_LIB_REMOVE_ALL_EMOJIS", E[E.KEY_CALL_WECHAT_PAY = 30] = "KEY_CALL_WECHAT_PAY", E[E.KEY_OPEN_PHOTO = 31] = "KEY_OPEN_PHOTO", E[E.KEY_OPEN_CAMERA = 32] = "KEY_OPEN_CAMERA", E[E.KEY_SAVETO_PHOTO = 33] = "KEY_SAVETO_PHOTO", E[E.KEY_CALL_OPEN_URL = 34] = "KEY_CALL_OPEN_URL", E[E.KEY_CALL_CHANGEORIENTATION = 35] = "KEY_CALL_CHANGEORIENTATION", E[E.KEY_CALL_AUTH_MICPHONE = 36] = "KEY_CALL_AUTH_MICPHONE", E[E.KEY_RECORD_START_RECORD = 37] = "KEY_RECORD_START_RECORD", E[E.KEY_RECORD_STOP_RECORD = 38] = "KEY_RECORD_STOP_RECORD", E[E.KEY_RECORD_PLAY_RECORD = 39] = "KEY_RECORD_PLAY_RECORD", E[E.KEY_RECORD_PLAY_LOCALFILE = 40] = "KEY_RECORD_PLAY_LOCALFILE", E[E.KEY_RECORD_PLAY_ROOMFILE = 41] = "KEY_RECORD_PLAY_ROOMFILE", E[E.KEY_RECORD_STOP_PLAY = 42] = "KEY_RECORD_STOP_PLAY", E[E.KEY_SAVE_USERNAME_INKEY = 43] = "KEY_SAVE_USERNAME_INKEY", E[E.KEY_SAVE_PASSWORD_INKEY = 44] = "KEY_SAVE_PASSWORD_INKEY", E[E.KEY_GET_USERSUCC_INKEY = 45] = "KEY_GET_USERSUCC_INKEY", E[E.KEY_GET_USERNAME_INKEY = 46] = "KEY_GET_USERNAME_INKEY", E[E.KEY_GET_PASSWORD_INKEY = 47] = "KEY_GET_PASSWORD_INKEY", E[E.KEY_IS_HAVE_GPS = 48] = "KEY_IS_HAVE_GPS", E[E.KEY_IS_AUTHLOCATION = 49] = "KEY_IS_AUTHLOCATION", E[E.KEY_VIBRATE = 50] = "KEY_VIBRATE", E[E.KEY_ERROR_DATA = 51] = "KEY_ERROR_DATA", E[E.KEY_CLEAR_ERROR_DATA = 52] = "KEY_CLEAR_ERROR_DATA", E[E.KEY_GETDEVICEMODEL = 53] = "KEY_GETDEVICEMODEL", E[E.KEY_CHECKHAVEAPP = 54] = "KEY_CHECKHAVEAPP", E[E.KEY_PLAYVIDEOAD = 55] = "KEY_PLAYVIDEOAD", E
    }({}));
    class o {}
    E("NativeMethodMap", o), o.METHOD_MAP = {
        [e.KEY_TEST_CALL]: {
            obj: "org.cocos2dx.javascript.NativeCallTest",
            method: "testCall",
            respMsgKey: "testCall"
        },
        [e.KEY_TEST_CALL_ASYN]: {
            obj: "org.cocos2dx.javascript.NativeCallTest",
            method: "testCallAsyn",
            respMsgKey: "testCallAsyn"
        },
        [e.KEY_IS_NETWORK_AVAILABLE]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "isNetworkAvailable",
            respMsgKey: ""
        },
        [e.KEY_GET_CURRENT_BATTERY_LEVEL]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "getCurrentBatteryLevel",
            respMsgKey: ""
        },
        [e.KEY_GET_SYSTEM_VOLUME]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "getSystemVolume",
            respMsgKey: ""
        },
        [e.KEY_IS_BATTERY_CHARGE]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "isBatteryCharge",
            respMsgKey: ""
        },
        [e.KEY_GET_WIFI_STENGTH]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "getWifiStrength",
            respMsgKey: ""
        },
        [e.KEY_GET_PASTEBOARD_STRING]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "getPasteboardString",
            respMsgKey: ""
        },
        [e.KEY_SET_PASTEBOARDSTRING]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "setPasteboardString",
            respMsgKey: ""
        },
        [e.KEY_IS_PAD]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "isPad",
            respMsgKey: ""
        },
        [e.KEY_GET_DEVICE_NAME]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "getDeviceName",
            respMsgKey: ""
        },
        [e.KEY_GET_DEVICE_MODE]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "getDeviceMode",
            respMsgKey: ""
        },
        [e.KEY_GET_NETWORK_TYPE]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "getNetworkType",
            respMsgKey: ""
        },
        [e.KEY_GET_DEVICE_UUID]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "getDeviceUUID",
            respMsgKey: ""
        },
        [e.KEY_IS_DEVICE_ROOT]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "isDeviceRoot",
            respMsgKey: ""
        },
        [e.KEY_GET_DEVICE_SYSTEM_VERSION]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "getDeviceSystemVersion",
            respMsgKey: ""
        },
        [e.KEY_IS_SIMULATOR]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "isSimulator",
            respMsgKey: ""
        },
        [e.KEY_GET_DEVICE_INO]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "getDeviceInfo",
            respMsgKey: ""
        },
        [e.KEY_GET_LOCATION]: {
            obj: "org.cocos2dx.javascript.LocationMgr",
            method: "getLocation",
            respMsgKey: ""
        },
        [e.KEY_HAVE_GPS]: {
            obj: "org.cocos2dx.javascript.LocationMgr",
            method: "haveGPS",
            respMsgKey: ""
        },
        [e.KEY_CHECK_NEAR]: {
            obj: "org.cocos2dx.javascript.LocationMgr",
            method: "checkNear",
            respMsgKey: ""
        },
        [e.KEY_TOAST_MESSAGE]: {
            obj: "org.cocos2dx.javascript.ToolsMgr",
            method: "toastMessage",
            respMsgKey: ""
        },
        [e.KEY_JUMP_TO_UPDATE_SITE]: {
            obj: "org.cocos2dx.javascript.ToolsMgr",
            method: "jumpToUpdateSite",
            respMsgKey: ""
        },
        [e.KEY_OPEN_URL]: {
            obj: "org.cocos2dx.javascript.ToolsMgr",
            method: "openUrl",
            respMsgKey: ""
        },
        [e.KEY_GET_SYS_LANGUAGE]: {
            obj: "org.cocos2dx.javascript.ToolsMgr",
            method: "getSysLanguage",
            respMsgKey: ""
        },
        [e.KEY_SAVE_TO_ABLM]: {
            obj: "org.cocos2dx.javascript.ToolsMgr",
            method: "saveToAblm",
            respMsgKey: ""
        },
        [e.KEY_IS_CONTAINS_EMOJI]: {
            obj: "org.cocos2dx.javascript.ToolsMgr",
            method: "isContainsEmoji",
            respMsgKey: ""
        },
        [e.KEY_REMOVE_ALL_EMOJIS]: {
            obj: "org.cocos2dx.javascript.ToolsMgr",
            method: "removeAllEmojis",
            respMsgKey: ""
        },
        [e.KEY_EMOJI_LIB_IS_EMOJI]: {
            obj: "org.cocos2dx.javascript.ToolsMgr",
            method: "emojiLibIsEmoji",
            respMsgKey: ""
        },
        [e.KEY_EMOJI_LIB_REMOVE_ALL_EMOJIS]: {
            obj: "org.cocos2dx.javascript.ToolsMgr",
            method: "emojiLibRemoveAllEmojis",
            respMsgKey: ""
        },
        [e.KEY_OPEN_PHOTO]: {
            obj: "org.cocos2dx.javascript.ImagePicker",
            method: "openPhoto",
            respMsgKey: ""
        },
        [e.KEY_SAVETO_PHOTO]: {
            obj: "org.cocos2dx.javascript.ImagePicker",
            method: "saveTophoto",
            respMsgKey: ""
        },
        [e.KEY_OPEN_CAMERA]: {
            obj: "org.cocos2dx.javascript.ImagePicker",
            method: "openCamera",
            respMsgKey: ""
        },
        [e.KEY_CALL_OPEN_URL]: {
            obj: "org.cocos2dx.javascript.AppActivity",
            method: "openUrl",
            respMsgKey: ""
        },
        [e.KEY_CALL_CHANGEORIENTATION]: {
            obj: "org.cocos2dx.javascript.AppActivity",
            method: "changeOrientation",
            respMsgKey: ""
        },
        [e.KEY_CALL_AUTH_MICPHONE]: {
            obj: "NativeEvent",
            method: "AuthMicPhone",
            respMsgKey: ""
        },
        [e.KEY_RECORD_START_RECORD]: {
            obj: "NativeEvent",
            method: "doStartRecord",
            respMsgKey: ""
        },
        [e.KEY_RECORD_STOP_RECORD]: {
            obj: "NativeEvent",
            method: "doStopRecord",
            respMsgKey: ""
        },
        [e.KEY_RECORD_PLAY_RECORD]: {
            obj: "NativeEvent",
            method: "PlayRecord",
            respMsgKey: ""
        },
        [e.KEY_RECORD_PLAY_ROOMFILE]: {
            obj: "NativeEvent",
            method: "PlayRoomVoice",
            respMsgKey: ""
        },
        [e.KEY_RECORD_PLAY_LOCALFILE]: {
            obj: "NativeEvent",
            method: "PlayLocalVoice",
            respMsgKey: ""
        },
        [e.KEY_RECORD_STOP_PLAY]: {
            obj: "NativeEvent",
            method: "StopPlay",
            respMsgKey: ""
        },
        [e.KEY_SAVE_USERNAME_INKEY]: {
            obj: "NativeEvent",
            method: "saveUsernameInKeychain",
            respMsgKey: ""
        },
        [e.KEY_SAVE_PASSWORD_INKEY]: {
            obj: "NativeEvent",
            method: "savePasswordInKeychain",
            respMsgKey: ""
        },
        [e.KEY_GET_USERSUCC_INKEY]: {
            obj: "NativeEvent",
            method: "getUseUsersuccInKeychain",
            respMsgKey: ""
        },
        [e.KEY_GET_USERNAME_INKEY]: {
            obj: "NativeEvent",
            method: "getUsernameInKeychain",
            respMsgKey: ""
        },
        [e.KEY_GET_PASSWORD_INKEY]: {
            obj: "NativeEvent",
            method: "getUserPasswordInKeychain",
            respMsgKey: ""
        },
        [e.KEY_IS_HAVE_GPS]: {
            obj: "NativeEvent",
            method: "haveGPS",
            respMsgKey: ""
        },
        [e.KEY_IS_AUTHLOCATION]: {
            obj: "NativeEvent",
            method: "AuthLocation",
            respMsgKey: ""
        },
        [e.KEY_VIBRATE]: {
            obj: "NativeEvent",
            method: "Vibrate",
            respMsgKey: ""
        },
        [e.KEY_ERROR_DATA]: {
            obj: "NativeEvent",
            method: "getErrorData",
            respMsgKey: ""
        },
        [e.KEY_CLEAR_ERROR_DATA]: {
            obj: "NativeEvent",
            method: "clearErrorData",
            respMsgKey: ""
        },
        [e.KEY_GETDEVICEMODEL]: {
            obj: "NativeEvent",
            method: "getDeviceModel",
            respMsgKey: ""
        },
        [e.KEY_CHECKHAVEAPP]: {
            obj: "org.cocos2dx.javascript.DeviceMgr",
            method: "checkHaveAppOnDevice",
            respMsgKey: ""
        },
        [e.KEY_PLAYVIDEOAD]: {
            obj: "org.cocos2dx.javascript.ToolsMgr",
            method: "playVideoAD",
            respMsgKey: ""
        }
    }, _._RF.pop()
}