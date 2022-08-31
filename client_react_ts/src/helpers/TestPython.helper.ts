import { testData } from './TestData.helper'

const API_NOW = process.env.API_PYTHON as string
const USE_PORT = Number(process.env.HOST_PYTHON)
const ROUTER_FAKE = process.env.ROUTER_FAKE as string
const ROUTER_USERS = process.env.ROUTER_USERS as string

/** Проверка сервера Python */
/* Фейковые данные */
export const testAllUsersFakePython = testData({
  test_name: 'ALL_USERS',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
})
export const testUserAddFakePython = testData({
  test_name: 'USER_ADD',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
})
export const testUserDataFakePython = testData({
  test_name: 'USER_DATA',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
  id: '6',
})
export const testUserEditFakePython = testData({
  test_name: 'USER_EDIT',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
  id: '6',
})
export const testUserRemoveFakePython = testData({
  test_name: 'USER_REMOVE',
  local_port: USE_PORT,
  router: ROUTER_FAKE,
  api_version: API_NOW,
  id: '6',
})

/* Данные из базы данных */
export const testAllUsersPython = testData({
  test_name: 'ALL_USERS',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
})
export const testUserAddPython = testData({
  test_name: 'USER_ADD',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
})
export const testUserDataPython = testData({
  test_name: 'USER_DATA',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
  id: '6',
})
export const testUserEditPython = testData({
  test_name: 'USER_EDIT',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
  id: '6',
})
export const testUserRemovePython = testData({
  test_name: 'USER_REMOVE',
  local_port: USE_PORT,
  router: ROUTER_USERS,
  api_version: API_NOW,
  id: '6',
})
