import { Model } from "@vuex-orm/core"
import Business from './Business'
export default class Location extends Model {
    static entity = 'locations'

    static fields() {
        return {
            address1: this.string("").nullable(),
            address2: this.string("").nullable(),
            address3: this.string("").nullable(),
            city: this.string("").nullable(),
            zip_code: this.string("").nullable(),
            country: this.string("").nullable(),
            state: this.string("").nullable(),
            display_address: this.attr([""]).nullable(),
            location: this.belongsTo(Business, 'id')
        }
    }

}