<script setup lang="ts">
import { ref, computed, onMounted, reactive, watch } from 'vue'
import { DateTime } from 'luxon'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-coverflow'
import { IonIcon, IonContent, IonList, IonItem, IonLabel, IonAvatar, IonReorderGroup, IonReorder, IonButton, IonModal, IonInput, IonSelect, IonSelectOption, IonDatetime, IonAlert, IonFab, IonFabButton } from '@ionic/vue'
import { chevronBack, chevronForward, school, personCircle, sparkles, addCircle } from 'ionicons/icons'
import { timetables, classes, subjects, teachers, rooms } from '../services/fakeData'
import { nanoid } from 'nanoid'

const diasSemana = [
  'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
]

const today = DateTime.now()
const currentDayIndex = ref(today.weekday % 7)
const displayedDayIndex = ref(currentDayIndex.value)
const selectedClassId = 3 // Exemplo: 1º Ano A
const swiperInstance = ref<any>(null)

const getTimetableForDay = (dia: string) => {
  return timetables.find(t => t.day === dia && t.classId === selectedClassId)
}

const getSubject = (id: number) => subjects.find(s => s.id === id)
const getSubjectName = (id: number) => getSubject(id)?.name || 'Desconhecido'
const getSubjectColor = (id: number) => {
  // Paleta simples baseada no id
  const colors = ['#81d4fa', '#a5d6a7', '#ffd54f', '#ffab91', '#ce93d8', '#b0bec5', '#f8bbd0', '#c5e1a5', '#fff176', '#b39ddb', '#90caf9', '#ffcc80', '#bcaaa4', '#e1bee7', '#80cbc4', '#f48fb1', '#cfd8dc']
  return colors[id % colors.length]
}
const getTeacher = (id: number) => teachers.find(t => t.id === id)
const getTeacherName = (id: number) => getTeacher(id)?.name || '---'
const getTeacherInitials = (id: number) => {
  const name = getTeacher(id)?.name || ''
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2)
}
const getRoomName = (id: number) => rooms.find(r => r.id === id)?.name || '---'

function onSwiper(swiper: any) {
  swiperInstance.value = swiper;
}

const prevDay = () => {
  if (displayedDayIndex.value > 0) {
    displayedDayIndex.value -= 1;
    if (swiperInstance.value) swiperInstance.value.slideTo(displayedDayIndex.value);
  }
};
const nextDay = () => {
  if (displayedDayIndex.value < diasSemana.length - 1) {
    displayedDayIndex.value += 1;
    if (swiperInstance.value) swiperInstance.value.slideTo(displayedDayIndex.value);
  }
};

function onSlideChange(swiper: { activeIndex: number }) {
  currentDayIndex.value = swiper.activeIndex;
  displayedDayIndex.value = swiper.activeIndex;
}

// Função para obter o nome do dia da semana usando Luxon
function getDayNameByIndex(idx: number) {
  // Luxon: 1 = Monday, 7 = Sunday
  // Nosso array: 0 = Domingo, 6 = Sábado
  // Ajuste: se idx === 0 (Domingo), Luxon = 7
  let luxonWeekday: 1|2|3|4|5|6|7 = 1;
  if (idx === 0) luxonWeekday = 7;
  else if (idx >= 1 && idx <= 6) luxonWeekday = idx as 1|2|3|4|5|6|7;
  return DateTime.fromObject({ weekday: luxonWeekday }).setLocale('pt-BR').toFormat('cccc');
}

const showConfirmModal = ref(false)
const showAddModal = ref(false)
const lastOrderSnapshot = ref<any[]>([])
const addForm = reactive({
  subjectId: null as number|null,
  teacherId: null as number|null,
  roomId: null as number|null,
  start: '',
  end: ''
})
const addTargetDay = ref('')

// Salva snapshot ao trocar de dia
watch(() => displayedDayIndex.value, (newIdx) => {
  const timetable = getTimetableForDay(diasSemana[newIdx])
  lastOrderSnapshot.value = timetable?.lessons ? timetable.lessons.map(l => ({...l})) : []
})

function confirmReorder() {
  showConfirmModal.value = false
}
function undoReorder() {
  // Restaura snapshot
  const timetable = getTimetableForDay(diasSemana[displayedDayIndex.value])
  if (timetable && lastOrderSnapshot.value) {
    timetable.lessons = lastOrderSnapshot.value.map(l => ({...l}))
  }
  showConfirmModal.value = false
}

function onReorder(event: CustomEvent, dia: string) {
  const timetable = getTimetableForDay(dia)
  if (!timetable) return
  const from = event.detail.from
  const to = event.detail.to
  if (from === to) {
    event.detail.complete()
    return
  }
  const moved = timetable.lessons.splice(from, 1)[0]
  timetable.lessons.splice(to, 0, moved)
  event.detail.complete()
  // Só mostra confirmação se houve mudança real
  showConfirmModal.value = true
}

function openAddModal(dia: string) {
  addTargetDay.value = dia
  addForm.subjectId = null
  addForm.teacherId = null
  addForm.roomId = null
  addForm.start = ''
  addForm.end = ''
  showAddModal.value = true
}
function addLesson() {
  const timetable = getTimetableForDay(addTargetDay.value)
  if (!timetable) return
  timetable.lessons.push({
    id: nanoid(),
    subjectId: addForm.subjectId!,
    teacherId: addForm.teacherId!,
    roomId: addForm.roomId!,
    start: addForm.start,
    end: addForm.end,
    status: 'manual',
    conflict: ''
  })
  showAddModal.value = false
}
</script>

<template>
   <ContentLayout>
    <ion-card color="light" class="ion-margin-bottom">
      <ion-card-header>
        <ion-card-title>O que esta tela faz?</ion-card-title>
      </ion-card-header>
      </ion-card>
  <ion-content class="ion-padding timetable-content">
    <div class="day-nav-bar">
      <ion-icon :icon="chevronBack" class="nav-arrow" :class="{ disabled: displayedDayIndex === 0 }" @click="prevDay" />
      <div class="day-title day-title-single" :key="displayedDayIndex">
        {{ getDayNameByIndex(displayedDayIndex) }}
        <span class="day-indicator"></span>
      </div>
      <ion-icon :icon="chevronForward" class="nav-arrow" :class="{ disabled: displayedDayIndex === diasSemana.length - 1 }" @click="nextDay" />
    </div>
    <div class="week-progress-bar">
      <div class="progress" :style="{ width: ((displayedDayIndex+1)/diasSemana.length*100)+'%' }"></div>
    </div>
    <Swiper
      :initial-slide="currentDayIndex"
      :effect="'coverflow'"
      :slides-per-view="1"
      :centered-slides="true"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      class="swiper-container timetable-swiper"
    >
      <SwiperSlide v-for="(dia, index) in diasSemana" :key="dia">
        <div class="slide-content animate-fade-in">
          <ion-reorder-group
            :disabled="false"
            @ionItemReorder="event => onReorder(event, dia)"
            class="lessons-list"
            :key="dia"
          >
            <ion-item style="max-width: 300px;"
              v-for="(lesson, idx) in getTimetableForDay(dia)?.lessons || []"
              :key="lesson.id"
              class="lesson-card"
              :style="{ borderLeft: '6px solid ' + getSubjectColor(lesson.subjectId) }"
            >
              <ion-reorder slot="start" />
              <ion-label>
                <div class="lesson-time">{{ lesson.start }} - {{ lesson.end }}</div>
                <div class="lesson-main">
                  <span class="subject" :style="{ color: getSubjectColor(lesson.subjectId) }">
                    {{ getSubjectName(lesson.subjectId) }}
                  </span>
                  <span class="teacher">com {{ getTeacherName(lesson.teacherId) }}</span>
                </div>
                <div class="lesson-meta">
                  <ion-icon :icon="school" class="meta-icon" />
                  <span>{{ getRoomName(lesson.roomId) }}</span>
                  <ion-icon :icon="lesson.status === 'ia' ? sparkles : personCircle" class="meta-icon status-icon" :class="lesson.status" />
                  <span class="status-label">{{ lesson.status === 'ia' ? 'Sugestão IA' : 'Manual' }}</span>
                </div>
                <div v-if="lesson && 'conflict' in lesson && lesson.conflict" class="conflict-alert">
                  <ion-icon name="alert-circle" color="danger" />
                  <span>{{ lesson.conflict }}</span>
                </div>
              </ion-label>
            </ion-item>
            <ion-item v-if="!(getTimetableForDay(dia)?.lessons?.length)" class="no-lesson-card">
              <ion-label>
                <ion-icon name="calendar-clear-outline" class="no-lesson-icon" />
                Nenhuma aula programada.
              </ion-label>
            </ion-item>
          </ion-reorder-group>
        </div>
      </SwiperSlide>
    </Swiper>
    <!-- FAB para adicionar nova aula -->
    <ion-fab horizontal="end" >
      <ion-fab-button  @click="openAddModal(diasSemana[displayedDayIndex])">
        <ion-icon :icon="addCircle"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <!-- Modal de confirmação de alteração -->
    <ion-alert
      :is-open="showConfirmModal"
      header="Confirmar alteração"
      message="Deseja salvar a nova ordem das aulas?"
      :buttons="[
        { text: 'Desfazer', role: 'cancel', handler: undoReorder },
        { text: 'Salvar', role: 'confirm', handler: confirmReorder }
      ]"
      @didDismiss="showConfirmModal = false"
    />
    <!-- Modal de adicionar nova aula -->
    <ion-modal :is-open="showAddModal" @didDismiss="showAddModal = false">
      <div class="add-lesson-modal">
        <h3>Adicionar nova aula</h3>
        <ion-select label="Disciplina" v-model="addForm.subjectId" :interface="'popover'">
          <ion-select-option v-for="s in subjects" :key="s.id" :value="s.id">{{ s.name }}</ion-select-option>
        </ion-select>
        <ion-select label="Professor" v-model="addForm.teacherId" :interface="'popover'">
          <ion-select-option v-for="t in teachers" :key="t.id" :value="t.id">{{ t.name }}</ion-select-option>
        </ion-select>
        <ion-select label="Sala" v-model="addForm.roomId" :interface="'popover'">
          <ion-select-option v-for="r in rooms" :key="r.id" :value="r.id">{{ r.name }}</ion-select-option>
        </ion-select>
        <ion-input label="Início" v-model="addForm.start" placeholder="08:00" />
        <ion-input label="Fim" v-model="addForm.end" placeholder="08:50" />
        <div class="add-lesson-actions">
          <ion-button color="medium" fill="outline" @click="showAddModal = false">Cancelar</ion-button>
          <ion-button color="success" @click="addLesson" :disabled="!addForm.subjectId || !addForm.teacherId || !addForm.roomId || !addForm.start || !addForm.end">Adicionar</ion-button>
        </div>
      </div>
    </ion-modal>
  </ion-content>
  </ContentLayout>
</template>

<style scoped>
.timetable-content {
  --background: #f5f5f5;
}
.day-nav-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  gap: 8px;
}
.nav-arrow {
  font-size: 2.2rem;
  color: #388e3c;
  cursor: pointer;
  transition: transform 0.15s, color 0.2s;
  user-select: none;
}
.nav-arrow:active {
  transform: scale(1.2);
}
.nav-arrow.disabled {
  opacity: 0.3;
  pointer-events: none;
}
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.day-title-single {
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  color: #388e3c;
  letter-spacing: 1px;
  min-width: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.day-indicator {
  display: block;
  width: 8px;
  height: 8px;
  background: #388e3c;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 4px;
  animation: pop 0.3s;
}
@keyframes pop {
  0% { transform: scale(0.5);}
  80% { transform: scale(1.2);}
  100% { transform: scale(1);}
}
.week-progress-bar {
  width: 100%;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  margin-bottom: 8px;
  overflow: hidden;
}
.week-progress-bar .progress {
  height: 100%;
  background: #388e3c;
  transition: width 0.3s;
}
.timetable-swiper {
  width: 100vw;
  max-width: 500px;
  margin: 0 auto;
}
.slide-content {
  min-width: 100vw;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 32px;
}
.lessons-list {
  background: transparent;
}
.lesson-card {
  margin: 10px 0;
  border-radius: 12px;
  box-shadow: 0 2px 8px #388e3c11;
  background: #fff;
  transition: box-shadow 0.2s;
  min-height: 70px;
  align-items: flex-start;
}
.lesson-card:active {
  box-shadow: 0 4px 16px #388e3c22;
}
.teacher-avatar {
  width: 40px;
  height: 40px;
  font-size: 1.1rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 50%;
  margin-right: 8px;
}
.lesson-time {
  font-size: 0.95rem;
  color: #388e3c;
  font-weight: 500;
}
.lesson-main {
  font-size: 1.1rem;
  margin: 2px 0 4px 0;
}
.subject {
  font-weight: bold;
  margin-right: 4px;
}
.teacher {
  color: #757575;
  font-size: 0.98rem;
}
.lesson-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.92rem;
  margin-top: 2px;
  color: #607d8b;
}
.meta-icon {
  font-size: 1.1rem;
  vertical-align: middle;
}
.status-icon.ia {
  color: #7e57c2;
}
.status-icon.manual {
  color: #ff7043;
}
.status-label {
  font-size: 0.85rem;
  font-weight: 500;
}
.conflict-alert {
  color: #d32f2f;
  font-size: 0.92rem;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.no-lesson-card {
  background: #f1f8e9;
  border-radius: 12px;
  margin: 16px 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.no-lesson-icon {
  font-size: 1.5rem;
  color: #bdbdbd;
  margin-right: 8px;
}
.animate-fade-in {
  animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
}
@media (max-width: 600px) {
  .timetable-swiper, .slide-content {
    min-width: 100vw;
    max-width: 100vw;
    padding: 0 0.5rem;
  }
}
.reorder-toggle-btn {
  margin-bottom: 10px;
  --background: #e8f5e9;
  --color: #388e3c;
  font-weight: 500;
  letter-spacing: 0.5px;
}
.add-lesson-btn {
  margin-bottom: 10px;
  --background: #e3f2fd;
  --color: #1976d2;
  font-weight: 500;
  letter-spacing: 0.5px;
}
.add-lesson-modal {
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  max-width: 350px;
  margin: 2rem auto;
  box-shadow: 0 2px 16px #1976d211;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.add-lesson-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}
ion-reorder {
  color: #388e3c;
  font-size: 1.5rem;
  margin-right: 6px;
  cursor: grab;
}
ion-reorder[slot=start] {
  margin-right: 0.5rem;
}
ion-reorder-group[disabled] {
  opacity: 1;
}
ion-reorder-group:not([disabled]) .lesson-card {
  box-shadow: 0 0 0 2px #388e3c33;
  transition: box-shadow 0.2s;
}
ion-reorder-group:not([disabled]) .lesson-card:active {
  box-shadow: 0 0 0 3px #388e3c55;
}
.add-day-btn {
  margin: 0 4px;
  --background: transparent;
  --color: #388e3c;
  font-size: 1.7rem;
  min-width: 36px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>