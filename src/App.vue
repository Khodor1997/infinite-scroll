<template>
    <div class="app">
      <h1>Infinite Scroll</h1>
      <UserList />
    </div>
  </template>
  
  <script setup>
  import UserList from './components/UserList.vue'
  </script>
  
  <style>
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
  .user-list {
    max-width: 600px;
    margin: 0 auto;
  }
  .loading {
    margin: 20px 0;
    font-weight: bold;
    color: #555;
  }
  </style>