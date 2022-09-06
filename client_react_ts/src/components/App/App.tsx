import React from 'react'
import './App.css'
import Tester from '../Tester'
import {
  testAllUsersFakeNode,
  testUserAddFakeNode,
  testUserDataFakeNode,
  testUserEditFakeNode,
  testUserRemoveFakeNode,
  testAllUsersNode,
  testUserAddNode,
  testUserDataNode,
  testUserEditNode,
  testUserRemoveNode,
} from '../../helpers/TestNode.helper'
import {
  testAllUsersFakePython,
  testUserAddFakePython,
  testUserDataFakePython,
  testUserEditFakePython,
  testUserRemoveFakePython,
  testAllUsersPython,
  testUserAddPython,
  testUserDataPython,
  testUserEditPython,
  testUserRemovePython,
} from '../../helpers/TestPython.helper'
import {
  testAllUsersFakePhp,
  testUserAddFakePhp,
  testUserDataFakePhp,
  testUserEditFakePhp,
  testUserRemoveFakePhp,
  testAllUsersPhp,
  testUserAddPhp,
  testUserDataPhp,
  testUserEditPhp,
  testUserRemovePhp,
} from '../../helpers/TestPhp.helper'

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
  
  console.log('allUserFakeNode', allUserFakeNode)
  

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
                <Tester
                  name={allUserFakeNode.title as string}
                  method={allUserFakeNode.method as TMethod}
                  url={allUserFakeNode.url as string}
                />
                <Tester
                  name={userAddFakeNode.title as string}
                  method={userAddFakeNode.method as TMethod}
                  url={userAddFakeNode.url as string}
                  data={newUser}
                />
                <Tester
                  name={userDataFakeNode.title as string}
                  method={userDataFakeNode.method as TMethod}
                  url={userDataFakeNode.url as string}
                />
                <Tester
                  name={userEditFakeNode.title as string}
                  method={userEditFakeNode.method as TMethod}
                  url={userEditFakeNode.url as string}
                  data={{ age: 35 }}
                />
                <Tester
                  name={userRemoveFakeNode.title as string}
                  method={userRemoveFakeNode.method as TMethod}
                  url={userRemoveFakeNode.url as string}
                />
              </div>
              <div className='container-item'>
                <Tester
                  name={allUserNode.title as string}
                  method={allUserNode.method as TMethod}
                  url={allUserNode.url as string}
                />
                <Tester
                  name={userAddNode.title as string}
                  method={userAddNode.method as TMethod}
                  url={userAddNode.url as string}
                  data={newUser}
                />
                <Tester
                  name={userDataNode.title as string}
                  method={userDataNode.method as TMethod}
                  url={userDataNode.url as string}
                />
                <Tester
                  name={userEditNode.title as string}
                  method={userEditNode.method as TMethod}
                  url={userEditNode.url as string}
                  data={{ age: 35 }}
                />
                <Tester
                  name={userRemoveNode.title as string}
                  method={userRemoveNode.method as TMethod}
                  url={userRemoveNode.url as string}
                />
              </div>
            </div>
          </div>
          <div className='container'>
            <h2 className='container-head'>сервер Python</h2>
            <div className='container-body'>
              <div className='container-item'>
                <Tester
                  name={allUserFakePython.title as string}
                  method={allUserFakePython.method as TMethod}
                  url={allUserFakePython.url as string}
                />
                <Tester
                  name={userAddFakePython.title as string}
                  method={userAddFakePython.method as TMethod}
                  url={userAddFakePython.url as string}
                  data={newUser}
                />
                <Tester
                  name={userDataFakePython.title as string}
                  method={userDataFakePython.method as TMethod}
                  url={userDataFakePython.url as string}
                />
                <Tester
                  name={userEditFakePython.title as string}
                  method={userEditFakePython.method as TMethod}
                  url={userEditFakePython.url as string}
                  data={{ age: 35 }}
                />
                <Tester
                  name={userRemoveFakePython.title as string}
                  method={userRemoveFakePython.method as TMethod}
                  url={userRemoveFakePython.url as string}
                />
              </div>
              <div className='container-item'>
                <Tester
                  name={allUserPython.title as string}
                  method={allUserPython.method as TMethod}
                  url={allUserPython.url as string}
                />
                <Tester
                  name={userAddPython.title as string}
                  method={userAddPython.method as TMethod}
                  url={userAddPython.url as string}
                  data={newUser}
                />
                <Tester
                  name={userDataPython.title as string}
                  method={userDataPython.method as TMethod}
                  url={userDataPython.url as string}
                />
                <Tester
                  name={userEditPython.title as string}
                  method={userEditPython.method as TMethod}
                  url={userEditPython.url as string}
                  data={{ age: 35 }}
                />
                <Tester
                  name={userRemovePython.title as string}
                  method={userRemovePython.method as TMethod}
                  url={userRemovePython.url as string}
                />
              </div>
            </div>
          </div>
          <div className='container'>
            <h2 className='container-head'>сервер PHP</h2>
            <div className='container-body'>
              <div className='container-item'>
                <Tester
                  name={allUserFakePhp.title as string}
                  method={allUserFakePhp.method as TMethod}
                  url={allUserFakePhp.url as string}
                />
                <Tester
                  name={userAddFakePhp.title as string}
                  method={userAddFakePhp.method as TMethod}
                  url={userAddFakePhp.url as string}
                  data={newUser}
                />
                <Tester
                  name={userDataFakePhp.title as string}
                  method={userDataFakePhp.method as TMethod}
                  url={userDataFakePhp.url as string}
                />
                <Tester
                  name={userEditFakePhp.title as string}
                  method={userEditFakePhp.method as TMethod}
                  url={userEditFakePhp.url as string}
                  data={{ age: 35 }}
                />
                <Tester
                  name={userRemoveFakePhp.title as string}
                  method={userRemoveFakePhp.method as TMethod}
                  url={userRemoveFakePhp.url as string}
                />
              </div>
              <div className='container-item'>
                <Tester
                  name={allUserPhp.title as string}
                  method={allUserPhp.method as TMethod}
                  url={allUserPhp.url as string}
                />
                <Tester
                  name={userAddPhp.title as string}
                  method={userAddPhp.method as TMethod}
                  url={userAddPhp.url as string}
                  data={newUser}
                />
                <Tester
                  name={userDataPhp.title as string}
                  method={userDataPhp.method as TMethod}
                  url={userDataPhp.url as string}
                />
                <Tester
                  name={userEditPhp.title as string}
                  method={userEditPhp.method as TMethod}
                  url={userEditPhp.url as string}
                  data={{ age: 35 }}
                />
                <Tester
                  name={userRemovePhp.title as string}
                  method={userRemovePhp.method as TMethod}
                  url={userRemovePhp.url as string}
                />
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
