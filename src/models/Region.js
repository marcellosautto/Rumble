import { Model } from "@vuex-orm/core"
import Coords from "./Coords"

export default class Region extends Model {
    static entity = 'regions'

    static fields() {
        return {
            center: this.hasOne(Coords, ["latitude", "longitude"])
            
        }
    }

}