import * as s from "./cc.js";

function main() {
    s._RF.push({}, "9e971SImhdK74gWVHmtK8Tc", "AudioComp", void 0);
    class e {
        constructor() {
            this.url = "", this.isLoop = !1, this.volume = .5, this.bIgnore = !1, this.roomId = -1, this.gameId = -1
        }
        static Instance() {
            return new e
        }
        setUrl(t) {
            return this.url = t, this
        }
        setIsLoop(t) {
            return this.isLoop = t, this
        }
        setVolume(t) {
            return this.volume = t, this
        }
        setBIgnore(t) {
            return this.bIgnore = t, this
        }
        setRoomId(t) {
            return this.roomId = t, this
        }
        setGameId(t) {
            return this.gameId = t, this
        }
    }
    t("AudioComp", e), s._RF.pop()
}