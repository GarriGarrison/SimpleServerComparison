/**
 * Получить данные для теста
 * @param {string} test_name
 * @param {number} local_port
 * @param {string} router
 * @param {string} api_version
 * @param {string} id
 * @returns {object}
 */
export const testData = ({ test_name, local_port, router, api_version = 'v1', id }) => {
  const result = {
    title: undefined,
    method: undefined,
    url: undefined,
    id,
  }

  switch (test_name) {
    case 'ALL_USERS':
      result.title = 'Получить всех пользователей'
      result.method = 'GET'
      result.url = `http://localhost:${local_port}/api/${api_version}/${router}`
      break

    case 'USER_ADD':
      result.title = 'Добавить пользователя'
      result.method = 'POST'
      result.url = `http://localhost:${local_port}/api/${api_version}/${router}`
      break

    case 'USER_DATA':
      result.title = 'Получить пользователя'
      result.method = 'GET'
      result.url = `http://localhost:${local_port}/api/${api_version}/${router}/${id}`
      break

    case 'USER_EDIT':
      result.title = 'Редактировать данные пользователя'
      result.method = 'PATCH'
      result.url = `http://localhost:${local_port}/api/${api_version}/${router}/${id}`
      break

    case 'USER_REMOVE':
      result.title = 'Удалить пользователя'
      result.method = 'DELETE'
      result.url = `http://localhost:${local_port}/api/${api_version}/${router}/${id}`
      break

    default:
      break
  }
  return result
}
