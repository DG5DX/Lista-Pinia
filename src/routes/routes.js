// src/routes/routes.js
import { createRouter, createWebHistory } from 'vue-router';
import Actividades from '../components/Actividades.vue';
import Agregar from '../components/Agregar.vue';
import Editar from '../components/Editar.vue';

const routes = [
  { path: '/', component: Actividades, name: 'Actividades' },
  { path: '/agregar', component: Agregar, name: 'Agregar' },
  { path: '/editar', component: Editar, name: 'Editar' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // Use default export here
