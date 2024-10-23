<template>
    <div>
      <h2>Editar Actividad</h2>
      <form @submit.prevent="guardarCambios">
        <div>
          <label for="actividad">Actividad:</label>
          <textarea id="actividad" v-model="actividad" required></textarea>
        </div>
  
        <div>
          <label for="fecha">Fecha:</label>
          <input type="date" id="fecha" v-model="fecha" required />
        </div>
  
        <div>
          <label for="estado">Estado:</label>
          <select id="estado" v-model="estado" required>
            <option value="Pendiente">Pendiente</option>
            <option value="Completado">Completado</option>
          </select>
        </div>
  
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAdministradorStore } from '../stores/administrador';

const actividad = ref('');
const fecha = ref('');
const estado = ref('Pendiente');

const store = useAdministradorStore();
const router = useRouter();
const route = useRoute();

onMounted(() => {
  const id = route.query.id; // Usa 'route.query.id' en vez de 'route.params.id'
  const actividadExistente = store.admins.value.find((admin) => admin.id === id);
  if (actividadExistente) {
    actividad.value = actividadExistente.actividad;
    fecha.value = actividadExistente.fecha;
    estado.value = actividadExistente.estado;
  }
});

const guardarCambios = () => {
  const id = route.query.id;
  store.updateAdmin(id, {
    actividad: actividad.value,
    fecha: fecha.value,
    estado: estado.value,
  });
  router.push('/');
};

  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos personalizados para este componente */
  </style>
  