<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{
  teacherSubjects: any[]
  timetable: any[]
  selectedTeacherId: number | undefined
  selectedClassId: number | undefined
}>()
const emit = defineEmits(['add'])

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const hours = ['8:00', '9:00', '10:00', '11:00', '12:00']
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Hora</th>
        <th v-for="day in days" :key="day">
          {{ day }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="hour in hours" :key="hour">
        <td>{{ hour }}</td>
        <td v-for="day in days" :key="day">
          <select @change="e => emit('add', { day, hour, subjectId: +e.target.value })">
            <option value="">
              -
            </option>
            <option v-for="s in teacherSubjects" :key="s.id" :value="s.id">
              {{ s.name }}
            </option>
          </select>
          <div v-for="item in timetable.filter(t => t.day === day && t.hour === hour && t.teacherId === selectedTeacherId && t.classId === selectedClassId)" :key="item.subjectId">
            {{ teacherSubjects.find(s => s.id === item.subjectId)?.name }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
td, th {
  border: 1px solid #eee;
  padding: 4px;
  text-align: center;
}
</style>
