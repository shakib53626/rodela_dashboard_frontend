import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import titleMixin from "@/mixins/titleMixin";
import "./assets/scss/app.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "@/assets/css/font-awesome.css";
import "@/assets/css/linearicon.css";
import "@/assets/css/vendors/font-awesome.css";
import vueFeather from "vue-feather";
import CKEditor from "@ckeditor/ckeditor5-vue";
import VueApexCharts from "vue3-apexcharts";
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';


const app = createApp(App);
app.use(store);
app.use(CKEditor);
app.component("vueFeather", vueFeather);
app.component("apexchart", VueApexCharts);
app.mixin(titleMixin);
app.use(router);
app.mount("#app");
