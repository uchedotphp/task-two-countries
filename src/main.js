import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import "nprogress/nprogress.css"; //nprogress progress bar css

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
