let systemMenu = {
  name: '系统管理',
  path: '/system-manage',
  redirect: '/system-manage/sys-user',
  children: [
    {
      path: 'role',
      name: '角色管理'
    },
    {
      path: 'sys-user',
      name: '用户管理'
    },
    {
      path: 'log',
      name: '日志管理'
    }
  ]
}

const routes = [
  systemMenu
]
export default routes
