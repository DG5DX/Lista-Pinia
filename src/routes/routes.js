import { createRouter, createWebHistory } from 'vue-router';
import Actividades from '../components/actividades.vue';
import Agregar from '../components/agregar.vue';
import Editar from '../components/editar.vue';

const routes = [
    { path: '/', component: Actividades, name: 'Actividades' },
    { path: '/agregar', component: Agregar, name: 'Agregar' },
    { path: '/editar', component: Editar, name: 'Editar' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
