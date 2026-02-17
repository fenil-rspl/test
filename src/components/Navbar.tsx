<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
<style scoped>
navigation {
  background-color: #343a40;
  color: white;
  padding: 1rem;
}
</style>