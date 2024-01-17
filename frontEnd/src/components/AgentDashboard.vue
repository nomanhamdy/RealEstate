<template>
  <div class="agent-dashboard">
    <h2>Agent Dashboard</h2>
    <section>
      <h3>Client Requests</h3>
      <ul v-if="clientRequests.length" class="client-requests">
        <li v-for="request in clientRequests" :key="request.id" class="request-item">
          <span>{{ request.clientName }} - {{ request.requestDetail }}</span>
          <button @click="handleClientRequest(request)" class="btn respond-btn">Respond</button>
        </li>
      </ul>
    </section>

    <section>
      <h3>Properties Management</h3>
      <button @click="navigateToCreateProperty" class="btn add-property-btn">Add New Property</button>
      <div v-for="property in properties" :key="property.id" class="property-item">
        <h4>{{ property.title }}</h4>
        <p>{{ property.description }}</p>
        <button @click="editProperty(property.id)" class="btn edit-btn">Edit</button>
      </div>
    </section>
  </div>
</template>

<script>
// ... existing script
</script>

<style scoped>
.agent-dashboard h2 {
  color: #2c3e50;
  font-size: 24px;
}

.client-requests, .properties {
  list-style-type: none;
  padding: 0;
}

.request-item, .property-item {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #2980b9;
}

.add-property-btn {
  background-color: #e67e22;
}

.edit-btn {
  background-color: #16a085;
}

.respond-btn {
  background-color: #9b59b6;
}
</style>
