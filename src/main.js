import {createSSRApp} from "vue";
import vueApp from "./app.vue";

const app = createSSRApp(vueApp);
app.mount("#app");

export default app;
