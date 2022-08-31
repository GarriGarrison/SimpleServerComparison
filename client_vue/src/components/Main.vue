<template>
  <main>
    <div class="container">
      <div class="container-head">
        <h2>сервер NodeJS</h2>
      </div>
      <div class="container-body">
        <div class="container-item">
          <Tester :name="title" />
          <!-- <Tester name="TTLE" /> -->
        </div>
        <div class="container-item"></div>
      </div>
    </div>

    <div class="container">
      <div class="container-head">
        <h2>сервер Python</h2>
      </div>
      <div class="container-body">
        <div class="container-item"></div>
        <div class="container-item"></div>
      </div>
    </div>

    <div class="container">
      <div class="container-head">
        <h2>сервер PHP</h2>
      </div>
      <div class="container-body">
        <div class="container-item"></div>
        <div class="container-item"></div>
      </div>
    </div>
  </main>
</template>

<script>
import Tester from './Tester.vue'
import {
  testAllUsersNode,
  testAllUsersFakeNode,
  testUserAddFakeNode,
  testUserDataFakeNode,
  testUserEditFakeNode,
  testUserRemoveFakeNode,
  testUserDataNode,
  testUserEditNode,
  testUserRemoveNode,
  testUserAddNode,
} from '../helpers/TestNode'

const newUser = {
  name: 'Oleg',
  age: 55,
  city: 'Xeron',
}

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

export default {
  name: 'Main',
  components: {
    Tester,
  },
  data() {
    return {
      title: allUserFakeNode.title,
    }
  },
}
</script>

<style>
main {
  min-height: 75vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  height: 30%;
  background: rgb(248, 252, 255);
}
.container + .container {
  margin-left: 1%;
}

.container-head {
  text-align: center;
}

.container-body {
  justify-content: left;
}

h2 {
  height: 0.5rem;
}
</style>
