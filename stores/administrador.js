import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useAdministradorStore = defineStore("administrador", () => {
  const admins = ref([]); // Almacena la lista de administradores
  const loading = ref(false); // Estado de carga
  const error = ref(null); // Manejo de errores

  // Función para obtener administradores desde un API
  const fetchAdmins = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.get("/api/admins"); // Ajusta la URL según tu API
      admins.value = response.data; // Asigna la respuesta a la lista de administradores
    } catch (err) {
      error.value = "Error al obtener los administradores.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  // Función para agregar un nuevo administrador
  const addAdmin = async (adminData) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.post("/api/admins", adminData); // Ajusta la URL
      admins.value.push(response.data); // Agrega el nuevo administrador a la lista
    } catch (err) {
      error.value = "Error al agregar el administrador.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  // Función para eliminar un administrador
  const deleteAdmin = async (adminId) => {
    loading.value = true;
    error.value = null;

    try {
      await axios.delete(`/api/admins/${adminId}`); // Ajusta la URL
      admins.value = admins.value.filter(admin => admin.id !== adminId); // Filtra el administrador eliminado
    } catch (err) {
      error.value = "Error al eliminar el administrador.";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    admins,
    loading,
    error,
    fetchAdmins,
    addAdmin,
    deleteAdmin,
  };
});
