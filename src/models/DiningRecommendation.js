import { Model } from '@vuex-orm/core'
import Region from './Region'
//import Business from './Business'
import DiningPreference from './DiningPreference'

export default class DiningRecommendation extends Model {
    static entity = 'diningRecommendations'
    static primaryKey = 'id'

    static fields() {
        return {
            id: this.uid(),
            total: this.number(0).nullable(),
            region: this.hasOne(Region, 'center'),
            //businesses: this.hasMany(Business, 'id'),
            businesses: this.attr(null),
            diningPreference: this.belongsTo(DiningPreference, 'id'),
        }
    }
}