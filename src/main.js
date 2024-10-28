import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes/routes.js';
import { Quasar, Notify } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(Quasar, {
  plugins: {
    Notify,
  },
});

app.use(router);
app.use(createPinia());
app.mount('#app');
