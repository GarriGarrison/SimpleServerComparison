import { testData } from './TestData.helper'

const API_NOW = process.env.API_PHP as string
const USE_PORT = Number(process.env.HOST_PHP)
const ROUTER_FAKE = process.env.ROUTER_FAKE as string
const ROUTER_USERS = process.env.ROUTER_USERS as string

/** Проверка сервера PHP */
/* Фейковые данные */
export const testAllUsersFakePhp = testData({
  test_name: 'ALL_USERS',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
})
export const testUserAddFakePhp = testData({
  test_name: 'USER_ADD',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
})
export const testUserDataFakePhp = testData({
  test_name: 'USER_DATA',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
  id: '6',
})
export const testUserEditFakePhp = testData({
  test_name: 'USER_EDIT',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
  id: '6',
})
export const testUserRemoveFakePhp = testData({
  test_name: 'USER_REMOVE',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
  id: '6',
})

/* Данные из базы данных */
export const testAllUsersPhp = testData({
  test_name: 'ALL_USERS',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
})
export const testUserAddPhp = testData({
  test_name: 'USER_ADD',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
})
export const testUserDataPhp = testData({
  test_name: 'USER_DATA',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
  id: '6',
})
export const testUserEditPhp = testData({
  test_name: 'USER_EDIT',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
  id: '6',
})
export const testUserRemovePhp = testData({
  test_name: 'USER_REMOVE',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
  id: '6',
})
