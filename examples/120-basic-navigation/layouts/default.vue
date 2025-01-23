<template>
  <div class="container">
    <MainNavigation/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import MainNavigation from "@/components/MainNavigation.vue";
</script>
