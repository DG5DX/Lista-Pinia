<template>
    <q-page>
      <q-form @submit.prevent="agregarNuevaActividad" class="q-gutter-md q-pa-md">
        <q-input v-model="nuevaActividad.actividad" type="textarea" label="Actividad" />
        <q-input v-model="nuevaActividad.fecha" type="date" label="Fecha" />
        <q-select
          v-model="nuevaActividad.estado"
          :options="['Completado', 'Pendiente']"
          label="Estado"
        />
        <q-btn type="submit" label="Agregar" color="primary" />
      </q-form>
    </q-page>
  </template>
  
<script setup>
import { ref } from 'vue';
import { useAdministradorStore } from '../stores/administrador'; // Usa el store correcto
import { useRouter } from 'vue-router';

const store = useAdministradorStore();
const router = useRouter();
const nuevaActividad = ref({ actividad: '', fecha: '', estado: 'Pendiente' });

const agregarNuevaActividad = () => {
  store.addAdmin(nuevaActividad.value);
  router.push('/');
};

</script>
  