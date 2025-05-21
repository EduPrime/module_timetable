<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ subjects: any[] }>()
</script>

<template>
  <ul>
    <li v-for="s in subjects" :key="s.id">
      {{ s.name }}
    </li>
  </ul>
</template>
