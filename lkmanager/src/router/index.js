import Home from "../pages/home/Home"
import User from "../pages/user/User";
import Mine from '../pages/mine/Mine';
import Rotation from '../pages/rotation/Rotation'
import CourseAdd from '../pages/course/CourseAdd';
import CourseCategory from '../pages/course/CourseCategory';
import CourseList from '../pages/course/CourseList';
import CourseTopic from '../pages/course/CourseTopic';

let routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/rotation',
    component: Rotation
  },
  {
    path: '/coursetopic',
    component: CourseTopic
  },
  {
    path: '/courselist',
    component: CourseList
  },
  {
    path: '/coursecategory',
    component: CourseCategory
  },
  {
    path: '/courseadd',
    component: CourseAdd
  },
]

export default routes