<template>
  <div class="admin-dashboard">
    <h2>Admin Dashboard</h2>
    <button @click="fetchAllUsers" class="dashboard-btn">Load All Users</button>
    <button @click="fetchAllProperties" class="dashboard-btn">Load All Properties</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('admin', ['fetchAllUsers', 'fetchAllProperties'])
  }
};
</script>

<style scoped>
.admin-dashboard {
  padding: 20px;
  background-color: #eaeaea;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.admin-dashboard h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.dashboard-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-right: 10px;
}

.dashboard-btn:hover {
  background-color: #2980b9;
}
</style>
