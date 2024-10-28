<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <h2>Lista de Actividades</h2>
      </q-card-section>
      <q-card-section>
        <q-table :rows="activities" :columns="columns" row-key="id" flat bordered class="q-my-md">
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense color="primary" icon="edit" @click="editActivity(props.row)" />
              <q-btn dense color="negative" icon="delete" @click="deleteActivity(props.row.id)" />
            </q-td>
          </template>

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
  { name: 'actions', label: 'Acciones', field: 'actions', align: 'center' }
];

function editActivity(activity) {
  store.setSelectedActivity(activity);
  router.push('/editar');
}

function deleteActivity(activityId) {
  store.deleteActivity(activityId);
}

function getStatusClass(status) {
  return status === 'Completado' ? 'completado' : 'pendiente';
}
</script>

<style scoped>
h2 {
  margin: 20px;
  text-align: center;
}

.completado {
  color: green;
  font-weight: bold;
}

.pendiente {
  color: red;
  font-weight: bold;
}
</style>
