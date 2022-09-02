import { testData } from './TestData.helper'

interface IProps {
  test_name: 'ALL_USERS' | 'USER_ADD' | 'USER_DATA' | 'USER_EDIT' | 'USER_REMOVE'
  local_port: number
  router: string
  api_version: string
  id?: string
}

interface IResult {
  title: string
  method: TMethod | undefined
  url: string | undefined
  id: string | undefined
}

test('Провекра данных для GET-запроса к серверу', () => {
  const inputData: IProps = {
    test_name: 'ALL_USERS',
    local_port: 3000,
    router: 'test',
    api_version: 'v1',
    id: '10',
  }

  const outputData: IResult = {
    title: 'Получить всех пользователей',
    method: 'GET',
    url: `http://localhost:${inputData.local_port}/api/${inputData.api_version}/${inputData.router}`,
    id: inputData.id,
  }

  expect(testData(inputData)).toStrictEqual(outputData)
})
