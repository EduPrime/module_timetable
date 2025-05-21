<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{ classes: any[], modelValue: number | undefined }>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <ion-select :value="modelValue" placeholder="Selecione a Turma" @ion-change="e => emit('update:modelValue', e.detail.value)">
    <ion-select-option v-for="c in classes" :key="c.id" :value="c.id">
      {{ c.name }}
    </ion-select-option>
  </ion-select>
</template>
