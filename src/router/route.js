let profileMenu = {
    name: '个人信息',
    path: '/site/profile'
}

let systemMenu = {
  name: '系统管理',
  path: '/system-manage',
  redirect: '/system-manage/sys-user',
  children: [
    {
      path: '/system-manage/role',
      name: '角色管理'
    },
    {
      path: '/system-manage/sys-user',
      name: '用户管理'
    },
    {
      path: '/system-manage/log',
      name: '日志管理'
    }
  ]
}

const routes = [
  profileMenu,
  systemMenu
]
export default routes
