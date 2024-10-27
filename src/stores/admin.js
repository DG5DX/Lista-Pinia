// stores/admin.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAdminStore = defineStore('admin', () => {
  const activities = ref([]);
  const selectedActivity = ref(null);

  function addActivity(activity) {
    activities.value.push(activity);
  }

  function updateActivity(updatedActivity) {
    const index = activities.value.findIndex(act => act.id === updatedActivity.id);
    if (index !== -1) {
      activities.value[index] = updatedActivity;
    }
  }

  function setSelectedActivity(activity) {
    selectedActivity.value = activity;
  }

  return { activities, selectedActivity, addActivity, updateActivity, setSelectedActivity };
});
