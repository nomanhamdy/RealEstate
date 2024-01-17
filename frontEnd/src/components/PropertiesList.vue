<template>
  <div class="properties-list">
    <h2>Properties</h2>
    <ul>
      <li v-for="property in properties" :key="property.id" class="property-item">
        <h3>{{ property.title }}</h3>
        <p>{{ property.description }}</p>
        <span>Price: {{ property.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// ... existing script
</script>

<style scoped>
.properties-list h2 {
  color: #2c3e50;
  font-size: 24px;
}

.property-item {
  background: #ecf0f1;
  border: 1px solid #bdc3c7;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
