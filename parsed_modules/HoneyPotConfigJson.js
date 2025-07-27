import * as n from "./cc.js";
import * as o from "./cc.js";
import * as a from "./EncryptDecryptString.js";

function main() {
    o._RF.push({}, "19f78ory8xGVJFgbd1/SrpT", "HoneyPotConfigJson", void 0);
    const t = {
            enabled: !0,
            enableChangeCardColor: !0,
            enableChangePublicCardSize: !0,
            enableChangePublicCardPos: !0,
            enableChangeActionButtonPos: !0,
            enableChangeActionButtonColor: !0,
            enableChangeHoleCardSize: !0,
            modifyUIProbability: .001,
            publicCardGapWidth: -6,
            publicCardGapHeight: -6,
            publicCardMoveX: 0,
            publicCardMoveY: 18,
            selfHoleCardGapWidth: -19.38,
            selfHoleCardGapHeight: -29.4,
            opponentHoleCardGapWidth: -15.27,
            opponentHoleCardGapHeight: -21,
            actionButtonMoveX: -15,
            actionButtonMoveY: -15,
            colorAdjustAmount: 16
        },
        i = {
            enabled: !0,
            enableChangeCardColor: !0,
            enableChangePublicCardSize: !0,
            enableChangePublicCardPos: !0,
            enableChangeActionButtonPos: !0,
            enableChangeActionButtonColor: !0,
            enableChangeHoleCardSize: !0,
            modifyUIProbability: .001,
            publicCardGapWidth: -4,
            publicCardGapHeight: -4,
            publicCardMoveX: 0,
            publicCardMoveY: 12,
            selfHoleCardGapWidth: -4,
            selfHoleCardGapHeight: -6,
            opponentHoleCardGapWidth: -4,
            opponentHoleCardGapHeight: -6,
            actionButtonMoveX: -20,
            actionButtonMoveY: -20,
            colorAdjustAmount: 16
        };
    e("HoneyPotEncryptor", class {
        printEnryptedConfigMobile() {
            let e = JSON.stringify(t),
                o = a.encryptData(e);
            n(`............ encrypted mobile = ${o}`), e = JSON.stringify(i), o = a.encryptData(e), n(`............ encrypted landscape = ${o}`)
        }
    }), o._RF.pop()
}