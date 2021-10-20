import { createApp } from "vue";
import App from "./App.vue";

import { router, setupRouter } from '/@/router';

async function bootStrap() {
  const app = createApp(App);

  // Configure routing
//   setupRouter(app);

  app.mount("#app");
}

bootStrap();
