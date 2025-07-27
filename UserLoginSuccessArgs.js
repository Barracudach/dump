import * as i from "./cc.js";
import * as t from "./Helpers2.js";
import * as o from "./BasePokerArgs.js";

function main() {
    i._RF.push({}, "fa51eaX4/pCrL86HhCgOoFz", "UserLoginSuccessArgs", void 0);
    class e extends o {
        constructor(s) {
            super(t.UserLoginSuccess), this.token = void 0, this.user_id = void 0, this.areaCode = void 0, this.mobile = void 0, this.countryIsoCode = void 0, this.ip = void 0, this.safe = void 0, this.pay_type = void 0, this.shop = void 0, this.cdn = void 0, this.activity = void 0, this.domain = void 0, this.is_upgrade = void 0, this.encry_switch = void 0, this.is_vpn = void 0, this.is_ban = void 0, this.club_head = void 0, this.is_allow_update_name = void 0, this.bk_img = void 0, this.file_upload_url = void 0, this.isallowsimulator = void 0, this.mtt_status = void 0, this.vipTool_url = void 0, this.responsibleGamingMetadata = void 0, this.legal_documents_to_accept = void 0, this.sharedPlayerId = void 0, this.sharedPlayerToken = void 0, this.pkwGateAddresses = void 0, this.avatarAddress = void 0, this.pkwFileAddress = void 0, this.pkwApiAddress = void 0, this.download_url = void 0, Object.assign(this, s)
        }
    }
    s("UserLoginSuccessArgs", e);
    s("GuestLoginSuccessArgs", class extends e {
        constructor(...s) {
            super(...s), this.isGuest = !0
        }
    }), i._RF.pop()
}