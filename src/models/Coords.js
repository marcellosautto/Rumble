import { Model } from "@vuex-orm/core"

export default class Coords extends Model {
    static entity = 'coords'

    static fields() {
        return {
            longitude: this.number(0).nullable(),
            latitude: this.number(0).nullable()
        }
    }

}