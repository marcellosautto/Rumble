import { createApp } from "vue";
import App from "./App.vue";
import Amplify from "aws-amplify";
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
import '@fortawesome/fontawesome-free/js/all'
import router from './router'
import "@aws-amplify/ui-vue/styles.css";

Amplify.configure(aws_exports);

createApp(App).use(router).mount("#app");
