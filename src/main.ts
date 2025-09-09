import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import "./assets/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { Icon } from "@iconify/vue";
import { borderEffect } from "./directives/borderEffect";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("Icon", Icon);
app.use(createPinia());
app.use(router);

app.directive("border-effect", borderEffect);

app.mount("#app");
