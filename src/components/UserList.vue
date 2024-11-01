<template>
    <div class="user-list" ref="scrollComponent">
      <UserCard v-for="user in users" :user="user" :key="user.id" />
    </div>
    <div v-if="isLoading" class="loading">Loading...</div>
  </template>
  
  <script setup>
  import UserCard from "./UserCard.vue";
  import { ref, onMounted, onUnmounted } from "vue";
  import { useUserData } from "../composables/useUserData";
  
  const { users, isLoading, loadMoreUsers } = useUserData();
  const scrollComponent = ref(null);

/**
 * Creates a debounced version of the given function.
 * The debounced function delays the processing of the function
 * until after a specified delay time has passed.
 *
 * @param {Function} fn - The function to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {Function} Debounced version of the input function.
*/
  
  function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }

/**
 * Handles the scroll event and triggers data loading
 * when the user reaches the bottom of the component.
*/
  
  const handleScroll = debounce(() => {
    const element = scrollComponent.value;
    if (element && element.getBoundingClientRect().bottom < window.innerHeight) {
      loadMoreUsers();
    }
  }, 200);
  
  onMounted(async () => {
    await loadMoreUsers();
    window.addEventListener("scroll", handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  
  <style>
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