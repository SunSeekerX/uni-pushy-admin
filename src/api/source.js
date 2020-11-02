/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-07-28 09:52:25
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-11-02 17:08:27
 */

import { request } from '@/utils/request/index'

// 资源列表
export function sources({ id, type, pageNum, pageSize, sortKey, order }) {
  return request({
    url: '/api/source',
    method: 'GET',
    params: {
      projectId: id,
      type,
      pageNum,
      pageSize,
      sortKey,
      order,
    },
  })
}

// 新建资源
export function createSource({
  projectId,
  version,
  versionCode,
  nativeVersionCode,
  url,
  updateType,
  status,
  type,
  changelog,
  remark,
}) {
  return request({
    url: '/api/source',
    method: 'POST',
    data: {
      projectId,
      version,
      versionCode,
      nativeVersionCode,
      url,
      updateType,
      status,
      type,
      changelog,
      remark,
    },
  })
}

// 修改资源
export function updateSource({
  id,
  version,
  versionCode,
  nativeVersionCode,
  url,
  updateType,
  changelog,
  remark,
  type,
  status,
}) {
  return request({
    url: '/api/source',
    method: 'PUT',
    data: {
      id,
      version,
      versionCode,
      nativeVersionCode,
      url,
      updateType,
      changelog,
      remark,
      type,
      status,
    },
  })
}

// 删除资源
export function deleteSource({ id }) {
  return request({
    url: '/api/source',
    method: 'DELETE',
    data: {
      // 资源id
      id,
    },
  })
}
