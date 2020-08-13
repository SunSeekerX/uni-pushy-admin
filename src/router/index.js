/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-07-27 09:56:07
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-08-13 19:29:14
 */

import Vue from 'vue'
import Router from 'vue-router'

import { UserLayout, BasicLayout } from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view'),
}

/**
 * @name 异步添加路由
 */
export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/dashboard',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/dashboard',
        component: RouteView,
        meta: {
          title: 'menu.dashboard',
          keepAlive: true,
          icon: 'appstore',
          permission: ['dashboard'],
        },
        children: [
          {
            path: '/dashboard/dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/dashboard'),
            meta: {
              title: 'Dashboard',
              keepAlive: false,
              permission: ['dashboard'],
            },
          },
        ],
      },

      // project
      {
        path: '/project',
        name: 'project',
        component: RouteView,
        redirect: '/project/projects',
        meta: { title: '项目', icon: 'table', permission: ['project'] },
        children: [
          {
            path: '/project/projects',
            name: 'BasicProject',
            component: () => import('@/views/project/Projects'),
            meta: {
              title: '所有项目',
              keepAlive: true,
              permission: ['project'],
            },
          },
        ],
      },

      // source
      {
        path: '/source',
        name: 'source',
        hidden: true,
        component: RouteView,
        redirect: '/source/sources',
        meta: { title: '资源', icon: 'table', permission: ['source'] },
        children: [
          {
            path: '/source/sources/:id([1-9]\\d*)?',
            name: 'BasicSource',
            component: () => import('@/views/source/Sources'),
            meta: {
              title: '所有资源',
              keepAlive: true,
              permission: ['source'],
            },
          },
        ],
      },
    ],
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

/**
 * @name 固定路由未登录即可使用
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register'),
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult'),
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined,
      },
    ],
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
  },
]

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    // mode: 'history',
    routes: constantRouterMap,
  })

const router = createRouter()
// router.addRoutes(asyncRouterMap)

export function resetRouter() {
  const newRouter = createRouter()
  // reset router
  router.matcher = newRouter.matcher
}

export default router
