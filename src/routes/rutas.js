import Lista from "../components/Lista.vue"
import Agregar from "../components/Agregar.vue"
import Editar from "../components/Editar.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/", component: Lista },
    { path: "/agregar", component: Agregar },
    { path: "/editar", component: Editar },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
