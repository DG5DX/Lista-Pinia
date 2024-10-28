<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Gestión de Actividades</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-tabs v-model="currentTab" class="text-primary bg-white" align="justify" @update:model-value="navigateTo">
        <q-tab name="actividades" label="Actividades" icon="list" />
        <q-tab name="agregar" label="Agregar Actividad" icon="add" />
      </q-tabs>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentTab = ref('actividades');

function navigateTo(tab) {
  if (tab === 'actividades') {
    router.push('/');
  } else if (tab === 'agregar') {
    router.push('/agregar');
  } else if (tab === 'editar') {
    router.push('/editar');
  }
}
</script>

<style scoped>
.q-tabs {
  border-bottom: 2px solid #ccc;
}

.q-layout {
  background-color: rgb(45, 101, 255);
}

.q-toolbar {
  display: grid;
  justify-items: center;
}
</style>
