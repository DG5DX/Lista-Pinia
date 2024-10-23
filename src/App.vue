<template>
  <div class="Contenedor">
    <div class="Tab">
      <q-tabs v-model="tab" no-caps class="bg-orange text-white shadow-2">
        <q-tab name="Lista" label="Lista" @click="goTo('/')" />
        <q-tab name="Agregar" label="Agregar" @click="goTo('/agregar')" />
        <q-tab name="Editar" label="Editar" @click="goTo('/editar')" />
      </q-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { Quasar, Notify, Dialog, QTab, QTabs } from 'quasar';


const tab = ref('Inicio');
const router = useRouter();
const goTo = (route) => {
  router.push(route);
}
</script>

<style>

</style>