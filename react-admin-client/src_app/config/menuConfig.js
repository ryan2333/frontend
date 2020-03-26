const menuList = [
  {
    title: '首页',
    key: '/home',
    icon: 'home',
    isPublic: true
  },
  {
    title: '商品',
    key: '/products',
    icon: 'appstore',
    children: [
      {
        title: '分类管理',
        key: '/category',
        icon: 'unordered-list'
      },
      {
        title: '商品管理',
        key: '/product',
        icon: 'tool'
      }
    ]
  },
  {
    title: '用户管理',
    key: '/user',
    icon: 'user'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'lock'
  },
  {
    title: '图表管理',
    key: '/charts',
    icon: 'pie-chart',
    children: [
      {
        title: '柱状图',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        title: '饼状图',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
      {
        title: '线形图',
        key: '/charts/line',
        icon: 'line-chart'
      }
    ]
  }
]

export default menuList