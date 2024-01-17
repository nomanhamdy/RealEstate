<template>
  <div class="design-dashboard">
    <h2>Design Dashboard</h2>
    <ul v-if="designRequests.length" class="design-requests">
      <li v-for="request in designRequests" :key="request.id" class="request-item">
        {{ request.title }}
        <input type="file" @change="uploadDesign(request)" class="file-input" />
      </li>
    </ul>
  </div>
</template>

<script>
// ... existing script
</script>

<style scoped>
.design-dashboard h2 {
  color: #8e44ad;
  font-size: 24px;
}

.design-requests {
  list-style-type: none;
  padding: 0;
}

.request-item {
  background: #f4f6f7;
  border: 1px solid #aab7c4;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.file-input {
  margin-top: 10px;
}
</style>
