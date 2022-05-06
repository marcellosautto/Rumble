import { Model } from "@vuex-orm/core";

export default class Attribute extends Model {
    static entity = 'attributes';

    static fields () {
        return {
            email: this.string(''),
            birthdate: this.string(''),
            phone_number: this.string('')
            
        }
    }
}