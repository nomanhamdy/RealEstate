<template>
  <div class="property-create">
    <h2>Create New Property</h2>
    <form @submit.prevent="submitProperty" class="property-form">
      <div class="form-group">
        <label for="title">Property Title:</label>
        <input id="title" v-model="property.title" type="text" placeholder="Property Title" class="input-field">
      </div>
      
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="property.description" placeholder="Description" class="input-field"></textarea>
      </div>
      
      <div class="form-group">
        <label for="price">Price:</label>
        <input id="price" v-model.number="property.price" type="number" placeholder="Price" class="input-field">
      </div>

      <div class="form-group">
        <label for="location">Location:</label>
        <input id="location" v-model="property.location" type="text" placeholder="Location" class="input-field">
      </div>

      <div class="form-group">
        <label for="image">Property Image:</label>
        <input id="image" type="file" @change="handleFileUpload" class="input-field file-upload">
      </div>

      <button type="submit" class="btn submit-btn">Create Property</button>
    </form>
  </div>
</template>

<script>
export default {
  // ... existing script
  data() {
    return {
      property: {
        title: '',
        description: '',
        price: 0,
        location: '',
        imageFile: null,
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      this.property.imageFile = event.target.files[0];
    },
    submitProperty() {
      // API call to submit the property details
    },
  },
};
</script>

<style scoped>
.property-create .form-group {
  margin-bottom: 15px;
}

.property-create label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.file-upload {
  border: none;
}

.btn.submit-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn.submit-btn:hover {
  background-color: #45a049;
}
</style>
