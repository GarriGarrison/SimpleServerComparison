import './App.css'
import Tester from '../Tester'

const HOST_NODE = process.env.HOST_NODE

const newUser = {
  name: 'Oleg',
  age: 55,
  city: 'Xeron',
}

function App() {
  console.log(HOST_NODE)
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Тестирование API серверов</h1>
      </header>

      <main className='App-main'>
        <div className='content'>
          <div className='container'>
            <h2 className='container-head'>сервер NodeJS</h2>
            <div className='container-body'>
              <div className='container-item'>
                <Tester name='Получить всех пользователей' method='GET' url='http://localhost:5001/api/v1/fake' />
                <Tester
                  name='Добавить пользователя'
                  method='POST'
                  url='http://localhost:5001/api/v1/fake'
                  data={newUser}
                />
                <Tester name='Получить пользователя' method='GET' url='http://localhost:5001/api/v1/fake/6' />
                <Tester
                  name='Редактировать данные пользователя'
                  method='PUT'
                  url='http://localhost:5001/api/v1/fake/6'
                  data={{ age: 35 }}
                />
                <Tester name='Удалить пользователя' method='DELETE' url='http://localhost:5001/api/v1/fake/6' />
                <Tester name='Получить всех пользователей' method='GET' url='http://localhost:5001/api/v1/users' />
                <Tester
                  name='Добавить пользователя'
                  method='POST'
                  url='http://localhost:5001/api/v1/users'
                  data={newUser}
                />
                <Tester name='Получить пользователя' method='GET' url='http://localhost:5001/api/v1/users/6' />
                <Tester
                  name='Редактировать данные пользователя'
                  method='PUT'
                  url='http://localhost:5001/api/v1/users/6'
                  data={{ age: 35 }}
                />
                <Tester name='Удалить пользователя' method='DELETE' url='http://localhost:5001/api/v1/users/6' />
              </div>
            </div>
          </div>
          <div className='container'>
            <h2 className='container-head'>сервер Python</h2>
            <div className='container-body'>
              <div className='container-item'>
                <Tester name='Получить всех пользователей' method='GET' url='http://localhost:5002/api/v1/fake' />
                <Tester
                  name='Добавить пользователя'
                  method='POST'
                  url='http://localhost:5001/api/v1/fake'
                  data={newUser}
                />
                <Tester name='Получить пользователя' method='GET' url='http://localhost:5002/api/v1/fake/6' />
                <Tester
                  name='Редактировать данные пользователя'
                  method='PUT'
                  url='http://localhost:5001/api/v1/fake/6'
                  data={{ age: 35 }}
                />
                <Tester name='Удалить пользователя' method='DELETE' url='http://localhost:5002/api/v1/fake/6' />
                <Tester name='Получить всех пользователей' method='GET' url='http://localhost:5002/api/v1/users' />
                <Tester
                  name='Добавить пользователя'
                  method='POST'
                  url='http://localhost:5001/api/v1/users'
                  data={newUser}
                />
                <Tester name='Получить пользователя' method='GET' url='http://localhost:5002/api/v1/users/6' />
                <Tester
                  name='Редактировать данные пользователя'
                  method='PUT'
                  url='http://localhost:5002/api/v1/users/6'
                  data={{ age: 35 }}
                />
                <Tester name='Удалить пользователя' method='DELETE' url='http://localhost:5002/api/v1/users/6' />
              </div>
            </div>
          </div>
          <div className='container'>
            <h2 className='container-head'>сервер PHP</h2>
            <div className='container-body'>
              <div className='container-item'>
                <Tester name='Получить всех пользователей' method='GET' url='http://localhost:5003/api/v1/fake' />
                <Tester
                  name='Добавить пользователя'
                  method='POST'
                  url='http://localhost:5001/api/v1/fake'
                  data={newUser}
                />
                <Tester name='Получить пользователя' method='GET' url='http://localhost:5003/api/v1/fake/6' />
                <Tester
                  name='Редактировать данные пользователя'
                  method='PUT'
                  url='http://localhost:5001/api/v1/fake/6'
                  data={{ age: 35 }}
                />
                <Tester name='Удалить пользователя' method='DELETE' url='http://localhost:5003/api/v1/fake/6' />
                <Tester name='Получить всех пользователей' method='GET' url='http://localhost:5003/api/v1/users' />
                <Tester
                  name='Добавить пользователя'
                  method='POST'
                  url='http://localhost:5003/api/v1/users'
                  data={newUser}
                />
                <Tester name='Получить пользователя' method='GET' url='http://localhost:5001/api/v1/users/6' />
                <Tester
                  name='Редактировать данные пользователя'
                  method='PUT'
                  url='http://localhost:5001/api/v1/users/6'
                  data={{ age: 35 }}
                />
                <Tester name='Удалить пользователя' method='DELETE' url='http://localhost:5001/api/v1/users/6' />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className='App-footer'>
        <hr />
        <span>© Garrison, 2022 г.</span>
      </footer>
    </div>
  )
}

export default App
