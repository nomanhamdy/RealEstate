<template>
    <div id="app">
      <nav>
        <!-- Navigation Bar -->
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <!-- More navigation links as required -->
      </nav>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <p>&copy; 2024 RealEstateManagement. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style>
  /* Basic Styling */
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    display: flex;
    justify-content: space-around;
    background-color: #34495e;
    padding: 1em;
  }
  
  nav a {
    color: white;
    text-decoration: none;
  }
  
  main {
    margin: 20px;
  }
  
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #34495e;
    color: white;
    text-align: center;
    padding: 10px 0;
  }
  </style>
  