import { Model } from "@vuex-orm/core";

export default class Category extends Model {

    static entity = 'categories';

    static fields() {
        return {
            alias: this.string("").nullable(),
            title: this.string("").nullable()
        }
    }
}