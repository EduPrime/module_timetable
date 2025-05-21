import type { App } from 'vue'
import routes from './routes'
import TimetableService from './services/TimetableService'
import Timetable from './components/Timetable.vue'

export default {
  install(app: App) {
    app.component('Timetable', Timetable)
    app.config.globalProperties.$timetableService = new TimetableService()
  },
  routes,
}
