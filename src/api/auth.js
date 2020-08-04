/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-07-27 12:17:08
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-08-04 15:17:56
 */

import { request } from '@/utils/request/index'

export default {
  // 注册
  register({ username, password, email, nickname }) {
    return request({
      url: '/api/user',
      method: 'POST',
      data: { username, password, email, nickname },
    })
  },

  // 登录
  login({ username, password, imgCaptcha, loginCaptchaKey }) {
    return request({
      url: '/api/user/login',
      method: 'POST',
      data: { username, password, imgCaptcha, loginCaptchaKey },
    })
  },
}
