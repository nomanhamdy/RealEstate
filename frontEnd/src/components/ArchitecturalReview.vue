<template>
  <div class="architectural-review">
    <h2>Architectural Review</h2>
    <ul v-if="designs.length" class="design-list">
      <li v-for="design in designs" :key="design.id" class="design-item">
        {{ design.title }}
        <button @click="approveDesign(design)" class="btn approve-btn">Approve</button>
      </li>
    </ul>
  </div>
</template>

<script>
// ... existing script
</script>

<style scoped>
.architectural-review h2 {
  color: #34495e;
  font-size: 24px;
}

.design-list {
  list-style-type: none;
  padding: 0;
}

.design-item {
  background: #ecf0f1;
  border: 1px solid #bdc3c7;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #27ae60;
}

.approve-btn {
  background-color: #3498db;
}
</style>
