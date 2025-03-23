<template>
 <nav class="flex gap-4 p-4 bg-gray-200">
      <RouterLink to="/">Clock</RouterLink>
      <RouterLink to="/search">Search</RouterLink>
      <RouterLink to="/user">User</RouterLink>
      <RouterLink to="/form">Form</RouterLink>
      <RouterLink to="/ws">WebSocket</RouterLink>
      <RouterLink to="/toggle">Toggle</RouterLink>
    </nav>
  <main class="p-4">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { onErrorCaptured } from 'vue';

onErrorCaptured((err, instance, info) => {
  console.error('[Global Error]', err, info);
  return false; // propagate further
});
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
