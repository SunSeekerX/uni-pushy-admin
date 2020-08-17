/**
 * @name Handle error
 * @author SunSeekerX
 * @time 2019-11-27 15:18:44
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-08-17 14:19:24
 */

import notification from 'ant-design-vue/es/notification'

/**
 * @name Handle api request exception
 * @description when api request fail, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function handleApiRequestException(error) {
  // notification['error']({
  //   message: '错误',
  //   description:
  //     ((error.response || {}).data || {}).message || '请求出现错误，请稍后再试',
  // })

  if (error?.response?.status === 401) {
    notification['warn']({
      message: '警告',
      description: '请重新登录',
    })
  } else {
    notification['error']({
      message: '错误',
      description: error.message || '请求出现错误，请稍后再试',
    })
  }
}

/**
 * @name Handle WebSocket exception
 * @description when WebSocket exception, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function handleWebSocketException(e) {
  console.error(e)
}

/**
 * @name Handle application exception
 * @description when Application exception, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function handleApplicationException(e) {
  console.error(e)
}

/**
 * @name Hanle when request result success no true
 * @param { String } msg tips message
 */
function handleRequestFail(msg) {
  notification.warn({
    message: '警告',
    description: msg,
  })
}

export {
  // Api请求出错
  handleApiRequestException,
  // WebSocket错误
  handleWebSocketException,
  // 程序出错
  handleApplicationException,
  // 请求失败
  handleRequestFail,
}
