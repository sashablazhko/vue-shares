import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.http.options.root = "https://vue-shares.firebaseio.com/";

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
