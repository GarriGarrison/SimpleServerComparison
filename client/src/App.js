import './App.css'
import Tester from './components/Tester/Tester'

const HOST_NODE = process.env.HOST_NODE

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
            {/* <div className='tester'>
              <b>GET</b> получить всех пользователей <button>ЗАПРОС</button> Результат: неизвестно
            </div> */}
            <Tester name='Получить всех пользователей' method='GET' url='http://localhost:5001/api/v1/fake' />
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
