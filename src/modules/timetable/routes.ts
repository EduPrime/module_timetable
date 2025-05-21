import { flame, flameOutline } from 'ionicons/icons';
import Timetable from './views/Timetable.vue';

const routes = [
  {
    path: '/timetable',
    name: 'Timetable',
    component: Timetable,
    meta: {
      moduleName: 'Timetable',
      moduleIcon: flameOutline,
      icon: flame,
      name: 'Timetable',
      order: 4,
      requiredRole: ['public', 'admin'],
    },
  },
];

export default routes;
