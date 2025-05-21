<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/vue'
import { computed, ref } from 'vue'
import ClassSelector from '../components/ClassSelector.vue'
import ScheduleGrid from '../components/ScheduleGrid.vue'
import SubjectList from '../components/SubjectList.vue'
import TeacherSelector from '../components/TeacherSelector.vue'
import { classes, subjects, teachers } from '../services/fakeData'

const selectedTeacherId = ref<number>()
const selectedClassId = ref<number>()
const timetable = ref<any[]>([])

const selectedTeacher = computed(() =>
  teachers.find(t => t.id === selectedTeacherId.value),
)
const teacherSubjects = computed(() =>
  subjects.filter(s => selectedTeacher.value?.subjects.includes(s.id)),
)
const selectedClass = computed(() =>
  classes.find(c => c.id === selectedClassId.value),
)

function addToTimetable({ day, hour, subjectId }: { day: string, hour: string, subjectId: number }) {
  if (selectedTeacherId.value && selectedClassId.value && subjectId) {
    timetable.value.push({
      day,
      hour,
      subjectId,
      teacherId: selectedTeacherId.value,
      classId: selectedClassId.value,
    })
  }
}
</script>

<template>
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>Gerenciar Quadro de Horários</IonCardTitle>
    </IonCardHeader>
    <IonRow>
      <IonCol>
        <TeacherSelector v-model="selectedTeacherId" :teachers="teachers" />
      </IonCol>
      <IonCol>
        <ClassSelector v-model="selectedClassId" :classes="classes" />
      </IonCol>
    </IonRow>
    <div v-if="selectedTeacher">
      <h3>Disciplinas do Professor:</h3>
      <SubjectList :subjects="teacherSubjects" />
    </div>
    <div v-if="selectedTeacher && selectedClass">
      <h3>Monte o Quadro de Horários</h3>
      <ScheduleGrid
        :teacher-subjects="teacherSubjects"
        :timetable="timetable"
        :selected-teacher-id="selectedTeacherId"
        :selected-class-id="selectedClassId"
        @add="addToTimetable"
      />
    </div>
  </IonCard>
</template>

<style scoped>
/* Seus estilos aqui */
</style>
