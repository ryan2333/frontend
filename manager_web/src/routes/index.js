import Login from "../pages/login";
import Index from "../pages/dashboard";
import Lists from "../pages/admin/passwords/lists";
import Edit from "../pages/admin/passwords/edit";
import PageNotFound from "../pages/pageNotFound";

export const mainRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: PageNotFound
  }
]

export const adminRoutes = [
  {
    path: '/admin/dashboard',
    component: Index,
    isShow: true,
    title: 'Dashboard',
    icon: 'dashboard'
  },
  {
    path: '/admin/passwords',
    component: Lists,
    exact: true,
    isShow: true,
    title: '密码管理',
    icon: 'lock'
  },
  {
    path: '/admin/passwords/edit/:id?',
    component: Edit
  }
]