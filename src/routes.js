
import Login from 'Components/Login';
import Home from 'Components/Home';

// defining path for the components
let routesList = [
  { path: '*', component: Login, exactPath: true },
  { path: '/home', component: Home, exactPath: true },
  { path: '/login', component: Login, exactPath: true }
]

export default routesList
