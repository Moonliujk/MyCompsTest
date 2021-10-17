<template>
  <button @click="onClick">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'ljkButton',
    methods: {
      onClick (e) {
        this.$emit('click', e);
        e.preventDefault();
      }
    }
}
</script>

<style>

</style>