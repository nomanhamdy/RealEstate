<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <form @submit.prevent="updateProfile" class="profile-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input id="username" v-model="user.username" type="text" placeholder="Username" class="input-field">
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="user.email" type="email" placeholder="Email" class="input-field">
      </div>

      <div class="form-group">
        <label for="role">Role:</label>
        <select id="role" v-model="user.role" class="input-field">
          <option value="">Select a Role</option>
          <option value="admin">Admin</option>
          <option value="agent">Agent</option>
          <option value="accountant">Accountant</option>
        </select>
      </div>

      <button type="submit" class="btn update-btn">Update Profile</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        role: '',
      },
    };
  },
  methods: {
    updateProfile() {
      // API call to update the user profile
    },
  },
};
</script>

<style scoped>
.user-profile .form-group {
  margin-bottom: 15px;
}

.user-profile label {
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

.btn.update-btn {
  background-color: #008CBA;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn.update-btn:hover {
  background-color: #007B9A;
}
</style>
