<template>
    <div class="register-container">
      <form @submit.prevent="register">
        <input v-model="newUser.username" placeholder="Username" />
        <input v-model="newUser.email" type="email" placeholder="Email" />
        <input v-model="newUser.password" type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newUser: { username: '', email: '', password: '' },
      };
    },
    methods: {
      register() {
        // Logic to handle new user registration
      },
    },
  };
  </script>
  