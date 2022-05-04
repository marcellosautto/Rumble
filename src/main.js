import { createApp } from "vue";
import App from "./App.vue";
import Amplify from "aws-amplify";
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
import '@fortawesome/fontawesome-free/js/all'
import router from './router'
import store from './store'

import "@aws-amplify/ui-vue/styles.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSocialSharing from 'vue-social-sharing'


//var cors = require('cors')
Amplify.configure(aws_exports);
createApp(App).use(router).use(store).use(VueSocialSharing).mount('#app')
