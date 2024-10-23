<template>
    <q-page>
      <q-table
        :rows="actividades"
        :columns="columns"
        row-key="id"
        class="q-pa-md"
      >
        <template v-slot:body-cell-estado="props">
          <q-chip :color="props.row.estado === 'Completado' ? 'green' : 'orange'">
            {{ props.row.estado }}
          </q-chip>
        </template>
        <template v-slot:body-cell-acciones="props">
          <q-btn icon="edit" @click="editarActividad(props.row)" color="blue" />
          <q-btn icon="delete" @click="eliminarActividad(props.row.id)" color="red" />
        </template>
      </q-table>
    </q-page>
  </template>
  
<script setup>
import { useAdministradorStore } from '../stores/administrador';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useAdministradorStore(); // Asegúrate de estar usando el store correcto
const { admins, deleteAdmin } = store; // Usa 'admins' en vez de 'actividades'

const columns = [
  { name: 'actividad', label: 'Actividad', align: 'left', field: 'actividad' },
  { name: 'fecha', label: 'Fecha', align: 'center', field: 'fecha' },
  { name: 'estado', label: 'Estado', align: 'center', field: 'estado' },
  { name: 'acciones', label: 'Acciones', align: 'center' }
];

const editarActividad = (actividad) => {
  router.push({ path: '/editar', query: { id: actividad.id } });
};
  </script>
  