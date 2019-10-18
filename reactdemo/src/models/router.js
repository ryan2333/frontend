import Home from '../components/Home';
import Users from '../components/Users';
import Main from '../components/User/Main';
import UserInfo from '../components/User/UserInfo';

let routes = [
  {
    path: "/",
    component: Home,
    like: true
  },
  {
    path: "/user",
    component: Users,
    routes: [
      {
        path: '/user/',
        like: true,
        component: Main
      },
      {
        path: '/user/info',
        component: UserInfo
      }
    ]
  }
]

export default routes;
