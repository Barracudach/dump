import * as t from "./cc.js";
import * as e from "./cc.js";
import * as l from "./cc.js";
import * as s from "./Enum.js";

function main() {
    var m;
    e._RF.push({}, "4606dEfL+pPWoaU8xZ1n2Jb", "Holdem_Basic_Item", void 0);
    const {
        ccclass: r,
        property: n
    } = l;
    o("default", r(m = class extends t {
        constructor(...o) {
            super(...o), this.holdemRoom = null
        }
        setHoldemRoom(o) {
            this.holdemRoom = o, this.setRoomToChild()
        }
        setRoomToChild() {}
        getCurrency() {
            return null == this.holdemRoom || null == this.holdemRoom.store ? s.None : this.holdemRoom.store.getCurrencyType()
        }
        getDisplayCurrency() {
            return null == this.holdemRoom || null == this.holdemRoom.store ? s.None : this.holdemRoom.store.getDisplayCurrencyType()
        }
        getGameMode() {
            return null == this.holdemRoom || null == this.holdemRoom.store ? null : this.holdemRoom.store.getGameMode()
        }
        get bbValue() {
            return null == this.holdemRoom || null == this.holdemRoom.store ? 1 : this.holdemRoom.store.calcBigBlind
        }
        get anteValue() {
            return null == this.holdemRoom || null == this.holdemRoom.store ? 1 : this.holdemRoom.store.ante
        }
    }) || m);
    e._RF.pop()
}