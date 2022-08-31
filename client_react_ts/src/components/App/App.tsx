import React from 'react'
import './App.css'

const newUser = {
  name: 'Oleg',
  age: 55,
  city: 'Xeron',
}

function App() {
  /** Данные для сервера NodeJS  */
  /* Фейковые данные */
  const allUserFakeNode = testAllUsersFakeNode
  const userAddFakeNode = testUserAddFakeNode
  const userDataFakeNode = testUserDataFakeNode
  const userEditFakeNode = testUserEditFakeNode
  const userRemoveFakeNode = testUserRemoveFakeNode
  /* Данные из базы данных */
  const allUserNode = testAllUsersNode
  const userAddNode = testUserAddNode
  const userDataNode = testUserDataNode
  const userEditNode = testUserEditNode
  const userRemoveNode = testUserRemoveNode

  /** Данные для сервера Python  */
  /* Фейковые данные */
  const allUserFakePython = testAllUsersFakePython
  const userAddFakePython = testUserAddFakePython
  const userDataFakePython = testUserDataFakePython
  const userEditFakePython = testUserEditFakePython
  const userRemoveFakePython = testUserRemoveFakePython
  /* Данные из базы данных */
  const allUserPython = testAllUsersPython
  const userAddPython = testUserAddPython
  const userDataPython = testUserDataPython
  const userEditPython = testUserEditPython
  const userRemovePython = testUserRemovePython

  /** Данные для сервера PHP  */
  /* Фейковые данные */
  const allUserFakePhp = testAllUsersFakePhp
  const userAddFakePhp = testUserAddFakePhp
  const userDataFakePhp = testUserDataFakePhp
  const userEditFakePhp = testUserEditFakePhp
  const userRemoveFakePhp = testUserRemoveFakePhp
  /* Данные из базы данных */
  const allUserPhp = testAllUsersPhp
  const userAddPhp = testUserAddPhp
  const userDataPhp = testUserDataPhp
  const userEditPhp = testUserEditPhp
  const userRemovePhp = testUserRemovePhp

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
                <Tester name={allUserFakeNode.title} method={allUserFakeNode.method} url={allUserFakeNode.url} />
                <Tester
                  name={userAddFakeNode.title}
                  method={userAddFakeNode.method}
                  url={userAddFakeNode.url}
                  data={newUser}
                />
                <Tester name={userDataFakeNode.title} method={userDataFakeNode.method} url={userDataFakeNode.url} />
                <Tester
                  name={userEditFakeNode.title}
                  method={userEditFakeNode.method}
                  url={userEditFakeNode.url}
                  data={{ age: 35 }}
                />
                <Tester
                  name={userRemoveFakeNode.title}
                  method={userRemoveFakeNode.method}
                  url={userRemoveFakeNode.url}
                />
              </div>
              <div className='container-item'>
                <Tester name={allUserNode.title} method={allUserNode.method} url={allUserNode.url} />
                <Tester name={userAddNode.title} method={userAddNode.method} url={userAddNode.url} data={newUser} />
                <Tester name={userDataNode.title} method={userDataNode.method} url={userDataNode.url} />
                <Tester
                  name={userEditNode.title}
                  method={userEditNode.method}
                  url={userEditNode.url}
                  data={{ age: 35 }}
                />
                <Tester name={userRemoveNode.title} method={userRemoveNode.method} url={userRemoveNode.url} />
              </div>
            </div>
          </div>
          <div className='container'>
            <h2 className='container-head'>сервер Python</h2>
            <div className='container-body'>
              <div className='container-item'>
                <Tester name={allUserFakePython.title} method={allUserFakePython.method} url={allUserFakePython.url} />
                <Tester
                  name={userAddFakePython.title}
                  method={userAddFakePython.method}
                  url={userAddFakePython.url}
                  data={newUser}
                />
                <Tester
                  name={userDataFakePython.title}
                  method={userDataFakePython.method}
                  url={userDataFakePython.url}
                />
                <Tester
                  name={userEditFakePython.title}
                  method={userEditFakePython.method}
                  url={userEditFakePython.url}
                  data={{ age: 35 }}
                />
                <Tester
                  name={userRemoveFakePython.title}
                  method={userRemoveFakePython.method}
                  url={userRemoveFakePython.url}
                />
              </div>
              <div className='container-item'>
                <Tester name={allUserPython.title} method={allUserPython.method} url={allUserPython.url} />
                <Tester
                  name={userAddPython.title}
                  method={userAddPython.method}
                  url={userAddPython.url}
                  data={newUser}
                />
                <Tester name={userDataPython.title} method={userDataPython.method} url={userDataPython.url} />
                <Tester
                  name={userEditPython.title}
                  method={userEditPython.method}
                  url={userEditPython.url}
                  data={{ age: 35 }}
                />
                <Tester name={userRemovePython.title} method={userRemovePython.method} url={userRemovePython.url} />
              </div>
            </div>
          </div>
          <div className='container'>
            <h2 className='container-head'>сервер PHP</h2>
            <div className='container-body'>
              <div className='container-item'>
                <Tester name={allUserFakePhp.title} method={allUserFakePhp.method} url={allUserFakePhp.url} />
                <Tester
                  name={userAddFakePhp.title}
                  method={userAddFakePhp.method}
                  url={userAddFakePhp.url}
                  data={newUser}
                />
                <Tester name={userDataFakePhp.title} method={userDataFakePhp.method} url={userDataFakePhp.url} />
                <Tester
                  name={userEditFakePhp.title}
                  method={userEditFakePhp.method}
                  url={userEditFakePhp.url}
                  data={{ age: 35 }}
                />
                <Tester
                  name={userRemoveFakePhp.title}
                  method={userRemoveFakePhp.method}
                  url={userRemoveFakePhp.url}
                  Php
                />
              </div>
              <div className='container-item'>
                <Tester name={allUserPhp.title} method={allUserPhp.method} url={allUserPhp.url} />
                <Tester name={userAddPhp.title} method={userAddPhp.method} url={userAddPhp.url} data={newUser} />
                <Tester name={userDataPhp.title} method={userDataPhp.method} url={userDataPhp.url} />
                <Tester name={userEditPhp.title} method={userEditPhp.method} url={userEditPhp.url} data={{ age: 35 }} />
                <Tester name={userRemovePhp.title} method={userRemovePhp.method} url={userRemovePhp.url} />
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
