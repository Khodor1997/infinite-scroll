<template>
  <div class="user-card">
    <img :src="user.picture?.thumbnail" :alt="user.name?.first" />
    <div class="user-info">
      <h3>{{ user.name?.first }} {{ user.name?.last }}</h3>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script setup>

/**
 * Props for UserCard component.
 *
 * @typedef {Object} User
 * @property {Object} picture - User picture object containing thumbnail URL.
 * @property {string} picture.thumbnail - URL to the user's thumbnail image.
 * @property {Object} name - User name object containing first and last names.
 * @property {string} name.first - User's first name.
 * @property {string} name.last - User's last name.
 * @property {string} email - User's email address.
 */

/**
 * @type {User} user - Object containing user data.
 */

defineProps({
  user: Object,
});
</script>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
}
.user-card img {
  border-radius: 50%;
  margin-right: 10px;
}
.user-info h3 {
  margin: 0;
  font-size: 1.1em;
}
.user-info p {
  margin: 5px 0 0;
  color: #555;
}
</style>
