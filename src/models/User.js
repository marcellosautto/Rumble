import {Model} from '@vuex-orm/core'
import DiningPreference from './DiningPreference'
import Attribute from './Attribute'
export default class User extends Model {
    static entity = 'users'
    static primaryKey = 'id'

    static fields() {
        return {
            id: this.string(""),
            username: this.string(""), 
            password: this.string(""), 
            attributes: this.hasOne(Attribute, 'email'),
            diningPreferences: this.hasMany(DiningPreference, 'id')
        }
    }

    static state ()  {
        return {
          user: null
        }
      }
}

