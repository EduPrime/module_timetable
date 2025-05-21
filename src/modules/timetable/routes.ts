import type { CustomRouteRecordRaw } from '@/router/RouterType'
import { alertCircleOutline, bulbOutline, calendarOutline, documentTextOutline, flame, flameOutline, listOutline, optionsOutline, peopleOutline, settingsOutline, swapHorizontal } from 'ionicons/icons'
import Timetable from './views/Timetable.vue'

// As views abaixo devem ser criadas futuramente
const SuggestionIA = () => import('./views/SuggestionIA.vue')
const SwapRequest = () => import('./views/SwapRequest.vue')
const Negotiation = () => import('./views/Negotiation.vue')
const ConflictResolution = () => import('./views/ConflictResolution.vue')
const KanbanView = () => import('./views/KanbanView.vue')
const CalendarView = () => import('./views/CalendarView.vue')
const BlockView = () => import('./views/BlockView.vue')
const HistoryReports = () => import('./views/HistoryReports.vue')
const Preferences = () => import('./views/Preferences.vue')
const AdminPanel = () => import('./views/AdminPanel.vue')

const routes: Array<CustomRouteRecordRaw> = [
  {
    path: '/timetable',
    name: 'Timetable',
    component: Timetable,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: flameOutline,
      icon: flame,
      name: 'Montar/Editar Horário',
      order: 1,
      requiredRole: ['PUBLIC', 'ADMIN', 'GESTORESCOLAR'],
    },
  },
  {
    path: '/timetable/suggestion',
    name: 'SuggestionIA',
    component: SuggestionIA,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: bulbOutline,
      icon: bulbOutline,
      name: 'Sugestão Automática (IA)',
      order: 2,
      requiredRole: ['ADMIN', 'GESTORESCOLAR'],
    },
  },
  {
    path: '/timetable/swap',
    name: 'SwapRequest',
    component: SwapRequest,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: swapHorizontal,
      icon: swapHorizontal,
      name: 'Solicitar Troca de Aula',
      order: 3,
      requiredRole: ['PROFESSOR', 'ADMIN', 'GESTORESCOLAR'],
    },
  },
  {
    path: '/timetable/negotiation',
    name: 'Negotiation',
    component: Negotiation,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: optionsOutline,
      icon: optionsOutline,
      name: 'Negociação de Trocas (IA)',
      order: 4,
      requiredRole: ['PROFESSOR', 'ADMIN', 'GESTORESCOLAR'],
    },
  },
  {
    path: '/timetable/conflicts',
    name: 'ConflictResolution',
    component: ConflictResolution,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: alertCircleOutline,
      icon: alertCircleOutline,
      name: 'Resolução de Conflitos',
      order: 5,
      requiredRole: ['ADMIN', 'GESTORESCOLAR'],
    },
  },
  {
    path: '/timetable/kanban',
    name: 'KanbanView',
    component: KanbanView,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: listOutline,
      icon: listOutline,
      name: 'Visualização Kanban',
      order: 6,
      requiredRole: ['PUBLIC', 'ADMIN', 'PROFESSOR', 'GESTORESCOLAR'],
    },
  },
  {
    path: '/timetable/calendar',
    name: 'CalendarView',
    component: CalendarView,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: calendarOutline,
      icon: calendarOutline,
      name: 'Visualização Calendário',
      order: 7,
      requiredRole: ['PUBLIC', 'ADMIN', 'PROFESSOR', 'GESTORESCOLAR'],
    },
  },
  {
    path: '/timetable/blocks',
    name: 'BlockView',
    component: BlockView,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: listOutline,
      icon: listOutline,
      name: 'Visualização Blocos',
      order: 8,
      requiredRole: ['PUBLIC', 'ADMIN', 'PROFESSOR', 'GESTORESCOLAR'],
    },
  },
  {
    path: '/timetable/history',
    name: 'HistoryReports',
    component: HistoryReports,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: documentTextOutline,
      icon: documentTextOutline,
      name: 'Histórico/Relatórios',
      order: 9,
      requiredRole: ['ADMIN', 'GESTORESCOLAR'],
    },
  },
  {
    path: '/timetable/preferences',
    name: 'Preferences',
    component: Preferences,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: settingsOutline,
      icon: settingsOutline,
      name: 'Configurações/Preferências',
      order: 10,
      requiredRole: ['ADMIN', 'GESTORESCOLAR'],
    },
  },
  {
    path: '/timetable/admin',
    name: 'AdminPanel',
    component: AdminPanel,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: peopleOutline,
      icon: peopleOutline,
      name: 'Painel Administrativo',
      order: 11,
      requiredRole: ['ADMIN', 'GESTORESCOLAR'],
    },
  },
]

export default routes
