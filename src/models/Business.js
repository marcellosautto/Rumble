import { Model } from "@vuex-orm/core"
import Coords from "./Coords";
import Category from "./Category";
import DiningRecommendation from "./DiningRecommendation";
import Location from "./Location";

export default class Business extends Model {

    static entitiy = 'businesses';
    static primaryKey = 'id';

    static fields() {
        return {
            id: this.string("").nullable(),
            alias: this.string("").nullable(),
            name: this.string("").nullable(),
            categories: this.hasMany(Category, 'alias'),
            image_url: this.string("").nullable(),
            is_closed: this.boolean(false).nullable(),
            url: this.string("").nullable(),
            review_count: this.number(0).nullable(),
            rating: this.number(0).nullable(),
            location: this.hasOne(Location, 'city'),
            coordinates: this.hasOne(Coords, ["latitude", "longitude"]),
            transactions: this.attr([""]).nullable(),
            price: this.string("").nullable(),
            phone: this.string("").nullable(),
            display_phone: this.string("").nullable(),
            distance: this.number(0).nullable(),
            recommendation: this.belongsTo(DiningRecommendation, 'id')
        }
    }

    static state() {
        return {
            businesses: null
        }
    }

}