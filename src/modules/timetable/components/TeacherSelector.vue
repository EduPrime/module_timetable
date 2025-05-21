<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{ teachers: any[], modelValue: number | undefined }>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <ion-select :value="modelValue" placeholder="Selecione o Professor" @ion-change="e => emit('update:modelValue', e.detail.value)">
    <ion-select-option v-for="t in teachers" :key="t.id" :value="t.id">
      {{ t.name }}
    </ion-select-option>
  </ion-select>
</template>
