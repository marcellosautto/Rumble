import { Model } from '@vuex-orm/core'
import DiningRecommendation from './DiningRecommendation'
//import User from './User';

export default class DiningPreference extends Model {
    static entity = 'diningPreferences';

    static state ()  {
        return {
          diningpreferences: null
        }
      }

    static fields() {
        return {
            id: this.string(""),
            category: this.string(""),
            limit: this.number(5),
            price: this.string(""),
            location: this.string(""),
            distance: this.number(25),
            hours: this.boolean(true),
            //user: this.belongsTo(User, 'id'),
            recommendation: this.hasOne(DiningRecommendation, 'id')
        }


    }
}






