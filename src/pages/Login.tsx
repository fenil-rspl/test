<template>
  <div>
    <h2>Login Page</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { login } from '../services/auth';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');

    const loginUser = async () => {
      try {
        const response = await login(email.value, password.value);
        console.log('Logged in:', response);
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    return { email, password, login: loginUser };
  }
});
</script>