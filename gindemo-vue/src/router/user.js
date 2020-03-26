
const userRouters = [
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/Register.vue'), /** 惰性加载组件，不是一次性加载 */
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue'), /** 惰性加载组件，不是一次性加载 */
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { auth: true },
    component: () => import('@/views/profile/Profile.vue'), /** 惰性加载组件，不是一次性加载 */
  },
];

export default userRouters;
