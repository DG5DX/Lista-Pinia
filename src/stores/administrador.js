import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAdministradorStore = defineStore('administrador', () => {
  const admins = ref([]);

  const addAdmin = (admin) => {
    admins.value.push(admin);
  };

  const updateAdmin = (id, updatedData) => {
    const index = admins.value.findIndex(admin => admin.id === id);
    if (index !== -1) {
      admins.value[index] = { ...admins.value[index], ...updatedData };
    }
  };

  const deleteAdmin = (id) => {
    admins.value = admins.value.filter(admin => admin.id !== id);
  };

  return {
    admins,
    addAdmin,
    updateAdmin,
    deleteAdmin,
  };
});
