import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Chakra, { CThemeProvider } from "@chakra-ui/vue";
import VueSplide from "@splidejs/vue-splide";


// Splide Css
// Default theme
import '@splidejs/vue-splide/css';


const app = createApp(App);
// app.use(Chakra);
app.use(VueSplide);
app.mount("#app");
