import {
  Home as HomeIcon,
  ViewTimeline as ViewTimelineIcon,
  Contacts as ContactsIcon
} from '@mui/icons-material';

import { UIHome } from '../pages/app/UIHome';

import { Route } from '../types/Route';

const routes: Array<Route> = [
  {
    key: 'router-home',
    title: 'Home',
    description: 'Home',
    component: UIHome,
    path: '/bdigital',
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true
  },
  {
    key: 'router-showreel',
    title: 'Showreel',
    description: 'Showreel',
    path: '/bdigital/showreel',
    isEnabled: true,
    icon: ViewTimelineIcon
  },
  {
    key: 'router-contact',
    title: 'Contact',
    description: 'Contact',
    path: '/bdigital/contact',
    isEnabled: true,
    icon: ContactsIcon
  }
];

export default routes;
