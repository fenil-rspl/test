<template>
  <button @click="handleClick">{{ label }}</button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  props: {
    label: {
      type: String as PropType<string>,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
});
</script>
<style scoped>
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>