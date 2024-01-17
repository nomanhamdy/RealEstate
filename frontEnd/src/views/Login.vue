<template>
  <div class="login-container">
    <h2>Login to Your Account</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="input-group">
        <input v-model="user.username" placeholder="Username" class="login-input"/>
        <label>Username</label>
      </div>
      <div class="input-group">
        <input v-model="user.password" type="password" placeholder="Password" class="login-input"/>
        <label>Password</label>
      </div>
      <button type="submit" class="login-btn">Login</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import store from '../store'; // Import Vuex store

export default {
  data() {
    return {
      user: { username: '', password: '' },
      errorMessage: '',
    };
  },
  methods: {
    async login() {
      try {
        await store.dispatch('users/loginUser', this.user);
        this.redirectBasedOnRole();
      } catch (error) {
        this.errorMessage = error.response ? error.response.data.message : "Login failed. Please try again.";
      }
    },
    redirectBasedOnRole() {
      const role = store.state.users.currentUser.role;
      const roleBasedRoute = {
        admin: '/admin',
        agent: '/agent-dashboard',
        accounting: '/accounting-dashboard',
        design: '/design-dashboard',
        architectural: '/architectural-review',
        supervision: '/supervision-dashboard'
      };
      this.$router.push(roleBasedRoute[role] || '/');
    }
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

h2 {
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  position: relative;
  margin-bottom: 20px;
}

.login-input {
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.login-input:focus {
  border-color: #009688;
  outline: none;
}

label {
  position: absolute;
  top: -8px;
  left: 10px;
  background-color: #f5f5f5;
  padding: 0 5px;
  font-size: 14px;
  color: #777;
}

.login-btn {
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #009688;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #00796b;
}

.error-message {
  color: red;
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
}
</style>
