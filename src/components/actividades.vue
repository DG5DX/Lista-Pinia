<template>
    <div class="q-pa-md">
      <q-card>
        <q-card-section>
          <h2>Lista de Actividades</h2>
        </q-card-section>
        <q-card-section>
          <q-table
            :rows="activities"
            :columns="columns"
            row-key="id"
            flat
            bordered
            class="q-my-md"
          >
            <!-- Plantilla para la columna de acciones -->
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn dense color="primary" icon="edit" @click="editActivity(props.row)" />
              </q-td>
            </template>
  
            <!-- Plantilla para la columna de estado con colores dinámicos -->
            <template v-slot:body-cell-status="props">
              <q-td :props="props">
                <span :class="getStatusClass(props.row.status)">
                  {{ props.row.status }}
                </span>
              </q-td>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script setup>
  import { useAdminStore } from '../stores/admin.js';
  import { useRouter } from 'vue-router';
  import { computed } from 'vue';
  
  const store = useAdminStore();
  const router = useRouter();
  
  const activities = computed(() => store.activities);
  const columns = [
    { name: 'description', label: 'Descripción', field: 'description', align: 'left' },
    { name: 'date', label: 'Fecha', field: 'date', align: 'center' },
    { name: 'status', label: 'Estado', field: 'status', align: 'center' },
    { name: 'actions', label: 'Editar', field: 'actions', align: 'center' }
  ];
  
  // Función para redirigir a la vista de edición
  function editActivity(activity) {
    store.setSelectedActivity(activity);
    router.push('/editar');
  }
  
  // Función para asignar clases de color según el estado
  function getStatusClass(status) {
    return status === 'Completado' ? 'text-green' : 'text-red';
  }
  </script>
  
  <style scoped>
  .text-green {
    color: green;
    font-weight: bold;
  }
  
  .text-red {
    color: red;
    font-weight: bold;
  }
  </style>
  