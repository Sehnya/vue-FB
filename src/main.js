import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./firebase"; // Import Firebase configuration to initialize Firebase

const app = createApp(App);

app.use(store);
app.use(router);

// Optional: If you want to make Firebase available globally, you could do:
// import { auth, db } from "./firebase";
// app.config.globalProperties.$auth = auth;
// app.config.globalProperties.$db = db;
// ...
createApp(App).use(store).use(router).mount("#app");

app.mount("#app");
