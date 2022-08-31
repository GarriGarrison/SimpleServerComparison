import { testData } from './TestData.helper'

const API_NOW = process.env.API_NODE as string
const USE_PORT = Number(process.env.HOST_NODE)
const ROUTER_FAKE = process.env.ROUTER_FAKE as string
const ROUTER_USERS = process.env.ROUTER_USERS as string

/** Проверка сервера NodeJS */
/* Фейковые данные */
export const testAllUsersFakeNode = testData({
  test_name: 'ALL_USERS',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
})
export const testUserAddFakeNode = testData({
  test_name: 'USER_ADD',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
})
export const testUserDataFakeNode = testData({
  test_name: 'USER_DATA',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
  id: '6',
})
export const testUserEditFakeNode = testData({
  test_name: 'USER_EDIT',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
  id: '6',
})
export const testUserRemoveFakeNode = testData({
  test_name: 'USER_REMOVE',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
  id: '6',
})

/* Данные из базы данных */
export const testAllUsersNode = testData({
  test_name: 'ALL_USERS',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
})
export const testUserAddNode = testData({
  test_name: 'USER_ADD',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
})
export const testUserDataNode = testData({
  test_name: 'USER_DATA',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
  id: '6',
})
export const testUserEditNode = testData({
  test_name: 'USER_EDIT',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
  id: '6',
})
export const testUserRemoveNode = testData({
  test_name: 'USER_REMOVE',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
  id: '6',
})
