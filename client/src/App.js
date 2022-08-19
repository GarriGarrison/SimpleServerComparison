import './App.css'
import Tester from './components/Tester/Tester'

const HOST_NODE = process.env.HOST_NODE

const newUser = {
  name: "Oleg",
  age: 55,
  city: "Xeron"
}

function App() {
  console.log(HOST_NODE);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Тестирование API серверов</h1>
      </header>

      <main>
        <div className='container'>
          <h2 className='container-head'>Тестирование NodeJS сервера</h2>
          <div className='container-body'>
            <Tester name='Получить всех пользователей' method='GET' url='http://localhost:5001/api/v1/fake' />
            <Tester name='Добавить пользователя' method='POST' url='http://localhost:5001/api/v1/fake' data={newUser} />
            <Tester name='Получить однго пользователя' method='GET' url='http://localhost:5001/api/v1/fake/6' />
            <Tester
              name='Редактировать данные одного пользователя'
              method='PUT'
              url='http://localhost:5001/api/v1/fake/6'
              data={{age: 35}}
            />
            <Tester name='Удалить одного пользователя' method='DELETE' url='http://localhost:5001/api/v1/fake/6' />
          </div>
        </div>

        <div className='container'></div>

        <div className='container'></div>
      </main>

      <footer className='App-footer'>
        <hr />
        <span>© Garrison, 2022 г.</span>
      </footer>
    </div>
  )
}

export default App
