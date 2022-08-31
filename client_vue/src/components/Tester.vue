<template>
  <div class="content">
    <h3>{{ name }}</h3>
    <div><b>{method}</b> {url}</div>
    <div>
      <button class="btn_send">ЗАПРОС</button> Результат:
      <!-- <Ind state={result} /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tester',
  props: {
    name: String,
    // method: String,
    // url: String,
    // data: Object,
    // name: {
    //   type: String,
    //   default: 'title...'
    // }
  },
}
</script>

<style>
.content {
  padding-left: 5%;
  background-color: aliceblue;
}

.btn_send {
  color: whitesmoke;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 10px;
  letter-spacing: 0.05em;
  border: 1px solid black;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #010f23;
  transition: all 0.22s;
}

.btn_send:hover {
  cursor: pointer;
  opacity: 0.8;
}

.btn_send:disabled {
  cursor: not-allowed;
  opacity: 1 !important;
  background: #bebebe !important;
  border-color: #ddd !important;
  color: #999 !important;
}

.btn_send:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}
</style>
